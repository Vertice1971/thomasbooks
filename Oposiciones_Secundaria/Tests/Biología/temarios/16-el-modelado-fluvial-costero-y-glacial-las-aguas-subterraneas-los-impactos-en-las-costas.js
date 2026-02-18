// temarios/16-el-modelado-fluvial-costero-y-glacial-las-aguas-subterraneas-los-impactos-en-las-costas.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué procesos básicos integran la dinámica fluvial?",
    correcta: "Erosión, transporte y sedimentación",
    incorrectas: [
      "Sublimación, condensación y evaporación",
      "Magmatismo, metamorfismo y solidificación"
    ]
  },
  {
    enunciado: "¿Qué controla principalmente el perfil longitudinal de un río?",
    correcta: "El nivel de base y los cambios en litología o tectónica",
    incorrectas: [
      "El albedo de la cuenca",
      "La orientación magnética del valle"
    ]
  },
  {
    enunciado: "¿Qué término describe saltos locales de pendiente en el perfil de un río?",
    correcta: "Knickpoints",
    incorrectas: [
      "Drumlins",
      "Tómbolos"
    ]
  },
  {
    enunciado: "En ríos meandriformes, ¿dónde se deposita preferentemente el sedimento?",
    correcta: "En la orilla interior formando barras de punta",
    incorrectas: [
      "En la orilla exterior por máxima velocidad",
      "Exclusivamente en cabeceras de cuenca"
    ]
  },
  {
    enunciado: "¿Qué estilo fluvial se asocia a alta carga de fondo y pendiente elevada?",
    correcta: "Río trenzado (braided)",
    incorrectas: [
      "Río anastomosado estable",
      "Río meandriforme de baja energía"
    ]
  },
  {
    enunciado: "¿Qué son las terrazas fluviales?",
    correcta: "Superficies escalonadas que registran antiguos niveles de llanura de inundación",
    incorrectas: [
      "Formas kársticas de disolución profunda",
      "Depósitos glaciares subactuales"
    ]
  },
  {
    enunciado: "¿Qué parámetro hidráulico aproxima el caudal de banco lleno (bankfull)?",
    correcta: "El caudal típico de inicio de desbordamiento que moldea la sección",
    incorrectas: [
      "El máximo histórico de la serie",
      "El caudal base estival"
    ]
  },
  {
    enunciado: "¿Cuál NO es una forma deposicional fluvial típica?",
    correcta: "Notch mareal",
    incorrectas: [
      "Barra alterna",
      "Llanura aluvial"
    ]
  },
  {
    enunciado: "¿Qué forzamiento domina el modelado de playas arenosas?",
    correcta: "El clima de oleaje y las corrientes litorales de deriva",
    incorrectas: [
      "La subsidencia glacioisostática exclusivamente",
      "La actividad volcánica subaérea inmediata"
    ]
  },
  {
    enunciado: "¿Qué forma costera une una isla rocosa al continente por depósito de arena?",
    correcta: "Tómbolo",
    incorrectas: [
      "Flecha litoral",
      "Delta en arco"
    ]
  },
  {
    enunciado: "¿Qué elemento caracteriza los acantilados activos?",
    correcta: "Plataforma de abrasión y retroceso del frente",
    incorrectas: [
      "Cordones litorales progradantes continuos",
      "Barras de punta fluviales permanentes"
    ]
  },
  {
    enunciado: "¿Qué define mejor una celda litoral?",
    correcta: "Un tramo de costa con presupuesto de sedimentos parcialmente cerrado",
    incorrectas: [
      "Una bahía sin intercambio de sedimentos",
      "Una zona de marea sin oleaje"
    ]
  },
  {
    enunciado: "¿Qué tipo de costa está controlada mayormente por la amplitud de marea?",
    correcta: "Costa dominada por marea",
    incorrectas: [
      "Costa eólica",
      "Costa ignimbrítica"
    ]
  },
  {
    enunciado: "¿Qué indicador geomorfológico sugiere subida del nivel del mar en playas?",
    correcta: "Retroceso crónico de la línea de costa y estrechamiento de la playa",
    incorrectas: [
      "Progradación continua del cordón litoral",
      "Formación de terrazas marinas elevadas recientes"
    ]
  },
  {
    enunciado: "¿Qué glaciares cubren grandes extensiones continentales?",
    correcta: "Casquetes/indlandsis",
    incorrectas: [
      "Glaciares de circo exclusivamente",
      "Glaciares de roca"
    ]
  },
  {
    enunciado: "¿Qué perfil transversal es típico de un valle glacial?",
    correcta: "Valle en U por sobreexcavación",
    incorrectas: [
      "Valle en V por incisión fluvial",
      "Cañón con paredes verticales por karst"
    ]
  },
  {
    enunciado: "¿Qué depósito mal seleccionado es característico del glaciar?",
    correcta: "Till (morrena)",
    incorrectas: [
      "Loess eólico",
      "Arenas de playa clasificadas"
    ]
  },
  {
    enunciado: "¿Qué forma erosiva glaciar pulida con estrías se denomina?",
    correcta: "Roca aborregada",
    incorrectas: [
      "Drumlin",
      "Esker"
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre un esker y un drumlin?",
    correcta: "Esker es un cordón arenoso/gravoso de origen subglacial; drumlin es una colina alargada moldeada en till",
    incorrectas: [
      "Ambos son barras de punta fluviales",
      "Ambos son morrenas frontales idénticas"
    ]
  },
  {
    enunciado: "¿Qué magnitud controla el flujo en medios porosos según Darcy?",
    correcta: "Gradiente hidráulico y conductividad del medio",
    incorrectas: [
      "Temperatura del aire y presión barométrica",
      "Contenido de arcilla del horizonte A exclusivamente"
    ]
  },
  {
    enunciado: "¿Cómo se denomina la superficie superior del agua en un acuífero libre?",
    correcta: "Nivel freático",
    incorrectas: [
      "Moho",
      "Curie"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a un acuífero confinado?",
    correcta: "Está limitado por capas de baja permeabilidad y puede presentar presión artesiana",
    incorrectas: [
      "Carece de recarga",
      "Solo existe en rocas ígneas plutónicas"
    ]
  },
  {
    enunciado: "¿Qué acuíferos presentan drenaje rápido y alta anisotropía por disolución?",
    correcta: "Acuíferos kársticos",
    incorrectas: [
      "Acuíferos porosos homogéneos",
      "Acuíferos confinados arcillosos"
    ]
  },
  {
    enunciado: "¿Qué problema afecta a acuíferos costeros por bombeo excesivo?",
    correcta: "Intrusión salina e inversión del gradiente",
    incorrectas: [
      "Aumento del caudal de surgencias",
      "Formación espontánea de deltas"
    ]
  },
  {
    enunciado: "¿Qué modelo conceptual explica la intrusión marina en acuíferos costeros?",
    correcta: "Relación de Ghyben–Herzberg",
    incorrectas: [
      "Ley de Stokes",
      "Ecuación de Bernoulli atmosférica"
    ]
  },
  {
    enunciado: "¿Qué impacto generan presas río arriba sobre la costa?",
    correcta: "Déficit de sedimentos que favorece la erosión de playas y deltas",
    incorrectas: [
      "Aporte adicional de arenas a las playas",
      "Aumento del oleaje incidente"
    ]
  },
  {
    enunciado: "¿Qué actuación dura pero con efectos secundarios suele interrumpir el transporte litoral?",
    correcta: "Espigones y diques perpendiculares a la costa",
    incorrectas: [
      "Restauración de dunas con vegetación",
      "Retirada de construcciones en zona de servidumbre"
    ]
  },
  {
    enunciado: "¿Qué es una flecha litoral?",
    correcta: "Acumulación arenosa alargada formada por deriva litoral",
    incorrectas: [
      "Cordón morrénico frontal",
      "Barra de punta en un meandro"
    ]
  },
  {
    enunciado: "¿Qué variable aumenta la capacidad de transporte del río a escala instantánea?",
    correcta: "El incremento del caudal y de la pendiente del tramo",
    incorrectas: [
      "La disminución de la velocidad del flujo",
      "La reducción del esfuerzo cortante en el lecho"
    ]
  },
  {
    enunciado: "¿Qué depósito se asocia a la descarga glaciofluvial fuera del frente glaciar?",
    correcta: "Outwash (abanicos y llanuras de lavado)",
    incorrectas: [
      "Esker subglacial",
      "Tómbolo marino"
    ]
  },
  {
    enunciado: "¿Qué técnica de gestión ayuda a recuperar la dinámica natural del río en ciudades?",
    correcta: "Renaturalización de riberas y espacio de libertad fluvial",
    incorrectas: [
      "Canalización rígida en cajeros de hormigón",
      "Rectificación y encauzamiento permanente"
    ]
  },
  {
    enunciado: "¿Qué instrumento se usa para medir niveles piezométricos?",
    correcta: "Piezómetros/sondeos de observación",
    incorrectas: [
      "Marégrafos costeros",
      "Pluviómetros de balancín"
    ]
  },
  {
    enunciado: "¿Cuál es un impacto típico de la urbanización sobre playas?",
    correcta: "Ocupación de la duna y pérdida de alimentación eólica",
    incorrectas: [
      "Aumento natural del ancho de playa",
      "Generación espontánea de barras offshore"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a un delta dominado por oleaje?",
    correcta: "Brazos cortos y litoral suavizado por redistribución de sedimentos",
    incorrectas: [
      "Lenguas lobuladas largas sin retrabajo",
      "Islas barrera exclusivamente mareales"
    ]
  },
  {
    enunciado: "¿Qué proceso glacial arranca bloques en el lecho rocoso bajo el hielo?",
    correcta: "Plucking (arranque)",
    incorrectas: [
      "Deflación",
      "Karstificación"
    ]
  },
  {
    enunciado: "¿Qué método favorece la recarga gestionada de acuíferos (MAR)?",
    correcta: "Infiltración en balsas/zanjas y pozos con control de calidad",
    incorrectas: [
      "Bombeo continuo sin reposición",
      "Sellado de suelos con pavimentos impermeables"
    ]
  },
  {
    enunciado: "¿Qué parámetro es clave en la conductividad hidráulica de un acuífero granular?",
    correcta: "La distribución de tamaños y la conectividad de los poros",
    incorrectas: [
      "El color mineralógico del sedimento",
      "El contenido de fósiles macrofaunísticos"
    ]
  },
  {
    enunciado: "¿Qué medida basada en la naturaleza protege costas arenosas frente a temporales?",
    correcta: "Restauración de dunas y vegetación psamófila",
    incorrectas: [
      "Retirada de la vegetación dunar",
      "Construcción de escolleras en toda la playa"
    ]
  },
  {
    enunciado: "¿Qué registro indica una interacción río–acuífero efluente?",
    correcta: "Aporte de base al cauce en estiaje desde el acuífero",
    incorrectas: [
      "Pérdidas constantes del cauce al terreno en todo el año",
      "Caudal cero en estiaje por cierre del acuífero"
    ]
  },
  {
    enunciado: "¿Qué relación simple define Darcy para flujo laminar en medios porosos?",
    correcta: "Q = K · i · A",
    incorrectas: [
      "Q = ρ · g · h",
      "Q = C_d · A · v^2"
    ]
  }
];
