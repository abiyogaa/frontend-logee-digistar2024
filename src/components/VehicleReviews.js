import React, { useMemo } from 'react';
import { Typography, Grid, Card, CardContent, Box, CircularProgress } from '@mui/material';
import useVehicleReviews from '../hooks/useVehicleReviews';

function VehicleReviews({ vehicleId }) {
  const { reviews, loading, error } = useVehicleReviews(vehicleId);

  const memoizedReviews = useMemo(() => {
    if (reviews.length === 0) return <Typography>No reviews available.</Typography>;

    return (
      <Grid container spacing={2}>
        {reviews.map((review) => (
          <Grid item xs={12} sm={4} key={review.id}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', mb: 1 }}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} style={{ color: star <= review.rating ? '#ffc107' : '#e0e0e0' }}>★</span>
                  ))}
                </Box>
                <Typography variant="h6" gutterBottom>{review.title}</Typography>
                <Typography variant="body2" gutterBottom>{review.content}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                  <Box sx={{ width: 32, height: 32, borderRadius: '50%', bgcolor: 'grey.300', mr: 1 }} />
                  <Typography variant="body2">{review.reviewerName}</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }, [reviews]);

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <>
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>Latest reviews</Typography>
      {memoizedReviews}
    </>
  );
}

export default React.memo(VehicleReviews);