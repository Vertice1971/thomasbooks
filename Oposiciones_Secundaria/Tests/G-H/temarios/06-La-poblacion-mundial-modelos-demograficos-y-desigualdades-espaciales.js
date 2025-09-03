var PREGUNTAS = [
  {
    enunciado: "¿Qué se entiende por población en geografía humana?",
    correcta: "El conjunto de personas que habitan un territorio en un momento dado",
    incorrectas: [
      "El número de viviendas existentes en un país",
      "El total de nacimientos ocurridos en un año"
    ]
  },
  {
    enunciado: "¿Qué mide la densidad de población?",
    correcta: "El número de habitantes por unidad de superficie",
    incorrectas: [
      "El número de nacimientos por mil habitantes",
      "La proporción de población urbana"
    ]
  },
  {
    enunciado: "¿Qué es la tasa bruta de natalidad?",
    correcta: "Nacimientos anuales por cada 1.000 habitantes",
    incorrectas: [
      "Hijos por mujer a lo largo de su vida fértil",
      "Nacimientos anuales por cada 100 mujeres"
    ]
  },
  {
    enunciado: "¿Qué es la tasa bruta de mortalidad?",
    correcta: "Defunciones anuales por cada 1.000 habitantes",
    incorrectas: [
      "Defunciones infantiles por cada 1.000 nacidos vivos",
      "Defunciones en mayores de 65 por cada 100 mayores"
    ]
  },
  {
    enunciado: "¿Qué expresa el crecimiento natural o vegetativo?",
    correcta: "La diferencia entre natalidad y mortalidad",
    incorrectas: [
      "La suma de inmigración y emigración",
      "La variación del PIB por habitante"
    ]
  },
  {
    enunciado: "¿Qué mide la tasa de migración neta?",
    correcta: "Inmigrantes menos emigrantes por cada 1.000 habitantes",
    incorrectas: [
      "El total de desplazamientos internos",
      "La proporción de población extranjera residente"
    ]
  },
  {
    enunciado: "¿Qué es la tasa de fecundidad total?",
    correcta: "Promedio de hijos por mujer si se mantuvieran las tasas de fecundidad por edad",
    incorrectas: [
      "Nacimientos por cada 1.000 mujeres en edad fértil",
      "Hijos por familia registrada"
    ]
  },
  {
    enunciado: "¿Qué indica la esperanza de vida al nacer?",
    correcta: "Los años promedio que se espera que viva una cohorte de recién nacidos",
    incorrectas: [
      "La edad media de la población activa",
      "Los años de escolarización obligatoria"
    ]
  },
  {
    enunciado: "¿Qué describe el modelo de transición demográfica?",
    correcta: "El paso de altas tasas de natalidad y mortalidad a tasas bajas",
    incorrectas: [
      "El crecimiento exponencial constante de la población",
      "La urbanización acelerada en países desarrollados"
    ]
  },
  {
    enunciado: "En la etapa 1 de la transición demográfica, ¿cómo son natalidad y mortalidad?",
    correcta: "Altas y fluctuantes, con crecimiento muy bajo",
    incorrectas: [
      "Ambas bajas con crecimiento estable",
      "Natalidad baja y mortalidad alta"
    ]
  },
  {
    enunciado: "¿Qué ocurre típicamente en la etapa 2 de la transición demográfica?",
    correcta: "Desciende la mortalidad y la natalidad sigue alta; el crecimiento se acelera",
    incorrectas: [
      "Descienden natalidad y mortalidad al mismo tiempo",
      "Aumenta la mortalidad por envejecimiento"
    ]
  },
  {
    enunciado: "¿Qué rasgo define la etapa 3 del modelo de transición demográfica?",
    correcta: "Descenso de la natalidad hasta aproximarse a la mortalidad",
    incorrectas: [
      "Rebrote de la mortalidad por crisis sanitarias",
      "Emigración masiva que detiene el crecimiento"
    ]
  },
  {
    enunciado: "¿Qué caracteriza la etapa 4 del modelo de transición demográfica?",
    correcta: "Bajas natalidad y mortalidad y crecimiento cercano a cero",
    incorrectas: [
      "Natalidad alta y mortalidad baja",
      "Crecimiento natural muy elevado"
    ]
  },
  {
    enunciado: "¿Cómo se describe la llamada 'etapa 5' en algunos esquemas?",
    correcta: "Natalidad muy baja por debajo del reemplazo y envejecimiento, con posible decrecimiento",
    incorrectas: [
      "Natalidad creciente por políticas universales",
      "Mortalidad infantil de nuevo muy alta"
    ]
  },
  {
    enunciado: "¿Qué representa una pirámide de población expansiva?",
    correcta: "Base ancha por elevada proporción de jóvenes y alta natalidad",
    incorrectas: [
      "Gran proporción de ancianos con base estrecha",
      "Distribución equilibrada de todas las edades"
    ]
  },
  {
    enunciado: "¿Qué indica una pirámide constrictiva?",
    correcta: "Baja natalidad y envejecimiento de la población",
    incorrectas: [
      "Altas tasas de fecundidad",
      "Estructura joven predominante"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a una pirámide estacionaria?",
    correcta: "Proporciones semejantes entre cohortes con población estable",
    incorrectas: [
      "Crecimiento explosivo",
      "Colapso demográfico inmediato"
    ]
  },
  {
    enunciado: "¿Cómo se calcula el índice de dependencia demográfica?",
    correcta: "Población de 0–14 y 65+ dividida por la de 15–64, multiplicado por 100",
    incorrectas: [
      "Población urbana dividida por la rural",
      "Nacimientos divididos por defunciones"
    ]
  },
  {
    enunciado: "¿Qué es el envejecimiento demográfico?",
    correcta: "Aumento del peso relativo de la población de 65 años y más",
    incorrectas: [
      "Reducción de la esperanza de vida",
      "Aumento del número absoluto de nacimientos"
    ]
  },
  {
    enunciado: "¿Qué es el bono o dividendo demográfico?",
    correcta: "Ventana en la que la población en edad de trabajar es proporcionalmente alta",
    incorrectas: [
      "Periodo de elevada natalidad en países ricos",
      "Etapa de recesión con alta emigración"
    ]
  },
  {
    enunciado: "¿Qué es un censo de población?",
    correcta: "Recuento exhaustivo y simultáneo de la población de un territorio en una fecha",
    incorrectas: [
      "Registro continuo de nacimientos y defunciones",
      "Muestra por encuesta anual de hogares"
    ]
  },
  {
    enunciado: "¿Qué diferencia básica hay entre censo y padrón/registro municipal?",
    correcta: "El censo es periódico y el padrón es un registro continuo y actualizado",
    incorrectas: [
      "El padrón se hace por muestreo y el censo siempre es muestral",
      "El censo solo incluye a mayores de edad"
    ]
  },
  {
    enunciado: "¿Qué información principal recoge el registro civil?",
    correcta: "Hechos vitales como nacimientos, matrimonios y defunciones",
    incorrectas: [
      "Ingresos por hogar y gasto público",
      "Trayectorias educativas de cada persona"
    ]
  },
  {
    enunciado: "¿Qué aportan encuestas demográficas tipo DHS/MICS?",
    correcta: "Datos por muestreo sobre fecundidad, mortalidad y salud reproductiva",
    incorrectas: [
      "Únicamente cartografía de densidad",
      "Exclusivamente series de PIB y comercio"
    ]
  },
  {
    enunciado: "¿Qué organismo elabora las proyecciones 'World Population Prospects'?",
    correcta: "Naciones Unidas (UNDESA)",
    incorrectas: [
      "Fondo Monetario Internacional",
      "Organización Mundial del Comercio"
    ]
  },
  {
    enunciado: "¿Qué publica Eurostat a escala europea?",
    correcta: "Estadísticas demográficas armonizadas de los Estados miembros",
    incorrectas: [
      "Solo informes de política monetaria",
      "Únicamente datos de emisiones industriales"
    ]
  },
  {
    enunciado: "¿Qué es un cartograma de población?",
    correcta: "Mapa en el que se deforma el tamaño de las áreas según su población",
    incorrectas: [
      "Mapa que muestra únicamente altitudes",
      "Plano urbano de usos del suelo"
    ]
  },
  {
    enunciado: "¿Qué representa un mapa coroplético de densidad?",
    correcta: "La densidad de población por áreas coloreadas según rangos",
    incorrectas: [
      "La red viaria y ferroviaria",
      "Las cuencas hidrográficas principales"
    ]
  },
  {
    enunciado: "¿Dónde se concentra la mayor parte de la población mundial?",
    correcta: "En Asia, especialmente en el sur y el este",
    incorrectas: [
      "En Oceanía y la Antártida",
      "En el Ártico y desiertos cálidos"
    ]
  },
  {
    enunciado: "¿Cuál es la tasa de reemplazo aproximada en países desarrollados?",
    correcta: "Alrededor de 2,1 hijos por mujer",
    incorrectas: [
      "1,0 hijos por mujer",
      "4,5 hijos por mujer"
    ]
  },
  {
    enunciado: "¿Qué es la mortalidad infantil?",
    correcta: "Defunciones de menores de 1 año por cada 1.000 nacidos vivos",
    incorrectas: [
      "Defunciones de menores de 5 años por cada 100 niños",
      "Defunciones de embarazadas por cada 1.000 partos"
    ]
  },
  {
    enunciado: "¿Qué es la transición epidemiológica?",
    correcta: "Paso de causas de muerte infecciosas a crónico-degenerativas",
    incorrectas: [
      "Cambio de población rural a urbana",
      "Sustitución de migraciones forzadas por voluntarias"
    ]
  },
  {
    enunciado: "Una consecuencia del envejecimiento es…",
    correcta: "Aumento del gasto en pensiones y cuidados de larga duración",
    incorrectas: [
      "Disminución de la tasa de dependencia",
      "Reducción automática de la esperanza de vida"
    ]
  },
  {
    enunciado: "Una forma de desigualdad espacial ligada a población es…",
    correcta: "Acceso desigual a servicios básicos como agua, salud y educación",
    incorrectas: [
      "Uniformidad total de infraestructuras",
      "Igualdad absoluta de renta entre regiones"
    ]
  },
  {
    enunciado: "¿Qué es una megalópolis?",
    correcta: "Conurbación continua de varias áreas metropolitanas",
    incorrectas: [
      "Ciudad media autosuficiente",
      "Área rural densamente poblada sin ciudades"
    ]
  },
  {
    enunciado: "¿Qué es la densidad fisiológica?",
    correcta: "Habitantes por unidad de tierra cultivable",
    incorrectas: [
      "Habitantes por km² de superficie total",
      "Trabajadores por hectárea forestal"
    ]
  },
  {
    enunciado: "¿Cómo se define la población económicamente activa (PEA)?",
    correcta: "Personas ocupadas o que buscan empleo en edad laboral",
    incorrectas: [
      "El total de población de 0 a 14 años",
      "Solo los trabajadores con contrato indefinido"
    ]
  },
  {
    enunciado: "Perspectivas: ¿qué región concentrará el mayor crecimiento poblacional este siglo?",
    correcta: "África subsahariana",
    incorrectas: [
      "Europa occidental",
      "Oceanía sin contar Australia"
    ]
  },
  {
    enunciado: "Perspectivas: ¿qué fenómeno puede incrementar migraciones en el futuro?",
    correcta: "Eventos climáticos extremos y subida del nivel del mar",
    incorrectas: [
      "Estabilidad climática absoluta",
      "Desaparición de desigualdades regionales"
    ]
  }
];
