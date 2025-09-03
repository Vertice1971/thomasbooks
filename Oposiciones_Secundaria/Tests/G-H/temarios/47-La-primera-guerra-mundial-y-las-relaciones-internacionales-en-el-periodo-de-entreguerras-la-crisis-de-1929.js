// temarios/47-La-primera-guerra-mundial-y-las-relaciones-internacionales-en-el-periodo-de-entreguerras-la-crisis-de-1929.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué alianzas principales existían en Europa antes de 1914?",
    correcta: "La Triple Entente (Francia, Reino Unido, Rusia) y la Triple Alianza (Alemania, Austria-Hungría, Italia).",
    incorrectas: [
      "La Liga de Naciones y la Confederación Centroeuropea.",
      "La Alianza Atlántica y el Pacto de Varsovia."
    ]
  },
  {
    enunciado: "¿Qué factor inmediato provocó el estallido de la Primera Guerra Mundial?",
    correcta: "El asesinato del archiduque Francisco Fernando en Sarajevo en 1914.",
    incorrectas: [
      "La firma del Tratado de Versalles.",
      "El bombardeo de Pearl Harbor."
    ]
  },
  {
    enunciado: "¿Qué plan militar alemán preveía una rápida invasión de Francia a través de Bélgica?",
    correcta: "El Plan Schlieffen.",
    incorrectas: [
      "El Plan Marshall.",
      "El Plan Dawes."
    ]
  },
  {
    enunciado: "¿Cómo se caracterizó el frente occidental durante la mayor parte de la Primera Guerra Mundial?",
    correcta: "Por la guerra de trincheras y el estancamiento prolongado.",
    incorrectas: [
      "Por campañas de movimientos rápidos y cambios constantes de posición.",
      "Por un conflicto exclusivamente naval."
    ]
  },
  {
    enunciado: "¿Qué batalla de 1916 fue una de las más largas y sangrientas de la Primera Guerra Mundial?",
    correcta: "La batalla de Verdún.",
    incorrectas: [
      "La batalla de Stalingrado.",
      "La batalla de Kursk."
    ]
  },
  {
    enunciado: "¿Qué acontecimiento de 1917 cambió el equilibrio de fuerzas en la guerra a favor de los Aliados?",
    correcta: "La entrada de Estados Unidos en la guerra.",
    incorrectas: [
      "La firma del Tratado de Brest-Litovsk.",
      "La ocupación de París por Alemania."
    ]
  },
  {
    enunciado: "¿Qué tratado puso fin a la guerra entre Alemania y las potencias aliadas?",
    correcta: "El Tratado de Versalles de 1919.",
    incorrectas: [
      "El Tratado de Utrecht.",
      "El Tratado de París de 1763."
    ]
  },
  {
    enunciado: "¿Cuál fue una consecuencia política directa de la Primera Guerra Mundial en Europa Central?",
    correcta: "La desaparición de los imperios austrohúngaro, alemán, otomano y ruso.",
    incorrectas: [
      "La creación de un imperio paneuropeo unificado.",
      "La unión política de Alemania y Francia."
    ]
  },
  {
    enunciado: "¿Qué organismo internacional se creó en 1920 para prevenir nuevas guerras?",
    correcta: "La Sociedad de Naciones.",
    incorrectas: [
      "La ONU.",
      "La OTAN."
    ]
  },
  {
    enunciado: "¿Por qué la Sociedad de Naciones tuvo una eficacia limitada?",
    correcta: "Por la ausencia de potencias clave como Estados Unidos y su falta de medios coercitivos.",
    incorrectas: [
      "Porque estaba dominada exclusivamente por potencias asiáticas.",
      "Porque nunca llegó a tener sede oficial."
    ]
  },
  {
    enunciado: "¿Qué plan de 1924 buscó reestructurar los pagos de reparaciones de Alemania?",
    correcta: "El Plan Dawes.",
    incorrectas: [
      "El Plan Marshall.",
      "El Plan Schlieffen."
    ]
  },
  {
    enunciado: "¿Qué tratado de 1925 simbolizó una aparente distensión en Europa occidental?",
    correcta: "Los Acuerdos de Locarno.",
    incorrectas: [
      "El Tratado de Nankín.",
      "El Pacto de Varsovia."
    ]
  },
  {
    enunciado: "¿Qué pacto internacional de 1928 condenó la guerra como instrumento de política nacional?",
    correcta: "El Pacto Briand-Kellogg.",
    incorrectas: [
      "El Pacto de Acero.",
      "El Pacto de No Agresión Germano-Soviético."
    ]
  },
  {
    enunciado: "¿Qué crisis económica mundial comenzó con el crack de la bolsa de Nueva York?",
    correcta: "La crisis de 1929 o Gran Depresión.",
    incorrectas: [
      "La crisis del petróleo.",
      "La crisis asiática de 1997."
    ]
  },
  {
    enunciado: "¿Cuál fue una de las principales causas del crack de 1929?",
    correcta: "La especulación bursátil y el exceso de crédito sin respaldo.",
    incorrectas: [
      "La reconstrucción europea tras la Segunda Guerra Mundial.",
      "La caída del Imperio romano."
    ]
  },
  {
    enunciado: "¿Qué política económica adoptaron muchos países que agravó la crisis de 1929?",
    correcta: "El proteccionismo comercial y las barreras arancelarias.",
    incorrectas: [
      "La apertura comercial sin restricciones.",
      "La unificación monetaria global."
    ]
  },
  {
    enunciado: "¿Qué país europeo sufrió especialmente la crisis por su dependencia de préstamos estadounidenses?",
    correcta: "Alemania.",
    incorrectas: [
      "España.",
      "Suiza."
    ]
  },
  {
    enunciado: "¿Qué líder estadounidense implementó el New Deal como respuesta a la crisis?",
    correcta: "Franklin D. Roosevelt.",
    incorrectas: [
      "Herbert Hoover.",
      "Woodrow Wilson."
    ]
  },
  {
    enunciado: "¿Qué efecto político tuvo la crisis en Alemania?",
    correcta: "Favoreció el ascenso del nazismo y el colapso de la República de Weimar.",
    incorrectas: [
      "Consolidó el gobierno democrático de Weimar.",
      "Provocó la unión con Austria."
    ]
  },
  {
    enunciado: "¿Qué conflicto en Asia evidenció la debilidad de la Sociedad de Naciones en 1931?",
    correcta: "La invasión japonesa de Manchuria.",
    incorrectas: [
      "La guerra de Corea.",
      "La guerra de Vietnam."
    ]
  },
  {
    enunciado: "¿Qué país invadió Italia en 1935 desafiando a la Sociedad de Naciones?",
    correcta: "Etiopía.",
    incorrectas: [
      "Egipto.",
      "Sudáfrica."
    ]
  },
  {
    enunciado: "¿Qué guerra europea de 1936-1939 anticipó el choque entre fascismo y comunismo?",
    correcta: "La Guerra Civil Española.",
    incorrectas: [
      "La Guerra de los Treinta Años.",
      "La Guerra Franco-Prusiana."
    ]
  },
  {
    enunciado: "¿Qué política adoptaron Reino Unido y Francia hacia Alemania en los años 30 para evitar la guerra?",
    correcta: "La política de apaciguamiento.",
    incorrectas: [
      "La intervención preventiva.",
      "La ruptura inmediata de relaciones."
    ]
  },
  {
    enunciado: "¿Qué acuerdo de 1938 cedió los Sudetes a Alemania?",
    correcta: "El Acuerdo de Múnich.",
    incorrectas: [
      "El Tratado de Utrecht.",
      "El Tratado de París."
    ]
  },
  {
    enunciado: "¿Qué pacto firmaron Alemania y la URSS en agosto de 1939?",
    correcta: "El Pacto de No Agresión Germano-Soviético o Pacto Molotov-Ribbentrop.",
    incorrectas: [
      "El Pacto Briand-Kellogg.",
      "El Tratado de Versalles."
    ]
  },
  {
    enunciado: "¿Qué innovación tecnológica tuvo gran impacto en la Primera Guerra Mundial?",
    correcta: "El uso de ametralladoras, gases tóxicos y tanques.",
    incorrectas: [
      "La bomba atómica.",
      "Los drones militares."
    ]
  },
  {
    enunciado: "¿Qué país cambió de bando en 1915 para unirse a los Aliados?",
    correcta: "Italia.",
    incorrectas: [
      "España.",
      "Bulgaria."
    ]
  },
  {
    enunciado: "¿Qué tratado puso fin a la guerra entre los Aliados y el Imperio Otomano?",
    correcta: "El Tratado de Sèvres (1920).",
    incorrectas: [
      "El Tratado de Lausana (1830).",
      "El Tratado de Brest-Litovsk."
    ]
  },
  {
    enunciado: "¿Qué conferencia internacional estableció el sistema de mandatos tras la guerra?",
    correcta: "La Conferencia de San Remo (1920).",
    incorrectas: [
      "La Conferencia de Potsdam.",
      "La Conferencia de Yalta."
    ]
  },
  {
    enunciado: "¿Qué república surgió en Alemania tras la Primera Guerra Mundial?",
    correcta: "La República de Weimar.",
    incorrectas: [
      "La República Federal de Alemania.",
      "La Confederación Germánica."
    ]
  },
  {
    enunciado: "¿Qué batalla naval de 1916 enfrentó a las flotas británica y alemana?",
    correcta: "La batalla de Jutlandia.",
    incorrectas: [
      "La batalla de Midway.",
      "La batalla de Trafalgar."
    ]
  },
  {
    enunciado: "¿Qué líder bolchevique firmó la paz con Alemania en 1918?",
    correcta: "Vladímir Lenin.",
    incorrectas: [
      "León Trotski.",
      "Iósif Stalin."
    ]
  },
  {
    enunciado: "¿Qué guerra de 1920-1921 enfrentó a Polonia y la Rusia soviética?",
    correcta: "La guerra polaco-soviética.",
    incorrectas: [
      "La guerra ruso-japonesa.",
      "La guerra de Crimea."
    ]
  },
  {
    enunciado: "¿Qué bloque económico creó Reino Unido tras abandonar el patrón oro en 1931?",
    correcta: "El Área de la Libra Esterlina.",
    incorrectas: [
      "El Mercado Común Europeo.",
      "La Unión Europea Occidental."
    ]
  },
  {
    enunciado: "¿Qué programa económico de Hitler buscaba el rearme y la autosuficiencia?",
    correcta: "El Plan Cuatrienal.",
    incorrectas: [
      "El New Deal.",
      "El Plan Dawes."
    ]
  },
  {
    enunciado: "¿Qué país sufrió una hiperinflación extrema en 1923?",
    correcta: "Alemania.",
    incorrectas: [
      "Francia.",
      "Suecia."
    ]
  },
  {
    enunciado: "¿Qué documento de 1918 propuso un nuevo orden internacional basado en principios liberales?",
    correcta: "Los Catorce Puntos de Wilson.",
    incorrectas: [
      "La Carta del Atlántico.",
      "El Manifiesto Comunista."
    ]
  },
  {
    enunciado: "¿Qué tratado reconoció la independencia de Irlanda en 1921?",
    correcta: "El Tratado Anglo-Irlandés.",
    incorrectas: [
      "El Tratado de Gante.",
      "El Tratado de Versalles."
    ]
  },
  {
    enunciado: "¿Qué país asiático salió de la Gran Depresión gracias a la expansión militar?",
    correcta: "Japón.",
    incorrectas: [
      "India.",
      "China."
    ]
  },
  {
    enunciado: "¿Qué medida adoptó Roosevelt para restaurar la confianza en el sistema bancario?",
    correcta: "El cierre temporal de bancos y la creación del seguro de depósitos.",
    incorrectas: [
      "La abolición de la moneda nacional.",
      "La privatización total del sistema bancario."
    ]
  },
  {
    enunciado: "¿Qué política monetaria agravó la crisis mundial en los años 30?",
    correcta: "La defensa a ultranza del patrón oro con políticas deflacionarias.",
    incorrectas: [
      "La emisión masiva de dinero sin control.",
      "La creación de una moneda única europea."
    ]
  },
  {
    enunciado: "¿Qué efecto tuvo la crisis de 1929 en América Latina?",
    correcta: "Reducción de exportaciones y avance de la industrialización por sustitución de importaciones.",
    incorrectas: [
      "Integración inmediata en el Mercado Común Europeo.",
      "Recuperación económica acelerada gracias a la ayuda japonesa."
    ]
  },
  {
    enunciado: "¿Qué conflicto territorial en África implicó a Italia y Etiopía antes de la Segunda Guerra Mundial?",
    correcta: "La Segunda Guerra Italo-Etíope (1935-1936).",
    incorrectas: [
      "La guerra de Suez.",
      "La guerra de Biafra."
    ]
  },
  {
    enunciado: "¿Qué líder turco transformó el Imperio Otomano en una república laica?",
    correcta: "Mustafá Kemal Atatürk.",
    incorrectas: [
      "Ismet Inönü.",
      "Abdul Hamid II."
    ]
  },
  {
    enunciado: "¿Qué país europeo fue ocupado por Alemania en 1939 tras Múnich?",
    correcta: "Checoslovaquia.",
    incorrectas: [
      "Hungría.",
      "Bélgica."
    ]
  },
  {
    enunciado: "¿Qué acuerdo internacional de 1936 reafirmó la cooperación entre Alemania e Italia?",
    correcta: "El Eje Roma-Berlín.",
    incorrectas: [
      "El Pacto de Varsovia.",
      "El Tratado de Roma."
    ]
  },
  {
    enunciado: "¿Qué medida adoptó el Reino Unido para proteger su industria durante la Gran Depresión?",
    correcta: "Aranceles imperiales preferenciales dentro de la Commonwealth.",
    incorrectas: [
      "El libre comercio absoluto.",
      "La sustitución de la libra por el dólar."
    ]
  }
];
