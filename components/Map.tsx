import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

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
  const [mapLoaded, setMapLoaded] = useState(false);
  const center: [number, number] = [40.7128, -74.0060]; // New York City coordinates

  useEffect(() => {
    if (typeof window !== 'undefined') {
      let DefaultIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow,
        iconSize: [25, 41],
        iconAnchor: [12, 41]
      });

      L.Marker.prototype.options.icon = DefaultIcon;
      setMapLoaded(true);
    }
  }, []);

  return (
    <div>
      {mapLoaded && (
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
              <Popup>
                {vehicle.name}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      )}
    </div>
  );
};

export default Map;
