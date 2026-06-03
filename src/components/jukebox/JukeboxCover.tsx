import { Logo } from "./JukeboxHero";

const bars = [44, 72, 100, 58, 88, 36, 66, 50];

interface Props {
  /** Height utility for the cover; defaults to the home-card size. */
  className?: string;
}

/**
 * White, on-brand cover for the Jukebox project card.
 * Calm by default; the equalizer dances and a soft blue glow blooms on
 * card hover (the parent Link carries the `group` class).
 */
export default function JukeboxCover({ className = "h-64 sm:h-80" }: Props) {
  return (
    <div className={`relative w-full overflow-hidden bg-white ${className}`}>
      {/* faint dotted grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: "radial-gradient(rgba(11,11,18,0.06) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      {/* brand glow on hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-[#3b6ef5]/15 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-violet-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
      />

      {/* brand + equalizer */}
      <div className="relative flex h-full flex-col items-center justify-center gap-5">
        <div className="flex items-end gap-[5px]">
          {bars.map((h, i) => (
            <span
              key={i}
              className="w-2 origin-bottom rounded-full bg-[#3b6ef5] transition-all duration-500 group-hover:animate-eq"
              style={{ height: `${h * 0.7}px`, animationDelay: `${i * 0.07}s` }}
            />
          ))}
        </div>
        <div className="flex items-center gap-2 transition-transform duration-500 group-hover:scale-105">
          <Logo className="h-7" barClass="bg-[#3b6ef5]" />
          <span className="text-3xl font-bold tracking-tight text-ink">Jukebox</span>
        </div>
        <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-neutral-400">
          Music as an asset class
        </span>
      </div>
    </div>
  );
}
