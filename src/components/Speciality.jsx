import React, { useState, useEffect } from 'react';
import { specialities } from '../data/specialities';
import { useGradeCalculations } from '../hooks/useGradeCalculations';
import PageHeader from './PageHeader';
import SpecialitySelector from './SpecialitySelector';
import StatsSection from './StatsSection';
import DesktopTable from './DesktopTable';
import MobileCards from './MobileCards';
import PageFooter from './PageFooter';

export default function Speciality() {
  const { 
    grades, 
    errors,
    calculateModuleGrade, 
    calculateOverallGrade, 
    calculateModuleAverage,
    handleGradeChange 
  } = useGradeCalculations();
  
  // Check for saved preference, otherwise use system preference
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkMode');
      if (saved !== null) return JSON.parse(saved);
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [activeSpeciality, setActiveSpeciality] = useState(specialities[0]?.id || '');

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Apply dark mode class to html element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Save preference
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const currentSpeciality = specialities.find(s => s.id === activeSpeciality) || specialities[0];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="px-4 md:px-6 py-4 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 sticky top-0 z-10 bg-gray-50 dark:bg-gray-900 pb-4">
          <PageHeader isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          <SpecialitySelector activeSpeciality={activeSpeciality} setActiveSpeciality={setActiveSpeciality} />
          <StatsSection 
            currentSpeciality={currentSpeciality} 
            calculateOverallGrade={calculateOverallGrade}
            calculateModuleAverage={calculateModuleAverage}
          />
        </div>

        {/* Desktop Table */}
        <DesktopTable 
          currentSpeciality={currentSpeciality}
          calculateModuleGrade={calculateModuleGrade}
          grades={grades}
          errors={errors}
          handleGradeChange={handleGradeChange}
        />

        {/* Mobile View */}
        <MobileCards 
          currentSpeciality={currentSpeciality}
          calculateModuleGrade={calculateModuleGrade}
          grades={grades}
          errors={errors}
          handleGradeChange={handleGradeChange}
        />

        {/* Footer */}
        <PageFooter currentSpeciality={currentSpeciality} />
      </div>
    </div>
  );
}