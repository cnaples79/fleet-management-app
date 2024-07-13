import React from 'react';

interface Vehicle {
  id: number;
  name: string;
  type: string;
  status: string;
}

interface VehicleCardProps {
  vehicle: Vehicle;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-xl font-semibold mb-2">{vehicle.name}</h3>
      <p className="text-gray-600 mb-1">Type: {vehicle.type}</p>
      <p className="text-gray-600 mb-1">Status: 
        <span className={`font-semibold ${
          vehicle.status === 'Active' ? 'text-green-600' : 
          vehicle.status === 'Inactive' ? 'text-red-600' : 
          'text-yellow-600'
        }`}>
          {vehicle.status}
        </span>
      </p>
    </div>
  );
};

export default VehicleCard;
