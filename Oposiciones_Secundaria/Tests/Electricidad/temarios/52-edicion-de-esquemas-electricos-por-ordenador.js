// 52-edicion-de-esquemas-electricos-por-ordenador.js

var PREGUNTAS = [
  {
    enunciado: "¿Cuál es la finalidad principal de los programas de edición de esquemas eléctricos?",
    correcta: "Representar circuitos de forma normalizada, clara y técnicamente precisa para su diseño y documentación",
    incorrectas: [
      "Simular el consumo energético en tiempo real de una instalación",
      "Sustituir completamente el montaje físico de instalaciones eléctricas"
    ]
  },
  {
    enunciado: "¿Qué ventaja aporta la edición de esquemas eléctricos por ordenador frente al dibujo manual?",
    correcta: "Mayor precisión, facilidad de modificación y reutilización de esquemas normalizados",
    incorrectas: [
      "Elimina la necesidad de conocer simbología eléctrica",
      "Impide cometer errores de conexionado por definición"
    ]
  },
  {
    enunciado: "¿Qué tipo de software se utiliza habitualmente para esquemas eléctricos?",
    correcta: "Aplicaciones CAD eléctricas específicas o CAD general con bibliotecas eléctricas",
    incorrectas: [
      "Procesadores de texto con control de cambios",
      "Gestores documentales orientados a archivo administrativo"
    ]
  },
  {
    enunciado: "¿Qué función cumplen las bibliotecas de símbolos eléctricos?",
    correcta: "Proporcionar símbolos normalizados reutilizables para representar componentes",
    incorrectas: [
      "Calcular automáticamente la potencia instalada",
      "Convertir esquemas eléctricos en gráficos estadísticos"
    ]
  },
  {
    enunciado: "¿Qué norma regula la simbología eléctrica en esquemas?",
    correcta: "Normas UNE e IEC sobre símbolos gráficos para esquemas eléctricos",
    incorrectas: [
      "RGPD sobre protección de datos personales",
      "ISO 690 sobre referencias bibliográficas"
    ]
  },
  {
    enunciado: "¿Qué es un esquema unifilar?",
    correcta: "Una representación simplificada donde cada circuito se dibuja con una sola línea",
    incorrectas: [
      "Un esquema que solo puede imprimirse en formato A1",
      "Un esquema exclusivo para circuitos electrónicos digitales"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a un esquema multifilar?",
    correcta: "Representa cada conductor del circuito de forma individual y detallada",
    incorrectas: [
      "Utiliza una sola línea para todos los elementos",
      "Solo se emplea en instalaciones de baja tensión doméstica"
    ]
  },
  {
    enunciado: "¿En qué contexto es más adecuado un esquema multifilar?",
    correcta: "En cuadros eléctricos y circuitos donde es necesario detallar cada conexión",
    incorrectas: [
      "En planos de situación de edificios",
      "En memorias administrativas sin contenido técnico"
    ]
  },
  {
    enunciado: "¿Qué información suele incluir un esquema eléctrico completo?",
    correcta: "Simbología, referencias de componentes, conexiones y designaciones normalizadas",
    incorrectas: [
      "Únicamente el nombre del instalador",
      "Solo valores económicos del proyecto"
    ]
  },
  {
    enunciado: "¿Qué son las referencias cruzadas en esquemas eléctricos?",
    correcta: "Indicaciones que relacionan contactos, bobinas o elementos ubicados en distintas hojas",
    incorrectas: [
      "Errores gráficos generados por el software CAD",
      "Anotaciones estéticas sin función técnica"
    ]
  },
  {
    enunciado: "¿Qué ventaja ofrece el uso de capas (layers) en CAD eléctrico?",
    correcta: "Organizar distintos tipos de elementos y facilitar la edición y visualización",
    incorrectas: [
      "Aumentar automáticamente la tensión del circuito",
      "Eliminar la necesidad de imprimir el esquema"
    ]
  },
  {
    enunciado: "¿Qué función cumple la numeración de hilos o conductores?",
    correcta: "Identificar cada conductor para facilitar montaje, mantenimiento y diagnóstico",
    incorrectas: [
      "Determinar el color del cable en pantalla",
      "Sustituir el uso de esquemas multifilares"
    ]
  },
  {
    enunciado: "¿Qué es la rotulación automática en esquemas eléctricos?",
    correcta: "La asignación automática de etiquetas y designaciones a componentes y conductores",
    incorrectas: [
      "La traducción del esquema a lenguaje natural",
      "La eliminación de símbolos duplicados"
    ]
  },
  {
    enunciado: "¿Qué ventaja aporta la generación automática de listas de materiales (BOM)?",
    correcta: "Obtener el inventario de componentes a partir del esquema de forma coherente",
    incorrectas: [
      "Calcular la potencia reactiva del circuito",
      "Evitar el uso de normativa técnica"
    ]
  },
  {
    enunciado: "¿Qué es un cuadro eléctrico en el contexto del diseño asistido por ordenador?",
    correcta: "El conjunto de esquemas y representaciones que describen la distribución y control eléctrico",
    incorrectas: [
      "Un archivo exclusivamente gráfico sin información técnica",
      "Un documento administrativo sin valor técnico"
    ]
  },
  {
    enunciado: "¿Qué papel cumple la normalización en la edición de esquemas eléctricos?",
    correcta: "Garantizar comprensión universal, seguridad y coherencia técnica",
    incorrectas: [
      "Limitar la creatividad del diseñador",
      "Impedir el uso de software libre"
    ]
  },
  {
    enunciado: "¿Qué norma es habitual en instalaciones eléctricas de baja tensión en España?",
    correcta: "El Reglamento Electrotécnico para Baja Tensión (REBT)",
    incorrectas: [
      "La Ley 39/2015 del Procedimiento Administrativo",
      "La ISO 26300 de formatos ofimáticos"
    ]
  },
  {
    enunciado: "¿Qué es un esquema funcional?",
    correcta: "Un esquema que describe el funcionamiento lógico del circuito más que su disposición física",
    incorrectas: [
      "Un esquema que solo muestra la ubicación real de los componentes",
      "Un plano arquitectónico sin símbolos eléctricos"
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre esquema eléctrico y plano de instalación?",
    correcta: "El esquema representa conexiones y funcionamiento; el plano muestra ubicación física",
    incorrectas: [
      "No existe ninguna diferencia técnica",
      "El plano solo se usa en electrónica digital"
    ]
  },
  {
    enunciado: "¿Qué ventaja aporta el uso de plantillas en CAD eléctrico?",
    correcta: "Estandarizar formatos, márgenes, cajetines y simbología",
    incorrectas: [
      "Eliminar automáticamente los errores de cálculo",
      "Impedir modificaciones posteriores"
    ]
  },
  {
    enunciado: "¿Qué información contiene el cajetín de un esquema eléctrico?",
    correcta: "Datos identificativos como título, autor, fecha, escala y revisión",
    incorrectas: [
      "Los valores de tensión y corriente del circuito",
      "La lista completa de materiales"
    ]
  },
  {
    enunciado: "¿Qué es la comprobación de errores (error checking) en CAD eléctrico?",
    correcta: "La detección automática de incoherencias en conexiones o referencias",
    incorrectas: [
      "La corrección automática del montaje físico",
      "La eliminación de símbolos no normalizados"
    ]
  },
  {
    enunciado: "¿Qué facilita la reutilización de bloques o macros gráficas?",
    correcta: "Acelerar el diseño repitiendo conjuntos de elementos habituales",
    incorrectas: [
      "Reducir la tensión nominal del circuito",
      "Sustituir la documentación técnica"
    ]
  },
  {
    enunciado: "¿Qué es un esquema de mando y potencia?",
    correcta: "La representación diferenciada de circuitos de control y circuitos de fuerza",
    incorrectas: [
      "Un esquema exclusivo de electrónica de consumo",
      "Un plano de situación de edificios industriales"
    ]
  },
  {
    enunciado: "¿Por qué es importante la coherencia entre esquema y montaje real?",
    correcta: "Para garantizar seguridad, correcto funcionamiento y facilidad de mantenimiento",
    incorrectas: [
      "Solo por razones estéticas",
      "Únicamente para cumplir requisitos administrativos"
    ]
  },
  {
    enunciado: "¿Qué ventaja ofrece el formato digital para el archivo de esquemas eléctricos?",
    correcta: "Facilita almacenamiento, versiones, copias de seguridad y reutilización",
    incorrectas: [
      "Impide la impresión en papel",
      "Obliga a usar siempre software propietario"
    ]
  },
  {
    enunciado: "¿Qué significa versionado de esquemas?",
    correcta: "Controlar y documentar las modificaciones realizadas a lo largo del tiempo",
    incorrectas: [
      "Convertir el esquema a distintos formatos gráficos",
      "Eliminar versiones antiguas sin registro"
    ]
  },
  {
    enunciado: "¿Qué rol tiene la edición de esquemas eléctricos en la documentación técnica?",
    correcta: "Servir de base para montaje, mantenimiento, diagnóstico y legalización",
    incorrectas: [
      "Sustituir los certificados oficiales",
      "Evitar la necesidad de cálculos eléctricos"
    ]
  },
  {
    enunciado: "¿Qué criterio es clave en la impresión de esquemas eléctricos?",
    correcta: "Legibilidad adecuada de símbolos, textos y conexiones a la escala correcta",
    incorrectas: [
      "Uso obligatorio de color en todos los casos",
      "Impresión exclusiva en tamaño A4"
    ]
  },
  {
    enunciado: "¿Qué aporta el uso de software específico frente a CAD genérico?",
    correcta: "Funciones eléctricas avanzadas como referencias automáticas y listas de materiales",
    incorrectas: [
      "Mayor calidad artística del dibujo",
      "Eliminación total de la normativa técnica"
    ]
  },
  {
    enunciado: "¿Qué es la documentación asociada a un esquema eléctrico?",
    correcta: "Conjunto de planos, esquemas, listas y memorias vinculadas al proyecto",
    incorrectas: [
      "Un resumen económico sin contenido técnico",
      "Un manual de usuario del software"
    ]
  },
  {
    enunciado: "¿Qué importancia tiene la claridad gráfica en esquemas eléctricos?",
    correcta: "Evitar errores de interpretación durante montaje y mantenimiento",
    incorrectas: [
      "Aumentar el tamaño del archivo digital",
      "Cumplir únicamente criterios estéticos"
    ]
  },
  {
    enunciado: "¿Qué debe garantizar un esquema eléctrico bien elaborado?",
    correcta: "Comprensión técnica, seguridad y adecuación a normativa vigente",
    incorrectas: [
      "Originalidad visual del diseñador",
      "Complejidad máxima del circuito"
    ]
  }
];
