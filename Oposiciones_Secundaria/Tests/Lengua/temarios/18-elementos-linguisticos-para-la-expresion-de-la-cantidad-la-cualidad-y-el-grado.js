// temarios/18-elementos-linguisticos-para-la-expresion-de-la-cantidad-la-cualidad-y-el-grado.js
var PREGUNTAS = [
  {
    enunciado: "En español, la categoría que permite cuantificar entidades nominales mediante determinantes como 'tres', 'muchos' o 'ningún' se denomina cuantificador.",
    correcta: "Verdadero: los cuantificadores numerales e indefinidos funcionan como determinantes o pronombres para expresar cantidad.",
    incorrectas: [
      "Falso: los cuantificadores son siempre adjetivos calificativos y nunca determinantes.",
      "Falso: la cuantificación solo puede expresarse con adverbios y no con elementos del sintagma nominal."
    ]
  },
  {
    enunciado: "Los numerales cardinales, ordinales, fraccionarios y multiplicativos cumplen funciones diferentes en la expresión de la cantidad.",
    correcta: "Correcto: designan número absoluto, orden, partición y proporción de repetición respectivamente.",
    incorrectas: [
      "Incorrecto: todos significan lo mismo y solo cambian por razones estilísticas.",
      "Incorrecto: los ordinales expresan fracción y los fraccionarios orden."
    ]
  },
  {
    enunciado: "En la estructura 'unos veinte alumnos', el elemento 'unos' aporta un matiz aproximativo de cantidad.",
    correcta: "Sí, 'unos' introduce aproximación o estimación no exacta en la cuantificación.",
    incorrectas: [
      "No, 'unos' intensifica cualidad y no afecta a la cantidad.",
      "No, 'unos' es un artículo determinado que especifica identidad precisa."
    ]
  },
  {
    enunciado: "La concordancia entre cuantificador y nombre en español puede ser obligatoria según el tipo de cuantificador.",
    correcta: "Cierto: 'muchos libros' exige plural, mientras 'cada alumno' exige singular.",
    incorrectas: [
      "Falso: los cuantificadores nunca condicionan la concordancia del nombre.",
      "Falso: solo los adjetivos calificativos imponen concordancia en número y género."
    ]
  },
  {
    enunciado: "En 'te lo he dicho mil veces', la cantidad funciona como recurso estilístico de hiperbolización.",
    correcta: "Correcto: la cifra exagerada intensifica el significado sin equivaler a un conteo literal.",
    incorrectas: [
      "Incorrecto: expresa un conteo riguroso y verificable de repeticiones.",
      "Incorrecto: se trata de un uso de cualidad, no de cantidad."
    ]
  },
  {
    enunciado: "Los indefinidos 'alguno', 'ninguno', 'poco', 'bastante' y 'demasiado' pueden funcionar como determinantes o como pronombres.",
    correcta: "Verdadero: pueden aparecer antepuestos al sustantivo o de forma pronominal.",
    incorrectas: [
      "Falso: solo funcionan como adverbios de cantidad.",
      "Falso: son exclusivamente pronombres y no pueden determinar un nombre."
    ]
  },
  {
    enunciado: "Las locuciones adverbiales 'a montones', 'en exceso' y 'a raudales' expresan cantidad desde la perspectiva del adverbio.",
    correcta: "Sí, son locuciones cuantitativas que modifican al predicado con valor de intensidad cuantitativa.",
    incorrectas: [
      "No, son locuciones temporales que sitúan la acción en el tiempo.",
      "No, son conectores causales que justifican el enunciado."
    ]
  },
  {
    enunciado: "En 'cada uno de los participantes', el cuantificador 'cada' selecciona unidades individuales dentro de un conjunto.",
    correcta: "Cierto: 'cada' distribuye la referencia de manera individualizada.",
    incorrectas: [
      "Falso: 'cada' expresa una totalidad colectiva sin distribución.",
      "Falso: 'cada' es un intensificador de grado y no de cantidad."
    ]
  },
  {
    enunciado: "El adjetivo calificativo es el principal recurso para expresar cualidad en el sintagma nominal.",
    correcta: "Verdadero: atribuye propiedades al nombre y puede anteponerse o posponerse con distintos matices.",
    incorrectas: [
      "Falso: la cualidad se expresa exclusivamente mediante verbos copulativos.",
      "Falso: la cualidad es un fenómeno exclusivamente adverbial."
    ]
  },
  {
    enunciado: "La anteposición del adjetivo puede aportar un valor subjetivo o enfático diferente a la posposición.",
    correcta: "Sí: 'un pobre hombre' (valor apreciativo) difiere de 'un hombre pobre' (cualidad objetiva).",
    incorrectas: [
      "No: la posición del adjetivo en español carece de implicaciones semánticas.",
      "No: la anteposición solo obedece a razones métricas o rítmicas en poesía."
    ]
  },
  {
    enunciado: "Las subordinadas adjetivas especificativas y explicativas contribuyen a expresar cualidad de modo oracional.",
    correcta: "Correcto: restringen o comentan el referente nominal aportando propiedades.",
    incorrectas: [
      "Incorrecto: no introducen cualidad, sino solo tiempo y modo.",
      "Incorrecto: son oraciones impersonales sin referencia al nombre."
    ]
  },
  {
    enunciado: "Los sufijos apreciativos como -ito, -azo o -ucho permiten matizar cualidad con afecto, aumento o valor peyorativo.",
    correcta: "Cierto: son recursos morfológicos que modifican el significado básico del lexema.",
    incorrectas: [
      "Falso: los sufijos apreciativos solo cambian el tiempo verbal.",
      "Falso: no tienen efecto semántico y solo cambian el género."
    ]
  },
  {
    enunciado: "La reduplicación 'guapo, guapo' o 'bien bien' intensifica la cualidad en registros coloquiales.",
    correcta: "Sí, la repetición refuerza la evaluación expresiva del rasgo.",
    incorrectas: [
      "No, la reduplicación introduce una corrección de error fonético.",
      "No, su función es convertir el adjetivo en sustantivo abstracto."
    ]
  },
  {
    enunciado: "Los adverbios 'muy', 'sumamente' o 'extremadamente' suelen actuar como modificadores del grado de la cualidad.",
    correcta: "Verdadero: intensifican el adjetivo o el adverbio que acompañan.",
    incorrectas: [
      "Falso: son conectores y nunca modifican adjetivos.",
      "Falso: expresan cantidad numérica exacta, no grado."
    ]
  },
  {
    enunciado: "El grado positivo del adjetivo expresa la cualidad sin comparación explícita.",
    correcta: "Correcto: 'alto', 'rápido' o 'claro' no introducen contraste con otro término.",
    incorrectas: [
      "Incorrecto: el positivo siempre implica comparación de igualdad.",
      "Incorrecto: el positivo es un superlativo absoluto enmascarado."
    ]
  },
  {
    enunciado: "El comparativo puede ser de igualdad, superioridad o inferioridad según el operador usado.",
    correcta: "Cierto: 'tan... como', 'más... que' y 'menos... que' realizan esos valores.",
    incorrectas: [
      "Falso: solo existe el comparativo de superioridad en español.",
      "Falso: el comparativo se limita a construcciones con 'como'."
    ]
  },
  {
    enunciado: "Los comparativos irregulares 'mejor', 'peor', 'mayor' y 'menor' sustituyen a formas analíticas con 'más' o 'menos'.",
    correcta: "Sí: son lexicalizaciones con restricciones de uso semántico.",
    incorrectas: [
      "No: son superlativos y equivalen a 'óptimo' y 'pésimo'.",
      "No: son adverbios de cantidad sin relación con el grado."
    ]
  },
  {
    enunciado: "El superlativo puede ser relativo ('el más alto de la clase') o absoluto ('altísimo').",
    correcta: "Verdadero: el relativo establece un conjunto de referencia y el absoluto intensifica sin comparación explícita.",
    incorrectas: [
      "Falso: el español carece de superlativo relativo.",
      "Falso: el sufijo -ísimo forma comparativos, no superlativos."
    ]
  },
  {
    enunciado: "Los adverbios también admiten graduación: 'rápidamente', 'más rápidamente', 'rapidísimamente'.",
    correcta: "Correcto: muchos adverbios en -mente y otros admiten comparativos y superlativos.",
    incorrectas: [
      "Incorrecto: los adverbios no pueden graduarse en español.",
      "Incorrecto: solo los adjetivos permiten comparación."
    ]
  },
  {
    enunciado: "Construcciones como 'de lo más interesante' o 'requetebien' son estrategias perifrásticas o morfológicas de intensificación.",
    correcta: "Cierto: aportan grado máximo en registros coloquiales o expresivos.",
    incorrectas: [
      "Falso: son marcas de cantidad exacta, no de grado.",
      "Falso: se usan exclusivamente en textos científicos."
    ]
  },
  {
    enunciado: "En 'tan solo', 'no más que' o 'apenas', el hablante introduce una cuantificación restrictiva.",
    correcta: "Sí, limitan el alcance cuantitativo del enunciado con valor minimizador.",
    incorrectas: [
      "No, son conectores adversativos sin contenido cuantitativo.",
      "No, son perífrasis aspectuales de inminencia."
    ]
  },
  {
    enunciado: "La construcción 'lo + adjetivo' puede comportarse como sustantivación para expresar grado o carácter general de una cualidad (p. ej., 'lo difícil').",
    correcta: "Verdadero: 'lo' convierte la propiedad en entidad abstracta cuantificable o graduable.",
    incorrectas: [
      "Falso: 'lo' solo introduce oraciones de relativo sin valor nominal.",
      "Falso: 'lo' es artículo definido masculino y concuerda con nombres contables."
    ]
  },
  {
    enunciado: "En 'más que inteligente, es sabio', el operador de comparación sirve para reorientar la propiedad relevante.",
    correcta: "Correcto: la comparación funciona como estrategia argumentativa de reajuste cualitativo.",
    incorrectas: [
      "Incorrecto: es una enumeración sin relación comparativa.",
      "Incorrecto: expresa cantidad y no cualidad."
    ]
  },
  {
    enunciado: "Las expresiones 'un tanto', 'algo', 'bastante' pueden graduar cualidad sin especificar número.",
    correcta: "Sí, actúan como cuantificadores de grado sobre adjetivos o adverbios.",
    incorrectas: [
      "No, solo modifican sustantivos contables en plural.",
      "No, son marcas de modalidad epistémica, no de grado."
    ]
  },
  {
    enunciado: "En 'dejó el vaso medio lleno', 'medio' expresa cantidad fraccionaria aplicada a un nombre.",
    correcta: "Cierto: cuantifica la entidad nominal con valor de mitad.",
    incorrectas: [
      "Falso: 'medio' es un adverbio que intensifica la cualidad del vaso.",
      "Falso: 'medio' es un artículo neutro sin valor cuantitativo."
    ]
  },
  {
    enunciado: "Los cuantificadores distributivos como 'sendos' asignan una unidad a cada elemento de un conjunto de referencia.",
    correcta: "Verdadero: 'sendos' significa 'uno para cada', con concordancia en plural.",
    incorrectas: [
      "Falso: 'sendos' equivale a 'varios' sin matiz distributivo.",
      "Falso: 'sendos' se usa con nombres incontables en singular."
    ]
  },
  {
    enunciado: "El sufijo -ísimo y el adverbio 'muy' son procedimientos distintos para expresar superlativo absoluto.",
    correcta: "Correcto: uno es morfológico ('carísimo') y el otro analítico ('muy caro').",
    incorrectas: [
      "Incorrecto: 'muy' expresa cantidad y no grado.",
      "Incorrecto: -ísimo forma comparativos, no superlativos."
    ]
  },
  {
    enunciado: "Las construcciones comparativas pueden introducirse con 'que' o con 'de' según la estructura.",
    correcta: "Sí: 'más alto que tú' frente a 'más de lo que pensabas' o 'más del necesario'.",
    incorrectas: [
      "No: la única preposición válida en comparativas es 'que'.",
      "No: 'de' se reserva a comparativas de inferioridad exclusivamente."
    ]
  },
  {
    enunciado: "La cuantificación aproximativa admite valores como 'cerca de', 'alrededor de' o 'sobre' ante numerales.",
    correcta: "Verdadero: son marcadores de inexactitud numérica aceptados en registros formales e informales.",
    incorrectas: [
      "Falso: solo se permiten en lenguaje coloquial no normativo.",
      "Falso: convierten el numeral en ordinal por perífrasis."
    ]
  },
  {
    enunciado: "En 'el más rápido posible', el superlativo se combina con un adjetivo en estructura elativa fijada.",
    correcta: "Correcto: se intensifica al máximo dentro de los límites de posibilidad.",
    incorrectas: [
      "Incorrecto: 'posible' impide cualquier grado de intensificación.",
      "Incorrecto: la construcción es incorrecta por redundancia semántica."
    ]
  },
  {
    enunciado: "Los cuantificadores de porcentaje ('un 30%', 'la mitad') se comportan como núcleos cuantitativos que rigen concordancia variable.",
    correcta: "Cierto: la concordancia puede oscilar entre el cuantificador y el complemento según el enfoque.",
    incorrectas: [
      "Falso: siempre concuerdan con el nombre del complemento y nunca con el porcentaje.",
      "Falso: carecen de incidencia en la concordancia del predicado."
    ]
  },
  {
    enunciado: "El adverbio 'apenas' expresa cantidad mínima y suele coaparecer con negación o con valores de escasez.",
    correcta: "Sí: indica límite inferior o insuficiencia cuantitativa contextual.",
    incorrectas: [
      "No: es un adverbio temporal equivalente a 'pronto'.",
      "No: es un operador de certeza plena y no cuantitativo."
    ]
  },
  {
    enunciado: "Las relativas explicativas ('los alumnos, que estaban cansados,') añaden cualidad no restrictiva con valor informativo adicional.",
    correcta: "Verdadero: aportan una propiedad comentativa del referente ya identificado.",
    incorrectas: [
      "Falso: son indispensables para identificar al referente y restringen su extensión.",
      "Falso: no expresan cualidad, sino solo causa."
    ]
  },
  {
    enunciado: "La construcción 'más bien + adjetivo' reorienta el foco cualitativo hacia una alternativa cercana.",
    correcta: "Correcto: actúa como atenuador y reetiqueta la propiedad relevante.",
    incorrectas: [
      "Incorrecto: intensifica sin matiz de atenuación.",
      "Incorrecto: equivale a una comparación de superioridad estricta."
    ]
  },
  {
    enunciado: "Los cuantificadores 'todo', 'cada' y 'ambos' difieren en inclusividad y distribución.",
    correcta: "Sí: 'todo' totaliza, 'cada' distribuye individualmente y 'ambos' suma dos elementos como conjunto.",
    incorrectas: [
      "No: son sinónimos y se intercambian sin cambio semántico.",
      "No: solo 'cada' puede preceder al sustantivo en posición determinante."
    ]
  },
  {
    enunciado: "Las expresiones coloquiales 'un montón', 'a tope' y 'a saco' transmiten cantidad o grado elevados en registro informal.",
    correcta: "Verdadero: son marcadores intensificadores frecuentes en habla coloquial.",
    incorrectas: [
      "Falso: pertenecen al registro jurídico-administrativo.",
      "Falso: expresan duda epistémica y no cantidad ni grado."
    ]
  },
  {
    enunciado: "En 'no es tan difícil como parece', la estructura comparativa de igualdad opera sobre un adjetivo evaluativo.",
    correcta: "Correcto: 'tan... como' establece comparación equiparativa atenuada por 'no'.",
    incorrectas: [
      "Incorrecto: se trata de un superlativo relativo con 'como'.",
      "Incorrecto: 'tan' funciona aquí como cuantificador numeral."
    ]
  },
  {
    enunciado: "Los nombres incontables como 'agua' o 'arena' admiten cuantificación mediante partitivos ('un vaso de agua', 'un kilo de arena').",
    correcta: "Cierto: la unidad de medida suple la imposibilidad de plural contable directo.",
    incorrectas: [
      "Falso: los incontables no pueden cuantificarse de ninguna manera.",
      "Falso: requieren obligatoriamente numerales ordinales."
    ]
  },
  {
    enunciado: "El intensificador prefijal 'super-' es productivo en registros coloquiales para elevar el grado de una cualidad.",
    correcta: "Sí: 'superinteresante', 'superrápido' son formaciones habituales no técnicas.",
    incorrectas: [
      "No: es un sufijo culto exclusivo del lenguaje científico.",
      "No: introduce siempre un valor de disminución, no de aumento."
    ]
  },
  {
    enunciado: "En 'demasiado poco', la combinación de cuantificadores crea una escala que primero maximiza y luego minimiza el grado.",
    correcta: "Verdadero: 'demasiado' intensifica y 'poco' fija el valor en el extremo inferior de la escala.",
    incorrectas: [
      "Falso: la secuencia es agramatical en español estándar.",
      "Falso: 'demasiado' solo puede combinarse con adjetivos en positivo."
    ]
  },
  {
    enunciado: "Las construcciones exclamativas como '¡qué cantidad de gente!' o '¡cuán hermosa!' codifican grado elevado con foco expresivo.",
    correcta: "Correcto: emplean cuantificadores y operadores de grado enmarcados en modalidad exclamativa.",
    incorrectas: [
      "Incorrecto: son interrogativas indirectas sin valor de grado.",
      "Incorrecto: exigen siempre un comparativo explícito con 'que'."
    ]
  }
];
