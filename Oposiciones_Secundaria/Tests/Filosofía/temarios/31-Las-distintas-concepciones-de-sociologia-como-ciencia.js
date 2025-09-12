// temarios/31-Las-distintas-concepciones-de-la-sociologia-como-ciencia.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué estudia la sociología como ciencia?",
    correcta: "Las relaciones sociales, estructuras e instituciones y sus dinámicas",
    incorrectas: [
      "Exclusivamente la mente individual y sus procesos internos",
      "Solo los sistemas políticos y sus constituciones"
    ]
  },
  {
    enunciado: "¿Quién acuñó el término 'sociología' y propuso la ley de los tres estadios?",
    correcta: "Auguste Comte",
    incorrectas: [
      "Émile Durkheim",
      "Max Weber"
    ]
  },
  {
    enunciado: "¿Qué son los 'hechos sociales' para Durkheim?",
    correcta: "Formas de obrar, pensar y sentir exteriores al individuo y dotadas de poder coercitivo",
    incorrectas: [
      "Opiniones privadas sin repercusión colectiva",
      "Procesos exclusivamente biológicos del individuo"
    ]
  },
  {
    enunciado: "¿Qué eje metodológico distingue Weber en ciencias sociales?",
    correcta: "Explicar causalmente y comprender el sentido subjetivo de la acción",
    incorrectas: [
      "Describir sin hipótesis y prescindir de cualquier causalidad",
      "Aplicar únicamente experimentos de laboratorio"
    ]
  },
  {
    enunciado: "¿Qué rasgo define el positivismo sociológico?",
    correcta: "La búsqueda de leyes generales a partir de hechos observables",
    incorrectas: [
      "El rechazo de toda medición empírica",
      "La prioridad absoluta de la introspección individual"
    ]
  },
  {
    enunciado: "¿Qué propone Karl Marx como clave explicativa de la sociedad?",
    correcta: "El materialismo histórico y la lucha de clases",
    incorrectas: [
      "El idealismo absoluto y la conciencia pura",
      "La primacía de los instintos biológicos sobre la historia"
    ]
  },
  {
    enunciado: "¿Qué es la 'acción social' en Weber?",
    correcta: "Una conducta dotada de sentido orientada por las acciones de otros",
    incorrectas: [
      "Un reflejo biológico automático",
      "Un acto puramente aleatorio sin significado"
    ]
  },
  {
    enunciado: "¿Con qué objetivo introduce Weber los 'tipos ideales'?",
    correcta: "Construir modelos analíticos para comparar y entender la realidad social",
    incorrectas: [
      "Sustituir la evidencia empírica por dogmas",
      "Eliminar la interpretación del sentido de la acción"
    ]
  },
  {
    enunciado: "¿Qué obra de Durkheim ejemplifica el método sociológico aplicado?",
    correcta: "El suicidio",
    incorrectas: [
      "La ética protestante y el espíritu del capitalismo",
      "La sociedad abierta y sus enemigos"
    ]
  },
  {
    enunciado: "¿Cuál es el objeto central del estructural-funcionalismo de Parsons?",
    correcta: "La sociedad como sistema interdependiente que busca equilibrio",
    incorrectas: [
      "El individuo como mónada sin vínculos",
      "El conflicto como única dinámica posible"
    ]
  },
  {
    enunciado: "¿Qué diferencia conceptual formula Tönnies?",
    correcta: "Gemeinschaft (comunidad) y Gesellschaft (sociedad)",
    incorrectas: [
      "Clases y castas como sinónimos",
      "Estatus y rol como idénticos"
    ]
  },
  {
    enunciado: "¿Qué enfatiza el interaccionismo simbólico?",
    correcta: "El significado construido en la interacción cotidiana mediante símbolos",
    incorrectas: [
      "Las leyes biológicas universales de la conducta",
      "La irrelevancia del lenguaje en la vida social"
    ]
  },
  {
    enunciado: "¿Qué examina la etnometodología de Garfinkel?",
    correcta: "Las prácticas de sentido común con que las personas producen orden social",
    incorrectas: [
      "Únicamente estadísticas macroeconómicas",
      "Fenómenos naturales ajenos a la interacción"
    ]
  },
  {
    enunciado: "¿Qué aporta Simmel al 'formalismo' sociológico?",
    correcta: "El análisis de formas puras de interacción como conflicto o cooperación",
    incorrectas: [
      "La negación de cualquier forma estable",
      "La reducción de lo social a lo biológico"
    ]
  },
  {
    enunciado: "¿Qué es un 'hecho social' anómico según Durkheim?",
    correcta: "Una situación de desregulación de normas que desestructura la integración social",
    incorrectas: [
      "Un incremento de solidaridad mecánica",
      "Una mayor densidad normativa y cohesión"
    ]
  },
  {
    enunciado: "¿Qué distingue Merton con sus funciones sociales?",
    correcta: "Funciones manifiestas y latentes",
    incorrectas: [
      "Causas materiales y formales",
      "Acción racional y tradicional"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la Escuela de Fráncfort?",
    correcta: "Teoría crítica que integra marxismo, psicoanálisis y crítica cultural",
    incorrectas: [
      "Positivismo lógico aplicado a la física",
      "Relativismo radical sin análisis estructural"
    ]
  },
  {
    enunciado: "¿Qué entiende Comte por 'física social'?",
    correcta: "Una ciencia positiva que estudia regularidades de los fenómenos sociales",
    incorrectas: [
      "Una rama de la biología evolutiva",
      "Una ética normativa sin base empírica"
    ]
  },
  {
    enunciado: "¿Qué problema metodológico subraya Weber con los 'valores'?",
    correcta: "La necesidad de distinguir entre juicios de hecho y juicios de valor",
    incorrectas: [
      "La obligación de imponer valores del investigador",
      "La irrelevancia de los valores en la investigación"
    ]
  },
  {
    enunciado: "¿Qué técnica es típica de los métodos cualitativos?",
    correcta: "La observación participante",
    incorrectas: [
      "El contraste de medias con ANOVA exclusivamente",
      "La simulación física en laboratorio"
    ]
  },
  {
    enunciado: "¿Qué diseño es característico de los métodos cuantitativos?",
    correcta: "Encuestas representativas con análisis estadístico",
    incorrectas: [
      "Historias de vida sin codificación",
      "Grupos focales no estructurados"
    ]
  },
  {
    enunciado: "¿Qué significa 'triangulación' metodológica?",
    correcta: "Combinar métodos y fuentes para robustecer inferencias",
    incorrectas: [
      "Descartar cualquier medición",
      "Repetir el mismo instrumento sin cambios"
    ]
  },
  {
    enunciado: "¿Qué estudia Lévi-Strauss en el estructuralismo antropológico?",
    correcta: "Las estructuras subyacentes de parentesco, mito y lenguaje",
    incorrectas: [
      "La acción social individual sin símbolos",
      "La economía financiera de mercados"
    ]
  },
  {
    enunciado: "¿Qué rasgo define la 'acción tradicional' en Weber?",
    correcta: "Está guiada por costumbres y hábitos heredados",
    incorrectas: [
      "Maximiza medios y fines racionalmente",
      "Se orienta por emociones momentáneas"
    ]
  },
  {
    enunciado: "¿Qué plantea Habermas con la acción comunicativa?",
    correcta: "La coordinación social a través del entendimiento racional y el lenguaje",
    incorrectas: [
      "La dominación técnica como ideal último",
      "La violencia como fundamento del orden"
    ]
  },
  {
    enunciado: "¿Qué enfoque pone el acento en la cotidianeidad y los 'marcos' de interacción?",
    correcta: "La microsociología de Goffman",
    incorrectas: [
      "La demografía matemática clásica",
      "El positivismo lógico"
    ]
  },
  {
    enunciado: "¿Qué diferencia básica separa sociología de economía?",
    correcta: "La sociología analiza la totalidad de relaciones sociales; la economía se centra en producción, distribución y consumo",
    incorrectas: [
      "La economía estudia solo psicología clínica",
      "La sociología ignora instituciones y normas"
    ]
  },
  {
    enunciado: "¿Qué introduce Mannheim con la sociología del conocimiento?",
    correcta: "La relación entre ideas y posiciones sociales",
    incorrectas: [
      "La independencia absoluta entre pensamiento y sociedad",
      "El reduccionismo biológico del conocimiento"
    ]
  },
  {
    enunciado: "¿Qué expresan 'estatus' y 'rol' en sociología?",
    correcta: "Posición social y expectativas asociadas de conducta",
    incorrectas: [
      "Riqueza y herencia genética",
      "Ira y alegría como estados emocionales"
    ]
  },
  {
    enunciado: "¿Qué caracteriza el enfoque de género en sociología?",
    correcta: "Analiza cómo normas y estructuras producen desigualdades por género",
    incorrectas: [
      "Reduce el género a una variable biológica fija",
      "Niega que existan instituciones influyentes"
    ]
  },
  {
    enunciado: "¿Qué aporta Bauman a la sociología contemporánea?",
    correcta: "El diagnóstico de la 'modernidad líquida' y sus efectos en vínculos e identidades",
    incorrectas: [
      "La ley de tres estadios",
      "La teoría del capital social de Bourdieu"
    ]
  },
  {
    enunciado: "¿Qué concepto central desarrolla Bourdieu?",
    correcta: "Habitus y capitales (económico, cultural, social, simbólico)",
    incorrectas: [
      "Anomia como único motor del cambio",
      "Acción sin estructura ni campo"
    ]
  },
  {
    enunciado: "¿Qué es la 'teoría del etiquetado' en sociología del delito?",
    correcta: "El desvío como consecuencia de procesos de definición y reacción social",
    incorrectas: [
      "Una patología exclusivamente genética",
      "Un error de muestreo estadístico"
    ]
  },
  {
    enunciado: "¿Qué distingue a la antropología social de la sociología clásica?",
    correcta: "Tradicionalmente estudia culturas y comunidades específicas mediante etnografía",
    incorrectas: [
      "Se limita a modelos econométricos",
      "Analiza solo estados modernos"
    ]
  },
  {
    enunciado: "¿Qué significa 'objetividad' para Durkheim?",
    correcta: "Tratar los hechos sociales como cosas, independientes de opiniones personales",
    incorrectas: [
      "Subordinar el análisis a la fe del investigador",
      "Rechazar el uso de datos empíricos"
    ]
  },
  {
    enunciado: "¿Qué tipo de solidaridad asocia Durkheim a sociedades modernas complejas?",
    correcta: "Solidaridad orgánica",
    incorrectas: [
      "Solidaridad mecánica",
      "Solidaridad carismática"
    ]
  },
  {
    enunciado: "¿Qué es la 'destrucción creativa' y con quién se asocia?",
    correcta: "La dinámica de innovación que transforma estructuras, con Schumpeter",
    incorrectas: [
      "La permanencia estática, con Parsons",
      "La anomia normativa, con Merton"
    ]
  },
  {
    enunciado: "¿Qué tipo de validez busca el muestreo probabilístico?",
    correcta: "Representatividad para inferir a una población",
    incorrectas: [
      "Originalidad literaria del cuestionario",
      "Neutralizar cualquier sesgo del entrevistado sin controles"
    ]
  },
  {
    enunciado: "¿Qué implica el 'giro digital' para la sociología?",
    correcta: "Nuevos datos y métodos para analizar redes, plataformas y algoritmos",
    incorrectas: [
      "La obsolescencia de todo método cualitativo",
      "La desaparición de la teoría sociológica"
    ]
  },
  {
    enunciado: "¿Qué busca la sociología aplicada?",
    correcta: "Usar teorías y métodos sociológicos para diagnosticar y proponer soluciones en ámbitos concretos",
    incorrectas: [
      "Evitar la realidad empírica por razones éticas",
      "Sustituir la evidencia por intuiciones personales"
    ]
  }
];
