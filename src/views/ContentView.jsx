import { Cog } from 'lucide-react';
import { InteractiveButton } from '../components/ui.jsx';
import { contentSteps, contentData, contentTools, SoftwareLogos, ContentImages } from '../data/contentData.js';

export default function ContentView({ selectedItem, onSelect, isDark, colorMap }) {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500">
      <section className={`rounded-sm border p-5 sm:p-6 md:p-7 ${isDark ? 'bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950/20 border-slate-800' : 'bg-white border-slate-200 shadow-cyber-lg'}`}>
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-5 mb-6">
          <div className="max-w-2xl">
            <span className={`text-[10px] font-semibold uppercase tracking-[0.25em] ${isDark ? 'text-blue-400/70' : 'text-blue-600/70'}`}>Comunicacion digital</span>
            <h2 className={`text-2xl sm:text-3xl font-semibold tracking-tight mt-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Creacion de Contenido Digital
            </h2>
            <p className={`mt-3 text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Esta es tu puerta de entrada al mundo de la creacion de contenido. Cada formato tiene sus ventajas, aqui aprenderas a elegir el correcto para tu objetivo.
            </p>
          </div>
          <div className={`px-4 py-3 rounded-sm border ${isDark ? 'border-blue-500/20 bg-blue-500/10' : 'border-blue-200 bg-blue-50'}`}>
            <p className={`text-[10px] font-semibold uppercase tracking-widest ${isDark ? 'text-blue-300' : 'text-blue-700'}`}>Nuevo modulo</p>
            <p className={`text-sm font-medium mt-0.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>Contenido digital</p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {contentSteps.map((step) => (
            <div key={step.step} className={`p-4 rounded-sm border ${isDark ? 'border-slate-800 bg-slate-900/50' : 'border-slate-200 bg-slate-50'}`}>
              <span className={`text-[10px] font-semibold uppercase tracking-wider ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>{step.step}</span>
              <p className={`text-sm font-semibold mt-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>{step.title}</p>
              <p className={`text-xs mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <InteractiveButton id="fundamentals" dataSet={contentData} extraClass="min-h-[100px]" selectedItem={selectedItem} onSelect={onSelect} colorMap={colorMap} isDark={isDark} />
        <InteractiveButton id="copywriting" dataSet={contentData} extraClass="min-h-[100px]" selectedItem={selectedItem} onSelect={onSelect} colorMap={colorMap} isDark={isDark} />
        <InteractiveButton id="blogs" dataSet={contentData} extraClass="min-h-[100px]" selectedItem={selectedItem} onSelect={onSelect} colorMap={colorMap} isDark={isDark} />
        <InteractiveButton id="social_media" dataSet={contentData} extraClass="min-h-[100px]" selectedItem={selectedItem} onSelect={onSelect} colorMap={colorMap} isDark={isDark} />
        <InteractiveButton id="video" dataSet={contentData} extraClass="min-h-[100px]" selectedItem={selectedItem} onSelect={onSelect} colorMap={colorMap} isDark={isDark} />
        <InteractiveButton id="podcast" dataSet={contentData} extraClass="min-h-[100px]" selectedItem={selectedItem} onSelect={onSelect} colorMap={colorMap} isDark={isDark} />
      </div>

      <section className={`rounded-sm border p-5 sm:p-6 ${isDark ? 'border-slate-800 bg-slate-900/80' : 'border-slate-200 bg-white'}`}>
        <div className="flex items-center justify-between gap-4 mb-5">
          <div>
            <p className={`text-[10px] font-semibold uppercase tracking-widest ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Ejemplos visuales</p>
            <h3 className={`text-lg font-semibold mt-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>Plantillas de contenido</h3>
          </div>
          <span className={`text-[10px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-sm border ${isDark ? 'text-purple-300 border-purple-500/30 bg-purple-500/10' : 'text-purple-700 border-purple-200 bg-purple-50'}`}>
            {selectedItem?.name || 'Templates'}
          </span>
        </div>

        {selectedItem?.id === 'social_media' && (
          <div className={`p-6 rounded-sm border ${isDark ? 'border-slate-700 bg-slate-950/50' : 'border-slate-200 bg-slate-50'}`}>
            <div className="flex items-center gap-3 mb-4">
              <img src={SoftwareLogos.instagram} alt="Instagram" className="w-8 h-8" />
              <span className={`text-base font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Post para RRSS</span>
            </div>
            <div className={`p-6 rounded-lg ${isDark ? 'bg-slate-900 border-2 border-slate-700' : 'bg-white border-2 border-slate-200'}`} style={{maxWidth: '400px'}}>
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full"></div>
                <div className="space-y-2">
                  <div className="h-4 w-32 bg-slate-300 rounded"></div>
                  <div className="h-3 w-20 bg-slate-200 rounded"></div>
                </div>
              </div>
              <p className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}>El 90% comete este error 🚨</p>
              <p className={`text-base mt-3 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Pierdes horas redactando y nadie te lee.</p>
              <ul className={`text-base mt-4 space-y-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                <li>👉 Facilita la lectura</li>
                <li>👉 Aumenta la retención</li>
              </ul>
              <p className={`text-base font-semibold mt-5 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>Guárdalo para luego 📌</p>
            </div>
            <p className={`text-xs mt-4 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Párrafos de 2 líneas máximo, gancho en primera línea, CTA claro</p>
          </div>
        )}

        {(selectedItem?.id === 'copywriting' || selectedItem?.id === 'blogs') && (
          <div className={`p-6 rounded-sm border ${isDark ? 'border-slate-700 bg-slate-950/50' : 'border-slate-200 bg-slate-50'}`}>
            <div className="flex items-center gap-3 mb-4">
              <img src={SoftwareLogos.wordpress} alt="Web" className="w-8 h-8" />
              <span className={`text-base font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Artículo Web / Blog</span>
            </div>
            <div className={`bg-white w-full max-w-2xl mx-auto p-8 shadow-lg border border-slate-200 ${isDark ? 'bg-slate-800 border-slate-700' : ''}`}>
              <div className="h-8 w-full bg-slate-800 rounded mb-4"></div>
              <div className="h-6 w-2/3 bg-slate-700 rounded mb-6"></div>
              <div className="space-y-3 mb-6">
                <div className="h-4 w-full bg-slate-300 rounded"></div>
                <div className="h-4 w-full bg-slate-300 rounded"></div>
                <div className="h-4 w-4/5 bg-slate-300 rounded"></div>
                <div className="h-4 w-full bg-slate-300 rounded"></div>
              </div>
              <div className="h-6 w-1/3 bg-emerald-500 rounded mb-5"></div>
              <div className="space-y-3 mb-6">
                <div className="flex gap-3">
                  <div className="w-3 h-3 rounded-full bg-slate-400 mt-1"></div>
                  <div className="h-4 w-full bg-slate-300 rounded mt-1"></div>
                </div>
                <div className="flex gap-3">
                  <div className="w-3 h-3 rounded-full bg-slate-400 mt-1"></div>
                  <div className="h-4 w-5/6 bg-slate-300 rounded mt-1"></div>
                </div>
                <div className="flex gap-3">
                  <div className="w-3 h-3 rounded-full bg-slate-400 mt-1"></div>
                  <div className="h-4 w-full bg-slate-300 rounded mt-1"></div>
                </div>
              </div>
              <div className="border-l-4 border-emerald-500 pl-4 bg-emerald-50 p-4">
                <div className="h-4 w-full bg-emerald-200 rounded mb-2"></div>
                <div className="h-4 w-3/4 bg-emerald-200 rounded"></div>
              </div>
            </div>
            <p className={`text-xs mt-4 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Márgenes anchos, H1/H2 jerárquicos, línea de 70-80 caracteres</p>
          </div>
        )}

        {selectedItem?.id === 'video' && (
          <div className={`p-6 rounded-sm border ${isDark ? 'border-slate-700 bg-slate-950/50' : 'border-slate-200 bg-slate-50'}`}>
            <div className="flex items-center gap-3 mb-4">
              <img src={SoftwareLogos.youtube} alt="Video" className="w-8 h-8" />
              <span className={`text-base font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Zonas de Seguridad Vídeo</span>
            </div>
            <div className="relative max-w-[240px] aspect-[9/16] mx-auto bg-slate-800 rounded-2xl border-4 border-slate-900 overflow-hidden shadow-2xl">
              <div className="absolute right-0 bottom-24 w-14 h-[40%] bg-red-500/50 flex flex-col items-center justify-evenly text-xs text-white font-bold p-2 text-center z-20">
                <span>UI</span>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-20 bg-red-500/50 flex items-center justify-center text-xs text-white font-bold px-2 text-center z-20">
                DESCRIPCIÓN
              </div>
              <div className="absolute inset-0 mt-12 mb-24 ml-4 mr-14 border-2 border-dashed border-green-400 flex flex-col items-center p-3 z-10">
                <span className="text-green-400 text-xs font-bold">ZONA SEGURA</span>
                <div className="bg-white text-slate-900 font-bold text-sm px-3 py-2 rounded mb-auto mt-3">TÍTULO</div>
                <div className="w-16 h-16 border-2 border-purple-400 bg-purple-900/50 rounded-full flex items-center justify-center mb-auto">
                  <span className="text-purple-300 text-xs">USER</span>
                </div>
                <div className="bg-yellow-400 text-black font-bold px-3 py-2 text-sm rounded mb-3">SUBTÍTULOS</div>
              </div>
            </div>
            <p className={`text-xs mt-4 text-center ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Formato 9:16 para RRSS - Respeta zonas UI y descripción</p>
          </div>
        )}

        {(!selectedItem || selectedItem.id === 'fundamentals' || selectedItem.id === 'podcast') && (
          <div className={`p-6 rounded-sm border ${isDark ? 'border-slate-700 bg-slate-950/50' : 'border-slate-200 bg-slate-50'}`}>
            <div className="flex items-center gap-3 mb-4">
              <img src={SoftwareLogos.chrome} alt="Web" className="w-8 h-8" />
              <span className={`text-base font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Hero Banner Web</span>
            </div>
            <div className="relative w-full aspect-[21/9] rounded-lg overflow-hidden border border-slate-300 shadow-2xl">
              <img src={ContentImages.heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
              <div className="absolute inset-0 flex items-center">
                <div className="relative z-10 w-3/4 pl-8 space-y-3">
                  <div className="bg-white/20 text-white text-sm uppercase tracking-wider px-3 py-1.5 inline-block rounded font-bold">Novedad</div>
                  <h3 className="text-white font-black text-2xl leading-tight">Soluciones Digitales</h3>
                  <p className="text-slate-300 text-base">Texto secundario en zona segura</p>
                  <div className="mt-3 bg-purple-500 text-white text-base font-bold px-6 py-3 rounded-lg inline-block">Descubrir</div>
                </div>
              </div>
            </div>
            <p className={`text-xs mt-4 text-center ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Gradiente oscuro a la izquierda para legibilidad del texto</p>
          </div>
        )}
      </section>

      <InteractiveButton id="legal" dataSet={contentData} extraClass="min-h-[90px]" selectedItem={selectedItem} onSelect={onSelect} colorMap={colorMap} isDark={isDark} />

      <section className={`rounded-sm border p-5 sm:p-6 ${isDark ? 'border-slate-800 bg-slate-900/80' : 'border-slate-200 bg-white'}`}>
        <div className="flex items-center justify-between gap-4 mb-5">
          <div>
            <p className={`text-[10px] font-semibold uppercase tracking-widest ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Herramientas recomendadas</p>
            <h3 className={`text-lg font-semibold mt-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>Tu kit de inicio</h3>
          </div>
          <span className={`text-[10px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-sm border ${isDark ? 'text-cyan-300 border-cyan-500/30 bg-cyan-500/10' : 'text-cyan-700 border-cyan-200 bg-cyan-50'}`}>
            Herramientas
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {Object.values(contentTools).map((tool) => (
            <div key={tool.name} className={`p-4 rounded-sm border text-center ${isDark ? 'border-slate-800 bg-slate-900/50 hover:border-blue-500/30' : 'border-slate-200 bg-slate-50 hover:border-blue-300'}`}>
              {tool.logo ? (
                <img src={tool.logo} alt={tool.name} className="w-8 h-8 mx-auto mb-2 object-contain" />
              ) : (
                <div className={`w-8 h-8 mx-auto mb-2 rounded flex items-center justify-center ${isDark ? 'bg-slate-700 text-slate-400' : 'bg-slate-200 text-slate-500'}`}>
                  <Cog size={16} />
                </div>
              )}
              <p className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>{tool.name}</p>
              <p className={`text-[11px] mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{tool.category}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}