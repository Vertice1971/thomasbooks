// temarios/45-Las-transformaciones-del-extremo-oriente-desde-1886-a-1949.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué acontecimiento marca el inicio del periodo estudiado en Japón?",
    correcta: "La Restauración Meiji de 1868",
    incorrectas: [
      "La Revolución Taiping de 1850",
      "La proclamación de la República de China en 1912"
    ]
  },
  {
    enunciado: "¿Qué régimen fue reemplazado en Japón con la Restauración Meiji?",
    correcta: "El shogunato Tokugawa",
    incorrectas: [
      "La dinastía Qing",
      "La monarquía constitucional Taishō"
    ]
  },
  {
    enunciado: "¿Qué finalidad tuvo la modernización Meiji en términos políticos?",
    correcta: "Centralizar el poder bajo el emperador y crear un Estado nacional",
    incorrectas: [
      "Restaurar el sistema feudal de daimyōs",
      "Implantar una teocracia budista"
    ]
  },
  {
    enunciado: "¿En qué año promulgó Japón su Constitución imperial durante la Era Meiji?",
    correcta: "1889",
    incorrectas: [
      "1868",
      "1905"
    ]
  },
  {
    enunciado: "¿Cómo se denomina a los grandes conglomerados industriales y financieros surgidos en Japón a finales del XIX?",
    correcta: "Zaibatsu",
    incorrectas: [
      "Sōgō shōsha",
      "Keiretsu"
    ]
  },
  {
    enunciado: "¿Qué guerra enfrentó a Japón y China entre 1894 y 1895?",
    correcta: "La Primera Guerra Sino-Japonesa",
    incorrectas: [
      "La Segunda Guerra Sino-Japonesa",
      "La Guerra Ruso-Japonesa"
    ]
  },
  {
    enunciado: "¿Qué territorio obtuvo Japón de China tras el Tratado de Shimonoseki (1895)?",
    correcta: "Taiwán (Formosa)",
    incorrectas: [
      "Sajalín meridional",
      "Hokkaidō"
    ]
  },
  {
    enunciado: "¿Cuál fue el resultado internacional más destacado de la Guerra Ruso-Japonesa (1904–1905)?",
    correcta: "El reconocimiento de Japón como gran potencia",
    incorrectas: [
      "La anexión japonesa de Mongolia",
      "La retirada japonesa de Corea"
    ]
  },
  {
    enunciado: "¿En qué año anexionó Japón la península de Corea?",
    correcta: "1910",
    incorrectas: [
      "1895",
      "1921"
    ]
  },
  {
    enunciado: "¿Qué rasgo caracterizó a la llamada 'Democracia Taishō' (1912–1926) en Japón?",
    correcta: "Cierta apertura política y auge de partidos parlamentarios",
    incorrectas: [
      "Supresión total del parlamento",
      "Restauración del shogunato"
    ]
  },
  {
    enunciado: "¿Qué episodio dio inicio a la ocupación japonesa de Manchuria en 1931?",
    correcta: "El Incidente de Mukden",
    incorrectas: [
      "El Incidente del Puente de Marco Polo",
      "La crisis de los 21 Exigencias"
    ]
  },
  {
    enunciado: "¿Qué estado títere estableció Japón en Manchuria en 1932?",
    correcta: "Manchukuo",
    incorrectas: [
      "Corea del Sur",
      "Formosa Libre"
    ]
  },
  {
    enunciado: "¿Qué hecho desencadenó a gran escala la Segunda Guerra Sino-Japonesa en 1937?",
    correcta: "El Incidente del Puente de Marco Polo",
    incorrectas: [
      "La firma del Pacto Antikomintern",
      "El Incidente de Mukden"
    ]
  },
  {
    enunciado: "¿Qué masacre perpetró el ejército japonés en 1937 durante la guerra en China?",
    correcta: "La masacre de Nankín",
    incorrectas: [
      "La masacre de Port Arthur",
      "La masacre de Guangzhou"
    ]
  },
  {
    enunciado: "¿Qué conferencia internacional limitó la capacidad naval japonesa en la década de 1920?",
    correcta: "La Conferencia de Washington (1921–1922)",
    incorrectas: [
      "La Conferencia de Potsdam",
      "La Conferencia de París de 1919"
    ]
  },
  {
    enunciado: "¿Qué documento de 1945 estableció los términos de la rendición de Japón?",
    correcta: "La Declaración de Potsdam",
    incorrectas: [
      "La Carta del Atlántico",
      "El Tratado de San Francisco"
    ]
  },
  {
    enunciado: "¿Qué autoridad dirigió la ocupación aliada en Japón tras 1945?",
    correcta: "El SCAP bajo el general Douglas MacArthur",
    incorrectas: [
      "La Sociedad de Naciones",
      "El Gobierno Provisional de Tokio"
    ]
  },
  {
    enunciado: "¿Qué dinastía gobernaba China antes de la Revolución de 1911?",
    correcta: "La dinastía Qing",
    incorrectas: [
      "La dinastía Ming",
      "La dinastía Yuan"
    ]
  },
  {
    enunciado: "¿Qué intentos de reforma fracasaron en China a finales del siglo XIX?",
    correcta: "El Movimiento de Autofortalecimiento y las Reformas de los Cien Días",
    incorrectas: [
      "La Gran Revolución Cultural",
      "Las Reformas de los Cinco Puntos"
    ]
  },
  {
    enunciado: "¿Quién es considerado el principal líder intelectual de la Revolución de 1911 en China?",
    correcta: "Sun Yat-sen",
    incorrectas: [
      "Yuan Shikai",
      "Li Hongzhang"
    ]
  },
  {
    enunciado: "¿En qué año abdicó el último emperador de China, Puyi?",
    correcta: "1912",
    incorrectas: [
      "1905",
      "1916"
    ]
  },
  {
    enunciado: "¿Qué periodo siguió en China a la caída de la monarquía, caracterizado por la fragmentación regional?",
    correcta: "La era de los caudillos militares (warlords)",
    incorrectas: [
      "La Gran Unificación de Yuan",
      "La República Popular"
    ]
  },
  {
    enunciado: "¿Qué movimiento estudiantil y cultural marcó un punto de inflexión nacionalista en 1919?",
    correcta: "El Movimiento del 4 de Mayo",
    incorrectas: [
      "El Movimiento del 1 de Octubre",
      "El Movimiento del 1 de Mayo"
    ]
  },
  {
    enunciado: "¿Qué partido nacionalista unificó parcialmente China con la Expedición del Norte (1926–1928)?",
    correcta: "El Kuomintang (KMT)",
    incorrectas: [
      "El Partido Comunista Chino (PCC)",
      "El Partido Liberal Chino"
    ]
  },
  {
    enunciado: "¿En qué año se fundó el Partido Comunista Chino?",
    correcta: "1921",
    incorrectas: [
      "1911",
      "1935"
    ]
  },
  {
    enunciado: "¿Qué acontecimiento clave del PCC tuvo lugar entre 1934 y 1935?",
    correcta: "La Larga Marcha",
    incorrectas: [
      "La Revolución Cultural",
      "La Comuna de Guangzhou"
    ]
  },
  {
    enunciado: "¿Qué nombre recibe la alianza táctica KMT–PCC contra Japón a partir de 1937?",
    correcta: "Segundo Frente Unido",
    incorrectas: [
      "Frente del Norte",
      "Pacto Nacional"
    ]
  },
  {
    enunciado: "¿Qué proclamó Mao Zedong en Beijing el 1 de octubre de 1949?",
    correcta: "La República Popular China",
    incorrectas: [
      "La Unión de Repúblicas Asiáticas",
      "La Federación Popular de China"
    ]
  },
  {
    enunciado: "¿Qué dirigente del KMT lideró el gobierno nacionalista chino durante gran parte de los años 1930–1940?",
    correcta: "Chiang Kai-shek",
    incorrectas: [
      "Zhou Enlai",
      "Peng Dehuai"
    ]
  },
  {
    enunciado: "¿Qué documento japonés de 1915 buscó ampliar privilegios en China durante la Primera Guerra Mundial?",
    correcta: "Las Veintiuna Exigencias",
    incorrectas: [
      "El Tratado de Portsmouth",
      "El Tratado de Shimonoseki"
    ]
  },
  {
    enunciado: "¿Qué tratado puso fin a la Guerra Ruso-Japonesa en 1905?",
    correcta: "El Tratado de Portsmouth",
    incorrectas: [
      "El Tratado de Nankín",
      "El Tratado de Kanghwa"
    ]
  },
  {
    enunciado: "¿Qué incidente de 1937 marcó el inicio formal de las hostilidades abiertas entre China y Japón?",
    correcta: "El Incidente del Puente de Marco Polo",
    incorrectas: [
      "El Incidente de Shanghai",
      "El Incidente de Mukden"
    ]
  },
  {
    enunciado: "¿Qué papel desempeñó Corea en la expansión japonesa previa a 1945?",
    correcta: "Fue colonia japonesa desde 1910",
    incorrectas: [
      "Fue protectorado británico desde 1900",
      "Se mantuvo neutral y no ocupada"
    ]
  },
  {
    enunciado: "¿Qué proceso vivió el Sudeste Asiático durante 1941–1945 que favoreció los nacionalismos locales?",
    correcta: "La ocupación japonesa de colonias europeas",
    incorrectas: [
      "La descolonización total bajo la ONU",
      "La formación de una confederación regional"
    ]
  },
  {
    enunciado: "¿Qué líder vietnamita proclamó la independencia en 1945 tras la derrota japonesa?",
    correcta: "Ho Chi Minh",
    incorrectas: [
      "Ngo Dinh Diem",
      "Phan Bội Châu"
    ]
  },
  {
    enunciado: "¿Qué transformación económica fue prioritaria en la modernización Meiji?",
    correcta: "La industrialización acelerada apoyada por el Estado",
    incorrectas: [
      "La autarquía agraria",
      "La sustitución del comercio exterior por trueque"
    ]
  },
  {
    enunciado: "¿Qué característica explica la desigual modernización china respecto a la japonesa en este periodo?",
    correcta: "La combinación de presiones externas y fragmentación política interna",
    incorrectas: [
      "La expansión colonial china en Europa",
      "La inexistencia de movimientos reformistas"
    ]
  },
  {
    enunciado: "¿Qué factor ideológico ganó fuerza en China tras 1919 influyendo en intelectuales y obreros?",
    correcta: "El marxismo",
    incorrectas: [
      "El absolutismo imperial",
      "El feudalismo confuciano"
    ]
  },
  {
    enunciado: "¿Qué rasgo geopolítico del periodo 1868–1949 en Asia Oriental impactó al orden mundial del siglo XX?",
    correcta: "El ascenso japonés y la revolución china reconfiguraron el equilibrio global",
    incorrectas: [
      "La retirada europea total de Asia antes de 1914",
      "La consolidación de un bloque asiático monárquico"
    ]
  }
];
