import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Map from '../components/Map';

const Home: NextPage = () => {
  const vehicles = [
    { id: 1, name: 'Vehicle 1', lastLocation: { latitude: 40.7128, longitude: -74.0060 } },
    { id: 2, name: 'Vehicle 2', lastLocation: { latitude: 40.7128, longitude: -74.0050 } },
  ]; // Example data

  console.log('Home component rendered');

  return (
    <div>
      <Head>
        <title>Fleet Management App</title>
        <meta name="description" content="Manage your fleet with ease" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-center">
        <h1 className="text-4xl font-bold my-8">Welcome to Fleet Management</h1>
        <p className="text-xl mb-8">Efficiently manage and track your vehicle fleet</p>
        <div className="space-x-4">
          <Link href="/dashboard" className="btn-primary">
            Go to Dashboard
          </Link>
          <Link href="/vehicles" className="btn-secondary">
            View Vehicles
          </Link>
        </div>
        <div className="my-8">
          <Map vehicles={vehicles} />
        </div>
      </main>
    </div>
  );
};

export default Home;
