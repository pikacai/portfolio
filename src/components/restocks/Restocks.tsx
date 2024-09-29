import intro from "../../assets/restocks/intro.png";
import backgroundBefore from "../../assets/restocks/background-before.png";
import backgroundFlow from "../../assets/restocks/background-flow.png";
import resultBefore from "../../assets/restocks/result-before.png";
import resultAfter from "../../assets/restocks/result-after.png";
import personaMother from "../../assets/restocks/persona-mother.png";
import quote from "../../assets/restocks/quote.png";
import groupon from "../../assets/restocks/competitive-analysis-groupon.png";
import slickdeals from "../../assets/restocks/competitive-analysis-slickdeals.png";
import dealmoon from "../../assets/restocks/competitive-analysis-dealmoon.png";
import flowchart from "../../assets/restocks/flowchart.png";
import decisioning from "../../assets/restocks/data-based-decisioning.png";
import lowFidelity from "../../assets/restocks/low-fidelity.png";
import affinityMapping from "../../assets/restocks/affinity-mapping.png";
import highFidelity from "../../assets/restocks/high-fidelity.png";
import aiParsing from "../../assets/restocks/ai-parsing.png";
import fasterDealFilling from "../../assets/restocks/faster-deal-filling.png";
import spaceEfficiency from "../../assets/restocks/space-efficiency.png";
import perfectBalance from "../../assets/restocks/perfect-balance.png";
import font from "../../assets/restocks/branding-design-font.png";
import colors from "../../assets/restocks/branding-design-colors.png";
import lessonsLearned from "../../assets/restocks/lessons-learned.png";
import FastClock from "../../assets/restocks/fast-clock.svg";
import Buildings from "../../assets/restocks/buildings.svg";
import People from "../../assets/restocks/people.svg";


// Brand Icons
import figma from "../../assets/brandIcons/figma.svg";

import { useEffect, useRef, useState } from "react";
import CenteredContentWider from "../intoxiblock/CenteredContentWider";
import { Link } from "react-router-dom";
import GradientText from "../utilities/GradientText";
import BoldText from "../utilities/BoldText";
import Section from "../utilities/Section";
import NumberIncreaser from "../intoxiblock/IntersectionObserver/NumberIncreaser";

