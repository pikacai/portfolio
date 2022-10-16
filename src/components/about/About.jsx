import React from "react";
import "./about.scss";
import mypicture from "./haha.JPG";

export default function About() {
  return (
    <div className="split leftabout">
      <div class="centered">
        <img src={mypicture}></img>
      </div>

      <div className="split rightabout">
        <div class="textlocation">
          <h2>Hi. I am Pika</h2>
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
            🚀When I am not designing, I love learning new skills in linkedin
            learning.
            <br />
          </p>
          {/* <p> */}
          {/* For more work inquiries, or to grab a coffee do email me at
            senhuang.cai9h@gmail.com ☕️✨ Thank you for reading! 🧠
          </p> */}
        </div>
      </div>
    </div>
  );
}
