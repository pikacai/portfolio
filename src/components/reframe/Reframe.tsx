import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import {
  ArrowLeft,
  Star,
  Route,
  Eye,
  Wand2,
  TrendingDown,
  Gauge,
  Gift,
} from "lucide-react";
import Reveal from "../fx/Reveal";
import SectionExport from "../jukebox/sections/SectionExport";

const TEAL = "#1CA9C9";
const TEAL_DARK = "#0E7C97";

const highlights = [
  { icon: Route, text: "Streamlined User Flow" },
  { icon: Eye, text: "Enhanced Visual Cues" },
  { icon: Wand2, text: "Polished The Interface" },
];

const metrics = [
  { icon: TrendingDown, prefix: "~", value: 29, decimals: 0, suffix: "%", pct: 29, label: "Reduced drop-off rate" },
  { icon: Gauge, prefix: "~", value: 30, decimals: 0, suffix: "%", pct: 30, label: "Increased onboarding speed" },
  { icon: Star, prefix: "", value: 4.9, decimals: 1, suffix: "/5", pct: 98, label: "User reviews" },
];

/** Counts from 0 → value once the element scrolls into view. */
function CountUp({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
}: {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.3,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [inView, value]);
  return (
    <span ref={ref}>
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}


const decisions = [
  {
    problem: "“Is an ad cut in the middle?” · “Did I finish all the questions?”",
    fix: "Smoother and simpler flow",
    img: "/reframe/design1.png",
  },
  {
    problem: "Time consumed to find the right numbers",
    fix: "Optimized usability",
    img: "/reframe/design2.png",
  },
  {
    problem: "Weak text hierarchy",
    fix: "Enhanced visual design",
    img: "/reframe/design3.png",
  },
];


export default function Reframe() {
  return (
    <div className="overflow-hidden">
      <Link
        to="/"
        className="fixed left-4 top-20 z-40 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white/20"
      >
        <ArrowLeft className="h-4 w-4" />
        Projects
      </Link>

      {/* HERO */}
      <SectionExport dir="reframe" file="hero.png" alt="Reframe hero" bgClass="" imgClass="block w-full">
        <section
          className="relative overflow-hidden px-6 pb-16 pt-28 sm:pt-32"
          style={{ background: "linear-gradient(180deg, #D9EFFA 0%, #C5E4F3 100%)" }}
        >
          <div className="relative w-full lg:min-h-[580px]">
            {/* LEFT */}
            <div className="relative z-10 max-w-xl lg:py-12">
              <motion.img
                src="/reframe/reframe_logo.png"
                alt="Reframe logo"
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                className="mb-6 h-20 w-20 rounded-[1.4rem] shadow-[0_16px_34px_-12px_rgba(30,127,194,0.6)]"
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.08 }}
                className="inline-block rounded-[1.75rem] bg-white px-7 py-5 shadow-[0_24px_50px_-24px_rgba(30,80,130,0.4)]"
              >
                <h1 className="text-5xl font-black leading-[0.95] tracking-tight text-[#22344A] sm:text-6xl">
                  Onboarding
                  <br />
                  Flow <span className="align-middle">🎯</span>
                </h1>
              </motion.div>
              <motion.ul
                initial="hidden"
                animate="show"
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.25 } } }}
                className="mt-8 space-y-5"
              >
                {highlights.map((h) => (
                  <motion.li
                    key={h.text}
                    variants={{ hidden: { opacity: 0, x: -12 }, show: { opacity: 1, x: 0 } }}
                    className="flex items-center gap-4 text-xl font-semibold text-[#3a4a5e] sm:text-2xl"
                  >
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border-[3px]" style={{ borderColor: "#1E7FC2" }}>
                      <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#1E7FC2" }} />
                    </span>
                    {h.text}
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            {/* RIGHT — device mockup, bleeds off the top-right */}
            <motion.img
              src="/reframe/mockuphero.png"
              alt="Reframe app shown on two phones — 2,000,000+ users across 64 countries"
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
              className="pointer-events-none mx-auto mt-10 w-full max-w-xl lg:absolute lg:right-[-4%] lg:top-[-8%] lg:mt-0 lg:w-[64%] lg:max-w-none"
            />
          </div>

        </section>
      </SectionExport>

      {/* METRICS */}
      <section className="bg-white px-6 py-16 sm:py-20">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
          {metrics.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-3xl border border-ink/10 bg-white p-8 text-center shadow-soft transition-shadow duration-300 hover:shadow-lift"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: "rgba(28,169,201,0.18)" }}
                />
                <span
                  className="relative mx-auto grid h-14 w-14 place-items-center rounded-2xl text-white shadow-[0_12px_24px_-8px_rgba(28,169,201,0.7)] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3"
                  style={{ background: `linear-gradient(135deg, ${TEAL}, ${TEAL_DARK})` }}
                >
                  <Icon className="h-6 w-6" />
                </span>
                <p className="relative mt-5 bg-gradient-to-r from-[#1CA9C9] to-[#0E7C97] bg-clip-text text-5xl font-black tracking-tight text-transparent">
                  <CountUp value={m.value} decimals={m.decimals} prefix={m.prefix} suffix={m.suffix} />
                </p>
                <p className="relative mt-2 text-sm font-medium text-ink-muted">{m.label}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* WHAT IS */}
      <section className="bg-neutral-50 px-6 py-20 sm:py-28">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">What is Reframe?</h2>
          <p className="mt-8 text-2xl font-medium leading-snug text-ink sm:text-[2.3rem] sm:leading-[1.3]">
            A digital program designed to help individuals{" "}
            <span className="font-bold" style={{ color: TEAL_DARK }}>reduce alcohol consumption</span>{" "}
            through daily neuroscience-based content, in-app coaching, and community support.
          </p>
        </Reveal>
      </section>

      {/* PAIN POINTS */}
      <section className="bg-white px-6 py-20 sm:py-24">
        <Reveal className="mx-auto mb-10 max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-muted">Usability testing</span>
          <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">
            Similar pain points across <span style={{ color: TEAL_DARK }}>20+ users</span>
          </h2>
          <p className="mt-3 text-ink-muted">
            Across 20+ usability sessions, the same friction surfaced again and again —
            unclear value, missing guidance, and no sense of progress.
          </p>
        </Reveal>
        <Reveal className="mx-auto max-w-5xl">
          <img src="/reframe/painpoint.png" alt="Reframe pain points across 20+ users" loading="lazy" className="w-full" />
        </Reveal>
      </section>

      {/* JOURNEY MAPPING */}
      <section className="bg-neutral-50 px-6 py-20 sm:py-24">
        <Reveal className="mx-auto mb-8 max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-muted">Journey mapping</span>
          <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">Colorful journey mapping</h2>
          <p className="mt-3 text-ink-muted">
            I mapped every onboarding screen and color-coded it by emotion — green where
            the experience felt good, red where users got confused or dropped off.
          </p>
          <div className="mt-4 flex justify-center gap-6 text-sm font-medium">
            <span className="inline-flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-emerald-500" /> Positive / good</span>
            <span className="inline-flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-red-500" /> Confusing / disengaging</span>
          </div>
        </Reveal>
        <Reveal className="mx-auto max-w-6xl">
          <img src="/reframe/journeymapping.png" alt="Colorful journey mapping of the onboarding flow" loading="lazy" className="w-full" />
        </Reveal>
      </section>

      {/* KEY DESIGN DECISIONS */}
      <section className="bg-neutral-50 px-6 py-20 sm:py-24">
        <Reveal className="mx-auto mb-12 max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-muted">Iteration</span>
          <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">Key design decisions</h2>
          <p className="mt-3 text-ink-muted">
            I turned the sharpest user complaints into concrete fixes — simplifying the
            flow, speeding up input, and strengthening visual hierarchy.
          </p>
        </Reveal>
        <div className="mx-auto flex max-w-[1500px] flex-col gap-10">
          {decisions.map((d, i) => (
            <Reveal key={i} delay={(i % 3) * 0.06}>
              <img src={d.img} alt={d.fix} loading="lazy" className="w-full" />
            </Reveal>
          ))}
        </div>
      </section>

      {/* CLOSING REFLECTION */}
      <section className="bg-white px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <div
              className="relative overflow-hidden rounded-[2rem] p-8 text-white shadow-soft sm:p-12"
              style={{ background: `linear-gradient(150deg, ${TEAL} 0%, ${TEAL_DARK} 100%)` }}
            >
              <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
              <div aria-hidden className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
              <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-white/15">
                <Gift className="h-6 w-6" />
              </span>
              <p className="relative mt-6 text-2xl font-semibold leading-snug sm:text-[2rem] sm:leading-[1.3]">
                I learned that users do not care about product features as much as
                they care about how the product can{" "}
                <span className="underline decoration-white/40 decoration-2 underline-offset-4">improve their lives</span>.
                Successful onboarding focuses on communicating{" "}
                <span className="underline decoration-white/40 decoration-2 underline-offset-4">value, not features</span>,
                and helps users quickly understand what&rsquo;s in it for them.
              </p>
            </div>
          </Reveal>

          <Reveal className="mt-8">
            <p className="text-center text-ink-muted">
              And for longer onboarding flows, three things keep users moving:
            </p>
          </Reveal>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              { icon: Route, title: "Keep steps simple", desc: "Trim each step to its essential action." },
              { icon: Gauge, title: "Show progress", desc: "Let users see how far they've come." },
              { icon: Star, title: "Maintain engagement", desc: "Hold momentum until the payoff lands." },
            ].map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -6 }}
                  className="group rounded-3xl border border-ink/10 bg-white p-6 shadow-soft transition-shadow duration-300 hover:shadow-lift"
                >
                  <span
                    className="grid h-11 w-11 place-items-center rounded-2xl text-white transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3"
                    style={{ background: `linear-gradient(135deg, ${TEAL}, ${TEAL_DARK})` }}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-ink">{p.title}</h3>
                  <p className="mt-1 text-sm text-ink-muted">{p.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="bg-neutral-50 px-6 py-16 sm:py-20">
        <Reveal className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-3xl p-8 text-white shadow-soft" style={{ background: `linear-gradient(150deg, ${TEAL} 0%, ${TEAL_DARK} 100%)` }}>
            <p className="text-white/85">Reduced average time spent on the onboarding process</p>
            <p className="mt-6 text-6xl font-bold">30%</p>
          </div>
          <div className="flex flex-col justify-between rounded-3xl border border-ink/10 bg-white p-8 shadow-soft">
            <p className="text-ink-muted">
              “The first few minutes using the app made me feel supported — the onboarding
              wasn't overwhelming; it actually felt like the program was cheering me on.”
            </p>
            <div className="mt-6 flex items-end justify-between">
              <div className="flex" style={{ color: TEAL }}>
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
              </div>
              <p className="text-3xl font-bold" style={{ color: TEAL_DARK }}>2,829+</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* SHOWCASE */}
      <section className="bg-white px-6 pb-20 pt-16 sm:pt-20">
        <Reveal className="mx-auto mb-10 max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-muted">Final design</span>
          <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">The redesigned onboarding</h2>
          <p className="mt-3 text-ink-muted">
            The polished end-to-end flow — welcoming, value-first, and paced so users
            always know where they are.
          </p>
        </Reveal>
        <Reveal>
          <img src="/reframe/showcase.png" alt="Reframe redesigned onboarding screens" loading="lazy" className="block w-full" />
        </Reveal>
      </section>

      {/* BACK */}
      <section className="px-6 py-16">
        <Reveal className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-4 rounded-3xl border border-ink/10 bg-white p-7 shadow-soft">
          <p className="text-lg font-medium text-ink">Onboarding that meets users where they are.</p>
          <Link to="/" className="btn-ghost text-base">
            <ArrowLeft className="h-4 w-4" /> All projects
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
