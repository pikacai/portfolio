import "./intro.scss";
// import video from "./Abstract - 20072.mp4";

// import backgroundImage from "./bgg.png";

export default function Intro() {
  return (
    <div>
      {/* <div class="background-image"></div> */}
      {/* <img className="background-image" src={backgroundImage} /> */}
      {/* <video src={video} autoPlay loop muted /> */}
      <div className="content">
        <h1 className="nameHeading">Pika Cai</h1>
        <p className="introText">
          AEnabling the human factor in the products we use <br />
          UX/UI Design | UX Research | Product Designer
        </p>
      </div>
    </div>
  );
}
