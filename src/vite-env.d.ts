/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** EmailJS service the contact form sends through. */
  readonly VITE_EMAILJS_SERVICE_ID?: string
  /** EmailJS template the contact form fills in ({{userName}}, {{userEmail}}, {{message}}). */
  readonly VITE_EMAILJS_TEMPLATE_ID?: string
  /** EmailJS public key. Safe to ship in the bundle. */
  readonly VITE_EMAILJS_PUBLIC_KEY?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
