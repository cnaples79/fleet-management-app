import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { ErrorBoundary } from './ErrorBoundary';

interface Vehicle {
  id: number;
  name: string;
  lastLocation: {
    latitude: number;
    longitude: number;
  };
}

interface MapProps {
  vehicles: Vehicle[];
}

const ClientSideMap = dynamic(() => import('./ClientSideMap'), {
  ssr: false,
  loading: () => <p>Loading map...</p>
});

const Map: React.FC<MapProps> = ({ vehicles }) => {
  useEffect(() => {
    console.log('Map component mounted, vehicles:', vehicles);
  }, [vehicles]);

  if (!vehicles || vehicles.length === 0) {
    console.log('No vehicle data available in Map component');
    return <div>No vehicle data available.</div>;
  }

  return (
    <ErrorBoundary>
      <div>
        <p>Attempting to render ClientSideMap...</p>
        <ClientSideMap vehicles={vehicles} />
      </div>
    </ErrorBoundary>
  );
};

export default Map;
