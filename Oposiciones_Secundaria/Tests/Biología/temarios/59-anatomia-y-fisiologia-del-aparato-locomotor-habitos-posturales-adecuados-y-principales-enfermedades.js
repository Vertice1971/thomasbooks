// temarios/59-anatomia-y-fisiologia-del-aparato-locomotor-habitos-posturales-adecuados-y-principales-enfermedades.js
var PREGUNTAS = [
  {
    enunciado: "El aparato locomotor humano está formado por el sistema óseo, el sistema articular y el sistema muscular, que actúan de forma integrada para producir movimiento y mantener la postura.",
    correcta: "Verdadero: huesos, articulaciones y músculos funcionan coordinadamente con control nervioso.",
    incorrectas: [
      "Falso: el aparato locomotor solo incluye los músculos, mientras que huesos y articulaciones pertenecen al sistema nervioso.",
      "Falso: el aparato locomotor únicamente se encarga del equilibrio y no participa en el movimiento voluntario."
    ]
  },
  {
    enunciado: "Una de las funciones fundamentales del tejido óseo es servir como reserva de minerales esenciales para el organismo.",
    correcta: "Verdadero: el tejido óseo almacena principalmente calcio y fósforo.",
    incorrectas: [
      "Falso: el tejido óseo solo tiene función mecánica y no almacena minerales.",
      "Falso: los minerales se almacenan exclusivamente en el hígado y el tejido adiposo."
    ]
  },
  {
    enunciado: "Los huesos largos, como el fémur, se caracterizan por presentar diáfisis y epífisis y actuar con frecuencia como palancas en los movimientos.",
    correcta: "Verdadero: su morfología favorece la función de palanca en la locomoción.",
    incorrectas: [
      "Falso: los huesos largos carecen de diáfisis y epífisis diferenciadas.",
      "Falso: los huesos largos no intervienen en el movimiento y solo protegen vísceras."
    ]
  },
  {
    enunciado: "Las articulaciones sinoviales se distinguen por su alta movilidad y por la presencia de una cápsula con membrana sinovial que secreta líquido sinovial.",
    correcta: "Verdadero: el líquido sinovial lubrica y nutre el cartílago articular.",
    incorrectas: [
      "Falso: las articulaciones sinoviales son inmóviles y no tienen cápsula.",
      "Falso: el líquido sinovial es producido por el cartílago hialino, no por la membrana sinovial."
    ]
  },
  {
    enunciado: "En términos funcionales, los ligamentos contribuyen principalmente a la estabilidad articular limitando movimientos excesivos.",
    correcta: "Verdadero: los ligamentos refuerzan y estabilizan la articulación.",
    incorrectas: [
      "Falso: los ligamentos son músculos que inician el movimiento articular.",
      "Falso: los ligamentos son estructuras hematopoyéticas situadas en la médula ósea."
    ]
  },
  {
    enunciado: "La contracción del músculo esquelético se explica por la teoría del deslizamiento de filamentos de actina y miosina.",
    correcta: "Verdadero: la superposición de filamentos acorta el sarcómero durante la contracción.",
    incorrectas: [
      "Falso: la contracción se produce por estiramiento pasivo de los tendones, sin acortamiento sarcomérico.",
      "Falso: la contracción depende exclusivamente de la deformación del cartílago articular."
    ]
  },
  {
    enunciado: "Las fibras musculares tipo I se adaptan mejor a esfuerzos prolongados y dependen principalmente del metabolismo oxidativo.",
    correcta: "Verdadero: son fibras lentas y resistentes a la fatiga.",
    incorrectas: [
      "Falso: las fibras tipo I son rápidas y glucolíticas, con poca resistencia.",
      "Falso: las fibras tipo I pertenecen al músculo liso y no están en el esquelético."
    ]
  },
  {
    enunciado: "En biomecánica, un hueso que rota alrededor de una articulación puede actuar como palanca, mientras el músculo aporta la fuerza y la gravedad o la resistencia externa actúan como carga.",
    correcta: "Verdadero: el sistema palanca-eje-fuerza-carga describe el movimiento básico.",
    incorrectas: [
      "Falso: solo los músculos actúan como palancas y los huesos son la carga.",
      "Falso: la noción de palanca no se aplica al cuerpo humano."
    ]
  },
  {
    enunciado: "El control de la postura y el movimiento requiere la integración de señales en la corteza motora, el cerebelo y los circuitos medulares.",
    correcta: "Verdadero: la motricidad fina y el equilibrio dependen de centros nerviosos coordinados.",
    incorrectas: [
      "Falso: el control motor es exclusivo del tronco del encéfalo y no involucra la corteza.",
      "Falso: la postura se regula únicamente por los reflejos miotáticos sin control central."
    ]
  },
  {
    enunciado: "La postura neutra de la columna vertebral implica la alineación fisiológica de las curvaturas cervical, torácica y lumbar.",
    correcta: "Verdadero: una alineación neutra reduce el estrés mecánico en discos y ligamentos.",
    incorrectas: [
      "Falso: la postura neutra exige rectificar por completo todas las curvaturas.",
      "Falso: la postura neutra solo se logra tumbado y es imposible en bipedestación."
    ]
  },
  {
    enunciado: "Para levantar cargas de forma segura se recomienda flexionar caderas y rodillas manteniendo la espalda alineada y el peso cerca del cuerpo.",
    correcta: "Verdadero: esta técnica disminuye la palanca sobre la columna lumbar.",
    incorrectas: [
      "Falso: lo más seguro es flexionar solo la columna y mantener las piernas estiradas.",
      "Falso: es preferible girar el tronco mientras se eleva la carga para ahorrar tiempo."
    ]
  },
  {
    enunciado: "En sedestación prolongada frente a pantallas, la prevención de sobrecargas cervicales requiere ajustar la altura del monitor y realizar pausas activas periódicas.",
    correcta: "Verdadero: la ergonomía y las micropausas reducen la tensión muscular sostenida.",
    incorrectas: [
      "Falso: basta con usar una silla blanda, sin ajustes adicionales.",
      "Falso: las pausas activas aumentan la fatiga y deben evitarse."
    ]
  },
  {
    enunciado: "En población escolar, se aconseja que la mochila no supere el 10–15 % del peso corporal para minimizar el riesgo de dolor dorsal.",
    correcta: "Verdadero: una carga excesiva incrementa el estrés en la columna en desarrollo.",
    incorrectas: [
      "Falso: cuanto más pesada la mochila, más se fortalece la espalda en adolescentes.",
      "Falso: el peso de la mochila no tiene relación con el dolor musculoesquelético."
    ]
  },
  {
    enunciado: "La osteoporosis se caracteriza por una disminución de la masa y calidad ósea que eleva el riesgo de fractura, especialmente en cadera, muñeca y vértebras.",
    correcta: "Verdadero: es una enfermedad esquelética sistémica con fragilidad aumentada.",
    incorrectas: [
      "Falso: la osteoporosis aumenta la densidad ósea y reduce las fracturas.",
      "Falso: la osteoporosis solo afecta a los cartílagos, no al hueso."
    ]
  },
  {
    enunciado: "La artrosis es un proceso degenerativo del cartílago articular que cursa con dolor mecánico, rigidez y limitación funcional.",
    correcta: "Verdadero: el desgaste del cartílago y cambios óseos subyacentes son típicos.",
    incorrectas: [
      "Falso: la artrosis es una infección bacteriana de las articulaciones.",
      "Falso: la artrosis es una miopatía inflamatoria del músculo esquelético."
    ]
  },
  {
    enunciado: "La artritis reumatoide es una enfermedad inflamatoria autoinmune que afecta de modo simétrico a pequeñas articulaciones y puede producir deformidades.",
    correcta: "Verdadero: la inflamación crónica sinovial conduce a daño articular.",
    incorrectas: [
      "Falso: la artritis reumatoide es un trastorno exclusivamente muscular.",
      "Falso: la artritis reumatoide es una fractura traumática recurrente."
    ]
  },
  {
    enunciado: "Un esguince es la lesión de un ligamento por estiramiento o desgarro, mientras que una luxación implica la pérdida de la congruencia articular.",
    correcta: "Verdadero: esguince afecta ligamentos; luxación, la posición articular.",
    incorrectas: [
      "Falso: esguince y luxación son sinónimos y describen la misma lesión.",
      "Falso: el esguince siempre requiere cirugía, a diferencia de la luxación."
    ]
  },
  {
    enunciado: "La tendinitis se define como la inflamación del tendón y suele asociarse a sobreuso, gestos repetidos o técnica inadecuada.",
    correcta: "Verdadero: el exceso de carga mecánica es un factor predisponente frecuente.",
    incorrectas: [
      "Falso: la tendinitis es una lesión exclusivamente infecciosa por virus.",
      "Falso: la tendinitis solo aparece después de fracturas abiertas."
    ]
  },
  {
    enunciado: "La escoliosis consiste en una desviación lateral de la columna con rotación vertebral, que puede requerir seguimiento, fisioterapia o tratamiento ortésico.",
    correcta: "Verdadero: su manejo depende de la magnitud y progresión de la curva.",
    incorrectas: [
      "Falso: la escoliosis es una rectificación total de la columna lumbar.",
      "Falso: la escoliosis siempre se corrige espontáneamente en la adolescencia."
    ]
  },
  {
    enunciado: "Las contracturas musculares se caracterizan por aumento del tono y dolor localizado, frecuentemente tras esfuerzos o posturas mantenidas.",
    correcta: "Verdadero: el reposo relativo y el calor local suelen aliviar los síntomas.",
    incorrectas: [
      "Falso: una contractura es la rotura completa de un tendón.",
      "Falso: las contracturas solo aparecen en presencia de fiebre alta."
    ]
  },
  {
    enunciado: "El calcio y la vitamina D son nutrientes clave para la salud ósea y su déficit puede favorecer la osteomalacia en adultos.",
    correcta: "Verdadero: su insuficiencia altera la mineralización del hueso.",
    incorrectas: [
      "Falso: el calcio no desempeña ningún papel en la mineralización ósea.",
      "Falso: la vitamina D solo interviene en la visión nocturna."
    ]
  },
  {
    enunciado: "El entrenamiento de fuerza adecuadamente dosificado mejora la masa ósea y muscular y contribuye a la prevención de caídas y fracturas.",
    correcta: "Verdadero: la carga mecánica estimula adaptación ósea y neuromuscular.",
    incorrectas: [
      "Falso: el entrenamiento de fuerza deteriora siempre las articulaciones sanas.",
      "Falso: la fuerza no influye en el equilibrio ni en el riesgo de caídas."
    ]
  },
  {
    enunciado: "En el trabajo con ordenador, mantener los pies apoyados, codos cerca del cuerpo y la pantalla a la altura de los ojos favorece una postura eficiente.",
    correcta: "Verdadero: la alineación disminuye el esfuerzo muscular sostenido.",
    incorrectas: [
      "Falso: es preferible cruzar las piernas y mirar la pantalla por encima del nivel ocular.",
      "Falso: la altura de la pantalla no tiene impacto postural."
    ]
  },
  {
    enunciado: "El líquido sinovial reduce la fricción y nutre el cartílago articular, siendo secretado por la membrana sinovial.",
    correcta: "Verdadero: su viscosidad depende, entre otros, del ácido hialurónico.",
    incorrectas: [
      "Falso: el líquido sinovial proviene de la médula ósea roja.",
      "Falso: el líquido sinovial aumenta la fricción para estabilizar la articulación."
    ]
  },
  {
    enunciado: "Los meniscos de la rodilla actúan como amortiguadores y mejoran la congruencia articular entre fémur y tibia.",
    correcta: "Verdadero: distribuyen cargas y contribuyen a la estabilidad.",
    incorrectas: [
      "Falso: los meniscos son músculos accesorios de la rodilla.",
      "Falso: los meniscos disminuyen la estabilidad y deben resecarse siempre."
    ]
  },
  {
    enunciado: "En una lesión muscular aguda, la pauta inicial de protección, reposo relativo, hielo, compresión y elevación puede ayudar a controlar el dolor y la inflamación.",
    correcta: "Verdadero: estas medidas forman parte del manejo conservador temprano.",
    incorrectas: [
      "Falso: se recomienda calor intenso inmediato para aumentar el riego sanguíneo.",
      "Falso: es imprescindible movilizar al máximo desde el primer minuto."
    ]
  },
  {
    enunciado: "El dolor de espalda inespecífico suele relacionarse con factores mecánicos y posturales y se beneficia de ejercicio y educación postural.",
    correcta: "Verdadero: la actividad física supervisada es tratamiento de primera línea.",
    incorrectas: [
      "Falso: el reposo absoluto en cama durante semanas es la opción preferible.",
      "Falso: siempre requiere cirugía para resolverse definitivamente."
    ]
  },
  {
    enunciado: "Las fibras musculares tipo IIb (rápidas) generan altas potencias en esfuerzos breves pero se fatigan con rapidez.",
    correcta: "Verdadero: predominan vías glucolíticas anaerobias.",
    incorrectas: [
      "Falso: son fibras de predominio oxidativo y muy resistentes.",
      "Falso: pertenecen exclusivamente al músculo cardíaco."
    ]
  },
  {
    enunciado: "El cartílago hialino articular carece de vasos sanguíneos y se nutre por difusión desde el líquido sinovial.",
    correcta: "Verdadero: su avascularidad condiciona una capacidad limitada de reparación.",
    incorrectas: [
      "Falso: el cartílago articular es muy vascularizado y cicatriza con rapidez.",
      "Falso: el cartílago recibe nutrientes directamente de arterias epifisarias."
    ]
  },
  {
    enunciado: "La cifosis dorsal fisiológica puede convertirse en hipercifosis cuando aumenta su curvatura más allá de los rangos habituales.",
    correcta: "Verdadero: puede causar dolor y alteraciones posturales.",
    incorrectas: [
      "Falso: la cifosis dorsal no existe en condiciones normales.",
      "Falso: toda cifosis exige cirugía inmediata."
    ]
  },
  {
    enunciado: "El pie plano se asocia a un descenso del arco longitudinal medial, lo que puede alterar la mecánica de la marcha.",
    correcta: "Verdadero: el soporte plantar cambia la distribución de cargas.",
    incorrectas: [
      "Falso: el pie plano es una deformidad de la mano, no del pie.",
      "Falso: el pie plano mejora la absorción de impactos sin inconvenientes."
    ]
  },
  {
    enunciado: "En una fractura, la inmovilización y la alineación adecuadas favorecen la consolidación ósea a través de etapas de inflamación, callo blando, callo duro y remodelado.",
    correcta: "Verdadero: la consolidación sigue fases histológicas sucesivas.",
    incorrectas: [
      "Falso: el hueso consolida de forma instantánea sin etapas intermedias.",
      "Falso: la inmovilización retrasa de forma sistemática la consolidación."
    ]
  },
  {
    enunciado: "Las distrofias musculares constituyen enfermedades genéticas que producen debilidad y degeneración progresiva del músculo esquelético.",
    correcta: "Verdadero: su evolución conlleva pérdida de fuerza y función.",
    incorrectas: [
      "Falso: las distrofias musculares son infecciones víricas autolimitadas.",
      "Falso: las distrofias solo afectan a los tendones, no al músculo."
    ]
  },
  {
    enunciado: "El equilibrio entre músculos agonistas y antagonistas ayuda a estabilizar las articulaciones y a coordinar el movimiento.",
    correcta: "Verdadero: la coactivación adecuada mejora el control motor.",
    incorrectas: [
      "Falso: los antagonistas deben permanecer inactivos para no entorpecer el gesto.",
      "Falso: solo los agonistas determinan la calidad del movimiento."
    ]
  },
  {
    enunciado: "Las pausas activas breves durante tareas repetitivas reducen la fatiga y el riesgo de lesiones por sobreuso.",
    correcta: "Verdadero: la variación de carga y la movilidad intermitente son protectoras.",
    incorrectas: [
      "Falso: interrumpir la tarea empeora la eficiencia muscular y aumenta lesiones.",
      "Falso: las pausas activas solo tienen utilidad en deportistas de élite."
    ]
  },
  {
    enunciado: "La lordosis lumbar fisiológica puede acentuarse por debilidad abdominal y acortamiento de flexores de cadera, generando sobrecarga lumbar.",
    correcta: "Verdadero: el desequilibrio muscular altera la alineación pélvica.",
    incorrectas: [
      "Falso: la musculatura no influye en la curvatura lumbar.",
      "Falso: una lordosis aumentada siempre indica fractura vertebral."
    ]
  },
  {
    enunciado: "Los calambres musculares son contracciones involuntarias dolorosas, a veces relacionadas con fatiga, deshidratación o alteraciones electrolíticas.",
    correcta: "Verdadero: la reposición de líquidos y el estiramiento pueden ayudar.",
    incorrectas: [
      "Falso: un calambre es la rotura completa del músculo y precisa cirugía.",
      "Falso: los calambres solo aparecen por infecciones bacterianas."
    ]
  },
  {
    enunciado: "En rehabilitación de lesiones del aparato locomotor, el principio de progresión gradual de cargas es clave para recuperar fuerza y función sin relesionar.",
    correcta: "Verdadero: la dosificación evita sobrecargas y facilita la adaptación tisular.",
    incorrectas: [
      "Falso: es mejor aplicar la carga máxima desde el inicio para ganar rapidez.",
      "Falso: la progresión de cargas solo se usa en patología cardiaca."
    ]
  },
  {
    enunciado: "Una alimentación equilibrada y la actividad física regular contribuyen al mantenimiento de la masa ósea y muscular a lo largo del envejecimiento.",
    correcta: "Verdadero: son pilares de prevención de fragilidad y caídas.",
    incorrectas: [
      "Falso: la dieta no influye en la masa ósea o muscular.",
      "Falso: la actividad física acelera el desgaste articular en todas las personas."
    ]
  },
  {
    enunciado: "La higiene postural en la vida diaria incluye estrategias para dormir, estar de pie, sentarse y transportar cargas con alineación adecuada.",
    correcta: "Verdadero: la educación postural reduce molestias y lesiones.",
    incorrectas: [
      "Falso: la higiene postural solo se aplica en el ámbito deportivo.",
      "Falso: ajustar la postura no tiene impacto en el dolor musculoesquelético."
    ]
  },
  {
    enunciado: "Las férulas, ortesis y calzado adecuado pueden ayudar a corregir o compensar determinadas alteraciones del aparato locomotor.",
    correcta: "Verdadero: son recursos terapéuticos y preventivos en casos seleccionados.",
    incorrectas: [
      "Falso: las ortesis agravan cualquier alteración y deben evitarse siempre.",
      "Falso: el calzado no influye en la mecánica del pie y la marcha."
    ]
  },
  {
    enunciado: "El calentamiento previo y la vuelta a la calma posterior al ejercicio ayudan a preparar y a recuperar el sistema musculoesquelético.",
    correcta: "Verdadero: mejoran la movilidad, el flujo sanguíneo y la recuperación.",
    incorrectas: [
      "Falso: el calentamiento aumenta el riesgo de lesión.",
      "Falso: la vuelta a la calma impide la adaptación al entrenamiento."
    ]
  }
];
