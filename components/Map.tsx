import React from 'react';
import dynamic from 'next/dynamic';

// Types for our props
interface MapProps {
  vehicles: Array<{
    id: number;
    name: string;
    lastLocation: {
      latitude: number;
      longitude: number;
    };
  }>;
}

// Client-side only component
const ClientSideMap = dynamic(() => import('./ClientSideMap'), {
  ssr: false,
  loading: () => <p>Loading map...</p>
});

const Map: React.FC<MapProps> = ({ vehicles }) => {
  return <ClientSideMap vehicles={vehicles} />;
};

export default Map;
