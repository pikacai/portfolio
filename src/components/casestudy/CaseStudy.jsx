import React from "react";
import "./casestudy.scss";
import amazonlogo from "./amazonlogo1.png";
import metlifelogo from "./metlifelogo1.png";
import { Link } from "react-router-dom";

export default function CaseStudy() {
  return (
    <div className="casestudy">
      <div class="row">
        <div class="casecolumn">
          <div class="card">
            <Link to="/amazon" target="_blank">
              <img className="casepic" src={amazonlogo}></img>
              <div class="container">
                <h3 className="titletext">Amazon</h3>
                <p>Amazon Fresh Redesigned: Save and More Time to Enjoy.</p>
              </div>
            </Link>
          </div>
        </div>
        <div class="casecolumn">
          <div class="card">
            <Link to="/metlife" target="_blank">
              <img className="casepic" src={metlifelogo}></img>
              <div class="container">
                <h3>MetLife</h3>
                <p>
                  Create an innovation project to help MetLife feel like “Home”.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
