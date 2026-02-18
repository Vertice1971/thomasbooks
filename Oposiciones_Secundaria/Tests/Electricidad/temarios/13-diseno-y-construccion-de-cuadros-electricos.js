// 13-diseno-y-construccion-de-cuadros-electricos.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué normativa define los requisitos para cuadros eléctricos de baja tensión (conjuntos de aparamenta)?",
    correcta: "La serie de normas UNE-EN 61439 (especialmente la parte 1 y 2)",
    incorrectas: [
      "La UNE-EN 60204-1 exclusivamente para máquinas herramientas",
      "El Código Técnico de la Edificación (CTE) en su totalidad"
    ]
  },
  {
    enunciado: "¿Qué es el índice de protección IP en un cuadro eléctrico?",
    correcta: "Un código que clasifica el nivel de protección contra el contacto con partes peligrosas, la entrada de cuerpos sólidos extraños y agua",
    incorrectas: [
      "Un índice que mide la potencia máxima disipable por el cuadro",
      "Un código que indica la resistencia al fuego del material plástico"
    ]
  },
  {
    enunciado: "¿Qué significa el código IK en una envolvente?",
    correcta: "El grado de protección contra impactos mecánicos externos (energía de impacto en Julios)",
    incorrectas: [
      "La constante dieléctrica del aislamiento",
      "La clase de protección eléctrica (Clase I, II, III)"
    ]
  },
  {
    enunciado: "¿Qué es la 'forma de separación' (Forma 1, 2, 3, 4) en un cuadro según UNE-EN 61439?",
    correcta: "Una clasificación de la compartimentación interna para separar barras, unidades funcionales y bornas, mejorando la seguridad y mantenimiento",
    incorrectas: [
      "La forma geométrica exterior del armario (cuadrada, rectangular)",
      "El tipo de separación entre fases (aire, aceite, gas)"
    ]
  },
  {
    enunciado: "¿Cuál es la ventaja de la Forma 4b frente a la Forma 1?",
    correcta: "Mayor seguridad, ya que separa barras de unidades funcionales y de bornas, y separa las bornas de cada unidad entre sí",
    incorrectas: [
      "Menor coste de fabricación y mayor facilidad de montaje",
      "Mayor ventilación natural al no tener barreras internas"
    ]
  },
  {
    enunciado: "¿Qué criterio se usa para dimensionar las barras de cobre principales de un cuadro?",
    correcta: "La intensidad nominal que deben soportar en régimen permanente y la resistencia a los esfuerzos electrodinámicos de cortocircuito",
    incorrectas: [
      "Únicamente el color del cobre para que sea estético",
      "La longitud total del cuadro independientemente de la carga"
    ]
  },
  {
    enunciado: "¿Por qué se pintan o enfundan las barras de cobre en colores normalizados?",
    correcta: "Para identificar las fases (L1, L2, L3) y el neutro/tierra, y mejorar ligeramente la disipación térmica por radiación",
    incorrectas: [
      "Para aislarlas eléctricamente por completo como si fuera cable",
      "Para evitar el robo de material"
    ]
  },
  {
    enunciado: "¿Qué es un repartidor o distribuidor modular en un cuadro?",
    correcta: "Un bloque de conexión que facilita la distribución de alimentación desde una entrada principal a múltiples salidas de menor sección",
    incorrectas: [
      "Un ventilador que reparte el aire frío por el cuadro",
      "Un componente que reparte la carga equitativamente entre fases automáticamente"
    ]
  },
  {
    enunciado: "¿Qué distancia de seguridad mínima (distancia al aire) es crítica en el diseño de cuadros?",
    correcta: "La distancia más corta en aire entre dos partes conductoras vivas (o fase y tierra) para evitar arcos eléctricos",
    incorrectas: [
      "La distancia entre la maneta de la puerta y el suelo",
      "La distancia entre el cuadro y la pared trasera"
    ]
  },
  {
    enunciado: "¿Qué función tiene una placa de montaje o chasis en un armario?",
    correcta: "Servir de soporte mecánico para fijar los componentes (contactores, magnetotérmicos) y canaletas",
    incorrectas: [
      "Actuar como disipador de calor exclusivo del transformador",
      "Proteger contra radiaciones electromagnéticas externas"
    ]
  },
  {
    enunciado: "¿Por qué es importante el cálculo térmico de un cuadro eléctrico?",
    correcta: "Para asegurar que la disipación de calor de los componentes no eleve la temperatura interna por encima de los límites operativos",
    incorrectas: [
      "Para calcular cuánto calefactor hace falta en verano",
      "Para cumplir con la normativa de eficiencia energética del edificio"
    ]
  },
  {
    enunciado: "¿Qué solución se adopta si la temperatura estimada dentro del cuadro supera la admisible solo con ventilación natural?",
    correcta: "Instalar ventilación forzada (ventiladores con filtro) o unidades de refrigeración activa (aire acondicionado)",
    incorrectas: [
      "Hacer agujeros taladrados al azar en la puerta",
      "Reducir la sección de los cables para que se calienten menos"
    ]
  },
  {
    enunciado: "¿Qué es una resistencia calefactora anticondensación?",
    correcta: "Un elemento que mantiene la temperatura interior ligeramente por encima del punto de rocío para evitar humedad condensada",
    incorrectas: [
      "Una resistencia para probar los disparos térmicos de los interruptores",
      "Un sistema para calentar el café del operario"
    ]
  },
  {
    enunciado: "¿Cómo se deben instalar los componentes pesados (ej. transformadores grandes) en un cuadro mural?",
    correcta: "En la parte inferior del cuadro para bajar el centro de gravedad y evitar deformaciones o caídas",
    incorrectas: [
      "En la puerta para facilitar su inspección visual",
      "En la parte superior para que el calor salga rápido"
    ]
  },
  {
    enunciado: "¿Qué es un carril DIN (ej. TS 35)?",
    correcta: "Un perfil metálico estandarizado para el montaje rápido (clipaje) de aparamenta modular como magnetotérmicos y bornas",
    incorrectas: [
      "Un carril electrificado que alimenta los componentes sin cables",
      "Un tipo de cable plano para maniobra"
    ]
  },
  {
    enunciado: "¿Qué indica la sección de un conductor de protección PE (Tierra) en un cuadro según REBT?",
    correcta: "Debe calcularse o seleccionarse según tabla (ej. igual a la fase hasta 16 mm²) para soportar la corriente de defecto",
    incorrectas: [
      "Debe ser siempre de 1.5 mm² para ahorrar costes",
      "Puede eliminarse si el cuadro es metálico"
    ]
  },
  {
    enunciado: "¿Qué es una borna de seccionamiento o prueba?",
    correcta: "Una borna que permite abrir el circuito (ej. secundario de un transformador de medida) sin desconectar el cable físicamente, para pruebas",
    incorrectas: [
      "Una borna que corta el cable automáticamente si hay sobrecarga",
      "Una borna que conecta fase y neutro para testear cortocircuitos"
    ]
  },
  {
    enunciado: "¿Para qué sirven las canaletas ranuradas en un cuadro?",
    correcta: "Para guiar y organizar el cableado de mando y potencia de forma ordenada, protegiéndolo y facilitar modificaciones",
    incorrectas: [
      "Para ventilar los contactores por sus ranuras",
      "Para recoger el agua de condensación"
    ]
  },
  {
    enunciado: "¿Qué criterio se sigue para el marcado de cables (identificación) en un cuadro industrial?",
    correcta: "Cada extremo del cable debe llevar un identificador único que coincida con el esquema eléctrico para facilitar el seguimiento",
    incorrectas: [
      "Se marcan solo los cables de fase, el neutro no hace falta",
      "No es necesario marcar si el cuadro es pequeño"
    ]
  },
  {
    enunciado: "¿Qué es un embarrado de tierra y dónde se ubica?",
    correcta: "Una barra de cobre (o latón/acero) donde se conectan todos los conductores de protección (PE) de los circuitos y la tierra principal, accesible",
    incorrectas: [
      "Una barra enterrada debajo del cuadro en el suelo",
      "Un cable que rodea todo el exterior del armario"
    ]
  },
  {
    enunciado: "¿Qué precaución se debe tener al crimpar terminales (punteras) en cables flexibles?",
    correcta: "Usar la herramienta adecuada para garantizar una unión mecánicamente fuerte y eléctricamente conductiva sin dañar los hilos",
    incorrectas: [
      "Soldar siempre la punta con estaño antes de crimpar",
      "Apretar con alicates universales hasta que quede plano"
    ]
  },
  {
    enunciado: "¿Cuál es el color normalizado para conductores de potencia en corriente alterna (fases) según normativa europea actual?",
    correcta: "Negro, Marrón y Gris (L1, L2, L3)",
    incorrectas: [
      "Rojo, Amarillo y Azul",
      "Verde, Blanco y Negro"
    ]
  },
  {
    enunciado: "¿Y para el neutro?",
    correcta: "Azul (preferiblemente azul claro)",
    incorrectas: [
      "Negro",
      "Gris"
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre un cuadro de distribución y un CCM (Centro de Control de Motores)?",
    correcta: "El CCM está diseñado específicamente para agrupar arrancadores y protecciones de motores, a menudo en cajones extraíbles",
    incorrectas: [
      "El cuadro de distribución no lleva protecciones",
      "El CCM solo funciona con corriente continua"
    ]
  },
  {
    enunciado: "¿Qué es una placa pasacables o de entrada de cables?",
    correcta: "Una pieza (a veces desmontable o de membrana) en la base o techo del armario que permite la entrada de cables manteniendo el IP",
    incorrectas: [
      "Una placa electrónica que filtra las interferencias de entrada",
      "Una etiqueta para listar los cables entrantes"
    ]
  },
  {
    enunciado: "¿Qué factor de simultaneidad se aplica en el diseño de un cuadro?",
    correcta: "Un coeficiente (menor o igual a 1) que estima que no todos los receptores funcionarán a plena carga a la vez, permitiendo optimizar secciones",
    incorrectas: [
      "Un factor que obliga a que todos los interruptores disparen a la vez",
      "El número de operarios que pueden trabajar en el cuadro simultáneamente"
    ]
  },
  {
    enunciado: "¿Qué es la tensión asignada de aislamiento (Ui) de un cuadro?",
    correcta: "El valor de tensión que define la capacidad de aislamiento del conjunto y al que se refieren los ensayos dieléctricos",
    incorrectas: [
      "La tensión de la batería de emergencia",
      "La tensión mínima para que funcionen los pilotos LED"
    ]
  },
  {
    enunciado: "¿Por qué se recomienda dejar un porcentaje de 'reserva' o espacio libre en un cuadro nuevo?",
    correcta: "Para permitir futuras ampliaciones o modificaciones (típicamente un 20-30% de espacio en carril DIN)",
    incorrectas: [
      "Para guardar herramientas del electricista dentro",
      "Para mejorar la resonancia acústica del armario"
    ]
  },
  {
    enunciado: "¿Qué es un interruptor de corte en carga o seccionador de cabecera?",
    correcta: "El dispositivo principal que permite aislar todo el cuadro de la alimentación para mantenimiento seguro (debe ser bloqueable)",
    incorrectas: [
      "Un pulsador de parada de emergencia tipo seta",
      "Un fusible de cristal pequeño"
    ]
  },
  {
    enunciado: "¿Qué función tiene el mando rotativo prolongado en puerta?",
    correcta: "Permitir accionar el interruptor principal desde el exterior sin abrir la puerta, y bloquear la apertura si está en ON",
    incorrectas: [
      "Girar el ventilador interior manualmente",
      "Regular la velocidad de los motores conectados"
    ]
  },
  {
    enunciado: "¿Qué se entiende por compatibilidad electromagnética (CEM) en diseño de cuadros?",
    correcta: "Medidas de diseño (apantallamiento, filtros, separación de cables) para que el cuadro no emita ni sufra interferencias electromagnéticas",
    incorrectas: [
      "Que los componentes sean de la misma marca comercial",
      "Que el cuadro sea compatible mecánicamente con el de al lado"
    ]
  },
  {
    enunciado: "¿Dónde se debe conectar la pantalla de un cable apantallado de señal para evitar bucles de masa?",
    correcta: "Generalmente en un solo extremo (en el cuadro), a una barra de tierra de baja impedancia y gran superficie de contacto",
    incorrectas: [
      "En ambos extremos siempre y también en el medio",
      "A una fase activa para drenar el ruido"
    ]
  },
  {
    enunciado: "¿Qué ensayo de rutina es obligatorio antes de entregar un cuadro montado?",
    correcta: "Verificación de continuidad de tierra, ensayo dieléctrico (rigidez) y comprobación funcional y de cableado",
    incorrectas: [
      "Prueba de resistencia al fuego real",
      "Prueba de caída desde 1 metro de altura"
    ]
  },
  {
    enunciado: "¿Qué es un sinóptico en el frontal de un cuadro?",
    correcta: "Un esquema gráfico simplificado del proceso o instalación con pilotos/indicadores integrados para visualizar el estado fácilmente",
    incorrectas: [
      "Un logotipo de la empresa instaladora",
      "Un código QR para descargar el manual"
    ]
  },
  {
    enunciado: "¿Qué tipo de tornillos se usan para asegurar la continuidad eléctrica de las puertas metálicas con el chasis?",
    correcta: "Trencillas de masa o cables de tierra flexibles conectados con tornillos y arandelas dentadas que muerdan la pintura",
    incorrectas: [
      "Bisagras de plástico conductor",
      "No hace falta, la bisagra metálica es suficiente siempre"
    ]
  },
  {
    enunciado: "¿Qué es la corriente de cortocircuito pico (Ipk) que debe soportar un embarrado?",
    correcta: "El valor máximo instantáneo de la corriente de cortocircuito, que determina las fuerzas mecánicas de atracción/repulsión entre barras",
    incorrectas: [
      "La corriente que funde el fusible en 1 hora",
      "La corriente media durante el arranque de un motor"
    ]
  },
  {
    enunciado: "¿Qué material se usa habitualmente para las placas pasacables ciegas mecanizables?",
    correcta: "Chapa de acero, aluminio o materiales plásticos/goma",
    incorrectas: [
      "Cristal templado",
      "Madera aglomerada"
    ]
  },
  {
    enunciado: "¿Qué es una envolvente de doble aislamiento (Clase II)?",
    correcta: "Un armario (generalmente poliéster o plástico) diseñado para que ningún fallo pueda poner bajo tensión partes accesibles, sin necesidad de tierra",
    incorrectas: [
      "Un armario con dos capas de pintura",
      "Un armario con doble puerta metálica"
    ]
  },
  {
    enunciado: "¿Qué ventaja tiene el cableado 'peine' en interruptores modulares?",
    correcta: "Permite puentear la alimentación de varios magnetotérmicos de forma rápida, segura y estética frente a usar puentes de cable",
    incorrectas: [
      "Aumenta la resistencia de contacto a propósito",
      "Permite peinar los cables de red informática"
    ]
  },
  {
    enunciado: "¿Qué precaución se debe tener con la ventilación en ambientes polvorientos?",
    correcta: "Usar filtros IP54/IP55 en las rejillas y ventiladores, y mantener una sobrepresión interna si es posible para evitar entrada de polvo",
    incorrectas: [
      "Quitar las puertas para que ventile mejor",
      "Echar agua dentro para asentar el polvo"
    ]
  }
];
