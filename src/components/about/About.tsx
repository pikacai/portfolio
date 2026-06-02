import headshot from "./headshot.png";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";

import hamocLogo from "./hamocLogo.png";
import memoryFox from "./memoryFox.png";
import metlifeLogo from "./metlifeLogo.png";
import queensCollege from "./queensCollege.png";
import google from "./google.png";

import ux from "../../assets/certifications/UX.pdf";
import swe from "../../assets/certifications/SWE.pdf";
import ibm from "../../assets/certifications/IBM.pdf";
import codepath from "../../assets/certifications/CodePath.pdf";
import CenteredContentWider from "../intoxiblock/CenteredContentWider";

import about from "../../assets/about.png";

function About() {
  const logos = [hamocLogo, memoryFox, metlifeLogo, queensCollege, google];

  const work = [
    {
      company: "MemoryFox",
      date: "2021-2023",
    },
    {
      company: "Google",
      date: "2019-2021",
    },
    {
      company: "The Haitian American Musuem",
      date: "2021-2023",
    },
    {
      company: "CUNY Queens College",
      date: "2019-2021",
    },
    {
      company: "MetLife",
      date: "2019-2021",
    },
  ];

  const certifications = [
    {
      to: ux,
      label: "UX Microcredential Program",
    },
    {
      to: swe,
      label:
        "The City University of New York Software Engineering: Web Development Career Track Boot Camp",
    },
    {
      to: ibm,
      label: "IBM Software Engineering Summer Program",
    },
    {
      to: codepath,
      label: "CodePath Tech Fellow Society",
    },
  ];

  return (
    <div>
      <div className="h-screen flex justify-center items-center">
        <div className="text-3xl md:text-5xl lg:text-7xl font-semibold text-center animate-showTopFadeIn p-12'">
          <h1>
            <span className="text-blue-600">Product Designer </span>
            with over&nbsp;
            <span className="underline underline-offset-8">
              3 years experience{" "}
            </span>
            developing compelling case studies.
          </h1>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-y-24">
        {/* <div className="w-full md:w-1/2 flex flex-col justify-center items-center gap-y-8"> */}
          <div className="flex justify-center">
            <img src={about} className="w-full md:w-1/2" />
          </div>

          <div className="flex flex-col w-fit">
            <div className="flex items-center text-slate-400">
              <EmailOutlinedIcon fontSize="small" />
              &nbsp;
              <div>senhuang.cai9h@gmail.com</div>
            </div>

            <div className="flex items-center text-slate-400">
              <SchoolOutlinedIcon fontSize="small" />
              &nbsp;
              <div>Cornell University (MIS), University at Buffalo (BS CS)</div>
            </div>

            <div className="flex items-center text-slate-400">
              <PlaceOutlinedIcon fontSize="small" />
              &nbsp;
              <div>New York City, NY</div>
            </div>
          </div>
        {/* </div> */}

        <div className="flex flex-col w-screen justify-around items-center">
          <div className="flex justify-around">
            {logos.map((entry, index) => (
              <img
                className="object-contain w-[10%] grayscale hover:grayscale-0 transition duration-500 ease-in-out"
                src={entry}
                alt=""
                key={index}
              />
            ))}
          </div>
          <div className="text-slate-400">Products I've worked on</div>
        </div>
      </div>
    </div>
  );
}

export default About;
