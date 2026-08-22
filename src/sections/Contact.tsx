import { useId, useState, type FormEvent } from 'react'
import { CircleAlert, CircleCheck, Loader2, Mail, Send } from 'lucide-react'
import { site } from '../data/site'
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons'
import Reveal from '../components/Reveal'
import Section from '../components/Section'

interface Fields {
  name: string
  email: string
  message: string
}

type Status =
  | { state: 'idle' }
  | { state: 'sending' }
  | { state: 'sent'; message: string }
  | { state: 'error'; message: string }

const empty: Fields = { name: '', email: '', message: '' }

/** Set VITE_CONTACT_ENDPOINT in .env.local to start delivering messages. */
const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined

function validate(fields: Fields): Partial<Record<keyof Fields, string>> {
  const errors: Partial<Record<keyof Fields, string>> = {}
  if (!fields.name.trim()) errors.name = 'Please tell me your name.'
  if (!fields.email.trim()) errors.email = 'Please add an email address.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim()))
    errors.email = 'That email address does not look right.'
  if (fields.message.trim().length < 10)
    errors.message = 'A little more detail helps — at least 10 characters.'
  return errors
}

export default function Contact() {
  const id = useId()
  const [fields, setFields] = useState<Fields>(empty)
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({})
  const [status, setStatus] = useState<Status>({ state: 'idle' })

  const update = (key: keyof Fields) => (event: { target: { value: string } }) => {
    setFields((current) => ({ ...current, [key]: event.target.value }))
    // Clear a field's error as soon as the user starts fixing it.
    setErrors((current) => ({ ...current, [key]: undefined }))
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const nextErrors = validate(fields)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      setStatus({ state: 'idle' })
      return
    }

    // No endpoint configured yet: say so plainly instead of failing a fetch.
    if (!endpoint) {
      setStatus({
        state: 'sent',
        message:
          'Looks good — but this form is not connected to a mail service yet. See the README to wire it up, or email me directly below.',
      })
      return
    }

    setStatus({ state: 'sending' })
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(fields),
      })
      if (!response.ok) throw new Error(`Request failed with ${response.status}`)

      setFields(empty)
      setStatus({ state: 'sent', message: 'Thanks — your message is on its way. I will reply soon.' })
    } catch {
      setStatus({
        state: 'error',
        message: `Something went wrong sending that. Please email me at ${site.email} instead.`,
      })
    }
  }

  const sending = status.state === 'sending'
  const fieldClass =
    'w-full rounded-xl border bg-shadow/50 px-4 py-3 text-custard placeholder:text-custard/35 transition-colors focus:border-emerald disabled:opacity-60'

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something"
      intro="Have a project, a role, or a question? Send me a note and I will get back to you."
    >
      <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
        <Reveal>
          <form onSubmit={handleSubmit} noValidate className="surface space-y-4 p-6 sm:p-8">
            <div>
              <label htmlFor={`${id}-name`} className="text-custard mb-1.5 block text-sm font-medium">
                Name
              </label>
              <input
                id={`${id}-name`}
                name="name"
                type="text"
                autoComplete="name"
                value={fields.name}
                onChange={update('name')}
                disabled={sending}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? `${id}-name-error` : undefined}
                placeholder="Ada Lovelace"
                className={`${fieldClass} ${errors.name ? 'border-red-400/70' : 'border-custard/15'}`}
              />
              {errors.name && (
                <p id={`${id}-name-error`} className="mt-1.5 text-sm text-red-300">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor={`${id}-email`} className="text-custard mb-1.5 block text-sm font-medium">
                Email
              </label>
              <input
                id={`${id}-email`}
                name="email"
                type="email"
                autoComplete="email"
                value={fields.email}
                onChange={update('email')}
                disabled={sending}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? `${id}-email-error` : undefined}
                placeholder="ada@example.com"
                className={`${fieldClass} ${errors.email ? 'border-red-400/70' : 'border-custard/15'}`}
              />
              {errors.email && (
                <p id={`${id}-email-error`} className="mt-1.5 text-sm text-red-300">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor={`${id}-message`}
                className="text-custard mb-1.5 block text-sm font-medium"
              >
                Message
              </label>
              <textarea
                id={`${id}-message`}
                name="message"
                rows={5}
                value={fields.message}
                onChange={update('message')}
                disabled={sending}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? `${id}-message-error` : undefined}
                placeholder="Tell me about what you are working on…"
                className={`${fieldClass} resize-y ${
                  errors.message ? 'border-red-400/70' : 'border-custard/15'
                }`}
              />
              {errors.message && (
                <p id={`${id}-message-error`} className="mt-1.5 text-sm text-red-300">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={sending}
              className="bg-emerald text-shadow hover:bg-custard inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl px-6 font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
            >
              {sending ? (
                <>
                  <Loader2 className="size-4 animate-spin" aria-hidden />
                  Sending…
                </>
              ) : (
                <>
                  Send message
                  <Send className="size-4" aria-hidden />
                </>
              )}
            </button>

            {/* Announced to screen readers whenever the outcome changes. */}
            <div role="status" aria-live="polite">
              {status.state === 'sent' && (
                <p className="border-emerald/30 bg-emerald/10 text-custard flex gap-2.5 rounded-xl border p-4 text-sm">
                  <CircleCheck className="text-emerald mt-0.5 size-5 shrink-0" aria-hidden />
                  {status.message}
                </p>
              )}
              {status.state === 'error' && (
                <p className="flex gap-2.5 rounded-xl border border-red-400/30 bg-red-400/10 p-4 text-sm text-red-100">
                  <CircleAlert className="mt-0.5 size-5 shrink-0 text-red-300" aria-hidden />
                  {status.message}
                </p>
              )}
            </div>
          </form>
        </Reveal>

        <Reveal delay={100}>
          <div className="space-y-3">
            <a
              href={`mailto:${site.email}`}
              className="surface hover:border-emerald/40 flex items-center gap-4 p-5 transition-colors"
            >
              <span className="bg-emerald/15 text-emerald grid size-11 shrink-0 place-items-center rounded-xl">
                <Mail className="size-5" aria-hidden />
              </span>
              <span className="min-w-0">
                <span className="text-custard block text-sm font-semibold">Email</span>
                <span className="text-custard/60 block truncate text-sm">{site.email}</span>
              </span>
            </a>

            <a
              href={site.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="surface hover:border-emerald/40 flex items-center gap-4 p-5 transition-colors"
            >
              <span className="bg-emerald/15 text-emerald grid size-11 shrink-0 place-items-center rounded-xl">
                <GithubIcon className="size-5" />
              </span>
              <span className="min-w-0">
                <span className="text-custard block text-sm font-semibold">GitHub</span>
                <span className="text-custard/60 block truncate text-sm">Code and side projects</span>
              </span>
            </a>

            <a
              href={site.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="surface hover:border-emerald/40 flex items-center gap-4 p-5 transition-colors"
            >
              <span className="bg-emerald/15 text-emerald grid size-11 shrink-0 place-items-center rounded-xl">
                <LinkedinIcon className="size-5" />
              </span>
              <span className="min-w-0">
                <span className="text-custard block text-sm font-semibold">LinkedIn</span>
                <span className="text-custard/60 block truncate text-sm">Work history and updates</span>
              </span>
            </a>

            <p className="text-custard/50 px-1 pt-2 text-sm leading-relaxed">
              Typical reply time is one to two working days. For anything urgent, email is the
              fastest way to reach me.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
