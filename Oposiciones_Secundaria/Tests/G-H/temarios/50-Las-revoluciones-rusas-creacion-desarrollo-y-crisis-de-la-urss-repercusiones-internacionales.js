// temarios/50-Las-revoluciones-rusas-creacion-desarrollo-y-crisis-de-la-urss-repercusiones-internacionales.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué factores explican la crisis del Imperio zarista a comienzos del siglo XX?",
    correcta: "Atraso económico, desigualdad social, represión política y derrota en la guerra ruso-japonesa",
    incorrectas: [
      "Un proceso acelerado de industrialización y modernización política",
      "La democratización parlamentaria bajo Nicolás II"
    ]
  },
  {
    enunciado: "¿Qué organismo parlamentario creó el zar Nicolás II tras la Revolución de 1905?",
    correcta: "La Duma",
    incorrectas: [
      "El Soviet Supremo",
      "El Comité Central del Partido"
    ]
  },
  {
    enunciado: "¿Qué fenómeno destacó en la Revolución rusa de 1905?",
    correcta: "La aparición de los primeros soviets de obreros",
    incorrectas: [
      "La creación del Pacto de Varsovia",
      "El triunfo del comunismo de guerra"
    ]
  },
  {
    enunciado: "¿Qué contexto internacional precipitó la Revolución de Febrero de 1917?",
    correcta: "La participación rusa en la Primera Guerra Mundial",
    incorrectas: [
      "La crisis del petróleo en Oriente Medio",
      "El inicio de la Guerra Fría"
    ]
  },
  {
    enunciado: "¿Qué consecuencias inmediatas tuvo la Revolución de Febrero de 1917?",
    correcta: "La abdicación del zar y el establecimiento de un Gobierno Provisional",
    incorrectas: [
      "La instauración inmediata del comunismo de guerra",
      "La entrada de Rusia en la Sociedad de Naciones"
    ]
  },
  {
    enunciado: "¿Qué caracterizó a la dualidad de poder en 1917?",
    correcta: "La coexistencia del Gobierno Provisional y los soviets",
    incorrectas: [
      "El poder compartido entre la monarquía y la Iglesia ortodoxa",
      "La alianza establecida entre mencheviques y zaristas"
    ]
  },
  {
    enunciado: "¿Qué líder dirigió la Revolución de Octubre de 1917?",
    correcta: "Vladimir Ilich Lenin",
    incorrectas: [
      "León Trotski",
      "Joseph Stalin"
    ]
  },
  {
    enunciado: "¿Qué tratado firmó la Rusia bolchevique para salir de la Primera Guerra Mundial?",
    correcta: "El Tratado de Brest-Litovsk",
    incorrectas: [
      "El Tratado de Versalles",
      "El Tratado de San Remo"
    ]
  },
  {
    enunciado: "¿Qué bandos se enfrentaron en la Guerra Civil rusa (1918-1921)?",
    correcta: "El Ejército Rojo bolchevique contra los Ejércitos Blancos",
    incorrectas: [
      "La URSS contra las potencias fascistas",
      "Los soviets contra la Duma"
    ]
  },
  {
    enunciado: "¿Qué política económica aplicaron los bolcheviques durante la Guerra Civil?",
    correcta: "El comunismo de guerra",
    incorrectas: [
      "La Perestroika",
      "El liberalismo económico"
    ]
  },
  {
    enunciado: "¿Qué sustituyó al comunismo de guerra en 1921?",
    correcta: "La Nueva Política Económica (NEP)",
    incorrectas: [
      "El Plan Marshall",
      "El Tratado de Rapallo"
    ]
  },
  {
    enunciado: "¿En qué año se constituyó oficialmente la URSS?",
    correcta: "1922",
    incorrectas: [
      "1917",
      "1936"
    ]
  },
  {
    enunciado: "¿Qué organismo internacional crearon los bolcheviques en 1919 para extender la revolución?",
    correcta: "La Komintern (III Internacional)",
    incorrectas: [
      "El Pacto de Varsovia",
      "El Kominform"
    ]
  },
  {
    enunciado: "¿Quién consolidó su poder tras la muerte de Lenin en 1924?",
    correcta: "Joseph Stalin",
    incorrectas: [
      "León Trotski",
      "Nikita Jruschov"
    ]
  },
  {
    enunciado: "¿Qué medidas económicas impulsó Stalin en los años 30?",
    correcta: "Planes quinquenales de industrialización y colectivización forzosa",
    incorrectas: [
      "Privatización de las tierras y liberalización del comercio",
      "Apertura al capital extranjero en todos los sectores"
    ]
  },
  {
    enunciado: "¿Qué fenómeno represivo caracterizó la era estalinista?",
    correcta: "Las Grandes Purgas y los gulags",
    incorrectas: [
      "La liberalización de partidos políticos",
      "La instauración del multipartidismo"
    ]
  },
  {
    enunciado: "¿Qué proceso político emprendió Jruschov tras la muerte de Stalin?",
    correcta: "La desestalinización y el deshielo",
    incorrectas: [
      "La vuelta al zarismo",
      "La restauración del comunismo de guerra"
    ]
  },
  {
    enunciado: "¿Qué acontecimiento internacional puso a prueba el liderazgo de Jruschov en 1962?",
    correcta: "La crisis de los misiles en Cuba",
    incorrectas: [
      "La caída del Muro de Berlín",
      "La guerra de Corea"
    ]
  },
  {
    enunciado: "¿Qué rasgo definió el periodo de Brezhnev (1964-1982)?",
    correcta: "El estancamiento económico y el fortalecimiento del bloque soviético",
    incorrectas: [
      "Una liberalización política amplia",
      "La desaparición del Pacto de Varsovia"
    ]
  },
  {
    enunciado: "¿Qué reformas impulsó Gorbachov en los años 80?",
    correcta: "La Perestroika y la Glasnost",
    incorrectas: [
      "La Doctrina Brezhnev y la política de autarquía",
      "La NEP y el comunismo de guerra"
    ]
  },
  {
    enunciado: "¿Qué consecuencia tuvieron las reformas de Gorbachov?",
    correcta: "Debilitaron el sistema soviético y aceleraron su desintegración",
    incorrectas: [
      "Reforzaron el poder del Partido Comunista",
      "Lograron estabilizar la URSS hasta el año 2000"
    ]
  },
  {
    enunciado: "¿En qué año se disolvió oficialmente la URSS?",
    correcta: "1991",
    incorrectas: [
      "1985",
      "2001"
    ]
  },
  {
    enunciado: "¿Qué papel desempeñó la URSS tras la Segunda Guerra Mundial?",
    correcta: "Se convirtió en una superpotencia mundial junto a Estados Unidos",
    incorrectas: [
      "Quedó relegada a un papel secundario en Europa",
      "Fue ocupada por las potencias aliadas"
    ]
  },
  {
    enunciado: "¿Qué término describe el enfrentamiento político-militar entre EE.UU. y la URSS tras 1945?",
    correcta: "La Guerra Fría",
    incorrectas: [
      "La Paz Armada",
      "La Entente Cordiale"
    ]
  },
  {
    enunciado: "¿Qué bloque político y militar formó la URSS en 1955?",
    correcta: "El Pacto de Varsovia",
    incorrectas: [
      "La OTAN",
      "El COMECON"
    ]
  },
  {
    enunciado: "¿Qué conflicto bélico supuso una derrota estratégica para la URSS en 1979?",
    correcta: "La invasión de Afganistán",
    incorrectas: [
      "La guerra de Corea",
      "La crisis del Canal de Suez"
    ]
  },
  {
    enunciado: "¿Qué papel desempeñó la URSS en el proceso de descolonización?",
    correcta: "Apoyó movimientos de liberación en África, Asia y América Latina",
    incorrectas: [
      "Rechazó intervenir en conflictos coloniales",
      "Respaldó a las potencias coloniales europeas"
    ]
  },
  {
    enunciado: "¿Qué papel desempeñó la URSS en la carrera espacial?",
    correcta: "Protagonizó hitos como el Sputnik y el primer hombre en el espacio",
    incorrectas: [
      "Abandonó el programa espacial tras 1957",
      "Se limitó a apoyar a Estados Unidos en su llegada a la Luna"
    ]
  },
  {
    enunciado: "¿Qué impacto tuvo la Revolución rusa de 1917 en la política mundial?",
    correcta: "Ofreció una alternativa ideológica al capitalismo liberal",
    incorrectas: [
      "Consolidó el dominio colonial europeo",
      "Aceleró el retorno a las monarquías absolutas"
    ]
  },
  {
    enunciado: "¿Qué consecuencia política interna tuvo la Guerra Civil rusa?",
    correcta: "Consolidó el poder bolchevique y la dictadura del partido único",
    incorrectas: [
      "Restauró la monarquía con Nicolás II",
      "Instauró un parlamentarismo liberal"
    ]
  },
  {
    enunciado: "¿Qué líder soviético impulsó la política de colectivización forzosa?",
    correcta: "Joseph Stalin",
    incorrectas: [
      "Lenin",
      "Kruschev"
    ]
  },
  {
    enunciado: "¿Qué concepto describe el control absoluto del Estado sobre la vida política, económica y cultural?",
    correcta: "Totalitarismo",
    incorrectas: [
      "Federalismo",
      "Pluralismo"
    ]
  },
  {
    enunciado: "¿Qué política económica permitió cierta liberalización tras la Guerra Civil?",
    correcta: "La Nueva Política Económica (NEP)",
    incorrectas: [
      "El Plan Marshall",
      "El Plan Dawes"
    ]
  },
  {
    enunciado: "¿Qué característica compartieron la URSS y EE.UU. tras 1945?",
    correcta: "Eran superpotencias con capacidad nuclear y liderazgo global",
    incorrectas: [
      "Eran democracias parlamentarias liberales",
      "Eran monarquías constitucionales"
    ]
  },
  {
    enunciado: "¿Qué crisis simbolizó el fracaso del sistema soviético en los años 80?",
    correcta: "La escasez crónica de bienes de consumo y la pérdida de legitimidad política",
    incorrectas: [
      "El exceso de producción agrícola que generó superávit",
      "La completa integración económica en la Comunidad Europea"
    ]
  },
  {
    enunciado: "¿Qué movimiento comunista triunfó en Asia en 1949 con apoyo soviético?",
    correcta: "La revolución china de Mao Zedong",
    incorrectas: [
      "La independencia de la India liderada por Gandhi",
      "La revolución cultural de Japón"
    ]
  },
  {
    enunciado: "¿Qué hecho marcó la ruptura definitiva entre China y la URSS?",
    correcta: "Las tensiones ideológicas y fronterizas de los años 60",
    incorrectas: [
      "El tratado de amistad firmado en 1950",
      "La participación conjunta en la guerra de Corea"
    ]
  },
  {
    enunciado: "¿Qué dirigente fue el último presidente de la URSS?",
    correcta: "Mijaíl Gorbachov",
    incorrectas: [
      "Boris Yeltsin",
      "Konstantín Chernenko"
    ]
  },
  {
    enunciado: "¿Qué república lideró el proceso de independencia que aceleró la disolución soviética?",
    correcta: "Rusia bajo el liderazgo de Boris Yeltsin",
    incorrectas: [
      "Estonia con la ayuda de la ONU",
      "Ucrania con apoyo militar de la OTAN"
    ]
  },
  {
    enunciado: "¿Qué concepto define el enfrentamiento indirecto entre las dos superpotencias tras 1945?",
    correcta: "Guerra Fría",
    incorrectas: [
      "Entente Cordiale",
      "Santa Alianza"
    ]
  }
];
