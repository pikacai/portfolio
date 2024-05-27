import { Link, useLocation } from "react-router-dom";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import macbook from "../assets/macbook.png";
import ipad from "../assets/ipad.png";
import iphone from "../assets/iphone.png";
import iphone2 from "../assets/iphone2.png";
import amazon from "../assets/amazon.png";
import googlecrm from "../assets/googlecrm.png";

import intoxiblock from "../assets/intoxiblock/intoxiblock.png";
import google from "../assets/google2/google.png";

import googleCloudGif from "../assets/googleCloudGif.gif";
// import googleCloudGif from "../../assets/googleCloudGif3.gif";
import googleMapsGif from "../assets/googleMapsGif.gif";

import metlifeGif from "../assets/metlifeGif.gif";
import intoxiblockGif from "../assets/intoxiblockGif.gif";

interface ExperienceType {
  product: string;
  type: string;
  date: string;
  description: string;
  visuals: Record<string, string>;
  link: string;
}

function Footer() {
  // Used to render the projects

  let experience = [
    {
      company: "Google",
      product: "Google Cloud",
      description:
        "Designing a corporate social network prototype for efficient internal communication and collaboration.",
      image: googleCloudGif,
      alt: "A profile page on MetConnect as viewed on an iPad.",
      link: "google2",
      results: [
        "30% boost in employee engagement.",
        "20% increase in knowledge sharing.",
        "35% improvement in project collaboration.",
      ],
      height: "min-h-[80vh]",
      role: "UX Designer",
      underConstruction: true,
      backgroundColor: "bg-blue-50",
      tagColor: "bg-blue-100",
      tags: ["UX Design", "Internship"],
      emoji: "📌",
    },
    {
      company: "Safe and Sober Journey with BAC Testing",
      product: "IntoxiBlock",
      description:
        "Designing a corporate social network prototype for efficient internal communication and collaboration.",
      image: intoxiblockGif,
      alt: "A profile page on MetConnect as viewed on an iPad.",
      link: "intoxiblock",
      results: [
        "30% boost in employee engagement.",
        "20% increase in knowledge sharing.",
        "35% improvement in project collaboration.",
      ],
      height: "min-h-[80vh]",
      role: "UX Designer",
      underConstruction: true,
      backgroundColor: "bg-blue-50",
      tagColor: "bg-blue-100",
      tags: ["UX Design", "Internship"],
      emoji: "📌",
    },
    {
      company: "Google",
      product: "Google Maps",
      description:
        "Enhancing Google Maps for streamlined navigation and user-friendly features, optimizing the mapping experience.",
      image: googleMapsGif,
      alt: "",
      link: "google",
      results: [
        "20% faster route planning and navigation.",
        "15% increase in user satisfaction ratings.",
        "30% rise in daily active users.",
      ],
      height: "h-[80vh]",
      role: "UX Designer",
      underConstruction: true,
      backgroundColor: "bg-red-50",
      tagColor: "bg-red-100",
      tags: ["UX Design"],
      emoji: "🚀",
    },
    {
      company: "MetLife",
      product: "MetConnect",
      description:
        "Designing a corporate social network prototype for efficient internal communication and collaboration.",
      image: metlifeGif,
      alt: "A profile page on MetConnect as viewed on an iPad.",
      link: "metlife",
      results: [
        "30% boost in employee engagement.",
        "20% increase in knowledge sharing.",
        "35% improvement in project collaboration.",
      ],
      height: "min-h-[80vh]",
      role: "UX Designer",
      underConstruction: true,
      backgroundColor: "bg-blue-50",
      tagColor: "bg-blue-100",
      tags: ["UX Design", "Internship"],
      emoji: "📌",
    },
  ];

  const { pathname } = useLocation();
  experience = experience.filter((entry) => "/" + entry.link !== pathname);

  return (
    <div className="w-screen flex flex-col items-center gap-y-16 mb-56">
      {pathname !== "/" && (
        <>
          <h1 className="text-4xl font-semibold pb-10 text-center mt-56 ">
            Other Selected Work
          </h1>
          <div className="flex flex-wrap gap-8 px-9 justify-center mb-36">
            {experience.map((entry, index) => (
              <Link
                to={entry.link}
                className="
            lg:w-[450px] lg:h-[400px] 
            md:w-[350px] md:h-[300px]
            w-[230px] h-[180px]
            border border-1 bg-white rounded-xl
            hover:shadow-md
            hover:cursor-pointer
            transition-all
            hover:underline
            "
                // flex-1
              >
                <img
                  key={index}
                  src={entry.image}
                  className="h-3/5 w-full p-8 object-scale-down"
                />
                <div className="p-8 border-t">
                  <h1 className="text-sm font-semibold pb-2 tracking-wider">
                    {entry.product.toUpperCase()}
                  </h1>
                  <h1 className="">{entry.description}</h1>
                </div>
              </Link>
            ))}
          </div>
        </>
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

/*
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
*/
