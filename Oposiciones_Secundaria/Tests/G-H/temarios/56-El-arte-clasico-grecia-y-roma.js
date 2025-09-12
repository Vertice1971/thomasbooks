// temarios/56-El-arte-clasico-grecia-y-roma.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué define el canon de Policleto en la escultura griega clásica?",
    correcta: "Un sistema de proporciones del cuerpo humano basado en módulo y equilibrio (contrapposto)",
    incorrectas: [
      "Un repertorio de reglas góticas para representar la espiritualidad",
      "La formulación de la perspectiva lineal renacentista"
    ]
  },
  {
    enunciado: "¿Cuál es el rasgo distintivo del orden dórico en la arquitectura griega?",
    correcta: "Capitel con equino y ábaco, fuste estriado sin basa y friso con triglifos y metopas",
    incorrectas: [
      "Capitel con volutas y basa moldurada característica",
      "Capitel decorado con hojas de acanto envolventes"
    ]
  },
  {
    enunciado: "¿Qué innovación constructiva permitió a los romanos cubrir grandes espacios interiores?",
    correcta: "El uso del opus caementicium junto con arco, bóveda y cúpula",
    incorrectas: [
      "La techumbre adintelada en piedra sin mortero",
      "La sustitución del arco por estructuras exclusivamente de madera"
    ]
  },
  {
    enunciado: "¿A qué divinidad estaba consagrado el Partenón de Atenas?",
    correcta: "A Atenea Parthenos, protectora de la polis",
    incorrectas: [
      "A Apolo, dios del oráculo de Delfos",
      "A Hera, diosa venerada en Olimpia"
    ]
  },
  {
    enunciado: "¿Qué escultor dirigió el programa escultórico del Partenón?",
    correcta: "Fidias",
    incorrectas: [
      "Mirón",
      "Lisipo"
    ]
  },
  {
    enunciado: "¿Qué obra se atribuye a Mirón por su estudio del movimiento?",
    correcta: "El Discóbolo",
    incorrectas: [
      "El Doríforo",
      "Hermes con Dioniso"
    ]
  },
  {
    enunciado: "¿A qué periodo corresponde el llamado 'estilo severo' de la escultura griega?",
    correcta: "Al periodo c. 480–450 a. C., transición del arcaico al clásico",
    incorrectas: [
      "Al periodo 650–600 a. C., pleno arcaísmo temprano",
      "Al periodo 350–300 a. C., transición al helenismo"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a los kouroi en el arte griego arcaico?",
    correcta: "Estatuas masculinas desnudas, frontales, de bulto redondo y función votiva o funeraria",
    incorrectas: [
      "Figuras femeninas veladas llamadas korai",
      "Retratos veristas de magistrados romanos"
    ]
  },
  {
    enunciado: "¿Qué rasgo define el periodo helenístico en la escultura griega?",
    correcta: "El pathos teatral, el dinamismo y el realismo expresivo",
    incorrectas: [
      "La rigidez frontal con sonrisa arcaica",
      "La ausencia de emoción y la abstracción geométrica"
    ]
  },
  {
    enunciado: "¿Qué edificio romano ilustra una gran cúpula casetonada sobre espacio centralizado?",
    correcta: "El Panteón de Roma",
    incorrectas: [
      "El Partenón de Atenas",
      "El Teatro de Epidauro"
    ]
  },
  {
    enunciado: "¿Cuál era la función principal del anfiteatro en Roma?",
    correcta: "Alojar espectáculos públicos como luchas de gladiadores y venationes",
    incorrectas: [
      "Celebrar exclusivamente ritos religiosos cívicos",
      "Alojar debates legislativos de la asamblea ciudadana"
    ]
  },
  {
    enunciado: "En la arquitectura romana, ¿qué se entiende por órdenes adosados?",
    correcta: "Columnas o semicolumnas aplicadas al muro con función decorativa",
    incorrectas: [
      "Columnas exentas con función estructural exclusiva",
      "Pilares de madera provisionales para encofrados"
    ]
  },
  {
    enunciado: "¿Qué caracteriza el retrato romano de la República?",
    correcta: "El verismo acentuado con arrugas y rasgos individualizados",
    incorrectas: [
      "La idealización juvenil de modelos divinizados",
      "La adopción de máscaras funerarias egipcias"
    ]
  },
  {
    enunciado: "¿Cuál de los siguientes NO es un estilo de la pintura pompeyana?",
    correcta: "El estilo gótico",
    incorrectas: [
      "El estilo arquitectónico (II)",
      "El estilo ornamental (III)"
    ]
  },
  {
    enunciado: "¿Qué monumento romano narra en relieve continuo campañas militares?",
    correcta: "La Columna de Trajano",
    incorrectas: [
      "El Ara Pacis de Augusto",
      "La Puerta de Ishtar de Babilonia"
    ]
  },
  {
    enunciado: "¿Qué es la entasis en las columnas griegas?",
    correcta: "El ligero abombamiento del fuste para corregir efectos ópticos",
    incorrectas: [
      "El ensanchamiento del capitel para soportar más carga",
      "La inclinación del estilóbato para evacuar aguas"
    ]
  },
  {
    enunciado: "¿Qué partes definen el teatro griego clásico?",
    correcta: "Cávea en ladera, orchestra circular y skené como fondo escénico",
    incorrectas: [
      "Pista oval con carceres para carreras",
      "Arena circular rodeada por graderío cerrado"
    ]
  },
  {
    enunciado: "¿Qué rasgo urbanístico distingue a muchas ciudades romanas?",
    correcta: "La trama ortogonal con cardo y decumanus y un foro central",
    incorrectas: [
      "El trazado radial propio del barroco",
      "La planta orgánica típica de aldeas medievales"
    ]
  },
  {
    enunciado: "¿Cuál era la función esencial de los acueductos romanos?",
    correcta: "Conducir agua por gravedad desde fuentes hasta la ciudad",
    incorrectas: [
      "Servir de muralla defensiva",
      "Alojar procesiones religiosas en su interior"
    ]
  },
  {
    enunciado: "¿Qué es un tholos en el contexto griego clásico?",
    correcta: "Un templo o edificio de planta circular rodeado de columnas",
    incorrectas: [
      "Un templo de cella rectangular sin pórtico",
      "Un palacio fortificado de planta cuadrada"
    ]
  },
  {
    enunciado: "¿Qué material fue habitual en originales escultóricos griegos hoy perdidos?",
    correcta: "El bronce a la cera perdida, conocido a través de copias romanas en mármol",
    incorrectas: [
      "El hierro forjado como soporte principal",
      "El yeso policromado como material definitivo"
    ]
  },
  {
    enunciado: "¿Qué es el peristilo en una domus romana?",
    correcta: "Un patio interior columnado que organiza la vivienda",
    incorrectas: [
      "Un corredor subterráneo de uso militar",
      "Una torre de vigilancia adosada a la vivienda"
    ]
  },
  {
    enunciado: "¿Qué diferencia tipológica presenta el templo romano respecto al griego períptero?",
    correcta: "Se alza sobre podio con escalinata frontal y enfatiza la fachada",
    incorrectas: [
      "Se rodea de columnas accesibles por todo el perímetro",
      "Renuncia al pórtico y a la cella en favor de una planta basilical"
    ]
  },
  {
    enunciado: "¿Cuál de los siguientes es un arco de triunfo romano con relieves conmemorativos?",
    correcta: "El Arco de Tito en Roma",
    incorrectas: [
      "La Puerta de Alcalá en Madrid",
      "El Arco del Triunfo de París"
    ]
  },
  {
    enunciado: "¿Qué motivos son frecuentes en mosaicos domésticos romanos?",
    correcta: "Escenas mitológicas y cinegéticas, además de motivos geométricos",
    incorrectas: [
      "Iconografía exclusivamente cristiana desde el siglo II a. C.",
      "Inscripciones en escritura cuneiforme asiria"
    ]
  },
  {
    enunciado: "¿Qué escultor introdujo un canon más esbelto (aprox. 1:8) en la Grecia clásica tardía?",
    correcta: "Lisipo",
    incorrectas: [
      "Policleto",
      "Fidias"
    ]
  },
  {
    enunciado: "¿Qué es el contrapposto en la escultura clásica?",
    correcta: "La distribución del peso en una pierna con ejes de caderas y hombros opuestos",
    incorrectas: [
      "La frontalidad rígida y completamente simétrica",
      "La torsión serpentinata propia del manierismo"
    ]
  },
  {
    enunciado: "¿Qué teatro griego es célebre por su acústica excepcional?",
    correcta: "El Teatro de Epidauro",
    incorrectas: [
      "El Teatro de Mileto",
      "El Teatro de Mérida"
    ]
  },
  {
    enunciado: "¿Cuál es la tríada vitruviana para valorar la arquitectura?",
    correcta: "Firmitas, utilitas y venustas",
    incorrectas: [
      "Veritas, bonitas y pulchritudo",
      "Fides, spes y caritas"
    ]
  },
  {
    enunciado: "¿Qué era la basílica en el contexto urbano romano?",
    correcta: "Un edificio civil para administración de justicia y actividades comerciales",
    incorrectas: [
      "Una iglesia cristiana con nave y ábsides desde su origen",
      "Un templo funerario pagano destinado a piras"
    ]
  },
  {
    enunciado: "¿Qué grupo escultórico helenístico expresa con máxima intensidad el drama y el dolor?",
    correcta: "El Grupo del Laocoonte",
    incorrectas: [
      "El Discóbolo",
      "La Kore del Peplo"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al llamado 'estilo severo' frente al arcaísmo?",
    correcta: "Mayor naturalismo corporal y sobriedad expresiva sin sonrisa arcaica",
    incorrectas: [
      "Rigidez, frontalidad absoluta y sonrisa arcaica",
      "Abstracción geométrica sin referencias humanas"
    ]
  },
  {
    enunciado: "¿Qué se ha demostrado respecto al color en el mundo clásico grecorromano?",
    correcta: "La existencia de polícromía en arquitectura y escultura mediante evidencias arqueométricas",
    incorrectas: [
      "La prohibición del color por ley en Atenas clásica",
      "La pureza blanca incolora como norma estética intocable"
    ]
  },
  {
    enunciado: "¿Qué caracteriza el retrato imperial de época de Augusto?",
    correcta: "La idealización clasicista al servicio de un mensaje político",
    incorrectas: [
      "La caricatura grotesca de los rasgos",
      "La abstracción cúbica sin referencia natural"
    ]
  },
  {
    enunciado: "¿Qué es el opus reticulatum en la construcción romana?",
    correcta: "Un aparejo mural con piezas en forma de rombos formando una malla",
    incorrectas: [
      "Un pavimento musivo bicolor en blanco y negro",
      "Una técnica de pintura al fresco con veladuras"
    ]
  },
  {
    enunciado: "¿Qué diferencia estructural media entre teatro griego y teatro romano?",
    correcta: "El griego aprovecha la ladera natural; el romano es una construcción exenta con cávea sobre bóvedas",
    incorrectas: [
      "Ambos son idénticos y siempre se excavaron en laderas",
      "El griego es cerrado y el romano siempre carece de escena"
    ]
  },
  {
    enunciado: "Además de conmemorar, ¿qué otra función tenía la Columna de Trajano?",
    correcta: "Servía de pedestal para una estatua y alojaba una escalera helicoidal interior",
    incorrectas: [
      "Conducía agua como un acueducto en altura",
      "Funcionaba como faro portuario en el Tíber"
    ]
  },
  {
    enunciado: "¿Cómo se define la domus en la vivienda romana?",
    correcta: "Una casa unifamiliar urbana organizada en torno a atrio y peristilo",
    incorrectas: [
      "Un bloque de alquiler de varias plantas llamado insula",
      "Una explotación rural aislada conocida como villa rustica"
    ]
  },
  {
    enunciado: "¿En qué ciudad se emplaza el Ara Pacis, altar con relieves augústeos?",
    correcta: "En Roma, junto al Mausoleo de Augusto",
    incorrectas: [
      "En Atenas, junto a la Acrópolis",
      "En Pompeya, dentro de la Casa del Fauno"
    ]
  },
  {
    enunciado: "¿Qué relación mantuvo Roma con los modelos escultóricos griegos?",
    correcta: "Los copió y difundió, integrándolos en su propia estética y propaganda",
    incorrectas: [
      "Los prohibió por ley por considerarlos decadentes",
      "Los ignoró por completo por falta de interés"
    ]
  }
];
