import React, { useEffect, useState } from 'react';
import FilesView from './views/FilesView.jsx';
import SecurityView from './views/SecurityView.jsx';
import EmailView from './views/EmailView.jsx';
import HardwareView from './views/HardwareView.jsx';
import AIView from './views/AIView.jsx';
import OfficeView from './views/OfficeView.jsx';
import AssessmentView from './views/AssessmentView.jsx';
import RedInstalacionView from './views/RedInstalacionView.jsx';
import RedBasicosView from './views/RedBasicosView.jsx';

import {
  Cpu, HardDrive, Monitor, Keyboard, Mouse, Speaker, Plug,
  CircuitBoard, Fan, Microchip, Gamepad2, Server,
  Rotate3D, Cloud, Laptop, ShieldCheck, Users,
  Database, Globe, FolderSync, Wifi,
  Search, AppWindow, FileText, Image as ImageIcon, Music,
  FolderOpen, Download, Usb, Briefcase,
  ShoppingBag, ShieldAlert, FileQuestion,
  MailWarning, Bug, AlertOctagon, Bot, Sparkles, Brain,
  Terminal, Library, Flame, BrainCircuit, Headphones,
  Presentation, Blocks, FileSearch,
  Palette, Video, Mic, ImagePlus, Moon, Sun, ChevronDown, ChevronRight, Layers, ArrowRight, Menu, X, Move, Trophy, Zap, BadgeCheck, Star, Crown, HelpCircle, Trash2, Cog,
  Radio, Cable, Settings2, Network, Signal, Router, Gauge, AlertTriangle, CheckCircle2, XCircle, User, Calendar,
  Smartphone, Lock, MessageSquare, MessageCircle
} from 'lucide-react';
import { InteractiveButton, KeyboardKey, Layer3D, PanelDerecho, SectionMenuItem } from './components/ui.jsx';
import DesktopTab from './components/DesktopTab.jsx';
import AIBasicsTab from './components/AIBasicsTab.jsx';
import KeyboardView from './views/KeyboardView.jsx';
import NavegadoresView from './views/NavegadoresView.jsx';
import ContentView from './views/ContentView.jsx';
import HomeView from './views/HomeView.jsx';
import PeripheralsView from './views/PeripheralsView.jsx';
import CloudView from './views/CloudView.jsx';
import SoftwareView from './views/SoftwareView.jsx';
import InternetView from './views/InternetView.jsx';
import { useTheme } from './context/ThemeContext.jsx';
import { useApp } from './context/AppContext.jsx';

const BrowserLogos = {
  chrome: 'https://cdnjs.cloudflare.com/ajax/libs/browser-logos/75.0.1/chrome/chrome.svg',
  firefox: 'https://cdnjs.cloudflare.com/ajax/libs/browser-logos/75.0.1/firefox/firefox.svg',
  edge: 'https://cdnjs.cloudflare.com/ajax/libs/browser-logos/75.0.1/edge/edge.svg',
  safari: 'https://cdnjs.cloudflare.com/ajax/libs/browser-logos/75.0.1/safari/safari.svg',
  brave: 'https://cdnjs.cloudflare.com/ajax/libs/browser-logos/75.0.1/brave/brave.svg',
};

const SoftwareLogos = {
  windows: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/windows8/windows8-original.svg',
  apple: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/apple/apple-original.svg',
  linux: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg',
  android: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original.svg',
  chrome: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/googlechrome/googlechrome-original.svg',
  firefox: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/firefox/firefox-original.svg',
  vscode: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg',
  word: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/microsoftword/microsoftword-original.svg',
  excel: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/microsoftexcel/microsoftexcel-original.svg',
  powerpoint: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/microsoftpowerpoint/microsoftpowerpoint-original.svg',
  photoshop: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-original.svg',
  illustrator: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/illustrator/illustrator-original.svg',
  premiere: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/premiere/premiere-original.svg',
  aftereffects: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/aftereffects/aftereffects-original.svg',
  slack: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/slack/slack-original.svg',
  zoom: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/zoom/zoom-original.svg',
  github: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg',
  git: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg',
  npm: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/npm/npm-original.svg',
  python: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
  javascript: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
  react: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
  vue: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg',
  angular: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/angular/angular-original.svg',
  canva: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/canva/canva-original.svg',
  capcut: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/capcut/capcut-original.svg',
  audacity: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/audacity/audacity-original.svg',
  descript: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/descript/descript-original.svg',
  alitu: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/podcast/podcast-original.svg',
  notion: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/notion/notion-original.svg',
  chatgpt: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/openai/openai-original.svg',
  spotify: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/spotify/spotify-original.svg',
  youtube: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/youtube/youtube-original.svg',
  wordpress: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/wordpress/wordpress-original.svg',
  twitter: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/twitter/twitter-original.svg',
  instagram: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/instagram/instagram-original.svg',
  linkedin: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/linkedin/linkedin-original.svg',
  tiktok: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tiktok/tiktok-original.svg',
  behance: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/behance/behance-original.svg',
  dribbble: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/dribbble/dribbble-original.svg',
};

const ContentImages = {
  heroBg: 'https://picsum.photos/seed/tech/800/400',
  socialBg: 'https://picsum.photos/seed/social/400/400',
  videoBg: 'https://picsum.photos/seed/video/400/600',
  blogBg: 'https://picsum.photos/seed/blog/400/300',
};

import { hardwareData } from './data/hardwareData.js';

// ==========================================
// 1B. BASE DE DATOS: PERIFERICOS
// ==========================================
const peripheralData = {
  input_devices: {
    id: 'input_devices', name: 'Perifericos de Entrada', category: 'Entrada de informacion', icon: Keyboard, color: 'blue',
    desc: 'Los perifericos de entrada permiten introducir informacion en el ordenador. Son el puente entre la accion humana y el sistema digital.\n\nCada vez que escribes, haces clic, hablas al microfono o escaneas un documento, estas enviando datos desde el exterior hacia el equipo.',
    details: 'Ejemplos habituales:\n• Teclado: Introduce texto, numeros y comandos.\n• Raton: Señala, selecciona y ejecuta acciones visuales.\n• Microfono: Convierte voz o sonido en informacion digital.\n• Escaner: Digitaliza documentos e imagenes para trabajarlos en pantalla.',
    pros: [
      'Permiten controlar el equipo con precision y comodidad.',
      'Son la base de la interaccion diaria en oficina, aula o casa.',
      'Existen modelos adaptados a accesibilidad y necesidades concretas.'
    ],
    cons: [
      'Su ergonomia influye mucho en la fatiga y la postura.',
      'Un mal dispositivo de entrada puede ralentizar el trabajo y generar errores.',
      'Algunos requieren configuracion o drivers especificos para rendir bien.'
    ],
    examples: 'Casos reales: redactar un trabajo con teclado, manejar una presentacion con el raton, grabar una clase con microfono o escanear formularios en administracion.',
  },
  output_devices: {
    id: 'output_devices', name: 'Perifericos de Salida', category: 'Salida de informacion', icon: Monitor, color: 'emerald',
    desc: 'Los perifericos de salida muestran o reproducen la informacion que procesa el ordenador. Son la forma en la que el sistema devuelve resultados al usuario.\n\nSin ellos, el equipo puede trabajar internamente, pero el usuario no podria ver, escuchar ni interpretar facilmente lo que ocurre.',
    details: 'Ejemplos clave:\n• Monitor o pantalla: Muestra imagenes, interfaces y documentos.\n• Altavoces y auriculares: Reproducen sonido, avisos, musica o clases.\n• Impresora: Transforma contenido digital en papel.\n• Proyector: Amplia la salida visual para grupos o aulas.',
    pros: [
      'Hacen visible y comprensible la informacion procesada.',
      'Permiten adaptar la experiencia a lectura, audio o presentacion.',
      'Son esenciales para formacion, trabajo administrativo y multimedia.'
    ],
    cons: [
      'Una mala calidad de pantalla o sonido afecta mucho a la comprension.',
      'Algunos consumen bastante energia o espacio.',
      'Pueden requerir calibracion, volumen o configuracion especifica.'
    ],
    examples: 'Ejemplos: leer una web en el monitor, escuchar una videoclase con auriculares o imprimir un documento final para entregarlo.',
  },
  io_devices: {
    id: 'io_devices', name: 'Entrada y Salida', category: 'Intercambio bidireccional', icon: Usb, color: 'purple',
    desc: 'Hay perifericos que no se limitan a una sola direccion de informacion. Algunos envian y reciben datos, o permiten una comunicacion continua entre usuario y equipo.\n\nEste grupo es importante porque refleja que muchos dispositivos modernos cumplen varias funciones a la vez.',
    details: 'Ejemplos mixtos:\n• Pantalla tactil: Muestra informacion y tambien recibe pulsaciones.\n• Cascos con microfono: Reproducen sonido y capturan voz.\n• Impresora multifuncion: Imprime, escanea y a veces copia o envia documentos.\n• Mandos y tabletas digitalizadoras: Reciben accion del usuario y devuelven respuesta visual.',
    pros: [
      'Reducen equipos separados al combinar varias funciones.',
      'Mejoran la fluidez en videollamadas, aulas digitales y puestos compactos.',
      'Son muy utiles en movilidad y entornos hibridos.'
    ],
    cons: [
      'Pueden ser mas caros o mas complejos de configurar.',
      'Si fallan, se pierden varias funciones de golpe.',
      'A veces dependen mas de drivers o compatibilidad del sistema.'
    ],
    examples: 'Uso comun: dar clase con un portatil y auriculares con microfono, trabajar con una pantalla tactil o usar una impresora multifuncion en oficina.',
  },
  connectivity_devices: {
    id: 'connectivity_devices', name: 'Almacenamiento y Conexion', category: 'Transferencia de datos', icon: HardDrive, color: 'amber',
    desc: 'Otros perifericos se centran en mover, guardar o transportar informacion entre dispositivos. Aunque a veces pasan desapercibidos, son claves para copia de seguridad, movilidad y ampliacion de capacidades.\n\nAqui entran dispositivos que conectas al equipo para intercambiar datos o ampliar sus posibilidades.',
    details: 'Ejemplos utiles:\n• Pendrive USB: Transporta archivos entre equipos.\n• Disco duro externo: Guarda copias y archivos pesados.\n• Tarjetas SD y lectores: Usados en camaras, moviles y portatiles.\n• Docking stations y hubs: Añaden puertos y conexiones a un solo equipo.',
    pros: [
      'Facilitan copias de seguridad y trabajo en movilidad.',
      'Permiten ampliar almacenamiento o puertos rapidamente.',
      'Son muy utiles para compartir archivos grandes o conectar varios accesorios.'
    ],
    cons: [
      'Si no se expulsan bien, se pueden corromper datos.',
      'Unidades baratas pueden ser lentas o poco fiables.',
      'Transportar informacion externa implica riesgos de perdida o malware.'
    ],
    examples: 'Situaciones frecuentes: pasar fotos de una camara, llevar trabajos en USB, conectar varios perifericos a un portatil o guardar una copia externa del aula.',
  },
};

// ==========================================
// 2. BASE DE DATOS: LOCAL VS NUBE (AMPLIADA)
// ==========================================
const cloudData = {
  local_work: { 
    id: 'local_work', name: 'Trabajo Local', category: 'Entorno Físico Tradicional', icon: Laptop, color: 'emerald', 
    desc: 'El Trabajo Local es el modelo clásico de la informática. Todo el ciclo de vida de la información ocurre dentro de la máquina física que tienes delante de ti.\n\nLos programas que usas (como Photoshop o Microsoft Word) están instalados en tu disco duro. Cuando haces un cálculo complejo o aplicas un filtro a una foto, es TU procesador (CPU) y TU tarjeta gráfica (GPU) los que sudan y hacen el esfuerzo térmico y eléctrico para realizar la tarea.', 
    pros: [
      'Independencia total: No necesitas conexión a Internet. Si se cae el WiFi mundial, tú sigues trabajando.', 
      'Privacidad absoluta: Tus datos físicos están en tu casa. Ninguna gran corporación puede escanearlos o acceder a ellos sin acceso a tu dispositivo.', 
      'Cero Latencia: La respuesta del programa es instantánea. No hay "lag" o retrasos provocados por la conexión de red.',
      'Modelo de pago único: Tradicionalmente, comprabas el software una vez y era tuyo para siempre.'
    ], 
    cons: [
      'Riesgo de pérdida de datos: Si el disco duro se estropea, hay un incendio o te roban el equipo, pierdes TODA la información si no hacías copias de seguridad manuales.', 
      'Limitación de hardware: Si necesitas editar un vídeo 4K pero tu ordenador tiene 4GB de RAM y un procesador antiguo, no podrás hacerlo. Tu techo tecnológico es tu presupuesto de compra.',
      'Mantenimiento: Tú eres el responsable de actualizar el software y de solucionar los problemas de la máquina.'
    ], 
    examples: 'Ejemplos clásicos: Escribir un documento de texto guardado en la carpeta "Mis Documentos", jugar a un videojuego instalado en tu PC desde un CD o Steam, editar fotos de tu boda almacenadas en un pendrive USB.' 
  },
  cloud_work: { 
    id: 'cloud_work', name: 'La Nube (Cloud Computing)', category: 'Entorno Remoto y Escalable', icon: Cloud, color: 'blue', 
    desc: 'El "Cloud Computing" o trabajo en la Nube cambia el paradigma. Tu ordenador o móvil ya no necesita ser potente; solo necesita ser una "ventana" con acceso a Internet.\n\nEn este modelo, te conectas a un Data Center (Centro de Datos). Estos son naves industriales del tamaño de campos de fútbol llenas de miles de servidores superpotentes operados por empresas como Google, Amazon (AWS) o Microsoft. Estos servidores almacenan tu información y realizan los cálculos matemáticos por ti, enviándote solo el resultado visual a tu pantalla.', 
    pros: [
      'Accesibilidad Universal: Puedes empezar un documento en tu portátil en Madrid, editarlo en el metro desde tu móvil, y terminarlo en la tablet de un hotel en Tokio. La información "te persigue".', 
      'Seguridad contra desastres locales: Si tu ordenador explota o se rompe en mil pedazos, no pasa absolutamente nada. Al iniciar sesión en otro PC, todos tus archivos siguen intactos en la nube.', 
      'Potencia Ilimitada: Como el trabajo duro lo hacen los servidores externos, puedes ejecutar simulaciones 3D complejas en un portátil muy básico que apenas tiene potencia.',
      'Trabajo Colaborativo: Permite que múltiples personas modifiquen un archivo al mismo tiempo.'
    ], 
    cons: [
      'Dependencia absoluta de la conexión: Si no tienes Internet, o la conexión es inestable, estás atado de manos y no puedes acceder a tus archivos ni trabajar.', 
      'Privacidad y Soberanía de Datos: Le estás confiando tus archivos personales, fotos y documentos confidenciales a grandes multinacionales. Sus términos y condiciones cambian.',
      'Costes recurrentes: El modelo de negocio suele basarse en suscripciones mensuales eternas (pago por uso) en lugar de una compra única.'
    ], 
    examples: 'Ejemplos cotidianos: Ver una serie en Netflix (el vídeo no está en tu disco duro, se transmite en tiempo real), editar un documento en Google Docs, usar el correo de Gmail, o almacenar las fotos de tu smartphone en iCloud o Google Photos.' 
  },
  internet_sync: { 
    id: 'internet_sync', name: 'La Red y la Sincronización', category: 'El Puente de Comunicación', icon: FolderSync, color: 'amber', 
    desc: 'La conexión de red es el "cable de fibra óptica invisible" que sirve de puente entre el mundo local (tu equipo) y el mundo cloud (los servidores remotos).\n\nPara que la Nube sea útil, se requiere de procesos de Sincronización en Segundo Plano. Esto es un software que constantemente está comparando los archivos de tu ordenador con los del servidor para asegurarse de que ambos tienen la versión más reciente exacta.', 
    pros: [
      'Automatización transparente: El usuario no tiene que acordarse de darle a "subir archivo". El programa sincroniza los cambios de forma automática (ej. Dropbox o OneDrive).', 
      'Versiones históricas: Muchos sistemas de sincronización guardan el "historial" del archivo, permitiéndote recuperar lo que borraste por error ayer.'
    ], 
    cons: [
      'Consumo de Ancho de Banda: Si trabajas con archivos muy pesados (como diseño gráfico de Gigabytes de peso), la sincronización puede saturar tu red WiFi y ralentizar el Internet de toda tu casa.',
      'Conflictos de sincronización: Si editas un documento sin Internet y otra persona lo edita a la vez, al conectarse ambos se generará un "archivo en conflicto" que hay que resolver a mano.'
    ], 
    examples: 'Tecnologías: Redes de Fibra Óptica, conexiones móviles 4G y 5G, Wi-Fi 6. Software de sincronización: Cliente de escritorio de Google Drive, OneDrive en Windows 11, o Apple iCloud Sync.' 
  }
};

// ==========================================
// 3. BASE DE DATOS: NAVEGACIÓN Y AMENAZAS
// ==========================================
const internetData = {
  browsers: { 
    id: 'browsers', name: 'Navegadores Web (Browsers)', category: 'Herramienta de Software Base', icon: AppWindow, color: 'blue', 
    desc: 'Un Navegador Web es la aplicación informática obligatoria que necesitas instalar en tu equipo para poder "traducir" y mostrar las páginas web. Internet es esencialmente código escrito por programadores (HTML, CSS, JavaScript). El navegador lee ese código y lo convierte en las interfaces visuales, botones, textos e imágenes que puedes entender.\n\nAnalogía: Si Internet fuera una red infinita de carreteras, el navegador sería el "coche" que necesitas conducir para poder moverte por ellas.',
    details: 'Mercado de navegadores:\n• Google Chrome: El rey indiscutible (tiene más del 65% de usuarios mundiales). Rápido y con miles de extensiones, pero consume muchísima memoria RAM.\n• Mozilla Firefox: El campeón del código abierto y la privacidad. Una ONG que no rastrea tus datos para vender publicidad.\n• Microsoft Edge: Viene preinstalado en Windows. Ahora es muy rápido y consume menos batería que Chrome en portátiles.\n• Safari: Exclusivo de los dispositivos de Apple (Mac, iPhone, iPad). Altamente optimizado para ahorrar batería.' 
  },
  search_engine: { 
    id: 'search_engine', name: 'Buscadores y Estrategia de Búsqueda', category: 'Recuperación de Información', icon: Search, color: 'purple', 
    desc: 'Mucha gente confunde "Navegador" con "Buscador", pero son cosas muy distintas. El buscador (Search Engine) es una página web específica (como google.com o bing.com) a la que accedes DESDE tu navegador. Es un inmenso índice, como el catálogo de una biblioteca infinita, que rastrea toda la red buscando dónde está la información.\n\nPara buscar eficientemente, no debes hablarle al ordenador como si fuera un humano (ej. no pongas "hola me gustaría saber qué temperatura hace hoy en Madrid"), sino usar "Palabras Clave" (Keywords).',
    details: 'Técnicas de Búsqueda Avanzada (Operadores Booleanos):\n• Comillas Exactas (" "): Si buscas "curso de react gratis", el buscador solo mostrará webs que tengan exactamente esa frase en ese orden, eliminando la basura.\n• Signo Menos (-): Sirve para excluir. Si buscas "receta tortilla -cebolla", te mostrará páginas de tortillas pero filtrará y eliminará automáticamente cualquier receta que mencione la cebolla.\n• Comando SITE: Si buscas "becas site:gob.es", obligarás al buscador a que SOLO busque esa información dentro de páginas oficiales del gobierno español, evitando foros o webs falsas.' 
  },
  scenario_work: { 
    id: 'scenario_work', name: 'Trámites, Empleo y Administración', category: 'Entorno Profesional y Ciudadano', icon: Briefcase, color: 'amber', 
    desc: 'Las competencias digitales son hoy una barrera de entrada para la ciudadanía plena. Internet ha sustituido las colas físicas en las oficinas de registro y la entrega de currículums en mano por plataformas telemáticas 24 horas.\n\nConocer este entorno es fundamental para el desarrollo laboral, la petición de ayudas estatales, la comunicación oficial y la búsqueda activa de empleo.',
    details: 'Escenarios Clave Reales:\n• Administración Electrónica (e-Administration): Uso del Certificado Digital o sistema Cl@ve para acceder a la sede de la Agencia Tributaria (declaración de la renta), Seguridad Social (pedir vida laboral) o el SEPE (gestión de prestaciones).\n• Empleabilidad: Creación de un perfil profesional optimizado en LinkedIn (red social profesional) o en InfoJobs. Envío de currículums en formato inalterable (PDF) mediante correos electrónicos formales.\n• Formación Continua (e-Learning): Búsqueda de cursos subvencionados (Fundae) o plataformas MOOC (Coursera, edX) para mejorar habilidades.' 
  },
  reliable_sources: { 
    id: 'reliable_sources', name: 'Cotejo y Detección de Fake News', category: 'Ciberseguridad y Pensamiento Crítico', icon: ShieldAlert, color: 'emerald', 
    desc: 'Internet democratizó la publicación: hoy cualquier persona puede publicar cualquier cosa, sea cierta, falsa, o intencionadamente manipulada (Fake News / Desinformación). Por tanto, la competencia más importante ya no es encontrar información, sino filtrarla y validar su veracidad.\n\nEl "Cotejo" o contraste de información significa no creerte el primer resultado de tu búsqueda, sino cruzar los datos con al menos 2 o 3 fuentes fiables independientes antes de darlo por válido.',
    details: 'Cómo identificar fuentes fiables y manipulaciones:\n• Verifica la URL (Dirección): ¿La dirección coincide con el organismo que dice ser? Las copias suelen añadir números o guiones raros.\n• Certificado HTTPS: Busca el icono del "candado cerrado" al lado de la dirección. Significa que los datos que envías están encriptados y no pueden ser interceptados.\n• Identidad Institucional: Los dominios .gob.es o .edu.es están restringidos gubernamentalmente y universitariamente. Son altamente fiables.\n• Sensacionalismo: Si el titular de la noticia apela fuertemente al miedo o la indignación extrema, suele ser "Clickbait" (caza-clics) o desinformación.' 
  },
  phishing: {
    id: 'phishing', name: 'Phishing (Robo de Identidad)', category: 'Amenaza de Ingeniería Social', icon: MailWarning, color: 'red',
    desc: 'El Phishing (pesca de datos) es la técnica de estafa más utilizada hoy en día. El ciberdelincuente te envía un mensaje (por correo electrónico, WhatsApp o SMS, llamado "Smishing") disfrazado de una entidad de total confianza, como tu banco, la compañía de la luz, Correos o la Agencia Tributaria.\n\nSuelen usar un tono de máxima urgencia para que actúes por miedo, hagas clic en el enlace adjunto y escribas tus contraseñas en una página web falsa que copia visualmente a la original.',
    details: 'Mecanismos de Defensa Vitales:\n• Cero confianza: TU BANCO NUNCA te enviará un SMS con un enlace pidiéndote que inicies sesión o que des el PIN de tu tarjeta.\n• Ignora la urgencia: Los estafadores usan el pánico para que no pienses. Respira, no hagas clic, y entra tú mismo a la web oficial tecleándola en tu navegador.\n• Faltas de ortografía: Aunque cada vez están mejor hechos, muchos mensajes fraudulentos tienen traducciones extrañas o errores gramaticales.\n• Verifica el remitente real: Si el correo dice ser de iCloud pero la dirección es "soporte-apple-129@hotmail.com", es falso.',
    examples: 'Estafa muy actual: Correos falsos de Google Drive, iCloud o Microsoft advirtiendo: "Tu almacenamiento en la nube está lleno. Actualiza tu método de pago o todas tus fotos y archivos serán borrados hoy". También destacan los SMS falsos de Correos ("Tu paquete está retenido") o de la DGT reclamando una multa impagada.'
  },
  malware: {
    id: 'malware', name: 'Virus y Ransomware', category: 'Software Malicioso', icon: Bug, color: 'fuchsia',
    desc: 'Malware (Malicious Software) es el término general para cualquier programa informático diseñado para infiltrarse en tu dispositivo y causar daño sin tu permiso. Los antiguos "virus" que solo rompían cosas han evolucionado.\n\nHoy en día, el malware busca robar información en secreto (Spyware), usar tu ordenador como "zombi" para atacar a otros (Botnets), o el más peligroso actualmente: el Ransomware, que bloquea y encripta todas tus fotos y documentos exigiendo que pagues un rescate en criptomonedas para recuperarlos.',
    details: 'Cómo se infecta un equipo y cómo evitarlo:\n• Archivos adjuntos: Es la vía de entrada número uno. Nunca descargues ni abras un archivo PDF o ZIP de un remitente que no conoces o que no esperabas.\n• Software Pirata: Descargar programas de pago de forma gratuita ("cracks") es la forma más fácil de instalar un troyano en tu propio ordenador de forma voluntaria.\n• Actualizaciones: Un sistema operativo sin actualizar es como una casa con la puerta abierta. Instala siempre las actualizaciones de Windows o Mac.\n• Antivirus: Hoy en día, herramientas gratuitas integradas como Windows Defender son excelentes. Mantenlas siempre activadas.',
    examples: 'Recibir un correo de un supuesto proveedor con un archivo llamado "Factura_Impagada.zip". Al abrirlo, no es un documento, sino un programa malicioso que bloquea todo tu ordenador y te pide 500€ en Bitcoin para recuperarlo (Ransomware).'
  },
  scams: {
    id: 'scams', name: 'Fraudes y Tiendas Falsas', category: 'Estafas Económicas', icon: AlertOctagon, color: 'amber',
    desc: 'Con el auge del comercio electrónico, han proliferado millones de tiendas online "fantasma". Son páginas web que aparentan vender productos de primeras marcas, pero que en realidad solo buscan cobrarte y desaparecer, o peor aún, robar los números de tu tarjeta de crédito.\n\nSuelen anunciarse de forma muy agresiva en redes sociales (Instagram, Facebook) aprovechando épocas como el Black Friday, Navidad o la temporada de verano.',
    details: 'Señales de Alarma (Red Flags) antes de comprar:\n• El "Chollo" Imposible: Si ves unas zapatillas Nike de 150€ anunciadas por 19€ "por cierre de liquidación", ten por seguro que es una estafa. Nadie regala duros a cuatro pesetas.\n• Textos Legales ausentes: Ve al fondo (footer) de la página. Una tienda legal europea DEBE tener una sección de "Aviso Legal" con el nombre de la empresa, CIF y una dirección física. Si no lo tiene, huye.\n• Pagos extraños: Si a la hora de pagar solo aceptan transferencias bancarias extrañas, Western Union, o piden envíos de dinero como "Amigos o Familia" en PayPal, es un fraude.\n• La prueba del algodón: Busca en Google el nombre de la tienda seguido de la palabra "opiniones" o "estafa". Si es un fraude, otros usuarios ya habrán avisado en foros.',
    examples: 'Anuncios espectaculares en redes sociales de liquidaciones por cierre donde todo está al 80% de descuento. Al comprar, nunca recibes el producto y tus datos bancarios acaban vendidos a terceros.'
  }
};

// ==========================================
// 4. BASE DE DATOS: ARCHIVOS (AMPLIADA)
// ==========================================
const filesData = {
  folders_org: {
    id: 'folders_org', name: 'El Árbol de Directorios', category: 'Estructura Lógica', icon: FolderOpen, color: 'amber',
    desc: 'A nivel interno, tu ordenador no ve archivos flotando. Utiliza un "Sistema de Archivos" jerárquico que tiene forma de árbol invertido. Comienza en una raíz (normalmente el disco "C:\\" en Windows) y de ahí se ramifican "Directorios" (Carpetas), subcarpetas, y finalmente los archivos individuales (hojas).\n\nMantener un entorno estructurado no es solo una cuestión de orden visual, es vital para la recuperación de información. Si tienes 5.000 documentos en el escritorio, encontrarás los archivos más rápido buscando una aguja en un pajar.',
    details: 'Reglas de Oro de Organización (Buenas Prácticas):\n• Nomenclatura Descriptiva: Nunca guardes archivos como "Documento1.docx" o "version_final_final_ahorasi.pdf". Usa un sistema lógico, por ejemplo: [Año]-[Mes]_[Categoría]_[Nombre]. Ej: "2024-03_Factura_Luz_Iberdrola.pdf".\n• Evitar Caracteres Especiales: Para asegurar la compatibilidad universal entre Windows, Mac, Linux y la Web, al nombrar carpetas y archivos NUNCA uses tildes (á, é), espacios en blanco o símbolos raros (@, /, #, *). Sustituye los espacios por guiones bajos (_).\n• Regla de los 3 clics: Deberías poder llegar a cualquier archivo importante de tu trabajo en un máximo de 3 clics dentro de tus carpetas.'
  },
  file_types: {
    id: 'file_types', name: 'Formatos y Extensiones', category: 'Compatibilidad de Datos', icon: FileQuestion, color: 'purple',
    desc: 'Para los ordenadores, absolutamente todo lo que hay en un disco duro son ceros y unos (01010101). ¿Cómo sabe el ordenador que una secuencia de números es una foto tuya y no una canción de rock?\n\nLa respuesta es la Extensión de Archivo. Es el sufijo de 3 o 4 letras que aparece al final del nombre de un archivo, separado por un punto (por ejemplo, "mi_foto.jpg"). Esta extensión es la "etiqueta" que le dice al Sistema Operativo qué programa informático debe utilizar para intentar leer y traducir esos números en algo humano.',
    details: 'Diccionario Básico de Formatos Universales:\n• DOCUMENTOS: .docx (Modificable en Microsoft Word), .xlsx (Hojas de cálculo Excel), .pdf (Portable Document Format - Estándar universal, inalterable, ideal para enviar currículums o contratos).\n• IMÁGENES: .jpg (Ideal para fotografías, con compresión), .png (Soporta fondos transparentes, ideal para logos), .gif (Imágenes animadas breves).\n• AUDIO/VÍDEO: .mp3 (Estándar de música comprimida), .mp4 (Estándar rey para vídeo en web y móviles).\n• COMPRIMIDOS: .zip o .rar (Son como "cajas" que dentro contienen muchos otros archivos empaquetados para que pesen menos al enviarlos por email).'
  },
  storage_drives: {
    id: 'storage_drives', name: 'Gestión de Soportes de Almacenamiento', category: 'Soportes Físicos y Lógicos', icon: Usb, color: 'blue',
    desc: 'Saber organizar archivos incluye saber identificar las diferentes unidades donde puedes ubicarlos. El Sistema Operativo asigna a cada soporte físico (Disco duro, pendrive, CD) una "Letra de Unidad" para poder localizarlos.\n\nEs crucial entender la diferencia entre "Copiar" (clonar el archivo dejando el original donde estaba) y "Mover / Cortar" (llevarse el archivo a otro sitio eliminándolo del origen), para no perder información valiosa al traspasar datos a un pendrive.',
    details: 'Soportes Habituales:\n• Disco C: (Disco Local Principal): Es la unidad de almacenamiento interna por defecto. Es el disco más rápido porque va dentro del ordenador, pero si el equipo se rompe, el disco se queda dentro.\n• Dispositivos Extraíbles (Pendrives USB / Discos Externos): Unidades portátiles. Suelen asignarse con las letras D:, E:, F:. Son vitales para llevar documentos grandes físicamente o hacer Copias de Seguridad (Backups) aisladas.\n• Carpetas en Red / Nube Virtual: Aunque las ves como una carpeta más en tu sistema (ej. Dropbox), físicamente son discos duros en la otra punta del planeta conectados a través de Internet.'
  }
};

