import { Link } from "react-router-dom";
import Banner from "../../components/banner/Banner";
import LocationCard from "../../components/location-card/LocationCard";
import data from '../../assets/data.json';
import './home.css';
import img from "../../assets/images/IMG.png";

export default function Home() {
  return (
    <main id="home">
      <Banner src={img} alt="paysage de montagne" title="Chez vous, partout et ailleurs" />
        <ul id="home-nav">
          {data.map((usingSheet) => (
            <li key={usingSheet.id}>
              <Link to={`./usingSheet/${usingSheet.id}`}>
                <LocationCard src={usingSheet.cover} alt={usingSheet.title} title={usingSheet.title}/>
              </Link>
            </li>
          ))}
        </ul>
    </main>
  )
}