import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Leaflet components
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

import L from 'leaflet';

import 'leaflet/dist/leaflet.css';

interface ClientSideMapProps {
  vehicles: Array<{
    id: number;
    name: string;
    lastLocation: {
      latitude: number;
      longitude: number;
    };
  }>;
}

const ClientSideMap: React.FC<ClientSideMapProps> = ({ vehicles }) => {
  const center: [number, number] = [40.7128, -74.0060];
  const [defaultIcon, setDefaultIcon] = useState<L.Icon | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      console.log('Importing marker icons...');
      const iconUrl = require('leaflet/dist/images/marker-icon.png').default;
      const shadowUrl = require('leaflet/dist/images/marker-shadow.png').default;

      console.log('Creating default icon...');
      const DefaultIcon = L.icon({
        iconUrl: iconUrl.src,
        shadowUrl: shadowUrl.src,
        iconSize: [25, 41],
        iconAnchor: [12, 41]
      });
      setDefaultIcon(DefaultIcon);
      console.log('Default icon created successfully.');
    } catch (err) {
      console.error('Error setting up map icon:', err);
      setError('Failed to load map resources. Please try again later.');
    }
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!defaultIcon) {
    return <div>Loading map...</div>;
  }

  console.log('Rendering map...');
  console.log('MapContainer:', MapContainer);
  console.log('TileLayer:', TileLayer);
  console.log('Marker:', Marker);
  console.log('Popup:', Popup);

  return (
    <div style={{ height: '400px', width: '100%' }}>
      <MapContainer center={center} zoom={10} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {vehicles.map((vehicle) => (
          <Marker
            key={vehicle.id}
            position={[vehicle.lastLocation.latitude, vehicle.lastLocation.longitude]}
            icon={defaultIcon}
          >
            <Popup>{vehicle.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default ClientSideMap;
