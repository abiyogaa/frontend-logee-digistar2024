import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const ErrorView = ({ message, action }) => {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          textAlign: 'center',
        }}
      >
        <ErrorOutlineIcon sx={{ fontSize: 64, color: 'error.main', mb: 2 }} />
        <Typography variant="h4" component="h1" gutterBottom>
          Oops! Something went wrong
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          {message || 'An unexpected error occurred.'}
        </Typography>
        {action ? (
          action
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={() => window.location.reload()}
            sx={{ mt: 2 }}
          >
            Try Again
          </Button>
        )}
      </Box>
    </Container>
  );
};

export default ErrorView;