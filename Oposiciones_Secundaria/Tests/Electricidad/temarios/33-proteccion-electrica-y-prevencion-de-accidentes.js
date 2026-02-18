// 33-proteccion-electrica-y-prevencion-de-accidentes.js
var PREGUNTAS = [
  {
    enunciado: "¿Cuáles son las '5 Reglas de Oro' para trabajar sin tensión (en orden)?",
    correcta: "1. Desconectar, 2. Prevenir reconexión, 3. Verificar ausencia de tensión, 4. Poner a tierra y en cortocircuito, 5. Señalizar zona",
    incorrectas: [
      "1. Apagar, 2. Tocar cables, 3. Poner cinta aislante, 4. Avisar al jefe, 5. Rezar",
      "1. Verificar tensión, 2. Desconectar, 3. Señalizar, 4. Poner a tierra, 5. Rezar"
    ]
  },
  {
    enunciado: "¿Qué es un contacto directo?",
    correcta: "El contacto de personas o animales con partes activas de la instalación (cables con tensión, bornas) que habitualmente están bajo tensión",
    incorrectas: [
      "El contacto con una carcasa metálica que se ha puesto a tierra",
      "El contacto visual con la electricidad"
    ]
  },
  {
    enunciado: "¿Qué es un contacto indirecto?",
    correcta: "El contacto con masas (partes metálicas accesibles) que se han puesto accidentalmente bajo tensión por un fallo de aislamiento",
    incorrectas: [
      "Tocar un cable pelado directamente",
      "Llamar por teléfono a la compañía eléctrica"
    ]
  },
  {
    enunciado: "¿Cuál es la medida de protección principal contra contactos directos?",
    correcta: "El aislamiento de las partes activas, barreras o envolventes (IPXXB) y el alejamiento",
    incorrectas: [
      "La puesta a tierra de las masas",
      "El uso de guantes de lana"
    ]
  },
  {
    enunciado: "¿Cuál es la medida de protección más habitual contra contactos indirectos en BT?",
    correcta: "El corte automático de la alimentación (Diferencial + Puesta a tierra) en esquemas TT",
    incorrectas: [
      "Poner carteles de peligro",
      "Usar calzado deportivo"
    ]
  },
  {
    enunciado: "¿Qué intensidad se considera el umbral de fibrilación ventricular en humanos (aprox. para 1s)?",
    correcta: "Entre 30 mA y 50 mA (corriente alterna 50Hz) atravesando el cuerpo",
    incorrectas: [
      "1 Amperio",
      "0.1 miliamperios"
    ]
  },
  {
    enunciado: "¿Qué significa el grado de protección IP2X?",
    correcta: "Protegido contra el acceso a partes peligrosas con el dedo (diámetro > 12.5 mm)",
    incorrectas: [
      "Protegido contra el agua",
      "Totalmente estanco al polvo"
    ]
  },
  {
    enunciado: "¿Qué significa el grado de protección IP4X?",
    correcta: "Protegido contra acceso con un alambre (> 1 mm)",
    incorrectas: [
      "Protegido contra salpicaduras",
      "Protegido contra martillazos"
    ]
  },
  {
    enunciado: "¿Qué EPI es fundamental para verificar la ausencia de tensión?",
    correcta: "Guantes aislantes (dieléctricos) de la clase adecuada y pantalla facial (contra arco eléctrico), usando un verificador comprobado",
    incorrectas: [
      "Guantes de cuero de soldar",
      "Gafas de sol"
    ]
  },
  {
    enunciado: "¿Qué es el riesgo de arco eléctrico (Arc Flash)?",
    correcta: "La liberación violenta de energía (calor, luz, presión) por un cortocircuito a través del aire, capaz de causar quemaduras graves a distancia",
    incorrectas: [
      "Un arco iris eléctrico",
      "El chispazo del mechero"
    ]
  },
  {
    enunciado: "¿Qué es la tensión de seguridad en locales secos?",
    correcta: "50 V (corriente alterna)",
    incorrectas: [
      "230 V",
      "12 V"
    ]
  },
  {
    enunciado: "¿Y en locales húmedos o mojados?",
    correcta: "24 V (corriente alterna)",
    incorrectas: [
      "50 V",
      "100 V"
    ]
  },
  {
    enunciado: "¿Qué es el bloqueo LOTO (Lock Out, Tag Out)?",
    correcta: "Procedimiento de seguridad que consiste en bloquear físicamente con candado el dispositivo de corte y etiquetarlo para impedir su reconexión accidental",
    incorrectas: [
      "Jugar a la lotería en el trabajo",
      "Bloquear la puerta de salida"
    ]
  },
  {
    enunciado: "¿Qué clase de fuego es el fuego eléctrico?",
    correcta: "Antiguamente Clase E (no existe en norma EN 2 actual), se considera fuego de Clase A o B con presencia de tensión eléctrica",
    incorrectas: [
      "Clase A puro",
      "Clase K"
    ]
  },
  {
    enunciado: "¿Qué extintor es el más adecuado para fuegos eléctricos (hasta cierta tensión)?",
    correcta: "CO2 (Dióxido de carbono) porque no es conductor y no deja residuos, o Polvo ABC (polivalente) aunque es sucio",
    incorrectas: [
      "Agua a chorro",
      "Espuma física conductora"
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre aislamiento funcional y refuerzo?",
    correcta: "Funcional es el mínimo para que funcione; Reforzado/Doble aislamiento proporciona protección equivalente a la Clase II contra choques",
    incorrectas: [
      "No hay diferencia, son sinónimos",
      "El reforzado es de metal"
    ]
  },
  {
    enunciado: "¿Qué hacer ante un accidentado electrocutado que sigue 'pegado' al cable?",
    correcta: "Cortar la corriente inmediatamente. Si no es posible, separarlo usando un objeto aislante (palo madera seco, silla plástico), nunca tocarlo directamente",
    incorrectas: [
      "Agarrarlo fuerte para estirar",
      "Echarle agua para enfriarlo"
    ]
  },
  {
    enunciado: "¿Qué es la 'tetanización' muscular?",
    correcta: "La contracción incontrolada de los músculos por el paso de corriente, impidiendo soltar el objeto conductor ('quedarse pegado')",
    incorrectas: [
      "Infección por tétanos",
      "Relajación total de músculos"
    ]
  },
  {
    enunciado: "¿Qué es la protección diferencial de 30 mA?",
    correcta: "Protección de alta sensibilidad complementaria contra contactos directos (si falla el aislamiento principal) y obligatoria en tomas de uso general",
    incorrectas: [
      "Protección contra rayos",
      "Protección solo para máquinas"
    ]
  },
  {
    enunciado: "¿Qué clase de guantes dieléctricos (Clase 00) se usa para BT hasta 500V?",
    correcta: "Clase 00 (Beige), soporta hasta 500V AC (uso) / 2500V (prueba)",
    incorrectas: [
      "Clase 4 (40.000V)",
      "Guantes de látex de hospital"
    ]
  },
  {
    enunciado: "¿Qué mantenimiento requieren los guantes dieléctricos?",
    correcta: "Comprobación de fugas de aire (inflado) antes de cada uso y revisión periódica de caducidad/ensayo eléctrico cada 6-12 meses",
    incorrectas: [
      "Lavarlos en lavadora a 90ºC",
      "Echarles talco y guardarlos al sol"
    ]
  },
  {
    enunciado: "¿Qué es un equipo de Doble Aislamiento (Clase II)?",
    correcta: "Equipo que tiene aislamiento reforzado en todas sus partes y no requiere toma de tierra (símbolo de dos cuadrados concéntricos)",
    incorrectas: [
      "Equipo con dos capas de pintura",
      "Equipo con dos enchufes"
    ]
  },
  {
    enunciado: "¿Qué es la 'tensión de paso'?",
    correcta: "La diferencia de potencial que aparece entre los pies de una persona separados un metro en el suelo cerca de una puesta a tierra con defecto",
    incorrectas: [
      "La tensión para dar un paso de baile",
      "La tensión de la batería del marcapasos"
    ]
  },
  {
    enunciado: "¿Qué es la conexión equipotencial?",
    correcta: "Unir eléctricamente todas las masas y elementos conductores accesibles (tuberías, estructura) para que estén al mismo potencial y evitar descargas",
    incorrectas: [
      "Conectar todos los equipos a la misma fase",
      "Poner vallas alrededor"
    ]
  },
  {
    enunciado: "¿Qué riesgo tiene trabajar con escaleras de aluminio en electricidad?",
    correcta: "Riesgo alto de contacto directo y cortocircuito al ser conductoras; se deben usar escaleras de fibra de vidrio o madera (aislantes)",
    incorrectas: [
      "Ninguno, son ligeras",
      "Se oxidan rápido"
    ]
  },
  {
    enunciado: "¿Qué es el código IK?",
    correcta: "Grado de protección contra impactos mecánicos externos (ej. IK10 = 20 Julios)",
    incorrectas: [
      "Índice de Kilos que aguanta",
      "Inmunidad a la Kryptonita"
    ]
  },
  {
    enunciado: "¿Qué hacer en caso de incendio en un cuadro eléctrico?",
    correcta: "Cortar la alimentación general si es posible y seguro, y usar extintor adecuado (CO2). Evacuar si hay humo tóxico",
    incorrectas: [
      "Soplar para apagarlo",
      "Echar un cubo de agua"
    ]
  },
  {
    enunciado: "¿Qué es un banqueta aislante?",
    correcta: "Una tarima con patas aislantes usada para aislar al trabajador del suelo al maniobrar en cuadros (aumenta resistencia de contacto)",
    incorrectas: [
      "Un taburete para descansar",
      "Una mesa de trabajo"
    ]
  },
  {
    enunciado: "¿Por qué es peligroso llevar anillos, relojes o cadenas metálicas al trabajar en tensión?",
    correcta: "Porque pueden provocar cortocircuitos graves al tocar dos fases o fase-tierra, y causar quemaduras profundas por el metal caliente",
    incorrectas: [
      "Porque se pueden perder",
      "Porque interfieren con el Wi-Fi"
    ]
  },
  {
    enunciado: "¿Qué es la 'zona de peligro' o trabajos en tensión?",
    correcta: "El espacio alrededor de los elementos en tensión donde el riesgo de descarga es alto; solo puede entrar personal cualificado con EPIs y procedimientos",
    incorrectas: [
      "Todo el edificio",
      "La zona de fumadores"
    ]
  },
  {
    enunciado: "¿Qué es la puesta a tierra temporal y en cortocircuito (4ª regla de oro)?",
    correcta: "Unir los conductores activos entre sí y a tierra en la zona de trabajo para que, si alguien reconecta accidentalmente, salten las protecciones inmediatamente sin dañar al trabajador",
    incorrectas: [
      "Poner macetas de tierra encima de los cables",
      "Cortar los cables con tijeras"
    ]
  },
  {
    enunciado: "¿Quién es un 'Trabajador Cualificado' en electricidad?",
    correcta: "Persona con conocimientos y experiencia suficientes para evitar los peligros eléctricos (formación específica)",
    incorrectas: [
      "Cualquiera que tenga un destornillador",
      "El que cobre más"
    ]
  },
  {
    enunciado: "¿Qué es la señalización de seguridad?",
    correcta: "El uso de señales (triangulares riesgo, redondas prohibición, azules obligación) para advertir de peligros residuales (ej. Riesgo Eléctrico)",
    incorrectas: [
      "Pintar graffitis",
      "Señales de tráfico en la carretera"
    ]
  },
  {
    enunciado: "¿Qué riesgo presenta una batería de condensadores cargada desconectada?",
    correcta: "Mantiene la carga (tensión letal) mucho tiempo tras el corte; hay que esperar a que se descargue (resistencias descarga) y comprobar antes de tocar",
    incorrectas: [
      "Ninguno, si se desconecta se apaga",
      "Riesgo de inundación"
    ]
  },
  {
    enunciado: "¿Qué es la alfombrilla aislante?",
    correcta: "Alfombra de goma dieléctrica para poner en el suelo delante de cuadros, aislando al operario de tierra",
    incorrectas: [
      "Alfombra decorativa de bienvenida",
      "Alfombra voladora"
    ]
  },
  {
    enunciado: "¿Qué es el disyuntor motorizado a distancia?",
    correcta: "Un interruptor que puede abrirse/cerrarse remotamente; peligroso si se reconecta mientras alguien trabaja (requiere bloqueo local)",
    incorrectas: [
      "Un robot disyuntor",
      "Un juguete"
    ]
  },
  {
    enunciado: "¿La ropa de trabajo debe ser de algodón o sintética?",
    correcta: "Preferiblemente algodón (o ignífuga técnica) porque las sintéticas (nylon/poliéster) se derriten y pegan a la piel con el arco eléctrico",
    incorrectas: [
      "Sintética porque seca rápido",
      "Da igual"
    ]
  },
  {
    enunciado: "¿Qué es la Distancia de Seguridad (D.S.)?",
    correcta: "Distancia mínima a mantener respecto a partes en tensión no protegidas para evitar descargas disruptivas por aire",
    incorrectas: [
      "Distancia social covid",
      "Un metro siempre"
    ]
  },
  {
    enunciado: "¿Qué significa el marcado CE en un equipo?",
    correcta: "Que el fabricante declara que cumple con la legislación europea de seguridad aplicable (Conformidad Europea)",
    incorrectas: [
      "China Export",
      "Calidad Excelente"
    ]
  },
  {
    enunciado: "¿Qué es un transformador de separación de circuitos?",
    correcta: "Medida de protección donde el secundario está aislado de tierra, evitando corrientes de contacto indirecto en un solo punto",
    incorrectas: [
      "Un transformador desmontado",
      "Un transformador roto"
    ]
  }
];
