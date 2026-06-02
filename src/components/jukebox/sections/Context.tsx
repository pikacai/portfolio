import {
  Check,
  ChevronLeft,
  Play,
  SkipBack,
  SkipForward,
  Shuffle,
  Repeat,
  ArrowUp,
  Music2,
  FileText,
} from "lucide-react";
import Reveal from "../../fx/Reveal";
import { Logo } from "../JukeboxHero";

const platforms = [
  { name: "Jukebox", color: "#3b6ef5", active: true },
  { name: "Fidelity Investment", color: "#3aa655" },
  { name: "Robinhood", color: "#c9f23a" },
  { name: "Webull", color: "#1f4fd1" },
  { name: "Etoro", color: "#3aa655" },
];

const eqBars = [0, 0.15, 0.3, 0.45, 0.2, 0.35];

const cardHover =
  "transition-transform duration-300 hover:-translate-y-1";

export default function Context() {
  return (
    <section className="relative overflow-hidden bg-[#06060a] px-4 py-20 sm:px-6 sm:py-28">
      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-[#3b6ef5]/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-violet-600/15 blur-[100px]"
      />

      <Reveal className="relative mx-auto mb-14 max-w-3xl text-center text-white">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white/40">
          The context
        </span>
        <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-[2.6rem]">
          A culture obsessed with music — and the people who want to{" "}
          <span className="text-[#6b9bff]">own a piece of it</span>
        </h2>
      </Reveal>

      <div className="relative mx-auto grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-2">
        {/* Trading platform selector */}
        <Reveal className="md:row-span-2">
          <div className={`rounded-3xl bg-white p-5 shadow-[0_30px_70px_-25px_rgba(0,0,0,0.6)] ${cardHover}`}>
            <div className="mb-4 flex items-center gap-3">
              <ChevronLeft className="h-5 w-5 text-neutral-500" />
              <span className="text-lg font-semibold text-neutral-900">
                Trading platform
              </span>
            </div>
            <div className="space-y-1">
              {platforms.map((p) => (
                <div
                  key={p.name}
                  className={`flex items-center gap-3 rounded-2xl px-3 py-3 transition-colors ${
                    p.active ? "bg-blue-50" : "hover:bg-neutral-50"
                  }`}
                >
                  <span
                    className="grid h-9 w-9 place-items-center rounded-full text-white shadow-sm"
                    style={{ background: p.color }}
                  >
                    {p.active ? (
                      <Logo className="h-3.5" />
                    ) : (
                      <span className="text-xs font-bold">{p.name[0]}</span>
                    )}
                  </span>
                  <span className="flex-1 font-medium text-neutral-800">
                    {p.name}
                  </span>
                  {p.active && <Check className="h-5 w-5 text-[#3b6ef5]" />}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Now playing */}
        <Reveal>
          <div className={`relative flex h-full min-h-[260px] flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#27486f] via-[#1a2c44] to-[#0f1726] p-6 ${cardHover}`}>
            <div
              aria-hidden
              className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-sky-400/20 blur-3xl"
            />
            <div className="relative flex items-start justify-between">
              <span className="rounded-lg bg-white/10 px-3 py-1 text-xs font-medium text-white/80">
                Now playing
              </span>
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-white/70">
                <Music2 className="h-5 w-5" />
              </span>
            </div>

            <div className="relative flex items-center gap-4">
              {/* album + equalizer */}
              <div className="relative grid h-16 w-16 shrink-0 place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-fuchsia-500 to-indigo-600">
                <span className="flex items-end gap-[3px]">
                  {eqBars.map((d, i) => (
                    <span
                      key={i}
                      className="h-6 w-[3px] origin-bottom rounded-full bg-white/90 animate-eq"
                      style={{ animationDelay: `${d}s` }}
                    />
                  ))}
                </span>
              </div>
              <div className="flex flex-1 items-center justify-center gap-5 text-white">
                <Shuffle className="h-4 w-4 opacity-60" />
                <SkipBack className="h-5 w-5" />
                <span className="grid h-12 w-12 place-items-center rounded-full bg-white text-[#1a2738] shadow-lg">
                  <Play className="h-5 w-5 fill-current" />
                </span>
                <SkipForward className="h-5 w-5" />
                <Repeat className="h-4 w-4 opacity-60" />
              </div>
            </div>

            {/* progress */}
            <div className="relative">
              <div className="h-1 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[42%] rounded-full bg-white/80" />
              </div>
              <p className="mt-3 text-center text-xs text-white/50">
                Streaming behaviour drives royalty value
              </p>
            </div>
          </div>
        </Reveal>

        {/* Asset card */}
        <Reveal>
          <div className={`flex h-full items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-5 ${cardHover} hover:border-white/20`}>
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl bg-gradient-to-br from-violet-400 to-fuchsia-500 ring-1 ring-white/20">
              <span className="absolute bottom-2 left-2 flex items-end gap-[2px]">
                {[0, 0.2, 0.1].map((d, i) => (
                  <span
                    key={i}
                    className="h-4 w-[3px] origin-bottom rounded-full bg-white/70 animate-eq"
                    style={{ animationDelay: `${d}s` }}
                  />
                ))}
              </span>
            </div>
            <div className="flex-1">
              <span className="inline-block rounded-md bg-white/10 px-2 py-0.5 text-[11px] font-medium text-white/70">
                Yield · 12%
              </span>
              <p className="mt-2 text-[11px] text-white/40">
                Song Recording · Production
              </p>
              <p className="text-base font-semibold text-white">SOUR</p>
              <p className="text-xs text-white/50">Olivia Rodrigo</p>
              <div className="mt-2 flex items-center gap-3">
                <span className="text-sm font-semibold text-white">890K</span>
                <span className="flex items-center text-xs text-emerald-400">
                  <ArrowUp className="h-3 w-3" />
                  6.43%
                </span>
                {/* sparkline */}
                <svg viewBox="0 0 80 24" className="h-5 w-20">
                  <polyline
                    points="0,18 12,16 24,19 36,10 48,13 60,6 72,9 80,4"
                    fill="none"
                    stroke="#34d399"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Research doc */}
        <Reveal className="md:col-span-2">
          <div className={`flex items-start gap-5 rounded-3xl bg-white p-6 shadow-[0_30px_70px_-25px_rgba(0,0,0,0.6)] ${cardHover}`}>
            <div className="relative grid h-24 w-24 shrink-0 place-items-center overflow-hidden rounded-2xl bg-neutral-900 text-white">
              <FileText className="relative z-10 h-7 w-7" />
              <svg viewBox="0 0 96 96" className="absolute inset-0 opacity-60">
                <defs>
                  <linearGradient id="wave" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#3b6ef5" />
                    <stop offset="50%" stopColor="#af16f4" />
                    <stop offset="100%" stopColor="#ff7535" />
                  </linearGradient>
                </defs>
                {[20, 38, 56, 74].map((y, i) => (
                  <path
                    key={i}
                    d={`M0,${y} C24,${y - 14} 48,${y + 14} 96,${y - 6}`}
                    fill="none"
                    stroke="url(#wave)"
                    strokeWidth="2"
                  />
                ))}
              </svg>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
                Equity Research · 2024
              </p>
              <h3 className="mt-1 text-xl font-bold text-neutral-900">
                Music as an emerging, monetisable asset class
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-neutral-500">
                Industry research points to a turning point for the music
                business — modernised royalty structures, artist-centric payment
                models, and new licensing frameworks are opening the door to
                retail investment.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
