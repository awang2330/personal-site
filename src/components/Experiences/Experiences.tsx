import { EventType } from '@testing-library/react';
import { useState } from 'react';
import './Experiences.css';

export default function Experiences() {
  const [active, setActive] = useState(0)
  return (
    <div id="Experiences">
      <div className="section-title">Experiences</div>
      <div className="table">
         <div className="left-section">
          {experience.map((e, i) => (
            <div 
              key={i} 
              className={`ex-btn ${active === i ? `active` : ``}`} 
              onClick={e => setActive(i)}
            >
              <div>{e.company}</div>
              <div>{e.role}</div>
            </div>
          ))}
        </div>
        <div className="right-section">
          <div>{experience[active].date}</div>
          <div>{experience[active].location}</div>
          <div className="desc">
            {experience[active].description.map(e => (
              <p>&#9723; {e}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

interface IExperience {
  company: string,
  role: string,
  date: string,
  location: string,
  description: string[]
}

const experience : IExperience[] = [
  {
    company: "Codepath + CourseHero",
    role: "Full Stack Intern",
    date: "Jun 2021-Aug 2021",
    location: "Remote",
    description: [
      "Selective process with 35 participants selected from applicant pool of 974 to participate in an accelerated program to gain skills in web development and technical work experience",
      "Implement and demo weekly projects to gain understanding on databases, front-end code, back-end code, testing, design, and deployment",
      "Collaborated with 2 peers to develop a capstone project for users to plan out affordable meal plans – Reciplan"
    ]
  },
  {
    company: "Juni Learning",
    role: "CS Instructor",
    date: "May 2021 – Present",
    location: "Remote",
    description: [
      "Execute Computer Science lesson plans for students ages 8-18, while adapting to student interests and skill levels",
      "Communicate with parents regularly to provide updates on student progress and results from learning check-ins"
    ]
  },
  {
    company: "U-M",
    role: "Research Assistant",
    date: "Sep 2020 – Apr 2021",
    location: "Ann Arbor, MI",
    description: [
      "Write and present research on the impact of climate change on food systems in Pakistan and analyze factors that would change availability of ingredients in future years",
      "Develop a website to spread awareness on climate change – Khichri"
    ]
  },
  {
    company: "U-M",
    role: "Student Coordinator",
    date: "Sep 2019 – Mar 2020",
    location: "Ann Arbor, MI",
    description: [
      "Maintained tidiness and functionality of dining hall by monitoring all working stations",
      "Facilitated placement of student workers into stations in dining hall"
    ]
  },
  {
    company: "JPLA",
    role: "Studio Intern",
    date: "Jul 2019 – Aug 2019",
    location: "Brooklyn, NY",
    description: [
      "Mapped current and proposed heights of hedge species at Penn South Mutual Redevelopment Houses to maintain nature areas",
      "Researched bench styles based on standards of past projects and requested quotes for materials, sizes, and prices used in redesigning a dog park"
    ]
  }
]