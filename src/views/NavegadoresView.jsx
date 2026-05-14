import { AppWindow, AlertTriangle, User, Calendar, Zap, FileQuestion } from 'lucide-react';

const BrowserLogos = {
  chrome: 'https://cdnjs.cloudflare.com/ajax/libs/browser-logos/75.0.1/chrome/chrome.svg',
  firefox: 'https://cdnjs.cloudflare.com/ajax/libs/browser-logos/75.0.1/firefox/firefox.svg',
  edge: 'https://cdnjs.cloudflare.com/ajax/libs/browser-logos/75.0.1/edge/edge.svg',
  safari: 'https://cdnjs.cloudflare.com/ajax/libs/browser-logos/75.0.1/safari/safari.svg',
  brave: 'https://cdnjs.cloudflare.com/ajax/libs/browser-logos/75.0.1/brave/brave.svg',
};

export default function NavegadoresView({ selectedItem, onSelect, isDark, navegadoresData }) {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500">
      <div className={`rounded-sm border p-5 sm:p-6 md:p-8 ${isDark ? 'border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-purple-950/40' : 'border-slate-200 bg-white shadow-[0_22px_60px_rgba(15,23,42,0.12)]'}`}>
        <div className="flex items-center gap-4 mb-6">
          <div className={`p-3 rounded-sm ${isDark ? 'bg-purple-500/20' : 'bg-purple-100'}`}>
            <AppWindow className={isDark ? 'text-purple-400' : 'text-purple-600'} size={28} />
          </div>
          <div>
            <p className={`text-[11px] font-black uppercase tracking-[0.25em] ${isDark ? 'text-purple-300/70' : 'text-purple-600/70'}`}>Navegación web</p>
            <h2 className={`text-xl sm:text-2xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Navegadores y Búsqueda Efectiva</h2>
          </div>
        </div>
        <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
          Domina Chrome, Firefox, Edge y Safari. Aprende técnicas de búsqueda avanzada con operadores booleanos y cómo detectar fake news.
        </p>
      </div>

      <div className={`rounded-sm border p-5 sm:p-6 ${isDark ? 'border-slate-800 bg-slate-950/50' : 'border-slate-200 bg-slate-50'}`}>
        <h3 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-800'}`}>Comparativa de Navegadores</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {[
            { id: 'google_chrome', name: 'Chrome', logo: BrowserLogos.chrome },
            { id: 'mozilla_firefox', name: 'Firefox', logo: BrowserLogos.firefox },
            { id: 'microsoft_edge', name: 'Edge', logo: BrowserLogos.edge },
            { id: 'brave', name: 'Brave', logo: BrowserLogos.brave },
            { id: 'apple_safari', name: 'Safari', logo: BrowserLogos.safari },
          ].map((browser) => (
            <button
              key={browser.name}
              onClick={() => onSelect(browser.id, null, navegadoresData)}
              className={`p-4 rounded-sm border transition-all hover:scale-[1.02] flex flex-col items-center gap-2 ${
                selectedItem?.id === browser.id
                  ? 'border-blue-400 bg-blue-500/20'
                  : isDark ? 'border-slate-700 bg-slate-900 hover:border-slate-500' : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              <img src={browser.logo} alt={browser.name} className="w-12 h-12 object-contain" />
              <p className={`text-sm font-bold text-center ${isDark ? 'text-white' : 'text-slate-800'}`}>{browser.name}</p>
            </button>
          ))}
        </div>
      </div>

      <div className={`rounded-sm border p-5 sm:p-6 ${isDark ? 'border-slate-800 bg-slate-950/50' : 'border-slate-200 bg-slate-50'}`}>
        <h3 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-800'}`}>Operadores de Búsqueda Avanzada</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { op: '"texto"', desc: 'Frase exacta', example: '"curso Python gratis"' },
            { op: '-palabra', desc: 'Excluir término', example: 'receta -tortilla -cebolla' },
            { op: 'site:dominio', desc: 'Solo ese sitio', example: 'becas site:gob.es' },
            { op: 'filetype:pdf', desc: 'Solo documentos', example: 'informe filetype:pdf' },
          ].map((item, i) => (
            <button
              key={i}
              onClick={() => onSelect('busqueda_avanzada', null, navegadoresData)}
              className={`p-3 rounded-sm border text-left ${isDark ? 'border-slate-700 bg-slate-900 hover:border-cyan-500/50' : 'border-slate-200 bg-white hover:border-cyan-300'}`}
            >
              <div className="flex items-center gap-3">
                <code className={`px-2 py-1 rounded text-xs font-mono ${isDark ? 'bg-cyan-500/20 text-cyan-400' : 'bg-cyan-100 text-cyan-700'}`}>{item.op}</code>
                <span className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{item.desc}</span>
              </div>
              <p className={`text-[10px] mt-1 font-mono ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{item.example}</p>
            </button>
          ))}
        </div>
        <button onClick={() => onSelect('busqueda_avanzada', null, navegadoresData)} className={`mt-4 px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-widest border transition-all ${isDark ? 'border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/20' : 'border-cyan-300 text-cyan-600 hover:bg-cyan-50'}`}>
          Profundizar en búsqueda
        </button>
      </div>

      <div className={`rounded-sm border p-5 sm:p-6 ${isDark ? 'border-slate-800 bg-slate-950/50' : 'border-slate-200 bg-slate-50'}`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}>Detector de Fake News</h3>
          <button onClick={() => onSelect('fake_news', null, navegadoresData)} className={`px-3 py-1.5 rounded-sm text-[10px] font-bold uppercase tracking-widest border transition-all ${isDark ? 'border-red-500/50 text-red-400 hover:bg-red-500/20' : 'border-red-300 text-red-600 hover:bg-red-50'}`}>
            Ver Red Flags
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          {[
            { flag: 'URL rara', icon: AlertTriangle },
            { flag: 'Sin autor', icon: User },
            { flag: 'Fecha falsa', icon: Calendar },
            { flag: 'Sensacional', icon: Zap },
            { flag: 'Sin fuentes', icon: FileQuestion },
          ].map((item, i) => (
            <div key={i} className={`p-3 rounded-sm border text-center ${isDark ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-white'}`}>
              <item.icon size={20} className={`mx-auto mb-1 ${isDark ? 'text-red-400' : 'text-red-500'}`} />
              <p className={`text-[10px] font-bold ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{item.flag}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}