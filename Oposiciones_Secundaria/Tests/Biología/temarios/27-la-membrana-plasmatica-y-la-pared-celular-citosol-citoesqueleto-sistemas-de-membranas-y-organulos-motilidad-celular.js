// temarios/27-la-membrana-plasmatica-y-la-pared-celular-citosol-citoesqueleto-sistemas-de-membranas-y-orgnulos-motilidad-celular.js
var PREGUNTAS = [
  {
    enunciado: "El modelo del mosaico fluido propone que la membrana plasmática es…",
    correcta: "Una bicapa lipídica dinámica con proteínas móviles y asimetría",
    incorrectas: ["Una capa proteica rígida sobre lípidos fijos", "Una matriz de carbohidratos sólida"]
  },
  {
    enunciado: "¿Qué lípido modula fuertemente la fluidez y permeabilidad de membrana en animales?",
    correcta: "Colesterol",
    incorrectas: ["Quitina", "Carotenoides"]
  },
  {
    enunciado: "Las balsas lipídicas (lipid rafts) son microdominios enriquecidos en…",
    correcta: "Esfingolípidos y colesterol",
    incorrectas: ["Ácidos grasos libres y triacilglicéridos", "Celulosa y pectinas"]
  },
  {
    enunciado: "La asimetría de la membrana plasmática se mantiene principalmente por…",
    correcta: "Flipasas, flopasas y escramblasas",
    incorrectas: ["Bombas H+/K+ exclusivamente", "Ciclo de Calvin"]
  },
  {
    enunciado: "La difusión simple a través de la bicapa es más probable para…",
    correcta: "Gases y moléculas pequeñas apolares",
    incorrectas: ["Iones hidratados", "Oligosacáridos cargados"]
  },
  {
    enunciado: "La ósmosis describe…",
    correcta: "El movimiento de agua a favor de gradiente de potencial hídrico",
    incorrectas: ["El transporte activo de sodio contra gradiente", "La difusión facilitada de glucosa"]
  },
  {
    enunciado: "Las acuaporinas son…",
    correcta: "Canales selectivos de agua",
    incorrectas: ["Bombas de Ca2+ ATP-dependientes", "Porinas mitocondriales externas"]
  },
  {
    enunciado: "La Na+/K+ ATPasa transporta por ciclo…",
    correcta: "3 Na+ hacia fuera y 2 K+ hacia dentro",
    incorrectas: ["2 Na+ fuera y 3 K+ dentro", "1 Na+ fuera y 1 K+ dentro"]
  },
  {
    enunciado: "La endocitosis mediada por receptor suele implicar cubiertas de…",
    correcta: "Clatrina",
    incorrectas: ["COPII", "Caveolina exclusivamente en todos los casos"]
  },
  {
    enunciado: "El recubrimiento COPII participa en el transporte…",
    correcta: "Del RE al Golgi (vía anterógrada temprana)",
    incorrectas: ["Del Golgi al RE (retrograda)", "Del trans-Golgi a lisosomas recubierto siempre por clatrina"]
  },
  {
    enunciado: "Las proteínas SNARE participan en…",
    correcta: "El acoplamiento y fusión de vesículas con membranas diana",
    incorrectas: ["La hidrólisis de ATP en bombas iónicas", "La síntesis de fosfolípidos en RE"]
  },
  {
    enunciado: "Una unión estrecha (tight junction) se caracteriza por…",
    correcta: "Sellar el espacio intercelular limitando el paso paracelular",
    incorrectas: ["Unir filamentos intermedios mediante desmogleínas", "Permitir paso iónico a través de conexones"]
  },
  {
    enunciado: "Las uniones GAP (nexos) están formadas por…",
    correcta: "Conexones de conexinas",
    incorrectas: ["Cadherinas", "Integrinas y laminina"]
  },
  {
    enunciado: "Las uniones adherentes dependen principalmente de…",
    correcta: "Cadherinas conectadas a actina",
    incorrectas: ["Integrinas conectadas a microtúbulos", "Colágeno tipo I intracelular"]
  },
  {
    enunciado: "En plantas, la comunicación célula–célula directa ocurre a través de…",
    correcta: "Plasmodesmos",
    incorrectas: ["Uniones GAP", "Desmosomas puntiformes"]
  },
  {
    enunciado: "La pared celular vegetal primaria está compuesta por…",
    correcta: "Celulosa, hemicelulosas y pectinas",
    incorrectas: ["Peptidoglicano y ácido teicoico", "Quitina como componente mayoritario"]
  },
  {
    enunciado: "El peptidoglicano (mureína) es característico de…",
    correcta: "Bacterias",
    incorrectas: ["Células animales", "Hongos (donde predomina quitina)"]
  },
  {
    enunciado: "El citosol es…",
    correcta: "La fracción soluble del citoplasma donde ocurren rutas como glucólisis",
    incorrectas: ["El espacio intermembrana mitocondrial", "La luz del Golgi exclusivamente"]
  },
  {
    enunciado: "Los microfilamentos están formados por…",
    correcta: "Actina (G-actina → F-actina)",
    incorrectas: ["Tubulina α/β", "Queratinas exclusivamente"]
  },
  {
    enunciado: "Los microtúbulos presentan…",
    correcta: "Polaridad (+/−) y se ensamblan desde el MTOC/centrosoma",
    incorrectas: ["Estructura sin polaridad definida", "Formación solo en RE rugoso"]
  },
  {
    enunciado: "Un fármaco que estabiliza microtúbulos e inhibe su despolimerización es…",
    correcta: "Taxol (paclitaxel)",
    incorrectas: ["Colchicina (despolimeriza)", "Citocalasina B (actina)"]
  },
  {
    enunciado: "La dineína axonemal es una…",
    correcta: "Proteína motora de microtúbulos que genera batido de cilios/flagelos",
    incorrectas: ["Quinesina que camina a – extremo", "Miosina II de sarcómero"]
  },
  {
    enunciado: "La mayoría de quinesinas se desplazan hacia…",
    correcta: "El extremo + del microtúbulo",
    incorrectas: ["El extremo – del microtúbulo", "No son motores, son chaperonas"]
  },
  {
    enunciado: "La miosina II participa típicamente en…",
    correcta: "Contracción del citoesqueleto de actina (anillo contráctil, músculo)",
    incorrectas: ["Batido ciliar 9+2", "Transporte vesicular sobre microtúbulos"]
  },
  {
    enunciado: "La estructura 9+2 describe…",
    correcta: "El axonema de cilios y flagelos eucariotas",
    incorrectas: ["El cuerpo basal (9 tripletes + 0)", "El nucleosoma (octámero de histonas)"]
  },
  {
    enunciado: "Los filamentos intermedios confieren…",
    correcta: "Resistencia mecánica y estabilidad (queratinas, vimentina, neurofilamentos)",
    incorrectas: ["Motilidad basada en ATP", "Polaridad para transporte motor"]
  },
  {
    enunciado: "El RE rugoso se especializa en…",
    correcta: "Síntesis de proteínas secretoras y de membrana",
    incorrectas: ["β-oxidación de ácidos grasos", "Síntesis de triglicéridos en adipocitos exclusivamente"]
  },
  {
    enunciado: "El aparato de Golgi realiza principalmente…",
    correcta: "Modificación postraduccional, clasificación y empaquetado",
    incorrectas: ["Fosforilación oxidativa", "Replicación de ADN nuclear"]
  },
  {
    enunciado: "Los peroxisomas destacan por…",
    correcta: "Oxidaciones y detoxificación con catalasa",
    incorrectas: ["Hidrólisis ácida masiva (lisosomas)", "Síntesis de ATP mediante quimiosmosis"]
  },
  {
    enunciado: "Los lisosomas contienen…",
    correcta: "Hidrolasas ácidas para digestión intracelular",
    incorrectas: ["Enzimas de Calvin", "Complejo I–IV de la cadena respiratoria"]
  },
  {
    enunciado: "El tráfico vesicular anterógrado temprano se dirige…",
    correcta: "Del RE al Golgi (COPII)",
    incorrectas: ["Del Golgi al RE (COPII)", "Del endosoma tardío al RE directo"]
  },
  {
    enunciado: "La señal peptídica N-terminal hidrofóbica dirige…",
    correcta: "Entrada cotraduccional de polipéptidos al RE vía SRP",
    incorrectas: ["Importación nuclear mediante NLS", "Destino peroxisomal PTS1/2"]
  },
  {
    enunciado: "El citoesqueleto interviene en la mitosis mediante…",
    correcta: "Formación del huso mitótico y el anillo contráctil",
    incorrectas: ["Síntesis de ADN en cinetocoros", "Traducción de ARNm en centrómeros"]
  },
  {
    enunciado: "El glicocálix celular cumple funciones de…",
    correcta: "Protección, reconocimiento y adhesión",
    incorrectas: ["Producción de ATP", "Replicación de plásmidos"]
  },
  {
    enunciado: "En hongos, la pared celular está compuesta principalmente por…",
    correcta: "Quitina y glucanos",
    incorrectas: ["Celulosa y lignina", "Peptidoglicano con ácido teicoico"]
  },
  {
    enunciado: "Los cuerpos basales de cilios/flagelos poseen organización…",
    correcta: "9 tripletes de microtúbulos (9×3 + 0)",
    incorrectas: ["9 pares con 2 centrales (9+2)", "13 protofilamentos en doblets circulares"]
  },
  {
    enunciado: "La transducción de señales en membrana suele iniciar por…",
    correcta: "Unión de ligando a receptor y activación de cascadas (GPCR/RTK)",
    incorrectas: ["Entrada de ADN al núcleo por canales de K+", "Fusión espontánea de lisosomas con membrana plasmática"]
  },
  {
    enunciado: "Una consecuencia de aumentar los dobles enlaces cis de fosfolípidos es…",
    correcta: "Mayor fluidez de membrana a una temperatura dada",
    incorrectas: ["Menor permeabilidad al agua", "Cristalización de la bicapa a 37 °C"]
  },
  {
    enunciado: "Las vacuolas vegetales contribuyen a…",
    correcta: "Turgencia, almacenamiento y reciclaje",
    incorrectas: ["Fosforilación oxidativa", "Síntesis de ARNr"]
  },
  {
    enunciado: "El transporte retrógrado Golgi→RE suele usar cubiertas…",
    correcta: "COPI",
    incorrectas: ["COPII", "Caveolina"]
  }
];
