import React, { Suspense } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'; // Add this import
import ErrorBoundary from './components/ErrorBoundary';
import LoadingOverlay from './components/LoadingOverlay';
import LoadingSpinner from './components/LoadingSpinner';
import { GlobalStateProvider } from './GlobalStateContext';
import theme from './theme';

const HomePage = React.lazy(() => import('./pages/HomePage'));
const SearchResults = React.lazy(() => import('./pages/SearchResults'));
const VehicleDetails = React.lazy(() => import('./pages/VehicleDetails'));

function App() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStateProvider>
          <Router>
            <ErrorBoundary>
              <div className="App">
                <Header />
                <LoadingOverlay />
                <Suspense fallback={<LoadingSpinner />}>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/search-results" element={<SearchResults />} />
                    <Route path="/vehicle/:id" element={<VehicleDetails />} />
                  </Routes>
                </Suspense>
                <Footer />
              </div>
            </ErrorBoundary>
          </Router>
        </GlobalStateProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;