import React from 'react';
import { getGradeColor } from '../utils/styleHelpers';

export default function StatsSection({ currentSpeciality, calculateOverallGrade, calculateModuleAverage }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 mb-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Overall Avg</p>
          <p className={`text-xl font-bold ${getGradeColor(calculateOverallGrade(currentSpeciality))}`}>
            {calculateOverallGrade(currentSpeciality)}
          </p>
        </div>
        
        <div className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Module Avg</p>
          <p className="text-xl font-bold text-gray-900 dark:text-white">
            {calculateModuleAverage(currentSpeciality)}
          </p>
        </div>
        
        <div className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Modules</p>
          <p className="text-xl font-bold text-green-600 dark:text-green-400">
            {currentSpeciality.ues.reduce((sum, ue) => sum + ue.modules.length, 0)}
          </p>
        </div>
        
        <div className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Coef</p>
          <p className="text-xl font-bold text-purple-600 dark:text-purple-400">
            {currentSpeciality.ues.reduce((sum, ue) => 
              sum + ue.modules.reduce((modSum, mod) => modSum + mod.coef, 0), 0)}
          </p>
        </div>
      </div>
    </div>
  );
}