function Restocks() {
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

      // @ts-ignore
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
      <img src={intro} />
      <CenteredContentWider
        content={
          <div className="flex items-start justify-center text-center text-xl leading-relaxed">
            <div className="flex-1">
              <p className="font-semibold pb-4 underline underline-offset-2">
                Role
              </p>
              <p>UX Designer</p>
            </div>
            <div className="flex-1">
              <p className="font-semibold pb-4 underline underline-offset-2">
                Duration
              </p>
              <p>9 months</p>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <p className="font-semibold pb-4 underline underline-offset-2">
                Slides
              </p>
              <Link
                target="_blank"
                to={
                  "https://www.figma.com/slides/kuwxK5D4aaFYnAvI03ZXYm/Lord-Of-Savings-Slides?node-id=33-1771&t=7LRYmsN1AsFQoSN8-1"
                }
                className="hover:opacity-80 transition-all py-2 px-6 mb-1 text-lg bg-black rounded-xl text-white whitespace-nowrap flex justify-center items-center"
              >
                <img src={figma} alt="" className="h-6" />
                Figma Slides
              </Link>
            </div>
          </div>
        }
      />
      <CenteredContentWider
        content={
          <>
            <GradientText
              text="_Background_"
              className="text-4xl font-semibold pb-10 text-center"
              gradient="linear-gradient(90deg, #016FFF 0%, #01A2FF 100%)"
              parentElement="h1"
            />
            <div className="flex flex-wrap items-center sm:flex-nowrap gap-10 pb-12z">
              <div className="flex-1 flex flex-col gap-y-10 text-lg">
                <BoldText
                  text="_Lord of Savings is community-driven_ website focused on _sharing and 
            finding_ the best _deals_ and discounts on a wide range of products and services."
                  className="leading-relaxed"
                  parentElement="p"
                />
                <BoldText
                  text="Users post and share deals they find _online or in stores_, and 
            the _community votes_ on the quality and value of these deals."
                  className="leading-relaxed"
                  parentElement="p"
                />
                <BoldText
                  text="When I joined the team, the product had significant room for 
            improvement in both UX and UI. I started by redesigning the entire _end-to-end_ 
            experience across _mobile, tablet, and website platforms_. This included conducting 
            usability testing and adding new features. Our product is now in its third iteration."
                  className="leading-relaxed"
                  parentElement="p"
                />
              </div>
              <div className="w-full flex justify-center sm:w-[50%] relative">
                <img
                  src={backgroundBefore}
                  className="object-contain w-1/2 sm:w-full"
                />
              </div>
            </div>

            <img src={backgroundFlow} />
          </>
        }
      />

      <Section
        background="linear-gradient(90deg, #05AAFF 0%, #2567FF 100%)"
        content={
          <div className="flex justify-center gap-x-4 sm:gap-x-10 xl:gap-x-16 items-center transition-all">
            <img
              src={resultBefore}
              className="flex-1 w-[150px] md:w-[200px] lg:w-[400px] object-contain"
            />
            <span className="text-3xl md:text-4xl lg:text-6xl text-white">
              &rarr;
            </span>
            <img
              src={resultAfter}
              className="flex-1 w-[150px] md:w-[200px] lg:w-[400px] object-contain"
            />
          </div>
        }
      />

      <CenteredContentWider
        content={
          <div className="pb-16">
            <GradientText
              text="_Persona_"
              className="text-4xl font-semibold pb-10 text-center pt-36"
              gradient="linear-gradient(90deg, #016FFF 0%, #01A2FF 100%)"
              parentElement="h1"
            />
            <div className="pb-8 flex flex-col md:flex-row items-center gap-16 transition-all">
              <div className="flex flex-col gap-y-2 items-center w-full sm:w-[20%]">
                <img src={personaMother} className="w-[150px] object-contain" />
                <BoldText text="_Emily Thompson_" parentElement="p" />
                <p className="px-4 py-2 text-sm rounded-xl bg-blue-500 text-white whitespace-nowrap">
                  32-year-old Working Mother
                </p>
              </div>
              <div className="w-full sm:w-[80%]">
                <GradientText
                  text="_Background_"
                  className="text-2xl font-semibold pb-5"
                  gradient="linear-gradient(90deg, #016FFF 0%, #01A2FF 100%)"
                  parentElement="h1"
                />
                <GradientText
                  text="Emily is a busy working mom who manages her household on a budget. 
                        She loves finding great deals on products to _save money_ for her 
                        family's needs and occasional splurges. With her two kids growing fast, 
                        Emily is always on the lookout for discounts on clothing, school supplies, 
                        and entertainment activities for her family."
                  className="text-xl leading-relaxed pb-10"
                  gradient="linear-gradient(90deg, #016FFF 0%, #01A2FF 100%)"
                  parentElement="p"
                />
              </div>
            </div>
            <div className="pb-10">
              <GradientText
                text="_Challenges_"
                className="text-2xl font-semibold pb-5"
                gradient="linear-gradient(90deg, #016FFF 0%, #01A2FF 100%)"
                parentElement="h1"
              />
              <ul className="list-disc list-inside pb-10 pl-8">
                <BoldText
                  text="_Limited time to search_ for deals due to work and family responsibilities."
                  className="text-xl leading-relaxed"
                  parentElement="li"
                />
                <BoldText
                  text="_Overwhelmed_ by the sheer number of _options available online_."
                  className="text-xl leading-relaxed"
                  parentElement="li"
                />
                <li className="text-xl leading-relaxed">
                  <BoldText text="Needs to ensure the deals she finds are actually _good quality and _" />
                  <GradientText
                    gradient="linear-gradient(90deg, #016FFF 0%, #01A2FF 100%)"
                    className="font-semibold"
                    text="_trustworthy_"
                    parentElement="span"
                  />
                </li>
              </ul>
              <div className="flex gap-x-1 relative mt-10 px-12">
                <img src={quote} className="h-16 absolute -top-12 -left-2" />
                <BoldText
                  text="The community is so helpful! It's like having a group of friends who always know where to find the best prices. However, there are a few features that could be improved to make the experience even better."
                  className="text-xl leading-relaxed italic"
                  parentElement="p"
                />
                <img
                  src={quote}
                  className="h-16 absolute -top-12 -right-0 transform scale-x-[-1]"
                />
              </div>
            </div>
          </div>
        }
      />
      <CenteredContentWider
        content={
          <div className="pb-16">
            <GradientText
              text="_Competitive Analysis_"
              className="text-4xl font-semibold pb-10 text-center"
              gradient="linear-gradient(90deg, #016FFF 0%, #01A2FF 100%)"
              parentElement="h1"
            />
            <p className="pb-10 text-xl leading-relaxed">
              Conducted a competitive analysis to better understand current
              trends, strengths, and weaknesses in social shopping communities
              and e-commerce advisory platforms, focusing on Groupon, SlideDeal,
              and DealMoon.
            </p>
            <div className="flex flex-col md:flex-row gap-14">
              <div className="flex-1">
                <div className="flex justify-center h-fit">
                  <img
                    src={groupon}
                    className="mb-4 aspect-square object-contain max-h-[280px] p-2 rounded-xl border"
                  />
                </div>
                <BoldText
                  text="_Groupon_ focuses on location-based deals but lacks community features like user interactions, forums, or social sharing."
                  className="text-xl leading-relaxed text-center"
                  parentElement="p"
                />
              </div>
              <div className="flex-1 flex-col">
                <div className="flex justify-center h-fit">
                  <img
                    src={slickdeals}
                    className="mb-4 aspect-square object-contain max-h-[280px] p-2 rounded-xl border"
                  />
                </div>
                <BoldText
                  text="_Slickdeals_ has well-developed features but could benefit from an improved UI."
                  className="text-xl leading-relaxed text-center"
                  parentElement="p"
                />
              </div>
              <div className="flex-1 flex-col">
                <div className="flex justify-center h-fit">
                  <img
                    src={dealmoon}
                    className="mb-4 aspect-square object-contain max-h-[280px] p-2 rounded-xl border"
                  />
                </div>
                <BoldText
                  text="_Moondeal's_ UI is well-designed, resembling Xiaohongshu with a social media-inspired layout, enhanced community features, and varied deal formats."
                  className="text-xl leading-relaxed text-center"
                  parentElement="p"
                />
              </div>
            </div>
          </div>
        }
      />
      <CenteredContentWider
        content={
          <div className="pb-16">
            <GradientText
              text="_Flowchart_"
              className="text-4xl font-semibold pb-10 text-center"
              gradient="linear-gradient(90deg, #016FFF 0%, #01A2FF 100%)"
              parentElement="h1"
            />
            <div className="pb-20">
              <p className="text-xl leading-relaxed">
                Created the product framework and logic helps developers better
                understand the product architecture, clarify page hierarchies,
                and assess interaction logic.
              </p>
            </div>
            <img src={flowchart} />
          </div>
        }
      />

      <CenteredContentWider
        content={
          <div className="pb-16">
            <GradientText
              text="_Low Fidelity_"
              className="text-4xl font-semibold pb-10 text-center"
              gradient="linear-gradient(90deg, #016FFF 0%, #01A2FF 100%)"
              parentElement="h1"
            />
            <img src={lowFidelity} />
          </div>
        }
      />

      <CenteredContentWider
        content={
          <div className="pb-16">
            <GradientText
              text="_Branding Design_"
              className="text-4xl font-semibold pb-10 text-center"
              gradient="linear-gradient(90deg, #016FFF 0%, #01A2FF 100%)"
              parentElement="h1"
            />
            <GradientText
              text="Building Trust with _Font_"
              className="text-2xl font-semibold pb-10"
              gradient="linear-gradient(90deg, #016FFF 0%, #01A2FF 100%)"
              parentElement="h1"
            />
            <img src={font} className="pb-20" />
            <div className="flex flex-wrap sm:flex-nowrap gap-x-12">
              <div className="w-full sm:w-1/2">
                <GradientText
                  text="Building Trust with _Colors_"
                  className="text-2xl font-semibold pb-10"
                  gradient="linear-gradient(90deg, #016FFF 0%, #01A2FF 100%)"
                  parentElement="h1"
                />
                <p className="text-xl leading-relaxed pb-10">
                  Based on user feedback, I selected blue as the primary color
                  to convey a sense of reliability and trust in our deals.
                  Additionally, transition colors are incorporated to enhance
                  the visual appeal of the UI.
                </p>
              </div>
              <img src={colors} className="w-full sm:w-1/2 object-contain" />
            </div>
          </div>
        }
      />

      <CenteredContentWider
        content={
          <div className="pb-16">
            <GradientText
              text="_Making Design Decision Based on Data_"
              className="text-4xl font-semibold pb-10 text-center"
              gradient="linear-gradient(90deg, #016FFF 0%, #01A2FF 100%)"
              parentElement="h1"
            />
            <p className="pb-10 text-xl leading-relaxed">
              I based many design decisions on insights from Google Analytics.
              For example, after discovering that we had more mobile users than
              web users, I shifted the design focus from the website to the
              mobile app. I also prioritized quick links based on the most
              viewed pages, such as the brands and lightning deals pages.
              Additionally, I conducted A/B testing on two button designs to
              determine which had a higher click-through rate.
            </p>
            <img src={decisioning} />
            <p className="text-xl leading-relaxed pt-28 pb-10">
              In addition to making design decisions based on user feedback and
              needs, I utilized Affinity Mapping to analyze feedback from
              usability testing and surveys.
            </p>
            <img src={affinityMapping} />
          </div>
        }
      />

      <CenteredContentWider
        content={
          <div className="pb-16">
            <GradientText
              text="_AI_ Parsing Information"
              className="text-4xl font-semibold pb-10 text-center"
              gradient="linear-gradient(90deg, #016FFF 0%, #01A2FF 100%)"
              parentElement="h1"
            />
            <img src={aiParsing} className="pb-10" />
            <p className="text-xl leading-relaxed pb-10">
              Leveraged AI to gather data from retailer deal pages and
              automatically parse the information into our deal post page.
            </p>
            <img src={fasterDealFilling} />
          </div>
        }
      />

      <CenteredContentWider
        content={
          <div className="pb-16">
            <GradientText
              text="_Space Efficiency_"
              className="text-4xl font-semibold pb-10 text-center"
              gradient="linear-gradient(90deg, #016FFF 0%, #01A2FF 100%)"
              parentElement="h1"
            />
            <BoldText
              text="The _waterfall flow_ layout effectively utilises screen space, making the content more compact."
              className="text-xl leading-relaxed"
              parentElement="p"
            />
            <img src={spaceEfficiency} />
          </div>
        }
      />

      <CenteredContentWider
        content={
          <div className="pb-16">
            <GradientText
              text="_Find the Perfect Balance for Everything_"
              className="text-4xl font-semibold pb-10 text-center"
              gradient="linear-gradient(90deg, #016FFF 0%, #01A2FF 100%)"
              parentElement="h1"
            />
            <p className="text-xl leading-relaxed">
              It's important to have an attractive UI to highlight lightning
              deals, but it should not distract too much from the actual deal
              content.
            </p>
            <img src={perfectBalance} />
          </div>
        }
      />

      <CenteredContentWider
        content={
          <div className="pb-16">
            <GradientText
              text="_Impact_"
              className="text-4xl font-semibold pb-10 text-center"
              gradient="linear-gradient(90deg, #016FFF 0%, #01A2FF 100%)"
              parentElement="h1"
            />
            <div className="flex flex-wrap gap-8 justify-between">
              <div className="flex-1 bg-[#027DFF] bg-opacity-[0.08] rounded-xl relative p-8 py-10 pr-20">
                <div className="bg-white p-2 rounded-bl-xl absolute h-16 w-16 right-0 top-0">
                  <img src={Buildings} className="object-contain p-2 rounded-xl" style={{background: 'linear-gradient(172.04deg, #05AAFF 28.95%, #2567FF 93.3%)'}}/>
                </div>
                <p className="text-4xl font-semibold pb-2 text-blue-500">
                  <NumberIncreaser target={136} duration={900} textAfter="" />
                </p>
                <BoldText
                  text="Partner Companies"
                  className="text-lg"
                  parentElement="p"
                />
              </div>

              <div className="flex-1 bg-[#027DFF] bg-opacity-[0.08] rounded-xl relative p-8 py-10">
                <div className="bg-white p-2 rounded-bl-xl absolute h-16 w-16 right-0 top-0">
                  <img src={FastClock} className="object-contain p-2 rounded-xl" style={{background: 'linear-gradient(172.04deg, #05AAFF 28.95%, #2567FF 93.3%)'}}/>
                </div>
                <p className="text-4xl font-semibold pb-2 text-blue-500 pr-20">
                  <NumberIncreaser
                    target={83.33}
                    duration={900}
                    textAfter="%"
                  />
                </p>
                <div className="flex justify-center">
                  <BoldText
                    text="Reduced average time spending on filling a deal"
                    className="text-lg"
                    parentElement="p"
                  />
                </div>
              </div>

              <div className="flex-1 bg-[#027DFF] bg-opacity-[0.08] rounded-xl relative p-8 py-10 pr-20">
                <div className="bg-white p-2 rounded-bl-xl absolute h-16 w-16 right-0 top-0">
                  <img src={People} className="object-contain p-2 rounded-xl" style={{background: 'linear-gradient(172.04deg, #05AAFF 28.95%, #2567FF 93.3%)'}}/>
                </div>
                <p className="text-4xl font-semibold pb-2 text-blue-500">
                <NumberIncreaser target={365000} duration={750} textAfter="+" />

                </p>
                <BoldText
                  text="Potential Users"
                  className="text-lg"
                  parentElement="p"
                />
              </div>
            </div>
          </div>
        }
      />

      <CenteredContentWider
        content={
          <div className="pb-16">
            <GradientText
              text="_Final Design_"
              className="text-4xl font-semibold pb-10 text-center"
              gradient="linear-gradient(90deg, #016FFF 0%, #01A2FF 100%)"
              parentElement="h1"
            />
            <img src={highFidelity} />
          </div>
        }
      />

      <CenteredContentWider
        content={
          <div className="pb-16">
            <GradientText
              text="_Lessons Learned_"
              className="text-4xl font-semibold pb-10 text-center"
              gradient="linear-gradient(90deg, #016FFF 0%, #01A2FF 100%)"
              parentElement="h1"
            />
            <div className="flex gap-8 items-center">
              <img src={lessonsLearned} className="h-[200px]" />
              <ul className="list-disc list-inside text-xl leading-loose">
                <BoldText
                  text="_We are NOT the users_, especially when I'm the sole designer."
                  parentElement="li"
                />
                <BoldText
                  text="_Design is like coding_; it always needs to account for all edge cases."
                  parentElement="li"
                />
                <BoldText
                  text="_Design never reaches perfection_, as trends and requirements are constantly evolving."
                  parentElement="li"
                />
              </ul>
            </div>
          </div>
        }
      />

      <CenteredContentWider
        content={
          <div className="pb-16">
            <GradientText
              text="_Next Steps_"
              className="text-4xl font-semibold pb-10 text-center"
              gradient="linear-gradient(90deg, #016FFF 0%, #01A2FF 100%)"
              parentElement="h1"
            />
            <ul className="list-disc list-outside text-xl leading-relaxed">
              <BoldText
                text="Incorporate additional _design trends_, such as _gamification_, to boost user engagement with our platform. This could include rewarding users for sharing impactful deals and implementing a ranking system for the most-viewed deals, among other features."
                parentElement="li"
                className="pb-5"
              />
              <BoldText
                text="Conduct _usability testing_. With the app now launched, I'll perform usability testing and distribute a survey to gather user feedback for further enhancements."
                parentElement="li"
              />
            </ul>
          </div>
        }
      />
    </div>
  );
}

export default Restocks;
