/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Where the contact form POSTs. Unset = the form reports it is not wired up. */
  readonly VITE_CONTACT_ENDPOINT?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
