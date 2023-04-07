import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Navigation from './components/Navigation';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Header/>
        <div className="container mt-5">
          <Routes>
            <Route path="/7homas7he7ank-React-Portfolio/" element={<About />} />
            {/* <Route path="/7homas7he7ank-React-Portfolio/home" element={<Home />} /> */}
            <Route path="/7homas7he7ank-React-Portfolio/about" element={<About />} />
            <Route path="/7homas7he7ank-React-Portfolio/portfolio" element={<Portfolio />} />
            <Route path="/7homas7he7ank-React-Portfolio/contact" element={<Contact />} />
            <Route path="/7homas7he7ank-React-Portfolio/resume" element={<Resume />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
