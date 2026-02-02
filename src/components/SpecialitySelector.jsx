import React from 'react';
import { specialities } from '../data/specialities';

export default function SpecialitySelector({ activeSpeciality, setActiveSpeciality }) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {specialities.map((speciality) => (
        <button
          key={speciality.id}
          onClick={() => setActiveSpeciality(speciality.id)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeSpeciality === speciality.id
              ? 'bg-blue-600 text-white'
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-700'
          }`}
        >
          {speciality.name}
        </button>
      ))}
    </div>
  );
}
