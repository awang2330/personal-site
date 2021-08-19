
import './Projects.css';
export default function Projects() {
  return (
    <div id="Projects">
      <div className="section-title">Projects</div>  
      <div>
        {projects.map(e => (
          <div>
            <div>
              <img src={e.image} alt={e.name}></img>
            </div>
            <div>
              <div className="proj-name">{e.name}</div>
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
    image: "../../assets/logo.svg",
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
    image: "../../assets/logo.svg",
    github: "",
    link: "",
    languages: ["React.js", "Node.js", "Express", "PostgreSQL"],
    description: [
    ]
  }
]