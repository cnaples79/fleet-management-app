import React, { useState } from 'react';
import VehicleDetailsModal from './VehicleDetailsModal';

interface Vehicle {
  id: number;
  name: string;
  type: string;
  status: string;
  lastLocation: {
    latitude: number;
    longitude: number;
  };
}

interface VehicleCardProps {
  vehicle: Vehicle;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle }) => {
  const [showModal, setShowModal] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'text-green-600';
      case 'Inactive':
        return 'text-red-600';
      default:
        return 'text-yellow-600';
    }
  };

  return (
    <>
      <div className="bg-white shadow-md rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setShowModal(true)}>
        <h3 className="text-xl font-semibold mb-2">{vehicle.name}</h3>
        <p className="text-gray-600 mb-1">Type: {vehicle.type}</p>
        <p className="text-gray-600 mb-1">Status: 
          <span className={`font-semibold ${getStatusColor(vehicle.status)}`}>
            {vehicle.status}
          </span>
        </p>
      </div>
      {showModal && (
        <VehicleDetailsModal vehicle={vehicle} onClose={() => setShowModal(false)} />
      )}
    </>
  );
};

export default VehicleCard;
