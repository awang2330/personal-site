import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className="Navbar">
      <Link to="/">logo</Link>
      <div>
        <Link to="/about">About</Link>
        <Link to="/experiences">Experiences</Link>
        <Link to="/projects">Projects</Link>
      </div>
     
      <Link to="/contact">Contact</Link>
    </div>
  )
}