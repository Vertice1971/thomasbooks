// temarios/74-salud-enfermedad-nutricion-reproduccion-coordinacion-salud-mental-problemas-sanitarios-estilos-vida.js
var PREGUNTAS = [
  {
    enunciado: "¿Cómo define la OMS (1946) la salud en su formulación clásica?",
    correcta: "Como un estado de completo bienestar físico, psíquico y social, y no solo ausencia de enfermedad",
    incorrectas: [
      "Como ausencia total de microorganismos en el cuerpo",
      "Como capacidad de hacer ejercicio intenso sin fatiga"
    ]
  },
  {
    enunciado: "¿Qué significa homeostasis en el organismo humano?",
    correcta: "Mantenimiento de un equilibrio interno dinámico mediante mecanismos de regulación",
    incorrectas: [
      "Ausencia completa de variaciones internas en cualquier condición",
      "Cambio continuo e incontrolado de todas las variables fisiológicas"
    ]
  },
  {
    enunciado: "¿Cuál es un ejemplo de variable regulada por homeostasis?",
    correcta: "La temperatura corporal alrededor de 37°C",
    incorrectas: [
      "El número exacto de células del cuerpo, que no cambia nunca",
      "La masa corporal, que permanece constante a lo largo de la vida"
    ]
  },
  {
    enunciado: "¿Qué idea resume mejor la relación salud-enfermedad en forma de continuo?",
    correcta: "No hay una frontera rígida: se pasa gradualmente desde bienestar elevado a enfermedad y muerte",
    incorrectas: [
      "La salud y la enfermedad son estados totalmente separados sin transición posible",
      "Solo se está sano si no existen factores de riesgo en el ambiente"
    ]
  },
  {
    enunciado: "¿Qué son los determinantes de salud en un enfoque global?",
    correcta: "Factores que influyen en la salud como ambiente, estilo de vida, biología y asistencia sanitaria",
    incorrectas: [
      "Solo los genes heredados, sin influencia del entorno",
      "Solo la asistencia médica, sin influencia de hábitos ni ambiente"
    ]
  },
  {
    enunciado: "¿Qué incluye el determinante 'medio ambiente' en salud?",
    correcta: "Factores físicos y biológicos como clima, contaminación, radiación o presencia de vectores",
    incorrectas: [
      "Solo la personalidad individual y el carácter",
      "Solo los hábitos alimentarios sin relación con entorno"
    ]
  },
  {
    enunciado: "¿Qué incluye el determinante 'estilo de vida'?",
    correcta: "Conductas y hábitos como dieta, actividad física, consumo de tabaco o alcohol y sueño",
    incorrectas: [
      "La composición del aire en la troposfera a escala global",
      "La edad geológica de los continentes"
    ]
  },
  {
    enunciado: "¿Qué incluye el determinante 'biología humana'?",
    correcta: "Factores propios del organismo como herencia, edad, sexo y predisposiciones constitucionales",
    incorrectas: [
      "La red trófica del ecosistema donde vive la persona",
      "La disponibilidad de nutrientes en el suelo del territorio"
    ]
  },
  {
    enunciado: "¿Qué incluye el determinante 'asistencia sanitaria'?",
    correcta: "Acceso y calidad de servicios de prevención, diagnóstico, tratamiento y rehabilitación",
    incorrectas: [
      "La variabilidad genética generada por recombinación en meiosis",
      "La estructura de edades de poblaciones animales en un bioma"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a una enfermedad no infecciosa?",
    correcta: "No es causada por un patógeno transmisible y puede ser orgánica, funcional o psicógena",
    incorrectas: [
      "Siempre se contagia por contacto directo entre personas",
      "Siempre tiene incubación y fases transmisibles obligatorias"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a una enfermedad infecciosa?",
    correcta: "Está causada por un agente patógeno y puede transmitirse directa o indirectamente",
    incorrectas: [
      "Solo se produce por traumatismos y accidentes",
      "Solo se produce por desequilibrios emocionales sin agentes biológicos"
    ]
  },
  {
    enunciado: "¿Qué significa incubación en una enfermedad infecciosa?",
    correcta: "Periodo entre la entrada del patógeno y la aparición de síntomas",
    incorrectas: [
      "Periodo de recuperación final tras la convalecencia",
      "Periodo en que el sistema inmune ha eliminado por completo al patógeno"
    ]
  },
  {
    enunciado: "¿Qué describe mejor la multicausalidad en enfermedad?",
    correcta: "Que una enfermedad puede depender de varios factores de riesgo y causas simultáneas",
    incorrectas: [
      "Que toda enfermedad tiene una única causa necesaria y suficiente",
      "Que el ambiente nunca influye si existe predisposición genética"
    ]
  },
  {
    enunciado: "¿Qué es un factor de riesgo?",
    correcta: "Una característica o conducta que aumenta la probabilidad de desarrollar una enfermedad",
    incorrectas: [
      "Un síntoma que aparece siempre al final de la convalecencia",
      "Un microorganismo que se transmite por el aire"
    ]
  },
  {
    enunciado: "¿Qué es anamnesis en el proceso diagnóstico?",
    correcta: "Recogida sistemática de información sobre síntomas, antecedentes y contexto del paciente",
    incorrectas: [
      "Aplicación directa de un tratamiento antes de explorar al paciente",
      "Análisis exclusivo de muestras de agua para detectar contaminación"
    ]
  },
  {
    enunciado: "¿Qué es semiología clínica?",
    correcta: "Estudio e interpretación de signos y síntomas para orientar el diagnóstico",
    incorrectas: [
      "Estudio de señales químicas entre hormonas y receptores celulares",
      "Estudio de sucesión ecológica hacia comunidades clímax"
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre terapia etiológica y sintomática?",
    correcta: "La etiológica actúa sobre la causa y la sintomática alivia manifestaciones sin eliminar la causa",
    incorrectas: [
      "La etiológica siempre es quirúrgica y la sintomática siempre es genética",
      "La etiológica solo sirve para enfermedades mentales y la sintomática para infecciosas"
    ]
  },
  {
    enunciado: "¿Qué se entiende por bioterapia en sentido amplio en salud pública?",
    correcta: "Uso de medios biológicos como vacunas para prevenir o modular enfermedades",
    incorrectas: [
      "Uso exclusivo de radiación ionizante para destruir tumores",
      "Uso de dietas hipercalóricas para aumentar la glucosa en sangre"
    ]
  },
  {
    enunciado: "¿Qué significa nutrición en el ser humano?",
    correcta: "Conjunto de procesos por los que se obtiene materia y energía y se distribuye a las células",
    incorrectas: [
      "Elección cultural de alimentos sin relación con procesos fisiológicos",
      "Solo digestión mecánica sin absorción ni metabolismo"
    ]
  },
  {
    enunciado: "¿Qué es alimentación en sentido práctico?",
    correcta: "Selección e ingestión de alimentos condicionada por cultura, economía y hábitos",
    incorrectas: [
      "Producción de ATP en mitocondrias mediante cadena respiratoria",
      "Fijación de CO2 por fotosíntesis en cloroplastos"
    ]
  },
  {
    enunciado: "¿Cuál es un nutriente esencial en sentido estricto?",
    correcta: "Una sustancia que el organismo necesita y no puede sintetizar en cantidad suficiente",
    incorrectas: [
      "Cualquier sustancia que aporte sabor a la comida",
      "Cualquier molécula producida por el organismo en el hígado"
    ]
  },
  {
    enunciado: "¿Qué función principal tienen glúcidos y lípidos en la dieta?",
    correcta: "Aportar energía, con los lípidos como reserva energética importante",
    incorrectas: [
      "Ser los portadores directos de la información genética",
      "Ser las únicas moléculas capaces de actuar como enzimas"
    ]
  },
  {
    enunciado: "¿Qué función principal cumplen las proteínas en nutrición humana?",
    correcta: "Aportar aminoácidos para síntesis y renovación de estructuras y funciones corporales",
    incorrectas: [
      "Fijar CO2 y producir glucosa en ausencia de luz",
      "Sustituir a las vitaminas como reguladores metabólicos"
    ]
  },
  {
    enunciado: "¿Qué caracteriza una dieta equilibrada en macronutrientes de forma orientativa?",
    correcta: "Predominio de glúcidos, seguido de lípidos y una fracción menor de proteínas",
    incorrectas: [
      "Eliminación completa de glúcidos y predominio absoluto de proteínas",
      "Predominio total de lípidos saturados como única fuente energética"
    ]
  },
  {
    enunciado: "¿Qué es una enfermedad carencial?",
    correcta: "Un trastorno por déficit de un nutriente esencial, como ciertas vitaminas o aminoácidos",
    incorrectas: [
      "Un trastorno siempre causado por bacterias transmisibles",
      "Un trastorno causado por exceso de oxígeno en el aire"
    ]
  },
  {
    enunciado: "¿Qué es la determinación sexual humana en términos cromosómicos básicos?",
    correcta: "XX suele corresponder a hembra y XY a varón, con genes reguladores como SRY en el cromosoma Y",
    incorrectas: [
      "XY corresponde siempre a hembra y XX siempre a varón",
      "Depende solo de la dieta materna y nunca de cromosomas"
    ]
  },
  {
    enunciado: "¿Qué ocurre de manera general en la pubertad a nivel hormonal?",
    correcta: "Aumentan gonadotropinas y hormonas sexuales y aparecen caracteres sexuales secundarios",
    incorrectas: [
      "Desaparecen todas las hormonas y se detiene el crecimiento",
      "Se duplican cromosomas en todas las células para iniciar meiosis"
    ]
  },
  {
    enunciado: "¿Dónde ocurre normalmente la fecundación en humanos?",
    correcta: "En las trompas de Falopio",
    incorrectas: [
      "En el interior del ovario",
      "En el interior de la vejiga urinaria"
    ]
  },
  {
    enunciado: "¿Qué es el sistema nervioso central (SNC)?",
    correcta: "Encéfalo y médula espinal, encargados de integración y control",
    incorrectas: [
      "Nervios periféricos y ganglios exclusivamente",
      "Glándulas endocrinas que secretan hormonas a la sangre"
    ]
  },
  {
    enunciado: "¿Qué diferencia básica hay entre sistema nervioso somático y autónomo?",
    correcta: "El somático controla acciones voluntarias y el autónomo regula funciones involuntarias",
    incorrectas: [
      "El somático regula glucosa y el autónomo regula solo memoria",
      "El somático solo existe en plantas y el autónomo solo en hongos"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al sistema nervioso simpático frente al parasimpático en términos generales?",
    correcta: "El simpático prepara para actividad y el parasimpático favorece reposo y recuperación",
    incorrectas: [
      "El simpático solo actúa durante el sueño y el parasimpático solo en ejercicio",
      "Ambos tienen exactamente el mismo efecto sobre órganos siempre"
    ]
  },
  {
    enunciado: "¿Qué es una neurona?",
    correcta: "Célula especializada en recibir, integrar y transmitir señales mediante impulsos eléctricos y sinapsis",
    incorrectas: [
      "Célula vegetal encargada de fotosíntesis y transporte de savia",
      "Célula sanguínea encargada de producir anticuerpos"
    ]
  },
  {
    enunciado: "¿Qué describe mejor un reflejo?",
    correcta: "Respuesta rápida e involuntaria ante un estímulo, mediada por circuitos nerviosos",
    incorrectas: [
      "Respuesta lenta siempre mediada por hormonas tiroideas",
      "Respuesta genética que depende solo de mutaciones"
    ]
  },
  {
    enunciado: "¿Qué es el sistema endocrino?",
    correcta: "Conjunto de glándulas que liberan hormonas a la sangre para regular funciones del organismo",
    incorrectas: [
      "Conjunto de huesos que protegen órganos internos",
      "Conjunto de órganos sensoriales como ojo y oído"
    ]
  },
  {
    enunciado: "¿Qué hormona del páncreas es clave para disminuir la glucosa en sangre?",
    correcta: "Insulina",
    incorrectas: [
      "Tiroxina",
      "Adrenalina"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al VIH en términos básicos?",
    correcta: "Es un retrovirus que afecta especialmente a linfocitos T CD4 y puede causar inmunodeficiencia",
    incorrectas: [
      "Es una bacteria que produce toxinas y se elimina con antibióticos siempre",
      "Es un hongo que invade exclusivamente piel y uñas"
    ]
  },
  {
    enunciado: "¿Qué describe mejor un infarto de miocardio en términos generales?",
    correcta: "Daño del músculo cardíaco por falta de riego sanguíneo, a menudo por obstrucción coronaria",
    incorrectas: [
      "Infección pulmonar causada por virus respiratorios",
      "Crecimiento benigno de tejido que no invade ni metastatiza"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a un tumor maligno frente a uno benigno?",
    correcta: "Puede invadir tejidos y producir metástasis",
    incorrectas: [
      "Siempre se limita a un punto y nunca crece",
      "Es siempre causado por falta de vitaminas"
    ]
  },
  {
    enunciado: "¿Qué rasgo define una drogodependencia de forma general?",
    correcta: "Consumo compulsivo con tolerancia y posible síndrome de abstinencia al dejarla",
    incorrectas: [
      "Consumo ocasional sin cambios de conducta ni necesidad de aumentar dosis",
      "Ingesta de alimentos ricos en fibra y agua"
    ]
  },
  {
    enunciado: "¿Qué objetivo resume la prevención en salud pública?",
    correcta: "Reducir riesgos y evitar enfermedad antes de que aparezca, promoviendo hábitos saludables",
    incorrectas: [
      "Actuar solo cuando la enfermedad está avanzada y nunca antes",
      "Eliminar toda exposición ambiental sin cambiar hábitos individuales"
    ]
  },
  {
    enunciado: "¿Cuál es un ejemplo claro de estilo de vida saludable?",
    correcta: "Actividad física regular, dieta equilibrada y evitar tabaco",
    incorrectas: [
      "Dormir muy poco para aumentar adrenalina basal",
      "Aumentar consumo de alcohol para reducir estrés"
    ]
  },
  {
    enunciado: "¿Qué incluye la higiene alimentaria de forma básica?",
    correcta: "Manipulación segura, conservación adecuada y cocción cuando corresponde para reducir riesgos",
    incorrectas: [
      "Evitar por completo frutas y verduras por posible contaminación",
      "Consumir siempre alimentos crudos para eliminar patógenos"
    ]
  }
];
