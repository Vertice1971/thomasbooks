// temarios/06-movimiento-de-rotacion-de-una-particula-cinematica-y-dinamica-conservacion-del-momento-angular.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué describe la cinemática angular en un movimiento de rotación?",
    correcta: "La evolución temporal del desplazamiento angular (&theta;), de la velocidad angular (&omega;) y de la aceleración angular (&alpha;)",
    incorrectas: [
      "La relación entre fuerzas y energías potenciales",
      "La variación de la masa con la velocidad"
    ]
  },
  {
    enunciado: "En movimiento circular uniforme (MCU), ¿cuál es correcta?",
    correcta: "La rapidez es constante y la aceleración es centrípeta de módulo a<sub>n</sub> = &omega;<sup>2</sup>&middot;r",
    incorrectas: [
      "La aceleración es nula porque la rapidez no cambia",
      "La aceleración es tangencial y constante"
    ]
  },
  {
    enunciado: "En MCU, el periodo T y la frecuencia f cumplen:",
    correcta: "T = 1/f y &omega; = 2&pi;f",
    incorrectas: [
      "T = f y &omega; = &pi;f",
      "T = 2&pi;f y &omega; = f/(2&pi;)"
    ]
  },
  {
    enunciado: "Para MCUA (&alpha; constante), una igualdad correcta es:",
    correcta: "&omega;(t) = &omega;<sub>0</sub> + &alpha;&middot;t",
    incorrectas: [
      "&omega;(t) = &omega;<sub>0</sub> + &alpha;&middot;t<sup>2</sup>",
      "&theta;(t) = &theta;<sub>0</sub> + &omega;&middot;t<sup>2</sup> (con &omega; constante)"
    ]
  },
  {
    enunciado: "Relación lineal–angular para radio constante r:",
    correcta: "v<sub>t</sub> = r&middot;&omega; y a<sub>t</sub> = r&middot;&alpha;",
    incorrectas: [
      "v<sub>t</sub> = &omega;/r y a<sub>t</sub> = &alpha;/r",
      "v<sub>t</sub> = r/&omega; y a<sub>t</sub> = r/&alpha;"
    ]
  },
  {
    enunciado: "La aceleración normal (centrípeta) en un movimiento circular es:",
    correcta: "a<sub>n</sub> = v<sup>2</sup>/r = &omega;<sup>2</sup>r, dirigida hacia el centro",
    incorrectas: [
      "a<sub>n</sub> = r/v, dirigida tangencialmente",
      "a<sub>n</sub> = r/&omega;, dirigida radialmente hacia fuera"
    ]
  },
  {
    enunciado: "El momento de una fuerza (torque) respecto a un punto O se define como:",
    correcta: "&tau;<sub>O</sub> = r &times; F (producto vectorial)",
    incorrectas: [
      "&tau;<sub>O</sub> = r &middot; F (producto escalar)",
      "&tau;<sub>O</sub> = F/r"
    ]
  },
  {
    enunciado: "El momento angular de una partícula respecto a O es:",
    correcta: "L<sub>O</sub> = r &times; p = r &times; (m&middot;v)",
    incorrectas: [
      "L<sub>O</sub> = m&middot;a",
      "L<sub>O</sub> = F &times; a"
    ]
  },
  {
    enunciado: "Para órbita circular de radio fijo r, el módulo del momento angular es:",
    correcta: "L = m&middot;r<sup>2</sup>&middot;&omega;",
    incorrectas: [
      "L = m&middot;r&middot;&alpha;",
      "L = m&middot;&omega;/r"
    ]
  },
  {
    enunciado: "Teorema del momento angular (ecuación fundamental rotacional):",
    correcta: "dL<sub>O</sub>/dt = &Sigma; &tau;<sub>O,ext</sub>",
    incorrectas: [
      "dL<sub>O</sub>/dt = &Sigma; F<sub>ext</sub>",
      "dL<sub>O</sub>/dt = 0 siempre"
    ]
  },
  {
    enunciado: "Condición para la conservación del momento angular respecto a O:",
    correcta: "Si &Sigma; &tau;<sub>O,ext</sub> = 0, entonces L<sub>O</sub> es constante",
    incorrectas: [
      "Si &Sigma; F<sub>ext</sub> = 0, entonces L<sub>O</sub> cambia siempre",
      "Se conserva solo si no hay fuerzas internas"
    ]
  },
  {
    enunciado: "El impulso angular en [t<sub>1</sub>, t<sub>2</sub>] es:",
    correcta: "J<sub>&tau;</sub> = &int;<sub>t1</sub><sup>t2</sup> &tau; dt = &Delta;L",
    incorrectas: [
      "J<sub>&tau;</sub> = &Sigma;F&middot;&Delta;t",
      "J<sub>&tau;</sub> = &Delta;E<sub>c</sub>"
    ]
  },
  {
    enunciado: "Velocidad en coordenadas polares (plano):",
    correcta: "v = (dr/dt)&middot;&ucirc;<sub>r</sub> + r(d&theta;/dt)&middot;&ucirc;<sub>&theta;</sub>",
    incorrectas: [
      "v = r&middot;&ucirc;<sub>r</sub> + &theta;&middot;&ucirc;<sub>&theta;</sub>",
      "v = (d&theta;/dt)&middot;&ucirc;<sub>r</sub> + (dr/dt)&middot;&ucirc;<sub>&theta;</sub>"
    ]
  },
  {
    enunciado: "Aceleración en polares (plano):",
    correcta: "a = (d<sup>2</sup>r/dt<sup>2</sup> &minus; r(d&theta;/dt)<sup>2</sup>)&middot;&ucirc;<sub>r</sub> + (r d<sup>2</sup>&theta;/dt<sup>2</sup> + 2(dr/dt)(d&theta;/dt))&middot;&ucirc;<sub>&theta;</sub>",
    incorrectas: [
      "a = (d<sup>2</sup>r/dt<sup>2</sup>)&middot;&ucirc;<sub>r</sub> + (d<sup>2</sup>&theta;/dt<sup>2</sup>)&middot;&ucirc;<sub>&theta;</sub>",
      "a = r(d&theta;/dt)<sup>2</sup>&middot;&ucirc;<sub>&theta;</sub> (sin término radial)"
    ]
  },
  {
    enunciado: "Una fuerza central F(r) = f(r)&middot;&ucirc;<sub>r</sub> respecto a O produce:",
    correcta: "&tau;<sub>O</sub> = r &times; F = 0 y por tanto L se conserva",
    incorrectas: [
      "&tau;<sub>O</sub> &ne; 0 y L aumenta linealmente",
      "Un torque externo constante tangencial"
    ]
  },
  {
    enunciado: "La segunda ley de Kepler (áreas iguales en tiempos iguales) se explica porque:",
    correcta: "El momento angular respecto al foco es constante",
    incorrectas: [
      "La energía potencial es constante",
      "La fuerza gravitatoria es tangencial"
    ]
  },
  {
    enunciado: "Partícula a radio fijo r bajo fuerza tangencial constante: ¿qué pasa con &omega;?",
    correcta: "Aumenta uniformemente: &alpha; = &tau;/I con I = m r<sup>2</sup>",
    incorrectas: [
      "Permanece constante porque r es fijo",
      "Disminuye con el tiempo porque la fuerza es tangencial"
    ]
  },
  {
    enunciado: "Relación potencia–rotación:",
    correcta: "P = &tau;&middot;&omega;",
    incorrectas: [
      "P = &tau;/&omega;",
      "P = &omega;/&tau;"
    ]
  },
  {
    enunciado: "En MCU, la fuerza que mantiene la trayectoria circular es:",
    correcta: "Centrípeta, de módulo F<sub>c</sub> = m&middot;v<sup>2</sup>/r",
    incorrectas: [
      "Centrífuga (en marco inercial)",
      "Nula porque la rapidez es constante"
    ]
  },
  {
    enunciado: "Sin torque externo, un patinador que acerca masa al eje:",
    correcta: "Disminuye su inercia efectiva (&propto; r<sup>2</sup>) y aumenta &omega; para conservar L",
    incorrectas: [
      "Aumenta L y &omega; a la vez",
      "Disminuyen L y &omega; a la vez"
    ]
  },
  {
    enunciado: "El signo de &tau; respecto a O es positivo si:",
    correcta: "La fuerza tiende a incrementar &theta; según la convención elegida",
    incorrectas: [
      "La fuerza es radial hacia el centro",
      "La fuerza es nula"
    ]
  },
  {
    enunciado: "Colisión breve con torque externo despreciable:",
    correcta: "&Delta;L &asymp; 0 durante el choque",
    incorrectas: [
      "&Delta;E<sub>c</sub> = 0 siempre",
      "&Delta;p = 0 pero &Delta;L &ne; 0 necesariamente"
    ]
  },
  {
    enunciado: "Energía cinética para trayectoria circular:",
    correcta: "K = &frac12; m r<sup>2</sup> &omega;<sup>2</sup>",
    incorrectas: [
      "K = &frac12; m &omega;<sup>2</sup>",
      "K = &frac12; m r &omega;"
    ]
  },
  {
    enunciado: "Fuerza de Coriolis en un marco en rotación con velocidad angular &Omega;:",
    correcta: "F<sub>Coriolis</sub> = &minus;2 m (&Omega; &times; v<sub>rel</sub>)",
    incorrectas: [
      "F<sub>Coriolis</sub> = +2 m (&Omega; &middot; v<sub>rel</sub>)&middot;&ucirc;<sub>r</sub>",
      "F<sub>Coriolis</sub> = m (&Omega; &times; r)"
    ]
  },
  {
    enunciado: "Fuerza centrífuga en marco no inercial en rotación:",
    correcta: "F<sub>centr&iacute;fuga</sub> = &minus; m (&Omega; &times; (&Omega; &times; r))",
    incorrectas: [
      "F<sub>centr&iacute;fuga</sub> = + m (&Omega; &middot; r)",
      "F<sub>centr&iacute;fuga</sub> = &minus; m (&Omega; &times; v<sub>rel</sub>)"
    ]
  },
  {
    enunciado: "El vector L depende de:",
    correcta: "La elección del punto de referencia O y del estado (r, v)",
    incorrectas: [
      "Solo de la masa (independiente de O)",
      "Únicamente de &omega;"
    ]
  },
  {
    enunciado: "Para fuerza puramente tangencial F<sub>t</sub> sobre partícula a radio fijo r, el torque es:",
    correcta: "&tau; = r F<sub>t</sub>",
    incorrectas: [
      "&tau; = F<sub>t</sub>/r",
      "&tau; = 0 por ser tangencial"
    ]
  },
  {
    enunciado: "Si una partícula se aleja del centro bajo fuerza central atractiva con L constante, su velocidad angular:",
    correcta: "Disminuye, ya que L = m r<sup>2</sup> &omega; y r aumenta",
    incorrectas: [
      "Aumenta proporcionalmente a r",
      "Permanece constante independientemente de r"
    ]
  },
  {
    enunciado: "En órbitas keplerianas (V(r) = &minus;k/r), además de la energía, se conserva:",
    correcta: "El momento angular respecto al foco",
    incorrectas: [
      "El torque externo total",
      "La aceleración angular &alpha;"
    ]
  },
  {
    enunciado: "Identifica una igualdad cinemática angular correcta en MCUA:",
    correcta: "&omega;<sup>2</sup> = &omega;<sub>0</sub><sup>2</sup> + 2&alpha;(&theta; &minus; &theta;<sub>0</sub>)",
    incorrectas: [
      "&theta; = &omega;<sup>2</sup>/(2&alpha;)",
      "&alpha; = 2(&theta; &minus; &theta;<sub>0</sub>)/&omega;"
    ]
  },
  {
    enunciado: "Dirección de L para una partícula en órbita circular:",
    correcta: "Perpendicular al plano de la órbita (regla de la mano derecha)",
    incorrectas: [
      "Paralela a la velocidad tangencial",
      "Radial hacia el centro"
    ]
  },
  {
    enunciado: "Si &Sigma; &tau;<sub>O,ext</sub> = 0 pero &Sigma; F<sub>ext</sub> &ne; 0, entonces:",
    correcta: "L<sub>O</sub> se conserva aunque el impulso lineal pueda no hacerlo",
    incorrectas: [
      "Ni L ni p se conservan",
      "Ambos L y p se conservan automáticamente"
    ]
  },
  {
    enunciado: "Unidad SI del momento angular L:",
    correcta: "kg·m<sup>2</sup>·s<sup>&minus;1</sup>",
    incorrectas: [
      "N·m (newton·metro)",
      "kg·m·s<sup>&minus;2</sup>"
    ]
  },
  {
    enunciado: "Unidad SI del torque &tau;:",
    correcta: "N·m (newton·metro)",
    incorrectas: [
      "kg·m<sup>2</sup>·s<sup>&minus;1</sup>",
      "J·s"
    ]
  },
  {
    enunciado: "Para verificar P = &tau;&middot;&omega; en plataforma giratoria necesitas medir:",
    correcta: "Torque aplicado y velocidad angular instantánea",
    incorrectas: [
      "Masa y frecuencia solamente",
      "Energía cinética y tiempo exclusivamente"
    ]
  },
  {
    enunciado: "Trabajo de la fuerza centrípeta tras una vuelta completa con v constante:",
    correcta: "Cero, la fuerza es perpendicular al desplazamiento siempre",
    incorrectas: [
      "Positivo e igual a 2&pi;rF<sub>c</sub>",
      "Negativo e igual a &minus;2&pi;rF<sub>c</sub>"
    ]
  },
  {
    enunciado: "Para decidir si L se conserva es crucial:",
    correcta: "Elegir el punto O y verificar que &Sigma; &tau;<sub>O,ext</sub> = 0",
    incorrectas: [
      "Comprobar solo que &Sigma; F<sub>ext</sub> = 0",
      "Exigir simetría esférica del sistema"
    ]
  },
  {
    enunciado: "En la Tierra (ligeramente no inercial), el efecto de Coriolis se manifiesta en:",
    correcta: "Desvíos de trayectorias a gran escala (vientos, proyectiles, péndulo de Foucault)",
    incorrectas: [
      "Aceleraciones tangenciales constantes en cualquier giro de mesa",
      "Ausencia total de efectos medibles"
    ]
  },
  {
    enunciado: "Partícula unida por cuerda ideal que pasa de r<sub>1</sub> a r<sub>2</sub> sin torque externo: ¿qué permanece constante?",
    correcta: "L = m r<sup>2</sup> &omega;",
    incorrectas: [
      "Solo &omega;",
      "K = &frac12; m r<sup>2</sup> &omega;<sup>2</sup> (siempre, sin intercambio de trabajo)"
    ]
  },
  {
    enunciado: "Condición para que el torque de una fuerza sea cero respecto a O:",
    correcta: "Que la fuerza sea radial (su línea de acción pase por O)",
    incorrectas: [
      "Que la fuerza sea tangencial constante",
      "Que la velocidad sea constante"
    ]
  },
  {
    enunciado: "Si r aumenta y L se conserva, la energía cinética rotacional K = &frac12; m r<sup>2</sup> &omega;<sup>2</sup>&hellip;",
    correcta: "Puede variar: K = L<sup>2</sup> / (2 m r<sup>2</sup>) depende de r",
    incorrectas: [
      "Permanece constante necesariamente",
      "Disminuye siempre linealmente con r"
    ]
  }
];
