import React, { useEffect, useState } from 'react';
import { ErrorBoundary } from './ErrorBoundary';
import dynamic from 'next/dynamic';

const TestComponent = dynamic(() => import('./TestComponent'), {
  ssr: false,
  loading: () => <p>Loading test component...</p>
});

const Dashboard: React.FC = () => {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log('Dashboard component mounted');
  }, []);

  console.log('Dashboard rendering');

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <ErrorBoundary>
      <div>
        <h1>Dashboard</h1>
        <TestComponent />
      </div>
    </ErrorBoundary>
  );
};

export default Dashboard;
