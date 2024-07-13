import React from 'react';
import Link from 'next/link';
import { Moon, Sun } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          Fleet Management
        </Link>
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {darkMode ? <Sun className="text-yellow-400" size={24} /> : <Moon className="text-gray-600" size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
