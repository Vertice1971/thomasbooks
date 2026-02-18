// temarios/56-anatomia-y-fisiologia-del-sistema-nervioso-humano-alteraciones-del-sistema-nervioso-en-la-sociedad-actual-habitos-saludables-la-salud-mental.js
var PREGUNTAS = [
  {
    enunciado: "¿Cuál es la función principal del sistema nervioso en el organismo humano?",
    correcta: "Coordinar y regular respuestas rápidas integrando información sensorial y motora",
    incorrectas: [
      "Producir hormonas de acción prolongada de forma exclusiva",
      "Almacenar glucógeno para el control de la glucemia"
    ]
  },
  {
    enunciado: "¿Qué estructuras forman el sistema nervioso central?",
    correcta: "Encéfalo y médula espinal",
    incorrectas: [
      "Nervios craneales y espinales",
      "Ganglios simpáticos y parasimpáticos"
    ]
  },
  {
    enunciado: "¿Qué lóbulo cerebral se asocia sobre todo con la planificación y el control ejecutivo?",
    correcta: "Lóbulo frontal",
    incorrectas: [
      "Lóbulo occipital",
      "Lóbulo temporal"
    ]
  },
  {
    enunciado: "¿Qué estructura se relaciona con la coordinación motora fina y el equilibrio?",
    correcta: "Cerebelo",
    incorrectas: [
      "Hipotálamo",
      "Amígdala"
    ]
  },
  {
    enunciado: "¿Qué componente del tronco encefálico regula funciones vitales como la respiración y la frecuencia cardiaca?",
    correcta: "Bulbo raquídeo",
    incorrectas: [
      "Hipocampo",
      "Cuerpo calloso"
    ]
  },
  {
    enunciado: "¿Cuál es la función del líquido cefalorraquídeo?",
    correcta: "Proteger mecánicamente al SNC y contribuir a su homeostasis química",
    incorrectas: [
      "Transportar oxígeno a las neuronas como función principal",
      "Producir neurotransmisores excitadores"
    ]
  },
  {
    enunciado: "¿Qué capas meníngeas, de interna a externa, protegen el SNC?",
    correcta: "Piamadre, aracnoides y duramadre",
    incorrectas: [
      "Duramadre, piamadre y aracnoides",
      "Aracnoides, duramadre y epineuro"
    ]
  },
  {
    enunciado: "¿Qué es la barrera hematoencefálica?",
    correcta: "Un sistema de permeabilidad selectiva entre la sangre y el tejido nervioso",
    incorrectas: [
      "Una membrana muscular que separa hemisferios cerebrales",
      "Un plexo linfático que drena el encéfalo"
    ]
  },
  {
    enunciado: "¿Qué células gliales forman la mielina en el SNC?",
    correcta: "Oligodendrocitos",
    incorrectas: [
      "Células de Schwann",
      "Astrocitos"
    ]
  },
  {
    enunciado: "¿Qué células gliales son los principales mediadores inmunitarios del SNC?",
    correcta: "Microglía",
    incorrectas: [
      "Ependimocitos",
      "Células satélite"
    ]
  },
  {
    enunciado: "¿Cómo se denomina el potencial eléctrico que se propaga a lo largo del axón?",
    correcta: "Potencial de acción",
    incorrectas: [
      "Potencial postsináptico inhibidor",
      "Potencial de placa motora"
    ]
  },
  {
    enunciado: "¿Qué característica permite la conducción saltatoria del impulso nervioso?",
    correcta: "La presencia de vaina de mielina con nódulos de Ranvier",
    incorrectas: [
      "La ausencia de canales iónicos dependientes de voltaje",
      "La continuidad citoplasmática entre neuronas adyacentes"
    ]
  },
  {
    enunciado: "¿Qué tipo de sinapsis es la más frecuente en el sistema nervioso humano?",
    correcta: "Sinapsis química",
    incorrectas: [
      "Sinapsis eléctrica",
      "Sinapsis mixta con gap junctions exclusivas"
    ]
  },
  {
    enunciado: "¿Cuál es el principal neurotransmisor excitador del SNC?",
    correcta: "Glutamato",
    incorrectas: [
      "GABA",
      "Glicina"
    ]
  },
  {
    enunciado: "¿Cuál es el principal neurotransmisor inhibidor en muchas sinapsis del encéfalo?",
    correcta: "GABA",
    incorrectas: [
      "Acetilcolina",
      "Dopamina"
    ]
  },
  {
    enunciado: "¿Qué sistema nervioso controla los movimientos voluntarios del músculo esquelético?",
    correcta: "Sistema nervioso somático",
    incorrectas: [
      "Sistema nervioso entérico",
      "Sistema nervioso simpático"
    ]
  },
  {
    enunciado: "¿Cuál es la función general del sistema nervioso autónomo?",
    correcta: "Regular funciones involuntarias viscerales y glandulares",
    incorrectas: [
      "Iniciar movimientos finos de la mano",
      "Codificar estímulos visuales en la retina"
    ]
  },
  {
    enunciado: "¿Qué efecto típico produce la activación simpática?",
    correcta: "Aumento de la frecuencia cardiaca y dilatación bronquial",
    incorrectas: [
      "Miosis y disminución de la frecuencia cardiaca",
      "Aumento de la motilidad intestinal y salivación profusa"
    ]
  },
  {
    enunciado: "¿Qué efecto típico produce la activación parasimpática?",
    correcta: "Favorece la digestión y reduce la frecuencia cardiaca",
    incorrectas: [
      "Libera adrenalina desde la médula suprarrenal",
      "Induce vasoconstricción generalizada en piel y vísceras"
    ]
  },
  {
    enunciado: "¿Cuál es la vía correcta de un arco reflejo simple?",
    correcta: "Receptor → neurona sensitiva → interneurona (opcional) → neurona motora → efector",
    incorrectas: [
      "Efector → neurona motora → receptor → neurona sensitiva",
      "Receptor → neurona motora → interneurona → efector"
    ]
  },
  {
    enunciado: "¿Qué estructura integra memoria declarativa y consolidación a largo plazo?",
    correcta: "Hipocampo",
    incorrectas: [
      "Colículos superiores",
      "Área de Broca"
    ]
  },
  {
    enunciado: "¿Qué área cortical se asocia con la producción del lenguaje articulado?",
    correcta: "Área de Broca",
    incorrectas: [
      "Área de Wernicke",
      "Área primaria visual (V1)"
    ]
  },
  {
    enunciado: "¿Qué trastorno neurodegenerativo se caracteriza por temblor en reposo, rigidez y bradicinesia?",
    correcta: "Enfermedad de Parkinson",
    incorrectas: [
      "Esclerosis múltiple",
      "Epilepsia de ausencia"
    ]
  },
  {
    enunciado: "¿Qué enfermedad cursa con pérdida progresiva de memoria y deterioro cognitivo global?",
    correcta: "Enfermedad de Alzheimer",
    incorrectas: [
      "Miastenia gravis",
      "Síndrome de Guillain-Barré"
    ]
  },
  {
    enunciado: "¿Qué patología describe un accidente cerebrovascular isquémico o hemorrágico?",
    correcta: "Ictus",
    incorrectas: [
      "Meningocele",
      "Hidrocefalia congénita"
    ]
  },
  {
    enunciado: "¿Qué trastorno psiquiátrico se asocia con tristeza persistente, anhedonia y alteraciones del sueño?",
    correcta: "Depresión mayor",
    incorrectas: [
      "Trastorno obsesivo-compulsivo",
      "Trastorno de pánico exclusivo"
    ]
  },
  {
    enunciado: "¿Qué conjunto de síntomas incluye ideas delirantes, alucinaciones y desorganización del pensamiento?",
    correcta: "Esquizofrenia",
    incorrectas: [
      "Distimia",
      "Fobia específica"
    ]
  },
  {
    enunciado: "¿Qué efecto tiene el estrés crónico sobre el sistema nervioso?",
    correcta: "Altera circuitos de respuesta al estrés y puede afectar memoria y estado de ánimo",
    incorrectas: [
      "Aumenta permanentemente el número de neuronas corticales por mitosis",
      "Elimina la regulación neuroendocrina del eje HPA"
    ]
  },
  {
    enunciado: "¿Qué hábito favorece la salud del sistema nervioso?",
    correcta: "Dormir de 7 a 9 horas con horarios regulares",
    incorrectas: [
      "Uso nocturno prolongado de pantallas justo antes de acostarse",
      "Consumo frecuente de alcohol como inductor del sueño"
    ]
  },
  {
    enunciado: "¿Qué nutrientes destacan por su papel neuroprotector?",
    correcta: "Ácidos grasos omega-3, vitaminas del grupo B y antioxidantes",
    incorrectas: [
      "Exceso de azúcares simples y grasas trans",
      "Solo sodio y colesterol dietético"
    ]
  },
  {
    enunciado: "¿Qué práctica de estilo de vida se asocia con mayor plasticidad sináptica?",
    correcta: "Ejercicio físico aeróbico regular",
    incorrectas: [
      "Sedentarismo prolongado",
      "Ingesta diaria alta de bebidas azucaradas"
    ]
  },
  {
    enunciado: "¿Qué estrategia ayuda a la regulación emocional y del estrés?",
    correcta: "Técnicas de respiración y mindfulness guiado",
    incorrectas: [
      "Café en exceso ante cada situación tensa",
      "Evitar cualquier interacción social"
    ]
  },
  {
    enunciado: "¿Qué se entiende por salud mental en sentido amplio?",
    correcta: "Un estado de bienestar que permite afrontar el estrés, trabajar productivamente y contribuir a la comunidad",
    incorrectas: [
      "La ausencia total de emociones negativas",
      "La supresión permanente de la ansiedad mediante fármacos"
    ]
  },
  {
    enunciado: "¿Qué intervención educativa es pertinente para promover salud mental en el aula?",
    correcta: "Programas de educación emocional y habilidades socioafectivas",
    incorrectas: [
      "Exposición constante a tareas sin pausas",
      "Castigos físicos para moldear conductas"
    ]
  },
  {
    enunciado: "¿Qué adicción tiene un impacto directo en el sistema de recompensa dopaminérgico?",
    correcta: "Consumo de cocaína",
    incorrectas: [
      "Hidratación con agua",
      "Suplementación con fibra dietética"
    ]
  },
  {
    enunciado: "¿Qué característica distingue al sistema nervioso entérico?",
    correcta: "Puede coordinar reflejos digestivos de forma autónoma",
    incorrectas: [
      "Es el responsable directo de la visión cromática",
      "Controla voluntariamente la musculatura esquelética"
    ]
  },
  {
    enunciado: "¿Cuál es el neurotransmisor fundamental en la unión neuromuscular somática?",
    correcta: "Acetilcolina",
    incorrectas: [
      "Noradrenalina",
      "Serotonina"
    ]
  },
  {
    enunciado: "¿Qué define a la plasticidad neuronal?",
    correcta: "La capacidad del sistema nervioso para modificar conexiones y funciones con la experiencia",
    incorrectas: [
      "La imposibilidad de cambiar sinapsis tras la adolescencia",
      "La sustitución rutinaria de neuronas por mitosis en toda la corteza"
    ]
  },
  {
    enunciado: "¿Qué medida preventiva reduce el riesgo de ictus y deterioro cognitivo vascular?",
    correcta: "Control de la hipertensión arterial y hábitos cardiosaludables",
    incorrectas: [
      "Aumento de sal en la dieta para elevar la tensión",
      "Evitar cualquier actividad física moderada"
    ]
  },
  {
    enunciado: "¿Qué combinación describe un abordaje integral de los trastornos mentales comunes?",
    correcta: "Psicoeducación, terapia psicológica basada en la evidencia y, cuando procede, tratamiento farmacológico",
    incorrectas: [
      "Solo automedicación basada en internet",
      "Aislamiento social como estrategia principal"
    ]
  }
];
