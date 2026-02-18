// temarios/67-polimeros-naturales-y-sinteticos-obtencion-utilizacion-y-reciclado.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué define a un polímero desde el punto de vista químico?",
    correcta: "Una macromolécula formada por repetición de unidades monoméricas unidas por enlaces covalentes",
    incorrectas: [
      "Una mezcla de moléculas pequeñas unidas solo por fuerzas intermoleculares",
      "Un compuesto iónico formado por redes cristalinas tridimensionales"
    ]
  },
  {
    enunciado: "¿Qué diferencia esencial hay entre un homopolímero y un copolímero?",
    correcta: "El homopolímero procede de un único monómero y el copolímero de dos o más monómeros distintos",
    incorrectas: [
      "El homopolímero siempre es natural y el copolímero siempre es sintético",
      "El homopolímero es siempre termoestable y el copolímero siempre termoplástico"
    ]
  },
  {
    enunciado: "¿Qué magnitud describe cuántas unidades repetitivas contiene, en promedio, una cadena polimérica?",
    correcta: "El grado de polimerización medio",
    incorrectas: [
      "La densidad del material en condiciones normales",
      "La constante de equilibrio de la reacción de polimerización"
    ]
  },
  {
    enunciado: "¿Qué tipo de polímero se caracteriza por ablandarse al calentar y endurecer al enfriar de forma reversible?",
    correcta: "Un termoplástico",
    incorrectas: [
      "Un termoestable",
      "Un elastómero vulcanizado"
    ]
  },
  {
    enunciado: "¿Qué rasgo estructural distingue a los termoestables frente a los termoplásticos?",
    correcta: "Presentan una red reticulada de enlaces covalentes que impide el flujo al calentar",
    incorrectas: [
      "Tienen siempre cadenas completamente lineales sin ramificaciones",
      "Contienen exclusivamente enlaces iónicos entre cadenas"
    ]
  },
  {
    enunciado: "¿Qué propiedad macroscópica se asocia típicamente a los elastómeros?",
    correcta: "Una gran deformación reversible debida a cadenas flexibles con poca reticulación",
    incorrectas: [
      "Una fragilidad extrema por cristalización total",
      "Una alta conductividad eléctrica por electrones deslocalizados"
    ]
  },
  {
    enunciado: "¿Qué polisacárido es la principal reserva energética en plantas y contiene amilosa y amilopectina?",
    correcta: "El almidón",
    incorrectas: [
      "La celulosa",
      "La quitina"
    ]
  },
  {
    enunciado: "¿Qué afirmación describe mejor la celulosa?",
    correcta: "Un homopolisacárido lineal de β-D-glucosa con enlaces β(1→4) y función estructural",
    incorrectas: [
      "Un polisacárido ramificado de enlaces α(1→4) y α(1→6) con función de reserva animal",
      "Un heteropolisacárido sulfatado presente en sangre como anticoagulante"
    ]
  },
  {
    enunciado: "¿Por qué el ser humano no digiere la celulosa de forma eficiente?",
    correcta: "Porque no posee enzimas capaces de hidrolizar los enlaces β(1→4) glucosídicos",
    incorrectas: [
      "Porque la celulosa es un polímero inorgánico sin enlaces covalentes",
      "Porque la celulosa solo se encuentra en animales y no en plantas"
    ]
  },
  {
    enunciado: "¿Qué polisacárido es reserva energética en animales y suele estar más ramificado que el almidón?",
    correcta: "El glucógeno",
    incorrectas: [
      "La pectina",
      "El ácido hialurónico"
    ]
  },
  {
    enunciado: "¿Qué describe correctamente la quitina?",
    correcta: "Un polímero de N-acetilglucosamina que forma parte del exoesqueleto de artrópodos",
    incorrectas: [
      "Un polímero de aminoácidos con función catalítica",
      "Un polímero de nucleótidos que almacena información genética"
    ]
  },
  {
    enunciado: "¿Qué ejemplo corresponde a un mucopolisacárido relevante en tejidos conectivos?",
    correcta: "El ácido hialurónico",
    incorrectas: [
      "El polietileno",
      "El poliestireno"
    ]
  },
  {
    enunciado: "¿Qué es el caucho natural a nivel molecular?",
    correcta: "Un cis-1,4-poliisopreno obtenido del látex vegetal",
    incorrectas: [
      "Un trans-1,4-polietileno procedente de la celulosa",
      "Un copolímero alternante de etileno y propileno"
    ]
  },
  {
    enunciado: "¿Qué diferencia principal hay entre caucho natural y gutapercha?",
    correcta: "La gutapercha es trans-1,4-poliisopreno y suele ser más rígida que el caucho natural",
    incorrectas: [
      "La gutapercha es un polisacárido y el caucho natural una proteína",
      "La gutapercha es un termoestable y el caucho natural un metal"
    ]
  },
  {
    enunciado: "¿Qué enlace une los aminoácidos en una proteína?",
    correcta: "El enlace peptídico",
    incorrectas: [
      "El enlace glucosídico",
      "El enlace fosfodiéster"
    ]
  },
  {
    enunciado: "¿Qué describe la estructura primaria de una proteína?",
    correcta: "La secuencia lineal de aminoácidos",
    incorrectas: [
      "La disposición de subunidades proteicas diferentes",
      "El plegamiento tridimensional global estabilizado por interacciones débiles"
    ]
  },
  {
    enunciado: "¿Qué elementos estructurales son típicos de la estructura secundaria proteica?",
    correcta: "La α-hélice y la lámina β",
    incorrectas: [
      "La doble hélice y los pares de bases complementarias",
      "Las micelas y las bicapas lipídicas"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la estructura cuaternaria de una proteína?",
    correcta: "La asociación de varias cadenas polipeptídicas en un complejo funcional",
    incorrectas: [
      "La presencia de enlaces glucosídicos entre monómeros",
      "La ruptura del enlace peptídico por hidrólisis"
    ]
  },
  {
    enunciado: "¿De qué unidades se componen los ácidos nucleicos?",
    correcta: "De nucleótidos formados por base nitrogenada, pentosa y grupo fosfato",
    incorrectas: [
      "De monosacáridos enlazados por enlaces β(1→4)",
      "De ácidos grasos enlazados por enlaces éster"
    ]
  },
  {
    enunciado: "¿Qué enlace covalente une los nucleótidos en una cadena de ADN o ARN?",
    correcta: "El enlace fosfodiéster",
    incorrectas: [
      "El enlace peptídico",
      "El enlace amida"
    ]
  },
  {
    enunciado: "¿Qué define mejor una polimerización en cadena por radicales libres?",
    correcta: "Una reacción con iniciación, propagación y terminación en la que el centro activo es un radical",
    incorrectas: [
      "Una reacción de equilibrio donde se libera agua en cada paso",
      "Una reacción que solo ocurre en presencia de enzimas y ribosomas"
    ]
  },
  {
    enunciado: "¿Qué sustancia se usa con frecuencia como iniciador en polimerización radicalaria?",
    correcta: "Un peróxido orgánico que genera radicales al descomponerse",
    incorrectas: [
      "Un disolvente inerte que no puede reaccionar",
      "Un antiácido que neutraliza el monómero"
    ]
  },
  {
    enunciado: "¿Qué proceso puede disminuir la masa molecular media al generar un nuevo centro activo?",
    correcta: "La transferencia de cadena",
    incorrectas: [
      "La cristalización del polímero",
      "La sublimación del monómero"
    ]
  },
  {
    enunciado: "¿Qué mecanismo corresponde a una polimerización iónica?",
    correcta: "El crecimiento de cadena con centros activos catiónicos o aniónicos",
    incorrectas: [
      "La formación exclusiva de enlaces iónicos entre cadenas ya formadas",
      "La reticulación térmica de un termoestable ya curado"
    ]
  },
  {
    enunciado: "¿Qué aportan los catalizadores Ziegler–Natta en polimerización?",
    correcta: "Permiten obtener polímeros estereorregulares y controlar la microestructura",
    incorrectas: [
      "Garantizan que todos los polímeros sean termoestables",
      "Obligan a que la reacción sea siempre de condensación con eliminación de agua"
    ]
  },
  {
    enunciado: "¿Qué ejemplo es típico de polimerización por etapas (condensación)?",
    correcta: "La formación de nailon 6,6 a partir de una diamina y un diácido",
    incorrectas: [
      "La formación de polietileno a partir de etileno",
      "La formación de polipropileno isotáctico por radicales libres"
    ]
  },
  {
    enunciado: "¿Qué se forma y suele liberarse en una polimerización por condensación clásica?",
    correcta: "Un polímero y una molécula pequeña como agua o metanol",
    incorrectas: [
      "Un polímero y electrones libres que conducen la corriente",
      "Un polímero y átomos de helio por desintegración"
    ]
  },
  {
    enunciado: "¿Qué monómeros dan lugar al PET en una síntesis típica?",
    correcta: "Etilenglicol y ácido tereftálico (o un derivado como el dimetil tereftalato)",
    incorrectas: [
      "Etileno y propileno en proporción 1:1",
      "Fenol y amoníaco en medio acuoso"
    ]
  },
  {
    enunciado: "¿Qué familia describe mejor a los poliuretanos?",
    correcta: "Polímeros obtenidos por reacción entre un diisocianato y un diol o poliol",
    incorrectas: [
      "Polímeros de nucleótidos que almacenan información hereditaria",
      "Polímeros de glucosa con enlaces β(1→4)"
    ]
  },
  {
    enunciado: "¿Qué significa que un polímero sea isotáctico?",
    correcta: "Que los sustituyentes quedan orientados en el mismo lado a lo largo de la cadena",
    incorrectas: [
      "Que todas las cadenas tienen exactamente la misma longitud sin distribución",
      "Que el polímero contiene exclusivamente enlaces dobles conjugados"
    ]
  },
  {
    enunciado: "¿Qué suele aumentar con la cristalinidad de un polímero?",
    correcta: "La rigidez y la resistencia mecánica, junto con un punto de fusión más definido",
    incorrectas: [
      "La solubilidad en agua a temperatura ambiente",
      "La conductividad iónica en estado sólido sin dopantes"
    ]
  },
  {
    enunciado: "¿Qué representa Tg en un polímero amorfo o parcialmente amorfo?",
    correcta: "La temperatura de transición vítrea, donde cambia de estado vítreo rígido a gomoso",
    incorrectas: [
      "La temperatura a la que se rompe el enlace peptídico",
      "La temperatura de ebullición del monómero puro"
    ]
  },
  {
    enunciado: "¿Qué efecto tiene típicamente un plastificante en PVC?",
    correcta: "Reduce Tg y aumenta flexibilidad al facilitar el movimiento de cadenas",
    incorrectas: [
      "Aumenta Tg y vuelve el material necesariamente termoestable",
      "Convierte el PVC en un metal conductor"
    ]
  },
  {
    enunciado: "¿Cuál es una aplicación característica del polietileno de alta densidad (HDPE)?",
    correcta: "Envases rígidos y tuberías por su buena resistencia química y mecánica",
    incorrectas: [
      "Aislantes eléctricos termoestables en forma de resina fenólica curada",
      "Fibras proteicas para tejidos conectivos"
    ]
  },
  {
    enunciado: "¿Qué polímero se asocia comúnmente a botellas de bebidas por su transparencia y buena barrera?",
    correcta: "El PET",
    incorrectas: [
      "La bakelita",
      "La celulosa sin tratar"
    ]
  },
  {
    enunciado: "¿Qué problema ambiental está especialmente ligado a la fragmentación de plásticos?",
    correcta: "La generación de microplásticos persistentes en ecosistemas acuáticos y terrestres",
    incorrectas: [
      "La formación espontánea de ozono troposférico por polimerización",
      "La desaparición de CO₂ atmosférico por absorción en el plástico"
    ]
  },
  {
    enunciado: "¿Qué describe mejor el reciclado mecánico?",
    correcta: "Procesos como triturado, lavado y re-extrusión que recuperan material sin cambiar su estructura química básica",
    incorrectas: [
      "La ruptura controlada del polímero hasta monómeros por reacciones químicas selectivas",
      "La incineración sin aprovechamiento energético en vertedero"
    ]
  },
  {
    enunciado: "¿Qué ejemplo corresponde a reciclado químico?",
    correcta: "La despolimerización del PET para recuperar monómeros u oligómeros reutilizables",
    incorrectas: [
      "El prensado de residuos para reducir volumen antes del vertido",
      "El teñido del plástico para cambiar su color"
    ]
  },
  {
    enunciado: "¿Qué es la pirólisis aplicada a residuos plásticos?",
    correcta: "Una descomposición térmica en ausencia o con poco oxígeno para producir fracciones tipo aceite y gas",
    incorrectas: [
      "Una disolución acuosa que transforma el plástico en glucosa",
      "Un proceso biológico que convierte PVC en celulosa"
    ]
  },
  {
    enunciado: "¿Qué indica el código de reciclaje “1” en el sistema de identificación de resinas?",
    correcta: "Que el material es PET",
    incorrectas: [
      "Que el material es PVC",
      "Que el material es poliestireno expandido"
    ]
  },
  {
    enunciado: "¿Qué limitación típica tiene el reciclado de termoplásticos tras varios ciclos?",
    correcta: "La degradación de propiedades por oxidación, cizalla y acortamiento de cadenas",
    incorrectas: [
      "La mejora indefinida de propiedades por aumento espontáneo de masa molecular",
      "La conversión automática en termoestable por enfriamiento"
    ]
  },
  {
    enunciado: "¿Qué estrategia encaja mejor con economía circular aplicada a polímeros?",
    correcta: "Diseñar productos para reutilización, fácil separación y reciclado, reduciendo mezclas incompatibles",
    incorrectas: [
      "Maximizar la complejidad de materiales para evitar su copia industrial",
      "Eliminar toda clasificación de residuos para simplificar la gestión"
    ]
  }
];
