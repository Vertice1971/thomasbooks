// temarios/24-La-antropologia-como-campo-de-estudio.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué significa etimológicamente el término antropología?",
    correcta: "Proviene de ánthropos (hombre) y lógos (estudio), es decir, estudio del ser humano",
    incorrectas: [
      "Deriva de bios y logos, refiriéndose a la vida animal",
      "Se refiere únicamente a la descripción de pueblos antiguos"
    ]
  },
  {
    enunciado: "¿Qué diferencia fundamental tiene la antropología respecto a la sociología?",
    correcta: "La antropología estudia también lo simbólico y cultural además de las estructuras sociales",
    incorrectas: [
      "La antropología se limita a estadísticas poblacionales",
      "La sociología es meramente filosófica sin investigación empírica"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la antropología como ciencia?",
    correcta: "Su perspectiva integral y holística sobre el ser humano",
    incorrectas: [
      "La reducción exclusiva a factores biológicos",
      "La subordinación a la psicología experimental"
    ]
  },
  {
    enunciado: "¿Qué estudia la antropología filosófica?",
    correcta: "La esencia, libertad, racionalidad e historicidad del ser humano",
    incorrectas: [
      "La clasificación de fósiles humanos únicamente",
      "La recopilación de estadísticas económicas"
    ]
  },
  {
    enunciado: "¿Qué autores destacan en la antropología filosófica contemporánea?",
    correcta: "Scheler, Gehlen, Plessner y Cassirer",
    incorrectas: [
      "Frege, Russell y Wittgenstein",
      "Descartes, Pascal y Malebranche"
    ]
  },
  {
    enunciado: "¿Qué estudia la antropología cultural?",
    correcta: "Las manifestaciones culturales, lenguajes, símbolos y costumbres",
    incorrectas: [
      "Los procesos bioquímicos del organismo",
      "La estructura lógica del lenguaje matemático"
    ]
  },
  {
    enunciado: "¿Qué principio metodológico defiende la antropología cultural?",
    correcta: "El relativismo cultural frente al etnocentrismo",
    incorrectas: [
      "La imposición del canon cultural europeo",
      "La negación de la diversidad cultural"
    ]
  },
  {
    enunciado: "¿Qué estudia la antropología social?",
    correcta: "Las instituciones, roles, sistemas de parentesco y organización comunitaria",
    incorrectas: [
      "El sistema nervioso central y sus reacciones",
      "La interpretación de textos literarios clásicos"
    ]
  },
  {
    enunciado: "¿Qué autores representan el funcionalismo en antropología social?",
    correcta: "Malinowski y Radcliffe-Brown",
    incorrectas: [
      "Husserl y Heidegger",
      "Locke y Hume"
    ]
  },
  {
    enunciado: "¿Qué estudia la antropología biológica o física?",
    correcta: "La evolución, genética y características biológicas de la especie humana",
    incorrectas: [
      "El análisis de mitos y símbolos religiosos",
      "La estructura lógica de la matemática"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al método holístico en antropología?",
    correcta: "La consideración conjunta de dimensiones biológicas, culturales y sociales",
    incorrectas: [
      "La reducción a un único aspecto del ser humano",
      "La exclusión de los contextos históricos"
    ]
  },
  {
    enunciado: "¿Qué es la observación participante en antropología?",
    correcta: "La implicación del investigador en la vida cotidiana de la comunidad estudiada",
    incorrectas: [
      "La recopilación de datos exclusivamente en laboratorios",
      "La entrevista sin contacto directo con la población"
    ]
  },
  {
    enunciado: "¿Qué exige la ética en la investigación antropológica?",
    correcta: "Respeto a las comunidades y consentimiento informado",
    incorrectas: [
      "Manipulación cultural sin aviso",
      "Indiferencia frente a los derechos humanos"
    ]
  },
  {
    enunciado: "¿Qué afirmaba Aristóteles sobre el ser humano?",
    correcta: "Es un animal racional y político",
    incorrectas: [
      "Es un dios caído en el mundo",
      "Es pura materia sin forma"
    ]
  },
  {
    enunciado: "¿Qué concepto aporta Platón a la antropología filosófica?",
    correcta: "El dualismo cuerpo-alma y el hombre como microcosmos",
    incorrectas: [
      "El materialismo radical del alma",
      "La inexistencia del mundo inteligible"
    ]
  },
  {
    enunciado: "¿Qué papel tiene la antropología en Kant?",
    correcta: "Es horizonte de las tres preguntas filosóficas resumidas en ¿qué es el hombre?",
    incorrectas: [
      "Es ciencia auxiliar de la física",
      "Se reduce a un manual de técnicas artísticas"
    ]
  },
  {
    enunciado: "¿Qué aportó Herder a la antropología moderna?",
    correcta: "La importancia de la diversidad cultural y la historicidad",
    incorrectas: [
      "La idea de una cultura única universal",
      "El rechazo a toda influencia histórica en el hombre"
    ]
  },
  {
    enunciado: "¿Qué representa Rousseau en los orígenes de la antropología?",
    correcta: "La reflexión sobre naturaleza y cultura a partir del mito del buen salvaje",
    incorrectas: [
      "La defensa del progreso técnico como único fin humano",
      "La negación del vínculo entre naturaleza y cultura"
    ]
  },
  {
    enunciado: "¿Qué aportaron Tylor y Frazer a la antropología?",
    correcta: "El estudio comparativo de culturas y religiones primitivas",
    incorrectas: [
      "La creación de la teoría del Big Bang",
      "El desarrollo de la lógica simbólica"
    ]
  },
  {
    enunciado: "¿Qué significa el estructuralismo de Lévi-Strauss?",
    correcta: "La búsqueda de universales culturales a partir de estructuras subyacentes",
    incorrectas: [
      "La negación de todo patrón cultural",
      "La reducción de la cultura a la economía"
    ]
  },
  {
    enunciado: "¿Qué sostiene la antropología interpretativa de Clifford Geertz?",
    correcta: "Que la cultura es un texto que debe leerse e interpretarse",
    incorrectas: [
      "Que la cultura es una ilusión sin importancia",
      "Que la antropología debe ignorar símbolos y significados"
    ]
  },
  {
    enunciado: "¿Qué estudia la antropología simbólica?",
    correcta: "Los significados, mitos, símbolos y valores de las culturas",
    incorrectas: [
      "Los procesos químicos del cerebro",
      "Las ecuaciones de la mecánica cuántica"
    ]
  },
  {
    enunciado: "¿Qué es la antropología aplicada?",
    correcta: "Uso del conocimiento antropológico en políticas de desarrollo y gestión intercultural",
    incorrectas: [
      "Aplicación exclusiva en experimentos de laboratorio",
      "La negación del trabajo de campo en comunidades"
    ]
  },
  {
    enunciado: "¿Qué es la antropología urbana?",
    correcta: "El estudio de las dinámicas culturales en ciudades y entornos metropolitanos",
    incorrectas: [
      "El análisis exclusivo de comunidades rurales",
      "La investigación arqueológica de ruinas antiguas"
    ]
  },
  {
    enunciado: "¿Qué es la antropología digital?",
    correcta: "El estudio de la socialización y cultura en entornos tecnológicos y virtuales",
    incorrectas: [
      "La reducción del hombre a algoritmos matemáticos",
      "La supresión de la cultura en internet"
    ]
  },
  {
    enunciado: "¿Qué valor aporta la antropología en el mundo globalizado?",
    correcta: "Ofrece herramientas para la convivencia intercultural y el diálogo",
    incorrectas: [
      "Impulsa el aislamiento cultural de los pueblos",
      "Defiende la superioridad de una cultura sobre otra"
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre etnocentrismo y relativismo cultural?",
    correcta: "El etnocentrismo juzga desde los propios valores, el relativismo busca comprender cada cultura en sus propios términos",
    incorrectas: [
      "Ambos son sinónimos en antropología",
      "El relativismo afirma la superioridad de una cultura"
    ]
  },
  {
    enunciado: "¿Qué función cumple la interdisciplinariedad en antropología?",
    correcta: "Permite integrar aportes de biología, sociología, psicología e historia",
    incorrectas: [
      "Impide relacionar la antropología con otras ciencias",
      "Obliga a reducir la antropología a la biología"
    ]
  },
  {
    enunciado: "¿Qué representa la antropología filosófica en el debate contemporáneo?",
    correcta: "La reflexión sobre lo humano ante biotecnología, IA y posthumanismo",
    incorrectas: [
      "La negación de la relevancia de lo humano",
      "La reducción del hombre a objeto económico"
    ]
  },
  {
    enunciado: "¿Qué significa holismo en antropología?",
    correcta: "El estudio del ser humano en todas sus dimensiones interrelacionadas",
    incorrectas: [
      "El rechazo a la diversidad cultural",
      "El análisis exclusivo de una sola variable"
    ]
  },
  {
    enunciado: "¿Qué papel tuvo Darwin en la antropología biológica?",
    correcta: "Introdujo la idea de evolución y ancestro común del ser humano",
    incorrectas: [
      "Negó la relación del hombre con otros primates",
      "Propuso que el hombre no tiene historia evolutiva"
    ]
  },
  {
    enunciado: "¿Qué función cumplen los mitos en antropología cultural?",
    correcta: "Actúan como narraciones que transmiten valores y sentido colectivo",
    incorrectas: [
      "Son relatos inútiles sin significado",
      "Son simples anécdotas sin función social"
    ]
  },
  {
    enunciado: "¿Qué importancia tiene la ética en antropología aplicada?",
    correcta: "Implica respetar los derechos y la dignidad de las comunidades estudiadas",
    incorrectas: [
      "Obliga a imponer valores externos a las comunidades",
      "Autoriza manipular culturas para fines políticos"
    ]
  },
  {
    enunciado: "¿Qué plantea la antropología contemporánea sobre la identidad?",
    correcta: "Que es un constructo dinámico influido por cultura, género y globalización",
    incorrectas: [
      "Que es fija e inmutable desde el nacimiento",
      "Que depende exclusivamente de la biología"
    ]
  },
  {
    enunciado: "¿Qué papel tienen las migraciones en la antropología actual?",
    correcta: "Son objeto de estudio como fenómenos culturales y sociales clave",
    incorrectas: [
      "Carecen de relevancia antropológica",
      "Solo interesan como movimientos económicos"
    ]
  },
  {
    enunciado: "¿Qué función tiene la antropología simbólica en la interpretación cultural?",
    correcta: "Permite comprender ritos, símbolos y cosmovisiones de los pueblos",
    incorrectas: [
      "Reduce la cultura a su dimensión material",
      "Niega la importancia de las creencias religiosas"
    ]
  },
  {
    enunciado: "¿Qué conclusión general puede extraerse de la antropología como campo de estudio?",
    correcta: "Es fundamental para comprender la complejidad del ser humano en el mundo actual",
    incorrectas: [
      "Carece de relevancia en la reflexión filosófica",
      "Debe limitarse a la mera descripción biológica"
    ]
  }
];
