import { Cable, Network, Settings2, HardDrive, ShieldCheck } from 'lucide-react';

export const ethernetData = {
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