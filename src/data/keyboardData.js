import { Keyboard, Search, FileText, Globe, Monitor } from 'lucide-react';

export const keyboardData = {
  shortcut_basics: {
    id: 'shortcut_basics', name: 'Atajos Base', category: 'Fundamentos del Teclado', icon: Keyboard, color: 'indigo',
    desc: 'Los atajos de teclado son combinaciones de teclas que permiten ejecutar acciones sin apartar las manos del teclado. Reducen clics, aceleran tareas repetitivas y ayudan a desarrollar memoria muscular digital.\n\nLa idea no es memorizarlo todo en un dia, sino dominar primero un pequeno grupo de comandos que se repiten constantemente en clase, en oficina y al navegar.',
    details: 'Formula general:\n• Ctrl: Activa la mayoria de comandos de accion en Windows.\n• Shift: Modifica el comportamiento para ampliar, seleccionar o invertir.\n• Alt: Accede a funciones secundarias o menus.\n• La practica diaria convierte el atajo en habito y reduce errores.',
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
    details: 'Patrones utiles:\n• Ctrl + F: Busca informacion dentro de la pagina o documento actual.\n• Tab y Shift + Tab: Saltan entre campos de un formulario.\n• Ctrl + A: Selecciona todo el contenido activo.\n• Inicio / Fin: Van al principio o al final de la linea o del bloque segun la app.',
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
    details: 'Combinaciones frecuentes:\n• Ctrl + B: Negrita en muchos editores.\n• Ctrl + I: Cursiva.\n• Ctrl + Y: Rehacer lo que acabas de deshacer.\n• Ctrl + Retroceso: Borra la palabra anterior en muchos entornos.',
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
    details: 'Atajos recomendados:\n• Ctrl + T: Nueva pestana.\n• Ctrl + W: Cierra la pestana actual.\n• Ctrl + L: Situa el foco en la barra de direcciones.\n• Ctrl + Shift + T: Recupera la ultima pestana cerrada.',
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
    desc: 'La productividad moderna depende de poder alternar entre aplicaciones, organizar ventanas y capturar contenido sin caos. Este bloque ensena combinaciones utiles para el sistema operativo y la multitarea.\n\nSon atajos muy valiosos para clases online, trabajo administrativo y preparacion de materiales.',
    details: 'Comandos destacados:\n• Alt + Tab: Cambia entre ventanas abiertas.\n• Win + Shift + S: Herramienta de recorte en Windows.\n• Win + Flechas: Ajusta la ventana a los lados o maximiza.\n• Ctrl + Shift + Esc: Abre el Administrador de tareas.',
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

export const keyboardLayout = [
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