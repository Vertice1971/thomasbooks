// temarios/32-la-clasificacion-de-los-seres-vivos-taxonomia-y-nomenclatura-los-cinco-reinos-relaciones-evolutivas-los-virus-y-su-patologia-otras-formas-acelulares.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué disciplina integra identificación, clasificación y nomenclatura de organismos?",
    correcta: "Taxonomía",
    incorrectas: [
      "Anatomía comparada",
      "Biogeografía"
    ]
  },
  {
    enunciado: "¿Cuál es el formato correcto del nombre científico binomial?",
    correcta: "Género con mayúscula + epíteto específico en minúscula, ambos en cursiva",
    incorrectas: [
      "Epíteto específico en mayúscula y género en minúscula, sin cursiva",
      "Nombre común en mayúsculas seguido del género entre paréntesis"
    ]
  },
  {
    enunciado: "¿Qué código rige la nomenclatura de los animales?",
    correcta: "ICZN",
    incorrectas: [
      "ICN",
      "ICNP"
    ]
  },
  {
    enunciado: "¿Qué concepto de especie define especies como grupos de poblaciones naturalmente intercruzantes y reproductivamente aisladas?",
    correcta: "Concepto biológico de especie",
    incorrectas: [
      "Concepto morfológico de especie",
      "Concepto filogenético de especie"
    ]
  },
  {
    enunciado: "En sistemática filogenética, un clado válido es:",
    correcta: "Un grupo monofilético que incluye a un ancestro y a todos sus descendientes",
    incorrectas: [
      "Un grupo parafilético que excluye parte de sus descendientes",
      "Un grupo polifilético con miembros sin ancestro común inmediato"
    ]
  },
  {
    enunciado: "¿Qué herramienta molecular se usa comúnmente para el 'DNA barcoding' en animales?",
    correcta: "Un fragmento del gen mitocondrial COI",
    incorrectas: [
      "El gen 18S rRNA cloroplástico",
      "La región ITS exclusivamente en bacterias"
    ]
  },
  {
    enunciado: "¿Cuál fue la aportación clave del sistema de cinco reinos de Whittaker/Margulis?",
    correcta: "Separar nutrición y organización celular para distinguir Monera, Protista, Fungi, Plantae y Animalia",
    incorrectas: [
      "Unificar todos los procariotas con los protistas por su tamaño",
      "Eliminar la categoría de reino en favor de dominios exclusivamente"
    ]
  },
  {
    enunciado: "¿Qué limitación principal tiene el 'Reino Protista' en los esquemas clásicos?",
    correcta: "Es parafilético: no incluye a todos los descendientes de un ancestro común",
    incorrectas: [
      "Es monofilético y por tanto demasiado restrictivo",
      "Carece de organismos fotosintéticos"
    ]
  },
  {
    enunciado: "En la clasificación de tres dominios (Woese), los dominios son:",
    correcta: "Bacteria, Archaea y Eukarya",
    incorrectas: [
      "Monera, Protista y Eukarya",
      "Animalia, Plantae y Fungi"
    ]
  },
  {
    enunciado: "Una característica distintiva de Archaea frente a Bacteria es:",
    correcta: "Lípidos de membrana con enlaces éter y cadenas isoprenoides",
    incorrectas: [
      "Pared celular con peptidoglucano típico",
      "Presencia de cloroplastos funcionales"
    ]
  },
  {
    enunciado: "Los hongos se diferencian de las plantas principalmente porque:",
    correcta: "Son heterótrofos y su pared celular contiene quitina",
    incorrectas: [
      "Son autótrofos y su pared celular contiene celulosa",
      "Carecen de esporas en su ciclo de vida"
    ]
  },
  {
    enunciado: "Los virus se consideran entidades acelulares porque:",
    correcta: "No realizan metabolismo propio y dependen de células para replicarse",
    incorrectas: [
      "Poseen ribosomas y traducen proteínas de forma autónoma",
      "Pueden generar ATP por respiración aerobia"
    ]
  },
  {
    enunciado: "Un virión típico está compuesto por:",
    correcta: "Genoma (ADN o ARN) y cápside proteica, con o sin envoltura",
    incorrectas: [
      "ARN y ADN simultáneamente dentro de una misma partícula",
      "Cápside de quitina y pared peptidoglucánica"
    ]
  },
  {
    enunciado: "¿Qué clasifica el sistema de Baltimore en virología?",
    correcta: "Los virus según tipo de ácido nucleico y estrategia de replicación/transcripción",
    incorrectas: [
      "Los virus únicamente por su huésped natural",
      "Las bacterias por su coloración Gram"
    ]
  },
  {
    enunciado: "En el ciclo lítico de un bacteriófago:",
    correcta: "Se produce la lisis de la célula hospedadora tras ensamblaje de nuevos viriones",
    incorrectas: [
      "El genoma viral se integra establemente y se hereda indefinidamente",
      "No se sintetizan proteínas virales"
    ]
  },
  {
    enunciado: "En el ciclo lisogénico:",
    correcta: "El genoma viral puede integrarse en el cromosoma del hospedador como profago/provirus",
    incorrectas: [
      "Siempre ocurre lisis celular inmediata",
      "No hay replicación del material genético viral"
    ]
  },
  {
    enunciado: "Los priones son:",
    correcta: "Proteínas mal plegadas infecciosas sin ácido nucleico",
    incorrectas: [
      "ARN circular infeccioso con cápside proteica",
      "Virus de ADN de doble cadena envueltos"
    ]
  },
  {
    enunciado: "Los viroides son:",
    correcta: "Pequeñas moléculas de ARN circular desnudas que infectan plantas",
    incorrectas: [
      "Proteínas infecciosas que afectan al SNC de mamíferos",
      "Partículas virales con cápside icosaédrica"
    ]
  },
  {
    enunciado: "La clasificación oficial y nomenclatura de virus la coordina:",
    correcta: "ICTV (International Committee on Taxonomy of Viruses)",
    incorrectas: [
      "ICNP",
      "ICZN"
    ]
  },
  {
    enunciado: "Un ejemplo de virus envuelto con genoma RNA de cadena positiva es:",
    correcta: "SARS-CoV-2",
    incorrectas: [
      "Bacteriófago T4 (DNA ds)",
      "Virus del mosaico del tabaco (TMV, RNA ss positivo pero no envuelto)"
    ]
  },
  {
    enunciado: "La transferencia horizontal de genes (THG) complica la filogenia porque:",
    correcta: "Introduce genes entre linajes no emparentados verticalmente",
    incorrectas: [
      "Impide que mutaciones ocurran al azar",
      "Elimina los eventos de duplicación génica"
    ]
  },
  {
    enunciado: "¿Qué rasgo distingue a Bacteria de Eukarya?",
    correcta: "Ausencia de núcleo y orgánulos membranosos en Bacteria",
    incorrectas: [
      "Presencia de histonas nucleares en Bacteria",
      "Splicing intrónico extenso en Bacteria"
    ]
  },
  {
    enunciado: "Las cianobacterias son relevantes evolutivamente porque:",
    correcta: "Son procariotas fotosintéticos implicados en el origen de los cloroplastos",
    incorrectas: [
      "Son eucariotas con cloroplastos secundarios",
      "Carecen de pigmentos fotosintéticos"
    ]
  },
  {
    enunciado: "En nomenclatura, el 'principio de prioridad' indica que:",
    correcta: "El nombre válido es generalmente el publicado primero de forma correcta",
    incorrectas: [
      "El nombre más usado en medios de comunicación prevalece",
      "El nombre propuesto por el país de origen siempre es preferente"
    ]
  },
  {
    enunciado: "Un grupo parafilético se caracteriza por:",
    correcta: "Incluir al ancestro común pero excluir parte de sus descendientes",
    incorrectas: [
      "Excluir al ancestro y a todos los descendientes",
      "Incluir al ancestro y a todos sus descendientes"
    ]
  },
  {
    enunciado: "¿Cuál es un supergrupo eucariota reconocido en filogenías modernas?",
    correcta: "SAR (stramenopiles, alveolados, rizarios)",
    incorrectas: [
      "Monera",
      "Deuterostomia como dominio"
    ]
  },
  {
    enunciado: "Las partículas similares a virus (VLPs) se emplean en biotecnología porque:",
    correcta: "Carecen de genoma y son útiles como plataformas vacunales",
    incorrectas: [
      "Se replican autónomamente sin hospedador",
      "Sustituyen a antibióticos en infecciones bacterianas"
    ]
  },
  {
    enunciado: "Un criterio útil para leer un cladograma es:",
    correcta: "Los nodos representan ancestros comunes; la longitud de rama puede o no reflejar cambio",
    incorrectas: [
      "Las puntas más altas siempre son las especies más 'avanzadas'",
      "Las ramas largas siempre indican mayor tamaño corporal"
    ]
  },
  {
    enunciado: "¿Cuál es una medida clave de control frente a virus humanos?",
    correcta: "Vacunación y antivirales dirigidos a dianas específicas del ciclo viral",
    incorrectas: [
      "Antibióticos betalactámicos de amplio espectro",
      "Quelación de hierro sistémico en todos los pacientes"
    ]
  },
  {
    enunciado: "En hongos, ¿qué evidencia apoya su cercanía a animales?",
    correcta: "Comparten quitina/ergosterol y análisis moleculares sitúan Fungi en Opisthokonta",
    incorrectas: [
      "Comparten cloroplastos y celulosa con plantas",
      "Poseen peptidoglucano típico bacteriano"
    ]
  },
  {
    enunciado: "La endosimbiosis seriada explica que:",
    correcta: "Mitocondrias y cloroplastos derivan de bacterias endosimbiontes",
    incorrectas: [
      "El núcleo procede de arqueas por fusión vírica reciente",
      "Los lisosomas se originaron de cianobacterias endosimbiontes"
    ]
  },
  {
    enunciado: "Los virus satélite requieren para replicarse:",
    correcta: "La coinfección por un virus ayudador",
    incorrectas: [
      "Únicamente ribosomas libres del citosol",
      "Priones que activen su cápside"
    ]
  },
  {
    enunciado: "Un ejemplo de criterio morfológico viral es:",
    correcta: "Simetría icosaédrica o helicoidal de la cápside",
    incorrectas: [
      "Tipo de pared peptidoglucánica",
      "Número de ribosomas por virión"
    ]
  },
  {
    enunciado: "En plantas, la clasificación moderna reconoce que 'algas' es:",
    correcta: "Un término poli/parafilético que agrupa linajes fotosintéticos no equivalentes",
    incorrectas: [
      "Un clado monofilético dentro de Plantae",
      "Sinónimo estricto de Embryophyta"
    ]
  },
  {
    enunciado: "La filogenómica mejora las inferencias evolutivas porque:",
    correcta: "Utiliza grandes conjuntos de genes/sectores del genoma para estimar relaciones",
    incorrectas: [
      "Evita completamente la homoplasia",
      "Sustituye la necesidad de muestrear taxa"
    ]
  },
  {
    enunciado: "¿Qué describe mejor a Bacterias Gram positivas?",
    correcta: "Pared gruesa de peptidoglucano y tinción púrpura con Gram",
    incorrectas: [
      "Membrana externa rica en LPS y capa fina de peptidoglucano",
      "Ausencia total de pared celular"
    ]
  },
  {
    enunciado: "Una diferencia clave entre virus con y sin envoltura es que los envueltos:",
    correcta: "Suelen ser más sensibles a solventes y detergentes",
    incorrectas: [
      "No requieren superficie celular para entrar",
      "Carecen de proteína de cápside"
    ]
  },
  {
    enunciado: "En el sistema de Baltimore, los retrovirus se clasifican como:",
    correcta: "Grupo VI (ARN de cadena positiva con paso por ADN vía transcriptasa inversa)",
    incorrectas: [
      "Grupo II (ADN monocatenario)",
      "Grupo I (ADN bicatenario sin fase de ARN)"
    ]
  },
  {
    enunciado: "Un ejemplo de carácter compartido por Archaea y Eukarya es:",
    correcta: "Componentes de la maquinaria de transcripción/traslación más similares entre sí que a Bacteria",
    incorrectas: [
      "Pared celular con peptidoglucano idéntico",
      "Cloroplastos primarios presentes en ambos"
    ]
  },
  {
    enunciado: "La prioridad pedagógica actual en clasificación para secundaria/bachillerato es:",
    correcta: "Introducir cinco reinos como marco histórico y transicionar a dominios y supergrupos filogenéticos",
    incorrectas: [
      "Abandonar toda jerarquía y usar solo nombres comunes",
      "Mantener exclusivamente el esquema de Linneo sin datos moleculares"
    ]
  }
];
