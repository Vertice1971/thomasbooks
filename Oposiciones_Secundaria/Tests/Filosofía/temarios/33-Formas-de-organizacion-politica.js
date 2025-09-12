// temarios/33-Formas-de-organizacion-politica.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué entiende Platón por la forma justa de gobierno?",
    correcta: "La aristocracia de los filósofos, donde gobiernan los sabios orientados al bien común.",
    incorrectas: [
      "La tiranía ilustrada como gobierno fuerte y paternalista.",
      "La democracia como suma de deseos individuales sin jerarquía."
    ]
  },
  {
    enunciado: "¿Cómo define Aristóteles la política en su teoría de las formas de gobierno?",
    correcta: "Como la ciencia que busca el bien común a través de distintas formas de organización.",
    incorrectas: [
      "Como un arte de engaño necesario para controlar a las masas.",
      "Como la simple administración técnica de recursos materiales."
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la monarquía según la tradición clásica?",
    correcta: "El gobierno de uno orientado al bien común.",
    incorrectas: [
      "El poder absoluto sin referencia a la justicia.",
      "El predominio de las asambleas populares por encima de toda autoridad."
    ]
  },
  {
    enunciado: "¿Cómo define Aristóteles la tiranía?",
    correcta: "La degeneración de la monarquía cuando se gobierna en beneficio propio.",
    incorrectas: [
      "La perfección del orden político en sociedades antiguas.",
      "El gobierno legítimo de los sabios orientado al bien común."
    ]
  },
  {
    enunciado: "¿Qué forma degenerada corresponde a la aristocracia en Aristóteles?",
    correcta: "La oligarquía, cuando la minoría gobierna para su interés propio.",
    incorrectas: [
      "La demagogia, cuando los líderes engañan al pueblo.",
      "La tiranía, cuando el rey se orienta al bien común."
    ]
  },
  {
    enunciado: "¿Qué distingue la democracia justa de la demagogia según los clásicos?",
    correcta: "La democracia busca el bien de todos; la demagogia manipula a la mayoría para intereses particulares.",
    incorrectas: [
      "La democracia se basa en el poder divino; la demagogia en la racionalidad.",
      "La democracia es una forma de aristocracia; la demagogia, una forma de monarquía."
    ]
  },
  {
    enunciado: "¿Qué defendió Maquiavelo en 'El Príncipe'?",
    correcta: "Que el gobernante debe ser eficaz en conservar el poder aunque use medios poco virtuosos.",
    incorrectas: [
      "Que la política debe regirse únicamente por la moral cristiana.",
      "Que el poder siempre debe recaer en asambleas democráticas."
    ]
  },
  {
    enunciado: "¿Qué principio central defiende Hobbes en 'Leviatán'?",
    correcta: "La necesidad de un soberano absoluto que garantice la paz frente al estado de naturaleza.",
    incorrectas: [
      "La igualdad radical que lleva a la democracia directa.",
      "La prioridad de la voluntad general sobre los derechos individuales."
    ]
  },
  {
    enunciado: "¿Qué derechos naturales defiende Locke como límite al poder político?",
    correcta: "Vida, libertad y propiedad, inalienables para cualquier ciudadano.",
    incorrectas: [
      "El derecho divino de los reyes como absoluto.",
      "El privilegio hereditario de la nobleza feudal."
    ]
  },
  {
    enunciado: "¿Qué papel tiene la voluntad general en Rousseau?",
    correcta: "Es el principio que expresa el interés común y funda la legitimidad del Estado.",
    incorrectas: [
      "Es la suma de intereses privados que deben equilibrarse.",
      "Es la voluntad del soberano impuesta a los súbditos."
    ]
  },
  {
    enunciado: "¿Qué aportación clave hizo Montesquieu a la teoría política?",
    correcta: "La división de poderes legislativo, ejecutivo y judicial para evitar abusos.",
    incorrectas: [
      "La abolición de toda forma de monarquía en Europa.",
      "La defensa del absolutismo ilustrado como régimen perfecto."
    ]
  },
  {
    enunciado: "¿Qué función atribuye Kant al contrato originario?",
    correcta: "Es un ideal de la razón que fundamenta la legitimidad de las leyes justas.",
    incorrectas: [
      "Un pacto histórico real firmado por los pueblos antiguos.",
      "Una ficción literaria para criticar la monarquía medieval."
    ]
  },
  {
    enunciado: "¿Cómo concibe Hegel al Estado?",
    correcta: "Como la realización de la libertad objetiva y la eticidad en la historia.",
    incorrectas: [
      "Como un mal necesario que debe desaparecer.",
      "Como un contrato artificial que limita la libertad natural."
    ]
  },
  {
    enunciado: "¿Qué crítica hace Marx al Estado burgués?",
    correcta: "Es un instrumento de dominación de clase al servicio de la burguesía.",
    incorrectas: [
      "Es la encarnación neutral del bien común.",
      "Es la culminación de la razón histórica en el derecho moderno."
    ]
  },
  {
    enunciado: "¿Qué postura adopta Bakunin frente al Estado?",
    correcta: "El rechazo absoluto, defendiendo el anarquismo y la autoorganización social.",
    incorrectas: [
      "La defensa del Estado centralizado como garante de la libertad.",
      "El apoyo a monarquías constitucionales como forma ideal."
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la democracia parlamentaria?",
    correcta: "El gobierno es responsable ante una asamblea representativa elegida por el pueblo.",
    incorrectas: [
      "El poder reside en una élite militar sin control ciudadano.",
      "El presidente concentra el poder absoluto y vitalicio."
    ]
  },
  {
    enunciado: "¿Qué define a la monarquía constitucional?",
    correcta: "La coexistencia de un monarca simbólico con instituciones democráticas y un parlamento.",
    incorrectas: [
      "El dominio hereditario absoluto sin separación de poderes.",
      "La abolición de toda institución monárquica."
    ]
  },
  {
    enunciado: "¿Qué distingue al presidencialismo como forma de gobierno?",
    correcta: "La elección directa del presidente que concentra funciones ejecutivas independientes del parlamento.",
    incorrectas: [
      "La inexistencia de división de poderes en la práctica.",
      "La supremacía absoluta del poder judicial sobre el resto."
    ]
  },
  {
    enunciado: "¿Qué rasgo común tienen los regímenes totalitarios del siglo XX?",
    correcta: "La concentración del poder en un partido único con control ideológico y represión política.",
    incorrectas: [
      "La alternancia pacífica de partidos mediante elecciones libres.",
      "El respeto a la pluralidad ideológica como principio básico."
    ]
  },
  {
    enunciado: "¿Qué concepto central desarrolla Rawls en 'Teoría de la justicia'?",
    correcta: "La justicia como equidad, basada en el velo de la ignorancia y los dos principios básicos.",
    incorrectas: [
      "La utilidad máxima como único criterio para organizar el Estado.",
      "La obediencia incondicional a la autoridad tradicional."
    ]
  },
  {
    enunciado: "¿Qué plantea Nozick en 'Anarquía, Estado y utopía'?",
    correcta: "Defiende un Estado mínimo limitado a funciones de seguridad y justicia.",
    incorrectas: [
      "Un Estado fuerte redistribuidor y paternalista.",
      "La abolición de la propiedad privada en favor del colectivismo."
    ]
  },
  {
    enunciado: "¿Qué defienden los comunitaristas frente al liberalismo individualista?",
    correcta: "La centralidad de las tradiciones y comunidades en la formación de la identidad moral y política.",
    incorrectas: [
      "La primacía absoluta de la autonomía sin vínculos sociales.",
      "La irrelevancia cultural de los contextos comunitarios."
    ]
  },
  {
    enunciado: "¿Qué significa soberanía popular?",
    correcta: "Que la autoridad última reside en el pueblo como fuente de legitimidad.",
    incorrectas: [
      "Que el poder deriva de la nobleza hereditaria.",
      "Que la Iglesia ostenta el poder supremo sobre la política."
    ]
  },
  {
    enunciado: "¿Qué papel cumple el poder judicial en el equilibrio de poderes?",
    correcta: "Garantizar la legalidad y limitar los abusos de los otros poderes.",
    incorrectas: [
      "Ejecutar las órdenes del legislativo sin capacidad de revisión.",
      "Organizar las elecciones y nombrar directamente al ejecutivo."
    ]
  },
  {
    enunciado: "¿Qué significa legitimidad en la teoría política?",
    correcta: "El reconocimiento del poder como justo y aceptable por los ciudadanos.",
    incorrectas: [
      "La capacidad de imponer la fuerza sin consentimiento.",
      "El derecho divino incuestionable de los reyes."
    ]
  },
  {
    enunciado: "¿Qué función tiene el gobierno según modelos mecanicistas?",
    correcta: "Gestionar conflictos y coordinar intereses en la sociedad.",
    incorrectas: [
      "Revelar verdades religiosas como guía política.",
      "Encarnar la libertad objetiva en el curso histórico."
    ]
  },
  {
    enunciado: "¿Qué entiende un modelo organicista de gobierno?",
    correcta: "Un poder educador y orientador que integra al individuo en un cuerpo político.",
    incorrectas: [
      "La suma de contratos individuales sin comunidad.",
      "La ausencia total de instituciones permanentes."
    ]
  },
  {
    enunciado: "¿Qué defiende Bodin como fundamento del Estado moderno?",
    correcta: "La soberanía como poder absoluto, perpetuo e indivisible.",
    incorrectas: [
      "El pacto tribal como origen del derecho moderno.",
      "La hegemonía cultural sin necesidad de instituciones políticas."
    ]
  },
  {
    enunciado: "¿Qué papel asigna San Agustín al poder político?",
    correcta: "Un remedio temporal para contener el mal derivado del pecado original.",
    incorrectas: [
      "La realización plena de la ciudad celestial en la tierra.",
      "Una institución innecesaria en comunidades primitivas."
    ]
  },
  {
    enunciado: "¿Cómo concibe Tomás de Aquino el origen del poder político?",
    correcta: "Como natural al ser humano, orientado al bien común y perfeccionado por la ley divina.",
    incorrectas: [
      "Como un artificio contrario a la naturaleza humana.",
      "Como una mera convención sin fundamento racional."
    ]
  },
  {
    enunciado: "¿Qué propuesta hace Marsilio de Padua en 'Defensor pacis'?",
    correcta: "Defiende la autonomía del poder civil frente a la Iglesia en la organización política.",
    incorrectas: [
      "Subordina toda autoridad al Papa como soberano universal.",
      "Exalta la monarquía absoluta como forma perfecta."
    ]
  },
  {
    enunciado: "¿Qué significa autoridad legítima en política?",
    correcta: "El poder que es reconocido como justo y conforme a la ley.",
    incorrectas: [
      "El poder de facto impuesto únicamente por la violencia.",
      "El carisma personal sin necesidad de normas legales."
    ]
  },
  {
    enunciado: "¿Qué forma de Estado defiende el federalismo?",
    correcta: "La distribución de competencias entre un gobierno central y entidades territoriales autónomas.",
    incorrectas: [
      "La concentración total del poder en un único soberano.",
      "La inexistencia de todo marco constitucional."
    ]
  },
  {
    enunciado: "¿Qué característica común presentan los regímenes autoritarios?",
    correcta: "La limitación severa de libertades políticas aunque mantengan cierta legalidad formal.",
    incorrectas: [
      "La plena participación ciudadana en el gobierno.",
      "La subordinación de los militares al parlamento elegido."
    ]
  },
  {
    enunciado: "¿Qué crítica realiza Engels a la democracia burguesa?",
    correcta: "Que formalmente proclama igualdad política mientras mantiene desigualdades económicas profundas.",
    incorrectas: [
      "Que es la única vía hacia el comunismo científico.",
      "Que carece de toda importancia en el desarrollo social."
    ]
  },
  {
    enunciado: "¿Qué objetivo buscaba Fichte con su teoría del Estado nacional?",
    correcta: "La unidad cultural y política del pueblo basada en la educación y la lengua común.",
    incorrectas: [
      "El cosmopolitismo universal sin fronteras culturales.",
      "La desaparición de toda forma de nacionalismo."
    ]
  }
];
