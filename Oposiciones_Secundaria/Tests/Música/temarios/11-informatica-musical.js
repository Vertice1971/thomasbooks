// 11-informatica-musical.js

var PREGUNTAS = [
  {
    enunciado: "¿Qué significan las siglas MIDI, estándar fundamental en la informática musical desde 1983?",
    correcta: "Musical Instrument Digital Interface.",
    incorrectas: [
      "Musical Instruction Data Information.",
      "Multitrack Interactive Digital Instrument."
    ]
  },
  {
    enunciado: "En el protocolo MIDI, ¿cuál es el rango de valores posibles para parámetros como la velocidad de pulsación o el número de programa?",
    correcta: "De $0$ a $127$.",
    incorrectas: [
      "De $1$ a $100$.",
      "De $0$ a $1024$."
    ]
  },
  {
    enunciado: "¿Qué función principal cumple un software denominado DAW (Digital Audio Workstation)?",
    correcta: "Integrar la grabación, edición, mezcla y procesamiento de audio digital y datos MIDI en un entorno único.",
    incorrectas: [
      "Traducir automáticamente partituras manuscritas a archivos de texto plano.",
      "Gestionar exclusivamente la venta de entradas y derechos de autor en plataformas digitales."
    ]
  },
  {
    enunciado: "¿Cuál es la frecuencia de muestreo (sampling rate) estándar de un CD de audio para garantizar la fidelidad según el teorema de Nyquist?",
    correcta: "$44.100$ $Hz$.",
    incorrectas: [
      "$22.050$ $Hz$.",
      "$96.000$ $Hz$."
    ]
  },
  {
    enunciado: "Un archivo con extensión '.sf2' (SoundFont) se utiliza habitualmente para:",
    correcta: "Almacenar muestras de sonido (samples) que un sintetizador o secuenciador utiliza para reproducir datos MIDI.",
    incorrectas: [
      "Guardar metadatos de video en alta definición asociados a una ópera.",
      "Comprimir archivos de texto para manuales de instrucciones de hardware."
    ]
  },
  {
    enunciado: "¿Qué diferencia fundamental existe entre un archivo MIDI y un archivo de audio (como WAV o MP3)?",
    correcta: "El MIDI contiene instrucciones de interpretación (eventos); el audio contiene la grabación de la onda sonora real.",
    incorrectas: [
      "El MIDI solo puede escucharse en ordenadores antiguos y el audio en dispositivos modernos.",
      "El audio ocupa mucho menos espacio en disco que un archivo MIDI equivalente."
    ]
  },
  {
    enunciado: "En la síntesis de sonido, la 'Síntesis Aditiva' se basa en:",
    correcta: "La suma de múltiples ondas senoidales de diferentes frecuencias y amplitudes para crear timbres complejos.",
    incorrectas: [
      "La eliminación de frecuencias de una onda rica en armónicos mediante el uso de filtros.",
      "La grabación de sonidos de la naturaleza para su posterior reproducción en bucle."
    ]
  },
  {
    enunciado: "El estándar 'General MIDI' (GM) se creó para asegurar que:",
    correcta: "Un archivo MIDI suene con los mismos instrumentos (ej. piano en el programa 1) en cualquier dispositivo compatible.",
    incorrectas: [
      "La música digital no pueda ser copiada ilegalmente mediante sistemas de encriptación.",
      "Todos los teclados electrónicos tengan exactamente $88$ teclas contrapesadas."
    ]
  },
  {
    enunciado: "¿Qué es un plugin VST (Virtual Studio Technology)?",
    correcta: "Un módulo de software que añade instrumentos virtuales o efectos de audio a un programa anfitrión (DAW).",
    incorrectas: [
      "Un cable físico de alta velocidad para conectar altavoces al ordenador.",
      "Un formato de compresión de imagen para portadas de álbumes digitales."
    ]
  },
  {
    enunciado: "En el ámbito de la didáctica, un software de edición de partituras (como Sibelius o Finale) permite principalmente:",
    correcta: "Fomentar la composición y el análisis mediante la creación de materiales gráficos musicales de alta calidad.",
    incorrectas: [
      "Afinar automáticamente la voz de los alumnos mientras cantan en el aula.",
      "Sustituir la necesidad de aprender solfeo mediante el uso de dibujos animados."
    ]
  },
  {
    enunciado: "¿Qué proceso describe la 'Cuantización' en un secuenciador MIDI?",
    correcta: "Ajustar automáticamente el inicio y duración de las notas a la rejilla rítmica más cercana para corregir imprecisiones.",
    incorrectas: [
      "Aumentar el volumen de las notas más agudas para que destaquen en la mezcla.",
      "Cambiar el timbre de un violín por el de una trompeta de forma instantánea."
    ]
  },
  {
    enunciado: "La síntesis por 'Modulación de Frecuencia' (FM), popularizada por el Yamaha DX7, se basa en:",
    correcta: "Alterar la frecuencia de una onda portadora mediante otra onda moduladora para crear espectros armónicos ricos.",
    incorrectas: [
      "Sumar el volumen de dos altavoces para evitar la distorsión armónica.",
      "Utilizar cintas magnetofónicas cortadas y pegadas de forma aleatoria."
    ]
  },
  {
    enunciado: "¿Cuál es el objetivo didáctico de los programas de 'Ear Training' (entrenamiento auditivo)?",
    correcta: "Desarrollar la audición relativa, el reconocimiento de intervalos, acordes y dictados mediante ejercicios interactivos.",
    incorrectas: [
      "Medir la capacidad física del tímpano ante sonidos de alta intensidad.",
      "Aprender a reparar auriculares estropeados mediante tutoriales en video."
    ]
  },
  {
    enunciado: "Un formato de audio 'lossless' (sin pérdida) como el FLAC se caracteriza por:",
    correcta: "Reducir el tamaño del archivo sin eliminar ninguna información de la onda sonora original.",
    incorrectas: [
      "Eliminar las frecuencias inaudibles para el oído humano para ahorrar espacio.",
      "Convertir automáticamente la música monofónica en estereofónica."
    ]
  },
  {
    enunciado: "¿Qué función cumple un 'Secuenciador'?",
    correcta: "Grabar, editar y reproducir una sucesión de eventos musicales (normalmente MIDI) organizados en el tiempo.",
    incorrectas: [
      "Ordenar las partituras en el atril de forma automática mediante sensores de peso.",
      "Limpiar el ruido de fondo de las grabaciones históricas de gramófono."
    ]
  },
  {
    enunciado: "En el lenguaje MIDI, el mensaje 'Note On' incluye información sobre:",
    correcta: "El número de la nota (altura), el canal y la velocidad (intensidad).",
    incorrectas: [
      "La letra de la canción y el nombre del compositor.",
      "La temperatura de los circuitos del sintetizador en ese momento."
    ]
  },
  {
    enunciado: "La 'Latencia' en un sistema informático musical se define como:",
    correcta: "El retraso temporal entre la entrada de una señal (o pulsación) y su salida procesada por el sistema.",
    incorrectas: [
      "La calidad máxima de bits a la que se puede grabar un instrumento de viento.",
      "La distancia física entre el teclado MIDI y la pantalla del ordenador."
    ]
  },
  {
    enunciado: "¿Qué es la 'Síntesis Sustractiva'?",
    correcta: "Un método que genera sonidos filtrando frecuencias de una onda rica en armónicos (como una onda de sierra o cuadrada).",
    incorrectas: [
      "Restar el volumen de la melodía al volumen del acompañamiento.",
      "Eliminar los instrumentos de cuerda de una grabación orquestal."
    ]
  },
  {
    enunciado: "Un sistema 'Multitímbrico' es aquel capaz de:",
    correcta: "Reproducir simultáneamente diferentes sonidos o parches en distintos canales MIDI.",
    incorrectas: [
      "Cambiar el color de las luces del escenario según la nota que suene.",
      "Afinar todos los instrumentos de una banda de forma inalámbrica."
    ]
  },
  {
    enunciado: "El uso de la informática en la 'Interpretación' ha permitido el desarrollo de:",
    correcta: "Instrumentos controladores (teclados, pads, vientos MIDI) que disparan sonidos virtuales en tiempo real.",
    incorrectas: [
      "Sustituir el talento del músico por una máquina que decide qué notas tocar sin intervención humana.",
      "Eliminar la necesidad de ensayar antes de un concierto en directo."
    ]
  },
  {
    enunciado: "¿Qué ventaja aporta el uso de 'Pizarras Digitales Interactivas' en la didáctica musical?",
    correcta: "Visualizar y manipular elementos del lenguaje musical de forma colaborativa y multimedia.",
    incorrectas: [
      "Evitar que los alumnos tengan que escribir en sus cuadernos personales.",
      "Sustituir el sonido de los instrumentos reales por grabaciones de baja calidad."
    ]
  },
  {
    enunciado: "En edición de audio, la 'Normalización' consiste en:",
    correcta: "Ajustar el nivel máximo de una señal a un valor determinado (normalmente $0$ $dB$) sin alterar su rango dinámico relativo.",
    incorrectas: [
      "Hacer que todos los alumnos de la clase canten a la misma velocidad.",
      "Convertir un archivo de audio en una partitura de piano de forma perfecta."
    ]
  },
  {
    enunciado: "¿Qué es el 'Aliasing' en audio digital?",
    correcta: "Una distorsión producida cuando la frecuencia de la señal supera la mitad de la frecuencia de muestreo.",
    incorrectas: [
      "El nombre artístico que utilizan los compositores de música electrónica.",
      "Un tipo de filtro que resalta las frecuencias medias de la voz humana."
    ]
  },
  {
    enunciado: "Los sistemas de 'Notación Musical Automática' (OCR musical) sirven para:",
    correcta: "Escanear partituras impresas y convertirlas en archivos editables (MIDI o XML).",
    incorrectas: [
      "Aprender a escribir notas a mano sobre un papel pautado de forma tradicional.",
      "Inventar nuevas notas musicales que no existen en el sistema tonal."
    ]
  },
  {
    enunciado: "La 'Síntesis por Tabla de Ondas' (Wavetable) utiliza:",
    correcta: "Muestras cíclicas de ondas grabadas que se pueden recorrer y transformar dinámicamente.",
    incorrectas: [
      "Tablas de multiplicar para calcular la frecuencia de los acordes.",
      "Muebles de madera diseñados para soportar sintetizadores pesados."
    ]
  },
  {
    enunciado: "En un DAW, ¿qué permite el uso de 'Automatizaciones'?",
    correcta: "Programar cambios temporales de parámetros como volumen, paneo o efectos durante la reproducción.",
    incorrectas: [
      "Que el ordenador decida qué nota es la siguiente en una improvisación.",
      "Encender y apagar las luces del aula de forma automática al detectar música."
    ]
  },
  {
    enunciado: "¿Qué es la 'Resolución de Bits' (bit depth) en una grabación?",
    correcta: "El número de valores posibles para representar la amplitud de la señal; determina el rango dinámico.",
    incorrectas: [
      "La cantidad de instrumentos que pueden sonar a la vez en un archivo MP3.",
      "La velocidad a la que giran los ventiladores del ordenador durante la edición."
    ]
  },
  {
    enunciado: "El software 'Audacity' es un ejemplo de:",
    correcta: "Editor de audio multipista de código abierto y gratuito.",
    incorrectas: [
      "Secuenciador profesional de pago para composición de bandas sonoras.",
      "Programa de diseño gráfico para crear carteles de conciertos."
    ]
  },
  {
    enunciado: "¿Qué función tiene un 'Filtro de Paso Bajo' (Low Pass Filter)?",
    correcta: "Permitir el paso de las frecuencias graves y atenuar las agudas a partir de una frecuencia de corte.",
    incorrectas: [
      "Impedir que el sonido salga por los altavoces si el volumen es muy bajo.",
      "Convertir un sonido estéreo en uno monofónico de forma automática."
    ]
  },
  {
    enunciado: "En la composición asistida por ordenador, los 'Algoritmos Generativos' permiten:",
    correcta: "Crear estructuras musicales basadas en reglas lógicas, azar controlado o funciones matemáticas.",
    incorrectas: [
      "Aprender a tocar el violín en menos de veinticuatro horas mediante hipnosis.",
      "Borrar las notas erróneas de una partitura antigua sin dejar rastro."
    ]
  },
  {
    enunciado: "¿Qué es el 'Paneo' (Pan) en una mezcla de audio?",
    correcta: "La distribución de una señal sonora en el campo estéreo (izquierda/derecha).",
    incorrectas: [
      "La técnica de golpear el ordenador cuando el software se bloquea.",
      "La capacidad de un altavoz para reproducir frecuencias ultrasónicas."
    ]
  },
  {
    enunciado: "Un controlador de 'Viento MIDI' (EWI) permite al intérprete:",
    correcta: "Utilizar técnicas de ejecución de instrumentos de madera para controlar sintetizadores externos.",
    incorrectas: [
      "Producir aire comprimido para limpiar los teclados de los ordenadores.",
      "Medir la velocidad del viento en el escenario durante festivales al aire libre."
    ]
  },
  {
    enunciado: "En la didáctica del lenguaje musical, el uso de 'Apps' de ritmo ayuda a:",
    correcta: "Trabajar la precisión rítmica y la coordinación motriz mediante la gamificación.",
    incorrectas: [
      "Sustituir la necesidad de practicar con instrumentos reales en casa.",
      "Contar el número de veces que el alumno parpadea durante un dictado."
    ]
  },
  {
    enunciado: "El formato 'Standard MIDI File' (SMF) tipo 1 se caracteriza por:",
    correcta: "Contener varias pistas independientes que se reproducen de forma simultánea.",
    incorrectas: [
      "Grabar el sonido real de los instrumentos en alta fidelidad.",
      "Permitir solo una pista donde todos los datos están mezclados."
    ]
  },
  {
    enunciado: "En acústica digital, ¿qué es la 'Interpolación'?",
    correcta: "El proceso de estimar valores intermedios entre dos muestras digitales al realizar cambios de tono o tiempo.",
    incorrectas: [
      "El diálogo que mantienen dos músicos durante un concierto de Jazz.",
      "La traducción de una partitura de piano a una de guitarra clásica."
    ]
  },
  {
    enunciado: "Un 'Sampler' es un dispositivo o software que:",
    correcta: "Permite grabar fragmentos de sonido real y dispararlos mediante un teclado o secuenciador.",
    incorrectas: [
      "Mide la temperatura de la sala para ajustar la afinación de las cuerdas.",
      "Calcula automáticamente el precio de los instrumentos en el mercado."
    ]
  },
  {
    enunciado: "El uso de la 'Nube' (Cloud Computing) en educación musical facilita:",
    correcta: "El trabajo colaborativo a distancia y el almacenamiento de proyectos accesibles desde cualquier lugar.",
    incorrectas: [
      "La producción de lluvia artificial durante las clases de música programada.",
      "La eliminación de la necesidad de tener profesores humanos en los institutos."
    ]
  },
  {
    enunciado: "¿Qué es un 'Arpegiador' en un sintetizador?",
    correcta: "Una función que convierte un acorde mantenido en una sucesión de notas individuales según un patrón.",
    incorrectas: [
      "Un accesorio para afinar las cuerdas del arpa sin tocarlas.",
      "Un efecto que añade eco a las notas más graves de un piano."
    ]
  },
  {
    enunciado: "La 'Compresión de Rango Dinámico' en audio sirve para:",
    correcta: "Reducir la diferencia entre los sonidos más fuertes y los más suaves, logrando una señal más homogénea.",
    incorrectas: [
      "Hacer que el archivo ocupe menos espacio en el disco duro del ordenador.",
      "Eliminar los silencios que hay entre las diferentes canciones de un disco."
    ]
  },
  {
    enunciado: "En el aula de música, la informática debe considerarse como:",
    correcta: "Un recurso versátil que complementa la formación humanística, técnica y creativa del alumnado.",
    incorrectas: [
      "El único medio de expresión válido, invalidando el uso de instrumentos acústicos.",
      "Un sistema para entretener a los alumnos mientras el docente realiza tareas administrativas."
    ]
  }
];