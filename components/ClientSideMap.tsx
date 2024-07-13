import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
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
        >
          <Popup>{vehicle.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default ClientSideMap;
