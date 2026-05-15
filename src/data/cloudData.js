import { Laptop, Cloud, FolderSync } from 'lucide-react';

export const cloudData = {
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
  },
};