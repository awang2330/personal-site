import { HashLink } from 'react-router-hash-link';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className="Navbar">
      <HashLink smooth to="/#">logo</HashLink>
      <div>
        <HashLink smooth to="/#About">About</HashLink>
        <HashLink smooth to="/#Experiences">Experiences</HashLink>
        <HashLink smooth to="/#Projects">Projects</HashLink>
      </div>
     
      <HashLink to="/#contact">Contact</HashLink>
    </div>
  )
}