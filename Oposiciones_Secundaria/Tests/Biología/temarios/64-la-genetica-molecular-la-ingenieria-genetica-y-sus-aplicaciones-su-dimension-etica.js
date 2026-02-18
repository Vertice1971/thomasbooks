// temarios/64-la-genetica-molecular-la-ingenieria-genetica-y-sus-aplicaciones-su-dimension-etica.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué describe el dogma central de la biología molecular en su formulación clásica?",
    correcta: "El flujo de información genética ADN → ARN → proteína",
    incorrectas: [
      "El flujo de información proteína → ARN → ADN",
      "El flujo bidireccional permanente proteína ↔ ADN"
    ]
  },
  {
    enunciado: "¿Qué experimento demostró la replicación semiconservativa del ADN?",
    correcta: "El experimento de Meselson y Stahl con 15N/14N",
    incorrectas: [
      "El experimento de Avery-MacLeod-McCarty con neumococos",
      "El experimento de Hershey y Chase con bacteriófagos"
    ]
  },
  {
    enunciado: "¿Qué afirmación es correcta sobre el ARN mensajero (ARNm) eucariota maduro?",
    correcta: "Presenta cap 5′, cola poli(A) 3′ y ha sido procesado por splicing",
    incorrectas: [
      "Contiene intrones sin eliminar y carece de cap 5′",
      "No puede ser traducido por ribosomas citosólicos"
    ]
  },
  {
    enunciado: "¿Qué enzima cataliza la síntesis de ARN a partir de ADN durante la transcripción?",
    correcta: "ARN polimerasa",
    incorrectas: [
      "ADN polimerasa I",
      "Ligasa de ADN"
    ]
  },
  {
    enunciado: "¿Cuál de las siguientes moléculas es un ARN no codificante regulador?",
    correcta: "microARN (miARN)",
    incorrectas: [
      "tARNiMet (iniciador de traducción)",
      "ARNr 28S"
    ]
  },
  {
    enunciado: "¿Qué nivel de regulación describe mejor el operón lac en bacterias?",
    correcta: "Control transcripcional por un represor y regulación por glucosa (catabolito)",
    incorrectas: [
      "Control exclusivo postraduccional por fosforilación",
      "Control epigenético por metilación de histonas"
    ]
  },
  {
    enunciado: "¿Cuál es la función de las enzimas de restricción en ADN recombinante?",
    correcta: "Reconocer y cortar secuencias específicas de ADN",
    incorrectas: [
      "Unir fragmentos de ADN con extremos cohesivos",
      "Añadir colas poli(A) a ARNm"
    ]
  },
  {
    enunciado: "¿Qué hace la ligasa de ADN en clonación molecular?",
    correcta: "Une fragmentos de ADN formando enlaces fosfodiéster",
    incorrectas: [
      "Elimina intrones del pre-ARNm",
      "Introduce metilos en citosinas"
    ]
  },
  {
    enunciado: "¿Cuál es un vector de clonación común en bacterias?",
    correcta: "Plásmido circular con origen de replicación y marcador de selección",
    incorrectas: [
      "Mitocondria aislada con ADN circular",
      "Cromosoma metafásico lineal sin origen funcional"
    ]
  },
  {
    enunciado: "¿Qué componente confiere especificidad a la PCR?",
    correcta: "Los cebadores (primers) complementarios a las regiones flanqueantes",
    incorrectas: [
      "La ligasa T4 en tampón isotónico",
      "La DNA polimerasa I en sustitución de Taq"
    ]
  },
  {
    enunciado: "¿Cuál es la polimerasa termoestable clásica usada en PCR convencional?",
    correcta: "Taq polimerasa",
    incorrectas: [
      "ARN polimerasa II",
      "ADN polimerasa δ"
    ]
  },
  {
    enunciado: "¿Qué diferencia principal hay entre PCR y RT-PCR (transcripción inversa-PCR)?",
    correcta: "RT-PCR convierte primero ARN en ADNc antes de la amplificación",
    incorrectas: [
      "RT-PCR amplifica directamente proteínas",
      "PCR convencional usa ribosomas para amplificar ARNm"
    ]
  },
  {
    enunciado: "¿Qué técnica permite cuantificar en tiempo real el producto amplificado?",
    correcta: "qPCR (PCR cuantitativa en tiempo real)",
    incorrectas: [
      "Southern blot",
      "Electroforesis en gel sin tinción fluorescente"
    ]
  },
  {
    enunciado: "¿Qué técnica de secuenciación fue la más usada antes de las tecnologías NGS?",
    correcta: "Método de terminación de cadena de Sanger",
    incorrectas: [
      "Secuenciación por microscopía de fuerza atómica",
      "Secuenciación por traducción ribosomal"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a las tecnologías NGS (Next-Generation Sequencing)?",
    correcta: "Secuenciación masiva y paralela de millones de fragmentos",
    incorrectas: [
      "Lecturas únicas de >1 Mb por evento en todos los sistemas",
      "Necesidad de clonar cada fragmento en un plásmido antes de leer"
    ]
  },
  {
    enunciado: "¿Cuál es el principio general de CRISPR-Cas9 en edición génica?",
    correcta: "Un ARN guía dirige a Cas9 a una secuencia diana adyacente a PAM para introducir un corte",
    incorrectas: [
      "Una proteína guía reconoce lípidos y degrada membranas",
      "Un anticuerpo monoclonal corta ADN de doble cadena"
    ]
  },
  {
    enunciado: "¿Qué ventaja ofrecen los editores de bases frente a Cas9 estándar?",
    correcta: "Permiten cambios puntuales sin roturas de doble cadena",
    incorrectas: [
      "Generan siempre deleciones largas por NHEJ",
      "Evitan la necesidad de ARN guía"
    ]
  },
  {
    enunciado: "¿Qué define el prime editing respecto a CRISPR convencional?",
    correcta: "Usa Cas9 nickasa y transcriptasa inversa para introducir ediciones precisas",
    incorrectas: [
      "Usa recombinasas sitio-específicas sin guía",
      "Solo funciona en ADN mitocondrial"
    ]
  },
  {
    enunciado: "¿Qué diferencia un banco de ADNc de un banco genómico?",
    correcta: "El banco de ADNc representa genes expresados (sin intrones) de un tejido/condición",
    incorrectas: [
      "El banco de ADNc contiene intrones y regiones intergénicas",
      "El banco genómico incluye solo ARNm maduros"
    ]
  },
  {
    enunciado: "¿Qué método detecta fragmentos específicos de ADN en una mezcla compleja?",
    correcta: "Southern blot",
    incorrectas: [
      "Northern blot (ARN)",
      "Western blot (proteínas)"
    ]
  },
  {
    enunciado: "En una selección azul-blanco con X-gal, una colonia blanca suele indicar que:",
    correcta: "El inserto interrumpió el gen lacZ en el plásmido",
    incorrectas: [
      "El plásmido carece de origen de replicación",
      "La bacteria no contiene plásmido alguno"
    ]
  },
  {
    enunciado: "¿Qué procedimiento introduce ADN en células eucariotas adherentes con pulsos eléctricos?",
    correcta: "Electroporación",
    incorrectas: [
      "Transformación por choque térmico",
      "Hibridación in situ fluorescente (FISH)"
    ]
  },
  {
    enunciado: "¿Qué expresión describe mejor la terapia génica somática?",
    correcta: "Modificación del genoma de células del paciente sin afectar la línea germinal",
    incorrectas: [
      "Edición de cigotos para heredar cambios a la descendencia",
      "Sustitución completa de un cromosoma por uno sintético"
    ]
  },
  {
    enunciado: "¿Qué son las células CAR-T en medicina de precisión?",
    correcta: "Linfocitos T modificados para expresar receptores quiméricos dirigidos a antígenos tumorales",
    incorrectas: [
      "Células T con eliminación completa del TCR endógeno por apoptosis",
      "Macrófagos con receptores de inmunoglobulina naturales sin edición"
    ]
  },
  {
    enunciado: "¿Cuál es un ejemplo de aplicación agrícola de la ingeniería genética?",
    correcta: "Cultivos Bt resistentes a insectos",
    incorrectas: [
      "Rotación de cultivos sin modificación genética",
      "Riego por goteo en zonas áridas"
    ]
  },
  {
    enunciado: "¿Qué término describe liberar microorganismos modificados para degradar contaminantes?",
    correcta: "Biorremediación",
    incorrectas: [
      "Biomineralización",
      "Bioaumentación de ADN mitocondrial"
    ]
  },
  {
    enunciado: "¿Qué riesgo ecológico se discute con OGM agrícolas?",
    correcta: "Flujo génico hacia parientes silvestres y aparición de resistencias",
    incorrectas: [
      "Conversión espontánea de plantas en animales",
      "Pérdida de la fotosíntesis en tejidos foliares"
    ]
  },
  {
    enunciado: "¿Qué marco internacional regula el movimiento transfronterizo de OVM/OGM?",
    correcta: "Protocolo de Cartagena sobre Bioseguridad",
    incorrectas: [
      "Convenio de Berna sobre vida silvestre estrictamente",
      "Tratado de Kioto sobre emisiones de CO₂"
    ]
  },
  {
    enunciado: "¿Qué documento ético-político de la UNESCO se refiere al genoma humano?",
    correcta: "Declaración Universal sobre el Genoma Humano y los Derechos Humanos (1997)",
    incorrectas: [
      "Declaración de Río sobre Medio Ambiente (1992)",
      "Carta de Aalborg sobre ciudades sostenibles (1994)"
    ]
  },
  {
    enunciado: "¿Qué aspecto distingue la edición de línea germinal de la somática?",
    correcta: "La línea germinal puede transmitir cambios a la descendencia",
    incorrectas: [
      "La somática altera también el ADN mitocondrial heredable",
      "La línea germinal nunca afecta al embrión"
    ]
  },
  {
    enunciado: "¿Qué técnica permite medir cambios epigenéticos asociados a metilación de ADN?",
    correcta: "Tratamiento con bisulfito y secuenciación",
    incorrectas: [
      "Inmunoprecipitación de cromatina sin anticuerpos",
      "Electroforesis nativa sin modificación química"
    ]
  },
  {
    enunciado: "¿Qué define la metilación de citosinas en promotores eucariotas?",
    correcta: "Suele asociarse a represión transcripcional",
    incorrectas: [
      "Activa universalmente la transcripción",
      "Solo ocurre en bacterias"
    ]
  },
  {
    enunciado: "¿Qué diferencia clave hay entre transfección y transformación?",
    correcta: "Transfección introduce ADN en células eucariotas; transformación, en bacterias",
    incorrectas: [
      "Transfección es siempre por virus; transformación solo con liposomas",
      "Ambas son sinónimos estrictos en cualquier organismo"
    ]
  },
  {
    enunciado: "¿Qué aplicación clínica típica usa NGS en diagnóstico?",
    correcta: "Paneles multigénicos para cáncer hereditario",
    incorrectas: [
      "Medición directa de presión arterial",
      "Determinación del grupo sanguíneo por aglutinación"
    ]
  },
  {
    enunciado: "¿Qué estrategia reduce efectos fuera de diana (off-target) en CRISPR?",
    correcta: "Optimizar la longitud/GC del ARN guía y usar nucleasas de alta fidelidad",
    incorrectas: [
      "Aumentar la temperatura para favorecer cortes inespecíficos",
      "Eliminar el requisito PAM"
    ]
  },
  {
    enunciado: "¿Qué criterio bioético se invoca al evaluar riesgos y beneficios de una terapia génica?",
    correcta: "Principio de proporcionalidad/beneficencia frente a no maleficencia",
    incorrectas: [
      "Principio de indiferencia clínica",
      "Supremacía del interés económico sobre el paciente"
    ]
  },
  {
    enunciado: "¿Cuál es la herramienta preferente para detectar expresión génica a gran escala?",
    correcta: "RNA-seq (secuenciación de transcriptomas)",
    incorrectas: [
      "Southern blot",
      "Ensayo ELISA sin ácidos nucleicos"
    ]
  },
  {
    enunciado: "¿Qué se necesita para la clonación de un gen en un plásmido de expresión bacteriano?",
    correcta: "Promotor adecuado, RBS, sitio MCS y marcador de selección",
    incorrectas: [
      "Intrones largos para aumentar la estabilidad del ARNm",
      "Señales de poliadenilación eucariotas exclusivamente"
    ]
  },
  {
    enunciado: "¿Qué técnica permite localizar una secuencia en un cromosoma metafásico con fluorescencia?",
    correcta: "Hibridación in situ fluorescente (FISH)",
    incorrectas: [
      "PCR anidada",
      "Western blot"
    ]
  },
  {
    enunciado: "¿Qué resultado indicaría éxito en una clonación por PCR y ligación?",
    correcta: "Colonia con resistencia adecuada y amplicón correcto confirmado por digestión/SEC",
    incorrectas: [
      "Crecimiento en medio sin antibiótico y sin inserto",
      "Ausencia de banda en gel pero color azul intenso"
    ]
  },
  {
    enunciado: "¿Qué elemento reconoce Cas9 para un corte eficiente en la diana?",
    correcta: "Una secuencia PAM adyacente al sitio objetivo",
    incorrectas: [
      "Un codón de inicio AUG cercano",
      "Un intrón con señal de ramificación"
    ]
  }
];
