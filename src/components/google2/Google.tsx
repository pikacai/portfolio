import googleCloudIntroVideo from "../../assets/google2/googleCloudIntroVideo.mp4";

import CenteredContentWider from "../intoxiblock/CenteredContentWider";
import groupImage1 from "../../assets/google2/groupImage1.png";
import groupImage2 from "../../assets/google2/groupImage2.png";
import groupImage3 from "../../assets/google2/groupImage3.png";
import groupImage4 from "../../assets/google2/groupImage4.png";

import materialDesign from "../../assets/google2/materialDesign.png";

import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link } from "react-router-dom";

function Google() {
  return (
    <div className="animate-fadeIn">
      <CenteredContentWider
        content={
          <div className="relative mt-36 border rounded-3xl overflow-hidden shadow-2xl">
            <video autoPlay loop className="">
              <source src={googleCloudIntroVideo} type="video/mp4" />
            </video>
            <Link
              to="https://www.youtube.com/watch?v=jjLgA3UAaCQ"
              className="text-sm text-gray-400 right-5 bottom-3 absolute"
              target="blank"
            >
              <p>
                Source: "The new way to think about sustainability" by Google on
                YouTube
              </p>
            </Link>
          </div>
        }
      />
      <CenteredContentWider
        content={
          <div className="flex items-start justify-center text-center text-xl leading-relaxed">
            <div className="flex-1">
              <p className="font-semibold pb-4">Role</p>
              <p>UX Reseacher & Designer</p>
            </div>
            <div className="flex-1">
              <p className="font-semibold pb-4">Timeline</p>
              <p>8 weeks</p>
            </div>
            <div className="flex-1">
              <p className="font-semibold pb-4">Teammates</p>
              <p>Cornell Google Team</p>
            </div>
          </div>
        }
      />
      <CenteredContentWider
        content={
          <>
            <h1 className="text-4xl font-semibold pb-10 text-center">
              Project Overview
            </h1>
            <div className="pb-20">
              <h1 className="text-2xl font-semibold pb-10">Problem Summary</h1>
              <p className="text-xl leading-relaxed">
                Google Cloud is a leading suite of cloud computing services.
                Internally, Google uses a customer relationship management (CRM)
                system to coordinate with existing and potential clients. In the
                age of generative AI, Google seeks to improve its existing CRM
                system.
              </p>
            </div>
            <div>
              <h1 className="text-2xl font-semibold pb-10">Solution Summary</h1>
              <p className="text-xl leading-relaxed">
                Leveraging Material UI and Bard AI, we designed a modernized CRM
                platform.
              </p>
            </div>
          </>
        }
      />

      <CenteredContentWider
        content={
          <>
            <h1 className="text-4xl font-semibold pb-10 text-center">
              Design Process
            </h1>
            <p className="text-xl leading-relaxed pb-10">
              Throughout the project, we utilized Google's Material UI library
              to power our designs and provide a user-friendly feel.
            </p>
            {/* <img src={materialDesign} alt="" className="rounded-xl shadow-xl" /> */}
          </>
        }
      />

      <CenteredContentWider
        content={
          <>
            <h1 className="text-4xl font-semibold pb-10 text-center">Photos</h1>
            <p className="text-xl leading-relaxed pb-10">
              In my first semester at Cornell, I worked alongside an{" "}
              <span className="text-[#4285F4] font-semibold">
                amazing Cornell team
              </span>{" "}
              🫶 and our{" "}
              <span className="text-[#DB4537] font-semibold">
                caring mentor, Soo{" "}
              </span>
              💖. Conducting UX Research with inspiring, talented, and caring
              people was a great experience.
              <br />
              <br />
              Here are some photos of our time at the Google office in New York
              City and at Cornell.
            </p>
            <div className="flex w-full flex-col gap-8">
              <img src={groupImage1} className="w-full rounded-lg shadow-xl" />
              <div className="flex-1 flex overflow-auto gap-8 w-full">
                <div className="flex-1">
                  <img src={groupImage2} className="rounded-lg" />
                </div>
                <div className="flex-1">
                  <img src={groupImage3} className="rounded-lg" />
                </div>
                <div className="flex-1">
                  <img src={groupImage4} className="rounded-lg" />
                </div>
              </div>
            </div>
          </>
        }
      />

      <CenteredContentWider
        content={
          <>
            <h1 className="text-4xl font-semibold pb-10 text-center">
              3 Things I Learned
            </h1>
            <p className="text-xl leading-relaxed">
              <ul className="flex flex-col gap-y-6">
                <li>
                  <span className="text-[#0B9D58]">
                    <KeyboardBackspaceIcon
                      className="rotate-180"
                      fontSize="large"
                    />
                    <span className="font-medium">Seamless</span>
                  </span>{" "}
                  teamwork is where dreams take flight.
                </li>

                <li>
                  <span className="text-[#DB4537]">
                    <KeyboardBackspaceIcon
                      className="rotate-180"
                      fontSize="large"
                    />
                    <span className="font-medium">UX researcher's moto?</span>
                  </span>{" "}
                  "Just google it!"
                </li>
                <li>
                  <span className="text-[#F4B400]">
                    <KeyboardBackspaceIcon
                      className="rotate-180"
                      fontSize="large"
                    />
                    <span className="font-medium">Ask fearlessly</span>
                  </span>
                  , because in asking, everything becomes possible.
                </li>
              </ul>
            </p>
          </>
        }
      />

      <div className="bg-[#0D8BFF] bg-opacity-[0.12] py-12 px-12 flex justify-center">
        <p className="text-xl leading-relaxed w-[60%]">
          Unfortunately, I can't get into any more detail about the work with
          Google, as it is under NDA. If you would like to learn more, feel free
          to reach out to me at{" "}
          <a className="text-[#0D8BFF]" href="mailto:sc3322@cornell.edu">
            sc3322@cornell.edu
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default Google;
