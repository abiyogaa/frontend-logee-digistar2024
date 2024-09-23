import React from 'react';
import { Box, CircularProgress } from '@mui/material';
import VehicleInfo from './VehicleInfo';
import VehicleImages from './VehicleImages';
import VehicleReviews from './VehicleReviews';
import ErrorView from './ErrorView';

function VehicleContent({ vehicle, loading, error, id }) {
  if (loading) return <CircularProgress />;
  if (error) return <ErrorView message={error} />;
  if (!vehicle) return <ErrorView message="No vehicle data available." />;

  return (
    <Box sx={{ p: 3 }}>
      <VehicleInfo vehicle={vehicle} />
      <VehicleImages photos={vehicle.photos} />
      <VehicleReviews vehicleId={id} />
    </Box>
  );
}

export default React.memo(VehicleContent);