// 30-instalaciones-de-alimentacion-de-socorro.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué se entiende por 'alimentación de socorro' según el REBT?",
    correcta: "Es la alimentación complementaria destinada a mantener el suministro eléctrico esencial en caso de fallo de la alimentación normal",
    incorrectas: [
      "La alimentación de los socorristas de la piscina",
      "La alimentación de la cafetera de la oficina"
    ]
  },
  {
    enunciado: "¿Qué dos tipos de suministros complementarios define el reglamento?",
    correcta: "Suministro de socorro (limitado a seguridad, ej. 15% potencia) y Suministro de reserva (mantiene actividad normal, ej. 25-50% potencia)",
    incorrectas: [
      "Suministro de día y Suministro de noche",
      "Suministro barato y Suministro caro"
    ]
  },
  {
    enunciado: "¿Cuáles son las fuentes propias de energía admitidas?",
    correcta: "Motores de combustión interna (grupos electrógenos), baterías de acumuladores y pilas (en casos concretos)",
    incorrectas: [
      "La conexión a la red del vecino",
      "Una bicicleta estática"
    ]
  },
  {
    enunciado: "¿Qué requisito debe cumplir un suministro de socorro para considerarse seguro?",
    correcta: "Debe entrar en funcionamiento automáticamente al fallar el normal (corte breve o largo según local) y tener autonomía suficiente garantizada",
    incorrectas: [
      "Debe ser manual de manivela",
      "Debe funcionar solo de día"
    ]
  },
  {
    enunciado: "¿Qué es un SAI (Sistema de Alimentación Ininterrumpida) o UPS?",
    correcta: "Un equipo electrónico que proporciona energía eléctrica limpia y sin corte mediante baterías e inversor durante fallos de red",
    incorrectas: [
      "Una Sociedad Anónima Inmobiliaria",
      "Un fusible automático"
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre un SAI Offline, Interactivo y Online (Doble Conversión)?",
    correcta: "El Online alimenta siempre la carga desde el inversor (aislada de red), ofreciendo tiempo de transferencia cero y protección total; el Offline tiene microcorte al conmutar",
    incorrectas: [
      "El Online está conectado a internet y el Offline no",
      "El Interactivo es táctil"
    ]
  },
  {
    enunciado: "¿Qué mantenimiento básico requiere un grupo electrógeno diésel de emergencia?",
    correcta: "Pruebas de arranque periódicas (con y sin carga), control y cambio de aceite/filtros, y verificación del estado de la batería de arranque y nivel de combustible",
    incorrectas: [
      "Echarle gasolina de coche",
      "Pintarlo cada año"
    ]
  },
  {
    enunciado: "¿Qué es el conmutador de redes (ATS - Automatic Transfer Switch)?",
    correcta: "El dispositivo que vigila la red normal y, si falla, arranca el grupo y cambia los contactores para alimentar la carga desde socorro (y retorno al volver)",
    incorrectas: [
      "Un interruptor de la luz",
      "Un router de comunicaciones"
    ]
  },
  {
    enunciado: "¿Qué precaución crítica debe tener el conmutador de redes?",
    correcta: "Tener enclavamiento mecánico y eléctrico entre los contactores de red y grupo para evitar que se cierren a la vez (cortocircuito entre fuentes no sincronizadas)",
    incorrectas: [
      "Cerrar los dos a la vez para sumar potencia",
      "Ser manual obligatoriamente"
    ]
  },
  {
    enunciado: "¿Qué es el 'Bypass' manual o de mantenimiento en un SAI?",
    correcta: "Un interruptor que permite alimentar la carga directamente de la red puenteando el SAI, permitiendo repararlo o sustituirlo sin cortar la alimentación crítica",
    incorrectas: [
      "Un puente de cables pelados",
      "Una operación médica"
    ]
  },
  {
    enunciado: "¿Qué autonomía mínima se exige habitualmente para el alumbrado de emergencia de evacuación?",
    correcta: "1 hora (salvo normativas específicas que pidan más)",
    incorrectas: [
      "5 minutos",
      "24 horas"
    ]
  },
  {
    enunciado: "¿Qué es la 'zona de conmutación' o tiempo de corte máximo admisible?",
    correcta: "El tiempo máximo que la instalación puede estar sin tensión antes de que entre el socorro (ej. < 0.5s en quirófanos, < 15s en pública concurrencia general)",
    incorrectas: [
      "1 hora siempre",
      "Depende de la prisa del operario"
    ]
  },
  {
    enunciado: "¿Qué problema presentan las baterías de plomo-ácido selladas (VRLA) en SAIs?",
    correcta: "Tienen una vida útil limitada (3-5 años o 10 años según diseño) muy dependiente de la temperatura ambiente (se degradan rápido > 25ºC)",
    incorrectas: [
      "Explotan si se miran",
      "Son eternas"
    ]
  },
  {
    enunciado: "¿Es posible suministrar energía a la red pública desde el grupo de socorro?",
    correcta: "Está terminantemente prohibido (salvo régimen especial legalizado y protecciones de isla); el grupo debe estar aislado de la red o sincronizado solo para conmutación sin corte",
    incorrectas: [
      "Sí, para vender electricidad sobrante sin contador",
      "Sí, el contador gira al revés"
    ]
  },
  {
    enunciado: "¿Qué sala requiere un grupo electrógeno en edificio?",
    correcta: "Un local independiente, ventilado al exterior (admisión y escape de gases) y con aislamiento acústico si es necesario, cumpliendo normas de almacenamiento de combustible",
    incorrectas: [
      "Cualquier pasillo vale",
      "En la azotea al sol sin techo"
    ]
  },
  {
    enunciado: "¿Qué es la selectividad cronométrica o lógica en sistemas de socorro?",
    correcta: "Asegurar que las protecciones aguas abajo disparen antes que el general del grupo, para no tirar todo el sistema de emergencia por un fallo menor",
    incorrectas: [
      "Usar relojes caros",
      "Desconectar todo a la vez"
    ]
  },
  {
    enunciado: "¿Qué es el 'Load Shedding' o desconexión de cargas no prioritarias?",
    correcta: "Un sistema que desconecta automáticamente circuitos no esenciales (aire acondicionado confort) cuando se trabaja con generador, para no sobrecargarlo",
    incorrectas: [
      "Tirar la carga por la ventana",
      "Apagar las luces a mano corriendo"
    ]
  },
  {
    enunciado: "¿Qué son las 'tomas de corriente de color rojo' en hospitales (o blanco con piloto)?",
    correcta: "Tomas conectadas a la red de socorro (grupo/SAI), para enchufar equipos vitales; se diferencian de las normales para no cometer errores",
    incorrectas: [
      "Tomas para bomberos",
      "Tomas decorativas"
    ]
  },
  {
    enunciado: "¿Qué es la redundancia N+1 en SAIs?",
    correcta: "Tener un módulo de SAI más del necesario para la carga (ej. 3 módulos de 50kW para 100kW), de modo que si falla uno, los otros soportan la carga sin corte",
    incorrectas: [
      "Tener un SAI de repuesto en el almacén",
      "Suma aritmética simple"
    ]
  },
  {
    enunciado: "¿Qué es la protección 'anti-isla' en generadores que sincronizan con red?",
    correcta: "Evita que el generador siga alimentando la red pública si esta cae, protegiendo a los operarios de la compañía que reparan la línea",
    incorrectas: [
      "Evita que se inunde el generador",
      "Para generadores en islas"
    ]
  },
  {
    enunciado: "¿Qué tipo de cable se exige para los circuitos de seguridad (socorro)?",
    correcta: "Cables resistentes al fuego (AS+ / RF) para mantener el servicio durante un incendio el tiempo necesario",
    incorrectas: [
      "Cables de aluminio desnudo",
      "Cables de red informática"
    ]
  },
  {
    enunciado: "¿Qué es el 'precaldeo' (resistencia de caldeo) del motor diésel?",
    correcta: "Una resistencia que mantiene el bloque motor caliente cuando está parado, facilitando el arranque inmediato en frío y reduciendo desgaste",
    incorrectas: [
      "Calefacción para la sala",
      "Para calentar el café"
    ]
  },
  {
    enunciado: "¿Dónde debe conectarse la alimentación de los servicios de seguridad?",
    correcta: "Aguas arriba del interruptor general de la instalación normal (en el cuadro principal) o directamente en bornas del conmutador, independientes del resto",
    incorrectas: [
      "En cualquier enchufe libre",
      "Detrás del diferencial de alumbrado"
    ]
  },
  {
    enunciado: "¿Qué pasa si el coseno de fi de la carga es muy capacitivo (ej. servidores) para el grupo electrógeno?",
    correcta: "El alternador puede volverse inestable o excitarse demasiado; se requiere sobredimensionar el grupo o corregir el factor de potencia",
    incorrectas: [
      "El grupo ahorra combustible",
      "No pasa nada"
    ]
  },
  {
    enunciado: "¿Qué es un SAI de tecnología 'Line-Interactive'?",
    correcta: "Regula la tensión de red (AVR) sin usar baterías en condiciones normales, y commuta a batería+inversor si hay corte (tiempo de conmutación 2-10ms)",
    incorrectas: [
      "Un SAI que chatea contigo",
      "Igual que el Online"
    ]
  },
  {
    enunciado: "¿Puede un local tener dos acometidas de diferentes subestaciones como seguridad?",
    correcta: "Sí, se considera suministro doble (reserva), muy fiable, pero requiere conmutación segura",
    incorrectas: [
      "No, está prohibido tener dos contadores",
      "Es obligatorio en todas las casas"
    ]
  },
  {
    enunciado: "¿Qué mantenimiento requieren las baterías de plomo abiertas (con mantenimiento)?",
    correcta: "Rellenar el nivel de electrolito con agua destilada periódicamente y controlar la densidad, limpieza de bornes y ventilación de hidrógeno",
    incorrectas: [
      "Echarles ácido sulfúrico concentrado cada mes",
      "Ninguno"
    ]
  },
  {
    enunciado: "¿Qué es el 'bypass estático' de un SAI?",
    correcta: "Un circuito electrónico (tiristores) que transfiere la carga a red instantáneamente si el inversor falla o hay sobrecarga, sin corte",
    incorrectas: [
      "Un cable fijo",
      "Un bypass manual"
    ]
  },
  {
    enunciado: "¿Qué autonomía suelen tener los SAI estándar de ordenadores?",
    correcta: "Corta (5-15 minutos), pensada para guardar datos y apagar ordenadamente o arrancar generador, no para trabajar horas",
    incorrectas: [
      "8 horas",
      "10 segundos"
    ]
  },
  {
    enunciado: "¿Qué es un volante de inercia en sistemas dinámicos UPS?",
    correcta: "Una masa giratoria que almacena energía cinética para mantener el alternador girando durante los segundos que tarda en arrancar el motor diésel (sin baterías químicas)",
    incorrectas: [
      "El volante para conducir el grupo",
      "Una rueda de repuesto"
    ]
  },
  {
    enunciado: "¿Qué verificación se hace en el depósito de combustible?",
    correcta: "Que no tenga agua/lodos (bacterias del diesel), que tenga nivel suficiente y que no haya fugas en las tuberías flexibles",
    incorrectas: [
      "Que el gasoil sea rojo agrícola",
      "Probar el sabor"
    ]
  },
  {
    enunciado: "¿Qué es la potencia PRP (Prime Power) vs ESP (Emergency Standby Power) en un grupo?",
    correcta: "PRP es para uso continuo variable (sin límite horas), ESP es potencia máxima de emergencia (límite horas/año, sin sobrecarga admisible 10%)",
    incorrectas: [
      "Potencias inventadas por el fabricante",
      "PRP es potencia reactiva pura"
    ]
  }
];
