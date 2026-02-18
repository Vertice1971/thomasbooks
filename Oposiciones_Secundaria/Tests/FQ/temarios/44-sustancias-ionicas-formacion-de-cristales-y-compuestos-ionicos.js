// temarios/44-sustancias-ionicas-formacion-de-cristales-y-compuestos-ionicos.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué caracteriza fundamentalmente a una sustancia iónica en términos de enlace?",
    correcta: "La formación de una red cristalina de cationes y aniones unidos por atracción electrostática",
    incorrectas: [
      "La existencia exclusiva de pares electrónicos compartidos entre átomos",
      "La deslocalización electrónica metálica sobre una red de cationes"
    ]
  },
  {
    enunciado: "¿Qué combinación de propiedades atómicas favorece la formación de un enlace iónico?",
    correcta: "Gran diferencia de electronegatividad entre un metal y un no metal",
    incorrectas: [
      "Electronegatividades idénticas en ambos átomos",
      "Dos no metales con radios similares y alta afinidad por electrones compartidos"
    ]
  },
  {
    enunciado: "Según las reglas de Fajans, ¿qué situación aumenta el carácter covalente en una sal iónica?",
    correcta: "Catión pequeño y de alta carga con anión grande y polarizable",
    incorrectas: [
      "Catión grande de baja carga con anión pequeño poco polarizable",
      "Iones de tamaño similar y muy baja carga"
    ]
  },
  {
    enunciado: "¿Qué es el número de coordinación (CN) en un cristal iónico?",
    correcta: "El número de iones de carga opuesta que rodean a un ion dado",
    incorrectas: [
      "El número de moléculas de agua hidratando a un ion en disolución",
      "El número de electrones de valencia del catión"
    ]
  },
  {
    enunciado: "¿Cuál es el CN característico en la estructura tipo NaCl?",
    correcta: "6:6 (cada ion rodeado por seis de carga opuesta)",
    incorrectas: [
      "8:8",
      "4:4"
    ]
  },
  {
    enunciado: "¿Cuál es el CN característico en la estructura tipo CsCl?",
    correcta: "8:8 (cada ion tiene ocho vecinos de signo opuesto)",
    incorrectas: [
      "6:6",
      "4:4"
    ]
  },
  {
    enunciado: "¿Cuál es el CN característico en la estructura tipo fluorita (CaF₂)?",
    correcta: "Ca²⁺ con CN=8 y F⁻ con CN=4",
    incorrectas: [
      "Ca²⁺ con CN=6 y F⁻ con CN=6",
      "Ca²⁺ con CN=4 y F⁻ con CN=8"
    ]
  },
  {
    enunciado: "¿Qué factor NO determina directamente el número de coordinación en sólidos iónicos?",
    correcta: "La presión de vapor del disolvente usado para cristalizar",
    incorrectas: [
      "La relación de radios catión/anión",
      "La carga y la polarizabilidad de los iones"
    ]
  },
  {
    enunciado: "¿Qué describe la energía reticular de un sólido iónico?",
    correcta: "La energía liberada al formar el cristal iónico desde iones gaseosos separados",
    incorrectas: [
      "La energía necesaria para fundir el sólido",
      "La energía de ionización del catión en fase gaseosa"
    ]
  },
  {
    enunciado: "¿Qué constante geométrica aparece en la ecuación de Born–Landé?",
    correcta: "La constante de Madelung",
    incorrectas: [
      "La constante de Avogadro",
      "La constante de Planck"
    ]
  },
  {
    enunciado: "¿Cuál es el propósito del ciclo de Born–Haber?",
    correcta: "Determinar la energía reticular a partir de datos termodinámicos medibles",
    incorrectas: [
      "Medir el número de coordinación de un cristal",
      "Obtener radios iónicos efectivos por difracción"
    ]
  },
  {
    enunciado: "¿Qué tendencia general incrementa la energía reticular U?",
    correcta: "Cargas iónicas elevadas y radios iónicos pequeños",
    incorrectas: [
      "Cargas bajas y radios grandes",
      "Altas masas atómicas independientemente de la carga"
    ]
  },
  {
    enunciado: "¿Qué aproximación práctica se usa para estimar U cuando faltan datos cristalográficos completos?",
    correcta: "La ecuación de Kapustinskii",
    incorrectas: [
      "La ecuación de Van’t Hoff",
      "La ley de Raoult"
    ]
  },
  {
    enunciado: "¿Qué propiedad macroscópica típica presentan los sólidos iónicos a temperatura ambiente?",
    correcta: "Son duros y frágiles",
    incorrectas: [
      "Son dúctiles y maleables",
      "Conducen muy bien la electricidad en estado sólido"
    ]
  },
  {
    enunciado: "¿Por qué los sólidos iónicos conducen la electricidad en fundido o en disolución acuosa?",
    correcta: "Porque los iones son móviles y transportan carga",
    incorrectas: [
      "Porque se forman electrones libres deslocalizados",
      "Porque se rompen en moléculas neutras muy polares"
    ]
  },
  {
    enunciado: "¿Qué explica que muchas sales sean solubles en agua?",
    correcta: "La energía de hidratación compensa en parte la energía reticular",
    incorrectas: [
      "La ausencia de interacciones ión–dipolo en agua",
      "La formación de enlaces covalentes permanentes con el solvente"
    ]
  },
  {
    enunciado: "¿Qué ocurre al desplazar un plano de iones en un cristal iónico bajo esfuerzo mecánico?",
    correcta: "Se acercan iones del mismo signo y aparece repulsión fuerte, originando fractura frágil",
    incorrectas: [
      "Los planos se deslizan fácilmente sin oposición",
      "Se forman enlaces metálicos que plastifican el sólido"
    ]
  },
  {
    enunciado: "¿Qué describe mejor los radios iónicos de Shannon?",
    correcta: "Dependen del número de coordinación y del estado de oxidación",
    incorrectas: [
      "Son constantes universales independientes del entorno",
      "Solo se definen para aniones monoatómicos"
    ]
  },
  {
    enunciado: "¿Cuál es una limitación de la regla de la razón de radios para predecir estructuras?",
    correcta: "Ignora la polarizabilidad y la covalencia parcial entre iones",
    incorrectas: [
      "Requiere conocer la energía reticular con precisión",
      "No puede aplicarse a haluros alcalinos"
    ]
  },
  {
    enunciado: "¿Qué estructura presentan típicamente muchos haluros alcalinos (MX con M⁺ y X⁻)?",
    correcta: "Tipo NaCl (roca salina)",
    incorrectas: [
      "Tipo wurtzita",
      "Tipo perovskita ABX₃"
    ]
  },
  {
    enunciado: "¿Qué describe un defecto Schottky en un cristal iónico?",
    correcta: "La presencia de vacancias catiónicas y aniónicas en proporción estequiométrica",
    incorrectas: [
      "Un catión en un sitio intersticial",
      "La sustitución de un catión por otro de mayor carga"
    ]
  },
  {
    enunciado: "¿Qué describe un defecto Frenkel en un cristal iónico?",
    correcta: "Un ion abandona su sitio y ocupa un intersticio del mismo cristal",
    incorrectas: [
      "La creación de pares electrón-hueco",
      "La sustitución isovalente sin crear vacancias"
    ]
  },
  {
    enunciado: "¿Qué son los centros F en haluros alcalinos?",
    correcta: "Vacancias aniónicas que atrapan electrones, responsables de coloración",
    incorrectas: [
      "Intersticiales catiónicos que aumentan la conductividad metálica",
      "Complejos covalentes que generan fluorescencia ultravioleta"
    ]
  },
  {
    enunciado: "¿Qué combinación suele aumentar el punto de fusión de una sal iónica?",
    correcta: "Iones con alta carga y radios pequeños",
    incorrectas: [
      "Iones con baja carga y radios grandes",
      "Aniones muy polarizables con cationes muy grandes"
    ]
  },
  {
    enunciado: "En un ciclo de Born–Haber para NaCl(s), ¿qué término es endotérmico?",
    correcta: "La atomización del sodio metálico",
    incorrectas: [
      "La formación del cristal a partir de iones gaseosos",
      "La hidratación de Na⁺ y Cl⁻"
    ]
  },
  {
    enunciado: "¿Qué diferencia estructural hay entre blenda de zinc (ZnS) y wurtzita?",
    correcta: "Ambas son tetraédricas 4:4, pero difieren en el apilamiento (cúbico vs hexagonal)",
    incorrectas: [
      "Blenda es 6:6 y wurtzita 8:8",
      "Blenda es iónica y wurtzita puramente metálica"
    ]
  },
  {
    enunciado: "¿Qué estructura típica presentan muchas perovskitas ABX₃ en su fase ideal?",
    correcta: "Red cúbica con B en el centro octaédricamente coordinado por X",
    incorrectas: [
      "Red tetragonal con A tetraédricamente coordinado",
      "Estructura tipo CsCl con CN 8:8 para A y X"
    ]
  },
  {
    enunciado: "¿Cuál es el efecto de aumentar la constante dieléctrica del disolvente sobre la solubilidad de sales iónicas?",
    correcta: "Favorece la separación de iones al estabilizar cargas (mayor solubilidad)",
    incorrectas: [
      "Reduce drásticamente la solubilidad por apantallamiento excesivo",
      "No tiene efecto alguno sobre la solubilidad"
    ]
  },
  {
    enunciado: "¿Qué sales muestran a menudo desviaciones de comportamiento iónico ideal por covalencia significativa?",
    correcta: "Haluros de plata como AgCl",
    incorrectas: [
      "Haluros alcalinos ligeros como NaCl",
      "Sales de cesio con aniones fluoruro"
    ]
  },
  {
    enunciado: "¿Qué describe mejor un sólido iónico superiónico como AgI a alta T?",
    correcta: "Presenta alta movilidad iónica en una subred, con conductividad elevada",
    incorrectas: [
      "Se comporta como un metal por electrones libres",
      "Pierde completamente su orden cristalino"
    ]
  },
  {
    enunciado: "¿Qué técnica permite determinar posiciones atómicas y parámetros de red en sales cristalinas?",
    correcta: "Difracción de rayos X de polvos con refinamiento Rietveld",
    incorrectas: [
      "Espectroscopía de masas de tiempo de vuelo",
      "Polarografía en disolución"
    ]
  },
  {
    enunciado: "¿Qué magnitud mide la espectroscopía de impedancia en sólidos iónicos?",
    correcta: "La respuesta eléctrica en frecuencia para estimar conductividad iónica y constantes dieléctricas",
    incorrectas: [
      "El calor de disolución de la sal",
      "La masa molar exacta del catión"
    ]
  },
  {
    enunciado: "¿Qué par de defectos mantiene la neutralidad en un cristal con dopaje heterovalente?",
    correcta: "Vacancias compensadoras en subred catiónica o aniónica según la carga del dopante",
    incorrectas: [
      "Electrones libres sin crear vacancias",
      "Intersticiales neutros que no alteran cargas"
    ]
  },
  {
    enunciado: "¿Qué fenómeno puede transformar NaCl tipo roca salina en estructura tipo CsCl?",
    correcta: "Aplicación de alta presión que favorece mayor coordinación",
    incorrectas: [
      "Calentamiento leve por debajo del punto de fusión",
      "Exposición a luz visible intensa"
    ]
  },
  {
    enunciado: "¿Cuál es una aplicación tecnológica típica de materiales iónicos con activadores dopantes (NaI:Tl)?",
    correcta: "Centelladores para detección de radiación",
    incorrectas: [
      "Electrodos metálicos de alta conductividad electrónica",
      "Superconductores a temperatura ambiente"
    ]
  },
  {
    enunciado: "¿Qué propiedad de las resinas de intercambio iónico se explota en tratamiento de aguas?",
    correcta: "Selectividad para intercambiar iones con la disolución (p. ej., Ca²⁺ por Na⁺)",
    incorrectas: [
      "Capacidad para formar enlaces covalentes con los aniones",
      "Descomposición térmica para atrapar iones por carbonización"
    ]
  },
  {
    enunciado: "¿Qué relación cualitativa existe entre energía reticular y solubilidad en agua, ceteris paribus?",
    correcta: "Cuanto mayor es U, más difícil resulta disolver la sal si la hidratación no compensa",
    incorrectas: [
      "Mayor U implica siempre mayor solubilidad",
      "U no guarda relación alguna con la solubilidad"
    ]
  },
  {
    enunciado: "¿Qué tipo de enlaces predominan dentro del ión complejo [Fe(CN)₆]³⁻ en una sal de ferricianuro?",
    correcta: "Enlaces coordinados metal–ligando en el complejo, con interacción iónica entre complejos y contraiones",
    incorrectas: [
      "Exclusivamente enlaces iónicos entre Fe³⁺ y CN⁻ sin coordinación",
      "Enlace metálico deslocalizado entre aniones"
    ]
  },
  {
    enunciado: "¿Qué afirma correctamente sobre el carácter iónico de MgO frente a NaCl?",
    correcta: "MgO tiene mayor U por cargas 2+/2− y radios menores, por lo que su punto de fusión es más alto",
    incorrectas: [
      "NaCl posee mayor U por tener masa molar inferior",
      "Ambos tienen U idéntica al compartir estructura NaCl"
    ]
  },
  {
    enunciado: "¿Cuál es una consecuencia de la polarizabilidad aniónica muy alta (p. ej., I⁻) en haluros de metales blandos (AgI)?",
    correcta: "Aumento de covalencia y desviaciones en propiedades ópticas y solubilidad",
    incorrectas: [
      "Disminución de la interacción iónica hasta anular el cristal",
      "Imposibilidad de formar redes cristalinas estables"
    ]
  },
  {
    enunciado: "¿Qué justifica la fragilidad de muchos cerámicos iónicos?",
    correcta: "El desplazamiento de planos produce contactos ión–ión del mismo signo y repulsión intensa",
    incorrectas: [
      "La presencia de electrones libres amortigua el esfuerzo",
      "La red iónica se deforma plásticamente por deslizamiento fácil"
    ]
  }
];
