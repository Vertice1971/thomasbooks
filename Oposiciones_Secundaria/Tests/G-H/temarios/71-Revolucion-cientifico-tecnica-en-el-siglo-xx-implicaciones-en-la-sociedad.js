// temarios/71-Revolucion-cientifico-tecnica-en-el-siglo-xx-implicaciones-en-la-sociedad.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué se entiende por revolución científico-técnica en el siglo XX?",
    correcta: "Un proceso acelerado de descubrimientos científicos y aplicaciones tecnológicas que transforman la economía y la vida social",
    incorrectas: [
      "Un retorno a métodos artesanales previos a la Revolución Industrial",
      "Un conjunto de avances aislados sin impacto social"
    ]
  },
  {
    enunciado: "¿Qué rasgo distingue a la ‘Big Science’ del siglo XX?",
    correcta: "La investigación a gran escala con equipos multidisciplinares y fuerte financiación estatal",
    incorrectas: [
      "El trabajo solitario del científico en su gabinete",
      "La ausencia total de cooperación internacional"
    ]
  },
  {
    enunciado: "¿Qué aportó Albert Einstein a comienzos del siglo XX?",
    correcta: "La teoría de la relatividad, que reformuló el espacio, el tiempo y la gravedad",
    incorrectas: [
      "La síntesis de la penicilina",
      "La invención del microscopio electrónico"
    ]
  },
  {
    enunciado: "¿Qué campo inauguró la mecánica cuántica?",
    correcta: "El estudio de la materia y la energía a escala atómica y subatómica",
    incorrectas: [
      "La descripción de continentes y océanos",
      "La clasificación de las especies vegetales"
    ]
  },
  {
    enunciado: "¿Qué descubrió Fleming en 1928?",
    correcta: "Las propiedades antibióticas de la penicilina",
    incorrectas: [
      "La estructura de doble hélice del ADN",
      "La vacuna contra la poliomielitis"
    ]
  },
  {
    enunciado: "¿Qué hito de 1953 transformó la biología molecular?",
    correcta: "La propuesta de la doble hélice del ADN por Watson y Crick",
    incorrectas: [
      "La primera radiografía médica",
      "La teoría de la evolución por selección natural"
    ]
  },
  {
    enunciado: "¿Qué define mejor el concepto de tecnología?",
    correcta: "La articulación de saberes técnicos y científicos para resolver problemas y crear productos",
    incorrectas: [
      "El conocimiento filosófico desvinculado de la práctica",
      "La actividad artística sin base material"
    ]
  },
  {
    enunciado: "¿Qué autor vinculó el progreso científico a ‘programas de investigación’?",
    correcta: "Imre Lakatos",
    incorrectas: [
      "Émile Durkheim",
      "Friedrich Hayek"
    ]
  },
  {
    enunciado: "¿Qué sostiene Karl Popper como criterio de cientificidad?",
    correcta: "La falsabilidad de las teorías",
    incorrectas: [
      "La repetición acrítica de tradiciones",
      "La verificabilidad por autoridad política"
    ]
  },
  {
    enunciado: "¿Qué noción central introduce Thomas S. Kuhn?",
    correcta: "La ciencia progresa mediante cambios de paradigma",
    incorrectas: [
      "La ciencia avanza solo por acumulación lineal de datos",
      "La ciencia depende exclusivamente del mercado"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al Proyecto Manhattan?",
    correcta: "Un programa militar-científico que desarrolló la bomba atómica en la Segunda Guerra Mundial",
    incorrectas: [
      "Una misión de exploración del fondo oceánico",
      "Un plan europeo de alfabetización digital"
    ]
  },
  {
    enunciado: "¿Cuál fue el impacto social de los antibióticos?",
    correcta: "Redujeron drásticamente la mortalidad por infecciones bacterianas",
    incorrectas: [
      "Aumentaron la prevalencia de infecciones víricas",
      "Eliminaron la necesidad de vacunas"
    ]
  },
  {
    enunciado: "¿Qué innovación permitió la miniaturización electrónica del siglo XX?",
    correcta: "El transistor y, posteriormente, el circuito integrado",
    incorrectas: [
      "La imprenta de tipos móviles",
      "El telégrafo óptico"
    ]
  },
  {
    enunciado: "¿Qué red antecedió a internet?",
    correcta: "ARPANET",
    incorrectas: [
      "MorseNet",
      "Teletext Global"
    ]
  },
  {
    enunciado: "¿Qué expresa el concepto de ‘sociedad de la información’?",
    correcta: "La centralidad del conocimiento, los datos y las TIC en economía y cultura",
    incorrectas: [
      "El retorno a una economía agraria local",
      "La sustitución total de la industria por la artesanía"
    ]
  },
  {
    enunciado: "¿Qué autor analizó la ‘sociedad red’ y la comunicación global?",
    correcta: "Manuel Castells",
    incorrectas: [
      "Max Weber",
      "Jean Piaget"
    ]
  },
  {
    enunciado: "¿Qué implicación laboral trajo la automatización?",
    correcta: "Reconfiguración del empleo con mayor demanda de cualificación tecnológica",
    incorrectas: [
      "Desaparición completa del sector servicios",
      "Prohibición de la formación continua"
    ]
  },
  {
    enunciado: "¿Qué describe mejor la ‘destrucción creativa’ de Schumpeter?",
    correcta: "La sustitución de tecnologías y modelos de negocio por innovaciones superiores",
    incorrectas: [
      "La destrucción de fábricas sin creación de alternativas",
      "La prohibición de patentes en sectores emergentes"
    ]
  },
  {
    enunciado: "¿Qué papel tuvieron los satélites de comunicación?",
    correcta: "Hicieron posible la transmisión global de datos, voz e imagen en tiempo real",
    incorrectas: [
      "Sustituyeron por completo los cables submarinos el mismo año de su lanzamiento",
      "Solo sirvieron para usos meteorológicos"
    ]
  },
  {
    enunciado: "¿Qué avance hizo viable la exploración espacial tripulada?",
    correcta: "El desarrollo de cohetes de varias etapas y sistemas de navegación",
    incorrectas: [
      "El motor de vapor aplicado a globos aerostáticos",
      "La propulsión exclusiva por vela solar en 1900"
    ]
  },
  {
    enunciado: "¿Qué riesgo ético destaca en biotecnología?",
    correcta: "La edición genética sin adecuados marcos de responsabilidad",
    incorrectas: [
      "La imposibilidad de regular patentes",
      "La ausencia de ensayos clínicos en medicina"
    ]
  },
  {
    enunciado: "¿Qué reflexión propone Hans Jonas?",
    correcta: "El principio de responsabilidad ante los impactos futuros de la técnica",
    incorrectas: [
      "La renuncia completa a toda innovación",
      "La subordinación de la ética a la rentabilidad inmediata"
    ]
  },
  {
    enunciado: "¿Qué advirtió Heidegger respecto a la técnica?",
    correcta: "Que es un modo de desocultamiento del ser que puede reducir el mundo a ‘fondo de reserva’",
    incorrectas: [
      "Que la técnica carece de dimensión ontológica",
      "Que la técnica garantiza por sí misma la libertad humana"
    ]
  },
  {
    enunciado: "¿Qué describe la sociedad del riesgo de Ulrich Beck?",
    correcta: "La centralidad de riesgos tecnológicos y ambientales en sociedades avanzadas",
    incorrectas: [
      "El retorno a riesgos exclusivamente naturales",
      "La desaparición de la industria química"
    ]
  },
  {
    enunciado: "¿Cuál fue un efecto sanitario de la vacunación masiva en el siglo XX?",
    correcta: "La erradicación de enfermedades como la viruela",
    incorrectas: [
      "El aumento global de la mortalidad infantil",
      "La sustitución de la higiene por antibióticos"
    ]
  },
  {
    enunciado: "¿Qué relación se establece en el enfoque CTS?",
    correcta: "Interacción bidireccional entre ciencia, tecnología y sociedad",
    incorrectas: [
      "Primacía absoluta de la ciencia al margen de lo social",
      "Dependencia total de la técnica respecto al arte"
    ]
  },
  {
    enunciado: "¿Qué aportó la energía nuclear al siglo XX?",
    correcta: "Una nueva fuente energética con potencial civil y militar",
    incorrectas: [
      "Un combustible fósil abundante y barato",
      "Un método de cultivo agrícola"
    ]
  },
  {
    enunciado: "¿Qué transformación cultural impulsaron cine y televisión?",
    correcta: "La creación de lenguajes audiovisuales de alcance masivo",
    incorrectas: [
      "La desaparición del teatro y la literatura",
      "La prohibición de la música popular"
    ]
  },
  {
    enunciado: "¿Qué innovación permitió la navegación y posicionamiento de precisión?",
    correcta: "El sistema GPS basado en satélites",
    incorrectas: [
      "El astrolabio digital del siglo XIX",
      "La brújula atómica portátil del siglo XVIII"
    ]
  },
  {
    enunciado: "¿Qué impacto tuvo la informática en la gestión empresarial?",
    correcta: "Automatizó procesos, optimizó datos y permitió la toma de decisiones en tiempo real",
    incorrectas: [
      "Eliminó toda necesidad de organización interna",
      "Sustituyó la contabilidad por votaciones públicas"
    ]
  },
  {
    enunciado: "¿Qué describe mejor la brecha digital?",
    correcta: "Desigualdad en el acceso y uso de las tecnologías de la información",
    incorrectas: [
      "Homogeneidad total en la distribución de dispositivos",
      "Inexistencia de disparidades educativas"
    ]
  },
  {
    enunciado: "¿Qué aportan las energías renovables al sistema energético?",
    correcta: "Diversificación con menor impacto ambiental y dependencia de fósiles",
    incorrectas: [
      "Aumento necesario de emisiones de CO₂",
      "Imposibilidad de integración en redes eléctricas"
    ]
  },
  {
    enunciado: "¿Qué peligro social puede amplificar el entorno digital?",
    correcta: "La difusión acelerada de desinformación",
    incorrectas: [
      "La eliminación de todos los sesgos cognitivos",
      "La desaparición de la opinión pública"
    ]
  },
  {
    enunciado: "¿Qué uso sanitario se potencia con la imagen médica (rayos X, TAC, RM)?",
    correcta: "Diagnóstico no invasivo de estructuras y tejidos",
    incorrectas: [
      "Sustitución de la cirugía en todos los casos",
      "Lectura automática de emociones"
    ]
  },
  {
    enunciado: "¿Qué efecto tuvo la aviación comercial en el siglo XX?",
    correcta: "Redujo tiempos de viaje y favoreció la globalización económica y cultural",
    incorrectas: [
      "Sustituyó los ferrocarriles de mercancías",
      "Impidió el turismo internacional"
    ]
  },
  {
    enunciado: "¿Qué describe la nanotecnología?",
    correcta: "Manipulación de materia a escala nanométrica para nuevos materiales y dispositivos",
    incorrectas: [
      "Estudio de galaxias a gran escala",
      "Exclusivamente la construcción de macroestructuras"
    ]
  },
  {
    enunciado: "¿Qué avance hizo posible la telefonía móvil moderna?",
    correcta: "La digitalización de señales y redes celulares",
    incorrectas: [
      "El telégrafo óptico con banderas",
      "La conducción de voz por tubos neumáticos"
    ]
  },
  {
    enunciado: "¿Qué desafío ético plantean los macrodatos (big data)?",
    correcta: "La protección de la privacidad y el uso responsable de la información personal",
    incorrectas: [
      "La imposibilidad de anonimizar datos",
      "La prohibición de auditorías algorítmicas"
    ]
  },
  {
    enunciado: "¿Qué describe mejor el impacto educativo de las TIC?",
    correcta: "Nuevas metodologías, acceso ampliado a recursos y competencia digital",
    incorrectas: [
      "Sustitución de docentes por completo",
      "Supresión de la evaluación formativa"
    ]
  },
  {
    enunciado: "¿Qué logro símbolo de la era espacial se alcanzó en 1969?",
    correcta: "El alunizaje de la misión Apolo 11",
    incorrectas: [
      "El primer vuelo en globo de los Montgolfier",
      "La construcción del primer ferrocarril"
    ]
  }
];
