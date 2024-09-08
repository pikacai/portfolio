import { Routes, Route, Outlet } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/home/Home";
import GoogleContent from "./components/google/GoogleContent";
import Footer from "./components/Footer";
import About from "./components/about/About";
import HamocContent from "./components/hamoc/HamocContent";
import MetlifeContent from "./components/metlife/MetlifeContent";
import Secret from "./components/secret/Secret";
import Iphone from "./Iphone";
import Resume from "./components/Resume";
import HomeOld from "./components/Homeold";
import smoothscroll from "smoothscroll-polyfill";
import Intoxiblock from "./components/intoxiblock/Intoxiblock";
import Google from "./components/google2/Google";
import SocialMedia from "./components/socialMedia/SocialMedia";
import ReactGA from "react-ga4";
import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Roles from "./components/roleHunter/Roles";
import Restocks from "./components/restocks/Restocks";
import About_ from "./components/about/About_";

smoothscroll.polyfill();
ReactGA.initialize("G-Y7MNFH8R9F");

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Pages />}>
          <Route path="/" element={<Home />} />
          <Route path="/old" element={<HomeOld />} />
          <Route path="/google" element={<GoogleContent />} />
          <Route path="/hamoc" element={<HamocContent />} />
          <Route path="/metlife" element={<MetlifeContent />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/secret" element={<Secret />} />
          <Route path="/iphone" element={<Iphone />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/intoxiblock" element={<Intoxiblock />} />
          <Route path="/google2" element={<Google />} />
          <Route path="/social-media" element={<SocialMedia />} />
          <Route path="/roles" element={<Roles />} />
          <Route path="/restocks" element={<Restocks/>}/>
          <Route path="/about" element={<About_/>}/>
        </Route>
        <Route path="/" element={<Roles />}>
          <Route path="/roles" element={<Roles />} />
        </Route>
      </Routes>
    </>
  );
}

function Navigation() {
  const { pathname } = useLocation();

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: pathname,
      title: pathname.slice(1),
    });

    window.scrollTo(0, 0);
    window.history.scrollRestoration = "manual";
  }, [pathname]);

  return null;
}

function ProgressBar() {
  const { pathname } = useLocation();
  const [progress, setProgess] = useState(0);

  // Throttle function to limit the rate of scroll event handling
  const throttle = (func: Function, limit: number) => {
    let lastFunc: ReturnType<typeof setTimeout>;
    let lastRan: number;

    return function (...args: any[]) {
      // @ts-ignore
      const context = this;
      if (!lastRan) {
        func.apply(context, args);
        lastRan = Date.now();
      } else {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(() => {
          if (Date.now() - lastRan >= limit) {
            func.apply(context, args);
            lastRan = Date.now();
          }
        }, limit - (Date.now() - lastRan));
      }
    };
  };

  const handleScroll = useCallback(throttle(() => {
    setProgess((window.scrollY * 100) / document.documentElement.scrollHeight);
  }, 100), []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);
  return (
    <div
      className="fixed z-50 h-[5px] rounded-r-full w-full bg-blue-500 transition-all"
      style={{ width: `${progress}%` }}
    ></div>
  );
}

function Pages() {
  return (
    <>
      <Navigation />
      {/* <ProgressBar /> */}
      <NavigationBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
