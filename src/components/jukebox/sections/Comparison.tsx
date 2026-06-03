import Reveal from "../../fx/Reveal";
import SectionExport from "./SectionExport";

const platforms = [
  { name: "Jukebox", src: "/jukebox/jukebox.png" },
  { name: "Fidelity", src: "/jukebox/fidelity.png" },
  { name: "Robinhood", src: "/jukebox/robinhood.png" },
  { name: "Webull", src: "/jukebox/webull.png" },
  { name: "Etoro", src: "/jukebox/etoro.png" },
];

/** A single phone screen from the comparison set. */
function PhoneScreen({ name, src }: { name: string; src: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <span className="rounded-lg bg-white/10 px-3 py-1 text-xs font-medium text-white/80">
        {name}
      </span>
      <img
        src={src}
        alt={`${name} buy flow`}
        loading="lazy"
        className="mx-auto w-full max-w-[150px] rounded-[1.6rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.6)]"
      />
    </div>
  );
}

function ComparisonCoded() {
  return (
    <section className="bg-[#0a0a12] px-4 py-20 sm:px-6 sm:py-28">
      <Reveal className="mx-auto mb-14 max-w-3xl text-center text-white">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white/40">
          Comparison
        </span>
        <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
          Buying a song, across platforms
        </h2>
        <p className="mt-3 text-white/50">
          I benchmarked the Jukebox buy flow against major brokerages — keeping
          it familiar to investors while making it simpler than the rest.
        </p>
      </Reveal>
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
        {platforms.map((p, i) => (
          <Reveal key={p.name} delay={(i % 5) * 0.05}>
            <PhoneScreen name={p.name} src={p.src} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default function Comparison() {
  return (
    <SectionExport
      file="comparison.png"
      alt="Jukebox buy flow compared across platforms"
      bgClass="bg-[#0a0a12]"
    >
      <ComparisonCoded />
    </SectionExport>
  );
}
