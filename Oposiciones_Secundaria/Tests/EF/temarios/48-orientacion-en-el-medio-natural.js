// 48-orientacion-en-el-medio-natural.js

var PREGUNTAS = [
  {
    enunciado: "¿Qué representan las 'Curvas de Nivel' en un mapa topográfico de orientación?",
    correcta: "Líneas imaginarias que unen puntos con la misma altitud sobre el nivel del mar, permitiendo visualizar el relieve.",
    incorrectas: [
      "Las rutas exactas que los alumnos deben seguir obligatoriamente para no perderse.",
      "Las zonas donde el campo magnético de la tierra es más fuerte y desvía la brújula."
    ]
  },
  {
    enunciado: "En un mapa a escala 1:15.000, ¿cuánto representa 1 centímetro en el terreno real?",
    correcta: "150 metros.",
    incorrectas: [
      "1.500 metros.",
      "15 metros."
    ]
  },
  {
    enunciado: "¿Qué es la 'Declinación Magnética' y por qué es relevante en la orientación de precisión?",
    correcta: "La diferencia angular entre el Norte Geográfico y el Norte Magnético, necesaria para ajustar el rumbo de la brújula.",
    incorrectas: [
      "La pérdida de fuerza de las pilas de un GPS cuando se utiliza en zonas de alta montaña.",
      "La inclinación del terreno que impide caminar en línea recta hacia un objetivo."
    ]
  },
  {
    enunciado: "En la técnica de orientación, ¿qué significa 'Orientar el Mapa'?",
    correcta: "Hacer coincidir las direcciones del mapa con las direcciones reales del terreno mediante la brújula o el relieve.",
    incorrectas: [
      "Dibujar una flecha roja en el centro del papel para saber dónde está el norte.",
      "Doblar el mapa en cuatro partes para que quepa en el bolsillo del pantalón."
    ]
  },
  {
    enunciado: "El elemento de la brújula que nos permite medir rumbos sobre el mapa se llama:",
    correcta: "Limbo o corona giratoria graduada.",
    incorrectas: [
      "Aguja imantada de doble color.",
      "Espejo de señales de emergencia."
    ]
  },
  {
    enunciado: "En una carrera de orientación escolar, un 'Ataque' (Attack Point) es:",
    correcta: "Un elemento del terreno muy claro y cercano al control que sirve como referencia final para localizar la baliza.",
    incorrectas: [
      "El momento en que un alumno intenta robar el mapa a otro compañero para ganar.",
      "La velocidad máxima a la que se corre los últimos 10 metros antes de meta."
    ]
  },
  {
    enunciado: "Según la LOMLOE, la orientación en Secundaria trabaja la 'Competencia STEM' al:",
    correcta: "Requerir el uso de escalas, interpretación de datos espaciales y resolución de problemas geométricos.",
    incorrectas: [
      "Hacer que los alumnos memoricen el nombre de todos los inventores de la brújula.",
      "Obligar a los alumnos a fabricar su propio GPS utilizando materiales reciclados."
    ]
  },
  {
    enunciado: "¿Qué indica una equidistancia de 5 metros en un mapa de orientación?",
    correcta: "Que la diferencia de altura vertical entre dos curvas de nivel consecutivas es de 5 metros.",
    incorrectas: [
      "Que los alumnos deben mantener una distancia de 5 metros entre ellos por seguridad.",
      "Que el mapa mide 5 metros de largo cuando se despliega totalmente."
    ]
  },
  {
    enunciado: "En el sistema GPS, el 'Track' es:",
    correcta: "El registro del camino realmente recorrido por el usuario, formado por una sucesión de puntos.",
    incorrectas: [
      "La velocidad a la que el satélite orbita alrededor de la tierra.",
      "Un botón que sirve para apagar la pantalla y ahorrar energía de la batería."
    ]
  },
  {
    enunciado: "La técnica de 'Navegación por Referencias' consiste en:",
    correcta: "Desplazarse siguiendo elementos lineales o puntuales evidentes del terreno (caminos, vallas, muros).",
    incorrectas: [
      "Caminar con los ojos cerrados confiando únicamente en el instinto de dirección.",
      "Preguntar a cada persona que se encuentre en el bosque dónde está el siguiente control."
    ]
  },
  {
    enunciado: "¿Qué color se utiliza en los mapas de orientación IOF para representar zonas de vegetación espesa o difícil paso?",
    correcta: "Verde oscuro.",
    incorrectas: [
      "Blanco (que representa bosque limpio).",
      "Azul (que representa zonas de agua)."
    ]
  },
  {
    enunciado: "El 'Error Voluntario' es una estrategia de orientación que consiste en:",
    correcta: "Apuntar intencionadamente a un lado de un punto de referencia lineal para saber con certeza hacia dónde girar al llegar.",
    incorrectas: [
      "Equivocarse de camino a propósito para que los compañeros se confundan y pierdan.",
      "No marcar una baliza para ver si el profesor se da cuenta durante la corrección."
    ]
  },
  {
    enunciado: "En la LOMLOE, la orientación fomenta la 'Autonomía' del alumnado porque:",
    correcta: "Obliga a la toma de decisiones individual o grupal bajo incertidumbre espacial.",
    incorrectas: [
      "Permite que los alumnos vuelvan a casa solos sin esperar al autobús escolar.",
      "Hace que los alumnos no necesiten usar el teléfono móvil para nada en su vida."
    ]
  },
  {
    enunciado: "¿Cómo se identifica el Norte en el cielo nocturno del hemisferio norte sin brújula?",
    correcta: "Localizando la Estrella Polar (Polaris) en la constelación de la Osa Menor.",
    incorrectas: [
      "Siguiendo la dirección de la luna llena en cualquier momento de la noche.",
      "Buscando el planeta Marte, que siempre brilla hacia el norte geográfico."
    ]
  },
  {
    enunciado: "En un mapa de orientación, las 'Líneas de Norte' son:",
    correcta: "Líneas verticales paralelas que atraviesan el mapa e indican la dirección del Norte Magnético.",
    incorrectas: [
      "Líneas que separan los países que están situados en el hemisferio norte.",
      "Las arrugas que se forman en el papel cuando se moja con la lluvia."
    ]
  },
  {
    enunciado: "La 'Pinza de Control' en las carreras tradicionales sirve para:",
    correcta: "Perforar la tarjeta de control para demostrar que se ha pasado por el punto exacto de la baliza.",
    incorrectas: [
      "Sujetar el mapa al pecho para que no se vuele con el viento fuerte.",
      "Enganchar la brújula al cinturón para no perderla durante la carrera."
    ]
  },
  {
    enunciado: "Un 'Espolón' en el relieve se representa en el mapa mediante curvas de nivel:",
    correcta: "En forma de 'V' o 'U' apuntando hacia las cotas más bajas.",
    incorrectas: [
      "En forma de círculos cerrados muy pequeños en la cima de la montaña.",
      "Líneas totalmente rectas y paralelas entre sí sin ninguna curva."
    ]
  },
  {
    enunciado: "¿Qué es el 'Azimut'?",
    correcta: "El ángulo medido en grados entre el norte y una dirección determinada, en sentido horario.",
    incorrectas: [
      "La distancia total recorrida dividida por el tiempo empleado en la ruta.",
      "El nombre técnico de la funda de plástico que protege el mapa de la lluvia."
    ]
  },
  {
    enunciado: "En la didáctica de la orientación, el 'Juego de la Estrella' consiste en:",
    correcta: "Realizar recorridos cortos que siempre vuelven al centro de reunión tras encontrar cada baliza.",
    incorrectas: [
      "Dibujar estrellas en el suelo para que los alumnos sepan dónde sentarse.",
      "Correr solo cuando se ven estrellas en el cielo durante la noche."
    ]
  },
  {
    enunciado: "La 'Lectura de Relieve' es una habilidad avanzada que permite:",
    correcta: "Visualizar la forma del terreno (vaguadas, lomas, depresiones) analizando solo las curvas de nivel.",
    incorrectas: [
      "Saber el nombre de todas las montañas del mundo mirando una fotografía.",
      "Aprender a escalar paredes de roca analizando el color de las piedras."
    ]
  },
  {
    enunciado: "En un mapa de orientación, el color AMARILLO representa:",
    correcta: "Zonas abiertas, campos, prados o áreas despejadas de árboles.",
    incorrectas: [
      "Zonas de agua profunda donde está prohibido nadar.",
      "Zonas de roca virgen o acantilados peligrosos."
    ]
  },
  {
    enunciado: "¿Qué es un 'Control de Paso' en una actividad de orientación?",
    correcta: "Un punto marcado en el mapa y señalizado en el terreno con una baliza donde el alumno debe realizar una acción.",
    incorrectas: [
      "Una valla que impide el paso a los alumnos que no llevan el uniforme adecuado.",
      "El examen teórico que se hace a mitad de la unidad didáctica."
    ]
  },
  {
    enunciado: "La técnica del 'Pulgar' en la lectura del mapa consiste en:",
    correcta: "Mantener el dedo pulgar sobre la posición actual en el mapa a medida que se avanza.",
    incorrectas: [
      "Usar el dedo pulgar para medir la fuerza del viento antes de correr.",
      "Girar el mapa utilizando solo el dedo pulgar de la mano derecha."
    ]
  },
  {
    enunciado: "En la orientación escolar, el 'Corralito' es:",
    correcta: "La zona delimitada de salida donde los alumnos reciben el mapa y esperan la señal de inicio.",
    incorrectas: [
      "Un castigo para los alumnos que se pierden y llegan tarde a clase.",
      "El lugar donde se guardan las brújulas cuando termina la sesión."
    ]
  },
  {
    enunciado: "¿Qué función tiene la 'Flecha de Dirección' en la base de una brújula de plataforma?",
    correcta: "Indicar el camino a seguir una vez que el rumbo ha sido correctamente calculado.",
    incorrectas: [
      "Señalar siempre el norte magnético de forma automática.",
      "Indicar la velocidad a la que el alumno se está desplazando."
    ]
  },
  {
    enunciado: "Una 'Vaguada' se representa en el mapa mediante curvas de nivel:",
    correcta: "En forma de 'V' o 'U' apuntando hacia las cotas más altas del terreno.",
    incorrectas: [
      "Líneas circulares que representan un agujero profundo en la tierra.",
      "Manchas de color negro que indican que hay mucha sombra en esa zona."
    ]
  },
  {
    enunciado: "El 'Sistema de Posicionamiento Global' (GPS) basa su funcionamiento en:",
    correcta: "La trilateración de señales enviadas por una constelación de satélites en órbita.",
    incorrectas: [
      "El uso de imanes gigantes situados en el polo norte y el polo sur.",
      "La conexión inalámbrica con las torres de telefonía móvil de la zona."
    ]
  },
  {
    enunciado: "En la LOMLOE, la orientación favorece la 'Inclusión' mediante:",
    correcta: "Recorridos adaptados en distancia y desnivel que permitan la participación de todo el alumnado.",
    incorrectas: [
      "Hacer que los alumnos más rápidos lleven en brazos a los más lentos.",
      "Eliminar los mapas y las brújulas para que nadie se confunda."
    ]
  },
  {
    enunciado: "La 'Descripción de Controles' mediante simbología técnica sirve para:",
    correcta: "Precisar la ubicación exacta de la baliza respecto al elemento del terreno (ej. lado norte del árbol).",
    incorrectas: [
      "Que los alumnos aprendan un idioma secreto para que otros colegios no les entiendan.",
      "Dibujar caricaturas del profesor en los márgenes de la tarjeta de control."
    ]
  },
  {
    enunciado: "¿Qué es el 'Rumbo Inverso' y para qué se utiliza?",
    correcta: "Es la dirección opuesta (180° de diferencia) y sirve para regresar al punto de origen.",
    incorrectas: [
      "Es caminar de espaldas para mejorar la coordinación de las piernas.",
      "Es el rumbo que se toma cuando la brújula se rompe por un golpe."
    ]
  },
  {
    enunciado: "En el deporte de orientación, el 'Código de la Baliza' es:",
    correcta: "Un número o letra que confirma al corredor que está en el control correcto según su descripción.",
    incorrectas: [
      "La contraseña que hay que decir al juez para que te deje pasar.",
      "El precio que cuesta el material deportivo si se compra por internet."
    ]
  },
  {
    enunciado: "La 'Peculiaridad de la Vegetación' se representa en el mapa con:",
    correcta: "Un punto verde (árbol aislado) o una cruz verde (raíz o árbol caído).",
    incorrectas: [
      "Un dibujo detallado de cada hoja de cada árbol del bosque.",
      "Una mancha de color rosa fluorescente muy brillante."
    ]
  },
  {
    enunciado: "Un 'WayPoint' en navegación GPS es:",
    correcta: "Una coordenada específica guardada en la memoria para marcar un punto de interés.",
    incorrectas: [
      "El tiempo que tarda el dispositivo en conectarse a la red eléctrica.",
      "La marca de las botas que mejor funcionan para caminar por el barro."
    ]
  },
  {
    enunciado: "En la didáctica de la orientación, se recomienda empezar trabajando con:",
    correcta: "Planos del propio centro educativo o del gimnasio para facilitar la transferencia.",
    incorrectas: [
      "Mapas del desierto del Sahara para que el reto sea máximo.",
      "Fotografías satelitales de otros planetas para fomentar la imaginación."
    ]
  },
  {
    enunciado: "La 'Escala de Grises' o sombreado en algunos mapas sirve para:",
    correcta: "Representar zonas de relieve escarpado o pendientes muy pronunciadas.",
    incorrectas: [
      "Indicar las zonas donde el sol no brilla nunca durante el día.",
      "Marcar los lugares donde está prohibido hacer fotos con el móvil."
    ]
  },
  {
    enunciado: "En un mapa de orientación, las líneas de color AZUL representan siempre:",
    correcta: "Elementos relacionados con el agua (ríos, lagos, pozos, fuentes).",
    incorrectas: [
      "Caminos asfaltados por donde pueden circular los coches.",
      "Zonas de bosque muy denso donde es imposible caminar."
    ]
  },
  {
    enunciado: "¿Qué es el 'Pasamanos' en la técnica de orientación?",
    correcta: "Un elemento lineal largo y claro (como un camino o una valla) que nos guía hacia el objetivo.",
    incorrectas: [
      "Darse la mano con el compañero para no perderse en la niebla.",
      "Una barandilla de hierro instalada en todas las montañas por seguridad."
    ]
  },
  {
    enunciado: "La 'Tarjeta de Control Electrónica' (SportIdent) permite:",
    correcta: "Registrar el paso por las balizas y conocer los tiempos parciales de cada tramo inmediatamente.",
    incorrectas: [
      "Pagar el autobús de vuelta al instituto utilizando el saldo de la tarjeta.",
      "Llamar por teléfono a los padres en caso de emergencia médica."
    ]
  },
  {
    enunciado: "En la LOMLOE, la orientación contribuye a la 'Salud' al:",
    correcta: "Promover la actividad física aeróbica en contacto con la naturaleza, reduciendo el sedentarismo.",
    incorrectas: [
      "Enseñar a los alumnos a no comer plantas venenosas que encuentren en el bosque.",
      "Asegurar que los alumnos no suden para no resfriarse con el viento."
    ]
  },
  {
    enunciado: "Un factor de seguridad esencial en las actividades de orientación escolar es:",
    correcta: "Establecer un 'Tiempo Límite' y un 'Punto de Reunión' claros para todo el alumnado.",
    incorrectas: [
      "Que cada alumno lleve un silbato para pitar cada vez que encuentre una baliza.",
      "Prohibir que los alumnos corran para evitar que se cansen demasiado."
    ]
  }
];