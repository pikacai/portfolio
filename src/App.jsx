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

//App.js is for put the component
function App() {
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

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={homepage()} />
        <Route path="/metlife" element={metlifepage()} />
        <Route path="/amazon" element={amazonpage()} />
        <Route path="/about" element={aboutpage()} />
        <Route path="/hamoc" element={hamocpage()} />
      </Routes>

      {/* <MetLife/> */}
    </div>
  );
}

export default App;
