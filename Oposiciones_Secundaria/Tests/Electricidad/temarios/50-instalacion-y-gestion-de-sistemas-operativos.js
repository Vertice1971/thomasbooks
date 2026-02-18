// 50-instalacion-y-gestion-de-sistemas-operativos.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué es una instalación limpia (Clean Install) del SO?",
    correcta: "Instalar el sistema operativo formateando la partición de destino, eliminando todos los datos, archivos y configuraciones anteriores para empezar de cero",
    incorrectas: [
      "Instalar limpiando el polvo al PC",
      "Actualizar conservando archivos"
    ]
  },
  {
    enunciado: "¿Qué es una actualización In-Place (Upgrade)?",
    correcta: "Instalar una versión más nueva del SO sobre la existente, manteniendo las aplicaciones, configuraciones y archivos personales del usuario",
    incorrectas: [
      "Instalar en el sitio del vecino",
      "Instalar solo los parches de seguridad"
    ]
  },
  {
    enunciado: "¿Qué es el particionado de disco?",
    correcta: "Dividir una unidad física de almacenamiento en varias secciones lógicas (particiones) que el sistema trata como discos independientes (C:, D:)",
    incorrectas: [
      "Romper el disco en trozos",
      "Compartir el disco con amigos"
    ]
  },
  {
    enunciado: "¿Qué sistema de archivos es nativo y recomendado para Windows 10/11?",
    correcta: "NTFS (New Technology File System)",
    incorrectas: [
      "FAT32 (limitado a archivos < 4GB)",
      "ext4 (Linux)"
    ]
  },
  {
    enunciado: "¿Qué sistema de archivos es el estándar por defecto en la mayoría de Linux actuales?",
    correcta: "ext4 (Fourth Extended Filesystem)",
    incorrectas: [
      "NTFS",
      "HFS+"
    ]
  },
  {
    enunciado: "¿Qué es la partición SWAP o de intercambio en Linux?",
    correcta: "Una partición dedicada (o archivo) que se usa como extensión de la memoria RAM cuando esta se llena (memoria virtual)",
    incorrectas: [
      "Una partición para piratería",
      "Una partición de arranque"
    ]
  },
  {
    enunciado: "¿Qué es el Gestor de Arranque (Bootloader) como GRUB o Windows Boot Manager?",
    correcta: "El pequeño programa que se carga primero desde el disco y permite al usuario elegir qué sistema operativo iniciar si hay varios instalados (Dual Boot)",
    incorrectas: [
      "El botón de encendido",
      "Un cargador de batería"
    ]
  },
  {
    enunciado: "¿Qué es el Dual Boot?",
    correcta: "Tener dos (o más) sistemas operativos instalados en el mismo ordenador y poder elegir cuál arrancar al encender",
    incorrectas: [
      "Arrancar dos veces",
      "Usar dos botas"
    ]
  },
  {
    enunciado: "¿Qué es un Live USB/CD?",
    correcta: "Un sistema operativo que arranca y se ejecuta directamente desde la memoria USB o CD sin necesidad de instalarse en el disco duro (útil para pruebas o rescate)",
    incorrectas: [
      "Un concierto en vivo",
      "Un USB con luces"
    ]
  },
  {
    enunciado: "¿Qué es la clonación de discos (Disk Cloning)?",
    correcta: "Copiar bit a bit todo el contenido de un disco duro a otro, creando una réplica exacta e iniciable (útil para despliegues masivos o backups)",
    incorrectas: [
      "Clonar ovejas",
      "Copiar y pegar archivos"
    ]
  },
  {
    enunciado: "¿Qué es sysprep (System Preparation Tool) en Windows?",
    correcta: "Herramienta que prepara una instalación de Windows para ser clonada (imágenes), eliminando identificadores únicos (SID) y drivers específicos del hardware",
    incorrectas: [
      "Preparar el sistema para jugar",
      "Un antivirus"
    ]
  },
  {
    enunciado: "¿Qué es un archivo de respuesta (Answer File / Unattended)?",
    correcta: "Un archivo XML o texto que contiene las respuestas a las preguntas del instalador (idioma, usuario, clave) para automatizar la instalación sin intervención humana",
    incorrectas: [
      "Un archivo que responde dudas",
      "Un chat bot"
    ]
  },
  {
    enunciado: "¿Qué es la activación del producto (Licencia)?",
    correcta: "El proceso de verificar con el fabricante (ej. servidores de Microsoft) que la clave de producto es válida y genuina para combatir la piratería",
    incorrectas: [
      "Encender el ordenador",
      "Activar el modo turbo"
    ]
  },
  {
    enunciado: "¿Qué es Windows Update / apt-get update?",
    correcta: "Mecanismos pare mantener el sistema operativo al día con parches de seguridad, correcciones de errores y nuevos drivers",
    incorrectas: [
      "Actualizar el hardware",
      "Cambiar de ordenador"
    ]
  },
  {
    enunciado: "¿Qué es el Administrador de Dispositivos?",
    correcta: "Herramienta de gestión que muestra todo el hardware conectado, permite ver drivers instalados, deshabilitar componentes o detectar fallos (trianulo amarillo)",
    incorrectas: [
      "El jefe de la oficina",
      "Una tienda de electrónica"
    ]
  },
  {
    enunciado: "¿Qué es un Punto de Restauración?",
    correcta: "Una 'foto' del estado de los archivos de sistema, registro y drivers en un momento dado, permitiendo revertir el sistema a ese punto si algo falla después",
    incorrectas: [
      "Un restaurante",
      "Un punto de soldadura"
    ]
  },
  {
    enunciado: "¿Qué es el Modo Seguro (Safe Mode)?",
    correcta: "Un modo de arranque diagnóstico que carga solo los drivers y servicios mínimos indispensables, permitiendo solucionar problemas (ej. virus, drivers corruptos)",
    incorrectas: [
      "Un modo antivirus",
      "Un modo para niños"
    ]
  },
  {
    enunciado: "¿Qué es desfragmentar el disco (HDD)?",
    correcta: "Reordenar físicamente los fragmentos de archivos dispersos en un disco mecánico para que estén contiguos y mejorar la velocidad de lectura",
    incorrectas: [
      "Romper el disco",
      "Limpiar el polvo"
    ]
  },
  {
    enunciado: "¿Se debe desfragmentar un SSD?",
    correcta: "NO, es innecesario (no hay cabezal mecánico) y dañino (desgasta las celdas de memoria por escrituras extra). Se usa el comando TRIM",
    incorrectas: [
      "Sí, siempre",
      "Da igual"
    ]
  },
  {
    enunciado: "¿Qué es el TRIM en SSD?",
    correcta: "Un comando que el SO envía al SSD para informarle de qué bloques de datos ya no se usan (borrados), para que el controlador interno los limpie y mantenga el rendimiento",
    incorrectas: [
      "Recortar el disco",
      "Un virus"
    ]
  },
  {
    enunciado: "¿Qué es una cuenta de usuario local vs cuenta Microsoft/Cloud?",
    correcta: "La local reside solo en el PC (no requiere internet); la Cloud se sincroniza con la nube, permite acceso a tienda, OneDrive y restablecimiento de contraseña online",
    incorrectas: [
      "La local es peor",
      "La cloud es de pago"
    ]
  },
  {
    enunciado: "¿Qué es el Programador de Tareas (Task Scheduler / Cron)?",
    correcta: "Servicio que permite automatizar la ejecución de programas o scripts en momentos específicos (hora, arranque, evento) sin intervención del usuario",
    incorrectas: [
      "Una agenda de papel",
      "Un despertador"
    ]
  },
  {
    enunciado: "¿Qué es el Visor de Eventos (Event Viewer)?",
    correcta: "Herramienta avanzada para ver los registros (logs) del sistema, aplicaciones y seguridad, fundamental para diagnosticar por qué se cuelga el SO",
    incorrectas: [
      "Para ver fotos",
      "Para ver películas"
    ]
  },
  {
    enunciado: "¿Qué es una variable de entorno PATH?",
    correcta: "Una variable que contiene la lista de directorios donde el sistema buscará los archivos ejecutables si no se especifica la ruta completa",
    incorrectas: [
      "Un camino en el bosque",
      "Una contraseña"
    ]
  },
  {
    enunciado: "¿Qué es el Registro de Windows (Regedit)?",
    correcta: "Una base de datos jerárquica centralizada donde se almacenan todas las configuraciones del sistema, hardware, usuarios y programas instalados",
    incorrectas: [
      "Un libro de visitas",
      "Donde registras el PC"
    ]
  },
  {
    enunciado: "¿Qué es BitLocker?",
    correcta: "Característica de Windows (Pro/Ent) para cifrar unidades de disco completas, protegiendo los datos con TPM o contraseña",
    incorrectas: [
      "Un virus cripto",
      "Un bloqueador de anuncios"
    ]
  },
  {
    enunciado: "¿Qué es un dominio de directorio activo (Unirse al dominio)?",
    correcta: "Configurar el PC para que confíe en un servidor central (Controlador de Dominio) para la autenticación de usuarios y políticas de grupo (GPO)",
    incorrectas: [
      "Comprar un .com",
      "Dominar el mundo"
    ]
  },
  {
    enunciado: "¿Qué es una Política de Grupo (GPO)?",
    correcta: "Reglas configuradas centralizadamente por el administrador que se aplican a los PCs del dominio (ej. forzar fondo pantalla, prohibir USB, instalar soft)",
    incorrectas: [
      "Política de empresa",
      "Grupo de amigos"
    ]
  },
  {
    enunciado: "¿Qué es el comando 'ping'?",
    correcta: "Herramienta de red básica que envía paquetes ICMP Echo Request a una IP para comprobar si está accesible y medir el tiempo de respuesta (latencia)",
    incorrectas: [
      "Jugar al ping-pong",
      "Un sonido"
    ]
  },
  {
    enunciado: "¿Qué es 'ipconfig' (Windows) o 'ifconfig/ip addr' (Linux)?",
    correcta: "Comando para ver la configuración actual de los adaptadores de red (IP, máscara, gateway, MAC) en consola",
    incorrectas: [
      "Configurar la impresora",
      "Configurar internet explorer"
    ]
  },
  {
    enunciado: "¿Qué es un Servicio (Windows) o Daemon (Linux)?",
    correcta: "Programas que se ejecutan en segundo plano al arrancar el sistema, independientemente de que haya un usuario logueado o no",
    incorrectas: [
      "Servicio de habitaciones",
      "Un programa gráfico"
    ]
  },
  {
    enunciado: "¿Qué es matar un proceso (Kill task)?",
    correcta: "Forzar la terminación inmediata de un programa que no responde o se ha quedado colgado, liberando sus recursos",
    incorrectas: [
      "Cometer un delito",
      "Borrar el programa"
    ]
  },
  {
    enunciado: "¿Qué es la memoria virtual (Archivo de paginación/Swap)?",
    correcta: "Espacio en disco disco duro que el SO usa como si fuera RAM extra cuando la física se agota; es mucho más lenta",
    incorrectas: [
      "Memoria en la nube",
      "Memoria falsa"
    ]
  },
  {
    enunciado: "¿Qué es el formateo a bajo nivel?",
    correcta: "Originalmente marcaba pistas/sectores físicos en fábrica. Hoy día, 'llenado de ceros' para borrar datos irrecuperablemente o reasignar sectores malos",
    incorrectas: [
      "Formatear agachado",
      "Formatear rápido"
    ]
  },
  {
    enunciado: "¿Qué es una copia de seguridad (Backup) 3-2-1?",
    correcta: "Regla de oro: 3 copias de los datos, en 2 soportes diferentes, y 1 de ellas fuera del lugar físico (offsite/nube) para desastres",
    incorrectas: [
      "Una cuenta atrás",
      "Hacer 3 copias iguales"
    ]
  },
  {
    enunciado: "¿Qué es la virtualización de escritorio (VDI)?",
    correcta: "Técnica donde el sistema operativo de escritorio del usuario se ejecuta en una máquina virtual en un servidor central, no en el PC local",
    incorrectas: [
      "Un escritorio virtual de Windows 10",
      "Ver la pantalla doble"
    ]
  },
  {
    enunciado: "¿Qué es el comando 'chkdisk' o 'fsck'?",
    correcta: "Herramienta para verificar la integridad del sistema de archivos y reparar errores lógicos o sectores defectuosos en el disco",
    incorrectas: [
      "Chequear el disco de música",
      "Borrar el disco"
    ]
  },
  {
    enunciado: "¿Qué es la hibernación?",
    correcta: "Estado de ahorro de energía donde se vuelca todo el contenido de la RAM al disco duro y se apaga el PC por completo; al encender, se restaura tal cual",
    incorrectas: [
      "Dormir en invierno",
      "Suspensión (mantiene RAM encendida)"
    ]
  },
  {
    enunciado: "¿Qué es Remote Desktop Protocol (RDP)?",
    correcta: "Protocolo propietario de Microsoft que permite conectarse gráficamente a otro ordenador Windows a través de la red para controlarlo",
    incorrectas: [
      "Radio Digital",
      "Red Privada"
    ]
  },
  {
    enunciado: "¿Qué es un Script de inicio de sesión (Logon Script)?",
    correcta: "Un pequeño programa (batch, powershell) que se ejecuta automáticamente cada vez que el usuario inicia sesión (ej. mapear unidades de red)",
    incorrectas: [
      "Un guión de película",
      "Una contraseña larga"
    ]
  }
];
