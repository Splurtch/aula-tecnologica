import { Zap, FileText, Video, Headphones, ShieldCheck, Globe } from 'lucide-react';

export const contentSteps = [
  { step: '01', title: 'Definir estrategia', desc: 'Buyer persona, objetivos, canales' },
  { step: '02', title: 'Crear calendario', desc: 'Frecuencia, formatos, temas' },
  { step: '03', title: 'Producir contenido', desc: 'Escritura, grabación, edición' },
  { step: '04', title: 'Publicar y medir', desc: 'Horarios, métricas, ajustes' },
];

export const contentData = {
  fundamentals: {
    id: 'fundamentals', name: 'Fundamentos del Content Marketing', category: 'Bases', icon: Zap, color: 'blue',
    desc: 'El contenido digital es la moneda del siglo XXI. Pero no todo contenido vale lo mismo.\n\nAntes de escribir una sola palabra, necesitas entender qué quieres conseguir, a quién te diriges y qué formato sirve mejor a tu objetivo.',
    details: 'El embudo de contenido:\n• Awareness: Contenido que atrae y educa\n• Consideration: Contenido que compara y demuestra\n• Decision: Contenido que convierte y cierra\n\nEl secreto está en no vender directamente, sino en resolver problemas reales.',
    pros: ['Crea autoridad y confianza antes de pedir nada.', 'Atrae tráfico orgánico sin depender de publicidad.', 'Educa a tu audiencia sobre lo que ofrecen tus productos o servicios.'],
    cons: ['Los resultados toman tiempo y consistencia.', 'Requiere estrategia, no solo creatividad.', 'El exceso de contenido puede saturar si no es valioso.'],
    examples: 'Un blogpost sobre "5 errores al elegir hosting" atrae a alguien que está investigando. Ese mismo post puede convertirlo en cliente si está bien escrito.',
    tips: ['Define siempre tu Buyer Persona antes de crear contenido.', 'Mide resultados: tráfico, engagement, conversiones.', 'La consistencia supera a la perfección. Publica regularmente.']
  },
  copywriting: {
    id: 'copywriting', name: 'Copywriting Digital', category: 'Escritura', icon: FileText, color: 'purple',
    desc: 'El copywriting es el arte de escribir texto que vende. No se trata de manipular, sino de comunicar con claridad y generar conexión.\n\nUn buen copy hace que el lector sienta que le hablas directamente a él.',
    details: 'Estructura AIDA:\n• Attention: El título atrapa\n• Interest: La introducción mantiene\n• Desire: El cuerpo genera querer\n• Action: El CTA pide\n\nRegla del "uno": Un objetivo por pieza de contenido.',
    pros: ['Aumenta tasas de conversión significativamente.', 'Convierte lectores pasivos en compradores activos.', 'Crea mensajes memorables que se recuerdan.'],
    cons: ['Un mal copy puede destruir la confianza de una marca.', 'Requiere práctica y testing constante.', 'Lo que funciona en un nicho puede fallar en otro.'],
    examples: '"El mejor café del mundo" no es copywriting. "Despierta cada mañana con una taza de café colombiano premium" sí lo es.',
    tools: ['Canva: Para crear imágenes de apoyo y posts con texto impactante.', 'ChatGPT: Para generar borradores y variaciones.', 'Grammarly: Para corregir tono y claridad.'],
    tips: ['Escribe títulos que generen curiosidad o beneficio claro.', 'Edita el doble de lo que escribes.', 'Lee tu copy en voz alta: si suena raro, corrígelo.']
  },
  blogs: {
    id: 'blogs', name: 'Blogs y Artículos', category: 'Escritura Larga', icon: FileText, color: 'emerald',
    desc: 'Un blog bien optimizado es el activo digital más valioso que puedes crear. Atrae visitas mensuales, posiciona en buscadores y te convierte en referente.\n\nPero un blog no es un ensayo. Es una conversación estructurada.',
    details: 'Estructura SEO básica:\n• Título con keyword principal\n• Meta description atractiva (150-160 caracteres)\n• Encabezados H2 y H3 organizados\n• Enlaces internos y externos\n• Imagen con alt text optimizado\n• Conclusión con CTA claro',
    pros: ['Genera tráfico orgánico a largo plazo.', 'Demuestra experiencia y autoridad en tu nicho.', 'Educa a tu audiencia de forma profunda.'],
    cons: ['Requiere tiempo y recursos para crear contenido de calidad.', 'La competencia en muchos nichos es alta.', 'Los resultados de SEO toman meses en verse.'],
    examples: 'Un post de 2000 palabras bien estructurado y optimizado puede generar cientos de visitas mensuales durante años.',
    tools: ['WordPress o Webflow: Para gestionar tu blog.', 'Ahrefs o Ubersuggest: Para investigación de keywords.', 'Canva: Para imágenes destacadas.' ],
    tips: ['Crea un calendario editorial y respétalo.', 'Cada post debe resolver un problema específico.', 'Actualiza posts antiguos con información nueva.']
  },
  social_media: {
    id: 'social_media', name: 'Redes Sociales - Captions y Posts', category: 'RRSS', icon: Globe, color: 'cyan',
    desc: 'Cada red social tiene su propio idioma, su cultura y sus expectativas. Lo que funciona en LinkedIn puede morir en TikTok.\n\nEl secreto no es estar en todas, sino dominar las que mejor connectan con tu audiencia.',
    details: 'Por plataforma:\n• Instagram: Visual-first, captions casuales y storytelling\n• LinkedIn: Tono profesional, artículos largos, datos\n• TikTok/Reels: Hook en 3 segundos, contenido directo\n• X (Twitter): Concisión extrema, hilos, opiniones\n• Facebook: Comunidad, eventos, grupos',
    pros: ['Alcance orgánico sin coste de publicidad.', 'Construcción de comunidad y marca personal.', 'Feedback inmediato sobre qué funciona.'],
    cons: ['Los algoritmos cambian constantemente.', 'Requiere consistencia y tiempo dedicado.', 'El engagement está bajando en muchas plataformas.'],
    examples: 'Un post con imagen generadora de scroll + caption con story + CTA claro supera a posts sin estructura.',
    tools: ['CapCut: Para editar vídeo vertical rápido.', 'Canva: Para crear gráficos y templates.', 'Later o Buffer: Para programar publicaciones.'],
    tips: ['Estudia los formatos que funcionan en tu nicho.', 'Interactúa genuinamente con otros usuarios.', 'Mide solo lo que puedas actuar.']
  },
  video: {
    id: 'video', name: 'Video Marketing', category: 'Multimedia', icon: Video, color: 'red',
    desc: 'El vídeo es el formato rey actual. YouTube, TikTok, Instagram Reels... millones de horas se consumen cada día.\n\nPero grabar no es suficiente. La edición y la estructura determinan el éxito.',
    details: 'Guión básico (hook + contenido + outro):\n• Primeros 3 segundos: Gancho que atrapa\n• Minutos 3-60: Contenido principal con valor\n• Últimos 15 segundos: CTA y retención\n\nEquipo básico:\n• iluminación: Ring light o softbox (no luz directa)\n• Audio: Micrófono de solapa o condensador USB\n• Cámara: Smartphone actual es suficiente',
    pros: ['Alcance orgánico muy alto en todas las plataformas.', 'Humaniza tu marca de forma autenticidad.', 'Convierte mejor que cualquier otro formato.'],
    cons: ['La producción requiere tiempo y habilidades.', 'El algoritmo premia la consistencia extrema.', 'La edición puede volverse adictiva y alargar el proceso.'],
    examples: 'Un vídeo de 60 segundos bien editado supera a uno de 10 minutos sin estructura.',
    tools: ['CapCut: Edición rápida en móvil y desktop.', 'Premiere Pro: Para proyectos más serios.', 'Descript: Editar vídeo como si fuera un documento.' ],
    tips: ['Empieza con equipo mínimo y mejora progresivamente.', 'El contenido importa más que la calidad de producción.', 'Reutiliza un vídeo largo en múltiples clips cortos.']
  },
  podcast: {
    id: 'podcast', name: 'Podcast y Audio Content', category: 'Audio', icon: Headphones, color: 'amber',
    desc: 'El podcast es el formato más íntimo que existe. La gente te escucha mientras conduce, hace ejercicio o cocina.\n\nTu voz es tu instrumento. Aprende a usarla.',
    details: 'Scripting vs Outline:\n• Script completo: Para episodios educativos o formales\n• Outline: Para conversaciones más naturales\n• Improvisación: Para contenido casual\n\nDistribución:\n• Spotify (líder en España)\n• Apple Podcasts (líder mundial)\n• Google Podcasts\n• YouTube (vídeo + audio)',
    pros: ['Construye audiencia muy leal y comprometida.', 'Te posiciona como experto en tu nicho.', 'Genera oportunidades de monetización directa.'],
    cons: ['La producción de audio de calidad es técnica.', 'Los resultados tardan en llegar (6-12 meses).', 'Requiere consistencia extrema (semanal como mínimo).'],
    examples: 'Un podcast semanal de 30 minutos necesita 3-4 horas de trabajo por episodio.',
    tools: ['Audacity: Edición de audio gratuita y potente.', 'Descript: Editar audio como texto + transcripción.', 'Alitu: Editor pensado para podcasters.'],
    tips: ['Graba siempre más de lo que necesitas (edición).', 'Usa siempre auriculares al grabar para evitar eco.', 'Edita los silencios excesivos en post-producción.']
  },
  legal: {
    id: 'legal', name: 'Buenas Prácticas y Legal', category: 'Legal', icon: ShieldCheck, color: 'fuchsia',
    desc: 'Crear contenido tiene responsabilidades. Lo que publicas queda público para siempre.\n\nProteger tu trabajo y respetar los derechos de otros es fundamental.',
    details: 'Derechos de imagen:\n• Siempre pide permiso antes de mostrar a personas\n• Para uso comercial, necesita contrato específico\n• Excepciones: fotografías de eventos públicos\n\nMúsica y propiedad intelectual:\n• Solo usa música royalty-free\n• Atribución requerida según licencia\n• Alternativas: YouTube Audio Library, Epidemic Sound\n\nGDPR y contenido:\n• No spamees con emails de marketing\n• Protege datos personales en formularios',
    pros: ['Evita problemas legales que pueden paralizar tu proyecto.', 'Crea un entorno seguro para tu audiencia.', 'Te diferencia de creadores irresponsables.'],
    cons: ['Requiere documentación y sistemas.', 'Algunas normativas varían por país.', 'La pereza en esto puede costar muy caro.'],
    examples: 'Usar música de YouTube en un reel puede silenciar tu vídeo o generar un strike.',
    tips: ['Mantén un registro de permisos de imágenes.', 'Usa solo música con licencia comercial.', 'Si dudas, no lo uses: siempre hay alternativa.']
  }
};

