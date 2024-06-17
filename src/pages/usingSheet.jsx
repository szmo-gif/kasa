import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../assets/data.json'; // Assure-toi que le chemin vers le fichier JSON est correct

const Logement = () => {
  const { id } = useParams();
  const logement = data.find((item) => item.id === id);

  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  return (
    <div className="logement-details">
      <h1>{logement.title}</h1>
      <img src={logement.cover} alt={logement.title} />
      <p>{logement.description}</p>
      <h3>Équipements</h3>
      <ul>
        {logement.equipments.map((equipement, index) => (
          <li key={index}>{equipement}</li>
        ))}
      </ul>
    </div>
  );
};

export default Logement;
