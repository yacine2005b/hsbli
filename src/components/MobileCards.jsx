import React from 'react';
import { getGradeColor } from '../utils/styleHelpers';
import GradeInput from './GradeInput';

export default function MobileCards({ currentSpeciality, calculateModuleGrade, grades, errors, handleGradeChange }) {
  return (
    <div className="md:hidden space-y-4">
      {currentSpeciality.ues.map((ue) => (
        <div key={ue.id} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="p-4 bg-blue-50 dark:bg-gray-900">
            <div className="flex items-center">
              <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 rounded flex items-center justify-center text-sm font-bold mr-3">
                {ue.code || ue.name.charAt(0)}
              </span>
              <span className="font-medium text-gray-900 dark:text-white">{ue.name}</span>
            </div>
          </div>
          
          <div className="p-4">
            <div className="space-y-4">
              {ue.modules.map((module) => {
                const moduleGrade = calculateModuleGrade(module.id, module.assessments);
                return (
                  <div key={module.id} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{module.name}</p>
                        <span className="text-sm bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300 px-2 py-1 rounded mt-1 inline-block">
                          Coef: {module.coef}
                        </span>
                      </div>
                      <span className={`font-bold ${getGradeColor(moduleGrade)}`}>
                        {moduleGrade || '0.0'}
                      </span>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Assessments</p>
                        <div className="grid grid-cols-2 gap-3">
                          {module.assessments?.map((assessment) => (
                            <div key={assessment} className="flex flex-col items-start">
                              <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">
                                {assessment}
                              </label>
                              <input
                                type="number"
                                min="0"
                                max="20"
                                step="0.5"
                                placeholder="0"
                                value={grades[module.id]?.[assessment] || ''}
                                onChange={(e) => handleGradeChange(module.id, assessment, e.target.value)}
                                className={`w-full px-3 py-2 bg-white dark:bg-gray-900 border rounded text-center text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:border-blue-500 ${
                                  errors[`${module.id}-${assessment}`]
                                    ? 'border-red-500 focus:ring-red-500'
                                    : 'border-gray-300 dark:border-gray-700 focus:ring-blue-500'
                                }`}
                              />
                              {errors[`${module.id}-${assessment}`] && (
                                <p className="text-xs text-red-500 mt-1">{errors[`${module.id}-${assessment}`]}</p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className={`text-sm px-3 py-1.5 rounded ${
                        moduleGrade >= 10
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-400'
                          : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-400'
                      }`}>
                        Status: {moduleGrade >= 10 ? 'Passing ✓' : 'Below 10 ✗'}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
