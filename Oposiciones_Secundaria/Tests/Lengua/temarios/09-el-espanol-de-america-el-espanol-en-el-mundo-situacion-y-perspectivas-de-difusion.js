// temarios/09-el-espanol-de-america-el-espanol-en-el-mundo-situacion-y-perspectivas-de-difusion.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué se entiende por “español de América” en lingüística descriptiva?",
    correcta: "El conjunto de variedades del español habladas en el continente americano, con rasgos compartidos y diferencias regionales.",
    incorrectas: [
      "Una lengua distinta del español peninsular sin inteligibilidad mutua.",
      "Un estándar único y homogéneo usado en todos los países de América."
    ]
  },
  {
    enunciado: "¿Cuál es una característica fonológica general en el español americano frente al centro-norte peninsular?",
    correcta: "El seseo: ausencia de la oposición fonémica /θ/ ~ /s/ y realización de ‹z›/‹c›(e,i) como /s/.",
    incorrectas: [
      "La distinción sistemática /θ/ ~ /s/ en todo el continente.",
      "La pronunciación interdental de la /s/ en posición inicial."
    ]
  },
  {
    enunciado: "En términos generales, ¿qué ocurre con la oposición /ʎ/ ~ /ʝ/ en gran parte de América?",
    correcta: "Predomina el yeísmo: neutralización a favor de /ʝ/.",
    incorrectas: [
      "Se mantiene el lleísmo en todo el continente.",
      "Se neutraliza a favor de /ʎ/ en la mayoría de zonas."
    ]
  },
  {
    enunciado: "¿Qué rasgo fonético es típico del área rioplatense (Buenos Aires–Montevideo)?",
    correcta: "Yeísmo rehilado: realización de /ʝ/ como fricativa postalveolar sonora [ʒ] o sorda [ʃ].",
    incorrectas: [
      "Distinción /θ/ ~ /s/ como en el centro-norte peninsular.",
      "Aspiración sistemática de /s/ en cualquier posición silábica."
    ]
  },
  {
    enunciado: "¿Qué fenómeno caribeño afecta a /s/ en posición final de sílaba?",
    correcta: "Aspiración o pérdida de /-s/ y, a menudo, velarización de /n/ final.",
    incorrectas: [
      "Refuerzo articulatorio de /-s/ con geminación.",
      "Palatalización de /s/ a [ʃ] en todos los contextos."
    ]
  },
  {
    enunciado: "¿Qué tendencia caracteriza a muchas variedades andinas frente a las costeras?",
    correcta: "Mayor conservación de /s/ final y menor aspiración, con posible asibilación de /r/.",
    incorrectas: [
      "Desaparición de /s/ en todos los contextos.",
      "Implosión de todas las vocales tónicas."
    ]
  },
  {
    enunciado: "En gran parte de América, ¿qué forma se usa para la 2.ª persona del plural en el trato general?",
    correcta: "Ustedes con las formas verbales de 3.ª persona.",
    incorrectas: [
      "Vosotros con formas de 2.ª plural en todo el continente.",
      "Ustedes con formas de 2.ª plural (—áis, —éis)."
    ]
  },
  {
    enunciado: "¿Qué es el voseo en las variedades americanas?",
    correcta: "El empleo de vos con morfología propia (vos tenés, vos hablás) en amplias áreas.",
    incorrectas: [
      "El uso de vosotros en contextos formales.",
      "Un arcaísmo restringido a documentos coloniales sin vigencia actual."
    ]
  },
  {
    enunciado: "¿Dónde es especialmente productivo el voseo pleno hoy?",
    correcta: "En el área rioplatense y partes de Centroamérica y los Andes.",
    incorrectas: [
      "En el centro-norte peninsular exclusivamente.",
      "Solo en el Caribe hispano."
    ]
  },
  {
    enunciado: "¿Qué rasgo morfosintáctico diferencia a menudo el español general de España y el americano en el pasado reciente?",
    correcta: "Preferencia americana por el pretérito simple (ayer ya lo vi) frente al perfecto compuesto peninsular (lo he visto).",
    incorrectas: [
      "Uso general americano del pretérito pluscuamperfecto para hechos de hoy.",
      "Prohibición americana del pretérito simple en registros formales."
    ]
  },
  {
    enunciado: "¿Cuál de estos préstamos léxicos indígenas está bien emparejado con su origen?",
    correcta: "Hamaca, maíz y canoa (taíno); tomate y chocolate (náhuatl); papa y cóndor (quechua).",
    incorrectas: [
      "Hamaca y cóndor (náhuatl); tomate (taíno).",
      "Maíz (quechua); papa (taíno); chocolate (guaraní)."
    ]
  },
  {
    enunciado: "¿Qué describe mejor el llamado “español neutro” de medios y doblaje?",
    correcta: "Un registro panhispánico que evita localismos marcados y rasgos muy regionales.",
    incorrectas: [
      "Un dialecto nativo de un país concreto de América.",
      "Una variedad con distinción /θ/ ~ /s/ obligatoria."
    ]
  },
  {
    enunciado: "En relación con los pronombres de objeto, ¿qué se observa en general en América?",
    correcta: "Menor presencia de leísmo que en zonas del español peninsular; preferencia por lo/la como objeto directo.",
    incorrectas: [
      "Leísmo generalizado como norma culta panamericana.",
      "Sustitución de los clíticos por nombres plenos en toda situación."
    ]
  },
  {
    enunciado: "¿Qué fenómeno sociolingüístico aparece en el ámbito hispano de EE. UU.?",
    correcta: "Alternancia de códigos y variedades de contacto conocidas como spanglish en contextos bilingües.",
    incorrectas: [
      "Una prohibición legal del español en todos los estados.",
      "La imposibilidad de mantener el español como lengua de herencia."
    ]
  },
  {
    enunciado: "¿Cuál es un rasgo frecuente de /x/ en variedades americanas (grafía ‹j›/‹g›)?",
    correcta: "Realización aspirada [h] en amplias zonas (p. ej., México, Caribe).",
    incorrectas: [
      "Realización interdental [θ] por influencia galaica.",
      "Realización retrofleja obligatoria [ʐ] en todo el continente."
    ]
  },
  {
    enunciado: "¿Qué proceso fonético caribeño afecta a /r/ y /l/ en coda silábica?",
    correcta: "Neutralizaciones como rotacismo y lambdacismo en determinadas posiciones.",
    incorrectas: [
      "Asibilación de /r/ a [ʒ] general en toda la región.",
      "Geminación de /l/ ante cualquier consonante."
    ]
  },
  {
    enunciado: "¿Qué rasgo morfológico es característico en zonas de Colombia y Venezuela con diminutivos?",
    correcta: "Uso de -ico/-ica tras base en -t (momentico, ratica).",
    incorrectas: [
      "Preferencia exclusiva por -illo/-illa en todo el continente.",
      "Prohibición del diminutivo en registros coloquiales."
    ]
  },
  {
    enunciado: "¿Qué oposición de tratamiento es típica del Caribe y algunas áreas andinas en contextos de confianza?",
    correcta: "Ustedeo de confianza: uso de usted con cercanía afectiva.",
    incorrectas: [
      "Voseo exclusivo para autoridades.",
      "Tuteo prohibido en contextos familiares."
    ]
  },
  {
    enunciado: "¿Cuál es la institución que coordina la política panhispánica de la norma culta?",
    correcta: "La Asociación de Academias de la Lengua Española (ASALE), junto con la RAE.",
    incorrectas: [
      "La Unión Europea.",
      "La UNESCO como autoridad normativa del español."
    ]
  },
  {
    enunciado: "¿En qué organismos internacionales el español es lengua de trabajo o de gran presencia?",
    correcta: "ONU, OEA y otros foros multilaterales, además de redes del Instituto Cervantes.",
    incorrectas: [
      "En ninguno: es solo lengua nacional de España.",
      "Únicamente en la OTAN y no en otros organismos."
    ]
  },
  {
    enunciado: "¿Dónde es lengua oficial el español fuera de Europa y América?",
    correcta: "En Guinea Ecuatorial, junto con otras lenguas nacionales.",
    incorrectas: [
      "En Marruecos como única lengua oficial.",
      "En Filipinas como lengua cooficial general actual."
    ]
  },
  {
    enunciado: "Respecto a “español” y “castellano”, ¿qué opción refleja mejor el uso latinoamericano?",
    correcta: "Ambas denominaciones coexisten; su elección puede tener matices identitarios o históricos según el país.",
    incorrectas: [
      "En América solo se usa ‘castellano’ y ‘español’ es incorrecto.",
      "‘Español’ es exclusivo de España y no se emplea en América."
    ]
  },
  {
    enunciado: "¿Qué diferencia dialectal macro suele distinguirse en América por ubicación?",
    correcta: "Zonas altas (andinas/interiores) frente a zonas bajas o costeras, con tendencias fonéticas diferenciadas.",
    incorrectas: [
      "Norte/sur con rasgos idénticos en cada mitad del continente.",
      "División por estados nacionales sin isoglosas transversales."
    ]
  },
  {
    enunciado: "¿Qué caracteriza al español chileno en el paradigma de voseo popular?",
    correcta: "Formas verbales como vos sabís / vos podís en registros coloquiales.",
    incorrectas: [
      "Uso de vosotros como forma general de 2.ª plural.",
      "Presencia obligatoria de /θ/ en la distinción sibilante."
    ]
  },
  {
    enunciado: "¿Qué papel cumple el Instituto Cervantes en la difusión del español?",
    correcta: "Promueve la enseñanza de ELE, la cultura en español y certifica niveles con el DELE/SIELE.",
    incorrectas: [
      "Regula la ortografía de forma independiente a las academias.",
      "Es un diccionario oficial de americanismos."
    ]
  },
  {
    enunciado: "¿Cuál es una tendencia del español en la esfera digital global?",
    correcta: "Alta presencia en redes y plataformas, con producción cultural transnacional creciente.",
    incorrectas: [
      "Desaparición del español de los medios digitales.",
      "Uso exclusivo del español peninsular en internet."
    ]
  },
  {
    enunciado: "¿Qué rasgo define al español paraguayo por contacto?",
    correcta: "Influencia del guaraní en léxico, entonación y, a veces, estructuras discursivas.",
    incorrectas: [
      "Contacto dominante con quechua en todo el país.",
      "Ausencia total de bilingüismo social."
    ]
  },
  {
    enunciado: "En áreas mexicanas, ¿qué realización de /x/ es frecuente?",
    correcta: "Aspirada [h], especialmente en estilos coloquiales.",
    incorrectas: [
      "Interdental [θ] generalizada.",
      "Africada [d͡ʒ] como rasgo estándar."
    ]
  },
  {
    enunciado: "¿Qué opción sobre el uso del pretérito en América es adecuada?",
    correcta: "El pretérito simple se usa ampliamente incluso con marcos temporales recientes.",
    incorrectas: [
      "Se evita el pretérito simple por considerarse vulgar.",
      "Solo se usa el perfecto compuesto en toda América."
    ]
  },
  {
    enunciado: "¿Cuál es un objetivo central de la enseñanza de ELE a escala global?",
    correcta: "Desarrollar competencia comunicativa con sensibilidad a la variación panhispánica.",
    incorrectas: [
      "Imponer un único dialecto y proscribir el resto.",
      "Limitar la destreza a memorización de reglas sin uso real."
    ]
  },
  {
    enunciado: "¿Qué término describe la generalización de rasgos compartidos entre dialectos urbanos por movilidad y medios?",
    correcta: "Nivelación y convergencia dialectal.",
    incorrectas: [
      "Hiperdiferenciación sin contacto entre ciudades.",
      "Aislamiento diacrónico de los estándares."
    ]
  },
  {
    enunciado: "¿Cuál es un rasgo caribeño relacionado con la nasal final de palabra?",
    correcta: "Velarización a [ŋ] en posición final o prepausal.",
    incorrectas: [
      "Epéntesis vocálica tras nasal en cualquier contexto.",
      "Nasalización obligatoria de todas las vocales tónicas."
    ]
  },
  {
    enunciado: "¿Qué afirmación sobre uniformidad y diversidad del español americano es más precisa?",
    correcta: "Comparte rasgos comunes panhispánicos, pero presenta variación interna significativa por historia y contactos.",
    incorrectas: [
      "Es totalmente uniforme en fonética y léxico.",
      "No mantiene inteligibilidad con el español europeo."
    ]
  },
  {
    enunciado: "¿Qué factor demográfico impulsa la proyección internacional del español?",
    correcta: "El peso poblacional de América Latina y las diásporas hispanas.",
    incorrectas: [
      "La inexistencia de hablantes nativos fuera de España.",
      "La reducción continuada de su uso en América."
    ]
  },
  {
    enunciado: "¿Cuál es un reto para la difusión futura del español como lengua global?",
    correcta: "Competir en espacios estratégicos con otras lenguas de gran alcance y potenciar recursos tecnológicos propios.",
    incorrectas: [
      "Evitar la enseñanza de ELE para preservar la unidad.",
      "Proscribir la variación dialectal en los medios."
    ]
  },
  {
    enunciado: "¿Qué principio guía la política panhispánica contemporánea?",
    correcta: "La unidad en la diversidad: una norma común abierta a la variación geográfica y social.",
    incorrectas: [
      "La imposición de un único estándar peninsular.",
      "La fragmentación en normas mutuamente excluyentes."
    ]
  },
  {
    enunciado: "En el área rioplatense, ¿cuál es una forma imperativa coloquial de vos?",
    correcta: "Vení / Decime / Hablá.",
    incorrectas: [
      "Ven / Di / Habla (formas de tú).",
      "Venid / Decid / Hablad (formas de vosotros)."
    ]
  },
  {
    enunciado: "¿Qué rasgo prosódico reconocible aparece en partes del español caribeño?",
    correcta: "Entonaciones con patrones ascendentes característicos en enunciados declarativos.",
    incorrectas: [
      "Ausencia total de diferencias entonativas con el español peninsular.",
      "Entonación monótona obligatoria en todo el registro."
    ]
  },
  {
    enunciado: "¿Qué alternativa describe mejor la situación nominal de países/territorios con español oficial?",
    correcta: "Se extiende por más de veinte países y territorios, con distintos marcos constitucionales.",
    incorrectas: [
      "Se limita a España y dos países sudamericanos.",
      "No es oficial en ningún estado soberano de América."
    ]
  },
  {
    enunciado: "¿Qué papel tienen los medios de streaming en la circulación del español?",
    correcta: "Favorecen la circulación transnacional de acentos, léxico y formatos culturales en español.",
    incorrectas: [
      "Han eliminado el interés por aprender español.",
      "Solo difunden contenidos en estándares europeos."
    ]
  },
  {
    enunciado: "¿Cuál es un efecto del contacto con lenguas amerindias en el español local además del léxico?",
    correcta: "Influencia en patrones discursivos y, en casos, en segmentación prosódica o calcos sintácticos.",
    incorrectas: [
      "Imposibilidad de que existan interferencias gramaticales.",
      "Sustitución completa del sistema verbal por el indígena."
    ]
  }
];
