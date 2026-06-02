import Reveal from "../../fx/Reveal";

// Apps studied during the competitive scan (names only — UIs not reproduced).
const refs = ["Coinbase", "Fey", "Revolut", "Binance", "Monarch", "Quicken"];

/** A neutral dashboard wireframe used as a placeholder for each reference. */
function Wire() {
  return (
    <div className="flex h-full gap-2 p-3">
      <div className="flex w-1/5 flex-col gap-1.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="h-2 rounded bg-white/10" />
        ))}
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <div className="h-3 w-1/2 rounded bg-white/15" />
        <div className="h-16 rounded bg-gradient-to-r from-white/10 to-white/5" />
        <div className="grid grid-cols-3 gap-1.5">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-5 rounded bg-white/10" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Competitive() {
  return (
    <section className="bg-[#0a0a0f] px-4 py-20 sm:px-6 sm:py-28">
      <Reveal className="mx-auto mb-12 max-w-3xl text-center text-white">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white/40">
          Competitive scan
        </span>
        <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
          Learning from the best in fintech &amp; investing
        </h2>
        <p className="mt-3 text-white/50">
          I studied how leading platforms present dense financial data, then
          adapted those patterns for music royalties.
        </p>
      </Reveal>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {refs.map((name, i) => (
          <Reveal key={name} delay={(i % 3) * 0.06}>
            <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-colors hover:border-white/20">
              <div className="aspect-video">
                <Wire />
              </div>
              <div className="flex items-center justify-between border-t border-white/10 px-4 py-3">
                <span className="text-sm font-medium text-white">{name}</span>
                <span className="text-[11px] text-white/30">reference</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
