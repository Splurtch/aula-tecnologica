import { FileText, Users, Download, ShieldAlert, Mic } from 'lucide-react';

export const emailData = {
  send_reply: {
    id: 'send_reply', name: 'Enviar, responder y reenviar', category: 'Uso basico del correo', icon: FileText, color: 'blue',
    desc: 'El correo electronico sirve para comunicar informacion, dejar constancia y compartir documentos. Saber cuando enviar, responder o reenviar evita errores de contexto.\n\nUn buen uso del correo mejora organizacion, claridad y profesionalidad.',
    details: 'Ideas clave:\n• Enviar inicia una conversacion.\n• Responder mantiene el contexto.\n• Reenviar comparte un mensaje con otra persona.\n• Conviene revisar asunto, destinatario y adjuntos antes de enviar.',
    pros: ['Permite comunicar de forma clara y trazable.', 'Deja registro de acuerdos o instrucciones.', 'Es basico para estudio, empleo y tramites.'],
    cons: ['Responder mal puede sacar de contexto a otras personas.', 'Reenviar sin revisar puede exponer informacion sensible.', 'Enviar deprisa aumenta errores de destinatario o adjuntos.'],
    examples: 'Ejemplo real: reenvias una convocatoria a un companero pero antes revisas si el mensaje original contiene datos privados.',
    tips: ['Antes de enviar, relee asunto, destinatarios y archivos.', 'Si la respuesta es muy corta, valora si el chat o llamada seria mejor canal.', 'Usa reenviar solo cuando la otra persona realmente necesite ese contexto.'],
  },
  cc_bcc: {
    id: 'cc_bcc', name: 'CC y CCO', category: 'Destinatarios y visibilidad', icon: Users, color: 'purple',
    desc: 'CC muestra a todos los destinatarios adicionales. CCO los oculta al resto.\n\nEntender esta diferencia evita errores de privacidad y ayuda a comunicar de forma mas profesional.',
    details: 'Uso recomendado:\n• Para: destinatario principal.\n• CC: personas informadas que deben ver la conversacion.\n• CCO: destinatarios ocultos cuando no deben verse entre si.',
    pros: ['Mejora orden y claridad en comunicaciones grupales.', 'Protege privacidad cuando se usa CCO correctamente.', 'Evita mezclar quien debe actuar y quien solo necesita enterarse.'],
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

export const emailInboxMock = [
  { from: 'Profesora Aula', subject: 'Material de la clase del viernes', tag: 'Seguro' },
  { from: 'Banco alerta', subject: 'Verifique su cuenta ahora mismo', tag: 'Sospechoso' },
  { from: 'Equipo proyecto', subject: 'Version final del dossier', tag: 'Seguro' },
];

export const emailRecipientCases = {
  para: 'Cuando una persona es la responsable principal de actuar.',
  cc: 'Cuando alguien debe estar informado y visible para el resto.',
  cco: 'Cuando se protege privacidad en envios a muchos destinatarios.',
};

export const emailQuizItems = [
  { id: 'mail-1', prompt: 'Envias una circular a muchas familias y no deben verse entre si.', answer: 'cco', explanation: 'CCO protege la privacidad de direcciones cuando hay muchos destinatarios.' },
  { id: 'mail-2', prompt: 'Quieres que una compañera vea la conversacion pero no es la responsable principal.', answer: 'cc', explanation: 'CC sirve para informar de forma visible sin convertirla en destinataria principal.' },
  { id: 'mail-3', prompt: 'Vas a escribir directamente a la persona que debe responderte.', answer: 'para', explanation: 'La casilla Para es para quien debe actuar como destinatario principal.' },
];