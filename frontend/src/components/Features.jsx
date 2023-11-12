import React from 'react';
import "../style/components/features.css";
import data from '../data/features.json';
import FeaturesBlock from './FeaturesBlock';

const Features = () => {
    return (
        <section className="features">
          <h2 className="sr-only">Features</h2>
          {data.map(({ id, logo, description, title, text }) => (
           <FeaturesBlock key={id} image={logo} alt={description} title={title} text={text} />
        ))}
        </section>
    );
};

export default Features;