'use strict';

var PREGUNTAS = [
{
enunciado: "La incapacidad permanente en su grado de 'gran invalidez' se define por:",
correcta: "Necesitar la asistencia de otra persona para los actos más esenciales de la vida",
incorrectas: [
"La pérdida total de la capacidad auditiva y visual de forma simultánea",
"La imposibilidad de desplazarse al centro de trabajo por medios propios"
]
},
{
enunciado: "Para acceder a la pensión de jubilación contributiva se exige un periodo mínimo de cotización de:",
correcta: "15 años, de los cuales 2 deben estar comprendidos en los 15 años anteriores al hecho causante",
incorrectas: [
"10 años ininterrumpidos en el mismo sector de actividad técnica",
"35 años completos con independencia de cuándo se hayan efectuado"
]
},
{
enunciado: "La prestación por nacimiento y cuidado de menor tiene una duración estándar de:",
correcta: "16 semanas, de las cuales 6 deben disfrutarse inmediatamente después del parto",
incorrectas: [
"12 semanas para el padre y 20 semanas para la madre biológica",
"Un año natural prorrogable si el técnico trabaja en turno de noche"
]
},
{
enunciado: "El subsidio por Incapacidad Temporal derivada de enfermedad común se cobra a partir del:",
correcta: "Cuarto día de la baja",
incorrectas: [
"Primer día de ausencia",
"Decimoquinto día tras la validación médica"
]
},
{
enunciado: "En el RETA, la base de cotización se determina en función de:",
correcta: "Los rendimientos netos anuales previstos por el trabajador autónomo",
incorrectas: [
"La facturación bruta sin descontar gastos",
"La categoría profesional equivalente en convenio"
]
},
{
enunciado: "La cuantía general de la pensión de viudedad es el:",
correcta: "52% de la base reguladora del causante",
incorrectas: [
"100% del salario base",
"25% de la base mínima del régimen general"
]
},
{
enunciado: "Para causar derecho a una prestación por accidente de trabajo:",
correcta: "No se exige periodo previo de cotización",
incorrectas: [
"Se requieren 180 días cotizados",
"Es necesaria afiliación sindical previa"
]
},
{
enunciado: "La prestación contributiva por desempleo exige haber cotizado al menos:",
correcta: "360 días en los seis años anteriores",
incorrectas: [
"90 días en el último año",
"500 días en toda la vida laboral"
]
},
{
enunciado: "La base reguladora sirve para:",
correcta: "Calcular la cuantía de determinadas prestaciones",
incorrectas: [
"Determinar el salario mínimo",
"Fijar el precio de productos sanitarios"
]
},
{
enunciado: "La incapacidad permanente total implica:",
correcta: "Inhabilitación para la profesión habitual pero posibilidad de trabajar en otra",
incorrectas: [
"Inhabilitación absoluta para cualquier trabajo",
"Prohibición de salir del domicilio"
]
},
{
enunciado: "El cese de actividad del autónomo se conoce como:",
correcta: "Paro del autónomo",
incorrectas: [
"Indemnización por clientela",
"Subsidio técnico sectorial"
]
},
{
enunciado: "La prestación por incapacidad temporal derivada de accidente de trabajo es del:",
correcta: "75% de la base reguladora desde el día siguiente",
incorrectas: [
"60% durante veinte días",
"100% del salario neto"
]
},
{
enunciado: "La pensión de orfandad se extingue generalmente a los:",
correcta: "21 años, ampliables a 25 en determinados supuestos",
incorrectas: [
"18 años en todo caso",
"30 años si estudia"
]
},
{
enunciado: "El Ingreso Mínimo Vital es una prestación:",
correcta: "No contributiva",
incorrectas: [
"Contributiva obligatoria",
"Privada empresarial"
]
},
{
enunciado: "Un accidente 'in itinere' ocurre:",
correcta: "Al ir o volver del trabajo",
incorrectas: [
"En vacaciones",
"En cualquier descanso fuera del centro"
]
},
{
enunciado: "La asistencia sanitaria incluye:",
correcta: "Servicios médicos, hospitalarios y farmacéuticos",
incorrectas: [
"Tratamientos estéticos",
"Pago de alquiler de vivienda"
]
},
{
enunciado: "El auxilio por defunción está destinado a:",
correcta: "Cubrir gastos de sepelio",
incorrectas: [
"Liquidar deudas empresariales",
"Crear un fondo educativo"
]
},
{
enunciado: "Las pensiones se revalorizan conforme al:",
correcta: "IPC",
incorrectas: [
"PIB sectorial",
"Acuerdo de mutuas"
]
},
{
enunciado: "La base reguladora de jubilación se calcula actualmente sobre:",
correcta: "Las bases de cotización de los últimos 25 años",
incorrectas: [
"5 años",
"15 años"
]
},
{
enunciado: "Un autónomo económicamente dependiente es:",
correcta: "Un TRADE",
incorrectas: [
"Un falso autónomo en todo caso",
"Un socio industrial"
]
},

/* 20 NUEVAS */

{
enunciado: "La incapacidad permanente absoluta implica:",
correcta: "Inhabilitación para toda profesión u oficio",
incorrectas: [
"Inhabilitación solo para la profesión habitual",
"Reducción del 50% de jornada"
]
},
{
enunciado: "La jubilación anticipada voluntaria exige:",
correcta: "Cumplir requisitos de edad y cotización superiores al mínimo general",
incorrectas: [
"Simple voluntad del trabajador",
"Aprobación sindical obligatoria"
]
},
{
enunciado: "La pensión de incapacidad permanente deriva de:",
correcta: "Una reducción anatómica o funcional grave previsiblemente definitiva",
incorrectas: [
"Una baja médica inferior a 15 días",
"Un conflicto laboral"
]
},
{
enunciado: "La contingencia común incluye:",
correcta: "Enfermedad común y accidente no laboral",
incorrectas: [
"Accidente de trabajo",
"Enfermedad profesional"
]
},
{
enunciado: "El periodo de carencia es:",
correcta: "El tiempo mínimo de cotización exigido para acceder a ciertas prestaciones",
incorrectas: [
"El plazo de prueba del contrato",
"El tiempo sin empleo"
]
},
{
enunciado: "La incapacidad temporal tiene una duración máxima general de:",
correcta: "365 días prorrogables 180 más",
incorrectas: [
"90 días",
"24 meses sin excepción"
]
},
{
enunciado: "El complemento por maternidad en pensiones busca:",
correcta: "Reducir la brecha de género en pensiones",
incorrectas: [
"Aumentar cotizaciones empresariales",
"Premiar antigüedad laboral"
]
},
{
enunciado: "El subsidio por desempleo asistencial se concede:",
correcta: "A quienes no tienen derecho o han agotado la prestación contributiva y carecen de rentas",
incorrectas: [
"A cualquier desempleado sin requisitos",
"Solo a menores de 25 años"
]
},
{
enunciado: "La jubilación parcial requiere:",
correcta: "Reducción de jornada y contrato de relevo en ciertos casos",
incorrectas: [
"Extinción completa del contrato",
"Ser funcionario"
]
},
{
enunciado: "El trabajador en incapacidad temporal debe:",
correcta: "Seguir el tratamiento médico y no realizar actividad incompatible",
incorrectas: [
"Trabajar en otra empresa",
"Renunciar a asistencia médica"
]
},
{
enunciado: "La prestación por riesgo durante el embarazo protege:",
correcta: "Situaciones en que el puesto pueda afectar a la salud de madre o feto",
incorrectas: [
"Solo embarazos de alto riesgo clínico",
"Únicamente trabajadoras autónomas"
]
},
{
enunciado: "La pensión de jubilación es incompatible con:",
correcta: "El trabajo a tiempo completo salvo excepciones legales",
incorrectas: [
"El cobro de herencias",
"La asistencia sanitaria"
]
},
{
enunciado: "La gran invalidez añade a la pensión:",
correcta: "Un complemento destinado a remunerar a la persona cuidadora",
incorrectas: [
"Un subsidio por desempleo",
"Una indemnización empresarial"
]
},
{
enunciado: "El trabajador desplazado a otro país de la UE mantiene:",
correcta: "La cobertura de Seguridad Social del país de origen en ciertos supuestos",
incorrectas: [
"Ninguna cobertura",
"Obligación de cotizar doblemente"
]
},
{
enunciado: "La pensión contributiva depende de:",
correcta: "Bases de cotización y años cotizados",
incorrectas: [
"Nivel formativo",
"Edad de inicio laboral exclusivamente"
]
},
{
enunciado: "El sistema español se basa en:",
correcta: "Principios de solidaridad, universalidad y unidad de caja",
incorrectas: [
"Capitalización individual",
"Gestión privada obligatoria"
]
},
{
enunciado: "El alta médica por mejoría implica:",
correcta: "Fin de la situación de incapacidad temporal",
incorrectas: [
"Reconocimiento automático de incapacidad permanente",
"Despido obligatorio"
]
},
{
enunciado: "La pensión de jubilación ordinaria exige:",
correcta: "Edad legal establecida y cotización suficiente",
incorrectas: [
"35 años exactos siempre",
"Contrato indefinido"
]
},
{
enunciado: "El accidente en misión se considera:",
correcta: "Accidente de trabajo",
incorrectas: [
"Accidente común",
"Situación no protegida"
]
},
{
enunciado: "La protección social española se financia principalmente mediante:",
correcta: "Cotizaciones sociales y aportaciones del Estado",
incorrectas: [
"Donaciones privadas",
"Impuestos municipales exclusivamente"
]
}
];