// -19-procesos-energeticos-y-actividad-fisica.js

var PREGUNTAS = [
  {
    enunciado: "¿Cuál es el destino metabólico del piruvato en condiciones de hipoxia severa para permitir la resíntesis de NAD+ y la continuidad de la glucólisis?",
    correcta: "Su reducción a lactato mediante la enzima lactato deshidrogenasa (LDH).",
    incorrectas: ["Su conversión en Acetil-CoA para entrar en el ciclo de Tricarboxílicos.", "La transaminación directa a aspartato en el citosol."]
  },
  {
    enunciado: "En la bioenergética del ejercicio, la fosfocreatina (PC) actúa como un sistema de:",
    correcta: "Tampón temporal de ATP, manteniendo la homeostasis energética en esfuerzos de potencia máxima.",
    incorrectas: ["Sustrato principal para la beta-oxidación mitocondrial.", "Transportador de electrones en el complejo III de la cadena respiratoria."]
  },
  {
    enunciado: "¿Qué enzima alostérica es considerada el 'marcapasos' o factor limitante de la glucólisis anaeróbica?",
    correcta: "Fosfofructoquinasa-1 (PFK-1).",
    incorrectas: ["Hexoquinasa IV.", "Piruvato quinasa dependiente de calcio."]
  },
  {
    enunciado: "Durante la beta-oxidación de los ácidos grasos, cada ciclo de cuatro reacciones produce:",
    correcta: "Un Acetil-CoA, un NADH y un FADH2.",
    incorrectas: ["Un ATP neto por fosforilación a nivel de sustrato.", "Dos moléculas de dióxido de carbono y una de agua."]
  },
  {
    enunciado: "El ciclo de Cori establece una relación metabólica esencial entre:",
    correcta: "El músculo esquelético (glucólisis) e hígado (gluconeogénesis).",
    incorrectas: ["El miocardio y el pulmón para el intercambio gaseoso.", "El tejido adiposo y el páncreas para la secreción de glucagón."]
  },
  {
    enunciado: "¿Qué se entiende por 'Déficit de Oxígeno' al inicio de una situación de aprendizaje motriz intensa?",
    correcta: "La diferencia entre el oxígeno requerido y el consumido mientras los sistemas oxidativos alcanzan el 'steady state'.",
    incorrectas: ["La incapacidad total de los pulmones para ventilar aire atmosférico.", "La saturación máxima de la hemoglobina por encima del 100%."]
  },
  {
    enunciado: "La lanzadera de malato-aspartato es fundamental en el metabolismo aeróbico para:",
    correcta: "Introducir los equivalentes reductores del NADH citosólico en la matriz mitocondrial.",
    incorrectas: ["Exportar glucosa desde el retículo sarcoplásmico al torrente sanguíneo.", "Sintetizar aminoácidos esenciales durante la contracción excéntrica."]
  },
  {
    enunciado: "El concepto de 'Máximo Estado Estacionario de Lactato' (MLSS) se define como:",
    correcta: "La intensidad más alta en la que la tasa de aparición de lactato es igual a su tasa de aclaramiento.",
    incorrectas: ["El punto de agotamiento total de las reservas de glucógeno.", "La velocidad mínima a la que el sujeto comienza a sudar."]
  },
  {
    enunciado: "En esfuerzos de muy alta intensidad y duración ultra-corta (< 6 s), la energía proviene principalmente de:",
    correcta: "La hidrólisis del ATP preexistente y la degradación de la fosfocreatina.",
    incorrectas: ["La oxidación de los triglicéridos de cadena media.", "La vía de las pentosas fosfato."]
  },
  {
    enunciado: "¿Cuál es el papel del complejo piruvato deshidrogenasa en el metabolismo energético?",
    correcta: "Actuar como puente entre la glucólisis citoplasmática y el ciclo de Krebs mitocondrial.",
    incorrectas: ["Inhibir la formación de cuerpos cetónicos en el músculo.", "Estimular la síntesis de glucógeno durante el esfuerzo."]
  },
  {
    enunciado: "La 'Deuda de Oxígeno' o EPOC elevado tras una sesión de EF intensa se explica por:",
    correcta: "La resíntesis de PC, el aclaramiento de lactato y el aumento de la temperatura y catecolaminas.",
    incorrectas: ["La necesidad de enfriar los pulmones mediante aire frío.", "El almacenamiento de nitrógeno gaseoso en los huesos."]
  },
  {
    enunciado: "Los triglicéridos intramusculares (IMTG) son una fuente de energía especialmente relevante en:",
    correcta: "Ejercicios de resistencia de intensidad moderada y larga duración.",
    incorrectas: ["Sprints explosivos de menos de 10 metros.", "Esfuerzos isométricos máximos de 2 segundos."]
  },
  {
    enunciado: "¿Qué función cumple la enzima adenilato quinasa (o miokinasa) en situaciones de alta demanda?",
    correcta: "Convertir dos ADP en un ATP y un AMP para mantener el flujo energético.",
    incorrectas: ["Sintetizar colágeno para los tendones.", "Degradar el exceso de insulina en sangre."]
  },
  {
    enunciado: "El cociente respiratorio (RER) de 1.0 indica que el sustrato energético principal es:",
    correcta: "Hidratos de carbono.",
    incorrectas: ["Lípidos.", "Proteínas."]
  },
  {
    enunciado: "La inhibición de la enzima PFK por altos niveles de ATP y citrato es un ejemplo de:",
    correcta: "Control por retroalimentación negativa (feedback).",
    incorrectas: ["Activación por sustrato.", "Degradación proteolítica irreversible."]
  },
  {
    enunciado: "En la cadena de transporte de electrones, el aceptor final de electrones es:",
    correcta: "El oxígeno, que se reduce para formar agua.",
    incorrectas: ["El dióxido de carbono.", "El ácido láctico."]
  },
  {
    enunciado: "¿Qué diferencia existe entre el glucógeno muscular y el hepático respecto a la glucemia?",
    correcta: "El muscular carece de glucosa-6-fosfatasa, por lo que no puede liberar glucosa a la sangre.",
    incorrectas: ["El muscular se agota en 5 segundos y el hepático en 5 horas.", "No existe diferencia, ambos cumplen la misma función sistémica."]
  },
  {
    enunciado: "La vía de los fosfágenos presenta una 'potencia' energética:",
    correcta: "Muy elevada, pero una 'capacidad' muy limitada.",
    incorrectas: ["Muy baja, pero una capacidad infinita.", "Igual a la de la beta-oxidación."]
  },
  {
    enunciado: "El lactato es considerado en la fisiología moderna como:",
    correcta: "Un sustrato energético valioso que puede ser oxidado por el miocardio y fibras lentas.",
    incorrectas: ["Un veneno metabólico sin utilidad alguna.", "Un gas que se exhala por la respiración."]
  },
  {
    enunciado: "¿Qué efecto tiene el entrenamiento de resistencia sobre el umbral de lactato?",
    correcta: "Lo desplaza hacia la derecha, permitiendo mayores intensidades sin acidosis.",
    incorrectas: ["Lo desplaza hacia la izquierda, provocando fatiga prematura.", "No tiene efecto sobre los parámetros de lactato."]
  },
  {
    enunciado: "La glucólisis rinde netamente, a partir de una molécula de glucosa:",
    correcta: "2 ATP y 2 NADH.",
    incorrectas: ["36 ATP y 6 CO2.", "1 ATP y 1 FADH2."]
  },
  {
    enunciado: "El ciclo de Krebs tiene lugar en:",
    correcta: "La matriz mitocondrial.",
    incorrectas: ["El citosol celular.", "El espacio intermembrana del núcleo."]
  },
  {
    enunciado: "Durante un ayuno prolongado o ejercicio extenuante, ¿qué proceso genera glucosa a partir de glicerol o aminoácidos?",
    correcta: "Gluconeogénesis.",
    incorrectas: ["Glucólisis.", "Lipólisis de alta afinidad."]
  },
  {
    enunciado: "La formación de ATP en la ATP-sintetasa se debe al gradiente de:",
    correcta: "Protones (H+) a través de la membrana mitocondrial interna.",
    incorrectas: ["Iones sodio (Na+) en el sarcolema.", "Calcio en el retículo."]
  },
  {
    enunciado: "¿Qué sustrato aporta más energía por gramo oxidado?",
    correcta: "Lípidos (9 kcal/g).",
    incorrectas: ["Hidratos de carbono (4 kcal/g).", "Proteínas (4 kcal/g)."]
  },
  {
    enunciado: "La carnitina es necesaria para:",
    correcta: "Transportar los ácidos grasos de cadena larga al interior de la mitocondria.",
    incorrectas: ["Sintetizar hemoglobina en los glóbulos rojos.", "Neutralizar el ácido láctico en el citosol."]
  },
  {
    enunciado: "En la LOMLOE, el conocimiento de los sistemas energéticos permite al alumno:",
    correcta: "Entender la relación entre intensidad y duración para la planificación de su salud.",
    incorrectas: ["Recetar suplementos nutricionales a sus compañeros.", "Diagnosticar enfermedades metabólicas graves."]
  },
  {
    enunciado: "Un RER de 0.7 indica un predominio de:",
    correcta: "Oxidación de grasas.",
    incorrectas: ["Oxidación de glucosa.", "Metabolismo anaeróbico puro."]
  },
  {
    enunciado: "La acidosis metabólica durante el ejercicio extenuante inhibe:",
    correcta: "La interacción actina-miosina y la actividad enzimática de la PFK.",
    incorrectas: ["La absorción de agua en el intestino delgado.", "La audición de sonidos agudos."]
  },
  {
    enunciado: "El 'punto de compensación respiratoria' (VT2) se asocia con:",
    correcta: "Un aumento desproporcionado de la ventilación respecto al consumo de O2.",
    incorrectas: ["La fase de sueño profundo tras el ejercicio.", "El inicio del calentamiento."]
  },
  {
    enunciado: "La glucógeno sintasa es la enzima clave para:",
    correcta: "La síntesis de glucógeno a partir de glucosa-6-fosfato.",
    incorrectas: ["La degradación del glucógeno durante el sprint.", "La formación de triglicéridos."]
  },
  {
    enunciado: "¿Cuál es el principal factor estimulador de la glucólisis al inicio del ejercicio?",
    correcta: "El aumento de la concentración de ADP y AMP.",
    incorrectas: ["El aumento de los niveles de ATP.", "La presencia de altos niveles de insulina."]
  },
  {
    enunciado: "La eficiencia del sistema oxidativo respecto a los anaeróbicos es:",
    correcta: "Mayor en términos de rendimiento total de ATP por molécula de glucosa.",
    incorrectas: ["Menor, ya que produce mucho menos ATP por glucosa.", "Igual, solo cambia la velocidad."]
  },
  {
    enunciado: "El sistema de fosfágenos se recupera al 100% en aproximadamente:",
    correcta: "3 a 5 minutos de descanso activo o pasivo.",
    incorrectas: ["24 horas de reposo absoluto.", "10 segundos tras el esfuerzo."]
  },
  {
    enunciado: "En el metabolismo de las proteínas, el nitrógeno se elimina en forma de:",
    correcta: "Urea a través del ciclo de la urea.",
    incorrectas: ["Glucosa a través de la orina.", "Ácido láctico por el sudor."]
  },
  {
    enunciado: "La fatiga periférica se asocia mecánicamente con:",
    correcta: "La acumulación de Pi (fosfato inorgánico) e hidrogeniones en la fibra.",
    incorrectas: ["La falta de motivación psicológica del alumno.", "El color de la ropa deportiva."]
  },
  {
    enunciado: "¿Qué hormona estimula la lipólisis durante el ejercicio físico prolongado?",
    correcta: "Adrenalina y Glucagón.",
    incorrectas: ["Insulina.", "Melatonina."]
  },
  {
    enunciado: "La 'glucogenólisis' es el proceso de:",
    correcta: "Degradación del glucógeno para obtener glucosa.",
    incorrectas: ["Formación de glucosa a partir de grasas.", "Almacenamiento de azúcar en el hígado."]
  },
  {
    enunciado: "En la Educación Física actual, los procesos energéticos se explican para evitar:",
    correcta: "Mitos sobre la quema de grasa localizada y el uso de dietas milagro.",
    incorrectas: ["Que los alumnos coman durante la clase.", "Que los alumnos beban agua."]
  },
  {
    enunciado: "El ATP es una molécula compuesta por:",
    correcta: "Adenina, ribosa y tres grupos fosfato de alta energía.",
    incorrectas: ["Glicerol y tres ácidos grasos saturados.", "Una cadena de aminoácidos ramificados."]
  }
];