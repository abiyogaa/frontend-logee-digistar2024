import React, { useState } from 'react';
import { Typography, Box, Button, Grid, Accordion, AccordionSummary, AccordionDetails, Snackbar } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function VehicleInfo({ vehicle }) {
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleOrderClick = () => {
    setShowSnackbar(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setShowSnackbar(false);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Box sx={{ width: '100%', paddingTop: '75%', position: 'relative'}}>
          <img
            src={vehicle.photos[0] || 'placeholder-image-url'}
            alt={`${vehicle.brand} ${vehicle.model}`}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
          />
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h5" gutterBottom>{`${vehicle.brand} ${vehicle.model} - ${vehicle.fleet.name}`}</Typography>
        <Box sx={{ display: 'inline-block', bgcolor: '#e8f5e9', color: '#2e7d32', px: 1, py: 0.5, borderRadius: 1, mb: 1 }}>
          <Typography variant="body2">{vehicle.serviceType === 'drop-off' ? 'Drop Off' : 'Collection'}</Typography>
        </Box>
        <Typography variant="h4" color="primary" gutterBottom>${vehicle.pricePerMile}/mile</Typography>
        <Typography variant="body2" gutterBottom>Deskripsi Truck</Typography>
        <Typography variant="body2" gutterBottom>
          Max Weight: {vehicle.maxWeight} Ton | Max Dimension: {vehicle.maxDimensions.length} x {vehicle.maxDimensions.width} x {vehicle.maxDimensions.height} cm
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          fullWidth 
          sx={{ mt: 2, bgcolor: '#212121', '&:hover': { bgcolor: '#424242' } }}
          onClick={handleOrderClick}
        >
          Order
        </Button>
        
        <Accordion sx={{ mt: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Deskripsi Detail</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {vehicle.description || 'No detailed description available.'}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={showSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="Feature coming soon!"
      />
    </Grid>
  );
}

export default VehicleInfo;