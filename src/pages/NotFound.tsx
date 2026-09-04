import { Link, useLocation } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { site } from '../data/site'
import useDocumentMeta from '../hooks/useDocumentMeta'

export default function NotFound() {
  const { pathname } = useLocation()

  useDocumentMeta({
    title: `Page not found — ${site.name}`,
    description: `The page you're looking for doesn't exist. Browse ${site.name}'s projects and background instead.`,
    path: pathname,
  })

  return (
    <section className="grid min-h-[50vh] place-items-center px-5 py-20 text-center sm:px-8">
      <div>
        <p className="text-emerald text-6xl font-bold sm:text-7xl">404</p>
        <h1 className="mt-4 text-2xl sm:text-3xl">This page does not exist</h1>
        <p className="mx-auto mt-3 max-w-md text-base leading-relaxed">
          The link may be out of date, or the project you are looking for has moved.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="bg-emerald text-shadow hover:bg-custard inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-6 font-semibold transition-colors"
          >
            <ArrowLeft className="size-4" aria-hidden />
            Back home
          </Link>
          <Link
            to="/#projects"
            className="border-custard/20 text-custard hover:border-emerald hover:text-emerald inline-flex min-h-12 items-center justify-center rounded-xl border px-6 font-semibold transition-colors"
          >
            Browse projects
          </Link>
        </div>
      </div>
    </section>
  )
}
