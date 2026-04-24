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

export const InteractiveButton = ({ id, dataSet, extraClass = "", selectedItem, onSelect, colorMap }) => {
  const comp = dataSet[id];
  if (!comp) return null;

  const isSelected = selectedItem?.id === id;
  const colors = colorMap[comp.color] || colorMap.slate;

  const activeClass = isSelected
    ? `ring-4 ${colors.ring} shadow-lg scale-105 ${colors.bgLight} ${colors.text} ${colors.borderHeavy} z-10`
    : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-400';

  return (
    <button
      onClick={(e) => onSelect(id, e, dataSet)}
      className={`relative flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all duration-300 ${activeClass} ${extraClass}`}
    >
      <comp.icon size={36} className={`mb-3 ${isSelected ? `text-${comp.color}-600` : 'text-slate-500'}`} strokeWidth={1.5} />
      <span className="text-[15px] font-bold text-center leading-tight">{comp.name}</span>
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

export const TabButton = ({ tab, isActive, onClick }) => {
  const Icon = tab.icon;

  return (
    <button
      onClick={() => onClick(tab.id)}
      className={`flex flex-col items-start justify-between p-4 md:p-5 rounded-2xl font-black text-left uppercase tracking-wide transition-all duration-300 border-b-4 min-h-[132px] ${isActive ? tab.activeClass : tab.idleClass}`}
    >
      <div className="flex items-center justify-between w-full gap-3">
        <span className={`text-[11px] px-2.5 py-1 rounded-full border ${isActive ? 'bg-white/15 border-white/20 text-white/80' : 'bg-slate-100 border-slate-200 text-slate-500'}`}>
          Modulo {tab.step}
        </span>
        <Icon size={24} />
      </div>
      <div className="mt-4">
        <p className="text-[14px] md:text-[15px] leading-tight">{tab.title}</p>
        <p className={`text-[11px] md:text-[12px] mt-2 normal-case tracking-normal leading-relaxed font-semibold ${isActive ? 'text-white/85' : 'text-slate-500'}`}>
          {tab.subtitle}
        </p>
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

export const PanelDerecho = ({ selectedItem, activeTabMeta, itemCount, onStartModule, onClearSelection, colorMap }) => {
  if (!selectedItem) {
    return (
      <div className="flex flex-col justify-center h-full py-10 px-6 md:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white shadow-xl overflow-hidden">
          <div className="p-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
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

          <div className="p-8 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-widest text-slate-400 font-black">Conceptos</p>
                <p className="text-3xl font-black text-slate-900 mt-2">{itemCount}</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-widest text-slate-400 font-black">Estado</p>
                <p className="text-lg font-black text-slate-900 mt-2">Listo para explorar</p>
              </div>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
              <p className="text-sm font-black text-blue-900 uppercase tracking-widest">Siguiente paso recomendado</p>
              <p className="text-slate-700 leading-relaxed mt-3">
                Empieza por una pieza o concepto del modulo actual. El panel se ira llenando con explicaciones, consejos y ejemplos conforme avances.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <button
                onClick={onStartModule}
                className="w-full rounded-2xl bg-slate-900 text-white px-5 py-4 font-black hover:bg-slate-800 transition-colors"
              >
                Empezar este modulo
              </button>
              <p className="text-sm text-slate-500 leading-relaxed">
                Consejo UX: menos saturacion, mas foco. El contenido aparece solo cuando el usuario ya eligio un tema.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const colors = colorMap[selectedItem.color] || colorMap.slate;

  return (
    <div className="animate-in fade-in slide-in-from-right-8 duration-500 flex flex-col h-full bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
      <div className={`px-8 py-6 flex items-center gap-4 ${colors.bgBase} text-white shadow-md z-10 relative`}>
        <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm border border-white/30 shrink-0">
          <selectedItem.icon size={36} className="drop-shadow-md" />
        </div>
        <div>
          <h3 className="text-2xl font-black drop-shadow-sm leading-tight tracking-tight">{selectedItem.name}</h3>
          <span className="text-white/80 text-sm font-semibold tracking-wide uppercase mt-1 block">{selectedItem.category}</span>
        </div>
      </div>

      <div className="p-8 flex-grow overflow-y-auto space-y-8 custom-scrollbar">
        <section className="rounded-2xl border border-slate-200 bg-slate-50 p-4 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-slate-400 font-black">Ruta actual</p>
            <p className="text-sm font-bold text-slate-700 mt-2">{activeTabMeta.title} / {selectedItem.name}</p>
          </div>
          <button
            onClick={onClearSelection}
            className="rounded-full border border-slate-300 px-3 py-2 text-xs font-black uppercase tracking-widest text-slate-600 hover:bg-white transition-colors"
          >
            Cambiar tema
          </button>
        </section>

        <section>
          <h4 className="text-xl font-bold text-slate-800 mb-4 border-b-2 border-slate-100 pb-2 flex items-center gap-2">
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
                <p key={idx} className="text-slate-600 text-[16px] leading-relaxed text-justify">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </section>

        {selectedItem.details && (
          <section className={`${colors.bgLight} p-6 rounded-2xl border ${colors.borderLight} shadow-inner`}>
            <h4 className={`text-sm font-black ${colors.text} uppercase tracking-widest mb-4 flex items-center gap-2`}>
              <Info size={18} /> Profundizacion / Ficha Tecnica
            </h4>
            <div className="space-y-3">
              {selectedItem.details.split('\n').map((line, idx) => {
                if (line.startsWith('â€¢')) {
                  return (
                    <div key={idx} className="flex gap-3 items-start">
                      <span className={`mt-1 font-bold ${colors.text}`}>&rarr;</span>
                      <p className="text-slate-700 text-[15px] leading-relaxed flex-1">
                        {line.substring(1).includes(':') ? (
                          <>
                            <strong className="text-slate-900">{line.substring(1).split(':')[0]}:</strong>
                            {line.substring(1).substring(line.substring(1).indexOf(':') + 1)}
                          </>
                        ) : (
                          line.substring(1)
                        )}
                      </p>
                    </div>
                  );
                }

                return <p key={idx} className="text-slate-700 text-[15px] font-semibold mb-2">{line}</p>;
              })}
            </div>
          </section>
        )}

        {selectedItem.pros && (
          <section className="space-y-6">
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-emerald-50 border border-emerald-200 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-[13px] font-black text-emerald-800 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-emerald-600" /> Mejores Aspectos (Pros)
                </h4>
                <ul className="space-y-3">
                  {selectedItem.pros.map((p, i) => (
                    <li key={i} className="text-[15px] text-slate-700 flex items-start gap-3 leading-relaxed">
                      <span className="text-emerald-500 mt-0.5"><CheckCircle2 size={16} /></span>{p}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-red-50 border border-red-200 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-[13px] font-black text-red-800 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <XCircle size={18} className="text-red-600" /> Debilidades (Contras)
                </h4>
                <ul className="space-y-3">
                  {selectedItem.cons.map((c, i) => (
                    <li key={i} className="text-[15px] text-slate-700 flex items-start gap-3 leading-relaxed">
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
            <h4 className="text-xl font-bold text-slate-800 mb-2 border-b-2 border-slate-100 pb-2 flex items-center gap-2">
              <Keyboard size={20} className={colors.text.replace('text-', 'text-opacity-80 text-')} />
              Atajos Clave
            </h4>
            <div className="grid grid-cols-1 gap-3">
              {selectedItem.shortcutList.map((shortcut) => (
                <article key={shortcut.combo} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-black uppercase tracking-widest ${colors.bgLight} ${colors.text} border ${colors.borderLight}`}>
                      {shortcut.combo}
                    </span>
                    <span className="text-sm font-bold text-slate-700">{shortcut.action}</span>
                  </div>
                  <p className="text-[15px] text-slate-600 leading-relaxed">{shortcut.why}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        {selectedItem.tips && (
          <section className={`${colors.bgLight} p-6 rounded-2xl border ${colors.borderLight} shadow-inner`}>
            <h4 className={`text-sm font-black ${colors.text} uppercase tracking-widest mb-4 flex items-center gap-2`}>
              <ShieldCheck size={18} /> Consejos de Practica
            </h4>
            <ul className="space-y-3">
              {selectedItem.tips.map((tip) => (
                <li key={tip} className="text-[15px] text-slate-700 flex items-start gap-3 leading-relaxed">
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
