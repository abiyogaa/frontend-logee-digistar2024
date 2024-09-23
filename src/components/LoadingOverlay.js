import React from 'react';
import { Backdrop, CircularProgress } from '@mui/material';
import { useGlobalState } from '../GlobalStateContext';

const LoadingOverlay = () => {
  const { globalLoading } = useGlobalState();

  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={globalLoading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default LoadingOverlay;