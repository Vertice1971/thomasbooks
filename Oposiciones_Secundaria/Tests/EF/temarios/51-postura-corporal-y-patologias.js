// 51-postura-corporal-y-patologias.js

var PREGUNTAS = [
  {
    enunciado: "¿Cómo se define la 'Postura Corporal' desde un punto de vista biomecánico y funcional?",
    correcta: "La disposición relativa de las partes del cuerpo en el espacio que requiere el mínimo esfuerzo muscular y articular para mantener el equilibrio.",
    incorrectas: [
      "La posición rígida e inmóvil que debe adoptar el alumno durante toda la jornada escolar.",
      "La alineación de los segmentos corporales siguiendo estrictamente el eje vertical de la gravedad sin ninguna curva fisiológica."
    ]
  },
  {
    enunciado: "¿Cuál es la función principal de las curvas fisiológicas de la columna vertebral (lordosis y cifosis)?",
    correcta: "Aumentar la resistencia de la columna ante las cargas axiales y favorecer la absorción de impactos.",
    incorrectas: [
      "Permitir que la médula espinal se enrolle sobre sí misma para ocupar menos espacio.",
      "Facilitar la acumulación de grasa en la zona lumbar para proteger los riñones."
    ]
  },
  {
    enunciado: "La 'Hipercifosis' dorsal se caracteriza técnicamente por:",
    correcta: "Un aumento excesivo de la curvatura de convexidad posterior en la zona torácica (comúnmente llamada joroba).",
    incorrectas: [
      "Un desplazamiento lateral de las vértebras con rotación de los cuerpos vertebrales.",
      "La desaparición total de la curva lumbar, dejando la espalda completamente plana."
    ]
  },
  {
    enunciado: "¿Qué diferencia una 'Actitud Escoliótica' de una 'Escoliosis Estructural'?",
    correcta: "La actitud es funcional y desaparece en decúbito; la estructural implica rotación vertebral y deformidad ósea permanente.",
    incorrectas: [
      "La actitud escoliótica solo duele por las mañanas y la estructural duele siempre.",
      "La estructural se cura haciendo gimnasia y la actitud requiere cirugía obligatoria."
    ]
  },
  {
    enunciado: "El 'Test de Adams' es una prueba sencilla utilizada en el entorno escolar para detectar:",
    correcta: "La presencia de una giba costal indicativa de escoliosis estructural al realizar una flexión de tronco.",
    incorrectas: [
      "La fuerza máxima de los extensores de la cadera en adolescentes.",
      "La flexibilidad de los dedos de las manos tras una sesión de escritura."
    ]
  },
  {
    enunciado: "Durante la adolescencia, el 'Pico de Crecimiento' puede provocar desequilibrios postulares debido a:",
    correcta: "El crecimiento óseo longitudinal más rápido que la adaptación de la elasticidad muscular y tendinosa.",
    incorrectas: [
      "La falta de calcio en la dieta por el consumo excesivo de frutas y verduras.",
      "El aumento del peso del cerebro, que desequilibra la posición de la cabeza."
    ]
  },
  {
    enunciado: "La 'Hiperlordosis lumbar' suele estar asociada didácticamente a:",
    correcta: "Una debilidad de la musculatura abdominal y un acortamiento del psoas ilíaco.",
    incorrectas: [
      "Tener los músculos del cuello excesivamente fuertes por cargar la mochila.",
      "Caminar siempre con calzado plano de suela muy blanda."
    ]
  },
  {
    enunciado: "¿Qué se entiende por 'Higiene Postural' en el marco educativo?",
    correcta: "El conjunto de normas y consejos destinados a mantener la alineación correcta del cuerpo en las actividades diarias.",
    incorrectas: [
      "Ducharse tres veces al día para que la piel de la espalda esté siempre limpia.",
      "Dormir siempre boca abajo para estirar las vértebras cervicales."
    ]
  },
  {
    enunciado: "En el transporte de la mochila escolar, se recomienda que su peso no supere el:",
    correcta: "10-15% del peso corporal del alumno.",
    incorrectas: [
      "50% del peso corporal, para fortalecer los músculos del trapecio.",
      "5% del peso corporal, para evitar que el alumno crezca demasiado rápido."
    ]
  },
  {
    enunciado: "La 'Enfermedad de Scheuermann' es una patología postular que consiste en:",
    correcta: "Una hipercifosis juvenil debida al acuñamiento de las vértebras durante el crecimiento.",
    incorrectas: [
      "La inflamación de los cartílagos del pie por usar zapatillas muy estrechas.",
      "Una desviación de la mandíbula que impide hablar correctamente en público."
    ]
  },
  {
    enunciado: "Un ejercicio contraindicado para personas con hiperlordosis lumbar es:",
    correcta: "Realizar elevaciones de piernas extendidas desde decúbito supino (ejercicio de 'V').",
    incorrectas: [
      "El fortalecimiento suave de la musculatura abdominal mediante el 'crunch' invertido.",
      "Estiramientos suaves de la musculatura isquiotibial y el psoas ilíaco."
    ]
  },
  {
    enunciado: "La LOMLOE vincula la postura corporal con el bloque de 'Salud' al fomentar:",
    correcta: "La autoconciencia corporal y la prevención de algias (dolores) en la vida adulta.",
    incorrectas: [
      "La selección de alumnos para modelos de pasarela basándose en su altura.",
      "La obligatoriedad de llevar corsés ortopédicos durante las clases de EF."
    ]
  },
  {
    enunciado: "¿Qué es la 'Cifosis Total' o espalda redonda?",
    correcta: "Una postura compensatoria donde toda la columna presenta una gran curva de convexidad posterior, eliminando la lordosis lumbar.",
    incorrectas: [
      "La capacidad de doblar la espalda hacia atrás hasta tocarse los talones.",
      "Un tipo de baile moderno que requiere estar encorvado todo el tiempo."
    ]
  },
  {
    enunciado: "El músculo 'Serrato Mayor' es fundamental para la postura porque:",
    correcta: "Estabiliza la escápula contra la pared costal, evitando las 'escápulas aladas'.",
    incorrectas: [
      "Permite flexionar la rodilla cuando el alumno está sentado en clase.",
      "Ayuda a cerrar los ojos con fuerza ante una luz muy brillante."
    ]
  },
  {
    enunciado: "En la evaluación postular escolar, la 'Plomada' sirve para:",
    correcta: "Verificar la alineación de los centros articulares en el plano sagital y frontal.",
    incorrectas: [
      "Medir el peso exacto de la mochila para poner una sanción al alumno.",
      "Comprobar si el suelo del pabellón deportivo está totalmente nivelado."
    ]
  },
  {
    enunciado: "La 'Genu Valgo' es una alteración postular de las piernas caracterizada por:",
    correcta: "La aproximación de las rodillas hacia la línea media, formando una 'X'.",
    incorrectas: [
      "La separación excesiva de las rodillas, dejando las piernas en forma de paréntesis ().",
      "Tener una pierna mucho más larga que la otra por un problema de cadera."
    ]
  },
  {
    enunciado: "El 'Core' o zona central es vital para la postura porque:",
    correcta: "Actúa como un cilindro estabilizador que protege la columna y transfiere fuerzas entre trenes.",
    incorrectas: [
      "Es el lugar donde se almacena todo el glucógeno del cuerpo humano.",
      "Permite que el alumno flote mejor cuando realiza natación en la piscina."
    ]
  },
  {
    enunciado: "Una recomendación postular para estar sentado frente al ordenador es:",
    correcta: "Mantener los pies apoyados en el suelo, rodillas a 90° y el borde superior de la pantalla a la altura de los ojos.",
    incorrectas: [
      "Cruzar las piernas siempre hacia el mismo lado para compensar la cadera.",
      "Situar el teclado lo más lejos posible para obligar al tronco a estirarse."
    ]
  },
  {
    enunciado: "La 'Escápula Alada' suele ser signo de:",
    correcta: "Debilidad de la musculatura fijadora de la escápula (serrato y romboides).",
    incorrectas: [
      "Haber nacido con huesos en forma de ala de pájaro en la espalda.",
      "Cargar la mochila escolar utilizando únicamente el asa superior con una mano."
    ]
  },
  {
    enunciado: "El 'Pie Plano' influye en la postura global ya que:",
    correcta: "Altera la cadena cinética ascendente, pudiendo provocar rotaciones internas de rodilla y cadera.",
    incorrectas: [
      "Impide que el alumno pueda llevar calcetines de colores llamativos.",
      "Hace que el cerebro reciba menos oxígeno durante la carrera de resistencia."
    ]
  },
  {
    enunciado: "¿Qué es la 'Cifosis Lumbar'?",
    correcta: "Una inversión patológica de la curva natural (lordosis) de la zona baja de la espalda.",
    incorrectas: [
      "Una técnica de masaje para relajar los músculos del glúteo mayor.",
      "La posición normal de la columna cuando el alumno está saltando."
    ]
  },
  {
    enunciado: "En la didáctica de la EF, los 'Ejercicios de Klapp' son conocidos por:",
    correcta: "Utilizar la posición de cuadrupedia para corregir desviaciones raquídeas eliminando la carga axial.",
    incorrectas: [
      "Ser ejercicios de salto de gran intensidad sobre superficies duras.",
      "Aprender a aplaudir siguiendo el ritmo de una música militar alemana."
    ]
  },
  {
    enunciado: "La 'Retroversión pélvica' produce:",
    correcta: "Una disminución de la curva lumbar (aplanamiento).",
    incorrectas: [
      "Un aumento exagerado de la curva lumbar (hiperlordosis).",
      "Una desviación lateral de la cadera hacia el lado derecho."
    ]
  },
  {
    enunciado: "¿Cómo influye el 'Sedentarismo' en la patología postular adolescente?",
    correcta: "Provoca debilidad muscular generalizada y posturas mantenidas de flexión (uso de pantallas).",
    incorrectas: [
      "Hace que los huesos se vuelvan más pesados y difíciles de mover.",
      "Aumenta la flexibilidad de los ligamentos de forma descontrolada."
    ]
  },
  {
    enunciado: "El 'Genu Varo' se asocia visualmente a:",
    correcta: "Piernas en forma de arco o paréntesis ( ), común en futbolistas o por causas estructurales.",
    incorrectas: [
      "Rodillas que chocan entre sí al caminar por la calle.",
      "Tener los pies excesivamente grandes respecto al resto del cuerpo."
    ]
  },
  {
    enunciado: "En la enseñanza de la postura, la 'Propiocepción' busca:",
    correcta: "Que el alumno sienta la posición de sus articulaciones y sea capaz de corregirse sin espejo.",
    incorrectas: [
      "Que el alumno aprenda el nombre en latín de todas las patologías óseas.",
      "Mejorar la visión nocturna para no tropezar con objetos en la oscuridad."
    ]
  },
  {
    enunciado: "La 'Escoliosis Idiopática' es aquella cuyo origen:",
    correcta: "Es desconocido, apareciendo generalmente durante el estirón puberal.",
    incorrectas: [
      "Se debe exclusivamente a una mala postura al sentarse en el pupitre.",
      "Está causado por el uso de calzado deportivo de mala calidad."
    ]
  },
  {
    enunciado: "Un factor postular de riesgo en el uso de móviles ('Text Neck') es:",
    correcta: "La flexión cervical mantenida, que multiplica la carga real sobre las vértebras del cuello.",
    incorrectas: [
      "La radiación de la pantalla, que debilita el esmalte de los dientes.",
      "El peso del dispositivo, que hace que el brazo se vuelva más largo."
    ]
  },
  {
    enunciado: "La 'Cifosis postural' se diferencia de la estructural en que:",
    correcta: "La postural se corrige mediante la contracción voluntaria de la musculatura extensora.",
    incorrectas: [
      "La postural requiere cirugía plástica y la estructural solo reposo absoluto.",
      "No se diferencian; cualquier curva en la espalda es siempre estructural."
    ]
  },
  {
    enunciado: "En Educación Física, ante un alumno con diagnóstico de escoliosis grave, el profesor debe:",
    correcta: "Seguir las recomendaciones del especialista y adaptar las tareas para evitar cargas axiales excesivas.",
    incorrectas: [
      "Prohibirle cualquier movimiento y obligarle a estar sentado en un banco.",
      "Ignorar el diagnóstico y exigirle el mismo rendimiento que al resto de la clase."
    ]
  },
  {
    enunciado: "Los 'Isquiotibiales' cortos influyen en la postura provocando:",
    correcta: "Una tracción sobre la pelvis que tiende a la retroversión y al aplanamiento lumbar.",
    incorrectas: [
      "Un aumento de la altura del arco plantar del pie izquierdo.",
      "Que los hombros se desplacen hacia adelante y hacia arriba de forma constante."
    ]
  },
  {
    enunciado: "El 'Método Mézières' en posturología se basa en:",
    correcta: "El estiramiento de las cadenas musculares posteriores, que suelen estar en exceso de tensión.",
    incorrectas: [
      "La realización de sprints cortos para fortalecer los tobillos.",
      "Comer alimentos ricos en hierro para que la columna sea más resistente."
    ]
  },
  {
    enunciado: "Una 'Asimetría de hombros' puede ser un signo externo de:",
    correcta: "Escoliosis o un desequilibrio muscular por cargar peso siempre del mismo lado.",
    incorrectas: [
      "Tener un pulmón más grande que el otro debido al entrenamiento.",
      "Haber nacido en un país con una gravedad diferente a la media."
    ]
  },
  {
    enunciado: "La 'Lordosis cervical' fisiológica se pierde en la postura de:",
    correcta: "Rectificación cervical, a menudo por tensión muscular o traumatismos (latigazo cervical).",
    incorrectas: [
      "Extensión máxima del cuello mirando hacia las nubes.",
      "Giro lateral de la cabeza para saludar a un compañero."
    ]
  },
  {
    enunciado: "En la LOMLOE, la evaluación de la postura corporal debe ser:",
    correcta: "Formativa, valorando la integración de hábitos de higiene postular en la práctica física.",
    incorrectas: [
      "Una nota basada en lo recta que el alumno tiene la espalda en el examen.",
      "Sancionadora para aquellos alumnos que tengan desviaciones genéticas."
    ]
  },
  {
    enunciado: "¿Qué es el 'Giba' costal?",
    correcta: "La prominencia de las costillas en un lado de la espalda debido a la rotación vertebral en la escoliosis.",
    incorrectas: [
      "Un tipo de mochila especial que se adapta a la forma de la columna.",
      "La bolsa de agua que algunos deportistas llevan en la espalda para hidratarse."
    ]
  },
  {
    enunciado: "La 'Flexibilidad' es clave para la postura porque:",
    correcta: "Permite el rango de movimiento necesario sin forzar las estructuras articulares fijas.",
    incorrectas: [
      "Hace que los huesos se vuelvan líquidos y se adapten a cualquier silla.",
      "Evita que el alumno sude cuando hace mucho calor en el gimnasio."
    ]
  },
  {
    enunciado: "La postura de 'Cierre' (hombros adelantados, mirada baja) se asocia psicológicamente a:",
    correcta: "Inseguridad, timidez o estados de ánimo depresivos.",
    incorrectas: [
      "Exceso de confianza y ganas de liderar un equipo deportivo.",
      "Tener mucha hambre y sueño al mismo tiempo."
    ]
  },
  {
    enunciado: "Un ejercicio para corregir la hipercifosis dorsal es:",
    correcta: "El fortalecimiento de los erectores espinales y los fijadores de la escápula (romboides).",
    incorrectas: [
      "Realizar 100 abdominales diarios con la espalda muy encorvada.",
      "Llevar un libro sobre la cabeza mientras se camina de puntillas."
    ]
  },
  {
    enunciado: "El fin último de la educación postular en Secundaria es:",
    correcta: "Que el alumno adquiera autonomía para cuidar su salud de forma integral a través del movimiento.",
    incorrectas: [
      "Que todos los alumnos tengan una columna perfectamente recta como una regla.",
      "Eliminar cualquier tipo de dolor físico mediante la inmovilidad absoluta."
    ]
  }
];