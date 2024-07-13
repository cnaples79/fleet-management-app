import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

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

const XIcon = React.lazy(() => import('lucide-react').then(mod => ({ default: mod.X })));

const VehicleDetailsModal: React.FC<VehicleDetailsModalProps> = ({ vehicle, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold dark:text-white">{vehicle.name}</h2>
          <Suspense fallback={<div>Loading...</div>}>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
              <XIcon size={24} />
            </button>
          </Suspense>
        </div>
        <div className="space-y-4 dark:text-gray-300">
          <p><strong>Type:</strong> {vehicle.type}</p>
          <p><strong>Status:</strong> {vehicle.status}</p>
          <p><strong>Location:</strong> {vehicle.lastLocation.latitude.toFixed(6)}, {vehicle.lastLocation.longitude.toFixed(6)}</p>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetailsModal;
