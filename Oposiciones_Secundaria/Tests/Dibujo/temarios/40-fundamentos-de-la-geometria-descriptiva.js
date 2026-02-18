// 40-fundamentos-de-la-geometria-descriptiva.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué es la geometría descriptiva?",
    correcta: "La disciplina que permite representar objetos tridimensionales en el plano con rigor geométrico",
    incorrectas: [
      "Un estilo artístico basado en figuras geométricas",
      "Un sistema de medición de longitudes en el espacio"
    ]
  },
  {
    enunciado: "¿Cuál es el objetivo principal de la geometría descriptiva?",
    correcta: "Resolver problemas espaciales mediante proyecciones en el plano",
    incorrectas: [
      "Decorar superficies con formas geométricas",
      "Calcular únicamente áreas y volúmenes"
    ]
  },
  {
    enunciado: "¿Qué se entiende por proyección?",
    correcta: "La representación de un objeto sobre un plano mediante líneas proyectantes",
    incorrectas: [
      "La rotación de un objeto en el espacio",
      "La deformación artística de una figura"
    ]
  },
  {
    enunciado: "¿Qué tipo de proyección utiliza la geometría descriptiva clásica?",
    correcta: "La proyección ortogonal",
    incorrectas: [
      "La proyección cónica artística",
      "La proyección libre a mano alzada"
    ]
  },
  {
    enunciado: "¿Qué es un plano de proyección?",
    correcta: "Una superficie imaginaria sobre la que se representa el objeto",
    incorrectas: [
      "Una figura geométrica plana dibujada en papel",
      "Un plano inclinado de un edificio"
    ]
  },
  {
    enunciado: "¿Cuáles son los planos fundamentales de proyección?",
    correcta: "El plano horizontal y el plano vertical",
    incorrectas: [
      "El plano diagonal y el plano oblicuo",
      "El plano artístico y el plano técnico"
    ]
  },
  {
    enunciado: "¿Qué es la línea de tierra?",
    correcta: "La intersección entre el plano horizontal y el plano vertical",
    incorrectas: [
      "Una línea de referencia decorativa",
      "El borde inferior del papel"
    ]
  },
  {
    enunciado: "¿Qué elemento geométrico se representa con dos proyecciones básicas?",
    correcta: "El punto",
    incorrectas: [
      "El volumen",
      "La superficie curva"
    ]
  },
  {
    enunciado: "¿Qué representan las proyecciones de un punto?",
    correcta: "Su posición respecto a los planos de proyección",
    incorrectas: [
      "Su tamaño real",
      "Su color y textura"
    ]
  },
  {
    enunciado: "¿Qué es una recta en geometría descriptiva?",
    correcta: "El conjunto de puntos alineados en el espacio",
    incorrectas: [
      "Una figura plana cerrada",
      "Una superficie limitada"
    ]
  },
  {
    enunciado: "¿Cuándo una recta es paralela a un plano de proyección?",
    correcta: "Cuando su proyección aparece en verdadera magnitud",
    incorrectas: [
      "Cuando siempre se ve como un punto",
      "Cuando desaparece en la representación"
    ]
  },
  {
    enunciado: "¿Qué es un plano en geometría descriptiva?",
    correcta: "Una superficie plana infinita definida por puntos o rectas",
    incorrectas: [
      "Un sólido geométrico",
      "Una figura decorativa bidimensional"
    ]
  },
  {
    enunciado: "¿Cómo puede definirse un plano?",
    correcta: "Por tres puntos no alineados o por dos rectas que se cortan",
    incorrectas: [
      "Por un solo punto",
      "Por una recta aislada"
    ]
  },
  {
    enunciado: "¿Qué se entiende por verdadera magnitud?",
    correcta: "La medida real de un elemento cuando es paralelo al plano de proyección",
    incorrectas: [
      "La medida aumentada para facilitar el dibujo",
      "La medida aproximada a ojo"
    ]
  },
  {
    enunciado: "¿Por qué es importante la verdadera magnitud?",
    correcta: "Porque permite medir con exactitud longitudes y ángulos",
    incorrectas: [
      "Porque mejora el aspecto estético del dibujo",
      "Porque elimina la necesidad de proyecciones"
    ]
  },
  {
    enunciado: "¿Qué es un problema típico de la geometría descriptiva?",
    correcta: "Determinar intersecciones, distancias o ángulos en el espacio",
    incorrectas: [
      "Diseñar carteles publicitarios",
      "Elegir colores y texturas"
    ]
  },
  {
    enunciado: "¿Qué es la intersección de dos rectas?",
    correcta: "El punto común que comparten si se cortan",
    incorrectas: [
      "La distancia entre ambas",
      "La suma de sus longitudes"
    ]
  },
  {
    enunciado: "¿Qué es la intersección de una recta y un plano?",
    correcta: "El punto donde la recta corta al plano",
    incorrectas: [
      "Una superficie común",
      "Un volumen compartido"
    ]
  },
  {
    enunciado: "¿Qué se entiende por abatimiento?",
    correcta: "El giro de un plano para verlo en verdadera magnitud",
    incorrectas: [
      "La eliminación de un plano",
      "La deformación del objeto"
    ]
  },
  {
    enunciado: "¿Para qué se usa el abatimiento?",
    correcta: "Para medir ángulos y distancias reales en un plano",
    incorrectas: [
      "Para decorar el dibujo",
      "Para cambiar la escala del objeto"
    ]
  },
  {
    enunciado: "¿Qué es un plano auxiliar?",
    correcta: "Un plano adicional usado para resolver un problema geométrico",
    incorrectas: [
      "Un plano decorativo sin función técnica",
      "Un plano que sustituye a los fundamentales"
    ]
  },
  {
    enunciado: "¿Qué es una vista en geometría descriptiva?",
    correcta: "Cada una de las proyecciones del objeto sobre un plano",
    incorrectas: [
      "Una perspectiva artística",
      "Una fotografía del objeto"
    ]
  },
  {
    enunciado: "¿Cuántas vistas principales se utilizan habitualmente?",
    correcta: "Dos, sobre el plano horizontal y el vertical",
    incorrectas: [
      "Una única vista",
      "Cinco vistas obligatorias"
    ]
  },
  {
    enunciado: "¿Qué ventaja tiene el uso de vistas?",
    correcta: "Permite comprender la forma y posición del objeto",
    incorrectas: [
      "Aumenta el tamaño del dibujo",
      "Reduce la precisión geométrica"
    ]
  },
  {
    enunciado: "¿Qué es la geometría descriptiva dentro del dibujo técnico?",
    correcta: "La base para representar y analizar el espacio con precisión",
    incorrectas: [
      "Un complemento artístico sin rigor",
      "Una técnica exclusivamente informática"
    ]
  },
  {
    enunciado: "¿Qué relación existe entre geometría descriptiva y dibujo técnico?",
    correcta: "La geometría descriptiva proporciona los fundamentos teóricos del dibujo técnico",
    incorrectas: [
      "No existe relación entre ambas",
      "El dibujo técnico sustituye a la geometría descriptiva"
    ]
  },
  {
    enunciado: "¿Qué tipo de razonamiento exige la geometría descriptiva?",
    correcta: "Razonamiento espacial y lógico",
    incorrectas: [
      "Memorización sin comprensión",
      "Creatividad expresiva exclusivamente"
    ]
  },
  {
    enunciado: "¿Qué se desarrolla especialmente al estudiar geometría descriptiva?",
    correcta: "La capacidad de visualizar objetos en el espacio",
    incorrectas: [
      "La habilidad para mezclar colores",
      "La improvisación gráfica"
    ]
  },
  {
    enunciado: "¿Qué papel tiene la precisión en esta disciplina?",
    correcta: "Es fundamental para obtener soluciones correctas",
    incorrectas: [
      "Es secundaria frente a la expresividad",
      "No influye en el resultado"
    ]
  },
  {
    enunciado: "¿Qué ocurre si una proyección está mal trazada?",
    correcta: "El problema geométrico se resuelve de forma incorrecta",
    incorrectas: [
      "No afecta al resultado final",
      "Solo empeora el aspecto visual"
    ]
  },
  {
    enunciado: "¿Qué instrumento es básico en geometría descriptiva tradicional?",
    correcta: "La regla y el compás",
    incorrectas: [
      "El pincel y la espátula",
      "La cámara fotográfica"
    ]
  },
  {
    enunciado: "¿Puede aplicarse la geometría descriptiva con herramientas digitales?",
    correcta: "Sí, manteniendo los mismos principios geométricos",
    incorrectas: [
      "No, solo es válida a mano",
      "Solo en programas artísticos"
    ]
  },
  {
    enunciado: "¿Qué tipo de errores son más comunes al iniciarse en la materia?",
    correcta: "Errores de interpretación espacial y de proyección",
    incorrectas: [
      "Errores de color",
      "Errores de composición artística"
    ]
  },
  {
    enunciado: "¿Qué diferencia principal hay entre dibujo artístico y geometría descriptiva?",
    correcta: "La geometría descriptiva busca exactitud y el dibujo artístico expresividad",
    incorrectas: [
      "Ambos persiguen exactamente el mismo objetivo",
      "La geometría descriptiva no tiene normas"
    ]
  },
  {
    enunciado: "¿Qué se entiende por sistema de representación?",
    correcta: "El conjunto de normas para proyectar el espacio en el plano",
    incorrectas: [
      "Un estilo personal de dibujo",
      "Un programa informático concreto"
    ]
  },
  {
    enunciado: "¿Por qué la geometría descriptiva es fundamental en arquitectura e ingeniería?",
    correcta: "Porque permite representar y analizar correctamente formas espaciales",
    incorrectas: [
      "Porque sustituye al cálculo",
      "Porque elimina la necesidad de planos"
    ]
  },
  {
    enunciado: "¿Qué se aprende primero en fundamentos de geometría descriptiva?",
    correcta: "La representación del punto, la recta y el plano",
    incorrectas: [
      "El diseño de piezas complejas",
      "La animación tridimensional"
    ]
  },
  {
    enunciado: "¿Qué aporta la geometría descriptiva a la formación del alumnado?",
    correcta: "Rigor, método y comprensión del espacio",
    incorrectas: [
      "Solo dificultad innecesaria",
      "Únicamente destreza manual"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a un buen ejercicio de geometría descriptiva?",
    correcta: "Claridad en el planteamiento y coherencia en las proyecciones",
    incorrectas: [
      "Uso de muchos colores",
      "Complejidad decorativa"
    ]
  }
];
