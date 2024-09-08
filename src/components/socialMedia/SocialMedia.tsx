import { Link } from "react-router-dom";

import WordPullUp from "@/components/magicui/word-pull-up";
import TypingAnimation from "@/components/magicui/typing-animation";
import BlurFade from "../magicui/blur-fade";

import figma from "../../assets/brandIcons/figma.svg";
import introBase from "../../assets/socialMedia/intro-base.png";
import introInsights from "../../assets/socialMedia/intro-insights.png";
import introScheduled from "../../assets/socialMedia/intro-scheduled.png";
import introSocialMedia from "../../assets/socialMedia/intro-social-media.png";

import research from "../../assets/socialMedia/research.png";
import ideation from "../../assets/socialMedia/ideation.png";
import design from "../../assets/socialMedia/design.png";

import userInterview1 from "../../assets/socialMedia/user-interview-1.png";
import userInterview2 from "../../assets/socialMedia/user-interview-2.png";
import userInterview3 from "../../assets/socialMedia/user-interview-3.png";
import userInterview4 from "../../assets/socialMedia/user-interview-4.png";
import userInterview5 from "../../assets/socialMedia/user-interview-5.png";
import userInterview6 from "../../assets/socialMedia/user-interview-6.png";
import userInterview7 from "../../assets/socialMedia/user-interview-7.png";
import userInterview8 from "../../assets/socialMedia/user-interview-8.png";

import persona from "../../assets/socialMedia/persona.png";

import instagram from "../../assets/socialMedia/instagram.png";
import hootsuite from "../../assets/socialMedia/hootsuite.png";

import chatgpt from "../../assets/socialMedia/chatgpt.png";

import sketch from "../../assets/socialMedia/sketch.png";

import CenteredContentWider from "../intoxiblock/CenteredContentWider";
import GradientText from "../utilities/GradientText";
import BoldText from "../utilities/BoldText";
import Section from "../utilities/Section";

