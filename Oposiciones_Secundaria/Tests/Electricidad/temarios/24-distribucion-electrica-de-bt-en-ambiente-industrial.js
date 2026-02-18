// 24-distribucion-electrica-de-bt-en-ambiente-industrial.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué caracteriza a una instalación eléctrica en ambiente industrial frente a una doméstica?",
    correcta: "Mayores potencias, uso intensivo de trifásica, entornos ambientales más agresivos (polvo, humedad) y necesidad de continuidad de servicio crítica",
    incorrectas: [
      "Uso exclusivo de corriente continua a 12V",
      "Instalaciones siempre empotradas en pared de ladrillo"
    ]
  },
  {
    enunciado: "¿Qué sistema de conducción de cables es el más habitual en naves industriales diáfanas?",
    correcta: "Bandejas metálicas (de rejilla o chapa perforada) fijadas a estructura o techo, permitiendo flexibilidad y fácil mantenimiento",
    incorrectas: [
      "Tubos corrugados empotrados bajo yeso",
      "Cables pegados con cinta adhesiva al suelo"
    ]
  },
  {
    enunciado: "¿Qué es un embarrado de potencia o Canalización Eléctrica Prefabricada (Busbar Trunking System)?",
    correcta: "Un sistema modular de barras conductoras en una envolvente blindada que permite derivar potencia en cualquier punto mediante cajas de toma (plug-in)",
    incorrectas: [
      "Una tubería de agua que lleva cables dentro",
      "Un sistema de barras de bar electrificadas"
    ]
  },
  {
    enunciado: "¿Qué ventaja tiene el uso de canalis (ducto-barras) en industria?",
    correcta: "Gran flexibilidad para mover maquinaria o añadir cargas sin recablear desde el cuadro principal, y menor riesgo de incendio que múltiples cables",
    incorrectas: [
      "Es mucho más barato que el cable para cargas muy pequeñas",
      "Permite conducir agua y luz a la vez"
    ]
  },
  {
    enunciado: "¿Qué grado de protección IK (impacto) mínimo se suele exigir en zonas de paso industrial?",
    correcta: "IK07 o superior (típicamente IK08 o IK10 en zonas de tráfico de carretillas), para resistir golpes mecánicos",
    incorrectas: [
      "IK00 (sin protección)",
      "IK50 (a prueba de bombas)"
    ]
  },
  {
    enunciado: "¿Qué tipo de cable es el RZ1-K (AS)?",
    correcta: "Cable de potencia flexible con aislamiento de polietileno reticulado y cubierta libre de halógenos, de alta seguridad frente al fuego (No propagador incendio, baja emisión humos)",
    incorrectas: [
      "Cable rígido para exteriores exclusivamente",
      "Cable telefónico armado"
    ]
  },
  {
    enunciado: "¿Por qué se usa el esquema de conexión a tierra TN-S en muchas industrias?",
    correcta: "Porque al tener transformador propio, permite separar Neutro y Protección (PE) desde el origen, ofreciendo baja impedancia de bucle y disparo seguro de magnéticos ante defectos, reduciendo ruidos",
    incorrectas: [
      "Porque es el más barato y no requiere piquetas",
      "Porque permite tocar los cables sin calambre"
    ]
  },
  {
    enunciado: "¿Qué es la compensación de energía reactiva en una fábrica?",
    correcta: "La instalación de baterías de condensadores para reducir la demanda de corriente reactiva (Q) y evitar penalizaciones en la factura eléctrica",
    incorrectas: [
      "Compensar al operario con energía extra",
      "Poner resistencias para gastar más"
    ]
  },
  {
    enunciado: "¿Dónde es más eficiente compensar la reactiva de un motor grande constante?",
    correcta: "Compensación individual en bornes del propio motor, para descargar también la línea interna que lo alimenta",
    incorrectas: [
      "En el transformador de la compañía siempre",
      "En el enchufe de la oficina"
    ]
  },
  {
    enunciado: "¿Qué es un Cuadro General de Baja Tensión (CGBT) industrial?",
    correcta: "El cuadro principal situado justo aguas abajo del transformador, que distribuye a los cuadros secundarios de zona o máquinas",
    incorrectas: [
      "Un cuadro pequeño para encender las luces",
      "El cuadro de herramientas del electricista"
    ]
  },
  {
    enunciado: "¿Qué es la selectividad o coordinación de protecciones?",
    correcta: "El diseño escalonado de protecciones (por tiempo o corriente) para que, ante un fallo, dispare solo la protección más cercana al defecto, afectando al mínimo de la instalación",
    incorrectas: [
      "Que salte todo a la vez por seguridad",
      "Elegir la protección más barata siempre"
    ]
  },
  {
    enunciado: "¿Qué normativa ATEX aplica en industrias con riesgo de explosión (polvo/gas)?",
    correcta: "El REBT (ITC-BT-29) y las Directivas ATEX (99/92/CE para usuarios y 2014/34/UE para equipos)",
    incorrectas: [
      "Solo el Código Técnico de la Edificación",
      "El reglamento de explosivos militares"
    ]
  },
  {
    enunciado: "¿Qué es una toma de corriente industrial tipo IEC 60309 (CETAC)?",
    correcta: "Tomas de corriente robustas, codificadas por colores (ej. Rojo 400V, Azul 230V) y formas para impedir errores de conexión en entornos duros",
    incorrectas: [
      "El enchufe fino 'Schuko' de casa",
      "Un conector USB grande"
    ]
  },
  {
    enunciado: "¿Qué color tiene una toma CETAC trifásica + N + T de 400 V?",
    correcta: "Rojo",
    incorrectas: [
      "Azul",
      "Amarillo"
    ]
  },
  {
    enunciado: "¿Qué factor de simultaneidad se aplica a un grupo de motores industriales?",
    correcta: "Un valor estimado según proceso (ej. 0.7-0.8), ya que raramente arrancan o cargan todos al 100% a la vez",
    incorrectas: [
      "Factor 1 siempre (caso peor)",
      "Factor 0.1"
    ]
  },
  {
    enunciado: "¿Qué es un SAI (UPS) industrial?",
    correcta: "Sistema de Alimentación Ininterrumpida que mantiene el suministro a cargas críticas (PLCs, control, servidores) ante cortes de red",
    incorrectas: [
      "Sistema de Aire Industrial",
      "Un generador diesel manual"
    ]
  },
  {
    enunciado: "¿Qué es la corriente de cortocircuito (Icc) en el CGBT?",
    correcta: "Suele ser muy alta (ej. 20-50 kA) debido a la cercanía del transformador y baja impedancia, obligando a usar aparamenta con alto poder de corte",
    incorrectas: [
      "Muy baja, casi cero",
      "Igual que en una vivienda (6 kA)"
    ]
  },
  {
    enunciado: "¿Qué requisito tienen los cables de alimentación a bombas contra incendios?",
    correcta: "Deben ser resistentes al fuego (AS+ / RF) para mantener el servicio durante el incendio (ej. 90 minutos) o ir por trazados protegidos",
    incorrectas: [
      "Deben ser de color verde",
      "Deben desconectarse automáticamente si hay fuego"
    ]
  },
  {
    enunciado: "¿Qué es el mando de parada de emergencia tipo seta?",
    correcta: "Un pulsador rojo sobre fondo amarillo, de enclavamiento mecánico, accesible y visible, que corta la energía peligrosamente inmediatamente",
    incorrectas: [
      "Un pulsador para llamar al jefe",
      "Un botón para arrancar rápido"
    ]
  },
  {
    enunciado: "¿Qué son los armónicos en una red industrial?",
    correcta: "Deformaciones de la onda senoidal causadas por cargas no lineales (variadores, rectificadores, LEDs) que calientan cables/trafos y disparan protecciones",
    incorrectas: [
      "Sonidos agradables de las máquinas",
      "Vibraciones mecánicas del suelo"
    ]
  },
  {
    enunciado: "¿Cómo se combaten los armónicos?",
    correcta: "Instalando filtros de armónicos (activos o pasivos) y sobredimensionando el neutro si hay muchos armónicos de tercer orden",
    incorrectas: [
      "Poniendo tapones en los oídos",
      "Bajando la tensión de red"
    ]
  },
  {
    enunciado: "¿Qué es la iluminación de emergencia y señalización?",
    correcta: "Alumbrado con batería propia que garantiza la evacuación y visión mínima si falla el suministro general",
    incorrectas: [
      "Luces de discoteca para fiestas",
      "Linternas de mano para cada operario"
    ]
  },
  {
    enunciado: "¿Qué es un interruptor diferencial superinmunizado o clase A/F?",
    correcta: "Un diferencial diseñado para no disparar intempestivamente por ruidos/armónicos y detectar defectos con componentes de continua pulsante (típico de variadores)",
    incorrectas: [
      "Un diferencial que nunca dispara aunque te electrocutes",
      "Un diferencial vacunado contra virus"
    ]
  },
  {
    enunciado: "¿Qué es la bandeja tipo escalera?",
    correcta: "Una estructura de dos largueros unidos por travesaños, usada para cables de gran sección y peso, permitiendo gran ventilación y capacidad de carga",
    incorrectas: [
      "Una escalera para subir al techo",
      "Una bandeja de comida"
    ]
  },
  {
    enunciado: "¿Qué distancia debe guardarse entre cables de datos y de potencia en bandejas?",
    correcta: "Una separación física mínima (ej. 20-30 cm o tabique separador metálico) para evitar interferencias electromagnéticas (EMI) en los datos",
    incorrectas: [
      "Ninguna, pueden ir trenzados juntos",
      "2 kilómetros"
    ]
  },
  {
    enunciado: "¿Qué es el bloqueo y etiquetado (LOTO - Lockout/Tagout)?",
    correcta: "Un procedimiento de seguridad crítico que consiste en bloquear físicamente (candado) las fuentes de energía y señalizarlas antes de mantener una máquina",
    incorrectas: [
      "Jugar a la lotería en el trabajo",
      "Etiquetar los precios de los productos"
    ]
  },
  {
    enunciado: "¿Qué caída de tensión máxima admite el REBT para fuerza en industria (desde origen a consumo)?",
    correcta: "5% (si hay transformador propio, varía según esquema, pero 5% en fuerza total es referencia común en interior)",
    incorrectas: [
      "50%",
      "0% (imposible físico)"
    ]
  },
  {
    enunciado: "¿Qué es una resistencia de frenado en un variador?",
    correcta: "Una resistencia externa que disipa la energía regenerada por el motor al frenar cargas de alta inercia, evitando sobretensión en el bus DC",
    incorrectas: [
      "Una zapata de freno de coche",
      "Una resistencia para calentar el cuadro"
    ]
  },
  {
    enunciado: "¿Qué es el embarrado de tierra principal de la nave?",
    correcta: "Un anillo o barra conductora que recorre la planta conectando todas las masas metálicas, estructuras y cuadros a la red de tierra",
    incorrectas: [
      "Una barra sucia de tierra",
      "El pararrayos del tejado"
    ]
  },
  {
    enunciado: "¿Qué es el 'coseno de fi' objetivo en facturación?",
    correcta: "Idealmente 1.0 (o cercano, >0.95) para no pagar recargos por reactiva",
    incorrectas: [
      "0.5 para ahorrar",
      "Infinito"
    ]
  },
  {
    enunciado: "¿Qué es la protección IP65?",
    correcta: "Totalmente estanco al polvo y protegido contra chorros de agua a baja presión (manguera) desde cualquier dirección",
    incorrectas: [
      "Sumergible permanentemente",
      "Solo protege contra dedos"
    ]
  },
  {
    enunciado: "¿Qué se usa para unir bandejas metálicas equipotencialmente?",
    correcta: "Uniones atornilladas con arandelas dentadas o puentes de cable de tierra en cada junta para asegurar continuidad eléctrica a tierra",
    incorrectas: [
      "Cinta aislante",
      "Nada, el contacto por peso vale"
    ]
  },
  {
    enunciado: "¿Qué es un contactor de 'estado sólido' (SSR)?",
    correcta: "Un dispositivo de conmutación sin partes móviles (usando tiristores/triacs) ideal para ciclos de maniobra muy rápidos y frecuentes (ej. resistencias horno)",
    incorrectas: [
      "Un contactor hecho de un bloque de cemento",
      "Un contactor congelado"
    ]
  },
  {
    enunciado: "¿Qué es la corriente de pico de arranque de un motor?",
    correcta: "La máxima corriente transitoria en el instante de conexión, que puede disparar los magnetotérmicos si no tienen curva adecuada (curva D o motor)",
    incorrectas: [
      "La corriente nominal",
      "La corriente de fuga"
    ]
  },
  {
    enunciado: "¿Qué es un analizador de redes fijo?",
    correcta: "Un instrumento en panel que mide V, I, P, Q, S, cos fi, armónicos y energías, permitiendo gestión energética en tiempo real",
    incorrectas: [
      "Un aparato para analizar la red de pesca",
      "Un router Wi-Fi"
    ]
  },
  {
    enunciado: "¿Qué son las 'tomas de fuerza'?",
    correcta: "Puntos de conexión eléctrica destinados a alimentar maquinaria o equipos de potencia, distintos del alumbrado",
    incorrectas: [
      "Gimnasios para hacer fuerza",
      "Tomas de tierra exclusivamente"
    ]
  },
  {
    enunciado: "¿Qué aislamiento requieren los cables 0.6/1 kV?",
    correcta: "Aislamiento dimensionado para soportar 1000V entre fases en servicio permanente (ej. RV-K, RZ1-K)",
    incorrectas: [
      "Aislamiento de 230V doméstico H07V-K",
      "Sin aislamiento"
    ]
  },
  {
    enunciado: "¿Qué es el control PID en procesos industriales?",
    correcta: "Un algoritmo de control (Proporcional-Integral-Derivativo) usado en autómatas/variadores para regular variables (temp, presión) con precisión",
    incorrectas: [
      "Un control policial",
      "Un tipo de interruptor"
    ]
  },
  {
    enunciado: "¿Qué es la protección del motor por sonda PTC?",
    correcta: "Protección térmica directa midiendo la temperatura real del bobinado, más efectiva que el relé térmico bimetálico ante ventilación obstruida",
    incorrectas: [
      "Protección por fusible",
      "Protección contra rayos"
    ]
  }
];
