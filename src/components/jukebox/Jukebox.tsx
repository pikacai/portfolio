import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import JukeboxHero from "./JukeboxHero";
import Reveal from "../fx/Reveal";
import Context from "./sections/Context";
import Persona from "./sections/Persona";
import Branding from "./sections/Branding";
import Competitive from "./sections/Competitive";
import Positioning from "./sections/Positioning";
import Flow from "./sections/Flow";
import Closing from "./sections/Closing";

function Jukebox() {
  return (
    <div className="overflow-hidden">
      {/* Floating back button */}
      <Link
        to="/"
        className="fixed left-4 top-20 z-40 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white/20"
      >
        <ArrowLeft className="h-4 w-4" />
        Projects
      </Link>

      {/* Recreated hero — pixel-faithful to the export */}
      <JukeboxHero />

      {/* What is Jukebox? */}
      <section className="bg-white px-6 py-20 sm:py-28">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">
            What is Jukebox?
          </h2>
          <p className="mt-8 text-2xl font-medium leading-snug text-ink sm:text-[2.5rem] sm:leading-[1.3]">
            Jukebox is a{" "}
            <span className="font-bold text-[#3b6ef5]">fintech</span> platform
            that lets people invest in fractional music
            <span className="mx-2 inline-flex items-end gap-[3px] align-middle">
              <span className="h-3 w-[6px] rounded-[2px] bg-neutral-300" />
              <span className="h-4 w-[6px] rounded-[2px] bg-[#9bb6f9]" />
              <span className="h-6 w-[6px] rounded-[2px] bg-[#3b6ef5]" />
            </span>{" "}
            royalties, earning payouts based on songs&rsquo; streaming and
            licensing revenue.
          </p>
        </Reveal>
      </section>

      {/* Case study sections */}
      <Context />
      <Persona />
      <Branding />
      <Competitive />
      <Positioning />
      <Flow />
      <Closing />

      {/* Back CTA */}
      <section className="px-6 py-16">
        <Reveal className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-4 rounded-3xl border border-ink/10 bg-white p-7 shadow-soft">
          <p className="text-lg font-medium">Turning music into an investable asset class.</p>
          <div className="flex flex-wrap gap-3">
            <Link to="/" className="btn-ghost text-base">
              <ArrowLeft className="h-4 w-4" />
              All projects
            </Link>
            <Link to="/about" className="btn-gradient text-base">
              About me
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

export default Jukebox;
