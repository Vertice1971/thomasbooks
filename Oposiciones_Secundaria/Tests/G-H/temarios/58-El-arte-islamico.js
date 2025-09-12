// temarios/58-El-arte-islamico.js
var PREGUNTAS = [
  {
    enunciado: "¿Cuándo surge el arte islámico y qué ámbito geográfico abarca en sus primeras centurias?",
    correcta: "Surge en el siglo VII y se expande desde Al-Ándalus hasta la India",
    incorrectas: ["Surge en el siglo V y se limita a Arabia y Mesopotamia", "Surge en el siglo IX y se restringe al Magreb"]
  },
  {
    enunciado: "¿Qué dinastía califal occidental está asociada al esplendor de Córdoba?",
    correcta: "Omeyas de Córdoba (Califato 929–1031)",
    incorrectas: ["Abasíes de Bagdad", "Safávidas de Isfahán"]
  },
  {
    enunciado: "¿Qué principio condiciona la producción visual en contextos religiosos islámicos?",
    correcta: "Aniconismo",
    incorrectas: ["Horror vacui", "Naturalismo anatómico"]
  },
  {
    enunciado: "¿Qué elemento se considera la forma artística más prestigiosa en el arte islámico?",
    correcta: "La caligrafía árabe",
    incorrectas: ["La escultura exenta en mármol", "La pintura al óleo sobre lienzo"]
  },
  {
    enunciado: "¿Qué rasgo geométrico frecuente simboliza la infinitud divina?",
    correcta: "Los patrones geométricos repetitivos",
    incorrectas: ["El uso del claroscuro", "El sfumato renacentista"]
  },
  {
    enunciado: "¿Cómo se denomina el motivo vegetal estilizado característico del ornamento islámico?",
    correcta: "Ataurique o arabesco",
    incorrectas: ["Acanthus corintio", "Horror vacui románico"]
  },
  {
    enunciado: "¿Cuál de estos edificios NO es propio de la arquitectura islámica?",
    correcta: "Basílicas de planta cruz griega con iconostasio",
    incorrectas: ["Mezquitas, madrazas y mausoleos", "Palacios y baños (hammam)"]
  },
  {
    enunciado: "¿Qué elemento indica el muro de la qibla en una mezquita?",
    correcta: "El mihrab",
    incorrectas: ["El minbar", "El sahn"]
  },
  {
    enunciado: "¿Qué es el minbar?",
    correcta: "El púlpito desde el que se pronuncia la jutba",
    incorrectas: ["La fuente de abluciones", "La torre de llamada a la oración"]
  },
  {
    enunciado: "¿Qué tipo de arco es emblemático del arte hispanomusulmán y visigodo?",
    correcta: "Arco de herradura",
    incorrectas: ["Arco apuntado Tudor", "Arco triunfal de medio punto romano con entablamento"]
  },
  {
    enunciado: "¿Qué dinastía oriental consolida el esquema de mezquita de cuatro iwanes?",
    correcta: "Los selyúcidas",
    incorrectas: ["Los omeyas de Damasco", "Los otomanos"]
  },
  {
    enunciado: "¿Qué técnica de bóvedas y cúpulas facetadas es característica del ornamento tectónico islámico?",
    correcta: "Mocárabes (muqarnas)",
    incorrectas: ["Casetones a la romana", "Bóveda de plementería con arbotantes"]
  },
  {
    enunciado: "¿Cuál es el gran santuario omeya en Jerusalén célebre por su cúpula y epigrafía?",
    correcta: "La Cúpula de la Roca",
    incorrectas: ["La Mezquita Azul", "La Madraza de Ben Youssef"]
  },
  {
    enunciado: "¿Qué mezquita califal peninsular destaca por sus ampliaciones y bosque de columnas?",
    correcta: "La Mezquita Aljama de Córdoba",
    incorrectas: ["La Mezquita de Ibn Tulun (El Cairo)", "La Gran Mezquita de Samarra"]
  },
  {
    enunciado: "¿Qué conjunto palatino omeya en Al-Ándalus simboliza el poder califal del siglo X?",
    correcta: "Medina Azahara",
    incorrectas: ["Topkapi", "Al-Qarawiyyin"]
  },
  {
    enunciado: "¿Qué dinastías beréberes introducen la red sebka y potentes alminares en la Península?",
    correcta: "Almorávides y almohades",
    incorrectas: ["Fatimíes y ayubíes", "Gaznavíes y gúridas"]
  },
  {
    enunciado: "¿Qué torre-alminar almohade se conserva como campanario en Sevilla?",
    correcta: "La Giralda",
    incorrectas: ["La Kutubía de Marrakech", "La Torre Hasan de Rabat"]
  },
  {
    enunciado: "¿Qué dinastía peninsular crea el complejo palatino de la Alhambra?",
    correcta: "Los nazaríes de Granada",
    incorrectas: ["Los abasíes de Bagdad", "Los mamelucos de El Cairo"]
  },
  {
    enunciado: "¿Qué materiales y técnicas de revestimiento son habituales en interiores islámicos occidentales?",
    correcta: "Yeserías, alicatados y azulejería",
    incorrectas: ["Mármol policromado con intarsia a la romana", "Sillería vista sin enlucidos ni color"]
  },
  {
    enunciado: "¿Qué escritura solemne de trazos gruesos domina en epigrafía monumental temprana?",
    correcta: "Cúfica",
    incorrectas: ["Gótica textura", "Carolina"]
  },
  {
    enunciado: "¿Qué estilo caligráfico cursivo se asocia a la copia de manuscritos coránicos?",
    correcta: "Nasjí",
    incorrectas: ["Humanística", "Uncial"]
  },
  {
    enunciado: "¿Qué obra islámica oriental se asocia a cúpulas y plazas de gran escala en el siglo XVII?",
    correcta: "El conjunto de Isfahán (periodo safávida)",
    incorrectas: ["La Gran Mezquita de Kairuán (siglo IX)", "La Ciudadela de Alepo (periodo ayubí)"]
  },
  {
    enunciado: "¿Qué arquitecto otomano elevó la cúpula como elemento central en Estambul?",
    correcta: "Sinan",
    incorrectas: ["Al-Wasití", "Al-Jazari"]
  },
  {
    enunciado: "¿Qué monumento mogol se considera culmen funerario de filiación islámica en la India?",
    correcta: "El Taj Mahal",
    incorrectas: ["El Qutb Minar", "Fatehpur Sikri (Diwan-i-Khas)"]
  },
  {
    enunciado: "¿Qué género escultórico es minoritario en contextos religiosos islámicos?",
    correcta: "La escultura exenta figurativa",
    incorrectas: ["El relieve decorativo en estuco", "La talla epigráfica"]
  },
  {
    enunciado: "¿Qué artes decorativas alcanzan gran desarrollo en el mundo islámico?",
    correcta: "Cerámica, metalistería y textiles",
    incorrectas: ["Vidrieras emplomadas y tapices de gobelino exclusivamente", "Marquetería en nácar como único soporte"]
  },
  {
    enunciado: "¿Qué técnica cerámica hispanomusulmana se caracteriza por su brillo metálico?",
    correcta: "Loza dorada",
    incorrectas: ["Engobe negro etrusco", "Porcelana biscuit"]
  },
  {
    enunciado: "¿Qué marfil omeya célebre ilustra la calidad del lujo cortesano?",
    correcta: "La pyxis de Al-Mughira",
    incorrectas: ["El sitzendorf de Meissen", "El díptico Barberini"]
  },
  {
    enunciado: "¿Qué ámbitos cultivan la miniatura figurativa con mayor libertad en el islam?",
    correcta: "Cortes persas y mogolas",
    incorrectas: ["Mezquitas magrebíes", "Zawiyas rurales andalusíes"]
  },
  {
    enunciado: "¿Qué epopeya persa se ilustró profusamente en manuscritos de lujo?",
    correcta: "El Shahnameh",
    incorrectas: ["Las Mil y Una Noches en su versión coránica", "El Ramayana como corpus islámico canónico"]
  },
  {
    enunciado: "¿Cuál es la finalidad principal de la decoración en arquitectura islámica sagrada?",
    correcta: "Manifestar la presencia divina sin recurrir a la imagen figurativa",
    incorrectas: ["Imitar la naturaleza con verismo", "Recrear escenas mitológicas grecorromanas"]
  },
  {
    enunciado: "¿Qué función política cumple el arte islámico en manos de califas y sultanes?",
    correcta: "Legitimar y visualizar el poder",
    incorrectas: ["Neutralizar toda referencia al gobernante", "Sustituir la ley religiosa por la costumbre local"]
  },
  {
    enunciado: "¿Qué tradición previa influyó en el arco de herradura peninsular?",
    correcta: "La visigoda",
    incorrectas: ["La fenicia clásica", "La amerindia precolombina"]
  },
  {
    enunciado: "¿Qué rasgo comparte el arte islámico pese a su diversidad geográfica?",
    correcta: "Unidad cultural en torno al árabe y al Islam",
    incorrectas: ["Aislamiento radical entre regiones", "Supremacía de la escultura monumental"]
  },
  {
    enunciado: "¿Qué espacio abierto pavimentado con fuente suele articular las mezquitas?",
    correcta: "El sahn (patio)",
    incorrectas: ["El deambulatorio con girola", "El atrio basilical con nártex cristiano"]
  },
  {
    enunciado: "¿Qué minarete helicoidal pertenece a la arquitectura abasí?",
    correcta: "La alminar Malwiya de Samarra",
    incorrectas: ["El minarete de Jam (Gur)", "La Torre Inclinada de Isfahán"]
  },
  {
    enunciado: "¿Qué recurso ornamental geométrico magrebí logra superficies continuas de teselas?",
    correcta: "Zellige/alicatado",
    incorrectas: ["Mármol opus sectile romano", "Taracea mudéjar exclusivamente en madera"]
  },
  {
    enunciado: "¿Qué elemento define la dirección de la oración en la sala hipóstila?",
    correcta: "El muro de la qibla",
    incorrectas: ["El iwan norte", "El pórtico occidental"]
  },
  {
    enunciado: "¿Qué institución docente se integra en complejos religiosos y urbanos islámicos?",
    correcta: "La madraza",
    incorrectas: ["El liceo renacentista", "El gimnasio helenístico"]
  },
  {
    enunciado: "¿Qué fenómeno decimonónico impulsó el interés europeo por el arte islámico?",
    correcta: "El orientalismo y los viajes románticos",
    incorrectas: ["La Contrarreforma tridentina", "El positivismo comtiano aplicado a la escultura"]
  },
  {
    enunciado: "¿Qué organismos y acciones favorecen hoy la conservación del patrimonio islámico?",
    correcta: "UNESCO y programas de restauración",
    incorrectas: ["La privatización total sin regulación", "La sustitución sistemática por copias modernas"]
  }
];
