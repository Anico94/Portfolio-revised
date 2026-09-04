/**
 * Node ESM loader hook so a plain Node script can import src/data/projects.ts
 * without choking on its `import x from '../assets/foo.png'` lines — those
 * only resolve to a real URL string inside Vite's bundler. Here they just
 * need to *not crash*; scripts/prerender.ts only reads `project.slug`.
 */
const assetExtensions = /\.(png|jpe?g|webp|svg|gif|pdf|ico|woff2?)$/i

export async function resolve(specifier, context, nextResolve) {
  if (assetExtensions.test(specifier)) {
    return { url: `asset-stub:${specifier}`, shortCircuit: true }
  }
  return nextResolve(specifier, context)
}

export async function load(url, context, nextLoad) {
  if (url.startsWith('asset-stub:')) {
    return { format: 'module', source: 'export default ""', shortCircuit: true }
  }
  return nextLoad(url, context)
}
