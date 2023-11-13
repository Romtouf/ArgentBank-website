import React from 'react';
import "../style/pages/home.css";
import data from '../data/features.json';
import Banner from '../components/Banner';
import Features from '../components/Features';

const Home = () => {
    return (
        <>
            <Banner />
           <section className="features">
                <h2 className="sr-only">Features</h2>
                {data.map(({ id, logo, description, title, text }) => (
                <Features key={id} image={logo} alt={description} title={title} text={text} />
                ))};
            </section>
        </>
    );
};

export default Home;