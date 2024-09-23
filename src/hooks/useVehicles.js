import { useState, useEffect } from 'react';
import api from '../utils/api';

const useVehicles = (origin, selectedVehicle, activeTab, filterCriteria) => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVehicles = async () => {
      setLoading(true);
      setError(null);
      try {
        if (!origin || !origin.coordinates) {
          throw new Error('Origin coordinates are not available');
        }
        const [longitude, latitude] = origin.coordinates;
        if (!isValidCoordinate(latitude) || !isValidCoordinate(longitude)) {
          throw new Error('Invalid coordinates');
        }

        let endpoint = '/api/vehicle/nearby';
        const params = new URLSearchParams({
          latitude: latitude.toString(),
          longitude: longitude.toString(),
          type: activeTab
        });

        if (selectedVehicle) {
          params.append('brand', selectedVehicle.brand);
          if (selectedVehicle.model) {
            params.append('model', selectedVehicle.model);
          }
        }

        Object.entries(filterCriteria).forEach(([key, value]) => {
          if (value) params.append(key, value.toString());
        });

        endpoint += `?${params.toString()}`;

        const data = await api.get(endpoint);
        setVehicles(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVehicles();
  }, [origin, selectedVehicle, activeTab, filterCriteria]);

  const isValidCoordinate = (coord) => {
    return typeof coord === 'number' && !isNaN(coord) && isFinite(coord);
  };

  return { vehicles, loading, error };
};

export default useVehicles;