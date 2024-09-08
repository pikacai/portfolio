import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import googleCloudGif from "../../assets/googleCloudGif.gif";
import googleMapsGif from "../../assets/googleMapsGif.gif";
import intoxiblockGif from "../../assets/intoxiblockGif.gif";
import Section from "../utilities/Section";
import { SchoolOutlined, WorkOutlineRounded } from "@mui/icons-material";
import Text from "../utilities/Text";
import GradientText from "../utilities/GradientText";
import ScaleIn from "../utilities/ScaleIn";

interface Image {
  img: JSX.Element;
  alt: string;
}

function Home() {
  // Used to create balls in the home-screen
  let ballsContainer = document.createElement("div");

  // As soon as page loads create balls
  useEffect(() => {
    // Some random colors
    const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

    const numBalls = 20;
    const balls = [];

    ballsContainer.id = "balls";
    ballsContainer.style.width = '100vw'

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
      <div className="h-screen w-screen flex justify-center items-center relative">
        <div>
          <h1 className="text-4xl lg:text-6xl font-medium flex gap-5">
            <span ref={ref} className="h-fit leading-[normal]">
              Pika Cai
            </span>
            <div className="overflow-hidden">
              <div
                className="transition-all leading-[normal] h-[43px] lg:h-[60px]"
                style={{ transform: `translate(0, -${translate}px)` }}
              >
                <span className="block text-red-500">UX Product Designer</span>
                <span className="block text-green-500">UX Researcher</span>
                <span className="block text-blue-500">Product Designer</span>
                <span className="block text-yellow-500">Product Manager</span>
              </div>
            </div>
          </h1>
          <p className="text-slate-500 text-sm lg:text-xl">
            Graduated Masters in Information Science '24 at Cornell University
          </p>
          <p className="text-slate-500 text-sm lg:text-xl">
          Graduated Bachelors in Computer Science '23 at University at Buffalo 
          </p>
          <p className="text-slate-500 text-sm lg:text-xl">
            Previously MetLife, SpeakHire, MemoryFox
          </p>
        </div>

        <div
          className="absolute w-auto bottom-20 animate-bounce text-xs lg:text-base hover:cursor-pointer"
          onClick={handleScroll}
        >
          Selected Works &#8595;
        </div>
      </div>

      <div className="bg-gradient-to-b from-white to-slate-50 h-60"></div>

      <div ref={selectedProjects} className="bg-slate-50">
        <Text className="pt-10 text-center font-semibold" parentElement="h1">
          Selected Works
        </Text>

        <div className="pt-10 pb-24 sm:py-24 flex justify-center">
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
                    <span className="text-xs">{entry.type.toUpperCase()}</span>
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
                  <h1 className="group-hover:underline">{entry.description}</h1>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-slate-50 to-white h-56"></div>
    </div>
  );
}

export default Home;
