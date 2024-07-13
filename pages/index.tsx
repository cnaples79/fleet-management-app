import React from 'react';
import dynamic from 'next/dynamic';
import { ErrorBoundary } from '../components/ErrorBoundary';

const Dashboard = dynamic(() => import('../components/Dashboard'), {
  ssr: false,
  loading: () => <p>Loading dashboard...</p>
});

const Home: React.FC = () => {
  console.log('Home page rendering');
  return (
    <ErrorBoundary>
      <div>
        <h1>Fleet Management App</h1>
        <Dashboard />
      </div>
    </ErrorBoundary>
  );
};

export default Home;
