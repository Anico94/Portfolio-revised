import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { site } from './src/data/site.ts'

/**
 * Keeps the static <title>/<meta description> in index.html (what a crawler
 * sees before any JS runs) in sync with src/data/site.ts, so that file never
 * drifts back to placeholder text as the real content changes.
 */
function syncSiteMeta(): Plugin {
  const description = `Portfolio of ${site.name} — ${site.role}. ${site.tagline}`
  return {
    name: 'sync-site-meta',
    transformIndexHtml(html) {
      return html
        .replace(/<title>.*?<\/title>/, `<title>${site.name} — ${site.role}</title>`)
        .replace(
          /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
          `<meta name="description" content="${description}" />`,
        )
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), syncSiteMeta()],
})
