// temarios/51-Repercusiones-de-la-segunda-guerra-mundial-las-relaciones-internacionales-despues-de-1945-la-politica-de-bloques-la-onu.js
var PREGUNTAS = [
  {
    enunciado: "¿Cuál fue una de las consecuencias políticas inmediatas de la Segunda Guerra Mundial?",
    correcta: "La división de Alemania y Austria en zonas de ocupación",
    incorrectas: [
      "La independencia inmediata de todas las colonias africanas",
      "La desaparición del sistema comunista en Europa oriental"
    ]
  },
  {
    enunciado: "¿Qué acuerdos establecieron las bases del nuevo orden internacional en 1945?",
    correcta: "Las conferencias de Yalta y Potsdam",
    incorrectas: [
      "Los tratados de Versalles y Locarno",
      "Los acuerdos de Camp David y Helsinki"
    ]
  },
  {
    enunciado: "¿Qué hecho marcó el inicio de la era nuclear?",
    correcta: "El lanzamiento de bombas atómicas sobre Hiroshima y Nagasaki",
    incorrectas: [
      "La creación del reactor de Chernóbil en 1945",
      "La fundación de la Agencia Internacional de Energía Atómica"
    ]
  },
  {
    enunciado: "¿Qué país quedó bajo ocupación estadounidense y adoptó una constitución pacifista en 1947?",
    correcta: "Japón",
    incorrectas: [
      "Corea del Sur",
      "China"
    ]
  },
  {
    enunciado: "¿Cuál fue el objetivo principal del Plan Marshall?",
    correcta: "Reconstruir económicamente Europa occidental",
    incorrectas: [
      "Financiar la industrialización soviética",
      "Proporcionar préstamos a los países latinoamericanos"
    ]
  },
  {
    enunciado: "¿Qué institución nació en 1944 para garantizar la estabilidad monetaria internacional?",
    correcta: "El Fondo Monetario Internacional",
    incorrectas: [
      "El Banco Central Europeo",
      "La Organización Mundial del Comercio"
    ]
  },
  {
    enunciado: "¿Qué bloque militar creó Estados Unidos en 1949?",
    correcta: "La OTAN",
    incorrectas: [
      "El Pacto de Varsovia",
      "El COMECON"
    ]
  },
  {
    enunciado: "¿Qué bloque militar creó la URSS en 1955?",
    correcta: "El Pacto de Varsovia",
    incorrectas: [
      "La CECA",
      "El FMI"
    ]
  },
  {
    enunciado: "¿Qué doctrina anunció Truman en 1947?",
    correcta: "La contención del comunismo",
    incorrectas: [
      "La política de distensión",
      "El aislacionismo estadounidense"
    ]
  },
  {
    enunciado: "¿Qué ciudad simbolizó la división del mundo bipolar con un muro construido en 1961?",
    correcta: "Berlín",
    incorrectas: [
      "Varsovia",
      "Praga"
    ]
  },
  {
    enunciado: "¿Qué guerra (1950-1953) enfrentó a fuerzas comunistas y capitalistas bajo el paraguas de la ONU?",
    correcta: "La Guerra de Corea",
    incorrectas: [
      "La Guerra de Vietnam",
      "La Guerra de Suez"
    ]
  },
  {
    enunciado: "¿Qué conflicto de 1962 puso al mundo al borde de la guerra nuclear?",
    correcta: "La crisis de los misiles en Cuba",
    incorrectas: [
      "La invasión soviética de Hungría",
      "La guerra árabe-israelí de 1948"
    ]
  },
  {
    enunciado: "¿Qué conferencia marcó el inicio del Movimiento de Países No Alineados?",
    correcta: "La conferencia de Bandung en 1955",
    incorrectas: [
      "La conferencia de París en 1919",
      "La conferencia de Yalta en 1945"
    ]
  },
  {
    enunciado: "¿Qué líder encabezó el Movimiento de Países No Alineados en 1961?",
    correcta: "Josip Broz Tito",
    incorrectas: [
      "Winston Churchill",
      "Charles de Gaulle"
    ]
  },
  {
    enunciado: "¿Cuál fue el primer país asiático en independizarse tras la Segunda Guerra Mundial?",
    correcta: "India",
    incorrectas: [
      "Vietnam",
      "Indonesia"
    ]
  },
  {
    enunciado: "¿Qué organismo europeo fue el antecedente directo de la actual Unión Europea?",
    correcta: "La Comunidad Económica Europea",
    incorrectas: [
      "El Consejo de Europa",
      "La OTAN"
    ]
  },
  {
    enunciado: "¿Qué etapa de crecimiento económico experimentó Europa occidental entre 1945 y 1973?",
    correcta: "El boom económico y del Estado del bienestar",
    incorrectas: [
      "La gran depresión",
      "La era del petróleo barato de los años 80"
    ]
  },
  {
    enunciado: "¿En qué año se fundó la ONU?",
    correcta: "1945",
    incorrectas: [
      "1919",
      "1950"
    ]
  },
  {
    enunciado: "¿Qué documento constituye la base legal de la ONU?",
    correcta: "La Carta de San Francisco",
    incorrectas: [
      "El Tratado de Versalles",
      "La Declaración de Potsdam"
    ]
  },
  {
    enunciado: "¿Cuál es el órgano ejecutivo de la ONU responsable de la paz y la seguridad?",
    correcta: "El Consejo de Seguridad",
    incorrectas: [
      "La Asamblea General",
      "El Consejo Económico y Social"
    ]
  },
  {
    enunciado: "¿Qué derecho poseen los cinco miembros permanentes del Consejo de Seguridad?",
    correcta: "El derecho de veto",
    incorrectas: [
      "El derecho de disolución de la Asamblea General",
      "El derecho de emitir sanciones unilaterales"
    ]
  },
  {
    enunciado: "¿Qué agencia de la ONU se ocupa de la educación, la ciencia y la cultura?",
    correcta: "La UNESCO",
    incorrectas: [
      "La OMS",
      "El FMI"
    ]
  },
  {
    enunciado: "¿Qué agencia de la ONU coordina las políticas de salud internacional?",
    correcta: "La OMS",
    incorrectas: [
      "La FAO",
      "El Banco Mundial"
    ]
  },
  {
    enunciado: "¿Qué documento de 1948 proclamó por primera vez derechos humanos universales?",
    correcta: "La Declaración Universal de los Derechos Humanos",
    incorrectas: [
      "La Declaración de Independencia de EE.UU.",
      "La Carta del Atlántico"
    ]
  },
  {
    enunciado: "¿Qué limitación principal afecta a la eficacia de la ONU?",
    correcta: "El veto de los miembros permanentes del Consejo de Seguridad",
    incorrectas: [
      "La falta de Asamblea General",
      "La ausencia de agencias especializadas"
    ]
  },
  {
    enunciado: "¿Qué guerra evidenció las limitaciones de la ONU en los años 90?",
    correcta: "Las guerras de Yugoslavia",
    incorrectas: [
      "La guerra de Vietnam",
      "La guerra de Corea"
    ]
  },
  {
    enunciado: "¿Qué año marca la creación de la CECA, paso previo a la integración europea?",
    correcta: "1951",
    incorrectas: [
      "1949",
      "1962"
    ]
  },
  {
    enunciado: "¿Qué fue el COMECON creado en 1949?",
    correcta: "El organismo económico de cooperación de los países del bloque soviético",
    incorrectas: [
      "El organismo militar del bloque occidental",
      "Una organización de países no alineados"
    ]
  },
  {
    enunciado: "¿Qué misión principal tienen las fuerzas de paz de la ONU?",
    correcta: "Supervisar el alto el fuego y proteger a la población civil",
    incorrectas: [
      "Imponer gobiernos provisionales",
      "Dirigir operaciones militares ofensivas"
    ]
  },
  {
    enunciado: "¿Qué país lideró la reconstrucción de Japón tras 1945?",
    correcta: "Estados Unidos",
    incorrectas: [
      "Reino Unido",
      "China"
    ]
  },
  {
    enunciado: "¿Qué tratado estableció el sistema financiero internacional en 1944?",
    correcta: "Los acuerdos de Bretton Woods",
    incorrectas: [
      "El Tratado de Roma",
      "El Tratado de Maastricht"
    ]
  },
  {
    enunciado: "¿Qué potencia surgió como gran rival de Estados Unidos tras 1945?",
    correcta: "La Unión Soviética",
    incorrectas: [
      "China",
      "Japón"
    ]
  },
  {
    enunciado: "¿Qué concepto describe el enfrentamiento sin guerra directa entre EE.UU. y URSS?",
    correcta: "La Guerra Fría",
    incorrectas: [
      "La Paz Armada",
      "El equilibrio de poder decimonónico"
    ]
  },
  {
    enunciado: "¿Qué país fue epicentro de una gran hambruna en 1947, vinculada a la partición?",
    correcta: "India",
    incorrectas: [
      "China",
      "Indonesia"
    ]
  },
  {
    enunciado: "¿Qué conflicto se asocia con la construcción del muro de Berlín?",
    correcta: "La crisis de Berlín de 1961",
    incorrectas: [
      "El bloqueo de Berlín de 1948",
      "La caída del muro en 1989"
    ]
  },
  {
    enunciado: "¿Qué programa estadounidense financió la modernización tecnológica europea?",
    correcta: "El Plan Marshall",
    incorrectas: [
      "El New Deal",
      "El Plan Dawes"
    ]
  },
  {
    enunciado: "¿Qué conferencia estableció la división de Alemania en cuatro zonas de ocupación?",
    correcta: "Yalta",
    incorrectas: [
      "Versalles",
      "Camp David"
    ]
  },
  {
    enunciado: "¿Qué bloque económico y político se organizó en torno a la URSS?",
    correcta: "El bloque del Este",
    incorrectas: [
      "El bloque occidental",
      "El bloque de los No Alineados"
    ]
  },
  {
    enunciado: "¿Qué organismo internacional precedió a la ONU y fracasó en evitar la Segunda Guerra Mundial?",
    correcta: "La Sociedad de Naciones",
    incorrectas: [
      "La OTAN",
      "El COMECON"
    ]
  }
];
