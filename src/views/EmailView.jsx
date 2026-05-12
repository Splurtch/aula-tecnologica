import { useState } from 'react';
import { emailData, emailInboxMock, emailRecipientCases } from '../data/emailData.js';

const emailEtiquetteExamples = {
  good: {
    subject: 'Entrega del presupuesto actualizado',
    body: 'Hola Ana, te envio el presupuesto revisado en PDF. Si te encaja, lo comentamos manana. Gracias.',
  },
  bad: {
    subject: 'hola',
    body: 'te mando eso mira a ver y me dices',
  },
};

export default function EmailView({ selectedItem, onSelect, isDark, colorMap }) {
  const [emailRecipientView, setEmailRecipientView] = useState('para');

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500">
      <section className={`rounded-sm border p-5 sm:p-6 md:p-8 ${isDark ? 'border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950/40' : 'border-slate-200 bg-white shadow-[0_22px_60px_rgba(15,23,42,0.12)]'}`}>
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-8">
          <div className="max-w-3xl">
            <p className={`text-[11px] font-black uppercase tracking-[0.25em] ${isDark ? 'text-sky-300/70' : 'text-sky-600/70'}`}>Correo y comunicacion</p>
            <h2 className={`mt-3 text-2xl sm:text-3xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Comunicacion digital clara y segura</h2>
            <p className={`mt-4 text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>La interfaz simulada del correo es el tablero principal. Pulsa cada zona para entender bandeja, destinatarios, adjuntos, respuesta y netiqueta sin sobrecargar la lectura.</p>
          </div>
        </div>

        <div className="rounded-[30px] border overflow-hidden border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
          <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-200 bg-white">
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="w-3 h-3 rounded-full bg-amber-400" />
              <span className="w-3 h-3 rounded-full bg-emerald-400" />
            </div>
            <button onClick={() => onSelect('inbox_security', null, emailData)} className={`flex-1 rounded-full border px-4 py-2 text-left text-sm ${selectedItem?.id === 'inbox_security' ? 'border-emerald-200 bg-emerald-50 text-emerald-700' : 'border-slate-200 bg-slate-50 text-slate-500'}`}>Bandeja de entrada y revision segura</button>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-[220px_1fr]">
            <aside className="border-r border-slate-200 p-4 space-y-3 bg-slate-50">
              <button onClick={() => onSelect('send_reply', null, emailData)} className={`w-full rounded-[20px] px-4 py-3 text-left text-sm font-black ${selectedItem?.id === 'send_reply' ? 'bg-sky-50 text-sky-700 border border-sky-200' : 'bg-white text-slate-700 border border-slate-200'}`}>Nuevo / responder</button>
              <button onClick={() => onSelect('cc_bcc', null, emailData)} className={`w-full rounded-[20px] px-4 py-3 text-left text-sm font-black ${selectedItem?.id === 'cc_bcc' ? 'bg-violet-50 text-violet-700 border border-violet-200' : 'bg-white text-slate-700 border border-slate-200'}`}>Destinatarios</button>
              <button onClick={() => onSelect('attachments_links', null, emailData)} className={`w-full rounded-[20px] px-4 py-3 text-left text-sm font-black ${selectedItem?.id === 'attachments_links' ? 'bg-amber-50 text-amber-700 border border-amber-200' : 'bg-white text-slate-700 border border-slate-200'}`}>Adjuntos y enlaces</button>
              <button onClick={() => onSelect('netiquette_calls', null, emailData)} className={`w-full rounded-[20px] px-4 py-3 text-left text-sm font-black ${selectedItem?.id === 'netiquette_calls' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-white text-slate-700 border border-slate-200'}`}>Netiqueta</button>
            </aside>

            <div className="p-4 sm:p-5 space-y-4">
              <div className="rounded-sm border border-slate-200 bg-white p-4">
                <div className="flex flex-wrap gap-2">
                  {['para', 'cc', 'cco'].map((key) => (
                    <button key={key} onClick={() => { setEmailRecipientView(key); onSelect('cc_bcc', null, emailData); }} className={`rounded-full px-3 py-2 text-xs font-black uppercase tracking-widest ${emailRecipientView === key ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-500 border border-slate-200'}`}>{key.toUpperCase()}</button>
                  ))}
                </div>
                <div className="mt-4 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-4">
                  <button onClick={() => onSelect('send_reply', null, emailData)} className={`rounded-[22px] border p-4 text-left ${selectedItem?.id === 'send_reply' ? 'border-sky-200 bg-sky-50 text-sky-800' : 'border-slate-200 bg-slate-50 text-slate-700'}`}>
                    <p className="text-xs font-black uppercase tracking-[0.24em]">Asunto</p>
                    <p className="mt-2 text-sm font-black">Solicitud de informacion sobre el curso</p>
                    <p className="mt-3 text-sm leading-relaxed">Hola, adjunto el documento y respondo al hilo con contexto claro para que la otra persona entienda rapido la accion esperada.</p>
                  </button>
                  <button onClick={() => onSelect('attachments_links', null, emailData)} className={`rounded-[22px] border px-4 py-4 text-left ${selectedItem?.id === 'attachments_links' ? 'border-amber-200 bg-amber-50 text-amber-800' : 'border-slate-200 bg-slate-50 text-slate-700'}`}>
                    <p className="text-xs font-black uppercase tracking-[0.24em]">Adjunto</p>
                    <p className="mt-2 text-sm font-black">CV_AnaLopez_2026.pdf</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={`grid grid-cols-1 xl:grid-cols-[1fr_1fr] gap-6 ${selectedItem?.id === 'inbox_security' || selectedItem?.id === 'cc_bcc' ? '' : 'hidden'}`}>
        <section className={`rounded-sm border p-5 sm:p-6 ${isDark ? 'border-slate-800 bg-slate-900/90' : 'border-slate-200 bg-white'}`}>
          <div className="flex items-center justify-between gap-4 mb-5">
            <div><p className={`text-[11px] font-black uppercase tracking-[0.24em] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Maqueta de bandeja</p><h3 className={`mt-2 text-xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Leer la bandeja con contexto</h3></div>
            <button onClick={() => onSelect('inbox_security', null, emailData)} className={`rounded-full border px-3 py-2 text-xs font-black uppercase tracking-widest ${isDark ? 'border-slate-700 text-slate-300 hover:bg-slate-800' : 'border-slate-300 text-slate-600 hover:bg-slate-50'}`}>Ver ficha</button>
          </div>
          <div className={`rounded-[28px] border overflow-hidden ${isDark ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-slate-50'}`}>{emailInboxMock.map((mail) => <article key={mail.subject} className={`px-4 py-4 border-b last:border-b-0 ${isDark ? 'border-slate-800' : 'border-slate-200'}`}><div className="flex items-start justify-between gap-4"><div><p className={`text-sm font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>{mail.from}</p><p className={`mt-1 text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{mail.subject}</p></div><span className={`rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-widest ${mail.tag === 'Seguro' ? isDark ? 'bg-emerald-500/15 text-emerald-200' : 'bg-emerald-100 text-emerald-700' : isDark ? 'bg-red-500/15 text-red-200' : 'bg-red-100 text-red-700'}`}>{mail.tag}</span></div></article>)}</div>
        </section>

        <section className={`rounded-sm border p-5 sm:p-6 ${isDark ? 'border-slate-800 bg-slate-900/90' : 'border-slate-200 bg-white'}`}>
          <div className="flex items-center justify-between gap-6">
            <div><p className={`text-[11px] font-black uppercase tracking-[0.24em] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Para / CC / CCO</p><h3 className={`mt-2 text-xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Quien debe verlo y quien debe actuar</h3></div>
            <button onClick={() => onSelect('cc_bcc', null, emailData)} className={`rounded-full border px-3 py-2 text-xs font-black uppercase tracking-widest ${isDark ? 'border-slate-700 text-slate-300 hover:bg-slate-800' : 'border-slate-300 text-slate-600 hover:bg-slate-50'}`}>Ver ficha</button>
          </div>
          <div className={`mt-5 inline-flex rounded-full border p-1 ${isDark ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-slate-50'}`}>{Object.keys(emailRecipientCases).map((key) => <button key={key} onClick={() => setEmailRecipientView(key)} className={`rounded-full px-4 py-2 text-sm font-black ${emailRecipientView === key ? 'bg-white text-slate-950 shadow-sm' : isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}>{key.toUpperCase()}</button>)}</div>
          <div className={`mt-5 rounded-[28px] border p-5 ${isDark ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-slate-50'}`}><p className={`text-lg font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>{emailRecipientView.toUpperCase()}</p><p className={`mt-3 text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{emailRecipientCases[emailRecipientView]}</p></div>
        </section>
      </div>

      <div className={`grid grid-cols-1 xl:grid-cols-[1fr_1fr] gap-6 ${selectedItem?.id === 'attachments_links' || selectedItem?.id === 'netiquette_calls' || selectedItem?.id === 'send_reply' ? '' : 'hidden'}`}>
        <section className={`${selectedItem?.id === 'send_reply' ? '' : 'hidden'} rounded-sm border p-5 sm:p-6 ${isDark ? 'border-slate-800 bg-slate-900/90' : 'border-slate-200 bg-white'}`}>
          <div className="flex items-center justify-between gap-4 mb-5">
            <div><p className={`text-[11px] font-black uppercase tracking-[0.24em] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Flujo de respuesta</p><h3 className={`mt-2 text-xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Enviar, responder y reenviar con criterio</h3></div>
          </div>
          <div className="space-y-3">
            {[
              ['Responder', 'Cuando el mensaje te afecta directamente y debes continuar el hilo.'],
              ['Responder a todos', 'Solo si todas las personas necesitan ver la continuacion.'],
              ['Reenviar', 'Cuando debes pasar el contenido a otra persona con contexto adicional.'],
            ].map(([title, text], index) => (
              <div key={title} className={`flex items-start gap-3 rounded-[22px] border p-4 ${isDark ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-slate-50'}`}>
                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-black ${isDark ? 'bg-slate-900 text-sky-300' : 'bg-sky-100 text-sky-700'}`}>{index + 1}</div>
                <div><p className={`font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>{title}</p><p className={`mt-1 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{text}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section className={`rounded-sm border p-5 sm:p-6 ${isDark ? 'border-slate-800 bg-slate-900/90' : 'border-slate-200 bg-white'}`}>
          <div className="flex items-center justify-between gap-4 mb-5">
            <div><p className={`text-[11px] font-black uppercase tracking-[0.24em] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Adjuntos y enlaces</p><h3 className={`mt-2 text-xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Enviar bien un documento</h3></div>
            <button onClick={() => onSelect('attachments_links', null, emailData)} className={`rounded-full border px-3 py-2 text-xs font-black uppercase tracking-widest ${isDark ? 'border-slate-700 text-slate-300 hover:bg-slate-800' : 'border-slate-300 text-slate-600 hover:bg-slate-50'}`}>Ver ficha</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <article className={`rounded-[26px] border p-5 ${isDark ? 'border-emerald-500/20 bg-emerald-500/10' : 'border-emerald-200 bg-emerald-50'}`}><p className={`text-sm font-black uppercase tracking-widest ${isDark ? 'text-emerald-300' : 'text-emerald-700'}`}>Correcto</p><p className={`mt-4 text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Adjunto nombrado como `CV_AnaLopez_2026.pdf` y mensaje que explica claramente lo enviado.</p></article>
            <article className={`rounded-[26px] border p-5 ${isDark ? 'border-amber-500/20 bg-amber-500/10' : 'border-amber-200 bg-amber-50'}`}><p className={`text-sm font-black uppercase tracking-widest ${isDark ? 'text-amber-300' : 'text-amber-700'}`}>Error frecuente</p><p className={`mt-4 text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Archivo llamado `documento-final-bueno-ahora-si.pdf` sin contexto ni explicacion en el correo.</p></article>
          </div>
        </section>

        <section className={`rounded-sm border p-5 sm:p-6 ${isDark ? 'border-slate-800 bg-slate-900/90' : 'border-slate-200 bg-white'}`}>
          <div className="flex items-center justify-between gap-4 mb-5">
            <div><p className={`text-[11px] font-black uppercase tracking-[0.24em] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Tono y netiqueta</p><h3 className={`mt-2 text-xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Correo formal vs descuidado</h3></div>
            <button onClick={() => onSelect('netiquette_calls', null, emailData)} className={`rounded-full border px-3 py-2 text-xs font-black uppercase tracking-widest ${isDark ? 'border-slate-700 text-slate-300 hover:bg-slate-800' : 'border-slate-300 text-slate-600 hover:bg-slate-50'}`}>Ver ficha</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <article className={`rounded-[26px] border p-5 ${isDark ? 'border-emerald-500/20 bg-slate-950' : 'border-emerald-200 bg-slate-50'}`}><p className={`text-sm font-black uppercase tracking-widest ${isDark ? 'text-emerald-300' : 'text-emerald-700'}`}>Bien planteado</p><p className={`mt-4 text-sm font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Asunto: {emailEtiquetteExamples.good.subject}</p><p className={`mt-3 text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{emailEtiquetteExamples.good.body}</p></article>
            <article className={`rounded-[26px] border p-5 ${isDark ? 'border-amber-500/20 bg-slate-950' : 'border-amber-200 bg-slate-50'}`}><p className={`text-sm font-black uppercase tracking-widest ${isDark ? 'text-amber-300' : 'text-amber-700'}`}>Mejorable</p><p className={`mt-4 text-sm font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Asunto: {emailEtiquetteExamples.bad.subject}</p><p className={`mt-3 text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{emailEtiquetteExamples.bad.body}</p></article>
          </div>
        </section>
      </div>
    </div>
  );
}