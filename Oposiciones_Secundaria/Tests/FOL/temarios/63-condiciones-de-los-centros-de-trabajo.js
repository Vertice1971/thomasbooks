'use strict';
var PREGUNTAS = [
{
enunciado: "¿Cuál es la altura mínima obligatoria de los techos en locales destinados a oficinas y despachos según el RD 486/1997?",
correcta: "2,5 metros.",
incorrectas: [
"3 metros.",
"2,2 metros."
]
},
{
enunciado: "En los lugares de trabajo, el espacio libre por cada trabajador debe ser como mínimo de:",
correcta: "2 metros cuadrados de superficie libre y 10 metros cúbicos de volumen.",
incorrectas: [
"5 metros cuadrados de superficie libre y 15 metros cúbicos de volumen.",
"1,5 metros cuadrados de superficie libre y 8 metros cúbicos de volumen."
]
},
{
enunciado: "Según la normativa de señalización, ¿qué indica una señal de forma circular con pictograma negro sobre fondo blanco y borde rojo?",
correcta: "Prohibición.",
incorrectas: [
"Obligación.",
"Advertencia de peligro."
]
},
{
enunciado: "¿Qué color de seguridad debe utilizarse para las señales que indican el emplazamiento de equipos de lucha contra incendios?",
correcta: "Rojo.",
incorrectas: [
"Amarillo.",
"Verde."
]
},
{
enunciado: "¿Qué objetivo principal persigue un Plan de Emergencia?",
correcta: "Organizar los recursos humanos y materiales para optimizar la respuesta ante un siniestro.",
incorrectas: [
"Evitar que se produzca cualquier tipo de incendio o inundación en el centro.",
"Cumplir con los requisitos para la obtención del seguro de responsabilidad civil."
]
},
{
enunciado: "En el Plan de Autoprotección, el equipo de personas encargadas de intervenir en una emergencia en su fase inicial se denomina:",
correcta: "Equipo de Primera Intervención (EPI).",
incorrectas: [
"Equipo de Alarma y Evacuación (EAE).",
"Comité de Seguridad y Salud (CSS)."
]
},
{
enunciado: "¿Cuál es la temperatura recomendada para trabajos sedentarios en ambientes cerrados como oficinas?",
correcta: "Entre 17 °C y 27 °C.",
incorrectas: [
"Entre 14 °C y 25 °C.",
"Entre 20 °C y 30 °C."
]
},
{
enunciado: "Las señales de salvamento o socorro tienen forma:",
correcta: "Rectangular o cuadrada, con pictograma blanco sobre fondo verde.",
incorrectas: [
"Triangular, con borde negro y fondo amarillo.",
"Circular, con pictograma blanco sobre fondo azul."
]
},
{
enunciado: "¿Cuál es la anchura mínima de las puertas exteriores en los lugares de trabajo?",
correcta: "80 centímetros.",
incorrectas: [
"100 centímetros.",
"60 centímetros."
]
},
{
enunciado: "En un Plan de Emergencia, ¿quién es la máxima autoridad en el centro de trabajo durante la emergencia?",
correcta: "El Jefe de Emergencia (JE).",
incorrectas: [
"El Director de Recursos Humanos.",
"El Técnico de Prevención de Riesgos Laborales."
]
},
{
enunciado: "¿Qué tipo de señalización se utiliza para advertir de un peligro de forma temporal mediante luces o sonidos?",
correcta: "Señal luminosa o acústica.",
incorrectas: [
"Señal gestual de advertencia.",
"Señal de panel reflectante."
]
},
{
enunciado: "¿Cuál es la función del Equipo de Alarma y Evacuación (EAE)?",
correcta: "Asegurar que se da la alarma y dirigir el flujo de personas hacia las salidas.",
incorrectas: [
"Extinguir incendios mediante el uso de mangueras de alta presión.",
"Prestar los primeros auxilios a los heridos en el punto de reunión."
]
},
{
enunciado: "Los pasillos principales en centros de trabajo deben tener una anchura mínima de:",
correcta: "1 metro.",
incorrectas: [
"1,20 metros.",
"0,80 metros."
]
},
{
enunciado: "Una señal triangular con fondo amarillo y bordes negros indica:",
correcta: "Advertencia.",
incorrectas: [
"Información de socorro.",
"Obligación de uso."
]
},
{
enunciado: "¿Qué se entiende por 'confinamiento' en un plan de emergencia?",
correcta: "Refugio de las personas en un lugar seguro dentro del propio edificio.",
incorrectas: [
"Salida ordenada de todos los ocupantes hacia el punto de reunión exterior.",
"Cierre de las válvulas de suministro de gas y electricidad únicamente."
]
},
{
enunciado: "¿Con qué frecuencia mínima deben realizarse simulacros de emergencia y evacuación?",
correcta: "Al menos una vez al año.",
incorrectas: [
"Cada dos años.",
"Cada seis meses."
]
},
{
enunciado: "La iluminación mínima en zonas donde existan riesgos altos de accidente debe ser de:",
correcta: "50 lux.",
incorrectas: [
"20 lux.",
"100 lux."
]
},
{
enunciado: "Las señales de obligación tienen forma circular y presentan:",
correcta: "Pictograma blanco sobre fondo azul.",
incorrectas: [
"Pictograma negro sobre fondo amarillo.",
"Pictograma blanco sobre fondo rojo."
]
},
{
enunciado: "En escaleras fijas, la anchura mínima debe ser de:",
correcta: "1 metro, salvo excepciones para escaleras de servicio.",
incorrectas: [
"1,20 metros invariablemente.",
"0,70 metros para permitir el paso de una persona."
]
},
{
enunciado: "El 'Punto de Reunión' es el lugar donde:",
correcta: "Se concentra el personal evacuado para realizar el recuento.",
incorrectas: [
"Se guardan los equipos de protección individual contra incendios.",
"Se reúne el comité de seguridad para decidir la sanción del siniestro."
]
},
{
enunciado: "¿Cuál es el nivel de ruido diario equivalente que no debe sobrepasarse sin medidas preventivas según el RD 286/2006?",
correcta: "80 dB(A).",
incorrectas: [
"90 dB(A).",
"70 dB(A)."
]
},
{
enunciado: "Las rampas destinadas a peatones no deben tener una pendiente superior al:",
correcta: "12% si la longitud es menor de 3 metros.",
incorrectas: [
"15% en todos los casos.",
"8% independientemente de la longitud."
]
},
{
enunciado: "¿Qué indica una señal de panel de color azul?",
correcta: "Obligación de un comportamiento o uso de un equipo específico.",
incorrectas: [
"Situación de seguridad o salida de emergencia.",
"Prohibición de acceso a personal no autorizado."
]
},
{
enunciado: "¿Quién debe realizar la comunicación a los servicios públicos de extinción y salvamento?",
correcta: "El Centro de Control o el Jefe de Emergencia.",
incorrectas: [
"El primer trabajador que detecte el humo.",
"El delegado de prevención del centro."
]
},
{
enunciado: "La humedad relativa en locales con riesgos por electricidad estática debe ser superior al:",
correcta: "50%.",
incorrectas: [
"30%.",
"70%."
]
},
{
enunciado: "¿Qué pictograma se asocia habitualmente a una señal de advertencia de riesgo biológico?",
correcta: "Tres semicírculos sobre un círculo.",
incorrectas: [
"Una calavera sobre dos tibias cruzadas.",
"Una llama sobre una línea horizontal."
]
},
{
enunciado: "¿Qué es la 'distancia de recorrido de evacuación'?",
correcta: "La longitud real del camino desde un punto hasta una salida segura.",
incorrectas: [
"La distancia entre el centro de trabajo y el hospital más cercano.",
"La longitud total de todas las escaleras del edificio sumadas."
]
},
{
enunciado: "Las dimensiones de las señales deben garantizar su visibilidad; para una señal de prohibición, el color rojo debe cubrir al menos el:",
correcta: "35% de la superficie.",
incorrectas: [
"50% de la superficie.",
"20% de la superficie."
]
},
{
enunciado: "En el Plan de Emergencia, el 'Equipo de Segundos Auxilios' (en algunos esquemas):",
correcta: "Es un término no estándar; lo correcto es Equipo de Primeros Auxilios (EPA).",
incorrectas: [
"Se encarga de la limpieza de escombros tras el incendio.",
"Es el equipo que sustituye al Jefe de Emergencia si este se ausenta."
]
},
{
enunciado: "¿Cuál es la iluminación mínima requerida en áreas de uso general en centros sanitarios (pasillos)?",
correcta: "100 lux.",
incorrectas: [
"200 lux.",
"50 lux."
]
},
{
enunciado: "¿Qué tipo de señal es una bandera roja en una zona de obras?",
correcta: "Señalización adicional de advertencia o peligro.",
incorrectas: [
"Señal de obligación de parada inmediata.",
"Señal de información técnica sobre el terreno."
]
},
{
enunciado: "¿Qué debe hacerse inmediatamente después de detectar un fuego y dar la alarma?",
correcta: "Intentar la extinción con los medios disponibles si es seguro hacerlo.",
incorrectas: [
"Esperar en el puesto de trabajo a recibir instrucciones por megafonía.",
"Recoger todos los objetos personales antes de abandonar el edificio."
]
},
{
enunciado: "Los suelos de los locales de trabajo deben ser:",
correcta: "Fijos, estables, no resbaladizos y sin irregularidades peligrosas.",
incorrectas: [
"De material cerámico exclusivamente para facilitar la limpieza.",
"Recubiertos de moqueta para evitar el ruido de impacto."
]
},
{
enunciado: "La señalización de recipientes y tuberías de sustancias peligrosas debe ser:",
correcta: "Obligatoria, mediante etiquetas o códigos de colores según la norma.",
incorrectas: [
"Opcional si los trabajadores tienen experiencia en el sector.",
"Solo obligatoria para tuberías de gases inflamables."
]
},
{
enunciado: "¿Qué documento integra el Plan de Emergencia en empresas de gran tamaño?",
correcta: "El Plan de Autoprotección.",
incorrectas: [
"El Manual de Calidad ISO 9001.",
"El Acta de Constitución del Comité de Seguridad."
]
},
{
enunciado: "Las ventanas y dispositivos de ventilación deben:",
correcta: "Poder abrirse, cerrarse y ajustarse de manera segura por los trabajadores.",
incorrectas: [
"Ser siempre de apertura automática mediante sensores de CO2.",
"Estar situadas a una altura mínima de 2 metros sobre el suelo."
]
},
{
enunciado: "¿Qué indica el color verde en una señalización de seguridad?",
correcta: "Vuelta a la normalidad o condiciones de seguridad (salidas, primeros auxilios).",
incorrectas: [
"Atención, riesgo de caída o presencia de obstáculos.",
"Obligación de transitar por esa zona específica."
]
},
{
enunciado: "¿Cuál es el objetivo de las luces de emergencia?",
correcta: "Permitir la evacuación segura y la identificación de equipos de extinción ante un fallo eléctrico.",
incorrectas: [
"Reducir el consumo eléctrico durante las horas nocturnas.",
"Iluminar las zonas de descanso para evitar la fatiga visual."
]
},
{
enunciado: "En un Plan de Emergencia, el aviso de 'evacuación total' lo decide:",
correcta: "El Jefe de Emergencia.",
incorrectas: [
"Cualquier trabajador que vea llamas.",
"El responsable de mantenimiento del edificio."
]
},
{
enunciado: "¿Qué normativa regula las disposiciones mínimas de seguridad y salud en los lugares de trabajo?",
correcta: "Real Decreto 486/1997.",
incorrectas: [
"Real Decreto 664/1997.",
"Ley 14/1986."
]
}
];
