import React, { useState } from 'react';
import {
  Monitor, FolderOpen, Trash2, FileText, ImageIcon, Layers, Cog,
  Terminal, Globe, Wifi, Download
} from 'lucide-react';
import { desktopData } from '../App.jsx';

export default function DesktopTab() {
  const [showExplorer, setShowExplorer] = useState(false);
  const [showStartMenu, setShowStartMenu] = useState(false);
  const [selectedDesktopItem, setSelectedDesktopItem] = useState(null);
  const [draggingItem, setDraggingItem] = useState(null);
  const [trashHover, setTrashHover] = useState(false);
  const [explorerPos, setExplorerPos] = useState({ x: 150, y: 80 });
  const [isDraggingExplorer, setIsDraggingExplorer] = useState(false);
  const [dragOffsetExplorer, setDragOffsetExplorer] = useState({ x: 0, y: 0 });
  const [startMenuPos, setStartMenuPos] = useState({ x: 20, y: -280 });
  const [isDraggingStartMenu, setIsDraggingStartMenu] = useState(false);
  const [dragOffsetStartMenu, setDragOffsetStartMenu] = useState({ x: 0, y: 0 });
  const [showInformeWindow, setShowInformeWindow] = useState(false);
  const [showFotoWindow, setShowFotoWindow] = useState(false);
  const [informePos, setInformePos] = useState({ x: 200, y: 120 });
  const [isDraggingInforme, setIsDraggingInforme] = useState(false);
  const [dragOffsetInforme, setDragOffsetInforme] = useState({ x: 0, y: 0 });
  const [fotoPos, setFotoPos] = useState({ x: 280, y: 160 });
  const [isDraggingFoto, setIsDraggingFoto] = useState(false);
  const [dragOffsetFoto, setDragOffsetFoto] = useState({ x: 0, y: 0 });

  const handleExplorerDragStart = (e) => {
    setIsDraggingExplorer(true);
    setDragOffsetExplorer({ x: e.clientX - explorerPos.x, y: e.clientY - explorerPos.y });
  };

  const handleExplorerDragMove = (e) => {
    if (!isDraggingExplorer) return;
    setExplorerPos({ x: e.clientX - dragOffsetExplorer.x, y: e.clientY - dragOffsetExplorer.y });
  };

  const handleExplorerDragEnd = () => setIsDraggingExplorer(false);

  const handleStartMenuDragStart = (e) => {
    setIsDraggingStartMenu(true);
    setDragOffsetStartMenu({ x: e.clientX - startMenuPos.x, y: e.clientY - startMenuPos.y });
  };

  const handleStartMenuDragMove = (e) => {
    if (!isDraggingStartMenu) return;
    setStartMenuPos({ x: e.clientX - dragOffsetStartMenu.x, y: e.clientY - dragOffsetStartMenu.y });
  };

  const handleStartMenuDragEnd = () => setIsDraggingStartMenu(false);

  const handleInformeDragStart = (e) => {
    setIsDraggingInforme(true);
    setDragOffsetInforme({ x: e.clientX - informePos.x, y: e.clientY - informePos.y });
  };

  const handleInformeDragMove = (e) => {
    if (!isDraggingInforme) return;
    setInformePos({ x: e.clientX - dragOffsetInforme.x, y: e.clientY - dragOffsetInforme.y });
  };

  const handleInformeDragEnd = () => setIsDraggingInforme(false);

  const handleFotoDragStart = (e) => {
    setIsDraggingFoto(true);
    setDragOffsetFoto({ x: e.clientX - fotoPos.x, y: e.clientY - fotoPos.y });
  };

  const handleFotoDragMove = (e) => {
    if (!isDraggingFoto) return;
    setFotoPos({ x: e.clientX - dragOffsetFoto.x, y: e.clientY - dragOffsetFoto.y });
  };

  const handleFotoDragEnd = () => setIsDraggingFoto(false);

  const handleTrashDrop = () => {
    if (draggingItem === 'informe_txt') {
      setShowInformeWindow(false);
      setSelectedDesktopItem({ ...desktopData.trash, name: 'Informe.txt eliminado', desc: 'El archivo Informe.txt ha sido movido a la papelera. Puedes recuperarlo o eliminarlo permanentemente.' });
    } else if (draggingItem === 'foto_png') {
      setShowFotoWindow(false);
      setSelectedDesktopItem({ ...desktopData.trash, name: 'Foto.png eliminado', desc: 'La imagen Foto.png ha sido movida a la papelera. Puedes recuperarla o eliminarla permanentemente.' });
    }
    setDraggingItem(null);
    setTrashHover(false);
  };

  return (
    <div className="relative overflow-hidden rounded-sm border animate-in fade-in duration-500 bg-slate-100 border-slate-200 shadow-[0_22px_60px_rgba(15,23,42,0.12)]">
      {/* Header */}
      <div className="flex items-center gap-4 p-5 sm:p-6 md:p-8 border-b border-slate-200">
        <div className="p-3 rounded-sm bg-violet-100">
          <Monitor className="text-violet-600" size={28} />
        </div>
        <div>
          <p className="text-[11px] font-black uppercase tracking-[0.25em] text-violet-700/70">Navegación y organización</p>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">Escritorio Virtual</h2>
        </div>
      </div>

      {/* Desktop Simulator Container */}
      <div
        className="relative overflow-hidden"
        style={{ height: '520px', background: 'linear-gradient(180deg, #1e3a5f 0%, #2d5a87 40%, #4a90a4 70%, #7ab8c9 100%)' }}
        onMouseMove={(e) => { handleExplorerDragMove(e); handleStartMenuDragMove(e); handleInformeDragMove(e); handleFotoDragMove(e); }}
        onMouseUp={() => { handleExplorerDragEnd(); handleStartMenuDragEnd(); handleInformeDragEnd(); handleFotoDragEnd(); }}
        onMouseLeave={() => { handleExplorerDragEnd(); handleStartMenuDragEnd(); handleInformeDragEnd(); handleFotoDragEnd(); }}
      >
        {/* Desktop Icons - Left Side */}
        <div className="absolute top-4 left-4 flex flex-col gap-6">
          <button onClick={() => setSelectedDesktopItem(desktopData.this_pc)} className={`flex flex-col items-center gap-1 cursor-pointer group transition-all ${selectedDesktopItem?.id === 'this_pc' ? 'scale-110' : 'hover:scale-105'}`}>
            <div className={`w-14 h-14 rounded-lg flex items-center justify-center shadow-md transition-all ${selectedDesktopItem?.id === 'this_pc' ? 'bg-blue-300 ring-4 ring-blue-400' : 'bg-blue-200 group-hover:bg-blue-300'}`}>
              <Monitor size={32} className={selectedDesktopItem?.id === 'this_pc' ? 'text-blue-700' : 'text-blue-600'} />
            </div>
            <span className="text-[11px] font-medium text-slate-700 text-center">Este PC</span>
          </button>
          <button onClick={() => setSelectedDesktopItem(desktopData.files)} className={`flex flex-col items-center gap-1 cursor-pointer group transition-all ${selectedDesktopItem?.id === 'files' ? 'scale-110' : 'hover:scale-105'}`}>
            <div className={`w-14 h-14 rounded-lg flex items-center justify-center shadow-md transition-all ${selectedDesktopItem?.id === 'files' ? 'bg-amber-300 ring-4 ring-amber-400' : 'bg-amber-200 group-hover:bg-amber-300'}`}>
              <FolderOpen size={32} className={selectedDesktopItem?.id === 'files' ? 'text-amber-700' : 'text-amber-600'} />
            </div>
            <span className="text-[11px] font-medium text-slate-700 text-center">Archivos</span>
          </button>
          <button onClick={() => setSelectedDesktopItem(desktopData.trash)} className={`flex flex-col items-center gap-1 cursor-pointer group transition-all ${selectedDesktopItem?.id === 'trash' ? 'scale-110' : 'hover:scale-105'}`}>
            <div className={`w-14 h-14 rounded-lg flex items-center justify-center shadow-md transition-all ${selectedDesktopItem?.id === 'trash' ? 'bg-rose-300 ring-4 ring-rose-400' : 'bg-rose-200 group-hover:bg-rose-300'}`}>
              <Trash2 size={32} className={selectedDesktopItem?.id === 'trash' ? 'text-rose-700' : 'text-rose-600'} />
            </div>
            <span className="text-[11px] font-medium text-slate-700 text-center">Papelera</span>
          </button>
        </div>

        {/* Desktop Icons - Right Side */}
        <div className="absolute top-4 right-4 flex flex-col gap-4">
          <button
            draggable
            onDragStart={() => setDraggingItem('informe_txt')}
            onClick={() => { setSelectedDesktopItem(desktopData.informe_txt); setShowInformeWindow(true); }}
            className={`flex flex-col items-center gap-1 cursor-pointer group transition-all ${selectedDesktopItem?.id === 'informe_txt' ? 'scale-110' : 'hover:scale-105'}`}
          >
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center shadow transition-all ${draggingItem === 'informe_txt' ? 'opacity-50 scale-90' : ''} ${selectedDesktopItem?.id === 'informe_txt' ? 'bg-emerald-300 ring-2 ring-emerald-400' : 'bg-emerald-200 group-hover:bg-emerald-300'}`}>
              <FileText size={28} className={selectedDesktopItem?.id === 'informe_txt' ? 'text-emerald-700' : 'text-emerald-600'} />
            </div>
            <span className="text-[10px] font-medium text-slate-700">Informe.txt</span>
          </button>
          <button
            draggable
            onDragStart={() => setDraggingItem('foto_png')}
            onClick={() => { setSelectedDesktopItem(desktopData.foto_png); setShowFotoWindow(true); }}
            className={`flex flex-col items-center gap-1 cursor-pointer group transition-all ${selectedDesktopItem?.id === 'foto_png' ? 'scale-110' : 'hover:scale-105'}`}
          >
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center shadow transition-all ${draggingItem === 'foto_png' ? 'opacity-50 scale-90' : ''} ${selectedDesktopItem?.id === 'foto_png' ? 'bg-purple-300 ring-2 ring-purple-400' : 'bg-purple-200 group-hover:bg-purple-300'}`}>
              <ImageIcon size={28} className={selectedDesktopItem?.id === 'foto_png' ? 'text-purple-700' : 'text-purple-600'} />
            </div>
            <span className="text-[10px] font-medium text-slate-700">Foto.png</span>
          </button>
        </div>

        {/* Center Window - Solo visible si showExplorer es true */}
        {showExplorer && (
        <div
          className="absolute w-[320px] rounded-lg bg-white border border-slate-200 shadow-2xl z-50"
          style={{ left: explorerPos.x, top: explorerPos.y }}
        >
          <div
            className="flex items-center justify-between px-4 py-3 border-b border-slate-200 bg-slate-50 rounded-t-lg cursor-move"
            onMouseDown={handleExplorerDragStart}
          >
            <div className="flex items-center gap-2">
              <FolderOpen size={16} className="text-amber-500" />
              <span className="text-sm font-bold text-slate-700">Explorador de archivos</span>
            </div>
            <div className="flex items-center gap-1">
              <button className="w-7 h-7 rounded hover:bg-slate-200 flex items-center justify-center text-slate-500">─</button>
              <button className="w-7 h-7 rounded hover:bg-slate-200 flex items-center justify-center text-slate-500">□</button>
              <button onClick={() => setShowExplorer(false)} className="w-7 h-7 rounded hover:bg-red-100 flex items-center justify-center text-red-500">✕</button>
            </div>
          </div>
          <div className="p-4">
            <div
              onClick={() => setSelectedDesktopItem({ ...desktopData.files, name: 'Documentos', desc: 'Carpeta con tus documentos personales guardados en el sistema.' })}
              className="flex items-center gap-4 mb-4 cursor-pointer hover:bg-slate-50 p-2 rounded-lg transition-colors"
            >
              <div className="w-10 h-10 rounded bg-blue-100 flex items-center justify-center text-blue-600">
                <FileText size={20} />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-700">Documentos</p>
                <p className="text-xs text-slate-400">12 archivos</p>
              </div>
            </div>
            <div
              onClick={() => setSelectedDesktopItem({ ...desktopData.files, name: 'Proyectos', desc: 'Carpeta que contiene tus proyectos de trabajo o estudio.' })}
              className="flex items-center gap-4 mb-4 cursor-pointer hover:bg-slate-50 p-2 rounded-lg transition-colors"
            >
              <div className="w-10 h-10 rounded bg-emerald-100 flex items-center justify-center text-emerald-600">
                <FolderOpen size={20} />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-700">Proyectos</p>
                <p className="text-xs text-slate-400">5 carpetas</p>
              </div>
            </div>
            <div
              onClick={() => setSelectedDesktopItem({ ...desktopData.files, name: 'Descargas', desc: 'Carpeta con archivos descargados de internet.' })}
              className="flex items-center gap-4 cursor-pointer hover:bg-slate-50 p-2 rounded-lg transition-colors"
            >
              <div className="w-10 h-10 rounded bg-purple-100 flex items-center justify-center text-purple-600">
                <Download size={20} />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-700">Descargas</p>
                <p className="text-xs text-slate-400">3 archivos recientes</p>
              </div>
            </div>
          </div>
        </div>
        )}

        {/* Start Menu - Solo visible si showStartMenu es true */}
        {showStartMenu && (
        <div
          className="absolute w-[260px] bg-white rounded-lg border border-slate-200 shadow-2xl p-3 z-50 text-left"
          style={{ left: startMenuPos.x, top: startMenuPos.y }}
        >
          <div
            className="flex items-center gap-3 px-3 py-2 mb-2 border-b border-slate-100 cursor-move"
            onMouseDown={handleStartMenuDragStart}
          >
            <div className="w-8 h-8 rounded bg-violet-600 flex items-center justify-center text-white">
              <Layers size={18} />
            </div>
            <span className="font-bold text-slate-800">Windows 12</span>
          </div>
          <div className="grid grid-cols-2 gap-1">
            <button onClick={() => { setShowExplorer(true); setShowStartMenu(false); }} className="flex items-center gap-2 px-3 py-2 rounded text-sm text-slate-700 hover:bg-slate-100">
              <FolderOpen size={16} className="text-amber-500" /> Archivos
            </button>
            <button onClick={() => setSelectedDesktopItem({ id: 'settings', name: 'Ajustes', desc: 'Panel de configuración del sistema operativo.', icon: Cog, color: 'slate' })} className="flex items-center gap-2 px-3 py-2 rounded text-sm text-slate-700 hover:bg-slate-100">
              <Cog size={16} className="text-slate-500" /> Ajustes
            </button>
            <button onClick={() => setSelectedDesktopItem({ id: 'terminal', name: 'Terminal', desc: 'Interfaz de línea de comandos para ejecutar órdenes directas al sistema.', icon: Terminal, color: 'emerald' })} className="flex items-center gap-2 px-3 py-2 rounded text-sm text-slate-700 hover:bg-slate-100">
              <Terminal size={16} className="text-emerald-500" /> Terminal
            </button>
            <button onClick={() => setSelectedDesktopItem({ id: 'browser', name: 'Navegador', desc: 'Aplicación para acceder a páginas web e internet.', icon: Globe, color: 'blue' })} className="flex items-center gap-2 px-3 py-2 rounded text-sm text-slate-700 hover:bg-slate-100">
              <Globe size={16} className="text-blue-500" /> Navegador
            </button>
          </div>
        </div>
        )}

        {/* Trash Icon - Bottom Right */}
        <div
          onDragOver={(e) => { e.preventDefault(); setTrashHover(true); }}
          onDragLeave={() => setTrashHover(false)}
          onDrop={handleTrashDrop}
          className={`absolute bottom-4 right-4 flex flex-col items-center gap-1 cursor-pointer group transition-all duration-200 ${trashHover ? 'scale-125' : ''}`}
        >
          <button className="flex flex-col items-center gap-1 cursor-pointer group">
            <div className={`w-14 h-14 rounded-lg flex items-center justify-center shadow-md transition-all duration-200 ${trashHover ? 'bg-rose-400 ring-4 ring-rose-500 animate-bounce' : 'bg-rose-200 group-hover:bg-rose-300'} ${selectedDesktopItem?.id === 'trash' ? 'bg-rose-300 ring-4 ring-rose-400' : ''}`}>
              <Trash2 size={28} className={`transition-all ${trashHover ? 'text-white' : selectedDesktopItem?.id === 'trash' ? 'text-rose-700' : 'text-rose-600'}`} />
            </div>
            <span className="text-[10px] font-medium text-slate-600">Papelera</span>
          </button>
        </div>

        {/* TASKBAR */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-white/95 backdrop-blur border-t border-slate-300 flex items-center px-2">
          <button onClick={() => setShowStartMenu(!showStartMenu)} className="flex items-center gap-1 px-3 py-1.5 rounded hover:bg-slate-200 transition-colors">
            <Layers size={18} className="text-violet-600" />
            <span className="text-sm font-bold text-slate-700">Inicio</span>
          </button>
          <div className="w-px h-6 bg-slate-300 mx-2"></div>
          <button onClick={() => setShowExplorer(!showExplorer)} className="flex items-center gap-2 px-3 py-1.5 rounded bg-slate-100 text-slate-700">
            <FolderOpen size={16} className="text-amber-500" />
            <span className="text-sm">Explorador</span>
          </button>
          <div className="flex-1"></div>
          <button onClick={() => setSelectedDesktopItem(desktopData.system_tray)} className="flex items-center gap-2 px-3 py-1.5 rounded hover:bg-slate-100">
            <Wifi size={14} className="text-slate-600" />
            <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white"></div>
            </div>
            <span className="text-xs text-slate-600">100%</span>
          </button>
          <button onClick={() => setSelectedDesktopItem(desktopData.taskbar)} className="flex items-center gap-2 px-3 py-1.5 rounded hover:bg-slate-100">
            <span className="text-xs text-slate-600">🔊</span>
            <span className="text-xs text-slate-600">🔔</span>
          </button>
          <button onClick={() => setSelectedDesktopItem(desktopData.system_tray)} className="flex flex-col items-center px-3 py-1 rounded hover:bg-slate-100">
            <span className="text-xs font-medium text-slate-700">{new Date().toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit' })}</span>
            <span className="text-xs text-slate-500">{new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}</span>
          </button>
        </div>
      </div>

      {/* Ventana Informe.txt */}
      {showInformeWindow && (
        <div
          className="absolute w-[380px] rounded-lg bg-white border border-slate-200 shadow-2xl z-50"
          style={{ left: informePos.x, top: informePos.y }}
        >
          <div
            className="flex items-center justify-between px-4 py-3 border-b border-slate-200 bg-slate-50 rounded-t-lg cursor-move"
            onMouseDown={handleInformeDragStart}
          >
            <div className="flex items-center gap-2">
              <FileText size={16} className="text-emerald-500" />
              <span className="text-sm font-bold text-slate-700">Informe.txt</span>
            </div>
            <button onClick={() => setShowInformeWindow(false)} className="w-7 h-7 rounded hover:bg-red-100 flex items-center justify-center text-red-500">✕</button>
          </div>
          <div className="p-4">
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <div className="flex items-center gap-2 mb-3 pb-3 border-b border-slate-200">
                <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                <div className="w-2 h-2 rounded-full bg-red-400"></div>
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Resumen Ejecutivo - Proyecto Digital</h3>
              <p className="text-sm text-slate-600 mb-2">
                Este documento presenta un análisis detallado sobre la transformación digital en el ámbito educativo.
                Los resultados obtenidos demuestran una mejora significativa en el rendimiento de los estudiantes.
              </p>
              <p className="text-sm text-slate-600 mb-2">
                <strong>Conclusiones:</strong><br />
                - Incremento del 35% en participación<br />
                - Mejora en calificaciones promedio<br />
                - Alta satisfacción del alumnado
              </p>
              <p className="text-xs text-slate-400 mt-4">Última modificación: 28/04/2026</p>
            </div>
          </div>
        </div>
      )}

      {/* Ventana Foto.png */}
      {showFotoWindow && (
        <div
          className="absolute w-[400px] rounded-lg bg-white border border-slate-200 shadow-2xl z-50"
          style={{ left: fotoPos.x, top: fotoPos.y }}
        >
          <div
            className="flex items-center justify-between px-4 py-3 border-b border-slate-200 bg-slate-50 rounded-t-lg cursor-move"
            onMouseDown={handleFotoDragStart}
          >
            <div className="flex items-center gap-2">
              <ImageIcon size={16} className="text-purple-500" />
              <span className="text-sm font-bold text-slate-700">Foto.png</span>
            </div>
            <button onClick={() => setShowFotoWindow(false)} className="w-7 h-7 rounded hover:bg-red-100 flex items-center justify-center text-red-500">✕</button>
          </div>
          <div className="p-4">
            <div className="bg-gradient-to-br from-purple-100 via-pink-50 to-amber-50 rounded-lg p-8 border border-slate-200 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-lg bg-gradient-to-br from-violet-400 via-purple-400 to-pink-400 flex items-center justify-center shadow-lg">
                  <span className="text-5xl">🏔️</span>
                </div>
                <p className="text-sm text-slate-600 font-medium">paisaje.png</p>
                <p className="text-xs text-slate-400">2560 × 1440 px</p>
              </div>
            </div>
            <div className="mt-3 flex gap-2">
              <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">PNG</span>
              <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">2.4 MB</span>
              <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">Transparente</span>
            </div>
          </div>
        </div>
      )}

      {/* Panel Inferior: Descripción del elemento seleccionado */}
      {selectedDesktopItem && (
        <div className="p-4 bg-gradient-to-r from-violet-50 to-purple-50 border-t border-violet-200">
          <div className="flex items-start gap-4">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-${selectedDesktopItem.color}-100`}>
              {selectedDesktopItem.icon && <selectedDesktopItem.icon size={24} className={`text-${selectedDesktopItem.color}-600`} />}
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-slate-800">{selectedDesktopItem.name}</h4>
              <p className="text-sm text-slate-600 mt-1">{selectedDesktopItem.desc}</p>
              {selectedDesktopItem.details && (
                <ul className="mt-2 space-y-1">
                  {selectedDesktopItem.details.split('\n').map((line, i) => (
                    <li key={i} className="text-xs text-slate-500">• {line}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Panel de Instrucciones (cuando no hay nada seleccionado) */}
      {!selectedDesktopItem && (
        <div className="p-4 bg-slate-50 border-t border-slate-200">
          <h3 className="font-bold text-slate-800 mb-2">Explorando el Escritorio</h3>
          <ul className="text-sm text-slate-600 space-y-1">
            <li>• <strong>Iconos del escritorio:</strong> Este PC, Archivos y Papelera</li>
            <li>• <strong>Ventana del Explorador:</strong> Clic en "Explorador" de la taskbar para abrir</li>
            <li>• <strong>Barra de tareas:</strong> Inicio, apps abiertas, notificaciones y reloj</li>
            <li>• <strong>Menú Inicio:</strong> Clic en "Inicio" para abrir</li>
          </ul>
          <p className="mt-2 text-xs text-violet-600 font-medium">
            ↑ Selecciona un elemento del escritorio para ver su descripción
          </p>
        </div>
      )}

      {/* CTA: Support */}
      <div className="mx-4 mb-4 rounded-sm border border-amber-500/30 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 p-4 backdrop-blur-sm">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/20 shrink-0">
            <span className="text-xl">☕</span>
          </div>
          <div className="text-center sm:text-left flex-1">
            <p className="text-[9px] font-bold uppercase tracking-widest text-amber-400 font-pixel">Apoya Este Proyecto</p>
            <p className="text-slate-800 font-semibold text-sm">Si esto te está sirviendo, invítame a un café</p>
          </div>
          <a
            href="https://buymeacoffee.com/digitalsynapse"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-4 py-2 rounded-sm bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-amber-500/20"
          >
            Invítame a un café
          </a>
        </div>
      </div>
    </div>
  );
}
