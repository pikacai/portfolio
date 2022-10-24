import "./topbar.scss";
import resume from "./Cai_Senhuang_Resume.pdf";
import linkedln from "./new-linkedin-logo-white-black-png.png";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <nav>
      <div className="logo">
        <Link to="/" className="myName">
          <h1>Pika Cai</h1>{" "}
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/" target="_blank">
            Projects
          </Link>
        </li>
        <li>
          <a href={resume}>Resume</a>
        </li>
        <li>
          <Link to="/about" target="_blank">
            About Me
          </Link>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/senhuangcai/">
            <img className="icon" src={linkedln}></img>
          </a>
        </li>
      </ul>
    </nav>
  );
}
