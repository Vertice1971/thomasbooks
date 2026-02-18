// 03-lenguaje-y-comunicacion-visual-elementos-formales-y-sintaxis.js
var PREGUNTAS = [
  {
    enunciado: "¿Cómo define la semiótica el concepto de 'Signo' en la comunicación visual?",
    correcta: "Como una unidad mínima de sentido que consta de un significante (forma física) y un significado (concepto mental)",
    incorrectas: [
      "Como la representación idéntica y naturalista de un objeto real",
      "Como cualquier mancha o trazo realizado de forma azarosa sobre un soporte"
    ]
  },
  {
    enunciado: "Según Charles Sanders Peirce, ¿qué caracteriza a un 'Ícono'?",
    correcta: "El signo mantiene una relación de semejanza formal o estructural con el objeto que representa",
    incorrectas: [
      "El signo tiene una conexión física o causal con el referente (como el humo con el fuego)",
      "La relación entre signo y objeto es puramente convencional y arbitraria"
    ]
  },
  {
    enunciado: "En la terminología de Peirce, ¿qué es un 'Índice' o 'Indicio'?",
    correcta: "Un signo que tiene una conexión existencial o de continuidad física con el objeto (ej. una huella o una sombra)",
    incorrectas: [
      "Un símbolo que requiere un aprendizaje cultural previo para ser entendido",
      "Una imagen abstracta que no guarda relación con la realidad"
    ]
  },
  {
    enunciado: "¿Qué define a un 'Símbolo' en el lenguaje visual?",
    correcta: "La relación entre el significante y el significado es arbitraria y se basa exclusivamente en una convención social",
    incorrectas: [
      "Es un signo que se parece visualmente a lo que representa",
      "Es un resto físico dejado por un organismo vivo"
    ]
  },
  {
    enunciado: "Dentro de los elementos morfológicos, ¿qué se entiende por 'El Punto' desde una perspectiva sintáctica?",
    correcta: "El elemento primario de la imagen que focaliza la atención y genera centros de tensión, careciendo de dimensión espacial absoluta",
    incorrectas: [
      "Una marca circular de al menos 1 mm de diámetro",
      "El final de una oración en un texto escrito"
    ]
  },
  {
    enunciado: "¿Cuál es la función dinámica de 'La Línea' en la composición?",
    correcta: "Representar la trayectoria de un punto en movimiento y dirigir la lectura visual del espectador creando vectores de dirección",
    incorrectas: [
      "Servir únicamente para delimitar el contorno de las figuras geométricas",
      "Indicar la ausencia de luz en una representación pictórica"
    ]
  },
  {
    enunciado: "En la sintaxis visual, ¿qué es el 'Plano'?",
    correcta: "Un elemento de dos dimensiones que define la profundidad y la articulación del espacio tridimensional sobre el soporte bidimensional",
    incorrectas: [
      "Cualquier superficie que sea totalmente lisa al tacto",
      "El resultado de la intersección de dos líneas paralelas"
    ]
  },
  {
    enunciado: "¿Qué diferencia el 'Denotado' del 'Connotado' en una imagen?",
    correcta: "Lo denotado es la lectura literal y objetiva de los elementos, mientras lo connotado son los significados culturales y subjetivos",
    incorrectas: [
      "Lo denotado es el color y lo connotado es la forma",
      "Lo denotado es el mensaje publicitario y lo connotado el dibujo artístico"
    ]
  },
  {
    enunciado: "Según Roman Jakobson, ¿qué es la 'Función Estética o Poética' en la comunicación?",
    correcta: "Aquella donde el interés del mensaje se centra en el propio mensaje, su forma y estructura visual",
    incorrectas: [
      "La que intenta convencer al espectador para que compre un producto",
      "La que se utiliza para comprobar que el canal de comunicación funciona"
    ]
  },
  {
    enunciado: "¿Qué es la 'Función Fática' aplicada al lenguaje visual?",
    correcta: "Mensajes cuyo objetivo es establecer, prolongar o interrumpir la comunicación o confirmar que el receptor atiende",
    incorrectas: [
      "La representación exacta de las leyes de la naturaleza",
      "El uso de metáforas visuales para criticar la política"
    ]
  },
  {
    enunciado: "En el análisis de la imagen, ¿qué es el 'Grado de Iconicidad'?",
    correcta: "La escala que mide la semejanza de una imagen respecto al objeto real, desde la fotografía al signo abstracto",
    incorrectas: [
      "El número de iconos que aparecen en una interfaz informática",
      "La calidad del soporte sobre el que se ha pintado una obra"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al 'Equilibrio Oculto' o dinámico en una composición?",
    correcta: "Aquel que no se basa en la simetría, sino en la compensación de pesos visuales de diferentes formas, colores y tamaños",
    incorrectas: [
      "Un equilibrio que es imposible de detectar por el ojo humano",
      "Cuando todos los elementos están ocultos tras un primer plano"
    ]
  },
  {
    enunciado: "¿Qué es la 'Textura' como elemento morfológico?",
    correcta: "La cualidad visual y táctil de una superficie que aporta información sobre su materialidad y afecta a la reflexión de la luz",
    incorrectas: [
      "El grosor del papel utilizado en el dibujo",
      "La mezcla de pigmentos con aglutinantes de origen mineral"
    ]
  },
  {
    enunciado: "En sintaxis visual, ¿qué se entiende por 'Ritmo por Repetición'?",
    correcta: "La sucesión regular y monótona de un mismo módulo o elemento visual en el espacio",
    incorrectas: [
      "La alternancia de luces y sombras sin orden aparente",
      "El movimiento de las manos del artista al dibujar"
    ]
  },
  {
    enunciado: "¿Qué define a la 'Proporción' en un sistema formal?",
    correcta: "La relación cuantitativa y armónica entre las partes y el todo, o entre los distintos elementos de una composición",
    incorrectas: [
      "El tamaño total de una obra en metros cuadrados",
      "La cantidad de color rojo respecto al azul en un cuadro"
    ]
  },
  {
    enunciado: "¿Qué es la 'Sección Áurea' ($\phi$)?",
    correcta: "Una proporción matemática ($1:1,618...$) que se considera estéticamente armoniosa y se encuentra en la naturaleza y el arte",
    incorrectas: [
      "Una técnica para aplicar láminas de oro sobre madera",
      "La división de un lienzo en cuatro partes iguales"
    ]
  },
  {
    enunciado: "¿Qué es el 'Contraste' desde el punto de vista sintáctico?",
    correcta: "La comparación de elementos opuestos (claro/oscuro, grande/pequeño, rugoso/liso) para enfatizar formas y crear jerarquía",
    incorrectas: [
      "La firma del autor en la esquina inferior del cuadro",
      "El proceso de barnizar una pintura al óleo"
    ]
  },
  {
    enunciado: "¿Qué es la 'Unidad' en una obra visual?",
    correcta: "El principio por el cual todos los elementos se integran en un conjunto coherente donde nada sobra ni falta",
    incorrectas: [
      "La primera obra que realiza un artista en su carrera",
      "El uso de un solo color en toda la composición"
    ]
  },
  {
    enunciado: "En semiótica, ¿qué es la 'Sustitución' o Metáfora visual?",
    correcta: "Una figura retórica donde se reemplaza un elemento por otro que guarda una relación de semejanza conceptual",
    incorrectas: [
      "Cambiar un pincel viejo por uno nuevo durante el trabajo",
      "Pintar un objeto encima de otro para borrarlo"
    ]
  },
  {
    enunciado: "¿Qué define a la 'Sinécdoque' visual?",
    correcta: "Representar el todo mediante una parte (ej. un ojo para representar un rostro) o viceversa",
    incorrectas: [
      "Exagerar las dimensiones de un objeto para hacerlo cómico",
      "Repetir un mismo elemento hasta el infinito"
    ]
  },
  {
    enunciado: "¿Qué es la 'Tensión' visual?",
    correcta: "Fuerza compositiva que atrae la mirada hacia puntos específicos, generada por la inestabilidad o la dirección de las formas",
    incorrectas: [
      "La presión física que ejerce el artista sobre el soporte",
      "El estado de nerviosismo del espectador ante una obra abstracta"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al 'Espacio Negativo'?",
    correcta: "El área vacía o aire que rodea y define al sujeto principal (espacio positivo) en una composición",
    incorrectas: [
      "Una zona de la obra que está mal pintada y debe eliminarse",
      "El espacio que queda detrás del caballete"
    ]
  },
  {
    enunciado: "En la teoría de la imagen, ¿qué es el 'Peso Visual'?",
    correcta: "La capacidad de un elemento para atraer la atención del receptor, influenciada por su tamaño, color, posición y contraste",
    incorrectas: [
      "La masa física en kilogramos de una escultura de bronce",
      "El esfuerzo necesario para transportar una obra a una exposición"
    ]
  },
  {
    enunciado: "¿Qué es el 'Eje de Simetría'?",
    correcta: "Línea imaginaria que divide una composición en partes iguales o equivalentes, generando estabilidad y estatismo",
    incorrectas: [
      "El cable que sostiene un cuadro colgado en la pared",
      "La dirección en la que el artista proyecta su sombra"
    ]
  },
  {
    enunciado: "¿Qué establece la 'Ley de Tercios'?",
    correcta: "Una regla compositiva que divide la imagen en 9 partes iguales y sitúa los centros de interés en las intersecciones",
    incorrectas: [
      "Que solo el 33% de la obra puede ser de color cálido",
      "La obligación de dividir el sueldo del artista entre tres colaboradores"
    ]
  },
  {
    enunciado: "¿Qué es el 'Esquema Compositivo'?",
    correcta: "El conjunto de líneas maestras y estructuras geométricas ocultas sobre las que se asienta la organización de la obra",
    incorrectas: [
      "El boceto a lápiz que se tira a la basura después de terminar",
      "La lista de colores que se van a usar en el proyecto"
    ]
  },
  {
    enunciado: "En la comunicación visual, ¿qué es el 'Canal'?",
    correcta: "El medio físico a través del cual se transmite el mensaje (papel, pantalla, lienzo, muro)",
    incorrectas: [
      "El idioma en el que habla el artista",
      "La intención política del autor de la obra"
    ]
  },
  {
    enunciado: "¿Qué es la 'Codificación' en el proceso comunicativo?",
    correcta: "La transformación de una idea en un sistema de signos visuales comprensibles para el receptor",
    incorrectas: [
      "Poner un precio con código de barras a la obra de arte",
      "Proteger la obra con un cristal para que no se deteriore"
    ]
  },
  {
    enunciado: "¿Qué define al 'Ruido' en la comunicación visual?",
    correcta: "Cualquier interferencia que dificulta la correcta recepción del mensaje (mala impresión, exceso de elementos, baja luz)",
    incorrectas: [
      "El sonido que hace la gente al hablar en una galería de arte",
      "La música estridente que acompaña a un vídeo artístico"
    ]
  },
  {
    enunciado: "¿Qué es la 'Polisemia' de la imagen?",
    correcta: "La capacidad de una imagen de tener múltiples significados dependiendo del contexto y del receptor",
    incorrectas: [
      "Una imagen que tiene muchos colores diferentes",
      "Un dibujo realizado por muchas personas a la vez"
    ]
  },
  {
    enunciado: "¿Qué es el 'Anclaje' según Roland Barthes?",
    correcta: "La función del texto que acompaña a la imagen para limitar su polisemia y guiar la interpretación hacia un único sentido",
    incorrectas: [
      "El peso metálico que sujeta los barcos en el fondo del mar",
      "La base de cemento sobre la que se apoya una estatua"
    ]
  },
  {
    enunciado: "¿Qué es la 'Dirección Visual'?",
    correcta: "La trayectoria que sigue el ojo al recorrer la imagen, determinada por líneas, miradas de personajes o vectores de movimiento",
    incorrectas: [
      "La dirección postal del estudio del artista",
      "La brújula que se usa para orientar los mapas topográficos"
    ]
  },
  {
    enunciado: "En composición, ¿qué es el 'Ritmo por Alternancia'?",
    correcta: "La repetición de dos o más elementos distintos que se suceden de forma ordenada",
    incorrectas: [
      "Cambiar de opinión sobre el color del fondo constantemente",
      "Usar diferentes pinceles para la misma línea"
    ]
  },
  {
    enunciado: "¿Qué es la 'Jerarquía Visual'?",
    correcta: "El orden de importancia de los elementos en una composición, permitiendo que el espectador reciba la información de forma estructurada",
    incorrectas: [
      "El escalafón de mandos dentro de una escuela de arte",
      "La lista de los materiales más caros a los más baratos"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al 'Dinamismo' en una imagen?",
    correcta: "El uso de líneas oblicuas, curvas, ritmos abiertos y asimetrías que sugieren movimiento y tensión",
    incorrectas: [
      "Que la imagen se mueva físicamente mediante un motor",
      "Que el espectador tenga que correr para ver toda la obra"
    ]
  },
  {
    enunciado: "¿Qué es la 'Simplicidad' como estrategia sintáctica?",
    correcta: "La eliminación de todo elemento superfluo para potenciar la fuerza del mensaje central",
    incorrectas: [
      "Dibujar como si fuera un niño pequeño sin técnica",
      "Usar solo papel en blanco sin ninguna marca"
    ]
  },
  {
    enunciado: "¿Qué define al 'Punto de Fuga'?",
    correcta: "El lugar geométrico en el infinito donde convergen las líneas paralelas en una representación en perspectiva",
    incorrectas: [
      "El lugar por donde se escapa la pintura si el bote está roto",
      "El centro exacto de una circunferencia perfecta"
    ]
  },
  {
    enunciado: "¿Qué es la 'Forma' en el lenguaje visual?",
    correcta: "La apariencia externa de los objetos definida por su contorno, color, textura y estructura",
    incorrectas: [
      "El molde de escayola para hacer reproducciones",
      "La manera educada de hablar con un profesor"
    ]
  },
  {
    enunciado: "¿Qué es el 'Estilo' en un contexto formal?",
    correcta: "El conjunto de rasgos visuales y sintácticos constantes que caracterizan la obra de un autor, escuela o época",
    incorrectas: [
      "La pluma estilográfica que se usa para caligrafía",
      "La moda de ropa que lleva el artista durante la inauguración"
    ]
  },
  {
    enunciado: "¿Qué es el 'Feedback' o retroalimentación en la comunicación visual?",
    correcta: "La respuesta del receptor que permite al emisor saber si el mensaje ha sido comprendido o debe ser ajustado",
    incorrectas: [
      "Alimentar a los artistas para que tengan energía para pintar",
      "El eco que se produce en las salas grandes de los museos"
    ]
  }
];