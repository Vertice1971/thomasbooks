// 16-mantenimiento-de-transformadores.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué es el análisis de gases disueltos (DGA) en aceite de transformadores?",
    correcta: "Una técnica diagnóstica crítica que detecta fallos internos (arcos, sobrecalentamientos) analizando la concentración y tipo de gases generados por la descomposición del aceite",
    incorrectas: [
      "Medir la cantidad de aire que entra por el respiradero",
      "Analizar el humo del escape de un generador diesel"
    ]
  },
  {
    enunciado: "¿Qué indica la presencia de acetileno en el aceite dieléctrico?",
    correcta: "Existencia de arcos eléctricos de alta energía en el interior del transformador",
    incorrectas: [
      "Simplemente un envejecimiento normal del aceite",
      "Entrada de humedad por una junta"
    ]
  },
  {
    enunciado: "¿Para qué sirve el deshumidificador de silicagel (respiradero) en un transformador?",
    correcta: "Para secar el aire que entra en el depósito de expansión cuando el aceite se contrae al enfriarse, evitando que la humedad degrade el dieléctrico",
    incorrectas: [
      "Para filtrar el polvo del aire de refrigeración de los radiadores",
      "Para añadir silicona al aceite automáticamente"
    ]
  },
  {
    enunciado: "¿De qué color se vuelve la silicagel convencional cuando está saturada de humedad?",
    correcta: "Rosa o transparente (dependiendo del tipo, el naranja vira a verde/blanco, el azul a rosa), indicando que debe ser sustituida o regenerada",
    incorrectas: [
      "Azul intenso siempre",
      "Negro carbón"
    ]
  },
  {
    enunciado: "¿Qué mide la rigidez dieléctrica del aceite (Ensayo de ruptura)?",
    correcta: "La tensión máxima (en kV) que soporta el aceite entre dos electrodos sumergidos antes de que salte un arco (típicamente >30-50 kV según norma)",
    incorrectas: [
      "La viscosidad del aceite para fluir por los radiadores",
      "La resistencia óhmica del cobre"
    ]
  },
  {
    enunciado: "¿Qué es la termografía infrarroja en el mantenimiento de transformadores?",
    correcta: "Una inspección no invasiva que detecta puntos calientes en bornas, conexiones y cuba, indicando malos contactos o bloqueos de refrigeración",
    incorrectas: [
      "Una radiografía con rayos X para ver el núcleo",
      "Medir la temperatura ambiente con un termómetro de mercurio"
    ]
  },
  {
    enunciado: "¿Qué función tiene el relé Buchholz?",
    correcta: "Detectar acumulación de gas (alarma) o flujos violentos de aceite (disparo) debidos a fallos internos en transformadores con conservador",
    incorrectas: [
      "Controlar la tensión de salida del secundario",
      "Proteger contra sobrecargas externas midiendo la corriente"
    ]
  },
  {
    enunciado: "¿Qué mantenimiento requieren los radiadores de refrigeración?",
    correcta: "Limpieza periódica para eliminar suciedad/polvo que reduzca la transferencia de calor y revisión de fugas de aceite",
    incorrectas: [
      "Pintarlos con pintura aislante térmica",
      "Llenarlos de agua refrigerante"
    ]
  },
  {
    enunciado: "¿Qué indica un índice de acidez alto (número de neutralización) en el aceite?",
    correcta: "Oxidación y envejecimiento del aceite, que puede llevar a la formación de lodos que obstruyen la refrigeración",
    incorrectas: [
      "Que el aceite es muy nuevo y puro",
      "Que ha entrado agua de lluvia"
    ]
  },
  {
    enunciado: "¿Qué es el factor de potencia (tangente delta) del aislamiento?",
    correcta: "Una medida de las pérdidas dieléctricas en el aislamiento; un aumento indica deterioro, humedad o contaminación",
    incorrectas: [
      "El coseno de fi de la carga conectada",
      "La potencia del motor del ventilador"
    ]
  },
  {
    enunciado: "¿Qué se debe hacer si se detecta una fuga de aceite en una junta?",
    correcta: "Apostar (apretar) los tornillos si es posible o sustituir la junta, reponiendo el nivel de aceite y tratando el vertido como residuo peligroso",
    incorrectas: [
      "Poner un cubo debajo y devolver el aceite al tanque periódicamente",
      "Sellar con cinta aislante por fuera"
    ]
  },
  {
    enunciado: "¿Por qué es crítico el nivel de aceite en el aislador (borna) de alta tensión?",
    correcta: "Porque si baja, el aislamiento interno puede fallar y provocar una explosión de la borna",
    incorrectas: [
      "Porque pesa menos y puede venirse abajo",
      "No es importante, solo importa el nivel de la cuba principal"
    ]
  },
  {
    enunciado: "¿Qué es el 'tratamiento de aceite' o filtrado?",
    correcta: "Un proceso de recirculación del aceite a través de una máquina que lo calienta, filtra y desgasifica al vacío para eliminar humedad, gases y partículas",
    incorrectas: [
      "Mezclar el aceite con aditivos de motor de coche",
      "Hervir el aceite en una olla abierta"
    ]
  },
  {
    enunciado: "¿Qué son los PCBs (Policlorobifenilos) en transformadores antiguos?",
    correcta: "Compuestos tóxicos y persistentes (Askareles) usados antiguamente como dieléctrico, que requieren gestión especial de residuos y eliminación obligatoria",
    incorrectas: [
      "Placas de Circuito Basico de control",
      "Protecciones Corto-Breves"
    ]
  },
  {
    enunciado: "¿Qué verifica el análisis de furanos en el aceite?",
    correcta: "El grado de degradación (despolimerización) del papel aislante de los bobinados, estimando la vida útil remanente del transformador",
    incorrectas: [
      "La presencia de plagas de insectos en el aceite",
      "La cantidad de furia del transformador"
    ]
  },
  {
    enunciado: "¿Qué mantenimiento requiere un conmutador de tomas en carga (OLTC)?",
    correcta: "Es crítico: revisión del aceite del compartimento del conmutador (que se carboniza por los arcos de conmutación) y desgaste de contactos, o filtrado online",
    incorrectas: [
      "Ninguno, es un elemento estático sin partes móviles",
      "Engrasarlo con grasa de litio convencional"
    ]
  },
  {
    enunciado: "¿Qué se comprueba en la puesta a tierra del transformador?",
    correcta: "La continuidad y el valor de resistencia de paso a tierra de la cuba y el neutro, vital para la seguridad y operación de protecciones",
    incorrectas: [
      "Que el cable sea de color rojo",
      "Que la piqueta esté pintada de amarillo"
    ]
  },
  {
    enunciado: "¿Qué riesgo tiene tomar una muestra de aceite incorrectamente?",
    correcta: "Introducir humedad o aire en la muestra (falso negativo/positivo) o permitir la entrada de burbujas al transformador en funcionamiento (peligroso)",
    incorrectas: [
      "Mancharse las manos es el único riesgo",
      "Bajar demasiado el nivel del aceite con solo 1 litro"
    ]
  },
  {
    enunciado: "¿Qué significa que un transformador tenga refrigeración forzada (OFAF)?",
    correcta: "Que tiene bombas para circular el aceite y ventiladores para forzar el aire en los radiadores, aumentando su capacidad de carga",
    incorrectas: [
      "Que está sumergido en una piscina",
      "Que se enfría con hielo seco"
    ]
  },
  {
    enunciado: "¿Qué indica un ruido excesivo o vibración anormal en un transformador?",
    correcta: "Posible aflojamiento del prensado del núcleo, resonancia mecánica o sobreexcitación (tensión más alta de la nominal)",
    incorrectas: [
      "Que está funcionando a plena potencia y es bueno",
      "Que el aceite está hirviendo"
    ]
  },
  {
    enunciado: "¿Qué es la tensión interfacial del aceite?",
    correcta: "Una medida de la presencia de contaminantes polares (productos de oxidación) disueltos en el aceite; baja tensión indica aceite degradado",
    incorrectas: [
      "La tensión entre la fase y la cara del operario",
      "La tensión superficial del agua sobre el aceite"
    ]
  },
  {
    enunciado: "¿Cuándo se debe realizar un análisis de aceite?",
    correcta: "Periódicamente (ej. anualmente) y siempre después de un evento de falla o disparo de protecciones",
    incorrectas: [
      "Solo cuando el transformador explota",
      "Cada 50 años"
    ]
  },
  {
    enunciado: "¿Qué limpieza es esencial en transformadores secos encapsulados?",
    correcta: "Aspirado de polvo acumulado en los canales de ventilación de las bobinas, que reduce la refrigeración y puede causar descargas superficiales",
    incorrectas: [
      "Lavarlos con manguera a presión con agua",
      "Lijar la resina para que brille"
    ]
  },
  {
    enunciado: "¿Qué es la protección de sobrepresión súbita (Relé de presión súbita)?",
    correcta: "Un dispositivo que detecta aumentos muy rápidos de presión interna (típicos de cortos graves) y dispara antes que el Buchholz por gas",
    incorrectas: [
      "Una válvula para hinchar las ruedas del transformador",
      "Un sensor meteorológico de borrascas"
    ]
  },
  {
    enunciado: "¿Qué mantenimiento requieren los ventiladores de refrigeración?",
    correcta: "Verificar su funcionamiento, sentido de giro, ruido de rodamientos y limpieza de aspas",
    incorrectas: [
      "Cambiarles el aceite del motor cada mes",
      "Pintarlos de rojo para que giren más rápido"
    ]
  },
  {
    enunciado: "¿Qué es el contenido de agua (humedad) ppm en el aceite?",
    correcta: "Partes por millón de agua. Valores altos (>20-30 ppm según tensión) reducen drásticamente la rigidez dieléctrica y requieren secado",
    incorrectas: [
      "Partes por mil de aceite en el agua",
      "Potencia por metro de aceite"
    ]
  },
  {
    enunciado: "¿Por qué no se debe pintar un aislador de porcelana o vidrio?",
    correcta: "Porque la pintura puede ser conductora o degradarse, facilitando el camino de fuga superficial (flashover) y ocultando grietas",
    incorrectas: [
      "Porque queda feo estéticamente",
      "Porque la pintura disuelve la porcelana"
    ]
  },
  {
    enunciado: "¿Qué es la termometría (termómetro de imagen térmica) de la cuba?",
    correcta: "Monitorizar la temperatura del aceite superior (top oil) y del bobinado (imagen térmica) para controlar ventiladores y disparar alarmas",
    incorrectas: [
      "Hacer fotos artísticas del transformador",
      "Medir la temperatura del operario"
    ]
  },
  {
    enunciado: "¿Qué precaución hay que tener al rellenar aceite (top-up)?",
    correcta: "Usar aceite del mismo tipo y marca (o compatible certificado), nuevo, seco y filtrado, evitando introducir aire",
    incorrectas: [
      "Usar aceite de cocina si es urgente",
      "Echarlo rápido para acabar pronto"
    ]
  },
  {
    enunciado: "¿Qué indica un color oscuro en el aceite visualmente?",
    correcta: "Generalmente oxidación avanzada y presencia de carbonilla o lodos",
    incorrectas: [
      "Que es aceite de 'pata negra' de mejor calidad",
      "Que está muy frío"
    ]
  },
  {
    enunciado: "¿Qué es el cubeto de retención de aceite?",
    correcta: "Un foso estanco bajo el transformador capaz de retener todo el volumen de aceite en caso de fuga masiva, evitando contaminación ambiental",
    incorrectas: [
      "La papelera para tirar los trapos sucios",
      "El depósito de agua de incendios"
    ]
  },
  {
    enunciado: "¿Qué son los descargadores o pararrayos en la entrada de MT?",
    correcta: "Dispositivos de protección (varistores ZnO) que derivan a tierra las sobretensiones transitorias protegiendo el aislamiento del trafo",
    incorrectas: [
      "Antenas para comunicar con la central",
      "Pararrayos para atraer rayos a propósito"
    ]
  },
  {
    enunciado: "¿Qué comprobación visual se hace en los aisladores?",
    correcta: "Buscar roturas, grietas o suciedad excesiva (contaminación salina/industrial) que pueda provocar contorneo",
    incorrectas: [
      "Ver si giran libremente",
      "Comprobar si tienen luz interior"
    ]
  },
  {
    enunciado: "¿Qué se hace con un transformador que ha sufrido una sobrecarga severa prolongada?",
    correcta: "Realizar una revisión completa incluyendo análisis de aceite y medición de resistencias de bobinado antes de volver a confiar en él",
    incorrectas: [
      "Nada, si sigue funcionando está bien",
      "Echarle hielo por encima"
    ]
  },
  {
    enunciado: "¿Por qué es importante apretar las conexiones de bornas al par especificado?",
    correcta: "Para evitar puntos calientes por resistencia de contacto, que pueden fundir la borna y causar incendio",
    incorrectas: [
      "Para demostrar fuerza física",
      "Para que no las roben"
    ]
  }
];
