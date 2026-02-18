// 63-regulacion-de-motores-de-corriente-continua.js
var PREGUNTAS = [
  {
    enunciado: "¿Cuál es la relación fundamental que define la velocidad en un motor de corriente continua?",
    correcta: "$n = (V - I_a \cdot R_a) / (k \cdot \phi)$, donde V es la tensión de armadura y $\phi$ el flujo magnético",
    incorrectas: [
      "$n = V \cdot I_a / (k \cdot \phi)$",
      "$n = (V + I_a \cdot R_a) \cdot k \cdot \phi$"
    ]
  },
  {
    enunciado: "¿En qué consiste el método de regulación por control de la tensión de armadura?",
    correcta: "Permite variar la velocidad desde cero hasta la velocidad nominal manteniendo el par máximo constante (zona de par constante)",
    incorrectas: [
      "Se utiliza para aumentar la velocidad por encima de la nominal reduciendo el flujo",
      "Consiste en variar la resistencia del devanado de excitación únicamente"
    ]
  },
  {
    enunciado: "¿Qué ocurre si se reduce el flujo magnético (debilitamiento de campo) en un motor de CC?",
    correcta: "La velocidad aumenta por encima de la nominal, pero el par motor disponible disminuye (zona de potencia constante)",
    incorrectas: [
      "La velocidad disminuye drásticamente hasta detener el motor",
      "El motor mantiene el mismo par pero consume menos corriente"
    ]
  },
  {
    enunciado: "¿Qué función cumple el lazo de corriente en un regulador de cascada para motores de CC?",
    correcta: "Es el lazo interno que limita la intensidad máxima para proteger los semiconductores y el propio motor durante transitorios",
    incorrectas: [
      "Es el lazo externo que se encarga de fijar la consigna de velocidad",
      "Sirve para medir la temperatura de las escobillas"
    ]
  },
  {
    enunciado: "¿Qué es un convertidor de cuatro cuadrantes en la regulación de motores de CC?",
    correcta: "Un sistema que permite el control de velocidad y par en ambos sentidos de giro, incluyendo el frenado regenerativo",
    incorrectas: [
      "Un rectificador que solo funciona con tensión trifásica",
      "Un convertidor que solo puede girar en un sentido pero a muy alta velocidad"
    ]
  },
  {
    enunciado: "En un rectificador controlado por tiristores para el control de un motor CC, ¿qué es la conducción discontinua?",
    correcta: "Situación donde la corriente de armadura cae a cero en cada ciclo de conmutación debido a una baja carga o baja inductancia",
    incorrectas: [
      "Cuando el motor se para y arranca constantemente por un fallo eléctrico",
      "Un modo de ahorro de energía donde el motor gira por inercia"
    ]
  },
  {
    enunciado: "¿Qué ventaja ofrece el uso de un 'Chopper' (troceador) frente a un rectificador controlado?",
    correcta: "Permite una frecuencia de conmutación más elevada, lo que reduce el rizado de corriente y mejora la respuesta dinámica",
    incorrectas: [
      "Es mucho más barato porque no requiere transistores",
      "Permite conectar el motor directamente a una red de corriente alterna sin filtros"
    ]
  },
  {
    enunciado: "¿Para qué sirve la compensación de caída IR en reguladores de velocidad de lazo abierto?",
    correcta: "Para intentar mantener la velocidad constante ante cambios de carga compensando la caída de tensión en la resistencia interna",
    incorrectas: [
      "Para evitar que el motor se caliente por efecto Joule",
      "Para medir la resistencia del aislamiento del motor"
    ]
  },
  {
    enunciado: "¿Qué es la fuerza contraelectromotriz (FCEM)?",
    correcta: "La tensión generada en la armadura debido al movimiento de los conductores en el campo magnético, que se opone a la tensión aplicada",
    incorrectas: [
      "La fuerza mecánica que ejerce el motor sobre el eje de carga",
      "La tensión de pico que aparece al desconectar el motor de la red"
    ]
  },
  {
    enunciado: "¿Qué dispositivo se utiliza habitualmente como sensor de velocidad en el lazo de realimentación de un motor CC?",
    correcta: "Tacogeneratriz o encoder incremental",
    incorrectas: [
      "Shunt de corriente",
      "Sonda de temperatura PT100"
    ]
  },
  {
    enunciado: "¿Cómo se invierte el sentido de giro en un motor de excitación independiente?",
    correcta: "Invirtiendo la polaridad de la tensión de armadura o la polaridad de la tensión de excitación",
    incorrectas: [
      "Cambiando dos de las tres fases de la alimentación alterna",
      "Girando físicamente el motor 180 grados sobre su base"
    ]
  },
  {
    enunciado: "¿Qué es el frenado reostático en un motor de CC?",
    correcta: "Consiste en desconectar la armadura de la fuente y conectarla a una resistencia, disipando la energía cinética en forma de calor",
    incorrectas: [
      "Invertir la polaridad de la red mientras el motor gira a plena velocidad",
      "Bloquear el eje del motor mediante un freno de disco hidráulico"
    ]
  },
  {
    enunciado: "¿Qué riesgo existe si se interrumpe el circuito de excitación en un motor shunt mientras está en marcha?",
    correcta: "El motor tiende a acelerarse peligrosamente (embalamiento) al intentar generar la FCEM con un flujo residual mínimo",
    incorrectas: [
      "El motor se detiene instantáneamente por falta de magnetismo",
      "El motor empieza a generar corriente alterna por las escobillas"
    ]
  },
  {
    enunciado: "¿Qué es un convertidor dual (Dual Converter)?",
    correcta: "Dos puentes de tiristores conectados en antiparalelo para permitir el control de corriente en ambos sentidos sin contactores",
    incorrectas: [
      "Un motor que tiene dos ejes de salida",
      "Un sistema que funciona tanto con corriente continua como con alterna"
    ]
  },
  {
    enunciado: "¿Cuál es la función de la inductancia de alisado en serie con la armadura?",
    correcta: "Reducir el rizado de la corriente para mejorar la conmutación en las escobillas y reducir el calentamiento del rotor",
    incorrectas: [
      "Aumentar la resistencia total para que el motor consuma menos",
      "Proteger al motor contra rayos y sobretensiones atmosféricas"
    ]
  },
  {
    enunciado: "¿Qué indica el parámetro de 'Constante de tiempo eléctrica' ($\tau_e$) del motor?",
    correcta: "La relación entre la inductancia y la resistencia de armadura ($L_a/R_a$), que determina la rapidez con la que cambia la corriente",
    incorrectas: [
      "El tiempo que tarda el motor en alcanzar su temperatura de régimen",
      "El tiempo que tarda el motor en pararse por rozamiento"
    ]
  },
  {
    enunciado: "¿Qué es el control por 'Vane' en motores de pequeña potencia?",
    correcta: "Un sistema de control de velocidad analógico mediante transistores en zona lineal (hoy en desuso frente al PWM)",
    incorrectas: [
      "Un control de velocidad mediante álabes de aire",
      "Un interruptor de pie para máquinas de coser"
    ]
  },
  {
    enunciado: "¿Qué efecto tiene la reacción de inducido en un motor de CC?",
    correcta: "Distorsiona y debilita el flujo principal debido al campo magnético creado por la propia corriente de armadura",
    incorrectas: [
      "Aumenta el rendimiento del motor al generar un campo extra",
      "Limpia automáticamente las escobillas mediante arcos eléctricos"
    ]
  },
  {
    enunciado: "¿Para qué sirven los polos de conmutación o auxiliares?",
    correcta: "Para neutralizar la reacción de inducido en la zona neutral y mejorar la conmutación, evitando chispas en las escobillas",
    incorrectas: [
      "Para sujetar el motor a la bancada con mayor fuerza magnética",
      "Para permitir que el motor funcione como generador de alterna"
    ]
  },
  {
    enunciado: "¿Qué es un regulador PID en el control de velocidad?",
    correcta: "Un algoritmo que combina acciones Proporcional, Integral y Derivativa para anular el error de velocidad y mejorar la estabilidad",
    incorrectas: [
      "Un dispositivo de protección contra incendios de motores",
      "Un tipo de escobilla fabricada con materiales cerámicos"
    ]
  },
  {
    enunciado: "¿Qué es el 'Límite de Corriente' en un variador de CC?",
    correcta: "Valor de consigna máximo que el lazo de intensidad no permitirá superar, aunque la carga aumente",
    incorrectas: [
      "La intensidad a la que el motor se quema de forma irreversible",
      "El grosor máximo de los cables que se pueden conectar al borne"
    ]
  },
  {
    enunciado: "¿Qué ocurre con el par motor si mantenemos constante la corriente de armadura y duplicamos el flujo?",
    correcta: "El par motor se duplica, ya que $T = k \cdot \phi \cdot I_a$",
    incorrectas: [
      "El par motor se reduce a la mitad",
      "El par motor permanece constante pero aumenta la velocidad"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al frenado por contracorriente (Plugging)?",
    correcta: "Se invierte la polaridad de la armadura mientras el motor gira; es un frenado muy enérgico pero disipa mucha energía",
    incorrectas: [
      "Es el método más eficiente energéticamente",
      "Consiste en cortocircuitar los bornes del motor"
    ]
  },
  {
    enunciado: "¿Qué es la 'zona muerta' en un convertidor dual?",
    correcta: "Intervalo de tiempo en el que ambos puentes están desactivados para evitar corrientes de circulación entre ellos",
    incorrectas: [
      "La parte del motor donde no hay campo magnético",
      "Un error en el programa que hace que el motor no gire"
    ]
  },
  {
    enunciado: "¿Qué función tiene el devanado de compensación?",
    correcta: "Eliminar el efecto de la reacción de inducido en toda la superficie de los polos principales, no solo en la zona neutra",
    incorrectas: [
      "Compensar el peso del rotor para que no vibre",
      "Ajustar la tensión de red si hay fluctuaciones"
    ]
  },
  {
    enunciado: "¿Cómo se mide el par motor de forma indirecta en un motor de excitación independiente?",
    correcta: "Midiendo la corriente de armadura, ya que es directamente proporcional al par si el flujo es constante",
    incorrectas: [
      "Midiendo la tensión de armadura con un voltímetro",
      "Midiendo la frecuencia de los pulsos del encoder"
    ]
  },
  {
    enunciado: "¿Qué es el 'Ramp generator' (generador de rampa)?",
    correcta: "Circuito que limita la aceleración y deceleración del motor ante cambios bruscos en la consigna de velocidad",
    incorrectas: [
      "Un dispositivo para subir el motor a un camión",
      "Un tipo de generador que solo funciona en cuestas"
    ]
  },
  {
    enunciado: "¿Qué relación tiene el rizado de corriente con el desgaste de las escobillas?",
    correcta: "Un rizado elevado empeora la conmutación y aumenta el desgaste mecánico y eléctrico de las escobillas",
    incorrectas: [
      "No tienen ninguna relación",
      "El rizado ayuda a limpiar el colector de delgas"
    ]
  },
  {
    enunciado: "¿Qué es el control de campo (Field Control)?",
    correcta: "Regulación de velocidad mediante la variación de la corriente de excitación",
    incorrectas: [
      "Controlar el motor desde un campo de fútbol",
      "Variar la frecuencia de la red eléctrica"
    ]
  },
  {
    enunciado: "¿En qué tipo de aplicaciones es común el motor CC serie?",
    correcta: "Tracción eléctrica (trenes, tranvías) debido a su altísimo par de arranque",
    incorrectas: [
      "Relojes de alta precisión",
      "Ventiladores domésticos de baja potencia"
    ]
  },
  {
    enunciado: "¿Qué es la 'velocidad base' de un motor CC?",
    correcta: "La velocidad nominal que alcanza el motor con tensión nominal y flujo máximo",
    incorrectas: [
      "La velocidad mínima a la que el motor puede girar",
      "La velocidad de transporte cuando sale de fábrica"
    ]
  },
  {
    enunciado: "¿Qué es el 'Coseno de FI' en un rectificador controlado?",
    correcta: "Depende del ángulo de disparo; cuanto más se retrasa el disparo ($\alpha$), peor es el factor de potencia",
    incorrectas: [
      "Es siempre 1 en corriente continua",
      "Es una constante que depende del fabricante"
    ]
  },
  {
    enunciado: "¿Cómo se detecta el desgaste crítico de las escobillas?",
    correcta: "Mediante inspección visual de la longitud restante o sensores de contacto/microinterruptores en el portaescobillas",
    incorrectas: [
      "Midiendo la tensión de red",
      "Por el color de la pintura del motor"
    ]
  },
  {
    enunciado: "¿Qué es un accionamiento reversible?",
    correcta: "Aquel capaz de invertir el sentido del par y de la velocidad",
    incorrectas: [
      "Aquel que se puede convertir en motor de alterna",
      "Aquel que funciona sin cables"
    ]
  },
  {
    enunciado: "¿Qué es la realimentación por FCEM?",
    correcta: "Uso de la propia tensión del inducido (restando la caída IR) como señal de velocidad en ausencia de tacogeneratriz",
    incorrectas: [
      "Un método de frenado de emergencia",
      "Conectar la salida del motor a la entrada de red"
    ]
  },
  {
    enunciado: "¿Qué componente electrónico se encarga de la conmutación en los variadores modernos de CC de media potencia?",
    correcta: "IGBT o MOSFET de potencia",
    incorrectas: [
      "Lámparas de vacío",
      "Relés electromecánicos"
    ]
  },
  {
    enunciado: "¿Qué es la 'Inductancia Crítica'?",
    correcta: "El valor mínimo de inductancia necesario para que la corriente no sea discontinua para una carga mínima dada",
    incorrectas: [
      "La inductancia que hace que el motor explote",
      "La resistencia de los cables de cobre"
    ]
  },
  {
    enunciado: "En un motor serie, ¿qué relación hay entre el par y la corriente?",
    correcta: "El par es proporcional al cuadrado de la intensidad de armadura ($T \approx k \cdot I_a^2$) hasta la saturación",
    incorrectas: [
      "El par es independiente de la intensidad",
      "El par disminuye al aumentar la intensidad"
    ]
  },
  {
    enunciado: "¿Qué es un sistema Ward-Leonard?",
    correcta: "Sistema clásico de regulación de velocidad mediante un grupo motor-generador para variar la tensión de armadura",
    incorrectas: [
      "Un tipo de PLC de última generación",
      "Un software de simulación de circuitos"
    ]
  },
  {
    enunciado: "¿Cuál es el principal inconveniente de los motores de CC frente a los de inducción de CA?",
    correcta: "El mantenimiento del colector de delgas y las escobillas, y su mayor coste y volumen",
    incorrectas: [
      "Que no tienen par de arranque",
      "Que no se pueden regular en velocidad"
    ]
  }
];