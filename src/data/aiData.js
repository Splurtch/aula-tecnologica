import { Brain, Terminal, Sparkles, Briefcase, Flame, Library, Headphones, FileSearch, BrainCircuit, Blocks, Presentation, Bot, Palette, Music, Video, Mic } from 'lucide-react';

export const aiData = {
  chatgpt: {
    id: 'chatgpt', name: 'ChatGPT (OpenAI)', category: 'El Generalista', icon: Brain, color: 'emerald',
    desc: '«El manitas, el colega para todo».\n\nEs el modelo más famoso y el que popularizó la IA generativa. Es increíblemente versátil, capaz de ayudarte a redactar correos, planificar un viaje o aprender un nuevo idioma. Es el estándar de oro actual para el usuario medio por su facilidad de uso y su enorme ecosistema.',
    pros: ['Muy versátil y capaz de adaptarse a casi cualquier tarea.', 'Ecosistema gigante (creación de imágenes, análisis de datos, búsqueda web integrada).', 'Instrucciones personalizadas (Custom GPTs).'],
    cons: ['A veces puede generar respuestas muy "genéricas" o sin alma si no se le guía bien.', 'Puede sufrir "alucinaciones" (inventarse datos) creyendo que tiene la razón.'],
    examples: 'Ideal para: Redactar borradores de emails, hacer lluvias de ideas (brainstorming), tutorías personalizadas y uso diario todoterreno.'
  },
  claude: {
    id: 'claude', name: 'Claude (Anthropic)', category: 'El Generalista', icon: Terminal, color: 'amber',
    desc: '«El informático. Y el que te habla como me hablas tú».\n\nCreado por ex-miembros de OpenAI, destaca por tener la "voz" más humana, natural y empática de todos los modelos. Además, es un prodigio absoluto para escribir código de programación y manejar documentos increíblemente largos.',
    pros: ['El tono más natural y humano para escritura creativa o formal.', 'Extraordinario en programación y resolución de problemas lógicos.', 'Puede leer libros enteros de una sentada gracias a su enorme "ventana de contexto".'],
    cons: ['Filtros éticos muy estrictos (a veces se niega a hacer tareas inofensivas por exceso de precaución).', 'Su conexión a internet/búsqueda web no siempre es tan fluida como la de sus rivales.'],
    examples: 'Ideal para: Escribir código informático complejo, analizar PDFs gigantescos o redactar textos que no suenen a "robot".'
  },
  gemini: {
    id: 'gemini', name: 'Gemini (Google)', category: 'El Generalista', icon: Sparkles, color: 'blue',
    desc: '«El manitas con estilo, pero a veces vaguete».\n\nLa respuesta de Google a ChatGPT. Su mayor superpoder es que es "multimodal" de nacimiento, entiende texto, audio, imágenes y vídeo de forma nativa. Además, está profundamente integrado en las herramientas que ya usas (Docs, Gmail, Drive).',
    pros: ['Integración perfecta en el ecosistema de Google Workspace.', 'Multimodal nativo: analiza vídeos de YouTube o imágenes mejor que nadie.', 'Acceso a información en tiempo real usando el buscador de Google.'],
    cons: ['A veces es "vago" o conservador en sus respuestas, dando resúmenes demasiado breves.', 'Puede ser inconsistente dependiendo de la versión que uses (Flash, Pro).'],
    examples: 'Ideal para: Resumir vídeos largos de YouTube, cruzar datos de tu Google Drive o buscar información actual.'
  },
  copilot: {
    id: 'copilot', name: 'Copilot (Microsoft)', category: 'El Generalista', icon: Briefcase, color: 'indigo',
    desc: '«El miniempresario».\n\nBásicamente es la potencia de ChatGPT (ya que Microsoft es socia de OpenAI) pero inyectada directamente en Windows, Edge y la suite de Office (Word, Excel, PowerPoint).',
    pros: ['Usa el motor de GPT-4 (el más avanzado) de forma gratuita.', 'Integrado directamente en tu sistema operativo y herramientas de oficina.', 'Genera imágenes fácilmente con DALL-E.'],
    cons: ['La interfaz puede ser algo torpe o abrumadora.', 'A veces es demasiado agresivo forzando búsquedas en la web con Bing en lugar de razonar.'],
    examples: 'Ideal para: Crear presentaciones de PowerPoint a partir de un Word, o usar IA avanzada gratis sin pagar suscripciones.'
  },
  grok: {
    id: 'grok', name: 'Grok (xAI / Twitter)', category: 'El Generalista', icon: Flame, color: 'red',
    desc: '«El descarado y sin filtros. El cotilla».\n\nDesarrollado por la empresa de Elon Musk, está integrado en la red social X (Twitter). Se enorgullece de tener menos filtros de censura, un modo "divertido/rebelde" y acceso a las noticias al segundo exacto en que ocurren.',
    pros: ['Acceso imbatible a datos y noticias en tiempo real gracias al flujo de Twitter.', 'Respuestas menos filtradas, ideal para temas polémicos o humorísticos.', 'Modo de respuesta rebelde.'],
    cons: ['Puede ser impreciso o verse influenciado por el ruido y las fake news de las redes sociales.', 'Solo disponible bajo suscripción (X Premium).'],
    examples: 'Ideal para: Analizar un evento noticioso que está pasando *ahora mismo* o buscar un tono más sarcástico.'
  },
  perplexity: {
    id: 'perplexity', name: 'Perplexity AI', category: 'Investigación', icon: Library, color: 'cyan',
    desc: '«El intelectual».\n\nNo es un chatbot tradicional para charlar, es un "Motor de Respuesta". En lugar de inventarse cosas, busca exhaustivamente en internet, lee docenas de páginas web y te redacta un informe estructurado citando siempre sus fuentes (como [1], [2]).',
    pros: ['El mejor mitigador de "alucinaciones" al citar fuentes reales comprobables.', 'Excelente para investigación académica o técnica.', 'Te permite elegir qué fuentes buscar (solo YouTube, solo Reddit, webs académicas).'],
    cons: ['No es la mejor opción para escritura creativa, chistes o programación pura.', 'Depende fuertemente de la calidad de los artículos web que encuentre.'],
    examples: 'Ideal para: Trabajos de universidad, investigar sobre una enfermedad, o verificar una noticia.'
  },
  notebooklm: {
    id: 'notebooklm', name: 'NotebookLM (Google)', category: 'Investigación', icon: Headphones, color: 'purple',
    desc: '«El profesor NEXTGEN».\n\nUna herramienta experimental de Google. Le subes tus propios documentos (apuntes, libros, webs) y la IA se convierte en un experto absoluto SOLO sobre esa información. Su función estrella: puede generar un "Podcast" realista donde dos presentadores de IA charlan sobre tus apuntes.',
    pros: ['Cero alucinaciones: Solo usa los datos de los documentos que tú le has dado.', 'Generación de podcasts hiperrealistas para estudiar escuchando.', 'Cruza información de múltiples PDFs en segundos.'],
    cons: ['No es un chatbot general, si le preguntas algo fuera de tus apuntes, no lo sabrá.', 'Aún en fase experimental y algo limitado en opciones de exportación.'],
    examples: 'Ideal para: Estudiar para un examen subiendo todo el temario, o analizar informes financieros pesados de una empresa.'
  },
  kimi: {
    id: 'kimi', name: 'Kimi (Moonshot AI)', category: 'Investigación', icon: FileSearch, color: 'slate',
    desc: '«El hermano pequeño de Claude».\n\nUn modelo asiático que ha ganado mucha popularidad por tener una "ventana de contexto" colosal (puede procesar libros enteros y miles de documentos de una vez) con una eficiencia tremenda.',
    pros: ['Manejo espectacular de documentos extremadamente largos.', 'Suele ser gratuito o muy accesible para cargas pesadas de lectura.', 'Muy rápido en el análisis.'],
    cons: ['Menos popular y pulido en el mercado occidental frente a las grandes marcas estadounidenses.', 'Enfoque muy especializado en lectura más que en creatividad pura.'],
    examples: 'Ideal para: Analizar transcripciones de reuniones larguísimas o leer y resumir novelas enteras.'
  },
  deepseek: {
    id: 'deepseek', name: 'DeepSeek', category: 'Desarrollo y Agentes', icon: BrainCircuit, color: 'blue',
    desc: '«El prodigio matemático / El genio low-cost».\n\nUn modelo de código abierto revolucionario. Sus versiones de razonamiento (R1) han demostrado igualar o superar a modelos millonarios de OpenAI, gastando una fracción mínima de recursos. Piensa "en voz alta" antes de responder.',
    pros: ['Razonamiento matemático y lógico de primer nivel mundial.', 'Altamente eficiente y económico (o gratuito en código abierto).', 'Excelente en programación.'],
    cons: ['Su origen chino genera debates sobre privacidad de datos en entornos empresariales occidentales.', 'La interfaz de usuario suele ser muy básica.'],
    examples: 'Ideal para: Resolver problemas matemáticos complejos, depurar código o ejecutar IA de alto nivel en local.'
  },
  lovable: {
    id: 'lovable', name: 'Lovable', category: 'Desarrollo y Agentes', icon: Blocks, color: 'emerald',
    desc: '«El programador ágil».\n\nNo es un modelo fundacional en sí, sino una plataforma revolucionaria. Escribes lo que quieres en lenguaje natural ("quiero una app para contar calorías") y Lovable diseña y programa la aplicación web completa frente a tus ojos.',
    pros: ['Democratiza la creación de software: no necesitas saber programar.', 'Generación de aplicaciones "Full-Stack" visuales y funcionales en minutos.', 'Muy amigable para el usuario final.'],
    cons: ['Depende de la inteligencia de modelos subyacentes (como Claude).', 'Puede atascarse o fallar si le pides arquitecturas de software extremadamente complejas o raras.'],
    examples: 'Ideal para: Emprendedores que quieren crear un prototipo (MVP) de su idea de app rápidamente sin contratar a un equipo.'
  },
  gamma: {
    id: 'gamma', name: 'Gamma App', category: 'Desarrollo y Agentes', icon: Presentation, color: 'fuchsia',
    desc: '«El diseñador gráfico express».\n\nUna IA especializada en formato visual. Le das un tema o un borrador en texto y automáticamente te genera presentaciones completas de diapositivas, documentos interactivos o páginas web con un diseño muy pulido.',
    pros: ['Ahorra horas de trabajo de diseño y formateo.', 'Resultados visualmente impresionantes al instante.', 'Fácil de editar y retocar después de la generación.'],
    cons: ['No sirve como asistente de chat general.', 'La personalización fina del diseño está más limitada que en herramientas como PowerPoint o Figma.'],
    examples: 'Ideal para: Crear una presentación para clase en 5 minutos a partir de unos apuntes de texto.'
  },
  manus: {
    id: 'manus', name: 'Manus', category: 'Desarrollo y Agentes', icon: Bot, color: 'zinc',
    desc: '«El oficinista autónomo».\n\nRepresenta la nueva ola de "Agentes Autónomos". No solo responde a tus preguntas, sino que puede tomar el control del ordenador (virtualmente) para ejecutar tareas complejas en varios pasos: navegar por webs, hacer clics, rellenar excels y enviarte el resultado.',
    pros: ['Va más allá del chat: ejecuta flujos de trabajo reales.', 'Ahorra tiempo automatizando tareas repetitivas de oficina.', 'Visión de futuro hacia los "agentes de IA" verdaderos.'],
    cons: ['Aún es tecnología experimental.', 'A veces puede quedarse atascado en "bucles" si una web cambia o no encuentra el botón que esperaba.'],
    examples: 'Ideal para: Decirle "Búscame los precios de estos 50 productos en Amazon y ponlos en un Excel" y dejar que trabaje solo.'
  },
  midjourney: {
    id: 'midjourney', name: 'Midjourney', category: 'Multimedia (Imágenes)', icon: Palette, color: 'indigo',
    desc: '«El artista perfeccionista».\n\nEl líder indiscutible en la generación de imágenes hiperrealistas y arte digital a partir de texto (prompting). Aunque no es un LLM tradicional de texto, utiliza tecnología similar de redes neuronales para entender conceptos abstractos que le pides y renderizarlos píxel a píxel.',
    pros: ['Calidad visual, fotorrealismo y coherencia artística sin rival en el mercado.', 'Estilos visuales altamente personalizables (acuarela, 3D, fotografía 35mm).', 'Una comunidad gigantesca que explora y comparte "prompts" constantemente.'],
    cons: ['Requiere el uso de Discord o su propia web para usuarios avanzados, lo que añade una curva de aprendizaje inicial.', 'Es totalmente de pago, no tiene versión gratuita permanente.'],
    examples: 'Ideal para: Crear ilustraciones para un libro infantil, diseñar el concepto visual de un personaje de videojuego, o generar fotografías de producto para una campaña publicitaria sin contratar fotógrafos.'
  },
  suno: {
    id: 'suno', name: 'Suno AI', category: 'Multimedia (Música)', icon: Music, color: 'amber',
    desc: '«El compositor instantáneo».\n\nUna IA revolucionaria especializada en crear canciones completas en segundos. Le describes un tema (por ejemplo, "una balada triste de rock sobre un robot enamorado") y Suno compone la letra, la melodía, los instrumentos y añade una voz vocalista hiperrealista cantando la canción.',
    pros: ['Genera canciones completas y pegadizas con voces sorprendentemente humanas.', 'Soporta infinidad de géneros musicales e idiomas.', 'Permite "extender" las canciones generadas para hacer temas largos de varios minutos.'],
    cons: ['La calidad de audio puede tener a veces un ligero "ruido metálico" o sonar artificial si se fuerza mucho el género.', 'Es difícil tener control exacto y fino sobre notas o instrumentos muy específicos.'],
    examples: 'Ideal para: Crear una canción de cumpleaños personalizada y divertida para un amigo, hacer un jingle musical pegadizo para la intro de un podcast o experimentar componiendo.'
  },
  runway: {
    id: 'runway', name: 'Runway (Gen-3)', category: 'Multimedia (Vídeo)', icon: Video, color: 'fuchsia',
    desc: '«El director de cine».\n\nCompañía pionera en la generación y edición de vídeo con IA. Permite crear clips de vídeo espectaculares a partir de una descripción de texto o animar fotografías estáticas dotándolas de movimiento hiperrealista, física de fluidos e iluminación dinámica.',
    pros: ['Convierte texto o imágenes fijas en vídeo de alta fidelidad y resolución.', 'Herramientas avanzadas de control de cámara (zoom, paneo) y "pincel de movimiento" para decir qué parte de la imagen debe moverse.', 'Utilizado por estudios de Hollywood y agencias creativas.'],
    cons: ['La generación de vídeo consume recursos masivos y es muy costosa (créditos caros).', 'En vídeos largos aún pueden aparecer deformaciones físicas extrañas o "alucinaciones" visuales.'],
    examples: 'Ideal para: Crear planos de recurso (B-roll) cinemáticos para un anuncio, animar un logotipo estático, o dar vida a una escena imaginaria de un guion.'
  },
  elevenlabs: {
    id: 'elevenlabs', name: 'ElevenLabs', category: 'Multimedia (Voz)', icon: Mic, color: 'emerald',
    desc: '«El actor de doblaje».\n\nLa plataforma líder a nivel mundial en síntesis y clonación de voz. Es capaz de leer cualquier texto dotándolo de entonación, emoción real, pausas dramáticas y un realismo que es virtualmente indistinguible de un locutor humano. Además, permite clonar tu propia voz.',
    pros: ['El realismo vocal y la carga emocional más avanzados del mercado.', 'Clonación de voz casi perfecta proporcionando solo unos minutos de audio de muestra.', 'Doblaje automático de vídeos: los traduce a otros idiomas manteniendo tu mismo timbre original.'],
    cons: ['Peligro gigantesco de mal uso ético (suplantación de identidad y Deepfakes de voz telefónica).', 'Las mejores voces y las características profesionales de clonación requieren suscripción de pago.'],
    examples: 'Ideal para: Locutar un audiolibro o documental de forma económica, crear voz en off para un canal de YouTube, o traducir un vídeo propio al inglés sonando exactamente como tú mismo.'
  }
};