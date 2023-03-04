import { Route, Routes } from "react-router-dom";
import Display from "./Display";
import "./app.scss";

//App.js is for put the component
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={ <Display page='/'/> }/>
        <Route path="/metlife" element={ <Display page='/metlife'/> } />
        <Route path="/amazon" element={ <Display page='/amazon'/> } />
        <Route path="/about" element={ <Display page='/about'/> } />
        <Route path="/hamoc" element={ <Display page='/hamoc'/> } />
        <Route path="/google" element={ <Display page='/google'/> } />
      </Routes>

      {/* <MetLife/> */}
    </div>
  );
}

export default App;
