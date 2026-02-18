// 50-prevencion-y-primeros-auxilios.js

var PREGUNTAS = [
  {
    enunciado: "¿Cuál es la primera acción que debe realizarse ante cualquier accidente deportivo según el protocolo PAS?",
    correcta: "Proteger el lugar del accidente para evitar nuevos riesgos para el accidentado y para nosotros mismos.",
    incorrectas: [
      "Avisar inmediatamente a los servicios de emergencia sin comprobar el estado del entorno.",
      "Socorrer a la víctima realizando maniobras de reanimación de forma directa e inmediata."
    ]
  },
  {
    enunciado: "En caso de un esguince agudo durante la clase de EF, ¿cuál es el protocolo de actuación inmediata recomendado (RICE/PRICE)?",
    correcta: "Protección, Reposo, Hielo (Ice), Compresión y Elevación del miembro afectado.",
    incorrectas: [
      "Aplicar calor intenso y realizar masajes profundos para aumentar el flujo sanguíneo.",
      "Someter la articulación a estiramientos máximos para comprobar el grado de rotura."
    ]
  },
  {
    enunciado: "¿Qué caracteriza a una 'Lujación' frente a un 'Esguince'?",
    correcta: "La luxación implica la pérdida permanente del contacto entre las superficies articulares; el esguince es una distensión ligamentosa.",
    incorrectas: [
      "El esguince es una fractura ósea completa y la luxación es solo un moretón cutáneo.",
      "La luxación se cura aplicando hielo y el esguince requiere cirugía obligatoria siempre."
    ]
  },
  {
    enunciado: "Ante una sospecha de lesión medular o traumatismo en la columna, la regla de oro es:",
    correcta: "No mover al accidentado bajo ninguna circunstancia, manteniendo el eje cabeza-cuello-tronco alineado.",
    incorrectas: [
      "Sentar al alumno rápidamente para que pueda respirar mejor y ver lo que sucede.",
      "Transportar al herido en brazos lo antes posible hasta el despacho de dirección."
    ]
  },
  {
    enunciado: "La 'Maniobra de Heimlich' se utiliza exclusivamente en casos de:",
    correcta: "Obstrucción completa de la vía aérea por un cuerpo extraño (atragantamiento).",
    incorrectas: [
      "Parada cardiorrespiratoria por ahogamiento en la piscina.",
      "Hemorragia nasal severa tras un golpe con un balón de baloncesto."
    ]
  },
  {
    enunciado: "En la RCP básica para adultos y adolescentes, la relación entre compresiones torácicas y ventilaciones es:",
    correcta: "30 compresiones seguidas de 2 ventilaciones.",
    incorrectas: [
      "15 compresiones y 15 ventilaciones de forma alterna.",
      "100 compresiones por cada ventilación profunda realizada."
    ]
  },
  {
    enunciado: "Una 'Fractura Abierta' es aquella en la que:",
    correcta: "Existe una herida que comunica el foco de la fractura con el exterior, aumentando el riesgo de infección.",
    incorrectas: [
      "El hueso se rompe en más de diez fragmentos pequeños pero no corta la piel.",
      "El alumno puede seguir caminando a pesar de tener el hueso totalmente roto."
    ]
  },
  {
    enunciado: "¿Cómo se debe actuar ante una 'Epistaxis' (hemorragia nasal)?",
    correcta: "Inclinar la cabeza ligeramente hacia adelante y presionar las alas de la nariz durante 5-10 minutos.",
    incorrectas: [
      "Echar la cabeza hacia atrás para que la sangre baje hacia el estómago.",
      "Introducir un objeto metálico frío en el oído contrario al de la hemorragia."
    ]
  },
  {
    enunciado: "El 'Síncope vasovagal' o desmayo común en el gimnasio requiere:",
    correcta: "Tumbar a la persona boca arriba con las piernas elevadas (posición de Trendelenburg) para favorecer el riego cerebral.",
    incorrectas: [
      "Darle de beber agua muy caliente con azúcar de forma inmediata mientras está inconsciente.",
      "Obligarle a ponerse de pie y caminar para que recupere el tono muscular pronto."
    ]
  },
  {
    enunciado: "¿Qué es el 'Grito de Socorro' o la cadena de supervivencia?",
    correcta: "La secuencia de acciones que optimiza la supervivencia tras una parada cardíaca (Reconocimiento, RCP, DEA, Soporte Avanzado).",
    incorrectas: [
      "El volumen máximo de voz que debe usar el profesor para pedir ayuda en el patio.",
      "La lista de números de teléfono de los familiares de todos los alumnos de la clase."
    ]
  },
  {
    enunciado: "Ante una quemadura por fricción con el suelo del pabellón, la medida inicial es:",
    correcta: "Refrescar la zona con abundante agua corriente templada o fría durante varios minutos.",
    incorrectas: [
      "Aplicar pasta de dientes o vinagre sobre la herida para aliviar el escozor.",
      "Explotar las ampollas que aparezcan para que el líquido salga lo antes posible."
    ]
  },
  {
    enunciado: "En la LOMLOE, la enseñanza de primeros auxilios busca:",
    correcta: "Fomentar la responsabilidad ciudadana y la capacidad de actuar con calma y eficacia ante emergencias.",
    incorrectas: [
      "Que los alumnos obtengan el título oficial de médico cirujano al terminar Secundaria.",
      "Evitar que el centro escolar tenga que contratar un seguro de accidentes para las salidas."
    ]
  },
  {
    enunciado: "Una 'Contusión de primer grado' se identifica por:",
    correcta: "La aparición de un hematoma o equimosis (cardenal) debido a la rotura de pequeños capilares.",
    incorrectas: [
      "La parálisis total del miembro afectado y la pérdida de sensibilidad térmica.",
      "La salida de líquido sinovial a través de la piel sin que haya sangre."
    ]
  },
  {
    enunciado: "El 'Golpe de Calor' es una urgencia médica caracterizada por:",
    correcta: "Elevación extrema de la temperatura corporal, piel seca y caliente, y alteración de la consciencia.",
    incorrectas: [
      "Un descenso brusco de la temperatura corporal por debajo de los 35 grados.",
      "La aparición de escalofríos intensos tras beber agua muy fría en verano."
    ]
  },
  {
    enunciado: "En la RCP, la frecuencia de las compresiones torácicas debe ser de:",
    correcta: "Entre 100 y 120 compresiones por minuto.",
    incorrectas: [
      "Exactamente 60 compresiones por minuto, siguiendo el latido normal en reposo.",
      "Más de 200 compresiones por minuto para asegurar que la sangre llegue al cerebro."
    ]
  },
  {
    enunciado: "Ante una herida inciso-contusa con sangrado abundante, la prioridad es:",
    correcta: "Realizar presión directa sobre la herida con gasas o paños limpios y mantener la presión.",
    incorrectas: [
      "Aplicar un torniquete en el cuello de forma preventiva para detener cualquier flujo.",
      "Lavar la herida con agua oxigenada y dejarla abierta al aire sin tapar."
    ]
  },
  {
    enunciado: "¿Qué es la 'Posición Lateral de Seguridad' (PLS)?",
    correcta: "La postura para víctimas inconscientes que respiran, evitando la aspiración de vómito y la caída de la lengua.",
    incorrectas: [
      "La forma en que deben sentarse los alumnos en el banquillo para evitar dolores de espalda.",
      "La posición de salida en las carreras de velocidad de atletismo escolar."
    ]
  },
  {
    enunciado: "En un traumatismo craneoencefálico, es señal de alarma inmediata:",
    correcta: "La pérdida de memoria, vómitos en escopeta, somnolencia excesiva o pupilas desiguales.",
    incorrectas: [
      "Que el alumno sienta un ligero dolor en la zona del golpe que desaparece al minuto.",
      "Tener un pequeño chichón en la frente que no cambia de color ni de tamaño."
    ]
  },
  {
    enunciado: "El uso del DEA (Desfibrilador Externo Semiautomático) en centros escolares:",
    correcta: "Es fundamental, ya que el aparato analiza el ritmo cardíaco e indica los pasos a seguir de forma guiada.",
    incorrectas: [
      "Está prohibido para personas que no tengan la carrera de medicina terminada.",
      "Solo puede usarse en adultos de más de 100 kilos de peso corporal."
    ]
  },
  {
    enunciado: "¿Cuál es el tratamiento inicial para un calambre muscular intenso?",
    correcta: "Estiramiento suave y progresivo del músculo afectado e hidratación adecuada.",
    incorrectas: [
      "Golpear con fuerza el músculo para que el nervio se relaje por el impacto.",
      "Aplicar vendajes muy apretados que impidan cualquier movimiento del miembro."
    ]
  },
  {
    enunciado: "Un 'Tirón Muscular' o rotura de fibras requiere didácticamente:",
    correcta: "Cese inmediato de la actividad, aplicación de frío y derivación médica para valorar el grado.",
    incorrectas: [
      "Seguir realizando el ejercicio con más intensidad para 'calentar' la rotura.",
      "Tomar bebidas energéticas con mucho azúcar para que el músculo se pegue solo."
    ]
  },
  {
    enunciado: "Ante una lipotimia por hipoglucemia (bajada de azúcar), si el alumno está consciente, se debe:",
    correcta: "Suministrar bebidas azucaradas o alimentos de absorción rápida.",
    incorrectas: [
      "Hacerle correr un sprint de 50 metros para activar su metabolismo.",
      "Suministrarle una pastilla de insulina de forma inmediata sin consultar."
    ]
  },
  {
    enunciado: "La 'Seguridad Activa' en Educación Física incluye:",
    correcta: "El calentamiento correcto, el respeto a las normas y el uso de materiales protegidos.",
    incorrectas: [
      "La contratación de una ambulancia privada que esté en la puerta del instituto cada día.",
      "Llevar un casco de protección durante todas las clases de expresión corporal."
    ]
  },
  {
    enunciado: "En caso de una fractura de extremidad, la inmovilización debe:",
    correcta: "Abarcar las articulaciones inmediatamente superior e inferior al foco de la fractura.",
    incorrectas: [
      "Intentar colocar el hueso en su sitio mediante tirones fuertes antes de vendar.",
      "Dejar el miembro totalmente libre para que el alumno pueda moverlo si le duele."
    ]
  },
  {
    enunciado: "¿Qué es un 'Shock Anafiláctico' en el contexto escolar?",
    correcta: "Una reacción alérgica grave y generalizada que puede comprometer la respiración y la circulación.",
    incorrectas: [
      "El estado de miedo que siente un alumno antes de realizar un examen de evaluación.",
      "Una descarga eléctrica producida por tocar un enchufe en mal estado en el gimnasio."
    ]
  },
  {
    enunciado: "Ante una herida con un objeto clavado, lo correcto es:",
    correcta: "No extraer el objeto, fijarlo para que no se mueva y trasladar a un centro sanitario.",
    incorrectas: [
      "Tirar con fuerza del objeto para sacarlo lo antes posible y limpiar la herida.",
      "Empujar el objeto más hacia adentro para que no estorbe durante el traslado."
    ]
  },
  {
    enunciado: "La 'Insolación' se diferencia del agotamiento por calor en que:",
    correcta: "Existe un fallo en los mecanismos de termorregulación y la temperatura interna sube peligrosamente.",
    incorrectas: [
      "La insolación solo ocurre si el alumno no lleva gafas de sol de marca.",
      "El agotamiento por calor solo afecta a los alumnos que tienen el pelo rubio."
    ]
  },
  {
    enunciado: "En la RCP para niños y lactantes, las compresiones se realizan:",
    correcta: "Con una sola mano o con dos dedos (según tamaño), hundiendo un tercio del diámetro del tórax.",
    incorrectas: [
      "Con todo el peso del cuerpo del reanimador utilizando ambas manos entrelazadas.",
      "Pellizcando suavemente las mejillas del niño hasta que se despierte y llore."
    ]
  },
  {
    enunciado: "El vendaje funcional (taping) tiene como objetivo:",
    correcta: "Limitar selectivamente el movimiento que produce dolor, permitiendo el resto de la movilidad articular.",
    incorrectas: [
      "Inmovilizar totalmente la articulación como si fuera una escayola de yeso.",
      "Aumentar la temperatura de la piel para que el vello crezca más rápido."
    ]
  },
  {
    enunciado: "Ante un traumatismo dental con pérdida de la pieza (avulsión), se recomienda:",
    correcta: "Conservar el diente en leche, suero salino o dentro de la propia boca (saliva) y acudir al dentista urgente.",
    incorrectas: [
      "Lavar el diente con lejía o alcohol y frotarlo con un cepillo de cerdas duras.",
      "Tirar el diente a la basura porque ya no tiene ninguna utilidad médica."
    ]
  },
  {
    enunciado: "¿Cuál es el factor de riesgo intrínseco más común en las lesiones deportivas escolares?",
    correcta: "La falta de condición física adecuada o una técnica de ejecución incorrecta.",
    incorrectas: [
      "El color del pavimento del gimnasio o la marca de las redes de las porterías.",
      "El signo del zodiaco del alumno o la fase lunar durante la clase de EF."
    ]
  },
  {
    enunciado: "La 'Hiptermia' en actividades en el medio natural se combate:",
    correcta: "Retirando ropa húmeda, abrigando con mantas térmicas y suministrando bebidas calientes si está consciente.",
    incorrectas: [
      "Frotando con nieve las extremidades para activar la circulación por contraste.",
      "Obligando a la víctima a correr a máxima velocidad para que entre en calor."
    ]
  },
  {
    enunciado: "¿Qué es el 'Check-list' de seguridad en instalaciones deportivas?",
    correcta: "Una lista de verificación para revisar periódicamente el estado de anclajes, pavimentos y materiales.",
    incorrectas: [
      "El registro de los alumnos que se han olvidado el chándal en su casa.",
      "La lista de la compra de los productos de limpieza para el pabellón."
    ]
  },
  {
    enunciado: "Ante una crisis convulsiva (ataque epiléptico), la prioridad es:",
    correcta: "Retirar objetos peligrosos de alrededor y proteger la cabeza; no introducir nada en la boca.",
    incorrectas: [
      "Sujetar con fuerza las extremidades para impedir que el alumno se mueva.",
      "Intentar sacar la lengua hacia afuera utilizando una cuchara de metal o un lápiz."
    ]
  },
  {
    enunciado: "Un 'Hematoma Subungueal' (sangre bajo la uña) por un pisotón requiere:",
    correcta: "Aplicar frío y, si el dolor es muy intenso por presión, derivar para realizar un drenaje médico.",
    incorrectas: [
      "Arrancar la uña de raíz utilizando unas alicates de bricolaje.",
      "Pintar la uña de negro para que no se note la mancha de sangre."
    ]
  },
  {
    enunciado: "El 'Botiquín Escolar' debe estar situado en un lugar:",
    correcta: "Accesible, señalizado, conocido por todos y protegido de la luz y el calor excesivo.",
    incorrectas: [
      "Bajo llave en una caja fuerte dentro del despacho del director al que nadie tiene acceso.",
      "Enterrado bajo la arena del foso de saltos de longitud por seguridad."
    ]
  },
  {
    enunciado: "La 'Prevención Primaria' en Educación Física consiste en:",
    correcta: "Actuar antes de que se produzca la lesión mediante la planificación y la educación del alumnado.",
    incorrectas: [
      "Realizar la rehabilitación de un alumno que ya ha sido operado de la rodilla.",
      "Llamar a la ambulancia cuando el accidente ya ha ocurrido en el patio."
    ]
  },
  {
    enunciado: "¿Cómo afecta la fatiga al riesgo de lesión?",
    correcta: "Aumenta el riesgo debido a la pérdida de control neuromuscular y la disminución de la atención.",
    incorrectas: [
      "Reduce el riesgo porque el cuerpo está demasiado cansado para moverse rápido.",
      "No influye en absoluto; las lesiones son puramente aleatorias y dependen de la suerte."
    ]
  },
  {
    enunciado: "Ante un traumatismo ocular (golpe en el ojo), se debe:",
    correcta: "Tapar ambos ojos para minimizar el movimiento ocular y trasladar a urgencias.",
    incorrectas: [
      "Presionar con fuerza el globo ocular para que el líquido interno no se escape.",
      "Echar gotas de limón o vinagre para limpiar cualquier impureza del ojo."
    ]
  },
  {
    enunciado: "El fin último de los primeros auxilios es:",
    correcta: "Conservar la vida, evitar complicaciones, ayudar a la recuperación y asegurar el traslado sanitario.",
    incorrectas: [
      "Demostrar que el profesor de EF sabe más medicina que el enfermero del centro.",
      "Sustituir al hospital y curar todas las enfermedades de los alumnos en el instituto."
    ]
  }
];