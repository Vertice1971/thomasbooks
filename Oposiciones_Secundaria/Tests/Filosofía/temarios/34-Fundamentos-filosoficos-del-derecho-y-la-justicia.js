// temarios/34-Fundamentos-filosoficos-del-derecho-y-la-justicia.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué se entiende por derecho en sentido general?",
    correcta: "Un orden normativo e institucional que regula la convivencia social mediante normas coercitivas",
    incorrectas: [
      "Un conjunto de costumbres sin fuerza obligatoria",
      "Un catálogo de principios exclusivamente morales"
    ]
  },
  {
    enunciado: "Según Kant, ¿qué función cumple el derecho respecto a la libertad?",
    correcta: "Limita la libertad individual para garantizar la libertad colectiva",
    incorrectas: [
      "Anula la libertad individual en favor del bien común",
      "Otorga privilegios a quienes ostentan el poder político"
    ]
  },
  {
    enunciado: "¿Cuál es la función básica del derecho en la sociedad?",
    correcta: "Mantener la paz social y garantizar derechos y libertades",
    incorrectas: [
      "Imponer una moral única para todos los ciudadanos",
      "Sustituir el papel de las costumbres y tradiciones"
    ]
  },
  {
    enunciado: "¿Qué afirma el iusnaturalismo clásico sobre el derecho?",
    correcta: "Se fundamenta en una ley natural universal accesible a la razón",
    incorrectas: [
      "Depende únicamente de la voluntad del legislador",
      "Rechaza toda vinculación entre derecho y moral"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al positivismo jurídico?",
    correcta: "Concibe el derecho como un conjunto de normas creadas por autoridad legítima",
    incorrectas: [
      "Sostiene que la ley natural está por encima de cualquier norma positiva",
      "Identifica sin matices derecho y moral"
    ]
  },
  {
    enunciado: "¿Quién formuló la teoría pura del derecho?",
    correcta: "Hans Kelsen",
    incorrectas: [
      "Norberto Bobbio",
      "John Rawls"
    ]
  },
  {
    enunciado: "¿Cómo define Aristóteles la justicia en la Ética a Nicómaco?",
    correcta: "Como virtud que ordena dar a cada cual lo que le corresponde",
    incorrectas: [
      "Como obediencia ciega a la ley establecida",
      "Como aspiración utópica sin aplicación práctica"
    ]
  },
  {
    enunciado: "¿Qué distingue la justicia distributiva en Aristóteles?",
    correcta: "Se refiere al reparto proporcional de bienes y cargas en la comunidad",
    incorrectas: [
      "Se limita a las relaciones de intercambio privado",
      "Se centra exclusivamente en la obediencia a la ley"
    ]
  },
  {
    enunciado: "¿Qué entiende Tomás de Aquino por justicia general?",
    correcta: "La ordenación de todas las virtudes al bien común",
    incorrectas: [
      "El simple cumplimiento de las leyes positivas",
      "La disposición interior sin relevancia externa"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la justicia conmutativa?",
    correcta: "Regula la igualdad en los intercambios entre particulares",
    incorrectas: [
      "Garantiza el equilibrio entre poderes del Estado",
      "Se refiere a la obediencia a la autoridad religiosa"
    ]
  },
  {
    enunciado: "¿Cuál es la aportación central de Kant a la teoría de la justicia?",
    correcta: "Fundarla en la dignidad y autonomía de la persona mediante el imperativo categórico",
    incorrectas: [
      "Reducirla a la utilidad colectiva",
      "Subordinarla a la tradición cultural de cada pueblo"
    ]
  },
  {
    enunciado: "¿Qué propone Rawls como criterio de justicia social?",
    correcta: "Los principios de libertad e igualdad escogidos tras un velo de ignorancia",
    incorrectas: [
      "El cumplimiento estricto de las tradiciones culturales",
      "El poder absoluto del legislador soberano"
    ]
  },
  {
    enunciado: "¿Qué defiende Nozick en su teoría política?",
    correcta: "Un Estado mínimo centrado en proteger derechos individuales",
    incorrectas: [
      "Una amplia redistribución de la riqueza",
      "La desaparición completa de toda autoridad estatal"
    ]
  },
  {
    enunciado: "¿Cómo entiende Habermas la justicia?",
    correcta: "Como el resultado de un consenso alcanzado mediante el diálogo racional",
    incorrectas: [
      "Como el producto de la tradición histórica sin discusión",
      "Como imposición unilateral del poder ejecutivo"
    ]
  },
  {
    enunciado: "¿Qué diferencia establece Dworkin entre reglas y principios?",
    correcta: "Las reglas se aplican de manera todo o nada, mientras los principios orientan decisiones jurídicas",
    incorrectas: [
      "Ambos se aplican siempre del mismo modo",
      "Los principios carecen de relevancia en el derecho"
    ]
  },
  {
    enunciado: "¿Qué aportación hace Norberto Bobbio a la filosofía del derecho?",
    correcta: "Analiza el positivismo jurídico y el papel de los derechos humanos en la democracia",
    incorrectas: [
      "Desarrolla una crítica radical al Estado de derecho",
      "Propone una fusión completa de derecho y religión"
    ]
  },
  {
    enunciado: "¿Qué sostiene Finnis en su actualización del iusnaturalismo?",
    correcta: "Que existen bienes básicos autoevidentes que fundamentan el derecho",
    incorrectas: [
      "Que la ley natural es irrelevante en la sociedad moderna",
      "Que toda justicia depende únicamente del legislador"
    ]
  },
  {
    enunciado: "¿Qué plantea Amartya Sen en su teoría de la justicia?",
    correcta: "La necesidad de valorar las capacidades reales de las personas y no solo instituciones ideales",
    incorrectas: [
      "La justicia como obediencia estricta a la ley positiva",
      "La justicia como simple igualdad matemática"
    ]
  },
  {
    enunciado: "¿Qué problema clásico plantea Antígona en la tragedia de Sófocles?",
    correcta: "El conflicto entre la ley divina y la ley positiva del Estado",
    incorrectas: [
      "La oposición entre democracia y tiranía",
      "La rivalidad entre justicia distributiva y conmutativa"
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre legalidad y legitimidad?",
    correcta: "La legalidad se refiere a la conformidad con la norma, la legitimidad a su aceptación y justicia",
    incorrectas: [
      "Son términos equivalentes sin distinción real",
      "La legitimidad depende exclusivamente de la fuerza del Estado"
    ]
  },
  {
    enunciado: "¿Qué papel juega el derecho en relación con la justicia?",
    correcta: "Es el instrumento institucional para intentar realizar la justicia",
    incorrectas: [
      "Se identifica automáticamente con la justicia",
      "No guarda ninguna relación con el ideal de justicia"
    ]
  },
  {
    enunciado: "¿Qué defiende el realismo jurídico?",
    correcta: "Que el derecho se entiende mejor observando cómo actúan los jueces y tribunales en la práctica",
    incorrectas: [
      "Que el derecho es una construcción puramente ideal",
      "Que el derecho debe fundarse en la ley natural"
    ]
  },
  {
    enunciado: "¿Qué es una ley injusta según la tradición filosófica?",
    correcta: "Aquella que contradice la dignidad humana y los principios de justicia universal",
    incorrectas: [
      "Toda norma que no se adapte a las costumbres locales",
      "Cualquier ley que limite la libertad individual"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la hermenéutica jurídica contemporánea?",
    correcta: "Interpreta el derecho teniendo en cuenta el contexto histórico y lingüístico",
    incorrectas: [
      "Rechaza toda interpretación en favor de la literalidad",
      "Sostiene que el derecho no admite discusión"
    ]
  },
  {
    enunciado: "¿Qué importancia tienen los derechos humanos en la teoría del derecho contemporáneo?",
    correcta: "Constituyen el fundamento ético y jurídico del orden internacional y estatal",
    incorrectas: [
      "Son simples recomendaciones sin valor jurídico",
      "Solo corresponden a los ciudadanos de un Estado"
    ]
  },
  {
    enunciado: "¿Qué sostiene Kelsen respecto a la relación derecho-moral?",
    correcta: "Debe mantenerse una estricta separación entre derecho y moral",
    incorrectas: [
      "El derecho solo es válido si coincide con la moral",
      "La moral es superior al derecho positivo"
    ]
  },
  {
    enunciado: "¿Qué aportación hace Austin al positivismo jurídico?",
    correcta: "Concibe el derecho como mandato del soberano respaldado por sanciones",
    incorrectas: [
      "Defiende la vigencia de la ley natural",
      "Afirma que el derecho es producto del consenso"
    ]
  },
  {
    enunciado: "¿Qué significa el principio de equidad en la justicia?",
    correcta: "La adaptación flexible de la norma general a casos particulares",
    incorrectas: [
      "El rechazo de toda norma en favor de decisiones subjetivas",
      "La igualdad absoluta en cualquier situación"
    ]
  },
  {
    enunciado: "¿Qué función cumplen las normas coercitivas en el derecho?",
    correcta: "Garantizan el cumplimiento de las obligaciones jurídicas",
    incorrectas: [
      "Expresan simples recomendaciones morales",
      "Se aplican solo en situaciones extraordinarias"
    ]
  },
  {
    enunciado: "¿Qué relación establece Hegel entre derecho y libertad?",
    correcta: "El derecho es la existencia de la libertad en el mundo objetivo",
    incorrectas: [
      "El derecho suprime necesariamente la libertad",
      "La libertad es un obstáculo para el derecho"
    ]
  },
  {
    enunciado: "¿Qué aportación central hace Hart en su teoría del derecho?",
    correcta: "Distingue entre reglas primarias de obligación y reglas secundarias de reconocimiento",
    incorrectas: [
      "Reduce todo el derecho a normas religiosas",
      "Afirma que el derecho no necesita instituciones"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al marxismo jurídico?",
    correcta: "Concibe el derecho como superestructura al servicio de la clase dominante",
    incorrectas: [
      "Considera el derecho como neutral frente a los intereses sociales",
      "Niega que el derecho tenga relación con la economía"
    ]
  },
  {
    enunciado: "¿Qué defiende el derecho alternativo?",
    correcta: "La necesidad de aplicar el derecho en clave de transformación social y emancipación",
    incorrectas: [
      "La total supresión del orden jurídico",
      "La imposición de un derecho único en todo el mundo"
    ]
  },
  {
    enunciado: "¿Qué papel otorga Habermas al discurso en la legitimidad del derecho?",
    correcta: "El derecho es legítimo si se aprueba mediante procesos de deliberación racional inclusiva",
    incorrectas: [
      "El derecho es legítimo solo si coincide con la moral tradicional",
      "La legitimidad depende de la fuerza militar del Estado"
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre justicia objetiva y subjetiva?",
    correcta: "La objetiva se refiere al cumplimiento externo de normas, la subjetiva a la disposición interior",
    incorrectas: [
      "La objetiva depende de la voluntad, la subjetiva de las leyes",
      "Son conceptos equivalentes en toda la tradición filosófica"
    ]
  },
  {
    enunciado: "¿Qué desafío contemporáneo se discute en torno a derecho y justicia?",
    correcta: "La regulación de la inteligencia artificial y la justicia algorítmica",
    incorrectas: [
      "El rechazo a toda innovación tecnológica en el derecho",
      "La desaparición completa del sistema jurídico"
    ]
  },
  {
    enunciado: "¿Qué sostiene la justicia transicional?",
    correcta: "Busca reparar violaciones de derechos humanos en contextos de dictadura o conflicto armado",
    incorrectas: [
      "Defiende el olvido como única vía para la paz",
      "Se centra exclusivamente en la redistribución económica"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la justicia climática?",
    correcta: "Plantea la equidad intergeneracional y la responsabilidad frente a la crisis ecológica",
    incorrectas: [
      "Se limita al cumplimiento de contratos comerciales",
      "No tiene relevancia en la teoría filosófica del derecho"
    ]
  }
];
