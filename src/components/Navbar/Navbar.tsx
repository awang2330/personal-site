import { HashLink } from 'react-router-hash-link';

import logo from '../../assets/icon.svg'
import './Navbar.css';

export default function Navbar() {
  return (
    <div className="Navbar">
      <HashLink smooth to="/#">
        <img src={logo} alt="Plant logo"></img>
      </HashLink>
      <div>
        <HashLink smooth to="/#About">About</HashLink>
        <HashLink smooth to="/#Experiences">Experiences</HashLink>
        <HashLink smooth to="/#Projects">Projects</HashLink>
      </div>
     
      <HashLink to="/#Contact">Contact</HashLink>
    </div>
  )
}