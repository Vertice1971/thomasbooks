// temarios/69-clasificacion-de-los-elementos-quimicos-sistema-periodico-enlace-quimico-justificacion-de-las-propiedades-de-las-sustancias-en-funcion-de-su-enlace-reconocimiento-de-sustancias-de-uso-comun-como-acidos-bases-metales-etc.js
// 40 preguntas tipo test (A/B/C) para el Tema 69.
// Formato compatible con 0-Plantilla-temario.js: var PREGUNTAS = [{ enunciado, correcta, incorrectas:[..] }, ...]
var PREGUNTAS = [
  {
    enunciado: "¿Qué enuncia la ley periódica moderna?",
    correcta: "Las propiedades de los elementos varían periódicamente con el número atómico",
    incorrectas: [
      "Las propiedades dependen del número másico exclusivamente",
      "Todos los elementos repiten propiedades cada dos posiciones"
    ]
  },
  {
    enunciado: "¿Qué aportó Moseley a la clasificación periódica?",
    correcta: "Estableció el número atómico como criterio ordenado por espectros de rayos X",
    incorrectas: [
      "Introdujo el concepto de valencia por primera vez",
      "Propuso el bloque f de la tabla periódica"
    ]
  },
  {
    enunciado: "¿Cuál es la estructura básica de la tabla periódica actual?",
    correcta: "Siete períodos horizontales y dieciocho grupos verticales",
    incorrectas: [
      "Dieciocho períodos y siete grupos",
      "Doce períodos y doce grupos"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al bloque s?",
    correcta: "Incluye alcalinos y alcalinotérreos con uno o dos electrones de valencia",
    incorrectas: [
      "Contiene halógenos y gases nobles",
      "Agrupa exclusivamente a los metales de transición"
    ]
  },
  {
    enunciado: "¿Qué tendencia periódica es correcta para el radio atómico?",
    correcta: "Aumenta hacia abajo en un grupo y disminuye hacia la derecha en un período",
    incorrectas: [
      "Disminuye hacia abajo en un grupo y aumenta hacia la derecha",
      "Permanece constante en toda la tabla"
    ]
  },
  {
    enunciado: "¿Qué ocurre con la primera energía de ionización en la tabla periódica?",
    correcta: "Aumenta hacia la derecha y disminuye hacia abajo",
    incorrectas: [
      "Disminuye hacia la derecha y aumenta hacia abajo",
      "Es igual para todos los elementos de un grupo"
    ]
  },
  {
    enunciado: "¿Qué elementos forman típicamente cationes +1 en disolución acuosa?",
    correcta: "Metales alcalinos",
    incorrectas: [
      "Gases nobles",
      "Halógenos"
    ]
  },
  {
    enunciado: "¿Cuál de los siguientes es un gas noble?",
    correcta: "Neón",
    incorrectas: [
      "Nitrógeno",
      "Flúor"
    ]
  },
  {
    enunciado: "¿Qué familia presenta alta electronegatividad y forma aniones -1?",
    correcta: "Halógenos",
    incorrectas: [
      "Alcalinotérreos",
      "Lantánidos"
    ]
  },
  {
    enunciado: "¿Qué describe mejor el enlace iónico?",
    correcta: "Transferencia de electrones y atracción electrostática entre iones",
    incorrectas: [
      "Compartición de electrones en pares dirigidos",
      "Solapamiento de orbitales metálicos deslocalizados"
    ]
  },
  {
    enunciado: "¿Qué modelo explica la geometría molecular a partir de repulsiones de pares electrónicos?",
    correcta: "VSEPR (repulsión de pares de la capa de valencia)",
    incorrectas: [
      "Teoría de bandas",
      "Ciclo de Born–Haber"
    ]
  },
  {
    enunciado: "¿Qué afirma la teoría de orbitales moleculares sobre O₂?",
    correcta: "Presenta electrones desapareados y es paramagnético",
    incorrectas: [
      "Es diamagnético por tener todos los electrones apareados",
      "No puede existir como molécula diatómica estable"
    ]
  },
  {
    enunciado: "¿Qué enlace predomina en el NaCl sólido?",
    correcta: "Iónico en una red cristalina",
    incorrectas: [
      "Covalente polar con moléculas discretas",
      "Metálico con electrones libres"
    ]
  },
  {
    enunciado: "¿Cuál es la mejor definición de electronegatividad?",
    correcta: "Tendencia de un átomo enlazado a atraer electrones hacia sí",
    incorrectas: [
      "Energía requerida para añadir un protón al núcleo",
      "Carga total del núcleo efectiva sin apantallamiento"
    ]
  },
  {
    enunciado: "¿Qué factor aumenta la energía reticular de un compuesto iónico?",
    correcta: "Altas cargas iónicas y radios iónicos pequeños",
    incorrectas: [
      "Bajas cargas y radios grandes",
      "Solapamiento p–p máximo"
    ]
  },
  {
    enunciado: "¿Cuál NO es una interacción intermolecular?",
    correcta: "Enlace iónico reticular",
    incorrectas: [
      "Fuerzas de dispersión de London",
      "Puentes de hidrógeno"
    ]
  },
  {
    enunciado: "¿Qué combinación muestra enlace covalente no polar idealizado?",
    correcta: "Cl₂",
    incorrectas: [
      "HCl",
      "NaCl"
    ]
  },
  {
    enunciado: "¿Qué propiedad macroscópica se asocia a los metales por su enlace?",
    correcta: "Buena conductividad eléctrica y térmica",
    incorrectas: [
      "Fragilidad extrema y baja ductilidad",
      "Bajos puntos de fusión de forma general"
    ]
  },
  {
    enunciado: "¿Por qué el diamante es muy duro y con alto punto de fusión?",
    correcta: "Por su red covalente tridimensional con enlaces C–C fuertes",
    incorrectas: [
      "Por su red iónica con iones alternos",
      "Por fuertes fuerzas dipolo–dipolo entre moléculas"
    ]
  },
  {
    enunciado: "¿Qué solución acuosa conduce la electricidad con eficacia?",
    correcta: "NaCl disuelto",
    incorrectas: [
      "Azúcar disuelto",
      "Agua destilada pura"
    ]
  },
  {
    enunciado: "¿Qué especie se reconoce como ácido fuerte en agua?",
    correcta: "HCl",
    incorrectas: [
      "CH₃COOH",
      "NH₃"
    ]
  },
  {
    enunciado: "¿Cuál es una base débil típica en disolución acuosa?",
    correcta: "Amoniaco (NH₃)",
    incorrectas: [
      "HNO₃",
      "NaOH"
    ]
  },
  {
    enunciado: "Según Brønsted–Lowry, un ácido es la especie que:",
    correcta: "Dona protones a otra especie",
    incorrectas: [
      "Acepta electrones formando un enlace coordinado",
      "Libera OH⁻ necesariamente en agua"
    ]
  },
  {
    enunciado: "¿Qué propiedad distingue a los gases nobles en condiciones estándar?",
    correcta: "Muy baja reactividad química",
    incorrectas: [
      "Alta electronegatividad y formación de aniones",
      "Formación espontánea de óxidos ácidos"
    ]
  },
  {
    enunciado: "¿Qué óxido muestra carácter ácido en agua?",
    correcta: "SO₃",
    incorrectas: [
      "Na₂O",
      "MgO"
    ]
  },
  {
    enunciado: "¿Qué define mejor a una sal?",
    correcta: "Compuesto iónico formado por cationes y aniones en proporción estequiométrica",
    incorrectas: [
      "Compuesto covalente que siempre es líquido",
      "Mezcla homogénea de ácido y base sin reacción"
    ]
  },
  {
    enunciado: "¿Cuál es una propiedad común de las bases?",
    correcta: "Neutralizan ácidos produciendo sales y agua",
    incorrectas: [
      "Reaccionan con bases para producir hidrógeno",
      "Siempre presentan sabor agrio"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al grupo de los alcalinotérreos?",
    correcta: "Forman cationes +2 y óxidos básicos",
    incorrectas: [
      "Presentan estado de oxidación -1 en sus haluros",
      "Son gases monoatómicos inertes"
    ]
  },
  {
    enunciado: "¿Cuál es la causa principal del aumento de radio atómico al bajar en un grupo?",
    correcta: "Mayor número de capas electrónicas",
    incorrectas: [
      "Disminución de la carga nuclear",
      "Aumento de la electronegatividad"
    ]
  },
  {
    enunciado: "¿Qué explica la mayor energía de ionización del N respecto al O en el mismo período?",
    correcta: "Semilleno p en N que estabiliza y dificulta extraer un electrón",
    incorrectas: [
      "Menor carga nuclear efectiva en N",
      "N tiene mayor radio que O y por eso cuesta más ionizarlo"
    ]
  },
  {
    enunciado: "¿Qué relación es correcta entre tipo de enlace y solubilidad en agua?",
    correcta: "Compuestos iónicos suelen disolverse bien por hidratación de iones",
    incorrectas: [
      "Los compuestos iónicos nunca se disuelven en agua",
      "Las moléculas no polares son siempre muy solubles en agua"
    ]
  },
  {
    enunciado: "¿Qué especie muestra típicamente puentes de hidrógeno intermoleculares fuertes?",
    correcta: "H₂O",
    incorrectas: [
      "CH₄",
      "CO₂"
    ]
  },
  {
    enunciado: "¿Qué conjunto clasifica correctamente metales, no metales y metaloides?",
    correcta: "Fe (metal), S (no metal), Si (metaloide)",
    incorrectas: [
      "Na (no metal), Cl (metal), B (gas noble)",
      "Cu (metaloide), O (metal), Ne (no metal)"
    ]
  },
  {
    enunciado: "¿Qué define el concepto de afinidad electrónica de un elemento?",
    correcta: "Cambio de energía al añadir un electrón a un átomo gaseoso",
    incorrectas: [
      "Energía necesaria para retirar un protón del núcleo",
      "Energía asociada a la fusión del sólido"
    ]
  },
  {
    enunciado: "¿Cuál es la mejor prueba cualitativa de ácido en el aula con seguridad?",
    correcta: "Uso de indicadores de pH que cambian de color",
    incorrectas: [
      "Prueba de sabor agrio",
      "Contacto con la piel para notar picor"
    ]
  },
  {
    enunciado: "¿Qué par ácido/base corresponde a una neutralización típica?",
    correcta: "HCl + NaOH → NaCl + H₂O",
    incorrectas: [
      "HCl + HNO₃ → H₂ClNO₃",
      "NaOH + NaCl → Na₂O + HCl"
    ]
  },
  {
    enunciado: "¿Qué describe el concepto HSAB de Pearson?",
    correcta: "Ácidos y bases duros o blandos tienden a asociarse preferentemente",
    incorrectas: [
      "Todos los ácidos son fuertes y todas las bases son débiles",
      "Los oxoácidos no siguen reglas estructurales"
    ]
  },
  {
    enunciado: "¿Qué efecto tiene la estructura de bandas en metales?",
    correcta: "Permite el movimiento de electrones y la alta conductividad",
    incorrectas: [
      "Impide el transporte de calor",
      "Obliga a todos los metales a ser diamagnéticos"
    ]
  },
  {
    enunciado: "¿Qué propiedad de un sólido iónico explica su fragilidad al golpe?",
    correcta: "Desplazamiento de capas que acerca iones de igual carga causando repulsión",
    incorrectas: [
      "Movilidad de electrones que amortigua el golpe",
      "Puentes de hidrógeno que absorben la energía"
    ]
  },
  {
    enunciado: "¿Qué compuesto reconocerías como base fuerte en el hogar/laboratorio?",
    correcta: "NaOH (sosa cáustica)",
    incorrectas: [
      "NH₃ (amoníaco) siempre como fuerte",
      "H₂SO₄ (ácido sulfúrico)"
    ]
  }
];
