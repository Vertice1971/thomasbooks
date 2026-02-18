// -20-la-resistencia.js

var PREGUNTAS = [
  {
    enunciado: "¿Cómo se define el concepto de 'Steady State' o estado estable durante un esfuerzo de resistencia aeróbica de intensidad moderada?",
    correcta: "Es la situación de equilibrio dinámico donde el consumo de oxígeno ($VO_{2}$) se ajusta a la demanda energética, estabilizando la frecuencia cardíaca y el lactato sanguíneo.",
    incorrectas: ["Es el punto de ruptura metabólica donde el sistema glucolítico anaeróbico toma el control absoluto de la resíntesis de ATP.", "Es la fase inicial del ejercicio donde se produce un déficit de oxígeno por la inercia de los sistemas de transporte."]
  },
  {
    enunciado: "En la fisiología de la resistencia, ¿cuál es el principal factor limitante central para alcanzar un $VO_{2}$ máx elevado?",
    correcta: "El gasto cardíaco máximo ($Q$), específicamente la capacidad de eyección del ventrículo izquierdo y el volumen sistólico.",
    incorrectas: ["La capacidad de difusión de los alvéolos pulmonares en sujetos sanos a nivel del mar.", "La cantidad de enzimas glucolíticas presentes en el citoplasma de las fibras tipo IIb."]
  },
  {
    enunciado: "¿Qué adaptación periférica inducida por el entrenamiento de resistencia mejora la capacidad de oxidación de lípidos?",
    correcta: "El aumento de la densidad mitocondrial y de la actividad de enzimas del ciclo de Krebs como la citrato sintasa.",
    incorrectas: ["La hipertrofia de las fibras de contracción rápida para almacenar más fosfocreatina.", "La reducción del número de capilares para acelerar la velocidad del flujo sanguíneo."]
  },
  {
    enunciado: "El método de entrenamiento 'Fartlek' (juego de velocidades) se diferencia de los métodos interválicos clásicos en que:",
    correcta: "Los cambios de intensidad son predominantemente orgánicos, aprovechando desniveles del terreno y sensaciones del alumno, sin pausas de reposo total.",
    incorrectas: ["Requiere pausas de recuperación completa entre cada fase de alta intensidad para resintetizar fosfágenos.", "Se basa exclusivamente en el control rígido de la frecuencia cardíaca mediante cronómetro."]
  },
  {
    enunciado: "¿Cuál es el componente de la resistencia que permite mantener una intensidad cercana al $VO_{2}$ máx durante el mayor tiempo posible?",
    correcta: "La capacidad aeróbica o resistencia a la fatiga en intensidades supraumbral.",
    incorrectas: ["La velocidad de reacción simple ante un estímulo sonoro.", "La fuerza máxima absoluta en contracción isométrica."]
  },
  {
    enunciado: "En el contexto de la Educación Secundaria, ¿por qué es prioritario el desarrollo de la resistencia aeróbica frente a la anaeróbica láctica?",
    correcta: "Debido a la inmadurez de los sistemas enzimáticos glucolíticos y la menor capacidad de tamponamiento (buffering) del lactato en adolescentes.",
    incorrectas: ["Porque el ácido láctico acumulado provoca el cierre prematuro de las epífisis de crecimiento óseo.", "Porque la resistencia aeróbica no requiere ningún tipo de gasto energético previo."]
  },
  {
    enunciado: "El 'Umbral Anaeróbico' (VT2 o MLSS) se identifica metabólicamente por:",
    correcta: "La intensidad máxima en la que el aclaramiento de lactato iguala su tasa de producción, evitando la acidosis metabólica progresiva.",
    incorrectas: ["El momento en que el cociente respiratorio (RER) baja de 0.7 indicando uso exclusivo de proteínas.", "La frecuencia cardíaca en la que el sujeto entra en estado de síncope por hipoxia."]
  },
  {
    enunciado: "¿Qué efecto tiene el entrenamiento de resistencia sobre la curva de disociación de la oxihemoglobina?",
    correcta: "Mejora la eficiencia del intercambio gaseoso, facilitando la entrega de oxígeno a los tejidos mediante una mayor capilarización.",
    incorrectas: ["Provoca que la hemoglobina se una al oxígeno de forma irreversible impidiendo su liberación.", "Reduce la cantidad de mioglobina en el músculo para favorecer el transporte plasmático."]
  },
  {
    enunciado: "La resistencia de 'Larga Duración III' (RLD III) comprende esfuerzos que se sitúan temporalmente entre:",
    correcta: "35 y 90 minutos, con un elevado componente de metabolismo de ácidos grasos.",
    incorrectas: ["2 y 10 minutos, donde predomina la potencia aeróbica máxima.", "Menos de 30 segundos, con predominio de la vía de los fosfágenos."]
  },
  {
    enunciado: "Un indicador de eficiencia en la resistencia es la 'Economía de Movimiento', la cual se define como:",
    correcta: "Un menor consumo de oxígeno ($VO_{2}$) para una misma velocidad submáxima de desplazamiento.",
    incorrectas: ["La capacidad de correr sin elevar la frecuencia cardíaca por encima de 100 ppm.", "El ahorro de energía al reducir la amplitud de zancada al mínimo posible."]
  },
  {
    enunciado: "El método 'Interválico Extensivo' en el desarrollo de la resistencia escolar busca:",
    correcta: "Incrementar el volumen total de trabajo a intensidades moderadas-altas con pausas de recuperación incompleta.",
    incorrectas: ["Alcanzar la fatiga total en menos de 10 segundos para mejorar la velocidad pura.", "Realizar estiramientos pasivos entre series para aumentar la flexibilidad."]
  },
  {
    enunciado: "¿Qué adaptación hematológica crónica se produce como respuesta al entrenamiento de resistencia sistemático?",
    correcta: "Aumento del volumen plasmático y de la masa total de hemoglobina, mejorando la capacidad de transporte de oxígeno.",
    incorrectas: ["Disminución del número de glóbulos rojos para hacer la sangre más viscosa.", "Aumento de la concentración de plaquetas para evitar hemorragias durante el esfuerzo."]
  },
  {
    enunciado: "La 'Deriva Cardiovascular' durante un ejercicio de resistencia prolongado en ambiente caluroso se caracteriza por:",
    correcta: "Un aumento progresivo de la frecuencia cardíaca para compensar la caída del volumen sistólico debida a la deshidratación.",
    incorrectas: ["Una bajada brusca de las pulsaciones por la adaptación del corazón al calor extremo.", "Un aumento de la presión arterial diastólica por vasoconstricción cutánea."]
  },
  {
    enunciado: "¿Cuál es el principal sustrato energético utilizado durante un esfuerzo de resistencia aeróbica al 65% del $VO_{2}$ máx?",
    correcta: "Una mezcla equilibrada de glucógeno y lípidos (ácidos grasos libres).",
    incorrectas: ["Fosfocreatina y ATP de reserva exclusivamente.", "Proteínas estructurales de las fibras tipo I."]
  },
  {
    enunciado: "En la evaluación de la resistencia en Secundaria, el Test de Course Navette es un test de tipo:",
    correcta: "Incremental, máximo y de campo, que estima el consumo máximo de oxígeno de forma indirecta.",
    incorrectas: ["Continuo, submáximo y de laboratorio, que mide el umbral de potencia de saltos.", "Fraccionado, estático y cualitativo para medir la coordinación óculo-pédica."]
  },
  {
    enunciado: "La 'Resistencia Muscular Local' es la capacidad de un grupo muscular específico para:",
    correcta: "Mantener una tensión mecánica repetida frente a una carga moderada retrasando la fatiga local.",
    incorrectas: ["Realizar un sprint de 5 metros a la máxima velocidad posible.", "Levantar la carga máxima absoluta una sola vez."]
  },
  {
    enunciado: "¿Cómo influye el entrenamiento de resistencia sobre el sistema nervioso autónomo?",
    correcta: "Incrementa el tono parasimpático y reduce el tono simpático en reposo, provocando bradicardia funcional.",
    incorrectas: ["Aumenta la excitabilidad simpática constante, elevando la frecuencia cardíaca basal.", "Anula los reflejos propioceptivos para centrar la energía en el metabolismo."]
  },
  {
    enunciado: "La 'Capacidad Aeróbica' se distingue de la 'Potencia Aeróbica' en que la primera se refiere a:",
    correcta: "La cantidad total de energía disponible a través de la vía oxidativa (el 'depósito' energético).",
    incorrectas: ["La tasa máxima de utilización de oxígeno por unidad de tiempo.", "La velocidad máxima de carrera en un sprint de 100 metros."]
  },
  {
    enunciado: "El método 'Continuo Variable' se caracteriza por:",
    correcta: "La alternancia planificada de tramos de intensidad superior e inferior al umbral anaeróbico sin pausas de descanso.",
    incorrectas: ["La realización de un solo esfuerzo máximo seguido de 24 horas de reposo.", "El uso de diferentes deportes en la misma sesión sin relación metabólica."]
  },
  {
    enunciado: "¿Qué papel juega el glucógeno hepático durante un esfuerzo de resistencia de larga duración?",
    correcta: "Mantiene los niveles de glucosa en sangre (glucemia) para suministrar energía al sistema nervioso central y músculos activos.",
    incorrectas: ["Se utiliza exclusivamente para la contracción de las fibras rápidas del tren superior.", "Se convierte en ácido láctico antes de salir al torrente sanguíneo."]
  },
  {
    enunciado: "Un síntoma inequívoco de fatiga central durante un ejercicio de resistencia es:",
    correcta: "La pérdida de eficiencia en el reclutamiento de unidades motoras y el aumento del esfuerzo percibido (RPE).",
    incorrectas: ["El aumento del grosor de las paredes arteriales de forma instantánea.", "La desaparición del reflejo corneal."]
  },
  {
    enunciado: "La resistencia anaeróbica aláctica es la capacidad de:",
    correcta: "Realizar esfuerzos de intensidad máxima durante 6 a 10 segundos utilizando fosfágenos.",
    incorrectas: ["Correr una maratón sin beber agua durante todo el recorrido.", "Mantener una postura estática de yoga durante 15 minutos."]
  },
  {
    enunciado: "En la planificación de la resistencia escolar, el concepto de 'Multilateralidad' implica:",
    correcta: "Desarrollar la base aeróbica mediante una gran diversidad de actividades motrices y deportes.",
    incorrectas: ["Entrenar solo un lado del cuerpo para compensar posibles asimetrías genéticas.", "Utilizar solo un método de entrenamiento para asegurar la especialización."]
  },
  {
    enunciado: "El 'Velo de la fatiga' en los esfuerzos de resistencia anaeróbica láctica está causado principalmente por:",
    correcta: "La acumulación de protones ($H^{+}$) que inhiben la actividad de la fosfofructoquinasa (PFK).",
    incorrectas: ["La falta de nitrógeno gaseoso en las mitocondrias de las fibras lentas.", "El exceso de vitaminas hidrosolubles en el torrente sanguíneo."]
  },
  {
    enunciado: "¿Qué se entiende por 'Entrenamiento en Hipoxia' para la resistencia?",
    correcta: "Entrenamiento en condiciones de baja presión parcial de oxígeno para estimular la producción de eritropoyetina (EPO).",
    incorrectas: ["Entrenamiento respirando a través de una máscara que filtra el dióxido de carbono.", "Entrenamiento bajo el agua manteniendo la respiración el máximo tiempo posible."]
  },
  {
    enunciado: "En la LOMLOE, los contenidos de resistencia deben orientarse a que el alumno:",
    correcta: "Sea capaz de autorregular su intensidad basándose en la frecuencia cardíaca y la percepción subjetiva del esfuerzo.",
    incorrectas: ["Memorice los récords mundiales de todas las disciplinas de fondo del atletismo.", "Gane obligatoriamente todas las competiciones extraescolares del centro."]
  },
  {
    enunciado: "La mejora del volumen sistólico por el entrenamiento de resistencia se produce por:",
    correcta: "El aumento del llenado diastólico (precarga) y la mayor contractilidad del miocardio.",
    incorrectas: ["La reducción del tamaño del corazón para que lata más rápido con menos esfuerzo.", "El endurecimiento de las válvulas cardíacas para evitar el reflujo sanguíneo."]
  },
  {
    enunciado: "¿Cuál es el beneficio de realizar una 'Vuelta a la Calma' activa tras un entrenamiento de resistencia intenso?",
    correcta: "Acelerar la remoción de lactato sanguíneo al ser utilizado como combustible por los músculos en actividad ligera.",
    incorrectas: ["Aumentar los niveles de adrenalina para mantenerse despierto durante el resto del día.", "Detener bruscamente el flujo sanguíneo para evitar la sudoración."]
  },
  {
    enunciado: "La resistencia aeróbica contribuye a la salud metabólica del adolescente al:",
    correcta: "Aumentar la sensibilidad a la insulina y mejorar la capacidad de transporte de los transportadores GLUT-4.",
    incorrectas: ["Impedir el crecimiento de los huesos para concentrar la energía en los órganos.", "Eliminar por completo la necesidad de ingerir carbohidratos en la dieta."]
  },
  {
    enunciado: "Un RER (Cociente de Intercambio Respiratorio) superior a 1.0 durante un test de resistencia indica:",
    correcta: "Que el sujeto está tamponando la acidosis láctica mediante la expulsión excesiva de $CO_{2}$ (vía anaeróbica dominante).",
    incorrectas: ["Que el organismo está quemando exclusivamente grasas saturadas de reserva.", "Que el alumno ha dejado de producir energía y está en estado basal."]
  },
  {
    enunciado: "La 'Angiogénesis' en el músculo entrenado en resistencia consiste en:",
    correcta: "La creación de nuevos capilares sanguíneos para mejorar el aporte de oxígeno y nutrientes.",
    incorrectas: ["El ensanchamiento de las arteriolas para aumentar la presión arterial sistólica.", "La sustitución de venas por arterias en las extremidades inferiores."]
  },
  {
    enunciado: "La resistencia de 'Corta Duración' (RCD) se sitúa entre los 35 segundos y los 2 minutos, dependiendo críticamente de:",
    correcta: "La glucólisis anaeróbica láctica y la capacidad de amortiguación del pH.",
    incorrectas: ["La oxidación de las proteínas musculares del antebrazo.", "La cantidad de oxígeno almacenado en los glóbulos blancos."]
  },
  {
    enunciado: "¿Qué papel juega la mioglobina en la resistencia muscular?",
    correcta: "Facilita la difusión del oxígeno desde la membrana celular hasta la mitocondria.",
    incorrectas: ["Se encarga de transportar el glucógeno por el torrente sanguíneo.", "Es la responsable de la contracción de las fibras rápidas tipo IIb."]
  },
  {
    enunciado: "El entrenamiento interválico de alta intensidad (HIIT) mejora el $VO_{2}$ máx mediante:",
    correcta: "Un estrés máximo sobre el volumen sistólico y la capacidad oxidativa mitocondrial en periodos cortos.",
    incorrectas: ["La realización de ejercicios estáticos de muy larga duración sin movimiento alguno.", "El aumento del tiempo de sueño profundo durante la noche."]
  },
  {
    enunciado: "La 'Fatiga Periférica' en la resistencia se asocia con:",
    correcta: "La acumulación de metabolitos (Pi, $H^{+}$) y la alteración de la liberación de calcio en el retículo sarcoplásmico.",
    incorrectas: ["La falta de atención a las explicaciones teóricas del profesor.", "La ausencia de luz solar en el pabellón de deportes."]
  },
  {
    enunciado: "La resistencia aeróbica es considerada una capacidad 'base' porque:",
    correcta: "Permite soportar cargas de entrenamiento en otras capacidades y acelera los procesos de recuperación.",
    incorrectas: ["Es la única capacidad que no requiere del sistema nervioso para expresarse.", "Se puede entrenar sin necesidad de realizar ningún tipo de movimiento."]
  },
  {
    enunciado: "Un factor genético determinante de la resistencia es:",
    correcta: "El porcentaje de fibras musculares de tipo I (lentas) y la densidad capilar heredada.",
    incorrectas: ["El color de los ojos y la longitud del cabello del individuo.", "La capacidad de hablar varios idiomas de forma fluida."]
  },
  {
    enunciado: "La 'Relación de Intercambio Respiratorio' (RER) en reposo suele estar cerca de:",
    correcta: "0.8 (indicando una mezcla de grasas e hidratos de carbono).",
    incorrectas: ["2.5 (indicando un estado de hiperventilación extrema).", "0.0 (indicando que no hay intercambio gaseoso)."]
  },
  {
    enunciado: "El entrenamiento de resistencia en adolescentes debe evitar:",
    correcta: "Especializaciones prematuras en distancias de fondo extremas que comprometan el desarrollo integral.",
    incorrectas: ["Cualquier actividad que eleve las pulsaciones por encima de 120 ppm.", "Beber agua durante las sesiones de entrenamiento."]
  },
  {
    enunciado: "La 'Capacidad de Recuperación' tras un esfuerzo de resistencia es un indicador de:",
    correcta: "La eficiencia del sistema autónomo y la salud cardiovascular del sujeto.",
    incorrectas: ["La cantidad de ropa deportiva que el alumno posee.", "La velocidad a la que el alumno puede leer un texto."]
  }
];