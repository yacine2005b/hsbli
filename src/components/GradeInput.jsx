import React from 'react';

export default function GradeInput({ moduleId, assessment, value, error, onChange }) {
  return (
    <div className="flex flex-col items-center">
      <label className="text-xs text-gray-600 dark:text-gray-400 mb-1">
        {assessment}
      </label>
      <input
        type="number"
        min="0"
        max="20"
        step="0.5"
        placeholder="0"
        value={value || ''}
        onChange={(e) => onChange(moduleId, assessment, e.target.value)}
        className={`w-16 px-2 py-1.5 bg-white dark:bg-gray-900 border rounded text-center text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:border-blue-500 ${
          error
            ? 'border-red-500 focus:ring-red-500'
            : 'border-gray-300 dark:border-gray-700 focus:ring-blue-500'
        }`}
      />
      {error && (
        <p className="text-xs text-red-500 mt-1">{error}</p>
      )}
    </div>
  );
}
