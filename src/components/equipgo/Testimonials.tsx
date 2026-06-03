import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "../fx/Reveal";

const RED = "#E4002B";
const BLUE = "#1763E5";

const testimonials = [
  {
    name: "Capt. Marcus Bell",
    role: "Station Officer",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "EquipGo has completely improved how we track equipment across shifts. I can instantly see what's checked out, what's returned, and who's responsible. It's reduced confusion during busy deployments and saved us valuable time.",
  },
  {
    name: "Diego Ramirez",
    role: "EMT",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    quote:
      "This system makes my job easier. I no longer have to rely on paper logs or memory. Checking in and out equipment is fast, clear, and stress-free during high-pressure situations.",
  },
  {
    name: "Lt. Andre Foster",
    role: "Station Officer",
    img: "https://randomuser.me/api/portraits/men/52.jpg",
    quote:
      "Before EquipGo, accountability was a constant challenge. Now, every item has a clear history. It's helped us improve responsibility and reduce missing-equipment incidents significantly.",
  },
  {
    name: "Priya Nair",
    role: "EMT",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    quote:
      "I really like how simple EquipGo is to use. Even during a hectic shift, I can quickly update my gear status without slowing down response time. It just works.",
  },
  {
    name: "Capt. Sofia Greco",
    role: "Station Officer",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "EquipGo gives me real-time visibility across the station. It has improved coordination between crews and made audits and inspections much smoother than before.",
  },
];

const accentFor = (role: string) => (role === "EMT" ? BLUE : RED);

export default function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  const accent = accentFor(t.role);
  const go = (d: number) => setI((p) => (p + d + testimonials.length) % testimonials.length);

  return (
    <section className="bg-neutral-50 px-6 py-20 sm:py-28">
      <Reveal className="mx-auto mb-12 max-w-3xl text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-muted">From the field</span>
        <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">What responders say</h2>
      </Reveal>

      <Reveal className="mx-auto max-w-3xl">
        {/* Featured quote */}
        <div className="relative overflow-hidden rounded-[2rem] bg-white p-8 shadow-soft ring-1 ring-ink/[0.08] sm:p-12">
          <span aria-hidden className="absolute right-6 top-4 select-none text-[9rem] font-black leading-none" style={{ color: `${accent}10` }}>
            ”
          </span>
          <Quote className="h-9 w-9" style={{ color: accent }} />

          <div className="relative min-h-[150px]">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="mt-5 text-xl font-medium leading-relaxed text-ink sm:text-2xl sm:leading-relaxed"
              >
                {t.quote}
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src={t.img}
                alt={t.name}
                loading="lazy"
                className="h-14 w-14 rounded-full object-cover ring-2 ring-white"
                style={{ outline: `2px solid ${accent}55` }}
              />
              <div>
                <p className="font-bold text-ink">{t.name}</p>
                <span className="text-sm font-semibold" style={{ color: accent }}>
                  {t.role}
                </span>
              </div>
            </div>

            {/* arrows */}
            <div className="flex gap-2">
              <button
                onClick={() => go(-1)}
                aria-label="Previous testimonial"
                className="grid h-11 w-11 place-items-center rounded-full border border-ink/10 bg-white text-ink transition-colors hover:bg-neutral-100"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => go(1)}
                aria-label="Next testimonial"
                className="grid h-11 w-11 place-items-center rounded-full text-white transition-transform hover:scale-105"
                style={{ background: accent }}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Thumbnail selector */}
        <div className="mt-7 flex items-center justify-center gap-3">
          {testimonials.map((p, idx) => (
            <button
              key={p.name}
              onClick={() => setI(idx)}
              aria-label={`Show testimonial from ${p.name}`}
              className="relative rounded-full transition-transform hover:scale-110"
            >
              <img
                src={p.img}
                alt={p.name}
                loading="lazy"
                className={`h-11 w-11 rounded-full object-cover transition-all duration-300 ${
                  idx === i ? "scale-110" : "opacity-50 grayscale"
                }`}
                style={idx === i ? { outline: `2.5px solid ${accentFor(p.role)}`, outlineOffset: "2px" } : undefined}
              />
            </button>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
