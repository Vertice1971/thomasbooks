// temarios/42-enlace-covalente-orbitales-moleculares-diagramas-de-energia-y-geometria-molecular.js
var PREGUNTAS = [
  {
    enunciado: "En el marco de orbitales moleculares (OM), ¿qué significa que el enlace covalente surja por superposición de funciones de onda?",
    correcta: "Que la combinación lineal de orbitales atómicos genera OM que describen electrones deslocalizados sobre toda la molécula",
    incorrectas: [
      "Que cada electrón pertenece exclusivamente a un átomo aunque se forme el enlace",
      "Que los orbitales atómicos desaparecen físicamente al formarse el enlace"
    ]
  },
  {
    enunciado: "¿Cuál es la relación básica entre el número de orbitales atómicos combinados y el número de orbitales moleculares generados?",
    correcta: "Se conservan: el número de OM es igual al número total de OA combinados",
    incorrectas: [
      "Siempre se generan más OM que OA por estabilización",
      "Siempre se generan menos OM que OA por normalización"
    ]
  },
  {
    enunciado: "¿Qué característica distingue a un OM enlazante frente a uno antienlazante?",
    correcta: "El enlazante concentra densidad electrónica entre núcleos; el antienlazante presenta un nodo internuclear",
    incorrectas: [
      "El enlazante tiene mayor energía que el antienlazante",
      "El antienlazante carece de función de onda normalizable"
    ]
  },
  {
    enunciado: "¿Cómo se define el orden de enlace en el esquema de OM?",
    correcta: "Como (número de electrones en OM enlazantes – número en OM antienlazantes) / 2",
    incorrectas: [
      "Como el número de pares electrónicos totales en la molécula",
      "Como la suma de electrones enlazantes y antienlazantes dividida por 2"
    ]
  },
  {
    enunciado: "¿Por qué O₂ es paramagnético según la teoría de OM?",
    correcta: "Porque posee dos electrones desapareados en los orbitales π*",
    incorrectas: [
      "Porque su orden de enlace es cero",
      "Porque todos sus electrones ocupan OM enlazantes"
    ]
  },
  {
    enunciado: "En diatómicas de primera fila, ¿qué peculiaridad de orden energético aparece entre B₂ y N₂?",
    correcta: "Los OM π2p quedan por debajo de σ2p (inversión respecto a O₂ y F₂)",
    incorrectas: [
      "σ2p está por debajo de π2p en toda la serie B₂–Ne₂",
      "No existe diferencia sistemática entre B₂–N₂ y O₂–Ne₂"
    ]
  },
  {
    enunciado: "¿Qué predice el orden de enlace de He₂ en el esquema básico de OM formado por 1s?",
    correcta: "Orden de enlace 0; la especie no es estable como molécula diatómica",
    incorrectas: [
      "Orden de enlace 1; es estable y diamagnética",
      "Orden de enlace 2; es más estable que H₂"
    ]
  },
  {
    enunciado: "En una molécula heteronuclear como HF, ¿cómo se reparten típicamente los coeficientes de los OM enlazantes?",
    correcta: "El OM enlazante tiene mayor contribución del AO del átomo más electronegativo",
    incorrectas: [
      "El OM enlazante se localiza por completo en el átomo menos electronegativo",
      "No hay asimetría alguna en los coeficientes en moléculas heteronucleares"
    ]
  },
  {
    enunciado: "¿Qué etiquetado de simetría (g/u) es aplicable en diagramas de OM?",
    correcta: "Solo en diatómicas homonucleares, por su centro de inversión",
    incorrectas: [
      "En cualquier molécula lineal, sea homo u heteronuclear",
      "Nunca es aplicable porque depende del estado de agregación"
    ]
  },
  {
    enunciado: "Respecto a la fortaleza de enlaces, ¿cuál es la comparación general entre σ y π?",
    correcta: "Un enlace σ suele ser más fuerte que un enlace π entre los mismos átomos",
    incorrectas: [
      "Un enlace π es siempre más fuerte que uno σ",
      "No existe diferencia sistemática entre σ y π"
    ]
  },
  {
    enunciado: "¿Cómo se descompone un doble enlace típico en términos de tipos de enlace?",
    correcta: "Un enlace σ y un enlace π",
    incorrectas: [
      "Dos enlaces σ",
      "Dos enlaces π sin componente σ"
    ]
  },
  {
    enunciado: "¿Y un triple enlace típico entre dos átomos ligeros?",
    correcta: "Un enlace σ y dos enlaces π",
    incorrectas: [
      "Tres enlaces σ",
      "Un enlace π y dos enlaces δ"
    ]
  },
  {
    enunciado: "¿Qué efecto tiene la conjugación π en sistemas como el butadieno?",
    correcta: "Deslocaliza electrones, estabiliza y reduce la barrera de rotación del enlace central",
    incorrectas: [
      "Localiza electrones y aumenta la barrera de rotación",
      "No afecta a la energía ni a la geometría"
    ]
  },
  {
    enunciado: "¿Qué expresa la regla (4n+2) de Hückel para aromaticidad?",
    correcta: "Que sistemas cíclicos planos con 4n+2 electrones π deslocalizados son especialmente estables",
    incorrectas: [
      "Que cualquier sistema con 4n electrones π es aromático",
      "Que solo los anillos con seis miembros pueden ser aromáticos"
    ]
  },
  {
    enunciado: "¿Qué observación estructural caracteriza al benceno en relación con la deslocalización?",
    correcta: "Todas las longitudes C–C son equivalentes e intermedias entre simple y doble",
    incorrectas: [
      "Presenta alternancia marcada de enlaces simples y dobles",
      "Tiene dos enlaces triples opuestos en el anillo"
    ]
  },
  {
    enunciado: "Según VSEPR, ¿cuál es la geometría aproximada del CH₄ alrededor del átomo central?",
    correcta: "Tetraédrica con ángulos cercanos a 109,5°",
    incorrectas: [
      "Trigonal plana con ángulos de 120°",
      "Lineal con ángulos de 180°"
    ]
  },
  {
    enunciado: "¿Qué geometría y ángulo aproximado presenta NH₃ por la presencia de un par libre?",
    correcta: "Trigonal piramidal, con ángulos algo menores de 109,5° (≈107°)",
    incorrectas: [
      "Tetraédrica perfecta con 109,5°",
      "Lineal de 180° por repulsión máxima"
    ]
  },
  {
    enunciado: "¿Cuál es la geometría aproximada de H₂O según VSEPR?",
    correcta: "Angular (acodada) con ángulo de enlace cercano a 104,5°",
    incorrectas: [
      "Lineal de 180°",
      "Trigonal plana de 120°"
    ]
  },
  {
    enunciado: "¿Por qué CO₂ es globalmente apolar pese a tener enlaces C=O polares?",
    correcta: "Porque la molécula es lineal y los dipolos se cancelan vectorialmente",
    incorrectas: [
      "Porque el C=O no es un enlace polar",
      "Porque el oxígeno es menos electronegativo que el carbono"
    ]
  },
  {
    enunciado: "¿Cuál de las siguientes parejas muestra un caso típico de anulación de dipolos por simetría?",
    correcta: "CF₄ (apolar) frente a CH₂F₂ (polar) por diferente simetría",
    incorrectas: [
      "HF (apolar) frente a HCl (polar) por tener hidrógeno",
      "NH₃ (apolar) frente a BF₃ (polar) por simetría trigonal"
    ]
  },
  {
    enunciado: "¿Qué resume la regla de Bent sobre hibridación y ángulos?",
    correcta: "Los enlaces dirigidos hacia átomos más electronegativos usan híbridos con mayor carácter p",
    incorrectas: [
      "Los enlaces hacia átomos electronegativos usan más carácter s",
      "La hibridación no se ve afectada por la electronegatividad"
    ]
  },
  {
    enunciado: "Relaciona hibridación con geometría ideal alrededor del átomo central.",
    correcta: "sp → lineal (180°); sp² → trigonal plana (120°); sp³ → tetraédrica (≈109,5°)",
    incorrectas: [
      "sp → tetraédrica; sp² → lineal; sp³ → trigonal plana",
      "sp → trigonal plana; sp² → tetraédrica; sp³ → lineal"
    ]
  },
  {
    enunciado: "¿Cómo se describe el anión triyoduro I₃⁻ en términos de enlace?",
    correcta: "Como un sistema 3 centros–4 electrones con deslocalización a lo largo de la tríada",
    incorrectas: [
      "Como dos enlaces iónicos puros e independientes",
      "Como tres enlaces σ localizados sin deslocalización"
    ]
  },
  {
    enunciado: "¿Qué papel juegan HOMO y LUMO en la reactividad cualitativa?",
    correcta: "La energía y naturaleza del HOMO/LUMO condicionan la facilidad de transferencia electrónica y el sitio de ataque",
    incorrectas: [
      "El HOMO carece de relevancia; solo el LUMO determina la reactividad",
      "La reactividad no puede discutirse con OM"
    ]
  },
  {
    enunciado: "Comparando enfoques, ¿qué explica mejor la paramagnetismo de O₂?",
    correcta: "La teoría de OM, por la ocupación de π* con electrones desapareados",
    incorrectas: [
      "La teoría de valencia con enlaces localizados sin resonancia",
      "VSEPR exclusivamente, por conteo de pares"
    ]
  },
  {
    enunciado: "¿Qué efecto produce poblar un orbital antienlazante en una molécula?",
    correcta: "Debilita el enlace, alarga la longitud y reduce la energía de disociación",
    incorrectas: [
      "Fortalece el enlace y acorta la longitud",
      "No tiene efecto observable sobre la longitud de enlace"
    ]
  },
  {
    enunciado: "¿Qué ocurre con la fortaleza del enlace al promover un electrón desde un OM enlazante a uno antienlazante por excitación electrónica?",
    correcta: "El orden de enlace disminuye y el enlace se debilita",
    incorrectas: [
      "El orden de enlace aumenta y el enlace se refuerza",
      "No cambia el orden de enlace en absoluto"
    ]
  },
  {
    enunciado: "En moléculas heteronucleares, ¿qué tendencia general sigue la localización de los OM antienlazantes de menor energía?",
    correcta: "Presentan mayor contribución del átomo menos electronegativo",
    incorrectas: [
      "Se localizan siempre en el átomo más electronegativo",
      "Se reparten por igual sin dependencia de electronegatividad"
    ]
  },
  {
    enunciado: "¿Qué condición de compatibilidad deben cumplir los OA que se combinan en LCAO?",
    correcta: "Tener simetría compatible y energías relativamente próximas",
    incorrectas: [
      "Tener número cuántico principal idéntico",
      "Ser necesariamente del mismo tipo (s con s, p con p) sin excepciones"
    ]
  },
  {
    enunciado: "¿Puede formarse un OM σ a partir de solapamiento s–p?",
    correcta: "Sí, si el lóbulo p se orienta a lo largo del eje internuclear",
    incorrectas: [
      "No, los σ solo pueden surgir de s–s",
      "Solo en moléculas heteronucleares pesadas"
    ]
  },
  {
    enunciado: "¿Qué define inequívocamente a un OM antienlazante en términos de la función de onda?",
    correcta: "La existencia de un nodo entre los núcleos que reduce la densidad internuclear",
    incorrectas: [
      "Una densidad internuclear máxima",
      "Una energía siempre inferior a la de los OA de partida"
    ]
  },
  {
    enunciado: "¿Cuál es el orden de enlace y el magnetismo de N₂ según OM simples?",
    correcta: "Orden de enlace 3 y diamagnetismo",
    incorrectas: [
      "Orden de enlace 2 y paramagnetismo",
      "Orden de enlace 1 y ferromagnetismo"
    ]
  },
  {
    enunciado: "Comparando N₂ y F₂, ¿por qué F₂ posee un enlace mucho más débil?",
    correcta: "Porque su orden de enlace es 1 y hay mayores repulsiones electrónicas en p–p",
    incorrectas: [
      "Porque F₂ es lineal mientras N₂ no lo es",
      "Porque F es menos electronegativo que N"
    ]
  },
  {
    enunciado: "¿Qué característica electrónica explica que NO sea paramagnético?",
    correcta: "Posee un número impar de electrones con uno desapareado en OM de baja energía",
    incorrectas: [
      "Tiene todos los electrones apareados en OM enlazantes",
      "Su geometría lineal obliga a ser diamagnético"
    ]
  },
  {
    enunciado: "¿Qué predice el modelo de OM acerca de B₂?",
    correcta: "Paramagnetismo por dos electrones desapareados en π2p",
    incorrectas: [
      "Diamagnetismo por llenado completo de π2p",
      "Inestabilidad absoluta por orden de enlace 0"
    ]
  },
  {
    enunciado: "¿Por qué el eteno (etileno) es planar y no rota libremente alrededor del doble enlace?",
    correcta: "Porque el enlace π se rompería al rotar, imponiendo planaridad y barrera de rotación alta",
    incorrectas: [
      "Porque los enlaces σ impiden cualquier rotación en toda molécula",
      "Porque VSEPR prohíbe rotaciones en geometría trigonal"
    ]
  },
  {
    enunciado: "En butadieno, ¿qué se observa respecto a las longitudes de enlace centrales por conjugación?",
    correcta: "Son intermedias entre simple y doble por deslocalización π",
    incorrectas: [
      "Son más largas que un enlace simple típico",
      "Son idénticas a un doble enlace aislado"
    ]
  },
  {
    enunciado: "Según VSEPR, ¿qué geometría adopta SF₆ alrededor del azufre?",
    correcta: "Octaédrica con seis dominios enlazantes",
    incorrectas: [
      "Trigonal bipiramidal",
      "Tetraédrica"
    ]
  },
  {
    enunciado: "¿Qué relación cualitativa existe entre orden de enlace, longitud y energía de enlace para una misma pareja de átomos?",
    correcta: "Mayor orden de enlace → menor longitud y mayor energía de enlace",
    incorrectas: [
      "Mayor orden de enlace → mayor longitud y menor energía",
      "No hay relación entre estas magnitudes"
    ]
  }
];
