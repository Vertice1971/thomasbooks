// temarios/39-la-agricultura-en-espana-el-impacto-ambiental-de-la-sobreexplotacion-nuevas-alternativas-para-la-obtencion-de-recursos-alimentarios.js
var PREGUNTAS = [
  {
    enunciado: "¿Cuál es un eje agroecológico clave que condiciona la agricultura española?",
    correcta: "El clima mediterráneo con sequía estival marcada",
    incorrectas: [
      "El clima monzónico con lluvias estivales intensas",
      "El clima polar con permafrost continuo"
    ]
  },
  {
    enunciado: "Un cultivo típico de secano mediterráneo es:",
    correcta: "Olivar tradicional",
    incorrectas: [
      "Arroz en marjal",
      "Banano de invernadero subtropical"
    ]
  },
  {
    enunciado: "Una característica del regadío intensivo es:",
    correcta: "Alta productividad con fuerte demanda hídrica y energética",
    incorrectas: [
      "Baja productividad y mínima demanda de agua",
      "Imposibilidad de usar fertirrigación"
    ]
  },
  {
    enunciado: "La sobreexplotación de acuíferos provoca con frecuencia:",
    correcta: "Descenso piezométrico e intrusión marina en litorales",
    incorrectas: [
      "Aumento de caudales de manantiales",
      "Desalinización natural del acuífero"
    ]
  },
  {
    enunciado: "La contaminación difusa agrícola se asocia principalmente a:",
    correcta: "Aportes de nitratos, fosfatos y fitosanitarios",
    incorrectas: [
      "Exceso de ozono estratosférico",
      "Solo vertidos industriales puntuales"
    ]
  },
  {
    enunciado: "Una consecuencia directa de la intensificación y laboreo agresivo es:",
    correcta: "Pérdida de materia orgánica y erosión del suelo",
    incorrectas: [
      "Aumento de biodiversidad edáfica",
      "Mejora espontánea de la estructura sin manejo"
    ]
  },
  {
    enunciado: "La salinización de suelos en regadío suele deberse a:",
    correcta: "Mal drenaje y evaporación concentrando sales",
    incorrectas: [
      "Exceso de materia orgánica húmica",
      "Aplicaciones de cal agrícola en exceso"
    ]
  },
  {
    enunciado: "Una medida básica para reducir nitratos en aguas es:",
    correcta: "Ajustar dosis y calendario de fertilización (4R)",
    incorrectas: [
      "Incrementar la labranza profunda anual",
      "Aplicar fertilizantes solo en días de lluvia"
    ]
  },
  {
    enunciado: "La Gestión Integrada de Plagas (GIP) se basa en:",
    correcta: "Monitoreo, umbrales, control biológico y rotación de materias activas",
    incorrectas: [
      "Aplicación preventiva continua de insecticidas",
      "Eliminación de enemigos naturales"
    ]
  },
  {
    enunciado: "Una infraestructura ecológica útil para polinizadores es:",
    correcta: "Setos multifuncionales y barbechos florales",
    incorrectas: [
      "Eliminación de lindes y ribazos",
      "Monocultivo continuo sin franjas verdes"
    ]
  },
  {
    enunciado: "La siembra directa y las cubiertas vegetales favorecen:",
    correcta: "Conservación del suelo y del carbono orgánico",
    incorrectas: [
      "Aumento de escorrentía y sellado superficial",
      "Necesidad de laboreo más profundo"
    ]
  },
  {
    enunciado: "Un indicador frecuente de eutrofización por agricultura es:",
    correcta: "Aumento de clorofila y blooms algales en masas de agua",
    incorrectas: [
      "Transparencia creciente del agua",
      "Descenso del fósforo disuelto a cero"
    ]
  },
  {
    enunciado: "La huella hídrica de un cultivo mide:",
    correcta: "Volumen de agua azul/verde/gris consumida o contaminada por unidad de producto",
    incorrectas: [
      "Solo la lluvia anual en la cuenca",
      "La salinidad del suelo en dS/m"
    ]
  },
  {
    enunciado: "El riego localizado (goteo) permite:",
    correcta: "Mayor eficiencia de uso del agua y fertirrigación precisa",
    incorrectas: [
      "Uniformidad absoluta sin mantenimiento",
      "Reducción cero de pérdidas por evaporación"
    ]
  },
  {
    enunciado: "Una práctica de economía circular en explotaciones ganaderas es:",
    correcta: "Producir biogás con estiércoles y usar el digestato como enmienda",
    incorrectas: [
      "Incinerar estiércoles a cielo abierto",
      "Verter purines sin control en cauces"
    ]
  },
  {
    enunciado: "La agricultura de precisión utiliza típicamente:",
    correcta: "Teledetección, sensores de suelo y prescripción variable",
    incorrectas: [
      "Solo calendarios fijos sin datos",
      "Arado animal como tecnología clave"
    ]
  },
  {
    enunciado: "Un impacto atmosférico relevante del sector agrario es:",
    correcta: "Emisiones de NH3 y N2O por fertilización y gestión de estiércoles",
    incorrectas: [
      "Ozono estratosférico",
      "SO2 de centrales térmicas"
    ]
  },
  {
    enunciado: "La desertificación en áreas semiáridas se vincula a:",
    correcta: "Sobrepastoreo, erosión y malas prácticas de manejo",
    incorrectas: [
      "Aumento sostenido de precipitaciones",
      "Reforestación densa y estable"
    ]
  },
  {
    enunciado: "Una alternativa de cultivo sin suelo con alta eficiencia hídrica es:",
    correcta: "Hidroponía",
    incorrectas: [
      "Barbecho químico continuo",
      "Laboreo a favor de pendiente"
    ]
  },
  {
    enunciado: "La aeroponía se caracteriza por:",
    correcta: "Suspender raíces en cámara y nebulizar solución nutritiva",
    incorrectas: [
      "Usar sustratos minerales saturados",
      "Cultivar solo en suelo arenoso"
    ]
  },
  {
    enunciado: "La agricultura vertical en ambientes controlados permite:",
    correcta: "Producción intensiva con alta eficiencia de agua y espacio",
    incorrectas: [
      "Dependencia total de lluvias estacionales",
      "Imposibilidad de control sanitario"
    ]
  },
  {
    enunciado: "Una mejora genética de nueva generación es:",
    correcta: "Edición génica (CRISPR) para tolerancia a sequía o plagas",
    incorrectas: [
      "Cruce aleatorio sin selección",
      "Defoliación para inducir mutaciones"
    ]
  },
  {
    enunciado: "Un bioinsumo para reducir químicos sintéticos es:",
    correcta: "Bioestimulantes y PGPR/micorrizas",
    incorrectas: [
      "Herbicidas no selectivos a dosis crecientes",
      "Sales de amonio como único fertilizante"
    ]
  },
  {
    enunciado: "Una nueva fuente de proteína con baja huella es:",
    correcta: "Micoproteína por fermentación de hongos filamentosos",
    incorrectas: [
      "Proteína de ballena",
      "Carne de monte sin control sanitario"
    ]
  },
  {
    enunciado: "La acuicultura multitrófica integrada (IMTA) busca:",
    correcta: "Aprovechar residuos de una especie como recurso de otra",
    incorrectas: [
      "Monocultivo con vertidos directos",
      "Uso exclusivo de piensos de pescado silvestre"
    ]
  },
  {
    enunciado: "La fermentación de precisión permite obtener:",
    correcta: "Ingredientes específicos (enzimas, caseínas, lípidos) con microorganismos",
    incorrectas: [
      "Solo biomasa lignificada",
      "Metales pesados quelados comestibles"
    ]
  },
  {
    enunciado: "Una medida para reducir la erosión en laderas agrícolas es:",
    correcta: "Fajinas, terrazas y curvas de nivel con cubiertas",
    incorrectas: [
      "Laboreo en línea de máxima pendiente",
      "Eliminación de cubierta vegetal"
    ]
  },
  {
    enunciado: "Los planes de abonado basados en análisis de suelo y tejido permiten:",
    correcta: "Ajustar nutrientes a demanda y minimizar pérdidas",
    incorrectas: [
      "Sobrefertilizar para maximizar rendimientos siempre",
      "Eliminar la necesidad de riego"
    ]
  },
  {
    enunciado: "Una práctica que favorece polinizadores en cultivos es:",
    correcta: "Evitar tratamientos insecticidas en floración y crear refugios",
    incorrectas: [
      "Aplicar insecticidas al amanecer en plena floración",
      "Eliminar flora arvense mellífera"
    ]
  },
  {
    enunciado: "Un conflicto típico en gestión del agua es entre:",
    correcta: "Demandas agrícolas, urbanas y ambientales",
    incorrectas: [
      "Océanos y glaciares",
      "Acuíferos y nubes"
    ]
  },
  {
    enunciado: "Una ventaja del riego deficitario controlado (RDC) es:",
    correcta: "Ahorro de agua con impacto limitado en rendimiento/calidad",
    incorrectas: [
      "Incremento de agua respecto a riego a demanda",
      "Imposibilidad de aplicarse en frutales"
    ]
  },
  {
    enunciado: "La rotación de cultivos con leguminosas aporta:",
    correcta: "Fijación biológica de N y mejora del suelo",
    incorrectas: [
      "Aumento de patógenos específicos continuos",
      "Reducción de materia orgánica"
    ]
  },
  {
    enunciado: "Una alternativa proteica para piensos con menor presión sobre pesquerías es:",
    correcta: "Harinas de insecto y microalgas",
    incorrectas: [
      "Incrementar harina de pescado silvestre",
      "Usar exclusivamente soja importada sin trazabilidad"
    ]
  },
  {
    enunciado: "El control biológico en invernadero mediterráneo usa:",
    correcta: "Depredadores/parasitoides comerciales y manejo de bancales refugio",
    incorrectas: [
      "Fumigaciones semanales fijas",
      "Solo trampas cromáticas sin enemigos naturales"
    ]
  },
  {
    enunciado: "La reutilización de aguas regeneradas en agricultura exige:",
    correcta: "Cumplir criterios de calidad y monitorización sanitaria",
    incorrectas: [
      "Mezclar con lixiviados sin control",
      "Aplicarlas siempre por aspersión en cualquier cultivo"
    ]
  },
  {
    enunciado: "Un indicador de éxito en restauración de suelos agrícolas degradados es:",
    correcta: "Aumento de carbono orgánico y estabilidad de agregados",
    incorrectas: [
      "Descenso del contenido de humus",
      "Incremento de escorrentía superficial"
    ]
  },
  {
    enunciado: "Una política eficaz para impulsar buenas prácticas es:",
    correcta: "Eco-regímenes y pagos por servicios ecosistémicos",
    incorrectas: [
      "Subvencionar laboreo intensivo",
      "Bonificar vertidos sin depuración"
    ]
  },
  {
    enunciado: "Reducir pérdidas poscosecha y desperdicio alimentario implica:",
    correcta: "Mejor logística en frío, envases adecuados y educación del consumidor",
    incorrectas: [
      "Aumentar tamaños de ración sin control",
      "Eliminar estándares de calidad e inocuidad"
    ]
  },
  {
    enunciado: "Un beneficio de los setos y lindes en mosaicos agrarios es:",
    correcta: "Conectividad ecológica y control biológico funcional",
    incorrectas: [
      "Aislamiento de fauna útil",
      "Mayor deriva de plaguicidas"
    ]
  },
  {
    enunciado: "La trazabilidad y certificaciones (eco, integrada) favorecen:",
    correcta: "Confianza del mercado e incentivos a prácticas sostenibles",
    incorrectas: [
      "Opacidad en cadenas de suministro",
      "Desconexión con requisitos ambientales"
    ]
  }
];
