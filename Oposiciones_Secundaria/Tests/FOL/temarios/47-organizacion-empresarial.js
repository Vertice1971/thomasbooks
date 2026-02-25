'use strict';

var PREGUNTAS = [
{
enunciado: "La organización formal de la empresa es aquella que:",
correcta: "Está establecida oficialmente por la dirección para alcanzar objetivos",
incorrectas: [
"Surge de las relaciones de amistad entre los técnicos de laboratorio",
"Se crea de forma espontánea durante las pausas del café en el centro"
]
},
{
enunciado: "Un organigrama es una representación gráfica que muestra:",
correcta: "La estructura jerárquica y las relaciones de autoridad en la empresa",
incorrectas: [
"La evolución de los ingresos netos del laboratorio en el último año",
"El mapa físico con la ubicación de los diferentes reactivos químicos"
]
},
{
enunciado: "La estructura organizativa 'lineal' o jerárquica se basa en:",
correcta: "La unidad de mando, donde cada subordinado recibe órdenes de un solo jefe",
incorrectas: [
"La ausencia total de jefes, funcionando por autogestión de los técnicos",
"La división de la autoridad entre varios especialistas de igual rango"
]
},
{
enunciado: "En la organización 'staff', su función principal consiste en:",
correcta: "Asesorar y realizar funciones especializadas sin mando directo",
incorrectas: [
"Sustituir a la dirección en la toma de decisiones financieras",
"Realizar las tareas de limpieza y desinfección del material técnico"
]
},
{
enunciado: "La estructura funcional de Taylor se caracteriza por:",
correcta: "La especialización de las tareas, donde un subordinado puede tener varios jefes",
incorrectas: [
"Mantener una jerarquía rígida sin ningún tipo de especialización técnica",
"Prohibir la comunicación entre los técnicos de diferentes departamentos"
]
},
{
enunciado: "La departamentalización consiste en:",
correcta: "Agrupar actividades y personas en unidades organizativas específicas",
incorrectas: [
"Eliminar los puestos de trabajo que no sean estrictamente técnicos",
"Registrar la empresa en diferentes comunidades autónomas a la vez"
]
},
{
enunciado: "Un organigrama de tipo vertical muestra la jerarquía:",
correcta: "De arriba hacia abajo, situando a la dirección en la parte superior",
incorrectas: [
"De izquierda a derecha, enfatizando la igualdad entre técnicos",
"Mediante círculos concéntricos donde el jefe está en el centro"
]
},
{
enunciado: "La estructura matricial combina dos tipos de autoridad:",
correcta: "Por funciones y por proyectos o productos",
incorrectas: [
"Por antigüedad de los técnicos y por nivel de estudios superiores",
"Por horario de entrada al laboratorio y por tipo de contrato"
]
},
{
enunciado: "El tramo de control o de mando se refiere a:",
correcta: "El número de subordinados que un jefe puede supervisar con eficacia",
incorrectas: [
"La superficie total en metros cuadrados del centro de diagnóstico",
"El tiempo máximo que dura una reunión de planificación técnica"
]
},
{
enunciado: "La organización informal se diferencia de la formal en que:",
correcta: "Surge de forma espontánea por intereses comunes o afinidad",
incorrectas: [
"Es la única que aparece reflejada en los manuales de la empresa",
"Está regulada por el convenio colectivo del sector sanitario"
]
},
{
enunciado: "La descentralización de la autoridad implica:",
correcta: "Delegar la toma de decisiones en los niveles inferiores de la jerarquía",
incorrectas: [
"Concentrar todo el poder en la figura del director del laboratorio",
"Obligar a todos los técnicos a trabajar en centros fuera de su provincia"
]
},
{
enunciado: "Un organigrama funcional se organiza según:",
correcta: "Las capacidades o especialidades de cada departamento (marketing, producción, etc.)",
incorrectas: [
"El orden alfabético de los apellidos de la plantilla de técnicos",
"La fecha de adquisición de la maquinaria de análisis clínico"
]
},
{
enunciado: "La 'tecnocracia' en la organización empresarial es el poder de:",
correcta: "Los expertos o técnicos especializados en la toma de decisiones",
incorrectas: [
"Los propietarios del capital que no tienen formación científica",
"Los sindicatos para paralizar la actividad productiva del centro"
]
},
{
enunciado: "En la estructura divisional, la empresa se organiza por:",
correcta: "Productos, áreas geográficas o tipos de clientes",
incorrectas: [
"El sueldo bruto anual que percibe cada categoría profesional",
"El tipo de reactivo químico utilizado en cada proceso técnico"
]
},
{
enunciado: "La unidad de mando es un principio que evita:",
correcta: "La dualidad de órdenes y la confusión en las responsabilidades",
incorrectas: [
"Que el laboratorio pueda contratar a más de un técnico por turno",
"La compra de instrumental técnico a más de un proveedor diferente"
]
},
{
enunciado: "Las nuevas técnicas de organización incluyen el 'outsourcing', que consiste en:",
correcta: "Subcontratar actividades no esenciales a empresas externas",
incorrectas: [
"Incorporar a todos los familiares de los socios al laboratorio",
"Realizar todos los procesos técnicos dentro del propio centro"
]
},
{
enunciado: "El 'downsizing' es una técnica organizativa orientada a:",
correcta: "Reducir el tamaño de la estructura para mejorar la eficiencia",
incorrectas: [
"Aumentar el número de niveles jerárquicos de forma ilimitada",
"Contratar solo a técnicos que midan menos de un metro setenta"
]
},
{
enunciado: "La organización en red (o trébol) se caracteriza por:",
correcta: "Una estructura flexible basada en la colaboración con socios externos",
incorrectas: [
"Tener una jerarquía circular donde nadie tiene responsabilidad final",
"Utilizar exclusivamente redes sociales para la comunicación interna"
]
},
{
enunciado: "La 'reingeniería de procesos' busca:",
correcta: "El rediseño radical de los procesos para lograr mejoras espectaculares",
incorrectas: [
"Arreglar las máquinas de análisis que se han estropeado por el uso",
"Cambiar el nombre comercial del laboratorio cada cinco años"
]
},
{
enunciado: "El enriquecimiento del trabajo (job enrichment) tiene como fin:",
correcta: "Aumentar la responsabilidad y variedad de las tareas para motivar",
incorrectas: [
"Subir el sueldo neto de los técnicos mediante pluses de productividad",
"Reducir el tiempo de descanso entre la realización de cada análisis"
]
},
{
enunciado: "La 'organización plana' se caracteriza por tener:",
correcta: "Pocos niveles jerárquicos y una comunicación más directa",
incorrectas: [
"Todas las oficinas situadas en la planta baja del edificio sanitario",
"Un presupuesto de gastos idéntico para todos los departamentos"
]
},
{
enunciado: "La cultura organizativa es el conjunto de:",
correcta: "Valores, creencias y normas compartidas por los miembros de la empresa",
incorrectas: [
"Libros de medicina y química disponibles en la biblioteca del centro",
"Actividades de ocio que realizan los técnicos fuera del horario laboral"
]
},
{
enunciado: "En la organización formal, la autoridad es:",
correcta: "Delegada desde los niveles superiores hacia los inferiores",
incorrectas: [
"Ganada por el técnico más simpático del grupo de trabajo",
"Prohibida por las leyes de igualdad de oportunidades laborales"
]
},
{
enunciado: "La departamentalización por procesos es común en:",
correcta: "Empresas donde el producto pasa por fases técnicas diferenciadas",
incorrectas: [
"Laboratorios que solo realizan un tipo de análisis muy sencillo",
"Centros sanitarios que no tienen una estructura física definida"
]
},
{
enunciado: "El manual de organización es un documento que:",
correcta: "Describe detalladamente los puestos, funciones y responsabilidades",
incorrectas: [
"Explica el funcionamiento técnico de los microscopios electrónicos",
"Contiene la lista de precios de los servicios de análisis clínicos"
]
},
{
enunciado: "La 'adhocracia' es un modelo organizativo basado en:",
correcta: "Equipos temporales y flexibles para resolver problemas específicos",
incorrectas: [
"El cumplimiento estricto de las normas burocráticas del Estado",
"La herencia del cargo de director de padres a hijos técnicos"
]
},
{
enunciado: "La organización circular sitúa a la máxima autoridad en:",
correcta: "El centro del gráfico",
incorrectas: [
"La parte inferior derecha",
"Un recuadro fuera de la estructura principal"
]
},
{
enunciado: "El empowerment (empoderamiento) consiste en:",
correcta: "Dar a los técnicos autoridad para tomar decisiones en su propio trabajo",
incorrectas: [
"Suministrar más energía eléctrica a las máquinas del laboratorio",
"Obligar a los técnicos a llevar ropa de protección de colores vivos"
]
},
{
enunciado: "Un comité de empresa es un ejemplo de:",
correcta: "Órgano de representación y participación de los trabajadores",
incorrectas: [
"Unidad de mando encargada de la compra de reactivos químicos",
"Estructura informal basada en la práctica del deporte conjunto"
]
},
{
enunciado: "La especialización horizontal se refiere a:",
correcta: "La división del trabajo en tareas simples y repetitivas",
incorrectas: [
"El aumento del número de jefes en el mismo nivel jerárquico",
"La formación de los técnicos en materias de derecho y economía"
]
},
{
enunciado: "La estructura en 'staff' puede generar conflictos si:",
correcta: "Los asesores intentan dar órdenes directas a los jefes de línea",
incorrectas: [
"El laboratorio compra material técnico de segunda mano",
"Los técnicos superiores deciden afiliarse a sindicatos distintos"
]
},
{
enunciado: "Un organigrama horizontal se lee de:",
correcta: "Izquierda a derecha",
incorrectas: [
"Derecha a izquierda empezando por los clientes",
"Abajo hacia arriba partiendo de los técnicos de base"
]
},
{
enunciado: "La centralización es más frecuente en:",
correcta: "Empresas pequeñas con un entorno estable y sencillo",
incorrectas: [
"Grandes multinacionales con centros en cinco continentes",
"Laboratorios de investigación avanzada con tecnología cambiante"
]
},
{
enunciado: "La organización por proyectos es adecuada cuando:",
correcta: "El trabajo es complejo, único y tiene un plazo determinado",
incorrectas: [
"Se realizan análisis rutinarios de orina todos los días del año",
"La empresa solo tiene un técnico contratado a tiempo parcial"
]
},
{
enunciado: "La departamentalización geográfica se utiliza para:",
correcta: "Adaptarse mejor a las necesidades de cada mercado local",
incorrectas: [
"Separar a los técnicos que viven en barrios diferentes de la ciudad",
"Evitar que los reactivos químicos se mezclen con las muestras"
]
},
{
enunciado: "Elton Mayo destacó la importancia de:",
correcta: "Los factores humanos y las relaciones sociales en la organización",
incorrectas: [
"El cronometraje estricto de cada movimiento del técnico en el puesto",
"El uso de la informática para sustituir la gestión administrativa"
]
},
{
enunciado: "La estructura funcional fomenta:",
correcta: "La eficiencia técnica gracias a la especialización por áreas",
incorrectas: [
"La visión global de la empresa por parte de todos los técnicos",
"La rapidez absoluta en la toma de decisiones estratégicas"
]
},
{
enunciado: "El organigrama ayuda a los nuevos empleados a:",
correcta: "Conocer su posición y a quién deben dirigirse para informar",
incorrectas: [
"Saber el código de acceso a la caja fuerte del laboratorio",
"Calcular el importe neto de su primera gratificación de navidad"
]
},
{
enunciado: "La jerarquía empresarial sirve para:",
correcta: "Establecer niveles de responsabilidad y canales de comunicación",
incorrectas: [
"Elegir al técnico que debe realizar las tareas más peligrosas",
"Determinar el orden de entrada al comedor del centro sanitario"
]
},
{
enunciado: "La organización formal se representa mediante:",
correcta: "Organigramas y manuales de funciones",
incorrectas: [
"Fotos de las cenas de empresa y excursiones técnicas",
"La lista de contactos personales en los teléfonos de los técnicos"
]
}
];