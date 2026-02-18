// temarios/10-interpretacion-global-de-los-fenomenos-geologicos-en-el-marco-de-la-teoria-de-la-tectonica-de-placas.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué aporta la teoría de la tectónica de placas a la geología moderna?",
    correcta: "Un marco unificador para explicar sismos, volcanismo, metamorfismo y relieve",
    incorrectas: [
      "Un catálogo de minerales sin relación con procesos",
      "Un método exclusivo para fechar fósiles"
    ]
  },
  {
    enunciado: "¿Qué es una placa litosférica?",
    correcta: "Un bloque rígido de litosfera que se mueve sobre la astenosfera",
    incorrectas: [
      "Una capa dúctil del manto superior",
      "Una zona de metamorfismo regional"
    ]
  },
  {
    enunciado: "¿Cuál es la principal fuerza que arrastra a las placas hacia las zonas de subducción?",
    correcta: "La tracción de la losa (slab pull)",
    incorrectas: [
      "La presión del viento en superficie",
      "La rotación diferencial del núcleo"
    ]
  },
  {
    enunciado: "¿Qué límite de placa crea corteza oceánica nueva?",
    correcta: "El límite divergente (dorsal oceánica o rift)",
    incorrectas: [
      "El límite convergente",
      "El límite transformante"
    ]
  },
  {
    enunciado: "¿Qué proceso domina en un límite convergente oceánico-continental?",
    correcta: "Subducción de litosfera oceánica bajo la continental",
    incorrectas: [
      "Separación de placas y creación de corteza",
      "Desplazamiento lateral sin pérdida de litosfera"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a un límite transformante?",
    correcta: "Movimiento lateral de placas a lo largo de fallas",
    incorrectas: [
      "Apertura de océanos por extensión",
      "Colisión frontal de continentes"
    ]
  },
  {
    enunciado: "¿Qué describe el ciclo de Wilson?",
    correcta: "La apertura y cierre de océanos y la formación de orógenos",
    incorrectas: [
      "La alternancia de eras glaciales",
      "El ciclo diario de mareas"
    ]
  },
  {
    enunciado: "¿Qué evidencias respaldan la expansión del fondo oceánico?",
    correcta: "Franjas magnéticas simétricas respecto a las dorsales",
    incorrectas: [
      "Isótopos radiogénicos en granitos continentales",
      "Altos valores de gravedad en montañas"
    ]
  },
  {
    enunciado: "¿Qué registro sísmico define un plano de Wadati-Benioff?",
    correcta: "Sismicidad desde somera a profunda en zonas de subducción",
    incorrectas: [
      "Sismicidad solo superficial en dorsales",
      "Ausencia total de sismos en transformantes"
    ]
  },
  {
    enunciado: "¿Qué tipo de magmatismo se asocia a las dorsales oceánicas?",
    correcta: "Fusión por descompresión que genera MORB",
    incorrectas: [
      "Fusión por fluidos rica en agua (arcos)",
      "Fusión por impacto meteórico"
    ]
  },
  {
    enunciado: "¿Qué genera el magmatismo de arco en subducción?",
    correcta: "La deshidratación de la losa que reduce el punto de fusión del manto",
    incorrectas: [
      "El choque elástico de placas en transformantes",
      "La intrusión de magma núcleo-manto"
    ]
  },
  {
    enunciado: "¿Qué explica el vulcanismo intraplaca de Hawai o Canarias?",
    correcta: "El paso de la placa sobre un punto caliente",
    incorrectas: [
      "La colisión continental activa",
      "La apertura de una dorsal cercana"
    ]
  },
  {
    enunciado: "¿Qué indica la geodesia GPS en tectónica de placas?",
    correcta: "Velocidades y direcciones del movimiento relativo de placas",
    incorrectas: [
      "Edad radiométrica de rocas",
      "Composición química de magmas"
    ]
  },
  {
    enunciado: "¿Qué rasgo estructural se espera en convergencia continental-continental?",
    correcta: "Engrosamiento cortical con pliegues y cabalgamientos",
    incorrectas: [
      "Creación de corteza oceánica axial",
      "Cizalla pura sin relieve"
    ]
  },
  {
    enunciado: "¿Qué es una ofiolita en el registro orogénico?",
    correcta: "Un fragmento de litosfera oceánica obducido sobre continente",
    incorrectas: [
      "Un granito anorogénico intraplaca",
      "Un paquete de turbiditas de cuenca abisal"
    ]
  },
  {
    enunciado: "¿Qué tipo de cuenca se desarrolla frente a cinturones de pliegues y cabalgamientos?",
    correcta: "Cuenca de antepaís (foreland)",
    incorrectas: [
      "Cuenca de rift intracontinental",
      "Cuenca transformante pura"
    ]
  },
  {
    enunciado: "¿Qué controla la subsidencia en márgenes pasivos tras la ruptura continental?",
    correcta: "El enfriamiento y densificación térmica de la litosfera",
    incorrectas: [
      "La compresión por colisión inmediata",
      "El calentamiento por subducción cercana"
    ]
  },
  {
    enunciado: "¿Qué patrón de sismicidad domina en dorsales?",
    correcta: "Sismos someros asociados a extensión",
    incorrectas: [
      "Sismos profundos alineados en plano inclinado",
      "Ausencia total de sismicidad"
    ]
  },
  {
    enunciado: "¿Qué relación hay entre edad de corteza oceánica y distancia a la dorsal?",
    correcta: "La corteza aumenta de edad al alejarse de la dorsal",
    incorrectas: [
      "Es más joven junto a las fosas",
      "No existe relación sistemática"
    ]
  },
  {
    enunciado: "¿Qué parámetro determina el metamorfismo de alta presión en subducción?",
    correcta: "Enterramiento rápido y bajo gradiente térmico",
    incorrectas: [
      "Alto gradiente térmico de arco",
      "Fricción atmosférica en superficie"
    ]
  },
  {
    enunciado: "¿Qué técnica revela losas frías en profundidad bajo fosas?",
    correcta: "Tomografía sísmica con velocidades altas",
    incorrectas: [
      "Microscopía óptica de lámina delgada",
      "Gravimetría marina de detalle"
    ]
  },
  {
    enunciado: "¿Cuál es un ejemplo de límite convergente oceánico-continental activo?",
    correcta: "Los Andes",
    incorrectas: [
      "La Dorsal Mesoatlántica",
      "La Falla de San Andrés"
    ]
  },
  {
    enunciado: "¿Cuál es un ejemplo de colisión continental reciente?",
    correcta: "Himalaya-Tíbet",
    incorrectas: [
      "Islas Canarias",
      "Trinchera de Tonga"
    ]
  },
  {
    enunciado: "¿Qué ejemplo ilustra un límite transformante continental?",
    correcta: "La Falla de San Andrés",
    incorrectas: [
      "La Dorsal Índico-Austral",
      "La fosa Perú-Chile"
    ]
  },
  {
    enunciado: "¿Qué sistema representa un límite divergente activo en continente?",
    correcta: "El Rift de África Oriental",
    incorrectas: [
      "El Arco de las Antillas",
      "El margen pasivo brasileño"
    ]
  },
  {
    enunciado: "¿Qué condiciona la distribución global de volcanes y sismos?",
    correcta: "La localización de límites de placa y plumas",
    incorrectas: [
      "La distribución de glaciares cuaternarios",
      "El patrón de vientos alisios"
    ]
  },
  {
    enunciado: "¿Qué genera un tsunami tectónico con mayor probabilidad?",
    correcta: "Un gran sismo de subducción con desplazamiento del fondo marino",
    incorrectas: [
      "Un sismo somero en dorsal sin cambio de relieve",
      "Una falla transformante en tierra sin inmersión"
    ]
  },
  {
    enunciado: "¿Qué concepto explica el rebote postglaciar y el levantamiento cortical?",
    correcta: "Isostasia",
    incorrectas: [
      "Erosión diferencial",
      "Convección atmosférica"
    ]
  },
  {
    enunciado: "¿Qué define una triple unión de placas?",
    correcta: "El punto donde confluyen tres límites de placa",
    incorrectas: [
      "La intersección de tres fallas menores sin actividad",
      "El centro de un arco insular"
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre MORB y OIB?",
    correcta: "MORB se genera en dorsales; OIB en puntos calientes intraplaca",
    incorrectas: [
      "Ambos se forman solo en colisiones",
      "MORB se asocia a subducción"
    ]
  },
  {
    enunciado: "¿Qué variable reológica controla el estilo de deformación cortical?",
    correcta: "La temperatura y el contenido en agua de las rocas",
    incorrectas: [
      "La presión atmosférica local",
      "La salinidad del océano"
    ]
  },
  {
    enunciado: "¿Qué herramienta mide deformación co- y post-sísmica desde satélite?",
    correcta: "InSAR (interferometría radar)",
    incorrectas: [
      "Espectrometría Raman",
      "Difracción de rayos X en laboratorio"
    ]
  },
  {
    enunciado: "¿Qué relación existe entre orogenia y erosión en la topografía final?",
    correcta: "El equilibrio entre engrosamiento y denudación controla alturas",
    incorrectas: [
      "La erosión siempre eleva el relieve",
      "El engrosamiento siempre reduce la altura"
    ]
  },
  {
    enunciado: "¿Qué tipo de margen favorece grandes acumulaciones de hidrocarburos?",
    correcta: "Márgenes pasivos con cuencas sedimentarias profundas",
    incorrectas: [
      "Dorsales oceánicas activas",
      "Fosas de subducción muy estrechas"
    ]
  },
  {
    enunciado: "¿Qué metalogénesis se asocia a arcos magmáticos de subducción?",
    correcta: "Depósitos pórfidos Cu-Mo-(Au)",
    incorrectas: [
      "Nódulos polimetálicos de abisal",
      "Kimberlitas diamantíferas"
    ]
  },
  {
    enunciado: "¿Qué indica una alineación de islas volcánicas con edades crecientes?",
    correcta: "El desplazamiento de la placa sobre un hotspot fijo relativo",
    incorrectas: [
      "Una dorsal migratoria con inversión del campo",
      "Un frente de colisión continental"
    ]
  },
  {
    enunciado: "¿Qué fenómeno tectónico explica la formación de altiplanos como el Tibet?",
    correcta: "El engrosamiento y flujo de la corteza por colisión",
    incorrectas: [
      "La intrusión masiva de gabros oceánicos",
      "La erosión eólica aislada"
    ]
  },
  {
    enunciado: "¿Qué método confirma el movimiento relativo entre África y Sudamérica?",
    correcta: "Paleomagnetismo y franjas magnéticas en el Atlántico",
    incorrectas: [
      "Isótopos de plomo en granitos variscos",
      "Conteo de microfósiles de lagos andinos"
    ]
  },
  {
    enunciado: "¿Qué síntesis resume la interpretación global en tectónica de placas?",
    correcta: "La dinámica de placas explica la distribución de procesos y recursos terrestres",
    incorrectas: [
      "El relieve es independiente del interior terrestre",
      "Los sismos se distribuyen al azar sin patrón global"
    ]
  }
];
