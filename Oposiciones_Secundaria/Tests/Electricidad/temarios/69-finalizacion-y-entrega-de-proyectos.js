// 69-finalizacion-y-entrega-de-proyectos.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué documento acredita que la obra se ha ejecutado conforme al proyecto y a la normativa vigente?",
    correcta: "Certificado Final de Obra (CFO)",
    incorrectas: [
      "Acta de Replanteo",
      "Pliego de Condiciones"
    ]
  },
  {
    enunciado: "¿Quiénes deben firmar obligatoriamente el Certificado Final de Obra?",
    correcta: "El Director de Obra y el Director de Ejecución de la Obra",
    incorrectas: [
      "Solo el constructor",
      "El promotor y el ayuntamiento"
    ]
  },
  {
    enunciado: "¿Qué es el Acta de Recepción de la Obra?",
    correcta: "El documento mediante el cual el constructor entrega la obra terminada al promotor y este la acepta",
    incorrectas: [
      "La factura final de la compañía eléctrica",
      "El permiso de ocupación de la vía pública"
    ]
  },
  {
    enunciado: "¿A partir de qué momento empiezan a contar los plazos de garantía de la Ley de Ordenación de la Edificación (LOE)?",
    correcta: "Desde la fecha de firma del Acta de Recepción sin reservas (o cuando se subsanen estas)",
    incorrectas: [
      "Desde que se empieza a dibujar el proyecto",
      "Desde que el cliente paga el primer plazo"
    ]
  },
  {
    enunciado: "¿Qué son los planos 'As-Built'?",
    correcta: "Planos que reflejan exactamente cómo ha quedado la instalación, incluyendo todas las modificaciones realizadas durante la ejecución",
    incorrectas: [
      "Planos de demolición",
      "Esquemas teóricos antes de empezar la obra"
    ]
  },
  {
    enunciado: "¿Qué debe incluir el 'Manual de Uso y Mantenimiento' de una instalación?",
    correcta: "Instrucciones de manejo, periodicidad de revisiones, esquemas finales y contactos de los instaladores",
    incorrectas: [
      "Únicamente el presupuesto desglosado",
      "La lista de herramientas que usó el albañil"
    ]
  },
  {
    enunciado: "¿Qué es la Liquidación Final de Obra?",
    correcta: "El ajuste económico definitivo donde se valoran las unidades de obra realmente ejecutadas frente a las proyectadas",
    incorrectas: [
      "El proceso de limpieza de la planta tras la obra",
      "La venta de los materiales sobrantes a otra empresa"
    ]
  },
  {
    enunciado: "¿Qué responsabilidad tiene el técnico sobre los defectos de acabado según la LOE?",
    correcta: "1 año de garantía",
    incorrectas: [
      "10 años de garantía",
      "No tiene ninguna responsabilidad"
    ]
  },
  {
    enunciado: "¿Qué plazo de garantía establece la LOE para defectos que afecten a la habitabilidad (ej. humedades, falta de aislamiento)?",
    correcta: "3 años",
    incorrectas: [
      "1 año",
      "25 años"
    ]
  },
  {
    enunciado: "¿Qué plazo de garantía establece la LOE para defectos estructurales que comprometan la resistencia del edificio?",
    correcta: "10 años",
    incorrectas: [
      "2 años",
      "5 años"
    ]
  },
  {
    enunciado: "¿Qué documento es imprescindible para que el usuario pueda contratar el suministro eléctrico con la distribuidora?",
    correcta: "Boletín Eléctrico (Certificado de Instalación Eléctrica - CIE)",
    incorrectas: [
      "El plano de situación",
      "La memoria descriptiva"
    ]
  },
  {
    enunciado: "¿Qué función tiene el Libro del Edificio?",
    correcta: "Recopilar toda la documentación técnica, jurídica y administrativa del edificio para entregarla a los usuarios finales",
    incorrectas: [
      "Llevar el registro de las visitas a la obra",
      "Anotar las horas de trabajo de los empleados"
    ]
  },
  {
    enunciado: "¿Qué ocurre si en el Acta de Recepción se anotan 'reservas'?",
    correcta: "El constructor debe subsanar los defectos indicados en el plazo pactado antes de la recepción definitiva",
    incorrectas: [
      "La obra queda anulada y hay que demolerla",
      "El promotor no tiene que pagar nada de la obra"
    ]
  },
  {
    enunciado: "¿Qué es el Certificado de Eficiencia Energética final?",
    correcta: "Documento que verifica la calificación energética real alcanzada por el edificio una vez construido",
    incorrectas: [
      "Un recibo de la luz barato",
      "La factura de los paneles solares"
    ]
  },
  {
    enunciado: "¿Qué es la Auditoría Energética en la entrega de grandes proyectos?",
    correcta: "Un examen sistemático para verificar que los sistemas de climatización e iluminación cumplen los objetivos de ahorro previstos",
    incorrectas: [
      "Una inspección de Hacienda sobre los gastos de la obra",
      "Contar cuántas bombillas hay en total"
    ]
  },
  {
    enunciado: "¿Qué es el Dossier de Calidad?",
    correcta: "Conjunto de certificados de los materiales instalados y resultados de los ensayos realizados durante la obra",
    incorrectas: [
      "Un catálogo de muebles para la oficina",
      "La biografía de los ingenieros del proyecto"
    ]
  },
  {
    enunciado: "¿Qué es la Recepción Tácita?",
    correcta: "Cuando el promotor toma posesión de la obra y empieza a usarla sin haber firmado el acta, lo que puede implicar la aceptación de la misma",
    incorrectas: [
      "Una recepción que se hace en silencio",
      "Cuando el ayuntamiento confisca la obra"
    ]
  },
  {
    enunciado: "¿Qué importancia tiene el visado del Certificado Final de Obra?",
    correcta: "Es un requisito administrativo para garantizar la identidad del técnico y su habilitación profesional ante la administración",
    incorrectas: [
      "Asegura que el edificio es de color blanco",
      "Sirve para que el técnico cobre el doble"
    ]
  },
  {
    enunciado: "¿Para qué sirve el Protocolo de Pruebas de Funcionamiento?",
    correcta: "Para documentar que todos los sistemas (incendios, megafonía, potencia) han sido probados y funcionan correctamente antes de la entrega",
    incorrectas: [
      "Para enseñar a los alumnos cómo se hace un cortocircuito",
      "Es una lista de reproducción de música para la inauguración"
    ]
  },
  {
    enunciado: "¿Qué es la retención de garantía en el pago final?",
    correcta: "Un porcentaje del presupuesto (habitualmente el 5%) que el promotor retiene al constructor durante un año para cubrir posibles defectos",
    incorrectas: [
      "Una multa por llegar tarde a trabajar",
      "El IVA que se queda el Estado"
    ]
  }
];