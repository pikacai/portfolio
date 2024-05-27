import video1 from "../../assets/google/video1.gif";
import photo1 from "../../assets/google/photo1.svg";
import photo2 from "../../assets/google/photo2.svg";
import video2 from "../../assets/google/video2.gif";

// Brand Icons
import figma from "../../assets/brandIcons/figma.svg";

// Mobile Views
import turnByTurn from "../../assets/google/turnByTurn.png";
import estimatedGas from "../../assets/google/estimatedGas.png";
import reroute from "../../assets/google/reroute.png";
import report from "../../assets/google/report.png";
// Images
import persona1 from "../../assets/google/persona1.png";
import persona2 from "../../assets/google/persona2.png";
import survey from "../../assets/google/survey.png";
import behavioralAnalysis from "../../assets/google/behavioralAnalysis.svg";
import competitiveAnalysis from "../../assets/google/competitiveAnalysis.svg";
import userStories from "../../assets/google/userStories.svg";
import bubble from "../../assets/google/bubble.svg";

import sketches from "../../assets/google/sketches.png";

import googleMapIntroVideo from "../../assets/google/googleMapIntroVideo.mp4";
import CenteredContentWider from "../intoxiblock/CenteredContentWider";
import Highlight from "../intoxiblock/IntersectionObserver/Highlight";

import LottieAnimation from "../utilities/LottieAnimation";

// LottieFiles
import compass from "../../assets/lottieFiles/googleMaps/compass.json";
import note from "../../assets/lottieFiles/googleMaps/note.json";
import lightbulb from "../../assets/lottieFiles/googleMaps/lightbulb.json";
import build from "../../assets/lottieFiles/googleMaps/build.json";
import { Link } from "react-router-dom";
import { dividerClasses } from "@mui/material";

// JSON from Google Form survey
import surveyResponses from "./surveyResponses.json";

