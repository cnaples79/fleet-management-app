import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Leaflet components only on the client side
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Import marker icons dynamically to avoid SSR issues
const iconUrl = require('leaflet/dist/images/marker-icon.png');
const shadowUrl = require('leaflet/dist/images/marker-shadow.png');

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
  const center: [number, number] = [40.7128, -74.0060]; // New York City coordinates
  const [defaultIcon, setDefaultIcon] = useState<L.Icon>();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Create and set the default icon only on the client-side
      const DefaultIcon = L.icon({
        iconUrl: iconUrl,
        shadowUrl: shadowUrl,
        iconSize: [25, 41],
        iconAnchor: [12, 41]
      });
      L.Marker.prototype.options.icon = DefaultIcon;
      setDefaultIcon(DefaultIcon);
    }
  }, []);

  return (
    <div>
      {defaultIcon && (
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
      )}
    </div>
  );
};

export default Map;
