import React from 'react';
import "../style/components/features.css";

const Features = (logo, description, title, text) => {
    return (
        
        <div className="feature-item">
            <img src={logo} alt={description} className="feature-icon" />
            <h3 className="feature-item-title">{title}</h3>
            <p>{text}</p>
        </div>
        
    );
};

export default Features;