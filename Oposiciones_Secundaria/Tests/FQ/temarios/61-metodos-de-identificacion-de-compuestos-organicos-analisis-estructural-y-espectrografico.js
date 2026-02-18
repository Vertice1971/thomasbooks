// temarios/61-metodos-de-identificacion-de-compuestos-organicos-analisis-estructural-y-espectroscopico.js
var PREGUNTAS = [
  {
    enunciado: "El flujo típico para esclarecer la estructura de un compuesto orgánico es:",
    correcta: "Propiedades físicas → cromatografía/pureza → IR/RMN/MS (y UV-Vis) → técnicas complementarias",
    incorrectas: ["MS únicamente", "Solo medir el punto de fusión"]
  },
  {
    enunciado: "El índice de deficiencia de hidrógeno (IDH) para C10H12O2 es:",
    correcta: "5",
    incorrectas: ["4", "6"]
  },
  {
    enunciado: "Una banda intensa cerca de 1700 cm⁻¹ en IR suele indicar:",
    correcta: "Estiramiento C=O",
    incorrectas: ["Estiramiento O–H libre", "C≡N siempre"]
  },
  {
    enunciado: "Un O–H asociado (puentes de H) en IR se observa típicamente como:",
    correcta: "Banda muy ancha entre 3200–3600 cm⁻¹",
    incorrectas: ["Banda aguda a 1700 cm⁻¹", "Doble banda en 2260–2100 cm⁻¹"]
  },
  {
    enunciado: "En IR, una señal en 2260–2100 cm⁻¹ es compatible con:",
    correcta: "C≡N o C≡C",
    incorrectas: ["C–O de éteres", "Deformación aromática"
    ]
  },
  {
    enunciado: "En ¹H-RMN, un singlete en δ ≈ 9.8–10.2 ppm suele corresponder a:",
    correcta: "Protones aldehídicos",
    incorrectas: ["Vinílicos", "Alicíclicos saturados"]
  },
  {
    enunciado: "La regla (n+1) para multiplicidad en ¹H-RMN se refiere a:",
    correcta: "Un protón acoplado a n protones equivalentes aparece como multiplete de (n+1) líneas",
    incorrectas: ["Número de carbonos vecinos", "Número de electrones π"]
  },
  {
    enunciado: "Una señal ¹³C-RMN en 170–180 ppm es característica de:",
    correcta: "Carbonilos de ácidos/ésteres",
    incorrectas: ["Aromáticos (120–140 ppm)", "Alifáticos (0–50 ppm)"]
  },
  {
    enunciado: "DEPT-135 permite distinguir:",
    correcta: "CH/CH3 (positivas) de CH2 (negativas)",
    incorrectas: ["C cuaternarios de CH3", "Aromáticos de alifáticos"]
  },
  {
    enunciado: "COSY en RMN es útil para:",
    correcta: "Correlacionar protones que se acoplan (H–H)",
    incorrectas: ["Relacionar H con C (1J)", "Medir masas exactas"]
  },
  {
    enunciado: "HSQC/HMQC muestra correlaciones entre:",
    correcta: "¹H y ¹³C por acoplamiento 1J",
    incorrectas: ["¹H–¹H de largo alcance", "¹H–¹³C a través del espacio (NOE)"]
  },
  {
    enunciado: "HMBC revela:",
    correcta: "Correlaciones ¹H–¹³C de 2–3 enlaces (largo alcance)",
    incorrectas: ["Solo 1J", "Información de masas exactas"]
  },
  {
    enunciado: "NOESY/ROESY informa principalmente sobre:",
    correcta: "Proximidad espacial (efecto NOE) para estereoquímica",
    incorrectas: ["Constantes J", "Índices de refracción"]
  },
  {
    enunciado: "En MS, un patrón isotópico 3:1 en M y M+2 sugiere:",
    correcta: "Un átomo de Cl",
    incorrectas: ["Un átomo de Br (1:1)", "Dos átomos de S"]
  },
  {
    enunciado: "En MS, la fragmentación McLafferty es típica de:",
    correcta: "Compuestos carbonílicos con cadena adecuada para transferencia γ-H",
    incorrectas: ["Alcoholes terciarios sin carbonilo", "Hidrocarburos lineales puros"]
  },
  {
    enunciado: "La ionización EI (impacto electrónico) se usa preferentemente en:",
    correcta: "GC-MS (volátiles, con fragmentación informativa)",
    incorrectas: ["LC-MS con ESI", "Medida de rotación óptica"]
  },
  {
    enunciado: "ESI (electrospray) es especialmente útil para:",
    correcta: "Analitos polares/termolábiles en LC-MS",
    incorrectas: ["Compuestos extremadamente volátiles por GC", "Medidas de difracción de rayos X"]
  },
  {
    enunciado: "En UV-Vis, un desplazamiento batocrómico significa:",
    correcta: "Máximo de absorción se mueve a mayor λ por más conjugación",
    incorrectas: ["Menor λ por menos conjugación", "Aumento de masa exacta"
    ]
  },
  {
    enunciado: "La Ley de Beer–Lambert se expresa como:",
    correcta: "A = ε · b · c",
    incorrectas: ["A = ε/c", "A = b/c"]
  },
  {
    enunciado: "La TLC (capa fina) se usa principalmente para:",
    correcta: "Seguir reacciones y estimar pureza (Rf)",
    incorrectas: ["Calcular masas exactas", "Determinar configuración absoluta"]
  },
  {
    enunciado: "En GC, el detector FID es:",
    correcta: "Muy sensible para compuestos orgánicos (detector universal de C–H)",
    incorrectas: ["Selectivo solo para halógenos", "Exclusivo de compuestos iónicos"]
  },
  {
    enunciado: "HPLC en fase reversa (C18) usa típicamente:",
    correcta: "Fase estacionaria no polar y fase móvil polar",
    incorrectas: ["Estacionaria polar y móvil no polar", "Solo agua pura sin modificadores"]
  },
  {
    enunciado: "En IR-ATR, la principal ventaja frente a pastillas KBr es:",
    correcta: "Muestreo sencillo, mínimo preparado y buena reproducibilidad superficial",
    incorrectas: ["Mayor resolución intrínseca siempre", "Necesidad de muestras secas pulverizadas"]
  },
  {
    enunciado: "Una banda en 1600 y 1500 cm⁻¹ (IR) suele indicar:",
    correcta: "Anillo aromático",
    incorrectas: ["Carbonilo de amida", "C≡N"
    ]
  },
  {
    enunciado: "En ¹H-RMN, un multiplete en 7.0–8.0 ppm sugiere:",
    correcta: "Protones aromáticos",
    incorrectas: ["Protones aldehídicos", "Protones alifáticos sp³"
    ]
  },
  {
    enunciado: "El ion molecular M⁺· en EI aporta principalmente:",
    correcta: "Masa molecular (si es observable) y fórmula empírica con HRMS",
    incorrectas: ["Índice de refracción", "Constante dieléctrica"]
  },
  {
    enunciado: "Para confirmar la presencia de Br por MS se observa:",
    correcta: "Patrón M/M+2 con intensidades ~1:1",
    incorrectas: ["Patrón 3:1", "Ausencia de M+2"]
  },
  {
    enunciado: "La difracción de rayos X de monocristal permite:",
    correcta: "Determinar conectividad y, con parámetro de Flack, configuración absoluta",
    incorrectas: ["Medir pKa directamente", "Determinar Rf en TLC"]
  },
  {
    enunciado: "El cálculo rápido de IDH para C8H8 (sin heteroátomos) da:",
    correcta: "5",
    incorrectas: ["4", "6"]
  },
  {
    enunciado: "Un triplete a δ ≈ 1.0 ppm (¹H-RMN) integrando 3H y un cuarteto a δ ≈ 2.5–4.2 ppm integrando 2H es típico de:",
    correcta: "Grupo etilo –CH3–CH2–",
    incorrectas: ["Isopropilo", "Tert-butilo"]
  },
  {
    enunciado: "En UV-Vis, las transiciones n→π* suelen tener:",
    correcta: "Menor ε que π→π*",
    incorrectas: ["Mayor ε siempre", "No dependen del solvente"]
  },
  {
    enunciado: "En ¹³C-RMN, un pico en ~200 ppm sugiere:",
    correcta: "Cetona/aldehído (C=O)",
    incorrectas: ["Éster (170–175 ppm)", "Alifático"
    ]
  },
  {
    enunciado: "La combinación GC-MS es ideal cuando:",
    correcta: "Los analitos son volátiles/termoestables y se desea patrón de fragmentación (EI)",
    incorrectas: ["Los analitos son iónicos no volátiles", "Se requiere difracción en polvo"]
  },
  {
    enunciado: "Un IR con banda ancha 2500–3300 cm⁻¹ y fuerte a 1700–1720 cm⁻¹ indica probablemente:",
    correcta: "Ácido carboxílico (O–H ácido + C=O)",
    incorrectas: ["Amina primaria", "Halogenuro de alquilo"
    ]
  },
  {
    enunciado: "En RMN, la integración de señales de ¹H informa sobre:",
    correcta: "Relación relativa del número de protones en cada entorno",
    incorrectas: ["Número de carbonos", "Masa exacta"
    ]
  },
  {
    enunciado: "Un espectro ¹H con un singlete amplio alrededor de 10–13 ppm sugiere:",
    correcta: "Protón ácido de ácido carboxílico",
    incorrectas: ["Protón vinílico", "Protón aldehídico (~10 ppm pero agudo)"
    ]
  },
  {
    enunciado: "En HMBC, para conectar subestructuras distantes se buscan:",
    correcta: "Correlaciones 2–3J H–C (largos alcances) que crucen unidades",
    incorrectas: ["Solo 1J", "NOE puro"
    ]
  },
  {
    enunciado: "La validación de un método cuantitativo incluye, entre otros:",
    correcta: "Linealidad, exactitud, precisión, LOD/LOQ, robustez",
    incorrectas: ["Solo exactitud", "Solo sensibilidad óptica"]
  },
  {
    enunciado: "El uso de patrón interno en cuantificación sirve para:",
    correcta: "Corregir variaciones de inyección/señal y mejorar precisión",
    incorrectas: ["Cambiar la masa molecular del analito", "Eliminar ruido electrónico"
    ]
  },
  {
    enunciado: "Una estrategia robusta para deducir estructura es:",
    correcta: "MS (fórmula) + IR (funciones) + RMN 1D/2D (conectividad) + UV-Vis (conjugación)",
    incorrectas: ["Solo TLC y punto de fusión", "Únicamente rotación óptica"]
  }
];
