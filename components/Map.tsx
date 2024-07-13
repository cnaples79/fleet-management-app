import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

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

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 40.7128,
  lng: -74.0060
};

const Map: React.FC<MapProps> = ({ vehicles }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''
  });

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
    >
      {vehicles.map((vehicle) => (
        <Marker
          key={vehicle.id}
          position={{
            lat: vehicle.lastLocation.latitude,
            lng: vehicle.lastLocation.longitude
          }}
          title={vehicle.name}
        />
      ))}
    </GoogleMap>
  ) : <></>
};

export default React.memo(Map);
