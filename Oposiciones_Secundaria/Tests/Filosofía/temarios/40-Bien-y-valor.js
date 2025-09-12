// temarios/40-Bien-y-valor.js
var PREGUNTAS = [
  {
    enunciado: "¿Cuál es la distinción técnica más aceptada entre 'bien' y 'valor' en filosofía moral?",
    correcta: "‘Bien’ se orienta a fines y realización (florecimiento), ‘valor’ designa cualidades que fundamentan la estima y la elección",
    incorrectas: [
      "‘Bien’ y ‘valor’ son sinónimos perfectos en toda tradición filosófica",
      "‘Bien’ nombra sentimientos y ‘valor’ solo hechos físicos"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al bien supremo en Platón?",
    correcta: "La Idea del Bien, principio que ilumina la inteligibilidad y la valía de todo lo demás",
    incorrectas: [
      "Una suma de placeres sensibles sin orden jerárquico",
      "Un acuerdo mayoritario contingente en la polis"
    ]
  },
  {
    enunciado: "Para Aristóteles, ¿qué define el bien humano?",
    correcta: "La eudaimonía como actividad del alma conforme a la virtud a lo largo de una vida completa",
    incorrectas: [
      "La acumulación ilimitada de bienes externos",
      "La obediencia ciega a reglas sin deliberación práctica"
    ]
  },
  {
    enunciado: "¿Cómo entiende Tomás de Aquino el bien?",
    correcta: "Como perfección y convertibilidad con el ente; lo bueno es aquello hacia lo que todas las cosas tienden",
    incorrectas: [
      "Como mera convención lingüística sin correlato ontológico",
      "Como idéntico al placer físico en todos los casos"
    ]
  },
  {
    enunciado: "¿Qué sostiene Kant sobre el bien sin restricción?",
    correcta: "Que solo la buena voluntad es buena sin restricción, y la dignidad funda un valor absoluto",
    incorrectas: [
      "Que el bien se mide solo por consecuencias agregadas",
      "Que la voluntad buena depende de inclinaciones sensibles"
    ]
  },
  {
    enunciado: "¿Qué plantea G. E. Moore con el ‘argumento de la pregunta abierta’?",
    correcta: "Que ‘bueno’ no se identifica sin residuo con ninguna propiedad natural; critica la falacia naturalista",
    incorrectas: [
      "Que todo enunciado ético es analítico y necesario",
      "Que ‘bueno’ significa ‘estadísticamente frecuente’"
    ]
  },
  {
    enunciado: "Según Max Scheler, ¿cómo se accede a los valores?",
    correcta: "Mediante una emoción intencional que capta cualidades axiológicas objetivas y ordenadas jerárquicamente",
    incorrectas: [
      "Por pura medición instrumental de utilidades",
      "Con una deducción geométrica desde axiomas morales"
    ]
  },
  {
    enunciado: "¿Qué aporta Nicolai Hartmann a la axiología?",
    correcta: "La objetividad estratificada de los valores y su independencia relativa respecto del deseo",
    incorrectas: [
      "La reducción de los valores a leyes económicas",
      "La identificación del valor con sanción legal"
    ]
  },
  {
    enunciado: "¿Cómo distingue la teoría axiológica entre valor intrínseco e instrumental?",
    correcta: "Intrínseco: valioso por sí mismo; instrumental: valioso como medio para otros fines",
    incorrectas: [
      "Intrínseco: impuesto por ley; instrumental: ilegal",
      "Intrínseco: sensorial; instrumental: intelectual"
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre valor moral y no moral?",
    correcta: "El primero atañe a rectitud y virtud; los no morales incluyen estéticos, epistémicos, económicos o ambientales",
    incorrectas: [
      "No existe valor fuera de la moral",
      "El valor moral se reduce al precio de mercado"
    ]
  },
  {
    enunciado: "¿Qué es un ‘concepto grueso’ (thick) de valor?",
    correcta: "Un término con carga descriptiva y evaluativa a la vez, como ‘cruel’ o ‘valiente’",
    incorrectas: [
      "Un sinónimo de ‘bueno’ sin contenido descriptivo",
      "Un tecnicismo lógico sin dimensión práctica"
    ]
  },
  {
    enunciado: "¿Qué propone Philippa Foot sobre el bien humano?",
    correcta: "Un naturalismo de las virtudes: el bien se ancla en las excelencias funcionales propias de la forma de vida humana",
    incorrectas: [
      "Que la virtud es irrelevante para la vida buena",
      "Que el bien se identifica con preferencias caprichosas"
    ]
  },
  {
    enunciado: "¿Qué entiende MacIntyre por bienes internos?",
    correcta: "Excelencias propias de prácticas cooperativas que solo pueden lograrse participando competentemente en ellas",
    incorrectas: [
      "Cualquier bien de consumo masivo",
      "Beneficios externos como fama o dinero exclusivamente"
    ]
  },
  {
    enunciado: "¿Cómo caracteriza el hedonismo el bien?",
    correcta: "Como placer o felicidad, enfrentándose a objeciones de calidad y autenticidad de la experiencia",
    incorrectas: [
      "Como obediencia ritual a tradiciones",
      "Como cualquier resultado mayoritario en una votación"
    ]
  },
  {
    enunciado: "¿Cuál es la crítica central de Nozick al hedonismo con la ‘máquina de experiencias’?",
    correcta: "Que preferimos vidas reales con contacto con la realidad y agencia, no solo experiencias placenteras simuladas",
    incorrectas: [
      "Que el placer es siempre malo por definición",
      "Que la realidad no tiene relevancia para el valor"
    ]
  },
  {
    enunciado: "¿Qué define una teoría del deseo informado del bien?",
    correcta: "Identifica el bien con lo que desearíamos con información y racionalidad adecuadas",
    incorrectas: [
      "Con lo que deseamos de modo impulsivo sin datos",
      "Con lo que otros nos imponen por decreto"
    ]
  },
  {
    enunciado: "¿Qué postulan las teorías de ‘lista objetiva’ del bienestar?",
    correcta: "Que algunos bienes (amistad, conocimiento, salud, logro) valen con independencia del deseo subjetivo",
    incorrectas: [
      "Que todos los bienes dependen del capricho individual",
      "Que solo cuenta el ingreso monetario"
    ]
  },
  {
    enunciado: "¿Cómo concibe el enfoque de capacidades (Nussbaum/Sen) el bien?",
    correcta: "Como oportunidades reales para funcionar con dignidad y agencia en esferas centrales de la vida",
    incorrectas: [
      "Como suma de placeres sin restricciones",
      "Como cumplimiento de costumbres sin evaluar dignidad"
    ]
  },
  {
    enunciado: "¿Qué sostiene el utilitarismo clásico sobre el valor?",
    correcta: "Que el valor total depende de la suma imparcial de bienestar; lo correcto maximiza ese valor",
    incorrectas: [
      "Que lo correcto es independiente de todo valor",
      "Que el valor es solo la tradición vigente"
    ]
  },
  {
    enunciado: "¿En qué se distingue el prioritarismo del igualitarismo?",
    correcta: "Prioritarismo da más peso a beneficios para los peor situados; igualitarismo valora la igualdad como tal",
    incorrectas: [
      "No hay diferencia: ambos maximizan suma total",
      "El prioritarismo favorece a los ya aventajados"
    ]
  },
  {
    enunciado: "¿Qué problema plantea la axiología poblacional (‘conclusión repugnante’)?",
    correcta: "Que agregar vidas apenas dignas puede parecer ‘mejor’ que menos vidas muy buenas, por pura suma",
    incorrectas: [
      "Que no es posible comparar calidades de vida",
      "Que toda comparación entre poblaciones es irracional"
    ]
  },
  {
    enunciado: "¿Qué es la supererogación en la teoría del valor y el deber?",
    correcta: "Acciones muy valiosas y loables que no son estrictamente obligatorias",
    incorrectas: [
      "Actos prohibidos que parecen buenos",
      "Actos indiferentes sin relevancia moral"
    ]
  },
  {
    enunciado: "¿Qué expresa la distinción ‘bueno’ vs. ‘correcto’ en ética?",
    correcta: "Teleología del bien/fines frente a deontología del deber y la justificación de normas",
    incorrectas: [
      "Diferencia entre moral privada y pública",
      "Separación entre ética y política por definición"
    ]
  },
  {
    enunciado: "¿Qué relación guarda la superveniencia entre hechos y valores?",
    correcta: "Diferencias evaluativas requieren diferencias en los hechos subyacentes",
    incorrectas: [
      "Los valores no dependen de los hechos en absoluto",
      "Los hechos se deducen lógicamente de los valores"
    ]
  },
  {
    enunciado: "¿Qué defiende el ‘buck-passing’ de Scanlon sobre ‘bueno’?",
    correcta: "Que ‘bueno’ remite a las razones que hacen valiosa una cosa en lugar de añadir una propiedad nueva",
    incorrectas: [
      "Que ‘bueno’ es una esencia metafísica incognoscible",
      "Que ‘bueno’ equivale a ‘barato y frecuente’"
    ]
  },
  {
    enunciado: "¿Qué dicen las teorías ‘fitting-attitude’ sobre el valor?",
    correcta: "Que algo es valioso si merece actitudes apropiadas como admiración o aprecio",
    incorrectas: [
      "Que el valor depende solo de la coacción legal",
      "Que el valor es equivalente al tamaño físico"
    ]
  },
  {
    enunciado: "¿Cómo aborda W. D. Ross los conflictos de valor y deber?",
    correcta: "Con deberes prima facie pluralistas, ponderables según el caso",
    incorrectas: [
      "Con una única regla suprema sin excepciones",
      "Negando que existan conflictos morales reales"
    ]
  },
  {
    enunciado: "¿Qué tesis central sostiene el pluralismo axiológico de Isaiah Berlin?",
    correcta: "Que hay múltiples valores últimos a veces inconmensurables y en conflicto",
    incorrectas: [
      "Que todos los valores se reducen a un solo principio",
      "Que no hay conflictos reales de valor"
    ]
  },
  {
    enunciado: "¿Qué introduce Ruth Chang con la noción de ‘paridad’ en comparaciones de valor?",
    correcta: "Relación robusta distinta de mejor/peor/igual, relevante para elecciones difíciles",
    incorrectas: [
      "La imposibilidad total de comparar valores",
      "Que toda comparación es puramente numérica"
    ]
  },
  {
    enunciado: "¿Por qué el valor epistémico importa para el bien humano?",
    correcta: "Porque verdad, rigor e integridad cognitiva condicionan elecciones y proyectos valiosos",
    incorrectas: [
      "Porque el conocimiento es neutral y ajeno al bien",
      "Porque la verdad depende solo del consenso"
    ]
  },
  {
    enunciado: "¿Qué rol juega el valor ambiental en la axiología contemporánea?",
    correcta: "Defender valor intrínseco de la naturaleza y deberes hacia ecosistemas y generaciones futuras",
    incorrectas: [
      "Reducir la naturaleza a mero recurso instrumental",
      "Negar obligaciones más allá del presente inmediato"
    ]
  },
  {
    enunciado: "¿Cómo se relaciona la responsabilidad intergeneracional (Jonas) con el valor?",
    correcta: "Amplía el círculo de consideración a la vida futura, priorizando la preservación de bienes fundamentales",
    incorrectas: [
      "Limita la ética al corto plazo productivo",
      "Sostiene que el futuro no tiene valor moral"
    ]
  },
  {
    enunciado: "¿Qué distingue un bien aparente de un bien real?",
    correcta: "El aparente atrae sin perfeccionar; el real contribuye efectivamente al florecimiento",
    incorrectas: [
      "El aparente es legal; el real, ilegal",
      "El aparente es espiritual; el real, material"
    ]
  },
  {
    enunciado: "¿Cómo se articulan bienes intrínsecos e instrumentales en la deliberación práctica?",
    correcta: "Seleccionando medios que no sacrifiquen injustificadamente fines valiosos por sí mismos",
    incorrectas: [
      "Priorizando siempre los medios frente a los fines",
      "Confundiendo medios con fines por simplicidad"
    ]
  },
  {
    enunciado: "¿Qué expresa la jerarquía aristotélica de bienes?",
    correcta: "Que algunos bienes son fines últimos y los demás medios subordinados",
    incorrectas: [
      "Que todos los bienes valen por igual",
      "Que solo cuentan bienes externos y fortuna"
    ]
  },
  {
    enunciado: "¿Qué tensión resuelve el constructivismo en la teoría del valor?",
    correcta: "Vincula la validez de valores y normas a procedimientos de justificación pública y agencia racional",
    incorrectas: [
      "Declara que el valor depende del azar biológico",
      "Reduce el valor a obediencia a la costumbre"
    ]
  },
  {
    enunciado: "¿Por qué no basta la agregación para capturar el valor moral de un estado?",
    correcta: "Porque la distribución, la prioridad y las restricciones de derecho también son moralmente relevantes",
    incorrectas: [
      "Porque la suma siempre refleja la justicia",
      "Porque la distribución es irrelevante por definición"
    ]
  },
  {
    enunciado: "¿Qué relación hay entre virtud y bien en la tradición de virtudes?",
    correcta: "La virtud es excelencia que realiza el bien humano en prácticas y hábitos",
    incorrectas: [
      "La virtud es decorativa y separada del bien",
      "La virtud equivale a obedecer sin comprender"
    ]
  },
  {
    enunciado: "¿Cómo integra MacIntyre el valor en la vida humana?",
    correcta: "Mediante la unidad narrativa de una vida orientada por bienes internos y virtudes encarnadas",
    incorrectas: [
      "Fragmentando la vida en episodios inconexos",
      "Limitando el valor a logros externos"
    ]
  },
  {
    enunciado: "¿Qué criterio ayuda a ordenar valores en conflictos prácticos reales?",
    correcta: "Publicitar razones, buscar imparcialidad y priorizar daños graves evitando sacrificios injustificados",
    incorrectas: [
      "Elegir siempre lo más popular",
      "Mantener el secreto y evitar la deliberación"
    ]
  }
];
