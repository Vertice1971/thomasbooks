// 48-instalacion-y-configuracion-de-entornos-informaticos.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué es la BIOS (Basic Input/Output System)?",
    correcta: "Un firmware almacenado en la placa base que inicializa el hardware durante el arranque y carga el gestor de arranque del sistema operativo",
    incorrectas: [
      "Un virus informático",
      "El sistema operativo principal"
    ]
  },
  {
    enunciado: "¿Qué es UEFI (Unified Extensible Firmware Interface)?",
    correcta: "El sucesor moderno de la BIOS, con interfaz gráfica, soporte para discos grandes (>2TB), arranque seguro (Secure Boot) y mayor velocidad",
    incorrectas: [
      "Una marca de procesadores",
      "Un tipo de cable USB"
    ]
  },
  {
    enunciado: "¿Qué es el POST (Power-On Self Test)?",
    correcta: "La secuencia de diagnóstico que realiza la BIOS/UEFI al encender el PC para verificar CPU, RAM y gráfica (emitiendo pitidos si hay fallo)",
    incorrectas: [
      "El correo postal",
      "Un mensaje en redes sociales"
    ]
  },
  {
    enunciado: "¿Qué es el Factor de Forma ATX?",
    correcta: "El estándar de dimensiones y anclajes más común para placas base, fuentes de alimentación y cajas de ordenador de sobremesa",
    incorrectas: [
      "Un factor de multiplicación",
      "Una marca de ordenadores"
    ]
  },
  {
    enunciado: "¿Qué es el Chipset de la placa base?",
    correcta: "El conjunto de circuitos integrados que gestiona la comunicación entre el procesador, la memoria, y los periféricos (USB, SATA, PCIe)",
    incorrectas: [
      "Un conjunto de patatas fritas",
      "El ventilador de la CPU"
    ]
  },
  {
    enunciado: "¿Qué es la pasta térmica?",
    correcta: "Un compuesto conductor del calor que se aplica entre la CPU y el disipador para eliminar las microbolsas de aire y mejorar la refrigeración",
    incorrectas: [
      "Pegamento fuerte",
      "Pasta de dientes"
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre memoria RAM DDR3 y DDR4?",
    correcta: "Son incompatibles físicamente (muesca diferente); DDR4 es más rápida, tiene mayor ancho de banda y funciona a menor voltaje (1.2V vs 1.5V)",
    incorrectas: [
      "Son iguales pero de otro color",
      "DDR3 es más moderna"
    ]
  },
  {
    enunciado: "¿Qué es un disco SSD NVMe M.2?",
    correcta: "Una unidad de estado sólido ultrarrápida que se conecta directamente al bus PCIe mediante un conector M.2 pequeño, superando la velocidad del SATA",
    incorrectas: [
      "Un disco de vinilo",
      "Un USB externo"
    ]
  },
  {
    enunciado: "¿Qué significa 'Dual Channel' en la memoria RAM?",
    correcta: "Tecnología que permite al controlador de memoria acceder a dos módulos simultáneamente, duplicando el ancho de banda teórico (requiere colocarlos en slots pares)",
    incorrectas: [
      "Ver dos canales de TV",
      "Usar dos monitores"
    ]
  },
  {
    enunciado: "¿Qué es el conector EPS de 12V (4+4 pines o 8 pines)?",
    correcta: "El cable de la fuente de alimentación que suministra energía extra específicamente al procesador (se conecta cerca de la CPU)",
    incorrectas: [
      "El cable de la tarjeta gráfica",
      "El cable del ventilador"
    ]
  },
  {
    enunciado: "¿Qué es el Overclocking?",
    correcta: "Aumentar la frecuencia de reloj de la CPU o GPU por encima de las especificaciones del fabricante para ganar rendimiento (a costa de calor y estabilidad)",
    incorrectas: [
      "Mirar el reloj mucho",
      "Apagar el ordenador"
    ]
  },
  {
    enunciado: "¿Qué es la partición GPT (GUID Partition Table)?",
    correcta: "El estándar moderno para tablas de particiones (parte de UEFI), soporta discos > 2TB y particiones ilimitadas, sustituyendo al MBR",
    incorrectas: [
      "Gran Partición Total",
      "Una partición rota"
    ]
  },
  {
    enunciado: "¿Qué es el MBR (Master Boot Record)?",
    correcta: "El sector de arranque antiguo (sector 0), limitado a 4 particiones primarias y discos de máximo 2TB",
    incorrectas: [
      "Muy Buen Registro",
      "Memoria Base RAM"
    ]
  },
  {
    enunciado: "¿Qué es un SAI (UPS) Offline vs Online?",
    correcta: "El Offline solo entra cuando falla la luz (conmutación); el Online alimenta siempre desde batería/inversor, aislando totalmente de la red",
    incorrectas: [
      "El Online tiene internet",
      "Son iguales"
    ]
  },
  {
    enunciado: "¿Qué conector de vídeo transmite señal analógica?",
    correcta: "VGA (azul, DE-15). DVI, HDMI y DisplayPort son digitales (aunque DVI-I puede llevar analógica)",
    incorrectas: [
      "HDMI",
      "DisplayPort"
    ]
  },
  {
    enunciado: "¿Qué es el cuello de botella (Bottleneck)?",
    correcta: "Cuando un componente lento (ej. disco duro mecánico) limita el rendimiento total del sistema, haciendo que la CPU rápida espere",
    incorrectas: [
      "Una botella de agua en el PC",
      "Un virus"
    ]
  },
  {
    enunciado: "¿Qué es el RAID 0 (Striping)?",
    correcta: "Combinar dos o más discos para sumar su velocidad y capacidad, escribiendo datos alternativamente en ambos. Si falla uno, se pierden TODOS los datos",
    incorrectas: [
      "Copia de seguridad",
      "Discos en espejo"
    ]
  },
  {
    enunciado: "¿Qué es el RAID 1 (Mirroring)?",
    correcta: "Espejo: escribe los mismos datos en dos discos simultáneamente. Si falla uno, el sistema sigue funcionando (redundancia), pero no suma velocidad ni capacidad",
    incorrectas: [
      "Un insecticida",
      "Suma de velocidades"
    ]
  },
  {
    enunciado: "¿Qué es el RAID 5?",
    correcta: "Requiere al menos 3 discos; distribuye datos y paridad. Soporta la rotura de 1 disco cualquiera sin perder datos y ofrece buen rendimiento lectura",
    incorrectas: [
      "Cinco discos duros",
      "No existe"
    ]
  },
  {
    enunciado: "¿Qué es el Hot-Swap (Cambio en caliente)?",
    correcta: "La capacidad de reemplazar un componente (disco duro, fuente) sin apagar el servidor",
    incorrectas: [
      "Cambiar componentes muy rápido",
      "Componentes que se calientan"
    ]
  },
  {
    enunciado: "¿Qué es un Thin Client (Cliente Ligero)?",
    correcta: "Un ordenador básico y pequeño sin disco duro ni potencia, que se conecta a un servidor remoto donde se ejecuta todo realmente",
    incorrectas: [
      "Un cliente delgado",
      "Un portátil fino"
    ]
  },
  {
    enunciado: "¿Qué precaución hay que tener con la electricidad estática (ESD) al montar un PC?",
    correcta: "Tocar tierra (chasis metálico o pulsera) antes de manipular componentes electrónicos, ya que una chispa invisible puede destruir los chips",
    incorrectas: [
      "Ponerse guantes de lana",
      "Frotarse las manos"
    ]
  },
  {
    enunciado: "¿Qué es un controlador (Driver)?",
    correcta: "Un software específico que permite al sistema operativo comunicarse con un hardware concreto y utilizar sus funciones",
    incorrectas: [
      "El chófer del PC",
      "Un destornillador"
    ]
  },
  {
    enunciado: "¿Qué es la virtualización VT-x / AMD-V?",
    correcta: "Extensiones del procesador que deben activarse en BIOS para que el software de máquinas virtuales funcione con rendimiento casi nativo",
    incorrectas: [
      "Juegos virtuales",
      "Vídeo HD"
    ]
  },
  {
    enunciado: "¿Qué es el TPM (Trusted Platform Module)?",
    correcta: "Un chip de seguridad en la placa base que almacena claves criptográficas (requerido para BitLocker y Windows 11)",
    incorrectas: [
      "Total Power Module",
      "Un tipo de memoria"
    ]
  },
  {
    enunciado: "¿Qué es un puerto PCIe x16?",
    correcta: "La ranura de expansión más larga y rápida de la placa base, utilizada normalmente para conectar la tarjeta gráfica dedicada",
    incorrectas: [
      "Un puerto USB rápido",
      "Para tarjeta de sonido"
    ]
  },
  {
    enunciado: "¿Qué es la latencia CAS (CL) de la RAM?",
    correcta: "El número de ciclos de reloj que tarda la memoria en entregar un dato solicitado; cuanto menor sea el número, más rápida es la respuesta",
    incorrectas: [
      "La capacidad en gigas",
      "El voltaje"
    ]
  },
  {
    enunciado: "¿Qué es una imagen ISO?",
    correcta: "Un archivo que contiene una copia exacta (sector a sector) de un disco óptico (CD/DVD), usado para distribuir sistemas operativos",
    incorrectas: [
      "Una norma de calidad",
      "Una foto"
    ]
  },
  {
    enunciado: "¿Qué es el Boot Menu (F12, F8...)?",
    correcta: "Un menú de la BIOS que permite elegir temporalmente desde qué dispositivo arrancar (USB, Disco, Red) sin cambiar la configuración permanente",
    incorrectas: [
      "El menú del restaurante",
      "El menú de inicio de Windows"
    ]
  },
  {
    enunciado: "¿Qué es PXE (Preboot eXecution Environment)?",
    correcta: "Tecnología que permite arrancar e instalar un ordenador a través de la red (LAN) descargando la imagen desde un servidor, sin disco/USB local",
    incorrectas: [
      "Un formato de imagen",
      "Un pixel muerto"
    ]
  },
  {
    enunciado: "¿Qué es el Coil Whine (Ruido eléctrico)?",
    correcta: "Un pitido agudo (vibración de bobinas) que emiten algunas gráficas o fuentes bajo carga alta; es molesto pero no suele indicar avería",
    incorrectas: [
      "El ventilador rozando",
      "El disco duro rompiéndose"
    ]
  },
  {
    enunciado: "¿Qué es el cable de red cruzado (Crossover)?",
    correcta: "Antiguamente necesario para conectar dos PCs o dos switches directamente entre sí (invierte TX/RX); hoy día las tarjetas lo hacen automático (Auto-MDIX)",
    incorrectas: [
      "Un cable mal hecho",
      "Un cable satánico"
    ]
  },
  {
    enunciado: "¿Qué es el DHCP?",
    correcta: "Protocolo que asigna automáticamente dirección IP, máscara y puerta de enlace a los equipos que se conectan a la red",
    incorrectas: [
      "Dar IP a mano siempre",
      "Protocolo de chat"
    ]
  },
  {
    enunciado: "¿Qué es un SAI interactivo (Line-Interactive)?",
    correcta: "Corrige pequeñas subidas/bajadas des tensión (AVR) sin usar batería, y conmuta a batería solo si hay corte; es el estándar en PC/Pymes",
    incorrectas: [
      "Un SAI que habla",
      "Es peor que el offline"
    ]
  },
  {
    enunciado: "¿Qué significa 'Modular' en una fuente de alimentación?",
    correcta: "Que los cables son desmontables, permitiendo conectar solo los necesarios para mejorar el flujo de aire y orden",
    incorrectas: [
      "Que se vende por piezas",
      "Que es mala"
    ]
  },
  {
    enunciado: "¿Qué es un NAS (Network Attached Storage)?",
    correcta: "Un dispositivo de almacenamiento conectado a la red (servidor de archivos dedicado) para compartir datos y copias de seguridad",
    incorrectas: [
      "Una marca de coches",
      "Un disco USB"
    ]
  },
  {
    enunciado: "¿Qué es la certificación 80 Plus?",
    correcta: "Indica la eficiencia energética de la fuente de alimentación (White, Bronze, Silver, Gold, Platinum, Titanium)",
    incorrectas: [
      "Que vale más de 80 euros",
      "Que tiene 80 vatios"
    ]
  },
  {
    enunciado: "¿Qué es limpiar el CMOS (Clear CMOS)?",
    correcta: "Resetear la configuración de la BIOS a los valores de fábrica (borrando password y OC) mediante un jumper o quitando la pila",
    incorrectas: [
      "Limpiar la pantalla",
      "Formatear el disco duro"
    ]
  },
  {
    enunciado: "¿Qué es una estación de trabajo (Workstation)?",
    correcta: "Un PC de alto rendimiento diseñado para tareas profesionales técnicas (CAD, vídeo, cálculo) con hardware especializado (Xeon, Quadro)",
    incorrectas: [
      "Una mesa de trabajo",
      "Un portátil barato"
    ]
  },
  {
    enunciado: "¿Qué es el Throttling térmico?",
    correcta: "Mecanismo de protección que reduce drásticamente la velocidad de la CPU/GPU si alcanza una temperatura peligrosa (ej. 100ºC) para evitar daños",
    incorrectas: [
      "Acelerar el ventilador",
      "Apagarse de golpe"
    ]
  }
];
