import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className="Navbar">
      <Link to="/about"></Link>
      <Link to="/experiences"></Link>
      <Link to="/projects"></Link>
      <Link to="/contact"></Link>
    </div>
  )
}