// ==========================================
// 2. BASE DE DATOS: REDES (INSTALACIÓN)
// ==========================================
const redInstalacionData = {
  wifi_planning: {
    id: 'wifi_planning', name: 'Planificación de Red WiFi', category: 'Diseño de Red Doméstica', icon: Gauge, color: 'cyan',
    desc: 'Antes de comprar equipos o taladrar agujeros, una buena planificación te ahorra tiempo y dinero. Una red WiFi bien diseñada empieza en papel, no en el router.\n\nEl objetivo es cubrir toda tu casa con señal estable, minimizando zonas muertas y maximizando la velocidad en los puntos donde más la necesitas.',
    pros: ['Cobertura óptima: Un plano bien hecho evita puntos ciegos y repeticiones innecesarias.', 'Presupuesto realista: Saber qué equipos necesitas antes de comprar evita gastos inútiles.', 'Escalabilidad: Una red bien planificada permite añadir dispositivos sin problemas.', 'Resolución de problemas: Entender tu topología facilita diagnosticar fallos.'],
    cons: ['Dedicación inicial: Requiere tiempo dibujar el plano y calcular posiciones.', 'Factores externos: Las paredes de hormigón, espejos y otros routers vecinos pueden afectar.', 'Equipos limitados: Los routers básicos no pueden cubrir casas grandes sin repetidores.'],
    examples: 'Herramientas: NetSpot, WiFi Analyzer, Ekahau HeatMapper. Ejemplo: Casa de 120m² con tres plantas → 1 router central + 2 repetidores.',
    tips: ['Dibuja un plano a escala de tu casa', 'Identifica puntos donde necesitas más velocidad', 'Considera qué habitaciones tienen más paredes', 'Marca la posición del router principal'],
  },
  router_config: {
    id: 'router_config', name: 'Configuración del Router', category: 'Gestión de Dispositivos', icon: Settings2, color: 'blue',
    desc: 'El router es el cerebro de tu red doméstica. Recibe la señal de Internet del proveedor y la reparte entre todos tus dispositivos vía WiFi o cables Ethernet.\n\nAcceder a su panel (normalmente 192.168.1.1) permite cambiar nombre, contraseña, canal y crear red de invitados.',
    pros: ['Control total: Tú decides quién se conecta y cómo.', 'Seguridad: Cambiar la contraseña por defecto es el primer paso contra intrusiones.', 'Optimización: Elegir el canal menos congestionado mejora velocidad hasta 30%.', 'Red de invitados: Mantén visitas separadas de dispositivos principales.'],
    cons: ['Complejidad técnica: Los menús pueden ser abrumadores.', 'Riesgo de lockout: Cambiar ciertos parámetros sin saber puede dejarte sin Internet.', 'Actualizaciones: Firmware desactualizado puede tener vulnerabilidades.'],
    examples: 'Cambiar SSID a "MiCasa_WiFi", contraseña a frase larga segura, desactivar WPS (vulnerable), configurar canal 5GHz.',
    tips: ['Accede a 192.168.1.1 desde tu navegador', 'Busca pestaña "Wireless" o "WiFi Settings"', 'Usa frase como contraseña: "MiPerroY3Gat0s-2024"', 'Activa canal 5GHz si tus dispositivos lo soportan'],
  },
  wifi_bands: {
    id: 'wifi_bands', name: 'Bandas WiFi: 2.4GHz vs 5GHz', category: 'Frecuencias y Rendimiento', icon: Radio, color: 'purple',
    desc: 'Tu router emite en dos frecuencias diferentes. 2.4GHz es como carretera vecinal: más lenta pero llega más lejos y atraviesa paredes. 5GHz es como autopista: mucho más rápida pero con menos alcance.',
    pros: ['2.4GHz: Mayor alcance (~40m), mejor penetración a través de paredes.', '5GHz: Velocidades hasta 6Gbps teóricos, ideal para streaming 4K y gaming.', 'Doble banda: Routers modernos emiten ambas con el mismo nombre, cambiando automáticamente.'],
    cons: ['2.4GHz: Velocidad máx ~600Mbps, congestionada por vecinos y dispositivos.', '5GHz: Alcance reducido (~15m), señal debilitada por paredes gruesas.', 'Dispositivos antiguos: Algunos solo soportan 2.4GHz.'],
    examples: 'Estar en el salón con videollamada → conecta a 5GHz. Estar en el jardín leyendo → 2.4GHz es suficiente.',
    tips: ['Para streaming y gaming → 5GHz', 'Para dispositivos IoT (bombillas, sensores) → 2.4GHz', 'WiFi 6E y WiFi 7 añaden banda de 6GHz'],
  },
  mesh_network: {
    id: 'mesh_network', name: 'Sistemas WiFi Mesh (Mallada)', category: 'Soluciones de Cobertura', icon: Network, color: 'emerald',
    desc: 'Cuando un solo router no puede cubrir toda tu casa, los sistemas WiFi Mesh crean UNA SOLA RED que se extiende por toda la casa.\n\nFunciona con nodos que se hablan entre sí, creando una red única que automáticamente te conecta al nodo más cercano.',
    pros: ['Roaming Seamless: Te mueves por la casa sin cortes perceptibles.', 'Una sola red: No hay que reconectarse manualmente.', 'Autoconfiguración: Los nodos mesh se configuran solos.', 'Gestión centralizada: Una sola app controla todos los nodos.'],
    cons: ['Coste elevado: Sistema mesh de 3 nodos puede costar 150€-400€.', 'Rendimiento en borde: El último nodo puede tener menos velocidad.', 'Ecosistema cerrado: Suelen ser específicos de marca.'],
    examples: 'Para 200m² con 3 plantas → 3 nodos en configuración encadenada, uno por planta.',
    tips: ['Para casas de más de 150m² o varias plantas → considera mesh', 'Los nodos necesitan toma de corriente cerca', 'Coloca nodo principal cerca del router'],
  },
  speed_test: {
    id: 'speed_test', name: 'Diagnóstico y Test de Velocidad', category: 'Medición y Optimización', icon: Signal, color: 'amber',
    desc: 'Saber medir correctamente tu velocidad de Internet es esencial. Un test mide ancho de banda de descarga (Mbps), subida (Mbps) y ping (latencia).\n\nDiferencia: 8 megabits = 1 megabyte. Si descargas a 100Mbps, estás descargando ~12.5MB por segundo.',
    pros: ['Verificación de contrato: Comprueba que tu ISP te da la velocidad contratada.', 'Detección de problemas: Identifica dónde está el cuello de botella.', 'Optimización WiFi: Mide velocidad en diferentes habitaciones.', 'Gratuito: Speedtest.net, Fast.com, nperf.com son gratis y fiables.'],
    cons: ['Velocidad WiFi vs cable: Siempre habrá pérdida en WiFi (hasta 30%).', 'Congestión temporal: La velocidad puede caer en horas punta.', 'Servidor distante: La ubicación del servidor puede afectar resultados.'],
    examples: 'Diagnóstico: 1) Cable Ethernet directo al módem → 500Mbps. 2) WiFi 5GHz junto al router → 450Mbps. 3) WiFi en habitación lejana → 80Mbps → Necesitas mesh.',
    tips: ['Para test preciso: conecta por cable Ethernet', 'Cierra apps en segundo plano', 'Ping bajo (<30ms) es crítico para gaming'],
  },
};

// ==========================================
// 3. BASE DE DATOS: INTERNET (FUNDAMENTOS)
// ==========================================
const redBasicosData = {
  protocolos_ip: {
    id: 'protocolos_ip', name: 'Protocolos y Direcciones IP', category: 'Fundamentos de Red', icon: Cable, color: 'blue',
    desc: 'Internet se basa en "reglas del juego" llamadas protocolos. El más fundamental es TCP/IP, el idioma que hablan todos los dispositivos para comunicarse.\n\nUna dirección IP es como la dirección postal de tu dispositivo en la red. Permite que los datos lleguen al destino correcto.',
    pros: ['Identificación única: Cada dispositivo tiene una IP única, como un DNI.', 'Enrutamiento automático: Los routers dirigen paquetes sin intervención humana.', 'Escalabilidad: Funciona desde 3 hasta miles de millones de dispositivos.', 'Estandarización: TCP/IP es universal.'],
    cons: ['IPv4 agotado: Solo ~4.000 millones de direcciones, insuficiente para IoT.', 'Complejidad técnica: Subredes, puertas de enlace y máscaras pueden ser confusas.', 'Sin seguridad nativa: IP no incluye encriptación.'],
    examples: 'Cuando escribes google.com, un servidor DNS traduce a 142.250.80.46. Tu router envía el paquete hacia el ISP, que lo reenvía por la red troncal.',
    tips: ['IPv4 parece 192.168.1.1, IPv6 parece 2001:0db8...', 'En casa, tu IP privada suele empezar en 192.168.x.x', 'Para ver IP privada: ipconfig en Windows, ifconfig en Mac/Linux'],
  },
  dns_servidores: {
    id: 'dns_servidores', name: 'Sistema DNS', category: 'Traducción de Nombres', icon: Globe, color: 'purple',
    desc: 'DNS (Domain Name System) es como la "agenda telefónica de Internet". Traduce nombres legibles (google.com) a direcciones IP numéricas.\n\nSin DNS, tendrías que memorizar números como 142.250.80.46 para cada web.',
    pros: ['Facilidad de uso: No necesitamos recordar direcciones IP.', 'Caché inteligente: Guarda traducciones recientes para acelerar.', 'Balanceo de carga: Puede dirigirte al servidor más cercano.', 'Desacoplamiento: Empresas pueden cambiar IPs sin que lo notes.'],
    cons: ['Punto único de fallo: Si el DNS cae, no puedes navegar.', 'Ataques de envenenamiento: DNS spoofing puede redirigirte a webs falsas.', 'Censura: Los gobiernos pueden bloquear DNS.', 'Latencia adicional: Cada consulta DNS añade milisegundos.'],
    examples: 'Proceso: 1) Escribes midominio.es. 2) Tu PC pregunta al DNS. 3) Si no tiene caché, pregunta al DNS raíz. 4) Obtienes la IP finalmente.',
    tips: ['Si una web no carga, prueba DNS 8.8.8.8 (Google) o 1.1.1.1 (Cloudflare)', 'Flush DNS cache: ipconfig /flushdns en Windows', 'DNS público más rápido: Cloudflare 1.1.1.1'],
  },
  html_http_https: {
    id: 'html_http_https', name: 'La Web: HTML, HTTP y HTTPS', category: 'Tecnología Web', icon: Globe, color: 'emerald',
    desc: 'Cuando visitas una web, tu navegador descarga código HTML, lo interpreta y lo muestra. HTTP es el protocolo de comunicación; HTTPS es la versión encriptada con certificados TLS/SSL.\n\nHTTPS protege tus datos de oídos indiscretos.',
    pros: ['HTTP: Protocolo simple y eficiente para contenido público.', 'HTTPS: Encriptación que protege contraseñas y datos bancarios.', 'HTML: Estándar universal que funciona en cualquier dispositivo.', 'Certificados gratis: Let\'s Encrypt ofrece TLS gratuito.'],
    cons: ['HTTP sin cifrar: Cualquiera en la misma red puede espiar tu tráfico.', 'Certificados autofirmados: Dan error y no son de confianza.', 'Mezcla de contenido: Webs en HTTPS que cargan HTTP muestran avisos.', 'Complejidad técnica: Implementar HTTPS requiere configuración.'],
    examples: 'HTTP es como enviar postal sin sobre: cualquiera puede leerla. HTTPS es como meter la postal en un sobre sellado.',
    tips: ['Nunca introduzcas contraseñas en webs sin HTTPS (candado)', 'HTTP/3 (QUIC) es la nueva versión más rápida', 'HTTPS Everywhere redirecciona automáticamente a segura'],
  },
  hosting_dominio: {
    id: 'hosting_dominio', name: 'Hosting y Dominio', category: 'Infraestructura Web', icon: Server, color: 'amber',
    desc: 'Para que una web esté en Internet necesitas: dominio (el nombre, como midominio.com) y hosting (el espacio donde viven los archivos, en un servidor).\n\nEl dominio es como el nombre de la tienda; el hosting es el local físico.',
    pros: ['Separación: Puedes cambiar hosting sin cambiar tu nombre.', 'Escalabilidad: Los servicios escalan según el tráfico.', 'Dominios baratos: .com/.es rondan 10-15€/año.', 'CDN global: Cloudflare acelera entrega desde servidores cercanos.'],
    cons: ['Coste variable: Hosting compartido ~5€/mes vs dedicado ~100€/mes.', 'Contratos a largo plazo: Muchos requieren pago anual.', 'Migraciones complicadas: Mover web grande puede ser técnico.', 'Proveedores cuestionables: Algunos sobrevenden servidores.'],
    examples: 'Stack: Dominio en Namecheap + Hosting en Cloudflare Pages (gratis para estáticos) + SSL de Let\'s Encrypt (gratis) = web pro por ~15$/año.',
    tips: ['Si usas WordPress, hosting especializado puede ser mejor', 'Cloudflare Pages ofrece hosting estático gratis con CDN', 'Verifica que el hosting incluye SSL antes de comprar'],
  },
};

// ==========================================
// 4. BASE DE DATOS: NAVEGADORES
// ==========================================
const navegadoresData = {
  chromeMozilla: {
    id: 'chromeMozilla', name: 'Google Chrome vs Mozilla Firefox', category: 'Comparativa de Navegadores', icon: Globe, color: 'blue',
    desc: 'Chrome y Firefox son los dos navegadores principales de código abierto. Chrome pertenece a Google; Firefox es de la fundación Mozilla sin fines de lucro.\n\nDiferencia clave: Firefox NO rastrea tu historial para vender publicidad. Firefox prioriza privacidad; Chrome prioriza integración con ecosistema Google.',
    pros: ['Chrome: Velocidad máxima, extensiones infinitas, sincronización con cuenta Google.', 'Firefox: Código abierto real, mejor privacidad, menor consumo de RAM.', 'Firefox: engine Gecko más respetuoso con estándares web.', 'Chrome: Mejor integración con servicios Google.'],
    cons: ['Chrome: Consumo alto de RAM (cada pestaña es proceso separado).', 'Chrome: Recopilación de datos de uso para Google.', 'Firefox: Menor cantidad de extensiones que Chrome.', 'Firefox: Algunos sitios optimizados solo para Chrome pueden tener problemas.'],
    examples: 'Usuario que vive en ecosistema Google → Chrome. Usuario preocupado por privacidad → Firefox.',
    tips: ['Instala ambos y usa cada uno para lo que mejor se adapte', 'En Firefox, about:config permite ajustes finos', 'Usa Ctrl+Shift+P para ventana privada en Chrome'],
  },
  edgeSafari: {
    id: 'edgeSafari', name: 'Microsoft Edge y Safari', category: 'Navegadores de Sistema', icon: Monitor, color: 'purple',
    desc: 'Edge es el navegador de Microsoft en Windows 10/11. Excelente rendimiento en batería, basado en Chromium, con integración Windows.\n\nSafari es exclusivo de Apple (macOS, iOS). Optimizado para batería, pero solo funciona en dispositivos Apple.',
    pros: ['Edge: Excelente rendimiento en batería vs Chrome.', 'Edge: Colecciones (guardar grupos de pestañas).', 'Safari: Optimización de batería líder en Macs.', 'Safari: Tracking prevention automático.'],
    cons: ['Edge: Preinstalado en Windows, ventaja pero no obligatorio.', 'Safari: Solo funciona en dispositivos Apple.', 'Edge: Colecciones son ecosistema Microsoft.', 'Safari: Algunas webs específicas para Chrome pueden no funcionar perfectamente.'],
    examples: 'MacBook Pro con 10 pestañas: Safari consume 3% CPU vs Chrome 12%. iPhone: Safari es obligatorio por App Store.',
    tips: ['En Windows, Edge es buena opción si Chrome consume demasiada RAM', 'En Mac, Safari + Bitwarden es combo privacidad+velocidad', 'iPhone/iPad: Safari es obligatorio por requisitos App Store'],
  },
  brave: {
    id: 'brave', name: 'Brave', category: 'Navegador Centrado en Privacidad', icon: ShieldAlert, color: 'amber',
    desc: 'Brave es un navegador creado por Brendan Eich (cofundador de Mozilla) que prioriza la privacidad radical del usuario por encima de todo.\n\nSu característica más innovadora es que bloquea automáticamente todos los anuncios y trackers de terceros, y además ofrece un sistema de "Brave Rewards" donde puedes ganar criptomonedas por ver anuncios respetuosos con tu privacidad.',
    pros: ['Bloqueo automático de anuncios y trackers (más rápido que Chrome).', 'Navegación privada activada por defecto.', 'Brave Rewards: gana criptotokens por ver publicidad opcional.', 'Integración de Tor en pestañas privadas para máxima anonimato.', 'Sincronización entre dispositivos cifrada de extremo a extremo.', 'Importa marcadores de Chrome/Firefox fácilmente.'],
    cons: ['Los Brave Rewards pueden resultar confusos al principio.', 'Algunos sitios web no cargan correctamente por el bloqueo agresivo de scripts.', 'El sistema de criptorecompensas es opcional y no muy intuitivo.', 'Menor cantidad de extensiones disponibles comparado con Chrome.', 'Consumo de batería algo mayor que Firefox en móviles.'],
    examples: 'Usuario que quiere máxima privacidad sin configuración manual → Brave. Periodista o investigador que necesita anonimato → Brave con Tor. Usuario cansado de rastreo publicitario → Brave con Rewards.',
    tips: ['Activa Brave Rewards en configuración para ganar Basic Attention Tokens (BAT).', 'Usa la pestaña Tor (ctrl+shift+n) para navegación completamente anónima.', 'Sincroniza tus dispositivos desde Ajustes > Sincronización para tener tus marcadores en todas partes.'],
  },
  busqueda_avanzada: {
    id: 'busqueda_avanzada', name: 'Búsqueda Avanzada y Operadores', category: 'Técnicas de Búsqueda', icon: Search, color: 'cyan',
    desc: 'La mayoría usa Google mal: escribe frases completas como si hablaran con humano. Los operadores booleanos filtran resultados.\n\nGoogle procesa ~3.500 millones de búsquedas/día. Saber buscar te separa del 99% que pierde tiempo.',
    pros: ['Comillas (""): Busca frase exacta, elimina ruido.', 'Guión (-): Excluye términos unwanted.', 'site: Limita a dominio específico (.gob.es, .edu.es).', 'filetype: Busca solo PDFs, DOCs específicos.'],
    cons: ['Sintaxis olvidadiza: Un error y no funciona.', 'No todos los motores soportan todos los operadores.', 'Google personaliza resultados basándose en historial.', 'Búsqueda por voz ha reducido uso de operadores.'],
    examples: '"becasMaster" site:gob.es filetype:pdf -2019 → Solo resultados oficiales PDFs, excluyendo archivos antiguos.',
    tips: ['Usa site:gob.es para información oficial fiable', 'Usa filetype:pdf para documentos específicos', 'Usa - para excluir palabras', 'Combina: "trabajo" "remoto" site:infojobs.net'],
  },
  fake_news: {
    id: 'fake_news', name: 'Detectar Fake News y Desinformación', category: 'Pensamiento Crítico Digital', icon: AlertTriangle, color: 'red',
    desc: 'La habilidad más valiosa no es encontrar información, sino verificar su autenticidad. Fake news están en todas partes.\n\nEl "cotejo" significa no creerte el primer resultado. Cruza con 2-3 fuentes fiables antes de dar algo por válido.',
    pros: ['Pensamiento crítico: Te hace consumidor inteligente.', 'Evita pánico innecesario: Muchas noticias virales son falsas.', 'Protege decisiones: Decisiones basadas en datos falsos llevan a errores.', 'Inmunidad emocional: No caer en manipulación.'],
    cons: ['Requiere esfuerzo: Verificar toma más tiempo.', 'Sesgo de confirmación: Tiendes a creer lo que ya crees.', 'Info que cambia: Lo cierto hoy puede ser falso mañana.', 'Sobrecarga: Verificar todo puede paralizar.'],
    examples: 'Red flags: URL rara (googIe.com con I mayúscula), sitio sin autor, fecha antigua presentada como actual, medio sensacionalista.',
    tips: ['Verifica URL completa: que sea el dominio real', 'Busca el mismo titular en medios conocidos', 'Check Date: muchas noticias falsas son reactivadas', 'Usa Snopes.com o Maldita.es para verificar'],
  },
};

// ==========================================
// 4B. BASE DE DATOS: SOFTWARE
// ==========================================
const softwareData = {
  hardware_layer: {
    id: 'hardware_layer', name: 'Hardware', category: 'Capa física', icon: Cpu, color: 'purple',
    desc: 'El hardware es la parte física del ordenador: procesador, memoria, disco, pantalla, teclado y todos los componentes que puedes tocar.\n\nSin hardware no hay ningún equipo. Es la base sobre la que se construye todo el software, desde el sistema operativo hasta las aplicaciones.',
    details: 'Componentes principales:\n• Procesador (CPU): El cerebro que ejecuta instrucciones.\n• Memoria RAM: Almacenamiento temporal de datos en uso.\n• Disco duro/SSD: Almacenamiento permanente de archivos.\n• Tarjeta gráfica (GPU): Renderiza imagenes y vídeos.\n• Placa base: Conecta todos los componentes entre sí.',
    pros: [
      'Es la base indispensable de cualquier sistema informatico.',
      'Determina que tareas puedes realizar y con que rendimiento.',
      'Los componentes modernos son muy potentes y eficientes.'
    ],
    cons: [
      'Se degrada fisicamente con el tiempo y el uso.',
      'Un componente danado puede afectar a todo el sistema.',
      'Requiere drivers para que el software pueda controlarlo.'
    ],
    examples: 'Ejemplos: el procesador Intel Core i7, 16GB de RAM DDR4, un disco SSD NVMe de 512GB, o la pantalla de 14 pulgadas de un portatil.',
  },
  operating_systems: {
    id: 'operating_systems', name: 'Sistemas Operativos', category: 'Base del software', icon: Monitor, color: 'indigo',
    desc: 'El sistema operativo es el software principal del ordenador. Actua como intermediario entre el hardware y el resto de programas.\n\nSin sistema operativo, el equipo no tendria una interfaz funcional para arrancar, gestionar memoria, abrir archivos o usar dispositivos.',
    details: 'Funciones centrales:\n• Arranque del equipo y gestion de recursos.\n• Coordinacion entre procesador, memoria, discos y periféricos.\n• Interfaz para que el usuario abra programas, carpetas y ajustes.\n• Seguridad, usuarios, permisos y actualizaciones del sistema.',
    pros: [
      'Hace utilizable el hardware para cualquier persona.',
      'Organiza los recursos del equipo y reparte prioridades.',
      'Permite instalar y ejecutar aplicaciones de forma estable.'
    ],
    cons: [
      'Si falla o esta mal configurado, afecta a todo el entorno.',
      'Cada sistema tiene sus compatibilidades y limitaciones.',
      'Requiere mantenimiento, actualizaciones y espacio.'
    ],
    examples: 'Ejemplos comunes: Windows, macOS, Linux, Android e iOS. Todos gestionan el dispositivo, pero con enfoques y ecosistemas distintos.',
  },
  drivers: {
    id: 'drivers', name: 'Drivers y Controladores', category: 'Capa de compatibilidad', icon: Plug, color: 'blue',
    desc: 'Los drivers o controladores son pequeños programas que permiten al sistema operativo comunicarse correctamente con el hardware y los perifericos.\n\nPodriamos decir que son traductores: convierten las ordenes del sistema en instrucciones que una impresora, una tarjeta grafica o un microfono puedan entender.',
    details: 'Casos habituales:\n• Driver de impresora: habilita impresion, calidad y bandejas.\n• Driver de audio: gestiona altavoces, microfono y niveles.\n• Driver grafico: mejora resolucion, rendimiento y aceleracion visual.\n• Driver de red: permite usar WiFi, Ethernet o Bluetooth correctamente.',
    pros: [
      'Hacen posible que el hardware funcione como debe.',
      'Mejoran rendimiento, estabilidad y funciones avanzadas.',
      'Son clave para periféricos especializados y equipos nuevos.'
    ],
    cons: [
      'Un driver incorrecto puede causar fallos o incompatibilidades.',
      'A veces quedan desactualizados y generan errores extraños.',
      'Instalar controladores no oficiales puede comprometer seguridad.'
    ],
    examples: 'Ejemplo real: conectar una impresora nueva y necesitar su controlador para imprimir, escanear y ajustar opciones.',
  },
  applications: {
    id: 'applications', name: 'Aplicaciones y Programas', category: 'Software de uso general', icon: Blocks, color: 'emerald',
    desc: 'Las aplicaciones son los programas que usamos para tareas concretas: escribir, navegar, editar, comunicar, aprender o diseñar.\n\nSi el sistema operativo es la base, las aplicaciones son las herramientas que convierten el ordenador en algo util para estudiar, trabajar y crear.',
    details: 'Tipos de software habitual:\n• Ofimatica: Word, Excel, PowerPoint, Google Docs.\n• Navegacion y comunicacion: Chrome, Edge, Zoom, Teams, correo.\n• Creatividad: editores de imagen, video, audio o diseño.\n• Utilidades: antivirus, compresores, lectores PDF, copias de seguridad.',
    pros: [
      'Resuelven necesidades concretas de usuario.',
      'Permiten personalizar el equipo segun estudios o trabajo.',
      'Existen aplicaciones locales, web y en la nube.'
    ],
    cons: [
      'Demasiados programas pueden saturar el sistema.',
      'No todas las aplicaciones son fiables o seguras.',
      'Algunas dependen de licencias, suscripciones o compatibilidades.'
    ],
    examples: 'Ejemplos: redactar en Word, navegar con Chrome, asistir a clase por Zoom o editar una imagen en Canva o Photoshop.',
  },
  software_stack: {
    id: 'software_stack', name: 'Como se organiza el Software', category: 'Vision de conjunto', icon: Layers, color: 'purple',
    desc: 'Entender el software por capas ayuda mucho a no mezclar conceptos. No es lo mismo el sistema que arranca el equipo, el driver que activa un dispositivo o la app con la que haces una tarea.\n\nEsta vision por capas hace que el usuario entienda mejor los problemas y sepa donde mirar cuando algo falla.',
    details: 'Capas del entorno:\n• Hardware: La parte fisica del equipo.\n• Sistema operativo: Coordina y administra el conjunto.\n• Drivers: Permiten hablar con dispositivos concretos.\n• Aplicaciones: Herramientas finales para el usuario.',
    pros: [
      'Aclara conceptos que suelen confundirse.',
      'Facilita diagnosticar errores y compatibilidades.',
      'Ayuda a aprender informatica con una estructura mental clara.'
    ],
    cons: [
      'Si no se explica bien, muchos usuarios lo perciben abstracto.',
      'En problemas reales varias capas pueden fallar al mismo tiempo.',
      'A veces las apps ocultan el papel del sistema y los drivers.'
    ],
    examples: 'Ejemplo simple: quieres imprimir un PDF. La app abre el archivo, el sistema organiza la tarea, el driver entiende la impresora y el hardware la ejecuta.',
  },
};

const softwareOsExamples = [
  { id: 'windows', name: 'Windows', subtitle: 'Escritorio y aula', logo: SoftwareLogos.windows },
  { id: 'macos', name: 'macOS', subtitle: 'Creatividad y ecosistema Apple', logo: SoftwareLogos.apple },
  { id: 'linux', name: 'Linux', subtitle: 'Codigo abierto y servidores', logo: SoftwareLogos.linux },
  { id: 'android', name: 'Android', subtitle: 'Movil y tablet', logo: SoftwareLogos.android },
  { id: 'ios', name: 'iOS', subtitle: 'iPhone y apps moviles', logo: SoftwareLogos.apple },
];

