// temarios/27-el-texto-descriptivo-estructuras-y-caracteristicas.js
var PREGUNTAS = [
  {
    enunciado: "Un texto descriptivo se define como un discurso que representa con detalle cualidades, rasgos o partes de un referente para que el receptor lo visualice mentalmente.",
    correcta: "La afirmación es correcta, porque su finalidad central es construir una imagen nítida del objeto, persona, lugar o fenómeno descrito.",
    incorrectas: [
      "La afirmación es incorrecta, porque la descripción siempre narra acciones encadenadas con clímax y resolución.",
      "La afirmación es incorrecta, porque la descripción solo enumera datos sin intención comunicativa."
    ]
  },
  {
    enunciado: "La descripción objetiva se caracteriza por la neutralidad expresiva, la precisión terminológica y la orientación informativa.",
    correcta: "La afirmación es correcta, porque prioriza datos verificables y evita marcas valorativas explícitas.",
    incorrectas: [
      "La afirmación es incorrecta, porque la descripción objetiva se basa en metáforas y juicios de valor.",
      "La afirmación es incorrecta, porque la descripción objetiva utiliza deliberadamente ambigüedades léxicas."
    ]
  },
  {
    enunciado: "En la descripción subjetiva o literaria se intensifican recursos expresivos y valorativos para transmitir una impresión.",
    correcta: "La afirmación es correcta, porque predominan adjetivos apreciativos, comparaciones y metáforas con carga connotativa.",
    incorrectas: [
      "La afirmación es incorrecta, porque la descripción subjetiva elimina cualquier figura retórica.",
      "La afirmación es incorrecta, porque la descripción subjetiva prohíbe toda adjetivación."
    ]
  },
  {
    enunciado: "En el plano gramatical, la descripción suele mostrar predominio de sustantivos y adjetivos, así como de estructuras nominales y coordinadas.",
    correcta: "La afirmación es correcta, porque las nominalizaciones y las series adjetivales densifican la caracterización.",
    incorrectas: [
      "La afirmación es incorrecta, porque la descripción se construye sobre todo con verbos perfectivos de acción puntual.",
      "La afirmación es incorrecta, porque la descripción requiere subordinación causal encadenada."
    ]
  },
  {
    enunciado: "En la verbalidad típica de la descripción predominan los verbos de estado y las copulativas en presente o imperfecto.",
    correcta: "La afirmación es correcta, porque estos tiempos y construcciones estabilizan las propiedades descritas.",
    incorrectas: [
      "La afirmación es incorrecta, porque la descripción exige futuridades y perífrasis incoativas.",
      "La afirmación es incorrecta, porque la descripción solo admite pretérito perfecto simple para avanzar acciones."
    ]
  },
  {
    enunciado: "La estructura más habitual ordena la descripción desde un núcleo temático hacia series de atributos organizados.",
    correcta: "La afirmación es correcta, porque se parte del referente y se despliegan rasgos, partes y relaciones pertinentes.",
    incorrectas: [
      "La afirmación es incorrecta, porque la descripción carece de cualquier organización informativa.",
      "La afirmación es incorrecta, porque la descripción debe concluir siempre con un clímax narrativo."
    ]
  },
  {
    enunciado: "El orden espacial es un criterio clásico de organización descriptiva.",
    correcta: "La afirmación es correcta, porque se puede recorrer el objeto de arriba abajo, de dentro a fuera o de izquierda a derecha.",
    incorrectas: [
      "La afirmación es incorrecta, porque el espacio no influye en la organización de la descripción.",
      "La afirmación es incorrecta, porque el orden espacial solo pertenece a los textos argumentativos."
    ]
  },
  {
    enunciado: "La principal diferencia funcional entre narración y descripción es la presencia de procesos dinámicos frente a la caracterización estática.",
    correcta: "La afirmación es correcta, porque la narración relata cambios y la descripción perfila rasgos estables.",
    incorrectas: [
      "La afirmación es incorrecta, porque ambas obligan al mismo tipo de acciones y clímax.",
      "La afirmación es incorrecta, porque la descripción excluye toda referencia a propiedades."
    ]
  },
  {
    enunciado: "La prosopografía es la descripción de los rasgos físicos de una persona.",
    correcta: "La afirmación es correcta, porque la prosopografía se centra en la apariencia corporal y fisonómica.",
    incorrectas: [
      "La afirmación es incorrecta, porque la prosopografía trata exclusivamente de rasgos morales.",
      "La afirmación es incorrecta, porque la prosopografía describe únicamente espacios."
    ]
  },
  {
    enunciado: "La etopeya es la descripción de rasgos morales, psicológicos o de carácter.",
    correcta: "La afirmación es correcta, porque la etopeya perfila valores, actitudes y hábitos del sujeto.",
    incorrectas: [
      "La afirmación es incorrecta, porque la etopeya es un tipo de paisaje urbano.",
      "La afirmación es incorrecta, porque la etopeya describe solo la vestimenta."
    ]
  },
  {
    enunciado: "El retrato combina prosopografía y etopeya en un mismo perfil.",
    correcta: "La afirmación es correcta, porque integra lo físico y lo moral en una síntesis coherente.",
    incorrectas: [
      "La afirmación es incorrecta, porque el retrato excluye rasgos morales.",
      "La afirmación es incorrecta, porque el retrato se limita a la biografía cronológica."
    ]
  },
  {
    enunciado: "La caricatura exagera o deforma rasgos con finalidad crítica, humorística o satírica.",
    correcta: "La afirmación es correcta, porque selecciona rasgos salientes y los hiperboliza para producir un efecto.",
    incorrectas: [
      "La afirmación es incorrecta, porque la caricatura elimina todo juicio de valor.",
      "La afirmación es incorrecta, porque la caricatura es siempre técnica y neutral."
    ]
  },
  {
    enunciado: "La topografía describe espacios, paisajes o escenarios.",
    correcta: "La afirmación es correcta, porque delimita componentes espaciales y relaciones de ubicación.",
    incorrectas: [
      "La afirmación es incorrecta, porque la topografía se aplica solo a animales.",
      "La afirmación es incorrecta, porque la topografía narra acciones bélicas."
    ]
  },
  {
    enunciado: "La cronografía caracteriza tiempos, atmósferas o momentos del día.",
    correcta: "La afirmación es correcta, porque focaliza cualidades temporales y ambientales.",
    incorrectas: [
      "La afirmación es incorrecta, porque la cronografía solo enumera objetos técnicos.",
      "La afirmación es incorrecta, porque la cronografía describe rasgos morales."
    ]
  },
  {
    enunciado: "La pragmatografía se centra en la descripción de objetos y artefactos.",
    correcta: "La afirmación es correcta, porque detalla componentes, materiales y usos de las cosas.",
    incorrectas: [
      "La afirmación es incorrecta, porque la pragmatografía solo analiza opiniones.",
      "La afirmación es incorrecta, porque la pragmatografía designa relatos de viajes."
    ]
  },
  {
    enunciado: "La zoografía es la descripción de animales.",
    correcta: "La afirmación es correcta, porque examina morfología, comportamiento y hábitat.",
    incorrectas: [
      "La afirmación es incorrecta, porque la zoografía estudia fechas históricas.",
      "La afirmación es incorrecta, porque la zoografía es sinónimo de autobiografía."
    ]
  },
  {
    enunciado: "Los demostrativos y adverbios locativos son claves en la deixis espacial de la descripción.",
    correcta: "La afirmación es correcta, porque orientan la ruta perceptiva del lector u oyente.",
    incorrectas: [
      "La afirmación es incorrecta, porque la deixis espacial solo pertenece al diálogo teatral.",
      "La afirmación es incorrecta, porque la deixis espacial impide la cohesión del texto."
    ]
  },
  {
    enunciado: "Los marcadores ordenadores y enumerativos ayudan a estructurar la descripción.",
    correcta: "La afirmación es correcta, porque facilitan secuencias como 'en primer lugar', 'a continuación' y 'por último'.",
    incorrectas: [
      "La afirmación es incorrecta, porque la descripción no admite ningún marcador.",
      "La afirmación es incorrecta, porque los enumerativos solo funcionan en textos jurídicos."
    ]
  },
  {
    enunciado: "La adjetivación especificativa restringe la extensión del sustantivo, mientras que la explicativa añade una valoración o detalle no restrictivo.",
    correcta: "La afirmación es correcta, porque una delimita y la otra aporta información accesoria.",
    incorrectas: [
      "La afirmación es incorrecta, porque ambas adjetivaciones cumplen exactamente la misma función.",
      "La afirmación es incorrecta, porque la explicativa elimina el sustantivo al que modifica."
    ]
  },
  {
    enunciado: "El epíteto es un adjetivo que destaca una cualidad inherente y frecuentemente estereotipada de un sustantivo.",
    correcta: "La afirmación es correcta, porque sirve para intensificar o fijar una imagen convencional.",
    incorrectas: [
      "La afirmación es incorrecta, porque el epíteto suprime el sustantivo de la descripción.",
      "La afirmación es incorrecta, porque el epíteto solo se usa en textos técnicos."
    ]
  },
  {
    enunciado: "La nominalización incrementa la densidad informativa de la descripción.",
    correcta: "La afirmación es correcta, porque convierte procesos en nombres y permite compactar atributos.",
    incorrectas: [
      "La afirmación es incorrecta, porque la nominalización impide cualquier precisión léxica.",
      "La afirmación es incorrecta, porque la nominalización elimina la cohesión del texto."
    ]
  },
  {
    enunciado: "La aposición explicativa añade información descriptiva y suele ir entre comas.",
    correcta: "La afirmación es correcta, porque amplía el referente sin cambiar su extensión.",
    incorrectas: [
      "La afirmación es incorrecta, porque la aposición explicativa restringe el referente.",
      "La afirmación es incorrecta, porque la aposición explicativa es un conector causal."
    ]
  },
  {
    enunciado: "Las oraciones de relativo explicativas son muy frecuentes en la descripción.",
    correcta: "La afirmación es correcta, porque añaden detalles sobre el núcleo sin restringir su referencia.",
    incorrectas: [
      "La afirmación es incorrecta, porque solo se usan relativas especificativas.",
      "La afirmación es incorrecta, porque las relativas impiden añadir información nueva."
    ]
  },
  {
    enunciado: "Comparación y metáfora son recursos eficaces para caracterizar cualidades de forma vívida.",
    correcta: "La afirmación es correcta, porque activan asociaciones y refuerzan la imagen mental del referente.",
    incorrectas: [
      "La afirmación es incorrecta, porque ambas figuras solo son válidas en manuales técnicos.",
      "La afirmación es incorrecta, porque la comparación siempre contradice la precisión."
    ]
  },
  {
    enunciado: "La sinestesia combina sensaciones de diferentes modalidades perceptivas en una misma imagen.",
    correcta: "La afirmación es correcta, porque integra, por ejemplo, color y sonido en una misma cualidad.",
    incorrectas: [
      "La afirmación es incorrecta, porque la sinestesia suprime toda percepción sensorial.",
      "La afirmación es incorrecta, porque la sinestesia es una figura exclusiva del diálogo."
    ]
  },
  {
    enunciado: "La hipálage desplaza un adjetivo del sustantivo que lógicamente le correspondería hacia otro cercano.",
    correcta: "La afirmación es correcta, porque produce un efecto expresivo al reubicar la cualidad.",
    incorrectas: [
      "La afirmación es incorrecta, porque la hipálage es un sinónimo de hipérbole.",
      "La afirmación es incorrecta, porque la hipálage consiste en repetir el mismo adjetivo."
    ]
  },
  {
    enunciado: "La precisión léxica en una descripción técnica se apoya en hiperónimos, hipónimos y tecnicismos adecuados.",
    correcta: "La afirmación es correcta, porque esas relaciones semánticas afinan la denominación del referente.",
    incorrectas: [
      "La afirmación es incorrecta, porque la precisión requiere evitar la terminología especializada.",
      "La afirmación es incorrecta, porque la precisión depende solo de usar sinónimos poéticos."
    ]
  },
  {
    enunciado: "El punto de vista debe mantenerse estable cuando se sigue una ruta espacial en la descripción.",
    correcta: "La afirmación es correcta, porque los cambios injustificados rompen la coherencia del recorrido.",
    incorrectas: [
      "La afirmación es incorrecta, porque cambiar el punto de vista al azar mejora la claridad.",
      "La afirmación es incorrecta, porque el punto de vista no afecta a la coherencia textual."
    ]
  },
  {
    enunciado: "El presente y el imperfecto favorecen la representación de estados, hábitos y cualidades continuadas.",
    correcta: "La afirmación es correcta, porque ambos tiempos estabilizan el referente descrito.",
    incorrectas: [
      "La afirmación es incorrecta, porque la descripción exige siempre pretérito pluscuamperfecto.",
      "La afirmación es incorrecta, porque la descripción solo admite futuro compuesto."
    ]
  },
  {
    enunciado: "La modalización valorativa es más visible en la descripción subjetiva.",
    correcta: "La afirmación es correcta, porque aparecen adjetivos apreciativos y adverbios evaluativos.",
    incorrectas: [
      "La afirmación es incorrecta, porque toda descripción debe eliminar marcas de modalidad.",
      "La afirmación es incorrecta, porque la modalización es exclusiva de la argumentación."
    ]
  },
  {
    enunciado: "En la descripción técnico-científica se buscan neutralidad, replicabilidad y terminología normalizada.",
    correcta: "La afirmación es correcta, porque la finalidad es informativa y operativa.",
    incorrectas: [
      "La afirmación es incorrecta, porque se prioriza la exageración retórica.",
      "La afirmación es incorrecta, porque la finalidad es producir ambigüedad estética."
    ]
  },
  {
    enunciado: "Los paratextos como pies de foto, leyendas o mapas orientan la interpretación de la descripción.",
    correcta: "La afirmación es correcta, porque encuadran el referente y guían la lectura.",
    incorrectas: [
      "La afirmación es incorrecta, porque los paratextos obstaculizan la comprensión.",
      "La afirmación es incorrecta, porque los paratextos sustituyen al texto principal."
    ]
  },
  {
    enunciado: "La deixis demostrativa (este, ese, aquel) sitúa el referente en relación con el emisor y el espacio descrito.",
    correcta: "La afirmación es correcta, porque sirve de anclaje espacial y escala de proximidad.",
    incorrectas: [
      "La afirmación es incorrecta, porque los demostrativos solo tienen valor temporal.",
      "La afirmación es incorrecta, porque los demostrativos no participan en la cohesión."
    ]
  },
  {
    enunciado: "El patrón de lo general a lo particular organiza primero la identificación global y después los detalles.",
    correcta: "La afirmación es correcta, porque reduce la carga cognitiva antes de introducir especificidades.",
    incorrectas: [
      "La afirmación es incorrecta, porque siempre debe iniciarse por el detalle minucioso.",
      "La afirmación es incorrecta, porque la organización no influye en la comprensión."
    ]
  },
  {
    enunciado: "La descripción dinámica aparece cuando el objeto cambia con el tiempo y se describen sus estados sucesivos.",
    correcta: "La afirmación es correcta, porque se aproxima a una cronografía de procesos o transformaciones.",
    incorrectas: [
      "La afirmación es incorrecta, porque toda descripción debe ser siempre estática.",
      "La afirmación es incorrecta, porque describir cambios convierte el texto en diálogo."
    ]
  },
  {
    enunciado: "Las enumeraciones ordenadas con criterios visibles mejoran la claridad de la descripción.",
    correcta: "La afirmación es correcta, porque jerarquizan atributos y facilitan la recuperación de información.",
    incorrectas: [
      "La afirmación es incorrecta, porque la claridad aumenta con listados caóticos.",
      "La afirmación es incorrecta, porque toda enumeración debe carecer de criterio."
    ]
  },
  {
    enunciado: "Los comparativos y superlativos permiten gradar cualidades en la descripción.",
    correcta: "La afirmación es correcta, porque expresan intensidad relativa o máxima de un rasgo.",
    incorrectas: [
      "La afirmación es incorrecta, porque la gradación es incompatible con la descripción.",
      "La afirmación es incorrecta, porque los grados solo se usan en textos jurídicos."
    ]
  },
  {
    enunciado: "Las descripciones accesibles (alt-text) deben ser informativas, claras y centradas en lo relevante del contenido visual.",
    correcta: "La afirmación es correcta, porque su objetivo es transmitir la información esencial de la imagen.",
    incorrectas: [
      "La afirmación es incorrecta, porque deben recrear efectos literarios extensos sin límite.",
      "La afirmación es incorrecta, porque la accesibilidad impone metáforas obligatorias."
    ]
  },
  {
    enunciado: "La multimodalidad (texto más infografía o esquema) potencia la comprensión de descripciones complejas.",
    correcta: "La afirmación es correcta, porque distribuye la información por canales complementarios.",
    incorrectas: [
      "La afirmación es incorrecta, porque mezclar modos debilita siempre el contenido.",
      "La afirmación es incorrecta, porque las infografías sustituyen al texto descriptivo."
    ]
  },
  {
    enunciado: "La densidad de recursos figurativos suele ser mayor en la descripción literaria que en la técnica.",
    correcta: "La afirmación es correcta, porque la finalidad estética favorece metáforas y sinestesias.",
    incorrectas: [
      "La afirmación es incorrecta, porque la técnica exige obligatoriamente metáforas constantes.",
      "La afirmación es incorrecta, porque la literaria prohíbe cualquier figura retórica."
    ]
  },
  {
    enunciado: "En la revisión de una descripción se debe comprobar la consistencia del punto de vista y la coherencia terminológica.",
    correcta: "La afirmación es correcta, porque ambos aspectos aseguran continuidad y precisión en el texto.",
    incorrectas: [
      "La afirmación es incorrecta, porque la revisión solo atiende a la ortografía de los nombres propios.",
      "La afirmación es incorrecta, porque la consistencia del punto de vista es irrelevante."
    ]
  }
];
