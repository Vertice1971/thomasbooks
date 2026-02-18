// 20-mantenimiento-de-maquinas-de-corriente-continua.js
var PREGUNTAS = [
  {
    enunciado: "¿Cuál es el elemento de desgaste más crítico y frecuente en una máquina de corriente continua?",
    correcta: "El conjunto escobillas-colector",
    incorrectas: [
      "El eje de acero",
      "La carcasa exterior"
    ]
  },
  {
    enunciado: "¿Qué se debe verificar al inspeccionar las escobillas?",
    correcta: "Su longitud (desgaste), libertad de movimiento en el portaescobillas, presión del muelle y estado de la superficie de contacto (brillante/mate)",
    incorrectas: [
      "Su sabor y olor",
      "Si flotan en agua"
    ]
  },
  {
    enunciado: "¿Qué presión aproximada deben ejercer los muelles sobre las escobillas?",
    correcta: "Típicamente entre 150 y 250 g/cm² (según fabricante), crucial para asegurar contacto sin desgaste excesivo",
    incorrectas: [
      "La máxima posible para asegurar contacto total (10 kg)",
      "Ninguna, deben tocar suavemente"
    ]
  },
  {
    enunciado: "¿Qué indica un desgaste desigual entre escobillas de diferente polaridad?",
    correcta: "Puede indicar una corriente circulante, problemas de material de escobilla o un efecto electrolítico normal en DC que requiere rotar la polaridad o cambiar escobillas",
    incorrectas: [
      "Que el motor está inclinado",
      "Que unas escobillas son macho y otras hembra"
    ]
  },
  {
    enunciado: "¿Cómo se limpia polvo de carbón acumulado en el interior de la máquina?",
    correcta: "Mediante aspirado (preferible) o aire seco a baja presión, evitando introducir el polvo en los bobinados o rodamientos",
    incorrectas: [
      "Lavando con manguera de agua a presión",
      "Usando disolvente universal abundantemente"
    ]
  },
  {
    enunciado: "¿Qué mantenimiento requiere el colector si presenta surcos profundos?",
    correcta: "Debe ser rectificado (torneado) en torno para recuperar la cilindricidad, y luego rebajar micas",
    incorrectas: [
      "Rellenar los surcos con estaño",
      "Lijar a mano hasta que desaparezcan (impreciso)"
    ]
  },
  {
    enunciado: "¿Qué es el 'salto' o excentricidad del colector?",
    correcta: "La desviación de la superficie del colector respecto a un círculo perfecto al girar; si es excesivo (>0.03-0.05 mm) rebota la escobilla y produce chispas",
    incorrectas: [
      "Que el colector salta chispas",
      "Que el colector se sale del eje"
    ]
  },
  {
    enunciado: "¿Qué causa el 'chisporroteo' o conmutación deficiente?",
    correcta: "Malandos ajustes de zona neutra, sobrecarga, escobillas inadecuadas, colector sucio/excéntrico o fallo en interpolos",
    incorrectas: [
      "Es normal, indica que el motor tiene mucha potencia",
      "Falta de aceite en las escobillas"
    ]
  },
  {
    enunciado: "¿Qué se debe hacer si una máquina DC ha estado parada mucho tiempo con humedad?",
    correcta: "Medir aislamiento y secar los bobinados (horno o inyección de corriente baja) antes de aplicar tensión nominal",
    incorrectas: [
      "Arrancarla rápido para que se seque con el calor de las chispas",
      "Echarle arroz por encima"
    ]
  },
  {
    enunciado: "¿Qué indica una resistencia de aislamiento muy baja (cercana a cero) entre inducido y masa?",
    correcta: "Un fallo franco de aislamiento (derivación a tierra), el bobinado está comunicado con el eje/chapas",
    incorrectas: [
      "Que el aislamiento es perfecto (resistencia cero es ideal)",
      "Que el motor tiene mucha potencia"
    ]
  },
  {
    enunciado: "¿Cómo se ajusta la 'zona neutra' tras una reparación?",
    correcta: "Moviendo el yugo de escobillas hasta encontrar la posición de mínima chispa bajo carga o mínima tensión inducida en reposo (método kick)",
    incorrectas: [
      "Poniendo las escobillas donde queden más bonitas simétricamente",
      "Apretando los tornillos al azar"
    ]
  },
  {
    enunciado: "¿Qué riesgo tiene mezclar grados de escobillas diferentes en el mismo motor?",
    correcta: "Que la corriente se reparta desigualmente (unas conducen más que otras), provocando sobrecalentamiento y daños selectivos",
    incorrectas: [
      "Mejora el rendimiento al combinar propiedades",
      "Ninguno, todas son de carbón"
    ]
  },
  {
    enunciado: "¿Qué es la piedra de rectificado o asentamiento (Commutator stone)?",
    correcta: "Una piedra abrasiva manual usada para limpiar, pulir o asentar escobillas sobre el colector en marcha (con precaución)",
    incorrectas: [
      "Una piedra que se pone dentro para equilibrar",
      "Un mineral decorativo"
    ]
  },
  {
    enunciado: "¿Por qué no se debe usar lija de esmeril (metálica) en el colector?",
    correcta: "Porque desprende partículas conductoras que pueden cortocircuitar delgas; se debe usar lija de papel de vidrio o granate",
    incorrectas: [
      "Porque raya demasiado el cobre",
      "Porque es muy cara"
    ]
  },
  {
    enunciado: "¿Qué mantenimiento requieren los filtros de ventilación de un motor DC?",
    correcta: "Limpieza o sustitución frecuente, ya que la obstrucción causa sobrecalentamiento rápido al reducir el caudal de aire",
    incorrectas: [
      "Ninguno, son autolimpiables siempre",
      "Quitarlos para siempre para que entre más aire"
    ]
  },
  {
    enunciado: "¿Qué hacer si las delgas presentan bordes afilados o rebabas de cobre?",
    correcta: "Biselar (chaflanar) los bordes de las delgas (aprox 45º) para evitar que corten o dañen las escobillas",
    incorrectas: [
      "Dejarlos así para que limpien la escobilla",
      "Poner cinta aislante encima"
    ]
  },
  {
    enunciado: "¿Qué indica una marca de quemadura en el colector separada regularmente (pattern)?",
    correcta: "Fallo en una bobina específica del inducido (abierta o en corto) o delga levantada, que quema siempre en el mismo punto cíclico",
    incorrectas: [
      "Un diseño decorativo del fabricante",
      "Que esa delga es de otro material"
    ]
  },
  {
    enunciado: "¿Qué lubricación requieren los rodamientos de un motor eléctrico?",
    correcta: "Grasa específica para rodamientos (cantidad controlada), evitando mezclar grasas incompatibles y el exceso que cause sobrecalentamiento",
    incorrectas: [
      "Aceite de oliva virgen extra",
      "Llenar la caja de bornas de grasa"
    ]
  },
  {
    enunciado: "¿Qué es el 'threading' o rayado en el colector?",
    correcta: "La formación de finas líneas o surcos en la pátina y cobre, a menudo por baja carga prolongada o contaminantes",
    incorrectas: [
      "Coser el colector con hilo",
      "El paso de rosca del eje"
    ]
  },
  {
    enunciado: "¿Qué puede ocurrir si un motor serie pierde su carga mecánica (rotura de correa)?",
    correcta: "Se embala (acelera indefinidamente) hasta destruirse por fuerza centrífuga, debe tener protección de sobrevelocidad",
    incorrectas: [
      "Se para suavemente",
      "Sigue girando a la misma velocidad nominal"
    ]
  },
  {
    enunciado: "¿Qué comprobación se hace en los portaescobillas?",
    correcta: "Que estén firmes, a la distancia correcta del colector (2-3 mm) y alineados correctamente con las delgas",
    incorrectas: [
      "Que giren libremente alrededor del eje",
      "Que estén pintados de rojo"
    ]
  },
  {
    enunciado: "¿Qué es el 'Grooving' o ranurado helicoidal del colector?",
    correcta: "Un mecanizado especial (surco en espiral) a veces usado para mejorar la refrigeración y limpieza, aunque raro; lo habitual es rebajar micas longitudinalmente",
    incorrectas: [
      "Música disco en el taller",
      "Hacer agujeros pasantes"
    ]
  },
  {
    enunciado: "¿Qué mantenimiento requiere el tacodinamo acoplado (si lo lleva)?",
    correcta: "Revisar sus propias escobillas (que son minúsculas) y la limpieza de su colector, pues falla la regulación de velocidad si da señal sucia",
    incorrectas: [
      "Ninguno, es eterno",
      "Cambiarle la pila interna"
    ]
  },
  {
    enunciado: "¿Qué indica humo blanco o gris saliendo del motor?",
    correcta: "Aislamiento quemándose (barniz, papel), parada inmediata obligatoria",
    incorrectas: [
      "Que ha elegido nuevo Papa",
      "Vapor de agua normal por condensación"
    ]
  },
  {
    enunciado: "¿Cómo se detecta un rodamiento en mal estado antes de que gripe?",
    correcta: "Por análisis de vibraciones (espectro característico), aumento de ruido o temperatura en la tapa del rodamiento",
    incorrectas: [
      "Esperando a que el eje se bloquee",
      "Midiendo el voltaje del motor"
    ]
  },
  {
    enunciado: "¿Qué es 'glaseado' de escobillas?",
    correcta: "Una superficie de contacto brillante como espejo y endurecida, a menudo por baja corriente, que aumenta la resistencia de contacto y puede chillar",
    incorrectas: [
      "Cubrirlas de azúcar",
      "Congelarlas antes de montar"
    ]
  },
  {
    enunciado: "¿Qué efecto tiene el aceite o grasa en el colector?",
    correcta: "Desastroso: forma una pasta conductora con el polvo de carbón que provoca cortocircuitos entre delgas y fuego",
    incorrectas: [
      "Bueno, lubrica y evita el desgaste",
      "Inocuo, se evapora solo"
    ]
  },
  {
    enunciado: "¿Qué se verifica en las conexiones internas de campo (polos)?",
    correcta: "Que no estén flojas por vibración y que no tengan aislamiento quebradizo por calor",
    incorrectas: [
      "Que tengan nudos marineros",
      "Que brillen en la oscuridad"
    ]
  },
  {
    enunciado: "¿Por qué hay que dejar funcionar un motor recién rebobinado en vacío un tiempo?",
    correcta: "Para asentar las escobillas nuevas (rodaje) y verificar ruidos, vibraciones y temperatura sin riesgo de carga",
    incorrectas: [
      "Para cargar la batería interna",
      "Para gastar electricidad extra"
    ]
  },
  {
    enunciado: "¿Qué es la prueba de caída de potencial en delgas?",
    correcta: "Inyectar corriente continua y medir la tensión entre pares de delgas consecutivas para detectar cortes o cortos en el inducido",
    incorrectas: [
      "Dejar caer el inducido al suelo",
      "Medir la gravedad"
    ]
  },
  {
    enunciado: "¿Cuándo es necesario sustituir un muelle de escobilla?",
    correcta: "Cuando ha perdido su tensión elástica (por recalentamiento o fatiga) y no presiona suficiente, o está corroído",
    incorrectas: [
      "Cada vez que se cambia la escobilla obligatoriamente",
      "Nunca"
    ]
  }
];
