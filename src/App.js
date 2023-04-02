import Data from "./components/Data";
import Side from "./components/Side";
import Head from "./components/Head";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <div>
     <Head/>

  <Router>
    <div className="App">
    <Routes>
    <Route path="/" element={<Login/> } />

    <Route path="/Login" element={<Login/> } />
    <Route path="/Data" element={<Data/>} />
    </Routes>
   
    </div>
    </Router>
    </div>
  );
}

export default App;
