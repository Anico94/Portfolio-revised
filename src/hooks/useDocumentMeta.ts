import { useEffect } from 'react'

interface DocumentMetaOptions {
  title: string
  description: string
  /** Path this page lives at, e.g. '/' or '/projects/orbit-analytics'. */
  path: string
  /** Absolute or site-relative image URL for og:image/twitter:image. Omit to skip. */
  image?: string
  /** Structured data (schema.org) object to embed as JSON-LD. Omit to skip. */
  jsonLd?: Record<string, unknown>
}

const siteUrl = (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, '')

function setMetaTag(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function setJsonLd(data: Record<string, unknown>) {
  let el = document.head.querySelector<HTMLScriptElement>('script[data-seo="jsonld"]')
  if (!el) {
    el = document.createElement('script')
    el.type = 'application/ld+json'
    el.dataset.seo = 'jsonld'
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

function removeJsonLd() {
  document.head.querySelector('script[data-seo="jsonld"]')?.remove()
}

/**
 * Sets document title plus description/canonical/Open Graph/Twitter tags (and,
 * optionally, a JSON-LD block) for the current page. Crawlers that execute JS —
 * and the build's prerender step, which snapshots the DOM after hydration — pick
 * these up; see scripts/prerender.ts.
 */
export default function useDocumentMeta({ title, description, path, image, jsonLd }: DocumentMetaOptions) {
  useEffect(() => {
    document.title = title

    const origin = siteUrl ?? window.location.origin
    const url = `${origin}${path}`

    setMetaTag('name', 'description', description)
    setCanonical(url)
    setMetaTag('property', 'og:title', title)
    setMetaTag('property', 'og:description', description)
    setMetaTag('property', 'og:url', url)
    setMetaTag('property', 'og:type', 'website')
    setMetaTag('name', 'twitter:card', image ? 'summary_large_image' : 'summary')
    setMetaTag('name', 'twitter:title', title)
    setMetaTag('name', 'twitter:description', description)

    if (image) {
      const absoluteImage = image.startsWith('http') ? image : `${origin}${image}`
      setMetaTag('property', 'og:image', absoluteImage)
      setMetaTag('name', 'twitter:image', absoluteImage)
    }

    if (jsonLd) setJsonLd(jsonLd)
    else removeJsonLd()
  }, [title, description, path, image, jsonLd])
}
