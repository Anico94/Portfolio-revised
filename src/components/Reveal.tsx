import { useEffect, useRef, useState, type ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  /** Stagger in milliseconds, for grids of cards. */
  delay?: number
  className?: string
}

/**
 * Fades and lifts its children in the first time they scroll into view.
 *
 * The animation itself is defined in index.css and is neutralised there by the
 * prefers-reduced-motion block; content is always rendered either way, so this
 * never hides anything from search engines or assistive tech.
 */
export default function Reveal({ children, delay = 0, className = '' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={visible ? { animationDelay: `${delay}ms` } : undefined}
      className={`${visible ? 'animate-reveal' : 'opacity-0'} ${className}`}
    >
      {children}
    </div>
  )
}
