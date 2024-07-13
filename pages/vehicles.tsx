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
    const fetchVehicles = async () => {
      try {
        const response = await fetch('/api/vehicles');
        const data = await response.json();
        setVehicles(data);
      } catch (error) {
        console.error('Error fetching vehicles:', error);
      }
    };

    fetchVehicles();
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
