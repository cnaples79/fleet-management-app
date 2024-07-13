// @ts-nocheck
// components/Sidebar.tsx
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Icon from './Icon';

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
            <Icon name="house" className="mr-2" size={20} />
            Home
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/dashboard" className={`flex items-center ${isActive('/dashboard') ? 'text-blue-500' : 'hover:text-blue-500'}`}>
            <Icon name="barChart2" className="mr-2" size={20} />
            Dashboard
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/vehicles" className={`flex items-center ${isActive('/vehicles') ? 'text-blue-500' : 'hover:text-blue-500'}`}>
            <Icon name="truck" className="mr-2" size={20} />
            Vehicles
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/settings" className={`flex items-center ${isActive('/settings') ? 'text-blue-500' : 'hover:text-blue-500'}`}>
            <Icon name="settings" className="mr-2" size={20} />
            Settings
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
