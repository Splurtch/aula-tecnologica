import { Globe, Monitor, ShieldAlert, Search, AlertTriangle } from 'lucide-react';

export const navegadoresData = {
  chromeMozilla: {
    id: 'chromeMozilla', name: 'Google Chrome vs Mozilla Firefox', category: 'Comparativa de Navegadores', icon: Globe, color: 'blue',
    desc: 'Chrome y Firefox son los dos navegadores principales de código abierto. Chrome pertenece a Google; Firefox es de la fundación Mozilla sin fines de lucro.\n\nDiferencia clave: Firefox NO rastrea tu historial para vender publicidad. Firefox prioriza privacidad; Chrome prioriza integración con ecosistema Google.',
    pros: ['Chrome: Velocidad máxima, extensiones infinitas, sincronización con cuenta Google.', 'Firefox: Código abierto real, mejor privacidad, menor consumo de RAM.', 'Firefox: engine Gecko más respetuoso con estándares web.', 'Chrome: Mejor integración con servicios Google.'],
    cons: ['Chrome: Consumo alto de RAM (cada pestaña es proceso separado).', 'Chrome: Recopilación de datos de uso para Google.', 'Firefox: Menor cantidad de extensiones que Chrome.', 'Firefox: Algunos sitios optimizados solo para Chrome pueden tener problemas.'],
    examples: 'Usuario que vive en ecosistema Google → Chrome. Usuario preocupado por privacidad → Firefox.',
    tips: ['Instala ambos y usa cada uno para lo que mejor se adapte', 'En Firefox, about:config permite ajustes finos', 'Usa Ctrl+Shift+P para ventana privada en Chrome'],
  },
  edgeSafari: {
    id: 'edgeSafari', name: 'Microsoft Edge y Safari', category: 'Navegadores de Sistema', icon: Monitor, color: 'purple',
    desc: 'Edge es el navegador de Microsoft en Windows 10/11. Excelente rendimiento en batería, basado en Chromium, con integración Windows.\n\nSafari es exclusivo de Apple (macOS, iOS). Optimizado para batería, pero solo funciona en dispositivos Apple.',
    pros: ['Edge: Excelente rendimiento en batería vs Chrome.', 'Edge: Colecciones (guardar grupos de pestañas).', 'Safari: Optimización de batería líder en Macs.', 'Safari: Tracking prevention automático.'],
    cons: ['Edge: Preinstalado en Windows, ventaja pero no obligatorio.', 'Safari: Solo funciona en dispositivos Apple.', 'Edge: Colecciones son ecosistema Microsoft.', 'Safari: Algunas webs específicas para Chrome pueden no funcionar perfectamente.'],
    examples: 'MacBook Pro con 10 pestañas: Safari consume 3% CPU vs Chrome 12%. iPhone: Safari es obligatorio por App Store.',
    tips: ['En Windows, Edge es buena opción si Chrome consume demasiada RAM', 'En Mac, Safari + Bitwarden es combo privacidad+velocidad', 'iPhone/iPad: Safari es obligatorio por requisitos App Store'],
  },
  brave: {
    id: 'brave', name: 'Brave', category: 'Navegador Centrado en Privacidad', icon: ShieldAlert, color: 'amber',
    desc: 'Brave es un navegador creado por Brendan Eich (cofundador de Mozilla) que prioriza la privacidad radical del usuario por encima de todo.\n\nSu característica más innovadora es que bloquea automáticamente todos los anuncios y trackers de terceros, y además ofrece un sistema de "Brave Rewards" donde puedes ganar criptomonedas por ver anuncios respetuosos con tu privacidad.',
    pros: ['Bloqueo automático de anuncios y trackers (más rápido que Chrome).', 'Navegación privada activada por defecto.', 'Brave Rewards: gana criptotokens por ver publicidad opcional.', 'Integración de Tor en pestañas privadas para máxima anonimato.', 'Sincronización entre dispositivos cifrada de extremo a extremo.', 'Importa marcadores de Chrome/Firefox fácilmente.'],
    cons: ['Los Brave Rewards pueden resultar confusos al principio.', 'Algunos sitios web no cargan correctamente por el bloqueo agresivo de scripts.', 'El sistema de criptorecompensas es opcional y no muy intuitivo.', 'Menor cantidad de extensiones disponibles comparado con Chrome.', 'Consumo de batería algo mayor que Firefox en móviles.'],
    examples: 'Usuario que quiere máxima privacidad sin configuración manual → Brave. Periodista o investigador que necesita anonimato → Brave con Tor. Usuario cansado de rastreo publicitario → Brave con Rewards.',
    tips: ['Activa Brave Rewards en configuración para ganar Basic Attention Tokens (BAT).', 'Usa la pestaña Tor (ctrl+shift+n) para navegación completamente anónima.', 'Sincroniza tus dispositivos desde Ajustes > Sincronización para tener tus marcadores en todas partes.'],
  },
  busqueda_avanzada: {
    id: 'busqueda_avanzada', name: 'Búsqueda Avanzada y Operadores', category: 'Técnicas de Búsqueda', icon: Search, color: 'cyan',
    desc: 'La mayoría usa Google mal: escribe frases completas como si hablaran con humano. Los operadores booleanos filtran resultados.\n\nGoogle procesa ~3.500 millones de búsquedas/día. Saber buscar te separa del 99% que pierde tiempo.',
    pros: ['Comillas (""): Busca frase exacta, elimina ruido.', 'Guión (-): Excluye términos unwanted.', 'site: Limita a dominio específico (.gob.es, .edu.es).', 'filetype: Busca solo PDFs, DOCs específicos.'],
    cons: ['Sintaxis olvidadiza: Un error y no funciona.', 'No todos los motores soportan todos los operadores.', 'Google personaliza resultados basándose en historial.', 'Búsqueda por voz ha reducido uso de operadores.'],
    examples: '"becasMaster" site:gob.es filetype:pdf -2019 → Solo resultados oficiales PDFs, excluyendo archivos antiguos.',
    tips: ['Usa site:gob.es para información oficial fiable', 'Usa filetype:pdf para documentos específicos', 'Usa - para excluir palabras', 'Combina: "trabajo" "remoto" site:infojobs.net'],
  },
  fake_news: {
    id: 'fake_news', name: 'Detectar Fake News y Desinformación', category: 'Pensamiento Crítico Digital', icon: AlertTriangle, color: 'red',
    desc: 'La habilidad más valiosa no es encontrar información, sino verificar su autenticidad. Fake news están en todas partes.\n\nEl "cotejo" significa no creerte el primer resultado. Cruza con 2-3 fuentes fiables antes de dar algo por válido.',
    pros: ['Pensamiento crítico: Te hace consumidor inteligente.', 'Evita pánico innecesario: Muchas noticias virales son falsas.', 'Protege decisiones: Decisiones basadas en datos falsos llevan a errores.', 'Inmunidad emocional: No caer en manipulación.'],
    cons: ['Requiere esfuerzo: Verificar toma más tiempo.', 'Sesgo de confirmación: Tiendes a creer lo que ya crees.', 'Info que cambia: Lo cierto hoy puede ser falso mañana.', 'Sobrecarga: Verificar todo puede paralizar.'],
    examples: 'Red flags: URL rara (googIe.com con I mayúscula), sitio sin autor, fecha antigua presentada como actual, medio sensacionalista.',
    tips: ['Verifica URL completa: que sea el dominio real', 'Busca el mismo titular en medios conocidos', 'Check Date: muchas noticias falsas son reactivadas', 'Usa Snopes.com o Maldita.es para verificar'],
  },
};