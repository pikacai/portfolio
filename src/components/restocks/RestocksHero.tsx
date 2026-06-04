import { motion } from "framer-motion";
import {
  Zap,
  Check,
  Search,
  Star,
  Percent,
  ChevronRight,
  Bookmark,
  ThumbsUp,
  ThumbsDown,
  Tag,
  ArrowDown,
} from "lucide-react";
import restocksHome from "../../assets/restocks/Home.png";
import AnimatedCounter from "../fx/AnimatedCounter";

const BLUE = "#016FFF";
const BLUE_LIGHT = "#01A2FF";

const checks = ["0 to 1", "AI Parsing Information", "Align with New Trends"];
const stats = [
  { to: 365000, suffix: "+", label: "Users" },
  { to: 83, suffix: "+", label: "Pages" },
];

const ease = [0.22, 1, 0.36, 1] as const;

/** LoS deal-site dashboard, coded. */
function DashboardMock() {
  return (
    <div className="w-full overflow-hidden rounded-2xl bg-white shadow-[0_30px_70px_-25px_rgba(1,111,255,0.55)] ring-1 ring-black/5">
      {/* browser chrome */}
      <div className="flex items-center gap-1.5 border-b border-neutral-100 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        <div className="ml-3 flex flex-1 items-center justify-center gap-1.5 rounded-full bg-neutral-100 px-3 py-1 text-[10px] font-medium text-neutral-400">
          lordofsavings.com
        </div>
      </div>
      {/* nav */}
      <div className="flex items-center gap-3 px-4 py-2.5">
        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg text-xs font-black text-white" style={{ background: `linear-gradient(135deg, ${BLUE}, ${BLUE_LIGHT})` }}>
          LS
        </span>
        <div className="hidden items-center gap-3 text-[11px] font-semibold text-neutral-400 sm:flex">
          <span className="text-neutral-900">Top Deals</span>
          <span>Lightning</span>
          <span>Brands</span>
        </div>
        <span className="ml-auto flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] font-bold text-white" style={{ background: BLUE }}>
          <Tag className="h-3 w-3" /> Share a Deal
        </span>
      </div>
      {/* sub nav */}
      <div className="flex items-center gap-4 px-4 py-2 text-[10px] font-semibold text-white" style={{ background: `linear-gradient(90deg, ${BLUE}, ${BLUE_LIGHT})` }}>
        <span>Electronics</span>
        <span className="opacity-75">Grocery</span>
        <span className="opacity-75">Beauty</span>
        <span className="hidden opacity-75 sm:inline">Travel</span>
        <Search className="ml-auto h-3 w-3 opacity-90" />
      </div>
      {/* lightning banner */}
      <div className="relative m-4 overflow-hidden rounded-xl bg-[#FFD43B] px-5 py-5">
        <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-md bg-[#E4002B] px-2 py-0.5 text-[9px] font-bold text-white">
          <Tag className="h-2.5 w-2.5" /> SALE
        </span>
        <p className="text-[10px] font-bold tracking-widest text-neutral-800">[ 8 AM EVERY DAY ]</p>
        <p className="text-2xl font-black leading-tight text-neutral-900">LIGHTNING SALE</p>
        {/* countdown */}
        <div className="mt-2 flex items-center gap-1">
          {["08", "24", "13"].map((t, i) => (
            <span key={i} className="flex items-center gap-1">
              <span className="rounded-md bg-neutral-900 px-1.5 py-0.5 text-[10px] font-black tabular-nums text-[#FFD43B]">{t}</span>
              {i < 2 && <span className="text-[10px] font-black text-neutral-900">:</span>}
            </span>
          ))}
          <span className="ml-1.5 text-[9px] font-bold text-neutral-700">LEFT</span>
        </div>
        <Zap className="absolute -bottom-2 right-5 h-12 w-12 rotate-12 fill-[#FFB200] text-[#FFB200]" />
      </div>
      {/* deal cards — right-weighted so the phone overlap stays clean */}
      <div className="flex justify-end gap-3 px-4 pb-4 pl-[40%]">
        {[
          { price: "$59.99", was: "$129" },
          { price: "$24.50", was: "$80" },
        ].map((d) => (
          <div key={d.price} className="flex-1 rounded-xl p-2.5 ring-1 ring-neutral-100">
            <div className="h-12 w-full rounded-lg bg-gradient-to-br from-neutral-100 to-neutral-200" />
            <div className="mt-2 h-1.5 w-3/4 rounded bg-neutral-200" />
            <div className="mt-2 flex items-center justify-between">
              <p className="text-[11px] font-black text-[#E4002B]">
                {d.price} <span className="text-[8px] font-medium text-neutral-400 line-through">{d.was}</span>
              </p>
              <span className="rounded-md px-2 py-0.5 text-[9px] font-bold text-white" style={{ background: BLUE }}>Shop</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Phone showing the real Restocks home screen. */
function PhoneMock() {
  return (
    <div className="w-[200px] overflow-hidden rounded-[1.8rem] border-[6px] border-neutral-900 bg-white shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)]">
      <img src={restocksHome} alt="Restocks home screen" className="block w-full" />
    </div>
  );
}

export default function RestocksHero() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-28 sm:pt-32">
      {/* energetic background */}
      <div aria-hidden className="absolute inset-0 -z-10" style={{ background: "linear-gradient(160deg, #EAF3FF 0%, #DCEBFF 55%, #CFE3FF 100%)" }} />
      <div aria-hidden className="absolute -right-24 -top-24 -z-10 h-96 w-96 rounded-full opacity-40 blur-3xl" style={{ background: "radial-gradient(circle, rgba(1,162,255,0.5), transparent 70%)" }} />
      <div aria-hidden className="absolute -bottom-32 left-1/4 -z-10 h-80 w-80 rounded-full opacity-30 blur-3xl" style={{ background: "radial-gradient(circle, rgba(1,111,255,0.45), transparent 70%)" }} />

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        {/* LEFT */}
        <div>
          <motion.div initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ duration: 0.6, ease }} className="mb-8 h-2 w-44 origin-left rounded-full" style={{ background: `linear-gradient(90deg, ${BLUE}, ${BLUE_LIGHT})` }} />

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="mb-6 flex gap-2">
            {[0, 1, 2].map((i) => (
              <Zap key={i} className="h-9 w-9 fill-[#9BC8FF] text-[#5AA6FF]" style={{ opacity: 0.5 + i * 0.25 }} />
            ))}
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.12, ease }} className="text-6xl font-black leading-[0.95] tracking-tight text-neutral-900 sm:text-7xl">
            <span style={{ color: BLUE }}>L</span>ord of{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: `linear-gradient(90deg, ${BLUE}, ${BLUE_LIGHT}, ${BLUE})`, backgroundSize: "200% 100%", animation: "gradient-pan 5s ease infinite" }}
            >
              Savings
            </span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2, ease }} className="mt-5 max-w-md text-2xl font-medium leading-snug text-neutral-700">
            <span className="font-bold text-neutral-900">Community-driven</span> e-commerce platform for discovering <span className="font-bold text-neutral-900">unbeatable deals</span>.
          </motion.p>

          <motion.ul initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } } }} className="mt-8 space-y-3">
            {checks.map((c) => (
              <motion.li
                key={c}
                variants={{ hidden: { opacity: 0, x: -12 }, show: { opacity: 1, x: 0 } }}
                whileHover={{ x: 8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group flex w-fit cursor-default items-center gap-3 text-lg font-semibold"
                style={{ color: BLUE }}
              >
                <span className="grid h-6 w-6 place-items-center rounded-full text-white transition-transform duration-300 group-hover:scale-125" style={{ background: `linear-gradient(135deg, ${BLUE}, ${BLUE_LIGHT})` }}>
                  <Check className="h-3.5 w-3.5" />
                </span>
                {c}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.55, ease }} className="mt-10 flex gap-12">
            {stats.map((s) => (
              <div key={s.label} className="group cursor-default">
                <AnimatedCounter
                  to={s.to}
                  suffix={s.suffix}
                  className="block text-5xl font-black text-[#016FFF] transition-transform duration-300 group-hover:-translate-y-1"
                  duration={1800}
                />
                <p className="text-sm font-semibold uppercase tracking-wider text-neutral-500">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — device cluster */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25, ease }} className="group relative mx-auto w-full max-w-lg">
          <motion.div whileHover={{ y: -6, rotate: 0.5 }} transition={{ type: "spring", stiffness: 200, damping: 18 }}>
            <DashboardMock />
          </motion.div>

          {/* phone — floats continuously, tilts on hover */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [0, -10, 0] }}
            transition={{
              opacity: { duration: 0.7, delay: 0.5 },
              y: { duration: 5, delay: 1.2, repeat: Infinity, ease: "easeInOut" },
            }}
            whileHover={{ scale: 1.05, rotate: -2 }}
            className="absolute -bottom-12 -left-10 hidden cursor-pointer sm:block"
          >
            <PhoneMock />
          </motion.div>

          {/* floating badges */}
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
            transition={{
              opacity: { duration: 0.5, delay: 0.6 },
              scale: { duration: 0.5, delay: 0.6 },
              y: { duration: 4, delay: 1, repeat: Infinity, ease: "easeInOut" },
            }}
            whileHover={{ rotate: 360, scale: 1.15 }}
            className="absolute -right-4 -top-6 grid h-16 w-16 cursor-pointer place-items-center rounded-full text-white shadow-lg"
            style={{ background: `linear-gradient(135deg, ${BLUE_LIGHT}, ${BLUE})` }}
          >
            <Star className="h-7 w-7 fill-white" />
          </motion.span>
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1, y: [0, 9, 0] }}
            transition={{
              opacity: { duration: 0.5, delay: 0.7 },
              scale: { duration: 0.5, delay: 0.7 },
              y: { duration: 4.6, delay: 1.4, repeat: Infinity, ease: "easeInOut" },
            }}
            whileHover={{ rotate: -16, scale: 1.15 }}
            className="absolute -right-2 bottom-10 grid h-12 w-12 cursor-pointer place-items-center rounded-2xl bg-[#FF5C8A] text-white shadow-lg"
          >
            <Percent className="h-6 w-6" />
          </motion.span>
          <motion.span
            animate={{ rotate: [12, 24, 12], scale: [1, 1.12, 1] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 right-10 inline-block"
          >
            <Zap className="h-9 w-9 fill-[#FFB200] text-[#FFB200] drop-shadow" />
          </motion.span>
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-14 flex justify-center"
      >
        <span className="grid h-10 w-10 place-items-center rounded-full border border-[#016FFF]/30 bg-white/70 text-[#016FFF] backdrop-blur">
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </span>
      </motion.div>
    </section>
  );
}
