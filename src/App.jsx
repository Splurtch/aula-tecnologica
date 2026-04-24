import React, { useEffect, useState } from 'react';
import {
  Cpu, HardDrive, Monitor, Keyboard, Mouse, Speaker, Plug,
  CircuitBoard, Fan, Microchip, Gamepad2, Server,
  Rotate3D, Cloud, Laptop, ShieldCheck, Users,
  Database, Globe, FolderSync,
  Search, AppWindow, FileText, Image as ImageIcon, Music,
  FolderOpen, Download, Usb, Briefcase,
  ShoppingBag, ShieldAlert, FileQuestion,
  MailWarning, Bug, AlertOctagon, Bot, Sparkles, Brain,
  Terminal, Library, Flame, BrainCircuit, Headphones,
  Presentation, Blocks, FileSearch,
  Palette, Video, Mic, ImagePlus, Moon, Sun, ChevronDown, ChevronRight, Layers, ArrowRight
} from 'lucide-react';
import { InteractiveButton, KeyboardKey, Layer3D, PanelDerecho, SectionMenuItem } from './components/ui.jsx';

// ==========================================
// 1. BASE DE DATOS: HARDWARE (AMPLIADA)
// ==========================================
const hardwareData = {
  motherboard: { 
    id: 'motherboard', name: 'Placa Base (Motherboard)', category: 'Componente Interno Central', icon: CircuitBoard, color: 'emerald', 
    desc: 'La placa base es la "columna vertebral" o el "sistema nervioso central" del ordenador. Físicamente es una gran tarjeta de circuito impreso (PCB) a la que se conectan todos los demás componentes del equipo para poder comunicarse entre sí.\n\nSin la placa base, el procesador no podría enviar datos a la memoria, ni la tarjeta gráfica podría enviar la imagen al monitor. Actúa como el gran centro de comunicaciones.', 
    details: 'Elementos clave que incluye:\n• El "Socket" o zócalo: Es la ranura específica donde se encaja el Procesador.\n• Ranuras DIMM: Donde se conectan los módulos de memoria RAM.\n• Ranuras PCIe (PCI Express): Utilizadas principalmente para conectar tarjetas gráficas potentes o tarjetas de red.\n• Puertos SATA/M.2: Para conectar los discos duros y unidades de almacenamiento SSD.\n• El Chipset: Un conjunto de circuitos que controla el flujo de datos entre el procesador y el resto de dispositivos.' 
  },
  cpu: { 
    id: 'cpu', name: 'Procesador (CPU)', category: 'Motor de Cálculo', icon: Cpu, color: 'blue', 
    desc: 'La Unidad Central de Processing (CPU) es indiscutiblemente el "cerebro" del ordenador. Su trabajo consiste en recibir órdenes, interpretarlas, realizar cálculos matemáticos complejos a una velocidad vertiginosa y enviar los resultados para que todo funcione.\n\nImagina que es el jefe de cocina de un restaurante: recibe las comandas (instrucciones de los programas), organiza a los cocineros y se asegura de que los platos salgan a tiempo.', 
    details: 'Especificaciones a tener en cuenta:\n• Velocidad de Reloj (Frecuencia): Medida en Gigahercios (GHz). Indica cuántas operaciones puede hacer por segundo (ej. 3.5 GHz son 3.500 millones de ciclos por segundo).\n• Núcleos (Cores): Un procesador moderno no tiene un solo "cerebro", sino varios (ej. 4, 8, 16 núcleos). Esto le permite hacer muchas tareas de forma simultánea (multitarea) sin atascarse.\n• Fabricantes principales: Intel (familias Core i3, i5, i7, i9) y AMD (familias Ryzen 3, 5, 7, 9).' 
  },
  ram: { 
    id: 'ram', name: 'Memoria RAM', category: 'Almacenamiento Temporal', icon: Microchip, color: 'purple', 
    desc: 'La RAM (Memoria de Acceso Aleatorio) es la memoria de trabajo a muy corto plazo del ordenador. Es muchísimo más rápida que un disco duro, pero tiene una particularidad: es "volátil". Esto significa que cuando apagas el ordenador, todo lo que hay en la RAM se borra para siempre.\n\nAnalogía: Imagina que el disco duro es un gran archivo en el sótano y la RAM es tu mesa de escritorio. Para trabajar con un documento, debes subirlo del sótano y ponerlo en la mesa. Cuanto más grande sea tu mesa (más GB de RAM), más documentos podrás tener abiertos al mismo tiempo sin tener que bajar al sótano constantemente (lo que haría que el PC fuera lentísimo).', 
    details: 'Datos técnicos:\n• Capacidad: Se mide en Gigabytes (GB). Hoy en día, 8 GB es el mínimo vital para ofimática, 16 GB es el estándar recomendado para trabajar cómodamente, y 32 GB o más se usan para edición de vídeo profesional o diseño 3D.\n• Generaciones: DDR4 y la más moderna DDR5. Cada generation es más rápida y consume menos energía que la anterior.' 
  },
  gpu: { 
    id: 'gpu', name: 'Tarjeta Gráfica (GPU)', category: 'Procesamiento Visual', icon: Gamepad2, color: 'red', 
    desc: 'La GPU (Unidad de Procesamiento Gráfico) es un procesador especializado única y exclusivamente en crear las imágenes que ves en tu monitor. Mientras la CPU es un genio matemático que hace de todo, la GPU es como un batallón de miles de trabajadores sincronizados pintando píxeles en la pantalla.\n\nEs el componente más importante para los videojuegos, el diseño 3D, la edición de vídeo y, más recientemente, para entrenar Inteligencias Artificiales.', 
    details: 'Tipos de Gráficas:\n• Integradas (iGPU): Vienen incrustadas dentro del propio procesador. Son económicas, consumen poco y sirven perfectamente para ofimática, ver Netflix o navegar.\n• Dedicadas (Tarjetas externas): Son placas enormes con sus propios ventiladores y su propia memoria exclusiva (VRAM). Fabricadas principalmente por NVIDIA (ej. serie RTX) o AMD (serie Radeon). Son obligatorias para tareas pesadas o gaming de alto rendimiento.' 
  },
  storage: { 
    id: 'storage', name: 'Unidad de Almacenamiento', category: 'Memoria Permanente', icon: HardDrive, color: 'amber', 
    desc: 'A diferencia de la RAM, el almacenamiento es "no volátil": guarda tus datos de forma permanente incluso cuando no hay electricidad. Aquí es donde "viven" tu sistema operativo (Windows, macOS), tus programas instalados, tus fotos y tus documentos.\n\nEs tu gran biblioteca personal y la "caja fuerte" de tu información digital.', 
    details: 'Evolución tecnológica:\n• HDD (Discos Duros Mecánicos): Son los antiguos. Tienen platos magnéticos que giran y una aguja que los lee. Son lentos, ruidosos y frágiles ante los golpes, pero muy baratos para almacenar masivamente.\n• SSD (Unidades de Estado Sólido): Usan chips de memoria flash (como un pendrive gigante). No tienen partes móviles. Son increíblemente más rápidos. Cambiar un HDD por un SSD es la mejora más drástica que se le puede hacer a un ordenador antiguo.\n• SSD NVMe M.2: La evolución del SSD. Son unas pequeñas tarjetas que se conectan directamente a la placa base y alcanzan velocidades alucinantes (hasta 7.000 MB/s, frente a los 100 MB/s de un HDD clásico).' 
  },
  psu: { 
    id: 'psu', name: 'Fuente de Alimentación (PSU)', category: 'Energía', icon: Plug, color: 'zinc', 
    desc: 'La Fuente de Alimentación es el "corazón" que bombea electricidad al sistema. Su trabajo es tomar la corriente alterna (AC) de alto voltaje que sale del enchufe de tu pared (230V en Europa) y convertirla en corriente continua (DC) de bajo voltaje (3.3V, 5V, 12V) que los componentes delicados del ordenador pueden usar sin quemarse.\n\nEs un componente a menudo ignorado, pero si compras una de mala calidad y falla, puede freír y destruir el resto de piezas caras de tu ordenador (procesador, placa, gráfica...).', 
    details: 'Cómo elegirla:\n• Potencia: Se mide en Vatios (Watts). Un PC de oficina funciona con 300W, mientras que uno de diseño con una tarjeta gráfica potente puede requerir 750W o incluso 1000W.\n• Certificación 80 PLUS: Es un sello que garantiza la eficiencia energética. Una fuente "80 Plus Gold" desperdicia muy poca energía en forma de calor, lo que ahorra en la factura de la luz a largo plazo.' 
  },
  cooling: { 
    id: 'cooling', name: 'Refrigeración', category: 'Mantenimiento Térmico', icon: Fan, color: 'cyan', 
    desc: 'La electricidad genera calor por fricción al pasar por los circuitos. Los componentes modernos (CPU y GPU) trabajan tan rápido que pueden superar los 100°C en segundos y derretirse literalmente si no se enfrían.\n\nEl sistema de refrigeración se encarga de disipar ese calor y expulsarlo fuera de la caja de la torre, manteniendo el ordenador a temperaturas seguras (normalmente entre 40°C y 80°C).', 
    details: 'Métodos principales:\n• Refrigeración por Aire: Usa bloques de metal (disipadores) de aluminio o cobre unidos a la CPU, y ventiladores que soplan aire a través de ellos.\n• Refrigeración Líquida (AIO): Funciona de manera similar al radiador de un coche. Una bomba hace circular un líquido refrigerante por unos tubos. El líquido absorbe el calor del procesador y lo lleva a un radiador grande donde los ventiladores lo enfrían. Es más silenciosa y eficiente para equipos de alto rendimiento.' 
  }
};

