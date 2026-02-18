// temarios/62-hidrocarburos-nomenclatura-obtencion-propiedades-e-identificacion.js
var PREGUNTAS = [
  {
    enunciado: "Los hidrocarburos están formados exclusivamente por:",
    correcta: "Carbono e hidrógeno",
    incorrectas: ["Carbono, hidrógeno y oxígeno", "Carbono, hidrógeno y nitrógeno"]
  },
  {
    enunciado: "La hibridación del carbono en los alcanos es:",
    correcta: "sp3",
    incorrectas: ["sp2", "sp"]
  },
  {
    enunciado: "La fórmula general de los alcanos acíclicos es:",
    correcta: "C_nH_{2n+2}",
    incorrectas: ["C_nH_{2n}", "C_nH_{2n-2}"]
  },
  {
    enunciado: "La geometría en torno a un doble enlace C=C es:",
    correcta: "Trigonal plana (sp2) con restricción rotacional",
    incorrectas: ["Tetraédrica con rotación libre", "Lineal (sp)"]
  },
  {
    enunciado: "En nomenclatura IUPAC, la cadena principal en un alqueno se elige para:",
    correcta: "Incluir el mayor número de dobles enlaces con los locantes más bajos",
    incorrectas: ["Maximizar el número de carbonos sin considerar insaturaciones", "Maximizar el número de sustituyentes"]
  },
  {
    enunciado: "El sufijo para un alquino en IUPAC es:",
    correcta: "-ino",
    incorrectas: ["-eno", "-ano"]
  },
  {
    enunciado: "La notación E/Z en alquenos se asigna según:",
    correcta: "Reglas CIP de prioridad",
    incorrectas: ["Mayor masa molecular total del sustituyente", "Orden alfabético"]
  },
  {
    enunciado: "La relación entre ramificación y punto de ebullición en alcanos es:",
    correcta: "Mayor ramificación → menor punto de ebullición",
    incorrectas: ["Mayor ramificación → mayor punto de ebullición", "No existe relación"]
  },
  {
    enunciado: "El benceno es un hidrocarburo:",
    correcta: "Aromático",
    incorrectas: ["Alcano lineal", "Alquino terminal"]
  },
  {
    enunciado: "Una prueba clásica para detectar insaturaciones (C=C/C≡C) es:",
    correcta: "Decoloración de Br2 en CCl4",
    incorrectas: ["Formación de precipitado con AgNO3 acuoso", "Viraje de fenolftaleína"]
  },
  {
    enunciado: "En IR, la banda característica ~3300 cm⁻¹ aguda suele indicar:",
    correcta: "Estiramiento C–H sp (alquino terminal)",
    incorrectas: ["C–H sp3", "C=O de cetona"]
  },
  {
    enunciado: "En 1H-RMN, protones aromáticos aparecen típicamente en:",
    correcta: "δ 6.0–8.5 ppm",
    incorrectas: ["δ 0.5–2.0 ppm", "δ 9.5–10.5 ppm"]
  },
  {
    enunciado: "Los alcanos se caracterizan químicamente por:",
    correcta: "Baja reactividad; sustitución radicalaria con halógenos",
    incorrectas: ["Alta reactividad nucleófila en C", "Adición electrófila rápida al enlace simple"]
  },
  {
    enunciado: "En halogenación radicalaria, el Br2 comparado con Cl2 es:",
    correcta: "Más selectivo por H terciario",
    incorrectas: ["Más reactivo y menos selectivo", "Incapaz de halogenar alcanos"]
  },
  {
    enunciado: "La hidratación ácido-catalizada de un alqueno conduce a:",
    correcta: "Alcohol Markovnikov",
    incorrectas: ["Alcohol anti-Markovnikov sin catalizador", "Éter simétrico"]
  },
  {
    enunciado: "La hidroboración-oxidación de alquenos produce:",
    correcta: "Alcohol anti-Markovnikov con adición sin",
    incorrectas: ["Alcohol Markovnikov con reordenos", "Halohidrina anti"]
  },
  {
    enunciado: "Un alquino terminal puede formar una sal metálica porque:",
    correcta: "El protón acético en C≡C–H es relativamente ácido (pKa ~25)",
    incorrectas: ["Tiene pKa ~1 como un ácido fuerte", "Es completamente inerte a bases"]
  },
  {
    enunciado: "La hidrogenación de un alquino con catalizador de Lindlar da:",
    correcta: "Alqueno cis",
    incorrectas: ["Alqueno trans", "Alcano directamente"]
  },
  {
    enunciado: "La ozonólisis reductora de un alqueno (O3, luego Zn/Me2S) genera:",
    correcta: "Aldeídos/cetonas",
    incorrectas: ["Ácidos carboxílicos siempre", "Alcoholes primarios directamente"]
  },
  {
    enunciado: "En SEAr, el electrófilo en la nitración aromática es:",
    correcta: "NO2+",
    incorrectas: ["NO3−", "NH4+"]
  },
  {
    enunciado: "La orientación en aromáticos: –CH3 dirige mayoritariamente a:",
    correcta: "Orto/para (activante débil)",
    incorrectas: ["Meta (desactivante)", "No dirige (aleatorio)"]
  },
  {
    enunciado: "Una señal 13C-RMN entre 100–140 ppm suele corresponder a:",
    correcta: "Carbones olefínicos o aromáticos",
    incorrectas: ["Carbones alifáticos sp3 (0–50 ppm)", "Carbonilos (160–220 ppm)"]
  },
  {
    enunciado: "La separación de mezclas complejas de hidrocarburos alifáticos volátiles se realiza con frecuencia por:",
    correcta: "GC-FID",
    incorrectas: ["HPLC-RI exclusivamente", "Electroforesis capilar sin detección UV"]
  },
  {
    enunciado: "En refinado, el proceso FCC (Fluid Catalytic Cracking) sirve para:",
    correcta: "Romper fracciones pesadas en productos más ligeros (p. ej., gasolina)",
    incorrectas: ["Aumentar selectivamente el número de cetano del diésel por hidrogenación", "Separar fracciones por diferencias de densidad sin calor"]
  },
  {
    enunciado: "El reformado catalítico se usa para:",
    correcta: "Aromatizar/isomerizar para elevar el octanaje",
    incorrectas: ["Eliminar azufre por adsorción en carbón activo", "Polimerizar eteno a polietileno"]
  },
  {
    enunciado: "El número de octano mide:",
    correcta: "La resistencia de la gasolina al autoencendido (detonación)",
    incorrectas: ["La densidad energética por litro", "La fracción de aromáticos en %"]
  },
  {
    enunciado: "El efecto de la ramificación sobre la densidad de alcanos es típicamente:",
    correcta: "Ligera disminución respecto a la cadena lineal",
    incorrectas: ["Aumento notable", "No hay cambio posible"]
  },
  {
    enunciado: "El criterio de aromaticidad de Hückel es:",
    correcta: "Sistema cíclico plano con 4n+2 e− π",
    incorrectas: ["4n e− π", "Ausencia total de electrones π"]
  },
  {
    enunciado: "La asignación E en un alqueno indica:",
    correcta: "Sustituyentes de mayor prioridad en lados opuestos",
    incorrectas: ["En el mismo lado", "Que la molécula es ópticamente activa"]
  },
  {
    enunciado: "La prueba de Baeyer (KMnO4 diluido) positiva indica:",
    correcta: "Presencia de dobles/triples enlaces (decoloración y formación de dioles/óxidos)",
    incorrectas: ["Presencia de halógenos por precipitado blanco", "Aromaticidad asegurada"]
  },
  {
    enunciado: "Para nombrar un cicloalqueno, la numeración debe:",
    correcta: "Darle el locante más bajo al doble enlace y luego a sustituyentes",
    incorrectas: ["Comenzar por el sustituyente más voluminoso", "Ignorar el doble enlace"]
  },
  {
    enunciado: "La adición de Br2 a un alqueno produce generalmente:",
    correcta: "1,2-dibromuro con adición anti (intermedio halonio)",
    incorrectas: ["Adición sin obligatoria", "Un radical libre estable como producto final"]
  },
  {
    enunciado: "En 1H-RMN, un triplete (~1.0 ppm, 3H) y un cuarteto (~2.5–4.2 ppm, 2H) sugieren:",
    correcta: "Grupo etilo –CH3–CH2–",
    incorrectas: ["Isopropilo", "t-Butilo"]
  },
  {
    enunciado: "Un alquino terminal reacciona con AgNO3/NH3 formando:",
    correcta: "Sal de plata del acetiluro (precipitado sensible)",
    incorrectas: ["Alcohol terciario", "Haluro de alquilo"]
  },
  {
    enunciado: "La relación entre longitud de cadena y punto de ebullición en alcanos lineales es:",
    correcta: "A mayor cadena, mayor punto de ebullición",
    incorrectas: ["A mayor cadena, menor punto de ebullición", "Independiente de la cadena"]
  },
  {
    enunciado: "En IUPAC, el prefijo para un sustituyente C5 lineal es:",
    correcta: "Pentil",
    incorrectas: ["Pentano", "Pentenilo para cualquier caso"]
  },
  {
    enunciado: "La polimerización de eteno para formar PE es un proceso de:",
    correcta: "Adición (radicalaria/catalítica)",
    incorrectas: ["Condensación con liberación de agua", "Sustitución nucleófila aromática"]
  },
  {
    enunciado: "Un patrón 1:1 en M/M+2 en MS sugiere la presencia de:",
    correcta: "Bromo en el compuesto",
    incorrectas: ["Cloro (3:1)", "Azufre (patrón diferente)"]
  },
  {
    enunciado: "En IR, bandas a 1600 y 1500 cm⁻¹ con C–H ≈3030 cm⁻¹ sugieren:",
    correcta: "Anillo aromático",
    incorrectas: ["Alcano saturado puro", "Carbonilo de éster"
    ]
  },
  {
    enunciado: "El criterio principal para seleccionar cadena en alcanos ramificados es:",
    correcta: "Cadena más larga; si hay empate, mayor número de ramificaciones",
    incorrectas: ["Cadena más corta para nombres simples", "Cadena con sustituyentes en posiciones altas"]
  },
  {
    enunciado: "La isomería cis/trans en cicloalcanos se refiere a:",
    correcta: "Orientación relativa respecto al plano del anillo",
    incorrectas: ["Rotación libre sin restricción", "Diferente fórmula molecular"]
  },
  {
    enunciado: "Para diferenciar alquenos de aromáticos por RMN 1H:",
    correcta: "Aromáticos 6–8.5 ppm vs vinílicos 4.5–6.5 ppm",
    incorrectas: ["Ambos 0.5–2.0 ppm", "Aromáticos 0–3 ppm exclusivamente"]
  }
];
