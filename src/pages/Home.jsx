import { Link } from "react-router-dom";
import BackGround from "../components/background/BackGround";

export default function Home() {
  return (
    <div className="home">
      <BackGround/>
      <nav>
        <Link to="/usingSheet">Fiche logement</Link>
      </nav>
    </div>
  )
}