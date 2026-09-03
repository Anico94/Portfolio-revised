import { Link } from 'react-router-dom'
import { FileText, Mail } from 'lucide-react'
import { navLinks, site } from '../data/site'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import resumeUrl from '../assets/Alex_Nicolaidis_Resume_2026.pdf'

export default function Footer() {
  return (
    <footer className="border-custard/10 mt-8 border-t px-5 py-10 sm:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <Link to="/" className="text-custard text-lg font-semibold">
            {site.name}
          </Link>
          <p className="text-custard/60 mt-1 max-w-xs text-sm">
            {site.role} · {site.location}
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm sm:grid-cols-1">
            {navLinks.map((link) => (
              <li key={link.hash}>
                <Link
                  to={`/${link.hash}`}
                  className="text-custard/70 hover:text-emerald transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex gap-2">
          <a
            href={`mailto:${site.email}`}
            aria-label="Email"
            title="Email"
            className="surface text-custard/70 hover:text-emerald grid size-11 place-items-center transition-colors"
          >
            <Mail className="size-5" aria-hidden />
          </a>
          <a
            href={site.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
            className="surface text-custard/70 hover:text-emerald grid size-11 place-items-center transition-colors"
          >
            <GithubIcon className="size-5" />
          </a>
          <a
            href={site.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
            className="surface text-custard/70 hover:text-emerald grid size-11 place-items-center transition-colors"
          >
            <LinkedinIcon className="size-5" />
          </a>
          <a
            href={resumeUrl}
            download
            aria-label="Resume"
            title="Resume"
            className="surface text-custard/70 hover:text-emerald grid size-11 place-items-center transition-colors"
          >
            <FileText className="size-5" aria-hidden />
          </a>
        </div>
      </div>

      <p className="text-custard/40 mx-auto mt-10 w-full max-w-6xl text-xs">
        © {new Date().getFullYear()} {site.name}. Built with React, Tailwind CSS and Vite.
      </p>
    </footer>
  )
}