function SocialMedia() {
  const tableOfContents = [
    {
      icon: research,
      title: "Research",
      points: ["User Interview", "Persona", "Competitive Analysis"],
    },
    {
      icon: ideation,
      title: "Ideation",
      points: ["How Might We...", "Feature Ideation Brainstorm"],
    },
    {
      icon: design,
      title: "Design",
      points: ["Sketch", "Prototype"],
    },
  ];
  return (
    <div>
      <div
        className="min-h-screen py-36 flex flex-col gap-y-16"
        style={{
          background:
            "linear-gradient(179.67deg, rgba(255, 255, 255, 0) 34.25%, rgba(255, 255, 255, 0) 51.95%, rgba(255, 255, 255, 0) 60.25%, rgba(255, 255, 255, 0) 72.17%, #FFFFFF 99.69%), linear-gradient(148.65deg, rgba(82, 118, 238, 0.86) 4.87%, rgba(196, 113, 237, 0.86) 73.87%, rgba(255, 123, 131, 0.86) 100.67%, rgba(160, 45, 201, 0.86) 108.29%), #FFFFFF",
        }}
      >
        <div className="text-white">
          <WordPullUp
            className="text-6xl font-medium"
            words="Social Media Analytics App"
          />
          <TypingAnimation
            className="text-lg"
            duration={75}
            text="Offers AI-driven actionable insights to boost social media reach and followers."
          />
        </div>

        <div className="relative flex justify-center">
          <BlurFade key={introBase} delay={0.25 + 0 * 0.05} inView>
            <img className="h-[800px] object-contain" src={'/social-media-intro.png'} />
          </BlurFade>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="w-5/6 pt-72 pb-0">
          <div className="flex items-start justify-center text-center text-xl leading-relaxed">
            <div className="flex-1">
              <p className="font-semibold pb-4">Role</p>
              <p>UX Designer</p>
            </div>
            <div className="flex-1">
              <p className="font-semibold pb-4">Duration</p>
              <p>10 hours</p>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <p className="font-semibold pb-4">Prototype</p>
              <Link
                target="_blank"
                to={
                  "https://www.figma.com/proto/yDC6E7BvbeAB0Mu7RzarB9/Pika_IntoxiBlock-Prototype?page-id=0%3A1&type=design&node-id=1-414&viewport=665%2C1379%2C0.14&t=FzrUnMRJE5u8zCi6-1&scaling=scale-down&starting-point-node-id=1%3A414&show-proto-sidebar=1&mode=design"
                }
                className="hover:opacity-80 transition-all py-2 px-6 mb-1 text-lg bg-black rounded-xl text-white whitespace-nowrap flex justify-center items-center w-fit"
              >
                <img src={figma} alt="" className="h-6" />
                Figma
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Section
        content={
          <div className="flex flex-col gap-y-10">
            <h1 className="text-4xl font-semibold pb-10">Table of Contents</h1>
            <div className="flex flex-wrap gap-24 md:gap-48 justify-center">
              {tableOfContents.map((entry, index) => (
                <div className="flex flex-col gap-y-4">
                  <img src={entry.icon} className="w-48" />
                  <h2 className="text-xl font-medium">{entry.title}</h2>
                  <ul className="text-xl list-disc list-inside">
                    {entry.points.map((entry_, index) => (
                      <li>{entry_}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        }
      />

      <Section
        content={
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex-1 flex flex-col gap-y-10">
              <h1 className="text-4xl font-semibold">User Interview</h1>
              <div className="flex flex-col gap-y-4 text-xl">
                <p>
                  To gain a comprehensive understanding of the users, I aimed to
                  interview individuals such as social media managers,
                  influencers, content creators, or those experienced with
                  social media analytics.
                </p>
                <BoldText
                  text="Reaching out to these target audiences was challenging.
                  Therefore, I adopted a different strategy by _posting an Instagram story to recruit interviewees_
                  from my network. It garnered a lot of respondents eager to
                  share their experiences."
                  parentElement="p"
                />
                <BoldText
                  text="It soon became evident that _many content creators encounter similar challenges in
                    continuously expanding their reach and growing their
                    follower base_."
                  parentElement="p"
                />
              </div>
            </div>
            <div className="w-full md:w-[50%] flex flex-col relative">
              <div className="flex w-full">
                <img src={userInterview1} className=" h-28" />
                <img src={userInterview2} className=" h-28" />
              </div>
              <div className="flex w-full">
                <img src={userInterview3} className="w-1/2 object-contain" />
                <img src={userInterview4} className="w-1/2 object-contain" />
              </div>
              <div className="flex absolute bottom-0 -left-[500px]">
                <img src={userInterview5} className="h-40" />
                <img src={userInterview6} className="h-40" />
                <img src={userInterview7} className="h-40" />
                <img src={userInterview8} className="h-40" />
              </div>
            </div>
          </div>
        }
      />

      <Section
        content={
          <div className="flex flex-col gap-y-10">
            <h1 className="text-4xl font-semibold">Persona</h1>
            <p className="text-xl">
              I created a single persona, Emily, who most representative of the
              feedback and insights I got from the interviews. Let's say hi👋 to
              Emily!
            </p>
            <img src={persona} />
          </div>
        }
      />

      <Section
        content={
          <div className="flex flex-col gap-y-10 text-xl">
            <h1 className="text-4xl font-semibold">Competitive Analysis</h1>
            <p>
              I learned about some competitors from interviews, did my own
              research, tested apps, and watched demo videos.
            </p>
            <div className="overflow-auto">
            <table>
              <thead>
                <tr className="border-b">
                  <th className="p-4 w-64 border-r">Platform</th>
                  <th className="border-r">Strengths</th>
                  <th>Weakness</th>
                </tr>
              </thead>
              <tr className="border-b">
                <td className="flex justify-center items-center gap-x-4 font-semibold p-10 border-r">
                  <img className="h-24 w-24" src={instagram} />
                  Instagram
                </td>
                <td className="p-10 border-r">
                  <ul className="ml-8 list-disc list-outside">
                    <li>Easy-to-read insights through graphs and charts.</li>
                  </ul>
                </td>
                <td className="p-10">
                  <ul className="ml-8 list-disc list-outside">
                    <li>Data will be deleted after 3 months.</li>
                    <li>
                      Uncertain about how to translate data insights into
                      actionable steps.
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="flex justify-center items-center gap-x-4 font-semibold p-10 border-r">
                  <img className="h-24 w-24" src={hootsuite} />
                  Hootsuite
                </td>
                <td className="p-10 border-r">
                  <ul className="ml-8 list-disc list-outside">
                    <li>Clean and organized dashboard.</li>
                    <li>Scheduling and automation.</li>
                  </ul>
                </td>
                <td className="p-10">
                  <ul className="ml-8 list-disc list-outside">
                    <li>Complex interface.</li>
                    <li>
                      Uncertain about how to translate data insights into
                      actionable steps.
                    </li>
                  </ul>
                </td>
              </tr>
            </table>
            </div>
          </div>
        }
      />

      <Section
        background="linear-gradient(148.65deg, rgba(82, 118, 238, 0.2) 4.87%, rgba(196, 113, 237, 0.2) 73.87%, rgba(255, 123, 131, 0.2) 100.67%, rgba(160, 45, 201, 0.2) 108.29%), #FFFFFF"
        content={
          <div className="flex flex-col gap-y-10 relative">
            <img src="/pin.svg" className="h-8 absolute -top-2 -left-8" />
            <h1 className="text-4xl font-semibold">How Might We...</h1>

            <BoldText
              className="text-xl"
              text="How might we design an app with an analytics dashboard that _helps
              users understand their social media engagement_ and _provides
              actionable insights for effectively growing their reach and
              follower base_?"
              parentElement="p"
            />
          </div>
        }
      />

      <Section
        content={
          <div className="flex flex-col gap-y-10 text-xl">
            <h1 className="text-4xl font-semibold">Feature Ideation</h1>
            <p>
              I brainstormed, resulting in combining common features with
              AI-enhanced actionable insights.
            </p>
            <div>
              <div className="relative">
                <h2 className="text-2xl font-semibold mb-2">
                  Actionable Insights Features
                </h2>
                <img
                  src="/crown.svg"
                  className="absolute h-8 -rotate-[25deg] -top-5 -left-4"
                />
              </div>
              <ul className="list-disc list-inside flex flex-col gap-y-1">
                <li>
                  <BoldText text="_Intelligent Search:_ AI crunches numbers for topics you care most about." />
                </li>
                <li>
                  <BoldText text="_Posting Routines:_ Personalized suggestions on recommended posting times." />
                </li>
                <li>
                  <BoldText text="_Competitor Analysis:_ Compare your engagement metrics in comparison with competitors." />
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">
                Basic and Common Features
              </h2>
              <ul className="list-disc list-inside flex flex-col gap-y-1">
                <li>
                  <BoldText text="_Real-time Analytics:_ Show real-time data on likes, comments, shares, and other KPIs." />
                </li>
                <li>
                  <BoldText text="_Content Performance:_ Identify which types of content perform best." />
                </li>
                <li>
                  <BoldText text="_Historical Data:_ Allow users to view and analyze past engagement trends." />
                </li>
                <li>
                  <BoldText text="_Audience Insights:_ Provide demographics and behavior insights about followers." />
                </li>
              </ul>
            </div>
          </div>
        }
      />

      <Section
        background="linear-gradient(148.65deg, rgba(82, 118, 238, 0.2) 4.87%, rgba(196, 113, 237, 0.2) 73.87%, rgba(255, 123, 131, 0.2) 100.67%, rgba(160, 45, 201, 0.2) 108.29%), #FFFFFF"
        content={
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex flex-1 flex-col gap-10 justify-center">
              <GradientText
                text="What types of graphs are _most effective_ for each kind of _data visualization_?"
                gradient="linear-gradient(90deg, #3700FF 0%, #FA00A6 100%)"
                className="text-4xl font-semibold"
                parentElement="h1"
              />
              <BoldText
                text="Social media analytics tools frequently feature numerous graphs, making it essential _to match the right type of data with the appropriate graph to help users analyze information effectively_. Before starting the design process, I used generative AI, specifically ChatGPT, to quickly identify the most effective chart types for different data sets."
                className="text-xl"
                parentElement="p"
              />
            </div>
            <div className="flex-1 md:w-1/2 flex justify-center items-center">
              <img className="w-full object-contain" src={chatgpt} />
            </div>
          </div>
        }
      />

      <Section
        content={
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex-1 flex flex-col gap-10 justify-center">
              <h1 className="text-4xl font-semibold">Sketch</h1>
              <BoldText
                text="I created two sketches on paper. The first sketch is for
                  _brainstorming the general layout_ of the dashboard, while the
                  second sketch _integrates the locations of various features_ into
                  that layout."
                className="text-xl"
                parentElement="p"
              />
            </div>
            <div className="flex-1 md:w-1/2 flex justify-center items-center">
              <img className="w-full object-contain" src={sketch} />
            </div>
          </div>
        }
      />

      <Section
        background="linear-gradient(148.65deg, rgba(82, 118, 238, 0.2) 4.87%, rgba(196, 113, 237, 0.2) 73.87%, rgba(255, 123, 131, 0.2) 100.67%, rgba(160, 45, 201, 0.2) 108.29%), #FFFFFF"
        content={
          <>
            <div>
              <GradientText
                text="Notation: _Social Media Analytics App_"
                gradient="linear-gradient(90deg, #3700FF 0%, #FA00A6 100%)"
                className="text-4xl font-semibold pb-10"
                parentElement="h1"
              />
              <img src={'/social-media-notation.png'} />
            </div>
            <div className="pt-36 flex items-center min-h-screen">
              <div className="flex flex-col gap-y-10">
                <h1 className="text-4xl font-semibold">Prototype</h1>
                <p className="text-xl">
                  Interaction for the user to open the sidebar and view the list
                  of social media accounts associated with their profile.
                </p>
                <img src="/social-media-prototype.png" className="rounded-lg"/>
                <Link
                  target="_blank"
                  to={
                    "https://www.figma.com/proto/r4j9iuiINcPRU81hHSAZVz/Social-Media-Analytics-App_AIYA-Design-Challenge?page-id=0%3A1&node-id=1-996&viewport=447%2C357%2C0.1&t=XHM7lRV5CUOZT7CK-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A996"
                  }
                  className="self-center hover:opacity-80 transition-all py-2 px-6 mb-1 text-lg bg-black rounded-xl text-white whitespace-nowrap flex justify-center items-center w-fit"
                >
                  <img src={figma} alt="" className="h-6" />
                  Figma
                </Link>
              </div>
            </div>
          </>
        }
      />
    </div>
  );
}

export default SocialMedia;
