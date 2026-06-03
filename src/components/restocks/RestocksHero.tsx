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
} from "lucide-react";

const BLUE = "#016FFF";
const BLUE_LIGHT = "#01A2FF";

const checks = ["0 to 1", "AI Parsing Information", "Align with New Trends"];
const stats = [
  { value: "365k+", label: "Users" },
  { value: "83+", label: "Pages" },
];

const ease = [0.22, 1, 0.36, 1] as const;

/** LoS deal-site dashboard, coded. */
function DashboardMock() {
  return (
    <div className="w-full overflow-hidden rounded-2xl bg-white shadow-[0_30px_70px_-25px_rgba(1,111,255,0.55)] ring-1 ring-black/5">
      {/* top bar */}
      <div className="flex items-center gap-3 px-4 py-3">
        <span className="grid h-7 w-7 place-items-center rounded-lg text-xs font-black text-white" style={{ background: `linear-gradient(135deg, ${BLUE}, ${BLUE_LIGHT})` }}>
          LS
        </span>
        <div className="hidden items-center gap-3 text-[11px] font-semibold text-neutral-500 sm:flex">
          <span>Categories</span>
          <span>Deals</span>
          <span>In-Store</span>
          <span>Share a Deal</span>
        </div>
        <div className="ml-auto flex items-center gap-1.5 rounded-full bg-neutral-100 px-3 py-1.5 text-[10px] text-neutral-400">
          <Search className="h-3 w-3" /> Search deals…
        </div>
      </div>
      {/* sub nav */}
      <div className="flex items-center gap-4 px-4 py-2 text-[10px] font-semibold text-white" style={{ background: `linear-gradient(90deg, ${BLUE}, ${BLUE_LIGHT})` }}>
        <span>Top deals</span>
        <span className="opacity-80">Lightning deals</span>
        <span className="hidden opacity-80 sm:inline">Beauty</span>
        <span className="hidden opacity-80 sm:inline">Travel</span>
      </div>
      {/* lightning banner */}
      <div className="relative m-4 overflow-hidden rounded-xl bg-[#FFD43B] px-5 py-6">
        <span className="absolute right-3 top-2 inline-flex items-center gap-1 rounded-md bg-[#E4002B] px-2 py-0.5 text-[9px] font-bold text-white">
          <Tag className="h-2.5 w-2.5" /> SALE
        </span>
        <p className="text-[10px] font-bold tracking-widest text-neutral-800">[ 8 AM EVERYDAY ]</p>
        <p className="text-2xl font-black leading-none text-neutral-900">LIGHTNING SALE</p>
        <p className="text-[11px] font-bold text-neutral-700">LIMITED TIME OFFER!</p>
        <Zap className="absolute -bottom-3 right-6 h-12 w-12 rotate-12 fill-[#FFB200] text-[#FFB200]" />
      </div>
      {/* deal row */}
      <div className="flex items-center gap-3 px-4 pb-4">
        <div className="h-12 w-12 shrink-0 rounded-lg bg-gradient-to-br from-neutral-100 to-neutral-200" />
        <div className="min-w-0 flex-1">
          <div className="h-2 w-2/3 rounded bg-neutral-200" />
          <div className="mt-1.5 h-2 w-1/3 rounded bg-neutral-100" />
        </div>
        <span className="rounded-lg px-3 py-1.5 text-[10px] font-bold text-white" style={{ background: BLUE }}>Shop</span>
      </div>
    </div>
  );
}

