// temarios/63-quimica-del-petroleo-productos-derivados-contaminacion-y-normativa.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué es el petróleo desde el punto de vista químico?",
    correcta: "Una mezcla compleja de hidrocarburos con proporciones variables y pequeñas cantidades de compuestos con azufre, nitrógeno, oxígeno y metales",
    incorrectas: [
      "Un compuesto puro formado exclusivamente por hexano y heptano",
      "Una disolución acuosa de sales minerales y gases atmosféricos"
    ]
  },
  {
    enunciado: "¿Qué familias de hidrocarburos suelen dominar en la composición del crudo?",
    correcta: "Alcanos, cicloalcanos y aromáticos, junto con fracciones pesadas como resinas y asfaltenos",
    incorrectas: [
      "Alcoholes, aldehídos y aminas como componentes mayoritarios",
      "Ésteres y ácidos carboxílicos como fracción principal"
    ]
  },
  {
    enunciado: "¿Qué significa que un crudo sea “dulce” (sweet)?",
    correcta: "Que tiene bajo contenido de azufre y requiere menos tratamiento de desulfuración",
    incorrectas: [
      "Que contiene un alto porcentaje de azúcares orgánicos naturales",
      "Que presenta un índice de octano elevado antes del refino"
    ]
  },
  {
    enunciado: "¿Qué parámetro se usa con frecuencia para clasificar un crudo por su “ligereza” o “pesadez”?",
    correcta: "La gravedad API, relacionada con la densidad del crudo",
    incorrectas: [
      "El número de cetano, propio de gasóleos ya formulados",
      "El punto de congelación, característico de disoluciones acuosas"
    ]
  },
  {
    enunciado: "¿Cuál es la finalidad principal de la destilación atmosférica en una refinería?",
    correcta: "Separar el crudo en fracciones según rangos de ebullición (gases, naftas, queroseno, gasóleos, residuo)",
    incorrectas: [
      "Romper químicamente las cadenas largas en moléculas pequeñas",
      "Eliminar el CO₂ disuelto mediante absorción con aminas"
    ]
  },
  {
    enunciado: "¿Por qué se realiza la destilación al vacío de los residuos pesados?",
    correcta: "Para separar fracciones pesadas a menor temperatura efectiva, evitando descomposición térmica",
    incorrectas: [
      "Para aumentar el octano de la gasolina por aromatización directa",
      "Para eliminar el nitrógeno del aire que acompaña al crudo"
    ]
  },
  {
    enunciado: "¿Qué describe el término “nafta” en el contexto del refino?",
    correcta: "Una fracción ligera intermedia, materia prima clave para petroquímica y para componentes de gasolina tras tratamiento",
    incorrectas: [
      "Un residuo sólido carbonoso equivalente al coque de refinería",
      "Un gas inerte obtenido por separación del argón atmosférico"
    ]
  },
  {
    enunciado: "¿Qué es el craqueo (cracking) en refino?",
    correcta: "La ruptura de hidrocarburos de cadenas largas en moléculas más cortas y valiosas (por ejemplo, para aumentar gasolina y olefinas)",
    incorrectas: [
      "La unión de moléculas pequeñas para formar ceras pesadas",
      "La disolución del crudo en agua para separar por densidad"
    ]
  },
  {
    enunciado: "¿Qué diferencia esencial suele tener el craqueo catalítico frente al térmico?",
    correcta: "Mayor selectividad y rendimiento hacia productos deseados gracias al catalizador",
    incorrectas: [
      "Opera siempre a temperaturas más bajas que la destilación",
      "No genera nunca gases ligeros ni olefinas"
    ]
  },
  {
    enunciado: "¿Qué es el FCC (Fluid Catalytic Cracking) en términos funcionales?",
    correcta: "Un proceso catalítico continuo que convierte gasóleos pesados en gasolina, gases y olefinas ligeras",
    incorrectas: [
      "Una unidad de separación de oxígeno y nitrógeno del aire",
      "Un reactor exclusivo para producir hidrógeno por electrólisis"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al hidrocraqueo respecto a otros craqueos?",
    correcta: "Se realiza en presencia de hidrógeno y ayuda a saturar y desulfurar, mejorando la calidad de destilados",
    incorrectas: [
      "Transforma alcoholes en aldehídos mediante oxidación suave",
      "Convierte CO₂ en metano por fermentación industrial"
    ]
  },
  {
    enunciado: "¿Cuál es el objetivo principal del reformado catalítico en la producción de gasolinas?",
    correcta: "Aumentar el índice de octano mediante isomerización, ciclación y aromatización de naftas",
    incorrectas: [
      "Aumentar el número de cetano del diésel por hidrogenación total",
      "Eliminar sales minerales del agua de refrigeración de la planta"
    ]
  },
  {
    enunciado: "¿Qué representa el índice de octano en una gasolina?",
    correcta: "La resistencia a la detonación (autoencendido) en motores de encendido por chispa",
    incorrectas: [
      "La facilidad de encendido por compresión en motores diésel",
      "La proporción de oxígeno disuelto en el combustible"
    ]
  },
  {
    enunciado: "¿Qué representa el número de cetano en un gasóleo?",
    correcta: "La facilidad de autoencendido por compresión, relacionada con la calidad de ignición del diésel",
    incorrectas: [
      "La resistencia a la detonación propia de gasolinas",
      "El porcentaje de etanol añadido al combustible final"
    ]
  },
  {
    enunciado: "¿Qué se entiende por “hidrotratamiento” (hydrotreating) en refino?",
    correcta: "Tratamientos con hidrógeno y catalizadores para eliminar azufre, nitrógeno y otras impurezas, mejorando estabilidad y emisiones",
    incorrectas: [
      "Un lavado con agua para aumentar el punto de inflamación de la gasolina",
      "Un proceso para producir polímeros por adición radicalaria"
    ]
  },
  {
    enunciado: "¿Qué problema ambiental se asocia de manera directa a la presencia de azufre en combustibles?",
    correcta: "La formación de SO₂ y sulfatos tras la combustión, contribuyendo a lluvia ácida y partículas finas",
    incorrectas: [
      "La producción de ozono estratosférico en exceso",
      "La conversión de nitrógeno atmosférico en amoníaco sin catalizador"
    ]
  },
  {
    enunciado: "¿Qué son los NOx en el contexto de emisiones de combustión?",
    correcta: "Óxidos de nitrógeno (principalmente NO y NO₂) formados a alta temperatura, implicados en smog y efectos respiratorios",
    incorrectas: [
      "Óxidos de sodio generados por sal común en el combustible",
      "Nitratos sólidos emitidos exclusivamente por combustibles eléctricos"
    ]
  },
  {
    enunciado: "¿Qué es el smog fotoquímico?",
    correcta: "Contaminación secundaria causada por reacciones de NOx y COV bajo radiación solar, con formación de ozono troposférico",
    incorrectas: [
      "La precipitación de sales marinas por evaporación en chimeneas",
      "Un fenómeno exclusivo de erupciones volcánicas sin participación humana"
    ]
  },
  {
    enunciado: "¿Qué son los COV (compuestos orgánicos volátiles) en relación con combustibles y atmósfera?",
    correcta: "Hidrocarburos y otros compuestos orgánicos que se evaporan fácilmente y contribuyen a ozono troposférico y smog",
    incorrectas: [
      "Sales minerales disueltas que solo se liberan por sublimación",
      "Gases nobles que no participan en reacciones atmosféricas"
    ]
  },
  {
    enunciado: "¿Qué se entiende por “marea negra”?",
    correcta: "Un vertido de petróleo o derivados que forma una capa superficial y contamina ecosistemas marinos y costeros",
    incorrectas: [
      "Un aumento natural de fitoplancton que oscurece el agua sin tóxicos",
      "Un depósito de carbón mineral en fondos oceánicos profundos"
    ]
  },
  {
    enunciado: "¿Qué efecto tiene el petróleo vertido sobre aves marinas de forma típica?",
    correcta: "Pierden impermeabilidad y capacidad térmica del plumaje, con riesgo elevado de hipotermia e inanición",
    incorrectas: [
      "Aumentan su flotabilidad y mejoran su aislamiento por recubrimiento oleoso",
      "Se vuelven inmunes a patógenos por acción antibiótica del crudo"
    ]
  },
  {
    enunciado: "¿Qué son los asfaltenos en términos generales?",
    correcta: "Fracción pesada y compleja del crudo, rica en estructuras aromáticas condensadas, responsable de alta viscosidad y problemas de procesado",
    incorrectas: [
      "Una familia de alcoholes ligeros presentes en la gasolina",
      "Un tipo de polímero sintético producido solo en laboratorio"
    ]
  },
  {
    enunciado: "¿Qué es la petroquímica de base?",
    correcta: "La producción de monómeros y materias primas fundamentales (etileno, propileno, butadieno y aromáticos BTX) a partir de fracciones del petróleo o gas",
    incorrectas: [
      "La producción exclusiva de alimentos y fármacos a partir de biomasa",
      "La obtención de metales puros por electrólisis de minerales"
    ]
  },
  {
    enunciado: "¿Qué proceso se asocia típicamente a la obtención de etileno y propileno a gran escala?",
    correcta: "El craqueo con vapor (steam cracking) de naftas o etano/propano",
    incorrectas: [
      "La fermentación alcohólica de glucosa",
      "La fotosíntesis artificial a temperatura ambiente"
    ]
  },
  {
    enunciado: "¿Qué significa BTX en petroquímica?",
    correcta: "Benceno, tolueno y xilenos, aromáticos clave como materias primas",
    incorrectas: [
      "Butano, titanio y xenón, mezcla típica de gases de refinería",
      "Boro, telurio y zinc, metaloides de alto valor energético"
    ]
  },
  {
    enunciado: "¿Cuál de los siguientes polímeros se obtiene típicamente a partir de etileno?",
    correcta: "Polietileno (PE) mediante polimerización por adición",
    incorrectas: [
      "Nailon 6,6 mediante condensación de aminoácidos",
      "Celulosa mediante polimerización de glucosa en plantas"
    ]
  },
  {
    enunciado: "¿Qué rasgo hace problemáticos a muchos plásticos desde el punto de vista ambiental?",
    correcta: "Su elevada persistencia y baja biodegradabilidad, con fragmentación progresiva en microplásticos",
    incorrectas: [
      "Su rápida mineralización natural en días por acción bacteriana universal",
      "Su completa solubilidad en agua, que permite depuración total espontánea"
    ]
  },
  {
    enunciado: "¿Qué se entiende por microplásticos?",
    correcta: "Fragmentos plásticos de tamaño muy pequeño que persisten, se dispersan y pueden incorporarse a cadenas tróficas",
    incorrectas: [
      "Nanopartículas metálicas producidas solo en reactores nucleares",
      "Cristales de sal marina procedentes de evaporación en salinas"
    ]
  },
  {
    enunciado: "¿Qué producto se asocia típicamente a la fracción “queroseno” tras refino y tratamiento?",
    correcta: "Combustible de aviación (jet fuel) y usos energéticos similares",
    incorrectas: [
      "Cemento hidráulico para construcción",
      "Oxígeno medicinal para hospitales"
    ]
  },
  {
    enunciado: "¿Qué se entiende por “aditivos” en combustibles?",
    correcta: "Sustancias añadidas en pequeña proporción para mejorar propiedades como estabilidad, limpieza, lubricidad o resistencia a corrosión",
    incorrectas: [
      "Sales metálicas mayoritarias que reemplazan al hidrocarburo base",
      "Agua añadida para aumentar el poder calorífico del combustible"
    ]
  },
  {
    enunciado: "¿Qué relación esencial existe entre combustión de combustibles fósiles y CO₂?",
    correcta: "La oxidación del carbono del combustible genera CO₂, principal gas de efecto invernadero antropogénico",
    incorrectas: [
      "La combustión consume CO₂ y libera carbono sólido como producto principal",
      "La combustión transforma CO₂ en oxígeno por reacciones espontáneas"
    ]
  },
  {
    enunciado: "¿Qué fenómeno se asocia a SOx y NOx en presencia de agua atmosférica?",
    correcta: "Formación de ácidos (como sulfúrico y nítrico) que contribuyen a lluvia ácida",
    incorrectas: [
      "Formación de etanol por hidratación directa",
      "Transformación de agua en hidrógeno y oxígeno por reacción exotérmica"
    ]
  },
  {
    enunciado: "¿Qué impacto puede tener una refinería sobre el entorno si no controla emisiones y efluentes?",
    correcta: "Aumento de SOx, NOx, partículas y COV, además de riesgos de contaminación de aguas por vertidos y lodos industriales",
    incorrectas: [
      "Reducción sistemática del CO₂ atmosférico por absorción natural en chimeneas",
      "Producción de agua potable como subproducto mayoritario del craqueo"
    ]
  },
  {
    enunciado: "¿Qué es un lodo de refinería en términos generales?",
    correcta: "Un residuo semisólido con hidrocarburos, sólidos y contaminantes que requiere gestión y tratamiento específicos",
    incorrectas: [
      "Un fertilizante orgánico listo para uso agrícola sin tratamiento",
      "Un gas inerte que se libera sin impacto en la atmósfera"
    ]
  },
  {
    enunciado: "¿Qué persigue la normativa de “techos nacionales de emisión” en términos generales?",
    correcta: "Limitar cantidades máximas de contaminantes atmosféricos por país para reducir impactos en salud y ecosistemas",
    incorrectas: [
      "Imponer un mínimo obligatorio de emisiones para sostener la industria",
      "Sustituir la medición de contaminantes por estimaciones sin control"
    ]
  },
  {
    enunciado: "¿Qué regulan, en conjunto, las normativas “Euro” aplicadas a vehículos?",
    correcta: "Límites de emisión de contaminantes como NOx, partículas, CO y ciertos hidrocarburos en vehículos",
    incorrectas: [
      "La densidad del petróleo crudo en origen para su exportación",
      "La temperatura de ebullición del agua en laboratorios escolares"
    ]
  },
  {
    enunciado: "¿Qué idea central introduce el Acuerdo de París en política climática internacional?",
    correcta: "Compromisos para limitar el calentamiento global mediante reducción de emisiones y planes nacionales",
    incorrectas: [
      "Una prohibición mundial inmediata de toda industria química",
      "La obligación de sustituir todo plástico por vidrio en un año"
    ]
  },
  {
    enunciado: "¿Qué objetivo persigue la mezcla de biocombustibles con combustibles fósiles, según la lógica regulatoria general?",
    correcta: "Reducir la huella de carbono del combustible final y diversificar fuentes energéticas",
    incorrectas: [
      "Aumentar el contenido de azufre para mejorar la lubricación",
      "Eliminar la necesidad de control de emisiones en motores"
    ]
  },
  {
    enunciado: "¿Cuál es un riesgo ambiental característico del transporte marítimo de crudo?",
    correcta: "Derrames accidentales con impacto masivo en ecosistemas costeros y marinos",
    incorrectas: [
      "Producción inevitable de radiación ionizante en alta mar",
      "Generación de ozono estratosférico por fricción del casco"
    ]
  },
  {
    enunciado: "¿Qué criterio general guía la transición energética en relación con el petróleo?",
    correcta: "Reducir progresivamente su uso como fuente energética y limitar impactos, manteniendo en parte su papel como materia prima industrial",
    incorrectas: [
      "Incrementar su combustión para disminuir gases de efecto invernadero",
      "Sustituirlo por carbón sin cambios tecnológicos ni ambientales"
    ]
  }
];
