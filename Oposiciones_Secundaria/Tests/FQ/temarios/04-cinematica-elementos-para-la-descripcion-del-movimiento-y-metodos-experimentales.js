// temarios/04-cinematica-elementos-para-la-descripcion-del-movimiento-y-metodos-experimentales.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué estudia la cinemática dentro de la mecánica clásica?",
    correcta: "La descripción del movimiento mediante posición, velocidad y aceleración sin atender a las causas",
    incorrectas: [
      "Las fuerzas que producen el movimiento y sus interacciones",
      "Las transformaciones termodinámicas de los cuerpos en movimiento"
    ]
  },
  {
    enunciado: "¿En qué se diferencia cinemática de dinámica?",
    correcta: "La cinemática describe cómo se mueve; la dinámica explica por qué se mueve",
    incorrectas: [
      "La cinemática estudia fuerzas y la dinámica, trayectorias",
      "No hay diferencia: son sinónimos en física"
    ]
  },
  {
    enunciado: "¿Qué define completamente un sistema de referencia en cinemática elemental?",
    correcta: "Un origen, unos ejes de coordenadas y un reloj para medir el tiempo",
    incorrectas: [
      "Una balanza, una regla y un termómetro",
      "La elección arbitraria de dos puntos y una brújula"
    ]
  },
  {
    enunciado: "¿Cuál es la representación correcta de la posición de un punto material en 2D?",
    correcta: "Un vector r(t) con componentes, por ejemplo, r(t) = (x(t), y(t))",
    incorrectas: [
      "Un número escalar independiente del tiempo",
      "Un diagrama de fuerzas aplicado al punto"
    ]
  },
  {
    enunciado: "El desplazamiento entre dos instantes es...",
    correcta: "El vector Δr que une la posición inicial con la final",
    incorrectas: [
      "La longitud total del camino recorrido",
      "La rapidez media multiplicada por el tiempo"
    ]
  },
  {
    enunciado: "La distancia recorrida es...",
    correcta: "Una magnitud escalar que mide la longitud del camino seguido",
    incorrectas: [
      "El módulo del vector desplazamiento siempre",
      "La proyección del desplazamiento sobre el eje x"
    ]
  },
  {
    enunciado: "La velocidad instantánea se define como...",
    correcta: "La derivada temporal de la posición: v(t) = dr/dt",
    incorrectas: [
      "El cociente entre distancia total y tiempo total",
      "La segunda derivada de la posición respecto del tiempo"
    ]
  },
  {
    enunciado: "La aceleración instantánea es...",
    correcta: "La derivada temporal de la velocidad: a(t) = dv/dt",
    incorrectas: [
      "El área bajo la curva v–t",
      "La pendiente de la gráfica x–t"
    ]
  },
  {
    enunciado: "En 1D, ¿qué indica la pendiente de la gráfica posición–tiempo x–t?",
    correcta: "La velocidad en cada instante",
    incorrectas: [
      "La aceleración en cada instante",
      "La distancia total recorrida"
    ]
  },
  {
    enunciado: "En 1D, el área bajo la curva velocidad–tiempo v–t entre t1 y t2 representa...",
    correcta: "El desplazamiento en ese intervalo",
    incorrectas: [
      "La aceleración media",
      "La energía cinética del móvil"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al MRU (movimiento rectilíneo uniforme)?",
    correcta: "Tiene velocidad constante y aceleración nula",
    incorrectas: [
      "Tiene aceleración constante y velocidad creciente",
      "Presenta trayectoria circular con rapidez constante"
    ]
  },
  {
    enunciado: "La ecuación horaria del MRU en 1D es...",
    correcta: "x(t) = x₀ + v·t",
    incorrectas: [
      "x(t) = x₀ + v₀ t + 1/2 a t²",
      "x(t) = x₀ + 1/2 a t²"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al MRUA (movimiento rectilíneo uniformemente acelerado)?",
    correcta: "Aceleración constante y ecuación v(t) = v₀ + a t",
    incorrectas: [
      "Velocidad constante y aceleración nula",
      "Aceleración que depende linealmente de la posición"
    ]
  },
  {
    enunciado: "Una relación útil en MRUA es...",
    correcta: "v² = v₀² + 2 a (x − x₀)",
    incorrectas: [
      "v = x₀ + a t²",
      "x = v² / (2a) + t"
    ]
  },
  {
    enunciado: "En caída libre ideal (sin rozamiento), si el eje vertical positivo es hacia arriba:",
    correcta: "La aceleración es constante y vale a = −g",
    incorrectas: [
      "La aceleración es cero",
      "La aceleración cambia de signo cada segundo"
    ]
  },
  {
    enunciado: "En movimiento circular uniforme (MCU), la aceleración es...",
    correcta: "Centrípeta, de módulo a_n = v²/r dirigida hacia el centro",
    incorrectas: [
      "Nula porque la rapidez es constante",
      "Tangencial y de módulo constante"
    ]
  },
  {
    enunciado: "En MCU, el periodo T y la frecuencia f cumplen...",
    correcta: "T = 1/f y ω = 2π f",
    incorrectas: [
      "T = f y ω = π f",
      "T = 2π f y ω = f/2π"
    ]
  },
  {
    enunciado: "En tiro parabólico sin rozamiento, si y₀ = 0, el alcance máximo para una rapidez inicial fija se logra con...",
    correcta: "Un ángulo de 45°",
    incorrectas: [
      "Un ángulo de 30°",
      "Un ángulo de 60° siempre"
    ]
  },
  {
    enunciado: "En tiro parabólico ideal, el movimiento en ejes x e y...",
    correcta: "Es independiente: en x es MRU y en y es MRUA",
    incorrectas: [
      "Está acoplado por la gravedad en ambos ejes",
      "Es MRUA en ambos ejes"
    ]
  },
  {
    enunciado: "La descomposición intrínseca de la aceleración en 2D/3D escribe a como...",
    correcta: "a = a_t t̂ + a_n n̂, con a_t = dv/dt y a_n = v²/R",
    incorrectas: [
      "a = v t̂ + R n̂",
      "a = d²R/dt² sin componentes tangencial/normal"
    ]
  },
  {
    enunciado: "En coordenadas polares (r, θ), la velocidad de un punto en el plano es...",
    correcta: "v = ṙ r̂ + r θ̇ θ̂",
    incorrectas: [
      "v = r θ̇ r̂ únicamente",
      "v = θ̇ θ̂ sin dependencia de r"
    ]
  },
  {
    enunciado: "En coordenadas polares (r, θ), una expresión correcta para la aceleración es...",
    correcta: "a = (r̈ − r θ̇²) r̂ + (r θ̈ + 2 ṙ θ̇) θ̂",
    incorrectas: [
      "a = r̈ r̂ + θ̈ θ̂",
      "a = r θ̇² r̂ − ṙ θ̇ θ̂, sin otros términos"
    ]
  },
  {
    enunciado: "La rapidez es...",
    correcta: "El módulo de la velocidad",
    incorrectas: [
      "La componente de la aceleración sobre la trayectoria",
      "La pendiente de la curva a–t"
    ]
  },
  {
    enunciado: "Si la gráfica v–t de un móvil es una recta con pendiente positiva, entonces...",
    correcta: "El móvil tiene aceleración constante positiva",
    incorrectas: [
      "El móvil tiene velocidad constante",
      "La posición es necesariamente constante"
    ]
  },
  {
    enunciado: "En un x–t curvo con concavidad hacia arriba (x''(t) > 0), esto indica que...",
    correcta: "La aceleración es positiva en ese intervalo",
    incorrectas: [
      "La velocidad es negativa siempre",
      "El desplazamiento es cero"
    ]
  },
  {
    enunciado: "Para estimar g en un experimento de caída libre por ajuste cuadrático de y(t), se suele usar...",
    correcta: "La pendiente del término 1/2 g en el ajuste de y frente a t²",
    incorrectas: [
      "La ordenada en el origen de la gráfica v–t",
      "El área bajo la curva a–t sin calibrar sensores"
    ]
  },
  {
    enunciado: "Un método típico para medir tiempos de paso en MRU/MRUA es...",
    correcta: "Usar fotopuertas (fotogates) con banderolas calibradas",
    incorrectas: [
      "Determinar los tiempos a ojo sin instrumentos",
      "Medir masa con balanza y convertirla en tiempo"
    ]
  },
  {
    enunciado: "En análisis de vídeo, ¿qué paso es esencial para obtener x(t) fiables?",
    correcta: "Calibrar una escala espacial con un patrón de longitud conocido",
    incorrectas: [
      "Aumentar el brillo del vídeo hasta saturar",
      "Suponer que 1 píxel equivale siempre a 1 cm"
    ]
  },
  {
    enunciado: "Al derivar numéricamente posiciones para obtener velocidades a partir de vídeo ruidoso, conviene...",
    correcta: "Aplicar suavizado/filtrado adecuado para reducir el ruido amplificado por la derivada",
    incorrectas: [
      "Derivar dos veces sin filtrado para mejorar precisión",
      "Interpolar con una línea horizontal en todos los puntos"
    ]
  },
  {
    enunciado: "Un error sistemático frecuente en cronometraje manual es...",
    correcta: "El tiempo de reacción al arrancar/detener el cronómetro",
    incorrectas: [
      "La variación aleatoria entre repeticiones independientes",
      "La resolución infinita del cronómetro digital"
    ]
  },
  {
    enunciado: "La composición de velocidades en referencia galileana se expresa como...",
    correcta: "v_AB = v_AO − v_BO",
    incorrectas: [
      "v_AB = v_AO + a_BO",
      "v_AB = a_AO − a_BO"
    ]
  },
  {
    enunciado: "En un experimento de plano inclinado para MRUA, una buena práctica es...",
    correcta: "Medir múltiples pares (t, x), ajustar x = x₀ + v₀ t + 1/2 a t² y estimar a con su incertidumbre",
    incorrectas: [
      "Medir un único tiempo y extrapolar la aceleración",
      "Omitir la calibración de la regla porque es rígida"
    ]
  },
  {
    enunciado: "En MCUA (aceleración angular constante), la aceleración total del punto a distancia r del eje es...",
    correcta: "Suma de la tangencial a_t = α r y de la normal a_n = ω² r",
    incorrectas: [
      "Solo a_t = α r porque a_n es cero",
      "Solo a_n = ω r porque la tangencial es despreciable"
    ]
  },
  {
    enunciado: "Si v cambia de signo mientras x alcanza un máximo en 1D, entonces en ese instante...",
    correcta: "La velocidad es cero y la aceleración puede ser no nula",
    incorrectas: [
      "La aceleración es necesariamente cero",
      "El desplazamiento total es infinito"
    ]
  },
  {
    enunciado: "En tiro horizontal desde una mesa, el tiempo de vuelo (sin rozamiento) depende de...",
    correcta: "La altura de la mesa y g, pero no de la velocidad horizontal inicial",
    incorrectas: [
      "La velocidad horizontal inicial únicamente",
      "La masa del proyectil en reposo"
    ]
  },
  {
    enunciado: "Para linealizar datos de MRUA con posición y tiempo, es útil representar...",
    correcta: "x frente a t², esperando una relación lineal si v₀ = 0",
    incorrectas: [
      "v frente a x² para obtener una recta",
      "a frente a t para observar una parábola"
    ]
  },
  {
    enunciado: "La unidad SI de aceleración es...",
    correcta: "m·s⁻²",
    incorrectas: [
      "m·s",
      "N·s⁻¹"
    ]
  },
  {
    enunciado: "En una gráfica a–t con a = 0 constante, las curvas x–t y v–t correspondientes son, respectivamente...",
    correcta: "Línea recta en v–t y línea recta en x–t con pendiente constante v",
    incorrectas: [
      "Parábola en v–t y recta en x–t",
      "Recta en v–t y parábola en x–t con concavidad hacia abajo"
    ]
  },
  {
    enunciado: "Para minimizar la influencia del rozamiento en medidas de MRUA, se recomienda...",
    correcta: "Usar pista de aire o cojinetes de baja fricción y medir el ángulo del plano",
    incorrectas: [
      "Aumentar la masa del carrito indefinidamente",
      "Medir solo una vez para evitar desgaste"
    ]
  }
];
