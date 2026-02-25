
// JS 58 - ANÁLISIS DE LOS FACTORES DE RIESGO LABORAL
'use strict';

var PREGUNTAS_58 = [
{
enunciado: "Se considera factor de riesgo biológico en un laboratorio:",
correcta: "La exposición a microorganismos como bacterias, virus u hongos al manipular muestras",
incorrectas: [
"La presencia de cables eléctricos sin toma de tierra en las salas de análisis",
"El ruido excesivo producido por las centrífugas durante el proceso de sedimentación"
]
},
{
enunciado: "Dentro de los factores de riesgo físico, las radiaciones ionizantes pueden causar:",
correcta: "Alteraciones genéticas y daños en los tejidos según la dosis acumulada",
incorrectas: [
"Fatiga muscular por el mantenimiento de posturas estáticas prolongadas",
"Intoxicaciones agudas por la inhalación de vapores de disolventes orgánicos"
]
},
{
enunciado: "Un factor de riesgo químico común en el laboratorio de diagnóstico es:",
correcta: "La manipulación de reactivos corrosivos, inflamables o tóxicos",
incorrectas: [
"El exceso de carga de trabajo y la presión asistencial del mando intermedio",
"La iluminación insuficiente en las áreas destinadas a la microscopía óptica"
]
},
{
enunciado: "Los riesgos organizativos o psicosociales tienen su origen en:",
correcta: "La ordenación y gestión del trabajo, como el estrés o el síndrome de 'burnout'",
incorrectas: [
"El contacto accidental con sangre infectada por el virus de la hepatitis B",
"La rotura de envases de vidrio que contienen ácidos concentrados"
]
},
{
enunciado: "La incidencia en la salud de las vibraciones mecánicas se manifiesta principalmente en:",
correcta: "Trastornos osteoarticulares y problemas vasculares en manos y brazos",
incorrectas: [
"Quemaduras profundas causadas por el contacto térmico con estufas de cultivo",
"Infecciones respiratorias derivadas de la inhalación de aerosoles biológicos"
]
},
{
enunciado: "La clasificación de los agentes biológicos en cuatro grupos se basa en:",
correcta: "Su peligrosidad intrínseca, facilidad de propagación y existencia de tratamiento",
incorrectas: [
"El color que adquieren tras aplicar la técnica de tinción de Gram en el laboratorio",
"El coste económico de los reactivos necesarios para su correcta identificación"
]
},
{
enunciado: "Un riesgo físico derivado de la temperatura ambiente en el laboratorio puede provocar:",
correcta: "Estrés térmico, lipotimias o disminución de la capacidad de concentración",
incorrectas: [
"Sensibilización alérgica por el uso continuado de guantes de látex con polvo",
"Dermatitis por contacto con sustancias irritantes presentes en los detergentes"
]
},
{
enunciado: "La exposición a niveles elevados de ruido de forma continuada produce:",
correcta: "Hipoacusia o sordera profesional y efectos extra-auditivos como irritabilidad",
incorrectas: [
"Riesgo de explosión al entrar en contacto con vapores de éter etílico",
"Parasitosis por la ingestión accidental de muestras mal identificadas"
]
},
{
enunciado: "En los riesgos químicos, la vía de entrada más frecuente en el organismo es:",
correcta: "La vía inhalatoria, a través de gases, vapores o polvos",
incorrectas: [
"La vía auditiva por la exposición a ultrasonidos de los equipos de limpieza",
"La vía visual por la incidencia directa de rayos láser de baja potencia"
]
},
{
enunciado: "Los riesgos ergonómicos se relacionan con:",
correcta: "La adaptación de los equipos y del puesto de trabajo a la anatomía del técnico",
incorrectas: [
"La presencia de radón en los sótanos de las instalaciones del centro sanitario",
"La gestión deficiente de los residuos biopeligrosos del grupo III"
]
},
{
enunciado: "La carga mental de trabajo se define como:",
correcta: "El esfuerzo intelectual necesario para realizar la tarea y procesar información",
incorrectas: [
"El peso máximo en kilogramos que un técnico puede levantar sin ayuda mecánica",
"La resistencia de los suelos ante la caída accidental de instrumental pesado"
]
},
{
enunciado: "Un agente biológico del Grupo 4 es aquel que:",
correcta: "Causa una enfermedad grave, tiene gran riesgo de propagación y no hay tratamiento",
incorrectas: [
"No suele causar enfermedad en el ser humano sano bajo condiciones normales",
"Es responsable de infecciones leves que se curan de forma espontánea sin medicación"
]
},
{
enunciado: "Las Frases H (indicaciones de peligro) en el etiquetado químico informan sobre:",
correcta: "Los peligros físicos, para la salud o para el medio ambiente de la sustancia",
incorrectas: [
"El precio unitario del producto y el nombre del fabricante internacional",
"La fecha exacta en la que el técnico superior recibió la formación preventiva"
]
},
{
enunciado: "La fatiga visual en técnicos de laboratorio suele ser consecuencia de:",
correcta: "El uso prolongado del microscopio o de pantallas de visualización de datos",
incorrectas: [
"La exposición accidental a campos electromagnéticos de baja frecuencia",
"La inhalación de niveles bajos de ozono producidos por equipos eléctricos"
]
},
{
enunciado: "El riesgo de caída al mismo nivel suele estar originado por:",
correcta: "Suelos resbaladizos, obstáculos en zonas de paso o falta de orden",
incorrectas: [
"La falta de barandillas en las escaleras de acceso a la azotea del edificio",
"El uso de calzado de seguridad con puntera reforzada de acero templado"
]
},
{
enunciado: "La incidencia psicosocial de los turnos nocturnos o rotatorios incluye:",
correcta: "Alteraciones del sueño, fatiga crónica y problemas de conciliación familiar",
incorrectas: [
"Aumento de la agudeza auditiva ante ruidos de baja intensidad en el laboratorio",
"Mejora de la resistencia física frente a agentes químicos corrosivos"
]
},
{
enunciado: "Las radiaciones no ionizantes, como los campos magnéticos, pueden producir:",
correcta: "Efectos térmicos y corrientes inducidas en los tejidos del organismo",
incorrectas: [
"Mutaciones celulares irreversibles con riesgo de desarrollo tumoral rápido",
"Envenenamientos agudos por la alteración de la estructura del agua potable"
]
},
{
enunciado: "La prevención frente a riesgos químicos prioriza el uso de:",
correcta: "Sistemas de extracción localizada y vitrinas de gases",
incorrectas: [
"Mascarillas de un solo uso sin filtro específico para vapores orgánicos",
"Batas de algodón de manga corta para evitar el calor excesivo en el puesto"
]
},
{
enunciado: "El riesgo de incendio en laboratorios de química se asocia a:",
correcta: "La presencia simultánea de comburentes, combustibles y focos de ignición",
incorrectas: [
"El almacenamiento de grandes cantidades de agua destilada y suero fisiológico",
"La utilización de guantes de nitrilo en lugar de guantes de látex natural"
]
},
{
enunciado: "Se considera un factor organizativo generador de estrés:",
correcta: "La falta de definición de funciones y la ambigüedad de rol del técnico",
incorrectas: [
"La utilización de pipetas automáticas en lugar de pipeteo manual por boca",
"La limpieza diaria de las encimeras con soluciones de hipoclorito sódico"
]
}
];