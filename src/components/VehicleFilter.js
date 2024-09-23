import React from 'react';
import { Grid, TextField } from '@mui/material';

function VehicleFilter({ filterCriteria, handleFilterChange }) {
  return (
    <Grid container spacing={2} sx={{ mb: 2 }}>
      <Grid item xs={12} sm={6} md={2}>
        <TextField
          fullWidth
          label="Item Length (cm)"
          name="itemLength"
          value={filterCriteria.itemLength}
          onChange={handleFilterChange}
          type="number"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={2}>
        <TextField
          fullWidth
          label="Item Width (cm)"
          name="itemWidth"
          value={filterCriteria.itemWidth}
          onChange={handleFilterChange}
          type="number"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={2}>
        <TextField
          fullWidth
          label="Item Height (cm)"
          name="itemHeight"
          value={filterCriteria.itemHeight}
          onChange={handleFilterChange}
          type="number"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={2}>
        <TextField
          fullWidth
          label="Item Weight (kg)"
          name="itemWeight"
          value={filterCriteria.itemWeight}
          onChange={handleFilterChange}
          type="number"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={2}>
        <TextField
          fullWidth
          label="Number of Items"
          name="itemCount"
          value={filterCriteria.itemCount}
          onChange={handleFilterChange}
          type="number"
        />
      </Grid>
    </Grid>
  );
}

export default VehicleFilter;