// temarios/68-rocas-y-minerales-del-relieve-espanol-propiedades-e-importancia-economica.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué estudia la Geología de forma general?",
    correcta: "La formación, composición, estructura y dinámica de la Tierra y los procesos que la modifican",
    incorrectas: [
      "El movimiento de los cuerpos celestes fuera de la Tierra sin atender a su composición",
      "La clasificación de seres vivos según parentesco evolutivo"
    ]
  },
  {
    enunciado: "¿Qué expresa el ciclo de las rocas?",
    correcta: "La transformación continua entre rocas ígneas, sedimentarias y metamórficas por procesos internos y externos",
    incorrectas: [
      "La conversión irreversible de cualquier roca en magma sin posibilidad de retorno",
      "La formación exclusiva de rocas sedimentarias a partir de rocas sedimentarias"
    ]
  },
  {
    enunciado: "¿Qué proceso convierte sedimentos sueltos en roca sedimentaria?",
    correcta: "La diagénesis, que incluye compactación y cementación",
    incorrectas: [
      "La fusión completa a altas temperaturas para generar magma",
      "La evaporación del agua subterránea para producir basalto"
    ]
  },
  {
    enunciado: "¿Qué evento orogénico dio lugar a gran parte del zócalo paleozoico de la Meseta?",
    correcta: "La orogenia hercínica o varisca",
    incorrectas: [
      "La orogenia alpina del Terciario",
      "La apertura del Atlántico en el Jurásico medio"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al núcleo antiguo de la Meseta en muchas zonas?",
    correcta: "La presencia de rocas plutónicas y metamórficas paleozoicas como granitos, gneises y esquistos",
    incorrectas: [
      "El predominio de basaltos recientes y piroclastos de edad miocena",
      "La existencia exclusiva de rocas evaporíticas horizontales"
    ]
  },
  {
    enunciado: "¿Qué tipo de relieve produce con frecuencia la disolución de calizas por aguas con CO₂?",
    correcta: "Un relieve kárstico con dolinas, lapiaces y cuevas",
    incorrectas: [
      "Un relieve dunar originado por el viento en desiertos",
      "Un relieve de columnas basálticas por contracción térmica"
    ]
  },
  {
    enunciado: "¿Qué forma del relieve es típica de la erosión fluvial en cuencas con levantamientos y encajamiento?",
    correcta: "La formación de valles encajados y terrazas fluviales",
    incorrectas: [
      "La formación de morrenas laterales y circos glaciares",
      "La formación de rocas aborregadas por abrasión glaciar"
    ]
  },
  {
    enunciado: "¿Qué distingue a una roca ígnea plutónica?",
    correcta: "Se enfría lentamente en profundidad y presenta cristales visibles de tamaño medio o grande",
    incorrectas: [
      "Se deposita por precipitación química en un lago salino",
      "Se forma por compactación de arcillas en un delta"
    ]
  },
  {
    enunciado: "¿Qué ejemplo es una roca ígnea plutónica frecuente en España y usada como piedra de construcción?",
    correcta: "El granito",
    incorrectas: [
      "El yeso",
      "La marga"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a una roca volcánica frente a una plutónica?",
    correcta: "Se enfría rápidamente en superficie y suele tener textura de grano fino o vítrea",
    incorrectas: [
      "Se forma exclusivamente por recristalización en estado sólido bajo presión",
      "Se origina por cementación de clastos en un río"
    ]
  },
  {
    enunciado: "¿Qué tipo de roca es el basalto y dónde es especialmente característico en España?",
    correcta: "Es una roca volcánica básica muy común en Canarias",
    incorrectas: [
      "Es una roca sedimentaria carbonatada típica de las cuencas del Ebro",
      "Es una roca metamórfica de alto grado típica de las zonas axiales de Pirineos"
    ]
  },
  {
    enunciado: "¿Qué son las rocas piroclásticas?",
    correcta: "Materiales volcánicos fragmentarios como cenizas, lapilli y bombas que se depositan y pueden litificarse",
    incorrectas: [
      "Rocas formadas por precipitación de carbonato cálcico en cuevas",
      "Rocas formadas por metamorfismo de arcillas sin aporte térmico"
    ]
  },
  {
    enunciado: "¿Qué se entiende por roca filoniana?",
    correcta: "Una roca ígnea que cristaliza en diques o filones, con enfriamiento intermedio y texturas porfídicas",
    incorrectas: [
      "Una roca sedimentaria formada en playas por acumulación de arenas",
      "Una roca metamórfica generada por presión dirigida en zonas de subducción"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a una pegmatita?",
    correcta: "Una roca ígnea de cristales muy grandes asociada a fases finales de magmas y a minerales raros",
    incorrectas: [
      "Una roca volcánica vítrea sin cristales visibles",
      "Una roca sedimentaria carbonosa rica en materia orgánica"
    ]
  },
  {
    enunciado: "¿Qué tipo de yacimientos se asocian con frecuencia a fluidos hidrotermales?",
    correcta: "Mineralizaciones como sulfuros metálicos depositados por soluciones calientes en fracturas",
    incorrectas: [
      "Acumulaciones de halita formadas por compactación de arenas",
      "Depósitos de carbón formados por enfriamiento de magma en profundidad"
    ]
  },
  {
    enunciado: "¿Qué define a una roca metamórfica?",
    correcta: "Una roca transformada en estado sólido por presión, temperatura y fluidos, con recristalización",
    incorrectas: [
      "Una roca formada por solidificación directa de magma en superficie",
      "Una roca formada por cementación de sedimentos en un ambiente marino somero"
    ]
  },
  {
    enunciado: "¿Qué roca metamórfica de bajo grado procede a menudo de lutitas y se usa como material de cubiertas?",
    correcta: "La pizarra",
    incorrectas: [
      "El gabro",
      "La arenisca"
    ]
  },
  {
    enunciado: "¿Qué diferencia esencial existe entre mármol y caliza, si ambos proceden de carbonatos?",
    correcta: "El mármol es una caliza recristalizada por metamorfismo, con textura cristalina",
    incorrectas: [
      "El mármol es una caliza no consolidada y la caliza es siempre volcánica",
      "El mármol es un silicato y la caliza un sulfato hidratado"
    ]
  },
  {
    enunciado: "¿Qué es una cuarcita?",
    correcta: "Una roca metamórfica muy dura que procede del metamorfismo de areniscas cuarzosas",
    incorrectas: [
      "Una roca sedimentaria evaporítica rica en sulfatos",
      "Una roca ígnea ultrabásica rica en olivino"
    ]
  },
  {
    enunciado: "¿Qué define a una roca sedimentaria detrítica?",
    correcta: "Se forma por acumulación, transporte y cementación de fragmentos de otras rocas",
    incorrectas: [
      "Se forma por cristalización lenta de un magma en profundidad",
      "Se forma por metamorfismo regional de alto grado"
    ]
  },
  {
    enunciado: "¿Qué diferencia principal hay entre brecha y conglomerado?",
    correcta: "La brecha tiene clastos angulosos y el conglomerado clastos redondeados",
    incorrectas: [
      "La brecha es siempre metamórfica y el conglomerado siempre ígneo",
      "La brecha es un carbonato y el conglomerado un sulfato"
    ]
  },
  {
    enunciado: "¿Qué es una evaporita?",
    correcta: "Una roca sedimentaria formada por precipitación de sales al evaporarse aguas salinas",
    incorrectas: [
      "Una roca ígnea formada por solidificación de lava",
      "Una roca metamórfica producida por presión en fallas"
    ]
  },
  {
    enunciado: "¿Qué mineral es el componente principal del yeso?",
    correcta: "El sulfato cálcico hidratado (CaSO₄·2H₂O)",
    incorrectas: [
      "El carbonato cálcico (CaCO₃)",
      "El cloruro sódico (NaCl)"
    ]
  },
  {
    enunciado: "¿Qué material se usa como base del cemento Portland y se asocia a rocas carbonatadas?",
    correcta: "Calizas y margas que aportan carbonatos para formar clinker",
    incorrectas: [
      "Areniscas ricas en cuarzo para formar vidrio",
      "Basaltos ricos en hierro para formar acero"
    ]
  },
  {
    enunciado: "¿Qué proceso químico es típico en la meteorización de feldespatos que conduce a arcillas como caolín?",
    correcta: "La hidrólisis, que transforma silicatos en minerales arcillosos",
    incorrectas: [
      "La oxidación del oxígeno atmosférico en nitrógeno",
      "La polimerización de carbonatos en solución"
    ]
  },
  {
    enunciado: "¿Qué reacción describe mejor la carbonatación de calizas?",
    correcta: "El CaCO₃ se disuelve en agua con CO₂ formando bicarbonato cálcico en disolución",
    incorrectas: [
      "El CaCO₃ se oxida a CaO y libera cloro",
      "El CaCO₃ se polimeriza formando cadenas de carbonato"
    ]
  },
  {
    enunciado: "¿Qué es la gelifracción?",
    correcta: "La fragmentación mecánica por expansión del agua al congelarse en grietas de la roca",
    incorrectas: [
      "La transformación de caliza en mármol por presión",
      "La deposición de sales por evaporación en un lago"
    ]
  },
  {
    enunciado: "¿Qué forma glaciar es típica de alta montaña y se asocia a excavación por hielo?",
    correcta: "El circo glaciar",
    incorrectas: [
      "El delta fluvial",
      "La duna barján"
    ]
  },
  {
    enunciado: "¿Qué son las morrenas?",
    correcta: "Acumulaciones de sedimentos transportados y depositados por un glaciar",
    incorrectas: [
      "Crestas rocosas formadas por disolución kárstica",
      "Abanicos aluviales generados solo por el viento"
    ]
  },
  {
    enunciado: "¿Qué rasgo geomorfológico es característico de los ríos en llanuras con baja pendiente?",
    correcta: "La formación de meandros por erosión lateral y sedimentación",
    incorrectas: [
      "La formación de columnas prismáticas por contracción de lava",
      "La formación de dunas por saltación en desiertos"
    ]
  },
  {
    enunciado: "¿Qué controla la morfología litológica del relieve?",
    correcta: "La diferente resistencia de las rocas a la meteorización y la erosión",
    incorrectas: [
      "El campo magnético terrestre medido en superficie",
      "La composición del aire y la presión atmosférica exclusivamente"
    ]
  },
  {
    enunciado: "¿Qué define la morfología estructural del relieve?",
    correcta: "La influencia de pliegues, fallas y disposición de estratos en la forma del paisaje",
    incorrectas: [
      "La presencia de minerales raros en pegmatitas",
      "La cantidad de materia orgánica del horizonte A del suelo"
    ]
  },
  {
    enunciado: "¿Qué se entiende por depresión sedimentaria en el contexto del relieve español?",
    correcta: "Una fosa rellena por sedimentos donde predominan materiales detríticos y evaporíticos con estratos subhorizontales",
    incorrectas: [
      "Un macizo granítico paleozoico levantado por orogenia hercínica",
      "Una dorsal volcánica oceánica emergida en el interior peninsular"
    ]
  },
  {
    enunciado: "¿Qué rasgo geológico caracteriza de forma general al archipiélago canario?",
    correcta: "El predominio de materiales volcánicos como basaltos y piroclastos asociados a edificaciones volcánicas",
    incorrectas: [
      "El predominio de calizas jurásicas plegadas por la orogenia alpina",
      "El predominio de gneises paleozoicos del zócalo hercínico"
    ]
  },
  {
    enunciado: "¿Qué tipo de roca se asocia a la zona axial de grandes cordilleras con materiales antiguos?",
    correcta: "Rocas metamórficas y graníticas asociadas a núcleos elevados",
    incorrectas: [
      "Evaporitas horizontales recién depositadas",
      "Arcillas no consolidadas de llanura aluvial como únicas rocas"
    ]
  },
  {
    enunciado: "¿Qué propiedad explica el uso del granito en construcción y ornamentación?",
    correcta: "Su dureza, resistencia y baja porosidad, que le confieren gran durabilidad",
    incorrectas: [
      "Su alta solubilidad en agua con CO₂, que facilita su talla química",
      "Su plasticidad al humedecerse, que permite moldearlo como arcilla"
    ]
  },
  {
    enunciado: "¿Qué propiedad hace valiosas a las arcillas y al caolín en cerámica?",
    correcta: "Su plasticidad con agua y su capacidad de cocer formando materiales resistentes",
    incorrectas: [
      "Su alta conductividad eléctrica metálica",
      "Su tendencia a sublimar a temperatura ambiente"
    ]
  },
  {
    enunciado: "¿Qué característica define a un mineral desde el punto de vista geológico?",
    correcta: "Un sólido natural, inorgánico, con composición química definida y estructura cristalina",
    incorrectas: [
      "Un líquido natural con composición variable y sin orden interno",
      "Un sólido artificial obtenido solo en laboratorio y sin red cristalina"
    ]
  },
  {
    enunciado: "¿Qué criterio básico se usa para distinguir rocas de minerales?",
    correcta: "La roca es un agregado de uno o varios minerales y el mineral es una especie cristalina definida",
    incorrectas: [
      "La roca siempre es un elemento químico puro y el mineral siempre una mezcla",
      "La roca siempre es orgánica y el mineral siempre biológico"
    ]
  },
  {
    enunciado: "¿Qué es el suelo en términos edafológicos?",
    correcta: "Un sistema natural superficial con minerales, materia orgánica, agua y aire organizado en horizontes",
    incorrectas: [
      "Una roca ígnea fundida que asciende por chimeneas volcánicas",
      "Un conjunto de gases atmosféricos atrapados en cavidades"
    ]
  }
];
