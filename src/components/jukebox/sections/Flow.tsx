import Reveal from "../../fx/Reveal";

const steps = [
  "Portfolio",
  "Create a watchlist",
  "Watchlist / Edit",
  "Watchlist / Delete",
  "Upcoming Earnings",
];

/** Low-fi wireframe placeholder for a flow screen. */
function WireScreen() {
  return (
    <div className="flex gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] p-2">
      <div className="flex w-1/4 flex-col gap-1">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-1.5 rounded bg-white/10" />
        ))}
      </div>
      <div className="flex flex-1 flex-col gap-1.5">
        <div className="h-2 w-1/3 rounded bg-white/15" />
        <div className="h-10 rounded bg-gradient-to-r from-white/10 to-transparent" />
        <div className="grid grid-cols-3 gap-1">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-3 rounded bg-white/10" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Flow() {
  return (
    <section className="bg-[#0a0a0f] px-4 py-20 sm:px-6 sm:py-28">
      <Reveal className="mx-auto mb-12 max-w-3xl text-center text-white">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white/40">
          Interaction design
        </span>
        <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Portfolio flow</h2>
        <p className="mt-3 text-white/50">
          Mapping the full path — building a watchlist, editing and deleting it,
          and tracking upcoming royalty earnings.
        </p>
      </Reveal>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((label, i) => (
          <Reveal key={label} delay={(i % 3) * 0.06}>
            <div className="relative">
              <div className="mb-3 inline-flex items-center gap-2 rounded-md bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/70">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-[#3b6ef5] text-[10px] font-bold text-white">
                  {i + 1}
                </span>
                {label}
              </div>
              <WireScreen />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
