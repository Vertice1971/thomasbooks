// temarios/15-Formacion-y-sentido-de-la-idea-de-ente.js
var PREGUNTAS = [
  {
    enunciado: "El ente se entiende en filosofía como lo que es, es decir, todo aquello que posee ser.",
    correcta: "Verdadero.",
    incorrectas: [
      "Falso, el ente se define como lo que no existe.",
      "Falso, el ente se limita solo a las sustancias materiales."
    ]
  },
  {
    enunciado: "El ser y el ente son conceptos relacionados pero distintos.",
    correcta: "El ente es cada cosa existente, el ser es el fundamento común.",
    incorrectas: [
      "El ente y el ser son sinónimos absolutos sin matices.",
      "El ser se refiere únicamente a objetos sensibles."
    ]
  },
  {
    enunciado: "La metafísica estudia el ente en cuanto ente.",
    correcta: "La metafísica se ocupa de los fundamentos últimos del ser de los entes.",
    incorrectas: [
      "La metafísica estudia únicamente fenómenos empíricos.",
      "La metafísica se limita a la lógica formal."
    ]
  },
  {
    enunciado: "Parménides es considerado uno de los primeros en formular el problema del ser.",
    correcta: "Afirmó que el ser es y el no ser no es.",
    incorrectas: [
      "Negó la posibilidad de hablar del ser.",
      "Defendió que el ser es múltiple y cambiante."
    ]
  },
  {
    enunciado: "En Aristóteles, la sustancia ocupa el lugar principal en la clasificación de los entes.",
    correcta: "La sustancia es el ente primero y fundamental en su metafísica.",
    incorrectas: [
      "La sustancia es un accidente subordinado.",
      "La sustancia es irrelevante en su filosofía."
    ]
  },
  {
    enunciado: "La escolástica medieval desarrolló la idea de ente a través de la analogía del ser.",
    correcta: "Santo Tomás de Aquino habló de la analogía como modo de predicar el ser.",
    incorrectas: [
      "La escolástica negó toda posibilidad de hablar del ente.",
      "La analogía del ser fue rechazada por completo en la Edad Media."
    ]
  },
  {
    enunciado: "La analogía del ser en Tomás de Aquino significa que el ser se predica en sentidos ni unívocos ni equívocos.",
    correcta: "El ser se predica de manera analógica en diferentes realidades.",
    incorrectas: [
      "El ser se predica exactamente igual en todos los casos.",
      "El ser no se predica nunca de manera comparable."
    ]
  },
  {
    enunciado: "El ente entitativo se refiere a la esencia de las cosas, mientras que el ente existencial apunta a su acto de existir.",
    correcta: "La distinción separa lo que algo es de su hecho de ser.",
    incorrectas: [
      "Ambos conceptos significan lo mismo sin diferencias.",
      "El ente existencial se limita a las categorías lógicas."
    ]
  },
  {
    enunciado: "Las categorías aristotélicas expresan modos fundamentales del ente.",
    correcta: "Incluyen sustancia, cantidad, cualidad, relación, entre otras.",
    incorrectas: [
      "Son convenciones lingüísticas sin vínculo con la realidad.",
      "Son principios matemáticos sin relación ontológica."
    ]
  },
  {
    enunciado: "El ente plural y el ente uno han sido objeto de debate filosófico.",
    correcta: "Se discute si el ente es múltiple en sus manifestaciones o uno en su fundamento.",
    incorrectas: [
      "Nunca se discutió la unidad o pluralidad del ente.",
      "El ente siempre se entendió solo como múltiple."
    ]
  },
  {
    enunciado: "La universalidad del ente significa que el concepto de ser se aplica a todo lo que existe.",
    correcta: "El ente no se restringe a un ámbito particular.",
    incorrectas: [
      "La universalidad del ente se limita a las sustancias materiales.",
      "El ente no puede predicarse de todo lo existente."
    ]
  },
  {
    enunciado: "En la modernidad, la concepción del ente fue influida por el racionalismo y el empirismo.",
    correcta: "Ambas corrientes aportaron nuevas perspectivas sobre la realidad.",
    incorrectas: [
      "Se rechazó cualquier reflexión sobre el ente.",
      "El ente se redujo a un concepto meramente religioso."
    ]
  },
  {
    enunciado: "La filosofía contemporánea ha criticado y reformulado el concepto de ente.",
    correcta: "Se ha cuestionado la validez de la metafísica tradicional.",
    incorrectas: [
      "Se mantiene sin cambios desde Aristóteles.",
      "Se eliminó completamente de la filosofía actual."
    ]
  },
  {
    enunciado: "Heidegger distinguió entre el ser y los entes en su ontología fundamental.",
    correcta: "El ser es la condición de posibilidad de todo ente.",
    incorrectas: [
      "El ser es idéntico a los entes sin distinción.",
      "El ente se reduce a una categoría psicológica."
    ]
  },
  {
    enunciado: "El ente como objeto de la metafísica significa que toda la disciplina se orienta hacia su estudio.",
    correcta: "La metafísica busca comprender el ser de los entes.",
    incorrectas: [
      "El ente no es relevante para la metafísica.",
      "El ente es objeto exclusivo de las ciencias naturales."
    ]
  },
  {
    enunciado: "En ontología, se diferencia el sentido ontológico y el sentido metafísico del ente.",
    correcta: "Ontológico se refiere a la estructura del ser; metafísico a su fundamentación última.",
    incorrectas: [
      "Ambos sentidos son idénticos sin distinción.",
      "El sentido metafísico equivale a una categoría lógica."
    ]
  },
  {
    enunciado: "La clasificación del ente puede hacerse según categorías, modos o grados de ser.",
    correcta: "Diversas tradiciones han propuesto clasificaciones múltiples.",
    incorrectas: [
      "Siempre se clasificó de la misma forma sin variantes.",
      "El ente nunca fue clasificado filosóficamente."
    ]
  },
  {
    enunciado: "El estudio del ente permite abordar la diferencia entre esencia y existencia.",
    correcta: "Esencia es lo que una cosa es; existencia es el hecho de que sea.",
    incorrectas: [
      "Esencia y existencia son términos idénticos.",
      "La existencia se define como mera abstracción lógica."
    ]
  },
  {
    enunciado: "En la filosofía analítica se ha cuestionado el uso del término ente.",
    correcta: "Se considera problemático en el análisis del lenguaje y la lógica.",
    incorrectas: [
      "Se acepta sin crítica desde el empirismo lógico.",
      "Nunca se ha cuestionado en la tradición contemporánea."
    ]
  },
  {
    enunciado: "El ente es un concepto fundamental para comprender la condición humana y el sentido del mundo.",
    correcta: "Su estudio trasciende lo empírico e ilumina la reflexión filosófica.",
    incorrectas: [
      "El ente carece de relevancia para la reflexión filosófica.",
      "El ente es un concepto propio de las ciencias naturales."
    ]
  },
  {
    enunciado: "Parménides defendió que el ser es uno, eterno e inmutable.",
    correcta: "El cambio y la multiplicidad eran ilusorios para él.",
    incorrectas: [
      "Parménides defendió que el ser es múltiple y cambiante.",
      "Parménides negó que pudiera hablarse del ser."
    ]
  },
  {
    enunciado: "Aristóteles criticó la visión parmenídea del ser absoluto.",
    correcta: "Propuso una concepción dinámica basada en acto y potencia.",
    incorrectas: [
      "Aceptó sin crítica la tesis del ser único e inmutable.",
      "Negó toda reflexión sobre el ser."
    ]
  },
  {
    enunciado: "Santo Tomás vinculó el ente con la noción de participación en el ser divino.",
    correcta: "Todo ente finito participa del ser como acto de existir recibido de Dios.",
    incorrectas: [
      "El ente es autosuficiente y no depende de Dios.",
      "El ente se reduce a una categoría matemática."
    ]
  },
  {
    enunciado: "El ente uno expresa la unidad fundamental del ser en toda realidad.",
    correcta: "La unidad es un atributo trascendental del ente.",
    incorrectas: [
      "La unidad se entiende como suma de partes sin relación ontológica.",
      "El ente nunca se concibió como uno."
    ]
  },
  {
    enunciado: "La multiplicidad de los entes genera la pregunta sobre su fundamento común.",
    correcta: "El problema es cómo la pluralidad se remite a la unidad del ser.",
    incorrectas: [
      "La pluralidad de entes nunca ha sido problema filosófico.",
      "La pluralidad equivale a la negación del ser."
    ]
  },
  {
    enunciado: "El ente universal se predica de todo lo que es.",
    correcta: "La universalidad del ente es principio básico de la metafísica.",
    incorrectas: [
      "El ente universal solo se predica de lo material.",
      "El ente universal nunca se predica de las cosas."
    ]
  },
  {
    enunciado: "En filosofía moderna, el problema del ente se reformula con relación a la subjetividad.",
    correcta: "Se estudia la relación entre ser, conciencia y representación.",
    incorrectas: [
      "Se abandona toda reflexión sobre el ser.",
      "El ente se reduce a hechos de la biología."
    ]
  },
  {
    enunciado: "La diferencia ontológica en Heidegger separa ser y ente.",
    correcta: "El ser no es un ente, sino condición de posibilidad de los entes.",
    incorrectas: [
      "El ser y el ente son idénticos en su planteamiento.",
      "El ser es una cosa entre otras."
    ]
  },
  {
    enunciado: "El ente existencial en la tradición contemporánea se asocia al análisis de la existencia humana.",
    correcta: "Autores como Heidegger y Sartre lo vinculan con la facticidad y libertad.",
    incorrectas: [
      "El ente existencial se limita a fórmulas matemáticas.",
      "El ente existencial es idéntico a la sustancia aristotélica."
    ]
  },
  {
    enunciado: "La filosofía posmoderna ha cuestionado el sentido universal del ente.",
    correcta: "Afirma la fragmentación y la imposibilidad de un fundamento único.",
    incorrectas: [
      "Refuerza el ente como fundamento único e indiscutible.",
      "Acepta la metafísica tradicional sin crítica."
    ]
  },
  {
    enunciado: "El ente se vincula con los trascendentales: unidad, verdad y bondad.",
    correcta: "Se consideran propiedades que acompañan al ser en toda realidad.",
    incorrectas: [
      "Los trascendentales se reducen a categorías lógicas.",
      "El ente nunca se vinculó con trascendentales."
    ]
  },
  {
    enunciado: "La noción de ente ha estado presente desde Parménides hasta la filosofía contemporánea.",
    correcta: "Es un hilo conductor fundamental de la historia de la filosofía.",
    incorrectas: [
      "Es un concepto moderno sin antecedentes antiguos.",
      "Fue abandonado en la Edad Media y nunca retomado."
    ]
  },
  {
    enunciado: "La reflexión sobre el ente permite clarificar la diferencia entre lo necesario y lo contingente.",
    correcta: "El ente necesario es el que no puede no ser; el contingente puede no existir.",
    incorrectas: [
      "Necesario y contingente significan lo mismo.",
      "El ente necesario se limita a hechos empíricos."
    ]
  },
  {
    enunciado: "La filosofía analítica discute la existencia de entidades abstractas como entes.",
    correcta: "Se cuestiona si los números o universales pueden considerarse entes.",
    incorrectas: [
      "Afirma sin debate que solo los objetos físicos son entes.",
      "Niega que exista problema alguno sobre entes abstractos."
    ]
  },
  {
    enunciado: "El estudio del ente conserva plena actualidad en la filosofía contemporánea.",
    correcta: "Permite pensar la realidad y el sentido del mundo de manera crítica.",
    incorrectas: [
      "Es irrelevante y ha sido abandonado por completo.",
      "Es idéntico a la estadística aplicada."
    ]
  }
];
