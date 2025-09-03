// temarios/37-El-debate-historiografico-sobre-la-revolucion-francesa-el-origen-de-los-estados-modernos.js
var PREGUNTAS = [
  {
    enunciado: "¿En qué año comenzó la Revolución Francesa?",
    correcta: "1789",
    incorrectas: [
      "1776",
      "1793"
    ]
  },
  {
    enunciado: "¿Qué acontecimiento simboliza el inicio de la Revolución Francesa?",
    correcta: "La toma de la Bastilla",
    incorrectas: [
      "La ejecución de Luis XVI",
      "El golpe de Estado del 18 de Brumario"
    ]
  },
  {
    enunciado: "¿Qué documento proclamó los principios de libertad, igualdad y fraternidad?",
    correcta: "Declaración de los Derechos del Hombre y del Ciudadano",
    incorrectas: [
      "Código Civil Napoleónico",
      "Constitución de 1793"
    ]
  },
  {
    enunciado: "¿Qué estamento soportaba la mayor carga fiscal en la Francia del Antiguo Régimen?",
    correcta: "El Tercer Estado",
    incorrectas: [
      "La nobleza",
      "El clero"
    ]
  },
  {
    enunciado: "¿Qué filósofo británico criticó la Revolución desde una postura conservadora en su obra 'Reflexiones sobre la Revolución en Francia'?",
    correcta: "Edmund Burke",
    incorrectas: [
      "John Locke",
      "Adam Smith"
    ]
  },
  {
    enunciado: "¿Quién escribió '¿Qué es el Tercer Estado?' en 1789?",
    correcta: "Emmanuel-Joseph Sieyès",
    incorrectas: [
      "Jean-Paul Marat",
      "Maximilien Robespierre"
    ]
  },
  {
    enunciado: "¿Qué autor destacó la continuidad entre el Antiguo Régimen y la Revolución en su obra 'El Antiguo Régimen y la Revolución'?",
    correcta: "Alexis de Tocqueville",
    incorrectas: [
      "Albert Soboul",
      "François Furet"
    ]
  },
  {
    enunciado: "¿Qué corriente historiográfica del siglo XIX exaltó el papel del pueblo en la Revolución?",
    correcta: "La historiografía romántico-nacionalista",
    incorrectas: [
      "La historiografía contrarrevolucionaria",
      "La historiografía revisionista"
    ]
  },
  {
    enunciado: "¿Qué autor marxista interpretó la Revolución como una revolución burguesa?",
    correcta: "Albert Soboul",
    incorrectas: [
      "Jules Michelet",
      "Georges Lefebvre"
    ]
  },
  {
    enunciado: "¿Qué corriente historiográfica desde los años 70 cuestionó la interpretación marxista?",
    correcta: "La escuela revisionista",
    incorrectas: [
      "La escuela positivista",
      "La escuela estructuralista"
    ]
  },
  {
    enunciado: "¿Qué historiador revisionista francés destacó la dimensión política y cultural de la Revolución?",
    correcta: "François Furet",
    incorrectas: [
      "Pierre Vilar",
      "Lynn Hunt"
    ]
  },
  {
    enunciado: "¿Qué investigadora ha estudiado la simbología y la cultura política de la Revolución?",
    correcta: "Lynn Hunt",
    incorrectas: [
      "Simone de Beauvoir",
      "Michelle Perrot"
    ]
  },
  {
    enunciado: "¿Qué asamblea se formó en 1789 tras el Juramento del Juego de Pelota?",
    correcta: "La Asamblea Nacional",
    incorrectas: [
      "El Directorio",
      "La Convención Nacional"
    ]
  },
  {
    enunciado: "¿Qué fase de la Revolución se caracteriza por el gobierno de Robespierre y el Comité de Salvación Pública?",
    correcta: "El Terror",
    incorrectas: [
      "El Directorio",
      "La Monarquía Constitucional"
    ]
  },
  {
    enunciado: "¿Qué general dio el golpe de Estado del 18 de Brumario en 1799?",
    correcta: "Napoleón Bonaparte",
    incorrectas: [
      "Lafayette",
      "Danton"
    ]
  },
  {
    enunciado: "¿Qué corriente historiográfica criticó la violencia y el radicalismo revolucionario defendiendo la tradición?",
    correcta: "La historiografía contrarrevolucionaria",
    incorrectas: [
      "La historiografía liberal",
      "La historiografía social"
    ]
  },
  {
    enunciado: "¿Qué obra de Jules Michelet narra la Revolución como una epopeya nacional?",
    correcta: "Historia de la Revolución Francesa",
    incorrectas: [
      "Historia de Francia",
      "Memorias de ultratumba"
    ]
  },
  {
    enunciado: "¿Qué corriente historiográfica prioriza el análisis de las estructuras socioeconómicas en la Revolución?",
    correcta: "La escuela marxista-social",
    incorrectas: [
      "La escuela culturalista",
      "La escuela positivista"
    ]
  },
  {
    enunciado: "¿Qué concepto resume el ideal de participación ciudadana y soberanía popular en la Revolución?",
    correcta: "Soberanía nacional",
    incorrectas: [
      "Derecho divino de los reyes",
      "Federalismo aristocrático"
    ]
  },
  {
    enunciado: "¿Qué código napoleónico consolidó parte de las reformas revolucionarias?",
    correcta: "El Código Civil de 1804",
    incorrectas: [
      "El Código Penal de 1810",
      "La Constitución de 1791"
    ]
  },
  {
    enunciado: "¿Qué país sirvió de inspiración a los revolucionarios franceses por su reciente independencia?",
    correcta: "Estados Unidos",
    incorrectas: [
      "Haití",
      "Italia"
    ]
  },
  {
    enunciado: "¿Qué factor económico fue clave en el estallido de la Revolución?",
    correcta: "La crisis fiscal y la deuda del Estado",
    incorrectas: [
      "La desaparición de la nobleza",
      "El superávit presupuestario"
    ]
  },
  {
    enunciado: "¿Qué grupo social lideró inicialmente la Revolución?",
    correcta: "La burguesía",
    incorrectas: [
      "El campesinado",
      "La nobleza"
    ]
  },
  {
    enunciado: "¿Qué acontecimiento marcó el inicio del fin del Antiguo Régimen en Francia?",
    correcta: "La abolición de los privilegios feudales en agosto de 1789",
    incorrectas: [
      "La Constitución de 1795",
      "La ejecución de María Antonieta"
    ]
  },
  {
    enunciado: "¿Qué rol tuvieron las mujeres en la Revolución según estudios recientes?",
    correcta: "Participaron activamente en marchas, clubes y reivindicaciones políticas",
    incorrectas: [
      "No tuvieron papel alguno",
      "Fueron excluidas de toda actividad pública"
    ]
  },
  {
    enunciado: "¿Qué corriente historiográfica ha analizado los rituales y símbolos revolucionarios?",
    correcta: "La historia cultural",
    incorrectas: [
      "La historia militar",
      "La historia diplomática"
    ]
  },
  {
    enunciado: "¿Qué debate historiográfico enfrenta la visión de ruptura radical y la de continuidad con el Antiguo Régimen?",
    correcta: "La interpretación de Tocqueville frente a la historiografía revolucionaria",
    incorrectas: [
      "El debate entre Michelet y Soboul",
      "El debate entre Burke y Maistre"
    ]
  },
  {
    enunciado: "¿Qué elemento institucional moderno consolidó la Revolución?",
    correcta: "La centralización administrativa",
    incorrectas: [
      "La monarquía de derecho divino",
      "La fragmentación feudal"
    ]
  },
  {
    enunciado: "¿Qué influencia tuvo la Revolución en América Latina?",
    correcta: "Inspiró movimientos independentistas y constitucionales",
    incorrectas: [
      "Fortaleció el dominio colonial",
      "Prohibió toda reforma política"
    ]
  },
  {
    enunciado: "¿Qué sector de la población fue clave para sostener el movimiento sans-culotte?",
    correcta: "Los artesanos y trabajadores urbanos",
    incorrectas: [
      "La alta nobleza",
      "El alto clero"
    ]
  },
  {
    enunciado: "¿Qué principio jurídico estableció la igualdad ante la ley?",
    correcta: "La abolición de los privilegios",
    incorrectas: [
      "El derecho divino",
      "La servidumbre hereditaria"
    ]
  },
  {
    enunciado: "¿Qué acontecimiento puso fin a la monarquía en Francia?",
    correcta: "La proclamación de la República en 1792",
    incorrectas: [
      "La Constitución de 1791",
      "El golpe de Estado de Napoleón"
    ]
  },
  {
    enunciado: "¿Qué recurso metodológico usan los historiadores revisionistas para reinterpretar la Revolución?",
    correcta: "El análisis del lenguaje político y las ideas",
    incorrectas: [
      "El estudio exclusivo de estadísticas económicas",
      "La recolección de leyendas orales"
    ]
  },
  {
    enunciado: "¿Qué aspecto central del Estado moderno se vio reforzado tras la Revolución?",
    correcta: "El principio de ciudadanía y derechos políticos",
    incorrectas: [
      "La autoridad feudal",
      "La supremacía de la nobleza"
    ]
  },
  {
    enunciado: "¿Qué visión ofreció Tocqueville sobre la Revolución?",
    correcta: "Continuidad en la centralización y reformas administrativas",
    incorrectas: [
      "Un cambio total en todas las instituciones",
      "Un regreso al feudalismo"
    ]
  },
  {
    enunciado: "¿Qué estudia la historia cultural aplicada a la Revolución Francesa?",
    correcta: "Los símbolos, rituales y discursos como parte del cambio político",
    incorrectas: [
      "Solo la política exterior",
      "Exclusivamente las batallas militares"
    ]
  },
  {
    enunciado: "¿Qué fase posterior consolidó gran parte de las reformas revolucionarias?",
    correcta: "La etapa napoleónica",
    incorrectas: [
      "La Restauración borbónica",
      "El Directorio"
    ]
  },
  {
    enunciado: "¿Qué lema se asocia tradicionalmente a la Revolución Francesa?",
    correcta: "Libertad, Igualdad, Fraternidad",
    incorrectas: [
      "Orden y Progreso",
      "Unidad y Fe"
    ]
  },
  {
    enunciado: "¿Qué elemento del debate historiográfico sigue vigente hoy?",
    correcta: "La valoración del legado y los límites de la Revolución",
    incorrectas: [
      "La negación de su impacto",
      "La idea de que no hubo cambios políticos"
    ]
  }
];
