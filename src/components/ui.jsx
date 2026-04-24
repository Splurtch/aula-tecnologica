import {
  AlertTriangle,
  ChevronRight,
  CheckCircle2,
  FileText,
  Info,
  Keyboard,
  ShieldCheck,
  XCircle,
  Zap,
} from 'lucide-react';

export const InteractiveButton = ({ id, dataSet, extraClass = "", selectedItem, onSelect, colorMap, isDark = false }) => {
  const comp = dataSet[id];
  if (!comp) return null;

  const isSelected = selectedItem?.id === id;
  const colors = colorMap[comp.color] || colorMap.slate;

  const activeClass = isSelected
    ? `ring-4 ${colors.ring} shadow-[0_24px_60px_rgba(15,23,42,0.24)] -translate-y-1 ${isDark ? 'bg-slate-900 text-white border-white/10' : `${colors.bgLight} ${colors.text} ${colors.borderHeavy}`} z-10`
    : isDark
      ? 'bg-slate-900/80 hover:bg-slate-800 text-slate-200 border-slate-700/50 hover:border-slate-600 hover:-translate-y-0.5'
      : 'bg-white/90 hover:bg-white text-slate-700 border-slate-200/80 hover:border-slate-300 hover:-translate-y-0.5 shadow-[0_8px_30px_rgba(15,23,42,0.08)]';

  return (
    <button
      onClick={(e) => onSelect(id, e, dataSet)}
      className={`group relative flex min-h-[120px] flex-col items-start justify-between overflow-hidden rounded-2xl border p-4 sm:p-5 text-left transition-all duration-300 ${activeClass} ${extraClass}`}
      style={{
        backdropFilter: isSelected ? 'blur(20px)' : 'none',
      }}
    >
      <div
        className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ${
          isSelected
            ? isDark
              ? 'bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent opacity-100'
              : 'bg-gradient-to-br from-indigo-100/70 via-white/50 to-transparent opacity-100'
            : 'opacity-0 group-hover:opacity-100'
        }`}
      />
      <div
        className={`absolute -right-8 -top-8 h-32 w-32 rounded-full blur-3xl transition-opacity duration-500 ${
          isSelected ? 'opacity-60' : 'opacity-0 group-hover:opacity-30'
        } ${isDark ? 'bg-indigo-500' : 'bg-indigo-300'}`}
      />
      <div className="relative z-10 flex w-full items-center justify-between gap-3">
        <span
          className={`rounded-full border px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] ${
            isSelected
              ? isDark
                ? 'border-indigo-500/30 bg-indigo-500/20 text-indigo-200'
                : `${colors.borderLight} bg-white/90 ${colors.text}`
              : isDark
                ? 'border-slate-700 bg-slate-800 text-slate-400'
                : 'border-slate-200 bg-slate-50/80 text-slate-500'
          }`}
        >
          {comp.category}
        </span>
        <span
          className={`text-[10px] font-bold uppercase tracking-[0.24em] ${
            isSelected ? (isDark ? 'text-indigo-300' : colors.text) : isDark ? 'text-slate-500' : 'text-slate-400'
          }`}
        >
          {isSelected ? 'Abierta' : 'Explorar'}
        </span>
      </div>

      <div className="relative z-10 mt-4 flex w-full items-start gap-4">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${
            isSelected
              ? isDark
                ? 'border-indigo-500/30 bg-indigo-500/20 text-indigo-300 shadow-[0_0_30px_rgba(99,102,241,0.3)]'
                : `${colors.borderLight} bg-white/90 ${colors.text} shadow-[0_8px_30px_rgba(15,23,42,0.1)]`
              : isDark
                ? 'border-slate-700 bg-slate-800 text-slate-400'
                : 'border-slate-200 bg-white/80 text-slate-500'
          }`}
        >
          <comp.icon
            size={24}
            className={isSelected ? (isDark ? 'text-indigo-300' : colors.text) : (isDark ? 'text-slate-400' : 'text-slate-500')}
            strokeWidth={1.75}
          />
        </div>
        <div className="min-w-0 flex-1">
          <span className="block text-[15px] sm:text-[16px] font-bold text-slate-900 dark:text-white leading-tight">{comp.name}</span>
          <p className={`mt-2 text-[12px] sm:text-[13px] leading-relaxed ${isSelected ? (isDark ? 'text-slate-300' : 'text-slate-600') : isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            {isSelected ? 'Pulse de nuevo para cerrar esta ficha.' : 'Abre una ficha guiada con explicación, ejemplos y apoyo visual.'}
          </p>
        </div>
        <ChevronRight
          size={18}
          className={`mt-1 shrink-0 transition-all duration-300 ${
            isSelected
              ? 'translate-x-1 rotate-90 text-indigo-500'
              : isDark
                ? 'text-slate-500 group-hover:text-slate-300 group-hover:translate-x-0.5'
                : 'text-slate-400 group-hover:text-slate-600 group-hover:translate-x-0.5'
          }`}
        />
      </div>

      <div className="relative z-10 mt-5 flex w-full items-center justify-between gap-3">
        <span className={`text-xs font-semibold ${isSelected ? (isDark ? 'text-slate-200' : colors.text) : isDark ? 'text-slate-500' : 'text-slate-400'}`}>
          {isSelected ? 'Ficha activa en pantalla' : 'Sin abrir'}
        </span>
        <span className={`text-xs font-bold uppercase tracking-[0.2em] ${isSelected ? (isDark ? 'text-indigo-300' : colors.text) : isDark ? 'text-slate-500' : 'text-slate-400'}`}>
          {isSelected ? 'Cerrar' : 'Abrir'}
        </span>
      </div>

      <div
        className={`absolute inset-x-4 bottom-0 h-1 rounded-full transition-all duration-500 ${
          isSelected ? colors.bgBase : isDark ? 'bg-slate-800' : 'bg-slate-100'
        }`}
      />
      {isSelected && (
        <span className="absolute right-4 top-4 flex h-3 w-3">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${colors.bgBase} opacity-75`}></span>
          <span className={`relative inline-flex rounded-full h-3 w-3 ${colors.bgBase}`}></span>
        </span>
      )}
    </button>
  );
};

