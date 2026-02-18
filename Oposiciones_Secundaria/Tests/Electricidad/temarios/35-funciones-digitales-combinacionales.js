// 35-funciones-digitales-combinacionales.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué caracteriza a un circuito digital combinacional?",
    correcta: "Que el valor de sus salidas en un instante dado depende exclusivamente del valor de sus entradas en ese mismo instante (no tiene memoria de estados pasados)",
    incorrectas: [
      "Que sus salidas dependen de entradas anteriores",
      "Que tiene un reloj interno para sincronizarse"
    ]
  },
  {
    enunciado: "¿Qué función lógica realiza una puerta AND?",
    correcta: "Su salida es 1 (TRUE) solo si TODAS sus entradas son 1",
    incorrectas: [
      "Su salida es 1 si alguna entrada es 1",
      "Su salida es la inversa de la entrada"
    ]
  },
  {
    enunciado: "¿Qué función lógica realiza una puerta OR?",
    correcta: "Su salida es 1 si AL MENOS UNA de sus entradas es 1",
    incorrectas: [
      "Su salida es 1 solo si todas son 1",
      "Su salida es 1 solo si todas son 0"
    ]
  },
  {
    enunciado: "¿Qué función lógica realiza una puerta NOT (Inversor)?",
    correcta: "Invierte el valor de la entrada: si es 0 sale 1, si es 1 sale 0",
    incorrectas: [
      "Deja pasar la señal tal cual",
      "Suma dos entradas"
    ]
  },
  {
    enunciado: "¿Qué es el Álgebra de Boole?",
    correcta: "Una estructura algebraica que esquematiza las operaciones lógicas Y, O, NO y NO (AND, OR, NOT) utilizada para analizar y simplificar circuitos digitales",
    incorrectas: [
      "Una rama del álgebra lineal con matrices",
      "Un método para resolver integrales"
    ]
  },
  {
    enunciado: "¿Qué es la Tabla de Verdad?",
    correcta: "Una tabla que representa todas las combinaciones posibles de las entradas de un circuito y el valor correspondiente de la salida para cada una",
    incorrectas: [
      "Una tabla periódica de elementos",
      "Una lista de mentiras"
    ]
  },
  {
    enunciado: "¿Qué es un Mapa de Karnaugh (K-Map)?",
    correcta: "Un método gráfico para simplificar funciones booleanas, agrupando 'unos' adyacentes para reducir la expresión a la mínima suma de productos",
    incorrectas: [
      "Un mapa de carreteras",
      "Un diagrama de flujo"
    ]
  },
  {
    enunciado: "¿Qué función realiza una puerta NAND?",
    correcta: "Es una AND seguida de una NOT (Salida 0 solo si todas entradas son 1; 1 en resto de casos). Es una puerta 'universal'",
    incorrectas: [
      "Una puerta que nunca funciona",
      "Una OR invertida"
    ]
  },
  {
    enunciado: "¿Y una puerta NOR?",
    correcta: "Es una OR seguida de una NOT (Salida 1 solo si todas entradas son 0). También es universal",
    incorrectas: [
      "Una puerta del norte",
      "Una AND invertida"
    ]
  },
  {
    enunciado: "¿Qué función realiza la puerta XOR (OR Exclusiva)?",
    correcta: "Su salida es 1 si el número de entradas a 1 es impar (para 2 entradas: 1 si son diferentes, 0 si son iguales)",
    incorrectas: [
      "Igual que la OR normal",
      "Siempre da 1"
    ]
  },
  {
    enunciado: "¿Qué es un Multiplexor (MUX)?",
    correcta: "Un circuito con múltiples entradas de datos y una sola salida, que selecciona cuál entrada pasa a la salida mediante unas entradas de control",
    incorrectas: [
      "Un circuito que multiplica voltajes",
      "Un circuito que tiene muchas salidas"
    ]
  },
  {
    enunciado: "¿Qué es un Demultiplexor (DEMUX)?",
    correcta: "El inverso del MUX: una entrada de datos se dirige a una de las múltiples salidas posibles según la selección",
    incorrectas: [
      "Un circuito que divide por dos",
      "Un sumador"
    ]
  },
  {
    enunciado: "¿Qué es un Codificador (Encoder)?",
    correcta: "Un circuito que convierte una señal de entrada activa (ej. pulsador decimal 0-9) en un código binario de salida (ej. BCD 4 bits)",
    incorrectas: [
      "Un espía",
      "Un descodificador de TV"
    ]
  },
  {
    enunciado: "¿Qué es un Decodificador (Decoder)?",
    correcta: "Convierte un código binario de entrada en la activación de una salida específica (ej. Binario a 7 segmentos para display)",
    incorrectas: [
      "Un candado",
      "Un traductor de idiomas"
    ]
  },
  {
    enunciado: "¿Qué es un Semi-Sumador (Half Adder)?",
    correcta: "Un circuito que suma dos bits y produce una Suma y un Acarreo (Carry), pero no acepta acarreo de entrada",
    incorrectas: [
      "Un sumador roto",
      "Un restador"
    ]
  },
  {
    enunciado: "¿Qué es un Sumador Completo (Full Adder)?",
    correcta: "Un circuito que suma dos bits más un acarreo de entrada, produciendo suma y acarreo de salida. Permite encadenarse para sumar n bits",
    incorrectas: [
      "Un sumador muy rápido",
      "Una calculadora completa"
    ]
  },
  {
    enunciado: "¿Cuál es el teorema de De Morgan?",
    correcta: "Reglas para transformar funciones lógicas: 'La negación de una suma es el producto de las negaciones' y viceversa: NOT(A+B) = NOT A · NOT B",
    incorrectas: [
      "El teorema de Pitágoras",
      "A + B = C"
    ]
  },
  {
    enunciado: "¿Qué es una función canónica?",
    correcta: "La expresión de una función lógica como suma de minterms (productos que incluyen todas las variables) o producto de maxterms",
    incorrectas: [
      "Una función religiosa",
      "Una función simple"
    ]
  },
  {
    enunciado: "¿Qué es un comparador digital?",
    correcta: "Un circuito que compara dos números binarios (A y B) y activa salidas indicando si A>B, A<B o A=B",
    incorrectas: [
      "Unos precios más baratos",
      "Un reloj"
    ]
  },
  {
    enunciado: "¿Qué es 'Fan-Out' en una puerta lógica?",
    correcta: "El número máximo de entradas de puertas estándar que puede alimentar la salida de esa puerta sin degradar la señal por debajo de los niveles lógicos",
    incorrectas: [
      "El ventilador de salida",
      "La velocidad de la puerta"
    ]
  },
  {
    enunciado: "¿Qué es la lógica TTL?",
    correcta: "Transistor-Transistor Logic: familia lógica basada en transistores bipolares, alimentación 5V, rápida pero consume más",
    incorrectas: [
      "Logica de Todo Tiempo Libre",
      "Tecnología de Tubos de Luz"
    ]
  },
  {
    enunciado: "¿Qué es la lógica CMOS?",
    correcta: "Complementary Metal-Oxide Semiconductor: usa transistores FET (MOS), bajo consumo, alto rango de tensión (3-15V) y alta inmunidad al ruido",
    incorrectas: [
      "Logica de Computadoras Modernas",
      "Circuitos de Metal y Oro"
    ]
  },
  {
    enunciado: "¿Qué significa 'Tri-State' o tercer estado (Alta Impedancia)?",
    correcta: "Un estado de salida donde el circuito se 'desconecta' eléctricamente del bus (circuito abierto), permitiendo que otros dispositivos controlen la línea",
    incorrectas: [
      "Estado sólido, líquido y gaseoso",
      "Estado de error"
    ]
  },
  {
    enunciado: "¿Qué es un bit de paridad?",
    correcta: "Un bit extra añadido a un dato para detectar errores simples de transmisión (hace que el número total de unos sea par o impar)",
    incorrectas: [
      "Un bit que vale por dos",
      "Un bit de fiesta"
    ]
  },
  {
    enunciado: "¿Qué es una resistencia de Pull-Up?",
    correcta: "Una resistencia conectada entre una entrada y Vcc para asegurar un nivel lógico '1' cuando el interruptor o salida está abierto/flotante",
    incorrectas: [
      "Una resistencia para hacer ejercicio",
      "Para bajar el voltaje"
    ]
  },
  {
    enunciado: "¿Qué es una ALU?",
    correcta: "Arithmetic Logic Unit: Parte fundamental de la CPU que realiza operaciones aritméticas (sumas) y lógicas (AND, OR) combinacionales",
    incorrectas: [
      "Aluminio",
      "Una luz de alarma"
    ]
  },
  {
    enunciado: "¿Cómo se implementa cualquier función lógica usando solo MUX?",
    correcta: "Conectando las variables de entrada a las líneas de selección y fijando las entradas de datos a 0 o 1 según la tabla de verdad",
    incorrectas: [
      "No se puede, solo sirve para seleccionar",
      "Soldando muchas puertas"
    ]
  },
  {
    enunciado: "¿Qué es el retardo de propagación?",
    correcta: "El tiempo que tarda la señal en atravesar la puerta lógica desde que cambia la entrada hasta que cambia la salida (nanosegundos)",
    incorrectas: [
      "Llegar tarde al trabajo",
      "Ecos en el cable"
    ]
  },
  {
    enunciado: "¿Qué es la implementación multinivel?",
    correcta: "Diseñar el circuito usando varias capas de puertas (AND-OR-AND...) en lugar de solo dos niveles, para optimizar el número de entradas o fan-in",
    incorrectas: [
      "Un edificio de muchos pisos",
      "Usar puertas de colores"
    ]
  },
  {
    enunciado: "¿Qué es una LUT (Look-Up Table) en una FPGA?",
    correcta: "Una pequeña memoria RAM que almacena la tabla de verdad de una función lógica combinacional, permitiendo reconfigurar la lógica por software",
    incorrectas: [
      "Una tabla de madera",
      "Mirar arriba"
    ]
  },
  {
    enunciado: "¿Qué es el código BCD (Binary Coded Decimal)?",
    correcta: "Representar cada dígito decimal (0-9) con 4 bits (ej. 9 = 1001), desperdiciando las combinaciones 1010 a 1111",
    incorrectas: [
      "Código Binario Comprimido",
      "Lo mismo que hexadecimal"
    ]
  },
  {
    enunciado: "¿Qué es el código de Gray?",
    correcta: "Un código binario donde dos números consecutivos solo difieren en un bit; ideal para encoders de posición para evitar errores transitorios",
    incorrectas: [
      "Un código de colores grises",
      "Código secreto"
    ]
  },
  {
    enunciado: "¿Qué puerta equivale a un interruptor controlado?",
    correcta: "La puerta AND (si una entrada es control, deja pasar la otra o la pone a 0) o XOR (deja pasar o invierte)",
    incorrectas: [
      "La OR",
      "Ninguna"
    ]
  },
  {
    enunciado: "¿Qué es un buffer o etapa separadora?",
    correcta: "Una puerta (triángulo) que no cambia la lógica (1=1, 0=0) pero regenera los niveles de tensión y aumenta la capacidad de corriente (amplificador)",
    incorrectas: [
      "Un mueble de salón",
      "Un inversor"
    ]
  },
  {
    enunciado: "¿Qué es el error de 'Hazard' o azares en combinacionales?",
    correcta: "Picos transitorios indeseados (glitches) en la salida debidos a diferentes retardos de propagación en caminos paralelos del circuito",
    incorrectas: [
      "Juegos de azar",
      "Errores de diseño fatales"
    ]
  },
  {
    enunciado: "¿Cómo se pasa de binario a decimal?",
    correcta: "Sumando las potencias de 2 correspondientes a los bits a 1 (ej. 101 = 4+0+1 = 5)",
    incorrectas: [
      "Dividiendo por 10",
      "No se puede"
    ]
  },
  {
    enunciado: "¿Qué lógica es 'activa a nivel bajo'?",
    correcta: "Aquella donde la función se activa con un 0 lógico (ej. Chip Select o Reset negado), se indica con un círculo o barra sobre el nombre",
    incorrectas: [
      "Lógica deprimida",
      "La que funciona con poca pila"
    ]
  },
  {
    enunciado: "¿Qué es la 'lógica programable' (PAL/PLA)?",
    correcta: "Chips antiguos con matrices de puertas AND/OR configurables mediante fusibles para implementar funciones a medida",
    incorrectas: [
      "Lógica en papel",
      "Programar en C++"
    ]
  },
  {
    enunciado: "¿Cuál es la expresión booleana de XOR?",
    correcta: "A · NOT B + NOT A · B",
    incorrectas: [
      "A + B",
      "A · B"
    ]
  },
  {
    enunciado: "¿Qué es una puerta de colector abierto (Open Collector)?",
    correcta: "Una puerta cuya salida es un transistor sin resistencia de pull-up interna; permite unir varias salidas (AND cableada) y controlar voltajes distintos",
    incorrectas: [
      "Una puerta rota",
      "Una puerta siempre abierta"
    ]
  }
];
