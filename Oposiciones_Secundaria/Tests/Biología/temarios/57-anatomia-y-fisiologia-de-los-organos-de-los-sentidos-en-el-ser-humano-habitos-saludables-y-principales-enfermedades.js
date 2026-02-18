// temarios/57-anatomia-y-fisiologia-de-los-organos-de-los-sentidos-en-el-ser-humano-habitos-saludables-y-principales-enfermedades.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué función general comparten los órganos de los sentidos en el ser humano?",
    correcta: "Transducir estímulos físicos o químicos en señales nerviosas interpretables por el sistema nervioso",
    incorrectas: [
      "Producir hormonas de acción prolongada para todo el organismo",
      "Almacenar energía química en forma de glucógeno para uso inmediato"
    ]
  },
  {
    enunciado: "¿Cómo se denomina el proceso por el que un receptor convierte un estímulo en potenciales de acción?",
    correcta: "Transducción sensorial",
    incorrectas: [
      "Homeostasis tisular",
      "Sumación motora"
    ]
  },
  {
    enunciado: "¿Cuál es la clasificación correcta de los receptores según el tipo de estímulo?",
    correcta: "Mecanorreceptores, termorreceptores, fotorreceptores, quimiorreceptores y nociceptores",
    incorrectas: [
      "Exteroceptores, interoceptores y propioceptores",
      "Somáticos, viscerales y autonómicos"
    ]
  },
  {
    enunciado: "¿Qué receptores cutáneos permiten la discriminación táctil fina y vibración de alta frecuencia?",
    correcta: "Corpúsculos de Pacini y de Meissner",
    incorrectas: [
      "Corpúsculos de Ruffini y terminaciones de Merkel exclusivamente",
      "Terminaciones nerviosas libres exclusivamente"
    ]
  },
  {
    enunciado: "¿Cuál es la capa más externa de la piel humana?",
    correcta: "Epidermis",
    incorrectas: [
      "Dermis",
      "Hipodermis"
    ]
  },
  {
    enunciado: "¿Qué estructura del oído amplifica la vibración sonora y la transmite a la ventana oval?",
    correcta: "Cadena de huesecillos (martillo, yunque y estribo)",
    incorrectas: [
      "Canales semicirculares",
      "Trompa de Eustaquio"
    ]
  },
  {
    enunciado: "¿Dónde se localiza el órgano de Corti responsable de la transducción auditiva?",
    correcta: "En la cóclea del oído interno, sobre la membrana basilar",
    incorrectas: [
      "En el tímpano del oído medio",
      "En el pabellón auricular del oído externo"
    ]
  },
  {
    enunciado: "¿Qué estructura detecta aceleraciones angulares de la cabeza para el equilibrio?",
    correcta: "Canales semicirculares",
    incorrectas: [
      "Utrículo y sáculo",
      "Ventana redonda"
    ]
  },
  {
    enunciado: "¿Qué estructuras detectan aceleraciones lineales y la posición estática de la cabeza?",
    correcta: "Utrículo y sáculo",
    incorrectas: [
      "Canales semicirculares",
      "Martillo y yunque"
    ]
  },
  {
    enunciado: "¿Cuál es la función principal de las células ciliadas internas en la cóclea?",
    correcta: "Transformar el movimiento de la membrana basilar en señales nerviosas auditivas",
    incorrectas: [
      "Lubricar el oído medio mediante secreciones mucosas",
      "Regular la presión del oído externo durante cambios de altitud"
    ]
  },
  {
    enunciado: "¿Qué vía nerviosa conduce la información auditiva hacia el encéfalo?",
    correcta: "Nervio coclear hacia núcleos del tronco y corteza temporal",
    incorrectas: [
      "Nervio trigémino hacia corteza frontal",
      "Nervio óptico hacia corteza occipital"
    ]
  },
  {
    enunciado: "¿Cuál es el conjunto de sabores básicos reconocido clásicamente en el gusto humano?",
    correcta: "Dulce, salado, ácido, amargo y umami",
    incorrectas: [
      "Dulce, metálico, oleoso, picante y umami",
      "Ácido, alcalino, neutro, dulce y amargo"
    ]
  },
  {
    enunciado: "¿Dónde se encuentran las yemas o botones gustativos responsables de la transducción del gusto?",
    correcta: "En las papilas fungiformes, foliadas y caliciformes de la lengua",
    incorrectas: [
      "Exclusivamente en las papilas filiformes",
      "Solo en el epitelio del paladar blando"
    ]
  },
  {
    enunciado: "¿Qué tipo celular inicia la señal olfativa en la mucosa nasal?",
    correcta: "Neuronas bipolares olfativas con cilios quimiosensibles",
    incorrectas: [
      "Células sustentaculares secretoras",
      "Células de Schwann del nervio olfatorio"
    ]
  },
  {
    enunciado: "¿Qué estructura encefálica recibe primero la información olfativa tras atravesar la lámina cribosa?",
    correcta: "Bulbo olfatorio",
    incorrectas: [
      "Hipotálamo",
      "Tálamo (como primera estación obligada)"
    ]
  },
  {
    enunciado: "¿Qué papel desempeña la córnea en el sistema visual?",
    correcta: "Es el principal elemento refractivo que contribuye al enfoque de la imagen",
    incorrectas: [
      "Controla la cantidad de luz mediante contracción muscular",
      "Genera impulsos nerviosos visuales en respuesta a la luz"
    ]
  },
  {
    enunciado: "¿Cuál es la función del cristalino?",
    correcta: "Acomodar el enfoque variando su curvatura para ver a distintas distancias",
    incorrectas: [
      "Regular el diámetro pupilar",
      "Producir humor vítreo de forma continua"
    ]
  },
  {
    enunciado: "¿Qué fotorreceptor es más sensible a baja luminosidad y no diferencia colores?",
    correcta: "El bastón",
    incorrectas: [
      "El cono L (rojo)",
      "El cono S (azul)"
    ]
  },
  {
    enunciado: "¿Qué región de la retina proporciona la mayor agudeza visual y visión en color detallada?",
    correcta: "Fóvea central de la mácula",
    incorrectas: [
      "Disco óptico o papila",
      "Periferia retiniana cercana a la ora serrata"
    ]
  },
  {
    enunciado: "¿Cómo se denomina el punto ciego fisiológico del campo visual?",
    correcta: "Disco óptico, donde emergen axones sin fotorreceptores",
    incorrectas: [
      "Fóvea, con alta densidad de conos",
      "Mácula, con predominio de bastones"
    ]
  },
  {
    enunciado: "¿Qué defecto de refracción impide enfocar correctamente los objetos lejanos en la retina?",
    correcta: "Miopía",
    incorrectas: [
      "Hipermetropía",
      "Astigmatismo exclusivamente"
    ]
  },
  {
    enunciado: "¿Qué patología ocular cursa con aumento de la presión intraocular y daño progresivo del nervio óptico?",
    correcta: "Glaucoma",
    incorrectas: [
      "Cataratas",
      "Daltonismo"
    ]
  },
  {
    enunciado: "¿Qué condición visual se debe a la opacificación progresiva del cristalino?",
    correcta: "Cataratas",
    incorrectas: [
      "Degeneración macular asociada a la edad",
      "Retinopatía diabética"
    ]
  },
  {
    enunciado: "¿Cómo se denomina la alteración congénita o hereditaria que dificulta diferenciar ciertos colores?",
    correcta: "Discromatopsia o daltonismo",
    incorrectas: [
      "Presbicia",
      "Nictalopía"
    ]
  },
  {
    enunciado: "¿Qué medida previene la pérdida auditiva inducida por ruido?",
    correcta: "Uso de protectores y limitar la exposición a intensidades elevadas",
    incorrectas: [
      "Introducir hisopos en el conducto auditivo con frecuencia",
      "Escuchar música con auriculares al máximo para habituarse"
    ]
  },
  {
    enunciado: "¿Qué enfermedad del oído interno cursa con vértigo recurrente, acúfenos e hipoacusia fluctuante?",
    correcta: "Enfermedad de Ménière",
    incorrectas: [
      "Otitis externa difusa",
      "Otoesclerosis exclusiva del estribo sin vértigo"
    ]
  },
  {
    enunciado: "¿Qué hábito favorece la salud ocular a la hora de estudiar con pantallas?",
    correcta: "Regla 20-20-20 y parpadeo frecuente para evitar sequedad",
    incorrectas: [
      "Exposición continua sin pausas con luz ambiental mínima",
      "Colocar la pantalla muy cerca para aumentar el detalle"
    ]
  },
  {
    enunciado: "¿Qué vitamina es esencial para la función normal de los fotorreceptores y la visión nocturna?",
    correcta: "Vitamina A",
    incorrectas: [
      "Vitamina K",
      "Vitamina B12"
    ]
  },
  {
    enunciado: "¿Qué estructura regula la cantidad de luz que entra en el ojo?",
    correcta: "El iris, ajustando el diámetro pupilar",
    incorrectas: [
      "La coroides, cambiando su pigmentación",
      "El nervio óptico, contrayendo la pupila directamente"
    ]
  },
  {
    enunciado: "¿Qué prueba objetiva evalúa la función auditiva midiendo respuestas del tronco encefálico?",
    correcta: "Potenciales evocados auditivos",
    incorrectas: [
      "Campimetría por confrontación",
      "Test de Ishihara"
    ]
  },
  {
    enunciado: "¿Qué término describe la pérdida total del olfato?",
    correcta: "Anosmia",
    incorrectas: [
      "Hiposmia",
      "Disgeusia"
    ]
  },
  {
    enunciado: "¿Qué estructura mantiene la presión y la forma del globo ocular en la cámara posterior?",
    correcta: "Humor vítreo",
    incorrectas: [
      "Humor acuoso exclusivamente",
      "Membrana timpánica"
    ]
  },
  {
    enunciado: "¿Qué células fotorreceptoras contienen opsinas específicas para la visión en color?",
    correcta: "Conos",
    incorrectas: [
      "Bastones",
      "Células ganglionares intrínsecamente fotosensibles como principal vía cromática"
    ]
  },
  {
    enunciado: "¿Qué maniobra ayuda a igualar presiones entre oído medio y nasofaringe durante cambios de altitud?",
    correcta: "Apertura de la trompa de Eustaquio mediante deglución o bostezo",
    incorrectas: [
      "Compresión permanente del pabellón auricular",
      "Colocación de tapones rígidos para impedir el paso de aire"
    ]
  },
  {
    enunciado: "¿Qué alteración del gusto puede aparecer tras infecciones respiratorias o uso de ciertos fármacos?",
    correcta: "Disgeusia",
    incorrectas: [
      "Agnosia visual",
      "Anacusia"
    ]
  },
  {
    enunciado: "¿Qué medida higiénica es correcta para el cuidado del oído externo?",
    correcta: "Limpiar solo el pabellón y la entrada del conducto sin introducir objetos",
    incorrectas: [
      "Introducir bastoncillos profundamente para retirar cerumen",
      "Utilizar peróxido concentrado sin indicación profesional"
    ]
  },
  {
    enunciado: "¿Qué hábito cotidiano reduce el riesgo de degeneración macular asociada a la edad?",
    correcta: "No fumar y mantener dieta rica en antioxidantes y omega-3",
    incorrectas: [
      "Exposición solar intensa sin protección ocular",
      "Dieta hipercalórica con grasas trans"
    ]
  },
  {
    enunciado: "¿Qué parámetro describe el tono de un sonido percibido por el oído humano?",
    correcta: "La frecuencia de la onda sonora",
    incorrectas: [
      "La amplitud exclusivamente",
      "La fase exclusivamente"
    ]
  },
  {
    enunciado: "¿Cuál es el principal riesgo de uso prolongado y elevado de auriculares intraurales?",
    correcta: "Hipoacusia neurosensorial inducida por ruido",
    incorrectas: [
      "Otitis media por acumulación de moco",
      "Anosmia por daño en neuronas olfativas"
    ]
  },
  {
    enunciado: "¿Qué afirmación describe correctamente la integración multisensorial del sabor?",
    correcta: "El sabor percibido combina señales gustativas, olfativas y somatosensoriales orales",
    incorrectas: [
      "El sabor depende únicamente de los receptores gustativos de la lengua",
      "El olfato retronasal inhibe la percepción del gusto por completo"
    ]
  }
];
