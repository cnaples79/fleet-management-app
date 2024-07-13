import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
