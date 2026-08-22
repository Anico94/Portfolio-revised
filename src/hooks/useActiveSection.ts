import { useEffect, useState } from 'react'

/**
 * Tracks which section is currently under the top of the viewport, so the
 * navbar can mark the matching link as current.
 *
 * Returns an empty string when none of the ids are on the page (project detail
 * pages, 404), which correctly leaves every nav link unhighlighted.
 */
export default function useActiveSection(ids: readonly string[]): string {
  const [active, setActive] = useState('')

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null)

    if (sections.length === 0) {
      setActive('')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        // Several sections can be on screen at once; the one whose top edge is
        // highest but still past the navbar wins.
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (visible.length > 0) setActive(visible[0].target.id)
      },
      // Band just below the navbar: a section is "current" once its top passes it.
      { rootMargin: '-72px 0px -70% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [ids])

  return active
}
