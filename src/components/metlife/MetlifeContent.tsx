import SplashScreen from "../SplashScreen";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import Macbook from "./Macbook";
import metconnect from "./metconnect.png";

// LottieFiles
import compass from "../../assets/lottieFiles/googleMaps/compass.json";
import note from "../../assets/lottieFiles/googleMaps/note.json";
import lightbulb from "../../assets/lottieFiles/googleMaps/lightbulb.json";
import build from "../../assets/lottieFiles/googleMaps/build.json";

// Brand Icons
import figma from "../../assets/brandIcons/figma.svg";

import metlifeIcon from "../../assets/metlife/metlifeIcon.svg";
import metlifeLogo from "../../assets/metlife/metlifeLogo.svg";

import metlifeIntroVideo from "../../assets/metlife/metlifeIntroVideo.mp4";
import CenteredContentWider from "../intoxiblock/CenteredContentWider";
import Highlight from "../intoxiblock/IntersectionObserver/Highlight";

import ExploreIcon from "@mui/icons-material/Explore";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import HandymanRoundedIcon from "@mui/icons-material/HandymanRounded";
import NumberIncreaser from "../intoxiblock/IntersectionObserver/NumberIncreaser";
import { Link } from "react-router-dom";
import LottieAnimation from "../utilities/LottieAnimation";

import home from "../../assets/metlife/home.png";
import profile from "../../assets/metlife/profile.png";
import message from "../../assets/metlife/message.png";
import homeMockup from "../../assets/metlife/homeMockup.png";
import messageMockup from "../../assets/metlife/messageMockup.png";

