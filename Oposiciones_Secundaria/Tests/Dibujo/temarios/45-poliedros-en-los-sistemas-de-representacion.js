var PREGUNTAS = [
  {
    enunciado: "¿Qué es un poliedro regular?",
    correcta: "Un poliedro convexo cuyas caras son polígonos regulares iguales y en cuyos vértices concurre el mismo número de caras",
    incorrectas: [
      "Un cuerpo redondo limitado por superficies curvas",
      "Cualquier poliedro con caras planas"
    ]
  },
  {
    enunciado: "¿Cuántos poliedros regulares convexos existen?",
    correcta: "Cinco: tetraedro, hexaedro (cubo), octaedro, dodecaedro e icosaedro",
    incorrectas: [
      "Infinitos",
      "Tres"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al tetraedro regular?",
    correcta: "Tiene 4 caras triangulares equiláteras, 4 vértices y 6 aristas",
    incorrectas: [
      "Tiene 4 caras cuadradas",
      "Es una pirámide de base cuadrada"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al hexaedro regular o cubo?",
    correcta: "Tiene 6 caras cuadradas, 8 vértices y 12 aristas",
    incorrectas: [
      "Tiene 8 caras triangulares",
      "Tiene 12 caras pentagonales"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al octaedro regular?",
    correcta: "Tiene 8 caras triangulares equiláteras, 6 vértices y 12 aristas; es dual del cubo",
    incorrectas: [
      "Tiene 6 caras cuadradas",
      "Es dual del tetraedro"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al dodecaedro regular?",
    correcta: "Tiene 12 caras pentagonales regulares, 20 vértices y 30 aristas",
    incorrectas: [
      "Tiene 20 caras triangulares",
      "Tiene 10 caras regulares"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al icosaedro regular?",
    correcta: "Tiene 20 caras triangulares equiláteras, 12 vértices y 30 aristas; es dual del dodecaedro",
    incorrectas: [
      "Tiene 12 caras pentagonales",
      "Tiene 20 caras cuadradas"
    ]
  },
  {
    enunciado: "¿Qué establece la fórmula de Euler para poliedros convexos?",
    correcta: "La relación C + V = A + 2, donde C son caras, V vértices y A aristas",
    incorrectas: [
      "C + A = V + 2",
      "C = V + A"
    ]
  },
  {
    enunciado: "¿Qué se entiende por poliedros duales?",
    correcta: "Dos poliedros en los que los vértices de uno se corresponden con los centros de las caras del otro",
    incorrectas: [
      "Dos poliedros iguales superpuestos",
      "Un poliedro y su desarrollo"
    ]
  },
  {
    enunciado: "¿Qué es un prisma?",
    correcta: "Un poliedro con dos caras paralelas e iguales llamadas bases y caras laterales que son paralelogramos",
    incorrectas: [
      "Un poliedro regular",
      "Un sólido de revolución"
    ]
  },
  {
    enunciado: "¿Qué es un antiprisma?",
    correcta: "Un poliedro con dos bases paralelas iguales y giradas entre sí, y caras laterales triangulares",
    incorrectas: [
      "Un prisma invertido",
      "Una pirámide truncada"
    ]
  },
  {
    enunciado: "¿Qué son los poliedros arquimedianos?",
    correcta: "Poliedros convexos con caras regulares de más de un tipo y vértices uniformes",
    incorrectas: [
      "Poliedros irregulares sin simetría",
      "Poliedros con caras curvas"
    ]
  },
  {
    enunciado: "¿Qué son los sólidos de Johnson?",
    correcta: "Poliedros convexos con caras regulares que no presentan uniformidad en los vértices",
    incorrectas: [
      "Poliedros regulares",
      "Prismas infinitos"
    ]
  },
  {
    enunciado: "¿Qué es un poliedro cóncavo?",
    correcta: "Un poliedro que presenta al menos un ángulo diedro entrante, de modo que alguna prolongación de sus caras corta al sólido",
    incorrectas: [
      "Un poliedro hueco",
      "Un poliedro sin caras"
    ]
  },
  {
    enunciado: "¿Qué establece el teorema del defecto angular de Descartes?",
    correcta: "Que la suma de los defectos angulares de un poliedro convexo es 720°",
    incorrectas: [
      "Que la suma de ángulos es 360°",
      "Que depende del número de caras"
    ]
  },
  {
    enunciado: "¿Qué es la diagonal principal de un cubo?",
    correcta: "El segmento que une dos vértices opuestos no pertenecientes a la misma cara y mide √3 veces la arista",
    incorrectas: [
      "La diagonal de una cara",
      "La altura del cubo"
    ]
  },
  {
    enunciado: "¿Cuántas diagonales principales tiene un cubo?",
    correcta: "Cuatro, que concurren en el centro del cubo",
    incorrectas: [
      "Dos",
      "Seis"
    ]
  },
  {
    enunciado: "¿Qué es el desarrollo de un poliedro?",
    correcta: "La disposición plana de todas sus caras unidas por las aristas, sin superposición",
    incorrectas: [
      "La proyección ortogonal",
      "Una sección del sólido"
    ]
  },
  {
    enunciado: "¿Cuántos desarrollos distintos tiene el cubo?",
    correcta: "Once desarrollos planos diferentes",
    incorrectas: [
      "Seis",
      "Infinitos"
    ]
  },
  {
    enunciado: "¿Qué se entiende por sección de un poliedro?",
    correcta: "La figura plana resultante de cortar el poliedro con un plano",
    incorrectas: [
      "La proyección del poliedro",
      "El desarrollo de sus caras"
    ]
  },
  {
    enunciado: "¿Cuál es el número máximo de lados de una sección plana de un cubo?",
    correcta: "Seis",
    incorrectas: [
      "Cuatro",
      "Ocho"
    ]
  },
  {
    enunciado: "¿Qué es la esfera circunscrita a un poliedro?",
    correcta: "La esfera que pasa por todos los vértices del poliedro",
    incorrectas: [
      "La esfera tangente a las caras",
      "La esfera interior máxima"
    ]
  },
  {
    enunciado: "¿Qué es la esfera inscrita en un poliedro?",
    correcta: "La esfera tangente a todas las caras del poliedro",
    incorrectas: [
      "La esfera que pasa por los vértices",
      "La esfera tangente a las aristas"
    ]
  },
  {
    enunciado: "¿Qué es un zonoedro?",
    correcta: "Un poliedro convexo cuyas caras son paralelogramos o polígonos con simetría central",
    incorrectas: [
      "Un poliedro irregular",
      "Un sólido de revolución"
    ]
  },
  {
    enunciado: "¿Qué es el cuboctaedro?",
    correcta: "Un poliedro arquimediano obtenido a partir del cubo u octaedro mediante truncamiento",
    incorrectas: [
      "La unión de un cubo y un octaedro",
      "Un poliedro regular"
    ]
  },
  {
    enunciado: "¿Qué sólido representa geométricamente un balón de fútbol?",
    correcta: "El icosaedro truncado, formado por pentágonos y hexágonos",
    incorrectas: [
      "El dodecaedro regular",
      "Una esfera perfecta"
    ]
  },
  {
    enunciado: "¿Cómo se representan las caras ocultas de un poliedro en dibujo técnico?",
    correcta: "Mediante línea discontinua o suprimiéndolas según el sistema de representación",
    incorrectas: [
      "Pintándolas de negro",
      "Dibujándolas más gruesas"
    ]
  },
  {
    enunciado: "¿Qué se entiende por un poliedro apoyado en una cara?",
    correcta: "Un poliedro situado de modo que una de sus caras coincide con el plano horizontal",
    incorrectas: [
      "Un poliedro sin base",
      "Un poliedro suspendido"
    ]
  },
  {
    enunciado: "¿Qué se entiende por un poliedro apoyado en una arista?",
    correcta: "Un poliedro girado hasta que una de sus aristas coincide con el plano horizontal",
    incorrectas: [
      "Un poliedro deformado",
      "Un poliedro sin aristas"
    ]
  },
  {
    enunciado: "¿Qué se entiende por un poliedro apoyado en un vértice?",
    correcta: "Un poliedro colocado de modo que uno de sus vértices coincide con el plano horizontal",
    incorrectas: [
      "Un poliedro truncado",
      "Un poliedro irregular"
    ]
  }
];
