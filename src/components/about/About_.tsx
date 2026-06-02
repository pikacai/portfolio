import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowUpRight } from "lucide-react";

import BoldText from "../utilities/BoldText";
import { Timeline } from "../ui/timeline";
import Aurora from "../fx/Aurora";
import Reveal from "../fx/Reveal";
import TiltCard from "../fx/TiltCard";
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
          <div className="grid grid-cols-2 gap-4">
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
          <div className="grid grid-cols-2 gap-4">
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
          <div className="grid grid-cols-2 gap-4">
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
          <div className="grid grid-cols-2 gap-4">
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
          <div className="grid grid-cols-2 gap-4">
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
          <div className="grid grid-cols-2 gap-4">
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
          <div className="grid grid-cols-2 gap-4">
            <PhotoCard src={cornellGraduation} alt="Cornell graduation" tilt={-2} />
            <PhotoCard src={cornellEvent} alt="Cornell community event" tilt={2} />
          </div>
        </div>
      ),
    },
  ];

  const scrollToTimeline = () => {
    document
      .getElementById("journey")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="overflow-hidden">
      {/* ===================== HERO ===================== */}
      <section className="relative flex min-h-[80vh] w-full items-center justify-center px-6 pt-28">
        <Aurora />
        <div className="w-full max-w-4xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-block rounded-full border border-ink/10 bg-white/70 px-4 py-1.5 text-sm font-medium text-ink-muted backdrop-blur"
          >
            About me
          </motion.span>

          <h1 className="flex flex-wrap items-center justify-center gap-x-4 text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
            >
              Hi, I&apos;m <span className="text-gradient-animate">Pika</span>
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
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted sm:text-xl"
          >
            Artist turned ex-pre-med turned product designer. I&apos;ve zig-zagged
            from hospitals to summer camps to Cornell&apos;s HCI program — and
            every detour taught me to design for real, delightfully human
            experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-4"
          >
            <button onClick={scrollToTimeline} className="btn-gradient text-base">
              <ArrowDown className="h-4 w-4" />
              See my journey
            </button>
            <Link to="/" className="btn-ghost text-base">
              View work
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===================== STATS ===================== */}
      <section className="px-6 py-8">
        <Reveal className="mx-auto grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-3xl border border-ink/10 bg-white p-6 text-center shadow-soft"
            >
              <div className="text-3xl font-bold sm:text-4xl">
                <AnimatedCounter
                  to={s.to}
                  suffix={s.suffix}
                  className="text-gradient"
                />
              </div>
              <p className="mt-2 text-sm text-ink-muted">{s.label}</p>
            </div>
          ))}
        </Reveal>
      </section>

      {/* ===================== FUN FACTS ===================== */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <Reveal className="mb-10 text-center">
            <h2 className="text-3xl font-semibold sm:text-4xl">
              A few <span className="text-gradient">fun facts</span>
            </h2>
            <p className="mt-2 text-ink-muted">Hover around — I don&apos;t bite.</p>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {funFacts.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 0.06}>
                <div className="group h-full">
                  <TiltCard
                    intensity={6}
                    className="flex h-full flex-col gap-2 rounded-3xl border border-ink/10 bg-white p-7 shadow-soft transition-shadow duration-300 group-hover:shadow-glow"
                  >
                    <span className="text-4xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                      {f.emoji}
                    </span>
                    <h3 className="mt-1 text-lg font-semibold">{f.title}</h3>
                    <p className="text-sm leading-relaxed text-ink-muted">
                      {f.desc}
                    </p>
                  </TiltCard>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== JOURNEY TIMELINE ===================== */}
      <section id="journey" className="px-2 pt-10 sm:px-6">
        <Reveal className="mb-2 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-muted">
            The long way around
          </span>
          <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">
            My <span className="text-gradient">journey</span>
          </h2>
        </Reveal>
        <Timeline data={data} />
      </section>
    </div>
  );
}

export default About_;
