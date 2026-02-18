// 46-programacion-de-automatas-lista-de-instrucciones.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué es el lenguaje Lista de Instrucciones (IL / AWL / STL)?",
    correcta: "Un lenguaje de programación textual de bajo nivel (tipo ensamblador) definido en la norma IEC 61131-3, muy potente y eficiente",
    incorrectas: [
      "Una lista de la compra",
      "Un lenguaje gráfico de bloques"
    ]
  },
  {
    enunciado: "¿Qué es el Acumulador (ACCU) en IL?",
    correcta: "Un registro interno de la CPU donde se almacenan temporalmente los resultados de las operaciones lógicas y matemáticas para ser usados en la siguiente instrucción",
    incorrectas: [
      "Una batería recargable",
      "Un contenedor de basura"
    ]
  },
  {
    enunciado: "¿Qué hace la instrucción 'LD' (Load) o 'A' (And) al inicio de una red?",
    correcta: "Carga el valor del operando en el acumulador (o inicia una operación lógica cargando el RLO - Resultado Lógico de la Operación)",
    incorrectas: [
      "Carga una batería",
      "Apaga el PLC"
    ]
  },
  {
    enunciado: "¿Qué operación realiza la instrucción 'AND' o 'A'?",
    correcta: "Realiza una operación lógica Y entre el valor actual del RLO y el operando especificado, guardando el resultado en RLO",
    incorrectas: [
      "Anda hacia adelante",
      "Suma dos números"
    ]
  },
  {
    enunciado: "¿Qué operación realiza la instrucción 'OR' o 'O'?",
    correcta: "Realiza una operación lógica O entre el RLO y el operando",
    incorrectas: [
      "Ordena la memoria",
      "Resta dos números"
    ]
  },
  {
    enunciado: "¿Qué hace la instrucción 'ST' (Store) o '=' (Assign)?",
    correcta: "Asigna (copia) el valor actual del RLO (o acumulador) a la dirección de memoria de salida especificada",
    incorrectas: [
      "Para el programa (Stop)",
      "Compara si es igual"
    ]
  },
  {
    enunciado: "¿Qué significa el modificador 'N' o 'NOT' tras una instrucción (ej. ANDN, AN)?",
    correcta: "Operación con el operando invertido/negado (ej. AND NOT: Y con el valor negado de la entrada)",
    incorrectas: [
      "Operación nula",
      "Operación nueva"
    ]
  },
  {
    enunciado: "¿Qué instrucción se usa para realizar un paréntesis (abrir rama)?",
    correcta: "Suele ser un operador específico (ej. '(' o 'A(' en Siemens) que guarda el RLO actual en una pila para recuperarlo tras calcular el paréntesis",
    incorrectas: [
      "No existen paréntesis en IL",
      "Instrucción PAUSE"
    ]
  },
  {
    enunciado: "¿Qué es el RLO (Resultado Lógico de la Operación)?",
    correcta: "Un bit de estado (flag) en la CPU que almacena el resultado booleano de la última instrucción lógica ejecutada, encadenando las operaciones",
    incorrectas: [
      "Reloj Local",
      "Registro Largo"
    ]
  },
  {
    enunciado: "¿Qué hace la instrucción 'S' (Set)?",
    correcta: "Pone a 1 la variable operando si el RLO es 1; si el RLO es 0, no hace nada (mantiene el valor anterior)",
    incorrectas: [
      "Suma valores",
      "Salva el programa"
    ]
  },
  {
    enunciado: "¿Qué hace la instrucción 'R' (Reset)?",
    correcta: "Pone a 0 la variable operando si el RLO es 1; si el RLO es 0, no hace nada",
    incorrectas: [
      "Reinicia la CPU",
      "Resta valores"
    ]
  },
  {
    enunciado: "¿Qué instrucción se usa para saltar a una etiqueta (Label)?",
    correcta: "JMP (Jump), JCN (Jump if Condition Not met), o JPC (Jump Conditional). Permite romper la ejecución secuencial",
    incorrectas: [
      "RUN",
      "SKIP"
    ]
  },
  {
    enunciado: "¿Qué es un salto incondicional (JU / JMP)?",
    correcta: "Un salto que se realiza siempre, independientemente del valor del RLO o condiciones previas",
    incorrectas: [
      "Un salto peligroso",
      "Un salto aleatorio"
    ]
  },
  {
    enunciado: "¿Cómo se detecta un flanco positivo en IL (instrucción FP / EU)?",
    correcta: "La instrucción compara el estado actual del bit con su estado en el ciclo anterior (guardado en una marca auxiliar); si pasa de 0 a 1, genera un pulso de un ciclo",
    incorrectas: [
      "Midiendo el voltaje",
      "Mirando si es positivo"
    ]
  },
  {
    enunciado: "¿Qué hace la instrucción de comparación (ej. >I, EQ_I)?",
    correcta: "Compara dos valores numéricos (enteros) cargados en los acumuladores y actualiza el RLO según el resultado (Verdadero/Falso)",
    incorrectas: [
      "Compara textos",
      "Iguala los valores"
    ]
  },
  {
    enunciado: "¿Qué instrucción carga una constante numérica en el acumulador?",
    correcta: "L (Load) seguida del valor (ej. L 50, L #100)",
    incorrectas: [
      "CONST 50",
      "PUT 50"
    ]
  },
  {
    enunciado: "¿Qué hace la instrucción 'T' (Transfer) en Siemens AWL?",
    correcta: "Transfiere (copia) el contenido del Acumulador 1 a la dirección de destino (ej. T MW10), sin depender del RLO",
    incorrectas: [
      "Transfiere datos a internet",
      "Termina el programa"
    ]
  },
  {
    enunciado: "¿Por qué se considera IL un lenguaje 'de bajo nivel'?",
    correcta: "Porque sus instrucciones se corresponden casi directamente con el código máquina del procesador, permitiendo optimización máxima pero siendo menos legible",
    incorrectas: [
      "Porque es malo",
      "Porque es lento"
    ]
  },
  {
    enunciado: "¿Qué es el MCR (Master Control Relay) en IL?",
    correcta: "Una instrucción que permite desactivar o activar una zona entera de código; si MCR está activo (off), todas las asignaciones '=' dentro de la zona se ponen a 0",
    incorrectas: [
      "Un relé maestro físico",
      "El control remoto"
    ]
  },
  {
    enunciado: "¿Qué pasa con el contenido de los acumuladores al llamar a una función (CALL)?",
    correcta: "Depende del PLC, pero generalmente se pueden perder o alterar; es buena práctica salvarlos si se necesitan, o usar parámetros de entrada/salida",
    incorrectas: [
      "Se borran siempre",
      "Se multiplican por dos"
    ]
  },
  {
    enunciado: "¿Qué es la instrucción 'NOP 0'?",
    correcta: "No Operation: una instrucción que no hace nada, usada para rellenar huecos, reservar memoria o como punto de ruptura en depuración",
    incorrectas: [
      "No Open",
      "Parada de emergencia"
    ]
  },
  {
    enunciado: "¿Cómo se realiza una suma en IL (ej. Siemens)?",
    correcta: "1. Cargar primer valor (L A). 2. Cargar segundo valor (L B). 3. Ejecutar instrucción suma (+I). El resultado queda en Acumulador 1",
    incorrectas: [
      "SUM A B",
      "A + B"
    ]
  },
  {
    enunciado: "¿Qué hace la instrucción 'X' o 'XOR'?",
    correcta: "O exclusiva lógica: RLO es 1 si los operandos son diferentes (uno 1 y otro 0)",
    incorrectas: [
      "Multiplica",
      "Borra todo"
    ]
  },
  {
    enunciado: "¿Qué es un puntero (Pointer) en programación IL?",
    correcta: "Una dirección de memoria construida dinámicamente (ej. P#DB1.DBX10.0) usada para acceso indirecto a registros (L AR1)",
    incorrectas: [
      "Un puntero láser",
      "Un ratón"
    ]
  },
  {
    enunciado: "¿Para qué sirve desplazar bits (SLW, SRW)?",
    correcta: "Shift Left/Right Word: Mueve los bits de la palabra a izquierda o derecha. Equivale a multiplicar o dividir por potencias de 2 de forma muy rápida",
    incorrectas: [
      "Para marear los bits",
      "Para borrarlos"
    ]
  },
  {
    enunciado: "¿Llamar a un bloque condicionalmente (CC o Call Cond)?",
    correcta: "Ejecuta la llamada a la subrutina solo si el RLO actual es 1",
    incorrectas: [
      "Llamar a cobro revertido",
      "Llamar siempre"
    ]
  },
  {
    enunciado: "¿Qué pasa si se divide por cero en IL?",
    correcta: "La CPU genera un error de sistema (OB de error) y puede pasar a STOP si no se programa la gestión de ese error",
    incorrectas: [
      "Da infinito",
      "No pasa nada"
    ]
  },
  {
    enunciado: "¿Es el lenguaje IL portable entre marcas?",
    correcta: "Aunque está estandarizado por IEC 61131, en la práctica hay diferencias de sintaxis (mnemónicos) entre Siemens (AWL), Rockwell, Schneider, requiriendo adaptación",
    incorrectas: [
      "Sí, es idéntico siempre",
      "No, cada uno inventa lo que quiere sin norma"
    ]
  },
  {
    enunciado: "¿Qué ventaja tiene IL sobre Ladder para fórmulas matemáticas?",
    correcta: "Es mucho más compacto y rápido de escribir para secuencias largas de cálculos aritméticos complejos que ocuparían muchas ramas en Ladder",
    incorrectas: [
      "Es más bonito",
      "Huele mejor"
    ]
  },
  {
    enunciado: "¿Qué es el 'Stack' o pila de acumuladores?",
    correcta: "La estructura donde se empujan los valores al cargar nuevos (L). ACCU1 pasa a ACCU2, perdiéndose lo que hubiera en el último nivel (si hay más de 2)",
    incorrectas: [
      "Una pila de botón",
      "Un montón de papeles"
    ]
  },
  {
    enunciado: "¿Qué instrucción invierte el RLO?",
    correcta: "NOT (o AN sin operando en sistemas antiguos), invierte el valor actual del resultado lógico (0->1, 1->0)",
    incorrectas: [
      "INV",
      "REV"
    ]
  },
  {
    enunciado: "¿Qué es la instrucción 'BE' (Block End)?",
    correcta: "Finaliza la ejecución del bloque actual incondicionalmente y vuelve al bloque que lo llamó (retorno)",
    incorrectas: [
      "Ser o no ser",
      "Error de bloque"
    ]
  },
  {
    enunciado: "¿Qué es una instrucción de conversión (ej. ITD, DTR)?",
    correcta: "Convierte formatos de datos: Entero a Doble Entero (ITD), Doble Entero a Real/Flotante (DTR), necesario para mezclar tipos en operaciones",
    incorrectas: [
      "Convierte euros a dólares",
      "Transforma el PLC"
    ]
  },
  {
    enunciado: "¿Qué hace 'LOOP'?",
    correcta: "Instrucción de bucle: decrementa un contador y salta a una etiqueta si no es cero, permitiendo repetir código N veces en el mismo ciclo",
    incorrectas: [
      "Hace un nudo",
      "Se cuelga"
    ]
  },
  {
    enunciado: "¿Qué riesgo tiene usar bucles (LOOP) mal programados?",
    correcta: "Que el tiempo de ejecución supere el tiempo de ciclo máximo (Watchdog scan time) y el PLC se vaya a fallo STOP",
    incorrectas: [
      "Se marea",
      "Se calienta"
    ]
  },
  {
    enunciado: "¿Qué es 'RET'?",
    correcta: "Instrucción de retorno, vuelve de la subrutina. Puede ser condicional (RET si RLO=1)",
    incorrectas: [
      "Retrete",
      "Retraso"
    ]
  },
  {
    enunciado: "¿Cómo se accede a un bit de una palabra (Word)?",
    correcta: "Mediante direccionamiento bit a bit, ej. L MW10 (palabra) -> A M10.0 (bit 0 de la palabra)",
    incorrectas: [
      "Rompiendo la palabra",
      "No se puede"
    ]
  },
  {
    enunciado: "¿Qué es la 'programación espagueti'?",
    correcta: "El uso excesivo y desordenado de saltos (JMP) en IL que hace el código imposible de seguir y depurar (mala práctica)",
    incorrectas: [
      "Programar comiendo pasta",
      "Código muy largo"
    ]
  },
  {
    enunciado: "¿Qué instrucción finaliza el programa obligatoriamente?",
    correcta: "No es necesaria explícitamente en el programa cíclico principal, el sistema operativo se encarga de loopear el OB1",
    incorrectas: [
      "END",
      "FINISH"
    ]
  }
];
