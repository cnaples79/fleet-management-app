import type { NextPage } from 'next';
import Head from 'next/head';
import Map from '../components/Map';
import VehicleList from '../components/VehicleList';
import { useEffect, useState } from 'react';
import { Truck, Activity, AlertTriangle } from 'lucide-react';

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

const Dashboard: NextPage = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  useEffect(() => {
    fetch('/api/vehicles')
      .then(response => response.json())
      .then(data => setVehicles(data));
  }, []);

  const activeVehicles = vehicles.filter(v => v.status === 'Active').length;
  const inactiveVehicles = vehicles.filter(v => v.status === 'Inactive').length;
  const alertVehicles = vehicles.filter(v => v.status === 'Alert').length;

  return (
    <div>
      <Head>
        <title>Dashboard - Fleet Management App</title>
        <meta name="description" content="Fleet management dashboard" />
      </Head>

      <h1 className="text-3xl font-bold mb-6 dark:text-white">Fleet Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow flex items-center">
          <Truck className="text-blue-500 dark:text-blue-400 mr-4" size={24} />
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Active Vehicles</p>
            <p className="text-2xl font-bold dark:text-white">{activeVehicles}</p>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow flex items-center">
          <Activity className="text-green-500 dark:text-green-400 mr-4" size={24} />
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Total Vehicles</p>
            <p className="text-2xl font-bold dark:text-white">{vehicles.length}</p>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow flex items-center">
          <AlertTriangle className="text-red-500 dark:text-red-400 mr-4" size={24} />
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Alerts</p>
            <p className="text-2xl font-bold dark:text-white">{alertVehicles}</p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl font-semibold mb-4 dark:text-white">Vehicle Locations</h2>
          <Map vehicles={vehicles} />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4 dark:text-white">Vehicle List</h2>
          <VehicleList vehicles={vehicles} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