/** Deal-detail phone, coded. */
function PhoneMock() {
  return (
    <div className="w-[200px] overflow-hidden rounded-[1.8rem] border-[6px] border-neutral-900 bg-white shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)]">
      <div className="flex items-center justify-between px-3 pt-2 text-[9px] font-semibold text-neutral-800">
        <span>9:41</span>
        <span className="flex gap-1"><span className="h-1.5 w-3 rounded-sm bg-neutral-800" /></span>
      </div>
      <div className="h-1.5 w-full" style={{ background: `linear-gradient(90deg, ${BLUE}, ${BLUE_LIGHT})` }} />
      <div className="p-3">
        <div className="grid h-24 w-full place-items-center rounded-xl bg-gradient-to-br from-neutral-50 to-neutral-100">
          <div className="h-12 w-16 rounded-lg bg-white shadow-sm" />
        </div>
        <div className="mt-2 flex gap-1.5">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-7 flex-1 rounded-md bg-neutral-100" />
          ))}
        </div>
        <p className="mt-3 text-[8px] text-neutral-400">John Doe · 2 days ago</p>
        <p className="text-[10px] font-semibold leading-tight text-neutral-900">Havic HV G-92 Gamepad — wireless controller</p>
        <p className="mt-1 text-sm font-black" style={{ color: "#E4002B" }}>
          $599.50 <span className="text-[9px] font-medium text-neutral-400 line-through">$1128.00</span>
        </p>
        <div className="mt-3 flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-neutral-100"><ThumbsUp className="h-3.5 w-3.5 text-neutral-500" /></span>
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-neutral-100"><ThumbsDown className="h-3.5 w-3.5 text-neutral-500" /></span>
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-neutral-100"><Bookmark className="h-3.5 w-3.5 text-neutral-500" /></span>
          <span className="flex flex-1 items-center justify-center gap-1 rounded-lg py-1.5 text-[9px] font-bold text-white" style={{ background: BLUE }}>
            View The Deal <ChevronRight className="h-3 w-3" />
          </span>
        </div>
      </div>
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
            <span style={{ color: BLUE }}>L</span>ord of <span style={{ color: BLUE }}>S</span>avings
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2, ease }} className="mt-5 max-w-md text-2xl font-medium leading-snug text-neutral-700">
            <span className="font-bold text-neutral-900">Community-driven</span> e-commerce platform for discovering <span className="font-bold text-neutral-900">unbeatable deals</span>.
          </motion.p>

          <motion.ul initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } } }} className="mt-8 space-y-3">
            {checks.map((c) => (
              <motion.li key={c} variants={{ hidden: { opacity: 0, x: -12 }, show: { opacity: 1, x: 0 } }} className="flex items-center gap-3 text-lg font-semibold" style={{ color: BLUE }}>
                <span className="grid h-6 w-6 place-items-center rounded-full text-white" style={{ background: `linear-gradient(135deg, ${BLUE}, ${BLUE_LIGHT})` }}>
                  <Check className="h-3.5 w-3.5" />
                </span>
                {c}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.55, ease }} className="mt-10 flex gap-12">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-5xl font-black" style={{ color: BLUE }}>{s.value}</p>
                <p className="text-sm font-semibold uppercase tracking-wider text-neutral-500">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — device cluster */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25, ease }} className="relative mx-auto w-full max-w-md">
          <DashboardMock />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5, ease }} className="absolute -bottom-10 -left-6 hidden sm:block">
            <PhoneMock />
          </motion.div>

          {/* floating badges */}
          <motion.span initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.6 }} className="absolute -right-4 -top-6 grid h-16 w-16 place-items-center rounded-full text-white shadow-lg" style={{ background: `linear-gradient(135deg, ${BLUE_LIGHT}, ${BLUE})` }}>
            <Star className="h-7 w-7 fill-white" />
          </motion.span>
          <motion.span initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.7 }} className="absolute -right-2 bottom-10 grid h-12 w-12 place-items-center rounded-2xl bg-[#FF5C8A] text-white shadow-lg">
            <Percent className="h-6 w-6" />
          </motion.span>
          <Zap className="absolute right-10 bottom-0 h-9 w-9 rotate-12 fill-[#FFB200] text-[#FFB200] drop-shadow" />
        </motion.div>
      </div>
    </section>
  );
}
