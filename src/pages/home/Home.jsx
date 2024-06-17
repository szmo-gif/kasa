import { Link } from "react-router-dom";
import BackGround from "../../components/background/BackGround";
import LocationCard from "../../components/location-cards/LocationCard";
import data from '../../assets/data.json';
import './home.css';

export default function Home() {
  return (
    <div className="home">
      <BackGround />
      <div className="home-container">
        <ul className="home-nav">
          {data.map((usingSheet) => (
            <li key={usingSheet.id}>
              <Link to={`./usingSheet/${usingSheet.id}`}>
                <LocationCard src={usingSheet.cover} alt={usingSheet.title} title={usingSheet.title}/>
              </Link>
            </li>
          ))}
          <Link to="/usingSheet"><LocationCard /></Link>
        </ul>
      </div>
    </div>
  )
}