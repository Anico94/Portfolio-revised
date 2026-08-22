import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Owns scroll position across navigations.
 *
 * A hash goes to that section; anything else starts at the top. Because nav
 * links are absolute ('/#about'), this makes them behave identically whether
 * you are already on the home page or coming back from a project page.
 */
export default function ScrollManager() {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
      return
    }

    // On a fresh load the target may not be mounted yet; retry next frame.
    const scrollToTarget = () => {
      const target = document.querySelector(hash)
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    const frame = requestAnimationFrame(scrollToTarget)
    return () => cancelAnimationFrame(frame)
    // `key` changes on every navigation, so re-clicking the current link re-scrolls.
  }, [pathname, hash, key])

  return null
}
