// temarios/06-los-ambientes-sedimentarios-litogenesis-las-rocas-sedimentarias-mas-importantes.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué es un sedimento en geología?",
    correcta: "Material sólido acumulado por procesos de meteorización, transporte y depósito",
    incorrectas: [
      "Una roca metamórfica formada por recristalización profunda",
      "Un magma parcialmente cristalizado en una cámara ígnea"
    ]
  },
  {
    enunciado: "¿Qué define a una roca sedimentaria frente a un sedimento suelto?",
    correcta: "La consolidación por procesos de litogénesis como compactación y cementación",
    incorrectas: [
      "La presencia exclusiva de minerales silicatados",
      "La ausencia total de porosidad intergranular"
    ]
  },
  {
    enunciado: "¿Qué papel tienen las rocas sedimentarias en la reconstrucción de la historia geológica?",
    correcta: "Registran ambientes pasados mediante estratos, estructuras y fósiles",
    incorrectas: [
      "Anulan cualquier evidencia de cambios ambientales",
      "Solo informan sobre procesos magmáticos profundos"
    ]
  },
  {
    enunciado: "¿Qué es un ambiente sedimentario?",
    correcta: "Un sistema físico-químico y biológico donde se depositan sedimentos",
    incorrectas: [
      "Una zona de fusión parcial del manto terrestre",
      "Un tipo de falla asociada a compresión orogénica"
    ]
  },
  {
    enunciado: "¿Cuál de los siguientes es un ambiente sedimentario continental?",
    correcta: "Sistema fluvial con canales y llanura de inundación",
    incorrectas: [
      "Talud continental con corrientes de turbidez",
      "Arrecife coralino en plataforma externa"
    ]
  },
  {
    enunciado: "¿Cuál de los siguientes corresponde a un ambiente marino somero?",
    correcta: "Playa arenosa con barras litorales",
    incorrectas: [
      "Cuenca abisal con fangos pelágicos",
      "Morrena frontal en un glaciar de valle"
    ]
  },
  {
    enunciado: "¿Qué proceso domina el transporte de sedimentos en desiertos eólicos?",
    correcta: "La saltación y la suspensión por el viento",
    incorrectas: [
      "La flotación selectiva en agua de mar",
      "El arrastre basal por hielo a alta presión"
    ]
  },
  {
    enunciado: "¿Qué estructura sedimentaria es típica de ambientes de corriente unidireccional?",
    correcta: "Estratificación cruzada en artesas y planar",
    incorrectas: [
      "Textura porfídica con fenocristales",
      "Bandeado gneísico milonítico"
    ]
  },
  {
    enunciado: "¿Cómo influye la energía del medio en el tamaño de grano depositado?",
    correcta: "Ambientes de alta energía depositan gravas y arenas gruesas",
    incorrectas: [
      "Ambientes de alta energía favorecen los lodos finos",
      "La energía no guarda relación con el tamaño de grano"
    ]
  },
  {
    enunciado: "¿Qué es la litogénesis en rocas sedimentarias?",
    correcta: "La transformación del sedimento en roca por compactación y cementación",
    incorrectas: [
      "La fusión parcial del sedimento para formar granito",
      "La desgasificación del magma en superficie"
    ]
  },
  {
    enunciado: "¿Qué efecto produce la compactación en un sedimento arcilloso?",
    correcta: "Disminuye la porosidad al acercar los granos por carga",
    incorrectas: [
      "Aumenta la porosidad al crear nuevos huecos",
      "Disuelve completamente los minerales detríticos"
    ]
  },
  {
    enunciado: "¿Cuál es un cemento común en areniscas?",
    correcta: "Calcita precipitada en el espacio poroso",
    incorrectas: [
      "Plagioclasa ígnea zonada",
      "Olivino rico en magnesio"
    ]
  },
  {
    enunciado: "¿Qué proceso diagenético transforma aragonito en calcita más estable?",
    correcta: "Recristalización durante la diagénesis",
    incorrectas: [
      "Metamorfismo de alto grado",
      "Hidrólisis a temperaturas magmáticas"
    ]
  },
  {
    enunciado: "¿Cómo se clasifican las rocas sedimentarias según su origen?",
    correcta: "Detríticas, químicas, bioquímicas/biogénicas y orgánicas",
    incorrectas: [
      "Intrusivas, extrusivas y vulcanoclásticas",
      "Ultramáficas, félsicas y alcalinas"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a una roca detrítica o clástica?",
    correcta: "Está formada por fragmentos de rocas y minerales preexistentes",
    incorrectas: [
      "Se forma por cristalización directa de un magma",
      "Procede de recristalización sólida sin transporte previo"
    ]
  },
  {
    enunciado: "¿Cuál es un ejemplo típico de roca detrítica fina?",
    correcta: "Lutita con proporción elevada de arcillas",
    incorrectas: [
      "Gabro con plagioclasas cálcicas",
      "Mármol de grano sacaroide"
    ]
  },
  {
    enunciado: "¿Qué diferencia principal existe entre conglomerado y brecha?",
    correcta: "El conglomerado tiene clastos redondeados y la brecha angulosos",
    incorrectas: [
      "El conglomerado es siempre volcánico y la brecha siempre metamórfica",
      "La brecha es más porosa por definición que el conglomerado"
    ]
  },
  {
    enunciado: "¿Qué arenisca se denomina arcosa?",
    correcta: "Una arenisca con alto contenido en feldespatos potásicos",
    incorrectas: [
      "Una arenisca compuesta casi exclusivamente por cuarzo",
      "Una arenisca cementada solo por óxidos de hierro"
    ]
  },
  {
    enunciado: "¿Cuál es un ejemplo de roca sedimentaria química evaporítica?",
    correcta: "Halita precipitada por evaporación",
    incorrectas: [
      "Basalto almohadillado submarino",
      "Granodiorita de grano medio"
    ]
  },
  {
    enunciado: "¿Qué es una caliza arrecifal?",
    correcta: "Una roca carbonatada construida por organismos constructores como corales",
    incorrectas: [
      "Una caliza formada exclusivamente por precipitación abiótica en lagos",
      "Una caliza metamorfizada a altas presiones"
    ]
  },
  {
    enunciado: "¿Qué roca silícea biogénica se origina por acumulación de diatomeas?",
    correcta: "Diatomita con alta porosidad",
    incorrectas: [
      "Peridotita rica en olivino",
      "Anhidrita masiva"
    ]
  },
  {
    enunciado: "¿Cuál es la secuencia típica de maduración del carbón?",
    correcta: "Turba, lignito, hulla, antracita",
    incorrectas: [
      "Hulla, antracita, turba, lignito",
      "Turba, hulla, anhidrita, antracita"
    ]
  },
  {
    enunciado: "¿Qué facies se asocia con deltas progradantes?",
    correcta: "Intercalación de arenas canalizadas y lutitas de llanura deltaica",
    incorrectas: [
      "Gneises bandeados con granate",
      "Peridotitas serpentinizadas de manto"
    ]
  },
  {
    enunciado: "¿Qué depósitos generan las corrientes de turbidez en taludes?",
    correcta: "Secuencias granocrecientes inversas a normales tipo Bouma",
    incorrectas: [
      "Flujos laminares con cristales euhedrales de plagioclasa",
      "Estratos masivos de carbón sin laminación"
    ]
  },
  {
    enunciado: "¿Qué ambiente favorece la formación de varvas?",
    correcta: "Lagos glaciares con laminación estacional",
    incorrectas: [
      "Arrecifes coralinos de alta energía",
      "Campos dunares eólicos costeros"
    ]
  },
  {
    enunciado: "¿Cómo afecta la bioturbación a las estructuras sedimentarias?",
    correcta: "Remueve y borra laminaciones por actividad de organismos",
    incorrectas: [
      "Genera automáticamente estratificación cruzada de gran escala",
      "Induce foliación metamórfica a alta temperatura"
    ]
  },
  {
    enunciado: "¿Qué relación guardan porosidad y permeabilidad en acuíferos sedimentarios?",
    correcta: "Alta porosidad y conectividad de poros aumentan la permeabilidad efectiva",
    incorrectas: [
      "La permeabilidad no depende de la conectividad de poros",
      "La permeabilidad siempre disminuye con el tamaño de grano"
    ]
  },
  {
    enunciado: "¿Qué roca suele actuar como sello en sistemas petrolíferos?",
    correcta: "Arcilla o lutita de muy baja permeabilidad",
    incorrectas: [
      "Arenisca bien seleccionada de alta porosidad",
      "Caliza arrecifal muy fracturada"
    ]
  },
  {
    enunciado: "¿Qué es una roca madre de hidrocarburos?",
    correcta: "Una roca rica en materia orgánica que genera petróleo o gas al madurar",
    incorrectas: [
      "Una roca porosa que almacena hidrocarburos migrados",
      "Un nivel impermeable que impide el escape del gas"
    ]
  },
  {
    enunciado: "¿Qué parámetro granulométrico indica el grado de selección del sedimento?",
    correcta: "La desviación estándar de la distribución de tamaños",
    incorrectas: [
      "La densidad mineralógica de los clastos",
      "La reflectancia de la materia orgánica"
    ]
  },
  {
    enunciado: "¿Qué estructura se forma por desecación en medios lodosos?",
    correcta: "Grietas de desecación poligonales",
    incorrectas: [
      "Pillow lavas con corteza vítrea",
      "Bandas de cizalla miloníticas"
    ]
  },
  {
    enunciado: "¿Qué indicador sugiere paleocorrientes en una arenisca?",
    correcta: "La inclinación de la estratificación cruzada",
    incorrectas: [
      "La orientación de fenocristales de feldespato",
      "La presencia de porfiroblastos de granate"
    ]
  },
  {
    enunciado: "¿Qué ambiente es típico para ooides carbonatados?",
    correcta: "Aguas someras cálidas y agitadas de plataforma interna",
    incorrectas: [
      "Cuencas abisales frías y profundas",
      "Lagos glaciares estacionales"
    ]
  },
  {
    enunciado: "¿Qué proceso diagenético reduce la porosidad en areniscas además de la compactación?",
    correcta: "La cementación por sílice o carbonato en el espacio poroso",
    incorrectas: [
      "La disolución completa de los cementos",
      "La sustitución total por olivino"
    ]
  },
  {
    enunciado: "¿Qué diferencia a una caliza micrítica de una esparítica?",
    correcta: "La micrita tiene matriz de calcita microcristalina y la esparita cementos de calcita más gruesa",
    incorrectas: [
      "La micrita contiene siempre cuarzo y la esparita feldespatos",
      "La esparita es exclusivamente de origen metamórfico"
    ]
  },
  {
    enunciado: "¿Qué roca evaporítica se forma antes a medida que aumenta la salinidad?",
    correcta: "Yeso, seguido por halita con mayor evaporación",
    incorrectas: [
      "Halita primero y luego yeso al concentrarse el soluto",
      "Anhidrita primero en aguas muy diluidas"
    ]
  },
  {
    enunciado: "¿Qué rasgo identifica depósitos de playa de alta energía?",
    correcta: "Arenas bien seleccionadas y estratificación paralela de bajo ángulo",
    incorrectas: [
      "Lodos negros con laminación anóxica permanente",
      "Diamictitas con clastos flotantes en matriz limosa"
    ]
  },
  {
    enunciado: "¿Qué señal estratigráfica refleja una transgresión marina?",
    correcta: "Superposición vertical de facies de mar más profundo sobre facies someras",
    incorrectas: [
      "Paso vertical de lutitas marinas a conglomerados fluviales",
      "Aparición de morrenas glaciares sobre calizas arrecifales"
    ]
  },
  {
    enunciado: "¿Qué aplicación económica es típica de las areniscas porosas?",
    correcta: "Reservorios de agua y de hidrocarburos",
    incorrectas: [
      "Rocas sello impermeables en cualquier caso",
      "Rocas madre ricas en querógeno tipo II"
    ]
  },
  {
    enunciado: "¿Qué impacto ambiental puede asociarse a la sobreexplotación de canteras de caliza?",
    correcta: "Alteración del relieve, polvo en suspensión y afección a acuíferos kársticos",
    incorrectas: [
      "Aumento del ozono estratosférico regional",
      "Descenso brusco del nivel del mar"
    ]
  }
];
