
import clouds from '../../assets/clouds.jpg';
import './Home.css'
export default function Home() {
  return (
    <div id="Home" style={{backgroundImage: `url(${clouds})`}}>
      <div className="home-text">
        <p>Hello!</p>
        <p>I am Ann Wang,</p>
        <p>a junior majoring in Computer Science at the University of Michigan – Ann Arbor</p>
      </div>
    </div>
  )
}