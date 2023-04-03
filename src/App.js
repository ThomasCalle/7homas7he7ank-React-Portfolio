import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./pages/Home.js"
function App() {
  return (
    <div className="App">
      {/* alsdf
      <Home/> */}
     <Router>
      <Link to="/7homas7he7ank-react-portfolio">
      <h1>Replace with header</h1>
      </Link>
      <Routes>
      <Route 
                path="/7homas7he7ank-react-portfolio"
                element={<Home />} 
              />
 <Route 
                path="/contact" 
                element={<h1 >Contact Page</h1>} 
              />
      </Routes>
      <h2>Replace with footer</h2>
      </Router>
    </div>
  );
}

export default App;
