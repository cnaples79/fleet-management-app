import React, { useEffect, useState } from 'react';
import { ErrorBoundary } from './ErrorBoundary';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('./Map'), {
  ssr: false,
  loading: () => <p>Loading map component...</p>
});

interface Vehicle {
  id: number;
  name: string;
  lastLocation: {
    latitude: number;
    longitude: number;
  };
}

const Dashboard: React.FC = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        // Replace this with your actual API call
        const response = await fetch('/api/vehicles');
        const data = await response.json();
        console.log('Fetched vehicles:', data);
        setVehicles(data);
      } catch (err) {
        console.error('Error fetching vehicles:', err);
        setError('Failed to fetch vehicle data');
      }
    };

    fetchVehicles();
  }, []);

  console.log('Dashboard rendering, vehicles:', vehicles);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <ErrorBoundary>
      <div>
        <h1>Dashboard</h1>
        {vehicles.length > 0 ? (
          <Map vehicles={vehicles} />
        ) : (
          <p>Loading vehicle data...</p>
        )}
      </div>
    </ErrorBoundary>
  );
};

export default Dashboard;
