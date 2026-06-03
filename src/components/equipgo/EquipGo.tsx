import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ScanLine,
  Nfc,
  BadgeCheck,
  Radio,
  ClipboardList,
  Flame,
  TriangleAlert,
  Check,
  Eye,
  Zap,
} from "lucide-react";
import Reveal from "../fx/Reveal";
import SectionExport from "../jukebox/sections/SectionExport";
import Testimonials from "./Testimonials";

const RED = "#E4002B";
const BLUE = "#1763E5";

const meta = [
  { label: "Role", value: "UX / Product Designer" },
  { label: "Timeline", value: "2025 – 2026" },
  { label: "Tools", value: "Figma · Maze" },
  { label: "Type", value: "Internal tool" },
];

const personas = [
  {
    name: "Jame M.",
    role: "EMT",
    img: "/equipgo/EMT.png",
    accent: BLUE,
    pains: [
      "Wastes time filling out paper logs.",
      "Equipment is often misplaced, making it hard to find.",
      "Doesn't want extra complexity in the daily workflow.",
    ],
    needs: [
      { text: "Fast, easy equipment check-in / check-out." },
      { text: "Mobile-friendly scan or tap experience." },
      { text: "Simple, efficient way to track equipment usage." },
    ],
  },
  {
    name: "Alexander Khalef",
    role: "Station Officer",
    img: "/equipgo/officer.png",
    accent: RED,
    pains: [
      "Hard to verify if all equipment was checked out / returned correctly.",
      "Paper logs get lost, and information is often incomplete.",
      "Delayed reporting of missing or damaged items.",
    ],
    needs: [
      { text: "Dashboard to track & confirm check-out / return in real time.", p: "P0" },
      { text: "Issue equipment to others.", p: "P0" },
      { text: "Report missing / broken equipment.", p: "P1" },
      { text: "Manage equipment with chip connection.", p: "P2" },
    ],
  },
];


const storyboard = [
  { icon: Flame, text: "Worried about losing a pricey radio" },
  { icon: Nfc, text: "Tap an NFC tag to assign & track" },
  { icon: ScanLine, text: "Scan a barcode to track assignment" },
  { icon: BadgeCheck, text: "No more lost radios!" },
];

const takeaways = [
  { n: "01", title: "Watch the real world", icon: Eye, text: "Observe users in their real environment — stations behave nothing like a clean prototype." },
  { n: "02", title: "Edge cases first", icon: TriangleAlert, text: "Design for edge cases early; the messy scenarios are where adoption is won or lost." },
  { n: "03", title: "Friction kills habit", icon: Zap, text: "Removing friction (a single tap) beats adding features when the goal is daily habit." },
];

