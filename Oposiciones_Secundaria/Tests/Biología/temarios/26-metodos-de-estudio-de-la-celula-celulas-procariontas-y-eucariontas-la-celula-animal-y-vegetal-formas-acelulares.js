// temarios/26-metodos-de-estudio-de-la-celula-celulas-procariontas-y-eucariontas-la-celula-animal-y-vegetal-formas-acelulares.js
var PREGUNTAS = [
  {
    enunciado: "La resolución límite aproximada de la microscopía óptica de campo claro es de…",
    correcta: "≈0,2 μm",
    incorrectas: ["≈2 μm", "≈2 nm"]
  },
  {
    enunciado: "¿Qué técnica óptica permite observar células vivas sin teñir resaltando diferencias de índice de refracción?",
    correcta: "Contraste de fases",
    incorrectas: ["Campo oscuro exclusivamente", "Microscopía electrónica de transmisión"]
  },
  {
    enunciado: "La microscopía confocal se caracteriza por…",
    correcta: "Usar un pinhole para obtener secciones ópticas y mejorar la resolución axial",
    incorrectas: ["Iluminar con haz de electrones", "Requerir metalizados con oro siempre"]
  },
  {
    enunciado: "En MET (microscopía electrónica de transmisión)…",
    correcta: "Los electrones atraviesan la muestra ultrafina, revelando ultraestructura interna",
    incorrectas: ["Solo se visualiza la topografía superficial", "No requiere contrastes pesados"]
  },
  {
    enunciado: "En MEB (microscopía electrónica de barrido)…",
    correcta: "Se obtiene imagen tridimensional de la superficie por electrones secundarios",
    incorrectas: ["Se visualizan ribosomas internos sin cortes", "La muestra debe ser siempre criogénica"]
  },
  {
    enunciado: "El fraccionamiento celular por centrifugación diferencial separa orgánulos en función de…",
    correcta: "Tamaño y densidad sedimentacional",
    incorrectas: ["Carga eléctrica neta únicamente", "Contenido de ADN exclusivamente"]
  },
  {
    enunciado: "¿Qué fracción sedimenta primero en una centrifugación diferencial típica?",
    correcta: "Núcleos y restos celulares",
    incorrectas: ["Ribosomas y citosol", "Microsomas y vesículas ligeras"]
  },
  {
    enunciado: "Un marcador enzimático clásico del retículo endoplasmático liso es…",
    correcta: "Glucosa-6-fosfatasa",
    incorrectas: ["Citocromo c oxidasa (mitocondria)", "Ácido fosfatasa (lisosomas)"]
  },
  {
    enunciado: "La inmunofluorescencia se basa en…",
    correcta: "Anticuerpos marcados con fluoróforos contra dianas celulares",
    incorrectas: ["Metales pesados quelados al ADN", "Hibridación de ARN con isótopos radiactivos exclusivamente"]
  },
  {
    enunciado: "La técnica FISH permite…",
    correcta: "Detectar secuencias específicas de ADN/ARN in situ con sondas fluorescentes",
    incorrectas: ["Medir actividad enzimática total del citosol", "Determinar masas moleculares por electroforesis SDS-PAGE"]
  },
  {
    enunciado: "En cultivo celular, se denomina ‘línea celular’ a…",
    correcta: "Poblaciones estables que se dividen indefinidamente bajo condiciones controladas",
    incorrectas: ["Cualquier cultivo primario recién aislado", "Únicamente cultivos de plantas"]
  },
  {
    enunciado: "Una diferencia clave entre procariotas y eucariotas es que las primeras…",
    correcta: "Carecen de orgánulos membranosos internos",
    incorrectas: ["Poseen ribosomas 80S", "Presentan núcleo con envoltura doble"]
  },
  {
    enunciado: "El material genético en bacterias se organiza típicamente como…",
    correcta: "Un cromosoma circular en el nucleoide y posibles plásmidos",
    incorrectas: ["Varios cromosomas lineales en el núcleo", "ARN bicatenario segmentado"]
  },
  {
    enunciado: "Los ribosomas procariotas son…",
    correcta: "70S (subunidades 50S y 30S)",
    incorrectas: ["80S (60S y 40S)", "60S (40S y 20S)"]
  },
  {
    enunciado: "En eucariotas, el citoesqueleto incluye…",
    correcta: "Microtúbulos, microfilamentos y filamentos intermedios",
    incorrectas: ["Actina y quitina", "Solo microtúbulos"]
  },
  {
    enunciado: "La compartimentación eucariota permite…",
    correcta: "Separar rutas metabólicas y regular microambientes intracelulares",
    incorrectas: ["Evitar cualquier transporte vesicular", "Eliminar la necesidad de ribosomas"]
  },
  {
    enunciado: "¿Cuál es una característica típica de la célula animal frente a la vegetal?",
    correcta: "Presencia de centríolos en el centrosoma",
    incorrectas: ["Pared celular de celulosa", "Cloroplastos con tilacoides"]
  },
  {
    enunciado: "Una característica distintiva de la célula vegetal es…",
    correcta: "Gran vacuola central y plasmodesmos",
    incorrectas: ["Lisosomas abundantes siempre", "Glicocálix desarrollado idéntico al animal"]
  },
  {
    enunciado: "Los cloroplastos y las mitocondrias comparten que…",
    correcta: "Poseen genoma propio y doble membrana",
    incorrectas: ["Carecen de ribosomas", "Se forman exclusivamente por síntesis de novo sin división"]
  },
  {
    enunciado: "La pared celular vegetal está compuesta principalmente por…",
    correcta: "Celulosa, hemicelulosas y pectinas",
    incorrectas: ["Peptidoglucano", "Quitina y mananos como principales"]
  },
  {
    enunciado: "Los lisosomas son orgánulos…",
    correcta: "Con enzimas hidrolíticas activas en pH ácido para degradación intracelular",
    incorrectas: ["Productores directos de ATP", "Exclusivos de células vegetales"]
  },
  {
    enunciado: "Los plasmodesmos en células vegetales…",
    correcta: "Permiten comunicación y transporte simpástico entre células adyacentes",
    incorrectas: ["Son canales proteicos de la membrana plasmática animal", "Solo existen en hongos y bacterias"]
  },
  {
    enunciado: "Un virus se define mejor como…",
    correcta: "Entidad acelular con genoma de ADN o ARN, encapsidada y parásita obligada",
    incorrectas: ["Célula procariota sin pared", "Orgánulo intracelular autónomo"]
  },
  {
    enunciado: "Un viroide es…",
    correcta: "Una molécula circular de ARN sin cápside que infecta plantas",
    incorrectas: ["Una proteína infecciosa sin ácido nucleico", "Un retrovirus defectivo"]
  },
  {
    enunciado: "Un prión es…",
    correcta: "Una proteína mal plegada con capacidad de inducción conformacional patológica",
    incorrectas: ["Un virus de ADN bicatenario sin cápside", "Un plásmido circular bacteriano"]
  },
  {
    enunciado: "Los bacteriófagos son virus que infectan…",
    correcta: "Bacterias",
    incorrectas: ["Hongos", "Protozoos exclusivamente"]
  },
  {
    enunciado: "Los ribosomas eucariotas citosólicos son…",
    correcta: "80S (60S y 40S)",
    incorrectas: ["70S (50S y 20S)", "90S (50S y 40S)"]
  },
  {
    enunciado: "La criomicroscopía electrónica (cryo-EM) permite…",
    correcta: "Observar muestras vitrificadas preservando estados casi nativos",
    incorrectas: ["Tinciones con metales a temperatura ambiente", "Únicamente imágenes de superficie"]
  },
  {
    enunciado: "En MET, un contraste habitual para tejidos biológicos es…",
    correcta: "Tetróxido de osmio y sales de uranilo/plomo",
    incorrectas: ["Azul de metileno exclusivamente", "Cristal violeta"]
  },
  {
    enunciado: "El aparato de Golgi participa principalmente en…",
    correcta: "Modificación, clasificación y envío de proteínas y lípidos",
    incorrectas: ["Síntesis de ATP por fosforilación oxidativa", "Replicación del ADN nuclear"]
  },
  {
    enunciado: "El retículo endoplasmático rugoso se caracteriza por…",
    correcta: "Ribosomas adheridos y síntesis de proteínas secretoras o de membrana",
    incorrectas: ["Síntesis de ácidos grasos exclusivamente", "Degradación lisosomal"]
  },
  {
    enunciado: "El tamaño celular típico de bacterias es del orden de…",
    correcta: "1–10 μm",
    incorrectas: ["50–200 nm", "100–500 μm en la mayoría"]
  },
  {
    enunciado: "¿Qué componente atraviesa libremente los poros nucleares?",
    correcta: "Moléculas pequeñas <~40 kDa difunden con mayor facilidad",
    incorrectas: ["Cualquier proteína sin señal NLS", "ARNm sin complejo de exportación"]
  },
  {
    enunciado: "Los microtúbulos están formados por…",
    correcta: "Tubulina α/β y muestran polaridad (+/−)",
    incorrectas: ["Actina F y miosina", "Lignina y celulosa"]
  },
  {
    enunciado: "¿Cuál es un destino típico de proteínas con péptido señal N-terminal hidrofóbico?",
    correcta: "Entrada cotraduccional al RE y vía secretora",
    incorrectas: ["Importación nuclear directa", "Localización peroxisomal por PTS1/2"]
  },
  {
    enunciado: "Los centriolos aparecen normalmente en…",
    correcta: "Células animales como parte del centrosoma",
    incorrectas: ["Células vegetales maduras en general", "Bacterias Gram-positivas"]
  },
  {
    enunciado: "Los plásmidos bacterianos son…",
    correcta: "Moléculas de ADN extracromosómico que pueden portar genes de resistencia",
    incorrectas: ["Fragmentos de ARN mensajero circular", "Cromosomas lineales mitocondriales"]
  },
  {
    enunciado: "Un ejemplo de comunicación célula–célula en animales análogo funcional a plasmodesmos es…",
    correcta: "Uniones GAP (nexos) entre células adyacentes",
    incorrectas: ["Desmosomas (adhesión mecánica)", "Hemisdesmosomas (anclaje a matriz)"]
  },
  {
    enunciado: "Una ventaja del cultivo celular es…",
    correcta: "Control experimental de variables para estudiar procesos celulares",
    incorrectas: ["Sustituir completamente al organismo en complejidad sistémica", "Evitar cualquier mutación o deriva genética"]
  }
];
