import { SchoolOutlined, WorkOutlineRounded } from "@mui/icons-material";
import Text from "../utilities/Text";
import GradientText from "../utilities/GradientText";
import ScaleIn from "../utilities/ScaleIn";
import Section from "../utilities/Section";

function About_() {
  return (
    <Section
      className="h-screen bg-blue-50"
      content={
        <div>
          <div className="mb-4 sm:mb-12">
            <Text
              className="flex flex-col gap-y-2 sm:gap-y-4 text-center !text-5xl sm:!text-7xl animate-fadeIn animate-slideInUp"
              parentElement="h1"
            >
              Pika Cai
              <GradientText
                className="font-medium text-2xl sm:text-3xl"
                gradient="linear-gradient(to right, #00c6ff, #0072ff)"
                text="_UX Designer_"
                parentElement="span"
              />
              <Text className="italic" parentElement="h2">
                Currently Lead Product Designer @ Restocks LLC
              </Text>
            </Text>
          </div>

          <div className="flex justify-center">
            <div className="flex flex-col gap-y-4 md:gap-y-6 w-full lg:w-4/5 xl:w-3/5">
              <ScaleIn delay={500}>
                <div className="bg-white rounded-xl shadow-md border p-4">
                  <Text
                    className="flex flex-col gap-1 sm:gap-2 mb-2"
                    parentElement="h3"
                  >
                    <div className="flex items-center justify-between sm:justify-start gap-x-2 font-medium">
                      Prior Work Experience
                      <WorkOutlineRounded />
                    </div>
                    Previously Google, MetLife, MemoryFox, SpeakHire, NYC
                    Department of City Planning
                  </Text>
                </div>
              </ScaleIn>
              <ScaleIn delay={1000}>
                <div className="bg-white rounded-xl shadow-md border p-4">
                  <Text
                    className="flex flex-col gap-1 sm:gap-2 mb-2"
                    parentElement="h3"
                  >
                    <div className="flex items-center justify-between sm:justify-start gap-x-2 font-medium">
                      Education
                      <SchoolOutlined />
                    </div>
                    M.P.S., Information Science @ Cornell University '24
                    <br />
                    B.S., Computer Science @ University at Buffalo '23
                  </Text>
                </div>
              </ScaleIn>
            </div>
          </div>
        </div>
      }
    />
  );
}

export default About_;
