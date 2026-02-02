// UE Color Configuration
export const ueColors = {
  'ue1': { 
    bg: 'from-red-500/10 to-red-600/5', 
    border: 'border-red-500/30', 
    text: 'text-red-400', 
    badge: 'bg-red-500/20 text-red-300' 
  },
  'ue2': { 
    bg: 'from-cyan-500/10 to-cyan-600/5', 
    border: 'border-cyan-500/30', 
    text: 'text-cyan-400', 
    badge: 'bg-cyan-500/20 text-cyan-300' 
  },
  'ue3': { 
    bg: 'from-emerald-500/10 to-emerald-600/5', 
    border: 'border-emerald-500/30', 
    text: 'text-emerald-400', 
    badge: 'bg-emerald-500/20 text-emerald-300' 
  },
  'ue4': { 
    bg: 'from-amber-500/10 to-amber-600/5', 
    border: 'border-amber-500/30', 
    text: 'text-amber-400', 
    badge: 'bg-amber-500/20 text-amber-300' 
  },
  'ue5': { 
    bg: 'from-pink-500/10 to-pink-600/5', 
    border: 'border-pink-500/30', 
    text: 'text-pink-400', 
    badge: 'bg-pink-500/20 text-pink-300' 
  },
};

// Grade Color Functions
export const getGradeColor = (grade) => {
  if (!grade || grade === '-' || grade === '0') return 'text-slate-400';
  const numGrade = parseFloat(grade);
  if (numGrade >= 16) return 'text-green-400';
  if (numGrade >= 14) return 'text-cyan-400';
  if (numGrade >= 12) return 'text-blue-400';
  if (numGrade >= 10) return 'text-yellow-400';
  if (numGrade >= 8) return 'text-orange-400';
  return 'text-red-400';
};

export const getGradeBgColor = (grade) => {
  if (!grade || grade === '-' || grade === '0') return 'bg-slate-500/10';
  const numGrade = parseFloat(grade);
  if (numGrade >= 16) return 'bg-green-500/20';
  if (numGrade >= 14) return 'bg-cyan-500/20';
  if (numGrade >= 12) return 'bg-blue-500/20';
  if (numGrade >= 10) return 'bg-yellow-500/20';
  if (numGrade >= 8) return 'bg-orange-500/20';
  return 'bg-red-500/20';
};

// Grade Status
export const getGradeStatus = (grade) => {
  if (!grade || grade === '-' || grade === '0') return 'Pending';
  const numGrade = parseFloat(grade);
  if (numGrade >= 16) return 'Excellent';
  if (numGrade >= 14) return 'Very Good';
  if (numGrade >= 12) return 'Good';
  if (numGrade >= 10) return 'Satisfactory';
  if (numGrade >= 8) return 'Acceptable';
  return 'Needs Improvement';
};
