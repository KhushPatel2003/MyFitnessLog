import React from 'react';
import '../../styles/App.css';
import HeroSection from '../LandingPage/LandingPage';
import Navbar from '../navbar/navbar';

export default function Home() {
    return (
        <>
          <Navbar/>
          <HeroSection />  
        </>
    );
}