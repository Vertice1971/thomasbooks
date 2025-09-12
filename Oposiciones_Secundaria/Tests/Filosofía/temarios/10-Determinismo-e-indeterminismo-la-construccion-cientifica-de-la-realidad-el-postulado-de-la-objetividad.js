// temarios/10-Determinismo-e-indeterminismo-la-construccion-cientifica-de-la-realidad-el-postulado-de-la-objetividad.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué afirma, en términos generales, el determinismo clásico?",
    correcta: "Que todo acontecimiento tiene causas suficientes que, en principio, permiten su predicción",
    incorrectas: [
      "Que la mayor parte de los fenómenos carecen de causa",
      "Que los fenómenos solo pueden explicarse con fines o propósitos"
    ]
  },
  {
    enunciado: "¿Qué ilustra el célebre 'demonio de Laplace'?",
    correcta: "La idea de una previsibilidad perfecta si se conocen las condiciones iniciales y las leyes",
    incorrectas: [
      "La imposibilidad absoluta de conocer cualquier estado físico",
      "La necesidad de explicar la naturaleza con causas finales"
    ]
  },
  {
    enunciado: "¿Qué introduce el principio de incertidumbre de Heisenberg?",
    correcta: "Un límite intrínseco a la precisión simultánea de ciertas magnitudes como posición y momento",
    incorrectas: [
      "Un defecto de los instrumentos de medida que puede eliminarse",
      "Una ley psicológica sobre la percepción del observador"
    ]
  },
  {
    enunciado: "Según la interpretación de Copenhague, ¿cómo se conciben los resultados cuánticos?",
    correcta: "Como resultados esencialmente probabilísticos ligados al acto de medida",
    incorrectas: [
      "Como deterministas ocultos por ignorancia técnica",
      "Como efectos puramente subjetivos sin base física"
    ]
  },
  {
    enunciado: "¿Qué muestran la teoría del caos y los sistemas complejos respecto a la predicción?",
    correcta: "Sensibilidad extrema a condiciones iniciales que limita la previsión práctica",
    incorrectas: [
      "La inexistencia de leyes físicas en sistemas macroscópicos",
      "La posibilidad de predicción exacta a cualquier plazo"
    ]
  },
  {
    enunciado: "¿Qué sostiene un indeterminismo fuerte en física?",
    correcta: "Que algunos procesos no están fijados por causas suficientes y solo admiten descripciones probabilísticas",
    incorrectas: [
      "Que todo fenómeno es estrictamente determinista",
      "Que la probabilidad es solo un recurso matemático sin correlato físico"
    ]
  },
  {
    enunciado: "¿Qué rasgo metodológico se asocia al ideal de objetividad científica?",
    correcta: "Procedimientos replicables e independientes de sesgos personales",
    incorrectas: [
      "Dependencia de la autoridad y del carisma del investigador",
      "Adopción de explicaciones teleológicas por defecto"
    ]
  },
  {
    enunciado: "¿Qué entiende Popper por 'conocimiento objetivo' (Mundo 3)?",
    correcta: "Un acervo de teorías, problemas y argumentos independiente de conciencias individuales",
    incorrectas: [
      "Un conjunto de vivencias privadas intransferibles",
      "La suma de datos brutos sin interpretación"
    ]
  },
  {
    enunciado: "¿Qué tesis enuncia el problema de Duhem-Quine?",
    correcta: "Que las hipótesis se contrastan en conjuntos y la refutación puede recaer en auxiliares",
    incorrectas: [
      "Que toda hipótesis verdadera es demostrable por inducción pura",
      "Que la experimentación no tiene papel en la ciencia"
    ]
  },
  {
    enunciado: "¿Qué rasgo distingue a la construcción científica de la realidad?",
    correcta: "La mediación de teorías y modelos que organizan y dan sentido a los datos",
    incorrectas: [
      "La mera acumulación neutral de observaciones sin marco conceptual",
      "La sustitución de la evidencia por opiniones comunes"
    ]
  },
  {
    enunciado: "¿Qué afirma el realismo científico moderado?",
    correcta: "Que las teorías bien corroboradas describen aproximadamente aspectos del mundo",
    incorrectas: [
      "Que toda teoría verdadera es definitiva e infalible",
      "Que las teorías solo sirven para organizar observaciones, sin pretensión descriptiva"
    ]
  },
  {
    enunciado: "¿Qué defiende el instrumentalismo sobre las teorías científicas?",
    correcta: "Son herramientas predictivas sin compromiso ontológico fuerte",
    incorrectas: [
      "Son dogmas metafísicos incuestionables",
      "Son relatos míticos sin contrastación posible"
    ]
  },
  {
    enunciado: "¿Qué papel cumple la intersubjetividad en la objetividad científica?",
    correcta: "Permite el control comunitario y el consenso crítico sobre métodos y resultados",
    incorrectas: [
      "Reemplaza los experimentos por votaciones",
      "Sustituye la lógica por costumbres culturales"
    ]
  },
  {
    enunciado: "¿Qué añade la visión compatibilista al debate libertad-determinismo?",
    correcta: "Sostiene que la libertad es compatible con ciertas formas de determinación causal",
    incorrectas: [
      "Niega toda causalidad en la conducta humana",
      "Identifica libertad con ausencia total de leyes"
    ]
  },
  {
    enunciado: "¿Cuál es la crítica de Feyerabend al 'método científico' único?",
    correcta: "Defiende un pluralismo metodológico: no existe un conjunto de reglas universales y fijas",
    incorrectas: [
      "Propone un único método matemático para toda ciencia",
      "Sostiene que la ciencia debe renunciar a la experimentación"
    ]
  },
  {
    enunciado: "¿Qué es un modelo científico en este contexto?",
    correcta: "Una representación idealizada que capta aspectos relevantes del sistema estudiado",
    incorrectas: [
      "Un mero dibujo sin relación con leyes",
      "Una verdad absoluta que sustituye a la teoría"
    ]
  },
  {
    enunciado: "¿Qué indica el teorema de Bell respecto a variables ocultas locales?",
    correcta: "Que ciertas correlaciones cuánticas no pueden reproducirse con teorías locales de variables ocultas",
    incorrectas: [
      "Que toda probabilidad cuántica es ilusoria",
      "Que la mecánica clásica explica toda correlación cuántica"
    ]
  },
  {
    enunciado: "¿Qué mostraron los experimentos tipo Aspect sobre la no localidad cuántica?",
    correcta: "Violaciones de desigualdades de Bell compatibles con entrelazamiento cuántico",
    incorrectas: [
      "Confirmación de variables ocultas locales clásicas",
      "Refutación de la probabilidad en mecánica cuántica"
    ]
  },
  {
    enunciado: "En la física clásica, ¿qué relación hay entre causas y efectos?",
    correcta: "Relaciones deterministas que permiten ecuaciones de evolución bien definidas",
    incorrectas: [
      "Relaciones puramente azarosas sin ley",
      "Relaciones únicamente finalistas"
    ]
  },
  {
    enunciado: "¿Qué pretende el postulado de la objetividad en investigación empírica?",
    correcta: "Minimizar sesgos y hacer públicos los procedimientos para su control",
    incorrectas: [
      "Introducir valores personales como criterios de verdad",
      "Evitar toda forma de medición cuantitativa"
    ]
  },
  {
    enunciado: "¿Qué implica la 'carga teórica de la observación'?",
    correcta: "Que lo observado está mediado por categorías y expectativas teóricas",
    incorrectas: [
      "Que observar equivale a deducir teoremas",
      "Que los datos son independientes del lenguaje"
    ]
  },
  {
    enunciado: "¿Qué aporta Kuhn con el concepto de paradigma al tema de la objetividad?",
    correcta: "Muestra que los criterios de evaluación están históricamente situados en comunidades científicas",
    incorrectas: [
      "Niega la posibilidad de ciencia acumulativa en cualquier sentido",
      "Sostiene que los paradigmas no influyen en la observación"
    ]
  },
  {
    enunciado: "¿Cómo se articula la construcción científica con la evidencia experimental?",
    correcta: "La teoría guía la interpretación de datos, y los datos constriñen las teorías",
    incorrectas: [
      "La teoría sustituye por completo a los datos",
      "Los datos determinan automáticamente una única teoría"
    ]
  },
  {
    enunciado: "¿Qué señala la noción de 'verosimilitud' o aproximación a la verdad?",
    correcta: "Que una teoría puede acercarse más a la verdad al aumentar su poder explicativo y resistir refutaciones",
    incorrectas: [
      "Que una corroboración equivale a verdad definitiva",
      "Que la aproximación a la verdad es imposible por principio"
    ]
  },
  {
    enunciado: "¿Qué distingue un azar epistémico de un azar ontológico?",
    correcta: "El primero deriva de ignorancia; el segundo remite a indeterminación real del sistema",
    incorrectas: [
      "No hay diferencia: ambos son errores de medición",
      "El azar ontológico es una ilusión semántica"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la objetividad metodológica?",
    correcta: "Uso de protocolos públicos, calibración, control de sesgos y replicabilidad",
    incorrectas: [
      "Dependencia de intuiciones privadas",
      "Primacía de anécdotas sobre series de datos"
    ]
  },
  {
    enunciado: "¿Qué relación guarda el determinismo con la libertad en una visión rígida?",
    correcta: "Puede conducir a negar la libertad concebida como capacidad de alternativa real",
    incorrectas: [
      "Implica que la libertad es ilimitada",
      "Establece que libertad y causalidad son idénticas"
    ]
  },
  {
    enunciado: "¿Qué sugiere el realismo experimental de Hacking sobre la objetividad?",
    correcta: "Que intervenir con éxito sobre entidades es un buen indicio de su realidad",
    incorrectas: [
      "Que el éxito tecnológico invalida la evidencia",
      "Que solo valen pruebas puramente teóricas"
    ]
  },
  {
    enunciado: "¿Qué subraya la práctica de revisión por pares para la objetividad?",
    correcta: "Control crítico comunitario previo a la aceptación de resultados",
    incorrectas: [
      "Sustitución de la evidencia por opiniones",
      "Imposibilidad de corregir errores metodológicos"
    ]
  },
  {
    enunciado: "¿Qué implica el sesgo de confirmación frente al ideal de objetividad?",
    correcta: "Tendencia a favorecer evidencias afines a hipótesis previas, que debe mitigarse",
    incorrectas: [
      "Un método legítimo para reforzar teorías",
      "Una regla normativa de la inducción científica"
    ]
  },
  {
    enunciado: "¿Qué papel tiene la simulación computacional en la construcción científica?",
    correcta: "Funciona como modelo que explora escenarios y genera predicciones contrastables",
    incorrectas: [
      "Sustituye la contrastación empírica siempre",
      "Equivale a una prueba lógica apodíctica"
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre objetividad y neutralidad axiológica absoluta?",
    correcta: "La objetividad exige control de sesgos; la neutralidad absoluta es inalcanzable y no necesaria",
    incorrectas: [
      "Son exactamente lo mismo",
      "La objetividad exige ausencia total de valores en toda fase"
    ]
  },
  {
    enunciado: "¿Cómo afecta la medición al sistema en mecánica cuántica?",
    correcta: "El acto de medida puede modificar el estado del sistema y fijar resultados",
    incorrectas: [
      "La medida es siempre pasiva e inerte",
      "La medida elimina la probabilidad del formalismo"
    ]
  },
  {
    enunciado: "¿Qué pretende el control de variables confusoras en un diseño experimental?",
    correcta: "Aislar efectos causales para mejorar inferencias objetivas",
    incorrectas: [
      "Introducir deliberadamente ruido para robustez",
      "Evitar el uso de grupos de control"
    ]
  },
  {
    enunciado: "¿Qué muestra el concepto de 'emergencia' en sistemas complejos?",
    correcta: "Propiedades globales no triviales que no se deducen linealmente de los componentes",
    incorrectas: [
      "Ausencia total de leyes en niveles altos",
      "Reducción automática de todo a partículas"
    ]
  },
  {
    enunciado: "¿Qué función tiene la preregistración de hipótesis en la objetividad científica?",
    correcta: "Reduce p-hacking y sesgos de publicación al fijar análisis por adelantado",
    incorrectas: [
      "Evita por completo la necesidad de replicación",
      "Sustituye la revisión por pares"
    ]
  },
  {
    enunciado: "¿Qué papel juega la falsabilidad en el equilibrio entre determinismo e indeterminismo?",
    correcta: "Ofrece un criterio común de prueba crítica para teorías de ambos enfoques",
    incorrectas: [
      "Solo aplica a teorías deterministas",
      "Impone que toda teoría sea probabilística"
    ]
  },
  {
    enunciado: "¿Qué enseña la historia de la ciencia sobre objetividad y construcción teórica?",
    correcta: "Que los marcos teóricos cambian y, con ellos, los estándares de evidencia aceptados",
    incorrectas: [
      "Que los criterios de prueba son eternos e idénticos",
      "Que los paradigmas no afectan a la evaluación empírica"
    ]
  },
  {
    enunciado: "En síntesis, ¿cómo se concilia el ideal de objetividad con la construcción científica?",
    correcta: "Mediante reglas públicas, control crítico y contrastación que disciplinan la creatividad teórica",
    incorrectas: [
      "Renunciando a modelos y teorías",
      "Sustituyendo los datos por autoridad"
    ]
  }
];
