'use strict';

var PREGUNTAS = [
{
enunciado: "¿Cómo define la OMS la 'discapacidad' en su Clasificación Internacional del Funcionamiento (CIF)?",
correcta: "Resultado de la interacción entre personas con deficiencias y las barreras del entorno",
incorrectas: [
"Enfermedad crónica que impide cualquier tipo de actividad física",
"Situación de dependencia económica absoluta del sistema público"
]
},
{
enunciado: "Las Necesidades Educativas Especiales (NEE) se identifican mediante:",
correcta: "La Evaluación Psicopedagógica y el Dictamen de Escolarización",
incorrectas: [
"El examen médico de ingreso en la empresa sanitaria",
"Una encuesta de satisfacción realizada a la familia"
]
},
{
enunciado: "¿Qué es una 'Adaptación Curricular Significativa' (ACNS)?",
correcta: "Modificación de elementos prescriptivos del currículo, como objetivos y contenidos",
incorrectas: [
"Cambio del horario de entrada y salida del centro educativo",
"Uso de materiales didácticos de diferentes colores en el aula"
]
},
{
enunciado: "El 'Empleo con Apoyo' es un modelo de inserción que consiste en:",
correcta: "Acompañamiento individualizado por un preparador laboral en el puesto ordinario",
incorrectas: [
"Subvencionar el transporte público para llegar al centro de trabajo",
"Crear puestos de trabajo específicos en centros segregados"
]
},
{
enunciado: "Un 'Centro Especial de Empleo' (CEE) se caracteriza por tener una plantilla de:",
correcta: "Al menos el 70% de trabajadores con una discapacidad igual o superior al 33%",
incorrectas: [
"Un 10% de personas con discapacidad física exclusivamente",
"Personal jubilado que desea seguir trabajando voluntariamente"
]
},
{
enunciado: "La 'Cuota de Reserva' en empresas de más de 50 trabajadores obliga a contratar a:",
correcta: "Un 2% de personal con discapacidad (o aplicar medidas alternativas)",
incorrectas: [
"Un 50% de mujeres en puestos de alta dirección técnica",
"Un 5% de becarios menores de 18 años sin experiencia"
]
},
{
enunciado: "El concepto de 'Diseño Universal para el Aprendizaje' (DUA) busca:",
correcta: "Crear entornos y materiales accesibles para todo el alumnado desde el inicio",
incorrectas: [
"Diseñar exámenes diferentes para cada alumno según su nombre",
"Construir centros educativos con una arquitectura única europea"
]
},
{
enunciado: "En la orientación profesional, la 'Accesibilidad Cognitiva' implica:",
correcta: "Hacer la información y los entornos fáciles de comprender (Lectura Fácil)",
incorrectas: [
"Evaluar solo la inteligencia lógica de los aspirantes al puesto",
"Prohibir el uso de tecnología compleja en los laboratorios"
]
},
{
enunciado: "Un 'ajuste razonable' en el lugar de trabajo es:",
correcta: "Modificación necesaria y adecuada que no imponga una carga desproporcionada",
incorrectas: [
"Cambio total de la estructura del edificio por deseo del trabajador",
"Aumento del salario del empleado por encima del convenio"
]
},
{
enunciado: "¿Qué función cumple el 'Preparador Laboral'?",
correcta: "Facilitar la adaptación del trabajador y mediar con el entorno laboral",
incorrectas: [
"Realizar las tareas técnicas en lugar de la persona con discapacidad",
"Vigilar el cumplimiento del horario y sancionar las faltas"
]
},
{
enunciado: "La 'Educación Inclusiva' se diferencia de la Integración en que:",
correcta: "El sistema se adapta a la diversidad de todo el alumnado, no al revés",
incorrectas: [
"Los alumnos con NEE estudian en aulas separadas permanentemente",
"No se permiten apoyos específicos dentro del aula ordinaria"
]
},
{
enunciado: "Los 'Servicios de Ajuste Personal y Social' son propios de:",
correcta: "Los Centros Especiales de Empleo para ayudar a la integración",
incorrectas: [
"Las grandes superficies comerciales para la atención al cliente",
"Los gimnasios municipales destinados a la rehabilitación física"
]
},
{
enunciado: "Un apoyo específico de tipo 'tecnológico' para la orientación es:",
correcta: "Software de comunicación aumentativa o periféricos adaptados",
incorrectas: [
"Un teléfono móvil convencional sin ninguna aplicación extra",
"Un reloj de pulsera con alarma sonora estándar"
]
},
{
enunciado: "La 'Discapacidad Intelectual' en orientación requiere enfoques basados en:",
correcta: "La autodeterminación y la planificación centrada en la persona",
incorrectas: [
"El diagnóstico médico clínico como única guía de actuación",
"La exclusión de cualquier meta profesional de nivel técnico"
]
},
{
enunciado: "Las 'Enclaves Laborales' consisten en:",
correcta: "Grupos de trabajadores de un CEE que realizan su labor en una empresa ordinaria",
incorrectas: [
"Zonas geográficas donde está prohibido construir fábricas",
"Contratos de formación para personas sin estudios primarios"
]
},
{
enunciado: "En el sector sanitario, un apoyo para una persona con discapacidad sensorial sería:",
correcta: "Señalética en braille, avisos visuales o bucles magnéticos",
incorrectas: [
"Uso de uniformes de colores llamativos para todo el personal",
"Prohibición de entrada de perros guía en las zonas comunes"
]
},
{
enunciado: "La 'Orientación Individualizada' para alumnado con NEAE debe ser:",
correcta: "Intensa, continua y coordinada con servicios externos y familia",
incorrectas: [
"Breve y limitada exclusivamente al ámbito académico teórico",
"Realizada por personal sin formación específica en discapacidad"
]
},
{
enunciado: "El 'Certificado de Discapacidad' es el documento legal que:",
correcta: "Acredita un grado de discapacidad igual o superior al 33%",
incorrectas: [
"Permite conducir cualquier tipo de vehículo sin examen previo",
"Exime al trabajador de cumplir con las normas de seguridad"
]
},
{
enunciado: "La 'Transición a la Vida Adulta' (TVA) es una etapa que busca:",
correcta: "Fomentar la autonomía personal y la integración social y laboral",
incorrectas: [
"Prolongar la infancia de los alumnos en centros cerrados",
"Preparar exclusivamente para el acceso a la universidad"
]
},
{
enunciado: "La 'Discriminación Positiva' en el empleo se refiere a:",
correcta: "Medidas que favorecen a colectivos infrarepresentados para lograr la igualdad real",
incorrectas: [
"Dar mejores notas a los alumnos con discapacidad sin evaluarles",
"Obligar a las empresas a pagar menos impuestos si no contratan a nadie"
]
},
{
enunciado: "¿Qué es el 'Enfoque de Capacidades' en la orientación profesional?",
correcta: "Centrarse en lo que la persona puede hacer y en sus fortalezas",
incorrectas: [
"Analizar solo los fallos y limitaciones que presenta el sujeto",
"Medir el volumen de carga física que puede soportar un operario"
]
},
{
enunciado: "El apoyo de tipo 'Natural' en el puesto de trabajo es aquel que:",
correcta: "Proviene de los propios compañeros y jefes del entorno ordinario",
incorrectas: [
"Se compra en tiendas especializadas de ortopedia técnica",
"Es impuesto por un juez mediante una sentencia laboral"
]
},
{
enunciado: "La 'Doble Discriminación' suele afectar en el mercado laboral a:",
correcta: "Mujeres con discapacidad",
incorrectas: [
"Hombres con titulación superior y experiencia previa",
"Jóvenes menores de 25 años con buena salud física"
]
},
{
enunciado: "Los 'Planes Individualizados de Empleo' (PIE) contemplan:",
correcta: "Itinerarios adaptados con objetivos y apoyos específicos",
incorrectas: [
"Sueldos fijos de por vida independientemente del trabajo realizado",
"La obligación de vivir en la misma empresa donde se trabaja"
]
},
{
enunciado: "Una barrera 'arquitectónica' en un laboratorio de procesos sanitarios sería:",
correcta: "Mesas de trabajo a una altura no regulable para sillas de ruedas",
incorrectas: [
"La falta de actualización del software de gestión de muestras",
"El exceso de luz natural que entra por los ventanales altos"
]
},
{
enunciado: "La 'Autogestión' en personas con discapacidad promueve:",
correcta: "La capacidad de defender sus propios derechos y tomar decisiones",
incorrectas: [
"Que cada persona se fabrique sus propias herramientas de trabajo",
"La eliminación de cualquier tipo de ayuda o apoyo externo"
]
},
{
enunciado: "El 'Servicio de Orientación y Acompañamiento a la Inserción' (SOAI) ofrece:",
correcta: "Asesoramiento especializado para colectivos con dificultades",
incorrectas: [
"Venta de prótesis y material sanitario a domicilio",
"Cursos de vacaciones para familiares de trabajadores"
]
},
{
enunciado: "La 'Formación Profesional Básica' para alumnos con NEE incluye:",
correcta: "Módulos profesionales y de comunicación y sociedad adaptados",
incorrectas: [
"Solo materias teóricas sin ninguna práctica en empresas",
"Exclusivamente el aprendizaje de un idioma extranjero"
]
},
{
enunciado: "El 'Protocolo de Acogida' en la empresa para una persona con discapacidad debe:",
correcta: "Sensibilizar al equipo y prever los apoyos necesarios",
incorrectas: [
"Mantener en secreto la discapacidad para evitar comentarios",
"Asignar las tareas más pesadas para probar la resistencia"
]
},
{
enunciado: "La 'Discapacidad Orgánica' se refiere a la producida por:",
correcta: "Fallo en órganos internos (corazón, riñón, pulmón) que limita la vida",
incorrectas: [
"Lesiones visibles en las extremidades superiores e inferiores",
"Problemas derivados de la alimentación no ecológica"
]
},
{
enunciado: "Un 'indicador de éxito' en la orientación para el empleo de NEE es:",
correcta: "El mantenimiento del puesto de trabajo a largo plazo",
incorrectas: [
"El número de entrevistas realizadas sin conseguir contratación",
"La cantidad de folletos recogidos en la feria de empleo"
]
},
{
enunciado: "La 'Pre-talleres' en centros de educación especial buscan:",
correcta: "Adquirir hábitos laborales básicos y destrezas manipulativas",
incorrectas: [
"Fabricar productos para la venta directa en mercados ilegales",
"Sustituir el horario escolar por el horario de una fábrica"
]
},
{
enunciado: "La 'Intervención Sistémica' en discapacidad involucra a:",
correcta: "El individuo, su familia, el centro educativo y la empresa",
incorrectas: [
"Únicamente al médico especialista que trata la deficiencia",
"Solo al alumno, ignorando el entorno social y laboral"
]
},
{
enunciado: "El 'Estatuto de los Trabajadores' protege a las personas con discapacidad ante:",
correcta: "El despido motivado exclusivamente por razón de discapacidad",
incorrectas: [
"Cualquier tipo de sanción por bajo rendimiento injustificado",
"La obligación de cumplir con el horario general de la empresa"
]
},
{
enunciado: "La 'Estimulación Multisensorial' es un apoyo utilizado con:",
correcta: "Alumnado con grandes necesidades de apoyo o pluridiscapacidad",
incorrectas: [
"Estudiantes de alto rendimiento con inteligencia superior",
"Profesionales que ya han finalizado su etapa formativa"
]
},
{
enunciado: "Un 'Ayudante de Laboratorio' con NEE puede necesitar:",
correcta: "Pictogramas en los botes de reactivos y guías de pasos visuales",
incorrectas: [
"Realizar las mezclas químicas sin usar guantes ni protección",
"Trabajar solo y sin supervisión en el turno de noche"
]
},
{
enunciado: "La 'Red de apoyo social' es fundamental para:",
correcta: "Evitar el aislamiento y fomentar la participación comunitaria",
incorrectas: [
"Conseguir dinero prestado sin tener que trabajar nunca",
"Sustituir la formación oficial por charlas informales"
]
},
{
enunciado: "La 'Vida Independiente' para personas con discapacidad se apoya en:",
correcta: "La figura del asistente personal y la eliminación de barreras",
incorrectas: [
"El ingreso obligatorio en residencias de carácter cerrado",
"La dependencia total de los padres durante toda la vida"
]
},
{
enunciado: "La 'Evaluación de Riesgos Laborales' adaptada debe considerar:",
correcta: "La interacción de la deficiencia específica con los peligros del puesto",
incorrectas: [
"El aumento de las primas de seguro de forma discriminatoria",
"La exclusión del trabajador de cualquier zona con maquinaria"
]
},
{
enunciado: "La orientación profesional para personas con NEE finaliza cuando:",
correcta: "Se logra la estabilidad laboral y la autonomía en el puesto",
incorrectas: [
"Se entrega el primer currículum en una oficina de empleo",
"El alumno cumple los 18 años independientemente de su situación"
]
}
];