import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import AddressInput from './AddressInput';
import VehicleSelector from './VehicleSelector';
import { useGlobalState } from '../GlobalStateContext';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function HeroSection({ vehicleSelectorRef }) {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { 
    origin, setOrigin, 
    destination, setDestination, 
    selectedVehicle, setSelectedVehicle 
  } = useGlobalState();

  const handleOriginSave = (address, coordinates) => {
    setOrigin({ address, coordinates });
  };

  const handleDestinationSave = (address, coordinates) => {
    setDestination({ address, coordinates });
  };

  const handleVehicleSelect = (vehicle) => {
    setSelectedVehicle(vehicle);
  };

  const handleSearchClick = () => {
    navigate('/search-results');
  };

  return (
    <Box
      component="section"
      sx={{
        backgroundImage: 'url(/hero-background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: { xs: '500px', sm: '400px' },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        padding: { xs: '2rem 1rem', sm: '0 10%' },
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1,
        },
      }}
    >
      <Typography 
        variant="h1" 
        component="h1" 
        sx={{ 
          fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }, 
          fontWeight: 'bold', 
          marginBottom: { xs: '1.5rem', sm: '2rem' },
          textAlign: { xs: 'center', sm: 'left' },
          alignSelf: { xs: 'center', sm: 'flex-start' },
          width: '100%',
          zIndex: 2,
          position: 'relative',
        }}
      >
        Temukan Penawaran Pengiriman Terbaik dengan Armada Terpercaya
      </Typography>
      <Box
        component="form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSearchClick();
        }}
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: { xs: 'stretch', md: 'center' },
          backgroundColor: 'white',
          padding: { xs: '1rem', sm: '1.5rem' },
          borderRadius: '8px',
          width: '100%',
          maxWidth: '1200px',
          gap: { xs: '1rem', md: '0.5rem' },
          zIndex: 2,
          position: 'relative',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <AddressInput 
          label="Asal" 
          initialAddress={origin?.address || ''} 
          initialCoordinates={origin?.coordinates || null}
          onSave={handleOriginSave} 
        />
        <AddressInput 
          label="Tujuan" 
          initialAddress={destination?.address || ''} 
          initialCoordinates={destination?.coordinates || null}
          onSave={handleDestinationSave} 
        />
        <Box ref={vehicleSelectorRef}>
          <VehicleSelector 
            selectedVehicle={selectedVehicle} 
            onVehicleSelect={handleVehicleSelect} 
          />
        </Box>
        <Button 
          variant="contained" 
          type="submit"
          sx={{ 
            bgcolor: '#FF5722', 
            color: 'white', 
            flex: { xs: '1 1 auto', md: '0 0 auto' }, 
            whiteSpace: 'nowrap',
            textTransform: 'none',
            fontSize: { xs: '0.875rem', sm: '1rem' },
            padding: { xs: '0.75rem 1rem', sm: '0.75rem 1.5rem' },
            '&:hover': {
              bgcolor: '#E64A19',
            },
            transition: 'background-color 0.3s ease',
          }}
        >
          Cari Armada
        </Button>
      </Box>
    </Box>
  );
}

export default HeroSection;