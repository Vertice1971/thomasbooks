// temarios/74-naturaleza-electrica-de-la-materia-corriente-electrica-electromagnetismo-induccion-electromagnetica-la-energia-electrica-una-forma-privilegiada-de-energia-evolucion-en-las-necesidades-energeticas-de-la-sociedad-energias-alternativas.js
var PREGUNTAS = [
  {
    enunciado: "La carga eléctrica está cuantizada y su unidad elemental es la carga del electrón en valor absoluto.",
    correcta: "Es correcto, porque toda carga observada es múltiplo entero de la carga elemental e ≈ 1,602×10⁻¹⁹ C.",
    incorrectas: [
      "Es incorrecto, porque la carga puede tomar cualquier valor real continuo sin restricciones.",
      "Es incorrecto, porque la unidad elemental de carga es el culombio completo y no una fracción fija."
    ]
  },
  {
    enunciado: "La ley de conservación de la carga afirma que la carga total de un sistema aislado permanece constante en el tiempo.",
    correcta: "Es verdadero, ya que los procesos físicos solo redistribuyen la carga pero no la crean ni la destruyen.",
    incorrectas: [
      "Es falso, porque la carga puede aniquilarse espontáneamente en conductores a alta temperatura.",
      "Es falso, porque la carga total aumenta cuando el potencial eléctrico crece."
    ]
  },
  {
    enunciado: "La ley de Coulomb describe la fuerza electrostática entre dos cargas puntuales inmóviles en el vacío.",
    correcta: "Es correcto, porque establece que la fuerza es proporcional al producto de las cargas e inversamente proporcional al cuadrado de la distancia.",
    incorrectas: [
      "Es incorrecto, porque la fuerza electrostática es independiente de la distancia entre las cargas.",
      "Es incorrecto, porque la ley de Coulomb solo se aplica a imanes permanentes y no a cargas."
    ]
  },
  {
    enunciado: "Los conductores poseen electrones libres que permiten el movimiento ordenado de carga bajo la acción de un campo eléctrico.",
    correcta: "Es cierto, y por ello su resistividad es baja en comparación con los aislantes.",
    incorrectas: [
      "Es falso, porque en los conductores los electrones están fuertemente ligados y no se desplazan.",
      "Es falso, porque la conducción en metales depende exclusivamente de iones positivos móviles."
    ]
  },
  {
    enunciado: "En semiconductores, el dopado de tipo n incrementa la concentración de portadores mayoritarios de carga negativa.",
    correcta: "Es verdadero, porque el dopante aporta electrones adicionales al material base.",
    incorrectas: [
      "Es falso, porque el dopado n crea huecos como portadores mayoritarios.",
      "Es falso, porque el dopado no altera la concentración de portadores."
    ]
  },
  {
    enunciado: "La corriente eléctrica es el flujo ordenado de cargas a través de una sección por unidad de tiempo.",
    correcta: "Es correcto, y su unidad en el SI es el amperio, equivalente a culombios por segundo.",
    incorrectas: [
      "Es incorrecto, porque la corriente se mide en voltios por segundo.",
      "Es incorrecto, porque la corriente describe energía por unidad de tiempo y no flujo de carga."
    ]
  },
  {
    enunciado: "La diferencia de potencial eléctrico entre dos puntos mide el trabajo por unidad de carga necesario para desplazarse entre esos puntos.",
    correcta: "Es cierto, por eso el voltaje se expresa en julios por culombio.",
    incorrectas: [
      "Es falso, porque el voltaje mide la cantidad de carga almacenada en un conductor.",
      "Es falso, porque el voltaje es una fuerza y se mide en newtons."
    ]
  },
  {
    enunciado: "La ley de Ohm establece una relación lineal entre corriente y voltaje en materiales óhmicos.",
    correcta: "Es verdadero, ya que V = I·R siempre que la temperatura y las condiciones del material permanezcan constantes.",
    incorrectas: [
      "Es falso, porque V = I·R solo vale para aislantes ideales.",
      "Es falso, porque la resistencia no depende de la temperatura en ningún caso."
    ]
  },
  {
    enunciado: "Las resistencias en serie suman sus valores, mientras que en paralelo suman las inversas de sus resistencias.",
    correcta: "Es correcto, por eso la resistencia equivalente en paralelo es menor que cualquiera de las ramas.",
    incorrectas: [
      "Es incorrecto, porque en serie se suman conductancias y en paralelo resistencias.",
      "Es incorrecto, porque la resistencia equivalente siempre es mayor que la mayor de las resistencias."
    ]
  },
  {
    enunciado: "El efecto Joule es la transformación de energía eléctrica en calor al circular corriente por un conductor con resistencia.",
    correcta: "Es cierto, y la potencia disipada se calcula como P = I²·R.",
    incorrectas: [
      "Es falso, porque el efecto Joule enfría el conductor al aumentar la corriente.",
      "Es falso, porque solo aparece en superconductores a bajas temperaturas."
    ]
  },
  {
    enunciado: "La corriente alterna se caracteriza por invertir periódicamente su sentido y valor en el tiempo.",
    correcta: "Es verdadero, y se describe mediante magnitudes eficaces de tensión y corriente.",
    incorrectas: [
      "Es falso, porque la corriente alterna mantiene constante su valor y sentido.",
      "Es falso, porque la corriente alterna no puede transportar energía útil."
    ]
  },
  {
    enunciado: "El campo magnético creado por una corriente rectilínea es circular y rodea al conductor según la regla de la mano derecha.",
    correcta: "Es correcto, y su módulo decrece con la distancia al conductor.",
    incorrectas: [
      "Es incorrecto, porque el campo magnético apunta siempre en la misma dirección del conductor.",
      "Es incorrecto, porque las corrientes eléctricas no generan campos magnéticos."
    ]
  },
  {
    enunciado: "La fuerza de Lorentz actúa sobre una carga en movimiento inmersa en un campo magnético.",
    correcta: "Es cierto, y es perpendicular tanto a la velocidad de la carga como al campo magnético.",
    incorrectas: [
      "Es falso, porque la fuerza de Lorentz actúa solo sobre cargas en reposo.",
      "Es falso, porque la fuerza de Lorentz es paralela a la velocidad de la carga."
    ]
  },
  {
    enunciado: "Un solenoide recorrido por corriente genera un campo magnético aproximadamente uniforme en su interior.",
    correcta: "Es verdadero, por lo que se utiliza para crear campos controlados en experimentos y dispositivos.",
    incorrectas: [
      "Es falso, porque el campo en un solenoide solo existe fuera y no dentro.",
      "Es falso, porque el campo es nulo salvo en los extremos del solenoide."
    ]
  },
  {
    enunciado: "La inducción electromagnética permite generar una fuerza electromotriz por variación del flujo magnético a través de un circuito.",
    correcta: "Es correcto, tal como demostraron Faraday y Henry en sus experimentos clásicos.",
    incorrectas: [
      "Es incorrecto, porque la fuerza electromotriz solo puede generarse mediante pilas químicas.",
      "Es incorrecto, porque el flujo magnético no tiene relevancia en la generación de tensiones."
    ]
  },
  {
    enunciado: "La ley de Faraday-Lenz establece que la fem inducida se opone a la variación de flujo que la produce.",
    correcta: "Es cierto, lo que refleja la conservación de la energía en los procesos de inducción.",
    incorrectas: [
      "Es falso, porque la fem inducida refuerza siempre la variación de flujo.",
      "Es falso, porque el sentido de la corriente inducida es arbitrario."
    ]
  },
  {
    enunciado: "La autoinducción aparece cuando la corriente variable en una bobina genera una fem inducida en la misma bobina.",
    correcta: "Es verdadero, y su magnitud es proporcional a la inductancia y a la rapidez de cambio de la corriente.",
    incorrectas: [
      "Es falso, porque la autoinducción requiere al menos dos bobinas distintas.",
      "Es falso, porque la autoinducción solo se observa en circuitos de corriente continua constante."
    ]
  },
  {
    enunciado: "En un transformador ideal, la relación de tensiones entre primario y secundario es igual a la relación de espiras.",
    correcta: "Es correcto, y la potencia ideal se conserva despreciando pérdidas.",
    incorrectas: [
      "Es incorrecto, porque la tensión es independiente del número de espiras.",
      "Es incorrecto, porque el transformador solo funciona con corriente continua."
    ]
  },
  {
    enunciado: "Los generadores eléctricos convierten energía mecánica en energía eléctrica mediante inducción en un campo magnético.",
    correcta: "Es cierto, principio común a alternadores y dinamos.",
    incorrectas: [
      "Es falso, porque los generadores convierten calor directamente en electricidad sin partes móviles.",
      "Es falso, porque no se requiere campo magnético para generar electricidad mecánicamente."
    ]
  },
  {
    enunciado: "Las ecuaciones de Maxwell unifican los fenómenos eléctricos y magnéticos y predicen la existencia de ondas electromagnéticas.",
    correcta: "Es verdadero, e implican que la luz es una onda electromagnética que se propaga a velocidad finita.",
    incorrectas: [
      "Es falso, porque las ecuaciones de Maxwell se aplican solo a cargas estáticas.",
      "Es falso, porque Maxwell negó la propagación de ondas en el vacío."
    ]
  },
  {
    enunciado: "La potencia eléctrica consumida por una carga se puede expresar como P = V·I.",
    correcta: "Es correcto, y también puede escribirse como P = I²·R o P = V²/R según el caso.",
    incorrectas: [
      "Es incorrecto, porque la potencia es P = V/I para cualquier carga.",
      "Es incorrecto, porque la potencia eléctrica no depende de la tensión aplicada."
    ]
  },
  {
    enunciado: "La energía eléctrica se considera una forma privilegiada por su facilidad de conversión, control y transporte.",
    correcta: "Es cierto, y por eso se usa masivamente en industria, servicios y hogares.",
    incorrectas: [
      "Es falso, porque su transporte a larga distancia es imposible por pérdidas excesivas.",
      "Es falso, porque no puede transformarse en otras formas de energía de manera eficiente."
    ]
  },
  {
    enunciado: "La transmisión en alta tensión reduce las pérdidas por efecto Joule en las líneas eléctricas.",
    correcta: "Es verdadero, porque para una misma potencia elevar la tensión permite disminuir la corriente.",
    incorrectas: [
      "Es falso, porque la pérdida por Joule depende solo de la longitud de la línea.",
      "Es falso, porque las pérdidas aumentan al elevar la tensión de operación."
    ]
  },
  {
    enunciado: "Las redes HVDC pueden ser ventajosas para largas distancias y conexiones submarinas.",
    correcta: "Es correcto, por sus menores pérdidas reactivas y control de flujo de potencia.",
    incorrectas: [
      "Es incorrecto, porque la corriente continua no puede transportar grandes potencias.",
      "Es incorrecto, porque HVDC solo se usa a muy corta distancia dentro de ciudades."
    ]
  },
  {
    enunciado: "El factor de potencia mide la fracción de potencia aparente que se convierte en potencia activa útil.",
    correcta: "Es cierto, y valores cercanos a 1 indican mejor aprovechamiento de la energía suministrada.",
    incorrectas: [
      "Es falso, porque el factor de potencia mide la distorsión armónica exclusivamente.",
      "Es falso, porque un factor de potencia bajo siempre significa mayor eficiencia."
    ]
  },
  {
    enunciado: "La demanda eléctrica mundial ha crecido con la industrialización y la digitalización de la economía.",
    correcta: "Es verdadero, impulsada por el uso de dispositivos, climatización y transporte electrificado.",
    incorrectas: [
      "Es falso, porque la demanda eléctrica mundial desciende de forma sostenida desde 1950.",
      "Es falso, porque la electricidad ha sido reemplazada por combustibles sólidos en todos los sectores."
    ]
  },
  {
    enunciado: "La eficiencia energética reduce el consumo manteniendo los mismos servicios energéticos.",
    correcta: "Es correcto, y se logra con tecnologías como iluminación LED y motores de alta eficiencia.",
    incorrectas: [
      "Es incorrecto, porque eficiencia significa reducir servicios para gastar menos energía.",
      "Es incorrecto, porque la eficiencia solo se aplica a la generación y no al consumo."
    ]
  },
  {
    enunciado: "Las energías renovables incluyen fuentes como solar, eólica, hidráulica, biomasa y geotermia.",
    correcta: "Es cierto, y su característica común es la reposición natural de los recursos utilizados.",
    incorrectas: [
      "Es falso, porque solo la energía nuclear se considera renovable por su alta densidad energética.",
      "Es falso, porque las renovables se agotan en periodos cortos y no son reponibles."
    ]
  },
  {
    enunciado: "La energía solar fotovoltaica convierte la radiación solar en electricidad mediante el efecto fotovoltaico.",
    correcta: "Es verdadero, utilizando dispositivos semiconductores como las celdas de silicio.",
    incorrectas: [
      "Es falso, porque la fotovoltaica genera calor y no electricidad.",
      "Es falso, porque requiere turbinas de vapor para producir electricidad."
    ]
  },
  {
    enunciado: "La energía eólica depende de la velocidad del viento y se aprovecha mediante aerogeneradores.",
    correcta: "Es correcto, y su potencia disponible es proporcional al cubo de la velocidad del viento.",
    incorrectas: [
      "Es incorrecto, porque la potencia eólica es independiente de la velocidad del viento.",
      "Es incorrecto, porque solo es viable a velocidades de viento superiores a huracanes."
    ]
  },
  {
    enunciado: "La hidráulica aprovecha la energía potencial del agua embalsada o el caudal de ríos para generar electricidad.",
    correcta: "Es cierto, y las centrales reversibles permiten almacenamiento mediante bombeo.",
    incorrectas: [
      "Es falso, porque la energía hidráulica solo puede producir calor y no electricidad.",
      "Es falso, porque el agua carece de energía potencial aprovechable."
    ]
  },
  {
    enunciado: "La biomasa y el biogás pueden utilizarse para producir calor, electricidad y combustibles.",
    correcta: "Es verdadero, aunque requieren gestión sostenible para minimizar impactos en su ciclo de vida.",
    incorrectas: [
      "Es falso, porque la biomasa no puede generar electricidad en ningún caso.",
      "Es falso, porque el biogás no es combustible y no se puede quemar."
    ]
  },
  {
    enunciado: "La geotermia utiliza el calor interno de la Tierra para usos térmicos y, en ciertos contextos, para generación eléctrica.",
    correcta: "Es correcto, especialmente en zonas con gradiente geotérmico elevado o actividad volcánica.",
    incorrectas: [
      "Es incorrecto, porque la geotermia solo sirve para refrigeración y no para calefacción.",
      "Es incorrecto, porque el subsuelo no contiene calor útil aprovechable."
    ]
  },
  {
    enunciado: "El almacenamiento energético facilita la integración de renovables al desacoplar generación y consumo.",
    correcta: "Es cierto, con tecnologías como baterías, bombeo hidráulico y almacenamiento térmico.",
    incorrectas: [
      "Es falso, porque el almacenamiento no influye en la operación del sistema eléctrico.",
      "Es falso, porque solo es posible almacenar energía en forma de carbón o petróleo."
    ]
  },
  {
    enunciado: "Las cocinas de inducción calientan recipientes ferromagnéticos mediante corrientes inducidas y pérdidas magnéticas en el material.",
    correcta: "Es verdadero, y por eso requieren utensilios compatibles con campos alternos de alta frecuencia.",
    incorrectas: [
      "Es falso, porque calientan el aire por resistencia eléctrica directa.",
      "Es falso, porque dependen exclusivamente de radiación infrarroja."
    ]
  },
  {
    enunciado: "La recarga inalámbrica se basa en acoplo inductivo o resonante entre bobinas emisora y receptora.",
    correcta: "Es correcto, y la transferencia depende del acoplamiento y la frecuencia de operación.",
    incorrectas: [
      "Es incorrecto, porque requiere contacto metálico directo entre emisor y receptor.",
      "Es incorrecto, porque solo funciona con corriente continua pura sin alternancia."
    ]
  },
  {
    enunciado: "Los campos electromagnéticos ambientales se evalúan con referencia a guías internacionales de exposición.",
    correcta: "Es cierto, y se aplican principios de precaución y límites recomendados para la población y trabajadores.",
    incorrectas: [
      "Es falso, porque no existen estándares para exposición a campos electromagnéticos.",
      "Es falso, porque solo se regulan los campos estáticos y no los alternos."
    ]
  },
  {
    enunciado: "En un circuito RLC en serie, la resonancia ocurre cuando la reactancia inductiva iguala a la capacitiva.",
    correcta: "Es verdadero, y a esa frecuencia la impedancia es mínima y la corriente alcanza su máximo.",
    incorrectas: [
      "Es falso, porque la resonancia se da cuando ambas reactancias son máximas y del mismo signo.",
      "Es falso, porque en serie la resonancia nunca puede ocurrir."
    ]
  },
  {
    enunciado: "El puente de Wheatstone permite medir resistencias desconocidas mediante el equilibrio de un circuito en puente.",
    correcta: "Es correcto, y se basa en la proporcionalidad de las ramas para anular la corriente en el galvanómetro.",
    incorrectas: [
      "Es incorrecto, porque mide exclusivamente capacitancias y no resistencias.",
      "Es incorrecto, porque requiere necesariamente una fuente de corriente alterna de alta frecuencia."
    ]
  },
  {
    enunciado: "El análisis ciclo de vida de tecnologías energéticas compara impactos desde la extracción de materiales hasta el fin de vida.",
    correcta: "Es cierto, y es clave para evaluar la sostenibilidad de las alternativas energéticas.",
    incorrectas: [
      "Es falso, porque solo considera la fase de operación y no el resto del ciclo.",
      "Es falso, porque la sostenibilidad se decide exclusivamente por el coste económico inicial."
    ]
  },
  {
    enunciado: "Las redes eléctricas inteligentes integran renovables distribuidas, almacenamiento y gestión activa de la demanda.",
    correcta: "Es verdadero, mejorando la flexibilidad y la resiliencia del sistema eléctrico.",
    incorrectas: [
      "Es falso, porque las redes inteligentes eliminan la necesidad de control y automatización.",
      "Es falso, porque impiden la conexión de generación distribuida por inestabilidad."
    ]
  },
  {
    enunciado: "El hidrógeno puede actuar como vector energético cuando se produce por electrólisis usando electricidad renovable.",
    correcta: "Es correcto, aunque su almacenamiento y transporte presentan desafíos técnicos y de eficiencia.",
    incorrectas: [
      "Es incorrecto, porque el hidrógeno no puede producirse a partir de electricidad.",
      "Es incorrecto, porque el hidrógeno no se puede almacenar de forma segura en ningún caso."
    ]
  }
];
