// 01-configuracion-y-calculo-de-instalaciones-electroacusticas.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué describe físicamente la presión sonora?",
    correcta: "La variación instantánea de presión del aire respecto a la presión atmosférica debida a la onda sonora",
    incorrectas: [
      "La energía eléctrica consumida por un altavoz para producir sonido",
      "La velocidad de propagación del sonido en un recinto reverberante"
    ]
  },
  {
    enunciado: "¿Qué magnitud acústica expresa la energía sonora que atraviesa una superficie por unidad de tiempo y de área?",
    correcta: "La intensidad sonora",
    incorrectas: [
      "La potencia eléctrica RMS del amplificador",
      "El coeficiente de absorción del material"
    ]
  },
  {
    enunciado: "¿Qué magnitud acústica es propia de la fuente y no depende de la distancia al receptor?",
    correcta: "La potencia acústica",
    incorrectas: [
      "El nivel de presión sonora en el punto de escucha",
      "El tiempo de reverberación de la sala"
    ]
  },
  {
    enunciado: "¿Por qué se utiliza el decibelio para niveles sonoros?",
    correcta: "Porque el rango de presiones audibles es enorme y la escala logarítmica lo hace manejable y más acorde con la percepción humana",
    incorrectas: [
      "Porque el decibelio mide directamente la frecuencia y la fase de la señal",
      "Porque el decibelio es una unidad del SI para potencia acústica absoluta"
    ]
  },
  {
    enunciado: "¿Qué fenómeno acústico está directamente asociado a la formación de eco?",
    correcta: "La reflexión del sonido en superficies a suficiente distancia temporal respecto al sonido directo",
    incorrectas: [
      "La absorción del sonido en materiales porosos",
      "La difracción del sonido en bordes y obstáculos pequeños"
    ]
  },
  {
    enunciado: "¿Qué describe la reverberación en un recinto?",
    correcta: "La persistencia del sonido debida a múltiples reflexiones que decaen con el tiempo tras cesar la fuente",
    incorrectas: [
      "La desviación del sonido por cambios de temperatura en el aire exclusivamente",
      "La atenuación por distancia en campo libre sin reflexiones"
    ]
  },
  {
    enunciado: "¿Qué representa el coeficiente de absorción acústica de un material (α)?",
    correcta: "La fracción de energía sonora incidente que el material no refleja, al transformarla principalmente en calor",
    incorrectas: [
      "La potencia acústica total emitida por un altavoz en 1 s",
      "La relación entre frecuencia y longitud de onda en el aire"
    ]
  },
  {
    enunciado: "¿Qué fenómeno permite que el sonido “rodeé” parcialmente un obstáculo?",
    correcta: "La difracción",
    incorrectas: [
      "La reflexión especular",
      "La inversión de fase por acoplamiento eléctrico"
    ]
  },
  {
    enunciado: "¿Qué explica la refracción acústica en la atmósfera?",
    correcta: "La curvatura de los rayos sonoros por gradientes de temperatura o viento que cambian la velocidad de propagación",
    incorrectas: [
      "La aparición de armónicos por saturación del amplificador",
      "La conversión directa de presión sonora en tensión eléctrica sin transductor"
    ]
  },
  {
    enunciado: "¿Qué aportan las curvas isofónicas (Fletcher-Munson) en electroacústica aplicada?",
    correcta: "Muestran que la sensibilidad del oído varía con la frecuencia y el nivel, influyendo en ajustes de ecualización y evaluación subjetiva",
    incorrectas: [
      "Definen el tiempo de reverberación óptimo para cualquier sala sin cálculo",
      "Indican la impedancia exacta de un altavoz según su diámetro"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a un micrófono dinámico frente a uno de condensador?",
    correcta: "Suele ser más robusto y no requiere alimentación para el elemento transductor, mientras que el de condensador necesita polarización y es más sensible",
    incorrectas: [
      "Siempre presenta una respuesta en frecuencia más plana que uno de condensador",
      "Solo puede ser omnidireccional por su principio de funcionamiento"
    ]
  },
  {
    enunciado: "¿Qué significa la directividad cardioide en un micrófono?",
    correcta: "Mayor sensibilidad al frente y rechazo relativo por la parte trasera, útil para reducir realimentación y ruido ambiente",
    incorrectas: [
      "Respuesta idéntica en todas direcciones en cualquier frecuencia",
      "Captación máxima por la parte trasera para aplicaciones de megafonía"
    ]
  },
  {
    enunciado: "¿Qué indica la sensibilidad de un micrófono?",
    correcta: "La tensión de salida que proporciona para un nivel de presión sonora dado, normalmente expresada en mV/Pa o dBV/Pa",
    incorrectas: [
      "La potencia RMS que puede entregar a un altavoz sin distorsión",
      "El tiempo de reverberación que produce en una sala pequeña"
    ]
  },
  {
    enunciado: "¿Qué diferencia esencial hay entre potencia RMS y potencia pico en un amplificador?",
    correcta: "La RMS se asocia a potencia continua útil con baja distorsión, mientras que la pico es un valor máximo transitorio",
    incorrectas: [
      "La RMS solo se usa en continua y la pico solo en alterna",
      "La RMS mide la directividad del altavoz y la pico su sensibilidad"
    ]
  },
  {
    enunciado: "¿Qué expresa la relación señal/ruido (S/N) en un equipo de audio?",
    correcta: "Cuánto mayor es la señal útil respecto al ruido propio del sistema, condicionando la limpieza y el rango dinámico",
    incorrectas: [
      "La relación entre potencia acústica y potencia eléctrica consumida",
      "La diferencia entre graves y agudos por el filtro de cruce"
    ]
  },
  {
    enunciado: "¿Por qué se destaca la clase D en instalaciones modernas?",
    correcta: "Por su alta eficiencia, menor disipación térmica y elevada densidad de potencia, ventajosa en instalaciones distribuidas",
    incorrectas: [
      "Porque es la única clase capaz de amplificar señales analógicas sin conversión",
      "Porque elimina la necesidad de fuentes de alimentación y protecciones eléctricas"
    ]
  },
  {
    enunciado: "¿Qué es el factor de amortiguamiento (damping factor) de un amplificador?",
    correcta: "Un indicador de control del movimiento del altavoz relacionado con la impedancia de salida del amplificador",
    incorrectas: [
      "Un índice de inteligibilidad del habla en megafonía de emergencia",
      "La medida de absorción acústica de los paneles de una sala"
    ]
  },
  {
    enunciado: "¿Qué significa la sensibilidad de un altavoz (por ejemplo, 90 dB a 1 W/1 m)?",
    correcta: "El nivel de presión sonora que produce a 1 m cuando se le aplica 1 W (en condiciones especificadas), útil para estimar SPL",
    incorrectas: [
      "La potencia acústica absoluta de la sala independientemente del altavoz",
      "La impedancia exacta del altavoz a cualquier frecuencia"
    ]
  },
  {
    enunciado: "¿Cuál es la función de un filtro de cruce (crossover)?",
    correcta: "Dividir el espectro de audio en bandas para enviar cada una al transductor adecuado (grave, medio, agudo)",
    incorrectas: [
      "Transformar una línea de 100 V en una línea de baja impedancia sin pérdidas",
      "Medir el tiempo de reverberación mediante impulsos de prueba"
    ]
  },
  {
    enunciado: "¿Qué ventaja característica aporta una caja acústica tipo bocina?",
    correcta: "Mayor directividad y eficiencia acústica, útil para proyectar sonido a distancia o en entornos ruidosos",
    incorrectas: [
      "Mayor absorción interna que reduce por completo la necesidad de acondicionamiento de sala",
      "Eliminación total del riesgo de realimentación en micrófonos"
    ]
  },
  {
    enunciado: "En sistemas de baja impedancia, ¿qué efecto práctico tiene la longitud del cable?",
    correcta: "Aumenta las pérdidas por resistencia y la caída de tensión, reduciendo potencia entregada al altavoz",
    incorrectas: [
      "Aumenta automáticamente la sensibilidad del altavoz en dB",
      "Mejora la relación señal/ruido al actuar como filtro activo"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a un sistema de línea de 100 V en megafonía?",
    correcta: "Distribución a alta tensión y baja corriente usando transformadores, permitiendo muchos altavoces en paralelo y menor sección de cable",
    incorrectas: [
      "Conexión obligatoria en serie de todos los altavoces para mantener impedancia",
      "Uso exclusivo de altavoces de baja impedancia sin transformador"
    ]
  },
  {
    enunciado: "¿Para qué se usan los transformadores de línea en 100 V?",
    correcta: "Para adaptar la línea de alta impedancia a cada altavoz y seleccionar la potencia asignada mediante tomas",
    incorrectas: [
      "Para convertir presión sonora en señal eléctrica sin micrófono",
      "Para aumentar el coeficiente de absorción de los materiales del recinto"
    ]
  },
  {
    enunciado: "¿Qué criterio básico se aplica al dimensionar potencia en una línea de 100 V?",
    correcta: "La suma de las potencias asignadas en los transformadores de los altavoces no debe superar la potencia útil del amplificador, dejando margen",
    incorrectas: [
      "La suma de impedancias debe ser siempre 8 Ω independientemente del número de altavoces",
      "La potencia se define solo por el tiempo de reverberación de la sala"
    ]
  },
  {
    enunciado: "¿Qué distingue una megafonía de seguridad frente a una de confort?",
    correcta: "La de seguridad prioriza mensajes de evacuación, fiabilidad, supervisión y cumplimiento normativo, por encima de música ambiente",
    incorrectas: [
      "La de seguridad se diseña solo para espectáculos y conciertos",
      "La de confort exige siempre altavoces certificados UNE-EN 54-24"
    ]
  },
  {
    enunciado: "¿Qué significa la prioridad de voz sobre música en un sistema de megafonía?",
    correcta: "Que un aviso hablado desplaza o atenúa automáticamente la música para asegurar comprensión del mensaje",
    incorrectas: [
      "Que la música siempre debe sonar más alta que la voz para evitar pánicos",
      "Que el micrófono se conecta obligatoriamente en serie con los altavoces"
    ]
  },
  {
    enunciado: "¿Qué objetivo tiene el cálculo de SPL en un proyecto electroacústico?",
    correcta: "Predecir el nivel de presión sonora en puntos de escucha para asegurar cobertura, uniformidad y requisitos de inteligibilidad o confort",
    incorrectas: [
      "Determinar el tipo de normativa eléctrica aplicable a cualquier edificio sin más datos",
      "Sustituir el cálculo de sección de cable por un valor estándar fijo"
    ]
  },
  {
    enunciado: "¿Qué pérdida se considera equivalente a 1 dB en transporte, como criterio práctico de diseño?",
    correcta: "Una pérdida aproximada en torno al 20% de potencia, usada como umbral práctico para limitar pérdidas",
    incorrectas: [
      "Una pérdida del 1% de potencia, porque 1 dB equivale siempre a 1%",
      "Una pérdida del 50% de potencia, porque 1 dB equivale a dividir por dos"
    ]
  },
  {
    enunciado: "¿Qué parámetro eléctrico del cable es el que causa las pérdidas principales en líneas de altavoces?",
    correcta: "La resistencia del conductor, que provoca caída de tensión y disipación en forma de calor",
    incorrectas: [
      "El coeficiente de absorción acústica del aislamiento del cable",
      "La directividad del cable determinada por su sección circular"
    ]
  },
  {
    enunciado: "¿Qué relaciona la fórmula de Sabine?",
    correcta: "El tiempo de reverberación con el volumen del recinto y la absorción equivalente total de sus superficies",
    incorrectas: [
      "La impedancia de un altavoz con su sensibilidad a 1 W/1 m",
      "La potencia pico de un amplificador con la clase de funcionamiento"
    ]
  },
  {
    enunciado: "¿Qué efecto produce, en general, aumentar la absorción de un recinto?",
    correcta: "Disminuye el tiempo de reverberación, mejorando control acústico y, a menudo, la inteligibilidad",
    incorrectas: [
      "Aumenta la potencia acústica de la fuente sin cambiar nada más",
      "Eleva automáticamente el nivel de presión sonora en todas las frecuencias"
    ]
  },
  {
    enunciado: "¿Por qué son relevantes índices como STI o RASTI en megafonía?",
    correcta: "Porque cuantifican la inteligibilidad del habla, decisiva para avisos y evacuación en condiciones reales de ruido y reverberación",
    incorrectas: [
      "Porque determinan la clase de amplificación (A, AB, D) exigible por normativa",
      "Porque sustituyen la necesidad de calcular sección de cable en líneas largas"
    ]
  },
  {
    enunciado: "¿Qué documento del CTE aborda específicamente la protección frente al ruido?",
    correcta: "El CTE DB-HR (Protección frente al ruido)",
    incorrectas: [
      "El CTE DB-SUA (Seguridad de utilización y accesibilidad)",
      "El CTE DB-HE (Ahorro de energía)"
    ]
  },
  {
    enunciado: "¿Qué norma es específica para altavoces utilizados en sistemas de alarma por voz y evacuación por incendios?",
    correcta: "La UNE-EN 54-24",
    incorrectas: [
      "La UNE-EN 60204-1",
      "La UNE-EN ISO 9001"
    ]
  },
  {
    enunciado: "¿Qué reglamento regula de forma general las instalaciones eléctricas de baja tensión en España?",
    correcta: "El Reglamento Electrotécnico para Baja Tensión (REBT)",
    incorrectas: [
      "La Ley de Ordenación de la Edificación (LOE) como reglamento técnico de cableado",
      "El Código Civil como norma de cálculo de secciones de conductor"
    ]
  },
  {
    enunciado: "¿Qué instrucción del REBT es especialmente relevante en locales de pública concurrencia?",
    correcta: "La ITC-BT-28",
    incorrectas: [
      "La ITC-BT-01",
      "La ITC-BT-52"
    ]
  },
  {
    enunciado: "¿Qué Real Decreto establece disposiciones mínimas sobre exposición de trabajadores al ruido?",
    correcta: "El RD 286/2006",
    incorrectas: [
      "El RD 314/2006",
      "El RD 217/2022"
    ]
  },
  {
    enunciado: "En prevención de riesgos, ¿por qué es relevante el ruido en instalaciones electroacústicas?",
    correcta: "Porque puede superar niveles de exposición que requieren evaluación, medidas técnicas y organizativas y, si procede, protección auditiva",
    incorrectas: [
      "Porque el ruido solo afecta a equipos electrónicos y no a personas",
      "Porque la normativa solo contempla el ruido en exteriores, nunca en interiores"
    ]
  },
  {
    enunciado: "¿Qué enfoque integra mejor el desarrollo de un tema de instalaciones electroacústicas en oposiciones actuales?",
    correcta: "La combinación de fundamentos físicos, selección tecnológica de componentes, criterios de cálculo y referencia normativa vigente",
    incorrectas: [
      "La memorización exclusiva de definiciones sin aplicación a diseño ni normativa",
      "El análisis literario de manuales sin parámetros técnicos ni verificación"
    ]
  },
  {
    enunciado: "¿Qué ventaja funcional ofrece una línea de 100 V para futuras ampliaciones?",
    correcta: "Permite añadir altavoces en paralelo asignando potencias mediante tomas, sin recalcular impedancias como en baja impedancia",
    incorrectas: [
      "Obliga a rediseñar toda la instalación cada vez que se añade un altavoz",
      "Impide usar transformadores, por lo que solo admite altavoces de 8 Ω"
    ]
  },
  {
    enunciado: "En una instalación de megafonía de emergencia, ¿qué requisito técnico suele priorizarse frente a la alta fidelidad musical?",
    correcta: "La inteligibilidad del mensaje y la fiabilidad del sistema en condiciones adversas",
    incorrectas: [
      "La extensión máxima de graves por debajo de 20 Hz",
      "La estética del cableado por encima de la seguridad eléctrica"
    ]
  }
];
