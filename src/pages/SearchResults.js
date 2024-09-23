import React, { useState } from 'react';
import { Box, Grid, Typography, Tabs, Tab, Button } from '@mui/material';
import SideNav from '../components/SideNav';
import HeroSection from '../components/HeroSection';
import VehicleFilter from '../components/VehicleFilter';
import VehicleList from '../components/VehicleList';
import useVehicles from '../hooks/useVehicles';
import { useGlobalState } from '../GlobalStateContext';
import ErrorView from '../components/ErrorView';
import { useNavigate } from 'react-router-dom';

function SearchResults() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('collection');
  const [filterCriteria, setFilterCriteria] = useState({
    itemLength: '',
    itemWidth: '',
    itemHeight: '',
    itemWeight: '',
    itemCount: '',
  });
  const { origin, selectedVehicle } = useGlobalState();
  const { vehicles, loading, error } = useVehicles(origin, selectedVehicle, activeTab, filterCriteria);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleFilterChange = (event) => {
    setFilterCriteria({
      ...filterCriteria,
      [event.target.name]: event.target.value,
    });
  };

  const handleViewVehicle = (vehicle) => {
    navigate(`/vehicle/${vehicle._id}`, { state: { vehicle } });
  };

  if (!origin) {
    return (
      <ErrorView
        message="Origin coordinates are not available. Please select an origin on the homepage."
        action={
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/')}
          >
            Go to Homepage
          </Button>
        }
      />
    );
  }

  if (error) {
    return <ErrorView message={error} />;
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <SideNav />
      <Box sx={{ flexGrow: 1 }}>
        <HeroSection />
        <Box sx={{ p: 3 }}>
          <Tabs value={activeTab} onChange={handleTabChange} sx={{ mb: 2 }}>
            <Tab label="Collection" value="collection" />
            <Tab label="Drop-off" value="drop-off" />
          </Tabs>
          <VehicleFilter filterCriteria={filterCriteria} handleFilterChange={handleFilterChange} />
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <VehicleList vehicles={vehicles} onViewVehicle={handleViewVehicle} />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default SearchResults;
