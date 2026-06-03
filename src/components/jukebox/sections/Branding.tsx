import Reveal from "../../fx/Reveal";
import SectionExport from "./SectionExport";

function BrandingCoded() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 sm:py-28">
      <Reveal className="mx-auto mb-12 max-w-3xl text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-muted">
          Visual identity
        </span>
        <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
          A calm, confident <span className="text-gradient">fintech</span> system
        </h2>
      </Reveal>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-3">
        {/* Type specimen */}
        <Reveal className="md:col-span-2">
          <div className="relative flex h-full min-h-[320px] flex-col justify-between overflow-hidden rounded-3xl bg-[#0d0d12] p-8 text-white">
            <div
              aria-hidden
              className="absolute -bottom-10 -left-10 h-56 w-56 rounded-full bg-[#3b6ef5]/40 blur-3xl"
            />
            <div className="relative flex items-start justify-between text-sm text-white/70">
              <span>/Font</span>
              <span className="font-medium text-white">Geist</span>
            </div>
            <div className="relative mt-6 space-y-1 font-medium tracking-tight text-white/85">
              <p>abcdefghijklmnopqrstuvwxyz</p>
              <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              <p>1234567890!@#$%^&amp;*(_+</p>
            </div>
            <div className="relative mt-8 flex items-end justify-between">
              <div className="flex gap-6 text-sm">
                <span className="font-normal text-white/70">Regular</span>
                <span className="font-medium text-white/85">Medium</span>
                <span className="font-bold text-white">Bold</span>
              </div>
              <span className="text-7xl font-bold leading-none tracking-tight sm:text-8xl">
                Aa
              </span>
            </div>
          </div>
        </Reveal>

        {/* Color swatches */}
        <Reveal className="grid grid-cols-2 gap-5">
          <div className="col-span-2 flex min-h-[120px] items-center justify-center rounded-3xl bg-[#EBF2FE] text-sm font-medium text-neutral-500 ring-1 ring-ink/10">
            #EBF2FE
          </div>
          <div className="flex min-h-[120px] items-center justify-center rounded-3xl bg-[#E4E4E7] text-sm font-medium text-neutral-500 ring-1 ring-ink/10">
            #E4E4E7
          </div>
          <div className="flex min-h-[120px] items-center justify-center rounded-3xl bg-[#3b6ef5] text-sm font-medium text-white/90">
            #3B6EF5
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function Branding() {
  return (
    <SectionExport file="branding.png" alt="Jukebox branding" bgClass="bg-white">
      <BrandingCoded />
    </SectionExport>
  );
}