const GoogleContent = () => {
  // Phone sections
  const phone = [
    {
      img: turnByTurn,
      section: "Navigation",
      title: "Turn By Turn",
      text: "Glowing turning signal reminds user to prepare to turn soon.",
      color: "bg-[#0F9D58]",
    },
    {
      img: estimatedGas,
      section: "Cost",
      title: "Estimated Gas Price",
      text: "Informs users of opportunities to save on gas.",
      color: "bg-[#4285F4]",
    },
    {
      img: reroute,
      section: "Control",
      title: "Reroute",
      text: "Users toggle preferences for automatic rerouting.",
      color: "bg-[#DB4437]",
    },
    {
      img: report,
      section: "Explore",
      title: "Report Button",
      text: "Highlights existing reporting feature on main navigation screen.",
      color: "bg-[#F4B400]",
    },
  ];

  return (
    <div className="animate-fadeIn">
      <CenteredContentWider
        content={
          <div>
            <div className="relative mt-36 border rounded-3xl overflow-hidden shadow-2xl">
              <video autoPlay loop>
                <source src={googleMapIntroVideo} type="video/mp4" />
              </video>
              <Link
                to="https://www.youtube.com/watch?v=brSdUNadZmM"
                className="text-sm text-gray-400 right-5 bottom-3 absolute"
              >
                <p>
                  Source: "Celebrate 15 years of exploring..." by Google on
                  YouTube
                </p>
              </Link>
            </div>
          </div>
        }
      />

      <CenteredContentWider
        content={
          <div className="flex items-start justify-center text-center text-xl leading-relaxed">
            <div className="flex-1">
              <p className="font-semibold pb-4">Role</p>
              <p>UX Reseacher & Designer</p>
            </div>
            <div className="flex-1">
              <p className="font-semibold pb-4">Timeline</p>
              <p>2 months</p>
            </div>
            <div className="flex-1">
              <p className="font-semibold pb-4">Teammates</p>
              <p>Crystal Tang</p>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <p className="font-semibold pb-4">Prototypes</p>
              <Link
                target="_blank"
                to={
                  "https://www.figma.com/proto/x06i7eGYuDWu4awfGOj9HY/Google-Maps-Case-Study?type=design&node-id=91-2123&t=G5vzLOCPnba1R3dI-0&scaling=scale-down&page-id=91%3A1652&starting-point-node-id=91%3A2123&show-proto-sidebar=1"
                }
                className="py-2 px-6 mb-1 text-lg bg-black rounded-xl text-white whitespace-nowrap flex justify-center items-center"
              >
                <img src={figma} alt="" className="h-6" />
                Mobile View
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
                With over 23.5 million reviews on the App Store and Google Play
                Store and an average of rating of 4.3 stars, Google Maps holds
                an 80% market share in mobile maps (
                <Link
                  to="https://www.washingtonpost.com/technology/2020/02/14/google-maps-political-borders/"
                  target="blank"
                  className="text-blue-500 underline underline-offset-2"
                >
                  Washington Post
                </Link>
                ).
                <br />
                <br />
                Regardless of its global popularity, it is not hard to find
                complaints from travelers ranging from user experience, missing
                features, to hidden features.
              </p>
            </div>
            <div className="pb-20">
              <h1 className="text-2xl font-semibold pb-10">Solution Summary</h1>
              <p className="text-xl leading-relaxed pb-10">
                As a UX Researcher, I conducted interviews, surveys, usability
                testing, and data analysis to garner insights into our user base
                (e.g., personas, behaviors, needs, and motivations). With these
                new insights, I iterated on designs that enhanced the navigation
                experience (e.g., pronounced turn signals, estimated gas price,
                rerouting preferences, explicit reporting button).
              </p>
            </div>
            <div>
              {phone.map((entry, index) => (
                <div
                  className={
                    "flex flex-col justify-between items-center gap-32" +
                    (index % 2 == 1 ? " md:flex-row-reverse" : " md:flex-row")
                  }
                  key={index}
                >
                  <div className="relative flex flex-1 justify-center items-center p-6">
                    <div
                      className={`absolute -z-10 m-[0_auto] left-0 right-0 top-[50%] -translate-y-[50%] w-full h-1/2 animate-blob ${entry.color}`}
                    ></div>
                    <img
                      loading="lazy"
                      className="h-[650px] w-auto"
                      src={entry.img}
                      alt=""
                    />
                  </div>

                  <div className="flex flex-1 flex-col gap-y-4">
                    <h1>{entry.section}</h1>
                    <h1 className="text-5xl">{entry.title}</h1>
                    <h1 className="text-xl text-slate-500">{entry.text}</h1>
                  </div>
                </div>
              ))}
            </div>
          </>
        }
      />

      <CenteredContentWider
        content={
          <>
            <h1 className="text-4xl font-semibold pb-10 text-center">
              Discovery
            </h1>
            <div className="pb-20">
              <h1 className="text-2xl font-semibold pb-10">Our Process</h1>
              <div className="flex flex-wrap justify-between text-center">
                <div>
                  <div className="p-10 bg-[#4285F4] bg-opacity-30 rounded-full flex justify-center items-center">
                    <LottieAnimation
                      src={compass}
                      className="w-[4rem] h-[4rem] hover:scale-110 transition-all"
                    />
                  </div>
                  <p className="pt-8 text-xl">Discover</p>
                </div>

                <div>
                  <div className="p-10 bg-[#DB4437] bg-opacity-30  rounded-full flex justify-center items-center">
                    <LottieAnimation
                      src={note}
                      startingFrame={160}
                      className="w-[4rem] h-[4rem] hover:scale-110 transition-all"
                    />
                  </div>
                  <p className="pt-8 text-xl">Define</p>
                </div>

                <div>
                  <div className="p-10 bg-[#F4B400] bg-opacity-30  rounded-full flex justify-center items-center">
                    <LottieAnimation
                      src={lightbulb}
                      startingFrame={10}
                      className="w-[4rem] h-[4rem] hover:scale-110 transition-all"
                    />
                  </div>
                  <p className="pt-8 text-xl">Ideate</p>
                </div>

                <div>
                  <div className="p-10 bg-[#0F9D58] bg-opacity-30  rounded-full flex justify-center items-center">
                    <LottieAnimation
                      src={build}
                      className="w-[4rem] h-[4rem] hover:scale-[1.6] transition-all scale-150"
                    />
                  </div>
                  <p className="pt-8 text-xl">Design</p>
                </div>
              </div>
            </div>
            <div className="pb-20">
              <h1 className="text-2xl font-semibold pb-10">
                Reviews Across Platforms
              </h1>
              <div>
                <img src={behavioralAnalysis} className="mt-10" />
                <img src={userStories} className="mt-10" />
                <img src={bubble} className="mt-10" />
              </div>
            </div>
            <div className="pb-20">
              <h1 className="text-2xl font-semibold pb-10">
                Competitive Analysis
              </h1>
              <div>
                <img src={competitiveAnalysis} className="shadow-xl rounded-xl" />
              </div>
            </div>
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
              <div className="flex overflow-auto gap-8 pb-4">
                {surveyResponses.map((entry) => (
                  <div className="border rounded-xl p-8 w-full shadow-sm">
                    <h2 className="font-semibold">{entry.question}</h2>
                    <p>{entry.responses}</p>
                    <div
                      className="pt-11"
                      dangerouslySetInnerHTML={{ __html: entry.svg }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-semibold pb-10">Personas</h1>
              <p className="text-xl leading-relaxed">
                My team and I spoke with 12 colleagues and friends, who often
                travel and rely on mobile maps to get them around and explore
                new places. From our interviews, here are 2 personas we came up
                with:
              </p>
              <img src={persona1} className="mt-10 rounded-xl shadow-xl" />
              <img src={persona2} className="mt-10 rounded-xl shadow-xl" />
              {/* <img src={survey} className="mt-10 rounded-xl" /> */}
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
              <img src={sketches} className="rounded-xl shadow-xl"/>
            </div>
            <div className="pb-20">
              <h1 className="text-2xl font-semibold pb-10">Prototype Demo</h1>
              <iframe
                className="aspect-[16/9] w-full"
                src="https://www.youtube.com/embed/7gJlpUt7pMo"
              ></iframe>
            </div>
            <div>
              <h1 className="text-2xl font-semibold pb-10">Final Design</h1>
              <div>
                {phone.map((entry, index) => (
                  <div
                    className={
                      "flex flex-col justify-between items-center gap-32" +
                      (index % 2 == 1 ? " md:flex-row-reverse" : " md:flex-row")
                    }
                    key={index}
                  >
                    <div className="relative flex flex-1 justify-center items-center p-6">
                      <div
                        className={`absolute -z-10 m-[0_auto] left-0 right-0 top-[50%] -translate-y-[50%] w-full h-1/2 animate-blob ${entry.color}`}
                      ></div>
                      <img
                        loading="lazy"
                        className="h-[650px] w-auto"
                        src={entry.img}
                        alt=""
                      />
                    </div>

                    <div className="flex flex-1 flex-col gap-y-4">
                      <h1>{entry.section}</h1>
                      <h1 className="text-5xl">{entry.title}</h1>
                      <h1 className="text-xl text-slate-500">{entry.text}</h1>
                    </div>
                  </div>
                ))}
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
              Reflections & Takeaways
            </h1>
            <p className="text-xl leading-relaxed">
              This project helpd me to deeply understand on the importance of
              designing interfaces that effectively convey user actions without
              being overly distracting. Google Maps' features should be clearly
              evident or guided for users.
            </p>
          </>
        }
      />
    </div>
  );
};

export default GoogleContent;
