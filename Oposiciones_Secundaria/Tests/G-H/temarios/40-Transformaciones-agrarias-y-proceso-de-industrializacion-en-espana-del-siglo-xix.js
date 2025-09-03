// temarios/40-Transformaciones-agrarias-y-proceso-de-industrializacion-en-espana-del-siglo-xix.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué objetivo principal tuvo la desamortización de Mendizábal de 1836?",
    correcta: "Sanear la Hacienda y consolidar el régimen liberal mediante la venta de bienes eclesiásticos",
    incorrectas: [
      "Financiar la construcción de ferrocarriles",
      "Otorgar tierras gratuitas a los campesinos sin tierra"
    ]
  },
  {
    enunciado: "¿Qué tipo de bienes afectó principalmente la desamortización de Madoz de 1855?",
    correcta: "Bienes comunales y municipales",
    incorrectas: [
      "Únicamente bienes eclesiásticos",
      "Solo propiedades privadas de la nobleza"
    ]
  },
  {
    enunciado: "¿Qué consecuencia social tuvo la concentración de tierras tras las desamortizaciones?",
    correcta: "El aumento del proletariado rural sin tierra",
    incorrectas: [
      "La desaparición de la burguesía agraria",
      "La reducción de la producción agrícola"
    ]
  },
  {
    enunciado: "¿En qué regiones se introdujeron con mayor rapidez técnicas modernas agrícolas?",
    correcta: "Pla de Barcelona, Valencia y algunas zonas del norte",
    incorrectas: [
      "La Mancha y Extremadura",
      "Toda Andalucía"
    ]
  },
  {
    enunciado: "¿Qué sector industrial lideró el proceso de industrialización en Cataluña?",
    correcta: "El textil algodonero",
    incorrectas: [
      "La industria naval",
      "La construcción de automóviles"
    ]
  },
  {
    enunciado: "¿Qué recurso natural impulsó la siderurgia vasca en el siglo XIX?",
    correcta: "El mineral de hierro",
    incorrectas: [
      "El petróleo",
      "La bauxita"
    ]
  },
  {
    enunciado: "¿Qué limitación importante tuvo el mercado interior español durante el siglo XIX?",
    correcta: "Su tamaño reducido y la mala conexión de infraestructuras",
    incorrectas: [
      "Un exceso de competencia internacional",
      "La falta de productos agrícolas"
    ]
  },
  {
    enunciado: "¿Qué ley impulsó el desarrollo del ferrocarril en España en el siglo XIX?",
    correcta: "La Ley General de Ferrocarriles de 1855",
    incorrectas: [
      "La Ley de Caminos y Canales de 1840",
      "La Ley de Transporte Nacional de 1890"
    ]
  },
  {
    enunciado: "¿Qué arancel marcó un giro proteccionista en la política industrial española?",
    correcta: "El arancel de 1891",
    incorrectas: [
      "El arancel de Figuerola de 1849",
      "El arancel británico de 1860"
    ]
  },
  {
    enunciado: "¿Qué factor favoreció la emigración rural hacia las ciudades industriales?",
    correcta: "La expulsión de campesinos tras las desamortizaciones y la mecanización agrícola",
    incorrectas: [
      "El crecimiento de los latifundios estatales",
      "La creación de colonias agrarias estatales"
    ]
  },
  {
    enunciado: "¿En qué región se concentró la minería hullera en el siglo XIX?",
    correcta: "Asturias",
    incorrectas: [
      "Castilla-La Mancha",
      "Cataluña"
    ]
  },
  {
    enunciado: "¿Qué sector lideró la industrialización en el País Vasco?",
    correcta: "La siderurgia",
    incorrectas: [
      "El textil de lana",
      "La industria química"
    ]
  },
  {
    enunciado: "¿Qué limitación tecnológica tuvo la industria española en el siglo XIX?",
    correcta: "Dependencia de maquinaria y tecnología extranjera",
    incorrectas: [
      "Falta total de materias primas",
      "Prohibición legal de importar patentes"
    ]
  },
  {
    enunciado: "¿Qué clase social se fortaleció con las desamortizaciones?",
    correcta: "La burguesía agraria y urbana",
    incorrectas: [
      "El campesinado",
      "La nobleza feudal exclusivamente"
    ]
  },
  {
    enunciado: "¿Qué consecuencia laboral tuvo la industrialización en España?",
    correcta: "Formación de una clase obrera con condiciones precarias",
    incorrectas: [
      "Desaparición de la jornada laboral",
      "Implantación inmediata de derechos laborales universales"
    ]
  },
  {
    enunciado: "¿Qué característica tuvo la industrialización española frente a la británica?",
    correcta: "Fue más tardía y concentrada en pocas regiones",
    incorrectas: [
      "Fue más rápida y homogénea",
      "Se basó principalmente en la energía hidroeléctrica"
    ]
  },
  {
    enunciado: "¿Qué corriente sindical comenzó a surgir en la España industrial del siglo XIX?",
    correcta: "Mutualismo y primeros movimientos obreros",
    incorrectas: [
      "Sindicatos comunistas organizados legalmente",
      "Asociaciones empresariales transnacionales"
    ]
  },
  {
    enunciado: "¿Qué factor natural favoreció la exportación vasca de hierro?",
    correcta: "La alta calidad del mineral y la proximidad a puertos",
    incorrectas: [
      "La abundancia de carbón en la zona",
      "La existencia de grandes ríos navegables"
    ]
  },
  {
    enunciado: "¿Qué impacto tuvo la industrialización en la estructura social?",
    correcta: "Crecimiento de la burguesía industrial y proletariado urbano",
    incorrectas: [
      "Desaparición de la nobleza",
      "Homogeneización social completa"
    ]
  },
  {
    enunciado: "¿Qué recurso energético comenzó a explotarse en Asturias en el XIX?",
    correcta: "El carbón",
    incorrectas: [
      "El petróleo",
      "El gas natural"
    ]
  },
  {
    enunciado: "¿Qué relación se estableció entre agricultura e industria en España?",
    correcta: "Interdependencia de materias primas y mercado de consumo",
    incorrectas: [
      "Competencia excluyente entre sectores",
      "Desvinculación total de la producción"
    ]
  },
  {
    enunciado: "¿Qué efecto territorial tuvo el desarrollo industrial desigual?",
    correcta: "Dualidad entre regiones industrializadas y agrarias tradicionales",
    incorrectas: [
      "Uniformidad de crecimiento en todo el país",
      "Industrialización de todas las provincias"
    ]
  },
  {
    enunciado: "¿Qué conflicto social fue común en el campo andaluz del XIX?",
    correcta: "Levantamientos y protestas por la falta de tierras",
    incorrectas: [
      "Revueltas contra la industrialización minera",
      "Huelgas generales por el transporte"
    ]
  },
  {
    enunciado: "¿Qué factor internacional afectó a la economía española del XIX?",
    correcta: "La competencia de productos industriales británicos",
    incorrectas: [
      "El bloqueo marítimo de la Primera Guerra Mundial",
      "La prohibición internacional de exportar vino"
    ]
  },
  {
    enunciado: "¿Qué transporte vertebró parcialmente el mercado interior en el XIX?",
    correcta: "El ferrocarril",
    incorrectas: [
      "El transporte aéreo",
      "Los automóviles"
    ]
  },
  {
    enunciado: "¿Qué ley liberalizó la venta de bienes comunales y eclesiásticos?",
    correcta: "La Ley de Madoz de 1855",
    incorrectas: [
      "La Ley de Montes de 1863",
      "La Ley de Minas de 1868"
    ]
  },
  {
    enunciado: "¿Qué característica tuvo la agricultura española tras las desamortizaciones?",
    correcta: "Mayor concentración de la propiedad y persistencia del latifundismo",
    incorrectas: [
      "Reparto equitativo de tierras entre campesinos",
      "Desaparición del minifundismo"
    ]
  },
  {
    enunciado: "¿Qué región industrializó antes su sector textil?",
    correcta: "Cataluña",
    incorrectas: [
      "Andalucía",
      "Galicia"
    ]
  },
  {
    enunciado: "¿Qué modelo económico defendía la burguesía industrial española?",
    correcta: "Proteccionismo para la industria nacional",
    incorrectas: [
      "Libre comercio sin aranceles",
      "Economía planificada"
    ]
  },
  {
    enunciado: "¿Qué consecuencia tuvo la modernización parcial de la agricultura?",
    correcta: "Mejora en algunas zonas pero bajo rendimiento general",
    incorrectas: [
      "Aumento homogéneo de la productividad en todo el país",
      "Desaparición del trabajo jornalero"
    ]
  },
  {
    enunciado: "¿Qué fenómeno social se intensificó por la industrialización?",
    correcta: "Migraciones internas hacia ciudades industriales",
    incorrectas: [
      "Despoblamiento total del litoral",
      "Emigración exclusiva a América"
    ]
  },
  {
    enunciado: "¿Qué sector dependía de la lana y el algodón como materia prima?",
    correcta: "El textil",
    incorrectas: [
      "La siderurgia",
      "La minería"
    ]
  },
  {
    enunciado: "¿Qué elemento fue esencial para el crecimiento urbano-industrial?",
    correcta: "La llegada de mano de obra desde el campo",
    incorrectas: [
      "La importación masiva de trabajadores europeos",
      "La automatización total de la industria"
    ]
  },
  {
    enunciado: "¿Qué limitación tuvo la industria minera asturiana?",
    correcta: "Falta de transporte eficiente para el carbón",
    incorrectas: [
      "Escasez de carbón",
      "Prohibición de exportar mineral"
    ]
  },
  {
    enunciado: "¿Qué sector industrial se desarrolló en torno a la ría de Bilbao?",
    correcta: "La siderurgia",
    incorrectas: [
      "La construcción naval ligera",
      "La industria alimentaria"
    ]
  },
  {
    enunciado: "¿Qué corriente política apoyó las desamortizaciones?",
    correcta: "El liberalismo",
    incorrectas: [
      "El absolutismo",
      "El socialismo"
    ]
  },
  {
    enunciado: "¿Qué papel tuvo la nobleza en la propiedad agraria tras las desamortizaciones?",
    correcta: "Mantuvo y en algunos casos amplió sus propiedades",
    incorrectas: [
      "Perdió completamente sus tierras",
      "Fue expropiada sin compensación"
    ]
  },
  {
    enunciado: "¿Qué indicador refleja la modernización económica desigual de España en el XIX?",
    correcta: "Concentración industrial en pocas regiones frente a amplio sector agrario atrasado",
    incorrectas: [
      "Homogeneidad productiva en todo el país",
      "Industrialización agrícola en todas las provincias"
    ]
  }
];