const SoftwareLogos = {
  canva: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/canva/canva-original.svg',
  capcut: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/capcut/capcut-original.svg',
  audacity: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/audacity/audacity-original.svg',
  descript: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/descript/descript-original.svg',
  alitu: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/podcast/podcast-original.svg',
  chatgpt: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/openai/openai-original.svg',
  notion: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/notion/notion-original.svg',
  instagram: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/instagram/instagram-original.svg',
  wordpress: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/wordpress/wordpress-original.svg',
  youtube: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/youtube/youtube-original.svg',
  chrome: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/googlechrome/googlechrome-original.svg',
  premiere: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/premiere/premiere-original.svg',
};

export const contentTools = {
  canva: { name: 'Canva', category: 'Diseño', description: 'Diseño gráfico rápido para RRSS, presentations y más.', url: 'canva.com', logo: SoftwareLogos.canva },
  capcut: { name: 'CapCut', category: 'Video', description: 'Edición de vídeo profesional en móvil y desktop.', url: 'capcut.com', logo: SoftwareLogos.capcut },
  premiere: { name: 'Premiere Pro', category: 'Video', description: 'Edición de vídeo profesional para proyectos serios.', url: 'adobe.com/premiere', logo: SoftwareLogos.premiere },
  audacity: { name: 'Audacity', category: 'Audio', description: 'Editor de audio gratuito y potente.', url: 'audacityteam.org', logo: SoftwareLogos.audacity },
  descript: { name: 'Descript', category: 'Audio', description: 'Edita audio como texto + transcripción automática.', url: 'descript.com', logo: SoftwareLogos.descript },
  alitu: { name: 'Alitu', category: 'Audio', description: 'Editor simplificado para podcasters.', url: 'alitu.com', logo: SoftwareLogos.alitu },
  chatgpt: { name: 'ChatGPT', category: 'Planificación', description: 'Generación de ideas, borradores y research.', url: 'chat.openai.com', logo: SoftwareLogos.chatgpt },
  notion: { name: 'Notion', category: 'Planificación', description: 'Gestión de calendarios editoriales y notas.', url: 'notion.so', logo: SoftwareLogos.notion },
};

const ContentImages = {
  heroBg: 'https://picsum.photos/seed/tech/800/400',
  socialBg: 'https://picsum.photos/seed/social/400/400',
  videoBg: 'https://picsum.photos/seed/video/400/600',
  blogBg: 'https://picsum.photos/seed/blog/400/300',
};

export { SoftwareLogos, ContentImages };