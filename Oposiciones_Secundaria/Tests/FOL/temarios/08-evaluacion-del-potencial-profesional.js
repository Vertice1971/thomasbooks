'use strict';

var PREGUNTAS = [
{
enunciado: "¿Qué se entiende por 'potencial profesional' en el proceso de autoorientación?",
correcta: "Conjunto de capacidades, aptitudes y recursos que un individuo puede desarrollar",
incorrectas: [
"Suma de los títulos académicos obtenidos hasta el momento",
"Saldo económico acumulado para invertir en formación privada",
"Listado de empresas donde el sujeto ha trabajado anteriormente"
]
},
{
enunciado: "En la evaluación de intereses, el Inventario de Preferencias Profesionales de Holland utiliza el código:",
correcta: "RIASEC (Realista, Investigador, Artístico, Social, Emprendedor, Convencional)",
incorrectas: [
"DAFO (Debilidades, Amenazas, Fortalezas, Oportunidades)",
"ABCDE (Modelo racional-emotivo de la conducta)",
"CASVE (Comunicación, Análisis, Síntesis, Valoración, Ejecución)"
]
},
{
enunciado: "La autoorientación se basa en un modelo donde el orientador actúa como:",
correcta: "Facilitador y mediador de los recursos de autoconocimiento",
incorrectas: [
"Director único de la toma de decisiones del usuario",
"Juez evaluador del éxito o fracaso del proyecto vital",
"Administrador de las ofertas de empleo del servicio público"
]
},
{
enunciado: "¿Cuál es la función de los test de aptitudes diferenciales (tipo DAT) en orientación?",
correcta: "Medir capacidades específicas como razonamiento verbal, numérico o mecánico",
incorrectas: [
"Evaluar la personalidad patológica del aspirante",
"Determinar el nivel de simpatía del alumno hacia el docente",
"Calcular la velocidad de lectura en voz alta del alumnado"
]
},
{
enunciado: "El concepto de 'ancla de carrera' de Edgar Schein se refiere a:",
correcta: "Valores y motivaciones autodefinidos que el sujeto no abandonaría",
incorrectas: [
"Contratos de larga duración que impiden la movilidad laboral",
"Técnicas de fijación de la atención en tareas repetitivas",
"Limitaciones geográficas que impiden el cambio de residencia"
]
},
{
enunciado: "Un instrumento cualitativo para el análisis del potencial profesional es:",
correcta: "La entrevista de balance o la biografía profesional",
incorrectas: [
"El examen tipo test con corrección automatizada",
"La báscula de precisión para medir el índice de masa corporal",
"El cronómetro para medir la velocidad de ejecución técnica"
]
},
{
enunciado: "En la evaluación de la motivación, el enfoque de la 'Autodeterminación' distingue entre:",
correcta: "Motivación intrínseca, extrínseca y amotivación",
incorrectas: [
"Motivación por el dinero y motivación por las vacaciones",
"Motivación de mañana y motivación de tarde",
"Motivación individual y motivación por presión sindical"
]
},
{
enunciado: "Las 'competencias transversales' o soft skills son aquellas que:",
correcta: "Son útiles en diversos contextos profesionales y puestos de trabajo",
incorrectas: [
"Solo se aplican en el manejo de instrumental de laboratorio",
"Se adquieren exclusivamente mediante el estudio de leyes",
"Desaparecen al cambiar de empresa o sector productivo"
]
},
{
enunciado: "El cuestionario de intereses de Kuder se diferencia de otros por:",
correcta: "Utilizar un formato de elección forzosa entre tres actividades",
incorrectas: [
"Evaluar únicamente la inteligencia lógico-matemática",
"Ser exclusivo para profesionales del sector de la cirugía",
"No permitir la interpretación de los resultados por el usuario"
]
},
{
enunciado: "¿Qué es el 'autoconcepto' en el proceso de autoorientación?",
correcta: "La imagen y valoración que la persona tiene de sí misma",
incorrectas: [
"La idea que el jefe tiene sobre el rendimiento del empleado",
"El manual de instrucciones de un equipo de rayos X",
"La descripción de las funciones de un puesto en el BOE"
]
},
{
enunciado: "La técnica del 'Análisis DAFO' personal sirve para:",
correcta: "Contrastar los factores internos del sujeto con los externos del entorno",
incorrectas: [
"Calcular el nivel de glucosa en sangre de los pacientes",
"Organizar el archivo de expedientes del departamento",
"Seleccionar el mejor instrumental para una endodoncia"
]
},
{
enunciado: "En orientación, la 'evaluación por competencias' se centra en:",
correcta: "Lo que el sujeto sabe hacer en contextos profesionales reales",
incorrectas: [
"El número de horas que el alumno ha estado sentado en clase",
"La capacidad de repetir de memoria textos legislativos",
"El nivel de renta familiar declarado en la matriculación"
]
},
{
enunciado: "Un inventario de 'valores profesionales' evalúa qué aspectos prioriza el sujeto, como:",
correcta: "Autonomía, prestigio, seguridad, altruismo o variedad",
incorrectas: [
"Marca de ordenador, tipo de ratón y resolución de pantalla",
"Distancia al domicilio, color del uniforme y menú de cafetería",
"Nombre de la empresa, número de CIF y dirección postal"
]
},
{
enunciado: "La madurez vocacional se mide habitualmente mediante instrumentos que evalúan:",
correcta: "Planificación, exploración e información sobre el mundo laboral",
incorrectas: [
"La edad cronológica exacta del sujeto evaluado",
"La estatura y peso para determinar la fuerza física",
"El conocimiento de idiomas extranjeros sin relación con el puesto"
]
},
{
enunciado: "¿Qué permite el 'e-Portafolio' en la autoorientación?",
correcta: "Recopilar evidencias de aprendizaje y reflexionar sobre el progreso",
incorrectas: [
"Enviar correos masivos a todas las empresas del sector",
"Almacenar copias de seguridad de las nóminas mensuales",
"Instalar software de diseño gráfico para ocio personal"
]
},
{
enunciado: "La 'autoeficacia' (concepto de Bandura) influye en la orientación porque:",
correcta: "Determina el esfuerzo y la persistencia ante metas profesionales",
incorrectas: [
"Es una técnica para arreglar aparatos de procesos sanitarios",
"Define el salario máximo que un trabajador puede percibir",
"Es el proceso de corrección automática de un test psicométrico"
]
},
{
enunciado: "En la evaluación de motivaciones, el 'locus de control interno' es deseable porque:",
correcta: "El sujeto se siente responsable de sus éxitos y fracasos laborales",
incorrectas: [
"Permite culpar a la suerte de la falta de empleo",
"Depende exclusivamente de las decisiones del orientador",
"Evita que el trabajador tenga que tomar decisiones propias"
]
},
{
enunciado: "Los 'test proyectivos' en orientación profesional son menos frecuentes porque:",
correcta: "Su interpretación es subjetiva y requiere formación clínica profunda",
incorrectas: [
"Son muy baratos y fáciles de aplicar de forma masiva",
"Miden con exactitud el nivel de glucemia del alumno",
"Solo pueden realizarse mediante el uso de proyectores de vídeo"
]
},
{
enunciado: "La 'observación participante' como técnica de evaluación permite:",
correcta: "Recoger información sobre el desempeño del alumno en el taller/laboratorio",
incorrectas: [
"Mirar al alumno a través de una cámara oculta sin que lo sepa",
"Analizar los resultados de los análisis de orina del grupo",
"Evaluar la caligrafía en los exámenes teóricos de procesos"
]
},
{
enunciado: "En los Procesos Sanitarios, evaluar la 'destreza manual' es fundamental para:",
correcta: "Determinar la aptitud para tareas de precisión en laboratorio o clínica",
incorrectas: [
"Saber si el alumno puede escribir rápido en el ordenador",
"Evaluar la capacidad de cargar cajas pesadas en el almacén",
"Conocer el nivel de fuerza en las extremidades inferiores"
]
},
{
enunciado: "El 'Balance de Competencias' es un proceso que finaliza con:",
correcta: "Un proyecto de formación o de inserción profesional",
incorrectas: [
"La entrega de una factura por los servicios prestados",
"Una nota numérica que decide el aprobado o suspenso",
"La jubilación forzosa del trabajador evaluado"
]
},
{
enunciado: "¿Qué caracteriza a los 'test de personalidad' (tipo 16PF) en orientación?",
correcta: "Exploran rasgos estables que pueden encajar mejor en ciertos entornos",
incorrectas: [
"Miden la cantidad de conocimientos técnicos sobre sanidad",
"Evalúan la capacidad de memorizar números de teléfono",
"Sirven para diagnosticar enfermedades respiratorias crónicas"
]
},
{
enunciado: "El proceso de 'reconstrucción de la carrera' utiliza técnicas:",
correcta: "Narrativas, donde el sujeto da sentido a su trayectoria",
incorrectas: [
"Estadísticas, basadas en el cálculo de probabilidades de empleo",
"Farmacológicas, para mejorar la memoria a corto plazo",
"De ingeniería, para diseñar itinerarios en formato CAD"
]
},
{
enunciado: "Un 'incidente crítico' en la evaluación del potencial profesional es:",
correcta: "Un suceso real donde el sujeto demostró una competencia o carencia",
incorrectas: [
"Un fallo informático que borra la base de datos de los test",
"Una falta de ortografía grave en el currículum vítae",
"Un accidente de tráfico de camino a una entrevista"
]
},
{
enunciado: "La evaluación de 'conocimientos previos' en autoorientación sirve para:",
correcta: "Identificar qué competencias ya posee el sujeto antes de la formación",
incorrectas: [
"Saber cuántos libros tiene el alumno en su casa",
"Determinar si el alumno sabe usar una cafetera eléctrica",
"Calcular el tiempo que tarda el alumno en llegar al centro"
]
},
{
enunciado: "En el sector sanitario, la evaluación de la 'empatía' se considera:",
correcta: "Una competencia actitudinal esencial para el trato con pacientes",
incorrectas: [
"Un rasgo irrelevante para el trabajo en el laboratorio",
"Una capacidad técnica que se mide con un voltímetro",
"Algo que solo deben poseer los directores de los hospitales"
]
},
{
enunciado: "La 'entrevista de selección simulada' es una técnica que evalúa:",
correcta: "La capacidad de comunicación y autorrepresentación del sujeto",
incorrectas: [
"La resistencia física a estar sentado mucho tiempo",
"El conocimiento de la historia del centro educativo",
"La calidad del papel en el que se imprime el currículum"
]
},
{
enunciado: "Los 'baremos' de un test son necesarios para:",
correcta: "Comparar la puntuación del sujeto con su grupo de referencia",
incorrectas: [
"Pagar las tasas de examen en la oficina bancaria",
"Limpiar el instrumental de los laboratorios de procesos",
"Decidir el número de plazas de parking del centro"
]
},
{
enunciado: "La autoorientación es especialmente útil en la 'Formación Continua' porque:",
correcta: "El trabajador adulto debe liderar su propio reciclaje profesional",
incorrectas: [
"No existen orientadores para personas mayores de 30 años",
"Las empresas prohíben el asesoramiento externo a sus empleados",
"Es la única forma de conseguir aumentos salariales automáticos"
]
},
{
enunciado: "El 'Mapa de Competencias' de un perfil profesional permite:",
correcta: "Visualizar las brechas entre el potencial del sujeto y el puesto ideal",
incorrectas: [
"Localizar geográficamente las empresas en un plano de la ciudad",
"Saber dónde están los extintores en el taller de procesos",
"Dibujar la estructura ósea del cuerpo humano en anatomía"
]
},
{
enunciado: "La técnica de la 'rejilla de Kelly' en orientación explora:",
correcta: "Los constructos personales con los que el sujeto percibe las profesiones",
incorrectas: [
"La resistencia de los materiales de vidrio del laboratorio",
"El número de celdas de una hoja de cálculo administrativa",
"La ventilación de las aulas de formación profesional"
]
},
{
enunciado: "En la evaluación de intereses, un 'perfil plano' indica:",
correcta: "Indiferencia o falta de conocimiento sobre las áreas evaluadas",
incorrectas: [
"Que el alumno es un genio en todas las materias técnicas",
"Que el test se ha corregido de forma errónea por el ordenador",
"Que el sujeto debe abandonar inmediatamente la formación"
]
},
{
enunciado: "Las 'guías de autoayuda' en orientación son recursos para:",
correcta: "Fomentar la autonomía en la toma de decisiones del usuario",
incorrectas: [
"Sustituir la medicación psiquiátrica de los alumnos",
"Aprender a realizar masajes de relajación en el aula",
"Evitar que el orientador tenga que hablar con los alumnos"
]
},
{
enunciado: "¿Qué evalúa el cuestionario IPP-R?",
correcta: "Intereses y preferencias profesionales en diversos campos",
incorrectas: [
"Inteligencia práctica para procesos mecánicos simples",
"Inestabilidad psicopatológica en el entorno familiar",
"Ingresos previstos en los próximos diez años de carrera"
]
},
{
enunciado: "La 'triangulación' en la evaluación del potencial profesional implica:",
correcta: "Usar diferentes técnicas y fuentes para contrastar resultados",
incorrectas: [
"Pedir la opinión de tres familiares distintos del alumno",
"Realizar el mismo test tres veces en el mismo día",
"Dibujar triángulos en las pruebas de aptitud espacial"
]
},
{
enunciado: "La evaluación de 'habilidades digitales' es hoy necesaria para:",
correcta: "Cualquier proceso de búsqueda de información y autoorientación",
incorrectas: [
"Poder jugar a videojuegos durante la jornada laboral",
"Sustituir el instrumental analógico por pantallas táctiles",
"Evitar el uso de papel en todo el centro educativo"
]
},
{
enunciado: "Un 'objetivo profesional' bien definido debe ser:",
correcta: "Específico, medible, alcanzable, relevante y temporal (SMART)",
incorrectas: [
"Vago, ambicioso, imposible, secreto y eterno",
"Decidido por el orientador sin consultar al alumno",
"Basado solo en el deseo de ganar mucho dinero rápido"
]
},
{
enunciado: "En la evaluación de motivaciones, el 'miedo al éxito' se define como:",
correcta: "Evitación de metas altas por temor a las consecuencias sociales",
incorrectas: [
"Fobia a los hospitales y centros de salud pública",
"Ansiedad ante los exámenes tipo test de procesos sanitarios",
"Deseo de fracasar para recibir ayudas económicas públicas"
]
},
{
enunciado: "La 'devolución de resultados' tras una evaluación debe ser:",
correcta: "Comprensible, orientadora y respetuosa con la intimidad",
incorrectas: [
"Publicada en el tablón de anuncios con nombres y apellidos",
"Entregada en un sobre cerrado sin ninguna explicación verbal",
"Utilizada para avergonzar al alumno delante de sus compañeros"
]
},
{
enunciado: "La autoorientación en el ámbito sanitario requiere conocer:",
correcta: "Las exigencias físicas, éticas y de formación del sector",
incorrectas: [
"La biografía detallada de todos los ministros de sanidad",
"El precio de mercado de los edificios de los hospitales",
"La composición química exacta de todos los plásticos"
]
}
];