// 57-control-secuencial-neumatico.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué es un mando secuencial en neumática?",
    correcta: "Un sistema donde las fases de trabajo se suceden en un orden preestablecido, iniciándose cada una tras la confirmación de finalización de la anterior",
    incorrectas: [
      "Un mando donde todos los cilindros se mueven simultáneamente",
      "Un sistema manual donde el operario decide el orden de los movimientos en tiempo real"
    ]
  },
  {
    enunciado: "En un diagrama de fase-trayectoria, ¿qué representan los ejes?",
    correcta: "El eje vertical representa el espacio o posición de los actuadores y el eje horizontal representa el tiempo o la fase de la secuencia",
    incorrectas: [
      "El eje vertical representa la presión y el horizontal el caudal",
      "El eje vertical representa el número de cilindros y el horizontal la fuerza en Newtons"
    ]
  },
  {
    enunciado: "¿Para qué se utiliza el método de 'Anulación de señales permanentes'?",
    correcta: "Para resolver conflictos de señales o bloqueos en válvulas de memoria cuando se activan simultáneamente por ambos lados en una secuencia",
    incorrectas: [
      "Para ahorrar aire comprimido durante las paradas de emergencia",
      "Para aumentar la velocidad de retroceso de los cilindros de simple efecto"
    ]
  },
  {
    enunciado: "¿Cuál es la característica principal del método de Cascada?",
    correcta: "Divide la secuencia en grupos para evitar señales contradictorias, utilizando válvulas inversoras (4/2 o 5/2) para alimentar cada grupo",
    incorrectas: [
      "Utiliza un PLC para controlar todas las electroválvulas mediante software",
      "Permite que un mismo grupo alimente a todos los cilindros a la vez sin restricciones"
    ]
  },
  {
    enunciado: "En el método de Cascada, ¿cuántas válvulas inversoras se necesitan para 'n' grupos?",
    correcta: "n - 1 válvulas",
    incorrectas: [
      "n válvulas",
      "n + 1 válvulas"
    ]
  },
  {
    enunciado: "¿Qué es un captador de información en un circuito secuencial?",
    correcta: "Un dispositivo (como un final de carrera o sensor de proximidad) que detecta el estado del actuador para permitir el siguiente paso",
    incorrectas: [
      "Una válvula de seguridad que impide el exceso de presión",
      "El depósito acumulador de aire comprimido"
    ]
  },
  {
    enunciado: "En la técnica de Paso a Paso (Step-by-Step), ¿cuál es la función de cada módulo?",
    correcta: "Cada módulo representa un paso de la secuencia; activa el siguiente, realiza su trabajo y se desactiva al completarse el posterior",
    incorrectas: [
      "Cada módulo sirve para regular la velocidad de un cilindro distinto",
      "Los módulos solo sirven para filtrar el aire y lubricar el circuito"
    ]
  },
  {
    enunciado: "¿Qué ventaja tiene el método Paso a Paso frente al de Cascada?",
    correcta: "Mayor facilidad de diseño y diagnóstico de averías, además de permitir secuencias más largas y complejas sin pérdida de presión",
    incorrectas: [
      "Es mucho más barato porque no utiliza válvulas de memoria",
      "No requiere el uso de finales de carrera para funcionar"
    ]
  },
  {
    enunciado: "¿Qué representa la notación 'A+ B+ A- B-' en una secuencia?",
    correcta: "Salida del cilindro A, salida del B, retroceso de A y finalmente retroceso de B",
    incorrectas: [
      "Aumento de presión en A y B, y disminución de presión en ambos después",
      "Conexión en serie de los cilindros A y B"
    ]
  },
  {
    enunciado: "¿Qué es una válvula de simultaneidad (función Y)?",
    correcta: "Una válvula que solo da salida si recibe presión por sus dos entradas simultáneamente",
    incorrectas: [
      "Una válvula que da salida si recibe presión por cualquiera de sus dos entradas",
      "Una válvula que permite el paso de aire en un solo sentido"
    ]
  },
  {
    enunciado: "¿Cuál es la función de una válvula selectora (función O)?",
    correcta: "Permite la salida de aire si recibe señal por la entrada izquierda, por la derecha o por ambas",
    incorrectas: [
      "Bloquea el aire si recibe dos señales al mismo tiempo",
      "Regula el caudal de aire que entra al cilindro"
    ]
  },
  {
    enunciado: "¿Qué elemento neumático se utiliza para generar un retraso temporal en una secuencia?",
    correcta: "Temporizador neumático (combinación de una válvula reguladora, un depósito y una válvula de pilotaje)",
    incorrectas: [
      "Cilindro de doble efecto con amortiguación ajustable",
      "Válvula de escape rápido"
    ]
  },
  {
    enunciado: "¿Qué es un contador neumático?",
    correcta: "Un dispositivo que emite una señal tras recibir un número predeterminado de impulsos neumáticos",
    incorrectas: [
      "Un manómetro que cuenta la presión en bares",
      "Un caudalímetro digital conectado a una pantalla"
    ]
  },
  {
    enunciado: "¿Qué función cumple la válvula 5/2 biestable en un mando secuencial?",
    correcta: "Actúa como memoria para mantener la posición del actuador hasta recibir una señal de sentido opuesto",
    incorrectas: [
      "Controlar la velocidad de salida del vástago",
      "Garantizar que el aire esté seco y limpio"
    ]
  },
  {
    enunciado: "En un diseño Paso a Paso, ¿qué condición debe cumplirse para que se active el paso 'n'?",
    correcta: "Que el paso 'n-1' esté activo y que el captador del movimiento anterior haya enviado señal",
    incorrectas: [
      "Que todos los pasos anteriores estén desactivados",
      "Que el operario pulse el botón de marcha en cada fase"
    ]
  },
  {
    enunciado: "¿Qué es el mando bimanual en seguridad neumática?",
    correcta: "Un sistema que obliga al operario a pulsar dos botones alejados simultáneamente para iniciar el ciclo, evitando riesgos en las manos",
    incorrectas: [
      "Un sistema donde se usan las dos manos para mover el cilindro físicamente",
      "Un mando que permite controlar dos cilindros a la vez con una palanca"
    ]
  },
  {
    enunciado: "¿Para qué sirve una válvula de escape rápido?",
    correcta: "Para evacuar el aire del cilindro directamente a la atmósfera y aumentar así la velocidad del vástago",
    incorrectas: [
      "Para frenar el cilindro suavemente al final del recorrido",
      "Para purgar el agua condensada en las tuberías"
    ]
  },
  {
    enunciado: "¿Qué es un ciclo continuo en control secuencial?",
    correcta: "Una configuración donde la secuencia se repite indefinidamente mientras no se pulse el botón de parada",
    incorrectas: [
      "Un ciclo que nunca se detiene, incluso si se corta la alimentación de aire",
      "Un movimiento extremadamente lento de los actuadores"
    ]
  },
  {
    enunciado: "¿Qué significa que una señal sea 'crítica' en un circuito secuencial?",
    correcta: "Es aquella que permanece activa y bloquea el movimiento opuesto de una válvula biestable en la siguiente fase",
    incorrectas: [
      "Que la presión es tan alta que puede romper la tubería",
      "Que la señal viene de un PLC de seguridad"
    ]
  },
  {
    enunciado: "¿Cuál es la función de la unidad de mantenimiento (FRL)?",
    correcta: "Filtrar, Regular la presión y Lubricar el aire comprimido para proteger los componentes secuenciales",
    incorrectas: [
      "Enfriar el aire tras salir del compresor",
      "Almacenar el aire a alta presión para emergencias"
    ]
  },
  {
    enunciado: "¿Qué es un esquema de mando?",
    correcta: "La parte del circuito que procesa la lógica y las señales de los captadores",
    incorrectas: [
      "La parte del circuito que realiza el trabajo físico mediante actuadores",
      "El plano de los cimientos donde se instala la máquina"
    ]
  },
  {
    enunciado: "¿Qué es un esquema de potencia?",
    correcta: "El conjunto de válvulas de distribución y actuadores que ejecutan los movimientos",
    incorrectas: [
      "El cableado eléctrico que alimenta al compresor",
      "El gráfico que muestra el consumo de energía de la planta"
    ]
  },
  {
    enunciado: "En la identificación de componentes según ISO 1219, ¿qué indica el primer número (ej. 1.2)?",
    correcta: "El número del grupo o cadena de mando al que pertenece el componente",
    incorrectas: [
      "El número de orificios de la válvula",
      "La presión máxima soportada"
    ]
  },
  {
    enunciado: "¿Qué es el pilotaje neumático?",
    correcta: "El uso de aire a presión para conmutar la posición de una válvula de control",
    incorrectas: [
      "El uso de electricidad para mover una válvula",
      "El guiado manual de un vástago por un raíl"
    ]
  },
  {
    enunciado: "¿Qué función tiene una válvula 3/2 normalmente cerrada (NC)?",
    correcta: "En reposo no permite el paso de aire; al activarse, comunica la presión con la utilización",
    incorrectas: [
      "Permite el paso de aire siempre, excepto cuando se activa",
      "Tiene tres posiciones y dos estados de memoria"
    ]
  },
  {
    enunciado: "¿Qué es la contrapresión en un cilindro?",
    correcta: "La presión residual en la cámara que se está vaciando, que puede usarse para regular la velocidad",
    incorrectas: [
      "La presión que ejerce la carga sobre el vástago",
      "La presión de seguridad que salta al superar los 10 bares"
    ]
  },
  {
    enunciado: "¿Para qué se utilizan los finales de carrera neumáticos de rodillo escamoteable?",
    correcta: "Para emitir un impulso corto de aire y evitar señales permanentes que bloqueen la secuencia",
    incorrectas: [
      "Para detectar metales a distancia sin contacto físico",
      "Para frenar el cilindro en caso de fallo eléctrico"
    ]
  },
  {
    enunciado: "¿Qué es un diagrama de mando en neumática?",
    correcta: "Un gráfico que muestra el estado de activación de las señales de entrada y de las válvulas en cada fase",
    incorrectas: [
      "Un dibujo artístico de la máquina acabada",
      "Un gráfico de barras con el presupuesto de los materiales"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a un cilindro con amortiguación regulable?",
    correcta: "Dispone de un dispositivo al final de la carrera que reduce la velocidad del vástago para evitar impactos violentos",
    incorrectas: [
      "Tiene un muelle interno que lo hace volver siempre al reposo",
      "Su velocidad es constante durante todo el recorrido"
    ]
  },
  {
    enunciado: "¿Qué es una válvula biestable?",
    correcta: "Aquella que mantiene su posición tras la desaparición de la señal de mando; necesita otra señal distinta para volver",
    incorrectas: [
      "Aquella que vuelve a su posición original mediante un muelle",
      "Aquella que solo tiene una entrada y una salida"
    ]
  },
  {
    enunciado: "¿Qué es la lógica negativa en neumática?",
    correcta: "Trabajar con señales basadas en la ausencia de presión para activar funciones",
    incorrectas: [
      "Un error en el diseño del circuito que hace que funcione al revés",
      "Conectar las válvulas al revés de lo habitual"
    ]
  },
  {
    enunciado: "En un secuenciador neumático, ¿qué es la señal de 'Reset'?",
    correcta: "Una señal que pone todos los pasos en su estado inicial (reposo), generalmente desactivados",
    incorrectas: [
      "La señal que aumenta la presión de trabajo al doble",
      "El botón que vacía el agua del compresor"
    ]
  },
  {
    enunciado: "¿Qué es un sensor de proximidad tipo 'Reed'?",
    correcta: "Un interruptor magnético que se activa cuando el imán del émbolo del cilindro pasa cerca de él",
    incorrectas: [
      "Un sensor que mide la calidad del aire comprimido",
      "Un dispositivo que detecta fugas de aire por ultrasonidos"
    ]
  },
  {
    enunciado: "¿Cuál es la función de una válvula reguladora de caudal unidireccional?",
    correcta: "Controlar la velocidad del actuador en un sentido, permitiendo el paso libre en el sentido contrario",
    incorrectas: [
      "Limitar la presión máxima del circuito",
      "Dividir el flujo de aire en dos partes iguales"
    ]
  },
  {
    enunciado: "¿Qué es el 'solape de señales'?",
    correcta: "Situación donde dos señales opuestas llegan a la vez a una válvula de memoria, impidiendo el movimiento del actuador",
    incorrectas: [
      "Cuando dos tubos neumáticos se cruzan en el panel",
      "Cuando el aire sale por el escape con mucho ruido"
    ]
  },
  {
    enunciado: "¿Qué función tiene el silenciador en los escapes de las válvulas?",
    correcta: "Reducir el nivel de ruido del aire al salir a la atmósfera y evitar la entrada de suciedad",
    incorrectas: [
      "Aumentar la presión de salida",
      "Filtrar el aceite del aire de escape"
    ]
  },
  {
    enunciado: "En el diseño de circuitos, ¿qué significa 'condición marginal'?",
    correcta: "Requisitos adicionales como el ciclo único, ciclo continuo o parada de emergencia que debe cumplir la secuencia",
    incorrectas: [
      "Que el circuito funciona con muy poca presión",
      "Que los componentes son de baja calidad"
    ]
  },
  {
    enunciado: "¿Qué es la seguridad positiva en un circuito secuencial?",
    correcta: "Diseño que garantiza que, ante un fallo de energía o presión, el sistema pasa a un estado seguro",
    incorrectas: [
      "Un sistema que siempre funciona bien",
      "Poner muchos carteles de advertencia en la máquina"
    ]
  },
  {
    enunciado: "¿Qué es un diagrama funcional (Grafcet)?",
    correcta: "Un modelo gráfico de representación de comportamientos de sistemas secuenciales mediante etapas, transiciones y acciones",
    incorrectas: [
      "Un plano de la instalación eléctrica de la fábrica",
      "Un gráfico de consumo de aire por hora"
    ]
  },
  {
    enunciado: "¿Qué ventaja principal ofrece el control neumático puro frente al electroneumático en ciertos entornos?",
    correcta: "Seguridad intrínseca en ambientes explosivos o inflamables (ATEX) y resistencia a interferencias electromagnéticas",
    incorrectas: [
      "Es mucho más rápido en la transmisión de señales a larga distancia",
      "Es más fácil de programar mediante un ordenador"
    ]
  }
];