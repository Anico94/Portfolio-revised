import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { navLinks, site } from '../data/site'
import ThemeToggle from './ThemeToggle.tsx'
import useActiveSection from '../hooks/useActiveSection'

const sectionIds = navLinks.map((link) => link.hash.slice(1))

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const activeSection = useActiveSection(sectionIds)
  const panelRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  // Solidify the bar once the page has moved, so it stays legible over content.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Any navigation closes the mobile panel.
  useEffect(() => setOpen(false), [location])

  // While the panel is open: lock the page behind it, close on Escape, and keep
  // Tab inside the panel.
  useEffect(() => {
    if (!open) return

    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
        return
      }

      if (event.key !== 'Tab' || !panelRef.current) return

      const focusable = panelRef.current.querySelectorAll<HTMLElement>('a[href], button')
      if (focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = overflow
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  const isCurrent = (hash: string) =>
    location.pathname === '/' && activeSection === hash.slice(1)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? 'border-custard/10 bg-shadow/85 border-b backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <Link
          to="/"
          className="flex items-center gap-2.5 text-base font-semibold"
          aria-label={`${site.name} — home`}
        >
          <span
            aria-hidden
            className="bg-emerald/15 text-emerald border-emerald/30 grid size-9 place-items-center rounded-lg border text-sm font-bold"
          >
            {site.initials}
          </span>
          <span className="text-custard hidden sm:inline">{site.name}</span>
        </Link>

        {/* Right-hand group. Kept in one flex box so the nav's justify-between
            still reads as "brand left, everything else right" now that there is
            more than one thing on the right. */}
        <div className="flex items-center gap-1 md:gap-2">
          {/* Desktop links */}
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.hash}>
                <Link
                  to={`/${link.hash}`}
                  aria-current={isCurrent(link.hash) ? 'true' : undefined}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isCurrent(link.hash)
                      ? 'text-emerald bg-emerald/10'
                      : 'text-custard/70 hover:text-custard hover:bg-custard/5'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Visible at every breakpoint, and outside the mobile panel below, so
              it stays one tap away and out of the panel's focus trap. */}
          <ThemeToggle />

          {/* Desktop CTA. A call to action rather than a nav destination, so it
              sits outside the list. */}
          <Link
            to="/#contact"
            className="bg-emerald text-shadow hover:bg-custard hidden rounded-lg px-4 py-2 text-sm font-semibold transition-colors md:inline-block"
          >
            Hire me
          </Link>

          {/* Mobile menu toggle */}
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="text-custard hover:bg-custard/10 grid size-11 place-items-center rounded-lg transition-colors md:hidden"
          >
            {open ? <X className="size-6" aria-hidden /> : <Menu className="size-6" aria-hidden />}
          </button>
        </div>

      </nav>

      {/* Mobile panel */}
      <div
        id="mobile-menu"
        ref={panelRef}
        hidden={!open}
        className="border-custard/10 bg-shadow/95 border-t backdrop-blur-md md:hidden"
      >
        <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
          {navLinks.map((link) => (
            <li key={link.hash}>
              <Link
                to={`/${link.hash}`}
                aria-current={isCurrent(link.hash) ? 'true' : undefined}
                className={`flex min-h-11 items-center rounded-lg px-3 text-base font-medium transition-colors ${
                  isCurrent(link.hash)
                    ? 'text-emerald bg-emerald/10'
                    : 'text-custard/80 hover:bg-custard/5'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Link
              to="/#contact"
              className="bg-emerald text-shadow flex min-h-11 items-center justify-center rounded-lg px-4 font-semibold"
            >
              Hire me
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
