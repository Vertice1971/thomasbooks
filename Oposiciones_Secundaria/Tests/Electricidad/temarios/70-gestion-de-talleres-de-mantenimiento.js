// 70-gestion-de-talleres-de-mantenimiento.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué es el Mantenimiento Correctivo?",
    correcta: "Aquel que se realiza una vez que se ha producido la avería para restaurar el equipo a su estado operativo",
    incorrectas: [
      "El que se programa por horas de funcionamiento para evitar fallos",
      "La limpieza diaria de las herramientas del taller"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al Mantenimiento Preventivo?",
    correcta: "Se realiza a intervalos predeterminados para reducir la probabilidad de fallo o la degradación de un componente",
    incorrectas: [
      "Se ejecuta solo cuando la máquina se rompe definitivamente",
      "Es el mantenimiento que consiste en comprar maquinaria nueva cada año"
    ]
  },
  {
    enunciado: "¿En qué consiste el Mantenimiento Predictivo?",
    correcta: "Utiliza técnicas de diagnóstico (análisis de vibraciones, termografía, etc.) para intervenir justo antes de que ocurra el fallo",
    incorrectas: [
      "Adivinar qué máquina se va a romper basándose en la suerte",
      "Cambiar todas las piezas de una máquina cada lunes"
    ]
  },
  {
    enunciado: "¿Qué es el TPM (Mantenimiento Productivo Total)?",
    correcta: "Un sistema de gestión donde todo el personal, incluidos los operarios de producción, se involucra en el mantenimiento básico",
    incorrectas: [
      "Un software para contar las herramientas del almacén",
      "Una técnica para reparar motores sumergidos en aceite"
    ]
  },
  {
    enunciado: "¿Qué mide el indicador MTBF (Mean Time Between Failures)?",
    correcta: "El tiempo medio transcurrido entre dos averías consecutivas; mide la fiabilidad de un equipo",
    incorrectas: [
      "El tiempo que tarda el técnico en desayunar",
      "La temperatura media de los motores en verano"
    ]
  },
  {
    enunciado: "¿Qué es el MTTR (Mean Time To Repair)?",
    correcta: "El tiempo medio necesario para reparar una avería; mide la mantenibilidad y eficiencia del taller",
    incorrectas: [
      "La cantidad de dinero gastada en repuestos",
      "El tiempo que la máquina está funcionando sin parar"
    ]
  },
  {
    enunciado: "¿Qué es una Orden de Trabajo (OT)?",
    correcta: "El documento legal y técnico que autoriza, describe y registra una actividad de mantenimiento",
    incorrectas: [
      "El contrato de alquiler de la nave del taller",
      "La lista de la compra de materiales de oficina"
    ]
  },
  {
    enunciado: "¿Qué función cumple el GMAO (Gestión de Mantenimiento Asistida por Ordenador)?",
    correcta: "Software para gestionar activos, planificar tareas, controlar inventarios de repuestos y generar informes",
    incorrectas: [
      "Un programa para dibujar piezas en 3D",
      "El sistema que controla la nómina de los empleados"
    ]
  },
  {
    enunciado: "¿Qué es el 'Stock de Seguridad' en un almacén de mantenimiento?",
    correcta: "La cantidad mínima de repuestos críticos que debe haber siempre para evitar paradas prolongadas por falta de piezas",
    incorrectas: [
      "Guardar las herramientas bajo llave en una caja fuerte",
      "El número de extintores que hay en el pasillo"
    ]
  },
  {
    enunciado: "¿Qué define el Análisis de Criticidad de los equipos?",
    correcta: "Clasifica las máquinas según el impacto de su fallo en la seguridad, el medio ambiente y la producción (A, B, C)",
    incorrectas: [
      "La edad que tiene cada operario del taller",
      "El precio de reventa de la maquinaria vieja"
    ]
  },
  {
    enunciado: "¿Qué es el mantenimiento de Nivel 1 según la normativa?",
    correcta: "Ajustes simples y comprobaciones visuales realizados por el propio operario sin desmontar el equipo",
    incorrectas: [
      "Grandes revisiones que requieren el envío de la máquina al fabricante",
      "Reparación de circuitos electrónicos complejos"
    ]
  },
  {
    enunciado: "¿Qué técnica de mantenimiento utiliza la medida de la temperatura sin contacto?",
    correcta: "Termografía infrarroja",
    incorrectas: [
      "Análisis de aceites",
      "Ensayos de ultrasonido"
    ]
  },
  {
    enunciado: "¿Qué es el flujo de materiales en un taller (Layout)?",
    correcta: "La disposición física de máquinas y bancos de trabajo para minimizar desplazamientos y optimizar el tiempo",
    incorrectas: [
      "La cantidad de agua que circula por las tuberías",
      "El orden de los nombres de los técnicos en el tablón"
    ]
  },
  {
    enunciado: "¿Qué es un 'Gallego' o 'Cuello de Botella' en el mantenimiento?",
    correcta: "Un recurso o etapa que limita la capacidad total del taller, ralentizando el resto de las reparaciones",
    incorrectas: [
      "Una herramienta especial para abrir botellas de aceite",
      "Un tipo de estantería muy alta"
    ]
  },
  {
    enunciado: "¿Qué es la RCM (Reliability Centered Maintenance)?",
    correcta: "Metodología para asegurar que los activos continúen cumpliendo sus funciones deseadas en su contexto operativo",
    incorrectas: [
      "Un sistema para limpiar las máquinas con aire a presión",
      "Un curso de formación para nuevos mecánicos"
    ]
  },
  {
    enunciado: "¿Qué es la externalización o 'Outsourcing' del mantenimiento?",
    correcta: "Contratar a empresas externas especializadas para realizar ciertas tareas de mantenimiento",
    incorrectas: [
      "Vender las herramientas viejas a otros talleres",
      "Trabajar fuera del horario laboral establecido"
    ]
  },
  {
    enunciado: "¿Cuál es el objetivo de las 5S en la gestión de un taller?",
    correcta: "Mejorar el orden, la limpieza y la disciplina para crear un entorno de trabajo más seguro y eficiente",
    incorrectas: [
      "Conseguir que haya 5 supervisores por cada 5 operarios",
      "Terminar todas las reparaciones en menos de 5 horas"
    ]
  },
  {
    enunciado: "¿Qué es la Hoja de Ruta de mantenimiento?",
    correcta: "Descripción detallada paso a paso de las operaciones necesarias para realizar una tarea compleja",
    incorrectas: [
      "El mapa para llegar a la fábrica",
      "La lista de teléfonos de los proveedores"
    ]
  },
  {
    enunciado: "¿Qué riesgo específico se gestiona con el procedimiento LOTO (Lockout-Tagout)?",
    correcta: "El riesgo de liberación de energía inesperada durante la reparación de una máquina",
    incorrectas: [
      "El riesgo de que el técnico se olvide de apuntar las horas",
      "El riesgo de robo de herramientas manuales"
    ]
  },
  {
    enunciado: "¿Qué es el mantenimiento de mejora (o rediseño)?",
    correcta: "Modificar un equipo para eliminar la causa raíz de una avería repetitiva o mejorar su rendimiento",
    incorrectas: [
      "Pintar la máquina para que parezca nueva",
      "Sustituir la máquina por otra idéntica"
    ]
  },
  {
    enunciado: "¿Qué es el inventario de activos?",
    correcta: "El listado codificado de todos los equipos e instalaciones sujetos a mantenimiento",
    incorrectas: [
      "La lista de clientes que deben dinero al taller",
      "El catálogo de uniformes de trabajo"
    ]
  },
  {
    enunciado: "¿Qué es el coste de indisponibilidad?",
    correcta: "La pérdida económica que sufre la empresa por cada hora que la máquina está parada por avería",
    incorrectas: [
      "El precio de la hora de mano de obra del técnico",
      "Lo que cuesta el seguro de incendios del taller"
    ]
  },
  {
    enunciado: "¿Qué es un repuesto 'estratégico'?",
    correcta: "Aquel que tiene un plazo de entrega muy largo y cuya falta detendría totalmente la producción",
    incorrectas: [
      "Un tornillo estándar que se compra en cualquier ferretería",
      "Una herramienta que solo usa el jefe de taller"
    ]
  },
  {
    enunciado: "¿Qué significa el término 'Overhaul'?",
    correcta: "Revisión completa de una máquina, desmontándola y sustituyendo todas las piezas de desgaste para dejarla a 'cero horas'",
    incorrectas: [
      "Limpiar la superficie exterior con un trapo",
      "Pasar la revisión de la ITV a los vehículos del taller"
    ]
  },
  {
    enunciado: "¿Qué es la amortización de la maquinaria?",
    correcta: "El reflejo contable de la pérdida de valor de un equipo a lo largo del tiempo por uso u obsolescencia",
    incorrectas: [
      "Poner gomas debajo de las máquinas para que no vibren",
      "Pedir un préstamo para pagar las facturas"
    ]
  },
  {
    enunciado: "¿Qué es la ergonomía en el taller?",
    correcta: "La adaptación de las herramientas y puestos de trabajo a las capacidades físicas del trabajador para evitar lesiones",
    incorrectas: [
      "El estudio de los gases que emiten las máquinas",
      "La técnica para ahorrar energía eléctrica"
    ]
  },
  {
    enunciado: "¿Qué es el 'historial de averías' de una máquina?",
    correcta: "El registro cronológico de todos los fallos, reparaciones y costes asociados a un equipo específico",
    incorrectas: [
      "El manual de instrucciones original del fabricante",
      "La biografía de los operarios que la han manejado"
    ]
  },
  {
    enunciado: "¿Qué es el mantenimiento legal?",
    correcta: "El conjunto de inspecciones obligatorias exigidas por la ley para equipos como calderas, ascensores o centros de transformación",
    incorrectas: [
      "Reparar solo las máquinas que tienen contrato de garantía",
      "El mantenimiento que se hace cumpliendo el horario de oficina"
    ]
  },
  {
    enunciado: "¿Qué función tiene un banco de pruebas en el taller?",
    correcta: "Verificar el correcto funcionamiento de un componente reparado (ej. un motor) antes de volver a montarlo en la máquina",
    incorrectas: [
      "Un lugar para que los técnicos se sienten a descansar",
      "Un armario para guardar los planos de los proyectos"
    ]
  },
  {
    enunciado: "¿Qué es la gestión de residuos industriales?",
    correcta: "La recogida y tratamiento adecuado de aceites usados, baterías y chatarra siguiendo la normativa medioambiental",
    incorrectas: [
      "Tirar las piezas viejas al contenedor de basura normal",
      "Vender las máquinas rotas como si funcionaran"
    ]
  }
];