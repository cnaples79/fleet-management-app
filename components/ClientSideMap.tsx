import React, { useEffect } from 'react';

interface Vehicle {
  id: number;
  name: string;
  lastLocation: {
    latitude: number;
    longitude: number;
  };
}

interface ClientSideMapProps {
  vehicles: Vehicle[];
}

const ClientSideMap: React.FC<ClientSideMapProps> = ({ vehicles }) => {
  useEffect(() => {
    console.log('ClientSideMap component mounted, vehicles:', vehicles);
  }, [vehicles]);

  console.log('ClientSideMap rendering, vehicles:', vehicles);

  return (
    <div style={{ height: '400px', width: '100%', border: '1px solid black' }}>
      <h2>Map Placeholder</h2>
      <ul>
        {vehicles.map((vehicle) => {
          console.log('Rendering vehicle:', vehicle);
          return (
            <li key={vehicle.id}>
              {vehicle.name}: Lat {vehicle.lastLocation.latitude}, Lon {vehicle.lastLocation.longitude}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ClientSideMap;
