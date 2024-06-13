import { Link } from "react-router-dom";
import BackGround from "../components/background/BackGround";
import LocationCard from "../components/location-cards/LocationCard";
import Footer from "../components/footer/Footer";
import './home.css';
export default function Home() {
  return (
    <div className="home">
      <BackGround/>
      <nav className="home-nav">
        <Link to="/usingSheet"><LocationCard /></Link>
        <Link to="/usingSheet"><LocationCard /></Link>
        <Link to="/usingSheet"><LocationCard /></Link>
      </nav>
      <Footer />
    </div>
  )
}