import { Keyboard, Monitor, Usb, HardDrive } from 'lucide-react';

export const peripheralData = {
  input_devices: {
    id: 'input_devices', name: 'Perifericos de Entrada', category: 'Entrada de informacion', icon: Keyboard, color: 'blue',
    desc: 'Los perifericos de entrada permiten introducir informacion en el ordenador. Son el puente entre la accion humana y el sistema digital.\n\nCada vez que escribes, haces clic, hablas al microfono o escaneas un documento, estas enviando datos desde el exterior hacia el equipo.',
    details: 'Ejemplos habituales:\n• Teclado: Introduce texto, numeros y comandos.\n• Raton: Señala, selecciona y ejecuta acciones visuales.\n• Microfono: Convierte voz o sonido en informacion digital.\n• Escaner: Digitaliza documentos e imagenes para trabajarlos en pantalla.',
    pros: [
      'Permiten controlar el equipo con precision y comodidad.',
      'Son la base de la interaccion diaria en oficina, aula o casa.',
      'Existen modelos adaptados a accesibilidad y necesidades concretas.'
    ],
    cons: [
      'Su ergonomia influye mucho en la fatiga y la postura.',
      'Un mal dispositivo de entrada puede ralentizar el trabajo y generar errores.',
      'Algunos requieren configuracion o drivers especificos para rendir bien.'
    ],
    examples: 'Casos reales: redactar un trabajo con teclado, manejar una presentacion con el raton, grabar una clase con microfono o escanear formularios en administracion.',
  },
  output_devices: {
    id: 'output_devices', name: 'Perifericos de Salida', category: 'Salida de informacion', icon: Monitor, color: 'emerald',
    desc: 'Los perifericos de salida muestran o reproducen la informacion que procesa el ordenador. Son la forma en la que el sistema devuelve resultados al usuario.\n\nSin ellos, el equipo puede trabajar internamente, pero el usuario no podria ver, escuchar ni interpretar facilmente lo que ocurre.',
    details: 'Ejemplos clave:\n• Monitor o pantalla: Muestra imagenes, interfaces y documentos.\n• Altavoces y auriculares: Reproducen sonido, avisos, musica o clases.\n• Impresora: Transforma contenido digital en papel.\n• Proyector: Amplia la salida visual para grupos o aulas.',
    pros: [
      'Hacen visible y comprensible la informacion procesada.',
      'Permiten adaptar la experiencia a lectura, audio o presentacion.',
      'Son esenciales para formacion, trabajo administrativo y multimedia.'
    ],
    cons: [
      'Una mala calidad de pantalla o sonido afecta mucho a la comprension.',
      'Algunos consumen bastante energia o espacio.',
      'Pueden requerir calibracion, volumen o configuracion especifica.'
    ],
    examples: 'Ejemplos: leer una web en el monitor, escuchar una videoclase con auriculares o imprimir un documento final para entregarlo.',
  },
  io_devices: {
    id: 'io_devices', name: 'Entrada y Salida', category: 'Intercambio bidireccional', icon: Usb, color: 'purple',
    desc: 'Hay perifericos que no se limitan a una sola direccion de informacion. Algunos envian y reciben datos, o permiten una comunicacion continua entre usuario y equipo.\n\nEste grupo es importante porque refleja que muchos dispositivos modernos cumplen varias funciones a la vez.',
    details: 'Ejemplos mixtos:\n• Pantalla tactil: Muestra informacion y tambien recibe pulsaciones.\n• Cascos con microfono: Reproducen sonido y capturan voz.\n• Impresora multifuncion: Imprime, escanea y a veces copia o envia documentos.\n• Mandos y tabletas digitalizadoras: Reciben accion del usuario y devuelven respuesta visual.',
    pros: [
      'Reducen equipos separados al combinar varias funciones.',
      'Mejoran la fluidez en videollamadas, aulas digitales y puestos compactos.',
      'Son muy utiles en movilidad y entornos hibridos.'
    ],
    cons: [
      'Pueden ser mas caros o mas complejos de configurar.',
      'Si fallan, se pierden varias funciones de golpe.',
      'A veces dependen mas de drivers o compatibilidad del sistema.'
    ],
    examples: 'Uso comun: dar clase con un portatil y auriculares con microfono, trabajar con una pantalla tactil o usar una impresora multifuncion en oficina.',
  },
  connectivity_devices: {
    id: 'connectivity_devices', name: 'Almacenamiento y Conexion', category: 'Transferencia de datos', icon: HardDrive, color: 'amber',
    desc: 'Otros perifericos se centran en mover, guardar o transportar informacion entre dispositivos. Aunque a veces pasan desapercibidos, son claves para copia de seguridad, movilidad y ampliacion de capacidades.\n\nAqui entran dispositivos que conectas al equipo para intercambiar datos o ampliar sus posibilidades.',
    details: 'Ejemplos utiles:\n• Pendrive USB: Transporta archivos entre equipos.\n• Disco duro externo: Guarda copias y archivos pesados.\n• Tarjetas SD y lectores: Usados en camaras, moviles y portatiles.\n• Docking stations y hubs: Añaden puertos y conexiones a un solo equipo.',
    pros: [
      'Facilitan copias de seguridad y trabajo en movilidad.',
      'Permiten ampliar almacenamiento o puertos rapidamente.',
      'Son muy utiles para compartir archivos grandes o conectar varios accesorios.'
    ],
    cons: [
      'Si no se expulsan bien, se pueden corromper datos.',
      'Unidades baratas pueden ser lentas o poco fiables.',
      'Transportar informacion externa implica riesgos de perdida o malware.'
    ],
    examples: 'Situaciones frecuentes: pasar fotos de una camara, llevar trabajos en USB, conectar varios perifericos a un portatil o guardar una copia externa del aula.',
  },
};