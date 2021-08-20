
import reciplan from '../../assets/reciplan.png'
import lifetracker from '../../assets/lifetracker.png'
import './Projects.css';
export default function Projects() {
  return (
    <div id="Projects">
      <div className="section-title">Projects</div>  
      <div>
        {projects.map((e, i) => (
          <div key={i} className="proj">
            <div className="proj-img">
              <img src={e.image} alt={e.name}></img>
            </div>
            <div className="proj-text-overlay">
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
        ))}
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
  }
]