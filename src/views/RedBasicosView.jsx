import { Globe, Cable, XCircle, CheckCircle2 } from 'lucide-react';
import { redBasicosData } from '../data/redBasicosData.js';

export default function RedBasicosView({ selectedItem, onSelect, isDark, colorMap }) {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500">
      <div className={`rounded-sm border p-5 sm:p-6 md:p-8 ${isDark ? 'border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950/40' : 'border-slate-200 bg-white shadow-[0_22px_60px_rgba(15,23,42,0.12)]'}`}>
        <div className="flex items-center gap-4 mb-6">
          <div className={`p-3 rounded-sm ${isDark ? 'bg-blue-500/20' : 'bg-blue-100'}`}>
            <Globe className={isDark ? 'text-blue-400' : 'text-blue-600'} size={28} />
          </div>
          <div>
            <p className={`text-[11px] font-black uppercase tracking-[0.25em] ${isDark ? 'text-blue-300/70' : 'text-blue-600/70'}`}>Internet y conexión</p>
            <h2 className={`text-xl sm:text-2xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Fundamentos de Internet</h2>
          </div>
        </div>
        <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
          Comprende cómo funciona Internet: protocolos TCP/IP, sistema DNS, tecnología web (HTML/HTTP/HTTPS) y la infraestructura que hay detrás.
        </p>
      </div>

      <div className={`rounded-sm border p-5 sm:p-6 ${isDark ? 'border-slate-800 bg-slate-950/50' : 'border-slate-200 bg-slate-50'}`}>
        <h3 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-800'}`}>¿Cómo funciona DNS?</h3>
        <div className={`rounded-sm border p-4 ${isDark ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-white'}`}>
          <div className="flex items-center justify-between gap-2 overflow-x-auto pb-2">
            {[
              { label: 'Tu PC', icon: 'Monitor', color: 'slate' },
              { label: 'DNS ISP', icon: 'Globe', color: 'cyan' },
              { label: 'DNS Raíz', icon: 'Database', color: 'purple' },
              { label: 'google.com', icon: 'Server', color: 'blue' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className={`flex-shrink-0 w-12 h-12 rounded-sm border-2 flex items-center justify-center ${isDark ? 'border-slate-600 bg-slate-800' : 'border-slate-300 bg-slate-100'}`}>
                  <span className={`text-xs font-bold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{item.label.charAt(0)}</span>
                </div>
                <p className={`text-[10px] font-bold text-center ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{item.label}</p>
                {i < 3 && <span className={`flex-shrink-0 mx-1 text-xs ${isDark ? 'text-slate-600' : 'text-slate-300'}`}>→</span>}
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 rounded-sm bg-slate-800/50">
            <p className={`text-xs font-mono ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>google.com → 142.250.80.46</p>
            <p className={`text-[10px] mt-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Traducción completada en 12ms</p>
          </div>
        </div>
        <button onClick={() => onSelect('dns_servidores', null, redBasicosData)} className={`mt-4 px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-widest border transition-all ${isDark ? 'border-purple-500/50 text-purple-400 hover:bg-purple-500/20' : 'border-purple-300 text-purple-600 hover:bg-purple-50'}`}>
          Profundizar en DNS
        </button>
      </div>

      <div className={`rounded-sm border p-5 sm:p-6 ${isDark ? 'border-slate-800 bg-slate-950/50' : 'border-slate-200 bg-slate-50'}`}>
        <h3 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-800'}`}>Tu Identidad en la Red</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button onClick={() => onSelect('protocolos_ip', null, redBasicosData)} className={`p-4 rounded-sm border text-left ${isDark ? 'border-slate-700 bg-slate-900 hover:border-blue-500/50' : 'border-slate-200 bg-white hover:border-blue-300'}`}>
            <div className="flex items-center gap-3 mb-2">
              <Cable size={20} className={isDark ? 'text-blue-400' : 'text-blue-600'} />
              <span className={`font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}>IP Privada</span>
            </div>
            <p className={`text-sm font-mono ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>192.168.1.42</p>
            <p className={`text-[10px] mt-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Tu red local (casa)</p>
          </button>
          <div className={`p-4 rounded-sm border ${isDark ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-white'}`}>
            <div className="flex items-center gap-3 mb-2">
              <Globe size={20} className={isDark ? 'text-emerald-400' : 'text-emerald-600'} />
              <span className={`font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}>IP Pública</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full ${isDark ? 'bg-emerald-500/20 text-emerald-400' : 'bg-emerald-100 text-emerald-700'}`}>Tu proveedor</span>
            </div>
            <p className={`text-sm font-mono ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>85.84.123.456</p>
            <p className={`text-[10px] mt-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Lo que ve Internet</p>
          </div>
        </div>
      </div>

      <div className={`rounded-sm border p-5 sm:p-6 ${isDark ? 'border-slate-800 bg-slate-950/50' : 'border-slate-200 bg-slate-50'}`}>
        <h3 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-800'}`}>HTTP vs HTTPS</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button onClick={() => onSelect('html_http_https', null, redBasicosData)} className={`p-4 rounded-sm border text-left ${isDark ? 'border-red-500/30 bg-red-950/30 hover:border-red-500/60' : 'border-red-200 bg-red-50 hover:border-red-300'}`}>
            <div className="flex items-center gap-3 mb-3">
              <XCircle size={24} className="text-red-500" />
              <span className={`font-black text-lg ${isDark ? 'text-red-400' : 'text-red-600'}`}>HTTP</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <XCircle size={14} className="text-red-400" />
                <span className={`text-xs ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Sin encriptación</span>
              </div>
              <div className="flex items-center gap-2">
                <XCircle size={14} className="text-red-400" />
                <span className={`text-xs ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Datos visibles</span>
              </div>
              <div className="flex items-center gap-2">
                <XCircle size={14} className="text-red-400" />
                <span className={`text-xs ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Vulnerable a interceptación</span>
              </div>
            </div>
          </button>
          <div className={`p-4 rounded-sm border ${isDark ? 'border-emerald-500/30 bg-emerald-950/30' : 'border-emerald-200 bg-emerald-50'}`}>
            <div className="flex items-center gap-3 mb-3">
              <CheckCircle2 size={24} className="text-emerald-500" />
              <span className={`font-black text-lg ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>HTTPS</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-400" />
                <span className={`text-xs ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>TLS/SSL cifrado</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-400" />
                <span className={`text-xs ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Certificado de identidad</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-400" />
                <span className={`text-xs ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Datos protegidos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}