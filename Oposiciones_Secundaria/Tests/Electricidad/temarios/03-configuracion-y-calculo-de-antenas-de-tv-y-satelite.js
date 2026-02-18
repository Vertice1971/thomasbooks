// temarios/03-configuracion-y-calculo-de-antenas-de-tv-y-satelite.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué relación correcta existe entre frecuencia y longitud de onda en una onda electromagnética?",
    correcta: "A mayor frecuencia, menor longitud de onda, porque ambas magnitudes son inversamente proporcionales",
    incorrectas: [
      "A mayor frecuencia, mayor longitud de onda, porque ambas aumentan a la vez",
      "Frecuencia y longitud de onda no guardan relación, dependen solo de la amplitud"
    ]
  },
  {
    enunciado: "¿Qué representa la fase de una señal electromagnética en el análisis de recepción?",
    correcta: "El estado relativo de la onda respecto a una referencia, relevante para sumas, cancelaciones e interferencias",
    incorrectas: [
      "La potencia eléctrica consumida por el receptor en vatios",
      "La resistencia mecánica del mástil frente al viento"
    ]
  },
  {
    enunciado: "¿Qué rango de frecuencias corresponde a la TDT en UHF tras el Segundo Dividendo Digital según el temario?",
    correcta: "De 470 MHz a 694 MHz",
    incorrectas: [
      "De 694 MHz a 862 MHz",
      "De 88 MHz a 108 MHz"
    ]
  },
  {
    enunciado: "¿Qué rango de frecuencias corresponde a la banda KU para satélite indicada en el temario?",
    correcta: "De 10,7 GHz a 12,75 GHz",
    incorrectas: [
      "De 950 MHz a 2150 MHz",
      "De 3,4 GHz a 3,8 GHz"
    ]
  },
  {
    enunciado: "¿Qué significa la ganancia de una antena expresada en dB o dBi?",
    correcta: "La comparación de la potencia en una dirección respecto a una antena de referencia, indicando concentración de recepción o radiación",
    incorrectas: [
      "La sección del conductor coaxial necesaria para evitar caídas de tensión",
      "La capacidad de la antena para convertir KU a FI sin LNB"
    ]
  },
  {
    enunciado: "¿Qué describe principalmente la directividad de una antena?",
    correcta: "Su capacidad de concentrar la energía o la sensibilidad de recepción en una dirección preferente",
    incorrectas: [
      "La capacidad de variar el voltaje del LNB entre 13 V y 18 V",
      "El estándar de impedancia del coaxial en instalaciones de TV"
    ]
  },
  {
    enunciado: "¿Qué representa el ángulo de apertura de una antena directiva?",
    correcta: "El ancho del lóbulo principal, que indica cuánto se concentra la recepción o radiación en el espacio",
    incorrectas: [
      "El margen de potencia permitido por ICT-2 en la toma de usuario",
      "La frecuencia intermedia FI a la que trabaja el satélite"
    ]
  },
  {
    enunciado: "¿Para qué sirve la relación Delante/Atrás (F/B) en una antena terrestre?",
    correcta: "Para estimar cuánto rechaza señales que llegan desde la parte posterior, mejorando selectividad frente a interferencias",
    incorrectas: [
      "Para calcular la elevación del satélite sin necesidad de brújula",
      "Para determinar la longitud de onda a partir del número de directores"
    ]
  },
  {
    enunciado: "¿Cuál es la impedancia estándar indicada para instalaciones de TV por coaxial?",
    correcta: "75 ohmios",
    incorrectas: [
      "50 ohmios",
      "600 ohmios"
    ]
  },
  {
    enunciado: "¿Qué problema típico aparece por desadaptación de impedancias en una red de TV?",
    correcta: "Reflexiones de señal y pérdidas adicionales que degradan el nivel y la calidad de recepción",
    incorrectas: [
      "Aumento automático de la ganancia de la antena en dBi",
      "Conversión espontánea de UHF a banda KU"
    ]
  },
  {
    enunciado: "¿Qué elementos caracterizan a una antena Yagi-Uda para TDT?",
    correcta: "Reflector, dipolo activo y directores que proporcionan ganancia y directividad",
    incorrectas: [
      "Reflector parabólico y LNB integrado en el foco",
      "Dos polarizadores seleccionados por 13 V y 18 V"
    ]
  },
  {
    enunciado: "¿Qué efecto general tiene aumentar el número de elementos en una Yagi-Uda (dentro de un diseño correcto)?",
    correcta: "Suele aumentar ganancia y directividad, estrechando el lóbulo principal",
    incorrectas: [
      "Reduce siempre la ganancia para evitar saturación del receptor",
      "Convierte la antena en omnidireccional por suma de elementos"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a una antena activa frente a una pasiva en TDT según el temario?",
    correcta: "Incorpora un preamplificador de bajo ruido, normalmente en mástil, útil en zonas de baja cobertura",
    incorrectas: [
      "Trabaja únicamente en banda KU y requiere parábola",
      "Funciona sin alimentación y no puede saturarse"
    ]
  },
  {
    enunciado: "¿Qué riesgo aparece si se amplifica en exceso una señal de TDT en una zona con señales fuertes?",
    correcta: "Saturación e intermodulación en elementos activos, provocando degradación o pérdidas de canales",
    incorrectas: [
      "Aumento de la longitud de onda, haciendo imposible sintonizar UHF",
      "Cambio del estándar de impedancia de 75 ohmios a 50 ohmios"
    ]
  },
  {
    enunciado: "¿Por qué se emplean filtros LTE en instalaciones de TDT actuales?",
    correcta: "Para evitar interferencias de 4G/5G recortando por encima del canal 48 (694 MHz)",
    incorrectas: [
      "Para seleccionar polaridad H/V en el LNB",
      "Para reducir la atenuación del espacio libre"
    ]
  },
  {
    enunciado: "¿Qué consecuencia puede tener no filtrar adecuadamente por encima de 694 MHz en ciertas zonas?",
    correcta: "Interferencias o saturación en amplificadores y receptores por señales móviles cercanas",
    incorrectas: [
      "Conversión automática de TDT a FI 950–2150 MHz",
      "Mejora automática de la relación delante/atrás (F/B)"
    ]
  },
  {
    enunciado: "¿Qué componente es específico de la captación por satélite y no aparece en TDT terrestre?",
    correcta: "El LNB, encargado de amplificar con bajo ruido y convertir frecuencias",
    incorrectas: [
      "El dipolo activo, propio de la Yagi-Uda",
      "El filtro LTE, que solo existe en satélite"
    ]
  },
  {
    enunciado: "¿Qué función cumple el reflector parabólico en una antena de satélite?",
    correcta: "Concentrar la energía recibida hacia el foco, donde se sitúa el LNB",
    incorrectas: [
      "Aumentar el voltaje de alimentación del receptor hasta 100 V",
      "Elevar el nivel de señal en toma sin considerar pérdidas de cable"
    ]
  },
  {
    enunciado: "¿Qué tipo de parábola es más común en edificación residencial según el temario?",
    correcta: "La offset",
    incorrectas: [
      "La Cassegrain",
      "La Yagi-Uda"
    ]
  },
  {
    enunciado: "¿Qué hace el LNB en relación con banda KU y banda FI?",
    correcta: "Amplifica y convierte la banda KU a banda intermedia FI, que se distribuye por coaxial",
    incorrectas: [
      "Convierte UHF a VHF para mejorar la recepción interior",
      "Convierte FI a KU para volver a radiar hacia el satélite"
    ]
  },
  {
    enunciado: "¿Qué rango se indica como banda intermedia (FI) en recepción de satélite?",
    correcta: "De 950 MHz a 2150 MHz",
    incorrectas: [
      "De 470 MHz a 694 MHz",
      "De 10,7 GHz a 12,75 GHz"
    ]
  },
  {
    enunciado: "¿Cómo se selecciona la polaridad (H/V) en un LNB universal típico según el temario?",
    correcta: "Mediante tensión de alimentación (13 V y 18 V)",
    incorrectas: [
      "Mediante un filtro LTE ajustado al canal 48",
      "Mediante el valor de impedancia del coaxial"
    ]
  },
  {
    enunciado: "¿Qué función cumple el tono de 22 kHz en instalaciones de satélite?",
    correcta: "Seleccionar banda baja o banda alta del LNB universal",
    incorrectas: [
      "Ajustar automáticamente el azimut de la parábola",
      "Seleccionar el canal UHF que se recibe en TDT"
    ]
  },
  {
    enunciado: "¿Qué es el azimut en la orientación de una antena parabólica?",
    correcta: "El ángulo horizontal respecto al norte geográfico para apuntar al satélite",
    incorrectas: [
      "El ángulo vertical respecto a la horizontal",
      "El giro del LNB respecto a la vertical para ajustar polarización"
    ]
  },
  {
    enunciado: "¿Qué es la elevación en la orientación de una antena parabólica?",
    correcta: "El ángulo vertical respecto a la horizontal local con el que se apunta al satélite",
    incorrectas: [
      "La relación delante/atrás (F/B) de la antena",
      "La atenuación del cable coaxial por metro"
    ]
  },
  {
    enunciado: "¿Qué es el skew o ajuste de polarización del LNB?",
    correcta: "El giro del LNB para alinear la polarización recibida y minimizar pérdidas por desajuste",
    incorrectas: [
      "El ajuste del canal 48 para evitar LTE",
      "El cálculo de la figura de ruido del amplificador de cabecera"
    ]
  },
  {
    enunciado: "¿Qué objetivo persigue el balance de potencias en una instalación de TV/SAT?",
    correcta: "Asegurar que la señal llegue a la toma de usuario dentro de niveles adecuados tras sumar ganancias y restar pérdidas",
    incorrectas: [
      "Garantizar que el mástil no se oxide independientemente del viento",
      "Determinar la longitud de onda a partir del diámetro del reflector"
    ]
  },
  {
    enunciado: "¿Qué elementos se consideran típicamente como pérdidas en una instalación de distribución de TV?",
    correcta: "Atenuación del cable, pérdidas en conectores, derivadores, repartidores y tomas",
    incorrectas: [
      "La órbita del satélite y el consumo eléctrico del LNB en vatios",
      "La resistencia del mástil y el tipo de pintura anticorrosión"
    ]
  },
  {
    enunciado: "¿De qué depende de forma básica la atenuación en espacio libre?",
    correcta: "De la distancia y de la frecuencia, aumentando al crecer cualquiera de las dos",
    incorrectas: [
      "Solo del tipo de conector, siendo independiente de la frecuencia",
      "Solo del material del mástil, sin relación con el enlace radioeléctrico"
    ]
  },
  {
    enunciado: "¿Qué representa la figura de ruido de un amplificador o de un LNB?",
    correcta: "La degradación de la relación señal/ruido que introduce el propio componente",
    incorrectas: [
      "La ganancia mecánica del soporte frente al viento expresada en dB",
      "El ángulo de apertura del lóbulo principal de una Yagi"
    ]
  },
  {
    enunciado: "¿Por qué es crítico el primer elemento activo en la cadena de recepción (LNB o preamplificador)?",
    correcta: "Porque su figura de ruido condiciona gran parte del ruido total y la calidad final del enlace",
    incorrectas: [
      "Porque define por sí mismo la banda UHF disponible tras el Dividendo Digital",
      "Porque elimina la necesidad de filtrar LTE en cualquier circunstancia"
    ]
  },
  {
    enunciado: "¿Qué criterio básico se usa al dimensionar mástiles y torretas para antenas?",
    correcta: "Resistencia mecánica al viento según zona, altura y superficie expuesta",
    incorrectas: [
      "Cálculo de FI a partir del número de directores",
      "Ajuste del skew en función de la impedancia del coaxial"
    ]
  },
  {
    enunciado: "¿Qué norma se cita como base regulatoria de las Infraestructuras Comunes de Telecomunicaciones (ICT-2)?",
    correcta: "El Real Decreto 346/2011",
    incorrectas: [
      "El Real Decreto 213/2002",
      "El Real Decreto 314/2006"
    ]
  },
  {
    enunciado: "¿Qué disposición se cita como desarrollo técnico del Reglamento ICT, con parámetros y niveles en toma de usuario?",
    correcta: "La Orden ITC/1644/2011",
    incorrectas: [
      "La Ley 31/1995",
      "La UNE 21153"
    ]
  },
  {
    enunciado: "¿Qué Real Decreto se asocia al Plan Técnico Nacional de la TDT y al Segundo Dividendo Digital?",
    correcta: "El Real Decreto 391/2019",
    incorrectas: [
      "El Real Decreto 346/2011",
      "El Real Decreto 213/2002"
    ]
  },
  {
    enunciado: "¿Qué norma UNE-EN se indica para redes de distribución por cable de señales de TV, sonido e interactivos?",
    correcta: "UNE-EN 60728",
    incorrectas: [
      "UNE-EN 60849",
      "UNE-EN 54-24"
    ]
  },
  {
    enunciado: "¿Qué norma se indica para protección contra descargas atmosféricas en instalaciones de antenas?",
    correcta: "UNE 21153",
    incorrectas: [
      "UNE-EN 60728",
      "UNE-EN 54-16"
    ]
  },
  {
    enunciado: "¿Qué ITC del REBT se cita vinculada a alimentación de equipos de cabecera y condiciones eléctricas asociadas?",
    correcta: "ITC-BT-15, junto con ITC-BT-24 en lo relativo a puesta a tierra de mástiles y elementos metálicos",
    incorrectas: [
      "ITC-BT-28, porque define el canal 48 y el corte LTE",
      "ITC-BT-44, porque regula la banda KU y la conversión a FI"
    ]
  },
  {
    enunciado: "¿Qué relación tiene la Ley 31/1995 de Prevención de Riesgos Laborales con la instalación de antenas?",
    correcta: "Afecta a trabajos en cubiertas y tejados, exigiendo EPI y medidas de protección frente a caídas",
    incorrectas: [
      "Define los rangos de frecuencia de TDT y satélite",
      "Establece la impedancia estándar de 75 ohmios para el coaxial"
    ]
  },
  {
    enunciado: "¿Qué diferencia práctica suele existir entre trabajar en UHF (TDT) y en KU (satélite) respecto a la captación?",
    correcta: "En KU se requiere alta directividad y una alineación más crítica, y el enlace es más sensible a desajustes",
    incorrectas: [
      "En KU la señal atraviesa obstáculos mejor que en UHF por tener más frecuencia",
      "En KU se puede ignorar la impedancia porque las reflexiones desaparecen"
    ]
  },
  {
    enunciado: "¿Qué efecto práctico tiene un error significativo en el azimut de una parabólica de satélite?",
    correcta: "La antena deja de apuntar al satélite y el nivel recibido cae drásticamente, pudiendo perderse la señal",
    incorrectas: [
      "La instalación pasa a recibir automáticamente la TDT en UHF",
      "El LNB cambia de banda alta a baja sin intervención del tono de 22 kHz"
    ]
  }
];
