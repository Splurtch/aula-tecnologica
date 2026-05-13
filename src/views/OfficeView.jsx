import { FileText, Database, Presentation, Download, Users } from 'lucide-react';

export default function OfficeView({
  selectedItem, onSelect, isDark, colorMap,
  officeData, officeWorkspaceViews, officeWorkspaceZone, setOfficeWorkspaceZone,
  officeTaskView, setOfficeTaskView, officeTaskSuggestions
}) {
  const officeProgramIds = ['text_docs', 'spreadsheets', 'presentations_tools', 'pdf_export', 'collaboration_templates'];
  const activeOfficeId = officeData[selectedItem?.id] ? selectedItem.id : 'text_docs';
  const activeOfficeView = officeWorkspaceViews[activeOfficeId];
  const activeOfficeZone = activeOfficeView.zones.find((zone) => zone.id === officeWorkspaceZone) || activeOfficeView.zones[0];

  const handleOfficeProgramSelect = (id) => {
    onSelect(officeData[id]);
    setOfficeWorkspaceZone(officeWorkspaceViews[id].zones[0].id);
  };

  const zoneButtonClass = (zoneId) => `rounded-[18px] border text-left transition-all ${
    officeWorkspaceZone === zoneId
      ? 'border-blue-300 bg-blue-50 text-slate-900 shadow-[0_10px_24px_rgba(59,130,246,0.16)]'
      : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50'
  }`;

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500">
      <section className={`rounded-sm border p-5 sm:p-6 ${isDark ? 'border-slate-800 bg-slate-900/90' : 'border-slate-200 bg-white'}`}>
        <div>
          <p className={`text-[11px] font-black uppercase tracking-[0.24em] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Tablero interactivo</p>
          <h3 className={`mt-2 text-xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>{activeOfficeView.title}</h3>
          <p className={`mt-2 text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{activeOfficeView.subtitle}</p>
        </div>
        <div className={`mt-5 rounded-[28px] border overflow-hidden ${isDark ? 'border-slate-700 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.2)]' : 'border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.08)]'}`}>
          <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-200 bg-slate-100">
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="w-3 h-3 rounded-full bg-amber-400" />
              <span className="w-3 h-3 rounded-full bg-emerald-400" />
            </div>
            <div className="flex-1 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-500">suite-ofimatica://panel-de-trabajo/{activeOfficeId}</div>
          </div>
          <div className="bg-gradient-to-br from-white via-slate-50 to-slate-100 p-4 sm:p-5">
            <div className="flex flex-wrap gap-2 mb-5">
              {officeProgramIds.map((id) => {
                const item = officeData[id];
                const Icon = item.icon;
                const isActive = activeOfficeId === id;
                return (
                  <button key={id} onClick={() => handleOfficeProgramSelect(id)} className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-black uppercase tracking-[0.18em] transition-all ${isActive ? 'border-blue-300 bg-blue-50 text-blue-700 shadow-[0_10px_24px_rgba(59,130,246,0.16)]' : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50'}`}>
                    <Icon size={15} />
                    {item.name}
                  </button>
                );
              })}
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-[180px_1fr_240px] gap-4">
              <button
                onClick={() => setOfficeWorkspaceZone(
                  activeOfficeId === 'spreadsheets' ? 'formula' :
                  activeOfficeId === 'presentations_tools' ? 'slides' :
                  activeOfficeId === 'pdf_export' ? 'source' :
                  activeOfficeId === 'collaboration_templates' ? 'template' : 'sidebar'
                )}
                className={`${zoneButtonClass(
                  activeOfficeId === 'spreadsheets' ? 'formula' :
                  activeOfficeId === 'presentations_tools' ? 'slides' :
                  activeOfficeId === 'pdf_export' ? 'source' :
                  activeOfficeId === 'collaboration_templates' ? 'template' : 'sidebar'
                )} p-4`}
              >
                <p className="text-[11px] font-black uppercase tracking-[0.22em] text-slate-500">{activeOfficeId === 'spreadsheets' ? 'Panel superior' : activeOfficeId === 'presentations_tools' ? 'Miniaturas' : 'Panel lateral'}</p>
                <div className="mt-4 rounded-[22px] border border-slate-200 bg-slate-50 p-3">
                  {activeOfficeId === 'spreadsheets' ? (
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-slate-500">B9</span>
                        <span className="rounded-xl bg-emerald-600 px-3 py-2 text-xs font-black uppercase tracking-[0.2em] text-white">fx</span>
                        <div className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-600">=SUM(B2:B8)</div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {['Autosuma', 'Formato', 'Ordenar', 'Validar'].map((item) => (
                          <span key={item} className="rounded-full bg-white px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-slate-500 border border-slate-200">{item}</span>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {['Portada', 'Experiencia', 'Formacion', 'Contacto'].map((item) => (
                        <div key={item} className="rounded-xl border border-slate-200 bg-white px-3 py-2">
                          <p className="text-sm font-semibold text-slate-700">{item}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </button>

              <button
                onClick={() => setOfficeWorkspaceZone(
                  activeOfficeId === 'spreadsheets' ? 'grid' :
                  activeOfficeId === 'presentations_tools' ? 'canvas' :
                  activeOfficeId === 'pdf_export' ? 'preview' :
                  activeOfficeId === 'collaboration_templates' ? 'comments' : 'page'
                )}
                className={`${zoneButtonClass(
                  activeOfficeId === 'spreadsheets' ? 'grid' :
                  activeOfficeId === 'presentations_tools' ? 'canvas' :
                  activeOfficeId === 'pdf_export' ? 'preview' :
                  activeOfficeId === 'collaboration_templates' ? 'comments' : 'page'
                )} p-5 text-left min-h-[320px]`}
              >
                {activeOfficeId === 'spreadsheets' ? (
                  <div className="overflow-hidden rounded-[22px] border border-slate-200 bg-white">
                    <div className="grid grid-cols-[52px_repeat(5,minmax(0,1fr))] border-b border-slate-200 bg-slate-50 text-xs font-black uppercase tracking-[0.18em] text-slate-500">
                      {['', 'A', 'B', 'C', 'D', 'E'].map((item) => <div key={item || 'blank'} className="px-3 py-3 text-center">{item}</div>)}
                    </div>
                    {[['1', 'Mes', 'Ingresos', 'Gastos', 'Ahorro', 'Estado'], ['2', 'Ene', '1400', '920', '480', 'OK'], ['3', 'Feb', '1400', '980', '420', 'OK'], ['4', 'Mar', '1400', '1110', '290', 'Revisar'], ['5', 'Abr', '1400', '860', '540', 'OK']].map((row, rowIndex) => (
                      <div key={row[0]} className="grid grid-cols-[52px_repeat(5,minmax(0,1fr))] border-b border-slate-100 text-sm text-slate-700">
                        {row.map((cell, index) => (
                          <div key={`${row[0]}-${index}`} className={`px-3 py-3 text-center ${index === 0 ? 'bg-slate-50 font-black text-slate-500' : rowIndex === 0 ? 'font-black text-slate-600' : ''}`}>{cell}</div>
                        ))}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="mx-auto max-w-[620px] rounded-[26px] border border-slate-200 bg-white p-8 shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-400">Curriculum vitae</p>
                    <h4 className="mt-4 text-3xl font-black text-slate-900">Marta Alvarez</h4>
                    <p className="mt-2 text-sm text-slate-500">Perfil profesional orientado a administracion y atencion al cliente.</p>
                  </div>
                )}
              </button>

              <button
                onClick={() => setOfficeWorkspaceZone(
                  activeOfficeId === 'pdf_export' ? 'settings' :
                  activeOfficeId === 'collaboration_templates' ? 'permissions' :
                  activeOfficeId === 'spreadsheets' ? 'filters' : 'export'
                )}
                className={`${zoneButtonClass(
                  activeOfficeId === 'pdf_export' ? 'settings' :
                  activeOfficeId === 'collaboration_templates' ? 'permissions' :
                  activeOfficeId === 'spreadsheets' ? 'filters' : 'export'
                )} p-4`}
              >
                <p className="text-[11px] font-black uppercase tracking-[0.22em] text-slate-500">{activeOfficeId === 'pdf_export' ? 'Ajustes de salida' : 'Panel de apoyo'}</p>
                <div className="mt-4 space-y-3">
                  <div className="rounded-sm border border-slate-200 bg-slate-50 p-4">
                    <p className="text-sm font-black text-slate-900">{activeOfficeZone.heading}</p>
                    <p className="mt-2 text-sm text-slate-600">{activeOfficeZone.text}</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className={`rounded-sm border p-5 sm:p-6 ${isDark ? 'border-slate-800 bg-slate-900/90' : 'border-slate-200 bg-white'}`}>
        <div className="grid grid-cols-1 xl:grid-cols-[1.05fr_0.95fr] gap-6">
          <div>
            <p className={`text-[11px] font-black uppercase tracking-[0.24em] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Selector de tarea</p>
            <h3 className={`mt-2 text-xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>La explicacion se despliega abajo</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5">
              {[['cv', 'Preparar un CV'], ['budget', 'Hacer un presupuesto'], ['slides', 'Exponer un proyecto']].map(([key, label]) => (
                <button key={key} onClick={() => setOfficeTaskView(key)} className={`rounded-[20px] px-4 py-4 text-left text-sm font-black ${officeTaskView === key ? 'bg-slate-950 text-white' : isDark ? 'bg-slate-950 text-slate-300 border border-slate-800' : 'bg-slate-50 text-slate-700 border border-slate-200'}`}>{label}</button>
              ))}
            </div>
            <div className={`mt-5 rounded-[26px] border p-5 ${isDark ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-slate-50'}`}>
              <p className={`text-[11px] font-black uppercase tracking-[0.24em] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Zona pulsada</p>
              <h4 className={`mt-2 text-xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>{activeOfficeZone.heading}</h4>
              <p className={`mt-3 text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{activeOfficeZone.text}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className={`rounded-[26px] border p-5 ${isDark ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-slate-50'}`}>
              <p className={`text-[11px] font-black uppercase tracking-[0.24em] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Flujo de trabajo</p>
              <h3 className={`mt-2 text-xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Crear, guardar, exportar y compartir</h3>
              <div className="space-y-3 mt-5">
                {[['Crear', 'Redactas, calculas o disenas el contenido en formato editable.'], ['Guardar', 'Mantienes una version de trabajo con nombre claro y ordenada.'], ['Exportar', 'Generas PDF u otro formato final si ya no debe cambiarse.'], ['Compartir', 'Enlazas o adjuntas segun si el documento sigue vivo o ya esta cerrado.']].map(([step, text], index) => (
                  <div key={step} className="flex items-start gap-3">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-black ${isDark ? 'bg-slate-900 text-teal-300' : 'bg-teal-100 text-teal-700'}`}>{index + 1}</div>
                    <div>
                      <p className={`font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>{step}</p>
                      <p className={`mt-1 text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}