import "./App.css";
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";

library.add(fas, faTwitter, faFacebook);

function App() {
  return (
    <div className="container-div">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/products" element={<Products />}></Route>
        </Routes>
        <Footer />
      </Router>
=======
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
>>>>>>> 148ead30f7d2bcb00a2c63401a78c5a9f5d23289
    </div>
  );
}

export default App;
