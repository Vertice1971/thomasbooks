// 21-bobinado-de-maquinas-de-corriente-alterna.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué es el 'paso polar' en un bobinado de corriente alterna?",
    correcta: "El número de ranuras que corresponden a cada polo del estator (Ranuras / Polos)",
    incorrectas: [
      "La distancia entre la fase L1 y L2",
      "El número de polos dividido por las ranuras"
    ]
  },
  {
    enunciado: "¿Qué significa que un bobinado sea 'concéntrico'?",
    correcta: "Que las bobinas de un mismo grupo polar tienen diferentes tamaños y se colocan una dentro de otra alrededor de un centro común",
    incorrectas: [
      "Que todas las bobinas tienen el mismo centro geométrico en el eje del motor",
      "Que las bobinas son circulares perfectas"
    ]
  },
  {
    enunciado: "¿Qué es un bobinado 'imbricado' en corriente alterna?",
    correcta: "Aquel en el que las bobinas son iguales en forma y tamaño, y se solapan unas con otras avanzando paso a paso por las ranuras",
    incorrectas: [
      "Un bobinado donde los cables se atan con bridas",
      "Un bobinado hecho con tejas de cerámica"
    ]
  },
  {
    enunciado: "¿Qué ventaja ofrece el 'paso acortado' (respecto al paso diametral) en los bobinados de estator?",
    correcta: "Reduce la longitud de las cabezas de bobina (ahorrando cobre) y atenúa ciertos armónicos de la onda de fuerza magnetomotriz",
    incorrectas: [
      "Aumenta la velocidad del motor por encima de la síncrona",
      "Permite usar cables de aluminio en lugar de cobre"
    ]
  },
  {
    enunciado: "¿Qué es el número de ranuras por polo y fase (q)?",
    correcta: "El parámetro de diseño que define cuántas bobinas (o ranuras) corresponden a cada fase bajo cada polo (q = Z / (2p · m))",
    incorrectas: [
      "El número total de ranuras del motor",
      "La cantidad de fases que caben en una ranura"
    ]
  },
  {
    enunciado: "¿Qué es una conexión de polos consecuentes?",
    correcta: "Un tipo de conexión donde se crean polos magnéticos virtuales entre los bobinados físicos, permitiendo obtener el doble de polos que bobinas",
    incorrectas: [
      "Una conexión donde los polos se tocan físicamente",
      "Conectar los polos en serie con la red"
    ]
  },
  {
    enunciado: "¿Cómo funciona el bobinado Dahlander de dos velocidades?",
    correcta: "Es un bobinado único con tomas intermedias que permite cambiar la relación de polos (normalmente 2:1) variando la conexión externa (triángulo/doble estrella, etc.)",
    incorrectas: [
      "Son dos bobinados independientes montados uno encima del otro",
      "Es un bobinado que gira mecánicamente"
    ]
  },
  {
    enunciado: "¿Qué es el 'factor de bobinado'?",
    correcta: "Un coeficiente (menor que 1) que tiene en cuenta la distribución de las bobinas y el acortamiento de paso, reduciendo la tension inducida teórica",
    incorrectas: [
      "El precio del bobinado por kilo",
      "La cantidad de barniz necesaria"
    ]
  },
  {
    enunciado: "¿Qué papel juega el aislamiento de ranura (papel aislante o mylar)?",
    correcta: "Aislar eléctricamente los conductores de cobre respecto al paquete de chapas magnéticas (masa) para evitar derivaciones a tierra",
    incorrectas: [
      "Mejorar el deslizamiento del rotor",
      "Aumentar la resistencia mecánica del estator"
    ]
  },
  {
    enunciado: "¿Qué es el 'aislamiento de fase' o separadores?",
    correcta: "Láminas aislantes que se colocan en las cabezas de bobina para separar físicamente los grupos de bobinas de diferentes fases, donde la diferencia de potencial es máxima (400V)",
    incorrectas: [
      "Separar el motor de la pared",
      "Aislar el eje del rodamiento"
    ]
  },
  {
    enunciado: "¿Qué significa que un bobinado sea de 'simple capa'?",
    correcta: "Que cada ranura contiene un solo lado activo de una bobina (ocupa toda la ranura)",
    incorrectas: [
      "Que solo tiene una capa de barniz",
      "Que el hilo es muy fino"
    ]
  },
  {
    enunciado: "¿Y de 'doble capa'?",
    correcta: "Que en cada ranura se alojan dos lados activos de bobinas diferentes (uno arriba y otro abajo), típico de bobinados imbricados",
    incorrectas: [
      "Que tiene dos carcasas exteriores",
      "Que se bobina dos veces por seguridad"
    ]
  },
  {
    enunciado: "¿Cómo se invierte el sentido de giro del campo magnético en el bobinado?",
    correcta: "Invirtiendo la secuencia de fases de alimentación (intercambiando dos fases cualesquiera en la placa de bornas)",
    incorrectas: [
      "Dando la vuelta al estator físicamente",
      "Bobinando el motor al revés"
    ]
  },
  {
    enunciado: "¿Qué es la 'cuña de cierre' de ranura?",
    correcta: "Una pieza longitudinal de material aislante rígido que se inserta en la boca de la ranura para retener los hilos dentro mecánicamente",
    incorrectas: [
      "Una herramienta para abrir el motor",
      "El tornillo que cierra la tapa"
    ]
  },
  {
    enunciado: "¿Para qué sirve el zunchado o atado de las cabezas de bobina?",
    correcta: "Para compactar el bobinado y evitar que vibre o se mueva por los esfuerzos electrodinámicos (especialmente en el arranque)",
    incorrectas: [
      "Para decorar el interior del motor con cuerda",
      "Para marcar el principio y el final"
    ]
  },
  {
    enunciado: "¿Qué se busca al barnizar por inmersión el estator bobinado?",
    correcta: "Rellenar los huecos de aire para mejorar la transferencia térmica hacia el hierro, aumentar la rigidez dieléctrica y fijar mecánicamente los hilos",
    incorrectas: [
      "Hacerlo impermeable para uso subacuático",
      "Pintarlo para que no se oxide el cobre"
    ]
  },
  {
    enunciado: "¿Qué es un 'grupo' de bobinas?",
    correcta: "El conjunto de bobinas adyacentes conectadas en serie que pertenecen a la misma fase y polo (en bobinados distribuidos)",
    incorrectas: [
      "Varios motores juntos",
      "Un grupo de operarios bobinando"
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre bobinado PAM (Pole Amplitude Modulation) y Dahlander?",
    correcta: "El PAM permite obtener dos velocidades con relaciones distintas a 2:1 mediante una modulación de la amplitud del campo, más complejo de calcular que el Dahlander",
    incorrectas: [
      "El PAM es analógico y el Dahlander digital",
      "El PAM usa imanes y el Dahlander no"
    ]
  },
  {
    enunciado: "¿Qué es el 'esqueleto' o diagrama de principio del bobinado?",
    correcta: "La representación gráfica lineal de las ranuras y bobinas para planificar las conexiones entre grupos antes de ejecutarlo",
    incorrectas: [
      "El chasis metálico del motor",
      "El esquema unifilar de la instalación"
    ]
  },
  {
    enunciado: "¿Qué precaución se debe tener al conectar los grupos polares en serie?",
    correcta: "Respetar la polaridad (principio con principio, final con final en polos consecuentes; o principio con final en polos alternados) para que los campos no se anulen",
    incorrectas: [
      "Usar siempre cable rojo",
      "Soldar con plata obligatoriamente"
    ]
  },
  {
    enunciado: "¿Qué es una sonda PTC o Klixon insertada en la cabeza de bobina?",
    correcta: "Un sensor térmico que debe quedar en contacto íntimo con el cobre para proteger el motor por temperatura real, antes de barnizar",
    incorrectas: [
      "Un micrófono para escuchar el motor",
      "Un chip GPS de localización"
    ]
  },
  {
    enunciado: "¿Qué se entiende por 'equilibrado de fases' en el bobinado?",
    correcta: "Que las tres fases tengan idéntico número de espiras, resistencia y distribución magnética para evitar corrientes desequilibradas",
    incorrectas: [
      "Que pesen lo mismo en la báscula",
      "Que tengan el mismo color de cable"
    ]
  },
  {
    enunciado: "¿Qué es el aislamiento en 'clase H'?",
    correcta: "Materiales aislantes que soportan hasta 180°C de temperatura de servicio",
    incorrectas: [
      "Aislamiento para uso hospitalario",
      "Aislamiento de Hormigón"
    ]
  },
  {
    enunciado: "¿Qué ocurre si se daña el esmalte de un hilo al introducirlo en la ranura?",
    correcta: "Puede producirse un cortocircuito entre espiras (o a masa si toca el hierro), creando una espira en corto que se calentará hasta quemar el motor",
    incorrectas: [
      "Mejora la ventilación en ese punto",
      "No pasa nada, el barniz lo arregla luego"
    ]
  },
  {
    enunciado: "¿Qué es una bobinadora automática de estatores?",
    correcta: "Una máquina que inserta los hilos directamente en las ranuras o preforma las bobinas para inserción automática, usada en producción en serie",
    incorrectas: [
      "Un robot que arregla motores a domicilio",
      "Una herramienta manual de madera"
    ]
  },
  {
    enunciado: "¿Qué función cumple el tubo de fibra de vidrio (macarrón) en las conexiones?",
    correcta: "Aislar las soldaduras de unión entre grupos y los cables de salida a la placa de bornas",
    incorrectas: [
      "Conducir el aire refrigerante",
      "Dar rigidez al eje"
    ]
  },
  {
    enunciado: "¿Cómo se prueba la polaridad de los bobinados si no está marcada?",
    correcta: "Aplicando una baja tensión alterna y usando una brújula (con DC) o midiendo corrientes en vacío para verificar simetría de campos",
    incorrectas: [
      "Conectando a 400V directamente a ver si explota",
      "Mirando el color del cobre"
    ]
  },
  {
    enunciado: "¿Qué es el 'paso de ranura' en grados eléctricos?",
    correcta: "El ángulo eléctrico equivalente entre dos ranuras adyacentes (alpha = 180º / (Ranuras/Polo))",
    incorrectas: [
      "La anchura de la ranura en milímetros",
      "La temperatura de la ranura en grados"
    ]
  },
  {
    enunciado: "¿Qué es un bobinado fraccionario?",
    correcta: "Aquel donde el número de ranuras por polo y fase 'q' no es un número entero, usado para reducir armónicos específicos",
    incorrectas: [
      "Un bobinado que está a medio terminar",
      "Un bobinado partido en dos trozos"
    ]
  },
  {
    enunciado: "¿Qué herramienta se usa para cortar las cabezas de bobina antiguas al reparar?",
    correcta: "Cizalla neumática, sierra radial (con cuidado de no dañar el hierro) o horno de pirólisis para quemar el barniz y retirar el cobre fácil",
    incorrectas: [
      "Tijeras de papel",
      "Un martillo de goma"
    ]
  },
  {
    enunciado: "¿Por qué se calienta el estator antes de barnizar?",
    correcta: "Para eliminar cualquier humedad residual en el aislamiento y dilatar el cobre/hierro facilitando la penetración del barniz",
    incorrectas: [
      "Para que se seque la pintura exterior",
      "Para matar bacterias"
    ]
  },
  {
    enunciado: "¿Qué es la 'holgura' en la ranura?",
    correcta: "El espacio libre que debe quedar para poder insertar los conductores cómodamente sin forzar y dañar el aislamiento (aunque se busca un buen llenado)",
    incorrectas: [
      "Dejar la ranura vacía",
      "El juego del rodamiento"
    ]
  },
  {
    enunciado: "¿Qué indica la conexión YY (doble estrella) en un motor de 9 bornas?",
    correcta: "Conexión paralelo de grupos para la tensión baja (ej. 230V en un motor bitensión americano 230/460)",
    incorrectas: [
      "Conexión de dos motores en serie",
      "Conexión para frenado de emergencia"
    ]
  },
  {
    enunciado: "¿Qué es el devanado de 'part-winding' (devanado partido)?",
    correcta: "Un motor con el bobinado dividido en dos mitades (ej. 50%-50%) que permite arrancar conectando solo una mitad para reducir la corriente de arranque",
    incorrectas: [
      "Un motor que viene desmontado en partes",
      "Un bobinado roto"
    ]
  },
  {
    enunciado: "¿Qué se usa para compactar los hilos dentro de la ranura?",
    correcta: "La 'espada' o atacador (generalmente de fibra o material que no dañe el esmalte) se usa para asentar los hilos al fondo",
    incorrectas: [
      "Un destornillador plano afilado",
      "Un martillo metálico"
    ]
  },
  {
    enunciado: "¿Qué es la prueba de 'Surge' (onda de choque)?",
    correcta: "Una prueba avanzada que aplica pulsos de alta tensión y alta frecuencia para detectar debilidades en el aislamiento entre espiras (que el megger no ve)",
    incorrectas: [
      "Hacer surf con el motor",
      "Una prueba de inmersión en agua"
    ]
  },
  {
    enunciado: "¿Qué papel juega el cartón aislante de cierre sobre la cuña?",
    correcta: "En algunos casos se usa debajo de la cuña para proteger los hilos del roce al meter la cuña deslizante",
    incorrectas: [
      "Decorativo",
      "Para escribir el nombre del operario"
    ]
  },
  {
    enunciado: "¿Qué es un bobinado de polos conmutables tipo 'tres velocidades'?",
    correcta: "Suele combinar un bobinado Dahlander (2 velocidades) y un bobinado independiente (1 velocidad) en el mismo estator",
    incorrectas: [
      "Un motor con caja de cambios mecánica",
      "Tres motores soldados juntos"
    ]
  },
  {
    enunciado: "¿Qué espesor típico tiene el papel de ranura para motores pequeños/medianos?",
    correcta: "Entre 0.15 y 0.35 mm típicamente (ej. Nomex-Mylar-Nomex), dependiendo de la tensión y tamaño de ranura",
    incorrectas: [
      "5 milímetros como mínimo",
      "Papel de fumar extrafino"
    ]
  },
  {
    enunciado: "¿Qué es la 'proyección' de la cabeza de bobina?",
    correcta: "Lo que sobresale el bobinado del paquete de chapas; es crítico controlarla para que no roce con las tapas o escudos al cerrar el motor",
    incorrectas: [
      "Lanzar la bobina lejos",
      "La sombra que hace el motor"
    ]
  }
];
