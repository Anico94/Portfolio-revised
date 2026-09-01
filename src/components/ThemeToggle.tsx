import { Moon, Sun } from 'lucide-react'
import useTheme from '../hooks/useTheme.ts'

interface ThemeToggleProps {
  className?: string
}

/**
 * Sun/moon button that flips the site between the dark and light palettes.
 *
 * Render this exactly once — it holds the theme in local state, so a second
 * instance would keep its own copy and drift out of sync with the first.
 *
 * The icon shows the theme you would switch *to*, which is also what the
 * accessible name announces.
 */
export default function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme()
  const label = theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className={`text-custard hover:bg-custard/10 grid size-11 place-items-center rounded-lg transition-colors ${className}`}
    >
      {theme === 'dark' ? (
        <Sun className="size-5" aria-hidden />
      ) : (
        <Moon className="size-5" aria-hidden />
      )}
    </button>
  )
}
