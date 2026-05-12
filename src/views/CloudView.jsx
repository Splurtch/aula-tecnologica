import React from 'react';
import { Globe, Wifi, Laptop, Cloud } from 'lucide-react';
import { cloudData } from '../data/cloudData.js';

export default function CloudView({ selectedItem, onSelect, isDark }) {
  return (
    <div className={`relative overflow-hidden rounded-sm border animate-in fade-in duration-500 ${
      isDark ? 'bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border-slate-800' : 'bg-white border-slate-200 shadow-[0_22px_60px_rgba(15,23,42,0.12)]'
    }`}>
      <div className={`flex items-center gap-4 p-5 sm:p-6 md:p-8 border-b ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
        <div className={`p-3 rounded-sm ${isDark ? 'bg-blue-500/20' : 'bg-blue-100'}`}>
          <Globe className={isDark ? 'text-blue-400' : 'text-blue-600'} size={28} />
        </div>
        <div>
          <p className={`text-[11px] font-black uppercase tracking-[0.25em] ${isDark ? 'text-sky-300/70' : 'text-sky-700/70'}`}>Redes y sincronización</p>
          <h2 className={`text-xl sm:text-2xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Diagrama funcional: local, red y nube</h2>
        </div>
      </div>

      <div className="relative py-8 sm:py-10 px-4">
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
          <line x1="50%" y1="25%" x2="25%" y2="75%" stroke={isDark ? '#34d399' : '#10b981'} strokeWidth="3" strokeDasharray="8 4" className="animate-dash-flow" />
          <line x1="50%" y1="25%" x2="75%" y2="75%" stroke={isDark ? '#60a5fa' : '#3b82f6'} strokeWidth="3" strokeDasharray="8 4" className="animate-dash-flow" style={{ animationDelay: '0.3s' }} />
          <line x1="25%" y1="75%" x2="75%" y2="75%" stroke={isDark ? '#fbbf24' : '#f59e0b'} strokeWidth="3" strokeDasharray="8 4" className="animate-dash-flow" style={{ animationDelay: '0.6s' }} />
        </svg>

        <div className="relative flex flex-col items-center" style={{ zIndex: 1 }}>
          <button
            onClick={() => onSelect('internet_sync', null, cloudData)}
            className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
              selectedItem?.id === 'internet_sync'
                ? 'border-amber-400 bg-amber-500/30 shadow-[0_0_30px_rgba(245,158,11,0.5)]'
                : 'border-slate-300 bg-slate-50 hover:border-amber-400 hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]'
            }`}
          >
            <Wifi size={36} className={`sm:w-12 sm:h-12 ${selectedItem?.id === 'internet_sync' ? 'text-amber-400' : 'text-slate-400'}`} />
          </button>
          <p className={`mt-3 text-xs font-black uppercase ${isDark ? 'text-amber-400' : 'text-amber-600'}`}>Sync</p>

          <div className="flex items-center justify-center gap-16 sm:gap-24 md:gap-32 mt-8">
            <div className="flex flex-col items-center">
              <button
                onClick={() => onSelect('local_work', null, cloudData)}
                className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                  selectedItem?.id === 'local_work'
                    ? 'border-emerald-400 bg-emerald-500/30 shadow-[0_0_30px_rgba(52,211,153,0.5)]'
                    : 'border-slate-300 bg-slate-50 hover:border-emerald-400 hover:shadow-[0_0_20px_rgba(52,211,153,0.3)]'
                }`}
              >
                <Laptop size={36} className={`sm:w-12 sm:h-12 ${selectedItem?.id === 'local_work' ? 'text-emerald-400' : 'text-slate-400'}`} />
              </button>
              <p className={`mt-3 text-xs font-black uppercase ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>Local</p>
            </div>

            <div className="flex flex-col items-center">
              <button
                onClick={() => onSelect('cloud_work', null, cloudData)}
                className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                  selectedItem?.id === 'cloud_work'
                    ? 'border-blue-400 bg-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.5)]'
                    : 'border-slate-300 bg-slate-50 hover:border-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]'
                }`}
              >
                <Cloud size={36} className={`sm:w-12 sm:h-12 ${selectedItem?.id === 'cloud_work' ? 'text-blue-400' : 'text-slate-400'}`} />
              </button>
              <p className={`mt-3 text-xs font-black uppercase ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>Nube</p>
            </div>
          </div>
        </div>
      </div>

      <p className={`text-center text-xs pb-4 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
        👆 Haz clic en una burbuja para ver su descripción
      </p>

      {selectedItem && cloudData[selectedItem.id] && (
        <div className={`mx-4 sm:mx-8 mb-4 sm:mb-6 rounded-sm border p-4 sm:p-6 ${
          isDark ? 'border-slate-800 bg-slate-950/90' : 'border-slate-200 bg-slate-50'
        }`}>
          <h3 className={`text-lg font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>{selectedItem.name}</h3>
          <p className={`mt-2 text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{selectedItem.desc.split('\n\n')[0]}</p>
        </div>
      )}
    </div>
  );
}