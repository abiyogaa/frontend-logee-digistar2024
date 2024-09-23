import React, { useState, useRef } from 'react';
import HeroSection from '../components/HeroSection';
import BusinessSection from '../components/BusinessSection';
import OptimizeSection from '../components/OptimizeSection';
import TestimonialSection from '../components/TestimonialSection';
import ErrorView from '../components/ErrorView';

function HomePage() {
  const [error, setError] = useState(null);
  const vehicleSelectorRef = useRef(null);

  const scrollToVehicleSelector = () => {
    if (vehicleSelectorRef.current) {
      const yOffset = -80;
      const element = vehicleSelectorRef.current;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  if (error) {
    return <ErrorView message={error.message} />;
  }

  return (
    <>
      <HeroSection vehicleSelectorRef={vehicleSelectorRef} />
      <BusinessSection />
      <OptimizeSection onPilihArmadaClick={scrollToVehicleSelector} />
      <TestimonialSection />
    </>
  );
}

export default HomePage;
