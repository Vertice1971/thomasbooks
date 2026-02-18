// temarios/65-compuestos-aromaticos-el-benceno-y-otros-compuestos-de-interes-industrial.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué se entiende por aromaticidad en química orgánica?",
    correcta: "Una estabilidad especial asociada a sistemas cíclicos planos con electrones π deslocalizados",
    incorrectas: [
      "La presencia de olores intensos en compuestos orgánicos",
      "La existencia exclusiva de enlaces simples carbono-carbono"
    ]
  },
  {
    enunciado: "¿Qué característica estructural presenta el benceno según el modelo actual?",
    correcta: "Un anillo plano hexagonal con enlaces C-C equivalentes por deslocalización electrónica",
    incorrectas: [
      "Tres enlaces dobles localizados y tres simples alternantes",
      "Una estructura no plana con enlaces de distinta longitud"
    ]
  },
  {
    enunciado: "¿Qué concepto explica la estabilidad excepcional del benceno?",
    correcta: "La resonancia debida a la deslocalización de los electrones π",
    incorrectas: [
      "La elevada energía de sus enlaces simples",
      "La ausencia total de repulsión electrónica"
    ]
  },
  {
    enunciado: "¿Qué afirma la regla de Hückel para un sistema aromático?",
    correcta: "Debe poseer 4n+2 electrones π en un sistema cíclico, plano y conjugado",
    incorrectas: [
      "Debe contener siempre seis átomos de carbono",
      "Debe tener enlaces dobles localizados y aislados"
    ]
  },
  {
    enunciado: "¿Cuántos electrones π tiene el benceno?",
    correcta: "Seis electrones π",
    incorrectas: [
      "Cuatro electrones π",
      "Ocho electrones π"
    ]
  },
  {
    enunciado: "¿Por qué el benceno no suele reaccionar por adición como los alquenos?",
    correcta: "Porque perdería la energía de resonancia asociada a la aromaticidad",
    incorrectas: [
      "Porque carece de electrones π",
      "Porque sus enlaces son exclusivamente iónicos"
    ]
  },
  {
    enunciado: "¿Cuál es la reacción característica del benceno y sus derivados?",
    correcta: "La sustitución electrófila aromática",
    incorrectas: [
      "La adición nucleófila directa",
      "La polimerización radicalaria espontánea"
    ]
  },
  {
    enunciado: "¿Qué ocurre en la primera etapa de una sustitución electrófila aromática?",
    correcta: "El ataque del electrófilo y la formación del complejo sigma",
    incorrectas: [
      "La pérdida inmediata de un protón sin intermediarios",
      "La ruptura completa del anillo aromático"
    ]
  },
  {
    enunciado: "¿Qué representa el complejo sigma en la SEA?",
    correcta: "Un intermedio carbocatiónico no aromático",
    incorrectas: [
      "Un compuesto final estable y aromático",
      "Un radical libre neutro"
    ]
  },
  {
    enunciado: "¿Qué paso final restaura la aromaticidad en la sustitución electrófila aromática?",
    correcta: "La pérdida de un protón del complejo sigma",
    incorrectas: [
      "La adición de un nucleófilo externo",
      "La ruptura de enlaces carbono-carbono"
    ]
  },
  {
    enunciado: "¿Qué reacción introduce un grupo nitro en el anillo bencénico?",
    correcta: "La nitración",
    incorrectas: [
      "La hidrogenación",
      "La oxidación completa"
    ]
  },
  {
    enunciado: "¿Qué mezcla de reactivos se emplea típicamente en la nitración del benceno?",
    correcta: "Ácido nítrico y ácido sulfúrico concentrados",
    incorrectas: [
      "Ácido clorhídrico y permanganato",
      "Hidróxido sódico y etanol"
    ]
  },
  {
    enunciado: "¿Qué tipo de reacción es la halogenación del benceno?",
    correcta: "Una sustitución electrófila aromática catalizada",
    incorrectas: [
      "Una adición radicalaria sin catalizador",
      "Una reacción ácido-base"
    ]
  },
  {
    enunciado: "¿Qué introducen las reacciones de Friedel-Crafts?",
    correcta: "Grupos alquilo o acilo en el anillo aromático",
    incorrectas: [
      "Grupos nitro y sulfonato",
      "Átomos de oxígeno por oxidación directa"
    ]
  },
  {
    enunciado: "¿Qué catalizador es característico de las reacciones de Friedel-Crafts?",
    correcta: "Cloruros de aluminio u otros ácidos de Lewis",
    incorrectas: [
      "Platino metálico",
      "Hidróxido sódico acuoso"
    ]
  },
  {
    enunciado: "¿Qué efecto tienen los sustituyentes activantes sobre el anillo bencénico?",
    correcta: "Aumentan la velocidad de la sustitución electrófila aromática",
    incorrectas: [
      "Inhiben completamente cualquier reacción",
      "Rompen la aromaticidad del anillo"
    ]
  },
  {
    enunciado: "¿Qué posiciones dirigen normalmente los sustituyentes activantes?",
    correcta: "Orto y para",
    incorrectas: [
      "Meta exclusivamente",
      "Posiciones aleatorias sin preferencia"
    ]
  },
  {
    enunciado: "¿Qué efecto presentan los sustituyentes desactivantes?",
    correcta: "Disminuyen la reactividad del anillo frente a electrófilos",
    incorrectas: [
      "Incrementan siempre la aromaticidad",
      "Transforman el benceno en un alqueno"
    ]
  },
  {
    enunciado: "¿Qué orientación suele inducir un grupo nitro en el anillo bencénico?",
    correcta: "Orientación meta",
    incorrectas: [
      "Orientación orto-para",
      "Orientación indiferente"
    ]
  },
  {
    enunciado: "¿Qué es el tolueno desde el punto de vista estructural?",
    correcta: "Un benceno sustituido por un grupo metilo",
    incorrectas: [
      "Un benceno con un grupo carboxilo",
      "Un hidrocarburo alifático saturado"
    ]
  },
  {
    enunciado: "¿Qué importancia industrial tienen los xilenos?",
    correcta: "Son precursores clave de polímeros y fibras sintéticas",
    incorrectas: [
      "Se usan solo como combustibles sólidos",
      "Carecen de aplicaciones industriales relevantes"
    ]
  },
  {
    enunciado: "¿Qué compuesto aromático es el monómero del poliestireno?",
    correcta: "El estireno",
    incorrectas: [
      "El fenol",
      "El naftaleno"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a los hidrocarburos aromáticos policíclicos (HAP)?",
    correcta: "La presencia de varios anillos aromáticos fusionados",
    incorrectas: [
      "La ausencia total de enlaces π",
      "La presencia obligatoria de heteroátomos"
    ]
  },
  {
    enunciado: "¿Qué riesgo sanitario presentan muchos HAP?",
    correcta: "Carácter cancerígeno",
    incorrectas: [
      "Inocuidad biológica demostrada",
      "Actividad vitamínica esencial"
    ]
  },
  {
    enunciado: "¿Qué es el naftaleno?",
    correcta: "Un hidrocarburo aromático policíclico de dos anillos condensados",
    incorrectas: [
      "Un alcohol aromático",
      "Un heterociclo nitrogenado"
    ]
  },
  {
    enunciado: "¿Qué diferencia a los heterociclos aromáticos del benceno?",
    correcta: "Contienen heteroátomos como N, O o S en el anillo",
    incorrectas: [
      "Carecen de aromaticidad",
      "Tienen solo enlaces simples"
    ]
  },
  {
    enunciado: "¿Qué heterociclo aromático es químicamente básico?",
    correcta: "La piridina",
    incorrectas: [
      "El furano",
      "El tiofeno"
    ]
  },
  {
    enunciado: "¿Qué heterociclo aromático aparece en biomoléculas como el hemo?",
    correcta: "El pirrol",
    incorrectas: [
      "El ciclohexano",
      "El benceno sustituido"
    ]
  },
  {
    enunciado: "¿Cuál fue históricamente una fuente importante de compuestos aromáticos?",
    correcta: "El alquitrán de hulla",
    incorrectas: [
      "La electrólisis del agua",
      "La fermentación alcohólica"
    ]
  },
  {
    enunciado: "¿Qué proceso moderno es clave para obtener BTX?",
    correcta: "El reformado catalítico de naftas",
    incorrectas: [
      "La destilación simple del agua",
      "La oxidación completa del metano"
    ]
  },
  {
    enunciado: "¿Qué significa la sigla BTX?",
    correcta: "Benceno, tolueno y xilenos",
    incorrectas: [
      "Butano, titanio y xenón",
      "Boro, telurio y zinc"
    ]
  },
  {
    enunciado: "¿Qué aplicación industrial clave tienen los compuestos aromáticos?",
    correcta: "La síntesis de plásticos, resinas, colorantes y fármacos",
    incorrectas: [
      "La producción directa de energía nuclear",
      "La fabricación de metales estructurales"
    ]
  },
  {
    enunciado: "¿Qué riesgo sanitario específico presenta el benceno?",
    correcta: "Es leucemógeno",
    incorrectas: [
      "Es completamente inocuo",
      "Solo es peligroso a temperaturas extremas"
    ]
  },
  {
    enunciado: "¿Por qué se regula estrictamente la exposición al benceno?",
    correcta: "Por su toxicidad crónica y efectos cancerígenos",
    incorrectas: [
      "Por su elevada reactividad explosiva con el aire",
      "Por su carácter radioactivo natural"
    ]
  },
  {
    enunciado: "¿Qué proceso genera HAP de forma no intencionada?",
    correcta: "La combustión incompleta de materia orgánica",
    incorrectas: [
      "La fotosíntesis vegetal",
      "La disolución de sales en agua"
    ]
  },
  {
    enunciado: "¿Qué objetivo persigue la normativa ambiental sobre aromáticos?",
    correcta: "Limitar emisiones y exposiciones para proteger salud y medio ambiente",
    incorrectas: [
      "Incrementar su producción sin control",
      "Sustituirlos completamente por metales"
    ]
  },
  {
    enunciado: "¿Qué papel juegan los compuestos aromáticos en farmacología?",
    correcta: "Son estructuras base frecuentes en muchos principios activos",
    incorrectas: [
      "Se usan solo como excipientes inertes",
      "No tienen relevancia terapéutica"
    ]
  }
];

