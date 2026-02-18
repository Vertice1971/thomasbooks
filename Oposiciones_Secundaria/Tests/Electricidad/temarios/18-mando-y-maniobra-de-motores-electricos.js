// 18-mando-y-maniobra-de-motores-electricos.js
var PREGUNTAS = [
  {
    enunciado: "¿Cuál es la función principal de un contactor en un circuito de maniobra?",
    correcta: "Establecer o interrumpir corrientes elevadas (potencia) mediante un circuito de mando de pequeña potencia a distancia",
    incorrectas: [
      "Proteger al motor contra sobrecargas térmicas exclusivamente",
      "Regular la velocidad del motor variando la tensión"
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre la categoría de empleo AC-1 y AC-3 en contactores?",
    correcta: "AC-1 es para cargas resistivas (calefacción), mientras que AC-3 es para motores de jaula de ardilla (arranque y parada), soportando picos de corriente inductiva",
    incorrectas: [
      "AC-1 es para corriente alterna y AC-3 para trifásica exclusivamente",
      "AC-3 es para cargas muy pequeñas como pilotos"
    ]
  },
  {
    enunciado: "¿Qué es el enclavamiento eléctrico entre dos contactores (ej. inversor de giro)?",
    correcta: "Un conexionado de seguridad usando contactos auxiliares cerrados (NC) para impedir que dos contactores incompatibles entren a la vez y provoquen cortocircuito",
    incorrectas: [
      "Unir mecánicamente las bobinas con un alambre",
      "Conectar las bobinas en serie para que funcionen a la mitad de tensión"
    ]
  },
  {
    enunciado: "¿Qué dispositivo protege al motor específicamente contra sobrecargas prolongadas?",
    correcta: "El relé térmico (o guardamotor magnetotérmico)",
    incorrectas: [
      "El fusible de corte rápido",
      "El contactor de maniobra"
    ]
  },
  {
    enunciado: "¿Cómo funciona un arranque Estrella-Triángulo?",
    correcta: "Arranca conectando el motor en estrella (reduciendo tensión y corriente a 1/3) y tras un tiempo conmuta a triángulo para régimen normal",
    incorrectas: [
      "Arranca con una resistencia en serie y luego la quita",
      "Usa un convertidor de frecuencia para arrancar suave"
    ]
  },
  {
    enunciado: "¿Qué condición debe cumplir el motor para permitir un arranque Estrella-Triángulo en una red 400 V?",
    correcta: "Debe ser un motor bitensión 400/690 V (o tener la conexión Triángulo a 400 V), para que soporte 400 V en cada bobina al final",
    incorrectas: [
      "Debe ser un motor 230/400 V estándar",
      "Debe tener solo 3 bornas de salida"
    ]
  },
  {
    enunciado: "¿Qué es un disyuntor guardamotor?",
    correcta: "Un dispositivo de protección que integra función magnética (cortocircuito) y térmica (sobrecarga) en un solo aparato, a menudo con mando manual",
    incorrectas: [
      "Un interruptor que guarda el motor en el almacén",
      "Un relé que solo protege de falta de fase"
    ]
  },
  {
    enunciado: "¿Qué es el circuito de 'autoalimentación' o 'retención' en un arranque directo?",
    correcta: "Un contacto auxiliar NO del contactor en paralelo con el pulsador de marcha, que mantiene la bobina activa al soltar el pulsador",
    incorrectas: [
      "Una batería interna que alimenta el contactor",
      "Un imán permanente que pega los contactos"
    ]
  },
  {
    enunciado: "¿Qué ventaja tiene el arranque por arrancador suave (soft starter) frente al estrella-triángulo?",
    correcta: "Elimina el pico de corriente y par transitorio de la conmutación y permite una rampa de aceleración progresiva sin saltos",
    incorrectas: [
      "Es mucho más barato y sencillo de instalar",
      "No requiere contactor de línea ni protecciones"
    ]
  },
  {
    enunciado: "¿Para qué sirve un temporizador a la conexión (TON)?",
    correcta: "Retarda la activación de sus contactos un tiempo t después de recibir tensión en la bobina (ej. cambio estrella a triángulo)",
    incorrectas: [
      "Retarda la desconexión al quitar la tensión",
      "Muestra la hora actual en un display"
    ]
  },
  {
    enunciado: "¿Qué indica la numeración 13-14 en un contacto auxiliar?",
    correcta: "Que es un contacto Normalmente Abierto (NO/NA)",
    incorrectas: [
      "Que es un contacto Normalmente Cerrado (NC)",
      "Que es un contacto de potencia"
    ]
  },
  {
    enunciado: "¿Y la numeración 21-22?",
    correcta: "Un contacto Normalmente Cerrado (NC)",
    incorrectas: [
      "Un contacto Normalmente Abierto",
      "Un contacto temporizado"
    ]
  },
  {
    enunciado: "¿Qué es el frenado por inyección de corriente continua?",
    correcta: "Un método de frenado donde se desconecta la AC y se inyecta DC al estator, creando un campo magnético fijo que frena el rotor rápidamente",
    incorrectas: [
      "Meter un palo en los radios del motor",
      "Invertir dos fases bruscamente a plena velocidad"
    ]
  },
  {
    enunciado: "¿Qué es el frenado a contracorriente?",
    correcta: "Invertir el sentido del campo giratorio (cambiando fases) mientras el motor gira, produciendo un par de frenado brusco (requiere control para parar a cero)",
    incorrectas: [
      "Frenar el motor con la mano",
      "Desconectar el motor y dejarlo parar por inercia"
    ]
  },
  {
    enunciado: "¿Qué función tienen los fusibles de tipo aM (acompañamiento motor)?",
    correcta: "Soportar la alta corriente de arranque sin fundirse, protegiendo solo contra cortocircuitos (requieren relé térmico adicional)",
    incorrectas: [
      "Proteger contra sobrecargas leves",
      "Fundirse instantáneamente al arrancar para proteger la red"
    ]
  },
  {
    enunciado: "¿Qué es un presostato en un sistema de bombeo?",
    correcta: "Un interruptor accionado por presión que arranca o para la bomba según la presión del circuito hidráulico",
    incorrectas: [
      "Un interruptor que detecta la presencia de personas",
      "Un dispositivo que mide el peso del motor"
    ]
  },
  {
    enunciado: "¿Qué es el arranque rotórico (por resistencias rotóricas)?",
    correcta: "Un método para motores de rotor bobinado que intercala resistencias en el rotor para aumentar el par de arranque y reducir la corriente",
    incorrectas: [
      "Parrancar el motor girándolo con la mano",
      "Poner resistencias en el estator"
    ]
  },
  {
    enunciado: "¿Qué categoría de paro es la Parada de Emergencia (Categoría 0)?",
    correcta: "Supresión inmediata de la energía de los accionadores (parada no controlada por inercia o freno mecánico directo)",
    incorrectas: [
      "Parada controlada manteniendo energía para frenar",
      "Bajar la velocidad al mínimo"
    ]
  },
  {
    enunciado: "¿Qué es un telerruptor?",
    correcta: "Un relé biestable que cambia de estado con cada impulso en la bobina, usado para encender/apagar desde múltiples pulsadores",
    incorrectas: [
      "Un interruptor que se acciona por televisión",
      "Un contactor de muy alta potencia"
    ]
  },
  {
    enunciado: "¿Qué significa el término 'coordinación tipo 2' en arranques?",
    correcta: "Que en caso de cortocircuito, el contactor y el relé térmico no sufren daños (pueden soldarse levemente contactos separables) y el sistema sigue operativo tras resetear",
    incorrectas: [
      "Que hay que cambiar todo el equipo tras un corto porque se destruye",
      "Que coordina dos motores a la vez"
    ]
  },
  {
    enunciado: "¿Qué es un variador de velocidad regenerativo?",
    correcta: "Un variador capaz de devolver la energía de frenado del motor a la red eléctrica en lugar de disiparla en resistencias",
    incorrectas: [
      "Un variador que se repara solo",
      "Un variador que funciona con energía solar exclusivamente"
    ]
  },
  {
    enunciado: "¿Qué es el 'Jogging' o marcha a impulsos?",
    correcta: "Accionar el motor brevemente mientras se mantiene pulsado el botón, sin enclavamiento, para ajustes o posicionamiento",
    incorrectas: [
      "Salir a correr con el motor a cuestas",
      "Dejar el motor funcionando toda la noche"
    ]
  },
  {
    enunciado: "¿Qué tensión suele usarse en circuitos de mando industrial por seguridad?",
    correcta: "24 V (AC o DC), aunque también 110 V o 230 V, pero la muy baja tensión reduce riesgos de electrocución",
    incorrectas: [
      "1000 V para que los contactores sean más rápidos",
      "Siempre 12 V de pila"
    ]
  },
  {
    enunciado: "¿Para qué sirve un detector de nivel por boya?",
    correcta: "Para controlar el llenado o vaciado de depósitos, abriendo o cerrando circuito según la altura del líquido",
    incorrectas: [
      "Para medir la temperatura del agua",
      "Para ver si el agua está limpia"
    ]
  },
  {
    enunciado: "¿Qué es un interruptor final de carrera?",
    correcta: "Un sensor electromecánico que detecta la posición de un elemento móvil al ser pulsado mecánicamente, cortando o dando paso",
    incorrectas: [
      "El interruptor que apaga todo al final de la jornada",
      "Un sensor láser de distancia"
    ]
  },
  {
    enunciado: "¿Qué problema evitan los filtros de red a la entrada de un variador?",
    correcta: "Reducen la emisión de armónicos y ruido de alta frecuencia hacia la red eléctrica y protegen al variador de transitorios",
    incorrectas: [
      "Filtran el polvo del aire",
      "Filtran el aceite del motor"
    ]
  },
  {
    enunciado: "¿Qué es la protección por termistores (PTC) y relé de termistor?",
    correcta: "Un sistema de protección directa del bobinado que dispara cuando la temperatura real sensada supera el límite, independiente de la corriente",
    incorrectas: [
      "Un fusible térmico que se funde y hay que cambiar",
      "Un termómetro visual en la puerta del cuadro"
    ]
  },
  {
    enunciado: "¿Qué es el rearme automático en un relé térmico?",
    correcta: "Una función que permite al relé volver a cerrar el contacto una vez se enfría el bimetal (peligroso en arranques por contacto permanente)",
    incorrectas: [
      "Que el relé se compra solo por internet",
      "Que detecta automáticamente la corriente del motor"
    ]
  },
  {
    enunciado: "¿Dónde se instala el contactor de bypass en un arrancador suave?",
    correcta: "En paralelo con el arrancador, para puentearlo una vez el motor está a plena velocidad y evitar pérdidas de calor en los tiristores",
    incorrectas: [
      "En serie con el motor para protegerlo",
      "En la alimentación del control"
    ]
  },
  {
    enunciado: "¿Qué es el control vectorial en un variador?",
    correcta: "Un modo de control avanzado que gestiona flujo y par independientemente, logrando gran precisión y par a bajas vueltas",
    incorrectas: [
      "Controlar el motor con un dibujo vectorial",
      "Un control simple escalar V/f constante"
    ]
  },
  {
    enunciado: "¿Qué color tiene habitualmente el pulsador de parada?",
    correcta: "Rojo (y normalmente es de tipo NC)",
    incorrectas: [
      "Verde",
      "Azul"
    ]
  },
  {
    enunciado: "¿Y el pulsador de marcha?",
    correcta: "Verde (o negro/blanco), normalmente tipo NO",
    incorrectas: [
      "Rojo",
      "Amarillo intermitente"
    ]
  },
  {
    enunciado: "¿Qué es un transformador de mando?",
    correcta: "Un transformador monofásico que reduce la tensión de red (ej. 400V) a la tensión de control (ej. 24V o 230V) aislando el circuito de mando",
    incorrectas: [
      "El transformador que alimenta el motor principal",
      "Un juguete teledirigido"
    ]
  },
  {
    enunciado: "¿Qué significa que un motor tenga protección IP23?",
    correcta: "Protegido contra dedos ( >12mm) y lluvia cayendo hasta 60º de la vertical (protección básica, ventila mejor pero entra polvo)",
    incorrectas: [
      "Totalmente estanco al polvo y agua",
      "Sumergible"
    ]
  }
];
