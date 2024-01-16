// import CenteredContentWider from "./CenteredContentWider";

import useIntersectionObserver from "./useIntersectionObserver";

import phone from "../../assets/iphone.png";

import phone1 from "../../assets/intoxiblock/phone1.mp4";
import phone2 from "../../assets/intoxiblock/phone2.mp4";
import phone3 from "../../assets/intoxiblock/phone3.mp4";
import watch1 from "../../assets/intoxiblock/watch1.mp4";

import background from "../../assets/intoxiblock/1.png";

// Icons
import ExploreIcon from "@mui/icons-material/Explore";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import HandymanRoundedIcon from "@mui/icons-material/HandymanRounded";

import FavoriteIcon from "@mui/icons-material/Favorite";
import BuildIcon from "@mui/icons-material/Build";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";

// Images
import affinityDiagram from "../../assets/intoxiblock/affinityDiagram.png";
import affinityMapping from "../../assets/intoxiblock/affinityMapping.mp4";
import solutionSpace from "../../assets/intoxiblock/solutionSpace.png";
import multipleReports from "../../assets/intoxiblock/multipleReports.png";
import locationSharing from "../../assets/intoxiblock/locationSharing.png";
import lockedCar from "../../assets/intoxiblock/lockedCar.png";

import watches from "../../assets/intoxiblock/watches.png";
import carKey from "../../assets/intoxiblock/carKey.mp4";

import report from "../../assets/intoxiblock/report.png";
import shareLocation from "../../assets/intoxiblock/shareLocation.png";

// Group
import screen1 from "../../assets/intoxiblock/screen1.png";
import screen2 from "../../assets/intoxiblock/screen2.png";
import screen3 from "../../assets/intoxiblock/screen3.png";
import screen4 from "../../assets/intoxiblock/screen4.png";
import screen5 from "../../assets/intoxiblock/screen5.png";
import screen6 from "../../assets/intoxiblock/screen6.png";
import screen7 from "../../assets/intoxiblock/screen7.png";
import screen8 from "../../assets/intoxiblock/screen8.png";
import screen9 from "../../assets/intoxiblock/screen9.png";

// group
import poster from "../../assets/intoxiblock/poster.png";
import selfie1 from "../../assets/intoxiblock/selfie1.png";
import selfie2 from "../../assets/intoxiblock/selfie2.png";
import selfie3 from "../../assets/intoxiblock/selfie3.png";

import { useEffect, useRef, useState } from "react";
import IntersectionAnimate from "./useIntersectionObserver";
import NumberIncreaser from "./IntersectionObserver/NumberIncreaser";
import CenteredContentWider from "./CenteredContentWider";
import Highlight from "./IntersectionObserver/Highlight";
import LazyImage from "./LazyImage";

