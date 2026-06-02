import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown, Sparkles } from "lucide-react";

import googleCloudGif from "../../assets/googleCloudGif.gif";
import googleMapsGif from "../../assets/googleMapsGif.gif";
import intoxiblockGif from "../../assets/intoxiblockGif.gif";
import restocksGif from "../../assets/restocks/restocksGif.gif";
import googleCloudGifStatic from "../../assets/googleCloudGifStatic.png";
import googleMapsGifStatic from "../../assets/googleMapsGifStatic.png";
import intoxiblockGifStatic from "../../assets/intoxiblockGifStatic.png";
import restocksGifStatic from "../../assets/restocksGifStatic.png";

import GradientText from "../utilities/GradientText";
import smile from "../../assets/lottieFiles/smile.json";

import map from "../../assets/home/map.svg";
import crm from "../../assets/home/crm.svg";
import car from "../../assets/home/car.svg";
import bag from "../../assets/home/bag.svg";
import apple from "../../assets/home/apple.svg";
import ai from "../../assets/home/ai.svg";
import { FlipWords } from "../ui/flip-words";
import LottieAnimation from "../utilities/LottieAnimation";
import HoverImage from "../HoverImage";
import Aurora from "../fx/Aurora";
import Reveal from "../fx/Reveal";
import TiltCard from "../fx/TiltCard";

const jukeboxThumb = `${import.meta.env.BASE_URL}jukebox/thumbnail.png`;

