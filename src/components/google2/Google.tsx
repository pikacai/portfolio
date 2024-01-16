import LazyImage from "../intoxiblock/LazyImage";

import googleLogo from "../../assets/google2/googleLogo.svg";
import googleCloudLogo from "../../assets/google2/googleCloudLogo.svg";
import people from "../../assets/google2/people.svg";
import CenteredContentWider from "../intoxiblock/CenteredContentWider";
import groupImage1 from "../../assets/google2/groupImage1.png";
import groupImage2 from "../../assets/google2/groupImage2.png";
import groupImage3 from "../../assets/google2/groupImage3.png";
import groupImage4 from "../../assets/google2/groupImage4.png";

import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

function Google() {
  return (
    <div>
      <div className="h-screen w-screen flex justify-center p-24">
        <div className="flex items-center">
          <div className="flex flex-col gap-y-6">
            <p className="w-fit p-4 rounded-full bg-[#F6FAFE]">UX Case Study</p>
            <img className="w-[80%]" src={googleLogo} />
            <h1 className="text-2xl">
              Account Planning journey for Google Cloud
            </h1>
            <img className="w-[60%]" src={googleCloudLogo} />
          </div>
        </div>
        <img src={people} className="" />
      </div>
      <CenteredContentWider
        content={
          <div className="flex items-start justify-center text-center text-xl leading-relaxed">
            <div className="flex-1">
              <p className="font-semibold pb-4">Role</p>
              <p>UX Researcher/Designer</p>
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
          <p className="text-xl leading-relaxed">
            I had the joy of working with truly{" "}
            <span className="text-[#4285F4] font-semibold">amazing teams</span>{" "}
            🫶 and our{" "}
            <span className="text-[#DB4537] font-semibold">
              caring mentors, Soo{" "}
            </span>
            💖. Together, we delved into research and design to bring forth the
            latest <span className="font-semibold">AI capabilities</span>, with the aim of infusing extra magic 💫 into
            the <span className="font-semibold">Account Planning journey for Google Cloud</span>. What made this
            experience even more special for me was the chance to collaborate
            with such inspiring, talented, and caring people—truly a sweet
            experience.
          </p>
        }
      />

      <CenteredContentWider
        content={
          <div className="flex flex-col gap-8">
            <img src={groupImage1} className="w-full rounded-lg shadow-xl" />
            <div className="flex-1 flex gap-8">
              <img
                src={groupImage2}
                className="w-[31.4%] rounded-lg shadow-xl"
              />
              <img
                src={groupImage3}
                className="w-[31.4%] rounded-lg shadow-xl"
              />
              <img
                src={groupImage4}
                className="w-[31.4%] rounded-lg shadow-xl"
              />
            </div>
          </div>
        }
      />

      <CenteredContentWider
        content={
          <>
            <h1 className="text-4xl font-semibold pb-10 text-center">
              Some Things I Learned
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
                  teamwork: where dreams take flight
                </li>

                <li>
                  <span className="text-[#DB4537]">
                    <KeyboardBackspaceIcon
                      className="rotate-180"
                      fontSize="large"
                    />
                    <span className="font-medium">
                      UX researcher's rockstar?
                    </span>
                  </span>{" "}
                  "Just google it"
                </li>
                <li>
                  <span className="text-[#F4B400]">
                    <KeyboardBackspaceIcon
                      className="rotate-180"
                      fontSize="large"
                    />
                    <span className="font-medium">Ask fearlessly</span>
                  </span>
                  , because in asking, everything becomes possible and we are
                  learning from asking questions
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
