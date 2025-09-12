// temarios/38-La-genesis-de-los-valores-morales-naturaleza-y-convencion.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué se entiende por valor moral en un sentido filosófico riguroso?",
    correcta: "Una cualidad normativa que sirve de razón para la acción y la evaluación de conductas",
    incorrectas: [
      "Un mero sentimiento privado sin pretensión de validez",
      "Un sinónimo exacto de placer físico inmediato"
    ]
  },
  {
    enunciado: "¿Cuál es la diferencia analítica entre valor, bien y norma?",
    correcta: "El valor orienta la evaluación, el bien es el objeto valioso y la norma prescribe o prohíbe acciones",
    incorrectas: [
      "Valor y norma son idénticos; el bien es solo un adorno retórico",
      "El valor describe hechos, la norma expresa emociones y el bien es una convención legal"
    ]
  },
  {
    enunciado: "Según Max Scheler, ¿cómo se accede a los valores?",
    correcta: "Mediante una emoción intencional que capta cualidades axiológicas objetivas",
    incorrectas: [
      "Por deducción geométrica a partir de axiomas formales",
      "Exclusivamente por medición empírica con instrumentos"
    ]
  },
  {
    enunciado: "¿Qué aporta Nicolai Hartmann a la teoría de los valores?",
    correcta: "Una estratificación ontológica y la objetividad de los valores independientes del deseo",
    incorrectas: [
      "La reducción de los valores a meras leyes de la física",
      "La identificación de los valores con normas jurídicas positivas"
    ]
  },
  {
    enunciado: "¿Qué denuncia G. E. Moore como 'falacia naturalista'?",
    correcta: "Definir 'bueno' en términos puramente naturales o fácticos",
    incorrectas: [
      "Usar términos éticos en debates públicos",
      "Apelar a intuiciones morales en la deliberación"
    ]
  },
  {
    enunciado: "¿Qué implica la 'guillotina' de Hume sobre el paso del ser al deber ser?",
    correcta: "Que de proposiciones descriptivas no se sigue lógicamente una conclusión normativa sin un puente justificativo",
    incorrectas: [
      "Que los juicios morales pueden demostrarse como teoremas matemáticos",
      "Que toda afirmación normativa es idéntica a una estadística de preferencias"
    ]
  },
  {
    enunciado: "¿Qué rasgo central tiene la ética kantiana respecto a los valores?",
    correcta: "Sitúa la dignidad y la autonomía racional como criterio universal de validez moral",
    incorrectas: [
      "Sustituye la razón por la costumbre como fuente de obligación",
      "Reduce lo moral a maximizar la utilidad esperada"
    ]
  },
  {
    enunciado: "¿Cuál es la aportación genealógica de Nietzsche sobre los valores?",
    correcta: "Explica su origen histórico-social y critica la pretensión de universalidad de los valores dominantes",
    incorrectas: [
      "Demuestra empíricamente la existencia de valores absolutos",
      "Propone una ética de la obediencia a la tradición"
    ]
  },
  {
    enunciado: "¿Cómo concibe Philippa Foot el vínculo entre valores y naturaleza humana?",
    correcta: "Los valores morales se anclan en formas de vida y virtudes que realizan el florecimiento humano",
    incorrectas: [
      "Los valores dependen únicamente de preferencias caprichosas",
      "Los valores son propiedades físicas medibles como la masa"
    ]
  },
  {
    enunciado: "¿Qué sostiene el realismo naturalista sobre los valores (p. ej., Railton/Putnam)?",
    correcta: "Que los hechos y los valores están entrelazados en prácticas humanas significativas",
    incorrectas: [
      "Que los valores existen solo si los vota una mayoría",
      "Que los juicios de valor son errores semánticos siempre"
    ]
  },
  {
    enunciado: "¿Qué afirma el emotivismo de Ayer/Stevenson sobre los juicios morales?",
    correcta: "Que expresan actitudes emocionales y buscan influir en la conducta",
    incorrectas: [
      "Que describen hechos naturales comprobables",
      "Que son proposiciones analíticas necesarias"
    ]
  },
  {
    enunciado: "¿Cómo entiende R. M. Hare las oraciones morales?",
    correcta: "Como prescripciones universales ligadas al uso práctico del lenguaje",
    incorrectas: [
      "Como definiciones taxativas de conceptos científicos",
      "Como afirmaciones carentes de implicación práctica"
    ]
  },
  {
    enunciado: "¿Qué propone el quasi-realismo (Blackburn/Gibbard)?",
    correcta: "Explicar cómo nuestras prácticas hacen que los juicios morales parezcan objetivos sin asumir propiedades morales robustas",
    incorrectas: [
      "Defender que la moral es una ciencia natural más",
      "Identificar valores con hechos estadísticos sin más"
    ]
  },
  {
    enunciado: "¿Qué rasgo distintivo tiene el constructivismo de Korsgaard?",
    correcta: "Los criterios de validez moral se construyen desde la agencia racional y la autoconstitución del sujeto",
    incorrectas: [
      "La moral depende solo de sanciones legales",
      "La validez moral es idéntica a la costumbre local"
    ]
  },
  {
    enunciado: "¿Qué mecanismo legitima principios de justicia en Rawls?",
    correcta: "La elección tras un velo de ignorancia que asegura imparcialidad",
    incorrectas: [
      "La agregación simple de utilidades",
      "La obediencia a tradiciones sin crítica"
    ]
  },
  {
    enunciado: "Según T. M. Scanlon, ¿qué hace razonable una norma?",
    correcta: "Que nadie pudiera rechazarla justificadamente en un marco de respeto mutuo",
    incorrectas: [
      "Que maximice el beneficio para la mayoría siempre",
      "Que sea la más antigua de la comunidad"
    ]
  },
  {
    enunciado: "¿Qué explica David Lewis con su teoría de las convenciones?",
    correcta: "Que surgen como soluciones de coordinación estables en interacciones recurrentes",
    incorrectas: [
      "Que toda convención es impuesta por ley",
      "Que las convenciones son verdades lógicas necesarias"
    ]
  },
  {
    enunciado: "¿Qué añade Cristina Bicchieri a las normas sociales?",
    correcta: "El papel de expectativas empíricas y normativas y umbrales de conformidad",
    incorrectas: [
      "Que las normas sociales no dependen de expectativas",
      "Que basta un mandato para estabilizarlas siempre"
    ]
  },
  {
    enunciado: "¿Qué muestran los estudios de Elinor Ostrom sobre bienes comunes?",
    correcta: "Que comunidades pueden autogobernarse con reglas compartidas y sanciones proporcionales",
    incorrectas: [
      "Que los comunes siempre fracasan y deben privatizarse",
      "Que solo un regulador central puede evitar abusos"
    ]
  },
  {
    enunciado: "¿En qué consiste el pluralismo axiológico de Isaiah Berlin?",
    correcta: "En que existen múltiples valores legítimos a veces inconmensurables y en conflicto",
    incorrectas: [
      "En que todos los valores se reducen a uno básico",
      "En que los valores no pueden entrar en conflicto"
    ]
  },
  {
    enunciado: "¿Cómo articulan Nussbaum y Sen un 'mínimo' en sociedades plurales?",
    correcta: "Mediante el enfoque de capacidades ligado a dignidad, agencia y oportunidades reales",
    incorrectas: [
      "Por imposición de un único código religioso",
      "Igualando moralmente bienestar con renta monetaria"
    ]
  },
  {
    enunciado: "¿Qué tesis central defiende J. L. Mackie en su 'teoría del error'?",
    correcta: "Que los juicios morales presuponen propiedades objetivas que no existen",
    incorrectas: [
      "Que los valores morales son verdades a priori",
      "Que toda moral es equivalente al derecho penal"
    ]
  },
  {
    enunciado: "¿Qué son los 'hechos institucionales' según Searle?",
    correcta: "Realidades creadas por reglas constitutivas que asignan funciones deónticas",
    incorrectas: [
      "Hechos físicos independientes del lenguaje",
      "Normas morales deducidas de axiomas matemáticos"
    ]
  },
  {
    enunciado: "¿Qué sostiene Putnam sobre la dicotomía hecho/valor?",
    correcta: "Que se derrumba porque juicios epistémicos y prácticos entrelazan valores y descripciones",
    incorrectas: [
      "Que la ciencia es moralmente neutra sin valores epistémicos",
      "Que los valores son idénticos a estadísticas"
    ]
  },
  {
    enunciado: "¿Qué propone Darwin sobre el origen de la simpatía moral?",
    correcta: "Que pudo evolucionar como ventaja adaptativa para la cooperación social",
    incorrectas: [
      "Que la moral surgió por revelación invariable",
      "Que la selección natural impide conductas cooperativas"
    ]
  },
  {
    enunciado: "¿Qué evidencias ofrece Frans de Waal en primates respecto a la moralidad?",
    correcta: "Conductas de empatía, reconciliación y reciprocidad con relevancia proto-moral",
    incorrectas: [
      "Ausencia total de cooperación entre primates",
      "Indiferencia ante la ruptura de lazos sociales"
    ]
  },
  {
    enunciado: "¿Qué muestra la aversión a la inequidad (Brosnan y de Waal)?",
    correcta: "Sensibilidad a recompensas desiguales que sugiere bases de justicia distributiva rudimentaria",
    incorrectas: [
      "Preferencia por resultados arbitrarios siempre",
      "Incapacidad animal para comparar tratos"
    ]
  },
  {
    enunciado: "¿Qué diferencia relevante se observa entre chimpancés y bonobos para el debate axiológico?",
    correcta: "Los bonobos exhiben más conductas de apaciguamiento y cooperación sociosexual",
    incorrectas: [
      "Los chimpancés carecen de cooperación por completo",
      "Los bonobos son incapaces de formar vínculos sociales"
    ]
  },
  {
    enunciado: "¿Qué aportan los marcadores somáticos de Damasio al juicio moral?",
    correcta: "Emociones corporales que orientan la deliberación práctica en contextos complejos",
    incorrectas: [
      "Prueban que la razón es inútil en ética",
      "Sustituyen por completo la argumentación"
    ]
  },
  {
    enunciado: "¿Qué modelo proponen los estudios de Joshua Greene sobre dilemas morales?",
    correcta: "Un doble proceso: respuestas emocionales rápidas y razonamientos deliberativos más lentos",
    incorrectas: [
      "Un único sistema puramente lógico sin afectos",
      "Una aleatoriedad sin patrones cognitivos"
    ]
  },
  {
    enunciado: "¿Qué describe la teoría de las fundaciones morales de Haidt?",
    correcta: "Módulos valorativos como cuidado, justicia, lealtad, autoridad, pureza y libertad combinados culturalmente",
    incorrectas: [
      "Una única base moral válida para todos",
      "La irrelevancia de la cultura en la moral"
    ]
  },
  {
    enunciado: "¿Qué muestran los experimentos interculturales de Henrich con el juego del ultimátum?",
    correcta: "Gran variabilidad cultural en nociones de equidad y disposición a castigar",
    incorrectas: [
      "Uniformidad total en todas las culturas",
      "Indiferencia cultural ante la justicia"
    ]
  },
  {
    enunciado: "¿Qué enseña la coevolución gene-cultura (Boyd & Richerson) sobre valores?",
    correcta: "Que predisposiciones biológicas y aprendizaje social se retroalimentan configurando normas",
    incorrectas: [
      "Que la cultura es independiente de la biología",
      "Que la biología determina completamente los valores"
    ]
  },
  {
    enunciado: "¿En qué consiste el 'Darwinian Dilemma' de Sharon Street para el realismo moral?",
    correcta: "En que la selección natural explicaría nuestras creencias morales de forma que socava su pretendida objetividad",
    incorrectas: [
      "En demostrar que la evolución selecciona verdades morales",
      "En negar toda influencia evolutiva en la moral"
    ]
  },
  {
    enunciado: "¿Qué añade Hans Jonas a la discusión sobre la génesis de valores?",
    correcta: "Una ampliación de la responsabilidad hacia el futuro y la vida frágil frente a tecnologías poderosas",
    incorrectas: [
      "Una reducción de la ética a preferencias presentes",
      "La negación del deber hacia generaciones futuras"
    ]
  },
  {
    enunciado: "¿Qué función cumple la reputación y el castigo altruista en normas morales?",
    correcta: "Sostener la cooperación en grupos grandes mediante incentivos y sanciones informales",
    incorrectas: [
      "Destruir toda forma de cooperación social",
      "Hacer innecesarias las expectativas compartidas"
    ]
  },
  {
    enunciado: "¿Cómo contraponían sofistas y Sócrates/Platón el origen de los valores?",
    correcta: "Los sofistas los veían convencionales; Sócrates/Platón defendían su fundamentación racional universal",
    incorrectas: [
      "Ambos defendían el relativismo estricto",
      "Ambos reducían los valores a leyes físicas"
    ]
  },
  {
    enunciado: "¿Qué sostiene Tomás de Aquino sobre la génesis de los valores morales?",
    correcta: "Se fundan en la ley natural, participada por la razón humana en orden a bienes objetivos",
    incorrectas: [
      "Dependen solo de la coacción estatal",
      "Son meras preferencias sin teleología"
    ]
  },
  {
    enunciado: "¿Qué papel tienen las instituciones en la consolidación de valores compartidos?",
    correcta: "Canalizan expectativas, estabilizan normas y hacen posibles acuerdos duraderos",
    incorrectas: [
      "Imposibilitan la cooperación al multiplicar conflictos",
      "Sustituyen la deliberación por azar"
    ]
  },
  {
    enunciado: "¿Qué tesis sintetiza una visión biocultural de la génesis de valores?",
    correcta: "Los valores emergen de predisposiciones naturales moduladas por lenguaje, prácticas e instituciones justificadas",
    incorrectas: [
      "Los valores son accidentes sin función adaptativa ni social",
      "Los valores se fijan genéticamente sin variación cultural"
    ]
  }
];
