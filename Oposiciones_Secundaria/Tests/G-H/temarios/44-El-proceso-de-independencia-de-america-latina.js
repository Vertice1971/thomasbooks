// temarios/44-El-proceso-de-independencia-de-america-latina.js
var PREGUNTAS = [
  {
    enunciado: "¿En qué periodo histórico se desarrolló principalmente el proceso de independencia de América Latina?",
    correcta: "Entre finales del siglo XVIII y las primeras décadas del XIX",
    incorrectas: [
      "Entre mediados del siglo XVII y comienzos del XVIII",
      "Entre mediados del XIX y principios del XX"
    ]
  },
  {
    enunciado: "¿Qué metrópolis europeas perdieron la mayor parte de sus colonias en América Latina durante este proceso?",
    correcta: "España y Portugal",
    incorrectas: [
      "España y Francia",
      "Portugal y Reino Unido"
    ]
  },
  {
    enunciado: "¿Cuál fue uno de los factores internos que impulsó el movimiento independentista?",
    correcta: "La falta de participación política de los criollos",
    incorrectas: [
      "La industrialización masiva de las colonias",
      "La creación de partidos políticos de masas"
    ]
  },
  {
    enunciado: "¿Qué corriente intelectual europea influyó en las ideas independentistas americanas?",
    correcta: "La Ilustración",
    incorrectas: [
      "El Romanticismo tardío",
      "El Positivismo"
    ]
  },
  {
    enunciado: "¿Qué acontecimiento internacional inspiró directamente los movimientos emancipadores latinoamericanos?",
    correcta: "La Revolución Francesa",
    incorrectas: [
      "La Guerra de Crimea",
      "La Revolución Industrial"
    ]
  },
  {
    enunciado: "¿Qué revolución americana tuvo un fuerte impacto en el ideario de independencia de América Latina?",
    correcta: "La independencia de Estados Unidos",
    incorrectas: [
      "La independencia de Canadá",
      "La independencia de Cuba en 1898"
    ]
  },
  {
    enunciado: "¿Qué conflicto europeo debilitó a España y Portugal, favoreciendo los procesos independentistas?",
    correcta: "Las invasiones napoleónicas",
    incorrectas: [
      "La Guerra de los Siete Años",
      "La Guerra Franco-Prusiana"
    ]
  },
  {
    enunciado: "¿Qué tipo de instituciones formaron las ciudades americanas para reemplazar a las autoridades peninsulares?",
    correcta: "Juntas de gobierno",
    incorrectas: [
      "Sindicatos",
      "Parlamentos continentales"
    ]
  },
  {
    enunciado: "¿Quién fue el principal líder de la independencia en el norte de Sudamérica?",
    correcta: "Simón Bolívar",
    incorrectas: [
      "José de San Martín",
      "Bernardo O’Higgins"
    ]
  },
  {
    enunciado: "¿Qué líder argentino encabezó la expedición libertadora hacia Chile y Perú?",
    correcta: "José de San Martín",
    incorrectas: [
      "Manuel Belgrano",
      "Antonio José de Sucre"
    ]
  },
  {
    enunciado: "¿Qué sacerdote encabezó el inicio de la independencia en México en 1810?",
    correcta: "Miguel Hidalgo",
    incorrectas: [
      "José María Morelos",
      "Agustín de Iturbide"
    ]
  },
  {
    enunciado: "¿Qué documento proclamó la independencia del Brasil en 1822?",
    correcta: "El Grito de Ipiranga",
    incorrectas: [
      "El Plan de Iguala",
      "El Tratado de Tordesillas"
    ]
  },
  {
    enunciado: "¿Qué batalla en 1824 selló la independencia del Perú y de Sudamérica frente a España?",
    correcta: "Ayacucho",
    incorrectas: [
      "Junín",
      "Carabobo"
    ]
  },
  {
    enunciado: "¿Qué proyecto político integró a Colombia, Venezuela, Ecuador y Panamá entre 1821 y 1831?",
    correcta: "La Gran Colombia",
    incorrectas: [
      "Las Provincias Unidas del Río de la Plata",
      "La Confederación Peruano-Boliviana"
    ]
  },
  {
    enunciado: "¿Qué modelo político adoptó Brasil tras su independencia?",
    correcta: "Monarquía constitucional",
    incorrectas: [
      "República federal",
      "Dictadura militar"
    ]
  },
  {
    enunciado: "¿Qué doctrina estadounidense de 1823 proclamó la no intervención europea en América?",
    correcta: "Doctrina Monroe",
    incorrectas: [
      "Doctrina Truman",
      "Doctrina Calvo"
    ]
  },
  {
    enunciado: "¿Cuál fue una consecuencia política común de las independencias latinoamericanas?",
    correcta: "La inestabilidad y el caudillismo",
    incorrectas: [
      "La inmediata consolidación democrática",
      "La unión política de toda América Latina"
    ]
  },
  {
    enunciado: "¿Qué estructura social se mantuvo en gran medida tras la independencia?",
    correcta: "Las jerarquías raciales y la concentración de la tierra",
    incorrectas: [
      "La igualdad plena ante la ley",
      "El sistema de castas fue abolido totalmente"
    ]
  },
  {
    enunciado: "¿Qué sector económico sufrió una crisis tras las guerras de independencia?",
    correcta: "La producción agrícola y minera",
    incorrectas: [
      "La industria automotriz",
      "La producción de energía eléctrica"
    ]
  },
  {
    enunciado: "¿Qué país se convirtió en principal socio comercial de las nuevas repúblicas en el siglo XIX?",
    correcta: "Reino Unido",
    incorrectas: [
      "Estados Unidos",
      "Francia"
    ]
  },
  {
    enunciado: "¿Qué símbolo político-cultural adoptaron las nuevas naciones para reforzar su identidad?",
    correcta: "Himnos, banderas y escudos nacionales",
    incorrectas: [
      "Uniformes militares europeos",
      "Monedas de curso legal español"
    ]
  },
  {
    enunciado: "¿Qué tipo de régimen político fue frecuente en los primeros años postindependencia?",
    correcta: "Gobiernos militares o caudillistas",
    incorrectas: [
      "Monarquías absolutas",
      "Democracias parlamentarias consolidadas"
    ]
  },
  {
    enunciado: "¿Qué líder mexicano sucedió a Miguel Hidalgo en la lucha independentista?",
    correcta: "José María Morelos",
    incorrectas: [
      "Vicente Guerrero",
      "Lucas Alamán"
    ]
  },
  {
    enunciado: "¿Qué plan acordaron Iturbide y Guerrero para consumar la independencia de México?",
    correcta: "Plan de Iguala",
    incorrectas: [
      "Plan de Ayala",
      "Plan de San Luis"
    ]
  },
  {
    enunciado: "¿Qué país latinoamericano abolió la esclavitud de forma temprana en 1821?",
    correcta: "Chile",
    incorrectas: [
      "Brasil",
      "Cuba"
    ]
  },
  {
    enunciado: "¿Qué guerra civil siguió a la independencia en el Río de la Plata?",
    correcta: "Conflictos entre unitarios y federales",
    incorrectas: [
      "Guerra de los Mil Días",
      "Guerra del Pacífico"
    ]
  },
  {
    enunciado: "¿Qué movimiento de liberación afrodescendiente influyó en las luchas de independencia?",
    correcta: "La Revolución Haitiana",
    incorrectas: [
      "La Rebelión de Nat Turner",
      "La Guerra Civil estadounidense"
    ]
  },
  {
    enunciado: "¿Qué papel jugaron las mujeres en las guerras de independencia?",
    correcta: "Participaron como combatientes, espías y organizadoras",
    incorrectas: [
      "No participaron en ningún aspecto",
      "Solo tuvieron funciones protocolarias"
    ]
  },
  {
    enunciado: "¿Qué tratado de 1826 buscó unir políticamente a las repúblicas hispanoamericanas?",
    correcta: "Tratado del Congreso de Panamá",
    incorrectas: [
      "Tratado de París",
      "Tratado de Guadalupe Hidalgo"
    ]
  },
  {
    enunciado: "¿Qué factor económico contribuyó a la dependencia de las nuevas naciones?",
    correcta: "La exportación de materias primas sin industrialización",
    incorrectas: [
      "La autosuficiencia industrial",
      "El comercio cerrado al exterior"
    ]
  },
  {
    enunciado: "¿Qué líder argentino-chileno consolidó la independencia en el sur de Sudamérica?",
    correcta: "Bernardo O’Higgins",
    incorrectas: [
      "Francisco de Miranda",
      "Rafael Urdaneta"
    ]
  },
  {
    enunciado: "¿Qué país mantuvo Cuba y Puerto Rico hasta 1898?",
    correcta: "España",
    incorrectas: [
      "Portugal",
      "Francia"
    ]
  },
  {
    enunciado: "¿Qué general venezolano venció en la batalla de Carabobo en 1821?",
    correcta: "Simón Bolívar",
    incorrectas: [
      "Antonio José de Sucre",
      "José Félix Ribas"
    ]
  },
  {
    enunciado: "¿Qué batalla en 1818 aseguró la independencia de Chile?",
    correcta: "Batalla de Maipú",
    incorrectas: [
      "Batalla de Chacabuco",
      "Batalla de Pichincha"
    ]
  },
  {
    enunciado: "¿Qué batalla fue decisiva para la independencia de Ecuador en 1822?",
    correcta: "Batalla de Pichincha",
    incorrectas: [
      "Batalla de Boyacá",
      "Batalla de Ayacucho"
    ]
  },
  {
    enunciado: "¿Qué documento jurídico español influyó en los debates constitucionales americanos?",
    correcta: "La Constitución de Cádiz de 1812",
    incorrectas: [
      "La Constitución de Bayona",
      "El Estatuto de Bayona"
    ]
  },
  {
    enunciado: "¿Qué término describe el liderazgo político-militar personalista típico tras la independencia?",
    correcta: "Caudillismo",
    incorrectas: [
      "Absolutismo",
      "Federalismo"
    ]
  },
  {
    enunciado: "¿Qué líder fue decisivo en la victoria patriota de Junín y Ayacucho?",
    correcta: "Antonio José de Sucre",
    incorrectas: [
      "Manuel Belgrano",
      "Andrés de Santa Cruz"
    ]
  },
  {
    enunciado: "¿Qué proyecto político fracasó en Centroamérica poco después de la independencia?",
    correcta: "Las Provincias Unidas de Centroamérica",
    incorrectas: [
      "La Confederación Argentina",
      "La Liga Federal"
    ]
  }
];
