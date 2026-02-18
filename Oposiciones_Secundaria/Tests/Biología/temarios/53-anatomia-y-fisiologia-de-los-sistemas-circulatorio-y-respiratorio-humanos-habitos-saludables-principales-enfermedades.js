// temarios/53-anatomia-y-fisiologia-de-los-sistemas-circulatorio-y-respiratorio-humanos-habitos-saludables-principales-enfermedades.js
var PREGUNTAS = [
  {
    enunciado: "¿Cuál es la función integradora principal de los sistemas circulatorio y respiratorio?",
    correcta: "Asegurar el aporte de O₂ y nutrientes y la retirada de CO₂ y desechos para mantener la homeostasis",
    incorrectas: [
      "Regular exclusivamente la temperatura corporal",
      "Almacenar hormonas para su liberación lenta"
    ]
  },
  {
    enunciado: "¿Qué describe mejor la circulación doble y completa humana?",
    correcta: "Un circuito pulmonar para oxigenar y un circuito sistémico para distribuir sangre a tejidos",
    incorrectas: [
      "Un único circuito en serie sin paso por los pulmones",
      "Dos circuitos paralelos que nunca se conectan al corazón"
    ]
  },
  {
    enunciado: "¿Qué válvulas separan aurículas de ventrículos?",
    correcta: "Tricúspide (derecha) y mitral o bicúspide (izquierda)",
    incorrectas: [
      "Pulmonar y aórtica",
      "Eustaquiana y tebesio"
    ]
  },
  {
    enunciado: "¿Qué estructura inicia normalmente el impulso eléctrico cardiaco?",
    correcta: "El nodo sinoauricular (SA)",
    incorrectas: [
      "El nodo auriculoventricular (AV)",
      "Las fibras de Purkinje del ápex"
    ]
  },
  {
    enunciado: "¿Qué ocurre durante la sístole ventricular?",
    correcta: "Contracción de ventrículos y eyección de sangre a pulmonar y aorta",
    incorrectas: [
      "Llenado ventricular pasivo desde venas cavas",
      "Cierre de válvulas semilunares y apertura de AV"
    ]
  },
  {
    enunciado: "¿Cómo se calcula el gasto cardiaco (GC)?",
    correcta: "GC = volumen sistólico × frecuencia cardiaca",
    incorrectas: [
      "GC = presión arterial × resistencia total periférica",
      "GC = volumen diastólico final × poscarga"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a una arteria típica frente a una vena?",
    correcta: "Pared más gruesa y elástica, presión más alta",
    incorrectas: [
      "Válvulas abundantes y luz colapsable",
      "Endotelio ausente y músculo liso inexistente"
    ]
  },
  {
    enunciado: "¿Dónde ocurre principalmente el intercambio de gases y solutos con los tejidos?",
    correcta: "En los capilares",
    incorrectas: [
      "En las arterias elásticas",
      "En las venas cavas"
    ]
  },
  {
    enunciado: "¿Cuál es la función del sistema linfático?",
    correcta: "Drenar exceso de líquido intersticial, transportar lípidos y contribuir a la defensa inmunitaria",
    incorrectas: [
      "Producir eritrocitos maduros en adultos",
      "Generar potenciales de acción para el corazón"
    ]
  },
  {
    enunciado: "¿Qué componente sanguíneo transporta la mayor parte del oxígeno?",
    correcta: "La hemoglobina de los eritrocitos",
    incorrectas: [
      "El plasma por disolución simple",
      "Las plaquetas mediante endocitosis"
    ]
  },
  {
    enunciado: "¿Qué factor desplaza la curva de disociación de la hemoglobina hacia la derecha (efecto Bohr)?",
    correcta: "Aumento de CO₂, H⁺ y temperatura en tejidos activos",
    incorrectas: [
      "Descenso de CO₂ y acidificación",
      "Hipotermia con alcalosis"
    ]
  },
  {
    enunciado: "¿En qué formas se transporta el CO₂ en sangre?",
    correcta: "Disuelto, como bicarbonato y unido a proteínas (carbamino)",
    incorrectas: [
      "Solo disuelto en plasma",
      "Exclusivamente unido a hemoglobina como metahemoglobina"
    ]
  },
  {
    enunciado: "¿Cuál NO es una función del sistema respiratorio?",
    correcta: "Síntesis de glucógeno hepático",
    incorrectas: [
      "Intercambio gaseoso O₂/CO₂",
      "Participación en regulación ácido-base"
    ]
  },
  {
    enunciado: "¿Qué estructuras forman las vías respiratorias inferiores?",
    correcta: "Laringe, tráquea, bronquios y bronquiolos",
    incorrectas: [
      "Fosas nasales y nasofaringe",
      "Cavidad oral y esófago"
    ]
  },
  {
    enunciado: "¿Dónde se produce el intercambio gaseoso pulmonar?",
    correcta: "En los alvéolos y capilares pulmonares",
    incorrectas: [
      "En la tráquea",
      "En los bronquiolos terminales exclusivamente"
    ]
  },
  {
    enunciado: "¿Cuál es el principal músculo inspiratorio en reposo?",
    correcta: "El diafragma",
    incorrectas: [
      "El músculo psoas",
      "El esternocleidomastoideo en todas las respiraciones"
    ]
  },
  {
    enunciado: "¿Qué variable define el volumen corriente (VT) en espirometría?",
    correcta: "Volumen inspirado o espirado en una respiración normal",
    incorrectas: [
      "Volumen máximo tras inspiración forzada",
      "Volumen residual tras espiración forzada"
    ]
  },
  {
    enunciado: "¿Qué centro nervioso regula ritmos básicos de la respiración?",
    correcta: "Centros bulbares con modulación pontina",
    incorrectas: [
      "Corteza motora sin aferencias",
      "Hipotálamo exclusivamente"
    ]
  },
  {
    enunciado: "¿Qué estímulo aumenta más la ventilación en condiciones normales?",
    correcta: "Aumento de CO₂ (disminución de pH) detectado por quimiorreceptores",
    incorrectas: [
      "Aumento leve de O₂",
      "Descenso de temperatura corporal"
    ]
  },
  {
    enunciado: "¿Qué describe mejor la presión arterial sistólica?",
    correcta: "La presión máxima durante la contracción ventricular",
    incorrectas: [
      "La presión mínima durante la diástole",
      "La presión capilar pulmonar media"
    ]
  },
  {
    enunciado: "¿Qué hábito reduce el riesgo cardiovascular global?",
    correcta: "Ejercicio aeróbico regular y dieta mediterránea",
    incorrectas: [
      "Tabaco ocasional como vasodilatador",
      "Exceso de grasas trans para elevar HDL"
    ]
  },
  {
    enunciado: "¿Qué se entiende por hipertensión arterial?",
    correcta: "Elevación crónica de la presión arterial por encima de los valores de referencia",
    incorrectas: [
      "Disminución transitoria de la PA tras ejercicio",
      "Hipotensión ortostática posprandial"
    ]
  },
  {
    enunciado: "¿Qué lesión subyace a la aterosclerosis?",
    correcta: "Placas de ateroma lipídicas en la íntima arterial",
    incorrectas: [
      "Trombos venosos en válvulas",
      "Rotura de capilares por hipertrofia"
    ]
  },
  {
    enunciado: "¿Cuál es el evento fundamental en un infarto agudo de miocardio?",
    correcta: "Isquemia prolongada del músculo cardiaco por oclusión coronaria",
    incorrectas: [
      "Infección bacteriana del endocardio siempre",
      "Rotura valvular congénita aislada"
    ]
  },
  {
    enunciado: "¿Qué define la insuficiencia cardiaca?",
    correcta: "Incapacidad del corazón para bombear lo suficiente para las necesidades tisulares",
    incorrectas: [
      "Aumento transitorio del GC en ejercicio",
      "Cierre incompleto de una válvula sin síntomas"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a un accidente cerebrovascular isquémico?",
    correcta: "Oclusión arterial cerebral con déficit neurológico agudo",
    incorrectas: [
      "Hemorragia subaracnoidea por rotura aneurismática",
      "Neuritis óptica por alergias"
    ]
  },
  {
    enunciado: "¿Qué es el asma bronquial?",
    correcta: "Enfermedad inflamatoria con hiperreactividad y broncoconstricción reversible",
    incorrectas: [
      "Destrucción alveolar progresiva con pérdida elástica (enfisema)",
      "Infección bacteriana lobar puramente"
    ]
  },
  {
    enunciado: "¿Qué define a la EPOC?",
    correcta: "Limitación crónica y no completamente reversible del flujo aéreo",
    incorrectas: [
      "Restricción pulmonar aguda por cifosis",
      "Asma intermitente leve siempre reversible"
    ]
  },
  {
    enunciado: "¿Cuál es un factor de riesgo mayor para cáncer de pulmón?",
    correcta: "Tabaquismo activo y pasivo",
    incorrectas: [
      "Ejercicio aeróbico regular",
      "Vacunación antigripal anual"
    ]
  },
  {
    enunciado: "¿Qué signo es típico de neumonía bacteriana?",
    correcta: "Fiebre, tos productiva y condensación lobar en radiografía",
    incorrectas: [
      "Espiración prolongada sin fiebre",
      "Hematuria aislada sin síntomas respiratorios"
    ]
  },
  {
    enunciado: "¿Qué práctica favorece la salud respiratoria?",
    correcta: "No fumar, ventilar espacios y vacunarse según pauta",
    incorrectas: [
      "Exposición voluntaria a humos irritantes",
      "Sedentarismo prolongado"
    ]
  },
  {
    enunciado: "¿Qué maniobra incrementa el retorno venoso en reposo?",
    correcta: "Bomba músculo-esquelética de los miembros inferiores",
    incorrectas: [
      "Vasodilatación venosa extrema",
      "Aumento súbito de la presión intratorácica sostenida"
    ]
  },
  {
    enunciado: "¿Cuál es el papel de las plaquetas?",
    correcta: "Participar en la hemostasia y formación del tapón plaquetario",
    incorrectas: [
      "Transportar oxígeno a alta capacidad",
      "Producir anticuerpos específicos"
    ]
  },
  {
    enunciado: "¿Qué volumen NO puede expulsarse incluso tras espiración forzada?",
    correcta: "El volumen residual",
    incorrectas: [
      "El volumen corriente",
      "La capacidad vital"
    ]
  },
  {
    enunciado: "¿Qué efecto tiene la hiperventilación aguda sobre el pH sanguíneo?",
    correcta: "Alcalosis respiratoria por descenso de PaCO₂",
    incorrectas: [
      "Acidosis respiratoria por aumento de PaCO₂",
      "Acidosis metabólica por lactato"
    ]
  },
  {
    enunciado: "¿Qué medida inmediata es recomendable ante dolor torácico opresivo sospechoso de IAM?",
    correcta: "Solicitar ayuda urgente y reposo mientras se activa el sistema de emergencias",
    incorrectas: [
      "Realizar ejercicio intenso para “abrir” coronarias",
      "Beber alcohol para vasodilatar"
    ]
  },
  {
    enunciado: "¿Qué parámetro suele elevarse en infarto agudo de miocardio?",
    correcta: "Troponinas cardiacas en sangre",
    incorrectas: [
      "Bilirrubina conjugada",
      "Creatinina fosfoquinasa muscular específica de pierna únicamente"
    ]
  },
  {
    enunciado: "¿Cuál es una medida clave de prevención cardiovascular poblacional?",
    correcta: "Reducción de sal, grasas trans y fomento de actividad física",
    incorrectas: [
      "Aumentar bebidas azucaradas para energía rápida",
      "Promover el tabaquismo controlado"
    ]
  },
  {
    enunciado: "¿Qué define la apnea del sueño obstructiva?",
    correcta: "Colapsos repetidos de la vía aérea superior durante el sueño con hipoxemia intermitente",
    incorrectas: [
      "Hiperinflación pulmonar irreversible por tabaco",
      "Restricción pulmonar por fibrosis idiopática"
    ]
  }
];
