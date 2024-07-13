import React from 'react';
import VehicleCard from './VehicleCard';

interface Vehicle {
  id: number;
  name: string;
  type: string;
  status: string;
}

interface VehicleListProps {
  vehicles: Vehicle[];
}

const VehicleList: React.FC<VehicleListProps> = ({ vehicles }) => {
  return (
    <div className="space-y-4">
      {vehicles.map(vehicle => (
        <VehicleCard key={vehicle.id} vehicle={vehicle} />
      ))}
    </div>
  );
};

export default VehicleList;
