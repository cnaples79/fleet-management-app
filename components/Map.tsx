import React from 'react';
import ClientSideMap from './ClientSideMap';

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

const Map: React.FC<MapProps> = ({ vehicles }) => {
  return <ClientSideMap vehicles={vehicles} />;
};

export default Map;
