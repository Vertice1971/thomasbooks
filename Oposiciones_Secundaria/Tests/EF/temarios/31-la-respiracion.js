// -31-la-funcion-respiratoria.js

var PREGUNTAS = [
  {
    enunciado: "En la mecánica ventilatoria, ¿cuál es el mecanismo fisiológico responsable de la espiración en reposo?",
    correcta: "Es un proceso pasivo debido al retroceso elástico del tejido pulmonar y la relajación del diafragma.",
    incorrectas: [
      "La contracción tónica de los músculos intercostales internos y el recto abdominal.",
      "Un aumento de la presión intrapleural por encima de la presión atmosférica mediado por el surfactante."
    ]
  },
  {
    enunciado: "¿Cómo se define el 'Volumen Residual' (VR) y cuál es su relevancia durante el ejercicio físico?",
    correcta: "Es el aire que permanece en los pulmones tras una espiración máxima; evita el colapso alveolar y mantiene el intercambio gaseoso continuo.",
    incorrectas: [
      "Es el volumen de aire que entra y sale en una respiración normal; determina la capacidad de transporte de CO2.",
      "Es el aire que se localiza en las vías de conducción donde no existe intercambio gaseoso capilar."
    ]
  },
  {
    enunciado: "Durante un esfuerzo de alta intensidad, el aumento de la ventilación minuto ($V_E$) se logra principalmente mediante:",
    correcta: "Un incremento inicial del volumen corriente seguido de un aumento exponencial de la frecuencia respiratoria.",
    incorrectas: [
      "La reducción del espacio muerto anatómico mediante la bronconstricción simpática.",
      "La disminución de la capacidad funcional residual para aumentar la presión de difusión."
    ]
  },
  {
    enunciado: "La difusión de gases en la barrera alvéolo-capilar se rige por la Ley de Fick. ¿Qué factor es determinante para la mayor solubilidad del $CO_2$ respecto al $O_2$?",
    correcta: "El coeficiente de solubilidad del $CO_2$ es 20 veces superior, lo que facilita su difusión a pesar de gradientes de presión menores.",
    incorrectas: [
      "El menor peso molecular del dióxido de carbono que permite atravesar los poros de la membrana por ósmosis.",
      "La presencia de transportadores activos de ATP en los neumocitos tipo II."
    ]
  },
  {
    enunciado: "El 'equivalente ventilatorio para el oxígeno' ($V_E/VO_2$) es un parámetro que indica:",
    correcta: "La eficiencia respiratoria, representando la cantidad de aire que debe ventilarse para consumir un litro de oxígeno.",
    incorrectas: [
      "La cantidad de hemoglobina saturada por cada mililitro de sangre arterial.",
      "El tiempo que tarda el aire en recorrer desde la tráquea hasta los bronquiolos terminales."
    ]
  },
  {
    enunciado: "El punto de compensación respiratoria (VT2) se caracteriza por:",
    correcta: "Una hiperventilación desproporcionada en respuesta a la acidosis metabólica, con un descenso de la $PCO_2$ al final de la espiración.",
    incorrectas: [
      "Una estabilización de la frecuencia cardíaca debido a la máxima oxigenación mitocondrial.",
      "El momento en que el consumo de oxígeno supera la capacidad de difusión de la mioglobina."
    ]
  },
  {
    enunciado: "En el transporte de gases, ¿qué efecto describe el desplazamiento de la curva de disociación de la hemoglobina hacia la derecha por aumento de la temperatura y descenso del pH?",
    correcta: "Efecto Bohr.",
    incorrectas: [
      "Efecto Haldane.",
      "Ley de Dalton."
    ]
  },
  {
    enunciado: "¿Cuál es la función del surfactante pulmonar secretado por los neumocitos tipo II?",
    correcta: "Reducir la tensión superficial en los alvéolos para evitar su colapso durante la espiración (atelectasia).",
    incorrectas: [
      "Actuar como un potente vasodilatador de los capilares pulmonares para aumentar el gasto cardíaco.",
      "Inhibir la entrada de nitrógeno gaseoso en la circulación sistémica."
    ]
  },
  {
    enunciado: "La regulación central de la respiración reside en el bulbo raquídeo. ¿Cuál es el principal estímulo químico que activa los centros inspiratorios?",
    correcta: "El aumento de la concentración de hidrogeniones ($H^+$) y $PCO_2$ en el líquido cefalorraquídeo.",
    incorrectas: [
      "El descenso moderado de la presión parcial de oxígeno ($PO_2$) en la sangre arterial.",
      "El aumento de la presión osmótica plasmática detectado por el hipotálamo."
    ]
  },
  {
    enunciado: "El 'espacio muerto fisiológico' se diferencia del anatómico en que el primero incluye:",
    correcta: "Los alvéolos que están ventilados pero no perfundidos o cuya membrana está dañada.",
    incorrectas: [
      "El volumen de aire que se queda atrapado en la laringe durante la deglución.",
      "La suma del volumen de reserva inspiratoria y el volumen residual pulmonar."
    ]
  },
  {
    enunciado: "Durante la maniobra de Valsalva (espiración con glotis cerrada) se produce:",
    correcta: "Un aumento drástico de la presión intratorácica que reduce el retorno venoso y el gasto cardíaco.",
    incorrectas: [
      "Una hiperoxigenación de la sangre arterial que mejora el rendimiento en apnea.",
      "Una bradicardia refleja que aumenta el volumen sistólico de forma inmediata."
    ]
  },
  {
    enunciado: "La capacidad vital (CV) representa la suma de:",
    correcta: "Volumen corriente + Volumen de reserva inspiratoria + Volumen de reserva espiratoria.",
    incorrectas: [
      "Capacidad pulmonar total + Volumen residual.",
      "Volumen corriente x Frecuencia respiratoria."
    ]
  },
  {
    enunciado: "En el transporte de $CO_2$, el 'efecto Haldane' postula que:",
    correcta: "La desoxigenación de la sangre aumenta la capacidad de la hemoglobina para transportar dióxido de carbono.",
    incorrectas: [
      "El aumento de $CO_2$ en los pulmones facilita la liberación de oxígeno en los tejidos.",
      "La presión total de una mezcla de gases es igual a la suma de las presiones parciales."
    ]
  },
  {
    enunciado: "¿Qué adaptación respiratoria crónica es común en sujetos entrenados en resistencia?",
    correcta: "Una mejora en la eficiencia de los músculos respiratorios y un aumento de la capacidad de difusión alvéolo-capilar.",
    incorrectas: [
      "Un aumento significativo de los volúmenes pulmonares estáticos (como la Capacidad Vital).",
      "La transformación de los neumocitos en células musculares contráctiles."
    ]
  },
  {
    enunciado: "La 'disnea' durante el ejercicio intenso en alumnos de Secundaria suele ser una sensación subjetiva de falta de aire causada por:",
    correcta: "Un desajuste entre la demanda de ventilación central y la capacidad mecánica de la bomba respiratoria.",
    incorrectas: [
      "El agotamiento total de las reservas de oxígeno en el bazo.",
      "La cristalización del ácido láctico en los bronquiolos terminales."
    ]
  },
  {
    enunciado: "El control periférico de la respiración mediante los cuerpos carotídeos responde principalmente a:",
    correcta: "Descensos significativos de la $PO_2$ arterial (hipoxia) y aumentos de la acidez.",
    incorrectas: [
      "Cambios en la presión arterial sistólica detectados por barorreceptores.",
      "La presencia de glucosa en el plasma sanguíneo."
    ]
  },
  {
    enunciado: "El cociente respiratorio (RER) de 0.85 indica que el organismo está oxidando:",
    correcta: "Una mezcla equilibrada de glúcidos y lípidos.",
    incorrectas: [
      "Exclusivamente ácidos grasos de cadena larga.",
      "Proteínas estructurales durante un estado de inanición."
    ]
  },
  {
    enunciado: "La hemoglobina se une al oxígeno de forma cooperativa. Esto significa que:",
    correcta: "La unión de una molécula de $O_2$ facilita la unión de las siguientes moléculas a los grupos hemo restantes.",
    incorrectas: [
      "Necesita la presencia de insulina para captar el gas en el alvéolo.",
      "Solo puede transportar oxígeno si el hierro está en estado férrico ($Fe^{3+}$)."
    ]
  },
  {
    enunciado: "¿Qué músculo es considerado el principal accesorio de la inspiración forzada en el ejercicio?",
    correcta: "Esternocleidomastoideo y escalenos.",
    incorrectas: [
      "Recto mayor del abdomen.",
      "Glúteo mayor y psoas iliaco."
    ]
  },
  {
    enunciado: "La ventilación pulmonar está limitada en altitud debido a:",
    correcta: "La menor presión parcial de oxígeno en el aire ambiental, que reduce el gradiente de presión de difusión.",
    incorrectas: [
      "La ausencia de nitrógeno, que impide que los pulmones se inflen correctamente.",
      "El aumento de la densidad del aire que dificulta el paso por la tráquea."
    ]
  },
  {
    enunciado: "En la LOMLOE, el conocimiento de la mecánica respiratoria permite al alumno:",
    correcta: "Aplicar técnicas de control de la respiración para la autorregulación emocional y la recuperación física.",
    incorrectas: [
      "Realizar diagnósticos espirométricos para detectar patologías obstructivas.",
      "Diseñar planes de entrenamiento basados en la hipoxia intermitente."
    ]
  },
  {
    enunciado: "La 'ventilación colateral' en los pulmones se produce a través de:",
    correcta: "Los poros de Kohn y los canales de Lambert.",
    incorrectas: [
      "Las válvulas de Tebesio en el corazón derecho.",
      "Los conductos de Havers en el tejido óseo."
    ]
  },
  {
    enunciado: "El reflejo de Hering-Breuer tiene como misión:",
    correcta: "Limitar la insuflación pulmonar excesiva mediante receptores de estiramiento en los bronquiolos.",
    incorrectas: [
      "Provocar la tos cuando entran partículas extrañas en la faringe.",
      "Aumentar la frecuencia cardíaca al inicio de la inspiración."
    ]
  },
  {
    enunciado: "La 'presión intrapleural' durante una inspiración normal es:",
    correcta: "Siempre negativa respecto a la presión intrapulmonar, manteniendo los pulmones expandidos.",
    incorrectas: [
      "Igual a la presión atmosférica en el punto de reposo espiratorio.",
      "Positiva para expulsar el aire viciado hacia el exterior."
    ]
  },
  {
    enunciado: "¿Qué porcentaje aproximado de oxígeno se transporta disuelto físicamente en el plasma?",
    correcta: "Aproximadamente el 1.5-3%.",
    incorrectas: [
      "El 98%, unido a la albúmina plasmática.",
      "El 50%, en forma de burbujas de gas libre."
    ]
  },
  {
    enunciado: "La mioglobina muscular tiene una afinidad por el oxígeno:",
    correcta: "Mucho mayor que la hemoglobina, lo que le permite extraer $O_2$ de la sangre incluso a presiones bajas.",
    incorrectas: [
      "Menor que la hemoglobina, para facilitar que el gas llegue rápido a la mitocondria.",
      "Nula, ya que su función es exclusivamente el transporte de hierro."
    ]
  },
  {
    enunciado: "El aumento de la ventilación al inicio del ejercicio (Fase I) es de origen:",
    correcta: "Neural (mecanismos de alimentación hacia adelante o 'feed-forward' desde la corteza).",
    incorrectas: [
      "Humoral (por la subida de lactato en sangre).",
      "Térmico (por el calentamiento del hipotálamo)."
    ]
  },
  {
    enunciado: "La 'hematosis' es el proceso de:",
    correcta: "Intercambio de gases entre el aire alveolar y la sangre de los capilares pulmonares.",
    incorrectas: [
      "Formación de nuevos glóbulos rojos en la médula ósea.",
      "Destrucción de eritrocitos envejecidos en el bazo."
    ]
  },
  {
    enunciado: "Un RER superior a 1.1 durante un test de esfuerzo indica:",
    correcta: "Agotamiento metabólico y una ventilación excesiva para compensar la acidosis láctica.",
    incorrectas: [
      "Que el sujeto está utilizando solo grasas como combustible.",
      "Un estado de relajación profunda mediado por el sistema parasimpático."
    ]
  },
  {
    enunciado: "La compliance o distensibilidad pulmonar disminuye en presencia de:",
    correcta: "Fibrosis pulmonar o congestión alveolar, aumentando el trabajo respiratorio.",
    incorrectas: [
      "Ejercicio físico aeróbico regular y natación.",
      "Altas concentraciones de helio en el aire inspirado."
    ]
  },
  {
    enunciado: "En el transporte de $CO_2$, el ion bicarbonato sale del eritrocito al plasma a cambio de la entrada de:",
    correcta: "Cloro ($Cl^-$), fenómeno conocido como el intercambio de cloruro o de Hamburger.",
    incorrectas: [
      "Potasio ($K^+$), para mantener el potencial de membrana.",
      "Calcio ($Ca^{2+}$), para activar la contracción del glóbulo rojo."
    ]
  },
  {
    enunciado: "La 'quimiorrecepción central' es sensible a cambios en el pH del líquido cefalorraquídeo causados por:",
    correcta: "La difusión de $CO_2$ a través de la barrera hematoencefálica.",
    incorrectas: [
      "El paso directo de hidrogeniones ($H^+$) desde la sangre arterial.",
      "La presencia de ácido pirúvico en las neuronas del bulbo."
    ]
  },
  {
    enunciado: "La relación ventilación-perfusión ($V/Q$) óptima es de aproximadamente 0.8-1.0. ¿Qué ocurre en el ápice pulmonar en bipedestación?",
    correcta: "Hay una sobreventilación respecto a la perfusión (V/Q alta).",
    incorrectas: [
      "Hay una hipoventilación extrema con edema pulmonar fisiológico.",
      "La sangre circula más rápido que el aire debido a la gravedad."
    ]
  },
  {
    enunciado: "La 'respiración externa' se diferencia de la 'interna' en que esta última ocurre:",
    correcta: "A nivel tisular, entre los capilares sistémicos y las células del organismo.",
    incorrectas: [
      "En el interior de las fosas nasales y la faringe.",
      "Únicamente en los pulmones durante la fase de espiración."
    ]
  },
  {
    enunciado: "El volumen de reserva inspiratoria (VRI) es:",
    correcta: "El volumen de aire adicional que se puede inspirar de forma forzada tras una inspiración normal.",
    incorrectas: [
      "El aire que queda en los pulmones tras morir.",
      "La cantidad de aire que se puede exhalar tras un esfuerzo máximo."
    ]
  },
  {
    enunciado: "La 'ley de Dalton' aplicada a la respiración establece que:",
    correcta: "La presión parcial de un gas es proporcional a su concentración en la mezcla gaseosa.",
    incorrectas: [
      "La solubilidad de un gas depende de su presión parcial y de la temperatura.",
      "El volumen de un gas es inversamente proporcional a la presión."
    ]
  },
  {
    enunciado: "El entrenamiento específico de la musculatura inspiratoria (IMT) en deportistas busca:",
    correcta: "Atenuar el reflejo metabólico respiratorio (metaborreflex) que causa vasoconstricción en los miembros activos.",
    incorrectas: [
      "Aumentar el tamaño de la tráquea para que pase más aire.",
      "Reducir el número de alvéolos para que el intercambio sea más rápido."
    ]
  },
  {
    enunciado: "La 'hipoxia hipóxica' se produce por:",
    correcta: "Una baja presión parcial de $O_2$ en el aire inspirado (ej. altitud).",
    incorrectas: [
      "Una intoxicación por monóxido de carbono que bloquea la hemoglobina.",
      "Una insuficiencia cardíaca que impide que la sangre llegue a los tejidos."
    ]
  },
  {
    enunciado: "¿Cuál es el valor medio de la ventilación minuto en reposo para un adulto sano?",
    correcta: "6-8 litros por minuto.",
    incorrectas: [
      "150-200 litros por minuto.",
      "1 litro por hora."
    ]
  },
  {
    enunciado: "La integración de la función respiratoria en la EF escolar fomenta la 'Salud Integral' al:",
    correcta: "Conectar la eficiencia fisiológica con el bienestar psicológico y la conciencia corporal.",
    incorrectas: [
      "Preparar a los alumnos para la apnea competitiva en profundidad.",
      "Obligar a los alumnos a respirar únicamente por la nariz durante toda la jornada escolar."
    ]
  }
];