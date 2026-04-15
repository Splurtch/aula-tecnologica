import React, { useState } from 'react';
import { 
  // Hardware & Nube
  Cpu, HardDrive, Monitor, Keyboard, Mouse, Speaker, Plug, 
  CircuitBoard, Fan, Microchip, Gamepad2, Info, Server, 
  Rotate3D, Cloud, Laptop, ShieldCheck, Zap, Users, 
  Database, Globe, FolderSync, XCircle, CheckCircle2,
  // Internet & Archivos
  Search, AppWindow, FileText, Image as ImageIcon, Music, 
  FolderOpen, Download, Usb, Briefcase, 
  ShoppingBag, ShieldAlert, FileQuestion, AlertTriangle,
  // Amenazas & IA
  MailWarning, Bug, AlertOctagon, Bot, Sparkles, Brain, 
  Terminal, Library, Flame, BrainCircuit, Headphones, 
  Presentation, Blocks, FileSearch,
  // Multimedia
  Palette, Video, Mic, ImagePlus
} from 'lucide-react';

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

// === COMPONENTES REUTILIZABLES ===
const InteractiveButton = ({ id, dataSet, extraClass = "", selectedItem, onSelect }) => {
  const comp = dataSet[id];
  if (!comp) return null;
  const isSelected = selectedItem?.id === id;
  const colors = colorMap[comp.color] || colorMap['slate'];
  
  const activeClass = isSelected 
    ? `ring-4 ${colors.ring} shadow-lg scale-105 ${colors.bgLight} ${colors.text} ${colors.borderHeavy} z-10` 
    : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-400';
  
  return (
    <button
      onClick={(e) => onSelect(id, e, dataSet)}
      className={`relative flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all duration-300 ${activeClass} ${extraClass}`}
    >
      <comp.icon size={36} className={`mb-3 ${isSelected ? `text-${comp.color}-600` : 'text-slate-500'}`} strokeWidth={1.5} />
      <span className="text-[15px] font-bold text-center leading-tight">{comp.name}</span>
      {isSelected && (
        <span className="absolute -top-2 -right-2 flex h-4 w-4">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${colors.bgBase} opacity-75`}></span>
          <span className={`relative inline-flex rounded-full h-4 w-4 ${colors.bgBase}`}></span>
        </span>
      )}
    </button>
  );
};

const Layer3D = ({ id, style, baseZ, children, customClass = "", selectedItem, onSelect }) => {
  const comp = hardwareData[id];
  const isSelected = selectedItem?.id === id;
  const currentZ = isSelected ? baseZ + 40 : baseZ;
  const glow = colorMap[comp.color]?.glow || '';

  const theme3D = {
    emerald: `bg-emerald-900/90 border-2 border-emerald-400 ${glow} text-emerald-200`,
    blue: `bg-blue-600/95 border-2 border-blue-300 ${glow} text-blue-100`,
    purple: `bg-purple-700/95 border-2 border-purple-400 ${glow} text-purple-100`,
    red: `bg-red-600/80 border-2 border-red-400 ${glow} text-red-100 backdrop-blur-sm`,
    amber: `bg-amber-700/95 border-2 border-amber-400 ${glow} text-amber-100`,
    zinc: `bg-zinc-800/95 border-2 border-zinc-500 ${glow} text-zinc-200`,
    cyan: `bg-cyan-900/60 border-2 border-cyan-400 ${glow} text-cyan-200 backdrop-blur-md`,
  };

  return (
    <div 
      onClick={(e) => onSelect(id, e, hardwareData)}
      style={{ ...style, transform: `translateZ(${currentZ}px)`, transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
      className={`absolute rounded-lg flex flex-col items-center justify-center cursor-pointer group hover:brightness-125 ${theme3D[comp.color]} ${customClass}`}
      title={comp.name}
    >
      {children || (
        <div className="flex flex-col items-center justify-center pointer-events-none">
          <comp.icon className={`w-8 h-8 transition-transform group-hover:scale-110 ${isSelected ? 'animate-pulse' : ''}`} />
          <span className="text-xs font-bold text-center mt-1 px-2 bg-black/30 rounded-full">{comp.name}</span>
        </div>
      )}
    </div>
  );
};

const PanelDerecho = ({ selectedItem }) => {
  if (!selectedItem) {
    return (
      <div className="text-center flex flex-col items-center justify-center text-slate-400 h-full py-20 px-6">
        <Info size={100} className="mb-8 opacity-20 text-blue-500" />
        <p className="text-2xl font-bold text-slate-600 mb-4">Módulo de Estudio</p>
        <p className="text-lg leading-relaxed max-w-sm text-slate-500">
          Explora la parte interactiva de la izquierda y <strong className="text-blue-600">haz clic en cualquier componente o concepto</strong>. Aquí aparecerá el desglose formativo detallado.
        </p>
      </div>
    );
  }

  const colors = colorMap[selectedItem.color] || colorMap['slate'];

  return (
    <div className="animate-in fade-in slide-in-from-right-8 duration-500 flex flex-col h-full bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
      
      {/* Header del Panel */}
      <div className={`px-8 py-6 flex items-center gap-4 ${colors.bgBase} text-white shadow-md z-10 relative`}>
        <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm border border-white/30 shrink-0">
          <selectedItem.icon size={36} className="drop-shadow-md" />
        </div>
        <div>
          <h3 className="text-2xl font-black drop-shadow-sm leading-tight tracking-tight">{selectedItem.name}</h3>
          <span className="text-white/80 text-sm font-semibold tracking-wide uppercase mt-1 block">{selectedItem.category}</span>
        </div>
      </div>

      {/* Cuerpo del Panel Scrolleable */}
      <div className="p-8 flex-grow overflow-y-auto space-y-8 custom-scrollbar">
        
        {/* Bloque: ¿Qué es? (Descripción con saltos de línea procesados) */}
        <section>
          <h4 className="text-xl font-bold text-slate-800 mb-4 border-b-2 border-slate-100 pb-2 flex items-center gap-2">
            <FileText size={20} className={colors.text.replace('text-', 'text-opacity-80 text-')} /> 
            Concepto y Personalidad
          </h4>
          <div className="space-y-4">
            {selectedItem.desc.split('\n\n').map((paragraph, idx) => {
              // Si el párrafo está entre comillas latinas « », lo destacamos como "Personalidad"
              if (paragraph.startsWith('«') && paragraph.endsWith('».')) {
                return (
                  <div key={idx} className={`p-4 rounded-xl font-medium italic ${colors.bgLight} ${colors.text} border ${colors.borderLight}`}>
                    {paragraph}
                  </div>
                );
              }
              return (
                <p key={idx} className="text-slate-600 text-[16px] leading-relaxed text-justify">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </section>
        
        {/* Bloque: Detalles Técnicos o Especificaciones (Hardware/Internet/Files) */}
        {selectedItem.details && (
          <section className={`${colors.bgLight} p-6 rounded-2xl border ${colors.borderLight} shadow-inner`}>
            <h4 className={`text-sm font-black ${colors.text} uppercase tracking-widest mb-4 flex items-center gap-2`}>
              <Info size={18} /> Profundización / Ficha Técnica
            </h4>
            <div className="space-y-3">
              {selectedItem.details.split('\n').map((line, idx) => {
                if (line.startsWith('•')) {
                  return (
                    <div key={idx} className="flex gap-3 items-start">
                       <span className={`mt-1 font-bold ${colors.text}`}>&rarr;</span>
                       <p className="text-slate-700 text-[15px] leading-relaxed flex-1">
                         {/* Destacamos en negrita la palabra antes de los dos puntos si existe */}
                         {line.substring(1).includes(':') ? (
                           <>
                             <strong className="text-slate-900">{line.substring(1).split(':')[0]}:</strong>
                             {line.substring(1).substring(line.substring(1).indexOf(':') + 1)}
                           </>
                         ) : (
                           line.substring(1)
                         )}
                       </p>
                    </div>
                  );
                }
                return <p key={idx} className="text-slate-700 text-[15px] font-semibold mb-2">{line}</p>;
              })}
            </div>
          </section>
        )}

        {/* Bloque Especial: Pros, Contras (Cloud, AI y Amenazas) */}
        {selectedItem.pros && (
           <section className="space-y-6">
             <div className="grid grid-cols-1 gap-4">
               {/* Ventajas */}
               <div className="bg-emerald-50 border border-emerald-200 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                 <h4 className="text-[13px] font-black text-emerald-800 uppercase tracking-widest mb-4 flex items-center gap-2">
                   <CheckCircle2 size={18} className="text-emerald-600"/> Mejores Aspectos (Pros)
                 </h4>
                 <ul className="space-y-3">
                   {selectedItem.pros.map((p,i)=>(
                     <li key={i} className="text-[15px] text-slate-700 flex items-start gap-3 leading-relaxed">
                       <span className="text-emerald-500 mt-0.5"><CheckCircle2 size={16}/></span>{p}
                     </li>
                   ))}
                 </ul>
               </div>
               
               {/* Inconvenientes */}
               <div className="bg-red-50 border border-red-200 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                 <h4 className="text-[13px] font-black text-red-800 uppercase tracking-widest mb-4 flex items-center gap-2">
                   <XCircle size={18} className="text-red-600"/> Debilidades (Contras)
                 </h4>
                 <ul className="space-y-3">
                   {selectedItem.cons.map((c,i)=>(
                     <li key={i} className="text-[15px] text-slate-700 flex items-start gap-3 leading-relaxed">
                       <span className="text-red-500 mt-0.5"><AlertTriangle size={16}/></span>{c}
                     </li>
                   ))}
                 </ul>
               </div>
             </div>
           </section>
        )}

        {/* Casos de uso y Ejemplos - Independiente */}
        {selectedItem.examples && (
           <section className="space-y-6 mt-2">
             <div className="bg-slate-800 text-white p-6 rounded-2xl border border-slate-700 shadow-xl relative overflow-hidden">
               <Zap size={100} className="absolute -right-6 -bottom-6 text-slate-700 opacity-30" />
               <h4 className="text-[13px] font-black text-blue-300 uppercase tracking-widest mb-3 flex items-center gap-2 relative z-10">
                 <Zap size={18} /> Ejemplos del Mundo Real
               </h4>
               <p className="text-[15px] text-slate-200 leading-relaxed relative z-10 italic">
                 "{selectedItem.examples}"
               </p>
             </div>
           </section>
        )}

      </div>
    </div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState('ai'); // Default ahora a 'ai' para mostrar lo nuevo, cámbialo a 'hardware' si prefieres
  const [selectedItem, setSelectedItem] = useState(null);
  
  // Estado 3D para el Módulo 1
  const [rotation, setRotation] = useState({ x: 60, z: -40 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSelectedItem(null);
  };

  const handleSelect = (id, e, dataSet) => {
    if (e) e.stopPropagation();
    setSelectedItem(dataSet[id]);
  };

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
            <Layer3D id="motherboard" baseZ={0} style={{ top: '0', left: '0', width: '100%', height: '100%' }} selectedItem={selectedItem} onSelect={handleSelect}>
              <div className="w-full h-full flex items-end justify-end p-4 opacity-50 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDM5LTVoNDB2MUgweiIgZmlsbD0icmdiYSg1MiwgMjExLCAxNTMsIDAuMikiLz48cGF0aCBkPSJNMzkuNSAwSDRwdjQwaC0xdnoiIGZpbGw9InJnYmEoNTIsIDIxMSwgMTUzLCAwLjIpIi8+PC9zdmc+')]"></div>
                <CircuitBoard className="w-16 h-16 mr-2" />
                <span className="text-xl font-bold tracking-widest uppercase text-emerald-100">Placa Base</span>
              </div>
            </Layer3D>
            <Layer3D id="cpu" baseZ={15} style={{ top: '15%', left: '35%', width: '25%', height: '20%' }} selectedItem={selectedItem} onSelect={handleSelect} />
            <Layer3D id="ram" baseZ={20} style={{ top: '12%', left: '65%', width: '20%', height: '26%' }} customClass="!bg-transparent !border-none !shadow-none" selectedItem={selectedItem} onSelect={handleSelect}>
               <div className="flex justify-between w-full h-full">
                 <div className="w-[40%] h-full bg-purple-600/90 border border-purple-400 rounded shadow-[0_0_15px_rgba(192,132,252,0.6)]"></div>
                 <div className="w-[40%] h-full bg-purple-600/90 border border-purple-400 rounded shadow-[0_0_15px_rgba(192,132,252,0.6)]"></div>
               </div>
               <span className="absolute -bottom-6 text-xs font-bold text-purple-200 bg-black/60 px-3 py-1 rounded-full shadow-lg">RAM</span>
            </Layer3D>
            <Layer3D id="gpu" baseZ={40} style={{ top: '48%', left: '5%', width: '80%', height: '22%' }} selectedItem={selectedItem} onSelect={handleSelect}>
              <div className="flex w-full h-full items-center justify-around px-4 relative pointer-events-none">
                <span className="absolute -top-3 left-2 text-xs font-bold bg-black/80 text-white px-2 py-1 rounded shadow-md border border-red-500/30">GPU RTX</span>
                <Fan className="w-12 h-12 opacity-80" />
                <Fan className="w-12 h-12 opacity-80" />
              </div>
            </Layer3D>
            <Layer3D id="storage" baseZ={10} style={{ bottom: '5%', left: '10%', width: '30%', height: '18%' }} selectedItem={selectedItem} onSelect={handleSelect} />
            <Layer3D id="psu" baseZ={20} style={{ bottom: '2%', right: '5%', width: '45%', height: '25%' }} selectedItem={selectedItem} onSelect={handleSelect} />
            <Layer3D id="cooling" baseZ={60} style={{ top: '12%', left: '32.5%', width: '30%', height: '26%' }} customClass="!rounded-full" selectedItem={selectedItem} onSelect={handleSelect}>
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

  // PESTAÑA 2: NUBE
  const renderCloudTab = () => (
    <div className="bg-slate-900 rounded-3xl p-8 shadow-2xl border border-slate-800 relative overflow-hidden flex flex-col h-full min-h-[600px] animate-in slide-in-from-left-8 duration-500">
      <div className="flex items-center gap-3 mb-10 border-b border-slate-700 pb-4 relative z-10">
        <Globe className="text-blue-400" size={32} />
        <div>
          <h2 className="text-3xl font-black text-white tracking-tight">Diagrama Funcional: Local vs. Nube</h2>
          <p className="text-slate-400 mt-1 text-sm font-medium">Comprende cómo viajan y dónde se procesan tus datos.</p>
        </div>
      </div>

      <div className="relative flex-grow flex flex-col md:flex-row items-center justify-center gap-10 md:gap-0 mt-4 mb-8">
        <div className="w-full md:w-2/5 flex flex-col items-center relative z-10">
          <div className="bg-slate-800/80 p-8 rounded-[2rem] border border-slate-700 shadow-2xl flex flex-col items-center w-full max-w-[320px] backdrop-blur-md">
            <div className="bg-emerald-900/40 p-5 rounded-full mb-6 border border-emerald-500/30">
              <Laptop className="text-emerald-400 w-16 h-16" strokeWidth={1.2} />
            </div>
            <h3 className="text-white font-black text-xl mb-6">Tu Entorno Físico</h3>
            <InteractiveButton id="local_work" dataSet={cloudData} extraClass="w-full mb-8 bg-slate-700/50 border-slate-600 text-slate-200" selectedItem={selectedItem} onSelect={handleSelect} />
          </div>
        </div>
        <div className="w-full md:w-1/5 flex flex-col items-center justify-center relative h-40 md:h-auto z-10">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1.5 bg-slate-800 -translate-y-1/2 -z-10 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-emerald-500 via-amber-400 to-blue-500 w-[200%] animate-[slide_2s_linear_infinite]"></div>
          </div>
          <InteractiveButton id="internet_sync" dataSet={cloudData} extraClass="rounded-full !p-6 shadow-[0_0_30px_rgba(251,191,36,0.3)] bg-slate-800/90 border-amber-500/50" selectedItem={selectedItem} onSelect={handleSelect} />
        </div>
        <div className="w-full md:w-2/5 flex flex-col items-center relative z-10">
          <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full scale-150 -z-10"></div>
          <div className="bg-blue-950/80 p-8 rounded-[2rem] border border-blue-800 shadow-2xl flex flex-col items-center w-full max-w-[320px] backdrop-blur-xl">
            <div className="bg-blue-900/60 p-5 rounded-full mb-6 border border-blue-500/40 relative">
              <Cloud className="text-blue-300 w-16 h-16" strokeWidth={1.2} />
              <Server className="text-white w-8 h-8 absolute bottom-0 right-0 bg-blue-600 p-1.5 rounded-lg shadow-lg" strokeWidth={2} />
            </div>
            <h3 className="text-white font-black text-xl mb-6 text-center">Megacentros de Datos</h3>
            <div className="flex flex-col gap-4 w-full">
              <InteractiveButton id="cloud_work" dataSet={cloudData} extraClass="w-full bg-blue-900/50 border-blue-800/80 text-blue-100" selectedItem={selectedItem} onSelect={handleSelect} />
              <InteractiveButton id="collaboration" dataSet={cloudData} extraClass="w-full bg-purple-900/30 border-purple-800/60 text-purple-200" selectedItem={selectedItem} onSelect={handleSelect} />
            </div>
          </div>
        </div>
      </div>
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
              <InteractiveButton id="scenario_personal" dataSet={internetData} extraClass="px-6 py-3" selectedItem={selectedItem} onSelect={handleSelect} />
              <InteractiveButton id="scenario_work" dataSet={internetData} extraClass="px-6 py-3" selectedItem={selectedItem} onSelect={handleSelect} />
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
          <InteractiveButton id="reliable_sources" dataSet={internetData} extraClass="w-full flex-row !justify-start gap-4 !p-5" selectedItem={selectedItem} onSelect={handleSelect} />
          <InteractiveButton id="phishing" dataSet={internetData} extraClass="w-full flex-row !justify-start gap-4 !p-5" selectedItem={selectedItem} onSelect={handleSelect} />
          <InteractiveButton id="malware" dataSet={internetData} extraClass="w-full flex-row !justify-start gap-4 !p-5" selectedItem={selectedItem} onSelect={handleSelect} />
          <InteractiveButton id="scams" dataSet={internetData} extraClass="w-full flex-row !justify-start gap-4 !p-5" selectedItem={selectedItem} onSelect={handleSelect} />
        </div>
      </div>
    </div>
  );

  // PESTAÑA 4: ARCHIVOS
  const renderFilesTab = () => (
    <div className="bg-slate-900 rounded-3xl p-8 shadow-2xl border border-slate-800 animate-in fade-in duration-500 h-full">
      <div className="flex items-center gap-3 mb-8 border-b border-slate-700 pb-4">
        <FolderOpen className="text-amber-400" size={32} />
        <div>
          <h2 className="text-2xl font-black text-white">Explorador y Gestión Documental</h2>
          <p className="text-slate-400 mt-1 text-sm font-medium">Domina la organización, jerarquías y formatos de archivo.</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 h-[550px]">
        <div className="w-full md:w-1/3 bg-slate-800 rounded-2xl p-5 border border-slate-700 flex flex-col gap-4 shadow-inner">
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

        <div className="w-full md:w-2/3 bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col gap-8 overflow-hidden">
          <div>
            <h3 className="text-[11px] font-black text-slate-500 uppercase tracking-widest mb-4">Estructura del Árbol (Jerarquía)</h3>
            <div className="grid grid-cols-2 gap-4">
              <InteractiveButton id="folders_org" dataSet={filesData} extraClass="!flex-row !justify-start gap-4 !p-5 shadow-sm" selectedItem={selectedItem} onSelect={handleSelect} />
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
            <InteractiveButton id="chatgpt" dataSet={aiData} extraClass="bg-slate-800 border-slate-700 text-slate-200" selectedItem={selectedItem} onSelect={handleSelect} />
            <InteractiveButton id="claude" dataSet={aiData} extraClass="bg-slate-800 border-slate-700 text-slate-200" selectedItem={selectedItem} onSelect={handleSelect} />
            <InteractiveButton id="gemini" dataSet={aiData} extraClass="bg-slate-800 border-slate-700 text-slate-200" selectedItem={selectedItem} onSelect={handleSelect} />
            <InteractiveButton id="copilot" dataSet={aiData} extraClass="bg-slate-800 border-slate-700 text-slate-200" selectedItem={selectedItem} onSelect={handleSelect} />
            <InteractiveButton id="grok" dataSet={aiData} extraClass="bg-slate-800 border-slate-700 text-slate-200" selectedItem={selectedItem} onSelect={handleSelect} />
          </div>
        </div>

        {/* Categoría 2: Investigación */}
        <div className="mb-10">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
            <Library size={18} className="text-slate-500" /> 2. Los Investigadores y Lectores
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <InteractiveButton id="perplexity" dataSet={aiData} extraClass="bg-slate-800 border-slate-700 text-slate-200 flex-row !justify-start gap-4" selectedItem={selectedItem} onSelect={handleSelect} />
            <InteractiveButton id="notebooklm" dataSet={aiData} extraClass="bg-slate-800 border-slate-700 text-slate-200 flex-row !justify-start gap-4" selectedItem={selectedItem} onSelect={handleSelect} />
            <InteractiveButton id="kimi" dataSet={aiData} extraClass="bg-slate-800 border-slate-700 text-slate-200 flex-row !justify-start gap-4" selectedItem={selectedItem} onSelect={handleSelect} />
          </div>
        </div>

        {/* Categoría 3: Agentes y Desarrollo */}
        <div>
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
            <Terminal size={18} className="text-slate-500" /> 3. Desarrolladores y Agentes Autónomos
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <InteractiveButton id="deepseek" dataSet={aiData} extraClass="bg-slate-800 border-slate-700 text-slate-200" selectedItem={selectedItem} onSelect={handleSelect} />
            <InteractiveButton id="lovable" dataSet={aiData} extraClass="bg-slate-800 border-slate-700 text-slate-200" selectedItem={selectedItem} onSelect={handleSelect} />
            <InteractiveButton id="gamma" dataSet={aiData} extraClass="bg-slate-800 border-slate-700 text-slate-200" selectedItem={selectedItem} onSelect={handleSelect} />
            <InteractiveButton id="manus" dataSet={aiData} extraClass="bg-slate-800 border-slate-700 text-slate-200" selectedItem={selectedItem} onSelect={handleSelect} />
          </div>
        </div>

        {/* Categoría 4: Multimedia y Generación (NUEVA) */}
        <div className="mt-10">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
            <ImagePlus size={18} className="text-slate-500" /> 4. Creadores Multimedia (Audio, Vídeo e Imagen)
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <InteractiveButton id="midjourney" dataSet={aiData} extraClass="bg-slate-800 border-slate-700 text-slate-200" selectedItem={selectedItem} onSelect={handleSelect} />
            <InteractiveButton id="suno" dataSet={aiData} extraClass="bg-slate-800 border-slate-700 text-slate-200" selectedItem={selectedItem} onSelect={handleSelect} />
            <InteractiveButton id="runway" dataSet={aiData} extraClass="bg-slate-800 border-slate-700 text-slate-200" selectedItem={selectedItem} onSelect={handleSelect} />
            <InteractiveButton id="elevenlabs" dataSet={aiData} extraClass="bg-slate-800 border-slate-700 text-slate-200" selectedItem={selectedItem} onSelect={handleSelect} />
          </div>
        </div>
        
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans p-4 md:p-8 flex flex-col">
      {/* CABECERA Y NAVEGACIÓN PRINCIPAL */}
      <header className="mb-8 flex flex-col gap-8 max-w-[1600px] mx-auto w-full">
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <span className="bg-blue-100 text-blue-800 text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full mb-4 inline-block border border-blue-200">Curso Completo e Interactivo</span>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight flex items-center gap-4 mt-2">
              <AppWindow className="text-blue-600" size={48} />
              Aula de Competencias Digitales
            </h1>
            <p className="text-slate-500 mt-4 text-xl font-medium max-w-3xl leading-relaxed">
              Un viaje interactivo desde el interior físico de tu ordenador hasta la inmensidad de Internet y la Inteligencia Artificial.
            </p>
          </div>
        </div>

        {/* Tabs de Navegación - Ahora con 5 botones (Scrollable en móvil) */}
        <div className="flex overflow-x-auto pb-4 hide-scrollbar">
          <div className="flex w-full min-w-max md:grid md:grid-cols-5 gap-3 md:gap-4">
            <button onClick={() => handleTabChange('hardware')} className={`flex flex-col items-center justify-center p-4 md:p-6 rounded-2xl font-black text-[13px] md:text-[14px] uppercase tracking-wide transition-all duration-300 gap-2 md:gap-3 border-b-4 flex-1 ${activeTab === 'hardware' ? 'bg-emerald-600 text-white shadow-xl border-emerald-800 scale-105 z-10' : 'bg-white text-slate-500 hover:bg-emerald-50 hover:text-emerald-700 border-slate-200 shadow-sm'}`}>
              <Rotate3D size={28} /> 1. Hardware
            </button>
            <button onClick={() => handleTabChange('cloud')} className={`flex flex-col items-center justify-center p-4 md:p-6 rounded-2xl font-black text-[13px] md:text-[14px] uppercase tracking-wide transition-all duration-300 gap-2 md:gap-3 border-b-4 flex-1 ${activeTab === 'cloud' ? 'bg-blue-600 text-white shadow-xl border-blue-800 scale-105 z-10' : 'bg-white text-slate-500 hover:bg-blue-50 hover:text-blue-700 border-slate-200 shadow-sm'}`}>
              <Cloud size={28} /> 2. Redes
            </button>
            <button onClick={() => handleTabChange('internet')} className={`flex flex-col items-center justify-center p-4 md:p-6 rounded-2xl font-black text-[13px] md:text-[14px] uppercase tracking-wide transition-all duration-300 gap-2 md:gap-3 border-b-4 flex-1 ${activeTab === 'internet' ? 'bg-purple-600 text-white shadow-xl border-purple-800 scale-105 z-10' : 'bg-white text-slate-500 hover:bg-purple-50 hover:text-purple-700 border-slate-200 shadow-sm'}`}>
              <Globe size={28} /> 3. Navegación
            </button>
            <button onClick={() => handleTabChange('files')} className={`flex flex-col items-center justify-center p-4 md:p-6 rounded-2xl font-black text-[13px] md:text-[14px] uppercase tracking-wide transition-all duration-300 gap-2 md:gap-3 border-b-4 flex-1 ${activeTab === 'files' ? 'bg-amber-500 text-white shadow-xl border-amber-700 scale-105 z-10' : 'bg-white text-slate-500 hover:bg-amber-50 hover:text-amber-700 border-slate-200 shadow-sm'}`}>
              <FolderOpen size={28} /> 4. Archivos
            </button>
            <button onClick={() => handleTabChange('ai')} className={`flex flex-col items-center justify-center p-4 md:p-6 rounded-2xl font-black text-[13px] md:text-[14px] uppercase tracking-wide transition-all duration-300 gap-2 md:gap-3 border-b-4 flex-1 ${activeTab === 'ai' ? 'bg-emerald-500 text-white shadow-xl border-emerald-700 scale-105 z-10' : 'bg-white text-slate-500 hover:bg-emerald-50 hover:text-emerald-700 border-slate-200 shadow-sm'}`}>
              <Bot size={28} /> 5. Inteligencia IA
            </button>
          </div>
        </div>
      </header>

      {/* ÁREA PRINCIPAL DIVIDIDA */}
      <div className="flex flex-col lg:flex-row gap-8 flex-grow max-w-[1600px] mx-auto w-full">
        
        {/* ZONA IZQUIERDA: Interactuador Visual (60%) */}
        <div className="w-full lg:w-[60%] flex flex-col gap-6">
          {activeTab === 'hardware' && renderHardwareTab()}
          {activeTab === 'cloud' && renderCloudTab()}
          {activeTab === 'internet' && renderInternetTab()}
          {activeTab === 'files' && renderFilesTab()}
          {activeTab === 'ai' && renderAITab()}
        </div>

        {/* ZONA DERECHA: Panel Lector Dinámico (40%) */}
        <div className="w-full lg:w-[40%]">
          <div className="sticky top-8 h-full min-h-[600px] lg:max-h-[85vh] lg:h-[85vh]">
            <PanelDerecho selectedItem={selectedItem} />
          </div>
        </div>

      </div>
      
      {/* Estilo para ocultar scrollbar en contenedor de botones móviles */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
}