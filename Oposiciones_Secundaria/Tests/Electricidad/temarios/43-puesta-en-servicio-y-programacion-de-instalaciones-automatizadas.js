// 43-puesta-en-servicio-y-programacion-de-instalaciones-automatizadas.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué es la 'Puesta en Marcha' (Commissioning)?",
    correcta: "El proceso sistemático de verificar, probar y documentar que todos los sistemas e instalaciones funcionan según el diseño y requisitos del cliente antes de la entrega final",
    incorrectas: [
      "Darle al botón de arranque y ver qué pasa",
      "La firma del contrato"
    ]
  },
  {
    enunciado: "¿Qué es el FAT (Factory Acceptance Test)?",
    correcta: "Pruebas de Aceptación en Fábrica: Verificación del cuadro o máquina en las instalaciones del fabricante antes de enviarlo al cliente final",
    incorrectas: [
      "Prueba de grasa",
      "Una prueba fallida"
    ]
  },
  {
    enunciado: "¿Qué es el SAT (Site Acceptance Test)?",
    correcta: "Pruebas de Aceptación en Sitio: Verificación final en la ubicación real del cliente, con todos los periféricos conectados y condiciones reales",
    incorrectas: [
      "Servicio de Asistencia Técnica exclusivamente",
      "Prueba de sábado"
    ]
  },
  {
    enunciado: "¿Qué es la comprobación de E/S (I/O Check)?",
    correcta: "Una fase crítica donde se activa cada sensor y actuador uno por uno para verificar que el cableado es correcto y que el PLC lee/escribe en la dirección de memoria adecuada",
    incorrectas: [
      "Comprobar si hay entrada o salida de personas",
      "Un cheque bancario"
    ]
  },
  {
    enunciado: "¿Qué es el 'Lazo de control' (Control Loop Tuning)?",
    correcta: "Ajustar los parámetros PID (Proporcional, Integral, Derivativo) para que el control de proceso sea estable y responda bien a perturbaciones",
    incorrectas: [
      "Atar los cables con un lazo",
      "Un bucle infinito de programa"
    ]
  },
  {
    enunciado: "¿Qué es la copia de seguridad (Backup) del proyecto?",
    correcta: "Guardar una copia exacta del software final cargado (PLC, HMI, Variadores) en un medio externo seguro para recuperación ante desastres",
    incorrectas: [
      "Ir marcha atrás con seguridad",
      "Copiar a mano el código en papel"
    ]
  },
  {
    enunciado: "¿Qué es el manual de operación?",
    correcta: "Documento entregado al cliente que explica cómo arrancar, parar, operar la máquina en modo normal y qué hacer ante alarmas básicas",
    incorrectas: [
      "El manual de cómo se construyó",
      "Un folleto publicitario"
    ]
  },
  {
    enunciado: "¿Qué es el 'As-Built' (Como construido)?",
    correcta: "La actualización de los esquemas eléctricos y planos para reflejar exactamente cómo ha quedado la instalación final, incluyendo modificaciones de última hora en obra",
    incorrectas: [
      "Como se construyó al principio",
      "Un plano borrador"
    ]
  },
  {
    enunciado: "¿Qué es el modo 'Manual' o 'Jog' en programación?",
    correcta: "Un modo de funcionamiento que permite mover actuadores individualmente mediante pulsadores para ajustes, mantenimiento o desatascos",
    incorrectas: [
      "Mover la máquina empujando con la mano",
      "Correr por la fábrica"
    ]
  },
  {
    enunciado: "¿Qué es el modo 'Automático'?",
    correcta: "El funcionamiento normal secuencial gobernado por el programa del PLC sin intervención humana constante",
    incorrectas: [
      "Que se enciende sola al mirarla",
      "Que no tiene botón de paro"
    ]
  },
  {
    enunciado: "¿Qué es la 'Referencia' o Homing de un eje?",
    correcta: "El procedimiento para que un servo/eje busque su sensor de origen y establezca el 'Cero' de posición real tras encenderse",
    incorrectas: [
      "Irse a casa",
      "Buscar referencias bibliográficas"
    ]
  },
  {
    enunciado: "¿Qué es una alarma 'Bloqueante' (Fault)?",
    correcta: "Un fallo crítico que detiene la máquina inmediatamente y requiere subsanación + rearme antes de poder arrancar de nuevo",
    incorrectas: [
      "Una alarma que cierra la puerta",
      "Un aviso leve"
    ]
  },
  {
    enunciado: "¿Qué es un 'Warning' o Aviso?",
    correcta: "Una notificación de condición anómala pero no crítica (ej. nivel bajo tolva) que permite seguir funcionando o parar suavemente al finalizar ciclo",
    incorrectas: [
      "Una señal de prohibido",
      "Un error fatal"
    ]
  },
  {
    enunciado: "¿Qué es el enclavamiento por software?",
    correcta: "Condiciones lógicas en el programa que impiden acciones incompatibles (ej. NO activar motor DERECHA si motor IZQUIERDA está activo)",
    incorrectas: [
      "Clavar el software con clavos",
      "Un virus"
    ]
  },
  {
    enunciado: "¿Qué es el tiempo de ciclo (Cycle Time) de máquina?",
    correcta: "El tiempo que tarda la máquina en producir una pieza completa; clave para la productividad y validación del proyecto",
    incorrectas: [
      "El tiempo que tarda en encenderse",
      "El ciclo lunar"
    ]
  },
  {
    enunciado: "¿Qué es una rutina de inicialización (Startup)?",
    correcta: "Bloque de código que se ejecuta solo una vez al arrancar el PLC (First Scan) para poner variables a cero, cargar parámetros por defecto, etc.",
    incorrectas: [
      "Empezar a correr",
      "Una rutina de gimnasio"
    ]
  },
  {
    enunciado: "¿Qué es la simulación offline?",
    correcta: "Probar la lógica del programa en el PC usando un PLC virtual (ej. PLCSIM) sin estar conectado al hardware real, para depurar errores lógicos básicos",
    incorrectas: [
      "Jugar a videojuegos",
      "Simular que trabajas"
    ]
  },
  {
    enunciado: "¿Qué es un 'Watchdog' en programación?",
    correcta: "Un temporizador de seguridad que debe ser reiniciado cíclicamente por el programa; si el programa se cuelga, el watchdog salta y pone el sistema en estado seguro",
    incorrectas: [
      "Un perro guardián real",
      "Mirar el reloj"
    ]
  },
  {
    enunciado: "¿Qué es la persistencia o remanencia de datos?",
    correcta: "Capacidad de ciertas variables de memoria de conservar su valor tras un corte de alimentación (gracias a batería o flash), útil para contadores o ajustes",
    incorrectas: [
      "Ser muy pesado",
      "Datos que nunca cambian"
    ]
  },
  {
    enunciado: "¿Qué es el análisis de riesgos funcional?",
    correcta: "Determinar qué puede fallar y qué consecuencias tiene, para programar las protecciones adecuadas (paradas, barreras)",
    incorrectas: [
      "Arriesgarse a ver qué pasa",
      "Un análisis financiero"
    ]
  },
  {
    enunciado: "¿Qué es el 'Override' de velocidad?",
    correcta: "Un potenciómetro o ajuste en pantalla que permite reducir porcentualmente la velocidad global de la máquina (0-100%) durante pruebas para observar mejor",
    incorrectas: [
      "Ir más rápido de lo permitido",
      "Saltarse el semáforo"
    ]
  },
  {
    enunciado: "¿Qué es la trazabilidad?",
    correcta: "Registrar datos de producción (lote, fecha, valores proceso) asociados a cada producto fabricado, guardándolos en base de datos o CSV",
    incorrectas: [
      "Hacer trazos en un papel",
      "Dibujar el plano"
    ]
  },
  {
    enunciado: "¿Qué es una lista de alarmas activa vs histórico?",
    correcta: "Activa muestra los fallos presentes ahora mismo; Histórico guarda un registro cronológico de lo que ocurrió en el pasado (con fecha/hora entrada y salida)",
    incorrectas: [
      "Son lo mismo",
      "Histórico es de cosas antiguas de hace años"
    ]
  },
  {
    enunciado: "¿Qué es el 'dry run' o prueba en vacío?",
    correcta: "Ejecutar el ciclo automático de la máquina sin material (o sin piezas reales) para verificar movimientos sin riesgo de colisión o desperdicio",
    incorrectas: [
      "Correr seco",
      "Prueba de deshumidificación"
    ]
  },
  {
    enunciado: "¿Qué es el escalado de señales analógicas?",
    correcta: "Convertir el valor digital crudo (ej. 0-27648) del conversor A/D a unidades de ingeniería reales (ej. 0-100 ºC) mediante una fórmula lineal (y=mx+n)",
    incorrectas: [
      "Subir una escalera",
      "Hacer la señal más grande"
    ]
  },
  {
    enunciado: "¿Qué es la zona de seguridad o 'Home position'?",
    correcta: "Una posición física de la máquina donde es seguro que arranque o donde se retira para mantenimiento",
    incorrectas: [
      "La zona de confort del programador",
      "Irse a casa"
    ]
  },
  {
    enunciado: "¿Qué es el Control de Versiones del software?",
    correcta: "Llevar un registro ordenado de los cambios en el programa (v1.0, v1.1...), guardando copias de cada hito importante por si hay que retroceder",
    incorrectas: [
      "Tener muchas versiones piratas",
      "Versiones de canciones"
    ]
  },
  {
    enunciado: "¿Qué es la carga (Download) vs subida (Upload) en PLCs?",
    correcta: "Confuso a veces, pero generalmente: Download es PC -> PLC (bajar programa al autómata), Upload es PLC -> PC (recuperar programa del autómata)",
    incorrectas: [
      "Upload es subir a la nube",
      "Download es descargar de internet"
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre Reset y Restart?",
    correcta: "Reset suele borrar errores y dejar listo para arrancar; Restart implica parar y volver a iniciar el proceso desde cero",
    incorrectas: [
      "Ninguna",
      "Reset es apagar la luz"
    ]
  },
  {
    enunciado: "¿Qué es la parametrización de un Variador?",
    correcta: "Configurar los parámetros internos del drive (rampas, corriente motor, I/O, modo de control) para adaptarlo al motor y aplicación concreta",
    incorrectas: [
      "Medir el variador",
      "Pintarlo de colores"
    ]
  },
  {
    enunciado: "¿Qué es el autotuning de un variador?",
    correcta: "Un procedimiento donde el variador inyecta corriente al motor parado (o girando) para medir automáticamente resistencia e inductancia y optimizar el modelo de control",
    incorrectas: [
      "Sintonizar la radio",
      "Automovilismo tunning"
    ]
  },
  {
    enunciado: "¿Qué es el 'Heartbeat' o señal de vida entre PLCs?",
    correcta: "Un bit que cambia cíclicamente (0-1-0-1) enviado entre dos equipos comunicados (ej. PLC-HMI); si deja de cambiar, indica pérdida de comunicación",
    incorrectas: [
      "El latido del operario",
      "Un sensor cardíaco"
    ]
  },
  {
    enunciado: "¿Qué es un comentario en el código?",
    correcta: "Texto que no ejecuta el procesador pero explica al programador humano qué hace esa parte del código; vital para el mantenimiento futuro",
    incorrectas: [
      "Hablar con el PLC",
      "Ruido en la señal"
    ]
  },
  {
    enunciado: "¿Qué es la tabla de símbolos o Tags?",
    correcta: "La lista que asocia direcciones de memoria física (ej. I0.0, MW10) con nombres simbólicos legibles (ej. 'Pulsador_Marcha', 'Temperatura_Horno')",
    incorrectas: [
      "Un grafiti",
      "Una tabla de precios"
    ]
  },
  {
    enunciado: "¿Qué es una FB (Function Block) vs FC (Function)?",
    correcta: "En estándar IEC 61131, la FB tiene memoria propia (DB de instancia) y recuerda valores entre llamadas; la FC no tiene memoria propia (si no usas globales)",
    incorrectas: [
      "FB es Facebook y FC Fútbol Club",
      "Son iguales"
    ]
  },
  {
    enunciado: "¿Qué es el Cross-Reference (Referencias cruzadas)?",
    correcta: "Herramienta del entorno de programación que lista dónde se usa cada variable (dónde se lee y dónde se escribe), imprescindible para depurar",
    incorrectas: [
      "Cruzar los dedos",
      "Referencias bibliográficas"
    ]
  },
  {
    enunciado: "¿Qué es el mantenimiento remoto (Teleservice)?",
    correcta: "Acceder al PLC vía internet (VPN segura) para diagnosticar fallos o modificar programa sin viajar a la planta",
    incorrectas: [
      "Llamar por teléfono al técnico",
      "Usar un telescopio"
    ]
  },
  {
    enunciado: "¿Qué es la validación de seguridad (Safety Validation)?",
    correcta: "Comprobar físicamente que todas las setas, barreras y puertas paran la máquina con categoría de seguridad requerida, documentando los tiempos de parada",
    incorrectas: [
      "Ver si la máquina es bonita",
      "Validar el billete"
    ]
  },
  {
    enunciado: "¿Qué es la formación a usuarios?",
    correcta: "Enseñar a los operarios (uso) y técnicos de mantenimiento (resolución averías) cómo funciona la instalación nueva",
    incorrectas: [
      "Formar una fila",
      "Dar clases de matemáticas"
    ]
  },
  {
    enunciado: "¿Qué es el Acta de Recepción?",
    correcta: "El documento legal firmado por cliente y proveedor certificando que la instalación funciona correctamente y empieza el periodo de garantía",
    incorrectas: [
      "Un acta de nacimiento",
      "Recibir una carta"
    ]
  }
];
