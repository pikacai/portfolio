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
      <section className="bg-black">
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
    <section className="relative overflow-hidden bg-black px-4 pb-24 pt-24 sm:px-6">
      {/* orbit rings */}
      <div className="pointer-events-none absolute inset-0 flex items-start justify-center">
        <svg viewBox="0 0 1000 1000" className="mt-[-10%] h-[120%] w-[120%] opacity-60">
          {[180, 300, 420, 540].map((r) => (
            <circle key={r} cx="500" cy="420" r={r} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
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

      {/* device mock image */}
      <Reveal className="relative z-10 mx-auto mt-14 max-w-4xl px-4">
        <img
          src={`${import.meta.env.BASE_URL}jukebox/Group%201321314733.png`}
          alt="Jukebox app shown on desktop and mobile"
          className="mx-auto w-full"
        />
      </Reveal>
    </section>
  );
}
