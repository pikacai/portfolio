import { Link, useLocation } from "react-router-dom";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { ArrowUpRight } from "lucide-react";

import googleCloudGif from "../assets/googleCloudGif.gif";
import intoxiblockGif from "../assets/intoxiblockGif.gif";

import Reveal from "./fx/Reveal";
import EquipGoCover from "./equipgo/EquipGoCover";
import ReframeCover from "./reframe/ReframeCover";
import JukeboxCover from "./jukebox/JukeboxCover";

const jukeboxThumb = `${import.meta.env.BASE_URL}jukebox/thumbnail.png`;

function Footer() {
  let experience = [
    {
      product: "Jukebox",
      type: "concept",
      tags: ["Fintech", "Investing"],
      description:
        "Turning music royalties into an investable asset class.",
      image: jukeboxThumb,
      link: "jukebox",
    },
    {
      product: "EquipGo",
      type: "internal tool",
      tags: ["FDNY", "Asset Tracking"],
      description:
        "An internal FDNY app to track & manage equipment — saving $1M+ in lost gear.",
      image: jukeboxThumb,
      link: "equipgo",
    },
    {
      product: "Reframe",
      type: "concept",
      tags: ["Health", "Onboarding"],
      description:
        "Redesigned onboarding for a behavior-change app — cutting drop-off and speeding sign-up.",
      image: jukeboxThumb,
      link: "reframe",
    },
    {
      product: "IntoxiBlock",
      type: "project",
      tags: ["3D Design"],
      description:
        "Designed an app to ensure people's safe return home after social events involving alcohol consumption.",
      image: intoxiblockGif,
      link: "intoxiblock",
    },
    {
      product: "Google Cloud",
      type: "project",
      tags: ["Cloud", "CRM", "AI"],
      description:
        "Validated design concepts for a Google AI-powered CRM application.",
      image: googleCloudGif,
      link: "google2",
    },
  ];
  const { pathname } = useLocation();
  experience = experience.filter((entry) => "/" + entry.link !== pathname);

  return (
    <footer className="flex w-full flex-col items-center">
      {pathname !== "/" && (
        <div className="w-full px-6 pt-28">
          <Reveal className="mb-12 text-center">
            <h2 className="text-4xl font-semibold sm:text-5xl">
              Other Selected <span className="text-gradient">Work</span>
            </h2>
          </Reveal>
          <div className="mx-auto mb-8 flex max-w-6xl flex-wrap justify-center gap-6">
            {experience.map((entry, index) => (
              <Reveal
                key={index}
                delay={index * 0.06}
                className="w-full sm:w-[360px]"
              >
                <Link
                  to={entry.link}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-soft transition-shadow duration-300 hover:shadow-lift"
                >
                  <div className="relative h-56 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
                    {entry.link === "jukebox" ? (
                      <JukeboxCover className="h-56" />
                    ) : entry.link === "equipgo" ? (
                      <EquipGoCover className="h-56" />
                    ) : entry.link === "reframe" ? (
                      <ReframeCover className="h-56" />
                    ) : (
                      <img
                        src={entry.image}
                        className={`h-full w-full transition-transform duration-500 group-hover:scale-105 ${
                          entry.link === "jukebox"
                            ? "object-cover"
                            : "p-8 object-scale-down"
                        }`}
                        alt={entry.product}
                      />
                    )}
                  </div>
                  <div className="flex flex-1 flex-col gap-2 border-t border-ink/5 p-6">
                    <h3 className="flex items-center justify-between text-sm font-semibold tracking-wider">
                      <span>
                        {entry.product.toUpperCase()}
                        <span className="ml-1 text-[10px] text-ink-muted">
                          {entry.type.toUpperCase()}
                        </span>
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-ink-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-violet" />
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {entry.tags.map((t, i) => (
                        <span
                          key={i}
                          className="rounded-full bg-brand-gradient-soft px-3 py-1 text-xs font-semibold text-ink"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-ink-muted">{entry.description}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      )}

      {/* Social + copyright */}
      <div className="flex flex-col items-center gap-6 pb-20">
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="grid h-11 w-11 place-items-center rounded-full bg-ink/5 text-ink-muted transition-all duration-300 hover:scale-105 hover:bg-ink hover:text-white"
          >
            <HomeRoundedIcon fontSize="small" />
          </Link>
          <a
            href="https://www.linkedin.com/in/senhuangcai/"
            target="_blank"
            rel="noreferrer"
            className="grid h-11 w-11 place-items-center rounded-full bg-ink/5 text-ink-muted transition-all duration-300 hover:scale-105 hover:bg-[#0a66c2] hover:text-white"
          >
            <LinkedInIcon fontSize="small" />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="grid h-11 w-11 place-items-center rounded-full bg-ink/5 text-ink-muted transition-all duration-300 hover:scale-105 hover:bg-ink hover:text-white"
          >
            <GitHubIcon fontSize="small" />
          </a>
        </div>
        <div className="text-sm text-ink-muted">
          © {new Date().getFullYear()} Senhuang Cai — designed &amp; built with
          care.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
