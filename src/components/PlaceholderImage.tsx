import { ImageIcon } from 'lucide-react'

interface PlaceholderImageProps {
  /** Describes the image that belongs here. */
  label: string
  /** CSS aspect-ratio value, e.g. '16 / 9'. */
  ratio?: string
  className?: string
}

/**
 * Stands in for a project image until real artwork exists.
 *
 * Rendered locally rather than pulled from a placeholder service, so the site
 * works offline and never shows a broken image. Swap the whole component for an
 * <img> once you have screenshots.
 */
export default function PlaceholderImage({
  label,
  ratio = '16 / 9',
  className = '',
}: PlaceholderImageProps) {
  return (
    <div
      role="img"
      aria-label={`Placeholder: ${label}`}
      style={{ aspectRatio: ratio }}
      className={`border-custard/10 from-spruce/40 to-shadow/60 relative flex w-full items-center justify-center overflow-hidden rounded-xl border bg-gradient-to-br ${className}`}
    >
      {/* Diagonal hatching, so an empty slot reads as intentional. */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, var(--color-custard) 0 1px, transparent 1px 12px)',
        }}
      />
      <div className="relative flex flex-col items-center gap-2 px-4 text-center">
        <ImageIcon className="text-emerald/60 size-7" aria-hidden />
        <span className="text-custard/50 text-xs font-medium tracking-wide">{label}</span>
      </div>
    </div>
  )
}
