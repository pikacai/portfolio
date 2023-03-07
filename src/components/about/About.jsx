import React from "react";
import "./about.scss";
import mypicture from "./about.svg";
import Line from "./Line";

export default function About() {
  return (
    <div className="split">
      <img src={mypicture} alt='mypicture'/>
      {/* <div className="leftabout">
        <img className='aboutImage'src={mypicture}></img>
      </div>

      <div className="rightabout">
        <div className="textlocation">
          <h2>Hi. I am Pika</h2>
          <Line emoji='📍' text='Buffalo, NY'/>
          <p>📍Buffalo, NY</p>
          <p>🎓Computer Science </p>
          <p>💖 Procreate, research, psychology, accessibility, health life</p>
          <br />
          <br />
          <p>
            👩🏻‍💻I am a visual designer and web developer. I am studying Computer
            Science at University at Buffalo. <br />
            <br />
            <br />
            👩🏻‍🎨I began learning drawing when I was 6 years old. My interest in
            art and design pushes me to pursue a career as a UX/UI designer.{" "}
            <br />
            <br />
            💯I hope to use my design to help people to have a healthier and
            easier life. <br />
            <br />
            🚀When I am not designing, I love learning new skills in LinkedIn
            Learning.
            <br />
          </p>
        </div>
      </div> */}
    </div>
  );
}
