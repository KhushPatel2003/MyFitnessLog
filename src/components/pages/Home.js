import React from 'react';
import '../../styles/App.css';
import HeroSection from '../LandingPage/LandingPage';
import Navbar from '../navbar/navbar';
import Cards from '../Cards/cards';
import Contact from '../contact/contact';
import ContactINFO from '../ContactINFO/ContactINFO';
import Video from '../video/video';
import INFOpage from '../INFOpage/INFOpage';

export default function Home() {
    return (
        <>
          <Navbar/>
          <HeroSection />  
          <Cards />
          <INFOpage /> 
          <Video /> 
          <ContactINFO />
          <Contact />
        </>
    );
}