const renderKeyLabel = (label) => {
  const keyMap = {
    ArrowLeft: '←',
    ArrowRight: '→',
    ArrowUp: '↑',
    ArrowDown: '↓',
    Backspace: 'Back',
  };

  return keyMap[label] || label;
};

export const KeyboardKey = ({ label, selectedKeys = [] }) => {
  const isActive = selectedKeys.includes(label);

  return (
    <div
      className={`h-12 md:h-14 rounded-xl border text-xs md:text-sm font-black flex items-center justify-center transition-all duration-300 ${
        isActive
          ? 'bg-indigo-500 text-white border-indigo-300 shadow-[0_0_20px_rgba(99,102,241,0.45)] -translate-y-1'
          : 'bg-slate-800/80 text-slate-300 border-slate-700'
      }`}
    >
      {renderKeyLabel(label)}
    </div>
  );
};

export const TabButton = ({ tab, isActive, onClick, isDark = false }) => {
  const Icon = tab.icon;
  const activeClass = isActive
    ? tab.activeClass
    : isDark
      ? 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 hover:text-white border-slate-700/50 shadow-sm'
      : tab.idleClass;

  return (
    <button
      onClick={() => onClick(tab.id)}
      className={`flex flex-col items-start justify-between p-4 sm:p-5 rounded-xl font-semibold text-left uppercase tracking-wide transition-all duration-300 border min-h-[100px] sm:min-h-[112px] ${
        isDark ? 'shadow-lg shadow-black/10' : 'shadow-md shadow-slate-900/5'
      } ${activeClass}`}
    >
      <div className="flex items-center justify-between w-full gap-3">
        <span className={`text-[10px] px-2.5 py-1.5 rounded-lg font-semibold uppercase tracking-wider ${
          isActive 
            ? 'bg-white/15 border border-white/20 text-white/90' 
            : isDark 
              ? 'bg-slate-800 border border-slate-700 text-slate-400' 
              : 'bg-slate-100 border border-slate-200 text-slate-500'
        }`}>
          M{tab.step}
        </span>
        <Icon size={20} className={isActive ? 'text-white/80' : isDark ? 'text-slate-500' : 'text-slate-400'} />
      </div>
      <div className="mt-3">
        <p className="text-[14px] sm:text-[15px] font-semibold leading-tight">{tab.title}</p>
        <p className={`text-[11px] sm:text-[12px] mt-2 normal-case tracking-normal leading-relaxed font-medium ${
          isActive ? 'text-white/80' : isDark ? 'text-slate-400' : 'text-slate-500'
        }`}>
          {tab.subtitle}
        </p>
      </div>
    </button>
  );
};

