import { HardDrive, Usb, Cloud, FolderOpen, FileText } from 'lucide-react';
import { InteractiveButton } from '../components/ui.jsx';

export default function FilesView({ selectedItem, onSelect, isDark, colorMap, filesData }) {
  return (
    <div className="bg-slate-900 rounded-3xl p-5 sm:p-6 md:p-8 shadow-2xl border border-slate-800 animate-in fade-in duration-500 h-full">
      <div className="flex items-center gap-3 mb-8 border-b border-slate-700 pb-4">
        <FolderOpen className="text-amber-400" size={32} />
        <div>
          <h2 className="text-2xl font-black text-white">Explorador y Gestión Documental</h2>
          <p className="text-slate-400 mt-1 text-sm font-medium">Domina la organización, jerarquías y formatos de archivo.</p>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row gap-6 xl:min-h-[550px]">
        <div className="w-full xl:w-1/3 bg-slate-800 rounded-sm p-4 sm:p-5 border border-slate-700 flex flex-col gap-4 shadow-inner">
          <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-2 pl-2">Unidades (Discos)</h3>
          <div className="space-y-3">
            <button onClick={(e) => onSelect('storage_drives', e, filesData)} className={`flex items-center gap-4 p-4 rounded-xl text-left transition-all border-2 w-full ${selectedItem?.id === 'storage_drives' ? 'bg-blue-600 border-blue-400 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]' : 'bg-slate-700/50 border-slate-600 text-slate-300 hover:bg-slate-700'}`}>
              <div className="bg-slate-800 p-2 rounded-lg"><HardDrive size={24} className="text-blue-400" /></div>
              <div><p className="font-bold text-[15px] leading-tight">Disco Local (C:)</p><p className="text-[12px] text-slate-400 mt-0.5">Sistema y Programas</p></div>
            </button>
            <button onClick={(e) => onSelect('storage_drives', e, filesData)} className={`flex items-center gap-4 p-4 rounded-xl text-left transition-all border-2 w-full ${selectedItem?.id === 'storage_drives' ? 'bg-blue-600 border-blue-400 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]' : 'bg-slate-700/50 border-slate-600 text-slate-300 hover:bg-slate-700'}`}>
              <div className="bg-slate-800 p-2 rounded-lg"><Usb size={24} className="text-emerald-400" /></div>
              <div><p className="font-bold text-[15px] leading-tight">KINGSTON (D:)</p><p className="text-[12px] text-slate-400 mt-0.5">Pendrive 64GB</p></div>
            </button>
            <button onClick={(e) => onSelect('storage_drives', e, filesData)} className={`flex items-center gap-4 p-4 rounded-xl text-left transition-all border-2 w-full ${selectedItem?.id === 'storage_drives' ? 'bg-blue-600 border-blue-400 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]' : 'bg-slate-700/50 border-slate-600 text-slate-300 hover:bg-slate-700'}`}>
              <div className="bg-slate-800 p-2 rounded-lg"><Cloud size={24} className="text-purple-400" /></div>
              <div><p className="font-bold text-[15px] leading-tight">Google Drive</p><p className="text-[12px] text-slate-400 mt-0.5">Nube Sincronizada</p></div>
            </button>
          </div>
        </div>

        <div className="w-full xl:w-2/3 bg-slate-50 rounded-sm p-4 sm:p-6 border border-slate-200 flex flex-col gap-6 sm:gap-8 overflow-hidden">
          <div>
            <h3 className="text-[11px] font-black text-slate-500 uppercase tracking-widest mb-4">Estructura del Árbol (Jerarquía)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InteractiveButton id="folders_org" dataSet={filesData} extraClass="!flex-row !justify-start gap-4 !p-5 shadow-sm" selectedItem={selectedItem} onSelect={onSelect} colorMap={colorMap} isDark={isDark} />
              <button onClick={(e) => onSelect('folders_org', e, filesData)} className={`relative flex items-center p-5 rounded-xl border-2 transition-all duration-300 gap-4 ${selectedItem?.id === 'folders_org' ? 'ring-4 ring-amber-400 shadow-lg scale-105 bg-amber-100 text-amber-900 border-amber-500 z-10' : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-400'}`}>
                <FolderOpen size={36} className="text-amber-500" />
                <div className="text-left"><p className="font-bold text-[15px]">1_Trabajo</p><p className="text-[12px] text-slate-500">24 elementos</p></div>
              </button>
            </div>
          </div>

          <div className="flex-grow bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-4">Archivos y Formatos (Extensiones)</h3>
            <div className="space-y-3">
              <button onClick={(e) => onSelect('file_types', e, filesData)} className={`w-full flex items-center justify-between p-3 rounded-lg border-2 transition-all ${selectedItem?.id === 'file_types' ? 'bg-purple-50 border-purple-400 ring-2 ring-purple-200' : 'bg-white border-slate-100 hover:border-slate-300 hover:bg-slate-50'}`}>
                <div className="flex items-center gap-4"><div className="p-2 bg-blue-100 rounded text-blue-600"><FileText size={24}/></div><div className="text-left"><p className="font-bold text-[14px] text-slate-800">CV_Actualizado</p></div></div><span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">.pdf</span>
              </button>
              <button onClick={(e) => onSelect('file_types', e, filesData)} className={`w-full flex items-center justify-between p-3 rounded-lg border-2 transition-all ${selectedItem?.id === 'file_types' ? 'bg-purple-50 border-purple-400 ring-2 ring-purple-200' : 'bg-white border-slate-100 hover:border-slate-300 hover:bg-slate-50'}`}>
                <div className="flex items-center gap-4"><div className="p-2 bg-emerald-100 rounded text-emerald-600"><FileText size={24}/></div><div className="text-left"><p className="font-bold text-[14px] text-slate-800">Contabilidad</p></div></div><span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">.xlsx</span>
              </button>
              <button onClick={(e) => onSelect('file_types', e, filesData)} className={`w-full flex items-center justify-between p-3 rounded-lg border-2 transition-all ${selectedItem?.id === 'file_types' ? 'bg-purple-50 border-purple-400 ring-2 ring-purple-200' : 'bg-white border-slate-100 hover:border-slate-300 hover:bg-slate-50'}`}>
                <div className="flex items-center gap-4"><div className="p-2 bg-amber-100 rounded text-amber-600"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg></div><div className="text-left"><p className="font-bold text-[14px] text-slate-800">Foto_Carnet</p></div></div><span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">.jpg</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}