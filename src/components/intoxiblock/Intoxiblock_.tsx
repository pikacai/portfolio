import CenteredContent from "./CenteredContent";

import phone from "../../assets/iphone.png";

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
import solutionSpace from "../../assets/intoxiblock/solutionSpace.png";
import multipleReports from "../../assets/intoxiblock/multipleReports.svg";
import locationSharing from "../../assets/intoxiblock/locationSharing.svg";
import { useEffect, useRef } from "react";
import IntersectionAnimate from "./useIntersectionObserver";

function Intoxiblock_() {
  const phones = [phone, phone, phone];

  let intervalId: number;
  useEffect(() => {
    intervalId = setInterval(() => {
      // setTranslate((translate) => {
      //   if (
      //     translate === (ref.current?.offsetHeight as number) * 3 ||
      //     translate > (ref.current?.offsetHeight as number) * 3
      //   ) {
      //     return 0;
      //   } else {
      //     return translate + (ref.current?.offsetHeight as number);
      //   }
      // });
    }, 1500);
    return () => clearInterval(intervalId);
  }, []);

  const ref = useRef(null);

  return (
    <div>
      <div className="h-screen w-screen flex flex-col justify-center items-center gap-y-32">
        <div className="">
          <h1 className="text-7xl font-medium">IntoxiBlock</h1>
          <h2 className="text-3xl text-slate-600">Safe and sober journeys</h2>
          <h3 className="text-3xl font-praise">
            🥇 Won the award for Best Design
          </h3>
        </div>
        <div className="flex gap-20 justify-center items-center">
          {phones.map((entry, index) => {
            return (
              <img
                src={entry}
                className="w-[250px] h-auto transition-all opacity-30 hover:opacity-100 hover:scale-110"
                alt=""
              />
            );
            // if (index === 1) {
            //   return (
            //     <img
            //       src={entry}
            //       className="w-[250px] h-auto scale-110"
            //       alt=""
            //     />
            //   );
            // } else {
            //   return (
            //     <img
            //       src={phone}
            //       className="w-[250px] h-auto opacity-30"
            //       alt=""
            //     />
            //   );
            // }
          })}
        </div>
      </div>

      <CenteredContent
        content={
          <>
            <h1 className="text-4xl font-semibold pb-10">Problem Statement</h1>
            <p className="text-2xl leading-relaxed">
              A student who consumes alcohol needs to address their pressing
              concerns, including enhancing access to transportation services
              like Uber, ensuring better friend tracking capabilities, improving
              safety standards for drivers and providing a reliable means for
              testing blood alcohol concentration (BAC) levels because they want
              a secure means in Ithaca to travel safely to and from social
              events where alcohol is consumed, ensuring their safety and peace
              of mind.
            </p>
          </>
        }
      />

      <h1 className="text-4xl font-semibold pb-10 text-center">Our Process</h1>
      <div className="flex flex-wrap justify-center gap-16 text-center pb-36">
        <div>
          <div className="p-10 bg-blue-50 rounded-full flex justify-center items-center">
            <ExploreIcon style={{ width: "5rem", height: "5rem" }} />
          </div>
          <p className="pt-8 text-xl">Discover</p>
        </div>

        <div>
          <div className="p-10 bg-blue-50 rounded-full flex justify-center items-center">
            <ContentPasteSearchIcon style={{ width: "5rem", height: "5rem" }} />
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
            <HandymanRoundedIcon style={{ width: "5rem", height: "5rem" }} />
          </div>
          <p className="pt-8 text-xl">Design</p>
        </div>
      </div>

      <h1 className="text-4xl font-semibold pb-10 text-center">
        About the Project
      </h1>
      <div className="flex flex-wrap justify-center gap-10 text-center pb-36 px-24">
        <div className="rounded-3xl bg-blue-50 bg-opacity-80 py-12 flex-1">
          <h1 className="text-5xl font-semibold text-blue-500">600,000+</h1>
          <h2 className="pt-8 pb-2 text-2xl font-semibold">Missing Person</h2>
          <p className="text-2xl text-slate-500 w-fit flex justify-center leading-relaxed">
            <p className="w-1/2">
              "Nationwide, there are roughly 6.5 missing persons for every
              100,000 people."
            </p>
          </p>
        </div>

        <div className="rounded-3xl bg-blue-50 bg-opacity-80 py-12 flex-1">
          <h1 className="text-5xl font-semibold text-blue-500">273,000+</h1>
          <h2 className="pt-8 pb-2 text-2xl font-semibold">
            Dead from Drunk Driver
          </h2>
          <p className="text-2xl text-slate-500 w-fit flex justify-center leading-relaxed">
            <p className="w-1/2">
              "Out of 1.25 million global road deaths yearly, approximately
              273,000 involve a drunk driver."
            </p>
          </p>
        </div>
      </div>

      <CenteredContent
        content={
          <>
            <h1 className="text-2xl font-semibold pb-10">
              Why Did We Undertake This Project?
            </h1>
            <p className="text-2xl leading-relaxed">
              <p className="pb-8">
                Our project began with a heartbroken realization - 37 lives lost
                daily to alcohol-related accidents in the U.S. The National
                Missing and Unidentified Persons (NamUS) data revealed an annual
                count of over 600,000 missing individuals, with 4,400
                unidentified bodies recovered each year.
              </p>
              <p>
                These stark figures ignited a collective commitment to tackle
                this urgent issue. Yet, it was a team member's personal tragedy
                - losing a family member to drunk driving, that brought the
                cause even closer to home. Now, our project is more than a task;
                To protect our family and friends, it's a shared journey with a
                deeply personal mission to make a difference in the face of
                these challenges.
              </p>
            </p>
          </>
        }
      />

      <h1 className="text-4xl font-praise text-blue-500 pb-10 text-center">
        Research
      </h1>

      <CenteredContent
        content={
          <>
            <h1 className="text-4xl font-semibold pb-10">
              Understanding our User
            </h1>
            <p className="text-2xl leading-relaxed">
              On approaching this problem, we interviewed 8 people who are{" "}
              <span className="font-semibold text-blue-500">
                driving and constantly go to alcohol social events
              </span>
              . To understand the behavior of people when they go out to social
              events involving alcohol, their decision-making process when
              trying to return home safely, and their views on drunk driving.
            </p>
          </>
        }
      />

      <CenteredContent
        content={
          <>
            <h1 className="text-4xl font-semibold pb-10">Affinity Diagram</h1>
            <p className="text-2xl leading-relaxed">
              The goal of the product is to{" "}
              <span className="font-semibold">ensure the safety</span> of
              individuals returning home after social events that involve
              alcohol consumption, with friends keeping a watchful eye on us.
              Now imagine, you've driven to your friend's place, enjoyed some
              drinks at a social event, and now, as the evening comes to a
              close, it's time to head home. As you prepare to leave, you
              consider your options for a safe journey back. You open the
              IntoxiBlock app on your phone and you want to do…
            </p>
          </>
        }
      />

      <CenteredContent
        removePadding
        content={
          <>
            <h1 className="text-4xl font-semibold pb-10">
              User Research Insights
            </h1>
            <p className="text-2xl leading-relaxed">
              The goal of the product is to{" "}
              <span className="font-semibold">ensure the safety</span> of
              individuals returning home after social events that involve
              alcohol consumption, with friends keeping a watchful eye on us.
              Now imagine, you've driven to your friend's place, enjoyed some
              drinks at a social event, and now, as the evening comes to a
              close, it's time to head home. As you prepare to leave, you
              consider your options for a safe journey back. You open the
              IntoxiBlock app on your phone and you want to do…
            </p>
          </>
        }
      />

      <div className="flex justify-center gap-24 pt-10 pb-36 px-24 flex-wrap md:flex-nowrap">
        <div className="flex flex-col justify-center items-center">
          <div className="p-10 bg-blue-50 rounded-full flex justify-center items-center w-fit">
            <FavoriteIcon style={{ width: "5rem", height: "5rem" }} />
          </div>
          <p className="pt-8 text-xl text-center">
            Tracking of Loved Ones & Safety Concerns
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="p-10 bg-blue-50 rounded-full flex justify-center items-center w-fit">
            <BuildIcon style={{ width: "5rem", height: "5rem" }} />
          </div>
          <p className="pt-8 text-xl text-center">
            Tracking of Loved Ones & Safety Concerns
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="p-10 bg-blue-50 rounded-full flex justify-center items-center w-fit">
            <LocalBarIcon style={{ width: "5rem", height: "5rem" }} />
          </div>
          <p className="pt-8 text-xl text-center">
            Tracking of Loved Ones & Safety Concerns
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="p-10 bg-blue-50 rounded-full flex justify-center items-center w-fit">
            <DirectionsCarIcon style={{ width: "5rem", height: "5rem" }} />
          </div>
          <p className="pt-8 text-xl text-center">
            Tracking of Loved Ones & Safety Concerns
          </p>
        </div>
      </div>

      <h1 className="text-4xl font-praise text-blue-500 pb-10 text-center">
        Design
      </h1>
      <CenteredContent
        removePadding
        content={
          <>
            <h1 className="text-4xl font-semibold pb-10">Solution space</h1>
            <p className="text-2xl leading-relaxed">
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
          </>
        }
      />

      <div className="flex justify-center pt-10 pb-36">
        <img src={solutionSpace} />
      </div>

      <CenteredContent
        removePadding
        content={
          <>
            <h1 className="text-4xl font-semibold pb-10">
              Design Decision Based on Usability Testing
            </h1>
            <p className="text-2xl leading-relaxed">
              On approaching this problem, we interviewed 8 people who are{" "}
              <span className="font-semibold text-blue-500">
                driving and constantly go to alcohol social events
              </span>
              . To understand the behavior of people when they go out to social
              events involving alcohol, their decision-making process when
              trying to return home safely, and their views on drunk driving.
            </p>
            <div className="pt-10 pb-36">
              <img src={locationSharing} />
              <img src={multipleReports} />
            </div>
          </>
        }
      />
    </div>
  );
}

export default Intoxiblock_;
