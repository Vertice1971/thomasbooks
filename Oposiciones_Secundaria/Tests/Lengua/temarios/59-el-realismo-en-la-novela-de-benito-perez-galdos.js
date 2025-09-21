// temarios/59-el-realismo-en-la-novela-de-benito-perez-galdos.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué rasgo sintetiza mejor el realismo de Galdós?",
    correcta: "Observación verosímil y crítica de la sociedad contemporánea con amplitud coral",
    incorrectas: [
      "Evasión mitológica y alegórica como principio",
      "Idealización caballeresca sin referente social"
    ]
  },
  {
    enunciado: "¿Cómo suele configurarse la voz narrativa en sus novelas?",
    correcta: "Omnisciente dúctil con ironía y cambios de focalización",
    incorrectas: [
      "Segunda persona imperativa constante",
      "Ausencia de narrador y sólo diálogos"
    ]
  },
  {
    enunciado: "¿Qué técnica permite fusionar la voz del narrador con la conciencia del personaje?",
    correcta: "Discurso/estilo indirecto libre",
    incorrectas: [
      "Verso blanco",
      "Monólogo dramático en segunda persona"
    ]
  },
  {
    enunciado: "¿Qué función adquiere Madrid en el sistema narrativo galdosiano?",
    correcta: "Organismo social que estructura clases, oficios, comercio y política",
    incorrectas: [
      "Escenario neutro sin valor simbólico",
      "Paisaje pastoril atemporal"
    ]
  },
  {
    enunciado: "¿Qué ciudad ficticia simboliza el integrismo provincial en una novela de tesis?",
    correcta: "Orbajosa, en Doña Perfecta",
    incorrectas: [
      "Vetusta, en La Regenta",
      "Comala, en Pedro Páramo"
    ]
  },
  {
    enunciado: "¿Qué novela galdosiana explora la burocracia, el funcionariado y el fracaso administrativo?",
    correcta: "Miau",
    incorrectas: [
      "La barraca",
      "Juanita la Larga"
    ]
  },
  {
    enunciado: "¿Qué eje temático articula Tristana?",
    correcta: "Emancipación femenina y conflicto entre deseo, tutela y norma",
    incorrectas: [
      "Aventura marinera y colonización",
      "Caballería medieval y cruzadas"
    ]
  },
  {
    enunciado: "¿Quién es la figura central de Misericordia y qué encarna?",
    correcta: "Benina, caridad y compasión en la miseria urbana",
    incorrectas: [
      "Fortunata, hedonismo aristocrático",
      "Ana, feudalismo heroico"
    ]
  },
  {
    enunciado: "¿Qué rasgo define a Isidora Rufete en La desheredada?",
    correcta: "Delirio de linaje y ascenso social frustrado",
    incorrectas: [
      "Santidad milagrosa y retiro ascético",
      "Alta alcurnia heredada sin conflicto"
    ]
  },
  {
    enunciado: "¿Cuál es el núcleo temático de Fortunata y Jacinta?",
    correcta: "Amor y maternidad en tensión con clase, dinero y moral burguesa",
    incorrectas: [
      "Guerra medieval entre linajes",
      "Utopía pastoril sin conflicto social"
    ]
  },
  {
    enunciado: "¿Qué retrata La de Bringas de modo privilegiado?",
    correcta: "El consumo, la apariencia y la economía doméstica cortesana",
    incorrectas: [
      "La épica del Descubrimiento",
      "La vida en un monasterio del Siglo de Oro"
    ]
  },
  {
    enunciado: "¿Qué peculiaridad presenta El amigo Manso?",
    correcta: "Narrador-protagonista reflexivo que problematiza la educación y la vida urbana",
    incorrectas: [
      "Poema épico en endecasílabos",
      "Teatro alegórico en autos sacramentales"
    ]
  },
  {
    enunciado: "¿Cómo se describe, sin entrar en detalles argumentales, Tormento?",
    correcta: "Novela de conflicto moral y sentimental en la clase media madrileña",
    incorrectas: [
      "Epopeya colonial de ultramar",
      "Leyenda medieval rimada"
    ]
  },
  {
    enunciado: "¿Cómo asimila Galdós el Naturalismo francés?",
    correcta: "Adopta observación y documentación, pero matiza el determinismo con ética y compasión",
    incorrectas: [
      "Radicaliza el determinismo biológico sin fisuras",
      "Lo rechaza por completo y vuelve al barroco culterano"
    ]
  },
  {
    enunciado: "¿Qué autores funcionan como referencias europeas para Galdós?",
    correcta: "Balzac y Dickens, junto a la tradición cervantina",
    incorrectas: [
      "Homer y Virgilio en exclusivo",
      "Mallarmé y Valéry como únicos modelos"
    ]
  },
  {
    enunciado: "¿Qué propósito vertebra los Episodios nacionales?",
    correcta: "Contar el siglo XIX español cruzando historia y ficción",
    incorrectas: [
      "Reescribir mitos griegos en clave bucólica",
      "Ofrecer un manual de métrica latina"
    ]
  },
  {
    enunciado: "¿Cuántas series componen los Episodios nacionales?",
    correcta: "Cinco series",
    incorrectas: [
      "Dos series",
      "Diez series"
    ]
  },
  {
    enunciado: "¿Cuál de estos títulos pertenece a los Episodios nacionales (primera serie)?",
    correcta: "Trafalgar",
    incorrectas: [
      "Fortunata y Jacinta",
      "La madre naturaleza"
    ]
  },
  {
    enunciado: "¿Qué giro temático se advierte en Nazarín y Halma?",
    correcta: "Viraje espiritual y compasivo con crítica social",
    incorrectas: [
      "Paso al lirismo pastoril sin problemas",
      "Abandono del realismo por la ciencia ficción"
    ]
  },
  {
    enunciado: "¿Qué organización temporal y estructural es frecuente en sus novelas?",
    correcta: "Alternancia de escenas y sumarios con progresión cronológica verosímil",
    incorrectas: [
      "Secuencias oníricas sin causalidad",
      "Estructuras aleatorias basadas en sorteo"
    ]
  },
  {
    enunciado: "¿Cómo utiliza Galdós el habla y los registros?",
    correcta: "Integra sociolectos y oralidad para caracterizar clase y oficio",
    incorrectas: [
      "Uniformiza el habla con latín arcaico",
      "Evita el diálogo por norma"
    ]
  },
  {
    enunciado: "¿Para qué sirve el humor y la ironía en su prosa?",
    correcta: "Para desvelar hipocresías y modular la crítica sin dogmatismo",
    incorrectas: [
      "Para ocultar todo juicio moral",
      "Para ridiculizar a los pobres sistemáticamente"
    ]
  },
  {
    enunciado: "¿Qué lugar ocupan los personajes femeninos en su narrativa?",
    correcta: "Eje de conflictos de deseo, norma, trabajo y maternidad",
    incorrectas: [
      "Figuras decorativas sin agencia",
      "Sólo villanas o santas sin matices"
    ]
  },
  {
    enunciado: "¿Qué papel desempeña el dinero en el mundo novelesco galdosiano?",
    correcta: "Fuerza estructurante de vínculos y apariencias",
    incorrectas: [
      "Elemento irrelevante y accesorio",
      "Símbolo mágico sin relación económica"
    ]
  },
  {
    enunciado: "¿Cómo se diferencian las primeras novelas de tesis de las ‘novelas contemporáneas’?",
    correcta: "Las primeras polarizan el conflicto ideológico; las segundas amplían lo coral y lo psicológico",
    incorrectas: [
      "Las primeras son en verso; las segundas, en prosa",
      "Las primeras son medievales; las segundas, mitológicas"
    ]
  },
  {
    enunciado: "¿Cuál NO es novela de Galdós?",
    correcta: "La Regenta",
    incorrectas: [
      "Misericordia",
      "Doña Perfecta"
    ]
  },
  {
    enunciado: "¿Qué cuarteto de personajes articula Fortunata y Jacinta?",
    correcta: "Fortunata, Jacinta, Juanito Santa Cruz y Maxi Rubín",
    incorrectas: [
      "Ana Ozores, Fermín de Pas, Álvaro Mesía y Visitación",
      "Pepita, Don Luis de Vargas, Tristana y Don Lope"
    ]
  },
  {
    enunciado: "¿Qué recurso espacial refuerza la sensación de red social en Madrid?",
    correcta: "La cartografía de calles, comercios e interiores domésticos",
    incorrectas: [
      "Grandes desiertos simbólicos",
      "Paisajes alpinos sin urbe"
    ]
  },
  {
    enunciado: "¿Qué relación mantuvo su obra con la serialización y la prensa?",
    correcta: "Se benefició de la publicación por entregas y el folletín",
    incorrectas: [
      "Rechazó cualquier publicación periódica",
      "Sólo publicó en volúmenes de lujo"
    ]
  },
  {
    enunciado: "¿Qué aborda Gloria sin necesidad de entrar en detalles de trama?",
    correcta: "Un conflicto religioso e ideológico propio de la época",
    incorrectas: [
      "Una epopeya marítima fantástica",
      "Un manual de retórica clásica"
    ]
  },
  {
    enunciado: "¿Cómo puede definirse El caballero encantado dentro del conjunto tardío?",
    correcta: "Novela alegórica de intención regeneradora",
    incorrectas: [
      "Poema épico sobre cruzados",
      "Tratado de métrica latina"
    ]
  },
  {
    enunciado: "¿Qué afirmación técnica es correcta sobre Galdós?",
    correcta: "Emplea con frecuencia el indirecto libre en pasajes de conciencia",
    incorrectas: [
      "Evita cualquier filtrado de la conciencia",
      "Escribe mayormente en verso blanco"
    ]
  },
  {
    enunciado: "¿Qué define mejor Fortunata y Jacinta en términos de forma y contenido?",
    correcta: "Fresco social polifónico con contrapuntos de clase y género",
    incorrectas: [
      "Novela pastoril idealizada",
      "Fábula alegórica en alejandrinos"
    ]
  },
  {
    enunciado: "¿Qué función tienen los personajes recurrentes en su universo narrativo?",
    correcta: "Cohesionan un mundo común y permiten tramas entrecruzadas",
    incorrectas: [
      "Impedir la continuidad entre novelas",
      "Eliminar la verosimilitud"
    ]
  },
  {
    enunciado: "¿Cómo se ha caracterizado su realismo desde una perspectiva ética?",
    correcta: "Realismo compasivo: crítica social con atención a la dignidad humana",
    incorrectas: [
      "Realismo cínico sin empatía posible",
      "Realismo mágico con milagros frecuentes"
    ]
  },
  {
    enunciado: "¿Qué obra galdosiana sitúa de modo central a la familia Santa Cruz en la red madrileña?",
    correcta: "Fortunata y Jacinta",
    incorrectas: [
      "El sombrero de tres picos",
      "La tía Tula"
    ]
  },
  {
    enunciado: "¿Qué novela retrata la obsesión por la apariencia y el gasto en la corte isabelina final?",
    correcta: "La de Bringas",
    incorrectas: [
      "Su único hijo",
      "Peñas arriba"
    ]
  },
  {
    enunciado: "¿Qué recurso compositivo, heredero del folletín, dinamiza el avance por capítulos?",
    correcta: "El cierre en suspense (cliffhanger) y la alternancia de hilos",
    incorrectas: [
      "La numeración aleatoria de páginas",
      "La supresión de toda intriga"
    ]
  },
  {
    enunciado: "¿Qué es correcto sobre los Episodios nacionales en su procedimiento narrativo?",
    correcta: "Cruzan figuras ficticias con hechos y personajes históricos del XIX",
    incorrectas: [
      "Son poesía épica en latín",
      "Reescriben milagros medievales en verso"
    ]
  }
];
