/**
 * The fixed page background.
 *
 * Mounted once in the app shell and never unmounted, so every section and every
 * route scrolls across one continuous surface. Purely decorative — hidden from
 * assistive tech and never interactive.
 */
export default function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 bg-shadow">
      {/* Soft colour blooms. */}
      <div className="bg-fern/25 absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full blur-[120px]" />
      <div className="bg-emerald/12 absolute top-1/3 -right-48 h-[36rem] w-[36rem] rounded-full blur-[140px]" />
      <div className="bg-spruce/35 absolute -bottom-56 left-1/4 h-[34rem] w-[34rem] rounded-full blur-[130px]" />

      {/* Faint dot grid for texture. */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(var(--color-custard) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Vignette keeps the edges dark so text stays readable over the blooms. */}
      <div className="from-shadow/80 via-shadow/20 to-shadow/90 absolute inset-0 bg-gradient-to-b" />
    </div>
  )
}
