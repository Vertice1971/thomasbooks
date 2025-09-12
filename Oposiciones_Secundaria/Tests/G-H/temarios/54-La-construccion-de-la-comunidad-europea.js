// temarios/54-La-construccion-de-la-comunidad-europea.js
var PREGUNTAS = [
  {
    enunciado: "¿Cuál fue la principal motivación de la construcción de la Comunidad Europea tras la Segunda Guerra Mundial?",
    correcta: "Garantizar la paz, la estabilidad y la prosperidad en Europa",
    incorrectas: [
      "Recuperar el antiguo Imperio Romano",
      "Imponer un sistema socialista a escala continental"
    ]
  },
  {
    enunciado: "¿Qué líder británico pronunció en 1946 un discurso defendiendo los 'Estados Unidos de Europa'?",
    correcta: "Winston Churchill",
    incorrectas: [
      "Charles de Gaulle",
      "Jean Monnet"
    ]
  },
  {
    enunciado: "¿Qué institución se creó en 1949 como primer paso hacia la cooperación europea?",
    correcta: "El Consejo de Europa",
    incorrectas: [
      "El Banco Central Europeo",
      "El Parlamento Europeo"
    ]
  },
  {
    enunciado: "¿Qué significan las siglas CECA?",
    correcta: "Comunidad Europea del Carbón y del Acero",
    incorrectas: [
      "Comunidad Económica del Comercio Agrícola",
      "Confederación Europea de los Acuerdos Aduaneros"
    ]
  },
  {
    enunciado: "¿En qué año se firmó el Tratado de Roma?",
    correcta: "1957",
    incorrectas: [
      "1948",
      "1969"
    ]
  },
  {
    enunciado: "¿Qué organizaciones nacieron con los Tratados de Roma?",
    correcta: "La Comunidad Económica Europea y EURATOM",
    incorrectas: [
      "El Banco Central Europeo y el Consejo Europeo",
      "La ONU y la OTAN"
    ]
  },
  {
    enunciado: "¿Cuáles fueron los seis países fundadores de la integración europea?",
    correcta: "Francia, Alemania Occidental, Italia, Bélgica, Países Bajos y Luxemburgo",
    incorrectas: [
      "Reino Unido, Francia, Italia, España, Portugal y Grecia",
      "Dinamarca, Suecia, Noruega, Finlandia, Austria y Suiza"
    ]
  },
  {
    enunciado: "¿Qué tratado impulsó la creación del mercado interior único?",
    correcta: "El Acta Única Europea de 1986",
    incorrectas: [
      "El Tratado de Maastricht",
      "El Tratado de Niza"
    ]
  },
  {
    enunciado: "¿Qué tratado fundó formalmente la Unión Europea?",
    correcta: "El Tratado de Maastricht (1992)",
    incorrectas: [
      "El Tratado de Roma (1957)",
      "El Tratado de Lisboa (2007)"
    ]
  },
  {
    enunciado: "¿Qué tres pilares estableció Maastricht?",
    correcta: "Comunitario, Política Exterior y de Seguridad Común, y Cooperación Judicial",
    incorrectas: [
      "Agricultura, Pesca y Medio Ambiente",
      "Educación, Cultura y Turismo"
    ]
  },
  {
    enunciado: "¿Qué tratado introdujo la figura de la ciudadanía europea?",
    correcta: "El Tratado de Maastricht",
    incorrectas: [
      "El Acta Única Europea",
      "El Tratado de Ámsterdam"
    ]
  },
  {
    enunciado: "¿En qué año entró en circulación el euro como moneda física?",
    correcta: "2002",
    incorrectas: [
      "1992",
      "1999"
    ]
  },
  {
    enunciado: "¿Qué ampliación de la CEE incorporó a España y Portugal?",
    correcta: "La de 1986",
    incorrectas: [
      "La de 1973",
      "La de 2004"
    ]
  },
  {
    enunciado: "¿Qué tratado reforzó el poder legislativo del Parlamento Europeo?",
    correcta: "El Tratado de Lisboa (2007)",
    incorrectas: [
      "El Tratado de Versalles (1919)",
      "El Concordato de 1953"
    ]
  },
  {
    enunciado: "¿Cuál es la institución que actúa como 'guardiana de los Tratados'?",
    correcta: "La Comisión Europea",
    incorrectas: [
      "El Tribunal de Cuentas",
      "El Parlamento Europeo"
    ]
  },
  {
    enunciado: "¿Qué institución representa a los Estados miembros en la toma de decisiones?",
    correcta: "El Consejo de la Unión Europea",
    incorrectas: [
      "El Consejo de Seguridad",
      "El Consejo de Sabios Europeos"
    ]
  },
  {
    enunciado: "¿Qué organismo gestiona la política monetaria del euro?",
    correcta: "El Banco Central Europeo",
    incorrectas: [
      "La Comisión Europea",
      "El Tribunal de Justicia"
    ]
  },
  {
    enunciado: "¿Qué política común ha sido central en la integración desde los años 60?",
    correcta: "La Política Agraria Común (PAC)",
    incorrectas: [
      "La Política Espacial Común",
      "La Política Cultural Unificada"
    ]
  },
  {
    enunciado: "¿Qué objetivo tienen los fondos de cohesión europeos?",
    correcta: "Reducir las desigualdades regionales entre los Estados miembros",
    incorrectas: [
      "Financiar campañas militares",
      "Crear una unión fiscal global"
    ]
  },
  {
    enunciado: "¿Qué tratado sustituyó el fallido proyecto de Constitución Europea?",
    correcta: "El Tratado de Lisboa",
    incorrectas: [
      "El Tratado de Niza",
      "El Tratado de Ámsterdam"
    ]
  },
  {
    enunciado: "¿Qué crisis marcó el inicio del euroescepticismo en la UE?",
    correcta: "La crisis financiera de 2008",
    incorrectas: [
      "La guerra de Corea",
      "La creación de la ONU"
    ]
  },
  {
    enunciado: "¿Qué país decidió salir de la Unión Europea en 2016?",
    correcta: "Reino Unido",
    incorrectas: [
      "Dinamarca",
      "Suecia"
    ]
  },
  {
    enunciado: "¿En qué año se hizo efectivo el Brexit?",
    correcta: "2020",
    incorrectas: [
      "2016",
      "2018"
    ]
  },
  {
    enunciado: "¿Qué organización internacional surgida en 1945 inspiró la cooperación europea?",
    correcta: "La ONU",
    incorrectas: [
      "La OTAN",
      "El FMI"
    ]
  },
  {
    enunciado: "¿Qué movimiento obrero y social favoreció la idea de unidad europea tras 1945?",
    correcta: "El europeísmo promovido en el Congreso de La Haya",
    incorrectas: [
      "La Internacional Comunista",
      "El Bloque del Este"
    ]
  },
  {
    enunciado: "¿Qué tratado adaptó la UE a las ampliaciones hacia el Este?",
    correcta: "El Tratado de Niza (2000)",
    incorrectas: [
      "El Tratado de Roma",
      "El Tratado de Maastricht"
    ]
  },
  {
    enunciado: "¿Qué tratado reformó el sistema de votación en el Consejo Europeo?",
    correcta: "El Tratado de Lisboa",
    incorrectas: [
      "El Tratado de Maastricht",
      "El Acta Única Europea"
    ]
  },
  {
    enunciado: "¿Qué concepto se asocia al libre movimiento dentro de la UE?",
    correcta: "Las cuatro libertades: personas, bienes, servicios y capitales",
    incorrectas: [
      "Los cuatro privilegios medievales",
      "Los cuatro acuerdos de paz de Versalles"
    ]
  },
  {
    enunciado: "¿Qué tribunal vela por la interpretación uniforme del derecho europeo?",
    correcta: "El Tribunal de Justicia de la UE",
    incorrectas: [
      "El Tribunal Constitucional de cada país",
      "El Tribunal Penal Internacional"
    ]
  },
  {
    enunciado: "¿Qué ampliación de la UE en 2004 fue especialmente significativa?",
    correcta: "La incorporación de diez países de Europa Central y del Este",
    incorrectas: [
      "La entrada de España y Portugal",
      "La adhesión de Croacia"
    ]
  },
  {
    enunciado: "¿Qué país se incorporó en 2013 como el miembro número 28?",
    correcta: "Croacia",
    incorrectas: [
      "Turquía",
      "Suiza"
    ]
  },
  {
    enunciado: "¿Qué ideal ilustrado influyó en la integración europea?",
    correcta: "El proyecto de paz perpetua de Kant",
    incorrectas: [
      "El contrato social de Rousseau",
      "La riqueza de las naciones de Adam Smith"
    ]
  },
  {
    enunciado: "¿Qué corriente defiende una Europa de Estados soberanos más que una supranacional?",
    correcta: "El intergubernamentalismo",
    incorrectas: [
      "El federalismo",
      "El funcionalismo"
    ]
  },
  {
    enunciado: "¿Qué símbolo cultural representa la unidad de Europa en el euro?",
    correcta: "Los puentes y ventanas en sus billetes",
    incorrectas: [
      "Las banderas de cada país miembro",
      "Las caras de los presidentes europeos"
    ]
  },
  {
    enunciado: "¿Qué bandera simboliza la Unión Europea?",
    correcta: "Un círculo de doce estrellas doradas sobre fondo azul",
    incorrectas: [
      "Un mapa de Europa sobre fondo blanco",
      "Una cruz roja sobre fondo azul"
    ]
  },
  {
    enunciado: "¿Qué himno representa a la UE?",
    correcta: "La 'Oda a la Alegría' de Beethoven",
    incorrectas: [
      "La Marsellesa",
      "El Himno de la Alegría de Miguel Ríos"
    ]
  },
  {
    enunciado: "¿Qué crisis reciente ha puesto a prueba la solidaridad europea?",
    correcta: "La pandemia de COVID-19",
    incorrectas: [
      "La guerra de Vietnam",
      "La crisis del Canal de Suez"
    ]
  },
  {
    enunciado: "¿Qué conflicto actual refuerza el debate sobre la autonomía estratégica europea?",
    correcta: "La guerra en Ucrania",
    incorrectas: [
      "La guerra de Irak",
      "La guerra civil en Siria"
    ]
  },
  {
    enunciado: "¿Qué filósofo alemán ha defendido una Europa posnacional?",
    correcta: "Jürgen Habermas",
    incorrectas: [
      "Karl Popper",
      "Friedrich Nietzsche"
    ]
  }
];
