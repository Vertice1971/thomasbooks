var PREGUNTAS = [
  {
    enunciado: "¿Qué estudia la semántica léxica?",
    correcta: "Las relaciones de significado entre palabras y la estructura del léxico",
    incorrectas: [
      "La realización acústica de los fonemas",
      "La organización del sintagma verbal"
    ]
  },
  {
    enunciado: "¿Qué es una relación semántica?",
    correcta: "Un vínculo sistemático de significado entre dos o más palabras",
    incorrectas: [
      "Una coincidencia ortográfica accidental",
      "Una rima entre dos palabras"
    ]
  },
  {
    enunciado: "¿Qué es la hiponimia?",
    correcta: "Relación de inclusión en la que el hipónimo está contenido en el hiperónimo",
    incorrectas: [
      "Relación de oposición entre dos términos",
      "Relación de semejanza puramente fonética"
    ]
  },
  {
    enunciado: "Identifica el hiperónimo de 'manzana', 'pera' y 'naranja'.",
    correcta: "Fruta",
    incorrectas: [
      "Árbol",
      "Hortaliza"
    ]
  },
  {
    enunciado: "¿Qué son cohipónimos?",
    correcta: "Hipónimos que comparten el mismo hiperónimo",
    incorrectas: [
      "Dos sinónimos perfectos",
      "Dos homógrafos sin relación semántica"
    ]
  },
  {
    enunciado: "¿Qué es la sinonimia?",
    correcta: "Relación entre palabras de diferente forma y significado igual o muy parecido",
    incorrectas: [
      "Relación entre palabras con significados opuestos",
      "Relación entre palabras con el mismo origen etimológico"
    ]
  },
  {
    enunciado: "¿Existen sinónimos perfectos en la lengua general?",
    correcta: "Rara vez: suelen diferir en registro, connotación o uso",
    incorrectas: [
      "Siempre: toda palabra tiene un equivalente exacto",
      "Nunca: la sinonimia es imposible"
    ]
  },
  {
    enunciado: "Elige el par más cercano a la sinonimia contextual.",
    correcta: "Morir / fallecer",
    incorrectas: [
      "Mesa / mes",
      "Vaca / vaso"
    ]
  },
  {
    enunciado: "¿Qué es la polisemia?",
    correcta: "Un significante con varios significados relacionados",
    incorrectas: [
      "Dos palabras distintas con igual forma sin relación de significado",
      "Dos palabras que riman entre sí"
    ]
  },
  {
    enunciado: "Señala el caso de polisemia.",
    correcta: "Banco: asiento / entidad financiera",
    incorrectas: [
      "Vaya / valla",
      "Haya (verbo) / haya (árbol) con etimologías dispares"
    ]
  },
  {
    enunciado: "¿Qué es la homonimia?",
    correcta: "Coincidencia formal de palabras con significados no relacionados",
    incorrectas: [
      "Relación jerárquica entre hiperónimo e hipónimo",
      "Relación de gradación entre antónimos"
    ]
  },
  {
    enunciado: "¿Qué son homófonos?",
    correcta: "Palabras con igual pronunciación y escritura diferente",
    incorrectas: [
      "Palabras con igual escritura y pronunciación",
      "Palabras con distinta pronunciación y mismo significado"
    ]
  },
  {
    enunciado: "¿Qué son homógrafos?",
    correcta: "Palabras con igual escritura y pronunciación pero significados no relacionados",
    incorrectas: [
      "Palabras con distinta escritura y misma pronunciación",
      "Palabras derivadas de la misma raíz"
    ]
  },
  {
    enunciado: "¿Cómo se distingue polisemia de homonimia?",
    correcta: "En la polisemia hay vínculo semántico entre sentidos; en la homonimia no",
    incorrectas: [
      "Por el número de sílabas de las palabras",
      "Porque la polisemia siempre se escribe con guion"
    ]
  },
  {
    enunciado: "¿Qué es la antonimia?",
    correcta: "Relación de oposición de significado entre dos términos",
    incorrectas: [
      "Relación de inclusión jerárquica",
      "Relación de vecindad fonética"
    ]
  },
  {
    enunciado: "Indica un par de antónimos complementarios.",
    correcta: "Vivo / muerto",
    incorrectas: [
      "Alto / bajo",
      "Comprar / vender"
    ]
  },
  {
    enunciado: "Indica un par de antónimos graduales.",
    correcta: "Frío / caliente",
    incorrectas: [
      "Padre / hijo",
      "Cuchara / tenedor"
    ]
  },
  {
    enunciado: "Indica un par de antónimos recíprocos.",
    correcta: "Comprar / vender",
    incorrectas: [
      "Blanco / negro",
      "Gato / perro"
    ]
  },
  {
    enunciado: "¿Cuál es una prueba útil para detectar sinonimia contextual?",
    correcta: "La conmutación manteniendo sentido similar en el mismo contexto",
    incorrectas: [
      "Cambiar el orden de las sílabas",
      "Pasar la frase a voz pasiva"
    ]
  },
  {
    enunciado: "¿Qué relación semántica subyace en 'mueble' con 'silla', 'mesa', 'armario'?",
    correcta: "Hiponimia: son cohipónimos de 'mueble'",
    incorrectas: [
      "Sinonimia: significan lo mismo",
      "Antonimia: son opuestos entre sí"
    ]
  },
  {
    enunciado: "¿Qué es un campo semántico?",
    correcta: "Conjunto de palabras relacionadas por un rasgo conceptual común",
    incorrectas: [
      "Lista de palabras que riman",
      "Índice alfabético de un diccionario"
    ]
  },
  {
    enunciado: "Señala la relación en 'flor' y 'pétalo'.",
    correcta: "Meronimia/holonimia: parte–todo (relación léxica afín)",
    incorrectas: [
      "Antonimia gradual",
      "Homonimia homógrafa"
    ]
  },
  {
    enunciado: "¿Qué papel juega el contexto en la polisemia?",
    correcta: "Selecciona el sentido relevante desambiguando el significante",
    incorrectas: [
      "Elimina todos los sentidos posibles",
      "Impide comprender el significado"
    ]
  },
  {
    enunciado: "¿Qué es la especialización semántica?",
    correcta: "Cambio de sentido por restricción del significado",
    incorrectas: [
      "Cambio de sentido por ampliación",
      "Coincidencia fonética accidental"
    ]
  },
  {
    enunciado: "¿Qué es la ampliación semántica?",
    correcta: "Paso a un significado más general que abarca más referentes",
    incorrectas: [
      "Reducción del significado a un uso técnico",
      "Pérdida total del significado original"
    ]
  },
  {
    enunciado: "Identifica un caso de metáfora léxica consolidada.",
    correcta: "Ratón: animal / dispositivo informático",
    incorrectas: [
      "Libro: obra / librería",
      "Casa: hogar / inmueble por metonimia"
    ]
  },
  {
    enunciado: "Identifica un caso de metonimia.",
    correcta: "Beber una copa (el continente por el contenido)",
    incorrectas: [
      "Cielo de la boca (metáfora anatómica)",
      "Dedo anular por etimología"
    ]
  },
  {
    enunciado: "¿Qué es la antonimia direccional?",
    correcta: "Oposición por orientación contraria (subir/bajar, entrar/salir)",
    incorrectas: [
      "Oposición por complementariedad lógica",
      "Relación de inclusión jerárquica"
    ]
  },
  {
    enunciado: "¿Qué es la sinonimia denotativa?",
    correcta: "Coincidencia de significado referencial en un contexto dado",
    incorrectas: [
      "Coincidencia exclusiva de connotaciones afectivas",
      "Coincidencia de origen etimológico"
    ]
  },
  {
    enunciado: "¿Qué indica la gradabilidad en antónimos?",
    correcta: "La posibilidad de grados intermedios entre dos extremos",
    incorrectas: [
      "La imposibilidad de comparación",
      "La identidad total de significado"
    ]
  },
  {
    enunciado: "¿Qué es la polisemia radial?",
    correcta: "Organización de sentidos en torno a un núcleo prototípico",
    incorrectas: [
      "Coincidencia gráfica sin relación",
      "Dos raíces distintas con igual pronunciación"
    ]
  },
  {
    enunciado: "¿Cuál es un criterio auxiliar para distinguir homonimia etimológica?",
    correcta: "Procedencia de raíces distintas con convergencia formal",
    incorrectas: [
      "Número de sílabas coincidente",
      "Pertenencia a la misma categoría gramatical"
    ]
  },
  {
    enunciado: "En lexicografía, ¿qué implica agrupar sentidos bajo una sola entrada?",
    correcta: "Considerarlos polisémicos por compartir base semántica",
    incorrectas: [
      "Considerarlos siempre homónimos",
      "Eliminar los sentidos menos frecuentes"
    ]
  },
  {
    enunciado: "¿Qué es la pejoración semántica?",
    correcta: "Cambio de sentido hacia valores negativos",
    incorrectas: [
      "Cambio hacia valores más positivos (amelioración)",
      "Pérdida completa de significado"
    ]
  },
  {
    enunciado: "¿Qué es el blanqueamiento semántico (semantic bleaching)?",
    correcta: "Pérdida parcial de contenido léxico en usos frecuentes",
    incorrectas: [
      "Ganancia repentina de rasgos connotativos",
      "Conversión de un sustantivo en verbo por derivación"
    ]
  },
  {
    enunciado: "¿Cuál de estas parejas NO es un ejemplo de antonimia?",
    correcta: "Mesa / silla",
    incorrectas: [
      "Subir / bajar",
      "Interior / exterior"
    ]
  },
  {
    enunciado: "En 'perro' y 'animal', ¿qué relación existe?",
    correcta: "Hiponimia: 'perro' es hipónimo de 'animal'",
    incorrectas: [
      "Sinonimia",
      "Antonimia"
    ]
  },
  {
    enunciado: "¿Qué recurso didáctico favorece la comprensión de hiponimia e hiperónimo?",
    correcta: "Mapas conceptuales jerárquicos con ejemplos",
    incorrectas: [
      "Dictados de ortografía exclusivamente",
      "Rimas y juegos métricos"
    ]
  },
  {
    enunciado: "¿Qué prueba ayuda a detectar antonimia gradual?",
    correcta: "Compatibilidad con adverbios de grado (muy, bastante, poco)",
    incorrectas: [
      "Conmutación por pronombres",
      "Sustitución por hiperónimo"
    ]
  },
  {
    enunciado: "¿Qué relación es útil para construir campos semánticos en el aula?",
    correcta: "Hiponimia e hiperónimo",
    incorrectas: [
      "Homonimia homógrafa",
      "Paronomasia"
    ]
  }
];
