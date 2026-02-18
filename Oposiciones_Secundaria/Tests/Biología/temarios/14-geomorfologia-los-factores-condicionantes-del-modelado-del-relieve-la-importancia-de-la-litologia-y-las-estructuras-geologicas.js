// temarios/14-geomorfologia-los-factores-condicionantes-del-modelado-del-relieve-la-importancia-de-la-litologia-y-las-estructuras-geologicas.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué estudia la geomorfología de manera prioritaria?",
    correcta: "Las formas del relieve, los procesos que las generan y su evolución en el tiempo",
    incorrectas: [
      "La composición química del manto terrestre",
      "La dinámica de las placas exclusivamente oceánicas"
    ]
  },
  {
    enunciado: "¿Cuál de estos es un controlador fundamental del modelado del relieve?",
    correcta: "El clima, por su influencia en meteorización, erosión y transporte",
    incorrectas: [
      "El color de los suelos",
      "La conductividad eléctrica de la atmósfera"
    ]
  },
  {
    enunciado: "¿Qué papel desempeña la litología en el modelado del relieve?",
    correcta: "Condiciona la resistencia, solubilidad y alterabilidad de las rocas",
    incorrectas: [
      "Determina el campo magnético terrestre",
      "Controla la presión atmosférica a nivel del mar"
    ]
  },
  {
    enunciado: "¿Cuál es el efecto geomorfológico más habitual de una litología muy resistente (p. ej., cuarcita)?",
    correcta: "Relieves estructurales en cresta por erosión diferencial",
    incorrectas: [
      "Planicies de disolución generalizada",
      "Hundimientos extensos por colapso salino"
    ]
  },
  {
    enunciado: "¿Qué proceso describe mejor la gelifracción?",
    correcta: "Rotura de la roca por ciclos de hielo–deshielo en poros y fracturas",
    incorrectas: [
      "Disolución de carbonatos por ácido carbónico",
      "Oxidación de minerales ferromagnesianos"
    ]
  },
  {
    enunciado: "¿Qué fenómeno favorece la meteorización química intensa en trópicos húmedos?",
    correcta: "Altas temperaturas y elevada disponibilidad de agua",
    incorrectas: [
      "Bajas temperaturas y aridez persistente",
      "Permafrost continuo durante todo el año"
    ]
  },
  {
    enunciado: "¿Cuál es el agente dominante en el modelado de badlands sobre margas y arcillas?",
    correcta: "La erosión hídrica concentrada y la escorrentía difusa",
    incorrectas: [
      "La abrasión glacial",
      "La deflación por vientos fríos polares"
    ]
  },
  {
    enunciado: "¿Qué estructura geológica genera con frecuencia escarpes rectilíneos y facetas triangulares?",
    correcta: "Una falla normal activa o reciente",
    incorrectas: [
      "Un pliegue isoclinal enterrado",
      "Una discordancia angular"
    ]
  },
  {
    enunciado: "¿Cómo se denomina el plano que separa estratos con diferentes inclinaciones por un evento tectónico?",
    correcta: "Discordancia",
    incorrectas: [
      "Diaclasa",
      "Pliegue anticlinal"
    ]
  },
  {
    enunciado: "¿Qué forma es típica de relieves graníticos sometidos a descompresión?",
    correcta: "Domos de exfoliación y berrocales",
    incorrectas: [
      "Karst de torre",
      "Yardangs alargados"
    ]
  },
  {
    enunciado: "¿Qué conjunto de procesos incluye la dinámica fluvial?",
    correcta: "Erosión, transporte de sedimentos y sedimentación",
    incorrectas: [
      "Sublimación, condensación y evaporación",
      "Magmatismo, metamorfismo y solidificación"
    ]
  },
  {
    enunciado: "¿Cuál es el resultado típico de la disolución de calizas por aguas ligeramente ácidas?",
    correcta: "Formas kársticas como dolinas, lapiaces y cuevas",
    incorrectas: [
      "Modelado periglaciar con suelos poligonales",
      "Relieves eólicos con dunas longitudinales"
    ]
  },
  {
    enunciado: "¿Qué variable controla directamente la capacidad de un río para transportar sedimentos?",
    correcta: "El caudal y la pendiente (energía disponible)",
    incorrectas: [
      "El albedo de la cuenca",
      "La orientación magnética del canal"
    ]
  },
  {
    enunciado: "¿Qué término define la superficie superior de un acuífero libre que afecta a la estabilidad de laderas?",
    correcta: "Nivel freático",
    incorrectas: [
      "Moho",
      "Curie"
    ]
  },
  {
    enunciado: "¿Qué son las cuestas en geomorfología estructural?",
    correcta: "Relieves con vertiente suave en el sentido del buzamiento y escarpe abrupto opuesto",
    incorrectas: [
      "Valles glaciares en U con morrenas laterales",
      "Playas de cantos formadas por oleaje de tormenta"
    ]
  },
  {
    enunciado: "¿Cuál es un indicador morfotectónico de levantamiento reciente en una cuenca fluvial?",
    correcta: "Knickpoints y terrazas escalonadas en el perfil longitudinal",
    incorrectas: [
      "Desarrollo de manglares en estuarios",
      "Dunas parabólicas migrando tierra adentro"
    ]
  },
  {
    enunciado: "¿Qué proceso domina el modelado en costas rocosas expuestas al oleaje?",
    correcta: "Abrasión marina y retroceso de acantilados",
    incorrectas: [
      "Solifluxión generalizada",
      "Lateritización profunda"
    ]
  },
  {
    enunciado: "¿Qué condición favorece deslizamientos planares en rocas metamórficas foliadas?",
    correcta: "La presencia de planos de debilidad paralelos a la ladera",
    incorrectas: [
      "La ausencia total de fracturas",
      "El buzamiento contrario a la pendiente"
    ]
  },
  {
    enunciado: "¿Qué ambiente favorece yardangs y superficies de deflación?",
    correcta: "Regiones áridas con vientos persistentes y poca vegetación",
    incorrectas: [
      "Ambientes glaciales con balance de masa positivo",
      "Zonas kársticas con alta recarga"
    ]
  },
  {
    enunciado: "¿Cuál es el principal control del karst en evaporitas (yesos y sales)?",
    correcta: "Alta solubilidad y rápida disolución que generan colapsos y dolinas",
    incorrectas: [
      "Baja solubilidad y formación de tafoni",
      "Resistencia extrema a la disolución ácida"
    ]
  },
  {
    enunciado: "¿Qué es la erosión diferencial?",
    correcta: "Desgaste desigual por diferencias litológicas, texturales o estructurales",
    incorrectas: [
      "Disolución homogénea de todas las litologías",
      "Erosión uniforme debida a la gravedad"
    ]
  },
  {
    enunciado: "¿Cuál es el origen de un valle en artesa (perfil en U)?",
    correcta: "Acción erosiva de un glaciar de valle",
    incorrectas: [
      "Incisión de un río meandriforme",
      "Deflación eólica prolongada"
    ]
  },
  {
    enunciado: "¿Qué forma deposicional se asocia a la desembocadura de un río en un medio marino de baja energía?",
    correcta: "Delta",
    incorrectas: [
      "Tómbolo",
      "Poljé"
    ]
  },
  {
    enunciado: "¿Qué rasgo geomorfológico indica litologías arcillosas muy meteorizables en climas semiáridos?",
    correcta: "Cárcavas y formas de badlands",
    incorrectas: [
      "Mesas basálticas invertidas",
      "Circos glaciares colgados"
    ]
  },
  {
    enunciado: "¿Qué variable del clima favorece la haloclastia en zonas costeras áridas?",
    correcta: "La evaporación intensa que cristaliza sales en poros y fisuras",
    incorrectas: [
      "La saturación constante del suelo",
      "La presencia de permafrost continuo"
    ]
  },
  {
    enunciado: "¿Qué término define la altura del escarpe generado por una falla activa?",
    correcta: "Escarpe de falla",
    incorrectas: [
      "Lapiaz",
      "Taffoni"
    ]
  },
  {
    enunciado: "¿Qué relación suele existir entre buzamiento de estratos y desarrollo de relieves homoclinales?",
    correcta: "El buzamiento suave favorece cuestas y cuestiformes",
    incorrectas: [
      "El buzamiento vertical genera plataformas litorales",
      "El buzamiento contrario impide cualquier relieve estructural"
    ]
  },
  {
    enunciado: "¿Qué forma se desarrolla por acumulación en la base de laderas en medios áridos con lluvias torrenciales?",
    correcta: "Abanicos aluviales",
    incorrectas: [
      "Morrenas frontales",
      "Tómbolos de arena"
    ]
  },
  {
    enunciado: "¿Qué indicador de cuenca se usa para detectar desequilibrios morfotectónicos?",
    correcta: "El índice de integral hipsométrica (HI) y perfiles χ",
    incorrectas: [
      "El índice de color Munsell del suelo",
      "La salinidad del acuífero freático"
    ]
  },
  {
    enunciado: "¿Cómo afecta la vegetación al modelado del relieve?",
    correcta: "Protege frente a la erosión al estabilizar suelos y disipar energía de la lluvia",
    incorrectas: [
      "Aumenta el desprendimiento de bloques por crecimiento radicular",
      "Impide la formación de suelos en todas las condiciones"
    ]
  },
  {
    enunciado: "¿Qué litología favorece relieves ruiniformes con formas alveolares en climas áridos?",
    correcta: "Areniscas y conglomerados con tafoni",
    incorrectas: [
      "Cuarcitas masivas sin porosidad",
      "Evaporitas puras con alta plasticidad"
    ]
  },
  {
    enunciado: "¿Qué secuencia describe un sistema litoral erosivo maduro?",
    correcta: "Acantilado activo → plataforma de abrasión → retroceso del frente",
    incorrectas: [
      "Duna longitudinal → yardang → glaciar de valle",
      "Delta → poljé → morrena basal"
    ]
  },
  {
    enunciado: "¿Qué condición suele desencadenar movimientos en masa en laderas arcillosas?",
    correcta: "Saturación del suelo y aumento de la presión intersticial",
    incorrectas: [
      "Descenso del nivel freático y secado intenso",
      "Congelación profunda prolongada en clima tropical"
    ]
  },
  {
    enunciado: "¿Qué rasgo distingue un valle sinclinal colgado en relieves plegados?",
    correcta: "Un valle excavado en el núcleo de un sinclinal que queda a mayor cota que el entorno",
    incorrectas: [
      "Un valle excavado en la charnela de un anticlinal a cota inferior",
      "Una garganta excavada en fallas inversas"
    ]
  },
  {
    enunciado: "¿Cuál es una señal de captura fluvial reciente?",
    correcta: "Codos de captura y cambios bruscos en la dirección de drenaje",
    incorrectas: [
      "Apertura de un arco litoral",
      "Aportación de bloques erráticos glaciares"
    ]
  },
  {
    enunciado: "¿Qué forma indica inversión de relieve por relleno resistente en paleovalles?",
    correcta: "Crestas basálticas estrechas sobre materiales blandos erosionados",
    incorrectas: [
      "Dolinas alineadas en calizas",
      "Yardangs paralelos al viento dominante"
    ]
  },
  {
    enunciado: "¿Qué factor antrópico acelera con frecuencia las tasas de erosión en cuencas agrícolas?",
    correcta: "La eliminación de cubierta vegetal y el laboreo en pendiente",
    incorrectas: [
      "La implantación de terrazas de contorno",
      "La reforestación con especies autóctonas"
    ]
  },
  {
    enunciado: "¿Qué herramienta moderna permite estimar tasas de levantamiento o subsidencia a escala regional?",
    correcta: "Interferometría radar satelital (InSAR)",
    incorrectas: [
      "Medición manual del pH del río",
      "Observación visual de nubes convectivas"
    ]
  },
  {
    enunciado: "¿Qué combinación de factores explica mejor un paisaje kárstico bien desarrollado?",
    correcta: "Litología carbonatada, fracturación adecuada y abundante agua ligeramente ácida",
    incorrectas: [
      "Basalto masivo, aridez extrema y ausencia de diaclasas",
      "Cuarcita pura, clima polar y glaciación activa"
    ]
  }
];
