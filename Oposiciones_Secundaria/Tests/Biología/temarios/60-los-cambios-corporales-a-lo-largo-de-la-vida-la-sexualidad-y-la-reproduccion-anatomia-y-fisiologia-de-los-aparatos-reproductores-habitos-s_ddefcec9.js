// temarios/60-los-cambios-corporales-a-lo-largo-de-la-vida-la-sexualidad-y-la-reproduccion-anatomia-y-fisiologia-de-los-aparatos-reproductores-habitos-saludables-y-principales-enfermedades.js
var PREGUNTAS = [
  {
    enunciado: "La sexualidad humana integra dimensiones biológicas, psicológicas y sociales que se desarrollan a lo largo de todo el ciclo vital.",
    correcta: "Verdadero: es un fenómeno multidimensional y continuo desde la infancia hasta la vejez.",
    incorrectas: [
      "Falso: es un fenómeno exclusivamente biológico y restringido a la pubertad.",
      "Falso: solo depende de factores culturales y no guarda relación con la biología."
    ]
  },
  {
    enunciado: "Durante la niñez, las diferencias sexuales en talla y composición corporal son generalmente pequeñas y se acentúan en la pubertad.",
    correcta: "Verdadero: el dimorfismo sexual aumenta con la acción de las hormonas gonadales.",
    incorrectas: [
      "Falso: el dimorfismo sexual máximo se observa en la primera infancia.",
      "Falso: las hormonas gonadales no influyen en el dimorfismo sexual."
    ]
  },
  {
    enunciado: "La activación del eje hipotálamo–hipófisis–gónadas (HPG) es un evento clave del inicio de la pubertad.",
    correcta: "Verdadero: la GnRH estimula la secreción de FSH y LH que actúan en gónadas.",
    incorrectas: [
      "Falso: la pubertad se inicia por descenso de FSH y LH.",
      "Falso: el eje HPG solo se activa tras el primer embarazo."
    ]
  },
  {
    enunciado: "En la pubertad femenina, la menarquia suele ir precedida por un periodo de crecimiento acelerado y ellarquía (inicio del desarrollo mamario).",
    correcta: "Verdadero: forman parte de la secuencia típica del desarrollo puberal.",
    incorrectas: [
      "Falso: la menarquia ocurre antes de cualquier cambio corporal visible.",
      "Falso: la menarquia depende de la secreción testicular de testosterona."
    ]
  },
  {
    enunciado: "La espermarquia señala el inicio funcional de la capacidad reproductiva masculina.",
    correcta: "Verdadero: indica que la espermatogénesis ha alcanzado eficacia.",
    incorrectas: [
      "Falso: la espermarquia corresponde a la primera ovulación masculina.",
      "Falso: la espermarquia es un marcador exclusivo de la andropausia."
    ]
  },
  {
    enunciado: "En la edad adulta suele alcanzarse la estabilidad hormonal y la plena funcionalidad de la reproducción.",
    correcta: "Verdadero: el eje HPG mantiene ciclos ovulatorios y espermatogénesis regulares.",
    incorrectas: [
      "Falso: la edad adulta se caracteriza por cese completo de la función gonadal.",
      "Falso: en la edad adulta desaparece la regulación hipofisaria."
    ]
  },
  {
    enunciado: "La menopausia se define como el cese permanente de la menstruación, asociado a depleción folicular ovárica y descenso sostenido de estrógenos.",
    correcta: "Verdadero: culmina el periodo fértil y se acompaña de cambios sistémicos.",
    incorrectas: [
      "Falso: la menopausia es un episodio aislado de sangrado abundante.",
      "Falso: la menopausia implica aumento mantenido de estrógenos."
    ]
  },
  {
    enunciado: "Con la edad, en el varón se observa una disminución progresiva de testosterona y de la fertilidad, sin un cese brusco equivalente a la menopausia.",
    correcta: "Verdadero: el descenso es gradual y variable entre individuos.",
    incorrectas: [
      "Falso: existe un cese súbito universal de la espermatogénesis a los 50 años.",
      "Falso: la testosterona aumenta de forma marcada a partir de los 60 años."
    ]
  },
  {
    enunciado: "Los ovarios producen ovocitos y hormonas sexuales como estrógenos y progesterona.",
    correcta: "Verdadero: cumplen funciones gametogénicas y endocrinas.",
    incorrectas: [
      "Falso: solo producen hormonas y los ovocitos se forman en el útero.",
      "Falso: la producción hormonal femenina depende de la corteza suprarrenal exclusivamente."
    ]
  },
  {
    enunciado: "Las trompas de Falopio captan el ovocito ovulado y constituyen el lugar más frecuente de fecundación.",
    correcta: "Verdadero: la fecundación suele ocurrir en la ampolla tubárica.",
    incorrectas: [
      "Falso: la fecundación normal ocurre siempre en la cavidad uterina.",
      "Falso: las trompas solo transportan espermatozoides hacia el ovario."
    ]
  },
  {
    enunciado: "El útero es un órgano muscular destinado a la implantación del embrión, el desarrollo fetal y el parto.",
    correcta: "Verdadero: su endometrio cicla y su miometrio participa en el alumbramiento.",
    incorrectas: [
      "Falso: el útero es una glándula endocrina sin función gestacional.",
      "Falso: la implantación normal ocurre en la pared abdominal."
    ]
  },
  {
    enunciado: "El ciclo menstrual incluye fases menstrual, proliferativa, ovulatoria y secretora, coordinadas por FSH, LH, estrógenos y progesterona.",
    correcta: "Verdadero: la ovulación se asocia a un pico de LH a mitad de ciclo.",
    incorrectas: [
      "Falso: la ovulación depende de un descenso abrupto de LH y FSH.",
      "Falso: el endometrio no sufre cambios cíclicos durante el mes."
    ]
  },
  {
    enunciado: "La ovogénesis presenta pausas meióticas prolongadas y culmina con la ovulación y posible fecundación.",
    correcta: "Verdadero: el ovocito II completa la meiosis solo si es fecundado.",
    incorrectas: [
      "Falso: la meiosis femenina se completa al nacer.",
      "Falso: la ovogénesis produce millones de ovocitos cada día."
    ]
  },
  {
    enunciado: "Los testículos producen espermatozoides en los túbulos seminíferos y testosterona en las células de Leydig.",
    correcta: "Verdadero: combinan funciones exocrinas y endocrinas.",
    incorrectas: [
      "Falso: la testosterona se sintetiza en el epidídimo.",
      "Falso: los espermatozoides se producen en la próstata."
    ]
  },
  {
    enunciado: "La espermatogénesis está regulada por FSH, LH y testosterona, y culmina con la maduración espermática en el epidídimo.",
    correcta: "Verdadero: la FSH actúa sobre células de Sertoli y la LH sobre Leydig.",
    incorrectas: [
      "Falso: depende exclusivamente de prolactina sin participación de andrógenos.",
      "Falso: la maduración final ocurre en la médula renal."
    ]
  },
  {
    enunciado: "Las glándulas accesorias masculinas (vesículas seminales y próstata) aportan secreciones que nutren y protegen a los espermatozoides.",
    correcta: "Verdadero: contribuyen al volumen y al pH del semen.",
    incorrectas: [
      "Falso: solo producen hormonas y no participan del semen.",
      "Falso: sus secreciones son ácidas letales para los espermatozoides."
    ]
  },
  {
    enunciado: "La capacitación espermática en el tracto femenino aumenta la capacidad de los espermatozoides para realizar la reacción acrosómica.",
    correcta: "Verdadero: modifica membranas y motilidad para atravesar la zona pelúcida.",
    incorrectas: [
      "Falso: la capacitación ocurre en la próstata antes de la eyaculación.",
      "Falso: la capacitación inhibe la reacción acrosómica."
    ]
  },
  {
    enunciado: "La fecundación comprende el reconocimiento del ovocito, la reacción acrosómica, la penetración de la zona pelúcida y la singamia.",
    correcta: "Verdadero: culmina con la formación del cigoto diploide.",
    incorrectas: [
      "Falso: la fecundación excluye la fusión de pronúcleos.",
      "Falso: la fecundación normal genera un embrión haploide."
    ]
  },
  {
    enunciado: "La implantación normal del blastocisto tiene lugar en el endometrio del cuerpo uterino.",
    correcta: "Verdadero: requiere un endometrio receptivo en fase secretora.",
    incorrectas: [
      "Falso: la implantación fisiológica ocurre en el tercio distal de la trompa.",
      "Falso: la implantación correcta es cervical para facilitar el parto."
    ]
  },
  {
    enunciado: "La placenta permite el intercambio de gases y nutrientes, así como el paso de anticuerpos maternos IgG al feto.",
    correcta: "Verdadero: actúa como órgano de intercambio y barrera inmunológica selectiva.",
    incorrectas: [
      "Falso: la placenta impide todo intercambio de sustancias.",
      "Falso: solo permite el paso de células sanguíneas completas."
    ]
  },
  {
    enunciado: "La lactancia está regulada principalmente por prolactina (síntesis de leche) y oxitocina (eyección láctea).",
    correcta: "Verdadero: ambas hormonas desempeñan funciones complementarias.",
    incorrectas: [
      "Falso: la oxitocina inhibe la eyección de leche.",
      "Falso: la prolactina solo regula la espermatogénesis."
    ]
  },
  {
    enunciado: "Los métodos anticonceptivos incluyen procedimientos de barrera, hormonales, dispositivos intrauterinos, conductuales y esterilización quirúrgica.",
    correcta: "Verdadero: difieren en mecanismo, eficacia y reversibilidad.",
    incorrectas: [
      "Falso: todos actúan aumentando la fertilidad de forma controlada.",
      "Falso: no existe diferencia de eficacia entre métodos."
    ]
  },
  {
    enunciado: "El preservativo es el único método anticonceptivo que además reduce el riesgo de infecciones de transmisión sexual (ITS).",
    correcta: "Verdadero: proporciona doble protección cuando se usa correctamente.",
    incorrectas: [
      "Falso: los hormonales protegen frente a ITS por acción sistémica.",
      "Falso: ningún método influye en el riesgo de ITS."
    ]
  },
  {
    enunciado: "La vacunación frente al VPH reduce el riesgo de cáncer de cuello uterino y otras lesiones asociadas al virus.",
    correcta: "Verdadero: es una estrategia preventiva primaria eficaz.",
    incorrectas: [
      "Falso: solo es útil una vez diagnosticado el cáncer.",
      "Falso: aumenta el riesgo de infección por VPH."
    ]
  },
  {
    enunciado: "El VIH, la sífilis, la gonorrea, la clamidiasis y el herpes genital son ejemplos de ITS con repercusiones reproductivas y generales.",
    correcta: "Verdadero: algunas pueden causar infertilidad o complicaciones perinatales.",
    incorrectas: [
      "Falso: las ITS no afectan a la fertilidad humana.",
      "Falso: todas las ITS son exclusivamente víricas."
    ]
  },
  {
    enunciado: "El síndrome de ovario poliquístico se asocia a anovulación crónica, hiperandrogenismo y alteraciones menstruales.",
    correcta: "Verdadero: puede cursar con subfertilidad e irregularidades del ciclo.",
    incorrectas: [
      "Falso: se caracteriza por hiperestrogenismo con ovulación excesiva.",
      "Falso: es una infección bacteriana del ovario."
    ]
  },
  {
    enunciado: "La endometriosis implica tejido endometrial ectópico que puede provocar dolor pélvico e infertilidad.",
    correcta: "Verdadero: las lesiones ectópicas responden a estímulos hormonales.",
    incorrectas: [
      "Falso: es una neoplasia maligna exclusiva del miometrio.",
      "Falso: solo aparece durante la gestación."
    ]
  },
  {
    enunciado: "El cáncer de próstata es uno de los tumores más frecuentes en varones adultos y puede detectarse mediante cribado individualizado.",
    correcta: "Verdadero: el diagnóstico precoz mejora el pronóstico en casos seleccionados.",
    incorrectas: [
      "Falso: solo afecta a adolescentes y jóvenes.",
      "Falso: no existen herramientas diagnósticas para su detección."
    ]
  },
  {
    enunciado: "El cáncer de cérvix está estrechamente relacionado con la infección persistente por tipos oncogénicos de VPH.",
    correcta: "Verdadero: la prevención incluye vacunación y cribado citológico/HPV.",
    incorrectas: [
      "Falso: no guarda relación con agentes infecciosos.",
      "Falso: es exclusivo de mujeres posmenopáusicas."
    ]
  },
  {
    enunciado: "La infertilidad se define como la ausencia de gestación tras 12 meses de relaciones sexuales regulares sin protección.",
    correcta: "Verdadero: puede deberse a factores femeninos, masculinos o mixtos.",
    incorrectas: [
      "Falso: se diagnostica tras un mes sin embarazo.",
      "Falso: solo se considera si existen ITS previas."
    ]
  },
  {
    enunciado: "Las técnicas de reproducción asistida incluyen inseminación intrauterina, fecundación in vitro y microinyección intracitoplasmática (ICSI).",
    correcta: "Verdadero: permiten superar diversas causas de infertilidad.",
    incorrectas: [
      "Falso: consisten en terapia hormonal para suprimir la ovulación permanentemente.",
      "Falso: solo se aplican en patología pediátrica."
    ]
  },
  {
    enunciado: "El desarrollo embrionario temprano comprende segmentación, mórula, blastocisto y posterior gastrulación.",
    correcta: "Verdadero: son etapas secuenciales desde el cigoto hasta las capas germinales.",
    incorrectas: [
      "Falso: el embrión madura directamente a feto sin etapas intermedias.",
      "Falso: la gastrulación antecede a la fecundación."
    ]
  },
  {
    enunciado: "Los gemelos monocigóticos derivan de un mismo cigoto que se divide, mientras que los dicigóticos proceden de dos ovocitos fecundados por espermatozoides distintos.",
    correcta: "Verdadero: explican gemelaridad idéntica y fraterna respectivamente.",
    incorrectas: [
      "Falso: los monocigóticos surgen de dos cigotos diferentes.",
      "Falso: los dicigóticos comparten 100 % del genoma."
    ]
  },
  {
    enunciado: "El consentimiento informado y el respeto mutuo son componentes centrales de una vida sexual saludable.",
    correcta: "Verdadero: forman parte de la salud sexual y los derechos sexuales.",
    incorrectas: [
      "Falso: solo competen al ámbito legal y no al sanitario o educativo.",
      "Falso: basta con la ausencia de ITS para hablar de salud sexual."
    ]
  },
  {
    enunciado: "La educación afectivo-sexual basada en evidencia contribuye a retrasar conductas de riesgo y a mejorar el uso de métodos anticonceptivos.",
    correcta: "Verdadero: la información rigurosa favorece decisiones responsables.",
    incorrectas: [
      "Falso: incrementa de forma inevitable las conductas de riesgo.",
      "Falso: solo es útil en población mayor de 40 años."
    ]
  },
  {
    enunciado: "El uso correcto y consistente del preservativo reduce la transmisión de VIH y otras ITS de transmisión por fluidos.",
    correcta: "Verdadero: la eficacia depende de la adherencia y del uso adecuado.",
    incorrectas: [
      "Falso: no tiene efecto en la prevención de ITS.",
      "Falso: su eficacia no se ve afectada por el uso incorrecto."
    ]
  },
  {
    enunciado: "Los anticonceptivos hormonales combinados actúan principalmente inhibiendo la ovulación mediante supresión de LH y FSH.",
    correcta: "Verdadero: además espesan el moco cervical y alteran el endometrio.",
    incorrectas: [
      "Falso: aumentan la ovulación para evitar la implantación.",
      "Falso: su único efecto es destruir espermatozoides en el útero."
    ]
  },
  {
    enunciado: "La anticoncepción de emergencia es más eficaz cuanto antes se administra tras una relación sin protección.",
    correcta: "Verdadero: su eficacia decrece con el tiempo transcurrido.",
    incorrectas: [
      "Falso: es igual de eficaz si se toma semanas después.",
      "Falso: sustituye a los métodos regulares sin pérdida de eficacia."
    ]
  },
  {
    enunciado: "La higiene íntima, los chequeos médicos periódicos y la vacunación forman parte de los hábitos saludables en salud sexual y reproductiva.",
    correcta: "Verdadero: constituyen medidas preventivas de primer nivel.",
    incorrectas: [
      "Falso: carecen de impacto en la salud reproductiva.",
      "Falso: solo son necesarios durante el embarazo."
    ]
  },
  {
    enunciado: "El testículo no descendido (criptorquidia) no corregido puede asociarse a subfertilidad y mayor riesgo de malignización.",
    correcta: "Verdadero: requiere valoración y tratamiento en la infancia.",
    incorrectas: [
      "Falso: no tiene repercusiones si no se trata.",
      "Falso: es una variante normal sin importancia clínica."
    ]
  },
  {
    enunciado: "La dismenorrea primaria se relaciona con el ciclo ovulatorio y suele responder a antiinflamatorios y medidas higiénico-dietéticas.",
    correcta: "Verdadero: se asocia a prostaglandinas y contracciones uterinas.",
    incorrectas: [
      "Falso: siempre implica patología orgánica severa.",
      "Falso: solo puede tratarse con cirugía."
    ]
  },
  {
    enunciado: "Las prácticas sexuales seguras incluyen el uso de preservativo, la reducción de parejas de alto riesgo y el cribado periódico de ITS en personas expuestas.",
    correcta: "Verdadero: son pilares de prevención primaria y secundaria.",
    incorrectas: [
      "Falso: el cribado es innecesario si no hay síntomas.",
      "Falso: el preservativo solo protege frente a embarazo."
    ]
  }
];
