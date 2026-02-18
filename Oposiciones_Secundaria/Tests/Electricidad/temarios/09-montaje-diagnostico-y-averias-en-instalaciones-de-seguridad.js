// temarios/09-montaje-diagnostico-y-averias-en-instalaciones-de-seguridad.js
var PREGUNTAS = [
  {
    enunciado: "¿Cuál es el criterio principal para ubicar la central de alarma en una instalación de intrusión?",
    correcta: "Colocarla en una zona protegida, preferiblemente retardada o de acceso controlado, para dificultar el sabotaje",
    incorrectas: [
      "Situarla junto a la puerta principal para facilitar el acceso rápido del instalador",
      "Instalarla en exterior para mejorar la cobertura de sensores inalámbricos"
    ]
  },
  {
    enunciado: "¿Qué función cumple el tamper en sirenas y detectores?",
    correcta: "Detectar manipulación, apertura de carcasa o arranque del soporte y generar alarma de sabotaje",
    incorrectas: [
      "Aumentar la potencia acústica de la sirena en caso de intrusión",
      "Reducir la diafonía en el cableado apantallado de seguridad"
    ]
  },
  {
    enunciado: "¿Dónde se recomienda montar una sirena interior para maximizar eficacia y reducir manipulación?",
    correcta: "En altura y en una zona donde suene en todo el recinto y sea difícil acceder a ella",
    incorrectas: [
      "A ras de suelo, para facilitar el mantenimiento de la batería",
      "Dentro de una caja estanca IP66 para mejorar el sonido"
    ]
  },
  {
    enunciado: "¿Qué característica es especialmente importante en una sirena exterior?",
    correcta: "Protección antisabotaje (tamper) y resistencia ambiental adecuada para intemperie",
    incorrectas: [
      "Conector RJ45 certificado para PoE",
      "Filtro LTE para evitar interferencias de telefonía móvil"
    ]
  },
  {
    enunciado: "¿Qué debe evitarse al instalar un detector PIR en interior?",
    correcta: "Fuentes de calor, luz solar directa y corrientes de aire que provoquen falsas alarmas",
    incorrectas: [
      "Colocarlo frente a una pared fría para mejorar la sensibilidad",
      "Montarlo a 1 metro de altura para ampliar el alcance"
    ]
  },
  {
    enunciado: "¿Cuál es la altura estándar habitual de instalación para un PIR volumétrico?",
    correcta: "Entre 2,1 y 2,4 metros",
    incorrectas: [
      "Entre 0,8 y 1,2 metros",
      "Por encima de 3,5 metros en cualquier caso"
    ]
  },
  {
    enunciado: "¿Cuál es la función principal de un contacto magnético?",
    correcta: "Detectar apertura de puertas o ventanas mediante la separación imán-reed",
    incorrectas: [
      "Detectar vibraciones en cristales por impacto",
      "Medir el nivel de iluminación para cámaras día/noche"
    ]
  },
  {
    enunciado: "¿Qué requisito es crítico al montar un contacto magnético?",
    correcta: "Alineación correcta en el marco para garantizar conmutación fiable al abrir",
    incorrectas: [
      "Colocarlo lo más alejado posible del marco para aumentar la cobertura",
      "Instalarlo en diagonal para compensar dilataciones del material"
    ]
  },
  {
    enunciado: "¿Qué característica de montaje es clave en detectores sísmicos o de rotura?",
    correcta: "Fijación rígida y estable a la superficie a proteger para transmitir vibración correctamente",
    incorrectas: [
      "Montaje elástico para filtrar vibraciones no deseadas",
      "Instalación siempre en techo para aumentar la sensibilidad"
    ]
  },
  {
    enunciado: "¿Qué objetivo persigue el ajuste del ángulo de visión al montar una cámara CCTV?",
    correcta: "Cubrir el área de interés con encuadre útil evitando zonas ciegas y contraluces innecesarios",
    incorrectas: [
      "Reducir el consumo eléctrico del NVR",
      "Aumentar automáticamente la compresión H.265"
    ]
  },
  {
    enunciado: "¿Por qué se emplean cajas de conexiones estancas (por ejemplo IP66) en cámaras exteriores?",
    correcta: "Para proteger empalmes y conexiones de agua y polvo y reducir fallos por humedad",
    incorrectas: [
      "Para mejorar la resolución de imagen de la cámara",
      "Para permitir que el cable coaxial funcione como PoE"
    ]
  },
  {
    enunciado: "¿Dónde es recomendable instalar un DVR/NVR para reducir riesgo de manipulación?",
    correcta: "En armarios rack o cajas de seguridad con llave y acceso restringido",
    incorrectas: [
      "Junto a la placa de calle del portero para facilitar la ventilación",
      "En el exterior para mejorar la recepción WiFi"
    ]
  },
  {
    enunciado: "¿Qué describe una configuración de lazo NC en una entrada de alarma?",
    correcta: "Un lazo normalmente cerrado que cambia de estado al abrirse por intrusión o sabotaje",
    incorrectas: [
      "Un lazo normalmente abierto que solo funciona con resistencias dobles",
      "Un lazo que transmite vídeo analógico por balun"
    ]
  },
  {
    enunciado: "¿Para qué se usa una resistencia de fin de línea (EOL) en intrusión?",
    correcta: "Para supervisar el estado del lazo y detectar condiciones como alarma, corte o sabotaje según el esquema",
    incorrectas: [
      "Para alimentar la sirena con mayor potencia",
      "Para aumentar el ancho de banda de las cámaras IP"
    ]
  },
  {
    enunciado: "¿Qué ventaja aporta el doble EOL en un lazo cableado?",
    correcta: "Permite distinguir de forma más fiable entre alarma, sabotaje por corte y sabotaje por cortocircuito",
    incorrectas: [
      "Permite grabar vídeo en H.265 con menos almacenamiento",
      "Elimina la necesidad de tamper en detectores"
    ]
  },
  {
    enunciado: "¿Por qué se recomienda cable manguera apantallado en seguridad?",
    correcta: "Para reducir inducciones y ruidos eléctricos que pueden generar falsos disparos o fallos de lectura",
    incorrectas: [
      "Para aumentar el ángulo de detección del PIR",
      "Para convertir automáticamente señales analógicas a IP"
    ]
  },
  {
    enunciado: "¿Qué significa certificar una toma RJ45 para cámaras IP?",
    correcta: "Verificar con equipo de medida que el enlace cumple parámetros de cableado (continuidad, pares, atenuación y diafonía) según categoría",
    incorrectas: [
      "Comprobar que el cable coaxial no tiene cortocircuito vivo-malla",
      "Ajustar la sensibilidad del PIR mediante el puerto RJ45"
    ]
  },
  {
    enunciado: "¿Qué proporciona PoE en una cámara IP?",
    correcta: "Alimentación eléctrica y datos a través del mismo cable Ethernet",
    incorrectas: [
      "Señalización SS7 entre centrales de telefonía",
      "Compresión H.265 dentro del cable"
    ]
  },
  {
    enunciado: "¿Qué tipo de zona se usa para entradas principales con tiempo para desarmar?",
    correcta: "Zona retardada (entrada/salida)",
    incorrectas: [
      "Zona 24 horas",
      "Zona instantánea obligatoria"
    ]
  },
  {
    enunciado: "¿Qué zona se programa típicamente para que siempre esté activa, incluso con el sistema desarmado?",
    correcta: "Zona 24 horas, por ejemplo sabotaje o ciertas emergencias según el diseño",
    incorrectas: [
      "Zona retardada",
      "Zona de paso solo nocturna"
    ]
  },
  {
    enunciado: "¿Qué implica programar correctamente tiempos de entrada y salida en la central?",
    correcta: "Permitir que el usuario arme o desarme sin disparos indebidos y mantener seguridad en accesos",
    incorrectas: [
      "Aumentar el almacenamiento del HDD del NVR",
      "Reducir la caída de tensión del cableado de cámaras"
    ]
  },
  {
    enunciado: "¿Qué se comprueba en un test de comunicación con la CRA?",
    correcta: "Que el comunicador transmite eventos y recibe confirmación conforme al canal configurado",
    incorrectas: [
      "Que el PIR detecta cambios térmicos con máxima sensibilidad",
      "Que el DVR graba en H.264 y no en H.265"
    ]
  },
  {
    enunciado: "¿Qué es un Walk Test en intrusión?",
    correcta: "Una prueba de recorrido para verificar en campo la cobertura real del detector PIR",
    incorrectas: [
      "Una prueba para medir la capacidad del disco duro",
      "Una prueba de continuidad del cable coaxial"
    ]
  },
  {
    enunciado: "¿Qué se evalúa al verificar niveles de iluminación (lux) en cámaras día/noche?",
    correcta: "Que la cámara mantiene imagen utilizable según condiciones de luz y su modo día/noche",
    incorrectas: [
      "Que el lazo EOL cambia de valor resistivo correctamente",
      "Que la sirena exterior tiene tamper operativo"
    ]
  },
  {
    enunciado: "¿Qué puede medir un polímetro de forma útil en una instalación de seguridad?",
    correcta: "Tensiones de alimentación, resistencia de lazo, consumo y tensión de batería",
    incorrectas: [
      "MER y BER de señales de TDT",
      "Azimut y elevación de antenas satélite"
    ]
  },
  {
    enunciado: "¿Para qué sirve un comprobador portátil de CCTV en campo?",
    correcta: "Para visualizar señal, ajustar encuadre/enfoque y verificar telemetría sin depender del monitor final",
    incorrectas: [
      "Para punzonar regletas LSA-PLUS",
      "Para medir diafonía en cables de pares telefónicos"
    ]
  },
  {
    enunciado: "¿Qué utilidad tiene un escáner de radiofrecuencia en sistemas de alarma vía radio?",
    correcta: "Detectar inhibiciones, ruido, ocupación de banda o señal débil que degrade la comunicación",
    incorrectas: [
      "Calcular la autonomía de baterías de plomo-ácido",
      "Ajustar el skew del LNB de satélite"
    ]
  },
  {
    enunciado: "¿Cuál es una causa típica de falsas alarmas en PIR?",
    correcta: "Corrientes de aire, insectos, suciedad en ópticas o cambios bruscos de temperatura",
    incorrectas: [
      "Uso de H.265 en el grabador",
      "Exceso de capacidad del disco duro"
    ]
  },
  {
    enunciado: "¿Qué medida correctiva es coherente ante falsas alarmas repetidas de un PIR?",
    correcta: "Ajustar sensibilidad o reubicar el detector tras analizar fuentes de perturbación",
    incorrectas: [
      "Cambiar el tipo de compresión de vídeo del NVR",
      "Sustituir el cable coaxial por un cable de pares telefónicos"
    ]
  },
  {
    enunciado: "¿Qué síntoma apunta a fallo de batería o alimentación de la central?",
    correcta: "Aviso de batería baja o reinicio del sistema cuando cae la red eléctrica",
    incorrectas: [
      "Mejora del encuadre de cámara al anochecer",
      "Aumento de lux medido en la escena"
    ]
  },
  {
    enunciado: "¿Cuál es una vida útil habitual de baterías de plomo-ácido selladas en centrales?",
    correcta: "Entre 2 y 4 años, dependiendo de temperatura y ciclos",
    incorrectas: [
      "Entre 10 y 15 años en cualquier condición",
      "Menos de 3 meses salvo que sean de litio"
    ]
  },
  {
    enunciado: "¿Qué comprobación es prioritaria ante aviso de batería baja?",
    correcta: "Medir tensión del cargador y estado de la batería, y sustituir si no mantiene carga",
    incorrectas: [
      "Reprogramar el tipo de zona a instantánea",
      "Reducir el número de cámaras para disminuir consumo del NVR"
    ]
  },
  {
    enunciado: "¿Qué significa una avería de lazo por circuito abierto?",
    correcta: "Rotura de cable, mal contacto o resistencia EOL desconectada que rompe la continuidad supervisada",
    incorrectas: [
      "Cortocircuito entre vivo y malla en coaxial",
      "Exceso de ancho de banda en la red IP"
    ]
  },
  {
    enunciado: "¿Qué significa una avería de lazo por cortocircuito?",
    correcta: "Contacto no deseado entre conductores por aislamiento degradado, aplastamiento o humedad",
    incorrectas: [
      "Falta de enfoque en la cámara por mala distancia focal",
      "Tamper activado por cierre correcto del detector"
    ]
  },
  {
    enunciado: "¿Qué causa típica dispara una alarma de sabotaje (tamper) en un detector?",
    correcta: "Carcasa abierta, muelle mal cerrado o manipulación del detector o su fijación",
    incorrectas: [
      "Cámara en modo noche con IR activado",
      "Cálculo incorrecto de lux en la escena"
    ]
  },
  {
    enunciado: "En CCTV analógico, ¿qué elemento es una causa típica de pérdida de vídeo en tiradas largas o conversión?",
    correcta: "Fallo de balun o problemas de adaptación y conexión en el enlace",
    incorrectas: [
      "Configuración incorrecta de tipos de zona en la central",
      "Batería de plomo-ácido envejecida en la sirena interior"
    ]
  },
  {
    enunciado: "En CCTV IP, ¿qué causa típica puede generar pérdida de vídeo en una cámara PoE?",
    correcta: "Pérdida de alimentación PoE, conectores mal crimpados o distancia/cableado fuera de especificación",
    incorrectas: [
      "Marcación errónea por tonos DTMF",
      "Ajuste incorrecto del pestillo del abrepuertas"
    ]
  },
  {
    enunciado: "¿Qué exige el RGPD y la LOPDGDD en relación con instalaciones de videovigilancia?",
    correcta: "Cumplir requisitos legales como cartelería informativa, limitación de captación y gestión del tratamiento",
    incorrectas: [
      "Que todas las cámaras funcionen exclusivamente por PoE",
      "Que el NVR se instale obligatoriamente en un RITI"
    ]
  },
  {
    enunciado: "¿Qué criterio básico se deriva del marco de protección de datos al orientar cámaras en un recinto privado?",
    correcta: "Evitar grabar espacios públicos o zonas no justificadas, limitando el encuadre al área necesaria",
    incorrectas: [
      "Grabar siempre la vía pública para maximizar la disuasión",
      "Orientar la cámara al cielo para reducir el consumo del IR"
    ]
  },
  {
    enunciado: "¿Qué establece la Orden INT/316/2011 de forma general en sistemas conectados a CRA?",
    correcta: "Protocolos de revisión, mantenimiento y gestión operativa para instalaciones con conexión a CRA",
    incorrectas: [
      "La estructura de PDH y SDH para transmisión telefónica",
      "La norma de cableado estructurado para categoría 6"
    ]
  },
  {
    enunciado: "¿Qué aportan las normas UNE-EN 50131 a un instalador de alarmas?",
    correcta: "Requisitos técnicos y de montaje según grado de seguridad, incluyendo supervisión, sabotaje y autonomía",
    incorrectas: [
      "Reglas para calcular el azimut de satélites de TV",
      "Protocolos de voz G.711 para telefonía"
    ]
  },
  {
    enunciado: "¿Qué regula el REBT (por ejemplo ITC-BT-19 e ITC-BT-36) en estas instalaciones?",
    correcta: "Criterios de ejecución y seguridad eléctrica, especialmente en instalaciones interiores y MBTS",
    incorrectas: [
      "Los grados de seguridad 1 a 4 de intrusión",
      "Los plazos máximos de conservación de imágenes"
    ]
  },
  {
    enunciado: "¿Qué finalidad tiene la norma UNE 108766 en la operativa de alarmas?",
    correcta: "Establecer protocolos de verificación para reducir falsas comunicaciones a Fuerzas y Cuerpos de Seguridad",
    incorrectas: [
      "Definir el estándar de compresión de vídeo H.265",
      "Regular el punzonado de regletas tipo Krone"
    ]
  },
  {
    enunciado: "¿Qué exige la Ley 31/1995 en el montaje y mantenimiento de instalaciones de seguridad?",
    correcta: "Aplicar prevención de riesgos en uso de herramientas, trabajos en altura y manipulación de equipos eléctricos",
    incorrectas: [
      "Programar obligatoriamente zonas de pánico en todas las instalaciones",
      "Usar únicamente detectores inalámbricos para evitar riesgos por cableado"
    ]
  }
];
