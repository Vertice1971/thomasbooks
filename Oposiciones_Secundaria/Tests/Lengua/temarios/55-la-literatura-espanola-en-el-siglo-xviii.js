// temarios/55-la-literatura-espanola-en-el-siglo-xviii.js
var PREGUNTAS = [
  {
    enunciado: "¿Con qué nombre se conoce comúnmente al siglo XVIII europeo en el ámbito cultural?",
    correcta: "Siglo de las Luces o de la Ilustración",
    incorrectas: [
      "Siglo del Renacimiento",
      "Siglo del Realismo"
    ]
  },
  {
    enunciado: "¿Qué rasgo define globalmente la poética ilustrada frente al barroquismo precedente?",
    correcta: "Claridad, utilidad y didactismo",
    incorrectas: [
      "Oscuridad hermética y artificio",
      "Exaltación del irracionalismo"
    ]
  },
  {
    enunciado: "¿Qué institución se funda en 1713 y resulta clave para la normativización del español?",
    correcta: "La Real Academia Española",
    incorrectas: [
      "La Real Academia de Medicina",
      "La Real Academia de Jurisprudencia"
    ]
  },
  {
    enunciado: "¿Qué gran obra lexicográfica académica se publica a lo largo de 1726–1739?",
    correcta: "El Diccionario de autoridades",
    incorrectas: [
      "La Enciclopedia",
      "La Gramática castellana de Nebrija"
    ]
  },
  {
    enunciado: "¿Qué hecho político-religioso con fuerte impacto cultural tiene lugar en 1767?",
    correcta: "La expulsión de los jesuitas",
    incorrectas: [
      "La abolición de la Inquisición",
      "La independencia de los virreinatos americanos"
    ]
  },
  {
    enunciado: "¿Cuál es la periodización más habitual para la literatura española del XVIII?",
    correcta: "Posbarroquismo, Neoclasicismo y Prerromanticismo",
    incorrectas: [
      "Manierismo, Realismo y Vanguardias",
      "Naturalismo, Simbolismo y Novecentismo"
    ]
  },
  {
    enunciado: "¿Qué principio estético reintroduce el Neoclasicismo a través de la poética normativa?",
    correcta: "Regla, verosimilitud, decoro e imitación crítica de los clásicos",
    incorrectas: [
      "Improvisación absoluta sin normas",
      "Primacía de lo grotesco y lo aparente"
    ]
  },
  {
    enunciado: "¿Qué tendencia anuncia el Prerromanticismo en el último tercio del siglo?",
    correcta: "Mayor peso de la sensibilidad, la melancolía y lo nocturno",
    incorrectas: [
      "Regreso al conceptismo culterano del XVII",
      "Consolidación del humorismo costumbrista exclusivamente"
    ]
  },
  {
    enunciado: "¿Qué género en prosa se convierte en emblema del discurso ilustrado?",
    correcta: "El ensayo divulgativo y crítico",
    incorrectas: [
      "La novela pastoril renacentista",
      "La épica caballeresca"
    ]
  },
  {
    enunciado: "¿Qué autor encarna el impulso divulgador y antisuperticioso del primer XVIII?",
    correcta: "Benito Jerónimo Feijoo",
    incorrectas: [
      "Leandro Fernández de Moratín",
      "José Zorrilla"
    ]
  },
  {
    enunciado: "¿Qué títulos principales reúne la obra ensayística de Feijoo?",
    correcta: "Teatro crítico universal y Cartas eruditas y curiosas",
    incorrectas: [
      "Cartas marruecas y Noches lúgubres",
      "Viage de España y Fábulas literarias"
    ]
  },
  {
    enunciado: "¿Qué obra crítica formula en España la poética clasicista del siglo XVIII?",
    correcta: "La Poética de Ignacio de Luzán",
    incorrectas: [
      "El Arte nuevo de hacer comedias",
      "La Retórica de Baltasar Gracián"
    ]
  },
  {
    enunciado: "¿Qué rasgo define la prosa de José Cadalso en Cartas marruecas?",
    correcta: "Mirada comparada y crítica moral sobre la sociedad española",
    incorrectas: [
      "Relato picaresco con amos y criados",
      "Crónica novelesca de viajes fantásticos"
    ]
  },
  {
    enunciado: "¿Qué tono anuncia el prerromanticismo en Noches lúgubres de Cadalso?",
    correcta: "Melancolía, subjetividad y pathos funerario",
    incorrectas: [
      "Euforia neoclásica y sátira festiva",
      "Exotismo caballeresco idealizado"
    ]
  },
  {
    enunciado: "¿Qué figura encarna el reformismo ilustrado en economía y educación, además de escribir teatro sentimental?",
    correcta: "Gaspar Melchor de Jovellanos",
    incorrectas: [
      "Juan Pablo Forner",
      "Juan Meléndez Valdés"
    ]
  },
  {
    enunciado: "¿Qué obra teatral de Jovellanos se alinea con la sensibilidad sentimental ilustrada?",
    correcta: "El delincuente honrado",
    incorrectas: [
      "Raquel",
      "El sí de las niñas"
    ]
  },
  {
    enunciado: "¿Qué par de fabulistas ilustra el didactismo moral de la poesía dieciochesca?",
    correcta: "Iriarte y Samaniego",
    incorrectas: [
      "Góngora y Quevedo",
      "Bécquer y Campoamor"
    ]
  },
  {
    enunciado: "¿Qué rasgo comparten las Fábulas literarias de Iriarte?",
    correcta: "Reflexión metapoética y enseñanza sobre el arte de escribir",
    incorrectas: [
      "Episodios épicos mitológicos extensos",
      "Narración picaresca en primera persona"
    ]
  },
  {
    enunciado: "¿Qué tendencia lírica representa Juan Meléndez Valdés en su evolución poética?",
    correcta: "De la oda neoclásica a tonos sensibles de corte prerromántico",
    incorrectas: [
      "De la sátira barroca al conceptismo culterano",
      "Del romance viejo al epitafio medieval"
    ]
  },
  {
    enunciado: "¿Qué reforma teatral impulsa el Neoclasicismo español?",
    correcta: "Observancia de verosimilitud, decoro y función moral del teatro",
    incorrectas: [
      "Retorno a autos sacramentales como género central",
      "Desaparición del verso en favor de la prosa"
    ]
  },
  {
    enunciado: "¿Qué pieza de Leandro Fernández de Moratín satiriza el mal gusto escénico heredado?",
    correcta: "La comedia nueva o El café",
    incorrectas: [
      "El gran teatro del mundo",
      "La conjuración de Venecia"
    ]
  },
  {
    enunciado: "¿Qué conflicto central articula El sí de las niñas?",
    correcta: "Autoridad paterna, consentimiento y educación",
    incorrectas: [
      "Guerra civil y ambición cortesana",
      "Venganza de honor con duelo final"
    ]
  },
  {
    enunciado: "¿Qué autor populariza el sainete madrileño como cuadro de costumbres urbanas?",
    correcta: "Ramón de la Cruz",
    incorrectas: [
      "Nicolás Fernández de Moratín",
      "Tomás de Iriarte"
    ]
  },
  {
    enunciado: "¿Qué obra satiriza el mal gusto oratorio y la retórica vacía desde una perspectiva ilustrada?",
    correcta: "Fray Gerundio de Campazas (Isla)",
    incorrectas: [
      "El Diablo Cojuelo (Vélez de Guevara)",
      "El Criticón (Gracián)"
    ]
  },
  {
    enunciado: "¿Qué obra de Ponz recorre y valora el patrimonio artístico y cultural español con afán reformista?",
    correcta: "Viage de España",
    incorrectas: [
      "Cartas marruecas",
      "Diario de los literatos"
    ]
  },
  {
    enunciado: "¿Qué medio de difusión clave favorece el espíritu crítico y la reforma de costumbres?",
    correcta: "La prensa y los periódicos morales",
    incorrectas: [
      "Los cancioneros caballerescos",
      "Las relaciones de milagros"
    ]
  },
  {
    enunciado: "¿Qué finalidad resume el lema ilustrado de ‘enseñar deleitando’ aplicado a las letras?",
    correcta: "Finalidad educativa y moral a través del placer estético",
    incorrectas: [
      "Propaganda política sin valor literario",
      "Entretenimiento sin intención crítica"
    ]
  },
  {
    enunciado: "¿Qué rasgo estilístico se promueve en la prosa dieciochesca normativa?",
    correcta: "Sencillez sintáctica y precisión léxica",
    incorrectas: [
      "Hipérbaton sistemático y cultismos extremos",
      "Ruptura gramatical deliberada"
    ]
  },
  {
    enunciado: "¿Qué instituciones civiles promueven economía, oficios y educación práctica en el siglo XVIII?",
    correcta: "Las Sociedades Económicas de Amigos del País",
    incorrectas: [
      "Los gremios medievales de juglares",
      "Las cofradías caballerescas"
    ]
  },
  {
    enunciado: "¿Qué concepto estético organiza la crítica literaria dieciochesca frente al ‘mal gusto’?",
    correcta: "El buen gusto como criterio de corrección y medida",
    incorrectas: [
      "El preciosismo culterano",
      "El tremendismo expresionista"
    ]
  },
  {
    enunciado: "¿Qué tríada de géneros resume la reorientación literaria del XVIII?",
    correcta: "Ensayo, poesía didáctica y teatro reformado",
    incorrectas: [
      "Épica caballeresca, égloga pastoril y auto sacramental",
      "Novela bizantina, villancico y comedia de santos"
    ]
  },
  {
    enunciado: "¿Qué marco ideológico permite compatibilizar fe y razón en muchos autores españoles del XVIII?",
    correcta: "Un catolicismo ilustrado de sesgo reformista",
    incorrectas: [
      "Un deísmo militante anticlerical uniforme",
      "Un paganismo clásico sin mediaciones"
    ]
  },
  {
    enunciado: "¿Qué oposición resume la polémica teatral del siglo XVIII español?",
    correcta: "Norma clasicista y verosimilitud vs. gusto popular heredado",
    incorrectas: [
      "Prosa vs. poesía medieval",
      "Tragedia senequista vs. epopeya homérica"
    ]
  },
  {
    enunciado: "¿Qué función social se asigna con frecuencia a la literatura en el proyecto ilustrado?",
    correcta: "Contribuir a la reforma de costumbres y al bien común",
    incorrectas: [
      "Aislar al lector de la realidad social",
      "Exaltar la nobleza guerrera medieval"
    ]
  },
  {
    enunciado: "¿Qué rasgo métrico predomina en la poesía neoclásica española?",
    correcta: "Preferencia por estrofas clásicas (oda, égloga, epístola) con metro regular",
    incorrectas: [
      "Verso libre sin rima ni medida",
      "Alejandrinos pareados barrocos exclusivos"
    ]
  },
  {
    enunciado: "¿Qué relación mantiene la literatura del XVIII con la ciencia y las ‘artes útiles’?",
    correcta: "Colabora en la divulgación y la alfabetización científica",
    incorrectas: [
      "Rechaza el empirismo por inmoral",
      "Sustituye el ensayo por visiones místicas"
    ]
  },
  {
    enunciado: "¿Qué tensión ideológica recorre muchos textos ilustrados españoles?",
    correcta: "Europeización y crítica del atraso vs. defensa de tradiciones",
    incorrectas: [
      "Utopismo anarquista vs. despotismo oriental",
      "Fatalismo estoico vs. epicureísmo hedonista"
    ]
  },
  {
    enunciado: "¿Qué obra dramática de Moratín ejemplifica una comedia de educación y consentimiento?",
    correcta: "El sí de las niñas",
    incorrectas: [
      "El burlador de Sevilla",
      "La dama duende"
    ]
  },
  {
    enunciado: "¿Qué etiqueta define mejor a la literatura dieciochesca española en conjunto?",
    correcta: "Racional, normativa y pedagógica, con apertura sensible final",
    incorrectas: [
      "Anárquica, irracional y vanguardista",
      "Mística, simbólica y visionaria en bloque"
    ]
  },
  {
    enunciado: "¿Qué autor-periodista ilustra el costumbrismo breve y moral en la prensa madrileña?",
    correcta: "Clavijo y Fajardo (El Pensador)",
    incorrectas: [
      "Bretón de los Herreros (El Redactor)",
      "Clarín (La Regenta)"
    ]
  }
];
