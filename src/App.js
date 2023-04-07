import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/App.css";


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <div className="container mt-4">
          {/* <h1><Link to="7homas7he7ank-react-portfolio">
            7homas Calle
          </Link></h1> */}
          <Routes>
            <Route path="7homas7he7ank-React-Portfolio" element={<About />} />
            <Route path="/7homas7he7ank-React-Portfolio/home" element={<Home />} />
            <Route path="7homas7he7ank-React-Portfolio/about" element={<About />} />
            <Route path="7homas7he7ank-React-Portfolio/portfolio" element={<Portfolio />} />
            <Route path="7homas7he7ank-React-Portfolio/contact" element={<Contact />} />
            <Route path="7homas7he7ank-React-Portfolio/resume" element={<Resume />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
