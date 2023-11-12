import React from 'react';
import "../style/components/features.css";
import FeaturesBlock from './FeaturesBlock';
import dataFeatures from '../data/features.json';


const Features = () => {
    return (
        <section className="features">
          <h2 className="sr-only">Features</h2>
          {dataFeatures.map(({ id, logo, description, title, text }) => (
           <FeaturesBlock key={id} image={logo} alt={description} title={title} text={text} />
        ))}
        </section>
    );
};

export default Features;