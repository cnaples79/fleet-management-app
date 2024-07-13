import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { house, BarChart2, Truck, Settings } from 'lucide-react';

interface SidebarProps {
  darkMode: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ darkMode }) => {
  const router = useRouter();

  const isActive = (path: string) => router.pathname === path;

  return (
    <nav className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'} w-64 min-h-screen p-4 transition-colors duration-200`}>
      <div className="text-2xl font-bold mb-8">Fleet Manager</div>
      <ul>
        <li className="mb-4">
          <Link href="/" className={`flex items-center ${isActive('/') ? 'text-blue-500' : 'hover:text-blue-500'}`}>
            <house className="mr-2" size={20} />
            house
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/dashboard" className={`flex items-center ${isActive('/dashboard') ? 'text-blue-500' : 'hover:text-blue-500'}`}>
            <BarChart2 className="mr-2" size={20} />
            Dashboard
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/vehicles" className={`flex items-center ${isActive('/vehicles') ? 'text-blue-500' : 'hover:text-blue-500'}`}>
            <Truck className="mr-2" size={20} />
            Vehicles
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/settings" className={`flex items-center ${isActive('/settings') ? 'text-blue-500' : 'hover:text-blue-500'}`}>
            <Settings className="mr-2" size={20} />
            Settings
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
