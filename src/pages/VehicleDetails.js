import React from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import SideNav from '../components/SideNav';
import HeroSection from '../components/HeroSection';
import useVehicleDetails from '../hooks/useVehicleDetails';
import VehicleContent from '../components/VehicleContent';

function VehicleDetails() {
  const { id } = useParams();
  const { vehicle, loading, error } = useVehicleDetails(id);

  return (
    <Box sx={{ display: 'flex' }}>
      <SideNav />
      <Box sx={{ flexGrow: 1 }}>
        <HeroSection />
        <VehicleContent vehicle={vehicle} loading={loading} error={error} id={id} />
      </Box>
    </Box>
  );
}

export default React.memo(VehicleDetails);