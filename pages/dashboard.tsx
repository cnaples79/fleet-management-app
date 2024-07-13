import type { NextPage } from 'next';
import Head from 'next/head';
import Map from '../components/Map';
import VehicleList from '../components/VehicleList';
import { useEffect, useState } from 'react';

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
    // Fetch vehicles data from API
    fetch('/api/vehicles')
      .then(response => response.json())
      .then(data => setVehicles(data));
  }, []);

  return (
    <div>
      <Head>
        <title>Dashboard - Fleet Management App</title>
        <meta name="description" content="Fleet management dashboard" />
      </Head>

      <h1 className="text-3xl font-bold mb-6">Fleet Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Vehicle Locations</h2>
          <Map vehicles={vehicles} />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Vehicle List</h2>
          <VehicleList vehicles={vehicles} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
