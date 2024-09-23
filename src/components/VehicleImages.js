import React from 'react';
import { Grid } from '@mui/material';

function VehicleImages({ photos }) {
  const additionalPhotos = photos.slice(1);

  if (additionalPhotos.length === 0) {
    return null;
  }

  if (additionalPhotos.length === 1) {
    return (
      <Grid container justifyContent="center" sx={{ mt: 3 }}>
        <Grid item xs={12} sm={6} md={4}>
          <img
            src={additionalPhotos[0]}
            alt="Additional vehicle image"
            style={{ width: '100%', height: '200px', objectFit: 'contain', borderRadius: '4px' }}
          />
        </Grid>
      </Grid>
    );
  }

  return (
    <Grid container spacing={2} sx={{ mt: 3 }}>
      {additionalPhotos.map((photo, index) => (
        <Grid item xs={6} key={index}>
          <img
            src={photo}
            alt={`Additional vehicle image ${index + 1}`}
            style={{ width: '100%', height: '200px', objectFit: 'contain', borderRadius: '4px' }}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default VehicleImages;