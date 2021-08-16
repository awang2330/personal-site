import About from '../About/About';
import Experiences from '../Experiences/Experiences';
import Projects from '../Projects/Projects';
import './Home.css'
export default function Home() {
  return (
    <div className="Home">
      <div className="section-title">Home</div>
      <About />
      <Experiences />
      <Projects />
    </div>
  )
}