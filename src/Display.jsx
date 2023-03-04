import Topbar from "./components/topbar/Topbar";
import Home from "./components/home/Home";
import "./app.scss";
import CaseStudy from "./components/casestudy/CaseStudy";
import MetLife from "./components/metLife/MetLife";
import Amazon from "./components/amazon/Amazon";
import { Route, Routes } from "react-router-dom";
import About from "./components/about/About";
import "@fontsource/chivo";
import Hamoc from "./components/hamoc/Hamoc";
import Google from "./components/google/Google";
import { useState, useEffect } from 'react';

function Display(props) {

  const [requestsFulfilled, setRequestsFulfilled] = useState(false)

  useEffect(() => {
    window.addEventListener("load", () => { setRequestsFulfilled(true); } );
    return () => window.removeEventListener("load", () => { setRequestsFulfilled(true); });
  }, []);

  const homepage = () => {
    return (
      <>
        <Topbar />
        <div className="sections">
          <Home />
          <CaseStudy />
        </div>
      </>
    );
  };

  const metlifepage = () => {
    return (
      <>
        <Topbar />
        <div>
          <MetLife />
        </div>
      </>
    );
  };

  const amazonpage = () => {
    return (
      <>
        <Topbar />
        <div>
          <Amazon />
        </div>
      </>
    );
  };

  const hamocpage = () => {
    return (
      <>
        <Topbar />
        <div>
          <Hamoc />
        </div>
      </>
    );
  };

  const aboutpage = () => {
    return (
      <>
        <Topbar />
        <div>
          <About />
        </div>
      </>
    );
  };

  const googlepage = () => {
    return (
      <>
        <Topbar />
        <div>
          <Google />
        </div>
      </>
    );
  };

  const pages = {
    '/' : homepage,
    '/metlife': metlifepage,
    '/amazon': amazonpage,
    '/about': aboutpage,
    '/hamoc': hamocpage,
    '/google': googlepage
  }

  return ( requestsFulfilled ? <div>{pages[props.page]()}</div> : <div></div> );

}

export default Display;
