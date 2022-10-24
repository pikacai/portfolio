import "./intro.scss";
// import video from "./Abstract - 20072.mp4";
import backgroundImage from "./paper.jpg";
// import backgroundImage from "./bgg.png";

export default function Intro() {
  return (
    <div>
      {/* <div class="background-image"></div> */}
      <img className="background-image" src={backgroundImage} />
      {/* <video src={video} autoPlay loop muted /> */}
      <div className="content">
        <h2 className="myh2">Hi There👋, I'm</h2>
        <h1 className="myh1">Pika Cai</h1>
        <p className="xiaop">
          An designeer looking to simplify, beneficial life through design.
        </p>
      </div>
    </div>
  );
}
