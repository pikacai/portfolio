import phone1 from "../../assets/intoxiblock/phone1.mp4";
import phone2 from "../../assets/intoxiblock/phone2.mp4";
import phone3 from "../../assets/intoxiblock/phone3.mp4";
import watch1 from "../../assets/intoxiblock/watch1.mp4";

import background from "../../assets/intoxiblock/1.png";

// Brand Icons
import figma from "../../assets/brandIcons/figma.svg";

// Images
import affinityDiagram from "../../assets/intoxiblock/affinityDiagram.png";
import affinityMapping from "../../assets/intoxiblock/affinityMapping.mp4";
import solutionSpace from "../../assets/intoxiblock/solutionSpace.png";
import multipleReports from "../../assets/intoxiblock/multipleReports.png";
import locationSharing from "../../assets/intoxiblock/locationSharing.png";
import lockedCar from "../../assets/intoxiblock/lockedCar.png";

import watches from "../../assets/intoxiblock/watches.png";
import carKey from "../../assets/intoxiblock/carKey.mp4";

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
import NumberIncreaser from "./IntersectionObserver/NumberIncreaser";
import CenteredContentWider from "./CenteredContentWider";
import Highlight from "./IntersectionObserver/Highlight";
// LottieFiles
import heart from "../../assets/lottieFiles/heart.json";
import build from "../../assets/lottieFiles/googleMaps/build.json";
import wine from "../../assets/lottieFiles/wine.json";
import car from "../../assets/lottieFiles/car.json";