// ==========================================
// 1B. BASE DE DATOS: PERIFERICOS
// ==========================================
const peripheralData = {
  input_devices: {
    id: 'input_devices', name: 'Perifericos de Entrada', category: 'Entrada de informacion', icon: Keyboard, color: 'blue',
    desc: 'Los perifericos de entrada permiten introducir informacion en el ordenador. Son el puente entre la accion humana y el sistema digital.\n\nCada vez que escribes, haces clic, hablas al microfono o escaneas un documento, estas enviando datos desde el exterior hacia el equipo.',
    details: 'Ejemplos habituales:\nâ€¢ Teclado: Introduce texto, numeros y comandos.\nâ€¢ Raton: Señala, selecciona y ejecuta acciones visuales.\nâ€¢ Microfono: Convierte voz o sonido en informacion digital.\nâ€¢ Escaner: Digitaliza documentos e imagenes para trabajarlos en pantalla.',
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
    details: 'Ejemplos clave:\nâ€¢ Monitor o pantalla: Muestra imagenes, interfaces y documentos.\nâ€¢ Altavoces y auriculares: Reproducen sonido, avisos, musica o clases.\nâ€¢ Impresora: Transforma contenido digital en papel.\nâ€¢ Proyector: Amplia la salida visual para grupos o aulas.',
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
    details: 'Ejemplos mixtos:\nâ€¢ Pantalla tactil: Muestra informacion y tambien recibe pulsaciones.\nâ€¢ Cascos con microfono: Reproducen sonido y capturan voz.\nâ€¢ Impresora multifuncion: Imprime, escanea y a veces copia o envia documentos.\nâ€¢ Mandos y tabletas digitalizadoras: Reciben accion del usuario y devuelven respuesta visual.',
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
    details: 'Ejemplos utiles:\nâ€¢ Pendrive USB: Transporta archivos entre equipos.\nâ€¢ Disco duro externo: Guarda copias y archivos pesados.\nâ€¢ Tarjetas SD y lectores: Usados en camaras, moviles y portatiles.\nâ€¢ Docking stations y hubs: Añaden puertos y conexiones a un solo equipo.',
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
// 4B. BASE DE DATOS: SOFTWARE
// ==========================================
const softwareData = {
  operating_systems: {
    id: 'operating_systems', name: 'Sistemas Operativos', category: 'Base del software', icon: Monitor, color: 'indigo',
    desc: 'El sistema operativo es el software principal del ordenador. Actua como intermediario entre el hardware y el resto de programas.\n\nSin sistema operativo, el equipo no tendria una interfaz funcional para arrancar, gestionar memoria, abrir archivos o usar dispositivos.',
    details: 'Funciones centrales:\nâ€¢ Arranque del equipo y gestion de recursos.\nâ€¢ Coordinacion entre procesador, memoria, discos y periféricos.\nâ€¢ Interfaz para que el usuario abra programas, carpetas y ajustes.\nâ€¢ Seguridad, usuarios, permisos y actualizaciones del sistema.',
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
    details: 'Casos habituales:\nâ€¢ Driver de impresora: habilita impresion, calidad y bandejas.\nâ€¢ Driver de audio: gestiona altavoces, microfono y niveles.\nâ€¢ Driver grafico: mejora resolucion, rendimiento y aceleracion visual.\nâ€¢ Driver de red: permite usar WiFi, Ethernet o Bluetooth correctamente.',
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
    details: 'Tipos de software habitual:\nâ€¢ Ofimatica: Word, Excel, PowerPoint, Google Docs.\nâ€¢ Navegacion y comunicacion: Chrome, Edge, Zoom, Teams, correo.\nâ€¢ Creatividad: editores de imagen, video, audio o diseño.\nâ€¢ Utilidades: antivirus, compresores, lectores PDF, copias de seguridad.',
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
    details: 'Capas del entorno:\nâ€¢ Hardware: La parte fisica del equipo.\nâ€¢ Sistema operativo: Coordina y administra el conjunto.\nâ€¢ Drivers: Permiten hablar con dispositivos concretos.\nâ€¢ Aplicaciones: Herramientas finales para el usuario.',
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
  { name: 'Windows', mark: 'W', subtitle: 'Escritorio y aula', accent: 'from-blue-500 via-sky-500 to-cyan-400', logo: 'window' },
  { name: 'macOS', mark: 'M', subtitle: 'Creatividad y ecosistema Apple', accent: 'from-slate-500 via-slate-400 to-zinc-300', logo: 'mac' },
  { name: 'Linux', mark: 'L', subtitle: 'Codigo abierto y servidores', accent: 'from-amber-400 via-orange-400 to-red-400', logo: 'linux' },
  { name: 'Android', mark: 'A', subtitle: 'Movil y tablet', accent: 'from-emerald-500 via-lime-400 to-green-300', logo: 'android' },
  { name: 'iOS', mark: 'i', subtitle: 'iPhone y apps moviles', accent: 'from-fuchsia-500 via-violet-400 to-indigo-400', logo: 'ios' },
];

const softwareDriverFlow = [
  { label: 'Aplicacion', helper: 'Word, navegador o Zoom', icon: Blocks },
  { label: 'Sistema Operativo', helper: 'Gestiona la orden', icon: Monitor },
  { label: 'Driver', helper: 'Traduce para el dispositivo', icon: Plug },
  { label: 'Hardware', helper: 'Impresora, audio o grafica', icon: Cpu },
];

const softwareLicenseModels = {
  closed: {
    label: 'Codigo cerrado',
    summary: 'El fabricante controla el codigo, las funciones y la licencia de uso.',
    color: 'indigo',
    examples: [
      { name: 'Microsoft Office', use: 'Suite ofimatica comercial para documentos, hojas de calculo y presentaciones.' },
      { name: 'Adobe Photoshop', use: 'Edicion de imagen profesional con licencia propietaria.' },
      { name: 'Windows', use: 'Sistema operativo comercial con soporte y ecosistema cerrado.' },
    ],
  },
  open: {
    label: 'Codigo abierto',
    summary: 'El codigo se puede estudiar, mejorar o redistribuir segun su licencia.',
    color: 'emerald',
    examples: [
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
  pitch: { tool: 'Presentacion', why: 'Ayuda a explicar ideas con estructura visual y apoyo para una exposicion.' },
};

const officeComparisonSets = {
  docs: [
    { name: 'Word', type: 'Cerrado', note: 'Muy extendido en trabajo y educacion.' },
    { name: 'LibreOffice Writer', type: 'Abierto', note: 'Alternativa libre para documentos y cartas.' },
    { name: 'Google Docs', type: 'Web', note: 'Muy util para colaboracion y comentarios.' },
  ],
  sheets: [
    { name: 'Excel', type: 'Cerrado', note: 'Muy potente para formulas, tablas y analisis.' },
    { name: 'LibreOffice Calc', type: 'Abierto', note: 'Alternativa libre para calculo y tablas.' },
    { name: 'Google Sheets', type: 'Web', note: 'Ideal para trabajo compartido y seguimiento.' },
  ],
};

const officeQuizItems = [
  { id: 'office-1', prompt: 'Quieres preparar un presupuesto mensual con sumas y columnas.', answer: 'spreadsheets', explanation: 'La hoja de calculo es la herramienta adecuada para datos numericos y formulas.' },
  { id: 'office-2', prompt: 'Necesitas exponer un proyecto de forma visual en clase.', answer: 'presentations_tools', explanation: 'Una presentacion ordena ideas visuales para explicar un tema ante otras personas.' },
  { id: 'office-3', prompt: 'Vas a enviar un CV final para una candidatura.', answer: 'pdf_export', explanation: 'Conviene cerrar el documento y exportarlo a PDF para mantener el formato estable.' },
];

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
// 6. BASE DE DATOS: PRODUCTIVIDAD Y ATAJOS
// ==========================================
const keyboardData = {
  shortcut_basics: {
    id: 'shortcut_basics', name: 'Atajos Base', category: 'Fundamentos del Teclado', icon: Keyboard, color: 'indigo',
    desc: 'Los atajos de teclado son combinaciones de teclas que permiten ejecutar acciones sin apartar las manos del teclado. Reducen clics, aceleran tareas repetitivas y ayudan a desarrollar memoria muscular digital.\n\nLa idea no es memorizarlo todo en un dia, sino dominar primero un pequeno grupo de comandos que se repiten constantemente en clase, en oficina y al navegar.',
    details: 'Formula general:\nâ€¢ Ctrl: Activa la mayoria de comandos de accion en Windows.\nâ€¢ Shift: Modifica el comportamiento para ampliar, seleccionar o invertir.\nâ€¢ Alt: Accede a funciones secundarias o menus.\nâ€¢ La practica diaria convierte el atajo en habito y reduce errores.',
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
    details: 'Patrones utiles:\nâ€¢ Ctrl + F: Busca informacion dentro de la pagina o documento actual.\nâ€¢ Tab y Shift + Tab: Saltan entre campos de un formulario.\nâ€¢ Ctrl + A: Selecciona todo el contenido activo.\nâ€¢ Inicio / Fin: Van al principio o al final de la linea o del bloque segun la app.',
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
    details: 'Combinaciones frecuentes:\nâ€¢ Ctrl + B: Negrita en muchos editores.\nâ€¢ Ctrl + I: Cursiva.\nâ€¢ Ctrl + Y: Rehacer lo que acabas de deshacer.\nâ€¢ Ctrl + Retroceso: Borra la palabra anterior en muchos entornos.',
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
    details: 'Atajos recomendados:\nâ€¢ Ctrl + T: Nueva pestana.\nâ€¢ Ctrl + W: Cierra la pestana actual.\nâ€¢ Ctrl + L: Situa el foco en la barra de direcciones.\nâ€¢ Ctrl + Shift + T: Recupera la ultima pestana cerrada.',
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
    details: 'Comandos destacados:\nâ€¢ Alt + Tab: Cambia entre ventanas abiertas.\nâ€¢ Win + Shift + S: Herramienta de recorte en Windows.\nâ€¢ Win + Flechas: Ajusta la ventana a los lados o maximiza.\nâ€¢ Ctrl + Shift + Esc: Abre el Administrador de tareas.',
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
    id: 'hardware',
    group: 'Base tecnologica',
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
    group: 'Base tecnologica',
    step: '02',
    title: 'Perifericos',
    subtitle: 'Entrada, salida y conexion',
    description: 'Distingue dispositivos de entrada, salida y transferencia de informacion.',
    icon: Headphones,
    activeClass: 'bg-cyan-600 text-white shadow-xl border-cyan-800 scale-105 z-10',
    idleClass: 'bg-white text-slate-500 hover:bg-cyan-50 hover:text-cyan-700 border-slate-200 shadow-sm',
  },
  {
    id: 'cloud',
    group: 'Base tecnologica',
    step: '03',
    title: 'Redes',
    subtitle: 'Local, nube y sincronizacion',
    description: 'Aclara como viajan los archivos y donde vive la informacion.',
    icon: Cloud,
    activeClass: 'bg-blue-600 text-white shadow-xl border-blue-800 scale-105 z-10',
    idleClass: 'bg-white text-slate-500 hover:bg-blue-50 hover:text-blue-700 border-slate-200 shadow-sm',
  },
  {
    id: 'software',
    group: 'Base tecnologica',
    step: '04',
    title: 'Software',
    subtitle: 'Sistema, drivers y apps',
    description: 'Entiende las capas del software y como se relacionan con el hardware.',
    icon: AppWindow,
    activeClass: 'bg-slate-700 text-white shadow-xl border-slate-900 scale-105 z-10',
    idleClass: 'bg-white text-slate-500 hover:bg-slate-50 hover:text-slate-700 border-slate-200 shadow-sm',
  },
  {
    id: 'internet',
    group: 'Navegacion y organizacion',
    step: '05',
    title: 'Navegacion',
    subtitle: 'Buscar, contrastar y protegerse',
    description: 'Aprende a moverte por Internet con criterio y seguridad.',
    icon: Globe,
    activeClass: 'bg-purple-600 text-white shadow-xl border-purple-800 scale-105 z-10',
    idleClass: 'bg-white text-slate-500 hover:bg-purple-50 hover:text-purple-700 border-slate-200 shadow-sm',
  },
  {
    id: 'security',
    group: 'Navegacion y organizacion',
    step: '06',
    title: 'Seguridad',
    subtitle: 'Proteccion y autocuidado digital',
    description: 'Aprende a proteger cuentas, detectar fraudes y mantener tus datos a salvo.',
    icon: ShieldCheck,
    activeClass: 'bg-rose-600 text-white shadow-xl border-rose-800 scale-105 z-10',
    idleClass: 'bg-white text-slate-500 hover:bg-rose-50 hover:text-rose-700 border-slate-200 shadow-sm',
  },
  {
    id: 'email',
    group: 'Navegacion y organizacion',
    step: '07',
    title: 'Correo',
    subtitle: 'Comunicacion y bandeja segura',
    description: 'Domina email, adjuntos, destinatarios y netiqueta para estudiar y trabajar mejor.',
    icon: MailWarning,
    activeClass: 'bg-sky-600 text-white shadow-xl border-sky-800 scale-105 z-10',
    idleClass: 'bg-white text-slate-500 hover:bg-sky-50 hover:text-sky-700 border-slate-200 shadow-sm',
  },
  {
    id: 'files',
    group: 'Navegacion y organizacion',
    step: '08',
    title: 'Archivos',
    subtitle: 'Orden, formatos y carpetas',
    description: 'Organiza documentos y entiende como se almacenan.',
    icon: FolderOpen,
    activeClass: 'bg-amber-500 text-white shadow-xl border-amber-700 scale-105 z-10',
    idleClass: 'bg-white text-slate-500 hover:bg-amber-50 hover:text-amber-700 border-slate-200 shadow-sm',
  },
  {
    id: 'keyboard',
    group: 'Productividad',
    step: '09',
    title: 'Atajos',
    subtitle: 'Productividad con teclado',
    description: 'Domina combinaciones para navegar y trabajar con mas fluidez.',
    icon: Keyboard,
    activeClass: 'bg-indigo-600 text-white shadow-xl border-indigo-800 scale-105 z-10',
    idleClass: 'bg-white text-slate-500 hover:bg-indigo-50 hover:text-indigo-700 border-slate-200 shadow-sm',
  },
  {
    id: 'office',
    group: 'Productividad',
    step: '10',
    title: 'Ofimatica',
    subtitle: 'Documentos, calculo y presentacion',
    description: 'Elige la herramienta adecuada para redactar, calcular, presentar y compartir.',
    icon: Presentation,
    activeClass: 'bg-teal-600 text-white shadow-xl border-teal-800 scale-105 z-10',
    idleClass: 'bg-white text-slate-500 hover:bg-teal-50 hover:text-teal-700 border-slate-200 shadow-sm',
  },
  {
    id: 'ai',
    group: 'Inteligencia artificial',
    step: '11',
    title: 'Inteligencia IA',
    subtitle: 'Herramientas y usos reales',
    description: 'Explora modelos, asistentes y creadores multimedia.',
    icon: Bot,
    activeClass: 'bg-emerald-500 text-white shadow-xl border-emerald-700 scale-105 z-10',
    idleClass: 'bg-white text-slate-500 hover:bg-emerald-50 hover:text-emerald-700 border-slate-200 shadow-sm',
  }
];

const tabDataMap = {
  hardware: hardwareData,
  peripherals: peripheralData,
  cloud: cloudData,
  software: softwareData,
  internet: internetData,
  security: securityData,
  email: emailData,
  files: filesData,
  keyboard: keyboardData,
  office: officeData,
  ai: aiData,
};

const sectionGroupMeta = {
  'Base tecnologica': {
    summary: 'Infraestructura, periféricos, red y software base para entender como funciona el entorno digital.',
  },
  'Navegacion y organizacion': {
    summary: 'Busqueda, criterio, archivos y orden para moverse con autonomia.',
  },
  Productividad: {
    summary: 'Atajos y flujos de trabajo para reducir friccion y ganar velocidad.',
  },
  'Inteligencia artificial': {
    summary: 'Herramientas, asistentes y creadores para ampliar capacidades.',
  },
};

// ==========================================
// MAPEADO DE COLORES DE TAILWIND (SEGURIDAD)
// ==========================================
const colorMap = {
  emerald: { bgBase: 'bg-emerald-600', bgLight: 'bg-emerald-100', text: 'text-emerald-800', borderLight: 'border-emerald-200', borderHeavy: 'border-emerald-500', ring: 'ring-emerald-400', glow: 'shadow-[0_0_20px_rgba(52,211,153,0.3)]' },
  blue: { bgBase: 'bg-blue-600', bgLight: 'bg-blue-100', text: 'text-blue-800', borderLight: 'border-blue-200', borderHeavy: 'border-blue-500', ring: 'ring-blue-400', glow: 'shadow-[0_0_15px_rgba(59,130,246,0.5)]' },
  purple: { bgBase: 'bg-purple-600', bgLight: 'bg-purple-100', text: 'text-purple-800', borderLight: 'border-purple-200', borderHeavy: 'border-purple-500', ring: 'ring-purple-400', glow: 'shadow-[0_0_15px_rgba(168,85,247,0.5)]' },
  red: { bgBase: 'bg-red-600', bgLight: 'bg-red-100', text: 'text-red-800', borderLight: 'border-red-200', borderHeavy: 'border-red-500', ring: 'ring-red-400', glow: 'shadow-[0_0_25px_rgba(239,68,68,0.4)]' },
  amber: { bgBase: 'bg-amber-600', bgLight: 'bg-amber-100', text: 'text-amber-800', borderLight: 'border-amber-200', borderHeavy: 'border-amber-500', ring: 'ring-amber-400', glow: 'shadow-[0_0_15px_rgba(245,158,11,0.5)]' },
  zinc: { bgBase: 'bg-zinc-600', bgLight: 'bg-zinc-100', text: 'text-zinc-800', borderLight: 'border-zinc-200', borderHeavy: 'border-zinc-500', ring: 'ring-zinc-400', glow: 'shadow-[0_0_15px_rgba(113,113,122,0.5)]' },
  cyan: { bgBase: 'bg-cyan-600', bgLight: 'bg-cyan-100', text: 'text-cyan-800', borderLight: 'border-cyan-200', borderHeavy: 'border-cyan-500', ring: 'ring-cyan-400', glow: 'shadow-[0_0_30px_rgba(6,182,212,0.5)]' },
  indigo: { bgBase: 'bg-indigo-600', bgLight: 'bg-indigo-100', text: 'text-indigo-800', borderLight: 'border-indigo-200', borderHeavy: 'border-indigo-500', ring: 'ring-indigo-400', glow: 'shadow-[0_0_20px_rgba(99,102,241,0.4)]' },
  fuchsia: { bgBase: 'bg-fuchsia-600', bgLight: 'bg-fuchsia-100', text: 'text-fuchsia-800', borderLight: 'border-fuchsia-200', borderHeavy: 'border-fuchsia-500', ring: 'ring-fuchsia-400', glow: 'shadow-[0_0_20px_rgba(217,70,239,0.4)]' },
  slate: { bgBase: 'bg-slate-600', bgLight: 'bg-slate-100', text: 'text-slate-800', borderLight: 'border-slate-200', borderHeavy: 'border-slate-500', ring: 'ring-slate-400', glow: 'shadow-[0_0_15px_rgba(100,116,139,0.4)]' },
};

export default function App() {
  const [activeTab, setActiveTab] = useState('hardware');
  const [selectedItem, setSelectedItem] = useState(null);
  const [theme, setTheme] = useState('light');
  const [isSectionMenuOpen, setIsSectionMenuOpen] = useState(false);
  const [expandedSectionGroup, setExpandedSectionGroup] = useState('Base tecnologica');
  const [isScrolled, setIsScrolled] = useState(false);
  const [softwareLicenseView, setSoftwareLicenseView] = useState('closed');
  const [softwareQuizSelections, setSoftwareQuizSelections] = useState({});
  const [securityQuizSelections, setSecurityQuizSelections] = useState({});
  const [emailQuizSelections, setEmailQuizSelections] = useState({});
  const [emailRecipientView, setEmailRecipientView] = useState('para');
  const [officeTaskView, setOfficeTaskView] = useState('cv');
  const [officeQuizSelections, setOfficeQuizSelections] = useState({});
  const activeTabMeta = tabConfig.find((tab) => tab.id === activeTab) || tabConfig[0];
  const currentDataSet = tabDataMap[activeTab] || {};
  const currentItems = Object.values(currentDataSet);
  const itemCount = currentItems.length;
  const isDark = theme === 'dark';
  const hasActiveDetail = Boolean(selectedItem && currentDataSet[selectedItem.id]);
  const sectionGroups = tabConfig.reduce((acc, tab) => {
    if (!acc[tab.group]) acc[tab.group] = [];
    acc[tab.group].push(tab);
    return acc;
  }, {});
  const orderedSectionGroups = Object.entries(sectionGroups).sort(([groupA], [groupB]) => {
    if (groupA === expandedSectionGroup) return -1;
    if (groupB === expandedSectionGroup) return 1;
    return 0;
  });
  
  // Estado 3D para el Módulo 1
  const [rotation, setRotation] = useState({ x: 60, z: -40 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSelectedItem(null);
    setIsSectionMenuOpen(false);
  };

  const handleOpenGroupMenu = (group) => {
    setExpandedSectionGroup(group);
    setIsSectionMenuOpen(true);
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

  const handleSelect = (id, e, dataSet) => {
    if (e) e.stopPropagation();
    setSelectedItem((prev) => (prev?.id === id ? null : dataSet[id]));
  };

  const handleStartModule = () => {
    if (!currentItems.length) return;
    setSelectedItem(currentItems[0]);
  };

  const handleClearSelection = () => setSelectedItem(null);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('aula-theme');
    if (storedTheme === 'light' || storedTheme === 'dark') {
      setTheme(storedTheme);
      return;
    }

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
  }, []);

  useEffect(() => {
    window.localStorage.setItem('aula-theme', theme);
  }, [theme]);

  useEffect(() => {
    setExpandedSectionGroup(activeTabMeta.group);
  }, [activeTabMeta.group]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  // PESTAÑA 1: HARDWARE
  const renderHardwareTab = () => (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500">
      <div className="bg-slate-950 rounded-3xl p-6 shadow-2xl border border-slate-800 relative overflow-hidden flex flex-col">
        <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3 z-10 relative">
          <div className="flex items-center gap-3">
            <Server className="text-emerald-400" size={28} />
            <h2 className="text-2xl font-black text-white tracking-tight">Arquitectura Interna (Torre 3D)</h2>
          </div>
          <span className="text-[11px] font-bold uppercase tracking-wider bg-blue-900/50 text-blue-300 border border-blue-700 px-4 py-2 rounded-full animate-pulse flex items-center gap-2 shadow-lg shadow-blue-900/50">
            <Mouse size={14} /> Haz Clic y Arrastra para Rotar
          </span>
        </div>
        
        {/* Entorno 3D */}
        <div 
          className="relative w-full h-[450px] md:h-[550px] cursor-grab active:cursor-grabbing flex items-center justify-center bg-gradient-to-b from-slate-900 to-slate-950 rounded-xl"
          style={{ perspective: '1400px' }}
          onMouseDown={(e) => handleDragStart(e.clientX, e.clientY)}
          onMouseMove={(e) => handleDragMove(e.clientX, e.clientY)}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
        >
          <div 
            className="relative w-[280px] h-[350px] md:w-[350px] md:h-[450px]"
            style={{ transformStyle: 'preserve-3d', transform: `rotateX(${rotation.x}deg) rotateZ(${rotation.z}deg)`, transition: isDragging ? 'none' : 'transform 0.15s ease-out' }}
          >
            <Layer3D id="motherboard" baseZ={0} style={{ top: '0', left: '0', width: '100%', height: '100%' }} selectedItem={selectedItem} onSelect={handleSelect} hardwareData={hardwareData} colorMap={colorMap}>
              <div className="w-full h-full flex items-end justify-end p-4 opacity-50 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDM5LTVoNDB2MUgweiIgZmlsbD0icmdiYSg1MiwgMjExLCAxNTMsIDAuMikiLz48cGF0aCBkPSJNMzkuNSAwSDRwdjQwaC0xdnoiIGZpbGw9InJnYmEoNTIsIDIxMSwgMTUzLCAwLjIpIi8+PC9zdmc+')]"></div>
                <CircuitBoard className="w-16 h-16 mr-2" />
                <span className="text-xl font-bold tracking-widest uppercase text-emerald-100">Placa Base</span>
              </div>
            </Layer3D>
            <Layer3D id="cpu" baseZ={15} style={{ top: '15%', left: '35%', width: '25%', height: '20%' }} selectedItem={selectedItem} onSelect={handleSelect} hardwareData={hardwareData} colorMap={colorMap} />
            <Layer3D id="ram" baseZ={20} style={{ top: '12%', left: '65%', width: '20%', height: '26%' }} customClass="!bg-transparent !border-none !shadow-none" selectedItem={selectedItem} onSelect={handleSelect} hardwareData={hardwareData} colorMap={colorMap}>
               <div className="flex justify-between w-full h-full">
                 <div className="w-[40%] h-full bg-purple-600/90 border border-purple-400 rounded shadow-[0_0_15px_rgba(192,132,252,0.6)]"></div>
                 <div className="w-[40%] h-full bg-purple-600/90 border border-purple-400 rounded shadow-[0_0_15px_rgba(192,132,252,0.6)]"></div>
               </div>
               <span className="absolute -bottom-6 text-xs font-bold text-purple-200 bg-black/60 px-3 py-1 rounded-full shadow-lg">RAM</span>
            </Layer3D>
            <Layer3D id="gpu" baseZ={40} style={{ top: '48%', left: '5%', width: '80%', height: '22%' }} selectedItem={selectedItem} onSelect={handleSelect} hardwareData={hardwareData} colorMap={colorMap}>
              <div className="flex w-full h-full items-center justify-around px-4 relative pointer-events-none">
                <span className="absolute -top-3 left-2 text-xs font-bold bg-black/80 text-white px-2 py-1 rounded shadow-md border border-red-500/30">GPU RTX</span>
                <Fan className="w-12 h-12 opacity-80" />
                <Fan className="w-12 h-12 opacity-80" />
              </div>
            </Layer3D>
            <Layer3D id="storage" baseZ={10} style={{ bottom: '5%', left: '10%', width: '30%', height: '18%' }} selectedItem={selectedItem} onSelect={handleSelect} hardwareData={hardwareData} colorMap={colorMap} />
            <Layer3D id="psu" baseZ={20} style={{ bottom: '2%', right: '5%', width: '45%', height: '25%' }} selectedItem={selectedItem} onSelect={handleSelect} hardwareData={hardwareData} colorMap={colorMap} />
            <Layer3D id="cooling" baseZ={60} style={{ top: '12%', left: '32.5%', width: '30%', height: '26%' }} customClass="!rounded-full" selectedItem={selectedItem} onSelect={handleSelect} hardwareData={hardwareData} colorMap={colorMap}>
              <div className="flex flex-col items-center justify-center pointer-events-none w-full h-full">
                <Fan className={`w-3/4 h-3/4 ${selectedItem?.id === 'cooling' || !selectedItem ? 'animate-spin' : ''}`} style={{ animationDuration: '2.5s' }} />
              </div>
            </Layer3D>
          </div>
        </div>
        <button onClick={() => setRotation({ x: 60, z: -40 })} className="absolute bottom-6 right-6 z-20 bg-slate-800/80 hover:bg-slate-700 backdrop-blur-sm text-white text-xs font-bold px-4 py-3 rounded-xl border border-slate-600 shadow-2xl flex items-center gap-2 transition-all hover:scale-105">
          <Rotate3D size={16} /> Restaurar Ángulo
        </button>
        </div>
      </div>
  );

  const renderPeripheralsTab = () => (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500">
      <div className={`relative overflow-hidden rounded-[32px] border p-5 sm:p-6 md:p-8 ${
        isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-[0_22px_60px_rgba(15,23,42,0.12)]'
      }`}>
        <div className={`pointer-events-none absolute inset-0 ${
          isDark
            ? 'bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.12),transparent_28%)]'
            : 'bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.10),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.08),transparent_26%)]'
        }`} />
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-8">
          <div className="max-w-3xl">
            <p className={`text-[11px] font-black uppercase tracking-[0.25em] ${isDark ? 'text-slate-500' : 'text-cyan-600/70'}`}>Base tecnologica</p>
            <h2 className={`mt-3 text-2xl sm:text-3xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Perifericos y flujo de informacion</h2>
            <p className={`mt-4 text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Aprende a distinguir que dispositivos introducen datos, cuales los muestran y cuales sirven para intercambiar informacion entre el usuario y el equipo.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:w-auto w-full">
            <div className={`rounded-2xl border px-4 py-3 ${isDark ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-slate-50'}`}>
              <p className={`text-[10px] font-black uppercase tracking-[0.24em] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Entrada</p>
              <p className={`mt-2 text-sm font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Datos hacia el equipo</p>
            </div>
            <div className={`rounded-2xl border px-4 py-3 ${isDark ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-slate-50'}`}>
              <p className={`text-[10px] font-black uppercase tracking-[0.24em] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Salida</p>
              <p className={`mt-2 text-sm font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Respuesta hacia el usuario</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InteractiveButton id="input_devices" dataSet={peripheralData} extraClass="min-h-[112px]" selectedItem={selectedItem} onSelect={handleSelect} colorMap={colorMap} isDark={isDark} />
          <InteractiveButton id="output_devices" dataSet={peripheralData} extraClass="min-h-[112px]" selectedItem={selectedItem} onSelect={handleSelect} colorMap={colorMap} isDark={isDark} />
          <InteractiveButton id="io_devices" dataSet={peripheralData} extraClass="min-h-[112px]" selectedItem={selectedItem} onSelect={handleSelect} colorMap={colorMap} isDark={isDark} />
          <InteractiveButton id="connectivity_devices" dataSet={peripheralData} extraClass="min-h-[112px]" selectedItem={selectedItem} onSelect={handleSelect} colorMap={colorMap} isDark={isDark} />
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        <div className={`rounded-[28px] border p-5 ${isDark ? 'border-slate-800 bg-slate-900/90' : 'border-slate-200 bg-white'}`}>
          <p className={`text-[11px] font-black uppercase tracking-[0.24em] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Entrada</p>
          <p className={`mt-3 text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Teclado, raton, escaner o microfono introducen informacion desde el exterior.</p>
        </div>
        <div className={`rounded-[28px] border p-5 ${isDark ? 'border-slate-800 bg-slate-900/90' : 'border-slate-200 bg-white'}`}>
          <p className={`text-[11px] font-black uppercase tracking-[0.24em] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Salida</p>
          <p className={`mt-3 text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Monitor, altavoces, auriculares o impresora muestran el resultado del procesamiento.</p>
        </div>
        <div className={`rounded-[28px] border p-5 ${isDark ? 'border-slate-800 bg-slate-900/90' : 'border-slate-200 bg-white'}`}>
          <p className={`text-[11px] font-black uppercase tracking-[0.24em] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Mixtos</p>
          <p className={`mt-3 text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Pantallas tactiles, cascos con microfono o impresoras multifuncion combinan varias direcciones de informacion.</p>
        </div>
      </div>
    </div>
  );

  // PESTAÑA 2: NUBE
  const renderCloudTab = () => (
    <div className={`relative overflow-hidden rounded-[32px] border p-5 sm:p-6 md:p-8 flex flex-col gap-6 h-full animate-in fade-in duration-500 ${
      isDark ? 'bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border-slate-800' : 'bg-white border-slate-200 shadow-[0_22px_60px_rgba(15,23,42,0.12)]'
    }`}>
      <div className={`flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-4 relative z-10 border-b ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
        <Globe className={isDark ? 'text-blue-400' : 'text-blue-600'} size={32} />
        <div>
          <p className={`text-[11px] font-black uppercase tracking-[0.25em] ${isDark ? 'text-sky-300/70' : 'text-sky-700/70'}`}>Redes y sincronizacion</p>
          <h2 className={`mt-3 text-2xl sm:text-3xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>Diagrama funcional: local, red y nube</h2>
          <p className={`mt-1 text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-500'}`}>Comprende como viajan y donde se procesan tus datos.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 relative z-10">
        <div className={`rounded-[26px] border p-4 ${isDark ? 'border-emerald-500/15 bg-emerald-500/10' : 'border-slate-200 bg-slate-50'}`}>
          <p className={`text-[10px] font-black uppercase tracking-[0.24em] ${isDark ? 'text-emerald-300/70' : 'text-slate-400'}`}>Origen</p>
          <p className={`mt-2 text-sm font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Equipo local</p>
        </div>
        <div className={`rounded-[26px] border p-4 ${isDark ? 'border-amber-500/15 bg-amber-500/10' : 'border-slate-200 bg-slate-50'}`}>
          <p className={`text-[10px] font-black uppercase tracking-[0.24em] ${isDark ? 'text-amber-300/80' : 'text-slate-400'}`}>Puente</p>
          <p className={`mt-2 text-sm font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>WiFi, fibra o 5G</p>
        </div>
        <div className={`rounded-[26px] border p-4 ${isDark ? 'border-blue-500/15 bg-blue-500/10' : 'border-slate-200 bg-slate-50'}`}>
          <p className={`text-[10px] font-black uppercase tracking-[0.24em] ${isDark ? 'text-blue-300/80' : 'text-slate-400'}`}>Destino</p>
          <p className={`mt-2 text-sm font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Nube sincronizada</p>
        </div>
      </div>

      <div className="relative flex-grow flex flex-col md:flex-row items-center justify-center gap-10 md:gap-0 mt-2 mb-2">
        <div className="w-full md:w-2/5 flex flex-col items-center relative z-10">
          <div className={`p-6 sm:p-8 rounded-[2rem] border shadow-2xl flex flex-col items-center w-full max-w-[320px] backdrop-blur-md ${isDark ? 'bg-slate-800/80 border-slate-700' : 'bg-emerald-50/80 border-emerald-200'}`}>
            <div className={`p-5 rounded-full mb-6 border ${isDark ? 'bg-emerald-900/40 border-emerald-500/30' : 'bg-emerald-100 border-emerald-200'}`}>
              <Laptop className={isDark ? 'text-emerald-400 w-16 h-16' : 'text-emerald-700 w-16 h-16'} strokeWidth={1.2} />
            </div>
            <h3 className={`font-black text-xl mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>Tu entorno fisico</h3>
          <InteractiveButton id="local_work" dataSet={cloudData} extraClass="w-full mb-4" selectedItem={selectedItem} onSelect={handleSelect} colorMap={colorMap} isDark={isDark} />
          </div>
        </div>
        <div className="w-full md:w-1/5 flex flex-col items-center justify-center relative h-40 md:h-auto z-10">
          <div className={`hidden md:block absolute top-1/2 left-0 w-full h-1.5 -translate-y-1/2 -z-10 rounded-full overflow-hidden ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`}>
            <div className="h-full bg-gradient-to-r from-emerald-500 via-amber-400 to-blue-500 w-[200%] animate-[slide_2s_linear_infinite]"></div>
          </div>
          <InteractiveButton id="internet_sync" dataSet={cloudData} extraClass="rounded-[28px] !p-6 shadow-[0_0_30px_rgba(251,191,36,0.2)]" selectedItem={selectedItem} onSelect={handleSelect} colorMap={colorMap} isDark={isDark} />
        </div>
        <div className="w-full md:w-2/5 flex flex-col items-center relative z-10">
          <div className={`absolute inset-0 rounded-full scale-150 -z-10 ${isDark ? 'bg-blue-500/20 blur-[100px]' : 'bg-blue-200/50 blur-[80px]'}`}></div>
          <div className={`p-6 sm:p-8 rounded-[2rem] border shadow-2xl flex flex-col items-center w-full max-w-[320px] backdrop-blur-xl ${isDark ? 'bg-blue-950/80 border-blue-800' : 'bg-blue-50/80 border-blue-200'}`}>
            <div className={`p-5 rounded-full mb-6 border relative ${isDark ? 'bg-blue-900/60 border-blue-500/40' : 'bg-blue-100 border-blue-200'}`}>
              <Cloud className={isDark ? 'text-blue-300 w-16 h-16' : 'text-blue-700 w-16 h-16'} strokeWidth={1.2} />
              <Server className={`${isDark ? 'text-white bg-blue-600' : 'text-white bg-blue-500'} w-8 h-8 absolute bottom-0 right-0 p-1.5 rounded-lg shadow-lg`} strokeWidth={2} />
            </div>
            <h3 className={`font-black text-xl mb-6 text-center ${isDark ? 'text-white' : 'text-slate-900'}`}>Megacentros de datos</h3>
            <div className="flex flex-col gap-4 w-full">
              <InteractiveButton id="cloud_work" dataSet={cloudData} extraClass="w-full" selectedItem={selectedItem} onSelect={handleSelect} colorMap={colorMap} isDark={isDark} />
              <div className={`w-full rounded-[24px] border p-4 ${isDark ? 'border-purple-500/20 bg-slate-950' : 'border-purple-200 bg-purple-50/70'}`}>
                <p className={`text-[11px] font-black uppercase tracking-[0.24em] ${isDark ? 'text-purple-300' : 'text-purple-700'}`}>Uso compartido</p>
                <p className={`mt-3 text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>La nube facilita que varias personas accedan al mismo archivo, compartan cambios y mantengan versiones actualizadas.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {cloudData[selectedItem?.id] && (
        <section className={`rounded-[28px] border p-5 sm:p-6 ${isDark ? 'border-slate-800 bg-slate-950/90' : 'border-slate-200 bg-slate-50'}`}>
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
            <div className="max-w-3xl">
              <p className={`text-[11px] font-black uppercase tracking-[0.24em] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Foco actual</p>
              <h3 className={`mt-2 text-xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>{selectedItem.name}</h3>
              <p className={`mt-3 text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{selectedItem.desc.split('\n\n')[0]}</p>
            </div>
            <div className={`rounded-[24px] border px-4 py-4 lg:max-w-[320px] ${selectedItem?.id === 'internet_sync'
              ? isDark ? 'border-amber-500/25 bg-amber-500/10' : 'border-amber-200 bg-amber-50'
              : selectedItem?.id === 'local_work'
                ? isDark ? 'border-emerald-500/25 bg-emerald-500/10' : 'border-emerald-200 bg-emerald-50'
                : isDark ? 'border-blue-500/25 bg-blue-500/10' : 'border-blue-200 bg-blue-50'
            }`}>
              <p className={`text-[11px] font-black uppercase tracking-[0.24em] ${
                selectedItem?.id === 'internet_sync'
                  ? isDark ? 'text-amber-300' : 'text-amber-700'
                  : selectedItem?.id === 'local_work'
                    ? isDark ? 'text-emerald-300' : 'text-emerald-700'
                    : isDark ? 'text-blue-300' : 'text-blue-700'
              }`}>Lectura guiada</p>
              <p className={`mt-3 text-sm leading-relaxed ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
                {selectedItem?.id === 'internet_sync'
                  ? 'La sincronizacion es el puente que compara versiones, sube cambios y resuelve si el archivo vive local, en nube o en ambos sitios.'
                  : selectedItem?.id === 'local_work'
                    ? 'El trabajo local da velocidad e independencia, pero depende mas del estado del dispositivo y de tus copias de seguridad.'
                    : 'La nube gana en acceso, continuidad y colaboracion, pero necesita una red estable y una buena gestion de permisos y versiones.'}
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  );

  // PESTAÑA 3: INTERNET
  const renderInternetTab = () => (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500 h-full">
      <div className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-200">
        <div className="flex items-center gap-3 mb-8 border-b border-slate-100 pb-4">
          <Globe className="text-blue-600" size={32} />
          <div>
            <h2 className="text-2xl font-black text-slate-800">Simulador de Navegación y Búsqueda</h2>
            <p className="text-slate-500 mt-1 text-sm font-medium">Aprende a encontrar y filtrar la inmensidad de la web.</p>
          </div>
        </div>

        <div className="border border-slate-300 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-slate-50 mb-10 max-w-3xl mx-auto">
          <div className="bg-slate-200 p-3 flex items-center gap-4 border-b border-slate-300">
            <div className="flex gap-2 px-2">
              <div className="w-3.5 h-3.5 rounded-full bg-red-400 shadow-inner"></div>
              <div className="w-3.5 h-3.5 rounded-full bg-amber-400 shadow-inner"></div>
              <div className="w-3.5 h-3.5 rounded-full bg-emerald-400 shadow-inner"></div>
            </div>
            <button onClick={(e) => handleSelect('browsers', e, internetData)} className={`flex-grow bg-white text-slate-600 text-[15px] font-medium py-2 px-4 rounded-lg shadow-sm flex items-center gap-3 border transition-all hover:bg-slate-50 ${selectedItem?.id === 'browsers' ? 'ring-4 ring-blue-200 border-blue-500 bg-blue-50 text-blue-800' : 'border-slate-300'}`}>
              <AppWindow size={18} className={selectedItem?.id === 'browsers' ? 'text-blue-600' : 'text-slate-400'} /> https://www.tu-navegador-web.com
            </button>
          </div>
          
          <div className="p-12 flex flex-col items-center min-h-[350px] justify-center relative bg-white overflow-hidden">
            <Globe size={250} className="text-blue-50/50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <h1 className="text-5xl font-black text-slate-800 mb-10 z-10 tracking-tight text-center"><span className="text-blue-600">Buscador</span> Universal</h1>
            <button onClick={(e) => handleSelect('search_engine', e, internetData)} className={`w-full max-w-xl bg-white border-2 rounded-full py-5 px-8 flex items-center gap-4 shadow-lg hover:shadow-xl transition-all z-10 ${selectedItem?.id === 'search_engine' ? 'border-purple-500 ring-8 ring-purple-100 scale-105' : 'border-slate-200 hover:border-slate-300'}`}>
              <Search size={28} className={selectedItem?.id === 'search_engine' ? 'text-purple-600' : 'text-slate-400'} />
              <span className={`text-[17px] ${selectedItem?.id === 'search_engine' ? 'text-purple-800 font-bold' : 'text-slate-400 font-medium'}`}>Escribe tus palabras clave aquí... (ej. "cursos gratuitos")</span>
            </button>
            <div className="flex flex-wrap justify-center gap-4 mt-10 z-10">
              <InteractiveButton id="scenario_personal" dataSet={internetData} extraClass="px-6 py-3" selectedItem={selectedItem} onSelect={handleSelect} colorMap={colorMap} isDark={isDark} />
              <InteractiveButton id="scenario_work" dataSet={internetData} extraClass="px-6 py-3" selectedItem={selectedItem} onSelect={handleSelect} colorMap={colorMap} isDark={isDark} />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <h3 className="text-2xl font-black text-slate-800 flex items-center gap-3">
            <ShieldCheck className="text-emerald-500" size={32}/> Ciberseguridad y Amenazas de la Red
          </h3>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 bg-slate-200 px-3 py-1 rounded-full">Lectura Obligatoria</span>
        </div>
        <p className="text-slate-600 mb-8 max-w-3xl leading-relaxed">Navegar por Internet es como caminar por una gran ciudad: hay lugares increíbles, pero también carteristas y estafadores. Explora los principales peligros que existen y aprende a identificarlos para proteger tu información y tu dinero.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InteractiveButton id="reliable_sources" dataSet={internetData} extraClass="w-full flex-row !justify-start gap-4 !p-5" selectedItem={selectedItem} onSelect={handleSelect} colorMap={colorMap} isDark={isDark} />
          <InteractiveButton id="phishing" dataSet={internetData} extraClass="w-full flex-row !justify-start gap-4 !p-5" selectedItem={selectedItem} onSelect={handleSelect} colorMap={colorMap} isDark={isDark} />
          <InteractiveButton id="malware" dataSet={internetData} extraClass="w-full flex-row !justify-start gap-4 !p-5" selectedItem={selectedItem} onSelect={handleSelect} colorMap={colorMap} isDark={isDark} />
          <InteractiveButton id="scams" dataSet={internetData} extraClass="w-full flex-row !justify-start gap-4 !p-5" selectedItem={selectedItem} onSelect={handleSelect} colorMap={colorMap} isDark={isDark} />
        </div>
      </div>
    </div>
  );

  // PESTAÑA 4: ARCHIVOS
  const renderFilesTab = () => (
    <div className="bg-slate-900 rounded-3xl p-5 sm:p-6 md:p-8 shadow-2xl border border-slate-800 animate-in fade-in duration-500 h-full">
      <div className="flex items-center gap-3 mb-8 border-b border-slate-700 pb-4">
        <FolderOpen className="text-amber-400" size={32} />
        <div>
          <h2 className="text-2xl font-black text-white">Explorador y Gestión Documental</h2>
          <p className="text-slate-400 mt-1 text-sm font-medium">Domina la organización, jerarquías y formatos de archivo.</p>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row gap-6 xl:min-h-[550px]">
        <div className="w-full xl:w-1/3 bg-slate-800 rounded-2xl p-4 sm:p-5 border border-slate-700 flex flex-col gap-4 shadow-inner">
          <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-2 pl-2">Unidades (Discos)</h3>
          <div className="space-y-3">
            <button onClick={(e) => handleSelect('storage_drives', e, filesData)} className={`flex items-center gap-4 p-4 rounded-xl text-left transition-all border-2 w-full ${selectedItem?.id === 'storage_drives' ? 'bg-blue-600 border-blue-400 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]' : 'bg-slate-700/50 border-slate-600 text-slate-300 hover:bg-slate-700'}`}>
              <div className="bg-slate-800 p-2 rounded-lg"><HardDrive size={24} className="text-blue-400" /></div>
              <div><p className="font-bold text-[15px] leading-tight">Disco Local (C:)</p><p className="text-[12px] text-slate-400 mt-0.5">Sistema y Programas</p></div>
            </button>
            <button onClick={(e) => handleSelect('storage_drives', e, filesData)} className={`flex items-center gap-4 p-4 rounded-xl text-left transition-all border-2 w-full ${selectedItem?.id === 'storage_drives' ? 'bg-blue-600 border-blue-400 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]' : 'bg-slate-700/50 border-slate-600 text-slate-300 hover:bg-slate-700'}`}>
              <div className="bg-slate-800 p-2 rounded-lg"><Usb size={24} className="text-emerald-400" /></div>
              <div><p className="font-bold text-[15px] leading-tight">KINGSTON (D:)</p><p className="text-[12px] text-slate-400 mt-0.5">Pendrive 64GB</p></div>
            </button>
            <button onClick={(e) => handleSelect('storage_drives', e, filesData)} className={`flex items-center gap-4 p-4 rounded-xl text-left transition-all border-2 w-full ${selectedItem?.id === 'storage_drives' ? 'bg-blue-600 border-blue-400 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]' : 'bg-slate-700/50 border-slate-600 text-slate-300 hover:bg-slate-700'}`}>
              <div className="bg-slate-800 p-2 rounded-lg"><Cloud size={24} className="text-purple-400" /></div>
              <div><p className="font-bold text-[15px] leading-tight">Google Drive</p><p className="text-[12px] text-slate-400 mt-0.5">Nube Sincronizada</p></div>
            </button>
          </div>
        </div>

        <div className="w-full xl:w-2/3 bg-slate-50 rounded-2xl p-4 sm:p-6 border border-slate-200 flex flex-col gap-6 sm:gap-8 overflow-hidden">
          <div>
            <h3 className="text-[11px] font-black text-slate-500 uppercase tracking-widest mb-4">Estructura del Árbol (Jerarquía)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InteractiveButton id="folders_org" dataSet={filesData} extraClass="!flex-row !justify-start gap-4 !p-5 shadow-sm" selectedItem={selectedItem} onSelect={handleSelect} colorMap={colorMap} isDark={isDark} />
              <button onClick={(e) => handleSelect('folders_org', e, filesData)} className={`relative flex items-center p-5 rounded-xl border-2 transition-all duration-300 gap-4 ${selectedItem?.id === 'folders_org' ? 'ring-4 ring-amber-400 shadow-lg scale-105 bg-amber-100 text-amber-900 border-amber-500 z-10' : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-400'}`}>
                <FolderOpen size={36} className="text-amber-500" />
                <div className="text-left"><p className="font-bold text-[15px]">1_Trabajo</p><p className="text-[12px] text-slate-500">24 elementos</p></div>
              </button>
            </div>
          </div>

          <div className="flex-grow bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-4">Archivos y Formatos (Extensiones)</h3>
            <div className="space-y-3">
              <button onClick={(e) => handleSelect('file_types', e, filesData)} className={`w-full flex items-center justify-between p-3 rounded-lg border-2 transition-all ${selectedItem?.id === 'file_types' ? 'bg-purple-50 border-purple-400 ring-2 ring-purple-200' : 'bg-white border-slate-100 hover:border-slate-300 hover:bg-slate-50'}`}>
                <div className="flex items-center gap-4"><div className="p-2 bg-blue-100 rounded text-blue-600"><FileText size={24}/></div><div className="text-left"><p className="font-bold text-[14px] text-slate-800">CV_Actualizado</p></div></div><span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">.pdf</span>
              </button>
              <button onClick={(e) => handleSelect('file_types', e, filesData)} className={`w-full flex items-center justify-between p-3 rounded-lg border-2 transition-all ${selectedItem?.id === 'file_types' ? 'bg-purple-50 border-purple-400 ring-2 ring-purple-200' : 'bg-white border-slate-100 hover:border-slate-300 hover:bg-slate-50'}`}>
                <div className="flex items-center gap-4"><div className="p-2 bg-emerald-100 rounded text-emerald-600"><FileText size={24}/></div><div className="text-left"><p className="font-bold text-[14px] text-slate-800">Contabilidad</p></div></div><span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">.xlsx</span>
              </button>
              <button onClick={(e) => handleSelect('file_types', e, filesData)} className={`w-full flex items-center justify-between p-3 rounded-lg border-2 transition-all ${selectedItem?.id === 'file_types' ? 'bg-purple-50 border-purple-400 ring-2 ring-purple-200' : 'bg-white border-slate-100 hover:border-slate-300 hover:bg-slate-50'}`}>
                <div className="flex items-center gap-4"><div className="p-2 bg-amber-100 rounded text-amber-600"><ImageIcon size={24}/></div><div className="text-left"><p className="font-bold text-[14px] text-slate-800">Foto_Carnet</p></div></div><span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">.jpg</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSecurityTab = () => (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500">
      <div className={`rounded-[32px] border p-5 sm:p-6 md:p-8 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-[0_22px_60px_rgba(15,23,42,0.12)]'}`}>
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
              <div key={label} className={`rounded-2xl border px-4 py-3 ${isDark ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-slate-50'}`}>
                <p className={`text-[10px] font-black uppercase tracking-[0.24em] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{label}</p>
                <p className={`mt-2 text-sm font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>{value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">
          <InteractiveButton id="passwords" dataSet={securityData} extraClass="min-h-[108px]" selectedItem={selectedItem} onSelect={handleSelect} colorMap={colorMap} isDark={isDark} />
          <InteractiveButton id="phishing_security" dataSet={securityData} extraClass="min-h-[108px]" selectedItem={selectedItem} onSelect={handleSelect} colorMap={colorMap} isDark={isDark} />
          <InteractiveButton id="privacy_permissions" dataSet={securityData} extraClass="min-h-[108px]" selectedItem={selectedItem} onSelect={handleSelect} colorMap={colorMap} isDark={isDark} />
          <InteractiveButton id="backups_recovery" dataSet={securityData} extraClass="min-h-[108px]" selectedItem={selectedItem} onSelect={handleSelect} colorMap={colorMap} isDark={isDark} />
          <InteractiveButton id="safe_updates" dataSet={securityData} extraClass="min-h-[108px]" selectedItem={selectedItem} onSelect={handleSelect} colorMap={colorMap} isDark={isDark} />
        </div>
      </div>

      {!securityData[selectedItem?.id] && (
        <div className={`rounded-[32px] border p-6 sm:p-7 ${isDark ? 'border-slate-800 bg-slate-900/90' : 'border-slate-200 bg-white'}`}>
          <p className={`text-[11px] font-black uppercase tracking-[0.24em] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Tablero interactivo</p>
          <h3 className={`mt-3 text-xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Abre una ficha para ver su capa de detalle</h3>
          <p className={`mt-3 text-sm leading-relaxed max-w-3xl ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Las comparativas, permisos y ejercicios permanecen ocultos hasta que eliges un bloque concreto. Asi reducimos saturacion y dejamos mas respiro visual.</p>
        </div>
      )}

      <div className={`grid grid-cols-1 xl:grid-cols-[0.9fr_1.1fr] gap-6 ${selectedItem?.id === 'passwords' || selectedItem?.id === 'phishing_security' ? '' : 'hidden'}`}>
        <section className={`rounded-[32px] border p-5 sm:p-6 ${isDark ? 'border-slate-800 bg-slate-900/90' : 'border-slate-200 bg-white'}`}>
          <div className="flex items-center justify-between gap-4 mb-5">
            <div>
              <p className={`text-[11px] font-black uppercase tracking-[0.24em] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Comparativa visual</p>
              <h3 className={`mt-2 text-xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Contrasena debil vs fuerte</h3>
            </div>
            <button onClick={() => handleSelect('passwords', null, securityData)} className={`rounded-full border px-3 py-2 text-xs font-black uppercase tracking-widest ${isDark ? 'border-slate-700 text-slate-300 hover:bg-slate-800' : 'border-slate-300 text-slate-600 hover:bg-slate-50'}`}>Ver ficha</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <article className={`rounded-[26px] border p-5 ${isDark ? 'border-red-500/25 bg-red-500/10' : 'border-red-200 bg-red-50'}`}>
              <p className={`text-sm font-black uppercase tracking-widest ${isDark ? 'text-red-300' : 'text-red-700'}`}>Debiles</p>
              <div className="space-y-3 mt-4">{securityPasswordExamples.weak.map((password) => <div key={password} className={`rounded-2xl px-4 py-3 font-black ${isDark ? 'bg-slate-950 text-slate-200' : 'bg-white text-slate-700'}`}>{password}</div>)}</div>
            </article>
            <article className={`rounded-[26px] border p-5 ${isDark ? 'border-emerald-500/25 bg-emerald-500/10' : 'border-emerald-200 bg-emerald-50'}`}>
              <p className={`text-sm font-black uppercase tracking-widest ${isDark ? 'text-emerald-300' : 'text-emerald-700'}`}>Fuertes</p>
              <div className="space-y-3 mt-4">{securityPasswordExamples.strong.map((password) => <div key={password} className={`rounded-2xl px-4 py-3 font-black ${isDark ? 'bg-slate-950 text-slate-100' : 'bg-white text-slate-700'}`}>{password}</div>)}</div>
            </article>
          </div>
        </section>

        <section className={`rounded-[32px] border p-5 sm:p-6 ${isDark ? 'border-slate-800 bg-slate-900/90' : 'border-slate-200 bg-white'}`}>
          <div className="flex items-center justify-between gap-4 mb-5">
            <div>
              <p className={`text-[11px] font-black uppercase tracking-[0.24em] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Bandeja sospechosa</p>
              <h3 className={`mt-2 text-xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Correo legitimo vs correo sospechoso</h3>
            </div>
            <button onClick={() => handleSelect('phishing_security', null, securityData)} className={`rounded-full border px-3 py-2 text-xs font-black uppercase tracking-widest ${isDark ? 'border-slate-700 text-slate-300 hover:bg-slate-800' : 'border-slate-300 text-slate-600 hover:bg-slate-50'}`}>Ver ficha</button>
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

      <div className={`grid grid-cols-1 xl:grid-cols-[0.95fr_1.05fr] gap-6 ${selectedItem?.id === 'privacy_permissions' || selectedItem?.id === 'backups_recovery' || selectedItem?.id === 'safe_updates' ? '' : 'hidden'}`}>
        <section className={`rounded-[32px] border p-5 sm:p-6 ${isDark ? 'border-slate-800 bg-slate-900/90' : 'border-slate-200 bg-white'}`}>
          <div className="flex items-center justify-between gap-4 mb-5">
            <div><p className={`text-[11px] font-black uppercase tracking-[0.24em] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Permisos criticos</p><h3 className={`mt-2 text-xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Que permisos revisar</h3></div>
            <button onClick={() => handleSelect('privacy_permissions', null, securityData)} className={`rounded-full border px-3 py-2 text-xs font-black uppercase tracking-widest ${isDark ? 'border-slate-700 text-slate-300 hover:bg-slate-800' : 'border-slate-300 text-slate-600 hover:bg-slate-50'}`}>Ver ficha</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">{securityPermissionCards.map((card) => <article key={card.name} className={`rounded-[24px] border p-4 ${isDark ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-slate-50'}`}><p className={`text-sm font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>{card.name}</p><p className={`mt-2 text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{card.risk}</p></article>)}</div>
          <div className={`mt-5 rounded-[24px] border p-4 ${isDark ? 'border-blue-500/20 bg-blue-500/10' : 'border-blue-100 bg-blue-50'}`}>
            <p className={`text-sm font-black uppercase tracking-widest ${isDark ? 'text-blue-300' : 'text-blue-700'}`}>Checklist basica</p>
            <ul className="mt-3 space-y-2">{['Correo protegido con doble factor', 'Permisos revisados en movil y navegador', 'Copia de archivos importantes', 'Sistema y navegador actualizados'].map((item) => <li key={item} className={`flex items-start gap-3 text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}><span className="mt-0.5 text-emerald-500">✓</span>{item}</li>)}</ul>
          </div>
        </section>

        <section className={`rounded-[32px] border p-5 sm:p-6 ${isDark ? 'border-slate-800 bg-slate-900/90' : 'border-slate-200 bg-white'}`}>
          <div className="flex items-center justify-between gap-4 mb-6">
            <div><p className={`text-[11px] font-black uppercase tracking-[0.24em] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Mini quiz</p><h3 className={`mt-2 text-xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>¿Seguro o arriesgado?</h3></div>
            <button onClick={() => setSecurityQuizSelections({})} className={`rounded-full border px-3 py-2 text-xs font-black uppercase tracking-widest ${isDark ? 'border-slate-700 text-slate-300 hover:bg-slate-800' : 'border-slate-300 text-slate-600 hover:bg-slate-50'}`}>Reiniciar</button>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {securityQuizItems.map((item) => {
              const selected = securityQuizSelections[item.id];
              const isCorrect = selected === item.safe;
              return <article key={item.id} className={`rounded-[26px] border p-5 ${isDark ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-slate-50'}`}><p className={`text-sm leading-relaxed font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.prompt}</p><div className="grid grid-cols-2 gap-3 mt-4"><button onClick={() => handleSecurityQuizSelect(item.id, true)} className={`rounded-2xl px-4 py-3 text-sm font-black ${selected === true ? item.safe ? 'bg-emerald-500 text-white' : 'bg-red-500 text-white' : isDark ? 'bg-slate-900 text-slate-300 hover:bg-slate-800' : 'bg-white text-slate-600 hover:bg-slate-100'}`}>Seguro</button><button onClick={() => handleSecurityQuizSelect(item.id, false)} className={`rounded-2xl px-4 py-3 text-sm font-black ${selected === false ? !item.safe ? 'bg-emerald-500 text-white' : 'bg-red-500 text-white' : isDark ? 'bg-slate-900 text-slate-300 hover:bg-slate-800' : 'bg-white text-slate-600 hover:bg-slate-100'}`}>Arriesgado</button></div>{selected !== undefined && <div className={`mt-4 rounded-2xl border p-4 ${isCorrect ? isDark ? 'border-emerald-500/25 bg-emerald-500/10' : 'border-emerald-200 bg-emerald-50' : isDark ? 'border-amber-500/25 bg-amber-500/10' : 'border-amber-200 bg-amber-50'}`}><p className={`text-sm font-black uppercase tracking-widest ${isCorrect ? isDark ? 'text-emerald-300' : 'text-emerald-700' : isDark ? 'text-amber-300' : 'text-amber-700'}`}>{isCorrect ? 'Correcto' : 'Revisa la pista'}</p><p className={`mt-2 text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{item.explanation}</p></div>}</article>;
            })}
          </div>
        </section>
      </div>
    </div>
  );

  const renderEmailTab = () => (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500">
      <div className={`rounded-[32px] border p-5 sm:p-6 md:p-8 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-[0_22px_60px_rgba(15,23,42,0.12)]'}`}>
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-8">
          <div className="max-w-3xl">
            <p className={`text-[11px] font-black uppercase tracking-[0.25em] ${isDark ? 'text-slate-500' : 'text-sky-600/70'}`}>Correo y comunicacion</p>
            <h2 className={`mt-3 text-2xl sm:text-3xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Comunicacion digital clara y segura</h2>
            <p className={`mt-4 text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Aprende a escribir mejor, enviar documentos correctamente, diferenciar destinatarios y comunicarte con mas criterio por correo y videollamada.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full lg:w-auto">{[['Bandeja', 'Revisar con criterio'], ['Destino', 'Para, CC y CCO'], ['Tono', 'Mensaje profesional']].map(([label, value]) => <div key={label} className={`rounded-2xl border px-4 py-3 ${isDark ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-slate-50'}`}><p className={`text-[10px] font-black uppercase tracking-[0.24em] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{label}</p><p className={`mt-2 text-sm font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>{value}</p></div>)}</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">
          <InteractiveButton id="send_reply" dataSet={emailData} extraClass="min-h-[108px]" selectedItem={selectedItem} onSelect={handleSelect} colorMap={colorMap} isDark={isDark} />
          <InteractiveButton id="cc_bcc" dataSet={emailData} extraClass="min-h-[108px]" selectedItem={selectedItem} onSelect={handleSelect} colorMap={colorMap} isDark={isDark} />
          <InteractiveButton id="attachments_links" dataSet={emailData} extraClass="min-h-[108px]" selectedItem={selectedItem} onSelect={handleSelect} colorMap={colorMap} isDark={isDark} />
          <InteractiveButton id="inbox_security" dataSet={emailData} extraClass="min-h-[108px]" selectedItem={selectedItem} onSelect={handleSelect} colorMap={colorMap} isDark={isDark} />
          <InteractiveButton id="netiquette_calls" dataSet={emailData} extraClass="min-h-[108px]" selectedItem={selectedItem} onSelect={handleSelect} colorMap={colorMap} isDark={isDark} />
        </div>
      </div>

      <section className={`rounded-[32px] border p-5 sm:p-6 ${isDark ? 'border-slate-800 bg-slate-900/90' : 'border-slate-200 bg-white'}`}>
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
          <div className="max-w-2xl">
            <p className={`text-[11px] font-black uppercase tracking-[0.24em] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Tablero interactivo</p>
            <h3 className={`mt-2 text-xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Explora el correo como interfaz real</h3>
            <p className={`mt-3 text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Pulsa las zonas del tablero para entender para que sirve cada parte del correo. El detalle profundo se abre solo cuando eliges una ficha.</p>
          </div>
          {!emailData[selectedItem?.id] && (
            <div className={`rounded-2xl border px-4 py-3 ${isDark ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-slate-50'}`}>
              <p className={`text-[10px] font-black uppercase tracking-[0.24em] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Estado</p>
              <p className={`mt-2 text-sm font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Sin ficha abierta</p>
            </div>
          )}
        </div>

        <div className={`mt-6 rounded-[30px] border overflow-hidden ${isDark ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-slate-50'}`}>
          <div className={`flex items-center gap-3 px-4 py-3 border-b ${isDark ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'}`}>
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="w-3 h-3 rounded-full bg-amber-400" />
              <span className="w-3 h-3 rounded-full bg-emerald-400" />
            </div>
            <button onClick={() => handleSelect('inbox_security', null, emailData)} className={`flex-1 rounded-full border px-4 py-2 text-left text-sm ${selectedItem?.id === 'inbox_security' ? isDark ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-200' : 'border-emerald-200 bg-emerald-50 text-emerald-700' : isDark ? 'border-slate-700 bg-slate-950 text-slate-400' : 'border-slate-200 bg-slate-50 text-slate-500'}`}>Bandeja de entrada y revision segura</button>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-[220px_1fr]">
            <aside className={`border-r p-4 space-y-3 ${isDark ? 'border-slate-800 bg-slate-900/80' : 'border-slate-200 bg-white'}`}>
              <button onClick={() => handleSelect('send_reply', null, emailData)} className={`w-full rounded-[20px] px-4 py-3 text-left text-sm font-black ${selectedItem?.id === 'send_reply' ? isDark ? 'bg-sky-500/15 text-sky-200 border border-sky-500/20' : 'bg-sky-50 text-sky-700 border border-sky-200' : isDark ? 'bg-slate-950 text-slate-300 border border-slate-800' : 'bg-slate-50 text-slate-700 border border-slate-200'}`}>Nuevo / responder</button>
              <button onClick={() => handleSelect('cc_bcc', null, emailData)} className={`w-full rounded-[20px] px-4 py-3 text-left text-sm font-black ${selectedItem?.id === 'cc_bcc' ? isDark ? 'bg-violet-500/15 text-violet-200 border border-violet-500/20' : 'bg-violet-50 text-violet-700 border border-violet-200' : isDark ? 'bg-slate-950 text-slate-300 border border-slate-800' : 'bg-slate-50 text-slate-700 border border-slate-200'}`}>Destinatarios</button>
              <button onClick={() => handleSelect('attachments_links', null, emailData)} className={`w-full rounded-[20px] px-4 py-3 text-left text-sm font-black ${selectedItem?.id === 'attachments_links' ? isDark ? 'bg-amber-500/15 text-amber-200 border border-amber-500/20' : 'bg-amber-50 text-amber-700 border border-amber-200' : isDark ? 'bg-slate-950 text-slate-300 border border-slate-800' : 'bg-slate-50 text-slate-700 border border-slate-200'}`}>Adjuntos y enlaces</button>
              <button onClick={() => handleSelect('netiquette_calls', null, emailData)} className={`w-full rounded-[20px] px-4 py-3 text-left text-sm font-black ${selectedItem?.id === 'netiquette_calls' ? isDark ? 'bg-emerald-500/15 text-emerald-200 border border-emerald-500/20' : 'bg-emerald-50 text-emerald-700 border border-emerald-200' : isDark ? 'bg-slate-950 text-slate-300 border border-slate-800' : 'bg-slate-50 text-slate-700 border border-slate-200'}`}>Netiqueta</button>
            </aside>

            <div className="p-4 sm:p-5 space-y-4">
              <div className={`rounded-[24px] border p-4 ${isDark ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'}`}>
                <div className="flex flex-wrap gap-2">
                  {['para', 'cc', 'cco'].map((key) => (
                    <button key={key} onClick={() => { setEmailRecipientView(key); handleSelect('cc_bcc', null, emailData); }} className={`rounded-full px-3 py-2 text-xs font-black uppercase tracking-widest ${emailRecipientView === key ? isDark ? 'bg-white text-slate-950' : 'bg-slate-900 text-white' : isDark ? 'bg-slate-950 text-slate-400 border border-slate-800' : 'bg-slate-50 text-slate-500 border border-slate-200'}`}>{key.toUpperCase()}</button>
                  ))}
                </div>
                <div className="mt-4 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-4">
                  <button onClick={() => handleSelect('send_reply', null, emailData)} className={`rounded-[22px] border p-4 text-left ${selectedItem?.id === 'send_reply' ? isDark ? 'border-sky-500/20 bg-sky-500/10 text-sky-100' : 'border-sky-200 bg-sky-50 text-sky-800' : isDark ? 'border-slate-800 bg-slate-950 text-slate-300' : 'border-slate-200 bg-slate-50 text-slate-700'}`}>
                    <p className="text-xs font-black uppercase tracking-[0.24em]">Asunto</p>
                    <p className="mt-2 text-sm font-black">Solicitud de informacion sobre el curso</p>
                    <p className="mt-3 text-sm leading-relaxed">Hola, adjunto el documento y respondo al hilo con contexto claro para que la otra persona entienda rapido la accion esperada.</p>
                  </button>
                  <button onClick={() => handleSelect('attachments_links', null, emailData)} className={`rounded-[22px] border px-4 py-4 text-left ${selectedItem?.id === 'attachments_links' ? isDark ? 'border-amber-500/20 bg-amber-500/10 text-amber-100' : 'border-amber-200 bg-amber-50 text-amber-800' : isDark ? 'border-slate-800 bg-slate-950 text-slate-300' : 'border-slate-200 bg-slate-50 text-slate-700'}`}>
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
        <section className={`rounded-[32px] border p-5 sm:p-6 ${isDark ? 'border-slate-800 bg-slate-900/90' : 'border-slate-200 bg-white'}`}>
          <div className="flex items-center justify-between gap-4 mb-5">
            <div><p className={`text-[11px] font-black uppercase tracking-[0.24em] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Maqueta de bandeja</p><h3 className={`mt-2 text-xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Leer la bandeja con contexto</h3></div>
            <button onClick={() => handleSelect('inbox_security', null, emailData)} className={`rounded-full border px-3 py-2 text-xs font-black uppercase tracking-widest ${isDark ? 'border-slate-700 text-slate-300 hover:bg-slate-800' : 'border-slate-300 text-slate-600 hover:bg-slate-50'}`}>Ver ficha</button>
          </div>
          <div className={`rounded-[28px] border overflow-hidden ${isDark ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-slate-50'}`}>{emailInboxMock.map((mail) => <article key={mail.subject} className={`px-4 py-4 border-b last:border-b-0 ${isDark ? 'border-slate-800' : 'border-slate-200'}`}><div className="flex items-start justify-between gap-4"><div><p className={`text-sm font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>{mail.from}</p><p className={`mt-1 text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{mail.subject}</p></div><span className={`rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-widest ${mail.tag === 'Seguro' ? isDark ? 'bg-emerald-500/15 text-emerald-200' : 'bg-emerald-100 text-emerald-700' : isDark ? 'bg-red-500/15 text-red-200' : 'bg-red-100 text-red-700'}`}>{mail.tag}</span></div></article>)}</div>
        </section>

        <section className={`rounded-[32px] border p-5 sm:p-6 ${isDark ? 'border-slate-800 bg-slate-900/90' : 'border-slate-200 bg-white'}`}>
          <div className="flex items-center justify-between gap-4 mb-6">
            <div><p className={`text-[11px] font-black uppercase tracking-[0.24em] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Para / CC / CCO</p><h3 className={`mt-2 text-xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Quien debe verlo y quien debe actuar</h3></div>
            <button onClick={() => handleSelect('cc_bcc', null, emailData)} className={`rounded-full border px-3 py-2 text-xs font-black uppercase tracking-widest ${isDark ? 'border-slate-700 text-slate-300 hover:bg-slate-800' : 'border-slate-300 text-slate-600 hover:bg-slate-50'}`}>Ver ficha</button>
          </div>
          <div className={`inline-flex rounded-full border p-1 ${isDark ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-slate-50'}`}>{Object.entries(emailRecipientCases).map(([key]) => <button key={key} onClick={() => setEmailRecipientView(key)} className={`rounded-full px-4 py-2 text-sm font-black ${emailRecipientView === key ? 'bg-white text-slate-950 shadow-sm' : isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}>{key.toUpperCase()}</button>)}</div>
          <div className={`mt-5 rounded-[28px] border p-5 ${isDark ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-slate-50'}`}><p className={`text-lg font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>{emailRecipientView.toUpperCase()}</p><p className={`mt-3 text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{emailRecipientCases[emailRecipientView]}</p></div>
        </section>
      </div>

      <div className={`grid grid-cols-1 xl:grid-cols-[1fr_1fr] gap-6 ${selectedItem?.id === 'attachments_links' || selectedItem?.id === 'netiquette_calls' || selectedItem?.id === 'send_reply' ? '' : 'hidden'}`}>
        <section className={`${selectedItem?.id === 'send_reply' ? '' : 'hidden'} rounded-[32px] border p-5 sm:p-6 ${isDark ? 'border-slate-800 bg-slate-900/90' : 'border-slate-200 bg-white'}`}>
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

        <section className={`rounded-[32px] border p-5 sm:p-6 ${isDark ? 'border-slate-800 bg-slate-900/90' : 'border-slate-200 bg-white'}`}>
          <div className="flex items-center justify-between gap-4 mb-5">
            <div><p className={`text-[11px] font-black uppercase tracking-[0.24em] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Adjuntos y enlaces</p><h3 className={`mt-2 text-xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Enviar bien un documento</h3></div>
            <button onClick={() => handleSelect('attachments_links', null, emailData)} className={`rounded-full border px-3 py-2 text-xs font-black uppercase tracking-widest ${isDark ? 'border-slate-700 text-slate-300 hover:bg-slate-800' : 'border-slate-300 text-slate-600 hover:bg-slate-50'}`}>Ver ficha</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <article className={`rounded-[26px] border p-5 ${isDark ? 'border-emerald-500/20 bg-emerald-500/10' : 'border-emerald-200 bg-emerald-50'}`}><p className={`text-sm font-black uppercase tracking-widest ${isDark ? 'text-emerald-300' : 'text-emerald-700'}`}>Correcto</p><p className={`mt-4 text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Adjunto nombrado como `CV_AnaLopez_2026.pdf` y mensaje que explica claramente lo enviado.</p></article>
            <article className={`rounded-[26px] border p-5 ${isDark ? 'border-amber-500/20 bg-amber-500/10' : 'border-amber-200 bg-amber-50'}`}><p className={`text-sm font-black uppercase tracking-widest ${isDark ? 'text-amber-300' : 'text-amber-700'}`}>Error frecuente</p><p className={`mt-4 text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Archivo llamado `documento-final-bueno-ahora-si.pdf` sin contexto ni explicacion en el correo.</p></article>
          </div>
        </section>

        <section className={`rounded-[32px] border p-5 sm:p-6 ${isDark ? 'border-slate-800 bg-slate-900/90' : 'border-slate-200 bg-white'}`}>
          <div className="flex items-center justify-between gap-4 mb-5">
            <div><p className={`text-[11px] font-black uppercase tracking-[0.24em] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Tono y netiqueta</p><h3 className={`mt-2 text-xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Correo formal vs descuidado</h3></div>
            <button onClick={() => handleSelect('netiquette_calls', null, emailData)} className={`rounded-full border px-3 py-2 text-xs font-black uppercase tracking-widest ${isDark ? 'border-slate-700 text-slate-300 hover:bg-slate-800' : 'border-slate-300 text-slate-600 hover:bg-slate-50'}`}>Ver ficha</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <article className={`rounded-[26px] border p-5 ${isDark ? 'border-emerald-500/20 bg-slate-950' : 'border-emerald-200 bg-slate-50'}`}><p className={`text-sm font-black uppercase tracking-widest ${isDark ? 'text-emerald-300' : 'text-emerald-700'}`}>Bien planteado</p><p className={`mt-4 text-sm font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Asunto: {emailEtiquetteExamples.good.subject}</p><p className={`mt-3 text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{emailEtiquetteExamples.good.body}</p></article>
            <article className={`rounded-[26px] border p-5 ${isDark ? 'border-amber-500/20 bg-slate-950' : 'border-amber-200 bg-slate-50'}`}><p className={`text-sm font-black uppercase tracking-widest ${isDark ? 'text-amber-300' : 'text-amber-700'}`}>Mejorable</p><p className={`mt-4 text-sm font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Asunto: {emailEtiquetteExamples.bad.subject}</p><p className={`mt-3 text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{emailEtiquetteExamples.bad.body}</p></article>
          </div>
        </section>
      </div>

      <section className={`${emailData[selectedItem?.id] ? '' : 'hidden'} rounded-[32px] border p-5 sm:p-6 ${isDark ? 'border-slate-800 bg-slate-900/90' : 'border-slate-200 bg-white'}`}>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
          <div><p className={`text-[11px] font-black uppercase tracking-[0.24em] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Mini quiz</p><h3 className={`mt-2 text-xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Elige la casilla correcta</h3></div>
          <button onClick={() => setEmailQuizSelections({})} className={`rounded-full border px-3 py-2 text-xs font-black uppercase tracking-widest ${isDark ? 'border-slate-700 text-slate-300 hover:bg-slate-800' : 'border-slate-300 text-slate-600 hover:bg-slate-50'}`}>Reiniciar</button>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">{emailQuizItems.map((item) => { const selected = emailQuizSelections[item.id]; const isCorrect = selected === item.answer; return <article key={item.id} className={`rounded-[26px] border p-5 ${isDark ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-slate-50'}`}><p className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.prompt}</p><div className="grid grid-cols-3 gap-2 mt-4">{['para', 'cc', 'cco'].map((option) => <button key={option} onClick={() => handleEmailQuizSelect(item.id, option)} className={`rounded-2xl px-3 py-3 text-sm font-black ${selected === option ? option === item.answer ? 'bg-emerald-500 text-white' : 'bg-red-500 text-white' : isDark ? 'bg-slate-900 text-slate-300 hover:bg-slate-800' : 'bg-white text-slate-600 hover:bg-slate-100'}`}>{option.toUpperCase()}</button>)}</div>{selected && <div className={`mt-4 rounded-2xl border p-4 ${isCorrect ? isDark ? 'border-emerald-500/25 bg-emerald-500/10' : 'border-emerald-200 bg-emerald-50' : isDark ? 'border-amber-500/25 bg-amber-500/10' : 'border-amber-200 bg-amber-50'}`}><p className={`text-sm font-black uppercase tracking-widest ${isCorrect ? isDark ? 'text-emerald-300' : 'text-emerald-700' : isDark ? 'text-amber-300' : 'text-amber-700'}`}>{isCorrect ? 'Correcto' : 'Revisa la idea'}</p><p className={`mt-2 text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{item.explanation}</p></div>}</article>; })}</div>
      </section>
    </div>
  );

  const renderOfficeTab = () => (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500">
      <div className={`rounded-[32px] border p-5 sm:p-6 md:p-8 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-[0_22px_60px_rgba(15,23,42,0.12)]'}`}>
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-8">
          <div className="max-w-3xl">
            <p className={`text-[11px] font-black uppercase tracking-[0.25em] ${isDark ? 'text-slate-500' : 'text-teal-600/70'}`}>Ofimatica y productividad</p>
            <h2 className={`mt-3 text-2xl sm:text-3xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Elegir bien la herramienta</h2>
            <p className={`mt-4 text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Redactar, calcular, presentar, exportar y colaborar son tareas distintas. Este bloque ayuda a decidir con criterio y trabajar mejor.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full lg:w-auto">{[['Redactar', 'Textos y CV'], ['Calcular', 'Tablas y cifras'], ['Compartir', 'PDF y colaboracion']].map(([label, value]) => <div key={label} className={`rounded-2xl border px-4 py-3 ${isDark ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-slate-50'}`}><p className={`text-[10px] font-black uppercase tracking-[0.24em] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{label}</p><p className={`mt-2 text-sm font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>{value}</p></div>)}</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">
          <InteractiveButton id="text_docs" dataSet={officeData} extraClass="min-h-[108px]" selectedItem={selectedItem} onSelect={handleSelect} colorMap={colorMap} isDark={isDark} />
          <InteractiveButton id="spreadsheets" dataSet={officeData} extraClass="min-h-[108px]" selectedItem={selectedItem} onSelect={handleSelect} colorMap={colorMap} isDark={isDark} />
          <InteractiveButton id="presentations_tools" dataSet={officeData} extraClass="min-h-[108px]" selectedItem={selectedItem} onSelect={handleSelect} colorMap={colorMap} isDark={isDark} />
          <InteractiveButton id="pdf_export" dataSet={officeData} extraClass="min-h-[108px]" selectedItem={selectedItem} onSelect={handleSelect} colorMap={colorMap} isDark={isDark} />
          <InteractiveButton id="collaboration_templates" dataSet={officeData} extraClass="min-h-[108px]" selectedItem={selectedItem} onSelect={handleSelect} colorMap={colorMap} isDark={isDark} />
        </div>
      </div>

      {!officeData[selectedItem?.id] && (
        <div className={`rounded-[32px] border p-6 sm:p-7 ${isDark ? 'border-slate-800 bg-slate-900/90' : 'border-slate-200 bg-white'}`}>
          <p className={`text-[11px] font-black uppercase tracking-[0.24em] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Tablero interactivo</p>
          <h3 className={`mt-3 text-xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Elige una herramienta para abrir su zona de trabajo</h3>
          <p className={`mt-3 text-sm leading-relaxed max-w-3xl ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Las comparativas, flujos y ejercicios quedan ocultos hasta que abras una ficha concreta. Asi el bloque se siente mas ligero y mas facil de recorrer.</p>
        </div>
      )}

      <div className={`grid grid-cols-1 xl:grid-cols-[0.8fr_1.2fr] gap-6 ${officeData[selectedItem?.id] ? '' : 'hidden'}`}>
        <section className={`rounded-[32px] border p-5 sm:p-6 ${isDark ? 'border-slate-800 bg-slate-900/90' : 'border-slate-200 bg-white'}`}>
          <div><p className={`text-[11px] font-black uppercase tracking-[0.24em] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Selector de tarea</p><h3 className={`mt-2 text-xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>¿Que herramienta usarias?</h3></div>
          <div className="grid grid-cols-1 gap-3 mt-5">{[['cv', 'Preparar un CV'], ['budget', 'Hacer un presupuesto'], ['pitch', 'Exponer un proyecto']].map(([key, label]) => <button key={key} onClick={() => setOfficeTaskView(key)} className={`rounded-[24px] border px-4 py-4 text-left ${officeTaskView === key ? 'bg-white text-slate-950 shadow-sm' : isDark ? 'border-slate-800 bg-slate-950 text-slate-300 hover:bg-slate-800' : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-white'}`}><p className="font-black">{label}</p></button>)}</div>
          <div className={`mt-5 rounded-[26px] border p-5 ${isDark ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-slate-50'}`}><p className={`text-sm font-black uppercase tracking-widest ${isDark ? 'text-teal-300' : 'text-teal-700'}`}>Respuesta sugerida</p><p className={`mt-4 text-lg font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>{officeTaskSuggestions[officeTaskView].tool}</p><p className={`mt-2 text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{officeTaskSuggestions[officeTaskView].why}</p></div>
        </section>

        <section className={`rounded-[32px] border p-5 sm:p-6 ${isDark ? 'border-slate-800 bg-slate-900/90' : 'border-slate-200 bg-white'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div>
              <p className={`text-[11px] font-black uppercase tracking-[0.24em] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Procesadores de texto</p>
              <div className="grid grid-cols-1 gap-3 mt-4">{officeComparisonSets.docs.map((tool) => <article key={tool.name} className={`rounded-[24px] border p-4 ${isDark ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-slate-50'}`}><div className="flex items-center justify-between gap-3"><p className={`font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>{tool.name}</p><span className={`rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-widest ${tool.type === 'Cerrado' ? isDark ? 'bg-indigo-500/15 text-indigo-200' : 'bg-indigo-100 text-indigo-700' : tool.type === 'Abierto' ? isDark ? 'bg-emerald-500/15 text-emerald-200' : 'bg-emerald-100 text-emerald-700' : isDark ? 'bg-sky-500/15 text-sky-200' : 'bg-sky-100 text-sky-700'}`}>{tool.type}</span></div><p className={`mt-2 text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{tool.note}</p></article>)}</div>
            </div>
            <div>
              <p className={`text-[11px] font-black uppercase tracking-[0.24em] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Hojas de calculo</p>
              <div className="grid grid-cols-1 gap-3 mt-4">{officeComparisonSets.sheets.map((tool) => <article key={tool.name} className={`rounded-[24px] border p-4 ${isDark ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-slate-50'}`}><div className="flex items-center justify-between gap-3"><p className={`font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>{tool.name}</p><span className={`rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-widest ${tool.type === 'Cerrado' ? isDark ? 'bg-indigo-500/15 text-indigo-200' : 'bg-indigo-100 text-indigo-700' : tool.type === 'Abierto' ? isDark ? 'bg-emerald-500/15 text-emerald-200' : 'bg-emerald-100 text-emerald-700' : isDark ? 'bg-sky-500/15 text-sky-200' : 'bg-sky-100 text-sky-700'}`}>{tool.type}</span></div><p className={`mt-2 text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{tool.note}</p></article>)}</div>
            </div>
          </div>
        </section>
      </div>

      <section className={`${officeData[selectedItem?.id] ? '' : 'hidden'} rounded-[32px] border p-5 sm:p-6 ${isDark ? 'border-slate-800 bg-slate-900/90' : 'border-slate-200 bg-white'}`}>
        <div className="grid grid-cols-1 xl:grid-cols-[0.95fr_1.05fr] gap-6">
          <div>
            <p className={`text-[11px] font-black uppercase tracking-[0.24em] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Flujo de trabajo</p>
            <h3 className={`mt-2 text-xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Crear, guardar, exportar y compartir</h3>
            <div className="space-y-3 mt-5">{[['Crear', 'Redactas, calculas o diseñas el contenido en formato editable.'], ['Guardar', 'Mantienes una version de trabajo con nombre claro y ordenada.'], ['Exportar', 'Generas PDF u otro formato final si ya no debe cambiarse.'], ['Compartir', 'Enlazas o adjuntas segun si el documento sigue vivo o ya esta cerrado.']].map(([step, text], index) => <div key={step} className="flex items-start gap-3"><div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-black ${isDark ? 'bg-slate-950 text-teal-300' : 'bg-teal-100 text-teal-700'}`}>{index + 1}</div><div><p className={`font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>{step}</p><p className={`mt-1 text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{text}</p></div></div>)}</div>
          </div>
          <div>
            <div className="flex items-center justify-between gap-4 mb-5"><div><p className={`text-[11px] font-black uppercase tracking-[0.24em] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Mini quiz</p><h3 className={`mt-2 text-xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Elige el programa correcto</h3></div><button onClick={() => setOfficeQuizSelections({})} className={`rounded-full border px-3 py-2 text-xs font-black uppercase tracking-widest ${isDark ? 'border-slate-700 text-slate-300 hover:bg-slate-800' : 'border-slate-300 text-slate-600 hover:bg-slate-50'}`}>Reiniciar</button></div>
            <div className="grid grid-cols-1 gap-4">{officeQuizItems.map((item) => { const selected = officeQuizSelections[item.id]; const isCorrect = selected === item.answer; return <article key={item.id} className={`rounded-[26px] border p-5 ${isDark ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-slate-50'}`}><p className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.prompt}</p><div className="grid grid-cols-4 gap-2 mt-4">{[['text_docs', 'Texto'], ['spreadsheets', 'Calculo'], ['presentations_tools', 'Slides'], ['pdf_export', 'PDF']].map(([key, label]) => <button key={key} onClick={() => handleOfficeQuizSelect(item.id, key)} className={`rounded-2xl px-3 py-3 text-sm font-black ${selected === key ? key === item.answer ? 'bg-emerald-500 text-white' : 'bg-red-500 text-white' : isDark ? 'bg-slate-900 text-slate-300 hover:bg-slate-800' : 'bg-white text-slate-600 hover:bg-slate-100'}`}>{label}</button>)}</div>{selected && <div className={`mt-4 rounded-2xl border p-4 ${isCorrect ? isDark ? 'border-emerald-500/25 bg-emerald-500/10' : 'border-emerald-200 bg-emerald-50' : isDark ? 'border-amber-500/25 bg-amber-500/10' : 'border-amber-200 bg-amber-50'}`}><p className={`text-sm font-black uppercase tracking-widest ${isCorrect ? isDark ? 'text-emerald-300' : 'text-emerald-700' : isDark ? 'text-amber-300' : 'text-amber-700'}`}>{isCorrect ? 'Correcto' : 'Revisa la decision'}</p><p className={`mt-2 text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{item.explanation}</p></div>}</article>; })}</div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderSoftwareTab = () => (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500">
      <div className={`rounded-[32px] border p-5 sm:p-6 md:p-8 ${
        isDark ? 'bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/40 border-slate-800' : 'bg-white border-slate-200 shadow-[0_22px_60px_rgba(15,23,42,0.12)]'
      }`}>
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-8">
          <div className="max-w-3xl">
            <p className={`text-[11px] font-black uppercase tracking-[0.25em] ${isDark ? 'text-slate-500' : 'text-slate-600/70'}`}>Base tecnologica</p>
            <h2 className={`mt-3 text-2xl sm:text-3xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Software por capas</h2>
            <p className={`mt-4 text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Diferenciamos el sistema operativo, los drivers y las aplicaciones para que el usuario entienda mejor como funciona el ordenador y donde mirar cuando aparece un problema.
            </p>
          </div>
          <div className={`grid grid-cols-1 sm:grid-cols-3 gap-3 w-full lg:w-auto ${softwareData[selectedItem?.id] && selectedItem?.id !== 'software_stack' ? 'hidden' : ''}`}>
            <div className={`rounded-2xl border px-4 py-3 ${isDark ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-slate-50'}`}>
              <p className={`text-[10px] font-black uppercase tracking-[0.24em] ${isDark ? 'text-indigo-300/75' : 'text-slate-400'}`}>Sistema</p>
              <p className={`mt-2 text-sm font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Coordina el equipo</p>
            </div>
            <div className={`rounded-2xl border px-4 py-3 ${isDark ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-slate-50'}`}>
              <p className={`text-[10px] font-black uppercase tracking-[0.24em] ${isDark ? 'text-cyan-300/75' : 'text-slate-400'}`}>Drivers</p>
              <p className={`mt-2 text-sm font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Hablan con el hardware</p>
            </div>
            <div className={`rounded-2xl border px-4 py-3 ${isDark ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-slate-50'}`}>
              <p className={`text-[10px] font-black uppercase tracking-[0.24em] ${isDark ? 'text-emerald-300/75' : 'text-slate-400'}`}>Apps</p>
              <p className={`mt-2 text-sm font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Resuelven tareas</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          <InteractiveButton id="operating_systems" dataSet={softwareData} extraClass="min-h-[112px]" selectedItem={selectedItem} onSelect={handleSelect} colorMap={colorMap} isDark={isDark} />
          <InteractiveButton id="drivers" dataSet={softwareData} extraClass="min-h-[112px]" selectedItem={selectedItem} onSelect={handleSelect} colorMap={colorMap} isDark={isDark} />
          <InteractiveButton id="applications" dataSet={softwareData} extraClass="min-h-[112px]" selectedItem={selectedItem} onSelect={handleSelect} colorMap={colorMap} isDark={isDark} />
          <InteractiveButton id="software_stack" dataSet={softwareData} extraClass="min-h-[112px]" selectedItem={selectedItem} onSelect={handleSelect} colorMap={colorMap} isDark={isDark} />
        </div>
      </div>

      {!softwareData[selectedItem?.id] && (
        <div className={`rounded-[32px] border p-6 sm:p-7 ${isDark ? 'border-slate-800 bg-slate-900/90' : 'border-slate-200 bg-white'}`}>
          <p className={`text-[11px] font-black uppercase tracking-[0.24em] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Tablero interactivo</p>
          <h3 className={`mt-3 text-xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Selecciona una capa para ver solo su explicacion visual</h3>
          <p className={`mt-3 text-sm leading-relaxed max-w-3xl ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>La zona de sistemas, drivers, comparativas y ejercicios aparece solo cuando abres una ficha concreta. Asi la lectura es mas limpia y mas guiada.</p>
        </div>
      )}

      <div className={`grid grid-cols-1 lg:grid-cols-3 gap-4 ${selectedItem?.id === 'software_stack' ? '' : 'hidden'}`}>
        {[
          ['01', 'Sistema operativo', 'Es la base que arranca, administra recursos y hace utilizable el hardware.'],
          ['02', 'Drivers', 'Permiten al sistema entender impresoras, audio, red, pantalla o perifericos concretos.'],
          ['03', 'Aplicaciones', 'Son las herramientas concretas para escribir, navegar, editar, comunicar o aprender.'],
        ].map(([step, title, text]) => (
          <div key={step} className={`rounded-[28px] border p-5 ${isDark ? 'border-slate-800 bg-slate-900/90' : 'border-slate-200 bg-white'}`}>
            <span className={`inline-flex rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-[0.24em] ${isDark ? 'bg-slate-950 text-slate-400 border border-slate-800' : 'bg-slate-100 text-slate-500 border border-slate-200'}`}>{step}</span>
            <h3 className={`${isDark ? 'text-white' : 'text-slate-900'} text-lg font-black mt-4`}>{title}</h3>
            <p className={`mt-3 text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{text}</p>
          </div>
        ))}
      </div>

      <div className={`grid grid-cols-1 xl:grid-cols-[1.1fr_0.9fr] gap-6 ${selectedItem?.id === 'operating_systems' || selectedItem?.id === 'drivers' ? '' : 'hidden'}`}>
        <section className={`${selectedItem?.id === 'operating_systems' ? '' : 'hidden'} rounded-[32px] border p-5 sm:p-6 ${isDark ? 'border-indigo-500/20 bg-indigo-500/[0.08]' : 'border-slate-200 bg-white shadow-[0_22px_60px_rgba(15,23,42,0.08)]'}`}>
          <div className="flex items-center justify-between gap-4 mb-5">
            <div>
              <p className={`text-[11px] font-black uppercase tracking-[0.24em] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Exploracion visual</p>
              <h3 className={`mt-2 text-xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Sistemas operativos y sus ecosistemas</h3>
            </div>
            <button
              onClick={() => handleSelect('operating_systems', null, softwareData)}
              className={`rounded-full border px-3 py-2 text-xs font-black uppercase tracking-widest ${isDark ? 'border-slate-700 text-slate-300 hover:bg-slate-800' : 'border-slate-300 text-slate-600 hover:bg-slate-50'}`}
            >
              Ver ficha
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {softwareOsExamples.map((os) => (
              <button
                key={os.name}
                onClick={() => handleSelect('operating_systems', null, softwareData)}
                className={`rounded-[24px] border p-4 text-left transition-all duration-300 hover:-translate-y-1 ${isDark ? 'border-slate-800 bg-slate-950 hover:bg-slate-900 hover:border-slate-700' : 'border-slate-200 bg-slate-50 hover:bg-white hover:border-slate-300 shadow-[0_14px_34px_rgba(15,23,42,0.06)]'}`}
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${os.accent} flex items-center justify-center text-white text-lg font-black shadow-lg`}>
                  {os.logo === 'window' && <div className="grid grid-cols-2 gap-[2px]"><span className="block w-3 h-3 bg-white/95 rounded-[2px]"></span><span className="block w-3 h-3 bg-white/85 rounded-[2px]"></span><span className="block w-3 h-3 bg-white/85 rounded-[2px]"></span><span className="block w-3 h-3 bg-white/95 rounded-[2px]"></span></div>}
                  {os.logo === 'mac' && <div className="text-white text-sm font-black tracking-tight">mac</div>}
                  {os.logo === 'linux' && <div className="text-white text-sm font-black tracking-tight">Li</div>}
                  {os.logo === 'android' && <div className="text-white text-sm font-black tracking-tight">An</div>}
                  {os.logo === 'ios' && <div className="text-white text-sm font-black tracking-tight">iOS</div>}
                </div>
                <p className={`mt-4 text-lg font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>{os.name}</p>
                <p className={`mt-2 text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{os.subtitle}</p>
              </button>
            ))}
          </div>
        </section>

        <section className={`${selectedItem?.id === 'drivers' ? '' : 'hidden'} rounded-[32px] border p-5 sm:p-6 ${isDark ? 'border-cyan-500/20 bg-cyan-500/[0.07]' : 'border-slate-200 bg-white shadow-[0_22px_60px_rgba(15,23,42,0.08)]'}`}>
          <div className="flex items-center justify-between gap-4 mb-5">
            <div>
              <p className={`text-[11px] font-black uppercase tracking-[0.24em] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Conexion guiada</p>
              <h3 className={`mt-2 text-xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Como actua un driver en la practica</h3>
            </div>
            <button
              onClick={() => handleSelect('drivers', null, softwareData)}
              className={`rounded-full border px-3 py-2 text-xs font-black uppercase tracking-widest ${isDark ? 'border-slate-700 text-slate-300 hover:bg-slate-800' : 'border-slate-300 text-slate-600 hover:bg-slate-50'}`}
            >
              Ver ficha
            </button>
          </div>
          <div className="space-y-3">
            {softwareDriverFlow.map((step, index) => {
              const StepIcon = step.icon;
              return (
                <div key={step.label} className="flex items-center gap-3">
                  <div className={`flex-1 rounded-[22px] border p-4 ${isDark ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-slate-50'}`}>
                    <div className="flex items-center gap-3">
                      <div className={`rounded-xl p-2 ${isDark ? 'bg-slate-900 text-blue-300' : 'bg-blue-100 text-blue-700'}`}>
                        <StepIcon size={18} />
                      </div>
                      <div>
                        <p className={`text-sm font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>{step.label}</p>
                        <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{step.helper}</p>
                      </div>
                    </div>
                  </div>
                  {index < softwareDriverFlow.length - 1 && (
                    <div className={`shrink-0 rounded-full px-2 py-1 text-xs font-black ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>→</div>
                  )}
                </div>
              );
            })}
          </div>
          <div className={`mt-5 rounded-[24px] border p-4 ${isDark ? 'border-cyan-500/20 bg-cyan-500/10' : 'border-cyan-100 bg-cyan-50'}`}>
            <p className={`text-sm font-black uppercase tracking-widest ${isDark ? 'text-cyan-300' : 'text-cyan-800'}`}>Ejemplo real</p>
            <p className={`mt-3 text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              Quieres imprimir un PDF: la aplicacion abre el archivo, el sistema operativo organiza la tarea, el driver entiende la impresora y el hardware ejecuta la impresion.
            </p>
          </div>
        </section>
      </div>

      <section className={`${selectedItem?.id === 'applications' ? '' : 'hidden'} rounded-[32px] border p-5 sm:p-6 ${isDark ? 'border-emerald-500/20 bg-emerald-500/[0.07]' : 'border-slate-200 bg-white shadow-[0_22px_60px_rgba(15,23,42,0.08)]'}`}>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
          <div>
            <p className={`text-[11px] font-black uppercase tracking-[0.24em] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Comparativa interactiva</p>
            <h3 className={`mt-2 text-xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Aplicaciones: codigo cerrado vs codigo abierto</h3>
            <p className={`mt-2 text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Cambia de modelo para entender diferencias de licencia, mantenimiento y ejemplos de uso.
            </p>
          </div>
          <div className={`inline-flex rounded-full border p-1 ${isDark ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-slate-50'}`}>
            {Object.entries(softwareLicenseModels).map(([key, model]) => {
              const isActive = softwareLicenseView === key;
              return (
                <button
                  key={key}
                  onClick={() => {
                    setSoftwareLicenseView(key);
                    handleSelect('applications', null, softwareData);
                  }}
                  className={`rounded-full px-4 py-2 text-sm font-black transition-colors ${isActive ? isDark ? 'bg-slate-100 text-slate-950 shadow-sm' : 'bg-white text-slate-950 shadow-sm' : isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}
                >
                  {model.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[0.7fr_1.3fr] gap-5">
          <div className={`rounded-[28px] border p-5 ${isDark ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-slate-50'}`}>
            <p className={`text-sm font-black uppercase tracking-widest ${softwareLicenseView === 'closed' ? (isDark ? 'text-indigo-300' : 'text-indigo-700') : (isDark ? 'text-emerald-300' : 'text-emerald-700')}`}>
              {softwareLicenseModels[softwareLicenseView].label}
            </p>
            <p className={`mt-4 text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              {softwareLicenseModels[softwareLicenseView].summary}
            </p>
            <div className={`mt-5 rounded-2xl border p-4 ${isDark ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'}`}>
              <p className={`text-[11px] font-black uppercase tracking-[0.24em] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Comparacion rapida</p>
              <p className={`mt-3 text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                {softwareLicenseView === 'closed'
                  ? 'Suele ofrecer soporte comercial, marca conocida y funciones muy cerradas alrededor de una licencia.'
                  : 'Suele ofrecer flexibilidad, comunidad, personalizacion y aprendizaje a partir del codigo compartido.'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {softwareLicenseModels[softwareLicenseView].examples.map((example) => (
              <article key={example.name} className={`rounded-[26px] border p-5 transition-all duration-300 hover:-translate-y-1 ${isDark ? 'border-slate-800 bg-slate-950 hover:border-slate-700' : 'border-slate-200 bg-white hover:border-slate-300 shadow-[0_14px_34px_rgba(15,23,42,0.06)]'}`}>
                <div className={`inline-flex rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-widest ${
                  softwareLicenseView === 'closed'
                    ? isDark ? 'bg-indigo-500/15 text-indigo-200' : 'bg-indigo-100 text-indigo-700'
                    : isDark ? 'bg-emerald-500/15 text-emerald-200' : 'bg-emerald-100 text-emerald-700'
                }`}>
                  {softwareLicenseView === 'closed' ? 'Propietario' : 'Abierto'}
                </div>
                <div className={`mt-4 w-14 h-14 rounded-2xl flex items-center justify-center text-base font-black shadow-sm ${
                  softwareLicenseView === 'closed'
                    ? isDark ? 'bg-indigo-500/15 text-indigo-200' : 'bg-indigo-100 text-indigo-700'
                    : isDark ? 'bg-emerald-500/15 text-emerald-200' : 'bg-emerald-100 text-emerald-700'
                }`}>
                  {example.name.includes('Office') && 'O'}
                  {example.name.includes('Photoshop') && 'Ps'}
                  {example.name.includes('Windows') && 'W'}
                  {example.name.includes('LibreOffice') && 'L'}
                  {example.name.includes('GIMP') && 'G'}
                  {example.name.includes('Ubuntu') && 'U'}
                </div>
                <h4 className={`mt-4 text-lg font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>{example.name}</h4>
                <p className={`mt-3 text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{example.use}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${selectedItem?.id === 'software_stack' ? '' : 'hidden'} rounded-[32px] border p-5 sm:p-6 ${isDark ? 'border-fuchsia-500/20 bg-fuchsia-500/[0.07]' : 'border-slate-200 bg-white shadow-[0_22px_60px_rgba(15,23,42,0.08)]'}`}>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
          <div>
            <p className={`text-[11px] font-black uppercase tracking-[0.24em] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Mini ejercicio</p>
            <h3 className={`mt-2 text-xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>¿Sistema, driver o aplicacion?</h3>
            <p className={`mt-2 text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Clasifica cada ejemplo para comprobar si ya distingues bien las capas del software.
            </p>
          </div>
          <button
            onClick={() => setSoftwareQuizSelections({})}
            className={`rounded-full border px-3 py-2 text-xs font-black uppercase tracking-widest ${isDark ? 'border-slate-700 text-slate-300 hover:bg-slate-800' : 'border-slate-300 text-slate-600 hover:bg-slate-50'}`}
          >
            Reiniciar
          </button>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
          {softwareQuizItems.map((item) => {
            const selected = softwareQuizSelections[item.id];
            const isCorrect = selected === item.answer;
            return (
              <article key={item.id} className={`rounded-[26px] border p-5 ${isDark ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-slate-50 shadow-[0_14px_34px_rgba(15,23,42,0.05)]'}`}>
                <p className={`text-lg font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.label}</p>
                <div className="grid grid-cols-3 gap-2 mt-4">
                  {[
                    { key: 'system', label: 'Sistema' },
                    { key: 'driver', label: 'Driver' },
                    { key: 'app', label: 'App' },
                  ].map((option) => (
                    <button
                      key={option.key}
                      onClick={() => handleSoftwareQuizSelect(item.id, option.key)}
                      className={`rounded-2xl px-3 py-3 text-sm font-black transition-colors ${
                        selected === option.key
                          ? option.key === item.answer
                            ? 'bg-emerald-500 text-white'
                            : 'bg-red-500 text-white'
                          : isDark
                            ? 'bg-slate-900 text-slate-300 hover:bg-slate-800'
                            : 'bg-white text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
                {selected && (
                  <div className={`mt-4 rounded-2xl border p-4 ${
                    isCorrect
                      ? isDark ? 'border-emerald-500/25 bg-emerald-500/10' : 'border-emerald-200 bg-emerald-50'
                      : isDark ? 'border-amber-500/25 bg-amber-500/10' : 'border-amber-200 bg-amber-50'
                  }`}>
                    <p className={`text-sm font-black uppercase tracking-widest ${
                      isCorrect
                        ? isDark ? 'text-emerald-300' : 'text-emerald-700'
                        : isDark ? 'text-amber-300' : 'text-amber-700'
                    }`}>
                      {isCorrect ? 'Correcto' : 'Sigue probando'}
                    </p>
                    <p className={`mt-2 text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{item.explanation}</p>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );

  // PESTAÑA 5: INTELIGENCIA ARTIFICIAL Y LLMS (NUEVA)
  const renderAITab = () => (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500 h-full">
      <div className="bg-slate-900 rounded-3xl p-8 shadow-2xl border border-slate-800">
        <div className="flex items-center gap-3 mb-8 border-b border-slate-700 pb-4">
          <Bot className="text-emerald-400" size={32} />
          <div>
            <h2 className="text-2xl font-black text-white">Directorio de Inteligencia Artificial</h2>
            <p className="text-slate-400 mt-1 text-sm font-medium">Conoce las personalidades, fortalezas y debilidades de los principales Modelos de Lenguaje (LLMs).</p>
          </div>
        </div>

        {/* Categoría 1: Generalistas */}
        <div className="mb-10">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
            <Brain size={18} className="text-slate-500" /> 1. Los Gigantes Generalistas
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <InteractiveButton id="chatgpt" dataSet={aiData} extraClass="bg-slate-800 border-slate-700 text-slate-200" selectedItem={selectedItem} onSelect={handleSelect} colorMap={colorMap} isDark={isDark} />
            <InteractiveButton id="claude" dataSet={aiData} extraClass="bg-slate-800 border-slate-700 text-slate-200" selectedItem={selectedItem} onSelect={handleSelect} colorMap={colorMap} isDark={isDark} />
            <InteractiveButton id="gemini" dataSet={aiData} extraClass="bg-slate-800 border-slate-700 text-slate-200" selectedItem={selectedItem} onSelect={handleSelect} colorMap={colorMap} isDark={isDark} />
            <InteractiveButton id="copilot" dataSet={aiData} extraClass="bg-slate-800 border-slate-700 text-slate-200" selectedItem={selectedItem} onSelect={handleSelect} colorMap={colorMap} isDark={isDark} />
            <InteractiveButton id="grok" dataSet={aiData} extraClass="bg-slate-800 border-slate-700 text-slate-200" selectedItem={selectedItem} onSelect={handleSelect} colorMap={colorMap} isDark={isDark} />
          </div>
        </div>

        {/* Categoría 2: Investigación */}
        <div className="mb-10">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
            <Library size={18} className="text-slate-500" /> 2. Los Investigadores y Lectores
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <InteractiveButton id="perplexity" dataSet={aiData} extraClass="bg-slate-800 border-slate-700 text-slate-200 flex-row !justify-start gap-4" selectedItem={selectedItem} onSelect={handleSelect} colorMap={colorMap} isDark={isDark} />
            <InteractiveButton id="notebooklm" dataSet={aiData} extraClass="bg-slate-800 border-slate-700 text-slate-200 flex-row !justify-start gap-4" selectedItem={selectedItem} onSelect={handleSelect} colorMap={colorMap} isDark={isDark} />
            <InteractiveButton id="kimi" dataSet={aiData} extraClass="bg-slate-800 border-slate-700 text-slate-200 flex-row !justify-start gap-4" selectedItem={selectedItem} onSelect={handleSelect} colorMap={colorMap} isDark={isDark} />
          </div>
        </div>

        {/* Categoría 3: Agentes y Desarrollo */}
        <div>
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
            <Terminal size={18} className="text-slate-500" /> 3. Desarrolladores y Agentes Autónomos
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <InteractiveButton id="deepseek" dataSet={aiData} extraClass="bg-slate-800 border-slate-700 text-slate-200" selectedItem={selectedItem} onSelect={handleSelect} colorMap={colorMap} isDark={isDark} />
            <InteractiveButton id="lovable" dataSet={aiData} extraClass="bg-slate-800 border-slate-700 text-slate-200" selectedItem={selectedItem} onSelect={handleSelect} colorMap={colorMap} isDark={isDark} />
            <InteractiveButton id="gamma" dataSet={aiData} extraClass="bg-slate-800 border-slate-700 text-slate-200" selectedItem={selectedItem} onSelect={handleSelect} colorMap={colorMap} isDark={isDark} />
            <InteractiveButton id="manus" dataSet={aiData} extraClass="bg-slate-800 border-slate-700 text-slate-200" selectedItem={selectedItem} onSelect={handleSelect} colorMap={colorMap} isDark={isDark} />
          </div>
        </div>

        {/* Categoría 4: Multimedia y Generación (NUEVA) */}
        <div className="mt-10">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
            <ImagePlus size={18} className="text-slate-500" /> 4. Creadores Multimedia (Audio, Vídeo e Imagen)
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <InteractiveButton id="midjourney" dataSet={aiData} extraClass="bg-slate-800 border-slate-700 text-slate-200" selectedItem={selectedItem} onSelect={handleSelect} colorMap={colorMap} isDark={isDark} />
            <InteractiveButton id="suno" dataSet={aiData} extraClass="bg-slate-800 border-slate-700 text-slate-200" selectedItem={selectedItem} onSelect={handleSelect} colorMap={colorMap} isDark={isDark} />
            <InteractiveButton id="runway" dataSet={aiData} extraClass="bg-slate-800 border-slate-700 text-slate-200" selectedItem={selectedItem} onSelect={handleSelect} colorMap={colorMap} isDark={isDark} />
            <InteractiveButton id="elevenlabs" dataSet={aiData} extraClass="bg-slate-800 border-slate-700 text-slate-200" selectedItem={selectedItem} onSelect={handleSelect} colorMap={colorMap} isDark={isDark} />
          </div>
        </div>
        
      </div>
    </div>
  );

  const renderKeyboardTab = () => (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500 h-full">
      <div className={`rounded-[32px] border p-5 md:p-6 overflow-hidden relative ${
        isDark
          ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900 border-slate-800 shadow-[0_24px_80px_rgba(15,23,42,0.55)]'
          : 'bg-gradient-to-br from-[#eef1ff] via-[#dddff7] to-[#f5f2ff] border-white/70 shadow-[0_24px_80px_rgba(79,70,229,0.16)]'
      }`}>
        <div className={`absolute inset-0 ${
          isDark
            ? 'bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.12),transparent_30%)]'
            : 'bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.7),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(79,70,229,0.08),transparent_30%)]'
        }`}></div>
        <div className="relative z-10 space-y-6">
          <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-5">
            <div className="max-w-3xl">
              <p className={`text-[11px] font-black uppercase tracking-[0.25em] ${isDark ? 'text-slate-400' : 'text-indigo-500/70'}`}>Productividad Digital</p>
              <h2 className={`text-3xl md:text-4xl font-black tracking-tight mt-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Laboratorio de Teclado Virtual
              </h2>
              <p className={`mt-4 leading-relaxed text-sm md:text-base ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                Explora combinaciones utiles para estudiar, redactar y navegar. Selecciona una familia de atajos y el mapa se iluminara automaticamente.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className={`rounded-2xl border px-4 py-3 ${isDark ? 'bg-slate-950/70 border-slate-800' : 'bg-white/60 border-white/80'}`}>
                <p className={`text-[10px] font-black uppercase tracking-[0.2em] ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>Meta</p>
                <p className={`mt-2 text-sm font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Menos clics, mas fluidez</p>
              </div>
              <div className={`rounded-2xl border px-4 py-3 ${isDark ? 'bg-slate-950/70 border-slate-800' : 'bg-white/60 border-white/80'}`}>
                <p className={`text-[10px] font-black uppercase tracking-[0.2em] ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>Metodo</p>
                <p className={`mt-2 text-sm font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Practica guiada</p>
              </div>
            </div>
          </div>

          <div className={`rounded-[28px] border p-5 md:p-6 ${
            isDark ? 'bg-slate-950/84 border-slate-800' : 'bg-[#252b47] border-[#3d4267] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]'
          }`}>
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
              <div>
                <h3 className="text-white text-xl md:text-2xl font-black">Mapa de Teclas</h3>
                <p className="text-slate-400 text-sm mt-2">Se resaltan las teclas del bloque seleccionado y el teclado ocupa la parte central del recorrido.</p>
              </div>
              <div className="rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3 py-1 text-xs font-black uppercase tracking-widest text-indigo-200 w-fit">
                {selectedItem?.name || 'Selecciona un bloque'}
              </div>
            </div>
            <div className="space-y-2 overflow-x-auto overflow-y-hidden pb-2">
              {keyboardLayout.map((row, rowIndex) => (
                <div key={rowIndex} className="flex gap-1.5 sm:gap-2 min-w-[680px] sm:min-w-[780px] lg:min-w-[920px]">
                  {row.map((key) => (
                    <div key={`${rowIndex}-${key.label}`} className={key.wide}>
                      <KeyboardKey label={key.label} selectedKeys={selectedItem?.keys || []} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] gap-6">
        <div className={`rounded-[32px] border p-5 md:p-6 ${
          isDark ? 'bg-slate-900/86 border-slate-800' : 'bg-white/78 border-white/80 backdrop-blur-xl'
        }`}>
          <h3 className={`${isDark ? 'text-white' : 'text-slate-900'} text-lg font-black mb-4`}>Bloques de Aprendizaje</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-3">
            <InteractiveButton id="shortcut_basics" dataSet={keyboardData} extraClass="min-h-[92px]" selectedItem={selectedItem} onSelect={handleSelect} colorMap={colorMap} isDark={isDark} />
            <InteractiveButton id="navigation_flow" dataSet={keyboardData} extraClass="min-h-[92px]" selectedItem={selectedItem} onSelect={handleSelect} colorMap={colorMap} isDark={isDark} />
            <InteractiveButton id="editing_power" dataSet={keyboardData} extraClass="min-h-[92px]" selectedItem={selectedItem} onSelect={handleSelect} colorMap={colorMap} isDark={isDark} />
            <InteractiveButton id="browser_mastery" dataSet={keyboardData} extraClass="min-h-[92px]" selectedItem={selectedItem} onSelect={handleSelect} colorMap={colorMap} isDark={isDark} />
            <InteractiveButton id="system_control" dataSet={keyboardData} extraClass="min-h-[92px]" selectedItem={selectedItem} onSelect={handleSelect} colorMap={colorMap} isDark={isDark} />
          </div>
        </div>

        <div className={`rounded-[32px] border p-5 md:p-6 ${
        isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-[0_24px_60px_rgba(148,163,184,0.22)]'
      }`}>
        <div className="flex items-center justify-between gap-4 mb-5">
          <div>
            <h3 className={`${isDark ? 'text-white' : 'text-slate-900'} text-xl font-black`}>Combinaciones de Alto Impacto</h3>
            <p className={`mt-2 text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Una referencia rapida para practicar las acciones mas repetidas.</p>
          </div>
          <div className={`text-xs font-black uppercase tracking-[0.25em] px-3 py-2 rounded-full border ${
            isDark ? 'text-indigo-200 border-indigo-400/30 bg-indigo-500/10' : 'text-indigo-700 border-indigo-200 bg-indigo-50'
          }`}>
            Practica
          </div>
        </div>
        <div className="space-y-3">
          {(selectedItem?.shortcutList || keyboardData.shortcut_basics.shortcutList).slice(0, 5).map((shortcut) => (
            <article key={shortcut.combo} className={`rounded-2xl border p-4 ${
              isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}>
              <div className="flex items-center justify-between gap-3 mb-3">
                <span className={`inline-flex rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-widest ${
                  isDark ? 'bg-indigo-500/20 text-indigo-100' : 'bg-indigo-100 text-indigo-700'
                }`}>
                  {shortcut.combo}
                </span>
                <span className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-700'}`}>{shortcut.action}</span>
              </div>
              <p className={`leading-relaxed text-[14px] ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{shortcut.why}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
    </div>
  );

  return (
    <div className={`min-h-screen font-sans flex flex-col transition-colors duration-500 ${isDark ? 'bg-slate-950 text-slate-100' : 'bg-[#edf2ff] text-slate-800'}`}>
      <div className={`fixed inset-0 pointer-events-none ${isDark ? 'bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.18),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.12),transparent_22%)]' : 'bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.8),transparent_20%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.12),transparent_26%)]'}`}></div>
      <div className={`fixed inset-0 pointer-events-none ${isDark ? 'bg-slate-950/36' : 'bg-white/28 backdrop-blur-[2px]'}`}></div>
      <div className="relative flex flex-col">
      <header className={`fixed top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 md:top-5 md:left-6 md:right-6 z-40 transition-all duration-500`}>
        <div className={`max-w-[1600px] mx-auto transition-all duration-500 ${
          isScrolled
            ? isDark
              ? 'rounded-[24px] border border-slate-800 bg-slate-950/82 shadow-[0_28px_70px_rgba(15,23,42,0.32)] backdrop-blur-2xl'
              : 'rounded-[24px] border border-white/80 bg-slate-950/86 shadow-[0_28px_70px_rgba(15,23,42,0.22)] backdrop-blur-2xl'
            : 'rounded-[24px] border border-white/10 bg-slate-950/72 shadow-[0_14px_40px_rgba(15,23,42,0.18)] backdrop-blur-xl'
        }`}>
          <div className={`flex items-center justify-between gap-3 transition-all duration-500 ${isScrolled ? 'px-3 py-2.5 sm:px-4 md:px-5' : 'px-2 py-2 sm:px-3 md:px-4'}`}>
            <button onClick={() => handleTabChange('hardware')} className="flex items-center gap-3 group min-w-0 text-left">
              <div className="relative w-9 h-9 shrink-0">
                <div className="absolute inset-0 bg-blue-500 blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative w-full h-full flex items-center justify-center">
                  <svg width="36" height="36" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:scale-105 transition-transform duration-300">
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
              <div className="min-w-0">
                <p className={`text-lg font-black tracking-tight ${isDark || !isScrolled ? 'text-white' : 'text-slate-900'}`}>Digital Synapse</p>
                <p className={`hidden md:block text-[11px] uppercase tracking-[0.24em] font-black ${isDark || !isScrolled ? 'text-slate-400' : 'text-slate-500'}`}>
                  {activeTabMeta.title}
                </p>
              </div>
            </button>

            <nav className="hidden lg:flex items-center gap-1">
              {orderedSectionGroups.map(([group, tabs]) => {
                const isActiveGroup = activeTabMeta.group === group;
                return (
                  <button
                    key={group}
                    onClick={() => handleOpenGroupMenu(group)}
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
                      isActiveGroup
                        ? isDark || !isScrolled
                          ? 'text-white bg-white/8'
                          : 'text-white bg-white/10'
                        : isDark || !isScrolled
                          ? 'text-slate-300 hover:text-white hover:bg-white/5'
                          : 'text-slate-200 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{group}</span>
                    {tabs.length > 1 && <ChevronDown size={14} />}
                  </button>
                );
              })}
            </nav>

            <div className="ml-auto flex items-center gap-2 shrink-0">
              <button
                onClick={() => setTheme(isDark ? 'light' : 'dark')}
                className={`rounded-full border p-2.5 transition-colors ${
                  isDark || isScrolled ? 'border-white/10 bg-white/5 text-white hover:bg-white/10' : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                }`}
                aria-label={isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                onClick={() => setIsSectionMenuOpen((value) => !value)}
                className={`lg:hidden inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-black transition-colors ${
                  isDark || isScrolled ? 'border-white/10 bg-white/5 text-white hover:bg-white/10' : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span className="hidden sm:inline">Secciones</span>
                <span className={`rounded-full p-1 transition-transform ${isSectionMenuOpen ? 'rotate-180' : ''}`}>
                  <ChevronDown size={16} />
                </span>
              </button>
              <button
                onClick={handleStartModule}
                className="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-slate-950 text-sm font-bold hover:shadow-[0_0_30px_rgba(255,255,255,0.18)] transition-all duration-300 group"
              >
                Explorar aula
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {isSectionMenuOpen && (
            <div className={`border-t px-3 pb-3 pt-3 sm:px-4 sm:pb-4 ${
              isDark || isScrolled ? 'border-white/10' : 'border-slate-200/80'
            }`}>
              <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-3">
                {orderedSectionGroups.map(([group, tabs]) => (
                  <section
                    key={group}
                    className={`rounded-[24px] border p-4 ${
                      isDark || isScrolled
                        ? `border-white/10 bg-white/[0.04] ${expandedSectionGroup === group ? 'ring-1 ring-white/12' : ''}`
                        : `border-slate-200 bg-slate-50/90 ${expandedSectionGroup === group ? 'ring-1 ring-slate-300/70' : ''}`
                    }`}
                  >
                    <div className="mb-4 flex items-start justify-between gap-3">
                      <div>
                        <p className={`text-[10px] font-black uppercase tracking-[0.24em] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                          {group}
                        </p>
                        <p className={`mt-2 text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                          {sectionGroupMeta[group]?.summary}
                        </p>
                      </div>
                      <span className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.22em] ${
                        isDark ? 'bg-slate-900 text-slate-300 border border-slate-800' : 'bg-white text-slate-500 border border-slate-200'
                      }`}>
                        {tabs.length}
                      </span>
                    </div>
                    <div className="space-y-2">
                      {tabs.map((tab) => {
                        const Icon = tab.icon;
                        const isActive = activeTab === tab.id;

                        return (
                          <button
                            key={tab.id}
                            onClick={() => handleTabChange(tab.id)}
                            className={`w-full rounded-2xl border px-3 py-3 text-left transition-all ${
                              isActive
                                ? `${tab.activeClass.replace('scale-105', '').replace('z-10', '')} border-transparent`
                                : isDark
                                  ? 'border-slate-800 bg-slate-900 text-slate-200 hover:bg-slate-800'
                                  : 'border-slate-200 bg-white text-slate-700 hover:bg-white'
                            }`}
                          >
                            <div className="flex items-center justify-between gap-3">
                              <div className="flex items-center gap-3 min-w-0">
                                <div className={`rounded-xl p-2 ${isActive ? 'bg-white/15 text-white' : isDark ? 'bg-slate-950 text-slate-300' : 'bg-slate-100 text-slate-500'}`}>
                                  <Icon size={16} />
                                </div>
                                <div className="min-w-0">
                                  <p className={`text-[10px] font-black uppercase tracking-[0.24em] ${isActive ? 'text-white/75' : isDark ? 'text-slate-500' : 'text-slate-400'}`}>
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
                  </section>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* CABECERA Y NAVEGACIÓN PRINCIPAL */}
      <header className="mb-6 mt-[104px] sm:mt-[112px] md:mt-[124px] flex flex-col gap-4 max-w-[1600px] mx-auto w-full px-3 sm:px-4 md:px-6">
        <div className={`p-4 sm:p-5 md:p-6 rounded-[28px] sm:rounded-[32px] shadow-[0_20px_60px_rgba(15,23,42,0.12)] border flex flex-col lg:flex-row lg:items-end justify-between gap-5 md:gap-6 ${isDark ? 'bg-slate-900/92 border-slate-800' : 'bg-white/82 border-white/80 backdrop-blur-xl'}`}>
          <div>
            <span className={`text-[11px] font-black uppercase tracking-[0.24em] px-3 py-1.5 rounded-full mb-3 inline-block border ${isDark ? 'bg-slate-950 text-slate-300 border-slate-700' : 'bg-blue-100 text-blue-800 border-blue-200'}`}>Curso Completo e Interactivo</span>
            <h1 className={`text-2xl sm:text-3xl md:text-4xl font-black tracking-tight flex items-center gap-3 sm:gap-4 mt-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              <AppWindow className={isDark ? 'text-indigo-300' : 'text-blue-600'} size={36} />
              Aula de Competencias Digitales
            </h1>
            <p className={`mt-3 text-sm sm:text-base md:text-lg font-medium max-w-3xl leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-500'}`}>
              Aprende con una estructura mas clara, menos ruido visual y acceso rapido a cada modulo desde una navegacion superior fija.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 w-full lg:w-auto lg:min-w-[360px]">
            <div className={`rounded-2xl border p-4 ${isDark ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-slate-50'}`}>
              <p className={`text-xs uppercase tracking-widest font-black ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Modulo activo</p>
              <p className={`text-lg font-black mt-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{activeTabMeta.title}</p>
            </div>
            <div className={`rounded-2xl border p-4 ${isDark ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-slate-50'}`}>
              <p className={`text-xs uppercase tracking-widest font-black ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Temas</p>
              <p className={`text-lg font-black mt-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{itemCount}</p>
            </div>
            <div className={`rounded-2xl border p-4 col-span-2 md:col-span-1 ${isDark ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-slate-50'}`}>
              <p className={`text-xs uppercase tracking-widest font-black ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Foco</p>
              <p className={`text-lg font-black mt-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{selectedItem ? selectedItem.name : 'Sin seleccionar'}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[1.15fr_0.85fr] gap-4">
          <div className={`rounded-[28px] sm:rounded-[32px] border p-5 sm:p-6 relative overflow-hidden ${isDark ? 'border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 text-white' : 'border-white/80 bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 text-white shadow-[0_22px_60px_rgba(15,23,42,0.18)]'}`}>
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08),transparent_38%,rgba(255,255,255,0.04))]"></div>
            <div className="relative flex flex-col lg:flex-row lg:items-end justify-between gap-5">
              <div className="max-w-2xl">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-300 font-black">Experiencia guiada</p>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black mt-3">{activeTabMeta.title}</h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-3">{activeTabMeta.description}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleStartModule}
                  className={`rounded-2xl px-5 py-3 font-black transition-colors ${isDark ? 'bg-white text-slate-950 hover:bg-slate-200' : 'bg-white text-slate-900 hover:bg-slate-100'}`}
                >
                  Empezar recorrido
                </button>
                <button
                  onClick={handleClearSelection}
                  className="rounded-2xl border border-white/15 bg-white/5 text-white px-5 py-3 font-black hover:bg-white/10 transition-colors"
                >
                  Reiniciar foco
                </button>
              </div>
            </div>
          </div>

        </div>

        <div className="hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <p className={`text-xs uppercase tracking-[0.25em] font-black ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Mapa del Aula</p>
              <h3 className={`mt-2 text-lg sm:text-xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Menu desplegable por clusters</h3>
              <p className={`mt-2 text-sm leading-relaxed max-w-2xl ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                El menu se abre solo cuando hace falta y organiza los modulos por bloques de aprendizaje para no cargar la interfaz principal.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:w-auto w-full">
              <div className={`rounded-2xl border px-4 py-3 ${isDark ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-slate-50'}`}>
                <p className={`text-[10px] font-black uppercase tracking-[0.24em] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Secciones</p>
                <p className={`mt-2 text-sm font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>{tabConfig.length}</p>
              </div>
              <div className={`rounded-2xl border px-4 py-3 ${isDark ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-slate-50'}`}>
                <p className={`text-[10px] font-black uppercase tracking-[0.24em] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Cluster</p>
                <p className={`mt-2 text-sm font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>{activeTabMeta.group}</p>
              </div>
            </div>
          </div>

          <div className="mt-5 relative">
            <button
              onClick={() => setIsSectionMenuOpen((value) => !value)}
              className={`w-full rounded-[24px] border px-4 py-4 sm:px-5 sm:py-5 text-left transition-colors ${
                isDark
                  ? 'border-slate-800 bg-slate-950 hover:bg-slate-900'
                  : 'border-slate-200 bg-slate-50 hover:bg-white'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className={`text-[11px] font-black uppercase tracking-[0.24em] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                    Navegacion del aula
                  </p>
                  <h4 className={`mt-2 text-base sm:text-lg font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {`Modulo ${activeTabMeta.step} · ${activeTabMeta.title}`}
                  </h4>
                  <p className={`mt-2 text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    {sectionGroupMeta[activeTabMeta.group]?.summary}
                  </p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className={`hidden sm:inline-flex rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-widest ${
                    isDark ? 'bg-slate-900 text-slate-300' : 'bg-white text-slate-500 border border-slate-200'
                  }`}>
                    {activeTabMeta.group}
                  </span>
                  <span className={`rounded-full p-2 transition-transform ${isSectionMenuOpen ? 'rotate-180' : ''} ${
                    isDark ? 'bg-slate-900 text-slate-300' : 'bg-white text-slate-500 border border-slate-200'
                  }`}>
                    <ChevronDown size={18} />
                  </span>
                </div>
              </div>
            </button>

            {isSectionMenuOpen && (
              <div className={`mt-3 rounded-[24px] border p-3 sm:p-4 shadow-[0_24px_60px_rgba(15,23,42,0.18)] ${
                isDark ? 'border-slate-800 bg-slate-950/98' : 'border-slate-200 bg-white/98 backdrop-blur-xl'
              }`}>
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
                                {tabs.length} modulos
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
            )}
          </div>
        </div>
      </header>

      {/* ÁREA PRINCIPAL DIVIDIDA */}
      <div className="flex flex-col xl:flex-row gap-6 flex-grow max-w-[1600px] mx-auto w-full px-3 sm:px-4 md:px-6">
        
        {/* ZONA IZQUIERDA: Interactuador Visual (60%) */}
        <div className={`w-full flex flex-col gap-6 min-w-0 transition-all duration-300 ${hasActiveDetail ? 'xl:w-[64%]' : 'xl:w-full'}`}>
          {activeTab === 'hardware' && renderHardwareTab()}
          {activeTab === 'peripherals' && renderPeripheralsTab()}
          {activeTab === 'cloud' && renderCloudTab()}
          {activeTab === 'software' && renderSoftwareTab()}
          {activeTab === 'internet' && renderInternetTab()}
          {activeTab === 'security' && renderSecurityTab()}
          {activeTab === 'email' && renderEmailTab()}
          {activeTab === 'files' && renderFilesTab()}
          {activeTab === 'keyboard' && renderKeyboardTab()}
          {activeTab === 'office' && renderOfficeTab()}
          {activeTab === 'ai' && renderAITab()}
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

            <p className={`max-w-2xl text-sm leading-relaxed ${
              isDark ? 'text-slate-400' : 'text-slate-300'
            }`}>
              Aula de Competencias Digitales desarrollada por Digital Synapse para ofrecer una experiencia de aprendizaje mas clara, visual y accesible en cualquier dispositivo.
            </p>
          </div>
        </div>
      </footer>
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




