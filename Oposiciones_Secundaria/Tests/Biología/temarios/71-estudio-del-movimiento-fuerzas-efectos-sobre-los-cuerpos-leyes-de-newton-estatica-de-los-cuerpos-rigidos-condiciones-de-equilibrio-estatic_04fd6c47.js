// temarios/71-estudio-del-movimiento-fuerzas-efectos-leyes-de-newton-estatica-cuerpos-rigidos-condiciones-de-equilibrio-estatica-de-fluidos.js
// 40 preguntas tipo test (A/B/C) para el Tema 71.
// Formato compatible con 0-Plantilla-temario.js: var PREGUNTAS = [{ enunciado, correcta, incorrectas:[..] }, ...]
var PREGUNTAS = [
  {
    enunciado: "¿Cuál es la diferencia entre magnitud escalar y vectorial?",
    correcta: "La escalar se describe con un número y unidad; la vectorial además con dirección y sentido",
    incorrectas: [
      "La escalar tiene dirección y la vectorial no",
      "Ambas se describen solo con unidades sin número"
    ]
  },
  {
    enunciado: "En MRU, ¿cuál es la ecuación de posición?",
    correcta: "x(t) = x0 + v·t",
    incorrectas: [
      "x(t) = x0 + 1/2 a t^2",
      "x(t) = x0 + v0 t + 1/2 a t^2"
    ]
  },
  {
    enunciado: "En MRUA, la relación velocidad–tiempo correcta es:",
    correcta: "v = v0 + a·t",
    incorrectas: [
      "v = v0 + 1/2 a·t^2",
      "v = a·t^2"
    ]
  },
  {
    enunciado: "La aceleración instantánea se define como:",
    correcta: "La derivada temporal de la velocidad",
    incorrectas: [
      "La pendiente de la gráfica x–t",
      "La razón entre espacio y tiempo promedios"
    ]
  },
  {
    enunciado: "En movimiento circular uniforme, la aceleración centrípeta es:",
    correcta: "a_c = v^2 / R",
    incorrectas: [
      "a_c = v / R",
      "a_c = R / v^2"
    ]
  },
  {
    enunciado: "En el tiro parabólico sin rozamiento, ¿qué afirmación es correcta?",
    correcta: "La aceleración horizontal es cero y la vertical es constante y hacia abajo",
    incorrectas: [
      "Las aceleraciones horizontal y vertical son nulas",
      "La aceleración total es nula en el punto más alto"
    ]
  },
  {
    enunciado: "Un diagrama de cuerpo libre (DCL) representa:",
    correcta: "Todas las fuerzas que actúan sobre el cuerpo aislado",
    incorrectas: [
      "Las fuerzas que el cuerpo ejerce sobre otros",
      "Solo el peso y la normal"
    ]
  },
  {
    enunciado: "La 1ª ley de Newton afirma que:",
    correcta: "Si la resultante de fuerzas es cero, el cuerpo permanece en reposo o MRU",
    incorrectas: [
      "Toda fuerza produce siempre aceleración nula",
      "La velocidad es siempre constante bajo cualquier fuerza"
    ]
  },
  {
    enunciado: "La expresión de la 2ª ley de Newton es:",
    correcta: "ΣF = m·a",
    incorrectas: [
      "ΣF = m·v",
      "ΣF = m·g siempre"
    ]
  },
  {
    enunciado: "La 3ª ley de Newton establece que:",
    correcta: "A toda acción corresponde una reacción de igual módulo y dirección, sentido contrario",
    incorrectas: [
      "Acción y reacción actúan sobre el mismo cuerpo",
      "La reacción solo aparece si hay rozamiento"
    ]
  },
  {
    enunciado: "El peso de un cuerpo cercano a la superficie terrestre es:",
    correcta: "W = m·g",
    incorrectas: [
      "W = m/g",
      "W = g/m"
    ]
  },
  {
    enunciado: "En un plano horizontal sin otras fuerzas verticales, la fuerza normal vale:",
    correcta: "N = m·g",
    incorrectas: [
      "N = 0",
      "N = m/g"
    ]
  },
  {
    enunciado: "El rozamiento cinético se modela como:",
    correcta: "F_r = μ_k · N",
    incorrectas: [
      "F_r = μ_k / N",
      "F_r = N / μ_k"
    ]
  },
  {
    enunciado: "Una fuerza elástica ideal cumple:",
    correcta: "F = −k·x",
    incorrectas: [
      "F = k/x",
      "F = −k·x^2"
    ]
  },
  {
    enunciado: "El momento lineal o cantidad de movimiento se define como:",
    correcta: "p = m·v",
    incorrectas: [
      "p = m·a",
      "p = F·t/m"
    ]
  },
  {
    enunciado: "El impulso mecánico sobre un cuerpo es igual a:",
    correcta: "La variación de su momento lineal (J = Δp)",
    incorrectas: [
      "Su energía cinética final",
      "El producto masa por distancia"
    ]
  },
  {
    enunciado: "El trabajo neto realizado sobre un cuerpo es igual a:",
    correcta: "La variación de su energía cinética",
    incorrectas: [
      "La variación de su momento angular",
      "La suma de sus energías potenciales"
    ]
  },
  {
    enunciado: "Condiciones de equilibrio de un cuerpo rígido en el plano:",
    correcta: "ΣF = 0 y ΣM = 0",
    incorrectas: [
      "ΣF = 0 solamente",
      "ΣM = 0 solamente"
    ]
  },
  {
    enunciado: "El momento (torque) respecto a un punto O es:",
    correcta: "M_O = r × F (o M = F·d en módulo)",
    incorrectas: [
      "M_O = F / r",
      "M_O = r + F"
    ]
  },
  {
    enunciado: "Un equilibrio estable se caracteriza por:",
    correcta: "Tras una pequeña perturbación, el sistema retorna a la posición",
    incorrectas: [
      "Tras la perturbación, se aleja cada vez más",
      "Tras la perturbación, queda en cualquier posición"
    ]
  },
  {
    enunciado: "El centro de masas de un sistema es:",
    correcta: "El punto donde puede considerarse aplicada la resultante de las fuerzas de gravedad",
    incorrectas: [
      "Siempre coincide con el centro geométrico sin excepción",
      "El punto de menor masa del cuerpo"
    ]
  },
  {
    enunciado: "La presión se define como:",
    correcta: "P = F / S",
    incorrectas: [
      "P = F · S",
      "P = S / F"
    ]
  },
  {
    enunciado: "En un fluido incompresible en reposo, la variación de presión con la profundidad es:",
    correcta: "P = P0 + ρ·g·h",
    incorrectas: [
      "P = P0 − ρ·g·h",
      "P = ρ/h"
    ]
  },
  {
    enunciado: "El principio de Pascal indica que:",
    correcta: "Una variación de presión aplicada a un fluido incompresible se transmite íntegramente",
    incorrectas: [
      "La presión se reduce con la distancia al punto de aplicación",
      "Solo se transmite en la dirección de la fuerza"
    ]
  },
  {
    enunciado: "El empuje de Arquímedes sobre un cuerpo sumergido es igual a:",
    correcta: "El peso del fluido desalojado",
    incorrectas: [
      "El volumen del cuerpo multiplicado por g",
      "El peso del cuerpo menos su masa"
    ]
  },
  {
    enunciado: "Condición de flotación de un cuerpo en un fluido:",
    correcta: "Empuje = Peso en equilibrio",
    incorrectas: [
      "Empuje > Peso siempre",
      "Empuje < Peso siempre"
    ]
  },
  {
    enunciado: "La unidad SI de presión es el pascal. 1 Pa equivale a:",
    correcta: "1 N/m²",
    incorrectas: [
      "1 N·m",
      "1 m/N"
    ]
  },
  {
    enunciado: "Un barómetro sirve para medir:",
    correcta: "La presión atmosférica",
    incorrectas: [
      "La densidad del fluido",
      "La velocidad del viento exclusivamente"
    ]
  },
  {
    enunciado: "La paradoja hidrostática señala que la fuerza sobre el fondo del recipiente depende de:",
    correcta: "La altura del fluido, el área de la base y la densidad, no del volumen total",
    incorrectas: [
      "Solo del volumen total contenido",
      "Exclusivamente de la forma de las paredes"
    ]
  },
  {
    enunciado: "En un mismo fluido en reposo, al mismo nivel horizontal:",
    correcta: "La presión es la misma",
    incorrectas: [
      "La presión es mayor cerca de las paredes",
      "La presión depende de la forma del recipiente en ese nivel"
    ]
  },
  {
    enunciado: "En líquidos, al aumentar la temperatura la viscosidad suele:",
    correcta: "Disminuir",
    incorrectas: [
      "Aumentar siempre",
      "Permanecer estrictamente constante"
    ]
  },
  {
    enunciado: "En equilibrio de una palanca, se cumple:",
    correcta: "F1·d1 = F2·d2 respecto al punto de apoyo",
    incorrectas: [
      "F1 = F2 independientemente de d",
      "d1 = d2 siempre que F1 ≠ F2"
    ]
  },
  {
    enunciado: "Al calcular momentos, elegir como origen un punto por el que pasa una fuerza:",
    correcta: "Anula el momento de esa fuerza y simplifica el equilibrio",
    incorrectas: [
      "Duplica el momento de esa fuerza",
      "No tiene ningún efecto algebraico"
    ]
  },
  {
    enunciado: "En una cuerda ideal (sin masa) y polea sin rozamiento, la tensión en ambos lados es:",
    correcta: "La misma",
    incorrectas: [
      "Mayor en el lado que sube",
      "Menor en el lado que baja"
    ]
  },
  {
    enunciado: "En general, el coeficiente de rozamiento estático es:",
    correcta: "Mayor que el cinético para el mismo par de superficies",
    incorrectas: [
      "Menor que el cinético",
      "Igual al cinético en todos los casos"
    ]
  },
  {
    enunciado: "Para evitar la rotación de un cuerpo además de la traslación, debe cumplirse:",
    correcta: "ΣM = 0 además de ΣF = 0",
    incorrectas: [
      "Solo ΣF = 0",
      "ΣM = 0 implica automáticamente ΣF = 0"
    ]
  },
  {
    enunciado: "En el punto más alto de un tiro parabólico ideal, ¿qué sucede?",
    correcta: "La velocidad vertical es cero y la horizontal no",
    incorrectas: [
      "La velocidad total es cero",
      "La aceleración es nula"
    ]
  },
  {
    enunciado: "En un plano inclinado de ángulo θ, la componente del peso paralela al plano es:",
    correcta: "m·g·senθ",
    incorrectas: [
      "m·g·cosθ",
      "m·g/ tanθ"
    ]
  },
  {
    enunciado: "Los airbags reducen daños en choques porque:",
    correcta: "Aumentan el tiempo de colisión y reducen la fuerza media para un mismo impulso",
    incorrectas: [
      "Disminuyen el cambio de momento del ocupante a cero",
      "Aumentan la fuerza media para frenar antes"
    ]
  },
  {
    enunciado: "La densidad de un material se define como:",
    correcta: "ρ = m / V",
    incorrectas: [
      "ρ = V / m",
      "ρ = m · V"
    ]
  },
  {
    enunciado: "La presión manométrica (gauge) se define como:",
    correcta: "P_g = P − P_atm",
    incorrectas: [
      "P_g = P_atm − P",
      "P_g = P · P_atm"
    ]
  }
];
