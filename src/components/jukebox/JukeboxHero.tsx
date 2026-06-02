import { motion } from "framer-motion";
import {
  Music2,
  PieChart,
  BookOpen,
  ListOrdered,
  Search,
  Lock,
  Star,
  ArrowLeft,
  ArrowRight,
  RotateCw,
  House,
  Plus,
  X,
  EllipsisVertical,
  ArrowUp,
  ArrowDownUp,
  Landmark,
  ChevronRight,
} from "lucide-react";

const BLUE = "#3b6ef5";

/** Jukebox equalizer-style wordmark logo. */
export function Logo({ className = "", barClass = "bg-white" }: { className?: string; barClass?: string }) {
  const heights = [55, 100, 38, 78];
  return (
    <span className={`inline-flex items-end gap-[3px] ${className}`}>
      {heights.map((h, i) => (
        <span
          key={i}
          className={`w-[4px] rounded-[2px] ${barClass}`}
          style={{ height: `${h}%` }}
        />
      ))}
    </span>
  );
}

function SidebarItem({
  icon: Icon,
  label,
  active = false,
}: {
  icon: any;
  label: string;
  active?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 rounded-lg px-3 py-2 text-[13px] font-medium ${
        active ? "bg-blue-50 text-blue-600" : "text-neutral-700"
      }`}
    >
      <Icon className="h-4 w-4" strokeWidth={2} />
      {label}
    </div>
  );
}

export default function JukeboxHero() {
  return (
    <section
      className="relative w-full overflow-hidden px-4 pb-0 pt-24 sm:px-6"
      style={{ background: BLUE }}
    >
      {/* Title */}
      <div className="relative z-10 mx-auto max-w-5xl pt-8 text-center text-white sm:pt-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center gap-3"
        >
          <Logo className="h-9 sm:h-12" />
          <span className="text-4xl font-bold tracking-tight sm:text-6xl">
            Jukebox
          </span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-5 max-w-2xl text-xl font-semibold uppercase leading-snug tracking-wide sm:text-3xl"
        >
          Turning music into
          <br />
          an investable asset class
        </motion.h1>
      </div>

      {/* Decorative stacked cards on the right */}
      <div className="pointer-events-none absolute bottom-0 right-0 z-0 hidden h-[70%] w-[40%] lg:block">
        <div className="absolute bottom-0 right-10 h-full w-[58%] rounded-t-2xl bg-white/10" />
        <div className="absolute bottom-0 right-24 h-[94%] w-[58%] rounded-t-2xl bg-white/[0.07]" />
      </div>

      {/* Browser mockup */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto mt-12 max-w-5xl"
      >
        <div className="overflow-x-auto rounded-t-2xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.45)]">
          <div className="min-w-[820px] rounded-t-2xl bg-white">
            {/* Tab row */}
            <div className="flex items-center gap-2 rounded-t-2xl bg-[#dfe1e5] px-3 py-2">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <div className="ml-3 flex items-center gap-2 rounded-t-lg bg-white px-3 py-1.5 text-[11px] font-medium text-neutral-600">
                JKBX
                <X className="h-3 w-3 text-neutral-400" />
              </div>
              <Plus className="h-4 w-4 text-neutral-500" />
            </div>

            {/* Toolbar row */}
            <div className="flex items-center gap-3 bg-[#f1f3f4] px-4 py-2">
              <ArrowLeft className="h-4 w-4 text-neutral-500" />
              <ArrowRight className="h-4 w-4 text-neutral-300" />
              <RotateCw className="h-4 w-4 text-neutral-500" />
              <House className="h-4 w-4 text-neutral-500" />
              <div className="flex flex-1 items-center gap-2 rounded-full bg-white px-4 py-1.5 text-[12px] text-neutral-600">
                <Lock className="h-3 w-3 text-neutral-400" />
                jkbx.com
              </div>
              <Star className="h-4 w-4 text-neutral-400" />
              <span className="grid h-6 w-6 place-items-center rounded-full bg-neutral-300 text-[10px] font-semibold text-white">
                ●
              </span>
              <EllipsisVertical className="h-4 w-4 text-neutral-500" />
            </div>

            {/* App body */}
            <div className="flex">
              {/* Sidebar */}
              <div className="w-52 shrink-0 border-r border-neutral-100 p-4">
                <div className="mb-6 flex items-center gap-2 px-1">
                  <Logo className="h-4" barClass="bg-neutral-900" />
                  <span className="text-[15px] font-bold tracking-tight text-neutral-900">
                    Jukebox
                  </span>
                </div>
                <div className="space-y-1">
                  <SidebarItem icon={Music2} label="Discover" />
                  <SidebarItem icon={PieChart} label="Portfolio" active />
                  <SidebarItem icon={BookOpen} label="Learn" />
                  <SidebarItem icon={ListOrdered} label="Transactions" />
                </div>
              </div>

              {/* Main */}
              <div className="relative flex-1 p-6">
                {/* Search */}
                <div className="flex items-center gap-2 rounded-lg border border-neutral-200 px-4 py-2.5 text-[13px] text-neutral-400">
                  <Search className="h-4 w-4" />
                  Search for an asset…
                </div>

                <p className="mt-6 text-[13px] text-neutral-500">Portfolio</p>
                <div className="mt-1 flex items-end gap-1">
                  <span className="text-2xl font-semibold text-neutral-900">$</span>
                  <span className="text-4xl font-bold tracking-tight text-neutral-900">
                    99.09
                  </span>
                </div>
                <div className="mt-1 flex items-center gap-1 text-[13px] font-medium text-blue-600">
                  <ArrowUp className="h-3.5 w-3.5" />
                  1.03% ($80.92)
                  <span className="text-neutral-400"> · Past Month</span>
                </div>

                {/* Chart */}
                <div className="mt-4 h-36 w-full">
                  <svg viewBox="0 0 700 150" preserveAspectRatio="none" className="h-full w-full">
                    <defs>
                      <linearGradient id="jkbxfill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={BLUE} stopOpacity="0.18" />
                        <stop offset="100%" stopColor={BLUE} stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,120 L40,108 L80,118 L120,72 L160,85 L200,70 L240,92 L280,80 L320,95 L360,88 L400,98 L440,70 L480,45 L520,55 L560,38 L600,52 L640,42 L700,58 L700,150 L0,150 Z"
                      fill="url(#jkbxfill)"
                    />
                    <path
                      d="M0,120 L40,108 L80,118 L120,72 L160,85 L200,70 L240,92 L280,80 L320,95 L360,88 L400,98 L440,70 L480,45 L520,55 L560,38 L600,52 L640,42 L700,58"
                      fill="none"
                      stroke={BLUE}
                      strokeWidth="2.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Range pills */}
                <div className="mt-3 flex items-center gap-8 px-1 text-[12px] text-neutral-400">
                  <span className="rounded-full bg-neutral-100 px-3 py-1 font-medium text-neutral-700">
                    1M
                  </span>
                  <span>3M</span>
                  <span>6M</span>
                  <span>1Y</span>
                  <span>All</span>
                </div>

                {/* Holdings */}
                <div className="mt-6 flex items-center justify-between rounded-xl border border-neutral-200 px-4 py-3 text-[13px]">
                  <span className="flex items-center gap-1.5 font-medium text-neutral-800">
                    Individual Holdings
                    <span className="grid h-3.5 w-3.5 place-items-center rounded-full border border-neutral-300 text-[8px] text-neutral-400">
                      i
                    </span>
                  </span>
                  <span className="flex items-center gap-2 font-semibold text-neutral-800">
                    $685.31
                    <ChevronRight className="h-4 w-4 text-neutral-400" />
                  </span>
                </div>
              </div>

              {/* Buy/Sell panel */}
              <div className="w-72 shrink-0 p-4">
                <div className="rounded-2xl border border-neutral-100 bg-white p-4 shadow-[0_18px_40px_-15px_rgba(0,0,0,0.25)]">
                  <div className="flex gap-6 border-b border-neutral-100 text-[14px] font-medium">
                    <span className="-mb-px border-b-2 border-neutral-900 pb-2 text-neutral-900">
                      Buy
                    </span>
                    <span className="pb-2 text-neutral-400">Sell</span>
                  </div>

                  <div className="mt-4 flex items-end gap-2">
                    <span className="text-3xl font-bold text-neutral-900">0</span>
                    <span className="pb-1 text-xl font-semibold text-neutral-300">
                      USD
                    </span>
                  </div>
                  <div className="mt-1 flex items-center gap-1 text-[12px] font-medium text-blue-600">
                    <ArrowDownUp className="h-3.5 w-3.5" />0 Shares
                  </div>

                  <div className="mt-4 flex gap-2">
                    {["$500", "$1000", "$5000"].map((v) => (
                      <span
                        key={v}
                        className="rounded-full bg-neutral-100 px-3 py-1.5 text-[12px] font-medium text-neutral-700"
                      >
                        {v}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-neutral-100 pt-3">
                    <span className="flex items-center gap-2">
                      <span className="h-7 w-7 rounded-full bg-gradient-to-br from-sky-400 to-blue-700" />
                      <span className="text-[13px]">
                        <span className="block font-semibold text-neutral-900">
                          Buy
                        </span>
                        <span className="text-[11px] text-neutral-400">Snooze</span>
                      </span>
                    </span>
                    <span className="flex items-center gap-1 text-[13px]">
                      <span className="text-right">
                        <span className="block font-semibold text-neutral-900">
                          $89.39
                        </span>
                        <span className="text-[11px] text-neutral-400">
                          Unit Price
                        </span>
                      </span>
                      <ChevronRight className="h-4 w-4 text-neutral-300" />
                    </span>
                  </div>

                  <div className="mt-3 flex items-center justify-between border-t border-neutral-100 pt-3">
                    <span className="flex items-center gap-2">
                      <span className="grid h-7 w-7 place-items-center rounded-full bg-neutral-100 text-neutral-500">
                        <Landmark className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-[13px]">
                        <span className="block font-semibold text-neutral-900">
                          Pay with
                        </span>
                        <span className="text-[11px] text-neutral-400">
                          SoFi · 8521
                        </span>
                      </span>
                    </span>
                    <span className="flex items-center gap-1 text-[13px]">
                      <span className="text-right">
                        <span className="block font-semibold text-neutral-900">
                          $3,000
                        </span>
                        <span className="text-[11px] text-neutral-400">Limit</span>
                      </span>
                      <ChevronRight className="h-4 w-4 text-neutral-300" />
                    </span>
                  </div>

                  <button
                    className="mt-4 w-full rounded-full py-2.5 text-[14px] font-semibold text-white"
                    style={{ background: BLUE }}
                  >
                    Review Order
                  </button>

                  <div className="mt-3 flex items-center justify-between border-t border-neutral-100 pt-3 text-[12px]">
                    <span className="font-medium text-neutral-700">
                      Trading platform
                    </span>
                    <span className="flex items-center gap-1 font-semibold text-neutral-900">
                      Jukebox
                      <ChevronRight className="h-4 w-4 text-neutral-300" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
