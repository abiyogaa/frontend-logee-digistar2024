import { useState, useEffect } from 'react';
import { useGlobalState } from '../GlobalStateContext';
import api from '../utils/api';

const useVehicleReviews = (vehicleId) => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const { setGlobalLoading } = useGlobalState();

  const fetchReviews = async () => {
    setGlobalLoading(true);
    try {
      const data = await api.get(`/api/vehicle/${vehicleId}/reviews`);
      setReviews(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setGlobalLoading(false);
    }
  };

  useEffect(() => {
    if (vehicleId) {
      fetchReviews();
    } else {
      setError('Invalid vehicle ID');
    }
  }, [vehicleId, setGlobalLoading]);

  return { reviews, error };
};

export default useVehicleReviews;