const softwareOsDetails = {
  windows: {
    id: 'windows', name: 'Windows', focus: 'Muy extendido en educacion, oficina y hogar.', summary: 'Windows suele ser el sistema mas usado en ordenadores del aula y del trabajo. Destaca por compatibilidad con periféricos, programas y entornos muy distintos.', zones: ['Escritorio y barra de tareas', 'Explorador de archivos', 'Configuracion del sistema'],
  },
  macos: {
    id: 'macos', name: 'macOS', focus: 'Entorno muy cuidado y bien integrado con Apple.', summary: 'macOS prioriza una experiencia muy fluida entre dispositivo, sistema y aplicaciones. Se asocia mucho con creatividad, organizacion y continuidad entre equipos Apple.', zones: ['Dock de aplicaciones', 'Finder', 'Ajustes del sistema'],
  },
  linux: {
    id: 'linux', name: 'Linux', focus: 'Alternativa abierta y muy personalizable.', summary: 'Linux es una familia de sistemas abiertos muy valiosa para aprender, reutilizar equipos, trabajar con servidores o entender mejor como se organiza un sistema operativo.', zones: ['Distribucion y escritorio', 'Gestor de paquetes', 'Terminal y permisos'],
  },
  android: {
    id: 'android', name: 'Android', focus: 'Sistema movil muy presente en telefonos y tablets.', summary: 'Android ayuda a entender permisos, apps, ajustes y organizacion en un entorno movil. Es muy importante porque muchas personas acceden a lo digital primero desde aqui.', zones: ['Pantalla de inicio', 'Ajustes y permisos', 'Tienda de aplicaciones'],
  },
  ios: {
    id: 'ios', name: 'iOS', focus: 'Ecosistema movil de Apple, guiado y muy estable.', summary: 'iOS y iPadOS ponen el foco en simplicidad, privacidad y coherencia de uso. Son utiles para aprender como se controla un entorno movil mas cerrado y muy integrado.', zones: ['Pantalla principal', 'Centro de control', 'Ajustes y App Store'],
  },
};

const softwareLicenseModels = {
  closed: {
    id: 'closed', name: 'Código Cerrado', label: 'Codigo cerrado', summary: 'El fabricante controla el codigo, las funciones y la licencia de uso.', color: 'indigo', examples: [
      { name: 'Microsoft Office', use: 'Suite ofimatica comercial para documentos, hojas de calculo y presentaciones.' },
      { name: 'Adobe Photoshop', use: 'Edicion de imagen profesional con licencia propietaria.' },
      { name: 'Windows', use: 'Sistema operativo comercial con soporte y ecosistema cerrado.' },
    ],
  },
  open: {
    id: 'open', name: 'Código Abierto', label: 'Codigo abierto', summary: 'El codigo se puede estudiar, mejorar o redistribuir segun su licencia.', color: 'emerald', examples: [
      { name: 'LibreOffice', use: 'Alternativa libre a Office para escribir, calcular y presentar.' },
      { name: 'GIMP', use: 'Editor de imagen abierto, muy usado en educacion y comunidad.' },
      { name: 'Ubuntu / Linux', use: 'Sistema operativo abierto con muchas distribuciones y personalizacion.' },
    ],
  },
};

const softwareQuizItems = [
  {
    id: 'quiz-driver',
    label: 'Controlador de impresora HP',
    answer: 'driver',
    explanation: 'Es un driver porque traduce la orden del sistema para que la impresora concreta pueda ejecutarla.',
  },
  {
    id: 'quiz-system',
    label: 'Windows 11',
    answer: 'system',
    explanation: 'Es un sistema operativo porque coordina el equipo completo y permite arrancar, gestionar memoria y abrir programas.',
  },
  {
    id: 'quiz-app',
    label: 'LibreOffice Writer',
    answer: 'app',
    explanation: 'Es una aplicacion porque sirve para una tarea concreta: redactar documentos.',
  },
];

const securityData = {
  passwords: {
    id: 'passwords', name: 'Contrasenas y autenticacion', category: 'Acceso seguro', icon: ShieldCheck, color: 'emerald',
    desc: 'Una contrasena fuerte protege el acceso a correo, banca, trabajo y dispositivos. La autenticacion en dos pasos anade una segunda barrera muy valiosa.\n\nLa idea no es recordar claves imposibles a mano, sino usar patrones seguros, gestores de contrasenas y doble verificacion cuando exista.',
    details: 'Buenas practicas:\n• Frases largas y unicas para cada cuenta.\n• Activar verificacion en dos pasos.\n• No reutilizar la misma clave en correo, redes y banca.\n• Usar gestor de contrasenas si el usuario maneja muchas cuentas.',
    pros: ['Reduce robos de cuenta por ataques automatizados.', 'Protege datos personales y documentos sensibles.', 'La verificacion en dos pasos frena muchos accesos no autorizados.'],
    cons: ['Reutilizar claves sigue siendo un error muy frecuente.', 'Sin doble factor, un robo de contrasena deja la cuenta expuesta.', 'Las claves cortas o previsibles se rompen con facilidad.'],
    examples: 'Ejemplo real: si alguien adivina tu clave del correo, puede reiniciar contrasenas de otras plataformas. Por eso el correo es una cuenta critica.',
    tips: ['Prioriza proteger primero correo, banca y almacenamiento en nube.', 'Una frase larga suele ser mejor que una palabra corta con numeros sueltos.', 'El doble factor debe activarse especialmente en cuentas importantes.'],
  },
  phishing_security: {
    id: 'phishing_security', name: 'Phishing y fraudes', category: 'Deteccion de engaños', icon: MailWarning, color: 'red',
    desc: 'El phishing intenta engañar al usuario para que entregue claves, dinero o datos personales mediante correos, mensajes o paginas falsas.\n\nSuelen jugar con urgencia, miedo o premios demasiado buenos para ser verdad.',
    details: 'Pistas de alerta:\n• Mensajes que exigen actuar "ahora mismo".\n• Enlaces raros o remitentes extraños.\n• Archivos adjuntos inesperados.\n• Errores de tono, marca o identidad visual.',
    pros: ['Aprender a reconocer señales reduce mucho el riesgo.', 'El usuario gana criterio para revisar remitentes y enlaces.', 'Sirve tanto para email como para SMS, WhatsApp o redes sociales.'],
    cons: ['Los fraudes cada vez se parecen mas a mensajes reales.', 'En momentos de prisa es facil pulsar sin revisar.', 'Algunos ataques combinan correo, web falsa y llamada telefonica.'],
    examples: 'Ejemplo real: un supuesto banco te pide verificar la cuenta en un enlace que no pertenece al dominio oficial.',
    tips: ['Nunca abras un enlace sensible desde un mensaje dudoso.', 'Entra manualmente a la web oficial si tienes dudas.', 'Revisa remitente, dominio y tono antes de actuar.'],
  },
  privacy_permissions: {
    id: 'privacy_permissions', name: 'Privacidad y permisos', category: 'Control de datos', icon: AppWindow, color: 'purple',
    desc: 'Muchas aplicaciones piden acceso a camara, microfono, ubicacion o archivos. No siempre lo necesitan.\n\nEntender permisos ayuda a evitar exceso de exposicion y a mantener mayor control sobre los datos personales.',
    details: 'Permisos frecuentes:\n• Microfono y camara.\n• Ubicacion en tiempo real.\n• Contactos y calendario.\n• Acceso completo a fotos, archivos o portapapeles.',
    pros: ['Ayuda a decidir con criterio que acceso conceder.', 'Reduce exposicion de informacion innecesaria.', 'Mejora privacidad en movil, navegador y aplicaciones web.'],
    cons: ['Muchos usuarios aceptan permisos sin leer.', 'Un permiso excesivo puede revelar mas datos de los necesarios.', 'En apps mal diseñadas cuesta saber para que se usan realmente.'],
    examples: 'Ejemplo real: una linterna no deberia pedir contactos ni ubicacion constante.',
    tips: ['Revisa permisos tras instalar una app nueva.', 'Si una funcion deja de tener sentido, retira el permiso.', 'En navegador, controla especialmente camara, microfono y notificaciones.'],
  },
  backups_recovery: {
    id: 'backups_recovery', name: 'Copias de seguridad', category: 'Recuperacion y continuidad', icon: FolderSync, color: 'blue',
    desc: 'Las copias de seguridad permiten recuperar archivos ante borrados, averias, ransomware o errores humanos.\n\nUna buena copia no depende de la memoria del usuario: sigue una rutina clara y esta en un lugar distinto al original.',
    details: 'Ideas clave:\n• Copia local en disco externo.\n• Copia en la nube con historial de versiones.\n• Separar archivos de trabajo y respaldo.\n• Comprobar de vez en cuando que la restauracion funciona.',
    pros: ['Evita perder documentos valiosos por accidente.', 'Reduce impacto de averias o malware.', 'Da tranquilidad en estudio, trabajo y administracion.'],
    cons: ['Si nunca se revisan, algunas copias quedan desactualizadas.', 'Guardar copia y original en el mismo sitio no protege de verdad.', 'Muchos usuarios solo piensan en copias cuando ya es tarde.'],
    examples: 'Ejemplo real: un USB se estropea, pero el documento sigue disponible en Drive o en un disco de respaldo.',
    tips: ['Prioriza fotos, documentos y trabajos irremplazables.', 'Automatiza la copia cuando sea posible.', 'Una copia buena debe poder recuperarse con rapidez.'],
  },
  safe_updates: {
    id: 'safe_updates', name: 'Actualizaciones y mantenimiento', category: 'Higiene digital', icon: Download, color: 'amber',
    desc: 'Actualizar sistema, navegador y aplicaciones corrige errores y cierra vulnerabilidades de seguridad.\n\nNo se trata de actualizar por moda, sino de mantener el entorno protegido y estable.',
    details: 'Que conviene mantener al dia:\n• Sistema operativo.\n• Navegador y extensiones.\n• Antivirus o proteccion integrada.\n• Apps con acceso a datos, camara, red o documentos.',
    pros: ['Corrige fallos conocidos de seguridad.', 'Mejora compatibilidad y estabilidad.', 'Reduce problemas con archivos, webs y servicios actuales.'],
    cons: ['Posponer mucho una actualizacion deja el sistema expuesto.', 'A veces una actualizacion requiere reinicio y se aplaza demasiado.', 'No actualizar drivers o navegador causa fallos extraños.'],
    examples: 'Ejemplo real: un navegador sin actualizar puede exponer al usuario a webs maliciosas que ya estarian bloqueadas en la version actual.',
    tips: ['Programa reinicios cuando no interrumpan trabajo importante.', 'Actualiza primero las herramientas mas expuestas: navegador, correo y sistema.', 'Evita instalar software desactualizado desde paginas dudosas.'],
  },
};

const securityPasswordExamples = {
  weak: ['12345678', 'madrid2024', 'nombreperro'],
  strong: ['Bosque!Luz-Cafe-92', 'Aula*Segura_Rio7', 'Nube-Verde+Mapa44'],
};

const securityPermissionCards = [
  { name: 'Camara', risk: 'Permitir solo cuando la app realmente la use.' },
  { name: 'Microfono', risk: 'Muy sensible en videollamadas y apps del navegador.' },
  { name: 'Ubicacion', risk: 'No todas las apps necesitan saber donde estas siempre.' },
  { name: 'Archivos', risk: 'Evita acceso total si solo se necesita un documento concreto.' },
];

const securityQuizItems = [
  { id: 'sec-1', prompt: 'Un correo del banco te mete prisa y te pide pulsar un enlace para "evitar el bloqueo".', safe: false, explanation: 'Es sospechoso porque usa urgencia y un enlace externo para robar credenciales.' },
  { id: 'sec-2', prompt: 'Activas doble factor en tu correo principal y guardas codigos de recuperacion.', safe: true, explanation: 'Es una medida muy recomendable para proteger la cuenta mas critica.' },
  { id: 'sec-3', prompt: 'Una app de linterna pide acceso permanente a ubicacion y contactos.', safe: false, explanation: 'Es un permiso desproporcionado para la funcion que promete la app.' },
];

const emailData = {
  send_reply: {
    id: 'send_reply', name: 'Enviar, responder y reenviar', category: 'Uso basico del correo', icon: FileText, color: 'blue',
    desc: 'El correo electronico sirve para comunicar informacion, dejar constancia y compartir documentos. Saber cuando enviar, responder o reenviar evita errores de contexto.\n\nUn buen uso del correo mejora organizacion, claridad y profesionalidad.',
    details: 'Ideas clave:\n• Enviar inicia una conversacion.\n• Responder mantiene el contexto.\n• Reenviar comparte un mensaje con otra persona.\n• Conviene revisar asunto, destinatario y adjuntos antes de enviar.',
    pros: ['Permite comunicar de forma clara y trazable.', 'Deja registro de acuerdos o instrucciones.', 'Es basico para estudio, empleo y tramites.'],
    cons: ['Responder mal puede sacar de contexto a otras personas.', 'Reenviar sin revisar puede exponer informacion sensible.', 'Enviar deprisa aumenta errores de destinatario o adjuntos.'],
    examples: 'Ejemplo real: reenvias una convocatoria a un compañero pero antes revisas si el mensaje original contiene datos privados.',
    tips: ['Antes de enviar, relee asunto, destinatarios y archivos.', 'Si la respuesta es muy corta, valora si el chat o llamada seria mejor canal.', 'Usa reenviar solo cuando la otra persona realmente necesite ese contexto.'],
  },
  cc_bcc: {
    id: 'cc_bcc', name: 'CC y CCO', category: 'Destinatarios y visibilidad', icon: Users, color: 'purple',
    desc: 'CC muestra a todos los destinatarios adicionales. CCO los oculta al resto.\n\nEntender esta diferencia evita errores de privacidad y ayuda a comunicar de forma mas profesional.',
    details: 'Uso recomendado:\n• Para: destinatario principal.\n• CC: personas informadas que deben ver la conversacion.\n• CCO: destinatarios ocultos cuando no deben verse entre si.',
    pros: ['Mejora orden y claridad en comunicaciones grupales.', 'Protege privacidad cuando se usa CCO correctamente.', 'Evita mezclar quien debe actuar y quien solo necesita estar informado.'],
    cons: ['Poner demasiadas personas en CC genera ruido.', 'Usar mal CCO puede parecer poco transparente si no procede.', 'Muchos usuarios no distinguen entre informar y pedir accion.'],
    examples: 'Ejemplo real: envias una circular a varias familias usando CCO para no exponer sus direcciones.',
    tips: ['Piensa siempre quien debe actuar y quien solo debe enterarse.', 'Para listas grandes, evita exponer correos personales.', 'No llenes CC por costumbre.'],
  },
  attachments_links: {
    id: 'attachments_links', name: 'Adjuntos y enlaces', category: 'Documentos compartidos', icon: Download, color: 'amber',
    desc: 'Al compartir archivos por correo conviene elegir bien entre adjunto y enlace. No siempre interesa lo mismo.\n\nUn adjunto sirve para mandar una copia directa; un enlace sirve mejor cuando el documento se actualiza o necesita permisos.',
    details: 'Buenas practicas:\n• Nombrar bien el archivo.\n• Revisar peso y formato.\n• Comprobar permisos del enlace.\n• Explicar en el cuerpo del correo que se esta compartiendo.',
    pros: ['Facilita el intercambio de documentos y materiales.', 'Los enlaces sirven para trabajo colaborativo.', 'Mejorar nombres y formatos reduce confusiones.'],
    cons: ['Olvidar adjuntar es un error clasico.', 'Un enlace sin permisos correctos bloquea al destinatario.', 'Archivos pesados complican el envio.'],
    examples: 'Ejemplo real: un trabajo final puede ir como PDF adjunto, mientras un documento en curso conviene compartirlo por Drive con enlace.',
    tips: ['Si el archivo sigue cambiando, mejor enlace que adjunto.', 'Si es una version cerrada, PDF suele ser buena salida.', 'Menciona siempre el archivo en el texto del mensaje.'],
  },
  inbox_security: {
    id: 'inbox_security', name: 'Spam, phishing y bandeja segura', category: 'Revision critica', icon: ShieldAlert, color: 'red',
    desc: 'No todo lo que llega a la bandeja merece confianza. Una bandeja segura depende de revisar remitente, asunto, enlaces y tono.\n\nEl correo sigue siendo una de las puertas principales de fraude digital.',
    details: 'Que revisar:\n• Remitente real.\n• Asuntos alarmistas o premios exagerados.\n• Enlaces acortados o dominios raros.\n• Adjuntos inesperados.',
    pros: ['Mejora criterio al leer mensajes.', 'Reduce riesgo de robo de cuenta o malware.', 'Ayuda tambien con SMS y mensajeria.'],
    cons: ['Algunos correos falsos imitan muy bien marcas reales.', 'La prisa hace caer incluso a usuarios experimentados.', 'No basta con mirar el logo del mensaje.'],
    examples: 'Ejemplo real: un correo de "entrega fallida" intenta que abras un enlace o archivo para robar datos.',
    tips: ['Desconfia de urgencias y premios repentinos.', 'Busca el servicio desde su web oficial si tienes dudas.', 'No abras adjuntos inesperados de remitentes desconocidos.'],
  },
  netiquette_calls: {
    id: 'netiquette_calls', name: 'Netiqueta y videollamadas', category: 'Comunicacion profesional', icon: Mic, color: 'emerald',
    desc: 'La comunicacion digital no es solo tecnica: tambien requiere tono, claridad y respeto. La netiqueta ayuda a que correo, chat y videollamada funcionen mejor.\n\nPequenos detalles como asunto claro, saludo o puntualidad cambian mucho la percepcion profesional.',
    details: 'Buenas costumbres:\n• Asunto claro y mensaje directo.\n• Saludo, contexto y cierre adecuados.\n• Puntualidad en llamadas y reunion preparada.\n• Microfono, camara y entorno revisados.',
    pros: ['Mejora imagen profesional y claridad.', 'Reduce malentendidos en equipos y clases.', 'Hace mas fluidas las videollamadas y coordinaciones.'],
    cons: ['Los mensajes secos pueden sonar bruscos.', 'Sin contexto, un correo puede generar confusiones.', 'Entrar a una videollamada sin revisar audio da mala experiencia.'],
    examples: 'Ejemplo real: antes de una reunion online revisas nombre visible, microfono, camara y documento que vas a compartir.',
    tips: ['Un asunto claro ahorra tiempo a quien recibe.', 'En videollamada, entra un minuto antes si es importante.', 'Si la conversacion requiere matiz, valora llamada o reunion.'],
  },
};

const emailInboxMock = [
  { from: 'Profesora Aula', subject: 'Material de la clase del viernes', tag: 'Seguro' },
  { from: 'Banco alerta', subject: 'Verifique su cuenta ahora mismo', tag: 'Sospechoso' },
  { from: 'Equipo proyecto', subject: 'Version final del dossier', tag: 'Seguro' },
];

const emailRecipientCases = {
  para: 'Cuando una persona es la responsable principal de actuar.',
  cc: 'Cuando alguien debe estar informado y visible para el resto.',
  cco: 'Cuando se protege privacidad en envios a muchos destinatarios.',
};

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

const emailQuizItems = [
  { id: 'mail-1', prompt: 'Envias una circular a muchas familias y no deben verse entre si.', answer: 'cco', explanation: 'CCO protege la privacidad de direcciones cuando hay muchos destinatarios.' },
  { id: 'mail-2', prompt: 'Quieres que una compañera vea la conversacion pero no es la responsable principal.', answer: 'cc', explanation: 'CC sirve para informar de forma visible sin convertirla en destinataria principal.' },
  { id: 'mail-3', prompt: 'Vas a escribir directamente a la persona que debe responderte.', answer: 'para', explanation: 'La casilla Para es para quien debe actuar como destinatario principal.' },
];

const officeData = {
  text_docs: {
    id: 'text_docs', name: 'Procesador de texto', category: 'Documentos y redaccion', icon: FileText, color: 'blue',
    desc: 'Un procesador de texto sirve para redactar, corregir, dar formato y preparar documentos como cartas, trabajos, informes o curriculums.\n\nEs la herramienta mas adecuada cuando el contenido principal es texto estructurado.',
    details: 'Usos frecuentes:\n• Cartas y solicitudes.\n• Trabajos academicos.\n• CV y documentos formales.\n• Informes con estilos y encabezados.',
    pros: ['Ideal para redactar con formato limpio.', 'Permite imprimir o exportar a PDF.', 'Muy util para estudio, empleo y administracion.'],
    cons: ['No es la mejor opcion para calculos.', 'Un mal formato puede dificultar lectura.', 'Muchas personas infrautilizan estilos y plantillas.'],
    examples: 'Ejemplo real: preparar un CV, una carta formal o un trabajo con portada e indice.',
    tips: ['Usa estilos de titulo para mantener orden.', 'Exporta a PDF cuando la version ya este cerrada.', 'Una plantilla puede ahorrar mucho tiempo.'],
  },
  spreadsheets: {
    id: 'spreadsheets', name: 'Hojas de calculo', category: 'Calculo y datos', icon: Database, color: 'emerald',
    desc: 'Las hojas de calculo organizan datos en celdas, filas y columnas para calcular, comparar y resumir informacion.\n\nSon muy utiles para presupuestos, notas, inventarios, asistencia o seguimiento de tareas.',
    details: 'Usos frecuentes:\n• Presupuestos y gastos.\n• Listas con formulas.\n• Notas y seguimiento.\n• Graficos y resumenes simples.',
    pros: ['Permiten calcular rapido y ordenar informacion.', 'Facilitan comparaciones y graficos.', 'Son clave en gestion y administracion.'],
    cons: ['Si se usan mal, una formula errada cambia resultados.', 'Muchas personas mezclan texto libre con calculo y se desordenan.', 'No son la mejor herramienta para redactar largo.'],
    examples: 'Ejemplo real: llevar un presupuesto mensual o registrar gastos de una actividad.',
    tips: ['Nombra columnas con claridad.', 'Comprueba formulas antes de compartir.', 'Usa filtros si la tabla empieza a crecer.'],
  },
  presentations_tools: {
    id: 'presentations_tools', name: 'Presentaciones', category: 'Exposicion visual', icon: Presentation, color: 'purple',
    desc: 'Las presentaciones sirven para explicar ideas con apoyo visual en clase, reuniones o exposiciones.\n\nLo importante no es llenar diapositivas, sino ordenar un mensaje y hacerlo facil de seguir.',
    details: 'Usos frecuentes:\n• Exposiciones de clase.\n• Reuniones de equipo.\n• Propuestas visuales.\n• Material de apoyo para explicar procesos.',
    pros: ['Ordenan un discurso visual.', 'Ayudan a resumir ideas clave.', 'Se pueden compartir en PDF o mostrar en directo.'],
    cons: ['Demasiado texto vuelve pesada la diapositiva.', 'Un mal diseño distrae mas que ayuda.', 'No sustituyen un documento detallado si hace falta profundidad.'],
    examples: 'Ejemplo real: resumir un proyecto o exponer un tema con estructura visual clara.',
    tips: ['Una idea principal por diapositiva suele funcionar mejor.', 'Usa pocas palabras y buen contraste.', 'Piensa en quien escucha, no solo en quien diseña.'],
  },
  pdf_export: {
    id: 'pdf_export', name: 'PDF y exportacion', category: 'Entrega y compatibilidad', icon: Download, color: 'amber',
    desc: 'El PDF fija el formato y hace que un documento se vea igual en casi cualquier dispositivo.\n\nExportar bien evita sorpresas cuando se comparte un archivo final.',
    details: 'Cuando usar PDF:\n• CV y cartas finales.\n• Trabajos para entregar.\n• Formularios o documentos cerrados.\n• Presentaciones que no deben modificarse.',
    pros: ['Mantiene formato estable.', 'Muy compatible para enviar o imprimir.', 'Reduce cambios accidentales por parte del receptor.'],
    cons: ['Editar despues es menos comodo.', 'No sirve bien para trabajo colaborativo en vivo.', 'Si exportas mal, puedes perder enlaces o calidad.'],
    examples: 'Ejemplo real: enviar un CV en PDF en lugar de un archivo editable para asegurar el formato.',
    tips: ['Revisa el PDF final antes de enviarlo.', 'Si el documento sigue cambiando, trabaja en editable y exporta al final.', 'Comprueba que enlaces y paginas salgan bien.'],
  },
  collaboration_templates: {
    id: 'collaboration_templates', name: 'Colaboracion y plantillas', category: 'Trabajo compartido', icon: Users, color: 'indigo',
    desc: 'Documentos colaborativos y plantillas aceleran mucho el trabajo cuando varias personas participan o cuando una tarea se repite.\n\nUsar una buena base ahorra tiempo y mejora consistencia.',
    details: 'Ideas clave:\n• Documentos compartidos en la nube.\n• Historial de versiones.\n• Comentarios y sugerencias.\n• Plantillas para CV, actas, presupuestos o presentaciones.',
    pros: ['Ahorra tiempo y evita empezar de cero.', 'Facilita trabajo en equipo.', 'Permite revisar cambios y comentar sin perder versiones.'],
    cons: ['Sin orden, varias personas pueden pisarse cambios.', 'No todas las plantillas son de calidad.', 'Compartir sin revisar permisos genera problemas.'],
    examples: 'Ejemplo real: una presentacion compartida entre varios miembros del grupo o un presupuesto hecho a partir de plantilla.',
    tips: ['Revisa permisos antes de compartir.', 'Usa nombres claros y versionado cuando haga falta.', 'Las plantillas deben adaptarse, no copiarse sin pensar.'],
  },
};

const officeTaskSuggestions = {
  cv: { tool: 'Procesador de texto', why: 'Es la mejor opcion para redactar y dar formato a un CV profesional.' },
  budget: { tool: 'Hoja de calculo', why: 'Permite sumar, ordenar y comparar cifras con facilidad.' },
  slides: { tool: 'Presentacion', why: 'Ayuda a explicar ideas con estructura visual y apoyo para una exposicion.' },
};

const officeWorkspaceViews = {
  text_docs: {
    title: 'Procesador de texto',
    subtitle: 'Documento editable con estructura clara',
    accent: 'sky',
    zones: [
      { id: 'toolbar', label: 'Barra superior', heading: 'Formato y estilos', text: 'Aqui eliges fuente, tamaño, negrita, alineacion y estilos para mantener el documento ordenado.' },
      { id: 'page', label: 'Pagina', heading: 'Zona de escritura', text: 'Es el espacio principal para redactar cartas, trabajos, solicitudes o un CV.' },
      { id: 'sidebar', label: 'Panel lateral', heading: 'Esquema y comentarios', text: 'Sirve para navegar por titulos, revisar cambios o ver observaciones.' },
      { id: 'export', label: 'Exportar', heading: 'Salida final', text: 'Cuando el documento ya esta cerrado, lo conviertes en PDF o lo compartes.' },
    ],
  },
  spreadsheets: {
    title: 'Hoja de calculo',
    subtitle: 'Datos, celdas y formulas',
    accent: 'emerald',
    zones: [
      { id: 'formula', label: 'Barra de formulas', heading: 'Calculo rapido', text: 'Aqui escribes operaciones y referencias entre celdas para automatizar resultados.' },
      { id: 'grid', label: 'Cuadricula', heading: 'Datos en filas y columnas', text: 'La tabla ayuda a ordenar gastos, inventarios, notas o seguimiento de tareas.' },
      { id: 'filters', label: 'Filtros', heading: 'Analisis', text: 'Los filtros permiten ver solo una parte de la tabla sin perder el conjunto.' },
      { id: 'chart', label: 'Grafico', heading: 'Lectura visual', text: 'Un grafico convierte los numeros en una imagen facil de explicar y comparar.' },
    ],
  },
  presentations_tools: {
    title: 'Presentacion',
    subtitle: 'Diapositivas para exponer ideas',
    accent: 'violet',
    zones: [
      { id: 'slides', label: 'Miniaturas', heading: 'Secuencia de la exposicion', text: 'Sirven para ordenar el discurso visual y ver la estructura general.' },
      { id: 'canvas', label: 'Diapositiva', heading: 'Lienzo principal', text: 'Aqui se colocan titulares, imagenes, graficos y mensajes clave.' },
      { id: 'notes', label: 'Notas', heading: 'Apoyo al presentador', text: 'Permiten preparar recordatorios sin llenar la diapositiva de texto.' },
      { id: 'show', label: 'Presentar', heading: 'Modo exposicion', text: 'Es la salida final para mostrar el contenido en clase, reunion o defensa.' },
    ],
  },
  pdf_export: {
    title: 'PDF y exportacion',
    subtitle: 'Documento final para compartir',
    accent: 'amber',
    zones: [
      { id: 'source', label: 'Archivo fuente', heading: 'Documento editable', text: 'Antes de exportar conviene revisar contenido, paginas y nombres de archivo.' },
      { id: 'settings', label: 'Ajustes', heading: 'Calidad y formato', text: 'Aqui eliges paginas, compresion, calidad y opciones del PDF final.' },
      { id: 'preview', label: 'Vista previa', heading: 'Comprobacion', text: 'Permite confirmar que el aspecto del documento sigue siendo correcto.' },
      { id: 'share', label: 'Compartir', heading: 'Entrega', text: 'Despues de exportar se adjunta o comparte con menos riesgo de cambios accidentales.' },
    ],
  },
  collaboration_templates: {
    title: 'Colaboracion y plantillas',
    subtitle: 'Trabajo compartido y bases reutilizables',
    accent: 'indigo',
    zones: [
      { id: 'members', label: 'Equipo', heading: 'Personas conectadas', text: 'Muestra quien esta editando para coordinarse mejor y evitar solapamientos.' },
      { id: 'comments', label: 'Comentarios', heading: 'Revision guiada', text: 'Sirven para proponer cambios o correcciones sin tocar el texto principal.' },
      { id: 'template', label: 'Plantilla', heading: 'Estructura base', text: 'Una plantilla bien elegida acelera mucho tareas repetitivas como CV, actas o presupuestos.' },
      { id: 'permissions', label: 'Permisos', heading: 'Control de acceso', text: 'Antes de compartir hay que decidir quien edita, comenta o solo visualiza.' },
    ],
  },
};

