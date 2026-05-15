import { useGamification } from '../context/GamificationContext.jsx';

export default function AssessmentView({
  selectedItem, onSelect, isDark, colorMap,
  assessmentOrder, assessmentAssignments, draggingAssessmentItem, draggingOrderItem,
  setAssessmentAssignments, setDraggingAssessmentItem, setAssessmentOrder, setDraggingOrderItem,
  securityQuizSelections, setSecurityQuizSelections,
  emailQuizSelections, setEmailQuizSelections,
  officeQuizSelections, setOfficeQuizSelections,
  softwareQuizSelections, setSoftwareQuizSelections,
  handleSecurityQuizSelect, handleEmailQuizSelect, handleOfficeQuizSelect, handleSoftwareQuizSelect,
  assessmentMixedQuizItems, softwareQuizItems, assessmentData,
  resetAssessmentArea
}) {
  const { quizScore, recordQuizAnswer, resetQuizScore } = useGamification();
  const categoryMeta = {
    system: { label: 'Sistema operativo', accent: isDark ? 'border-indigo-500/30 bg-indigo-500/10 text-indigo-200' : 'border-indigo-200 bg-indigo-50 text-indigo-700' },
    driver: { label: 'Driver o controlador', accent: isDark ? 'border-cyan-500/30 bg-cyan-500/10 text-cyan-200' : 'border-cyan-200 bg-cyan-50 text-cyan-700' },
    app: { label: 'Aplicacion', accent: isDark ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-200' : 'border-emerald-200 bg-emerald-50 text-emerald-700' },
  };

  const handleAssessmentQuiz = (itemId, answer, isCorrect) => {
    recordQuizAnswer(isCorrect);
    if (itemId === 'security-bool') handleSecurityQuizSelect(itemId, answer === 'safe');
    if (itemId === 'email-recipient') handleEmailQuizSelect(itemId, answer);
    if (itemId === 'office-tool') handleOfficeQuizSelect(itemId, answer);
    if (itemId === 'software-layer') handleSoftwareQuizSelect(itemId, answer);
  };

  const getAssessmentSelection = (itemId) => {
    if (itemId === 'security-bool') return securityQuizSelections[itemId] === true ? 'safe' : securityQuizSelections[itemId] === false ? 'risky' : null;
    if (itemId === 'email-recipient') return emailQuizSelections[itemId];
    if (itemId === 'office-tool') return officeQuizSelections[itemId];
    if (itemId === 'software-layer') return softwareQuizSelections[itemId];
    return null;
  };

  const handleAssessmentDrop = (category) => {
    if (!draggingAssessmentItem) return;
    setAssessmentAssignments((current) => ({ ...current, [draggingAssessmentItem]: category }));
    setDraggingAssessmentItem(null);
  };

  const handleOrderDrop = (targetId) => {
    if (!draggingOrderItem || draggingOrderItem === targetId) return;
    const currentIndex = assessmentOrder.indexOf(draggingOrderItem);
    const targetIndex = assessmentOrder.indexOf(targetId);
    if (currentIndex === -1 || targetIndex === -1) return;
    const next = [...assessmentOrder];
    next.splice(currentIndex, 1);
    next.splice(targetIndex, 0, draggingOrderItem);
    setAssessmentOrder(next);
    setDraggingOrderItem(null);
  };

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500">
      <section className={`rounded-sm border p-5 sm:p-6 md:p-8 ${isDark ? 'border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/30' : 'border-slate-200 bg-white shadow-[0_22px_60px_rgba(15,23,42,0.12)]'}`}>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-3xl">
            <p className={`text-[11px] font-black uppercase tracking-[0.25em] ${isDark ? 'text-emerald-300/70' : 'text-emerald-700/70'}`}>Evaluacion final</p>
            <h2 className={`mt-3 text-2xl sm:text-3xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Ponte a prueba con todo el aula</h2>
            <p className={`mt-4 text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Hemos reunido aqui los retos para que el repaso sea mas divertido: preguntas cortas, clasificacion por arrastre y orden de procesos reales.</p>
          </div>
          <button onClick={() => { resetAssessmentArea(); resetQuizScore(); }} className={`rounded-full border px-4 py-3 text-sm font-black uppercase tracking-widest ${isDark ? 'border-slate-700 text-slate-200 hover:bg-slate-800' : 'border-slate-300 text-slate-700 hover:bg-slate-50'}`}>Reiniciar retos</button>
          {quizScore.total > 0 && (
            <div className={`px-4 py-2 rounded-full text-sm font-black ${isDark ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-emerald-50 text-emerald-700 border border-emerald-200'}`}>
              {quizScore.correct}/{quizScore.total} correctas
            </div>
          )}
        </div>
      </section>

      <section className={`rounded-sm border p-5 sm:p-6 ${isDark ? 'border-slate-800 bg-slate-900/90' : 'border-slate-200 bg-white'}`}>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          {assessmentMixedQuizItems.map((item) => {
            const selected = getAssessmentSelection(item.id);
            const isCorrect = selected === item.answer;
            return (
              <article key={item.id} className={`rounded-[26px] border p-5 ${isDark ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-slate-50'}`}>
                <p className={`text-[11px] font-black uppercase tracking-[0.24em] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{item.label}</p>
                <h4 className={`mt-3 text-lg font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.prompt}</h4>
                <div className="grid grid-cols-2 gap-3 mt-5">
                  {item.options.map((option) => (
                    <button key={option.value} onClick={() => handleAssessmentQuiz(item.id, option.value, option.value === item.answer)} className={`rounded-[18px] px-4 py-4 text-left text-sm font-black transition-colors ${selected === option.value ? option.value === item.answer ? 'bg-emerald-500 text-white' : 'bg-red-500 text-white' : isDark ? 'bg-slate-900 text-slate-300 hover:bg-slate-800' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'}`}>{option.label}</button>
                  ))}
                </div>
                {selected && <div className={`mt-4 rounded-sm border p-4 ${isCorrect ? isDark ? 'border-emerald-500/25 bg-emerald-500/10' : 'border-emerald-200 bg-emerald-50' : isDark ? 'border-amber-500/25 bg-amber-500/10' : 'border-amber-200 bg-amber-50'}`}><p className={`text-sm font-black uppercase tracking-widest ${isCorrect ? isDark ? 'text-emerald-300' : 'text-emerald-700' : isDark ? 'text-amber-300' : 'text-amber-700'}`}>{isCorrect ? 'Correcto' : 'Revisa la pista'}</p><p className={`mt-2 text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{item.explanation}</p></div>}
              </article>
            );
          })}
        </div>
      </section>

      <section className={`rounded-sm border p-5 sm:p-6 ${isDark ? 'border-slate-800 bg-slate-900/90' : 'border-slate-200 bg-white'}`}>
        <div className="grid grid-cols-1 xl:grid-cols-[0.9fr_1.1fr] gap-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-1 gap-3">
            {softwareQuizItems.map((item) => (
              <div key={item.id} draggable onDragStart={() => setDraggingAssessmentItem(item.id)} className={`cursor-grab rounded-[22px] border px-4 py-4 ${isDark ? 'border-slate-800 bg-slate-950 text-slate-100' : 'border-slate-200 bg-slate-50 text-slate-900'}`}>
                <p className="text-sm font-black">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.entries(categoryMeta).map(([key, meta]) => (
              <div key={key} onDragOver={(event) => event.preventDefault()} onDrop={() => handleAssessmentDrop(key)} className={`min-h-[240px] rounded-[26px] border p-4 ${meta.accent}`}>
                <p className="text-sm font-black uppercase tracking-widest">{meta.label}</p>
                <div className="mt-4 space-y-3">
                  {softwareQuizItems.filter((item) => assessmentAssignments[item.id] === key).map((item) => (
                    <div key={item.id} className={`rounded-sm border px-4 py-3 text-sm font-black ${isDark ? 'border-white/10 bg-slate-950/70 text-white' : 'border-white bg-white text-slate-900'}`}>{item.label}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`rounded-sm border p-5 sm:p-6 ${isDark ? 'border-slate-800 bg-slate-900/90' : 'border-slate-200 bg-white'}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {assessmentOrder.map((stepId, index) => {
            const step = assessmentData.ordering[stepId];
            return (
              <button key={stepId} draggable onDragStart={() => setDraggingOrderItem(stepId)} onDragOver={(event) => event.preventDefault()} onDrop={() => handleOrderDrop(stepId)} className={`rounded-sm border p-5 text-left ${isDark ? 'border-slate-800 bg-slate-950 text-white' : 'border-slate-200 bg-slate-50 text-slate-900'}`}>
                <span className={`inline-flex rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-[0.24em] ${isDark ? 'bg-slate-900 text-slate-400' : 'bg-white text-slate-500 border border-slate-200'}`}>Paso {index + 1}</span>
                <h4 className="mt-4 text-lg font-black">{step.title}</h4>
                <p className={`mt-2 text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{step.description}</p>
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
}