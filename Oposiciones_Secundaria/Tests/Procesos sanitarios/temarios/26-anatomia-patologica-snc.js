'use strict';

var PREGUNTAS = [
{
enunciado: "En el examen macroscópico del SNC, ¿qué término define el área de reblandecimiento tisular por necrosis licuefactiva tras un infarto isquémico?",
correcta: "Encefalomalacia",
incorrectas: [
"Encefalopatía espongiforme",
"Gliosis reactiva focal"
]
},
{
enunciado: "Una hemorragia de morfología biconvexa que no cruza las suturas craneales suele tener origen en:",
correcta: "La rotura de la arteria meníngea media (espacio epidural)",
incorrectas: [
"El desgarro de las venas puente (espacio subdural)",
"La malformación de la arteria comunicante anterior"
]
},
{
enunciado: "La presencia de un exudado purulento amarillento-verdoso localizado en las cisternas de la base y surcos cerebrales es indicativo de:",
correcta: "Leptomeningitis bacteriana aguda",
incorrectas: [
"Paquimeningitis fibrosa crónica",
"Hemorragia subaracnoidea en fase de resolución"
]
},
{
enunciado: "¿Qué hallazgo macroscópico caracteriza la fase inicial de un infarto cerebral isquémico (6-12 horas)?",
correcta: "Pérdida de la diferenciación entre sustancia gris y blanca y borramiento de surcos",
incorrectas: [
"Presencia de una cavidad quística de paredes lisas y contenido claro",
"Retracción del parénquima con dilatación ventricular ex vacuo"
]
},
{
enunciado: "La atrofia cortical selectiva de los lóbulos frontal y temporal con preservación del tercio posterior de la circunvolución temporal superior define a:",
correcta: "La enfermedad de Pick",
incorrectas: [
"La enfermedad de Alzheimer de inicio tardío",
"La demencia por cuerpos de Lewy"
]
},
{
enunciado: "En la sección transversal del mesencéfalo, la despigmentación de la sustancia negra es el signo macroscópico patognomónico de:",
correcta: "La enfermedad de Parkinson",
incorrectas: [
"La parálisis supranuclear progresiva",
"La atrofia multisistémica de tipo cerebeloso"
]
},
{
enunciado: "Un hematoma subdural crónico se identifica macroscópicamente por:",
correcta: "La presencia de membranas fibrovasculares que organizan la sangre licuada",
incorrectas: [
"Un coágulo fresco adherido firmemente al periostio craneal",
"La infiltración hemorrágica directa en la corteza cerebral"
]
},
{
enunciado: "La herniación del uncus del hipocampo a través de la hendidura tentorial suele provocar la compresión de:",
correcta: "El tercer par craneal y la arteria cerebral posterior",
incorrectas: [
"El bulbo raquídeo y las amígdalas cerebelosas",
"La hoz del cerebro y la arteria pericallosa"
]
},
{
enunciado: "¿Qué característica macroscópica permite sospechar un glioblastoma multiforme frente a otros gliomas?",
correcta: "Presencia de áreas de necrosis central y focos hemorrágicos con patrón infiltrante",
incorrectas: [
"Masa bien circunscrita de crecimiento exofítico y consistencia elástica",
"Lesión quística con un nódulo mural altamente vascularizado"
]
},
{
enunciado: "La hidrocefalia comunicante se produce macroscópicamente por:",
correcta: "Obstáculo en la reabsorción del LCR en las vellosidades aracnoideas",
incorrectas: [
"Estenosis del acueducto de Silvio por procesos inflamatorios",
"Obstrucción de los agujeros de Luschka y Magendie"
]
},
{
enunciado: "Las placas de desmielinización en la esclerosis múltiple se observan en el examen macroscópico como:",
correcta: "Áreas grisáceas, de aspecto vítreo y contornos netos en la sustancia blanca",
incorrectas: [
"Nódulos blanquecinos opacos distribuidos en la corteza cerebral",
"Zonas de reblandecimiento hemorrágico en el centro oval"
]
},
{
enunciado: "La presencia de múltiples infartos pequeños en los ganglios de la base y cápsula interna se denomina:",
correcta: "Estado lacunar (lacunas)",
incorrectas: [
"Encefalopatía multiquística",
"Síndrome de Binswanger"
]
},
{
enunciado: "Un tumor sólido, blanquecino, de base ancha en la duramadre que produce hiperostosis en el hueso adyacente es un:",
correcta: "Meningioma",
incorrectas: [
"Ependimoma mixopapilar",
"Hemangioblastoma supratentorial"
]
},
{
enunciado: "La rotura de un aneurisma sacular en el polígono de Willis vierte la sangre primariamente hacia:",
correcta: "El espacio subaracnoideo",
incorrectas: [
"El sistema ventricular lateral",
"El parénquima del lóbulo frontal"
]
},
{
enunciado: "La enfermedad de Huntington muestra una atrofia macroscópica llamativa de:",
correcta: "El núcleo caudado y el putamen",
incorrectas: [
"El globo pálido y el núcleo subtalámico",
"La corteza entorrinal y el hipocampo"
]
},
{
enunciado: "En la enfermedad de Alzheimer, la dilatación ventricular secundaria a la atrofia del parénquima se denomina:",
correcta: "Hidrocefalia ex vacuo",
incorrectas: [
"Hidrocefalia a tensión",
"Hidrocefalia normotensiva"
]
},
{
enunciado: "Un absceso cerebral maduro se diferencia macroscópicamente de un tumor necrótico por:",
correcta: "La presencia de una cápsula colágena bien formada y pus central",
incorrectas: [
"La ausencia de edema perilesional en el tejido circundante",
"La localización exclusiva en la sustancia gris cortical"
]
},
{
enunciado: "La coloración amarillenta de las leptomeninges tras un episodio hemorrágico previo se debe a:",
correcta: "Depósitos de hemosiderina (siderosis marginal)",
incorrectas: [
"Acumulación de bilirrubina por ictericia nuclear",
"Infiltración de macrófagos cargados de lípidos"
]
},
{
enunciado: "¿Qué signo macroscópico es indicativo de hipertensión endocraneana severa en la base del encéfalo?",
correcta: "Herniación de las amígdalas cerebelosas por el agujero occipital",
incorrectas: [
"Desviación de la línea media superior a cinco milímetros",
"Colapso del cuarto ventrículo por edema periacueductal"
]
},
{
enunciado: "Las hemorragias de Duret son lesiones hemorrágicas secundarias localizadas en:",
correcta: "El mesencéfalo y la protuberancia por desplazamiento del tronco",
incorrectas: [
"El tálamo por rotura de arterias lentículo-estriadas",
"La retina por aumento súbito de la presión del LCR"
]
},
{
enunciado: "La panencefalitis esclerosante subaguda muestra macroscópicamente:",
correcta: "Atrofia cerebral difusa y gliosis con endurecimiento del parénquima",
incorrectas: [
"Múltiples focos de necrosis hemorrágica en lóbulos temporales",
"Presencia de placas calcificadas en los plexos coroideos"
]
},
{
enunciado: "Un craneofaringioma se localiza macroscópicamente en la región:",
correcta: "Supraselar",
incorrectas: [
"Infratentorial",
"Intraventricular"
]
},
{
enunciado: "La presencia de múltiples masas nodulares umbilicadas en el encéfalo sugiere:",
correcta: "Enfermedad metastásica",
incorrectas: [
"Neurofibromatosis tipo 1",
"Esclerosis tuberosa"
]
},
{
enunciado: "La necrosis laminar cortical es una lesión macroscópica típica de:",
correcta: "Hipoxia-isquemia global severa",
incorrectas: [
"Intoxicación crónica por metales pesados",
"Encefalopatía de Wernicke aguda"
]
},
{
enunciado: "En la sección coronal, el aspecto de 'cerebro de cristal' (translucidez) es típico de:",
correcta: "Edema cerebral severo y prolongado",
incorrectas: [
"Fijación excesiva con formaldehído",
"Degeneración walleriana descendente"
]
},
{
enunciado: "El complejo de Pick se diferencia macroscópicamente del Alzheimer por:",
correcta: "Atrofia lobar asimétrica y circunvoluciones 'en filo de cuchillo'",
incorrectas: [
"Presencia de ovillos neurofibrilares visibles macroscópicamente",
"Afectación predominante de las áreas motoras primarias"
]
},
{
enunciado: "La encefalopatía de Wernicke muestra lesiones macroscópicas consistentes en:",
correcta: "Hemorragias petequiales en los cuerpos mamilares y paredes del tercer ventrículo",
incorrectas: [
"Necrosis bilateral de los globos pálidos por monóxido de carbono",
"Desmielinización central del puente (mielinolisis)"
]
},
{
enunciado: "Un oligodendroglioma suele presentar macroscópicamente una característica distintiva:",
correcta: "Frecuentes calcificaciones visibles y tacto arenoso al corte",
incorrectas: [
"Cápsula gruesa con contenido de queratina y cristales de colesterol",
"Crecimiento exclusivamente intraventricular en el foramen de Monro"
]
},
{
enunciado: "La malformación de Arnold-Chiari tipo II asocia macroscópicamente:",
correcta: "Desplazamiento caudal del cerebelo y bulbo con mielomeningocele",
incorrectas: [
"Agenesia total del cuerpo calloso y colpocefalia",
"Ausencia de circunvoluciones (lisencefalia) y paquigiria"
]
},
{
enunciado: "El meduloblastoma es un tumor macroscópicamente localizado en:",
correcta: "El vermis cerebeloso, protruyendo en el cuarto ventrículo",
incorrectas: [
"La región pineal con compresión del colículo superior",
"El ángulo pontocerebeloso adherido al octavo par"
]
},
{
enunciado: "En el examen macroscópico de la médula espinal, la siringomielia se observa como:",
correcta: "Una cavidad quística longitudinal en el centro de la médula",
incorrectas: [
"Un engrosamiento fusiforme por infiltración linfoide",
"Una sección completa traumática con formación de callo"
]
},
{
enunciado: "La leucoencefalopatía multifocal progresiva presenta macroscópicamente:",
correcta: "Focos de desmielinización irregulares que confluyen en la sustancia blanca",
incorrectas: [
"Calcificaciones masivas en los ganglios de la base",
"Necrosis supurativa focal con formación de fístulas"
]
},
{
enunciado: "La enfermedad de Creutzfeldt-Jakob se caracteriza macroscópicamente por:",
correcta: "Atrofia cerebral rápida con escasos hallazgos específicos fuera de la atrofia",
incorrectas: [
"Grandes placas amiloides visibles en el cerebelo",
"Infiltrado inflamatorio denso en las paquimeninges"
]
},
{
enunciado: "Un ependimoma del cuarto ventrículo produce macroscópicamente:",
correcta: "Hidrocefalia obstructiva supratentorial por bloqueo del flujo",
incorrectas: [
"Atrofia de los nervios ópticos por compresión directa",
"Hemorragia espinal subaracnoidea por siembra"
]
},
{
enunciado: "Las malformaciones arteriovenosas (MAV) se identifican macroscópicamente como:",
correcta: "Un ovillo de vasos tortuosos con gliosis intervascular",
incorrectas: [
"Una sola arteria dilatada de pared fina y elástica",
"Un capilar único ectásico rodeado de hemosiderina"
]
},
{
enunciado: "La presencia de 'acérvulos' (arena cerebral) en la glándula pineal de un adulto es:",
correcta: "Una calcificación fisiológica sin significación patológica",
incorrectas: [
"Un signo temprano de pinealocitoma maligno",
"Evidencia de una infección previa por toxoplasma"
]
},
{
enunciado: "¿Qué hallazgo macroscópico diferencia una contusión cerebral de un infarto?",
correcta: "Las contusiones afectan a la cresta de las circunvoluciones (golpe/contragolpe)",
incorrectas: [
"Los infartos nunca presentan transformación hemorrágica",
"Las contusiones respetan siempre la piamadre suprayacente"
]
},
{
enunciado: "En la neurosífilis (tabes dorsal), la lesión macroscópica medular es:",
correcta: "Atrofia de los cordones posteriores y raíces dorsales",
incorrectas: [
"Degeneración de las astas anteriores motoneuronales",
"Inflamación granulomatosa del cono medular"
]
},
{
enunciado: "La trombosis de los senos venosos durales se identifica macroscópicamente por:",
correcta: "Presencia de trombos sólidos que no se desprenden al lavar el seno",
incorrectas: [
"Dilatación aneurismática del seno longitudinal superior",
"Ausencia total de sangre en el sistema venoso profundo"
]
},
{
enunciado: "Un schwanoma del acústico se observa macroscópicamente como:",
correcta: "Masa encapsulada en el ángulo pontocerebeloso que comprime el tronco",
incorrectas: [
"Infiltración difusa del nervio vestibulococlear hasta el núcleo",
"Lesión quística intraaxial en el interior de la protuberancia"
]
}
];