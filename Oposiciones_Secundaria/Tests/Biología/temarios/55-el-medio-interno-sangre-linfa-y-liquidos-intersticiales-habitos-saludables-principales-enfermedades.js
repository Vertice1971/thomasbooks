// temarios/55-el-medio-interno-sangre-linfa-y-liquidos-intersticiales-habitos-saludables-principales-enfermedades.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué se entiende por medio interno según la fisiología clásica?",
    correcta: "El conjunto de líquidos extracelulares que rodean a las células y permiten el intercambio de sustancias",
    incorrectas: [
      "El contenido de agua intracelular exclusivamente",
      "El volumen sanguíneo circulante sin incluir el intersticio"
    ]
  },
  {
    enunciado: "¿Cuál es la composición mayoritaria del plasma sanguíneo?",
    correcta: "Aproximadamente 90% agua, junto con proteínas, solutos y nutrientes",
    incorrectas: [
      "Mayoría de lípidos y colesterol",
      "Predominio de células nucleadas"
    ]
  },
  {
    enunciado: "¿Qué función principal tienen los eritrocitos?",
    correcta: "Transportar oxígeno y parte del dióxido de carbono mediante hemoglobina",
    incorrectas: [
      "Producir anticuerpos específicos",
      "Activar la cascada de coagulación"
    ]
  },
  {
    enunciado: "¿Cuál de las siguientes es una proteína plasmática abundante con función osmótica?",
    correcta: "Albúmina",
    incorrectas: [
      "Actina",
      "Colágeno fibrilar"
    ]
  },
  {
    enunciado: "¿Qué células sanguíneas participan de forma directa en la hemostasia primaria?",
    correcta: "Las plaquetas (trombocitos)",
    incorrectas: [
      "Los eosinófilos",
      "Los eritrocitos"
    ]
  },
  {
    enunciado: "¿Dónde tiene lugar la hematopoyesis en el adulto sano?",
    correcta: "En la médula ósea roja",
    incorrectas: [
      "En el bazo como órgano principal",
      "En el hígado de manera exclusiva"
    ]
  },
  {
    enunciado: "¿Qué hormona regula principalmente la producción de eritrocitos?",
    correcta: "Eritropoyetina (EPO)",
    incorrectas: [
      "Insulina",
      "Aldosterona"
    ]
  },
  {
    enunciado: "¿Qué describe el sistema ABO?",
    correcta: "Antígenos eritrocitarios A y B que determinan compatibilidad transfusional",
    incorrectas: [
      "Anticuerpos séricos IgE frente a parásitos",
      "Grado de saturación de la hemoglobina"
    ]
  },
  {
    enunciado: "¿Cuál es el riesgo de transfundir sangre Rh+ a un receptor Rh− sensibilizado?",
    correcta: "Reacción hemolítica mediada por anticuerpos anti-D",
    incorrectas: [
      "Hipocalcemia por exceso de calcio plasmático",
      "Hemodilución por exceso de suero fisiológico"
    ]
  },
  {
    enunciado: "¿Qué componente del medio interno baña directamente las células tisulares?",
    correcta: "El líquido intersticial",
    incorrectas: [
      "El plasma intravascular",
      "El líquido cefalorraquídeo"
    ]
  },
  {
    enunciado: "¿Qué fuerzas determinan los intercambios capilares según Starling?",
    correcta: "Presiones hidrostática y oncótica del plasma e intersticio",
    incorrectas: [
      "Potenciales de acción de los capilares",
      "Gradientes de sodio dependientes de la bomba Na/K"
    ]
  },
  {
    enunciado: "¿Cuál es el origen inmediato de la linfa?",
    correcta: "El exceso de líquido intersticial que entra en capilares linfáticos",
    incorrectas: [
      "Filtrado directo del glomérulo renal",
      "Secreción activa de las arterias elásticas"
    ]
  },
  {
    enunciado: "¿Qué función cumple el sistema linfático en la absorción de grasas?",
    correcta: "Transporta quilomicrones desde el intestino a través de los vasos quilíferos",
    incorrectas: [
      "Oxida ácidos grasos en los ganglios linfáticos",
      "Sintetiza triglicéridos en la linfa"
    ]
  },
  {
    enunciado: "¿De qué depende en gran medida el retorno linfático?",
    correcta: "De la contracción muscular, válvulas linfáticas y cambios de presión torácica",
    incorrectas: [
      "De la sístole ventricular izquierda únicamente",
      "De la gravedad en posición supina exclusivamente"
    ]
  },
  {
    enunciado: "¿Cuál NO es una función de la sangre?",
    correcta: "Síntesis de hormonas tiroideas",
    incorrectas: [
      "Transporte de gases y nutrientes",
      "Regulación térmica y del pH"
    ]
  },
  {
    enunciado: "¿Qué líquido protege mecánica y metabólicamente al SNC?",
    correcta: "El líquido cefalorraquídeo (LCR)",
    incorrectas: [
      "El humor acuoso exclusivamente",
      "El líquido sinovial"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a una anemia ferropénica?",
    correcta: "Disminución de hemoglobina por déficit de hierro, con microcitosis",
    incorrectas: [
      "Macrocitosis por déficit de B12",
      "Poliglobulia por hipoxia"
    ]
  },
  {
    enunciado: "¿Qué es la hemofilia clásica (A) desde el punto de vista genético?",
    correcta: "Trastorno ligado al X por déficit del factor VIII de coagulación",
    incorrectas: [
      "Enfermedad autosómica dominante de plaquetas",
      "Trastorno mitocondrial con herencia materna"
    ]
  },
  {
    enunciado: "¿Qué define a una leucemia aguda?",
    correcta: "Proliferación maligna de blastos hematopoyéticos con aparición rápida de síntomas",
    incorrectas: [
      "Disminución aislada de plaquetas por consumo",
      "Infección viral autolimitada de monocitos"
    ]
  },
  {
    enunciado: "¿Qué es el linfedema?",
    correcta: "Acumulación de linfa en tejidos por obstrucción o insuficiencia linfática",
    incorrectas: [
      "Acumulación de sangre en cavidad pleural",
      "Edema por aumento exclusivo de presión capilar arterial"
    ]
  },
  {
    enunciado: "¿Qué alteración del líquido pleural se denomina derrame quiloso?",
    correcta: "Acúmulo de linfa rica en triglicéridos en la cavidad pleural",
    incorrectas: [
      "Sangrado en pleura por traumatismo (hemotórax)",
      "Acúmulo de aire en pleura (neumotórax)"
    ]
  },
  {
    enunciado: "¿Qué célula sanguínea es clave en la respuesta inmune adaptativa humoral?",
    correcta: "El linfocito B (y sus células plasmáticas productoras de anticuerpos)",
    incorrectas: [
      "El eritrocito",
      "La plaqueta"
    ]
  },
  {
    enunciado: "¿Qué tríada clásica favorece la trombosis venosa según Virchow?",
    correcta: "Estasis, lesión endotelial e hipercoagulabilidad",
    incorrectas: [
      "Hipotensión, hiperglucemia e hipernatremia",
      "Alcalosis, hiperventilación e hipocalcemia"
    ]
  },
  {
    enunciado: "¿Cuál es un hábito saludable que favorece el retorno venoso y linfático?",
    correcta: "Actividad física regular y movilización de las piernas",
    incorrectas: [
      "Sedentarismo prolongado",
      "Fumar para “activar” la circulación"
    ]
  },
  {
    enunciado: "¿Qué recomendación general ayuda a mantener el medio interno?",
    correcta: "Hidratación adecuada y alimentación equilibrada",
    incorrectas: [
      "Restricción hídrica sin indicación médica",
      "Dietas extremas hipoproteicas sin control"
    ]
  },
  {
    enunciado: "¿Qué infección transmitida por vía sanguínea puede prevenirse con vacunación eficaz?",
    correcta: "Hepatitis B",
    incorrectas: [
      "VIH",
      "Malaria"
    ]
  },
  {
    enunciado: "¿Qué define a la sepsis de origen sanguíneo?",
    correcta: "Disfunción orgánica por respuesta desregulada a infección, con bacteriemia frecuente",
    incorrectas: [
      "Infección localizada sin repercusión sistémica",
      "Viremia asintomática siempre benigna"
    ]
  },
  {
    enunciado: "¿Qué parámetro de laboratorio estima la masa eritrocitaria y oxigenación tisular?",
    correcta: "Concentración de hemoglobina y hematocrito",
    incorrectas: [
      "Tiempo de protrombina exclusivamente",
      "Velocidad de sedimentación como único dato"
    ]
  },
  {
    enunciado: "¿Qué elemento inicia la coagulación extrínseca tras lesión tisular?",
    correcta: "El factor tisular (tromboplastina) que activa el factor VII",
    incorrectas: [
      "El fibrinógeno directamente a fibrina sin enzimas",
      "La albúmina plasmática"
    ]
  },
  {
    enunciado: "¿Qué líquido facilita el deslizamiento pulmonar durante la respiración?",
    correcta: "El líquido pleural entre pleura visceral y parietal",
    incorrectas: [
      "El líquido sinovial",
      "El humor vítreo"
    ]
  },
  {
    enunciado: "¿Cuál es una medida preventiva ante riesgo de trombosis venosa profunda en viajes largos?",
    correcta: "Hidratación, movilización periódica y medias de compresión si procede",
    incorrectas: [
      "Inmovilidad estricta del tren inferior",
      "Diuréticos sin prescripción para “secar” líquidos"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a una reacción transfusional hemolítica aguda?",
    correcta: "Fiebre, dolor lumbar, hemoglobinuria por incompatibilidad ABO",
    incorrectas: [
      "Bradicardia por hipoglucemia",
      "Hipercalcemia por exceso de citrato"
    ]
  },
  {
    enunciado: "¿Qué líquido lubrica y nutre las articulaciones diartrodiales?",
    correcta: "El líquido sinovial",
    incorrectas: [
      "El quilo intestinal",
      "El LCR"
    ]
  },
  {
    enunciado: "¿Qué hábito perjudica la función hematológica y cardiovascular?",
    correcta: "Tabaquismo activo y pasivo",
    incorrectas: [
      "Actividad física moderada",
      "Consumo de frutas y verduras"
    ]
  },
  {
    enunciado: "¿Cuál es una causa frecuente de anemia megaloblástica?",
    correcta: "Déficit de vitamina B12 o ácido fólico",
    incorrectas: [
      "Pérdida crónica de sodio",
      "Exceso de hierro dietético"
    ]
  },
  {
    enunciado: "¿Qué diferencia básica existe entre linfoma y leucemia?",
    correcta: "El linfoma se origina en tejido linfoide sólido; la leucemia en médula ósea y sangre",
    incorrectas: [
      "El linfoma afecta solo a plaquetas",
      "La leucemia es siempre benigna"
    ]
  },
  {
    enunciado: "¿Qué medida higiénica reduce el riesgo de infecciones de transmisión sanguínea en procedimientos sanitarios?",
    correcta: "Uso de material estéril y guantes desechables, y cribado de hemoderivados",
    incorrectas: [
      "Reutilización de agujas con lavado simple",
      "Omitir el control serológico de donaciones"
    ]
  },
  {
    enunciado: "¿Qué efecto tiene una hipoalbuminemia severa sobre el intersticio?",
    correcta: "Disminuye la presión oncótica plasmática y favorece edema",
    incorrectas: [
      "Aumenta la reabsorción capilar y deshidrata tejidos",
      "No modifica el balance líquido"
    ]
  },
  {
    enunciado: "¿Qué consejo general apoya la salud del sistema linfático?",
    correcta: "Mantener peso saludable, ejercicio y evitar ropa excesivamente compresiva",
    incorrectas: [
      "Sedentarismo y restricción de ingesta de agua",
      "Uso rutinario de antibióticos sin indicación"
    ]
  }
];
