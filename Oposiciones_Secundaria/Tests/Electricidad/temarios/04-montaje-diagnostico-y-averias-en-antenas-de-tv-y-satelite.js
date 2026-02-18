// temarios/04-montaje-diagnostico-y-averias-en-antenas-de-tv-y-satelite.js
var PREGUNTAS = [
  {
    enunciado: "¿Cuál es el criterio principal al elegir el emplazamiento de una antena TDT respecto al repetidor?",
    correcta: "Evitar obstáculos en la línea de vista para reducir atenuación y multitrayecto que degraden la calidad",
    incorrectas: [
      "Buscar el punto más bajo posible para proteger el mástil del viento aunque se pierda visión directa",
      "Colocar la antena detrás de muros para filtrar interferencias, aunque bloquee la señal útil"
    ]
  },
  {
    enunciado: "¿Qué factor condiciona de forma crítica la estabilidad mecánica de un mástil en cubierta?",
    correcta: "La carga de viento prevista, junto con la altura, la superficie expuesta y el tipo de soporte y anclaje",
    incorrectas: [
      "La impedancia del coaxial, porque determina la rigidez del soporte en función de la frecuencia",
      "La polaridad del satélite, porque cambia el par de giro del mástil al pasar de 13 V a 18 V"
    ]
  },
  {
    enunciado: "¿Qué finalidad tiene impermeabilizar correctamente los puntos de fijación en cubierta?",
    correcta: "Evitar entradas de agua que deterioren la estructura y provoquen fallos eléctricos en cableado y conectores",
    incorrectas: [
      "Reducir la atenuación del espacio libre en UHF y mejorar automáticamente el MER",
      "Aumentar la ganancia de la antena al crear una cámara sellada alrededor del dipolo"
    ]
  },
  {
    enunciado: "¿Cuál es una consecuencia típica de que entre agua en el interior del cable coaxial?",
    correcta: "Aumenta la atenuación y se degrada la calidad de señal, generando pixelaciones y fallos intermitentes",
    incorrectas: [
      "Aumenta la impedancia del sistema a 100 ohmios y mejora el rechazo de interferencias LTE",
      "Mejora el apantallamiento por hidratación de la malla y elimina el ruido impulsivo"
    ]
  },
  {
    enunciado: "¿Qué práctica es correcta al montar una antena Yagi para TDT?",
    correcta: "Ensamblarla siguiendo el orden y la geometría del fabricante para no perder directividad ni ganancia",
    incorrectas: [
      "Modificar la separación de directores para adaptarla a cada canal sin medición y sin criterio",
      "Doblar el dipolo para que tenga más superficie y capte mejor, aunque cambie su resonancia"
    ]
  },
  {
    enunciado: "¿Qué debe cuidarse al instalar el LNB en una antena parabólica?",
    correcta: "La correcta posición en el foco, la fijación estable y el ajuste del ángulo de polarización (skew)",
    incorrectas: [
      "Que el LNB quede lo más lejos posible del foco para aumentar el diámetro eléctrico de la parábola",
      "Que el LNB toque el reflector para mejorar la puesta a tierra por contacto directo"
    ]
  },
  {
    enunciado: "¿Qué representa el ajuste de polarización (skew) del LNB?",
    correcta: "El giro del LNB para alinear la polarización recibida con la del satélite y minimizar pérdidas",
    incorrectas: [
      "El ajuste del canal 48 para evitar interferencias LTE en la FI de satélite",
      "El cambio de impedancia del coaxial para reducir reflexiones en 950–2150 MHz"
    ]
  },
  {
    enunciado: "¿Cuál es el orden correcto de pelado al preparar un coaxial para conectorización?",
    correcta: "Retirar cubierta, ordenar la malla, exponer el dieléctrico y dejar el vivo con la longitud adecuada",
    incorrectas: [
      "Retirar primero el dieléctrico completo y después cortar el vivo a ras para evitar cortocircuitos",
      "Eliminar la malla porque es innecesaria en TV y deja pasar mejor la señal al dieléctrico"
    ]
  },
  {
    enunciado: "¿Qué fallo es típico al montar un conector F sobre coaxial?",
    correcta: "Que hilos de malla contacten con el vivo y provoquen un cortocircuito o pérdidas severas",
    incorrectas: [
      "Que el conector F convierta la señal automáticamente a una impedancia de 50 ohmios",
      "Que el conector F reduzca la banda FI a 470–694 MHz por limitación geométrica"
    ]
  },
  {
    enunciado: "¿Qué conector es característico en muchas tomas de TV doméstica además del F?",
    correcta: "El conector CEI, usado en tomas y latiguillos de televisión en muchas instalaciones",
    incorrectas: [
      "El XLR, porque es el estándar de TV por su rechazo de interferencias",
      "El Speakon, porque está diseñado para transportar señal RF con baja pérdida"
    ]
  },
  {
    enunciado: "¿Por qué se instala la toma de tierra del mástil en una instalación de antena?",
    correcta: "Para reducir riesgos por descargas y sobretensiones y cumplir requisitos de seguridad y normativa aplicable",
    incorrectas: [
      "Para aumentar el nivel de señal en toma porque la tierra actúa como amplificador pasivo",
      "Para seleccionar la polaridad del satélite con 13 V y 18 V de forma automática"
    ]
  },
  {
    enunciado: "En puesta en servicio de TDT, ¿qué herramienta es la principal para ajuste fino de recepción?",
    correcta: "El medidor de campo, porque permite medir potencia y calidad y optimizar orientación con datos reales",
    incorrectas: [
      "Un polímetro, porque permite medir la constelación digital en el dominio del tiempo",
      "Un soldador, porque la calidad se ajusta cambiando la aleación del estaño del conector"
    ]
  },
  {
    enunciado: "¿Qué significa BER en el contexto de calidad de señal digital en TDT?",
    correcta: "La tasa de error de bits, usada para evaluar la estabilidad de la recepción",
    incorrectas: [
      "El ancho de banda efectivo del canal analógico, medido en hercios",
      "La relación delante/atrás de la antena Yagi, expresada en decibelios"
    ]
  },
  {
    enunciado: "¿Qué significa MER en el contexto de calidad de señal digital?",
    correcta: "Un indicador de calidad y margen respecto al ruido, útil para detectar degradaciones e interferencias",
    incorrectas: [
      "La medida de la altura del mástil respecto a la cubierta, expresada en metros",
      "El nivel de tierra exigido por ICT-2 en ohmios para la bajante"
    ]
  },
  {
    enunciado: "Al orientar una antena de TDT, ¿qué criterio es más fiable que solo maximizar potencia?",
    correcta: "Optimizar la calidad (por ejemplo MER y BER) porque una potencia alta con mala calidad puede fallar igual",
    incorrectas: [
      "Maximizar potencia siempre garantiza recepción perfecta aunque existan ecos y multitrayecto",
      "Minimizar potencia evita saturación y por eso es el criterio único de ajuste"
    ]
  },
  {
    enunciado: "¿Qué fenómeno describe la presencia de ecos (echoes) en TDT?",
    correcta: "Rebotes de señal por multitrayecto que llegan con retraso y degradan la demodulación",
    incorrectas: [
      "La conversión de frecuencia del LNB de KU a FI por oscilador local",
      "La saturación térmica del amplificador monocanal por exceso de tensión de alimentación"
    ]
  },
  {
    enunciado: "¿Qué relación tiene el intervalo de guarda con los ecos en TDT?",
    correcta: "Si los ecos superan el intervalo de guarda, la recepción se degrada porque el receptor no los absorbe correctamente",
    incorrectas: [
      "El intervalo de guarda solo existe en satélite y determina el skew del LNB",
      "El intervalo de guarda mide la longitud del cable que puede instalarse sin ecualización de pendiente"
    ]
  },
  {
    enunciado: "En apuntamiento de satélite, ¿qué magnitudes se determinan inicialmente antes del ajuste fino?",
    correcta: "Azimut, elevación y polarización aproximados, para situar la parábola cerca del satélite objetivo",
    incorrectas: [
      "Ganancia en dBi, impedancia del coaxial y relación F/B del reflector parabólico",
      "Frecuencia de canal 48, potencia LTE y tensión del pararrayos del edificio"
    ]
  },
  {
    enunciado: "¿Qué utilidad tiene observar el espectro de la banda FI en un medidor de campo para satélite?",
    correcta: "Permite identificar transpondedores y ajustar orientación buscando el máximo de calidad con señales reales",
    incorrectas: [
      "Permite medir el número de hilos de la malla del coaxial y su continuidad",
      "Permite ajustar filtros LTE de TDT porque FI y UHF son equivalentes en el medidor"
    ]
  },
  {
    enunciado: "¿Cuál es una causa típica de ausencia total de señal en satélite en una vivienda?",
    correcta: "Un LNB averiado o sin alimentación correcta, o un cortocircuito en el coaxial que impide la alimentación",
    incorrectas: [
      "Que el canal 48 esté ocupado por LTE, lo cual bloquea toda la banda FI automáticamente",
      "Que el conector CEI no sea compatible con polarización horizontal y por eso no llega señal"
    ]
  },
  {
    enunciado: "¿Qué efecto puede tener que la antena se desplace por viento tras una tormenta?",
    correcta: "Caída de nivel y calidad por desalineación, provocando pérdida de canales o pixelación",
    incorrectas: [
      "Aumento de directividad que mejora el margen aunque cambie el azimut",
      "Conversión de la instalación a modo monocanal de forma automática"
    ]
  },
  {
    enunciado: "¿Qué es la ecualización de pendiente (tilt) en una cabecera de TV?",
    correcta: "Un ajuste para compensar que el cable atenúa más a frecuencias altas, equilibrando niveles en la banda",
    incorrectas: [
      "Un método para girar el mástil hasta encontrar el satélite usando solo gravedad",
      "Un ajuste para cambiar la impedancia de 75 ohmios a 50 ohmios en la red interior"
    ]
  },
  {
    enunciado: "¿Cuál es un riesgo típico al ajustar excesiva ganancia en un amplificador de mástil?",
    correcta: "Saturación e intermodulación, que degrada la calidad aunque el nivel de potencia parezca alto",
    incorrectas: [
      "Reducción de pérdidas del espacio libre por amplificación en origen",
      "Mejora automática del rechazo a ecos por aumento de potencia en cabecera"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a un amplificador monocanal frente a uno de banda ancha?",
    correcta: "Trata canales específicos de forma selectiva, lo que permite ajustar niveles por canal en ciertas cabeceras",
    incorrectas: [
      "Solo sirve para satélite y no puede trabajar con TDT por definición",
      "Convierte la señal a fibra óptica sin necesidad de convertidores"
    ]
  },
  {
    enunciado: "¿Qué síntoma sugiere interferencias LTE/5G en una instalación de TDT?",
    correcta: "Degradación de MER y aparición de pixelaciones o fallos en ciertos canales, especialmente si falta filtrado",
    incorrectas: [
      "Aumento del BER a cero y mejora del margen por efecto de compensación espectral",
      "Mejora de la relación F/B porque las señales móviles llegan desde atrás"
    ]
  },
  {
    enunciado: "¿Qué causa típica explica pixelaciones y congelaciones por agua en conectores o coaxial?",
    correcta: "La humedad incrementa pérdidas y crea degradación progresiva de la calidad hasta cruzar el umbral de recepción",
    incorrectas: [
      "La humedad mejora el dieléctrico y aumenta la señal útil, pero el receptor falla por exceso de nivel",
      "La humedad cambia la banda de trabajo del LNB de baja a alta sin necesidad de 22 kHz"
    ]
  },
  {
    enunciado: "¿Qué comprobación eléctrica rápida ayuda a localizar un cortocircuito vivo-malla en coaxial?",
    correcta: "Usar un comprobador de continuidad o aislamiento para verificar si existe contacto entre vivo y malla",
    incorrectas: [
      "Medir BER con el polímetro porque el cortocircuito se detecta como constelación dispersa",
      "Ajustar el skew del LNB porque los cortocircuitos se corrigen con polarización cruzada"
    ]
  },
  {
    enunciado: "¿Qué dato de calidad es especialmente relevante para la estabilidad ante lluvia en satélite?",
    correcta: "Contar con margen suficiente de calidad, reflejado en medidas como MER, para soportar atenuaciones por lluvia",
    incorrectas: [
      "Tener el máximo número de directores en una Yagi, porque eso evita la atenuación por lluvia en KU",
      "Usar conectores CEI en lugar de F, porque los CEI son impermeables por diseño"
    ]
  },
  {
    enunciado: "¿Qué suele indicar un MER bajo cuando la potencia recibida parece aceptable?",
    correcta: "Que hay ruido, interferencias, saturación o multitrayecto, y que la señal es frágil aunque el nivel sea alto",
    incorrectas: [
      "Que la instalación cumple mejor la normativa porque la potencia se reparte en más bits",
      "Que el LNB está bien polarizado y por eso el margen aumenta aunque el MER baje"
    ]
  },
  {
    enunciado: "¿Cuál es una causa típica de interferencias en canales específicos en una cabecera con monocanales?",
    correcta: "Fallo o desajuste del módulo correspondiente, o filtrado incorrecto que deja pasar señales no deseadas",
    incorrectas: [
      "Que el mástil no esté pintado, porque la pintura determina la selectividad por canal",
      "Que el satélite cambie de órbita y desplaza solo un canal UHF concreto"
    ]
  },
  {
    enunciado: "¿Qué instrumento permite analizar constelación y calidad digital además del nivel de potencia?",
    correcta: "El medidor de campo con funciones de análisis de espectro y constelación",
    incorrectas: [
      "Un destornillador buscapolos, porque muestra la modulación en pantalla",
      "Una pinza amperimétrica, porque mide directamente MER y BER en el conductor vivo"
    ]
  },
  {
    enunciado: "¿Qué puede provocar un mal crimpado o compresión en un conector F?",
    correcta: "Pérdidas, desadaptación y entrada de humedad, causando degradación de calidad y fallos intermitentes",
    incorrectas: [
      "Aumento de ganancia del sistema por efecto de resonancia del conector",
      "Conversión de la señal digital a analógica por falta de presión mecánica"
    ]
  },
  {
    enunciado: "¿Cuál es una medida preventiva eficaz en conectores exteriores frente a la humedad?",
    correcta: "Sellar con materiales adecuados y proteger el conector para impedir la entrada de agua y condensación",
    incorrectas: [
      "Dejar el conector abierto para que se seque por convección mientras el vivo queda expuesto",
      "Aplicar lubricante conductor entre vivo y malla para asegurar continuidad"
    ]
  },
  {
    enunciado: "¿Qué establece, en términos generales, el Real Decreto 346/2011 respecto a ICT-2 en instalaciones?",
    correcta: "Define el marco de la ICT-2 y los requisitos y pruebas para certificar la instalación en edificación",
    incorrectas: [
      "Define la banda KU del satélite y fija el oscilador local obligatorio del LNB",
      "Establece la potencia de transmisión de los repetidores de TDT y su ubicación municipal"
    ]
  },
  {
    enunciado: "¿Qué aporta la Orden ITC/1644/2011 en relación con la legalización de la ICT?",
    correcta: "Detalla parámetros técnicos y el modelo de protocolo de pruebas que debe cumplimentarse por instalador autorizado",
    incorrectas: [
      "Sustituye al REBT y elimina la obligación de puesta a tierra de mástiles",
      "Define el procedimiento de apuntamiento por GPS como método único permitido"
    ]
  },
  {
    enunciado: "¿Qué regula la ITC-BT-15 del REBT en relación con sistemas de telecomunicaciones?",
    correcta: "Aspectos relativos a la alimentación eléctrica de equipos de telecomunicaciones en instalaciones",
    incorrectas: [
      "El cálculo de azimut y elevación en satélite mediante tablas astronómicas",
      "Los niveles mínimos de MER en toma de usuario para TDT y satélite"
    ]
  },
  {
    enunciado: "¿Qué aspecto relevante cubre la ITC-BT-24 del REBT en este tipo de instalaciones?",
    correcta: "Protección contra sobretensiones y criterios asociados a puesta a tierra de elementos metálicos en los supuestos aplicables",
    incorrectas: [
      "El diseño de filtros LTE y el corte exacto del canal 48",
      "La conversión de KU a FI y la selección de banda por 22 kHz"
    ]
  },
  {
    enunciado: "¿Qué aporta la Guía Técnica de la ICT-2 en la práctica profesional?",
    correcta: "Recomendaciones sobre materiales y métodos para asegurar durabilidad y correcta ejecución de la captación y red",
    incorrectas: [
      "La lista de satélites operativos y sus frecuencias actualizadas por provincias",
      "La obligación de usar únicamente conectores CEI y prohibir conectores F"
    ]
  },
  {
    enunciado: "¿Qué regula el RD 2177/2004 en trabajos de instalación de antenas?",
    correcta: "Disposiciones mínimas de seguridad para trabajos en altura y uso de equipos como escaleras, andamios y arneses",
    incorrectas: [
      "Los niveles mínimos de señal de TDT y satélite en la toma de usuario",
      "La impedancia estándar del coaxial y el apantallamiento obligatorio de la malla"
    ]
  },
  {
    enunciado: "¿Qué exige de forma general la Ley 31/1995 en un montaje de antenas en cubierta?",
    correcta: "Aplicar prevención de riesgos, usar EPI y organizar el trabajo reduciendo el riesgo de caída y accidente",
    incorrectas: [
      "Ajustar el skew del LNB con tolerancia normativa para evitar descargas atmosféricas",
      "Medir el espectro de FI con un polímetro para certificar la instalación"
    ]
  },
  {
    enunciado: "¿Qué implica el marcado CE y la Directiva RED 2014/53/UE en equipos radioeléctricos usados en la instalación?",
    correcta: "Que los equipos deben cumplir requisitos de seguridad y compatibilidad electromagnética para su comercialización y uso",
    incorrectas: [
      "Que cualquier equipo con CE garantiza la mejor orientación de satélite sin necesidad de medición",
      "Que los LNB quedan exentos de compatibilidad electromagnética por trabajar en frecuencias altas"
    ]
  }
];
