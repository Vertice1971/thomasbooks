'use strict';

var PREGUNTAS = [
{
enunciado: "¿Cuál es la primera actuación obligatoria dentro del protocolo general de primeros auxilios (conducta PAS)?",
correcta: "Proteger el lugar del accidente para evitar nuevos riesgos.",
incorrectas: [
"Avisar inmediatamente a los servicios de emergencias 112.",
"Socorrer a las víctimas que presenten mayor agitación externa."
]
},
{
enunciado: "En la valoración primaria de un accidentado, ¿cuál es el orden de prioridades?",
correcta: "Conciencia, respiración y pulso.",
incorrectas: [
"Hemorragias, fracturas y estado de shock.",
"Identificación personal, aviso a familiares y transporte."
]
},
{
enunciado: "¿Cuál es la frecuencia de compresiones/ventilaciones recomendada en una RCP básica para adultos según las guías del ERC?",
correcta: "30 compresiones y 2 ventilaciones.",
incorrectas: [
"15 compresiones y 5 ventilaciones.",
"50 compresiones y 1 ventilación profunda."
]
},
{
enunciado: "¿Cómo se debe actuar ante una quemadura térmica de primer grado?",
correcta: "Refrescar con agua corriente fría durante al menos 10-15 minutos.",
incorrectas: [
"Aplicar pomadas grasas o dentífrico para aliviar el dolor.",
"Pinchar las ampollas si aparecen para reducir la presión."
]
},
{
enunciado: "¿Qué técnica de primeros auxilios es prioritaria ante una hemorragia externa masiva en una extremidad?",
correcta: "Presión directa sobre la herida con apósitos limpios.",
incorrectas: [
"Aplicación inmediata de un torniquete por encima de la articulación.",
"Lavado con agua oxigenada y cepillado de los bordes de la herida."
]
},
{
enunciado: "¿En qué posición se debe colocar a una víctima que está inconsciente pero respira con normalidad?",
correcta: "Posición Lateral de Seguridad (PLS).",
incorrectas: [
"Posición de Trendelenburg (pies elevados).",
"Decúbito supino con la cabeza flexionada hacia delante."
]
},
{
enunciado: "¿Cuál es el contenido mínimo obligatorio de un botiquín de empresa según el RD 486/1997?",
correcta: "Desinfectantes, antisépticos autorizados, gasas estériles, algodón, venda, esparadrapo y guantes.",
incorrectas: [
"Antibióticos de amplio espectro, analgésicos y jeringuillas precargadas.",
"Suero antiofídico, mascarillas quirúrgicas y tensiómetro digital."
]
},
{
enunciado: "Ante una sospecha de fractura de un miembro, la actuación correcta es:",
correcta: "Inmovilizar la articulación superior e inferior al foco de la fractura.",
incorrectas: [
"Intentar reducir la fractura mediante tracción manual suave.",
"Aplicar masajes con alcohol para mejorar la circulación de la zona."
]
},
{
enunciado: "¿Qué es la Maniobra de Heimlich y cuándo se aplica?",
correcta: "Compresiones abdominales ante una obstrucción completa de la vía aérea por cuerpo extraño.",
incorrectas: [
"Masaje cardíaco externo cuando se detecta una parada respiratoria.",
"Inmovilización del cuello tras una caída desde distinta altura."
]
},
{
enunciado: "En una quemadura química por vertido de ácido en la piel, ¿qué se debe hacer?",
correcta: "Lavar con abundante agua a baja presión durante al menos 20-30 minutos.",
incorrectas: [
"Neutralizar el ácido aplicando una base fuerte de forma inmediata.",
"Cubrir la zona con algodón seco y vendar fuertemente."
]
},
{
enunciado: "¿Cuál es el punto de compresión para realizar el masaje cardíaco en adultos?",
correcta: "El centro del pecho (mitad inferior del esternón).",
incorrectas: [
"El lado izquierdo del tórax, sobre el ápex cardíaco.",
"La parte superior del esternón, cerca del cuello."
]
},
{
enunciado: "Ante una hemorragia nasal (epistaxis), la posición correcta de la cabeza debe ser:",
correcta: "Inclinada ligeramente hacia delante para evitar la aspiración de sangre.",
incorrectas: [
"Inclinada hacia atrás para favorecer la coagulación interna.",
"Horizontal sobre el suelo con las piernas elevadas."
]
},
{
enunciado: "Una quemadura de segundo grado se identifica principalmente por:",
correcta: "La aparición de ampollas (flictenas) y dolor intenso.",
incorrectas: [
"El aspecto carbonizado de los tejidos y ausencia de dolor.",
"El enrojecimiento de la piel sin pérdida de continuidad."
]
},
{
enunciado: "¿Qué se debe hacer ante una víctima con un objeto clavado en el abdomen?",
correcta: "No retirar el objeto y fijarlo para evitar que se mueva durante el traslado.",
incorrectas: [
"Extraerlo rápidamente para poder presionar la herida y parar el sangrado.",
"Girar el objeto en sentido horario para asegurar su posición."
]
},
{
enunciado: "¿Cuál es la prioridad en el transporte de un accidentado con posible lesión medular?",
correcta: "Mantener el eje cabeza-cuello-tronco totalmente alineado y bloqueado.",
incorrectas: [
"Trasladarlo lo más rápido posible en un vehículo particular sentado.",
"Colocarlo en posición fetal para proteger la columna vertebral."
]
},
{
enunciado: "En la RCP, ¿qué profundidad deben alcanzar las compresiones torácicas en un adulto?",
correcta: "Entre 5 y 6 centímetros.",
incorrectas: [
"Mínimo 8 centímetros para asegurar el flujo cerebral.",
"Máximo 2 centímetros para no fracturar las costillas."
]
},
{
enunciado: "Ante un síncope o desmayo (lipotimia), la medida inmediata es:",
correcta: "Tumbar a la persona y elevar sus piernas unos 30-40 centímetros.",
incorrectas: [
"Darle de beber agua con azúcar o alcohol de forma inmediata.",
"Obligarle a caminar para que recupere el tono muscular."
]
},
{
enunciado: "¿Cuándo se considera que una hemorragia es arterial?",
correcta: "Cuando la sangre es de color rojo brillante y sale a borbotones rítmicos.",
incorrectas: [
"Cuando la sangre es oscura y fluye de forma continua y lenta.",
"Cuando solo se observa un punteado rojizo en la superficie cutánea."
]
},
{
enunciado: "¿Qué es el 'triaje' en una situación de múltiples víctimas?",
correcta: "El proceso de clasificación de heridos según su gravedad y pronóstico de supervivencia.",
incorrectas: [
"La desinfección sistemática del material del botiquín de obra.",
"El registro administrativo de los seguros de vida de los trabajadores."
]
},
{
enunciado: "¿Cuál es el ritmo de compresiones por minuto en una RCP de calidad?",
correcta: "Entre 100 y 120 compresiones por minuto.",
incorrectas: [
"60 compresiones por minuto (una por segundo).",
"140 compresiones por minuto para compensar la fatiga del reanimador."
]
},
{
enunciado: "En un botiquín de empresa, ¿qué uso tiene el suero fisiológico?",
correcta: "Lavado de heridas y limpieza ocular.",
incorrectas: [
"Desinfección de instrumental quirúrgico metálico.",
"Sustituto de la hidratación oral en casos de insolación."
]
},
{
enunciado: "Ante una fractura abierta, ¿qué no se debe hacer bajo ningún concepto?",
correcta: "Intentar introducir el hueso dentro de la herida.",
incorrectas: [
"Cubrir el hueso con gasas estériles húmedas.",
"Controlar la hemorragia mediante presión periférica."
]
},
{
enunciado: "¿Qué define a una quemadura de tercer grado?",
correcta: "Destrucción total de la piel y afectación de tejidos profundos, con escaso dolor inicial.",
incorrectas: [
"Afectación solo de la epidermis con curación espontánea en 48 horas.",
"Dolor extremo insoportable debido a la irritación de las terminaciones nerviosas intactas."
]
},
{
enunciado: "El torniquete debe utilizarse únicamente en casos de:",
correcta: "Hemorragias externas masivas donde la presión directa ha fallado o en amputaciones.",
incorrectas: [
"Cualquier corte profundo para evitar que el trabajador manche el suelo.",
"Picaduras de insectos para localizar el veneno en un punto fijo."
]
},
{
enunciado: "¿Cómo se comprueba si una persona inconsciente respira?",
correcta: "Maniobra ver-oír-sentir (VOS) durante no más de 10 segundos.",
incorrectas: [
"Acercando un espejo a la boca para ver si se empaña durante un minuto.",
"Presionando el abdomen para observar el movimiento de los pulmones."
]
},
{
enunciado: "Ante una descarga eléctrica, lo primero que se debe hacer es:",
correcta: "Cortar la corriente eléctrica antes de tocar a la víctima.",
incorrectas: [
"Separar a la víctima del conductor con las manos desnudas rápidamente.",
"Iniciar la RCP sin comprobar si el entorno es seguro."
]
},
{
enunciado: "En caso de atragantamiento en una persona obesa o embarazada donde no se puede rodear el abdomen:",
correcta: "Se realizan compresiones torácicas en lugar de abdominales.",
incorrectas: [
"Se le obliga a beber grandes cantidades de aceite vegetal.",
"Se le coloca en posición de decúbito prono (boca abajo)."
]
},
{
enunciado: "¿Qué es el 'estado de shock' tras un traumatismo grave?",
correcta: "Un fallo del sistema circulatorio que impide la perfusión adecuada de los órganos vitales.",
incorrectas: [
"Un estado de pánico que impide al trabajador hablar con sus compañeros.",
"El aumento brusco de la presión arterial por encima de 200 mmHg."
]
},
{
enunciado: "Para inmovilizar una posible lesión cervical manualmente se debe:",
correcta: "Sujetar la cabeza con ambas manos para evitar movimientos de rotación o flexión.",
incorrectas: [
"Colocar una almohada alta debajo de la nuca para que descanse.",
"Girar la cabeza a un lado para evitar el riesgo de vómito."
]
},
{
enunciado: "¿Qué técnica se usa para abrir la vía aérea de una persona inconsciente sin sospecha de trauma?",
correcta: "Maniobra frente-mentón.",
incorrectas: [
"Extracción manual de la lengua con pinzas.",
"Introducción de un tubo rígido por la nariz."
]
},
{
enunciado: "Ante una quemadura por congelación, la actuación correcta es:",
correcta: "Recalentar la zona de forma progresiva con agua tibia, nunca caliente.",
incorrectas: [
"Frotar enérgicamente la zona con nieve o hielo.",
"Aplicar calor directo mediante una estufa o fuego."
]
},
{
enunciado: "Si tras realizar 30 compresiones las ventilaciones no son efectivas (no sube el pecho):",
correcta: "Revisar la boca y la maniobra frente-mentón antes de seguir con las compresiones.",
incorrectas: [
"Insistir con ventilaciones de mayor presión hasta que el aire entre por la fuerza.",
"Abandonar la reanimación y esperar a que llegue el soporte avanzado."
]
},
{
enunciado: "¿Cuál es el objetivo de elevar las extremidades inferiores en un herido (si no hay contraindicación)?",
correcta: "Favorecer el retorno venoso y la oxigenación de los centros vitales.",
incorrectas: [
"Reducir el dolor en la zona lumbar de la víctima.",
"Evitar que la víctima pueda levantarse y escapar del lugar."
]
},
{
enunciado: "¿Qué se debe hacer si una gasa se empapa de sangre mientras presionamos una herida?",
correcta: "Colocar otra gasa encima sin retirar la anterior para no romper el coágulo.",
incorrectas: [
"Retirar la gasa sucia y limpiar la herida con un paño seco.",
"Lavar la gasa con agua y volver a colocarla en su sitio."
]
},
{
enunciado: "En el transporte manual de heridos por dos socorristas, la técnica de 'silla de la reina' se usa para:",
correcta: "Víctimas conscientes que pueden colaborar sujetándose a los hombros.",
incorrectas: [
"Víctimas con sospecha de fractura de fémur o pelvis.",
"Trasladar a personas en estado de coma profundo."
]
},
{
enunciado: "¿Cuándo se debe detener una maniobra de RCP iniciada?",
correcta: "Cuando la víctima recupere la respiración espontánea, llegue ayuda profesional o por agotamiento del reanimador.",
incorrectas: [
"A los 5 minutos exactos si no se observa ninguna mejoría.",
"Si el trabajador accidentado no tiene pagada su cuota sindical."
]
},
{
enunciado: "Ante una herida abdominal con salida de vísceras (evisceración), ¿qué se debe hacer?",
correcta: "Cubrirlas con apósitos estériles humedecidos con suero, sin intentar introducirlas.",
incorrectas: [
"Empujarlas hacia el interior para evitar la infección ambiental.",
"Limpiarlas con alcohol de 96 grados para asegurar la esterilidad."
]
},
{
enunciado: "¿Cuál es la función del Desfibrilador Externo Semiautomático (DESA) en los primeros auxilios?",
correcta: "Identificar arritmias letales y administrar una descarga si es necesario para restablecer el ritmo cardíaco.",
incorrectas: [
"Sustituir la necesidad de realizar compresiones torácicas manuales.",
"Medir la temperatura interna y el nivel de glucosa en sangre."
]
},
{
enunciado: "En un botiquín, las pinzas y tijeras deben estar:",
correcta: "Limpias y, a ser posible, desinfectadas o ser de un solo uso.",
incorrectas: [
"Oxidadas para favorecer la cicatrización por hierro.",
"Guardadas en el mismo compartimento que los residuos biológicos."
]
},
{
enunciado: "¿Qué información es vital proporcionar al llamar al 112?",
correcta: "Lugar exacto, tipo de accidente, número de heridos y estado de los mismos.",
incorrectas: [
"El historial clínico de los abuelos de los heridos.",
"La marca y modelo de los vehículos implicados en el suceso."
]
}
];
