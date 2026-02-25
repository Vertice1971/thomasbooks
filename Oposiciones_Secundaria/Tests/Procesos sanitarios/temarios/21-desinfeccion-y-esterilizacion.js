'use strict';

var PREGUNTAS = [
	{
		enunciado: "Según la clasificación de Spaulding, un endoscopio que entra en contacto con mucosas íntegras se considera material:",
		correcta: "Semicrítico",
		incorrectas: [
			"Crítico",
			"No crítico"
		]
	},
	{
		enunciado: "¿Cuál es el método de elección para la esterilización de instrumental quirúrgico metálico termorresistente?",
		correcta: "Calor húmedo (Autoclave)",
		incorrectas: [
			"Calor seco (Estufa de Poupinel)",
			"Inmersión en glutaraldehído al 2%"
		]
	},
	{
		enunciado: "La principal diferencia entre desinfección y esterilización es que la desinfección no garantiza la eliminación de:",
		correcta: "Esporas bacterianas",
		incorrectas: [
			"Virus con envoltura",
			"Formas vegetativas bacterianas"
		]
	},
	{
		enunciado: "Los controles biológicos de esterilización en autoclave utilizan esporas de:",
		correcta: "Geobacillus stearothermophilus",
		incorrectas: [
			"Bacillus atrophaeus",
			"Clostridium perfringens"
		]
	},
	{
		enunciado: "¿Qué parámetro de presión y temperatura es estándar en un ciclo de autoclave para material textil?",
		correcta: "134°C a 2 atmósferas",
		incorrectas: [
			"121°C a 3 atmósferas",
			"160°C a 1 atmósfera"
		]
	},
	{
		enunciado: "El glutaraldehído activado al 2% requiere, para actuar como esterilizante en frío, un tiempo de inmersión de:",
		correcta: "10 horas",
		incorrectas: [
			"20 minutos",
			"2 horas"
		]
	},
	{
		enunciado: "La limpieza previa del material es imprescindible porque la materia orgánica:",
		correcta: "Puede proteger a los microorganismos del agente esterilizante",
		incorrectas: [
			"Altera el pH del agua destilada del autoclave",
			"Endurece el acero inoxidable del instrumental"
		]
	},
	{
		enunciado: "¿Cuál es el desinfectante de elección para superficies ambientales con sospecha de contaminación por sangre (ej. mesa de autopsias)?",
		correcta: "Hipoclorito sódico (Lejía)",
		incorrectas: [
			"Alcohol etílico de 70°",
			"Clorhexidina acuosa"
		]
	},
	{
		enunciado: "Un control químico externo (clase 1) en un paquete de esterilización sirve para:",
		correcta: "Diferenciar las unidades procesadas de las no procesadas",
		incorrectas: [
			"Garantizar que el interior del paquete está estéril",
			"Verificar la muerte de todos los microorganismos"
		]
	},
	{
		enunciado: "¿Qué método de esterilización química es el más utilizado para material termosensible en hospitales debido a su eficacia y seguridad?",
		correcta: "Plasma de peróxido de hidrógeno",
		incorrectas: [
			"Óxido de etileno",
			"Formaldehído gaseoso"
		]
	},
	{
		enunciado: "La desinfección de 'nivel intermedio' es capaz de eliminar:",
		correcta: "Mycobacterium tuberculosis, bacterias vegetativas y la mayoría de virus",
		incorrectas: [
			"Todas las esporas bacterianas existentes",
			"Únicamente bacterias gram positivas"
		]
	},
	{
		enunciado: "En la limpieza por ultrasonidos, el proceso de formación y explosión de burbujas se denomina:",
		correcta: "Cavitación",
		incorrectas: [
			"Floculación",
			"Ionización"
		]
	},
	{
		enunciado: "El calor seco actúa sobre los microorganismos provocando:",
		correcta: "Oxidación de las proteínas celulares",
		incorrectas: [
			"Coagulación de las proteínas citoplasmáticas",
			"Rotura mecánica de la pared celular"
		]
	},
	{
		enunciado: "¿Cuál es el principal inconveniente del uso de óxido de etileno?",
		correcta: "Su alta toxicidad, potencial carcinogénico y necesidad de aireación",
		incorrectas: [
			"Su incapacidad para penetrar en materiales porosos",
			"Que deteriora el corte de los instrumentos afilados"
		]
	},
	{
		enunciado: "Los controles físicos del autoclave incluyen el registro de:",
		correcta: "Presión, temperatura y tiempo",
		incorrectas: [
			"Cambio de color de las tiras reactivas",
			"Crecimiento de cultivos microbiológicos"
		]
	},
	{
		enunciado: "El test de Bowie-Dick se realiza para verificar:",
		correcta: "La correcta eliminación del aire y la penetración del vapor en la cámara",
		incorrectas: [
			"La concentración de gas en el ciclo de óxido de etileno",
			"La ausencia de pirógenos en el agua de alimentación"
		]
	},
	{
		enunciado: "Un antiséptico es un agente químico que se utiliza sobre:",
		correcta: "Tejidos vivos (piel y mucosas)",
		incorrectas: [
			"Superficies inertes y mobiliario",
			"Suelos y paredes de zonas críticas"
		]
	},
	{
		enunciado: "La 'caducidad' de un material estéril depende principalmente de:",
		correcta: "La integridad del envoltorio y las condiciones de almacenamiento",
		incorrectas: [
			"La fecha exacta en la que se fabricó el instrumento",
			"El número de veces que se ha abierto la puerta del almacén"
		]
	},
	{
		enunciado: "¿Qué tipo de detergente se recomienda para el lavado de instrumental quirúrgico?",
		correcta: "Detergente enzimático de pH neutro",
		incorrectas: [
			"Jabón potásico de alta espuma",
			"Soluciones ácidas desincrustantes"
		]
	},
	{
		enunciado: "La técnica de 'doble embolsado' se utiliza cuando:",
		correcta: "Se requiere presentar el material en un campo estéril de forma aséptica",
		incorrectas: [
			"El material es muy pesado y puede romper el papel",
			"No se dispone de indicadores químicos de clase 4"
		]
	},
	{
		enunciado: "En el ciclo de esterilización por calor seco, la temperatura estándar suele ser:",
		correcta: "160°C - 170°C durante 60-120 minutos",
		incorrectas: [
			"121°C durante 15 minutos",
			"100°C durante 10 horas"
		]
	},
	{
		enunciado: "Un desinfectante bacteriostático es aquel que:",
		correcta: "Inhibe el crecimiento bacteriano pero no necesariamente las mata",
		incorrectas: [
			"Elimina de forma fulminante todas las bacterias",
			"Solo es eficaz contra bacterias resistentes"
		]
	},
	{
		enunciado: "El embolsado de material para autoclave debe hacerse dejando:",
		correcta: "Un margen de seguridad y sin comprimir el contenido",
		incorrectas: [
			"El paquete lo más apretado posible para que no entre aire",
			"Un orificio de ventilación para que salga el vapor"
		]
	},
	{
		enunciado: "¿Qué componente químico es la base de los desinfectantes conocidos como 'Yodóforos'?",
		correcta: "Yodo",
		incorrectas: [
			"Cloro",
			"Amonio cuaternario"
		]
	},
	{
		enunciado: "La esterilización por radiación gamma se reserva habitualmente para:",
		correcta: "Procesos industriales de material de un solo uso (jeringas, suturas)",
		incorrectas: [
			"Reprocesamiento de bisturíes eléctricos en quirófano",
			"Desinfección de alto nivel de las camillas de necropsia"
		]
	},
	{
		enunciado: "En la central de esterilización, la zona 'limpia' es aquella donde se realiza:",
		correcta: "La revisión, montaje y empaquetado del material",
		incorrectas: [
			"La recepción y lavado manual del instrumental sucio",
			"La descarga de los autoclaves y almacenamiento estéril"
		]
	},
	{
		enunciado: "Los compuestos de amonio cuaternario se clasifican como desinfectantes de:",
		correcta: "Bajo nivel",
		incorrectas: [
			"Alto nivel",
			"Nivel intermedio"
		]
	},
	{
		enunciado: "Para la desinfección de material semicrítico sensible al calor (como un broncoscopio), se emplea:",
		correcta: "Desinfección de alto nivel (DAN)",
		incorrectas: [
			"Esterilización por vapor a baja presión",
			"Limpieza simple con agua y jabón"
		]
	},
	{
		enunciado: "El indicador biológico debe colocarse en el punto del autoclave donde:",
		correcta: "Sea más difícil que llegue el agente esterilizante",
		incorrectas: [
			"Esté más cerca de la resistencia eléctrica",
			"Sea más fácil de retirar por el operario"
		]
	},
	{
		enunciado: "La principal ventaja del calor húmedo sobre el calor seco es:",
		correcta: "Su mayor capacidad de penetración y menor tiempo de exposición",
		incorrectas: [
			"Que no oxida el instrumental de acero al carbono",
			"Que permite esterilizar aceites y polvos"
		]
	},
	{
		enunciado: "En caso de fallo de un control biológico, la medida inmediata es:",
		correcta: "Inmovilizar todo el material procesado desde el último control correcto",
		incorrectas: [
			"Repetir el control hasta que salga negativo",
			"Limpiar el exterior del autoclave con alcohol"
		]
	},
	{
		enunciado: "El secado del instrumental tras la limpieza es crítico para:",
		correcta: "Evitar la corrosión y el crecimiento de microorganismos en la humedad",
		incorrectas: [
			"Que el papel de esterilización no se pegue al metal",
			"Reducir el peso total de la caja de instrumental"
		]
	},
	{
		enunciado: "Los indicadores químicos de clase 4 (multiparámetro) reaccionan ante:",
		correcta: "Dos o más de los parámetros críticos del proceso de esterilización",
		incorrectas: [
			"Solo la presencia de vapor de agua",
			"Exclusivamente el aumento de la temperatura por encima de 100°C"
		]
	},
	{
		enunciado: "¿Cuál es la frecuencia recomendada para realizar el test de Bowie-Dick?",
		correcta: "Diaria, antes del primer ciclo de esterilización",
		incorrectas: [
			"Semanal, coincidiendo con el control biológico",
			"Solo cuando se realiza una reparación técnica"
		]
	},
	{
		enunciado: "El alcohol de 70° es más eficaz que el de 96° como desinfectante porque:",
		correcta: "El agua facilita la desnaturalización de las proteínas bacterianas",
		incorrectas: [
			"Es menos inflamable y más seguro para el operario",
			"Tarda menos tiempo en evaporarse de la superficie"
		]
	},
	{
		enunciado: "En la desinfección por inmersión, es fundamental que el material esté:",
		correcta: "Totalmente sumergido y con los lúmenes llenos de solución",
		incorrectas: [
			"Solo parcialmente mojado para que pueda respirar",
			"Envuelto en gasas impregnadas en el desinfectante"
		]
	},
	{
		enunciado: "La fenolización es un proceso de desinfección que utiliza derivados del:",
		correcta: "Fenol",
		incorrectas: [
			"Ácido peracético",
			"Aldehído"
		]
	},
	{
		enunciado: "¿Qué gas se utiliza en la esterilización por calor húmedo?",
		correcta: "Vapor de agua saturado",
		incorrectas: [
			"Aire comprimido",
			"Nitrógeno gaseoso"
		]
	},
	{
		enunciado: "El lavado de manos quirúrgico busca eliminar la flora transitoria y:",
		correcta: "Reducir la flora residente",
		incorrectas: [
			"Eliminar por completo la flora residente de forma permanente",
			"Sustituir el uso de guantes estériles"
		]
	},
	{
		enunciado: "Un material estéril que cae al suelo o se moja se considera:",
		correcta: "Contaminado, independientemente de que no se haya abierto",
		incorrectas: [
			"Válido si el envoltorio plástico parece seco por fuera",
			"Apto para su uso si se limpia con alcohol inmediatamente"
		]
	}
];