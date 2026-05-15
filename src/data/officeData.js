import { FileText, Database, Presentation, Download, Users } from 'lucide-react';

export const officeData = {
  text_docs: {
    id: 'text_docs', name: 'Procesador de texto', category: 'Documentos y redaccion', icon: FileText, color: 'blue',
    desc: 'Un procesador de texto sirve para redactar, corregir, dar formato y preparar documentos como cartas, trabajos, informes o curriculums.\n\nEs la herramienta mas adecuada cuando el contenido principal es texto estructurado.',
    details: 'Usos frecuentes:\n• Cartas y solicitudes.\n• Trabajos academicos.\n• CV y documentos formales.\n• Informes con estilos y encabezados.',
    pros: ['Ideal para redactar con formato limpio.', 'Permite imprimir o exportar a PDF.', 'Muy util para estudio, empleo y administracion.'],
    cons: ['No es la mejor opcion para calculos.', 'Un mal formato puede dificultar lectura.', 'Muchas personas infrautilizan estilos y plantillas.'],
    examples: 'Ejemplo real: preparar un CV, una carta formal o un trabajo con portada e indice.',
    tips: ['Usa estilos de titulo para mantener orden.', 'Exporta a PDF cuando la version ya este cerrada.', 'Una plantilla puede ahorrar mucho tiempo.'],
  },
  spreadsheets: {
    id: 'spreadsheets', name: 'Hojas de calculo', category: 'Calculo y datos', icon: Database, color: 'emerald',
    desc: 'Las hojas de calculo organizan datos en celdas, filas y columnas para calcular, comparar y resumir informacion.\n\nSon muy utiles para presupuestos, notas, inventarios, asistencia o seguimiento de tareas.',
    details: 'Usos frecuentes:\n• Presupuestos y gastos.\n• Listas con formulas.\n• Notas y seguimiento.\n• Graficos y resumenes simples.',
    pros: ['Permiten calcular rapido y ordenar informacion.', 'Facilitan comparaciones y graficos.', 'Son clave en gestion y administracion.'],
    cons: ['Si se usan mal, una formula errada cambia resultados.', 'Muchas personas mezclan texto libre con calculo y se desordenan.', 'No son la mejor herramienta para redactar largo.'],
    examples: 'Ejemplo real: llevar un presupuesto mensual o registrar gastos de una actividad.',
    tips: ['Nombra columnas con claridad.', 'Comprueba formulas antes de compartir.', 'Usa filtros si la tabla empieza a crecer.'],
  },
  presentations_tools: {
    id: 'presentations_tools', name: 'Presentaciones', category: 'Exposicion visual', icon: Presentation, color: 'purple',
    desc: 'Las presentaciones sirven para explicar ideas con apoyo visual en clase, reuniones o exposiciones.\n\nLo importante no es llenar diapositivas, sino ordenar un mensaje y hacerlo facil de seguir.',
    details: 'Usos frecuentes:\n• Exposiciones de clase.\n• Reuniones de equipo.\n• Propuestas visuales.\n• Material de apoyo para explicar procesos.',
    pros: ['Ordenan un discurso visual.', 'Ayudan a resumir ideas clave.', 'Se pueden compartir en PDF o mostrar en directo.'],
    cons: ['Demasiado texto vuelve pesada la diapositiva.', 'Un mal diseño distrae mas que ayuda.', 'No sustituyen un documento detallado si hace falta profundidad.'],
    examples: 'Ejemplo real: resumir un proyecto o exponer un tema con estructura visual clara.',
    tips: ['Una idea principal por diapositiva suele funcionar mejor.', 'Usa pocas palabras y buen contraste.', 'Piensa en quien escucha, no solo en quien diseña.'],
  },
  pdf_export: {
    id: 'pdf_export', name: 'PDF y exportacion', category: 'Entrega y compatibilidad', icon: Download, color: 'amber',
    desc: 'El PDF fija el formato y hace que un documento se vea igual en casi cualquier dispositivo.\n\nExportar bien evita sorpresas cuando se comparte un archivo final.',
    details: 'Cuando usar PDF:\n• CV y cartas finales.\n• Trabajos para entregar.\n• Formularios o documentos cerrados.\n• Presentaciones que no deben modificarse.',
    pros: ['Mantiene formato estable.', 'Muy compatible para enviar o imprimir.', 'Reduce cambios accidentales por parte del receptor.'],
    cons: ['Editar despues es menos comodo.', 'No sirve bien para trabajo colaborativo en vivo.', 'Si exportas mal, puedes perder enlaces o calidad.'],
    examples: 'Ejemplo real: enviar un CV en PDF en lugar de un archivo editable para asegurar el formato.',
    tips: ['Revisa el PDF final antes de enviarlo.', 'Si el documento sigue cambiando, trabaja en editable y exporta al final.', 'Comprueba que enlaces y paginas salgan bien.'],
  },
  collaboration_templates: {
    id: 'collaboration_templates', name: 'Colaboracion y plantillas', category: 'Trabajo compartido', icon: Users, color: 'indigo',
    desc: 'Documentos colaborativos y plantillas aceleran mucho el trabajo cuando varias personas participan o cuando una tarea se repite.\n\nUsar una buena base ahorra tiempo y mejora consistencia.',
    details: 'Ideas clave:\n• Documentos compartidos en la nube.\n• Historial de versiones.\n• Comentarios y sugerencias.\n• Plantillas para CV, actas, presupuestos o presentaciones.',
    pros: ['Ahorra tiempo y evita empezar de cero.', 'Facilita trabajo en equipo.', 'Permite revisar cambios y comentar sin perder versiones.'],
    cons: ['Sin orden, varias personas pueden pisarse cambios.', 'No todas las plantillas son de calidad.', 'Compartir sin revisar permisos genera problemas.'],
    examples: 'Ejemplo real: una presentacion compartida entre varios miembros del grupo o un presupuesto hecho a partir de plantilla.',
    tips: ['Revisa permisos antes de compartir.', 'Usa nombres claros y versionado cuando haga falta.', 'Las plantillas deben adaptarse, no copiarse sin pensar.'],
  },
};

