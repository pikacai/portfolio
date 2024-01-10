import { Routes, Route, Outlet } from "react-router-dom";
import NavigationBar from './components/NavigationBar';
import Home from './components/home/Home';
import OldGoogle from './components/old/google/Google';
import OldHamoc from './components/old/hamoc/Hamoc';
import OldMetLife from './components/old/metLife/MetLife';

import GoogleContent from "./components/google/GoogleContent";

import './App.scss';
import Footer from "./components/Footer";
import About from "./components/about/About";
import HamocContent from "./components/hamoc/HamocContent";
import MetlifeContent from "./components/metlife/MetlifeContent";
import Secret from "./components/secret/Secret";
import Iphone from "./Iphone";
import Resume from "./components/Resume";
import HomeOld from "./components/Homeold";
import smoothscroll from 'smoothscroll-polyfill';
import Intoxiblock from "./components/intoxiblock/Intoxiblock";

// kick off the polyfill!
smoothscroll.polyfill();

// This component is used to render components at the "<Outlet/>".
// This is so every page has a navbar
function Pages() {
  return (
    <>
      <NavigationBar/>
      <Outlet />
      <Footer/>
    </>
  )
}

function App() {
  return (
    <>
     <Routes>
      <Route path='/' element={ <Pages/> } >
        <Route path='/' element={ <Home/> } />
        <Route path='/old' element={ <HomeOld/> } />
        <Route path='/googleold' element={ <OldGoogle /> } />
        <Route path='/google' element={ <GoogleContent /> } />
        <Route path='/hamoc' element={ <HamocContent/> } />
        <Route path='/metlife' element={ <MetlifeContent/> } />
        <Route path='/hamocold' element={ <OldHamoc/> } />
        <Route path='/about' element={ <About/> } />
        <Route path='/secret' element={ <Secret/> } />
        <Route path='/iphone' element={ <Iphone/> } />
        <Route path='/resume' element={ <Resume/> } />
        <Route path='/intoxiblock' element={ <Intoxiblock/> } />
      </Route>
     </Routes>
    </>
  );
}

export default App
