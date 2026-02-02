import React from 'react';

export default function PageFooter({ currentSpeciality }) {
  return (
    <div className="mt-8 text-center">
      <p className="text-sm text-gray-600 dark:text-gray-400">
        HSBLI • {currentSpeciality.ues.reduce((sum, ue) => sum + ue.modules.length, 0)} modules • {currentSpeciality.ues.length} UEs
      </p>
    </div>
  );
}
