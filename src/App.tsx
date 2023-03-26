import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import OldGoogle from './components/old/google/Google';
import OldHamoc from './components/old/hamoc/Hamoc';
import OldMetLife from './components/old/metLife/MetLife';

function App() {
  return (
    <>
     <Routes>
      <Route path='/' element={ <Home/> } />
      <Route path='/google' element={ <OldGoogle/> } />
      <Route path='/hamoc' element={ <OldHamoc/> } />
      <Route path='/metlife' element={ <OldMetLife/> } />
     </Routes>
    </>
  );
}

export default App
