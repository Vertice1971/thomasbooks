// temarios/05-evolucion-historica-de-la-relacion-fuerza-movimiento-leyes-de-newton-y-conservacion-del-momento-lineal.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué sostenía el modelo aristotélico clásico sobre la relación fuerza–movimiento?",
    correcta: "Que era necesaria una fuerza continua para mantener el movimiento",
    incorrectas: [
      "Que la ausencia de fuerza implica movimiento acelerado",
      "Que toda fuerza genera siempre una trayectoria circular"
    ]
  },
  {
    enunciado: "¿Qué aportación clave introduce Galileo frente a Aristóteles?",
    correcta: "La inercia: en ausencia de fuerzas, la velocidad se mantiene constante",
    incorrectas: [
      "La idea de que el reposo es el estado natural en cualquier caso",
      "La noción de que la aceleración depende de la masa únicamente"
    ]
  },
  {
    enunciado: "¿Qué representa la síntesis de Newton respecto a fuerza y movimiento?",
    correcta: "Un conjunto de leyes que relacionan cuantitativamente fuerza, masa y aceleración",
    incorrectas: [
      "Un compendio de observaciones cualitativas sin formulación matemática",
      "Una explicación exclusivamente astronómica sin aplicación terrestre"
    ]
  },
  {
    enunciado: "La primera ley de Newton afirma que...",
    correcta: "Un cuerpo mantiene su estado de reposo o MRU si la fuerza neta es cero",
    incorrectas: [
      "Todo cuerpo tiende a detenerse aunque no actúen fuerzas",
      "La aceleración es proporcional a la masa si no hay fuerzas"
    ]
  },
  {
    enunciado: "La segunda ley de Newton en su forma más general puede escribirse como...",
    correcta: "F_ext = dp/dt",
    incorrectas: [
      "F_ext = d²p/dt²",
      "F_ext = m/v"
    ]
  },
  {
    enunciado: "Para masa constante, la relación entre fuerza y aceleración es...",
    correcta: "F = m · a",
    incorrectas: [
      "F = a/m",
      "F = m/a"
    ]
  },
  {
    enunciado: "La tercera ley de Newton (acción y reacción) establece que...",
    correcta: "Para cada fuerza existe una fuerza opuesta e igual sobre el otro cuerpo",
    incorrectas: [
      "Las fuerzas de acción y reacción actúan sobre el mismo cuerpo",
      "Solo se cumple en ausencia de rozamiento"
    ]
  },
  {
    enunciado: "El momento lineal p de una partícula se define como...",
    correcta: "p = m · v",
    incorrectas: [
      "p = m · a",
      "p = F · t siempre"
    ]
  },
  {
    enunciado: "La unidad SI del momento lineal es...",
    correcta: "kg·m/s",
    incorrectas: [
      "N·m",
      "kg·m²/s²"
    ]
  },
  {
    enunciado: "El impulso J de una fuerza en un intervalo es...",
    correcta: "J = ∫ F dt y equivale a la variación de momento Δp",
    incorrectas: [
      "J = F/Δt y equivale a la energía transferida",
      "J = m · a² y equivale a la potencia media"
    ]
  },
  {
    enunciado: "¿Cuándo se conserva el momento lineal total de un sistema?",
    correcta: "Cuando la resultante de fuerzas externas es nula",
    incorrectas: [
      "Cuando las fuerzas internas son mayores que las externas",
      "Solo si el sistema no rota"
    ]
  },
  {
    enunciado: "En una colisión perfectamente elástica en 1D entre dos cuerpos aislados, se conserva...",
    correcta: "El momento lineal total y la energía cinética total",
    incorrectas: [
      "Solo la energía cinética total",
      "Solo el momento lineal del cuerpo más masivo"
    ]
  },
  {
    enunciado: "En una colisión inelástica total (choque pegajoso) se conserva...",
    correcta: "El momento lineal total, pero no la energía cinética total",
    incorrectas: [
      "La energía cinética total, pero no el momento",
      "Ninguna magnitud conservativa"
    ]
  },
  {
    enunciado: "El coeficiente de restitución e en una colisión mide...",
    correcta: "La razón entre la velocidad de separación y la de aproximación",
    incorrectas: [
      "La razón entre las masas de los cuerpos",
      "La razón entre las fuerzas internas y externas"
    ]
  },
  {
    enunciado: "Un diagrama de cuerpo libre sirve para...",
    correcta: "Representar todas las fuerzas que actúan sobre un cuerpo",
    incorrectas: [
      "Mostrar las trayectorias futuras del cuerpo",
      "Calcular directamente la energía potencial sin ecuaciones"
    ]
  },
  {
    enunciado: "En un sistema aislado de dos cuerpos, las fuerzas internas...",
    correcta: "Forman pares acción–reacción y no alteran el momento total del sistema",
    incorrectas: [
      "Siempre cambian el momento total del sistema",
      "Actúan sobre el mismo cuerpo generando aceleraciones opuestas"
    ]
  },
  {
    enunciado: "La condición para aplicar F = m·a en un marco de referencia es que sea...",
    correcta: "Inercial o aproximadamente inercial en la escala del experimento",
    incorrectas: [
      "Cualquiera, porque la ley es independiente del marco",
      "Siempre no inercial, introduciendo fuerzas reales adicionales"
    ]
  },
  {
    enunciado: "La fuerza de rozamiento cinético se suele modelar como...",
    correcta: "F_r = μ_k · N, opuesta al movimiento",
    incorrectas: [
      "F_r = μ_k · v², siempre paralela a la velocidad",
      "F_r = μ_s · N, mayor cuanto menor sea N"
    ]
  },
  {
    enunciado: "Una fuerza elástica ideal cumple la ley de Hooke, que es...",
    correcta: "F = −k · x, dirigida hacia la posición de equilibrio",
    incorrectas: [
      "F = k · v, proporcional a la velocidad",
      "F = −k/x, inversa a la elongación"
    ]
  },
  {
    enunciado: "Para masa variable (cohete ideal sin fuerzas externas), la ecuación de Tsiolkovski relaciona...",
    correcta: "Δv con la velocidad de eyección y el cociente de masas",
    incorrectas: [
      "Δv con el tiempo de combustión únicamente",
      "Δv con la aceleración de la gravedad de forma constante"
    ]
  },
  {
    enunciado: "El centro de masas de un sistema de partículas obedece...",
    correcta: "M · R̈_cm = ΣF_ext",
    incorrectas: [
      "M · R̈_cm = ΣF_int",
      "M · R̈_cm = 0 siempre, sea cual sea el entorno"
    ]
  },
  {
    enunciado: "Si dos patinadores se empujan mutuamente y se separan sobre hielo sin rozamiento, entonces...",
    correcta: "El momento total previo y posterior es el mismo, pero cada uno adquiere momentos opuestos",
    incorrectas: [
      "El de mayor masa adquiere mayor velocidad que el ligero",
      "La energía cinética total permanece necesariamente constante"
    ]
  },
  {
    enunciado: "Una explosión en ausencia de fuerzas externas...",
    correcta: "Conserva el momento total del sistema aunque aumente la energía cinética",
    incorrectas: [
      "Viola la conservación del momento por aparición de fuerzas internas",
      "Conserva la energía cinética y cambia el momento total"
    ]
  },
  {
    enunciado: "En un marco no inercial en rotación aparecen fuerzas aparentes como...",
    correcta: "Centrífuga y de Coriolis",
    incorrectas: [
      "Elástica y normal",
      "Gravitatoria y eléctrica"
    ]
  },
  {
    enunciado: "Acción y reacción según la tercera ley son fuerzas que...",
    correcta: "Actúan sobre cuerpos distintos, son colineales y de igual módulo y sentido opuesto",
    incorrectas: [
      "Actúan sobre el mismo cuerpo y se cancelan siempre",
      "Actúan con retraso temporal por lo que no se equilibran"
    ]
  },
  {
    enunciado: "El peso de un cuerpo es...",
    correcta: "La fuerza gravitatoria ejercida por la Tierra sobre el cuerpo",
    incorrectas: [
      "Una propiedad invariable de la materia independiente del campo",
      "Igual a la normal independientemente de la situación"
    ]
  },
  {
    enunciado: "La normal es una fuerza que...",
    correcta: "Ejercen las superficies restringiendo el movimiento perpendicular a ellas",
    incorrectas: [
      "Siempre es igual al peso sin excepción",
      "Solo aparece cuando el objeto está acelerado"
    ]
  },
  {
    enunciado: "Para dos masas en colisión elástica oblicua, la conservación del momento se aplica...",
    correcta: "Vectorialmente en cada componente cartesiana",
    incorrectas: [
      "Solo en la dirección del choque",
      "Solo en la componente perpendicular a la normal de impacto"
    ]
  },
  {
    enunciado: "Si la fuerza neta sobre una partícula es cero en todo instante, su momento lineal...",
    correcta: "Permanece constante en módulo y dirección",
    incorrectas: [
      "Cambia de módulo pero no de dirección",
      "Cambia de dirección pero no de módulo"
    ]
  },
  {
    enunciado: "El trabajo impulsivo en un choque breve idealmente se aproxima por...",
    correcta: "El impulso J, ya que F es grande y actúa en poco tiempo",
    incorrectas: [
      "La potencia media multiplicada por la aceleración",
      "La energía potencial inmediatamente antes del choque"
    ]
  },
  {
    enunciado: "En un sistema con fuerzas internas disipativas (deformación plástica), durante un choque inelástico...",
    correcta: "Se conserva el momento total pero parte de la E_c se transforma en otras formas de energía",
    incorrectas: [
      "No se conserva ninguna magnitud mecánica",
      "Se incrementa necesariamente la energía cinética total"
    ]
  },
  {
    enunciado: "La formulación F_ext = dp/dt permite tratar correctamente...",
    correcta: "Sistemas de masa variable y colisiones impulsivas",
    incorrectas: [
      "Solo movimientos uniformes sin aceleración",
      "Únicamente fuerzas conservativas"
    ]
  },
  {
    enunciado: "Un ejemplo donde la tercera ley parece “fallar” si no se tiene en cuenta el campo es...",
    correcta: "Interacciones electromagnéticas retardadas si no se incluye el momento del campo",
    incorrectas: [
      "Cualquier fuerza de rozamiento estático",
      "La gravedad newtoniana a bajas velocidades"
    ]
  },
  {
    enunciado: "En un plano inclinado sin rozamiento, la aceleración del bloque de masa m es...",
    correcta: "g · senθ a lo largo del plano",
    incorrectas: [
      "g · cosθ a lo largo del plano",
      "g a lo largo del plano en cualquier ángulo"
    ]
  },
  {
    enunciado: "Para verificar experimentalmente la conservación de momento en una colisión sobre pista de aire se debe...",
    correcta: "Medir momentos antes y después con sensores/fotopuertas e incluir estimación de incertidumbre",
    incorrectas: [
      "Medir solo velocidades después del choque y suponer masas unitarias",
      "Considerar despreciables todas las fuerzas externas sin verificar"
    ]
  },
  {
    enunciado: "Si dos cuerpos interactúan con fuerzas internas que no son colineales, el momento lineal total...",
    correcta: "Sigue conservándose si no hay fuerzas externas",
    incorrectas: [
      "No se conserva al no ser colineales",
      "Se conserva solo si las masas son iguales"
    ]
  },
  {
    enunciado: "La unidad SI de fuerza es el newton, que equivale a...",
    correcta: "kg·m·s⁻²",
    incorrectas: [
      "kg·m²·s⁻²",
      "kg·m·s⁻¹"
    ]
  },
  {
    enunciado: "En una caída con rozamiento cuadrático, el impulso del peso y el del rozamiento durante un intervalo...",
    correcta: "Se suman vectorialmente para determinar Δp",
    incorrectas: [
      "Se anulan siempre porque el objeto cae",
      "Dependen solo de la masa y no del tiempo"
    ]
  },
  {
    enunciado: "El momento total de dos patinadores que se acercan uno al otro con momentos opuestos en un sistema aislado es...",
    correcta: "Cero, y permanece cero durante su interacción",
    incorrectas: [
      "Igual a la suma de sus masas",
      "Indeterminado hasta medir la fuerza entre ellos"
    ]
  },
  {
    enunciado: "Desde la perspectiva histórica, el paso decisivo de Galileo a Newton fue...",
    correcta: "Pasar de la caracterización cinemática a una dinámica cuantitativa que vincula fuerza y aceleración",
    incorrectas: [
      "Sustituir las matemáticas por argumentos meramente cualitativos",
      "Negar la existencia de fuerzas a cualquier escala"
    ]
  }
];
