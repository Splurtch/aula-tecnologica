import { createContext, useContext, useState, useCallback } from 'react';

const GamificationContext = createContext(null);

const LEVELS = [
  { level: 1, name: 'Principiante', xpRequired: 0 },
  { level: 2, name: 'Aprendiz', xpRequired: 100 },
  { level: 3, name: 'Intermedio', xpRequired: 300 },
  { level: 4, name: 'Avanzado', xpRequired: 600 },
  { level: 5, name: 'Experto', xpRequired: 1000 },
  { level: 6, name: 'Maestro', xpRequired: 1500 },
];

const DEFAULT_ACHIEVEMENTS = {
  firstStep: false, tenPercent: false, quarterCourse: false, halfCourse: false,
  threeQuarters: false, almostThere: false, fullCourse: false,
  hardwareMaster: false, peripheralsMaster: false, cloudMaster: false,
  softwareMaster: false, internetMaster: false, securityMaster: false,
  emailMaster: false, contentMaster: false, filesMaster: false,
  keyboardMaster: false, officeMaster: false, aiMaster: false,
  assessmentMaster: false, speedRunner: false, perfectionist: false,
  explorer: false, streak3: false, streak7: false, streak30: false,
};

function getInitialAchievements() {
  if (typeof window === 'undefined') return DEFAULT_ACHIEVEMENTS;
  const saved = localStorage.getItem('aula-achievements');
  return saved ? { ...DEFAULT_ACHIEVEMENTS, ...JSON.parse(saved) } : DEFAULT_ACHIEVEMENTS;
}

function getInitialStreak() {
  if (typeof window === 'undefined') return { current: 0, best: 0, lastLogin: null };
  const saved = localStorage.getItem('aula-streak');
  if (saved) {
    const data = JSON.parse(saved);
    const today = new Date().toDateString();
    const lastLogin = new Date(data.lastLogin).toDateString();
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    if (lastLogin !== today && lastLogin !== yesterday) {
      return { current: 0, best: data.best, lastLogin: data.lastLogin };
    }
    return data;
  }
  return { current: 0, best: 0, lastLogin: null };
}

function getInitialModuleProgress() {
  if (typeof window === 'undefined') return {};
  const saved = localStorage.getItem('aula-module-progress');
  return saved ? JSON.parse(saved) : {};
}

function getInitialXp() {
  if (typeof window === 'undefined') return 0;
  const saved = localStorage.getItem('aula-xp');
  return saved ? parseInt(saved, 10) : 0;
}

export function GamificationProvider({ children }) {
  const [achievements, setAchievements] = useState(getInitialAchievements);
  const [xp, setXp] = useState(getInitialXp);
  const [xpNotification, setXpNotification] = useState({ show: false, amount: 0, type: '', name: '' });
  const [streak, setStreak] = useState(getInitialStreak);
  const [moduleProgress, _setModuleProgress] = useState(getInitialModuleProgress);
  const [hoveredPeripheral, setHoveredPeripheral] = useState(null);

  const currentLevel = LEVELS.reduce((acc, l) => xp >= l.xpRequired ? l : acc, LEVELS[0]);
  const nextLevel = LEVELS.find(l => l.xpRequired > xp) || LEVELS[LEVELS.length - 1];
  const levelProgress = nextLevel ? ((xp - currentLevel.xpRequired) / (nextLevel.xpRequired - currentLevel.xpRequired)) * 100 : 100;

  const unlockAchievement = useCallback((achievementId) => {
    setAchievements(prev => {
      if (prev[achievementId]) return prev;
      const newAchievements = { ...prev, [achievementId]: true };
      localStorage.setItem('aula-achievements', JSON.stringify(newAchievements));
      return newAchievements;
    });
  }, []);

  const awardXp = useCallback((amount, reason) => {
    setXp(prev => {
      const newXp = prev + amount;
      localStorage.setItem('aula-xp', newXp.toString());
      return newXp;
    });
    setXpNotification({ show: true, amount, type: 'xp', reason });
    setTimeout(() => setXpNotification(prev => ({ ...prev, show: false })), 2500);
  }, []);

  const checkStreak = useCallback(() => {
    const today = new Date().toDateString();
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    const lastLogin = streak.lastLogin ? new Date(streak.lastLogin).toDateString() : null;

    if (lastLogin === today) return;

    if (!lastLogin || lastLogin === yesterday) {
      const newCurrent = streak.current + 1;
      const newBest = Math.max(newCurrent, streak.best);
      const newStreak = { current: newCurrent, best: newBest, lastLogin: new Date().toISOString() };
      setStreak(newStreak);
      localStorage.setItem('aula-streak', JSON.stringify(newStreak));

      if (newCurrent === 3) { awardXp(50, 'Racha de 3 días'); unlockAchievement('streak3'); }
      if (newCurrent === 7) { awardXp(150, 'Racha de 7 días'); unlockAchievement('streak7'); }
      if (newCurrent === 30) { awardXp(500, 'Racha de 30 días'); unlockAchievement('streak30'); }
    } else {
      const newStreak = { current: 1, best: streak.best, lastLogin: new Date().toISOString() };
      setStreak(newStreak);
      localStorage.setItem('aula-streak', JSON.stringify(newStreak));
    }
  }, [streak, awardXp, unlockAchievement]);

  const isModuleCompleted = useCallback((moduleId) => {
    return moduleProgress[moduleId]?.completed || false;
  }, [moduleProgress]);

  const value = {
    achievements, unlockAchievement,
    xp, awardXp, levelProgress, currentLevel, nextLevel,
    xpNotification, setXpNotification,
    streak, checkStreak,
    moduleProgress, isModuleCompleted,
    hoveredPeripheral, setHoveredPeripheral,
    LEVELS,
  };

  return (
    <GamificationContext.Provider value={value}>
      {children}
    </GamificationContext.Provider>
  );
}

export function useGamification() {
  const context = useContext(GamificationContext);
  if (!context) {
    throw new Error('useGamification must be used within a GamificationProvider');
  }
  return context;
}