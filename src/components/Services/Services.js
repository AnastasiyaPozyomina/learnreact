import React from 'react';
import CardService from '../CardService';
import servicesData from '../ServicesData';

export default function Services () {
  const serviceComponents = servicesData.map (card => (
    <CardService
      key={card.id}
      title={card.title}
      description={card.description}
      textbtn={card.textbtn}
    />
  ));

  return (
    <div className="services">
      <div className="container">
        <div className="row"> {serviceComponents} </div>
      </div>
    </div>
  );
}