const MetlifeContent = () => {
  return (
    <div>
      <CenteredContentWider
        content={
          <div className="relative mt-36 border rounded-3xl overflow-hidden shadow-2xl">
            <video autoPlay loop className="">
              <source src={metlifeIntroVideo} type="video/mp4" />
            </video>
            <Link
              to="https://www.youtube.com/watch?v=5Cz9r05j9AE"
              className="text-sm text-gray-400 right-5 bottom-3 absolute"
            >
              <p>
                Source: "At MetLife, it's #AllTogetherPossible" by MetLife on
                YouTube
              </p>
            </Link>
          </div>
        }
      />

      <CenteredContentWider
        content={
          <div className="flex items-start justify-center text-center text-xl leading-relaxed">
            <div className="flex-1">
              <p className="font-semibold pb-4">Role</p>
              <p>UX Designer & Reseacher</p>
            </div>
            <div className="flex-1">
              <p className="font-semibold pb-4">Timeline</p>
              <p>12 weeks</p>
            </div>
            <div className="flex-1">
              <p className="font-semibold pb-4">Teammates</p>
              <p>Shannon Yeung</p>
              <p>Jonathan Wescott</p>
              <p>Lucy Ren</p>
              <p>Samyak Mishra</p>
              <p>Travor Rau</p>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <p className="font-semibold pb-4">Prototypes</p>
              <Link
                target="_blank"
                to={
                  "https://www.figma.com/proto/4vvq9isBbQbZv2E6Tbbc24/Group-9-Innovation-Project?type=design&node-id=572-188&t=hLgXaCDnVKmm0SEk-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=572%3A188&show-proto-sidebar=1&mode=design"
                }
                className="py-2 px-6 mb-1 text-lg bg-black rounded-xl text-white whitespace-nowrap flex justify-center items-center"
              >
                <img src={figma} alt="" className="h-6" />
                Desktop View
              </Link>
            </div>
          </div>
        }
      />

      <CenteredContentWider
        content={
          <>
            <h1 className="text-4xl font-semibold pb-10 text-center">
              Project Overview
            </h1>
            <div className="pb-20">
              <h1 className="text-2xl font-semibold pb-10">Problem Summary</h1>
              <p className="text-xl leading-relaxed">
                MetLife's 2022 Onboarding Survey revealed that 88% of employees
                believe their onboarding experiences could have been better.
                Despite MetLife's various external networking platforms like
                Yammer, Teams, and Outlook new hires feel out of touch.
              </p>
            </div>
            <div className="pb-20">
              <h1 className="text-2xl font-semibold pb-10">Solution Summary</h1>
              <p className="text-xl leading-relaxed">
                As a UX Researcher, I conducted interviews, surveys, usability
                testing, and data analysis to garner insights into our user base
                (e.g., personas, behaviors, needs, and motivations).
                <br />
                <br />I coordinated with product and engineering to design an
                enterprise-wide networking forum that allows employees to join
                groups, posts successes, and share trends in the market.
              </p>
            </div>
            <Macbook screen={homeMockup} />
          </>
        }
      />
      <CenteredContentWider
        content={
          <>
            <h1 className="text-4xl font-semibold pb-10 text-center">
              User Research
            </h1>
            <div className="pb-20">
              <h1 className="text-2xl font-semibold pb-10">Surveys</h1>
              <p className="text-xl leading-relaxed">
                Our team reviewed existing surveys examining quantitative data
                and identifying recurring patterns. We uncovered the following
                key painpoints.
                <ul className="pt-10 flex flex-col gap-4 justify-center text-center">
                  <li className="p-4 bg-slate-100 rounded-lg">
                    Integration Challenges with Networking Platforms
                  </li>
                  <li className="p-4 bg-slate-100 rounded-lg">
                    Community Engagement and Belonging
                  </li>
                  <li className="p-4 bg-slate-100 rounded-lg">
                    Accessibility of Resources and Information
                  </li>
                  <li className="p-4 bg-slate-100 rounded-lg">
                    Personalized Support and Guidance
                  </li>
                  <li className="p-4 bg-slate-100 rounded-lg">
                    Clarity on Expectations and Objective
                  </li>
                </ul>
              </p>
            </div>
            <div>
              <h1 className="text-2xl font-semibold pb-10">Personas</h1>
              <p className="text-xl leading-relaxed">
                I handled the user interview experience throughout this project,
                from identifying interviewees, reaching out, and conducting
                interviews. After ~40 conversations with directors, senior
                managers, and associates I stitched together the following 2
                personas.
                <div className="border border-gray-200 shadow-xl rounded-xl text-xl overflow-hidden mt-10">
                  <table>
                    <tr className="border-b">
                      <th className="text-left p-4">Persona</th>
                      <td className="border-l border-r p-4 bg-purple-50">
                        Seasoned Mentor Max 🌟
                      </td>
                      <td className="p-4 bg-yellow-50">Newbie Nellie 🌱</td>
                    </tr>
                    <tr className="border-b">
                      <th className="text-left p-4">Years at MetLife</th>
                      <td className="border-l border-r p-4 bg-purple-50">10</td>
                      <td className="p-4 bg-yellow-50">1</td>
                    </tr>
                    <tr className="border-b">
                      <th className="text-left p-4">Role</th>
                      <td className="border-l border-r p-4 bg-purple-50">
                        Senior Manager
                      </td>
                      <td className="p-4 bg-yellow-50">Junior Associate</td>
                    </tr>
                    <tr className="border-b">
                      <th className="text-left p-4">Mentoring Approach</th>
                      <td className="border-l border-r p-4 bg-purple-50">
                        Eager to share insights, experiences, and guidance with
                        new hires, facilitating their integration into the
                        company culture and fostering their professional
                        development.
                      </td>
                      <td className="p-4 bg-yellow-50">
                        Seeks support and guidance in navigating the company
                        environment, eager to connect with colleagues and build
                        meaningful relationships to enhance her career journey.
                      </td>
                    </tr>
                    <tr className="border-b">
                      <th className="text-left p-4">Networking</th>
                      <td className="border-l border-r p-4 bg-purple-50">
                        Actively involved in internal networking events and
                        initiatives, leveraging extensive connections within the
                        company to facilitate opportunities for growth and
                        collaboration.
                      </td>
                      <td className="p-4 bg-yellow-50">
                        Feels apprehensive about networking with colleagues,
                        seeking strategies and support to overcome social
                        barriers and build professional relationships
                        effectively.
                      </td>
                    </tr>
                    <tr className="border-b">
                      <th className="text-left p-4">Company Navigation</th>
                      <td className="border-l border-r p-4 bg-purple-50">
                        Well-versed in company policies, procedures, and
                        resources, readily assisting newcomers in navigating the
                        complexities of MetLife's organizational structure.
                      </td>
                      <td className="p-4 bg-yellow-50">
                        Struggles with understanding company dynamics and
                        finding her place within the organization, seeking
                        guidance to navigate MetLife's corporate landscape.
                      </td>
                    </tr>
                    <tr className="">
                      <th className="text-left p-4">Objectives</th>
                      <td className="border-l border-r p-4 bg-purple-50">
                        Dedicated to fostering a supportive and inclusive work
                        environment, empowering new hires to thrive and succeed
                        at MetLife.
                      </td>
                      <td className="p-4 bg-yellow-50">
                        Aspires to integrate seamlessly into the company
                        culture, build a strong professional network, and excel
                        in her role at MetLife.
                      </td>
                    </tr>
                  </table>
                </div>
              </p>
            </div>
          </>
        }
      />

      <CenteredContentWider
        content={
          <>
            <h1 className="text-4xl font-semibold pb-10 text-center">
              Design Process
            </h1>
            <div className="pb-20">
              <h1 className="text-2xl font-semibold pb-10">Wireframes</h1>
              <div className="flex gap-16 h-[600px] overflow-auto pb-4">
                <img src={home} alt="" className="border border-indigo-200" />
                <img
                  src={profile}
                  alt=""
                  className="border border-indigo-200"
                />
                <img
                  src={message}
                  alt=""
                  className="border border-indigo-200"
                />
              </div>
            </div>
            <div className="pb-20">
              <h1 className="text-2xl font-semibold pb-10">Mockups</h1>
              <div className="flex gap-16 h-[600px] overflow-auto pb-4">
                <img src={homeMockup} alt="" />
                <img src={messageMockup} alt="" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-semibold pb-10">
                Usability Testing
              </h1>
              <div className="flex flex-wrap justify-center gap-10 text-center">
                <div className="rounded-3xl bg-blue-50 bg-opacity-80 py-12 flex-1">
                  <h1 className="text-6xl font-semibold text-blue-500">
                    <NumberIncreaser target={40} duration={750} textAfter="+" />
                  </h1>
                  <h2 className="pt-8 pb-2 text-2xl font-semibold">
                    Usability Testing
                  </h2>
                </div>

                <div className="rounded-3xl bg-blue-50 bg-opacity-80 py-12 flex-1">
                  <h1 className="text-6xl font-semibold text-blue-500">
                    <NumberIncreaser target={50} duration={750} textAfter="+" />
                  </h1>
                  <h2 className="pt-8 pb-2 text-2xl font-semibold">
                    Pages Designed
                  </h2>
                </div>
              </div>
            </div>
          </>
        }
      />
      <CenteredContentWider
      removePadding
        content={
          <>
            <h1 className="text-4xl font-semibold pb-10 text-center">
              Challenges & Learnings
            </h1>
            <div className="pb-20">
              <h1 className="text-2xl font-semibold pb-10">
                <Highlight text="Good UX design is all about putting the user first" highlightColor="#c9e2ff" />
              </h1>
              <p className="text-lg leading-relaxed">
                When creating user experiences, we need to center our decisions
                based on user research and what users truly need, not just what designers think it is good.
              </p>
            </div>
            <div>
              <h1 className="text-2xl font-semibold pb-10">
                <Highlight
                  text="Coordinating as a Design Team"
                  highlightColor="#c9e2ff"
                />
              </h1>
              <p className="text-lg leading-relaxed">
              It's important to show care towards teammates so that we can not only work effectively together but also create a positive and enjoyable team environment.
              </p>
            </div>
          </>
        }
      />
    </div>
  );
};

export default MetlifeContent;