function Home() {
  const experience = [
    {
      product: "Restocks",
      type: "full-time",
      tags: [
        <span className="flex items-center gap-x-2 no-underline text-sm p-[6px] bg-[#CEFFD8] text-[#00B852] font-semibold rounded-full w-fit pr-2">
          <img src={bag} className="h-6 w-6 bg-[#00B852] rounded-full p-1" />
          E-Commerce
        </span>,
        <span
          style={{
            background:
              "linear-gradient(89.19deg, rgba(13, 140, 255, 0.2) 0.7%, rgba(80, 216, 253, 0.2) 33.24%, rgba(212, 154, 238, 0.2) 62.33%, rgba(252, 150, 103, 0.2) 99.31%)",
          }}
          className="flex items-center gap-x-2 no-underline text-sm p-[6px] text-[#00B852] font-semibold rounded-full w-fit pr-2"
        >
          <img
            style={{
              background:
                "linear-gradient(89.19deg, #0D8CFF 0.7%, #50D8FD 33.24%, #D49AEE 62.33%, #FC9667 99.31%)",
            }}
            src={ai}
            className="h-6 w-6 rounded-full p-1"
          />
          <GradientText
            gradient="linear-gradient(89.19deg, #0D8CFF 0.7%, #00B3E4 31.51%, #AF16F4 62.33%, #FF7535 99.31%)"
            text="_AI Parsing_"
            parentElement="span"
          />
        </span>,
      ],
      description:
        "Leading design for an e-commerce platform identifying deals for 300K+ users.",
      image: restocksGif,
      image_: restocksGifStatic,
      alt: "Restocks deal-finding app.",
      link: "restocks",
    },
    {
      product: "Jukebox",
      type: "concept",
      tags: [
        <span className="flex items-center gap-x-2 no-underline text-sm p-[6px] px-3 bg-[#0D6EFD] bg-opacity-20 text-[#0D6EFD] font-semibold rounded-full w-fit">
          Fintech
        </span>,
        <span className="flex items-center gap-x-2 no-underline text-sm p-[6px] px-3 bg-[#9747FF] bg-opacity-20 text-[#9747FF] font-semibold rounded-full w-fit">
          Investing
        </span>,
      ],
      description:
        "A platform that turns music royalties into an investable asset class — research, value, and buy.",
      image: jukeboxThumb,
      image_: jukeboxThumb,
      alt: "Jukebox music-investing platform.",
      link: "jukebox",
    },
    {
      product: "Google Cloud",
      type: "internship",
      tags: [
        <span className="flex items-center gap-x-2 no-underline text-sm p-[6px] bg-[#E94236] bg-opacity-20 text-[#E94236] font-semibold rounded-full w-fit pr-2">
          <img src={crm} className="h-6 w-6 bg-[#E94236] rounded-full p-1" />
          CRM
        </span>,
        <span
          style={{
            background:
              "linear-gradient(89.19deg, rgba(13, 140, 255, 0.2) 0.7%, rgba(80, 216, 253, 0.2) 33.24%, rgba(212, 154, 238, 0.2) 62.33%, rgba(252, 150, 103, 0.2) 99.31%)",
          }}
          className="flex items-center gap-x-2 no-underline text-sm p-[6px] text-[#00B852] font-semibold rounded-full w-fit pr-2"
        >
          <img
            style={{
              background:
                "linear-gradient(89.19deg, #0D8CFF 0.7%, #50D8FD 33.24%, #D49AEE 62.33%, #FC9667 99.31%)",
            }}
            src={ai}
            className="h-6 w-6 rounded-full p-1"
          />
          <GradientText
            gradient="linear-gradient(89.19deg, #0D8CFF 0.7%, #00B3E4 31.51%, #AF16F4 62.33%, #FF7535 99.31%)"
            text="_AI Recommendation_"
            parentElement="span"
          />
        </span>,
      ],
      description:
        "Designed alongside Google UX Designers and Researchers to validate concepts for an AI-powered CRM.",
      image: googleCloudGif,
      image_: googleCloudGifStatic,
      alt: "Google Cloud CRM concept.",
      link: "google2",
    },
    {
      product: "IntoxiBlock",
      type: "project",
      tags: [
        <span className="flex items-center gap-x-2 no-underline text-sm p-[6px] bg-[#0D6EFD] bg-opacity-20 text-[#0D6EFD] font-semibold rounded-full w-fit pr-2">
          <img src={car} className="h-6 w-6 bg-[#0D6EFD] rounded-full p-1" />
          Vehicle Safety
        </span>,
        <span className="flex items-center gap-x-2 no-underline text-sm p-[6px] bg-[#2E2E2E] bg-opacity-20 text-[#2E2E2E] font-semibold rounded-full w-fit pr-2">
          <img
            src={apple}
            className="h-6 w-6 bg-[#2E2E2E] rounded-full p-[5px]"
          />
          iOS
        </span>,
      ],
      description:
        "An app that ensures people return home safely after social events involving alcohol.",
      image: intoxiblockGif,
      image_: intoxiblockGifStatic,
      alt: "IntoxiBlock app.",
      link: "intoxiblock",
    },
    {
      product: "Google Maps",
      type: "project",
      tags: [
        <span className="flex items-center gap-x-2 no-underline text-sm p-[6px] bg-[#9747FF] bg-opacity-20 text-[#9747FF] font-semibold rounded-full w-fit pr-2">
          <img src={map} className="h-6 w-6 bg-[#9747FF] rounded-full p-1" />
          Navigation
        </span>,
      ],
      description:
        "Reimagined Google Maps for streamlined navigation and a friendlier mapping experience.",
      image: googleMapsGif,
      image_: googleMapsGifStatic,
      alt: "Google Maps redesign.",
      link: "google",
    },
  ];

  const selectedProjects = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    window.scroll({
      top: (selectedProjects?.current?.offsetTop ?? 600) - 40,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="overflow-hidden">
      {/* ===================== HERO ===================== */}
      <section className="relative flex min-h-[92vh] w-full items-center justify-center px-6 pt-28">
        <Aurora />
        <div className="w-full max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-4 py-1.5 text-sm font-medium text-ink-muted backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            UX &amp; Product Designer — open to new opportunities
          </motion.div>

          <h1 className="flex flex-wrap items-center gap-x-4 gap-y-2 text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
            >
              Make the user
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex items-center gap-3"
            >
              <span className="text-gradient-animate">happy</span>
              <LottieAnimation
                src={smile}
                className="h-[3.5rem] w-[3.5rem] transition-transform hover:scale-110 sm:h-[4.5rem] sm:w-[4.5rem]"
              />
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-5 flex flex-wrap items-center text-2xl text-ink-muted sm:text-3xl"
          >
            <span className="font-medium">Design</span>
            <FlipWords
              className="pl-1 font-medium text-ink"
              duration={1400}
              words={[
                "with AI",
                "with Fun",
                "with Simplicity",
                "for Minimalism",
                "in AR",
                "in 3D",
                "in line with New Trends",
              ]}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted"
          >
            I&apos;m Pika — a designer who turns complex problems into clean,
            delightful products. Currently shaping e-commerce experiences for
            300K+ users.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <button onClick={handleScroll} className="btn-gradient text-base">
              <Sparkles className="h-4 w-4" />
              View selected work
            </button>
            <Link to="/about" className="btn-ghost text-base">
              About me
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        <motion.button
          onClick={handleScroll}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          aria-label="Scroll to work"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-muted"
        >
          <ArrowDown className="h-6 w-6 animate-bounce" />
        </motion.button>
      </section>

      {/* ===================== PROJECTS ===================== */}
      <section ref={selectedProjects} className="px-6 pb-28">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-12 flex flex-col items-center text-center">
            <span className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-ink-muted">
              Portfolio
            </span>
            <h2 className="text-4xl font-semibold sm:text-5xl">
              Selected <span className="text-gradient">Works</span>
            </h2>
            <p className="mt-3 max-w-md text-ink-muted">
              A few projects I&apos;m proud of — hover to preview, click to dive
              in.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {experience.map((entry, index) => (
              <Reveal key={index} delay={(index % 2) * 0.08} className="h-full">
                <Link to={entry.link} className="group block h-full">
                  <TiltCard className="flex h-full flex-col overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-soft transition-shadow duration-300 group-hover:shadow-lift">
                    <div className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
                      <div className="transition-transform duration-500 group-hover:scale-[1.03]">
                        <HoverImage
                          gifImage={entry.image}
                          staticImage={entry.image_}
                        />
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col gap-3 border-t border-ink/5 p-7">
                      <div className="flex items-center justify-between">
                        <h3 className="flex items-center gap-x-2 text-lg font-semibold tracking-wide lg:text-xl">
                          {entry.product.toUpperCase()}
                          <span className="rounded-full bg-ink/5 px-2 py-0.5 text-[10px] font-semibold tracking-wider text-ink-muted">
                            {entry.type.toUpperCase()}
                          </span>
                        </h3>
                        <span className="grid h-9 w-9 place-items-center rounded-full bg-ink/5 text-ink transition-all duration-300 group-hover:bg-brand-gradient group-hover:text-white">
                          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {entry.tags.map((t, i) => (
                          <span key={i}>{t}</span>
                        ))}
                      </div>
                      <p className="mt-1 text-base text-ink-muted lg:text-lg">
                        {entry.description}
                      </p>
                    </div>
                  </TiltCard>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
