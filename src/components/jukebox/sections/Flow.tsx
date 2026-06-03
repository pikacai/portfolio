import Reveal from "../../fx/Reveal";
import SectionExport from "./SectionExport";

function FlowCoded() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 sm:py-28">
      <Reveal className="mx-auto mb-12 max-w-3xl text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-muted">
          Interaction design
        </span>
        <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">Portfolio flow</h2>
        <p className="mt-3 text-ink-muted">
          Mapping the full path — building a watchlist, editing and deleting it,
          and tracking upcoming royalty earnings.
        </p>
      </Reveal>

      <Reveal className="mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-2xl border border-ink/10 bg-neutral-50 p-4 shadow-soft sm:p-6">
          <img
            src="/jukebox/portfolio-flow.png"
            alt="Jukebox portfolio flow — building a watchlist, editing and deleting it, and tracking upcoming royalty earnings"
            loading="lazy"
            className="w-full rounded-lg"
          />
        </div>
      </Reveal>
    </section>
  );
}

export default function Flow() {
  return (
    <SectionExport file="flow.png" alt="Jukebox portfolio flow" bgClass="bg-white">
      <FlowCoded />
    </SectionExport>
  );
}
