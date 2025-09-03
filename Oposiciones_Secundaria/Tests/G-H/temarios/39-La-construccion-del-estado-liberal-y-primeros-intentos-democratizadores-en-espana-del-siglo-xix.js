// temarios/39-La-construccion-del-estado-liberal-y-primeros-intentos-democratizadores-en-espana-del-siglo-xix.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué principios básicos establecía la Constitución de Cádiz de 1812?",
    correcta: "Soberanía nacional, división de poderes, derechos individuales e igualdad ante la ley",
    incorrectas: [
      "Supremacía del rey absoluto y mantenimiento del orden estamental",
      "Soberanía compartida entre rey y nobleza con privilegios jurídicos"
    ]
  },
  {
    enunciado: "¿Qué conflicto bélico coincidió con la proclamación de la Constitución de 1812?",
    correcta: "La Guerra de la Independencia contra la ocupación napoleónica",
    incorrectas: [
      "La Primera Guerra Carlista",
      "La guerra hispano-estadounidense"
    ]
  },
  {
    enunciado: "¿Qué etapa se conoce como la 'Década Ominosa'?",
    correcta: "El periodo de 1823 a 1833 de restauración absolutista bajo Fernando VII",
    incorrectas: [
      "El decenio de guerras contra Francia a finales del XVIII",
      "Los diez años de la Primera República"
    ]
  },
  {
    enunciado: "¿Qué fue el Trienio Liberal (1820–1823)?",
    correcta: "Un periodo de gobierno constitucional que restauró la Constitución de 1812",
    incorrectas: [
      "Tres años de dictadura militar progresista",
      "El primer gobierno republicano en España"
    ]
  },
  {
    enunciado: "¿Qué objetivo tuvo la desamortización de Mendizábal (1836)?",
    correcta: "Obtener recursos para el Estado y debilitar el poder económico de la Iglesia",
    incorrectas: [
      "Confiscar tierras comunales para su repoblación forestal",
      "Repartir gratuitamente tierras a los campesinos sin tierras"
    ]
  },
  {
    enunciado: "¿Qué conflicto político-militar enfrentó a carlistas y liberales?",
    correcta: "Las Guerras Carlistas",
    incorrectas: [
      "Las Guerras Napoleónicas",
      "La Guerra de África"
    ]
  },
  {
    enunciado: "¿Quiénes defendían el mantenimiento del absolutismo y los fueros tradicionales?",
    correcta: "Los carlistas",
    incorrectas: [
      "Los progresistas",
      "Los unionistas liberales"
    ]
  },
  {
    enunciado: "¿Qué constitución se promulgó durante la regencia de María Cristina en 1837?",
    correcta: "Una constitución de corte progresista con soberanía nacional y derechos amplios",
    incorrectas: [
      "Una constitución absolutista que eliminaba las Cortes",
      "Una carta otorgada inspirada en la Constitución de 1845"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la Constitución de 1845?",
    correcta: "Un modelo moderado que restringía derechos y ampliaba el poder de la Corona",
    incorrectas: [
      "La implantación del sufragio universal masculino",
      "La supresión de la monarquía"
    ]
  },
  {
    enunciado: "¿Qué papel tuvo el ejército en la política del siglo XIX en España?",
    correcta: "Protagonizó pronunciamientos militares que alteraban el gobierno",
    incorrectas: [
      "Se mantuvo neutral y no intervino en la política",
      "Se dedicó exclusivamente a campañas coloniales"
    ]
  },
  {
    enunciado: "¿Qué acontecimiento desencadenó la Revolución de 1868?",
    correcta: "El descontento contra el reinado de Isabel II y la crisis económica y política",
    incorrectas: [
      "La invasión francesa de 1808",
      "El asesinato de Prim"
    ]
  },
  {
    enunciado: "¿Cómo se conoció popularmente la Revolución de 1868?",
    correcta: "La Gloriosa",
    incorrectas: [
      "La Semana Trágica",
      "El Trienio Liberal"
    ]
  },
  {
    enunciado: "¿Qué establecía la Constitución de 1869?",
    correcta: "Sufragio universal masculino y un amplio reconocimiento de derechos y libertades",
    incorrectas: [
      "El sufragio restringido a propietarios",
      "La reinstauración del absolutismo"
    ]
  },
  {
    enunciado: "¿Qué monarca fue elegido por las Cortes tras la Revolución de 1868?",
    correcta: "Amadeo I de Saboya",
    incorrectas: [
      "Alfonso XII",
      "Fernando VII"
    ]
  },
  {
    enunciado: "¿Por qué abdicó Amadeo I en 1873?",
    correcta: "Por la inestabilidad política, la oposición interna y el clima de violencia",
    incorrectas: [
      "Por perder la Guerra de Cuba",
      "Por un golpe de Estado militar exitoso"
    ]
  },
  {
    enunciado: "¿Cuándo se proclamó la Primera República en España?",
    correcta: "En 1873 tras la abdicación de Amadeo I",
    incorrectas: [
      "En 1868 tras la caída de Isabel II",
      "En 1931 tras la caída de Alfonso XIII"
    ]
  },
  {
    enunciado: "¿Qué divisiones internas debilitaron la Primera República?",
    correcta: "El enfrentamiento entre federalistas y unitarios, y la insurrección cantonal",
    incorrectas: [
      "La lucha entre moderados y progresistas",
      "Las diferencias entre carlistas y isabelinos"
    ]
  },
  {
    enunciado: "¿Qué fue el golpe de Pavía (1874)?",
    correcta: "La disolución por la fuerza de las Cortes y el fin de la Primera República",
    incorrectas: [
      "La derrota militar de los carlistas en el norte",
      "La proclamación de la Constitución de 1869"
    ]
  },
  {
    enunciado: "¿Qué supuso la Restauración borbónica de 1874?",
    correcta: "El retorno de Alfonso XII al trono y el inicio del sistema canovista",
    incorrectas: [
      "La instauración de la Segunda República",
      "La abolición de la monarquía en España"
    ]
  },
  {
    enunciado: "¿Qué objetivo tenía el sistema de la Restauración diseñado por Cánovas?",
    correcta: "Garantizar la estabilidad política mediante la alternancia pactada de partidos",
    incorrectas: [
      "Implantar el sufragio femenino universal",
      "Impedir la existencia de partidos políticos"
    ]
  },
  {
    enunciado: "¿Qué limitaciones democráticas tenía el sistema liberal del siglo XIX?",
    correcta: "Fraude electoral, caciquismo y exclusión de amplios sectores sociales",
    incorrectas: [
      "Exceso de participación ciudadana y ausencia de control estatal",
      "Predominio del voto directo de mujeres y hombres"
    ]
  },
  {
    enunciado: "¿Qué fue el caciquismo?",
    correcta: "El control local de la política y elecciones por parte de élites influyentes",
    incorrectas: [
      "La lucha armada de grupos campesinos contra terratenientes",
      "El gobierno militar directo de las provincias"
    ]
  },
  {
    enunciado: "¿Qué consecuencias sociales tuvo la desamortización de Madoz (1855)?",
    correcta: "Pérdida de bienes comunales y agravamiento de la situación de los campesinos pobres",
    incorrectas: [
      "Aumento masivo de la propiedad campesina",
      "Recuperación de tierras por la Iglesia"
    ]
  },
  {
    enunciado: "¿Qué papel tuvieron los moderados en la política isabelina?",
    correcta: "Defendían un liberalismo restringido, fortaleciendo el poder real y limitando derechos",
    incorrectas: [
      "Impulsaban el sufragio universal",
      "Defendían el absolutismo"
    ]
  },
  {
    enunciado: "¿Qué papel desempeñaban los progresistas?",
    correcta: "Defendían un liberalismo más amplio con mayores derechos y participación ciudadana",
    incorrectas: [
      "Abolían las Cortes",
      "Rechazaban toda forma de sufragio"
    ]
  },
  {
    enunciado: "¿Qué implicó la Ley de Ayuntamientos de 1840?",
    correcta: "Concedió mayor autonomía municipal y fue apoyada por progresistas",
    incorrectas: [
      "Centralizó la administración municipal",
      "Abolió los ayuntamientos en zonas rurales"
    ]
  },
  {
    enunciado: "¿Qué relación hubo entre liberalismo y ejército en el XIX español?",
    correcta: "El ejército fue un actor recurrente en cambios de gobierno mediante pronunciamientos",
    incorrectas: [
      "El ejército defendía el apoliticismo absoluto",
      "Se limitaba a actuar en conflictos exteriores"
    ]
  },
  {
    enunciado: "¿Qué corriente ideológica defendía Isabel II?",
    correcta: "Un liberalismo moderado compatible con prerrogativas reales amplias",
    incorrectas: [
      "El republicanismo federal",
      "El absolutismo carlista"
    ]
  },
  {
    enunciado: "¿Qué originó las Guerras Carlistas?",
    correcta: "Un conflicto dinástico y político tras la sucesión de Fernando VII",
    incorrectas: [
      "La invasión francesa de 1808",
      "La proclamación de la Primera República"
    ]
  },
  {
    enunciado: "¿Qué papel jugó Prim en la Revolución de 1868?",
    correcta: "Fue uno de sus líderes militares y políticos clave",
    incorrectas: [
      "Se opuso al derrocamiento de Isabel II",
      "Encabezó la restauración inmediata de Alfonso XII"
    ]
  },
  {
    enunciado: "¿Qué establecía el sufragio censitario?",
    correcta: "El derecho a voto limitado a quienes cumplían determinados requisitos de renta",
    incorrectas: [
      "El voto universal para todos los ciudadanos adultos",
      "El sufragio exclusivo para la nobleza"
    ]
  },
  {
    enunciado: "¿Qué medida tomó Espartero durante su regencia?",
    correcta: "Intentó profundizar en reformas liberales y enfrentó oposición conservadora",
    incorrectas: [
      "Restauró el absolutismo",
      "Suprimió el sistema constitucional"
    ]
  },
  {
    enunciado: "¿Qué supuso la Constitución de 1837 para los derechos individuales?",
    correcta: "Reconoció amplias libertades aunque condicionadas por leyes ordinarias",
    incorrectas: [
      "Prohibió cualquier libertad de prensa",
      "Otorgó libertad plena sin restricciones"
    ]
  },
  {
    enunciado: "¿Qué diferencia esencial hubo entre las constituciones de 1837 y 1845?",
    correcta: "La de 1837 ampliaba derechos y participación; la de 1845 los restringía",
    incorrectas: [
      "La de 1845 eliminó la monarquía",
      "La de 1837 estableció una república federal"
    ]
  },
  {
    enunciado: "¿Qué tendencia ideológica caracterizó a Cánovas del Castillo?",
    correcta: "Conservadora y monárquica, defensora del turno pacífico entre partidos",
    incorrectas: [
      "Republicana federal",
      "Anarquista colectivista"
    ]
  },
  {
    enunciado: "¿Qué sectores sociales se beneficiaron más de las desamortizaciones?",
    correcta: "Burguesía urbana y grandes propietarios",
    incorrectas: [
      "Campesinado sin tierras",
      "Órdenes religiosas"
    ]
  },
  {
    enunciado: "¿Qué acontecimiento puso fin al Sexenio Democrático?",
    correcta: "El pronunciamiento de Martínez Campos en Sagunto (1874)",
    incorrectas: [
      "La derrota en la guerra hispano-estadounidense",
      "La firma del Tratado de París"
    ]
  },
  {
    enunciado: "¿Qué modelo político inspiró la Constitución de 1869?",
    correcta: "La monarquía parlamentaria con amplias libertades",
    incorrectas: [
      "El absolutismo monárquico",
      "El comunismo"
    ]
  },
  {
    enunciado: "¿Qué limitación persistía en el sufragio universal masculino de 1869?",
    correcta: "Excluía a las mujeres y a menores de edad",
    incorrectas: [
      "Permitía votar solo a extranjeros",
      "Eliminaba el voto secreto"
    ]
  }
];
