import { MessageSquare, Video, Users, User, MessageCircle } from 'lucide-react';

export const communicationData = {
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
    details: 'Plataformas principales:\n• Zoom: Muy popular para reuniones pequenas y grandes, facilita compartir pantalla.\n• Google Meet: Integrado con Google Workspace, acesso directo desde Calendar.\n• Microsoft Teams: Ideal para empresas con Microsoft 365, incluye chat y archivos.\n• Jitsi: Open source, no requiere cuenta, gratuito.\n\nCaracteristicas utiles:\n• Compartir pantalla para presentaciones y demostraciones.\n• Grabacion de sesiones para quienes no pudieron asistir.\n• Salas de grupos pequenos (breakout rooms).\n• Fondo virtual para privacidad.\n• Transcripcion automatica (en algunas plataformas).',
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