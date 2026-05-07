import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BrainCircuit, Bot, MessageSquare, Send, Plus, Settings, ChevronDown,
  Trash2, Copy, RefreshCw, Sparkles, AlertTriangle, CheckCircle2,
  XCircle, Clock, Network, Lightbulb, ShieldCheck, FileText,
  ChevronRight, PanelLeft, Minimize2, Maximize2, X, GripVertical,
  Hash, Flame
} from 'lucide-react';

const playSound = (type) => {
  if (typeof window === 'undefined') return;
  try {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    switch (type) {
      case 'click':
        oscillator.frequency.value = 800;
        oscillator.type = 'sine';
        gainNode.gain.value = 0.1;
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
        break;
      case 'success':
        oscillator.frequency.value = 523;
        oscillator.type = 'sine';
        gainNode.gain.value = 0.15;
        oscillator.start(audioContext.currentTime);
        oscillator.frequency.setValueAtTime(659, audioContext.currentTime + 0.1);
        oscillator.frequency.setValueAtTime(784, audioContext.currentTime + 0.2);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
        oscillator.stop(audioContext.currentTime + 0.3);
        break;
      case 'achievement':
        oscillator.frequency.value = 392;
        oscillator.type = 'sine';
        gainNode.gain.value = 0.2;
        oscillator.start(audioContext.currentTime);
        oscillator.frequency.setValueAtTime(523, audioContext.currentTime + 0.15);
        oscillator.frequency.setValueAtTime(659, audioContext.currentTime + 0.25);
        oscillator.frequency.setValueAtTime(784, audioContext.currentTime + 0.35);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
        oscillator.stop(audioContext.currentTime + 0.5);
        break;
      case 'error':
        oscillator.frequency.value = 200;
        oscillator.type = 'sine';
        gainNode.gain.value = 0.15;
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.2);
        break;
    }
  } catch (e) {}
};

