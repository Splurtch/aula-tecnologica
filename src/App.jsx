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
  Palette, Video, Mic, ImagePlus, Moon, Sun, ChevronDown, ChevronRight
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
    id: 'cloud',
    group: 'Base tecnologica',
    step: '02',
    title: 'Redes',
    subtitle: 'Local, nube y sincronizacion',
    description: 'Aclara como viajan los archivos y donde vive la informacion.',
    icon: Cloud,
    activeClass: 'bg-blue-600 text-white shadow-xl border-blue-800 scale-105 z-10',
    idleClass: 'bg-white text-slate-500 hover:bg-blue-50 hover:text-blue-700 border-slate-200 shadow-sm',
  },
  {
    id: 'internet',
    group: 'Navegacion y organizacion',
    step: '03',
    title: 'Navegacion',
    subtitle: 'Buscar, contrastar y protegerse',
    description: 'Aprende a moverte por Internet con criterio y seguridad.',
    icon: Globe,
    activeClass: 'bg-purple-600 text-white shadow-xl border-purple-800 scale-105 z-10',
    idleClass: 'bg-white text-slate-500 hover:bg-purple-50 hover:text-purple-700 border-slate-200 shadow-sm',
  },
  {
    id: 'files',
    group: 'Navegacion y organizacion',
    step: '04',
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
    step: '05',
    title: 'Atajos',
    subtitle: 'Productividad con teclado',
    description: 'Domina combinaciones para navegar y trabajar con mas fluidez.',
    icon: Keyboard,
    activeClass: 'bg-indigo-600 text-white shadow-xl border-indigo-800 scale-105 z-10',
    idleClass: 'bg-white text-slate-500 hover:bg-indigo-50 hover:text-indigo-700 border-slate-200 shadow-sm',
  },
  {
    id: 'ai',
    group: 'Inteligencia artificial',
    step: '06',
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
  cloud: cloudData,
  internet: internetData,
  files: filesData,
  keyboard: keyboardData,
  ai: aiData,
};

