// 38-automatizacion-de-viviendas-gestion-de-energia.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué es la Domótica?",
    correcta: "El conjunto de tecnologías aplicadas al control y la automatización inteligente de la vivienda, permitiendo gestión energética, seguridad, confort y comunicación",
    incorrectas: [
      "La ciencia de domesticar animales",
      "La automatización exclusiva de fábricas"
    ]
  },
  {
    enunciado: "¿Qué es la racionalización de cargas eléctricas en una vivienda?",
    correcta: "Un sistema que desconecta temporalmente circuitos no prioritarios (ej. calefacción) cuando el consumo total se acerca a la potencia contratada, evitando el disparo del ICP",
    incorrectas: [
      "Darle la razón a los electrodomésticos",
      "Usar menos potencia siempre"
    ]
  },
  {
    enunciado: "¿Qué es un termostato programable o cronotermostato?",
    correcta: "Un dispositivo que regula la calefacción/aire acondicionado según horarios y temperaturas consigna definidos por el usuario, ahorrando energía cuando no hay nadie",
    incorrectas: [
      "Un termómetro simple de mercurio",
      "Un reloj de cocina"
    ]
  },
  {
    enunciado: "¿Qué es la zonificación de climatización?",
    correcta: "Controlar la temperatura de cada habitación de forma independiente (mediante rejillas motorizadas o válvulas termostáticas), climatizando solo donde es necesario",
    incorrectas: [
      "Dividir la casa en zonas horarias",
      "Poner el aire acondicionado en el pasillo para toda la casa"
    ]
  },
  {
    enunciado: "¿Qué sensor permite ahorrar iluminación en zonas de paso?",
    correcta: "El detector de presencia (y/o movimiento), que apaga la luz automáticamente tras un tiempo sin detectar ocupación",
    incorrectas: [
      "El sensor de temperatura",
      "El interruptor manual"
    ]
  },
  {
    enunciado: "¿Qué es el aprovechamiento de luz natural (Daylight Harvesting)?",
    correcta: "Regular la intensidad de la luz artificial en función de la luz natural que entra por las ventanas (con sensores de luminosidad) para mantener un nivel constante (Lux) ahorrando energía",
    incorrectas: [
      "Cosechar rayos de sol en botellas",
      "Abrir las cortinas a mano siempre"
    ]
  },
  {
    enunciado: "¿Qué es el 'Monitor de Consumo Energético'?",
    correcta: "Un dispositivo que mide y muestra en tiempo real el consumo eléctrico (W, kWh, €) de la vivienda o circuitos, concienciando al usuario para ahorrar",
    incorrectas: [
      "Una tele que gasta mucho",
      "El contador de la compañía (que no se ve desde dentro)"
    ]
  },
  {
    enunciado: "¿Qué es el 'Stand-by killer' o desconexión de cargas fantasma?",
    correcta: "Regletas o enchufes inteligentes que cortan totalmente la alimentación de equipos (TV, PC) cuando detectan que están en modo espera (stand-by), eliminando el consumo residual",
    incorrectas: [
      "Un asesino fantasma",
      "Desenchufar todo a mano cada noche"
    ]
  },
  {
    enunciado: "¿Qué es la gestión tarifaria?",
    correcta: "Programar el encendido de electrodomésticos de gran consumo (lavadora, termo) en las horas valle (tarifa barata) automáticamente",
    incorrectas: [
      "Cobrar entrada en casa",
      "Gestionar taxis"
    ]
  },
  {
    enunciado: "¿Qué es el control de sombreamiento (persianas/toldos automáticos) en verano?",
    correcta: "Bajar automáticamente protecciones solares cuando incide el sol directo para evitar el calentamiento excesivo y reducir el uso del aire acondicionado",
    incorrectas: [
      "Poner gafas de sol a las ventanas",
      "Plantar árboles"
    ]
  },
  {
    enunciado: "¿Y en invierno?",
    correcta: "Subir persianas para aprovechar la ganancia solar térmica gratuita durante el día y bajarlas de noche para aislar del frío",
    incorrectas: [
      "Bajar persianas de día para que no entre frío",
      "No hacer nada"
    ]
  },
  {
    enunciado: "¿Qué es la etiqueta energética de un electrodoméstico?",
    correcta: "Un distintivo obligatorio (A a G) que informa sobre la eficiencia y consumo del aparato, ayudando a elegir los que menos gastan",
    incorrectas: [
      "El precio del aparato",
      "La marca del fabricante"
    ]
  },
  {
    enunciado: "¿Qué es la Inmótica?",
    correcta: "La automatización integral aplicada a edificios de uso terciario o industrial (oficinas, hoteles, hospitales) para gestión eficiente",
    incorrectas: [
      "Domótica para esquimales",
      "Inmobiliaria automática"
    ]
  },
  {
    enunciado: "¿Cómo contribuye la domótica al autoconsumo fotovoltaico?",
    correcta: "Gestionando el consumo (Smart Load) para hacerlo coincidir con los picos de producción solar, maximizando el aprovechamiento directo y minimizando vertido/compra",
    incorrectas: [
      "Limpiando los paneles solares sola",
      "Fabricando paneles"
    ]
  },
  {
    enunciado: "¿Qué es el 'Modo Eco' o 'Vacaciones' en domótica?",
    correcta: "Un escenario que pone la casa en estado de mínimo consumo (calefacción antihielo, luces apagadas, termo off) al salir por un periodo largo",
    incorrectas: [
      "Irse de vacaciones ecológicas",
      "Apagar el cuadro de luz completo"
    ]
  },
  {
    enunciado: "¿Qué es un enchufe inteligente (Smart Plug)?",
    correcta: "Un adaptador que permite encender/apagar remotamente el aparato conectado y medir su consumo desde el móvil",
    incorrectas: [
      "Un enchufe que estudia",
      "Un enchufe que da corriente gratis"
    ]
  },
  {
    enunciado: "¿Qué es la inercia térmica?",
    correcta: "La capacidad de los materiales del edificio para almacenar calor/frío; la domótica puede anticiparse (control predictivo) para aprovecharla y no sobrecalentar",
    incorrectas: [
      "La pereza para calentarse",
      "El aislamiento térmico puro"
    ]
  },
  {
    enunciado: "¿Qué es el Aerotermo?",
    correcta: "Un sistema eficiente de bomba de calor para agua caliente sanitaria (ACS), controlable domóticamente para calentar cuando la electricidad es barata",
    incorrectas: [
      "Un termo que vuela",
      "Calentar agua con aire comprimido"
    ]
  },
  {
    enunciado: "¿Qué es el control PID en termostatos modernos?",
    correcta: "Un algoritmo que ajusta la potencia de calefacción gradualmente para mantener la temperatura estable sin oscilaciones (todo/nada), ahorrando energía",
    incorrectas: [
      "Control por Pedir",
      "Control manual"
    ]
  },
  {
    enunciado: "¿Qué es un actuador de conmutación con medición de corriente?",
    correcta: "Un relé domótico que además de encender/apagar la carga, informa al sistema de cuánto consume o si la bombilla está fundida",
    incorrectas: [
      "Un interruptor normal",
      "Un medidor de agua"
    ]
  },
  {
    enunciado: "¿Qué es la telegestión de contadores (Smart Metering)?",
    correcta: "El sistema que permite a la compañía leer el consumo y cambiar tarifas remotamente, y al usuario consultar sus curvas de carga horarias",
    incorrectas: [
      "Controlar la TV a distancia",
      "Leer libros a distancia"
    ]
  },
  {
    enunciado: "¿Qué es el 'Peak Shaving' o recorte de picos?",
    correcta: "Estrategia para aplanar la curva de demanda reduciendo consumos puntuales elevados para no pagar penalizaciones por exceso de potencia",
    incorrectas: [
      "Afeitarse en horas punta",
      "Cortar el pico de la montaña"
    ]
  },
  {
    enunciado: "¿Qué protocolo es el más estándar en Europa para domótica cableada profesional?",
    correcta: "KNX (Konnex)",
    incorrectas: [
      "USB",
      "Bluetooth"
    ]
  },
  {
    enunciado: "¿Qué ventaja tienen las válvulas termostáticas electrónicas de radiador?",
    correcta: "Permiten programar temperatura y horario diferente para cada radiador, comunicándose con la centralita",
    incorrectas: [
      "Son más bonitas",
      "No necesitan pilas"
    ]
  },
  {
    enunciado: "¿Qué es el aislamiento térmico inteligente?",
    correcta: "No existe como material activo común, pero se refiere a usar persianas/cortinas domóticas para mejorar el aislamiento de las ventanas dinámicamente",
    incorrectas: [
      "Ladrillos inteligentes",
      "Pintura mágica"
    ]
  },
  {
    enunciado: "¿Qué es un sensor de ventana abierta?",
    correcta: "Un contacto magnético que avisa al sistema para apagar la climatización de esa habitación automáticamente si se abre la ventana, evitando despilfarro",
    incorrectas: [
      "Un sensor que abre la ventana solo",
      "Un sensor de rotura de cristal"
    ]
  },
  {
    enunciado: "¿Qué es la iluminación constante (Constant Light Control)?",
    correcta: "Mantener los luxes de la mesa de trabajo fijos, dimmeando la luz artificial a medida que cambia la natural",
    incorrectas: [
      "Luz que nunca se apaga",
      "Luz de emergencia"
    ]
  },
  {
    enunciado: "¿Qué puede hacer un gestor de energía con el vehículo eléctrico?",
    correcta: "Cargarlo solo cuando haya excedente solar o en tarifa supervalle, y modular la potencia de carga para no saltar el general de la casa",
    incorrectas: [
      "Conducir el coche solo",
      "Cargarlo con gasolina"
    ]
  },
  {
    enunciado: "¿Qué es el escenario 'Salir de Casa'?",
    correcta: "Un comando único (botón/voz) que apaga todas las luces, baja persianas, activa alarma y pone clima en modo eco al irse",
    incorrectas: [
      "Abrir la puerta",
      "Echarte de casa"
    ]
  },
  {
    enunciado: "¿Qué es el control predictivo meteorológico?",
    correcta: "El sistema consulta la previsión del tiempo en internet y ajusta la calefacción anticipadamente (ej. no calentar si va a salir sol fuerte)",
    incorrectas: [
      "Mirar por la ventana",
      "Adivinar el tiempo"
    ]
  },
  {
    enunciado: "¿Qué es Zigbee?",
    correcta: "Un protocolo inalámbrico de bajo consumo y red mallada muy usado en sensores y bombillas inteligentes (ej. Philips Hue) para domótica doméstica",
    incorrectas: [
      "Una abeja rápida",
      "Un tipo de Wi-Fi potente"
    ]
  },
  {
    enunciado: "¿Qué es la 'huella de carbono' de la vivienda?",
    correcta: "La cantidad de emisiones de CO2 asociadas al consumo energético; la domótica ayuda a reducirla optimizando la eficiencia",
    incorrectas: [
      "Manchar el suelo de carbón",
      "El tamaño de la casa"
    ]
  },
  {
    enunciado: "¿Qué es un actuador dimmer (regulador)?",
    correcta: "Dispositivo que regula la intensidad luminosa, permitiendo crear ambientes y ahorrar energía (reducir al 80% es casi imperceptible y ahorra)",
    incorrectas: [
      "Un interruptor doble",
      "Un timbre"
    ]
  },
  {
    enunciado: "¿Qué significa IoT (Internet of Things)?",
    correcta: "La interconexión digital de objetos cotidianos (bombillas, neveras, termostatos) con internet, permitiendo datos y control remoto",
    incorrectas: [
      "Idiotas o Tontos",
      "Internet interno"
    ]
  },
  {
    enunciado: "¿Qué es el 'Phantom Load'?",
    correcta: "Consumo fantasma: el consumo de los aparatos electrónicos enchufados pero apagados (standby, trasformadores), que puede ser el 10% de la factura",
    incorrectas: [
      "Carga de fantasmas",
      "Carga máxima"
    ]
  },
  {
    enunciado: "¿Qué es la recuperación de calor en ventilación controlada?",
    correcta: "Un sistema que renueva el aire interior cruzándolo con el aire viciado de salida en un intercambiador, recuperando hasta el 90% de energía térmica sin mezclar aires",
    incorrectas: [
      "Abrir las ventanas 5 minutos",
      "Calefacción eléctrica"
    ]
  },
  {
    enunciado: "¿Qué papel juega el 'Smart Speaker' (Alexa/Google) en eficiencia?",
    correcta: "Facilita el control por voz y rutinas, pero es un interfaz; la eficiencia real la hacen los actuadores y la lógica detrás",
    incorrectas: [
      "Hace de altavoz para música",
      "Consume mucha energía"
    ]
  },
  {
    enunciado: "¿Qué es un contacto libre de potencial?",
    correcta: "Un contacto de relé que no está conectado a ninguna tensión internamente (seco), permite controlar equipos de cualquier voltaje o señales lógicas",
    incorrectas: [
      "Un contacto gratis",
      "Un contacto con 230V"
    ]
  },
  {
    enunciado: "¿Qué es el 'Rele de prioridad'?",
    correcta: "Dispositivo electromecánico simple que desconecta un circuito no prioritario (ej. radiador) cuando detecta consumo en uno prioritario (ej. horno)",
    incorrectas: [
      "El relé más importante",
      "Un relé VIP"
    ]
  },
  {
    enunciado: "¿Qué es el mantenimiento predictivo en climatización?",
    correcta: "La domótica detecta anomalías (ej. filtro sucio por consumo ventilador) y avisa antes de que baje la eficiencia o rompa",
    incorrectas: [
      "Esperar a que se rompa",
      "Cambiar todo cada año"
    ]
  }
];
