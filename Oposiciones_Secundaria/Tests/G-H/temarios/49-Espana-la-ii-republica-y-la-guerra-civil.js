```javascript
// temarios/49-Espana-la-ii-republica-y-la-guerra-civil.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué hecho político dio paso a la proclamación de la II República el 14 de abril de 1931?",
    correcta: "El resultado de las elecciones municipales que evidenció el descrédito de la monarquía de Alfonso XIII",
    incorrectas: [
      "La abdicación voluntaria de Alfonso XIII para facilitar una regencia militar",
      "Un plebiscito nacional en el que se votó directamente la forma de Estado"
    ]
  },
  {
    enunciado: "¿Qué rasgo definió a la Constitución española de 1931 en materia religiosa?",
    correcta: "La configuración de un Estado laico con separación entre Iglesia y Estado",
    incorrectas: [
      "La declaración del catolicismo como religión oficial del Estado",
      "La entrega de la educación a órdenes religiosas mediante concierto general"
    ]
  },
  {
    enunciado: "¿Cuál fue un objetivo central de la reforma militar impulsada por Azaña durante el bienio 1931-1933?",
    correcta: "Reducir el número de oficiales y someter el ejército al control civil",
    incorrectas: [
      "Expandir el presupuesto militar para afrontar conflictos coloniales",
      "Crear una guardia pretoriana al servicio directo del presidente de la República"
    ]
  },
  {
    enunciado: "¿Qué buscaba la reforma agraria del primer bienio republicano?",
    correcta: "Redistribuir tierras para combatir el latifundismo y mejorar las condiciones campesinas",
    incorrectas: [
      "Privatizar montes comunales para financiar el déficit del Estado",
      "Promover la mecanización sin alterar la estructura de la propiedad"
    ]
  },
  {
    enunciado: "¿Qué medida educativa caracterizó al primer bienio republicano?",
    correcta: "Un amplio plan de construcción de escuelas públicas y laicización de la enseñanza",
    incorrectas: [
      "La supresión de la educación secundaria por considerarla elitista",
      "La entrega de la formación profesional a las confederaciones patronales"
    ]
  },
  {
    enunciado: "¿Qué estatuto de autonomía fue aprobado en 1932 durante la II República?",
    correcta: "El Estatuto de Autonomía de Cataluña",
    incorrectas: [
      "El Estatuto Vasco-Navarro con reconocimiento foral pleno",
      "El Estatuto de Galicia con cooficialidad lingüística inmediata"
    ]
  },
  {
    enunciado: "¿Cómo se denomina al periodo 1933-1936 en la II República?",
    correcta: "Bienio conservador o radical-cedista",
    incorrectas: [
      "Bienio tecnocrático o militar",
      "Bienio revolucionario o maximalista"
    ]
  },
  {
    enunciado: "¿Qué acontecimiento de 1934 tensó gravemente la vida política de la República?",
    correcta: "La insurrección de octubre en Asturias y la crisis en Cataluña",
    incorrectas: [
      "La firma de un Concordato con la Santa Sede que rompió el Frente Popular",
      "La ocupación de Tetuán por fuerzas italianas aliadas del gobierno"
    ]
  },
  {
    enunciado: "¿Qué coalición ganó las elecciones de febrero de 1936?",
    correcta: "El Frente Popular, integrado por fuerzas republicanas y de izquierdas",
    incorrectas: [
      "Una coalición de centro moderado liderada por Lerroux",
      "La derecha monárquica agrupada bajo el Bloque Nacional"
    ]
  },
  {
    enunciado: "¿Qué práctica política se intensificó en 1936 aumentando la inestabilidad republicana?",
    correcta: "El incremento de la violencia política y los asesinatos con motivación ideológica",
    incorrectas: [
      "La generalización de referendos locales sobre la forma de Estado",
      "La suspensión indefinida de las Cortes por decreto presidencial"
    ]
  },
  {
    enunciado: "¿Qué ocurrió con el golpe de Estado iniciado el 17–18 de julio de 1936?",
    correcta: "Fracaso parcial que dividió el territorio y desembocó en una guerra civil",
    incorrectas: [
      "Éxito inmediato que instauró una junta militar en todo el país",
      "Aplazamiento indefinido tras la muerte de sus principales dirigentes"
    ]
  },
  {
    enunciado: "¿Qué liderazgo emergió en el bando sublevado durante la guerra?",
    correcta: "La jefatura de Francisco Franco, que acumuló poder militar y político",
    incorrectas: [
      "La dirección colegiada permanente de Mola, Sanjurjo y Franco",
      "La regencia asumida por Alfonso XIII desde el exilio"
    ]
  },
  {
    enunciado: "¿Qué apoyos internacionales fueron decisivos para los sublevados?",
    correcta: "La ayuda militar de la Alemania nazi y la Italia fascista",
    incorrectas: [
      "El apoyo directo de Estados Unidos con un programa de préstamos y arriendos",
      "La intervención de la URSS con brigadas acorazadas en su territorio"
    ]
  },
  {
    enunciado: "¿Qué potencias sostuvieron principalmente al bando republicano?",
    correcta: "La Unión Soviética y los voluntarios de las Brigadas Internacionales",
    incorrectas: [
      "El Reino Unido con su Royal Air Force operando desde Gibraltar",
      "La Italia fascista con el Corpo Truppe Volontarie"
    ]
  },
  {
    enunciado: "¿Qué postura adoptaron Reino Unido y Francia ante la guerra española?",
    correcta: "Impulsaron la política de no intervención que perjudicó a la República",
    incorrectas: [
      "Firmaron un tratado de defensa mutua con el gobierno republicano",
      "Declararon un bloqueo naval contra los sublevados desde 1936"
    ]
  },
  {
    enunciado: "¿Qué batalla simbolizó la resistencia republicana en 1936-1937?",
    correcta: "La defensa de Madrid frente a las fuerzas sublevadas",
    incorrectas: [
      "La ofensiva de Brunete que tomó definitivamente la capital",
      "La batalla de Badajoz que consolidó el corredor republicano"
    ]
  },
  {
    enunciado: "¿Qué episodio bélico ejemplifica el bombardeo de población civil durante la guerra?",
    correcta: "El bombardeo de Guernica por la Legión Cóndor en 1937",
    incorrectas: [
      "El bombardeo de Lisboa para cortar la ayuda portuguesa",
      "La destrucción de Cádiz por la aviación republicana en 1938"
    ]
  },
  {
    enunciado: "¿Qué enfrentamiento fue la mayor batalla de la guerra por su duración y desgaste?",
    correcta: "La batalla del Ebro en 1938",
    incorrectas: [
      "La batalla de Guadalajara en 1937",
      "La batalla de Talavera en 1936"
    ]
  },
  {
    enunciado: "¿Qué consecuencia política siguió a la caída de Cataluña en 1939?",
    correcta: "El colapso del frente republicano y la posterior ocupación de Madrid",
    incorrectas: [
      "La formación de un gobierno de concentración con mediación francesa",
      "La declaración de armisticio supervisada por la Sociedad de Naciones"
    ]
  },
  {
    enunciado: "¿Qué significado tuvo el parte final de guerra del 1 de abril de 1939?",
    correcta: "Proclamó la victoria total de Franco y el fin de la contienda",
    incorrectas: [
      "Anunció la convocatoria de elecciones constituyentes inmediatas",
      "Reconoció una amnistía general sin represalias en la posguerra"
    ]
  },
  {
    enunciado: "¿Qué rasgo definió al régimen instaurado tras la guerra?",
    correcta: "La instauración de una dictadura autoritaria personalista bajo Franco",
    incorrectas: [
      "La creación de una república federal con amplias autonomías",
      "La restauración inmediata de la monarquía parlamentaria liberal"
    ]
  },
  {
    enunciado: "¿Qué impacto humano caracterizó la posguerra inmediata?",
    correcta: "Una intensa represión con cárceles, ejecuciones y exilio masivo",
    incorrectas: [
      "Una amplia amnistía que restituyó derechos y bienes a los vencidos",
      "Un retorno generalizado de exiliados en los primeros meses de 1940"
    ]
  },
  {
    enunciado: "¿Qué consecuencia económica tuvo el conflicto durante los primeros años del franquismo?",
    correcta: "Atraso, autarquía y dificultades de abastecimiento",
    incorrectas: [
      "Rápida industrialización con apertura comercial plena",
      "Equilibrio presupuestario gracias a la ayuda del Plan Marshall desde 1940"
    ]
  },
  {
    enunciado: "¿Qué papel desempeñó la propaganda en ambos bandos durante la guerra?",
    correcta: "Movilizó a la población, legitimó la causa propia y deshumanizó al enemigo",
    incorrectas: [
      "Garantizó debates públicos plurales en la prensa de cada bando",
      "Sustituyó completamente la acción militar por la guerra psicológica"
    ]
  },
  {
    enunciado: "¿Qué actor político cobró especial protagonismo en la zona republicana por la ayuda soviética?",
    correcta: "El Partido Comunista de España, que reforzó su influencia",
    incorrectas: [
      "La Falange Española de las JONS, que dirigió el esfuerzo bélico",
      "El Partido Agrario Español, que asumió la cartera de Defensa"
    ]
  },
  {
    enunciado: "¿Qué institución respaldó en términos generales a los sublevados?",
    correcta: "La jerarquía de la Iglesia católica, que apoyó mayoritariamente al bando nacional",
    incorrectas: [
      "La Sociedad de Naciones, que reconoció al bando nacional como legítimo",
      "El Consejo de Seguridad de la ONU, que aprobó asistencia militar directa"
    ]
  },
  {
    enunciado: "¿Qué figura política simboliza el liderazgo republicano civil durante la guerra?",
    correcta: "El presidente Manuel Azaña como máxima autoridad del Estado republicano",
    incorrectas: [
      "El general Mola como jefe del Estado republicano",
      "El duque de Alba como presidente del Consejo de Ministros republicano"
    ]
  },
  {
    enunciado: "¿Qué objetivo perseguía la política autonómica republicana de 1931-1932?",
    correcta: "Reconocer demandas de autogobierno en un marco descentralizado",
    incorrectas: [
      "Constituir de inmediato una confederación ibérica con Portugal",
      "Suprimir cualquier particularismo provincial en aras del centralismo"
    ]
  },
  {
    enunciado: "¿Qué asesinato político en julio de 1936 exacerbó la crisis final del régimen republicano?",
    correcta: "El asesinato de José Calvo Sotelo",
    incorrectas: [
      "El asesinato de José Antonio Primo de Rivera",
      "El asesinato de Alejandro Lerroux"
    ]
  },
  {
    enunciado: "¿Qué relación tuvo la Guerra Civil con la Segunda Guerra Mundial según la historiografía?",
    correcta: "Fue un preludio donde se ensayaron tácticas y alianzas del conflicto mundial",
    incorrectas: [
      "Fue un episodio aislado sin proyección internacional apreciable",
      "Provocó la inmediata entrada de España en la Segunda Guerra Mundial"
    ]
  },
  {
    enunciado: "¿Qué caracterizó al movimiento de las Brigadas Internacionales?",
    correcta: "La afluencia de voluntarios extranjeros comprometidos con la causa antifascista",
    incorrectas: [
      "La presencia de tropas regulares enviadas oficialmente por Reino Unido",
      "La llegada exclusiva de mercenarios sin motivación ideológica"
    ]
  },
  {
    enunciado: "¿Qué finalidad perseguía la reforma laboral y social del primer bienio republicano?",
    correcta: "Reconocer derechos laborales y mejorar la negociación colectiva",
    incorrectas: [
      "Abaratar despidos y eliminar la jornada de ocho horas",
      "Transferir la inspección de trabajo a asociaciones patronales"
    ]
  },
  {
    enunciado: "¿Qué efecto político tuvo la política de no intervención para la República?",
    correcta: "Limitó gravemente su acceso a armamento y asistencia exterior",
    incorrectas: [
      "Le garantizó superioridad aérea sostenida durante toda la guerra",
      "Le permitió recibir libremente préstamos de la banca británica"
    ]
  },
  {
    enunciado: "¿Qué hito legislativo de 1931 buscó redefinir la relación Estado-Iglesia?",
    correcta: "La aprobación de artículos constitucionales que establecían laicidad y control de órdenes",
    incorrectas: [
      "La firma de un Concordato que otorgaba privilegios al clero",
      "La nacionalización de todos los templos para uso administrativo"
    ]
  },
  {
    enunciado: "¿Qué dinámica interna dificultó la coordinación del esfuerzo bélico republicano?",
    correcta: "Las tensiones entre anarquistas, socialistas y comunistas sobre el control del Estado y del ejército",
    incorrectas: [
      "La ausencia total de liderazgo civil en el gobierno",
      "La negativa de Cataluña y Euskadi a cooperar con el resto del país"
    ]
  },
  {
    enunciado: "¿Cuál fue un objetivo propagandístico central del bando sublevado?",
    correcta: "Presentar la guerra como cruzada de salvación nacional y religiosa",
    incorrectas: [
      "Definir la contienda como revolución proletaria internacional",
      "Reivindicar la neutralidad absoluta ante los fascismos europeos"
    ]
  },
  {
    enunciado: "¿Qué consecuencia cultural tuvo la posguerra inmediata tras 1939?",
    correcta: "Censura estricta, depuración universitaria y control ideológico de la vida cultural",
    incorrectas: [
      "Autonomía universitaria plena y libertad de cátedra",
      "Legalización de todos los partidos y sindicatos culturales"
    ]
  },
  {
    enunciado: "¿Qué describe mejor el exilio republicano tras la guerra?",
    correcta: "La salida de cientos de miles de personas hacia Francia, México y otros países",
    incorrectas: [
      "Un retorno rápido por acuerdo bilateral con Alemania e Italia",
      "Un traslado interno a colonias africanas con estatuto de autonomía"
    ]
  },
  {
    enunciado: "¿Qué interpretación general comparten buena parte de los estudios contemporáneos sobre la República?",
    correcta: "Fue un intento ambicioso de modernización democrática lastrado por resistencias y polarización",
    incorrectas: [
      "Fue un régimen de continuidad con la Restauración sin cambios sustanciales",
      "Fue un sistema militarizado que subordinó el poder civil al ejército"
    ]
  },
  {
    enunciado: "¿Qué papel tuvieron los comités y milicias en 1936 en la zona republicana?",
    correcta: "Asumieron funciones de orden público y guerra en los primeros meses del conflicto",
    incorrectas: [
      "Sustituyeron al gobierno central mediante una junta militar",
      "Se integraron desde el inicio en divisiones regulares sin autonomía"
    ]
  }
];
```
