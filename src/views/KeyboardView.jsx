import { InteractiveButton } from '../components/ui.jsx';

export default function KeyboardView({ selectedItem, onSelect, isDark, colorMap, keyboardData, keyboardLayout }) {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500 h-full">
      <div className={`rounded-sm border p-5 md:p-6 overflow-hidden relative ${isDark ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900 border-slate-800 shadow-[0_24px_80px_rgba(15,23,42,0.55)]' : 'bg-gradient-to-br from-[#eef1ff] via-[#dddff7] to-[#f5f2ff] border-white/70 shadow-[0_24px_80px_rgba(79,70,229,0.16)]'}`}>
        <div className={`absolute inset-0 ${isDark ? 'bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.12),transparent_30%)]' : 'bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.7),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(79,70,229,0.08),transparent_30%)]'}`}></div>
        <div className="relative z-10 space-y-6">
          <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-5">
            <div className="max-w-3xl">
              <p className={`text-[11px] font-black uppercase tracking-[0.25em] ${isDark ? 'text-slate-400' : 'text-indigo-500/70'}`}>Productividad Digital</p>
              <h2 className={`text-3xl md:text-4xl font-black tracking-tight mt-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Laboratorio de Teclado Virtual</h2>
              <p className={`mt-4 leading-relaxed text-sm md:text-base ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Explora combinaciones utiles para estudiar, redactar y navegar.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className={`rounded-sm border px-4 py-3 ${isDark ? 'bg-slate-950/70 border-slate-800' : 'bg-white/60 border-white/80'}`}>
                <p className={`text-[10px] font-black uppercase tracking-[0.2em] ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>Meta</p>
                <p className={`mt-2 text-sm font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Menos clics, mas fluidez</p>
              </div>
              <div className={`rounded-sm border px-4 py-3 ${isDark ? 'bg-slate-950/70 border-slate-800' : 'bg-white/60 border-white/80'}`}>
                <p className={`text-[10px] font-black uppercase tracking-[0.2em] ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>Metodo</p>
                <p className={`mt-2 text-sm font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Practica guiada</p>
              </div>
            </div>
          </div>
          <div className={`rounded-[28px] border p-5 md:p-6 ${isDark ? 'bg-slate-950/84 border-slate-800' : 'bg-[#252b47] border-[#3d4267] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]'}`}>
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
              <div>
                <h3 className="text-white text-xl md:text-2xl font-black">Mapa de Teclas</h3>
                <p className="text-slate-400 text-sm mt-2">Selecciona un bloque para ver las teclas resaltadas.</p>
              </div>
              <div className="rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3 py-1 text-xs font-black uppercase tracking-widest text-indigo-200 w-fit">
                {selectedItem?.name || 'Selecciona un bloque'}
              </div>
            </div>
            <div className="space-y-2 overflow-x-auto overflow-y-hidden pb-2">
              {keyboardLayout.map((row, rowIndex) => (
                <div key={rowIndex} className="flex gap-1.5 sm:gap-2 min-w-[680px] sm:min-w-[780px] lg:min-w-[920px]">
                  {row.map((key) => (
                    <div key={`${rowIndex}-${key.label}`} className={key.wide}>
                      <div className={`flex items-center justify-center rounded-sm font-black text-xs px-2 py-2 ${isDark ? 'bg-slate-800 text-slate-300 border border-slate-700' : 'bg-slate-700 text-slate-200 border border-slate-600'}`}>{key.label}</div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] gap-6">
        <div className={`rounded-sm border p-5 md:p-6 ${isDark ? 'bg-slate-900/86 border-slate-800' : 'bg-white/78 border-white/80 backdrop-blur-xl'}`}>
          <h3 className={`${isDark ? 'text-white' : 'text-slate-900'} text-lg font-black mb-4`}>Bloques de Aprendizaje</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <InteractiveButton id="shortcut_basics" dataSet={keyboardData} extraClass="min-h-[92px]" selectedItem={selectedItem} onSelect={onSelect} colorMap={colorMap} isDark={isDark} />
            <InteractiveButton id="navigation_flow" dataSet={keyboardData} extraClass="min-h-[92px]" selectedItem={selectedItem} onSelect={onSelect} colorMap={colorMap} isDark={isDark} />
            <InteractiveButton id="editing_power" dataSet={keyboardData} extraClass="min-h-[92px]" selectedItem={selectedItem} onSelect={onSelect} colorMap={colorMap} isDark={isDark} />
            <InteractiveButton id="browser_mastery" dataSet={keyboardData} extraClass="min-h-[92px]" selectedItem={selectedItem} onSelect={onSelect} colorMap={colorMap} isDark={isDark} />
            <InteractiveButton id="system_control" dataSet={keyboardData} extraClass="min-h-[92px]" selectedItem={selectedItem} onSelect={onSelect} colorMap={colorMap} isDark={isDark} />
          </div>
        </div>
        <div className={`rounded-sm border p-5 md:p-6 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-[0_24px_60px_rgba(148,163,184,0.22)]'}`}>
          <div className="flex items-center justify-between gap-4 mb-5">
            <div>
              <h3 className={`${isDark ? 'text-white' : 'text-slate-900'} text-xl font-black`}>Combinaciones de Alto Impacto</h3>
              <p className={`mt-2 text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Referencia rapida para practicar.</p>
            </div>
          </div>
          <div className="space-y-3">
            {(selectedItem?.shortcutList || keyboardData?.shortcut_basics?.shortcutList || []).slice(0, 5).map((shortcut) => (
              <article key={shortcut.combo} className={`rounded-sm border p-4 ${isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className={`inline-flex rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-widest ${isDark ? 'bg-indigo-500/20 text-indigo-100' : 'bg-indigo-100 text-indigo-700'}`}>{shortcut.combo}</span>
                  <span className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-700'}`}>{shortcut.action}</span>
                </div>
                <p className={`leading-relaxed text-[14px] ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{shortcut.why}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}