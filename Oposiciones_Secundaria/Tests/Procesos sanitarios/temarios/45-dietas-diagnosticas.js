'use strict';

var PREGUNTAS = [
	{
		enunciado: "La dieta de cuantificación de grasas (Test de Van de Kamer) requiere una ingesta fija de:",
		correcta: "100 g de grasa diarios durante 3-5 días",
		incorrectas: [
			"0 g de grasa (ayuno lipídico)",
			"500 g de grasa para saturar el hígado",
			"20 g de grasa para estimular la vesícula"
		]
	},
	{
		enunciado: "Antes de una prueba de sangre oculta en heces (método químico/guayaco), se recomienda evitar:",
		correcta: "Carnes rojas, embutidos y vegetales con actividad peroxidasa",
		incorrectas: [
			"Lácteos desnatados y huevos",
			"Agua mineral con gas",
			"Arroz blanco y pasta"
		]
	},
	{
		enunciado: "La dieta para el estudio de catecolaminas y ácido vanilmandélico en orina debe excluir:",
		correcta: "Plátanos, vainilla, chocolate, café y cítricos",
		incorrectas: [
			"Pan blanco, arroz y cereales",
			"Carnes blancas y huevos",
			"Pescado azul y legumbres"
		]
	},
	{
		enunciado: "La dieta de exclusión de gluten se utiliza como prueba diagnóstica si:",
		correcta: "Se observa mejoría clínica tras la retirada y recidiva tras la reintroducción",
		incorrectas: [
			"El paciente presenta únicamente estreñimiento funcional",
			"Se sospecha de una infección bacteriana aguda",
			"Se desea bajar de peso de forma rápida"
		]
	},
	{
		enunciado: "En la preparación para una colonoscopia, la dieta debe ser:",
		correcta: "Líquida clara y sin residuos (fibra) 24 horas antes",
		incorrectas: [
			"Rica en fibra para limpiar el colon",
			"Alta en grasas para lubricar las paredes",
			"Basada en legumbres y hortalizas crudas"
		]
	},
	{
		enunciado: "La dieta para la prueba de la D-Xilosa busca:",
		correcta: "Evaluar la integridad funcional de la mucosa del intestino delgado proximal",
		incorrectas: [
			"Medir la velocidad de filtración glomerular",
			"Detectar la presencia de Helicobacter pylori",
			"Evaluar la función biliar"
		]
	},
	{
		enunciado: "En el diagnóstico de alergias alimentarias, la 'dieta de eliminación' consiste en:",
		correcta: "Retirar los alimentos sospechosos y reintroducirlos de forma controlada",
		incorrectas: [
			"Comer solo alimentos crudos durante un mes",
			"Eliminar todos los carbohidratos de la dieta",
			"Aumentar la ingesta de leche de vaca"
		]
	},
	{
		enunciado: "Para la prueba de sobrecarga oral de glucosa (SOG), el paciente debe:",
		correcta: "Ingerir al menos 150g de HC los tres días previos y estar en ayunas",
		incorrectas: [
			"Hacer una dieta cetogénica la semana anterior",
			"Realizar ejercicio intenso justo antes de la toma",
			"Ayunar durante 48 horas seguidas"
		]
	},
	{
		enunciado: "La dieta baja en serotonina (estudio de ácido 5-hidroxindolacético) prohíbe:",
		correcta: "Nueces, piña, ciruelas, aguacates y tomates",
		incorrectas: [
			"Pescado blanco y leche desnatada",
			"Aceite de oliva y sal",
			"Carne de pollo y pavo"
		]
	},
	{
		enunciado: "La dieta para el test de aliento con urea marcada (H. pylori) requiere:",
		correcta: "Ayuno previo y no haber tomado antibióticos o IBP semanas antes",
		incorrectas: [
			"Ingesta previa de una solución rica en grasas saturadas",
			"Consumo de legumbres para aumentar el nitrógeno",
			"No requiere ninguna preparación especial"
		]
	},
	{
		enunciado: "La dieta para el estudio de oxaluria (ácido oxálico en orina) debe limitar:",
		correcta: "Espinacas, acelgas, remolacha, cacao y té",
		incorrectas: [
			"Carnes rojas y pescados",
			"Lácteos y derivados",
			"Manzanas y peras"
		]
	},
	{
		enunciado: "En el test de hidrógeno espirado para intolerancia a la lactosa, el paciente:",
		correcta: "Debe estar en ayunas y no haber fumado horas antes",
		incorrectas: [
			"Debe haber tomado antibióticos el día anterior",
			"Debe realizar una dieta rica en fibra soluble",
			"Debe ingerir una comida copiosa antes de la prueba"
		]
	},
	{
		enunciado: "La dieta previa al test de Schumm (hemopexina) evita:",
		correcta: "Alimentos ricos en hierro hemínico",
		incorrectas: [
			"Vegetales de hoja verde",
			"Frutos secos",
			"Cereales integrales"
		]
	},
	{
		enunciado: "Para la detección de quilo en orina (quiluria), se utiliza una dieta:",
		correcta: "Rica en grasas seguida de observación del aspecto de la orina",
		incorrectas: [
			"Absolutamente exenta de lípidos",
			"Hiperproteica",
			"Sin carbohidratos"
		]
	},
	{
		enunciado: "La dieta de Schmidt (dieta de prueba de residuos) se utilizaba para:",
		correcta: "Valorar la capacidad de digestión de carbohidratos, proteínas y grasas",
		incorrectas: [
			"El diagnóstico de la enfermedad de Crohn",
			"El tratamiento de la insuficiencia renal",
			"La detección de parásitos"
		]
	},
	{
		enunciado: "En un test de provocación oral para aditivos, el orden de administración suele ser:",
		correcta: "Simple o doble ciego controlado con placebo",
		incorrectas: [
			"Todos los aditivos juntos en la primera toma",
			"Abierto y sin control de dosis",
			"Solo en pacientes anestesiados"
		]
	},
	{
		enunciado: "La prueba de la secretina-CCK para función pancreática requiere:",
		correcta: "Ayuno y sondaje duodenal para recoger secreciones",
		incorrectas: [
			"Ingesta de 2 litros de leche",
			"Recogida de orina de 24 horas",
			"No requiere ayuno"
		]
	},
	{
		enunciado: "La dieta para el estudio de la porfiria busca:",
		correcta: "Mantener un aporte suficiente de carbohidratos para evitar crisis",
		incorrectas: [
			"La eliminación total del azúcar",
			"El consumo masivo de carnes rojas",
			"La restricción de líquidos"
		]
	},
	{
		enunciado: "En el test de sobrecarga de hierro (sideremia post-ingesta), se administra:",
		correcta: "Sulfato ferroso por vía oral en ayunas",
		incorrectas: [
			"Hierro intravenoso",
			"Una dieta rica en espinacas",
			"Vitamina B12 intramuscular"
		]
	},
	{
		enunciado: "La restricción de purinas en dieta se usa para diagnosticar o monitorizar:",
		correcta: "Hiperuricemia y gota",
		incorrectas: [
			"Diabetes insípida",
			"Hipotiroidismo",
			"Celiaquía"
		]
	},
	{
		enunciado: "La prueba de restricción hídrica (test de Miller) se usa para el diagnóstico de:",
		correcta: "Diabetes insípida",
		incorrectas: [
			"Insuficiencia cardíaca",
			"Cirrosis hepática",
			"Síndrome nefrótico"
		]
	},
	{
		enunciado: "En la dieta de diagnóstico para mastocitosis se controlan:",
		correcta: "Los niveles de histamina en los alimentos",
		incorrectas: [
			"Los niveles de glucosa",
			"El contenido en purinas",
			"La cantidad de vitamina K"
		]
	},
	{
		enunciado: "Para un estudio de calcio en orina (calciuria de 24h), se recomienda:",
		correcta: "Una ingesta controlada de calcio los días previos",
		incorrectas: [
			"Evitar el consumo de agua",
			"Tomar suplementos de vitamina D",
			"Realizar ejercicio extenuante"
		]
	},
	{
		enunciado: "La dieta para el test de aclaramiento de creatinina requiere:",
		correcta: "Evitar el consumo excesivo de carne el día previo",
		incorrectas: [
			"Un ayuno de 48 horas",
			"Beber 5 litros de agua",
			"Eliminar las frutas"
		]
	},
	{
		enunciado: "La prueba de Lundh para insuficiencia pancreática utiliza:",
		correcta: "Una comida de prueba estándar para estimular la secreción",
		incorrectas: [
			"Inyección de insulina",
			"Administración de bario",
			"Ayuno estricto"
		]
	},
	{
		enunciado: "En la dieta para el diagnóstico de la fenilcetonuria se monitoriza:",
		correcta: "La ingesta de fenilalanina",
		incorrectas: [
			"La ingesta de lípidos",
			"El consumo de vitamina C",
			"La sal"
		]
	},
	{
		enunciado: "El test de tolerancia a la fructosa se indica ante la sospecha de:",
		correcta: "Malabsorción de fructosa o intolerancia hereditaria",
		incorrectas: [
			"Diabetes tipo 1",
			"Insuficiencia renal",
			"Gastritis por H. pylori"
		]
	},
	{
		enunciado: "Para el estudio de esteatorrea en niños, la ingesta de grasa:",
		correcta: "Se ajusta según la edad y peso del niño",
		incorrectas: [
			"Es siempre de 100 g independientemente del peso",
			"Se suprime totalmente",
			"Se sustituye por MCT"
		]
	},
	{
		enunciado: "La dieta exenta de cobre se utiliza en el diagnóstico/manejo de:",
		correcta: "Enfermedad de Wilson",
		incorrectas: [
			"Hemocromatosis",
			"Beriberi",
			"Pelagra"
		]
	},
	{
		enunciado: "El test de carga de xilitol sirve para valorar:",
		correcta: "La función metabólica hepática",
		incorrectas: [
			"La caries dental",
			"La visión nocturna",
			"La capacidad pulmonar"
		]
	},
	{
		enunciado: "La prueba de indigocarmín requiere evitar alimentos que:",
		correcta: "Tiñan la orina (remolacha, colorantes)",
		incorrectas: [
			"Contengan mucho sodio",
			"Sean ricos en proteínas",
			"Contengan cafeína"
		]
	},
	{
		enunciado: "En el test de tolerancia al sorbitol se mide:",
		correcta: "El hidrógeno en aire espirado",
		incorrectas: [
			"La glucosa en sangre",
			"La urea en orina",
			"El pH de la saliva"
		]
	},
	{
		enunciado: "La dieta para la prueba de captación de yodo radiactivo debe ser:",
		correcta: "Baja en yodo (evitar sal yodada, pescados, mariscos)",
		incorrectas: [
			"Rica en algas marinas",
			"Exenta de carbohidratos",
			"Alta en lácteos"
		]
	},
	{
		enunciado: "La prueba de provocación con sulfitos se realiza ante sospecha de:",
		correcta: "Asma o sensibilidad a conservantes",
		incorrectas: [
			"Diabetes gestacional",
			"Úlcera péptica",
			"Hipertensión"
		]
	},
	{
		enunciado: "En la dieta de diagnóstico para la galactosemia se elimina:",
		correcta: "La lactosa y la galactosa (lácteos)",
		incorrectas: [
			"El gluten",
			"La fructosa",
			"Las purinas"
		]
	},
	{
		enunciado: "La dieta para el estudio de la cistinuria se basa en:",
		correcta: "Control de metionina y aumento de la hidratación",
		incorrectas: [
			"Aumento del consumo de carnes",
			"Restricción de agua",
			"Eliminación de las grasas"
		]
	},
	{
		enunciado: "En la preparación para una ecografía abdominal, se indica:",
		correcta: "Ayuno y dieta que no produzca gases (meteorismo)",
		incorrectas: [
			"Ingesta de 3 litros de leche",
			"Comer abundantes legumbres",
			"No requiere ninguna dieta"
		]
	},
	{
		enunciado: "La dieta de 'hambre de hueso' tras paratiroidectomía requiere:",
		correcta: "Aporte elevado de calcio y vitamina D",
		incorrectas: [
			"Restricción de fósforo y calcio",
			"Dieta hipoproteica",
			"Ayuno total"
		]
	},
	{
		enunciado: "En el diagnóstico de la insuficiencia suprarrenal (Test de ACTH), la dieta:",
		correcta: "Suele ser normal pero se controla el aporte de sodio",
		incorrectas: [
			"Debe ser hipocalórica",
			"Debe ser rica en potasio",
			"No influye en absoluto"
		]
	},
	{
		enunciado: "La dieta previa a la recogida de sangre para perfil lipídico requiere:",
		correcta: "Ayuno de 10 a 12 horas",
		incorrectas: [
			"Ayuno de 2 horas",
			"Haber cenado una comida rica en grasas",
			"No requiere ayuno"
		]
	}
];