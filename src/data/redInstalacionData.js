import { Gauge, Settings2, Radio, Network, Signal } from 'lucide-react';

export const redInstalacionData = {
  wifi_planning: {
    id: 'wifi_planning', name: 'Planificación de Red WiFi', category: 'Diseño de Red Doméstica', icon: Gauge, color: 'cyan',
    desc: 'Antes de comprar equipos o taladrar agujeros, una buena planificación te ahorra tiempo y dinero. Una red WiFi bien diseñada empieza en papel, no en el router.\n\nEl objetivo es cubrir toda tu casa con señal estable, minimizando zonas muertas y maximizando la velocidad en los puntos donde más la necesitas.',
    pros: ['Cobertura óptima: Un plano bien hecho evita puntos ciegos y repeticiones innecesarias.', 'Presupuesto realista: Saber qué equipos necesitas antes de comprar evita gastos inútiles.', 'Escalabilidad: Una red bien planificada permite añadir dispositivos sin problemas.', 'Resolución de problemas: Entender tu topología facilita diagnosticar fallos.'],
    cons: ['Dedicación inicial: Requiere tiempo dibujar el plano y calcular posiciones.', 'Factores externos: Las paredes de hormigón, espejos y otros routers vecinos pueden afectar.', 'Equipos limitados: Los routers básicos no pueden cubrir casas grandes sin repetidores.'],
    examples: 'Herramientas: NetSpot, WiFi Analyzer, Ekahau HeatMapper. Ejemplo: Casa de 120m² con tres plantas → 1 router central + 2 repetidores.',
    tips: ['Dibuja un plano a escala de tu casa', 'Identifica puntos donde necesitas más velocidad', 'Considera qué habitaciones tienen más paredes', 'Marca la posición del router principal'],
  },
  router_config: {
    id: 'router_config', name: 'Configuración del Router', category: 'Gestión de Dispositivos', icon: Settings2, color: 'blue',
    desc: 'El router es el cerebro de tu red doméstica. Recibe la señal de Internet del proveedor y la reparte entre todos tus dispositivos vía WiFi o cables Ethernet.\n\nAcceder a su panel (normalmente 192.168.1.1) permite cambiar nombre, contraseña, canal y crear red de invitados.',
    pros: ['Control total: Tú decides quién se conecta y cómo.', 'Seguridad: Cambiar la contraseña por defecto es el primer paso contra intrusiones.', 'Optimización: Elegir el canal menos congestionado mejora velocidad hasta 30%.', 'Red de invitados: Mantén visitas separadas de dispositivos principales.'],
    cons: ['Complejidad técnica: Los menús pueden ser abrumadores.', 'Riesgo de lockout: Cambiar ciertos parámetros sin saber puede dejarte sin Internet.', 'Actualizaciones: Firmware desactualizado puede tener vulnerabilidades.'],
    examples: 'Cambiar SSID a "MiCasa_WiFi", contraseña a frase larga segura, desactivar WPS (vulnerable), configurar canal 5GHz.',
    tips: ['Accede a 192.168.1.1 desde tu navegador', 'Busca pestaña "Wireless" o "WiFi Settings"', 'Usa frase como contraseña: "MiPerroY3Gat0s-2024"', 'Activa canal 5GHz si tus dispositivos lo soportan'],
  },
  wifi_bands: {
    id: 'wifi_bands', name: 'Bandas WiFi: 2.4GHz vs 5GHz', category: 'Frecuencias y Rendimiento', icon: Radio, color: 'purple',
    desc: 'Tu router emite en dos frecuencias diferentes. 2.4GHz es como carretera vecinal: más lenta pero llega más lejos y atraviesa paredes. 5GHz es como autopista: mucho más rápida pero con menos alcance.',
    pros: ['2.4GHz: Mayor alcance (~40m), mejor penetración a través de paredes.', '5GHz: Velocidades hasta 6Gbps teóricos, ideal para streaming 4K y gaming.', 'Doble banda: Routers modernos emiten ambas con el mismo nombre, cambiando automáticamente.'],
    cons: ['2.4GHz: Velocidad máx ~600Mbps, congestionada por vecinos y dispositivos.', '5GHz: Alcance reducido (~15m), señal debilitada por paredes gruesas.', 'Dispositivos antiguos: Algunos solo soportan 2.4GHz.'],
    examples: 'Estar en el salón con videollamada → conecta a 5GHz. Estar en el jardín leyendo → 2.4GHz es suficiente.',
    tips: ['Para streaming y gaming → 5GHz', 'Para dispositivos IoT (bombillas, sensores) → 2.4GHz', 'WiFi 6E y WiFi 7 añaden banda de 6GHz'],
  },
  mesh_network: {
    id: 'mesh_network', name: 'Sistemas WiFi Mesh (Mallada)', category: 'Soluciones de Cobertura', icon: Network, color: 'emerald',
    desc: 'Cuando un solo router no puede cubrir toda tu casa, los sistemas WiFi Mesh crean UNA SOLA RED que se extiende por toda la casa.\n\nFunciona con nodos que se hablan entre sí, creando una red única que automáticamente te conecta al nodo más cercano.',
    pros: ['Roaming Seamless: Te mueves por la casa sin cortes perceptibles.', 'Una sola red: No hay que reconectarse manualmente.', 'Autoconfiguración: Los nodos mesh se configuran solos.', 'Gestión centralizada: Una sola app controla todos los nodos.'],
    cons: ['Coste elevado: Sistema mesh de 3 nodos puede costar 150€-400€.', 'Rendimiento en borde: El último nodo puede tener menos velocidad.', 'Ecosistema cerrado: Suelen ser específicos de marca.'],
    examples: 'Para 200m² con 3 plantas → 3 nodos en configuración encadenada, uno por planta.',
    tips: ['Para casas de más de 150m² o varias plantas → considera mesh', 'Los nodos necesitan toma de corriente cerca', 'Coloca nodo principal cerca del router'],
  },
  speed_test: {
    id: 'speed_test', name: 'Diagnóstico y Test de Velocidad', category: 'Medición y Optimización', icon: Signal, color: 'amber',
    desc: 'Saber medir correctamente tu velocidad de Internet es esencial. Un test mide ancho de banda de descarga (Mbps), subida (Mbps) y ping (latencia).\n\nDiferencia: 8 megabits = 1 megabyte. Si descargas a 100Mbps, estás descargando ~12.5MB por segundo.',
    pros: ['Verificación de contrato: Comprueba que tu ISP te da la velocidad contratada.', 'Detección de problemas: Identifica dónde está el cuello de botella.', 'Optimización WiFi: Mide velocidad en diferentes habitaciones.', 'Gratuito: Speedtest.net, Fast.com, nperf.com son gratis y fiables.'],
    cons: ['Velocidad WiFi vs cable: Siempre habrá pérdida en WiFi (hasta 30%).', 'Congestión temporal: La velocidad puede caer en horas punta.', 'Servidor distante: La ubicación del servidor puede afectar resultados.'],
    examples: 'Diagnóstico: 1) Cable Ethernet directo al módem → 500Mbps. 2) WiFi 5GHz junto al router → 450Mbps. 3) WiFi en habitación lejana → 80Mbps → Necesitas mesh.',
    tips: ['Para test preciso: conecta por cable Ethernet', 'Cierra apps en segundo plano', 'Ping bajo (<30ms) es crítico para gaming'],
  },
};