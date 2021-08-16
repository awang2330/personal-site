import home from '../../assets/home.jpg'
import './Home.css'
export default function Home() {
  return (
    <div className="Home" style={{backgroundImage: `url(${home})`}}>
      <div className="section-title">Home</div>
    </div>
  )
}