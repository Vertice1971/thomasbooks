// temarios/52-energia-transformaciones-quimicas-termoquimica-ecuaciones-y-calores-de-reaccion.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué estudia la termoquímica?",
    correcta: "Los intercambios de energía en forma de calor asociados a reacciones y cambios físicos",
    incorrectas: [
      "La estructura electrónica de los átomos",
      "La propagación de ondas mecánicas en sólidos"
    ]
  },
  {
    enunciado: "Según la convención de signos en termodinámica química, un proceso exotérmico tiene:",
    correcta: "ΔH < 0",
    incorrectas: ["ΔH > 0", "ΔH = 0 necesariamente"]
  },
  {
    enunciado: "En un proceso a volumen constante en una bomba calorimétrica, el calor medido qV es igual a:",
    correcta: "ΔU del proceso",
    incorrectas: ["ΔH del proceso", "−ΔG del proceso"]
  },
  {
    enunciado: "La relación correcta entre entalpía y energía interna es:",
    correcta: "H = U + pV",
    incorrectas: ["H = U − pV", "H = U + TΔS"]
  },
  {
    enunciado: "Para una reacción gaseosa ideal, la relación entre ΔH y ΔU viene dada por:",
    correcta: "ΔH = ΔU + Δn_g·R·T",
    incorrectas: ["ΔH = ΔU − Δn_g·R·T", "ΔH = ΔU + pΔV siempre, sin aproximaciones"]
  },
  {
    enunciado: "Una ecuación termoquímica correctamente escrita debe incluir:",
    correcta: "Estados físicos, estequiometría y el valor de ΔH a condiciones definidas",
    incorrectas: [
      "Sólo las fórmulas sin estados ni condiciones",
      "La constante de equilibrio en lugar del calor de reacción"
    ]
  },
  {
    enunciado: "La ley de Hess establece que el calor de reacción:",
    correcta: "Depende sólo de los estados inicial y final, no de la ruta",
    incorrectas: [
      "Depende del camino real seguido",
      "Es independiente de la estequiometría"
    ]
  },
  {
    enunciado: "La entalpía estándar de formación ΔHf° de un elemento en su estado estándar es:",
    correcta: "Cero por definición",
    incorrectas: ["Positiva siempre", "Negativa siempre"]
  },
  {
    enunciado: "La expresión general para calcular ΔH° de reacción a partir de ΔHf° es:",
    correcta: "ΔH° = Σνp ΔHf°(productos) − Σνr ΔHf°(reactivos)",
    incorrectas: [
      "ΔH° = Σνr ΔHf°(reactivos) − Σνp ΔHf°(productos)",
      "ΔH° = ΣΔHf°(productos + reactivos)"
    ]
  },
  {
    enunciado: "El uso de energías de enlace promedio permite estimar ΔH° como:",
    correcta: "ΣE(enlaces rotos) − ΣE(enlaces formados)",
    incorrectas: [
      "ΣE(enlaces formados) − ΣE(enlaces rotos)",
      "Sólo con datos de ΔG°, no con energías de enlace"
    ]
  },
  {
    enunciado: "Una limitación de las energías de enlace promedio es que:",
    correcta: "No capturan la dependencia con el entorno químico y la fase",
    incorrectas: [
      "No permiten estimar reacciones en fase gas",
      "Siempre dan exactamente el valor experimental"
    ]
  },
  {
    enunciado: "La ley de Kirchhoff permite calcular ΔH°(T2) a partir de ΔH°(T1) usando:",
    correcta: "ΔH°(T2) = ΔH°(T1) + ∫(T1→T2) ΔCp dT",
    incorrectas: [
      "ΔH°(T2) = ΔH°(T1) − ∫ ΔS dT",
      "ΔH°(T2) = ΔU°(T1) + pΔV"
    ]
  },
  {
    enunciado: "En calorimetría a presión constante (calorímetro de vaso), el calor medido es:",
    correcta: "qP = ΔH del proceso (idealmente)",
    incorrectas: [
      "qP = ΔU siempre",
      "qP = −TΔS por definición"
    ]
  },
  {
    enunciado: "En una bomba calorimétrica se suele corregir el valor de ΔU por:",
    correcta: "Trabajo pV para obtener ΔH, y calores secundarios (alambre, formación de HNO3)",
    incorrectas: [
      "Pérdidas radiativas imposibles de corregir",
      "Cambios de entropía medidos directamente"
    ]
  },
  {
    enunciado: "El poder calorífico superior (PCS) frente al inferior (PCI) difiere porque:",
    correcta: "El PCS incluye la condensación del vapor de agua formado",
    incorrectas: [
      "El PCI incluye la energía de agitación mecánica",
      "El PCS excluye el calor de combustión de H2"
    ]
  },
  {
    enunciado: "Una reacción de neutralización fuerte-fuerte en agua tiene típicamente ΔH°≈",
    correcta: "−57 kJ·mol⁻¹",
    incorrectas: ["+57 kJ·mol⁻¹", "0 kJ·mol⁻¹"]
  },
  {
    enunciado: "En un ciclo de Born–Haber para una sal MX(s), la energía reticular U_L se asocia con:",
    correcta: "La energía liberada al formar el sólido iónico a partir de iones gaseosos",
    incorrectas: [
      "La energía necesaria para sublimar el metal y disociar X2",
      "La afinidad electrónica de X en fase gas"
    ]
  },
  {
    enunciado: "Para pasar de ΔU a ΔH en una reacción gaseosa ideal se añade:",
    correcta: "Δn_g·R·T",
    incorrectas: ["pΔV siempre medido directamente", "−TΔS"]
  },
  {
    enunciado: "Una ecuación termoquímica invertida (reacción inversa) implica que ΔH:",
    correcta: "Cambia de signo",
    incorrectas: ["Se mantiene inalterado", "Se multiplica por −1/2 siempre"]
  },
  {
    enunciado: "Si se multiplica por 2 una ecuación termoquímica, el ΔH asociado:",
    correcta: "Se multiplica por 2",
    incorrectas: ["Se mantiene igual", "Se divide por 2"]
  },
  {
    enunciado: "La capacidad calorífica a presión constante CP se relaciona con H como:",
    correcta: "CP = (∂H/∂T)P",
    incorrectas: ["CP = (∂U/∂T)V", "CP = −T(∂S/∂T)P"]
  },
  {
    enunciado: "Para un gas ideal monoatómico, la relación CP − CV es:",
    correcta: "R",
    incorrectas: ["2R", "R/2"]
  },
  {
    enunciado: "En un diagrama entálpico de reacción, la diferencia vertical entre reactivos y productos es:",
    correcta: "El ΔH de reacción",
    incorrectas: ["La Ea cinética", "El ΔS a temperatura constante"]
  },
  {
    enunciado: "La elección de estados físicos en una ecuación termoquímica es crucial porque:",
    correcta: "El valor de ΔH depende del estado de agregación",
    incorrectas: [
      "Sólo afecta a la velocidad de reacción",
      "No tiene efecto si hay gases"
    ]
  },
  {
    enunciado: "La entalpía de formación del agua líquida a 298 K es más negativa que la del vapor porque:",
    correcta: "La condensación libera calor adicional (calor de vaporización en sentido inverso)",
    incorrectas: [
      "El agua líquida tiene mayor energía interna",
      "El vapor es más estable termodinámicamente a 25 °C"
    ]
  },
  {
    enunciado: "Para estimar ΔH por energías de enlace, primero se debe:",
    correcta: "Escribir todos los enlaces rotos y formados en fase gas",
    incorrectas: [
      "Contar sólo los enlaces formados",
      "Usar ΔG° en lugar de energías de enlace"
    ]
  },
  {
    enunciado: "En Kirchhoff, si ΔCp es aproximadamente constante entre T1 y T2, entonces:",
    correcta: "ΔH°(T2) ≈ ΔH°(T1) + ΔCp·(T2 − T1)",
    incorrectas: [
      "ΔH°(T2) ≈ ΔH°(T1) − ΔCp·(T2 − T1)",
      "ΔH° no depende de la temperatura"
    ]
  },
  {
    enunciado: "La entalpía de atomización de un sólido metálico se define como:",
    correcta: "El ΔH para formar átomos gaseosos a partir del sólido",
    incorrectas: [
      "El ΔH para formar el sólido desde el gas",
      "El ΔH de sublimación del disolvente"
    ]
  },
  {
    enunciado: "Para reacciones de combustión completas, ΔH° suele ser:",
    correcta: "Muy negativo por la formación de CO2(g) y H2O(l/g)",
    incorrectas: [
      "Cercano a cero",
      "Positivo por la rotura de enlaces fuertes"
    ]
  },
  {
    enunciado: "En una determinación calorimétrica, la constante del calorímetro se obtiene:",
    correcta: "Calibrando con un proceso de ΔH conocido (p. ej., combustión de ácido benzoico)",
    incorrectas: [
      "Midiendo la masa del calorímetro",
      "Estimando por tablas sin calibración"
    ]
  },
  {
    enunciado: "El trabajo pV en una reacción química a presión externa constante se calcula como:",
    correcta: "w = −p_ext·ΔV",
    incorrectas: ["w = +p_ext·ΔV", "w = ΔU − ΔH"]
  },
  {
    enunciado: "La afinidad electrónica y la energía de ionización aparecen explícitamente en:",
    correcta: "Ciclos de Born–Haber para sales iónicas",
    incorrectas: [
      "La ley de Raoult",
      "El cálculo de ΔS de mezcla ideal"
    ]
  },
  {
    enunciado: "Si ΔHf°(CO2,g) = −393.5 kJ·mol⁻¹ y ΔHf°(H2O,l) = −285.8 kJ·mol⁻¹, el signo de ΔH° de combustión de un hidrocarburo será:",
    correcta: "Negativo",
    incorrectas: ["Positivo", "Indeterminado sin ΔG°"]
  },
  {
    enunciado: "La corrección Δn_g·RT al pasar de ΔU a ΔH es relevante cuando:",
    correcta: "Cambia el número de moles gaseosos",
    incorrectas: [
      "Sólo hay sólidos y líquidos",
      "La reacción es endotérmica"
    ]
  },
  {
    enunciado: "En una reacción escrita por mol de reacción, si se duplican todos los coeficientes estequiométricos, entonces:",
    correcta: "ΔH también se duplica",
    incorrectas: ["ΔH se mantiene igual", "ΔH cambia de signo"]
  },
  {
    enunciado: "El calor de disolución de una sal iónica es la suma de:",
    correcta: "Energía reticular con signo opuesto y entalpías de hidratación iónica",
    incorrectas: [
      "Sólo la energía reticular",
      "Sólo la entalpía de ionización del catión"
    ]
  },
  {
    enunciado: "Para una reacción a T y p constantes en disolución, medir ΔH permite inferir:",
    correcta: "El intercambio de calor con el entorno bajo esas condiciones",
    incorrectas: [
      "La velocidad de reacción",
      "El valor de ΔG° sin datos adicionales"
    ]
  },
  {
    enunciado: "Una ventaja de emplear la ley de Hess es que permite:",
    correcta: "Obtener ΔH de reacciones difíciles sumando reacciones conocidas",
    incorrectas: [
      "Evitar cualquier medida experimental en termoquímica",
      "Determinar ΔS directamente por suma de ecuaciones"
    ]
  },
  {
    enunciado: "Si ΔCp de productos − reactivos es positivo, al aumentar la temperatura el ΔH° de reacción:",
    correcta: "Aumenta",
    incorrectas: ["Disminuye", "Permanece constante por definición"]
  },
  {
    enunciado: "Para especificar correctamente un ΔH° tabulado se debe indicar:",
    correcta: "Temperatura y estado estándar (1 bar) de todas las especies",
    incorrectas: [
      "Sólo la presión",
      "Únicamente la masa de muestra empleada"
    ]
  }
];
