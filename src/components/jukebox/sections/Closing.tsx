import { useState } from "react";
import { motion } from "framer-motion";
import { Music2, PieChart, BookOpen, Search, Bell, ArrowUp, ChevronRight } from "lucide-react";
import Reveal from "../../fx/Reveal";
import { Logo } from "../JukeboxHero";

// Drop your real export at public/jukebox/closing.png to use it verbatim.
const closingImg = `${import.meta.env.BASE_URL}jukebox/closing.png`;

const orbitNodes = [
  { x: "8%", y: "52%", c: "#1f4fd1" },
  { x: "16%", y: "82%", c: "#3aa655" },
  { x: "86%", y: "22%", c: "#3aa655" },
  { x: "90%", y: "62%", c: "#c9f23a" },
  { x: "78%", y: "16%", c: "#3b6ef5" },
];

const listings = [
  { from: "from-amber-300", to: "to-orange-500", name: "Timeless Hit", sub: "Composition", n: "893K", up: "7.89%" },
  { from: "from-sky-300", to: "to-indigo-500", name: "Billion Streams", sub: "23 Songs", n: "893K", up: "7.89%" },
  { from: "from-violet-300", to: "to-fuchsia-500", name: "Chart Topper", sub: "Production", n: "890K", up: "6.43%" },
];

