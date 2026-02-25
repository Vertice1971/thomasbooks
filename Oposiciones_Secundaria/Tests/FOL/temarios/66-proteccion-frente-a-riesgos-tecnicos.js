'use strict';

var PREGUNTAS = [
{
enunciado: "¿Qué elemento de protección de una máquina impide el acceso a las zonas peligrosas mediante una barrera material?",
correcta: "Resguardo.",
incorrectas: [
"Dispositivo de detección de presencia.",
"Mando de validación táctil."
]
},
{
enunciado: "En seguridad eléctrica, ¿qué se entiende por contacto eléctrico directo?",
correcta: "El contacto de personas con partes de la instalación habitualmente bajo tensión.",
incorrectas: [
"El contacto con masas que han puesto en tensión accidentalmente.",
"La descarga producida por electricidad estática en ambientes secos."
]
},
{
enunciado: "¿Cuál es el dispositivo diferencial diseñado para proteger a las personas contra contactos indirectos?",
correcta: "Interruptor diferencial.",
incorrectas: [
"Interruptor magnetotérmico.",
"Fusible de alta capacidad de ruptura."
]
},
{
enunciado: "Según el RD 614/2001, ¿cuál es la primera de las 'cinco reglas de oro' para trabajos sin tensión?",
correcta: "Desconectar o abrir con corte visible.",
incorrectas: [
"Verificar la ausencia de tensión.",
"Poner a tierra y en cortocircuito."
]
},
{
enunciado: "En la química del fuego, ¿qué elemento se añade al triángulo del fuego para formar el tetraedro del fuego?",
correcta: "Reacción en cadena.",
incorrectas: [
"Energía de activación.",
"Agente oxidante."
]
},
{
enunciado: "¿Qué clase de fuego corresponde a los incendios de combustibles sólidos que dejan brasas (madera, papel, tejidos)?",
correcta: "Clase A.",
incorrectas: [
"Clase B.",
"Clase C."
]
},
{
enunciado: "¿Cuál es el agente extintor más adecuado para fuegos de Clase B (líquidos inflamables)?",
correcta: "Espuma física o polvo químico seco.",
incorrectas: [
"Agua a chorro.",
"Polvo específico para metales."
]
},
{
enunciado: "Un detector de incendios de tipo iónico actúa mediante la detección de:",
correcta: "Partículas visibles o invisibles de la combustión que afectan a la conductividad del aire.",
incorrectas: [
"El aumento brusco de la temperatura ambiente por encima de 60 °C.",
"La radiación infrarroja emitida por las llamas en el espectro electromagnético."
]
},
{
enunciado: "¿Qué función cumple el marcado 'CE' en una máquina?",
correcta: "Indica que la máquina cumple con los requisitos esenciales de seguridad y salud de la normativa europea.",
incorrectas: [
"Certifica que la máquina ha sido fabricada íntegramente en España.",
"Garantiza que la máquina no requiere mantenimiento preventivo durante cinco años."
]
},
{
enunciado: "Ante un fuego de origen eléctrico, ¿qué agente extintor está terminantemente prohibido por su conductividad?",
correcta: "Agua.",
incorrectas: [
"Dióxido de carbono (CO2).",
"Polvo químico ABC."
]
},
{
enunciado: "¿Qué define el concepto de 'tensión de seguridad' en ambientes secos según el REBT?",
correcta: "50 voltios.",
incorrectas: [
"24 voltios.",
"230 voltios."
]
},
{
enunciado: "Los resguardos asociados al enclavamiento se caracterizan por:",
correcta: "Impedir el funcionamiento de la máquina si el resguardo no está cerrado.",
incorrectas: [
"Permitir el acceso a la zona peligrosa mientras el motor está en marcha.",
"Ser dispositivos de protección individual que porta el trabajador."
]
},
{
enunciado: "¿Cuál es el objetivo de la puesta a tierra en una instalación eléctrica?",
correcta: "Limitar la tensión de las masas metálicas respecto a tierra para proteger a las personas.",
incorrectas: [
"Aumentar la resistencia del paso de corriente hacia el cuerpo humano.",
"Evitar que los fusibles se fundan ante una sobrecarga de red."
]
},
{
enunciado: "El fuego de Clase F hace referencia a incendios derivados de:",
correcta: "Ingredientes para cocinar (aceites y grasas vegetales o animales).",
incorrectas: [
"Gases inflamables como el butano o propano.",
"Metales combustibles como el magnesio o potasio."
]
},
{
enunciado: "¿Qué normativa regula las condiciones de protección contra incendios en edificios de uso sanitario y administrativo?",
correcta: "Código Técnico de la Edificación (CTE-DB-SI).",
incorrectas: [
"Reglamento de Seguridad para Plantas e Instalaciones Frigoríficas.",
"Ley de Prevención de Riesgos Laborales únicamente."
]
},
{
enunciado: "¿Qué es un detector termovelocimétrico?",
correcta: "Aquel que se activa cuando la velocidad de aumento de la temperatura excede un valor determinado.",
incorrectas: [
"Un sensor que detecta la velocidad de propagación del humo en un pasillo.",
"Un dispositivo que mide la intensidad lumínica de la llama."
]
},
{
enunciado: "En una máquina, los dispositivos de 'mando a dos manos' se consideran:",
correcta: "Medidas de protección que obligan a mantener las manos fuera de la zona de peligro.",
incorrectas: [
"Medidas de prevención en el diseño original del motor.",
"Equipos de protección individual para el manejo de prensas."
]
},
{
enunciado: "¿Cuál es el efecto fisiológico principal de una corriente de 50 mA que atraviesa el tórax durante más de un segundo?",
correcta: "Fibrilación ventricular.",
incorrectas: [
"Tetanización muscular leve sin pérdida de control.",
"Percepción cutánea sin efectos secundarios."
]
},
{
enunciado: "¿Cómo actúa el CO2 como agente extintor?",
correcta: "Principalmente por sofocación (desplazamiento del oxígeno) y enfriamiento.",
incorrectas: [
"Por inhibición de la reacción en cadena mediante radicales libres.",
"Por humectación profunda de la materia combustible sólida."
]
},
{
enunciado: "La señal de seguridad para indicar un equipo de lucha contra incendios es:",
correcta: "Rectangular o cuadrada, roja con pictograma blanco.",
incorrectas: [
"Triangular, amarilla con borde negro.",
"Circular, azul con pictograma blanco."
]
},
{
enunciado: "¿Qué es la distancia de seguridad en el riesgo eléctrico?",
correcta: "La separación mínima que debe mantenerse respecto a elementos en tensión para evitar el arco eléctrico.",
incorrectas: [
"La longitud total del cable de conexión a tierra de un edificio.",
"La distancia entre el cuadro general y el extintor más cercano."
]
},
{
enunciado: "El 'fuego de superficie' en materiales sólidos se caracteriza por:",
correcta: "La ausencia de llamas y la presencia de incandescencia o brasas.",
incorrectas: [
"La emisión masiva de gases inflamables a baja temperatura.",
"La imposibilidad de ser extinguido mediante agentes gaseosos."
]
},
{
enunciado: "¿Qué requisito debe cumplir un extintor portátil para ser considerado eficaz?",
correcta: "Estar señalizado, ser accesible y tener el mantenimiento reglamentario al día.",
incorrectas: [
"Tener una capacidad mínima de 25 kg de agente extintor.",
"Estar ubicado siempre a una altura superior a los 2 metros."
]
},
{
enunciado: "¿Cuál es el riesgo principal de las máquinas que presentan órganos móviles de transmisión?",
correcta: "Atrapamiento o arrastre.",
incorrectPar: [
"Proyección de fluidos a baja presión.",
"Exposición a campos electromagnéticos estáticos."
]
},
{
enunciado: "En el riesgo eléctrico, ¿qué factor determina principalmente la gravedad de la lesión según la Ley de Ohm?",
correcta: "La intensidad de la corriente que atraviesa el cuerpo.",
incorrectas: [
"El color del aislamiento del conductor activo.",
"La capacidad del interruptor diferencial en amperios."
]
},
{
enunciado: "Un sistema de BIE (Boca de Incendio Equipada) es un sistema de:",
correcta: "Protección activa contra incendios de uso manual.",
incorrectas: [
"Detección automática de humos iónicos.",
"Protección pasiva mediante compartimentación."
]
},
{
enunciado: "¿Qué indica un extintor con la etiqueta ABC?",
correcta: "Que es apto para fuegos de sólidos, líquidos y gases.",
incorrectas: [
"Que solo puede utilizarse en ambientes con presencia de personal sanitario.",
"Que su contenido es agua pulverizada con aditivos anticongelantes."
]
},
{
enunciado: "¿Qué se debe verificar en la cuarta regla de oro del riesgo eléctrico?",
correcta: "La ausencia de tensión en todos los conductores activos.",
incorrectas: [
"La continuidad del conductor de protección de la máquina.",
"La presión de inflado de las alfombras aislantes."
]
},
{
enunciado: "Los dispositivos de 'parada de emergencia' de una máquina deben ser:",
correcta: "Claramente identificables, visibles y de acceso rápido (tipo seta roja).",
incorrectas: [
"De color verde para no alarmar al trabajador durante su uso.",
"Accionables mediante una clave numérica de seguridad en el panel de control."
]
},
{
enunciado: "¿Qué es la 'resistencia del cuerpo humano' en un contacto eléctrico?",
correcta: "La oposición al paso de la corriente, que varía según la humedad de la piel y la trayectoria.",
incorrectas: [
"Una constante fija de 10.000 ohmios para todas las personas.",
"La capacidad de los pulmones para resistir la entrada de gases tóxicos."
]
},
{
enunciado: "¿Qué clase de fuego se produce en instalaciones con presencia de magnesio, titanio o sodio?",
correcta: "Clase D.",
incorrectas: [
"Clase B.",
"Clase E (denominación antigua)."
]
},
{
enunciado: "El RD 1215/1997 regula las disposiciones mínimas de seguridad para:",
correcta: "La utilización por los trabajadores de los equipos de trabajo (máquinas).",
incorrectas: [
"La fabricación y comercialización de extintores de nieve carbónica.",
"El diseño de instalaciones eléctricas de alta tensión."
]
},
{
enunciado: "En un incendio, ¿cuál es la principal causa de muerte de las víctimas?",
correcta: "La inhalación de humos y gases tóxicos (asfixia).",
incorrectas: [
"El contacto directo con las llamas.",
"El pánico y los traumatismos por caídas."
]
},
{
enunciado: "¿Qué tipo de protección es el recubrimiento de las partes en tensión con aislantes?",
correcta: "Medida de prevención contra contactos directos.",
incorrectas: [
"Medida de protección contra contactos indirectos.",
"Protección individual facultativa."
]
},
{
enunciado: "La señalización de los conductores eléctricos según código de colores establece que el neutro es:",
correcta: "Azul.",
incorrectas: [
"Marrón o negro.",
"Verde-amarillo."
]
},
{
enunciado: "¿Qué caracteriza a un sistema de rociadores automáticos (sprinklers)?",
correcta: "Actúan como sistema de detección y extinción simultánea.",
incorrectas: [
"Solo se activan mediante la pulsación de un botón manual de alarma.",
"Están diseñados exclusivamente para fuegos de metales combustibles."
]
},
{
enunciado: "¿Cuál es la función del 'doble aislamiento' en herramientas eléctricas manuales?",
correcta: "Evitar el riesgo de contacto indirecto sin necesidad de puesta a tierra.",
incorrectas: [
"Permitir el uso de la herramienta bajo la lluvia intensa.",
"Duplicar la potencia de salida del motor de la máquina."
]
},
{
enunciado: "En la evacuación por incendio, ¿cómo debe ser la apertura de las puertas situadas en recorridos de evacuación?",
correcta: "En el sentido de la marcha y de fácil apertura manual.",
incorrectas: [
"Hacia el interior para evitar golpear a personas en los pasillos.",
"Cerradas con llave por motivos de seguridad patrimonial."
]
},
{
enunciado: "¿Qué riesgo se asocia a la utilización de extintores de CO2 en espacios reducidos?",
correcta: "Riesgo de asfixia por desplazamiento del oxígeno.",
incorrectas: [
"Riesgo de explosión por aumento de la humedad relativa.",
"Riesgo de toxicidad crónica por metales pesados."
]
},
{
enunciado: "La inspección periódica reglamentaria de los extintores debe realizarse cada:",
correcta: "Tres meses por la empresa/usuario y anualmente por empresa mantenedora.",
incorrectas: [
"Cinco años coincidiendo con el retimbrado del envase.",
"Cada vez que se cambie de delegado de prevención en el centro."
]
}
];