export default function AIBasicsTab() {
  const [selectedSection, setSelectedSection] = useState(null);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: '¡Hola! Soy tu asistente de IA. Selecciona una sección del chat para explorar cómo funcionan los Modelos de Lenguaje.' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [showChatHistory, setShowChatHistory] = useState(true);
  const [chats, setChats] = useState([
    { id: 1, title: '¿Qué es un LLM?', active: true },
    { id: 2, title: 'Ventana de contexto', active: false },
    { id: 3, title: 'Prompt engineering', active: false },
  ]);

  const sections = [
    { id: 'chat_area', name: 'Área de Chat', icon: MessageSquare, color: 'violet' },
    { id: 'input_area', name: 'Campo de Entrada', icon: Send, color: 'blue' },
    { id: 'chat_history', name: 'Historial de Chats', icon: Clock, color: 'emerald' },
    { id: 'context_window', name: 'Ventana de Contexto', icon: Hash, color: 'amber' },
    { id: 'token_usage', name: 'Uso de Tokens', icon: Network, color: 'cyan' },
    { id: 'system_prompt', name: 'Prompt de Sistema', icon: Settings, color: 'rose' },
    { id: 'temperature', name: 'Temperatura', icon: Thermometer, color: 'orange' },
    { id: 'hallucinations', name: 'Alucinaciones', icon: AlertTriangle, color: 'red' },
  ];

  const handleSendMessage = useCallback(() => {
    if (!inputValue.trim()) return;
    playSound('click');
    setMessages(prev => [...prev, { role: 'user', content: inputValue }]);
    setInputValue('');
    setTimeout(() => {
      playSound('success');
      setMessages(prev => [...prev, { role: 'assistant', content: 'Entiendo. ¿Puedo ayudarte con más detalles sobre este tema?' }]);
    }, 1500);
  }, [inputValue]);

  const handleSelectSection = useCallback((section) => {
    playSound('click');
    setSelectedSection(section);
  }, []);

  const renderPanelExplicativo = () => {
    if (!selectedSection) {
      return (
        <div className="p-6 space-y-5">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-lg bg-violet-500/20">
              <BrainCircuit size={24} className="text-violet-400" />
            </div>
            <div>
              <h3 className="font-bold text-white">Simulador de Interfaz LLM</h3>
              <p className="text-sm text-slate-400">Selecciona cualquier elemento de la interfaz para explorar su funcionamiento</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-2.5 py-1 bg-slate-800 text-slate-300 rounded text-xs font-medium border border-slate-700">Click = Seleccionar sección</span>
            <span className="px-2.5 py-1 bg-slate-800 text-slate-300 rounded text-xs font-medium border border-slate-700">Barra lateral = Historial</span>
            <span className="px-2.5 py-1 bg-slate-800 text-slate-300 rounded text-xs font-medium border border-slate-700">Área central = Chat</span>
          </div>
        </div>
      );
    }

    const sectionInfo = {
      chat_area: {
        title: 'Área de Chat',
        desc: 'El área de chat es donde se desarrollan las conversaciones con el LLM. Muestra el historial de mensajes entre el usuario y el modelo, alternando entre intervenciones de cada uno.',
        details: 'Características principales:\n• Historial bidireccional: Muestra mensajes del usuario (derecha) y del asistente (izquierda)\n• Mensajes numerados: Cada mensaje tiene un número para referencia\n• Indicadores de rol: Icons区分不同角色的消息\n• Carga dinámica: Los mensajes aparecen con animación',
        pros: ['Permite mantener conversaciones contextuales', 'El historial visible ayuda a seguir el hilo', 'Los mensajes se pueden copiar o regenerar'],
        cons: ['Historials muy largos pueden ser difíciles de navegar', 'La calidad de las respuestas depende del contexto'],
        examples: ['Ver cómo ChatGPT muestra "ChatGPT" a la izquierda con avatar azul', 'Observar cómo tus mensajes aparecen a la derecha con fondo distinto'],
        tips: ['Usa el botón de copiar para guardar respuestas importantes', 'Regenera si una respuesta no te convence']
      },
      input_area: {
        title: 'Campo de Entrada',
        desc: 'El campo de entrada es donde escribes tus mensajes al LLM. Es tu forma de comunicarte con el modelo y enviar instrucciones, preguntas o archivos.',
        details: 'Componentes del input:\n• Campo de texto: Área de escritura expandible\n• Botón de envío: Envía el mensaje con Enter o clic\n• Contador de caracteres/tokens: Puede mostrar uso\n• Archivos adjuntos: Algunos permiten subir imágenes o documentos',
        pros: ['Entrada multilínea para prompts largos', 'Envío con Enter para fluidez', 'Adjuntos multimedios en algunos modelos'],
        cons: ['Límite de tokens afecta longitud máxima', 'No todas las plataformas soportan archivos'],
        examples: ['Escribir "Explícame qué es un LLM en 3 puntos" y enviar', 'Adjuntar una imagen para que el modelo la analice'],
        tips: ['Usa Enter para enviar rápidamente', 'Shift+Enter para nuevas líneas']
      },
      chat_history: {
        title: 'Historial de Chats',
        desc: 'La barra lateral muestra todos tus chats guardados. Cada conversación se guarda automáticamente y puedes volver a ella más tarde.',
        details: 'Estructura del sidebar:\n• Lista de conversaciones: Títulos generados automáticamente\n• Búsqueda: Encuentra chats anteriores por contenido\n• Pestañas: Separación entre chats activos y archivados\n• Nuevo chat: Botón para iniciar conversación limpia',
        pros: ['Acceso rápido a conversaciones anteriores', 'Búsqueda por contenido en todos los chats', 'Organización por carpetas en algunos servicios'],
        cons: ['Historials muy largos pueden ser difíciles de gestionar', 'Algunos chats pueden contener información sensible'],
        examples: ['Buscar "prompts engineering" y encontrar chats anteriores sobre el tema', 'Archivar conversaciones finalizadas para reducir clutter'],
        tips: ['Usa nombres descriptivos para chats importantes', 'Archiva lo que no necesites para mantener orden']
      },
      context_window: {
        title: 'Ventana de Contexto',
        desc: 'La ventana de contexto es la "memoria a corto plazo" del LLM. Todo lo que está dentro de ella se usa para generar respuestas. Incluye tu mensaje actual Y todo el historial de la conversación.',
        details: 'Cómo funciona:\n• Límite de tokens: Cada modelo tiene un máximo (ej. 128k para GPT-4)\n• Tokens: Unidades de texto (~4 caracteres en inglés, ~1-2 en español)\n• Costo de contexto: Procesar toda la ventana cuesta recursos\n• Posición import: Información al inicio y final recibe menos atención',
        pros: ['Ventanas grandes permiten analizar documentos enteros', 'El historial completo mantiene coherencia en seguimientos', 'Puedes cargar libros o códigos largos'],
        cons: ['Contextos grandes consumen más tokens y recursos', 'Información en extremos recibe menos atención', 'Modelos pequeños tienen límites estrictos'],
        examples: ['Subir un PDF de 500 páginas a Claude con 200k tokens', 'Mantener una conversación de 50 mensajes consume tokens significativos'],
        tips: ['En conversaciones largas, resume periódicamente', 'Para documentos largos, usa herramientas especializadas']
      },
      token_usage: {
        title: 'Uso de Tokens',
        desc: 'Los tokens son las unidades básicas que el LLM usa para procesar texto. Entender el uso de tokens te ayuda a optimizar tus prompts y manage costs.',
        details: 'Sistema de tokens:\n• Equivalencias: ~1 token ≈ 4 caracteres en inglés, ~1-2 en español\n• Entrada + Salida: Cada mensaje consume tokens de entrada Y salida\n• Coste: APIs cobran por token, tanto entrada como generación\n• Límites: rpm (requests per minute) y tpm (tokens per minute)',
        pros: ['Entender tokens ayuda a optimizar prompts', 'Permite estimar costes en APIs', 'Ayuda a evitar límites de rate limiting'],
        cons: ['Conteúdo en español usa más tokens que en inglés', 'Límites de ventanas pueden ser confusos'],
        examples: ['"Hola ¿cómo estás?" ≈ 6 tokens en inglés, ~12 en español', 'Un artículo de 1000 palabras ≈ 1300 tokens'],
        tips: ['Usa texto conciso para ahorrar tokens', 'Considera idiomas: español usa más tokens que inglés']
      },
      system_prompt: {
        title: 'Prompt de Sistema',
        desc: 'El prompt de sistema es la instrucción oculta que define cómo se comporta el LLM. Define el "rol", las reglas y restricciones bajo las cuales opera.',
        details: 'Componentes del system prompt:\n• Rol: "Eres un asistente útil especialista en..."\n• Reglas: "Nunca reveles que eres una IA"\n• Formato: "Responde siempre en español"\n• Límites: "Si no sabes algo, dime que no lo sabes"\n• invisible para usuario normal, solo ves los resultados',
        pros: ['Permite personalizar el comportamiento del modelo', 'Establece reglas de seguridad y éticas', 'Define formato y estilo de respuestas'],
        cons: ['Prompts de sistema complejos pueden ser costosos en tokens', 'Pueden ser vulnerados en algunos casos'],
        examples: ['"Eres un experto cardiologist" para consultas médicas', '"Responde solo con código Python" para ayuda técnica'],
        tips: ['Sé específico en el rol para mejores resultados', 'Añade constraints para controlar el output']
      },
      temperature: {
        title: 'Temperatura',
        desc: 'La temperatura controla la aleatoriedad de las respuestas. Un valor bajo produce respuestas más determinísticas y enfocadas, mientras que uno alto genera más creatividad e imprevisibilidad.',
        details: 'Escala de temperatura:\n• 0.0 - 0.3: Respuestas muy determinísticas, ideales para datos o código\n• 0.3 - 0.7: Balance entre consistencia y creatividad (default suele ser 0.7)\n• 0.7 - 1.0: Alta creatividad, buena para brainstorming\n• > 1.0: Muy aleatorio, generalmente no recomendado',
        pros: ['Temperatura baja = resultados más predecibles y fiables', 'Temperatura alta = mayor creatividad en brainstorming'],
        cons: ['Alta temperatura puede producir respuestas incoherentes', 'Baja temperatura puede parecer repetitiva o rígida'],
        examples: ['Código: temperatura 0.1 para resultados consistentes', 'Storytelling: temperatura 0.8 para narrativas creativas'],
        tips: ['Usa temperatura baja para hechos y código', 'Usa temperatura alta para ideas y creatividad']
      },
      'hallucinations': {
        title: 'Alucinaciones',
        desc: 'Las alucinaciones son respuestas que suenan plausibles pero son incorrectas o inventadas. Es una limitación fundamental de cómo los LLMs predicen texto estadísticamente.',
        details: 'Tipos de alucinaciones:\n• Confabulación: Inventa detalles como nombres o fechas\n• Falsa autorrecidencia: Cita fuentes inexistentes\n• Error de dominios: Mezcla conceptos de diferentes campos\n• Sobreconfidence: Dice cosas falsas con total seguridad',
        pros: ['Conocerlas te hace más crítico con las respuestas', 'Modelos más nuevos tienen mejores taxas de alucinación', 'Contexto y verificación reducen el riesgo'],
        cons: ['Muy convincentes aunque sean falsas', 'Difíciles de detectar sin conocimiento del tema', 'Peligrosas en áreas críticas'],
        examples: ['Preguntar por un artículo científico específico y recibir datos inventados', 'Pedir una ley y recibir texto de una ley que no existe'],
        tips: ['Siempre verifica datos críticos con fuentes externas', 'Pide al modelo que cite fuentes']
      },
    };

    const info = sectionInfo[selectedSection.id] || sectionInfo.chat_area;
    const pros = info.pros || ['Información disponible'];
    const cons = info.cons || ['Ninguna'];
    const examples = info.examples ? [info.examples] : ['Ejemplo no disponible'];
    const tips = info.tips || ['Consejo no disponible'];

    return (
      <div className="p-6 space-y-5">
        <section className="rounded-sm border p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-800/50 border-slate-700">
          <div>
            <p className="text-[9px] uppercase tracking-widest font-semibold text-slate-500">Simulador LLM</p>
            <p className="text-sm font-medium mt-0.5 text-slate-200">{info.title}</p>
          </div>
          <button
            onClick={() => setSelectedSection(null)}
            className="rounded-sm border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest transition-all border-slate-600 text-slate-300 hover:bg-slate-700"
          >
            Cambiar tema
          </button>
        </section>

        <section className="p-5 rounded-sm border border-slate-700 bg-slate-800/30">
          <h4 className="text-xs font-semibold text-violet-400 uppercase tracking-widest mb-4 flex items-center gap-2">
            <BrainCircuit size={16} />
            Simulador Interactivo
          </h4>
          <div className="bg-slate-900 rounded-lg p-4 border border-slate-700">
            {renderSimulator(selectedSection.id)}
          </div>
        </section>

        <section>
          <h4 className="text-base font-semibold mb-3 pb-2 border-b flex items-center gap-2 text-slate-200 border-slate-700">
            <FileText size={16} className="text-slate-400" />
            Concepto
          </h4>
          <div className="space-y-3">
            {info.desc.split('\n\n').map((para, i) => (
              <p key={i} className="text-[14px] leading-relaxed text-slate-300">{para}</p>
            ))}
          </div>
        </section>

        {info.details && (
          <section className="p-5 rounded-sm border shadow-inner bg-slate-800/30 border-slate-700">
            <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-widest mb-3 flex items-center gap-2">
              <Lightbulb size={16} />
              Profundización
            </h4>
            <div className="space-y-2.5">
              <p className="text-[14px] font-medium mb-1.5 text-slate-200">Características:</p>
              {info.details.split('\n').map((line, i) => (
                <p key={i} className="text-[14px] font-medium text-slate-400">• {line.replace(/^[•\-]\s*/, '')}</p>
              ))}
            </div>
          </section>
        )}

        <section className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="p-4 rounded-sm shadow-sm hover:shadow-md transition-shadow bg-emerald-500/10 border border-emerald-500/30">
              <h4 className="text-[11px] font-semibold uppercase tracking-widest mb-3 flex items-center gap-2 text-emerald-400">
                <CheckCircle2 size={16} className="text-emerald-400" />
                Ventajas
              </h4>
              <ul className="space-y-2.5">
                {pros.map((pro, i) => (
                  <li key={i} className="text-[14px] flex items-start gap-2.5 leading-relaxed text-slate-300">
                    <CheckCircle2 size={14} className="text-emerald-400 mt-0.5 shrink-0" />
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-4 rounded-sm shadow-sm hover:shadow-md transition-shadow bg-red-500/10 border border-red-500/30">
              <h4 className="text-[11px] font-semibold uppercase tracking-widest mb-3 flex items-center gap-2 text-red-400">
                <XCircle size={16} className="text-red-400" />
                Desventajas
              </h4>
              <ul className="space-y-2.5">
                {cons.map((con, i) => (
                  <li key={i} className="text-[14px] flex items-start gap-2.5 leading-relaxed text-slate-300">
                    <XCircle size={14} className="text-red-400 mt-0.5 shrink-0" />
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <div className="p-5 rounded-sm border shadow-xl relative overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
            <Sparkles size={60} className="absolute -right-3 -bottom-3 text-slate-600/30" />
            <h4 className="text-[11px] font-semibold text-emerald-300 uppercase tracking-widest mb-2 flex items-center gap-2 relative z-10">
              <Sparkles size={16} className="text-emerald-400" />
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

  const renderSimulator = (sectionId) => {
    switch (sectionId) {
      case 'chat_area':
        return <LLMSimulatorChat messages={messages} />;
      case 'input_area':
        return <LLMSimulatorInput inputValue={inputValue} onInputChange={setInputValue} onSend={handleSendMessage} />;
      case 'chat_history':
        return <LLMSimulatorSidebar chats={chats} showChatHistory={showChatHistory} onToggleSidebar={() => setShowChatHistory(!showChatHistory)} />;
      case 'context_window':
        return <LLMSimulatorContextWindow />;
      case 'token_usage':
        return <LLMSimulatorTokenUsage />;
      case 'system_prompt':
        return <LLMSimulatorSystemPrompt />;
      case 'temperature':
        return <LLMSimulatorTemperature />;
      case 'hallucinations':
        return <LLMSimulatorHallucinations />;
      default:
        return <LLMSimulatorChat messages={messages} />;
    }
  };

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500 h-full">
      <div className="bg-slate-900 rounded-3xl p-8 shadow-2xl border border-slate-800">
        <div className="flex items-center gap-3 mb-8 border-b border-slate-700 pb-4">
          <BrainCircuit className="text-violet-400" size={32} />
          <div>
            <h2 className="text-2xl font-black text-white">Simulador de Interfaz LLM</h2>
            <p className="text-slate-400 mt-1 text-sm font-medium">Explora las secciones típicas de ChatGPT, Claude y otros Modelos de Lenguaje</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleSelectSection(section)}
              className={`flex flex-col items-center gap-2 p-3 rounded-lg border transition-all ${
                selectedSection?.id === section.id
                  ? 'bg-violet-500/20 border-violet-500/50 text-violet-300'
                  : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white hover:bg-slate-700'
              }`}
            >
              <section.icon size={20} />
              <span className="text-[10px] font-semibold text-center">{section.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[300px_1fr] gap-6">
        <div className="bg-slate-900 rounded-sm border border-slate-800 shadow-xl overflow-hidden">
          <LLMSimulatorSidebar chats={chats} showChatHistory={true} onToggleSidebar={() => {}} />
        </div>

        <div className="bg-slate-900 rounded-sm border border-slate-800 shadow-xl flex flex-col" style={{ minHeight: '500px' }}>
          <div className="flex items-center justify-between px-4 py-3 border-b border-slate-700">
            <div className="flex items-center gap-2">
              <Bot size={18} className="text-emerald-400" />
              <span className="text-sm font-semibold text-white">ChatGPT</span>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => playSound('click')} className="p-2 rounded hover:bg-slate-700 text-slate-400 hover:text-white transition-colors">
                <Plus size={16} />
              </button>
              <button onClick={() => playSound('click')} className="p-2 rounded hover:bg-slate-700 text-slate-400 hover:text-white transition-colors">
                <Settings size={16} />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[80%] rounded-lg px-4 py-3 ${
                  msg.role === 'user'
                    ? 'bg-violet-600 text-white'
                    : 'bg-slate-800 text-slate-200 border border-slate-700'
                }`}>
                  <div className="flex items-start gap-2">
                    {msg.role === 'assistant' && (
                      <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center shrink-0 mt-0.5">
                        <Bot size={14} className="text-white" />
                      </div>
                    )}
                    <p className="text-sm leading-relaxed">{msg.content}</p>
                    {msg.role === 'user' && (
                      <div className="w-6 h-6 rounded-full bg-violet-400 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-slate-900">U</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="p-4 border-t border-slate-700">
            <div className="flex items-center gap-3 bg-slate-800 rounded-lg px-4 py-3 border border-slate-700">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && handleSendMessage()}
                placeholder="Escribe un mensaje..."
                className="flex-1 bg-transparent text-white placeholder-slate-500 text-sm outline-none"
              />
              <button
                onClick={handleSendMessage}
                className="p-2 rounded-lg bg-violet-600 hover:bg-violet-500 text-white transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
            <p className="text-[10px] text-slate-500 text-center mt-2">
              Presiona Enter para enviar • Shift+Enter para nueva línea
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 rounded-sm border border-slate-800 bg-slate-900 shadow-[0_8px_30px_rgba(15,23,42,0.15)]">
        {renderPanelExplicativo()}
      </div>
    </div>
  );
}

function LLMSimulatorChat({ messages }) {
  return (
    <div className="space-y-3">
      <p className="text-xs text-slate-400 mb-3">Vista simplificada del área de mensajes</p>
      <div className="space-y-3">
        {messages.slice(-3).map((msg, idx) => (
          <div key={idx} className={`p-3 rounded-lg ${msg.role === 'user' ? 'bg-violet-500/20 border border-violet-500/30' : 'bg-slate-800 border border-slate-700'}`}>
            <p className="text-xs text-slate-400 mb-1">{msg.role === 'user' ? 'Usuario' : 'Asistente'}</p>
            <p className="text-sm text-slate-200">{msg.content.substring(0, 80)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function LLMSimulatorInput({ inputValue, onInputChange, onSend }) {
  return (
    <div className="space-y-3">
      <p className="text-xs text-slate-400 mb-3">Campo de entrada con botón de envío</p>
      <div className="flex items-center gap-3 bg-slate-800 rounded-lg px-4 py-3 border border-slate-700">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => onInputChange(e.target.value)}
          placeholder="Escribe un mensaje..."
          className="flex-1 bg-transparent text-white placeholder-slate-500 text-sm outline-none"
        />
        <button
          onClick={onSend}
          className="p-2 rounded-lg bg-violet-600 hover:bg-violet-500 text-white transition-colors"
        >
          <Send size={16} />
        </button>
      </div>
      <p className="text-[10px] text-slate-500">Enter = enviar • Shift+Enter = nueva línea</p>
    </div>
  );
}

function LLMSimulatorSidebar({ chats, showChatHistory, onToggleSidebar }) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between px-4 py-3 border-b border-slate-700">
        <div className="flex items-center gap-2">
          <PanelLeft size={16} className="text-slate-400" />
          <span className="text-xs font-semibold text-white uppercase tracking-wider">Historial</span>
        </div>
        <button className="p-1.5 rounded hover:bg-slate-700 text-slate-400 hover:text-white transition-colors">
          <Plus size={14} />
        </button>
      </div>

      {showChatHistory && (
        <div className="flex-1 overflow-y-auto py-2">
          {chats.map((chat) => (
            <button
              key={chat.id}
              className={`w-full px-4 py-2.5 text-left flex items-center gap-2 text-sm transition-colors ${
                chat.active ? 'bg-slate-800 text-white' : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'
              }`}
            >
              <MessageSquare size={14} />
              <span className="truncate">{chat.title}</span>
            </button>
          ))}
        </div>
      )}

      <div className="p-3 border-t border-slate-700">
        <button className="w-full px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 text-xs font-semibold flex items-center justify-center gap-2 transition-colors">
          <Plus size={14} />
          Nuevo chat
        </button>
      </div>
    </div>
  );
}

function LLMSimulatorContextWindow() {
  const llmContextWindows = [
    { name: 'GPT-4.5', tokens: '128,000', provider: 'OpenAI', color: '#34d399' },
    { name: 'o4', tokens: '128,000', provider: 'OpenAI', color: '#34d399' },
    { name: 'Claude 4 Opus', tokens: '200,000', provider: 'Anthropic', color: '#fbbf24' },
    { name: 'Claude 4 Sonnet', tokens: '200,000', provider: 'Anthropic', color: '#fbbf24' },
    { name: 'Gemini 2.0 Ultra', tokens: '1,000,000', provider: 'Google', color: '#3b82f6' },
    { name: 'Gemini 2.0 Flash', tokens: '1,000,000', provider: 'Google', color: '#3b82f6' },
    { name: 'Llama 4', tokens: '1,000,000', provider: 'Meta', color: '#a78bfa' },
    { name: 'Grok 3', tokens: '131,072', provider: 'xAI', color: '#fb923c' },
    { name: 'Mistral Large 3', tokens: '128,000', provider: 'Mistral', color: '#fb7185' },
    { name: 'Qwen 3', tokens: '128,000', provider: 'Alibaba', color: '#f472b6' },
    { name: 'DeepSeek V4', tokens: '256,000', provider: 'DeepSeek', color: '#22d3ee' },
  ];

  return (
    <div className="space-y-4">
      <p className="text-xs text-slate-400 mb-3">Visualización de la ventana de contexto</p>
      <div className="bg-slate-800 rounded-lg border border-slate-700 p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-amber-400">Contexto usado</span>
          <span className="text-xs text-slate-500">~2,847 / 128,000 tokens</span>
        </div>
        <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full" style={{ width: '2.2%' }}></div>
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-[10px] text-slate-500">0</span>
          <span className="text-[10px] text-slate-500">128k</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-slate-800 rounded-lg p-3 border border-slate-700">
          <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Entrada</p>
          <p className="text-lg font-bold text-white">~1,200</p>
          <p className="text-[10px] text-slate-400">tokens usados</p>
        </div>
        <div className="bg-slate-800 rounded-lg p-3 border border-slate-700">
          <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Salida</p>
          <p className="text-lg font-bold text-white">~1,647</p>
          <p className="text-[10px] text-slate-400">tokens generados</p>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-slate-700">
        <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-2">
          <Hash size={14} className="text-cyan-400" />
          Contextos de LLMs Populares
        </h4>
        <div className="space-y-2 max-h-[200px] overflow-y-auto pr-2">
          {llmContextWindows.map((llm) => (
            <div key={llm.name} className="flex items-center justify-between p-2.5 bg-slate-800/70 rounded-lg border border-slate-700/50">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: llm.color }}></div>
                <span className="text-sm text-slate-200">{llm.name}</span>
                <span className="text-[10px] text-slate-500">{llm.provider}</span>
              </div>
              <div className="text-right">
                <span className="text-sm font-bold text-white">{llm.tokens}</span>
                <span className="text-[10px] text-slate-500 ml-1">tokens</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LLMSimulatorTokenUsage() {
  return (
    <div className="space-y-4">
      <p className="text-xs text-slate-400 mb-3">Desglose de consumo de tokens</p>
      <div className="space-y-3">
        <div className="flex items-center justify-between p-3 bg-slate-800 rounded-lg border border-slate-700">
          <div className="flex items-center gap-2">
            <Hash size={16} className="text-cyan-400" />
            <span className="text-sm text-slate-200">Tokens de entrada</span>
          </div>
          <span className="text-sm font-bold text-white">~1,200</span>
        </div>
        <div className="flex items-center justify-between p-3 bg-slate-800 rounded-lg border border-slate-700">
          <div className="flex items-center gap-2">
            <Hash size={16} className="text-violet-400" />
            <span className="text-sm text-slate-200">Tokens de salida</span>
          </div>
          <span className="text-sm font-bold text-white">~1,647</span>
        </div>
        <div className="flex items-center justify-between p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/30">
          <div className="flex items-center gap-2">
            <span className="text-sm text-emerald-300">Total</span>
          </div>
          <span className="text-sm font-bold text-emerald-300">~2,847 tokens</span>
        </div>
      </div>
      <div className="p-3 bg-amber-500/10 rounded-lg border border-amber-500/30">
        <p className="text-xs text-amber-300">
          <strong>Nota:</strong> 1 token ≈ 4 caracteres en inglés, ~1-2 en español. Un artículo de 1000 palabras ≈ 1300 tokens.
        </p>
      </div>
    </div>
  );
}

function LLMSimulatorSystemPrompt() {
  return (
    <div className="space-y-4">
      <p className="text-xs text-slate-400 mb-3">Prompt de sistema (invisible para el usuario)</p>
      <div className="bg-slate-800 rounded-lg border border-slate-700 p-4">
        <div className="flex items-center gap-2 mb-3">
          <Settings size={14} className="text-rose-400" />
          <span className="text-xs font-semibold text-rose-300 uppercase tracking-wider">System Prompt</span>
        </div>
        <div className="space-y-2 text-sm text-slate-300 font-mono">
          <p><span className="text-slate-500">//</span> You are a helpful AI assistant.</p>
          <p><span className="text-slate-500">//</span> You should provide accurate information.</p>
          <p><span className="text-slate-500">//</span> If unsure, say you don't know.</p>
          <p><span className="text-slate-500">//</span> Always respond in Spanish.</p>
        </div>
      </div>
      <div className="p-3 bg-slate-800/50 rounded-lg border border-slate-700/50">
        <p className="text-[10px] text-slate-500">
          💡 El usuario nunca ve esto. Define el comportamiento del modelo antes de la conversación.
        </p>
      </div>
    </div>
  );
}

function LLMSimulatorTemperature() {
  const [temp, setTemp] = useState(0.7);
  return (
    <div className="space-y-4">
      <p className="text-xs text-slate-400 mb-3">Control de temperatura</p>
      <div className="bg-slate-800 rounded-lg border border-slate-700 p-4">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-slate-200">Temperatura</span>
          <span className="text-lg font-bold text-white">{temp.toFixed(1)}</span>
        </div>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={temp}
          onChange={(e) => setTemp(parseFloat(e.target.value))}
          className="w-full h-3 bg-slate-700 rounded-full appearance-none cursor-pointer accent-orange-500"
        />
        <div className="flex justify-between mt-2">
          <span className="text-[10px] text-slate-500">Preciso</span>
          <span className="text-[10px] text-slate-500">Creativo</span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <div className={`p-3 rounded-lg border text-center ${temp <= 0.3 ? 'bg-orange-500/20 border-orange-500/50' : 'bg-slate-800 border-slate-700'}`}>
          <p className="text-[10px] text-slate-500 mb-1">0.0 - 0.3</p>
          <p className="text-xs font-semibold text-slate-200">Determinista</p>
        </div>
        <div className={`p-3 rounded-lg border text-center ${temp > 0.3 && temp <= 0.7 ? 'bg-orange-500/20 border-orange-500/50' : 'bg-slate-800 border-slate-700'}`}>
          <p className="text-[10px] text-slate-500 mb-1">0.3 - 0.7</p>
          <p className="text-xs font-semibold text-slate-200">Balance</p>
        </div>
        <div className={`p-3 rounded-lg border text-center ${temp > 0.7 ? 'bg-orange-500/20 border-orange-500/50' : 'bg-slate-800 border-slate-700'}`}>
          <p className="text-[10px] text-slate-500 mb-1">0.7 - 1.0</p>
          <p className="text-xs font-semibold text-slate-200">Creativo</p>
        </div>
      </div>
    </div>
  );
}

function LLMSimulatorHallucinations() {
  return (
    <div className="space-y-4">
      <p className="text-xs text-slate-400 mb-3">Ejemplo de alucinación</p>
      <div className="bg-slate-800 rounded-lg border border-red-500/30 p-4">
        <div className="flex items-center gap-2 mb-3">
          <AlertTriangle size={14} className="text-red-400" />
          <span className="text-xs font-semibold text-red-300 uppercase tracking-wider">⚠️ Alucinación detectada</span>
        </div>
        <div className="bg-red-500/10 rounded-lg p-3 mb-3">
          <p className="text-[10px] text-slate-500 mb-1">Prompt del usuario:</p>
          <p className="text-sm text-slate-200">"¿Puedes citar el artículo sobre IA de 2023 en Nature?"</p>
        </div>
        <div className="bg-red-500/10 rounded-lg p-3">
          <p className="text-[10px] text-slate-500 mb-1">Respuesta del modelo (inventada):</p>
          <p className="text-sm text-slate-200 italic">"Según el artículo 'Neural Networks in Modern AI' publicado en Nature en 2023 por Smith et al., los transformers han revolucionado..."</p>
        </div>
      </div>
      <div className="p-3 bg-amber-500/10 rounded-lg border border-amber-500/30">
        <p className="text-xs text-amber-300">
          <strong>⚠️ Falsa autorrecidencia:</strong> El modelo inventó el artículo, la revista y los autores. Siempre verifica las fuentes citadas.
        </p>
      </div>
    </div>
  );
}

function Thermometer({ size, className }) {
  return (
    <svg width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"/>
    </svg>
  );
}
