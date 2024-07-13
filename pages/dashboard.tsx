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
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        // Replace this with your actual API call
        const response = await fetch('/api/vehicles');
        const data = await response.json();
        console.log('Fetched vehicles:', data);
        setVehicles(data);
        setStage(1);
      } catch (err) {
        console.error('Error fetching vehicles:', err);
        setError('Failed to fetch vehicle data');
      }
    };

    fetchVehicles();
  }, []);

  console.log('Dashboard rendering, stage:', stage, 'vehicles:', vehicles);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <ErrorBoundary>
      <div>
        <h1>Dashboard</h1>
        {stage === 0 && <p>Loading vehicle data...</p>}
        {stage === 1 && (
          <>
            <p>Vehicle data loaded. Attempting to render map...</p>
            <Map vehicles={vehicles} />
          </>
        )}
      </div>
    </ErrorBoundary>
  );
};

export default Dashboard;
