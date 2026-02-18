// 36-funciones-digitales-secuenciales.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué caracteriza a un circuito digital secuencial?",
    correcta: "Que la salida depende no solo de las entradas actuales, sino también de la historia pasada (tiene memoria o estados internos)",
    incorrectas: [
      "Que solo depende de las entradas actuales",
      "Que funciona secuencialmente sin reloj"
    ]
  },
  {
    enunciado: "¿Cuál es el elemento básico de memoria de un bit?",
    correcta: "El biestable o Flip-Flop",
    incorrectas: [
      "La puerta AND",
      "El transistor simple"
    ]
  },
  {
    enunciado: "¿Qué es un circuito secuencial asíncrono?",
    correcta: "Aquel donde los cambios de estado ocurren inmediatamente al cambiar las entradas, sin depender de una señal de reloj global (difícil de diseñar, riesgo de carreras)",
    incorrectas: [
      "Aquel que usa reloj de cuarzo",
      "El que va muy lento"
    ]
  },
  {
    enunciado: "¿Qué es un circuito secuencial síncrono?",
    correcta: "Aquel donde todos los cambios de estado están sincronizados por una señal de reloj (Clock) común; solo cambian en los flancos",
    incorrectas: [
      "El que sincroniza con internet",
      "El que usa música"
    ]
  },
  {
    enunciado: "¿Qué es un Flip-Flop RS (Set-Reset)?",
    correcta: "Un biestable básico con dos entradas: S pone la salida a 1 (Set), R la pone a 0 (Reset). S=1 y R=1 es un estado prohibido/indeterminado",
    incorrectas: [
      "Un biestable que siempre oscila",
      "Rápido y Seguro"
    ]
  },
  {
    enunciado: "¿Qué es un Flip-Flop tipo D (Data o Delay)?",
    correcta: "Un biestable que captura el valor de la entrada D en el flanco de reloj y lo mantiene en la salida Q hasta el siguiente flanco",
    incorrectas: [
      "Un biestable de dedo",
      "Un biestable doble"
    ]
  },
  {
    enunciado: "¿Qué es un Flip-Flop JK?",
    correcta: "Un biestable universal similar al RS pero sin estado prohibido: si J=1 y K=1, la salida bascula (invierte su estado anterior, Toggle)",
    incorrectas: [
      "Joker-King",
      "Just Kidding"
    ]
  },
  {
    enunciado: "¿Qué es un Flip-Flop T (Toggle)?",
    correcta: "Un biestable que invierte su salida cada vez que recibe un pulso de reloj si T=1 (divisor de frecuencia por 2)",
    incorrectas: [
      "Un biestable temporal",
      "Un biestable de temperatura"
    ]
  },
  {
    enunciado: "¿Qué es un Latch (Cerrojo)?",
    correcta: "Un dispositivo de memoria activado por nivel (mientras la señal de habilitación esté alta, la salida sigue a la entrada; al bajar, memoriza el último valor)",
    incorrectas: [
      "Una puerta con llave",
      "Un tipo de leche"
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre Latch y Flip-Flop (bordes)?",
    correcta: "El Flip-Flop dispara por FLANCO (subida o bajada), el Latch es transparente por NIVEL",
    incorrectas: [
      "No hay diferencia",
      "El Latch es más rápido"
    ]
  },
  {
    enunciado: "¿Qué es un Registro de Desplazamiento (Shift Register)?",
    correcta: "Una cadena de flip-flops conectados en cascada donde los datos se desplazan una posición con cada pulso de reloj (serie-paralelo o paralelo-serie)",
    incorrectas: [
      "Un libro de registro",
      "Un cajón desastre"
    ]
  },
  {
    enunciado: "¿Qué es un Contador Asíncrono (Ripple Counter)?",
    correcta: "Un contador donde la salida de un flip-flop sirve de reloj para el siguiente; acumulan retardo de propagación",
    incorrectas: [
      "Un contador que no cuenta bien",
      "Un contador de agua"
    ]
  },
  {
    enunciado: "¿Qué es un Contador Síncrono?",
    correcta: "Un contador donde todos los flip-flops reciben el mismo reloj simultáneamente, cambiando de estado a la vez (más rápido y sin glitches)",
    incorrectas: [
      "Un cronómetro deportivo",
      "Un contador de visitas web"
    ]
  },
  {
    enunciado: "¿Qué es el módulo de un contador?",
    correcta: "El número de estados distintos por los que pasa antes de repetirse (ej. módulo 10 cuenta 0-9)",
    incorrectas: [
      "El tamaño físico del contador",
      "El valor absoluto"
    ]
  },
  {
    enunciado: "¿Qué es un cronograma o diagrama de tiempos?",
    correcta: "Una representación gráfica de la evolución de las señales (entradas, salidas, reloj) en el tiempo, fundamental para analizar secuenciales",
    incorrectas: [
      "Un horario de clases",
      "Un dibujo abstracto"
    ]
  },
  {
    enunciado: "¿Qué es el Preset y Clear (o Reset) asíncronos en un Flip-Flop?",
    correcta: "Entradas de forzado directo que ponen la salida a 1 (Preset) o 0 (Clear) inmediatamente, ignorando el reloj y otras entradas",
    incorrectas: [
      "Botones de volumen",
      "Entradas de datos normales"
    ]
  },
  {
    enunciado: "¿Qué es un contador BCD?",
    correcta: "Un contador que cuenta en binario del 0000 al 1001 (0 a 9) y luego se reinicia, usado para displays decimales",
    incorrectas: [
      "Un contador de Barrio",
      "Un contador hexadecimal"
    ]
  },
  {
    enunciado: "¿Qué es un contador Johnson (Twisted Ring)?",
    correcta: "Un registro de desplazamiento realimentado invertido; genera una secuencia de estados especial y decodificable sin glitches",
    incorrectas: [
      "Un contador de champú",
      "Un anillo mágico"
    ]
  },
  {
    enunciado: "¿Qué es el tiempo de establecimiento (Setup time)?",
    correcta: "El tiempo mínimo que los datos deben estar estables en la entrada ANTES del flanco de reloj para que se capturen correctamente",
    incorrectas: [
      "El tiempo de instalar el software",
      "El tiempo de arranque"
    ]
  },
  {
    enunciado: "¿Qué es el tiempo de mantenimiento (Hold time)?",
    correcta: "El tiempo mínimo que los datos deben mantenerse estables DESPUÉS del flanco de reloj",
    incorrectas: [
      "El tiempo de soporte técnico",
      "El tiempo de espera al teléfono"
    ]
  },
  {
    enunciado: "¿Qué es la metaestabilidad?",
    correcta: "Un estado inestable e impredecible en el que entra un flip-flop si se violan los tiempos de setup/hold, pudiendo oscilar o tardar en estabilizarse",
    incorrectas: [
      "Un estado de meditación profunda",
      "Una estabilidad muy buena"
    ]
  },
  {
    enunciado: "¿Cómo se hace un divisor de frecuencia por 2 con un Flip-Flop D?",
    correcta: "Conectando la salida negada (/Q) a la entrada D; la salida cambiará de estado en cada flanco de reloj, generando la mitad de frecuencia",
    incorrectas: [
      "Conectando D a tierra",
      "Rompiendo el flip-flop por la mitad"
    ]
  },
  {
    enunciado: "¿Qué es una Máquina de Estados Finitos (FSM - Finite State Machine)?",
    correcta: "Un modelo matemático de computación compuesto por estados, transiciones y acciones, implementable con circuitos secuenciales (Moore o Mealy)",
    incorrectas: [
      "Una máquina que se rompe pronto",
      "Un robot finito"
    ]
  },
  {
    enunciado: "¿Diferencia entre máquina de Moore y de Mealy?",
    correcta: "En Moore, la salida depende solo del estado actual. En Mealy, la salida depende del estado actual Y de las entradas (reacciona antes)",
    incorrectas: [
      "Moore es más barata",
      "Mealy es para líquidos"
    ]
  },
  {
    enunciado: "¿Qué es un registro paralelo-paralelo?",
    correcta: "Un registro que carga todos los bits a la vez con un pulso de reloj y los mantiene disponibles en las salidas",
    incorrectas: [
      "Un registro muy ancho",
      "Dos registros juntos"
    ]
  },
  {
    enunciado: "¿Qué es el 'Bounce' o rebote en interruptores mecánicos?",
    correcta: "Oscilaciones rápidas de la señal al cerrar un contacto mecánico; requiere circuitos 'Debounce' (con flip-flops o condensadores) para no contar falsos pulsos",
    incorrectas: [
      "Saltar encima del interruptor",
      "Un juego de pelota"
    ]
  },
  {
    enunciado: "¿Qué es una memoria RAM estática (SRAM)?",
    correcta: "Memoria volátil basada en flip-flops (latches) que mantiene el dato mientras haya alimentación sin necesidad de refresco (rápida)",
    incorrectas: [
      "Memoria que no se mueve",
      "Memoria de papel"
    ]
  },
  {
    enunciado: "¿Y una memoria RAM dinámica (DRAM)?",
    correcta: "Memoria basada en condensadores (carga = 1); requiere refresco periódico porque se descarga, pero es más densa y barata",
    incorrectas: [
      "Memoria muy divertida",
      "Memoria con motor"
    ]
  },
  {
    enunciado: "¿Qué es un Multivibrador Astable (reloj)?",
    correcta: "Un circuito oscilador que no tiene ningún estado estable y bascula continuamente entre 0 y 1, generando una onda cuadrada (reloj)",
    incorrectas: [
      "Un vibrador múltiple",
      "Un circuito muy estable"
    ]
  },
  {
    enunciado: "¿Qué es un Multivibrador Monoestable (Temporizador)?",
    correcta: "Un circuito con un estado estable; al recibir un disparo, pasa al estado inestable un tiempo T y vuelve solo al estable (One-Shot)",
    incorrectas: [
      "Un mono muy estable",
      "Un reloj perpetuo"
    ]
  },
  {
    enunciado: "¿Qué es el circuito integrado 555?",
    correcta: "Un temporizador/oscilador universal muy popular, configurable como astable o monoestable",
    incorrectas: [
      "Un número de teléfono",
      "Un microprocesador potente"
    ]
  },
  {
    enunciado: "¿Qué es la frecuencia de reloj máxima?",
    correcta: "La velocidad máxima a la que puede conmutar el circuito sin errores, limitada por los retardos de propagación de las puertas",
    incorrectas: [
      "La hora punta",
      "Infinita"
    ]
  },
  {
    enunciado: "¿Qué es un contador ascendente/descendente (Up/Down)?",
    correcta: "Un contador que puede incrementar o decrementar su cuenta según una señal de control",
    incorrectas: [
      "Un ascensor",
      "Un termómetro"
    ]
  },
  {
    enunciado: "¿Qué es el estado de 'reset' al encender (Power-On Reset)?",
    correcta: "Un circuito que genera un pulso de reset inicial al aplicar alimentación para que todos los flip-flops empiecen en un estado conocido (normalmente 0)",
    incorrectas: [
      "Apagar y encender rápido",
      "Un botón mágico"
    ]
  },
  {
    enunciado: "¿Cómo se detectan flancos (derivador) digitalmente?",
    correcta: "Usando una puerta XOR con la señal directa y la señal retardada (por inversores); produce un pulso breve en cada transición",
    incorrectas: [
      "Con un microscopio",
      "Mirando de reojo"
    ]
  },
  {
    enunciado: "¿Qué es la tabla de transición o excitación?",
    correcta: "Tabla que indica qué valores deben tener las entradas (J,K o D) para pasar de un estado actual Qt a un estado siguiente Qt+1",
    incorrectas: [
      "Tabla de ejercicios",
      "Tabla de multiplicar"
    ]
  },
  {
    enunciado: "¿Qué es un registro de instrucción?",
    correcta: "En una CPU, el registro que guarda el código de la operación que se está ejecutando actualmente",
    incorrectas: [
      "Un libro de instrucciones",
      "Un registro de entrada"
    ]
  },
  {
    enunciado: "¿Qué es el Fan-In?",
    correcta: "El número de entradas que tiene una puerta lógica; o la carga que presenta una entrada al circuito anterior",
    incorrectas: [
      "Ventilador de entrada",
      "El número de fans"
    ]
  },
  {
    enunciado: "¿Por qué se usan relojes multifase en sistemas complejos?",
    correcta: "Para evitar condiciones de carrera y solapamiento, usando relojes desfasados para diferentes etapas del pipeline",
    incorrectas: [
      "Para saber la hora en varios países",
      "Para gastar más energía"
    ]
  },
  {
    enunciado: "¿Qué es la lógica secuencial programable (CPLD/FPGA)?",
    correcta: "Dispositivos con miles de flip-flops y lógica combinacional interconectable que permiten implementar circuitos secuenciales complejos por software (VHDL/Verilog)",
    incorrectas: [
      "Un videojuego",
      "Lógica de papel"
    ]
  }
];
