// temarios/66-Interdependencias-y-desequilibrios-en-el-mundo-actual-desarrollo-y-subdesarrollo-desarrollo-sostenible.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué se entiende por interdependencia en el sistema mundial contemporáneo?",
    correcta: "La existencia de vínculos económicos, tecnológicos, financieros y políticos que conectan a los países entre sí",
    incorrectas: [
      "La autosuficiencia absoluta de los estados nacionales en todos los ámbitos",
      "La sustitución de los intercambios comerciales por trueque local en todo el planeta"
    ]
  },
  {
    enunciado: "¿Qué concepto describe mejor la organización productiva que reparte etapas de fabricación en varios países?",
    correcta: "Cadenas globales de valor coordinadas por empresas transnacionales",
    incorrectas: [
      "Economías de autoconsumo sin excedentes comerciables",
      "Monopolios estatales que prohíben el comercio exterior"
    ]
  },
  {
    enunciado: "¿Qué rasgo caracteriza a la relación centro–periferia según la teoría del sistema-mundo?",
    correcta: "La especialización asimétrica en la que el centro concentra funciones de alto valor y la periferia tareas poco cualificadas",
    incorrectas: [
      "La distribución equitativa de tecnología y rentas entre todas las regiones",
      "El dominio productivo exclusivo de la periferia sobre el centro"
    ]
  },
  {
    enunciado: "¿Qué indicador sintético combina salud, educación e ingresos para medir desarrollo humano?",
    correcta: "El Índice de Desarrollo Humano (IDH) del PNUD",
    incorrectas: [
      "El Índice de Precios al Consumo (IPC)",
      "La Paridad de Poder Adquisitivo (PPA)"
    ]
  },
  {
    enunciado: "¿Qué mide el coeficiente de Gini en el análisis de desigualdad?",
    correcta: "El grado de concentración del ingreso dentro de un país",
    incorrectas: [
      "La productividad de la tierra agrícola",
      "El porcentaje de población urbana sobre la total"
    ]
  },
  {
    enunciado: "¿Qué rasgo es propio de los países menos adelantados (PMA)?",
    correcta: "Bajo ingreso per cápita, vulnerabilidad económica y limitaciones en capital humano",
    incorrectas: [
      "Altísima inversión en I+D y superávit tecnológico estructural",
      "Pleno empleo industrial y balanzas comerciales crónicamente positivas"
    ]
  },
  {
    enunciado: "¿Qué define con mayor precisión el concepto de subdesarrollo?",
    correcta: "Una situación estructural de carencias económicas y sociales asociadas a dependencia tecnológica y financiera",
    incorrectas: [
      "Un estadio transitorio garantizado que todo país supera de forma automática",
      "Una mera escasez coyuntural de divisas en la balanza de pagos"
    ]
  },
  {
    enunciado: "¿Qué idea central sostiene la teoría de la dependencia (Prebisch, Furtado, Dos Santos)?",
    correcta: "Que el intercambio desigual y la subordinación externa frenan el desarrollo de las economías periféricas",
    incorrectas: [
      "Que el libre comercio siempre iguala rentas entre naciones a corto plazo",
      "Que el proteccionismo del centro empuja el crecimiento periférico"
    ]
  },
  {
    enunciado: "¿Qué propone la teoría de la modernización (Rostow) respecto al desarrollo?",
    correcta: "Una secuencia de etapas desde la sociedad tradicional hasta el consumo de masas",
    incorrectas: [
      "La imposibilidad de que los países atrasados crezcan por falta de recursos",
      "La sustitución del mercado por el trueque como motor de despegue"
    ]
  },
  {
    enunciado: "¿Qué fenómeno describe la deslocalización industrial?",
    correcta: "El traslado de procesos productivos a territorios con menores costes o regulaciones más laxas",
    incorrectas: [
      "La nacionalización de todas las fábricas por parte del Estado",
      "La relocalización de industrias hacia ciudades con salarios más altos"
    ]
  },
  {
    enunciado: "¿Qué institución publica anualmente el Informe sobre Desarrollo Humano?",
    correcta: "El Programa de las Naciones Unidas para el Desarrollo (PNUD)",
    incorrectas: [
      "La Organización Mundial del Comercio (OMC)",
      "La Organización Internacional del Trabajo (OIT)"
    ]
  },
  {
    enunciado: "¿Qué señala con precisión el Informe Brundtland de 1987?",
    correcta: "La definición de desarrollo sostenible como satisfacer necesidades presentes sin comprometer las futuras",
    incorrectas: [
      "La eliminación del crecimiento económico por razones ambientales",
      "La priorización exclusiva del beneficio empresarial sobre cualquier otra meta"
    ]
  },
  {
    enunciado: "¿Cuál es el objetivo de la Agenda 2030 y los ODS?",
    correcta: "Integrar metas económicas, sociales y ambientales para un desarrollo sostenible global",
    incorrectas: [
      "Sustituir los Estados por empresas en la gobernanza mundial",
      "Eliminar la cooperación internacional en favor de políticas aislacionistas"
    ]
  },
  {
    enunciado: "¿Qué acuerdo internacional sobre clima fijó el objetivo de limitar el calentamiento muy por debajo de 2 °C?",
    correcta: "El Acuerdo de París de 2015 (COP21)",
    incorrectas: [
      "La Conferencia de Estocolmo de 1972",
      "El Protocolo de Montreal de 1987 sobre sustancias que agotan el ozono"
    ]
  },
  {
    enunciado: "¿Qué problema resume la expresión 'trampa de la deuda' en economías en desarrollo?",
    correcta: "La necesidad recurrente de endeudarse para pagar intereses y principal, perpetuando la dependencia",
    incorrectas: [
      "La abundancia de ahorro interno que encarece el crédito",
      "La imposibilidad legal de recibir préstamos internacionales"
    ]
  },
  {
    enunciado: "¿Qué componente no pertenece al enfoque de sostenibilidad 'triple balance'?",
    correcta: "Primacía del gasto militar sobre cualquier otra partida",
    incorrectas: [
      "Dimensión económica orientada a la eficiencia",
      "Dimensión social enfocada en la equidad y la inclusión"
    ]
  },
  {
    enunciado: "¿Qué término describe la pérdida de capital humano cualificado hacia países de mayor renta?",
    correcta: "Fuga de cerebros asociada a diferenciales salariales y de oportunidades",
    incorrectas: [
      "Transición demográfica hacia bajas tasas de natalidad",
      "Elasticidad ingreso de la demanda de bienes superiores"
    ]
  },
  {
    enunciado: "¿Qué señalan los 'términos de intercambio' en comercio internacional?",
    correcta: "La relación entre precios de exportación e importación que afecta al poder de compra externo",
    incorrectas: [
      "El número de aduanas por región en un país federal",
      "La cantidad de turistas recibidos en temporada alta"
    ]
  },
  {
    enunciado: "¿Qué rasgo comparten muchos países emergentes en el siglo XXI?",
    correcta: "Elevadas tasas de crecimiento acompañadas de transformación estructural y urbanización acelerada",
    incorrectas: [
      "Estancamiento productivo y desindustrialización temprana",
      "Sustitución de la industria por agricultura de subsistencia"
    ]
  },
  {
    enunciado: "¿Qué función desempeñan las ONG en la cooperación al desarrollo?",
    correcta: "Impulsan proyectos de base, asistencia humanitaria y fortalecimiento comunitario",
    incorrectas: [
      "Sustituyen por completo a los gobiernos en política fiscal",
      "Gestionan bancos centrales y fijan tipos de interés"
    ]
  },
  {
    enunciado: "¿Qué significa seguridad alimentaria en el marco del desarrollo?",
    correcta: "Acceso físico y económico estable a alimentos suficientes, inocuos y nutritivos",
    incorrectas: [
      "Autarquía agrícola en todos los países con prohibición de importar",
      "Sustitución de dietas locales por productos de lujo importados"
    ]
  },
  {
    enunciado: "¿Qué componente es clave en la transición energética sostenible?",
    correcta: "Impulso de renovables, eficiencia y descarbonización de sectores intensivos",
    incorrectas: [
      "Subsidios indefinidos a combustibles fósiles sin condicionantes",
      "Aumento de emisiones como estrategia de crecimiento"
    ]
  },
  {
    enunciado: "¿Qué expresa el Índice de Pobreza Multidimensional (IPM)?",
    correcta: "Privaciones simultáneas en educación, salud y nivel de vida dentro de los hogares",
    incorrectas: [
      "La tasa de inflación anual ponderada por canastas urbanas",
      "La participación del sector servicios en el PIB"
    ]
  },
  {
    enunciado: "¿Qué institución coordina el sistema multilateral de comercio y reglas arancelarias?",
    correcta: "La Organización Mundial del Comercio (OMC)",
    incorrectas: [
      "La Organización Mundial de la Salud (OMS)",
      "El Fondo de las Naciones Unidas para la Infancia (UNICEF)"
    ]
  },
  {
    enunciado: "¿Qué característica comparten los 'tigres asiáticos' en su proceso de desarrollo?",
    correcta: "Industrialización orientada a la exportación con fuerte acumulación de capital humano",
    incorrectas: [
      "Aislamiento comercial y cierre de sus economías",
      "Especialización exclusiva en materias primas sin manufacturas"
    ]
  },
  {
    enunciado: "¿Qué instrumento de política pública favorece la inclusión en países en desarrollo?",
    correcta: "Transferencias condicionadas y expansión de servicios básicos universales",
    incorrectas: [
      "Recortes sistemáticos en salud y educación primaria",
      "Aranceles punitivos a la importación de medicamentos esenciales"
    ]
  },
  {
    enunciado: "¿Qué dimensión incorpora la economía circular respecto al modelo lineal?",
    correcta: "Reducción, reutilización y reciclaje de materiales para cerrar ciclos de recursos",
    incorrectas: [
      "Aceleración del descarte para incrementar ventas",
      "Prohibición de innovaciones en ecodiseño"
    ]
  },
  {
    enunciado: "¿Qué problema ambiental se asocia a la deforestación en regiones tropicales?",
    correcta: "Pérdida de biodiversidad y emisiones por cambio de uso del suelo",
    incorrectas: [
      "Aumento de sumideros de carbono por tala masiva",
      "Crecimiento sostenido de caudales hídricos todo el año"
    ]
  },
  {
    enunciado: "¿Qué expresa la balanza de pagos de un país?",
    correcta: "El registro contable de transacciones con el exterior en cuenta corriente y financiera",
    incorrectas: [
      "El inventario de activos culturales protegidos por la UNESCO",
      "El censo electoral de la población en edad de votar"
    ]
  },
  {
    enunciado: "¿Qué objetivo persigue la diversificación productiva en economías dependientes?",
    correcta: "Reducir la vulnerabilidad ante shocks de precios y ampliar el valor añadido interno",
    incorrectas: [
      "Concentrar exportaciones en un único producto primario",
      "Sustituir la industria por empleos informales de baja productividad"
    ]
  },
  {
    enunciado: "¿Qué relación existe entre urbanización rápida y desigualdad en países emergentes?",
    correcta: "La urbanización acelerada puede intensificar desigualdades si no hay políticas de vivienda, transporte y servicios",
    incorrectas: [
      "La urbanización elimina de inmediato cualquier desigualdad",
      "La urbanización impide el crecimiento económico por definición"
    ]
  },
  {
    enunciado: "¿Qué rol cumplen los bancos multilaterales de desarrollo?",
    correcta: "Financian proyectos de infraestructura y reformas para impulsar crecimiento y cohesión social",
    incorrectas: [
      "Administran sistemas escolares y currículos nacionales",
      "Emiten pasaportes y visados en nombre de los estados"
    ]
  },
  {
    enunciado: "¿Qué instrumento internacional sustituyó a Kioto como marco de largo plazo del clima?",
    correcta: "El Acuerdo de París, con contribuciones determinadas a nivel nacional",
    incorrectas: [
      "El Tratado de Lisboa de la Unión Europea",
      "El Convenio de Basilea sobre residuos peligrosos"
    ]
  },
  {
    enunciado: "¿Qué relación guarda la brecha digital con el subdesarrollo?",
    correcta: "Profundiza desigualdades al limitar acceso a información, educación y oportunidades económicas",
    incorrectas: [
      "Reduce desigualdades al encarecer el acceso a internet",
      "No tiene impacto alguno en productividad o bienestar"
    ]
  },
  {
    enunciado: "¿Qué significa resiliencia en el contexto de desarrollo sostenible?",
    correcta: "Capacidad de sistemas sociales y ecológicos para absorber choques y recuperarse transformándose",
    incorrectas: [
      "Resistencia a cualquier cambio tecnológico",
      "Eliminación de políticas de prevención ante riesgos"
    ]
  },
  {
    enunciado: "¿Qué política puede reducir la informalidad laboral en países de renta media?",
    correcta: "Fortalecer inspección, simplificar trámites y ampliar protección social contributiva",
    incorrectas: [
      "Incrementar barreras de entrada para microempresas",
      "Prohibir la formación profesional dual"
    ]
  },
  {
    enunciado: "¿Qué meta transversal conecta ODS como fin de la pobreza, salud y educación?",
    correcta: "La reducción de desigualdades y la inclusión, con enfoque de género y territorial",
    incorrectas: [
      "La eliminación de toda ayuda internacional",
      "La priorización exclusiva de crecimiento del PIB sin distribución"
    ]
  },
  {
    enunciado: "¿Qué efecto puede tener la volatilidad de precios de materias primas en países exportadores?",
    correcta: "Generar inestabilidad macroeconómica y fiscal por dependencia de ingresos cíclicos",
    incorrectas: [
      "Asegurar estabilidad permanente de ingresos públicos",
      "Impulsar automáticamente la industrialización avanzada"
    ]
  },
  {
    enunciado: "¿Qué papel juega la educación en estrategias de desarrollo de largo plazo?",
    correcta: "Aumenta capital humano, productividad, innovación y movilidad social",
    incorrectas: [
      "Reduce productividad al elevar costos salariales sin beneficios",
      "Sustituye la necesidad de infraestructura física"
    ]
  },
  {
    enunciado: "¿Qué enfoque de política urbana favorece la sostenibilidad en megaciudades?",
    correcta: "Transporte público eficiente, densidad bien planificada y espacios verdes integrados",
    incorrectas: [
      "Expansión dispersa sin servicios básicos",
      "Prioridad exclusiva al automóvil privado"
    ]
  },
  {
    enunciado: "¿Qué expresión define el 'crecimiento inclusivo'?",
    correcta: "Aquel que genera oportunidades y reduce brechas para que el bienestar se reparta más ampliamente",
    incorrectas: [
      "Aquel que incrementa el PIB concentrando todas las rentas en el decil superior",
      "Aquel que excluye inversión en salud y educación para abaratar costos"
    ]
  }
];
