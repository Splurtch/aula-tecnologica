import { ShieldCheck, MailWarning, AppWindow, FolderSync, Download, Users, FileText, ShieldAlert, Mic } from 'lucide-react';

export const securityData = {
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
    id: 'phishing_security', name: 'Phishing y fraudes', category: 'Deteccion de enganos', icon: MailWarning, color: 'red',
    desc: 'El phishing intenta engañar al usuario para que entregue claves, dinero o datos personales mediante correos, mensajes o paginas falsas.\n\nSuelen jugar con urgencia, miedo o premios demasiado buenos para ser verdad.',
    details: 'Pistas de alerta:\n• Mensajes que exigen actuar "ahora mismo".\n• Enlaces raros o remitentes extranos.\n• Archivos adjuntos inesperados.\n• Errores de tono, marca o identidad visual.',
    pros: ['Aprender a reconocer senales reduce mucho el riesgo.', 'El usuario gana criterio para revisar remitentes y enlaces.', 'Sirve tanto para email como para SMS, WhatsApp o redes sociales.'],
    cons: ['Los fraudes cada vez se parecen mas a mensajes reales.', 'En momentos de prisa es facil pulsar sin revisar.', 'Algunos ataques combinan correo, web falsa y llamada telefonica.'],
    examples: 'Ejemplo real: un supuesto banco te pide verificar la cuenta en un enlace que no pertenece al dominio oficial.',
    tips: ['Nunca abras un enlace sensible desde un mensaje dudoso.', 'Entra manualmente a la web oficial si tienes dudas.', 'Revisa remitente, dominio y tono antes de actuar.'],
  },
  privacy_permissions: {
    id: 'privacy_permissions', name: 'Privacidad y permisos', category: 'Control de datos', icon: AppWindow, color: 'purple',
    desc: 'Muchas aplicaciones piden acceso a camara, microfono, ubicacion o archivos. No siempre lo necesitan.\n\nEntender permisos ayuda a evitar exceso de exposicion y a mantener mayor control sobre los datos personales.',
    details: 'Permisos frecuentes:\n• Microfono y camara.\n• Ubicacion en tiempo real.\n• Contactos y calendario.\n• Acceso completo a fotos, archivos o portapapeles.',
    pros: ['Ayuda a decidir con criterio que acceso conceder.', 'Reduce exposicion de informacion innecesaria.', 'Mejora privacidad en movil, navegador y aplicaciones web.'],
    cons: ['Muchos usuarios aceptan permisos sin leer.', 'Un permiso excesivo puede revelar mas datos de los necesarios.', 'En apps mal disenadas cuesta saber para que se usan realmente.'],
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
    cons: ['Posponer mucho una actualizacion deja el sistema expuesto.', 'A veces una actualizacion requiere reinicio y se aplaza demasiado.', 'No actualizar drivers o navegador causa fallos extranos.'],
    examples: 'Ejemplo real: un navegador sin actualizar puede exponer al usuario a webs maliciosas que ya estarian bloqueadas en la version actual.',
    tips: ['Programa reinicios cuando no interrumpan trabajo importante.', 'Actualiza primero las herramientas mas expuestas: navegador, correo y sistema.', 'Evita instalar software desactualizado desde paginas dudosas.'],
  },
};

export const securityPasswordExamples = {
  weak: ['12345678', 'madrid2024', 'nombreperro'],
  strong: ['Bosque!Luz-Cafe-92', 'Aula*Segura_Rio7', 'Nube-Verde+Mapa44'],
};

export const securityPermissionCards = [
  { name: 'Camara', risk: 'Permitir solo cuando la app realmente la use.' },
  { name: 'Microfono', risk: 'Muy sensible en videollamadas y apps del navegador.' },
  { name: 'Ubicacion', risk: 'No todas las apps necesitan saber donde estas siempre.' },
  { name: 'Archivos', risk: 'Evita acceso total si solo se necesita un documento concreto.' },
];

export const securityQuizItems = [
  { id: 'sec-1', prompt: 'Un correo del banco te mete prisa y te pide pulsar un enlace para "evitar el bloqueo".', safe: false, explanation: 'Es sospechoso porque usa urgencia y un enlace externo para robar credenciales.' },
  { id: 'sec-2', prompt: 'Activas doble factor en tu correo principal y guardas codigos de recuperacion.', safe: true, explanation: 'Es una medida muy recomendable para proteger la cuenta mas critica.' },
  { id: 'sec-3', prompt: 'Una app de linterna pide acceso permanente a ubicacion y contactos.', safe: false, explanation: 'Es un permiso desproporcionado para la funcion que promete la app.' },
];