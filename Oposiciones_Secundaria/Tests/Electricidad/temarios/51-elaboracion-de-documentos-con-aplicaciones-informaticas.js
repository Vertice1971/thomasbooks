// 51-elaboracion-de-documentos-con-aplicaciones-informaticas.js

var PREGUNTAS = [
  {
    enunciado: "¿Qué ventaja principal aporta el uso de estilos en un procesador de textos?",
    correcta: "Asegura coherencia y permite automatizar estructuras como índices y tabla de contenido",
    incorrectas: [
      "Mejora la velocidad de impresión al reducir la resolución del documento",
      "Impide que el documento pueda exportarse a PDF por razones de compatibilidad"
    ]
  },
  {
    enunciado: "¿Qué implica normalizar un documento mediante plantillas?",
    correcta: "Definir formatos y estructuras reutilizables para mantener uniformidad en documentos similares",
    incorrectas: [
      "Convertir cualquier archivo a imagen para evitar modificaciones",
      "Eliminar los metadatos para reducir el tamaño del archivo"
    ]
  },
  {
    enunciado: "¿Para qué sirve el control de cambios en la edición colaborativa?",
    correcta: "Registrar inserciones y eliminaciones para poder revisarlas, aceptarlas o rechazarlas",
    incorrectas: [
      "Bloquear el documento para que nadie pueda leerlo sin contraseña",
      "Convertir automáticamente el documento a un formato propietario"
    ]
  },
  {
    enunciado: "¿Qué función cumplen los comentarios en un documento colaborativo?",
    correcta: "Aportar observaciones vinculadas a fragmentos concretos sin alterar el texto principal",
    incorrectas: [
      "Sustituir el texto original por un resumen obligatorio del autor",
      "Eliminar el historial de versiones para evitar conflictos entre editores"
    ]
  },
  {
    enunciado: "¿Qué requisito técnico facilita la generación automática de una tabla de contenido?",
    correcta: "Que los títulos estén definidos con estilos de encabezado jerárquicos",
    incorrectas: [
      "Que el documento tenga imágenes en todas las páginas",
      "Que el documento esté guardado exclusivamente en formato .pdf"
    ]
  },
  {
    enunciado: "¿Qué herramienta se usa para crear automáticamente una lista de ilustraciones?",
    correcta: "La inserción de rótulos o leyendas en figuras y su recopilación automática",
    incorrectas: [
      "La conversión del documento a texto plano sin formato",
      "La activación de un modo de lectura que oculta imágenes"
    ]
  },
  {
    enunciado: "¿Cuál es la finalidad de un gestor bibliográfico o de la bibliografía automática en un procesador de textos?",
    correcta: "Insertar citas y generar bibliografías coherentes a partir de una base de referencias",
    incorrectas: [
      "Cifrar el documento para que solo lo abra el autor",
      "Optimizar el brillo y contraste de las imágenes incrustadas"
    ]
  },
  {
    enunciado: "¿Qué es la combinación de correspondencia (mail merge)?",
    correcta: "La creación de documentos personalizados a partir de una plantilla y una fuente de datos",
    incorrectas: [
      "La unión de varios PDFs en un único archivo sin posibilidad de edición",
      "La compresión de documentos para enviarlos por correo con menos tamaño"
    ]
  },
  {
    enunciado: "¿Qué se entiende por campos en un procesador de textos?",
    correcta: "Elementos dinámicos que se actualizan automáticamente, como fecha, número de página o referencias",
    incorrectas: [
      "Áreas del documento que no se imprimen nunca por defecto",
      "Fragmentos de texto que solo pueden escribirse con mayúsculas"
    ]
  },
  {
    enunciado: "¿Qué ventaja aporta el uso de referencias cruzadas en un documento largo?",
    correcta: "Mantener vínculos internos que se actualizan si cambian números de sección o elementos referenciados",
    incorrectas: [
      "Eliminar automáticamente las repeticiones de palabras",
      "Impedir que el documento se comparta en la nube"
    ]
  },
  {
    enunciado: "¿Qué es una macro en un entorno ofimático?",
    correcta: "Una secuencia de acciones automatizadas para ejecutar tareas repetitivas",
    incorrectas: [
      "Un formato de archivo exclusivo para presentaciones con audio",
      "Un sistema de firma manuscrita escaneada con validez jurídica"
    ]
  },
  {
    enunciado: "¿Qué riesgo habitual se asocia a las macros en documentos recibidos de terceros?",
    correcta: "Que puedan ejecutar código malicioso si se habilitan sin verificar el origen",
    incorrectas: [
      "Que impidan la creación de tablas en el documento",
      "Que obliguen a guardar siempre en formato .odt"
    ]
  },
  {
    enunciado: "¿Qué diferencia esencial hay entre un formato propietario y un estándar abierto?",
    correcta: "El estándar abierto está publicado y permite interoperabilidad sin depender de un único proveedor",
    incorrectas: [
      "El estándar abierto solo se puede abrir sin conexión a internet",
      "El formato propietario siempre es más seguro por definición normativa"
    ]
  },
  {
    enunciado: "¿Cuál es una razón típica para exportar un documento a PDF en un contexto administrativo?",
    correcta: "Conservar la maquetación y facilitar la distribución con aspecto estable",
    incorrectas: [
      "Obligar a que el documento tenga tablas dinámicas activas",
      "Permitir que varias personas editen simultáneamente sin control de cambios"
    ]
  },
  {
    enunciado: "¿Qué describe OLE (Object Linking and Embedding)?",
    correcta: "La inserción o vinculación de objetos entre aplicaciones, como una hoja de cálculo dentro de un documento",
    incorrectas: [
      "Un protocolo de correo electrónico para enviar adjuntos cifrados",
      "Un tipo de licencia que prohíbe el uso de estándares ISO"
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre incrustar y vincular un objeto (por ejemplo, una tabla de Excel en un documento)?",
    correcta: "Incrustar guarda una copia dentro del documento; vincular depende del archivo externo y puede actualizarse",
    incorrectas: [
      "Incrustar solo funciona en Linux y vincular solo en Windows",
      "Vincular elimina el objeto del documento y lo sustituye por texto plano"
    ]
  },
  {
    enunciado: "¿Qué significa direccionamiento relativo de celdas en una hoja de cálculo?",
    correcta: "Que la referencia cambia al copiar la fórmula según el desplazamiento",
    incorrectas: [
      "Que la referencia siempre apunta a la celda A1",
      "Que la referencia se bloquea automáticamente al imprimir"
    ]
  },
  {
    enunciado: "¿Qué caracteriza una referencia absoluta en una fórmula de hoja de cálculo?",
    correcta: "Que se mantiene fija al copiar la fórmula, usando signos $ en fila y columna",
    incorrectas: [
      "Que solo puede aplicarse a celdas con texto, no a números",
      "Que impide utilizar funciones lógicas en la hoja"
    ]
  },
  {
    enunciado: "¿Qué describe una referencia mixta en una hoja de cálculo?",
    correcta: "Verrouillea solo la columna o solo la fila, según dónde se coloque el símbolo $",
    incorrectas: [
      "Convierte automáticamente números en fechas",
      "Hace que todas las celdas se comporten como tablas dinámicas"
    ]
  },
  {
    enunciado: "¿Para qué se usan funciones lógicas como SI (IF)?",
    correcta: "Para devolver resultados diferentes según se cumpla o no una condición",
    incorrectas: [
      "Para crear animaciones y transiciones entre diapositivas",
      "Para firmar digitalmente una hoja con validez legal"
    ]
  },
  {
    enunciado: "¿Qué ventaja suele aportar XLOOKUP frente a BUSCARV (VLOOKUP) en hojas de cálculo modernas?",
    correcta: "Mayor flexibilidad al buscar en cualquier dirección y devolver columnas sin depender de un índice fijo",
    incorrectas: [
      "Permite crear tablas dinámicas sin datos de origen",
      "Sustituye la necesidad de gráficos porque resume automáticamente en diapositivas"
    ]
  },
  {
    enunciado: "¿Cuál es la finalidad principal de una tabla dinámica (pivot table)?",
    correcta: "Resumir y analizar grandes volúmenes de datos reorganizando campos por categorías y medidas",
    incorrectas: [
      "Aumentar la resolución de las imágenes incrustadas en el documento",
      "Eliminar duplicados borrando filas sin posibilidad de recuperación"
    ]
  },
  {
    enunciado: "¿Qué criterio es correcto al elegir un tipo de gráfico para datos temporales?",
    correcta: "Un gráfico de líneas suele ser adecuado para visualizar tendencias a lo largo del tiempo",
    incorrectas: [
      "Un gráfico de sectores es siempre el mejor para cualquier serie temporal",
      "Un gráfico de dispersión solo sirve cuando hay texto, no números"
    ]
  },
  {
    enunciado: "¿Qué tipo de gráfico suele ser apropiado para estudiar relación entre dos variables numéricas?",
    correcta: "Un gráfico de dispersión (scatter) para observar correlaciones y patrones",
    incorrectas: [
      "Un gráfico de sectores para comparar posiciones geográficas",
      "Un gráfico de líneas para repartir porcentajes que suman más de 100"
    ]
  },
  {
    enunciado: "¿Qué significa vinculación dinámica de gráficos entre una hoja de cálculo y un documento?",
    correcta: "Que el gráfico puede actualizarse cuando cambian los datos de origen",
    incorrectas: [
      "Que el gráfico se convierte en imagen y nunca vuelve a cambiar",
      "Que el documento se firma automáticamente cada vez que se actualiza el gráfico"
    ]
  },
  {
    enunciado: "¿Qué función cumplen los patrones de diapositivas (master slides) en una presentación?",
    correcta: "Definir un diseño común para garantizar coherencia visual y ahorrar tiempo de maquetación",
    incorrectas: [
      "Convertir el archivo de presentación en un documento legalmente firmado",
      "Sustituir las imágenes por texto para mejorar la accesibilidad sin intervención"
    ]
  },
  {
    enunciado: "¿Cuál es un criterio razonable para usar transiciones en presentaciones?",
    correcta: "Que no sean disruptivas y sirvan a la claridad del discurso, no al efecto por sí mismo",
    incorrectas: [
      "Que siempre sean las más llamativas para aumentar la credibilidad",
      "Que cambien el color de cada diapositiva aleatoriamente para evitar monotonía"
    ]
  },
  {
    enunciado: "¿Qué se entiende por navegación no lineal en una presentación?",
    correcta: "Poder saltar entre diapositivas mediante enlaces o botones según necesidades del guion",
    incorrectas: [
      "Que las diapositivas se impriman en papel continuo sin cortes",
      "Que la presentación solo pueda abrirse en modo lectura"
    ]
  },
  {
    enunciado: "¿Para qué sirven los botones de acción en una presentación?",
    correcta: "Para ejecutar saltos, abrir recursos o activar navegación interactiva con un clic",
    incorrectas: [
      "Para corregir automáticamente la ortografía del presentador en tiempo real",
      "Para convertir todos los vídeos a formato .odt"
    ]
  },
  {
    enunciado: "¿Qué aporta integrar audio o vídeo en una presentación de forma correcta?",
    correcta: "Refuerza el mensaje si es pertinente y está bien dosificado, evitando sobrecarga cognitiva",
    incorrectas: [
      "Garantiza automáticamente que la presentación cumpla el ENS",
      "Impide que el archivo se pueda compartir por correo"
    ]
  },
  {
    enunciado: "¿Qué es un DMS (sistema de gestión documental)?",
    correcta: "Un sistema para almacenar, clasificar, versionar y controlar acceso a documentos con trazabilidad",
    incorrectas: [
      "Un tipo de hoja de cálculo diseñada solo para gráficos",
      "Un formato de archivo alternativo a PDF definido por ISO 26300"
    ]
  },
  {
    enunciado: "¿Qué significa control de versiones en gestión documental?",
    correcta: "Mantener historial de cambios y permitir recuperar estados anteriores del documento",
    incorrectas: [
      "Eliminar todas las versiones salvo la última para ahorrar espacio siempre",
      "Bloquear la impresión del documento por seguridad"
    ]
  },
  {
    enunciado: "¿Qué finalidad tiene la gestión de permisos (lectura/escritura) en repositorios documentales?",
    correcta: "Restringir operaciones según roles para proteger integridad y confidencialidad de la información",
    incorrectas: [
      "Aumentar el tamaño del archivo para que sea más difícil de copiar",
      "Evitar que existan metadatos en cualquier documento"
    ]
  },
  {
    enunciado: "¿Qué describe el cifrado aplicado a documentos?",
    correcta: "La transformación del contenido para que solo pueda leerse con la clave autorizada",
    incorrectas: [
      "La sustitución automática de palabras por sinónimos para evitar plagio",
      "La conversión del documento a un formato abierto por defecto"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a un servicio en la nube de tipo SaaS para ofimática?",
    correcta: "Aplicaciones accesibles por internet con sincronización y acceso multiplataforma",
    incorrectas: [
      "Aplicaciones que solo funcionan sin conexión por requisitos legales",
      "Sistemas que obligan a guardar siempre en un único estándar ISO"
    ]
  },
  {
    enunciado: "¿Qué regula la Ley 39/2015 en relación con documentos electrónicos?",
    correcta: "La validez del documento electrónico, copias auténticas y el archivo electrónico en el procedimiento administrativo",
    incorrectas: [
      "La homologación de los formatos ODT y DOCX como únicos válidos en Europa",
      "La prohibición del trabajo colaborativo en documentos oficiales"
    ]
  },
  {
    enunciado: "¿Qué marco establece la Ley 40/2015 en el sector público?",
    correcta: "La organización y funcionamiento, incluyendo la sede electrónica y la interoperabilidad entre administraciones",
    incorrectas: [
      "Un catálogo de funciones obligatorias de hojas de cálculo en centros educativos",
      "La sustitución del RGPD por normativa exclusivamente nacional"
    ]
  },
  {
    enunciado: "¿Qué establece el Real Decreto 311/2022 (Esquema Nacional de Seguridad)?",
    correcta: "Principios y requisitos de seguridad para proteger información y servicios en el sector público",
    incorrectas: [
      "La estructura de las tablas dinámicas y su uso en informes oficiales",
      "La obligación de usar exclusivamente software propietario en la Administración"
    ]
  },
  {
    enunciado: "¿Qué establece el Real Decreto 4/2010 (Esquema Nacional de Interoperabilidad)?",
    correcta: "Criterios y recomendaciones para asegurar interoperabilidad y reutilización de la información y documentos",
    incorrectas: [
      "La definición de todas las transiciones permitidas en presentaciones oficiales",
      "El régimen sancionador específico de la ofimática en empresas privadas"
    ]
  },
  {
    enunciado: "¿Qué son las Normas Técnicas de Interoperabilidad (NTI/NTC) asociadas al ENI?",
    correcta: "Especificaciones técnicas sobre documento y expediente electrónico y otros estándares para intercambio",
    incorrectas: [
      "Reglas de estilo tipográfico para imprimir siempre en tamaño A3",
      "Criterios para elegir gráficos de sectores en informes estadísticos"
    ]
  },
  {
    enunciado: "¿Qué exige el RGPD y la LOPDGDD respecto a documentos con datos personales?",
    correcta: "Tratamiento lícito y seguro, con principios como minimización, confidencialidad y responsabilidad proactiva",
    incorrectas: [
      "Que todo documento con datos personales se publique para transparencia",
      "Que las copias auténticas solo puedan existir en papel"
    ]
  },
  {
    enunciado: "¿Qué regula la Ley 59/2003 y el Reglamento (UE) 910/2014 (eIDAS)?",
    correcta: "La firma electrónica y los servicios de confianza para transacciones electrónicas con validez jurídica",
    incorrectas: [
      "El diseño de plantillas de PowerPoint para instituciones educativas",
      "La compatibilidad obligatoria entre macros de diferentes suites ofimáticas"
    ]
  },
  {
    enunciado: "¿Qué describe ISO/IEC 26300?",
    correcta: "El estándar del formato OpenDocument (ODF) para documentos ofimáticos",
    incorrectas: [
      "El estándar de cifrado obligatorio para PDFs administrativos",
      "El estándar europeo de correo electrónico certificado"
    ]
  },
  {
    enunciado: "¿Qué describe ISO/IEC 29500?",
    correcta: "El estándar de Office Open XML (OOXML) utilizado por formatos como .docx, .xlsx y .pptx",
    incorrectas: [
      "El estándar internacional de tablas dinámicas en hojas de cálculo",
      "El estándar de interoperabilidad ENS para sistemas críticos"
    ]
  }
];
