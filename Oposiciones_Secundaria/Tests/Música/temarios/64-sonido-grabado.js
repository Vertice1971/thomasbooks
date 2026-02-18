// 64-sonido-grabado.js

var PREGUNTAS = [
  {
    enunciado: "¿Quién inventó el fonógrafo en 1877, el primer aparato capaz de grabar y reproducir sonido?",
    correcta: "Thomas Alva Edison.",
    incorrectas: [
      "Alexander Graham Bell.",
      "Emile Berliner."
    ]
  },
  {
    enunciado: "¿En qué soporte físico grababa el sonido el fonógrafo original?",
    correcta: "En cilindros de cera o papel de estaño.",
    incorrectas: [
      "En discos de vinilo.",
      "En cintas de papel perforado."
    ]
  },
  {
    enunciado: "¿Qué invento de Emile Berliner sustituyó al cilindro por el disco plano y permitió la duplicación masiva?",
    correcta: "El gramófono.",
    incorrectas: [
      "El magnetófono.",
      "El tocadiscos."
    ]
  },
  {
    enunciado: "Antes de la electricidad, la grabación era 'acústica', lo que significaba que:",
    correcta: "Los músicos tocaban frente a una gran bocina que hacía vibrar físicamente la aguja grabadora.",
    incorrectas: [
      "Se usaban micrófonos de carbón conectados a una batería.",
      "El sonido se guardaba mediante luces de colores."
    ]
  },
  {
    enunciado: "¿Qué avance técnico en los años 20 permitió mejorar drásticamente la fidelidad gracias al uso de micrófonos y amplificadores?",
    correcta: "La grabación eléctrica.",
    incorrectas: [
      "La grabación digital.",
      "El sistema estéreo."
    ]
  },
  {
    enunciado: "¿Qué material sustituyó a la goma laca (shellac) tras la Segunda Guerra Mundial, permitiendo discos más ligeros y duraderos?",
    correcta: "El vinilo (cloruro de polivinilo).",
    incorrectas: [
      "El aluminio.",
      "La baquelita."
    ]
  },
  {
    enunciado: "¿Qué significa el término 'LP' introducido por Columbia Records en 1948?",
    correcta: "Long Play (Larga Duración), que giraba a 33⅓ RPM.",
    incorrectas: [
      "Low Price (Bajo Precio).",
      "Laser Phono (Fono Láser)."
    ]
  },
  {
    enunciado: "¿Qué soporte fue diseñado principalmente para singles (canciones sueltas) y giraba a 45 RPM?",
    correcta: "El disco de 7 pulgadas.",
    incorrectas: [
      "El cassette.",
      "El CD-Single."
    ]
  },
  {
    enunciado: "¿Qué tecnología alemana, desarrollada en los años 30 y 40, revolucionó el estudio al permitir editar el sonido cortando y pegando?",
    correcta: "La cinta magnetofónica (Magnetófono).",
    incorrectas: [
      "El disco de microsurco.",
      "La grabación en hilo de acero."
    ]
  },
  {
    enunciado: "La grabación 'Estereofónica' se basa en:",
    correcta: "Utilizar dos canales independientes para crear una sensación de espacio y dirección del sonido.",
    incorrectas: [
      "Grabar el sonido tres veces para que suene más fuerte.",
      "Usar un solo altavoz de gran tamaño."
    ]
  },
  {
    enunciado: "¿Qué es la 'Grabación Multipista'?",
    correcta: "La capacidad de grabar diferentes instrumentos en pistas separadas para mezclarlos después.",
    incorrectas: [
      "Hacer muchas copias de un mismo disco a la vez.",
      "Grabar un concierto con mil micrófonos diferentes."
    ]
  },
  {
    enunciado: "¿Qué formato doméstico de cinta, lanzado por Philips en 1963, permitió la portabilidad y la grabación casera?",
    correcta: "El Compact Cassette.",
    incorrectas: [
      "El MiniDisc.",
      "El VHS."
    ]
  },
  {
    enunciado: "¿Qué es la 'Digitalización' del sonido?",
    correcta: "Convertir la onda sonora analógica en una secuencia de números (bits).",
    incorrectas: [
      "Limpiar un disco antiguo con productos digitales.",
      "Tocar un instrumento con los dedos (dígitos)."
    ]
  },
  {
    enunciado: "¿Qué soporte óptico, lanzado en 1982, marcó el inicio del dominio digital en el mercado de consumo?",
    correcta: "El Compact Disc (CD).",
    incorrectas: [
      "El DVD-Audio.",
      "El LaserDisc."
    ]
  },
  {
    enunciado: "¿Qué ventaja principal ofrecía el CD frente al vinilo en su lanzamiento?",
    correcta: "Ausencia de ruido de fondo, mayor rango dinámico y resistencia al desgaste físico.",
    incorrectas: [
      "Que se podía escuchar sin necesidad de electricidad.",
      "Que la música sonaba siempre más lenta."
    ]
  },
  {
    enunciado: "¿Qué formato de compresión de audio revolucionó internet a finales de los 90 al reducir el tamaño de los archivos?",
    correcta: "MP3.",
    incorrectas: [
      "WAV.",
      "MIDI."
    ]
  },
  {
    enunciado: "¿Qué es el 'Muestreo' (Sampling) en la grabación digital?",
    correcta: "El número de veces por segundo que se toma una medida de la amplitud de la onda sonora.",
    incorrectas: [
      "Regalar muestras de discos en la puerta de las tiendas.",
      "Grabar solo los mejores trozos de una canción."
    ]
  },
  {
    enunciado: "La frecuencia de muestreo estándar de un CD de audio es de:",
    correcta: "44.1 kHz.",
    incorrectas: [
      "100 kHz.",
      "20 kHz."
    ]
  },
  {
    enunciado: "¿Qué plataforma fue pionera en el intercambio masivo de archivos musicales P2P, cambiando la industria para siempre?",
    correcta: "Napster.",
    incorrectas: [
      "iTunes.",
      "Spotify."
    ]
  },
  {
    enunciado: "¿Qué es el 'Streaming'?",
    correcta: "La distribución de audio a través de internet sin necesidad de descargar el archivo completo.",
    incorrectas: [
      "Grabar música debajo del agua.",
      "Un tipo de micrófono de alta sensibilidad."
    ]
  },
  {
    enunciado: "¿Qué significa 'Audio de Alta Resolución' (Hi-Res)?",
    correcta: "Audio con una tasa de muestreo y profundidad de bits superior a la del CD estándar.",
    incorrectas: [
      "Música que se escucha muy fuerte por los altavoces.",
      "Grabar música con cámaras de video 4K."
    ]
  },
  {
    enunciado: "¿Qué es la 'Masterización'?",
    correcta: "El proceso final de tratamiento del sonido para equilibrar el conjunto y prepararlo para su distribución.",
    incorrectas: [
      "Aprender a tocar todos los instrumentos de una orquesta.",
      "Hacer que el cantante sea el jefe del estudio."
    ]
  },
  {
    enunciado: "¿Qué función cumple el 'Micrófono de Condensador' en un estudio?",
    correcta: "Captar el sonido con gran detalle y fidelidad gracias a su sensibilidad.",
    incorrectas: [
      "Amplificar el sonido para que se oiga en todo el edificio.",
      "Grabar música sin necesidad de cables."
    ]
  },
  {
    enunciado: "¿Qué es un DAW (Digital Audio Workstation)?",
    correcta: "Un software dedicado a la grabación, edición y mezcla de audio digital (ej. Pro Tools, Logic).",
    incorrectas: [
      "Un tipo de altavoz de madera.",
      "La marca del primer fonógrafo de Edison."
    ]
  },
  {
    enunciado: "¿Qué es la 'Relación Señal/Ruido'?",
    correcta: "La proporción entre el sonido deseado y el ruido de fondo no deseado de un sistema.",
    incorrectas: [
      "El número de personas que hablan durante un concierto.",
      "La distancia entre el micrófono y el cantante."
    ]
  },
  {
    enunciado: "¿Qué tecnología permite eliminar el ruido de fondo en las cintas de cassette?",
    correcta: "Dolby NR (Noise Reduction).",
    incorrectas: [
      "Ecualización gráfica.",
      "Compresión de datos."
    ]
  },
  {
    enunciado: "¿Qué es la 'Grabación Binaural'?",
    correcta: "Una técnica que utiliza dos micrófonos en una cabeza artificial para imitar la audición humana 3D.",
    incorrectas: [
      "Grabar a dos cantantes al mismo tiempo.",
      "Una grabación que solo tiene dos notas."
    ]
  },
  {
    enunciado: "El 'Loudness War' (Guerra del volumen) se refiere a:",
    correcta: "La tendencia de la industria a comprimir el audio para que suene lo más fuerte posible, perdiendo dinámica.",
    incorrectas: [
      "Una pelea entre vecinos por el volumen de la música.",
      "Un concurso de gritos en festivales de rock."
    ]
  },
  {
    enunciado: "¿Qué es el 'MIDI'?",
    correcta: "Un protocolo que permite a instrumentos electrónicos y ordenadores comunicarse entre sí (no contiene audio).",
    incorrectas: [
      "Un formato de audio de alta fidelidad.",
      "Un tipo de cable para altavoces pasivos."
    ]
  },
  {
    enunciado: "La 'Mezcla' en un estudio consiste en:",
    correcta: "Ajustar los niveles, el panorama y los efectos de cada pista grabada para crear un todo coherente.",
    incorrectas: [
      "Mezclar diferentes estilos musicales en un solo disco.",
      "Invitar a varios grupos a grabar el mismo día."
    ]
  },
  {
    enunciado: "¿Qué es un 'Podcast'?",
    correcta: "Una serie de episodios de audio digital disponibles para su descarga o streaming bajo demanda.",
    incorrectas: [
      "Un tipo de micrófono pequeño que se pega a la ropa.",
      "La carcasa de plástico de los auriculares."
    ]
  },
  {
    enunciado: "¿Qué impacto tuvo el sonido grabado en la interpretación musical?",
    correcta: "Permitió a los músicos estudiar sus propias interpretaciones y las de otros, fijando modelos de ejecución.",
    incorrectas: [
      "Hizo que los músicos dejaran de practicar porque ya estaba todo grabado.",
      "Obligó a que todos los conciertos fueran en absoluto silencio."
    ]
  },
  {
    enunciado: "¿Qué es el 'Remasterizado'?",
    correcta: "Volver a procesar una grabación antigua con tecnología moderna para mejorar su calidad sonora.",
    incorrectas: [
      "Cambiar la letra de una canción antigua.",
      "Grabar la misma canción con músicos diferentes."
    ]
  },
  {
    enunciado: "¿Qué soporte analógico ha vivido un resurgimiento comercial 'retro' en la última década?",
    correcta: "El disco de vinilo.",
    incorrectas: [
      "El cilindro de cera.",
      "El cartucho de 8 pistas."
    ]
  },
  {
    enunciado: "¿Qué es el 'Aliasing'?",
    correcta: "Una distorsión digital que ocurre cuando se intenta grabar frecuencias superiores a la mitad de la tasa de muestreo.",
    incorrectas: [
      "El nombre artístico de un ingeniero de sonido.",
      "Un tipo de conector para micrófonos profesionales."
    ]
  },
  {
    enunciado: "¿Qué importancia tiene la 'Nube' (Cloud) en el consumo de música actual?",
    correcta: "Permite acceder a catálogos infinitos de música desde cualquier dispositivo sin ocupar espacio físico.",
    incorrectas: [
      "Ayuda a que los altavoces no se calienten durante el verano.",
      "Es un tipo de filtro para suavizar las voces agudas."
    ]
  },
  {
    enunciado: "¿Qué es la 'Profundidad de bits' (Bit depth)?",
    correcta: "El número de bits utilizados para describir la amplitud de cada muestra (determina el rango dinámico).",
    incorrectas: [
      "El peso físico de un disco duro.",
      "La cantidad de canciones que caben en un disco."
    ]
  },
  {
    enunciado: "¿Qué organización se encarga de preservar las grabaciones sonoras históricas en España?",
    correcta: "La Biblioteca Nacional de España (BNE).",
    incorrectas: [
      "El Ministerio de Industria.",
      "La SGAE."
    ]
  },
  {
    enunciado: "¿Qué es un 'Foley' en la postproducción de audio?",
    correcta: "La recreación de sonidos cotidianos (pasos, ropa, objetos) para sincronizarlos con la imagen.",
    incorrectas: [
      "Un tipo de efecto de guitarra que imita a un sintetizador.",
      "El nombre de la primera mesa de mezclas digital."
    ]
  },
  {
    enunciado: "La evolución del sonido grabado ha transformado la música en:",
    correcta: "Un objeto de consumo ubicuo, accesible en cualquier momento y lugar.",
    incorrectas: [
      "Algo que solo se puede escuchar una vez al año.",
      "Un secreto que solo conocen los ingenieros de sonido."
    ]
  }
];