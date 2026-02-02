import React from 'react';

export default function PageHeader({ isDarkMode, toggleDarkMode }) {
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">HSBLI</h1>
        <p className="text-gray-600 dark:text-gray-400">Academic Performance Monitor</p>
      </div>
      
   
    </div>
  );
}
