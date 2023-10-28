import { Link, useLocation } from "react-router-dom";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Experience from "./home/Experience";

import report from "../assets/report.gif";
import redesign from "../assets/hamoc/redesign.png";
import metconnect from "../assets/metconnect.png";

interface ExperienceType {
  product: string;
  type: string;
  date: string;
  description: string;
  visuals: Record<string, string>;
  link: string;
}

function Footer() {
  const experience: ExperienceType[] = [
    {
      product: "Google Maps",
      type: "Case Study",
      date: "2022-2023",
      description:
        "This study investigates typical issues that users encounter when using Google Maps while driving, and proposes prototypes that could enhance the app's functionality. Through the analysis of other mapping apps such as Apple Maps and Waze, this study identifies features that could be adapted and integrated into Google Maps to improve the overall user experience.",
      visuals: {
        img: report,
        alt: "Mockup of Google Maps on a phone.",
      },
      link: "google",
    },
    {
      product: "The Haitian American Musuem Website",
      type: "Case Study",
      date: "2022",
      description:
        "Improving on-road usage. This case study examines common complaints of on road usage for Google Maps. I investigate how Apple Maps, Waze, and others use featuresthat can be improved for Google Maps.",
      visuals: {
        img: redesign,
        alt: "Design of The Haitian American Musuem Website with annotations.",
      },
      link: "hamoc",
    },
    {
      product: "MetConnect",
      type: "Product",
      date: "2023",
      description:
        "MetConnect is a technology platform designed to promote connection and inclusivity in the workplace. By enabling new hires to connect over shared interests, we aim to cultivate a workforce that is not only dedicated to their work but also to each other. At MetConnect, we believe that when employees feel valued and supported by their peers, they are more likely to succeed and thrive in their roles.",
      visuals: {
        img: metconnect,
        alt: "A profile page on MetConnect as viewed on an iPad.",
      },
      link: "metlife",
    },
  ];

  const { pathname } = useLocation();

  return (
    <div className="w-screen flex flex-col items-center gap-y-16 mt-32 mb-32">
      {pathname !== "/" && (
        <div className="flex w-full h-full gap-x-6 px-4">
          {experience.map((entry, index) => (
            <div className="flex-1 flex flex-col" key={index}>
              <div className="px-2 mb-4">
                <div>
                  <div className="flex justify-between">
                    <h1 className="text-xl font-medium">{entry.product}</h1>
                    <h2 className="text-slate-400">
                      {entry.type}, {entry.date}
                    </h2>
                  </div>
                  {/* <h3 className='text-slate-400'>{description} <Link to={link} className='text-sky-600 underline'>Read more.</Link></h3> */}
                </div>
              </div>

              <Link
                to={entry.link}
                className="flex-1 flex justify-center bg-gray-100 rounded-xl border-[1px] border-gray-100 hover:opacity-50 transition-all"
              >
                <img
                  className="rounded-xl"
                  src={entry.visuals.img}
                  alt={entry.visuals.alt}
                />
              </Link>
            </div>
          ))}
        </div>
      )}
      <div className="flex gap-x-4 items-center">
        <Link to="/">
          <HomeRoundedIcon
            fontSize="large"
            className="text-slate-400 hover:text-black transition duration-500 ease-in-out"
          />
        </Link>
        <a href="https://www.linkedin.com/in/senhuangcai/">
          <LinkedInIcon
            fontSize="large"
            className="text-slate-400 hover:text-blue-600 transition duration-500 ease-in-out"
          />
        </a>
        <a href="https://github.com/B-o-s-s-e-s">
          <GitHubIcon
            fontSize="large"
            className="text-slate-400 hover:text-black transition duration-500 ease-in-out"
          />
        </a>
      </div>

      <div className="text-sm text-slate-400">
        © {new Date().getFullYear()} Senhuang Cai
      </div>
    </div>
  );
}

export default Footer;
