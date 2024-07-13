import React, { useState } from 'react';
import VehicleCard from './VehicleCard';
import { Search, Filter } from 'lucide-react';

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

interface VehicleListProps {
  vehicles: Vehicle[];
}

const VehicleList: React.FC<VehicleListProps> = ({ vehicles }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const filteredVehicles = vehicles.filter(vehicle => 
    vehicle.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (statusFilter === 'All' || vehicle.status === statusFilter)
  );

  return (
    <div>
      <div className="mb-4 flex space-x-4">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search vehicles..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
        <div className="relative">
          <select
            className="pl-10 pr-4 py-2 border rounded-lg appearance-none"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="Alert">Alert</option>
          </select>
          <Filter className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
      </div>
      <div className="space-y-4">
        {filteredVehicles.map(vehicle => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>
    </div>
  );
};

export default VehicleList;
