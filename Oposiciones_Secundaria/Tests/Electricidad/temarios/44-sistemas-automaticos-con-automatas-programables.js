// 44-sistemas-automaticos-con-automatas-programables.js
var PREGUNTAS = [
  {
    enunciado: "¿Cuáles son las tres partes fundamentales de la arquitectura de un PLC?",
    correcta: "CPU (Unidad Central de Proceso), Memoria y Módulos de Entrada/Salida (E/S)",
    incorrectas: [
      "Teclado, Ratón y Pantalla",
      "Motor, Cable y Sensor"
    ]
  },
  {
    enunciado: "¿Qué función tiene la CPU en un PLC?",
    correcta: "Leer las entradas, ejecutar las instrucciones del programa de usuario almacenado en memoria y actualizar las salidas en consecuencia",
    incorrectas: [
      "Suministrar corriente a leds",
      "Refrigerar el armario"
    ]
  },
  {
    enunciado: "¿Qué es la Imagen de Proceso de las Entradas (PII/PAE)?",
    correcta: "Una zona de memoria donde la CPU copia el estado físico de todas las entradas al inicio de cada ciclo de scan, para trabajar con una 'foto' estable durante la ejecución",
    incorrectas: [
      "Una foto del PLC",
      "La imagen de marca del fabricante"
    ]
  },
  {
    enunciado: "¿Qué es la Imagen de Proceso de las Salidas (PIQ/PAA)?",
    correcta: "Una zona de memoria donde la CPU escribe los resultados durante el programa; al final del ciclo, estos valores se transfieren físicamente a los módulos de salida",
    incorrectas: [
      "La salida de humos",
      "Una impresora"
    ]
  },
  {
    enunciado: "¿Qué es un PLC Compacto?",
    correcta: "Un PLC que integra en una sola carcasa la fuente de alimentación, CPU y un número fijo de E/S (poco ampliable)",
    incorrectas: [
      "Un PLC muy pequeño de bolsillo",
      "Un PLC aplastado"
    ]
  },
  {
    enunciado: "¿Qué es un PLC Modular?",
    correcta: "Un sistema flexible formado por un rack o bus donde se insertan módulos independientes (bastidor, fuente, CPU, tarjetas E/S) según necesidad",
    incorrectas: [
      "Un mueble por módulos",
      "Un PLC que cambia de forma"
    ]
  },
  {
    enunciado: "¿Qué es el Bus de Backplane o Bus de fondo?",
    correcta: "El bus de comunicación interno de alta velocidad que conecta la CPU con los módulos de E/S a través del rack",
    incorrectas: [
      "El autobús de atrás",
      "Un cable Ethernet externo"
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre memoria de programa y memoria de datos?",
    correcta: "La memoria de programa aloja las instrucciones (código) y suele ser no volátil (Flash/EPROM); la de datos guarda variables temporales (contadores, marcas) y suele ser RAM",
    incorrectas: [
      "No hay diferencia",
      "La de datos es más lenta"
    ]
  },
  {
    enunciado: "¿Qué es una entrada digital tipo 'Sink' (Sumidero)?",
    correcta: "Una entrada que requiere recibir corriente positiva (+24V) desde el sensor (típico para sensores PNP)",
    incorrectas: [
      "Una entrada de agua",
      "Una entrada que da corriente"
    ]
  },
  {
    enunciado: "¿Qué es una entrada digital tipo 'Source' (Fuente)?",
    correcta: "Una entrada que suministra corriente y se activa conectándola a masa (0V) (típico para sensores NPN)",
    incorrectas: [
      "El código fuente",
      "Una fuente de alimentación"
    ]
  },
  {
    enunciado: "¿Qué es el aislamiento galvánico en las E/S de un PLC?",
    correcta: "La separación eléctrica (generalmente mediante optoacopladores) entre el circuito interno de la CPU (5V/3.3V) y el circuito de campo (24V/230V) para proteger al procesador",
    incorrectas: [
      "Aislamiento térmico",
      "Poner cinta aislante"
    ]
  },
  {
    enunciado: "¿Qué es una salida a relé en un PLC?",
    correcta: "Una salida mediante contacto mecánico libre de potencial; soporta cargas AC y DC de cierta corriente (ej. 2A), pero es lenta y tiene desgaste mecánico",
    incorrectas: [
      "Una salida muy rápida",
      "Una salida solo para 24V"
    ]
  },
  {
    enunciado: "¿Qué es una salida a transistor (o estática)?",
    correcta: "Una salida mediante semiconductor (MOSFET/BJT) solo para DC; es muy rápida, silenciosa y sin desgaste, ideal para PWM o maniobras frecuentes",
    incorrectas: [
      "Una radio antigua",
      "Una salida que hace ruido"
    ]
  },
  {
    enunciado: "¿Qué es una salida a Triac?",
    correcta: "Una salida estática para controlar cargas de corriente alterna (AC)",
    incorrectas: [
      "Una salida de tres cables",
      "Una salida triangular"
    ]
  },
  {
    enunciado: "¿Qué es la resolución de una entrada analógica (ej. 12 bits)?",
    correcta: "El número de valores discretos en que puede dividir el rango de señal. 12 bits = 2^12 = 4096 pasos (mayor resolución = mayor precisión)",
    incorrectas: [
      "El tamaño de la pantalla",
      "La velocidad de lectura"
    ]
  },
  {
    enunciado: "¿Qué norma internacional estandariza los lenguajes de programación de PLCs?",
    correcta: "La norma IEC 61131-3",
    incorrectas: [
      "La norma ISO 9000",
      "El código Morse"
    ]
  },
  {
    enunciado: "¿Cuáles son los 5 lenguajes definidos en la IEC 61131-3?",
    correcta: "Laddder (LD), Bloques de Función (FBD), Texto Estructurado (ST), Lista de Instrucciones (IL) y Grafcet (SFC)",
    incorrectas: [
      "Java, C++, Python, HTML y CSS",
      "Inglés, Francés, Alemán, Italiano y Español"
    ]
  },
  {
    enunciado: "¿Qué es el 'Tiempo de Scan' o ciclo de barrido?",
    correcta: "El tiempo total que tarda el PLC en leer entradas, ejecutar todo el programa y escribir salidas (típicamente de 1 a 100 ms)",
    incorrectas: [
      "El tiempo de escaneo de antivirus",
      "Un año"
    ]
  },
  {
    enunciado: "¿Qué ocurre si el tiempo de scan es mayor que la duración de un pulso de entrada?",
    correcta: "El PLC puede no 'ver' el cambio de la entrada (pérdida de señal), a menos que se usen entradas de interrupción o latch",
    incorrectas: [
      "Nada, el PLC es mágico",
      "El PLC se rompe"
    ]
  },
  {
    enunciado: "¿Qué es una 'Interrupción' en un PLC?",
    correcta: "Un mecanismo que detiene el ciclo normal inmediatamente ante un evento (ej. entrada rápida) para ejecutar una rutina prioritaria (OB de alarma) y luego vuelve",
    incorrectas: [
      "Que se vaya la luz",
      "Que alguien moleste al programador"
    ]
  },
  {
    enunciado: "¿Qué es la memoria retentiva?",
    correcta: "Zona de memoria que mantiene su valor tras un apagado y encendido (gracias a supercondensador o pila), ideal para contar piezas acumuladas",
    incorrectas: [
      "Tener buena memoria",
      "Memoria fotográfica"
    ]
  },
  {
    enunciado: "¿Qué es un módulo de contaje rápido (High Speed Counter - HSC)?",
    correcta: "Un módulo especial capaz de contar pulsos muy rápidos (kHz o MHz, ej. de encoders) independientemente del tiempo de ciclo de la CPU",
    incorrectas: [
      "Un contador de billetes",
      "Un reloj de pulsera"
    ]
  },
  {
    enunciado: "¿Qué es un módulo de posicionamiento?",
    correcta: "Tarjeta dedicada a controlar servomotores o paso a paso (tren de pulsos o bus) descargando a la CPU de esa tarea compleja",
    incorrectas: [
      "Un GPS",
      "Un mapa"
    ]
  },
  {
    enunciado: "¿Qué es el firmware del PLC?",
    correcta: "El sistema operativo interno de bajo nivel que controla el hardware del PLC; debe actualizarse con precaución",
    incorrectas: [
      "El programa del usuario",
      "La carcasa de plástico"
    ]
  },
  {
    enunciado: "¿Qué es la redundancia de CPU (Hot Standby)?",
    correcta: "Tener dos CPUs idénticas ejecutando el mismo programa en paralelo; si la principal falla, la de reserva toma el mando sin interrupción (bumpless)",
    incorrectas: [
      "Tener dos PLCs distintos",
      "Tener repuestos en el almacén"
    ]
  },
  {
    enunciado: "¿Qué es la programación estructurada?",
    correcta: "Dividir el programa complejo en bloques pequeños y manejables (funciones, subrutinas) llamados desde un bloque principal (OB1)",
    incorrectas: [
      "Programar construyendo edificios",
      "Escribir todo seguido"
    ]
  },
  {
    enunciado: "¿Qué es una variable local vs global?",
    correcta: "Local solo existe dentro del bloque (función) donde se declara (memoria temporal); Global es accesible desde todo el proyecto (marcas, DBs globales)",
    incorrectas: [
      "Local es del pueblo y Global del mundo",
      "No hay diferencia"
    ]
  },
  {
    enunciado: "¿Qué es el direccionamiento simbólico?",
    correcta: "Usar nombres (ej. 'Motor_Start') en lugar de direcciones físicas (ej. %I0.0) en el código, facilitando la legibilidad",
    incorrectas: [
      "Usar dibujos",
      "Usar direcciones de calles"
    ]
  },
  {
    enunciado: "¿Qué es una tarjeta de memoria (MMC/SD) en el PLC?",
    correcta: "Sirve para ampliar la memoria de carga y almacenar el proyecto completo (incluyendo comentarios) o hacer backups/actualizaciones sin PC",
    incorrectas: [
      "Para poner música",
      "Para hacer fotos"
    ]
  },
  {
    enunciado: "¿Qué es el RTC (Real Time Clock) del PLC?",
    correcta: "El reloj interno que lleva fecha y hora, usado para programaciones horarias o datar alarmas",
    incorrectas: [
      "Running Time Control",
      "Real Técnico Cualificado"
    ]
  },
  {
    enunciado: "¿Qué es un autómata de seguridad (Safety PLC)?",
    correcta: "Un PLC especial (rojo/amarillo) con arquitectura redundante interna y autodiagnóstico certificado para gestionar seguridades críticas (setas, barreras) hasta SIL3/PLe",
    incorrectas: [
      "Un PLC con candado",
      "Un vigilante jurado"
    ]
  },
  {
    enunciado: "¿Qué es la comunicación PG/PC?",
    correcta: "El enlace entre el dispositivo de programación (PC/portátil) y el PLC para transferir el programa y monitorizar (Ethernet, MPI, USB)",
    incorrectas: [
      "Jugar al PC",
      "Comunicación por carta"
    ]
  },
  {
    enunciado: "¿Qué ventaja tiene el bus de campo frente al cableado punto a punto?",
    correcta: "Drástica reducción de cableado (un solo cable bus vs cientos de hilos), facilidad de diagnóstico y flexibilidad para ampliar",
    incorrectas: [
      "Ninguna, es más caro de cablear",
      "El cable pesa más"
    ]
  },
  {
    enunciado: "¿Qué es la descentralización (E/S distribuidas)?",
    correcta: "Colocar módulos de E/S cerca de los sensores/actuadores en cajas remotas, unidos al PLC central por un solo cable de comunicación",
    incorrectas: [
      "Tirar todo por el suelo",
      "No tener centro"
    ]
  },
  {
    enunciado: "¿Qué es el bit de 'First Scan' o arranque?",
    correcta: "Una marca especial del sistema que está a 1 solo durante el primer ciclo tras el encendido, usada para inicializar variables",
    incorrectas: [
      "El primer escáner",
      "Un bit que siempre vale 1"
    ]
  },
  {
    enunciado: "¿Qué es la histéresis programada?",
    correcta: "Lógica software para evitar rebotes en comparaciones analógicas (ej. encender a <100, apagar a >105)",
    incorrectas: [
      "Una enfermedad",
      "Historia del PLC"
    ]
  },
  {
    enunciado: "¿Qué es el control PID integrado?",
    correcta: "Bloques de función estándar en el PLC que implementan el algoritmo PID, simplificando el control de procesos continuos (temperatura, nivel)",
    incorrectas: [
      "Control Policial",
      "Pedir control"
    ]
  },
  {
    enunciado: "¿Qué es la carga de la batería de respaldo?",
    correcta: "En PLCs antiguos (con RAM volátil), la batería mantenía el programa al apagar; si se gasta, se pierde el programa (hoy día usan Flash)",
    incorrectas: [
      "Cargar el móvil",
      "Arrancar el coche"
    ]
  },
  {
    enunciado: "¿Qué es el direccionamiento indirecto o punteros?",
    correcta: "Técnica avanzada donde la dirección a la que se accede no es fija, sino que está contenida en otra variable; permite recorrer arrays o tablas",
    incorrectas: [
      "Direccionar sin mirar",
      "Apuntar con el dedo"
    ]
  },
  {
    enunciado: "¿Qué es el modo RUN vs STOP?",
    correcta: "RUN: ejecuta programa y actualiza salidas. STOP: no ejecuta programa, salidas a 0 (o estado seguro), permite carga de hardware",
    incorrectas: [
      "Correr y Parar físicamente",
      "Encendido y Apagado total"
    ]
  }
];
