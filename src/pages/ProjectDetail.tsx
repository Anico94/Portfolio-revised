import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Check, ExternalLink } from 'lucide-react'
import { getAdjacentProjects, getProject } from '../data/projects'
import { site } from '../data/site'
import PlaceholderImage from '../components/PlaceholderImage'
import { GithubIcon } from '../components/BrandIcons'
import Reveal from '../components/Reveal'
import NotFound from './NotFound'

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = getProject(slug)

  useEffect(() => {
    if (project) document.title = `${project.title} — ${site.name}`
  }, [project])

  // An unknown slug is a genuine 404, not an empty case study.
  if (!project) return <NotFound />

  const { previous, next } = getAdjacentProjects(project.slug)

  return (
    <article className="px-5 pt-28 pb-16 sm:px-8 sm:pt-32 sm:pb-20">
      <div className="mx-auto w-full max-w-4xl">
        <Reveal>
          <Link
            to="/#projects"
            className="text-custard/60 hover:text-emerald mb-8 inline-flex items-center gap-2 text-sm font-medium transition-colors"
          >
            <ArrowLeft className="size-4" aria-hidden />
            Back to projects
          </Link>

          <p className="text-emerald text-xs font-semibold tracking-[0.2em] uppercase">
            {project.year} · {project.role}
            {project.company && ` · ${project.company}`}
          </p>
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl">{project.title}</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed sm:text-lg">{project.summary}</p>

          <ul className="mt-6 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="border-custard/10 bg-spruce/30 text-custard/75 rounded-full border px-3 py-1 text-xs"
              >
                {tag}
              </li>
            ))}
          </ul>

          {(project.liveUrl || project.repoUrl) && (
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald text-shadow hover:bg-custard inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-6 font-semibold transition-colors"
                >
                  <ExternalLink className="size-4" aria-hidden />
                  Visit live site
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-custard/20 text-custard hover:border-emerald hover:text-emerald inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border px-6 font-semibold transition-colors"
                >
                  <GithubIcon className="size-4" />
                  View source
                </a>
              )}
            </div>
          )}
        </Reveal>

        <Reveal delay={80}>
          <div className="surface mt-10 p-3">
            {project.cover.src ? (
              <img
                src={project.cover.src}
                alt={project.cover.label}
                style={{ aspectRatio: project.cover.ratio }}
                className={`w-full rounded-xl object-cover ${project.cover.focus === 'top' ? 'object-top' : ''}`}
              />
            ) : (
              <PlaceholderImage label={project.cover.label} ratio={project.cover.ratio} />
            )}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-12 space-y-4 text-base leading-relaxed">
            <h2 className="text-2xl">Overview</h2>
            {project.body.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="[&_a]:text-emerald [&_a]:underline [&_a]:underline-offset-2"
                // Body copy is authored in src/data/projects.ts, not user input — safe to render as HTML.
                dangerouslySetInnerHTML={{ __html: paragraph }}
              />
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="surface mt-10 p-6 sm:p-8">
            <h2 className="text-xl">Highlights</h2>
            <ul className="mt-4 space-y-3">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3 text-sm leading-relaxed">
                  <Check className="text-emerald mt-0.5 size-4 shrink-0" aria-hidden />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {project.gallery.length > 0 && (
          <Reveal delay={120}>
            <div className="mt-12">
              <h2 className="text-2xl">Gallery</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {project.gallery.map((image) => (
                  <PlaceholderImage key={image.label} label={image.label} ratio={image.ratio} />
                ))}
              </div>
            </div>
          </Reveal>
        )}

        <nav
          aria-label="More projects"
          className="border-custard/10 mt-14 grid gap-3 border-t pt-8 sm:grid-cols-2"
        >
          {previous && (
            <Link
              to={`/projects/${previous.slug}`}
              className="surface hover:border-emerald/40 group p-5 transition-colors"
            >
              <span className="text-custard/50 flex items-center gap-1.5 text-xs tracking-wide uppercase">
                <ArrowLeft className="size-3.5" aria-hidden />
                Previous
              </span>
              <span className="text-custard group-hover:text-emerald mt-1.5 block font-semibold transition-colors">
                {previous.title}
              </span>
            </Link>
          )}
          {next && (
            <Link
              to={`/projects/${next.slug}`}
              className="surface hover:border-emerald/40 group p-5 transition-colors sm:text-right"
            >
              <span className="text-custard/50 flex items-center gap-1.5 text-xs tracking-wide uppercase sm:justify-end">
                Next
                <ArrowRight className="size-3.5" aria-hidden />
              </span>
              <span className="text-custard group-hover:text-emerald mt-1.5 block font-semibold transition-colors">
                {next.title}
              </span>
            </Link>
          )}
        </nav>
      </div>
    </article>
  )
}
