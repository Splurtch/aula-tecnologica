import { InteractiveButton } from '../components/ui.jsx';

export default function SecurityView({ selectedItem, onSelect, isDark, colorMap, securityData, securityPasswordExamples, securityPermissionCards }) {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500">
      <div className={`rounded-sm border p-5 sm:p-6 md:p-8 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-[0_22px_60px_rgba(15,23,42,0.12)]'}`}>
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-8">
          <div className="max-w-3xl">
            <p className={`text-[11px] font-black uppercase tracking-[0.25em] ${isDark ? 'text-slate-500' : 'text-rose-600/70'}`}>Autoproteccion digital</p>
            <h2 className={`mt-3 text-2xl sm:text-3xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Seguridad digital cotidiana</h2>
            <p className={`mt-4 text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Protege cuentas, detecta fraudes, revisa permisos y prepara copias de seguridad con un enfoque muy practico.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full lg:w-auto">
            {[
              ['Meta', 'Detectar riesgos'],
              ['Metodo', 'Casos reales'],
              ['Foco', 'Habitos seguros'],
            ].map(([label, value]) => (
              <div key={label} className={`rounded-sm border px-4 py-3 ${isDark ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-slate-50'}`}>
                <p className={`text-[10px] font-black uppercase tracking-[0.24em] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{label}</p>
                <p className={`mt-2 text-sm font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>{value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">
          <InteractiveButton id="passwords" dataSet={securityData} extraClass="min-h-[108px]" selectedItem={selectedItem} onSelect={onSelect} colorMap={colorMap} isDark={isDark} />
          <InteractiveButton id="phishing_security" dataSet={securityData} extraClass="min-h-[108px]" selectedItem={selectedItem} onSelect={onSelect} colorMap={colorMap} isDark={isDark} />
          <InteractiveButton id="privacy_permissions" dataSet={securityData} extraClass="min-h-[108px]" selectedItem={selectedItem} onSelect={onSelect} colorMap={colorMap} isDark={isDark} />
          <InteractiveButton id="backups_recovery" dataSet={securityData} extraClass="min-h-[108px]" selectedItem={selectedItem} onSelect={onSelect} colorMap={colorMap} isDark={isDark} />
          <InteractiveButton id="safe_updates" dataSet={securityData} extraClass="min-h-[108px]" selectedItem={selectedItem} onSelect={onSelect} colorMap={colorMap} isDark={isDark} />
        </div>
      </div>

      {!securityData[selectedItem?.id] && (
        <div className={`rounded-sm border p-6 sm:p-7 ${isDark ? 'border-slate-800 bg-slate-900/90' : 'border-slate-200 bg-white'}`}>
          <p className={`text-[11px] font-black uppercase tracking-[0.24em] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Tablero interactivo</p>
          <h3 className={`mt-3 text-xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Abre una ficha para ver su capa de detalle</h3>
          <p className={`mt-3 text-sm leading-relaxed max-w-3xl ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Las comparativas, permisos y ejercicios permanecen ocultos hasta que eliges un bloque concreto. Asi reducimos saturacion y dejamos mas respiro visual.</p>
        </div>
      )}

      <div className={`grid grid-cols-1 xl:grid-cols-[0.9fr_1.1fr] gap-6 ${selectedItem?.id === 'passwords' || selectedItem?.id === 'phishing_security' ? '' : 'hidden'}`}>
        <section className={`rounded-sm border p-5 sm:p-6 ${isDark ? 'border-slate-800 bg-slate-900/90' : 'border-slate-200 bg-white'}`}>
          <div className="flex items-center justify-between gap-4 mb-5">
            <div>
              <p className={`text-[11px] font-black uppercase tracking-[0.24em] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Comparativa visual</p>
              <h3 className={`mt-2 text-xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Contrasena debil vs fuerte</h3>
            </div>
            <button onClick={() => onSelect('passwords', null, securityData)} className={`rounded-full border px-3 py-2 text-xs font-black uppercase tracking-widest ${isDark ? 'border-slate-700 text-slate-300 hover:bg-slate-800' : 'border-slate-300 text-slate-600 hover:bg-slate-50'}`}>Ver ficha</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <article className={`rounded-[26px] border p-5 ${isDark ? 'border-red-500/25 bg-red-500/10' : 'border-red-200 bg-red-50'}`}>
              <p className={`text-sm font-black uppercase tracking-widest ${isDark ? 'text-red-300' : 'text-red-700'}`}>Debiles</p>
              <div className="space-y-3 mt-4">{securityPasswordExamples.weak.map((password) => <div key={password} className={`rounded-sm px-4 py-3 font-black ${isDark ? 'bg-slate-950 text-slate-200' : 'bg-white text-slate-700'}`}>{password}</div>)}</div>
            </article>
            <article className={`rounded-[26px] border p-5 ${isDark ? 'border-emerald-500/25 bg-emerald-500/10' : 'border-emerald-200 bg-emerald-50'}`}>
              <p className={`text-sm font-black uppercase tracking-widest ${isDark ? 'text-emerald-300' : 'text-emerald-700'}`}>Fuertes</p>
              <div className="space-y-3 mt-4">{securityPasswordExamples.strong.map((password) => <div key={password} className={`rounded-sm px-4 py-3 font-black ${isDark ? 'bg-slate-950 text-slate-100' : 'bg-white text-slate-700'}`}>{password}</div>)}</div>
            </article>
          </div>
        </section>

        <section className={`rounded-sm border p-5 sm:p-6 ${isDark ? 'border-slate-800 bg-slate-900/90' : 'border-slate-200 bg-white'}`}>
          <div className="flex items-center justify-between gap-4 mb-5">
            <div>
              <p className={`text-[11px] font-black uppercase tracking-[0.24em] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Bandeja sospechosa</p>
              <h3 className={`mt-2 text-xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Correo legitimo vs correo sospechoso</h3>
            </div>
            <button onClick={() => onSelect('phishing_security', null, securityData)} className={`rounded-full border px-3 py-2 text-xs font-black uppercase tracking-widest ${isDark ? 'border-slate-700 text-slate-300 hover:bg-slate-800' : 'border-slate-300 text-slate-600 hover:bg-slate-50'}`}>Ver ficha</button>
          </div>
          <div className="space-y-3">
            <article className={`rounded-[26px] border p-4 ${isDark ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-slate-50'}`}>
              <div className="flex items-center justify-between gap-3"><div><p className={`text-sm font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>profesora@centro-educativo.es</p><p className={`mt-1 text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Asunto: Material de clase y enlace al aula virtual</p></div><span className={`rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-widest ${isDark ? 'bg-emerald-500/15 text-emerald-200' : 'bg-emerald-100 text-emerald-700'}`}>Legitimo</span></div>
            </article>
            <article className={`rounded-[26px] border p-4 ${isDark ? 'border-red-500/20 bg-red-500/10' : 'border-red-200 bg-red-50'}`}>
              <div className="flex items-center justify-between gap-3"><div><p className={`text-sm font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>alerta-banco@seguridad-total-login.ru</p><p className={`mt-1 text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Asunto: Verifique su cuenta ahora o sera bloqueada</p></div><span className={`rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-widest ${isDark ? 'bg-red-500/15 text-red-200' : 'bg-red-100 text-red-700'}`}>Sospechoso</span></div>
            </article>
          </div>
        </section>
      </div>

      <div className={` ${selectedItem?.id === 'privacy_permissions' || selectedItem?.id === 'backups_recovery' || selectedItem?.id === 'safe_updates' ? '' : 'hidden'}`}>
        <section className={`rounded-sm border p-5 sm:p-6 ${isDark ? 'border-slate-800 bg-slate-900/90' : 'border-slate-200 bg-white'}`}>
          <div className="flex items-center justify-between gap-4 mb-5">
            <div><p className={`text-[11px] font-black uppercase tracking-[0.24em] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Permisos criticos</p><h3 className={`mt-2 text-xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Que permisos revisar</h3></div>
            <button onClick={() => onSelect('privacy_permissions', null, securityData)} className={`rounded-full border px-3 py-2 text-xs font-black uppercase tracking-widest ${isDark ? 'border-slate-700 text-slate-300 hover:bg-slate-800' : 'border-slate-300 text-slate-600 hover:bg-slate-50'}`}>Ver ficha</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">{securityPermissionCards.map((card) => <article key={card.name} className={`rounded-sm border p-4 ${isDark ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-slate-50'}`}><p className={`text-sm font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>{card.name}</p><p className={`mt-2 text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{card.risk}</p></article>)}</div>
          <div className={`mt-5 rounded-sm border p-4 ${isDark ? 'border-blue-500/20 bg-blue-500/10' : 'border-blue-100 bg-blue-50'}`}>
            <p className={`text-sm font-black uppercase tracking-widest ${isDark ? 'text-blue-300' : 'text-blue-700'}`}>Checklist basica</p>
            <ul className="mt-3 space-y-2">{['Correo protegido con doble factor', 'Permisos revisados en movil y navegador', 'Copia de archivos importantes', 'Sistema y navegador actualizados'].map((item) => <li key={item} className={`flex items-start gap-3 text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}><span className="mt-0.5 text-emerald-500">✓</span>{item}</li>)}</ul>
          </div>
        </section>

      </div>
    </div>
  );
}