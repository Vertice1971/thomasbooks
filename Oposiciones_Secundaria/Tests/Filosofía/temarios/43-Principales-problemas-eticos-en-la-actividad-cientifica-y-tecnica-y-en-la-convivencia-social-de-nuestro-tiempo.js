// temarios/43-Principales-problemas-eticos-en-la-actividad-cientifica-y-tecnica-y-en-la-convivencia-social-de-nuestro-tiempo.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué resume el ethos científico descrito por Merton (CUDOS)?",
    correcta: "Normas como comunalismo, universalismo, desinterés y escepticismo organizado",
    incorrectas: [
      "Secreto, particularismo, interés propio y credulidad organizada",
      "Propiedad exclusiva del conocimiento y obediencia a jerarquías"
    ]
  },
  {
    enunciado: "¿Qué cuestiona la ‘neutralidad valorativa’ fuerte de la ciencia?",
    correcta: "Que las decisiones sobre qué investigar y cómo aplicar resultados implican juicios de valor",
    incorrectas: [
      "Que toda investigación es idéntica a opinión subjetiva",
      "Que las teorías científicas son válidas por tradición"
    ]
  },
  {
    enunciado: "¿Cuáles son las tres faltas graves de integridad científica conocidas como FFP?",
    correcta: "Fabricación, falsificación y plagio",
    incorrectas: [
      "Fatiga, fallo de memoria y pereza",
      "Frustración, fobia social y procrastinación"
    ]
  },
  {
    enunciado: "¿Qué es el p-hacking en investigación?",
    correcta: "Manipular análisis hasta lograr significación estadística deseada",
    incorrectas: [
      "Repetir un experimento para confirmar resultados",
      "Aplicar correcciones por comparaciones múltiples"
    ]
  },
  {
    enunciado: "HARKing significa…",
    correcta: "Plantear la hipótesis después de conocer los resultados",
    incorrectas: [
      "Hipótesis aleatoria registrada antes del estudio",
      "Hechos archivados para revisión externa independiente"
    ]
  },
  {
    enunciado: "¿Qué problema señala la ‘crisis de reproducibilidad’?",
    correcta: "Dificultad para replicar resultados publicados incluso siguiendo métodos declarados",
    incorrectas: [
      "Imposibilidad de publicar datos negativos",
      "Ausencia total de revisión por pares en ciencia"
    ]
  },
  {
    enunciado: "¿Qué práctica favorece la transparencia y reproducibilidad?",
    correcta: "Prerregistro de hipótesis y compartir datos y código abiertos",
    incorrectas: [
      "Publicar solo resúmenes sin materiales",
      "Evitar auditorías metodológicas externas"
    ]
  },
  {
    enunciado: "En ética de autoría, ¿qué criterio es adecuado para figurar como coautor?",
    correcta: "Contribución sustancial, revisión crítica, aprobación final y responsabilidad del trabajo",
    incorrectas: [
      "Ser director del departamento aunque no se participe",
      "Aportar financiación sin implicación intelectual alguna"
    ]
  },
  {
    enunciado: "¿Qué es la ‘autoría regalo’ (gift authorship)?",
    correcta: "Incluir como autor a quien no cumple criterios de contribución",
    incorrectas: [
      "Agradecer en los créditos a revisores anónimos",
      "Publicar en acceso abierto mediante una beca"
    ]
  },
  {
    enunciado: "¿Cómo deben gestionarse los conflictos de interés (COI) en ciencia?",
    correcta: "Declararlos y establecer salvaguardas para evitar sesgos en diseño y difusión",
    incorrectas: [
      "Ocultarlos para no afectar la reputación",
      "Delegarlos en el equipo de comunicación"
    ]
  },
  {
    enunciado: "Una obligación ética en la revisión por pares es…",
    correcta: "Mantener confidencialidad y evitar uso indebido de información revisada",
    incorrectas: [
      "Contactar a la prensa antes de emitir dictamen",
      "Aprobar automáticamente artículos de colegas"
    ]
  },
  {
    enunciado: "¿Qué principios articula el Informe Belmont para investigación con seres humanos?",
    correcta: "Respeto por las personas, beneficencia y justicia",
    incorrectas: [
      "Eficiencia, rapidez y rentabilidad",
      "Secreto, obediencia y lealtad institucional"
    ]
  },
  {
    enunciado: "La Declaración de Helsinki enfatiza que…",
    correcta: "El bienestar del participante debe prevalecer sobre los intereses de la ciencia y la sociedad",
    incorrectas: [
      "El interés científico prevalece siempre sobre el individual",
      "Los ensayos pueden omitir consentimiento informado si son útiles"
    ]
  },
  {
    enunciado: "Componentes básicos del consentimiento informado son…",
    correcta: "Información comprensible, voluntariedad y capacidad de decisión",
    incorrectas: [
      "Pago económico, secreto y firma del investigador",
      "Silencio del participante y aprobación verbal del médico"
    ]
  },
  {
    enunciado: "¿Qué exige la investigación con poblaciones vulnerables?",
    correcta: "Salvaguardas adicionales y justificación de su inclusión",
    incorrectas: [
      "Eximirles de consentimiento por su vulnerabilidad",
      "Ofrecer incentivos desproporcionados para reclutarlos"
    ]
  },
  {
    enunciado: "En investigación animal, el principio de las 3R significa…",
    correcta: "Reemplazo, reducción y refinamiento",
    incorrectas: [
      "Registro, reporte y replicación",
      "Resistencia, repetición y recompensa"
    ]
  },
  {
    enunciado: "En biobancos, una práctica ética clave es…",
    correcta: "Consentimiento amplio con gobernanza y posibilidad de retirada",
    incorrectas: [
      "Uso indefinido sin información al donante",
      "Venta automática de muestras a terceros"
    ]
  },
  {
    enunciado: "¿Qué problema plantea el ‘retorno de hallazgos incidentales’?",
    correcta: "Decidir si, cómo y cuándo comunicar resultados clínicamente relevantes no buscados",
    incorrectas: [
      "Impedir que el participante conozca nada del estudio",
      "Publicar en redes sociales todos los hallazgos"
    ]
  },
  {
    enunciado: "El principio de minimización de datos implica…",
    correcta: "Recoger solo los datos estrictamente necesarios para el fin declarado",
    incorrectas: [
      "Recopilar cuantos más datos mejor por si acaso",
      "Conservar datos indefinidamente sin propósito"
    ]
  },
  {
    enunciado: "¿En qué difieren anonimización y seudonimización?",
    correcta: "La anonimización elimina el vínculo con la identidad; la seudonimización lo oculta pero permite reidentificar bajo condiciones",
    incorrectas: [
      "Son idénticas y siempre reversibles",
      "Ambas impiden cualquier investigación futura"
    ]
  },
  {
    enunciado: "¿Qué riesgo ético central presentan los sistemas algorítmicos de decisión?",
    correcta: "Reproducir y amplificar sesgos injustos presentes en datos o diseños",
    incorrectas: [
      "Aumentar la transparencia por definición",
      "Imposibilitar la discriminación de cualquier tipo"
    ]
  },
  {
    enunciado: "¿Qué significa ‘explicabilidad’ (explainability) en IA?",
    correcta: "Ofrecer razones comprensibles sobre decisiones o predicciones del sistema",
    incorrectas: [
      "Traducir cualquier código a lenguaje coloquial",
      "Garantizar precisión perfecta sin explicaciones"
    ]
  },
  {
    enunciado: "¿Para qué sirve una evaluación de impacto algorítmico (AIA)?",
    correcta: "Identificar riesgos para derechos, sesgos y efectos sociales antes del despliegue",
    incorrectas: [
      "Optimizar únicamente latencia y coste",
      "Sustituir auditorías externas independientes"
    ]
  },
  {
    enunciado: "‘Control humano significativo’ en sistemas automatizados exige…",
    correcta: "Capacidad real de supervisar, entender y anular decisiones críticas",
    incorrectas: [
      "Aceptar siempre la salida del algoritmo",
      "Delegar todo juicio en la máquina por eficiencia"
    ]
  },
  {
    enunciado: "Un impacto laboral de la automatización que exige atención ética es…",
    correcta: "Desplazamiento de tareas y polarización del empleo",
    incorrectas: [
      "Aumento homogéneo de salarios en todos los sectores",
      "Desaparición exclusiva de trabajos altamente cualificados"
    ]
  },
  {
    enunciado: "¿Qué riesgo conlleva el ‘management algorítmico’ en el trabajo?",
    correcta: "Vigilancia invasiva y pérdida de autonomía del trabajador",
    incorrectas: [
      "Imposibilidad de medir rendimiento",
      "Eliminación total de conflictos laborales"
    ]
  },
  {
    enunciado: "Un desafío ético de las plataformas para la convivencia democrática es…",
    correcta: "Desinformación y amplificación de contenidos polarizantes",
    incorrectas: [
      "Garantía automática de veracidad",
      "Neutralidad perfecta sin intervención humana"
    ]
  },
  {
    enunciado: "El ‘perfilado’ y la publicidad comportamental plantean…",
    correcta: "Asimetrías de poder informacional y riesgos para la privacidad",
    incorrectas: [
      "Igualdad de información entre usuarios y plataformas",
      "Imposibilidad de segmentar audiencias"
    ]
  },
  {
    enunciado: "¿Qué define la noción de ‘doble uso’ (dual use) en investigación?",
    correcta: "Resultados o técnicas que pueden emplearse con fines beneficiosos o dañinos",
    incorrectas: [
      "Estudios que solo sirven para fines civiles",
      "Tecnologías que carecen de riesgos éticos"
    ]
  },
  {
    enunciado: "El principio de precaución busca…",
    correcta: "Prevenir daños graves o irreversibles cuando hay incertidumbre científica",
    incorrectas: [
      "Acelerar la adopción de cualquier innovación",
      "Sustituir toda evaluación de riesgos cuantitativa"
    ]
  },
  {
    enunciado: "¿Qué aporta el ‘principio de responsabilidad’ de Hans Jonas?",
    correcta: "Extiende la obligación moral hacia el futuro y la vida vulnerable ante potencias tecnológicas",
    incorrectas: [
      "Limita la ética al corto plazo económico",
      "Niega deberes con generaciones futuras"
    ]
  },
  {
    enunciado: "En edición genética, ¿qué hace especialmente problemática la línea germinal?",
    correcta: "Sus efectos son heredables y afectan a futuras generaciones",
    incorrectas: [
      "Carece de impacto biológico alguno",
      "Solo permite terapias en pacientes adultos"
    ]
  },
  {
    enunciado: "Una preocupación central en neurotecnología es…",
    correcta: "La privacidad mental y el uso no consentido de datos neurales",
    incorrectas: [
      "La imposibilidad de registrar actividad cerebral",
      "La total irrelevancia clínica de estos datos"
    ]
  },
  {
    enunciado: "Un riesgo ético del big data sanitario es…",
    correcta: "Sesgos por falta de representatividad que dañan a grupos vulnerables",
    incorrectas: [
      "Exceso de diversidad que impide cualquier aprendizaje",
      "Eliminación automática de desigualdades sanitarias"
    ]
  },
  {
    enunciado: "¿Qué evalúa el Análisis de Ciclo de Vida (ACV) de una tecnología?",
    correcta: "Impactos ambientales desde extracción hasta fin de vida del producto",
    incorrectas: [
      "Solo el coste económico de fabricación",
      "Únicamente el consumo energético en uso"
    ]
  },
  {
    enunciado: "¿Qué problema ético plantean los residuos electrónicos y cadenas de suministro?",
    correcta: "Contaminación, explotación laboral y trazabilidad de minerales críticos",
    incorrectas: [
      "Abundancia infinita de materiales sin efectos",
      "Reciclaje perfecto garantizado por el mercado"
    ]
  },
  {
    enunciado: "¿Qué es el ‘efecto rebote’ ligado a mejoras de eficiencia?",
    correcta: "Aumentos de consumo que neutralizan parte del ahorro logrado",
    incorrectas: [
      "La imposibilidad de medir consumos",
      "La reducción automática de demanda tras innovar"
    ]
  },
  {
    enunciado: "Sobre geoingeniería climática, una directriz ética prudente es…",
    correcta: "Avanzar con gobernanza internacional, evaluación de riesgos y consentimiento de afectados",
    incorrectas: [
      "Desplegar a gran escala sin supervisión",
      "Prohibir toda investigación básica en el área"
    ]
  },
  {
    enunciado: "La Investigación e Innovación Responsables (RRI) promueve…",
    correcta: "Anticipación, reflexividad, inclusión y capacidad de respuesta en ciencia y tecnología",
    incorrectas: [
      "Secreto, exclusión y desresponsabilización",
      "Priorizar métricas sobre impactos sociales"
    ]
  },
  {
    enunciado: "‘Ética por diseño’ en tecnología implica…",
    correcta: "Incorporar privacidad, seguridad y justicia desde la concepción del sistema",
    incorrectas: [
      "Añadir cláusulas legales al final del proyecto",
      "Trasladar toda responsabilidad al usuario final"
    ]
  },
  {
    enunciado: "¿Qué es el whistleblowing en contextos científico-técnicos?",
    correcta: "Denuncia responsable de irregularidades de interés público con protección al informante",
    incorrectas: [
      "Filtración anónima de datos personales por venganza",
      "Publicidad de resultados preliminares para ganar fama"
    ]
  }
];
