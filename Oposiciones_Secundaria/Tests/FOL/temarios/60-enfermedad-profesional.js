'use strict';

var PREGUNTAS = [
{
enunciado: "La enfermedad profesional se define legalmente como aquella contraída:",
correcta: "A consecuencia del trabajo ejecutado por cuenta ajena en las actividades especificadas en el cuadro legal",
incorrectas: [
"De forma súbita y violenta durante la jornada laboral por un fallo en la maquinaria",
"Por predisposición genética del técnico sin relación directa con el ambiente de trabajo"
]
},
{
enunciado: "Para que una patología sea reconocida como enfermedad profesional deben concurrir:",
correcta: "Actividad específica, exposición a elementos determinados y cuadro clínico recogido en la norma",
incorrectas: [
"Baja laboral superior a seis meses y contrato de carácter indefinido en la empresa",
"Testimonio de dos técnicos superiores que confirmen la falta de higiene en el centro"
]
},
{
enunciado: "El sistema de lista cerrada en España implica que:",
correcta: "Solo se consideran enfermedades profesionales las incluidas explícitamente en el Real Decreto 1299/2006",
incorrectas: [
"Ningún técnico superior puede solicitar la baja si no es por un accidente físico visible",
"La dirección del laboratorio decide qué enfermedades se notifican a la Seguridad Social"
]
},
{
enunciado: "Las enfermedades no incluidas en el cuadro pero causadas por el trabajo se consideran:",
correcta: "Accidentes de trabajo, siempre que se pruebe la relación de causalidad exclusiva",
incorrectas: [
"Enfermedades comunes sin derecho a ningún tipo de prestación económica especial",
"Faltas leves del trabajador por no haber mantenido un estilo de vida saludable"
]
},
{
enunciado: "El Grupo 1 del cuadro de enfermedades profesionales comprende las causadas por:",
correcta: "Agentes químicos",
incorrectas: [
"Agentes biológicos",
"Posturas forzadas y movimientos repetitivos"
]
},
{
enunciado: "El Grupo 3 del cuadro de enfermedades profesionales se refiere a las causadas por:",
correcta: "Agentes biológicos",
incorrectas: [
"Radiaciones ionizantes y otros agentes físicos",
"Sustancias cancerígenas de origen mineral"
]
},
{
enunciado: "Una enfermedad profesional típica por agentes biológicos en laboratorios es:",
correcta: "La hepatitis B o C contraída por contacto con muestras de sangre contaminada",
incorrectas: [
"La sordera profesional provocada por el ruido constante de las centrífugas",
"El síndrome del túnel carpiano por el uso excesivo de pipetas manuales"
]
},
{
enunciado: "El Grupo 2 del cuadro de enfermedades profesionales incluye las causadas por:",
correcta: "Agentes físicos",
incorrectas: [
"Inhalación de polvos minerales como el sílice o el amianto",
"Exposición a disolventes orgánicos y metales pesados"
]
},
{
enunciado: "La silicosis es una enfermedad profesional incluida en el Grupo 4, causada por:",
correcta: "La inhalación de polvo de sílice libre",
incorrectas: [
"El contacto dérmico con reactivos químicos corrosivos",
"La exposición prolongada a vibraciones mecánicas de alta frecuencia"
]
},
{
enunciado: "El Grupo 6 del cuadro legal recoge las enfermedades causadas por:",
correcta: "Agentes carcinogénicos",
incorrectas: [
"Factores psicológicos y estrés laboral crónico",
"Cargas físicas excesivas en el transporte de materiales"
]
},
{
enunciado: "La principal diferencia temporal entre accidente y enfermedad profesional es que esta última es:",
correcta: "De aparición lenta, progresiva y derivada de una exposición continuada en el tiempo",
incorrectas: [
"De aparición instantánea debido a una fuerza externa traumática e imprevista",
"Limitada a los primeros quince días tras la incorporación del técnico al puesto"
]
},
{
enunciado: "La entidad encargada de la notificación y registro de enfermedades profesionales es:",
correcta: "La Entidad Gestora o Mutua que cubra las contingencias profesionales",
incorrectas: [
"El Colegio Oficial de Técnicos Superiores de Laboratorio de la provincia",
"El ayuntamiento donde se encuentre ubicado el edificio del centro sanitario"
]
},
{
enunciado: "El periodo de observación en la enfermedad profesional sirve para:",
correcta: "Estudiar la evolución de la patología antes de su calificación definitiva",
incorrectas: [
"Sustituir al técnico superior por un becario sin coste para el laboratorio",
"Evitar el pago de la nómina mientras el trabajador se encuentra en su domicilio"
]
},
{
enunciado: "Se consideran enfermedades profesionales del Grupo 5 las causadas por:",
correcta: "Sustancias y agentes no comprendidos en otros apartados (piel y respiratorias)",
incorrectas: [
"Microorganismos transmitidos por picaduras de insectos en el entorno laboral",
"Campos electromagnéticos generados por equipos de resonancia magnética"
]
},
{
enunciado: "La asbestosis es una enfermedad respiratoria grave causada por la exposición al:",
correcta: "Amianto o asbesto",
incorrectas: [
"Vapor de mercurio",
"Gas radón"
]
},
{
enunciado: "Una patología musculoesquelética reconocida como enfermedad profesional es:",
correcta: "La epicondilitis (codo de tenista) por movimientos repetitivos de rotación",
incorrectas: [
"La fractura de fémur por una caída desde una escalera de mano",
"El lumbago agudo tras realizar un esfuerzo puntual de carga excesiva"
]
},
{
enunciado: "La hipoacusia profesional es la pérdida de audición causada por:",
correcta: "Ruido industrial por encima de los límites legales durante la jornada",
incorrectas: [
"La entrada de reactivos químicos líquidos en el conducto auditivo",
"El uso de auriculares para escuchar música durante las tareas de análisis"
]
},
{
enunciado: "El reconocimiento médico específico es la herramienta principal para:",
correcta: "La detección precoz de síntomas que indiquen una posible enfermedad profesional",
incorrectas: [
"Verificar que el técnico superior no consume sustancias ilegales en su tiempo libre",
"Evaluar el coeficiente intelectual del personal técnico antes de una promoción"
]
},
{
enunciado: "El diagnóstico de una enfermedad profesional debe ser realizado por:",
correcta: "Los servicios médicos de las Mutuas o el Sistema Público de Salud",
incorrectas: [
"El director técnico del laboratorio tras revisar el historial de ausencias",
"Una empresa externa de auditoría contable y financiera de la sociedad"
]
},
{
enunciado: "La problemática de la 'invisibilidad' de la enfermedad profesional se refiere a:",
correcta: "La dificultad de relacionar la patología con el trabajo años después de la exposición",
incorrectas: [
"Que los microorganismos del laboratorio no se ven a simple vista sin microscopio",
"La falta de síntomas físicos externos en los técnicos que trabajan en turno de noche"
]
},
{
enunciado: "La dermatitis de contacto por manejo de productos químicos se clasifica en el:",
correcta: "Grupo 5 (Enfermedades de la piel causadas por sustancias de bajo peso molecular)",
incorrectas: [
"Grupo 2 (Enfermedades causadas por agentes físicos como la humedad)",
"Grupo 3 (Enfermedades infecciosas y parasitarias transmitidas por animales)"
]
},
{
enunciado: "El benceno es un agente químico del Grupo 1 asociado legalmente a:",
correcta: "Hemopatías malignas como la leucemia",
incorrectas: [
"Sordera profunda bilateral irreversible",
"Trastornos del sueño y ansiedad crónica"
]
},
{
enunciado: "Se considera enfermedad profesional por agentes biológicos en personal sanitario:",
correcta: "La tuberculosis, siempre que se trabaje en contacto con pacientes o muestras",
incorrectas: [
"La gripe estacional contraída durante un desplazamiento en transporte público",
"La alergia al polen durante la primavera por la ventilación del laboratorio"
]
},
{
enunciado: "La presunción 'iuris et de iure' en la enfermedad profesional significa que:",
correcta: "Si se dan los requisitos legales, se admite la existencia de la enfermedad sin más prueba",
incorrectas: [
"El trabajador debe demostrar ante un juez la negligencia directa del empresario",
"La empresa puede demostrar que la enfermedad fue causada por un hobby personal"
]
},
{
enunciado: "El cáncer de pulmón por exposición a radón en minas y lugares subterráneos pertenece al:",
correcta: "Grupo 6",
incorrectas: [
"Grupo 1",
"Grupo 3"
]
},
{
enunciado: "El síndrome de vibración mano-brazo provoca legalmente:",
correcta: "Trastornos vasculares (dedo blanco) y osteoarticulares",
incorrectas: [
"Pérdida de la visión periférica por destellos lumínicos",
"Infecciones cutáneas por hongos del género Candida"
]
},
{
enunciado: "La exposición a aminas aromáticas se asocia profesionalmente con:",
correcta: "Tumores de vías urinarias",
incorrectas: [
"Hérnias discales en la zona lumbar",
"Pérdida del sentido del olfato (anosmia)"
]
},
{
enunciado: "El saturnismo es la enfermedad profesional producida por el:",
correcta: "Plomo y sus compuestos",
incorrectas: [
"Fósforo blanco",
"Mercurio metálico"
]
},
{
enunciado: "El hidrargirismo se produce por la exposición profesional al:",
correcta: "Mercurio",
incorrectas: [
"Cadmio",
"Arsénico"
]
},
{
enunciado: "La brucelosis es una enfermedad profesional del Grupo 3 que afecta a:",
correcta: "Personal que manipula animales o sus productos y muestras de laboratorio",
incorrectas: [
"Técnicos que operan equipos de rayos X sin la protección de plomo adecuada",
"Trabajadores expuestos a niveles de humedad relativa inferiores al 20%"
]
},
{
enunciado: "La fatiga vocal (nódulos en las cuerdas vocales) es enfermedad profesional para:",
correcta: "Actividades que requieren un uso continuado de la voz (profesores, cantantes)",
incorrectas: [
"Técnicos superiores que trabajan en silencio absoluto en salas blancas",
"Personal administrativo que utiliza teclados ergonómicos de última generación"
]
},
{
enunciado: "El mesotelioma maligno es un tipo de cáncer causado exclusivamente por:",
correcta: "Exposición a fibras de amianto",
incorrectas: [
"Radiaciones infrarrojas no ionizantes",
"Contacto con aceites minerales usados"
]
},
{
enunciado: "La prevención de enfermedades profesionales se basa fundamentalmente en:",
correcta: "El control ambiental (Higiene Industrial) y la Vigilancia de la Salud",
incorrectas: [
"La contratación de seguros de vida de alta gama para los directivos del centro",
"La limpieza de los suelos con agua a presión dos veces por jornada laboral"
]
},
{
enunciado: "En el Grupo 2, las radiaciones ionizantes afectan legalmente a:",
correcta: "Médicos, técnicos de rayos y personal de laboratorios de radioisótopos",
incorrectas: [
"Conductores de ambulancias que utilizan sistemas de navegación GPS",
"Técnicos que utilizan pantallas de ordenador durante toda su jornada"
]
},
{
enunciado: "Las enfermedades del Grupo 4 son principalmente de tipo:",
correcta: "Respiratorio (Inhalación de sustancias y polvos de origen mineral)",
incorrectas: [
"Auditivo (Trauma acústico por explosiones o ruidos impulsivos)",
"Digestivo (Ingestión accidental de metales pesados en disolución)"
]
},
{
enunciado: "Se considera enfermedad profesional por movimientos repetitivos:",
correcta: "El síndrome del túnel carpiano por compresión del nervio mediano",
incorrectas: [
"La luxación de hombro por un golpe accidental contra una puerta",
"El esguince de tobillo al bajar de la silla ergonómica del laboratorio"
]
},
{
enunciado: "El CEPROSS es el sistema de comunicación de:",
correcta: "Enfermedades Profesionales en la Seguridad Social",
incorrectas: [
"Evaluación de Riesgos Psicosociales en el sector Sanitario",
"Control de Existencias de Productos Químicos Sólidos y Solubles"
]
},
{
enunciado: "La exposición a cloruro de vinilo monómero se asocia con el:",
correcta: "Angiosarcoma de hígado",
incorrectas: [
"Desprendimiento de retina",
"Enfisema pulmonar obstructivo"
]
},
{
enunciado: "El cuadro de enfermedades profesionales se actualiza para:",
correcta: "Incorporar nuevas patologías según el avance del conocimiento científico",
incorrectas: [
"Aumentar los impuestos que deben pagar los técnicos superiores al Estado",
"Reducir el número de enfermedades para ahorrar costes a las mutuas"
]
},
{
enunciado: "La sospecha de enfermedad profesional debe ser comunicada por:",
correcta: "El facultativo que la detecte a través del organismo competente",
incorrectas: [
"El propio técnico superior mediante un anuncio en la prensa local",
"La familia del trabajador tras consultar los síntomas en internet"
]
}
];