import { Cpu, Monitor, Plug, Blocks, Layers } from 'lucide-react';

export const softwareData = {
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

export const softwareOsExamples = [
  { id: 'windows', name: 'Windows', subtitle: 'Escritorio y aula', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/windows8/windows8-original.svg' },
  { id: 'macos', name: 'macOS', subtitle: 'Creatividad y ecosistema Apple', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/apple/apple-original.svg' },
  { id: 'linux', name: 'Linux', subtitle: 'Codigo abierto y servidores', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg' },
  { id: 'android', name: 'Android', subtitle: 'Movil y tablet', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original.svg' },
  { id: 'ios', name: 'iOS', subtitle: 'iPhone y apps moviles', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/apple/apple-original.svg' },
];

export const softwareOsDetails = {
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

export const softwareLicenseModels = {
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

export const softwareQuizItems = [
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