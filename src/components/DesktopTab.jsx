import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Monitor, FolderOpen, Trash2, FileText, Image as ImageIcon, Layers, Cog,
  Terminal, Globe, Wifi, Download, Settings, Search, HardDrive, Battery, Volume2,
  CircleCheck, CircleX, Zap, ShieldCheck, Info, ChevronRight, PanelBottom
} from 'lucide-react';
import { desktopData } from '../data/desktopData.js';

export default function DesktopTab() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [contextMenu, setContextMenu] = useState(null);
  const [showStartMenu, setShowStartMenu] = useState(false);
  const [showExplorer, setShowExplorer] = useState(false);
  const [showInformeWindow, setShowInformeWindow] = useState(false);
  const [showFotoWindow, setShowFotoWindow] = useState(false);
  const [showMiPcWindow, setShowMiPcWindow] = useState(false);
  const [trashItems, setTrashItems] = useState([]);

  const handleClick = useCallback((item) => {
    setSelectedItem(item);
    setContextMenu(null);
  }, []);

  const handleDesktopClick = useCallback(() => {
    setSelectedItem(desktopData.inicio);
    setContextMenu(null);
  }, []);

  const handleDoubleClick = useCallback((item) => {
    setSelectedItem(item);
    if (item.id === 'this_pc') { setShowMiPcWindow(true); }
    if (item.id === 'informe_txt') setShowInformeWindow(true);
    if (item.id === 'foto_png') setShowFotoWindow(true);
    if (item.id === 'files') setShowExplorer(true);
  }, []);

  const handleContextMenu = useCallback((e, item) => {
    e.preventDefault();
    setContextMenu({ x: e.clientX, y: e.clientY, item });
    setSelectedItem(item);
  }, []);

  const handleDragToTrash = useCallback((itemId) => {
    if (itemId === 'informe_txt') {
      setShowInformeWindow(false);
      setTrashItems(prev => [...prev, { id: 'informe_txt', name: 'Informe.txt' }]);
    }
    if (itemId === 'foto_png') {
      setShowFotoWindow(false);
      setTrashItems(prev => [...prev, { id: 'foto_png', name: 'Foto.png' }]);
    }
    setSelectedItem(null);
  }, []);

  const handleCloseContextMenu = useCallback(() => {
    setContextMenu(null);
  }, []);

  const renderPanelExplicativo = () => {
    if (!selectedItem) {
      return (
        <div className="p-6 space-y-5">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-lg bg-violet-500/20">
              <Monitor size={24} className="text-violet-400" />
            </div>
            <div>
              <h3 className="font-bold text-white">Escritorio Virtual Interactivo</h3>
              <p className="text-sm text-slate-400">Selecciona cualquier elemento del escritorio para explorar su funcionamiento</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-2.5 py-1 bg-slate-800 text-slate-300 rounded text-xs font-medium border border-slate-700">Click = Seleccionar</span>
            <span className="px-2.5 py-1 bg-slate-800 text-slate-300 rounded text-xs font-medium border border-slate-700">Doble click = Abrir</span>
            <span className="px-2.5 py-1 bg-slate-800 text-slate-300 rounded text-xs font-medium border border-slate-700">Click derecho = Menú</span>
          </div>
        </div>
      );
    }

    const pros = selectedItem.pros || ['Información disponible al seleccionar el elemento'];
    const cons = selectedItem.cons || ['Ninguna contraindicación para el uso normal'];
    const examples = selectedItem.examples ? [selectedItem.examples] : [`Selecciona "${selectedItem.name}" para ver cómo funciona en el escritorio.`];
    const tips = selectedItem.tips || ['Haz clic para seleccionar y ver más información', 'Doble clic para abrir aplicaciones o ventanas', 'Arrastra archivos a la papelera para eliminarlos'];

    return (
      <div className="p-6 space-y-5">
        <section className="rounded-sm border p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-800/50 border-slate-700">
          <div>
            <p className="text-[9px] uppercase tracking-widest font-semibold text-slate-500">Ruta actual</p>
            <p className="text-sm font-medium mt-0.5 text-slate-200">Escritorio / {selectedItem.name}</p>
          </div>
          <button
            onClick={() => setSelectedItem(null)}
            className="rounded-sm border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest transition-all border-slate-600 text-slate-300 hover:bg-slate-700"
          >
            Cambiar tema
          </button>
        </section>

        {/* SIMULADOR INTERACTIVO - PRIMERO */}
        <section className="p-5 rounded-sm border border-slate-700 bg-slate-800/30">
          <h4 className="text-xs font-semibold text-violet-400 uppercase tracking-widest mb-4 flex items-center gap-2">
            <Monitor size={16} />
            Simulador Interactivo
          </h4>
          <div className="bg-slate-900 rounded-lg p-4 border border-slate-700">
            {renderSimulator(selectedItem.id)}
          </div>
        </section>

        <section>
          <h4 className="text-base font-semibold mb-3 pb-2 border-b flex items-center gap-2 text-slate-200 border-slate-700">
            <FileText size={16} className="text-slate-400" />
            Concepto
          </h4>
          <div className="space-y-3">
            {selectedItem.desc.split('\n\n').map((para, i) => (
              <p key={i} className="text-[14px] leading-relaxed text-slate-300">{para}</p>
            ))}
          </div>
        </section>

        {selectedItem.details && (
          <section className="p-5 rounded-sm border shadow-inner bg-slate-800/30 border-slate-700">
            <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-widest mb-3 flex items-center gap-2">
              <Info size={16} />
              Profundización
            </h4>
            <div className="space-y-2.5">
              <p className="text-[14px] font-medium mb-1.5 text-slate-200">Características:</p>
              {selectedItem.details.split('\n').map((line, i) => (
                <p key={i} className="text-[14px] font-medium text-slate-400">• {line.replace(/^[•-]\s*/, '')}</p>
              ))}
            </div>
          </section>
        )}

        <section className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="p-4 rounded-sm shadow-sm hover:shadow-md transition-shadow bg-emerald-500/10 border border-emerald-500/30">
              <h4 className="text-[11px] font-semibold uppercase tracking-widest mb-3 flex items-center gap-2 text-emerald-400">
                <CircleCheck size={16} className="text-emerald-400" />
                Ventajas
              </h4>
              <ul className="space-y-2.5">
                {pros.map((pro, i) => (
                  <li key={i} className="text-[14px] flex items-start gap-2.5 leading-relaxed text-slate-300">
                    <CircleCheck size={14} className="text-emerald-400 mt-0.5 shrink-0" />
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-4 rounded-sm shadow-sm hover:shadow-md transition-shadow bg-red-500/10 border border-red-500/30">
              <h4 className="text-[11px] font-semibold uppercase tracking-widest mb-3 flex items-center gap-2 text-red-400">
                <CircleX size={16} className="text-red-400" />
                Desventajas
              </h4>
              <ul className="space-y-2.5">
                {cons.map((con, i) => (
                  <li key={i} className="text-[14px] flex items-start gap-2.5 leading-relaxed text-slate-300">
                    <CircleX size={14} className="text-red-400 mt-0.5 shrink-0" />
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <div className="p-5 rounded-sm border shadow-xl relative overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
            <Zap size={60} className="absolute -right-3 -bottom-3 text-slate-600/30" />
            <h4 className="text-[11px] font-semibold text-emerald-300 uppercase tracking-widest mb-2 flex items-center gap-2 relative z-10">
              <Zap size={16} className="text-emerald-400" />
              Ejemplos Reales
            </h4>
            {examples.map((ex, i) => (
              <p key={i} className="text-[14px] text-slate-300 leading-relaxed relative z-10 italic">"{ex}"</p>
            ))}
          </div>
        </section>

        <section className="p-5 rounded-sm border shadow-inner bg-slate-800/30 border-slate-700">
          <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-widest mb-3 flex items-center gap-2">
            <ShieldCheck size={16} />
            Consejos Prácticos
          </h4>
          <ul className="space-y-2.5">
            {tips.map((tip, i) => (
              <li key={i} className="text-[14px] flex items-start gap-2.5 leading-relaxed text-slate-300">
                <ChevronRight size={14} className="text-slate-500 mt-0.5 shrink-0" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    );
  };

  const renderSimulator = (itemId) => {
    switch (itemId) {
      case 'this_pc': return <SimulatorPC />;
      case 'files': return <SimulatorArchivos onOpenExplorer={() => setShowExplorer(true)} />;
      case 'trash': return <SimulatorPapelera items={trashItems} />;
      case 'informe_txt': return <SimulatorDocumento />;
      case 'foto_png': return <SimulatorImagen />;
      case 'explorer': return <SimulatorExplorador />;
      case 'start_menu': return <SimulatorMenuInicio onOpenExplorer={() => { setShowExplorer(true); setShowStartMenu(false); }} />;
      case 'taskbar': return <SimulatorTaskbar />;
      case 'system_tray': return <SimulatorSystemTray />;
      case 'desktop_icons': return <SimulatorIconos />;
      case 'window_buttons': return <SimulatorBotonesVentana />;
      default: return <SimulatorDefault itemId={itemId} />;
    }
  };

  return (
    <div className="flex flex-col gap-0 animate-in fade-in duration-500">
      {/* Escritorio Virtual - 16:9 aspect ratio */}
      <div className="relative rounded-sm border border-slate-300 overflow-hidden shadow-[0_12px_40px_rgba(15,23,42,0.15)] w-full cursor-pointer" style={{ aspectRatio: '16/9', background: 'linear-gradient(180deg, #1e3a5f 0%, #2d5a87 40%, #4a90a4 70%, #7ab8c9 100%)' }} onClick={handleDesktopClick}>
        <div className="absolute top-5 left-5 flex flex-col gap-5">
          <DesktopIcon item={desktopData.this_pc} isSelected={selectedItem?.id === 'this_pc'} onClick={() => handleClick(desktopData.this_pc)} onDoubleClick={() => handleDoubleClick(desktopData.this_pc)} onContextMenu={(e) => handleContextMenu(e, desktopData.this_pc)} />
          <DesktopIcon item={desktopData.files} isSelected={selectedItem?.id === 'files'} onClick={() => handleClick(desktopData.files)} onDoubleClick={() => handleDoubleClick(desktopData.files)} onContextMenu={(e) => handleContextMenu(e, desktopData.files)} />
          <DesktopIcon item={desktopData.trash} isSelected={selectedItem?.id === 'trash'} onClick={() => handleClick(desktopData.trash)} onDoubleClick={() => handleDoubleClick(desktopData.trash)} onContextMenu={(e) => handleContextMenu(e, desktopData.trash)} onDrop={handleDragToTrash} />
        </div>

        <div className="absolute top-5 right-5 flex flex-col gap-4">
          <DesktopIcon item={desktopData.informe_txt} isSelected={selectedItem?.id === 'informe_txt'} onClick={() => handleClick(desktopData.informe_txt)} onDoubleClick={() => handleDoubleClick(desktopData.informe_txt)} onContextMenu={(e) => handleContextMenu(e, desktopData.informe_txt)} draggable onDragData="informe_txt" />
          <DesktopIcon item={desktopData.foto_png} isSelected={selectedItem?.id === 'foto_png'} onClick={() => handleClick(desktopData.foto_png)} onDoubleClick={() => handleDoubleClick(desktopData.foto_png)} onContextMenu={(e) => handleContextMenu(e, desktopData.foto_png)} draggable onDragData="foto_png" />
        </div>

        <AnimatePresence>
          {showStartMenu && (
            <StartMenuSimulator
              onClose={() => setShowStartMenu(false)}
              onOpenExplorer={() => { setShowExplorer(true); setShowStartMenu(false); }}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showExplorer && (
            <ExploradorSimulator
              onClose={() => setShowExplorer(false)}
              onSelect={(item) => handleClick(item)}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showInformeWindow && <VentanaDocumento onClose={() => setShowInformeWindow(false)} />}
        </AnimatePresence>

        <AnimatePresence>
          {showFotoWindow && <VentanaImagen onClose={() => setShowFotoWindow(false)} />}
        </AnimatePresence>

        <AnimatePresence>
          {showMiPcWindow && <VentanaMiPC onClose={() => setShowMiPcWindow(false)} />}
        </AnimatePresence>

        {/* Barra de tareas con Zona de notificaciones clickeable */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-white/95 backdrop-blur border-t border-slate-300/80 flex items-center px-4">
          <button onClick={() => setShowStartMenu(!showStartMenu)} className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-slate-200/80 transition-colors">
            <Layers size={18} className="text-violet-600" />
            <span className="font-semibold text-slate-700 text-sm">Inicio</span>
          </button>
          <div className="w-px h-6 bg-slate-300 mx-2"></div>
          <button onClick={() => { setShowExplorer(true); handleClick(desktopData.files); }} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-100 text-slate-700 border border-slate-200">
            <FolderOpen size={16} className="text-amber-500" />
            <span className="text-sm">Explorador</span>
          </button>
          <div className="flex-1"></div>

          {/* Zona de notificaciones clickeable */}
          <button onClick={() => handleClick({ id: 'system_tray', name: 'Zona de Notificaciones', category: 'Barra de tareas', desc: 'La Zona de Notificaciones (System Tray) es el area ubicada en la esquina derecha de la barra de tareas. Aqui se muestran iconos de estado del sistema como WiFi, volumen, bateria, reloj y notificaciones de aplicaciones.\n\nEs un area fundamental para ver rapidamente el estado del equipo y acceder a ajustes rapidos sin necesidad de abrir menus completos.', details: 'Elementos habituales en la bandeja:\n• WiFi / Ethernet: Indica si hay conexion a internet.\n• Volumen: Permite ajustar el audio rapidamente.\n• Bateria: Muestra el nivel de carga en portatiles.\n• Reloj: Fecha y hora actual, acceso rapido al calendario.\n• Notificaciones: Alertas de aplicaciones y mensajes pendientes.', pros: ['Permite ver el estado del sistema de un vistazo.', 'Acceso rapido a ajustes sin abrir menus.', 'Notificaciones de aplicaciones importantes.'], cons: ['Puede saturarse con demasiados iconos.', 'Algunas notificaciones son intrusivas o distraccion.', 'Iconos pequenos son difficiles de leer para algunos usuarios.'], examples: 'Hacer clic en la hora para ver el calendario, ajustar volumen rapidamente, conectar WiFi desde el icono, ver nivel de bateria.', tips: ['Organiza los iconos que ves clickeando en la flecha pequenos.', 'Elimina aplicaciones que inician en segundo plano innecesarias.', 'La hora clickeable da acceso rapido a alarma y calendario.'] })} className="flex items-center gap-3 pr-2 hover:bg-slate-100 rounded-lg py-1 px-2 transition-colors">
            <div className="flex items-center gap-2">
              <Wifi size={14} className="text-emerald-500" />
              <div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </div>
            </div>
            <span className="text-xs text-slate-600 font-medium">100%</span>
            <span className="text-slate-400">🔊</span>
            <span className="text-slate-400">🔔</span>
            <div className="flex flex-col items-end text-[11px] leading-tight">
              <span className="text-slate-700 font-medium">{new Date().toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit' })}</span>
              <span className="text-slate-500">{new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}</span>
            </div>
          </button>
        </div>
      </div>

      {/* Panel Explicativo con estilo consistente */}
      <div className="mt-4 rounded-sm border border-slate-800 bg-slate-900 shadow-[0_8px_30px_rgba(15,23,42,0.15)]">
        {renderPanelExplicativo()}
      </div>

      <AnimatePresence>
        {contextMenu && (
          <ContextMenu
            x={contextMenu.x}
            y={contextMenu.y}
            item={contextMenu.item}
            onClose={handleCloseContextMenu}
          />
        )}
      </AnimatePresence>

      <div className="mx-4 mt-4 rounded-sm border border-amber-500/30 bg-gradient-to-r from-amber-50 to-orange-50 p-4">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/20 shrink-0">
            <span className="text-xl">☕</span>
          </div>
          <div className="text-center sm:text-left flex-1">
            <p className="text-[9px] font-bold uppercase tracking-widest text-amber-600">Apoya Este Proyecto</p>
            <p className="text-slate-800 font-semibold text-sm">Si esto te está sirviendo, invítame a un café</p>
          </div>
          <a href="https://buymeacoffee.com/digitalsynapse" target="_blank" rel="noopener noreferrer"
            className="shrink-0 px-4 py-2 rounded-sm bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-bold text-xs uppercase tracking-wider transition-all hover:-translate-y-0.5 shadow-lg shadow-amber-500/20">
            Invítame a un café
          </a>
        </div>
      </div>
    </div>
  );
}

function DesktopIcon({ item, isSelected, onClick, onDoubleClick, onContextMenu, draggable, onDrop, onDragData }) {
  const [isDragOver, setIsDragOver] = useState(false);

  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      draggable={draggable}
      onDragStart={(e) => { if (draggable) e.dataTransfer.setData('text/plain', onDragData || item.id); }}
      onDragOver={(e) => { if (onDrop) { e.preventDefault(); setIsDragOver(true); } }}
      onDragLeave={() => setIsDragOver(false)}
      onDrop={(e) => { if (onDrop) { e.preventDefault(); const id = e.dataTransfer.getData('text/plain'); onDrop(id); setIsDragOver(false); } }}
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      onContextMenu={onContextMenu}
      className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-all cursor-pointer group ${isSelected ? 'bg-white/25 ring-2 ring-white/60' : 'hover:bg-white/15'} ${isDragOver ? 'bg-rose-500/60 scale-110 ring-2 ring-rose-400' : ''}`}
    >
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center shadow-lg transition-all ${isSelected ? 'bg-white/30 ring-2 ring-white' : 'bg-white/20 group-hover:bg-white/25'}`}>
        <item.icon size={32} className="text-white drop-shadow-lg" />
      </div>
      <span className="text-[11px] font-semibold text-white text-center drop-shadow-md max-w-[70px] leading-tight">{item.name}</span>
    </motion.button>
  );
}

function ContextMenu({ x, y, item }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="fixed z-[100] bg-white rounded-lg shadow-xl border border-slate-200 py-1 min-w-[180px]"
      style={{ left: Math.min(x, (typeof window !== 'undefined' ? window.innerWidth : 800) - 200), top: Math.min(y, (typeof window !== 'undefined' ? window.innerHeight : 600) - 200) }}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="px-3 py-2 border-b border-slate-100">
        <p className="text-xs font-semibold text-slate-800">{item.name}</p>
        <p className="text-[10px] text-slate-400">{item.category}</p>
      </div>
      <button className="w-full px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-100 flex items-center gap-2"><Settings size={14} /> Propiedades</button>
      <button className="w-full px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-100 flex items-center gap-2"><FileText size={14} /> Abrir</button>
      <button className="w-full px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-100 flex items-center gap-2"><Globe size={14} /> Enviar a...</button>
    </motion.div>
  );
}

function StartMenuSimulator({ onClose, onOpenExplorer }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 15, scale: 0.97 }}
      transition={{ duration: 0.2 }}
      className="absolute bottom-14 left-4 w-[290px] bg-white rounded-xl border border-slate-200 shadow-2xl z-50 overflow-hidden"
    >
      <div className="bg-gradient-to-r from-violet-600 to-purple-600 px-4 py-5 text-white">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm border border-white/10">
            <Layers size={26} />
          </div>
          <div>
            <p className="font-bold text-lg">Windows 12</p>
            <p className="text-xs text-white/70">Escritorio virtual</p>
          </div>
        </div>
      </div>
      <div className="p-3">
        <div className="relative mb-3">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input type="text" placeholder="Buscar aplicaciones, archivos..." className="w-full pl-10 pr-4 py-2.5 bg-slate-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500" />
        </div>
        <div className="grid grid-cols-4 gap-1">
          {[
            { icon: FolderOpen, name: 'Archivos', color: 'text-amber-500', action: onOpenExplorer },
            { icon: Globe, name: 'Navegador', color: 'text-blue-500', action: onClose },
            { icon: Terminal, name: 'Terminal', color: 'text-emerald-500', action: onClose },
            { icon: Cog, name: 'Ajustes', color: 'text-slate-500', action: onClose },
            { icon: FileText, name: 'Docs', color: 'text-blue-500', action: onClose },
            { icon: ImageIcon, name: 'Fotos', color: 'text-pink-500', action: onClose },
            { icon: Download, name: 'Descargas', color: 'text-purple-500', action: onClose },
            { icon: Settings, name: 'Sistema', color: 'text-slate-600', action: onClose },
          ].map((app, i) => (
            <button key={i} onClick={app.action} className="flex flex-col items-center gap-1.5 p-3 rounded-lg hover:bg-slate-100 transition-colors">
              <app.icon size={24} className={app.color} />
              <span className="text-[10px] text-slate-600 font-medium">{app.name}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="border-t border-slate-100 px-4 py-3 flex justify-between items-center bg-slate-50">
        <button className="text-xs text-slate-500 hover:text-slate-700 font-medium flex items-center gap-1.5"><Settings size={12} /> Apagar</button>
        <button onClick={onClose} className="text-xs text-slate-500 hover:text-slate-700 font-medium">Cerrar</button>
      </div>
    </motion.div>
  );
}

function ExploradorSimulator({ onClose, onSelect }) {
  const carpetas = [
    { name: 'Documentos', icon: FileText, count: 12, color: 'blue' },
    { name: 'Proyectos', icon: FolderOpen, count: 5, color: 'emerald' },
    { name: 'Descargas', icon: Download, count: 8, color: 'purple' },
    { name: 'Imágenes', icon: ImageIcon, count: 24, color: 'rose' },
  ];

  return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
      className="absolute top-12 left-1/2 -translate-x-1/2 w-[420px] bg-white rounded-xl border border-slate-200 shadow-2xl z-50 overflow-hidden"
    >
      <div className="bg-slate-100 px-4 py-3 border-b border-slate-200 flex items-center justify-between rounded-t-xl">
        <div className="flex items-center gap-2">
          <FolderOpen size={18} className="text-amber-500" />
          <span className="font-semibold text-slate-700">Explorador de archivos</span>
        </div>
        <button onClick={onClose} className="w-7 h-7 rounded hover:bg-slate-200 flex items-center justify-center text-slate-500 text-lg">✕</button>
      </div>
      <div className="p-4 grid grid-cols-2 gap-3">
        {carpetas.map((c) => (
          <button key={c.name} onClick={() => onSelect({ ...desktopData.files, name: c.name })}
            className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all text-left">
            <div className={`w-12 h-12 rounded-xl bg-${c.color}-100 flex items-center justify-center`}>
              <c.icon size={24} className={`text-${c.color}-600`} />
            </div>
            <div>
              <p className="font-semibold text-slate-700">{c.name}</p>
              <p className="text-xs text-slate-400">{c.count} elementos</p>
            </div>
          </button>
        ))}
      </div>
    </motion.div>
  );
}

function VentanaDocumento({ onClose }) {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.9, rotate: -3 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} exit={{ opacity: 0, scale: 0.9, rotate: 3 }}
      className="absolute top-16 left-1/2 -translate-x-1/2 w-[440px] bg-white rounded-xl border border-slate-200 shadow-2xl z-50 overflow-hidden"
    >
      <div className="bg-slate-100 px-4 py-3 border-b border-slate-200 flex items-center justify-between rounded-t-xl">
        <div className="flex items-center gap-2">
          <FileText size={18} className="text-emerald-500" />
          <span className="font-semibold text-slate-700">Informe.txt - Bloc de notas</span>
        </div>
        <button onClick={onClose} className="w-7 h-7 rounded hover:bg-red-100 flex items-center justify-center text-red-500 text-lg">✕</button>
      </div>
      <div className="p-5">
        <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
          <div className="flex gap-2 mb-4">
            <div className="w-3.5 h-3.5 rounded-full bg-emerald-400"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-amber-400"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-red-400"></div>
          </div>
          <h3 className="font-bold text-slate-800 text-lg mb-3">Resumen Ejecutivo - Proyecto Digital</h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Este documento presenta un análisis detallado sobre la transformación digital en el ámbito educativo. Los resultados obtenidos demuestran una mejora significativa en el rendimiento de los estudiantes.
          </p>
          <div className="border-t border-slate-200 pt-3 mt-3">
            <p className="text-sm font-semibold text-slate-700 mb-2">Conclusiones:</p>
            <ul className="text-sm text-slate-600 space-y-1.5">
              <li>→ Incremento del 35% en participación</li>
              <li>→ Mejora en calificaciones promedio</li>
              <li>→ Alta satisfacción del alumnado</li>
            </ul>
          </div>
          <p className="text-xs text-slate-400 mt-4">Última modificación: 28/04/2026</p>
        </div>
      </div>
    </motion.div>
  );
}

function VentanaImagen({ onClose }) {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
      className="absolute top-14 left-1/2 -translate-x-1/2 w-[400px] bg-white rounded-xl border border-slate-200 shadow-2xl z-50 overflow-hidden"
    >
      <div className="bg-slate-100 px-4 py-3 border-b border-slate-200 flex items-center justify-between rounded-t-xl">
        <div className="flex items-center gap-2">
          <ImageIcon size={18} className="text-purple-500" />
          <span className="font-semibold text-slate-700">Foto.png - Visor de imágenes</span>
        </div>
        <button onClick={onClose} className="w-7 h-7 rounded hover:bg-red-100 flex items-center justify-center text-red-500 text-lg">✕</button>
      </div>
      <div className="p-5">
        <div className="bg-gradient-to-br from-purple-100 via-pink-50 to-amber-50 rounded-xl p-10 border border-slate-200 flex items-center justify-center">
          <div className="text-center">
            <div className="w-44 h-44 mx-auto rounded-2xl bg-gradient-to-br from-violet-400 via-purple-400 to-pink-400 flex items-center justify-center shadow-xl">
              <span className="text-8xl">🏔️</span>
            </div>
            <p className="mt-4 font-semibold text-slate-700">paisaje.png</p>
            <p className="text-sm text-slate-400">2560 × 1440 píxeles</p>
          </div>
        </div>
        <div className="mt-4 flex gap-2 justify-center">
          <span className="px-3 py-1.5 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">PNG</span>
          <span className="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-full text-xs">2.4 MB</span>
          <span className="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-full text-xs">Transparente</span>
        </div>
      </div>
    </motion.div>
  );
}

function VentanaMiPC({ onClose }) {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
      className="absolute top-12 left-1/2 -translate-x-1/2 w-[480px] bg-white rounded-xl border border-slate-200 shadow-2xl z-50 overflow-hidden"
    >
      <div className="bg-slate-100 px-4 py-3 border-b border-slate-200 flex items-center justify-between rounded-t-xl">
        <div className="flex items-center gap-2">
          <HardDrive size={18} className="text-blue-500" />
          <span className="font-semibold text-slate-700">Este PC</span>
        </div>
        <button onClick={onClose} className="w-7 h-7 rounded hover:bg-red-100 flex items-center justify-center text-red-500 text-lg">✕</button>
      </div>
      <div className="p-5">
        <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
          <div className="grid grid-cols-3 gap-4">
            {[
              { letter: 'C:', name: 'Disco local (SSD)', size: '256 GB', used: 178, color: 'blue', icon: HardDrive },
              { letter: 'D:', name: 'Datos', size: '512 GB', used: 324, color: 'emerald', icon: HardDrive },
              { letter: 'E:', name: 'USB', size: '32 GB', used: 8, color: 'amber', icon: HardDrive },
            ].map((drive) => (
              <div key={drive.letter} className="bg-white rounded-xl p-4 border border-slate-200 text-center hover:border-blue-300 hover:shadow-md transition-all cursor-pointer">
                <drive.icon size={32} className={`mx-auto text-${drive.color}-500 mb-2`} />
                <p className="font-bold text-slate-800">{drive.letter}</p>
                <p className="text-xs text-slate-500">{drive.name}</p>
                <p className="text-[10px] text-slate-400 mt-1">{drive.size}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-slate-200">
            <p className="text-xs text-slate-500 text-center">Discos y dispositivos de almacenamiento conectados</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function SimulatorPC() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 pb-3 border-b border-slate-700">
        <Monitor size={20} className="text-blue-400" />
        <span className="font-bold text-white text-lg">Este PC - Dispositivos y Disco</span>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {[
          { letter: 'C:', name: 'Disco local (SSD)', size: '256 GB', used: 178, color: 'blue' },
          { letter: 'D:', name: 'Datos', size: '512 GB', used: 324, color: 'emerald' },
          { letter: 'E:', name: 'USB', size: '32 GB', used: 8, color: 'amber' },
        ].map((drive) => (
          <div key={drive.letter} className="bg-slate-800 rounded-xl p-4 border border-slate-700">
            <div className="flex items-center gap-2 mb-2">
              <HardDrive size={18} className={`text-${drive.color}-400`} />
              <span className="text-white font-bold">{drive.letter}</span>
            </div>
            <p className="text-slate-400 text-xs mb-3">{drive.name}</p>
            <div className="w-full h-2.5 bg-slate-700 rounded-full overflow-hidden mb-1.5">
              <div className={`h-full bg-${drive.color}-500 rounded-full`} style={{ width: `${(drive.used / parseInt(drive.size)) * 100}%` }}></div>
            </div>
            <div className="flex justify-between text-[10px] text-slate-500">
              <span>{drive.used} GB usados</span>
              <span>{drive.size}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SimulatorArchivos({ onOpenExplorer }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 pb-3 border-b border-slate-700">
        <FolderOpen size={20} className="text-amber-400" />
        <span className="font-bold text-white text-lg">Carpeta de Archivos Personales</span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {[
          { name: 'Documentos', icon: FileText, count: 12, color: 'blue' },
          { name: 'Proyectos', icon: FolderOpen, count: 5, color: 'emerald' },
          { name: 'Descargas', icon: Download, count: 8, color: 'purple' },
          { name: 'Imágenes', icon: ImageIcon, count: 24, color: 'rose' },
        ].map((folder) => (
          <button key={folder.name} onClick={onOpenExplorer}
            className="flex items-center gap-3 bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-slate-600 transition-colors text-left">
            <folder.icon size={22} className={`text-${folder.color}-400`} />
            <div>
              <p className="text-white font-semibold text-sm">{folder.name}</p>
              <p className="text-slate-400 text-xs">{folder.count} archivos</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function SimulatorPapelera({ items }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 pb-3 border-b border-slate-700">
        <Trash2 size={20} className="text-rose-400" />
        <span className="font-bold text-white text-lg">Papelera de Reciclaje</span>
      </div>
      {items.length === 0 ? (
        <div className="text-center py-8">
          <Trash2 size={40} className="mx-auto mb-3 text-slate-600" />
          <p className="text-slate-400 font-medium">La papelera está vacía</p>
          <p className="text-slate-500 text-sm mt-1">Arrastra archivos aquí para eliminarlos</p>
        </div>
      ) : (
        <div className="space-y-2">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-3 bg-slate-800 rounded-xl p-3 border border-slate-700">
              <FileText size={18} className="text-slate-400" />
              <span className="text-white font-medium">{item.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function SimulatorDocumento() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 pb-3 border-b border-slate-700">
        <FileText size={20} className="text-emerald-400" />
        <span className="font-bold text-white text-lg">Bloc de Notas - Documento de Texto</span>
      </div>
      <div className="bg-slate-800 rounded-xl p-5 border border-slate-700">
        <div className="flex gap-2 mb-4">
          <div className="w-3.5 h-3.5 rounded-full bg-emerald-400"></div>
          <div className="w-3.5 h-3.5 rounded-full bg-amber-400"></div>
          <div className="w-3.5 h-3.5 rounded-full bg-red-400"></div>
        </div>
        <div className="space-y-2.5">
          <div className="h-4 w-3/4 bg-slate-700 rounded"></div>
          <div className="h-2.5 w-full bg-slate-700 rounded"></div>
          <div className="h-2.5 w-5/6 bg-slate-700 rounded"></div>
          <div className="h-2.5 w-4/5 bg-slate-700 rounded"></div>
          <div className="h-2.5 w-full bg-slate-700 rounded"></div>
        </div>
        <div className="mt-4 pt-4 border-t border-slate-700 flex justify-between">
          <span className="text-xs text-slate-500">Bloc de notas</span>
          <span className="text-xs text-slate-500">Windows</span>
        </div>
      </div>
    </div>
  );
}

function SimulatorImagen() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 pb-3 border-b border-slate-700">
        <ImageIcon size={20} className="text-purple-400" />
        <span className="font-bold text-white text-lg">Visor de Fotografías</span>
      </div>
      <div className="bg-slate-800 rounded-xl p-5 border border-slate-700">
        <div className="bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-amber-500/20 rounded-xl p-8 flex items-center justify-center">
          <div className="w-28 h-28 rounded-xl bg-gradient-to-br from-violet-400 to-pink-400 flex items-center justify-center shadow-lg">
            <span className="text-5xl">🖼️</span>
          </div>
        </div>
        <div className="mt-4 flex gap-2 justify-center">
          <span className="px-3 py-1.5 bg-slate-700 text-slate-300 rounded-lg text-xs">PNG</span>
          <span className="px-3 py-1.5 bg-slate-700 text-slate-300 rounded-lg text-xs">2560×1440</span>
          <span className="px-3 py-1.5 bg-slate-700 text-slate-300 rounded-lg text-xs">2.4 MB</span>
        </div>
      </div>
    </div>
  );
}

function SimulatorExplorador() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 pb-3 border-b border-slate-700">
        <FolderOpen size={20} className="text-amber-400" />
        <span className="font-bold text-white text-lg">Explorador de Windows</span>
      </div>
      <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
        <div className="flex border-b border-slate-700 bg-slate-800/50">
          <div className="px-4 py-2.5 text-xs text-slate-400 border-r border-slate-700">◀ ▶</div>
          <div className="flex-1 px-4 py-2.5 text-xs text-slate-300">Este equipo {'>'} Documentos</div>
        </div>
        <div className="grid grid-cols-4 gap-3 p-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-slate-700/50 rounded-xl p-3 text-center">
              <FolderOpen size={28} className="mx-auto text-amber-400 mb-2" />
              <p className="text-[11px] text-slate-300">Carpeta {i}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SimulatorMenuInicio() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 pb-3 border-b border-slate-700">
        <Layers size={20} className="text-violet-400" />
        <span className="font-bold text-white text-lg">Menú Inicio de Windows</span>
      </div>
      <div className="bg-slate-800 rounded-xl p-4 border border-slate-700 overflow-hidden">
        <div className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl px-4 py-4 mb-4">
          <div className="flex items-center gap-3 text-white">
            <Layers size={24} />
            <span className="font-bold text-lg">Windows 12</span>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {[
            { icon: FolderOpen, name: 'Archivos', color: 'text-amber-400' },
            { icon: Globe, name: 'Navegador', color: 'text-blue-400' },
            { icon: Terminal, name: 'Terminal', color: 'text-emerald-400' },
            { icon: Cog, name: 'Ajustes', color: 'text-slate-400' },
          ].map((app, i) => (
            <button key={i} className="flex flex-col items-center gap-2 p-3 bg-slate-700 rounded-xl hover:bg-slate-600 transition-colors">
              <app.icon size={24} className={app.color} />
              <span className="text-[10px] text-slate-300">{app.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function SimulatorTaskbar() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 pb-3 border-b border-slate-700">
        <PanelBottom size={20} className="text-slate-400" />
        <span className="font-bold text-white text-lg">Barra de Tareas</span>
      </div>
      <div className="bg-slate-800 rounded-xl p-2 flex items-center gap-1.5 border border-slate-700">
        <div className="w-10 h-10 rounded-lg bg-violet-600 flex items-center justify-center"><Layers size={20} className="text-white" /></div>
        <div className="w-10 h-10 rounded-lg bg-amber-500 flex items-center justify-center"><FolderOpen size={20} className="text-white" /></div>
        <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center"><Globe size={20} className="text-white" /></div>
        <div className="w-10 h-10 rounded-lg bg-emerald-500 flex items-center justify-center"><Terminal size={20} className="text-white" /></div>
        <div className="flex-1"></div>
        <div className="flex items-center gap-2 pr-2">
          <Wifi size={14} className="text-emerald-400" />
          <span className="text-xs text-slate-300">100%</span>
          <span className="text-slate-400 text-sm">🔊</span>
          <span className="text-slate-400 text-sm">🔔</span>
        </div>
      </div>
      <p className="text-xs text-slate-500 text-center">Acceso rápido a aplicaciones, programas y herramientas del sistema</p>
    </div>
  );
}

function SimulatorSystemTray() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 pb-3 border-b border-slate-700">
        <PanelBottom size={20} className="text-cyan-400" />
        <span className="font-bold text-white text-lg">Zona de Notificaciones</span>
      </div>
      <div className="bg-slate-800 rounded-xl p-4 border border-slate-700 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Wifi size={16} className="text-emerald-400" />
            <span className="text-sm text-slate-200">WiFi - Red domestica</span>
          </div>
          <span className="text-xs text-emerald-400 font-semibold">Conectado</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Volume2 size={16} className="text-slate-400" />
            <span className="text-sm text-slate-400">Volumen</span>
          </div>
          <span className="text-sm text-slate-200">🔊 75%</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Battery size={16} className="text-emerald-400" />
            <span className="text-sm text-slate-400">Batería</span>
          </div>
          <span className="text-sm text-emerald-400">92% ⚡</span>
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-slate-700">
          <span className="text-sm text-slate-400">Hora</span>
          <span className="text-sm text-slate-200 font-medium">{new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}</span>
        </div>
      </div>
      <div className="bg-slate-700/50 rounded-lg p-3 text-center">
        <p className="text-xs text-slate-300">Haz clic en la zona de notificaciones de la barra de tareas para ver su estado y acceder a ajustes rápidos</p>
      </div>
    </div>
  );
}

function SimulatorIconos() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 pb-3 border-b border-slate-700">
        <Monitor size={20} className="text-blue-400" />
        <span className="font-bold text-white text-lg">Accesos Directos del Escritorio</span>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {[
          { icon: Monitor, name: 'Este PC', color: 'blue' },
          { icon: FolderOpen, name: 'Archivos', color: 'amber' },
          { icon: Trash2, name: 'Papelera', color: 'rose' },
        ].map((item) => (
          <div key={item.name} className="bg-slate-800 rounded-xl p-4 border border-slate-700 text-center">
            <item.icon size={32} className={`mx-auto text-${item.color}-400 mb-2`} />
            <p className="text-xs text-slate-300">{item.name}</p>
          </div>
        ))}
      </div>
      <p className="text-xs text-slate-500 text-center">Accesos directos a elementos frecuentes para un acceso rápido</p>
    </div>
  );
}

function SimulatorBotonesVentana() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 pb-3 border-b border-slate-700">
        <Monitor size={20} className="text-slate-400" />
        <span className="font-bold text-white text-lg">Botones de Control de Ventana</span>
      </div>
      <div className="flex justify-center gap-4">
        <div className="w-14 h-14 rounded-xl bg-slate-700 flex items-center justify-center border border-slate-600">
          <span className="text-2xl text-slate-400">─</span>
        </div>
        <div className="w-14 h-14 rounded-xl bg-slate-700 flex items-center justify-center border border-slate-600">
          <span className="text-2xl text-slate-400">□</span>
        </div>
        <div className="w-14 h-14 rounded-xl bg-red-500 flex items-center justify-center border border-red-600">
          <span className="text-2xl text-white">✕</span>
        </div>
      </div>
      <div className="space-y-2.5 text-sm text-slate-300">
        <div className="flex items-center gap-3 justify-center">
          <span className="w-8 h-8 rounded bg-slate-700 flex items-center justify-center text-slate-400 text-lg">─</span>
          <span>Minimizar: Oculta la ventana a la barra de tareas</span>
        </div>
        <div className="flex items-center gap-3 justify-center">
          <span className="w-8 h-8 rounded bg-slate-700 flex items-center justify-center text-slate-400 text-lg">□</span>
          <span>Maximizar: Amplía la ventana a toda la pantalla</span>
        </div>
        <div className="flex items-center gap-3 justify-center">
          <span className="w-8 h-8 rounded bg-red-500 flex items-center justify-center text-white text-lg">✕</span>
          <span>Cerrar: Termina el programa o cierra la ventana</span>
        </div>
      </div>
    </div>
  );
}

function SimulatorDefault({ itemId }) {
  return (
    <div className="text-center py-6">
      <Monitor size={32} className="mx-auto text-slate-500 mb-2" />
      <p className="text-slate-400">Simulador para: {itemId}</p>
    </div>
  );
}