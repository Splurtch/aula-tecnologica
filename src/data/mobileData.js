import { Smartphone, ShieldCheck, Briefcase, Lock } from 'lucide-react';

export const mobileData = {
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