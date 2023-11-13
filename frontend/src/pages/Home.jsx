import React from 'react';
import "../style/pages/home.css";
import dataFeatures from '../data/features.json';
import Banner from '../components/Banner';
import Features from '../components/Features';

const Home = () => {
    return (
        <>
            <Banner />
           <section className="features">
                <h2 className="sr-only">Features</h2>
                {dataFeatures.map(({ id, logo, description, title, text }) => (
                <Features key={id} logo={logo} description={description} title={title} text={text} />
                ))}
            </section>
        </>
    );
};

export default Home;