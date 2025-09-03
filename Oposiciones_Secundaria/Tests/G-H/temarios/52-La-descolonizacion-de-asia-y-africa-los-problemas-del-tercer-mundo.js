// temarios/52-La-descolonizacion-de-asia-y-africa-los-problemas-del-tercer-mundo.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué factor interno impulsó la descolonización en Asia y África?",
    correcta: "El auge de los movimientos nacionalistas",
    incorrectas: [
      "La ausencia de conflictos sociales",
      "La industrialización previa de las colonias"
    ]
  },
  {
    enunciado: "¿Qué resolución de la ONU en 1960 proclamó el derecho de los pueblos coloniales a la independencia?",
    correcta: "La Resolución 1514",
    incorrectas: [
      "La Carta de San Francisco",
      "La Declaración Universal de Derechos Humanos"
    ]
  },
  {
    enunciado: "¿Qué líder indio promovió la independencia mediante la desobediencia civil y la no violencia?",
    correcta: "Mahatma Gandhi",
    incorrectas: [
      "Jawaharlal Nehru",
      "Subhas Chandra Bose"
    ]
  },
  {
    enunciado: "¿En qué año lograron India y Pakistán su independencia del Reino Unido?",
    correcta: "1947",
    incorrectas: [
      "1950",
      "1945"
    ]
  },
  {
    enunciado: "¿Qué país africano se convirtió en el primero en alcanzar la independencia en 1957?",
    correcta: "Ghana",
    incorrectas: [
      "Nigeria",
      "Sudán"
    ]
  },
  {
    enunciado: "¿Qué dirigente de Ghana se convirtió en símbolo del panafricanismo?",
    correcta: "Kwame Nkrumah",
    incorrectas: [
      "Julius Nyerere",
      "Haile Selassie"
    ]
  },
  {
    enunciado: "¿Qué guerra de independencia enfrentó a Francia con un movimiento nacionalista entre 1954 y 1962?",
    correcta: "La guerra de Argelia",
    incorrectas: [
      "La guerra de Suez",
      "La guerra de Indochina"
    ]
  },
  {
    enunciado: "¿Qué conflicto obligó a Francia a retirarse de Indochina en 1954?",
    correcta: "La derrota en Dien Bien Phu",
    incorrectas: [
      "La invasión japonesa de 1941",
      "La crisis de Suez"
    ]
  },
  {
    enunciado: "¿Qué conferencia en 1955 marcó el inicio del Movimiento de Países No Alineados?",
    correcta: "La Conferencia de Bandung",
    incorrectas: [
      "La Conferencia de Yalta",
      "La Conferencia de Potsdam"
    ]
  },
  {
    enunciado: "¿Qué líderes participaron en la Conferencia de Bandung?",
    correcta: "Nehru, Nasser y Sukarno",
    incorrectas: [
      "Churchill, Roosevelt y Stalin",
      "De Gaulle, Adenauer y Truman"
    ]
  },
  {
    enunciado: "¿Qué declaración fundó el Movimiento de Países No Alineados en 1961?",
    correcta: "La Declaración de Belgrado",
    incorrectas: [
      "La Declaración de San Francisco",
      "La Declaración de París"
    ]
  },
  {
    enunciado: "¿Qué país africano logró su independencia tras la revuelta Mau Mau?",
    correcta: "Kenia",
    incorrectas: [
      "Sudáfrica",
      "Somalia"
    ]
  },
  {
    enunciado: "¿Qué país africano alcanzó la independencia en 1990, siendo uno de los últimos?",
    correcta: "Namibia",
    incorrectas: [
      "Zimbabwe",
      "Sudán del Sur"
    ]
  },
  {
    enunciado: "¿En qué año terminó oficialmente el apartheid en Sudáfrica con elecciones libres?",
    correcta: "1994",
    incorrectas: [
      "1989",
      "1990"
    ]
  },
  {
    enunciado: "¿Qué líder egipcio nacionalizó el canal de Suez en 1956?",
    correcta: "Gamal Abdel Nasser",
    incorrectas: [
      "Anwar el-Sadat",
      "Hosni Mubarak"
    ]
  },
  {
    enunciado: "¿Qué características económicas afectaban a la mayoría de países del Tercer Mundo?",
    correcta: "Dependencia de economías monoexportadoras",
    incorrectas: [
      "Diversificación industrial avanzada",
      "Autarquía tecnológica"
    ]
  },
  {
    enunciado: "¿Qué fenómeno demográfico fue característico del Tercer Mundo tras la independencia?",
    correcta: "Un crecimiento demográfico acelerado",
    incorrectas: [
      "Un estancamiento poblacional",
      "Un descenso generalizado de la natalidad"
    ]
  },
  {
    enunciado: "¿Qué organización financiera internacional comenzó a prestar ayuda a los países descolonizados?",
    correcta: "El Fondo Monetario Internacional",
    incorrectas: [
      "La OPEP",
      "El GATT"
    ]
  },
  {
    enunciado: "¿Qué concepto popularizó Alfred Sauvy en 1952 para referirse a los países no alineados?",
    correcta: "Tercer Mundo",
    incorrectas: [
      "Países en desarrollo",
      "Naciones emergentes"
    ]
  },
  {
    enunciado: "¿Qué tipo de regímenes políticos fueron comunes en los Estados africanos tras la independencia?",
    correcta: "Dictaduras militares y partidos únicos",
    incorrectas: [
      "Monarquías constitucionales estables",
      "Democracias consolidadas"
    ]
  },
  {
    enunciado: "¿Qué conflicto africano se asocia con el genocidio de 1994?",
    correcta: "Ruanda",
    incorrectas: [
      "Nigeria",
      "Etiopía"
    ]
  },
  {
    enunciado: "¿Qué término describe la persistencia de la influencia económica de las antiguas potencias coloniales?",
    correcta: "Neocolonialismo",
    incorrectas: [
      "Globalización",
      "Mercantilismo"
    ]
  },
  {
    enunciado: "¿Qué país fue gobernado por el emperador Haile Selassie hasta 1974?",
    correcta: "Etiopía",
    incorrectas: [
      "Sudán",
      "Somalia"
    ]
  },
  {
    enunciado: "¿Qué región asiática quedó dividida en dos Estados hostiles tras la independencia en 1947?",
    correcta: "Cachemira",
    incorrectas: [
      "Indochina",
      "Corea"
    ]
  },
  {
    enunciado: "¿Qué proceso llevó a la independencia de Argelia en 1962?",
    correcta: "Una guerra de liberación nacional contra Francia",
    incorrectas: [
      "Un referéndum pacífico negociado con el Reino Unido",
      "La disolución de la Liga Árabe"
    ]
  },
  {
    enunciado: "¿Qué país asiático se independizó de los Países Bajos en 1949?",
    correcta: "Indonesia",
    incorrectas: [
      "Vietnam",
      "Filipinas"
    ]
  },
  {
    enunciado: "¿Qué país asiático obtuvo la independencia de EE.UU. en 1946?",
    correcta: "Filipinas",
    incorrectas: [
      "Tailandia",
      "Malasia"
    ]
  },
  {
    enunciado: "¿Qué conflicto de 1975 enfrentó a potencias extranjeras en Angola tras la independencia?",
    correcta: "Una guerra civil apoyada por EE.UU. y la URSS",
    incorrectas: [
      "Una invasión británica",
      "Una guerra fronteriza con Sudáfrica"
    ]
  },
  {
    enunciado: "¿Qué país africano fue colonia portuguesa hasta 1975?",
    correcta: "Mozambique",
    incorrectas: [
      "Egipto",
      "Marruecos"
    ]
  },
  {
    enunciado: "¿Qué modelo político aplicó Julius Nyerere en Tanzania?",
    correcta: "El socialismo africano de partido único",
    incorrectas: [
      "El liberalismo económico",
      "El federalismo multiétnico"
    ]
  },
  {
    enunciado: "¿Qué movimiento social denunció la explotación colonial y el racismo en sus escritos?",
    correcta: "El panafricanismo",
    incorrectas: [
      "El surrealismo",
      "El neoclasicismo"
    ]
  },
  {
    enunciado: "¿Qué conflicto bélico de Asia fue al mismo tiempo un episodio de descolonización y Guerra Fría?",
    correcta: "La guerra de Vietnam",
    incorrectas: [
      "La guerra de Corea",
      "La guerra del Golfo"
    ]
  },
  {
    enunciado: "¿Qué organización internacional se convirtió en foro de las nuevas naciones independientes?",
    correcta: "La ONU",
    incorrectas: [
      "La OTAN",
      "La OEA"
    ]
  },
  {
    enunciado: "¿Qué factor social dificultó la estabilidad de los nuevos Estados africanos?",
    correcta: "La diversidad étnica y tribal heredada de fronteras coloniales",
    incorrectas: [
      "La homogeneidad cultural",
      "La abundancia de recursos educativos"
    ]
  },
  {
    enunciado: "¿Qué conferencia estableció el principio de autodeterminación como derecho de los pueblos coloniales?",
    correcta: "La Conferencia de la ONU de 1960",
    incorrectas: [
      "La Conferencia de París de 1919",
      "La Conferencia de Helsinki de 1975"
    ]
  },
  {
    enunciado: "¿Qué problema económico afectó gravemente al Tercer Mundo desde los años 70?",
    correcta: "El endeudamiento externo",
    incorrectas: [
      "El superávit comercial",
      "La autosuficiencia energética"
    ]
  },
  {
    enunciado: "¿Qué país del norte de África consiguió su independencia en 1956 junto con Túnez?",
    correcta: "Marruecos",
    incorrectas: [
      "Libia",
      "Egipto"
    ]
  },
  {
    enunciado: "¿Qué conflicto africano provocó millones de muertos entre 1967 y 1970?",
    correcta: "La guerra de Biafra en Nigeria",
    incorrectas: [
      "La guerra Eritrea-Etiopía",
      "La guerra civil en Sudán"
    ]
  },
  {
    enunciado: "¿Qué término se usa hoy en lugar de Tercer Mundo para describir a los países descolonizados?",
    correcta: "Sur global",
    incorrectas: [
      "Bloque oriental",
      "Países del Atlántico Norte"
    ]
  }
];
