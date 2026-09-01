import { useCallback, useEffect, useState } from 'react'

export type Theme = 'dark' | 'light'

/** Must match the key read by the inline anti-flash script in index.html. */
const storageKey = 'theme'

/** Kept in sync with --color-shadow for each theme, for the browser chrome. */
const themeColors: Record<Theme, string> = {
  dark: '#181d27',
  light: '#f6f7ee',
}

/**
 * Owns the light/dark choice: which theme is active, and how to flip it.
 *
 * Dark is the default — we deliberately ignore prefers-color-scheme so every
 * first-time visitor gets the intended dark look, and light is opt-in.
 *
 * The initial value is read back off <html> rather than out of storage, because
 * the inline script in index.html has already applied the saved choice by the
 * time React mounts. Reading the DOM keeps the two in step instead of racing
 * them. Safe to touch document at render time here: the app is client-only.
 */
export default function useTheme(): { theme: Theme; toggleTheme: () => void } {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.dataset.theme === 'light' ? 'light' : 'dark',
  )

  useEffect(() => {
    // Dark leaves the attribute off entirely, so the default styles apply.
    if (theme === 'light') {
      document.documentElement.dataset.theme = 'light'
    } else {
      delete document.documentElement.dataset.theme
    }

    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', themeColors[theme])

    // Private browsing and blocked storage both throw; the theme still works,
    // it just will not survive a reload.
    try {
      localStorage.setItem(storageKey, theme)
    } catch {
      // ignored
    }
  }, [theme])

  const toggleTheme = useCallback(
    () => setTheme((current) => (current === 'dark' ? 'light' : 'dark')),
    [],
  )

  return { theme, toggleTheme }
}
