import { useState } from 'react';
import placeholder from '../../assets/placeholder-img.jpg';
import reciplan from '../../assets/reciplan.png';
import lifetracker from '../../assets/lifetracker.png';
import githubIcon from '../../assets/github-icon.svg';
import linkIcon from '../../assets/link-icon.svg';

import './Projects.css';
export default function Projects() {
  const [num, setNum] = useState(3)
  const handleOnClick = () => {
    setNum(e => e + 2)
  }
  return (
    <div id="Projects">
      <div>
        <div className="section-title">Projects</div>  
        <div>
          {projects.map((e, i) => (
            <>
            {i < num ?
              <div key={i} className="proj">
                <div className={`proj-img ${i % 2 === 0 ? `` : `hidden`}`}>
                  <img src={e.image ? e.image : placeholder} alt={e.name}></img>
                </div>

                <div>
                  <div className={`proj-links ${i % 2 === 0 ? `` : `proj-links-switch`}`}>
                    {e.github ? 
                      <a href={e.github}>
                        <img src={githubIcon} alt="Github Icon"></img>
                      </a>
                    : null }

                    {e.link ? 
                      <a href={e.link}>
                        <img src={linkIcon} alt="Linkedin Icon"></img>
                      </a>
                    : null }
                  </div>
                  <div className={`proj-text-overlay ${i % 2 === 0 ? `` : `proj-text-overlay-switch`}`}>
                    <div className="proj-name">{e.name}</div>
                    <div className="proj-lan">
                      {e.languages.map(e => (
                        <span>{e}, </span>
                      ))}
                    </div>
                    <div className="proj-desc">
                      {e.description.map(e => (
                        <div>&#9723; {e}</div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={`proj-img ${i % 2 === 0 ? `hidden` : ``}`}>
                  <img src={e.image ? e.image : placeholder} alt={e.name}></img>
                </div>
              </div>
              : null}
            </>
          ))}

          {/* Show more disappears if all projects displayed */}
          <div className="show-more">
            <button className={`btn ${num  > projects.length ? `hidden` : ``}`} onClick={handleOnClick}>Show More</button>
          </div>
          
        </div>
      </div>
    </div>
  )
}

const projects = [
  {
    name: "Reciplan",
    image: reciplan,
    github: "https://github.com/reci-plan/capstone",
    link: "http://reciplan.surge.sh/",
    languages: ["React.js", "Node.js", "Express", "PostgreSQL"],
    description: [
      "Developed a web application with a React.js frontend, where users can easily access affordable recipes and create custom meal plans",
      "Implemented a backend with Express where information regarding all users, recipes, and saved information are stored in PostgreSQL"
    ]
  },
  {
    name: "LifeTracker",
    image: lifetracker,
    github: "https://github.com/awang2330/LifeTracker-Application",
    link: "http://lifetracker-sun.surge.sh",
    languages: ["React.js", "Node.js", "Express", "PostgreSQL"],
    description: [
    ]
  },
  {
    name: "Student Store",
    image: "",
    github: "https://github.com/awang2330/Student-Store",
    link: "",
    languages: ["React.js", "Node.js", "Express"],
    description: [
    ]
  },
  {
    name: "Flixster",
    image: "",
    github: "https://github.com/awang2330/Flixster",
    link: "",
    languages: ["HTML", "CSS", "Vanilla JS"],
    description: [
    ]
  },
  {
    name: "Khichri",
    image: "",
    github: "",
    link: "",
    languages: ["React.js"],
    description: [
    ]
  },
  {
    name: "Serendipity Books",
    image: "",
    github: "",
    link: "",
    languages: ["HTML", "CSS", "PHP"],
    description: [
    ]
  }
]