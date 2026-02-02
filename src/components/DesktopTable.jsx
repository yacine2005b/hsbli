import React from 'react';
import { getGradeColor } from '../utils/styleHelpers';
import GradeInput from './GradeInput';

export default function DesktopTable({ currentSpeciality, calculateModuleGrade, grades, errors, handleGradeChange }) {
  return (
    <div className="hidden md:block bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px]">
          <thead className="bg-gray-50 dark:bg-gray-900">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">UE</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">Module</th>
              <th className="px-4 py-3 text-center text-sm font-medium text-gray-700 dark:text-gray-300">Coef</th>
              <th className="px-4 py-3 text-center text-sm font-medium text-gray-700 dark:text-gray-300">Assessments</th>
              <th className="px-4 py-3 text-center text-sm font-medium text-gray-700 dark:text-gray-300">Grade</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {currentSpeciality.ues.map((ue) => (
              <React.Fragment key={ue.id}>
                <tr className="bg-blue-50 dark:bg-gray-900/50">
                  <td className="px-4 py-3">
                    <div className="flex items-center">
                      <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 rounded flex items-center justify-center text-sm font-bold mr-3">
                        {ue.code || ue.name.charAt(0)}
                      </span>
                      <span className="font-medium text-gray-900 dark:text-white">{ue.name}</span>
                    </div>
                  </td>
                  <td colSpan="4" className="px-4 py-3">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {ue.modules.length} modules
                    </p>
                  </td>
                </tr>
                
                {ue.modules.map((module) => {
                  const moduleGrade = calculateModuleGrade(module.id, module.assessments);
                  return (
                    <tr key={module.id} className="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
                      <td className="px-4 py-3"></td>
                      <td className="px-4 py-3">
                        <p className="font-medium text-gray-900 dark:text-white">{module.name}</p>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className="w-10 h-10 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300 rounded flex items-center justify-center text-sm font-bold mx-auto">
                          {module.coef}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex flex-wrap gap-3 justify-center">
                          {module.assessments?.map((assessment) => (
                            <GradeInput
                              key={assessment}
                              moduleId={module.id}
                              assessment={assessment}
                              value={grades[module.id]?.[assessment]}
                              error={errors[`${module.id}-${assessment}`]}
                              onChange={handleGradeChange}
                            />
                          ))}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <div className="flex flex-col items-center">
                          <span className={`text-lg font-bold px-3 py-1 rounded ${getGradeColor(moduleGrade)}`}>
                            {moduleGrade || '0.0'}
                          </span>
                          <span className={`text-xs mt-1 px-2 py-0.5 rounded ${
                            moduleGrade >= 10
                              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-400'
                              : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-400'
                          }`}>
                            {moduleGrade >= 10 ? 'Passing' : 'Below 10'}
                          </span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
