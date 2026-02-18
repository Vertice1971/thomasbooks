// 47-sistemas-informaticos-monousuario-y-multiusuario.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué define a un sistema informático Multiusuario?",
    correcta: "La capacidad de permitir que dos o más usuarios compartan los recursos del sistema (CPU, memoria, disco) simultáneamente (ej. Linux, Windows Server, UNIX)",
    incorrectas: [
      "Que lo usa mucha gente por turno",
      "Que tiene muchos teclados"
    ]
  },
  {
    enunciado: "¿Qué es un sistema Monousuario?",
    correcta: "Un sistema diseñado para ser utilizado por un único usuario a la vez; aunque soporte múltiples cuentas, solo una sesión activa tiene el control (ej. MS-DOS, Windows 9x)",
    incorrectas: [
      "Un sistema para gente soltera",
      "Un sistema con una sola ventana"
    ]
  },
  {
    enunciado: "¿Qué es la Multitarea (Multitasking)?",
    correcta: "La capacidad del Sistema Operativo para ejecutar varios procesos (programas) concurrentemente en la CPU (o pseudo-simultáneamente mediante time-sharing)",
    incorrectas: [
      "Hacer muchas cosas mal",
      "Tener muchas pantallas"
    ]
  },
  {
    enunciado: "¿Qué es el Time-Sharing (Tiempo Compartido)?",
    correcta: "Técnica donde el SO asigna una pequeña ranura de tiempo (quantum) de CPU a cada usuario/proceso secuencialmente, dando la ilusión de paralelismo",
    incorrectas: [
      "Compartir el reloj",
      "Prestar el ordenador"
    ]
  },
  {
    enunciado: "¿Qué es la arquitectura Cliente-Servidor?",
    correcta: "Modelo donde los clientes (equipos usuario) solicitan recursos o servicios a un servidor central que los gestiona y suministra",
    incorrectas: [
      "Un camarero y un cliente",
      "Todos mandan por igual"
    ]
  },
  {
    enunciado: "¿Qué es un Grupo de Trabajo (Workgroup) en redes Windows?",
    correcta: "Una red entre iguales (Peer-to-Peer) donde no hay servidor central; cada equipo administra sus propios usuarios y recursos compartidos localmente",
    incorrectas: [
      "Un grupo de WhatsApp de trabajo",
      "Una reunión de oficina"
    ]
  },
  {
    enunciado: "¿Qué es un Dominio (Domain) en redes Windows?",
    correcta: "Una red centralizada donde la administración de usuarios, seguridad y recursos reside en uno o varios Controladores de Dominio (DC) con Active Directory",
    incorrectas: [
      "Una página web",
      "Tener mucho poder"
    ]
  },
  {
    enunciado: "¿Qué es el 'Superusuario' o 'Root' en sistemas UNIX/Linux?",
    correcta: "La cuenta de administrador con privilegios absolutos sobre todo el sistema (ID = 0), capaz de modificar cualquier archivo o proceso",
    incorrectas: [
      "Un usuario muy fuerte",
      "El dueño del PC"
    ]
  },
  {
    enunciado: "¿Qué son los permisos de archivo rwx (777)?",
    correcta: "Lectura (r), Escritura (w) y Ejecución (x) para el Propietario, Grupo y Otros. 777 significa permiso total para todos (rwx rwx rwx)",
    incorrectas: [
      "Un número de la suerte",
      "Permisos de red"
    ]
  },
  {
    enunciado: "¿Qué es la cuota de disco?",
    correcta: "El límite de espacio en disco que el administrador asigna a cada usuario para evitar que uno solo llene el almacenamiento compartido",
    incorrectas: [
      "Pagar por usar el disco",
      "Una partición oculta"
    ]
  },
  {
    enunciado: "¿Qué es un Perfil de Usuario Móvil (Roaming Profile)?",
    correcta: "Un perfil que se guarda en el servidor y se descarga en cualquier ordenador donde el usuario inicie sesión, manteniendo su escritorio y documentos",
    incorrectas: [
      "Un perfil telefónico",
      "Un usuario que viaja"
    ]
  },
  {
    enunciado: "¿Qué es la autenticación de dos factores (2FA)?",
    correcta: "Requiere dos pruebas de identidad distintas: algo que sabes (contraseña) y algo que tienes (móvil, token) o eres (biometría)",
    incorrectas: [
      "Poner la contraseña dos veces",
      "Tener dos usuarios"
    ]
  },
  {
    enunciado: "¿Qué es la virtualización de sistemas?",
    correcta: "Crear múltiples máquinas virtuales simuladas (VM) sobre un solo hardware físico, permitiendo ejecutar varios sistemas operativos aislados a la vez",
    incorrectas: [
      "Jugar con gafas 3D",
      "Imaginar que tienes un PC"
    ]
  },
  {
    enunciado: "¿Qué es un Hipervisor (Hypervisor)?",
    correcta: "El software (Tipo 1 bare-metal o Tipo 2 sobre SO) que crea y gestiona las máquinas virtuales (ej. VMware, Hyper-V, VirtualBox)",
    incorrectas: [
      "Un supervisor muy estricto",
      "Un monitor grande"
    ]
  },
  {
    enunciado: "¿Qué función tiene el Kernel (Núcleo) del SO?",
    correcta: "La parte central del sistema operativo que gestiona directamente el hardware (CPU, memoria, dispositivos) y ofrece servicios a los programas",
    incorrectas: [
      "La carcasa del PC",
      "El explorador de archivos"
    ]
  },
  {
    enunciado: "¿Qué es un proceso 'Zombie' en Linux?",
    correcta: "Un proceso que ha terminado su ejecución pero cuya entrada sigue en la tabla de procesos porque su padre no ha leído su estado de salida",
    incorrectas: [
      "Un virus malvado",
      "Un proceso que come cerebros"
    ]
  },
  {
    enunciado: "¿Qué es el directorio /home en Linux?",
    correcta: "El directorio donde se almacenan normalmente las carpetas personales y configuraciones de los usuarios estándar",
    incorrectas: [
      "La página de inicio del navegador",
      "Donde está el núcleo"
    ]
  },
  {
    enunciado: "¿Qué es el Directorio Activo (Active Directory)?",
    correcta: "El servicio de directorio de Microsoft que almacena información objetos de red (usuarios, equipos) y gestiona su seguridad de forma jerárquica (LDAP)",
    incorrectas: [
      "Una carpeta muy usada",
      "Un directorio telefónico"
    ]
  },
  {
    enunciado: "¿Qué es la multitarea apropiativa (Preemptive)?",
    correcta: "El SO puede interrumpir forzosamente a un proceso para dar paso a otro (gestión moderna), evitando que un programa colgado bloquee todo el sistema",
    incorrectas: [
      "Apropiarse de recursos ajenos",
      "Multitarea cooperativa antigua"
    ]
  },
  {
    enunciado: "¿Qué es un 'Demonio' (Daemon) o Servicio?",
    correcta: "Un proceso que se ejecuta en segundo plano (background) sin interfaz de usuario, realizando tareas de sistema (servidor web, impresión, cron)",
    incorrectas: [
      "Un virus satánico",
      "Un error grave"
    ]
  },
  {
    enunciado: "¿Qué es el Shell o Intérprete de Comandos?",
    correcta: "La interfaz (texto) que permite al usuario enviar órdenes al sistema operativo (ej. Bash, PowerShell, CMD)",
    incorrectas: [
      "El salvapantallas",
      "La marca de gasolina"
    ]
  },
  {
    enunciado: "¿Qué es el sistema de ficheros NTFS?",
    correcta: "New Technology File System: sistema de archivos nativo de Windows NT/XP/10, con soporte para permisos (ACLs), cifrado, compresión y archivos grandes",
    incorrectas: [
      "No Tiene File System",
      "Sistema antiguo FAT32"
    ]
  },
  {
    enunciado: "¿Qué es ext4?",
    correcta: "Un sistema de archivos transaccional (journaling) muy utilizado por defecto en distribuciones Linux modernas",
    incorrectas: [
      "Extensión 4 de teléfono",
      "Un formato de vídeo"
    ]
  },
  {
    enunciado: "¿Qué es el UID (User ID)?",
    correcta: "Un número único que identifica internamente a cada usuario en sistemas UNIX/Linux (Root es 0, usuarios normales > 1000)",
    incorrectas: [
      "El nombre de usuario",
      "La contraseña"
    ]
  },
  {
    enunciado: "¿Qué es el Swapping o Paginación?",
    correcta: "Técnica de gestión de memoria virtual que mueve datos de la RAM al disco duro (swap) cuando la RAM está llena, liberando espacio",
    incorrectas: [
      "Cambiar de usuario",
      "Intercambiar cromos"
    ]
  },
  {
    enunciado: "¿Qué es un Terminal Server o Escritorio Remoto?",
    correcta: "Servicio que permite a múltiples usuarios conectarse y trabajar con sesiones gráficas independientes en un mismo servidor potente",
    incorrectas: [
      "Un servidor de chat",
      "Un monitor tonto"
    ]
  },
  {
    enunciado: "¿Qué es la UAC (User Account Control) de Windows?",
    correcta: "Mecanismo de seguridad que pide confirmación/contraseña cuando un programa intenta realizar cambios que requieren privilegios de administrador",
    incorrectas: [
      "Unidad de Control de Acceso",
      "Control de usuarios aburridos"
    ]
  },
  {
    enunciado: "¿Qué es sudo (SuperUser DO)?",
    correcta: "Comando en Linux que permite a un usuario autorizado ejecutar programas con privilegios de root temporalmente de forma segura",
    incorrectas: [
      "Sudar trabajando",
      "Un juego de lógica"
    ]
  },
  {
    enunciado: "¿Qué es un Clúster de alta disponibilidad?",
    correcta: "Un grupo de ordenadores (nodos) que trabajan juntos para que si uno falla, otro asuma sus servicios inmediatamente, garantizando uptime",
    incorrectas: [
      "Un tipo de cereal",
      "Un virus informático"
    ]
  },
  {
    enunciado: "¿Qué es la licencia GPL (GNU General Public License)?",
    correcta: "Licencia de software libre que garantiza la libertad de usar, estudiar, compartir y modificar el software (Copyleft)",
    incorrectas: [
      "Licencia de pago por uso",
      "Licencia de conducir"
    ]
  },
  {
    enunciado: "¿Qué es un enlace simbólico (Symlink)?",
    correcta: "Un tipo de archivo especial que apunta a otro archivo o directorio (como un acceso directo avanzado), transparente para las aplicaciones",
    incorrectas: [
      "Un enlace roto",
      "Una cadena física"
    ]
  },
  {
    enunciado: "¿Qué diferencia hay entre Login y Logout?",
    correcta: "Login es el proceso de identificación e inicio de sesión; Logout es el cierre ordenado de la sesión del usuario",
    incorrectas: [
      "Entrar y Salir de la habitación",
      "Encender y Apagar el PC"
    ]
  },
  {
    enunciado: "¿Qué es la encriptación de disco completo (BitLocker/LUKS)?",
    correcta: "Cifrar toda la partición para que los datos sean ilegibles sin la clave, protegiendo la información si roban el disco físico",
    incorrectas: [
      "Comprimir el disco",
      "Poner contraseña a Windows"
    ]
  },
  {
    enunciado: "¿Qué son las variables de entorno?",
    correcta: "Valores dinámicos (ej. PATH, USER, HOME) que afectan al comportamiento de los procesos y el sistema operativo",
    incorrectas: [
      "El clima de la oficina",
      "Variables matemáticas"
    ]
  },
  {
    enunciado: "¿Qué es el 'Scheduling' o Planificación de procesos?",
    correcta: "El algoritmo del SO que decide qué proceso se ejecuta en la CPU en cada momento y durante cuánto tiempo (ej. Round Robin)",
    incorrectas: [
      "Hacer la agenda",
      "Planificar vacaciones"
    ]
  },
  {
    enunciado: "¿Qué es una copia de seguridad incremental?",
    correcta: "Copia solo los archivos que han cambiado desde la última copia (sea completa o incremental), ahorrando espacio y tiempo",
    incorrectas: [
      "Copia todo cada vez",
      "Copia los archivos por orden alfabético"
    ]
  },
  {
    enunciado: "¿Qué es el registro de eventos (Logs)?",
    correcta: "Archivos donde el sistema y las aplicaciones guardan información sobre su funcionamiento, errores y alertas para auditoría",
    incorrectas: [
      "Un tronco de madera",
      "El registro civil"
    ]
  },
  {
    enunciado: "¿Qué es un sistema en tiempo real (RTOS)?",
    correcta: "Un SO diseñado para garantizar tiempos de respuesta deterministas y precisos a eventos externos, crítico en industria (no necesariamente rápido, sino predecible)",
    incorrectas: [
      "Un sistema muy rápido",
      "Un reloj"
    ]
  },
  {
    enunciado: "¿Qué es la interfaz CLI?",
    correcta: "Command Line Interface: Interfaz de línea de comandos (solo texto), potente para administración y automatización (scripts)",
    incorrectas: [
      "Interfaz de Click Izquierdo",
      "Interfaz gráfica 3D"
    ]
  },
  {
    enunciado: "¿Qué es un usuario 'Invitado' (Guest)?",
    correcta: "Cuenta con privilegios muy restringidos y temporales, que no guarda cambios permanentes ni puede modificar el sistema",
    incorrectas: [
      "El que paga la cena",
      "Un virus"
    ]
  }
];
