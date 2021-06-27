import React from 'react';
import '../../styles/LandingPage.css';
import '../../styles/App.css';
import Background from '../../images/MyFitnessLogBackground.PNG';
import { Link } from "react-scroll";

function HeroSection() {
    return (
        <div className="HeroContainer">
            <img classNmae="hero-img" src={Background} alt="Food"/>
            <h1>Prioritize</h1>
            <h1>Health‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</h1>
            <h1>and‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</h1>
            <h1>Fitness‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</h1>
            <Link
                className="Button"
                activeClass="active"
                to="info"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >Learn More</Link>
        </div>
    );
}

export default HeroSection;