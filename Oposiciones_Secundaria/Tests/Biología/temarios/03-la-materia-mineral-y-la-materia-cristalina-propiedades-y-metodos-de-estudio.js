// temarios/03-la-materia-mineral-y-la-materia-cristalina-propiedades-y-metodos-de-estudio.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué es un mineral en sentido estricto?",
    correcta: "Un sólido natural, inorgánico, con composición química definida y estructura cristalina ordenada",
    incorrectas: [
      "Un compuesto orgánico producido por seres vivos",
      "Una roca formada por la mezcla de varios compuestos"
    ]
  },
  {
    enunciado: "¿Qué diferencia esencial existe entre materia cristalina y amorfa?",
    correcta: "La cristalina presenta orden interno periódico, la amorfa no",
    incorrectas: [
      "La cristalina es orgánica y la amorfa inorgánica",
      "La cristalina es siempre transparente y la amorfa opaca"
    ]
  },
  {
    enunciado: "¿Cómo se clasifican los minerales según su génesis?",
    correcta: "Singenéticos y epigenéticos",
    incorrectas: [
      "Primarios y secundarios",
      "Férreos y no metálicos"
    ]
  },
  {
    enunciado: "¿Qué tipo de enlace es predominante en los silicatos?",
    correcta: "Enlace iónico y parcialmente covalente",
    incorrectas: [
      "Enlace metálico",
      "Enlace de Van der Waals exclusivamente"
    ]
  },
  {
    enunciado: "¿Qué mide la escala de Mohs?",
    correcta: "La dureza relativa de un mineral frente al rayado",
    incorrectas: [
      "La densidad de un mineral",
      "El brillo superficial de un mineral"
    ]
  },
  {
    enunciado: "¿Qué mineral se sitúa en el valor 10 de la escala de Mohs?",
    correcta: "El diamante",
    incorrectas: [
      "El cuarzo",
      "La calcita"
    ]
  },
  {
    enunciado: "¿Qué propiedad física corresponde a la capacidad de un mineral de romperse en planos definidos?",
    correcta: "Exfoliación",
    incorrectas: [
      "Fractura concoidea",
      "Tenacidad"
    ]
  },
  {
    enunciado: "¿Qué significa la fractura concoidea en un mineral?",
    correcta: "Rotura en superficies curvas semejantes a conchas",
    incorrectas: [
      "Rotura en cubos perfectos",
      "Rotura en planos de exfoliación"
    ]
  },
  {
    enunciado: "¿Qué propiedad se mide al comparar el peso de un volumen de mineral con igual volumen de agua?",
    correcta: "Densidad relativa o peso específico",
    incorrectas: [
      "Dureza",
      "Tenacidad"
    ]
  },
  {
    enunciado: "¿Qué mineral se usa como referencia en el valor 7 de la escala de Mohs?",
    correcta: "El cuarzo",
    incorrectas: [
      "La fluorita",
      "El talco"
    ]
  },
  {
    enunciado: "¿Qué propiedad describe la resistencia de un mineral a romperse por golpes?",
    correcta: "Tenacidad",
    incorrectas: [
      "Brillo",
      "Exfoliación"
    ]
  },
  {
    enunciado: "¿Qué tipos de brillo pueden distinguirse en minerales?",
    correcta: "Metálico, vítreo, adamantino, nacarado, sedoso",
    incorrectas: [
      "Opaco, translúcido, transparente",
      "Intenso, moderado y débil"
    ]
  },
  {
    enunciado: "¿Qué mineral presenta exfoliación en láminas muy finas y flexibles?",
    correcta: "La mica",
    incorrectas: [
      "El cuarzo",
      "La magnetita"
    ]
  },
  {
    enunciado: "¿Qué mineral se emplea como patrón de densidad con valor 1?",
    correcta: "El agua",
    incorrectas: [
      "El grafito",
      "La halita"
    ]
  },
  {
    enunciado: "¿Cómo se define un cristal en mineralogía?",
    correcta: "Un cuerpo sólido limitado por caras planas que reflejan un orden interno periódico",
    incorrectas: [
      "Un agregado irregular de minerales",
      "Una roca compuesta por varios granos"
    ]
  },
  {
    enunciado: "¿Qué factores condicionan la cristalización de un mineral?",
    correcta: "Tiempo, espacio y condiciones de reposo",
    incorrectas: [
      "Exposición a la luz solar directa",
      "Presencia de microorganismos"
    ]
  },
  {
    enunciado: "¿Cuántos sistemas cristalinos se reconocen tradicionalmente?",
    correcta: "Siete",
    incorrectas: [
      "Cuatro",
      "Diez"
    ]
  },
  {
    enunciado: "¿Qué es una macla en cristalografía?",
    correcta: "Un crecimiento regular de dos o más cristales del mismo mineral compartiendo planos o ejes",
    incorrectas: [
      "Un defecto en el pulido artificial",
      "Una fractura irregular sin orientación"
    ]
  },
  {
    enunciado: "¿Qué es un hábito cristalino?",
    correcta: "La forma externa más frecuente que adoptan los cristales de un mineral",
    incorrectas: [
      "La dureza medida en Mohs",
      "La orientación magnética del cristal"
    ]
  },
  {
    enunciado: "¿Qué son los agregados cristalinos?",
    correcta: "Conjuntos de cristales que crecen agrupados formando masas",
    incorrectas: [
      "Cristales aislados con caras perfectas",
      "Inclusiones líquidas en el interior de un cristal"
    ]
  },
  {
    enunciado: "¿Qué método permite identificar minerales mediante difracción de rayos X en polvo?",
    correcta: "El método del polvo",
    incorrectas: [
      "El método del cristal giratorio",
      "El método de Laue con monocristales"
    ]
  },
  {
    enunciado: "¿Qué método de rayos X se emplea para estudiar cristales individuales de gran tamaño?",
    correcta: "El método de Laue",
    incorrectas: [
      "El método del polvo",
      "El método magnetotelúrico"
    ]
  },
  {
    enunciado: "¿Qué instrumento permite estudiar propiedades ópticas de los minerales en láminas delgadas?",
    correcta: "El microscopio petrográfico de polarización",
    incorrectas: [
      "El espectrofotómetro de masas",
      "El difractómetro de electrones"
    ]
  },
  {
    enunciado: "¿Qué propiedad óptica se estudia con láminas delgadas bajo luz polarizada cruzada?",
    correcta: "La birrefringencia",
    incorrectas: [
      "La densidad",
      "El peso específico"
    ]
  },
  {
    enunciado: "¿Qué método tradicional se emplea para obtener la composición química de un mineral?",
    correcta: "El análisis químico húmedo",
    incorrectas: [
      "La difracción de neutrones",
      "La espectrometría de masas de iones secundarios"
    ]
  },
  {
    enunciado: "¿Qué propiedad magnética es típica de la magnetita?",
    correcta: "Ferromagnetismo",
    incorrectas: [
      "Diamagnetismo",
      "Paramagnetismo débil"
    ]
  },
  {
    enunciado: "¿Qué propiedad eléctrica presentan algunos minerales como el cuarzo al ser comprimidos?",
    correcta: "Piezoelectricidad",
    incorrectas: [
      "Fotoconductividad",
      "Electronegatividad"
    ]
  },
  {
    enunciado: "¿Qué propiedad física permite diferenciar entre halita y cuarzo mediante el gusto?",
    correcta: "La solubilidad y sabor salado de la halita",
    incorrectas: [
      "El color blanco más intenso del cuarzo",
      "La densidad menor del cuarzo"
    ]
  },
  {
    enunciado: "¿Qué sistema cristalino tiene el diamante?",
    correcta: "Cúbico",
    incorrectas: [
      "Hexagonal",
      "Monoclínico"
    ]
  },
  {
    enunciado: "¿Qué mineral cristaliza en el sistema hexagonal y es el más abundante de la corteza?",
    correcta: "El cuarzo",
    incorrectas: [
      "La galena",
      "La calcita"
    ]
  },
  {
    enunciado: "¿Qué mineral es el principal recurso de aluminio y presenta dureza 9 en Mohs?",
    correcta: "El corindón",
    incorrectas: [
      "El yeso",
      "La magnetita"
    ]
  },
  {
    enunciado: "¿Qué mineral básico del grupo de los carbonatos presenta efervescencia con ácido clorhídrico diluido?",
    correcta: "La calcita",
    incorrectas: [
      "El feldespato",
      "La turmalina"
    ]
  },
  {
    enunciado: "¿Qué mineral del grupo de los sulfuros tiene fórmula PbS y brillo metálico intenso?",
    correcta: "La galena",
    incorrectas: [
      "La pirita",
      "La magnetita"
    ]
  },
  {
    enunciado: "¿Qué mineral del grupo de los óxidos es el principal recurso de hierro y tiene fórmula Fe2O3?",
    correcta: "La hematites",
    incorrectas: [
      "La ilmenita",
      "La anhidrita"
    ]
  },
  {
    enunciado: "¿Qué mineral se reconoce por su hábito fibroso y uso industrial como aislante (hoy restringido)?",
    correcta: "El asbesto o amianto",
    incorrectas: [
      "El talco",
      "La fluorita"
    ]
  },
  {
    enunciado: "¿Qué mineral es característico por su hábito cúbico perfecto y dureza 2 en Mohs?",
    correcta: "La halita",
    incorrectas: [
      "El feldespato ortosa",
      "La magnetita"
    ]
  },
  {
    enunciado: "¿Qué mineral se distingue por su alta conductividad eléctrica y uso en cables?",
    correcta: "El cobre nativo",
    incorrectas: [
      "La pirita",
      "La galena"
    ]
  },
  {
    enunciado: "¿Qué técnica moderna permite observar la estructura cristalina a escala atómica?",
    correcta: "La microscopía electrónica de transmisión",
    incorrectas: [
      "La microscopía óptica simple",
      "La refracción atmosférica"
    ]
  },
  {
    enunciado: "¿Qué aplicación práctica tiene la identificación mineralógica en geología?",
    correcta: "Permite reconocer recursos y entender procesos geológicos",
    incorrectas: [
      "Solo sirve como entretenimiento en museos",
      "Carece de utilidad práctica fuera de la química"
    ]
  }
];
