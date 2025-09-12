// temarios/55-Teoria-y-funcion-del-arte-analisis-e-interpretacion-de-la-obra-de-arte.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué idea clásica define el arte como imitación de la realidad?",
    correcta: "Mímesis",
    incorrectas: ["Catarsis", "Anamnesis"]
  },
  {
    enunciado: "¿Qué filósofo vincula el juicio estético a lo desinteresado y universalizable?",
    correcta: "Immanuel Kant",
    incorrectas: ["Friedrich Nietzsche", "Arthur Schopenhauer"]
  },
  {
    enunciado: "¿Qué autor propone que el arte pertenece al 'mundo del arte' y a una teoría institucional?",
    correcta: "Arthur Danto",
    incorrectas: ["Ernst Gombrich", "Aby Warburg"]
  },
  {
    enunciado: "¿Qué corriente prioriza el análisis de la forma, la composición y los elementos visuales?",
    correcta: "Formalismo",
    incorrectas: ["Iconología", "Estructuralismo"]
  },
  {
    enunciado: "¿Quién formuló la distinción entre descripción preiconográfica, análisis iconográfico e interpretación iconológica?",
    correcta: "Erwin Panofsky",
    incorrectas: ["Heinrich Wölfflin", "Alois Riegl"]
  },
  {
    enunciado: "¿Qué obra de Duchamp cuestiona la noción tradicional de objeto artístico?",
    correcta: "Fountain",
    incorrectas: ["Guernica", "La persistencia de la memoria"]
  },
  {
    enunciado: "¿Qué función del arte está asociada a la enseñanza religiosa en la Edad Media?",
    correcta: "Función didáctica",
    incorrectas: ["Función terapéutica", "Función lúdica"]
  },
  {
    enunciado: "¿Qué enfoque estudia la obra como producto de relaciones sociales y de clase?",
    correcta: "Sociología del arte",
    incorrectas: ["Fenomenología", "Psicoanálisis"]
  },
  {
    enunciado: "¿Qué término describe el placer sensorial y cognitivo que provoca la contemplación artística?",
    correcta: "Experiencia estética",
    incorrectas: ["Sinestesia", "Empatía proyectiva"]
  },
  {
    enunciado: "¿Qué autor defendió que 'no existe, en realidad, el Arte, sino los artistas'?",
    correcta: "Ernst Gombrich",
    incorrectas: ["Hans Belting", "Nelson Goodman"]
  },
  {
    enunciado: "¿Qué método atiende a signos, códigos y sistemas de significación en la obra?",
    correcta: "Semiótica",
    incorrectas: ["Iconografía", "Connoisseurship"]
  },
  {
    enunciado: "¿Qué función del arte se asocia a la crítica y denuncia de injusticias?",
    correcta: "Función social o crítica",
    incorrectas: ["Función lúdica", "Función devocional"]
  },
  {
    enunciado: "¿Qué disciplina pone el foco en la recepción de la obra por parte del público y su horizonte de expectativas?",
    correcta: "Estética de la recepción",
    incorrectas: ["Psicología Gestalt", "Antropología simbólica"]
  },
  {
    enunciado: "¿Qué concepto de Clive Bell explica el valor estético por la 'forma significativa'?",
    correcta: "Significant form",
    incorrectas: ["Objetivación estética", "Estructura profunda"]
  },
  {
    enunciado: "¿Qué análisis comparado de pares formales (línea, plano, profundidad) asociamos a Wölfflin?",
    correcta: "Pares conceptuales del formalismo",
    incorrectas: ["Análisis isotópico", "Arquetipos junguianos"]
  },
  {
    enunciado: "¿Qué autor relaciona el arte con el 'aura' y su pérdida en la reproducción técnica?",
    correcta: "Walter Benjamin",
    incorrectas: ["Theodor Adorno", "Herbert Marcuse"]
  },
  {
    enunciado: "¿Qué corriente entiende la obra como dispositivo de poder y saber en contextos históricos?",
    correcta: "Foucauldiana / postestructuralista",
    incorrectas: ["Empirista", "Escolástica"]
  },
  {
    enunciado: "¿Qué función identitaria cumple el arte en la construcción de memorias colectivas?",
    correcta: "Contribuye a narrativas y símbolos compartidos",
    incorrectas: ["Neutraliza los discursos sociales", "Suprime la pluralidad cultural"]
  },
  {
    enunciado: "¿Cuál es un elemento formal básico en pintura y dibujo?",
    correcta: "Línea",
    incorrectas: ["Isotopía", "Catacresis"]
  },
  {
    enunciado: "¿Qué método prioriza materiales, técnicas y procesos productivos de la obra?",
    correcta: "Análisis técnico-material",
    incorrectas: ["Hermenéutica pura", "Análisis comparado sin contexto"]
  },
  {
    enunciado: "¿Qué ejemplo canónico sirve para aplicar análisis formal, iconográfico e histórico a la vez?",
    correcta: "Las Meninas",
    incorrectas: ["Campbell’s Soup Cans", "Composición VIII"]
  },
  {
    enunciado: "¿Qué teoría interpreta el arte como comunicación de contenidos inconscientes?",
    correcta: "Psicoanálisis",
    incorrectas: ["Utilitarismo", "Neokantismo"]
  },
  {
    enunciado: "¿Qué función estética se asocia a la catarsis según la tradición aristotélica?",
    correcta: "Purificación emocional del espectador",
    incorrectas: ["Neutralidad afectiva", "Supresión del conflicto dramático"]
  },
  {
    enunciado: "¿Qué concepto introduce Hans Belting para estudiar imágenes más allá de las 'bellas artes'?",
    correcta: "Antropología de la imagen",
    incorrectas: ["Estética normativa", "Iconoclasia positiva"]
  },
  {
    enunciado: "¿Qué enfoque vincula gusto, capital cultural y habitus con prácticas artísticas?",
    correcta: "Bourdieu: sociología del gusto",
    incorrectas: ["Hegel: espíritu absoluto", "Croce: intuición-expresión"]
  },
  {
    enunciado: "¿Qué técnica pictórica consiste en aplicar pigmento sobre yeso húmedo?",
    correcta: "Fresco",
    incorrectas: ["Temple sobre tabla", "Acrílico sobre lienzo"]
  },
  {
    enunciado: "¿Qué corriente vanguardista acentúa la idea y el proceso sobre el objeto final?",
    correcta: "Arte conceptual",
    incorrectas: ["Impresionismo", "Neoclasicismo"]
  },
  {
    enunciado: "¿Qué término designa la narración visual distribuida en arquitectura y escultura medieval?",
    correcta: "Programas iconográficos",
    incorrectas: ["Cadencias cromáticas", "Perspectiva aérea"]
  },
  {
    enunciado: "¿Qué función del arte se asocia al uso político y propagandístico del poder?",
    correcta: "Función legitimadora",
    incorrectas: ["Función terapéutica", "Función aleatoria"]
  },
  {
    enunciado: "¿Qué criterio NO es propio del análisis formal clásico?",
    correcta: "Biografía psicológica del artista",
    incorrectas: ["Composición y equilibrio", "Luz y color"]
  },
  {
    enunciado: "¿Qué autor defendió la autonomía del arte frente a fines externos en la modernidad?",
    correcta: "Kant",
    incorrectas: ["Comte", "Bacon"]
  },
  {
    enunciado: "¿Qué práctica contemporánea integra espacio, tiempo y acción del público?",
    correcta: "Performance",
    incorrectas: ["Sfumato", "Grattage"]
  },
  {
    enunciado: "¿Qué enfoque centra su interés en el contexto histórico-social de producción y recepción?",
    correcta: "Historicismo contextual",
    incorrectas: ["Idealismo absoluto", "Atomismo lógico"]
  },
  {
    enunciado: "¿Qué función educativa del arte destaca en museos y patrimonio cultural?",
    correcta: "Mediación y alfabetización visual",
    incorrectas: ["Secreto iniciático", "Anulación del público"]
  },
  {
    enunciado: "¿Qué noción semiótica distingue entre significante y significado en la obra?",
    correcta: "Dualidad signo/significado",
    incorrectas: ["Catarsis/hamartia", "Forma/materia aristotélica"]
  },
  {
    enunciado: "¿Qué análisis de la arquitectura atiende a estructura, función y simbolismo urbano?",
    correcta: "Lectura tipológica y morfológica",
    incorrectas: ["Iconoclasia inversa", "Sinécdoque ornamental"]
  },
  {
    enunciado: "¿Qué método de autenticación y atribución usa el connoisseurship?",
    correcta: "Ojo experto y comparación estilística",
    incorrectas: ["Encuesta sociológica", "Análisis de recepción literaria"]
  },
  {
    enunciado: "¿Qué rasgo distingue el Pop Art en su crítica a la cultura de masas?",
    correcta: "Apropiación de imágenes comerciales y mediáticas",
    incorrectas: ["Ideal clásico del canon humano", "Abstracción geométrica pura"]
  },
  {
    enunciado: "¿Qué término describe obras hechas con materiales y objetos cotidianos recontextualizados?",
    correcta: "Ready-made",
    incorrectas: ["Chiaroscuro", "Impasto"]
  },
  {
    enunciado: "¿Qué objetivo tiene una lectura iconológica completa?",
    correcta: "Desvelar los significados culturales profundos",
    incorrectas: ["Limitarse al inventario de motivos", "Describir solo medidas y técnica"]
  },
  {
    enunciado: "¿Qué implica interpretar una obra desde la fenomenología de la percepción?",
    correcta: "Atender a la experiencia encarnada del ver",
    incorrectas: ["Reducirla a datos estadísticos", "Ignorar al espectador"]
  }
];
