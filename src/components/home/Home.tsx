import { useEffect, useRef, useState } from "react";
import macbook from "../../assets/macbook.png";
import ipad from "../../assets/ipad.png";
import iphone from "../../assets/iphone.png";
import iphone2 from "../../assets/iphone2.png";
import amazon from "../../assets/amazon.png";
import googlecrm from "../../assets/googlecrm.png";
import { Link } from "react-router-dom";

// Hair prank
import hair from "../../assets/hair.png";

import intoxiblock from "../../assets/intoxiblock/intoxiblock.png";
// import google from "../../assets/google2/google.png";
import googleCloudGif from "../../assets/googleCloudGif.gif";
// import googleCloudGif from "../../assets/googleCloudGif3.gif";
import googleMapsGif from "../../assets/googleMapsGif.gif";

import metlifeGif from "../../assets/metlifeGif.gif";
import intoxiblockGif from "../../assets/intoxiblockGif.gif";

interface Image {
  img: JSX.Element;
  alt: string;
}

interface ExperienceType {
  company: string;
  product: string;
  role: string;
  description: string;
  visuals: Image[];
  link: string;
  results: string[];
  height: string;
  classified?: boolean;
  underConstruction?: boolean;
  backgroundColor: string;
  tagColor: string;
  tags: string[];
  emoji?: any;
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
      company: "Safe and Sober Journey with BAC Testing",
      product: "IntoxiBlock",
      type: "project",
      description:
        "Proposing an app to ensure peoples safe return home after social events involving alcohol consumption.",
      image: intoxiblockGif,
      alt: "A profile page on MetConnect as viewed on an iPad.",
      link: "intoxiblock",
      results: [
        "30% boost in employee engagement.",
        "20% increase in knowledge sharing.",
        "35% improvement in project collaboration.",
      ],
      height: "min-h-[80vh]",
      role: "UX Designer",
      underConstruction: true,
      backgroundColor: "bg-blue-50",
      tagColor: "bg-blue-100",
      tags: ["UX Design", "Internship"],
      emoji: "📌",
    },
    {
      company: "Google",
      product: "Google Cloud",
      type: "project",
      description:
        "Designed alongside Google UX Designers and Researchers to test and validate design concepts and hypotheses of a Google AI-powered CRM application.",
      image: googleCloudGif,
      alt: "A profile page on MetConnect as viewed on an iPad.",
      link: "google2",
      results: [
        "30% boost in employee engagement.",
        "20% increase in knowledge sharing.",
        "35% improvement in project collaboration.",
      ],
      height: "min-h-[80vh]",
      role: "UX Designer",
      underConstruction: true,
      backgroundColor: "bg-blue-50",
      tagColor: "bg-blue-100",
      tags: ["UX Design", "Internship"],
      emoji: "📌",
    },
    {
      company: "Google",
      product: "Google Maps",
      type: "project",
      description:
        "Enhancing Google Maps for streamlined navigation and user-friendly features, optimizing the mapping experience.",
      image: googleMapsGif,
      alt: "",
      link: "google",
      results: [
        "20% faster route planning and navigation.",
        "15% increase in user satisfaction ratings.",
        "30% rise in daily active users.",
      ],
      height: "h-[80vh]",
      role: "UX Designer",
      underConstruction: true,
      backgroundColor: "bg-red-50",
      tagColor: "bg-red-100",
      tags: ["UX Design"],
      emoji: "🚀",
    },
    {
      company: "MetLife",
      product: "MetConnect",
      type: "internship",
      description:
        "Designing a corporate social network prototype for efficient internal communication and collaboration.",
      image: metlifeGif,
      alt: "A profile page on MetConnect as viewed on an iPad.",
      link: "metlife",
      results: [
        "30% boost in employee engagement.",
        "20% increase in knowledge sharing.",
        "35% improvement in project collaboration.",
      ],
      height: "min-h-[80vh]",
      role: "UX Designer",
      underConstruction: true,
      backgroundColor: "bg-blue-50",
      tagColor: "bg-blue-100",
      tags: ["UX Design", "Internship"],
      emoji: "📌",
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
      {/* Fake hair prank */}
      <div className="fixed top-56 right-56 scale-90 opacity-30">
        <img src={hair} alt="" className="" />
      </div>

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
                <span className="block text-red-500">UX Designer</span>
                <span className="block text-green-500">UX Researcher</span>
                <span className="block text-blue-500">Product Designer</span>
                <span className="block text-yellow-500">Product Manager</span>
              </div>
            </div>
          </h1>
          <p className="text-slate-500 text-sm lg:text-xl">
            Masters in Information Science at Cornell University (Expected May
            2024)
          </p>
          <p className="text-slate-500 text-sm lg:text-xl">
            Bachelors in Computer Science at University at Buffalo (Graduated
            May 2023)
          </p>
          <p className="text-slate-500 text-sm lg:text-xl">
            Previously MetLife, SpeakHire, MemoryFox
          </p>
        </div>

        <div
          className="absolute w-auto bottom-20 animate-bounce text-xs lg:text-base hover:cursor-pointer"
          onClick={handleScroll}
        >
          Selected Work &#8595;
        </div>
      </div>

      <div className="bg-gradient-to-b from-white to-slate-100 h-60"></div>

      <div ref={selectedProjects}>
        <h1 className="text-4xl pt-24 font-semibold text-center bg-slate-100">
          Selected Work
        </h1>

        <div className="flex flex-wrap py-24 pb-24 bg-slate-100 justify-center gap-24">
          {experience.map((entry, index) => (
            <Link
              to={entry.link}
              className="
          lg:w-[550px] lg:h-[500px] 
          md:w-[450px] md:h-[400px]
          w-[330px] h-[280px]
          border border-1 bg-white rounded-xl
          hover:shadow-2xl
          hover:cursor-pointer
          transition-all
          hover:underline hover:opacity-50
          "
            >
              <img
                key={index}
                src={entry.image}
                className="h-2/3 w-full p-8 object-scale-down"
              />
              <div className="p-8 border-t">
                <h1 className="text-sm font-semibold pb-2 tracking-wider">
                  {entry.product.toUpperCase() + " | "}
                  <span className="text-xs">{entry.type.toUpperCase()}</span>
                </h1>
                <h1 className="">{entry.description}</h1>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-b from-slate-100 to-white h-36"></div>
    </div>
  );
}

export default Home;
