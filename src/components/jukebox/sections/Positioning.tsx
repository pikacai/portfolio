import Reveal from "../../fx/Reveal";
import { Logo } from "../JukeboxHero";

function Chip({ label }: { label: string }) {
  return (
    <span className="rounded-lg bg-white/10 px-3 py-1.5 text-xs font-medium text-white/80">
      {label}
    </span>
  );
}

export default function Positioning() {
  return (
    <section className="bg-[#0a0a0f] px-4 py-20 sm:px-6 sm:py-28">
      <Reveal className="mx-auto mb-12 max-w-3xl text-center text-white">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white/40">
          Market positioning
        </span>
        <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
          A unique spot: compliant <span className="text-[#6b9bff]">and</span> broadly distributed
        </h2>
      </Reveal>

      <Reveal className="mx-auto max-w-3xl">
        <div className="relative">
          {/* axis labels */}
          <div className="absolute -left-2 top-0 hidden h-full flex-col justify-between text-xs text-white/40 sm:flex">
            <span>Broad</span>
            <span>Limited</span>
          </div>

          <div className="relative ml-0 sm:ml-8">
            <div className="relative grid aspect-square grid-cols-2 grid-rows-2 overflow-hidden rounded-2xl border border-white/10">
              {/* dashed center lines */}
              <div className="pointer-events-none absolute inset-x-0 top-1/2 border-t border-dashed border-white/15" />
              <div className="pointer-events-none absolute inset-y-0 left-1/2 border-l border-dashed border-white/15" />

              {/* top-left */}
              <div className="flex flex-col items-center justify-center gap-3 p-4 text-center">
                <p className="text-sm text-white/60">Direct-to-Fan Platforms</p>
                <div className="flex flex-wrap justify-center gap-2">
                  <Chip label="JKBX peers" />
                  <Chip label="Sonomo" />
                </div>
              </div>

              {/* top-right (highlighted) */}
              <div className="flex flex-col items-center justify-center gap-3 bg-[#16233f] p-4 text-center">
                <Logo className="h-10" />
                <p className="text-lg font-bold tracking-wide text-white">JUKEBOX</p>
              </div>

              {/* bottom-left */}
              <div className="flex flex-col items-center justify-center gap-3 p-4 text-center">
                <p className="text-sm text-white/60">Traditional PE / Labels</p>
                <div className="flex flex-wrap justify-center gap-2">
                  <Chip label="Blackstone" />
                  <Chip label="Apollo" />
                  <Chip label="Major labels" />
                </div>
              </div>

              {/* bottom-right */}
              <div className="flex flex-col items-center justify-center gap-3 p-4 text-center">
                <p className="text-sm text-white/60">Other Financial Platforms</p>
                <div className="flex flex-wrap justify-center gap-2">
                  <Chip label="Wealth mgmt" />
                  <Chip label="Brokerages" />
                </div>
              </div>
            </div>

            {/* x axis labels */}
            <div className="mt-3 flex justify-between text-xs text-white/40">
              <span>Limited</span>
              <span>Complete</span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
