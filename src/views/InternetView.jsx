import React from 'react';
import { Globe, ShieldCheck, ShieldAlert, MailWarning, Bug, AlertOctagon } from 'lucide-react';
import { InteractiveButton } from '../components/ui.jsx';

export default function InternetView({ selectedItem, onSelect, isDark, colorMap, internetData }) {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500 h-full">
      <div className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-200">
        <div className="flex items-center gap-3 mb-8 border-b border-slate-100 pb-4">
          <Globe className="text-blue-600" size={32} />
          <div>
            <h2 className="text-2xl font-black text-slate-800">Simulador de Navegación y Búsqueda</h2>
            <p className="text-slate-500 mt-1 text-sm font-medium">Aprende a encontrar y filtrar la inmensidad de la web.</p>
          </div>
        </div>

        <div className="border border-slate-300 rounded-sm overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-slate-50 mb-10 max-w-3xl mx-auto">
          <div className="bg-slate-200 p-3 flex items-center gap-4 border-b border-slate-300">
            <div className="flex gap-2 px-2">
              <div className="w-3.5 h-3.5 rounded-full bg-red-400 shadow-inner"></div>
              <div className="w-3.5 h-3.5 rounded-full bg-amber-400 shadow-inner"></div>
              <div className="w-3.5 h-3.5 rounded-full bg-emerald-400 shadow-inner"></div>
            </div>
            <button onClick={(e) => onSelect('browsers', e, internetData)} className={`flex-grow bg-white text-slate-600 text-[15px] font-medium py-2 px-4 rounded-lg shadow-sm flex items-center gap-3 border transition-all hover:bg-slate-50 ${selectedItem?.id === 'browsers' ? 'ring-4 ring-blue-200 border-blue-500 bg-blue-50 text-blue-800' : 'border-slate-300'}`}>
              <Globe size={18} className={selectedItem?.id === 'browsers' ? 'text-blue-600' : 'text-slate-400'} /> https://www.tu-navegador-web.com
            </button>
          </div>

          <div className="p-12 flex flex-col items-center min-h-[350px] justify-center relative bg-white overflow-hidden">
            <Globe size={250} className="text-blue-50/50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <h1 className="text-5xl font-black text-slate-800 mb-10 z-10 tracking-tight text-center"><span className="text-blue-600">Buscador</span> Universal</h1>
            <button onClick={(e) => onSelect('search_engine', e, internetData)} className={`w-full max-w-xl bg-white border-2 rounded-full py-5 px-8 flex items-center gap-4 shadow-lg hover:shadow-xl transition-all z-10 ${selectedItem?.id === 'search_engine' ? 'border-purple-500 ring-8 ring-purple-100 scale-105' : 'border-slate-200 hover:border-slate-300'}`}>
              <Globe size={28} className={selectedItem?.id === 'search_engine' ? 'text-purple-600' : 'text-slate-400'} />
              <span className={`text-[17px] ${selectedItem?.id === 'search_engine' ? 'text-purple-800 font-bold' : 'text-slate-400 font-medium'}`}>Escribe tus palabras clave aquí... (ej. "cursos gratuitos")</span>
            </button>
            <div className="flex flex-wrap justify-center gap-4 mt-10 z-10">
              <InteractiveButton id="scenario_work" dataSet={internetData} extraClass="px-6 py-3" selectedItem={selectedItem} onSelect={onSelect} colorMap={colorMap} isDark={isDark} />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <h3 className="text-2xl font-black text-slate-800 flex items-center gap-3">
            <ShieldCheck className="text-emerald-500" size={32}/> Ciberseguridad y Amenazas de la Red
          </h3>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 bg-slate-200 px-3 py-1 rounded-full">Lectura Obligatoria</span>
        </div>
        <p className="text-slate-600 mb-8 max-w-3xl leading-relaxed">Navegar por Internet es como caminar por una gran ciudad: hay lugares increíbles, pero también carteristas y estafadores. Explora los principales peligros que existen y aprende a identificarlos para proteger tu información y tu dinero.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InteractiveButton id="reliable_sources" dataSet={internetData} extraClass="w-full flex-row !justify-start gap-4 !p-5" selectedItem={selectedItem} onSelect={onSelect} colorMap={colorMap} isDark={isDark} />
          <InteractiveButton id="phishing" dataSet={internetData} extraClass="w-full flex-row !justify-start gap-4 !p-5" selectedItem={selectedItem} onSelect={onSelect} colorMap={colorMap} isDark={isDark} />
          <InteractiveButton id="malware" dataSet={internetData} extraClass="w-full flex-row !justify-start gap-4 !p-5" selectedItem={selectedItem} onSelect={onSelect} colorMap={colorMap} isDark={isDark} />
          <InteractiveButton id="scams" dataSet={internetData} extraClass="w-full flex-row !justify-start gap-4 !p-5" selectedItem={selectedItem} onSelect={onSelect} colorMap={colorMap} isDark={isDark} />
        </div>
      </div>
    </div>
  );
}