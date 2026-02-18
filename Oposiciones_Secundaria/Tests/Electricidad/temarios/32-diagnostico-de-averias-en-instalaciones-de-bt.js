// 32-diagnostico-de-averias-en-instalaciones-de-bt.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué indica el disparo intempestivo de un interruptor diferencial?",
    correcta: "Una fuga de corriente a tierra (defecto de aislamiento) o la suma de pequeñas fugas naturales de equipos electrónicos (armónicos)",
    incorrectas: [
      "Una sobrecarga en la línea",
      "Un cortocircuito franco fase-neutro"
    ]
  },
  {
    enunciado: "¿Cómo se localiza una avería de fuga a tierra en una instalación doméstica?",
    correcta: "Bajando todos los PIAs, rearmando el Diferencial, e ir subiendo los PIAs uno a uno hasta que el Diferencial dispare, identificando el circuito afectado",
    incorrectas: [
      "Cambiando el diferencial por uno más grande",
      "Puenteando la tierra"
    ]
  },
  {
    enunciado: "¿Qué herramienta mide la resistencia de aislamiento de una instalación?",
    correcta: "El megaóhmetro (o medidor de aislamiento), aplicando una tensión continua (ej. 500V) superior a la de red",
    incorrectas: [
      "El voltímetro normal",
      "El amperímetro de pinza"
    ]
  },
  {
    enunciado: "¿Qué indica una lectura de 0 Ohmios entre Fase y Neutro en una toma de corriente (sin tensión)?",
    correcta: "Un cortocircuito franco entre ambos conductores (o una carga de muy baja resistencia conectada)",
    incorrectas: [
      "Que la instalación está perfecta",
      "Que no hay continuidad"
    ]
  },
  {
    enunciado: "¿Qué síntoma produce una conexión de Neutro floja o cortada en una instalación trifásica con cargas desequilibradas?",
    correcta: "Desplazamiento del neutro (flotante), provocando subidas de tensión peligrosas (>230V) en unas fases y bajadas en otras, quemando equipos",
    incorrectas: [
      "Salto inmediato del diferencial",
      "Nada, funciona igual"
    ]
  },
  {
    enunciado: "¿Qué ocurre si se mide resistencia (ohmios) en un circuito bajo tensión?",
    correcta: "Se dañará el multímetro (y peligro para el usuario), la medida no será válida. Hay que medir siempre sin tensión",
    incorrectas: [
      "La medida será más precisa",
      "No pasa nada, el multímetro lo soporta todo"
    ]
  },
  {
    enunciado: "¿Qué es la impedancia de bucle de defecto?",
    correcta: "La impedancia total del circuito que recorre la corriente de defecto fase-tierra. Su valor determina si la protección (automático) disparará a tiempo",
    incorrectas: [
      "La resistencia de un bucle de cable olvidado",
      "La impedancia de los altavoces"
    ]
  },
  {
    enunciado: "¿Qué indica si un magnetotérmico dispara instantáneamente al subirlo (con todo desconectado)?",
    correcta: "Un cortocircuito franco en la línea (cable pelado, clavado, quemado) o defecto interno del propio magnetotérmico",
    incorrectas: [
      "Una sobrecarga ligera",
      "Falta de potencia contratada"
    ]
  },
  {
    enunciado: "¿Y si dispara al cabo de un tiempo (minutos/horas)?",
    correcta: "Probable sobrecarga térmica (demasiados aparatos conectados) o conexión floja que calienta el bimetal del PIA",
    incorrectas: [
      "Un cortocircuito",
      "Una fuga a tierra"
    ]
  },
  {
    enunciado: "¿Cómo se verifica la continuidad del conductor de protección (tierra) en un enchufe?",
    correcta: "Midiendo continuidad (baja resistencia) entre la borna de tierra del enchufe y el embarrado de tierra del cuadro principal",
    incorrectas: [
      "Midiendo voltaje entre fase y neutro",
      "Mirando si el cable es verde-amarillo"
    ]
  },
  {
    enunciado: "¿Qué es un rastreador de cables (generador de tonos)?",
    correcta: "Un instrumento que inyecta una señal en un cable y permite seguir su trazado por la pared o identificarlo en un mazo con una sonda receptora",
    incorrectas: [
      "Un perro adiestrado",
      "Un detector de metales"
    ]
  },
  {
    enunciado: "¿Qué causa el parpadeo (flicker) en la iluminación LED?",
    correcta: "Variaciones de tensión, drivers de mala calidad, o interruptores con piloto de neón en serie que dejan pasar pequeña corriente residual",
    incorrectas: [
      "Que el LED está frío",
      "Que entra aire en la bombilla"
    ]
  },
  {
    enunciado: "¿Qué indica la medición de tensión Fase-Tierra = 230V y Neutro-Tierra = 0V (aprox)?",
    correcta: "Situación correcta en esquema TT o TN (neutro referenciado a tierra)",
    incorrectas: [
      "Que la tierra está desconectada",
      "Que fase y neutro están invertidos"
    ]
  },
  {
    enunciado: "¿Qué indica Fase-Tierra = 125V y Neutro-Tierra = 125V?",
    correcta: "Red bifásica 127/230V (antigua) o sistema IT aislado flotante (o fallo de tierra grave)",
    incorrectas: [
      "Red trifásica de 400V pura",
      "Situación normal en vivienda moderna"
    ]
  },
  {
    enunciado: "¿Qué es la termografía infrarroja en diagnóstico?",
    correcta: "Técnica visual para detectar puntos calientes (hotspots) en conexiones, fusibles o cables sobrecargados sin contacto",
    incorrectas: [
      "Ver si hay fiebre",
      "Ver en la oscuridad total"
    ]
  },
  {
    enunciado: "¿Qué puede causar que un diferencial no dispare al pulsar el botón de Test?",
    correcta: "Diferencial averiado mecánicamente, o falta de tensión en la entrada (si no hay tensión no funciona el test interno)",
    incorrectas: [
      "Que la tierra es muy buena",
      "Que no hay fugas"
    ]
  },
  {
    enunciado: "¿Qué es un analizador de redes portátil?",
    correcta: "Equipo que registra parámetros eléctricos (V, I, P, armónicos, transitorios) durante un tiempo para diagnosticar problemas intermitentes o de calidad",
    incorrectas: [
      "Un polímetro sencillo",
      "Un osciloscopio de laboratorio"
    ]
  },
  {
    enunciado: "¿Qué significa 'selectividad diferencial'?",
    correcta: "Que ante un defecto a tierra, dispare el diferencial aguas abajo (instantáneo) y no el de cabecera (selectivo/retardado), para no cortar toda la instalación",
    incorrectas: [
      "Que el diferencial elige a quién cortar",
      "Que dispara aleatoriamente"
    ]
  },
  {
    enunciado: "¿Qué hacer si una lámpara LED se queda medio encendida (luz residual) al apagar el interruptor?",
    correcta: "Instalar un condensador/resistencia de carga en paralelo a la lámpara para derivar la corriente capacitiva inducida en el cableado",
    incorrectas: [
      "Cambiar el interruptor por uno más grande",
      "Poner cinta aislante en la bombilla"
    ]
  },
  {
    enunciado: "¿Qué indica un olor a pescado podrido o plástico quemado en un cuadro?",
    correcta: "Aislamiento de cables o baquelita de protecciones quemándose por sobrecalentamiento en una conexión floja (arco serie)",
    incorrectas: [
      "Que ha entrado comida",
      "Es el olor normal de la electricidad"
    ]
  },
  {
    enunciado: "¿Cómo se comprueba si un fusible está fundido sin sacarlo (si tiene ventana)?",
    correcta: "Midiendo tensión entre extremos (si hay tensión = fundido, si es 0V = bueno cerrado) o continuidad sacándolo",
    incorrectas: [
      "Tocándolo con el dedo",
      "Si está frío está fundido"
    ]
  },
  {
    enunciado: "¿Qué es un medidor de resistencia de tierra (Telurometro)?",
    correcta: "Instrumento para medir la resistencia óhmica del electrodo de tierra respecto al terreno remoto (usando picas auxiliares)",
    incorrectas: [
      "Un metro para medir la tierra de macetas",
      "Un voltímetro de tierra"
    ]
  },
  {
    enunciado: "¿Qué valor máximo de resistencia de tierra se considera aceptable en vivienda (para ID 30mA)?",
    correcta: "Aunque teóricamente R < 50V/0.03A = 1666 Ohm, el REBT recomienda valores mucho más bajos (ej. < 15-37 Ohm en pararrayos, o < 100 Ohm en general) para asegurar estabilidad",
    incorrectas: [
      "0 Ohmios exactos",
      "10.000 Ohmios"
    ]
  },
  {
    enunciado: "¿Qué provoca el 'disparo simpático' de diferenciales?",
    correcta: "Cuando un diferencial dispara al producirse un defecto en OTRO circuito vecino, debido a transitorios o tierras compartidas incorrectamente",
    incorrectas: [
      "Cuando el diferencial es muy amable",
      "Cuando dispara por saludar"
    ]
  },
  {
    enunciado: "¿Qué es la pinza amperimétrica de fugas?",
    correcta: "Una pinza de alta sensibilidad (mA) capaz de medir la corriente diferencial que baja por el cable de tierra o la suma vectorial de fases+neutro",
    incorrectas: [
      "Una pinza para fugas de agua",
      "Una pinza de la ropa"
    ]
  },
  {
    enunciado: "¿Qué efecto tienen los armónicos en el conductor neutro?",
    correcta: "Se suman (los de orden 3 y múltiplos), pudiendo hacer que circule más corriente por el neutro que por las fases y sobrecalentarlo",
    incorrectas: [
      "Se anulan siempre",
      "Enfrían el conductor"
    ]
  },
  {
    enunciado: "¿Qué es una sobretensión transitoria?",
    correcta: "Un pico de tensión de muy corta duración (microsegundos) y alto valor (kV) causado por rayos o conmutaciones de red",
    incorrectas: [
      "Una subida de tensión permanente",
      "Tener 240V en vez de 230V"
    ]
  },
  {
    enunciado: "¿Cómo se diagnostica una sobretensión permanente (POP)?",
    correcta: "Midiendo la tensión de red sostenida > 255V o 265V; suele disparar la bobina de emisión del protector POP",
    incorrectas: [
      "Con un osciloscopio rápido",
      "Mirando si parpadean las luces"
    ]
  },
  {
    enunciado: "¿Qué es un falso contacto (chisporroteo)?",
    correcta: "Una conexión intermitente que produce arcos, ruido y calor; muy peligroso por riesgo de incendio y difícil de ver si no es bajo carga",
    incorrectas: [
      "Un contacto diplomático falso",
      "Tocar falso techo"
    ]
  },
  {
    enunciado: "¿Qué indica si al tocar un electrodoméstico da 'calambre'?",
    correcta: "Fallo de aislamiento interno y falta de puesta a tierra (o tierra desconectada) en ese enchufe; la corriente deriva por la persona",
    incorrectas: [
      "Que tiene mucha potencia",
      "Que es de buena calidad"
    ]
  },
  {
    enunciado: "¿Qué pasa si se invierte fase y neutro en la entrada del cuadro?",
    correcta: "En monofásica funciona casi todo, pero los interruptores unipolares cortarán neutro (peligroso), y los diferenciales pueden no testear bien (depende modelo)",
    incorrectas: [
      "Explota todo al instante",
      "Los relojes van al revés"
    ]
  },
  {
    enunciado: "¿Qué es la saturación de un transformador de intensidad de medida?",
    correcta: "Cuando la corriente primaria es muy alta, el núcleo se satura y la secundaria no es proporcional, dando errores de medida a la baja",
    incorrectas: [
      "Que está lleno de aceite",
      "Que mide de más"
    ]
  },
  {
    enunciado: "¿Qué prueba verifica la secuencia de fases?",
    correcta: "El fasímetro (o medidor de rotación); imprescindible al conectar motores trifásicos para que giren en el sentido correcto",
    incorrectas: [
      "Mirar los colores de los cables",
      "Probar y ver si el motor echa humo"
    ]
  },
  {
    enunciado: "¿Qué resistencia debe dar un interruptor cerrado?",
    correcta: "Prácticamente cero ohmios (continuidad)",
    incorrectas: [
      "Infinito",
      "100 Ohmios"
    ]
  },
  {
    enunciado: "¿Y un interruptor abierto?",
    correcta: "Infinito (circuito abierto)",
    incorrectas: [
      "Cero ohmios",
      "Depende del voltaje"
    ]
  },
  {
    enunciado: "¿Qué es el 'efecto piel' o pelicular en averías de alta frecuencia?",
    correcta: "La tendencia de la corriente a circular por la superficie del conductor; relevante en pararrayos y armónicos, aumentando la resistencia efectiva",
    incorrectas: [
      "Que se te pone la piel de gallina",
      "Que el cable se pela solo"
    ]
  },
  {
    enunciado: "¿Qué hacer si un magnetotérmico está muy caliente al tacto pero no dispara?",
    correcta: "Medir la corriente real con pinza (puede estar al límite de su In) y revisar el apriete de sus bornas (puede ser calor por mal contacto)",
    incorrectas: [
      "Echarle agua para enfriar",
      "Es normal, trabajan a 80ºC"
    ]
  },
  {
    enunciado: "¿Qué es la categoría de sobretensión (CAT III, IV) del multímetro?",
    correcta: "El nivel de seguridad del instrumento para soportar transitorios en distintas zonas de la red (CAT IV para acometida, CAT III distribución)",
    incorrectas: [
      "La calidad de la pantalla",
      "El número de funciones que tiene"
    ]
  },
  {
    enunciado: "¿Qué causa la corrosión galvánica en empalmes?",
    correcta: "Unir cobre y aluminio directamente con humedad sin usar elementos bimetálicos/neutros; aumenta la resistencia y acaba fallando",
    incorrectas: [
      "Usar cinta aislante barata",
      "El paso de corriente continua"
    ]
  },
  {
    enunciado: "¿Para qué sirve el botón de Test de la lámpara de emergencia?",
    correcta: "Para simular un corte de red y verificar que la lámpara enciende con su batería",
    incorrectas: [
      "Para encenderla como linterna",
      "Para apagarla definitivamente"
    ]
  }
];
