import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <div className="container mt-4">
          <h1><Link to="/7homas7he7ank-react-portfolio">
            7homas Calle
          </Link></h1>
          <Routes>
            <Route path="/7homas7he7ank-react-portfolio" element={<Home />} />
            <Route path="/contact" element={<h1>Contact Page</h1>} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
