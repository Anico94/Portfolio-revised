import type { ReactNode } from 'react'
import Reveal from './Reveal'

interface SectionProps {
  /** Anchor target for the nav — must match the hash in data/site.ts. */
  id: string
  /** Small label above the heading. */
  eyebrow?: string
  title: string
  /** Optional intro paragraph under the heading. */
  intro?: string
  children: ReactNode
  className?: string
}

/**
 * Wrapper every home-page section uses, so spacing, headings and the
 * scroll offset under the fixed navbar stay consistent in one place.
 */
export default function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = '',
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`scroll-mt-20 px-5 py-8 sm:px-8 sm:py-12 lg:py-16 ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <div className="max-w-2xl">
            {eyebrow && (
              <p className="text-emerald mb-3 flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase">
                <span aria-hidden className="bg-emerald/50 h-px w-8" />
                {eyebrow}
              </p>
            )}
            <h2 id={`${id}-heading`} className="text-3xl sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            {intro && <p className="mt-4 text-base leading-relaxed sm:text-lg">{intro}</p>}
          </div>
        </Reveal>

        <div className="mt-10 sm:mt-12">{children}</div>
      </div>
    </section>
  )
}
