'use strict';

var PREGUNTAS = [
	{
		enunciado: "¿Qué concepto define el patrón único de pensamientos, sentimientos y conductas que persiste a lo largo del tiempo y las situaciones?",
		correcta: "Personalidad",
		incorrectas: [
			"Temperamento reactivo",
			"Rasgo situacional"
		]
	},
	{
		enunciado: "Según la teoría psicosexual de Freud, la etapa que coincide con el inicio de la escolarización y se caracteriza por la calma sexual es:",
		correcta: "Periodo de latencia",
		incorrectas: [
			"Etapa fálica",
			"Etapa genital"
		]
	},
	{
		enunciado: "En la psicología evolutiva de Jean Piaget, la 'acomodación' se refiere al proceso de:",
		correcta: "Modificar los esquemas existentes para integrar nueva información",
		incorrectas: [
			"Incorporar nueva información a los esquemas mentales previos sin alterarlos",
			"Alcanzar un estado de equilibrio estático ante estímulos sensoriales"
		]
	},
	{
		enunciado: "La crisis de 'Generatividad frente a Estancamiento' de Erikson ocurre típicamente durante:",
		correcta: "La adultez media",
		incorrectas: [
			"La adolescencia temprana",
			"La senectud"
		]
	},
	{
		enunciado: "¿Qué autor introdujo el concepto de 'Zona de Desarrollo Próximo' (ZDP) en la psicología evolutiva?",
		correcta: "Lev Vygotsky",
		incorrectas: [
			"Jerome Bruner",
			"B.F. Skinner"
		]
	},
	{
		enunciado: "El temperamento, como componente de la personalidad, se distingue del carácter por:",
		correcta: "Su base biológica, constitucional e innata",
		incorrectas: [
			"Ser el resultado exclusivo del aprendizaje social y cultural",
			"Su variabilidad extrema según el contexto ambiental"
		]
	},
	{
		enunciado: "Según Mary Ainsworth, el 'apego ambivalente-resistente' se manifiesta en el niño por:",
		correcta: "Angustia ante la separación y mezcla de proximidad y rechazo en el reencuentro",
		incorrectas: [
			"Indiferencia ante la marcha del cuidador y evitación del contacto al volver",
			"Exploración activa del entorno ignorando la presencia de la figura de apego"
		]
	},
	{
		enunciado: "En el modelo de los 'Cinco Grandes' (Big Five), el factor 'Neuroticismo' evalúa:",
		correcta: "La inestabilidad emocional y la tendencia a experimentar sentimientos negativos",
		incorrectas: [
			"El grado de apertura hacia nuevas experiencias intelectuales",
			"La capacidad de organización y la orientación hacia el logro"
		]
	},
	{
		enunciado: "¿Qué caracteriza al pensamiento adolescente según el estadio de las operaciones formales?",
		correcta: "La capacidad de razonamiento hipotético-deductivo y abstracto",
		incorrectas: [
			"La dependencia de la manipulación de objetos físicos para resolver problemas",
			"La prevalencia del egocentrismo sensoriomotor inicial"
		]
	},
	{
		enunciado: "El concepto de 'fábula personal' en la adolescencia implica la creencia de que:",
		correcta: "Sus vivencias son únicas, especiales y están exentas de riesgos comunes",
		incorrectas: [
			"Sus padres son figuras heroicas con poderes ilimitados",
			"Todo el mundo observa y critica cada uno de sus movimientos"
		]
	},
	{
		enunciado: "En la teoría del desarrollo moral de Kohlberg, el nivel 'postconvencional' se basa en:",
		correcta: "Principios éticos universales que pueden estar por encima de la ley",
		incorrectas: [
			"La obediencia para evitar el castigo físico inmediato",
			"El cumplimiento de las normas para mantener el orden social establecido"
		]
	},
	{
		enunciado: "¿Cuál es la principal característica del desarrollo cognitivo en la vejez según el modelo de inteligencia cristalizada?",
		correcta: "Se mantiene o aumenta gracias a la acumulación de experiencia y conocimientos",
		incorrectas: [
			"Sufre un declive agudo e irreversible a partir de los sesenta años",
			"Depende exclusivamente de la velocidad de procesamiento neurológico"
		]
	},
	{
		enunciado: "La 'atención conjunta', hito relevante en el desarrollo infantil temprano, consiste en:",
		correcta: "Compartir el foco de atención con otra persona hacia un objeto común",
		incorrectas: [
			"La capacidad de realizar dos tareas motoras al mismo tiempo",
			"El reflejo de prensión ante estímulos táctiles en la palma de la mano"
		]
	},
	{
		enunciado: "Según Carl Rogers, la 'congruencia' en la personalidad es la correspondencia entre:",
		correcta: "El yo real y el yo ideal",
		incorrectas: [
			"El temperamento biológico y el entorno social",
			"La conducta manifiesta y la normativa legal vigente"
		]
	},
	{
		enunciado: "El experimento del 'muñeco Bobo' de Bandura demostró que la personalidad se ve influida por:",
		correcta: "El aprendizaje observacional y el modelado de conductas agresivas",
		incorrectas: [
			"El refuerzo positivo mediante recompensas materiales directas",
			"La maduración biológica del sistema nervioso central"
		]
	},
	{
		enunciado: "En la teoría de Piaget, el 'centramiento' es una limitación del pensamiento:",
		correcta: "Preoperacional",
		incorrectas: [
			"Sensoriomotor",
			"Operacional concreto"
		]
	},
	{
		enunciado: "¿Qué autor propone la teoría de las 'Metas de Vida' y la compensación de la inferioridad en el desarrollo?",
		correcta: "Alfred Adler",
		incorrectas: [
			"Carl Jung",
			"Abraham Maslow"
		]
	},
	{
		enunciado: "La 'permanencia del objeto' se adquiere plenamente, según la psicología evolutiva clásica, al final de:",
		correcta: "El estadio sensoriomotor",
		incorrectas: [
			"La etapa de las operaciones concretas",
			"El periodo de latencia freudiano"
		]
	},
	{
		enunciado: "En el desarrollo de la identidad de James Marcia, la 'moratoria' se define como:",
		correcta: "Estar en plena crisis de identidad buscando opciones sin haber decidido aún",
		incorrectas: [
			"Haber adoptado compromisos sin haber pasado por un proceso de exploración",
			"La ausencia de compromiso y de interés por explorar opciones de futuro"
		]
	},
	{
		enunciado: "El enfoque del 'ciclo vital' (Life-span) sostiene que el desarrollo de la personalidad es:",
		correcta: "Un proceso multidimensional y multidireccional que dura toda la vida",
		incorrectas: [
			"Un fenómeno que finaliza al alcanzar la madurez biológica en la juventud",
			"Un proceso lineal determinado únicamente por factores genéticos hereditarios"
		]
	},
	{
		enunciado: "¿Qué término describe la capacidad de entender que los demás tienen estados mentales diferentes a los propios?",
		correcta: "Teoría de la Mente",
		incorrectas: [
			"Egocentrismo cognitivo",
			"Inteligencia emocional intrapersonal"
		]
	},
	{
		enunciado: "En la infancia media, el autoconcepto tiende a volverse:",
		correcta: "Más abstracto, comparativo y basado en rasgos internos",
		incorrectas: [
			"Exclusivamente físico y basado en posesiones materiales",
			"Inmutable y ajeno a la retroalimentación de los pares"
		]
	},
	{
		enunciado: "La teoría de los rasgos de Allport distingue entre disposiciones cardinales, centrales y:",
		correcta: "Secundarias",
		incorrectas: [
			"Terciarias",
			"Situacionales"
		]
	},
	{
		enunciado: "El concepto de 'resiliencia' en el desarrollo evolutivo se refiere a:",
		correcta: "La capacidad de adaptación positiva frente a situaciones de adversidad",
		incorrectas: [
			"La rigidez del carácter ante los cambios del entorno social",
			"La predisposición genética a padecer trastornos de la personalidad"
		]
	},
	{
		enunciado: "Según la perspectiva de los sistemas ecológicos de Bronfenbrenner, el 'mesosistema' comprende:",
		correcta: "Las interrelaciones entre los entornos inmediatos como familia y escuela",
		incorrectas: [
			"El entorno más global que incluye la cultura y los valores sociales",
			"El escenario físico donde el individuo pasa la mayor parte del tiempo"
		]
	},
	{
		enunciado: "El declive de la memoria episódica frente a la semántica es característico de:",
		correcta: "El envejecimiento cognitivo normal",
		incorrectas: [
			"La etapa del joven adulto",
			"El inicio de la escolarización primaria"
		]
	},
	{
		enunciado: "En la teoría de la personalidad de Eysenck, la dimensión 'Psicoticismo' se asocia con:",
		correcta: "Crueldad, falta de empatía y agresividad",
		incorrectas: [
			"Sociabilidad, optimismo y búsqueda de sensaciones",
			"Ansiedad, depresión y sentimientos de culpa"
		]
	},
	{
		enunciado: "La 'animación' o animismo infantil es la tendencia a:",
		correcta: "Atribuir vida e intencionalidad a objetos inanimados",
		incorrectas: [
			"Imitar los movimientos de los animales del entorno",
			"Dibujar figuras humanas con rasgos exagerados"
		]
	},
	{
		enunciado: "¿A qué edad se sitúa aproximadamente la crisis de 'Autonomía frente a Vergüenza y Duda'?",
		correcta: "De 1 a 3 años",
		incorrectas: [
			"De 6 a 12 años",
			"Desde el nacimiento hasta el primer año"
		]
	},
	{
		enunciado: "El fenómeno de la 'revisión de vida' en la vejez contribuye, según Erikson, a alcanzar:",
		correcta: "La integridad del yo",
		incorrectas: [
			"La identidad de rol",
			"La autonomía funcional"
		]
	},
	{
		enunciado: "En psicología evolutiva, el periodo 'crítico' se diferencia del 'sensible' en que:",
		correcta: "El crítico es una ventana temporal rígida para ciertos desarrollos",
		incorrectas: [
			"El sensible no permite la recuperación de funciones tras el periodo",
			"El crítico solo afecta al desarrollo del lenguaje verbal"
		]
	},
	{
		enunciado: "La teoría del 'Andamiaje' de Bruner es una aplicación pedagógica del pensamiento de:",
		correcta: "Vygotsky",
		incorrectas: [
			"Piaget",
			"Ausubel"
		]
	},
	{
		enunciado: "El 'Yo' en la estructura de la personalidad de Freud opera bajo el principio de:",
		correcta: "Realidad",
		incorrectas: [
			"Placer",
			"Deber moral"
		]
	},
	{
		enunciado: "La etapa de las 'Operaciones Concretas' se caracteriza por la adquisición de:",
		correcta: "La reversibilidad y la seriación",
		incorrectas: [
			"La función simbólica inicial",
			"El pensamiento científico abstracto"
		]
	},
	{
		enunciado: "Según la teoría del apego, los 'modelos internos de trabajo' son:",
		correcta: "Representaciones mentales sobre uno mismo y las relaciones con los demás",
		incorrectas: [
			"Protocolos de actuación profesional en unidades de neonatología",
			"Esquemas de búsqueda de alimento en el recién nacido"
		]
	},
	{
		enunciado: "La 'crisis de la mitad de la vida' (Levinson) se asocia con:",
		correcta: "La reevaluación de los logros y metas alcanzadas hasta el momento",
		incorrectas: [
			"La pérdida de la identidad personal por la jubilación",
			"El inicio de la formación de la identidad sexual"
		]
	},
	{
		enunciado: "El estilo de crianza 'democrático' o autoritativo produce hijos con:",
		correcta: "Alta autoestima, autocontrol y competencia social",
		incorrectas: [
			"Baja autonomía y dificultades en la toma de decisiones",
			"Conductas agresivas y falta de respeto a las normas"
		]
	},
	{
		enunciado: "La 'estabilidad de los rasgos' de personalidad tiende a aumentar con:",
		correcta: "La edad cronológica y la madurez",
		incorrectas: [
			"El consumo de fármacos ansiolíticos",
			"El cambio frecuente de entorno residencial"
		]
	},
	{
		enunciado: "En la teoría cognitiva, los 'scripts' o guiones son:",
		correcta: "Estructuras de conocimiento sobre secuencias de eventos comunes",
		incorrectas: [
			"Instrucciones genéticas para el desarrollo de la personalidad",
			"Cuestionarios de evaluación psicométrica de la inteligencia"
		]
	},
	{
		enunciado: "¿Qué autor propuso que el desarrollo de la personalidad está marcado por la 'jerarquía de necesidades'?",
		correcta: "Abraham Maslow",
		incorrectas: [
			"Raymond Cattell",
			"Julian Rotter"
		]
	}
];