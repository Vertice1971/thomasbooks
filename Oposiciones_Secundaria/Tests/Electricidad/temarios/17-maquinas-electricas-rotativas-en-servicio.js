// 17-maquinas-electricas-rotativas-en-servicio.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué tipo de máquina rotativa es la más utilizada en la industria por su robustez y bajo mantenimiento?",
    correcta: "El motor asíncrono (o de inducción) de jaula de ardilla",
    incorrectas: [
      "El motor de corriente continua serie",
      "El motor síncrono de imanes permanentes"
    ]
  },
  {
    enunciado: "¿Qué función cumple el colector de delgas en una máquina de corriente continua?",
    correcta: "Rectificar mecánicamente la corriente alterna inducida en el inducido para obtener corriente continua en bornes (generador) o viceversa (motor)",
    incorrectas: [
      "Ventilar el interior del motor",
      "Soportar los rodamientos del eje"
    ]
  },
  {
    enunciado: "¿Qué es el deslizamiento (s) en un motor asíncrono?",
    correcta: "La diferencia relativa entre la velocidad de sincronismo del campo magnético y la velocidad real del rotor",
    incorrectas: [
      "Lo que patina el motor sobre el suelo si no está anclado",
      "La grasa que se pone en el eje"
    ]
  },
  {
    enunciado: "¿Qué ocurre si el deslizamiento de un motor asíncrono es cero?",
    correcta: "El par motor es nulo, ya que no hay movimiento relativo entre campo y conductores rotóricos y no se induce corriente",
    incorrectas: [
      "El motor da su máxima potencia",
      "El motor gira al doble de velocidad"
    ]
  },
  {
    enunciado: "¿Qué mantenimiento básico requieren las escobillas de un motor DC o universal?",
    correcta: "Inspección periódica de longitud, presión del muelle y estado de la superficie de contacto, y sustitución cuando están gastadas",
    incorrectas: [
      "Limpiarlas con agua y jabón semanalmente",
      "Engrasarlas con aceite para que deslicen mejor"
    ]
  },
  {
    enunciado: "¿Qué indica la placa de características de un motor trifásico 230/400 V?",
    correcta: "Que debe conectarse en Triángulo si la red es de 230 V (entre fases) y en Estrella si la red es de 400 V (entre fases)",
    incorrectas: [
      "Que funciona a 230 V de día y 400 V de noche",
      "Que solo funciona en redes monofásicas"
    ]
  },
  {
    enunciado: "¿Qué es la velocidad de sincronismo de un motor de 4 polos a 50 Hz?",
    correcta: "1500 rpm (n = 60 * f / p, donde p es pares de polos = 2, o 120 * f / Polos = 120 * 50 / 4)",
    incorrectas: [
      "3000 rpm",
      "1000 rpm"
    ]
  },
  {
    enunciado: "¿Para qué sirve el condensador en un motor monofásico de fase partida?",
    correcta: "Para crear un desfase en el devanado auxiliar y generar un campo magnético giratorio que permita el arranque",
    incorrectas: [
      "Para filtrar ruidos de la radio",
      "Para almacenar energía para cuando se va la luz"
    ]
  },
  {
    enunciado: "¿Qué ventaja tiene un motor síncrono frente a uno asíncrono?",
    correcta: "Velocidad constante e independiente de la carga (hasta el par máximo) y posibilidad de mejorar el factor de potencia",
    incorrectas: [
      "Es mucho más barato y sencillo de arrancar",
      "No necesita alimentación eléctrica"
    ]
  },
  {
    enunciado: "¿Qué es la fuerza contraelectromotriz (f.c.e.m.) en un motor DC?",
    correcta: "La tensión inducida en el inducido al girar, que se opone a la tensión de alimentación y limita la corriente de armadura",
    incorrectas: [
      "Una fuerza que empuja el motor hacia atrás",
      "La tensión de la batería"
    ]
  },
  {
    enunciado: "¿Por qué la corriente de arranque directo de un motor asíncrono es alta (5-7 In)?",
    correcta: "Porque al estar parado no hay f.c.e.m. (o deslizamiento máximo), y el motor se comporta casi como un transformador en cortocircuito",
    incorrectas: [
      "Porque el aceite está frío y frena el eje",
      "Porque los cables son demasiado finos"
    ]
  },
  {
    enunciado: "¿Qué es el servicio intermitente S3 en un motor?",
    correcta: "Un régimen de funcionamiento con periodos de marcha y de reposo, sin llegar nunca al equilibrio térmico",
    incorrectas: [
      "Funcionamiento continuo 24 horas al día",
      "Funcionamiento solo los domingos"
    ]
  },
  {
    enunciado: "¿Qué efecto tienen las armónicos en los motores eléctricos?",
    correcta: "Aumentan las pérdidas (calentamiento), pueden producir pares pulsantes y vibraciones, y reducen la vida útil",
    incorrectas: [
      "Hacen que el motor suene como música clásica",
      "Mejoran el rendimiento al aprovechar más frecuencias"
    ]
  },
  {
    enunciado: "¿Qué es una dínamo o dinamo?",
    correcta: "Un generador de corriente continua (hoy en desuso frente al alternador con rectificador)",
    incorrectas: [
      "Un motor de muy alta velocidad",
      "Una batería química"
    ]
  },
  {
    enunciado: "¿Qué es la reacción del inducido en máquinas de CC?",
    correcta: "La distorsión del campo magnético principal provocada por el campo magnético creado por la corriente del rotor, afectando a la conmutación",
    incorrectas: [
      "La vibración del motor cuando arranca",
      "La reacción química en las escobillas"
    ]
  },
  {
    enunciado: "¿Cómo se invierte el sentido de giro de un motor de inducción trifásico?",
    correcta: "Intercambiando dos de las tres fases de alimentación entre sí",
    incorrectas: [
      "Dando la vuelta al motor físicamente",
      "No se puede invertir, giran siempre a derecha"
    ]
  },
  {
    enunciado: "¿Para qué sirve el interruptor centrífugo en motores monofásicos?",
    correcta: "Para desconectar el devanado auxiliar (y condensador de arranque) una vez que el motor ha alcanzado cierta velocidad",
    incorrectas: [
      "Para frenar el motor por fuerza centrífuga si corre mucho",
      "Para ventilar el interior"
    ]
  },
  {
    enunciado: "¿Qué es el grado de protección IP55 en un motor?",
    correcta: "Protegido contra polvo (no estanco total pero sin depósitos perjudiciales) y chorros de agua desde cualquier dirección",
    incorrectas: [
      "Sumergible hasta 55 metros",
      "Sin protección alguna"
    ]
  },
  {
    enunciado: "¿Qué es un motor 'Brushless' (BLDC)?",
    correcta: "Un motor de imanes permanentes con conmutación electrónica (sin escobillas), de alto rendimiento y bajo mantenimiento",
    incorrectas: [
      "Un motor que se limpia solo",
      "Un motor diesel sin bujías"
    ]
  },
  {
    enunciado: "¿Qué causa principal provoca el fallo de rodamientos en motores eléctricos?",
    correcta: "Falta o exceso de lubricación, contaminación, desalineación del eje o corrientes parásitas por el rodamiento",
    incorrectas: [
      "El exceso de voltaje en el estator directamente",
      "El color de la pintura del motor"
    ]
  },
  {
    enunciado: "¿Qué es la eficiencia IE3 en motores trifásicos?",
    correcta: "Una clase de eficiencia 'Premium' según norma IEC, obligatoria para muchas potencias en Europa para ahorrar energía",
    incorrectas: [
      "Un motor con 3 velocidades",
      "Un motor que consume 3 veces más"
    ]
  },
  {
    enunciado: "¿Qué se mide con el ensayo de aislamiento (Megger) en un motor?",
    correcta: "La resistencia óhmica del aislamiento entre bobinados y masa (carcasa), para descartar humedad o deterioro",
    incorrectas: [
      "La velocidad máxima del motor",
      "La potencia en caballos"
    ]
  },
  {
    enunciado: "¿Qué es el par de arranque?",
    correcta: "El par motor desarrollado por la máquina en el instante de conexión (velocidad cero), que debe superar al par resistente para iniciar el movimiento",
    incorrectas: [
      "El precio de comprar dos motores",
      "El par máximo que alcanza a velocidad nominal"
    ]
  },
  {
    enunciado: "¿Cómo afecta el desequilibrio de tensiones a un motor trifásico?",
    correcta: "Provoca un desequilibrio de corrientes mucho mayor, aumentando drásticamente el calentamiento y reduciendo la potencia útil",
    incorrectas: [
      "No afecta, el motor equilibra la red",
      "El motor gira a saltos visibles"
    ]
  },
  {
    enunciado: "¿Qué es la ventilación IC411 (o TEFC)?",
    correcta: "Motor totalmente cerrado enfriado por ventilador exterior montado en el propio eje (refrigeración estándar)",
    incorrectas: [
      "Refrigeración por agua interior",
      "Sin ventilador, refrigeración por convección natural"
    ]
  },
  {
    enunciado: "¿Qué es un motor de rotor bobinado (anillos rozantes)?",
    correcta: "Un motor asíncrono donde el rotor tiene bobinas accesibles mediante anillos y escobillas, permitiendo insertar resistencias para arrancar suavemente",
    incorrectas: [
      "Un motor con el rotor hecho de bobina de hilo de pescar",
      "Un motor de jaula de ardilla normal"
    ]
  },
  {
    enunciado: "¿Qué es el 'cogging' o par de retención en motores de imanes?",
    correcta: "La tendencia del rotor a alinearse con los dientes del estator en posiciones preferentes, causando un giro a pasos o resistencia al arranque suave",
    incorrectas: [
      "El ruido de los rodamientos al girar",
      "El freno de disco incorporado"
    ]
  },
  {
    enunciado: "¿Qué utilidad tiene la termistancia PTC insertada en el bobinado?",
    correcta: "Detectar el sobrecalentamiento interno del bobinado y disparar una protección si se supera la temperatura crítica",
    incorrectas: [
      "Calentar el motor en invierno",
      "Medir la humedad relativa"
    ]
  },
  {
    enunciado: "¿Qué es un motor Universal?",
    correcta: "Un motor serie con colector capaz de funcionar tanto en corriente continua como alterna (taladros, batidoras)",
    incorrectas: [
      "Un motor que sirve para cualquier voltaje del mundo automáticamente",
      "Un motor fabricado por Universal Pictures"
    ]
  },
  {
    enunciado: "¿Qué ocurre si se rompe una barra de la jaula de ardilla del rotor?",
    correcta: "Disminución del par, aumento de vibraciones, ruido pulsante y posible daño al estator y rodamientos",
    incorrectas: [
      "El motor corre más rápido porque pesa menos",
      "El motor se convierte en generador"
    ]
  },
  {
    enunciado: "¿Qué es la 'clase de aislamiento' (ej. Clase F) en un motor?",
    correcta: "Indica la temperatura máxima que el sistema de aislamiento puede soportar (ej. 155ºC para Clase F)",
    incorrectas: [
      "La nota que sacó el motor en el examen",
      "El voltaje máximo de aislamiento en kilovoltios"
    ]
  },
  {
    enunciado: "¿Qué es el autoventilado en un motor?",
    correcta: "Que el ventilador está acoplado al eje principal, por lo que la refrigeración depende de la velocidad de giro (baja a bajas rpm)",
    incorrectas: [
      "Que el motor decide cuándo encender el ventilador",
      "Que no tiene ventilador"
    ]
  },
  {
    enunciado: "¿Para qué se usa un variador de frecuencia con un motor asíncrono?",
    correcta: "Para controlar la velocidad de giro variando la frecuencia de alimentación y mantener el par (control V/f o vectorial)",
    incorrectas: [
      "Para aumentar la potencia del motor por encima de la nominal indefinidamente",
      "Para convertirlo en un motor de gasolina"
    ]
  },
  {
    enunciado: "¿Qué es el alineamiento láser de ejes?",
    correcta: "Un procedimiento preciso para asegurar que el eje del motor y el de la carga están colineales, evitando vibraciones y rotura de acoplamientos",
    incorrectas: [
      "Cortar el eje con un láser",
      "Poner luces láser para decorar"
    ]
  },
  {
    enunciado: "¿Qué indica un factor de servicio (SF) de 1.15?",
    correcta: "Que el motor puede trabajar ocasionalmente con una sobrecarga del 15% sin dañarse inmediatamente (aunque se calienta más)",
    incorrectas: [
      "Que el motor rinde un 15% más de lo que consume",
      "Que es un 15% más barato"
    ]
  }
];
