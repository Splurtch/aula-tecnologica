import { Cable, Globe } from 'lucide-react';

export const redBasicosData = {
  protocolos_ip: {
    id: 'protocolos_ip', name: 'Protocolos y Direcciones IP', category: 'Fundamentos de Red', icon: Cable, color: 'blue',
    desc: 'Internet se basa en "reglas del juego" llamadas protocolos. El más fundamental es TCP/IP, el idioma que hablan todos los dispositivos para comunicarse.\n\nUna dirección IP es como la dirección postal de tu dispositivo en la red. Permite que los datos lleguen al destino correcto.',
    pros: ['Identificación única: Cada dispositivo tiene una IP única, como un DNI.', 'Enrutamiento automático: Los routers dirigen paquetes sin intervención humana.', 'Escalabilidad: Funciona desde 3 hasta miles de millones de dispositivos.', 'Estandarización: TCP/IP es universal.'],
    cons: ['IPv4 agotado: Solo ~4.000 millones de direcciones, insuficiente para IoT.', 'Complejidad técnica: Subredes, puertas de enlace y máscaras pueden ser confusas.', 'Sin seguridad nativa: IP no incluye encriptación.'],
    examples: 'Cuando escribes google.com, un servidor DNS traduce a 142.250.80.46. Tu router envía el paquete hacia el ISP, que lo reenvía por la red troncal.',
    tips: ['IPv4 parece 192.168.1.1, IPv6 parece 2001:0db8...', 'En casa, tu IP privada suele empezar en 192.168.x.x', 'Para ver IP privada: ipconfig en Windows, ifconfig en Mac/Linux'],
  },
  dns_servidores: {
    id: 'dns_servidores', name: 'Sistema DNS', category: 'Traducción de Nombres', icon: Globe, color: 'purple',
    desc: 'DNS (Domain Name System) es como la "agenda telefónica de Internet". Traduce nombres legibles (google.com) a direcciones IP numéricas.\n\nSin DNS, tendrías que memorizar números como 142.250.80.46 para cada web.',
    pros: ['Facilidad de uso: No necesitamos recordar direcciones IP.', 'Caché inteligente: Guarda traducciones recientes para acelerar.', 'Balanceo de carga: Puede dirigirte al servidor más cercano.', 'Desacoplamiento: Empresas pueden cambiar IPs sin que lo notes.'],
    cons: ['Punto único de fallo: Si el DNS cae, no puedes navegar.', 'Ataques de envenenamiento: DNS spoofing puede redirigirte a webs falsas.', 'Censura: Los gobiernos pueden bloquear DNS.', 'Latencia adicional: Cada consulta DNS añade milisegundos.'],
    examples: 'Proceso: 1) Escribes midominio.es. 2) Tu PC pregunta al DNS. 3) Si no tiene caché, pregunta al DNS raíz. 4) Obtienes la IP finalmente.',
    tips: ['Si una web no carga, prueba DNS 8.8.8.8 (Google) o 1.1.1.1 (Cloudflare)', 'Flush DNS cache: ipconfig /flushdns en Windows', 'DNS público más rápido: Cloudflare 1.1.1.1'],
  },
  html_http_https: {
    id: 'html_http_https', name: 'La Web: HTML, HTTP y HTTPS', category: 'Tecnología Web', icon: Globe, color: 'emerald',
    desc: 'Cuando visitas una web, tu navegador descarga código HTML, lo interpreta y lo muestra. HTTP es el protocolo de comunicación; HTTPS es la versión encriptada con certificados TLS/SSL.\n\nHTTPS protege tus datos de oídos indiscretos.',
    pros: ['HTTP: Protocolo simple y eficiente para contenido público.', 'HTTPS: Encriptación que protege contraseñas y datos bancarios.', 'HTML: Estándar universal que funciona en cualquier dispositivo.', 'Certificados gratis: Let\'s Encrypt ofrece TLS gratuito.'],
    cons: ['HTTP sin cifrar: Cualquiera en la misma red puede espiar tu tráfico.', 'Certificados autofirmados: Dan error y no son de confianza.', 'Mezcla de contenido: Webs en HTTPS que cargan HTTP muestran avisos.', 'Complejidad técnica: Implementar HTTPS requiere configuración.'],
    examples: 'HTTP es como enviar postal sin sobre: cualquiera puede leerla. HTTPS es como meter la postal en un sobre sellado.',
    tips: ['Nunca introduzcas contraseñas en webs sin HTTPS (candado)', 'HTTP/3 (QUIC) es la nueva versión más rápida', 'HTTPS Everywhere redirecciona automáticamente a segura'],
  },
  hosting_dominio: {
    id: 'hosting_dominio', name: 'Hosting y Dominio', category: 'Infraestructura Web', icon: Globe, color: 'amber',
    desc: 'Para que una web esté en Internet necesitas: dominio (el nombre, como midominio.com) y hosting (el espacio donde viven los archivos, en un servidor).\n\nEl dominio es como el nombre de la tienda; el hosting es el local físico.',
    pros: ['Separación: Puedes cambiar hosting sin cambiar tu nombre.', 'Escalabilidad: Los servicios escalan según el tráfico.', 'Dominios baratos: .com/.es rondan 10-15€/año.', 'CDN global: Cloudflare acelera entrega desde servidores cercanos.'],
    cons: ['Coste variable: Hosting compartido ~5€/mes vs dedicado ~100€/mes.', 'Contratos a largo plazo: Muchos requieren pago anual.', 'Migraciones complicadas: Mover web grande puede ser técnico.', 'Proveedores cuestionables: Algunos sobrevenden servidores.'],
    examples: 'Stack: Dominio en Namecheap + Hosting en Cloudflare Pages (gratis para estáticos) + SSL de Let\'s Encrypt (gratis) = web pro por ~15$/año.',
    tips: ['Si usas WordPress, hosting especializado puede ser mejor', 'Cloudflare Pages ofrece hosting estático gratis con CDN', 'Verifica que el hosting incluye SSL antes de comprar'],
  },
};