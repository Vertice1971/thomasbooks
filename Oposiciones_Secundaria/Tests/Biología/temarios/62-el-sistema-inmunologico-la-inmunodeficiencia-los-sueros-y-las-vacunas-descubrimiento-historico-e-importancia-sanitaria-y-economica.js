// temarios/62-el-sistema-inmunologico-la-inmunodeficiencia-los-sueros-y-las-vacunas-descubrimiento-historico-e-importancia-sanitaria-y-economica.js
var PREGUNTAS = [
  {
    enunciado: "El sistema inmunológico distingue entre lo propio y lo no propio mediante mecanismos de reconocimiento específicos y de tolerancia.",
    correcta: "Verdadero: combina tolerancia central/periférica y reconocimiento de antígenos extraños.",
    incorrectas: [
      "Falso: solo reacciona ante tóxicos químicos, no frente a patógenos.",
      "Falso: no dispone de mecanismos de tolerancia frente a lo propio."
    ]
  },
  {
    enunciado: "Las barreras físicas y químicas de la inmunidad innata incluyen piel, mucosas, pH ácido, lisozima y microbiota comensal.",
    correcta: "Verdadero: constituyen la primera línea de defensa inespecífica.",
    incorrectas: [
      "Falso: pertenecen a la inmunidad adaptativa y generan memoria clonal.",
      "Falso: la microbiota siempre es patógena y debe eliminarse."
    ]
  },
  {
    enunciado: "Los PRR (receptores de reconocimiento de patrones) detectan PAMP y DAMP e inician señales inflamatorias.",
    correcta: "Verdadero: TLR, NLR o RLR activan vías como NF-κB y producen citocinas.",
    incorrectas: [
      "Falso: solo reconocen antígenos presentados por MHC II.",
      "Falso: su activación inhibe por completo la inflamación."
    ]
  },
  {
    enunciado: "Los neutrófilos y macrófagos son fagocitos clave en la inmunidad innata.",
    correcta: "Verdadero: ingieren y destruyen patógenos mediante estallido respiratorio y enzimas.",
    incorrectas: [
      "Falso: solo actúan en respuestas alérgicas tardías.",
      "Falso: producen anticuerpos específicos de alta afinidad."
    ]
  },
  {
    enunciado: "El sistema del complemento puede activarse por vías clásica, alternativa y de las lectinas.",
    correcta: "Verdadero: sus funciones incluyen opsonización, lisis y quimiotaxis.",
    incorrectas: [
      "Falso: solo existe una vía y no tiene función opsonizante.",
      "Falso: es exclusivo de la inmunidad celular T."
    ]
  },
  {
    enunciado: "La inflamación aguda se caracteriza por vasodilatación, aumento de permeabilidad y reclutamiento leucocitario.",
    correcta: "Verdadero: mediada por histamina, prostaglandinas, IL-1, TNF y otras.",
    incorrectas: [
      "Falso: consiste en vasoconstricción mantenida y ausencia de células.",
      "Falso: siempre implica infección bacteriana sistémica."
    ]
  },
  {
    enunciado: "La inmunidad adaptativa presenta especificidad y memoria y se organiza en respuestas humoral y celular.",
    correcta: "Verdadero: intervienen linfocitos B (anticuerpos) y T (ayuda y citotoxicidad).",
    incorrectas: [
      "Falso: carece de memoria y actúa de forma idéntica ante cualquier antígeno.",
      "Falso: solo la componen macrófagos y células NK."
    ]
  },
  {
    enunciado: "La presentación antigénica por MHC I dirige la respuesta de linfocitos T CD8⁺ frente a antígenos endógenos.",
    correcta: "Verdadero: los T citotóxicos inducen apoptosis en células infectadas.",
    incorrectas: [
      "Falso: MHC I presenta antígenos exógenos a T CD4⁺ exclusivamente.",
      "Falso: MHC I se expresa únicamente en eritrocitos."
    ]
  },
  {
    enunciado: "La presentación por MHC II activa linfocitos T CD4⁺ frente a antígenos exógenos.",
    correcta: "Verdadero: requiere coestimulación (CD28-B7) para evitar anergia.",
    incorrectas: [
      "Falso: MHC II solo aparece en neuronas y hepatocitos.",
      "Falso: MHC II activa directamente a células B sin participación de T."
    ]
  },
  {
    enunciado: "Las células dendríticas son el principal puente entre inmunidad innata y adaptativa.",
    correcta: "Verdadero: captan, procesan y presentan antígeno en ganglios linfáticos.",
    incorrectas: [
      "Falso: solo están en sangre y no presentan antígenos.",
      "Falso: producen anticuerpos en respuesta primaria."
    ]
  },
  {
    enunciado: "IgM es típica de respuesta primaria y activa eficazmente el complemento.",
    correcta: "Verdadero: su forma pentamérica facilita unión a C1q.",
    incorrectas: [
      "Falso: IgM es la principal inmunoglobulina secretora en mucosas.",
      "Falso: IgM atraviesa la placenta como principal anticuerpo fetal."
    ]
  },
  {
    enunciado: "IgG neutraliza y opsoniza, atraviesa la placenta y participa en inmunidad sistémica.",
    correcta: "Verdadero: es la más abundante en suero en el adulto.",
    incorrectas: [
      "Falso: IgG es exclusiva de secreciones mucosas.",
      "Falso: no puede activar el complemento."
    ]
  },
  {
    enunciado: "IgA es clave en inmunidad mucosal (respiratoria, digestiva) y en leche materna.",
    correcta: "Verdadero: neutraliza patógenos en superficies epiteliales.",
    incorrectas: [
      "Falso: solo se encuentra en médula ósea.",
      "Falso: su función principal es activar basófilos en alergia."
    ]
  },
  {
    enunciado: "IgE media hipersensibilidad inmediata y defensa frente a helmintos.",
    correcta: "Verdadero: se une a receptores de alta afinidad en mastocitos y basófilos.",
    incorrectas: [
      "Falso: es la inmunoglobulina más abundante en suero.",
      "Falso: atraviesa la placenta de forma preferente."
    ]
  },
  {
    enunciado: "En los centros germinales se produce hipermutación somática y maduración de afinidad de anticuerpos.",
    correcta: "Verdadero: dependiente de ayuda Tfh y AID.",
    incorrectas: [
      "Falso: ocurre en timo durante selección positiva.",
      "Falso: consiste en recombinación de TCR en linfocitos T CD8⁺."
    ]
  },
  {
    enunciado: "Los linfocitos T CD4⁺ se diferencian en Th1, Th2, Th17 y Tfh según citocinas y estímulos.",
    correcta: "Verdadero: cada subtipo coordina respuestas frente a patógenos distintos.",
    incorrectas: [
      "Falso: solo existe un subtipo funcional de T CD4⁺.",
      "Falso: su diferenciación depende del complemento, no de citocinas."
    ]
  },
  {
    enunciado: "Las células T reguladoras (Treg) contribuyen a la tolerancia periférica y al control de la inflamación.",
    correcta: "Verdadero: su déficit favorece autoinmunidad.",
    incorrectas: [
      "Falso: su función es destruir patógenos por citotoxicidad directa.",
      "Falso: únicamente producen anticuerpos IgG."
    ]
  },
  {
    enunciado: "Una inmunodeficiencia primaria es un defecto genético del sistema inmune que predispone a infecciones recurrentes.",
    correcta: "Verdadero: ejemplos son SCID, agammaglobulinemia ligada al X o déficit de IgA.",
    incorrectas: [
      "Falso: solo se refiere a déficits por malnutrición.",
      "Falso: son siempre secundarias a infecciones víricas."
    ]
  },
  {
    enunciado: "El VIH provoca inmunodeficiencia secundaria al destruir linfocitos T CD4⁺.",
    correcta: "Verdadero: conduce a infecciones oportunistas y neoplasias.",
    incorrectas: [
      "Falso: incrementa la producción de IgA y evita infecciones.",
      "Falso: solo afecta al sistema nervioso, no al inmune."
    ]
  },
  {
    enunciado: "La inmunidad pasiva confiere protección inmediata mediante anticuerpos preformados, pero no genera memoria.",
    correcta: "Verdadero: útil en profilaxis posexposición o pacientes de riesgo.",
    incorrectas: [
      "Falso: siempre induce memoria de larga duración.",
      "Falso: está contraindicada tras exposiciones de alto riesgo."
    ]
  },
  {
    enunciado: "Las inmunoglobulinas humanas específicas (p. ej., anti-HBs, antirrábica, anti-D) son ejemplos de inmunidad pasiva.",
    correcta: "Verdadero: se administran para neutralización rápida.",
    incorrectas: [
      "Falso: son vacunas vivas atenuadas.",
      "Falso: inducen respuesta celular T citotóxica exclusiva."
    ]
  },
  {
    enunciado: "Las vacunas vivas atenuadas inducen respuestas amplias y memoria intensa, pero están contraindicadas en inmunodeprimidos.",
    correcta: "Verdadero: por riesgo de infección vacunal.",
    incorrectas: [
      "Falso: no generan memoria inmunológica.",
      "Falso: son preferibles en cualquier paciente inmunodeprimido."
    ]
  },
  {
    enunciado: "Las vacunas inactivadas contienen patógenos muertos o fracciones no replicativas.",
    correcta: "Verdadero: suelen requerir dosis de refuerzo y adyuvantes.",
    incorrectas: [
      "Falso: se replican ampliamente en el hospedador.",
      "Falso: siempre se administran por vía intranasal."
    ]
  },
  {
    enunciado: "Las vacunas conjugadas unen polisacáridos capsulares a proteínas portadoras para inducir respuesta T-dependiente en lactantes.",
    correcta: "Verdadero: mejoran memoria y cambio de isotipo.",
    incorrectas: [
      "Falso: están diseñadas para bloquear respuesta T-dependiente.",
      "Falso: solo se emplean frente a virus con envoltura."
    ]
  },
  {
    enunciado: "Las vacunas de ARNm codifican antígenos que la célula huésped expresa transitoriamente.",
    correcta: "Verdadero: desencadenan inmunidad humoral y celular sin genoma viral.",
    incorrectas: [
      "Falso: integran su material en el ADN de la célula por defecto.",
      "Falso: requieren siempre administración intradérmica con virus vivo."
    ]
  },
  {
    enunciado: "Los adyuvantes (como sales de aluminio o emulsiones) potencian la respuesta inmune a los antígenos vacunales.",
    correcta: "Verdadero: mejoran magnitud y duración de la inmunidad.",
    incorrectas: [
      "Falso: neutralizan el antígeno e impiden la inmunización.",
      "Falso: sustituyen al antígeno como único componente activo."
    ]
  },
  {
    enunciado: "La eficacia vacunal se estima en ensayos clínicos, mientras que la efectividad se mide en condiciones de vida real.",
    correcta: "Verdadero: ambas se complementan con la farmacovigilancia de seguridad.",
    incorrectas: [
      "Falso: eficacia y efectividad son sinónimos exactos.",
      "Falso: la seguridad no se monitoriza tras la autorización."
    ]
  },
  {
    enunciado: "La inmunidad de grupo depende de la cobertura vacunal y del R₀ del patógeno.",
    correcta: "Verdadero: coberturas altas interrumpen la transmisión comunitaria.",
    incorrectas: [
      "Falso: solo depende de la virulencia clínica del patógeno.",
      "Falso: es indiferente al número reproductivo básico."
    ]
  },
  {
    enunciado: "La cadena de frío es crítica para conservar la potencia de muchas vacunas durante almacenamiento y distribución.",
    correcta: "Verdadero: temperaturas inadecuadas reducen su inmunogenicidad.",
    incorrectas: [
      "Falso: las vacunas no son sensibles a la temperatura.",
      "Falso: solo afecta a sueros, no a vacunas."
    ]
  },
  {
    enunciado: "Edward Jenner introdujo la primera vacunación eficaz frente a la viruela usando material de vaccinia.",
    correcta: "Verdadero: su observación permitió la profilaxis sistemática.",
    incorrectas: [
      "Falso: Jenner desarrolló la primera vacuna contra la rabia.",
      "Falso: su aportación fue descubrir los antibióticos beta-lactámicos."
    ]
  },
  {
    enunciado: "Louis Pasteur demostró principios de atenuación y desarrolló vacunas como la antirrábica.",
    correcta: "Verdadero: consolidó la vacunología moderna.",
    incorrectas: [
      "Falso: trabajó exclusivamente en genética mendeliana.",
      "Falso: fue el primero en describir el MHC."
    ]
  },
  {
    enunciado: "La serovacunación combina suero específico e inmunización activa en exposiciones de alto riesgo (p. ej., tétanos o rabia).",
    correcta: "Verdadero: aporta protección inmediata y a largo plazo.",
    incorrectas: [
      "Falso: se refiere a administrar dos vacunas vivas el mismo día.",
      "Falso: es sinónimo de tratamiento antibiótico empírico."
    ]
  },
  {
    enunciado: "Las inmunodeficiencias del complemento se asocian a infecciones por bacterias encapsuladas y Neisseria.",
    correcta: "Verdadero: especialmente con déficits terminales (C5–C9).",
    incorrectas: [
      "Falso: protegen frente a sepsis por su ausencia de inflamación.",
      "Falso: solo alteran la producción de anticuerpos IgA."
    ]
  },
  {
    enunciado: "La inmunodeficiencia combinada severa (SCID) cursa con defectos profundos de linfocitos T y B.",
    correcta: "Verdadero: provoca infecciones graves y oportunistas desde la infancia.",
    incorrectas: [
      "Falso: se caracteriza por exceso de IgG y autoinmunidad leve.",
      "Falso: afecta únicamente a neutrófilos maduros."
    ]
  },
  {
    enunciado: "La farmacovigilancia poscomercialización permite detectar eventos adversos raros asociados a vacunas.",
    correcta: "Verdadero: es esencial para la seguridad y la confianza pública.",
    incorrectas: [
      "Falso: las reacciones raras no requieren notificación.",
      "Falso: solo se vigilan fármacos, nunca vacunas."
    ]
  },
  {
    enunciado: "Los antivenenos (antisuero frente a toxinas animales) son inmunidad pasiva heteróloga.",
    correcta: "Verdadero: neutralizan venenos de serpientes, arañas o escorpiones.",
    incorrectas: [
      "Falso: son vacunas inactivadas polivalentes.",
      "Falso: actúan estimulando la producción endógena de IgG."
    ]
  },
  {
    enunciado: "Las VLP (partículas similares a virus) presentan antígenos estructurales sin material genético infeccioso.",
    correcta: "Verdadero: inducen fuerte respuesta humoral (ej., VPH).",
    incorrectas: [
      "Falso: son virus vivos completos con replicación limitada.",
      "Falso: solo sirven como adyuvantes sin antígeno."
    ]
  },
  {
    enunciado: "La vacunación masiva ha permitido la erradicación de la viruela y el control de múltiples enfermedades infecciosas.",
    correcta: "Verdadero: con alto impacto sanitario y económico positivo.",
    incorrectas: [
      "Falso: no ha cambiado la historia natural de ninguna infección.",
      "Falso: incrementa de forma generalizada la mortalidad infantil."
    ]
  },
  {
    enunciado: "Las células NK reconocen células estresadas o con MHC I reducido y median citotoxicidad.",
    correcta: "Verdadero: participan también en ADCC mediante FcγRIII.",
    incorrectas: [
      "Falso: solo actúan tras presentar antígeno por MHC II.",
      "Falso: su función principal es producir anticuerpos IgM."
    ]
  },
  {
    enunciado: "El cambio de isotipo (class switch) permite a una célula B mantener especificidad antigénica pero modificar la función efectora del anticuerpo.",
    correcta: "Verdadero: mediado por AID y señales de citocinas y CD40.",
    incorrectas: [
      "Falso: cambia el parátopo y pierde la especificidad inicial.",
      "Falso: solo ocurre en linfocitos T CD4⁺."
    ]
  },
  {
    enunciado: "La cooperación entre respuesta innata y adaptativa es esencial para la defensa eficaz frente a patógenos.",
    correcta: "Verdadero: la innata activa y orienta la adaptativa; la adaptativa potencia la innata.",
    incorrectas: [
      "Falso: ambas respuestas compiten y se inhiben mutuamente.",
      "Falso: la adaptativa no necesita señales de la innata."
    ]
  }
];
