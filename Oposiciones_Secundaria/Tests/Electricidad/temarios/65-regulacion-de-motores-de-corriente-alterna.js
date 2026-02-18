// 65-regulacion-de-motores-de-corriente-alterna.js
var PREGUNTAS = [
  {
    enunciado: "¿Cuál es el principio fundamental del control escalar (V/f) en motores de inducción?",
    correcta: "Mantener constante el flujo magnético en el entrehierro variando proporcionalmente la tensión y la frecuencia",
    incorrectas: [
      "Aumentar la tensión al cuadrado de la frecuencia para maximizar el par",
      "Variar únicamente la frecuencia manteniendo la tensión nominal constante"
    ]
  },
  {
    enunciado: "¿Qué ocurre en un motor de CA si operamos por encima de la frecuencia nominal (zona de sobrevelocidad)?",
    correcta: "Entramos en la zona de potencia constante, donde el flujo se debilita y el par máximo disponible disminuye",
    incorrectas: [
      "El motor aumenta su par de forma exponencial",
      "La tensión sigue subiendo por encima de los límites del aislamiento"
    ]
  },
  {
    enunciado: "¿En qué se basa el Control Vectorial de Campo Orientado (FOC)?",
    correcta: "En desacoplar matemáticamente la corriente del estátor en dos componentes: una que crea el flujo y otra que genera el par, emulando el comportamiento de un motor CC",
    incorrectas: [
      "En medir la velocidad mediante un tacómetro mecánico conectado al eje",
      "En variar el número de polos del motor mediante contactores"
    ]
  },
  {
    enunciado: "¿Qué es el deslizamiento (slip) en un motor asíncrono?",
    correcta: "La diferencia relativa entre la velocidad de sincronismo del campo magnético y la velocidad real del rotor",
    incorrectas: [
      "La pérdida de fricción en los rodamientos del motor",
      "El ángulo de desfase entre la tensión de la fase R y la fase S"
    ]
  },
  {
    enunciado: "¿Qué función cumple el frenado por inyección de corriente continua?",
    correcta: "Crear un campo magnético estático en el estátor que induce corrientes en el rotor para generar un par de frenado rápido",
    incorrectas: [
      "Recargar las baterías del variador durante la parada",
      "Invertir el sentido de giro del motor de forma instantánea"
    ]
  },
  {
    enunciado: "¿Qué es el Control Directo de Par (DTC)?",
    correcta: "Una estrategia de control que selecciona directamente los estados de conmutación del inversor para mantener el par y el flujo dentro de bandas de histéresis",
    incorrectas: [
      "Un sistema manual donde el operario ajusta el par mediante un potenciómetro",
      "Un método que solo se puede aplicar a motores con escobillas"
    ]
  },
  {
    enunciado: "¿Cuál es la causa principal del deterioro de rodamientos en motores alimentados por variadores de frecuencia?",
    correcta: "Las corrientes de eje inducidas por la tensión de modo común y las altas dV/dt de la conmutación PWM",
    incorrectas: [
      "La falta de lubricación por trabajar a bajas revoluciones",
      "El exceso de vibración por un equilibrado deficiente del rotor"
    ]
  },
  {
    enunciado: "¿Para qué sirve la compensación de deslizamiento en un variador escalar?",
    correcta: "Para aumentar ligeramente la frecuencia de salida cuando aumenta la carga, manteniendo la velocidad mecánica constante",
    incorrectas: [
      "Para reducir el ruido acústico del motor",
      "Para evitar que el motor gire en sentido contrario"
    ]
  },
  {
    enunciado: "¿Qué es el 'Boost' de tensión a bajas frecuencias?",
    correcta: "Un incremento adicional de tensión para compensar la caída IR en el estátor y mantener el par de arranque",
    incorrectas: [
      "Un ventilador extra que se activa al arrancar",
      "Una sobrecarga temporal permitida del 500%"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a un motor síncrono de imanes permanentes (PMSM) frente a uno de inducción?",
    correcta: "Su rotor gira exactamente a la velocidad de sincronismo sin necesidad de corriente de magnetización, ofreciendo mayor eficiencia",
    incorrectas: [
      "Requiere siempre de un sistema de arranque estrella-triángulo",
      "Es mucho más barato pero tiene un volumen mucho mayor"
    ]
  },
  {
    enunciado: "¿Qué es un variador de frecuencia regenerativo?",
    correcta: "Aquel que dispone de un frontal activo (AFE) para devolver la energía de frenado a la red eléctrica en lugar de disiparla en calor",
    incorrectas: [
      "Un equipo que se repara solo tras una avería",
      "Un variador que utiliza exclusivamente energía solar"
    ]
  },
  {
    enunciado: "¿Cómo se calcula la velocidad de sincronismo ($n_s$)?",
    correcta: "$n_s = (60 \cdot f) / p$, donde $f$ es la frecuencia y $p$ es el número de pares de polos",
    incorrectas: [
      "$n_s = f \cdot p / 60$",
      "$n_s = 120 \cdot p / f$"
    ]
  },
  {
    enunciado: "¿Qué problema introducen los cables excesivamente largos entre el variador y el motor?",
    correcta: "Fenómenos de ondas reflejadas que pueden duplicar la tensión en los bornes del motor, dañando el aislamiento",
    incorrectas: [
      "Que la señal de radiofrecuencia se pierda por el camino",
      "Que el motor consuma menos energía de la necesaria"
    ]
  },
  {
    enunciado: "¿Qué es el 'Auto-tuning' en un variador de frecuencia?",
    correcta: "Un procedimiento automático donde el variador mide la resistencia, inductancias y constantes del motor para optimizar el modelo de control",
    incorrectas: [
      "Un sistema para sintonizar emisoras de radio FM en el panel de control",
      "El ajuste del color de la pantalla del terminal de operador"
    ]
  },
  {
    enunciado: "¿Qué tipo de modulación es la más utilizada en los inversores de los variadores de CA?",
    correcta: "SVPWM (Space Vector Pulse Width Modulation)",
    incorrectas: [
      "Modulación de Amplitud (AM)",
      "Modulación por saltos de frecuencia (FHSS)"
    ]
  },
  {
    enunciado: "¿Qué es un motor de reluctancia variable?",
    correcta: "Un motor cuyo par se genera por la tendencia del rotor a alinearse en la posición de mínima reluctancia magnética",
    incorrectas: [
      "Un motor que se resiste a girar si no tiene mucha carga",
      "Un motor de corriente continua sin escobillas"
    ]
  },
  {
    enunciado: "¿Qué indica un código de error de 'I2t' en un variador?",
    correcta: "Sobrecarga térmica del motor calculada mediante un modelo matemático que integra el cuadrado de la corriente en el tiempo",
    incorrectas: [
      "Fallo en la comunicación con el PLC externo",
      "Que la tensión de entrada es demasiado alta"
    ]
  },
  {
    enunciado: "¿Qué es el lazo de velocidad en un control vectorial?",
    correcta: "El lazo externo que compara la consigna de velocidad con la real (o estimada) para generar la consigna de par",
    incorrectas: [
      "Un cable físico que une el motor con el variador",
      "El tiempo que tarda el motor en dar una vuelta completa"
    ]
  },
  {
    enunciado: "¿Qué ventaja tiene el control sensorial (con encoder) sobre el control 'sensorless'?",
    correcta: "Permite un control de par preciso a velocidad cero y una respuesta dinámica mucho más rápida",
    incorrectas: [
      "Es mucho más barato y sencillo de instalar",
      "Evita que el motor se caliente por encima de 40°C"
    ]
  },
  {
    enunciado: "¿Qué función tiene el bus de continua en un variador?",
    correcta: "Servir de almacén de energía intermedia entre el rectificador de entrada y el inversor de salida",
    incorrectas: [
      "Conectar el variador con el sistema informático de la fábrica",
      "Alimentar las luces de emergencia del cuadro eléctrico"
    ]
  },
  {
    enunciado: "¿Qué es el 'Cogging torque'?",
    correcta: "El par pulsante debido a la interacción magnética entre los imanes del rotor y las ranuras del estátor, perceptible a bajas velocidades",
    incorrectas: [
      "El par máximo que puede entregar el motor antes de quemarse",
      "La fuerza que hace el ventilador contra el aire"
    ]
  },
  {
    enunciado: "En un motor de rotor devanado, ¿para qué se usan las resistencias rotóricas?",
    correcta: "Para limitar la corriente de arranque y aumentar el par de arranque desplazando el par máximo",
    incorrectas: [
      "Para calentar el motor en ambientes fríos",
      "Para medir la velocidad de giro mediante la ley de Ohm"
    ]
  },
  {
    enunciado: "¿Qué es un convertidor de matriz (Matrix Converter)?",
    correcta: "Un convertidor CA-CA directo sin condensadores de bus de continua, utilizando interruptores bidireccionales",
    incorrectas: [
      "Un software para gestionar múltiples motores desde una tablet",
      "Un tipo de motor que tiene forma cuadrada"
    ]
  },
  {
    enunciado: "¿Cómo afecta la altitud a la potencia nominal de un variador?",
    correcta: "Se debe aplicar un factor de reducción (derating) debido a la menor densidad del aire para la refrigeración y el aislamiento",
    incorrectas: [
      "La potencia aumenta porque hay menos gravedad",
      "No afecta en absoluto, el variador es estanco"
    ]
  },
  {
    enunciado: "¿Qué es el 'Chopper' de frenado?",
    correcta: "Un transistor que conmuta una resistencia en paralelo con el bus de CC para disipar el exceso de energía cuando sube la tensión",
    incorrectas: [
      "Un dispositivo que corta el cable en caso de emergencia",
      "El ventilador principal de refrigeración del equipo"
    ]
  },
  {
    enunciado: "¿Qué es la clase de aislamiento de un motor (ej. Clase F)?",
    correcta: "Define la temperatura máxima que puede soportar el aislamiento de los devanados sin degradarse prematuramente",
    incorrectas: [
      "La dureza del acero utilizado en el eje",
      "El grado de protección contra el polvo y el agua"
    ]
  },
  {
    enunciado: "¿Qué es un filtro dV/dt?",
    correcta: "Un filtro a la salida del variador que suaviza los flancos de subida de la tensión para proteger el aislamiento del motor",
    incorrectas: [
      "Un filtro que limpia el aceite de los rodamientos",
      "Un software que elimina los errores de programación"
    ]
  },
  {
    enunciado: "¿Qué indica el factor de servicio de un motor?",
    correcta: "El porcentaje de sobrecarga que el motor puede soportar de forma continua bajo condiciones nominales",
    incorrectas: [
      "El número de veces que el motor puede arrancar por hora",
      "La cantidad de años que tiene de garantía"
    ]
  },
  {
    enunciado: "¿Qué es el par de desenganche (breakdown torque)?",
    correcta: "El par máximo que un motor de inducción puede desarrollar antes de perder estabilidad y detenerse",
    incorrectas: [
      "El par necesario para romper el eje del motor",
      "El par que tiene el motor cuando está desconectado"
    ]
  },
  {
    enunciado: "¿Para qué sirve un filtro senoidal a la salida del variador?",
    correcta: "Para convertir la señal PWM en una onda senoidal casi perfecta, permitiendo cables muy largos y motores antiguos",
    incorrectas: [
      "Para aumentar la tensión de salida hasta los 1000V",
      "Para que el motor consuma corriente continua"
    ]
  },
  {
    enunciado: "¿Qué es la 'Frecuencia de Portadora' (Carrier Frequency)?",
    correcta: "La frecuencia a la que conmutan los transistores del inversor para crear la forma de onda de salida",
    incorrectas: [
      "La frecuencia de la red eléctrica (50/60 Hz)",
      "La velocidad de giro del motor en hercios"
    ]
  },
  {
    enunciado: "¿Qué ocurre con el par de un motor si la frecuencia baja pero la tensión se mantiene nominal?",
    correcta: "El flujo aumenta excesivamente, saturando el núcleo magnético y provocando un calentamiento peligroso",
    incorrectas: [
      "El motor entrega mucho más par sin calentarse",
      "La velocidad aumenta de forma incontrolada"
    ]
  },
  {
    enunciado: "¿Qué es el modo 'Flying Start' (Arranque al vuelo)?",
    correcta: "Función que permite al variador sincronizarse con un motor que ya está girando por inercia antes de tomar el control",
    incorrectas: [
      "Un modo para que el motor funcione en aviones",
      "Un arranque a máxima potencia desde el primer milisegundo"
    ]
  },
  {
    enunciado: "¿Qué es un variador de 'Bajo Armónico'?",
    correcta: "Aquel que utiliza tecnologías (como puentes de 12 pulsos o filtros activos) para reducir la contaminación de la red",
    incorrectas: [
      "Un equipo que no hace ruido al funcionar",
      "Un variador que solo tiene un condensador de bus"
    ]
  },
  {
    enunciado: "¿Qué es el control 'Torque Control'?",
    correcta: "Modo donde el variador regula la corriente para mantener un par fijo, independientemente de la velocidad alcanzada",
    incorrectas: [
      "Un sistema de seguridad que bloquea el eje",
      "Un método para pesar la carga del motor"
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre un inversor de 2 niveles y uno multinivel?",
    correcta: "El multinivel utiliza más semiconductores para generar una onda de salida con más pasos, reduciendo armónicos y dV/dt",
    incorrectas: [
      "El de 2 niveles solo sirve para motores de 2 caballos",
      "El multinivel solo funciona con corriente continua"
    ]
  },
  {
    enunciado: "¿Qué es el factor de potencia total en un variador?",
    correcta: "Incluye tanto el factor de potencia de desplazamiento como el factor de distorsión debido a los armónicos",
    incorrectas: [
      "Es siempre igual al coseno de fi del motor",
      "Es una medida de la fuerza del imán del rotor"
    ]
  },
  {
    enunciado: "¿Qué es la reactancia de salida?",
    correcta: "Una bobina instalada entre el variador y el motor para reducir los picos de corriente y proteger los transistores",
    incorrectas: [
      "Una resistencia que frena el motor en caso de emergencia",
      "El condensador que filtra el bus de continua"
    ]
  },
  {
    enunciado: "¿Qué es el 'Safe Torque Off' (STO)?",
    correcta: "Una función de seguridad que corta la alimentación a los transistores de potencia para evitar un arranque inesperado",
    incorrectas: [
      "Un botón que apaga la pantalla del variador",
      "Un modo de ahorro de energía por la noche"
    ]
  },
  {
    enunciado: "¿Cuál es la eficiencia típica de un variador de frecuencia moderno?",
    correcta: "Entre el 95% y el 98%",
    incorrectas: [
      "Alrededor del 50%",
      "Exactamente el 100%"
    ]
  }
];