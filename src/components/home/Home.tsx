import { useEffect, useRef, useState } from "react";
import macbook from "../../assets/macbook.png";
import ipad from "../../assets/ipad.png";
import iphone from "../../assets/iphone.png";
import iphone2 from "../../assets/iphone2.png";
import amazon from "../../assets/amazon.png";
import googlecrm from "../../assets/googlecrm.png";
import { Link } from "react-router-dom";

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
  emoji?: any,
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
  const experience: ExperienceType[] = [
    // {
    //   company: "Google",
    //   product: "Google CRM",
    //   description:
    //     "Conducting user research to enhance Google's CRM system for improved usability and customer satisfaction.",
    //   visuals: [
    //     {
    //       img: (
    //         <img
    //           className="max-h-full max-w-full object-scale-down"
    //           src={googlecrm}
    //           alt=""
    //         />
    //       ),
    //       alt: "Mockup of Google Maps on a phone.",
    //     },
    //   ],
    //   link: "google",
    //   results: [
    //     "10% increase in CRM user engagement.",
    //     "5% reduction in CRM support requests.",
    //     "15% rise in user satisfaction with CRM functionality.",
    //   ],
    //   height: "h-[80vh]",
    //   classified: true,
    //   role: "Product Design Intern",
    // },
    {
      company: "Google",
      product: "Google Maps",
      description:
        "Enhancing Google Maps for streamlined navigation and user-friendly features, optimizing the mapping experience.",
      visuals: [
        {
          img: (
            <>
              <img className="h-full" src={iphone} alt="" />
              <img className="h-full" src={iphone2} alt="" />
            </>
            // <div className={'h-full'}>
            //   <img
            //     className=""
            //     src={iphone}
            //     alt=""
            //   />
            //   <img
            //     className=""
            //     src={iphone}
            //     alt=""
            //   />
            // </div>
          ),
          alt: "Mockup of Google Maps on a phone.",
        },
      ],
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
      emoji: '🚀',
    },
    {
      company: "The Haitian American Musuem",
      product: "Website Redesign",
      description:
        "Revamping a museum website for an enhanced visitor experience and improved accessibility.",
      visuals: [
        {
          img: (
            <img
              className="max-h-full max-w-full object-scale-down"
              src={ipad}
              alt=""
            />
          ),
          alt: "Design of The Haitian American Musuem Website with annotations.",
        },
      ],
      link: "hamoc",
      results: [
        "20% rise in website user engagement.",
        "15% reduction in bounce rate.",
        "25% growth in virtual tour participation.",
      ],
      height: "min-h-[80vh]",
      role: "Product Manager",
      underConstruction: true,
      backgroundColor: "bg-purple-50",
      tagColor: "bg-purple-100",
      tags: ["UX Design", "Case Study"],
      emoji: '🛠',
    },
    {
      company: "MetLife",
      product: "MetConnect",
      description:
        "Designing a corporate social network prototype for efficient internal communication and collaboration.",
      visuals: [
        {
          img: (
            <img
              className="max-h-full max-w-full object-scale-down"
              src={macbook}
              alt=""
            />
          ),
          alt: "A profile page on MetConnect as viewed on an iPad.",
        },
      ],
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
      emoji: '📌',
    },
  ];

  const selectedProjects = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    window.scroll({
      top: selectedProjects?.current?.offsetTop,
      left: 0,
      behavior: 'smooth'
    });
  }

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

        <div className="absolute w-auto bottom-20 animate-bounce text-xs lg:text-base hover:cursor-pointer" onClick={handleScroll}>
          Selected Projects &#8595;
        </div>
      </div>

      <div className="bg-gradient-to-b from-white to-slate-100 h-36"></div>

      <div ref={selectedProjects} className="min-h-screen w-screen py-32 flex flex-wrap gap-8 justify-center items-center bg-slate-100">
        {experience.map((entry, index) => (
          <Link
            to={entry.link}
            className={`bg-white flex items-center shadow-md transition-all relative group
              rounded-none lg:rounded-md
              flex-col
              ${entry.height} lg:h-[80vh]
              w-full lg:w-[45vw]
              border border-white lg:border-gray-200 lg:hover:border-gray-400
              hover:opacity-75
              hover:-translate-y-3
              `}
            // className={`bg-white gap-y-8 gap-x-2 rounded-md shadow-sm flex items-center
            //   flex-col
            //   ${entry.height} lg:h-[80vh]
            //   w-full lg:w-[45vw]
            // `}
            key={index}
          >
            {/* {entry.classified && (
              <label className="absolute top-6 right-6 text-xs lg:text-sm rounded-full bg-red-100 py-1 px-2 hover:cursor-auto">
                ⛔️ Details Confidential
              </label>
            )} */}

            {/* <label className="absolute top-6 right-6 text-xs lg:text-sm rounded-full bg-yellow-200 py-1 px-2 hover:cursor-auto">
                🛠 Under Construction
              </label> */}

            <div className="flex flex-col gap-y-4 pt-16 px-4 lg:px-16 lg:pt-16 w-full">
              <h1 className="text-base lg:text-lg font-medium">
                {entry.company + " • " + entry.role}
              </h1>
              <h2 className="text-2xl lg:text-5xl font-medium">
                {entry.product}
              </h2>
              <h3 className="text-sm lg:text-lg font-medium text-slate-500">
                {entry.description + entry.emoji}
              </h3>
              <div className="flex gap-2">
                {entry.tags.map((entry_, index_) => (
                  <span key={index_} className={`top-6 right-6 text-xs lg:text-sm rounded-full py-1 px-2 hover:cursor-auto ${entry.tagColor}`}>
                    {entry_}
                  </span>
                ))}
              </div>
              {/* <span className="w-fit top-6 right-6 text-xs lg:text-sm rounded-full bg-yellow-200 py-1 px-2 hover:cursor-auto">
                {entry.role}
              </span> */}
            </div>
            <div className="flex-1 min-h-0 w-full flex justify-center items-center gap-8 p-4 scale-95 group-hover:scale-[1.02] transition-all">
              {entry.visuals[0].img}
            </div>
          </Link>
        ))}
      </div>

      <div className="bg-gradient-to-b from-slate-100 to-white h-36"></div>
    </div>
  );
}

export default Home;
