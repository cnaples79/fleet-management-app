import React from 'react';
import type { AppProps } from 'next/app';
import { ErrorBoundary } from '../components/ErrorBoundary';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}

// Add this error handler
if (typeof window !== 'undefined') {
  window.onerror = (message, source, lineno, colno, error) => {
    console.error('Global error caught:', { message, source, lineno, colno, error });
  };
}

export default MyApp;
