// Manage user progress
export const saveProgress = (userId, moduleId, progress) => {
  localStorage.setItem(`progress_${userId}_${moduleId}`, progress);
};

export const getProgress = (userId, moduleId) => {
  return localStorage.getItem(`progress_${userId}_${moduleId}`) || 0;
};