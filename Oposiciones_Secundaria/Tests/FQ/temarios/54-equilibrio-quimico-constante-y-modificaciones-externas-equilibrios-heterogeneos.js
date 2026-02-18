// temarios/54-equilibrio-quimico-constante-modificaciones-externas-y-equilibrios-heterogeneos.js
var PREGUNTAS = [
  {
    enunciado: "El equilibrio químico a T y p constantes se caracteriza por:",
    correcta: "ΔrG = 0 y composición macroscópica constante",
    incorrectas: [
      "ΔrH = 0 y velocidad nula de ambas reacciones",
      "ΔrS = 0 y ausencia de transformación molecular"
    ]
  },
  {
    enunciado: "La expresión termodinámica rigurosa de la constante de equilibrio para ∑νi Ai = 0 es:",
    correcta: "K = ∏ a_i^{ν_i}",
    incorrectas: [
      "K = ∑ a_i ν_i",
      "K = ∏ [A_i]^{1/ν_i} siempre"
    ]
  },
  {
    enunciado: "Para gases casi ideales, la actividad de un gas i se aproxima por:",
    correcta: "a_i ≈ p_i / p°",
    incorrectas: [
      "a_i ≈ [i] / [i]° siempre",
      "a_i = 1 independientemente de p_i"
    ]
  },
  {
    enunciado: "¿Qué relación conecta Kp y Kc para una reacción gaseosa?",
    correcta: "Kp = Kc (RT)^{Δn_g}",
    incorrectas: [
      "Kp = Kc / (RT)^{Δn_g}",
      "Kp = Kc^2 (RT)"
    ]
  },
  {
    enunciado: "El cociente de reacción Q se obtiene sustituyendo en K:",
    correcta: "Las actividades por sus valores instantáneos",
    incorrectas: [
      "Las actividades por 1",
      "Las actividades por los valores estándar"
    ]
  },
  {
    enunciado: "Si Q < K, la reacción a T fija tiende a:",
    correcta: "Avanzar hacia productos (ΔrG < 0)",
    incorrectas: [
      "Retroceder a reactivos",
      "Quedarse estática"
    ]
  },
  {
    enunciado: "La ecuación de van ’t Hoff indica que para ΔrH° > 0, al aumentar T:",
    correcta: "K aumenta",
    incorrectas: [
      "K disminuye",
      "K no varía"
    ]
  },
  {
    enunciado: "El principio de Le Châtelier afirma que el sistema en equilibrio frente a una perturbación:",
    correcta: "Evoluciona en el sentido que contrarresta la perturbación",
    incorrectas: [
      "Permanece invariable",
      "Maximiza la producción de calor siempre"
    ]
  },
  {
    enunciado: "Un catalizador en un sistema en equilibrio:",
    correcta: "No cambia K, solo acelera el establecimiento del equilibrio",
    incorrectas: [
      "Aumenta K",
      "Desplaza el equilibrio hacia productos"
    ]
  },
  {
    enunciado: "En equilibrios heterogéneos, las actividades de sólidos y líquidos puros se toman como:",
    correcta: "a = 1",
    incorrectas: [
      "a = su densidad",
      "a = su fracción molar"
    ]
  },
  {
    enunciado: "Para CaCO3(s) ⇌ CaO(s) + CO2(g) a T fija, la constante K es proporcional a:",
    correcta: "La fugacidad (o presión) de CO2",
    incorrectas: [
      "[CaCO3]",
      "[CaO]"
    ]
  },
  {
    enunciado: "Aumentar la presión total a T fija en una mezcla gaseosa en equilibrio favorece:",
    correcta: "El lado con menor número de moles gaseosos",
    incorrectas: [
      "Siempre a los reactivos",
      "Siempre a los productos independientemente de Δn_g"
    ]
  },
  {
    enunciado: "Añadir un gas inerte a volumen constante en un equilibrio gaseoso:",
    correcta: "No altera Q ni K; no desplaza el equilibrio",
    incorrectas: [
      "Equivale a aumentar p total y desplazar a menos moles",
      "Disminuye K"
    ]
  },
  {
    enunciado: "Añadir un gas inerte a presión constante en un equilibrio gaseoso suele:",
    correcta: "Disminuir las fracciones molares y desplazar según Δn_g",
    incorrectas: [
      "No tener ningún efecto jamás",
      "Aumentar K"
    ]
  },
  {
    enunciado: "La expresión correcta de Kc para aA + bB ⇌ cC + dD (todas en disolución ideal) es:",
    correcta: "Kc = ([C]^c [D]^d)/([A]^a [B]^b)",
    incorrectas: [
      "Kc = [A]^a [B]^b / [C]^c [D]^d",
      "Kc = ([C]+[D])/([A]+[B])"
    ]
  },
  {
    enunciado: "La relación entre ΔrG° y K a una temperatura T es:",
    correcta: "ΔrG° = −RT ln K",
    incorrectas: [
      "ΔrG° = RT ln K",
      "ΔrG° = −R ln K"
    ]
  },
  {
    enunciado: "Para una reacción exotérmica (ΔrH° < 0), al aumentar T:",
    correcta: "K disminuye",
    incorrectas: [
      "K aumenta",
      "K permanece constante"
    ]
  },
  {
    enunciado: "En un equilibrio heterogéneo s ⇌ aq, el producto de solubilidad Ksp se define como:",
    correcta: "Producto de actividades de los iones en disolución, elevadas a sus coeficientes",
    incorrectas: [
      "Cociente entre masa de sólido y volumen",
      "Producto de concentraciones sin exponente alguno"
    ]
  },
  {
    enunciado: "Para un equilibrio con Δn_g = 0:",
    correcta: "Kp = Kc",
    incorrectas: [
      "Kp = Kc (RT)",
      "Kp = Kc/(RT)"
    ]
  },
  {
    enunciado: "Si se duplica la ecuación química tal como está escrita, la nueva K (K′) vale:",
    correcta: "K′ = K^2",
    incorrectas: [
      "K′ = 2K",
      "K′ = K/2"
    ]
  },
  {
    enunciado: "Si se invierte la ecuación de equilibrio, la constante resultante es:",
    correcta: "1/K",
    incorrectas: [
      "−K",
      "K sin cambios"
    ]
  },
  {
    enunciado: "Si se suman dos ecuaciones de equilibrio independientes (K1 y K2), la constante global es:",
    correcta: "K = K1 · K2",
    incorrectas: [
      "K = K1 + K2",
      "K = (K1 + K2)/2"
    ]
  },
  {
    enunciado: "En una mezcla en equilibrio, retirar un producto (disminuir su actividad) provoca:",
    correcta: "Desplazamiento hacia productos (Q < K)",
    incorrectas: [
      "Desplazamiento a reactivos",
      "Ningún efecto"
    ]
  },
  {
    enunciado: "Para escribir K correctamente deben usarse:",
    correcta: "Actividades (o fugacidades) con el estado estándar apropiado",
    incorrectas: [
      "Molalidades siempre, sin excepción",
      "Fracciones másicas para sólidos"
    ]
  },
  {
    enunciado: "En un equilibrio gas-líquido ideal, aumentar T a p fija sobre un líquido volátil causa generalmente:",
    correcta: "Aumento de p de vapor y desplazamiento de equilibrio hacia fase gas",
    incorrectas: [
      "Disminución de p de vapor",
      "Invariancia de p de vapor"
    ]
  },
  {
    enunciado: "La condición general de equilibrio en términos de potenciales químicos es:",
    correcta: "∑ ν_i μ_i = 0",
    incorrectas: [
      "∑ μ_i = 0",
      "μ_reactivos = μ_productos = 0"
    ]
  },
  {
    enunciado: "Para gases reales, en la expresión de K debe sustituirse p por:",
    correcta: "Fugacidad f = φ p",
    incorrectas: [
      "Actividad a = 1",
      "Compresibilidad Z"
    ]
  },
  {
    enunciado: "En disoluciones iónicas diluidas, las concentraciones deben corregirse mediante:",
    correcta: "Coeficientes de actividad γ_i",
    incorrectas: [
      "Coeficiente de difusión",
      "Calor específico del disolvente"
    ]
  },
  {
    enunciado: "En el sistema CaCO3(s) ⇌ CaO(s) + CO2(g), aumentar la presión parcial de CO2:",
    correcta: "Desplaza el equilibrio hacia CaCO3(s)",
    incorrectas: [
      "Desplaza hacia CaO(s) + CO2(g)",
      "No produce efecto"
    ]
  },
  {
    enunciado: "En un equilibrio con Δn_g < 0, comprimir el sistema (aumentar p) a T constante suele:",
    correcta: "Favorecer los productos",
    incorrectas: [
      "Favorecer reactivos",
      "No afectar el equilibrio"
    ]
  },
  {
    enunciado: "Para A(g) ⇌ 2B(g), ¿cómo se relacionan Kp y Kc?",
    correcta: "Kp = Kc (RT)^{+1}",
    incorrectas: [
      "Kp = Kc (RT)^{−1}",
      "Kp = Kc"
    ]
  },
  {
    enunciado: "En equilibrios acoplados, la constante global de una reacción suma es:",
    correcta: "Producto de las constantes de las reacciones sumadas",
    incorrectas: [
      "Suma aritmética de constantes",
      "Promedio geométrico de constantes"
    ]
  },
  {
    enunciado: "Para escribir K en un equilibrio heterogéneo s + g ⇌ g, debe omitirse:",
    correcta: "La actividad del sólido puro",
    incorrectas: [
      "La presión parcial del gas",
      "Las concentraciones de especies gaseosas"
    ]
  },
  {
    enunciado: "¿Qué variable NO cambia K a una T fija?",
    correcta: "Añadir catalizador",
    incorrectas: [
      "Cambiar la temperatura",
      "Cambiar el estado estándar"
    ]
  },
  {
    enunciado: "La forma correcta de Q para aA + bB ⇌ cC + dD en disolución es:",
    correcta: "Q = (a_C^c a_D^d)/(a_A^a a_B^b)",
    incorrectas: [
      "Q = [A]^a [B]^b / [C]^c [D]^d",
      "Q = (x_C + x_D)/(x_A + x_B)"
    ]
  },
  {
    enunciado: "En una reacción gaseosa con Δn_g > 0, a presión total fija disminuir el volumen del recipiente provoca que Q:",
    correcta: "Aumente (p_i suben) y el sistema responda hacia el lado de menor moles",
    incorrectas: [
      "Disminuya siempre",
      "No cambie"
    ]
  },
  {
    enunciado: "En un equilibrio de precipitación AB(s) ⇌ A+ + B−, si se añade B− (ion común):",
    correcta: "Disminuye la solubilidad (Q > Ksp) y precipita AB",
    incorrectas: [
      "Aumenta la solubilidad",
      "No afecta al equilibrio"
    ]
  },
  {
    enunciado: "Para el equilibrio N2O4(g) ⇌ 2 NO2(g), un descenso de temperatura (ΔrH° > 0) tiende a:",
    correcta: "Desplazar hacia N2O4(g)",
    incorrectas: [
      "Desplazar hacia NO2(g)",
      "No afectar"
    ]
  },
  {
    enunciado: "Para que una aproximación [A]0 − x ≈ [A]0 sea válida en cálculo de equilibrio, se requiere:",
    correcta: "Que x ≪ [A]0 (y verificación posterior del error relativo)",
    incorrectas: [
      "Que K ≈ 1 siempre",
      "Que Δn_g = 0"
    ]
  }
];
