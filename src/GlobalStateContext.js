import React, { createContext, useContext, useState } from 'react';

const GlobalStateContext = createContext();

export const useGlobalState = () => useContext(GlobalStateContext);

export const GlobalStateProvider = ({ children }) => {
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [globalLoading, setGlobalLoading] = useState(false);

  const value = {
    origin,
    setOrigin,
    destination,
    setDestination,
    selectedVehicle,
    setSelectedVehicle,
    globalLoading,
    setGlobalLoading,
  };

  return (
    <GlobalStateContext.Provider value={value}>
      {children}
    </GlobalStateContext.Provider>
  );
};