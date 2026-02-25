'use strict';

var PREGUNTAS = [
{
enunciado: "¿Cómo se define técnicamente el 'techo de cristal' en el ámbito de la orientación profesional y el trabajo?",
correcta: "Barrera invisible que impide a las mujeres alcanzar puestos de alta dirección",
incorrectas: [
"Falta de cualificación técnica de las mujeres en sectores industriales",
"Preferencia voluntaria de las mujeres por puestos de responsabilidad media",
"Normativa legal que prohíbe el acceso femenino a cargos ejecutivos"
]
},
{
enunciado: "En la orientación académica, el fenómeno de la 'segregación horizontal' se refiere a:",
correcta: "Concentración de un sexo en determinados itinerarios o familias profesionales",
incorrectas: [
"Diferencia salarial entre hombres y mujeres en una misma categoría",
"Dificultad de los inmigrantes para acceder a estudios superiores",
"Escasa presencia de minorías étnicas en puestos de representación política"
]
},
{
enunciado: "El concepto de 'currículo oculto' en relación con los prejuicios sexistas implica:",
correcta: "Transmisión implícita de valores y estereotipos en la interacción escolar",
incorrectas: [
"Contenidos de igualdad que se imparten de forma obligatoria por ley",
"Listado de asignaturas optativas relacionadas con la antropología",
"Plan de estudios diseñado específicamente para alumnado extranjero"
]
},
{
enunciado: "¿Qué se entiende por 'discriminación positiva' o acción positiva en el empleo?",
correcta: "Medidas temporales para corregir situaciones de desigualdad patente",
incorrectas: [
"Trato preferente injustificado basado en la simpatía personal",
"Sanción económica a empresas que contratan a personas con discapacidad",
"Obligación de contratar a personal sin la cualificación técnica requerida"
]
},
{
enunciado: "Los estereotipos racistas en la educación suelen manifestarse mediante:",
correcta: "Expectativas de éxito académico sesgadas según el origen étnico",
incorrectas: [
"La enseñanza de múltiples lenguas extranjeras en el centro",
"La inclusión de la historia de otros continentes en el currículo",
"El fomento de la movilidad internacional del alumnado"
]
},
{
enunciado: "Un programa de orientación no discriminatorio debe basarse en el principio de:",
correcta: "Equidad e inclusión desde un enfoque interseccional",
incorrectas: [
"Neutralidad absoluta ignorando las desigualdades de partida",
"Segregación del alumnado por sus capacidades intelectuales",
"Estandarización de las pruebas sin adaptación lingüística"
]
},
{
enunciado: "El concepto de 'interseccionalidad' en la orientación profesional analiza:",
correcta: "Cómo confluyen distintas formas de discriminación (género, etnia, clase)",
incorrectas: [
"La relación entre el centro educativo y las empresas del sector",
"El cruce de datos estadísticos entre diferentes comunidades autónomas",
"La conexión entre los módulos teóricos y las prácticas en empresas"
]
},
{
enunciado: "¿Cuál es el objetivo de los programas 'STEM' dirigidos específicamente a mujeres?",
correcta: "Fomentar la presencia femenina en áreas científicas y tecnológicas",
incorrectas: [
"Orientar a las mujeres hacia profesiones de cuidados y servicios",
"Reducir la carga lectiva de matemáticas para las alumnas",
"Limitar el acceso de los hombres a las facultades de ingeniería"
]
},
{
enunciado: "La 'segregación vertical' en las profesiones sanitarias se observa cuando:",
correcta: "Los hombres ocupan mayoritariamente cargos de gestión y jefaturas",
incorrectas: [
"Hay más mujeres enfermeras que hombres médicos",
"Los pacientes prefieren ser atendidos por personal de su misma etnia",
"Se divide el trabajo entre personal de mañana y personal de tarde"
]
},
{
enunciado: "En la Ley Orgánica 3/2007 para la igualdad efectiva, el 'acoso sexual' se define como:",
correcta: "Cualquier comportamiento verbal o físico de naturaleza sexual que atente contra la dignidad",
incorrectas: [
"La diferencia de criterios técnicos entre dos profesionales",
"La exigencia de puntualidad y rendimiento en el puesto de trabajo",
"El despido de un trabajador por causas económicas justificadas"
]
},
{
enunciado: "Un lenguaje no sexista en los materiales de orientación profesional busca:",
correcta: "Visibilizar a ambos sexos y evitar el uso del masculino como universal neutro",
incorrectas: [
"Sustituir todas las palabras técnicas por términos genéricos",
"Eliminar las referencias a las profesiones sanitarias tradicionales",
"Utilizar únicamente términos extranjeros para evitar el género"
]
},
{
enunciado: "El prejuicio racista 'sutil' o moderno en el ámbito laboral se caracteriza por:",
correcta: "La defensa de valores tradicionales para justificar la exclusión",
incorrectas: [
"La agresión física directa motivada por el odio étnico",
"La prohibición legal de entrada de extranjeros en la empresa",
"El pago de salarios superiores a las minorías étnicas"
]
},
{
enunciado: "¿Qué es el 'suelo pegajoso' (sticky floor) en orientación profesional?",
correcta: "Fuerzas que mantienen a las mujeres en los niveles más bajos de la escala laboral",
incorrectas: [
"Falta de higiene en las instalaciones de los centros de formación",
"Dificultad de los hombres para adaptarse a sectores feminizados",
"Obligación de permanecer muchos años en la misma empresa"
]
},
{
enunciado: "La orientación académica con perspectiva de género debe:",
correcta: "Cuestionar la socialización diferencial que limita las opciones vocacionales",
incorrectas: [
"Imponer cuotas obligatorias de inscripción en cada materia",
"Separar físicamente a hombres y mujeres en el aula",
"Ignorar las diferencias biológicas en la práctica deportiva"
]
},
{
enunciado: "En el ámbito de la FP, los 'sesgos de género' pueden influir en:",
correcta: "La valoración del desempeño y la asignación de tareas en las prácticas",
incorrectas: [
"La temperatura reglamentaria de los laboratorios sanitarios",
"El número de folios permitidos para el examen final",
"La caducidad de los reactivos químicos utilizados"
]
},
{
enunciado: "Los programas de 'mentoring' intercultural en el trabajo sirven para:",
correcta: "Facilitar la acogida y el desarrollo profesional de minorías",
incorrectas: [
"Segregar a los trabajadores según su país de procedencia",
"Evaluar el nivel de religión de los empleados nuevos",
"Evitar que los trabajadores extranjeros hablen su lengua materna"
]
},
{
enunciado: "La 'brecha salarial' se calcula técnicamente como:",
correcta: "Diferencia entre las retribuciones medias de hombres y mujeres",
incorrectas: [
"Suma total de los impuestos pagados por los trabajadores",
"Diferencia entre el salario de un médico y un administrativo",
"Coste total de la formación continua en una empresa"
]
},
{
enunciado: "El 'sesgo de confirmación' en la evaluación psicopedagógica implica:",
correcta: "Atender solo a la información que refuerza nuestro prejuicio previo",
incorrectas: [
"Verificar los datos obtenidos mediante una segunda prueba",
"Pedir la opinión de otros profesionales del departamento",
"Utilizar baremos actualizados para la población de referencia"
]
},
{
enunciado: "Las 'microagresiones' en el entorno educativo se definen como:",
correcta: "Breves y cotidianos desdenes, verbales o no, dirigidos a grupos marginados",
incorrectas: [
"Conflictos graves que terminan en la expulsión del alumno",
"Faltas de ortografía leves en los informes de orientación",
"Pequeños fallos técnicos en los aparatos de laboratorio"
]
},
{
enunciado: "La educación intercultural en los centros de Secundaria pretende:",
correcta: "El reconocimiento mutuo y el enriquecimiento a través de la diversidad",
incorrectas: [
"La asimilación forzosa de las minorías a la cultura mayoritaria",
"La creación de grupos de nivel basados en la nacionalidad",
"El estudio exclusivo de la cultura del país de acogida"
]
},
{
enunciado: "¿Qué es el 'androcentrismo' en la ciencia y la orientación?",
correcta: "Visión del mundo que sitúa al hombre como centro y medida de todas las cosas",
incorrectas: [
"Estudio de las enfermedades que afectan solo a las mujeres",
"Preferencia por las técnicas de orientación de origen europeo",
"Tendencia a utilizar robots en los procesos sanitarios"
]
},
{
enunciado: "La LOPDGDD garantiza en el ámbito laboral el derecho a:",
correcta: "La intimidad frente al uso de dispositivos de videovigilancia y geolocalización",
incorrectas: [
"Compartir los datos médicos de los empleados en redes sociales",
"Grabar las conversaciones privadas de los alumnos sin aviso",
"Vender las bases de datos del alumnado a empresas de marketing"
]
},
{
enunciado: "Un orientador actúa contra el racismo institucional cuando:",
correcta: "Denuncia barreras burocráticas que impiden la escolarización de inmigrantes",
incorrectas: [
"Aplica las normas de admisión de forma rígida sin excepciones",
"Delegar los casos de extranjeros en los servicios sociales externos",
"Solicita la repatriación de alumnos con dificultades de aprendizaje"
]
},
{
enunciado: "En la FP de Procesos Sanitarios, la igualdad de oportunidades requiere:",
correcta: "Eliminar el estereotipo de que la enfermería es una profesión femenina",
incorrectas: [
"Establecer turnos de trabajo diferentes por razón de sexo",
"Prohibir que los hombres manipulen instrumental delicado",
"Exigir más nota de acceso a las mujeres que a los hombres"
]
},
{
enunciado: "El 'Efecto Pigmalión' negativo en alumnos de minorías étnicas provoca:",
correcta: "Una disminución del rendimiento debida a las bajas expectativas del docente",
incorrectas: [
"Un aumento de la motivación por demostrar que el profesor se equivoca",
"La mejora automática de las notas por la presión social",
"La especialización inmediata en materias técnicas complejas"
]
},
{
enunciado: "La conciliación de la vida familiar y laboral debe orientarse como:",
correcta: "Un derecho y responsabilidad compartida por hombres y mujeres (corresponsabilidad)",
incorrectas: [
"Un problema exclusivo de las mujeres que trabajan fuera de casa",
"Un permiso que solo deben solicitar los trabajadores solteros",
"Una ayuda económica que sustituye a las vacaciones anuales"
]
},
{
enunciado: "Un material de orientación 'no sesgado' debe mostrar:",
correcta: "Diversidad de modelos de referencia en todas las profesiones",
incorrectas: [
"Solo personas con éxito económico y prestigio social",
"Únicamente imágenes de hombres trabajando en laboratorios",
"Dibujos abstractos que no representen a seres humanos"
]
},
{
enunciado: "¿Qué es el 'clima social de aula' en relación con la discriminación?",
correcta: "Percepción colectiva sobre el grado de respeto y aceptación de la diferencia",
incorrectas: [
"La temperatura media medida con termómetros de precisión",
"La cantidad de luz natural que entra por las ventanas",
"El número de ordenadores disponibles por cada alumno"
]
},
{
enunciado: "La orientación para la 'justicia social' se define como:",
correcta: "Intervención que busca empoderar a los grupos marginados y cambiar estructuras",
incorrectas: [
"El cumplimiento estricto de las sentencias judiciales de los alumnos",
"La preparación de exámenes de acceso a la carrera de Derecho",
"La gestión de multas de tráfico dentro del centro educativo"
]
},
{
enunciado: "La 'homofobia' y 'transfobia' en el trabajo deben abordarse mediante:",
correcta: "Protocolos de prevención del acoso y planes de igualdad",
incorrectas: [
"La sugerencia de que el trabajador oculte su identidad personal",
"El cambio de centro de trabajo de la persona acosada",
"La ignorancia del conflicto para evitar que escale"
]
},
{
enunciado: "En los procesos de selección, los 'currículums ciegos' pretenden:",
correcta: "Evitar sesgos por género, edad o etnia al eliminar datos identificativos",
incorrectas: [
"Dificultad la lectura por parte del personal de recursos humanos",
"Ocultar la falta de experiencia laboral de los candidatos",
"Seleccionar únicamente a personas con discapacidad visual"
]
},
{
enunciado: "La 'asimilación' como modelo de gestión de la diversidad étnica busca:",
correcta: "Que la minoría abandone su cultura y adopte la de la mayoría",
incorrectas: [
"La convivencia de diferentes culturas en un mismo plano de igualdad",
"El respeto absoluto a las leyes de los países de origen",
"La creación de barrios separados para cada grupo étnico"
]
},
{
enunciado: "Un indicador de racismo en el empleo es el 'empleo precario' concentrado en:",
correcta: "Determinados colectivos inmigrantes con baja protección social",
incorrectas: [
"Directivos de grandes multinacionales extranjeras",
"Funcionarios de carrera de la administración central",
"Personal jubilado con pensiones de nivel alto"
]
},
{
enunciado: "La técnica de la 'biblioteca humana' en orientación sirve para:",
correcta: "Conocer de primera mano experiencias de personas que han roto estereotipos",
incorrectas: [
"Organizar los libros del departamento por orden alfabético",
"Sustituir la conexión a internet por el uso de diccionarios",
"Evaluar la velocidad de lectura del alumnado de secundaria"
]
},
{
enunciado: "La 'brecha digital' de género afecta principalmente a:",
correcta: "El uso avanzado y la creación de tecnología, no solo al acceso básico",
incorrectas: [
"La capacidad física de encender y apagar un ordenador",
"El consumo de redes sociales de entretenimiento y ocio",
"La compra de dispositivos móviles de última generación"
]
},
{
enunciado: "En la orientación profesional, la 'neutralidad' ante la injusticia es criticada porque:",
correcta: "Mantiene el statu quo y perpetúa las desigualdades existentes",
incorrectas: [
"Evita que el orientador tenga problemas con la dirección",
"Es la forma más científica de realizar una evaluación",
"Ahorra tiempo en la redacción de los informes finales"
]
},
{
enunciado: "La mediación intercultural en el centro educativo tiene como fin:",
correcta: "Construir puentes de comunicación y resolver conflictos de valores",
incorrectas: [
"Traducir literalmente los exámenes de procesos sanitarios",
"Vigilar a los alumnos extranjeros durante el recreo",
"Obligar a las familias a cambiar sus creencias religiosas"
]
},
{
enunciado: "El concepto de 'patriarcado' en sociología de la educación se refiere a:",
correcta: "Sistema de organización social donde el varón ejerce el predominio",
incorrectas: [
"La dirección de los centros por parte de personas mayores",
"El estudio de los antepasados en las clases de historia",
"La herencia de las plazas de profesor de padres a hijos"
]
},
{
enunciado: "Los planes de igualdad en las empresas de sanidad son obligatorios para:",
correcta: "Todas las empresas a partir de 50 trabajadores según el RD 6/2019",
incorrectas: [
"Solo los hospitales privados con beneficios anuales altos",
"Únicamente los centros públicos de atención primaria",
"Empresas de nueva creación con menos de 10 empleados"
]
},
{
enunciado: "La 'sensibilización' como técnica de orientación consiste en:",
correcta: "Concienciar sobre una realidad para promover un cambio de actitud",
incorrectas: [
"Aplicar anestesia local antes de una práctica sanitaria",
"Mejorar la resolución de los microscopios del laboratorio",
"Reducir la empatía del personal ante el dolor del paciente"
]
}
];