import React from 'react';
import { Layers, Cpu, Monitor, Plug, Blocks } from 'lucide-react';
import { softwareData, softwareOsExamples, softwareOsDetails, softwareLicenseModels } from '../data/softwareData.js';

export default function SoftwareView({ selectedItem, onSelect, isDark }) {
  return (
    <div className={`relative overflow-hidden rounded-sm border animate-in fade-in duration-500 ${
      isDark ? 'bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/40 border-slate-800' : 'bg-white border-slate-200 shadow-[0_22px_60px_rgba(15,23,42,0.12)]'
    }`}>
      <div className={`flex items-center gap-4 p-5 sm:p-6 md:p-8 border-b ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
        <div className={`p-3 rounded-sm ${isDark ? 'bg-indigo-500/20' : 'bg-indigo-100'}`}>
          <Layers className={isDark ? 'text-indigo-400' : 'text-indigo-600'} size={28} />
        </div>
        <div>
          <p className={`text-[11px] font-black uppercase tracking-[0.25em] ${isDark ? 'text-slate-500' : 'text-slate-600/70'}`}>Base tecnológica</p>
          <h2 className={`text-xl sm:text-2xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Software por capas</h2>
        </div>
      </div>

      <div className="relative py-8 sm:py-10 px-4">
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
          <line x1="50%" y1="22%" x2="50%" y2="38%" stroke={isDark ? '#64748b' : '#94a3b8'} strokeWidth="2" strokeDasharray="6 4" className="animate-dash-flow" />
          <line x1="50%" y1="48%" x2="50%" y2="64%" stroke={isDark ? '#64748b' : '#94a3b8'} strokeWidth="2" strokeDasharray="6 4" className="animate-dash-flow" style={{ animationDelay: '0.2s' }} />
          <line x1="50%" y1="74%" x2="50%" y2="90%" stroke={isDark ? '#64748b' : '#94a3b8'} strokeWidth="2" strokeDasharray="6 4" className="animate-dash-flow" style={{ animationDelay: '0.4s' }} />
        </svg>

        <div className="relative flex flex-col items-center gap-3 sm:gap-4" style={{ zIndex: 1 }}>

          <button
            onClick={() => onSelect('applications', null, softwareData)}
            className={`relative w-full max-w-md sm:max-w-lg rounded-sm border-2 p-4 sm:p-5 flex items-center gap-4 transition-all duration-300 ${
              selectedItem?.id === 'applications'
                ? 'border-emerald-400 bg-emerald-500/20 shadow-[0_0_25px_rgba(52,211,153,0.3)]'
                : 'border-slate-300 bg-slate-50 hover:border-emerald-400 hover:shadow-[0_0_15px_rgba(52,211,153,0.2)]'
            }`}
          >
            <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-sm flex items-center justify-center ${
                selectedItem?.id === 'applications' ? 'bg-emerald-500/30 text-emerald-400' : 'bg-slate-200 text-slate-500'
            }`}>
              <Blocks size={24} className="sm:w-7 sm:h-7" />
            </div>
            <div className="text-left flex-1">
              <p className={`text-xs font-black uppercase tracking-wider ${selectedItem?.id === 'applications' ? 'text-emerald-400' : 'text-slate-500'}`}>Capa 4</p>
              <h3 className={`text-base sm:text-lg font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Aplicaciones</h3>
            </div>
            <p className={`text-xs hidden sm:block ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Word, Chrome, Zoom...</p>
          </button>

          <button
            onClick={() => onSelect('operating_systems', null, softwareData)}
            className={`relative w-full max-w-md sm:max-w-lg rounded-sm border-2 p-4 sm:p-5 flex items-center gap-4 transition-all duration-300 ${
              selectedItem?.id === 'operating_systems'
                ? 'border-indigo-400 bg-indigo-500/20 shadow-[0_0_25px_rgba(99,102,241,0.3)]'
                : 'border-slate-300 bg-slate-50 hover:border-indigo-400 hover:shadow-[0_0_15px_rgba(99,102,241,0.2)]'
            }`}
          >
            <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-sm flex items-center justify-center ${
                selectedItem?.id === 'operating_systems' ? 'bg-indigo-500/30 text-indigo-400' : 'bg-slate-200 text-slate-500'
            }`}>
              <Monitor size={24} className="sm:w-7 sm:h-7" />
            </div>
            <div className="text-left flex-1">
              <p className={`text-xs font-black uppercase tracking-wider ${selectedItem?.id === 'operating_systems' ? 'text-indigo-400' : 'text-slate-500'}`}>Capa 3</p>
              <h3 className={`text-base sm:text-lg font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Sistema Operativo</h3>
            </div>
            <p className={`text-xs hidden sm:block ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Windows, macOS, Linux...</p>
          </button>

          <button
            onClick={() => onSelect('drivers', null, softwareData)}
            className={`relative w-full max-w-md sm:max-w-lg rounded-sm border-2 p-4 sm:p-5 flex items-center gap-4 transition-all duration-300 ${
              selectedItem?.id === 'drivers'
                ? 'border-cyan-400 bg-cyan-500/20 shadow-[0_0_25px_rgba(6,182,212,0.3)]'
                : 'border-slate-300 bg-slate-50 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)]'
            }`}
          >
            <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-sm flex items-center justify-center ${
                selectedItem?.id === 'drivers' ? 'bg-cyan-500/30 text-cyan-400' : 'bg-slate-200 text-slate-500'
            }`}>
              <Plug size={24} className="sm:w-7 sm:h-7" />
            </div>
            <div className="text-left flex-1">
              <p className={`text-xs font-black uppercase tracking-wider ${selectedItem?.id === 'drivers' ? 'text-cyan-400' : 'text-slate-500'}`}>Capa 2</p>
              <h3 className={`text-base sm:text-lg font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Drivers</h3>
            </div>
            <p className={`text-xs hidden sm:block ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Impresora, audio, red...</p>
          </button>

          <button
            onClick={() => onSelect('hardware_layer', null, softwareData)}
            className={`relative w-full max-w-md sm:max-w-lg rounded-sm border-2 p-4 sm:p-5 flex items-center gap-4 transition-all duration-300 ${
              selectedItem?.id === 'hardware_layer'
                ? 'border-purple-400 bg-purple-500/20 shadow-[0_0_25px_rgba(168,85,247,0.3)]'
                : 'border-slate-300 bg-slate-50 hover:border-purple-400 hover:shadow-[0_0_15px_rgba(168,85,247,0.2)]'
            }`}
          >
            <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-sm flex items-center justify-center ${
                selectedItem?.id === 'hardware_layer' ? 'bg-purple-500/30 text-purple-400' : 'bg-slate-200 text-slate-500'
            }`}>
              <Cpu size={24} className="sm:w-7 sm:h-7" />
            </div>
            <div className="text-left flex-1">
              <p className={`text-xs font-black uppercase tracking-wider ${selectedItem?.id === 'hardware_layer' ? 'text-purple-400' : 'text-slate-500'}`}>Capa 1</p>
              <h3 className={`text-base sm:text-lg font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Hardware</h3>
            </div>
            <p className={`text-xs hidden sm:block ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>CPU, RAM, disco...</p>
          </button>
        </div>

        <p className={`text-center text-xs mt-8 pb-4 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
          👆 Haz clic en una capa para ver su descripción
        </p>
      </div>

      <div className={`px-4 sm:px-8 pb-6`}>
        <h3 className={`text-sm font-black uppercase tracking-wider mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Sistemas Operativos más usados</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {softwareOsExamples.map((os) => (
            <button
              key={os.id}
              onClick={() => onSelect(os.id, null, softwareOsDetails)}
              className={`rounded-sm border p-4 text-left transition-all duration-300 hover:-translate-y-1 ${
                isDark ? 'border-slate-800 bg-slate-900/80 hover:border-slate-600' : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-lg'
              }`}
            >
              <img src={os.logo} alt={os.name} className="w-12 h-12 object-contain mb-3" />
              <p className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{os.name}</p>
              <p className={`text-[10px] mt-1 ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>{os.subtitle}</p>
            </button>
          ))}
        </div>
      </div>

      <div className={`px-4 sm:px-8 pb-6`}>
        <h3 className={`text-sm font-black uppercase tracking-wider mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Tipos de licencia de software</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            onClick={() => onSelect('closed', null, softwareLicenseModels)}
            className={`rounded-sm border p-5 text-left transition-all duration-300 hover:-translate-y-1 ${
              selectedItem?.id === 'closed' ? 'border-indigo-400 bg-indigo-500/10' : isDark ? 'border-slate-800 bg-slate-900/80 hover:border-slate-600' : 'border-slate-200 bg-white hover:border-slate-300'
            }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
              </div>
              <div>
                <p className={`font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Código Cerrado</p>
                <p className="text-xs text-slate-500">Software comercial</p>
              </div>
            </div>
            <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>El fabricante controla el código, las funciones y la licencia. Ejemplos: Windows, Microsoft Office, Adobe Photoshop.</p>
          </button>

          <button
            onClick={() => onSelect('open', null, softwareLicenseModels)}
            className={`rounded-sm border p-5 text-left transition-all duration-300 hover:-translate-y-1 ${
              selectedItem?.id === 'open' ? 'border-emerald-400 bg-emerald-500/10' : isDark ? 'border-slate-800 bg-slate-900/80 hover:border-slate-600' : 'border-slate-200 bg-white hover:border-slate-300'
            }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
              </div>
              <div>
                <p className={`font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Código Abierto</p>
                <p className="text-xs text-slate-500">Software libre</p>
              </div>
            </div>
            <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>El código se puede estudiar, mejorar y redistribuir. Ejemplos: Linux, LibreOffice, GIMP, Ubuntu.</p>
          </button>
        </div>
      </div>

      {selectedItem && (softwareData[selectedItem.id] || softwareOsDetails[selectedItem.id] || softwareLicenseModels[selectedItem.id]) && (
        <div className={`mx-4 sm:mx-8 mb-4 sm:mb-6 rounded-sm border p-4 sm:p-6 ${
          isDark ? 'border-slate-800 bg-slate-950/90' : 'border-slate-200 bg-slate-50'
        }`}>
          <h3 className={`text-lg font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>{selectedItem.name || softwareOsExamples.find(o => o.id === selectedItem.id)?.name || softwareLicenseModels[selectedItem.id]?.label}</h3>
          <p className={`mt-2 text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{selectedItem.desc || selectedItem.summary || ''}</p>
          {selectedItem.focus && <p className={`mt-2 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}><strong>Foco:</strong> {selectedItem.focus}</p>}
          {selectedItem.zones && <p className={`mt-2 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}><strong>Zonas clave:</strong> {selectedItem.zones.join(', ')}</p>}
          {selectedItem.examples && (
            <div className="mt-3 space-y-2">
              {typeof selectedItem.examples === 'string' ? (
                <p className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{selectedItem.examples}</p>
              ) : Array.isArray(selectedItem.examples) ? selectedItem.examples.map((ex, i) => (
                <div key={i} className={`text-sm p-3 rounded-sm ${isDark ? 'bg-slate-900/50' : 'bg-white'}`}>
                  <p className="font-bold">{ex.name}</p>
                  <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{ex.use}</p>
                </div>
              )) : null}
            </div>
          )}
        </div>
      )}
    </div>
  );
}