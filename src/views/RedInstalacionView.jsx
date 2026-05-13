import { Radio, Wifi, Gauge, Network, Signal } from 'lucide-react';

export default function RedInstalacionView({ selectedItem, onSelect, isDark, colorMap, redInstalacionData }) {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500">
      <div className={`rounded-sm border p-5 sm:p-6 md:p-8 ${isDark ? 'border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/40' : 'border-slate-200 bg-white shadow-[0_22px_60px_rgba(15,23,42,0.12)]'}`}>
        <div className="flex items-center gap-4 mb-6">
          <div className={`p-3 rounded-sm ${isDark ? 'bg-cyan-500/20' : 'bg-cyan-100'}`}>
            <Wifi className={isDark ? 'text-cyan-400' : 'text-cyan-600'} size={28} />
          </div>
          <div>
            <p className={`text-[11px] font-black uppercase tracking-[0.25em] ${isDark ? 'text-cyan-300/70' : 'text-cyan-600/70'}`}>Redes y conexión</p>
            <h2 className={`text-xl sm:text-2xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Instalación y Configuración de Red WiFi</h2>
          </div>
        </div>
        <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
          Aprende a planificar, instalar y optimizar redes WiFi en casa. Desde elegir la ubicación del router hasta configurar un sistema mesh completo.
        </p>
      </div>

      <div className={`rounded-sm border p-5 sm:p-6 ${isDark ? 'border-slate-800 bg-slate-950/50' : 'border-slate-200 bg-slate-50'}`}>
        <h3 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-800'}`}>Simulador de Cobertura WiFi</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            onClick={() => onSelect('wifi_bands', null, redInstalacionData)}
            className={`p-4 rounded-sm border-2 transition-all ${
              selectedItem?.id === 'wifi_bands'
                ? 'border-cyan-400 bg-cyan-500/20'
                : 'border-slate-600 bg-slate-800/50 hover:border-cyan-400/50'
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <Radio size={20} className={isDark ? 'text-cyan-400' : 'text-cyan-600'} />
              <span className={`font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}>2.4 GHz</span>
            </div>
            <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Alcance: 40m · Velocidad: 600Mbps</p>
            <div className="mt-3 h-2 rounded-full bg-slate-700 overflow-hidden">
              <div className="h-full w-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full opacity-50"></div>
            </div>
            <p className={`text-[10px] mt-2 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Penetra paredes</p>
          </button>

          <button
            onClick={() => onSelect('wifi_bands', null, redInstalacionData)}
            className={`p-4 rounded-sm border-2 transition-all ${
              selectedItem?.id === 'wifi_bands'
                ? 'border-purple-400 bg-purple-500/20'
                : 'border-slate-600 bg-slate-800/50 hover:border-purple-400/50'
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <Radio size={20} className={isDark ? 'text-purple-400' : 'text-purple-600'} />
              <span className={`font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}>5 GHz</span>
            </div>
            <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Alcance: 15m · Velocidad: 6Gbps</p>
            <div className="mt-3 h-2 rounded-full bg-slate-700 overflow-hidden">
              <div className="h-full w-2/5 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full opacity-50"></div>
            </div>
            <p className={`text-[10px] mt-2 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Máxima velocidad</p>
          </button>

          <button
            onClick={() => onSelect('mesh_network', null, redInstalacionData)}
            className={`p-4 rounded-sm border-2 transition-all ${
              selectedItem?.id === 'mesh_network'
                ? 'border-emerald-400 bg-emerald-500/20'
                : 'border-slate-600 bg-slate-800/50 hover:border-emerald-400/50'
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <Network size={20} className={isDark ? 'text-emerald-400' : 'text-emerald-600'} />
              <span className={`font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}>WiFi Mesh</span>
            </div>
            <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Cobertura: 200m²+ · Sin cortes</p>
            <div className="mt-3 h-2 rounded-full bg-slate-700 overflow-hidden">
              <div className="h-full w-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full opacity-50"></div>
            </div>
            <p className={`text-[10px] mt-2 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Red unificada</p>
          </button>
        </div>
      </div>

      <div className={`rounded-sm border p-5 sm:p-6 ${isDark ? 'border-slate-800 bg-slate-950/50' : 'border-slate-200 bg-slate-50'}`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}>Panel de Configuración del Router</h3>
          <button onClick={() => onSelect('router_config', null, redInstalacionData)} className={`px-3 py-1.5 rounded-sm text-[10px] font-bold uppercase tracking-widest border transition-all ${isDark ? 'border-slate-600 text-slate-300 hover:bg-slate-800' : 'border-slate-300 text-slate-600 hover:bg-slate-100'}`}>
            Ver detalles
          </button>
        </div>
        <div className={`rounded-sm border p-4 ${isDark ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-white'}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-3 h-3 rounded-full bg-emerald-500`}></div>
            <span className={`text-sm font-medium ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>192.168.1.1 - Conexión activa</span>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 rounded-sm bg-slate-800/50">
              <div className="flex items-center gap-2">
                <Wifi size={16} className="text-slate-400" />
                <span className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Nombre SSID</span>
              </div>
              <span className={`text-sm font-mono ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>MiCasa_WiFi</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-sm bg-slate-800/50">
              <div className="flex items-center gap-2">
                <Signal size={16} className="text-slate-400" />
                <span className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Canal activo</span>
              </div>
              <span className={`text-sm font-mono ${isDark ? 'text-amber-400' : 'text-amber-600'}`}>6 (2.4GHz) · 36 (5GHz)</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-sm bg-slate-800/50">
              <div className="flex items-center gap-2">
                <Gauge size={16} className="text-slate-400" />
                <span className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Velocidad estimada</span>
              </div>
              <span className={`text-sm font-mono ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>450 Mbps ↓ / 50 Mbps ↑</span>
            </div>
          </div>
        </div>
      </div>

      <div className={`rounded-sm border p-5 sm:p-6 ${isDark ? 'border-slate-800 bg-slate-950/50' : 'border-slate-200 bg-slate-50'}`}>
        <h3 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-800'}`}>Test de Velocidad Interactivo</h3>
        <div className={`rounded-sm border p-6 text-center ${isDark ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-white'}`}>
          <button onClick={() => onSelect('speed_test', null, redInstalacionData)} className={`px-6 py-3 rounded-sm font-bold uppercase tracking-widest transition-all ${isDark ? 'bg-amber-500/20 text-amber-400 border border-amber-500/50 hover:bg-amber-500/30' : 'bg-amber-100 text-amber-700 border border-amber-300 hover:bg-amber-200'}`}>
            <Signal size={20} className="inline mr-2" />
            Iniciar Test
          </button>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="p-3 rounded-sm bg-slate-800/50">
              <p className={`text-[10px] uppercase tracking-wider ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Descarga</p>
              <p className={`text-xl font-black ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>— Mbps</p>
            </div>
            <div className="p-3 rounded-sm bg-slate-800/50">
              <p className={`text-[10px] uppercase tracking-wider ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Subida</p>
              <p className={`text-xl font-black ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>— Mbps</p>
            </div>
            <div className="p-3 rounded-sm bg-slate-800/50">
              <p className={`text-[10px] uppercase tracking-wider ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Ping</p>
              <p className={`text-xl font-black ${isDark ? 'text-amber-400' : 'text-amber-600'}`}>— ms</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}