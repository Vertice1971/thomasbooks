// 12-tecnicas-basicas-de-mecanizado-electrotecnico.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué característica define a los materiales ferromagnéticos utilizados en electrotecnia?",
    correcta: "Su alta permeabilidad magnética, que facilita la concentración de líneas de campo magnético",
    incorrectas: [
      "Su alta resistencia eléctrica para evitar corrientes de Foucault",
      "Su capacidad para mantener la carga eléctrica estática indefinidamente"
    ]
  },
  {
    enunciado: "¿Cuál es la función principal del limado en el mecanizado manual?",
    correcta: "El desbaste, ajuste y acabado de superficies planas o curvas mediante el arranque de virutas",
    incorrectas: [
      "La realización de roscas interiores en taladros previos",
      "El corte rápido de barras de gran diámetro"
    ]
  },
  {
    enunciado: "¿Qué indica el 'paso' en una rosca métrica (ej. M8x1.25)?",
    correcta: "La distancia axial entre dos crestas consecutivas del filete, en milímetros",
    incorrectas: [
      "El diámetro interior de la tuerca",
      "La longitud total del tornillo"
    ]
  },
  {
    enunciado: "¿Qué herramienta se utiliza para realizar roscas interiores (tuercas) manualmente?",
    correcta: "El juego de machos de roscar (normalmente tres: desbaste, intermedio y acabado)",
    incorrectas: [
      "La terraja de roscar",
      "El escariador cilíndrico"
    ]
  },
  {
    enunciado: "¿Para qué sirve el granete en el trazado mecánico?",
    correcta: "Para marcar puntos de referencia profundos que guíen la broca al iniciar un taladro",
    incorrectas: [
      "Para comprobar la planitud de una superficie",
      "Para medir la profundidad de un orificio ciego"
    ]
  },
  {
    enunciado: "¿Qué precaución de seguridad es fundamental al operar un taladro de columna?",
    correcta: "Sujetar firmemente la pieza con mordazas y no usar guantes para evitar atrapamientos con el eje giratorio",
    incorrectas: [
      "Usar guantes de cuero grueso para proteger las manos de la viruta mientras gira",
      "Sujetar la pieza fuertemente con la mano izquierda"
    ]
  },
  {
    enunciado: "¿Qué es el avellanado cónico?",
    correcta: "Una operación para ensanchar la boca de un agujero en forma de cono, permitiendo que la cabeza de un tornillo quede embutida",
    incorrectas: [
      "El corte de una pieza mediante cizalla",
      "La eliminación de rebabas interiores en un tubo mediante lima redonda"
    ]
  },
  {
    enunciado: "¿Qué propiedad mecánica es la 'dureza' de un material?",
    correcta: "La oposición que presenta un material a ser rayado o penetrado por otro",
    incorrectas: [
      "La capacidad de deformarse permanentemente sin romperse",
      "La resistencia a la rotura por tracción"
    ]
  },
  {
    enunciado: "¿Qué tipo de sierra se debe usar para cortar materiales duros con sierra de mano?",
    correcta: "Una hoja con mayor número de dientes por pulgada (paso fino)",
    incorrectas: [
      "Una hoja con pocos dientes muy grandes para avanzar rápido",
      "Una hoja de madera estándar"
    ]
  },
  {
    enunciado: "¿Qué es el remachado (o roblonado)?",
    correcta: "Un método de unión fija o permanente entre piezas metálicas mediante la deformación plástica de un remache",
    incorrectas: [
      "Un método de unión desmontable similar al atornillado",
      "Un proceso de soldadura blanda con estaño"
    ]
  },
  {
    enunciado: "¿Qué gas se utiliza habitualmente como protección en la soldadura TIG de aluminio para cuadros?",
    correcta: "Argón (o mezclas de gases inertes)",
    incorrectas: [
      "Oxígeno puro",
      "Acetileno"
    ]
  },
  {
    enunciado: "¿Qué indica la designación de un acero inoxidable tipo AISI 304?",
    correcta: "Es un acero austenítico al cromo-níquel, muy común en armarios eléctricos por su buena resistencia a la corrosión",
    incorrectas: [
      "Es un acero de herramientas de alto carbono para corte",
      "Es un acero galvanizado recubierto de zinc por inmersión"
    ]
  },
  {
    enunciado: "¿Qué tratamiento superficial se aplica al cobre en embarrados para mejorar la conductividad en las uniones y evitar oxidación?",
    correcta: "Estañado o plateado en las zonas de contacto",
    incorrectas: [
      "Pintado con esmalte sintético",
      "Anodizado de color negro"
    ]
  },
  {
    enunciado: "¿Para qué se utiliza el calibre o pie de rey?",
    correcta: "Para medir longitudes exteriores, interiores y profundidades con precisión (típicamente 0,05 o 0,02 mm)",
    incorrectas: [
      "Para medir la resistencia eléctrica de una conexión",
      "Para trazar líneas paralelas al borde de una pieza"
    ]
  },
  {
    enunciado: "¿Qué es una unión 'atornillada' y qué ventaja ofrece sobre la soldadura?",
    correcta: "Es una unión desmontable, lo que facilita el mantenimiento y sustitución de componentes",
    incorrectas: [
      "Es una unión estanca permanente más resistente que la soldadura",
      "Es una unión que no garantiza la continuidad eléctrica"
    ]
  },
  {
    enunciado: "¿Qué función tiene una arandela Grover o de presión?",
    correcta: "Evitar el aflojamiento de la tuerca o tornillo debido a vibraciones, mediante la tensión elástica que ejerce",
    incorrectas: [
      "Aumentar la superficie de contacto para no dañar la pintura",
      "Aislar eléctricamente el tornillo de la pieza"
    ]
  },
  {
    enunciado: "¿En el doblado de tubos de acero (conduit), qué ocurre si el radio de curvatura es demasiado pequeño?",
    correcta: "El tubo puede aplastarse (arrugarse) en el interior de la curva o debilitar su pared exterior, dificultando el paso de cables",
    incorrectas: [
      "Mejora la ventilación interior de los conductores",
      "Aumenta la resistencia mecánica de la instalación"
    ]
  },
  {
    enunciado: "¿Qué es el 'par galvánico' en uniones mecánicas?",
    correcta: "La corrosión acelerada que ocurre cuando dos metales con diferente potencial electroquímico están en contacto en presencia de humedad",
    incorrectas: [
      "El par de fuerza necesario para apretar dos metales distintos",
      "La mejora de conductividad al unir aluminio y cobre directamente"
    ]
  },
  {
    enunciado: "¿Cómo se debe unir correctamente un terminal de cobre a una barra de aluminio para evitar corrosión galvánica?",
    correcta: "Utilizando arandelas bimetálicas (o terminales bimetálicos) que separan físicamente los metales incompatibles",
    incorrectas: [
      "Aplicando mucha grasa de litio sin más precauciones",
      "Lijando ambas superficies hasta que brillen y apretando fuerte"
    ]
  },
  {
    enunciado: "¿Qué herramienta se usa para cortar carriles DIN de forma limpia y a medida?",
    correcta: "La cortadora de carril DIN (perfiladora) o sierra de arco, debiendo limar las rebabas después",
    incorrectas: [
      "La tijera de electricista",
      "El pelacables automático"
    ]
  },
  {
    enunciado: "¿Qué es la soldadura blanda utilizada en electrónica?",
    correcta: "Un proceso de unión usando una aleación de aporte de bajo punto de fusión (tradicionalmente estaño-plomo, ahora sin plomo) sin fundir el metal base",
    incorrectas: [
      "La fusión de los terminales de cobre mediante arco eléctrico",
      "El pegado de componentes con adhesivo conductor térmico"
    ]
  },
  {
    enunciado: "¿Qué es un 'escariador'?",
    correcta: "Una herramienta de corte para acabar agujeros taladrados con mayor precisión dimensional y superficial",
    incorrectas: [
      "Una herramienta para hacer roscas exteriores",
      "Un tipo de destornillador de impacto"
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre taladrar y punzonar chapa para cuadros eléctricos?",
    correcta: "El punzonado se realiza por corte y deformación plástica mediante golpe o presión (rápido en chapa fina), el taladrado por arranque de viruta",
    incorrectas: [
      "El punzonado siempre deja rebabas y el taladrado no",
      "El punzonado solo sirve para madera y plásticos"
    ]
  },
  {
    enunciado: "¿Qué EPI es prioritario al usar una amoladora (radial) para cortar metal?",
    correcta: "Gafas de seguridad o pantalla facial, guantes anti-corte y protección auditiva, además de verificar la protección del disco",
    incorrectas: [
      "Guantes de látex y mascarilla de papel",
      "Gafas de sol y ropa holgada"
    ]
  },
  {
    enunciado: "¿Qué indica la marca '8.8' en la cabeza de un tornillo métrico de acero?",
    correcta: "Su clase de resistencia: 800 N/mm² de resistencia a la tracción y un límite elástico del 80% de ese valor",
    incorrectas: [
      "Que tiene un diámetro de 8.8 mm",
      "Que debe apretarse con una llave número 8"
    ]
  },
  {
    enunciado: "¿Para qué se utiliza una terraja?",
    correcta: "Para realizar roscas exteriores en varillas o tubos",
    incorrectas: [
      "Para realizar roscas interiores en taladros",
      "Para cortar chapa de acero inoxidable"
    ]
  },
  {
    enunciado: "¿Qué es el 'juego' o tolerancia en un ajuste mecánico?",
    correcta: "La diferencia permitida entre las dimensiones de las piezas que se acoplan (ej. eje y agujero) para asegurar su función (móvil o fija)",
    incorrectas: [
      "El movimiento vibratorio de la máquina al funcionar",
      "El error cometido por el operario al medir"
    ]
  },
  {
    enunciado: "¿Qué fluido se suele usar al taladrar acero para refrigerar y lubricar?",
    correcta: "Taladrina (emulsión de aceite en agua) o aceite de corte",
    incorrectas: [
      "Agua sola, ya que el aceite hace patinar la broca",
      "Alcohol etílico para evaporar el calor"
    ]
  },
  {
    enunciado: "¿Qué es una remachadora de tuercas (tuercas remachables)?",
    correcta: "Una herramienta que fija una tuerca cilíndrica en un orificio de chapa fina deformándola, permitiendo atornillar piezas posteriormente",
    incorrectas: [
      "Una máquina que suelda tuercas por puntos",
      "Una llave inglesa ajustable"
    ]
  },
  {
    enunciado: "¿Qué precaución se debe tener al mecanizar plásticos técnicos (como PVC o policarbonato) para cuadros?",
    correcta: "Usar bajas velocidades de corte y herramientas afiladas para evitar que el material se funda o se agriete por calor excesivo",
    incorrectas: [
      "Calentar previamente el material con un soplete",
      "Usar siempre aceite de corte abundante"
    ]
  },
  {
    enunciado: "¿Qué tipo de tornillería se prefiere habitualmente en el interior de cuadros para fijar componentes al fondo?",
    correcta: "Tornillos autorroscantes o métricos sobre agujeros roscados/tuercas, evitando virutas sueltas post-montaje",
    incorrectas: [
      "Clavos de acero templado",
      "Pegamento de contacto industrial"
    ]
  },
  {
    enunciado: "¿Qué es el 'par de apriete'?",
    correcta: "El momento de fuerza aplicado al girar un tornillo o tuerca, crucial para asegurar la presión de contacto correcta sin dañar la rosca",
    incorrectas: [
      "El tiempo que se tarda en apretar dos tornillos simultáneamente",
      "La fuerza lateral que soporta el tornillo a cizalladura"
    ]
  },
  {
    enunciado: "¿Qué herramienta se usa para pelar la cubierta de cables de gran sección sin dañar el aislamiento del conductor?",
    correcta: "Pelacables de cuchilla giratoria o ajustable transversal/longitudinal",
    incorrectas: [
      "Un mechero para quemar la cubierta plástica",
      "Un martillo para aplastar el aislante hasta que rompa"
    ]
  },
  {
    enunciado: "¿Qué significa IPXX (ej. IP54) en relación al mecanizado de envolventes?",
    correcta: "Define el grado de protección contra ingreso de sólidos (polvo) y líquidos (agua) que debe mantenerse tras mecanizar y montar pasacables",
    incorrectas: [
      "Indica el protocolo de internet para la conexión del cuadro",
      "Indica la Intensidad de Pico máxima soportada por la caja"
    ]
  },
  {
    enunciado: "¿Qué función tienen los prensaestopas en la entrada de cables a cuadros o motores?",
    correcta: "Garantizar la estanqueidad (IP) y la sujeción mecánica del cable para evitar tirones en las conexiones internas",
    incorrectas: [
      "Mejorar la conductividad eléctrica del cable de tierra",
      "Actuar como fusibles en caso de cortocircuito"
    ]
  },
  {
    enunciado: "¿Cómo se verifica la planitud de una superficie mecanizada?",
    correcta: "Utilizando una regla de precisión o mármol de ajuste y galgas de espesores",
    incorrectas: [
      "Mirándola a contraluz sin herramientas",
      "Usando un voltímetro digital"
    ]
  },
  {
    enunciado: "¿Qué es una broca escalonada o cónica y para qué es útil en cuadros?",
    correcta: "Una broca que permite realizar agujeros de diferentes diámetros progresivos en chapa fina sin cambiar de herramienta",
    incorrectas: [
      "Una broca para taladrar hormigón armado",
      "Una fresa para ranurar ejes de motores"
    ]
  },
  {
    enunciado: "¿Qué riesgo presenta el aire comprimido al usarlo para limpiar virutas?",
    correcta: "Proyección de partículas a los ojos y riesgo de introducir virutas en partes móviles o eléctricas delicadas de máquinas cercanas",
    incorrectas: [
      "Riesgo de electrocución inmediata por el aire",
      "Oxidación instantánea de las piezas limpiadas"
    ]
  },
  {
    enunciado: "¿Qué es el tratamiento de 'galvanizado'?",
    correcta: "El recubrimiento de piezas de acero con una capa de zinc para protegerlas de la corrosión",
    incorrectas: [
      "El pulido espejo del acero inoxidable",
      "El endurecimiento del acero por temple en aceite"
    ]
  },
  {
    enunciado: "¿Para qué se usa una cizalla de palanca?",
    correcta: "Para el corte recto de chapas metálicas de cierto espesor mediante dos cuchillas deslizantes",
    incorrectas: [
      "Para curvar tubos de PVC",
      "Para realizar soldadura por puntos en chapa"
    ]
  }
];
