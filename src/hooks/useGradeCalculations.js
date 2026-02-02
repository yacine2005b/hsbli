import { useState } from 'react';

export const useGradeCalculations = () => {
  const [grades, setGrades] = useState({});
  const [errors, setErrors] = useState({});

  const calculateModuleGrade = (moduleId, assessments) => {
    const moduleGrades = grades[moduleId] || {};

    const weights = {};
    const hasTD = assessments.includes('td');
    const hasTP = assessments.includes('tp');
    const hasExam = assessments.includes('exam');

    if (hasExam) {
      weights['exam'] = 0.67;
    }

    if (hasTD && hasTP) {
      weights['td'] = 0.165;
      weights['tp'] = 0.165;
    } else if (hasTD) {
      weights['td'] = 0.33;
    } else if (hasTP) {
      weights['tp'] = 0.33;
    }

    let totalWeight = 0;
    let weightedSum = 0;

    // For each assessment, get the value or default to 0
    assessments.forEach((assessment) => {
      const value = moduleGrades[assessment] !== undefined && moduleGrades[assessment] !== '' ? moduleGrades[assessment] : '0';
      const weight = weights[assessment] || 0.33;
      const numValue = parseFloat(value);
      if (!isNaN(numValue)) {
        weightedSum += numValue * weight;
        totalWeight += weight;
      }
    });

    return totalWeight > 0 ? (weightedSum / totalWeight).toFixed(2) : '-';
  };

  const calculateOverallGrade = (speciality) => {
    let totalWeightedGrade = 0;
    let totalCoefficient = 0;

    speciality.ues.forEach((ue) => {
      ue.modules.forEach((module) => {
        const moduleGrade = calculateModuleGrade(module.id, module.assessments);
        if (moduleGrade !== '-') {
          totalWeightedGrade += parseFloat(moduleGrade) * module.coef;
          totalCoefficient += module.coef;
        }
      });
    });

    return totalCoefficient > 0 ? (totalWeightedGrade / totalCoefficient).toFixed(2) : '0';
  };

  const handleGradeChange = (moduleId, assessment, value) => {
    const errorKey = `${moduleId}-${assessment}`;
    
    // If empty, clear it
    if (value === '' || value === null) {
      setGrades(prev => ({
        ...prev,
        [moduleId]: {
          ...prev[moduleId],
          [assessment]: value
        }
      }));
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[errorKey];
        return newErrors;
      });
      return;
    }

    const numValue = parseFloat(value);

    // Validate: must be between 0 and 20
    if (isNaN(numValue) || numValue < 0 || numValue > 20) {
      setErrors(prev => ({
        ...prev,
        [errorKey]: 'Grade must be between 0 and 20'
      }));
      return;
    }

    // Valid input: set the grade and clear any error
    setGrades(prev => ({
      ...prev,
      [moduleId]: {
        ...prev[moduleId],
        [assessment]: value
      }
    }));
    setErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[errorKey];
      return newErrors;
    });
  };

  const calculateModuleAverage = (speciality) => {
    const allModuleGrades = speciality.ues.flatMap(ue => 
      ue.modules.map(mod => calculateModuleGrade(mod.id, mod.assessments))
    ).filter(g => g !== '-' && g !== null);
    
    if (allModuleGrades.length === 0) return '0';
    const avg = allModuleGrades.reduce((sum, g) => sum + parseFloat(g), 0) / allModuleGrades.length;
    return avg.toFixed(2);
  };

  return {
    grades,
    errors,
    calculateModuleGrade,
    calculateOverallGrade,
    calculateModuleAverage,
    handleGradeChange
  };
};
