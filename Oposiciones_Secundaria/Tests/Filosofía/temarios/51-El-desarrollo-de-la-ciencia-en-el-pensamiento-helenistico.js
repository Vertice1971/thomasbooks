// temarios/51-El-desarrollo-de-la-ciencia-en-el-pensamiento-helenistico.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué periodo histórico denomina comúnmente ‘helenístico’?",
    correcta: "Desde la muerte de Alejandro Magno (323 a. C.) hasta la consolidación del dominio romano en el Mediterráneo",
    incorrectas: [
      "Desde las guerras médicas hasta la caída de Roma (490 a. C.–476 d. C.)",
      "Desde el surgimiento del cristianismo hasta la Edad Media plena"
    ]
  },
  {
    enunciado: "¿Qué rasgo metodológico caracteriza a la ciencia helenística frente a la etapa clásica?",
    correcta: "Mayor especialización y combinación de observación precisa con formulación matemática",
    incorrectas: [
      "Abandono del razonamiento demostrativo",
      "Reducción de la investigación a la especulación mitológica"
    ]
  },
  {
    enunciado: "¿Qué institución simboliza el programa científico del helenismo bajo los Ptolomeos?",
    correcta: "El Museo y la Biblioteca de Alejandría como centro de investigación y archivo de saberes",
    incorrectas: [
      "El Areópago ateniense como escuela de ingenieros",
      "El ágora de Corinto como observatorio astronómico"
    ]
  },
  {
    enunciado: "¿Qué pretende el catálogo de los Pinakes asociado a la Biblioteca de Alejandría?",
    correcta: "Organizar y clasificar obras por autores y materias para la investigación",
    incorrectas: [
      "Censurar las obras científicas contrarias a Platón",
      "Sustituir los textos originales por resúmenes anónimos"
    ]
  },
  {
    enunciado: "¿Cuál es la aportación metodológica de Euclides con los Elementos?",
    correcta: "La sistematización axiomático-deductiva de la geometría",
    incorrectas: [
      "La invención de la geometría analítica con coordenadas",
      "La primera tabla trigonométrica completa en grados"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a una demostración euclídea?",
    correcta: "Partir de definiciones, postulados y teoremas ya probados para deducir nuevas proposiciones",
    incorrectas: [
      "Recurrir solo a la inducción por enumeración exhaustiva",
      "Sustituir la prueba por autoridad poética"
    ]
  },
  {
    enunciado: "¿Qué enuncia la ley de la palanca atribuida a Arquímedes?",
    correcta: "Que magnitudes inversamente proporcionales a sus brazos están en equilibrio alrededor del fulcro",
    incorrectas: [
      "Que todo cuerpo en reposo permanece en reposo salvo fuerza neta",
      "Que la presión es igual a fuerza por área"
    ]
  },
  {
    enunciado: "¿Qué afirma el principio de Arquímedes en hidrostatica?",
    correcta: "Que un cuerpo sumergido pierde un peso igual al del fluido desalojado",
    incorrectas: [
      "Que todo cuerpo pesado cae con velocidad proporcional a su masa",
      "Que la presión de un gas es constante a temperatura variable"
    ]
  },
  {
    enunciado: "¿Qué técnica matemática empleó Arquímedes para aproximar áreas y volúmenes?",
    correcta: "El método de agotamiento, precursor del cálculo integral",
    incorrectas: [
      "El desarrollo en series de Fourier",
      "La regla de Cramer para sistemas lineales"
    ]
  },
  {
    enunciado: "¿Qué artefacto hidráulico se asocia tradicionalmente a Arquímedes?",
    correcta: "El tornillo de Arquímedes para elevar agua",
    incorrectas: [
      "La clepsidra musical de Ctesibio",
      "El astrolabio planisférico medieval"
    ]
  },
  {
    enunciado: "¿Cómo midió Eratóstenes la circunferencia terrestre?",
    correcta: "Comparando ángulos de sombras en Siena y Alejandría y la distancia entre ambas",
    incorrectas: [
      "Pesando rocas en distintos puntos del globo",
      "Midiendo el tiempo de caída de cuerpos desde torres"
    ]
  },
  {
    enunciado: "¿Qué defendió Aristarco de Samos en astronomía?",
    correcta: "Una hipótesis heliocéntrica y estimaciones de tamaños y distancias del Sol y la Luna",
    incorrectas: [
      "La inmovilidad del Sol alrededor de la Tierra",
      "La inexistencia del vacío fuera del cosmos"
    ]
  },
  {
    enunciado: "¿Qué descubre Hiparco en astronomía de posición?",
    correcta: "La precesión de los equinoccios y elabora un catálogo estelar",
    incorrectas: [
      "Las manchas solares y su ciclo de 11 años",
      "Las lunas de Júpiter mediante telescopio"
    ]
  },
  {
    enunciado: "¿Qué innovación geométrica utiliza Hiparco que será clave para Ptolomeo?",
    correcta: "Tablas de cuerdas, antecedente de la trigonometría",
    incorrectas: [
      "Cálculo diferencial de funciones trigonométricas",
      "Coordenadas cartesianas ortogonales"
    ]
  },
  {
    enunciado: "¿Qué rasgos definen el modelo astronómico del Almagesto de Ptolomeo?",
    correcta: "Geocentrismo con deferentes, epiciclos y, en algunos casos, equantes",
    incorrectas: [
      "Heliocentrismo con órbitas elípticas y ley de áreas",
      "Sistema de vórtices cartesianos en un éter mecánico"
    ]
  },
  {
    enunciado: "¿Qué estudia Apolonio de Perga en su obra sobre cónicas?",
    correcta: "La teoría de la elipse, la parábola y la hipérbola y su nomenclatura",
    incorrectas: [
      "La suma de series infinitas convergentes",
      "La teoría de números primos gemelos"
    ]
  },
  {
    enunciado: "¿Qué líneas de investigación abren Herófilo y Erasístrato en Alejandría?",
    correcta: "Anatomía y fisiología mediante disecciones que distinguen estructuras nerviosas y vasculares",
    incorrectas: [
      "Cirugía cardíaca con prótesis metálicas",
      "Trasplantes de órganos con anestesia química moderna"
    ]
  },
  {
    enunciado: "¿Qué afirmación es coherente con la medicina helenística frente al hipocratismo clásico?",
    correcta: "Mayor énfasis en observación anatómica y discusión entre escuelas dogmática y empirista",
    incorrectas: [
      "Rechazo total de la experiencia clínica en favor de mitos",
      "Abandono del juramento médico por irrelevante"
    ]
  },
  {
    enunciado: "¿Qué inventos se asocian a Ctesibio de Alejandría?",
    correcta: "Bomba de émbolo y clepsidra de precisión",
    incorrectas: [
      "Telescopio refractor y barómetro de mercurio",
      "Reloj de péndulo y prensa hidráulica de tornillo"
    ]
  },
  {
    enunciado: "¿Qué dispositivo describe Herón de Alejandría en su Pneumática?",
    correcta: "La eolípila (juguete de vapor) y automatas basados en presión de aire",
    incorrectas: [
      "El regulador centrífugo para máquinas industriales",
      "La dinamo eléctrica de corriente continua"
    ]
  },
  {
    enunciado: "¿Qué propone la física estoica sobre la constitución del cosmos?",
    correcta: "Un universo continuo, animado por pneuma y regido por logos",
    incorrectas: [
      "Un vacío absoluto dentro del cosmos sin fuerzas cohesionantes",
      "Átomos sin cualidades en reposo eterno y sin causalidad"
    ]
  },
  {
    enunciado: "¿Qué rasgo distingue al atomismo epicúreo?",
    correcta: "Átomos y vacío con un ‘clinamen’ o desvío espontáneo para permitir libertad",
    incorrectas: [
      "Negación del vacío y del movimiento atómico",
      "Identificación de los átomos con ideas eternas"
    ]
  },
  {
    enunciado: "¿Qué instrumentos favorecen la precisión de la astronomía helenística?",
    correcta: "Gnomon, dioptra y esferas armilares para medición angular",
    incorrectas: [
      "Telescopios de reflexión con espejo parabólico",
      "Espectrómetros de prisma para líneas de emisión"
    ]
  },
  {
    enunciado: "¿Qué avance geográfico se atribuye a Eratóstenes además de su medición terrestre?",
    correcta: "Un sistema de coordenadas con latitudes y longitudes aproximadas para mapas",
    incorrectas: [
      "La proyección de Mercator para navegación oceánica",
      "La primera cartografía con isobaras meteorológicas"
    ]
  },
  {
    enunciado: "¿Qué enfoque epistemológico se consolida en la ciencia helenística?",
    correcta: "Autonomía relativa de las ciencias frente a la metafísica general",
    incorrectas: [
      "Identificación de toda ciencia con retórica judicial",
      "Reducción del saber técnico a superstición ritual"
    ]
  },
  {
    enunciado: "¿Qué tratamiento ofrece Euclides a la óptica?",
    correcta: "Geometriza la visión mediante rayos visuales rectilíneos y leyes de perspectiva",
    incorrectas: [
      "Explica la visión por absorción de partículas lumínicas en la retina microscópica",
      "Deriva la ley de Snell con cálculo diferencial"
    ]
  },
  {
    enunciado: "¿Qué estudio realiza Ptolomeo en su Óptica?",
    correcta: "Observa sistemáticamente la refracción en distintos medios y propone tablas angulares",
    incorrectas: [
      "Formula la teoría corpuscular de Newton",
      "Construye lentes acromáticas de doblete"
    ]
  },
  {
    enunciado: "¿Qué relación guardan técnica e investigación en Alejandría?",
    correcta: "Se retroalimentan: artefactos hidráulicos y neumáticos estimulan hipótesis físicas",
    incorrectas: [
      "La técnica queda prohibida para no contaminar la ciencia ‘pura’",
      "La investigación teórica se subordina al espectáculo teatral"
    ]
  },
  {
    enunciado: "¿Qué idea sobre el vacío comparten en general los estoicos dentro del cosmos?",
    correcta: "Defienden un plenum interno, reservando el vacío al exterior del mundo",
    incorrectas: [
      "Postulan vacío absoluto ubicuo en el interior del cosmos",
      "Identifican el vacío con la sustancia divina del universo"
    ]
  },
  {
    enunciado: "¿Qué distinción práctica se consolida entre saber teórico y saber práctico?",
    correcta: "El teórico busca causas y demostraciones; el práctico orienta producción y cura",
    incorrectas: [
      "El teórico renuncia a la verdad; el práctico la garantiza",
      "El práctico prescinde por completo de la experiencia"
    ]
  },
  {
    enunciado: "¿Qué legado matemático helenístico condiciona la astronomía medieval e islámica?",
    correcta: "La geometría euclídea y las tablas trigonométricas derivadas de Hiparco y Ptolomeo",
    incorrectas: [
      "El cálculo infinitesimal de Arquímedes en notación moderna",
      "La geometría analítica con ejes cartesianos"
    ]
  },
  {
    enunciado: "¿Qué obra de Ptolomeo fue clave en su transmisión árabe-latina?",
    correcta: "El Almagesto, base de la astronomía geocéntrica durante siglos",
    incorrectas: [
      "De revolutionibus, que instauró el heliocentrismo",
      "Sidereus Nuncius, primer tratado telescópico"
    ]
  },
  {
    enunciado: "¿Qué figura del helenismo clásico de botánica sistemática sucedió a Aristóteles en el Liceo?",
    correcta: "Teofrasto, autor de Historia de las plantas",
    incorrectas: [
      "Diógenes Laercio, compilador de biografías",
      "Plotino, fundador del neoplatonismo"
    ]
  },
  {
    enunciado: "¿Qué práctica experimental controvertida atestiguan fuentes para Alejandría?",
    correcta: "Disecciones —y según algunos testimonios, vivisecciones— en estudios anatómicos",
    incorrectas: [
      "Transfusiones sanguíneas con anticoagulantes",
      "Microscopía óptica de tejidos celulares"
    ]
  },
  {
    enunciado: "¿Qué noción astronómica introduce el ‘equant’ en Ptolomeo?",
    correcta: "Un punto respecto del cual el movimiento del centro del epiciclo es uniforme",
    incorrectas: [
      "El punto de Lagrange donde se equilibran fuerzas",
      "El foco heliocéntrico de las órbitas elípticas"
    ]
  },
  {
    enunciado: "¿Qué papel desempeña el mecenazgo en la ciencia helenística?",
    correcta: "Sostiene comunidades de sabios transmediterráneas con recursos y estabilidad",
    incorrectas: [
      "Sustituye la investigación por propaganda religiosa",
      "Prohíbe la circulación de manuscritos científicos"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al método geométrico en mecánica estática helenística?",
    correcta: "Deducciones sobre equilibrio y centros de gravedad con figuras y proporciones",
    incorrectas: [
      "Experimentos con sensores electrónicos",
      "Simulaciones numéricas de alta precisión"
    ]
  },
  {
    enunciado: "¿Qué escuela médica resalta la primacía de la experiencia sobre hipótesis ocultas?",
    correcta: "La empirista, frente a la dogmática que apela a causas internas no observables",
    incorrectas: [
      "La estoica, que niega toda terapéutica",
      "La pitagórica, que reduce la medicina a números"
    ]
  },
  {
    enunciado: "¿Qué rasgo general sintetiza el legado científico del helenismo?",
    correcta: "Fusión de teoría matemática, observación medida y técnica instrumental",
    incorrectas: [
      "Triunfo del escepticismo que bloquea la demostración",
      "Rechazo del cálculo y de la medición en favor del mito"
    ]
  },
  {
    enunciado: "¿Qué influencia ejerció la ciencia helenística en épocas posteriores?",
    correcta: "Fue transmitida por traductores greco-arábigos y alimentó el Renacimiento europeo",
    incorrectas: [
      "Desapareció sin dejar huella tras la caída de Alejandría",
      "Se mantuvo solo en tradición oral monástica sin textos"
    ]
  }
];
