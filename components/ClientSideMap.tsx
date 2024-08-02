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
  const center: [number, number] = [35.2228, -80.8060]; // Charlotte, NC coordinates
  const [truckIcon, setTruckIcon] = useState<L.Icon | null>(null);

  useEffect(() => {
    // Set up the custom truck icon
    const TruckIcon = L.icon({
      iconUrl: '/truck-icon.png', // Ensure the truck icon is in the public folder
      iconSize: [32, 32], // Adjust size as necessary
      iconAnchor: [16, 32], // Point of the icon which will correspond to marker's location
      popupAnchor: [0, -32], // Point from which the popup should open relative to the iconAnchor
    });
    setTruckIcon(TruckIcon);
  }, []);

  if (!truckIcon) {
    return <div>Loading map...</div>;
  }

  return (
    <MapContainer center={center} zoom={10} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {Array.isArray(vehicles) && vehicles.map((vehicle) => (
        <Marker
          key={vehicle.id}
          position={[vehicle.lastLocation.latitude, vehicle.lastLocation.longitude]}
          icon={truckIcon} // Use the custom truck icon here
        >
          <Popup>{vehicle.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default ClientSideMap;