const sectionGroupMeta = {
  'Base tecnologica': {
    summary: 'Infraestructura, hardware, red y nube para entender como funciona el entorno digital.',
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
  const activeTabMeta = tabConfig.find((tab) => tab.id === activeTab) || tabConfig[0];
  const currentDataSet = tabDataMap[activeTab] || {};
  const currentItems = Object.values(currentDataSet);
  const itemCount = currentItems.length;
  const isDark = theme === 'dark';
  const sectionGroups = tabConfig.reduce((acc, tab) => {
    if (!acc[tab.group]) acc[tab.group] = [];
    acc[tab.group].push(tab);
    return acc;
  }, {});
  
  // Estado 3D para el Módulo 1
  const [rotation, setRotation] = useState({ x: 60, z: -40 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSelectedItem(tab === 'keyboard' ? keyboardData.shortcut_basics : null);
    const nextTab = tabConfig.find((item) => item.id === tab);
    if (nextTab) setExpandedSectionGroup(nextTab.group);
    setIsSectionMenuOpen(false);
  };

  const handleSelect = (id, e, dataSet) => {
    if (e) e.stopPropagation();
    setSelectedItem(dataSet[id]);
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

  // PESTAÑA 2: NUBE
  const renderCloudTab = () => (
    <div className="bg-slate-900 rounded-3xl p-5 sm:p-6 md:p-8 shadow-2xl border border-slate-800 relative overflow-hidden flex flex-col h-full md:min-h-[600px] animate-in slide-in-from-left-8 duration-500">
      <div className="flex items-center gap-3 mb-10 border-b border-slate-700 pb-4 relative z-10">
        <Globe className="text-blue-400" size={32} />
        <div>
          <h2 className="text-3xl font-black text-white tracking-tight">Diagrama Funcional: Local vs. Nube</h2>
          <p className="text-slate-400 mt-1 text-sm font-medium">Comprende cómo viajan y dónde se procesan tus datos.</p>
        </div>
      </div>

      <div className="relative flex-grow flex flex-col md:flex-row items-center justify-center gap-10 md:gap-0 mt-4 mb-8">
        <div className="w-full md:w-2/5 flex flex-col items-center relative z-10">
          <div className="bg-slate-800/80 p-6 sm:p-8 rounded-[2rem] border border-slate-700 shadow-2xl flex flex-col items-center w-full max-w-[320px] backdrop-blur-md">
            <div className="bg-emerald-900/40 p-5 rounded-full mb-6 border border-emerald-500/30">
              <Laptop className="text-emerald-400 w-16 h-16" strokeWidth={1.2} />
            </div>
            <h3 className="text-white font-black text-xl mb-6">Tu Entorno Físico</h3>
          <InteractiveButton id="local_work" dataSet={cloudData} extraClass="w-full mb-8 bg-slate-700/50 border-slate-600 text-slate-200" selectedItem={selectedItem} onSelect={handleSelect} colorMap={colorMap} isDark={isDark} />
          </div>
        </div>
        <div className="w-full md:w-1/5 flex flex-col items-center justify-center relative h-40 md:h-auto z-10">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1.5 bg-slate-800 -translate-y-1/2 -z-10 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-emerald-500 via-amber-400 to-blue-500 w-[200%] animate-[slide_2s_linear_infinite]"></div>
          </div>
          <InteractiveButton id="internet_sync" dataSet={cloudData} extraClass="rounded-full !p-6 shadow-[0_0_30px_rgba(251,191,36,0.3)] bg-slate-800/90 border-amber-500/50" selectedItem={selectedItem} onSelect={handleSelect} colorMap={colorMap} isDark={isDark} />
        </div>
        <div className="w-full md:w-2/5 flex flex-col items-center relative z-10">
          <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full scale-150 -z-10"></div>
          <div className="bg-blue-950/80 p-6 sm:p-8 rounded-[2rem] border border-blue-800 shadow-2xl flex flex-col items-center w-full max-w-[320px] backdrop-blur-xl">
            <div className="bg-blue-900/60 p-5 rounded-full mb-6 border border-blue-500/40 relative">
              <Cloud className="text-blue-300 w-16 h-16" strokeWidth={1.2} />
              <Server className="text-white w-8 h-8 absolute bottom-0 right-0 bg-blue-600 p-1.5 rounded-lg shadow-lg" strokeWidth={2} />
            </div>
            <h3 className="text-white font-black text-xl mb-6 text-center">Megacentros de Datos</h3>
            <div className="flex flex-col gap-4 w-full">
              <InteractiveButton id="cloud_work" dataSet={cloudData} extraClass="w-full bg-blue-900/50 border-blue-800/80 text-blue-100" selectedItem={selectedItem} onSelect={handleSelect} colorMap={colorMap} isDark={isDark} />
              <InteractiveButton id="collaboration" dataSet={cloudData} extraClass="w-full bg-purple-900/30 border-purple-800/60 text-purple-200" selectedItem={selectedItem} onSelect={handleSelect} colorMap={colorMap} isDark={isDark} />
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
    <div className={`min-h-screen font-sans p-3 sm:p-4 md:p-6 flex flex-col transition-colors duration-500 ${isDark ? 'bg-slate-950 text-slate-100' : 'bg-[#edf2ff] text-slate-800'}`}>
      <div className={`fixed inset-0 pointer-events-none ${isDark ? 'bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.18),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.12),transparent_22%)]' : 'bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.8),transparent_20%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.12),transparent_26%)]'}`}></div>
      <div className={`fixed inset-0 pointer-events-none ${isDark ? 'bg-slate-950/36' : 'bg-white/28 backdrop-blur-[2px]'}`}></div>
      <div className="relative flex flex-col">
      {/* CABECERA Y NAVEGACIÓN PRINCIPAL */}
      <header className="mb-6 flex flex-col gap-6 max-w-[1600px] mx-auto w-full">
        <div className={`p-4 sm:p-5 md:p-8 rounded-[28px] sm:rounded-[32px] shadow-[0_20px_60px_rgba(15,23,42,0.12)] border flex flex-col md:flex-row md:items-center justify-between gap-5 md:gap-6 ${isDark ? 'bg-slate-900/92 border-slate-800' : 'bg-white/82 border-white/80 backdrop-blur-xl'}`}>
          <div>
            <span className={`text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full mb-4 inline-block border ${isDark ? 'bg-slate-950 text-slate-300 border-slate-700' : 'bg-blue-100 text-blue-800 border-blue-200'}`}>Curso Completo e Interactivo</span>
            <h1 className={`text-2xl sm:text-3xl md:text-5xl font-black tracking-tight flex items-center gap-3 sm:gap-4 mt-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              <AppWindow className={isDark ? 'text-indigo-300' : 'text-blue-600'} size={36} />
              Aula de Competencias Digitales
            </h1>
            <p className={`mt-4 text-sm sm:text-base md:text-xl font-medium max-w-3xl leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-500'}`}>
              Un recorrido interactivo por hardware, redes, archivos, navegacion, atajos de teclado y herramientas de inteligencia artificial para aprender con mas autonomia.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full md:w-auto md:min-w-[280px]">
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
            <button
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              className={`rounded-2xl border p-4 flex items-center justify-center gap-3 font-black text-sm sm:text-base transition-colors ${isDark ? 'border-slate-700 bg-slate-950 text-slate-100 hover:bg-slate-900' : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'}`}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
              {isDark ? 'Modo claro' : 'Modo oscuro'}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[1.2fr_0.8fr] gap-4">
          <div className={`rounded-[28px] sm:rounded-[32px] border p-5 sm:p-6 md:p-7 relative overflow-hidden ${isDark ? 'border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 text-white' : 'border-white/80 bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 text-white shadow-[0_22px_60px_rgba(15,23,42,0.18)]'}`}>
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08),transparent_38%,rgba(255,255,255,0.04))]"></div>
            <div className="relative">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-300 font-black">Experiencia guiada</p>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black mt-4">{activeTabMeta.title}</h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-3 max-w-3xl">{activeTabMeta.description}</p>
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
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

          <div className={`rounded-[28px] sm:rounded-[32px] border p-5 sm:p-6 shadow-sm ${isDark ? 'border-slate-800 bg-slate-900/92' : 'border-white/80 bg-white/82 backdrop-blur-xl'}`}>
            <p className={`text-xs uppercase tracking-[0.25em] font-black ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Criterios UX/UI</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-1 gap-3 mt-5">
              <div className={`rounded-2xl border p-4 ${isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                <p className={`font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Orientacion clara</p>
                <p className={`text-sm mt-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>El usuario siempre sabe en que modulo esta y que puede hacer despues.</p>
              </div>
              <div className={`rounded-2xl border p-4 ${isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                <p className={`font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Menos ruido</p>
                <p className={`text-sm mt-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Mostramos contexto y accion antes de saturar con lectura larga.</p>
              </div>
              <div className={`rounded-2xl border p-4 ${isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                <p className={`font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Progreso visible</p>
                <p className={`text-sm mt-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>La interfaz comunica foco, contenido disponible y siguiente paso.</p>
              </div>
            </div>
          </div>
        </div>

        <div className={`rounded-[28px] sm:rounded-[32px] border p-4 sm:p-5 md:p-6 ${isDark ? 'border-slate-800 bg-slate-900/92' : 'border-white/80 bg-white/82 backdrop-blur-xl'}`}>
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
      <div className="flex flex-col xl:flex-row gap-6 flex-grow max-w-[1600px] mx-auto w-full">
        
        {/* ZONA IZQUIERDA: Interactuador Visual (60%) */}
        <div className="w-full xl:w-[64%] flex flex-col gap-6 min-w-0">
          {activeTab === 'hardware' && renderHardwareTab()}
          {activeTab === 'cloud' && renderCloudTab()}
          {activeTab === 'internet' && renderInternetTab()}
          {activeTab === 'files' && renderFilesTab()}
          {activeTab === 'keyboard' && renderKeyboardTab()}
          {activeTab === 'ai' && renderAITab()}
        </div>

        {/* ZONA DERECHA: Panel Lector Dinámico (40%) */}
        <div className="w-full xl:w-[36%] min-w-0">
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

      </div>
      
      {/* Estilo para ocultar scrollbar en contenedor de botones móviles */}
      </div>
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




