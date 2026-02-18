// 61-electronica-de-potencia-diagnostico-de-averias.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué es el SOA (Safe Operating Area) de un semiconductor de potencia?",
    correcta: "La curva que define los límites máximos de tensión, corriente y potencia que el dispositivo puede soportar simultáneamente sin destruirse",
    incorrectas: [
      "El área física que ocupa el componente sobre el disipador térmico",
      "El tiempo máximo que el dispositivo puede estar en conducción continua"
    ]
  },
  {
    enunciado: "¿Cuál es la principal ventaja de un transistor IGBT frente a un MOSFET en aplicaciones de potencia?",
    correcta: "Combina la facilidad de control por tensión del MOSFET con las bajas pérdidas en conducción (tensión de saturación) del transistor bipolar",
    incorrectas: [
      "Tiene una velocidad de conmutación mucho más alta que el MOSFET",
      "No requiere ningún tipo de circuito de protección (snubber)"
    ]
  },
  {
    enunciado: "En un rectificador controlado por tiristores (SCR), ¿qué efecto tiene el retraso del ángulo de disparo (α)?",
    correcta: "Disminuye el valor medio de la tensión de salida de corriente continua",
    incorrectas: [
      "Aumenta la frecuencia de la señal de salida",
      "Mejora el factor de potencia de la instalación"
    ]
  },
  {
    enunciado: "¿Qué función cumple un circuito 'Snubber' en un convertidor de potencia?",
    correcta: "Limitar las derivadas de tensión (dv/dt) o corriente (di/dt) para proteger al semiconductor de sobretensiones o picos durante la conmutación",
    incorrectas: [
      "Almacenar energía para alimentar el microcontrolador de mando",
      "Filtrar los armónicos de baja frecuencia de la red eléctrica"
    ]
  },
  {
    enunciado: "¿Qué es la modulación por ancho de pulsos (PWM) en un inversor?",
    correcta: "Técnica que varía el ciclo de trabajo de una señal cuadrada de alta frecuencia para sintetizar una onda senoidal de frecuencia variable",
    incorrectas: [
      "Un método para cambiar la polaridad de las baterías automáticamente",
      "Una protección que corta el paso de corriente si hay un cortocircuito"
    ]
  },
  {
    enunciado: "¿Qué indica una medida de resistencia muy baja (cercana a 0 Ω) entre el colector y el emisor de un IGBT en ambos sentidos?",
    correcta: "Que el dispositivo está perforado o en cortocircuito interno",
    incorrectas: [
      "Que el dispositivo está en perfecto estado de funcionamiento",
      "Que la puerta (gate) está recibiendo una señal de disparo adecuada"
    ]
  },
  {
    enunciado: "¿Qué es el fenómeno de 'Latching-up' en un tiristor o IGBT?",
    correcta: "Un estado de conducción incontrolada que no puede interrumpirse mediante la señal de puerta, pudiendo destruir el componente",
    incorrectas: [
      "El tiempo que tarda el componente en enfriarse tras un pico de carga",
      "Un modo de ahorro de energía cuando el motor está parado"
    ]
  },
  {
    enunciado: "¿Qué síntoma presenta un condensador electrolítico de bus de continua cuando está seco o degradado?",
    correcta: "Aumento del rizado (ripple) de tensión y calentamiento excesivo por elevación de su ESR (Resistencia Serie Equivalente)",
    incorrectas: [
      "Aumento de la capacidad medida en microfaradios",
      "Cortocircuito inmediato de todos los diodos del rectificador"
    ]
  },
  {
    enunciado: "¿Para qué se utiliza una sonda diferencial de tensión en el diagnóstico de averías de potencia?",
    correcta: "Para medir con un osciloscopio señales entre dos puntos con potencial elevado respecto a tierra sin causar un cortocircuito",
    incorrectas: [
      "Para medir la temperatura de las uniones semiconductoras",
      "Para comprobar la continuidad de las pistas de cobre"
    ]
  },
  {
    enunciado: "¿Qué es la conmutación suave (Soft-switching)?",
    correcta: "Técnica que hace coincidir la conmutación con el paso por cero de tensión (ZVS) o corriente (ZCS) para reducir pérdidas y EMI",
    incorrectas: [
      "Usar interruptores mecánicos en lugar de electrónicos",
      "Reducir la velocidad del ventilador de refrigeración"
    ]
  },
  {
    enunciado: "¿Cuál es la causa más probable de que un variador de frecuencia dé un error de 'Sobretensión en bus de CC' durante una frenada?",
    correcta: "La energía regenerada por el motor no está siendo disipada por la resistencia de frenado o el bus no tiene suficiente capacidad",
    incorrectas: [
      "Un cortocircuito en los devanados del estátor del motor",
      "Que la tensión de entrada de red es demasiado baja"
    ]
  },
  {
    enunciado: "¿Qué es el 'diodo de libre circulación' (freewheeling diode) en un convertidor DC-DC?",
    correcta: "Diodo en paralelo con la carga inductiva que proporciona un camino a la corriente cuando el interruptor principal se abre",
    incorrectas: [
      "Un diodo que gira físicamente para refrigerarse",
      "El diodo encargado de rectificar la señal de entrada de CA"
    ]
  },
  {
    enunciado: "¿Cómo se verifica un tiristor (SCR) fuera del circuito con un polímetro en modo diodo?",
    correcta: "Debe dar circuito abierto entre ánodo y cátodo en ambos sentidos, y una caída de tensión baja entre puerta y cátodo",
    incorrectas: [
      "Debe pitar siempre entre ánodo y cátodo para indicar continuidad",
      "Debe marcar 0,7V entre ánodo y cátodo en sentido directo"
    ]
  },
  {
    enunciado: "¿Qué efecto produce la inductancia parásita del cableado en conmutaciones de alta velocidad?",
    correcta: "Genera picos de sobretensión transitorios ($V = L \cdot di/dt$) que pueden perforar el aislamiento de los semiconductores",
    incorrectas: [
      "Mejora el rendimiento energético al filtrar el ruido",
      "Reduce la temperatura de funcionamiento del inversor"
    ]
  },
  {
    enunciado: "¿Qué es el aislamiento galvánico en un driver de puerta (gate driver)?",
    correcta: "La separación eléctrica mediante optoacopladores o transformadores de pulsos entre la lógica de control y la etapa de potencia",
    incorrectas: [
      "El uso de una pintura especial para evitar la corrosión",
      "La conexión directa de la masa del microcontrolador al negativo de potencia"
    ]
  },
  {
    enunciado: "¿Cuál es la función de una reactancia de red a la entrada de un convertidor?",
    correcta: "Limitar los picos de corriente de entrada y reducir la distorsión armónica inyectada a la red",
    incorrectas: [
      "Convertir la corriente alterna en corriente continua",
      "Aumentar la tensión de salida para que el motor corra más"
    ]
  },
  {
    enunciado: "¿Qué instrumento es fundamental para observar la forma de onda de la corriente de puerta de un MOSFET?",
    correcta: "Osciloscopio con sonda de corriente (tipo Hall o Rogowski)",
    incorrectas: [
      "Analizador de espectros de radiofrecuencia",
      "Multímetro digital con función de valor eficaz (TRMS)"
    ]
  },
  {
    enunciado: "¿Qué ocurre si se dispara un tiristor cuando está polarizado en inverso?",
    correcta: "No entrará en conducción y puede dañarse la unión de puerta si la corriente es excesiva",
    incorrectas: [
      "Conducirá normalmente pero con la polaridad invertida",
      "Explotará inmediatamente independientemente de la corriente"
    ]
  },
  {
    enunciado: "En un rectificador trifásico de onda completa, ¿cuántos diodos (o tiristores) se necesitan?",
    correcta: "6 elementos",
    incorrectas: [
      "3 elementos",
      "12 elementos"
    ]
  },
  {
    enunciado: "¿Qué parámetro de un MOSFET define su pérdida de potencia en estado 'ON'?",
    correcta: "La resistencia entre drenador y fuente en conducción ($R_{DS(on)}$)",
    incorrectas: [
      "La capacidad de la puerta (Gate Charge)",
      "La tensión umbral de disparo ($V_{GS(th)}$)"
    ]
  },
  {
    enunciado: "¿Qué es un convertidor Buck?",
    correcta: "Un convertidor DC-DC reductor de tensión",
    incorrectas: [
      "Un convertidor que eleva la tensión de salida",
      "Un inversor que genera corriente alterna trifásica"
    ]
  },
  {
    enunciado: "¿Qué es un convertidor Boost?",
    correcta: "Un convertidor DC-DC elevador de tensión",
    incorrectas: [
      "Un sistema de frenado regenerativo",
      "Un cargador de baterías de carga ultrarrápida"
    ]
  },
  {
    enunciado: "¿Qué causa el ruido acústico (pitido) en los motores alimentados por variadores?",
    correcta: "La frecuencia de conmutación de los transistores (carrier frequency) que provoca vibraciones mecánicas por magnetostricción",
    incorrectas: [
      "El roce de las escobillas del motor contra el colector",
      "Que el aire del ventilador choca contra las bobinas"
    ]
  },
  {
    enunciado: "¿Qué es la 'Corriente de Mantenimiento' ($I_H$) en un tiristor?",
    correcta: "La corriente mínima de ánodo necesaria para que el tiristor permanezca en conducción tras retirar el pulso de puerta",
    incorrectas: [
      "La corriente de carga de las baterías de respaldo",
      "La intensidad máxima que soporta el componente de forma continua"
    ]
  },
  {
    enunciado: "¿Qué indica un código de error 'Fallo de Tierra' (Ground Fault) en un variador?",
    correcta: "Que existe una derivación de corriente desde una de las fases de salida hacia la carcasa o el cable de protección",
    incorrectas: [
      "Que se ha ido la luz en todo el edificio",
      "Que el motor está girando en sentido contrario al programado"
    ]
  },
  {
    enunciado: "¿Para qué sirve el 'Tiempo Muerto' (Dead Time) en un puente en H o medio puente?",
    correcta: "Para asegurar que un transistor se ha apagado completamente antes de encender el opuesto, evitando un cortocircuito de rama",
    incorrectas: [
      "Para dejar descansar la electrónica y que no se caliente",
      "Es el tiempo que tarda el motor en pararse por inercia"
    ]
  },
  {
    enunciado: "¿Qué es la distorsión armónica total (THD)?",
    correcta: "La relación entre la suma de las potencias de todos los componentes armónicos y la potencia de la frecuencia fundamental",
    incorrectas: [
      "El número de veces que la señal cruza por cero en un segundo",
      "La diferencia de fase entre la tensión y la corriente"
    ]
  },
  {
    enunciado: "¿Qué componente se utiliza típicamente para medir la corriente en un lazo de control de potencia de bajo coste?",
    correcta: "Resistencia Shunt",
    incorrectas: [
      "Transformador de tensión",
      "Termistor NTC"
    ]
  },
  {
    enunciado: "¿Qué es un Cicloconvertidor?",
    correcta: "Un convertidor directo de CA a CA de distinta frecuencia sin pasar por un bus de corriente continua",
    incorrectas: [
      "Un cargador de bicicletas eléctricas",
      "Un inversor que solo funciona con energía solar"
    ]
  },
  {
    enunciado: "¿Cómo afecta el aumento de la frecuencia de conmutación al diseño del filtro de salida?",
    correcta: "Permite utilizar componentes (inductancias y condensadores) de menor tamaño y peso",
    incorrectas: [
      "Obliga a usar filtros mucho más grandes y costosos",
      "No tiene ninguna influencia sobre el filtrado"
    ]
  },
  {
    enunciado: "¿Qué es la 'Resistencia Térmica Unión-Carcasa' ($R_{thJC}$)?",
    correcta: "La facilidad con la que el calor fluye desde el interior del chip hacia la cápsula exterior del componente",
    incorrectas: [
      "La resistencia eléctrica del cable de alimentación",
      "La temperatura máxima a la que se funde el estaño"
    ]
  },
  {
    enunciado: "¿Qué es el Factor de Potencia de desplazamiento?",
    correcta: "El coseno del ángulo de desfase entre la tensión fundamental y la corriente fundamental",
    incorrectas: [
      "La relación entre la potencia real y la potencia imaginaria",
      "La eficiencia del ventilador de refrigeración"
    ]
  },
  {
    enunciado: "¿Qué es una fuente de alimentación conmutada (SMPS)?",
    correcta: "Una fuente que utiliza semiconductores en conmutación y alta frecuencia para convertir energía de forma eficiente",
    incorrectas: [
      "Una fuente que usa un transformador pesado a 50Hz y regulación lineal",
      "Una fuente que solo sirve para alimentar ordenadores"
    ]
  },
  {
    enunciado: "¿Cuál es la función del optoacoplador en una fuente conmutada?",
    correcta: "Transmitir la señal de feedback desde la salida secundaria hacia el control primario manteniendo el aislamiento",
    incorrectas: [
      "Iluminar el interior de la fuente para ver averías",
      "Actuar como un fusible óptico que se funde si hay mucha luz"
    ]
  },
  {
    enunciado: "¿Qué es el 'desaturación' (DESAT) en la protección de un IGBT?",
    correcta: "Un método de protección que detecta cortocircuitos monitorizando la tensión colector-emisor cuando el transistor está encendido",
    incorrectas: [
      "Limpiar el componente de exceso de grasa térmica",
      "Aumentar la corriente de base para que el transistor sature más"
    ]
  },
  {
    enunciado: "¿Qué es la interferencia electromagnética (EMI)?",
    correcta: "Perturbaciones eléctricas generadas por las rápidas conmutaciones que pueden afectar a otros equipos electrónicos",
    incorrectas: [
      "El sonido que hacen los motores al girar",
      "La radiación ultravioleta de los diodos LED"
    ]
  },
  {
    enunciado: "¿Qué es un Triac?",
    correcta: "Un dispositivo semiconductor de tres terminales que puede conducir corriente en ambos sentidos (bidireccional)",
    incorrectas: [
      "Un tiristor que solo funciona con corriente continua",
      "Un tipo de fusible de acción ultrarrápida"
    ]
  },
  {
    enunciado: "¿Cuál es la causa habitual de la explosión de un varistor (MOV) en la entrada de potencia?",
    correcta: "Un pico de sobretensión transitoria en la red eléctrica que superó su capacidad de absorción de energía",
    incorrectas: [
      "Que el motor consumía demasiada corriente",
      "Que el ventilador de refrigeración se detuvo"
    ]
  },
  {
    enunciado: "¿Qué es el 'Duty Cycle' (Ciclo de trabajo)?",
    correcta: "La proporción de tiempo que un componente está activado frente al tiempo total del periodo de conmutación",
    incorrectas: [
      "El número de horas que trabaja un operario en la fábrica",
      "El tiempo que tarda una batería en cargarse al 100%"
    ]
  },
  {
    enunciado: "¿Para qué sirve el análisis de la 'Constelación' en inversores trifásicos?",
    correcta: "Para verificar la correcta secuencia y temporización de los vectores espaciales de conmutación (SVPWM)",
    incorrectas: [
      "Para orientar las placas solares según las estrellas",
      "Para saber cuántos motores hay conectados en paralelo"
    ]
  }
];