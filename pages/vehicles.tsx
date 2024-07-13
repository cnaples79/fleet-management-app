import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import VehicleList from '../components/VehicleList';

interface Vehicle {
  id: number;
  name: string;
  type: string;
  status: string;
}

const Vehicles: NextPage = () => {
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
        <title>Vehicles - Fleet Management App</title>
        <meta name="description" content="Manage your fleet vehicles" />
      </Head>

      <h1 className="text-3xl font-bold mb-6">Vehicle Management</h1>
      
      <VehicleList vehicles={vehicles} />
    </div>
  );
};

export default Vehicles;
