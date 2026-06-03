import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowUpRight } from "lucide-react";

import BoldText from "../utilities/BoldText";
import { Timeline } from "../ui/timeline";
import Reveal from "../fx/Reveal";
import AnimatedCounter from "../fx/AnimatedCounter";
import PhotoCard from "./PhotoCard";

import vangogh from "../../assets/about/vangogh.png";
import vote from "../../assets/about/vote.png";
import notes from "../../assets/about/notes.png";
import nycPlanning from "../../assets/about/nyc-planning.png";
import ub from "../../assets/about/ub.png";
import codePathFlyer from "../../assets/about/codepath-flyer.png";
import speakhireLogo from "../../assets/about/speakhire-logo.png";
import metlife from "../../assets/about/metlife.png";
import dec from "../../assets/about/dec.png";
import google from "../../assets/about/google.png";
import ar from "../../assets/about/ar.png";
import cornellGraduation from "../../assets/about/cornell-graduation.png";
import cornellEvent from "../../assets/about/cornell-event.png";
import fdny from "../../assets/about/fdny.jpg";
import photographer from "../../assets/about/photographer.png";

const ease = [0.22, 1, 0.36, 1] as const;
const ACCENTS = ["#2F6BFF", "#FF6B5C", "#FFC93C", "#19C37D", "#38BDF8", "#8B5CF6"];

const stats = [
  { to: 45000, suffix: "+", label: "associates connected at MetLife" },
  { to: 300000, suffix: "+", label: "users I design for today" },
  { to: 2, suffix: "", label: "iOS courses I taught & led" },
  { to: 1, suffix: " 🏆", label: "AR capstone competition won" },
];

const funFacts = [
  { emoji: "🎨", title: "Aspiring Van Gogh", desc: "Visual art has been my thing since day one." },
  { emoji: "🩺", title: "Recovering pre-med", desc: "Started in medicine before pixels won me over." },
  { emoji: "🏕️", title: "Camp counselor", desc: "Spent a summer with the NY State DEC outdoors." },
  { emoji: "📱", title: "iOS instructor", desc: "Launched UB's first CodePath iOS course." },
  { emoji: "🎓", title: "Cornell HCI", desc: "Information Science, focused on human-computer interaction." },
  { emoji: "🤝", title: "Community builder", desc: "Hosting events & making yearbooks to bring people together." },
];

