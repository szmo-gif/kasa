import Header from "../../components/header-about/HeaderAbout";
import Collapse from "../../components/collapse/Collapse";
import './about.css';

export default function about() {
  return (
    <main>
      <Header />
      <div className="about-container">
      <Collapse title="Fiabilité">
        <p>Voici le contenu de la section 1. Cliquez pour ouvrir/fermer.</p>
      </Collapse>
      <Collapse title="Respect">
        <p>Voici le contenu de la section 2. Cliquez pour ouvrir/fermer.</p>
      </Collapse>
      <Collapse title="Service">
        <p>Voici le contenu de la section 3. Cliquez pour ouvrir/fermer.</p>
      </Collapse>
      <Collapse title="Sécutité">
        <p>Voici le contenu de la section 4. Cliquez pour ouvrir/fermer.</p>
      </Collapse>
      </div>
    </main>
  )
}//TODO remplacer par ul et li