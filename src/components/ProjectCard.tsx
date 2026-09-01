import { Link } from 'react-router-dom'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import type { Project } from '../data/projects'
import PlaceholderImage from './PlaceholderImage'
import { GithubIcon } from './BrandIcons'

/**
 * A project summary card.
 *
 * The whole card is clickable via a stretched overlay on the title link rather
 * than by nesting the card in an <a> — nesting would put the live-site and
 * source links inside another anchor, which is invalid HTML. The overlay sits
 * below the icon buttons in the stacking order, so those still win a click.
 */
export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="surface group hover:border-emerald/40 relative flex h-full flex-col overflow-hidden transition-colors duration-300 focus-within:border-emerald/40">
      <div className="p-3 pb-0">
        {project.cover.src ? (
          <img
            src={project.cover.src}
            alt={project.cover.label}
            style={{ aspectRatio: project.cover.ratio }}
            className="border-custard/10 w-full rounded-xl border object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <PlaceholderImage
            label={project.cover.label}
            ratio={project.cover.ratio}
            className="transition-transform duration-500 group-hover:scale-[1.02]"
          />
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="text-lg leading-snug">
              <Link
                to={`/projects/${project.slug}`}
                className="group-hover:text-emerald transition-colors before:absolute before:inset-0 before:content-['']"
              >
                {project.title}
              </Link>
            </h3>
            <p className="text-custard/60 mt-1 text-sm">
              {project.year} · {project.role}
            </p>
          </div>

          {/* Above the stretched overlay so these links stay independently clickable. */}
          <div className="relative z-10 flex shrink-0 gap-1">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Visit live site"
                aria-label={`Visit the live site for ${project.title}`}
                className="text-custard/70 hover:bg-emerald/15 hover:text-emerald grid size-11 place-items-center rounded-lg transition-colors"
              >
                <ExternalLink className="size-[18px]" aria-hidden />
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="View source code"
                aria-label={`View the source code for ${project.title}`}
                className="text-custard/70 hover:bg-emerald/15 hover:text-emerald grid size-11 place-items-center rounded-lg transition-colors"
              >
                <GithubIcon className="size-[18px]" />
              </a>
            )}
          </div>
        </div>

        <p className="text-sm leading-relaxed">{project.tagline}</p>

        <ul className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="border-custard/10 bg-shadow/40 text-custard/70 rounded-full border px-2.5 py-1 text-xs"
            >
              {tag}
            </li>
          ))}
        </ul>

        <p className="text-emerald mt-1 flex items-center gap-1 text-sm font-medium">
          Case study
          <ArrowUpRight
            className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden
          />
        </p>
      </div>
    </article>
  )
}
