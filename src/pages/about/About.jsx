import Header from "../../components/header-about/HeaderAbout";
import Collapse from "../../components/collapse/Collapse";
import './about.css';

export default function about() {
  return (
    <main id="about">
      <Header />
      <ul id="about-container">
      <Collapse title="Fiabilité">
        <li>Les annonces postées sur Kasa garantissent une fiablilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</li>
      </Collapse>
      <Collapse title="Respect">
        <li>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perburbation du voisinage entraînera une exclusion de notre plateforme.</li>
      </Collapse>
      <Collapse title="Service">
        <li>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perburbation du voisinage entraînera une exclusion de notre plateforme.</li>
      </Collapse>
      <Collapse title="Sécutité">
        <li>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</li>
      </Collapse>
      </ul>
    </main>
  )
}