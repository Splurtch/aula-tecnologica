import {
  AlertTriangle,
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
    ? `ring-4 ${colors.ring} shadow-lg scale-[1.02] ${isDark ? 'bg-slate-900 text-white border-white/10' : `${colors.bgLight} ${colors.text} ${colors.borderHeavy}`} z-10`
    : isDark
      ? 'bg-slate-900/90 hover:bg-slate-800 text-slate-100 border-slate-800 hover:border-slate-700'
      : 'bg-white/88 hover:bg-white text-slate-700 border-slate-200 hover:border-slate-400';

  return (
    <button
      onClick={(e) => onSelect(id, e, dataSet)}
      className={`relative flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl border-2 transition-all duration-300 ${activeClass} ${extraClass}`}
    >
      <comp.icon
        size={36}
        className={`mb-3 ${isSelected ? (isDark ? 'text-white' : colors.text) : (isDark ? 'text-slate-400' : 'text-slate-500')}`}
        strokeWidth={1.5}
      />
      <span className="text-[14px] sm:text-[15px] font-bold text-center leading-tight">{comp.name}</span>
      {isSelected && (
        <span className="absolute -top-2 -right-2 flex h-4 w-4">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${colors.bgBase} opacity-75`}></span>
          <span className={`relative inline-flex rounded-full h-4 w-4 ${colors.bgBase}`}></span>
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
      ? 'bg-slate-950/80 text-slate-300 hover:bg-slate-900 hover:text-white border-slate-800 shadow-sm'
      : tab.idleClass;

  return (
    <button
      onClick={() => onClick(tab.id)}
      className={`flex flex-col items-start justify-between p-3 sm:p-4 md:p-5 rounded-2xl font-black text-left uppercase tracking-wide transition-all duration-300 border min-h-[112px] sm:min-h-[124px] md:min-h-[132px] ${activeClass}`}
    >
      <div className="flex items-center justify-between w-full gap-3">
        <span className={`text-[11px] px-2.5 py-1 rounded-full border ${isActive ? 'bg-white/15 border-white/20 text-white/80' : isDark ? 'bg-slate-900 border-slate-800 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-500'}`}>
          Modulo {tab.step}
        </span>
        <Icon size={24} />
      </div>
      <div className="mt-4">
        <p className="text-[14px] md:text-[15px] leading-tight">{tab.title}</p>
        <p className={`text-[11px] md:text-[12px] mt-2 normal-case tracking-normal leading-relaxed font-semibold ${isActive ? 'text-white/85' : isDark ? 'text-slate-400' : 'text-slate-500'}`}>
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
      className={`w-full rounded-2xl border p-4 text-left transition-all duration-300 ${
        isActive
          ? tab.activeClass.replace('scale-105', '').replace('z-10', '')
          : isDark
            ? 'border-slate-800 bg-slate-950/80 text-slate-200 hover:bg-slate-900'
            : 'border-slate-200 bg-white/82 text-slate-700 hover:bg-slate-50'
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3 min-w-0">
          <div className={`rounded-xl p-2.5 border shrink-0 ${
            isActive
              ? 'border-white/20 bg-white/10 text-white'
              : isDark
                ? 'border-slate-800 bg-slate-900 text-slate-300'
                : 'border-slate-200 bg-slate-50 text-slate-500'
          }`}>
            <Icon size={18} />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className={`text-[11px] font-black uppercase tracking-widest ${
                isActive ? 'text-white/80' : isDark ? 'text-slate-500' : 'text-slate-400'
              }`}>
                Modulo {tab.step}
              </span>
            </div>
            <p className="mt-2 text-sm sm:text-[15px] font-black leading-tight">{tab.title}</p>
            <p className={`mt-1 text-xs sm:text-[13px] normal-case leading-relaxed ${
              isActive ? 'text-white/85' : isDark ? 'text-slate-400' : 'text-slate-500'
            }`}>
              {tab.subtitle}
            </p>
          </div>
        </div>
        <span className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-black uppercase tracking-widest ${
          isActive
            ? 'bg-white/15 text-white'
            : isDark
              ? 'bg-slate-900 text-slate-400'
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
        <div className={`rounded-[30px] border shadow-xl overflow-hidden h-full ${isDark ? 'border-slate-800 bg-slate-950' : 'border-white/80 bg-white/88 backdrop-blur-xl'}`}>
          <div className={`p-5 sm:p-6 md:p-8 ${isDark ? 'bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white' : 'bg-gradient-to-br from-indigo-600 via-indigo-600 to-violet-600 text-white'}`}>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-white/10 border border-white/10">
                <activeTabMeta.icon size={34} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-slate-300 font-black">Panel de apoyo</p>
                <h3 className="text-2xl font-black mt-2">{activeTabMeta.title}</h3>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed mt-5">{activeTabMeta.description}</p>
          </div>

          <div className={`p-5 sm:p-6 md:p-8 space-y-6 ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className={`rounded-2xl border p-4 ${isDark ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-slate-50'}`}>
                <p className={`text-xs uppercase tracking-widest font-black ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Conceptos</p>
                <p className={`text-3xl font-black mt-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{itemCount}</p>
              </div>
              <div className={`rounded-2xl border p-4 ${isDark ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-slate-50'}`}>
                <p className={`text-xs uppercase tracking-widest font-black ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Estado</p>
                <p className={`text-lg font-black mt-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>Listo para explorar</p>
              </div>
            </div>

            <div className={`rounded-2xl border p-5 ${isDark ? 'border-indigo-500/20 bg-indigo-500/10' : 'border-blue-100 bg-blue-50'}`}>
              <p className={`text-sm font-black uppercase tracking-widest ${isDark ? 'text-indigo-200' : 'text-blue-900'}`}>Siguiente paso recomendado</p>
              <p className={`leading-relaxed mt-3 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                Empieza por una pieza o concepto del modulo actual. El panel se ira llenando con explicaciones, consejos y ejemplos conforme avances.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <button
                onClick={onStartModule}
                className={`w-full rounded-2xl px-5 py-4 font-black transition-colors ${isDark ? 'bg-white text-slate-950 hover:bg-slate-200' : 'bg-slate-900 text-white hover:bg-slate-800'}`}
              >
                Empezar este modulo
              </button>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                Consejo UX: menos saturacion, mas foco. El contenido aparece solo cuando el usuario ya eligio un tema.
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
    <div className={`animate-in fade-in slide-in-from-right-8 duration-500 flex flex-col h-full rounded-[30px] shadow-2xl border overflow-hidden ${isDark ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'}`}>
      <div className={`px-5 sm:px-6 md:px-8 py-5 sm:py-6 flex items-center gap-4 ${colors.bgBase} text-white shadow-md z-10 relative`}>
        <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm border border-white/30 shrink-0">
          <selectedItem.icon size={36} className="drop-shadow-md" />
        </div>
        <div>
          <h3 className="text-2xl font-black drop-shadow-sm leading-tight tracking-tight">{selectedItem.name}</h3>
          <span className="text-white/80 text-sm font-semibold tracking-wide uppercase mt-1 block">{selectedItem.category}</span>
        </div>
      </div>

      <div className="p-5 sm:p-6 md:p-8 flex-grow overflow-y-auto space-y-6 sm:space-y-8 custom-scrollbar">
        <section className={`rounded-2xl border p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${isDark ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-slate-50'}`}>
          <div>
            <p className={`text-xs uppercase tracking-widest font-black ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Ruta actual</p>
            <p className={`text-sm font-bold mt-2 ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>{activeTabMeta.title} / {selectedItem.name}</p>
          </div>
          <button
            onClick={onClearSelection}
            className={`rounded-full border px-3 py-2 text-xs font-black uppercase tracking-widest transition-colors ${isDark ? 'border-slate-700 text-slate-300 hover:bg-slate-800' : 'border-slate-300 text-slate-600 hover:bg-white'}`}
          >
            Cambiar tema
          </button>
        </section>

        <section>
          <h4 className={`text-xl font-bold mb-4 border-b-2 pb-2 flex items-center gap-2 ${isDark ? 'text-white border-slate-800' : 'text-slate-800 border-slate-100'}`}>
            <FileText size={20} className={colors.text.replace('text-', 'text-opacity-80 text-')} />
            Concepto y Personalidad
          </h4>
          <div className="space-y-4">
            {selectedItem.desc.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('Â«') && paragraph.endsWith('Â».')) {
                return (
                  <div key={idx} className={`p-4 rounded-xl font-medium italic ${colors.bgLight} ${colors.text} border ${colors.borderLight}`}>
                    {paragraph}
                  </div>
                );
              }

              return (
                <p key={idx} className={`text-[16px] leading-relaxed text-justify ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  {paragraph}
                </p>
              );
            })}
          </div>
        </section>

        {selectedItem.details && (
          <section className={`p-6 rounded-2xl border shadow-inner ${isDark ? 'bg-slate-900 border-slate-800' : `${colors.bgLight} ${colors.borderLight}`}`}>
            <h4 className={`text-sm font-black ${accentTextClass} uppercase tracking-widest mb-4 flex items-center gap-2`}>
              <Info size={18} /> Profundizacion / Ficha Tecnica
            </h4>
            <div className="space-y-3">
              {selectedItem.details.split('\n').map((line, idx) => {
                if (line.startsWith('â€¢')) {
                  return (
                    <div key={idx} className="flex gap-3 items-start">
                      <span className={`mt-1 font-bold ${accentTextClass}`}>&rarr;</span>
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
          <section className="space-y-6">
            <div className="grid grid-cols-1 gap-4">
              <div className={`p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow ${isDark ? 'bg-emerald-500/10 border border-emerald-500/20' : 'bg-emerald-50 border border-emerald-200'}`}>
                <h4 className={`text-[13px] font-black uppercase tracking-widest mb-4 flex items-center gap-2 ${isDark ? 'text-emerald-300' : 'text-emerald-800'}`}>
                  <CheckCircle2 size={18} className={isDark ? 'text-emerald-400' : 'text-emerald-600'} /> Mejores Aspectos (Pros)
                </h4>
                <ul className="space-y-3">
                  {selectedItem.pros.map((p, i) => (
                    <li key={i} className={`text-[15px] flex items-start gap-3 leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      <span className="text-emerald-500 mt-0.5"><CheckCircle2 size={16} /></span>{p}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow ${isDark ? 'bg-red-500/10 border border-red-500/20' : 'bg-red-50 border border-red-200'}`}>
                <h4 className={`text-[13px] font-black uppercase tracking-widest mb-4 flex items-center gap-2 ${isDark ? 'text-red-300' : 'text-red-800'}`}>
                  <XCircle size={18} className={isDark ? 'text-red-400' : 'text-red-600'} /> Debilidades (Contras)
                </h4>
                <ul className="space-y-3">
                  {selectedItem.cons.map((c, i) => (
                    <li key={i} className={`text-[15px] flex items-start gap-3 leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      <span className="text-red-500 mt-0.5"><AlertTriangle size={16} /></span>{c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

        {selectedItem.examples && (
          <section className="space-y-6 mt-2">
            <div className="bg-slate-800 text-white p-6 rounded-2xl border border-slate-700 shadow-xl relative overflow-hidden">
              <Zap size={100} className="absolute -right-6 -bottom-6 text-slate-700 opacity-30" />
              <h4 className="text-[13px] font-black text-blue-300 uppercase tracking-widest mb-3 flex items-center gap-2 relative z-10">
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
            <h4 className={`text-xl font-bold mb-2 border-b-2 pb-2 flex items-center gap-2 ${isDark ? 'text-white border-slate-800' : 'text-slate-800 border-slate-100'}`}>
              <Keyboard size={20} className={accentTextClass.replace('text-', 'text-opacity-80 text-')} />
              Atajos Clave
            </h4>
            <div className="grid grid-cols-1 gap-3">
              {selectedItem.shortcutList.map((shortcut) => (
                <article key={shortcut.combo} className={`rounded-2xl border p-4 shadow-sm ${isDark ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-slate-50'}`}>
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-black uppercase tracking-widest ${colors.bgLight} ${colors.text} border ${colors.borderLight}`}>
                      {shortcut.combo}
                    </span>
                    <span className={`text-sm font-bold ${isDark ? 'text-slate-100' : 'text-slate-700'}`}>{shortcut.action}</span>
                  </div>
                  <p className={`text-[15px] leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{shortcut.why}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        {selectedItem.tips && (
          <section className={`p-6 rounded-2xl border shadow-inner ${isDark ? 'bg-slate-900 border-slate-800' : `${colors.bgLight} ${colors.borderLight}`}`}>
            <h4 className={`text-sm font-black ${accentTextClass} uppercase tracking-widest mb-4 flex items-center gap-2`}>
              <ShieldCheck size={18} /> Consejos de Practica
            </h4>
            <ul className="space-y-3">
              {selectedItem.tips.map((tip) => (
                <li key={tip} className={`text-[15px] flex items-start gap-3 leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  <span className={`mt-1 font-bold ${colors.text}`}>&rarr;</span>
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
