import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Monitor, FolderOpen, Trash2, FileText, Image as ImageIcon, Layers, Cog,
  Terminal, Globe, Wifi, Download, Settings, Search, ChevronRight, Menu, HardDrive
} from 'lucide-react';
import { desktopData } from '../data/desktopData.js';

const colorMap = {
  blue: { bg: 'bg-blue-500', text: 'text-blue-600', border: 'border-blue-200' },
  amber: { bg: 'bg-amber-500', text: 'text-amber-600', border: 'border-amber-200' },
  rose: { bg: 'bg-rose-500', text: 'text-rose-600', border: 'border-rose-200' },
  emerald: { bg: 'bg-emerald-500', text: 'text-emerald-600', border: 'border-emerald-200' },
  purple: { bg: 'bg-purple-500', text: 'text-purple-600', border: 'border-purple-200' },
  violet: { bg: 'bg-violet-500', text: 'text-violet-600', border: 'border-violet-200' },
  slate: { bg: 'bg-slate-500', text: 'text-slate-600', border: 'border-slate-200' },
  cyan: { bg: 'bg-cyan-500', text: 'text-cyan-600', border: 'border-cyan-200' },
};

export default function DesktopTab() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [contextMenu, setContextMenu] = useState(null);
  const [showStartMenu, setShowStartMenu] = useState(false);
  const [showExplorer, setShowExplorer] = useState(false);
  const [showInformeWindow, setShowInformeWindow] = useState(false);
  const [showFotoWindow, setShowFotoWindow] = useState(false);
  const [trashItems, setTrashItems] = useState([]);
  const [activeSimulator, setActiveSimulator] = useState(null);

  const handleClick = useCallback((item) => {
    setSelectedItem(item);
    setContextMenu(null);
    setActiveSimulator(item.id);
  }, []);

  const handleDoubleClick = useCallback((item) => {
    setSelectedItem(item);
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
    setActiveSimulator(null);
    setSelectedItem(null);
  }, []);

  const handleCloseContextMenu = useCallback(() => {
    setContextMenu(null);
  }, []);

  const renderSimulator = (itemId) => {
    switch (itemId) {
      case 'this_pc':
        return <SimulatorPC />;
      case 'files':
        return <SimulatorArchivos onOpenExplorer={() => setShowExplorer(true)} />;
      case 'trash':
        return <SimulatorPapelera items={trashItems} />;
      case 'informe_txt':
        return <SimulatorDocumento tipo="txt" />;
      case 'foto_png':
        return <SimulatorImagen />;
      case 'explorer':
        return <SimulatorExplorador />;
      case 'start_menu':
        return <SimulatorMenuInicio onOpenExplorer={() => setShowExplorer(true)} onClose={() => setShowStartMenu(false)} />;
      case 'taskbar':
        return <SimulatorTaskbar />;
      case 'system_tray':
        return <SimulatorSystemTray />;
      case 'desktop_icons':
        return <SimulatorIconos />;
      case 'window_buttons':
        return <SimulatorBotonesVentana />;
      default:
        return null;
    }
  };

  const renderPanelInferior = () => {
    if (!selectedItem) {
      return (
        <div className="p-4 bg-gradient-to-r from-slate-100 to-slate-50 border-t border-slate-200">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-violet-100">
              <Monitor size={24} className="text-violet-600" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-800">Escritorio Virtual</h3>
              <p className="text-sm text-slate-500">Selecciona un elemento para ver su información</p>
            </div>
          </div>
          <div className="mt-3 flex gap-2 text-xs text-slate-400">
            <span className="px-2 py-1 bg-slate-200 rounded">Click</span>
            <span className="px-2 py-1 bg-slate-200 rounded">Doble click</span>
            <span className="px-2 py-1 bg-slate-200 rounded">Click derecho</span>
          </div>
        </div>
      );
    }

    const colors = colorMap[selectedItem.color] || colorMap.slate;

    return (
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-300 bg-white border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <div className={`px-6 py-4 bg-gradient-to-r from-slate-800 to-slate-700 text-white`}>
          <div className="flex items-center gap-4">
            <div className="p-2.5 bg-white/15 rounded-lg backdrop-blur-sm border border-white/10">
              {selectedItem.icon && <selectedItem.icon size={24} />}
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold">{selectedItem.name}</h3>
              <span className="text-xs text-slate-300 uppercase tracking-wide">{selectedItem.category}</span>
            </div>
            <div className="flex gap-2">
              <span className="px-2.5 py-1 bg-white/10 rounded text-xs border border-white/20">Simple click</span>
              <span className="px-2.5 py-1 bg-white/10 rounded text-xs border border-white/20">Doble click</span>
              <span className="px-2.5 py-1 bg-white/10 rounded text-xs border border-white/20">Click derecho</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400 flex items-center gap-2">
              <FileText size={14} /> Descripción
            </h4>
            <div className="prose prose-sm max-w-none">
              {selectedItem.desc.split('\n\n').map((para, i) => (
                <p key={i} className="text-sm text-slate-600 leading-relaxed">{para}</p>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400 flex items-center gap-2">
              <ChevronRight size={14} /> Detalles
            </h4>
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <ul className="space-y-2">
                {selectedItem.details?.split('\n').map((line, i) => (
                  <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                    <span className="text-slate-400 mt-0.5">→</span>
                    {line.replace(/^[•\-]\s*/, '')}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {activeSimulator && (
          <div className="border-t border-slate-200 bg-gradient-to-b from-slate-50 to-white">
            <div className="px-4 py-2 border-b border-slate-100 flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${colors.bg.replace('bg-', 'bg-')}`}></div>
              <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Simulador activo</span>
            </div>
            <div className="p-4">
              {renderSimulator(activeSimulator)}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="relative overflow-hidden rounded-sm border bg-slate-100 border-slate-200 shadow-[0_22px_60px_rgba(15,23,42,0.12)]">
      <div className="flex items-center gap-4 p-5 sm:p-6 md:p-8 border-b border-slate-200 bg-white">
        <div className="p-3 rounded-sm bg-violet-100">
          <Monitor className="text-violet-600" size={28} />
        </div>
        <div>
          <p className="text-[11px] font-black uppercase tracking-[0.25em] text-violet-700/70">Navegación y organización</p>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">Escritorio Virtual</h2>
        </div>
      </div>

      <div
        className="relative overflow-hidden"
        style={{ height: '480px', background: 'linear-gradient(180deg, #1e3a5f 0%, #2d5a87 40%, #4a90a4 70%, #7ab8c9 100%)' }}
        onClick={handleCloseContextMenu}
      >
        <div className="absolute top-4 left-4 flex flex-col gap-6">
          <DesktopIcon
            item={desktopData.this_pc}
            isSelected={selectedItem?.id === 'this_pc'}
            onClick={() => handleClick(desktopData.this_pc)}
            onDoubleClick={() => handleDoubleClick(desktopData.this_pc)}
            onContextMenu={(e) => handleContextMenu(e, desktopData.this_pc)}
          />
          <DesktopIcon
            item={desktopData.files}
            isSelected={selectedItem?.id === 'files'}
            onClick={() => handleClick(desktopData.files)}
            onDoubleClick={() => handleDoubleClick(desktopData.files)}
            onContextMenu={(e) => handleContextMenu(e, desktopData.files)}
          />
          <DesktopIcon
            item={desktopData.trash}
            isSelected={selectedItem?.id === 'trash'}
            onClick={() => handleClick(desktopData.trash)}
            onDoubleClick={() => handleDoubleClick(desktopData.trash)}
            onContextMenu={(e) => handleContextMenu(e, desktopData.trash)}
            onDrop={(itemId) => handleDragToTrash(itemId)}
          />
        </div>

        <div className="absolute top-4 right-4 flex flex-col gap-4">
          <DesktopIcon
            item={desktopData.informe_txt}
            isSelected={selectedItem?.id === 'informe_txt'}
            onClick={() => handleClick(desktopData.informe_txt)}
            onDoubleClick={() => handleDoubleClick(desktopData.informe_txt)}
            onContextMenu={(e) => handleContextMenu(e, desktopData.informe_txt)}
            draggable
          />
          <DesktopIcon
            item={desktopData.foto_png}
            isSelected={selectedItem?.id === 'foto_png'}
            onClick={() => handleClick(desktopData.foto_png)}
            onDoubleClick={() => handleDoubleClick(desktopData.foto_png)}
            onContextMenu={(e) => handleContextMenu(e, desktopData.foto_png)}
            draggable
          />
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
          {showInformeWindow && (
            <VentanaDocumento
              onClose={() => setShowInformeWindow(false)}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showFotoWindow && (
            <VentanaImagen
              onClose={() => setShowFotoWindow(false)}
            />
          )}
        </AnimatePresence>

        <div className="absolute bottom-0 left-0 right-0 h-14 bg-white/95 backdrop-blur border-t border-slate-300 flex items-center px-3">
          <button
            onClick={() => setShowStartMenu(!showStartMenu)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-slate-200 transition-colors"
          >
            <Layers size={20} className="text-violet-600" />
            <span className="font-semibold text-slate-700">Inicio</span>
          </button>
          <div className="w-px h-8 bg-slate-300 mx-2"></div>
          <button
            onClick={() => setShowExplorer(true)}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-100 text-slate-700"
          >
            <FolderOpen size={18} className="text-amber-500" />
            <span className="text-sm">Explorador</span>
          </button>
          <div className="flex-1"></div>
          <div className="flex items-center gap-3">
            <Wifi size={16} className="text-slate-500" />
            <span className="text-xs text-slate-600">100%</span>
            <span className="text-xs text-slate-500">🔊 🔔</span>
            <div className="text-xs text-slate-600 text-right">
              <div>{new Date().toLocaleDateString('es-ES')}</div>
              <div>{new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}</div>
            </div>
          </div>
        </div>
      </div>

      {renderPanelInferior()}

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

      <div className="mx-4 mb-4 rounded-sm border border-amber-500/30 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 p-4">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/20 shrink-0">
            <span className="text-xl">☕</span>
          </div>
          <div className="text-center sm:text-left flex-1">
            <p className="text-[9px] font-bold uppercase tracking-widest text-amber-400">Apoya Este Proyecto</p>
            <p className="text-slate-800 font-semibold text-sm">Si esto te está sirviendo, invítame a un café</p>
          </div>
          <a
            href="https://buymeacoffee.com/digitalsynapse"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-4 py-2 rounded-sm bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-bold text-xs uppercase tracking-wider transition-all hover:-translate-y-0.5 shadow-lg shadow-amber-500/20"
          >
            Invítame a un café
          </a>
        </div>
      </div>
    </div>
  );
}

function DesktopIcon({ item, isSelected, onClick, onDoubleClick, onContextMenu, draggable, onDrop }) {
  const [isDragOver, setIsDragOver] = useState(false);

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      draggable={draggable}
      onDragStart={(e) => {
        if (draggable) {
          e.dataTransfer.setData('text/plain', item.id);
        }
      }}
      onDragOver={(e) => {
        if (onDrop) {
          e.preventDefault();
          setIsDragOver(true);
        }
      }}
      onDragLeave={() => setIsDragOver(false)}
      onDrop={(e) => {
        if (onDrop) {
          e.preventDefault();
          const draggedId = e.dataTransfer.getData('text/plain');
          onDrop(draggedId);
          setIsDragOver(false);
        }
      }}
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      onContextMenu={onContextMenu}
      className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-all cursor-pointer group ${
        isSelected ? 'bg-white/20 ring-2 ring-white/50' : 'hover:bg-white/10'
      } ${isDragOver ? 'bg-rose-400/50 scale-110' : ''}`}
    >
      <div className={`w-14 h-14 rounded-lg flex items-center justify-center shadow-lg transition-all ${
        isSelected ? 'bg-white/30 ring-2 ring-white' : 'bg-white/20 group-hover:bg-white/25'
      }`}>
        <item.icon size={32} className="text-white drop-shadow-lg" />
      </div>
      <span className="text-[11px] font-medium text-white text-center drop-shadow-md max-w-[60px] truncate">
        {item.name}
      </span>
    </motion.button>
  );
}

function ContextMenu({ x, y, item, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="fixed z-[100] bg-white rounded-lg shadow-xl border border-slate-200 py-1 min-w-[180px]"
      style={{ left: Math.min(x, window.innerWidth - 200), top: Math.min(y, window.innerHeight - 200) }}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="px-3 py-2 border-b border-slate-100">
        <p className="text-xs font-semibold text-slate-800">{item.name}</p>
        <p className="text-[10px] text-slate-400">{item.category}</p>
      </div>
      <button className="w-full px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-100 flex items-center gap-2">
        <Settings size={14} /> Propiedades
      </button>
      <button className="w-full px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-100 flex items-center gap-2">
        <FileText size={14} /> Abrir
      </button>
      <button className="w-full px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-100 flex items-center gap-2">
        <Globe size={14} /> Enviar a...
      </button>
    </motion.div>
  );
}

function StartMenuSimulator({ onClose, onOpenExplorer }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      className="absolute bottom-16 left-4 w-[280px] bg-white rounded-xl border border-slate-200 shadow-2xl z-50 overflow-hidden"
    >
      <div className="bg-gradient-to-r from-violet-600 to-purple-600 px-4 py-6 text-white">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
            <Layers size={24} />
          </div>
          <div>
            <p className="font-bold">Windows 12</p>
            <p className="text-xs text-white/70">Escritorio virtual</p>
          </div>
        </div>
      </div>
      <div className="p-2">
        <div className="relative mb-3">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Buscar..."
            className="w-full pl-10 pr-4 py-2 bg-slate-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>
        <div className="grid grid-cols-3 gap-1">
          {[
            { icon: FolderOpen, name: 'Archivos', color: 'text-amber-500', action: onOpenExplorer },
            { icon: Globe, name: 'Navegador', color: 'text-blue-500', action: onClose },
            { icon: Terminal, name: 'Terminal', color: 'text-emerald-500', action: onClose },
            { icon: Cog, name: 'Ajustes', color: 'text-slate-500', action: onClose },
            { icon: FileText, name: 'Documentos', color: 'text-blue-500', action: onClose },
            { icon: Settings, name: 'Sistema', color: 'text-slate-600', action: onClose },
          ].map((app, i) => (
            <button
              key={i}
              onClick={app.action}
              className="flex flex-col items-center gap-1 p-3 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <app.icon size={24} className={app.color} />
              <span className="text-[10px] text-slate-600">{app.name}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="border-t border-slate-100 p-3 flex justify-between items-center">
        <button className="text-xs text-slate-500 hover:text-slate-700">Apagar</button>
        <button onClick={onClose} className="text-xs text-slate-500 hover:text-slate-700">Cerrar</button>
      </div>
    </motion.div>
  );
}

function ExploradorSimulator({ onClose, onSelect }) {
  const carpetas = [
    { id: 'documentos', name: 'Documentos', icon: FileText, count: 12, color: 'blue' },
    { id: 'proyectos', name: 'Proyectos', icon: FolderOpen, count: 5, color: 'emerald' },
    { id: 'descargas', name: 'Descargas', icon: Download, count: 8, color: 'purple' },
    { id: 'imagenes', name: 'Imágenes', icon: ImageIcon, count: 24, color: 'rose' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="absolute top-16 left-1/2 -translate-x-1/2 w-[400px] bg-white rounded-xl border border-slate-200 shadow-2xl z-50 overflow-hidden"
    >
      <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FolderOpen size={18} className="text-amber-500" />
          <span className="font-semibold text-slate-700">Explorador de archivos</span>
        </div>
        <button onClick={onClose} className="w-7 h-7 rounded hover:bg-slate-200 flex items-center justify-center text-slate-500">✕</button>
      </div>
      <div className="p-4 grid grid-cols-2 gap-3">
        {carpetas.map((carpeta) => (
          <button
            key={carpeta.id}
            onClick={() => onSelect({ ...desktopData.files, name: carpeta.name })}
            className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all text-left"
          >
            <div className={`w-10 h-10 rounded-lg bg-${carpeta.color}-100 flex items-center justify-center`}>
              <carpeta.icon size={20} className={`text-${carpeta.color}-600`} />
            </div>
            <div>
              <p className="font-medium text-slate-700 text-sm">{carpeta.name}</p>
              <p className="text-xs text-slate-400">{carpeta.count} elementos</p>
            </div>
          </button>
        ))}
      </div>
    </motion.div>
  );
}

function VentanaDocumento({ onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
      className="absolute top-24 left-1/2 -translate-x-1/2 w-[420px] bg-white rounded-xl border border-slate-200 shadow-2xl z-50 overflow-hidden"
    >
      <div className="bg-slate-100 px-4 py-3 border-b border-slate-200 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FileText size={18} className="text-emerald-500" />
          <span className="font-semibold text-slate-700">Informe.txt</span>
        </div>
        <button onClick={onClose} className="w-7 h-7 rounded hover:bg-red-100 flex items-center justify-center text-red-500">✕</button>
      </div>
      <div className="p-5">
        <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
          <div className="flex gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
            <div className="w-3 h-3 rounded-full bg-amber-400"></div>
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
          </div>
          <h3 className="font-bold text-slate-800 text-lg mb-3">Resumen Ejecutivo</h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-3">
            Este documento presenta un análisis detallado sobre la transformación digital en el ámbito educativo.
            Los resultados demuestran una mejora significativa en el rendimiento de los estudiantes.
          </p>
          <div className="border-t border-slate-200 pt-3 mt-3">
            <p className="text-sm font-semibold text-slate-700 mb-2">Conclusiones:</p>
            <ul className="text-sm text-slate-600 space-y-1">
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
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="absolute top-20 left-1/2 -translate-x-1/2 w-[380px] bg-white rounded-xl border border-slate-200 shadow-2xl z-50 overflow-hidden"
    >
      <div className="bg-slate-100 px-4 py-3 border-b border-slate-200 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ImageIcon size={18} className="text-purple-500" />
          <span className="font-semibold text-slate-700">Foto.png</span>
        </div>
        <button onClick={onClose} className="w-7 h-7 rounded hover:bg-red-100 flex items-center justify-center text-red-500">✕</button>
      </div>
      <div className="p-5">
        <div className="bg-gradient-to-br from-purple-100 via-pink-50 to-amber-50 rounded-lg p-8 border border-slate-200 flex items-center justify-center">
          <div className="text-center">
            <div className="w-40 h-40 mx-auto rounded-xl bg-gradient-to-br from-violet-400 via-purple-400 to-pink-400 flex items-center justify-center shadow-xl">
              <span className="text-7xl">🏔️</span>
            </div>
            <p className="mt-4 font-medium text-slate-700">paisaje.png</p>
            <p className="text-sm text-slate-400">2560 × 1440 px</p>
          </div>
        </div>
        <div className="mt-4 flex gap-2 justify-center">
          <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">PNG</span>
          <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs">2.4 MB</span>
          <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs">Transparente</span>
        </div>
      </div>
    </motion.div>
  );
}

function SimulatorPC() {
  return (
    <div className="bg-slate-900 rounded-xl p-4 border border-slate-700">
      <div className="flex items-center gap-3 mb-4">
        <Monitor size={20} className="text-blue-400" />
        <span className="font-semibold text-white">Este PC</span>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {[
          { letter: 'C:', name: 'Disco local', size: '256 GB', color: 'blue' },
          { letter: 'D:', name: 'Datos', size: '512 GB', color: 'emerald' },
          { letter: 'E:', name: 'USB', size: '32 GB', color: 'amber' },
        ].map((drive) => (
          <div key={drive.letter} className="bg-slate-800 rounded-lg p-3 border border-slate-700">
            <div className={`w-8 h-8 rounded bg-${drive.color}-500/20 flex items-center justify-center mb-2`}>
              <HardDrive size={16} className={`text-${drive.color}-400`} />
            </div>
            <p className="text-white font-medium text-sm">{drive.letter} {drive.name}</p>
            <p className="text-slate-400 text-xs">{drive.size}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SimulatorArchivos({ onOpenExplorer }) {
  return (
    <div className="bg-slate-900 rounded-xl p-4 border border-slate-700">
      <div className="flex items-center gap-3 mb-4">
        <FolderOpen size={20} className="text-amber-400" />
        <span className="font-semibold text-white">Archivos</span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {[
          { name: 'Documentos', icon: FileText, count: 12 },
          { name: 'Proyectos', icon: FolderOpen, count: 5 },
          { name: 'Descargas', icon: Download, count: 8 },
          { name: 'Imágenes', icon: ImageIcon, count: 24 },
        ].map((folder) => (
          <button
            key={folder.name}
            onClick={onOpenExplorer}
            className="flex items-center gap-2 bg-slate-800 rounded-lg p-2 border border-slate-700 hover:border-slate-600 transition-colors"
          >
            <folder.icon size={16} className="text-amber-400" />
            <div className="text-left">
              <p className="text-white text-xs font-medium">{folder.name}</p>
              <p className="text-slate-400 text-[10px]">{folder.count} archivos</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function SimulatorPapelera({ items }) {
  return (
    <div className="bg-slate-900 rounded-xl p-4 border border-slate-700">
      <div className="flex items-center gap-3 mb-4">
        <Trash2 size={20} className="text-rose-400" />
        <span className="font-semibold text-white">Papelera de reciclaje</span>
      </div>
      {items.length === 0 ? (
        <div className="text-center py-6 text-slate-500">
          <Trash2 size={32} className="mx-auto mb-2 opacity-50" />
          <p className="text-sm">La papelera está vacía</p>
        </div>
      ) : (
        <div className="space-y-2">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2 bg-slate-800 rounded-lg p-2 border border-slate-700">
              <FileText size={14} className="text-slate-400" />
              <span className="text-white text-xs">{item.name}</span>
            </div>
          ))}
        </div>
      )}
      <p className="text-xs text-slate-500 mt-3">Los archivos se eliminarán permanentemente al vaciar la papelera</p>
    </div>
  );
}

function SimulatorDocumento({ tipo }) {
  return (
    <div className="bg-slate-900 rounded-xl p-4 border border-slate-700">
      <div className="flex items-center gap-3 mb-4">
        <FileText size={20} className="text-emerald-400" />
        <span className="font-semibold text-white">Documento de texto</span>
      </div>
      <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
        <div className="h-3 w-32 bg-slate-700 rounded mb-3"></div>
        <div className="space-y-2">
          <div className="h-2 w-full bg-slate-700 rounded"></div>
          <div className="h-2 w-4/5 bg-slate-700 rounded"></div>
          <div className="h-2 w-3/4 bg-slate-700 rounded"></div>
        </div>
        <div className="mt-4 pt-4 border-t border-slate-700">
          <p className="text-xs text-slate-400">Bloc de notas - Windows</p>
        </div>
      </div>
    </div>
  );
}

function SimulatorImagen() {
  return (
    <div className="bg-slate-900 rounded-xl p-4 border border-slate-700">
      <div className="flex items-center gap-3 mb-4">
        <ImageIcon size={20} className="text-purple-400" />
        <span className="font-semibold text-white">Visor de imágenes</span>
      </div>
      <div className="bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-amber-500/20 rounded-lg p-6 flex items-center justify-center">
        <div className="w-24 h-24 rounded-lg bg-gradient-to-br from-violet-400 to-pink-400 flex items-center justify-center">
          <span className="text-4xl">🖼️</span>
        </div>
      </div>
      <div className="mt-3 flex gap-2 justify-center">
        <span className="px-2 py-1 bg-slate-700 rounded text-xs text-slate-300">PNG</span>
        <span className="px-2 py-1 bg-slate-700 rounded text-xs text-slate-300">2560×1440</span>
      </div>
    </div>
  );
}

function SimulatorExplorador() {
  return (
    <div className="bg-slate-900 rounded-xl p-4 border border-slate-700">
      <div className="flex items-center gap-3 mb-4">
        <FolderOpen size={20} className="text-amber-400" />
        <span className="font-semibold text-white">Explorador de Windows</span>
      </div>
      <div className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
        <div className="flex border-b border-slate-700">
          <div className="px-3 py-2 text-xs text-slate-400 border-r border-slate-700">◀ ▶</div>
          <div className="flex-1 px-3 py-2 text-xs text-slate-300">Este equipo {'>'} Documentos</div>
        </div>
        <div className="grid grid-cols-4 gap-2 p-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-slate-700/50 rounded p-2 text-center">
              <FolderOpen size={20} className="mx-auto text-amber-400 mb-1" />
              <p className="text-[10px] text-slate-300">Carpeta {i}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SimulatorMenuInicio({ onClose, onOpenExplorer }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-2xl overflow-hidden max-w-xs">
      <div className="bg-gradient-to-r from-violet-600 to-purple-600 px-4 py-4 text-white">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
            <Layers size={24} />
          </div>
          <div>
            <p className="font-bold">Windows 12</p>
            <p className="text-xs text-white/70">Escritorio virtual</p>
          </div>
        </div>
      </div>
      <div className="p-3">
        <div className="relative mb-3">
          <Search size={14} className="absolute left-2 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Buscar..."
            className="w-full pl-8 pr-3 py-1.5 bg-slate-100 rounded text-sm"
          />
        </div>
        <div className="grid grid-cols-3 gap-1">
          {[
            { icon: FolderOpen, name: 'Archivos', color: 'text-amber-500' },
            { icon: Globe, name: 'Navegador', color: 'text-blue-500' },
            { icon: Terminal, name: 'Terminal', color: 'text-emerald-500' },
          ].map((app, i) => (
            <button key={i} className="flex flex-col items-center gap-1 p-2 rounded hover:bg-slate-100">
              <app.icon size={20} className={app.color} />
              <span className="text-[9px] text-slate-600">{app.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function SimulatorTaskbar() {
  return (
    <div className="bg-slate-900 rounded-xl p-4 border border-slate-700">
      <div className="flex items-center gap-3 mb-4">
        <Monitor size={20} className="text-slate-400" />
        <span className="font-semibold text-white">Barra de tareas</span>
      </div>
      <div className="bg-slate-800 rounded-lg p-2 flex items-center gap-2 border border-slate-700">
        <div className="w-8 h-8 rounded bg-violet-600 flex items-center justify-center">
          <Layers size={16} className="text-white" />
        </div>
        <div className="w-8 h-8 rounded bg-amber-500 flex items-center justify-center">
          <FolderOpen size={16} className="text-white" />
        </div>
        <div className="w-8 h-8 rounded bg-blue-500 flex items-center justify-center">
          <Globe size={16} className="text-white" />
        </div>
        <div className="flex-1"></div>
        <div className="flex items-center gap-2">
          <Wifi size={14} className="text-slate-400" />
          <span className="text-xs text-slate-300">100%</span>
        </div>
      </div>
    </div>
  );
}

function SimulatorSystemTray() {
  return (
    <div className="bg-slate-900 rounded-xl p-4 border border-slate-700">
      <div className="flex items-center gap-3 mb-4">
        <Wifi size={20} className="text-cyan-400" />
        <span className="font-semibold text-white">Zona de notificaciones</span>
      </div>
      <div className="bg-slate-800 rounded-lg p-3 border border-slate-700 space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Wifi size={14} className="text-emerald-400" />
            <span className="text-xs text-slate-300">WiFi conectado</span>
          </div>
          <span className="text-xs text-emerald-400">Excelente</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-slate-400">Volumen</span>
          <span className="text-xs text-slate-300">🔊 80%</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-slate-400">Batería</span>
          <span className="text-xs text-emerald-400">100% ⚡</span>
        </div>
      </div>
    </div>
  );
}

function SimulatorIconos() {
  return (
    <div className="bg-slate-900 rounded-xl p-4 border border-slate-700">
      <div className="flex items-center gap-3 mb-4">
        <Monitor size={20} className="text-blue-400" />
        <span className="font-semibold text-white">Iconos del escritorio</span>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {[
          { icon: Monitor, name: 'Este PC', color: 'blue' },
          { icon: FolderOpen, name: 'Archivos', color: 'amber' },
          { icon: Trash2, name: 'Papelera', color: 'rose' },
        ].map((item) => (
          <div key={item.name} className="bg-slate-800 rounded-lg p-3 border border-slate-700 text-center">
            <item.icon size={24} className={`mx-auto text-${item.color}-400 mb-1`} />
            <p className="text-[10px] text-slate-300">{item.name}</p>
          </div>
        ))}
      </div>
      <p className="text-xs text-slate-500 mt-3">Organiza tus iconos arrastrándolos a la posición deseada</p>
    </div>
  );
}

function SimulatorBotonesVentana() {
  return (
    <div className="bg-slate-900 rounded-xl p-4 border border-slate-700">
      <div className="flex items-center gap-3 mb-4">
        <Monitor size={20} className="text-slate-400" />
        <span className="font-semibold text-white">Botones de ventana</span>
      </div>
      <div className="flex justify-center gap-3">
        <div className="w-10 h-10 rounded bg-slate-700 flex items-center justify-center border border-slate-600">
          <span className="text-slate-400 text-lg">─</span>
        </div>
        <div className="w-10 h-10 rounded bg-slate-700 flex items-center justify-center border border-slate-600">
          <span className="text-slate-400 text-lg">□</span>
        </div>
        <div className="w-10 h-10 rounded bg-red-500 flex items-center justify-center border border-red-600">
          <span className="text-white text-lg">✕</span>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span className="w-6 h-6 rounded bg-slate-700 flex items-center justify-center">─</span>
          <span>Minimizar</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span className="w-6 h-6 rounded bg-slate-700 flex items-center justify-center">□</span>
          <span>Maximizar</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span className="w-6 h-6 rounded bg-red-500 flex items-center justify-center text-white">✕</span>
          <span>Cerrar</span>
        </div>
      </div>
    </div>
  );
}
