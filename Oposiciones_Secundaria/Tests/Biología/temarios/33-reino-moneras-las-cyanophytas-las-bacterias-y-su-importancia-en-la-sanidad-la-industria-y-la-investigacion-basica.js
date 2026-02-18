// temarios/33-reino-moneras-las-cyanophytas-las-bacterias-y-su-importancia-en-la-sanidad-la-industria-y-la-investigacion-basica.js
var PREGUNTAS = [
  {
    enunciado: "En la clasificación moderna, el antiguo 'Reino Moneras' se reparte en:",
    correcta: "Dos dominios: Bacteria y Archaea",
    incorrectas: [
      "Un dominio único: Prokaryota",
      "Tres dominios: Bacteria, Protista y Fungi"
    ]
  },
  {
    enunciado: "¿Cuál es una característica estructural común de los procariotas?",
    correcta: "Carecen de núcleo delimitado y orgánulos membranosos",
    incorrectas: [
      "Poseen retículo endoplásmico rugoso",
      "Tienen cromosomas lineales en un núcleo verdadero"
    ]
  },
  {
    enunciado: "La pared celular bacteriana Gram positiva se distingue por:",
    correcta: "Una gruesa capa de peptidoglucano con ácidos teicoicos",
    incorrectas: [
      "Una capa delgada de peptidoglucano y membrana externa con LPS",
      "Ausencia total de pared celular"
    ]
  },
  {
    enunciado: "¿Qué componente es típico de la membrana externa de bacterias Gram negativas?",
    correcta: "Lipopolisacárido (LPS)",
    incorrectas: [
      "Quitina",
      "Celulosa cristalina"
    ]
  },
  {
    enunciado: "Los ribosomas bacterianos son del tipo:",
    correcta: "70S (30S + 50S)",
    incorrectas: [
      "80S (40S + 60S)",
      "55S únicos del nucleoide"
    ]
  },
  {
    enunciado: "Una cápsula bacteriana contribuye principalmente a:",
    correcta: "Protección frente a fagocitosis y desecación",
    incorrectas: [
      "Síntesis de ATP por fosforilación oxidativa",
      "Traducción de proteínas en el periplasma"
    ]
  },
  {
    enunciado: "Las endosporas son estructuras de resistencia producidas por géneros como:",
    correcta: "Bacillus y Clostridium",
    incorrectas: [
      "Staphylococcus y Streptococcus",
      "Vibrio y Neisseria"
    ]
  },
  {
    enunciado: "Las cianobacterias realizan fotosíntesis oxigénica utilizando:",
    correcta: "Clorofila a y ficobiliproteínas en tilacoides",
    incorrectas: [
      "Clorofila b en cloroplastos",
      "Bacteriorrodopsina en cloroplastos"
    ]
  },
  {
    enunciado: "En cianobacterias fijadoras de nitrógeno, la fijación ocurre en:",
    correcta: "Heterocistos",
    incorrectas: [
      "Acinetos exclusivamente",
      "Plastoglóbulos cloroplásticos"
    ]
  },
  {
    enunciado: "Una función ecológica clave de las cianobacterias es:",
    correcta: "Contribuir al ciclo del nitrógeno y del carbono en sistemas acuáticos",
    incorrectas: [
      "Reducir el oxígeno atmosférico a niveles anóxicos",
      "Oxidar exclusivamente sulfuro de hierro en suelos"
    ]
  },
  {
    enunciado: "El origen endosimbiótico de los cloroplastos se atribuye a:",
    correcta: "Cianobacterias ancestrales",
    incorrectas: [
      "Arqueas metanogénicas",
      "Euglenozoos heterótrofos"
    ]
  },
  {
    enunciado: "Un florecimiento (bloom) de cianobacterias puede producir:",
    correcta: "Cianotoxinas como microcistinas con impacto sanitario",
    incorrectas: [
      "Antibióticos betalactámicos en agua natural",
      "Aumento de transparencia del agua"
    ]
  },
  {
    enunciado: "Una diferencia de Archaea frente a Bacteria es que Archaea presentan:",
    correcta: "Lípidos de membrana con enlaces éter e isoprenoides",
    incorrectas: [
      "Peptidoglucano típico en la pared",
      "Cloroplastos funcionales membranosos"
    ]
  },
  {
    enunciado: "El quimiolitotrofismo bacteriano implica:",
    correcta: "Obtención de energía oxidando compuestos inorgánicos como NH3, H2S o Fe2+",
    incorrectas: [
      "Uso exclusivo de luz para producir ATP",
      "Fermentación de azúcares sin cadena respiratoria"
    ]
  },
  {
    enunciado: "La respiración anaerobia bacteriana utiliza como aceptores finales de electrones:",
    correcta: "Nitrato, sulfato o CO2 según el organismo",
    incorrectas: [
      "Únicamente oxígeno",
      "ATP como aceptor final"
    ]
  },
  {
    enunciado: "El concepto de 'quorum sensing' se refiere a:",
    correcta: "Comunicación bacteriana dependiente de densidad para coordinar conductas",
    incorrectas: [
      "Entrada de plásmidos por canales iónicos",
      "Ruptura de la pared por shock osmótico"
    ]
  },
  {
    enunciado: "La transferencia horizontal de genes mediante fagos se denomina:",
    correcta: "Transducción",
    incorrectas: [
      "Transformación",
      "Conjugación"
    ]
  },
  {
    enunciado: "La conjugación bacteriana requiere típicamente:",
    correcta: "Contacto célula–célula mediado por pili y un plásmido conjugativo",
    incorrectas: [
      "Incorporación de ADN libre del medio",
      "Integración de un profago lisogénico"
    ]
  },
  {
    enunciado: "Los integrones son importantes porque:",
    correcta: "Facilitan la captura y expresión de genes, incluida resistencia a antibióticos",
    incorrectas: [
      "Inhiben la recombinación genética",
      "Eliminan plásmidos de resistencia"
    ]
  },
  {
    enunciado: "El sistema CRISPR–Cas en bacterias actúa como:",
    correcta: "Mecanismo adaptativo de defensa frente a ácidos nucleicos invasores",
    incorrectas: [
      "Complejo de replicación del cromosoma",
      "Polimerasa de ARNm dependiente de ADN"
    ]
  },
  {
    enunciado: "Un ejemplo de patógeno bacteriano importante en salud pública es:",
    correcta: "Mycobacterium tuberculosis (tuberculosis)",
    incorrectas: [
      "Plasmodium falciparum (protozoo)",
      "Candida albicans (hongo)"
    ]
  },
  {
    enunciado: "La tinción de Ziehl–Neelsen se usa para identificar:",
    correcta: "Bacilos ácido-alcohol resistentes como Mycobacterium",
    incorrectas: [
      "Cocos Gram positivos exclusivamente",
      "Bacterias con cápsulas polisacáridas únicamente"
    ]
  },
  {
    enunciado: "Las dianas habituales de antibióticos incluyen:",
    correcta: "Síntesis de pared, síntesis proteica y replicación del ADN",
    incorrectas: [
      "Mitocondrias bacterianas",
      "Cloroplastos bacterianos"
    ]
  },
  {
    enunciado: "Una β-lactamasa confiere resistencia frente a:",
    correcta: "Antibióticos que inhiben la síntesis de pared como penicilinas",
    incorrectas: [
      "Aminoglucósidos que actúan en ribosoma 30S",
      "Quinolonas que inhiben girasa"
    ]
  },
  {
    enunciado: "Los biofilms bacterianos favorecen:",
    correcta: "Mayor tolerancia a antibióticos y defensa frente al sistema inmune",
    incorrectas: [
      "Disminución de la comunicación por quorum sensing",
      "Imposibilidad de intercambio genético"
    ]
  },
  {
    enunciado: "Una técnica moderna de identificación rápida en microbiología clínica es:",
    correcta: "MALDI-TOF espectrometría de masas",
    incorrectas: [
      "Cromatografía de gases de cloroplastos",
      "Electroforesis exclusivamente de proteínas séricas"
    ]
  },
  {
    enunciado: "En industria alimentaria, Lactobacillus y Streptococcus se emplean para:",
    correcta: "Fermentaciones lácteas (yogur, quesos)",
    incorrectas: [
      "Producción de etanol combustible exclusivamente",
      "Bioleaching de minerales metálicos"
    ]
  },
  {
    enunciado: "Acetobacter se utiliza principalmente para producir:",
    correcta: "Ácido acético (vinagre) por oxidación de etanol",
    incorrectas: [
      "Antibióticos macrólidos",
      "Bioplásticos de PHA directamente"
    ]
  },
  {
    enunciado: "El género Streptomyces es notable por:",
    correcta: "Producir numerosos antibióticos como estreptomicina y tetraciclinas",
    incorrectas: [
      "Ser exclusivo de ambientes marinos hidrotermales",
      "Carecer de metabolismo secundario"
    ]
  },
  {
    enunciado: "Un ejemplo de producto bacteriano de alto valor industrial es:",
    correcta: "Vitamina B12 y aminoácidos como lisina",
    incorrectas: [
      "Colágeno humano nativo sin ingeniería",
      "Clorofila b purificada de arqueas"
    ]
  },
  {
    enunciado: "Los polihidroxialcanoatos (PHA) son:",
    correcta: "Bioplásticos acumulados por ciertas bacterias como material de reserva",
    incorrectas: [
      "Polímeros proteicos de membrana externa",
      "Carbohidratos exclusivos de plantas"
    ]
  },
  {
    enunciado: "En tratamiento de aguas residuales, bacterias nitrificantes realizan:",
    correcta: "Oxidación de amonio a nitrito y nitrato",
    incorrectas: [
      "Reducción de nitrato a amonio en condiciones aerobias",
      "Fijación de N2 a NH3 en aireadores secundarios"
    ]
  },
  {
    enunciado: "El 'bioleaching' o biolixiviación se basa en bacterias como:",
    correcta: "Acidithiobacillus que oxidan sulfuros metálicos",
    incorrectas: [
      "Lactococcus que reduce sulfatos a sulfuro",
      "Neisseria fotosintética"
    ]
  },
  {
    enunciado: "Un modelo bacteriano clásico para genética molecular es:",
    correcta: "Escherichia coli",
    incorrectas: [
      "Drosophila melanogaster",
      "Arabidopsis thaliana"
    ]
  },
  {
    enunciado: "La Taq polimerasa, clave en PCR, procede de:",
    correcta: "Thermus aquaticus",
    incorrectas: [
      "Bacillus anthracis",
      "Vibrio cholerae"
    ]
  },
  {
    enunciado: "El operón lac ilustra:",
    correcta: "Regulación transcripcional inducible en respuesta a lactosa y glucosa",
    incorrectas: [
      "Traducción de ARNm policistrónico en el núcleo",
      "Represión por CRISPR de genes metabólicos"
    ]
  },
  {
    enunciado: "Los carboxisomas bacterianos están asociados a:",
    correcta: "Concentración de CO2 y Rubisco en autótrofos",
    incorrectas: [
      "Síntesis de quitina para la pared",
      "Formación de pili sexuales"
    ]
  },
  {
    enunciado: "Los magnetosomas permiten a algunas bacterias:",
    correcta: "Orientarse en el campo magnético terrestre",
    incorrectas: [
      "Fijar nitrógeno en condiciones aerobias",
      "Resistir todos los antibióticos betalactámicos"
    ]
  },
  {
    enunciado: "En simbiosis agrícola, Rhizobium contribuye a:",
    correcta: "Fijación biológica de nitrógeno en leguminosas",
    incorrectas: [
      "Oxidación de hierro en raíces",
      "Formación de micorrizas arbusculares"
    ]
  },
  {
    enunciado: "Una aplicación sanitaria emergente que reaprovecha virus bacterianos es:",
    correcta: "Fagoterapia para tratar infecciones resistentes",
    incorrectas: [
      "Vacunación con bacterias vivas sin atenuar",
      "Uso de viroides para modular microbiotas"
    ]
  },
  {
    enunciado: "La formación de biopelículas en dispositivos médicos puede conducir a:",
    correcta: "Infecciones crónicas difíciles de erradicar",
    incorrectas: [
      "Esterilidad espontánea del material",
      "Mayor eficacia de antibióticos hidrofílicos"
    ]
  }
];
