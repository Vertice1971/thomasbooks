// temarios/54-nutricion-y-alimentacion-habitos-saludables-principales-enfermedades-las-personas-como-consumidores.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué diferencia fundamental existe entre nutrición y alimentación?",
    correcta: "La nutrición son procesos fisiológicos; la alimentación es el acto voluntario, social y cultural de ingerir alimentos",
    incorrectas: [
      "La nutrición es elegir alimentos en el supermercado",
      "La alimentación ocurre a nivel celular exclusivamente"
    ]
  },
  {
    enunciado: "¿Cuál NO es una función de los nutrientes?",
    correcta: "Función genética de codificar proteínas",
    incorrectas: [
      "Función energética",
      "Función plástica y reguladora"
    ]
  },
  {
    enunciado: "¿Qué macronutriente aporta 9 kcal/g?",
    correcta: "Lípidos",
    incorrectas: [
      "Carbohidratos",
      "Proteínas"
    ]
  },
  {
    enunciado: "¿Cuál es un nutriente esencial?",
    correcta: "Ácido linoleico (omega-6)",
    incorrectas: [
      "Glucosa",
      "Ácido láctico"
    ]
  },
  {
    enunciado: "¿Cómo se clasifican las vitaminas según su solubilidad?",
    correcta: "Hidrosolubles (B, C) y liposolubles (A, D, E, K)",
    incorrectas: [
      "Ácidas y básicas",
      "Oxidadas y reducidas"
    ]
  },
  {
    enunciado: "¿Qué grupo de alimentos es principalmente regulador?",
    correcta: "Frutas y verduras",
    incorrectas: [
      "Aceites y mantequillas",
      "Cereales refinados"
    ]
  },
  {
    enunciado: "¿Qué grupo aporta proteínas de alto valor biológico?",
    correcta: "Huevos, leche y pescado",
    incorrectas: [
      "Aceites vegetales",
      "Bebidas azucaradas"
    ]
  },
  {
    enunciado: "¿Qué recomendación caracteriza a una dieta equilibrada para adultos?",
    correcta: "Predominio de alimentos vegetales, grasas de calidad y variedad suficiente",
    incorrectas: [
      "Exclusión total de carbohidratos",
      "Aporte proteico >40% sin indicación clínica"
    ]
  },
  {
    enunciado: "¿Qué rasgo define la dieta mediterránea tradicional?",
    correcta: "Uso de aceite de oliva, alto consumo de vegetales y legumbres, pescado moderado",
    incorrectas: [
      "Alto consumo de carnes procesadas",
      "Ausencia de cereales integrales"
    ]
  },
  {
    enunciado: "¿Qué riesgo conllevan las dietas milagro hipocalóricas extremas?",
    correcta: "Carencias nutricionales y efecto rebote",
    incorrectas: [
      "Mejora sostenida de la masa muscular",
      "Aumento del gasto energético basal permanente"
    ]
  },
  {
    enunciado: "¿Qué son los prebióticos?",
    correcta: "Fibra y compuestos no digeribles que favorecen bacterias beneficiosas",
    incorrectas: [
      "Microorganismos vivos",
      "Antibióticos de amplio espectro"
    ]
  },
  {
    enunciado: "¿Qué son los probióticos?",
    correcta: "Microorganismos vivos que, en cantidades adecuadas, confieren beneficios para la salud",
    incorrectas: [
      "Enzimas digestivas endógenas",
      "Vitaminas hidrosolubles"
    ]
  },
  {
    enunciado: "¿Cuál es una ingesta adecuada de fibra para adultos sanos?",
    correcta: "Alrededor de 25–30 g/día",
    incorrectas: [
      "5 g/día",
      "80 g/día en cualquier caso"
    ]
  },
  {
    enunciado: "¿Qué deficiencia causa con más frecuencia anemia microcítica?",
    correcta: "Déficit de hierro",
    incorrectas: [
      "Déficit de vitamina C",
      "Exceso de yodo"
    ]
  },
  {
    enunciado: "¿Qué déficit vitamínico se asocia a raquitismo en niños?",
    correcta: "Vitamina D",
    incorrectas: [
      "Vitamina K",
      "Vitamina B12"
    ]
  },
  {
    enunciado: "¿Qué déficit vitamínico produce escorbuto?",
    correcta: "Vitamina C",
    incorrectas: [
      "Vitamina A",
      "Vitamina E"
    ]
  },
  {
    enunciado: "¿Qué patrón alimentario se asocia a riesgo de obesidad y DM2?",
    correcta: "Alta densidad energética y ultraprocesados con azúcares añadidos",
    incorrectas: [
      "Dietas ricas en legumbres y verduras",
      "Consumo moderado de frutos secos"
    ]
  },
  {
    enunciado: "¿Qué lípidos conviene limitar para reducir riesgo cardiovascular?",
    correcta: "Grasas trans y saturadas",
    incorrectas: [
      "Ácidos grasos monoinsaturados",
      "Omega-3 de pescado azul"
    ]
  },
  {
    enunciado: "¿Qué medida previene la hipertensión asociada a la dieta?",
    correcta: "Reducir sal añadida y alimentos ultraprocesados",
    incorrectas: [
      "Aumentar bebidas energéticas",
      "Eliminar frutas para bajar potasio"
    ]
  },
  {
    enunciado: "¿Qué práctica reduce el riesgo de infecciones transmitidas por alimentos?",
    correcta: "Separar crudos y cocinados y mantener la cadena de frío",
    incorrectas: [
      "Descongelar carnes a temperatura ambiente",
      "Usar la misma tabla sin lavar"
    ]
  },
  {
    enunciado: "¿Qué microorganismo se relaciona con toxiinfección por mayonesa casera mal conservada?",
    correcta: "Salmonella",
    incorrectas: [
      "Vibrio cholerae en agua tratada",
      "Plasmodium spp."
    ]
  },
  {
    enunciado: "¿Qué parásito se previene congelando pescado destinado a consumo en crudo?",
    correcta: "Anisakis",
    incorrectas: [
      "Taenia saginata",
      "Giardia lamblia en vegetales"
    ]
  },
  {
    enunciado: "¿Qué trastorno de la conducta alimentaria cursa con restricción calórica intensa y distorsión de la imagen corporal?",
    correcta: "Anorexia nerviosa",
    incorrectas: [
      "Bulimia sin atracones",
      "Trastorno por pica"
    ]
  },
  {
    enunciado: "¿Qué característica propia tiene la bulimia nerviosa?",
    correcta: "Episodios de atracón seguidos de conductas compensatorias",
    incorrectas: [
      "Ayuno prolongado sin atracones",
      "Rechazo a todos los grupos de alimentos por igual"
    ]
  },
  {
    enunciado: "¿Qué relación dietética aumenta riesgo de cáncer colorrectal?",
    correcta: "Alto consumo de carnes procesadas y baja ingesta de fibra",
    incorrectas: [
      "Dieta rica en legumbres y frutas",
      "Ingesta moderada de pescado"
    ]
  },
  {
    enunciado: "¿Qué método de conservación es un tratamiento térmico suave para reducir patógenos en leche?",
    correcta: "Pasteurización",
    incorrectas: [
      "Esterilización UHT",
      "Liofilización"
    ]
  },
  {
    enunciado: "¿Qué sistema se usa en la industria para garantizar seguridad alimentaria?",
    correcta: "APPCC (HACCP): Análisis de Peligros y Puntos de Control Críticos",
    incorrectas: [
      "ISO exclusivamente de calidad estética",
      "Control visual sin registros"
    ]
  },
  {
    enunciado: "¿Qué información es obligatoria en el etiquetado nutricional?",
    correcta: "Valor energético y cantidades de grasas, saturadas, hidratos, azúcares, proteínas y sal",
    incorrectas: [
      "Recetas recomendadas del chef",
      "Precio por kilogramo en todos los países"
    ]
  },
  {
    enunciado: "¿Qué declaración en el etiquetado debe ser veraz y basada en evidencia?",
    correcta: "Alegaciones nutricionales y de salud",
    incorrectas: [
      "Slogans publicitarios sin base",
      "Imágenes ilustrativas siempre exentas de regulación"
    ]
  },
  {
    enunciado: "¿Cuál es un derecho básico del consumidor de alimentos?",
    correcta: "Recibir información clara, veraz y suficiente",
    incorrectas: [
      "Exigir publicidad personalizada gratuita",
      "Ignorar fechas de caducidad por decisión propia"
    ]
  },
  {
    enunciado: "¿Qué es consumo responsable en alimentación?",
    correcta: "Elegir productos saludables, de temporada y minimizando desperdicios",
    incorrectas: [
      "Comprar solo por precio mínimo sin criterios",
      "Consumir raciones excesivas para evitar sobras"
    ]
  },
  {
    enunciado: "¿Qué medida disminuye el desperdicio alimentario en el hogar?",
    correcta: "Planificar menús y respetar FIFO en la despensa",
    incorrectas: [
      "Comprar al por mayor sin control de fechas",
      "Descongelar y recongelar repetidamente"
    ]
  },
  {
    enunciado: "¿Qué valor aproximado de reparto de macronutrientes se considera razonable en adultos sanos?",
    correcta: "≈50–60% HC, 25–35% grasas, 10–20% proteínas",
    incorrectas: [
      "≈10% HC, 70% grasas, 20% proteínas",
      "≈80% proteínas, 10% grasas, 10% HC"
    ]
  },
  {
    enunciado: "¿Qué fuente alimentaria destaca por su aporte de calcio biodisponible?",
    correcta: "Lácteos y alternativas enriquecidas",
    incorrectas: [
      "Aceite de oliva",
      "Azúcar blanco"
    ]
  },
  {
    enunciado: "¿Qué mineral es crítico para prevenir bocio en poblaciones con suelos pobres?",
    correcta: "Yodo",
    incorrectas: [
      "Cobre",
      "Selenio siempre en exceso"
    ]
  },
  {
    enunciado: "¿Qué bebida es la opción de hidratación principal recomendada?",
    correcta: "Agua",
    incorrectas: [
      "Refrescos azucarados",
      "Bebidas alcohólicas de baja graduación"
    ]
  },
  {
    enunciado: "¿Qué consejo dietético favorece el control glucémico en DM2?",
    correcta: "Priorizar hidratos complejos y fibra, limitar azúcares añadidos",
    incorrectas: [
      "Eliminar todos los hidratos de carbono",
      "Consumir solo zumos de frutas"
    ]
  },
  {
    enunciado: "¿Cuál es la diferencia entre fecha de caducidad y de consumo preferente?",
    correcta: "La caducidad implica seguridad; el consumo preferente alude a calidad organoléptica",
    incorrectas: [
      "Son equivalentes legales",
      "La de consumo preferente prohíbe vender tras la fecha siempre"
    ]
  },
  {
    enunciado: "¿Qué práctica aumenta la seguridad con alérgenos alimentarios?",
    correcta: "Leer alérgenos declarados y evitar trazas si hay hipersensibilidad",
    incorrectas: [
      "Probar pequeñas cantidades para “acostumbrarse”",
      "Ignorar el etiquetado si el alimento es “natural”"
    ]
  },
  {
    enunciado: "¿Qué comportamiento del consumidor impacta positivamente en sostenibilidad?",
    correcta: "Elegir productos de temporada y reducir carne procesada",
    incorrectas: [
      "Preferir envases de un solo uso",
      "Comprar por impulso productos ultraenvasados"
    ]
  }
];
