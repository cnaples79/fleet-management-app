import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Home, BarChart2, Truck, Settings } from 'lucide-react';

const Sidebar: React.FC = () => {
  const router = useRouter();

  const isActive = (path: string) => router.pathname === path;

  return (
    <nav className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <div className="text-2xl font-bold mb-8">Fleet Manager</div>
      <ul>
        <li className="mb-4">
          <Link href="/" className={`flex items-center ${isActive('/') ? 'text-blue-400' : 'hover:text-blue-400'}`}>
            <Home className="mr-2" size={20} />
            Home
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/dashboard" className={`flex items-center ${isActive('/dashboard') ? 'text-blue-400' : 'hover:text-blue-400'}`}>
            <BarChart2 className="mr-2" size={20} />
            Dashboard
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/vehicles" className={`flex items-center ${isActive('/vehicles') ? 'text-blue-400' : 'hover:text-blue-400'}`}>
            <Truck className="mr-2" size={20} />
            Vehicles
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/settings" className={`flex items-center ${isActive('/settings') ? 'text-blue-400' : 'hover:text-blue-400'}`}>
            <Settings className="mr-2" size={20} />
            Settings
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
