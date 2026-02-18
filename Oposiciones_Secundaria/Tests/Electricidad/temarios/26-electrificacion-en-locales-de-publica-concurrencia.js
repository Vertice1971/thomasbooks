// 26-electrificacion-en-locales-de-publica-concurrencia.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué ITC del REBT define las condiciones para locales de pública concurrencia?",
    correcta: "La ITC-BT-28",
    incorrectas: [
      "La ITC-BT-25",
      "La ITC-BT-18"
    ]
  },
  {
    enunciado: "¿Qué se considera un 'local de pública concurrencia' según el REBT?",
    correcta: "Locales de espectáculos (cines, teatros), reunión (bares, hoteles), sanitarios (hospitales) y cualquier otro con alta ocupación (>50 o >100 personas según tipo)",
    incorrectas: [
      "Cualquier local donde entre gente, incluido un kiosco pequeño",
      "Solo los estadios de fútbol"
    ]
  },
  {
    enunciado: "¿Qué suministro complementario o de seguridad es obligatorio en estos locales?",
    correcta: "Un suministro que garantice el funcionamiento de servicios de seguridad (alumbrado emergencia, alarmas) ante fallo del suministro normal (ej. baterías, generador)",
    incorrectas: [
      "Un suministro de agua potable extra",
      "Una conexión a internet por satélite"
    ]
  },
  {
    enunciado: "¿Qué es el Alumbrado de Emergencia?",
    correcta: "El sistema de iluminación que entra en funcionamiento automáticamente cuando falla la tensión de red (>70% caída) para permitir la evacuación segura",
    incorrectas: [
      "Las luces decorativas del bar",
      "El alumbrado de la calle"
    ]
  },
  {
    enunciado: "¿Qué tipos de alumbrado de emergencia existen?",
    correcta: "Alumbrado de seguridad (evacuación, antipánico, zonas alto riesgo) y Alumbrado de reemplazamiento (para continuar actividad, opcional)",
    incorrectas: [
      "Alumbrado de Navidad y de Semana Santa",
      "Alumbrado de día y de noche"
    ]
  },
  {
    enunciado: "¿Qué autonomía mínima debe tener el alumbrado de evacuación estándar?",
    correcta: "1 hora",
    incorrectas: [
      "15 minutos",
      "5 horas"
    ]
  },
  {
    enunciado: "¿Qué iluminancia mínima (lux) se exige en el eje de las vías de evacuación (suelo)?",
    correcta: "1 lux",
    incorrectas: [
      "100 lux",
      "0.1 lux"
    ]
  },
  {
    enunciado: "¿Qué clase de reacción al fuego deben tener los cables instalados en estos locales (según CPR)?",
    correcta: "Clase Cca-s1b,d1,a1 (Libres de halógenos, baja emisión de humos y opacidad, no propagadores incendio)",
    incorrectas: [
      "Clase Eca (PVC normal)",
      "Clase Pirotécnica"
    ]
  },
  {
    enunciado: "¿Los cables pueden instalarse directamente empotrados sin tubo?",
    correcta: "No, deben ir bajo tubo o conducto protector, o ser cables armados si van vistos (aunque se prefieren libres de halógenos siempre)",
    incorrectas: [
      "Sí, si son cables verdes",
      "Sí, para ahorrar costes"
    ]
  },
  {
    enunciado: "¿Qué es obligatorio respecto al cuadro general de protección en estos locales?",
    correcta: "Debe ser accesible solo a personal autorizado, estar en zona no accesible al público y preferiblemente fuera de las vías de evacuación, o tener puerta con llave",
    incorrectas: [
      "Debe estar en medio de la pista de baile",
      "Debe ser transparente"
    ]
  },
  {
    enunciado: "¿Cuántos circuitos de alumbrado normales debe haber como mínimo?",
    correcta: "Al menos 3 circuitos independientes, repartidos de forma que el fallo de uno no deje a oscuras toda una zona (corte en 'tablero de ajedrez')",
    incorrectas: [
      "Uno solo es suficiente",
      "100 circuitos"
    ]
  },
  {
    enunciado: "¿Es obligatorio instalar Interruptor Diferencial?",
    correcta: "Sí, la protección contra contactos indirectos y directos (adicional) es obligatoria",
    incorrectas: [
      "No, si hay toma de tierra no hace falta",
      "Solo si hay humedad"
    ]
  },
  {
    enunciado: "¿Qué es el alumbrado antipánico o de ambiente?",
    correcta: "Alumbrado para evitar situaciones de pánico en zonas abiertas, proporcionando 0.5 lux hasta 1 hora para permitir llegar a las vías de evacuación",
    incorrectas: [
      "Luces estroboscópicas",
      "Luces de colores relajantes"
    ]
  },
  {
    enunciado: "¿Dónde se deben colocar las luces de emergencia?",
    correcta: "Sobre cada puerta de salida, en cambios de nivel (escaleras), cambios de dirección, intersecciones y cerca de equipos de extinción y cuadros",
    incorrectas: [
      "Escondidas debajo de las mesas",
      "Solo en la entrada principal"
    ]
  },
  {
    enunciado: "¿Qué mantenimiento requieren las luces de emergencia?",
    correcta: "Verificación periódica del encendido ante fallo de red (mensual/anual) y duración de baterías (descarga completa anual)",
    incorrectas: [
      "Cambiar las bombillas cada semana",
      "Ninguno hasta que se fundan"
    ]
  },
  {
    enunciado: "¿Qué es el suministro de reserva?",
    correcta: "Suministro dedicado a mantener la actividad normal del local (no solo seguridad) ante fallos; suele ser un grupo electrógeno potente",
    incorrectas: [
      "Tener velas a mano",
      "El suministro del vecino"
    ]
  },
  {
    enunciado: "¿Qué es una fuente propia de energía según el REBT?",
    correcta: "Generador (grupo electrógeno) o baterías de acumuladores independientes de la red general y automáticos",
    incorrectas: [
      "Una bicicleta estática con dinamo",
      "Paneles solares sin baterías"
    ]
  },
  {
    enunciado: "¿Qué requisito tienen los locales de 'alto riesgo' (ej. zonas de operación en hospitales)?",
    correcta: "Requieren suministro especial (ej. < 0.5s de corte), quirófanos con transformador de aislamiento y SAI",
    incorrectas: [
      "Requieren portero físico",
      "Requieren cables de oro"
    ]
  },
  {
    enunciado: "¿Pueden usarse tubos de PVC normales en estos locales?",
    correcta: "Deben ser tubos libres de halógenos y con baja emisión de humos (L.H.) para no intoxicar a la gente en caso de incendio",
    incorrectas: [
      "Sí, el PVC es lo mejor",
      "Solo si se pintan de rojo"
    ]
  },
  {
    enunciado: "¿Qué es el alumbrado de zonas de alto riesgo?",
    correcta: "El destinado a garantizar la seguridad de personas ocupadas en actividades peligrosas o paradas de procesos (mínimo 15 lux o 10% iluminancia normal)",
    incorrectas: [
      "Iluminar carteles de peligro",
      "Iluminar la caja fuerte"
    ]
  },
  {
    enunciado: "¿Qué protección IP mínima deben tener las luminarias de emergencia?",
    correcta: "Generalmente IP44 en locales húmedos o pública concurrencia general, aunque depende de la clasificación del local específico",
    incorrectas: [
      "IP00",
      "IP68"
    ]
  },
  {
    enunciado: "¿Un restaurante de 60 metros cuadrados y aforo 30 personas es pública concurrencia?",
    correcta: "Estrictamente por REBT, los restaurantes/bares lo son siempre (reunión), pero a veces se aplica el límite de 40 personas. Normativamente SÍ es l.p.c.",
    incorrectas: [
      "No, es una vivienda",
      "Solo si tiene música"
    ]
  },
  {
    enunciado: "¿Qué se exige a las canalizaciones eléctricas prefabricadas en estos locales?",
    correcta: "Deben cumplir la norma de resistencia al fuego y no propagación (ensayos de hilo incandescente)",
    incorrectas: [
      "Que sean de madera",
      "Que sean transparentes"
    ]
  },
  {
    enunciado: "¿Qué es un local de reunión según el reglamento?",
    correcta: "Auditorios, salas de fiesta, bares, cafeterías, bibliotecas, museos, templos, etc.",
    incorrectas: [
      "El salón de tu casa",
      "Un garaje privado"
    ]
  },
  {
    enunciado: "¿Qué es un local comercial según el reglamento?",
    correcta: "Tiendas, centros comerciales, mercados, supermercados...",
    incorrectas: [
      "Una fábrica de coches",
      "Un taller mecánico privado"
    ]
  },
  {
    enunciado: "¿Quién debe realizar la inspección inicial de estos locales?",
    correcta: "Un Organismo de Control Autorizado (OCA), además de la instalación por instalador autorizado categoría especialista",
    incorrectas: [
      "El dueño del local",
      "El ayuntamiento exclusivamente"
    ]
  },
  {
    enunciado: "¿Con qué periodicidad se deben inspeccionar por OCA estos locales?",
    correcta: "Cada 5 años",
    incorrectas: [
      "Cada 10 años",
      "Nunca"
    ]
  },
  {
    enunciado: "¿Qué es el telemando en luminarias de emergencia?",
    correcta: "Un sistema que permite ponerlas en 'reposo' (apagadas) cuando se corta la luz voluntariamente (cierre del local) para no descargar baterías innecesariamente",
    incorrectas: [
      "Un mando para cambiarles el color",
      "Un videojuego"
    ]
  },
  {
    enunciado: "¿Qué altura mínima deben tener los cables aéreos en ferias o stands?",
    correcta: "Fuera del alcance del público (ej. > 2.5m) o protegidos mecánicamente",
    incorrectas: [
      "Pueden ir por el suelo sin protección",
      "1 metro"
    ]
  },
  {
    enunciado: "¿Qué es el cuadro de conmutación automática (ATS) para generador?",
    correcta: "El dispositivo que detecta el fallo de red, arranca el grupo electrógeno y conmuta la alimentación del local a este (y viceversa al volver)",
    incorrectas: [
      "Un interruptor manual de palanca",
      "Un reloj temporizador"
    ]
  },
  {
    enunciado: "¿Puede usarse el conductor neutro como conductor de protección (sistema TN-C)?",
    correcta: "No, en locales de pública concurrencia está prohibido el esquema TN-C; debe ser TN-S o TT para seguridad",
    incorrectas: [
      "Sí, es más barato",
      "Sí, pero solo en el baño"
    ]
  },
  {
    enunciado: "¿Cuándo es obligatorio el proyecto firmado por ingeniero?",
    correcta: "Siempre en locales de pública concurrencia (sin límite de potencia inferior claro en general, aunque hay matices por CCAA, la norma general REBT lo exige agrupado)",
    incorrectas: [
      "Solo si tiene más de 100 kW",
      "Nunca, vale con memoria técnica"
    ]
  },
  {
    enunciado: "¿Los rótulos luminosos de salida deben estar siempre encendidos?",
    correcta: "Sí, permanentemente (luminarias de señalización) o encenderse instantáneamente al fallar el alumbrado normal",
    incorrectas: [
      "No, solo cuando hay fuego real",
      "Solo de noche"
    ]
  },
  {
    enunciado: "¿Qué es la 'ocupación prevista'?",
    correcta: "El cálculo de personas (aforo) basado en la superficie útil (ej. 1 persona/0.8 m²) que determina si se aplica la ITC-BT-28 y el número de salidas",
    incorrectas: [
      "El número de empleados",
      "La gente que cabe apretada"
    ]
  }
];
