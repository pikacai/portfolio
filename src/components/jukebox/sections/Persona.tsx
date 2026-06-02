import { Star, Frown } from "lucide-react";
import Reveal from "../../fx/Reveal";

// Drop a photo at public/jukebox/persona.png to replace the "S" placeholder.
const personaImg = `${import.meta.env.BASE_URL}jukebox/persona.png`;

const demographics = [
  ["Gender", "Female"],
  ["Age", "45"],
  ["Income Level", "High"],
  ["Job", "Finance Professional"],
];

const tech = [
  ["Finance", 5],
  ["Online banking", 5],
  ["Music", 3],
  ["Fact Check", 3],
];

const goals = [
  "Make informed decisions about her music royalty investments based on clear, comprehensive, and up-to-date data.",
  "Easily track the historical and projected earnings of her investments.",
  "Identify trends and potential risks associated with specific assets.",
];

const frustrations = [
  "Need for a consolidated platform for research and investment.",
  "Lack of clear visualizations and real-time updates on asset performance.",
  "Concerns about liquidity and the ability to sell shares easily.",
];

function Stars({ filled }: { filled: number }) {
  return (
    <span className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i <= filled ? "fill-yellow-400 text-yellow-400" : "fill-neutral-200 text-neutral-200"
          }`}
        />
      ))}
    </span>
  );
}

export default function Persona() {
  return (
    <section className="bg-[#0a0a0f] px-4 py-20 sm:px-6 sm:py-28">
      <Reveal className="mx-auto mb-12 max-w-3xl text-center text-white">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white/40">
          Who we&apos;re designing for
        </span>
        <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">The persona</h2>
      </Reveal>

      <Reveal className="mx-auto max-w-2xl">
        <div className="overflow-hidden rounded-3xl bg-white shadow-lift">
          {/* header */}
          <div className="relative">
            <div
              className="h-28"
              style={{
                background: "#3b6ef5",
                clipPath: "polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%)",
              }}
            />
            <div className="absolute left-1/2 top-10 -translate-x-1/2">
              <div className="relative h-28 w-28">
                <div className="absolute inset-0 grid place-items-center rounded-full border-4 border-white bg-gradient-to-br from-sky-200 to-blue-400 text-3xl font-bold text-white shadow-md">
                  S
                </div>
                <img
                  src={personaImg}
                  alt="Sarah T"
                  className="absolute inset-0 h-28 w-28 rounded-full border-4 border-white object-cover shadow-md"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
            </div>
          </div>

          <div className="px-8 pb-10 pt-20 text-center">
            <h3 className="text-2xl font-bold text-neutral-900">Sarah T</h3>
            <p className="mt-1 text-neutral-500">The Strategic Alternative Investor</p>

            <div className="my-7 h-px bg-neutral-100" />

            {/* demographics + tech */}
            <div className="grid grid-cols-1 gap-8 text-left sm:grid-cols-2">
              <div>
                <p className="mb-4 text-sm font-bold uppercase tracking-wider text-neutral-800">
                  Demographics
                </p>
                <div className="space-y-3">
                  {demographics.map(([k, v]) => (
                    <div key={k} className="flex items-center gap-4 text-sm">
                      <span className="w-28 text-neutral-400">{k}:</span>
                      <span className="font-medium text-neutral-800">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-4 text-sm font-bold uppercase tracking-wider text-neutral-800">
                  Tech
                </p>
                <div className="space-y-3">
                  {tech.map(([k, v]) => (
                    <div key={k as string} className="flex items-center justify-between text-sm">
                      <span className="text-neutral-400">{k}:</span>
                      <Stars filled={v as number} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="my-7 h-px bg-neutral-100" />

            {/* quote */}
            <div className="text-left">
              <p className="mb-3 text-sm font-bold uppercase tracking-wider text-neutral-800">
                Quote
              </p>
              <p className="text-[15px] italic leading-relaxed text-neutral-600">
                &ldquo;I want to see the numbers and know exactly what I&rsquo;m
                investing in. If it&rsquo;s going to add value to my portfolio, I
                need a platform that&rsquo;s transparent, professional, and easy
                to use.&rdquo;
              </p>
            </div>

            {/* goals + frustrations */}
            <div className="mt-8 grid grid-cols-1 gap-8 text-left sm:grid-cols-2">
              <div>
                <p className="mb-4 text-sm font-bold uppercase tracking-wider text-neutral-800">
                  Goals
                </p>
                <ul className="space-y-4">
                  {goals.map((g, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed text-neutral-600">
                      <Star className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                      <span>{g}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-4 text-sm font-bold uppercase tracking-wider text-neutral-800">
                  Frustrations
                </p>
                <ul className="space-y-4">
                  {frustrations.map((f, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed text-neutral-600">
                      <Frown className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="mt-10 border-t border-neutral-100 pt-5 text-left text-xs text-neutral-400 underline">
              Source: JKBX v2 — Product Requirements Document (PRD) [External]
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
