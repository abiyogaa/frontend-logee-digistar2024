import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Grid, useMediaQuery, useTheme } from '@mui/material';

function VehicleList({ vehicles, onViewVehicle }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  if (vehicles.length === 0) {
    return <Typography>No vehicles found.</Typography>;
  }

  return (
    <Grid container spacing={2}>
      {vehicles.map((vehicle) => (
        <Grid item xs={12} sm={6} md={4} key={vehicle._id}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia
              component="img"
              sx={{ height: 200, objectFit: 'contain' }}
              image={vehicle.photos[0] || 'placeholder-image-url'}
              alt={`${vehicle.brand} ${vehicle.model}`}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h6" gutterBottom>
                {`${vehicle.brand} ${vehicle.model} - ${vehicle.fleet.name}`}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Kapasitas muatan {vehicle.maxWeight} ton
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Dimensi: {vehicle.maxDimensions.length} x {vehicle.maxDimensions.width} x {vehicle.maxDimensions.height} centi meter
              </Typography>
              <Button 
                variant="outlined" 
                sx={{ mt: 2 }} 
                onClick={() => onViewVehicle(vehicle)}
                fullWidth={isMobile}
              >
                View
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default VehicleList;