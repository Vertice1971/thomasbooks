// temarios/19-La-poblacion-espanola-comportamiento-demografico-fenomenos-migratorios.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué organismo produce en España el Padrón Continuo, las Estadísticas de Migraciones y los Movimientos Naturales de Población?",
    correcta: "El Instituto Nacional de Estadística (INE)",
    incorrectas: [
      "El Ministerio de Transportes y Movilidad Sostenible",
      "El Banco de España"
    ]
  },
  {
    enunciado: "¿Qué característica define al Padrón Municipal de España desde finales de los años noventa?",
    correcta: "Es un padrón de renovación continua que se actualiza permanentemente",
    incorrectas: [
      "Se elabora mediante muestreo bienal por hogares",
      "Se actualiza únicamente cada diez años como el censo"
    ]
  },
  {
    enunciado: "¿Cuál fue la principal novedad metodológica del Censo de 2021 en España?",
    correcta: "Se basó principalmente en registros administrativos y no en un censo clásico de campo",
    incorrectas: [
      "Se realizó exclusivamente por entrevistas presenciales puerta a puerta",
      "Se limitó a una muestra del 10% de la población"
    ]
  },
  {
    enunciado: "¿Qué periodo se asocia en España al llamado baby boom con fuerte crecimiento natural?",
    correcta: "Entre mediados de los años cincuenta y mediados de los setenta",
    incorrectas: [
      "Entre 1900 y 1920",
      "Entre 1985 y 2000"
    ]
  },
  {
    enunciado: "¿Qué rasgo demográfico destaca en España desde los años ochenta?",
    correcta: "Una fecundidad baja y envejecimiento progresivo de la población",
    incorrectas: [
      "Aumento sostenido de la natalidad y rejuvenecimiento",
      "Incremento marcado de la mortalidad infantil"
    ]
  },
  {
    enunciado: "¿Qué indicador resume el número medio de hijos por mujer a lo largo de su vida fértil?",
    correcta: "La Tasa Global de Fecundidad (TGF)",
    incorrectas: [
      "La Tasa Bruta de Natalidad",
      "La Tasa de Dependencia juvenil"
    ]
  },
  {
    enunciado: "¿Qué componente explica el rápido aumento poblacional en España entre 2000 y 2008?",
    correcta: "Un saldo migratorio internacional muy positivo",
    incorrectas: [
      "Un brusco repunte de la fecundidad por encima de 3 hijos por mujer",
      "La reducción drástica de la esperanza de vida"
    ]
  },
  {
    enunciado: "¿Cuál es el patrón básico de la distribución de la población en España?",
    correcta: "Altas densidades en litoral y grandes áreas metropolitanas y baja densidad en el interior rural",
    incorrectas: [
      "Homogeneidad territorial sin grandes contrastes",
      "Mayor densidad en áreas montañosas interiores que en las costas"
    ]
  },
  {
    enunciado: "¿Qué expresión se utiliza para referirse a la baja densidad y envejecimiento del interior peninsular?",
    correcta: "La España vaciada",
    incorrectas: [
      "La España compacta",
      "La España hiperurbana"
    ]
  },
  {
    enunciado: "¿Qué movimiento migratorio interno caracterizó la España de 1950–1975?",
    correcta: "El éxodo rural hacia ciudades industriales y zonas litorales",
    incorrectas: [
      "El retorno masivo del litoral al interior agrícola",
      "La emigración interna mayoritaria hacia aldeas de montaña"
    ]
  },
  {
    enunciado: "¿Qué efecto tiene el envejecimiento sobre la estructura por edades?",
    correcta: "Aumenta el peso relativo de los mayores de 65 años y eleva la tasa de dependencia",
    incorrectas: [
      "Reduce la proporción de población mayor y baja la dependencia",
      "No produce cambios en la estructura por edades"
    ]
  },
  {
    enunciado: "¿Cuál es un origen geográfico significativo de la inmigración llegada a España desde 2000?",
    correcta: "América Latina, la UE y el Magreb",
    incorrectas: [
      "Principalmente Oceanía y Escandinavia",
      "Exclusivamente Asia Oriental"
    ]
  },
  {
    enunciado: "¿Qué fuente permite estimar con detalle la población empadronada por municipio a 1 de enero de cada año?",
    correcta: "El Padrón Continuo",
    incorrectas: [
      "La Encuesta de Presupuestos Familiares",
      "La Contabilidad Nacional Trimestral"
    ]
  },
  {
    enunciado: "¿Qué indicador mide los fallecimientos por cada 1000 habitantes en un año?",
    correcta: "La Tasa Bruta de Mortalidad",
    incorrectas: [
      "La Tasa de Emigración",
      "La Tasa de Actividad"
    ]
  },
  {
    enunciado: "¿Qué estructura sectorial caracteriza hoy a la población ocupada en España?",
    correcta: "Predominio del sector servicios sobre industria y un sector primario reducido",
    incorrectas: [
      "Predominio de la agricultura sobre los servicios",
      "Predominio de la minería y la pesca"
    ]
  },
  {
    enunciado: "¿Qué tendencia ha seguido la edad media a la maternidad en España en las últimas décadas?",
    correcta: "Se ha retrasado de forma notable",
    incorrectas: [
      "Ha descendido de forma constante",
      "Se ha mantenido estable por debajo de 25 años"
    ]
  },
  {
    enunciado: "¿Qué evento coyuntural afectó a la mortalidad y fecundidad españolas en 2020–2021?",
    correcta: "La pandemia de COVID-19",
    incorrectas: [
      "La unificación monetaria del euro",
      "El censo de población de 2011"
    ]
  },
  {
    enunciado: "¿Qué indicador resume la supervivencia promedio de la población?",
    correcta: "La esperanza de vida al nacer",
    incorrectas: [
      "La tasa neta de migración",
      "La tasa de paro juvenil"
    ]
  },
  {
    enunciado: "¿Qué efecto tienen los flujos de inmigración sobre la pirámide de población de España?",
    correcta: "Rejuvenecen parcialmente la estructura al aportar población en edades activas",
    incorrectas: [
      "Provocan de inmediato un envejecimiento extremo",
      "Eliminan la necesidad de servicios educativos"
    ]
  },
  {
    enunciado: "¿Cuál es una consecuencia territorial de la despoblación rural sostenida?",
    correcta: "Pérdida de servicios y problemas de accesibilidad y cohesión",
    incorrectas: [
      "Construcción inmediata de nuevas áreas metropolitanas",
      "Saturación del transporte público rural por exceso de demanda"
    ]
  },
  {
    enunciado: "¿Qué institución europea publica comparativas demográficas para los Estados miembros?",
    correcta: "Eurostat",
    incorrectas: [
      "La OTAN",
      "La OPEP"
    ]
  },
  {
    enunciado: "¿Qué factor laboral dificulta el aumento de la fecundidad en España?",
    correcta: "La precariedad y dificultades de conciliación entre empleo y cuidados",
    incorrectas: [
      "La sobreabundancia de escuelas infantiles gratuitas",
      "La jubilación obligatoria a los 35 años"
    ]
  },
  {
    enunciado: "¿Qué saldo resulta de restar emigraciones a inmigraciones en un territorio?",
    correcta: "El saldo migratorio",
    incorrectas: [
      "El saldo vegetativo",
      "El saldo presupuestario"
    ]
  },
  {
    enunciado: "¿Qué tipo de movilidad ha ganado peso con el teletrabajo y los cambios residenciales recientes?",
    correcta: "Movilidades metropolitanas y neorrurales selectivas",
    incorrectas: [
      "Traslados masivos de capitales a zonas deshabitadas del Ártico",
      "Migraciones obligatorias por ley hacia capitales provinciales"
    ]
  },
  {
    enunciado: "¿Qué fenómeno describe que haya más mujeres que hombres en edades avanzadas?",
    correcta: "Feminización de la vejez",
    incorrectas: [
      "Juvenilización masculina",
      "Neutralidad por sexo en la mortalidad"
    ]
  },
  {
    enunciado: "¿Qué grupo de edad está aumentando en tamaño relativo por el envejecimiento en España?",
    correcta: "La población de 65 años y más",
    incorrectas: [
      "La población de 0 a 4 años",
      "La población de 10 a 14 años exclusivamente"
    ]
  },
  {
    enunciado: "¿Qué indicador demográfico mide el peso de niños y mayores respecto a la población en edad activa?",
    correcta: "La tasa de dependencia",
    incorrectas: [
      "La tasa de asalarización",
      "La tasa de sustitución educativa"
    ]
  },
  {
    enunciado: "¿Qué flujos de españoles aumentaron tras la crisis de 2008?",
    correcta: "La emigración al exterior de población joven y cualificada",
    incorrectas: [
      "El retorno masivo de jubilados al mercado laboral",
      "La emigración de masa de mayores de 80 años"
    ]
  },
  {
    enunciado: "¿Qué efecto tienen las migraciones internas sobre el mapa demográfico español?",
    correcta: "Refuerzan las áreas litorales y metropolitanas y debilitan zonas rurales interiores",
    incorrectas: [
      "Concentran población en comarcas despobladas sin servicios",
      "Eliminan los contrastes entre litoral e interior"
    ]
  },
  {
    enunciado: "¿Qué política pública es clave para afrontar la baja fecundidad y la conciliación?",
    correcta: "El refuerzo de servicios de cuidados, permisos y escuelas infantiles asequibles",
    incorrectas: [
      "La supresión de la educación infantil de 0–3 años",
      "La prohibición del teletrabajo en empresas"
    ]
  },
  {
    enunciado: "¿Qué componente demográfico determina el crecimiento natural de una población?",
    correcta: "La diferencia entre nacimientos y defunciones",
    incorrectas: [
      "La variación de los tipos de interés",
      "El saldo migratorio con el exterior"
    ]
  },
  {
    enunciado: "¿Qué característica distingue a muchas provincias del interior peninsular en España?",
    correcta: "Baja densidad, alta edad media y saldo vegetativo negativo",
    incorrectas: [
      "Altísima densidad y fuerte crecimiento natural",
      "Especialización en minería submarina urbana"
    ]
  },
  {
    enunciado: "¿Qué consecuencia socioeconómica tiene el envejecimiento acelerado?",
    correcta: "Aumenta la demanda de cuidados de larga duración y presiona la sostenibilidad de pensiones",
    incorrectas: [
      "Reduce el gasto sanitario de manera automática",
      "Elimina la necesidad de políticas de dependencia"
    ]
  },
  {
    enunciado: "¿Qué colectivo ha contribuido de forma significativa al crecimiento de la población activa en España desde 2000?",
    correcta: "La población extranjera en edades laborales",
    incorrectas: [
      "La población menor de 5 años",
      "La población centenaria"
    ]
  },
  {
    enunciado: "¿Qué instrumento estadístico permite analizar entradas y salidas de personas por nacionalidad y lugar de residencia?",
    correcta: "La Estadística de Migraciones del INE",
    incorrectas: [
      "La Encuesta de Infraestructuras y Equipamientos Locales",
      "La Encuesta Anual de Estructura Salarial"
    ]
  },
  {
    enunciado: "¿Qué proceso explica la caída de la mortalidad en España a lo largo del siglo XX?",
    correcta: "Mejoras sanitarias, higiénicas y médicas junto a aumento del nivel de vida",
    incorrectas: [
      "La prohibición de la atención primaria",
      "La reducción del número de hospitales"
    ]
  },
  {
    enunciado: "¿Qué dinámica urbana es frecuente en grandes ciudades españolas?",
    correcta: "Suburbanización y expansión metropolitana con reconfiguraciones centro–periferia",
    incorrectas: [
      "Concentración exclusiva en cascos históricos sin crecimiento periférico",
      "Desaparición legal de las áreas metropolitanas"
    ]
  }
];
