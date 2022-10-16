import "./topbar.scss";
import resume from "./Cai_Senhuang_Resume.pdf";
import linkedln from "./new-linkedin-logo-white-black-png.png";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <Link to="/" className="myName">
            Pika Cai
          </Link>
        </div>
        <div className="right">
          <ul>
            <li>
              <a href="#intro">Work</a>
            </li>
            <li>
              <a href={resume}>Resume</a>
            </li>
            <li>
              <Link to="/about" target="_blank">
                About
              </Link>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/senhuangcai/">
                <img className="icon" src={linkedln}></img>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
