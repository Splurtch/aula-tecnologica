import React from 'react';
import {
  Sparkles, ArrowRight, Zap, Brain, Trophy, BadgeCheck,
  Rotate3D, Flame, Star, Crown, CircuitBoard, Plug, Cloud,
  AppWindow, Globe, ShieldAlert, Keyboard
} from 'lucide-react';

export default function HomeView({
  tabConfig,
  achievements,
  moduleProgress,
  isModuleCompleted,
  isDark,
  handleTabChange,
}) {
  const totalModules = tabConfig.filter(t => t.id !== 'home').length;
  const completedModules = new Set(
    Object.keys(typeof window !== 'undefined' ? localStorage : {})
      .filter(k => k.startsWith('module_') && localStorage.getItem(k) === 'completed')
  ).size;
  const progressPercent = totalModules > 0 ? Math.round((completedModules / totalModules) * 100) : 0;

  const achievementsList = [
    { id: 'firstStep', icon: Zap, name: 'Primer Paso', desc: 'Empieza tu primer módulo', category: 'progress' },
    { id: 'tenPercent', icon: Flame, name: 'Inicio', desc: 'Completa 1 módulo', category: 'progress' },
    { id: 'quarterCourse', icon: Star, name: 'Cuarto', desc: 'Completa 3 módulos', category: 'progress' },
    { id: 'halfCourse', icon: Crown, name: 'Mitad', desc: 'Completa 6 módulos', category: 'progress' },
    { id: 'threeQuarters', icon: Star, name: 'Casi', desc: 'Completa 10 módulos', category: 'progress' },
    { id: 'fullCourse', icon: Trophy, name: 'Graduado', desc: 'Completa todos los módulos', category: 'progress' },
    { id: 'hardwareMaster', icon: CircuitBoard, name: 'Hardware', desc: 'Domina componentes', category: 'master' },
    { id: 'peripheralsMaster', icon: Plug, name: 'Periféricos', desc: 'Domina dispositivos', category: 'master' },
    { id: 'cloudMaster', icon: Cloud, name: 'Nube', desc: 'Domina conectividad', category: 'master' },
    { id: 'softwareMaster', icon: AppWindow, name: 'Software', desc: 'Domina el sistema', category: 'master' },
    { id: 'internetMaster', icon: Globe, name: 'Internet', desc: 'Domina la red', category: 'master' },
    { id: 'securityMaster', icon: ShieldAlert, name: 'Seguridad', desc: 'Domina amenazas', category: 'master' },
  ];

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500">
      {/* Hero Welcome Section */}
      <div className="relative overflow-hidden rounded-sm border bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/60 p-8 md:p-12 scanlines">
        <div className="absolute inset-0 grid-pattern opacity-50"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-bold uppercase tracking-widest mb-4 pixel-border">
              <Sparkles size={12} className="animate-pulse-slow" />
              <span>Aula Tecnológica Integral · Modo aventura activado</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Aprende tecnología subiendo de nivel,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400">
                no sufrir tutoriales eternos
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Un aula interactiva y gamificada para recorrer el viaje hacia la digitalización paso a paso.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button
                onClick={() => handleTabChange('hardware')}
                className="group relative px-8 py-4 rounded-sm bg-gradient-to-r from-blue-600 to-violet-600 text-white font-black text-lg shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-1 pixel-btn animate-pixel-flicker"
              >
                <span className="relative z-10 flex items-center gap-3 font-pixel uppercase tracking-wider">
                  EMPEZAR LA MISIÓN
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300 animate-pixel-bounce" />
                </span>
              </button>
              <p className="text-xs text-slate-500 font-medium tracking-wider uppercase font-pixel">
                21 módulos · 70+ temas · retos, logros y aprendizaje real
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="lg:w-80 w-full grid grid-cols-2 gap-4">
            <div className="rounded-sm border border-slate-700 bg-slate-900/80 p-4 text-center backdrop-blur-sm pixel-card">
              <p className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-pixel">{totalModules}</p>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-1">Módulos Totales</p>
            </div>
            <div className="rounded-sm border border-slate-700 bg-slate-900/80 p-4 text-center backdrop-blur-sm pixel-card">
              <p className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400 font-pixel">{completedModules}</p>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-1">Completados</p>
            </div>
            <div className="col-span-2 rounded-sm border border-slate-700 bg-slate-900/80 p-5 backdrop-blur-sm pixel-card">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Progreso del Curso</p>
                <p className="text-sm font-black text-white font-pixel">{progressPercent}%</p>
              </div>
              <div className="h-3 bg-slate-800 rounded-sm overflow-hidden relative border border-slate-700">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 rounded-sm transition-all duration-700 relative"
                  style={{ width: `${progressPercent}%` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                </div>
              </div>
              <p className="text-[10px] text-slate-500 mt-2 font-pixel">
                {completedModules === 0 ? 'Pulsa EMPEZAR para comenzar' : `${completedModules} módulos completados`}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Motivation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-sm border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm hover:border-blue-500/40 transition-all duration-300 pixel-card">
          <div className="w-12 h-12 rounded-sm bg-blue-500/20 flex items-center justify-center mb-4 border border-blue-500/30">
            <Zap size={24} className="text-blue-400" />
          </div>
          <h3 className="text-white font-black text-lg font-pixel tracking-wider">Juego Largo</h3>
          <p className="mt-2 text-sm text-slate-400 leading-relaxed">
            No necesitas convertirte en hacker de película en una tarde. Completa módulos, practica un poco cada día.
          </p>
        </div>

        <div className="rounded-sm border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm hover:border-violet-500/40 transition-all duration-300 pixel-card">
          <div className="w-12 h-12 rounded-sm bg-violet-500/20 flex items-center justify-center mb-4 border border-violet-500/30">
            <Brain size={24} className="text-violet-400" />
          </div>
          <h3 className="text-white font-black text-lg font-pixel tracking-wider">Aprender Tocando</h3>
          <p className="mt-2 text-sm text-slate-400 leading-relaxed">
            Aquí no vienes a mirar una pared de teoría. Vienes a probar, equivocarte y entender.
          </p>
        </div>

        <div className="rounded-sm border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300 pixel-card">
          <div className="w-12 h-12 rounded-sm bg-cyan-500/20 flex items-center justify-center mb-4 border border-cyan-500/30">
            <Trophy size={24} className="text-cyan-400" />
          </div>
          <h3 className="text-white font-black text-lg font-pixel tracking-wider">Progreso Antes que Perfección</h3>
          <p className="mt-2 text-sm text-slate-400 leading-relaxed">
            No esperes a "estar preparado". Empieza por el primer módulo y sigue avanzando.
          </p>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="rounded-sm border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Trophy size={20} className="text-amber-400" />
            <h3 className="text-white font-black text-lg">Logros Desbloqueados</h3>
          </div>
          <span className={`text-xs font-bold px-3 py-1 rounded-sm ${isDark ? 'bg-amber-500/20 text-amber-300' : 'bg-amber-100 text-amber-700'}`}>
            {Object.values(achievements || {}).filter(Boolean).length}/24
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
          {achievementsList.map((achievement) => {
            const Icon = achievement.icon;
            const isUnlocked = achievements?.[achievement.id];
            return (
              <div
                key={achievement.id}
                className={`relative p-3 rounded-sm border text-center transition-all duration-300 ${
                  isUnlocked
                    ? achievement.category === 'master'
                      ? isDark ? 'border-violet-500/40 bg-violet-500/10' : 'border-violet-300 bg-violet-50'
                      : isDark ? 'border-amber-500/40 bg-amber-500/10' : 'border-amber-300 bg-amber-50'
                    : isDark ? 'border-slate-700 bg-slate-800/50 opacity-50' : 'border-slate-200 bg-slate-50 opacity-50'
                }`}
                title={achievement.desc}
              >
                <Icon size={20} className={`mx-auto ${
                  isUnlocked
                    ? achievement.category === 'master' ? 'text-violet-400' : 'text-amber-400'
                    : 'text-slate-500'
                }`} />
                <p className={`text-[10px] font-bold mt-2 ${
                  isUnlocked
                    ? achievement.category === 'master' ? 'text-violet-300' : 'text-amber-300'
                    : 'text-slate-500'
                }`}>
                  {achievement.name}
                </p>
                {isUnlocked && (
                  <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-400 flex items-center justify-center">
                    <BadgeCheck size={10} className="text-slate-900" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Module Progress */}
        <div className="mt-4 pt-4 border-t border-slate-700">
          <div className="flex items-center justify-between mb-3">
            <p className={`text-[10px] font-bold uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Progreso de módulos
            </p>
            <p className={`text-xs font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}>
              {Object.values(moduleProgress || {}).filter(p => p.completed).length}/{tabConfig.filter(t => t.id !== 'home').length}
            </p>
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-13 gap-2">
            {tabConfig.filter(t => t.id !== 'home').map((tab) => {
              const isCompleted = isModuleCompleted?.(tab.id);
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`relative p-2 rounded-sm border text-center transition-all duration-200 hover:scale-105 ${
                    isCompleted
                      ? isDark ? 'border-emerald-500/40 bg-emerald-500/10' : 'border-emerald-300 bg-emerald-50'
                      : isDark ? 'border-slate-700 bg-slate-800/30' : 'border-slate-200 bg-slate-50'
                  }`}
                >
                  <p className={`text-[9px] font-bold uppercase ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    {tab.step}
                  </p>
                  {isCompleted && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 flex items-center justify-center">
                      <BadgeCheck size={8} className="text-slate-900" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="rounded-sm border border-blue-500/30 bg-gradient-to-r from-blue-500/10 to-violet-500/10 p-6 flex items-center justify-between gap-4 pixel-card">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-sm bg-blue-500/20 flex items-center justify-center border border-blue-500/40 animate-glow-pulse">
            <Rotate3D size={28} className="text-blue-400" />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-blue-400 font-pixel">Tu Primera Parada</p>
            <p className="text-white font-black text-xl">Hardware: Arquitectura Interna</p>
            <p className="text-sm text-slate-400">Entiende como funciona tu ordenador por dentro</p>
          </div>
        </div>
        <button
          onClick={() => handleTabChange('hardware')}
          className="shrink-0 px-6 py-3 rounded-sm bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-black font-pixel uppercase tracking-wider transition-all duration-300 hover:-translate-y-1 pixel-btn animate-glow-pulse"
        >
          <span className="flex items-center gap-2">
            IR AL MODULO
            <ArrowRight size={16} className="animate-bounce-gentle" />
          </span>
        </button>
      </div>

      {/* Support CTA */}
      <div className="rounded-sm border border-amber-500/30 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 p-6 backdrop-blur-sm">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/30 shrink-0 animate-glow-pulse">
            <span className="text-3xl">☕</span>
          </div>
          <div className="text-center sm:text-left flex-1">
            <p className="text-[10px] font-bold uppercase tracking-widest text-amber-400 font-pixel mb-1">Apoya Este Proyecto</p>
            <h3 className="text-white font-black text-xl">Si esto te está sirviendo, invítame a un café</h3>
            <p className="text-sm text-slate-400 mt-1 max-w-lg">
              Este aula es gratis y siempre lo será.
            </p>
          </div>
          <a
            href="https://buymeacoffee.com/digitalsynapse"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 rounded-sm bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-black font-pixel uppercase tracking-wider transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-amber-500/30 flex items-center gap-2"
          >
            <span>Invítame a un café</span>
          </a>
        </div>
      </div>
    </div>
  );
}