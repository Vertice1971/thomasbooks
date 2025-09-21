// temarios/42-la-epica-medieval-los-cantares-de-gesta-el-cantar-de-mio-cid.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué define esencialmente a un cantar de gesta?",
    correcta: "Un poema narrativo en verso que exalta hazañas heroicas de interés colectivo",
    incorrectas: [
      "Un tratado en prosa sobre costumbres caballerescas",
      "Una compilación de milagros marianos en prosa rimada"
    ]
  },
  {
    enunciado: "¿Quiénes difundían principalmente los cantares de gesta en la Edad Media?",
    correcta: "Los juglares en plazas y cortes",
    incorrectas: [
      "Los copistas universitarios en aulas",
      "Los mercaderes en ferias mediante pliegos sueltos"
    ]
  },
  {
    enunciado: "¿Qué rasgo métrico es característico del verso épico castellano medieval?",
    correcta: "Verso anisosilábico dividido en dos hemistiquios por cesura",
    incorrectas: [
      "Endecasílabo blanco sin cesura",
      "Alejandrino isométrico con rima consonante fija"
    ]
  },
  {
    enunciado: "En los cantares de gesta castellanos, ¿cómo riman habitualmente los versos?",
    correcta: "Rima asonante en los versos pares",
    incorrectas: [
      "Rima consonante encadenada",
      "Rima interna en ambos hemistiquios"
    ]
  },
  {
    enunciado: "¿Qué recurso favorece la memorización y la oralidad en la épica medieval?",
    correcta: "Fórmulas repetitivas y epítetos fijos",
    incorrectas: [
      "Hipálages barrocas continuas",
      "Acrostichos iniciales obligatorios"
    ]
  },
  {
    enunciado: "¿Qué tradición europea ofrece un paralelo directo con los cantares hispánicos?",
    correcta: "Las chansons de geste francesas",
    incorrectas: [
      "Los lays bretones en prosa",
      "Las églogas pastoriles italianas"
    ]
  },
  {
    enunciado: "¿Qué rasgo temático es nuclear en la épica castellana?",
    correcta: "Defensa del honor y la fidelidad vasallática",
    incorrectas: [
      "Exaltación exclusiva del amor cortés",
      "Rechazo de toda violencia guerrera"
    ]
  },
  {
    enunciado: "¿Cuál es la obra cumbre de la épica medieval en lengua castellana?",
    correcta: "El Cantar de Mio Cid",
    incorrectas: [
      "El Libro de Alexandre",
      "La Razón de amor"
    ]
  },
  {
    enunciado: "¿Entre qué fechas suele situarse la composición del Cantar de Mio Cid?",
    correcta: "Entre finales del siglo XII e inicios del XIII",
    incorrectas: [
      "A mediados del siglo XI",
      "En la primera mitad del siglo XIV"
    ]
  },
  {
    enunciado: "¿Qué nombre figura al final del manuscrito conservado del Cantar?",
    correcta: "Per Abbat",
    incorrectas: [
      "Gonzalo de Berceo",
      "Juan Ruiz, Arcipreste de Hita"
    ]
  },
  {
    enunciado: "¿En qué año indica la copia del manuscrito que fue transcrito por Per Abbat?",
    correcta: "1207",
    incorrectas: [
      "1140",
      "1337"
    ]
  },
  {
    enunciado: "¿Cuál es la estructura más aceptada del Cantar de Mio Cid?",
    correcta: "Tres cantares: destierro, bodas y afrenta de Corpes con reparación",
    incorrectas: [
      "Dos cantares: destierro y muerte",
      "Cuatro cantares: infancia, destierro, cruzada y coronación"
    ]
  },
  {
    enunciado: "¿Qué episodio culmina el conflicto de honor en el Cantar?",
    correcta: "La afrenta de Corpes y su reparación",
    incorrectas: [
      "La derrota del Cid en Atienza",
      "La condena del Cid por el Papa"
    ]
  },
  {
    enunciado: "¿Qué cualidad narrativa destaca en el Cantar frente a otras épicas europeas?",
    correcta: "Tendencia al realismo y sobriedad expresiva",
    incorrectas: [
      "Exceso de maravillas sobrenaturales",
      "Estilo culto y alegórico constante"
    ]
  },
  {
    enunciado: "¿Qué relación mantiene el héroe con el rey a lo largo del Cantar?",
    correcta: "Pasa del destierro a la reconciliación mediante pruebas de lealtad",
    incorrectas: [
      "Se rebela y funda un reino independiente",
      "Es proclamado rey tras la primera campaña"
    ]
  },
  {
    enunciado: "¿Qué función cumplen los diálogos directos en el poema?",
    correcta: "Dramatizan la acción y dinamizan la narración",
    incorrectas: [
      "Sirven para introducir canciones líricas intercaladas",
      "Sustituyen la voz del narrador por completo"
    ]
  },
  {
    enunciado: "¿Qué toponimia es clave en la geografía del Cantar?",
    correcta: "Castilla, Valencia y Corpes",
    incorrectas: [
      "Santiago, Toledo y Lisboa como tríada central",
      "Granada, Sevilla y Córdoba exclusivamente"
    ]
  },
  {
    enunciado: "¿Cuál es el núcleo temático que articula el itinerario del héroe cidiano?",
    correcta: "Pérdida y recuperación del honor mediante hazañas y justicia",
    incorrectas: [
      "Vida contemplativa monástica",
      "Viaje de peregrinación a Tierra Santa"
    ]
  },
  {
    enunciado: "¿Qué rasgo del lenguaje refleja la base oral del poema?",
    correcta: "Uso de apelativos formularios y variatio repetitiva",
    incorrectas: [
      "Abundancia de tecnicismos escolásticos",
      "Preferencia por perífrasis latinizantes"
    ]
  },
  {
    enunciado: "¿Cómo se llaman las grandes unidades de relato ligadas por una misma asonancia?",
    correcta: "Tiradas",
    incorrectas: [
      "Cantigas",
      "Capítulos"
    ]
  },
  {
    enunciado: "¿Qué designación técnica reciben las dos partes en que se divide el verso largo?",
    correcta: "Hemistiquios",
    incorrectas: [
      "Estribillos",
      "Epodos"
    ]
  },
  {
    enunciado: "¿Qué elemento separa los hemistiquios en el verso épico?",
    correcta: "La cesura",
    incorrectas: [
      "El encabalgamiento",
      "La sinalefa"
    ]
  },
  {
    enunciado: "¿Cuál de estos personajes comete la ofensa principal contra el honor del Cid?",
    correcta: "Los Infantes de Carrión",
    incorrectas: [
      "El Conde de Orgaz",
      "El Obispo de Burgos"
    ]
  },
  {
    enunciado: "¿Qué virtud familiar resalta el poema junto a las dotes guerreras?",
    correcta: "La responsabilidad paterna y el cuidado del linaje",
    incorrectas: [
      "El desprecio del matrimonio por la gloria",
      "La renuncia a la herencia por voto religioso"
    ]
  },
  {
    enunciado: "¿Qué rasgo diferencia al Cid frente a héroes más idealizados de la épica francesa?",
    correcta: "Pragmatismo y cálculo político-militar",
    incorrectas: [
      "Visiones místicas continuas",
      "Poderes sobrenaturales explícitos"
    ]
  },
  {
    enunciado: "¿Qué vínculo muestra el poema con el mester de juglaría?",
    correcta: "Difusión oral, fórmulas y rima asonante",
    incorrectas: [
      "Octosílabo rimado en pareados",
      "Predominio de alegorías doctrinales"
    ]
  },
  {
    enunciado: "¿Qué recurso refuerza el verismo de campañas y botines?",
    correcta: "Detalle de listas de bienes y repartos",
    incorrectas: [
      "Inserción de parábolas moralizantes extensas",
      "Cantos corales litúrgicos entre escenas"
    ]
  },
  {
    enunciado: "¿Cómo se presenta la figura del rey Alfonso en el desarrollo del poema?",
    correcta: "Como autoridad cuya gracia se recobra por méritos del héroe",
    incorrectas: [
      "Como antagonista absoluto hasta el final",
      "Como figura ausente sin impacto en la trama"
    ]
  },
  {
    enunciado: "¿Qué papel cumple el juramento y la prueba judicial en la reparación final?",
    correcta: "Aseguran justicia y restauran la honra públicamente",
    incorrectas: [
      "Inician un nuevo destierro sin juicio",
      "Imponen penitencia religiosa al héroe"
    ]
  },
  {
    enunciado: "¿Qué rasgo estilístico contribuye a la claridad del relato cidiano?",
    correcta: "Sintaxis directa y economía de adjetivos",
    incorrectas: [
      "Hipérbatos continuos y cultismos latinos",
      "Proliferación de alegorías teológicas"
    ]
  },
  {
    enunciado: "¿Qué relación mantiene el poema con la historia documentada?",
    correcta: "Mezcla hechos históricos con elaboración literaria",
    incorrectas: [
      "Reproduce crónicas al pie de la letra",
      "Se desentiende por completo del pasado real"
    ]
  },
  {
    enunciado: "¿Qué motivo literario conecta el Cid con la tradición épica europea?",
    correcta: "El exilio del héroe y su retorno al honor",
    incorrectas: [
      "La peregrinación mística sin armas",
      "La coronación divina en vida"
    ]
  },
  {
    enunciado: "¿Qué función cumplen las arcas en el episodio de Raquel y Vidas?",
    correcta: "Sirven para obtener recursos mediante engaño sin violencia",
    incorrectas: [
      "Contienen reliquias sagradas para una romería",
      "Guardan cartas del Papa que legitiman al Cid"
    ]
  },
  {
    enunciado: "¿Qué destino señalan los matrimonios finales de las hijas del Cid?",
    correcta: "Alianza con la alta nobleza y ascenso del linaje",
    incorrectas: [
      "Retiro conventual de ambas",
      "Exilio permanente de la familia"
    ]
  },
  {
    enunciado: "¿Qué rasgo del narrador facilita la impresión de objetividad?",
    correcta: "Aparente neutralidad y focalización externa en acciones",
    incorrectas: [
      "Constantes juicios morales explícitos",
      "Intervenciones en primera persona del autor"
    ]
  },
  {
    enunciado: "Además de Francia, ¿qué tradición europea temprana comparte características épicas con la castellana?",
    correcta: "La germánica (p. ej., Beowulf)",
    incorrectas: [
      "La italiana humanística del XV",
      "La lírica trobadoresca provenzal exclusivamente"
    ]
  },
  {
    enunciado: "¿Qué recurso rítmico aparece a menudo para reforzar la oralidad?",
    correcta: "Paralelismos y parataxis narrativas",
    incorrectas: [
      "Polisíndeton barroco sistemático",
      "Silva métrica con encabalgamientos endecasílabos"
    ]
  },
  {
    enunciado: "¿Qué visión de la guerra predomina en el Cantar?",
    correcta: "Pragmática y estratégica, ligada a botín y prestigio",
    incorrectas: [
      "Ascética y pacifista sin combates",
      "Puramente fantástica con monstruos"
    ]
  },
  {
    enunciado: "¿Qué aspecto lingüístico evidencia contacto cultural en el poema?",
    correcta: "Léxico con arabismos y latinismos",
    incorrectas: [
      "Uso exclusivo del latín clásico",
      "Empleo constante del provenzal como lengua base"
    ]
  }
];