const officeQuizItems = [
  { id: 'office-1', prompt: 'Quieres preparar un presupuesto mensual con sumas y columnas.', answer: 'spreadsheets', explanation: 'La hoja de calculo es la herramienta adecuada para datos numericos y formulas.' },
  { id: 'office-2', prompt: 'Necesitas exponer un proyecto de forma visual en clase.', answer: 'presentations_tools', explanation: 'Una presentacion ordena ideas visuales para explicar un tema ante otras personas.' },
  { id: 'office-3', prompt: 'Vas a enviar un CV final para una candidatura.', answer: 'pdf_export', explanation: 'Conviene cerrar el documento y exportarlo a PDF para mantener el formato estable.' },
];

const assessmentData = {
  mixed_quiz: { id: 'mixed_quiz', name: 'Quiz mixto', category: 'Evaluacion', icon: ShieldCheck, color: 'emerald' },
  drag_drop: { id: 'drag_drop', name: 'Arrastrar y clasificar', category: 'Evaluacion', icon: Move, color: 'blue' },
  ordering: { id: 'ordering', name: 'Ordena el proceso', category: 'Evaluacion', icon: ArrowRight, color: 'amber' },
  final_challenge: { id: 'final_challenge', name: 'Reto final', category: 'Evaluacion', icon: Trophy, color: 'purple' },
};

const assessmentMixedQuizItems = [
  { ...securityQuizItems[0], type: 'security-bool', title: 'Seguridad digital' },
  { ...emailQuizItems[0], type: 'email-recipient', title: 'Correo electronico' },
  { ...officeQuizItems[0], type: 'office-tool', title: 'Ofimatica' },
  { ...softwareQuizItems[0], type: 'software-layer', title: 'Software' },
];

const assessmentOrderBase = [
  'Crear el documento editable',
  'Guardar con nombre claro',
  'Exportar a formato final',
  'Compartir con el canal adecuado',
];

const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5);

