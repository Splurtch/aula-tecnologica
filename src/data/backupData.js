import { Database, HardDrive, Cloud, Rotate3D, ShieldAlert } from 'lucide-react';

export const backupData = {
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