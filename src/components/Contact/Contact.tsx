
import githubIcon from '../../assets/github-icon.svg';
import linkedinIcon from '../../assets/linkedin-icon.svg';
import './Contact.css'
export default function Contact() {
  const contantInfo = {
    github: "github.com/awang2330",
    linkedIn: "linkedin.com/in/awang2330",
    email: "anniewang0806@gmail.com"
  }
  return (
    <div className="Contact">
      <div>
        <a href={contantInfo.github} className="contact-links">
          <img src={githubIcon} alt="Github Icon"></img>
        </a>
        <a href={contantInfo.linkedIn} className="contact-links">
          <img src={linkedinIcon} alt="Linkedin Icon"></img>
        </a>
      </div>
      <span>{contantInfo.email}</span>
    </div>
  )
}