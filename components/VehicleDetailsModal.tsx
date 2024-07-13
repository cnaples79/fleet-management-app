import React from 'react';
import { X } from 'lucide-react';

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

interface VehicleDetailsModalProps {
  vehicle: Vehicle;
  onClose: () => void;
}

const VehicleDetailsModal: React.FC<VehicleDetailsModalProps> = ({ vehicle, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{vehicle.name}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        <div className="space-y-4">
          <p><strong>Type:</strong> {vehicle.type}</p>
          <p><strong>Status:</strong> {vehicle.status}</p>
          <p><strong>Location:</strong> {vehicle.lastLocation.latitude.toFixed(6)}, {vehicle.lastLocation.longitude.toFixed(6)}</p>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetailsModal;
