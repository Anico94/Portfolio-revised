/**
 * Post-build step: snapshots every route's hydrated DOM into dist/, and writes
 * dist/sitemap.xml, dist/robots.txt and dist/_redirects from the same project list.
 *
 * The app itself stays a plain client-rendered SPA (see src/main.tsx) — this
 * only changes what a non-JS crawler sees when it requests a URL directly,
 * by replacing dist/index.html (and adding dist/projects/<slug>/index.html)
 * with the fully rendered page. A real browser still gets the same SPA and
 * takes over client-side routing after hydration, same as before.
 *
 * Run via `npm run build` (see package.json), after `vite build`.
 */
import { chromium } from 'playwright'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import http from 'node:http'
import { register } from 'node:module'
import type { AddressInfo } from 'node:net'
import { extname } from 'node:path'

try {
  process.loadEnvFile('.env.local')
} catch {
  // No .env.local — fine, VITE_SITE_URL falls back below.
}

// projects.ts imports project cover images, which only resolve inside Vite's
// bundler. Stub them out — this script only needs project.slug.
register('./asset-stub-loader.mjs', import.meta.url)
const { projects } = (await import('../src/data/projects.ts')) as typeof import('../src/data/projects.ts')

const siteUrl = (process.env.VITE_SITE_URL ?? 'https://example.com').replace(/\/$/, '')
const distDir = new URL('../dist/', import.meta.url)

const routes = ['/', ...projects.map((project) => `/projects/${project.slug}`)]

const mimeTypes: Record<string, string> = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.json': 'application/json',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
}

/** Serves the built dist/ folder, falling back to index.html for unbuilt routes (SPA behavior). */
function startStaticServer() {
  const server = http.createServer((req, res) => {
    void (async () => {
      const pathname = new URL(req.url ?? '/', 'http://localhost').pathname
      const relativePath = pathname === '/' ? 'index.html' : pathname.replace(/^\//, '')

      try {
        const data = await readFile(new URL(relativePath, distDir))
        res.writeHead(200, { 'Content-Type': mimeTypes[extname(relativePath)] ?? 'application/octet-stream' })
        res.end(data)
      } catch {
        const fallback = await readFile(new URL('index.html', distDir))
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(fallback)
      }
    })()
  })

  return new Promise<{ port: number; close: () => Promise<void> }>((resolve) => {
    server.listen(0, () => {
      const { port } = server.address() as AddressInfo
      resolve({ port, close: () => new Promise((res) => server.close(() => res())) })
    })
  })
}

async function writeSitemapAndRobots() {
  const urls = routes.map((route) => `  <url><loc>${siteUrl}${route}</loc></url>`).join('\n')
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
  await writeFile(new URL('sitemap.xml', distDir), sitemap)

  const robots = `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`
  await writeFile(new URL('robots.txt', distDir), robots)
}

/**
 * Netlify (and most static hosts) resolve pretty URLs like /projects/foo to
 * /projects/foo/index.html implicitly, but that's host behavior we shouldn't
 * rely on blindly — this makes it explicit and deterministic. Overwrites the
 * `/*  /index.html  200` rule Vite copied from public/_redirects with the
 * same catch-all plus one exact rule per prerendered route, evaluated first.
 */
async function writeRedirects() {
  const exactRules = routes
    .filter((route) => route !== '/')
    .map((route) => `${route}  ${route}/index.html  200`)
    .join('\n')
  const redirects = `${exactRules}\n/*  /index.html  200\n`
  await writeFile(new URL('_redirects', distDir), redirects)
}

async function main() {
  const server = await startStaticServer()
  const browser = await chromium.launch()
  const page = await browser.newPage()

  for (const route of routes) {
    await page.goto(`http://localhost:${server.port}${route}`, { waitUntil: 'networkidle' })
    await page.waitForSelector('footer')
    const html = await page.content()

    const outUrl =
      route === '/' ? new URL('index.html', distDir) : new URL(`.${route}/index.html`, distDir)
    await mkdir(new URL('.', outUrl), { recursive: true })
    await writeFile(outUrl, html)
    console.log(`Prerendered ${route}`)
  }

  await writeSitemapAndRobots()
  await writeRedirects()
  console.log(`Wrote sitemap.xml, robots.txt and _redirects for ${siteUrl}`)

  await browser.close()
  await server.close()
}

main().catch((error: unknown) => {
  console.error(error)
  process.exit(1)
})
