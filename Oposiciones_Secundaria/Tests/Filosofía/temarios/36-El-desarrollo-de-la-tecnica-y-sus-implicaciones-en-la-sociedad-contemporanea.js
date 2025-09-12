// temarios/36-El-desarrollo-de-la-tecnica-y-sus-implicaciones-en-la-sociedad-contemporanea.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué entiende Ortega y Gasset por técnica en su análisis clásico?",
    correcta: "Un esfuerzo para ahorrar esfuerzo, ampliando las posibilidades vitales del ser humano",
    incorrectas: [
      "Un conjunto de procedimientos moralmente neutros sin relación con la vida humana",
      "Un saber teórico independiente de cualquier práctica o fabricación"
    ]
  },
  {
    enunciado: "En Heidegger, ¿qué expresa el término Gestell respecto de la técnica moderna?",
    correcta: "Un modo de desocultamiento que ‘enmarca’ lo real como fondo disponible",
    incorrectas: [
      "Una simple colección de herramientas al servicio de fines humanos conscientes",
      "La identificación de técnica con progreso moral y político"
    ]
  },
  {
    enunciado: "Según Hans Jonas, ¿qué exige la potencia de la tecnología moderna?",
    correcta: "Un principio de responsabilidad orientado a las consecuencias a largo plazo",
    incorrectas: [
      "Una ética centrada solo en la intención subjetiva del agente",
      "La renuncia total a la investigación científica por sus riesgos"
    ]
  },
  {
    enunciado: "¿Qué tesis central defiende Jacques Ellul sobre la técnica?",
    correcta: "Tiende a la autonomía, imponiendo su propia lógica de eficiencia",
    incorrectas: [
      "Está siempre subordinada a la moral y la política sin tensiones",
      "Depende exclusivamente de decisiones individuales aisladas"
    ]
  },
  {
    enunciado: "¿Qué relación establece Habermas entre racionalidad instrumental y técnica?",
    correcta: "La técnica se inserta en una racionalidad instrumental que puede colonizar el mundo de la vida",
    incorrectas: [
      "La técnica realiza de forma directa la racionalidad comunicativa deliberativa",
      "La técnica carece de toda dimensión racional; es puro azar histórico"
    ]
  },
  {
    enunciado: "¿Qué aporta Gilbert Simondon al estudio filosófico de la técnica?",
    correcta: "Una teoría de la individuación de los objetos técnicos y su modo de existencia",
    incorrectas: [
      "Una reducción de los artefactos a su valor de cambio económico",
      "Una negación de la evolución y genealogía de los objetos técnicos"
    ]
  },
  {
    enunciado: "¿Qué idea resume Langdon Winner con ‘los artefactos tienen política’?",
    correcta: "Las configuraciones técnicas pueden incorporar y distribuir poder y formas de autoridad",
    incorrectas: [
      "Los artefactos son políticamente neutrales por definición",
      "La técnica determina automáticamente regímenes democráticos"
    ]
  },
  {
    enunciado: "En la noción de ‘tecnociencia’, ¿qué rasgo es característico?",
    correcta: "La coproducción de conocimiento científico y desarrollo técnico, con intereses económicos y sociales entrelazados",
    incorrectas: [
      "La separación tajante entre ciencia pura y aplicaciones técnicas",
      "La indiferencia hacia financiación, patentes y transferencia"
    ]
  },
  {
    enunciado: "¿Cuál es un efecto social relevante de la automatización sobre el empleo?",
    correcta: "Polarización laboral y desplazamiento de tareas rutinarias",
    incorrectas: [
      "Aumento homogéneo de salarios en todos los sectores",
      "Desaparición exclusiva de trabajos altamente cualificados"
    ]
  },
  {
    enunciado: "¿Qué describe Manuel Castells con ‘sociedad red’?",
    correcta: "Una estructura social organizada en redes informacionales globales",
    incorrectas: [
      "Una comunidad cerrada autosuficiente sin comunicación externa",
      "Un modelo estrictamente jerárquico de producción industrial"
    ]
  },
  {
    enunciado: "¿Qué papel desempeña el capital riesgo y la inversión en I+D+i en el desarrollo técnico?",
    correcta: "Acelera la innovación y la transferencia desde laboratorios al mercado",
    incorrectas: [
      "Sustituye por completo la regulación y la política pública",
      "Impide por definición las disrupciones tecnológicas"
    ]
  },
  {
    enunciado: "¿Qué es la ‘brecha digital’?",
    correcta: "Desigualdad de acceso, uso significativo y resultados derivados de tecnologías de la información",
    incorrectas: [
      "La diferencia entre dispositivos analógicos y digitales en museos",
      "Un fenómeno exclusivamente generacional sin factores económicos"
    ]
  },
  {
    enunciado: "¿Qué riesgo ético plantean los sistemas de IA en relación con los datos?",
    correcta: "Reproducción de sesgos y discriminaciones presentes en los conjuntos de entrenamiento",
    incorrectas: [
      "Imposibilidad técnica de aprender patrones sociales",
      "Transparencia perfecta de todos los modelos por defecto"
    ]
  },
  {
    enunciado: "¿Qué principio formuló la ética de la investigación para gestionar la incertidumbre tecnológica?",
    correcta: "Principio de precaución ante posibles daños graves o irreversibles",
    incorrectas: [
      "Principio de indiferencia frente a impactos futuros",
      "Principio de maximización de beneficios económicos sin restricciones"
    ]
  },
  {
    enunciado: "En Kuhn, ¿cómo se relacionan los cambios técnicos con los científicos?",
    correcta: "Los cambios de paradigma pueden ir acompañados de revoluciones instrumentales y metodológicas",
    incorrectas: [
      "Los paradigmas excluyen cualquier innovación instrumental",
      "La técnica permanece inalterada durante las revoluciones científicas"
    ]
  },
  {
    enunciado: "¿Qué aporta Lakatos frente a Kuhn para entender programas tecnológicos?",
    correcta: "La noción de programas de investigación con ‘núcleo duro’ y heurísticas protectoras",
    incorrectas: [
      "Una defensa de que la ciencia avanza por acumulación lineal",
      "La eliminación del contexto histórico en la metodología científica"
    ]
  },
  {
    enunciado: "¿Qué relación existe entre propiedad intelectual y desarrollo técnico?",
    correcta: "Puede incentivar la innovación pero también generar monopolios y barreras de acceso",
    incorrectas: [
      "No tiene impacto alguno en la innovación tecnológica",
      "Garantiza siempre difusión abierta del conocimiento"
    ]
  },
  {
    enunciado: "¿Qué objetivo persigue el Reglamento Europeo de Protección de Datos (GDPR) en el entorno técnico?",
    correcta: "Proteger derechos fundamentales como privacidad y control sobre datos personales",
    incorrectas: [
      "Promover la venta obligatoria de datos a terceros",
      "Prohibir toda forma de análisis estadístico"
    ]
  },
  {
    enunciado: "¿Qué problema ambiental vincula técnica y límites planetarios?",
    correcta: "Externalidades como emisiones y pérdida de biodiversidad que superan umbrales de sostenibilidad",
    incorrectas: [
      "La imposibilidad de medir impactos ecológicos",
      "La garantía tecnológica de recursos infinitos"
    ]
  },
  {
    enunciado: "¿Qué es la explicación algorítmica (explicabilidad) en IA?",
    correcta: "Capacidad de ofrecer razones comprensibles de las decisiones de un modelo",
    incorrectas: [
      "Traducción automática de cualquier código a lenguaje natural",
      "Aumento del rendimiento sin compromiso con transparencia"
    ]
  },
  {
    enunciado: "¿Qué sostiene Andrew Feenberg sobre la técnica?",
    correcta: "Es susceptible de una racionalización democrática y de rediseños orientados a valores",
    incorrectas: [
      "Es intrínsecamente autoritaria e inmodificable",
      "Carece de cualquier dimensión social o normativa"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la ‘economía de plataformas’?",
    correcta: "Intermediación digital que coordina oferta y demanda mediante algoritmos y efectos de red",
    incorrectas: [
      "Producción exclusivamente industrial sin software",
      "Desaparición de mercados y contratos"
    ]
  },
  {
    enunciado: "¿Qué relación hay entre innovación disruptiva e incremental?",
    correcta: "La incremental mejora lo existente; la disruptiva altera modelos de negocio y estructuras sectoriales",
    incorrectas: [
      "Ambas son idénticas en alcance y ritmo",
      "La disruptiva siempre es puramente tecnológica sin dimensión social"
    ]
  },
  {
    enunciado: "¿Qué es el ‘sesgo de automatización’ en la toma de decisiones?",
    correcta: "Tendencia a confiar excesivamente en los resultados de sistemas automáticos",
    incorrectas: [
      "Resistencia sistemática a cualquier resultado automatizado",
      "Imposibilidad de evaluar críticamente salidas de modelos"
    ]
  },
  {
    enunciado: "¿Qué propone la gobernanza participativa de la tecnología?",
    correcta: "Incluir a ciudadanía y partes interesadas en evaluación y diseño de políticas tecnológicas",
    incorrectas: [
      "Delegar todas las decisiones en expertos sin deliberación pública",
      "Privatizar la definición de estándares éticos"
    ]
  },
  {
    enunciado: "¿Qué define la noción de ‘dual use’ (doble uso) de una tecnología?",
    correcta: "Puede emplearse con fines civiles o militares, benéficos o dañinos",
    incorrectas: [
      "Se limita exclusivamente a aplicaciones médicas",
      "Implica ausencia total de riesgos éticos"
    ]
  },
  {
    enunciado: "En el análisis del trabajo, ¿qué implica la ‘desintermediación’ digital?",
    correcta: "Eliminación o reducción de intermediarios tradicionales mediante plataformas y automatización",
    incorrectas: [
      "Aumento necesario de capas jerárquicas",
      "Imposibilidad de transacciones directas entre partes"
    ]
  },
  {
    enunciado: "¿Qué finalidad tiene la evaluación de impacto algorítmico (AIA)?",
    correcta: "Identificar riesgos para derechos, sesgos y efectos sociales antes del despliegue",
    incorrectas: [
      "Optimizar únicamente el rendimiento computacional",
      "Evitar cualquier forma de auditoría externa"
    ]
  },
  {
    enunciado: "¿Qué distingue a la ética de datos respecto de la simple seguridad informática?",
    correcta: "Considera justicia, transparencia y gobernanza además de confidencialidad e integridad",
    incorrectas: [
      "Se limita a cifrar bases de datos",
      "Equivale a cumplir con copias de seguridad periódicas"
    ]
  },
  {
    enunciado: "¿Qué rol cumplen los estándares abiertos en el ecosistema tecnológico?",
    correcta: "Favorecen interoperabilidad, competencia y adopción amplia",
    incorrectas: [
      "Imponen monopolios de facto sobre implementaciones",
      "Imposibilitan la innovación privada"
    ]
  },
  {
    enunciado: "¿Qué tensión describe la ‘tecnocracia’ en política pública?",
    correcta: "Predominio del criterio técnico sobre la deliberación democrática",
    incorrectas: [
      "Sometimiento absoluto de expertos a votaciones populares constantes",
      "Rechazo de evidencia en la toma de decisiones"
    ]
  },
  {
    enunciado: "¿Qué relación existe entre vigilancia masiva y economía de datos?",
    correcta: "La recolección ubicua alimenta modelos de negocio basados en perfilado y publicidad comportamental",
    incorrectas: [
      "La monetización de datos es incompatible con el perfilado",
      "La vigilancia masiva reduce por definición la información disponible"
    ]
  },
  {
    enunciado: "¿Qué busca la ‘privacidad por diseño’ en sistemas técnicos?",
    correcta: "Incorporar salvaguardas de protección de datos desde la fase de concepción del sistema",
    incorrectas: [
      "Añadir políticas de privacidad solo tras incidentes",
      "Transferir la responsabilidad exclusivamente al usuario final"
    ]
  },
  {
    enunciado: "En sostenibilidad, ¿qué promueve la economía circular?",
    correcta: "Reducción, reutilización y reciclaje para cerrar ciclos de materiales y energía",
    incorrectas: [
      "Extracción ilimitada y eliminación lineal de residuos",
      "Sustitución de toda producción por servicios financieros"
    ]
  },
  {
    enunciado: "¿Qué es el ‘efecto rebote’ asociado a mejoras de eficiencia técnica?",
    correcta: "El aumento del consumo que puede neutralizar los ahorros logrados por la eficiencia",
    incorrectas: [
      "La imposibilidad de medir consumos energéticos",
      "La reducción automática de la demanda ante cualquier mejora"
    ]
  },
  {
    enunciado: "¿Por qué es relevante la transparencia de datos de entrenamiento en IA?",
    correcta: "Permite auditar sesgos, licencias y trazabilidad del origen de la información",
    incorrectas: [
      "Reduce necesariamente la precisión de los modelos",
      "Sustituye la necesidad de pruebas y validación"
    ]
  },
  {
    enunciado: "¿Qué dilema plantea la edición genética mediante CRISPR?",
    correcta: "Mejoras terapéuticas frente a riesgos de eugenesia y efectos imprevisibles heredables",
    incorrectas: [
      "Carece de aplicaciones clínicas reales",
      "Elimina todos los debates éticos en biomedicina"
    ]
  },
  {
    enunciado: "¿Qué es la ‘alfabetización digital crítica’ en educación?",
    correcta: "Capacidad para usar, evaluar y crear contenidos y tecnologías con criterio ético y cívico",
    incorrectas: [
      "Aprender atajos de teclado sin contexto social",
      "Rechazar toda tecnología en la escuela"
    ]
  },
  {
    enunciado: "¿Qué implicación política tiene el control de infraestructuras tecnológicas estratégicas?",
    correcta: "Configura dependencias y asimetrías de poder entre Estados y corporaciones",
    incorrectas: [
      "No guarda relación con la soberanía",
      "Garantiza automáticamente la paz internacional"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a un enfoque ‘human-centered’ en diseño tecnológico?",
    correcta: "Parte de necesidades y valores de las personas usuarias y afectadas",
    incorrectas: [
      "Optimiza únicamente métricas internas de la empresa",
      "Desestima impactos culturales y contextuales"
    ]
  },
  {
    enunciado: "¿Qué preocupa en el uso de reconocimiento facial a gran escala?",
    correcta: "Riesgos para privacidad, libertades civiles y sesgos diferenciales por grupo",
    incorrectas: [
      "Imposibilidad técnica de identificar personas en imágenes",
      "Eliminación de cualquier responsabilidad institucional"
    ]
  }
];
