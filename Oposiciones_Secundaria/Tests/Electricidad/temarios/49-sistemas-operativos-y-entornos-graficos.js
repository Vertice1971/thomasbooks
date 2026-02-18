// 49-sistemas-operativos-y-entornos-graficos.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué es un Sistema Operativo (SO)?",
    correcta: "El software principal que gestiona los recursos de hardware del ordenador y proporciona servicios comunes y una interfaz para los programas de aplicación",
    incorrectas: [
      "Un programa para escribir textos",
      "El navegador de internet"
    ]
  },
  {
    enunciado: "¿Qué es la Interfaz Gráfica de Usuario (GUI)?",
    correcta: "Un entorno visual (ventanas, iconos, menús) que permite al usuario interactuar con el sistema operativo usando el ratón, en lugar de comandos de texto",
    incorrectas: [
      "Una interfaz solo para expertos",
      "La pantalla negra de letras"
    ]
  },
  {
    enunciado: "¿Qué es el Kernel Monolítico?",
    correcta: "Una arquitectura de núcleo donde todos los servicios del SO (gestión de archivos, memoria, drivers) se ejecutan en el espacio del kernel (Ring 0) para máximo rendimiento (ej. Linux, UNIX)",
    incorrectas: [
      "Un kernel de una sola pieza de metal",
      "Un kernel muy lento"
    ]
  },
  {
    enunciado: "¿Qué es el Microkernel?",
    correcta: "Arquitectura donde el núcleo es mínimo (solo gestión básica de procesos/memoria) y los servicios (drivers, red) corren como procesos de usuario separados, mejorando la estabilidad (ej. Minix, Hurd)",
    incorrectas: [
      "Un kernel microscópico",
      "Un kernel para microondas"
    ]
  },
  {
    enunciado: "¿Qué es el escritorio (Desktop) en la GUI?",
    correcta: "El área de trabajo principal en pantalla que simula una mesa de oficina, donde se colocan iconos, accesos directos y ventanas abiertas",
    incorrectas: [
      "La mesa física donde está el PC",
      "La papelera de reciclaje"
    ]
  },
  {
    enunciado: "¿Qué función cumple el Gestor de Ventanas (Window Manager)?",
    correcta: "El componente software que controla la ubicación, apariencia, bordes y comportamiento (mover, minimizar) de las ventanas en la pantalla (ej. KWin, Mutter, DWM)",
    incorrectas: [
      "El que limpia las ventanas",
      "El administrador de tareas"
    ]
  },
  {
    enunciado: "¿Qué es un Entorno de Escritorio (Desktop Environment)?",
    correcta: "Un conjunto completo e integrado de software GUI (gestor de ventanas, paneles, explorador de archivos, herramientas) que ofrece una experiencia usuario coherente (ej. GNOME, KDE, Xfce)",
    incorrectas: [
      "Solo el fondo de pantalla",
      "La silla de la oficina"
    ]
  },
  {
    enunciado: "¿Qué es X Window System (X11)?",
    correcta: "El protocolo y sistema de ventanas estándar básico en sistemas UNIX/Linux que permite dibujar gráficos en pantalla (arquitectura cliente-servidor)",
    incorrectas: [
      "El sistema X de Windows 10",
      "Un juego de las tres en raya"
    ]
  },
  {
    enunciado: "¿Qué es Wayland?",
    correcta: "El protocolo moderno de servidor de visualización para Linux destinado a reemplazar a X11, siendo más simple, seguro y eficiente",
    incorrectas: [
      "Una tierra lejana",
      "Un navegador web"
    ]
  },
  {
    enunciado: "¿Qué es la Barra de Tareas (Taskbar)?",
    correcta: "Elemento de la GUI (normalmente inferior) que muestra los programas abiertos, el botón de inicio, notificaciones y reloj",
    incorrectas: [
      "Una barra de bar",
      "El borde de la ventana"
    ]
  },
  {
    enunciado: "¿Qué es el Explorador de Archivos?",
    correcta: "La aplicación gráfica para navegar por las carpetas, copiar, mover y gestionar ficheros (ej. Explorador de Windows, Nautilus, Dolphin)",
    incorrectas: [
      "Internet Explorer",
      "Un buscador de tesoros"
    ]
  },
  {
    enunciado: "¿Qué es la resolución de pantalla?",
    correcta: "El número de píxeles horizontales y verticales que se muestran (ej. 1920x1080); afecta a la nitidez y al espacio disponible en el escritorio",
    incorrectas: [
      "El tamaño físico del monitor en pulgadas",
      "El brillo de la pantalla"
    ]
  },
  {
    enunciado: "¿Qué es el DPI (Dots Per Inch) o escalado?",
    correcta: "Ajuste software que aumenta el tamaño de textos e iconos para que sean legibles en pantallas de alta resolución (4K) sin verse minúsculos",
    incorrectas: [
      "Puntos de interés",
      "Resolución de impresión"
    ]
  },
  {
    enunciado: "¿Qué es el Portapapeles (Clipboard)?",
    correcta: "Un área de memoria temporal donde se almacena lo que se 'Copia' o 'Corta' para poder 'Pegarlo' en otro lugar",
    incorrectas: [
      "Una carpeta física",
      "Un clip de papel"
    ]
  },
  {
    enunciado: "¿Qué es el Driver de vídeo?",
    correcta: "Software crítico que permite al SO aprovechar la aceleración hardware de la tarjeta gráfica (GPU) para dibujar la GUI fluida y juegos 3D",
    incorrectas: [
      "El conductor del vídeo",
      "El cable HDMI"
    ]
  },
  {
    enunciado: "¿Qué es Aero (Glass)?",
    correcta: "El estilo visual introducido en Windows Vista/7 que usaba transparencias y efectos 3D acelerados por hardware para las ventanas",
    incorrectas: [
      "Un avión",
      "Un chocolate"
    ]
  },
  {
    enunciado: "¿Qué es un Widget o Gadget?",
    correcta: "Pequeña aplicación que reside en el escritorio o panel y muestra información rápida (tiempo, reloj, uso de CPU) sin abrir ventana completa",
    incorrectas: [
      "Un juguete",
      "Un error"
    ]
  },
  {
    enunciado: "¿Qué es la Accesibilidad en la GUI?",
    correcta: "Herramientas integradas (lupa, narrador, alto contraste, teclas pringosas) para facilitar el uso del ordenador a personas con discapacidades",
    incorrectas: [
      "Poder entrar fácil al edificio",
      "Tener la contraseña"
    ]
  },
  {
    enunciado: "¿Qué es el API (Application Programming Interface) gráfica?",
    correcta: "Conjunto de funciones (ej. DirectX, OpenGL, Vulkan) que los programadores usan para pedir a la gráfica que dibuje cosas sin conocer el hardware a bajo nivel",
    incorrectas: [
      "Una abeja",
      "Un programa de dibujo"
    ]
  },
  {
    enunciado: "¿Qué es el Drag and Drop (Arrastrar y Soltar)?",
    correcta: "Metodología de interacción intuitiva para mover archivos o datos seleccionándolos con el ratón y soltándolos en el destino",
    incorrectas: [
      "Arrastrarse por el suelo",
      "Soltar lastre"
    ]
  },
  {
    enunciado: "¿Qué es un Launcher (Lanzador)?",
    correcta: "Un menú o barra (ej. Dock de macOS, Spotlight) que permite buscar y ejecutar aplicaciones rápidamente",
    incorrectas: [
      "Un lanzacohetes",
      "Un botón de apagado"
    ]
  },
  {
    enunciado: "¿Qué es el salvapantallas (Screensaver)?",
    correcta: "Programa gráfico que se activa tras inactividad; originalmente para evitar quemados en monitores CRT, hoy día por seguridad (bloqueo) o estética",
    incorrectas: [
      "Un protector de plástico",
      "Para limpiar la pantalla"
    ]
  },
  {
    enunciado: "¿Qué es la Tecla Super o Meta?",
    correcta: "Generalmente la tecla con el logo de Windows (o Command en Mac); se usa como modificador principal para atajos de teclado del entorno gráfico",
    incorrectas: [
      "La tecla más grande",
      "No existe"
    ]
  },
  {
    enunciado: "¿Qué es el Tiling Window Manager (Gestor de mosaico)?",
    correcta: "Un gestor que organiza las ventanas automáticamente en una rejilla sin solaparse (ej. i3, BSPWM), maximizando el uso de pantalla y controlado por teclado",
    incorrectas: [
      "Un gestor de azulejos",
      "Poner baldosas en el fondo"
    ]
  },
  {
    enunciado: "¿Qué es el Stacking/Floating Window Manager (Gestor de pila)?",
    correcta: "El tradicional (ej. Windows), donde las ventanas flotan libremente y pueden solaparse unas encima de otras como papeles",
    incorrectas: [
      "Un pila de libros",
      "Ventanas que vuelan"
    ]
  },
  {
    enunciado: "¿Qué es el Alt+Tab?",
    correcta: "Atajo de teclado universal para cambiar rápidamente el foco entre las ventanas abiertas",
    incorrectas: [
      "Tabular textos",
      "Cerrar ventanas"
    ]
  },
  {
    enunciado: "¿Qué es el Sistema de Archivos Virtual (/proc, /sys) en Linux?",
    correcta: "Interfaz que presenta información del kernel y hardware como si fueran archivos de texto en carpetas, permitiendo leer/configurar el sistema fácilmente",
    incorrectas: [
      "Archivos que no existen",
      "Archivos falsos"
    ]
  },
  {
    enunciado: "¿Qué es la consola o terminal dentro del entorno gráfico?",
    correcta: "Un emulador de terminal (ventana) que permite acceder a la línea de comandos (CLI) sin salir de la GUI",
    incorrectas: [
      "Una videoconsola",
      "El fin del sistema"
    ]
  },
  {
    enunciado: "¿Qué es el modo oscuro (Dark Mode)?",
    correcta: "Esquema de color del sistema que usa fondos oscuros y textos claros para reducir la fatiga visual y el consumo en pantallas OLED",
    incorrectas: [
      "Apagar el monitor",
      "Bajar el brillo al mínimo"
    ]
  },
  {
    enunciado: "¿Qué son los Escritorios Virtuales?",
    correcta: "Tener múltiples áreas de escritorio independientes entre las que se puede conmutar, para organizar grupos de ventanas por tareas",
    incorrectas: [
      "Escritorios en la nube",
      "Tener varios monitores físicos"
    ]
  },
  {
    enunciado: "¿Qué es el servidor de sonido (ej. PulseAudio, PipeWire)?",
    correcta: "Componente intermedio que recibe el audio de todas las aplicaciones, lo mezcla y lo envía al driver de la tarjeta de sonido",
    incorrectas: [
      "Un DJ",
      "Los altavoces"
    ]
  },
  {
    enunciado: "¿Qué es el Bloqueo de Sesión?",
    correcta: "Dejar el entorno gráfico activo pero protegido por contraseña, ocultando las ventanas hasta que el usuario vuelve",
    incorrectas: [
      "Cerrar sesión",
      "Apagar el PC"
    ]
  },
  {
    enunciado: "¿Qué es un Tray Icon o área de notificación?",
    correcta: "Iconos pequeños junto al reloj que indican programas residentes en memoria (antivirus, volumen, red)",
    incorrectas: [
      "Una bandeja de comida",
      "Iconos de la papelera"
    ]
  },
  {
    enunciado: "¿Qué es el Compositor (Compositing Window Manager)?",
    correcta: "Un gestor que dibuja cada ventana en un buffer fuera de pantalla y luego las compone en la imagen final, permitiendo sombras, transparencias y V-Sync",
    incorrectas: [
      "Un músico",
      "El que compone el PC"
    ]
  },
  {
    enunciado: "¿Qué es el menú contextual?",
    correcta: "El menú que aparece al hacer clic derecho, mostrando opciones relevantes para el objeto seleccionado en ese momento",
    incorrectas: [
      "El menú de inicio",
      "Un menú de texto"
    ]
  },
  {
    enunciado: "¿Qué son las librerías gráficas (GTK, Qt)?",
    correcta: "Kits de desarrollo (frameworks) que proporcionan los botones, menús y elementos visuales estándar para construir aplicaciones GUI",
    incorrectas: [
      "Libros con dibujos",
      "Tiendas de libros"
    ]
  },
  {
    enunciado: "¿Qué es el tearing o rasgado de imagen?",
    correcta: "Artefacto visual (corte horizontal) que ocurre cuando la gráfica envía cuadros más rápido de lo que el monitor refresca; se soluciona con V-Sync / Compositor",
    incorrectas: [
      "Romper la pantalla",
      "Llorar"
    ]
  }
];
