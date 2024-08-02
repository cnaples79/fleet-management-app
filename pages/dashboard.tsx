import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import VehicleList from '../components/VehicleList';
import AddVehicleForm from '../components/AddVehicleForm';
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

// Dynamically import Map component with SSR disabled
const Map = dynamic(() => import('../components/Map'), {
  ssr: false, // Disable server-side rendering
  loading: () => <p>Loading map...</p>,
});

const Dashboard: NextPage = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  const fetchVehicles = async () => {
    const response = await fetch('/api/vehicles');
    const data = await response.json();
    setVehicles(data);
  };

  useEffect(() => {
    fetchVehicles();
  }, []);

  const activeVehicles = Array.isArray(vehicles)
    ? vehicles.filter(v => v.status === 'Active').length
    : 0;

  const inactiveVehicles = Array.isArray(vehicles)
    ? vehicles.filter(v => v.status === 'Inactive').length
    : 0;

  const alertVehicles = Array.isArray(vehicles)
    ? vehicles.filter(v => v.status === 'Alert').length
    : 0;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Head>
        <title>Dashboard - Fleet Management App</title>
        <meta name="description" content="Fleet management dashboard" />
      </Head>

      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          Fleet Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-6 rounded-lg shadow-md flex items-center transform transition duration-500 hover:scale-105">
            <Truck className="text-white mr-4" size={32} />
            <div>
              <p className="text-sm text-white">Active Vehicles</p>
              <p className="text-3xl font-bold text-white">{activeVehicles}</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-teal-500 p-6 rounded-lg shadow-md flex items-center transform transition duration-500 hover:scale-105">
            <Activity className="text-white mr-4" size={32} />
            <div>
              <p className="text-sm text-white">Total Vehicles</p>
              <p className="text-3xl font-bold text-white">{vehicles.length}</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-red-500 to-pink-500 p-6 rounded-lg shadow-md flex items-center transform transition duration-500 hover:scale-105">
            <AlertTriangle className="text-white mr-4" size={32} />
            <div>
              <p className="text-sm text-white">Alerts</p>
              <p className="text-3xl font-bold text-white">{alertVehicles}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
              Vehicle Locations
            </h2>
            <Map vehicles={vehicles} />
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
              Vehicle List
            </h2>
            <VehicleList vehicles={vehicles} />
          </div>

          <div className="md:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
              Add New Vehicle
            </h2>
            <AddVehicleForm onAddVehicle={fetchVehicles} />
          </div>
        </div>
      </div>
    </div>
  );
};


<div className="bg-blue-500 text-white p-4">
  Tailwind Test
</div>


export default Dashboard;
