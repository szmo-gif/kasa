import Banner from "../../components/banner/Banner";
import Collapse from "../../components/collapse/Collapse";
import img from "../../assets/images/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png";
import './about.css';

export default function about() {
  return (
    <main id="about">
      <Banner src={img} alt="paysage de montagne"/>
      <ul id="about-container">
        <li>
          <Collapse title="Fiabilité">
            Les annonces postées sur Kasa garantissent une fiablilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
          </Collapse>
        </li>
        <li>
          <Collapse title="Respect">
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perburbation du voisinage entraînera une exclusion de notre plateforme.
          </Collapse>
        </li>
        <li>
          <Collapse title="Service">
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perburbation du voisinage entraînera une exclusion de notre plateforme.
          </Collapse>
        </li>
        <li>
          <Collapse title="Sécutité">
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
          </Collapse>
        </li>
      </ul>
    </main>
  )
}