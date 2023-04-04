import { Routes, Route, Outlet } from "react-router-dom";
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import OldGoogle from './components/old/google/Google';
import OldHamoc from './components/old/hamoc/Hamoc';
import OldMetLife from './components/old/metLife/MetLife';

import './App.scss';

// This component is used to render components at the "<Outlet/>".
// This is so every page has a navbar
function Pages() {
  return (
    <>
      <NavigationBar/>
      <Outlet />
    </>
  )
}

function App() {
  return (
    <>
     <Routes>
      <Route path='/' element={ <Pages/> } >
        <Route path='/' element={ <Home/> } />
        <Route path='/google' element={ <OldGoogle/> } />
        <Route path='/hamoc' element={ <OldHamoc/> } />
        <Route path='/metlife' element={ <OldMetLife/> } />
      </Route>
     </Routes>
    </>
  );
}

export default App
