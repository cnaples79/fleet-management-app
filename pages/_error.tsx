import React from 'react';
import { NextPageContext } from 'next';

interface ErrorProps {
  statusCode?: number;
}

const Error: React.FC<ErrorProps> = ({ statusCode }) => {
  console.log('Error page rendering, statusCode:', statusCode);
  return (
    <div>
      <h1>Error {statusCode}</h1>
      <p>Sorry, there was an error.</p>
    </div>
  );
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  console.error('Error occurred:', err);
  return { statusCode };
};

export default Error;
