// temarios/41-Eticas-materiales-y-eticas-formales.js
var PREGUNTAS = [
  {
    enunciado: "¿Cuál es la diferencia central entre éticas materiales y éticas formales?",
    correcta: "Las primeras proponen contenidos de bien/valor; las segundas fijan condiciones formales de validez de normas",
    incorrectas: [
      "Las materiales estudian lógica y las formales psicología",
      "Las materiales son deontológicas y las formales teleológicas"
    ]
  },
  {
    enunciado: "En Kant, ¿qué caracteriza a una ética formal?",
    correcta: "Que la moralidad depende de la forma de la máxima, no de fines materiales concretos",
    incorrectas: [
      "Que la moralidad depende de la cantidad de placer total",
      "Que la moralidad se reduce a costumbres históricas"
    ]
  },
  {
    enunciado: "¿Qué define mejor a una ética material?",
    correcta: "Ofrece un contenido de bienes, fines o valores que orientarían la acción",
    incorrectas: [
      "Prohíbe todo recurso a fines",
      "Identifica lo moral con lo legal sin más"
    ]
  },
  {
    enunciado: "Según Kant, la autonomía moral consiste en…",
    correcta: "Darse a sí mismo la ley mediante la razón práctica",
    incorrectas: [
      "Obedecer ciegamente autoridades externas",
      "Maximizar intereses privados sin restricción"
    ]
  },
  {
    enunciado: "¿Qué es la heteronomía en sentido kantiano?",
    correcta: "Determinar la voluntad desde inclinaciones o fines externos a la ley racional",
    incorrectas: [
      "La capacidad de autoimponerse normas universales",
      "La imposibilidad de tener fines naturales"
    ]
  },
  {
    enunciado: "Formulación del imperativo categórico (universalización) indica que…",
    correcta: "Debemos obrar solo según máximas que podamos querer como ley universal",
    incorrectas: [
      "Debemos obrar según lo que la mayoría prefiere",
      "Debemos obrar para producir el mayor placer neto"
    ]
  },
  {
    enunciado: "La ‘formulación de la humanidad’ del imperativo categórico ordena…",
    correcta: "Tratar a la humanidad siempre como fin y nunca meramente como medio",
    incorrectas: [
      "Tratar a todos como medios eficientes para fines comunes",
      "Tratar a los demás según su utilidad económica"
    ]
  },
  {
    enunciado: "¿Qué enfatiza el ‘reino de los fines’ kantiano?",
    correcta: "Una comunidad de agentes que se legislan racionalmente fines compatibles",
    incorrectas: [
      "Una sociedad dirigida por técnicos expertos",
      "Un conjunto de fines dados por la naturaleza"
    ]
  },
  {
    enunciado: "R. M. Hare sostiene en ética que los juicios morales…",
    correcta: "Funcionan como prescripciones universalizables con compromiso práctico",
    incorrectas: [
      "Son meras descripciones químicas del cerebro",
      "Carecen de relación con la acción"
    ]
  },
  {
    enunciado: "La ética del discurso (Habermas/Apel) propone que…",
    correcta: "La validez moral depende de la justificación bajo condiciones de diálogo libre e igual",
    incorrectas: [
      "Las normas valen si fueron heredadas de la tradición",
      "La validez se decide por autoridad del experto"
    ]
  },
  {
    enunciado: "Rawls legitima principios de justicia mediante…",
    correcta: "Una elección imparcial en la posición original tras el velo de la ignorancia",
    incorrectas: [
      "El cálculo directo del placer total",
      "El mandato de una autoridad benevolente"
    ]
  },
  {
    enunciado: "Para Scanlon, una norma es moralmente válida si…",
    correcta: "Nadie pudiera rechazarla razonablemente en condiciones de respeto mutuo",
    incorrectas: [
      "Conviene a la mayoría sin importar minorías",
      "Se hace cumplir por miedo al castigo"
    ]
  },
  {
    enunciado: "Korsgaard sitúa la fuente de la normatividad moral en…",
    correcta: "La autoconstitución del agente racional que se da razones vinculantes",
    incorrectas: [
      "La simple costumbre social",
      "La biología sin mediación racional"
    ]
  },
  {
    enunciado: "Una ética material de valores (Scheler) afirma que…",
    correcta: "Existen valores objetivos captables por emoción intencional y ordenados jerárquicamente",
    incorrectas: [
      "Los valores son preferencias arbitrarias",
      "Solo la utilidad económica funda el valor"
    ]
  },
  {
    enunciado: "Nicolai Hartmann defiende que los valores…",
    correcta: "Poseen objetividad estratificada y no se reducen al deseo",
    incorrectas: [
      "Son idénticos a leyes físicas",
      "Son lo mismo que normas jurídicas"
    ]
  },
  {
    enunciado: "¿Qué distingue utilitarismo de acto y de regla?",
    correcta: "El primero evalúa actos singulares; el segundo valora seguir reglas que maximizan bienestar",
    incorrectas: [
      "El de acto es deontológico; el de regla, kantiano",
      "Ambos prohíben considerar consecuencias"
    ]
  },
  {
    enunciado: "Bentham concibe el bien en términos de…",
    correcta: "Cálculo hedonista de placeres y dolores",
    incorrectas: [
      "Deberes incondicionados independientes del placer",
      "Verdades reveladas sin relación con el bienestar"
    ]
  },
  {
    enunciado: "Mill corrige a Bentham al introducir…",
    correcta: "La distinción cualitativa entre placeres superiores e inferiores",
    incorrectas: [
      "El rechazo completo del hedonismo",
      "La indiferencia ante la calidad del carácter"
    ]
  },
  {
    enunciado: "MacIntyre subraya en ética material el concepto de…",
    correcta: "Bienes internos de prácticas y virtudes encarnadas",
    incorrectas: [
      "Neutralidad axiológica total",
      "Primacía de reglas sin contexto"
    ]
  },
  {
    enunciado: "Philippa Foot defiende un naturalismo de las virtudes según el cual…",
    correcta: "El bien humano se ancla en excelencias funcionales de la forma de vida humana",
    incorrectas: [
      "La virtud es irrelevante para la vida buena",
      "El bien depende de gustos cambiantes siempre"
    ]
  },
  {
    enunciado: "Una crítica habitual a las éticas formales es que…",
    correcta: "Pueden resultar abstractas o indeterminadas ante dilemas sustantivos",
    incorrectas: [
      "Desprecian la coherencia lógica",
      "Niegan cualquier universalidad"
    ]
  },
  {
    enunciado: "Una crítica típica a las éticas materiales es que…",
    correcta: "Pueden derivar en paternalismo o heteronomía del bien",
    incorrectas: [
      "Rechazan todo contenido ético",
      "Imposibilitan orientar la acción concreta"
    ]
  },
  {
    enunciado: "El caso de ‘mentir al agresor’ enfrenta a Kant con…",
    correcta: "Modelos que admiten excepciones o ponderación de deberes (p. ej., Ross)",
    incorrectas: [
      "El utilitarismo que prohíbe toda mentira",
      "La ética del discurso que prohíbe deliberar"
    ]
  },
  {
    enunciado: "W. D. Ross propone resolver conflictos morales mediante…",
    correcta: "Deberes prima facie plurales ponderados según el caso",
    incorrectas: [
      "Una sola regla absoluta sin excepciones",
      "El azar como criterio último"
    ]
  },
  {
    enunciado: "¿Qué relación general hay entre teleología y deontología?",
    correcta: "La teleología prioriza bienes/fines; la deontología, la corrección de la norma",
    incorrectas: [
      "Ambas rechazan normas",
      "Ambas identifican bien con placer"
    ]
  },
  {
    enunciado: "La ‘falacia naturalista’ (Moore) objeta a algunas éticas materiales que…",
    correcta: "Identifican ‘bueno’ con una propiedad natural como ‘placentero’ sin residuo conceptual",
    incorrectas: [
      "Usen argumentos lógicos",
      "Recuran a emociones en deliberación"
    ]
  },
  {
    enunciado: "La distinción ser/deber (Hume) recuerda que…",
    correcta: "No se deduce un ‘debe’ de un ‘es’ sin un principio normativo puente",
    incorrectas: [
      "Todo ‘debe’ es una descripción física",
      "Las normas se deducen de mayorías"
    ]
  },
  {
    enunciado: "El particularismo moral critica a algunas éticas formales porque…",
    correcta: "La relevancia de razones depende del contexto y no de principios fijos",
    incorrectas: [
      "No existe razonamiento práctico",
      "Solo cuentan consecuencias agregadas"
    ]
  },
  {
    enunciado: "¿Qué integra el ‘equilibrio reflexivo’ en la justificación?",
    correcta: "Ajuste mutuo entre principios y juicios ponderados para lograr coherencia",
    incorrectas: [
      "Voto popular sin razones",
      "Sumisión acrítica a la tradición"
    ]
  },
  {
    enunciado: "Isaiah Berlin y el pluralismo de valores indican que…",
    correcta: "Existen valores últimos en conflicto e inconmensurables a veces",
    incorrectas: [
      "Todos los valores se reducen a uno",
      "Nunca hay choques entre valores"
    ]
  },
  {
    enunciado: "Ruth Chang habla de ‘paridad’ para mostrar que…",
    correcta: "Algunas comparaciones no son mejor/peor/igual, pero siguen siendo racionales",
    incorrectas: [
      "No hay elección racional posible nunca",
      "Toda comparación es numérica simple"
    ]
  },
  {
    enunciado: "En ética del cuidado, el contenido relacional…",
    correcta: "Aporta bienes concretos (cuidado, atención) que deben articularse con criterios de universalidad",
    incorrectas: [
      "Sustituye toda justificación pública",
      "Niega la importancia de la vulnerabilidad"
    ]
  },
  {
    enunciado: "Aplicado a IA, un enfoque formal insistirá en…",
    correcta: "Condiciones como explicabilidad, auditabilidad y no discriminación",
    incorrectas: [
      "Solo maximizar métricas de rendimiento",
      "Evitar toda transparencia para proteger secretos"
    ]
  },
  {
    enunciado: "Aplicado a IA, un enfoque material destacará…",
    correcta: "Valores de diseño como equidad, privacidad y bienestar social concretos",
    incorrectas: [
      "Que los valores sobran si la IA es precisa",
      "Que basta con obedecer cualquier orden"
    ]
  },
  {
    enunciado: "El principio de publicidad de razones exige que…",
    correcta: "Las justificaciones morales puedan exponerse y evaluarse por cualquiera",
    incorrectas: [
      "Las razones permanezcan secretas",
      "Solo cuenten autoridades técnicas"
    ]
  },
  {
    enunciado: "Un criterio formal clave para evaluar normas es…",
    correcta: "Imparcialidad y universalizabilidad sin arbitrariedad",
    incorrectas: [
      "Conveniencia privada del decisor",
      "Antigüedad de la costumbre"
    ]
  },
  {
    enunciado: "Una pauta práctica para gestionar conflictos entre forma y contenido es…",
    correcta: "Ponderar daños graves, preservar mínimos y justificar públicamente excepciones",
    incorrectas: [
      "Elegir siempre lo más popular",
      "Descartar toda motivación virtuosa"
    ]
  },
  {
    enunciado: "La motivación moral en un marco integrador implica…",
    correcta: "Emociones que motivan y procedimientos que justifican lo debido",
    incorrectas: [
      "Eliminar emociones del todo",
      "Sustituir razones por imposición"
    ]
  },
  {
    enunciado: "Síntesis operativa: las éticas materiales aportan… y las formales…",
    correcta: "Rumbo sustantivo (bienes/valores) y reglas de juego (validez/autonomía) respectivamente",
    incorrectas: [
      "Solo teoría sin aplicación ambas",
      "Únicamente técnicas de cálculo"
    ]
  }
];
