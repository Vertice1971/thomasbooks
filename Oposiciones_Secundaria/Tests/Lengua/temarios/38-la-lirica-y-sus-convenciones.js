// temarios/38-la-lirica-y-sus-convenciones.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué rasgo define prototípicamente al género lírico?",
    correcta: "La expresión subjetiva de un hablante lírico con predominio de la función poética.",
    incorrectas: [
      "La exposición objetiva de datos sin mediación enunciativa.",
      "La representación escénica exclusiva mediante diálogo."
    ]
  },
  {
    enunciado: "¿Cómo se distingue el hablante lírico del autor empírico?",
    correcta: "El hablante lírico es una voz construida en el texto; el autor es la persona real extratextual.",
    incorrectas: [
      "Ambos son idénticos por definición en toda poesía.",
      "El autor solo existe en poemas en primera persona."
    ]
  },
  {
    enunciado: "Según Jakobson, la función poética se caracteriza por:",
    correcta: "Centrar la atención en la forma del mensaje y sus relaciones internas.",
    incorrectas: [
      "Orientarse únicamente al referente externo del texto.",
      "Priorizar la corrección gramatical por encima de todo."
    ]
  },
  {
    enunciado: "En la lírica, la deíxis suele intensificarse. ¿Qué rasgo es propio?",
    correcta: "La presencia marcada de yo–tú–aquí–ahora enunciativos.",
    incorrectas: [
      "La ausencia total de marcas personales y temporales.",
      "El uso exclusivo de tercera persona impersonal."
    ]
  },
  {
    enunciado: "¿Qué es el apóstrofe en poesía?",
    correcta: "Una interpelación directa a un destinatario real o imaginario.",
    incorrectas: [
      "La repetición de sonidos con fines eufónicos.",
      "La supresión de nexos para acelerar el ritmo."
    ]
  },
  {
    enunciado: "Diferencia operativa entre lírica y narrativa:",
    correcta: "La lírica densifica la experiencia y la enunciación; la narrativa privilegia la acción y la diégesis.",
    incorrectas: [
      "La lírica carece de imágenes; la narrativa, de ritmo.",
      "La lírica siempre es en verso y la narrativa siempre en prosa."
    ]
  },
  {
    enunciado: "¿Cuál es la diferencia correcta entre rima asonante y consonante?",
    correcta: "Asonante: coinciden vocales desde la última tónica; consonante: coinciden vocales y consonantes.",
    incorrectas: [
      "Asonante: coinciden todas las letras; consonante: solo las vocales.",
      "Asonante: solo en versos de arte mayor; consonante: arte menor."
    ]
  },
  {
    enunciado: "¿Qué distingue arte mayor de arte menor?",
    correcta: "Arte mayor: versos de nueve o más sílabas; arte menor: de ocho o menos.",
    incorrectas: [
      "Arte mayor rima asonante y arte menor rima consonante.",
      "Arte mayor en estrofas y arte menor solo en poemas sueltos."
    ]
  },
  {
    enunciado: "El endecasílabo es un verso de:",
    correcta: "Once sílabas métricas.",
    incorrectas: [
      "Diez sílabas métricas.",
      "Doce sílabas métricas."
    ]
  },
  {
    enunciado: "El octosílabo se compone de:",
    correcta: "Ocho sílabas métricas.",
    incorrectas: [
      "Siete sílabas métricas.",
      "Nueve sílabas métricas."
    ]
  },
  {
    enunciado: "Define la sinalefa:",
    correcta: "Fusión de la vocal final de una palabra con la inicial de la siguiente en el cómputo silábico.",
    incorrectas: [
      "Separación de un diptongo dentro de una misma palabra.",
      "Licencia que elimina la última sílaba del verso."
    ]
  },
  {
    enunciado: "Sinéresis y diéresis se diferencian porque:",
    correcta: "Sinéresis une hiato en una sílaba; diéresis separa diptongo en dos sílabas.",
    incorrectas: [
      "Ambas separan hiatos para aumentar sílabas.",
      "Ambas suprimen sílabas al final del verso."
    ]
  },
  {
    enunciado: "¿Qué es el encabalgamiento?",
    correcta: "La ruptura de la unidad sintáctica al final de un verso que continúa en el siguiente.",
    incorrectas: [
      "La coincidencia exacta de sintaxis y verso en cada final.",
      "Una rima interna obligatoria a mitad de verso."
    ]
  },
  {
    enunciado: "Estructura prototípica del soneto en español:",
    correcta: "Dos cuartetos y dos tercetos de endecasílabos con rima consonante.",
    incorrectas: [
      "Tres serventesios de alejandrinos con rima asonante.",
      "Cuatro redondillas de heptasílabos con rima libre."
    ]
  },
  {
    enunciado: "Esquema métrico canónico de la lira:",
    correcta: "7a 11B 7a 7b 11B.",
    incorrectas: [
      "8a 8b 8a 8b 8c.",
      "11A 11A 11B 11B 11A."
    ]
  },
  {
    enunciado: "La silva se define como:",
    correcta: "Combinación libre de heptasílabos y endecasílabos con rima variable.",
    incorrectas: [
      "Serie de alejandrinos isométricos sin rima.",
      "Suma de tetrástrofos monorrimos obligatorios."
    ]
  },
  {
    enunciado: "Señala el rasgo propio del romance lírico tradicional:",
    correcta: "Versos octosílabos con rima asonante en los pares y sueltos los impares.",
    incorrectas: [
      "Endecasílabos con rima consonante pareada.",
      "Alejandrinos con rima cruzada en todas las posiciones."
    ]
  },
  {
    enunciado: "Oda y elegía se distinguen porque:",
    correcta: "La oda expresa alabanza o exaltación; la elegía, lamento luctuoso.",
    incorrectas: [
      "La oda exige rima asonante y la elegía, consonante.",
      "La oda es popular y la elegía siempre culta."
    ]
  },
  {
    enunciado: "La égloga se caracteriza por:",
    correcta: "Tema pastoril y a menudo forma dialogada en entorno idealizado.",
    incorrectas: [
      "Tema bélico con metáforas tecnocientíficas.",
      "Ausencia de personajes o interlocutores."
    ]
  },
  {
    enunciado: "¿Qué rasgo define al madrigal clásico?",
    correcta: "Brevedad, asunto amoroso y tono delicado, a menudo con heptasílabos y endecasílabos.",
    incorrectas: [
      "Extensión épica y tono heroico.",
      "Estructura fija de doce alejandrinos."
    ]
  },
  {
    enunciado: "El hipérbaton consiste en:",
    correcta: "Alterar el orden habitual de los constituyentes por efecto expresivo.",
    incorrectas: [
      "Eliminar nexos coordinantes en series.",
      "Repetir sonidos iniciales contiguos."
    ]
  },
  {
    enunciado: "La anáfora, en poesía, es:",
    correcta: "Repetición de una o varias palabras al inicio de versos o miembros.",
    incorrectas: [
      "Inversión cruzada de estructuras sintácticas.",
      "Supresión de conjunciones en una enumeración."
    ]
  },
  {
    enunciado: "Paralelismo y quiasmo se relacionan porque:",
    correcta: "El paralelismo repite estructuras; el quiasmo las invierte en orden cruzado.",
    incorrectas: [
      "El paralelismo exige rima; el quiasmo, no.",
      "Ambos nombran la rima interna del verso."
    ]
  },
  {
    enunciado: "Polisíndeton frente a asíndeton:",
    correcta: "Polisíndeton acumula conjunciones; asíndeton las suprime en series.",
    incorrectas: [
      "Polisíndeton suprime artículos; asíndeton los repite.",
      "Son términos equivalentes en retórica."
    ]
  },
  {
    enunciado: "Define la metáfora:",
    correcta: "Traslado de significado por semejanza entre dominios.",
    incorrectas: [
      "Sustitución por contigüidad causal o espacial exclusivamente.",
      "Nombrar el todo por la parte de forma literal."
    ]
  },
  {
    enunciado: "La sinestesia se reconoce por:",
    correcta: "Cruzar sensaciones de distintos campos perceptivos en una imagen.",
    incorrectas: [
      "La exageración desmesurada de un rasgo.",
      "La afirmación por negación del contrario."
    ]
  },
  {
    enunciado: "Oxímoron y paradoja se distinguen porque:",
    correcta: "Oxímoron yuxtapone términos opuestos; la paradoja formula un contraste a nivel proposicional.",
    incorrectas: [
      "El oxímoron es solo fónico y la paradoja solo métrica.",
      "No hay diferencia: son sinónimos perfectos."
    ]
  },
  {
    enunciado: "¿Qué es la litotes?",
    correcta: "Atenuar una afirmación negando su opuesto.",
    incorrectas: [
      "Insistir mediante repeticiones enfáticas continuas.",
      "Acumular términos en gradación ascendente."
    ]
  },
  {
    enunciado: "La prosopopeya o personificación consiste en:",
    correcta: "Atribuir cualidades humanas a seres inanimados o abstractos.",
    incorrectas: [
      "Cambiar el orden de palabras sin alterar el sentido.",
      "Usar preguntas sin esperar respuesta."
    ]
  },
  {
    enunciado: "La aliteración produce efecto estético mediante:",
    correcta: "Repetición significativa de sonidos semejantes.",
    incorrectas: [
      "Supresión de toda rima en un poema.",
      "Inversión del orden lógico de oraciones."
    ]
  },
  {
    enunciado: "¿Qué se denomina isocolon?",
    correcta: "Secuencia de miembros o cláusulas de longitud y estructura similares.",
    incorrectas: [
      "Rima idéntica en todos los versos del poema.",
      "Cómputo silábico irregular intencional."
    ]
  },
  {
    enunciado: "Diferencia entre verso blanco y verso libre:",
    correcta: "El blanco mantiene metro fijo sin rima; el libre carece de metro y rima regulares.",
    incorrectas: [
      "El blanco es prosa poética y el libre, soneto.",
      "El blanco exige estrofas fijas y el libre, no."
    ]
  },
  {
    enunciado: "¿Qué caracteriza la prosa poética?",
    correcta: "Texto en prosa con alta densidad retórica, rítmica e imagética sin división en versos.",
    incorrectas: [
      "Prosa que imita el cómputo silábico estricto.",
      "Poemas de verso libre con rima interna constante."
    ]
  },
  {
    enunciado: "¿Cuál de los siguientes es un topos lírico tradicional?",
    correcta: "Carpe diem.",
    incorrectas: [
      "Deus ex machina.",
      "In medias res."
    ]
  },
  {
    enunciado: "Define locus amoenus:",
    correcta: "Espacio idealizado de placer y armonía natural.",
    incorrectas: [
      "Lugar de castigo y expiación alegórica.",
      "Estructura métrica de ocho sílabas sin rima."
    ]
  },
  {
    enunciado: "El tópico ubi sunt plantea:",
    correcta: "Interrogación por lo desaparecido y la fugacidad del tiempo.",
    incorrectas: [
      "Elogio de la vida retirada campestre.",
      "Exhortación al goce inmediato del presente."
    ]
  },
  {
    enunciado: "El motivo vanitas remite a:",
    correcta: "La caducidad de la vida y la inutilidad de la vanagloria humana.",
    incorrectas: [
      "La alabanza de la riqueza material como fin supremo.",
      "La eternidad del cuerpo frente al alma."
    ]
  },
  {
    enunciado: "La poesía visual o concreta se caracteriza por:",
    correcta: "Organizar el significado también mediante disposición tipográfica e imagen.",
    incorrectas: [
      "Evitar cualquier elemento gráfico y visual.",
      "Someterse siempre a sonetos encadenados."
    ]
  },
  {
    enunciado: "¿Qué rasgo es propio del spoken word/poetry slam?",
    correcta: "La dimensión performativa y oral con presencia escénica y prosodia marcada.",
    incorrectas: [
      "La lectura silenciosa obligatoria sin gesto.",
      "La rima consonante fija en endecasílabos."
    ]
  },
  {
    enunciado: "Un itinerario eficaz de comentario lírico ‘por capas’ incluye:",
    correcta: "Métrica/ritmo → voz y deíxis → imágenes/tropos → topoi/redes → tono/ethos → intertexto → síntesis.",
    incorrectas: [
      "Biografía extensa del autor → ventas → portada.",
      "Resumen del contenido sin atención a la forma."
    ]
  }
];
