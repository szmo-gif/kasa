import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../assets/data.json';
import SlideShow from '../../components/slide-show/SlideShow';
import NotFound from '../../pages/not-found/NotFound';
import './using-sheet.css';
import Collapse from '../../components/collapse/Collapse';
import Tags from '../../components/tags/Tags';
import Rating from '../../components/rating/Rating';
import Host from '../../components/host/Host';

const housing = () => {
  const { id } = useParams();
  const housing = data.find((item) => item.id === id);

  if (!housing) {
    return <NotFound />;
  }

  return (
    <main className="housing-details">
      <SlideShow pictures={housing.pictures} />
      <h1>{housing.title}</h1>
      <p>{housing.location}</p>

      <Tags tags={housing.tags} index={housing.id} />
      
      <div className="housing-ratting-host">
        <Rating rating={housing.rating} />
        <Host name={housing.host.name} picture={housing.host.picture} />
      </div>

      <Collapse title="Description" children={housing.description} />
      <Collapse title="Équipements" children={
        <ul>
          {housing.equipments.map((equipement, index) => (
            <li key={index}>{equipement}</li>
          ))}
        </ul>}
      />


    </main>
  );
};

export default housing;
