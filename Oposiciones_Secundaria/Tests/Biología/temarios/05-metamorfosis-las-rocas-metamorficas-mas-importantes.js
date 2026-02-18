// temarios/05-metamorfosis-las-rocas-metamorficas-mas-importantes.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué define mejor el metamorfismo en geología?",
    correcta: "Transformaciones mineralógicas y texturales en estado sólido por cambios de P–T–fluidos",
    incorrectas: [
      "Fusión total de la roca y cristalización posterior",
      "Compactación y cementación a muy baja temperatura (diagénesis)"
    ]
  },
  {
    enunciado: "¿Cuál NO es un factor principal del metamorfismo?",
    correcta: "Radiación solar directa en superficie",
    incorrectas: [
      "Temperatura",
      "Presión y fluidos reactivos"
    ]
  },
  {
    enunciado: "¿Qué diferencia a la diagénesis del metamorfismo?",
    correcta: "La diagénesis opera a menores temperaturas y presiones",
    incorrectas: [
      "La diagénesis implica fusión parcial generalizada",
      "La diagénesis requiere altas presiones dirigidas"
    ]
  },
  {
    enunciado: "¿Qué término describe el comienzo de la fusión parcial en rocas metamórficas?",
    correcta: "Anatexia (formación de migmatitas)",
    incorrectas: [
      "Cataclasis",
      "Serpentinización"
    ]
  },
  {
    enunciado: "En el metamorfismo de contacto, el rasgo típico es:",
    correcta: "Una aureola térmica alrededor de una intrusión ígnea",
    incorrectas: [
      "Amplias bandas regionales de foliación",
      "Presiones dirigidas muy altas sin aporte térmico"
    ]
  },
  {
    enunciado: "El metamorfismo regional suele estar asociado a:",
    correcta: "Orogenias con aumentos de presión y temperatura en amplias áreas",
    incorrectas: [
      "Pequeñas intrusiones superficiales locales",
      "Impactos meteoríticos aislados"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al metamorfismo dinámico o cataclástico?",
    correcta: "Deformación intensa y trituración en zonas de falla",
    incorrectas: [
      "Recristalización estática sin deformación",
      "Formación exclusiva de mármoles"
    ]
  },
  {
    enunciado: "¿Cuál de estos es un ejemplo de metamorfismo por choque (impacto)?",
    correcta: "Formación de coesita o stishovita",
    incorrectas: [
      "Crecimiento de micas en pizarras",
      "Serpentinización de peridotitas"
    ]
  },
  {
    enunciado: "La presión dirigida favorece especialmente:",
    correcta: "La formación de foliación y esquistosidad",
    incorrectas: [
      "La desaparición de toda anisotropía",
      "La disolución completa de los silicatos"
    ]
  },
  {
    enunciado: "¿Qué fluido es especialmente eficaz para acelerar reacciones metamórficas?",
    correcta: "Agua (H2O) con especies disueltas",
    incorrectas: [
      "Nitrógeno molecular (N2) seco",
      "Ozono (O3) estratosférico"
    ]
  },
  {
    enunciado: "¿Cuál es la secuencia típica de rocas foliadas con el aumento de grado metamórfico?",
    correcta: "Pizarra → filita → esquisto → gneis",
    incorrectas: [
      "Gneis → esquisto → filita → pizarra",
      "Pizarra → esquisto → filita → gneis"
    ]
  },
  {
    enunciado: "Una roca metamórfica no foliada derivada de caliza es:",
    correcta: "Mármol",
    incorrectas: [
      "Cuarcita",
      "Anfibolita"
    ]
  },
  {
    enunciado: "La cuarcita se origina por metamorfismo de:",
    correcta: "Areniscas cuarzosas",
    incorrectas: [
      "Calizas micríticas",
      "Arcillas ricas en illita"
    ]
  },
  {
    enunciado: "¿Cuál es una roca típica de alto grado con bandeado composicional?",
    correcta: "Gneis",
    incorrectas: [
      "Pizarra",
      "Toba"
    ]
  },
  {
    enunciado: "Las anfibolitas suelen derivar de:",
    correcta: "Basaltos o gabros metamorfizados",
    incorrectas: [
      "Areniscas feldespáticas",
      "Evaporitas"
    ]
  },
  {
    enunciado: "¿Qué par de minerales define la eclogita de alta presión?",
    correcta: "Granate (piropo–almandino) y omfacita",
    incorrectas: [
      "Cuarzo y feldespato potásico",
      "Moscovita y clorita"
    ]
  },
  {
    enunciado: "¿Qué minerales índice son característicos del metamorfismo Barroviano de grado creciente?",
    correcta: "Clorita → biotita → granate → estaurolita → cianita → sillimanita",
    incorrectas: [
      "Olivino → piroxeno → plagioclasa → cuarzo",
      "Calcedonia → aragonito → halita → yeso"
    ]
  },
  {
    enunciado: "El metamorfismo de facies esquistos verdes corresponde a:",
    correcta: "Bajo a medio grado con clorita, actinolita y albita",
    incorrectas: [
      "Muy alto grado con ortopiroxeno y feldespatos (granulitas)",
      "Alta presión con glaucófana (esquistos azules)"
    ]
  },
  {
    enunciado: "¿Qué facies se asocia a alta P y baja T típica de zonas de subducción?",
    correcta: "Esquistos azules",
    incorrectas: [
      "Zeolitas",
      "Granulitas"
    ]
  },
  {
    enunciado: "Las granulitas representan:",
    correcta: "Alto grado metamórfico con ortopiroxeno y plagioclasa",
    incorrectas: [
      "Bajo grado con zeolitas",
      "Metamorfismo hidrotermal de baja T"
    ]
  },
  {
    enunciado: "¿Qué término describe cristales grandes que crecen durante el metamorfismo en una matriz más fina?",
    correcta: "Porfiroblastos",
    incorrectas: [
      "Fenocristales",
      "Xenolitos"
    ]
  },
  {
    enunciado: "Una textura de pizarrosidad bien desarrollada se observa típicamente en:",
    correcta: "Pizarras de bajo grado",
    incorrectas: [
      "Gneises de alto grado",
      "Migmatitas con fundido"
    ]
  },
  {
    enunciado: "La esquistosidad se asocia a:",
    correcta: "Alineación de micas y minerales laminares en grado medio",
    incorrectas: [
      "Disposición caótica de granos equidimensionales",
      "Exclusivamente a metamorfismo de contacto"
    ]
  },
  {
    enunciado: "El bandeado gneísico refleja:",
    correcta: "Segregación composicional en capas félsicas y máficas",
    incorrectas: [
      "Disolución total de cuarzo y feldespato",
      "Alineación exclusiva de cloritas"
    ]
  },
  {
    enunciado: "Una roca dura y compacta de aureola de contacto, rica en granoblásticos, es:",
    correcta: "Cornubianita (hornfels)",
    incorrectas: [
      "Esquisto clorítico",
      "Serpentinita"
    ]
  },
  {
    enunciado: "¿Qué proceso implica intercambio químico por fluidos durante el metamorfismo?",
    correcta: "Metasomatismo",
    incorrectas: [
      "Cataclasis",
      "Anatexia"
    ]
  },
  {
    enunciado: "¿Cuál es una roca de falla con fuerte reducción del tamaño de grano por cizalla dúctil?",
    correcta: "Milonita",
    incorrectas: [
      "Conglomerado",
      "Ignimbrita"
    ]
  },
  {
    enunciado: "La cataclasita es una roca que se forma por:",
    correcta: "Trituración frágil en zonas de falla a baja T",
    incorrectas: [
      "Recristalización estática a alta T",
      "Fusión completa del protolito"
    ]
  },
  {
    enunciado: "¿Qué define una trayectoria P–T–t metamórfica?",
    correcta: "Evolución de presión, temperatura y tiempo de una roca durante el metamorfismo",
    incorrectas: [
      "Variación del campo magnético terrestre",
      "Ciclo anual de precipitaciones"
    ]
  },
  {
    enunciado: "El metamorfismo retrógrado implica:",
    correcta: "Reacciones de vuelta a menor P–T, a menudo con hidratación",
    incorrectas: [
      "Incremento continuo de temperatura y presión",
      "Exclusivamente deshidratación"
    ]
  },
  {
    enunciado: "¿Cuál de los siguientes pares roca–protolito es correcto?",
    correcta: "Mármol ← caliza/dolomía",
    incorrectas: [
      "Cuarcita ← lutita",
      "Anfibolita ← caliza"
    ]
  },
  {
    enunciado: "¿Qué mineral polimorfo del Al es estable a alta presión?",
    correcta: "Cianita (distena)",
    incorrectas: [
      "Sillimanita",
      "Andalucita"
    ]
  },
  {
    enunciado: "Las migmatitas se caracterizan por:",
    correcta: "Mezcla de porciones metamórficas y neosomas fundidos (bandas claras y oscuras)",
    incorrectas: [
      "Textura vítrea homogénea",
      "Ausencia de feldespatos y cuarzo"
    ]
  },
  {
    enunciado: "¿Qué técnica permite estimar condiciones P–T de equilibrio mineral?",
    correcta: "Geotermobarometría (por ejemplo, GASP)",
    incorrectas: [
      "Gravimetría satelital",
      "Magnetometría de prospección"
    ]
  },
  {
    enunciado: "Un conjunto mineral típico de facies de anfibolitas incluye:",
    correcta: "Hornblenda + plagioclasa (± granate)",
    incorrectas: [
      "Glaucófana + lawsonita",
      "Olivino forsterítico + clinopiroxeno cálcico a >1400 °C"
    ]
  },
  {
    enunciado: "En una aureola de contacto, ¿qué mineral aluminosilicático es común a baja presión?",
    correcta: "Andalucita",
    incorrectas: [
      "Cianita",
      "Coesita"
    ]
  },
  {
    enunciado: "¿Qué término describe el crecimiento de minerales perpendiculares a planos de cizalla durante deformación?",
    correcta: "Lineación mineral y crenulación asociada",
    incorrectas: [
      "Buceo magmático",
      "Remagnetización sintectónica"
    ]
  },
  {
    enunciado: "¿Cuál es el protolito más probable de un gneis granítico?",
    correcta: "Granito o sedimentos félsicos de alto grado",
    incorrectas: [
      "Evaporitas de halita pura",
      "Carbón bituminoso"
    ]
  },
  {
    enunciado: "¿Qué condición favorece foliación más marcada?",
    correcta: "Presión dirigida elevada con minerales laminares (micas)",
    incorrectas: [
      "Alta presión litostática isótropa sin micas",
      "Ambientes secos sin deformación"
    ]
  },
  {
    enunciado: "¿Por qué el tiempo geológico es clave en el metamorfismo?",
    correcta: "Permite que las reacciones alcancen equilibrio y crezcan porfiroblastos",
    incorrectas: [
      "Sustituye la necesidad de temperatura",
      "Evita toda recristalización"
    ]
  }
];
