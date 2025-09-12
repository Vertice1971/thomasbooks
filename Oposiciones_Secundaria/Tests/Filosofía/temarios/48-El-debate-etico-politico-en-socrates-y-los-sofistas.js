// temarios/48-El-debate-etico-politico-en-socrates-y-los-sofistas.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué desplazamiento temático caracteriza el paso de los presocráticos a Sócrates y los sofistas en la Atenas clásica?",
    correcta: "Del estudio del cosmos a la reflexión sobre la vida humana, la virtud y la polis",
    incorrectas: [
      "Del análisis del lenguaje a la teología revelada",
      "De la ética práctica a la cosmología matemática pitagórica"
    ]
  },
  {
    enunciado: "En la Atenas del siglo V a.C., ¿por qué la retórica adquiere un papel central?",
    correcta: "Porque la participación en asambleas y tribunales hacía decisiva la persuasión pública",
    incorrectas: [
      "Porque la ley prohibía el razonamiento lógico en favor de la oratoria",
      "Porque sustituye por completo a la filosofía en la educación de los jóvenes"
    ]
  },
  {
    enunciado: "¿Qué significa el contraste sofístico entre physis y nomos?",
    correcta: "Physis alude a lo natural y nomos a lo convencional o establecido por acuerdo",
    incorrectas: [
      "Physis es la ley positiva y nomos la ley divina inmutable",
      "Physis son las costumbres y nomos la necesidad biológica"
    ]
  },
  {
    enunciado: "¿Qué tesis expresa la famosa afirmación de Protágoras: “El hombre es la medida de todas las cosas”?",
    correcta: "Un relativismo epistemológico que vincula verdad y percepción humana",
    incorrectas: [
      "Un determinismo natural que niega la libertad",
      "Una teoría de las Ideas universales e inmutables"
    ]
  },
  {
    enunciado: "¿Qué rasgo educativo distingue a los sofistas?",
    correcta: "Profesionalizan la enseñanza cívica y retórica cobrando honorarios",
    incorrectas: [
      "Rechazan toda forma de enseñanza estructurada",
      "Limitan su docencia a la geometría y la astronomía"
    ]
  },
  {
    enunciado: "¿Qué sostiene Gorgias en su tratado Sobre el no-ser (según la tradición)?",
    correcta: "Un escepticismo radical acerca de la existencia, el conocimiento y la comunicación",
    incorrectas: [
      "La imposibilidad de la persuasión retórica en política",
      "La identificación del bien con el placer estable y duradero"
    ]
  },
  {
    enunciado: "¿Cómo conciben Calicles y Trasímaco la justicia, según los diálogos platónicos?",
    correcta: "Como ventaja del más fuerte o expresión del poder",
    incorrectas: [
      "Como idea trascendente independiente de la polis",
      "Como hábito private de la vida contemplativa apolítica"
    ]
  },
  {
    enunciado: "Para los sofistas, la areté política es ante todo…",
    correcta: "Una pericia práctica que puede enseñarse como técnica de deliberar y persuadir",
    incorrectas: [
      "Una disposición innata imposible de adquirir",
      "Un don religioso que depende de oráculos"
    ]
  },
  {
    enunciado: "¿Qué actitud adopta Sócrates frente al relativismo sofista?",
    correcta: "Defiende la existencia de verdades morales universales accesibles a la razón",
    incorrectas: [
      "Acepta el relativismo pero lo limita a cuestiones legales",
      "Sostiene que toda verdad depende del voto mayoritario"
    ]
  },
  {
    enunciado: "¿En qué consiste la ironía socrática?",
    correcta: "En declararse ignorante para estimular la búsqueda conjunta de la verdad",
    incorrectas: [
      "En ridiculizar al adversario con sarcasmos",
      "En el uso de metáforas poéticas en lugar de argumentos"
    ]
  },
  {
    enunciado: "¿Qué es la mayéutica en Sócrates?",
    correcta: "Un método dialógico que ayuda a ‘parir’ el conocimiento moral latente",
    incorrectas: [
      "Una técnica mnemónica para recitar poemas",
      "Un sistema de demostración geométrica axiomática"
    ]
  },
  {
    enunciado: "¿Qué sostiene el intelectualismo moral socrático?",
    correcta: "Que conocer el bien conduce a obrar bien; el mal proviene de la ignorancia",
    incorrectas: [
      "Que la voluntad es independiente del juicio racional",
      "Que la virtud es cuestión de fortuna, no de saber"
    ]
  },
  {
    enunciado: "¿Qué relación establece Sócrates entre verdad y retórica?",
    correcta: "La palabra debe servir a la verdad, no solo a la persuasión eficaz",
    incorrectas: [
      "La verdad es irrelevante si la retórica convence",
      "La retórica es incompatible con toda forma de verdad"
    ]
  },
  {
    enunciado: "¿Qué motivó en parte el auge de los sofistas en el siglo V a.C.?",
    correcta: "La demanda de formación para la vida política en una democracia participativa",
    incorrectas: [
      "La abolición de las asambleas y tribunales ciudadanos",
      "La sustitución de la ley escrita por tradiciones orales sagradas"
    ]
  },
  {
    enunciado: "Según Sócrates, ¿qué condición hace posible una vida buena en la polis?",
    correcta: "La práctica de la virtud fundada en el examen racional de uno mismo",
    incorrectas: [
      "La acumulación de riqueza y prestigio como fines supremos",
      "La obediencia ciega a los líderes carismáticos"
    ]
  },
  {
    enunciado: "¿Qué crítica principal dirige Sócrates a los sofistas respecto de la educación?",
    correcta: "Convertir el saber en mercancía y separar la enseñanza de la verdad",
    incorrectas: [
      "Excluir por completo la gramática y la lógica de la enseñanza",
      "Oponerse a toda forma de debate público"
    ]
  },
  {
    enunciado: "¿Qué papel desempeña la noción de nomos en el pensamiento sofista?",
    correcta: "Expresa la contingencia de las leyes y costumbres según ciudades y épocas",
    incorrectas: [
      "Equivale a la necesidad natural e invariable",
      "Designa la inspiración divina de los poetas"
    ]
  },
  {
    enunciado: "¿Cómo interpreta Trasímaco la justicia en la República de Platón?",
    correcta: "Como lo que conviene al más fuerte, es decir, al gobernante",
    incorrectas: [
      "Como la armonía de las partes del alma",
      "Como el equilibrio entre placer y dolor"
    ]
  },
  {
    enunciado: "En el diálogo Gorgias, ¿qué sostiene Calicles frente a Sócrates?",
    correcta: "Que la justicia ‘natural’ legitima el dominio del más fuerte sobre el débil",
    incorrectas: [
      "Que la justicia es un contrato que protege siempre al débil",
      "Que la justicia coincide con la máxima felicidad hedonista universal"
    ]
  },
  {
    enunciado: "¿Qué simboliza el proceso y condena de Sócrates para la historia de la filosofía?",
    correcta: "La tensión entre libertad crítica y consenso político de su tiempo",
    incorrectas: [
      "El rechazo de Sócrates a toda ley positiva",
      "La aceptación socrática de la mentira noble como método docente"
    ]
  },
  {
    enunciado: "¿Qué hereda Platón del enfrentamiento Sócrates–sofistas?",
    correcta: "La búsqueda de criterios universales de justicia y la crítica a la retórica vacía",
    incorrectas: [
      "El relativismo absoluto de todas las normas",
      "La reducción de la educación a la imitación poética"
    ]
  },
  {
    enunciado: "¿Cómo se entiende la areté en Sócrates frente a la noción sofística?",
    correcta: "Como excelencia moral universal más que mera destreza persuasiva",
    incorrectas: [
      "Como habilidad natural innata que no se aprende",
      "Como obediencia incondicional a la tradición familiar"
    ]
  },
  {
    enunciado: "¿Qué aportación positiva puede reconocerse a los sofistas?",
    correcta: "Introducen una perspectiva crítica sobre las normas y la educación cívica",
    incorrectas: [
      "Sustituyen el razonamiento por el mito de forma sistemática",
      "Niegan la posibilidad de cualquier aprendizaje político"
    ]
  },
  {
    enunciado: "¿En qué sentido el debate Sócrates–sofistas inaugura la ética como disciplina?",
    correcta: "Introduce la pregunta por criterios racionales del bien y la justicia",
    incorrectas: [
      "Abandona toda discusión normativa por escepticismo total",
      "Reduce la moral a cálculos astrológicos sobre el destino"
    ]
  },
  {
    enunciado: "¿Qué papel tiene el diálogo en el método socrático?",
    correcta: "Es el medio para examinar creencias, refutarlas y aproximarse a definiciones",
    incorrectas: [
      "Sirve para memorizar leyes sin discusión",
      "Sustituye cualquier apelación a la experiencia vivida"
    ]
  },
  {
    enunciado: "¿Cómo se relaciona el relativismo sofista con el derecho positivo?",
    correcta: "Prefigura la idea de leyes producto de acuerdos humanos contingentes",
    incorrectas: [
      "Identifica la ley positiva con la naturaleza eterna",
      "Elimina la necesidad de justificar racionalmente las normas"
    ]
  },
  {
    enunciado: "¿Qué entiende Sócrates por ‘vida examinada’?",
    correcta: "Una existencia sometida al escrutinio racional de creencias y acciones",
    incorrectas: [
      "Una vida retirada de la comunidad política",
      "Un estilo de vida regido por oráculos sin reflexión"
    ]
  },
  {
    enunciado: "¿Qué problema educativo se discute entre Sócrates y los sofistas?",
    correcta: "Si la virtud puede enseñarse y con qué fines debe hacerlo la educación cívica",
    incorrectas: [
      "Si la matemática reemplaza a la ética en la formación",
      "Si la poesía debe prohibirse por completo en la polis"
    ]
  },
  {
    enunciado: "¿Qué lugar ocupa la persuasión en el programa sofista?",
    correcta: "Es un instrumento central para la acción política y la defensa de intereses",
    incorrectas: [
      "Es irrelevante porque las leyes se imponen sin deliberación",
      "Debe evitarse por ser incompatible con la democracia"
    ]
  },
  {
    enunciado: "¿Qué rasgo moral destaca en la figura de Sócrates ante la condena?",
    correcta: "Coherencia ética al acatar la sentencia por respeto a las leyes de la ciudad",
    incorrectas: [
      "Huida inmediata para preservar la vida del filósofo",
      "Aceptación de sobornos para evitar el juicio"
    ]
  },
  {
    enunciado: "¿Cómo contribuye el escepticismo de Gorgias al debate ético-político?",
    correcta: "Al resaltar el poder de la palabra y problematizar la relación entre verdad y discurso",
    incorrectas: [
      "Al demostrar la imposibilidad de toda comunicación política",
      "Al sostener un dogmatismo moral rígido e inmutable"
    ]
  },
  {
    enunciado: "¿Qué entiende un sofista por ‘educar para la polis’?",
    correcta: "Entrenar en deliberación, argumentación y gestión de conflictos públicos",
    incorrectas: [
      "Instruir en ritos mistéricos para obtener poder mágico",
      "Transmisión pasiva de mitos sin discusión crítica"
    ]
  },
  {
    enunciado: "¿Qué relación propone Sócrates entre conocimiento y acción?",
    correcta: "Saber y obrar bien están intrínsecamente vinculados",
    incorrectas: [
      "El saber auténtico es contemplativo e indiferente a la acción",
      "La acción virtuosa depende solo de la fuerza de voluntad"
    ]
  },
  {
    enunciado: "¿Cuál es una objeción clásica a la tesis socrática ‘nadie yerra voluntariamente’?",
    correcta: "Que existen casos de akrasia o debilidad de la voluntad frente al bien conocido",
    incorrectas: [
      "Que la ignorancia es imposible en asuntos morales",
      "Que toda acción está determinada por el destino astral"
    ]
  },
  {
    enunciado: "¿Qué hereda Aristóteles del debate entre Sócrates y los sofistas?",
    correcta: "Una ética de la virtud que busca términos medios racionales frente al relativismo",
    incorrectas: [
      "La identificación de la justicia con la fuerza",
      "La negación del carácter educativo de la ley"
    ]
  },
  {
    enunciado: "¿Cómo evalúa Platón la retórica sofista en sus diálogos?",
    correcta: "La critica cuando se separa de la verdad y sirve solo a la persuasión interesada",
    incorrectas: [
      "La aprueba siempre que aumente el poder del orador",
      "La sustituye por silencio ritual en la polis"
    ]
  },
  {
    enunciado: "¿Qué cuestión contemporánea refleja el choque Sócrates–sofistas?",
    correcta: "Universalismo moral frente a relativismo cultural en sociedades plurales",
    incorrectas: [
      "La superioridad de la técnica sobre la política",
      "La inutilidad de la educación cívica en democracias"
    ]
  },
  {
    enunciado: "¿Qué función cumple la refutación (elenchos) en el método socrático?",
    correcta: "Detectar contradicciones para purificar creencias y aproximarse a definiciones",
    incorrectas: [
      "Imponer dogmas sin justificar",
      "Sustituir la experiencia por autoridad poética"
    ]
  },
  {
    enunciado: "¿Qué riesgo ético-político señala Sócrates en la retórica desligada de la verdad?",
    correcta: "Convertir la política en técnica de manipulación de multitudes",
    incorrectas: [
      "Hacer imposible toda educación en la polis",
      "Eliminar la necesidad de leyes escritas"
    ]
  },
  {
    enunciado: "¿Qué idea clave sobre la ley puede extraerse del enfoque sofista?",
    correcta: "La ley es un producto humano revisable y sujeto a crítica racional",
    incorrectas: [
      "La ley es idéntica a la naturaleza y por ello inmutable",
      "La ley solo puede conocerse por revelación oracular"
    ]
  },
  {
    enunciado: "¿Por qué es fundacional el debate ético-político entre Sócrates y los sofistas?",
    correcta: "Porque establece el marco de la ética filosófica y la educación cívica racional",
    incorrectas: [
      "Porque sustituye la filosofía por la retórica definitivamente",
      "Porque demuestra que la justicia depende del azar"
    ]
  }
];