export const officeTaskSuggestions = {
  cv: { tool: 'Procesador de texto', why: 'Es la mejor opcion para redactar y dar formato a un CV profesional.' },
  budget: { tool: 'Hoja de calculo', why: 'Permite sumar, ordenar y comparar cifras con facilidad.' },
  slides: { tool: 'Presentacion', why: 'Ayuda a explicar ideas con estructura visual y apoyo para una exposicion.' },
};

export const officeWorkspaceViews = {
  text_docs: {
    title: 'Procesador de texto',
    subtitle: 'Documento editable con estructura clara',
    accent: 'sky',
    zones: [
      { id: 'toolbar', label: 'Barra superior', heading: 'Formato y estilos', text: 'Aqui eliges fuente, tamaño, negrita, alineacion y estilos para mantener el documento ordenado.' },
      { id: 'page', label: 'Pagina', heading: 'Zona de escritura', text: 'Es el espacio principal para redactar cartas, trabajos, solicitudes o un CV.' },
      { id: 'sidebar', label: 'Panel lateral', heading: 'Esquema y comentarios', text: 'Sirve para navegar por titulos, revisar cambios o ver observaciones.' },
      { id: 'export', label: 'Exportar', heading: 'Salida final', text: 'Cuando el documento ya esta cerrado, lo conviertes en PDF o lo compartes.' },
    ],
  },
  spreadsheets: {
    title: 'Hoja de calculo',
    subtitle: 'Datos, celdas y formulas',
    accent: 'emerald',
    zones: [
      { id: 'formula', label: 'Barra de formulas', heading: 'Calculo rapido', text: 'Aqui escribes operaciones y referencias entre celdas para automatizar resultados.' },
      { id: 'grid', label: 'Cuadricula', heading: 'Datos en filas y columnas', text: 'La tabla ayuda a ordenar gastos, inventarios, notas o seguimiento de tareas.' },
      { id: 'filters', label: 'Filtros', heading: 'Analisis', text: 'Los filtros permiten ver solo una parte de la tabla sin perder el conjunto.' },
      { id: 'chart', label: 'Grafico', heading: 'Lectura visual', text: 'Un grafico convierte los numeros en una imagen facil de explicar y comparar.' },
    ],
  },
  presentations_tools: {
    title: 'Presentacion',
    subtitle: 'Diapositivas para exponer ideas',
    accent: 'violet',
    zones: [
      { id: 'slides', label: 'Miniaturas', heading: 'Secuencia de la exposicion', text: 'Sirven para ordenar el discurso visual y ver la estructura general.' },
      { id: 'canvas', label: 'Diapositiva', heading: 'Lienzo principal', text: 'Aqui se colocan titulares, imagenes, graficos y mensajes clave.' },
      { id: 'notes', label: 'Notas', heading: 'Apoyo al presentador', text: 'Permiten preparar recordatorios sin llenar la diapositiva de texto.' },
      { id: 'show', label: 'Presentar', heading: 'Modo exposicion', text: 'Es la salida final para mostrar el contenido en clase, reunion o defensa.' },
    ],
  },
  pdf_export: {
    title: 'PDF y exportacion',
    subtitle: 'Documento final para compartir',
    accent: 'amber',
    zones: [
      { id: 'source', label: 'Archivo fuente', heading: 'Documento editable', text: 'Antes de exportar conviene revisar contenido, paginas y nombres de archivo.' },
      { id: 'settings', label: 'Ajustes', heading: 'Calidad y formato', text: 'Aqui eliges paginas, compresion, calidad y opciones del PDF final.' },
      { id: 'preview', label: 'Vista previa', heading: 'Comprobacion', text: 'Permite confirmar que el aspecto del documento sigue siendo correcto.' },
      { id: 'share', label: 'Compartir', heading: 'Entrega', text: 'Despues de exportar se adjunta o comparte con menos riesgo de cambios accidentales.' },
    ],
  },
  collaboration_templates: {
    title: 'Colaboracion y plantillas',
    subtitle: 'Trabajo compartido y bases reutilizables',
    accent: 'indigo',
    zones: [
      { id: 'members', label: 'Equipo', heading: 'Personas conectadas', text: 'Muestra quien esta editando para coordinarse mejor y evitar solapamientos.' },
      { id: 'comments', label: 'Comentarios', heading: 'Revision guiada', text: 'Sirven para proponer cambios o correcciones sin tocar el texto principal.' },
      { id: 'template', label: 'Plantilla', heading: 'Estructura base', text: 'Una plantilla bien elegida acelera mucho tareas repetitivas como CV, actas o presupuestos.' },
      { id: 'permissions', label: 'Permisos', heading: 'Control de acceso', text: 'Antes de compartir hay que decidir quien edita, comentarios o solo visualiza.' },
    ],
  },
};

export const officeQuizItems = [
  { id: 'office-1', prompt: 'Quieres preparar un presupuesto mensual con sumas y columnas.', answer: 'spreadsheets', explanation: 'La hoja de calculo es la herramienta adecuada para datos numericos y formulas.' },
  { id: 'office-2', prompt: 'Necesitas exponer un proyecto de forma visual en clase.', answer: 'presentations_tools', explanation: 'Una presentacion ordena ideas visuales para explicar un tema ante otras personas.' },
  { id: 'office-3', prompt: 'Vas a enviar un CV final para una candidatura.', answer: 'pdf_export', explanation: 'Conviene cerrar el documento y exportarlo a PDF para mantener el formato estable.' },
];