// 45-programacion-de-automatas-grafcet.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué significan las siglas GRAFCET?",
    correcta: "Graphe Fonctionnel de Commande Étape Transition (Gráfico Funcional de Control Etapa Transición)",
    incorrectas: [
      "Gráfico Rápido de Autómatas Con Funciones Especiales",
      "Gran Fabricación de Circuitos Eléctricos"
    ]
  },
  {
    enunciado: "¿Cuáles son los elementos básicos de un GRAFCET?",
    correcta: "Etapas, Transiciones y Arcos orientados (uniones)",
    incorrectas: [
      "Círculos, Cuadrados y Diodos",
      "Bobinas y Contactos"
    ]
  },
  {
    enunciado: "¿Cómo se representa gráficamente una Etapa?",
    correcta: "Mediante un cuadrado (normal) o un cuadrado doble (etapa inicial)",
    incorrectas: [
      "Un triángulo",
      "Un círculo"
    ]
  },
  {
    enunciado: "¿Qué es una Etapa Inicial?",
    correcta: "La etapa que está activa incondicionalmente al arrancar el sistema (se representa con doble cuadrado). Debe haber al menos una",
    incorrectas: [
      "La etapa que nunca acaba",
      "La etapa final"
    ]
  },
  {
    enunciado: "¿Cómo se representa una Transición?",
    correcta: "Mediante una línea perpendicular al arco (barrita horizontal) que une dos etapas",
    incorrectas: [
      "Un punto gordo",
      "Una flecha curva"
    ]
  },
  {
    enunciado: "¿Qué es la Receptividad asociada a una transición?",
    correcta: "La condición lógica (fórmula booleana de entradas, temporizadores, etc.) que debe ser VERDADERA para franquear la transición",
    incorrectas: [
      "La capacidad de recibir señales",
      "Una acción física"
    ]
  },
  {
    enunciado: "¿Qué es una Acción asociada a etapa?",
    correcta: "La tarea (activar salida, arrancar temporizador) que se ejecuta mientras la etapa correspondiente está ACTIVA",
    incorrectas: [
      "Una película de acción",
      "Algo que pasa siempre"
    ]
  },
  {
    enunciado: "¿Cuál es la regla de evolución fundamental (Franqueo)?",
    correcta: "Una transición se franquea si y solo si: 1. La etapa inmediatamente anterior está activa Y 2. La receptividad asociada es verdadera",
    incorrectas: [
      "Se franquea cuando quiera el operario",
      "Se franquea cada segundo"
    ]
  },
  {
    enunciado: "¿Qué ocurre al franquear una transición?",
    correcta: "Se desactivan todas las etapas inmediatamente anteriores y se activan todas las etapas inmediatamente posteriores simultáneamente",
    incorrectas: [
      "Se apaga el autómata",
      "Se activan las siguientes sin apagar las anteriores"
    ]
  },
  {
    enunciado: "¿Qué es una Divergencia en OR (Selección de secuencia)?",
    correcta: "Cuando de una etapa salen varios caminos posibles, cada uno con su transición. Solo se sigue uno (exclusivo) según qué condición se cumpla primero",
    incorrectas: [
      "Irse por las ramas",
      "Hacer todo a la vez"
    ]
  },
  {
    enunciado: "¿Qué es una Divergencia en AND (Secuencias simultáneas)?",
    correcta: "Cuando una sola transición activa varias etapas en paralelo a la vez (se representa con doble línea horizontal)",
    incorrectas: [
      "Un error de programación",
      "Elegir un camino al azar"
    ]
  },
  {
    enunciado: "¿Qué es una Convergencia en AND (Sincronización)?",
    correcta: "Cuando varias secuencias paralelas se unen en una transición común (doble línea). La transición NO se evalúa hasta que TODAS las etapas previas estén activas (espera)",
    incorrectas: [
      "Chocar dos trenes",
      "Unirse cuando llegue el primero"
    ]
  },
  {
    enunciado: "¿Qué es una Acción Condicional (tipo C)?",
    correcta: "Una acción que se ejecuta solo si la etapa está activa Y ademas se cumple una condición lógica adicional especificada",
    incorrectas: [
      "Una acción dudosa",
      "Una acción obligatoria"
    ]
  },
  {
    enunciado: "¿Qué es una Acción Retardada (tipo D o Delay)?",
    correcta: "Una acción que comienza un tiempo T después de activarse la etapa (si la etapa sigue activa)",
    incorrectas: [
      "Una acción lenta",
      "Una acción pasada"
    ]
  },
  {
    enunciado: "¿Qué es una Acción Limitada en el tiempo (tipo L)?",
    correcta: "Una acción que se activa con la etapa pero se corta automáticamente tras un tiempo T, aunque la etapa siga activa",
    incorrectas: [
      "Una acción corta",
      "Una acción prohibida"
    ]
  },
  {
    enunciado: "¿Qué es una Acción Memorizada (Set/Reset)?",
    correcta: "Una acción que se activa (Set) en una etapa y permanece activa aunque la etapa se desactive, hasta que otra etapa haga Reset explícito",
    incorrectas: [
      "Una acción inolvidable",
      "Una acción continua"
    ]
  },
  {
    enunciado: "¿Puede haber dos etapas consecutivas sin transición entre ellas?",
    correcta: "No, nunca. La estructura siempre debe ser Etapa-Transición-Etapa",
    incorrectas: [
      "Sí, para ir más rápido",
      "Depende del autómata"
    ]
  },
  {
    enunciado: "¿Puede haber dos transiciones consecutivas sin etapa entre ellas?",
    correcta: "No, nunca",
    incorrectas: [
      "Sí, se suman",
      "A veces"
    ]
  },
  {
    enunciado: "¿Qué es el Nivel 1 de GRAFCET?",
    correcta: "Descripción funcional literal (sin especificar tecnología, ej. 'Abrir puerta'), enfocado a entender el proceso",
    incorrectas: [
      "Nivel de experto",
      "Nivel físico"
    ]
  },
  {
    enunciado: "¿Qué es el Nivel 2 de GRAFCET?",
    correcta: "Descripción tecnológica, usando los símbolos de sensores y actuadores reales (ej. 'Activar km1', 'Si I0.0')",
    incorrectas: [
      "Nivel intermedio",
      "Nivel de videojuego"
    ]
  },
  {
    enunciado: "¿Qué es una Macroetapa?",
    correcta: "Una etapa que representa o 'encapsula' a otro GRAFCET completo (expansión), simplificando la visión global del proceso principal (Top-Down)",
    incorrectas: [
      "Una etapa muy grande",
      "Una etapa importante"
    ]
  },
  {
    enunciado: "¿Qué significa el punto (bullet) junto a una acción?",
    correcta: "Nada estandarizado universalmente, pero a veces indica acción forzada o condicionada; lo normal es rectángulo rectangular",
    incorrectas: [
      "Que es peligrosa",
      "Que es opcional"
    ]
  },
  {
    enunciado: "¿Qué es la etapa 'Fuente' y etapa 'Pozo'?",
    correcta: "Definiciones teóricas de grafos: Fuente (solo salidas, inicial), Pozo (solo entradas, final sin salida). En control cíclico industrial no suelen usarse pozos (bucle cerrado)",
    incorrectas: [
      "Etapas de agua",
      "Etapas de energía"
    ]
  },
  {
    enunciado: "¿Cómo se resuelve una divergencia OR exclusiva si dos condiciones son ciertas a la vez?",
    correcta: "Es un conflicto. Se debe programar prioridad (ej. orden de evaluación izquierda a derecha) o usar condiciones mutuamente excluyentes en el diseño",
    incorrectas: [
      "El autómata explota",
      "Se activan las dos ramas a la vez (error)"
    ]
  },
  {
    enunciado: "¿Qué es un GRAFCET lineal?",
    correcta: "Aquel que consiste en una sucesión única de etapas sin ramificaciones (divergencias)",
    incorrectas: [
      "Un grafcet dibujado con regla",
      "Un proceso analógico"
    ]
  },
  {
    enunciado: "¿Qué elemento permite contar ciclos (contador) dentro de un GRAFCET?",
    correcta: "No es un elemento gráfico propio, sino una acción en una etapa (incrementar variable C) y receptividades que evalúan esa variable (C < 5, C = 5)",
    incorrectas: [
      "Un símbolo de reloj",
      "No se puede contar"
    ]
  },
  {
    enunciado: "¿Cómo se implementa un paro de emergencia en GRAFCET?",
    correcta: "Lo ideal es mediante jerarquía (GRAFCET de seguridad o forzado) que congele o resetee el GRAFCET de producción, no complicando el gráfico normal con miles de flechas de salida",
    incorrectas: [
      "Poniendo una transición de paro en cada etapa",
      "No se implementa"
    ]
  },
  {
    enunciado: "¿Qué es el Forzado de Grafcet (G7)?",
    correcta: "Órdenes superiores (de otro grafcet maestro) que obligan a un grafcet esclavo a ir a una situación determinada (ej. inicialización, pausa)",
    incorrectas: [
      "Obligarle a trabajar",
      "Romper el papel"
    ]
  },
  {
    enunciado: "¿Qué es una transición temporizada?",
    correcta: "Una condición que espera un tiempo T desde que la etapa anterior se activó (notación: t/Xn/5s)",
    incorrectas: [
      "Una transición lenta",
      "Un reloj de arena"
    ]
  },
  {
    enunciado: "¿Qué es la 'Estabilidad' en la evolución?",
    correcta: "Si al franquear una transición se activa una etapa cuya transición siguiente TAMBIÉN es verdadera inmediatamente, se franquea también en el mismo ciclo (evolución fugaz)",
    incorrectas: [
      "Que no se caiga",
      "Que no vibre"
    ]
  },
  {
    enunciado: "¿Qué variable interna del PLC indica si una etapa está activa?",
    correcta: "Normalmente una marca (M) o un bit de un bloque de datos (etapa.x), asociado a cada etapa (ej. X1, X2...)",
    incorrectas: [
      "Una salida Q",
      "Una entrada I"
    ]
  },
  {
    enunciado: "¿Es el SFC (Sequential Function Chart) de la norma IEC 61131-3 lo mismo que GRAFCET?",
    correcta: "Sí, SFC es la implementación normativa estándar del GRAFCET para programación de PLCs",
    incorrectas: [
      "No, no tienen nada que ver",
      "SFC es solo para Siemens"
    ]
  },
  {
    enunciado: "¿Qué es un salto condicional (Salto de paso)?",
    correcta: "Una divergencia OR donde una de las ramas avanza a la siguiente etapa normal y la otra 'salta' varias etapas hacia adelante si se cumple condición (bypass)",
    incorrectas: [
      "Saltar a la comba",
      "Un error"
    ]
  },
  {
    enunciado: "¿Qué es una repetición de secuencia (Bucle)?",
    correcta: "Una divergencia OR que vuelve hacia atrás a una etapa anterior, repitiendo una parte del proceso",
    incorrectas: [
      "Un disco rayado",
      "Un círculo vicioso"
    ]
  },
  {
    enunciado: "¿Qué son las acciones impulsionales?",
    correcta: "Acciones que se ejecutan una sola vez (un scan) en el momento de activación de la etapa (P) o desactivación",
    incorrectas: [
      "Acciones nerviosas",
      "Acciones rápidas"
    ]
  },
  {
    enunciado: "¿Cómo se garantiza que al volver la luz el proceso siga donde estaba?",
    correcta: "Usando marcas retentivas para almacenar el estado de las etapas activas",
    incorrectas: [
      "Es automático siempre",
      "Escribiéndolo en un papel"
    ]
  },
  {
    enunciado: "¿Qué es el sincronismo entre grafcets?",
    correcta: "Usar una etapa (X5) de un Grafcet A como condición de receptividad en un Grafcet B, coordinando sus avances",
    incorrectas: [
      "Ponerlos en hora",
      "Usar el mismo reloj"
    ]
  },
  {
    enunciado: "¿Qué es una acción N (Non-Stored)?",
    correcta: "La acción estándar o continua: activa mientras etapa activa, se apaga al salir",
    incorrectas: [
      "Acción negativa",
      "Acción nueva"
    ]
  },
  {
    enunciado: "¿Qué software se usa para programar SFC?",
    correcta: "El entorno de ingeniería del fabricante (ej. TIA Portal, Studio 5000, CODESYS) que soporte el lenguaje gráfico",
    incorrectas: [
      "Paint",
      "Excel"
    ]
  },
  {
    enunciado: "¿Para qué procesos es ideal el GRAFCET?",
    correcta: "Para procesos secuenciales, cíclicos y de pasos definidos (máquinas de estados). No es óptimo para cálculos matemáticos puros o procesos continuos complejos",
    incorrectas: [
      "Para dibujar planos",
      "Para escribir cartas"
    ]
  }
];
