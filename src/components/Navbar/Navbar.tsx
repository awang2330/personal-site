import { HashLink } from 'react-router-hash-link';

import resume from '../../assets/resume.pdf';

import logo from '../../assets/logo.svg';
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

      <div>
        <HashLink to="/#Contact">Contact</HashLink>
        <a href={resume} target="blank" className="resume">Resume</a>
      </div>
      
    </div>
  )
}