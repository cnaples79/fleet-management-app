import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Fleet Management
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-yellow-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/dashboard" className="hover:text-yellow-300">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/vehicles" className="hover:text-yellow-300">
              Vehicles
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
