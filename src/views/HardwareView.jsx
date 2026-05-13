import { Server, Mouse, CircuitBoard, Rotate3D, Fan } from 'lucide-react';
import { useState } from 'react';
import { Layer3D } from '../components/ui.jsx';

export default function HardwareView({ selectedItem, onSelect, hardwareData, colorMap, isDark }) {
  const [rotation, setRotation] = useState({ x: 60, z: -40 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  const handleDragStart = (x, y) => {
    setIsDragging(true);
    setStartPos({ x, y });
  };

  const handleDragMove = (x, y) => {
    if (!isDragging) return;
    const deltaX = x - startPos.x;
    const deltaY = y - startPos.y;
    setRotation((prev) => ({
      x: prev.x + deltaY * 0.5,
      z: prev.z + deltaX * 0.5,
    }));
    setStartPos({ x, y });
  };

  const handleDragEnd = () => setIsDragging(false);

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500">
      <div className="bg-slate-950 rounded-3xl p-6 shadow-2xl border border-slate-800 relative overflow-hidden flex flex-col">
        <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3 z-10 relative">
          <div className="flex items-center gap-3">
            <Server className="text-emerald-400" size={28} />
            <h2 className="text-2xl font-black text-white tracking-tight">Arquitectura Interna (Torre 3D)</h2>
          </div>
          <span className="text-[11px] font-bold uppercase tracking-wider bg-blue-900/50 text-blue-300 border border-blue-700 px-4 py-2 rounded-full animate-pulse flex items-center gap-2 shadow-lg shadow-blue-900/50">
            <Mouse size={14} /> Haz Clic y Arrastra para Rotar
          </span>
        </div>
        
        <div 
          className="relative w-full h-[450px] md:h-[550px] cursor-grab active:cursor-grabbing flex items-center justify-center bg-gradient-to-b from-slate-900 to-slate-950 rounded-xl"
          style={{ perspective: '1400px' }}
          onMouseDown={(e) => handleDragStart(e.clientX, e.clientY)}
          onMouseMove={(e) => handleDragMove(e.clientX, e.clientY)}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
        >
          <div 
            className="relative w-[280px] h-[350px] md:w-[350px] md:h-[450px]"
            style={{ transformStyle: 'preserve-3d', transform: `rotateX(${rotation.x}deg) rotateZ(${rotation.z}deg)`, transition: isDragging ? 'none' : 'transform 0.15s ease-out' }}
          >
            <Layer3D id="motherboard" baseZ={0} style={{ top: '0', left: '0', width: '100%', height: '100%' }} selectedItem={selectedItem} onSelect={onSelect} hardwareData={hardwareData} colorMap={colorMap}>
              <div className="w-full h-full flex items-end justify-end p-4 opacity-50 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDM5LTVoNDB2MUgweiIgZmlsbD0icmdiYSg1MiwgMjExLCAxNTMsIDAuMikiLz48cGF0aCBkPSJNMzkuNSAwSDRwdjQwaC0xdnoiIGZpbGw9InJnYmEoNTIsIDIxMSwgMTUzLCAwLjIpIi8+PC9zdmc+')]"></div>
                <CircuitBoard className="w-16 h-16 mr-2" />
                <span className="text-xl font-bold tracking-widest uppercase text-emerald-100">Placa Base</span>
              </div>
            </Layer3D>
            <Layer3D id="cpu" baseZ={15} style={{ top: '15%', left: '35%', width: '25%', height: '20%' }} selectedItem={selectedItem} onSelect={onSelect} hardwareData={hardwareData} colorMap={colorMap} />
            <Layer3D id="ram" baseZ={20} style={{ top: '12%', left: '65%', width: '20%', height: '26%' }} customClass="!bg-transparent !border-none !shadow-none" selectedItem={selectedItem} onSelect={onSelect} hardwareData={hardwareData} colorMap={colorMap}>
               <div className="flex justify-between w-full h-full">
                 <div className="w-[40%] h-full bg-purple-600/90 border border-purple-400 rounded shadow-[0_0_15px_rgba(192,132,252,0.6)]"></div>
                 <div className="w-[40%] h-full bg-purple-600/90 border border-purple-400 rounded shadow-[0_0_15px_rgba(192,132,252,0.6)]"></div>
               </div>
               <span className="absolute -bottom-6 text-xs font-bold text-purple-200 bg-black/60 px-3 py-1 rounded-full shadow-lg">RAM</span>
            </Layer3D>
            <Layer3D id="gpu" baseZ={40} style={{ top: '48%', left: '5%', width: '80%', height: '22%' }} selectedItem={selectedItem} onSelect={onSelect} hardwareData={hardwareData} colorMap={colorMap}>
              <div className="flex w-full h-full items-center justify-around px-4 relative pointer-events-none">
                <span className="absolute -top-3 left-2 text-xs font-bold bg-black/80 text-white px-2 py-1 rounded shadow-md border border-red-500/30">GPU RTX</span>
                <Fan className="w-12 h-12 opacity-80" />
                <Fan className="w-12 h-12 opacity-80" />
              </div>
            </Layer3D>
            <Layer3D id="storage" baseZ={10} style={{ bottom: '5%', left: '10%', width: '30%', height: '18%' }} selectedItem={selectedItem} onSelect={onSelect} hardwareData={hardwareData} colorMap={colorMap} />
            <Layer3D id="psu" baseZ={20} style={{ bottom: '2%', right: '5%', width: '45%', height: '25%' }} selectedItem={selectedItem} onSelect={onSelect} hardwareData={hardwareData} colorMap={colorMap} />
            <Layer3D id="cooling" baseZ={60} style={{ top: '12%', left: '32.5%', width: '30%', height: '26%' }} customClass="!rounded-full" selectedItem={selectedItem} onSelect={onSelect} hardwareData={hardwareData} colorMap={colorMap}>
              <div className="flex flex-col items-center justify-center pointer-events-none w-full h-full">
                <Fan className={`w-3/4 h-3/4 ${selectedItem?.id === 'cooling' || !selectedItem ? 'animate-spin' : ''}`} style={{ animationDuration: '2.5s' }} />
              </div>
            </Layer3D>
          </div>
        </div>
        <button onClick={() => setRotation({ x: 60, z: -40 })} className="absolute bottom-6 right-6 z-20 bg-slate-800/80 hover:bg-slate-700 backdrop-blur-sm text-white text-xs font-bold px-4 py-3 rounded-xl border border-slate-600 shadow-2xl flex items-center gap-2 transition-all hover:scale-105">
          <Rotate3D size={16} /> Restaurar Ángulo
        </button>
      </div>
    </div>
  );
}