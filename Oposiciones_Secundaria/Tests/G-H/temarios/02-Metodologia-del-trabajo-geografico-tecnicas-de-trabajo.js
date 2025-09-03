var PREGUNTAS = [
  {
    enunciado: "¿Qué se entiende por metodología en el trabajo geográfico?",
    correcta: "El conjunto de procedimientos y técnicas que guían la investigación geográfica",
    incorrectas: [
      "El uso exclusivo de mapas y gráficos",
      "La simple descripción de paisajes"
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre método y técnica en geografía?",
    correcta: "El método es el marco general de investigación y la técnica es la herramienta concreta",
    incorrectas: [
      "El método es una habilidad práctica y la técnica es teórica",
      "No existe distinción entre ambos"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al enfoque ideográfico en geografía?",
    correcta: "El estudio detallado y descriptivo de casos singulares",
    incorrectas: [
      "La formulación de leyes generales",
      "El uso exclusivo de datos estadísticos"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al enfoque nomotético?",
    correcta: "La búsqueda de leyes y regularidades generales",
    incorrectas: [
      "El estudio exclusivo de fenómenos únicos",
      "La observación sin formulación teórica"
    ]
  },
  {
    enunciado: "¿Qué se entiende por método inductivo en geografía?",
    correcta: "Partir de la observación para formular teorías",
    incorrectas: [
      "Aplicar una teoría previa a casos concretos",
      "Analizar solo datos cartográficos"
    ]
  },
  {
    enunciado: "¿En qué consiste el método deductivo?",
    correcta: "Aplicar principios generales a casos concretos para verificarlos",
    incorrectas: [
      "Partir de casos aislados sin marco teórico",
      "Evitar la comprobación empírica"
    ]
  },
  {
    enunciado: "¿Qué combina el método hipotético-deductivo?",
    correcta: "Formulación de hipótesis y verificación mediante observación y análisis",
    incorrectas: [
      "Solo observación descriptiva",
      "Solo razonamiento lógico sin datos"
    ]
  },
  {
    enunciado: "¿Qué aportan los métodos comparativo e histórico en geografía?",
    correcta: "Permiten analizar semejanzas, diferencias y evolución de los fenómenos espaciales",
    incorrectas: [
      "Reducen el análisis a un único lugar",
      "Se aplican solo a estudios urbanos"
    ]
  },
  {
    enunciado: "¿Qué son las fuentes primarias en geografía?",
    correcta: "Datos obtenidos directamente por el investigador en el terreno",
    incorrectas: [
      "Informes elaborados por otras personas",
      "Resúmenes estadísticos de publicaciones"
    ]
  },
  {
    enunciado: "¿Qué ejemplo corresponde a una fuente secundaria?",
    correcta: "Mapas publicados en un atlas",
    incorrectas: [
      "Mediciones de campo propias",
      "Entrevistas realizadas por el investigador"
    ]
  },
  {
    enunciado: "¿Qué es la teledetección?",
    correcta: "Obtención de información de la superficie terrestre mediante sensores remotos",
    incorrectas: [
      "Uso de brújulas para orientar mapas",
      "Medición directa en campo"
    ]
  },
  {
    enunciado: "¿Qué significa SIG?",
    correcta: "Sistema de Información Geográfica",
    incorrectas: [
      "Sistema Integrado de Geología",
      "Servicio Internacional de Geografía"
    ]
  },
  {
    enunciado: "¿Qué función principal tienen los SIG en geografía?",
    correcta: "Almacenar, analizar y representar información espacial",
    incorrectas: [
      "Sustituir el trabajo de campo",
      "Solo imprimir mapas en papel"
    ]
  },
  {
    enunciado: "¿Qué elemento no es parte de un SIG?",
    correcta: "Sextante náutico",
    incorrectas: [
      "Base de datos geográfica",
      "Software de análisis espacial"
    ]
  },
  {
    enunciado: "¿Qué herramienta permite obtener coordenadas precisas en campo?",
    correcta: "GPS",
    incorrectas: [
      "Barómetro",
      "Telescopio óptico"
    ]
  },
  {
    enunciado: "¿Qué indican las coordenadas geográficas?",
    correcta: "La localización de un punto en la superficie terrestre mediante latitud y longitud",
    incorrectas: [
      "La altitud de un lugar",
      "La distancia a la costa más cercana"
    ]
  },
  {
    enunciado: "¿Qué es una proyección cartográfica?",
    correcta: "El sistema para representar la superficie terrestre en un plano",
    incorrectas: [
      "Un tipo de mapa temático",
      "Una imagen obtenida por satélite"
    ]
  },
  {
    enunciado: "¿Qué función tiene la escala en un mapa?",
    correcta: "Indicar la relación entre distancia en el mapa y distancia real",
    incorrectas: [
      "Mostrar la altitud de las montañas",
      "Definir los límites políticos"
    ]
  },
  {
    enunciado: "¿Qué es un mapa temático?",
    correcta: "Representa un aspecto concreto del territorio, como clima o población",
    incorrectas: [
      "Incluye todos los elementos físicos y humanos",
      "Es exclusivamente político-administrativo"
    ]
  },
  {
    enunciado: "¿Qué es un mapa topográfico?",
    correcta: "Representa con detalle el relieve y elementos naturales y humanos",
    incorrectas: [
      "Se centra solo en la distribución climática",
      "Muestra únicamente límites políticos"
    ]
  },
  {
    enunciado: "¿Qué tipo de gráfico es útil para mostrar evolución temporal?",
    correcta: "Gráfico de líneas",
    incorrectas: [
      "Gráfico circular",
      "Mapa coroplético"
    ]
  },
  {
    enunciado: "¿Qué aspecto analizan las tablas estadísticas?",
    correcta: "Distribución y comparación de datos numéricos",
    incorrectas: [
      "Relieve del terreno",
      "Orientación magnética"
    ]
  },
  {
    enunciado: "¿Qué debe incluir un informe geográfico?",
    correcta: "Objetivos, metodología, resultados y conclusiones",
    incorrectas: [
      "Solo fotografías y mapas",
      "Únicamente datos brutos"
    ]
  },
  {
    enunciado: "¿Qué recurso permite explorar imágenes satelitales de forma interactiva?",
    correcta: "Google Earth",
    incorrectas: [
      "Microsoft Word",
      "LibreOffice Calc"
    ]
  },
  {
    enunciado: "¿Qué ventaja tienen los programas de software libre en geografía?",
    correcta: "Acceso gratuito y posibilidad de modificar el código",
    incorrectas: [
      "Solo funcionan sin conexión a internet",
      "No permiten análisis espacial"
    ]
  },
  {
    enunciado: "¿Qué recurso didáctico tradicional se usa para explicar el globo terrestre?",
    correcta: "Globo terráqueo",
    incorrectas: [
      "Teodolito",
      "Sismógrafo"
    ]
  },
  {
    enunciado: "¿Qué actividad fomenta la observación directa del territorio?",
    correcta: "Salida de campo",
    incorrectas: [
      "Revisión de bibliografía",
      "Análisis de laboratorio"
    ]
  },
  {
    enunciado: "¿Qué herramienta evalúa competencias geográficas en el aula?",
    correcta: "Cuestionarios y ejercicios de interpretación cartográfica",
    incorrectas: [
      "Barómetros y pluviómetros",
      "Microscopios ópticos"
    ]
  },
  {
    enunciado: "¿Qué finalidad tiene el uso de maquetas en geografía?",
    correcta: "Representar de forma tridimensional elementos del territorio para su análisis",
    incorrectas: [
      "Sustituir todos los trabajos de campo",
      "Reemplazar la cartografía en papel"
    ]
  },
  {
    enunciado: "¿Qué es un croquis geográfico?",
    correcta: "Un dibujo simplificado que representa los rasgos esenciales de un territorio",
    incorrectas: [
      "Una fotografía aérea detallada",
      "Un modelo digital de elevaciones"
    ]
  },
  {
    enunciado: "¿Qué es una base de datos geográfica?",
    correcta: "Un conjunto organizado de información espacial y atributos asociados",
    incorrectas: [
      "Un archivo de texto sin referencias espaciales",
      "Una imagen satelital sin georreferenciar"
    ]
  },
  {
    enunciado: "¿Qué permite un mapa coroplético?",
    correcta: "Representar datos estadísticos por áreas mediante colores o tramas",
    incorrectas: [
      "Mostrar rutas de navegación marítima",
      "Indicar únicamente coordenadas geográficas"
    ]
  },
  {
    enunciado: "¿Qué es un atlas?",
    correcta: "Colección de mapas organizados temáticamente o por regiones",
    incorrectas: [
      "Un único mapa físico",
      "Una imagen satelital en tiempo real"
    ]
  },
  {
    enunciado: "¿Qué función cumple la simbología en un mapa?",
    correcta: "Representar mediante signos convencionales elementos del territorio",
    incorrectas: [
      "Añadir elementos decorativos",
      "Sustituir la escala"
    ]
  },
  {
    enunciado: "¿Qué es una ortofoto?",
    correcta: "Imagen aérea corregida geométricamente para tener escala uniforme",
    incorrectas: [
      "Fotografía panorámica sin corrección",
      "Mapa físico dibujado a mano"
    ]
  }
];
