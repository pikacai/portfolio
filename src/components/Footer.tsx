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

function Footer() {
  // Used to render the projects

  let experience = [
    {
      product: "IntoxiBlock",
      type: "project",
      tags: ["3D Design"],
      description:
        "Designed an app to ensure peoples safe return home after social events involving alcohol consumption.",
      image: intoxiblockGif,
      alt: "A profile page on MetConnect as viewed on an iPad.",
      link: "intoxiblock",
    },
    {
      product: "Google Cloud",
      type: "project",
      tags: ["Cloud", "CRM", "AI"],
      description:
        "Designed alongside Google UX Designers and Researchers to test and validate design concepts and hypotheses of a Google AI-powered CRM application.",
      image: googleCloudGif,
      alt: "A profile page on MetConnect as viewed on an iPad.",
      link: "google2",
    },
    {
      product: "Google Maps",
      type: "project",
      tags: ["SaaS"],
      description:
        "Redsigned and enhanced Google Maps for streamlined navigation and user-friendly features, optimizing the mapping experience.",
      image: googleMapsGif,
      alt: "",
      link: "google",
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
          <div className="pt-10 pb-24 sm:py-24 flex justify-center w-full mb-56">
            <div className="w-[90%] xl:w-5/6 flex flex-wrap justify-center gap-6">
              {experience.map((entry, index) => (
                <Link
                  to={entry.link}
                  className="
                group
                sm:w-[450px] sm:h-[450px]
                w-full
                border border-1 bg-white rounded-xl
                shadow-md
                hover:shadow-2xl
                hover:cursor-pointer
                transition-all
                flex flex-col"
                >
                  <img
                    key={index}
                    src={entry.image}
                    className="h-64 sm:h-2/4 p-8 object-scale-down"
                  />
                  <div className="p-8 border-t flex flex-col gap-y-2">
                    <h1 className="group-hover:underline text-sm font-semibold tracking-wider">
                      {entry.product.toUpperCase() + " | "}
                      <span className="text-xs">
                        {entry.type.toUpperCase()}
                      </span>
                    </h1>
                    <div className="flex gap-x-2">
                      {entry.tags.map((entry_, index_) => (
                        <span
                          className="no-underline text-sm py-1 px-3 bg-blue-500 text-slate-50 rounded-full w-fit"
                          key={index_}
                        >
                          {entry_}
                        </span>
                      ))}
                    </div>
                    <h1 className="group-hover:underline">
                      {entry.description}
                    </h1>
                  </div>
                </Link>
              ))}
            </div>
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
