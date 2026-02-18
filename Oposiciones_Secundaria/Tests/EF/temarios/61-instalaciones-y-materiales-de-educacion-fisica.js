// 61-instalaciones-y-materiales-de-educacion-fisica.js

var PREGUNTAS = [
  {
    enunciado: "¿Qué normativa técnica regula las condiciones de planificación y diseño de las instalaciones deportivas en España?",
    correcta: "La Normativa sobre Instalaciones Deportivas y para el Esparcimiento (NIDE).",
    incorrectas: [
      "El Reglamento General de Circulación de Bienes Materiales.",
      "La Ley Orgánica de Construcción de Centros Escolares (LOCCE)."
    ]
  },
  {
    enunciado: "En cuanto a la tipología de espacios, ¿qué se considera un 'Espacio Deportivo Convencional'?",
    correcta: "Aquellos construidos para la práctica deportiva con dimensiones y equipamientos reglamentarios (pabellones, pistas polideportivas).",
    incorrectas: [
      "Espacios naturales como bosques o playas utilizados ocasionalmente para el senderismo.",
      "Zonas de recreo infantil con columpios y suelos de caucho blando."
    ]
  },
  {
    enunciado: "¿Cuál es la temperatura ambiental recomendada para un pabellón polideportivo escolar según criterios de confort térmico?",
    correcta: "Entre 17°C y 23°C, dependiendo de la intensidad de la actividad física.",
    incorrectas: [
      "Siempre por encima de los 30°C para favorecer la sudoración y la pérdida de grasa.",
      "Entre 5°C y 10°C para asegurar que los alumnos no dejen de moverse por el frío."
    ]
  },
  {
    enunciado: "En la gestión de materiales, el material 'Inventariable' se define como aquel que:",
    correcta: "Tiene una vida útil prolongada y debe estar registrado en el inventario del centro (ej. porterías, espalderas).",
    incorrectas: [
      "Se consume o se rompe con un solo uso (ej. cinta de señalización o volantes de bádminton).",
      "Es propiedad exclusiva de los alumnos y no del centro educativo."
    ]
  },
  {
    enunciado: "¿Qué ventaja pedagógica principal aporta la 'Autoconstrucción de Materiales'?",
    correcta: "Fomenta la creatividad, el consumo responsable y la personalización del recurso según las necesidades del alumno.",
    incorrectas: [
      "Evita que el Ministerio de Educación tenga que invertir dinero en las instalaciones públicas.",
      "Garantiza que el material sea irrompible y cumpla con todas las normativas de alta competición."
    ]
  },
  {
    enunciado: "Un criterio de seguridad básico en el equipamiento fijo (como canastas o porterías) es:",
    correcta: "La obligación de contar con sistemas de anclaje antivuelco certificados para evitar accidentes por colapso.",
    incorrectas: [
      "Que estén fabricados siempre en madera de pino para que pesen menos.",
      "Que no tengan ningún tipo de red para evitar que los alumnos se cuelguen de ellas."
    ]
  },
  {
    enunciado: "¿Qué es un 'Espacio Auxiliar' en una instalación deportiva?",
    correcta: "Zonas necesarias para el funcionamiento pero no destinadas directamente a la práctica (vestuarios, almacenes, enfermería).",
    incorrectas: [
      "La pista de atletismo que rodea al campo de fútbol principal.",
      "El espacio que queda entre la línea de banda y la pared del gimnasio."
    ]
  },
  {
    enunciado: "La 'Polivalencia' de una instalación se refiere a:",
    correcta: "La capacidad del espacio para albergar diferentes tipos de actividades físico-deportivas mediante adaptaciones mínimas.",
    incorrectas: [
      "El precio total de la construcción dividido por el número de alumnos del centro.",
      "La obligatoriedad de que todas las paredes sean de cristal para ver el exterior."
    ]
  },
  {
    enunciado: "En la organización del almacén de Educación Física, el criterio de 'Accesibilidad' busca:",
    correcta: "Que el material de uso frecuente esté situado en zonas de fácil alcance para optimizar el tiempo de clase.",
    incorrectas: [
      "Que solo el profesor tenga la llave para que nadie pueda usar el material sin su permiso.",
      "Guardar los balones en las estanterías más altas para que los alumnos no los cojan."
    ]
  },
  {
    enunciado: "El material 'No Convencional' en Educación Física es aquel que:",
    correcta: "No ha sido diseñado específicamente para el deporte pero tiene un alto valor didáctico (frisbees de cartón, globos, periódicos).",
    incorrectas: [
      "Cumple estrictamente con las medidas de la Federación Internacional de Atletismo.",
      "Está prohibido usarlo por riesgo de alergias cutáneas en el alumnado."
    ]
  },
  {
    enunciado: "¿Cuál es la función de las 'Normas de Uso' de las instalaciones?",
    correcta: "Garantizar la seguridad de los usuarios, la higiene y la conservación del material y el espacio.",
    incorrectas: [
      "Limitar el acceso solo a los alumnos que tengan mejores notas en matemáticas.",
      "Obligar a los alumnos a pagar una cuota extra cada vez que entren al pabellón."
    ]
  },
  {
    enunciado: "En el diseño de un gimnasio escolar, la 'Iluminación' debe evitar:",
    correcta: "El deslumbramiento directo mediante el uso de luminarias con difusores y una disposición cenital adecuada.",
    incorrectas: [
      "La luz natural, ya que distrae a los alumnos durante las explicaciones del profesor.",
      "El uso de bombillas LED por su baja eficiencia energética en espacios grandes."
    ]
  },
  {
    enunciado: "¿Qué material es ideal para la autoconstrucción de unas 'Indiacas'?",
    correcta: "Gomaespuma, telas recicladas, bolsas de plástico y plumas o cintas de colores.",
    incorrectas: [
      "Cemento Portland y varillas de hierro para que pesen y vuelen más lejos.",
      "Componentes electrónicos de ordenadores viejos para medir la velocidad de vuelo."
    ]
  },
  {
    enunciado: "El 'Mantenimiento Preventivo' de las instalaciones consiste en:",
    correcta: "Revisiones periódicas programadas para detectar desgastes antes de que se produzca una rotura o accidente.",
    incorrectas: [
      "Reparar el material solo cuando ya ha causado una lesión grave a un estudiante.",
      "Limpiar el suelo una vez al año coincidiendo con el final del curso escolar."
    ]
  },
  {
    enunciado: "¿Qué característica debe tener el pavimento de una pista polideportiva de interior?",
    correcta: "Debe ofrecer un equilibrio adecuado entre adherencia y capacidad de deslizamiento, además de absorción de impactos.",
    incorrectas: [
      "Debe ser de mármol pulido para facilitar la limpieza y dar una imagen de lujo.",
      "Debe ser de arena fina para simular las condiciones de una playa natural."
    ]
  },
  {
    enunciado: "La 'Barreras Arquitectónicas' en una instalación deportiva son:",
    correcta: "Obstáculos físicos que impiden el acceso o uso de la instalación a personas con movilidad reducida.",
    incorrectas: [
      "Las vallas que se utilizan en las pruebas de atletismo de 110 metros.",
      "Las paredes del pabellón que impiden que los balones se pierdan en la calle."
    ]
  },
  {
    enunciado: "Un ejemplo de material 'Socio-afectivo' sería:",
    correcta: "Aquel que por sus características obliga a la cooperación o comunicación (ej. un paracaídas gigante).",
    incorrectas: [
      "Un cronómetro individual que mide las pulsaciones de forma privada.",
      "Una raqueta de tenis profesional diseñada para el juego individual de alta intensidad."
    ]
  },
  {
    enunciado: "¿Cómo influye el material en la 'Unidad Didáctica'?",
    correcta: "Es un recurso mediador que condiciona las estrategias de enseñanza y el tipo de tareas propuestas.",
    incorrectas: [
      "Es un elemento irrelevante, ya que el aprendizaje solo depende de la voz del profesor.",
      "Solo sirve para que los alumnos estén entretenidos mientras el profesor rellena papeles."
    ]
  },
  {
    enunciado: "La 'Seguridad Pasiva' en las instalaciones escolares incluye:",
    correcta: "Protecciones acolchadas en columnas, esquinas redondeadas y vidrios de seguridad.",
    incorrectas: [
      "La presencia de un guardia de seguridad armado en la puerta del vestuario.",
      "La prohibición de correr dentro del pabellón bajo cualquier circunstancia."
    ]
  },
  {
    enunciado: "En la autoconstrucción, los 'Zancos' se pueden fabricar de forma segura con:",
    correcta: "Botes de conserva resistentes (metálicos) y cuerdas de nylon ajustadas a la altura del alumno.",
    incorrectas: [
      "Cristales de botellas pegados con pegamento fuerte para dar estabilidad.",
      "Ramas secas de árboles que se encuentren tiradas por el suelo del patio."
    ]
  },
  {
    enunciado: "El concepto de 'Sostenibilidad' aplicado a materiales deportivos implica:",
    correcta: "Priorizar materiales duraderos, reparables y fabricados con procesos poco contaminantes.",
    incorrectas: [
      "Tirar todo el material viejo al contenedor de basura normal cada dos años.",
      "Comprar siempre el material más barato aunque se rompa a la semana de uso."
    ]
  },
  {
    enunciado: "¿Qué es el 'Espacio de Juego' propiamente dicho?",
    correcta: "La superficie delimitada por las líneas de marca donde se desarrolla la actividad principal.",
    incorrectas: [
      "Toda la superficie del municipio, incluyendo parques y carreteras.",
      "La zona de las gradas donde se sientan los espectadores a mirar."
    ]
  },
  {
    enunciado: "El 'Material Fungible' en el departamento de EF es aquel que:",
    correcta: "Se desgasta o agota con el uso cotidiano y requiere reposición periódica (pelotas de tenis, tizas, petos).",
    incorrectas: [
      "Nunca se rompe ni se gasta, durando siglos en perfecto estado.",
      "Es tan caro que solo se puede usar una vez cada diez años."
    ]
  },
  {
    enunciado: "Un criterio de 'Calidad' en el material autoconstruido es:",
    correcta: "La funcionalidad motriz; que el objeto realmente sirva para el propósito físico diseñado.",
    incorrectas: [
      "Que parezca comprado en una tienda de deportes profesional de lujo.",
      "Que esté pintado de color oro para que parezca un trofeo de verdad."
    ]
  },
  {
    enunciado: "La ventilación en un gimnasio debe garantizar:",
    correcta: "La renovación constante del aire para eliminar el exceso de CO2 y la humedad por transpiración.",
    incorrectas: [
      "Que no entre nada de aire del exterior para mantener el olor a sudor característico.",
      "Una corriente de aire tan fuerte que los alumnos salgan volando si saltan."
    ]
  },
  {
    enunciado: "¿Qué se debe verificar en las colchonetas de gimnasia?",
    correcta: "Su capacidad de absorción de impactos y que la superficie sea antideslizante y fácil de limpiar.",
    incorrectas: [
      "Que sean lo suficientemente duras como para poder escribir encima de ellas.",
      "Que tengan un motor eléctrico para que se muevan solas por el pabellón."
    ]
  },
  {
    enunciado: "El uso de 'Recursos Comunitarios' fuera del centro (piscinas municipales, parques) permite:",
    correcta: "Ampliar el currículo con actividades que el centro no puede ofrecer por falta de infraestructura propia.",
    incorrectas: [
      "Que el profesor trabaje menos horas al delegar su responsabilidad en los monitores municipales.",
      "Ahorrar en el pago de la factura de la luz del centro escolar."
    ]
  },
  {
    enunciado: "En la gestión de espacios, la 'Disponibilidad' se refiere a:",
    correcta: "El cuadrante de horas y días en los que la instalación puede ser utilizada por los diferentes grupos.",
    incorrectas: [
      "La cantidad de dinero que hay en la cuenta del banco para comprar balones nuevos.",
      "La voluntad de los alumnos para querer entrar al gimnasio voluntariamente."
    ]
  },
  {
    enunciado: "Para construir un 'Stick de Floorball' casero se suele utilizar:",
    correcta: "Tubos de PVC rígido para el mango y cartón grueso o plástico para la pala.",
    incorrectas: [
      "Palos de escoba de madera astillada y piedras afiladas en la punta.",
      "Cables eléctricos trenzados para que el stick sea totalmente flexible."
    ]
  },
  {
    enunciado: "La 'Higiene' en el equipamiento de Educación Física exige:",
    correcta: "La limpieza periódica de materiales de contacto (colchonetas, petos) para evitar infecciones o malos olores.",
    incorrectas: [
      "Prohibir que los alumnos suden mientras utilizan el material del centro.",
      "Bañar los balones de baloncesto en perfume de rosas cada mañana."
    ]
  },
  {
    enunciado: "¿Qué es la 'Zonificación' de una instalación?",
    correcta: "La distribución de las diferentes áreas según su uso (zona de saltos, zona de juegos, zona de raquetas).",
    incorrectas: [
      "Pintar cada pared del gimnasio de un color diferente según el signo del zodiaco.",
      "Dividir a los alumnos por barrios según donde vivan dentro del municipio."
    ]
  },
  {
    enunciado: "Un riesgo asociado al 'Material Autoconstruido' que se debe vigilar es:",
    correcta: "La presencia de elementos cortantes, astillas o piezas pequeñas que puedan desprenderse.",
    incorrectas: [
      "Que el material sea tan bonito que los alumnos no quieran usarlo para no estropearlo.",
      "Que el material aprenda a hablar y distraiga a los alumnos durante la clase."
    ]
  },
  {
    enunciado: "En la LOMLOE, el uso de 'Espacios No Convencionales' busca:",
    correcta: "Conectar el aprendizaje con la realidad del entorno y fomentar el ocio activo en espacios públicos.",
    incorrectas: [
      "Hacer que los alumnos limpien las calles del municipio durante la hora de clase.",
      "Evitar que los alumnos entren al gimnasio para no desgastar el suelo."
    ]
  },
  {
    enunciado: "¿Qué función tienen las 'Líneas de Señalización' en una pista polideportiva?",
    correcta: "Delimitar los terrenos de juego de diferentes deportes mediante códigos de colores normalizados.",
    incorrectas: [
      "Decorar el suelo para que no parezca tan vacío y aburrido.",
      "Indicar el camino de salida en caso de que un alumno se pierda dentro del gimnasio."
    ]
  },
  {
    enunciado: "La 'Acústica' de un pabellón debe permitir:",
    correcta: "Una buena inteligibilidad de la voz del profesor sin ecos excesivos ni reverberación molesta.",
    incorrectas: [
      "Que se escuche la música de la calle para que los alumnos estén más motivados.",
      "Que el ruido de los balones sea lo más fuerte posible para asustar al equipo rival."
    ]
  },
  {
    enunciado: "Un 'Almacén Didáctico' es aquel que:",
    correcta: "Permite a los alumnos participar de forma ordenada en la recogida y cuidado del material.",
    incorrectas: [
      "Está lleno de libros de texto sobre cómo inflar balones correctamente.",
      "Es tan pequeño que no cabe ni una sola pelota de ping-pong."
    ]
  },
  {
    enunciado: "Para fabricar 'Pesas' o 'Mancuernas' caseras se pueden usar:",
    correcta: "Botellas de plástico rellenas de arena, agua o piedras pequeñas con el peso nivelado.",
    incorrectas: [
      "Bolsas de papel llenas de aire para que no pesen nada pero parezcan grandes.",
      "Cuchillos y tenedores atados con una cuerda fina de algodón."
    ]
  },
  {
    enunciado: "El 'Seguro de Responsabilidad Civil' en instalaciones deportivas cubre:",
    correcta: "Los posibles daños a terceros derivados de defectos en la instalación o gestión del espacio.",
    incorrectas: [
      "La compra de zapatillas nuevas a los alumnos que se las olviden en casa.",
      "El pago de las vacaciones del profesor si este se siente cansado."
    ]
  },
  {
    enunciado: "La 'Señalética de Emergencia' debe ser:",
    correcta: "Fotoluminiscente y estar situada en lugares visibles para guiar la evacuación en caso de fallo eléctrico.",
    incorrectas: [
      "Invisible para no asustar a los alumnos con la posibilidad de un incendio.",
      "Escrita a mano con un lápiz muy fino sobre las paredes del fondo."
    ]
  },
  {
    enunciado: "El fin último de una buena gestión de instalaciones y materiales es:",
    correcta: "Ofrecer un entorno seguro, motivador y variado que facilite el desarrollo integral del alumno.",
    incorrectas: [
      "Tener el almacén más ordenado del mundo aunque nunca se use el material.",
      "Conseguir que los alumnos no toquen nada para que la instalación dure para siempre."
    ]
  }
];