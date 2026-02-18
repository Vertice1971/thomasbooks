// temarios/48-elementos-de-transicion-compuestos-de-coordinacion-teorias-explicativas.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué define mejor a un elemento de transición del bloque d?",
    correcta: "Aquel cuyo átomo o alguno de sus iones presenta subcapa d parcialmente ocupada",
    incorrectas: [
      "El que siempre tiene la subcapa d completamente llena",
      "El que no puede formar compuestos coloreados"
    ]
  },
  {
    enunciado: "¿Cuál es la configuración externa típica de los metales de transición del bloque d?",
    correcta: "(n−1)d^1–10 ns^1–2 con excepciones como Cr y Cu",
    incorrectas: [
      "ns^2 np^6 con d vacío",
      "ns^2 (n+1)p^1 sin electrones d"
    ]
  },
  {
    enunciado: "¿Por qué muchos compuestos de metales de transición son coloreados?",
    correcta: "Por transiciones d–d y/o de transferencia de carga en sus complejos",
    incorrectas: [
      "Porque siempre contienen iones de tierras raras fluorescentes",
      "Porque todos son semiconductores con banda prohibida fija"
    ]
  },
  {
    enunciado: "¿Qué propiedad magnética esperas de un complejo con electrones desapareados?",
    correcta: "Paramagnetismo",
    incorrectas: [
      "Diamagnetismo fuerte",
      "Ferromagnetismo obligado"
    ]
  },
  {
    enunciado: "¿Qué efecto tiene la contracción lantánida en metales 5d respecto a 4d?",
    correcta: "Disminuye los radios, aumenta la covalencia y suele incrementar Δ, favoreciendo bajo spin",
    incorrectas: [
      "Aumenta los radios y reduce la covalencia",
      "No produce efecto alguno en propiedades de coordinación"
    ]
  },
  {
    enunciado: "¿Qué afirma la teoría de Werner sobre complejos de coordinación?",
    correcta: "Introduce el concepto de número de coordinación y esferas interna/externa",
    incorrectas: [
      "Explica el color por transiciones banda–banda",
      "Prohíbe geometrías octaédricas en iones metálicos"
    ]
  },
  {
    enunciado: "En nomenclatura IUPAC, ¿qué nombre corresponde a [Cu(NH3)4]SO4?",
    correcta: "Sulfato de tetraammincobre(II)",
    incorrectas: [
      "Tetraaminasulfatocobre(I)",
      "Sulfato de tetracianocuprato(II)"
    ]
  },
  {
    enunciado: "¿Qué describe el número de coordinación (CN) en un complejo?",
    correcta: "El número de átomos donadores que enlazan directamente al metal",
    incorrectas: [
      "El número total de electrones de valencia del metal",
      "El estado de oxidación del complejo completo"
    ]
  },
  {
    enunciado: "¿Cuál es la diferencia entre ligandos monodentados y bidentados?",
    correcta: "Los bidentados se coordinan por dos átomos donadores y pueden formar quelatos",
    incorrectas: [
      "Los monodentados siempre son aniónicos",
      "Los bidentados solo pueden coordinar a metales f"
    ]
  },
  {
    enunciado: "¿Qué isomería distingue cis/trans en complejos octaédricos MA4B2?",
    correcta: "Isomería geométrica",
    incorrectas: [
      "Isomería óptica exclusivamente",
      "Isomería de ionización"
    ]
  },
  {
    enunciado: "¿Qué par de isómeros ópticos se describe en [M(en)3]n+?",
    correcta: "Enantiómeros Δ y Λ",
    incorrectas: [
      "fac y mer",
      "cis y trans"
    ]
  },
  {
    enunciado: "En teoría del campo cristalino (CFT), ¿qué es Δ0?",
    correcta: "La separación energética entre los conjuntos t2g y eg en un octaedro",
    incorrectas: [
      "La energía de ionización del metal",
      "La diferencia entre niveles s y p atómicos"
    ]
  },
  {
    enunciado: "Para un complejo octaédrico d6, ¿cuándo se espera bajo spin?",
    correcta: "Cuando Δ0 > energía de apareamiento P (ligandos de campo fuerte)",
    incorrectas: [
      "Siempre, independientemente del ligando",
      "Solo con ligandos aniónicos de campo débil"
    ]
  },
  {
    enunciado: "¿Qué tendencia recoge la serie espectroquímica de ligandos?",
    correcta: "El orden creciente de Δ que inducen distintos ligandos sobre la subcapa d",
    incorrectas: [
      "El orden de electronegatividad de los metales",
      "La acidez de Brønsted de los ligandos en agua"
    ]
  },
  {
    enunciado: "¿Qué predice la distorsión de Jahn–Teller para complejos octaédricos d9?",
    correcta: "Alargamiento tetragonal por degeneración electrónica",
    incorrectas: [
      "Compresión trigonal obligatoria",
      "Ausencia de distorsión por simetría perfecta"
    ]
  },
  {
    enunciado: "¿Qué transición electrónica suele dar bandas intensas en UV-Vis de complejos?",
    correcta: "Transferencia de carga (LMCT/MLCT)",
    incorrectas: [
      "Transiciones d–d totalmente permitidas por Laporte",
      "Transiciones s–s atómicas"
    ]
  },
  {
    enunciado: "¿Qué complejos tienden a cuadrado-plano entre d8?",
    correcta: "Ni(II)/Pd(II)/Pt(II) con ligandos adecuados",
    incorrectas: [
      "Fe(III) d5 alto spin",
      "Mn(II) d5 alto spin"
    ]
  },
  {
    enunciado: "¿Qué es el efecto trans en complejos cuadrado-plana de Pd(II)/Pt(II)?",
    correcta: "La capacidad de ciertos ligandos de debilitar y acelerar la sustitución del ligando opuesto",
    incorrectas: [
      "Un fenómeno óptico de rotación del plano de polarización",
      "La imposibilidad de reacciones asociativas"
    ]
  },
  {
    enunciado: "En cinética de sustitución octaédrica, ¿qué caracteriza al mecanismo disociativo (D)?",
    correcta: "Sale primero un ligando del complejo, reduciendo la coordinación",
    incorrectas: [
      "Entra primero un ligando adicional (complejo de 7 coordinación)",
      "Ocurre siempre sin dependencia de CFSE"
    ]
  },
  {
    enunciado: "¿Qué concepto central añade la teoría de campo de ligandos (LFT) frente a CFT?",
    correcta: "Mezcla metal–ligando (σ-donación y π-retrodonación) en un marco OM",
    incorrectas: [
      "Elimina el concepto de Δ",
      "Prohíbe la covalencia en el enlace M–L"
    ]
  },
  {
    enunciado: "¿Cuál es el efecto quelato?",
    correcta: "Los ligandos polidentados suelen estabilizar más al complejo que los monodentados equivalentes",
    incorrectas: [
      "Los quelatos siempre desestabilizan la esfera interna",
      "Solo actúa en metales alcalinos"
    ]
  },
  {
    enunciado: "¿Qué complejos presentan típicamente color azul intenso y paramagnetismo debido a d9?",
    correcta: "Cu(II) acuosos como [Cu(H2O)6]2+",
    incorrectas: [
      "Zn(II) con d10",
      "Cu(I) con d10"
    ]
  },
  {
    enunciado: "En organometálica, ¿qué implica la regla de los 18 electrones?",
    correcta: "Complejos estables alcanzan 18 e− de valencia sumando metal+ligandos",
    incorrectas: [
      "Los complejos estables deben tener 8 e−",
      "Solo aplica a complejos iónicos sin enlace M–C"
    ]
  },
  {
    enunciado: "¿Qué paso elemental convierte M en M(+2) al añadir X–Y en catálisis?",
    correcta: "Adición oxidativa",
    incorrectas: [
      "Eliminación reductiva",
      "Inserción migratoria"
    ]
  },
  {
    enunciado: "¿Cuál es una aplicación bioinorgánica clave de complejos de Fe(II) hemo?",
    correcta: "Transporte y activación de O2 en hemoproteínas",
    incorrectas: [
      "Fotólisis de agua en fotosistema II (Mn es el núcleo)",
      "Fijación de N2 por nitrogenasa (Mo-Fe es el núcleo)"
    ]
  },
  {
    enunciado: "¿Qué tipo de espectroscopía distingue fácilmente bandas d–d y de transferencia?",
    correcta: "UV-Vis-NIR con análisis de intensidades y posiciones",
    incorrectas: [
      "Cromatografía de gases",
      "Difracción de electrones de baja energía (LEED) en superficies"
    ]
  },
  {
    enunciado: "¿Qué información proporciona EXAFS/XANES en complejos metálicos?",
    correcta: "Entornos de coordinación y distancias M–L",
    incorrectas: [
      "Curvas tensión–deformación del metal sólido",
      "Solo masas molares exactas"
    ]
  },
  {
    enunciado: "Para un complejo octaédrico d4 alto spin, ¿cuántos electrones desapareados esperas?",
    correcta: "Cuatro",
    incorrectas: [
      "Cero",
      "Dos"
    ]
  },
  {
    enunciado: "¿Qué cambio esperarías al sustituir NH3 por CN− en [Fe(L)6]2+?",
    correcta: "Aumento de Δ0, posible cambio a bajo spin y variación de color",
    incorrectas: [
      "Disminución de Δ0 asegurando alto spin",
      "Imposibilidad de coordinar CN− por ser neutro"
    ]
  },
  {
    enunciado: "¿Qué es isomería de enlace en complejos como [Co(NO2)6]3− vs [Co(ONO)6]3−?",
    correcta: "Diferente átomo donador del mismo ligando ambidentado",
    incorrectas: [
      "Diferente estado de oxidación del metal",
      "Diferente contraión fuera de la esfera interna"
    ]
  },
  {
    enunciado: "¿Cuál es un ejemplo clásico de isomería fac/mer?",
    correcta: "[M(A)3(B)3] octaédrico con A y B monodentados",
    incorrectas: [
      "[M(L)2] lineal",
      "[M(L)4] tetraédrico"
    ]
  },
  {
    enunciado: "¿Qué ligandos suelen situarse altos en la serie espectroquímica (campo fuerte)?",
    correcta: "CN−, CO",
    incorrectas: [
      "I−, Br−",
      "H2O2, O2 (como moléculas libres)"
    ]
  },
  {
    enunciado: "¿Qué metales suelen formar complejos más inertes cinéticamente: 3d o 4d/5d?",
    correcta: "4d/5d por enlaces más covalentes y mayores Δ",
    incorrectas: [
      "3d siempre, por menor masa",
      "No hay tendencia general"
    ]
  },
  {
    enunciado: "¿Qué parámetro se usa para estimar el momento magnético “spin-only”?",
    correcta: "μ_eff ≈ √(n(n+2)) BM con n = nº de e− desapareados",
    incorrectas: [
      "μ_eff = n/2 (en unidades SI)",
      "μ_eff = Δ0/P"
    ]
  },
  {
    enunciado: "¿Cuál es una reacción redox “inner-sphere” típica?",
    correcta: "Transferencia a través de un ligando puente entre donador y aceptador",
    incorrectas: [
      "Transferencia sin ningún tipo de ligando",
      "Solo ocurre en fase gas con átomos aislados"
    ]
  },
  {
    enunciado: "¿Qué complejos suelen ser diamagnéticos entre d6 octaédricos?",
    correcta: "d6 bajo spin como [Fe(CN)6]4−",
    incorrectas: [
      "d6 alto spin como [Fe(H2O)6]2+",
      "Todos los d6 independientemente del ligando"
    ]
  },
  {
    enunciado: "¿Qué factor favorece la labilidad de un complejo octaédrico 3d?",
    correcta: "Pequeña CFSE y metal de la primera serie con alto spin",
    incorrectas: [
      "Gran Δ0 y bajo spin en 5d",
      "Alto impedimento estérico que bloquea cualquier sustitución"
    ]
  },
  {
    enunciado: "¿Qué describe la hapticidad (η^n) en organometálica?",
    correcta: "Número de átomos contiguos de un ligando π que interactúan con el metal",
    incorrectas: [
      "Carga formal del ligando",
      "Número de electrones no apareados del metal"
    ]
  },
  {
    enunciado: "¿Qué complejos d10 esperarías que fueran incoloros por ausencia de d–d?",
    correcta: "Zn(II), Cu(I), Ag(I) típicamente",
    incorrectas: [
      "Ni(II) cuadrado-plana",
      "Cr(III) octaédrico"
    ]
  },
  {
    enunciado: "¿Cuál es un uso tecnológico de complejos de Ru(II) polipiridilo?",
    correcta: "Sensibilizadores en celdas solares y fotocatálisis",
    incorrectas: [
      "Electrolitos fundidos en baterías Na–S",
      "Aditivos anti-hielo en asfaltos"
    ]
  },
  {
    enunciado: "Al nombrar complejos aniónicos, ¿qué sufijo se usa para el metal?",
    correcta: "Se añade “-ato” (p. ej., ferrato, platinate)",
    incorrectas: [
      "Se añade “-uro” al final",
      "No se modifica el nombre del metal"
    ]
  }
];
