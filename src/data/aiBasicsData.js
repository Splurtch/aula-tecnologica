import { Brain, Database, Terminal, Zap, AlertTriangle, ShieldCheck } from 'lucide-react';

export const aiBasicsData = {
  what_is_llm: {
    id: 'what_is_llm', name: 'Que es un LLM', category: 'Fundamentos', icon: Brain, color: 'emerald',
    desc: 'Un LLM (Large Language Model) o Modelo de Lenguaje a Gran Escala es un sistema de inteligencia artificial entrenado con cantidades masivas de texto.\n\nEstos modelos aprenden patrones del lenguaje humano: gramatica, conceptos, relaciones entre palabras y hasta cierto razonamiento. Cuando le escribes algo, predice que palabra viene a continuacion basandose en todo lo que ha aprendido.',
    details: 'Conceptos clave:\n• Parpmetro: Los modelos tienen "neuronas" organizadas en capas. Cuantos mas parametros, mas capacidad de aprender patrones complejos. GPT-4 se estima en ~1.76 billones de parametros.\n• Entrenamiento: El modelo lee miles de millones de paginas web, libros y articulos. Aprende probabilidades: dada una frase, que palabra viene mejor despues.\n• In-context learning: Puede resolver tareas sin reentrenamiento, simplemente recibes ejemplos en tu mensaje.',
    pros: ['Versatilidad extraordinaria: un solo modelo puede escribir, traducir, razonar y crear.', 'Accesibilidad: cualquiera puede usar modelos potentes desde cualquier navegador.', 'Mejora continua: los nuevos modelos son significativamente mas capaces.'],
    cons: ['No piensa como un humano: predice texto statisticamente, no razona con certeza.', 'Alucinaciones: puede inventarse datos o referencias que suenan plausibles.', 'Consumo energetico enorme: entrenar estos modelos requiere recursos masivos.'],
    examples: 'Cuando preguntas a ChatGPT sobre un tema historico, no esta "recordando" de una base de datos. Esta prediciendo frase por frase lo que un humano escribiria sobre ese tema.',
    tips: ['Los LLM son mejores en tareas bien definidas y con contexto claro.', 'No son bases de datos: pueden equivocarce y inventar informacion.', 'La calidad de la entrada (prompt) influye muchisimo en la calidad de la salida.']
  },
  context_window: {
    id: 'context_window', name: 'Ventana de Contexto', category: 'Fundamentos', icon: Database, color: 'blue',
    desc: 'La ventana de contexto es la cantidad de texto que un LLM puede procesar en una unica interaccion. Incluye tanto tu mensaje como todo el historial de la conversacion.\n\nPiensa en ello como la "memoria a corto plazo" del modelo: todo lo que esta fuera de esa ventana, simplemente no existe para el.',
    details: 'Como funciona:\n• Tokens: El texto se divide en "tokens" (palabras o fragmentos de palabras). Un token suele ser ~4 caracteres en ingles o ~1-2 caracteres en español.\n• Limites: ChatGPT-4 tiene ~128k tokens (aprox. 100.000 palabras o 300 paginas). Claude puede llegar a 200k tokens.\n• Coste de contexto: procesar toda la ventana cada vez cuesta recursos. Por eso hay limites practicos.',
    pros: ['Ventanas grandes permiten analizar documentos enteros de una sentada.', 'El historial completo de conversacion permite seguimientos coherentes.', 'Puedes cargar libros, codigos largos o investigaciones enteras.'],
    cons: ['Contextos mas grandes consumen mas tokens y pueden diluir la atencion del modelo.', 'Informacion al inicio y al final de la ventana recibe menos atencion (especialmente al inicio).', 'Modelos pequenos tienen ventanas limitadas y no pueden manejar documentos extensos.'],
    examples: 'Si subes un PDF de 500 paginas a un LLM con ventana de 128k tokens, puede leerlo y responder preguntas sobre el. Pero no recordara documentos de conversaciones anteriores si cierras y abres chat.',
    tips: ['En conversaciones largas, resume periodicamente para mantener el contexto relevante.', 'Para documentos muy largos, usas herramientas especializadas como NotebookLM que optimizan la lectura.', 'La posicion de la informacion importa: pon datos criticos en medio de la ventana.']
  },
  prompt_engineering: {
    id: 'prompt_engineering', name: 'Prompt Engineering', category: 'Fundamentos', icon: Terminal, color: 'purple',
    desc: 'El prompt engineering es el arte de escribir instrucciones claras y efectivas para obtener los mejores resultados de un LLM.\n\nNo es solo "preguntar bien", es estructurar tu mensaje para que el modelo entienda exactamente que necesitas, en que formato y con que restricciones.',
    details: 'Tecnicas fundamentales:\n• Rol: "Actua como un experto en..." da contexto sobre que perspectiva esperas.\n• Formato: "Devuelveme una lista con 5 elementos, cada uno con titulo y descripcion de 2 lineas."\n• Constraints: "No incluyas numeros, no uses jerga tecnica, responde en espanol."\n• Few-shot: Dale ejemplos de lo que esperas para que entienda el patron.\n• Chain of thought: "Razona paso a paso" mejora resultados en problemas complejos.',
    pros: ['Un buen prompt puede duplicar la utilidad de una herramienta.', 'Ahorra tiempo al reducir iteraciones y pedidos de clarificacion.', 'Permite usar el mismo modelo para tareas muy diferentes con resultados optimizados.'],
    cons: ['Requiere practica: los primeros prompts suelen ser vagos o ambiguos.', 'Cada modelo responde diferente a las mismas tecnicas.', 'Depender mucho de tecnicas de prompting puede ser menos eficiente que usar modelos especializados.'],
    examples: '"Dame informacion sobre gatos" vs "Explícame en 3 parrafos las 3 razones principales por las que los gatos ronronean, incluyendo estudios cientificos recientes. Formato: titulo en negrita, texto normal." El segundo dara resultados mucho mas utiles.',
    tips: ['Sé especifico: en lugar de "resume", di "resume en 5 puntos clave".', 'Da contexto: si quieres un tono casual, dilo. Si quieres formal, especificalo.', 'Usa delimitadores como """ o --- para separar instrucciones de contenido.']
  },
  prompting_techniques: {
    id: 'prompting_techniques', name: 'Técnicas de Prompting', category: 'Fundamentos', icon: Zap, color: 'amber',
    desc: 'Existen tecnicas avanzadas que mejoran drásticamente los resultados. Estas van mas alla del simple prompt lineal y permiten структуруровать interacciones complejas.',
    details: 'Tecnicas clave:\n• Zero-shot: Sin ejemplos, solo la instruccion directa. Funciona bien para tareas comunes.\n• Few-shot: Con 2-3 ejemplos dentro del prompt. Ideal para tareas con formato especifico.\n• Chain of Thought (CoT): "Razona paso a paso" o "explica tu proceso". Mejora razonamiento logico.\n• Tree of Thoughts: Explora multiples ramas de razonamiento antes de responder.\n• Role prompting: "Eres un cardiologo con 20 años de experiencia..."\n• Constitutional AI: "Segun estos principios: [lista], evalua si tu respuesta los cumple."',
    pros: ['CoT mejora significativamente en matematicas y razonamiento logico.', 'Few-shot elimina la necesidad de ejemplos en instrucciones largas.', 'Role prompting mejora el tono y la pertinence de las respuestas.'],
    cons: ['Tecnicas como Tree of Thoughts usan mas tokens y son mas lentas.', 'No todas las tecnicas funcionan igual en todos los modelos.', 'Combinarlas excesivamente puede hacer el prompt ilegible.'],
    examples: 'CoT ejemplo: "Si un tren sale de Madrid a 80km/h y otro de Barcelona a 100km/h, y la distancia es 600km, ¿cuando se encuentran? Razona paso a paso." El modelo muestra su proceso antes de dar la respuesta final.',
    tips: ['Para tareas creativas: few-shot con ejemplos funciona mejor.', 'Para tareas analiticas: CoT ("razona paso a paso") mejora precision.', 'Para tareas de rol: combina con contexto especifico del area.']
  },
  hallucinations: {
    id: 'hallucinations', name: 'Alucinaciones', category: 'Limitaciones', icon: AlertTriangle, color: 'red',
    desc: 'Las alucinaciones son cuando un LLM genera informacion que suena plausible pero es incorrecta, inventada o no esta respaldada por sus datos de entrenamiento.\n\nNo es un bug que se pueda "arreglar" facilmente: es una consecuencia fundamental de como funcionan estos modelos (prediccion estadistica de texto).',
    details: 'Tipos de alucinaciones:\n• Confabulacion: El modelo inventa detalles especificos como nombres, fechas o cantidades.\n• Falsa autorrecidencia: Cita articulos, estudios o leyes que no existen.\n• Error de dominios: Mezcla conceptos de diferentes campos incorrectamente.\n• Sobreconfidence: Dice cosas falsas con total seguridad, sin mostrar duda.',
    pros: ['Conocer las alucinaciones te hace mas critico con las respuestas.', 'Modelos mas nuevos tienen tasas mas bajas de alucinacion.', 'Contexto y verificacion humana pueden mitigar el riesgo.'],
    cons: ['Pueden ser muy convincentes: el texto siempre suena seguro y bien escrito.', 'Dificiles de detectar sin conocimiento profundo del tema.', 'Peligrosas en areas criticas como medicina, derecho o finanzas.'],
    examples: 'Le preguntas por un articulo cientifico especifico y te da titulo, revista, DOI... todos inventados. O te explica una ley que nunca existio con articulos y todo.',
    tips: ['Siempre verifica datos criticos con fuentes externas.', 'Pide al modelo que cite fuentes y luego revisalas.', 'En areas especializadas, asume que puede estar equivocado hasta que lo confirmes.']
  },
  best_practices: {
    id: 'best_practices', name: 'Mejores Practicas', category: 'Aplicacion', icon: ShieldCheck, color: 'emerald',
    desc: 'Despues de entender el contexto y las limitaciones, estas son las practicas que te haran aprovechar al maximo cualquier LLM de forma segura y efectiva.',
    details: ' checklist de uso:\n• Claridad: Define que quieres, en que formato y con que restricciones.\n• Contexto: Dale toda la informacion relevante para tu tarea.\n• Iteracion: Si no te convence la respuesta, refinia y vuelve a preguntar.\n• Verificacion: Confirma datos criticos, especialmente enareas especializadas.\n•隐私: No compartas datos personales, contraseñas o informacion sensible.\n• Revisión: Lee siempre las salidas antes de usarlas. El modelo no tiene responsabilidad.',
    pros: ['Reduce errores y alucinaciones significativamente.', 'Ahorra tiempo al obtener resultados utiles desde el primer intento.', 'Permite usar IA como herramienta real de productividad, no solo curiosidad.'],
    cons: ['Requiere esfuerzo consciente, especialmente al principio.', 'Algunas tareas siguen siendo mas rapidas sin IA.', 'El exceso de confianza en IA puede reducir el pensamiento critico.'],
    examples: 'En lugar de "escribe un email", prueba "escribe un email profesional a mi profesor solicitando una extension del plazo de entrega por motivos de salud. Tono respetuoso pero firme. Maximo 150 palabras."',
    tips: ['Empieza siempre con un contexto claro y un rol si es relevante.', 'Usa delimitadores para separar instrucciones de contenido a procesar.', 'Cuando obtengas un mal resultado, analiza por que fallo y ajusta.']
  }
};