import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import VehicleList from '../components/VehicleList';

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

const Vehicles: NextPage = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  useEffect(() => {
    fetchVehicles();
  }, []);

  const fetchVehicles = async () => {
    try {
      const response = await fetch('/api/vehicles');
      const data = await response.json();
      setVehicles(data);
    } catch (error) {
      console.error('Error fetching vehicles:', error);
    }
  };

  const deleteVehicle = async (id: number) => {
    if (confirm('Are you sure you want to delete this vehicle?')) {
      try {
        const response = await fetch(`/api/vehicles?id=${id}`, {
          method: 'DELETE',
        });
  
        if (response.ok) {
          setVehicles(vehicles.filter(vehicle => vehicle.id !== id));
        } else {
          let errorMessage = 'Failed to delete vehicle';
          try {
            const errorData = await response.json();
            errorMessage = errorData.message || errorMessage;
          } catch (jsonError) {
            console.error('Error parsing JSON:', jsonError);
          }
          console.error('Error response:', response.status, response.statusText);
          alert(errorMessage);
        }
      } catch (error) {
        console.error('Error deleting vehicle:', error);
        alert('An error occurred while deleting the vehicle');
      }
    }
  };

  return (
    <div>
      <Head>
        <title>Vehicles - Fleet Management App</title>
        <meta name="description" content="Manage your fleet vehicles" />
      </Head>

      <h1 className="text-3xl font-bold mb-6">Vehicle Management</h1>
      
      <VehicleList vehicles={vehicles} onDeleteVehicle={deleteVehicle} />
    </div>
  );
};

export default Vehicles;
