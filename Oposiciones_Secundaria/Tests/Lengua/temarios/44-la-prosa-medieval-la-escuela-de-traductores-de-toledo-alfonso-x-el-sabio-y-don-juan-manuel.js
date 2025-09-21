// temarios/44-la-prosa-medieval-la-escuela-de-traductores-de-toledo-alfonso-x-el-sabio-y-don-juan-manuel.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué función tuvo la Escuela de Traductores de Toledo en la Edad Media?",
    correcta: "Servir de puente cultural mediante la traducción de obras árabes y griegas al latín y al castellano",
    incorrectas: [
      "Producir cantares de gesta de carácter heroico",
      "Difundir exclusivamente la poesía trovadoresca"
    ]
  },
  {
    enunciado: "¿Qué innovó la Escuela de Toledo en la práctica de la traducción?",
    correcta: "Introdujo traducciones directas al castellano como lengua de cultura",
    incorrectas: [
      "Eliminó toda influencia árabe en los textos",
      "Traducía solo al latín sin usar lengua romance"
    ]
  },
  {
    enunciado: "¿Qué materias se tradujeron en la Escuela de Toledo?",
    correcta: "Textos científicos, filosóficos, médicos, astronómicos y jurídicos",
    incorrectas: [
      "Únicamente literatura lírica y narrativa",
      "Exclusivamente tratados de retórica clásica"
    ]
  },
  {
    enunciado: "¿Quién consolidó la Escuela de Traductores en el siglo XIII?",
    correcta: "Alfonso X el Sabio",
    incorrectas: [
      "Gonzalo de Berceo",
      "Don Juan Manuel"
    ]
  },
  {
    enunciado: "¿Qué idioma adquirió prestigio cultural gracias a Alfonso X?",
    correcta: "El castellano",
    incorrectas: [
      "El catalán",
      "El hebreo"
    ]
  },
  {
    enunciado: "¿Qué obra alfonsí recogía la historia de la Península Ibérica?",
    correcta: "Estoria de España",
    incorrectas: [
      "El Conde Lucanor",
      "Cantar de Mio Cid"
    ]
  },
  {
    enunciado: "¿Qué conjunto legislativo redactó Alfonso X?",
    correcta: "Las Siete Partidas",
    incorrectas: [
      "El Fuero Juzgo",
      "La Partida Poética"
    ]
  },
  {
    enunciado: "¿Qué obra mariana en gallego-portugués promovió Alfonso X?",
    correcta: "Las Cantigas de Santa María",
    incorrectas: [
      "Los Milagros de Nuestra Señora",
      "El Libro de buen amor"
    ]
  },
  {
    enunciado: "¿Qué caracteriza el estilo de Alfonso X?",
    correcta: "Claridad expositiva, didactismo y precisión terminológica",
    incorrectas: [
      "Oscurantismo deliberado y culto excesivo",
      "Improvisación poética sin normas"
    ]
  },
  {
    enunciado: "¿Qué motivación política tuvo Alfonso X al usar el castellano?",
    correcta: "Convertirlo en lengua de Estado y de conocimiento",
    incorrectas: [
      "Desplazar el latín de la liturgia",
      "Imponerlo como única lengua de Europa"
    ]
  },
  {
    enunciado: "¿Quién fue Don Juan Manuel?",
    correcta: "Un noble castellano y escritor, sobrino de Alfonso X",
    incorrectas: [
      "Un rey de León del siglo XII",
      "Un trovador gallego del siglo XV"
    ]
  },
  {
    enunciado: "¿Cuál es la obra más célebre de Don Juan Manuel?",
    correcta: "El Conde Lucanor",
    incorrectas: [
      "El Libro de buen amor",
      "El Lapidario"
    ]
  },
  {
    enunciado: "¿Qué estructura narrativa emplea El Conde Lucanor?",
    correcta: "Cuentos ejemplares con moraleja final",
    incorrectas: [
      "Crónicas rimadas sin moraleja",
      "Tratados filosóficos en latín"
    ]
  },
  {
    enunciado: "¿Qué otras obras escribió Don Juan Manuel?",
    correcta: "Libro de los estados y Libro del caballero y del escudero",
    incorrectas: [
      "Poema de Mio Cid y Auto de los Reyes Magos",
      "General estoria y Milagros de Nuestra Señora"
    ]
  },
  {
    enunciado: "¿Qué tema predomina en la obra de Don Juan Manuel?",
    correcta: "El didactismo moral y político",
    incorrectas: [
      "La épica guerrera",
      "La lírica amorosa"
    ]
  },
  {
    enunciado: "¿Qué rasgo lingüístico distingue a Don Juan Manuel?",
    correcta: "Cuidado en el léxico y conciencia de autoría",
    incorrectas: [
      "Improvisación juglaresca",
      "Uso exclusivo del latín medieval"
    ]
  },
  {
    enunciado: "¿Qué influencia cultural se observa en Don Juan Manuel?",
    correcta: "Fuentes árabes, orientales y latinas",
    incorrectas: [
      "Exclusiva influencia germánica",
      "Solo inspiración francesa trovadoresca"
    ]
  },
  {
    enunciado: "¿Qué tono emplea Don Juan Manuel frente a Alfonso X?",
    correcta: "Más narrativo y moralizante",
    incorrectas: [
      "Exclusivamente lírico y musical",
      "Puramente científico"
    ]
  },
  {
    enunciado: "¿Qué innovación narrativa aporta El Conde Lucanor?",
    correcta: "Introducción del relato breve con marco conversacional",
    incorrectas: [
      "El uso de la épica en cuaderna vía",
      "La invención de la novela pastoril"
    ]
  },
  {
    enunciado: "¿Qué finalidad tiene el diálogo entre Lucanor y Patronio?",
    correcta: "Transmitir enseñanzas morales a través de ejemplos",
    incorrectas: [
      "Crear escenas teatrales de humor",
      "Describir batallas históricas"
    ]
  },
  {
    enunciado: "¿Qué concepto literario se fortalece con Don Juan Manuel?",
    correcta: "La conciencia de autoría individual",
    incorrectas: [
      "La autoría colectiva anónima",
      "La completa oralidad popular"
    ]
  },
  {
    enunciado: "¿Qué valor tiene la Escuela de Toledo en la historia europea?",
    correcta: "Facilitó la transmisión del saber greco-árabe a Occidente",
    incorrectas: [
      "Desarrolló exclusivamente literatura lírica",
      "Rechazó los saberes musulmanes"
    ]
  },
  {
    enunciado: "¿Qué aportó Alfonso X a la historiografía?",
    correcta: "Una visión unificada de la historia de España y del mundo",
    incorrectas: [
      "La primera novela caballeresca",
      "Los cantares de gesta anónimos"
    ]
  },
  {
    enunciado: "¿Qué obra científica compiló Alfonso X?",
    correcta: "Libros del saber de astronomía",
    incorrectas: [
      "El Libro de las armas",
      "El Ars poetica"
    ]
  },
  {
    enunciado: "¿Qué objetivo tenían las Siete Partidas?",
    correcta: "Unificar el derecho en Castilla",
    incorrectas: [
      "Exaltar la poesía trovadoresca",
      "Compilar relatos de exempla"
    ]
  },
  {
    enunciado: "¿Qué valor lingüístico tiene la obra alfonsí?",
    correcta: "Fijó una norma culta del castellano escrito",
    incorrectas: [
      "Imitó el provenzal sin cambios",
      "Ignoró la lengua romance"
    ]
  },
  {
    enunciado: "¿Qué importancia tiene Don Juan Manuel en la narrativa?",
    correcta: "Precursor de la narrativa breve con intención didáctica",
    incorrectas: [
      "Iniciador de la novela sentimental renacentista",
      "Primer dramaturgo del Siglo de Oro"
    ]
  },
  {
    enunciado: "¿Qué relación une a Alfonso X y Don Juan Manuel?",
    correcta: "Familiaridad dinástica y continuidad cultural",
    incorrectas: [
      "Rivalidad política sin conexión literaria",
      "Contemporaneidad con absoluta independencia"
    ]
  },
  {
    enunciado: "¿Qué carácter común tienen Alfonso X y Don Juan Manuel?",
    correcta: "Voluntad de enseñanza a través de la prosa castellana",
    incorrectas: [
      "Rechazo del didactismo",
      "Predominio de la lírica improvisada"
    ]
  },
  {
    enunciado: "¿Qué género cultivó principalmente Alfonso X?",
    correcta: "La historiografía y la prosa jurídica y científica",
    incorrectas: [
      "La épica de juglaría",
      "El teatro religioso"
    ]
  },
  {
    enunciado: "¿Qué género cultivó principalmente Don Juan Manuel?",
    correcta: "La narrativa breve didáctica",
    incorrectas: [
      "La lírica mariana",
      "La prosa científica"
    ]
  },
  {
    enunciado: "¿Qué valor político tiene la obra de Alfonso X?",
    correcta: "Reforzó la autoridad del monarca y la unidad jurídica",
    incorrectas: [
      "Justificó la anarquía feudal",
      "Negó el papel de la monarquía"
    ]
  },
  {
    enunciado: "¿Qué intención principal tiene la obra de Don Juan Manuel?",
    correcta: "Ofrecer consejos prácticos y morales mediante ejemplos",
    incorrectas: [
      "Exaltar lo sobrenatural y lo milagroso",
      "Cantar hazañas bélicas"
    ]
  },
  {
    enunciado: "¿Qué rasgo estilístico comparten Alfonso X y Don Juan Manuel?",
    correcta: "Lenguaje claro y voluntad didáctica",
    incorrectas: [
      "Excesiva ornamentación barroca",
      "Oscuridad expresiva buscada"
    ]
  },
  {
    enunciado: "¿Qué símbolo de modernidad encarna la prosa medieval castellana?",
    correcta: "El paso del latín al romance como lengua de cultura",
    incorrectas: [
      "El retroceso al latín medieval",
      "El predominio del hebreo bíblico"
    ]
  },
  {
    enunciado: "¿Qué continuidad establece Don Juan Manuel respecto a Alfonso X?",
    correcta: "Cultivo consciente de la prosa castellana con fines didácticos",
    incorrectas: [
      "El abandono del castellano en favor del latín",
      "El retorno a la oralidad popular"
    ]
  },
  {
    enunciado: "¿Qué dimensión adquiere la prosa medieval en la historia literaria?",
    correcta: "Antecedente directo de la prosa renacentista y moderna",
    incorrectas: [
      "Derivación marginal de la lírica provenzal",
      "Imitación de cantares épicos exclusivamente"
    ]
  },
  {
    enunciado: "¿Qué lugar ocupa la Escuela de Toledo en el contexto europeo?",
    correcta: "Centro clave de transmisión de saberes entre Oriente y Occidente",
    incorrectas: [
      "Escuela de poesía trovadoresca catalana",
      "Academia renacentista italiana"
    ]
  }
];
