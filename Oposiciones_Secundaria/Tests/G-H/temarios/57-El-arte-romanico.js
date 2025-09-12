// temarios/57-El-arte-romanico.js
var PREGUNTAS = [
  {
    enunciado: "En Historia del Arte, el término 'románico' designa operativamente el primer estilo paneuropeo entre aproximadamente el año 1000 y comienzos del siglo XIII.",
    correcta: "Aproximadamente 1000–1200/1230, con pervivencias locales",
    incorrectas: ["Aproximadamente 850–1000, limitado a Francia y Alemania", "Aproximadamente 1200–1400, centrado en Italia y Flandes"]
  },
  {
    enunciado: "Entre los factores que explican la expansión del románico destacan las reformas monásticas y las grandes rutas de peregrinación.",
    correcta: "Reformas de Cluny y Císter, repoblación y peregrinaciones",
    incorrectas: ["Sólo la Reconquista ibérica sin influencia monástica", "Exclusivamente la arquitectura civil y los gremios urbanos del siglo XIV"]
  },
  {
    enunciado: "La liturgia medieval contribuyó a definir el templo románico como un microcosmos simbólico y una catequesis visual para la comunidad.",
    correcta: "El templo se concibió como microcosmos y catequesis visual",
    incorrectas: ["La liturgia evitó cualquier simbolismo espacial", "La liturgia favoreció exclusivamente auditorios civiles sin imagen"]
  },
  {
    enunciado: "Cite ámbitos regionales con identidad románica propia en Europa occidental.",
    correcta: "Borgoña, Aquitania, Auvernia; Cataluña, Castilla y León, Galicia",
    incorrectas: ["Sólo Inglaterra y Flandes, sin variantes peninsulares", "Exclusivamente Lombardía y Toscana, sin Francia ni Península Ibérica"]
  },
  {
    enunciado: "Identifique un rasgo estructural básico del lenguaje constructivo románico.",
    correcta: "Arco de medio punto, bóveda de cañón, muros portantes",
    incorrectas: ["Arco rebajado gótico, esqueleto ligero y bóveda de abanico", "Estructuras metálicas y vidrio continuo como en la modernidad"]
  },
  {
    enunciado: "¿Qué función desempeñan bóvedas de arista y arcos fajones en las naves románicas?",
    correcta: "Fajones y aristas ayudan a canalizar empujes y módulos",
    incorrectas: ["Sólo decoran y no participan en la estructura", "Se reservan a la arquitectura civil y no aparecen en templos"]
  },
  {
    enunciado: "Mencione materiales y aparejos frecuentes en fábricas románicas.",
    correcta: "Sillería, sillarejo y opus spicatum",
    incorrectas: ["Hormigón armado y curtain wall", "Adobe estabilizado con acero pretensado"]
  },
  {
    enunciado: "Señale una razón funcional de la girola y las capillas radiantes en iglesias de peregrinación.",
    correcta: "Girola y capillas radiantes organizan el flujo devocional",
    incorrectas: ["Suprimen el transepto para ganar longitud", "Colocan el altar mayor en el nártex para acortar recorridos"]
  },
  {
    enunciado: "Indique un rasgo distintivo del 'Primer románico' catalán (lombardo).",
    correcta: "Bandas lombardas y lesenas en ábsides lisos",
    incorrectas: ["Grandes tracerías caladas y arbotantes", "Cúpulas bulbosas con linternas barrocas"]
  },
  {
    enunciado: "Nombre un referente del románico catalán por su arquitectura y pintura mural.",
    correcta: "Sant Climent de Taüll y su Pantocrátor absidal",
    incorrectas: ["La catedral gótica de León y su vidriera flamígera", "El barroco churrigueresco salmantino del siglo XVIII"]
  },
  {
    enunciado: "Explique la relevancia de la catedral de Santiago de Compostela en el románico.",
    correcta: "Iglesia de peregrinación con girola; Pórtico de la Gloria en transición",
    incorrectas: ["Templo renacentista de planta centralizada", "Basílica neoclásica con cúpula de cascarón autoportante"]
  },
  {
    enunciado: "Identifique dos hitos del románico castellano-leonés y su rasgo sobresaliente.",
    correcta: "Frómista por su claridad volumétrica; San Isidoro por el Panteón Real",
    incorrectas: ["Ambas por sus grandes vidrieras góticas policromadas", "Ambas por su esquema basilical renacentista centralizado"]
  },
  {
    enunciado: "Mencione un emblema iconográfico de la escultura románica aragonesa.",
    correcta: "Crismón trinitario de la catedral de Jaca",
    incorrectas: ["Tímpano humanista con héroes clásicos", "Relieve manierista con escorzos miguelangelescos"]
  },
  {
    enunciado: "Defina la influencia de Cluny en la arquitectura románica europea.",
    correcta: "Cluny proyectó monumentalidad y tribunas con influencia continental",
    incorrectas: ["Cluny suprimió el coro y promovió salas centrales laicas", "Cluny fue un pequeño priorato sin impacto arquitectónico"]
  },
  {
    enunciado: "Cite un rasgo del románico anglonormando representado en Durham.",
    correcta: "Catedral de Durham con alternancia de soportes y avance hacia sexpartitas",
    incorrectas: ["Capilla palatina renacentista de planta centralizada", "Iglesia barroca con cúpula elíptica de Borromini"]
  },
  {
    enunciado: "Los claustros románicos cumplen funciones litúrgicas y comunitarias específicas.",
    correcta: "Espacio monástico de tránsito, lectura y meditación con capiteles historiados",
    incorrectas: ["Patio urbano mercantil con lonjas y almacenes", "Plaza cívica destinada a asambleas municipales laicas"]
  },
  {
    enunciado: "Caracterice el lenguaje formal de la escultura románica.",
    correcta: "Frontalidad, jerarquía, expresividad sintética",
    incorrectas: ["Naturalismo anatómico renacentista y sfumato", "Abstracción geométrica propia del siglo XX exclusivamente"]
  },
  {
    enunciado: "Explique la función doctrinal de las portadas románicas.",
    correcta: "Portadas como umbral doctrinal y catequético",
    incorrectas: ["Portadas como zonas neutras sin programa", "Portadas reservadas a inscripciones legales civiles"]
  },
  {
    enunciado: "Identifique un programa iconográfico muy difundido en el románico.",
    correcta: "Cristo en Majestad con Tetramorfos, muy difundido",
    incorrectas: ["La Transfiguración como único programa permitido", "Sólo escenas profanas de corte y caza medieval"]
  },
  {
    enunciado: "Nombre un maestro o taller clave de la escultura románica francesa.",
    correcta: "Gislebertus, maestro de Autun",
    incorrectas: ["Bernini, escultor románico de Autun", "Cellini, autor del Juicio Final románico de Autun"]
  },
  {
    enunciado: "Describa un rasgo típico de la pintura mural románica.",
    correcta: "Contorno fuerte, color plano y simbolismo cromático",
    incorrectas: ["Perspectiva científica y claroscuro renacentista", "Pointillisme y cromatismo impresionista"]
  },
  {
    enunciado: "Identifique un género pictórico portátil frecuente en el románico.",
    correcta: "Frontales de altar en temple sobre tabla",
    incorrectas: ["Óleo sobre lienzo con veladuras manieristas", "Acrílico industrial sobre PVC alveolar"]
  },
  {
    enunciado: "Relacione la miniatura románica con tradiciones previas en la Península Ibérica.",
    correcta: "Miniaturas monásticas con herencias tardoantiguas e hispanas",
    incorrectas: ["Únicamente manuscritos laicos sin influencia previa", "Sólo códices impresos en tipos móviles desde 1050"]
  },
  {
    enunciado: "¿Qué papel desempeñan los bestiarios en la iconografía románica?",
    correcta: "Bestiarios como soporte moralizante de vicios y virtudes",
    incorrectas: ["Bestiarios como inventarios zoológicos científicos modernos", "Ausencia total de animales por prohibición sinodal"]
  },
  {
    enunciado: "Compare, en términos generales, Cluny y Císter dentro del románico.",
    correcta: "Cluny pompa e iconografía; Císter austeridad y luz tamizada",
    incorrectas: ["Ambas suprimen toda imagen por iconoclasia", "Ambas privilegian exclusivamente la decoración textil"]
  },
  {
    enunciado: "Sintetice la posición de San Bernardo respecto a la decoración escultórica excesiva.",
    correcta: "Reprochó la curiositas y defendió sobriedad",
    incorrectas: ["Defendió la exuberancia como vía única hacia Dios", "Prohibió la arquitectura de piedra en monasterios"]
  },
  {
    enunciado: "Identifique una fuente técnica medieval clave para conocer oficios y materiales.",
    correcta: "Describe técnicas y materiales de los oficios medievales",
    incorrectas: ["Es un tratado renacentista sobre perspectiva lineal", "Es una crónica cortesana del siglo XIV sin contenido técnico"]
  },
  {
    enunciado: "Señale técnicas constructivas propias de obras románicas.",
    correcta: "Cimbras, encofrados y morteros hidráulicos",
    incorrectas: ["Perfiles laminados y soldadura por arco", "Prefabricados pretensados de hormigón polímero"]
  },
  {
    enunciado: "Explique el sentido de las marcas de cantero y la modularidad en la obra románica.",
    correcta: "Marcas de cantero y módulos como signos de organización",
    incorrectas: ["Ausencia total de marcas por prohibición canónica", "Piezas únicas sin repetición por rechazo a la estandarización"]
  },
  {
    enunciado: "Describa un rasgo técnico clave de la transición al gótico desde el románico.",
    correcta: "Arco apuntado y crucería con mayor luz y altura",
    incorrectas: ["Retorno al dintel adovelado sin bóvedas", "Sustitución por cubiertas vegetales efímeras"]
  },
  {
    enunciado: "¿Qué figura vincula el nuevo régimen lumínico del inicio gótico?",
    correcta: "Suger impulsó un programa lumínico y simbólico en Saint-Denis",
    incorrectas: ["Suger promovió la iconoclasia total y templos ciegos", "Suger fue un arquitecto renacentista italiano del Cinquecento"]
  },
  {
    enunciado: "Valore el papel del Camino de Santiago en la difusión del románico hispano.",
    correcta: "Corredor de formas y talleres a lo largo del Camino de Santiago",
    incorrectas: ["Ruta exclusivamente militar sin impacto artístico", "Vía cerrada a extranjeros por edictos regios"]
  },
  {
    enunciado: "Cite referentes de portadas y claustros románicos en Francia.",
    correcta: "Moissac, Vézelay y Conques como referentes",
    incorrectas: ["San Lorenzo de El Escorial y San Pedro del Vaticano", "San Carlo alle Quattro Fontane y Sant'Ivo alla Sapienza"]
  },
  {
    enunciado: "Tema frecuente en los tímpanos románicos y modo de lectura.",
    correcta: "Tema frecuente con lectura jerárquica y axial",
    incorrectas: ["Tema prohibido por concilios por su dramatismo", "Tema reservado a manuscritos y vedado en piedra"]
  },
  {
    enunciado: "Contextualice el traslado de pinturas murales pirenaicas a museos.",
    correcta: "Traslado a museos (MNAC, The Cloisters) entre los siglos XIX–XX",
    incorrectas: ["Prohibido todo traslado desde el siglo XII", "Sólo ocurrió en el Barroco para frescos italianos"]
  },
  {
    enunciado: "Identifique dos autores clave de referencia para el estudio del románico.",
    correcta: "Schapiro y Duby aportan enfoques formal e histórico-social",
    incorrectas: ["Únicamente tratados técnicos renacentistas son válidos", "Sólo fuentes literarias clásicas explican el románico"]
  },
  {
    enunciado: "¿Quién formuló la noción de 'Primer románico' aplicada al caso catalán?",
    correcta: "Puig i Cadafalch y el concepto de 'Primer románico'",
    incorrectas: ["Viollet-le-Duc, autor del concepto de románico catalán", "Gropius, creador del término en la Bauhaus"]
  },
  {
    enunciado: "Justifique la relevancia del claustro de Santo Domingo de Silos.",
    correcta: "Silos destaca por capiteles y relieves del claustro",
    incorrectas: ["Silos es relevante sólo por su cúpula renacentista", "Silos carece de escultura figurada por norma cisterciense"]
  },
  {
    enunciado: "Explique la intencionalidad de la penumbra en interiores románicos.",
    correcta: "Penumbra por técnica y simbolismo teológico",
    incorrectas: ["Penumbra por prohibición absoluta de ventanas", "Interiores siempre bañados por vidrieras monumentales"]
  },
  {
    enunciado: "Integre el simbolismo vegetal y animal dentro de los programas bíblicos románicos.",
    correcta: "Simbolismo vegetal y animal con función moral y tipológica",
    incorrectas: ["Decoración naturalista sin significado religioso", "Motivos exóticos importados del Rococó dieciochesco"]
  }
];
