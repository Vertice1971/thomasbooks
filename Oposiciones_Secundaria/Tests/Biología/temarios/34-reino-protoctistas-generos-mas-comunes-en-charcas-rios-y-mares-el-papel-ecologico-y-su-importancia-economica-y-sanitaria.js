// temarios/34-reino-protoctistas-generos-mas-comunes-en-charcas-rios-y-mares-el-papel-ecologico-y-su-importancia-economica-y-sanitaria.js
var PREGUNTAS = [
  {
    enunciado: "En sentido docente clásico, el 'Reino Protoctistas' agrupa principalmente:",
    correcta: "Eucariotas mayoritariamente unicelulares o simples que no son plantas, animales ni hongos",
    incorrectas: [
      "Procariotas fotosintéticos exclusivamente",
      "Sólo metazoos microscópicos pluricelulares"
    ]
  },
  {
    enunciado: "Desde la visión moderna, muchos 'protoctistas' se distribuyen en supergrupos como:",
    correcta: "SAR, Archaeplastida, Excavata, Amoebozoa y otros",
    incorrectas: [
      "Monera, Protista y Virus",
      "Deuterostomia, Lophotrochozoa y Ecdysozoa"
    ]
  },
  {
    enunciado: "Un rasgo celular común de los protoctistas eucariotas es:",
    correcta: "Presencia de núcleo y orgánulos membranosos",
    incorrectas: [
      "Ribosomas 70S y nucleoide sin membrana",
      "Pared bacteriana de peptidoglucano obligatorio"
    ]
  },
  {
    enunciado: "El término 'mixotrofía' alude a organismos que:",
    correcta: "Pueden combinar nutrición autótrofa y heterótrofa",
    incorrectas: [
      "No pueden realizar fotosíntesis en ningún caso",
      "Se alimentan sólo por fagocitosis obligada"
    ]
  },
  {
    enunciado: "Un género típico de aguas dulces indicadoras de eutrofización es:",
    correcta: "Euglena",
    incorrectas: [
      "Fucus",
      "Porphyra"
    ]
  },
  {
    enunciado: "Entre las algas verdes dulceacuícolas más comunes se encuentran:",
    correcta: "Chlamydomonas, Volvox y Spirogyra",
    incorrectas: [
      "Laminaria, Sargassum y Fucus",
      "Alexandrium, Karenia y Gambierdiscus"
    ]
  },
  {
    enunciado: "Las diatomeas se caracterizan por presentar:",
    correcta: "Frústulas silíceas con valvas",
    incorrectas: [
      "Pared celular de quitina",
      "Capa de peptidoglucano típica bacteriana"
    ]
  },
  {
    enunciado: "Géneros marinos de diatomeas relevantes en plancton son:",
    correcta: "Thalassiosira, Chaetoceros, Pseudo-nitzschia",
    incorrectas: [
      "Amoeba, Arcella, Difflugia",
      "Trypanosoma, Leishmania, Giardia"
    ]
  },
  {
    enunciado: "Ceratium y Alexandrium pertenecen a:",
    correcta: "Dinoflagelados",
    incorrectas: [
      "Ciliados",
      "Euglenozoos"
    ]
  },
  {
    enunciado: "Un ciliado de aguas dulces fácil de observar al microscopio escolar es:",
    correcta: "Paramecium",
    incorrectas: [
      "Ulva",
      "Gelidium"
    ]
  },
  {
    enunciado: "Los foraminíferos como Globigerina son:",
    correcta: "Protoctistas marinos con conchas calcáreas",
    incorrectas: [
      "Crustáceos planctónicos",
      "Bacterias marinas nitrificantes"
    ]
  },
  {
    enunciado: "Entre las macroalgas marinas pardas habituales en costas templadas están:",
    correcta: "Fucus y Laminaria",
    incorrectas: [
      "Volvox y Spirogyra",
      "Paramecium y Vorticella"
    ]
  },
  {
    enunciado: "Un género de alga roja de importancia industrial para agar es:",
    correcta: "Gelidium",
    incorrectas: [
      "Cyanidium",
      "Navicula"
    ]
  },
  {
    enunciado: "Las 'mareas rojas' o HABs se asocian con frecuencia a:",
    correcta: "Dinoflagelados como Alexandrium o Karenia",
    incorrectas: [
      "Amebas lobosas como Amoeba proteus",
      "Clorofitas de agua dulce como Chlamydomonas"
    ]
  },
  {
    enunciado: "El ácido domoico responsable del síndrome amnésico se relaciona con floraciones de:",
    correcta: "Diatomeas del género Pseudo-nitzschia",
    incorrectas: [
      "Ciliados tintínidos",
      "Foraminíferos planctónicos"
    ]
  },
  {
    enunciado: "El término 'fitoplancton' se refiere a:",
    correcta: "Comunidades fotosintéticas microscópicas en medios acuáticos",
    incorrectas: [
      "Todos los consumidores del plancton",
      "Sólo macroalgas bentónicas"
    ]
  },
  {
    enunciado: "El 'microbial loop' destaca porque:",
    correcta: "Protozoos reciclan DOM/POM y sostienen redes tróficas",
    incorrectas: [
      "Suprime la productividad primaria",
      "Elimina la depredación del zooplancton"
    ]
  },
  {
    enunciado: "Una simbiosis clave para arrecifes corales implica:",
    correcta: "Zooxantelas (dinoflagelados) en tejido coralino",
    incorrectas: [
      "Diatomeas en el endodermo de peces",
      "Euglenas en esponjas de aguas profundas"
    ]
  },
  {
    enunciado: "Diatomeas bentónicas se emplean en bioindicación principalmente por:",
    correcta: "Cambios de composición frente a eutrofización y contaminación",
    incorrectas: [
      "Su ausencia total en ríos europeos",
      "Carecer de respuesta a variaciones de nutrientes"
    ]
  },
  {
    enunciado: "Un protozoo flagelado intestinal patógeno humano es:",
    correcta: "Giardia",
    incorrectas: [
      "Ulva",
      "Navicula"
    ]
  },
  {
    enunciado: "Plasmodium, agente de la malaria, pertenece a:",
    correcta: "Apicomplejos",
    incorrectas: [
      "Dinoflagelados simbiontes",
      "Foraminíferos calcáreos"
    ]
  },
  {
    enunciado: "La enfermedad del sueño africana está causada por:",
    correcta: "Trypanosoma brucei transmitido por tsetsé",
    incorrectas: [
      "Leishmania por triatominos",
      "Toxoplasma por ácaros acuáticos"
    ]
  },
  {
    enunciado: "Un moho acuático o pseudohongo de interés fitopatológico es:",
    correcta: "Phytophthora (Oomycetes)",
    incorrectas: [
      "Agaricus (Basidiomycota)",
      "Trichomonas (Parabasalia)"
    ]
  },
  {
    enunciado: "Un género de cianobacteria NO es protoctista porque:",
    correcta: "Es procariota (Bacteria), no eucariota",
    incorrectas: [
      "Carece de clorofila a",
      "Tiene núcleo verdadero y plastidios"
    ]
  },
  {
    enunciado: "Ulva y Porphyra son ejemplos de:",
    correcta: "Macroalgas verdes y rojas respectivamente, de interés alimentario",
    incorrectas: [
      "Ciliados marinos filtradores",
      "Protozoos patógenos intestinales"
    ]
  },
  {
    enunciado: "Los hidrocoloides agar y carragenanos se obtienen de:",
    correcta: "Algas rojas (Rhodophyta) como Gelidium y Chondrus",
    incorrectas: [
      "Diatomeas con frústulas silíceas",
      "Dinoflagelados simbiontes"
    ]
  },
  {
    enunciado: "La astaxantina comercial puede obtenerse de microalgas como:",
    correcta: "Haematococcus",
    incorrectas: [
      "Paramecium",
      "Plasmodium"
    ]
  },
  {
    enunciado: "Un riesgo sanitario asociado a HABs es:",
    correcta: "Intoxicaciones por biotoxinas como saxitoxina o brevetoxina",
    incorrectas: [
      "Hipoxia por consumo masivo de nitrógeno atmosférico",
      "Resistencia bacteriana a antibióticos betalactámicos"
    ]
  },
  {
    enunciado: "En monitorización de fitoplancton, el pigmento integrador más usado es:",
    correcta: "Clorofila a",
    incorrectas: [
      "Hemoglobina",
      "Melanina"
    ]
  },
  {
    enunciado: "Una técnica de conteo e identificación de microalgas en laboratorio es:",
    correcta: "Sedimentación de Utermöhl y microscopía invertida",
    incorrectas: [
      "Tinción de Ziehl–Neelsen en placa",
      "Detección por Gram positivo/negativo"
    ]
  },
  {
    enunciado: "En teledetección oceánica, el 'ocean color' permite estimar:",
    correcta: "Biomasa fitoplanctónica y eventos de floración",
    incorrectas: [
      "Abundancia de zooplancton gelatinoso exclusivamente",
      "Cantidad de ADN ambiental sin calibración"
    ]
  },
  {
    enunciado: "Un género dulceacuícola colonial esférico y fotótrofo es:",
    correcta: "Volvox",
    incorrectas: [
      "Vorticella",
      "Globigerina"
    ]
  },
  {
    enunciado: "Los tintínidos son:",
    correcta: "Ciliados planctónicos con loriga, parte del microzooplancton",
    incorrectas: [
      "Dinoflagelados exclusivamente bentónicos",
      "Foraminíferos con frústulas silíceas"
    ]
  },
  {
    enunciado: "Un indicador biológico de eutrofización en charcas puede ser la abundancia de:",
    correcta: "Euglenófitos como Euglena",
    incorrectas: [
      "Foraminíferos pelágicos",
      "Cianobacterias estrictamente marinas siempre"
    ]
  },
  {
    enunciado: "La mayoría de dinoflagelados poseen:",
    correcta: "Placas celulósicas en tecas y dos flagelos",
    incorrectas: [
      "Frústulas de sílice como diatomeas",
      "Conchas calcáreas con cámaras como foraminíferos"
    ]
  },
  {
    enunciado: "La bomba biológica de carbono se ve reforzada por:",
    correcta: "Hundimiento de agregados y frústulas de diatomeas",
    incorrectas: [
      "Exclusión de silicificación en el océano",
      "Aumento de respiración bacteriana sin exportación"
    ]
  },
  {
    enunciado: "Entre los apicomplejos de importancia veterinaria y humana se hallan:",
    correcta: "Plasmodium y Toxoplasma",
    incorrectas: [
      "Amoeba y Arcella",
      "Euglena y Volvox"
    ]
  },
  {
    enunciado: "En acuicultura, un impacto económico de HABs es:",
    correcta: "Mortalidad de peces y cierres de cosecha de marisco",
    incorrectas: [
      "Aumento de oxígeno y mayor supervivencia",
      "Eliminación de patógenos bacterianos por toxinas"
    ]
  },
  {
    enunciado: "El término 'charcas y ríos' en muestreo fitoplanctónico implica priorizar:",
    correcta: "Redes finas, botellas y análisis de diatomeas bentónicas",
    incorrectas: [
      "Dragados profundos y CTD oceánicos exclusivamente",
      "Sólo trampas de sedimento de aguas abisales"
    ]
  },
  {
    enunciado: "Una aplicación bioeconómica emergente de microalgas es:",
    correcta: "Producción de biocombustibles y compuestos de alto valor",
    incorrectas: [
      "Sustituir completamente las pesquerías pelágicas",
      "Remplazar antibióticos en clínica humana"
    ]
  }
];
