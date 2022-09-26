import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home"



function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element= {<Home/>} />
        <Route path="/product/:id"  />
      </Routes>
    </Router>

  );
}

export default App;