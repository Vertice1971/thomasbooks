// temarios/61-la-salud-y-la-enfermedad-evolucion-del-concepto-de-salud-las-enfermedades-de-nuestro-tiempo-la-drogodependencia-estilos-de-vida-saludables.js
var PREGUNTAS = [
  {
    enunciado: "Según la OMS (1948), la salud es un estado de completo bienestar físico, mental y social, y no solo la ausencia de enfermedad.",
    correcta: "Verdadero: la definición enfatiza el bienestar integral más allá de lo biomédico.",
    incorrectas: [
      "Falso: la OMS define la salud únicamente como ausencia de síntomas.",
      "Falso: la OMS limita la salud al rendimiento físico deportivo."
    ]
  },
  {
    enunciado: "El modelo biomédico clásico identifica salud con ausencia de enfermedad, lo que resulta insuficiente para explicar los problemas de salud pública actuales.",
    correcta: "Verdadero: ignora determinantes sociales, ambientales y conductuales.",
    incorrectas: [
      "Falso: es plenamente suficiente para abordar ENT, salud mental y desigualdades.",
      "Falso: incluye de forma central los factores sociales y educativos."
    ]
  },
  {
    enunciado: "La salutogénesis (Antonovsky) focaliza el origen de la salud y los recursos de afrontamiento, no solo los factores de riesgo.",
    correcta: "Verdadero: introduce el sentido de coherencia y la resiliencia.",
    incorrectas: [
      "Falso: se centra exclusivamente en patogénesis y enfermedad.",
      "Falso: plantea que la salud depende solo de la genética."
    ]
  },
  {
    enunciado: "Los determinantes sociales de la salud explican gran parte del gradiente de morbilidad y mortalidad entre grupos socioeconómicos.",
    correcta: "Verdadero: educación, renta, empleo y entorno influyen decisivamente.",
    incorrectas: [
      "Falso: la salud individual no se relaciona con el contexto social.",
      "Falso: solo los factores biológicos determinan la esperanza de vida."
    ]
  },
  {
    enunciado: "La prevención primaria actúa antes de que aparezca la enfermedad, reduciendo la incidencia.",
    correcta: "Verdadero: incluye vacunación, políticas de tabaco y promoción de actividad física.",
    incorrectas: [
      "Falso: corresponde a programas de cribado para diagnósticos precoces.",
      "Falso: es rehabilitación tras el daño establecido (prevención terciaria)."
    ]
  },
  {
    enunciado: "La Carta de Ottawa sitúa la promoción de la salud en la creación de entornos favorables, políticas públicas saludables y acción comunitaria.",
    correcta: "Verdadero: promueve habilidades personales y reorientación de servicios.",
    incorrectas: [
      "Falso: reduce la promoción a campañas informativas puntuales.",
      "Falso: se limita a intervenciones clínicas individuales."
    ]
  },
  {
    enunciado: "La incidencia mide casos nuevos en un periodo, mientras que la prevalencia refleja el total de casos (nuevos y antiguos) en un momento dado.",
    correcta: "Verdadero: son indicadores complementarios de dinámica poblacional.",
    incorrectas: [
      "Falso: prevalencia y incidencia son sinónimos intercambiables.",
      "Falso: la incidencia solo se usa en enfermedades crónicas."
    ]
  },
  {
    enunciado: "Los AVAD/AVISA (años de vida ajustados por discapacidad) combinan mortalidad prematura y pérdida de salud por discapacidad.",
    correcta: "Verdadero: permiten comparar carga de enfermedad entre causas y países.",
    incorrectas: [
      "Falso: solo miden mortalidad cruda sin ajustar por discapacidad.",
      "Falso: se aplican únicamente a lesiones traumáticas."
    ]
  },
  {
    enunciado: "La transición epidemiológica describe el paso de un predominio de enfermedades infecciosas a uno de enfermedades no transmisibles.",
    correcta: "Verdadero: acompañada de envejecimiento poblacional y cambios sociales.",
    incorrectas: [
      "Falso: implica sustitución de ENT por infecciosas en países desarrollados.",
      "Falso: se refiere a mutaciones virales durante una pandemia."
    ]
  },
  {
    enunciado: "La resistencia antimicrobiana es una amenaza global que incrementa morbimortalidad y costes sanitarios.",
    correcta: "Verdadero: deriva del uso inadecuado de antibióticos en humanos y animales.",
    incorrectas: [
      "Falso: solo afecta a infecciones víricas como la gripe estacional.",
      "Falso: se resuelve aumentando la dosis de antibióticos en todos los casos."
    ]
  },
  {
    enunciado: "La vacunación frente a enfermedades prevenibles constituye un ejemplo de prevención primaria efectiva.",
    correcta: "Verdadero: reduce la incidencia y protege a la comunidad (inmunidad colectiva).",
    incorrectas: [
      "Falso: es una estrategia de prevención terciaria.",
      "Falso: solo modifica la letalidad sin afectar a la incidencia."
    ]
  },
  {
    enunciado: "El cribado de cáncer colorrectal con test de sangre oculta en heces es un ejemplo de prevención secundaria.",
    correcta: "Verdadero: persigue el diagnóstico precoz para mejorar el pronóstico.",
    incorrectas: [
      "Falso: es prevención primaria basada en dieta.",
      "Falso: se considera una medida de rehabilitación funcional."
    ]
  },
  {
    enunciado: "La prevención cuaternaria busca evitar intervenciones innecesarias e iatrogenia.",
    correcta: "Verdadero: promueve el uso prudente de pruebas y tratamientos.",
    incorrectas: [
      "Falso: propone maximizar pruebas diagnósticas en población sana.",
      "Falso: equivale a cuidados paliativos en pacientes terminales."
    ]
  },
  {
    enunciado: "Los trastornos depresivos y de ansiedad contribuyen de forma importante a la carga global de enfermedad.",
    correcta: "Verdadero: impactan en funcionalidad, calidad de vida y mortalidad.",
    incorrectas: [
      "Falso: su contribución poblacional es despreciable.",
      "Falso: no afectan al rendimiento académico ni laboral."
    ]
  },
  {
    enunciado: "El sedentarismo y la dieta hipercalórica favorecen obesidad, diabetes tipo 2 y enfermedades cardiovasculares.",
    correcta: "Verdadero: modifican el riesgo cardiometabólico a medio y largo plazo.",
    incorrectas: [
      "Falso: no guardan relación con ENT.",
      "Falso: solo influyen en la estatura final, no en la morbilidad."
    ]
  },
  {
    enunciado: "El tabaco es el principal factor de riesgo evitable de morbimortalidad en muchos países.",
    correcta: "Verdadero: se asocia a cáncer, EPOC y eventos cardiovasculares.",
    incorrectas: [
      "Falso: su consumo moderado mejora la función pulmonar.",
      "Falso: solo se relaciona con caries dental."
    ]
  },
  {
    enunciado: "El consumo nocivo de alcohol incrementa el riesgo de cirrosis, determinados cánceres, lesiones y violencia.",
    correcta: "Verdadero: además eleva la carga de enfermedad mental.",
    incorrectas: [
      "Falso: no tiene repercusiones sociales ni sanitarias.",
      "Falso: previene el cáncer de hígado a largo plazo."
    ]
  },
  {
    enunciado: "La contaminación atmosférica se vincula con enfermedades cardiovasculares y respiratorias.",
    correcta: "Verdadero: partículas finas y NO₂ aumentan ingresos y mortalidad.",
    incorrectas: [
      "Falso: no se ha demostrado relación con la salud humana.",
      "Falso: solo afecta al rendimiento deportivo de élite."
    ]
  },
  {
    enunciado: "Un sueño insuficiente y de mala calidad se asocia a peor salud mental y metabólica.",
    correcta: "Verdadero: aumenta riesgo de obesidad, diabetes y depresión.",
    incorrectas: [
      "Falso: dormir poco mejora la regulación emocional.",
      "Falso: el sueño no guarda relación con la salud."
    ]
  },
  {
    enunciado: "Se recomienda para adultos al menos 150–300 minutos semanales de actividad física aeróbica moderada o 75–150 de vigorosa.",
    correcta: "Verdadero: además de dos días/semana de fortalecimiento muscular.",
    incorrectas: [
      "Falso: la recomendación es evitar toda actividad vigorosa.",
      "Falso: solo se aconseja ejercicio en mayores de 70 años."
    ]
  },
  {
    enunciado: "Los patrones dietéticos tipo mediterráneo se asocian con menor riesgo cardiovascular.",
    correcta: "Verdadero: priorizan vegetales, legumbres, AOVE y pescado.",
    incorrectas: [
      "Falso: promueven ultraprocesados y azúcares libres.",
      "Falso: incrementan el riesgo de ictus en población sana."
    ]
  },
  {
    enunciado: "El estrés crónico se relaciona con mayor riesgo de hipertensión, depresión y problemas de sueño.",
    correcta: "Verdadero: las técnicas de manejo del estrés pueden ser protectoras.",
    incorrectas: [
      "Falso: no tiene efectos biológicos demostrables.",
      "Falso: solo afecta a deportistas profesionales."
    ]
  },
  {
    enunciado: "Una droga es toda sustancia que, introducida en el organismo, altera la función del sistema nervioso central y puede generar dependencia.",
    correcta: "Verdadero: incluye drogas legales e ilegales.",
    incorrectas: [
      "Falso: por definición solo abarca sustancias ilegales.",
      "Falso: excluye fármacos de prescripción médica."
    ]
  },
  {
    enunciado: "La tolerancia implica necesidad de dosis crecientes para conseguir el mismo efecto.",
    correcta: "Verdadero: puede deberse a adaptaciones farmacodinámicas.",
    incorrectas: [
      "Falso: significa hipersensibilidad a dosis decrecientes.",
      "Falso: es sinónimo de abstinencia."
    ]
  },
  {
    enunciado: "El sistema mesolímbico dopaminérgico participa en los mecanismos de refuerzo implicados en las adicciones.",
    correcta: "Verdadero: el núcleo accumbens es un nodo clave.",
    incorrectas: [
      "Falso: la dopamina no interviene en el refuerzo.",
      "Falso: solo está implicado en la termorregulación."
    ]
  },
  {
    enunciado: "La nicotina posee alto potencial adictivo y se asocia a dependencia rápida.",
    correcta: "Verdadero: su farmacocinética favorece reforzamiento frecuente.",
    incorrectas: [
      "Falso: no genera dependencia significativa.",
      "Falso: protege frente a EPOC y cáncer de pulmón."
    ]
  },
  {
    enunciado: "El consumo regular de cannabis en la adolescencia puede afectar memoria, atención y aprendizaje.",
    correcta: "Verdadero: el cerebro en desarrollo es especialmente vulnerable.",
    incorrectas: [
      "Falso: mejora de forma estable la función cognitiva.",
      "Falso: solo altera el equilibrio vestibular."
    ]
  },
  {
    enunciado: "La cocaína incrementa el riesgo de eventos cardiovasculares agudos (p. ej., infarto de miocardio).",
    correcta: "Verdadero: eleva frecuencia cardiaca y presión arterial.",
    incorrectas: [
      "Falso: reduce la agregación plaquetaria y previene infartos.",
      "Falso: carece de efectos sobre el sistema cardiovascular."
    ]
  },
  {
    enunciado: "Las sobredosis de opiáceos pueden revertirse con antagonistas como la naloxona.",
    correcta: "Verdadero: bloquea receptores opioides y revierte depresión respiratoria.",
    incorrectas: [
      "Falso: los opiáceos no provocan depresión respiratoria.",
      "Falso: la naloxona potencia los efectos euforizantes."
    ]
  },
  {
    enunciado: "El uso prolongado e indiscriminado de benzodiacepinas puede conducir a dependencia y deterioro cognitivo.",
    correcta: "Verdadero: requiere prescripción y retirada gradual.",
    incorrectas: [
      "Falso: carecen de potencial de dependencia.",
      "Falso: mejoran permanentemente la memoria a largo plazo."
    ]
  },
  {
    enunciado: "Las adicciones comportamentales comparten con las de sustancias patrones de pérdida de control y refuerzo negativo.",
    correcta: "Verdadero: pueden cursar con tolerancia y abstinencia psicológica.",
    incorrectas: [
      "Falso: no generan cambios conductuales ni neurobiológicos.",
      "Falso: solo afectan a mayores de 65 años."
    ]
  },
  {
    enunciado: "Los programas escolares basados en habilidades para la vida y clima de centro reducen el inicio de consumo de sustancias.",
    correcta: "Verdadero: la evidencia avala intervenciones universales bien diseñadas.",
    incorrectas: [
      "Falso: la prevención escolar es ineficaz por definición.",
      "Falso: solo sirven los testimonios impactantes sin trabajo pedagógico."
    ]
  },
  {
    enunciado: "La intervención breve en Atención Primaria es útil para reducir el consumo de alcohol de riesgo.",
    correcta: "Verdadero: cribado + consejo estructurado muestran eficacia.",
    incorrectas: [
      "Falso: solo es efectiva en consumo de cocaína.",
      "Falso: requiere siempre ingreso hospitalario."
    ]
  },
  {
    enunciado: "La reducción de daños incluye intercambio de jeringuillas, tratamiento sustitutivo con opiáceos y salas de consumo supervisado.",
    correcta: "Verdadero: disminuye sobredosis e infecciones sin aumentar consumo.",
    incorrectas: [
      "Falso: incrementa mortalidad y transmisión de VIH.",
      "Falso: se opone a cualquier tratamiento de deshabituación."
    ]
  },
  {
    enunciado: "Las políticas fiscales (impuestos especiales) y las restricciones de publicidad reducen el consumo de tabaco y alcohol a nivel poblacional.",
    correcta: "Verdadero: son medidas costo-efectivas de salud pública.",
    incorrectas: [
      "Falso: aumentan el consumo por ‘efecto rebote’.",
      "Falso: solo funcionan en entornos clínicos individuales."
    ]
  },
  {
    enunciado: "El gradiente social de la salud refleja que, a medida que mejora la posición socioeconómica, mejoran sistemáticamente los resultados de salud.",
    correcta: "Verdadero: es un patrón continuo y no solo un umbral de pobreza.",
    incorrectas: [
      "Falso: solo las personas más ricas y más pobres difieren en salud.",
      "Falso: no existen inequidades evitables en salud."
    ]
  },
  {
    enunciado: "La salud digital exige abordar la desinformación sanitaria y promover alfabetización en salud y pensamiento crítico.",
    correcta: "Verdadero: mejora decisiones y uso responsable de tecnologías.",
    incorrectas: [
      "Falso: la desinformación carece de impacto clínico.",
      "Falso: basta con prohibir internet para resolver el problema."
    ]
  },
  {
    enunciado: "La vacunación frente al VPH previene lesiones precancerosas y reduce el riesgo de cáncer de cérvix.",
    correcta: "Verdadero: constituye prevención primaria eficaz.",
    incorrectas: [
      "Falso: solo es útil tras el diagnóstico de cáncer invasivo.",
      "Falso: aumenta la probabilidad de infección por VPH."
    ]
  },
  {
    enunciado: "El uso racional de antibióticos forma parte de la seguridad del paciente y de la estrategia frente a resistencias.",
    correcta: "Verdadero: implica prescribir solo cuando están indicados y con pauta adecuada.",
    incorrectas: [
      "Falso: se recomiendan siempre ‘por si acaso’.",
      "Falso: los antibióticos son eficaces frente a virus comunes."
    ]
  },
  {
    enunciado: "Hoy se entiende la salud como un proceso dinámico de equilibrio biopsicosocial a lo largo del curso de vida.",
    correcta: "Verdadero: integra biología, conductas y contexto socioambiental.",
    incorrectas: [
      "Falso: es un estado fijo definido únicamente al nacer.",
      "Falso: depende exclusivamente de la herencia genética."
    ]
  }
];
