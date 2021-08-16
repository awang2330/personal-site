import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import About from '../About/About';
import Experiences from '../Experiences/Experiences';
import Projects from '../Projects/Projects';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Home />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/experiences" element={<Experiences />}/>
          <Route path="/projects" element={<Projects />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
