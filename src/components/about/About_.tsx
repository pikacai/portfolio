import { SchoolOutlined, WorkOutlineRounded } from "@mui/icons-material";
import Text from "../utilities/Text";
import GradientText from "../utilities/GradientText";
import ScaleIn from "../utilities/ScaleIn";
import Section from "../utilities/Section";
import BoldText from "../utilities/BoldText";

import vangogh from '../../assets/about/vangogh.png';
import vote from '../../assets/about/vote.png';
import notes from '../../assets/about/notes.png';
import nycPlanning from '../../assets/about/nyc-planning.png';
import nycPlanningLogo from '../../assets/about/nyc-planning-logo.png';
import ub from '../../assets/about/ub.png';
import bull from '../../assets/about/bull.png';
import codePathFlyer from '../../assets/about/codepath-flyer.png';
import speakhireLogo from '../../assets/about/speakhire-logo.png';
import metlife from '../../assets/about/metlife.png';
import metlifeLogo from '../../assets/about/metlife-logo.svg';
import dec from '../../assets/about/dec.png';
import google from '../../assets/about/google.png';
import googleLogo from '../../assets/about/google-logo.svg';
import ar from '../../assets/about/ar.png';
import cornellGraduation from '../../assets/about/cornell-graduation.png';
import cornellLogo from '../../assets/about/cornell-logo.svg';
import cornellEvent from '../../assets/about/cornell-event.png';
import { Timeline } from "../ui/timeline";


function About_() {
  const data = [
    {
      title: "2018",
      content: (
        <div>
          <BoldText
            text="Since I was young, I've had a _passion for art and leadership_. Here's a photo of me emulating Van Gogh and a poster from when I was elected Student Body President."
            className="text-base font-normal mb-8"
            parentElement="p"
          />
          <div className="grid grid-cols-2 gap-4">
            <img className="shadow-lg border bg-white h-[80%] object-contain rounded-md p-2" src={vangogh}></img>
            <img className="shadow-lg border bg-white h-[80%] object-contain rounded-md p-2" src={vote}></img>
          </div>
        </div>
      ),
    },
    {
      title: "2019",
      content: (
        <div>
          <BoldText
            text="I began my undergraduate journey studying pre-med. Here's a photo from my time as a pre-med _content creator_."
            className="text-base font-normal mb-8"
            parentElement="p"
          />
          <div className="grid grid-cols-2 gap-4">
            <img className="shadow-lg border bg-white h-[80%] object-contain rounded-md p-2" src={notes}></img>
          </div>
        </div>
      ),
    },
    {
      title: "2020",
      content: (
        <div>
          <BoldText
            text="My very first internship was at the New York City Department of City Planning where I was a _Quality Assurance Engineer_ improving an internal application to handle building permits."
            className="text-base font-normal mb-8"
            parentElement="p"
          />
          <div className="grid grid-cols-2 gap-4">
            <img className="shadow-lg border bg-white h-[80%] object-contain rounded-md p-2" src={nycPlanning}></img>
          </div>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <BoldText
            text="This year was a roller coaster. I transferred to the University at Buffalo to begin a new chapter studying _Computer Science_."
            className="text-base font-normal mb-4"
            parentElement="p"
          />
          <BoldText
            text="Not long after joining, I _launched University at Buffalo's very first CodePath.org iOS development course_ which I lead for 2 semesters."
            className="text-base font-normal mb-4"
            parentElement="p"
          />
          <BoldText
            text="I also completed a second internship at _SpeakHire_. It was my first experience being a Frontend Software Engineer focusing on _User Experience Design_."
            className="text-base font-normal mb-8"
            parentElement="p"
          />
          <div className="grid grid-cols-2 gap-4">
            <img className="shadow-lg border bg-white h-[80%] object-contain rounded-md p-2" src={ub}></img>
            <img className="shadow-lg border bg-white h-[80%] object-contain rounded-md p-2" src={codePathFlyer}></img>
            <img className="shadow-lg border bg-white h-[80%] object-contain rounded-md p-2" src={speakhireLogo}></img>
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <BoldText
            text="I continued my UX product design journey at MetLife where I _launched a prototype for an internal social media platform_ to better connect 45,000+ associates."
            className="text-base font-normal mb-8"
            parentElement="p"
          />
          <div className="grid grid-cols-2 gap-4">
            <img className="shadow-lg border bg-white h-[80%] object-contain rounded-md p-2" src={metlife}></img>
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <BoldText
            text="Upon graduating, I experienced something new! I became a _Summer Camp Counselor_ for the New York State Department of Environmental Conservation."
            className="text-base font-normal mb-4"
            parentElement="p"
          />
          <BoldText
            text="Following that experience, I was accepted into _Cornell University to study Information Science with a concentration in Human-Computer Interaction (HCI)_. I immediately enrolled into a joint Cornell x Google venture to explore creating an internal CRM tool for Google Cloud."
            className="text-base font-normal mb-4"
            parentElement="p"
          />
          <BoldText
            text="Just before the New Year, I completed an _augmented reality course, where I won the competition with my capstone project_."
            className="text-base font-normal mb-8"
            parentElement="p"
          />
          <div className="grid grid-cols-2 gap-4">
            <img className="shadow-lg border bg-white h-[80%] object-contain rounded-md p-2" src={dec}></img>
            <img className="shadow-lg border bg-white h-[80%] object-contain rounded-md p-2" src={google}></img>
            <img className="shadow-lg border bg-white h-[80%] object-contain rounded-md p-2" src={ar}></img>
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <BoldText
            text="As I concluded my time at Cornell University, I'm proud to have hosted events to strengthen our community and taken the lead in creating a yearbook to capture our shared experiences."
            className="text-base font-normal mb-8"
            parentElement="p"
          />
          <div className="grid grid-cols-2 gap-4">
            <img className="shadow-lg border bg-white h-[80%] object-contain rounded-md p-2" src={cornellGraduation}></img>
            <img className="shadow-lg border bg-white h-[80%] object-contain rounded-md p-2" src={cornellEvent}></img>
          </div>
        </div>
      ),
    },
  ];

  return (
    <Section
      content={
        <Timeline data={data} />
      }
    />
  );
}

export default About_;
