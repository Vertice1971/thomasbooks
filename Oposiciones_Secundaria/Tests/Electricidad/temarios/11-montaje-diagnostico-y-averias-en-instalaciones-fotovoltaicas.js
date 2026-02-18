// 11-montaje-diagnostico-y-averias-en-instalaciones-fotovoltaicas.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué precaución crítica debe tomarse al conectar módulos fotovoltaicos en serie durante el montaje?",
    correcta: "No conectar ni desconectar los conectores bajo carga (corriente circulando), ya que puede producirse un arco eléctrico peligroso",
    incorrectas: [
      "Asegurarse de que todos los módulos estén en cortocircuito antes de conectar",
      "Conectar siempre el polo positivo a tierra antes de realizar la serie"
    ]
  },
  {
    enunciado: "¿Qué efecto visual en una termografía suele indicar la presencia de un 'punto caliente' (hotspot) en un módulo?",
    correcta: "Una celda o parte de ella con una temperatura significativamente superior a las adyacentes, debido a disipación de energía por sombras o defectos",
    incorrectas: [
      "Una temperatura uniforme en todo el panel inferior a la temperatura ambiente",
      "Un patrón de líneas frías a lo largo de los marcos del módulo"
    ]
  },
  {
    enunciado: "¿Cuál es la función principal de los diodos de bypass (o de paso) en una caja de conexiones de un módulo FV?",
    correcta: "Proporcionar un camino alternativo a la corriente cuando una celda o subcadena está sombreada o dañada, evitando el sobrecalentamiento",
    incorrectas: [
      "Evitar que la batería se descargue sobre el panel durante la noche",
      "Aumentar la tensión de salida del módulo sumando la caída de tensión del diodo"
    ]
  },
  {
    enunciado: "¿Qué fenómeno se conoce como PID (Potential Induced Degradation)?",
    correcta: "Una degradación del rendimiento causada por corrientes de fuga entre las células y el marco (tierra) debido a altos voltajes del sistema",
    incorrectas: [
      "La degradación natural del silicio por la exposición a la luz UV tras las primeras horas (LID)",
      "La rotura del vidrio frontal por impacto de granizo"
    ]
  },
  {
    enunciado: "¿Qué medida es imprescindible para evitar bucles de inducción grandes en el cableado de corriente continua?",
    correcta: "Mantener los conductores positivo y negativo lo más juntos posible durante todo el recorrido del string",
    incorrectas: [
      "Separar los conductores positivo y negativo al menos 50 cm para mejorar la ventilación",
      "Realizar un cableado en forma de espiral alrededor de la estructura de soporte"
    ]
  },
  {
    enunciado: "¿Qué instrumento es el más idóneo para verificar la correcta curva de comportamiento de un string FV?",
    correcta: "Un trazador de curvas I-V",
    incorrectas: [
      "Un multímetro digital básico en modo resistencia",
      "Un luxómetro portátil estándar"
    ]
  },
  {
    enunciado: "¿Qué indica una resistencia de aislamiento baja (Riso) en el lado de corriente continua?",
    correcta: "Un defecto en el aislamiento de cables, conectores o módulos que puede derivar corriente a tierra, a menudo por humedad o daños físicos",
    incorrectas: [
      "Que los módulos están produciendo más corriente de la nominal",
      "Que el inversor está sobrecalentado y ha reducido su potencia"
    ]
  },
  {
    enunciado: "¿En el montaje sobre cubierta inclinada, qué función tiene la estructura 'coplanar' con ventilación trasera?",
    correcta: "Fijar los módulos paralelos al tejado permitiendo cierto flujo de aire para refrigeración, sin aumentar excesivamente la carga de viento",
    incorrectas: [
      "Aumentar la inclinación de los paneles para maximizar la captación en invierno exclusivamente",
      "Sellar herméticamente el tejado para mejorar el aislamiento térmico del edificio"
    ]
  },
  {
    enunciado: "¿Qué par de apriete se debe aplicar a las conexiones eléctricas y mecánicas?",
    correcta: "El especificado estrictamente por el fabricante, usando una llave dinamométrica para evitar puntos calientes por aflojamiento o roturas por exceso",
    incorrectas: [
      "El máximo posible que permita la fuerza del instalador para asegurar contacto",
      "Un apriete ligero para permitir la dilatación térmica libre de los tornillos"
    ]
  },
  {
    enunciado: "¿Qué problema puede causar el sombreado parcial de un solo módulo en un string largo sin optimizadores?",
    correcta: "La limitación de la corriente de todo el string a la corriente del módulo sombreado (si no actúan los diodos) o la pérdida de tensión del sub-string activado",
    incorrectas: [
      "Un aumento súbito de la tensión en circuito abierto del string",
      "La desconexión inmediata del interruptor general de alterna por sobretensión"
    ]
  },
  {
    enunciado: "¿Qué es el 'clipping' o recorte de potencia en un inversor?",
    correcta: "La limitación intencionada de la potencia de salida cuando la potencia DC disponible supera la capacidad nominal del inversor",
    incorrectas: [
      "Un fallo del ventilador que obliga a apagar el equipo",
      "El corte de cables DC por roedores"
    ]
  },
  {
    enunciado: "¿Qué verificación es obligatoria antes de conectar los strings al inversor?",
    correcta: "Comprobar la polaridad y que la tensión de circuito abierto (Voc) no supere (corregida por temperatura) la tensión máxima admisible del inversor",
    incorrectas: [
      "Comprobar que la corriente de cortocircuito sea cero",
      "Verificar que la frecuencia de la red sea de 60 Hz exactamente"
    ]
  },
  {
    enunciado: "¿Qué tipo de conector es el estándar de facto en instalaciones fotovoltaicas actuales?",
    correcta: "Conectores tipo MC4 (o compatibles certificados)",
    incorrectas: [
      "Conectores RJ45 estancos",
      "Bornas de conexión tipo regleta de tornillo doméstica"
    ]
  },
  {
    enunciado: "¿Por qué no se deben mezclar conectores MC4 de distintos fabricantes aunque encajen físicamente?",
    correcta: "Porque las tolerancias y materiales pueden diferir, provocando resistencia de contacto, calentamiento y riesgo de incendio a largo plazo",
    incorrectas: [
      "Porque la garantía del panel se anula si no se usa el conector de la misma marca que el inversor",
      "Porque electrónicamente son incompatibles y el inversor no arrancará"
    ]
  },
  {
    enunciado: "¿Qué mantenimiento preventivo básico requieren los módulos fotovoltaicos?",
    correcta: "Limpieza periódica de la superficie y e inspección visual de daños, marcos y cableado",
    incorrectas: [
      "Recarga de gas refrigerante interno cada dos años",
      "Lubricación de los diodos de bypass con aceite dieléctrico"
    ]
  },
  {
    enunciado: "¿Qué indica un código de error de 'Resistencia de Aislamiento' en el inversor?",
    correcta: "Que la impedancia entre el campo fotovoltaico (positivo o negativo) y tierra es inferior al umbral de seguridad",
    incorrectas: [
      "Que el aislamiento térmico del edificio es insuficiente",
      "Que la tensión de red es demasiado alta"
    ]
  },
  {
    enunciado: "¿Qué son las microfisuras (microcracks) en las células?",
    correcta: "Grietas microscópicas en el silicio causadas por mal manejo o estrés mecánico, que pueden derivar en pérdidas de potencia y puntos calientes",
    incorrectas: [
      "Pequeñas aberturas diseñadas para la ventilación de la célula",
      "Rayaduras superficiales en el vidrio que no afectan al funcionamiento"
    ]
  },
  {
    enunciado: "¿Cómo afecta la temperatura al rendimiento de un módulo fotovoltaico de silicio cristalino?",
    correcta: "Al aumentar la temperatura, disminuye la tensión y ligeramente la potencia máxima (coeficiente de temperatura negativo para potencia)",
    incorrectas: [
      "Al aumentar la temperatura, aumenta significativamente la eficiencia y la potencia generada",
      "La temperatura no afecta al rendimiento, solo la irradiancia"
    ]
  },
  {
    enunciado: "¿Qué dispositivo de protección contra sobretensiones se instala en el lado DC?",
    correcta: "Descargadores de sobretensión tipo 1 o 2 específicos para corriente continua (DC)",
    incorrectas: [
      "Diferenciales de clase AC de 30 mA",
      "Fusibles de fusión lenta tipo gG para alterna"
    ]
  },
  {
    enunciado: "¿Cuándo es necesario utilizar fusibles en los strings fotovoltaicos?",
    correcta: "Generalmente cuando hay 3 o más strings en paralelo conectados al mismo MPPT, para proteger los cables de corrientes de retorno",
    incorrectas: [
      "Siempre, incluso si hay un solo string conectado al inversor",
      "Nunca, los inversores ya limitan la corriente electrónicamente"
    ]
  },
  {
    enunciado: "¿Qué significa que un inversor esté en modo 'isla' (island mode)?",
    correcta: "Que sigue inyectando energía a una red desconectada, situación peligrosa que los inversores de conexión a red deben detectar y evitar (anti-isla)",
    incorrectas: [
      "Que está instalado en una isla geográfica sin conexión al continente",
      "Que funciona exclusivamente con baterías sin conexión a paneles"
    ]
  },
  {
    enunciado: "¿Para qué sirve medir la corriente de cortocircuito (Isc) de un string durante la puesta en marcha?",
    correcta: "Para verificar que el string está operativo y conectado correctamente, comparando el valor medido con el esperado según la irradiancia",
    incorrectas: [
      "Para cargar los condensadores del bus DC del inversor rápidamente",
      "Para comprobar la resistencia de puesta a tierra de la estructura"
    ]
  },
  {
    enunciado: "¿Qué riesgo tiene caminar sobre los módulos fotovoltaicos durante el mantenimiento?",
    correcta: "Provocar microfisuras en las células invisibles a simple vista y riesgo de resbalamiento o rotura del vidrio",
    incorrectas: [
      "Ninguno, están diseñados para soportar el peso de una persona",
      "Descargar la electricidad estática del cuerpo dañando los diodos"
    ]
  },
  {
    enunciado: "¿Qué función cumple el conductor de equipotencialidad (tierra) de la estructura?",
    correcta: "Conectar todas las partes metálicas expuestas a tierra para evitar diferencias de potencial peligrosas en caso de fallo o rayo",
    incorrectas: [
      "Servir de retorno para la corriente continua del sistema",
      "Mejorar la captación de radiación difusa por efecto antena"
    ]
  },
  {
    enunciado: "¿Qué es la degradación LID (Light Induced Degradation)?",
    correcta: "Una pérdida inicial de eficiencia (generalmente 1-3%) que ocurre en las primeras horas de exposición al sol en módulos p-type monocristalinos",
    incorrectas: [
      "Una degradación causada por la limpieza de paneles con agua dura",
      "El oscurecimiento del vidrio por contaminación atmosférica"
    ]
  },
  {
    enunciado: "¿Qué ventaja tienen los seguidores solares (trackers) frente a estructuras fijas?",
    correcta: "Aumentan la producción energética siguiendo la trayectoria del sol, pero implican mayor coste de mantenimiento y partes móviles",
    incorrectas: [
      "Son mucho más baratos y sencillos de instalar",
      "Eliminan la necesidad de inversores en la instalación"
    ]
  },
  {
    enunciado: "¿Qué ocurre si se conectan strings con diferente número de módulos en paralelo al mismo MPPT?",
    correcta: "Se produce un desequilibrio de tensiones que causa corrientes circulantes (mismatch), reduciendo drásticamente la eficiencia y pudiendo dañar los módulos",
    incorrectas: [
      "El MPPT ajusta automáticamente la tensión de cada string por separado",
      "No pasa nada, el sistema toma el promedio de los dos"
    ]
  },
  {
    enunciado: "¿Qué síntoma presenta un diodo de bypass en cortocircuito?",
    correcta: "El sub-string asociado deja de producir tensión, reduciendo el Voc del módulo en un tercio (típicamente) y calentando ligeramente la caja de conexiones",
    incorrectas: [
      "El módulo deja de conducir corriente por completo (circuito abierto)",
      "El inversor explota por sobretensión"
    ]
  },
  {
    enunciado: "¿Qué herramienta se usa para medir la irradiancia solar en el plano de los módulos?",
    correcta: "Un piranómetro o célula de referencia calibrada",
    incorrectas: [
      "Un anemómetro",
      "Un barómetro digital"
    ]
  },
  {
    enunciado: "¿Cuál es una causa común de avería en inversores después de unos años?",
    correcta: "Fallo de los condensadores electrolíticos del bus DC o de los relés de acoplamiento a red, a menudo por estrés térmico",
    incorrectas: [
      "Desgaste de los escobillas del colector DC",
      "Agotamiento del gas inerte en la cámara de conmutación"
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre un seccionador de carga DC y un interruptor automático?",
    correcta: "El seccionador permite aislar el circuito manualmente (a veces bajo carga si está diseñado para ello) pero no protege automáticamente contra sobreintensidades como el automático",
    incorrectas: [
      "El seccionador es para corriente alterna y el automático para continua",
      "El seccionador es automático y el interruptor es manual"
    ]
  },
  {
    enunciado: "¿Qué se debe verificar en el cableado solar (tipo H1Z2Z2-K) durante una inspección?",
    correcta: "Que no esté sometido a tensión mecánica, que no roce con bordes cortantes, que los conectores estén bien crimpados y que soporte la intemperie (UV)",
    incorrectas: [
      "Que esté pintado del mismo color que la estructura",
      "Que tenga una temperatura inferior a 0ºC en funcionamiento"
    ]
  },
  {
    enunciado: "¿Qué efecto tiene la suciedad acumulada en el borde inferior del marco del módulo?",
    correcta: "Puede sombrear la fila inferior de células, activando los diodos de bypass y reduciendo desproporcionadamente la producción del panel",
    incorrectas: [
      "Mejora el aislamiento térmico del marco",
      "Sirve de protección contra impactos en el borde"
    ]
  },
  {
    enunciado: "¿Qué es el 'derating' por temperatura en un inversor?",
    correcta: "La reducción automática de la potencia de salida para proteger la electrónica interna cuando la temperatura ambiente o del equipo es excesiva",
    incorrectas: [
      "La desconexión total obligatoria por normativa a 25ºC",
      "El aumento de velocidad de los ventiladores para generar más potencia"
    ]
  },
  {
    enunciado: "¿Para qué sirve la categoría de sobretensión (CAT III, CAT IV) en los instrumentos de medida?",
    correcta: "Indica el nivel de seguridad y protección del instrumento frente a transitorios de alta energía en diferentes puntos de la instalación eléctrica",
    incorrectas: [
      "Indica la precisión de la medida (CAT IV es más preciso que CAT III)",
      "Indica la duración de la batería del instrumento"
    ]
  },
  {
    enunciado: "¿En una instalación con microinversores, qué ventaja principal se obtiene en diagnóstico?",
    correcta: "Monitorización individualizada por panel, lo que permite detectar fallos específicos o sombras de forma muy precisa",
    incorrectas: [
      "Eliminación total del cableado de alterna en la instalación",
      "Posibilidad de usar paneles de distinta tecnología en el mismo microinversor sin límites"
    ]
  },
  {
    enunciado: "¿Qué prueba se realiza para verificar la continuidad de los conductores de protección?",
    correcta: "Medición de resistencia con una corriente mínima (típicamente 200 mA) entre cada parte metálica y la borna principal de tierra",
    incorrectas: [
      "Medición de tensión entre fase y neutro",
      "Prueba de disparo del diferencial"
    ]
  },
  {
    enunciado: "¿Qué ocurre con la tensión de un módulo si un diodo de bypass falla en circuito abierto?",
    correcta: "Si hay sombras en ese sub-string, la corriente se bloqueará o forzará 'puntos calientes' severos en las células sombreadas, pudiendo quemar el backsheet",
    incorrectas: [
      "El módulo funcionará mejor porque no hay caída de tensión en el diodo",
      "El inversor detectará el fallo y reparará el diodo automáticamente"
    ]
  },
  {
    enunciado: "¿Qué documentación técnica final es imprescindible entregar en una instalación FV?",
    correcta: "Esquema unifilar, memoria técnica, manuales de equipos, garantía y boletín de instalación (CIE) legalizado",
    incorrectas: [
      "Solo la factura de compra de los paneles",
      "Un dibujo a mano alzada de la ubicación de los paneles"
    ]
  },
  {
    enunciado: "¿Qué es la electroluminiscencia en el diagnóstico de paneles?",
    correcta: "Una técnica que consiste en inyectar corriente al panel (como un LED) y captar la luz infrarroja emitida para detectar microfisuras y defectos ocultos",
    incorrectas: [
      "Iluminar el panel con una linterna potente para ver si refleja",
      "Medir la electricidad estática de la superficie del vidrio"
    ]
  }
];
