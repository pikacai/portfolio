import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown, Sparkles } from "lucide-react";

import googleCloudGif from "../../assets/googleCloudGif.gif";
import intoxiblockGif from "../../assets/intoxiblockGif.gif";
import restocksGif from "../../assets/restocks/restocksGif.gif";
import googleCloudGifStatic from "../../assets/googleCloudGifStatic.png";
import intoxiblockGifStatic from "../../assets/intoxiblockGifStatic.png";
import restocksGifStatic from "../../assets/restocksGifStatic.png";

import smile from "../../assets/lottieFiles/smile.json";
import { FlipWords } from "../ui/flip-words";
import LottieAnimation from "../utilities/LottieAnimation";
import HoverImage from "../HoverImage";
import JukeboxCover from "../jukebox/JukeboxCover";
import EquipGoCover from "../equipgo/EquipGoCover";
import ReframeCover from "../reframe/ReframeCover";

const ease = [0.22, 1, 0.36, 1] as const;

interface Project {
  product: string;
  type: string;
  tags: string[];
  description: string;
  image?: string;
  image_?: string;
  link: string;
  accent: string;
  rotate: number;
}

const experience: Project[] = [
  {
    product: "Jukebox",
    type: "Concept",
    tags: ["Fintech", "Investing"],
    description: "Turning music royalties into an investable asset class — research, value, buy.",
    link: "jukebox",
    accent: "#2F6BFF",
    rotate: -1.4,
  },
  {
    product: "Reframe",
    type: "Concept",
    tags: ["Health", "Onboarding"],
    description: "Redesigned onboarding for a behavior-change app — drop-off ↓29%, sign-up ↑30%.",
    link: "reframe",
    accent: "#38BDF8",
    rotate: 1.4,
  },
  {
    product: "EquipGo",
    type: "Internal tool",
    tags: ["FDNY", "Asset Tracking"],
    description: "An internal FDNY app to track & manage equipment — saving $1M+ in lost gear.",
    link: "equipgo",
    accent: "#FF6B5C",
    rotate: -1.2,
  },
  {
    product: "Lord of Savings",
    type: "Full-time",
    tags: ["E-Commerce", "AI Parsing"],
    description: "Leading design for an e-commerce platform finding deals for 300K+ users.",
    image: restocksGif,
    image_: restocksGifStatic,
    link: "restocks",
    accent: "#19C37D",
    rotate: 1.2,
  },
  {
    product: "IntoxiBlock",
    type: "Project",
    tags: ["Vehicle Safety", "iOS"],
    description: "An app that helps people get home safely after social events involving alcohol.",
    image: intoxiblockGif,
    image_: intoxiblockGifStatic,
    link: "intoxiblock",
    accent: "#8B5CF6",
    rotate: -1.3,
  },
  {
    product: "Google Cloud",
    type: "Internship",
    tags: ["CRM", "AI Recommendation"],
    description: "Designed with Google UX teams to validate concepts for an AI-powered CRM.",
    image: googleCloudGif,
    image_: googleCloudGifStatic,
    link: "google2",
    accent: "#FFC93C",
    rotate: 1.3,
  },
];