export default function EquipGo() {
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
      <SectionExport dir="equipgo" file="EquipGoHero.png" alt="EquipGo hero" bgClass="" imgClass="block w-full">
        <section
          className="relative flex min-h-[80vh] items-center justify-center px-6 pt-28 text-white"
          style={{ background: `linear-gradient(150deg, ${RED} 0%, #B80020 100%)` }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
            style={{ backgroundImage: "radial-gradient(white 1px, transparent 1px)", backgroundSize: "20px 20px" }}
          />
          <div className="relative w-full max-w-4xl text-center">
            <motion.span
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm font-semibold tracking-wide backdrop-blur"
            >
              <Radio className="h-4 w-4" /> FDNY · Internal Tool
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05 }}
              className="text-6xl font-bold tracking-tight sm:text-7xl"
            >
              EquipGo
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}
              className="mx-auto mt-5 max-w-xl text-xl font-medium text-white/90 sm:text-2xl"
            >
              Save $1M+ by reducing lost equipment.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.28 }}
              className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4"
            >
              {meta.map((m) => (
                <div key={m.label} className="rounded-2xl border border-white/20 bg-white/10 p-4 text-left backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/70">{m.label}</p>
                  <p className="mt-1 font-semibold">{m.value}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      </SectionExport>

      {/* WHAT IS */}
      <section className="bg-white px-6 py-20 sm:py-28">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">What is EquipGo?</h2>
          <p className="mt-8 text-2xl font-medium leading-snug text-ink sm:text-[2.3rem] sm:leading-[1.3]">
            An internal FDNY app to{" "}
            <span className="font-bold" style={{ color: RED }}>track and manage equipment</span>{" "}
            efficiently — streamlined, reliable, and built for the field.
          </p>
        </Reveal>
      </section>

      {/* TIMEFRAME */}
      <section className="bg-white px-6 pb-8 sm:pb-12">
        <Reveal className="mx-auto max-w-5xl">
          <img
            src="/equipgo/timeframe.png"
            alt="EquipGo project timeframe"
            loading="lazy"
            className="w-full"
          />
        </Reveal>
      </section>

      {/* PROBLEM / TIMELINE */}
      <section className="bg-neutral-50 px-6 py-20 sm:py-24">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-muted">The problem</span>
          <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">
            The story started with losing <span style={{ color: RED }}>$6,000 × n</span> 🔥
          </h2>
          <p className="mt-4 text-ink-muted">
            Lost and unreturned equipment quietly drains budgets across stations. We set out to find — and fix — where it disappears.
          </p>
        </Reveal>

        {/* Frustration scene */}
        <Reveal className="mx-auto mt-10 max-w-5xl">
          <img
            src="/equipgo/Painpoint.png"
            alt="Frontline responder unsure where equipment went — lost radios, thermal cameras, and SCBA masks"
            loading="lazy"
            className="w-full"
          />
        </Reveal>
      </section>

      {/* CURRENT SOLUTION */}
      <section className="bg-white px-6 py-20 sm:py-24">
        <Reveal className="mx-auto mb-10 max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-muted">Today</span>
          <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">Current solution: pen &amp; paper</h2>
          <p className="mt-3 text-ink-muted">
            Stations rely on handwritten logs, sign-out sheets, and whiteboards — slow,
            error-prone, and impossible to audit in real time.
          </p>
        </Reveal>
        <Reveal className="mx-auto max-w-5xl">
          <img src="/jukebox/currentsolution.png" alt="EquipGo current solution — paper logs, sign-out sheets, and whiteboards" loading="lazy" className="w-full" />
        </Reveal>
      </section>

      {/* PERSONAS */}
      <section className="bg-neutral-50 px-6 py-20 sm:py-28">
        <Reveal className="mx-auto mb-12 max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-muted">Who we serve</span>
          <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">👋 Say hello to our personas</h2>
        </Reveal>
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-7 md:grid-cols-2">
          {personas.map((p, idx) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-ink/[0.08] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
            >
              {/* accent top bar */}
              <div className="h-1.5 w-full" style={{ background: p.accent }} />

              <div className="p-7">
                {/* header */}
                <div className="flex items-center gap-4">
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    className="h-16 w-16 shrink-0 rounded-2xl object-cover ring-2 ring-white transition-transform duration-500 group-hover:scale-105"
                    style={{ boxShadow: `0 10px 24px -10px ${p.accent}99`, outline: `2px solid ${p.accent}33` }}
                  />
                  <div>
                    <p className="text-lg font-bold text-ink">{p.name}</p>
                    <span
                      className="mt-1.5 inline-block rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider"
                      style={{ background: `${p.accent}14`, color: p.accent }}
                    >
                      {p.role}
                    </span>
                  </div>
                </div>

                {/* pain points */}
                <div className="mt-7">
                  <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em]" style={{ color: p.accent }}>
                    <TriangleAlert className="h-4 w-4" /> Pain points
                  </p>
                  <ul className="mt-3 space-y-2.5">
                    {p.pains.map((t) => (
                      <li key={t} className="flex gap-3 text-sm leading-relaxed text-ink-muted">
                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: p.accent }} />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* divider */}
                <div className="my-6 h-px w-full bg-ink/[0.07]" />

                {/* needs */}
                <div>
                  <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em]" style={{ color: p.accent }}>
                    <Check className="h-4 w-4" /> Needs
                  </p>
                  <ul className="mt-3 space-y-2.5">
                    {p.needs.map((n) => (
                      <li key={n.text} className="flex items-start gap-3 text-sm leading-relaxed text-ink-muted">
                        <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: p.accent }} />
                        <span className="flex-1">{n.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MARKET RESEARCH */}
      <section className="bg-white px-6 py-20 sm:py-24">
        <Reveal className="mx-auto mb-10 max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-muted">Market research</span>
          <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">Learning from asset-tracking apps</h2>
        </Reveal>
        <Reveal className="mx-auto max-w-5xl">
          <img
            src="/equipgo/eg_market_research.png"
            alt="Market research — learning from asset-tracking apps"
            loading="lazy"
            className="w-full"
          />
        </Reveal>
      </section>

      {/* STORYBOARD */}
      <SectionExport file="storyboard.png" alt="EquipGo storyboard" bgClass="bg-neutral-50">
        <section className="bg-neutral-50 px-6 py-20 sm:py-24">
          <Reveal className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="text-3xl font-semibold text-ink sm:text-4xl">🧠 Brainstorm + Storyboard = Magic</h2>
          </Reveal>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {storyboard.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={i} delay={(i % 4) * 0.06}>
                  <div className="flex h-full flex-col gap-3 rounded-2xl border border-ink/10 bg-white p-6 shadow-soft">
                    <span className="grid h-11 w-11 place-items-center rounded-xl text-white" style={{ background: i % 2 ? BLUE : RED }}><Icon className="h-5 w-5" /></span>
                    <p className="text-sm font-medium text-ink">{s.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>
      </SectionExport>

      {/* BRANDING */}
      <SectionExport file="branding.png" alt="EquipGo branding" bgClass="bg-white">
        <section className="bg-white px-6 py-20 sm:py-24">
          <Reveal className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="text-3xl font-semibold text-ink sm:text-4xl">Fonts ✏️ + Colors 🎨</h2>
          </Reveal>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-3">
            <div className="flex min-h-[260px] flex-col justify-between rounded-3xl border border-ink/10 bg-neutral-900 p-8 text-white md:col-span-2">
              <div className="flex justify-between text-sm text-white/70"><span>/Font</span><span className="font-medium text-white">Inter</span></div>
              <div className="mt-4 space-y-1 text-white/85"><p>abcdefghijklmnopqrstuvwxyz</p><p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p></div>
              <div className="mt-6 flex items-end justify-between">
                <div className="flex gap-5 text-sm"><span className="text-white/70">Regular</span><span className="text-white/85">Medium</span><span className="font-bold">Bold</span></div>
                <span className="text-7xl font-bold leading-none">Aa</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="col-span-2 flex min-h-[110px] items-center justify-center rounded-3xl text-sm font-medium text-white" style={{ background: RED }}>#E4002B</div>
              <div className="flex min-h-[110px] items-center justify-center rounded-3xl text-sm font-medium text-white" style={{ background: BLUE }}>#1763E5</div>
              <div className="flex min-h-[110px] items-center justify-center rounded-3xl bg-[#E4E4E7] text-sm font-medium text-neutral-600">#E4E4E7</div>
            </div>
          </div>
        </section>
      </SectionExport>

      {/* FEATURES */}
      <section className="bg-neutral-50 px-6 py-20 sm:py-28">
        <Reveal className="mx-auto mb-10 max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-muted">Key features</span>
          <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">How to make users' lives easier 🚀</h2>
          <p className="mt-3 text-ink-muted">
            Three fast, friction-free ways to verify, check out, and return gear —
            so the right equipment is always with the right person.
          </p>
        </Reveal>
        <Reveal className="mx-auto max-w-4xl">
          <img
            src="/equipgo/designscreen.png"
            alt="EquipGo features — equipment verification, NFC tap, and barcode check-in/out"
            loading="lazy"
            className="w-full"
          />
        </Reveal>
      </section>

      {/* EDGE CASES */}
      <section className="bg-white px-6 py-20 sm:py-24">
        <Reveal className="mx-auto mb-10 max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-muted">Coverage</span>
          <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">From edge cases to everyday use</h2>
          <p className="mt-3 text-ink-muted">Designing for every scenario — broken tags, offline stations, shift handoffs, and bulk returns.</p>
        </Reveal>
        <Reveal className="mx-auto max-w-5xl">
          <img
            src="/equipgo/EquipGo%20design.png"
            alt="EquipGo edge-case and everyday-use screens"
            loading="lazy"
            className="w-full"
          />
        </Reveal>
      </section>

      {/* TAKEAWAYS */}
      <section className="bg-neutral-50 px-6 py-20 sm:py-28">
        <Reveal className="mx-auto mb-12 max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-muted">Lessons from the field</span>
          <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">Takeaways</h2>
        </Reveal>
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {takeaways.map((t, i) => {
            const Icon = t.icon;
            return (
              <motion.div
                key={t.n}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl bg-white p-7 shadow-soft ring-1 ring-ink/[0.08] transition-shadow duration-300 hover:shadow-lift"
              >
                {/* oversized number watermark */}
                <span aria-hidden className="pointer-events-none absolute -right-1 -top-5 text-[6.5rem] font-black leading-none" style={{ color: `${RED}0d` }}>
                  {t.n}
                </span>
                <span
                  className="relative grid h-12 w-12 place-items-center rounded-2xl text-white shadow-[0_12px_24px_-10px_rgba(228,0,43,0.8)] transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105"
                  style={{ background: `linear-gradient(135deg, ${RED}, #B80020)` }}
                >
                  <Icon className="h-6 w-6" />
                </span>
                <p className="relative mt-5 text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: RED }}>
                  Lesson {t.n}
                </p>
                <h3 className="relative mt-1 text-lg font-bold text-ink">{t.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-ink-muted">{t.text}</p>
                {/* hover accent line */}
                <span aria-hidden className="absolute bottom-0 left-0 h-1 w-0 transition-all duration-300 group-hover:w-full" style={{ background: RED }} />
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials />
    </div>
  );
}
