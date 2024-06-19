import { Link } from "react-router-dom";
import BackGround from "../../components/background/BackGround";
import LocationCard from "../../components/location-cards/LocationCard";
import data from '../../assets/data.json';
import './home.css';

export default function Home() {
  return (
    <main className="home">
      <BackGround /> //TODO rename Banner
      <div className="home-container">//TODO enlever la div
        <ul className="home-nav">
          {data.map((usingSheet) => (
            <li key={usingSheet.id}>
              <Link to={`./usingSheet/${usingSheet.id}`}>
                <LocationCard src={usingSheet.cover} alt={usingSheet.title} title={usingSheet.title}/> //TODO rename LocationCard par Card
              </Link>
            </li>
          ))}
          <Link to="/usingSheet"><LocationCard /></Link>
        </ul>
      </div>
    </main>
  )
}