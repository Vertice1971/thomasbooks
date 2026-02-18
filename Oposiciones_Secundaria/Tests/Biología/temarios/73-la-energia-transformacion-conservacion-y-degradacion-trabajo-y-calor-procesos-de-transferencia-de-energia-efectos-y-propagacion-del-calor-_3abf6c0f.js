// temarios/73-la-energia-transformacion-conservacion-y-degradacion-trabajo-y-calor-procesos-de-transferencia-de-energia-efectos-y-propagacion-del-calor-propagacion-de-energia-sin-transporte-de-masa-movimiento-ondulatorio-luz-y-sonido.js
var PREGUNTAS = [
  {
    enunciado: "La energía se define en física como la capacidad de un sistema para realizar trabajo o producir cambios observables en su entorno.",
    correcta: "La afirmación es correcta porque la energía cuantifica la posibilidad de producir transformaciones o desplazamientos mediante interacciones.",
    incorrectas: [
      "La afirmación es incorrecta porque la energía solo describe el movimiento rectilíneo uniforme de los cuerpos.",
      "La afirmación es incorrecta porque la energía solo existe cuando hay generación de calor por fricción."
    ]
  },
  {
    enunciado: "El principio de conservación de la energía en un sistema aislado establece que la energía total permanece constante aunque cambien sus formas.",
    correcta: "Es verdadero, porque la energía no se crea ni se destruye y solo se transforma entre formas como cinética, potencial o térmica.",
    incorrectas: [
      "Es falso, porque la energía puede desaparecer si el proceso es irreversible.",
      "Es falso, porque la energía aumenta con el tiempo debido a la entropía."
    ]
  },
  {
    enunciado: "La degradación de la energía en procesos reales se relaciona con la segunda ley de la termodinámica.",
    correcta: "Es cierto, porque parte de la energía útil se dispersa como calor y la entropía global del sistema y su entorno tiende a aumentar.",
    incorrectas: [
      "Es falso, porque la degradación depende solo de la primera ley y no afecta a la entropía.",
      "Es falso, porque la degradación implica pérdida de materia y no de energía disponible."
    ]
  },
  {
    enunciado: "El trabajo mecánico realizado por una fuerza constante que forma un ángulo θ con el desplazamiento se calcula con W = F·d·cosθ.",
    correcta: "Es correcto, porque solo la componente de la fuerza alineada con el desplazamiento contribuye al trabajo.",
    incorrectas: [
      "Es incorrecto, porque el trabajo se calcula como W = F/d con independencia del ángulo.",
      "Es incorrecto, porque el trabajo no depende del desplazamiento cuando la fuerza es constante."
    ]
  },
  {
    enunciado: "El calor es una forma de transferencia de energía que ocurre debido a diferencias de temperatura entre sistemas o partes de un mismo sistema.",
    correcta: "Es verdadero, porque el calor fluye espontáneamente del cuerpo de mayor temperatura al de menor temperatura.",
    incorrectas: [
      "Es falso, porque el calor es una sustancia material que se almacena en los cuerpos.",
      "Es falso, porque el calor solo se define cuando hay cambio de estado y no en calentamientos."
    ]
  },
  {
    enunciado: "En la conducción térmica, la transferencia de energía se produce por colisiones y vibraciones entre partículas vecinas sin transporte macroscópico de materia.",
    correcta: "Es cierto, por eso es el mecanismo dominante en sólidos y depende de la conductividad del material.",
    incorrectas: [
      "Es falso, porque la conducción requiere corrientes de convección en el fluido.",
      "Es falso, porque la conducción solo ocurre en el vacío mediante radiación."
    ]
  },
  {
    enunciado: "La convección térmica es un mecanismo de transferencia de calor característico de fluidos.",
    correcta: "Es correcto, porque implica movimiento de masas de fluido y puede ser natural o forzada.",
    incorrectas: [
      "Es incorrecto, porque la convección solo se observa en sólidos cristalinos.",
      "Es incorrecto, porque la convección no depende de diferencias de densidad."
    ]
  },
  {
    enunciado: "La radiación térmica permite la transferencia de energía entre cuerpos separados sin necesidad de un medio material.",
    correcta: "Es verdadero, porque la radiación es un proceso de emisión y absorción de ondas electromagnéticas.",
    incorrectas: [
      "Es falso, porque la radiación solo puede transmitirse por conducción a través de sólidos.",
      "Es falso, porque la radiación requiere siempre aire como medio de propagación."
    ]
  },
  {
    enunciado: "El calor específico de una sustancia expresa la energía necesaria por unidad de masa para elevar su temperatura en 1 °C.",
    correcta: "Es cierto, y explica por qué el agua modera el clima al requerir mucha energía para cambiar su temperatura.",
    incorrectas: [
      "Es falso, porque el calor específico no depende de la sustancia sino de la presión atmosférica.",
      "Es falso, porque el calor específico siempre es menor en líquidos que en sólidos."
    ]
  },
  {
    enunciado: "Durante un cambio de estado a presión constante, la temperatura del sistema permanece constante mientras se intercambia calor latente.",
    correcta: "Es correcto, porque la energía absorbida o liberada se emplea en romper o formar enlaces intermoleculares.",
    incorrectas: [
      "Es incorrecto, porque la temperatura aumenta de forma proporcional al calor latente.",
      "Es incorrecto, porque no se intercambia energía durante los cambios de estado."
    ]
  },
  {
    enunciado: "La potencia mide la rapidez con la que se realiza trabajo o se transfiere energía, y su unidad en el SI es el vatio (W).",
    correcta: "Es verdadero, porque 1 W equivale a 1 J/s.",
    incorrectas: [
      "Es falso, porque la potencia se mide en julios (J).",
      "Es falso, porque la potencia no está relacionada con el tiempo de transferencia."
    ]
  },
  {
    enunciado: "En un motor térmico ideal, la eficiencia máxima viene limitada por la diferencia de temperaturas entre la fuente caliente y la fría.",
    correcta: "Es cierto, porque la eficiencia de Carnot depende solo de las temperaturas absolutas de los focos térmicos.",
    incorrectas: [
      "Es falso, porque la eficiencia depende únicamente del combustible utilizado.",
      "Es falso, porque no existe límite teórico para la eficiencia de los motores térmicos."
    ]
  },
  {
    enunciado: "La entropía puede interpretarse como una medida del desorden o del número de microestados compatibles con un macroestado.",
    correcta: "Es correcto, lo que conecta la segunda ley con la probabilidad de las configuraciones del sistema.",
    incorrectas: [
      "Es incorrecto, porque la entropía mide la cantidad total de energía almacenada en el sistema.",
      "Es incorrecto, porque la entropía disminuye en procesos irreversibles."
    ]
  },
  {
    enunciado: "El equilibrio térmico entre dos cuerpos en contacto se alcanza cuando ambos llegan a la misma temperatura y cesa el flujo neto de calor.",
    correcta: "Es verdadero, porque se igualan las energías cinéticas promedio de las partículas de ambos sistemas.",
    incorrectas: [
      "Es falso, porque el flujo de calor continúa indefinidamente aunque tengan igual temperatura.",
      "Es falso, porque el equilibrio térmico exige también la igualdad de masas."
    ]
  },
  {
    enunciado: "Una onda es una perturbación que se propaga transportando energía pero no materia en su conjunto.",
    correcta: "Es cierto, aunque las partículas del medio realicen oscilaciones locales alrededor de posiciones de equilibrio.",
    incorrectas: [
      "Es falso, porque toda onda transfiere materia junto con la energía.",
      "Es falso, porque las ondas solo existen en el vacío y no en medios materiales."
    ]
  },
  {
    enunciado: "La velocidad de propagación de una onda viene dada por el producto de su frecuencia por su longitud de onda (v = f·λ).",
    correcta: "Es correcto, relación válida para ondas periódicas en medios donde la velocidad es constante.",
    incorrectas: [
      "Es incorrecto, porque la velocidad es la suma de la frecuencia y la longitud de onda.",
      "Es incorrecto, porque la velocidad es independiente de la frecuencia."
    ]
  },
  {
    enunciado: "Las ondas mecánicas necesitan un medio material para propagarse, mientras que las electromagnéticas no lo requieren.",
    correcta: "Es verdadero, por eso el sonido no viaja en el vacío y la luz sí.",
    incorrectas: [
      "Es falso, porque ambas necesitan siempre aire para propagarse.",
      "Es falso, porque ninguna onda puede propagarse en el vacío."
    ]
  },
  {
    enunciado: "La interferencia constructiva ocurre cuando dos ondas en fase se superponen y producen una amplitud mayor que la de cada onda individual.",
    correcta: "Es cierto, consecuencia del principio de superposición.",
    incorrectas: [
      "Es falso, porque la interferencia siempre reduce la amplitud resultante.",
      "Es falso, porque solo las ondas estacionarias pueden interferir."
    ]
  },
  {
    enunciado: "La difracción es más apreciable cuando el tamaño de la abertura es del orden de la longitud de onda de la perturbación.",
    correcta: "Es correcto, por eso el sonido se difracta con facilidad alrededor de obstáculos cotidianos.",
    incorrectas: [
      "Es incorrecto, porque la difracción solo se observa con aberturas muy grandes respecto a la longitud de onda.",
      "Es incorrecto, porque la difracción no depende del tamaño de la abertura."
    ]
  },
  {
    enunciado: "La reflexión de la luz obedece a que el ángulo de incidencia es igual al ángulo de reflexión medidos respecto a la normal.",
    correcta: "Es verdadero, y se cumple en superficies pulidas y rugosas considerando los modelos adecuados.",
    incorrectas: [
      "Es falso, porque el ángulo de reflexión siempre es cero con independencia del ángulo de incidencia.",
      "Es falso, porque solo la radiación infrarroja cumple esa ley."
    ]
  },
  {
    enunciado: "La refracción de la luz describe el cambio de dirección y velocidad al pasar de un medio a otro con distinto índice de refracción.",
    correcta: "Es cierto, y explica fenómenos como la desviación del lápiz en un vaso de agua.",
    incorrectas: [
      "Es falso, porque la velocidad de la luz es la misma en todos los medios.",
      "Es falso, porque la refracción no depende del índice del medio."
    ]
  },
  {
    enunciado: "La dispersión cromática se produce porque el índice de refracción depende de la frecuencia, separando colores al atravesar un prisma.",
    correcta: "Es correcto, y permite descomponer la luz blanca en su espectro visible.",
    incorrectas: [
      "Es incorrecto, porque todos los colores se desvían exactamente igual en un medio.",
      "Es incorrecto, porque la dispersión solo ocurre con luz ultravioleta."
    ]
  },
  {
    enunciado: "La polarización es una propiedad de las ondas transversales, como la luz, relacionada con la dirección de oscilación del campo.",
    correcta: "Es verdadero, por eso no se puede polarizar una onda sonora longitudinal en aire.",
    incorrectas: [
      "Es falso, porque la polarización solo afecta a las ondas longitudinales.",
      "Es falso, porque la polarización es un fenómeno exclusivamente acústico."
    ]
  },
  {
    enunciado: "El sonido es una onda mecánica longitudinal cuya velocidad depende de las propiedades del medio, como densidad y elasticidad.",
    correcta: "Es cierto, por eso se propaga más rápido en sólidos que en gases.",
    incorrectas: [
      "Es falso, porque el sonido es una onda electromagnética que no requiere medio.",
      "Es falso, porque la velocidad del sonido es constante en cualquier material."
    ]
  },
  {
    enunciado: "La frecuencia del sonido determina el tono percibido, mientras que la amplitud está asociada con la intensidad sonora.",
    correcta: "Es correcto, de modo que frecuencias más altas se oyen como tonos más agudos y amplitudes mayores como sonidos más fuertes.",
    incorrectas: [
      "Es incorrecto, porque el tono depende de la amplitud y la intensidad de la frecuencia.",
      "Es incorrecto, porque ni el tono ni la intensidad dependen de propiedades físicas."
    ]
  },
  {
    enunciado: "El efecto Doppler describe la variación aparente de la frecuencia de una onda debida al movimiento relativo entre la fuente y el observador.",
    correcta: "Es verdadero, y explica el cambio de tono de una sirena al pasar frente a quien escucha.",
    incorrectas: [
      "Es falso, porque solo varía la amplitud pero no la frecuencia observada.",
      "Es falso, porque requiere necesariamente cambios en la temperatura del medio."
    ]
  },
  {
    enunciado: "Una onda estacionaria resulta de la superposición de dos ondas de igual frecuencia y amplitud que se propagan en sentidos opuestos.",
    correcta: "Es cierto, y presenta nodos de amplitud nula y vientres de amplitud máxima.",
    incorrectas: [
      "Es falso, porque las ondas estacionarias no pueden formarse en cuerdas vibrantes.",
      "Es falso, porque las ondas estacionarias carecen de periodicidad temporal."
    ]
  },
  {
    enunciado: "La ley de Stefan-Boltzmann relaciona la potencia radiada por unidad de área de un cuerpo negro con la cuarta potencia de su temperatura absoluta.",
    correcta: "Es correcto, lo que implica que pequeños aumentos de temperatura producen grandes incrementos en la energía radiada.",
    incorrectas: [
      "Es incorrecto, porque la potencia radiada es proporcional a la temperatura a la primera potencia.",
      "Es incorrecto, porque la ley solo se aplica a temperaturas por debajo de 0 °C."
    ]
  },
  {
    enunciado: "El balance radiativo de la Tierra depende de la radiación solar entrante y de la radiación infrarroja saliente modulada por el efecto invernadero.",
    correcta: "Es verdadero, y condiciona el equilibrio térmico y el clima del planeta.",
    incorrectas: [
      "Es falso, porque la Tierra no emite radiación térmica al espacio.",
      "Es falso, porque el clima depende exclusivamente de la convección oceánica."
    ]
  },
  {
    enunciado: "El equivalente mecánico del calor demuestra la conexión cuantitativa entre trabajo y calor como formas de transferencia de energía.",
    correcta: "Es cierto, y se estableció experimentalmente al relacionar una cantidad de trabajo con una cantidad equivalente de calor.",
    incorrectas: [
      "Es falso, porque trabajo y calor son magnitudes incompatibles y no convertibles.",
      "Es falso, porque solo el calor puede transformarse en trabajo, pero no a la inversa."
    ]
  },
  {
    enunciado: "En procesos reversibles ideales, la entropía total del sistema y del entorno se mantiene constante.",
    correcta: "Es correcto, a diferencia de los procesos reales donde la entropía aumenta.",
    incorrectas: [
      "Es incorrecto, porque en todo proceso la entropía total debe disminuir.",
      "Es incorrecto, porque la entropía no está definida para procesos reversibles."
    ]
  },
  {
    enunciado: "La radiación visible es solo una pequeña parte del espectro electromagnético que incluye desde ondas de radio hasta rayos gamma.",
    correcta: "Es verdadero, y cada región se caracteriza por rangos de frecuencias y energías distintos.",
    incorrectas: [
      "Es falso, porque la luz visible constituye la totalidad del espectro electromagnético.",
      "Es falso, porque el espectro electromagnético no tiene relación con la frecuencia."
    ]
  },
  {
    enunciado: "El fotón es el cuanto de energía del campo electromagnético y explica fenómenos como el efecto fotoeléctrico.",
    correcta: "Es correcto, porque la energía del fotón es proporcional a la frecuencia de la radiación.",
    incorrectas: [
      "Es incorrecto, porque el fotón es una partícula con masa en reposo apreciable.",
      "Es incorrecto, porque la luz no puede comportarse como partícula en ningún experimento."
    ]
  },
  {
    enunciado: "En un medio dado, la velocidad de la luz es constante pero su longitud de onda cambia cuando lo hace la frecuencia.",
    correcta: "Es falso, porque en un medio dado la frecuencia permanece constante y lo que cambia es la longitud de onda al pasar de un medio a otro.",
    incorrectas: [
      "Es verdadero, porque en un medio la frecuencia varía con el índice de refracción.",
      "Es verdadero, porque la velocidad se ajusta para mantener constante la longitud de onda."
    ]
  },
  {
    enunciado: "El índice de refracción de un medio es la razón entre la velocidad de la luz en el vacío y la velocidad de la luz en ese medio.",
    correcta: "Es cierto, por lo que índices mayores indican propagación más lenta de la luz.",
    incorrectas: [
      "Es falso, porque el índice de refracción compara densidades y no velocidades.",
      "Es falso, porque el índice de refracción siempre es menor que 1."
    ]
  },
  {
    enunciado: "La intensidad sonora se mide físicamente como potencia por unidad de área, mientras que el nivel de intensidad se expresa en decibelios.",
    correcta: "Es correcto, porque el decibelio es una escala logarítmica referida a un umbral convencional.",
    incorrectas: [
      "Es incorrecto, porque la intensidad sonora se mide en julios por segundo y no admite escalas logarítmicas.",
      "Es incorrecto, porque el decibelio es una unidad lineal de energía acústica."
    ]
  },
  {
    enunciado: "Los materiales aislantes térmicos presentan baja conductividad y reducen el flujo de calor por conducción.",
    correcta: "Es verdadero, y por eso se emplean en la construcción y en equipos de conservación de alimentos.",
    incorrectas: [
      "Es falso, porque los aislantes favorecen la transferencia de calor por radiación.",
      "Es falso, porque la conductividad de un aislante siempre aumenta con la temperatura."
    ]
  },
  {
    enunciado: "La ley de Fourier establece que el flujo de calor por conducción es proporcional al gradiente de temperatura y al área de la sección, e inversamente proporcional a la longitud.",
    correcta: "Es correcto, lo que permite cuantificar pérdidas térmicas en paredes y conducciones.",
    incorrectas: [
      "Es incorrecto, porque el flujo de calor no depende del gradiente de temperatura.",
      "Es incorrecto, porque el flujo de calor es independiente de la geometría del sólido."
    ]
  },
  {
    enunciado: "En convección natural, las diferencias de densidad causadas por gradientes térmicos generan corrientes ascendentes y descendentes en el fluido.",
    correcta: "Es cierto, y explican fenómenos como las brisas costeras y algunas corrientes oceánicas superficiales.",
    incorrectas: [
      "Es falso, porque la convección natural requiere siempre ventiladores o bombas.",
      "Es falso, porque la densidad no cambia con la temperatura en los fluidos."
    ]
  },
  {
    enunciado: "La resonancia ocurre cuando la frecuencia de una fuerza periódica coincide con la frecuencia natural de un sistema, aumentando notablemente la amplitud.",
    correcta: "Es verdadero, y explica desde la rotura de copas por sonido hasta el diseño de puentes y edificios.",
    incorrectas: [
      "Es falso, porque la resonancia reduce la amplitud a valores mínimos.",
      "Es falso, porque la resonancia solo existe en sistemas eléctricos y no mecánicos."
    ]
  },
  {
    enunciado: "En medios materiales, la atenuación de una onda implica disminución de su amplitud debido a absorción y dispersión de energía.",
    correcta: "Es correcto, de modo que la señal se debilita con la distancia recorrida.",
    incorrectas: [
      "Es incorrecto, porque la atenuación aumenta la energía de la onda al propagarse.",
      "Es incorrecto, porque la atenuación solo depende de la frecuencia del observador."
    ]
  },
  {
    enunciado: "Los ultrasonidos tienen frecuencias superiores al límite de audición humana y se usan en diagnóstico médico y limpieza por cavitación.",
    correcta: "Es verdadero, porque su alta frecuencia permite imágenes con buena resolución y aplicaciones industriales específicas.",
    incorrectas: [
      "Es falso, porque los ultrasonidos son inaudibles y por tanto no transportan energía.",
      "Es falso, porque los ultrasonidos solo se propagan en el vacío."
    ]
  },
  {
    enunciado: "En un proceso de compresión adiabática ideal, no se intercambia calor con el entorno y la temperatura del gas aumenta.",
    correcta: "Es cierto, porque el trabajo realizado sobre el gas se invierte en aumentar su energía interna.",
    incorrectas: [
      "Es falso, porque en adiabática el calor absorbido compensa el trabajo realizado.",
      "Es falso, porque la temperatura no puede variar sin intercambio de calor."
    ]
  }
];
