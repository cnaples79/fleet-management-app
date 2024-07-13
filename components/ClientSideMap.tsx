import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';

// Types for our props
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
  const center: [number, number] = [40.7128, -74.0060]; // New York City coordinates
  const [defaultIcon, setDefaultIcon] = useState<L.Icon | null>(null);

  useEffect(() => {
    // Import marker icons dynamically to avoid SSR issues
    const iconUrl = require('leaflet/dist/images/marker-icon.png').default;
    const shadowUrl = require('leaflet/dist/images/marker-shadow.png').default;

    // Create and set the default icon
    const DefaultIcon = L.icon({
      iconUrl: iconUrl.src,
      shadowUrl: shadowUrl.src,
      iconSize: [25, 41],
      iconAnchor: [12, 41]
    });
    setDefaultIcon(DefaultIcon);
  }, []);

  if (!defaultIcon) {
    return <div>Loading map...</div>;
  }

  return (
    <MapContainer center={center} zoom={10} style={{ height: '400px', width: '100%' }}>
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
  );
};

export default ClientSideMap;
