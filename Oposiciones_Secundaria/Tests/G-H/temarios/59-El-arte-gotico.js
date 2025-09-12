// temarios/59-El-arte-gotico.js
var PREGUNTAS = [
  {
    enunciado: "¿En qué región y marco cronológico suele situarse el origen del arte gótico?",
    correcta: "Île-de-France, mediados del siglo XII",
    incorrectas: ["Lombardía, inicios del siglo XI", "Andalucía, fines del siglo X"]
  },
  {
    enunciado: "¿Qué edificio y figura suelen citarse como hito inaugural del gótico por su programa lumínico y simbólico?",
    correcta: "Abadía de Saint-Denis y el abad Suger",
    incorrectas: ["Sainte-Chapelle y San Luis IX", "Chartres y Viollet-le-Duc"]
  },
  {
    enunciado: "¿Cuál es la tríada técnica que hace posible la elevación y diafanidad de los templos góticos?",
    correcta: "Arco apuntado, bóveda de crucería y arbotantes",
    incorrectas: ["Arco de medio punto, bóveda de cañón y contrafuertes macizos", "Cúpula semiesférica, pechinas y exedras"]
  },
  {
    enunciado: "¿Qué rasgo espacial expresa simbólicamente el “ascenso espiritual” en el gótico?",
    correcta: "La verticalidad acentuada de naves y alzados",
    incorrectas: ["La horizontalidad basilical con techumbre plana", "El deambulatorio perimetral sin elevación"]
  },
  {
    enunciado: "¿Qué función estructural cumplen los arbotantes en la arquitectura gótica?",
    correcta: "Trasladar empujes de las bóvedas a contrafuertes exteriores",
    incorrectas: ["Iluminar el triforio mediante lucernarios", "Cerrar el claristorio con tracerías ciegas"]
  },
  {
    enunciado: "¿Cuál es el papel de la luz y las vidrieras en el templo gótico?",
    correcta: "Construir un espacio simbólico donde la luz filtrada remite a lo divino",
    incorrectas: ["Sustituir toda iconografía por superficies neutras", "Evitar la lectura catequética de los fieles"]
  },
  {
    enunciado: "¿Qué elemento del alzado gótico se ubica por encima de las arcadas principales y por debajo del claristorio?",
    correcta: "El triforio",
    incorrectas: ["El nártex", "La girola"]
  },
  {
    enunciado: "¿Qué catedrales francesas son canónicas del alto gótico por escala y sistema constructivo?",
    correcta: "Chartres, Reims y Amiens",
    incorrectas: ["Pisa, Arezzo y Ravena", "Santiago, Braga y Évora"]
  },
  {
    enunciado: "¿Qué modalidad inglesa se caracteriza en el siglo XV por fuertes líneas horizontales en los ventanales?",
    correcta: "El estilo perpendicular",
    incorrectas: ["El estilo flamboyant", "El estilo normando románico"]
  },
  {
    enunciado: "¿Qué rasgo diferencia con frecuencia el gótico italiano del francés septentrional?",
    correcta: "Mayor peso del muro y combinación con repertorios clásicos",
    incorrectas: ["Uso sistemático de arbotantes volados máximos", "Exclusión de mármoles polícromos en fachadas"]
  },
  {
    enunciado: "¿Qué tres catedrales resumen la recepción del gótico clásico en la Corona de Castilla?",
    correcta: "Burgos, León y Toledo",
    incorrectas: ["Sevilla, Córdoba y Jaén", "Zamora, Toro y Salamanca Vieja"]
  },
  {
    enunciado: "¿Qué rasgo define al gótico catalán en templos como Santa María del Mar?",
    correcta: "Amplias naves con grandes luces y diafanidad interior",
    incorrectas: ["Naves estrechas y oscurecidas por muros macizos", "Cúpulas nervadas sobre tambor circular continuo"]
  },
  {
    enunciado: "¿Qué evolución estilística suele asociarse al llamado gótico tardío en Francia?",
    correcta: "Estilo flamboyant con tracerías flamígeras",
    incorrectas: ["Estilo dórico con triglifos", "Estilo palladiano con serlianas"]
  },
  {
    enunciado: "¿Cuál es el cambio principal de la escultura gótica respecto al románico?",
    correcta: "Del hieratismo a un naturalismo progresivo y expresivo",
    incorrectas: ["Del naturalismo al simbolismo geométrico total", "De la frontalidad a la completa abstracción"]
  },
  {
    enunciado: "¿Qué función mantienen las portadas esculpidas en las fachadas góticas?",
    correcta: "Catequética y ornamental, articulando programas narrativos",
    incorrectas: ["Puramente heráldica sin relato", "Exclusivamente funeraria"]
  },
  {
    enunciado: "¿Qué conjunto escultórico francés es célebre por la elegancia de sus reyes y reinas-columna?",
    correcta: "Portadas de la catedral de Reims",
    incorrectas: ["Pórtico de la Gloria en Santiago", "Claustro de Silos"]
  },
  {
    enunciado: "¿Qué maestro borgoñón del siglo XIV destaca por su realismo en el 'Pozo de Moisés'?",
    correcta: "Claus Sluter",
    incorrectas: ["Gislebertus", "Donatello"]
  },
  {
    enunciado: "¿Qué innovación pictórica se asocia a Giotto en la Capilla Scrovegni?",
    correcta: "Construcción espacial coherente y volumen por luces y sombras",
    incorrectas: ["Abstracción geométrica sin modelado", "Perspectiva lineal plenamente renacentista"]
  },
  {
    enunciado: "¿Qué escuela introduce el uso maduro del óleo y un detallismo extremo en el siglo XV?",
    correcta: "Primitivos flamencos (Van Eyck, Van der Weyden)",
    incorrectas: ["Manieristas italianos", "Barrocos tenebristas"]
  },
  {
    enunciado: "¿Qué ejemplo ilustra el esplendor de la vidriera gótica en París?",
    correcta: "Sainte-Chapelle",
    incorrectas: ["San Vitale de Rávena", "San Miniato al Monte"]
  },
  {
    enunciado: "¿Qué obra de Erwin Panofsky vincula la arquitectura gótica con la escolástica?",
    correcta: "‘Arquitectura gótica y pensamiento escolástico’",
    incorrectas: ["‘La deshumanización del arte’", "‘Del espíritu de las leyes’"]
  },
  {
    enunciado: "¿Qué concepto sintetiza la intención teológica del espacio gótico según Otto von Simson?",
    correcta: "Orden y claridad como reflejo del cosmos divino",
    incorrectas: ["Oscuridad y misterio sin estructura", "Caos intencional como vía mística"]
  },
  {
    enunciado: "¿Qué elemento del alzado ilumina directamente la nave central en el gótico maduro?",
    correcta: "El claristorio",
    incorrectas: ["El nartex", "La cripta"]
  },
  {
    enunciado: "¿Qué sistema de cubrición permite luz y altura sin gran masa mural?",
    correcta: "Bóveda de crucería con plementería ligera",
    incorrectas: ["Bóveda de cañón corrida maciza", "Arquitrabe adintelado continuo"]
  },
  {
    enunciado: "¿Qué papel tuvieron los gremios urbanos en la construcción catedralicia?",
    correcta: "Financiaron y organizaron trabajos, integrándose en el mecenazgo",
    incorrectas: ["Fueron prohibidos por los cabildos", "Se limitaron a funciones litúrgicas"]
  },
  {
    enunciado: "¿Qué rasgo social caracteriza el marco del gótico frente al románico?",
    correcta: "Urbanización creciente y surgimiento de la burguesía",
    incorrectas: ["Ruralización intensiva y disolución de mercados", "Regresión de las redes universitarias"]
  },
  {
    enunciado: "¿Qué fórmula espacial se generaliza en las cabeceras góticas de gran escala?",
    correcta: "Girola con capillas radiales",
    incorrectas: ["Ábside cuadrado sin capillas", "Planta centralizada circular"]
  },
  {
    enunciado: "¿Qué conjunto de vitrales es paradigmático por su iconografía y azules intensos?",
    correcta: "Vidrieras de Chartres",
    incorrectas: ["Mosaicos de Monreale", "Yeserías de San Juan de Letrán"]
  },
  {
    enunciado: "¿Qué diferencia formal presentan a menudo los rosetones góticos respecto al románico?",
    correcta: "Mayor diámetro y tracerías complejas",
    incorrectas: ["Menor tamaño y óculos ciegos", "Sustitución por lucernarios longitudinales"]
  },
  {
    enunciado: "¿Qué tendencia escultórica se aprecia en sepulcros góticos de nobles y reyes?",
    correcta: "Yacentes y orantes con creciente realismo",
    incorrectas: ["Ausencia de figura por iconoclasia", "Relieves geométricos sin retrato"]
  },
  {
    enunciado: "¿Qué relación guarda el programa iconográfico de portadas y vitrales con la catequesis?",
    correcta: "Funcionan como Biblia pauperum visual y narrativa",
    incorrectas: ["Renuncian a toda narración figurada", "Se limitan a motivos heráldicos"]
  },
  {
    enunciado: "¿Qué ciudad alemana alberga una catedral gótica célebre por su prolongada construcción?",
    correcta: "Colonia",
    incorrectas: ["Moscú", "Tesalónica"]
  },
  {
    enunciado: "¿Qué rasgo decorativo se intensifica en el flamboyant tardío?",
    correcta: "Tracerías ondulantes y pináculos proliferantes",
    incorrectas: ["Frisos dóricos con triglifos", "Frontones triangulares desnudos"]
  },
  {
    enunciado: "¿Qué artistas italianos representan la pintura gótica y protogótica en tabla y fresco?",
    correcta: "Duccio y Simone Martini",
    incorrectas: ["Caravaggio y Gentileschi", "Tiziano y Veronés"]
  },
  {
    enunciado: "¿Qué autores españoles son referentes de la pintura gótica en la Corona de Aragón y la Corona de Castilla?",
    correcta: "Jaume Huguet y Bartolomé Bermejo",
    incorrectas: ["Murillo y Zurbarán", "Juan de Flandes y El Greco exclusivamente"]
  },
  {
    enunciado: "¿Qué figura del XIX revalorizó el gótico a través de restauraciones y teoría arquitectónica?",
    correcta: "Viollet-le-Duc",
    incorrectas: ["Le Corbusier", "Brunelleschi"]
  },
  {
    enunciado: "¿Qué obra de Georges Duby relaciona gótico y sociedad medieval?",
    correcta: "‘El tiempo de las catedrales’",
    incorrectas: ["‘La ciudad antigua’", "‘Historia de la arquitectura moderna’"]
  },
  {
    enunciado: "¿Qué estructura metálica moderna ha sido comparada formalmente con la lógica gótica de esqueleto y piel?",
    correcta: "La torre Eiffel por su diafanidad estructural",
    incorrectas: ["El Panteón de Roma por su cascarón de hormigón", "La Basílica de San Pedro por su cúpula maciza"]
  },
  {
    enunciado: "¿Qué rasgo resume la síntesis gótica entre técnica y simbología religiosa?",
    correcta: "Estructura calculada al servicio de la luz teológica",
    incorrectas: ["Decoración autónoma sin función", "Masa mural como negación de la luz"]
  }
];
