import React from "react";
import "./casestudy.scss";
import amazonlogo from "./amazonlogo1.png";
import metlifelogo from "./metlifelogo1.png";
import { Link } from "react-router-dom";

export default function CaseStudy() {
  return (
    <div class="split-screen">
      <div class="hleft">
        <div class="card">
          <Link to="/amazon" target="_blank">
            <img className="casepic" src={amazonlogo}></img>
            <h3 className="titletext">Amazon</h3>
            <p className="smalltext">
              Amazon Fresh Redesigned: Save and More Time to Enjoy.
            </p>
          </Link>
        </div>
      </div>
      <div class="hright">
        <div class="card">
          <Link to="/metlife" target="_blank">
            <img className="casepic" src={metlifelogo}></img>

            <h3 className="titletext">MetLife</h3>
            <p className="smalltext">
              Create an innovation project to help MetLife feel like “Home”.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
