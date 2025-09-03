// temarios/26-Origenes-y-desarrollo-del-feudalismo-la-economia-senorial-debate-historiografico.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué designa en sentido amplio el término feudalismo en la historiografía europea?",
    correcta: "Un conjunto de relaciones políticas, sociales y económicas basadas en dependencias personales y señorío sobre la tierra",
    incorrectas: [
      "Exclusivamente un sistema de explotación minera controlado por la monarquía",
      "Un régimen de democracia directa campesina sin jerarquías ni tributos"
    ]
  },
  {
    enunciado: "¿Qué enfoque identifica el feudalismo como modo de producción articulado por rentas y coerción sobre el campesinado?",
    correcta: "El enfoque marxista",
    incorrectas: [
      "La visión positivista del siglo XIX centrada en biografías",
      "La teoría de la modernización aplicada al siglo XX"
    ]
  },
  {
    enunciado: "¿Qué perspectiva subraya los vínculos de vasallaje, el beneficio y el feudo como claves explicativas?",
    correcta: "La perspectiva institucional-jurídica",
    incorrectas: [
      "La antropología estructural aplicada a sociedades cazadoras-recolectoras",
      "La teoría cuantitativa de ciclos económicos largos sin fuentes medievales"
    ]
  },
  {
    enunciado: "¿Qué autor clásico destacó la unidad de sociedad y mentalidades en el estudio del feudalismo?",
    correcta: "Marc Bloch",
    incorrectas: [
      "Edward Gibbon",
      "Max Weber en La ética protestante"
    ]
  },
  {
    enunciado: "¿Qué fenómeno político-social se asocia al paso de la Antigüedad tardía al mundo medieval occidental?",
    correcta: "La privatización de funciones públicas y la fragmentación del poder",
    incorrectas: [
      "La unificación imperial europea bajo un único emperador",
      "La desaparición de toda forma de aristocracia local"
    ]
  },
  {
    enunciado: "¿Qué institución carolingia fomentó la concesión de tierras y prerrogativas a magnates y eclesiásticos?",
    correcta: "Las inmunidades y beneficios otorgados por capitulares",
    incorrectas: [
      "La expropiación general de tierras eclesiásticas",
      "La abolición de toda jurisdicción señorial"
    ]
  },
  {
    enunciado: "¿Qué tesis denomina 'mutación feudal' a los cambios acelerados en torno al año 1000?",
    correcta: "La que plantea una expansión del poder señorial, la justicia privada y el incastellamento",
    incorrectas: [
      "La que afirma una centralización monárquica absoluta en el siglo XI",
      "La que niega la existencia de castillos y clientelas armadas"
    ]
  },
  {
    enunciado: "¿Qué crítica planteó Dominique Barthélemy a la idea de una ruptura total hacia el año 1000?",
    correcta: "Que hubo más continuidades y variaciones regionales que una mutación súbita generalizada",
    incorrectas: [
      "Que el feudalismo surgió en China y se importó a Europa",
      "Que las fuentes notariales son imaginarias y no existen"
    ]
  },
  {
    enunciado: "¿Qué obra cuestionó el modelo piramidal clásico de feudos y vasallaje como sistema uniforme?",
    correcta: "Fiefs and Vassals, de Susan Reynolds",
    incorrectas: [
      "The Medieval Economy, de M. M. Postan",
      "Religion and the Rise of Capitalism, de R. H. Tawney"
    ]
  },
  {
    enunciado: "¿Qué distingue al señorío territorial del señorío jurisdiccional en la Europa medieval?",
    correcta: "El primero controla tierras y rentas; el segundo monopolios y coerción sobre hombres y justicia",
    incorrectas: [
      "El territorial es urbano y mercantil; el jurisdiccional es exclusivamente marítimo",
      "El territorial se basa en minería; el jurisdiccional en comercio internacional"
    ]
  },
  {
    enunciado: "¿Qué parte de la explotación señorial se cultivaba para el consumo y renta directa del señor?",
    correcta: "La reserva señorial o demesne",
    incorrectas: [
      "El manso libre",
      "La tierra comunal de pastos y montes"
    ]
  },
  {
    enunciado: "¿Qué innovaciones agrarias se asocian, con ritmos desiguales, a la expansión medieval?",
    correcta: "Arado de vertedera, collarín rígido, rotación trienal y molinos",
    incorrectas: [
      "Tractor de vapor y fertilizantes químicos en el siglo XI",
      "Riego por pivote central en la Alta Edad Media"
    ]
  },
  {
    enunciado: "¿Qué tipo de rentas señoriales combinaban trabajo obligatorio y pagos en especie o dinero?",
    correcta: "Corveas, censos y monopolios banales",
    incorrectas: [
      "Dividendos bursátiles y rentas de deuda pública medieval",
      "Únicamente diezmos sin otras exacciones"
    ]
  },
  {
    enunciado: "¿Qué papel desempeñó la Iglesia en la economía y poder señorial?",
    correcta: "Fue gran propietaria con inmunidades, rentas y jurisdicciones propias",
    incorrectas: [
      "Renunció a toda tierra y vivió solo de donativos ocasionales",
      "Se prohibió su participación en mercados y ferias"
    ]
  },
  {
    enunciado: "¿Qué movimientos eclesiásticos buscaron limitar la violencia aristocrática?",
    correcta: "La Paz y Tregua de Dios",
    incorrectas: [
      "La Liga Hanseática",
      "El Concilio de Trento en el siglo XVI"
    ]
  },
  {
    enunciado: "¿Qué relación articulaba el vínculo feudo-vasallático clásico?",
    correcta: "Homenaje e investidura a cambio de auxilium et consilium",
    incorrectas: [
      "Elección popular anual del señor por sufragio universal",
      "Contrato mercantil sin obligaciones personales"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la sociedad estamental medieval occidental?",
    correcta: "Una jerarquía de oratores, bellatores y laboratores con estatutos y privilegios",
    incorrectas: [
      "Una sociedad plenamente igualitaria sin fueros ni privilegios",
      "Una movilidad social ilimitada garantizada por ley"
    ]
  },
  {
    enunciado: "¿Qué rasgo define a la condición de siervo en el señorío medieval?",
    correcta: "La adscripción a la tierra con obligaciones personales y limitaciones de movilidad",
    incorrectas: [
      "La plena libertad de movimiento y exención fiscal permanente",
      "La ciudadanía urbana con acceso a magistraturas"
    ]
  },
  {
    enunciado: "¿Qué factores impulsaron el crecimiento entre los siglos XI y XIII?",
    correcta: "Mejoras agrarias, expansión demográfica, comercio y reactivación urbana",
    incorrectas: [
      "Aislamiento comercial, caída poblacional y abandono de ciudades",
      "Prohibición del crédito y cierre de ferias"
    ]
  },
  {
    enunciado: "¿Qué instituciones urbanas medievales gestionaron autonomía y fiscalidad local?",
    correcta: "Comunas, concejos y gremios",
    incorrectas: [
      "Ministerios nacionales de economía",
      "Provincias imperiales dirigidas por gobernadores romanos"
    ]
  },
  {
    enunciado: "¿Qué instrumento permitió a reyes reforzar justicia y fiscalidad en la Baja Edad Media?",
    correcta: "La generalización de oficiales y tribunales reales con impuestos permanentes",
    incorrectas: [
      "La renuncia a toda recaudación en favor de los señores",
      "La prohibición de escritos y registros judiciales"
    ]
  },
  {
    enunciado: "¿Qué describe el término incastellamento en la historiografía italiana?",
    correcta: "La concentración de poblaciones y poderes en torno a castillos y recintos",
    incorrectas: [
      "La demolición general de fortalezas por orden papal",
      "La urbanización planificada de catedrales renacentistas"
    ]
  },
  {
    enunciado: "¿Qué documento inglés de 1086 refleja fiscalidad y tenencia de la tierra tras la conquista normanda?",
    correcta: "El Domesday Book",
    incorrectas: [
      "La Magna Carta de 1215",
      "Las Siete Partidas de Alfonso X"
    ]
  },
  {
    enunciado: "¿Qué particularidad peninsular marcó la organización de la tierra y las comunidades en expansión?",
    correcta: "La frontera y repoblación con fueros, concejos y cartas puebla",
    incorrectas: [
      "La prohibición de crear núcleos urbanos en zonas de frontera",
      "La abolición de todo señorío eclesiástico desde el siglo XI"
    ]
  },
  {
    enunciado: "¿Qué nombres reciben las grandes corporaciones militares-religiosas con señoríos en la Península Ibérica?",
    correcta: "Órdenes de Calatrava, Santiago y Alcántara",
    incorrectas: [
      "Templo de Salomón, Eleusis y Pitagóricos",
      "Mendicantes cátaros y valdenses"
    ]
  },
  {
    enunciado: "¿Qué categorías señoriales se distinguen en la documentación castellana bajomedieval?",
    correcta: "Realengo, abadengo y solariego",
    incorrectas: [
      "Patriciado, plebiscito y consulado",
      "Provincia, prefectura y diócesis romana"
    ]
  },
  {
    enunciado: "¿Qué impacto tuvo la Peste Negra sobre el orden señorial en el siglo XIV?",
    correcta: "Provocó colapso demográfico, alzas salariales y reajustes o reacciones señoriales",
    incorrectas: [
      "Aumentó la población y redujo los salarios a la mitad",
      "Impidió cualquier conflicto social durante un siglo"
    ]
  },
  {
    enunciado: "¿Qué revueltas expresaron la tensión social en la Europa bajomedieval?",
    correcta: "La Jacquerie (1358), los Ciompi (1378) y 1381 en Inglaterra",
    incorrectas: [
      "La Comuna de París de 1871",
      "La Revolución de 1848 en Viena"
    ]
  },
  {
    enunciado: "¿Qué tendencia fiscal y militar caracteriza el tránsito hacia las monarquías autoritarias?",
    correcta: "Fiscalidad permanente y ejércitos regulares financiados de modo estable",
    incorrectas: [
      "Supresión de impuestos y disolución de los ejércitos",
      "Milicias campesinas autogestionadas como norma general"
    ]
  },
  {
    enunciado: "¿Qué fuente señorial permite conocer rentas, mansos y obligaciones en dominios eclesiásticos?",
    correcta: "Polípticos y cartularios",
    incorrectas: [
      "Poemarios épicos sin referencias económicas",
      "Guías de peregrinos exclusivas"
    ]
  },
  {
    enunciado: "¿Qué conjunto normativo lombardo influyó en la práctica feudal del norte de Italia?",
    correcta: "Los Libri Feudorum",
    incorrectas: [
      "La Ley de las XII Tablas romana republicana",
      "El Código Napoleónico del siglo XIX"
    ]
  },
  {
    enunciado: "¿Qué describe el concepto de manorialización en la historia económica medieval?",
    correcta: "La integración productiva y coercitiva del campo en unidades señoriales",
    incorrectas: [
      "La abolición de señoríos y creación de cooperativas estatales",
      "La desagrarización completa y paso a una economía industrial"
    ]
  },
  {
    enunciado: "¿Qué relación existe entre diezmo e Iglesia en la Europa medieval latina?",
    correcta: "El diezmo fue una exacción eclesiástica que gravaba la producción",
    incorrectas: [
      "El diezmo fue un impuesto municipal urbano exclusivo",
      "El diezmo se pagaba solo en metales preciosos y nunca en especie"
    ]
  },
  {
    enunciado: "¿Qué rasgo jurídico-social aparece con frecuencia en la transmisión del poder nobiliario?",
    correcta: "La primogenitura o reglas de partición entre herederos según regiones",
    incorrectas: [
      "La elección por sorteo anual del jefe de linaje",
      "La prohibición de que las mujeres administren señoríos"
    ]
  },
  {
    enunciado: "¿Qué papel jugaron Cluny y el Císter en la economía y el territorio medievales?",
    correcta: "Gestionaron amplios señoríos, difundieron innovaciones y articularon redes económicas",
    incorrectas: [
      "Se retiraron por completo del mundo y renunciaron a toda propiedad",
      "Apostaron por la destrucción de molinos y puentes por motivos espirituales"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la justicia señorial en el Alto Medievo occidental?",
    correcta: "La preeminencia de cortes locales, ordalías y juramentos bajo control del señor",
    incorrectas: [
      "La universalidad del juicio por jurado moderno",
      "La exclusividad de tribunales reales en todos los pleitos"
    ]
  },
  {
    enunciado: "¿Qué transformaciones económicas alteraron el equilibrio señorial a partir del siglo XIII?",
    correcta: "La monetarización creciente, el crédito mercantil y la expansión de ferias y rutas",
    incorrectas: [
      "La prohibición de la moneda y el retorno al trueque general",
      "La desaparición de los gremios y del comercio urbano"
    ]
  },
  {
    enunciado: "¿Qué opción refleja mejor la diversidad regional del llamado feudalismo europeo?",
    correcta: "Ritmos y formas distintas en Francia, Inglaterra, Germania, Italia y la Península Ibérica",
    incorrectas: [
      "Uniformidad total de instituciones y rentas en todo Occidente",
      "Predominio del modelo bizantino como norma común"
    ]
  },
  {
    enunciado: "¿Qué alternativa conceptual proponen varios historiadores a la noción totalizante de feudalismo?",
    correcta: "Usar categorías como señorío, lordship o relaciones de dependencia específicas",
    incorrectas: [
      "Sustituirla por el concepto de capitalismo financiero medieval",
      "Reducir la explicación a biografías de reyes y santos"
    ]
  },
  {
    enunciado: "¿Qué balance interpretativo es adecuado sobre el origen y desarrollo del feudalismo?",
    correcta: "Un proceso de larga duración con continuidades, rupturas y variaciones locales",
    incorrectas: [
      "Un acontecimiento puntual fechado exactamente en el año 1000",
      "Una imposición legal europea decidida por un concilio único"
    ]
  }
];
