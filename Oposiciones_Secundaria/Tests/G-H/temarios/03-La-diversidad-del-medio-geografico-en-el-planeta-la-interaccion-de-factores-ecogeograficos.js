var PREGUNTAS = [
  {
    enunciado: "¿Qué es el medio geográfico?",
    correcta: "El conjunto de elementos físicos, bióticos y humanos que interactúan en un territorio",
    incorrectas: [
      "Un espacio exclusivamente natural sin intervención humana",
      "Un área delimitada solo por criterios políticos"
    ]
  },
  {
    enunciado: "¿Qué papel tiene el relieve en la configuración del medio geográfico?",
    correcta: "Organiza y condiciona los elementos físicos, bióticos y humanos",
    incorrectas: [
      "No influye en las actividades humanas",
      "Depende únicamente de la vegetación"
    ]
  },
  {
    enunciado: "¿Qué capa de la Tierra incluye la corteza y parte del manto superior?",
    correcta: "La litosfera",
    incorrectas: [
      "La astenosfera",
      "El núcleo externo"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a los escudos y macizos antiguos?",
    correcta: "Son formaciones muy antiguas y estables geológicamente",
    incorrectas: [
      "Son cordilleras recientes de gran altura",
      "Son áreas de intensa actividad volcánica"
    ]
  },
  {
    enunciado: "¿Qué son las cuencas sedimentarias?",
    correcta: "Depresiones rellenas de sedimentos a lo largo del tiempo geológico",
    incorrectas: [
      "Cordilleras jóvenes en proceso de formación",
      "Áreas oceánicas profundas con dorsales"
    ]
  },
  {
    enunciado: "¿Qué forma parte de las cuencas oceánicas?",
    correcta: "Dorsales, fosas abisales y llanuras oceánicas",
    incorrectas: [
      "Cordilleras alpinas y macizos antiguos",
      "Mesetas continentales elevadas"
    ]
  },
  {
    enunciado: "¿Qué teoría explica el movimiento de los continentes?",
    correcta: "La tectónica de placas",
    incorrectas: [
      "La deriva atmosférica",
      "La contracción térmica terrestre"
    ]
  },
  {
    enunciado: "¿Qué proceso genera cordilleras por colisión de placas?",
    correcta: "Orogénesis",
    incorrectas: [
      "Epirogénesis",
      "Erosión fluvial"
    ]
  },
  {
    enunciado: "¿Qué es un relieve tabular?",
    correcta: "Relieve horizontal o aclinal con superficie plana",
    incorrectas: [
      "Relieve de colinas redondeadas",
      "Relieve abrupto de origen volcánico"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al relieve de cuesta?",
    correcta: "Estructuras inclinadas o monoclinales con vertientes asimétricas",
    incorrectas: [
      "Cimas planas y horizontales",
      "Formas glaciares en valle"
    ]
  },
  {
    enunciado: "¿Qué es un relieve jurásico?",
    correcta: "Relieve conforme derivado con alternancia de pliegues y depresiones",
    incorrectas: [
      "Relieve volcánico reciente",
      "Relieve exclusivamente alpino"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al relieve alpino?",
    correcta: "Formado por la orogenia alpina, con picos elevados y valles profundos",
    incorrectas: [
      "Mesetas volcánicas recientes",
      "Formas suavizadas de baja altitud"
    ]
  },
  {
    enunciado: "¿Qué es una falla geológica?",
    correcta: "Fractura en la corteza terrestre con desplazamiento de bloques",
    incorrectas: [
      "Pliegue originado por compresión",
      "Depresión generada por hundimiento glaciar"
    ]
  },
  {
    enunciado: "¿Qué es el relieve sajónico?",
    correcta: "Estructura mixta con pliegues y fallas combinadas",
    incorrectas: [
      "Relieve exclusivamente monoclinal",
      "Relieve formado por disolución de calizas"
    ]
  },
  {
    enunciado: "¿Qué son las estructuras volcánicas?",
    correcta: "Formaciones originadas por acumulación de materiales volcánicos",
    incorrectas: [
      "Pliegues sedimentarios horizontales",
      "Fosas oceánicas profundas"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al modelado granítico?",
    correcta: "Formas redondeadas y domos originados por meteorización",
    incorrectas: [
      "Cuevas y simas por disolución",
      "Cañones excavados por ríos"
    ]
  },
  {
    enunciado: "¿Qué rasgo es típico del modelado kárstico?",
    correcta: "Formas originadas por disolución de rocas calcáreas",
    incorrectas: [
      "Depósitos glaciares",
      "Arenas eólicas"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al modelado fluvial?",
    correcta: "Formas creadas por erosión y sedimentación de los ríos",
    incorrectas: [
      "Acumulaciones glaciares",
      "Formas volcánicas"
    ]
  },
  {
    enunciado: "¿Qué tipo de modelado se forma por la acción del hielo?",
    correcta: "Modelado glaciar",
    incorrectas: [
      "Modelado eólico",
      "Modelado litoral"
    ]
  },
  {
    enunciado: "¿Qué es el modelado litoral?",
    correcta: "Formas costeras producidas por la acción del mar",
    incorrectas: [
      "Formas producidas por ríos",
      "Formas de origen tectónico"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al modelado desértico?",
    correcta: "Formas originadas por erosión eólica y escasa humedad",
    incorrectas: [
      "Formas generadas por glaciares",
      "Depósitos de origen fluvial"
    ]
  },
  {
    enunciado: "¿Cómo influye el relieve en el clima?",
    correcta: "Modifica la temperatura, precipitación y circulación atmosférica",
    incorrectas: [
      "No tiene influencia climática",
      "Solo afecta a la humedad relativa"
    ]
  },
  {
    enunciado: "¿Qué relación existe entre relieve y suelos?",
    correcta: "El relieve condiciona la formación, distribución y tipos de suelos",
    incorrectas: [
      "El relieve no influye en los suelos",
      "Los suelos determinan la tectónica de placas"
    ]
  },
  {
    enunciado: "¿Cómo influye el relieve en la red hidrográfica?",
    correcta: "Determina la dirección, velocidad y régimen de los cursos de agua",
    incorrectas: [
      "No afecta a la red hidrográfica",
      "Solo influye en lagos y embalses"
    ]
  },
  {
    enunciado: "¿Qué efecto puede tener el relieve en la actividad humana?",
    correcta: "Condiciona asentamientos, comunicaciones y aprovechamientos",
    incorrectas: [
      "No influye en la ocupación del territorio",
      "Determina exclusivamente la cultura"
    ]
  },
  {
    enunciado: "¿Qué es un paisaje con predominio de elementos abióticos?",
    correcta: "Aquel donde dominan componentes no vivos como relieve y clima",
    incorrectas: [
      "Paisaje dominado por vegetación",
      "Paisaje transformado por la urbanización"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a un paisaje con predominio de elementos bióticos?",
    correcta: "La presencia dominante de organismos vivos, especialmente vegetación",
    incorrectas: [
      "La ausencia total de fauna",
      "El predominio de construcciones humanas"
    ]
  },
  {
    enunciado: "¿Qué es un paisaje antrópico?",
    correcta: "Paisaje profundamente transformado por la actividad humana",
    incorrectas: [
      "Paisaje sin intervención humana",
      "Paisaje modelado solo por procesos glaciares"
    ]
  },
  {
    enunciado: "¿Qué es una dorsal oceánica?",
    correcta: "Elevación submarina formada por actividad volcánica y tectónica divergente",
    incorrectas: [
      "Fosa submarina por subducción",
      "Cañón submarino de origen fluvial"
    ]
  },
  {
    enunciado: "¿Qué es una fosa abisal?",
    correcta: "Gran depresión submarina asociada a zonas de subducción",
    incorrectas: [
      "Montaña submarina aislada",
      "Llanura abisal sedimentaria"
    ]
  },
  {
    enunciado: "¿Qué es un macizo antiguo?",
    correcta: "Bloque continental estabilizado desde eras geológicas antiguas",
    incorrectas: [
      "Cordillera reciente de gran altura",
      "Depresión sedimentaria activa"
    ]
  },
  {
    enunciado: "¿Qué es la epirogénesis?",
    correcta: "Movimientos verticales lentos de la corteza sin fractura",
    incorrectas: [
      "Deformación intensa por compresión",
      "Rápido levantamiento por actividad volcánica"
    ]
  },
  {
    enunciado: "¿Qué es un relieve apalachense?",
    correcta: "Pliegues antiguos erosionados que dejan crestas y valles alineados",
    incorrectas: [
      "Relieve volcánico reciente",
      "Relieve glaciar de circo"
    ]
  },
  {
    enunciado: "¿Qué son los relieves invertidos?",
    correcta: "Antiguas depresiones rellenas que ahora destacan en el relieve",
    incorrectas: [
      "Montañas hundidas por erosión",
      "Valles formados por glaciares"
    ]
  },
  {
    enunciado: "¿Qué es un sistema morfoclimático?",
    correcta: "Conjunto de formas y procesos modeladores asociados a un clima determinado",
    incorrectas: [
      "Mapa que clasifica regiones por altitud",
      "Lista de volcanes activos en el mundo"
    ]
  },
  {
    enunciado: "¿Qué es un glaciar de valle?",
    correcta: "Masa de hielo que fluye por un valle montañoso modelando su relieve",
    incorrectas: [
      "Acumulación de nieve en mesetas costeras",
      "Hielo flotante en el océano Ártico"
    ]
  }
];
