import { SchoolOutlined, WorkOutlineRounded } from "@mui/icons-material";
import Text from "../utilities/Text";
import GradientText from "../utilities/GradientText";
import ScaleIn from "../utilities/ScaleIn";
import Section from "../utilities/Section";
import BoldText from "../utilities/BoldText";

import vangogh from '../../assets/about/vangogh.png';
import vote from '../../assets/about/vote.png';

interface BallProps {
  size: string;
  color: string;
  flip: boolean;
  start: boolean;
}

function Ball({ size, color, flip, start }: BallProps) {
  const sizeInt = parseInt(size.replace(/\D/g, ''));

  const ballStyle = {
    borderColor: color,
    borderWidth: sizeInt / 10,
    width: sizeInt,
    height: sizeInt,
  };

  const innerBallStyle = {
    backgroundColor: color,
    width: sizeInt / 2,
    height: sizeInt / 2,
  };

  const outerLineStyle = {
    height: sizeInt / 12,
    width: 50,
  };

  const outerBallStyle = {
    width: sizeInt / 4,
    height: sizeInt / 4,
  };

  const positionLine = flip
    ? { right: `calc(100% + ${sizeInt / 10}px)` }
    : { left: `calc(100% + ${sizeInt / 10}px)` };

  const yearTextPosition = flip
    ? { left: `calc(200% + ${sizeInt / 10}px)` }
    : { right: `calc(200% + ${sizeInt / 10}px)` };

  return start ? (
    <div style={ballStyle} className="bg-white rounded-full absolute left-1/2 transform -translate-x-1/2">
      <span style={innerBallStyle} className="absolute rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
      {!flip && (
        <span style={{ ...outerLineStyle, ...positionLine }} className="bg-[#DCDCDC] absolute top-1/2 -translate-y-1/2">
          <span style={outerBallStyle} className="absolute bg-[#DCDCDC] rounded-full top-1/2 right-0 transform -translate-y-1/2"></span>
        </span>
      )}
      {!flip && <p style={yearTextPosition} className="text-3xl absolute top-1/2 -translate-y-1/2 text-right">2024</p>}
      {flip && <p style={yearTextPosition} className="text-3xl absolute top-1/2 -translate-y-1/2">2024</p>}
      {flip && (
        <span style={{ ...outerLineStyle, ...positionLine }} className="bg-[#DCDCDC] absolute top-1/2 -translate-y-1/2 rotate-180">
          <span style={outerBallStyle} className="absolute bg-[#DCDCDC] rounded-full top-1/2 right-0 transform -translate-y-1/2"></span>
        </span>
      )}
    </div>
  ) : (
    <div className="absolute left-1/2 transform -translate-x-1/2">
      {!flip && (
        <span style={{ ...outerLineStyle, left: `calc(100% + 1px)` }} className="bg-[#DCDCDC] absolute top-1/2 -translate-y-1/2">
          <span style={outerBallStyle} className="absolute bg-[#DCDCDC] rounded-full top-1/2 right-0 transform -translate-y-1/2"></span>
        </span>
      )}
      {/* {!flip && <p style={{ right: `calc(200% + ${sizeInt / 10}px)` }} className="text-3xl absolute top-1/2 -translate-y-1/2 text-right">2024</p>} */}
      {/* {flip && <p style={{ left: `calc(200% + ${sizeInt / 10}px)` }} className="text-3xl absolute top-1/2 -translate-y-1/2">2024</p>} */}
      {flip && (
        <span style={{ ...outerLineStyle, right: `calc(100% + 1px)` }} className="bg-[#DCDCDC] absolute top-1/2 -translate-y-1/2 rotate-180">
          <span style={outerBallStyle} className="absolute bg-[#DCDCDC] rounded-full top-1/2 right-0 transform -translate-y-1/2"></span>
        </span>
      )}
    </div>
  );
}


function About_() {
  const timeline = [{}, {}, {}, {}];
  return (
    <Section
      className="min-h-screen bg-blue-50"
      content={
        <div className="mt-[500px]">
          {
            timeline.map((entry, index) => (<div className="flex">
              {/* <div className="w-[300px] h-[300px] shadow-md"></div> */}
              <div className="w-full"></div>
              <div className="w-[3px] min-h-[300px] shadow-md bg-blue-500 relative">
                {/* <span className="w-[20px] h-[20px] bg-red-500 rounded-full absolute -left-[50%]"> */}
                <Ball size="28px" color="#22D1EE" flip={index % 2 !== 0} start={index % 2 === 0} />
                {/* </span> */}
                {/* <Year className="text-2xl text-blue-500" flip={false}>2019</Year> */}
              </div>
              <div className="w-full flex mb-[90px] ml-[90px] -gap-x-8">
                <div className="w-[200px] h-[300px] p-3 shadow-md rounded-sm bg-white flex flex-col -rotate-6">
                  <img className="bg-gray-400 h-[80%] object-contain" src={vangogh}></img>
                  <BoldText text="Passionate about _drawing_ since childhood" parentElement="p"></BoldText>
                </div>
                <div className="w-[200px] h-[300px] p-3 shadow-md rounded-sm bg-white flex flex-col rotate-6">
                  <img className="bg-gray-400 h-[80%] object-contain" src={vote}></img>
                  <BoldText text="Passionate about _drawing_ since childhood" parentElement="p"></BoldText>
                </div>
              </div>
              {/* <div className="w-[300px] h-[300px] shadow-md"></div> */}
            </div>

            ))
          }
        </div>
        // <div>
        //   <div className="mb-4 sm:mb-12">
        //     <Text
        //       className="flex flex-col gap-y-2 sm:gap-y-4 text-center !text-5xl sm:!text-7xl animate-fadeIn animate-slideInUp"
        //       parentElement="h1"
        //     >
        //       Pika Cai
        //       <GradientText
        //         className="font-medium text-2xl sm:text-3xl"
        //         gradient="linear-gradient(to right, #00c6ff, #0072ff)"
        //         text="_UX Designer_"
        //         parentElement="span"
        //       />
        //       <Text className="italic" parentElement="h2">
        //         Currently Lead Product Designer @ Restocks LLC
        //       </Text>
        //     </Text>
        //   </div>

        //   <div className="flex justify-center">
        //     <div className="flex flex-col gap-y-4 md:gap-y-6 w-full lg:w-4/5 xl:w-3/5">
        //       <ScaleIn delay={500}>
        //         <div className="bg-white rounded-xl shadow-md border p-4">
        //           <Text
        //             className="flex flex-col gap-1 sm:gap-2 mb-2"
        //             parentElement="h3"
        //           >
        //             <div className="flex items-center justify-between sm:justify-start gap-x-2 font-medium">
        //               Prior Work Experience
        //               <WorkOutlineRounded />
        //             </div>
        //             Previously Google, MetLife, MemoryFox, SpeakHire, NYC
        //             Department of City Planning
        //           </Text>
        //         </div>
        //       </ScaleIn>
        //       <ScaleIn delay={1000}>
        //         <div className="bg-white rounded-xl shadow-md border p-4">
        //           <Text
        //             className="flex flex-col gap-1 sm:gap-2 mb-2"
        //             parentElement="h3"
        //           >
        //             <div className="flex items-center justify-between sm:justify-start gap-x-2 font-medium">
        //               Education
        //               <SchoolOutlined />
        //             </div>
        //             M.P.S., Information Science @ Cornell University '24
        //             <br />
        //             B.S., Computer Science @ University at Buffalo '23
        //           </Text>
        //         </div>
        //       </ScaleIn>
        //     </div>
        //   </div>
        // </div>
      }
    />
  );
}

export default About_;
