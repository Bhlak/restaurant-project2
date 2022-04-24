import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Nav/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Products from "./components/Products/Products";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar /> 
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="Home" element={<Home />} />
           <Route path="About" element={<About/>} />
           <Route path="Products" element={<Products/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