export default function Closing() {
  const [useFallback, setUseFallback] = useState(false);

  // If a real export is present, show it exactly as provided.
  if (!useFallback) {
    return (
      <section className="bg-[#06060a]">
        <img
          src={closingImg}
          alt="Jukebox — turning music into an investable asset class"
          className="mx-auto block w-full max-w-6xl"
          onError={() => setUseFallback(true)}
        />
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-[#06060a] px-4 pb-24 pt-24 sm:px-6">
      {/* orbit rings */}
      <div className="pointer-events-none absolute inset-0 flex items-start justify-center">
        <svg viewBox="0 0 1000 1000" className="mt-[-10%] h-[120%] w-[120%] opacity-30">
          {[180, 300, 420, 540].map((r) => (
            <circle key={r} cx="500" cy="420" r={r} fill="none" stroke="white" strokeWidth="1" />
          ))}
        </svg>
      </div>
      {orbitNodes.map((n, i) => (
        <span
          key={i}
          className="absolute hidden h-12 w-12 place-items-center rounded-full shadow-lg md:grid"
          style={{ left: n.x, top: n.y, background: n.c }}
        >
          <Logo className="h-4" />
        </span>
      ))}

      {/* title */}
      <div className="relative z-10 mx-auto max-w-4xl text-center text-white">
        <div className="flex items-center justify-center gap-2">
          <Logo className="h-7" />
          <span className="text-2xl font-bold tracking-tight">Jukebox</span>
        </div>
        <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-bold leading-tight sm:text-6xl">
          Turning music into
          <br />
          an investable asset class
        </h2>
      </div>

      {/* device mockup */}
      <Reveal className="relative z-10 mx-auto mt-14 max-w-4xl">
        <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#0d0d12] shadow-[0_40px_100px_-30px_rgba(0,0,0,0.8)]">
          <div className="min-w-[760px] bg-white">
            {/* top bar */}
            <div className="flex items-center gap-3 border-b border-neutral-100 px-5 py-3">
              <div className="flex items-center gap-2">
                <Logo className="h-4" barClass="bg-neutral-900" />
                <span className="text-sm font-bold tracking-tight text-neutral-900">Jukebox</span>
              </div>
              <div className="ml-4 flex flex-1 items-center gap-2 rounded-lg border border-neutral-200 px-3 py-2 text-[12px] text-neutral-400">
                <Search className="h-4 w-4" /> Search for an asset…
              </div>
              <Bell className="h-4 w-4 text-neutral-400" />
              <span className="grid h-7 w-7 place-items-center rounded-full bg-[#3b6ef5] text-[11px] font-semibold text-white">J</span>
            </div>

            <div className="flex">
              {/* sidebar */}
              <div className="w-44 shrink-0 space-y-1 border-r border-neutral-100 p-4 text-[13px]">
                <div className="flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-2 font-medium text-blue-600">
                  <Music2 className="h-4 w-4" /> Discover
                </div>
                <div className="flex items-center gap-2 px-3 py-2 text-neutral-600">
                  <PieChart className="h-4 w-4" /> Portfolio
                </div>
                <div className="flex items-center gap-2 px-3 py-2 text-neutral-600">
                  <BookOpen className="h-4 w-4" /> Learn
                </div>
              </div>

              {/* main */}
              <div className="flex-1 p-5">
                {/* feature banner */}
                <div className="relative overflow-hidden rounded-xl bg-neutral-900 p-5 text-white">
                  <div className="absolute inset-0 grid grid-cols-6 opacity-40">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div
                        key={i}
                        className={`bg-gradient-to-br ${
                          ["from-amber-700 to-stone-900", "from-rose-700 to-stone-900", "from-indigo-700 to-stone-900", "from-emerald-700 to-stone-900", "from-fuchsia-700 to-stone-900", "from-sky-700 to-stone-900"][i]
                        }`}
                      />
                    ))}
                  </div>
                  <div className="relative">
                    <p className="text-lg font-semibold">Own Timeless Music That Pays</p>
                    <p className="text-xs text-white/70">Invest in songs you know and love</p>
                    <span className="mt-3 inline-block rounded-full bg-[#3b6ef5] px-4 py-1.5 text-xs font-semibold">
                      Explore Today
                    </span>
                  </div>
                </div>

                <p className="mt-5 text-sm font-semibold text-neutral-900">New Listings</p>
                <div className="mt-3 grid grid-cols-3 gap-3">
                  {listings.map((l) => (
                    <div key={l.name} className="overflow-hidden rounded-xl border border-neutral-200">
                      <div className={`relative h-24 bg-gradient-to-br ${l.from} ${l.to}`}>
                        <span className="absolute left-2 top-2 rounded-md bg-black/40 px-1.5 py-0.5 text-[10px] font-medium text-white">
                          Yield · 12%
                        </span>
                      </div>
                      <div className="p-2.5">
                        <p className="text-[10px] text-neutral-400">{l.sub}</p>
                        <p className="text-[13px] font-semibold text-neutral-900">{l.name}</p>
                        <div className="mt-1 flex items-center gap-1 text-[11px]">
                          <span className="font-semibold text-neutral-800">{l.n}</span>
                          <span className="flex items-center text-emerald-500">
                            <ArrowUp className="h-3 w-3" />
                            {l.up}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* right panel */}
              <div className="w-64 shrink-0 space-y-3 p-4">
                <div className="rounded-2xl border border-neutral-100 p-4 shadow-sm">
                  <div className="flex gap-6 border-b border-neutral-100 text-[13px] font-medium">
                    <span className="-mb-px border-b-2 border-neutral-900 pb-2">Buy</span>
                    <span className="pb-2 text-neutral-400">Sell</span>
                  </div>
                  <div className="mt-3 flex items-end gap-2">
                    <span className="text-2xl font-bold text-neutral-900">0</span>
                    <span className="pb-0.5 text-base font-semibold text-neutral-300">USD</span>
                  </div>
                  <div className="mt-3 flex gap-2">
                    {["$500", "$1000", "$5000"].map((v) => (
                      <span key={v} className="rounded-full bg-neutral-100 px-2.5 py-1 text-[11px] font-medium text-neutral-700">
                        {v}
                      </span>
                    ))}
                  </div>
                  <button className="mt-3 w-full rounded-full bg-[#3b6ef5] py-2 text-[13px] font-semibold text-white">
                    Review Order
                  </button>
                  <div className="mt-3 flex items-center justify-between border-t border-neutral-100 pt-2 text-[11px]">
                    <span className="text-neutral-500">Trading platform</span>
                    <span className="flex items-center font-semibold text-neutral-900">
                      Jukebox <ChevronRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-neutral-100 p-3 text-[12px]">
                  <div>
                    <p className="font-semibold text-neutral-900">Invite friends & get $15</p>
                    <p className="text-neutral-400">Copy Link · Learn More</p>
                  </div>
                  <span className="h-9 w-9 shrink-0 rounded-full bg-gradient-to-br from-sky-300 to-blue-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
