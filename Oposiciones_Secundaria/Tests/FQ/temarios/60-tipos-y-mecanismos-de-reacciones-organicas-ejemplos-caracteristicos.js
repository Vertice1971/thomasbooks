// temarios/60-tipos-y-mecanismos-de-reacciones-organicas-ejemplos-caracteristicos.js
var PREGUNTAS = [
  {
    enunciado: "La velocidad de una SN2 depende de:",
    correcta: "Ambas concentraciones: v = k[RX][Nu−]",
    incorrectas: ["Solo del sustrato: v = k[RX]", "Solo del nucleófilo: v = k[Nu−]"]
  },
  {
    enunciado: "Resultado estereoquímico típico de una SN2 en un centro quiral:",
    correcta: "Inversión de configuración (inversión de Walden)",
    incorrectas: ["Retención total", "Racemización completa"]
  },
  {
    enunciado: "En SN1, el resultado estereoquímico más habitual es:",
    correcta: "Racemización parcial",
    incorrectas: ["Inversión exclusiva", "Retención exclusiva"]
  },
  {
    enunciado: "Requisito clave de una eliminación E2:",
    correcta: "Geometría antiperiplanar entre Hβ y el grupo saliente",
    incorrectas: ["Intermedio carbocatiónico estable", "Formación previa de carbanión libre"]
  },
  {
    enunciado: "¿Qué mecanismo comparte intermedio con SN1?",
    correcta: "E1",
    incorrectas: ["SN2", "E2"]
  },
  {
    enunciado: "Orden de calidad de grupos salientes haluro (mejor a peor):",
    correcta: "I− > Br− > Cl− ≫ F−",
    incorrectas: ["Cl− > Br− > I− > F−", "F− > Cl− > Br− > I−"]
  },
  {
    enunciado: "Los disolventes próticos y muy polares favorecen típicamente:",
    correcta: "SN1/E1",
    incorrectas: ["SN2/E2 siempre", "Solo reacciones radicalarias"]
  },
  {
    enunciado: "Los disolventes apróticos polares (DMSO, DMF) favorecen:",
    correcta: "SN2",
    incorrectas: ["SN1", "E1 exclusivamente"]
  },
  {
    enunciado: "En disolventes próticos, la nucleofilicidad de haluros aumenta como:",
    correcta: "I− > Br− > Cl− > F−",
    incorrectas: ["F− > Cl− > Br− > I−", "Cl− > I− > F− > Br−"]
  },
  {
    enunciado: "Un haluro secundario con base fuerte y voluminosa (t-BuOK) tiende a dar:",
    correcta: "E2 con producto de Hofmann",
    incorrectas: ["SN2 con inversión limpia", "SN1 con racemización"]
  },
  {
    enunciado: "Adición de HBr a alquenos en presencia de peróxidos produce:",
    correcta: "Anti-Markovnikov (mecanismo radicalario)",
    incorrectas: ["Markovnikov siempre", "Ninguna reacción"]
  },
  {
    enunciado: "En halogenación de alcanos, comparada con Cl2, Br2 es:",
    correcta: "Más selectivo por H terciario",
    incorrectas: ["Menos selectivo y más rápido", "Incapaz de halogenar"]
  },
  {
    enunciado: "Un riesgo en SN1/E1 sobre sustratos adecuados es:",
    correcta: "Reordenamientos de carbocatión (hidruro/almigración 1,2)",
    incorrectas: ["Inversión concertada obligatoria", "Imposibilidad de formar alquenos"]
  },
  {
    enunciado: "Hidroboración-oxidación (BH3/THF; H2O2, OH−) de un alqueno da:",
    correcta: "Alcohol anti-Markovnikov con adición sin",
    incorrectas: ["Alcohol Markovnikov con adición anti", "Halohidrina anti"]
  },
  {
    enunciado: "Oximercuración-desmercuración de alquenos se caracteriza por:",
    correcta: "Markovnikov y ausencia de reordenamientos",
    incorrectas: ["Anti-Markovnikov y radicales libres", "Formación de carbocatión libre con reordenos"]
  },
  {
    enunciado: "La halogenación de un alqueno con Br2 en disolvente inerte produce:",
    correcta: "1,2-dibromuro con adición anti (intermedio bromonio)",
    incorrectas: ["Adición sin exclusivamente", "Radicales libres en cadena obligatoriamente"]
  },
  {
    enunciado: "Apertura de epóxidos en medio básico nucleófilo tiende a ocurrir en:",
    correcta: "El carbono menos sustituido (ataque SN2)",
    incorrectas: ["El más sustituido por estabilización", "Ambos al azar sin preferencia"]
  },
  {
    enunciado: "Apertura ácida de epóxidos (Nu en medio ácido) favorece ataque en:",
    correcta: "El carbono más sustituido (epóxido protonado)",
    incorrectas: ["El menos sustituido", "No hay preferencia alguna"]
  },
  {
    enunciado: "En Diels–Alder, el diene debe estar en conformación:",
    correcta: "s-cis",
    incorrectas: ["s-trans exclusivamente", "Cualquier conformación es equivalente"]
  },
  {
    enunciado: "La regla 'endo' en Diels–Alder favorece:",
    correcta: "Aproximación endo con superposición secundaria (cuando hay anhidridos/NO2)",
    incorrectas: ["Siempre el producto exo", "Reacciones antiaromáticas"]
  },
  {
    enunciado: "En una condensación aldólica base-catalizada, el nucleófilo clave es:",
    correcta: "El enolato del carbonilo",
    incorrectas: ["El carbocatión del carbonilo", "El radical formado por homólisis"]
  },
  {
    enunciado: "Los reactivos de Grignard (RMgX) requieren condiciones:",
    correcta: "Aproticidad/anhidras (se destruyen con agua/ácidos)",
    incorrectas: ["Fuertemente ácidas", "Solo acuosas"]
  },
  {
    enunciado: "LiAlH4 frente a NaBH4 reduce, respectivamente:",
    correcta: "Ésteres/amidas (LiAlH4) y solo aldehídos/cetonas (NaBH4)",
    incorrectas: ["Solo cetonas ambos", "Amidas con NaBH4 preferentemente"]
  },
  {
    enunciado: "La reducción de Birch sobre anillos aromáticos produce:",
    correcta: "1,4-ciclohexadienos (reducción parcial del anillo)",
    incorrectas: ["Bencenos totalmente saturados", "Expansión de anillo obligatoria"]
  },
  {
    enunciado: "La nitración aromática procede vía:",
    correcta: "SEAr con NO2+ como electrófilo",
    incorrectas: ["SN2 en el anillo", "Adición radicalaria al anillo sin posterior eliminación"]
  },
  {
    enunciado: "La SNAr (adición–eliminación) es más favorable cuando el anillo tiene:",
    correcta: "Sustituyentes −M (como NO2) en o/p al LG",
    incorrectas: ["Sustituyentes fuertemente +M", "Solo halógenos sin más"]
  },
  {
    enunciado: "El mecanismo benzyino (eliminación–adición) se favorece por:",
    correcta: "Bases muy fuertes y alta temperatura",
    incorrectas: ["Ácidos fuertes a baja T", "Solventes superácidos no básicos"]
  },
  {
    enunciado: "Una E1cb requiere típicamente:",
    correcta: "Formación de carbanión estabilizado y buen LG en β",
    incorrectas: ["Carbocatión plano previo", "Ataque radicalario a un alqueno"]
  },
  {
    enunciado: "Para iniciar adición anti-Markovnikov de HBr a alquenos se usa:",
    correcta: "Iniciadores radicalarios (peróxidos/AIBN)",
    incorrectas: ["Ácido sulfúrico", "Base fuerte sin radicales"]
  },
  {
    enunciado: "En ciclohexanos, la E2 requiere que el LG esté:",
    correcta: "Axial y antiperiplanar con Hβ axial",
    incorrectas: ["Ecuatorial frente a Hβ axial", "En cualquier posición indistinta"]
  },
  {
    enunciado: "La reacción de Mitsunobu (PPh3/DIAD) sobre alcoholes secundarios suele dar:",
    correcta: "Sustitución con inversión de configuración",
    incorrectas: ["Retención de configuración", "Eliminación E2 exclusivamente"]
  },
  {
    enunciado: "Un grupo protector frecuente para alcoholes en síntesis orgánica es:",
    correcta: "Éter silílico (TBDMS/TBS)",
    incorrectas: ["Cloruro de tionilo", "Permanganato potásico"]
  },
  {
    enunciado: "Ozonólisis reductora de un alqueno (O3; Me2S/Zn) produce:",
    correcta: "Aldeídos/cetonas",
    incorrectas: ["Ácidos carboxílicos siempre", "Alcoholes primarios directamente"]
  },
  {
    enunciado: "Estabilidad de carbocationes simples sigue el orden:",
    correcta: "3º > 2º > 1º",
    incorrectas: ["1º > 2º > 3º", "2º > 3º > 1º"]
  },
  {
    enunciado: "Paso determinante de velocidad en SN1:",
    correcta: "Ionización del sustrato para formar el carbocatión",
    incorrectas: ["Ataque nucleófilo concertado", "Protonación final del producto"]
  },
  {
    enunciado: "El postulado de Hammond relaciona:",
    correcta: "Estructura del TS con el estado más cercano en energía",
    incorrectas: ["Número de pasos con la entalpía global", "Solvatación con presión de vapor"]
  },
  {
    enunciado: "Con base muy voluminosa (t-BuOK) en E2 se favorece típicamente:",
    correcta: "Producto de Hofmann (menos sustituido)",
    incorrectas: ["Producto de Záitsev siempre", "Dihidroxilación sin"]
  },
  {
    enunciado: "PCC (Clorocromato de piridinio) convierte preferentemente:",
    correcta: "Alcoholes primarios en aldehídos (sin sobreoxidar a ácidos)",
    incorrectas: ["Aldehídos en ácidos siempre", "Cetonas en alcoholes"]
  },
  {
    enunciado: "La hidrohalogenación de un alquino con exceso de HX produce:",
    correcta: "Dihaluro geminal (regla de Markovnikov)",
    incorrectas: ["Dihaluro vecinal (1,2-)", "Alqueno halogenado exclusivamente"]
  }
];
