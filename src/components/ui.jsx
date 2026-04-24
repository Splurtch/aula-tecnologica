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
    ? `ring-2 ${colors.ring} shadow-cyber-hover -translate-y-0.5 ${isDark ? 'bg-slate-900 text-white border-white/10' : `${colors.bgLight} ${colors.text} ${colors.borderHeavy}`} z-10`
    : isDark
      ? 'bg-slate-900/80 hover:bg-slate-800 text-slate-200 border-slate-700/50 hover:border-slate-600 hover:-translate-y-0.5'
      : 'bg-white/90 hover:bg-white text-slate-700 border-slate-200/80 hover:border-slate-300 hover:-translate-y-0.5 shadow-cyber';

  return (
    <button
      onClick={(e) => onSelect(id, e, dataSet)}
      className={`group relative flex min-h-[110px] flex-col items-start justify-between overflow-hidden rounded-sm border p-4 sm:p-5 text-left transition-all duration-300 ${activeClass} ${extraClass}`}
    >
      <div
        className={`pointer-events-none absolute inset-0 transition-opacity duration-400 ${
          isSelected
            ? isDark
              ? 'bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-100'
              : 'bg-gradient-to-br from-blue-50/70 via-white/50 to-transparent opacity-100'
            : 'opacity-0 group-hover:opacity-100'
        }`}
      />
      <div
        className={`absolute -right-6 -top-6 h-28 w-28 rounded-full blur-2xl transition-opacity duration-500 ${
          isSelected ? 'opacity-40' : 'opacity-0 group-hover:opacity-20'
        } ${isDark ? 'bg-blue-500' : 'bg-blue-400'}`}
      />

      <div className="relative z-10 flex w-full items-center justify-between gap-3">
        <span
          className={`rounded-sm border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] ${
            isSelected
              ? isDark
                ? 'border-blue-500/30 bg-blue-500/20 text-blue-200'
                : `${colors.borderLight} bg-white/90 ${colors.text}`
              : isDark
                ? 'border-slate-700 bg-slate-800 text-slate-400'
                : 'border-slate-200 bg-slate-50/80 text-slate-500'
          }`}
        >
          {comp.category}
        </span>
        <span
          className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${
            isSelected ? (isDark ? 'text-blue-300' : colors.text) : isDark ? 'text-slate-500' : 'text-slate-400'
          }`}
        >
          {isSelected ? 'Abierta' : 'Explorar'}
        </span>
      </div>

      <div className="relative z-10 mt-4 flex w-full items-start gap-4">
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border transition-all duration-300 ${
            isSelected
              ? isDark
                ? 'border-blue-500/30 bg-blue-500/20 text-blue-300 shadow-[0_0_20px_rgba(59,130,246,0.25)]'
                : `${colors.borderLight} bg-white/90 ${colors.text} shadow-cyber`
              : isDark
                ? 'border-slate-700 bg-slate-800 text-slate-400'
                : 'border-slate-200 bg-white/80 text-slate-500'
          }`}
        >
          <comp.icon
            size={22}
            className={isSelected ? (isDark ? 'text-blue-300' : colors.text) : (isDark ? 'text-slate-400' : 'text-slate-500')}
            strokeWidth={1.75}
          />
        </div>
        <div className="min-w-0 flex-1">
          <span className="block text-[14px] sm:text-[15px] font-semibold text-slate-900 dark:text-white leading-tight tracking-wide">{comp.name}</span>
          <p className={`mt-2 text-[12px] sm:text-[13px] leading-relaxed ${isSelected ? (isDark ? 'text-slate-300' : 'text-slate-600') : isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            {isSelected ? 'Pulsa de nuevo para cerrar.' : 'Abre una ficha guiada con explicación.'}
          </p>
        </div>
        <ChevronRight
          size={16}
          className={`mt-0.5 shrink-0 transition-all duration-300 ${
            isSelected
              ? 'translate-x-1 rotate-90 text-blue-500'
              : isDark
                ? 'text-slate-500 group-hover:text-slate-300 group-hover:translate-x-0.5'
                : 'text-slate-400 group-hover:text-slate-600 group-hover:translate-x-0.5'
          }`}
        />
      </div>

      <div className="relative z-10 mt-4 flex w-full items-center justify-between gap-3">
        <span className={`text-xs font-medium ${isSelected ? (isDark ? 'text-slate-200' : colors.text) : isDark ? 'text-slate-500' : 'text-slate-400'}`}>
          {isSelected ? 'Ficha activa' : 'Sin abrir'}
        </span>
        <span className={`text-xs font-semibold uppercase tracking-[0.2em] ${isSelected ? (isDark ? 'text-blue-300' : colors.text) : isDark ? 'text-slate-500' : 'text-slate-400'}`}>
          {isSelected ? 'Cerrar' : 'Abrir'}
        </span>
      </div>

      <div
        className={`absolute inset-x-0 bottom-0 h-0.5 transition-all duration-500 ${
          isSelected ? colors.bgBase : isDark ? 'bg-slate-800' : 'bg-slate-100'
        }`}
      />
      {isSelected && (
        <span className="absolute right-3 top-3 flex h-3 w-3">
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
      className={`h-11 md:h-12 rounded-sm border text-xs md:text-sm font-semibold flex items-center justify-center transition-all duration-300 ${
        isActive
          ? 'bg-gradient-to-r from-blue-500 to-violet-500 text-white border-blue-300 shadow-[0_0_15px_rgba(59,130,246,0.4)] -translate-y-0.5'
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
      className={`flex flex-col items-start justify-between p-4 sm:p-4 rounded-sm font-semibold text-left uppercase tracking-wide transition-all duration-300 border min-h-[96px] sm:min-h-[104px] ${activeClass}`}
    >
      <div className="flex items-center justify-between w-full gap-3">
        <span className={`text-[10px] px-2 py-1 rounded-sm font-semibold uppercase tracking-wider ${
          isActive
            ? 'bg-white/15 border border-white/20 text-white/90'
            : isDark
              ? 'bg-slate-800 border border-slate-700 text-slate-400'
              : 'bg-slate-100 border border-slate-200 text-slate-500'
        }`}>
          M{tab.step}
        </span>
        <Icon size={18} className={isActive ? 'text-white/80' : isDark ? 'text-slate-500' : 'text-slate-400'} />
      </div>
      <div className="mt-2">
        <p className="text-[13px] sm:text-[14px] font-semibold leading-tight tracking-wide">{tab.title}</p>
        <p className={`text-[10px] sm:text-[11px] mt-1.5 normal-case tracking-normal leading-relaxed font-medium ${
          isActive ? 'text-white/75' : isDark ? 'text-slate-400' : 'text-slate-500'
        }`}>
          {tab.subtitle}
        </p>
      </div>
      {isActive && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400" />}
    </button>
  );
};

export const SectionMenuItem = ({ tab, isActive, onClick, isDark = false }) => {
  const Icon = tab.icon;

  return (
    <button
      onClick={() => onClick(tab.id)}
      className={`w-full rounded-sm border p-3.5 text-left transition-all duration-300 ${
        isActive
          ? tab.activeClass.replace('scale-105', '').replace('z-10', '')
          : isDark
            ? 'border-slate-700/50 bg-slate-900/80 text-slate-200 hover:bg-slate-800 hover:border-slate-600'
            : 'border-slate-200/80 bg-white/90 text-slate-700 hover:bg-white hover:border-slate-300 shadow-cyber'
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3 min-w-0">
          <div className={`rounded-sm p-2 border shrink-0 ${
            isActive
              ? 'border-white/20 bg-white/10 text-white'
              : isDark
                ? 'border-slate-700 bg-slate-800 text-slate-300'
                : 'border-slate-200 bg-slate-50 text-slate-500'
          }`}>
            <Icon size={16} />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className={`text-[9px] font-semibold uppercase tracking-wider ${
                isActive ? 'text-white/70' : isDark ? 'text-slate-500' : 'text-slate-400'
              }`}>
                M{tab.step}
              </span>
            </div>
            <p className="mt-1 text-[13px] sm:text-[14px] font-semibold leading-tight tracking-wide">{tab.title}</p>
            <p className={`mt-0.5 text-[11px] sm:text-[12px] normal-case leading-relaxed ${
              isActive ? 'text-white/75' : isDark ? 'text-slate-400' : 'text-slate-500'
            }`}>
              {tab.subtitle}
            </p>
          </div>
        </div>
        <span className={`shrink-0 rounded-sm px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider ${
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
    emerald: `bg-emerald-900/90 border border-emerald-400 ${glow} text-emerald-200`,
    blue: `bg-blue-600/95 border border-blue-300 ${glow} text-blue-100`,
    purple: `bg-purple-700/95 border border-purple-400 ${glow} text-purple-100`,
    red: `bg-red-600/80 border border-red-400 ${glow} text-red-100 backdrop-blur-sm`,
    amber: `bg-amber-700/95 border border-amber-400 ${glow} text-amber-100`,
    zinc: `bg-zinc-800/95 border border-zinc-500 ${glow} text-zinc-200`,
    cyan: `bg-cyan-900/60 border border-cyan-400 ${glow} text-cyan-200 backdrop-blur-md`,
  };

  return (
    <div
      onClick={(e) => onSelect(id, e, hardwareData)}
      style={{ ...style, transform: `translateZ(${currentZ}px)`, transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
      className={`absolute rounded-sm flex flex-col items-center justify-center cursor-pointer group hover:brightness-125 ${theme3D[comp.color]} ${customClass}`}
      title={comp.name}
    >
      {children || (
        <div className="flex flex-col items-center justify-center pointer-events-none">
          <comp.icon className={`w-7 h-7 transition-transform group-hover:scale-110 ${isSelected ? 'animate-pulse' : ''}`} />
          <span className="text-[10px] font-semibold text-center mt-1 px-2 bg-black/30 rounded-sm">{comp.name}</span>
        </div>
      )}
    </div>
  );
};

export const PanelDerecho = ({ selectedItem, activeTabMeta, itemCount, onStartModule, onClearSelection, colorMap, isDark = false }) => {
      if (!selectedItem) {
    return (
      <div className="h-full">
        <div className={`rounded-sm border shadow-xl overflow-hidden h-full ${
          isDark
            ? 'bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950/30 border-blue-500/20'
            : 'bg-gradient-to-br from-white via-white to-blue-50/50 border-slate-200/80 backdrop-blur-xl'
        }`}>
          <div className={`p-5 sm:p-6 md:p-7 ${isDark ? 'bg-gradient-to-br from-blue-600/10 via-transparent to-transparent' : 'bg-gradient-to-br from-blue-600 via-blue-700 to-violet-700'}`}>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-sm bg-white/10 border border-white/10 backdrop-blur-sm">
                <activeTabMeta.icon size={28} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-blue-200/80 font-semibold">Panel de apoyo</p>
                <h3 className="text-xl font-semibold text-white mt-1 tracking-wide">{activeTabMeta.title}</h3>
              </div>
            </div>
            <p className="text-blue-100/75 leading-relaxed mt-4 text-sm">{activeTabMeta.description}</p>
          </div>

          <div className={`p-5 sm:p-6 md:p-7 space-y-4 ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
            <div className="grid grid-cols-2 gap-3">
              <div className={`rounded-sm border p-3.5 ${isDark ? 'border-slate-800/50 bg-slate-800/30' : 'border-slate-200 bg-slate-50/80'}`}>
                <p className={`text-[9px] uppercase tracking-widest font-semibold ${isDark ? 'text-slate-400' : 'text-slate-400'}`}>Conceptos</p>
                <p className={`text-2xl font-semibold mt-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>{itemCount}</p>
              </div>
              <div className={`rounded-sm border p-3.5 ${isDark ? 'border-slate-800/50 bg-slate-800/30' : 'border-slate-200 bg-slate-50/80'}`}>
                <p className={`text-[9px] uppercase tracking-widest font-semibold ${isDark ? 'text-slate-400' : 'text-slate-400'}`}>Estado</p>
                <p className={`text-sm font-semibold mt-1 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>Listo para explorar</p>
              </div>
            </div>

            <div className={`rounded-sm border p-4 ${isDark ? 'border-blue-500/20 bg-blue-500/5' : 'border-blue-100 bg-blue-50/50'}`}>
              <p className={`text-xs font-semibold uppercase tracking-widest ${isDark ? 'text-blue-300' : 'text-blue-700'}`}>
                Siguiente paso
              </p>
              <p className={`leading-relaxed mt-2 text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                Empieza por una pieza o concepto del módulo actual.
              </p>
            </div>

            <div className="flex flex-col gap-2 pt-1">
              <button
                onClick={onStartModule}
                className={`w-full rounded-sm px-4 py-3.5 font-semibold transition-all duration-300 ${
                  isDark
                    ? 'bg-gradient-to-r from-blue-500 to-violet-500 text-white hover:from-blue-400 hover:to-violet-400 shadow-lg shadow-blue-500/20'
                    : 'bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-900/20'
                }`}
              >
                Empezar módulo
              </button>
              <p className={`text-xs leading-relaxed text-center ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                UX: menos saturación, más foco
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
    <div className={`animate-in fade-in slide-in-from-right-4 duration-300 flex flex-col h-full rounded-sm shadow-xl border overflow-hidden ${
      isDark
        ? 'bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border-slate-700/50'
        : 'bg-white border-slate-200/80'
    }`}>
      <div className={`px-5 sm:px-6 md:px-7 py-5 flex items-center gap-4 ${
        isDark ? colors.bgBase.replace('bg-', 'bg-gradient-to-br from-').replace('-600', '-700') + ' via-' + colors.bgBase + ' to-' + colors.bgBase.replace('bg-', '') + '/80' : colors.bgBase
      } text-white shadow-md z-10 relative`}>
        <div className="p-3 bg-white/15 rounded-sm backdrop-blur-sm border border-white/15 shrink-0">
          <selectedItem.icon size={28} className="drop-shadow-md" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white drop-shadow-sm leading-tight tracking-wide">{selectedItem.name}</h3>
          <span className="text-white/75 text-xs font-medium tracking-wide uppercase mt-0.5 block">{selectedItem.category}</span>
        </div>
      </div>

      <div className="p-5 sm:p-6 md:p-7 flex-grow overflow-y-auto space-y-5 sm:space-y-6 custom-scrollbar">
        <section className={`rounded-sm border p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
          isDark ? 'border-slate-700/50 bg-slate-800/20' : 'border-slate-200 bg-slate-50/80'
        }`}>
          <div>
            <p className={`text-[9px] uppercase tracking-widest font-semibold ${isDark ? 'text-slate-400' : 'text-slate-400'}`}>Ruta actual</p>
            <p className={`text-sm font-medium mt-0.5 ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
              {activeTabMeta.title} / {selectedItem.name}
            </p>
          </div>
          <button
            onClick={onClearSelection}
            className={`rounded-sm border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest transition-all ${
              isDark
                ? 'border-slate-600 text-slate-300 hover:bg-slate-700 hover:border-slate-500'
                : 'border-slate-300 text-slate-600 hover:bg-white hover:border-slate-400'
            }`}
          >
            Cambiar tema
          </button>
        </section>

        <section>
          <h4 className={`text-base font-semibold mb-3 pb-2 border-b flex items-center gap-2 ${
            isDark ? 'text-white border-slate-700/50' : 'text-slate-800 border-slate-100'
          }`}>
            <FileText size={16} className={colors.text.replace('text-', 'text-opacity-80 text-')} />
            Concepto
          </h4>
          <div className="space-y-3">
            {selectedItem.desc.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('Â«') && paragraph.endsWith('Â».')) {
                return (
                  <div key={idx} className={`p-3.5 rounded-sm font-medium italic ${isDark ? 'bg-blue-500/10 border border-blue-500/20 text-blue-200' : `${colors.bgLight} ${colors.text} border ${colors.borderLight}`}`}>
                    {paragraph}
                  </div>
                );
              }

              return (
                <p key={idx} className={`text-[14px] leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  {paragraph}
                </p>
              );
            })}
          </div>
        </section>

        {selectedItem.details && (
          <section className={`p-5 rounded-sm border shadow-inner ${
            isDark ? 'bg-slate-800/30 border-slate-700/50' : `${colors.bgLight} ${colors.borderLight}`
          }`}>
            <h4 className={`text-xs font-semibold ${accentTextClass} uppercase tracking-widest mb-3 flex items-center gap-2`}>
              <Info size={16} /> Profundización
            </h4>
            <div className="space-y-2.5">
              {selectedItem.details.split('\n').map((line, idx) => {
                if (line.startsWith('â€¢')) {
                  return (
                    <div key={idx} className="flex gap-3 items-start">
                      <span className={`mt-0.5 font-semibold ${accentTextClass}`}>→</span>
                      <p className={`text-[14px] leading-relaxed flex-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
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

                return <p key={idx} className={`text-[14px] font-medium mb-1.5 ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>{line}</p>;
              })}
            </div>
          </section>
        )}

        {selectedItem.pros && (
          <section className="space-y-4">
            <div className="grid grid-cols-1 gap-3">
              <div className={`p-4 rounded-sm shadow-sm hover:shadow-md transition-shadow ${
                isDark ? 'bg-emerald-500/10 border border-emerald-500/20' : 'bg-emerald-50 border border-emerald-200'
              }`}>
                <h4 className={`text-[11px] font-semibold uppercase tracking-widest mb-3 flex items-center gap-2 ${
                  isDark ? 'text-emerald-300' : 'text-emerald-800'
                }`}>
                  <CheckCircle2 size={16} className={isDark ? 'text-emerald-400' : 'text-emerald-600'} />
                  Pros
                </h4>
                <ul className="space-y-2.5">
                  {selectedItem.pros.map((p, i) => (
                    <li key={i} className={`text-[14px] flex items-start gap-2.5 leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      <span className="text-emerald-500 mt-0.5"><CheckCircle2 size={14} /></span>{p}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`p-4 rounded-sm shadow-sm hover:shadow-md transition-shadow ${
                isDark ? 'bg-red-500/10 border border-red-500/20' : 'bg-red-50 border border-red-200'
              }`}>
                <h4 className={`text-[11px] font-semibold uppercase tracking-widest mb-3 flex items-center gap-2 ${
                  isDark ? 'text-red-300' : 'text-red-800'
                }`}>
                  <XCircle size={16} className={isDark ? 'text-red-400' : 'text-red-600'} />
                  Contras
                </h4>
                <ul className="space-y-2.5">
                  {selectedItem.cons.map((c, i) => (
                    <li key={i} className={`text-[14px] flex items-start gap-2.5 leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      <span className="text-red-500 mt-0.5"><AlertTriangle size={14} /></span>{c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

        {selectedItem.examples && (
          <section className="space-y-4">
            <div className={`p-5 rounded-sm border shadow-xl relative overflow-hidden ${
              isDark
                ? 'bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700'
                : 'bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700'
            }`}>
              <Zap size={60} className="absolute -right-3 -bottom-3 text-slate-600/30" />
              <h4 className="text-[11px] font-semibold text-blue-300 uppercase tracking-widest mb-2 flex items-center gap-2 relative z-10">
                <Zap size={16} /> Ejemplos Reales
              </h4>
              <p className="text-[14px] text-slate-200 leading-relaxed relative z-10 italic">
                "{selectedItem.examples}"
              </p>
            </div>
          </section>
        )}

        {selectedItem.shortcutList && (
          <section className="space-y-3">
            <h4 className={`text-base font-semibold mb-2 pb-2 border-b flex items-center gap-2 ${
              isDark ? 'text-white border-slate-700/50' : 'text-slate-800 border-slate-100'
            }`}>
              <Keyboard size={18} className={accentTextClass.replace('text-', 'text-opacity-80 text-')} />
              Atajos Clave
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {selectedItem.shortcutList.map((shortcut) => (
                <article key={shortcut.combo} className={`rounded-sm border p-3.5 shadow-sm ${
                  isDark ? 'border-slate-700/50 bg-slate-800/20' : 'border-slate-200 bg-slate-50/80'
                }`}>
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <span className={`inline-flex items-center rounded-sm px-2.5 py-1 text-[11px] font-semibold uppercase tracking-widest ${
                      isDark ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' : `${colors.bgLight} ${colors.text} border ${colors.borderLight}`
                    }`}>
                      {shortcut.combo}
                    </span>
                    <span className={`text-sm font-medium ${isDark ? 'text-slate-100' : 'text-slate-700'}`}>{shortcut.action}</span>
                  </div>
                  <p className={`text-[13px] leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{shortcut.why}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        {selectedItem.tips && (
          <section className={`p-5 rounded-sm border shadow-inner ${
            isDark ? 'bg-slate-800/30 border-slate-700/50' : `${colors.bgLight} ${colors.borderLight}`
          }`}>
            <h4 className={`text-xs font-semibold ${accentTextClass} uppercase tracking-widest mb-3 flex items-center gap-2`}>
              <ShieldCheck size={16} /> Consejos
            </h4>
            <ul className="space-y-2.5">
              {selectedItem.tips.map((tip) => (
                <li key={tip} className={`text-[14px] flex items-start gap-2.5 leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  <span className={`mt-0.5 font-semibold ${colors.text}`}>→</span>
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