function Intoxiblock() {
  const screens = [
    screen1,
    screen2,
    screen3,
    screen4,
    screen5,
    screen6,
    screen7,
    screen8,
    screen9,
  ];
  // const phones = [phone2, phone1, phone3];
  const phones = [
    [
      {
        image: phone2,
        type: "phone",
      },
    ],
    [
      {
        image: phone1,
        type: "phone",
      },
      {
        image: watch1,
        type: "watch",
      },
    ],
    [
      {
        image: phone3,
        type: "phone",
      },
    ],
  ];
  const [active, setActive] = useState<number>(1);

  // let intervalId: number;
  // useEffect(() => {
  //   intervalId = setInterval(() => {
  //     setActive((prev) => {
  //       if (prev === phones.length - 1) {
  //         console.log(0);
  //         return 0;
  //       } else {
  //         console.log(prev+1);
  //         return prev + 1;
  //       }
  //     });
  //   }, 3000);
  //   return () => clearInterval(intervalId);
  // }, []);
  useEffect(() => {
    console.log(active);
  }, [active]);

  // const { observeChildren } = useIntersectionObserver();

  const ref = useRef<HTMLDivElement>(null);

  //245x405 watch

  // useEffect(() => {
  //   observeChildren(ref);
  // }, []);

  // On first render, fade in.
  let bufferInterval = 0;
  useEffect(() => {
    if (ref && ref.current) {
      const div = ref.current;
      div.style.opacity = "0";

      bufferInterval = setInterval(() => {
        //@ts-ignore
        div.style.transition = "all 1s ease-in";
        //@ts-ignore
        div.style.opacity = "100";
      }, 50);
    }

    return () => {
      if (ref && ref.current) {
        const div = ref.current;
        div.removeAttribute("style");
      }
    };
  }, []);

  return (
    <div ref={ref}>
      {/* 
#000000
→ 
#434343 */}
      {/* <div className="h-screen w-screen flex flex-col justify-center items-center gap-y-32 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"> */}
      <div
        className="h-screen w-screen overflow-hidden flex flex-col justify-center items-center gap-y-24 bg-black mb-36 py-36"
        style={{
          background: `url(${background}) no-repeat center center fixed`,
          // background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url(EauDp1hUcAAE-bK.jpg);
          backgroundSize: "cover",
        }}
      >
        <div className="text-white text-center flex flex-col gap-y-4">
          <h1 className="text-6xl font-medium">IntoxiBlock</h1>
          <h2 className="text-lg">Safe and sober journeys</h2>
          <h3 className="text-lg px-4 py-2 bg-yellow-500 rounded-full font-semibold flex justify-center items-center gap-x-1">
            <span className="text-lg">🥇</span> Awarded Best Design
          </h3>
        </div>
        <div className="flex gap-8 justify-center items-baseline h-3/4">
          {/* // // Resolution requirement: 864 × 1728 or 365 x 732 */}
          {phones.map((entry, index) =>
            entry.map((entry_, index_) => (
              <video
                style={{
                  height: entry_.type === "phone" ? "100%" : "40%",
                  paddingBottom: entry_.type === "phone" ? "0px" : "4px",
                }}
                onMouseOver={(event) => {
                  setActive(index);
                  // @ts-ignore
                  event.target.play();
                }}
                onMouseOut={(event) => {
                  setActive(index);
                  // @ts-ignore
                  event.target.pause();
                }}
                className={`
                  max-w-none
                  transition-all
                  ${
                    index === active
                      ? "scale-110 brightness-100"
                      : "scale-100 brightness-50"
                  }
                `}
                autoPlay={index === active}
                loop={index === active}
              >
                <source src={entry_.image} type="video/mp4" />
              </video>
            ))
          )}
        </div>
      </div>

      <CenteredContentWider
        content={
          <div className="flex items-start justify-center text-center text-xl leading-relaxed">
            <div className="flex-1">
              <p className="font-semibold pb-4">Role</p>
              <p>UX Designer</p>
            </div>
            <div className="flex-1">
              <p className="font-semibold pb-4">Timeline</p>
              <p>12 weeks</p>
            </div>
            <div className="flex-1">
              <p className="font-semibold pb-4">Teammates</p>
              <p>Aishwarya Gupta</p>
              <p>Fiona Gao</p>
              <p>Jamie Paradis</p>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <p className="font-semibold pb-4">Prototypes</p>
              <p className="py-1 px-6 mb-1 bg-slate-600 rounded-xl text-white whitespace-nowrap">
                Mobile View
              </p>
              <p className="py-1 px-6 bg-slate-600 rounded-xl text-white whitespace-nowrap">
                Watch View
              </p>
            </div>
          </div>
        }
      />

      <CenteredContentWider
        content={
          <>
            <h1 className="text-4xl font-semibold pb-10">Problem Statement</h1>
            <p className="text-lg leading-relaxed">
              Many individuals express a significant concern about ensuring{" "}
              <Highlight
                text="their safe return home after social events involving alcohol
              consumption"
                highlightColor="#4285F4"
              />
              . The need to navigate transportation options and make responsible
              decisions to prevent impaired driving poses a considerable
              challenge, raising worries about overall safety in these
              scenarios.
            </p>
          </>
        }
      />

      <CenteredContentWider
        removePadding
        content={
          <h1 className="text-4xl font-semibold pb-10 text-center">
            Our Process
          </h1>
        }
      />

      <CenteredContentWider
        content={
          <div className="flex flex-wrap justify-center gap-24 text-center">
            <div>
              <div className="p-10 bg-blue-50 rounded-full flex justify-center items-center">
                <ExploreIcon style={{ width: "5rem", height: "5rem" }} />
              </div>
              <p className="pt-8 text-xl">Discover</p>
            </div>

            <div>
              <div className="p-10 bg-blue-50 rounded-full flex justify-center items-center">
                <ContentPasteSearchIcon
                  style={{ width: "5rem", height: "5rem" }}
                />
              </div>
              <p className="pt-8 text-xl">Define</p>
            </div>

            <div>
              <div className="p-10 bg-blue-50 rounded-full flex justify-center items-center">
                <TipsAndUpdatesIcon style={{ width: "5rem", height: "5rem" }} />
              </div>
              <p className="pt-8 text-xl">Ideate</p>
            </div>

            <div>
              <div className="p-10 bg-blue-50 rounded-full flex justify-center items-center">
                <HandymanRoundedIcon
                  style={{ width: "5rem", height: "5rem" }}
                />
              </div>
              <p className="pt-8 text-xl">Design</p>
            </div>
          </div>
        }
      />

      <h1 className="text-4xl font-semibold pb-10 text-center">
        About the Project
      </h1>

      <CenteredContentWider
        content={
          <div className="flex flex-wrap justify-center gap-10 text-center">
            <div className="rounded-3xl bg-blue-50 bg-opacity-80 py-12 flex-1">
              <h1 className="text-5xl font-semibold text-blue-500">
                <NumberIncreaser target={600000} duration={750} textAfter="+" />
              </h1>
              <h2 className="pt-8 pb-2 text-2xl font-semibold">
                Missing Persons
              </h2>
              <p className="text-lg text-slate-500 flex justify-center items-center leading-relaxed">
                <p className="w-1/2">
                  "Nationwide, there are roughly 6.5 missing persons for every
                  100,000 people."
                </p>
              </p>
            </div>

            <div className="rounded-3xl bg-blue-50 bg-opacity-80 py-12 flex-1">
              <h1 className="text-5xl font-semibold text-blue-500">
                <NumberIncreaser target={273000} duration={750} textAfter="+" />
              </h1>
              <h2 className="pt-8 pb-2 text-2xl font-semibold">
                Death from Drunk Driver
              </h2>
              <p className="text-lg text-slate-500 flex justify-center leading-relaxed">
                <p className="w-1/2">
                  "Out of 1.25 million global road deaths yearly, approximately
                  273,000 involve a drunk driver."
                </p>
              </p>
            </div>
          </div>
        }
      />

      <CenteredContentWider
        content={
          <>
            <h1 className="text-lg font-semibold pb-10">
              Why Did We Undertake This Project?
            </h1>
            <p className="text-lg leading-relaxed">
              <p className="pb-8">
                Our project began with a heartbroken realization - 37 lives lost
                daily to&nbsp;
                <Highlight
                  text={"alcohol-related accidents"}
                  highlightColor="#4285F4"
                />
                &nbsp;in the U.S. The National&nbsp;
                <Highlight
                  text={"Missing and Unidentified Persons"}
                  highlightColor="#4285F4"
                />
                &nbsp;(NamUS) data revealed an annual count of over 600,000
                missing individuals, with 4,400 unidentified bodies recovered
                each year.
              </p>
              <p>
                These stark figures ignited a collective commitment to tackle
                this urgent issue. Yet, it was a team member's personal tragedy
                - losing a family member to drunk driving, that brought the
                cause even closer to home. Now, our project is more than a
                task;&nbsp;
                <Highlight
                  text={"To protect our family and friends"}
                  highlightColor="#4285F4"
                />
                , it's a shared journey with a deeply personal mission to make a
                difference in the face of these challenges.
              </p>
            </p>
          </>
        }
      />

      <h1 className="text-4xl font-praise text-blue-500 pb-10 text-center">
        Research
      </h1>

      <CenteredContentWider
        content={
          <>
            <h1 className="text-4xl font-semibold pb-10">
              Understanding our User
            </h1>
            <p className="text-lg leading-relaxed">
              On approaching this problem, we interviewed 8 people who are&nbsp;
              <Highlight
                text={"driving and constantly go to alcohol social events"}
                highlightColor="#4285F4"
              />
              . To understand the behavior of people when they go out to social
              events involving alcohol, their decision-making process when
              trying to return home safely, and their views on drunk driving.
            </p>
          </>
        }
      />

      <CenteredContentWider
        removePadding
        content={
          <h1 className="text-4xl font-semibold pb-10">
            User Research Insights
          </h1>
        }
      />

      <CenteredContentWider
        content={
          <div className="pt-10 flex flex-wrap gap-10 justify-center xl:justify-between">
            <div className="flex flex-col justify-center items-center w-[11rem]">
              <div className="p-8 lg:p-10 bg-blue-50 rounded-full justify-center items-center w-fit">
                <FavoriteIcon style={{ width: "4rem", height: "4rem" }} />
              </div>
              <p className="text-md text-center pt-8">
                Tracking of Loved Ones & Safety Concerns
              </p>
            </div>
            <div className="flex flex-col justify-center items-center w-[11rem]">
              <div className="p-8 lg:p-10 bg-blue-50 rounded-full justify-center items-center w-fit">
                <BuildIcon style={{ width: "4rem", height: "4rem" }} />
              </div>
              <p className="text-md text-center pt-8">
                Demand for Portable BAC Testing Tool
              </p>
            </div>
            <div className="flex flex-col justify-center items-center w-[11rem]">
              <div className="p-8 lg:p-10 bg-blue-50 rounded-full justify-center items-center w-fit">
                <LocalBarIcon style={{ width: "4rem", height: "4rem" }} />
              </div>
              <p className="text-md text-center pt-8">
                Concerns over Drugging & Impaired Decisions
              </p>
            </div>
            <div className="flex flex-col justify-center items-center w-[11rem]">
              <div className="p-8 lg:p-10 bg-blue-50 rounded-full justify-center items-center w-fit">
                <DirectionsCarIcon style={{ width: "4rem", height: "4rem" }} />
              </div>
              <p className="text-md text-center pt-8">
                Need for Accessible Transportation
              </p>
            </div>
          </div>
        }
      />

      <h1 className="text-4xl font-praise text-blue-500 pb-10 text-center">
        Design
      </h1>
      <CenteredContentWider
        content={
          <>
            <h1 className="text-4xl font-semibold pb-10">Solution space</h1>
            <p className="text-lg leading-relaxed">
              <p className="pb-8">
                Our group found limitations in 60 + existing solutions and aimed
                to enhance user experience. We focused on improving solution
                convenience for social events, ensuring usability when lost or
                without a charged phone. We also wanted to enable users to track
                friends' drinking activities, a missing feature in current
                options.
              </p>
              <p className="">
                Individual design proposals were discussed, resulting in a
                condensed list of 34 ideas. Through a Figma affinity diagram, we
                organized these into clusters, differentiating between digital
                and non-digital solutions. Team members marked preferences,
                narrowing down to 2-3 ideas. Finally, we synthesized elements
                from the top three ideas, aligning key features with the
                persona's goals, project scope, and addressing identified
                solution space limitations.
              </p>
            </p>
            <LazyImage src={solutionSpace} className="mt-10" />
          </>
        }
      />

      <CenteredContentWider
        content={
          <>
            <h1 className="text-4xl font-semibold pb-10">
              Paper Prototype Demo
            </h1>
            <video autoPlay loop muted className="w-full mt-4">
              <source src={affinityMapping} type="video/mp4" />
            </video>
          </>
        }
      />

      <CenteredContentWider
        removePadding
        content={
          <>
            <h1 className="text-4xl font-semibold pb-10">
              Design Decision Based on Usability Testing
            </h1>
            <p className="text-lg leading-relaxed">
              On approaching this problem, we interviewed 8 people who are{" "}
              <Highlight
                text={"driving and constantly go to alcohol social events"}
                highlightColor="#4285F4"
              />
              . To understand the behavior of people when they go out to social
              events involving alcohol, their decision-making process when
              trying to return home safely, and their views on drunk driving.
            </p>
          </>
        }
      />
      <CenteredContentWider
        content={
          <div className="mt-10">
            <h1 className="text-2xl font-semibold underline-offset-8 decoration-4 underline decoration-blue-600">
              1. Location Sharing
            </h1>
            <LazyImage src={locationSharing} className="mb-32 mt-4" />

            <h1 className="text-2xl mt-10 font-semibold underline-offset-8 decoration-4 underline decoration-blue-600">
              2. Multiple Reports of BAC Testing for A Given Day
            </h1>

            <LazyImage src={multipleReports} className="mb-32 mt-4" />
            <h1 className="text-2xl mt-10 font-semibold underline-offset-8 decoration-4 underline decoration-blue-600">
              3. Optional for Locked Car
            </h1>
            <LazyImage src={lockedCar} className="mb-32 mt-4" />

            <h1 className="text-2xl mt-10 font-semibold underline-offset-8 decoration-4 underline decoration-blue-600">
              3. Optional for Locked Car
            </h1>
            <LazyImage src={watches} className="mb-32 mt-4" />

            <h1 className="text-2xl mt-10 font-semibold underline-offset-8 decoration-4 underline decoration-blue-600">
              3. Optional for Locked Car
            </h1>
            <video className="mb-32 mt-4" autoPlay loop>
              <source src={carKey} type="video/mp4" />
            </video>
          </div>
        }
      />

      <CenteredContentWider
        removePadding
        content={
          <h1 className="text-4xl font-semibold pb-10 text-center">
            Main Screens
          </h1>
        }
      />

      <CenteredContentWider
        content={
          <div className="mt-10">
            <h1 className="text-2xl font-semibold underline-offset-8 decoration-4 underline decoration-blue-600">
              Report
            </h1>
            <LazyImage src={report} className="mb-32 mt-4" />

            <h1 className="text-2xl font-semibold underline-offset-8 decoration-4 underline decoration-blue-600">
              Share Location
            </h1>
            <LazyImage src={shareLocation} className="mb-32 mt-4" />
          </div>
        }
      />

      <CenteredContentWider
        removePadding
        content={
          <>
            <h1 className="text-4xl font-semibold pb-10 text-center">
              All Phone Screens
            </h1>
          </>
        }
      />
      <CenteredContentWider
        content={
          <div className="flex flex-wrap gap-8 justify-center">
            {screens.map((entry, index) => (
              <LazyImage
                removeFadeIn
                src={entry}
                key={index}
                className="w-1/4 h-auto"
              />
            ))}
          </div>
        }
      />

      <CenteredContentWider
        content={
          <>
            <h1 className="text-4xl font-semibold pb-10">
              Challenges & Learnings
            </h1>
            <p className="text-lg leading-relaxed">
              <p className="pb-8">
                <Highlight
                  text="Overcoming Challenges in Discussing Drunk Driving"
                  highlightColor="#4285F4"
                />
                . Addressing the sensitivity of the topic of drunk driving, we
                focused on building trust with users during interviews, truly
                learn how to create a comfortable space for our interviewees to
                share their experiences.
              </p>
              <p className="">
                <Highlight
                  text="Prioritizing Feedback for Maximum Improvement"
                  highlightColor="#4285F4"
                />
                . Post-usability testing, we received numerous feedback. This
                section explores the decision-making process behind prioritizing
                and implementing improvements based on the collected feedback.
              </p>
            </p>
          </>
        }
      />

      <CenteredContentWider
        removePadding
        content={
          <>
            <h1 className="text-4xl font-semibold pb-10">
              Poster Presentation
            </h1>
            <p className="text-lg leading-relaxed">
              <p className="pb-8">
                At Cornell's Duffield Atrium poster session, IntoxiBlock, our
                solution for safe post-event journeys after alcohol consumption,
                stood out with its sleek design. The narrative emphasized
                real-world impact, resonating with the audience.
              </p>
              <p className="">
                The climax was the announcement of IntoxiBlock winning the Best
                Design award, symbolizing our growth as designers in a
                collaborative environment. Packing up with a sense of pride, the
                poster session not only celebrated our success but also honed
                our storytelling skills.
              </p>
            </p>
          </>
        }
      />

      <CenteredContentWider
        removePadding
        content={
          <div className="flex flex-wrap justify-center mb-10 mt-4">
            <LazyImage className="w-3/5" src={poster} alt="" />
            <div className="w-2/5">
              <LazyImage src={selfie1} alt="" />
              <LazyImage src={selfie2} alt="" />
              <LazyImage src={selfie3} alt="" />
            </div>
          </div>
        }
      />
    </div>
  );
}

export default Intoxiblock;
