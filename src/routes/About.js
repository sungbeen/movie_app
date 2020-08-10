import React from 'react';
import './About.css';

function About(props) {
    console.log(props);
    return (
        <div className="about__container">
            <span>
                "태초에 하나님이 천지를 창조하시니라."
            </span>
            <span>-창세기 1장 1절</span>
        </div>
    );
}

export default About;