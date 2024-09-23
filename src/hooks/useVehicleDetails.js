import { useState, useEffect } from 'react';
import { useGlobalState } from '../GlobalStateContext';
import api from '../utils/api';

const useVehicleDetails = (id) => {
  const [vehicle, setVehicle] = useState(null);
  const [error, setError] = useState(null);
  const { setGlobalLoading } = useGlobalState();

  useEffect(() => {
    const fetchVehicleDetails = async () => {
      setGlobalLoading(true);
      try {
        const data = await api.get(`/api/vehicle/details/${encodeURIComponent(id)}`);
        setVehicle(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setGlobalLoading(false);
      }
    };

    if (id) {
      fetchVehicleDetails();
    } else {
      setError('Invalid vehicle ID');
    }
  }, [id, setGlobalLoading]);

  return { vehicle, error };
};

export default useVehicleDetails;