import LottieAnimation from "../utilities/LottieAnimation";
import { Link } from "react-router-dom";

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

  useEffect(() => {
    console.log(active);
  }, [active]);

  const ref = useRef<HTMLDivElement>(null);

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
      <div
        className="h-screen w-screen overflow-hidden flex flex-col justify-center items-center gap-y-24 bg-black mb-36 py-36"
        style={{
          background: `url(${background}) no-repeat center center fixed`,
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
              <p className="font-semibold pb-4 underline underline-offset-2">
                Role
              </p>
              <p>UX Researcher & Designer</p>
            </div>
            <div className="flex-1">
              <p className="font-semibold pb-4 underline underline-offset-2">
                Timeline
              </p>
              <p>12 weeks</p>
            </div>
            <div className="flex-1">
              <p className="font-semibold pb-4 underline underline-offset-2">
                Teammates
              </p>
              <p>Aishwarya Gupta</p>
              <p>Fiona Gao</p>
              <p>Jamie Paradis</p>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <p className="font-semibold pb-4 underline underline-offset-2">
                Prototypes
              </p>
              <Link
                target="_blank"
                to={
                  "https://www.figma.com/proto/yDC6E7BvbeAB0Mu7RzarB9/Pika_IntoxiBlock-Prototype?page-id=0%3A1&type=design&node-id=1-414&viewport=665%2C1379%2C0.14&t=FzrUnMRJE5u8zCi6-1&scaling=scale-down&starting-point-node-id=1%3A414&show-proto-sidebar=1&mode=design"
                }
                className="hover:opacity-80 transition-all py-2 px-6 mb-1 text-lg bg-black rounded-xl text-white whitespace-nowrap flex justify-center items-center"
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
                "Every day, about 37 people in the United States die in
                drunk-driving crashes — that's one person every 39 minutes." (
                <Link
                  to={"https://www.nhtsa.gov/risky-driving/drunk-driving"}
                  target="blank"
                  className="text-blue-500 underline underline-offset-2"
                >
                  National Highway Traffic Safety Administration
                </Link>
                ). These fatal accidents may have been prevented if a safety net
                were there to assist impaired drivers to making responsible
                decisions.
              </p>
              <div className="flex flex-wrap justify-center gap-10 text-center pt-10">
                <div className="rounded-3xl bg-blue-50 bg-opacity-80 py-12 flex-1">
                  <h1 className="text-5xl font-semibold text-blue-500">
                    <NumberIncreaser
                      target={600000}
                      duration={750}
                      textAfter="+"
                    />
                  </h1>
                  <h2 className="pt-8 pb-2 text-2xl font-semibold">
                    Missing Persons
                  </h2>
                  <p className="text-lg text-slate-500 flex justify-center items-center leading-relaxed">
                    <p className="w-1/2">
                      Nationwide, there are roughly 6.5 missing persons for
                      every 100,000 people.
                    </p>
                  </p>
                </div>

                <div className="rounded-3xl bg-blue-50 bg-opacity-80 py-12 flex-1">
                  <h1 className="text-5xl font-semibold text-blue-500">
                    <NumberIncreaser
                      target={273000}
                      duration={750}
                      textAfter="+"
                    />
                  </h1>
                  <h2 className="pt-8 pb-2 text-2xl font-semibold">
                    Death from Drunk Driver
                  </h2>
                  <p className="text-lg text-slate-500 flex justify-center leading-relaxed">
                    <p className="w-1/2">
                      Out of 1.25 million global road deaths yearly,
                      approximately 273,000 involve a drunk driver.
                    </p>
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h1 className="text-2xl font-semibold pb-10">Solution Summary</h1>
              <p className="text-xl leading-relaxed">
                As a UX Researcher, I conducted interviews, surveys, usability
                testing, and data analysis to garner insights into our user base
                (e.g., personas, behaviors, needs, and motivations).
                <br />
                <br />
                Equipped with new insights, I designed two products, a mobile
                and watch app and a breathalyzer key fob, to make it easier for
                impaired individuals to ask for a ride home. This process
                involved designing user interfaces (UI) and interactions that
                meet the users needs and accomplished business objectives.
              </p>
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
              <h1 className="text-2xl font-semibold pb-10">Personas</h1>
              <p className="text-xl leading-relaxed">
                My team and I spoke with 8 classmates, who often go out to
                social events that involve alcohol consumption, to understand
                their behavior, decision-making process, and experiences with
                driving under the influence. Here are the 2 personas we came up
                with:
                <div className="border border-gray-200 shadow-xl rounded-xl text-xl overflow-hidden mt-10">
                  <table>
                    <tr className="border-b">
                      <th className="text-left p-4">Persona</th>
                      <td className="border-l border-r p-4 bg-purple-50">
                        Social Sammy 🎉
                      </td>
                      <td className="p-4 bg-yellow-50">Cautious Cai ⚠️</td>
                    </tr>
                    <tr className="border-b">
                      <th className="text-left p-4">Age</th>
                      <td className="border-l border-r p-4 bg-purple-50">22</td>
                      <td className="p-4 bg-yellow-50">21</td>
                    </tr>
                    <tr className="border-b">
                      <th className="text-left p-4">Occupation</th>
                      <td className="border-l border-r p-4 bg-purple-50">
                        College student
                      </td>
                      <td className="p-4 bg-yellow-50">College student</td>
                    </tr>
                    <tr className="border-b">
                      <th className="text-left p-4">Lifestyle</th>
                      <td className="border-l border-r p-4 bg-purple-50">
                        Enjoys attending social events with friends, often
                        involving alcohol consumption.
                      </td>
                      <td className="p-4 bg-yellow-50">
                        Participates in social events but prioritizes safety and
                        responsibility.
                      </td>
                    </tr>
                    <tr className="border-b">
                      <th className="text-left p-4">Behavior</th>
                      <td className="border-l border-r p-4 bg-purple-50">
                        Drinks moderately but occasionally engages in heavy
                        drinking during parties or celebrations.
                      </td>
                      <td className="p-4 bg-yellow-50">
                        Drinks moderately and is mindful of her alcohol
                        consumption, usually opting for alternative
                        transportation methods like ridesharing or designated
                        drivers.
                      </td>
                    </tr>
                    <tr className="border-b">
                      <th className="text-left p-4">
                        Attitude towards driving
                      </th>
                      <td className="border-l border-r p-4 bg-purple-50">
                        Has a lax attitude towards driving after consuming
                        alcohol, believing that they can handle it or that the
                        distance is short enough to be safe.
                      </td>
                      <td className="p-4 bg-yellow-50">
                        Refrains from driving after consuming any amount of
                        alcohol, understanding the potential consequences and
                        prioritizing the safety of herself and others.
                      </td>
                    </tr>
                    <tr className="">
                      <th className="text-left p-4">Concerns</th>
                      <td className="border-l border-r p-4 bg-purple-50">
                        Worries about missing out on social activities if they
                        refrain from drinking or driving, and may underestimate
                        the risks associated with driving under the influence.
                      </td>
                      <td className="p-4 bg-yellow-50">
                        Values her safety and the safety of others above all
                        else, and actively seeks out alternatives to driving
                        under the influence to mitigate risks and avoid
                        potential legal consequences.
                      </td>
                    </tr>
                  </table>
                </div>
              </p>
            </div>
            <div className="pb-20">
              <h1 className="text-2xl font-semibold pb-10">Insights</h1>
              <div className="flex flex-wrap justify-between text-center text-base">
                <div className="flex flex-col justify-center items-center w-[11rem]">
                  <div className="bg-blue-50 rounded-full justify-center items-center w-fit relative p-[4.5rem]">
                    <LottieAnimation
                      src={heart}
                      startingFrame={30}
                      className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]  w-[14rem] h-[14rem] transition-all"
                    />
                  </div>
                  <p className="text-md text-center pt-8">
                    Tracking of Loved Ones & Safety Concerns
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center w-[11rem]">
                  <div className="bg-blue-50 rounded-full justify-center items-center w-fit relative p-[4.5rem]">
                    <LottieAnimation
                      src={build}
                      className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]  w-[8rem] h-[8rem] transition-all"
                    />
                  </div>
                  <p className="text-md text-center pt-8">
                    Demand for Portable BAC Testing Tool
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center w-[11rem]">
                  <div className="bg-blue-50 rounded-full justify-center items-center w-fit relative p-[4.5rem]">
                    <LottieAnimation
                      src={wine}
                      className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]  w-[4rem] h-[4rem] transition-all"
                    />
                  </div>
                  <p className="text-md text-center pt-8">
                    Concerns over Impaired Decisions
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center w-[11rem]">
                  <div className="bg-blue-50 rounded-full justify-center items-center w-fit relative p-[4.5rem]">
                    <LottieAnimation
                      src={car}
                      className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[8rem] h-[8rem] transition-all"
                    />
                  </div>
                  <p className="text-md text-center pt-8">
                    Need for Accessible Transportation
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-semibold pb-10">Journey Map</h1>
              <p className="text-xl leading-relaxed">
                To identify pain points and opportunities for improvement we
                conducted a journey mapping exercise. Below is a list of typical
                steps and touchpoints that our personas go through while
                attending social events involving alcohol.
                <ul className="mt-10 list-inside list-decimal text-lg p-8 border border-gray-100 shadow-xl rounded-xl">
                  <li className="">
                    <strong>Pre-event Preparation:</strong>
                    <ul className="list-inside list-disc pl-8">
                      <li>
                        Social Sam: Receives invitation to a social event and
                        prepares for the evening, including planning
                        transportation options.
                      </li>
                      <li>
                        Cautious Chloe: Reviews event details and confirms
                        transportation plans to ensure a safe return home.
                      </li>
                    </ul>
                  </li>
                  <li className="pt-6">
                    <strong>Arrival at the Event:</strong>
                    <ul className="list-inside list-disc pl-8">
                      <li>
                        Social Sam: Arrives at the event location, greets
                        friends, and begins socializing with drinks.
                      </li>
                      <li>
                        Cautious Chloe: Arrives at the event location, assesses
                        the atmosphere, and makes responsible choices regarding
                        alcohol consumption.
                      </li>
                    </ul>
                  </li>
                  <li className="pt-6">
                    <strong>Socializing and Drinking:</strong>
                    <ul className="list-inside list-disc pl-8">
                      <li>
                        Social Sam: Engages in conversations with friends,
                        consuming alcohol at a moderate to heavy pace throughout
                        the evening.
                      </li>
                      <li>
                        Cautious Chloe: Socializes with friends while monitoring
                        alcohol intake and opting for non-alcoholic alternatives
                        when necessary.
                      </li>
                    </ul>
                  </li>
                  <li className="pt-6">
                    <strong>Decision to Leave:</strong>
                    <ul className="list-inside list-disc pl-8">
                      <li>
                        Social Sam: Makes a spontaneous decision to leave the
                        event and considers driving home, influenced by peer
                        pressure or time constraints.
                      </li>
                      <li>
                        Cautious Chloe: Plans to leave the event at a
                        predetermined time, ensuring alternative transportation
                        arrangements are in place.
                      </li>
                    </ul>
                  </li>
                  <li className="pt-6">
                    <strong>Transportation Choice:</strong>
                    <ul className="list-inside list-disc pl-8">
                      <li>
                        Social Sam: Decides to drive home despite consuming
                        alcohol, rationalizing that they feel capable or that
                        the distance is short.
                      </li>
                      <li>
                        Cautious Chloe: Opts for alternative transportation
                        methods such as ridesharing, designated drivers, or
                        public transportation to ensure a safe journey home.
                      </li>
                    </ul>
                  </li>
                  <li className="pt-6">
                    <strong>Arrival at Home:</strong>
                    <ul className="list-inside list-disc pl-8">
                      <li>
                        Social Sam: Arrives home safely but may experience
                        anxiety or guilt over the decision to drive under the
                        influence.
                      </li>
                      <li>
                        Cautious Chloe: Returns home safely, feeling confident
                        in the responsible choices made throughout the evening.
                      </li>
                    </ul>
                  </li>
                </ul>
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
              <h1 className="text-2xl font-semibold pb-10">
                Low Fidelity Prototype
              </h1>
              <video
                autoPlay
                loop
                muted
                className="w-full rounded-xl shadow-xl"
              >
                <source src={affinityMapping} type="video/mp4" />
              </video>
            </div>
            <div className="pb-20">
              <h1 className="text-2xl font-semibold pb-10">
                Information Architecture
              </h1>
              <img src={solutionSpace} className="p-4 rounded-xl shadow-xl" />
            </div>
            <div className="pb-20">
              <h1 className="text-2xl font-semibold pb-10">
                Usability Testing
              </h1>
              <div>
                <h1 className="text-2xl font-semibold underline-offset-8 decoration-4 underline decoration-blue-600">
                  1. Location Sharing
                </h1>
                <img src={locationSharing} className="mb-32 mt-4" />

                <h1 className="text-2xl mt-10 font-semibold underline-offset-8 decoration-4 underline decoration-blue-600">
                  2. Multiple Reports of BAC Testing for A Given Day
                </h1>

                <img src={multipleReports} className="mb-32 mt-4" />
                <h1 className="text-2xl mt-10 font-semibold underline-offset-8 decoration-4 underline decoration-blue-600">
                  3. Optional for Locked Car
                </h1>
                <img src={lockedCar} className="mb-32 mt-4" />

                <h1 className="text-2xl mt-10 font-semibold underline-offset-8 decoration-4 underline decoration-blue-600">
                  3. Optional for Locked Car
                </h1>
                <img src={watches} className="mb-32 mt-4" />

                <h1 className="text-2xl mt-10 font-semibold underline-offset-8 decoration-4 underline decoration-blue-600">
                  3. Optional for Locked Car
                </h1>
                <video className="mt-4" autoPlay loop>
                  <source src={carKey} type="video/mp4" />
                </video>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-semibold pb-10">Final Design</h1>
              <div className="flex overflow-auto gap-12 pb-4">
                {screens.map((entry, index) => (
                  <img src={entry} key={index} className="w-1/4 h-auto" />
                ))}
              </div>
            </div>
          </>
        }
      />
      <CenteredContentWider
        content={
          <>
            <h1 className="text-4xl font-semibold pb-10 text-center">
              Challenges & Learnings
            </h1>
            <div className="pb-20">
              <h1 className="text-2xl font-semibold pb-10">
                <Highlight
                  text="Overcoming Challenges in Discussing Drunk Driving"
                  highlightColor="#c9e2ff"
                />
              </h1>
              <p className="text-lg leading-relaxed">
                When addressing the sensitive topic of drunk driving, we focused
                on building trust with interviewees to truly create a safe space
                to open up.
              </p>
            </div>
            <div>
              <h1 className="text-2xl font-semibold pb-10">
                <Highlight
                  text="Prioritizing Feedback for Maximum Improvement"
                  highlightColor="#c9e2ff"
                />
              </h1>
              <p className="text-lg leading-relaxed">
                Post-usability testing, we received a lot unstructured feedback.
                This project saw us prioritizing common painpoints while also
                enhacing under-represented concerns.
              </p>
            </div>
          </>
        }
      />
      <CenteredContentWider
        content={
          <>
            <h1 className="text-4xl font-semibold pb-10 text-center">
              Poster Presentation
            </h1>
            <p className="pb-10 text-lg leading-relaxed">
              At Cornell's Duffield Atrium poster session, IntoxiBlock, our
              solution for safe post-event journeys after alcohol consumption,
              stood out with its sleek design. The narrative emphasized
              real-world impact, resonating with the audience.
              <br />
              <br />
              The climax was the announcement of IntoxiBlock winning the Best
              Design award, symbolizing our growth as designers in a
              collaborative environment.
            </p>
            <div className="flex flex-wrap justify-center mb-10 mt-4">
              <img className="w-3/5" src={poster} alt="" />
              <div className="w-2/5">
                <img src={selfie1} alt="" />
                <img src={selfie2} alt="" />
                <img src={selfie3} alt="" />
              </div>
            </div>
          </>
        }
      />
      <div className="bg-green-500 bg-opacity-[0.12] py-12 px-12 flex justify-center">
        <p className="text-xl leading-relaxed w-[60%]">
          Special thanks to Gilly Leshed and Shu-Jung Han for their guidance and
          support in this project! ❤️
        </p>
      </div>
    </div>
  );
}

