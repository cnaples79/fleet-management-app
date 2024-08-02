import React from 'react';
import dynamic from 'next/dynamic';
import L from 'leaflet';

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

// Create the custom truck icon
const truckIcon = new L.Icon({
  iconUrl: '/truck-icon.png', // Ensure this path is correct relative to the public directory
  iconSize: [32, 32], // Adjust the size as necessary
  iconAnchor: [16, 32], // Point of the icon which will correspond to marker's location
  popupAnchor: [0, -32], // Point from which the popup should open relative to the iconAnchor
});

// Client-side only component
const ClientSideMap = dynamic(() => import('./ClientSideMap'), {
  ssr: false,
  loading: () => <p>Loading map...</p>
});

const Map: React.FC<MapProps> = ({ vehicles }) => {
  return <ClientSideMap vehicles={vehicles} icon={truckIcon} />;
};

export default Map;
