// 47-actividades-en-el-medio-natural.js

var PREGUNTAS = [
  {
    enunciado: "¿Qué define a las Actividades Físicas en el Medio Natural (AFMN) según la lógica interna de Parlebas?",
    correcta: "Situaciones de incertidumbre procedentes del entorno físico, donde el medio no es estable ni predecible.",
    incorrectas: [
      "Actividades psicomotrices en entornos cerrados donde el control ambiental es absoluto.",
      "Ejercicios de fuerza máxima realizados en gimnasios con aire acondicionado."
    ]
  },
  {
    enunciado: "¿Cuál es el objetivo principal del principio 'Leave No Trace' (No deje rastro) en las actividades escolares en la naturaleza?",
    correcta: "Minimizar el impacto ambiental de la presencia humana para preservar el ecosistema original.",
    incorrectas: [
      "Borrar las huellas de los alumnos para que no se pierdan al intentar regresar.",
      "Asegurarse de que los alumnos no lleven ningún tipo de material deportivo a la salida."
    ]
  },
  {
    enunciado: "En la clasificación de las AFMN, el senderismo se considera una actividad de:",
    correcta: "Baja incertidumbre técnica pero con un fuerte componente de resistencia aeróbica y educación ambiental.",
    incorrectas: [
      "Alta competición extrema donde la velocidad es el único factor de éxito.",
      "Vértigo y riesgo inminente que requiere el uso de cuerdas y arneses de forma obligatoria."
    ]
  },
  {
    enunciado: "En la organización de una salida escolar al medio natural, el 'Ratio' se refiere a:",
    correcta: "La proporción entre el número de alumnos y el número de profesores o monitores responsables para garantizar la seguridad.",
    incorrectas: [
      "La velocidad media a la que debe caminar el grupo para llegar antes del anochecer.",
      "La cantidad de comida por kilo de peso corporal que cada alumno debe llevar en su mochila."
    ]
  },
  {
    enunciado: "Según la LOMLOE, las AFMN contribuyen al currículo de Educación Física promoviendo:",
    correcta: "La conciencia ecológica, el consumo responsable y la gestión de la autonomía en entornos no habituales.",
    incorrectas: [
      "El dominio de la naturaleza mediante el uso de vehículos motorizados de gran potencia.",
      "La memorización de los nombres científicos de todas las rocas del planeta."
    ]
  },
  {
    enunciado: "¿Qué es la 'Gestión del Riesgo' en el contexto de las actividades de aventura?",
    correcta: "El proceso de identificar peligros, evaluar su probabilidad y establecer medidas preventivas para minimizarlos.",
    incorrectas: [
      "Eliminar cualquier posibilidad de movimiento para que nadie pueda tropezar.",
      "Hacer que los alumnos firmen un documento donde aceptan que pueden sufrir daños graves sin que el profesor sea responsable."
    ]
  },
  {
    enunciado: "El concepto de 'Turismo Activo' se diferencia de las AFMN escolares en que:",
    correcta: "Tiene un carácter comercial y recreativo, mientras que las escolares tienen una intencionalidad pedagógica y curricular.",
    incorrectas: [
      "Solo se puede realizar en el extranjero y las escolares solo en el patio del centro.",
      "Requiere que todos los participantes tengan más de 50 años."
    ]
  },
  {
    enunciado: "En una progresión de 'Escalada' escolar, el primer paso didáctico suele ser:",
    correcta: "El juego de trepa en espalderas o muros de baja altura (búlder) con colchonetas de seguridad.",
    incorrectas: [
      "Subir una montaña de 3000 metros el primer día de clase sin cuerda.",
      "Aprender a saltar en paracaídas desde un helicóptero en movimiento."
    ]
  },
  {
    enunciado: "La 'Mochila' en una jornada de senderismo debe cargarse colocando los objetos más pesados:",
    correcta: "Cerca de la espalda y en la zona media-alta para mantener el centro de gravedad equilibrado.",
    incorrectas: [
      "En el fondo de la mochila y lo más lejos posible de los hombros.",
      "Colgando por fuera mediante cuerdas para que se mojen con la lluvia."
    ]
  },
  {
    enunciado: "El sistema de 'Capas' en la vestimenta de montaña busca:",
    correcta: "Gestionar la humedad corporal y mantener la temperatura mediante la combinación de transpiración e hidratación.",
    incorrectas: [
      "Que el alumno parezca un profesional de la moda para salir mejor en las fotos.",
      "Ponerse tanta ropa que el cuerpo no pueda moverse bajo ningún concepto."
    ]
  },
  {
    enunciado: "¿Qué es el 'Riesgo Percibido' frente al 'Riesgo Real'?",
    correcta: "El percibido es la sensación subjetiva de peligro del alumno; el real es la probabilidad objetiva de accidente.",
    incorrectas: [
      "Son exactamente lo mismo y no se pueden diferenciar en la práctica.",
      "El riesgo real solo existe si el profesor se olvida el botiquín en el instituto."
    ]
  },
  {
    enunciado: "Las actividades de 'Aguas Bravas' (Rafting, Piragüismo) requieren didácticamente:",
    correcta: "El uso obligatorio de chaleco salvavidas y casco, además de una prueba previa de natación.",
    incorrectas: [
      "Saber beber agua de río sin filtrar para demostrar resistencia inmunológica.",
      "Realizar la actividad con los ojos vendados para mejorar el equilibrio."
    ]
  },
  {
    enunciado: "En la LOMLOE, las AFMN se vinculan con los 'Objetivos de Desarrollo Sostenible' (ODS) al:",
    correcta: "Fomentar el respeto por la biodiversidad y la acción por el clima.",
    incorrectas: [
      "Enseñar a los alumnos a construir carreteras en parques naturales protegidos.",
      "Promover el uso de plásticos de un solo uso en todas las excursiones."
    ]
  },
  {
    enunciado: "La 'Seguridad Pasiva' en las actividades en la naturaleza incluye:",
    correcta: "El uso de casco, arnés, cuerdas homologadas y el correcto estado del calzado.",
    incorrectas: [
      "La presencia de un helicóptero de rescate sobrevolando al grupo cada cinco minutos.",
      "No moverse del autobús hasta que el profesor dé la orden de bajar."
    ]
  },
  {
    enunciado: "Un contenido fundamental de las AFMN es la 'Interpretación del Paisaje', que consiste en:",
    correcta: "Comprender los elementos geológicos, biológicos y humanos que forman el entorno natural visitado.",
    incorrectas: [
      "Pintar un cuadro al óleo de lo que se está viendo mientras se camina.",
      "Aprender a imitar el sonido de todos los pájaros del bosque."
    ]
  },
  {
    enunciado: "El 'Vivac' es una actividad que consiste en:",
    correcta: "Pernoctar al aire libre utilizando solo el saco de dormir y elementos básicos, sin tiendas de campaña.",
    incorrectas: [
      "Comer exclusivamente frutos secos durante una semana entera.",
      "Correr descalzo por la nieve para fortalecer los vasos sanguíneos."
    ]
  },
  {
    enunciado: "En la planificación de una ruta, el 'MIDE' es un sistema que sirve para:",
    correcta: "Valorar la dificultad de las excursiones basándose en la severidad del medio y el esfuerzo físico.",
    incorrectas: [
      "Medir la altura exacta de los alumnos para saber quién va primero en la fila.",
      "Calcular cuántos litros de sudor perderá el grupo durante la subida."
    ]
  },
  {
    enunciado: "La 'Cabañuelas' o el estudio del tiempo atmosférico en las AFMN permite:",
    correcta: "Anticipar cambios climáticos que puedan comprometer la seguridad de la actividad.",
    incorrectas: [
      "Hacer predicciones mágicas sobre quién va a aprobar el examen final.",
      "Decidir el color de la camiseta que los alumnos deben llevar según el viento."
    ]
  },
  {
    enunciado: "El 'Bicicross' o BTT en el ámbito escolar debe trabajar prioritariamente:",
    correcta: "La técnica de frenado, el equilibrio y el respeto a los senderos señalizados.",
    incorrectas: [
      "La velocidad máxima bajando por trialeras peligrosas sin usar los frenos.",
      "La capacidad de desmontar y montar la bicicleta en menos de diez segundos."
    ]
  },
  {
    enunciado: "La 'Evaluación' de las AFMN según la LOMLOE debe tener en cuenta:",
    correcta: "La actitud colaborativa, el respeto al medio ambiente y la aplicación de medidas de seguridad.",
    incorrectas: [
      "Llegar el primero a la cima de la montaña sin importar el estado de los compañeros.",
      "Tener el equipamiento más caro y moderno del mercado."
    ]
  },
  {
    enunciado: "Un factor de 'Exclusión' en las AFMN que el profesor debe evitar es:",
    correcta: "El coste económico excesivo del material o del transporte que impida la participación de todos.",
    incorrectas: [
      "Que los alumnos tengan que caminar por senderos con piedras sueltas.",
      "Obligar a los alumnos a beber agua de su propia cantimplora."
    ]
  },
  {
    enunciado: "Las 'Actividades de Cuerdas Bajas' (Low Ropes) buscan desarrollar:",
    correcta: "La cohesión grupal, la confianza y la resolución de problemas mediante el apoyo mutuo.",
    incorrectas: [
      "La capacidad de saltar desde un avión sin necesidad de paracaídas.",
      "La fuerza máxima de los dientes al morder una cuerda de cáñamo."
    ]
  },
  {
    enunciado: "¿Qué es la 'Responsabilidad Civil' del docente en una salida al medio natural?",
    correcta: "La obligación legal de responder por los daños sufridos por los alumnos bajo su custodia por negligencia.",
    incorrectas: [
      "La obligación de pagar las multas de tráfico de los padres que acompañan al grupo.",
      "El derecho a gritar a los alumnos si estos no caminan lo suficientemente rápido."
    ]
  },
  {
    enunciado: "En la LOMLOE, la 'Salud' en las AFMN se aborda mediante:",
    correcta: "El bienestar psicofísico derivado del contacto con la naturaleza y la reducción del estrés.",
    incorrectas: [
      "Hacer que los alumnos realicen dietas de ayuno intermitente durante la ruta.",
      "Asegurar que los alumnos no respiren aire puro para no marearse."
    ]
  },
  {
    enunciado: "El 'Espeleísmo' escolar requiere prestar especial atención a:",
    correcta: "La iluminación, el riesgo de hipotermia y la fragilidad del entorno geológico subterráneo.",
    incorrectas: [
      "La velocidad a la que se puede salir corriendo de una cueva si se ve un murciélago.",
      "El uso de perfumes fuertes para ahuyentar a los osos de las cavernas."
    ]
  },
  {
    enunciado: "La 'Transferencia' de las AFMN a la vida cotidiana ocurre cuando el alumno:",
    correcta: "Decide realizar actividades en la naturaleza con su familia o amigos de forma responsable.",
    incorrectas: [
      "Lleva la mochila de montaña para ir a comprar el pan al supermercado.",
      "Duerme en un saco de dormir en el salón de su casa todos los días."
    ]
  },
  {
    enunciado: "Un indicador de 'Competencia Motriz' en el medio natural es:",
    correcta: "La capacidad de adaptar el paso y el equilibrio a diferentes tipos de terreno (barro, roca, arena).",
    incorrectas: [
      "Ser capaz de correr 100 metros en una pista de atletismo perfecta.",
      "Tener un canal de redes sociales con muchas fotos de paisajes de montaña."
    ]
  },
  {
    enunciado: "¿Qué papel juega la 'Cartografía' básica en las AFMN?",
    correcta: "Permite la localización espacial y la planificación de rutas mediante la lectura de curvas de nivel.",
    incorrectas: [
      "Sirve para dibujar mapas de tesoros imaginarios durante la hora de la comida.",
      "Se utiliza para envolver los bocadillos y que no se enfríen con el viento."
    ]
  },
  {
    enunciado: "Las 'Actividades de Deslizamiento' (Esquí, Snowboard) requieren trabajar previamente:",
    correcta: "El equilibrio dinámico, la transferencia de pesos y la técnica de caída segura.",
    incorrectas: [
      "La fuerza máxima de los brazos para empujar la nieve hacia atrás.",
      "La capacidad de cantar canciones populares mientras se baja por la pista."
    ]
  },
  {
    enunciado: "La 'Inclusión' en las AFMN se garantiza cuando el profesor:",
    correcta: "Elige rutas y actividades que se adapten a las capacidades físicas de todo el grupo-clase.",
    incorrectas: [
      "Divide a la clase entre 'fuertes' y 'débiles' y los envía por caminos diferentes.",
      "Hace que los alumnos con discapacidad se queden en el autobús durante toda la jornada."
    ]
  },
  {
    enunciado: "El 'Botiquín' de una salida escolar debe contener obligatoriamente:",
    correcta: "Material de cura básica, antisépticos, guantes y la ficha médica del alumnado.",
    incorrectas: [
      "Comida rápida y refrescos azucarados para casos de hambre extrema.",
      "Libros de texto de todas las asignaturas para estudiar durante los descansos."
    ]
  },
  {
    enunciado: "La 'Metacognición' en este bloque se trabaja pidiendo al alumno que reflexione sobre:",
    correcta: "¿Cómo ha influido el entorno natural en mis sensaciones y en mi relación con el grupo?",
    incorrectas: [
      "¿Cuántas hormigas he pisado sin querer durante la caminata?",
      "¿A qué hora exacta ha salido el sol por detrás de la montaña?"
    ]
  },
  {
    enunciado: "El 'Barranquismo' escolar es una actividad que combina:",
    correcta: "Técnicas de progresión por cauces de ríos (saltos, toboganes, rápel) con un alto componente lúdico.",
    incorrectas: [
      "Correr por el borde de un precipicio sin ningún tipo de protección.",
      "Saltar desde puentes muy altos sobre carreteras con mucho tráfico."
    ]
  },
  {
    enunciado: "La 'Orientación' sin brújula se puede realizar mediante:",
    correcta: "La observación del sol, las estrellas (Polar), el musgo en los árboles o elementos del relieve.",
    incorrectas: [
      "Preguntar a cada pájaro que pase hacia dónde está el norte geográfico.",
      "Lanzar una moneda al aire y seguir la dirección hacia donde caiga."
    ]
  },
  {
    enunciado: "Un factor de seguridad ante el 'Rayo' en una tormenta de montaña es:",
    correcta: "Alejarse de crestas, árboles aislados y objetos metálicos, y adoptar posición de cuclillas.",
    incorrectas: [
      "Correr a máxima velocidad hacia la cima más alta para estar más cerca de las nubes.",
      "Tumbarse totalmente estirado sobre el suelo mojado junto a una valla de metal."
    ]
  },
  {
    enunciado: "La 'Educación en Valores' en la naturaleza implica:",
    correcta: "El apoyo mutuo en los momentos de fatiga y la responsabilidad colectiva sobre el grupo.",
    incorrectas: [
      "Ver quién es capaz de asustar a más animales salvajes durante la ruta.",
      "Dejar toda la basura en el bosque para que los animales tengan comida."
    ]
  },
  {
    enunciado: "El uso de 'GPS' y apps de montaña en clase busca:",
    correcta: "Introducir la tecnología como herramienta de seguridad y apoyo a la navegación responsable.",
    incorrectas: [
      "Que los alumnos no miren nunca el paisaje y se centren solo en la pantalla.",
      "Gastar toda la batería del móvil jugando a videojuegos durante la excursión."
    ]
  },
  {
    enunciado: "La 'Higiene Postural' al caminar con mochila requiere:",
    correcta: "Ajustar correctamente los tirantes y el cinturón lumbar para que el peso recaiga sobre la pelvis.",
    incorrectas: [
      "Llevar la mochila siempre sobre un solo hombro para parecer más moderno.",
      "Ir encorvado hacia adelante para que la mochila no toque la espalda."
    ]
  },
  {
    enunciado: "La 'Situación de Aprendizaje' final de este bloque podría ser:",
    correcta: "El diseño y realización de una jornada de convivencia en la naturaleza organizada por los propios alumnos.",
    incorrectas: [
      "Un examen de 200 preguntas sobre la biografía de los exploradores del siglo XIX.",
      "Hacer que los alumnos limpien el gimnasio del instituto con agua de lluvia."
    ]
  },
  {
    enunciado: "El fin último de las AFMN en el currículo de Secundaria es:",
    correcta: "La formación de ciudadanos capaces de disfrutar del medio natural de forma segura, autónoma y sostenible.",
    incorrectas: [
      "Producir guías de montaña profesionales que trabajen en los Alpes.",
      "Que todos los alumnos se muden a vivir al bosque cuando terminen la ESO."
    ]
  }
];