function About_() {
  const data = [
    {
      title: "2018",
      content: (
        <div>
          <BoldText
            text="Since I was young, I've had a _passion for visual art and serving the community_. Here's a photo of me emulating Van Gogh and a poster from when I was elected Student Body President."
            className="mb-8 text-base font-normal text-ink-muted"
            parentElement="p"
          />
          <div className="grid grid-cols-2 items-start gap-4">
            <PhotoCard src={vangogh} alt="Emulating Van Gogh" tilt={-2} />
            <PhotoCard src={vote} alt="Student body president poster" tilt={2} />
          </div>
        </div>
      ),
    },
    {
      title: "2019",
      content: (
        <div>
          <BoldText
            text="I began my undergraduate journey studying pre-med. Here's a photo from my time as a pre-med _content creator_."
            className="mb-8 text-base font-normal text-ink-muted"
            parentElement="p"
          />
          <div className="grid grid-cols-2 items-start gap-4">
            <PhotoCard src={notes} alt="Pre-med content creation" tilt={-1.5} />
          </div>
        </div>
      ),
    },
    {
      title: "2020",
      content: (
        <div>
          <BoldText
            text="My very first internship was at the New York City Department of City Planning where I was a _Quality Assurance Engineer_ improving an internal application to handle building permits."
            className="mb-8 text-base font-normal text-ink-muted"
            parentElement="p"
          />
          <div className="grid grid-cols-2 items-start gap-4">
            <PhotoCard src={nycPlanning} alt="NYC Department of City Planning" tilt={1.5} />
          </div>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <BoldText
            text="This year was a roller coaster. I transferred to the University at Buffalo to begin a new chapter studying _Computer Science_."
            className="mb-4 text-base font-normal text-ink-muted"
            parentElement="p"
          />
          <BoldText
            text="Not long after joining, I _launched University at Buffalo's very first CodePath.org iOS development course_ which I lead for 2 semesters."
            className="mb-4 text-base font-normal text-ink-muted"
            parentElement="p"
          />
          <BoldText
            text="I also completed a second internship at _SpeakHire_. It was my first experience being a Frontend Software Engineer focusing on _User Experience Design_."
            className="mb-8 text-base font-normal text-ink-muted"
            parentElement="p"
          />
          <div className="grid grid-cols-2 items-start gap-4">
            <PhotoCard src={ub} alt="University at Buffalo" tilt={-2} />
            <PhotoCard src={codePathFlyer} alt="CodePath iOS flyer" tilt={2} />
            <PhotoCard src={speakhireLogo} alt="SpeakHire" tilt={1.5} />
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <BoldText
            text="I continued my UX product design journey at MetLife where I _launched a prototype for an internal social media platform_ to better connect 45,000+ associates."
            className="mb-8 text-base font-normal text-ink-muted"
            parentElement="p"
          />
          <div className="grid grid-cols-2 items-start gap-4">
            <PhotoCard src={metlife} alt="MetLife" tilt={-1.5} />
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <BoldText
            text="Upon graduating, I experienced something new! I became a _Summer Camp Counselor_ for the New York State Department of Environmental Conservation."
            className="mb-4 text-base font-normal text-ink-muted"
            parentElement="p"
          />
          <BoldText
            text="Following that experience, I was accepted into _Cornell University to study Information Science with a concentration in Human-Computer Interaction (HCI)_. I immediately enrolled into a joint Cornell x Google venture to explore creating an internal CRM tool for Google Cloud."
            className="mb-4 text-base font-normal text-ink-muted"
            parentElement="p"
          />
          <BoldText
            text="Just before the New Year, I completed an _augmented reality course, where I won the competition with my capstone project_."
            className="mb-8 text-base font-normal text-ink-muted"
            parentElement="p"
          />
          <div className="grid grid-cols-2 items-start gap-4">
            <PhotoCard src={dec} alt="NY State DEC summer camp" tilt={-2} />
            <PhotoCard src={google} alt="Cornell x Google venture" tilt={2} />
            <PhotoCard src={ar} alt="AR capstone project" tilt={1.5} />
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <BoldText
            text="As I concluded my time at Cornell University, I'm proud to have hosted events to strengthen our community and taken the lead in creating a yearbook to capture our shared experiences."
            className="mb-8 text-base font-normal text-ink-muted"
            parentElement="p"
          />
          <div className="grid grid-cols-2 items-start gap-4">
            <PhotoCard src={cornellGraduation} alt="Cornell graduation" tilt={-2} />
            <PhotoCard src={cornellEvent} alt="Cornell community event" tilt={2} />
          </div>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <BoldText
            text="I joined the _FDNY_ to design impactful applications for frontline _EMTs and firefighters_ — building tools that support the people who respond when seconds matter most. Outside of work, I also _became a photographer_."
            className="mb-8 text-base font-normal text-ink-muted"
            parentElement="p"
          />
          <div className="grid grid-cols-2 items-start gap-4">
            <PhotoCard src={fdny} alt="At the FDNY, designing for frontline EMTs and firefighters" fit="cover" ratio="aspect-[4/5]" tilt={-1.5} />
            <PhotoCard src={photographer} alt="Become a photographer" fit="cover" ratio="aspect-[4/5]" tilt={2} />
          </div>
        </div>
      ),
    },
  ];

  const scrollToTimeline = () => {
    document.getElementById("journey")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="pika-play font-play-body relative overflow-hidden" style={{ background: "var(--cream)" }}>
      <div aria-hidden className="grain pointer-events-none absolute inset-0 z-0 opacity-[0.06]" />
      <div aria-hidden className="grid-dots pointer-events-none absolute inset-0 z-0 opacity-50" />

      {/* ===================== HERO ===================== */}
      <section className="relative z-10 flex min-h-[78vh] w-full items-center justify-center px-6 pt-28 text-center">
        <div aria-hidden className="pika-float absolute left-[10%] top-[24%] h-20 w-20 rounded-[40%_60%_55%_45%/50%] border-[3px] border-ink" style={{ background: "var(--sun)", ["--r" as string]: "-8deg" }} />
        <div aria-hidden className="pika-float absolute right-[12%] top-[22%] h-16 w-16 rounded-full" style={{ background: "var(--coral)", animationDelay: "1s", ["--r" as string]: "6deg" }} />
        <div aria-hidden className="pika-float absolute bottom-[18%] right-[18%] h-14 w-14 rounded-2xl border-[3px] border-ink" style={{ background: "var(--mint)", animationDelay: "0.5s", ["--r" as string]: "10deg" }} />

        <div className="relative w-full max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="mb-6 inline-block -rotate-2 rounded-full border-2 border-ink bg-white px-4 py-1.5 text-sm font-bold uppercase tracking-wide text-ink shadow-[3px_3px_0_#15140F]"
          >
            About me
          </motion.span>

          <h1 className="font-play-display flex flex-wrap items-center justify-center gap-x-4 text-[3.2rem] font-extrabold leading-[0.95] text-ink sm:text-6xl lg:text-7xl">
            <motion.span initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05, ease }}>
              Hi, I&apos;m{" "}
              <span className="marker-hi">
                <span>Pika</span>
                <svg viewBox="0 0 220 48" preserveAspectRatio="none">
                  <path d="M6 30 C50 12 170 10 214 22 C220 30 200 40 165 42 C100 46 45 44 10 40 C2 38 0 34 6 30 Z" fill="var(--coral)" />
                </svg>
              </span>
            </motion.span>
            <motion.span
              aria-hidden
              animate={{ rotate: [0, 18, -8, 18, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 1.4 }}
              className="inline-block origin-[70%_70%]"
            >
              👋
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2, ease }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink/70 sm:text-xl"
          >
            Artist turned ex-pre-med turned product designer. I&apos;ve zig-zagged from
            hospitals to summer camps to Cornell&apos;s HCI program — and every detour
            taught me to design for real, delightfully human experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35, ease }}
            className="mt-9 flex flex-wrap items-center justify-center gap-4"
          >
            <button
              onClick={scrollToTimeline}
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-ink px-6 py-3 text-base font-bold text-[var(--cream)] shadow-[4px_4px_0_#15140F] transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#15140F]"
            >
              <ArrowDown className="h-4 w-4" />
              See my journey
            </button>
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-white px-6 py-3 text-base font-bold text-ink shadow-[4px_4px_0_#15140F] transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#15140F]"
            >
              View work
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===================== STATS ===================== */}
      <section className="relative z-10 px-6 py-10">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-5 sm:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20, rotate: i % 2 ? 1.5 : -1.5 }}
              whileInView={{ opacity: 1, y: 0, rotate: i % 2 ? 1.5 : -1.5 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06, ease }}
              whileHover={{ rotate: 0, y: -6 }}
              className="rounded-2xl border-2 border-ink p-5 text-center shadow-[5px_5px_0_#15140F]"
              style={{ background: `${ACCENTS[i % ACCENTS.length]}22` }}
            >
              <AnimatedCounter
                to={s.to}
                suffix={s.suffix}
                className="font-play-display block text-3xl font-extrabold text-ink sm:text-4xl"
              />
              <p className="mt-2 text-sm font-medium text-ink/70">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===================== FUN FACTS ===================== */}
      <section className="relative z-10 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <Reveal className="mb-10 text-center">
            <h2 className="font-play-display text-4xl font-extrabold text-ink sm:text-5xl">
              A few fun facts
            </h2>
            <p className="mt-2 text-ink/70">Hover around — I don&apos;t bite.</p>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {funFacts.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24, rotate: i % 2 ? 1.4 : -1.4 }}
                whileInView={{ opacity: 1, y: 0, rotate: i % 2 ? 1.4 : -1.4 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.06, ease }}
                whileHover={{ rotate: 0, y: -8 }}
                className="group flex h-full flex-col gap-2 rounded-2xl border-2 border-ink p-6 shadow-[5px_5px_0_#15140F]"
                style={{ background: `${ACCENTS[i % ACCENTS.length]}1f` }}
              >
                <span className="pika-wiggle text-4xl">{f.emoji}</span>
                <h3 className="font-play-display mt-1 text-lg font-extrabold text-ink">{f.title}</h3>
                <p className="text-sm leading-relaxed text-ink/70">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== JOURNEY TIMELINE ===================== */}
      <section id="journey" className="relative z-10 px-2 pt-10 sm:px-6">
        <Reveal className="mb-2 text-center">
          <span className="inline-block -rotate-2 rounded-full border-2 border-ink bg-[var(--sun)] px-4 py-1 text-sm font-bold uppercase tracking-wide text-ink shadow-[3px_3px_0_#15140F]">
            The long way around
          </span>
          <h2 className="font-play-display mt-5 text-4xl font-extrabold text-ink sm:text-5xl">
            My journey
          </h2>
        </Reveal>
        <Timeline data={[...data].reverse()} />
      </section>
    </div>
  );
}

export default About_;
