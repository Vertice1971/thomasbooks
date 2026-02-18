// temarios/43-fuerzas-intermoleculares-y-efectos-sobre-propiedades-de-las-sustancias.js
var PREGUNTAS = [
  {
    enunciado: "¿Cómo se comparan, en orden de magnitud, las fuerzas intermoleculares con los enlaces covalentes o iónicos?",
    correcta: "Suelen ser uno o varios órdenes de magnitud más débiles que los enlaces covalentes o iónicos",
    incorrectas: [
      "Tienen magnitud comparable a un enlace covalente típico",
      "Son siempre más fuertes que un enlace iónico en sólidos"
    ]
  },
  {
    enunciado: "¿Qué describe cualitativamente el potencial de Lennard-Jones (12-6) entre dos moléculas apolares?",
    correcta: "Una repulsión muy intensa a corta distancia y una atracción por dispersión que decae como r⁻⁶",
    incorrectas: [
      "Una atracción lineal con la distancia y repulsión constante",
      "Solo interacción atractiva que crece con r²"
    ]
  },
  {
    enunciado: "¿Cuál es el origen físico de las fuerzas de dispersión (London)?",
    correcta: "Correlaciones cuánticas de dipolos instantáneos inducidos por fluctuaciones electrónicas",
    incorrectas: [
      "Atracción entre cargas fijas permanentes",
      "Intercambio de electrones enlazantes entre moléculas"
    ]
  },
  {
    enunciado: "¿De qué parámetros depende la intensidad de la dispersión London?",
    correcta: "De la polarizabilidad y el volumen/m masa molecular, aumentando con ambos",
    incorrectas: [
      "Solo de la temperatura del sistema",
      "Exclusivamente del momento dipolar permanente"
    ]
  },
  {
    enunciado: "Las interacciones dipolo-dipolo (Keesom) muestran, al promediar sobre rotaciones, una dependencia aproximada de:",
    correcta: "T⁻¹ (inversamente proporcional a la temperatura)",
    incorrectas: [
      "T (directamente proporcional a la temperatura)",
      "T⁰ (independiente de la temperatura)"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a las interacciones dipolo-inducido (Debye)?",
    correcta: "Un dipolo permanente induce un dipolo en una especie polarizable vecina",
    incorrectas: [
      "Dos dipolos permanentes se alinean rígidamente sin promediado",
      "Interacción puramente repulsiva entre dominios polares"
    ]
  },
  {
    enunciado: "¿Qué explica la fuerte solvatación de iones en agua?",
    correcta: "Interacciones ión-dipolo con orientación de los dipolos del solvente y capas de hidratación",
    incorrectas: [
      "Formación de enlaces covalentes permanentes ion-agua",
      "Exclusivamente fuerzas de dispersión apolares"
    ]
  },
  {
    enunciado: "¿Cuál es un criterio estructural de un puente de hidrógeno fuerte?",
    correcta: "Geometría casi lineal D–H···A y distancia H···A menor que la suma de radios de van der Waals",
    incorrectas: [
      "Ángulos muy cerrados D–H···A (<60°) y distancias mayores que van der Waals",
      "Ausencia de direccionalidad y distancias arbitrarias"
    ]
  },
  {
    enunciado: "¿Qué se entiende por cooperatividad en redes de puentes de hidrógeno (p. ej., en agua líquida)?",
    correcta: "La formación de un H-bond favorece la formación de otros próximos, reforzando la red",
    incorrectas: [
      "Cada puente de hidrógeno debilita a los vecinos inevitablemente",
      "No hay correlación entre puentes de hidrógeno en líquidos"
    ]
  },
  {
    enunciado: "La teoría DLVO para coloides combina dos contribuciones principales:",
    correcta: "Atracción de van der Waals y repulsión electrostática de doble capa",
    incorrectas: [
      "Atracción magnética y repulsión gravitatoria",
      "Interacciones covalentes y fuerzas nucleares fuertes"
    ]
  },
  {
    enunciado: "¿Qué es la longitud de Debye en una disolución electrolítica?",
    correcta: "La escala a la que se apantallan los campos eléctricos por los iones (espesor de la doble capa)",
    incorrectas: [
      "La distancia media entre moléculas de solvente",
      "La longitud de onda característica de vibraciones IR"
    ]
  },
  {
    enunciado: "La relación de Clausius-Mossotti conecta:",
    correcta: "La permitividad macroscópica con la polarizabilidad molecular",
    incorrectas: [
      "La viscosidad con la masa molar",
      "El calor específico con la conductividad térmica"
    ]
  },
  {
    enunciado: "El modelo de Kirkwood-Fröhlich se emplea para:",
    correcta: "Relacionar constante dieléctrica con correlaciones de dipolos en líquidos polares",
    incorrectas: [
      "Predecir únicamente tensiones superficiales de metales",
      "Calcular entalpías de formación de sales sólidas"
    ]
  },
  {
    enunciado: "Los parámetros de Hansen descomponen la solubilidad en tres contribuciones:",
    correcta: "Dispersión (δD), polar (δP) y puentes de hidrógeno (δH)",
    incorrectas: [
      "Masa molar, densidad y viscosidad",
      "Índice de refracción, punto de fusión y tensión superficial"
    ]
  },
  {
    enunciado: "La regla “lo semejante disuelve a lo semejante” implica que:",
    correcta: "Solventes polares tienden a disolver solutos polares; apolares a apolares",
    incorrectas: [
      "Solventes apolares disuelven preferentemente sales iónicas hidratadas",
      "La miscibilidad no depende de la polaridad relativa"
    ]
  },
  {
    enunciado: "En la serie de gases nobles, los puntos de ebullición aumentan con Z porque:",
    correcta: "Crece la polarizabilidad y las fuerzas de dispersión",
    incorrectas: [
      "Disminuye la masa atómica reduciendo el movimiento térmico",
      "Aparecen puentes de hidrógeno entre átomos nobles"
    ]
  },
  {
    enunciado: "El agua hierve a una temperatura anormalmente alta respecto a H₂S debido a:",
    correcta: "Una extensa red de puentes de hidrógeno entre moléculas de H₂O",
    incorrectas: [
      "Una masa molar menor que reduce la volatilidad",
      "Interacciones ión-dipolo permanentes entre moléculas neutras"
    ]
  },
  {
    enunciado: "¿Qué magnitud física mide la tensión superficial?",
    correcta: "Energía necesaria para aumentar el área de superficie de un líquido",
    incorrectas: [
      "Presión necesaria para hervir un líquido a 25 °C",
      "Trabajo para comprimir un gas a volumen constante"
    ]
  },
  {
    enunciado: "La ecuación de Young relaciona en una superficie sólida:",
    correcta: "Ángulo de contacto con las energías superficiales sólido-gas, sólido-líquido y líquido-gas",
    incorrectas: [
      "Tensión superficial con la densidad del sólido",
      "Viscosidad con la presión de vapor"
    ]
  },
  {
    enunciado: "Según la ley de Jurin, la altura de ascenso capilar h es proporcional a:",
    correcta: "La tensión superficial y cosθ, e inversamente al radio del capilar",
    incorrectas: [
      "El cuadrado del radio del capilar e inversamente a la tensión superficial",
      "La temperatura absoluta y el peso molecular"
    ]
  },
  {
    enunciado: "La viscosidad de líquidos asociados (con H-bond) frente a la temperatura suele:",
    correcta: "Disminuir con T y ser mayor que en líquidos de similar masa pero no asociados",
    incorrectas: [
      "Aumentar con T por rotura de puentes de hidrógeno",
      "Ser independiente de la temperatura"
    ]
  },
  {
    enunciado: "A igual fórmula, ¿qué efecto tiene la ramificación sobre el punto de ebullición de alcanos?",
    correcta: "Lo reduce por menor área de contacto y fuerzas de dispersión",
    incorrectas: [
      "Lo incrementa por mayor masa molar",
      "No lo modifica de forma apreciable"
    ]
  },
  {
    enunciado: "Un azeótropo aparece cuando:",
    correcta: "La mezcla líquida muestra desviaciones no ideales que igualan composiciones de líquido y vapor",
    incorrectas: [
      "Dos líquidos son totalmente inmiscibles a cualquier temperatura",
      "La mezcla obedece estrictamente a la ley de Raoult"
    ]
  },
  {
    enunciado: "El efecto salting-out (serie de Hofmeister) consiste en:",
    correcta: "Disminución de solubilidad de solutos orgánicos en presencia de ciertas sales",
    incorrectas: [
      "Aumento general de la solubilidad de cualquier soluto en agua",
      "Formación de enlaces covalentes entre soluto y sal"
    ]
  },
  {
    enunciado: "Por encima de la CMC, los tensioactivos en agua:",
    correcta: "Forman micelas que reducen aún más la tensión superficial y solubilizan apolares",
    incorrectas: [
      "Desaparecen de la interfase y aumentan la tensión superficial",
      "Forman enlaces iónicos permanentes con el disolvente"
    ]
  },
  {
    enunciado: "Una característica típica de los líquidos iónicos es:",
    correcta: "Baja presión de vapor y alta viscosidad por redes de interacciones coulombianas y H-bond",
    incorrectas: [
      "Altísima volatilidad y viscosidad muy baja",
      "Inexistencia de interacciones electrostáticas entre iones"
    ]
  },
  {
    enunciado: "¿Qué impulsa el efecto hidrofóbico en agua?",
    correcta: "Un aumento de entropía global al liberar agua estructurada cuando se agregan solutos apolares",
    incorrectas: [
      "La formación de enlaces covalentes entre solutos apolares",
      "Un descenso permanente de la entropía del sistema"
    ]
  },
  {
    enunciado: "El agua líquida presenta un máximo de densidad alrededor de 4 °C debido a:",
    correcta: "La competencia entre orden por H-bond y desorden térmico",
    incorrectas: [
      "La ionización total del agua a esa temperatura",
      "La rotura completa de todos los puentes de hidrógeno"
    ]
  },
  {
    enunciado: "El hielo es menos denso que el agua líquida porque:",
    correcta: "Su red tetraédrica abierta deja más huecos que el líquido",
    incorrectas: [
      "Contiene más moléculas por unidad de volumen",
      "No existen puentes de hidrógeno en el sólido"
    ]
  },
  {
    enunciado: "Los alcoholes muestran puntos de ebullición más altos que sus alcanos análogos por:",
    correcta: "La presencia de puentes de hidrógeno entre moléculas",
    incorrectas: [
      "Su menor polarizabilidad",
      "La ausencia de interacciones específicas"
    ]
  },
  {
    enunciado: "Las amidas suelen hervir a temperaturas elevadas porque:",
    correcta: "Pueden formar redes de H-bond como donoras y aceptoras potentes",
    incorrectas: [
      "Carecen de momento dipolar y no interaccionan",
      "Solo presentan fuerzas de dispersión débiles"
    ]
  },
  {
    enunciado: "En IR, un grupo O–H involucrado en H-bond fuerte suele mostrar:",
    correcta: "Desplazamiento a menor frecuencia (ensanchamiento y corrimiento al rojo)",
    incorrectas: [
      "Corrimiento al azul y banda más estrecha",
      "Desaparición total de la banda O–H"
    ]
  },
  {
    enunciado: "En ¹H-NMR, un protón implicado en H-bond tiende a:",
    correcta: "Desplazarse a campo bajo (desplazamiento químico mayor, más desprotección)",
    incorrectas: [
      "Moverse a campo alto por mayor apantallamiento",
      "No mostrar cambio apreciable bajo ninguna condición"
    ]
  },
  {
    enunciado: "La calorimetría ITC permite medir directamente:",
    correcta: "Calores de asociación/mezcla y estequiometría de complejos en solución",
    incorrectas: [
      "Longitudes de enlace en sólidos cristalinos",
      "Momentos dipolares de moléculas aisladas"
    ]
  },
  {
    enunciado: "El método del anillo de du Noüy y la placa de Wilhelmy sirven para:",
    correcta: "Medir la tensión superficial de líquidos",
    incorrectas: [
      "Cuantificar la difusividad de iones en geles",
      "Determinar el índice de refracción de líquidos"
    ]
  },
  {
    enunciado: "Las curvas fuerza-distancia obtenidas por AFM entre superficies permiten:",
    correcta: "Cuantificar adhesión y reconstruir leyes de interacción a escala nanométrica",
    incorrectas: [
      "Medir exclusivamente la conductividad eléctrica de metales",
      "Determinar masas molares por cromatografía de exclusión"
    ]
  },
  {
    enunciado: "En simulaciones de dinámica molecular clásicas, las fuerzas de dispersión se modelan típicamente con:",
    correcta: "Potenciales de Lennard-Jones combinados con términos coulombianos para cargas",
    incorrectas: [
      "Únicamente potenciales armónicos de enlace",
      "Potenciales nucleares fuertes de corto alcance"
    ]
  },
  {
    enunciado: "En cálculos DFT, ¿por qué se añaden correcciones de dispersión (D3/D4 o VV10)?",
    correcta: "Porque la dispersión de largo alcance no está bien capturada por muchos funcionales estándar",
    incorrectas: [
      "Para eliminar por completo las interacciones electrostáticas",
      "Para forzar la ruptura de todos los puentes de hidrógeno"
    ]
  },
  {
    enunciado: "La adhesión entre láminas de grafeno se debe principalmente a:",
    correcta: "Interacciones de van der Waals entre superficies 2D apiladas",
    incorrectas: [
      "Puentes de hidrógeno entre capas de carbono",
      "Enlaces iónicos entre hexágonos vecinos"
    ]
  },
  {
    enunciado: "Según DLVO, aumentar la fuerza iónica de la disolución suele:",
    correcta: "Reducir el espesor de la doble capa y favorecer la coagulación coloidal",
    incorrectas: [
      "Aumentar indefinidamente la repulsión electrostática",
      "No tener ningún efecto sobre la estabilidad de coloides"
    ]
  },
  {
    enunciado: "Para predecir la miscibilidad polímero-solvente con parámetros de Hansen se usa:",
    correcta: "La distancia Ra en el espacio (δD, δP, δH), que debe ser menor que el radio de la esfera del polímero",
    incorrectas: [
      "Exclusivamente la masa molar del polímero",
      "El punto de fusión del solvente como único criterio"
    ]
  }
];
