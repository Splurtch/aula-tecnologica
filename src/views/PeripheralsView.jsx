import React, { useState } from 'react';
import { Keyboard, Monitor, Usb, HardDrive, Speaker, Plug } from 'lucide-react';

export default function PeripheralsView({ selectedItem, onSelect, isDark, peripheralData }) {
  const [hoveredPeripheral, setHoveredPeripheral] = useState(null);

  const peripheralCategories = [
    {
      id: 'input_devices',
      name: 'Entrada',
      icon: Keyboard,
      color: 'blue',
      description: 'Envían datos al equipo',
      examples: ['Teclado', 'Ratón', 'Micrófono', 'Escáner'],
      position: 'left',
    },
    {
      id: 'output_devices',
      name: 'Salida',
      icon: Monitor,
      color: 'emerald',
      description: 'Muestran resultados',
      examples: ['Monitor', 'Altavoces', 'Impresora', 'Proyector'],
      position: 'right',
    },
    {
      id: 'io_devices',
      name: 'Mixtos',
      icon: Usb,
      color: 'purple',
      description: 'Envían y reciben',
      examples: ['Pantalla táctil', 'Cascos+Mic', ' Multifunción'],
      position: 'bottom',
    },
    {
      id: 'connectivity_devices',
      name: 'Almacenamiento',
      icon: HardDrive,
      color: 'amber',
      description: 'Guardan y transfieren',
      examples: ['USB', 'Disco externo', 'SD', 'Hub'],
      position: 'top',
    },
  ];

  const handlePeripheralClick = (peripheralId) => {
    if (selectedItem?.id === peripheralId) {
      onSelect(null, null, null);
    } else {
      onSelect(peripheralId, null, peripheralData);
    }
  };

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500">
      <div className={`relative overflow-hidden rounded-sm border p-5 sm:p-6 md:p-8 ${
        isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-[0_22px_60px_rgba(15,23,42,0.12)]'
      }`}>
        <div className={`pointer-events-none absolute inset-0 ${
          isDark
            ? 'bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.12),transparent_28%)]'
            : 'bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.10),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.08),transparent_26%)]'
        }`} />
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-6">
          <div className="max-w-3xl">
            <p className={`text-[11px] font-black uppercase tracking-[0.25em] ${isDark ? 'text-slate-500' : 'text-cyan-600/70'}`}>Base tecnologica</p>
            <h2 className={`mt-3 text-2xl sm:text-3xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Perifericos y flujo de informacion</h2>
            <p className={`mt-4 text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Aprende a distinguir que dispositivos introducen datos, cuales los muestran y cuales sirven para intercambiar informacion entre el usuario y el equipo.
            </p>
          </div>
        </div>

        <div className="relative mt-4">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <button
                onClick={() => handlePeripheralClick('connectivity_devices')}
                onMouseEnter={() => setHoveredPeripheral('connectivity_devices')}
                onMouseLeave={() => setHoveredPeripheral(null)}
                className={`group relative p-4 rounded-sm border-2 transition-all duration-300 ${
                  selectedItem?.id === 'connectivity_devices'
                    ? isDark ? 'border-amber-400 bg-amber-500/20' : 'border-amber-500 bg-amber-50'
                    : hoveredPeripheral === 'connectivity_devices'
                      ? isDark ? 'border-amber-500/50 bg-slate-800' : 'border-amber-300 bg-amber-50'
                      : isDark ? 'border-slate-700 bg-slate-900 hover:border-amber-500/30' : 'border-slate-200 bg-slate-50 hover:border-amber-300'
                }`}
              >
                <HardDrive size={32} className={selectedItem?.id === 'connectivity_devices' || hoveredPeripheral === 'connectivity_devices' ? 'text-amber-400' : isDark ? 'text-slate-400' : 'text-slate-500'} />
                <span className={`absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-wider whitespace-nowrap ${isDark ? 'text-amber-400' : 'text-amber-600'}`}>
                  Almacenamiento
                </span>
              </button>
            </div>

            <div className="flex items-center justify-center gap-6 lg:gap-10 w-full">
              <button
                onClick={() => handlePeripheralClick('input_devices')}
                onMouseEnter={() => setHoveredPeripheral('input_devices')}
                onMouseLeave={() => setHoveredPeripheral(null)}
                className={`group relative p-5 rounded-sm border-2 transition-all duration-300 ${
                  selectedItem?.id === 'input_devices'
                    ? isDark ? 'border-blue-400 bg-blue-500/20' : 'border-blue-500 bg-blue-50'
                    : hoveredPeripheral === 'input_devices'
                      ? isDark ? 'border-blue-500/50 bg-slate-800' : 'border-blue-300 bg-blue-50'
                      : isDark ? 'border-slate-700 bg-slate-900 hover:border-blue-500/30' : 'border-slate-200 bg-slate-50 hover:border-blue-300'
                }`}
              >
                <Keyboard size={48} className={selectedItem?.id === 'input_devices' || hoveredPeripheral === 'input_devices' ? 'text-blue-400' : isDark ? 'text-slate-400' : 'text-slate-500'} />
                <div className={`absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-0.5 ${isDark ? 'bg-blue-500' : 'bg-blue-400'}`}></div>
                <span className={`absolute -left-1 -top-6 text-[9px] font-bold uppercase tracking-wider ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                  Entrada
                </span>
              </button>

              <div className={`relative p-6 rounded-sm border-2 ${isDark ? 'border-slate-600 bg-slate-800' : 'border-slate-300 bg-slate-100'}`}>
                <div className="flex flex-col items-center gap-2">
                  <Monitor size={40} className={isDark ? 'text-slate-300' : 'text-slate-600'} />
                  <div className={`w-20 h-8 rounded-sm ${isDark ? 'bg-slate-700' : 'bg-slate-300'}`}></div>
                  <p className={`text-[10px] font-bold uppercase tracking-wider ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>CPU</p>
                </div>
                <div className={`absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-0.5 ${isDark ? 'bg-slate-500' : 'bg-slate-400'}`}></div>
                <div className={`absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-0.5 ${isDark ? 'bg-slate-500' : 'bg-slate-400'}`}></div>
              </div>

              <button
                onClick={() => handlePeripheralClick('output_devices')}
                onMouseEnter={() => setHoveredPeripheral('output_devices')}
                onMouseLeave={() => setHoveredPeripheral(null)}
                className={`group relative p-5 rounded-sm border-2 transition-all duration-300 ${
                  selectedItem?.id === 'output_devices'
                    ? isDark ? 'border-emerald-400 bg-emerald-500/20' : 'border-emerald-500 bg-emerald-50'
                    : hoveredPeripheral === 'output_devices'
                      ? isDark ? 'border-emerald-500/50 bg-slate-800' : 'border-emerald-300 bg-emerald-50'
                      : isDark ? 'border-slate-700 bg-slate-900 hover:border-emerald-500/30' : 'border-slate-200 bg-slate-50 hover:border-emerald-300'
                }`}
              >
                <Speaker size={48} className={selectedItem?.id === 'output_devices' || hoveredPeripheral === 'output_devices' ? 'text-emerald-400' : isDark ? 'text-slate-400' : 'text-slate-500'} />
                <div className={`absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-0.5 ${isDark ? 'bg-emerald-500' : 'bg-emerald-400'}`}></div>
                <span className={`absolute -right-1 -top-6 text-[9px] font-bold uppercase tracking-wider ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>
                  Salida
                </span>
              </button>
            </div>

            <div className="flex items-center justify-center gap-4 mt-10 mb-2">
              <button
                onClick={() => handlePeripheralClick('io_devices')}
                onMouseEnter={() => setHoveredPeripheral('io_devices')}
                onMouseLeave={() => setHoveredPeripheral(null)}
                className={`group relative p-4 rounded-sm border-2 transition-all duration-300 ${
                  selectedItem?.id === 'io_devices'
                    ? isDark ? 'border-purple-400 bg-purple-500/20' : 'border-purple-500 bg-purple-50'
                    : hoveredPeripheral === 'io_devices'
                      ? isDark ? 'border-purple-500/50 bg-slate-800' : 'border-purple-300 bg-purple-50'
                      : isDark ? 'border-slate-700 bg-slate-900 hover:border-purple-500/30' : 'border-slate-200 bg-slate-50 hover:border-purple-300'
                }`}
              >
                <Plug size={32} className={selectedItem?.id === 'io_devices' || hoveredPeripheral === 'io_devices' ? 'text-purple-400' : isDark ? 'text-slate-400' : 'text-slate-500'} />
                <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-0.5 h-4 ${isDark ? 'bg-purple-500' : 'bg-purple-400'}`}></div>
                <span className={`absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-wider whitespace-nowrap ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
                  Mixtos
                </span>
              </button>
            </div>

            <p className={`mt-8 text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
              Haz clic en un periferico para ver su ficha explicativa
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {peripheralCategories.map((cat) => {
          const Icon = cat.icon;
          const isSelected = selectedItem?.id === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => handlePeripheralClick(cat.id)}
              className={`rounded-sm border p-5 text-left transition-all duration-300 ${
                isSelected
                  ? isDark ? 'border-slate-600 bg-slate-800' : 'border-slate-300 bg-slate-50'
                  : isDark ? 'border-slate-800 bg-slate-900/60 hover:border-slate-700' : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              <div className={`w-12 h-12 rounded-sm flex items-center justify-center mb-4 ${
                isSelected ? isDark ? `bg-${cat.color}-500/20` : `bg-${cat.color}-100` : isDark ? 'bg-slate-800' : 'bg-slate-100'
              }`}>
                <Icon size={24} className={isSelected ? `text-${cat.color}-400` : isDark ? 'text-slate-400' : 'text-slate-500'} />
              </div>
              <p className={`text-[10px] font-black uppercase tracking-wider ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                {cat.name}
              </p>
              <h3 className={`mt-1 text-sm font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {peripheralData[cat.id].name}
              </h3>
              <p className={`mt-2 text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                {cat.description}
              </p>
              <div className={`mt-3 flex flex-wrap gap-1`}>
                {cat.examples.map((ex) => (
                  <span key={ex} className={`text-[9px] font-medium px-2 py-0.5 rounded-sm ${isDark ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-500'}`}>
                    {ex}
                  </span>
                ))}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}