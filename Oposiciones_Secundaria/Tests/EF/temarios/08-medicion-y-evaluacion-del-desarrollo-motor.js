
// -08-medicion-y-evaluacion-del-desarrollo-motor.js

var PREGUNTAS = [
  {
    enunciado: "¿Qué diferencia técnica existe entre 'medición' y 'evaluación' en el ámbito motor?",
    correcta: "La medición es la obtención de datos cuantitativos; la evaluación es el juicio de valor basado en esos datos respecto a un criterio.",
    incorrectas: ["Son sinónimos que se refieren al uso del cronómetro.", "La medición es subjetiva y la evaluación es objetiva."]
  },
  {
    enunciado: "Un instrumento de evaluación 'normativo' es aquel que:",
    correcta: "Compara el resultado del alumno con el promedio de un grupo de referencia de su misma edad y sexo.",
    incorrectas: ["Compara al alumno con su propio progreso personal histórico.", "Evalúa si el alumno cumple las normas de conducta del centro."]
  },
  {
    enunciado: "La 'Validez' de una prueba de desarrollo motor se define como:",
    correcta: "El grado en que la prueba mide realmente la capacidad o factor que pretende medir.",
    incorrectas: ["La constancia de los resultados cuando se repite la prueba en condiciones similares.", "El tiempo que tarda el profesor en corregir los resultados."]
  },
  {
    enunciado: "El Test de Desarrollo Motor Grueso de Ulrich (TGMD-2) es una herramienta que evalúa prioritariamente:",
    correcta: "La calidad del patrón de movimiento en habilidades locomotrices y de control de objetos.",
    incorrectas: ["La potencia aeróbica máxima en adolescentes de élite.", "La flexibilidad de la cadena posterior mediante el test de sit and reach."]
  },
  {
    enunciado: "¿Qué propiedad psicométrica garantiza que dos evaluadores distintos obtengan el mismo resultado al aplicar la misma prueba?",
    correcta: "Objetividad o Fiabilidad Inter-jueces.",
    incorrectas: ["Sensibilidad.", "Originalidad."]
  },
  {
    enunciado: "En la evaluación del desarrollo motor en secundaria, las 'Listas de Control' (Check-lists) se utilizan para:",
    correcta: "Registrar la presencia o ausencia de rasgos específicos en la ejecución de una técnica.",
    incorrectas: ["Contar el número de pulsaciones por minuto tras una carrera.", "Calcular el índice de masa corporal (IMC) del grupo."]
  },
  {
    enunciado: "La 'Fiabilidad' (Reliability) de un test motor se refiere a:",
    correcta: "La reproducibilidad y estabilidad de los resultados obtenidos en diferentes aplicaciones.",
    incorrectas: ["Que la prueba sea divertida para los alumnos de 1º de ESO.", "Que el material necesario sea fácil de transportar."]
  },
  {
    enunciado: "Un criterio de evaluación 'Criterial' (frente al normativo) se centra en:",
    correcta: "El grado de consecución de un objetivo o estándar de aprendizaje predefinido para el alumno.",
    incorrectas: ["La posición que ocupa el alumno en el ranking de la clase.", "La nota media de la comunidad autónoma en esa materia."]
  },
  {
    enunciado: "La Batería EUROFIT es un conjunto de pruebas diseñadas para evaluar:",
    correcta: "La aptitud física relacionada con la salud en la población escolar europea.",
    incorrectas: ["El coeficiente intelectual de los deportistas de alto rendimiento.", "La calidad de las instalaciones deportivas municipales."]
  },
  {
    enunciado: "En la evaluación del desarrollo motor, ¿qué se entiende por 'evaluación formativa'?",
    correcta: "Aquella que se realiza durante el proceso de aprendizaje para proporcionar feedback y mejorar el desempeño.",
    incorrectas: ["La que se realiza al final de un trimestre para poner una nota definitiva.", "La que sirve para seleccionar a los mejores para el equipo del centro."]
  },
  {
    enunciado: "¿Qué instrumento permite evaluar la percepción que el alumno tiene de su propia competencia motriz?",
    correcta: "Escalas de autopercepción o cuestionarios de autoconcepto físico.",
    incorrectas: ["El cronómetro digital de centésimas.", "El dinamómetro de mano."]
  },
  {
    enunciado: "La 'Sensibilidad' de un instrumento de medición motriz es la capacidad para:",
    correcta: "Detectar pequeñas variaciones o cambios en el rendimiento del sujeto.",
    incorrectas: ["No romperse si se cae al suelo durante la sesión.", "Medir el nivel de empatía del alumno hacia sus compañeros."]
  },
  {
    enunciado: "En el análisis del desarrollo motor, los 'sistemas de observación' pueden ser:",
    correcta: "Sistemáticos (con categorías cerradas) o anecdóticos (descripciones libres).",
    incorrectas: ["Siempre nocturnos para no molestar al alumno.", "Exclusivamente realizados por el director del centro."]
  },
  {
    enunciado: "¿Qué prueba evalúa la coordinación dinámica general a través de un desplazamiento en el que se debe pasar un balón por debajo de vallas?",
    correcta: "Test de agilidad de la batería de Barrow.",
    incorrectas: ["Test de Cooper.", "Test de flexibilidad profunda."]
  },
  {
    enunciado: "La evaluación 'inicial' o diagnóstica en Educación Física tiene como fin:",
    correcta: "Conocer el nivel de partida del alumnado para ajustar la programación didáctica.",
    incorrectas: ["Expulsar a los alumnos que no tengan una buena condición física.", "Poner la primera nota del boletín de calificaciones."]
  },
  {
    enunciado: "Un 'registro anecdótico' en la observación motriz consiste en:",
    correcta: "La descripción objetiva de un comportamiento significativo o imprevisto del alumno durante la práctica.",
    incorrectas: ["Una lista de chistes que el profesor cuenta durante el calentamiento.", "El recuento de las faltas de asistencia del trimestre."]
  },
  {
    enunciado: "Las escalas de 'Rúbrica' en la evaluación motriz son útiles porque:",
    correcta: "Describen niveles de calidad en el desempeño, facilitando una evaluación cualitativa y transparente.",
    incorrectas: ["Permiten corregir exámenes teóricos de forma automática mediante escáner.", "Miden la presión arterial del alumno en reposo."]
  },
  {
    enunciado: "En la evaluación del desarrollo motor, el 'error de medida' puede deberse a:",
    correcta: "Fatiga del sujeto, variaciones ambientales o falta de precisión del instrumento.",
    incorrectas: ["Que el alumno se haya equivocado de zapatillas.", "Que el profesor no tenga el título de catedrático."]
  },
  {
    enunciado: "El 'Test de la Garza' o similares se utilizan para medir técnicamente:",
    correcta: "El equilibrio estático.",
    incorrectas: ["La fuerza explosiva del tren inferior.", "La velocidad de desplazamiento segmentario."]
  },
  {
    enunciado: "La evaluación 'Sumativa' tiene como función principal:",
    correcta: "Determinar el nivel de logro alcanzado al final de un periodo para la calificación o certificación.",
    incorrectas: ["Enseñar nuevos contenidos mientras se evalúa.", "Mejorar la relación afectiva entre profesor y alumno."]
  },
  {
    enunciado: "¿Qué evalúa la prueba de 'Lanzamiento de balón medicinal' en términos de desarrollo motor?",
    correcta: "La fuerza explosiva del tronco y el tren superior.",
    incorrectas: ["La precisión puntería a larga distancia.", "La flexibilidad de la articulación del codo."]
  },
  {
    enunciado: "En la LOMLOE, la evaluación debe basarse fundamentalmente en:",
    correcta: "Los criterios de evaluación que miden las competencias específicas en situaciones de aprendizaje.",
    incorrectas: ["La superación de marcas mínimas en pruebas de rendimiento físico.", "El orden alfabético de los apellidos de los alumnos."]
  },
  {
    enunciado: "El 'Test de Course Navette' es una prueba de campo válida para estimar:",
    correcta: "La potencia aeróbica máxima (VO2 máx) de forma indirecta.",
    incorrectas: ["La velocidad de reacción ante estímulos visuales.", "La potencia anaeróbica aláctica en sprints cortos."]
  },
  {
    enunciado: "La 'Estandarización' de una prueba motriz implica que:",
    correcta: "Las condiciones de aplicación y corrección son idénticas para todos los sujetos.",
    incorrectas: ["La prueba se realiza siempre en un estadio olímpico.", "La prueba solo la pueden realizar alumnos con un peso estándar."]
  },
  {
    enunciado: "Para evaluar la 'Orientación Espacial' en secundaria se suelen emplear:",
    correcta: "Recorridos con cambios de dirección basados en referencias externas o mapas.",
    incorrectas: ["Carreras en línea recta sobre una pista de atletismo.", "Ejercicios de flexión de tronco desde posición sentada."]
  },
  {
    enunciado: "La 'Evaluación Auténtica' prioriza:",
    correcta: "Tareas motrices que tienen sentido y aplicación en contextos reales fuera del gimnasio.",
    incorrectas: ["Tests de laboratorio con mascarillas de análisis de gases.", "La memorización de las dimensiones reglamentarias de los campos."]
  },
  {
    enunciado: "¿Qué instrumento de registro permite al profesor anotar la frecuencia con la que un alumno realiza una conducta determinada?",
    correcta: "Escala de frecuencias o diario de clase.",
    incorrectas: ["Termómetro clínico.", "Cinta métrica metálica."]
  },
  {
    enunciado: "En la medición del 'Equilibrio Dinámico', una prueba clásica es:",
    correcta: "Desplazarse sobre un banco sueco invertido o una barra de equilibrio.",
    incorrectas: ["Mantenerse sobre un solo pie con los ojos cerrados.", "Realizar una plancha abdominal durante un minuto."]
  },
  {
    enunciado: "La 'Heteroevaluación' es el proceso de evaluación realizado por:",
    correcta: "El profesor sobre el alumno (o viceversa).",
    incorrectas: ["El alumno sobre su propio desempeño.", "Un grupo de alumnos sobre un compañero."]
  },
  {
    enunciado: "La 'Coevaluación' favorece en el desarrollo motor:",
    correcta: "La capacidad de observación crítica, la empatía y la responsabilidad compartida.",
    incorrectas: ["Que el profesor trabaje menos durante la sesión.", "Que los alumnos se pongan notas bajas por rivalidad."]
  },
  {
    enunciado: "La prueba de 'Salto de longitud a pies juntos' mide principalmente:",
    correcta: "La potencia explosiva del tren inferior.",
    incorrectas: ["La elasticidad de los ligamentos de la rodilla.", "La coordinación óculo-pédica en carrera."]
  },
  {
    enunciado: "En el contexto de la diversidad, la evaluación del desarrollo motor debe:",
    correcta: "Adaptar los instrumentos y criterios a las posibilidades reales del alumnado con necesidades específicas.",
    incorrectas: ["Ser eliminada para no traumatizar al alumnado.", "Utilizar los mismos baremos que para los atletas profesionales."]
  },
  {
    enunciado: "El 'Portafolio' o carpeta de aprendizaje en EF es un instrumento que permite:",
    correcta: "Recoger evidencias de progreso, reflexiones y trabajos del alumno a lo largo del tiempo.",
    incorrectas: ["Guardar las raquetas de bádminton para que no se rompan.", "Llevar la ropa de deporte al vestuario."]
  },
  {
    enunciado: "¿Qué se mide con el 'Test de Tapping' de manos?",
    correcta: "La velocidad de movimiento cíclico y coordinación segmentaria.",
    incorrectas: ["La fuerza de presión de los dedos.", "La longitud de los dedos de la mano."]
  },
  {
    enunciado: "La evaluación del 'Procesamiento de la Información' en una tarea motriz se centra en:",
    correcta: "La velocidad y calidad de la toma de decisiones ante estímulos cambiantes.",
    incorrectas: ["La cantidad de sudor producida tras el esfuerzo.", "La capacidad de almacenar datos en una memoria USB."]
  },
  {
    enunciado: "En secundaria, la evaluación del desarrollo motor debe evitar:",
    correcta: "El uso excesivo de baremos competitivos que desmotiven al alumnado menos dotado.",
    incorrectas: ["Cualquier tipo de registro de datos por parte del profesor.", "La realización de actividad física intensa."]
  },
  {
    enunciado: "La 'Madurez Biológica' evaluada mediante el estadio de Tanner se refiere a:",
    correcta: "El desarrollo de los caracteres sexuales secundarios y el estado de maduración puberal.",
    incorrectas: ["La capacidad de realizar una voltereta hacia atrás perfectamente.", "La edad cronológica que figura en el DNI."]
  },
  {
    enunciado: "¿Qué mide el 'Test de Illinois'?",
    correcta: "La agilidad mediante desplazamientos con cambios de dirección rápidos.",
    incorrectas: ["La resistencia cardiovascular de larga duración.", "La flexibilidad de la cadera."]
  },
  {
    enunciado: "La 'Evaluación por Competencias' implica que el alumno demuestre:",
    correcta: "La integración de saberes motrices para resolver problemas en contextos diversos.",
    incorrectas: ["Que sabe recitar el nombre de todos los huesos del pie.", "Que puede correr 10 kilómetros sin beber agua."]
  },
  {
    enunciado: "Un indicador de 'Maestría Motriz' en un test de proceso sería:",
    correcta: "La fluidez, la economía de esfuerzo y la adaptabilidad de la ejecución técnica.",
    incorrectas: ["El color llamativo de la ropa deportiva utilizada.", "Gritar muy fuerte durante la realización del ejercicio."]
  }
];
