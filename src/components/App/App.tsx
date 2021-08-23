import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import About from '../About/About';
import Experiences from '../Experiences/Experiences';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Home />
        <About />
        <Experiences />
        <Projects />
        <Contact />
      </Router>
    </div>
  );
}

export default App;
