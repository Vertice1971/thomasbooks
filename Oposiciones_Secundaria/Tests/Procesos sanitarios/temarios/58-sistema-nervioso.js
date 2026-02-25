'use strict';

var PREGUNTAS = [
{
enunciado: "La unidad anatómica y funcional del sistema nervioso, especializada en la generación y conducción del impulso nervioso, es:",
correcta: "La neurona",
incorrectas: [
"El astrocito",
"La microglía"
]
},
{
enunciado: "¿Qué células son responsables de la formación de la vaina de mielina en el Sistema Nervioso Central (SNC)?",
correcta: "Oligodendrocitos",
incorrectas: [
"Células de Schwann",
"Células ependimarias"
]
},
{
enunciado: "En el potencial de acción, la fase de despolarización se produce principalmente por:",
correcta: "La entrada masiva de iones sodio (Na⁺) a la célula",
incorrectas: [
"La salida de iones potasio (K⁺) al exterior",
"El cierre de los canales de calcio"
]
},
{
enunciado: "Las meninges protegen el SNC; la capa intermedia, caracterizada por su aspecto de tela de araña, se denomina:",
correcta: "Aracnoides",
incorrectas: [
"Duramadre",
"Piamadre"
]
},
{
enunciado: "El centro de relevo sensorial donde se procesan casi todos los impulsos que se dirigen a la corteza cerebral es:",
correcta: "El tálamo",
incorrectas: [
"El hipotálamo",
"El cuerpo calloso"
]
},
{
enunciado: "¿Cuál es la función principal del cerebelo en el control motor?",
correcta: "La coordinación, el equilibrio y la precisión de los movimientos",
incorrectas: [
"La iniciación del movimiento voluntario",
"El control de las funciones vegetativas vitales"
]
},
{
enunciado: "El sistema nervioso autónomo simpático utiliza predominantemente como neurotransmisor postganglionar:",
correcta: "Noradrenalina",
incorrectas: [
"Acetilcolina",
"Dopamina"
]
},
{
enunciado: "La estructura que comunica ambos hemisferios cerebrales permitiendo la integración funcional es:",
correcta: "El cuerpo calloso",
incorrectas: [
"La cápsula interna",
"El fórnix"
]
},
{
enunciado: "El líquido cefalorraquídeo (LCR) se produce principalmente en:",
correcta: "Los plexos coroideos",
incorrectas: [
"Las vellosidades aracnoideas",
"El acueducto de Silvio"
]
},
{
enunciado: "¿Qué par craneal es responsable de la inervación parasimpática de las vísceras torácicas y abdominales?",
correcta: "Nervio vago (X par)",
incorrectas: [
"Nervio glosofaríngeo (IX par)",
"Nervio hipogloso (XII par)"
]
},
{
enunciado: "La zona de la corteza cerebral encargada de la producción del lenguaje articulado es:",
correcta: "El área de Broca",
incorrectas: [
"El área de Wernicke",
"La corteza somatosensorial"
]
},
{
enunciado: "En la médula espinal, la sustancia gris se dispone internamente formando:",
correcta: "Astas",
incorrectas: [
"Cordones",
"Ganglios"
]
},
{
enunciado: "El espacio situado entre la aracnoides y la piamadre, por donde circula el LCR, se denomina:",
correcta: "Espacio subaracnoideo",
incorrectas: [
"Espacio epidural",
"Espacio subdural"
]
},
{
enunciado: "¿Cuál es el principal neurotransmisor inhibidor del Sistema Nervioso Central?",
correcta: "GABA (ácido gamma-aminobutírico)",
incorrectas: [
"Glutamato",
"Adrenalina"
]
},
{
enunciado: "La 'ley del todo o nada' en la fisiología nerviosa establece que:",
correcta: "Si el estímulo alcanza el umbral, se genera un potencial de acción completo",
incorrectas: [
"La intensidad del impulso depende de la fuerza del estímulo",
"Todas las neuronas de un nervio se disparan simultáneamente"
]
},
{
enunciado: "Los receptores sensoriales que informan sobre la posición del cuerpo y la tensión muscular son los:",
correcta: "Propioceptores",
incorrectas: [
"Nociceptores",
"Exteroceptores"
]
},
{
enunciado: "La principal función del hipotálamo es:",
correcta: "La regulación de la homeostasis y el control del sistema endocrino",
incorrectas: [
"La visión y el procesamiento auditivo",
"La memoria a largo plazo exclusivamente"
]
},
{
enunciado: "La sinapsis química se diferencia de la eléctrica por:",
correcta: "El uso de neurotransmisores y la existencia de hendidura sináptica",
incorrectas: [
"La transmisión bidireccional inmediata del impulso",
"La unión física mediante canales tipo gap"
]
},
{
enunciado: "En el sistema nervioso periférico, los cuerpos neuronales se agrupan formando:",
correcta: "Ganglios",
incorrectas: [
"Núcleos",
"Tractos"
]
},
{
enunciado: "¿Qué estructura del tronco del encéfalo contiene los centros vitales cardiocirculatorio y respiratorio?",
correcta: "Bulbo raquídeo (médula oblongada)",
incorrectas: [
"Mesencéfalo",
"Protuberancia (puente)"
]
},
{
enunciado: "La barrera hematoencefálica está formada fundamentalmente por los pies terminales de:",
correcta: "Los astrocitos",
incorrectas: [
"Las células de microglía",
"Las neuronas piramidales"
]
},
{
enunciado: "La conducción saltatoria del impulso nervioso ocurre en:",
correcta: "Fibras mielínicas, a través de los nódulos de Ranvier",
incorrectas: [
"Fibras amielínicas de pequeño calibre",
"Dendritas de neuronas sensitivas"
]
},
{
enunciado: "El lóbulo cerebral encargado primordialmente del procesamiento visual es el:",
correcta: "Lóbulo occipital",
incorrectas: [
"Lóbulo parietal",
"Lóbulo temporal"
]
},
{
enunciado: "El sistema nervioso autónomo parasimpático promueve:",
correcta: "La conservación de energía y las funciones digestivas",
incorrectas: [
"El aumento de la frecuencia cardíaca y presión arterial",
"La dilatación de las vías respiratorias"
]
},
{
enunciado: "Las raíces anteriores de los nervios espinales conducen impulsos de tipo:",
correcta: "Motor (eferente)",
incorrectas: [
"Sensitivo (aferente)",
"Mixto"
]
},
{
enunciado: "La enfermedad desmielinizante autoinmune más común del SNC es:",
correcta: "Esclerosis múltiple",
incorrectas: [
"Síndrome de Guillain-Barré",
"Enfermedad de Alzheimer"
]
},
{
enunciado: "El periodo durante el cual una neurona no puede generar otro potencial de acción se llama:",
correcta: "Periodo refractario",
incorrectas: [
"Periodo de hiperpolarización",
"Periodo de latencia"
]
},
{
enunciado: "¿Cuál de los siguientes es un efector del sistema nervioso somático?",
correcta: "Músculo esquelético",
incorrectas: [
"Músculo liso vascular",
"Glándulas sudoríparas"
]
},
{
enunciado: "Los receptores de la retina responsables de la visión en condiciones de baja luminosidad son:",
correcta: "Bastones",
incorrectas: [
"Conos",
"Células ganglionares"
]
},
{
enunciado: "La vía piramidal o tracto corticoespinal es la principal responsable de:",
correcta: "Los movimientos voluntarios precisos",
incorrectas: [
"Los movimientos reflejos involuntarios",
"El tono muscular postural"
]
},
{
enunciado: "El órgano de Corti, receptor de la audición, se localiza en:",
correcta: "La cóclea (caracol)",
incorrectas: [
"El vestíbulo",
"Los conductos semicirculares"
]
},
{
enunciado: "La afasia de Wernicke se caracteriza por:",
correcta: "Dificultad en la comprensión del lenguaje con habla fluida pero sin sentido",
incorrectas: [
"Comprensión preservada con incapacidad para articular palabras",
"Pérdida total del tono muscular laríngeo"
]
},
{
enunciado: "¿Qué par craneal transmite la información del equilibrio y la audición?",
correcta: "Nervio vestibulococlear (VIII par)",
incorrectas: [
"Nervio accesorio (XI par)",
"Nervio trigémino (V par)"
]
},
{
enunciado: "La sumación espacial de estímulos en una neurona ocurre cuando:",
correcta: "Múltiples terminales presinápticas liberan neurotransmisor simultáneamente",
incorrectas: [
"Una sola terminal dispara impulsos a alta frecuencia",
"Se agota el neurotransmisor en la hendidura"
]
},
{
enunciado: "La división del sistema nervioso que prepara al cuerpo para el ejercicio o la emergencia es:",
correcta: "Sistema nervioso simpático",
incorrectas: [
"Sistema nervioso entérico",
"Sistema nervioso parasimpático"
]
},
{
enunciado: "La duramadre espinal se separa del periostio vertebral por el:",
correcta: "Espacio epidural",
incorrectas: [
"Espacio subpial",
"Conducto del epéndimo"
]
},
{
enunciado: "La 'sustancia blanca' del sistema nervioso debe su color a:",
correcta: "La presencia de axones mielinizados",
incorrectas: [
"La acumulación de cuerpos neuronales",
"La densidad de capilares sanguíneos"
]
},
{
enunciado: "El sistema límbico está involucrado fundamentalmente en:",
correcta: "Las emociones y la memoria",
incorrectas: [
"El control motor fino",
"La regulación de la temperatura corporal únicamente"
]
},
{
enunciado: "¿Cuál es el ion que desencadena la exocitosis de neurotransmisores en el terminal axónico?",
correcta: "Calcio (Ca²⁺)",
incorrectas: [
"Cloro (Cl⁻)",
"Sodio (Na⁺)"
]
},
{
enunciado: "El reflejo rotuliano es un ejemplo de:",
correcta: "Reflejo miotático monosináptico",
incorrectas: [
"Reflejo de retirada polisináptico",
"Reflejo condicionado complejo"
]
}
];