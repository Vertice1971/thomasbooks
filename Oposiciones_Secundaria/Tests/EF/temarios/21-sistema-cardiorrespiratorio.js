// -21-sistema-cardiorrespiratorio.js

var PREGUNTAS = [
  {
    enunciado: "La ley de Frank-Starling postula que el volumen sistólico aumenta en respuesta a un incremento del volumen telediastólico. ¿Cuál es el mecanismo celular subyacente?",
    correcta: "Un mayor estiramiento de los miocardiocitos que optimiza la superposición de los filamentos de actina y miosina, aumentando la sensibilidad al calcio.",
    incorrectas: ["Una activación del sistema nervioso parasimpático que reduce la resistencia periférica total.", "Un aumento de la permeabilidad de la membrana alvéolo-capilar al dióxido de carbono."]
  },
  {
    enunciado: "¿Cómo se define técnicamente el Gasto Cardíaco ($Q$) y cuál es su comportamiento fisiológico ante un ejercicio incremental?",
    correcta: "Es el producto de la frecuencia cardíaca por el volumen sistólico; aumenta linealmente hasta alcanzar una meseta coincidente con el $VO_{2}$ máx.",
    incorrectas: ["Es el cociente entre la presión arterial media y la resistencia vascular; disminuye para facilitar el retorno venoso.", "Es la suma del volumen corriente y la frecuencia respiratoria; aumenta de forma exponencial desde el inicio del esfuerzo."]
  },
  {
    enunciado: "Durante el ejercicio de alta intensidad, se produce el 'efecto Bohr' en los tejidos activos. ¿En qué consiste este fenómeno?",
    correcta: "La disminución del pH y el aumento de la $PCO_{2}$ desplazan la curva de disociación de la hemoglobina a la derecha, facilitando la cesión de $O_{2}$ al músculo.",
    incorrectas: ["El aumento de la temperatura desplaza la curva a la izquierda, incrementando la afinidad de la hemoglobina por el oxígeno.", "La disminución de 2,3-DPG en el eritrocito favorece la captación pulmonar de oxígeno."]
  },
  {
    enunciado: "¿Qué adaptación estructural cardíaca es característica del 'corazón del deportista' de resistencia (hipertrofia excéntrica)?",
    correcta: "Aumento del diámetro de la cavidad del ventrículo izquierdo con un incremento proporcional del grosor de sus paredes.",
    incorrectas: ["Reducción del volumen diastólico final para aumentar la frecuencia de contracción.", "Engrosamiento masivo del tabique interventricular sin dilatación de las cavidades."]
  },
  {
    enunciado: "El intercambio gaseoso en la membrana alvéolo-capilar se rige por la ley de Fick. ¿Qué factor favorece una mayor difusión de oxígeno durante el esfuerzo?",
    correcta: "El aumento del área de superficie de intercambio por el reclutamiento de capilares pulmonares previamente colapsados.",
    incorrectas: ["El aumento del grosor de la barrera hematogaseosa debido al edema fisiológico.", "La disminución del gradiente de presión parcial entre el alvéolo y la sangre capilar."]
  },
  {
    enunciado: "¿Cuál es la principal vía de transporte del dióxido de carbono ($CO_{2}$) desde los tejidos hacia los pulmones?",
    correcta: "En forma de ion bicarbonato ($HCO_{3}^{-}$) en el plasma, tras la acción de la anhidrasa carbónica en el eritrocito.",
    incorrectas: ["Disuelto físicamente en el citosol de los leucocitos.", "Unido permanentemente a la mioglobina en el sarcoplasma muscular."]
  },
  {
    enunciado: "El 'punto de compensación respiratoria' (VT2) se identifica por:",
    correcta: "Un aumento desproporcionado de la ventilación minuto ($VE$) respecto a la producción de $VCO_{2}$, indicando una acidosis metabólica no compensada.",
    incorrectas: ["La estabilización de la frecuencia cardíaca a pesar del aumento de la carga de trabajo.", "Una disminución del volumen corriente que es compensada por la frecuencia respiratoria."]
  },
  {
    enunciado: "La regulación del flujo sanguíneo regional durante el ejercicio se basa en la 'autocrina' o control local. ¿Qué sustancias provocan la vasodilatación en el músculo activo?",
    correcta: "Aumento de la concentración de adenosina, potasio ($K^{+}$), lactato e hidrogeniones ($H^{+}$).",
    incorrectas: ["Aumento de la liberación de endotelina-1 y serotonina por las plaquetas.", "Disminución de la presión osmótica intersticial por pérdida de solutos."]
  },
  {
    enunciado: "La bradicardia sinusal de reposo en el deportista entrenado se atribuye principalmente a:",
    correcta: "Un aumento del tono vagal (parasimpático) y una disminución de la frecuencia intrínseca del nodo sinusal.",
    incorrectas: ["Una deficiencia en la conducción del haz de His por fatiga crónica.", "La hipertrofia de las aurículas que dificulta la propagación del impulso eléctrico."]
  },
  {
    enunciado: "La diferencia arteriovenosa de oxígeno ($a-v O_{2}$) aumenta significativamente durante el ejercicio intenso. ¿Qué refleja este parámetro?",
    correcta: "La capacidad de los tejidos periféricos para extraer y utilizar el oxígeno de la sangre arterial.",
    incorrectas: ["La eficacia de la ventilación pulmonar para saturar la hemoglobina.", "La resistencia de las arterias sistémicas al flujo sanguíneo cardíaco."]
  },
  {
    enunciado: "¿Qué efecto tiene el entrenamiento de resistencia sobre el volumen plasmático y qué repercusión funcional conlleva?",
    correcta: "Aumenta el volumen plasmático, lo que incrementa el volumen sistólico y mejora la termorregulación por mayor flujo cutáneo.",
    incorrectas: ["Disminuye el volumen plasmático para concentrar los glóbulos rojos y mejorar el transporte de gases.", "Mantiene el volumen constante pero aumenta la viscosidad de la sangre para evitar hemorragias."]
  },
  {
    enunciado: "El 'umbral ventilatorio 1' (VT1) coincide aproximadamente con:",
    correcta: "El primer aumento sistemático del equivalente ventilatorio de oxígeno ($VE/VO_{2}$) sin aumento del de $CO_{2}$.",
    incorrectas: ["La frecuencia cardíaca máxima teórica calculada por la fórmula de Tanaka.", "El inicio de la fase de agotamiento glucogénico en fibras tipo IIb."]
  },
  {
    enunciado: "Durante un ejercicio prolongado en ambiente caluroso, ocurre la 'deriva cardiovascular'. Esta se define por:",
    correcta: "Un aumento progresivo de la frecuencia cardíaca para compensar la disminución del volumen sistólico debida a la deshidratación.",
    incorrectas: ["Un descenso de la temperatura central que provoca vasoconstricción periférica generalizada.", "Una estabilización del gasto cardíaco por debajo de los niveles basales."]
  },
  {
    enunciado: "La hemoglobina fetal tiene una curva de disociación desplazada a la izquierda respecto a la materna. ¿Qué significa esto en términos de afinidad?",
    correcta: "Tiene una mayor afinidad por el $O_{2}$, permitiendo la captación del gas a presiones parciales más bajas.",
    incorrectas: ["Tiene una menor afinidad, lo que facilita la liberación de oxígeno en la placenta.", "No presenta diferencias funcionales, solo estructurales en las cadenas de globina."]
  },
  {
    enunciado: "El volumen de reserva espiratoria (VRE) se define como:",
    correcta: "El volumen máximo de aire que puede ser exhalado forzadamente tras una espiración normal a volumen corriente.",
    incorrectas: ["La cantidad de aire que permanece en los pulmones tras una espiración máxima.", "El volumen total de aire que entra en los pulmones durante un minuto de ejercicio."]
  },
  {
    enunciado: "¿Cómo afecta el entrenamiento aeróbico a la respuesta de la frecuencia cardíaca ante una carga de trabajo submáxima determinada?",
    correcta: "Se produce una reducción de la frecuencia cardíaca para la misma carga, indicando una mayor eficiencia cardíaca.",
    incorrectas: ["Se produce un aumento de la frecuencia para maximizar el transporte de nutrientes por unidad de tiempo.", "La frecuencia se mantiene idéntica, pero aumenta la presión arterial sistólica de forma compensatoria."]
  },
  {
    enunciado: "La presión arterial media (PAM) durante el ejercicio de fuerza isométrica intensa tiende a:",
    correcta: "Aumentar drásticamente debido a la oclusión mecánica de los vasos y la respuesta refleja presora.",
    incorrectas: ["Disminuir por la apertura masiva de capilares en los músculos antagonistas.", "Mantenerse constante gracias a la autorregulación de los barorreceptores carotídeos."]
  },
  {
    enunciado: "¿Cuál es el principal quimiorreceptor periférico sensible a la hipoxia ($PO_{2}$ baja) que estimula la ventilación?",
    correcta: "Los cuerpos carotídeos localizados en la bifurcación de las arterias carótidas comunes.",
    incorrectas: ["Los quimiorreceptores centrales situados en la superficie ventral del bulbo raquídeo.", "Los receptores de estiramiento pulmonar situados en los bronquiolos."]
  },
  {
    enunciado: "La mioglobina, presente en el músculo esquelético, se diferencia de la hemoglobina en que:",
    correcta: "Tiene una curva de disociación hiperbólica, actuando como reserva de $O_{2}$ en los inicios del ejercicio o hipoxia severa.",
    incorrectas: ["Puede transportar hasta cuatro moléculas de oxígeno simultáneamente.", "Su afinidad por el oxígeno disminuye drásticamente al aumentar el pH citosólico."]
  },
  {
    enunciado: "El volumen residual (VR) es el aire que queda en los pulmones tras una espiración máxima. ¿Cuál es su importancia funcional?",
    correcta: "Evita el colapso alveolar (atelectasia) y permite la continuidad del intercambio gaseoso entre ciclos respiratorios.",
    incorrectas: ["Es el aire que se utiliza para la fonación durante el ejercicio intenso.", "Sirve para enfriar la sangre venosa que llega al ventrículo derecho."]
  },
  {
    enunciado: "En el marco de la LOMLOE, la valoración funcional cardiorrespiratoria en el aula debe priorizar:",
    correcta: "La interpretación de datos personales para la toma de decisiones autónomas sobre la salud y la intensidad del esfuerzo.",
    incorrectas: ["El establecimiento de ránkings competitivos basados en el $VO_{2}$ máx estimado.", "La detección exclusiva de talentos deportivos para clubes de alto rendimiento."]
  },
  {
    enunciado: "La poscarga cardíaca se define como:",
    correcta: "La resistencia que deben vencer los ventrículos para eyectar la sangre hacia las arterias aorta y pulmonar.",
    incorrectas: ["El grado de llenado ventricular justo antes de la sístole auricular.", "La frecuencia cardíaca alcanzada durante la fase de recuperación."]
  },
  {
    enunciado: "¿Qué estructura del sistema de conducción cardíaco es responsable del retraso del impulso, permitiendo el llenado ventricular óptimo?",
    correcta: "El nodo auriculoventricular (AV).",
    incorrectas: ["El nodo sinoauricular (SA).", "Las fibras de Purkinje."]
  },
  {
    enunciado: "La capacidad vital (CV) es la suma de los siguientes volúmenes pulmonares:",
    correcta: "Volumen corriente, volumen de reserva inspiratoria y volumen de reserva espiratoria.",
    incorrectas: ["Volumen residual y volumen de reserva espiratoria únicamente.", "Capacidad pulmonar total menos el volumen corriente."]
  },
  {
    enunciado: "Durante la inspiración profunda, la presión intrapulmonar se vuelve:",
    correcta: "Negativa respecto a la presión atmosférica, permitiendo la entrada de aire.",
    incorrectas: ["Positiva para forzar la apertura de los alvéolos colapsados.", "Igual a la presión de vapor de agua en la tráquea."]
  },
  {
    enunciado: "La capilarización muscular es una adaptación crónica al ejercicio de resistencia que mejora:",
    correcta: "La superficie de intercambio y el tiempo de tránsito de los eritrocitos, optimizando la difusión de gases.",
    incorrectas: ["La presión arterial sistólica durante el reposo nocturno.", "La velocidad de contracción de las fibras de tipo IIb."]
  },
  {
    enunciado: "¿Qué ocurre con la fracción de eyección del ventrículo izquierdo durante un ejercicio incremental en un sujeto sano?",
    correcta: "Aumenta debido al incremento de la contractilidad miocárdica por estimulación simpática.",
    incorrectas: ["Disminuye para evitar el daño por cizallamiento en las válvulas semilunares.", "Se mantiene constante en un 15% independientemente de la intensidad."]
  },
  {
    enunciado: "La ventilación minuto ($VE$) aumenta de forma bifásica durante el ejercicio. El primer umbral ventilatorio se asocia con:",
    correcta: "La necesidad de eliminar el exceso de $CO_{2}$ producido por el tamponamiento del lactato mediante el bicarbonato.",
    incorrectas: ["El agotamiento de las reservas de nitrógeno en el plasma sanguíneo.", "La caída de la presión parcial de oxígeno por debajo de 40 mmHg."]
  },
  {
    enunciado: "El volumen diastólico final (VDF) está influenciado por el retorno venoso. ¿Qué factor facilita este retorno durante el ejercicio de carrera?",
    correcta: "La bomba muscular de las extremidades inferiores y la presión negativa intratorácica durante la inspiración.",
    incorrectas: ["La vasodilatación de las arteriolas renales y esplácnicas.", "La gravedad en posición de bipedestación prolongada."]
  },
  {
    enunciado: "La difusión de $CO_{2}$ a través de la membrana respiratoria es aproximadamente 20 veces superior a la del $O_{2}$. ¿A qué se debe esta diferencia?",
    correcta: "A la mayor solubilidad del dióxido de carbono en los tejidos y fluidos corporales.",
    incorrectas: ["A que el tamaño de la molécula de $CO_{2}$ es significativamente menor.", "A la presencia de transportadores activos de $CO_{2}$ en la membrana alveolar."]
  },
  {
    enunciado: "Un soplo cardíaco sistólico funcional en un adolescente deportista suele indicar:",
    correcta: "Un flujo turbulento benigno debido al elevado gasto cardíaco y la baja viscosidad relativa de la sangre.",
    incorrectas: ["Una estenosis valvular aórtica grave que requiere cese inmediato de la actividad física.", "Una comunicación interauricular con shunt de derecha a izquierda."]
  },
  {
    enunciado: "La 'frecuencia cardíaca intrínseca' es aquella que el corazón mantiene sin control autonómico. Su valor aproximado es:",
    correcta: "100 latidos por minuto.",
    incorrectas: ["60 latidos por minuto.", "180 latidos por minuto."]
  },
  {
    enunciado: "En un electrocardiograma de reposo de un deportista de resistencia, es común encontrar:",
    correcta: "Bradicardia sinusal y posibles signos de hipertrofia ventricular izquierda (ondas R altas).",
    incorrectas: ["Taquicardia paroxística supraventricular constante.", "Inversión del segmento ST en todas las derivaciones precordiales."]
  },
  {
    enunciado: "El cociente respiratorio (RER) puede superar el valor de 1.1 durante un test de esfuerzo máximo debido a:",
    correcta: "La hiperventilación masiva que elimina $CO_{2}$ no metabólico procedente del tamponamiento de la acidosis.",
    incorrectas: ["La utilización exclusiva de ácidos grasos de cadena muy corta.", "La síntesis de glucosa a partir de aminoácidos ramificados."]
  },
  {
    enunciado: "La 'presión de pulso' es la diferencia entre la presión sistólica y la diastólica. Durante el ejercicio aeróbico:",
    correcta: "Aumenta, ya que la sistólica sube y la diastólica se mantiene o baja levemente.",
    incorrectas: ["Disminuye, debido a que ambas presiones tienden a igualarse en el umbral anaeróbico.", "Se mantiene constante para evitar el riesgo de rotura de capilares cerebrales."]
  },
  {
    enunciado: "¿Cuál es la respuesta del sistema respiratorio ante un ejercicio realizado en altitud moderada (hipoxia hipobárica)?",
    correcta: "Hiperventilación inmediata mediada por los quimiorreceptores periféricos para compensar la baja $PO_{2}$ arterial.",
    incorrectas: ["Hipoventilación para conservar los niveles de $CO_{2}$ y evitar la alcalosis respiratoria.", "Aumento de la capacidad residual funcional para almacenar más aire viciado."]
  },
  {
    enunciado: "La compliance o distensibilidad pulmonar se define como:",
    correcta: "La facilidad con la que los pulmones y el tórax se expanden ante cambios de presión.",
    incorrectas: ["La resistencia al flujo de aire en las vías respiratorias altas.", "La velocidad máxima de difusión del nitrógeno a través de la pleura."]
  },
  {
    enunciado: "Durante la fase de recuperación post-ejercicio, la frecuencia cardíaca disminuye rápidamente en los primeros 30-60 segundos. Este descenso depende de:",
    correcta: "La reactivación del sistema nervioso parasimpático (tono vagal).",
    incorrectas: ["La eliminación total de la adrenalina circulante por vía renal.", "El cierre de las válvulas auriculoventriculares para reducir el gasto."]
  },
  {
    enunciado: "¿Qué parámetro cardiorrespiratorio es el mejor predictor del rendimiento en pruebas de resistencia de larga duración?",
    correcta: "La velocidad o potencia asociada al umbral de lactato o umbral ventilatorio 2.",
    incorrectas: ["El volumen de reserva inspiratoria medido en reposo.", "La frecuencia cardíaca máxima absoluta alcanzada en el test."]
  },
  {
    enunciado: "En Educación Física escolar, el conocimiento de la frecuencia cardíaca de reserva permite:",
    correcta: "Prescribir intensidades de ejercicio personalizadas mediante la fórmula de Karvonen.",
    incorrectas: ["Predecir con exactitud la esperanza de vida del alumnado.", "Sustituir la evaluación de la técnica motriz por parámetros fisiológicos."]
  }
];