// ==========================================
// 5. BASE DE DATOS: INTELIGENCIA ARTIFICIAL (NUEVO)
// ==========================================
const aiData = {
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

// ==========================================
// 6. BASE DE DATOS: FUNDAMENTOS DE IA
// ==========================================
const aiBasicsData = {
  what_is_llm: {
    id: 'what_is_llm', name: 'Que es un LLM', category: 'Fundamentos', icon: Brain, color: 'emerald',
    desc: 'Un LLM (Large Language Model) o Modelo de Lenguaje a Gran Escala es un sistema de inteligencia artificial entrenado con cantidades masivas de texto.\n\nEstos modelos aprenden patrones del lenguaje humano: gramatica, conceptos, relaciones entre palabras y hasta cierto razonamiento. Cuando le escribes algo, predice que palabra viene a continuacion basandose en todo lo que ha aprendido.',
    details: 'Conceptos clave:\n• Parpmetro: Los modelos tienen "neuronas" organizadas en capas. Cuantos mas parametros, mas capacidad de aprender patrones complejos. GPT-4 se estima en ~1.76 billones de parametros.\n• Entrenamiento: El modelo lee miles de millones de paginas web, libros y articulos. Aprende probabilidades: dada una frase, que palabra viene mejor despues.\n• In-context learning: Puede resolver tareas sin reentrenamiento, simplemente recibes ejemplos en tu mensaje.',
    pros: ['Versatilidad extraordinaria: un solo modelo puede escribir, traducir, razonar y crear.', 'Accesibilidad: cualquiera puede usar modelos potentes desde cualquier navegador.', 'Mejora continua: los nuevos modelos son significativamente mas capaces.'],
    cons: ['No piensa como un humano: predice texto statisticamente, no razona con certeza.', 'Alucinaciones: puede inventarse datos o referencias que suenan plausibles.', 'Consumo energetico enorme: entrenar estos modelos requiere recursos masivos.'],
    examples: 'Cuando preguntas a ChatGPT sobre un tema historico, no esta "recordando" de una base de datos. Esta prediciendo frase por frase lo que un humano escribiria sobre ese tema.',
    tips: ['Los LLM son mejores en tareas bien definidas y con contexto claro.', 'No son bases de datos: pueden equivocarce y inventar informacion.', 'La calidad de la entrada (prompt) influye muchisimo en la calidad de la salida.']
  },
  context_window: {
    id: 'context_window', name: 'Ventana de Contexto', category: 'Fundamentos', icon: Database, color: 'blue',
    desc: 'La ventana de contexto es la cantidad de texto que un LLM puede procesar en una unica interaccion. Incluye tanto tu mensaje como todo el historial de la conversacion.\n\nPiensa en ello como la "memoria a corto plazo" del modelo: todo lo que esta fuera de esa ventana, simplemente no existe para el.',
    details: 'Como funciona:\n• Tokens: El texto se divide en "tokens" (palabras o fragmentos de palabras). Un token suele ser ~4 caracteres en ingles o ~1-2 caracteres en español.\n• Limites: ChatGPT-4 tiene ~128k tokens (aprox. 100.000 palabras o 300 paginas). Claude puede llegar a 200k tokens.\n• Coste de contexto: procesar toda la ventana cada vez cuesta recursos. Por eso hay limites practicos.',
    pros: ['Ventanas grandes permiten analizar documentos enteros de una sentada.', 'El historial completo de conversacion permite seguimientos coherentes.', 'Puedes cargar libros, codigos largos o investigaciones enteras.'],
    cons: ['Contextos mas grandes consumen mas tokens y pueden diluir la atencion del modelo.', 'Informacion al inicio y al final de la ventana recibe menos atencion (especialmente al inicio).', 'Modelos pequenos tienen ventanas limitadas y no pueden manejar documentos extensos.'],
    examples: 'Si subes un PDF de 500 paginas a un LLM con ventana de 128k tokens, puede leerlo y responder preguntas sobre el. Pero no recordara documentos de conversaciones anteriores si cierras y abres chat.',
    tips: ['En conversaciones largas, resume periodicamente para mantener el contexto relevante.', 'Para documentos muy largos, usas herramientas especializadas como NotebookLM que optimizan la lectura.', 'La posicion de la informacion importa: pon datos criticos en medio de la ventana.']
  },
  prompt_engineering: {
    id: 'prompt_engineering', name: 'Prompt Engineering', category: 'Fundamentos', icon: Terminal, color: 'purple',
    desc: 'El prompt engineering es el arte de escribir instrucciones claras y efectivas para obtener los mejores resultados de un LLM.\n\nNo es solo "preguntar bien", es estructurar tu mensaje para que el modelo entienda exactamente que necesitas, en que formato y con que restricciones.',
    details: 'Tecnicas fundamentales:\n• Rol: "Actua como un experto en..." da contexto sobre que perspectiva esperas.\n• Formato: "Devuelveme una lista con 5 elementos, cada uno con titulo y descripcion de 2 lineas."\n• Constraints: "No incluyas numeros, no uses jerga tecnica, responde en espanol."\n• Few-shot: Dale ejemplos de lo que esperas para que entienda el patron.\n• Chain of thought: "Razona paso a paso" mejora resultados en problemas complejos.',
    pros: ['Un buen prompt puede duplicar la utilidad de una herramienta.', 'Ahorra tiempo al reducir iteraciones y pedidos de clarificacion.', 'Permite usar el mismo modelo para tareas muy diferentes con resultados optimizados.'],
    cons: ['Requiere practica: los primeros prompts suelen ser vagos o ambiguos.', 'Cada modelo responde diferente a las mismas tecnicas.', 'Depender mucho de tecnicas de prompting puede ser menos eficiente que usar modelos especializados.'],
    examples: '"Dame informacion sobre gatos" vs "Explícame en 3 parrafos las 3 razones principales por las que los gatos ronronean, incluyendo estudios cientificos recientes. Formato: titulo en negrita, texto normal." El segundo dara resultados mucho mas utiles.',
    tips: ['Sé especifico: en lugar de "resume", di "resume en 5 puntos clave".', 'Da contexto: si quieres un tono casual, dilo. Si quieres formal, especificalo.', 'Usa delimitadores como """ o --- para separar instrucciones de contenido.']
  },
  prompting_techniques: {
    id: 'prompting_techniques', name: 'Técnicas de Prompting', category: 'Fundamentos', icon: Zap, color: 'amber',
    desc: 'Existen tecnicas avanzadas que mejoran drásticamente los resultados. Estas van mas alla del simple prompt lineal y permiten структуруровать interacciones complejas.',
    details: 'Tecnicas clave:\n• Zero-shot: Sin ejemplos, solo la instruccion directa. Funciona bien para tareas comunes.\n• Few-shot: Con 2-3 ejemplos dentro del prompt. Ideal para tareas con formato especifico.\n• Chain of Thought (CoT): "Razona paso a paso" o "explica tu proceso". Mejora razonamiento logico.\n• Tree of Thoughts: Explora multiples ramas de razonamiento antes de responder.\n• Role prompting: "Eres un cardiologo con 20 años de experiencia..."\n• Constitutional AI: "Segun estos principios: [lista], evalua si tu respuesta los cumple."',
    pros: ['CoT mejora significativamente en matematicas y razonamiento logico.', 'Few-shot elimina la necesidad de ejemplos en instrucciones largas.', 'Role prompting mejora el tono y la pertinence de las respuestas.'],
    cons: ['Tecnicas como Tree of Thoughts usan mas tokens y son mas lentas.', 'No todas las tecnicas funcionan igual en todos los modelos.', 'Combinarlas excesivamente puede hacer el prompt ilegible.'],
    examples: 'CoT ejemplo: "Si un tren sale de Madrid a 80km/h y otro de Barcelona a 100km/h, y la distancia es 600km, ¿cuando se encuentran? Razona paso a paso." El modelo muestra su proceso antes de dar la respuesta final.',
    tips: ['Para tareas creativas: few-shot con ejemplos funciona mejor.', 'Para tareas analiticas: CoT ("razona paso a paso") mejora precision.', 'Para tareas de rol: combina con contexto especifico del area.']
  },
  hallucinations: {
    id: 'hallucinations', name: 'Alucinaciones', category: 'Limitaciones', icon: AlertTriangle, color: 'red',
    desc: 'Las alucinaciones son cuando un LLM genera informacion que suena plausible pero es incorrecta, inventada o no esta respaldada por sus datos de entrenamiento.\n\nNo es un bug que se pueda "arreglar" facilmente: es una consecuencia fundamental de como funcionan estos modelos (prediccion estadistica de texto).',
    details: 'Tipos de alucinaciones:\n• Confabulacion: El modelo inventa detalles especificos como nombres, fechas o cantidades.\n• Falsa autorrecidencia: Cita articulos, estudios o leyes que no existen.\n• Error de dominios: Mezcla conceptos de diferentes campos incorrectamente.\n• Sobreconfidence: Dice cosas falsas con total seguridad, sin mostrar duda.',
    pros: ['Conocer las alucinaciones te hace mas critico con las respuestas.', 'Modelos mas nuevos tienen tasas mas bajas de alucinacion.', 'Contexto y verificacion humana pueden mitigar el riesgo.'],
    cons: ['Pueden ser muy convincentes: el texto siempre suena seguro y bien escrito.', 'Dificiles de detectar sin conocimiento profundo del tema.', 'Peligrosas en areas criticas como medicina, derecho o finanzas.'],
    examples: 'Le preguntas por un articulo cientifico especifico y te da titulo, revista, DOI... todos inventados. O te explica una ley que nunca existio con articulos y todo.',
    tips: ['Siempre verifica datos criticos con fuentes externas.', 'Pide al modelo que cite fuentes y luego revisalas.', 'En areas especializadas, asume que puede estar equivocado hasta que lo confirmes.']
  },
  best_practices: {
    id: 'best_practices', name: 'Mejores Practicas', category: 'Aplicacion', icon: ShieldCheck, color: 'emerald',
    desc: 'Despues de entender el contexto y las limitaciones, estas son las practicas que te haran aprovechar al maximo cualquier LLM de forma segura y efectiva.',
    details: ' checklist de uso:\n• Claridad: Define que quieres, en que formato y con que restricciones.\n• Contexto: Dale toda la informacion relevante para tu tarea.\n• Iteracion: Si no te convence la respuesta, refinia y vuelve a preguntar.\n• Verificacion: Confirma datos criticos, especialmente enareas especializadas.\n•隐私: No compartas datos personales, contraseñas o informacion sensible.\n• Revisión: Lee siempre las salidas antes de usarlas. El modelo no tiene responsabilidad.',
    pros: ['Reduce errores y alucinaciones significativamente.', 'Ahorra tiempo al obtener resultados utiles desde el primer intento.', 'Permite usar IA como herramienta real de productividad, no solo curiosidad.'],
    cons: ['Requiere esfuerzo consciente, especialmente al principio.', 'Algunas tareas siguen siendo mas rapidas sin IA.', 'El exceso de confianza en IA puede reducir el pensamiento critico.'],
    examples: 'En lugar de "escribe un email", prueba "escribe un email profesional a mi profesor solicitando una extension del plazo de entrega por motivos de salud. Tono respetuoso pero firme. Maximo 150 palabras."',
    tips: ['Empieza siempre con un contexto claro y un rol si es relevante.', 'Usa delimitadores para separar instrucciones de contenido a procesar.', 'Cuando obtengas un mal resultado, analiza por que fallo y ajusta.']
  }
};

// ==========================================
// 6. BASE DE DATOS: CREACIÓN DE CONTENIDO DIGITAL
// ==========================================
const contentData = {
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
    details: 'Guión básico (hook + contenido + outro):\n• Primeros 3 segundos: Gancho que atrapa\n• Minutos 3-60: Contenido principal con valor\n• Últimos 15 segundos: CTA y retención\n\nEquipo básico:\n• Iluminación: Ring light o softbox (no luz directa)\n• Audio: Micrófono de solapa o condensador USB\n• Cámara: Smartphone actual es suficiente',
    pros: ['Alcance orgánico muy alto en todas las plataformas.', 'Humaniza tu marca de forma autenticidad.', 'Convierte mejor que cualquier otro formato.'],
    cons: ['La producción requiere tiempo y habilidades.', 'El algoritmo premia la consistencia extrema.', 'La edición puede volverse adictiva yargar el proceso.'],
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

// ==========================================
// 7. BASE DE DATOS: COPIA DE SEGURIDAD
// ==========================================
const backupData = {
  backup_strategies: {
    id: 'backup_strategies', name: 'Estrategias de Respaldo', category: 'Fundamentos', icon: Database, color: 'blue',
    desc: 'La perdida de datos es una de las experiencias mas frustrantes que puedes experimentar. Un disco que falla, un archivo borrado por error o un ransomware que encripta todo puede destruir anos de trabajo en segundos.\n\nLa solucion no es esperar a que no ocurra, sino tener un sistema de respaldo que te permita recuperarlo todo cuando algo falle.',
    details: 'Regla 3-2-1:\n• 3 copias de tus datos importantes\n• 2 medios diferentes de almacenamiento (disco externo, nube)\n• 1 copia en ubicacion fisica diferente (offsite)\n\nTipos de respaldo:\n• Completo: Copia todo cada vez. Simple pero consume mucho espacio y tiempo.\n• Incremental: Solo copia los cambios desde el ultimo respaldo.\n• Diferencial: Copia los cambios desde el ultimo respaldo completo.',
    pros: ['Proteccion contra fallos de hardware, errores humanos y malware.', 'Permite recuperacion ante desastres naturales o robos.', 'Tranquilidad para trabajar sin miedo a perder información.'],
    cons: ['Requiere disciplina y habito de hacer respaldos regularmente.', 'El almacenamiento en la nube tiene coste recurrente.', 'Las copias antiguas pueden quedar obsoletas si no se actualizan.'],
    examples: 'Un estudiante que pierde su TFg por no hacer backup. Una empresa que paga rescate de 5000 euros porque su unica copia estaba en el mismo servidor encriptado.',
    tips: ['Automatiza los respaldos para no depender de la memoria.', 'Verifica periodicamente que tus respaldos se pueden restaurar.', 'Prueba al menos una vez al ano que puedes recuperar un archivo.']
  },
  local_backup: {
    id: 'local_backup', name: 'Respaldo Local', category: 'Medios Fisicos', icon: HardDrive, color: 'emerald',
    desc: 'El respaldo local significa guardar copias de tus datos en dispositivos de almacenamiento que estan fisicamente conectados a tu equipo o en tu misma ubicacion.\n\nEs la forma mas rapida y controlada de hacer copias de seguridad, sin depender de conexion a internet ni de servicios de terceros.',
    details: 'Dispositivos recomendados:\n• Disco duro externo (HDD): Gran capacidad a buen precio. Ideal para backups grandes y poco frecuentes.\n• SSD externo: Mas rapido y resistente a golpes, pero mas caro por gigabyte.\n• USB Flash: Practico para archivos pequenos y rapidos, no recomendado para backups completos.\n\nSoftware de respaldo:\n• Windows: Historial de archivos, copia de seguridad de Windows.\n• Mac: Time Machine (automático y completo).\n• Terceros: Acronis True Image, Clonezilla (imagenes de disco).',
    pros: ['Velocidad maxima de transferencia (USB 3.0/3.1).', 'Control total: nadie mas tiene acceso a tus datos.', 'Sin coste recurrente: pagas una vez el dispositivo.'],
    cons: ['Vulnerable a robo, fuego o desastre natural en la misma ubicacion.', 'No accesible remotamente si no estas en el mismo lugar.', 'Riesgo de que el disco falle si no se reemplaza cada cierto tiempo.'],
    examples: 'Un disco duro externo de 2TB conectado por USB al que Windows hace backup automatico cada noche.',
    tips: ['Desconecta el disco de respaldo despues de hacer la copia si quieres protegerte de ransomware.', 'No guardes el unico backup junto al ordenador portatil si vas a viajar.']
  },
  cloud_backup: {
    id: 'cloud_backup', name: 'Respaldo en la Nube', category: 'Medios Remotos', icon: Cloud, color: 'purple',
    desc: 'El respaldo en la nube sincroniza tus archivos con servidores ubicados en centros de datos de empresas como Google, Microsoft o Amazon. Permite acceder a tus datos desde cualquier dispositivo con conexion a internet.\n\nEs la pieza fundamental de la regla 3-2-1, ya que proporciona la copia "offsite" que te protege de desastres locales.',
    details: 'Servicios principales:\n• Google Drive: 15GB gratuitos, integracion con Google Docs.\n• OneDrive: 5GB gratuitos, integracion profunda con Windows.\n• Dropbox: 2GB gratuitos, simple y fiable.\n• iCloud: Para ekosistem Apple exclusivamente.\n• Backblaze: Backup ilimitado por muy poco al ano (para ordenadores).\n\nSincronizacion vs Backup:\n• Sincronizacion (Dropbox, Drive): Los archivos son los mismos en todos lados. Si se corrompen en uno, se corrompen en todos.\n• Backup real: Mantiene versiones historicas y permite recuperar estados anteriores.',
    pros: ['Acceso desde cualquier dispositivo con internet.', 'Proteccion contra desastres locales (robo, fuego).', ' versioning: puedes recuperar versiones anteriores de archivos.'],
    cons: ['Dependencia de conexion a internet para acceder a todo.', 'Costes recurrentes para grandes cantidades de datos.', 'Privacidad: tus datos estan en servidores de terceros.'],
    examples: 'Google Drive como respaldo automatico de la carpeta de documentos, con versioning habilitado para recuperar archivos borrados hace 30 dias.',
    tips: ['Usa servicios de marcas reconocidas con buena reputacion de seguridad.', 'Habilita la autenticacion de dos factores en todos los servicios de almacenamiento en nube.', 'No guardes passwords o documentos sensibles sin encriptar antes de subirlos.']
  },
  restore_recovery: {
    id: 'restore_recovery', name: 'Restauracion y Recuperacion', category: 'Proceso', icon: Rotate3D, color: 'amber',
    desc: 'Tener un backup no sirve de nada si no sabes como recuperar los datos cuando los necesitas. La restauracion es la parte mas importante del proceso, y necesita planificación.\n\nDebes saber que quieres recuperar, donde esta la copia, y como restaurarla sin perder lo que has trabajado desde entonces.',
    details: 'Escenarios de recuperacion:\n• Archivo individual: Ir a la papelera, usar version anterior o restaurar desde sincronizacion.\n• Carpeta completa: Usar software de backup o restaurar desde Time Machine/Historial.\n• Sistema completo: Usar imagen de disco para restaurar todo el equipo en un disco nuevo.\n\nTiempo de recuperacion (RTO - Recovery Time Objective):\n• Define cuanto tiempo puedes estar sin acceso a tus datos.\n• Un particular puede esperar horas; una empresa minutos.\n• Elige la estrategia de backup segun tu RTO.',
    pros: ['Saber recuperar te da confianza para trabajar sin miedo.', 'La restauracion selectiva es rapida y no requiere reinstalar todo.', 'Una buena estrategia minimiza el tiempo de inactividad ante desastres.'],
    cons: ['La restauracion completa de sistema puede tomar horas.', 'A veces las versiones antiguas no son compatibles con software nuevo.', 'Si el backup esta danado, la recuperacion sera incompleta.'],
    examples: 'Un disco SSD falla y tienes que restaurar desde la imagen que hiciste hace una semana. En 2 horas tienes el equipo funcionando exactamente como estaba.',
    tips: ['Haz una prueba de restauracion al menos una vez para verificar que funciona.', 'Documenta los pasos de restauracion para no tener que buscarlos bajo presion.', 'Considera usar un disco de emergencia con sistema operativo portable para casos extremos.']
  },
  ransomware_protection: {
    id: 'ransomware_protection', name: 'Proteccion contra Ransomware', category: 'Seguridad', icon: ShieldAlert, color: 'red',
    desc: 'El ransomware es el tipo de malware mas lucrativo y devastador. Encripta todos tus archivos y exige un rescate, normalmente en criptomonedas, para recuperar el acceso.\n\nLa unica defensa real es tener backups que el atacante no pueda cifrar o destruir.',
    details: 'Como funciona el ransomware:\n• Infiltracion: A traves de correos de phishing, descargas maliciosas o vulnerabilidades.\n• Escalada: Se extiende por toda la red local.\n• Encriptacion: Cambia las extensiones de archivos y los hace ilegibles.\n• Rescate: Mensaje con instrucciones para pagar en 24-72 horas.\n\nMedidas de proteccion:\n• No abrir archivos adjuntos sospechosos.\n• Mantener el sistema y antivirus actualizados.\n• Backups separados y desconectados de la red.\n• Principio de menor privilegio: no uses cuenta de administrador para tareas cotidianas.\n• Desactivar macros automaticos en Office.',
    pros: ['Un backup limpio y desconectado es la unica defensa real contra ransomware.', 'Minimiza el impacto financiero y operativo de un ataque.', 'Permite recuperar sin pagar rescates, que no garantizan recuperacion.'],
    cons: ['El ransomware puede encriptar backups conectados en red.', 'Ataques avanzados pueden permanecer dormidos meses antes de activarse.', 'Si el backup es reciente pero ya estaba infectado, no servira.'],
    examples: 'Una empresa de contabilidad pago 40.000 euros en Bitcoin y nunca recuperaron todos los archivos. Otra empresa similar restauro todo en 2 horas desde su backup en la nube porque lo tenian desconectado.',
    tips: ['Nunca pagues el rescate: no hay garantia de recuperacion y incentiva mas ataques.', 'Los backups en la nube con versioning son muy efectivos porque guardan estados anteriores.', 'Habilita alertas de proteccion en tiempo real de tu antivirus.']
  }
};

// ==========================================
// 8. BASE DE DATOS: DISPOSITIVOS MOVILES
// ==========================================
const mobileData = {
  android_basics: {
    id: 'android_basics', name: 'Android', category: 'Sistema', icon: Smartphone, color: 'emerald',
    desc: 'Android es el sistema operativo movil mas extendido del mundo, instalado en dispositivos de Samsung, Xiaomi, Google Pixel, OnePlus y cientos de marcas mas.\n\nEntender como funciona Android te permite controlar tu privacidad, gestionar aplicaciones y aprovechar las capacidades de tu dispositivo.',
    details: 'Estructura de Android:\n• Sistema operativo basado en Linux.\n• Interfaz diferente segun fabricante (Samsung One UI, Xiaomi MIUI, stock Android).\n• Apps instaladas desde Google Play Store o archivos APK externos.\n\nConceptos clave:\n• Permisos: Las apps deben pedir permiso para acceder a camara, ubicacion, contactos.\n• Bateria: Android gestiona el uso en segundo plano para optimizar autonomia.\n• Almacenamiento: Internoy externo (microSD).',
    pros: ['Gran variedad de dispositivos a diferentes precios.', 'Alta personalizacion de interfaz y funcionamiento.', 'Integracion con servicios de Google.'],
    cons: ['La fragmentacion significa que no todos los dispositivos reciben actualizaciones.', 'Las capas de fabricacion pueden dificultar las actualizaciones de sistema.', 'Rendimiento variable segun rango de precio.'],
    examples: 'Configurar un Samsung Galaxy nuevo: transferir datos, instalar apps esenciales, ajustar permisos y personalizar la pantalla de inicio.',
    tips: ['Instala apps solo de Google Play Store para minimizar malware.', 'Revisa los permisos de las apps regularmente y elimina los que parezcan excesivos.', 'Mantén el sistema actualizado para tener los ultimos parches de seguridad.']
  },
  ios_basics: {
    id: 'ios_basics', name: 'iOS', category: 'Sistema', icon: Smartphone, color: 'slate',
    desc: 'iOS es el sistema operativo de Apple para iPhone y iPad. Es conocido por su estabilidad, seguridad y coherencia de usuario.\n\nA diferencia de Android, iOS es un ecosistema cerrado con control estricto sobre hardware y software.',
    details: 'Caracteristicas distintivas:\n• Actualizaciones garantizadas durante 5-6 anos para cada dispositivo.\n• App Store como unica fuente de aplicaciones (sin sideloading).\n• Integracion total con el ecosistema Apple (AirDrop, iCloud, Continuity).\n\nConceptos clave:\n• Face ID / Touch ID: Autenticacion biometrica.\n• iCloud: Almacenamiento y sincronizacion en la nube de Apple.\n• Control Center: Acceso rapido a ajustes frecuentes.',
    pros: ['Actualizaciones de seguridad durante muchos anos.', 'Ecosistema muy bien integrado entre dispositivos Apple.', 'Rendimiento optimizado gracias al control hardware-software.'],
    cons: ['Menos personalizacion que Android.', 'Dependencia del ecosistema Apple para algunas funciones.', 'Precio mas alto de dispositivos.'],
    examples: 'Configurar un iPhone nuevo: restaurar desde backup de iCloud, configurar Face ID, elegir que apps pueden enviar notificaciones.',
    tips: ['Usa iCloud+ para ampliar almacenamiento y tener fotos, documentos y settings sincronizados.', 'Activa Encontrar mi iPhone por si pierdes o te roban el dispositivo.', 'Ajusta los permisos de rastreo de apps en Privacidad para mayor privacidad.']
  },
  mobile_privacy: {
    id: 'mobile_privacy', name: 'Privacidad y Permisos', category: 'Seguridad', icon: ShieldCheck, color: 'blue',
    desc: 'Los dispositivos moviles saben mucho de nosotros: donde estamos, con quien hablamos, que paginas visitamos. Por eso es crucial entender como proteger tu privacidad.\n\nLos permisos que concedemos a las apps son la primera linea de defensa.',
    details: 'Permisos criticos:\n• Ubicacion: Siempre, solo mientras usas la app, o nunca.\n• Camara y microfono: Solo cuando la app esta abierta.\n• Contactos y calendario: Acceso de lectura o modificacion.\n• Telefono y SMS: Leer llamadas, enviar SMS premium.\n\nAjustes de privacidad:\n• Android: Ajustes > Privacidad > Gestor de permisos.\n• iOS: Ajustes > Privacidad y seguridad.\n\nPublicidad y rastreo:\n• Android usa tu identificador de publicidad para mostrarte anuncios personalizados.\n• iOS tiene App Tracking Transparency: cada app debe pedir permiso explicito.',
    pros: ['Restringir permisos reduce la exposicion de datos personales.', 'Los sistemas modernos piden permiso explicito para rastreo.', 'La ubicacion solo cuando es necesario ahorra bateria.'],
    cons: ['Algunas apps necesitan permisos para funcionar (una linterna no necesita contactos).', 'Negar permisos puede limitar funcionalidad de apps legitimas.', 'Los permisos una vez concedidos no se revisan automaticamente.'],
    examples: 'Una app de linterna pide acceso a contactos, ubicacion y microfono. Esto es desproporcionado y deberia hacerte desconfiar de esa app.',
    tips: ['Antes de instalar, revisa que permisos pide la app. Si una linterna pide ubicacion, busca otra.', 'Revisa los permisos concedidos trimestralmente para eliminar accesos innecesarios.', 'Usa el modo de ubicacion aproximada cuando sea posible: la app sabe la zona pero no tu ubicacion exacta.']
  },
  mobile_productivity: {
    id: 'mobile_productivity', name: 'Productividad Movil', category: 'Uso Practico', icon: Briefcase, color: 'purple',
    desc: 'Tu movil puede ser una herramienta de productividad poderosa si lo configuras bien. No tiene que ser solo un dispositivo de distraccion.\n\nLas mismas apps que usas en el ordenador tienen versiones moviles optimizadas.',
    details: 'Apps esenciales de productividad:\n• Correo: Gmail, Outlook (sincroniza con tu cuenta de email).\n• Documentos: Google Docs, Microsoft Office (edicion de documentos).\n• Notas: Apple Notes, Samsung Notes, Notion (capturar ideas rapido).\n• Calendario: Google Calendar, Apple Calendar (organizar tiempo).\n• Tareas: Todoist, Things (gestionar pendientes).\n\nConfiguracion para productividad:\n• Notificaciones: Silencia todo excepto lo importante.\n• Modo No Molestar: Programado para horas de concentracion.\n• Focus en iOS / Modo trabajo en Android.',
    pros: ['Puedes trabajar desde cualquier lugar con conexion.', 'Captura rapida de ideas, fotos y notas.', 'Sincronizacion con tu ordenador para continuidad.'],
    cons: ['Pantalla pequena para trabajo prolongado.', 'Mas facil distraerse con redes sociales.', 'Dependencia de bateria y conectividad.'],
    examples: 'Usar Google Calendar para planificar tu semana, con eventos de estudio, trabajo y descanso. Recibir notificaciones solo de eventos importantes.',
    tips: ['Desactiva las notificaciones de redes sociales durante horas de trabajo.', 'Usa el modo oscuro para reducir fatiga visual en pantallas OLED.', 'Aprende los gestos de navegacion de tu sistema para moverte mas rapido.']
  },
  mobile_security: {
    id: 'mobile_security', name: 'Seguridad Movil', category: 'Proteccion', icon: Lock, color: 'red',
    desc: 'Los moviles son objetivos atractivos para atacantes porque contienen todo: acceso a cuentas, datos personales, aplicaciones de banco, y nuestra ubicacion constante.\n\nProteger tu movil es tan importante como proteger tu ordenador.',
    details: 'Amenazas principales:\n• Malware: A traves de apps descargadas fuera de tiendas oficiales.\n• Phishing: SMS con enlaces fraudulentos (smishing) o llamadas de soporte falso.\n• Robo de dispositivo: Acceso fisico a tu informacion.\n\nMedidas de proteccion:\n• Pantalla de bloqueo con PIN, huella o reconocimiento facial.\n• Cifrado del dispositivo (activado por defecto en sistemas modernos).\n• Encontrar mi dispositivo: Localiza, bloquea o borra remotamente.\n• No conectar a cargadores USB publicos sin proteccion (juice jacking).',
    pros: ['Los sistemas moviles modernos tienen seguridad muy robusta.', 'El cifrado por hardware protege datos incluso si roban el dispositivo.', 'Las actualizaciones de seguridad son frecuentes.'],
    cons: ['Usuarios que deshabilitan medidas de seguridad por comodidad.', 'Las apps pueden pedir permisos excesivos sin control.', 'La perdida fisica sigue siendo un riesgo si no hay bloqueo.'],
    examples: 'Pierdes el telefono en un restaurante. Si tienes Encontrar mi dispositivo activo, puedes localizarlo, hacerlo sonar, o borrar todos los datos remotamente.',
    tips: ['Nunca dejes el movil desprotegido con PIN 1234 o 0000.', 'Activa la autenticacion de dos factores en todas las apps importantes.', 'No uses WiFi publicas para acceder a banca o compras: usa datos moviles o una VPN.']
  }
};

// ==========================================
// 9. BASE DE DATOS: REDES CABLEADAS
// ==========================================
const ethernetData = {
  ethernet_basics: {
    id: 'ethernet_basics', name: 'Fundamentos Ethernet', category: 'Conceptos', icon: Cable, color: 'blue',
    desc: 'Ethernet es el estandar de red cableado que conecta ordenadores, impresoras, servidores y otros dispositivos en redes locales (LAN).\n\nMientras el WiFi es comodo para moviles y portatiles, Ethernet sigue siendo la eleccion para gaming, trabajo remoto de alto rendimiento y servidores.',
    details: 'Componentes de una red Ethernet:\n• Router o switch: El cerebro que dirige el trafico de datos.\n• Cables Ethernet: Los cables que transportan los datos (categorias 5e, 6, 7, 8).\n• NIC (Tarjeta de interfaz de red): El adaptador en tu ordenador que conecta al cable.\n\nCategorias de cables:\n• Cat 5e: Hasta 1 Gbps, 100m maximo.\n• Cat 6: Hasta 10 Gbps, mejor contra interferencias.\n• Cat 6a / 7: Hasta 10 Gbps con mayor distancia.\n• Cat 8: Hasta 40 Gbps para centros de datos.',
    pros: ['Velocidad maxima y estable sin fluctuaciones de WiFi.', 'Latencia minima: ideal para gaming competitivo y conferencias.', 'Mas seguro: nadie puede "escuchar" sin acceso fisico al cable.'],
    cons: ['Requiere cableado fisico, menos flexible.', 'Instalacion mas compleja en edificios existentes.', 'Los cables pueden ser visibles y menos esteticos.'],
    examples: 'Un escritorio con un PC de gaming conectado por cable Cat 6 al router, logrando 1Gbps con 1ms de latencia para gaming online.',
    tips: ['Para la mayoria de usos domesticos, Cat 5e o Cat 6 es suficiente.', 'No estires demasiado los cables ni los dobles en angulos Sharp.', 'Usa cables de longitud adecuada: muy largos pueden degradar la señal.']
  },
  home_network_setup: {
    id: 'home_network_setup', name: 'Red Domestica Cableada', category: 'Instalacion', icon: Network, color: 'emerald',
    desc: 'Montar una red cableada en casa es mas sencillo de lo que parece. Con un poco de planificacion puedes tener conexiones rapidas y fiables en todas las habitaciones.\n\nEl resultado: streaming 4K sin buffering, gaming online sin lag, y videollamadas perfectas.',
    details: 'Diseno de red domestica:\n• Router en centro de la casa o donde esta la conexion a internet.\n• Switch ethernet en cada habitacion o zona de trabajo.\n• Tomas de red RJ45 en pared (cableadas desde el switch central).\n\nPasos de instalacion:\n1. Planificar donde necesitas conexiones.\n2. Pasar cables desde el switch central a cada toma.\n3. Instalar las tomas RJ45 en cada habitacion.\n4. Conectar dispositivos con cables cortos a las tomas.\n\nHerramientas basicas:\n• Ponchadora para crimpar cables.\n• Testador de cables para verificar conexiones.\n• Canaletas para esconder cables visibles.',
    pros: ['Rendimiento consistente sin importar la distancia al router.', 'Descarga de archivos grandes en segundos.', 'Todos los dispositivos conectados comparten archivos y impresoras facilmente.'],
    cons: ['Inversion inicial en cables, switches y herramientas.', 'Requiere trabajo de instalacion si quieres algo limpio.', 'Menos flexible si mudas de casa o cambias espacios.'],
    examples: 'Una oficina en casa con escritorio, NAS, Smart TV y consola conectados todos por cable a un switch, que a su vez conecta al router.',
    tips: ['Planifica para el futuro: pasa cables extra aunque ahora no los necesites.', 'Usa switches con puertos suficientes (mas de los que crees necesarios).', 'Etiqueta cada cable y toma para saber que va donde.']
  },
  network_diagnostics: {
    id: 'network_diagnostics', name: 'Diagnostico de Red', category: 'Solucion de Problemas', icon: Settings2, color: 'amber',
    desc: 'Cuando algo no funciona en tu red, necesitas saber diagnosticarlo. Los problemas pueden estar en el cable, el switch, el router o la configuracion del ordenador.\n\nAprender a diagnosticarte te ahorra llamadas a soporte tecnico y tiempo de espera.',
    details: 'Comandos esenciales (Windows):\n• ipconfig: Ver configuracion IP de tu adaptador.\n• ipconfig /all: Informacion completa incluyendo direccion MAC.\n• ping 8.8.8.8: Probar conectividad a internet.\n• ping google.com: Probar resolucion DNS.\n• tracert google.com: Ver por donde pasan tus datos.\n\nComandos esenciales (Mac/Linux):\n• ifconfig: Similar a ipconfig.\n• ping: Igual que en Windows.\n• traceroute: Similar a tracert.\n• network: Ver estado de conexiones en Mac.',
    pros: ['Ahorra tiempo diagnosticando problemas comunes.', 'Permite identificar si el problema es local o de tu ISP.', 'No necesitas conocimientos avanzados, solo saber interpretar los resultados.'],
    cons: ['Algunos comandos requieren saber que buscar.', 'La salida puede ser tecnica y confusa al principio.', 'No todos los problemas tienen solucion desde el usuario final.'],
    examples: 'Si ping a google.com no funciona pero ping a 8.8.8.8 si, el problema esta en la resolucion DNS. Solucion: cambiar DNS a 8.8.8.8.',
    tips: ['Aprende los basicos: ipconfig y ping cubren el 80% de los problemas.', 'Guarda los resultados de ipconfig /all cuando la red funcione bien, como referencia.', 'Si todos los dispositivos de tu red tienen problemas, el router es probablemente el culpable.']
  },
  nas_network_storage: {
    id: 'nas_network_storage', name: 'Almacenamiento en Red (NAS)', category: 'Dispositivos', icon: HardDrive, color: 'purple',
    desc: 'Un NAS (Network Attached Storage) es un dispositivo de almacenamiento conectado a tu red local que funciona como un disco duro compartido para todos tus dispositivos.\n\nEs la solucion ideal para tener un servidor de archivos domestico con acceso desde movil, TV, ordenador y tablet.',
    details: 'Que es un NAS:\n• Dispositivo con uno o mas discos duros en RAID.\n• Sistema operativo propio (normalmente Linux).\n• Acceso por red ethernet, desde cualquier dispositivo.\n• Servicios adicionales: backup, multimedia streaming, VPN, hosting.\n\nMarcas populares:\n• Synology: Interfaz amigable, muchas apps.\n• QNAP: Mas potente, mejor para empresas pequenas.\n• TerraMaster: Opcion economica.\n• Asustor: Buena relacion precio-caracteristicas.\n\nRAID basico:\n• RAID 1: Duplicacion exacta (2 discos iguales, uno es espejo del otro).\n• RAID 5: Distribuye datos y paridad, aguanta fallo de un disco.',
    pros: ['Acceso simultaneo desde multiples dispositivos.', 'Copia de seguridad centralizada para toda la casa.', 'Funciona como servidor multimedia para streaming.'],
    cons: ['Inversion inicial moderada-alta (200-800 euros).', 'Requiere configuracion inicial y mantenimiento.', 'Rendimiento depende de tu red (WiFi sera mas lento que ethernet).'],
    examples: 'Un NAS Synology con 2 discos de 4TB en RAID 1, sirviendo como libreria de fotos, backup de todos los ordendores y servidor de Plex para peliculas.',
    tips: ['Empieza con 2 bahias y RAID 1 para proteccion de datos.', 'Los discos dedicados para NAS (como WD Red) duran mas que los de escritorio.', 'Accede desde fuera de casa con VPN o los servicios de sincronizacion del fabricante.']
  },
  vpn_basics: {
    id: 'vpn_basics', name: 'VPN (Red Privada Virtual)', category: 'Seguridad', icon: ShieldCheck, color: 'cyan',
    desc: 'Una VPN crea un tunel encriptado entre tu dispositivo e internet, ocultando tu actividad de tu proveedor de internet, redes publicas y posibles atacantes.\n\nEs especialmente util en WiFis publicos, para privacidad, y para acceder a contenidos como si estuvieras en otro pais.',
    details: 'Como funciona una VPN:\n• Tu trafico se encripta en tu dispositivo.\n• Viaja por un tunel seguro hasta el servidor VPN.\n• El servidor VPN descifra y envia tu peticion a internet.\n• Las webs ven la IP del servidor VPN, no la tuya.\n\nCasos de uso:\n• WiFi publico: Protege contra escuchas en cafes, aeropuertos.\n• Privacidad: Tu ISP no puede ver que webs visitas.\n• Geo-restricciones: Acceder a contenidos de otros paises.\n• Trabajo remoto: Conectar a la red de tu empresa de forma segura.\n\nServicios populares:\n• NordVPN, ExpressVPN, Surfshark, ProtonVPN.\n• Servicios gratuitos: ProtonVPN Free, Windscribe (limitados).',
    pros: ['Seguridad en redes publicas sin exponer tus datos.', 'Privacidad frente a ISP y rastreo de paginas web.', 'Acceso a contenido bloqueado por region.'],
    cons: ['Puede reducir velocidad de navegacion (especialmente gratis).', 'Algunas webs bloquean VPNs conocidas.', 'Las VPNs gratuitas pueden vender tus datos.'],
    examples: 'Trabajar desde una cafeteria conectandose a la VPN de la empresa para acceder a archivos internos de forma segura.',
    tips: ['Para privacidad maxima, usa VPN sin logs (no guardan historial).', 'WireGuard es el protocolo mas moderno y rapido.', 'No todas las VPNs son iguales: investiga la reputacion antes de confiarles tus datos.']
  }
};

// ==========================================
// 10. BASE DE DATOS: COMUNICACION DIGITAL
// ==========================================
const communicationData = {
  messaging_apps: {
    id: 'messaging_apps', name: 'Apps de Mensajeria', category: 'Herramientas', icon: MessageSquare, color: 'emerald',
    desc: 'La mensajeria instantanea ha revolucionado la comunicacion. WhatsApp, Telegram, Signal y iMessage permiten comunicacion en tiempo real con individuos y grupos.\n\nCada app tiene sus ventajas y limitaciones en cuanto a privacidad, caracteristicas y compatibilidad.',
    details: 'Principales apps:\n• WhatsApp: La mas popular a nivel mundial, propiedad de Meta. Cifrado de extremo a extremo por defecto.\n• Telegram: Mas funciones (canales, bots, archivos grandes) pero cifrado opcional.\n• Signal: maxima privacidad, codigo abierto, recopilacion minima de datos.\n• iMessage: Solo Apple, muy integrado en el ecosistema.\n• Discord: Orientada a comunidades y gaming, muy versatil.\n\nFactores a considerar:\n• Privacidad: Signal > Telegram > WhatsApp > SMS.\n• Caracteristicas: Telegram > Discord > WhatsApp > Signal.\n• Compatibilidad: WhatsApp > Telegram > Signal > iMessage.',
    pros: ['Comunicacion instantanea y gratuita a nivel mundial.', 'Grupos para coordinacion familiar, trabajo o proyectos.', 'Envio de archivos, fotos, documentos.'],
    cons: ['Puede ser intrusivo y generar estres por notificaciones.', 'Informacion se comparte rapidamente y sin reflexion.', 'Grupos grandes pueden ser caoticos.'],
    examples: 'Usar WhatsApp para familia, Telegram para grupos de proyecto y Signal para conversaciones sensibles.',
    tips: ['Usa mensajes temporales en chats que no necesitas archivar.', 'Revisa la configuracion de privacidad en cada app.', 'No compartas informacion sensible sin verificar quien esta en el grupo.']
  },
  video_conferencing: {
    id: 'video_conferencing', name: 'Videoconferencia', category: 'Reuniones', icon: Video, color: 'blue',
    desc: 'Las herramientas de videoconferencia permiten reuniones cara a cara virtuales, esenciales para trabajo remoto, educacion a distancia y mantener contacto con personas lejanas.\n\nDesde Zoom y Google Meet hasta Microsoft Teams, cada plataforma tiene sus fortalezas.',
    details: 'Plataformas principales:\n• Zoom: Muy popular para reuniones pequeñas y grandes, facilita compartir pantalla.\n• Google Meet: Integrado con Google Workspace, acesso directo desde Calendar.\n• Microsoft Teams: Ideal para empresas con Microsoft 365, incluye chat y archivos.\n• Jitsi: Open source, no requiere cuenta, gratuito.\n\nCaracteristicas utiles:\n• Compartir pantalla para presentaciones y demostraciones.\n• Grabacion de sesiones para quienes no pudieron asistir.\n• Salas de grupos pequenos (breakout rooms).\n• Fondo virtual para privacidad.\n• Transcripcion automatica (en algunas plataformas).',
    pros: ['Reuniones efectivas sin necesidad de estar fisicamente.', 'Permite trabajar desde cualquier lugar del mundo.', 'Grabaciones para revision posterior o formación.'],
    cons: ['Fatiga de videoconferencia (Zoom fatigue) por estimulacion excesiva.', 'Dependencia de buena conexion a internet.', 'Dificultad para leer lenguaje corporal y crear conexion humana.'],
    examples: 'Una reunion de equipo semanal por Google Meet con grabacion automatica para que los que no pudieron asistir vean la grabacion.',
    tips: ['Mantén la camara encendida cuando sea posible para mayor conexion.', 'Silencia el microfono cuando no hables para evitar ruido de fondo.', 'Usa un fondo virtual o asegurate de que tu entorno sea profesional.']
  },
  collaborative_workspace: {
    id: 'collaborative_workspace', name: 'Espacios de Trabajo Colaborativo', category: 'Productividad', icon: Users, color: 'purple',
    desc: 'Los espacios de trabajo colaborativo como Slack, Microsoft Teams y Notion centralizan la comunicacion, los archivos y el trabajo en equipo en un solo lugar.\n\nReemplazan al email para comunicacion interna y permiten trabajo asincrono eficiente.',
    details: 'Plataformas principales:\n• Slack: Canales tematicos, integraciones con otras apps, busqueda excelente.\n• Microsoft Teams:chat + videollamadas + archivos de Office 365 integrados.\n• Notion: Base de datos + notas + wiki + proyecto, todo en uno.\n• Discord: Originalmente gaming, pero muy usado para comunidades y trabajo.\n\nConceptos clave:\n• Canales: Lugares tematicos para conversaciones (ej. #marketing, #soporte).\n• Mensajes directos: Conversacion 1a1 o con pequenos grupos.\n• Hilos: Conversaciones derivadas para no saturar canales principales.\n• Integraciones: Conectar con otras herramientas (GitHub, Google Calendar, etc.).',
    pros: ['Comunicacion organizada por temas en canales, no todo en una cadena de email.', 'Buscar en el historial es rapido y efectivo.', 'Integraciones automatizan flujos de trabajo.'],
    cons: ['Puede generar sobrecarga de notificaciones si no se configura bien.', 'Informacion dispersa en muchas herramientas si no hay disciplina.', 'Curva de aprendizaje para equipos que vienen del email.'],
    examples: 'Un equipo de marketing usa Slack con canales para #redes-sociales, #campanas, #analitica y #random. Las reuniones de equipo son en Teams.',
    tips: ['Establece normas de uso: que se comunica por email vs por Slack.', 'Usa hilos para conversaciones que no interesan a todos.', 'Configura horas de silencio para no ser molestado fuera del horario.']
  },
digital_identity: {
    id: 'digital_identity', name: 'Identidad Digital', category: 'Presencia', icon: User, color: 'slate',
    desc: 'Tu identidad digital es como te presentan online: tu nombre, foto, biografia y presencia en redes sociales y otras plataformas.\n\nGestionar bien tu identidad digital es importante tanto para tu vida personal como profesional.',
    details: 'Componentes de la identidad digital:\n• Perfiles en redes sociales (LinkedIn, Twitter, Instagram).\n• Presencia profesional (web personal, blog, portfolio).\n• Reputacion online: Lo que otros dicen de ti cuando te buscan.\n\nGestion de presencia:\n• Busca tu nombre regularmente para ver que aparece.\n• Configura la privacidad de tus perfiles segun tu comodidad.\n• Separa lo personal de lo profesional cuando sea necesario.\n\nHuella digital:\n• Todo lo que se publica en internet se queda: fotos, comentarios, publicaciones antiguas.\n• Antes de publicar, preguntate si te gustaria que futuros empleadores lo vieran.\n• Los motores de busqueda guardan cache de paginas eliminadas.',
    pros: ['Una buena presencia online puede abrir oportunidades profesionales.', 'Control de tu narrativa: si no controlas tu identidad, otros lo haran.', 'Conexion con personas y comunidades de intereses similares.'],
    cons: ['Informacion mal gestionada puede afectar oportunidades de empleo.', 'Dificil eliminar informacion una vez publicada.', 'Riesgo de suplantacion de identidad si no proteges tus datos.'],
    examples: 'Un profesional que mantiene un perfil de LinkedIn actualizado, con certificaciones y recomendaciones, y que googlea periodicamente su nombre para monitorizar su reputacion online.',
    tips: ['Google yourself al menos una vez al mes.', 'Usa diferentes correos y perfiles segun el contexto (personal, trabajo, comunidades).', 'No aceptes conexiones de desconocidos sin verificar su perfil.']
  },
netiquette_advanced: {
    id: 'netiquette_advanced', name: 'Netiqueta y Comunicacion', category: 'Etiqueta Digital', icon: MessageCircle, color: 'amber',
    desc: 'La netiqueta es el conjunto de normas de comportamiento para comunicacion digital. Tan importante como saber escribir es saber cuando, a quien y como comunicarte digitalmente.\n\nEl tono se pierde en texto, los emoji pueden malinterpretarse, y las respuestas instantaneas no siempre son necesarias.',
    details: 'Principios de netiqueta:\n• Respeta el tiempo de los demas: no todos estan disponibles 24/7.\n• Usa el canal adecuado: email formal vs mensaje rapido vs llamada.\n• Cuidado con el tono: lo que parece cortante en texto puede ser neutral.\n• Piensa antes de enviar: un mensaje impulsivo puede causar problemas.\n\nEmail vs Mensajeria vs Llamada:\n• Email: Para temas formales, que requieren registro escrito, o cuando no hay urgencia.\n• Mensajeria (Slack/Teams): Para comunicacion rapida de equipo, preguntas cortas.\n• Llamada/videollamada: Para temas complejos, conflictos, o cuando la urgencia es alta.\n\nTiempo de respuesta esperado:\n• Email profesional: 24-48 horas.\n• Mensajeria de trabajo: Dentro del horario laboral, unas pocas horas.\n• Urgencias criticas: Llamada telefonica.',
    pros: ['Buena netiqueta mejora relaciones profesionales y personales.', 'Reduce malentendidos y conflictos innecesarios.', 'Te hace parecer mas profesional y considerado.'],
    cons: ['Normas pueden variar entre culturas y organizaciones.', 'Lo que es aceptable en un equipo puede no serlo en otro.', 'La tecnologia cambia rapidamente y las normas evolucionan.'],
    examples: 'No enviar un email a las 11pm esperando respuesta inmediata. No usar emojis en comunicaciones formales con clientes.',
    tips: ['Lee tu mensaje antes de enviarlo imaginando como lo recibiria el receptor.', 'Si estas enfadado, escribe el mensaje y dejalo reposar 10 minutos antes de enviarlo.', 'Adapta tu comunicacion al canal y al receptor.']
  }
};

const contentTools = {
  canva: { name: 'Canva', category: 'Diseño', description: 'Diseño gráfico rápido para RRSS, presentations y más.', url: 'canva.com', logo: SoftwareLogos.canva },
  capcut: { name: 'CapCut', category: 'Video', description: 'Edición de vídeo profesional en móvil y desktop.', url: 'capcut.com', logo: SoftwareLogos.capcut },
  premiere: { name: 'Premiere Pro', category: 'Video', description: 'Edición de vídeo profesional para proyectos serios.', url: 'adobe.com/premiere', logo: SoftwareLogos.premiere },
  audacity: { name: 'Audacity', category: 'Audio', description: 'Editor de audio gratuito y potente.', url: 'audacityteam.org', logo: SoftwareLogos.audacity },
  descript: { name: 'Descript', category: 'Audio', description: 'Edita audio como texto + transcripción automática.', url: 'descript.com', logo: SoftwareLogos.descript },
  alitu: { name: 'Alitu', category: 'Audio', description: 'Editor simplificado para podcasters.', url: 'alitu.com', logo: SoftwareLogos.alitu },
  chatgpt: { name: 'ChatGPT', category: 'Planificación', description: 'Generación de ideas, borradores y research.', url: 'chat.openai.com', logo: SoftwareLogos.chatgpt },
  notion: { name: 'Notion', category: 'Planificación', description: 'Gestión de calendarios editoriales y notas.', url: 'notion.so', logo: SoftwareLogos.notion },
};

const contentSteps = [
  { step: '01', title: 'Definir estrategia', desc: 'Buyer persona, objetivos, canales' },
  { step: '02', title: 'Crear calendario', desc: 'Frecuencia, formatos, temas' },
  { step: '03', title: 'Producir contenido', desc: 'Escritura, grabación, edición' },
  { step: '04', title: 'Publicar y medir', desc: 'Horarios, métricas, ajustes' },
];

// ==========================================
// 7. BASE DE DATOS: PRODUCTIVIDAD Y ATAJOS
// ==========================================
const keyboardData = {
  shortcut_basics: {
    id: 'shortcut_basics', name: 'Atajos Base', category: 'Fundamentos del Teclado', icon: Keyboard, color: 'indigo',
    desc: 'Los atajos de teclado son combinaciones de teclas que permiten ejecutar acciones sin apartar las manos del teclado. Reducen clics, aceleran tareas repetitivas y ayudan a desarrollar memoria muscular digital.\n\nLa idea no es memorizarlo todo en un dia, sino dominar primero un pequeno grupo de comandos que se repiten constantemente en clase, en oficina y al navegar.',
    details: 'Formula general:\n• Ctrl: Activa la mayoria de comandos de accion en Windows.\n• Shift: Modifica el comportamiento para ampliar, seleccionar o invertir.\n• Alt: Accede a funciones secundarias o menus.\n• La practica diaria convierte el atajo en habito y reduce errores.',
    examples: 'Empieza con 5 combinaciones: copiar, pegar, cortar, deshacer y guardar. Solo con eso ya se nota una mejora clara de velocidad.',
    keys: ['Ctrl', 'C', 'V', 'X', 'Z', 'S'],
    shortcutList: [
      { combo: 'Ctrl + C', action: 'Copiar', why: 'Duplica texto, archivos o bloques seleccionados sin mover el original.' },
      { combo: 'Ctrl + V', action: 'Pegar', why: 'Inserta el contenido copiado o cortado en la nueva posicion.' },
      { combo: 'Ctrl + X', action: 'Cortar', why: 'Mueve el elemento seleccionado a otro lugar.' },
      { combo: 'Ctrl + Z', action: 'Deshacer', why: 'Revierte el ultimo paso cuando cometes un error.' },
      { combo: 'Ctrl + S', action: 'Guardar', why: 'Protege tu trabajo y evita perder cambios recientes.' }
    ],
    tips: [
      'Practica el atajo justo despues de usar la opcion con raton para reforzar el aprendizaje.',
      'Mantener el pulgar cerca de la barra espaciadora y el meñique cerca de Ctrl agiliza mucho el gesto.',
      'Conviene repetir los mismos atajos en Word, navegador, editor de texto y explorador de archivos.'
    ]
  },
  navigation_flow: {
    id: 'navigation_flow', name: 'Moverse Mas Rapido', category: 'Navegacion y Seleccion', icon: Search, color: 'blue',
    desc: 'Una gran parte de la productividad no depende de escribir mas rapido, sino de desplazarte mejor por documentos, formularios, paginas web y ventanas. Estos atajos te permiten cambiar de zona, buscar informacion y seleccionar contenido sin romper el ritmo.\n\nCuando una persona domina este bloque, nota enseguida menos fatiga y menos dependencia del raton.',
    details: 'Patrones utiles:\n• Ctrl + F: Busca informacion dentro de la pagina o documento actual.\n• Tab y Shift + Tab: Saltan entre campos de un formulario.\n• Ctrl + A: Selecciona todo el contenido activo.\n• Inicio / Fin: Van al principio o al final de la linea o del bloque segun la app.',
    examples: 'Muy util para rellenar formularios online, localizar un termino en PDFs o revisar apuntes largos sin perder tiempo desplazandote manualmente.',
    keys: ['Ctrl', 'F', 'A', 'Tab', 'Shift', 'Home', 'End'],
    shortcutList: [
      { combo: 'Ctrl + F', action: 'Buscar dentro', why: 'Encuentra palabras clave en documentos, webs o apuntes extensos.' },
      { combo: 'Tab', action: 'Siguiente campo', why: 'Avanza por formularios, menus y cuadros de dialogo.' },
      { combo: 'Shift + Tab', action: 'Campo anterior', why: 'Retrocede sin tocar el raton.' },
      { combo: 'Ctrl + A', action: 'Seleccionar todo', why: 'Permite copiar, borrar o formatear el contenido completo.' },
      { combo: 'Inicio / Fin', action: 'Ir al borde', why: 'Ahorra tiempo al navegar lineas, listas o bloques de texto.' }
    ],
    tips: [
      'Combinar seleccion y busqueda hace que editar y revisar sea mucho mas fluido.',
      'En formularios largos, Tab puede sustituir casi por completo al raton.',
      'En muchos programas, Ctrl + Inicio y Ctrl + Fin saltan al principio o final del documento completo.'
    ]
  },
  editing_power: {
    id: 'editing_power', name: 'Edicion Inteligente', category: 'Texto y Documentos', icon: FileText, color: 'purple',
    desc: 'Editar bien significa corregir, reorganizar y rehacer con seguridad. Este bloque se centra en los atajos que mas ayudan cuando redactas apuntes, preparas trabajos o arreglas documentos.\n\nSon especialmente valiosos en procesadores de texto, correos, plataformas educativas y herramientas de ofimatica.',
    details: 'Combinaciones frecuentes:\n• Ctrl + B: Negrita en muchos editores.\n• Ctrl + I: Cursiva.\n• Ctrl + Y: Rehacer lo que acabas de deshacer.\n• Ctrl + Retroceso: Borra la palabra anterior en muchos entornos.',
    examples: 'Perfecto para alumnos que redactan tareas, profesorado que prepara contenidos o usuarios que pasan mucho tiempo escribiendo correos y documentos.',
    keys: ['Ctrl', 'B', 'I', 'Y', 'Backspace', 'ArrowLeft', 'ArrowRight'],
    shortcutList: [
      { combo: 'Ctrl + B', action: 'Negrita', why: 'Resalta conceptos clave sin cambiar de contexto.' },
      { combo: 'Ctrl + I', action: 'Cursiva', why: 'Ayuda a marcar titulos, citas o ideas importantes.' },
      { combo: 'Ctrl + Y', action: 'Rehacer', why: 'Recupera una accion deshecha por error.' },
      { combo: 'Ctrl + Backspace', action: 'Borrar palabra', why: 'Limpia texto rapido sin ir letra por letra.' },
      { combo: 'Shift + Flechas', action: 'Seleccion progresiva', why: 'Selecciona texto con precision desde el teclado.' }
    ],
    tips: [
      'Deshacer y rehacer forman una pareja clave: cuanto antes se automaticen, mejor.',
      'Las combinaciones de formato cambian un poco segun la aplicacion, pero muchas coinciden.',
      'Seleccionar con Shift + flechas es ideal para no perder el punto de lectura.'
    ]
  },
  browser_mastery: {
    id: 'browser_mastery', name: 'Navegador Eficiente', category: 'Web y Pestanas', icon: Globe, color: 'emerald',
    desc: 'Gran parte del aprendizaje digital ocurre dentro del navegador. Por eso conviene dominar los atajos que aceleran la gestion de pestanas, la barra de direcciones y la actualizacion de contenido.\n\nEste bloque convierte la navegacion diaria en una experiencia mas limpia, rapida y controlada.',
    details: 'Atajos recomendados:\n• Ctrl + T: Nueva pestana.\n• Ctrl + W: Cierra la pestana actual.\n• Ctrl + L: Situa el foco en la barra de direcciones.\n• Ctrl + Shift + T: Recupera la ultima pestana cerrada.',
    examples: 'Muy util al investigar para clase, comparar fuentes, abrir recursos, volver a una pagina cerrada por error o lanzar una busqueda nueva al instante.',
    keys: ['Ctrl', 'T', 'W', 'L', 'Shift', 'R'],
    shortcutList: [
      { combo: 'Ctrl + T', action: 'Nueva pestana', why: 'Abre una nueva tarea sin abandonar la actual.' },
      { combo: 'Ctrl + W', action: 'Cerrar pestana', why: 'Limpia rapidamente el navegador.' },
      { combo: 'Ctrl + Shift + T', action: 'Reabrir pestana', why: 'Recupera lo que cerraste por error.' },
      { combo: 'Ctrl + L', action: 'Ir a la barra', why: 'Permite escribir una URL o busqueda de inmediato.' },
      { combo: 'Ctrl + R', action: 'Recargar', why: 'Actualiza una pagina cuando cambia contenido o falla una carga.' }
    ],
    tips: [
      'Reabrir pestanas cerradas es uno de los atajos mas agradecidos del navegador.',
      'Ctrl + L reduce mucho el tiempo al empezar una nueva busqueda.',
      'Si el usuario trabaja con muchas fuentes abiertas, este bloque aporta una mejora inmediata.'
    ]
  },
  system_control: {
    id: 'system_control', name: 'Control de Ventanas', category: 'Multitarea del Sistema', icon: Monitor, color: 'amber',
    desc: 'La productividad moderna depende de poder alternar entre aplicaciones, organizar ventanas y capturar contenido sin caos. Este bloque enseña combinaciones utiles para el sistema operativo y la multitarea.\n\nSon atajos muy valiosos para clases online, trabajo administrativo y preparacion de materiales.',
    details: 'Comandos destacados:\n• Alt + Tab: Cambia entre ventanas abiertas.\n• Win + Shift + S: Herramienta de recorte en Windows.\n• Win + Flechas: Ajusta la ventana a los lados o maximiza.\n• Ctrl + Shift + Esc: Abre el Administrador de tareas.',
    examples: 'Ideal para hacer capturas de una clase, trabajar con dos ventanas a la vez o cambiar entre navegador y documento sin perder segundos en cada salto.',
    keys: ['Alt', 'Tab', 'Win', 'Shift', 'S', 'Ctrl', 'Esc', 'ArrowUp', 'ArrowLeft', 'ArrowRight'],
    shortcutList: [
      { combo: 'Alt + Tab', action: 'Cambiar de ventana', why: 'Alterna entre programas abiertos de forma inmediata.' },
      { combo: 'Win + Shift + S', action: 'Captura parcial', why: 'Permite recortar la pantalla y compartir fragmentos concretos.' },
      { combo: 'Win + Flecha Izquierda', action: 'Ajustar a la izquierda', why: 'Ordena el escritorio para trabajar con dos apps en paralelo.' },
      { combo: 'Win + Flecha Arriba', action: 'Maximizar', why: 'Amplia la ventana actual con un gesto rapido.' },
      { combo: 'Ctrl + Shift + Esc', action: 'Administrador de tareas', why: 'Abre una herramienta clave cuando una app deja de responder.' }
    ],
    tips: [
      'La captura parcial es muy buena para materiales didacticos y soporte tecnico.',
      'Ajustar ventanas por mitades mejora mucho la multitarea en pantallas grandes.',
      'Alt + Tab se vuelve natural muy rapido y ahorra cientos de clics.'
    ]
  }
};

const keyboardLayout = [
  [
    { label: 'Esc', wide: 'w-12' }, { label: '1', wide: 'w-12' }, { label: '2', wide: 'w-12' }, { label: '3', wide: 'w-12' },
    { label: '4', wide: 'w-12' }, { label: '5', wide: 'w-12' }, { label: '6', wide: 'w-12' }, { label: '7', wide: 'w-12' },
    { label: '8', wide: 'w-12' }, { label: '9', wide: 'w-12' }, { label: '0', wide: 'w-12' }, { label: 'Backspace', wide: 'w-24' }
  ],
  [
    { label: 'Tab', wide: 'w-16' }, { label: 'Q', wide: 'w-12' }, { label: 'W', wide: 'w-12' }, { label: 'E', wide: 'w-12' },
    { label: 'R', wide: 'w-12' }, { label: 'T', wide: 'w-12' }, { label: 'Y', wide: 'w-12' }, { label: 'U', wide: 'w-12' },
    { label: 'I', wide: 'w-12' }, { label: 'O', wide: 'w-12' }, { label: 'P', wide: 'w-12' }, { label: 'Home', wide: 'w-16' }, { label: 'End', wide: 'w-16' }
  ],
  [
    { label: 'Caps', wide: 'w-20' }, { label: 'A', wide: 'w-12' }, { label: 'S', wide: 'w-12' }, { label: 'D', wide: 'w-12' },
    { label: 'F', wide: 'w-12' }, { label: 'G', wide: 'w-12' }, { label: 'H', wide: 'w-12' }, { label: 'J', wide: 'w-12' },
    { label: 'K', wide: 'w-12' }, { label: 'L', wide: 'w-12' }, { label: 'Enter', wide: 'w-24' }
  ],
  [
    { label: 'Shift', wide: 'w-24' }, { label: 'Z', wide: 'w-12' }, { label: 'X', wide: 'w-12' }, { label: 'C', wide: 'w-12' },
    { label: 'V', wide: 'w-12' }, { label: 'B', wide: 'w-12' }, { label: 'N', wide: 'w-12' }, { label: 'M', wide: 'w-12' },
    { label: 'ArrowLeft', wide: 'w-16' }, { label: 'ArrowRight', wide: 'w-16' }, { label: 'ArrowUp', wide: 'w-16' }
  ],
  [
    { label: 'Ctrl', wide: 'w-16' }, { label: 'Win', wide: 'w-16' }, { label: 'Alt', wide: 'w-16' }, { label: 'Space', wide: 'w-56' },
    { label: 'Alt', wide: 'w-16' }, { label: 'Ctrl', wide: 'w-16' }, { label: 'ArrowDown', wide: 'w-16' }, { label: 'Delete', wide: 'w-16' }
  ]
];

const tabConfig = [
  {
    id: 'home',
    group: 'Inicio',
    step: '00',
    title: 'Inicio',
    subtitle: 'Bienvenido al aula',
    description: 'Tu viaje comienza aqui.',
    icon: Sparkles,
    activeClass: 'bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 text-white shadow-xl border-blue-800 scale-105 z-10',
    idleClass: 'bg-white text-slate-500 hover:bg-gradient-to-r hover:from-blue-50 hover:via-violet-50 hover:to-cyan-50 hover:text-blue-700 border-slate-200 shadow-sm',
  },
  {
    id: 'hardware',
    group: 'Fundamentos del Ordenador',
    step: '01',
    title: 'Hardware',
    subtitle: 'Entiende el equipo por dentro',
    description: 'Visualiza las piezas del ordenador y como trabajan juntas.',
    icon: Rotate3D,
    activeClass: 'bg-emerald-600 text-white shadow-xl border-emerald-800 scale-105 z-10',
    idleClass: 'bg-white text-slate-500 hover:bg-emerald-50 hover:text-emerald-700 border-slate-200 shadow-sm',
  },
  {
    id: 'peripherals',
    group: 'Fundamentos del Ordenador',
    step: '02',
    title: 'Perifericos',
    subtitle: 'Entrada, salida y conexion',
    description: 'Distingue dispositivos de entrada, salida y transferencia de informacion.',
    icon: Headphones,
    activeClass: 'bg-cyan-600 text-white shadow-xl border-cyan-800 scale-105 z-10',
    idleClass: 'bg-white text-slate-500 hover:bg-cyan-50 hover:text-cyan-700 border-slate-200 shadow-sm',
  },
  {
    id: 'software',
    group: 'Fundamentos del Ordenador',
    step: '03',
    title: 'Software',
    subtitle: 'Sistema, drivers y apps',
    description: 'Entiende las capas del software y como se relacionan con el hardware.',
    icon: AppWindow,
    activeClass: 'bg-slate-700 text-white shadow-xl border-slate-900 scale-105 z-10',
    idleClass: 'bg-white text-slate-500 hover:bg-slate-50 hover:text-slate-700 border-slate-200 shadow-sm',
  },
  {
    id: 'files',
    group: 'Almacenamiento y Datos',
    step: '04',
    title: 'Archivos',
    subtitle: 'Orden, formatos y carpetas',
    description: 'Organiza documentos y entiende como se almacenan.',
    icon: FolderOpen,
    activeClass: 'bg-amber-500 text-white shadow-xl border-amber-700 scale-105 z-10',
    idleClass: 'bg-white text-slate-500 hover:bg-amber-50 hover:text-amber-700 border-slate-200 shadow-sm',
  },
  {
    id: 'cloud',
    group: 'Almacenamiento y Datos',
    step: '05',
    title: 'Local vs Nube',
    subtitle: 'Donde vive tu informacion',
    description: 'Comprende las diferencias entre trabajar de forma local y en la nube.',
    icon: Cloud,
    activeClass: 'bg-blue-600 text-white shadow-xl border-blue-800 scale-105 z-10',
    idleClass: 'bg-white text-slate-500 hover:bg-blue-50 hover:text-blue-700 border-slate-200 shadow-sm',
  },
  {
    id: 'backup',
    group: 'Datos y Seguridad',
    step: '06',
    title: 'Respaldo',
    subtitle: 'Copias de seguridad y recuperacion',
    description: 'Aprende a proteger tus datos con estrategias de respaldo locales y en la nube.',
    icon: Database,
    activeClass: 'bg-teal-600 text-white shadow-xl border-teal-800 scale-105 z-10',
    idleClass: 'bg-white text-slate-500 hover:bg-teal-50 hover:text-teal-700 border-slate-200 shadow-sm',
  },
  {
    id: 'mobile',
    group: 'Datos y Seguridad',
    step: '07',
    title: 'Moviles',
    subtitle: 'Android, iOS y seguridad movil',
    description: 'Gestiona la privacidad, permisos y productividad en dispositivos moviles.',
    icon: Smartphone,
    activeClass: 'bg-indigo-600 text-white shadow-xl border-indigo-800 scale-105 z-10',
    idleClass: 'bg-white text-slate-500 hover:bg-indigo-50 hover:text-indigo-700 border-slate-200 shadow-sm',
  },
  {
    id: 'internet',
    group: 'Navegacion y Comunicacion',
    step: '08',
    title: 'Navegacion',
    subtitle: 'Buscar, contrastar y protegerse',
    description: 'Aprende a moverte por Internet con criterio y seguridad.',
    icon: Globe,
    activeClass: 'bg-purple-600 text-white shadow-xl border-purple-800 scale-105 z-10',
    idleClass: 'bg-white text-slate-500 hover:bg-purple-50 hover:text-purple-700 border-slate-200 shadow-sm',
  },
  {
    id: 'navegadores',
    group: 'Navegacion y Comunicacion',
    step: '09',
    title: 'Navegadores',
    subtitle: 'Buscadores y navegacion web',
    description: 'Domina navegadores, buscadores y tecnicas de busqueda efectiva.',
    icon: AppWindow,
    activeClass: 'bg-violet-600 text-white shadow-xl border-violet-800 scale-105 z-10',
    idleClass: 'bg-white text-slate-500 hover:bg-violet-50 hover:text-violet-700 border-slate-200 shadow-sm',
  },
  {
    id: 'security',
    group: 'Navegacion y Comunicacion',
    step: '10',
    title: 'Seguridad',
    subtitle: 'Proteccion y autocuidado digital',
    description: 'Aprende a proteger cuentas, detectar fraudes y mantener tus datos a salvo.',
    icon: ShieldCheck,
    activeClass: 'bg-rose-600 text-white shadow-xl border-rose-800 scale-105 z-10',
    idleClass: 'bg-white text-slate-500 hover:bg-rose-50 hover:text-rose-700 border-slate-200 shadow-sm',
  },
  {
    id: 'email',
    group: 'Navegacion y Comunicacion',
    step: '11',
    title: 'Correo',
    subtitle: 'Comunicacion y bandeja segura',
    description: 'Domina email, adjuntos, destinatarios y netiqueta para estudiar y trabajar mejor.',
    icon: MailWarning,
    activeClass: 'bg-sky-600 text-white shadow-xl border-sky-800 scale-105 z-10',
    idleClass: 'bg-white text-slate-500 hover:bg-sky-50 hover:text-sky-700 border-slate-200 shadow-sm',
  },
  {
    id: 'desktop',
    group: 'Entorno de Trabajo',
    step: '12',
    title: 'Escritorio',
    subtitle: 'Interfaz y elementos del SO',
    description: 'Aprende a moverte por el escritorio, barra de tareas, iconos, ventanas y menus.',
    icon: Monitor,
    activeClass: 'bg-cyan-600 text-white shadow-xl border-cyan-800 scale-105 z-10',
    idleClass: 'bg-white text-slate-500 hover:bg-cyan-50 hover:text-cyan-700 border-slate-200 shadow-sm',
  },
  {
    id: 'red_instalacion',
    group: 'Entorno de Trabajo',
    step: '13',
    title: 'Redes WiFi',
    subtitle: 'Instalacion y configuracion',
    description: 'Aprende a instalar, configurar y optimizar redes WiFi en casa.',
    icon: Wifi,
    activeClass: 'bg-emerald-600 text-white shadow-xl border-emerald-800 scale-105 z-10',
    idleClass: 'bg-white text-slate-500 hover:bg-emerald-50 hover:text-emerald-700 border-slate-200 shadow-sm',
  },
  {
    id: 'ethernet',
    group: 'Entorno de Trabajo',
    step: '14',
    title: 'Redes Cableadas',
    subtitle: 'Ethernet y red domestica',
    description: 'Comprende las redes cableadas, diagnostico y dispositivos de red.',
    icon: Cable,
    activeClass: 'bg-amber-600 text-white shadow-xl border-amber-800 scale-105 z-10',
    idleClass: 'bg-white text-slate-500 hover:bg-amber-50 hover:text-amber-700 border-slate-200 shadow-sm',
  },
  {
    id: 'communication',
    group: 'Comunicacion Digital',
    step: '15',
    title: 'Comunicacion',
    subtitle: 'Mensajeria, videollamadas y colaboracion',
    description: 'Domina las herramientas de comunicacion digital profesional y personal.',
    icon: MessageSquare,
    activeClass: 'bg-pink-600 text-white shadow-xl border-pink-800 scale-105 z-10',
    idleClass: 'bg-white text-slate-500 hover:bg-pink-50 hover:text-pink-700 border-slate-200 shadow-sm',
  },
  {
    id: 'office',
    group: 'Productividad',
    step: '16',
    title: 'Ofimatica',
    subtitle: 'Documentos, calculo y presentacion',
    description: 'Elige la herramienta adecuada para redactar, calcular, presentar y compartir.',
    icon: Presentation,
    activeClass: 'bg-teal-600 text-white shadow-xl border-teal-800 scale-105 z-10',
    idleClass: 'bg-white text-slate-500 hover:bg-teal-50 hover:text-teal-700 border-slate-200 shadow-sm',
  },
  {
    id: 'keyboard',
    group: 'Productividad',
    step: '17',
    title: 'Atajos',
    subtitle: 'Productividad con teclado',
    description: 'Domina combinaciones para navegar y trabajar con mas fluidez.',
    icon: Keyboard,
    activeClass: 'bg-indigo-600 text-white shadow-xl border-indigo-800 scale-105 z-10',
    idleClass: 'bg-white text-slate-500 hover:bg-indigo-50 hover:text-indigo-700 border-slate-200 shadow-sm',
  },
  {
    id: 'content',
    group: 'Productividad',
    step: '18',
    title: 'Contenido',
    subtitle: 'Creacion de contenido digital',
    description: 'Aprende a crear contenido efectivo: copywriting, blogs, redes sociales, video, podcast y buenas practicas.',
    icon: Video,
    activeClass: 'bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-xl border-blue-800 scale-105 z-10',
    idleClass: 'bg-white text-slate-500 hover:bg-gradient-to-r hover:from-blue-50 hover:to-violet-50 hover:text-blue-700 border-slate-200 shadow-sm',
  },
  {
    id: 'ai_basics',
    group: 'Tecnologias Emergentes',
    step: '19',
    title: 'Fundamentos IA',
    subtitle: 'Contexto, prompts y limitaciones',
    description: 'Aprende como funcionan los LLM, como escribir buenos prompts y entender sus limitaciones.',
    icon: BrainCircuit,
    activeClass: 'bg-violet-600 text-white shadow-xl border-violet-800 scale-105 z-10',
    idleClass: 'bg-white text-slate-500 hover:bg-violet-50 hover:text-violet-700 border-slate-200 shadow-sm',
  },
  {
    id: 'ai',
    group: 'Tecnologias Emergentes',
    step: '20',
    title: 'Inteligencia IA',
    subtitle: 'Herramientas y usos reales',
    description: 'Explora modelos, asistentes y creadores multimedia.',
    icon: Bot,
    activeClass: 'bg-emerald-500 text-white shadow-xl border-emerald-700 scale-105 z-10',
    idleClass: 'bg-white text-slate-500 hover:bg-emerald-50 hover:text-emerald-700 border-slate-200 shadow-sm',
  },
  {
    id: 'assessment',
    group: 'Evaluacion Final',
    step: '21',
    title: 'Ponte a prueba',
    subtitle: 'Retos, orden y clasificacion',
    description: 'Reune todo lo aprendido en quizzes, arrastre, orden y retos finales.',
    icon: Trophy,
    activeClass: 'bg-fuchsia-600 text-white shadow-xl border-fuchsia-800 scale-105 z-10',
    idleClass: 'bg-white text-slate-500 hover:bg-fuchsia-50 hover:text-fuchsia-700 border-slate-200 shadow-sm',
  }
];

const tabDataMap = {
  home: {},
  hardware: hardwareData,
  peripherals: peripheralData,
  software: softwareData,
  files: filesData,
  cloud: cloudData,
  backup: backupData,
  mobile: mobileData,
  internet: internetData,
  navegadores: navegadoresData,
  security: securityData,
  email: emailData,
  desktop: {},
  red_instalacion: redInstalacionData,
  red_basicos: redBasicosData,
  ethernet: ethernetData,
  communication: communicationData,
  office: officeData,
  keyboard: keyboardData,
  content: contentData,
  ai_basics: aiBasicsData,
  ai: aiData,
  assessment: assessmentData,
};

const sectionGroupMeta = {
  Inicio: {
    summary: 'Tu punto de partida en el aula virtual.',
  },
  'Fundamentos del Ordenador': {
    summary: 'Hardware, perifericos y software: entiende como funciona el equipo por dentro.',
  },
  'Almacenamiento y Datos': {
    summary: 'Archivos, carpetas, nube y como proteger tus datos con backups.',
  },
  'Datos y Seguridad': {
    summary: 'Dispositivos moviles, privacidad, permisos y estrategias de respaldo.',
  },
  'Navegacion y Comunicacion': {
    summary: 'Internet, navegadores, seguridad, correo y busqueda con criterio.',
  },
  'Entorno de Trabajo': {
    summary: 'Escritorio del sistema, redes WiFi, Ethernet y comunicacion digital.',
  },
  'Comunicacion Digital': {
    summary: 'Mensajeria, videoconferencia, espacios colaborativos y netiqueta.',
  },
  Productividad: {
    summary: 'Ofimatica, atajos de teclado y creacion de contenido digital.',
  },
  'Tecnologias Emergentes': {
    summary: 'Fundamentos de IA, herramientas de inteligencia artificial y usos reales.',
  },
  'Evaluacion Final': {
    summary: 'Practica y verifica todo lo aprendido con quizzes y retos.',
  },
};

// ==========================================
// MAPEADO DE COLORES DE TAILWIND (BRAND CYBERTECH)
// ==========================================
const colorMap = {
  emerald: { bgBase: 'bg-gradient-to-r from-emerald-500 to-teal-500', bgLight: 'bg-emerald-50/80', text: 'text-emerald-700', borderLight: 'border-emerald-200/60', borderHeavy: 'border-emerald-400', ring: 'ring-emerald-400/40', glow: 'shadow-[0_0_20px_rgba(52,211,153,0.25)]' },
  blue: { bgBase: 'bg-gradient-to-r from-blue-500 to-blue-600', bgLight: 'bg-blue-50/80', text: 'text-blue-700', borderLight: 'border-blue-200/60', borderHeavy: 'border-blue-400', ring: 'ring-blue-400/40', glow: 'shadow-[0_0_20px_rgba(59,130,246,0.3)]' },
  purple: { bgBase: 'bg-gradient-to-r from-violet-600 to-violet-700', bgLight: 'bg-violet-50/80', text: 'text-violet-700', borderLight: 'border-violet-200/60', borderHeavy: 'border-violet-400', ring: 'ring-violet-400/40', glow: 'shadow-[0_0_20px_rgba(139,92,246,0.3)]' },
  red: { bgBase: 'bg-gradient-to-r from-red-500 to-rose-500', bgLight: 'bg-red-50/80', text: 'text-red-700', borderLight: 'border-red-200/60', borderHeavy: 'border-red-400', ring: 'ring-red-400/40', glow: 'shadow-[0_0_20px_rgba(239,68,68,0.3)]' },
  amber: { bgBase: 'bg-gradient-to-r from-amber-500 to-orange-500', bgLight: 'bg-amber-50/80', text: 'text-amber-700', borderLight: 'border-amber-200/60', borderHeavy: 'border-amber-400', ring: 'ring-amber-400/40', glow: 'shadow-[0_0_20px_rgba(245,158,11,0.3)]' },
  zinc: { bgBase: 'bg-gradient-to-r from-zinc-500 to-slate-500', bgLight: 'bg-zinc-50/80', text: 'text-zinc-700', borderLight: 'border-zinc-200/60', borderHeavy: 'border-zinc-400', ring: 'ring-zinc-400/40', glow: 'shadow-[0_0_20px_rgba(113,113,122,0.25)]' },
  cyan: { bgBase: 'bg-gradient-to-r from-cyan-500 to-cyan-600', bgLight: 'bg-cyan-50/80', text: 'text-cyan-700', borderLight: 'border-cyan-200/60', borderHeavy: 'border-cyan-400', ring: 'ring-cyan-400/40', glow: 'shadow-[0_0_25px_rgba(6,182,212,0.35)]' },
  indigo: { bgBase: 'bg-gradient-to-r from-indigo-500 to-violet-500', bgLight: 'bg-indigo-50/80', text: 'text-indigo-700', borderLight: 'border-indigo-200/60', borderHeavy: 'border-indigo-400', ring: 'ring-indigo-400/40', glow: 'shadow-[0_0_20px_rgba(99,102,241,0.3)]' },
  fuchsia: { bgBase: 'bg-gradient-to-r from-fuchsia-500 to-pink-500', bgLight: 'bg-fuchsia-50/80', text: 'text-fuchsia-700', borderLight: 'border-fuchsia-200/60', borderHeavy: 'border-fuchsia-400', ring: 'ring-fuchsia-400/40', glow: 'shadow-[0_0_20px_rgba(217,70,239,0.3)]' },
  slate: { bgBase: 'bg-gradient-to-r from-slate-500 to-slate-600', bgLight: 'bg-slate-50/80', text: 'text-slate-700', borderLight: 'border-slate-200/60', borderHeavy: 'border-slate-400', ring: 'ring-slate-400/40', glow: 'shadow-[0_0_20px_rgba(100,116,139,0.25)]' },
};

export default function App() {
  const { isDark, toggleTheme } = useTheme();
  const {
    activeTab, setActiveTab,
    selectedItem, setSelectedItem,
    isSectionMenuOpen, setIsSectionMenuOpen,
    expandedSectionGroup, setExpandedSectionGroup,
    isScrolled, setIsScrolled,
    showAchievementsModal, setShowAchievementsModal,
    handleClearSelection,
  } = useApp();

  const [softwareQuizSelections, setSoftwareQuizSelections] = useState({});
  const [securityQuizSelections, setSecurityQuizSelections] = useState({});
  const [emailQuizSelections, setEmailQuizSelections] = useState({});
  const [emailRecipientView, setEmailRecipientView] = useState('para');
  const [officeTaskView, setOfficeTaskView] = useState('cv');
  const [officeWorkspaceZone, setOfficeWorkspaceZone] = useState('toolbar');
  const [officeQuizSelections, setOfficeQuizSelections] = useState({});
  const [assessmentAssignments, setAssessmentAssignments] = useState({});
  const [draggingAssessmentItem, setDraggingAssessmentItem] = useState(null);
  const [assessmentOrder, setAssessmentOrder] = useState(() => shuffleArray(assessmentOrderBase));
  const [draggingOrderItem, setDraggingOrderItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const activeTabMeta = tabConfig.find((tab) => tab.id === activeTab) || tabConfig[0];
  const currentDataSet = tabDataMap[activeTab] || {};
  const currentItems = Object.values(currentDataSet);
  const itemCount = currentItems.length;
  const hasActiveDetail = Boolean(selectedItem && currentDataSet[selectedItem.id]);
  const sectionGroups = tabConfig.reduce((acc, tab) => {
    if (!acc[tab.group]) acc[tab.group] = [];
    acc[tab.group].push(tab);
    return acc;
  }, {});
  const orderedSectionGroups = Object.entries(sectionGroups);
  
  // Estado 3D para el Módulo 1
  const [rotation, setRotation] = useState({ x: 60, z: -40 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  // Función para reproducir sonidos UI (sintetizados con Web Audio API)
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
        case 'tabChange':
          oscillator.frequency.value = 600;
          oscillator.type = 'sine';
          gainNode.gain.value = 0.05;
          gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.08);
          oscillator.start(audioContext.currentTime);
          oscillator.stop(audioContext.currentTime + 0.08);
          break;
      }
    } catch {
      // Silently fail if audio not supported
    }
  };

  // Estado para tutorial/guide tour
  const [tourStep, setTourStep] = useState(() => {
    const saved = localStorage.getItem('aula-tour-done');
    return saved ? -1 : 0;
  });

  const tourSteps = [
    { target: 'logo', title: 'Bienvenido', desc: 'Este es el aula virtual de Competencias Digitales. Haz clic aqui para volver al inicio.' },
    { target: 'nav', title: 'Navegacion', desc: 'Usa estos menus para moverte entre los 13 modulo.' },
    { target: 'progress', title: 'Tu Progreso', desc: 'Esta barra muestra cuanto has avnzado en el curso.' },
    { target: 'achievements', title: 'Logros', desc: 'Completa modulos para desbloquear logros y badges.' },
    { target: 'module', title: 'Contenido', desc: 'Selecciona un modulo para empezar a aprender.' },
  ];

  const startTour = () => {
    setTourStep(0);
    playSound('success');
  };

  const nextTourStep = () => {
    if (tourStep < tourSteps.length - 1) {
      setTourStep(prev => prev + 1);
      playSound('click');
    } else {
      setTourStep(-1);
      localStorage.setItem('aula-tour-done', 'true');
      playSound('success');
    }
  };

  const skipTour = () => {
    setTourStep(-1);
    localStorage.setItem('aula-tour-done', 'true');
  };

  // Estado para periféricos (hover)
  const [hoveredPeripheral, setHoveredPeripheral] = useState(null);

  // Estado para progreso persistente de módulos
  const [moduleProgress, _setModuleProgress] = useState(() => {
    const saved = localStorage.getItem('aula-module-progress');
    return saved ? JSON.parse(saved) : {};
  });

  // Función para obtener progreso de un módulo
  const isModuleCompleted = (moduleId) => {
    return moduleProgress[moduleId]?.completed || false;
  };

  // Estado para gamificación (achievements) - VERSIÓN MEJORADA
  const [achievements, setAchievements] = useState(() => {
    const saved = localStorage.getItem('aula-achievements');
    return saved ? JSON.parse(saved) : {
      // Logros básicos de progreso
      firstStep: false,
      tenPercent: false,
      quarterCourse: false,
      halfCourse: false,
      threeQuarters: false,
      almostThere: false,
      fullCourse: false,
      // Logros de sección (completar TODOS los items de un módulo)
      hardwareMaster: false,
      peripheralsMaster: false,
      cloudMaster: false,
      softwareMaster: false,
      internetMaster: false,
      securityMaster: false,
      emailMaster: false,
      contentMaster: false,
      filesMaster: false,
      keyboardMaster: false,
      officeMaster: false,
      aiMaster: false,
      assessmentMaster: false,
      // Logros especiales
      speedRunner: false,
      perfectionist: false,
      explorer: false,
      // Logros de racha
      streak3: false,
      streak7: false,
      streak30: false,
    };
  });

  // Función para desbloquear achievement
  const unlockAchievement = (achievementId) => {
    setAchievements(prev => {
      if (prev[achievementId]) return prev;
      const newAchievements = { ...prev, [achievementId]: true };
      localStorage.setItem('aula-achievements', JSON.stringify(newAchievements));
      playSound('achievement');
      setXpNotification({ show: true, amount: 0, type: 'achievement', name: achievementId });
      return newAchievements;
    });
  };

  // XP y Sistema de Niveles
  const LEVELS = [
    { level: 1, name: 'Principiante', xpRequired: 0 },
    { level: 2, name: 'Aprendiz', xpRequired: 100 },
    { level: 3, name: 'Intermedio', xpRequired: 300 },
    { level: 4, name: 'Avanzado', xpRequired: 600 },
    { level: 5, name: 'Experto', xpRequired: 1000 },
    { level: 6, name: 'Maestro', xpRequired: 1500 },
  ];

  const [xp, setXp] = useState(() => {
    const saved = localStorage.getItem('aula-xp');
    return saved ? parseInt(saved, 10) : 0;
  });

  const [xpNotification, setXpNotification] = useState({ show: false, amount: 0, type: '', name: '' });

  const currentLevel = LEVELS.reduce((acc, l) => xp >= l.xpRequired ? l : acc, LEVELS[0]);
  const nextLevel = LEVELS.find(l => l.xpRequired > xp) || LEVELS[LEVELS.length - 1];
  const levelProgress = nextLevel ? ((xp - currentLevel.xpRequired) / (nextLevel.xpRequired - currentLevel.xpRequired)) * 100 : 100;

  const awardXp = (amount, reason) => {
    setXp(prev => {
      const newXp = prev + amount;
      localStorage.setItem('aula-xp', newXp.toString());
      return newXp;
    });
    setXpNotification({ show: true, amount, type: 'xp', reason });
    setTimeout(() => setXpNotification(prev => ({ ...prev, show: false })), 2500);
  };

  // Sistema de Rachas
  const [streak, setStreak] = useState(() => {
    const saved = localStorage.getItem('aula-streak');
    if (saved) {
      const data = JSON.parse(saved);
      const today = new Date().toDateString();
      const lastLogin = new Date(data.lastLogin).toDateString();
      const yesterday = new Date(Date.now() - 86400000).toDateString();
      if (lastLogin !== today && lastLogin !== yesterday) {
        return { current: 0, best: data.best, lastLogin: data.lastLogin };
      }
      return data;
    }
    return { current: 0, best: 0, lastLogin: null };
  });

  const checkStreak = () => {
    const today = new Date().toDateString();
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    const lastLogin = streak.lastLogin ? new Date(streak.lastLogin).toDateString() : null;

    if (lastLogin === today) return;

    if (!lastLogin || lastLogin === yesterday) {
      const newCurrent = streak.current + 1;
      const newBest = Math.max(newCurrent, streak.best);
      const newStreak = { current: newCurrent, best: newBest, lastLogin: new Date().toISOString() };
      setStreak(newStreak);
      localStorage.setItem('aula-streak', JSON.stringify(newStreak));

      if (newCurrent === 3) { awardXp(50, 'Racha de 3 días'); unlockAchievement('streak3'); }
      if (newCurrent === 7) { awardXp(150, 'Racha de 7 días'); unlockAchievement('streak7'); }
      if (newCurrent === 30) { awardXp(500, 'Racha de 30 días'); unlockAchievement('streak30'); }
    } else {
      const newStreak = { current: 1, best: streak.best, lastLogin: new Date().toISOString() };
      setStreak(newStreak);
      localStorage.setItem('aula-streak', JSON.stringify(newStreak));
    }
  };

  useEffect(() => { checkStreak(); }, []);

  // Seguimiento de tiempo por módulo (para Speed Runner)
  const [moduleStartTime, setModuleStartTime] = useState({});

  const startModuleTimer = (moduleId) => {
    if (!moduleStartTime[moduleId]) {
      setModuleStartTime(prev => ({ ...prev, [moduleId]: Date.now() }));
    }
  };

  const getModuleTime = (moduleId) => {
    if (!moduleStartTime[moduleId]) return Infinity;
    return Date.now() - moduleStartTime[moduleId];
  };

  // Items visitados por módulo (para Explorer)
  const [visitedItems, setVisitedItems] = useState(() => {
    const saved = localStorage.getItem('aula-visited-items');
    return saved ? JSON.parse(saved) : {};
  });

  const markItemVisited = (moduleId, itemId) => {
    setVisitedItems(prev => {
      const moduleItems = prev[moduleId] || new Set();
      const newModuleItems = new Set(moduleItems);
      newModuleItems.add(itemId);
      const newVisited = { ...prev, [moduleId]: newModuleItems };
      localStorage.setItem('aula-visited-items', JSON.stringify(
        Object.fromEntries(Object.entries(newVisited).map(([k, v]) => [k, Array.from(v)]))
      ));
      return newVisited;
    });
  };

  // Verificar achievements al cambiar de tab
  useEffect(() => {
    if (activeTab === 'home') return;

    // Logro por primer paso
    if (!achievements.firstStep) {
      unlockAchievement('firstStep');
    }

    // Contar módulos completados
    const completedCount = Object.values(moduleProgress).filter(p => p.completed).length;
    const totalModules = tabConfig.filter(t => t.id !== 'home').length;

    // Logros de progreso
    if (completedCount >= 1 && !achievements.tenPercent) { unlockAchievement('tenPercent'); awardXp(50, 'Inicio - 1 módulo'); }
    if (completedCount >= Math.floor(totalModules * 0.25) && !achievements.quarterCourse) { unlockAchievement('quarterCourse'); awardXp(75, 'Cuarto - 25%'); }
    if (completedCount >= Math.floor(totalModules * 0.5) && !achievements.halfCourse) { unlockAchievement('halfCourse'); awardXp(100, 'Mitad - 50%'); }
    if (completedCount >= Math.floor(totalModules * 0.75) && !achievements.threeQuarters) { unlockAchievement('threeQuarters'); awardXp(150, 'Casi - 75%'); }
    if (completedCount >= totalModules - 1 && !achievements.almostThere) { unlockAchievement('almostThere'); awardXp(200, 'Casi - N-1'); }
    if (completedCount >= totalModules && !achievements.fullCourse) { unlockAchievement('fullCourse'); awardXp(500, 'Graduado'); }

    // Verificar logros de maestría (explorer) y velocidad (speedRunner)
    const currentData = tabDataMap[activeTab];
    if (currentData) {
      const moduleItems = Object.keys(currentData);
      const visitedInModule = Array.isArray(visitedItems[activeTab]) ? visitedItems[activeTab] : [];

      // Award XP por explorar items
      moduleItems.forEach(itemId => {
        if (visitedInModule.includes(itemId)) {
          // Ya visitado
        }
      });

      // Verificar si completó todos los items (Explorer)
      const allVisited = moduleItems.every(itemId => visitedInModule.includes(itemId));
      if (allVisited && moduleItems.length > 0 && !achievements.explorer) {
        unlockAchievement('explorer');
        awardXp(100, 'Explorer - Todo explorado');
      }

      // Verificar si completó el módulo actual
      if (moduleProgress[activeTab]?.completed) {
        const timeSpent = getModuleTime(activeTab);
        // Speed Runner: completar módulo en menos de 5 minutos (300000ms)
        if (timeSpent < 300000 && !achievements.speedRunner) {
          unlockAchievement('speedRunner');
          awardXp(75, 'Speed Runner');
        }
      }
    }

    // Logro de completar módulo actual (maestría real)
    const moduleAchievementMap = {
      hardware: 'hardwareMaster',
      peripherals: 'peripheralsMaster',
      cloud: 'cloudMaster',
      software: 'softwareMaster',
      internet: 'internetMaster',
      security: 'securityMaster',
      email: 'emailMaster',
      content: 'contentMaster',
      files: 'filesMaster',
      keyboard: 'keyboardMaster',
      office: 'officeMaster',
      ai: 'aiMaster',
      assessment: 'assessmentMaster',
    };

    const achievementKey = moduleAchievementMap[activeTab];
    if (achievementKey && !achievements[achievementKey]) {
      const currentData = tabDataMap[activeTab];
      if (currentData) {
        const moduleItems = Object.keys(currentData);
        const visitedInModule = Array.isArray(visitedItems[activeTab]) ? visitedItems[activeTab] : [];
        // Desbloquear maestría solo si ha visitado TODOS los items
        const allVisited = moduleItems.length > 0 && moduleItems.every(itemId => visitedInModule.includes(itemId));
        if (allVisited) {
          unlockAchievement(achievementKey);
          awardXp(200, `Maestría ${activeTab}`);
        }
      }
    }
  }, [activeTab, selectedItem, moduleProgress, visitedItems]);

  const handleTabChange = (tab) => {
    if (tab !== 'home' && tab !== activeTab) {
      startModuleTimer(tab);
      awardXp(10, 'Visitar módulo');
    }
    setActiveTab(tab);
    setSelectedItem(null);
    setIsSectionMenuOpen(false);
    playSound('tabChange');
  };

  const handleSoftwareQuizSelect = (itemId, answer) => {
    setSoftwareQuizSelections((prev) => ({ ...prev, [itemId]: answer }));
  };

  const handleSecurityQuizSelect = (itemId, isSafe) => {
    setSecurityQuizSelections((prev) => ({ ...prev, [itemId]: isSafe }));
  };

  const handleEmailQuizSelect = (itemId, answer) => {
    setEmailQuizSelections((prev) => ({ ...prev, [itemId]: answer }));
  };

  const handleOfficeQuizSelect = (itemId, answer) => {
    setOfficeQuizSelections((prev) => ({ ...prev, [itemId]: answer }));
  };

  const resetAssessmentArea = () => {
    setSoftwareQuizSelections({});
    setSecurityQuizSelections({});
    setEmailQuizSelections({});
    setOfficeQuizSelections({});
    setAssessmentAssignments({});
    setAssessmentOrder(shuffleArray(assessmentOrderBase));
  };

  const handleSelect = (id, e, dataSet) => {
    if (e && e.stopPropagation) e.stopPropagation();
    setSelectedItem((prev) => (prev?.id === id ? null : dataSet[id]));
    if (id && activeTab !== 'home') {
      markItemVisited(activeTab, id);
      awardXp(5, 'Ver detalle');
    }
    playSound('click');
  };

  const handleStartModule = () => {
    if (!currentItems.length) return;
    setSelectedItem(currentItems[0]);
    playSound('success');
  };

  useEffect(() => {
    setExpandedSectionGroup(activeTabMeta.group);
  }, [activeTabMeta.group]);

  useEffect(() => {
    if (officeData[selectedItem?.id] && officeWorkspaceViews[selectedItem.id]) {
      setOfficeWorkspaceZone(officeWorkspaceViews[selectedItem.id].zones[0].id);
    }
  }, [selectedItem]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isSectionMenuOpen) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isSectionMenuOpen]);

  // === Lógica Drag 3D ===
  const handleDragStart = (x, y) => { setIsDragging(true); setStartPos({ x, y }); };
  const handleDragMove = (x, y) => {
    if (!isDragging) return;
    setRotation(prev => ({
      x: Math.max(20, Math.min(85, prev.x - (y - startPos.y) * 0.5)),
      z: prev.z + (x - startPos.x) * 0.5
    }));
    setStartPos({ x, y });
  };
  const handleDragEnd = () => setIsDragging(false);

  // === RENDERIZADOS DE LAS PESTAÑAS PRINCIPALES ===



  return (
    <div className={`min-h-screen font-sans flex flex-col transition-colors duration-500 ${isDark ? 'bg-slate-950 text-slate-100' : 'bg-[#1a1f3c] text-slate-100'}`}>
      <div className={`fixed inset-0 pointer-events-none ${isDark ? 'bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.15),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.1),transparent_22%)] circuit-pattern-light' : 'bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.08),transparent_28%)] circuit-pattern-light'}`}></div>
      <div className={`fixed inset-0 pointer-events-none ${isDark ? 'bg-slate-950/30' : 'bg-[#1a1f3c]/40 backdrop-blur-[1px]'}`}></div>
      <div className="relative flex flex-col">
      <header className={`hidden lg:block fixed top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 md:top-5 md:left-6 md:right-6 z-40 transition-all duration-500`}>
        <div className={`max-w-[1600px] mx-auto transition-all duration-500 ${
          isScrolled
            ? isDark
              ? 'rounded-sm border border-slate-700/50 bg-slate-950/85 shadow-[0_28px_70px_rgba(0,0,0,0.4)] backdrop-blur-2xl'
              : 'rounded-sm border border-white/20 bg-[#0f1229]/90 shadow-[0_28px_70px_rgba(0,0,0,0.25)] backdrop-blur-2xl'
            : 'rounded-sm border border-white/10 bg-slate-950/70 shadow-[0_14px_40px_rgba(0,0,0,0.15)] backdrop-blur-xl'
        }`}>
          <div className={`flex items-center justify-between gap-4 transition-all duration-500 min-w-0 ${isScrolled ? 'px-4 py-3 sm:px-5 md:px-6' : 'px-3 py-2.5 sm:px-4 md:px-5'}`}>
            <button onClick={() => handleTabChange('home')} data-tour="logo" className="flex items-center gap-4 group min-w-0 text-left">
              <div className="relative w-10 h-10 shrink-0">
                <div className="absolute inset-0 bg-blue-500 blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative w-full h-full flex items-center justify-center">
                  <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:scale-105 transition-transform duration-300">
                    <defs>
                      <linearGradient id="tech-logo-grad-navbar" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="50%" stopColor="#8B5CF6" />
                        <stop offset="100%" stopColor="#06B6D4" />
                      </linearGradient>
                    </defs>
                    <path d="M6 10L16 4L26 10L6 22L16 28L26 22" stroke="url(#tech-logo-grad-navbar)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="6" cy="10" r="3.5" fill="#3B82F6" />
                    <circle cx="16" cy="16" r="3.5" fill="#8B5CF6" />
                    <circle cx="26" cy="22" r="3.5" fill="#06B6D4" />
                  </svg>
                </div>
              </div>
              <div className="min-w-0 flex flex-col">
                <p className={`text-base font-black tracking-tight leading-none ${isDark || !isScrolled ? 'text-white' : 'text-slate-900'}`}>Digital Synapse</p>
                <p className={`hidden md:block text-[10px] uppercase tracking-[0.2em] font-black leading-tight mt-1 ${isDark || !isScrolled ? 'text-slate-400' : 'text-slate-500'}`}>
                  {activeTabMeta.title}
                </p>
              </div>
            </button>

            <nav className="hidden lg:flex items-center gap-1 min-w-0">
              {orderedSectionGroups.map(([group, tabs]) => {
                const isActiveGroup = activeTabMeta.group === group;
                const isSingleTab = tabs.length === 1;
                const groupLabel = isSingleTab ? tabs[0].title : {
                  'Inicio': 'Inicio',
                  'Fundamentos del Ordenador': 'Fundamentos',
                  'Almacenamiento y Datos': 'Almacenamiento',
                  'Datos y Seguridad': 'Seguridad',
                  'Navegacion y Comunicacion': 'Navegacion',
                  'Entorno de Trabajo': 'Entorno',
                  'Comunicacion Digital': 'Comunicacion',
                  'Productividad': 'Productividad',
                  'Tecnologias Emergentes': 'IA',
                  'Evaluacion Final': 'Evaluacion'
                }[group] || group;
                return (
                  <div key={group} className="relative">
                    {isSingleTab ? (
                      <button
                        onClick={() => handleTabChange(tabs[0].id)}
                        className={`flex items-center gap-1 px-2.5 py-2 text-xs font-semibold transition-all duration-300 rounded-sm whitespace-nowrap ${
                          isActiveGroup
                            ? isDark || !isScrolled
                              ? 'text-white bg-white/10'
                              : 'text-white bg-slate-900/10'
                            : isDark || !isScrolled
                              ? 'text-slate-400 hover:text-white hover:bg-white/5'
                              : 'text-slate-600 hover:text-slate-900 hover:bg-white/5'
                        }`}
                      >
                        <span>{groupLabel}</span>
                      </button>
                    ) : (
                      <button
                        onMouseEnter={() => { setExpandedSectionGroup(group); setIsSectionMenuOpen(true); }}
                        onClick={() => { setExpandedSectionGroup(group); setIsSectionMenuOpen(true); }}
                        className={`group flex items-center gap-1 px-2.5 py-2 text-xs font-semibold transition-all duration-300 rounded-sm whitespace-nowrap ${
                          isActiveGroup
                            ? isDark || !isScrolled
                              ? 'text-white bg-white/10'
                              : 'text-white bg-slate-900/10'
                            : isDark || !isScrolled
                              ? 'text-slate-400 hover:text-white hover:bg-white/5'
                              : 'text-slate-600 hover:text-slate-900 hover:bg-white/5'
                        }`}
                      >
                        <span>{groupLabel}</span>
                        <ChevronDown size={10} className={`transition-transform duration-300 ${isSectionMenuOpen && expandedSectionGroup === group ? 'rotate-180' : ''}`} />
                      </button>
                    )}
                    {isSectionMenuOpen && expandedSectionGroup === group && !isSingleTab && (
                      <div 
                        className={`absolute top-full left-0 mt-1 py-2 rounded-sm border shadow-xl min-w-[180px] z-50 ${
                          isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'
                        }`}
                        onMouseLeave={() => setIsSectionMenuOpen(false)}
                      >
                        {tabs.map((tab) => (
                          <button
                            key={tab.id}
                            onClick={() => { handleTabChange(tab.id); setIsSectionMenuOpen(false); }}
                            className={`w-full px-3 py-2 text-xs text-left flex items-center gap-2 transition-colors ${
                              activeTab === tab.id
                                ? isDark ? 'text-white bg-white/10' : 'text-slate-900 bg-slate-100'
                                : isDark ? 'text-slate-400 hover:text-white hover:bg-white/5' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                            }`}
                          >
                            <tab.icon size={14} />
                            <span>{tab.title}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Progress Bar in Navbar */}
            <div data-tour="progress" className="hidden lg:flex items-center gap-3 mx-4 shrink-0">
              <div className="w-32 h-2 bg-slate-800 rounded-full overflow-hidden relative">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 rounded-full transition-all duration-500"
                  style={{ width: `${(() => { const total = tabConfig.filter(t => t.id !== 'home').length; const current = tabConfig.findIndex(t => t.id === activeTab); return Math.round((current / total) * 100); })()}%` }}
                ></div>
              </div>
              <span className={`text-[10px] font-black uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                {(() => { const total = tabConfig.filter(t => t.id !== 'home').length; const current = tabConfig.findIndex(t => t.id === activeTab); return Math.round((current / total) * 100); })()}%
              </span>
            </div>

            <div className="ml-auto flex items-center gap-3 shrink-0">
              {/* Streak indicator */}
              {streak.current > 0 && (
                <div className={`flex items-center gap-1.5 px-2 py-1 rounded-sm text-xs font-bold ${
                  isDark || isScrolled ? 'bg-orange-500/20 text-orange-300' : 'bg-orange-100 text-orange-600'
                }`}>
                  <Flame size={14} />
                  <span>{streak.current}</span>
                </div>
              )}

              {/* XP and Level indicator */}
              <div className={`hidden sm:flex items-center gap-1.5 px-2 py-1 rounded-sm text-xs font-bold ${
                isDark || isScrolled ? 'bg-emerald-500/20 text-emerald-300' : 'bg-emerald-100 text-emerald-600'
              }`}>
                <Zap size={14} />
                <span>{xp} XP</span>
                <span className={`opacity-60 text-[10px]`}>• L{currentLevel.level}</span>
              </div>

              {/* Achievements indicator */}
              <button
                onClick={() => setShowAchievementsModal(true)}
                className={`rounded-sm border px-3 py-2 transition-all duration-300 flex items-center gap-2 ${
                  isDark || isScrolled
                    ? 'border-amber-500/30 bg-amber-500/10 text-amber-300 hover:bg-amber-500/20'
                    : 'border-amber-300 bg-amber-50 text-amber-700 hover:bg-amber-100'
                }`}
              >
                <Trophy size={16} />
                <span className="text-xs font-bold">
                  {Object.values(achievements).filter(Boolean).length}/27
                </span>
              </button>

              <button
                onClick={toggleTheme}
                className={`rounded-sm border p-2.5 transition-all duration-300 ${
                  isDark || isScrolled ? 'border-white/10 bg-white/5 text-white hover:bg-white/10' : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                }`}
                aria-label={isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                onClick={() => setIsSectionMenuOpen((value) => !value)}
                className={`lg:hidden inline-flex items-center gap-2 rounded-sm border px-3 py-2 text-sm font-semibold transition-colors ${
                  isDark || isScrolled ? 'border-white/10 bg-white/5 text-white hover:bg-white/10' : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span className="hidden sm:inline">Secciones</span>
                <span className={`rounded-sm p-1 transition-transform ${isSectionMenuOpen ? 'rotate-180' : ''}`}>
                  <ChevronDown size={16} />
                </span>
              </button>

              <div className="hidden md:block w-48 lg:w-64">
                <div className="relative">
                  <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Buscar..."
                    className={`w-full rounded-sm border pl-9 pr-8 py-2.5 text-sm transition-colors ${
                      isDark ? 'bg-slate-900 border-slate-700 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none' : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none'
                    }`}
                  />
                  {searchQuery && (
                    <button onClick={() => setSearchQuery('')} className={`absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-1 ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-400 hover:text-slate-600'}`}>
                      <X size={14} />
                    </button>
                  )}
                </div>
              </div>

              <a
                href="https://buymeacoffee.com/digitalsynapse"
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-sm border px-2.5 py-2 transition-all duration-300 text-amber-400 hover:text-amber-300 ${
                  isDark || isScrolled ? 'border-amber-500/30 bg-amber-500/10 hover:bg-amber-500/20' : 'border-amber-300 bg-amber-50 hover:bg-amber-100'
                }`}
                title="Invítame a un café"
              >
                ☕
              </a>
            </div>
          </div>

          {isSectionMenuOpen && (
            <div className={`border-t px-3 pb-3 pt-3 sm:px-4 sm:pb-4 ${
              isDark || isScrolled ? 'border-white/10' : 'border-slate-200/80'
            }`} onMouseLeave={() => setIsSectionMenuOpen(false)}>
              <div className={`rounded-sm border p-4 ${
                isDark || isScrolled
                  ? 'border-white/10 bg-white/[0.04] ring-1 ring-white/12'
                  : 'border-slate-200 bg-slate-50/90 ring-1 ring-slate-300/70'
              }`}>
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div>
                    <p className={`text-[10px] font-black uppercase tracking-[0.2em] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                      {expandedSectionGroup}
                    </p>
                    <p className={`mt-2 text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      {sectionGroupMeta[expandedSectionGroup]?.summary}
                    </p>
                  </div>
                  <span className={`shrink-0 rounded-sm px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.2em] ${
                    isDark ? 'bg-slate-900 text-slate-300 border border-slate-800' : 'bg-white text-slate-500 border border-slate-200'
                  }`}>
                    {sectionGroups[expandedSectionGroup]?.length || 0}
                  </span>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-3">
                  {(sectionGroups[expandedSectionGroup] || []).map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;

                    return (
                      <button
                        key={tab.id}
                        onClick={() => handleTabChange(tab.id)}
                        className={`w-full rounded-sm border px-3 py-3 text-left transition-all ${
                          isActive
                            ? `${tab.activeClass.replace('scale-105', '').replace('z-10', '')} border-transparent`
                            : isDark
                              ? 'border-slate-800 bg-slate-900 text-slate-200 hover:bg-slate-800'
                              : 'border-slate-200 bg-white text-slate-700 hover:bg-white'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-3 min-w-0">
                            <div className={`rounded-sm p-2 ${isActive ? 'bg-white/15 text-white' : isDark ? 'bg-slate-950 text-slate-300' : 'bg-slate-100 text-slate-500'}`}>
                              <Icon size={16} />
                            </div>
                            <div className="min-w-0">
                              <p className={`text-[10px] font-black uppercase tracking-[0.2em] ${isActive ? 'text-white/75' : isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                                Modulo {tab.step}
                              </p>
                              <p className="mt-1 text-sm font-black truncate">{tab.title}</p>
                            </div>
                          </div>
                          <ChevronRight size={16} className={isActive ? 'text-white' : isDark ? 'text-slate-500' : 'text-slate-400'} />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* CABECERA Y NAVEGACIÓN PRINCIPAL */}
      <header className="fixed top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 z-40 lg:hidden transition-all duration-500">
        <div className={`max-w-[1600px] mx-auto rounded-[22px] border backdrop-blur-xl shadow-[0_18px_40px_rgba(15,23,42,0.18)] ${
          isDark ? 'border-slate-800 bg-slate-950/88' : 'border-white/80 bg-white/92'
        }`}>
          <div className="flex items-center justify-between gap-3 px-3 py-2.5 sm:px-4">
            <button onClick={() => handleTabChange('home')} className="flex items-center gap-2 min-w-0 text-left">
              <div className="w-7 h-7 flex items-center justify-center shrink-0">
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="tech-logo-grad-mobile-nav" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="50%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#06B6D4" />
                    </linearGradient>
                  </defs>
                  <path d="M6 10L16 4L26 10L6 22L16 28L26 22" stroke="url(#tech-logo-grad-mobile-nav)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="6" cy="10" r="3.5" fill="#3B82F6" />
                  <circle cx="16" cy="16" r="3.5" fill="#8B5CF6" />
                  <circle cx="26" cy="22" r="3.5" fill="#06B6D4" />
                </svg>
              </div>
              <div className="min-w-0">
                <p className={`text-sm font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>Digital Synapse</p>
                <p className={`text-[10px] uppercase tracking-[0.24em] font-black ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                  {activeTabMeta.title}
                </p>
              </div>
            </button>

            <div className="flex items-center gap-2 shrink-0">
              <a
                href="https://buymeacoffee.com/digitalsynapse"
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-full border p-2 text-amber-400 hover:text-amber-300 ${
                  isDark ? 'border-white/10 bg-white/5 hover:bg-white/10' : 'border-slate-200 bg-white hover:bg-slate-50'
                }`}
                title="Invítame a un café"
              >
                ☕
              </a>
              <button
                onClick={toggleTheme}
                className={`rounded-full border p-2.5 transition-colors ${
                  isDark ? 'border-white/10 bg-white/5 text-white hover:bg-white/10' : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                }`}
                aria-label={isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                onClick={() => setIsSectionMenuOpen((value) => !value)}
                className={`rounded-full border p-2.5 transition-colors ${
                  isDark ? 'border-white/10 bg-white/5 text-white hover:bg-white/10' : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                }`}
                aria-label={isSectionMenuOpen ? 'Cerrar menu de secciones' : 'Abrir menu de secciones'}
              >
                {isSectionMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {isSectionMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <button onClick={() => setIsSectionMenuOpen(false)} className="absolute inset-0 bg-slate-950/55 backdrop-blur-[2px]" aria-label="Cerrar menu" />
          <div className={`absolute inset-x-3 top-[76px] bottom-3 sm:inset-x-4 sm:top-[84px] rounded-[28px] border shadow-[0_24px_70px_rgba(15,23,42,0.35)] overflow-hidden flex flex-col ${
            isDark ? 'border-slate-800 bg-slate-950/98' : 'border-slate-200 bg-white/98'
          }`}>
            <div className={`flex items-center justify-between gap-3 px-4 py-4 border-b ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
              <div>
                <p className={`text-[11px] font-black uppercase tracking-[0.24em] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Menu del aula</p>
                <p className={`mt-1 text-base font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Secciones y modulos</p>
              </div>
              <button
                onClick={() => setIsSectionMenuOpen(false)}
                className={`rounded-full border p-2 ${isDark ? 'border-slate-700 bg-slate-900 text-slate-200' : 'border-slate-200 bg-slate-50 text-slate-600'}`}
                aria-label="Cerrar menu"
              >
                <X size={18} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto overscroll-contain px-3 pb-3 pt-3 sm:px-4 sm:pb-4 touch-pan-y">
              <div className="space-y-3">
                {Object.entries(sectionGroups).map(([group, tabs]) => {
                  const isExpanded = expandedSectionGroup === group;
                  return (
                    <section
                      key={group}
                      className={`rounded-[22px] border ${
                        isDark ? 'border-slate-800 bg-slate-900/70' : 'border-slate-200 bg-slate-50/80'
                      }`}
                    >
                      <button
                        onClick={() => setExpandedSectionGroup(isExpanded ? '' : group)}
                        className="w-full px-4 py-4 text-left"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className={`text-[11px] font-black uppercase tracking-[0.24em] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{group}</p>
                            <p className={`mt-2 text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                              {sectionGroupMeta[group]?.summary}
                            </p>
                          </div>
                          <div className="flex items-center gap-3 shrink-0">
                            <span className={`rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-widest ${
                              isDark ? 'bg-slate-950 text-slate-300' : 'bg-white text-slate-500 border border-slate-200'
                            }`}>
                              {tabs.length}
                            </span>
                            <span className={`rounded-full p-2 ${isDark ? 'bg-slate-950 text-slate-300' : 'bg-white text-slate-500 border border-slate-200'}`}>
                              {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                            </span>
                          </div>
                        </div>
                      </button>

                      {isExpanded && (
                        <div className="px-3 pb-3 sm:px-4 sm:pb-4">
                          <div className="space-y-3">
                            {tabs.map((tab) => (
                              <SectionMenuItem
                                key={tab.id}
                                tab={tab}
                                isActive={activeTab === tab.id}
                                onClick={handleTabChange}
                                isDark={isDark}
                              />
                            ))}
                          </div>
                        </div>
                      )}
                    </section>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsSectionMenuOpen((value) => !value)}
        className="fixed bottom-6 right-6 z-[55] lg:hidden"
        style={{ marginBottom: 'env(safe-area-inset-bottom)' }}
        aria-label={isSectionMenuOpen ? 'Cerrar menu de secciones' : 'Abrir menu de secciones'}
      >
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 via-violet-500 to-cyan-400 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
          {isSectionMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </div>
      </button>

      <header className="mb-6 mt-[92px] sm:mt-[100px] lg:mt-[124px] flex flex-col gap-4 max-w-[1600px] mx-auto w-full px-3 sm:px-4 md:px-6">
        {activeTab !== 'home' && (
        <div className={`p-4 sm:p-5 md:p-6 rounded-sm shadow-[0_20px_60px_rgba(15,23,42,0.12)] border flex flex-col lg:flex-row lg:items-center justify-between gap-5 md:gap-6 ${isDark ? 'bg-slate-900/92 border-slate-800' : 'bg-white/82 border-white/80 backdrop-blur-xl'}`}>
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-sm flex items-center justify-center ${isDark ? 'bg-blue-500/20' : 'bg-blue-100'}`}>
              <AppWindow className={isDark ? 'text-blue-400' : 'text-blue-600'} size={24} />
            </div>
            <div>
              <p className={`text-[10px] font-black uppercase tracking-[0.24em] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Aula de Competencias Digitales</p>
              <p className={`text-lg sm:text-xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Modulo {activeTabMeta.step}: {activeTabMeta.title}
              </p>
            </div>
          </div>

          <div className="w-full lg:w-auto lg:min-w-[400px] flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <p className={`text-[10px] font-black uppercase tracking-[0.2em] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Progreso del Curso</p>
              <p className={`text-sm font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>{(() => { const total = tabConfig.filter(t => t.id !== 'home').length; const current = tabConfig.findIndex(t => t.id === activeTab); return Math.round((current / total) * 100); })()}%</p>
            </div>
            <div className="h-3 bg-slate-800 rounded-full overflow-hidden relative">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 rounded-full transition-all duration-700 relative"
                style={{ width: `${(() => { const total = tabConfig.filter(t => t.id !== 'home').length; const current = tabConfig.findIndex(t => t.id === activeTab); return Math.round((current / total) * 100); })()}%` }}
              >
                <div className="absolute inset-0 bg-[length:8px_8px] bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
              </div>
              {/* Pixel-style segment markers */}
              <div className="absolute inset-0 flex">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="flex-1 border-r border-slate-900/50 last:border-r-0"></div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <p className={`text-[10px] font-medium ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{activeTabMeta.subtitle}</p>
              <p className={`text-[10px] font-medium ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{itemCount} temas</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Previous Module Button */}
            <button
              onClick={() => {
                const allTabs = tabConfig.filter(t => t.id !== 'home');
                const currentIndex = allTabs.findIndex(t => t.id === activeTab);
                if (currentIndex > 0) {
                  handleTabChange(allTabs[currentIndex - 1].id);
                } else {
                  handleTabChange('home');
                }
              }}
              className={`shrink-0 rounded-sm border p-2.5 transition-all duration-300 ${
                isDark ? 'border-slate-700 bg-slate-950 text-slate-300 hover:bg-slate-800 hover:text-white' : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
              title="Modulo anterior"
            >
              <ChevronRight size={18} className="rotate-180" />
            </button>

            {/* Module counter */}
            <span className={`text-xs font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              {(() => {
                const allTabs = tabConfig.filter(t => t.id !== 'home');
                const currentIndex = allTabs.findIndex(t => t.id === activeTab);
                return `${currentIndex + 1}/${allTabs.length}`;
              })()}
            </span>

            {/* Next Module Button */}
            <button
              onClick={() => {
                const allTabs = tabConfig.filter(t => t.id !== 'home');
                const currentIndex = allTabs.findIndex(t => t.id === activeTab);
                if (currentIndex < allTabs.length - 1) {
                  handleTabChange(allTabs[currentIndex + 1].id);
                } else {
                  handleTabChange('home');
                }
              }}
              className={`shrink-0 rounded-sm border px-4 py-2 font-bold text-sm transition-all duration-300 flex items-center gap-2 ${
                isDark ? 'border-blue-500/50 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 hover:border-blue-400' : 'border-blue-300 bg-blue-50 text-blue-700 hover:bg-blue-100 hover:border-blue-400'
              }`}
            >
              Siguiente
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
        )}
      </header>

      {/* ÁREA PRINCIPAL DIVIDIDA */}
      <div className="flex flex-col xl:flex-row gap-6 flex-grow max-w-[1600px] mx-auto w-full px-3 sm:px-4 md:px-6">
        
        {/* ZONA IZQUIERDA: Interactuador Visual (60%) */}
        <div className={`w-full flex flex-col gap-6 min-w-0 transition-all duration-300 ${hasActiveDetail ? 'xl:w-[64%]' : 'xl:w-full'}`}>
          {activeTab === 'home' && <HomeView tabConfig={tabConfig} achievements={achievements} isDark={isDark} handleTabChange={handleTabChange} />}
          {activeTab === 'hardware' && <HardwareView selectedItem={selectedItem} onSelect={handleSelect} hardwareData={hardwareData} colorMap={colorMap} isDark={isDark} />}
          {activeTab === 'peripherals' && <PeripheralsView selectedItem={selectedItem} onSelect={handleSelect} isDark={isDark} peripheralData={peripheralData} />}
          {activeTab === 'cloud' && <CloudView selectedItem={selectedItem} onSelect={handleSelect} isDark={isDark} cloudData={cloudData} />}
          {activeTab === 'software' && <SoftwareView selectedItem={selectedItem} onSelect={handleSelect} isDark={isDark} softwareData={softwareData} softwareOsExamples={softwareOsExamples} softwareOsDetails={softwareOsDetails} softwareLicenseModels={softwareLicenseModels} />}
          {activeTab === 'internet' && <InternetView selectedItem={selectedItem} onSelect={handleSelect} isDark={isDark} colorMap={colorMap} internetData={internetData} />}
          {activeTab === 'security' && <SecurityView selectedItem={selectedItem} onSelect={handleSelect} isDark={isDark} colorMap={colorMap} securityData={securityData} securityPasswordExamples={securityPasswordExamples} securityPermissionCards={securityPermissionCards} />}
          {activeTab === 'email' && <EmailView selectedItem={selectedItem} onSelect={handleSelect} isDark={isDark} colorMap={colorMap} emailData={emailData} emailInboxMock={emailInboxMock} emailRecipientCases={emailRecipientCases} />}
          {activeTab === 'desktop' && <DesktopTab />}
          {activeTab === 'red_instalacion' && <RedInstalacionView selectedItem={selectedItem} onSelect={handleSelect} isDark={isDark} colorMap={colorMap} redInstalacionData={redInstalacionData} />}
          {activeTab === 'red_basicos' && <RedBasicosView selectedItem={selectedItem} onSelect={handleSelect} isDark={isDark} colorMap={colorMap} redBasicosData={redBasicosData} />}
          {activeTab === 'navegadores' && <NavegadoresView selectedItem={selectedItem} onSelect={handleSelect} isDark={isDark} navegadoresData={navegadoresData} />}
          {activeTab === 'content' && <ContentView selectedItem={selectedItem} onSelect={handleSelect} isDark={isDark} colorMap={colorMap} contentSteps={contentSteps} contentData={contentData} contentTools={contentTools} SoftwareLogos={SoftwareLogos} ContentImages={ContentImages} />}
          {activeTab === 'files' && <FilesView selectedItem={selectedItem} onSelect={handleSelect} isDark={isDark} colorMap={colorMap} filesData={filesData} />}
          {activeTab === 'keyboard' && <KeyboardView selectedItem={selectedItem} onSelect={handleSelect} isDark={isDark} colorMap={colorMap} keyboardData={keyboardData} keyboardLayout={keyboardLayout} />}
          {activeTab === 'office' && <OfficeView
              selectedItem={selectedItem}
              onSelect={handleSelect}
              isDark={isDark}
              colorMap={colorMap}
              officeData={officeData}
              officeWorkspaceViews={officeWorkspaceViews}
              officeWorkspaceZone={officeWorkspaceZone}
              setOfficeWorkspaceZone={setOfficeWorkspaceZone}
              officeTaskView={officeTaskView}
              setOfficeTaskView={setOfficeTaskView}
              officeTaskSuggestions={officeTaskSuggestions}
            />}
          {activeTab === 'backup' && (
            <div className="flex flex-col gap-6 animate-in fade-in duration-500 h-full">
              <div className="bg-slate-900 rounded-3xl p-8 shadow-2xl border border-slate-800">
                <div className="flex items-center gap-3 mb-8 border-b border-slate-700 pb-4">
                  <Database className="text-teal-400" size={32} />
                  <div>
                    <h2 className="text-2xl font-black text-white">Copia de Seguridad y Recuperacion</h2>
                    <p className="text-slate-400 mt-1 text-sm font-medium">Estrategias para proteger tus datos: reglas 3-2-1, backups locales, en la nube y recuperacion.</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {Object.keys(backupData).map(id => (
                    <InteractiveButton key={id} id={id} dataSet={backupData} extraClass="bg-slate-800 border-slate-700 text-slate-200" selectedItem={selectedItem} onSelect={handleSelect} colorMap={colorMap} isDark={isDark} />
                  ))}
                </div>
              </div>
            </div>
          )}
          {activeTab === 'mobile' && (
            <div className="flex flex-col gap-6 animate-in fade-in duration-500 h-full">
              <div className="bg-slate-900 rounded-3xl p-8 shadow-2xl border border-slate-800">
                <div className="flex items-center gap-3 mb-8 border-b border-slate-700 pb-4">
                  <Smartphone className="text-indigo-400" size={32} />
                  <div>
                    <h2 className="text-2xl font-black text-white">Dispositivos Moviles</h2>
                    <p className="text-slate-400 mt-1 text-sm font-medium">Android, iOS, privacidad, permisos y productividad en dispositivos moviles.</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {Object.keys(mobileData).map(id => (
                    <InteractiveButton key={id} id={id} dataSet={mobileData} extraClass="bg-slate-800 border-slate-700 text-slate-200" selectedItem={selectedItem} onSelect={handleSelect} colorMap={colorMap} isDark={isDark} />
                  ))}
                </div>
              </div>
            </div>
          )}
          {activeTab === 'ethernet' && (
            <div className="flex flex-col gap-6 animate-in fade-in duration-500 h-full">
              <div className="bg-slate-900 rounded-3xl p-8 shadow-2xl border border-slate-800">
                <div className="flex items-center gap-3 mb-8 border-b border-slate-700 pb-4">
                  <Cable className="text-amber-400" size={32} />
                  <div>
                    <h2 className="text-2xl font-black text-white">Redes Cableadas Ethernet</h2>
                    <p className="text-slate-400 mt-1 text-sm font-medium">Fundamentos de redes cableadas, configuracion domestica, diagnostico y NAS.</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {Object.keys(ethernetData).map(id => (
                    <InteractiveButton key={id} id={id} dataSet={ethernetData} extraClass="bg-slate-800 border-slate-700 text-slate-200" selectedItem={selectedItem} onSelect={handleSelect} colorMap={colorMap} isDark={isDark} />
                  ))}
                </div>
              </div>
            </div>
          )}
          {activeTab === 'communication' && (
            <div className="flex flex-col gap-6 animate-in fade-in duration-500 h-full">
              <div className="bg-slate-900 rounded-3xl p-8 shadow-2xl border border-slate-800">
                <div className="flex items-center gap-3 mb-8 border-b border-slate-700 pb-4">
                  <MessageSquare className="text-pink-400" size={32} />
                  <div>
                    <h2 className="text-2xl font-black text-white">Comunicacion Digital</h2>
                    <p className="text-slate-400 mt-1 text-sm font-medium">Apps de mensajeria, videoconferencia, espacios colaborativos y netiqueta.</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {Object.keys(communicationData).map(id => (
                    <InteractiveButton key={id} id={id} dataSet={communicationData} extraClass="bg-slate-800 border-slate-700 text-slate-200" selectedItem={selectedItem} onSelect={handleSelect} colorMap={colorMap} isDark={isDark} />
                  ))}
                </div>
              </div>
            </div>
          )}
          {activeTab === 'assessment' && <AssessmentView
              selectedItem={selectedItem}
              onSelect={handleSelect}
              isDark={isDark}
              colorMap={colorMap}
              assessmentOrder={assessmentOrder}
              assessmentAssignments={assessmentAssignments}
              draggingAssessmentItem={draggingAssessmentItem}
              draggingOrderItem={draggingOrderItem}
              setAssessmentAssignments={setAssessmentAssignments}
              setDraggingAssessmentItem={setDraggingAssessmentItem}
              setAssessmentOrder={setAssessmentOrder}
              setDraggingOrderItem={setDraggingOrderItem}
              securityQuizSelections={securityQuizSelections}
              setSecurityQuizSelections={setSecurityQuizSelections}
              emailQuizSelections={emailQuizSelections}
              setEmailQuizSelections={setEmailQuizSelections}
              officeQuizSelections={officeQuizSelections}
              setOfficeQuizSelections={setOfficeQuizSelections}
              softwareQuizSelections={softwareQuizSelections}
              setSoftwareQuizSelections={setSoftwareQuizSelections}
              handleSecurityQuizSelect={handleSecurityQuizSelect}
              handleEmailQuizSelect={handleEmailQuizSelect}
              handleOfficeQuizSelect={handleOfficeQuizSelect}
              handleSoftwareQuizSelect={handleSoftwareQuizSelect}
              assessmentMixedQuizItems={assessmentMixedQuizItems}
              softwareQuizItems={softwareQuizItems}
              assessmentData={assessmentData}
              resetAssessmentArea={resetAssessmentArea}
            />}
          {activeTab === 'ai_basics' && <AIBasicsTab />}
          {activeTab === 'ai' && <AIView selectedItem={selectedItem} onSelect={handleSelect} colorMap={colorMap} isDark={isDark} aiData={aiData} />}
          {hasActiveDetail && (
            <div className="xl:hidden">
              <PanelDerecho
                selectedItem={selectedItem}
                activeTabMeta={activeTabMeta}
                itemCount={itemCount}
                onStartModule={handleStartModule}
                onClearSelection={handleClearSelection}
                colorMap={colorMap}
                isDark={isDark}
              />
            </div>
          )}
        </div>

        {/* ZONA DERECHA: Panel Lector Dinámico (40%) */}
        {hasActiveDetail && (
        <div className="hidden xl:block xl:w-[36%] min-w-0">
          <div className="h-full min-h-[420px] xl:sticky xl:top-6 xl:max-h-[calc(100vh-2rem)] xl:h-[calc(100vh-2rem)]">
            <PanelDerecho
              selectedItem={selectedItem}
              activeTabMeta={activeTabMeta}
              itemCount={itemCount}
              onStartModule={handleStartModule}
              onClearSelection={handleClearSelection}
              colorMap={colorMap}
              isDark={isDark}
            />
          </div>
        </div>
        )}

      </div>
      
      {/* Estilo para ocultar scrollbar en contenedor de botones móviles */}
      </div>
      <footer className="max-w-[1600px] mx-auto w-full px-3 sm:px-4 md:px-6 mt-8 pb-8">
        <div className={`rounded-[28px] border px-5 py-6 sm:px-6 sm:py-7 ${
          isDark
            ? 'border-slate-800 bg-slate-900/92'
            : 'border-white/80 bg-slate-950 text-white shadow-[0_24px_60px_rgba(15,23,42,0.18)]'
        }`}>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                <defs>
                  <linearGradient id="tech-logo-grad-footer" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="50%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#06B6D4" />
                  </linearGradient>
                </defs>
                <path d="M6 10L16 4L26 10L6 22L16 28L26 22" stroke="url(#tech-logo-grad-footer)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="6" cy="10" r="3.5" fill="#3B82F6" />
                <circle cx="16" cy="16" r="3.5" fill="#8B5CF6" />
                <circle cx="26" cy="22" r="3.5" fill="#06B6D4" />
              </svg>
              <div>
                <p className={`text-[11px] font-black uppercase tracking-[0.26em] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                  Realizado por
                </p>
                <p className="text-xl font-black text-white">
                  Digital Synapse
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <p className={`max-w-2xl text-sm leading-relaxed text-center sm:text-left ${
                isDark ? 'text-slate-400' : 'text-slate-300'
              }`}>
                Aula de Competencias Digitales desarrollada para ofrecer una experiencia de aprendizaje mas clara, visual y accesible.
              </p>
              <a
                href="https://buymeacoffee.com/digitalsynapse"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-4 py-2 rounded-sm bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-amber-500/20 flex items-center gap-2"
              >
                <span>☕ Invítame a un café</span>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Tutorial Tour Overlay */}
      {tourStep >= 0 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className={`absolute inset-0 pointer-events-none`}>
            <div className={`absolute w-20 h-20 rounded-full border-2 border-amber-400 animate-ping opacity-20`} style={{ top: '15%', left: '5%' }}></div>
          </div>
          
          <div className={`relative max-w-md mx-4 p-6 rounded-sm border shadow-2xl ${
            isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'
          }`}>
            <div className="flex items-start gap-4">
              <div className={`w-10 h-10 rounded-sm flex items-center justify-center ${isDark ? 'bg-blue-500/20' : 'bg-blue-100'}`}>
                <HelpCircle size={24} className={isDark ? 'text-blue-400' : 'text-blue-600'} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className={`text-lg font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {tourSteps[tourStep]?.title || 'Tour'}
                  </h3>
                  <button onClick={skipTour} className={`text-xs ${isDark ? 'text-slate-500 hover:text-slate-300' : 'text-slate-400 hover:text-slate-600'}`}>
                    Saltar
                  </button>
                </div>
                <p className={`mt-2 text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  {tourSteps[tourStep]?.desc || ''}
                </p>
                
                {/* Progress dots */}
                <div className="flex items-center gap-2 mt-4">
                  {tourSteps.map((_, i) => (
                    <div 
                      key={i} 
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        i === tourStep 
                          ? isDark ? 'bg-amber-400 w-4' : 'bg-amber-500 w-4'
                          : i < tourStep 
                            ? isDark ? 'bg-slate-600' : 'bg-slate-300'
                            : isDark ? 'bg-slate-800' : 'bg-slate-100'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-end gap-3 mt-6">
              <button
                onClick={skipTour}
                className={`px-4 py-2 text-sm font-semibold rounded-sm border transition-colors ${
                  isDark ? 'border-slate-700 text-slate-400 hover:bg-slate-800' : 'border-slate-200 text-slate-500 hover:bg-slate-50'
                }`}
              >
                Omitir
              </button>
              <button
                onClick={nextTourStep}
                className="px-5 py-2 text-sm font-black rounded-sm bg-gradient-to-r from-blue-600 to-violet-600 text-white hover:from-blue-500 hover:to-violet-500 transition-all duration-300 flex items-center gap-2"
              >
                {tourStep < tourSteps.length - 1 ? 'Siguiente' : 'Finalizar'}
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tour start button (floating) */}
      {tourStep === -1 && (
        <button
          onClick={startTour}
          className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center animate-bounce-gentle"
          title="Iniciar tour guiado"
        >
          <HelpCircle size={24} />
        </button>
      )}

      {/* XP Notification Popup */}
      {xpNotification.show && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] animate-in slide-in-from-top-4 fade-in duration-300">
          <div className={`px-4 py-3 rounded-sm border shadow-xl ${
            xpNotification.type === 'achievement'
              ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white border-amber-400'
              : 'bg-emerald-500 text-white border-emerald-400'
          }`}>
            <div className="flex items-center gap-2">
              {xpNotification.type === 'achievement' ? <Trophy size={18} /> : <Zap size={18} />}
              <span className="font-bold text-sm">
                {xpNotification.type === 'achievement'
                  ? `¡Logro: ${xpNotification.name}!`
                  : `+${xpNotification.amount} XP${xpNotification.reason ? ` - ${xpNotification.reason}` : ''}`
                }
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Achievements Modal */}
      {showAchievementsModal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setShowAchievementsModal(false)}
        >
          <div
            className={`w-full max-w-lg max-h-[80vh] overflow-y-auto rounded-sm border shadow-2xl ${
              isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`sticky top-0 p-4 border-b flex items-center justify-between ${
              isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'
            }`}>
              <div className="flex items-center gap-3">
                <Trophy size={24} className="text-amber-400" />
                <h2 className={`text-lg font-black ${isDark ? 'text-white' : 'text-slate-800'}`}>
                  Progreso y Logros
                </h2>
              </div>
              <button
                onClick={() => setShowAchievementsModal(false)}
                className={`p-2 rounded-sm ${isDark ? 'hover:bg-slate-800 text-slate-400' : 'hover:bg-slate-100 text-slate-500'}`}
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-4 space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-3 gap-3">
                <div className={`p-4 rounded-sm border text-center ${isDark ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-emerald-50 border-emerald-200'}`}>
                  <Zap size={24} className="mx-auto text-emerald-400 mb-2" />
                  <p className={`text-2xl font-black ${isDark ? 'text-emerald-300' : 'text-emerald-600'}`}>{xp}</p>
                  <p className={`text-xs ${isDark ? 'text-emerald-400' : 'text-emerald-500'}`}>XP Total</p>
                </div>
                <div className={`p-4 rounded-sm border text-center ${isDark ? 'bg-violet-500/10 border-violet-500/30' : 'bg-violet-50 border-violet-200'}`}>
                  <Star size={24} className="mx-auto text-violet-400 mb-2" />
                  <p className={`text-2xl font-black ${isDark ? 'text-violet-300' : 'text-violet-600'}`}>L{currentLevel.level}</p>
                  <p className={`text-xs ${isDark ? 'text-violet-400' : 'text-violet-500'}`}>{currentLevel.name}</p>
                </div>
                <div className={`p-4 rounded-sm border text-center ${isDark ? 'bg-orange-500/10 border-orange-500/30' : 'bg-orange-50 border-orange-200'}`}>
                  <Flame size={24} className="mx-auto text-orange-400 mb-2" />
                  <p className={`text-2xl font-black ${isDark ? 'text-orange-300' : 'text-orange-600'}`}>{streak.current}</p>
                  <p className={`text-xs ${isDark ? 'text-orange-400' : 'text-orange-500'}`}>Racha</p>
                </div>
              </div>

              {/* Level Progress */}
              <div>
                <div className="flex justify-between text-xs mb-2">
                  <span className={isDark ? 'text-slate-400' : 'text-slate-500'}>
                    {nextLevel ? `Siguiente: ${nextLevel.name}` : '¡Nivel máximo!'}
                  </span>
                  <span className={`font-bold ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>
                    {Math.round(levelProgress)}%
                  </span>
                </div>
                <div className={`h-2 rounded-full overflow-hidden ${isDark ? 'bg-slate-700' : 'bg-slate-200'}`}>
                  <div
                    className="h-full bg-gradient-to-r from-emerald-400 to-emerald-500 transition-all duration-500"
                    style={{ width: `${levelProgress}%` }}
                  />
                </div>
              </div>

              {/* Progress Achievements */}
              <div>
                <h3 className={`text-sm font-bold uppercase tracking-wider mb-3 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  Progreso
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'firstStep', icon: Zap, name: 'Primer Paso', xp: 10 },
                    { id: 'tenPercent', icon: Flame, name: 'Inicio', xp: 50 },
                    { id: 'quarterCourse', icon: Star, name: 'Cuarto', xp: 75 },
                    { id: 'halfCourse', icon: Crown, name: 'Mitad', xp: 100 },
                    { id: 'threeQuarters', icon: Star, name: 'Casi', xp: 150 },
                    { id: 'almostThere', icon: Star, name: 'Casi-full', xp: 200 },
                    { id: 'fullCourse', icon: Trophy, name: 'Graduado', xp: 500 },
                  ].map((a) => {
                    const Icon = a.icon;
                    const unlocked = achievements[a.id];
                    return (
                      <div
                        key={a.id}
                        className={`p-3 rounded-sm border text-center transition-all ${
                          unlocked
                            ? isDark ? 'border-amber-500/40 bg-amber-500/10' : 'border-amber-300 bg-amber-50'
                            : isDark ? 'border-slate-700 bg-slate-800/50 opacity-50' : 'border-slate-200 bg-slate-50 opacity-50'
                        }`}
                      >
                        <Icon size={18} className={`mx-auto ${unlocked ? 'text-amber-400' : 'text-slate-500'}`} />
                        <p className={`text-[10px] font-bold mt-1 ${unlocked ? 'text-amber-300' : 'text-slate-500'}`}>{a.name}</p>
                        {unlocked && <p className={`text-[9px] ${isDark ? 'text-emerald-400' : 'text-emerald-500'}`}>+{a.xp} XP</p>}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Mastery Achievements */}
              <div>
                <h3 className={`text-sm font-bold uppercase tracking-wider mb-3 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  Maestría
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'hardwareMaster', name: 'Hardware' },
                    { id: 'peripheralsMaster', name: 'Periféricos' },
                    { id: 'cloudMaster', name: 'Nube' },
                    { id: 'softwareMaster', name: 'Software' },
                    { id: 'internetMaster', name: 'Internet' },
                    { id: 'securityMaster', name: 'Seguridad' },
                    { id: 'keyboardMaster', name: 'Teclado' },
                    { id: 'officeMaster', name: 'Oficina' },
                    { id: 'aiMaster', name: 'IA' },
                  ].map((a) => {
                    const unlocked = achievements[a.id];
                    return (
                      <div
                        key={a.id}
                        className={`p-3 rounded-sm border text-center transition-all ${
                          unlocked
                            ? isDark ? 'border-violet-500/40 bg-violet-500/10' : 'border-violet-300 bg-violet-50'
                            : isDark ? 'border-slate-700 bg-slate-800/50 opacity-50' : 'border-slate-200 bg-slate-50 opacity-50'
                        }`}
                      >
                        <BadgeCheck size={18} className={`mx-auto ${unlocked ? 'text-violet-400' : 'text-slate-500'}`} />
                        <p className={`text-[10px] font-bold mt-1 ${unlocked ? 'text-violet-300' : 'text-slate-500'}`}>{a.name}</p>
                        {unlocked && <p className={`text-[9px] ${isDark ? 'text-emerald-400' : 'text-emerald-500'}`}>+200 XP</p>}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Special Achievements */}
              <div>
                <h3 className={`text-sm font-bold uppercase tracking-wider mb-3 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  Especiales
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'speedRunner', name: 'Speed Runner', desc: 'Completa módulo en <5 min', icon: Zap },
                    { id: 'explorer', name: 'Explorer', desc: 'Explora todo el contenido', icon: Globe },
                    { id: 'perfectionist', name: 'Perfeccionista', desc: '95%+ precisión en tests', icon: CheckCircle2 },
                    { id: 'streak3', name: '3 Días', desc: 'Racha de 3 días', icon: Flame },
                    { id: 'streak7', name: '7 Días', desc: 'Racha de 7 días', icon: Flame },
                    { id: 'streak30', name: '30 Días', desc: 'Racha de 30 días', icon: Flame },
                  ].map((a) => {
                    const Icon = a.icon;
                    const unlocked = achievements[a.id];
                    return (
                      <div
                        key={a.id}
                        className={`p-3 rounded-sm border text-center transition-all ${
                          unlocked
                            ? isDark ? 'border-cyan-500/40 bg-cyan-500/10' : 'border-cyan-300 bg-cyan-50'
                            : isDark ? 'border-slate-700 bg-slate-800/50 opacity-50' : 'border-slate-200 bg-slate-50 opacity-50'
                        }`}
                        title={a.desc}
                      >
                        <Icon size={18} className={`mx-auto ${unlocked ? 'text-cyan-400' : 'text-slate-500'}`} />
                        <p className={`text-[10px] font-bold mt-1 ${unlocked ? 'text-cyan-300' : 'text-slate-500'}`}>{a.name}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        html { scroll-behavior: smooth; }
        body { overflow-x: hidden; }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .custom-scrollbar::-webkit-scrollbar { width: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(148, 163, 184, 0.45); border-radius: 999px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
      `}} />
    </div>
  );
}