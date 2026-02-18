// temarios/75-trabajo-experimental-laboratorio-escolar-normas-seguridad.js
var PREGUNTAS = [
  {
    enunciado: "¿Por qué se dice que las ciencias tienen un carácter experimental?",
    correcta: "Porque construyen y contrastan explicaciones mediante observación, hipótesis, experimentación y análisis de datos",
    incorrectas: [
      "Porque solo se basan en autoridad y tradición sin necesidad de pruebas",
      "Porque solo describen hechos sin buscar explicaciones ni leyes"
    ]
  },
  {
    enunciado: "¿Cuál es una secuencia básica del método científico en el trabajo escolar?",
    correcta: "Observación, planteamiento del problema, hipótesis, experimento, análisis de resultados y conclusión",
    incorrectas: [
      "Memorización, repetición, examen, calificación, olvido",
      "Conclusión, hipótesis, experimento, observación, problema"
    ]
  },
  {
    enunciado: "¿Qué competencia científica se desarrolla especialmente con el trabajo experimental?",
    correcta: "Formular hipótesis y ponerlas a prueba mediante medidas y controles",
    incorrectas: [
      "Aprender definiciones sin aplicarlas a situaciones reales",
      "Sustituir el razonamiento por opiniones sin datos"
    ]
  },
  {
    enunciado: "¿Qué finalidad tiene el laboratorio escolar como espacio didáctico?",
    correcta: "Permitir experiencias controladas para aprender técnicas, medir, analizar y relacionar teoría y práctica",
    incorrectas: [
      "Sustituir completamente la teoría por manipulación sin explicación",
      "Evitar el uso de instrumentos para centrarse en debates abstractos"
    ]
  },
  {
    enunciado: "¿Qué objetivo básico tiene la iniciación experimental en ESO y Bachillerato?",
    correcta: "Familiarizar con técnicas elementales como medir, filtrar, calentar y registrar datos con rigor",
    incorrectas: [
      "Realizar solo prácticas avanzadas como espectroscopía sin formación previa",
      "Aprender únicamente a memorizar nombres de instrumentos"
    ]
  },
  {
    enunciado: "¿Qué objetivo transversal del trabajo experimental es especialmente relevante en ciencias?",
    correcta: "Trabajo en equipo, registro ordenado de datos y análisis crítico de errores",
    incorrectas: [
      "Evitar toda discusión para que no haya interpretaciones distintas",
      "Reducir los datos a impresiones personales sin tablas ni medidas"
    ]
  },
  {
    enunciado: "¿Qué parte no debería faltar en un informe o guion de práctica bien planteado?",
    correcta: "Procedimiento secuenciado, datos registrados y conclusiones justificadas",
    incorrectas: [
      "Opinión final sin datos ni descripción del procedimiento",
      "Solo una lista de materiales sin realizar medidas"
    ]
  },
  {
    enunciado: "¿Qué se entiende por cuaderno de laboratorio en el contexto escolar?",
    correcta: "Registro continuo de procedimientos, observaciones, tablas, cálculos y conclusiones de prácticas",
    incorrectas: [
      "Un cuaderno de teoría sin referencias a datos reales",
      "Un documento final sin borradores ni anotaciones durante la práctica"
    ]
  },
  {
    enunciado: "¿Qué diferencia básica hay entre precisión y exactitud en medidas experimentales?",
    correcta: "Precisión es repetibilidad de medidas y exactitud es cercanía al valor verdadero",
    incorrectas: [
      "Precisión es cercanía al valor verdadero y exactitud es repetibilidad",
      "Ambas significan lo mismo y se usan indistintamente"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a un error sistemático?",
    correcta: "Se repite con sesgo similar por causa del instrumento o del método",
    incorrectas: [
      "Cambia al azar alrededor del valor real sin patrón",
      "Solo aparece cuando se trabaja en equipo"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a un error aleatorio?",
    correcta: "Produce variaciones impredecibles entre medidas por causas pequeñas y no controladas",
    incorrectas: [
      "Introduce siempre el mismo sesgo hacia arriba en todas las medidas",
      "Se elimina por completo con una sola medida"
    ]
  },
  {
    enunciado: "¿Qué idea resume la relación teoría-práctica en ciencias en el aula?",
    correcta: "La práctica permite comprobar, aplicar y discutir la teoría con evidencias y límites reales",
    incorrectas: [
      "La práctica solo sirve para entretenimiento y no aporta comprensión",
      "La teoría es opcional porque la manipulación lo explica todo sola"
    ]
  },
  {
    enunciado: "¿Qué medida general reduce riesgos en cualquier práctica con sustancias químicas?",
    correcta: "Trabajar con pequeñas cantidades, leer etiquetas y seguir un procedimiento definido",
    incorrectas: [
      "Mezclar sustancias libremente para observar qué ocurre",
      "Oler directamente los reactivos para identificarlos"
    ]
  },
  {
    enunciado: "¿Qué norma general es correcta en laboratorio escolar respecto a comida y bebida?",
    correcta: "No se come ni se bebe en el laboratorio",
    incorrectas: [
      "Se permite beber si el reactivo no huele fuerte",
      "Se permite comer si se usan guantes"
    ]
  },
  {
    enunciado: "¿Qué norma de seguridad es correcta respecto a pipeteo?",
    correcta: "Nunca se pipetea con la boca; se usan peras o dispositivos de pipeteo",
    incorrectas: [
      "Se pipetea con la boca si el líquido es transparente",
      "Se pipetea con la boca si se hace rápidamente"
    ]
  },
  {
    enunciado: "¿Qué práctica es insegura al calentar materiales en laboratorio?",
    correcta: "Calentar recipientes cerrados o tubos apuntando hacia personas",
    incorrectas: [
      "Calentar con pinzas y usar gafas de protección",
      "Calentar lentamente y con soporte adecuado"
    ]
  },
  {
    enunciado: "¿Qué equipos de protección individual son básicos en muchas prácticas escolares?",
    correcta: "Bata y gafas de seguridad, y guantes cuando proceda",
    incorrectas: [
      "Solo gorra para el sol y ropa deportiva",
      "Solo mascarilla sin gafas ni bata"
    ]
  },
  {
    enunciado: "¿Qué es una FDS (ficha de datos de seguridad)?",
    correcta: "Documento que describe riesgos, manipulación segura y medidas de emergencia de una sustancia",
    incorrectas: [
      "Un formulario para pedir más reactivos al almacén",
      "Un informe de calificaciones del alumnado en prácticas"
    ]
  },
  {
    enunciado: "¿Qué recurso es apropiado ante un pequeño derrame químico según normas básicas?",
    correcta: "Contenerlo con material absorbente y actuar según compatibilidades y protocolo del centro",
    incorrectas: [
      "Tocarlo con las manos para comprobar si quema",
      "Dispersarlo con aire para que se evapore rápido"
    ]
  },
  {
    enunciado: "¿Qué se hace de forma general ante una quemadura térmica leve en laboratorio?",
    correcta: "Enfriar con agua corriente fría durante varios minutos y valorar atención sanitaria",
    incorrectas: [
      "Aplicar inmediatamente calor para compensar el frío",
      "Frotar con disolvente para limpiar la zona"
    ]
  },
  {
    enunciado: "¿Qué decisión es correcta ante un posible incendio en laboratorio escolar?",
    correcta: "Priorizar la seguridad, cortar fuentes si es posible, usar el medio adecuado y evacuar si procede",
    incorrectas: [
      "Cerrar la puerta con llave y continuar la práctica",
      "Echar agua siempre sobre cualquier fuego, aunque sea eléctrico o de disolventes"
    ]
  },
  {
    enunciado: "¿Qué función tiene la señalización y los pictogramas de peligro (tipo GHS) en el laboratorio?",
    correcta: "Comunicar riesgos de forma rápida para prevenir accidentes y elegir medidas de protección",
    incorrectas: [
      "Decoración sin utilidad porque el profesorado ya sabe qué hay en cada frasco",
      "Indicar únicamente la marca comercial del producto"
    ]
  },
  {
    enunciado: "¿Qué criterio es correcto para almacenar reactivos en un laboratorio?",
    correcta: "Separar sustancias incompatibles y mantener recipientes etiquetados y cerrados",
    incorrectas: [
      "Guardar todos los reactivos juntos para ahorrar espacio",
      "Trasvasar a botellas sin etiqueta para que no se estropeen"
    ]
  },
  {
    enunciado: "¿Qué elemento de seguridad es especialmente relevante en prácticas con humos o vapores?",
    correcta: "Ventilación adecuada y, cuando corresponda, campana de extracción",
    incorrectas: [
      "Cerrar ventanas para evitar corrientes de aire",
      "Aumentar la temperatura del aula para que los vapores suban"
    ]
  },
  {
    enunciado: "¿Qué principio básico se aplica al manejo de vidrio de laboratorio?",
    correcta: "Revisar fisuras, manipular con cuidado y usar soporte y pinzas cuando se calienta",
    incorrectas: [
      "Golpear el vidrio para comprobar que es resistente",
      "Usar siempre vidrio caliente a mano porque enfría rápido"
    ]
  },
  {
    enunciado: "¿Qué material se usa típicamente para medir volumen con cierta precisión en el laboratorio escolar?",
    correcta: "Probeta o pipeta, según la precisión requerida",
    incorrectas: [
      "Vaso de precipitados como instrumento de alta precisión siempre",
      "Placa de Petri para medir volumen por superficie"
    ]
  },
  {
    enunciado: "¿Qué técnica química básica separa sólidos de líquidos mediante un medio poroso?",
    correcta: "Filtración",
    incorrectas: [
      "Sublimación",
      "Fermentación"
    ]
  },
  {
    enunciado: "¿Qué técnica química básica separa líquidos inmiscibles por diferencia de densidad?",
    correcta: "Decantación con embudo de decantación",
    incorrectas: [
      "Cristalización fraccionada",
      "Electroforesis"
    ]
  },
  {
    enunciado: "¿Qué técnica física escolar relaciona periodo y longitud para estudiar movimiento oscilatorio simple?",
    correcta: "Péndulo simple",
    incorrectas: [
      "Titulación ácido-base",
      "Cromatografía en papel"
    ]
  },
  {
    enunciado: "¿Qué práctica didáctica favorece especialmente el enfoque competencial en laboratorio?",
    correcta: "Plantear problemas investigables, registrar evidencias y justificar conclusiones con datos",
    incorrectas: [
      "Dar resultados ya hechos para copiar sin medir ni discutir",
      "Permitir manipulación sin normas para aumentar creatividad"
    ]
  },
  {
    enunciado: "¿Qué responsabilidad esencial tiene el profesorado en prácticas de laboratorio escolar?",
    correcta: "Planificar actividades seguras, dar instrucciones claras, supervisar y aplicar protocolos de prevención",
    incorrectas: [
      "Dejar que el alumnado improvise con reactivos para descubrir por ensayo y error",
      "Delegar la seguridad únicamente en el alumnado sin supervisión"
    ]
  },
  {
    enunciado: "¿Qué aspecto debe priorizarse siempre sobre cualquier objetivo de aprendizaje en el laboratorio?",
    correcta: "La seguridad de las personas y del espacio",
    incorrectas: [
      "La rapidez para terminar antes la práctica",
      "El uso de mayor cantidad de reactivos para que se vea mejor"
    ]
  },
  {
    enunciado: "¿Qué criterio organizativo básico reduce accidentes por desorden en laboratorio?",
    correcta: "Mantener orden en la mesa, limpiar al final y recoger material según normas",
    incorrectas: [
      "Dejar el material usado en el suelo para que se seque",
      "Acumular residuos en un mismo recipiente sin etiquetar"
    ]
  },
  {
    enunciado: "¿Qué tipo de práctica suele ser adecuada como introducción para grupos con poca experiencia?",
    correcta: "Prácticas guiadas con procedimiento claro y control de riesgos, antes de proyectos abiertos",
    incorrectas: [
      "Prácticas con láser de alta potencia sin entrenamiento previo",
      "Manipulación de sustancias corrosivas concentradas como primera práctica"
    ]
  },
  {
    enunciado: "¿Qué elemento de evaluación se ajusta bien al trabajo experimental escolar?",
    correcta: "Valorar planificación, ejecución segura, calidad de datos y coherencia del informe",
    incorrectas: [
      "Valorar solo si el resultado coincide exactamente con el teórico sin considerar procedimiento",
      "Valorar solo la rapidez en terminar la práctica"
    ]
  },
  {
    enunciado: "¿Qué acción es correcta si se produce un accidente o exposición química relevante?",
    correcta: "Aplicar el protocolo del centro, pedir ayuda, y si procede llamar a emergencias",
    incorrectas: [
      "Ocultarlo para evitar interrupciones y seguir trabajando",
      "Probar un remedio casero al azar antes de avisar"
    ]
  },
  {
    enunciado: "¿Qué idea define mejor la competencia de 'interpretación de resultados' en ciencias?",
    correcta: "Relacionar datos con hipótesis, reconocer incertidumbre y justificar conclusiones sin sobrepasar la evidencia",
    incorrectas: [
      "Elegir siempre la hipótesis inicial aunque los datos la contradigan",
      "Cambiar los datos para que coincidan con el libro"
    ]
  },
  {
    enunciado: "¿Qué objetivo formativo se asocia a la repetición de medidas y al tratamiento de errores?",
    correcta: "Comprender incertidumbre experimental y mejorar la fiabilidad de conclusiones",
    incorrectas: [
      "Eliminar cualquier variación porque en ciencias no existen errores",
      "Evitar el uso de instrumentos para no introducir fallos"
    ]
  }
];
