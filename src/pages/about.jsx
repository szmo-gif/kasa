import Header from "../components/header-about/HeaderAbout";
import Collapse from "../components/collapse/Collapse";
import './about.css';

export default function about() {
  return (
    <>
      <Header />
      <div className="about-container">
      <Collapse title="Section 1">
        <p>Voici le contenu de la section 1. Cliquez pour ouvrir/fermer.</p>
      </Collapse>
      <Collapse title="Section 2">
        <p>Voici le contenu de la section 2. Cliquez pour ouvrir/fermer.</p>
      </Collapse>
      <Collapse title="Section 3">
        <p>Voici le contenu de la section 3. Cliquez pour ouvrir/fermer.</p>
      </Collapse>
      <Collapse title="Section 4">
        <p>Voici le contenu de la section 4. Cliquez pour ouvrir/fermer.</p>
      </Collapse>
      </div>
    </>
  )
}