// temarios/43-organos-y-funciones-de-nutricion-en-los-vertebrados.js
var PREGUNTAS = [
  {
    enunciado: "¿Cuál es la secuencia funcional básica del proceso digestivo en vertebrados?",
    correcta: "Ingestión → digestión → absorción → eliminación",
    incorrectas: [
      "Absorción → digestión → ingestión → eliminación",
      "Digestión → ingestión → eliminación → absorción"
    ]
  },
  {
    enunciado: "El epitelio intestinal especializado en absorción presenta:",
    correcta: "Vellosidades y microvellosidades que amplían la superficie",
    incorrectas: [
      "Cilios motiles largos en todo el yeyuno",
      "Pliegues lisos sin especializaciones"
    ]
  },
  {
    enunciado: "La amilasa salival tiene como función principal:",
    correcta: "Iniciar la hidrólisis del almidón en la cavidad oral",
    incorrectas: [
      "Hidrólisis de triglicéridos a ácidos grasos",
      "Desnaturalizar proteínas por pH ácido"
    ]
  },
  {
    enunciado: "La deglución segura en mamíferos se coordina gracias a la:",
    correcta: "Epiglotis que ocluye la laringe durante el paso del bolo",
    incorrectas: [
      "Glotis que sella el esófago",
      "Úvula que cierra el cardias"
    ]
  },
  {
    enunciado: "El peristaltismo es:",
    correcta: "Contracción coordinada de músculo liso que impulsa el bolo",
    incorrectas: [
      "Secreción enzimática del páncreas",
      "Absorción activa de glucosa"
    ]
  },
  {
    enunciado: "En el estómago, la pepsina se activa por:",
    correcta: "Bajo pH generado por HCl secretado por células parietales",
    incorrectas: [
      "Bicarbonato pancreático",
      "Sales biliares"
    ]
  },
  {
    enunciado: "El píloro regula el paso del quimo hacia:",
    correcta: "Duodeno",
    incorrectas: [
      "Yeyuno directamente",
      "Ciego"
    ]
  },
  {
    enunciado: "La bilis emulsifica lípidos y se produce en el:",
    correcta: "Hígado (almacenada en vesícula biliar en muchos vertebrados)",
    incorrectas: [
      "Páncreas",
      "Bazo"
    ]
  },
  {
    enunciado: "La función principal del bicarbonato pancreático es:",
    correcta: "Neutralizar la acidez del quimo en el duodeno",
    incorrectas: [
      "Activar pepsinógeno en el estómago",
      "Emulsionar grasas como detergente"
    ]
  },
  {
    enunciado: "La proteasa pancreática secretada como zimógeno que corta en residuos básicos es:",
    correcta: "Tripsina (a partir de tripsinógeno)",
    incorrectas: [
      "Pepsina",
      "Lisozima"
    ]
  },
  {
    enunciado: "La absorción de la mayor parte de los monosacáridos y aminoácidos ocurre en:",
    correcta: "Yeyuno",
    incorrectas: [
      "Estómago",
      "Íleon terminal preferentemente"
    ]
  },
  {
    enunciado: "El transporte de glucosa SGLT1 en enterocitos depende de:",
    correcta: "Gradiente de Na+ mantenido por la Na+/K+ ATPasa",
    incorrectas: [
      "Canales de Ca2+ voltaje-dependientes",
      "Transporte vesicular lisosomal"
    ]
  },
  {
    enunciado: "Los quilomicrones se forman en el enterocito y se vierten inicialmente a:",
    correcta: "Vasos linfáticos (lacteales) de las vellosidades",
    incorrectas: [
      "Capilares sanguíneos portales",
      "Conducto pancreático"
    ]
  },
  {
    enunciado: "La principal función del intestino grueso es:",
    correcta: "Absorción de agua y electrolitos y formación de heces",
    incorrectas: [
      "Digestión de proteínas por pepsina",
      "Emulsificación de grasas"
    ]
  },
  {
    enunciado: "La microbiota colónica en vertebrados contribuye a:",
    correcta: "Fermentación de fibras y síntesis de vitaminas (p. ej., K)",
    incorrectas: [
      "Producción de HCl gástrico",
      "Activación de tripsinógeno"
    ]
  },
  {
    enunciado: "En aves, el buche sirve principalmente para:",
    correcta: "Almacenamiento y humectación del alimento",
    incorrectas: [
      "Secreción ácida intensa",
      "Absorción de lípidos en quilomicrones"
    ]
  },
  {
    enunciado: "La molleja (ventrículo muscular) de las aves está especializada en:",
    correcta: "Trituración mecánica del alimento",
    incorrectas: [
      "Secreción de bilis",
      "Producción de enzimas pancreáticas"
    ]
  },
  {
    enunciado: "En rumiantes, la cámara donde ocurre fermentación microbiana previa es:",
    correcta: "Rumen (y retículo asociado)",
    incorrectas: [
      "Abomaso (estómago glandular)",
      "Ciego exclusivamente"
    ]
  },
  {
    enunciado: "Los productos principales de la fermentación ruminal son:",
    correcta: "Ácidos grasos volátiles (acetato, propionato, butirato) y gases",
    incorrectas: [
      "Urea y amoníaco únicamente",
      "Quilomicrones y lipoproteínas"
    ]
  },
  {
    enunciado: "Los herbívoros fermentadores de intestino posterior (caballo, conejo) destacan por:",
    correcta: "Ciego y colon desarrollados para fermentar fibras",
    incorrectas: [
      "Rumen funcional con regurgitación",
      "Estómago con pH constantemente neutro"
    ]
  },
  {
    enunciado: "El copro-fagismo en algunos lagomorfos permite:",
    correcta: "Reaprovechar nutrientes microbianos de cecotrofos",
    incorrectas: [
      "Incrementar secreción de bilis",
      "Reducir la superficie de absorción"
    ]
  },
  {
    enunciado: "En peces óseos, la válvula espiral en el intestino:",
    correcta: "Aumenta la superficie y el tiempo de tránsito para absorción",
    incorrectas: [
      "Secreta HCl como células parietales",
      "Actúa como bazo accesorio"
    ]
  },
  {
    enunciado: "Los condrictios compensan la flotabilidad principalmente con:",
    correcta: "Hígado grande rico en escualeno (aunque no es órgano digestivo)",
    incorrectas: [
      "Vejiga natatoria llena de aire",
      "Músculo rojo con mioglobina"
    ]
  },
  {
    enunciado: "En anfibios metamórficos, el sistema digestivo se adapta tras la metamorfosis porque:",
    correcta: "Cambia la dieta (de herbívora/omnívora larval a carnívora adulta)",
    incorrectas: [
      "Se pierde el intestino delgado",
      "Aparece un rumen funcional"
    ]
  },
  {
    enunciado: "El papel del hígado en el metabolismo postabsortivo incluye:",
    correcta: "Gluconeogénesis y almacenamiento/liberación de glucógeno",
    incorrectas: [
      "Síntesis de ácido clorhídrico",
      "Producción de tripsina activa"
    ]
  },
  {
    enunciado: "La colecistoquinina (CCK) se libera ante grasas y proteínas en duodeno para:",
    correcta: "Estimular contracción de vesícula biliar y secreción enzimática pancreática",
    incorrectas: [
      "Inhibir toda motilidad intestinal",
      "Aumentar secreción ácida gástrica"
    ]
  },
  {
    enunciado: "La secretina se libera por quimo ácido y su efecto principal es:",
    correcta: "Estimular la secreción pancreática rica en bicarbonato",
    incorrectas: [
      "Activar pepsinógeno a pepsina",
      "Inhibir la bilis"
    ]
  },
  {
    enunciado: "La celulosa dietética es digerida por vertebrados gracias a:",
    correcta: "Simbiontes microbianos en rumen o intestino posterior",
    incorrectas: [
      "Celulasas secretadas por el páncreas",
      "Pepsina gástrica"
    ]
  },
  {
    enunciado: "En aves, el sistema digestivo desemboca en:",
    correcta: "Cloaca (confluencia digestiva, urinaria y reproductora)",
    incorrectas: [
      "Uretra independiente con ano distinto",
      "Siringe digestiva exclusiva"
    ]
  },
  {
    enunciado: "Los carnívoros estrictos suelen presentar:",
    correcta: "Intestino relativamente corto y estómago muy ácido",
    incorrectas: [
      "Intestino muy largo con ciego enorme",
      "pH gástrico básico para neutralizar proteínas"
    ]
  },
  {
    enunciado: "La lactasa intestinal hidroliza:",
    correcta: "Lactosa a glucosa y galactosa",
    incorrectas: [
      "Sacarosa a glucosa y galactosa",
      "Maltosa a glucosa y fructosa"
    ]
  },
  {
    enunciado: "La lipasa pancreática requiere para su acción óptima:",
    correcta: "Emulsión por sales biliares y colipasa",
    incorrectas: [
      "Pepsinógeno y factor intrínseco",
      "Tripsina y carboxipeptidasa"
    ]
  },
  {
    enunciado: "El factor intrínseco gástrico es necesario para absorber:",
    correcta: "Vitamina B12 en el íleon",
    incorrectas: [
      "Vitamina C en colon",
      "Vitamina D en estómago"
    ]
  },
  {
    enunciado: "Una función del ciego en muchas especies es:",
    correcta: "Fermentación de fibras por microbiota",
    incorrectas: [
      "Secreción de HCl y pepsina",
      "Síntesis de bilis"
    ]
  },
  {
    enunciado: "La válvula ileocecal regula el paso de contenido desde:",
    correcta: "Íleon a ciego",
    incorrectas: [
      "Duodeno a yeyuno",
      "Estómago a esófago"
    ]
  },
  {
    enunciado: "La gastrina se libera ante distensión y péptidos para:",
    correcta: "Aumentar secreción ácida y motilidad gástrica",
    incorrectas: [
      "Inhibir secreción ácida",
      "Cerrar el píloro de forma permanente"
    ]
  },
  {
    enunciado: "En reptiles carnívoros, el ritmo digestivo suele ser:",
    correcta: "Lento y dependiente de la temperatura corporal",
    incorrectas: [
      "Rápido e independiente de la temperatura",
      "Idéntico al de aves granívoras"
    ]
  },
  {
    enunciado: "En peces teleósteos, los ciegos pilóricos asociados al estómago tienen como función principal:",
    correcta: "Aumentar superficie para digestión/absorción",
    incorrectas: [
      "Bombear bilis hacia el hígado",
      "Almacenar glóbulos rojos"
    ]
  },
  {
    enunciado: "Los dientes braquiodontos con cúspides aplanadas son característicos de:",
    correcta: "Omnívoros como humanos (trituración variada)",
    incorrectas: [
      "Carnívoros estrictos con carnasiales marcadas",
      "Rumiantes sin incisivos superiores"
    ]
  },
  {
    enunciado: "Un indicador de dieta herbívora en mamíferos es:",
    correcta: "Intestino largo con ciego/colon amplios",
    incorrectas: [
      "Estómago con pH >7 constante",
      "Ausencia de fermentación microbiana"
    ]
  }
];
