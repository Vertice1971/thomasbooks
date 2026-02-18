// 49-nutricion-y-actividad-fisica.js

var PREGUNTAS = [
  {
    enunciado: "¿Qué se entiende por 'Metabolismo Basal' (MB)?",
    correcta: "La cantidad mínima de energía que el cuerpo necesita para mantener las funciones vitales en reposo absoluto.",
    incorrectas: [
      "La energía total quemada durante una sesión de entrenamiento de alta intensidad.",
      "El gasto calórico derivado exclusivamente de la digestión y absorción de los alimentos."
    ]
  },
  {
    enunciado: "¿Cuál es la función principal de los carbohidratos en el rendimiento deportivo?",
    correcta: "Proporcionar la fuente de energía primaria y más eficiente para la contracción muscular, especialmente en intensidades medias y altas.",
    incorrectas: [
      "Actuar como el principal componente estructural para la reparación de los tejidos dañados.",
      "Transportar las vitaminas liposolubles A, D, E y K a través del torrente sanguíneo."
    ]
  },
  {
    enunciado: "En una dieta equilibrada para un adolescente activo, ¿qué porcentaje aproximado de la energía total deben aportar las grasas?",
    correcta: "Entre un 20% y un 35%.",
    incorrectas: [
      "Menos del 5%, para evitar cualquier aumento del tejido adiposo.",
      "Más del 60%, priorizando siempre las grasas saturadas de origen animal."
    ]
  },
  {
    enunciado: "¿Qué nutriente es esencial para la síntesis de hemoglobina y el transporte de oxígeno, siendo su déficit causa común de fatiga?",
    correcta: "El Hierro.",
    incorrectas: [
      "El Magnesio.",
      "El Potasio."
    ]
  },
  {
    enunciado: "El 'Gasto Energético Total' (GET) se calcula mediante la suma de:",
    correcta: "Metabolismo basal + Efecto termogénico de los alimentos + Actividad física.",
    incorrectas: [
      "Horas de sueño + Peso corporal + Estatura.",
      "Ingesta calórica - Grasa corporal acumulada."
    ]
  },
  {
    enunciado: "Las proteínas tienen una función predominantemente:",
    correcta: "Plástica o estructural, encargándose de la construcción y reparación de tejidos y enzimas.",
    incorrectas: [
      "Energética de reserva a largo plazo en esfuerzos de baja intensidad.",
      "Reguladora de la temperatura corporal mediante la sudoración."
    ]
  },
  {
    enunciado: "¿Qué ocurre con el 'Glucógeno' muscular durante un ejercicio de resistencia prolongado?",
    correcta: "Se agota progresivamente, obligando al organismo a depender más de la oxidación de las grasas y provocando fatiga.",
    incorrectas: [
      "Aumenta su concentración de forma automática para evitar el cansancio.",
      "Se convierte en vitamina C para proteger las articulaciones del impacto."
    ]
  },
  {
    enunciado: "Un gramo de lípidos (grasas) aporta aproximadamente:",
    correcta: "9 kilocalorías.",
    incorrectas: [
      "4 kilocalorías.",
      "7 kilocalorías."
    ]
  },
  {
    enunciado: "¿Cuál es la principal recomendación de hidratación durante la actividad física según la LOMLOE?",
    correcta: "Beber pequeñas cantidades de agua de forma regular antes, durante y después del ejercicio, sin esperar a sentir sed.",
    incorrectas: [
      "Beber al menos 5 litros de bebidas energéticas con alto contenido en cafeína.",
      "Evitar beber agua durante el ejercicio para no aumentar el peso corporal en carrera."
    ]
  },
  {
    enunciado: "¿Qué son los 'Aminoácidos Esenciales'?",
    correcta: "Aquellos que el cuerpo no puede sintetizar por sí mismo y deben ser ingeridos obligatoriamente a través de la dieta.",
    incorrectas: [
      "Los nutrientes que se encuentran exclusivamente en las frutas de color rojo.",
      "Sustancias químicas que solo se producen en el cuerpo durante el sueño profundo."
    ]
  },
  {
    enunciado: "El índice glucémico (IG) mide:",
    correcta: "La rapidez con la que un alimento rico en carbohidratos eleva los niveles de glucosa en sangre tras su ingesta.",
    incorrectas: [
      "La cantidad de fibra total presente en un alimento vegetal.",
      "La capacidad de un deportista para digerir las proteínas de la leche."
    ]
  },
  {
    enunciado: "En la LOMLOE, el estudio de la nutrición se vincula con la 'Salud y Calidad de Vida' para prevenir:",
    correcta: "Trastornos de la conducta alimentaria (TCA), la obesidad infantil y enfermedades metabólicas.",
    incorrectas: [
      "Que los alumnos compren ropa de deporte de marcas poco conocidas.",
      "El desarrollo de la musculatura excesiva en la etapa de crecimiento."
    ]
  },
  {
    enunciado: "¿Cuál es la función reguladora de las vitaminas y minerales?",
    correcta: "Facilitar las reacciones químicas del metabolismo y asegurar el correcto funcionamiento del sistema nervioso e inmunológico.",
    incorrectas: [
      "Proporcionar energía inmediata para realizar sprints de 100 metros.",
      "Sustituir al agua en los procesos de hidratación celular profunda."
    ]
  },
  {
    enunciado: "La 'Ventana Metabólica' tras el ejercicio se refiere al periodo en el que:",
    correcta: "El organismo está especialmente receptivo para resintetizar glucógeno y reparar fibras musculares.",
    incorrectas: [
      "El cuerpo deja de quemar calorías durante 24 horas para descansar.",
      "Es obligatorio comer alimentos con mucha grasa para recuperar la temperatura."
    ]
  },
  {
    enunciado: "Las grasas 'Trans' e hidrogenadas se asocian didácticamente con:",
    correcta: "Un aumento del riesgo cardiovascular y la inflamación sistémica, debiendo reducirse su consumo.",
    incorrectas: [
      "Una mejora espectacular de la resistencia aeróbica en adolescentes.",
      "El fortalecimiento de los huesos y la prevención de fracturas por impacto."
    ]
  },
  {
    enunciado: "En un esfuerzo explosivo de menos de 10 segundos (ej. salto de longitud), la fuente de energía principal es:",
    correcta: "El sistema de los fosfágenos (ATP y Fosfocreatina).",
    incorrectas: [
      "La oxidación de los ácidos grasos libres del tejido adiposo.",
      "La fermentación láctica del glucógeno almacenado en el hígado."
    ]
  },
  {
    enunciado: "¿Qué nutriente ayuda a prevenir los calambres musculares y regula el equilibrio hídrico junto al sodio?",
    correcta: "El Potasio.",
    incorrectas: [
      "La Vitamina B12.",
      "El Fósforo."
    ]
  },
  {
    enunciado: "La 'Fibra Alimentaria' es importante en la dieta de un deportista porque:",
    correcta: "Mejora el tránsito intestinal y regula la absorción de azúcares y grasas, aunque debe limitarse justo antes de competir.",
    incorrectas: [
      "Aumenta la fuerza explosiva de los músculos del tronco.",
      "Permite correr más rápido al reducir la resistencia del viento en el cuerpo."
    ]
  },
  {
    enunciado: "Un balance energético 'Negativo' ocurre cuando:",
    correcta: "El gasto calórico es superior a la ingesta calórica, provocando la pérdida de peso.",
    incorrectas: [
      "El alumno está de mal humor durante toda la clase de Educación Física.",
      "Se ingieren más vitaminas de las que el cuerpo es capaz de eliminar."
    ]
  },
  {
    enunciado: "La 'Pirámide de la Alimentación Saludable' recomienda que la base de la dieta esté formada por:",
    correcta: "Actividad física diaria, hidratación adecuada y consumo de alimentos integrales, verduras y frutas.",
    incorrectas: [
      "Suplementos de proteínas y vitaminas comprados en tiendas especializadas.",
      "Dulces, bollería industrial y bebidas refrescantes con mucho gas."
    ]
  },
  {
    enunciado: "¿Qué es la 'Anemia Ferropénica'?",
    correcta: "Una disminución de los glóbulos rojos por falta de hierro, que reduce el rendimiento aeróbico.",
    incorrectas: [
      "Un aumento excesivo de la energía por comer demasiada carne roja.",
      "Una enfermedad que impide que los huesos crezcan en sentido horizontal."
    ]
  },
  {
    enunciado: "¿Cómo influye la temperatura del agua en la velocidad de hidratación?",
    correcta: "El agua fresca (entre 10 y 15°C) se absorbe ligeramente más rápido que el agua muy fría o muy caliente.",
    incorrectas: [
      "El agua hirviendo es la única que llega directamente a los músculos.",
      "No influye en absoluto; el cuerpo la calienta instantáneamente en la boca."
    ]
  },
  {
    enunciado: "La ingesta excesiva de proteínas sin una demanda física real puede provocar:",
    correcta: "Una sobrecarga renal y deshidratación debido a la eliminación del exceso de nitrógeno por la orina.",
    incorrectas: [
      "Que los huesos se vuelvan tan flexibles que se puedan doblar como chicles.",
      "Una mejora de la visión nocturna y la capacidad de concentración."
    ]
  },
  {
    enunciado: "Los 'Antioxidantes' (Vitamina C, E, Selenio) son claves para el deportista porque:",
    correcta: "Combaten el daño celular provocado por los radicales libres generados durante el esfuerzo físico intenso.",
    incorrectas: [
      "Sustituyen a las proteínas en la reparación de las fracturas óseas.",
      "Permiten que el cuerpo no necesite dormir tras una competición."
    ]
  },
  {
    enunciado: "En el etiquetado nutricional, la energía suele expresarse en:",
    correcta: "Kilocalorías (kcal) y Kilojulios (kJ).",
    incorrectas: [
      "Kilogramos de peso y Metros de estatura.",
      "Vatios de potencia y Amperios de corriente."
    ]
  },
  {
    enunciado: "La 'Tasa de Sudoración' es:",
    correcta: "La cantidad de líquido perdido a través del sudor por hora de ejercicio, útil para personalizar la hidratación.",
    incorrectas: [
      "La velocidad a la que el alumno se cambia de ropa después de clase.",
      "El número de veces que el corazón late mientras se bebe agua."
    ]
  },
  {
    enunciado: "Los carbohidratos de 'Absorción Lenta' (bajo IG) son ideales para:",
    correcta: "La comida previa al ejercicio (2-3 horas antes) para asegurar energía sostenida.",
    incorrectas: [
      "Tomarlos justo en el momento del sprint final para ganar la carrera.",
      "Sustituir a los lípidos en la dieta de las personas sedentarias."
    ]
  },
  {
    enunciado: "Un factor que aumenta el Gasto Metabólico Basal es:",
    correcta: "Tener una mayor proporción de masa muscular (tejido metabólicamente activo).",
    incorrectas: [
      "Dormir muchas horas durante el día sin realizar ningún movimiento.",
      "Estar en una habitación con una temperatura constante de 25 grados."
    ]
  },
  {
    enunciado: "¿Qué es el 'Efecto Térmico de los Alimentos' (ETA)?",
    correcta: "La energía que gasta el cuerpo para digerir, absorber y metabolizar los nutrientes ingeridos.",
    incorrectas: [
      "El calor que desprende la comida cuando sale del horno de la cocina.",
      "La fiebre que aparece tras comer alimentos en mal estado o caducados."
    ]
  },
  {
    enunciado: "En la LOMLOE, se enseña que una 'Dieta Sostenible' es aquella que:",
    correcta: "Prioriza productos locales y de temporada, reduciendo la huella de carbono y el desperdicio.",
    incorrectas: [
      "Se basa exclusivamente en polvos y batidos procesados en laboratorios lejanos.",
      "Obliga a comer siempre lo mismo todos los días del año para no contaminar."
    ]
  },
  {
    enunciado: "¿Cuál es el riesgo de las 'Dietas Milagro' en adolescentes deportistas?",
    correcta: "Déficits nutricionales, retraso en el crecimiento y riesgo de desarrollar trastornos alimentarios.",
    incorrectas: [
      "Que el alumno se convierta en un atleta profesional en menos de una semana.",
      "Un aumento exagerado de la estatura que impida la coordinación motriz."
    ]
  },
  {
    enunciado: "El Calcio es fundamental en la actividad física para:",
    correcta: "La salud ósea y el mecanismo de contracción y relajación muscular.",
    incorrectas: [
      "Que el pelo brille más durante la realización de las pruebas físicas.",
      "Eliminar el exceso de sudor de las manos durante el juego."
    ]
  },
  {
    enunciado: "Las vitaminas 'Liposolubles' son aquellas que:",
    correcta: "Se almacenan en los tejidos grasos del cuerpo y pueden ser tóxicas en exceso.",
    incorrectas: [
      "Se eliminan fácilmente por la orina y no se pueden almacenar.",
      "Solo se encuentran en los alimentos que no contienen ninguna caloría."
    ]
  },
  {
    enunciado: "La 'Hiponatremia' es una condición peligrosa que ocurre por:",
    correcta: "Una concentración excesivamente baja de sodio en sangre, a menudo por beber demasiada agua sin electrolitos.",
    incorrectas: [
      "Comer demasiada sal en las comidas antes de ir a correr.",
      "La falta de oxígeno en las células del cerebro durante un salto."
    ]
  },
  {
    enunciado: "La 'Biodisponibilidad' de un nutriente es:",
    correcta: "La proporción del nutriente ingerido que es realmente absorbida y utilizada por el organismo.",
    incorrectas: [
      "El precio que tiene el alimento en el mercado según la oferta y la demanda.",
      "La cantidad de tiempo que el alimento aguanta en la nevera sin estropearse."
    ]
  },
  {
    enunciado: "Un indicador visual sencillo del estado de hidratación es:",
    correcta: "El color de la orina (debe ser clara; si es oscura, indica deshidratación).",
    incorrectas: [
      "El color de los calcetines al terminar la sesión de Educación Física.",
      "La longitud de las uñas de las manos tras una carrera de resistencia."
    ]
  },
  {
    enunciado: "Los 'Lípidos' desempeñan una función energética crucial en:",
    correcta: "Actividades de baja intensidad y larga duración (reposo y ejercicio aeróbico ligero).",
    incorrectas: [
      "Esfuerzos máximos de fuerza explosiva que duran menos de un segundo.",
      "No tienen función energética; son solo elementos decorativos del cuerpo."
    ]
  },
  {
    enunciado: "¿Cómo influye el consumo de alcohol en la recuperación post-ejercicio?",
    correcta: "Interfiere en la síntesis de glucógeno, deshidrata y perjudica la reparación de tejidos musculares.",
    incorrectas: [
      "Acelera la curación de las lesiones musculares por su efecto desinfectante.",
      "No influye en absoluto si se acompaña de una dieta rica en carbohidratos."
    ]
  },
  {
    enunciado: "La 'Educación Nutricional' en la escuela debe basarse en:",
    correcta: "El desarrollo de un pensamiento crítico ante la publicidad y la elección consciente de alimentos reales.",
    incorrectas: [
      "La prohibición absoluta de comer cualquier alimento que no sea de color verde.",
      "Aprender a contar calorías de forma obsesiva en cada comida del día."
    ]
  },
  {
    enunciado: "¿Cuál es el nutriente cuya carencia provoca el 'Escorbuto'?",
    correcta: "La Vitamina C.",
    incorrectas: [
      "La Vitamina D.",
      "El Yodo."
    ]
  }
];