import { Bot, Brain, Library, Blocks, Video } from 'lucide-react';

export default function AIView({ selectedItem, onSelect, colorMap, isDark, aiData }) {
  const generalistas = ['chatgpt', 'claude', 'gemini', 'copilot', 'grok'];
  const investigacion = ['perplexity', 'notebooklm', 'kimi'];
  const desarrollo = ['deepseek', 'lovable', 'gamma', 'manus'];
  const multimedia = ['midjourney', 'suno', 'runway', 'elevenlabs'];

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500 h-full">
      <div className="bg-slate-900 rounded-3xl p-8 shadow-2xl border border-slate-800">
        <div className="flex items-center gap-3 mb-8 border-b border-slate-700 pb-4">
          <Bot className="text-emerald-400" size={32} />
          <div>
            <h2 className="text-2xl font-black text-white">Directorio de Inteligencia Artificial</h2>
            <p className="text-slate-400 mt-1 text-sm font-medium">Conoce las personalidades, fortalezas y debilidades de los principales Modelos de Lenguaje.</p>
          </div>
        </div>

        <div className="space-y-10">
          <div>
            <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-4 flex items-center gap-2">
              <Brain size={18} /> 1. Los Gigantes Generalistas
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {generalistas.map(id => (
                <InteractiveButton key={id} id={id} dataSet={aiData} extraClass="bg-slate-800 border-slate-700 text-slate-200" selectedItem={selectedItem} onSelect={onSelect} colorMap={colorMap} isDark={isDark} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-4 flex items-center gap-2">
              <Library size={18} /> 2. Investigación y Lectura
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {investigacion.map(id => (
                <InteractiveButton key={id} id={id} dataSet={aiData} extraClass="bg-slate-800 border-slate-700 text-slate-200" selectedItem={selectedItem} onSelect={onSelect} colorMap={colorMap} isDark={isDark} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-amber-400 uppercase tracking-widest mb-4 flex items-center gap-2">
              <Blocks size={18} /> 3. Desarrollo y Agentes
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {desarrollo.map(id => (
                <InteractiveButton key={id} id={id} dataSet={aiData} extraClass="bg-slate-800 border-slate-700 text-slate-200" selectedItem={selectedItem} onSelect={onSelect} colorMap={colorMap} isDark={isDark} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-fuchsia-400 uppercase tracking-widest mb-4 flex items-center gap-2">
              <Video size={18} /> 4. Multimedia
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {multimedia.map(id => (
                <InteractiveButton key={id} id={id} dataSet={aiData} extraClass="bg-slate-800 border-slate-700 text-slate-200" selectedItem={selectedItem} onSelect={onSelect} colorMap={colorMap} isDark={isDark} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InteractiveButton({ id, dataSet, extraClass, selectedItem, onSelect, colorMap, isDark }) {
  const data = dataSet?.[id];
  if (!data) return null;
  const isSelected = selectedItem?.id === id;
  const bgClass = isSelected ? 'bg-blue-500/20 border-blue-400' : 'bg-slate-800 border-slate-700';
  const Icon = data.icon;

  return (
    <button
      onClick={() => onSelect(data)}
      className={`rounded-sm border p-4 text-left transition-all ${bgClass} ${extraClass} hover:border-blue-400/50`}
    >
      <div className="flex flex-col gap-2">
        <Icon size={20} className={isSelected ? 'text-blue-400' : 'text-slate-400'} />
        <span className="text-xs font-black uppercase tracking-wider">{data.category}</span>
        <span className="text-sm font-bold">{data.name}</span>
      </div>
    </button>
  );
}