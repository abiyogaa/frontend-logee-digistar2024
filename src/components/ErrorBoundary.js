import React from 'react';
import { Box, Typography, Button } from '@mui/material';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', p: 3 }}>
          <Typography variant="h4" gutterBottom>Oops! Something went wrong.</Typography>
          <Typography variant="body1" gutterBottom>We're sorry for the inconvenience. Please try again later.</Typography>
          <Button variant="contained" color="primary" onClick={() => window.location.reload()} sx={{ mt: 2 }}>
            Refresh Page
          </Button>
        </Box>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;