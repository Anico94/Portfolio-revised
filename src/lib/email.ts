import emailjs from '@emailjs/browser'

/**
 * Delivery for the contact form, via EmailJS. Configure the three VITE_EMAILJS_*
 * variables in `.env.local` — see `.env.example`.
 */

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

/** Null until all three variables are set — the form then says it is not connected. */
const config =
  serviceId && templateId && publicKey ? { serviceId, templateId, publicKey } : null

export const isEmailConfigured = config !== null

/** Thrown when a send is attempted too soon after the last one. Its message is shown to the visitor. */
export class ThrottleError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'ThrottleError'
  }
}

export interface ContactMessage {
  name: string
  email: string
  message: string
}

/** Minimum gap between sends, so a double-click cannot fire two emails. */
const throttleMs = 2000
let lastSentAt = 0

export async function sendContactEmail({ name, email, message }: ContactMessage): Promise<void> {
  if (!config) throw new Error('EmailJS is not configured.')

  const waitMs = throttleMs - (Date.now() - lastSentAt)
  if (waitMs > 0) {
    const seconds = Math.ceil(waitMs / 1000)
    throw new ThrottleError(
      `Please wait ${seconds} second${seconds === 1 ? '' : 's'} before sending another message.`,
    )
  }
  lastSentAt = Date.now()

  // Template variables — these names must match the placeholders in the EmailJS template.
  const templateParams = {
    userName: name.trim(),
    userEmail: email.trim(),
    message: message.trim(),
  }

  // publicKey is passed here rather than via emailjs.init(), so importing this
  // module has no side effects when the environment is unconfigured.
  await emailjs.send(config.serviceId, config.templateId, templateParams, {
    publicKey: config.publicKey,
  })
}