/** A floating decorative blob/shape. */
function Blob({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return <div aria-hidden className={`pika-float absolute ${className}`} style={style} />;
}

function Star({ className, color = "#FFC93C" }: { className?: string; color?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={`pika-float absolute ${className}`} fill={color}>
      <path d="M12 0c1.2 6.6 4.2 9.6 12 12-7.8 2.4-10.8 5.4-12 12-1.2-6.6-4.2-9.6-12-12C7.8 9.6 10.8 6.6 12 0Z" />
    </svg>
  );
}

function Home() {
  const selectedProjects = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    window.scroll({
      top: (selectedProjects?.current?.offsetTop ?? 600) - 40,
      left: 0,
      behavior: "smooth",
    });
  };

  const marquee = ["300K+ USERS", "UX", "PRODUCT", "AI", "3D", "AR", "PLAYFUL", "HUMAN"];

  return (
    <div className="pika-play font-play-body relative overflow-hidden" style={{ background: "var(--cream)" }}>
      {/* grain + dot texture */}
      <div aria-hidden className="grain pointer-events-none absolute inset-0 z-0 opacity-[0.06]" />
      <div aria-hidden className="grid-dots pointer-events-none absolute inset-0 z-0 opacity-50" />

      {/* ===================== HERO ===================== */}
      <section className="relative z-10 flex min-h-[94vh] w-full items-center px-6 pt-28">
        {/* floating shapes */}
        <Blob className="left-[6%] top-[20%] h-24 w-24 rounded-[38%_62%_55%_45%/45%_45%_55%_55%] border-[3px] border-ink" style={{ background: "var(--sun)", ["--r" as string]: "-8deg" }} />
        <Blob className="right-[8%] top-[16%] h-20 w-20 rounded-full" style={{ background: "var(--coral)", animationDelay: "1.2s", ["--r" as string]: "6deg" }} />
        <Blob className="bottom-[14%] left-[12%] h-16 w-16 rounded-2xl border-[3px] border-ink" style={{ background: "var(--mint)", animationDelay: "0.6s", ["--r" as string]: "10deg" }} />
        <Blob className="right-[14%] bottom-[22%] h-28 w-28 rounded-full border-[3px] border-ink" style={{ background: "transparent", animationDelay: "2s", ["--r" as string]: "0deg" }} />
        <Star className="right-[28%] top-[26%] h-7 w-7" color="#2F6BFF" />
        <Star className="left-[24%] bottom-[26%] h-5 w-5" color="#8B5CF6" />

        <div className="relative mx-auto w-full max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border-2 border-ink bg-white px-4 py-1.5 text-sm font-semibold text-ink shadow-[3px_3px_0_#15140F]"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" style={{ background: "var(--mint)" }} />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full" style={{ background: "var(--mint)" }} />
            </span>
            UX &amp; Product Designer — open to new opportunities
          </motion.div>

          <h1 className="font-play-display text-[3.4rem] font-extrabold leading-[0.92] text-ink sm:text-7xl lg:text-[5.6rem]">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05, ease }}
            >
              Make the user
            </motion.span>
            <motion.span
              className="mt-2 flex items-center gap-4"
              initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.16, ease }}
            >
              <span className="marker-hi">
                <span>happy</span>
                <svg viewBox="0 0 320 48" preserveAspectRatio="none">
                  <path d="M6 30 C70 12 250 10 314 22 C320 30 300 40 250 42 C150 46 60 44 10 40 C2 38 0 34 6 30 Z" fill="var(--sun)" />
                </svg>
              </span>
              <LottieAnimation
                src={smile}
                className="h-14 w-14 transition-transform hover:scale-110 sm:h-20 sm:w-20"
              />
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.28, ease }}
            className="mt-6 flex flex-wrap items-center text-2xl text-ink/70 sm:text-3xl"
          >
            <span className="font-semibold text-ink">Design</span>
            <FlipWords
              className="pl-1 font-semibold"
              duration={1400}
              words={["with AI", "with Fun", "with Simplicity", "for Minimalism", "in AR", "in 3D", "with New Trends"]}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.38, ease }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70"
          >
            I am Pika, Pikachu without chu. I like turning &ldquo;why is this so
            confusing?&rdquo; into &ldquo;oh&hellip; that was easy.&rdquo;
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.48, ease }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={handleScroll}
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-ink px-6 py-3 text-base font-bold text-[var(--cream)] shadow-[4px_4px_0_#15140F] transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#15140F]"
            >
              <Sparkles className="h-4 w-4" />
              View selected work
            </button>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-white px-6 py-3 text-base font-bold text-ink shadow-[4px_4px_0_#15140F] transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#15140F]"
            >
              About me
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        <motion.button
          onClick={handleScroll}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
          aria-label="Scroll to work"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink/50"
        >
          <ArrowDown className="h-6 w-6 animate-bounce" />
        </motion.button>
      </section>

      {/* ===================== MARQUEE ===================== */}
      <div className="relative z-10 overflow-hidden border-y-2 border-ink bg-ink py-4">
        <div className="pika-marquee-track">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center" aria-hidden={dup === 1}>
              {marquee.map((w, i) => (
                <span key={`${dup}-${i}`} className="flex items-center font-play-display text-lg font-bold uppercase tracking-wider text-[var(--cream)]">
                  <span className="px-6">{w}</span>
                  <span style={{ color: ["#FFC93C", "#FF6B5C", "#19C37D", "#38BDF8", "#8B5CF6"][i % 5] }}>✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ===================== PROJECTS ===================== */}
      <section ref={selectedProjects} className="relative z-10 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease }}
            className="mb-14 text-center"
          >
            <span className="inline-block -rotate-2 rounded-full border-2 border-ink bg-[var(--sun)] px-4 py-1 text-sm font-bold uppercase tracking-wide text-ink shadow-[3px_3px_0_#15140F]">
              Portfolio
            </span>
            <h2 className="font-play-display mt-5 text-5xl font-extrabold text-ink sm:text-6xl">
              Selected works
            </h2>
            <p className="mt-3 text-lg text-ink/70">A few projects I&apos;m proud of — hover to peek, click to dive in.</p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {experience.map((entry, index) => (
              <motion.div
                key={entry.link}
                initial={{ opacity: 0, y: 30, rotate: entry.rotate }}
                whileInView={{ opacity: 1, y: 0, rotate: entry.rotate }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: (index % 2) * 0.08, ease }}
                whileHover={{ rotate: 0, y: -8 }}
                className="group h-full"
              >
                <Link
                  to={entry.link}
                  className="flex h-full flex-col overflow-hidden rounded-[1.75rem] border-2 border-ink bg-white shadow-[6px_6px_0_#15140F] transition-shadow duration-200 group-hover:shadow-[10px_10px_0_#15140F]"
                >
                  {/* colored top band */}
                  <div className="flex items-center justify-between border-b-2 border-ink px-5 py-3" style={{ background: entry.accent }}>
                    <span className="font-play-display text-lg font-extrabold text-ink">
                      {entry.product}
                    </span>
                    <span className="rounded-full border-2 border-ink bg-white px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-ink">
                      {entry.type}
                    </span>
                  </div>

                  {/* cover */}
                  <div className="relative overflow-hidden border-b-2 border-ink bg-gradient-to-b from-slate-50 to-white">
                    <div className="pika-wiggle transition-transform duration-500 group-hover:scale-[1.03]">
                      {entry.link === "jukebox" ? (
                        <JukeboxCover />
                      ) : entry.link === "equipgo" ? (
                        <EquipGoCover />
                      ) : entry.link === "reframe" ? (
                        <ReframeCover />
                      ) : (
                        <HoverImage gifImage={entry.image!} staticImage={entry.image_!} />
                      )}
                    </div>
                  </div>

                  {/* body */}
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <div className="flex flex-wrap gap-2">
                      {entry.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border-[1.5px] border-ink px-3 py-1 text-xs font-bold text-ink"
                          style={{ background: `${entry.accent}22` }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <p className="text-base leading-relaxed text-ink/70">{entry.description}</p>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-2 font-bold text-ink">
                      View case study
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
