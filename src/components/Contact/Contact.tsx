
import './Contact.css'
export default function Contact() {
  const contantInfo = {
    github: "github.com/awang2330",
    linkedIn: "linkedin.com/in/awang2330",
    email: "anniewang0806@gmail.com"
  }
  return (
    <div className="Contact">
      <a href={contantInfo.github}>github</a>
      <a href={contantInfo.linkedIn}>linkedin</a>
      <span>{contantInfo.email}</span>
    </div>
  )
}