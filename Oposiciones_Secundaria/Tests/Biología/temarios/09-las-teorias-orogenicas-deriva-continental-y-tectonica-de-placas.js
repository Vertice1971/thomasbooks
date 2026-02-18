// temarios/09-las-teorias-orogenicas-deriva-continental-y-tectonica-de-placas.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué se entiende por orogénesis?",
    correcta: "Conjunto de procesos que forman cordilleras",
    incorrectas: [
      "Serie de erupciones volcánicas aisladas",
      "Deposición exclusiva de sedimentos marinos"
    ]
  },
  {
    enunciado: "¿Cuál era la idea central del fijismo verticalista clásico?",
    correcta: "Las montañas se explican por movimientos verticales de la corteza",
    incorrectas: [
      "Las cordilleras se forman por arrastre horizontal de placas",
      "Las montañas surgen por solidificación de océanos primitivos"
    ]
  },
  {
    enunciado: "¿Qué proponía la teoría del geosinclinal?",
    correcta: "Cuencas profundas de sedimentación que luego se pliegan y elevan",
    incorrectas: [
      "Subducción de litosfera oceánica bajo litosfera continental",
      "Expansión de fondos oceánicos en dorsales activas"
    ]
  },
  {
    enunciado: "¿Qué aspecto introdujo el movilismo frente al fijismo?",
    correcta: "Movimientos horizontales tangenciales de grandes bloques corticales",
    incorrectas: [
      "Solidificación instantánea de la corteza",
      "Desaparición del vulcanismo en orógenos"
    ]
  },
  {
    enunciado: "¿Quién formuló la hipótesis de la deriva continental en 1912?",
    correcta: "Alfred Wegener",
    incorrectas: [
      "Arthur Holmes",
      "Harry Hess"
    ]
  },
  {
    enunciado: "¿Qué evidencia apoyaba Wegener?",
    correcta: "Encaje de costas y similitud de fósiles entre continentes hoy separados",
    incorrectas: [
      "Mediciones GPS de velocidades de placas",
      "Distribución de anomalías magnéticas simétricas en dorsales"
    ]
  },
  {
    enunciado: "¿Qué supercontinente propuso Wegener?",
    correcta: "Pangea",
    incorrectas: [
      "Rodinia",
      "Columbia"
    ]
  },
  {
    enunciado: "¿Qué mecanismo interno faltaba en la propuesta original de Wegener?",
    correcta: "Una fuerza convincente que explicara el movimiento de los continentes",
    incorrectas: [
      "La existencia de fósiles guía",
      "La presencia de cinturones orogénicos"
    ]
  },
  {
    enunciado: "¿Quién propuso la expansión del fondo oceánico a partir de dorsales?",
    correcta: "Harry Hess",
    incorrectas: [
      "Moho y Gutenberg",
      "Hutton y Lyell"
    ]
  },
  {
    enunciado: "¿Qué demuestran las bandas magnéticas simétricas en los océanos?",
    correcta: "Registro de inversión del campo y crecimiento de la corteza oceánica en dorsales",
    incorrectas: [
      "Contracción térmica global de la Tierra",
      "Rotación diferencial de la astenosfera"
    ]
  },
  {
    enunciado: "¿Qué es una placa litosférica?",
    correcta: "Bloque rígido de litosfera que se desplaza sobre la astenosfera",
    incorrectas: [
      "Capa plástica del manto superior",
      "Zona de subducción sin relieve asociado"
    ]
  },
  {
    enunciado: "¿Qué tipo de límite de placa genera corteza oceánica nueva?",
    correcta: "Límite divergente (dorsal oceánica o rift)",
    incorrectas: [
      "Límite convergente de subducción",
      "Falla transformante"
    ]
  },
  {
    enunciado: "¿Qué ocurre en un límite convergente oceánico-continental?",
    correcta: "La litosfera oceánica subduce bajo la continental",
    incorrectas: [
      "Ambas placas se separan formando nueva corteza",
      "Se deslizan lateralmente sin pérdida de litosfera"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a un límite transformante?",
    correcta: "Desplazamiento lateral de placas con fallas como la de San Andrés",
    incorrectas: [
      "Creación de corteza en dorsales",
      "Colisión continental con alto metamorfismo"
    ]
  },
  {
    enunciado: "¿Qué describe el ciclo de Wilson?",
    correcta: "Apertura y cierre repetido de océanos y formación de orógenos",
    incorrectas: [
      "Alternancia entre eras glaciales y interglaciales",
      "Variación secular del campo magnético terrestre"
    ]
  },
  {
    enunciado: "¿Qué es una zona de Wadati-Benioff?",
    correcta: "Plano de sismicidad que marca la losa que subduce",
    incorrectas: [
      "Horizonte de fusión parcial bajo dorsales",
      "Región del núcleo externo con convección"
    ]
  },
  {
    enunciado: "¿Qué son las ofiolitas en un orógeno?",
    correcta: "Fragmentos de litosfera oceánica obducida sobre continente",
    incorrectas: [
      "Rocas plutónicas profundas de batolitos andinos",
      "Evaporitas depositadas en cuencas de antepaís"
    ]
  },
  {
    enunciado: "¿Qué fuerza contribuye al movimiento de placas hacia zonas de subducción?",
    correcta: "Tracción de la losa (slab pull)",
    incorrectas: [
      "Fricción atmosférica",
      "Fuerza centrífuga ecuatorial"
    ]
  },
  {
    enunciado: "¿Qué proceso explica la elevación isostática tras la erosión de una cordillera?",
    correcta: "Ajuste isostático por reducción de carga",
    incorrectas: [
      "Compactación diagenética",
      "Aumento de densidad del manto superior"
    ]
  },
  {
    enunciado: "¿Qué cuencas se desarrollan típicamente frente a cinturones de pliegues y cabalgamientos?",
    correcta: "Cuencas de antepaís (foreland)",
    incorrectas: [
      "Cuencas de retroarco exclusivamente oceánicas",
      "Cuencas glaciares de sobreexcavación"
    ]
  },
  {
    enunciado: "¿Qué evidencias modernas validan la tectónica de placas?",
    correcta: "Paleomagnetismo, distribución de sismos/volcanes y geodesia GPS",
    incorrectas: [
      "Solo cartografía de fósiles marinos",
      "Exclusivamente la topografía continental"
    ]
  },
  {
    enunciado: "¿Qué indica la coincidencia de cinturones orogénicos antiguos entre continentes separados?",
    correcta: "Que estuvieron unidos antes de la apertura oceánica",
    incorrectas: [
      "Que la orogenia se generó por hundimiento vertical local",
      "Que no hubo desplazamiento relativo entre continentes"
    ]
  },
  {
    enunciado: "¿Qué ocurre cuando colisionan dos masas continentales?",
    correcta: "Se engrosan, se pliegan y generan metamorfismo y relieve elevado",
    incorrectas: [
      "Se subduce la corteza continental por su mayor densidad",
      "Se expande el fondo oceánico intermedio"
    ]
  },
  {
    enunciado: "¿Qué es una tripe unión (triple junction)?",
    correcta: "Punto donde coinciden tres límites de placa",
    incorrectas: [
      "Zona de cizalla intracontinental sin actividad",
      "Isla volcánica alejada de todo límite"
    ]
  },
  {
    enunciado: "¿Qué son los puntos calientes (hotspots) en geodinámica?",
    correcta: "Fuentes térmicas fijas relativas que generan cadenas volcánicas",
    incorrectas: [
      "Fallas transformantes que calientan por fricción",
      "Zonas de subducción sin magmatismo asociado"
    ]
  },
  {
    enunciado: "¿Qué relación hay entre edad de la corteza oceánica y distancia a la dorsal?",
    correcta: "Aumenta la edad conforme se aleja de la dorsal",
    incorrectas: [
      "La corteza es más joven junto a las fosas",
      "La edad es aleatoria en todo el fondo oceánico"
    ]
  },
  {
    enunciado: "¿Qué rasgo se asocia a vulcanismo de arco insular?",
    correcta: "Subducción de litosfera oceánica y fusión por fluidos",
    incorrectas: [
      "Extensión pura en dorsales",
      "Cizalla lateral sin aporte de magma"
    ]
  },
  {
    enunciado: "¿Qué papel tiene la convección del manto en la tectónica de placas?",
    correcta: "Transfiere calor y contribuye al arrastre basal de placas",
    incorrectas: [
      "Impide el movimiento de placas por fricción elevada",
      "Solidifica el manto superior completamente"
    ]
  },
  {
    enunciado: "¿Qué diferencia básica hay entre MORB y OIB?",
    correcta: "MORB se asocia a dorsales; OIB a puntos calientes intraplaca",
    incorrectas: [
      "Ambos se generan solo en colisiones continentales",
      "MORB proviene de subducción de sedimentos"
    ]
  },
  {
    enunciado: "¿Qué parámetro se obtiene de mecanismos focales de terremotos?",
    correcta: "Tipo de falla y orientación de esfuerzos",
    incorrectas: [
      "Composición química del magma",
      "Edad de la corteza afectada"
    ]
  },
  {
    enunciado: "¿Qué es una sutura orogénica?",
    correcta: "Contacto que marca la unión de dos placas tras colisión",
    incorrectas: [
      "Una falla transformante intraplaca",
      "Una dorsal fósil sin deformación"
    ]
  },
  {
    enunciado: "¿Qué son los terrenos acrecionados (terranes)?",
    correcta: "Fragmentos crustales añadidos a un margen por transporte tectónico",
    incorrectas: [
      "Depósitos aluviales sobre una llanura costera",
      "Pliegues por compactación diagenética"
    ]
  },
  {
    enunciado: "¿Qué mide la geodesia por satélite (GPS) en tectónica?",
    correcta: "Velocidades y direcciones de desplazamiento de placas",
    incorrectas: [
      "Grosor del núcleo interno",
      "Profundidad exacta del Moho global"
    ]
  },
  {
    enunciado: "¿Qué es la flexión litosférica en márgenes activos?",
    correcta: "Curvatura de la placa oceánica al entrar en subducción",
    incorrectas: [
      "Elevación térmica en puntos calientes",
      "Hundimiento de dorsales por enfriamiento instantáneo"
    ]
  },
  {
    enunciado: "¿Qué proceso genera metamorfismo de alta presión en cinturones de subducción?",
    correcta: "Enterramiento rápido de corteza fría y deshidratación de la losa",
    incorrectas: [
      "Descompresión adiabática en dorsales",
      "Calentamiento por impacto meteorítico"
    ]
  },
  {
    enunciado: "¿Qué indica una anomalía térmica negativa en tomografía sísmica bajo una fosa?",
    correcta: "Presencia de losa fría subduciendo",
    incorrectas: [
      "Ascenso de penacho caliente",
      "Núcleo externo sólido"
    ]
  },
  {
    enunciado: "¿Qué controlan las tasas de expansión en dorsales oceánicas?",
    correcta: "El relieve axial y el estilo de magmatismo",
    incorrectas: [
      "La salinidad del océano global",
      "La polaridad de campos magnéticos continentales"
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre rift continental y dorsal oceánica?",
    correcta: "El rift inicia la extensión en continente; la dorsal crea corteza oceánica madura",
    incorrectas: [
      "El rift es convergente y la dorsal transformante",
      "Ambos son colisiones continentales"
    ]
  },
  {
    enunciado: "¿Qué principio explica el levantamiento tras el deshielo de escudos glaciares?",
    correcta: "Rebote isostático",
    incorrectas: [
      "Subducción continental",
      "Convección atmosférica"
    ]
  },
  {
    enunciado: "¿Qué relación existe entre orogenia y metamorfismo regional?",
    correcta: "La colisión y engrosamiento cortical generan metamorfismo extensivo",
    incorrectas: [
      "Las colisiones inhiben cualquier metamorfismo",
      "Solo aparece metamorfismo de contacto en orógenos"
    ]
  },
  {
    enunciado: "¿Qué resume la teoría moderna de la tectónica de placas?",
    correcta: "La litosfera fragmentada en placas móviles explica sismos, volcanes y orógenos",
    incorrectas: [
      "Los continentes son estacionarios y el océano se contrae",
      "El relieve se origina solo por hundimientos verticales"
    ]
  }
];
