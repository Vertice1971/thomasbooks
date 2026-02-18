// temarios/52-anatomia-y-fisiologia-de-los-aparatos-digestivo-y-urinario-humanos-habitos-saludables-principales-enfermedades.js
var PREGUNTAS = [
  {
    enunciado: "¿Cuál es la función global del aparato digestivo en la homeostasis?",
    correcta: "Transformar los alimentos y absorber nutrientes y agua para mantener el equilibrio interno",
    incorrectas: [
      "Almacenar oxígeno y eliminar CO₂",
      "Bombear sangre oxigenada a los tejidos"
    ]
  },
  {
    enunciado: "¿Qué estructuras forman el tubo digestivo en orden anatómico correcto?",
    correcta: "Boca → faringe → esófago → estómago → intestino delgado → intestino grueso → ano",
    incorrectas: [
      "Boca → laringe → tráquea → estómago → colon → recto",
      "Boca → esófago → tráquea → duodeno → colon → ano"
    ]
  },
  {
    enunciado: "¿Cuáles son las glándulas salivales mayores?",
    correcta: "Parótidas, submandibulares y sublinguales",
    incorrectas: [
      "Parótidas, tiroideas y paratiroides",
      "Suprarrenales, parótidas y pineal"
    ]
  },
  {
    enunciado: "¿Qué función principal cumple el estómago?",
    correcta: "Mezclar y degradar químicamente el bolo con ácido y pepsina para formar quimo",
    incorrectas: [
      "Absorber la mayor parte de los nutrientes",
      "Producir bilis para la emulsión de grasas"
    ]
  },
  {
    enunciado: "¿En qué tramo ocurre la mayor parte de la absorción de nutrientes?",
    correcta: "En el intestino delgado (sobre todo yeyuno e íleon)",
    incorrectas: [
      "En el estómago",
      "En el intestino grueso"
    ]
  },
  {
    enunciado: "¿Cuál NO es una función del hígado?",
    correcta: "Secreción de amilasa pancreática",
    incorrectas: [
      "Producción de bilis y metabolismo de nutrientes",
      "Detoxificación y síntesis de proteínas plasmáticas"
    ]
  },
  {
    enunciado: "¿Qué secreción exocrina realiza el páncreas en la digestión?",
    correcta: "Enzimas digestivas y bicarbonato al duodeno",
    incorrectas: [
      "Bilis para emulsificar grasas",
      "Hormona antidiurética para conservar agua"
    ]
  },
  {
    enunciado: "¿Qué movimiento propulsivo caracteriza al tubo digestivo?",
    correcta: "Peristalsis coordinada de capas musculares",
    incorrectas: [
      "Sístole y diástole",
      "Tetano sostenido del músculo liso"
    ]
  },
  {
    enunciado: "¿Qué es la digestión química?",
    correcta: "Hidrólisis de macromoléculas por enzimas específicas",
    incorrectas: [
      "Trituración de alimentos por dientes",
      "Transporte activo de iones en enterocitos"
    ]
  },
  {
    enunciado: "¿Qué papel cumple la microbiota intestinal?",
    correcta: "Colabora en digestión de fibra, síntesis de vitaminas y modulación inmune",
    incorrectas: [
      "Produce ácido clorhídrico gástrico",
      "Oxigena la sangre portal"
    ]
  },
  {
    enunciado: "¿Qué hábito favorece la salud digestiva?",
    correcta: "Dieta variada rica en fibra, frutas y verduras",
    incorrectas: [
      "Ayunos prolongados con deshidratación",
      "Consumo habitual de alcohol en exceso"
    ]
  },
  {
    enunciado: "¿Qué patología se asocia a reflujo gastroesofágico?",
    correcta: "Ascenso del contenido ácido hacia el esófago con pirosis",
    incorrectas: [
      "Ausencia de ácido gástrico por vida",
      "Obstrucción completa del píloro congénita siempre"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a las enfermedades inflamatorias intestinales (EII)?",
    correcta: "Inflamación crónica del tubo digestivo (Crohn, colitis ulcerosa)",
    incorrectas: [
      "Infecciones agudas por virus exclusivamente",
      "Trastornos funcionales sin inflamación histológica"
    ]
  },
  {
    enunciado: "¿Qué medida reduce el riesgo de cáncer colorrectal?",
    correcta: "Cribado con colonoscopia según edad y antecedentes",
    incorrectas: [
      "Suprimir completamente la fibra",
      "Evitar toda actividad física"
    ]
  },
  {
    enunciado: "¿Qué órganos integran el aparato urinario?",
    correcta: "Riñones, uréteres, vejiga urinaria y uretra",
    incorrectas: [
      "Riñones, hígado, páncreas y vesícula biliar",
      "Suprarrenales, bazo, laringe y uretra"
    ]
  },
  {
    enunciado: "¿Cuál es la unidad funcional del riñón?",
    correcta: "La nefrona",
    incorrectas: [
      "El acino",
      "El sarcómero"
    ]
  },
  {
    enunciado: "¿Qué estructuras forman el corpúsculo renal?",
    correcta: "Glomérulo capilar y cápsula de Bowman",
    incorrectas: [
      "Pelvis renal y cálices",
      "Uréter y vejiga"
    ]
  },
  {
    enunciado: "¿Dónde tiene lugar principalmente la filtración glomerular?",
    correcta: "En el glomérulo hacia el espacio de Bowman",
    incorrectas: [
      "En el túbulo colector",
      "En la vejiga urinaria"
    ]
  },
  {
    enunciado: "¿Qué procesos tubulares ajustan la composición de la orina?",
    correcta: "Reabsorción y secreción a lo largo de la nefrona",
    incorrectas: [
      "Hemólisis y fagocitosis tubular",
      "Fotosíntesis y quimiosíntesis"
    ]
  },
  {
    enunciado: "¿Qué función cumple el asa de Henle?",
    correcta: "Establecer un gradiente osmótico medular que permite concentrar orina",
    incorrectas: [
      "Neutralizar ácido gástrico",
      "Producir bilirrubina conjugada"
    ]
  },
  {
    enunciado: "¿Qué hormona aumenta la reabsorción de agua en túbulos colectores?",
    correcta: "Hormona antidiurética (ADH)",
    incorrectas: [
      "Insulina",
      "Hormona tiroidea T₃"
    ]
  },
  {
    enunciado: "¿Qué sistema hormonal participa en la regulación de la presión arterial renal?",
    correcta: "Sistema renina–angiotensina–aldosterona",
    incorrectas: [
      "Eje hipotálamo–hipófiso–gonadal",
      "Sistema complemento–coagulación"
    ]
  },
  {
    enunciado: "¿Cuál es un signo típico de infección urinaria baja (cistitis)?",
    correcta: "Disuria y polaquiuria sin fiebre alta",
    incorrectas: [
      "Ictericia intensa",
      "Hemoptisis y dolor pleurítico"
    ]
  },
  {
    enunciado: "¿Qué factor favorece la formación de cálculos renales?",
    correcta: "Baja ingesta hídrica y supersaturación urinaria",
    incorrectas: [
      "Hiperhidratación mantenida",
      "pH urinario estrictamente neutro y estable"
    ]
  },
  {
    enunciado: "¿Qué es la insuficiencia renal crónica?",
    correcta: "Disminución progresiva y persistente de la función renal",
    incorrectas: [
      "Aumento transitorio de la diuresis sin lesión",
      "Inflamación aguda autolimitada de la vejiga"
    ]
  },
  {
    enunciado: "¿Cuál es un hábito saludable para el aparato urinario?",
    correcta: "Hidratación adecuada y evitar retener la micción",
    incorrectas: [
      "Consumo crónico de analgésicos nefrotóxicos",
      "Restringir totalmente la ingesta de agua sin indicación"
    ]
  },
  {
    enunciado: "¿Qué nutriente se absorbe principalmente en el íleon terminal?",
    correcta: "Vitamina B₁₂ (con factor intrínseco) y sales biliares",
    incorrectas: [
      "Hierro hemo de forma exclusiva",
      "Glucosa mediante endocitosis pinocítica"
    ]
  },
  {
    enunciado: "¿Cuál es la función principal del intestino grueso?",
    correcta: "Absorber agua y electrolitos y formar heces",
    incorrectas: [
      "Neutralizar el ácido con pepsina",
      "Emulsionar lípidos con bilis"
    ]
  },
  {
    enunciado: "¿Qué hormona pancreática disminuye la glucemia?",
    correcta: "Insulina",
    incorrectas: [
      "Glucagón",
      "Aldosterona"
    ]
  },
  {
    enunciado: "¿Qué medida dietética ayuda a prevenir el estreñimiento?",
    correcta: "Aumentar la fibra alimentaria y la ingesta de agua",
    incorrectas: [
      "Reducir completamente la actividad física",
      "Suprimir frutas y verduras"
    ]
  },
  {
    enunciado: "¿Qué prueba se usa para detectar sangre oculta en heces en cribado de CCR?",
    correcta: "Test de sangre oculta en heces inmunoquímico (SOHi)",
    incorrectas: [
      "Gasometría arterial",
      "Electrocardiograma basal"
    ]
  },
  {
    enunciado: "¿Qué manifestación es típica de úlcera péptica complicada?",
    correcta: "Dolor epigástrico con signos de sangrado digestivo",
    incorrectas: [
      "Cianosis central por hipoxemia",
      "Dolor pleurítico al inspirar profundamente"
    ]
  },
  {
    enunciado: "¿Qué hábito aumenta el riesgo de reflujo y gastritis?",
    correcta: "Consumo de alcohol y tabaco",
    incorrectas: [
      "Higiene bucal y cena ligera",
      "Fraccionar comidas y evitar acostarse tras comer"
    ]
  },
  {
    enunciado: "¿Qué define a la micción normal?",
    correcta: "Reflejo coordinado de vaciado vesical voluntariamente modulado",
    incorrectas: [
      "Contracción permanente del esfínter externo",
      "Secreción hormonal renal directa a la vejiga"
    ]
  },
  {
    enunciado: "En una EII, ¿qué síntoma de alarma requiere valoración médica?",
    correcta: "Pérdida de peso, rectorragia y fiebre persistente",
    incorrectas: [
      "Hipo ocasional aislado",
      "Singultos tras bebidas carbonatadas"
    ]
  },
  {
    enunciado: "¿Qué parámetro se usa para estimar función renal en laboratorio?",
    correcta: "Filtrado glomerular estimado a partir de creatinina",
    incorrectas: [
      "Hemoglobina glucosilada exclusivamente",
      "PaO₂ en aire ambiente"
    ]
  },
  {
    enunciado: "¿Qué recomendación general mejora la salud digestiva y urinaria?",
    correcta: "Actividad física regular y control del peso corporal",
    incorrectas: [
      "Sedentarismo prolongado",
      "Ayunos extremos sin supervisión"
    ]
  },
  {
    enunciado: "¿Qué sustancia neutraliza el ácido en el duodeno procedente del estómago?",
    correcta: "Bicarbonato del jugo pancreático y secreciones duodenales",
    incorrectas: [
      "Ácido clorhídrico adicional",
      "Pepsinógeno sin activación"
    ]
  },
  {
    enunciado: "¿Cuál es una medida preventiva frente a infecciones urinarias recurrentes?",
    correcta: "Buena hidratación y hábitos miccionales postcoitales en personas susceptibles",
    incorrectas: [
      "Restringir totalmente la ingesta hídrica",
      "Usar antibióticos sin indicación médica"
    ]
  },
  {
    enunciado: "¿Qué síntoma puede sugerir litiasis ureteral aguda?",
    correcta: "Cólico nefrítico con dolor lumbar irradiado e hiperperistaltismo",
    incorrectas: [
      "Dolor retroesternal posprandial exclusivo",
      "Edema maleolar bilateral sin dolor"
    ]
  },
  {
    enunciado: "¿Qué componente del bolo comienza a digerirse en la boca?",
    correcta: "Almidón por amilasa salival",
    incorrectas: [
      "Proteínas por pepsina salival",
      "Lípidos por bilis salival"
    ]
  }
];
