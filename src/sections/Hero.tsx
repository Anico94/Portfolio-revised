import { Link } from 'react-router-dom'
import { ArrowRight, MapPin } from 'lucide-react'
import { site } from '../data/site'
import PlaceholderImage from '../components/PlaceholderImage'
import Reveal from '../components/Reveal'

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="home-heading"
      className="scroll-mt-20 px-5 pt-28 pb-16 sm:px-8 sm:pt-36 sm:pb-20 lg:pt-44"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <Reveal>
          <p className="border-emerald/30 bg-emerald/10 text-emerald mb-5 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium">
            <span aria-hidden className="bg-emerald size-1.5 animate-pulse rounded-full" />
            Available for new work
          </p>

          <h1 id="home-heading" className="text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">
            {site.name}
            <span className="text-emerald block">{site.role}</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed sm:text-lg">{site.tagline}</p>

          <p className="text-custard/60 mt-4 flex items-center gap-1.5 text-sm">
            <MapPin className="size-4" aria-hidden />
            {site.location}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/#projects"
              className="bg-emerald text-shadow hover:bg-custard inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-6 font-semibold transition-colors"
            >
              View my work
              <ArrowRight className="size-4" aria-hidden />
            </Link>
            <Link
              to="/#contact"
              className="border-custard/20 text-custard hover:border-emerald hover:text-emerald inline-flex min-h-12 items-center justify-center rounded-xl border px-6 font-semibold transition-colors"
            >
              Get in touch
            </Link>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="surface p-3">
            <PlaceholderImage label="Portrait or hero visual" ratio="4 / 5" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
