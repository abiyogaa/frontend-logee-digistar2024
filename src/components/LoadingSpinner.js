import React from 'react';
import { CircularProgress, Box, Typography } from '@mui/material';

const LoadingSpinner = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            height="100vh"
        >
            <CircularProgress size={60} thickness={4} />
            <Typography variant="h6" style={{ marginTop: '20px' }}>
                Loading...
            </Typography>
        </Box>
    );
};

export default LoadingSpinner;