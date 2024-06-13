import { Link } from "react-router-dom";


export default function Home() {
  return (
    <>
      <h1>Accueil</h1>
      <nav>
        <Link to="/usingSheet">Fiche logement</Link>
      </nav>
    </>
  )
}