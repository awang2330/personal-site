import home from '../../assets/home.jpg'
import './Home.css'
export default function Home() {
  return (
    <div id="Home" style={{backgroundImage: `url(${home})`}}>
      <div className="section-title">Home</div>
    </div>
  )
}