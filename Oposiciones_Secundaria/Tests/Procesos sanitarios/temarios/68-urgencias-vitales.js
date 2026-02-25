'use strict';

var PREGUNTAS = [
{
enunciado: "En el algoritmo de Soporte Vital Básico (SVB), tras comprobar que la víctima no responde y no respira con normalidad, la acción inmediata debe ser:",
correcta: "Solicitar ayuda al sistema de emergencias (112) y conseguir un DESA si está disponible",
incorrectas: [
"Realizar 5 insuflaciones de rescate antes de iniciar las compresiones",
"Colocar a la víctima en posición lateral de seguridad para evitar la aspiración"
]
},
{
enunciado: "La profundidad recomendada de las compresiones torácicas en un adulto durante la RCP según las guías del ERC es de:",
correcta: "Al menos 5 cm pero no más de 6 cm",
incorrectas: [
"Entre 2 y 4 cm para evitar fracturas costales",
"Exactamente un tercio del diámetro anteroposterior del tórax"
]
},
{
enunciado: "¿Cuál es la frecuencia de compresión torácica recomendada para una RCP de alta calidad en adultos?",
correcta: "Entre 100 y 120 compresiones por minuto",
incorrectas: [
"60 compresiones por minuto para permitir el llenado diastólico",
"Al menos 140 compresiones por minuto en casos de etiología cardíaca"
]
},
{
enunciado: "En un atragantamiento por cuerpo extraño, si la víctima presenta una tos efectiva, la actuación correcta es:",
correcta: "Animar a la víctima a seguir tosiendo y vigilar su estado",
incorrectas: [
"Iniciar inmediatamente 5 golpes interescapulares",
"Realizar la maniobra de Heimlich de forma preventiva"
]
},
{
enunciado: "La maniobra de Heimlich en una víctima adulta consciente con obstrucción completa de la vía aérea consiste en:",
correcta: "Compresiones abdominales rápidas hacia arriba y hacia adentro, entre el ombligo y el apéndice xifoides",
incorrectas: [
"Presiones rítmicas sobre el esternón con la víctima en decúbito supino",
"Golpes secos en la región lumbar con la víctima inclinada hacia adelante"
]
},
{
enunciado: "Si una víctima de atragantamiento queda inconsciente, la prioridad absoluta de actuación es:",
correcta: "Iniciar la RCP comenzando por las 30 compresiones torácicas",
incorrectas: [
"Intentar la extracción manual del objeto mediante la maniobra del gancho a ciegas",
"Continuar con las compresiones abdominales en el suelo"
]
},
{
enunciado: "Ante una hemorragia externa que no cede con presión directa en una extremidad, el uso del torniquete debe ser:",
correcta: "Aplicado de 5 a 7 cm por encima de la herida, evitando las articulaciones, y anotando la hora",
incorrectas: [
"Aflojado cada 10 minutos para permitir la reperfusión del miembro",
"Utilizado únicamente si la sangre es de origen venoso y de color oscuro"
]
},
{
enunciado: "El choque (shock) hipovolémico se caracteriza fisiopatológicamente por:",
correcta: "Una disminución crítica de la perfusión tisular debido a la pérdida de volumen intravascular",
incorrectas: [
"Un aumento del gasto cardíaco compensatorio que eleva la tensión arterial sistólica",
"Una vasodilatación generalizada mediada por el sistema parasimpático"
]
},
{
enunciado: "La posición de Trendelenburg (piernas elevadas) está indicada en primeros auxilios para:",
correcta: "Favorecer el retorno venoso en casos de lipotimia o shock hipovolémico sin trauma craneal",
incorrectas: [
"Víctimas con sospecha de insuficiencia cardíaca izquierda o edema de pulmón",
"Pacientes con traumatismo abdominal abierto y evisceración"
]
},
{
enunciado: "¿Cuál es el manejo inicial correcto de una quemadura térmica de segundo grado?",
correcta: "Refrescar con agua corriente templada o fría durante al menos 20 minutos",
incorrectas: [
"Aplicar pomadas con corticoides y romper las flictenas inmediatamente",
"Enfriar con hielo directamente sobre la lesión para detener la progresión térmica"
]
},
{
enunciado: "En un paciente con traumatismo craneoencefálico, la aparición de 'ojos de mapache' y salida de líquido claro por la nariz (rinorrea) sugiere:",
correcta: "Fractura de la base del cráneo",
incorrectas: [
"Hemorragia interna por rotura de bazo",
"Shock anafiláctico inminente"
]
},
{
enunciado: "Ante una crisis convulsiva tónico-clónica, la actuación prioritaria es:",
correcta: "Retirar objetos peligrosos cercanos, proteger la cabeza y no introducir nada en la boca",
incorrectas: [
"Sujetar con fuerza las extremidades para evitar las sacudidas",
"Colocar un objeto rígido entre los dientes para evitar la mordedura de lengua"
]
},
{
enunciado: "La cadena de supervivencia en la parada cardíaca extrahospitalaria incluye como primer eslabón:",
correcta: "Reconocimiento precoz y petición de ayuda",
incorrectas: [
"Desfibrilación rápida con un DEA",
"Soporte Vital Avanzado precoz"
]
},
{
enunciado: "Al utilizar un Desfibrilador Externo Semiautomático (DESA), es fundamental:",
correcta: "Asegurarse de que nadie toque a la víctima mientras el aparato analiza el ritmo o descarga",
incorrectas: [
"Suspender las compresiones durante los dos minutos que tarda en cargarse",
"Colocar ambos parches sobre el lado izquierdo del pecho del paciente"
]
},
{
enunciado: "La evaluación secundaria de una víctima de urgencia vital tiene como objetivo:",
correcta: "Identificar otras lesiones o problemas médicos una vez estabilizadas las funciones vitales",
incorrectas: [
"Decidir si se debe llamar o no a los servicios de emergencia",
"Sustituir la necesidad de RCP si la víctima recupera el pulso"
]
},
{
enunciado: "En caso de una herida penetrante con un objeto clavado, la actuación correcta es:",
correcta: "No retirar el objeto, estabilizarlo y controlar la hemorragia periférica",
incorrectas: [
"Extraer el objeto rápidamente para permitir el cierre de la herida",
"Limpiar el objeto con antiséptico antes de proceder a la extracción"
]
},
{
enunciado: "Un signo clínico precoz de shock neurogénico es:",
correcta: "Hipotensión con bradicardia relativa por pérdida del tono simpático",
incorrectas: [
"Taquicardia extrema y piel sudorosa",
"Hipertensión arterial progresiva y midriasis"
]
},
{
enunciado: "Ante una sospecha de lesión medular, el movimiento de la víctima debe ser:",
correcta: "Evitado, salvo riesgo inminente, manteniendo siempre la alineación del eje cabeza-cuello-tronco",
incorrectas: [
"Realizado mediante la maniobra de Rautek para mayor rapidez",
"En posición lateral de seguridad para garantizar la vía aérea"
]
},
{
enunciado: "La técnica de apertura de la vía aérea en una víctima inconsciente sin sospecha de trauma es:",
correcta: "Maniobra frente-mentón",
incorrectas: [
"Tracción mandibular pura",
"Hiperextensión cervical extrema"
]
},
{
enunciado: "El síncope se diferencia de la lipotimia en que:",
correcta: "En el síncope la pérdida de conciencia es completa y brusca",
incorrectas: [
"En la lipotimia siempre hay parada cardirrespiratoria",
"El síncope no conlleva riesgo de caída al suelo"
]
},
{
enunciado: "La actuación correcta ante una evisceración abdominal consiste en:",
correcta: "Cubrir las vísceras con apósitos estériles humedecidos con suero fisiológico, sin reintroducirlas",
incorrectas: [
"Reintroducir las vísceras rápidamente para evitar la contaminación",
"Lavar las vísceras con antisépticos yodados antes de cubrirlas"
]
},
{
enunciado: "En la RCP pediátrica realizada por un solo reanimador lego, la secuencia recomendada es:",
correcta: "Iniciar con 5 ventilaciones de rescate y seguir con 30:2",
incorrectas: [
"Exactamente igual que en el adulto, comenzando siempre por compresiones",
"15 compresiones y 2 ventilaciones desde el primer momento"
]
},
{
enunciado: "Se considera que una ventilación de rescate es efectiva si:",
correcta: "Se observa que el pecho de la víctima se eleva como en una respiración normal",
incorrectas: [
"Se introduce la máxima capacidad pulmonar del reanimador",
"La cara del paciente adquiere un tono rosado inmediato"
]
},
{
enunciado: "El 'golpe precordial' es una técnica que:",
correcta: "No se recomienda en el soporte vital básico extrahospitalario",
incorrectas: [
"Sustituye al uso del DESA si este no funciona",
"Es la primera elección ante una asistolia confirmada"
]
},
{
enunciado: "La hipotermia accidental grave se define por una temperatura corporal central inferior a:",
correcta: "28 - 30 ºC",
incorrectas: [
"35 ºC",
"32 ºC"
]
},
{
enunciado: "Ante una intoxicación por inhalación de monóxido de carbono, la primera medida es:",
correcta: "Retirar a la víctima del ambiente contaminado y asegurar su oxigenación",
incorrectas: [
"Provocar el vómito para eliminar el gas residual",
"Administrar carbón activado por vía oral"
]
},
{
enunciado: "La regla de los 9 de Wallace se utiliza en urgencias para:",
correcta: "Calcular la extensión de la superficie corporal quemada",
incorrectas: [
"Valorar el nivel de conciencia según la respuesta motora",
"Establecer la prioridad de triaje en catástrofes"
]
},
{
enunciado: "Un neumotórax a tensión se reconoce clínicamente por:",
correcta: "Dificultad respiratoria extrema, desviación traqueal e ingurgitación yugular",
incorrectas: [
"Hipotensión arterial con bradicardia y piel caliente",
"Dolor abdominal irradiado a la espalda y hematemesis"
]
},
{
enunciado: "La principal complicación inmediata de un traumatismo torácico abierto (herida soplante) es:",
correcta: "La entrada de aire en el espacio pleural que colapsa el pulmón",
incorrectas: [
"La infección bacteriana de la pleura (empiema)",
"La rotura del esófago por presión negativa"
]
},
{
enunciado: "En una emergencia con múltiples víctimas, el sistema de triaje START clasifica con color rojo a:",
correcta: "Víctimas con prioridad inmediata (problemas en respiración, circulación o nivel de conciencia)",
incorrectas: [
"Víctimas fallecidas o con lesiones incompatibles con la vida",
"Víctimas que pueden deambular por sí mismas"
]
},
{
enunciado: "La anafilaxia es una urgencia vital que requiere como tratamiento de elección:",
correcta: "Adrenalina intramuscular",
incorrectas: [
"Corticoides por vía oral únicamente",
"Antihistamínicos tópicos en la zona de la picadura"
]
},
{
enunciado: "El signo de la 'mano en el cuello' es el signo universal de:",
correcta: "Obstrucción de la vía aérea por cuerpo extraño",
incorrectas: [
"Infarto agudo de miocardio",
"Accidente cerebrovascular"
]
},
{
enunciado: "Durante la RCP, el tiempo máximo dedicado a comprobar si hay respiración normal no debe exceder de:",
correcta: "10 segundos",
incorrectas: [
"30 segundos",
"1 minuto"
]
},
{
enunciado: "La maniobra de tracción mandibular para abrir la vía aérea se reserva para:",
correcta: "Víctimas con sospecha de lesión de la columna cervical",
incorrectas: [
"Lactantes menores de un año",
"Víctimas con obstrucción por cuerpo extraño sólido"
]
},
{
enunciado: "Un paciente con dolor torácico opresivo, irradiado a brazo izquierdo y mandíbula, debe ser colocado en:",
correcta: "Posición semisentada para facilitar la mecánica respiratoria",
incorrectas: [
"Decúbito supino estricto con las piernas elevadas",
"Posición lateral de seguridad inmediatamente"
]
},
{
enunciado: "El objetivo de la desfibrilación eléctrica es:",
correcta: "Despolarizar el miocardio para permitir que el marcapasos natural retome un ritmo eficaz",
incorrectas: [
"Reiniciar el corazón en caso de una asistolia prolongada",
"Aumentar la fuerza de contracción del ventrículo izquierdo"
]
},
{
enunciado: "Ante un traumatismo ocular con objeto enclavado, se debe:",
correcta: "Tapar ambos ojos para evitar movimientos oculares conjugados",
incorrectas: [
"Lavar con abundante agua a presión para desinfectar",
"Retirar el objeto con unas pinzas estériles"
]
},
{
enunciado: "La insolación (golpe de calor) se diferencia del agotamiento por calor en:",
correcta: "La presencia de alteración del estado mental y temperatura corporal >40ºC",
incorrectas: [
"La sudoración profusa y la piel fría",
"La ausencia total de taquicardia"
]
},
{
enunciado: "¿Cuál es la actuación ante una amputación traumática de un dedo?",
correcta: "Envolver el dedo en gasas estériles, introducirlo en una bolsa y esta a su vez en agua con hielo",
incorrectas: [
"Colocar el miembro directamente en contacto con el hielo para su conservación",
"Sumergir el dedo en alcohol o povidona yodada para evitar la sepsis"
]
},
{
enunciado: "En la RCP de adultos, tras realizar la descarga del DESA, se debe:",
correcta: "Reanudar inmediatamente las compresiones torácicas durante 2 minutos",
incorrectas: [
"Comprobar el pulso carotídeo durante un minuto",
"Esperar a que el DESA realice un nuevo análisis del ritmo"
]
}
];

```

```