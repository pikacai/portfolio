import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import googleCloudGif from "../../assets/googleCloudGif.gif";
import googleMapsGif from "../../assets/googleMapsGif.gif";
import intoxiblockGif from "../../assets/intoxiblockGif.gif";
import restocksGif from "../../assets/restocks/restocksGif.gif";
import Section from "../utilities/Section";
import { SchoolOutlined, WorkOutlineRounded } from "@mui/icons-material";
import Text from "../utilities/Text";
import GradientText from "../utilities/GradientText";
import ScaleIn from "../utilities/ScaleIn";
import smile from "../../assets/lottieFiles/smile.json";

import map from "../../assets/home/map.svg";
import crm from "../../assets/home/crm.svg";
import car from "../../assets/home/car.svg";
import bag from "../../assets/home/bag.svg";
import apple from "../../assets/home/apple.svg";
import ai from "../../assets/home/ai.svg";
import { FlipWords } from "../ui/flip-words";
import LottieAnimation from "../utilities/LottieAnimation";

interface Image {
  img: JSX.Element;
  alt: string;
}

function Home() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  // Used to create balls in the home-screen
  let ballsContainer = document.createElement("div");

  // As soon as page loads create balls
  useEffect(() => {
    // Some random colors
    const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

    const numBalls = 20;
    const balls = [];

    ballsContainer.id = "balls";
    ballsContainer.style.width = "100vw";

    for (let i = 0; i < numBalls; i++) {
      let ball = document.createElement("div");
      ball.classList.add("absolute");
      ball.classList.add("rounded-full");
      ball.classList.add("opacity-20");

      ball.style.zIndex = "-1";
      ball.style.background = colors[Math.floor(Math.random() * colors.length)];
      ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
      ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
      ball.style.transform = `scale(${Math.random()})`;
      ball.style.width = `${Math.random()}em`;
      ball.style.height = ball.style.width;

      balls.push(ball);
      ballsContainer.appendChild(ball);
    }

    // Keyframes
    balls.forEach((el, i, ra) => {
      let to = {
        x: Math.random() * (i % 2 === 0 ? -11 : 11),
        y: Math.random() * 12,
      };

      let anim = el.animate(
        [
          { transform: "translate(0, 0)" },
          { transform: `translate(${to.x}rem, ${to.y}rem)` },
        ],
        {
          duration: (Math.random() + 1) * 2000, // random duration
          direction: "alternate",
          fill: "both",
          iterations: Infinity,
          easing: "ease-in-out",
        }
      );
    });

    document.body.append(ballsContainer);

    // As soon as the page changes url, remove the balls
    return () => {
      ballsContainer.remove();
    };
  }, []);

  // Used to change cycle between UX Designer, Product Designer, Project Manager
  const [translate, setTranslate] = useState<number>(0);
  let intervalId: number;
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // @ts-ignore
    intervalId = setInterval(() => {
      setTranslate((translate) => {
        if (
          translate === (ref.current?.offsetHeight as number) * 3 ||
          translate > (ref.current?.offsetHeight as number) * 3
        ) {
          return 0;
        } else {
          return translate + (ref.current?.offsetHeight as number);
        }
      });
    }, 1500);
    return () => clearInterval(intervalId);
  }, []);

  // Used to render the projects
  const experience = [
    {
      product: "Restocks",
      type: "full-time",
      tags: [
        <span className="flex items-center gap-x-2 no-underline text-sm p-[6px] bg-[#CEFFD8] text-[#00B852] font-semibold rounded-full w-fit pr-2">
          <img src={bag} className="h-6 w-6 bg-[#00B852] rounded-full p-1" />
          E-Commerce
        </span>,
        <span
          style={{
            background:
              "linear-gradient(89.19deg, rgba(13, 140, 255, 0.2) 0.7%, rgba(80, 216, 253, 0.2) 33.24%, rgba(212, 154, 238, 0.2) 62.33%, rgba(252, 150, 103, 0.2) 99.31%)",
          }}
          className="flex items-center gap-x-2 no-underline text-sm p-[6px] bg-[#CEFFD8] text-[#00B852] font-semibold rounded-full w-fit pr-2"
        >
          <img
            style={{
              background:
                "linear-gradient(89.19deg, #0D8CFF 0.7%, #50D8FD 33.24%, #D49AEE 62.33%, #FC9667 99.31%)",
            }}
            src={ai}
            className="h-6 w-6 bg-[#00B852] rounded-full p-1"
          />
          <GradientText
            gradient="linear-gradient(89.19deg, #0D8CFF 0.7%, #00B3E4 31.51%, #AF16F4 62.33%, #FF7535 99.31%)"
            text="_AI Parsing_"
            parentElement="span"
          />
        </span>,
      ],
      description:
        "Leading design for e-commerce platform identifying deals for 300K+ users.",
      image: restocksGif,
      alt: "A profile page on MetConnect as viewed on an iPad.",
      link: "restocks",
    },
    {
      product: "Google Cloud",
      type: "internship",
      tags: [
        <span className="flex items-center gap-x-2 no-underline text-sm p-[6px] bg-[#E94236] bg-opacity-20 text-[#E94236] font-semibold rounded-full w-fit pr-2">
          <img src={crm} className="h-6 w-6 bg-[#E94236] rounded-full p-1" />
          CRM
        </span>,
        <span
          style={{
            background:
              "linear-gradient(89.19deg, rgba(13, 140, 255, 0.2) 0.7%, rgba(80, 216, 253, 0.2) 33.24%, rgba(212, 154, 238, 0.2) 62.33%, rgba(252, 150, 103, 0.2) 99.31%)",
          }}
          className="flex items-center gap-x-2 no-underline text-sm p-[6px] bg-[#CEFFD8] text-[#00B852] font-semibold rounded-full w-fit pr-2"
        >
          <img
            style={{
              background:
                "linear-gradient(89.19deg, #0D8CFF 0.7%, #50D8FD 33.24%, #D49AEE 62.33%, #FC9667 99.31%)",
            }}
            src={ai}
            className="h-6 w-6 bg-[#00B852] rounded-full p-1"
          />
          <GradientText
            gradient="linear-gradient(89.19deg, #0D8CFF 0.7%, #00B3E4 31.51%, #AF16F4 62.33%, #FF7535 99.31%)"
            text="_AI Recommendation_"
            parentElement="span"
          />
        </span>,
      ],
      description:
        "Designed alongside Google UX Designers and Researchers to test and validate design concepts and hypotheses of a Google AI-powered CRM application.",
      image: googleCloudGif,
      alt: "A profile page on MetConnect as viewed on an iPad.",
      link: "google2",
    },
    {
      product: "IntoxiBlock",
      type: "project",
      tags: [
        <span className="flex items-center gap-x-2 no-underline text-sm p-[6px] bg-[#0D6EFD] bg-opacity-20 text-[#0D6EFD] font-semibold rounded-full w-fit pr-2">
          <img src={car} className="h-6 w-6 bg-[#0D6EFD] rounded-full p-1" />
          Vehicle Safety
        </span>,
        <span className="flex items-center gap-x-2 no-underline text-sm p-[6px] bg-[#2E2E2E] bg-opacity-20 text-[#2E2E2E] font-semibold rounded-full w-fit pr-2">
          <img
            src={apple}
            className="h-6 w-6 bg-[#2E2E2E] rounded-full p-[5px]"
          />
          IOS
        </span>,
      ],
      description:
        "Designed an app to ensure peoples safe return home after social events involving alcohol consumption.",
      image: intoxiblockGif,
      alt: "A profile page on MetConnect as viewed on an iPad.",
      link: "intoxiblock",
    },
    {
      product: "Google Maps",
      type: "project",
      tags: [
        <span className="flex items-center gap-x-2 no-underline text-sm p-[6px] bg-[#9747FF] bg-opacity-20 text-[#9747FF] font-semibold rounded-full w-fit pr-2">
          <img src={map} className="h-6 w-6 bg-[#9747FF] rounded-full p-1" />
          Navigation
        </span>,
      ],
      description:
        "Redsigned and enhanced Google Maps for streamlined navigation and user-friendly features, optimizing the mapping experience.",
      image: googleMapsGif,
      alt: "",
      link: "google",
    },
  ];

  const selectedProjects = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    window.scroll({
      top: selectedProjects?.current?.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="py-36 flex w-full justify-center relative">
        <div className="w-[90%] xl:w-4/6">
          <h1 className="text-3xl lg:text-4xl font-medium flex gap-5">
            <span ref={ref} className="h-fit leading-relaxed">
              Make the user happy
            </span>
            <LottieAnimation
              src={smile}
              className="w-[4rem] h-[4rem] hover:scale-110 transition-all"
            />
          </h1>
          <p className="text-slate-500 text-xl lg:text-2xl flex">
            <span>Design</span>
            <FlipWords
              className="pr-[2px] text-slate-500"
              duration={1000}
              words={[
                "with AI",
                "with Fun",
                "with Simplicity",
                "for Minimalism",
                "in AR",
                "in 3D",
                "in line with New Trends",
              ]}
            />
          </p>
        </div>

        {/* <div
          className="absolute w-auto bottom-20 animate-bounce text-xs lg:text-base hover:cursor-pointer"
          onClick={handleScroll}
        >
          Selected Works &#8595;
          <GradientText gradient="linear-gradient(90deg, #016FFF 0%, #01A2FF 100%)" text="_Selected Works &#8595;_" className="pt-10 text-center font-semibold" parentElement="h1" />
        </div> */}
      </div>

      {/* <div className="bg-gradient-to-b from-white to-slate-50 h-8"></div> */}

      <div
        ref={selectedProjects}
        // className="bg-slate-50"
      >
        <div className="pb-24 flex flex-col items-center justify-center">
          {/* <GradientText
            gradient="linear-gradient(90deg, #016FFF 0%, #01A2FF 100%)"
            text="_Selected Works"
            className="text-4xl text-center pb-24 font-medium"
            parentElement="h1"
          /> */}
          <div
            className="animate-bounce text-xs lg:text-base hover:cursor-pointer"
            onClick={handleScroll}
          >
            {/* Selected Works &#8595; */}
            <GradientText
              gradient="linear-gradient(89.19deg, #0D8CFF 0.7%, #00B3E4 31.51%, #AF16F4 62.33%, #FF7535 99.31%)"
              text="_Selected Works &#8595;_"
              className="pb-10 text-center font-semibold"
              parentElement="h1"
            />
          </div>
          <div className="w-[90%] xl:w-4/6 grid grid-cols-1 md:grid-cols-2 gap-4 justify-center">
            {experience.map((entry, index) => (
              <Link
                to={entry.link}
                key={index}
                className={`
                h-[460px] sm:h-[550px]
                group
                w-full
                border border-1 rounded-xl
                shadow-md
                hover:shadow-2xl
                hover:cursor-pointer
                transition-all
                flex flex-col
                ${
                  hoveredIndex !== null && hoveredIndex !== index
                    ? "opacity-50 bg-gray-50"
                    : "opacity-100 bg-white"
                }
                `}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={entry.image}
                  className="h-64 sm:h-2/4 p-8 object-scale-down"
                />
                <div className="p-8 border-t flex flex-col gap-y-2">
                  <h1 className="group-hover:underline text-lg lg:text-xl flex items-center gap-x-1 font-semibold tracking-wider">
                    {entry.product.toUpperCase() + " | "}
                    <span className="text-xs">{entry.type.toUpperCase()}</span>
                  </h1>
                  <div className="flex gap-x-4">
                    {entry.tags.map((entry_, index_) => entry_)}
                  </div>
                  <h1 className="group-hover:underline text-base lg:text-lg">
                    {entry.description}
                  </h1>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* <div className="bg-gradient-to-b from-slate-50 to-white h-56"></div> */}
    </div>
  );
}

export default Home;