export default Intoxiblock;

/*
<CenteredContentWider
        content={
          <>
            <h1 className="text-4xl font-semibold pb-10 text-center">
              Main Screens
            </h1>
            <div className="mt-10">
              <h1 className="text-2xl font-semibold underline-offset-8 decoration-4 underline decoration-blue-600">
                Report
              </h1>
              <img src={report} className="mb-32 mt-4" />

              <h1 className="text-2xl font-semibold underline-offset-8 decoration-4 underline decoration-blue-600">
                Share Location
              </h1>
              <img src={shareLocation} className="mb-32 mt-4" />
            </div>
          </>
        }
      />







      <div className="flex flex-wrap justify-center gap-12 text-center">
              <div>
                <div className="p-10 bg-blue-50 rounded-full flex justify-center items-center">
                  <LottieAnimation
                    src={compass}
                    className="w-[4rem] h-[4rem] hover:scale-110 transition-all"
                  />
                </div>
                <p className="pt-8 text-xl">Discover</p>
              </div>

              <div>
                <div className="p-10 bg-blue-50  rounded-full flex justify-center items-center">
                  <LottieAnimation
                    src={note}
                    startingFrame={160}
                    className="w-[4rem] h-[4rem] hover:scale-110 transition-all"
                  />
                </div>
                <p className="pt-8 text-xl">Define</p>
              </div>

              <div>
                <div className="p-10 bg-blue-50  rounded-full flex justify-center items-center">
                  <LottieAnimation
                    src={lightbulb}
                    startingFrame={10}
                    className="w-[4rem] h-[4rem] hover:scale-110 transition-all"
                  />
                </div>
                <p className="pt-8 text-xl">Ideate</p>
              </div>

              <div>
                <div className="p-10 bg-blue-50  rounded-full flex justify-center items-center">
                  <LottieAnimation
                    src={build}
                    className="w-[4rem] h-[4rem] hover:scale-[1.6] transition-all scale-150"
                  />
                </div>
                <p className="pt-8 text-xl">Design</p>
              </div>
            </div>


            Our group found limitations in 60 existing solutions. We focused on
      ensuring usability when lost or without a charged phone. We also wanted to
      enable users to track friends' drinking activities, a missing feature in
      current options. Individual design proposals were discussed, resulting in
      a condensed list of 34 ideas. Through a Figma affinity diagram, we
      organized these into clusters, differentiating between digital and
      non-digital solutions. Team members marked preferences, narrowing down to
      2-3 ideas. Finally, we synthesized elements from the top three ideas,
      aligning key features with the persona's goals, project scope, and
      addressing limitations in current solutions.
*/
