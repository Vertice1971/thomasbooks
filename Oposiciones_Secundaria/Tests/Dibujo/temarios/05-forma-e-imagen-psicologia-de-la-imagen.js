// 05-psicologia-de-la-forma-y-la-imagen-teoria-y-aplicacion-docente.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué postula el concepto de 'Isomorfismo' en la psicología de la Gestalt aplicado a la imagen?",
    correcta: "La existencia de una correspondencia estructural entre los procesos psíquicos y los procesos fisiológicos cerebrales ante un estímulo formal",
    incorrectas: [
      "Que el ojo y la cámara fotográfica funcionan bajo leyes físicas idénticas",
      "La capacidad de representar objetos de igual forma pero distinto tamaño mediante escalas"
    ]
  },
  {
    enunciado: "Según Rudolf Arnheim, ¿qué es el 'Pensamiento Visual'?",
    correcta: "Un proceso donde la percepción y la intelección son inseparables; percibir una forma es ya una operación cognitiva de juicio y abstracción",
    incorrectas: [
      "La capacidad de memorizar imágenes para luego reproducirlas fielmente sobre el papel",
      "Una técnica de dibujo que prioriza el hemisferio derecho sobre el izquierdo"
    ]
  },
  {
    enunciado: "¿Cómo define James J. Gibson el concepto de 'Affordance' (prestancia) en la percepción de la forma?",
    correcta: "Las posibilidades de acción que un objeto o entorno ofrece al observador en función de sus propiedades físicas percibidas",
    incorrectas: [
      "La calidad estética intrínseca de una obra de arte independientemente del espectador",
      "El coste económico de producción de una imagen en los medios de comunicación"
    ]
  },
  {
    enunciado: "¿Qué es el 'Gradiente de Textura' en la teoría de la percepción ecológica de Gibson?",
    correcta: "Un indicio monocular de profundidad basado en el cambio progresivo de la densidad y tamaño de los elementos de una superficie",
    incorrectas: [
      "La diferencia entre la rugosidad del lienzo y la suavidad de la acuarela",
      "La aplicación de capas de pintura de distinto grosor para crear relieve real"
    ]
  },
  {
    enunciado: "¿En qué consiste la 'Ley de la Buena Continuidad' o Dirección Común?",
    correcta: "Nuestra mente agrupa elementos que parecen seguir una misma dirección o patrón, minimizando los cambios bruscos de orientación",
    incorrectas: [
      "La obligación de no levantar el lápiz del papel durante un encaje del natural",
      "La persistencia de una imagen en la retina tras un estímulo lumínico intenso"
    ]
  },
  {
    enunciado: "Dentro de la Psicología de la Imagen, ¿qué se entiende por 'Nivel de Realidad' de una imagen?",
    correcta: "El grado de eficacia de los estímulos visuales para producir una experiencia de reconocimiento equivalente al objeto real",
    incorrectas: [
      "La cantidad de píxeles por pulgada que contiene un archivo de imagen digital",
      "La veracidad histórica de los hechos representados en una pintura de género"
    ]
  },
  {
    enunciado: "¿Qué es la 'Pregnancia' (Prägnanz) en términos de economía cognitiva?",
    correcta: "La ley que dicta que la organización del campo visual será la mejor, más simple y estable que las condiciones permitan",
    incorrectas: [
      "La capacidad de una imagen para quedar grabada en la memoria a largo plazo",
      "El estado de una forma que está a punto de transformarse en otra diferente"
    ]
  },
  {
    enunciado: "¿Cómo afecta la 'Inhibición Lateral' a la percepción de los contornos?",
    correcta: "Es un proceso neurofisiológico que exagera el contraste en los bordes, facilitando la segregación figura-fondo",
    incorrectas: [
      "Impide al observador ver los colores que están en los extremos del campo visual",
      "Provoca que las líneas paralelas parezcan converger en el infinito"
    ]
  },
  {
    enunciado: "¿Qué es una 'Figura Reversible' en el contexto de la relación Figura-Fondo?",
    correcta: "Una configuración donde los indicios son tan ambiguos que el fondo puede convertirse en figura y viceversa de forma alternante",
    incorrectas: [
      "Un dibujo que puede verse igual si se gira la hoja 180 grados",
      "Una escultura diseñada para ser vista desde todos los ángulos posibles"
    ]
  },
  {
    enunciado: "En el análisis de la forma, ¿qué diferencia al 'Contorno' del 'Dintorno'?",
    correcta: "El contorno es la línea límite que separa la figura del fondo; el dintorno es el conjunto de colores y texturas dentro de dicha línea",
    incorrectas: [
      "El contorno es el dibujo a lápiz y el dintorno es el marco de madera",
      "No existe diferencia técnica, son términos sinónimos en la geometría euclidiana"
    ]
  },
  {
    enunciado: "¿Qué establece la 'Teoría de los Tres Niveles' de Panofsky en la interpretación de la imagen?",
    correcta: "Distingue entre el nivel pre-iconográfico (formas), iconográfico (temas) e iconológico (significado intrínseco)",
    incorrectas: [
      "Analiza la imagen según su brillo, saturación y tono exclusivamente",
      "Divide el proceso artístico en boceto, ejecución y barnizado"
    ]
  },
  {
    enunciado: "¿Qué es la 'Paralaje de Movimiento' como clave de profundidad?",
    correcta: "Un indicio cinético donde los objetos cercanos parecen moverse más rápido que los lejanos cuando el observador se desplaza",
    incorrectas: [
      "El error que se produce al mirar por el visor de una cámara réflex",
      "La deformación de las formas circulares cuando se ven de lado"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al 'Pensamiento Divergente' en la creación de imágenes?",
    correcta: "La capacidad de generar múltiples respuestas y soluciones formales ante un mismo problema visual o conceptual",
    incorrectas: [
      "La habilidad para encontrar la única respuesta correcta a un ejercicio de geometría",
      "El proceso de copiar un modelo del natural de la forma más exacta posible"
    ]
  },
  {
    enunciado: "Según la Teoría de la Información, ¿qué es la 'Redundancia' en una imagen?",
    correcta: "El exceso de información visual que no aporta datos nuevos pero ayuda a asegurar la correcta recepción del mensaje",
    incorrectas: [
      "El error de dibujar dos veces el mismo elemento en un plano técnico",
      "La saturación de color que impide distinguir las formas"
    ]
  },
  {
    enunciado: "¿Qué es el 'Ruido Visual'?",
    correcta: "Cualquier elemento perturbador que dificulta la legibilidad de la forma o la comprensión del mensaje visual",
    incorrectas: [
      "El sonido que producen los proyectores de diapositivas antiguos",
      "La textura rugosa de un papel de dibujo de baja calidad"
    ]
  },
  {
    enunciado: "¿Qué es la 'Escala de Iconicidad' de Moles?",
    correcta: "Una clasificación de 11 grados que va desde la realidad misma hasta la abstracción no figurativa",
    incorrectas: [
      "Un instrumento para medir el tamaño de los iconos en la pantalla",
      "La relación proporcional entre la altura y la anchura de un cuadro"
    ]
  },
  {
    enunciado: "En psicología de la forma, ¿qué es la 'Simetría Bilateral'?",
    correcta: "Una organización formal que equilibra pesos respecto a un eje central, generando una sensación de estatismo y orden",
    incorrectas: [
      "La repetición de un módulo en todas las direcciones del plano",
      "El uso de colores complementarios en la misma proporción"
    ]
  },
  {
    enunciado: "¿Qué define a una 'Forma Abierta'?",
    correcta: "Aquella que rompe sus contornos permitiendo que el color o la textura se integren con el espacio circundante",
    incorrectas: [
      "Una figura geométrica que no ha sido cerrada con el compás",
      "Un lienzo que no tiene marco y deja ver el bastidor"
    ]
  },
  {
    enunciado: "¿Qué es la 'Constancia de Claridad' (o brillo)?",
    correcta: "La tendencia a percibir el factor de reflexión de una superficie como constante a pesar de cambios en la iluminación ambiental",
    incorrectas: [
      "La capacidad de dibujar líneas perfectamente rectas sin usar regla",
      "La limpieza de los materiales de dibujo tras finalizar la clase"
    ]
  },
  {
    enunciado: "En la composición visual, ¿qué es la 'Ley de Balanza'?",
    correcta: "Un esquema compositivo que busca el equilibrio mediante la disposición simétrica de pesos visuales respecto a un eje",
    incorrectas: [
      "El instrumento que se usa para pesar los pigmentos en polvo",
      "La técnica de pintar solo en la mitad inferior del soporte"
    ]
  },
  {
    enunciado: "¿Qué es el 'Peso Visual' por ubicación?",
    correcta: "El fenómeno por el cual un elemento gana fuerza visual según su posición (ej. mayor peso en la zona superior que en la inferior)",
    incorrectas: [
      "Lo que pesa el cuadro una vez que se le añade el marco de escayola",
      "La densidad de la pintura al óleo cuando se aplica con espátula"
    ]
  },
  {
    enunciado: "¿A qué se refiere el 'Horror Vacui' en la psicología de la imagen?",
    correcta: "La tendencia cultural y psicológica a rellenar todo el espacio vacío de una obra con detalles y formas",
    incorrectas: [
      "El miedo de los alumnos a enfrentarse al examen de dibujo técnico",
      "La sensación de vértigo al mirar un cuadro con mucha perspectiva"
    ]
  },
  {
    enunciado: "¿Qué es un 'Aposento Perceptivo' o habitación de Ames?",
    correcta: "Una ilusión óptica de profundidad basada en una habitación trapezoidal que se percibe como rectangular, alterando el tamaño de las personas",
    incorrectas: [
      "El estudio privado donde el artista realiza sus obras",
      "Una técnica de iluminación de interiores basada en el claroscuro"
    ]
  },
  {
    enunciado: "En la Teoría de la Forma, ¿qué es el 'Ritmo por Progresión'?",
    correcta: "La repetición de elementos que varían de forma gradual y ordenada en tamaño, color o forma",
    incorrectas: [
      "El aumento de la velocidad al dibujar para terminar antes el examen",
      "La alternancia constante de dos colores primarios"
    ]
  },
  {
    enunciado: "¿Qué es el 'Centro de Interés' en una imagen?",
    correcta: "El punto o zona que, por sus cualidades plásticas, atrae la atención del espectador en primer lugar",
    incorrectas: [
      "El centro geométrico exacto obtenido mediante el cruce de las diagonales",
      "El lugar donde se coloca la firma del autor para que se vea bien"
    ]
  },
  {
    enunciado: "¿Qué es la 'Perspectiva Atmosférica' (o aérea)?",
    correcta: "Clave de profundidad basada en la pérdida de contraste, nitidez y el viraje al azul de los objetos lejanos por la atmósfera",
    incorrectas: [
      "Dibujar el cielo y las nubes con gran precisión meteorológica",
      "La visión que se tiene desde un avión o un dron"
    ]
  },
  {
    enunciado: "¿Qué es el 'Efecto de Posición en el Plano'?",
    correcta: "Clave monocular donde los objetos situados más cerca de la línea del horizonte se perciben como más lejanos",
    incorrectas: [
      "La obligación de colocar el papel en posición horizontal para dibujar paisajes",
      "El cansancio muscular por mantener una mala postura en el caballete"
    ]
  },
  {
    enunciado: "¿Qué es la 'Abstracción' en el proceso perceptivo?",
    correcta: "La capacidad de aislar rasgos esenciales de un objeto prescindiendo de los detalles accesorios o individuales",
    incorrectas: [
      "No prestar atención en clase y quedarse mirando por la ventana",
      "Pintar manchas de colores sin ninguna intención comunicativa"
    ]
  },
  {
    enunciado: "¿Qué define a la 'Forma Cerrada'?",
    correcta: "Aquella que tiene contornos nítidos y definidos que la separan claramente del espacio exterior, transmitiendo orden",
    incorrectas: [
      "Una caja que contiene todos los lápices del alumno",
      "Un dibujo que solo se puede ver si se tiene una clave especial"
    ]
  },
  {
    enunciado: "¿Qué es la 'Sinestesia' aplicada al arte?",
    correcta: "La capacidad de una imagen de evocar sensaciones de otros sentidos (ej. colores que parecen 'fríos' o 'sonoros')",
    incorrectas: [
      "Un movimiento artístico que solo utilizaba el color negro",
      "La pérdida de visión debido al uso excesivo de pantallas"
    ]
  },
  {
    enunciado: "¿Qué es la 'Fóvea' y cuál es su importancia perceptiva?",
    correcta: "Es la zona de la retina con mayor densidad de conos, responsable de la visión central de alta resolución y del color",
    incorrectas: [
      "El punto ciego del ojo por donde sale el nervio óptico",
      "Una membrana transparente que protege la parte frontal del ojo"
    ]
  },
  {
    enunciado: "¿Qué es la 'Persistencia Retiniana'?",
    correcta: "La capacidad de la retina de mantener una imagen durante una fracción de segundo, permitiendo la ilusión de movimiento",
    incorrectas: [
      "El empeño de un dibujante en terminar una obra difícil",
      "La dificultad de ver los colores después de mirar al sol"
    ]
  },
  {
    enunciado: "En el análisis de la imagen, ¿qué es la 'Anclaje'?",
    correcta: "La función del texto que acompaña a una imagen para fijar su significado y evitar interpretaciones erróneas",
    incorrectas: [
      "La base de metal que sujeta los caballetes al suelo",
      "La primera línea que se dibuja para situar el horizonte"
    ]
  },
  {
    enunciado: "¿Qué es la 'Tensión Visual' por deformación?",
    correcta: "Fuerza visual que surge cuando una forma se aleja de su estado regular o esperado (ej. un círculo convertido en elipse)",
    incorrectas: [
      "La presión que ejerce el marco sobre el lienzo si está muy apretado",
      "El estrés que siente el espectador ante una obra muy grande"
    ]
  },
  {
    enunciado: "¿Qué es un 'Percepto'?",
    correcta: "La entidad mental construida por el cerebro como resultado final del proceso de percepción de un objeto",
    incorrectas: [
      "Un estilo de dibujo técnico que utiliza reglas y escuadras",
      "La unidad mínima de medida en las pantallas digitales"
    ]
  },
  {
    enunciado: "¿Qué es la 'Ley de Simetría' en la Gestalt?",
    correcta: "Los elementos simétricos son percibidos como un solo conjunto, incluso a pesar de la distancia",
    incorrectas: [
      "La obligación de que todos los edificios tengan dos ventanas iguales",
      "La técnica de doblar un papel con pintura fresca para crear manchas iguales"
    ]
  },
  {
    enunciado: "¿Qué describe la 'Ley de la Experiencia'?",
    correcta: "Nuestra tendencia a interpretar estímulos ambiguos según las formas que ya conocemos y hemos visto antes",
    incorrectas: [
      "Que los profesores viejos dibujan mejor que los jóvenes",
      "La suma de todos los cuadros que ha pintado un artista en su vida"
    ]
  },
  {
    enunciado: "¿Qué es el 'Fondo' en términos de percepción?",
    correcta: "La parte del campo visual que parece continuar por detrás de la figura y que tiene un carácter menos estructurado",
    incorrectas: [
      "La parte de atrás de una hoja de papel",
      "El color más oscuro de toda la composición"
    ]
  },
  {
    enunciado: "¿Qué es la 'Agudeza Visual'?",
    correcta: "La capacidad del sistema visual para distinguir detalles finos y formas pequeñas a una distancia determinada",
    incorrectas: [
      "La rapidez con la que un alumno termina sus ejercicios",
      "La cantidad de luz que puede soportar el ojo sin cerrarse"
    ]
  },
  {
    enunciado: "¿Qué es la 'Proporción' en psicología de la imagen?",
    correcta: "La relación de medidas entre las partes de una forma que determina su equilibrio y su carácter perceptivo",
    incorrectas: [
      "El tamaño total de la obra medido en centímetros",
      "La cantidad de agua que se añade a la pintura acrílica"
    ]
  }
];