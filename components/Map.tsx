import React from 'react';
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
  console.log('Map component rendering, vehicles:', vehicles);

  if (!vehicles || vehicles.length === 0) {
    return <div>No vehicle data available.</div>;
  }

  return (
    <ErrorBoundary>
      <ClientSideMap vehicles={vehicles} />
    </ErrorBoundary>
  );
};

export default Map;