export const SectionMenuItem = ({ tab, isActive, onClick, isDark = false }) => {
  const Icon = tab.icon;

  return (
    <button
      onClick={() => onClick(tab.id)}
      className={`w-full rounded-xl border p-4 text-left transition-all duration-300 ${
        isActive
          ? tab.activeClass.replace('scale-105', '').replace('z-10', '')
          : isDark
            ? 'border-slate-700/50 bg-slate-900/80 text-slate-200 hover:bg-slate-800 hover:border-slate-600'
            : 'border-slate-200/80 bg-white/90 text-slate-700 hover:bg-white hover:border-slate-300 shadow-sm'
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3 min-w-0">
          <div className={`rounded-lg p-2.5 border shrink-0 ${
            isActive
              ? 'border-white/20 bg-white/10 text-white'
              : isDark
                ? 'border-slate-700 bg-slate-800 text-slate-300'
                : 'border-slate-200 bg-slate-50 text-slate-500'
          }`}>
            <Icon size={18} />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className={`text-[10px] font-semibold uppercase tracking-wider ${
                isActive ? 'text-white/70' : isDark ? 'text-slate-500' : 'text-slate-400'
              }`}>
                M{tab.step}
              </span>
            </div>
            <p className="mt-1 text-sm sm:text-[15px] font-semibold leading-tight">{tab.title}</p>
            <p className={`mt-1 text-xs sm:text-[13px] normal-case leading-relaxed ${
              isActive ? 'text-white/80' : isDark ? 'text-slate-400' : 'text-slate-500'
            }`}>
              {tab.subtitle}
            </p>
          </div>
        </div>
        <span className={`shrink-0 rounded-lg px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${
          isActive
            ? 'bg-white/15 text-white'
            : isDark
              ? 'bg-slate-800 text-slate-400'
              : 'bg-slate-100 text-slate-500'
        }`}>
          {tab.step}
        </span>
      </div>
    </button>
  );
};

export const Layer3D = ({ id, style, baseZ, children, customClass = "", selectedItem, onSelect, hardwareData, colorMap }) => {
  const comp = hardwareData[id];
  const isSelected = selectedItem?.id === id;
  const currentZ = isSelected ? baseZ + 40 : baseZ;
  const glow = colorMap[comp.color]?.glow || '';

  const theme3D = {
    emerald: `bg-emerald-900/90 border-2 border-emerald-400 ${glow} text-emerald-200`,
    blue: `bg-blue-600/95 border-2 border-blue-300 ${glow} text-blue-100`,
    purple: `bg-purple-700/95 border-2 border-purple-400 ${glow} text-purple-100`,
    red: `bg-red-600/80 border-2 border-red-400 ${glow} text-red-100 backdrop-blur-sm`,
    amber: `bg-amber-700/95 border-2 border-amber-400 ${glow} text-amber-100`,
    zinc: `bg-zinc-800/95 border-2 border-zinc-500 ${glow} text-zinc-200`,
    cyan: `bg-cyan-900/60 border-2 border-cyan-400 ${glow} text-cyan-200 backdrop-blur-md`,
  };

  return (
    <div
      onClick={(e) => onSelect(id, e, hardwareData)}
      style={{ ...style, transform: `translateZ(${currentZ}px)`, transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
      className={`absolute rounded-lg flex flex-col items-center justify-center cursor-pointer group hover:brightness-125 ${theme3D[comp.color]} ${customClass}`}
      title={comp.name}
    >
      {children || (
        <div className="flex flex-col items-center justify-center pointer-events-none">
          <comp.icon className={`w-8 h-8 transition-transform group-hover:scale-110 ${isSelected ? 'animate-pulse' : ''}`} />
          <span className="text-xs font-bold text-center mt-1 px-2 bg-black/30 rounded-full">{comp.name}</span>
        </div>
      )}
    </div>
  );
};

export const PanelDerecho = ({ selectedItem, activeTabMeta, itemCount, onStartModule, onClearSelection, colorMap, isDark = false }) => {
      if (!selectedItem) {
    return (
      <div className="h-full">
        <div className={`rounded-2xl border shadow-xl overflow-hidden h-full ${
          isDark 
            ? 'bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/30 border-indigo-500/20' 
            : 'bg-gradient-to-br from-white via-white to-indigo-50/50 border-slate-200/80 backdrop-blur-xl'
        }`}>
          <div className={`p-6 sm:p-7 md:p-8 ${isDark ? 'bg-gradient-to-br from-indigo-600/10 via-transparent to-transparent' : 'bg-gradient-to-br from-indigo-500 via-indigo-600 to-violet-600'}`}>
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm">
                <activeTabMeta.icon size={32} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-indigo-200/80 font-semibold">Panel de apoyo</p>
                <h3 className="text-2xl font-bold text-white mt-1">{activeTabMeta.title}</h3>
              </div>
            </div>
            <p className="text-indigo-100/80 leading-relaxed mt-5 text-sm">{activeTabMeta.description}</p>
          </div>

          <div className={`p-6 sm:p-7 md:p-8 space-y-5 ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
            <div className="grid grid-cols-2 gap-4">
              <div className={`rounded-xl border p-4 ${isDark ? 'border-slate-800/50 bg-slate-800/30' : 'border-slate-200 bg-slate-50/80'}`}>
                <p className={`text-[10px] uppercase tracking-widest font-semibold ${isDark ? 'text-slate-400' : 'text-slate-400'}`}>Conceptos</p>
                <p className={`text-3xl font-bold mt-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{itemCount}</p>
              </div>
              <div className={`rounded-xl border p-4 ${isDark ? 'border-slate-800/50 bg-slate-800/30' : 'border-slate-200 bg-slate-50/80'}`}>
                <p className={`text-[10px] uppercase tracking-widest font-semibold ${isDark ? 'text-slate-400' : 'text-slate-400'}`}>Estado</p>
                <p className={`text-base font-semibold mt-2 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>Listo para explorar</p>
              </div>
            </div>

            <div className={`rounded-xl border p-5 ${isDark ? 'border-indigo-500/20 bg-indigo-500/5' : 'border-indigo-100 bg-indigo-50/50'}`}>
              <p className={`text-sm font-semibold uppercase tracking-widest ${isDark ? 'text-indigo-300' : 'text-indigo-700'}`}>
                Siguiente paso
              </p>
              <p className={`leading-relaxed mt-3 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                Empieza por una pieza o concepto del módulo actual. El panel se ira llenando con explicaciones, consejos y ejemplos conforme avances.
              </p>
            </div>

            <div className="flex flex-col gap-3 pt-2">
              <button
                onClick={onStartModule}
                className={`w-full rounded-xl px-5 py-4 font-semibold transition-all duration-300 ${
                  isDark 
                    ? 'bg-gradient-to-r from-indigo-500 to-violet-500 text-white hover:from-indigo-400 hover:to-violet-400 shadow-lg shadow-indigo-500/20' 
                    : 'bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-900/20'
                }`}
              >
                Empezar este módulo
              </button>
              <p className={`text-sm leading-relaxed text-center ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                Consejo UX: menos saturación, más foco
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const colors = colorMap[selectedItem.color] || colorMap.slate;
  const accentTextClass = isDark ? colors.text.replace('-800', '-300') : colors.text;

  return (
    <div className={`animate-in fade-in slide-in-from-right-4 duration-300 flex flex-col h-full rounded-2xl shadow-2xl border overflow-hidden ${
      isDark 
        ? 'bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border-slate-700/50' 
        : 'bg-white border-slate-200/80'
    }`}>
      <div className={`px-6 sm:px-7 md:px-8 py-6 flex items-center gap-4 ${
        isDark ? colors.bgBase.replace('bg-', 'bg-gradient-to-br from-').replace('-600', '-700') + ' via-' + colors.bgBase + ' to-' + colors.bgBase.replace('bg-', '') + '/80' : colors.bgBase
      } text-white shadow-md z-10 relative`}>
        <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm border border-white/20 shrink-0">
          <selectedItem.icon size={32} className="drop-shadow-md" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white drop-shadow-sm leading-tight tracking-tight">{selectedItem.name}</h3>
          <span className="text-white/80 text-sm font-medium tracking-wide uppercase mt-1 block">{selectedItem.category}</span>
        </div>
      </div>

      <div className="p-6 sm:p-7 md:p-8 flex-grow overflow-y-auto space-y-6 sm:space-y-7 custom-scrollbar">
        <section className={`rounded-xl border p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
          isDark ? 'border-slate-700/50 bg-slate-800/20' : 'border-slate-200 bg-slate-50/80'
        }`}>
          <div>
            <p className={`text-[10px] uppercase tracking-widest font-semibold ${isDark ? 'text-slate-400' : 'text-slate-400'}`}>Ruta actual</p>
            <p className={`text-sm font-semibold mt-1 ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
              {activeTabMeta.title} / {selectedItem.name}
            </p>
          </div>
          <button
            onClick={onClearSelection}
            className={`rounded-lg border px-3 py-2 text-xs font-semibold uppercase tracking-widest transition-all ${
              isDark 
                ? 'border-slate-600 text-slate-300 hover:bg-slate-700 hover:border-slate-500' 
                : 'border-slate-300 text-slate-600 hover:bg-white hover:border-slate-400'
            }`}
          >
            Cambiar tema
          </button>
        </section>

        <section>
          <h4 className={`text-lg font-semibold mb-4 pb-2 border-b flex items-center gap-2 ${
            isDark ? 'text-white border-slate-700/50' : 'text-slate-800 border-slate-100'
          }`}>
            <FileText size={18} className={colors.text.replace('text-', 'text-opacity-80 text-')} />
            Concepto y Personalidad
          </h4>
          <div className="space-y-4">
            {selectedItem.desc.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('Â«') && paragraph.endsWith('Â».')) {
                return (
                  <div key={idx} className={`p-4 rounded-xl font-medium italic ${isDark ? 'bg-indigo-500/10 border border-indigo-500/20 text-indigo-200' : `${colors.bgLight} ${colors.text} border ${colors.borderLight}`}`}>
                    {paragraph}
                  </div>
                );
              }

              return (
                <p key={idx} className={`text-[15px] leading-relaxed text-justify ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  {paragraph}
                </p>
              );
            })}
          </div>
        </section>

        {selectedItem.details && (
          <section className={`p-6 rounded-xl border shadow-inner ${
            isDark ? 'bg-slate-800/30 border-slate-700/50' : `${colors.bgLight} ${colors.borderLight}`
          }`}>
            <h4 className={`text-sm font-semibold ${accentTextClass} uppercase tracking-widest mb-4 flex items-center gap-2`}>
              <Info size={18} /> Profundización / Ficha Técnica
            </h4>
            <div className="space-y-3">
              {selectedItem.details.split('\n').map((line, idx) => {
                if (line.startsWith('â€¢')) {
                  return (
                    <div key={idx} className="flex gap-3 items-start">
                      <span className={`mt-0.5 font-bold ${accentTextClass}`}>→</span>
                      <p className={`text-[15px] leading-relaxed flex-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                        {line.substring(1).includes(':') ? (
                          <>
                            <strong className={isDark ? 'text-slate-100' : 'text-slate-900'}>{line.substring(1).split(':')[0]}:</strong>
                            {line.substring(1).substring(line.substring(1).indexOf(':') + 1)}
                          </>
                        ) : (
                          line.substring(1)
                        )}
                      </p>
                    </div>
                  );
                }

                return <p key={idx} className={`text-[15px] font-semibold mb-2 ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>{line}</p>;
              })}
            </div>
          </section>
        )}

        {selectedItem.pros && (
          <section className="space-y-5">
            <div className="grid grid-cols-1 gap-4">
              <div className={`p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow ${
                isDark ? 'bg-emerald-500/10 border border-emerald-500/20' : 'bg-emerald-50 border border-emerald-200'
              }`}>
                <h4 className={`text-[12px] font-semibold uppercase tracking-widest mb-4 flex items-center gap-2 ${
                  isDark ? 'text-emerald-300' : 'text-emerald-800'
                }`}>
                  <CheckCircle2 size={18} className={isDark ? 'text-emerald-400' : 'text-emerald-600'} /> 
                  Mejores Aspectos (Pros)
                </h4>
                <ul className="space-y-3">
                  {selectedItem.pros.map((p, i) => (
                    <li key={i} className={`text-[15px] flex items-start gap-3 leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      <span className="text-emerald-500 mt-0.5"><CheckCircle2 size={15} /></span>{p}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow ${
                isDark ? 'bg-red-500/10 border border-red-500/20' : 'bg-red-50 border border-red-200'
              }`}>
                <h4 className={`text-[12px] font-semibold uppercase tracking-widest mb-4 flex items-center gap-2 ${
                  isDark ? 'text-red-300' : 'text-red-800'
                }`}>
                  <XCircle size={18} className={isDark ? 'text-red-400' : 'text-red-600'} /> 
                  Debilidades (Contras)
                </h4>
                <ul className="space-y-3">
                  {selectedItem.cons.map((c, i) => (
                    <li key={i} className={`text-[15px] flex items-start gap-3 leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      <span className="text-red-500 mt-0.5"><AlertTriangle size={15} /></span>{c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

        {selectedItem.examples && (
          <section className="space-y-5 mt-2">
            <div className={`p-6 rounded-xl border shadow-xl relative overflow-hidden ${
              isDark 
                ? 'bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700' 
                : 'bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700'
            }`}>
              <Zap size={80} className="absolute -right-4 -bottom-4 text-slate-600/30" />
              <h4 className="text-[12px] font-semibold text-indigo-300 uppercase tracking-widest mb-3 flex items-center gap-2 relative z-10">
                <Zap size={18} /> Ejemplos del Mundo Real
              </h4>
              <p className="text-[15px] text-slate-200 leading-relaxed relative z-10 italic">
                "{selectedItem.examples}"
              </p>
            </div>
          </section>
        )}

        {selectedItem.shortcutList && (
          <section className="space-y-4">
            <h4 className={`text-lg font-semibold mb-2 pb-2 border-b flex items-center gap-2 ${
              isDark ? 'text-white border-slate-700/50' : 'text-slate-800 border-slate-100'
            }`}>
              <Keyboard size={20} className={accentTextClass.replace('text-', 'text-opacity-80 text-')} />
              Atajos Clave
            </h4>
            <div className="grid grid-cols-1 gap-3">
              {selectedItem.shortcutList.map((shortcut) => (
                <article key={shortcut.combo} className={`rounded-xl border p-4 shadow-sm ${
                  isDark ? 'border-slate-700/50 bg-slate-800/20' : 'border-slate-200 bg-slate-50/80'
                }`}>
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <span className={`inline-flex items-center rounded-lg px-3 py-1.5 text-xs font-bold uppercase tracking-widest ${
                      isDark ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30' : `${colors.bgLight} ${colors.text} border ${colors.borderLight}`
                    }`}>
                      {shortcut.combo}
                    </span>
                    <span className={`text-sm font-semibold ${isDark ? 'text-slate-100' : 'text-slate-700'}`}>{shortcut.action}</span>
                  </div>
                  <p className={`text-[15px] leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{shortcut.why}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        {selectedItem.tips && (
          <section className={`p-6 rounded-xl border shadow-inner ${
            isDark ? 'bg-slate-800/30 border-slate-700/50' : `${colors.bgLight} ${colors.borderLight}`
          }`}>
            <h4 className={`text-sm font-semibold ${accentTextClass} uppercase tracking-widest mb-4 flex items-center gap-2`}>
              <ShieldCheck size={18} /> Consejos de Práctica
            </h4>
            <ul className="space-y-3">
              {selectedItem.tips.map((tip) => (
                <li key={tip} className={`text-[15px] flex items-start gap-3 leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  <span className={`mt-0.5 font-bold ${colors.text}`}>→</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
};
