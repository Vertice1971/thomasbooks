// temarios/10-configuracion-y-calculo-de-instalaciones-solares-fotovoltaicas.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué es el efecto fotovoltaico en una célula solar?",
    correcta: "La generación de una diferencia de potencial al iluminar un semiconductor, produciendo corriente eléctrica utilizable",
    incorrectas: [
      "La conversión directa de corriente alterna en continua mediante un inversor",
      "La transformación de energía térmica en eléctrica por efecto Seebeck"
    ]
  },
  {
    enunciado: "¿Cuál es una tecnología habitual de células fotovoltaicas basada en silicio cristalino?",
    correcta: "Silicio monocristalino o policristalino",
    incorrectas: [
      "Cobre electrolítico de alta pureza",
      "Níquel-cadmio en lámina conductora"
    ]
  },
  {
    enunciado: "¿Qué parámetro representa la tensión de circuito abierto de un módulo fotovoltaico?",
    correcta: "La tensión máxima del módulo cuando no hay carga conectada y la corriente es cero",
    incorrectas: [
      "La tensión del módulo cuando entrega su potencia máxima",
      "La tensión mínima del módulo con irradiancia máxima"
    ]
  },
  {
    enunciado: "¿Qué parámetro representa la corriente de cortocircuito de un módulo fotovoltaico?",
    correcta: "La corriente máxima del módulo cuando sus bornes están en cortocircuito y la tensión es prácticamente cero",
    incorrectas: [
      "La corriente que entrega el módulo a potencia máxima",
      "La corriente mínima del módulo en condiciones STC"
    ]
  },
  {
    enunciado: "¿Qué es el punto de máxima potencia en un módulo fotovoltaico?",
    correcta: "El punto de la curva I-V donde el producto V·I es máximo",
    incorrectas: [
      "El punto donde la tensión es igual a Voc",
      "El punto donde la corriente es igual a Isc"
    ]
  },
  {
    enunciado: "¿Qué expresa el factor de forma (FF) de una célula o módulo?",
    correcta: "La relación que mide la “rectangularidad” de la curva I-V y la calidad eléctrica del dispositivo",
    incorrectas: [
      "La proporción de módulos conectados en serie frente a paralelo",
      "El porcentaje de sombra permitido en el campo generador"
    ]
  },
  {
    enunciado: "¿Cómo afecta normalmente la temperatura a la tensión de un módulo fotovoltaico?",
    correcta: "Al aumentar la temperatura, la tensión disminuye según el coeficiente de temperatura",
    incorrectas: [
      "Al aumentar la temperatura, la tensión aumenta siempre",
      "La temperatura solo afecta a la corriente, no a la tensión"
    ]
  },
  {
    enunciado: "¿Cómo afecta típicamente la irradiancia a la corriente del módulo?",
    correcta: "La corriente aumenta aproximadamente de forma proporcional a la irradiancia",
    incorrectas: [
      "La corriente disminuye proporcionalmente a la irradiancia",
      "La corriente no cambia con la irradiancia, solo cambia la tensión"
    ]
  },
  {
    enunciado: "¿Qué se consigue al conectar módulos en serie (strings)?",
    correcta: "Aumentar la tensión total del conjunto",
    incorrectas: [
      "Aumentar la corriente total del conjunto",
      "Disminuir la tensión total del conjunto para mejorar el MPPT"
    ]
  },
  {
    enunciado: "¿Qué se consigue al conectar strings en paralelo?",
    correcta: "Aumentar la corriente total disponible manteniendo la tensión del string",
    incorrectas: [
      "Aumentar la tensión total del generador",
      "Reducir la corriente total para evitar protecciones"
    ]
  },
  {
    enunciado: "¿Para qué sirven los diodos bypass en un módulo fotovoltaico?",
    correcta: "Para limitar pérdidas y evitar puntos calientes cuando una parte del módulo queda sombreada",
    incorrectas: [
      "Para convertir corriente continua en alterna dentro del módulo",
      "Para aumentar el rendimiento del inversor en cargas inductivas"
    ]
  },
  {
    enunciado: "¿Cuál es una función principal del inversor en una instalación FV conectada a red?",
    correcta: "Convertir la energía DC del generador en AC sincronizada con la red",
    incorrectas: [
      "Convertir AC en DC para cargar módulos fotovoltaicos",
      "Aumentar la irradiancia efectiva mediante control electrónico"
    ]
  },
  {
    enunciado: "¿Qué significa MPPT en un inversor o regulador?",
    correcta: "Seguimiento del punto de máxima potencia del generador para extraer la máxima energía posible",
    incorrectas: [
      "Protección contra sobretensiones transitorias en el lado AC",
      "Medición permanente de potencia reactiva en la red"
    ]
  },
  {
    enunciado: "¿Qué tipo de inversor se instala normalmente para un campo FV con varios módulos en serie en una vivienda?",
    correcta: "Inversor de cadena (string)",
    incorrectas: [
      "Inversor de tracción ferroviaria",
      "Convertidor de audio de clase D"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a un microinversor frente a un inversor string?",
    correcta: "Convierte en AC a nivel de módulo o pequeño grupo, mejorando el rendimiento ante sombras parciales",
    incorrectas: [
      "Requiere tensiones DC mucho más altas que un string",
      "Solo funciona en instalaciones aisladas sin red"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a un inversor híbrido?",
    correcta: "Integra gestión de baterías además de la conversión DC/AC y el MPPT",
    incorrectas: [
      "Solo trabaja con módulos de capa fina",
      "Funciona únicamente con corriente alterna de entrada"
    ]
  },
  {
    enunciado: "¿Qué tecnologías de baterías son habituales en FV?",
    correcta: "Plomo-ácido (estacionarias, AGM, Gel) y litio (por ejemplo LiFePO4)",
    incorrectas: [
      "Níquel-hidrógeno exclusivamente",
      "Baterías de zinc-aire como estándar doméstico"
    ]
  },
  {
    enunciado: "¿Qué significa DoD en baterías?",
    correcta: "Profundidad de descarga, es decir, el porcentaje de capacidad extraído respecto a la capacidad nominal",
    incorrectas: [
      "Densidad óptica del diodo del módulo",
      "Diferencia de orientación diaria del generador"
    ]
  },
  {
    enunciado: "¿Qué relación existe entre DoD y vida útil en ciclos, de forma general?",
    correcta: "A mayor DoD habitual, suele reducirse el número de ciclos disponibles",
    incorrectas: [
      "A mayor DoD, aumenta siempre la vida útil sin límites",
      "No existe ninguna relación entre DoD y ciclos"
    ]
  },
  {
    enunciado: "¿Qué diferencia principal existe entre reguladores PWM y MPPT en sistemas con baterías?",
    correcta: "El MPPT adapta tensión/corriente para extraer más potencia del generador, el PWM trabaja de forma más simple y menos eficiente",
    incorrectas: [
      "El PWM solo se usa en AC y el MPPT solo en AC",
      "El MPPT elimina la necesidad de baterías"
    ]
  },
  {
    enunciado: "En el dimensionado energético, ¿qué representan las Horas de Sol Pico (HSP)?",
    correcta: "Una equivalencia de energía solar diaria expresada como kWh/m²/día que permite estimar producción",
    incorrectas: [
      "La tensión máxima permitida por string en frío",
      "La corriente máxima de cortocircuito del inversor"
    ]
  },
  {
    enunciado: "¿Qué representa el Performance Ratio (PR) en FV?",
    correcta: "Un factor global de pérdidas que relaciona la energía real producida con la ideal según irradiancia y potencia nominal",
    incorrectas: [
      "La relación entre módulos en serie y en paralelo",
      "El porcentaje de energía consumida por el inversor en vacío"
    ]
  },
  {
    enunciado: "¿Cuál es un rango típico de PR en una instalación bien diseñada?",
    correcta: "Aproximadamente entre 0,7 y 0,8, según condiciones y pérdidas",
    incorrectas: [
      "Entre 0,95 y 1,05 en cualquier instalación",
      "Siempre inferior a 0,3 en autoconsumo"
    ]
  },
  {
    enunciado: "¿Qué variable ambiental es crítica para estimar pérdidas por temperatura del módulo?",
    correcta: "La temperatura de célula o módulo y su coeficiente de temperatura de tensión/potencia",
    incorrectas: [
      "La impedancia característica del cable en ohmios",
      "El factor de potencia de la vivienda"
    ]
  },
  {
    enunciado: "¿Por qué se calcula la distancia mínima entre filas de módulos en estructuras inclinadas?",
    correcta: "Para evitar sombras propias entre filas en determinadas épocas del año",
    incorrectas: [
      "Para aumentar la corriente de cortocircuito del módulo",
      "Para reducir la frecuencia de muestreo del inversor"
    ]
  },
  {
    enunciado: "¿Qué se comprueba al dimensionar strings respecto al inversor en condiciones de frío?",
    correcta: "Que la tensión máxima del string no supere la tensión DC máxima admisible del inversor",
    incorrectas: [
      "Que la tensión mínima del string no supere la tensión máxima del inversor",
      "Que la corriente sea cero para asegurar Voc"
    ]
  },
  {
    enunciado: "¿Qué se comprueba al dimensionar strings respecto al rango MPPT en condiciones de calor?",
    correcta: "Que la tensión de trabajo se mantenga dentro del rango de seguimiento MPPT del inversor",
    incorrectas: [
      "Que la tensión sea igual a Voc para asegurar máxima potencia",
      "Que la corriente sea menor que cero para evitar clipping"
    ]
  },
  {
    enunciado: "¿Qué es el sobredimensionado DC/AC (ratio DC/AC) en FV?",
    correcta: "Instalar más potencia pico DC que potencia nominal AC del inversor para mejorar producción anual aunque haya recorte en picos",
    incorrectas: [
      "Instalar menos potencia DC que AC para evitar cualquier pérdida por temperatura",
      "Duplicar el número de baterías para igualar tensiones"
    ]
  },
  {
    enunciado: "¿Qué criterio básico se usa para seleccionar la sección de los conductores en FV?",
    correcta: "Intensidad admisible y caída de tensión, considerando longitud, método de instalación y temperatura",
    incorrectas: [
      "Únicamente el color del aislamiento del cable",
      "Únicamente la potencia del inversor sin considerar distancia"
    ]
  },
  {
    enunciado: "¿Cuál es un límite orientativo habitual de caída de tensión recomendado en diseño FV para DC y AC según guías técnicas?",
    correcta: "En torno a 1,5% en DC y 1,5% en AC como criterio de buena práctica",
    incorrectas: [
      "10% en DC y 15% en AC como criterio general",
      "0% en DC y 0% en AC, obligatorio por normativa"
    ]
  },
  {
    enunciado: "¿Qué elemento se usa para proteger frente a sobretensiones transitorias en FV?",
    correcta: "Dispositivos de protección contra sobretensiones (SPD) en DC y/o AC según el diseño",
    incorrectas: [
      "Diodos bypass en el cable principal de AC",
      "Regletas LSA-PLUS en la caja de strings"
    ]
  },
  {
    enunciado: "¿Qué función tiene un seccionador en el lado DC del generador?",
    correcta: "Permitir el aislamiento seguro del generador para mantenimiento y emergencias según el diseño",
    incorrectas: [
      "Aumentar la irradiancia disponible en los módulos",
      "Elevar la frecuencia de red para mejorar el sincronismo"
    ]
  },
  {
    enunciado: "¿Qué es una caja de strings (string box) en FV?",
    correcta: "Un punto de agrupación de strings con protecciones como fusibles, seccionamiento y SPD según arquitectura",
    incorrectas: [
      "Un equipo de conversión AC/DC para baterías",
      "Un dispositivo de medición de lux para cámaras CCTV"
    ]
  },
  {
    enunciado: "¿Qué requisito general se asocia a conectores tipo MC4?",
    correcta: "Crimpado correcto, compatibilidad adecuada y cierre seguro para evitar calentamientos y fallos",
    incorrectas: [
      "Uso obligatorio con cable coaxial de 75 ohmios",
      "Conexión directa a red AC sin inversor"
    ]
  },
  {
    enunciado: "¿Qué regula el Real Decreto 244/2019 en España?",
    correcta: "Las condiciones administrativas, técnicas y económicas del autoconsumo eléctrico (modalidades con/sin excedentes, individual/colectivo)",
    incorrectas: [
      "Los protocolos de verificación de alarmas para evitar falsas alarmas",
      "La instalación de antenas de televisión en edificios"
    ]
  },
  {
    enunciado: "¿Qué ITC del REBT es específica para instalaciones generadoras de baja tensión?",
    correcta: "ITC-BT-40",
    incorrectas: [
      "ITC-BT-28",
      "ITC-BT-36"
    ]
  },
  {
    enunciado: "¿Qué aporta la Guía Técnica de la ITC-BT-40 en la práctica?",
    correcta: "Criterios de aplicación e interpretación técnica sobre protecciones, esquemas y aspectos como caída de tensión y diferenciales",
    incorrectas: [
      "La definición de grados de seguridad de 1 a 4 en intrusión",
      "La regulación de la banda UHF de TDT"
    ]
  },
  {
    enunciado: "¿Qué norma UNE-EN se asocia a requisitos de documentación, puesta en marcha e inspección en sistemas FV conectados a red?",
    correcta: "UNE-EN 62446",
    incorrectas: [
      "UNE-EN 50131",
      "UNE-EN 60728"
    ]
  },
  {
    enunciado: "¿Qué documento del CTE fija exigencias de contribución renovable en edificación relacionado con FV o energía renovable?",
    correcta: "CTE DB-HE (por ejemplo HE4 según el planteamiento del tema)",
    incorrectas: [
      "CTE DB-SI",
      "CTE DB-HR"
    ]
  },
  {
    enunciado: "¿Qué regula el Real Decreto 1183/2020 en el ámbito eléctrico?",
    correcta: "El acceso y conexión a las redes de transporte y distribución de energía eléctrica",
    incorrectas: [
      "La conservación máxima de imágenes de CCTV durante 30 días",
      "La señalización SS7 entre centrales telefónicas"
    ]
  },
  {
    enunciado: "¿Qué es el Pliego de Condiciones Técnicas de Instalaciones Fotovoltaicas del IDAE en la práctica?",
    correcta: "Una referencia técnica de calidad con especificaciones sobre componentes, garantías y criterios de diseño y cálculo",
    incorrectas: [
      "Una norma de cableado estructurado para ICT de telefonía",
      "Un reglamento de seguridad privada aplicable a CRA"
    ]
  },
  {
    enunciado: "En una instalación FV con sombras parciales frecuentes, ¿qué solución suele mejorar el rendimiento energético?",
    correcta: "Microinversores u optimizadores a nivel de módulo o grupos pequeños",
    incorrectas: [
      "Aumentar la caída de tensión permitida en DC",
      "Eliminar los diodos bypass del módulo"
    ]
  },
  {
    enunciado: "¿Qué operación básica de puesta en marcha es crítica antes de conectar un generador FV a un inversor?",
    correcta: "Verificar polaridad, continuidad, aislamiento y valores esperables de tensión por string",
    incorrectas: [
      "Ajustar el ángulo de skew del LNB",
      "Medir MER y BER de una señal de televisión"
    ]
  }
];

