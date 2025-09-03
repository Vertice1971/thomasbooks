// temarios/38-Revolucion-industrial-e-industrializacion.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué se entiende por Revolución Industrial en sentido histórico-económico?",
    correcta: "Un proceso acumulativo de transformaciones tecnológicas, productivas y sociales que desplaza la producción artesanal hacia la mecanizada en fábricas",
    incorrectas: [
      "Un cambio político puntual que sustituye una dinastía por otra sin alterar la economía",
      "Un conjunto de guerras coloniales que reordenan fronteras sin efectos productivos"
    ]
  },
  {
    enunciado: "¿Por qué Gran Bretaña fue el primer país en industrializarse de manera sostenida?",
    correcta: "Por la combinación de carbón abundante, estabilidad institucional, mercados amplios y un sistema financiero desarrollado",
    incorrectas: [
      "Porque su clima tropical permitía cosechas de algodón durante todo el año",
      "Porque carecía de legislación de patentes y secretismo industrial"
    ]
  },
  {
    enunciado: "¿Qué papel desempeñaron los enclosures en la industrialización británica?",
    correcta: "Favorecieron la modernización agraria y liberaron mano de obra hacia las ciudades industriales",
    incorrectas: [
      "Obligaron a los campesinos a regresar a la gleba bajo jurisdicción señorial",
      "Impidieron el crecimiento urbano al prohibir desplazamientos internos"
    ]
  },
  {
    enunciado: "¿Cuál fue la mejora clave de James Watt respecto a la máquina de vapor de Newcomen?",
    correcta: "La incorporación del condensador separado que incrementó notablemente la eficiencia",
    incorrectas: [
      "La sustitución del vapor por energía eólica",
      "La introducción del telar Jacquard en el mismo artilugio"
    ]
  },
  {
    enunciado: "¿Qué innovación transformó la siderurgia en la primera fase de la Revolución Industrial?",
    correcta: "El uso de coque en altos hornos para fundir hierro de manera más eficiente",
    incorrectas: [
      "La electrólisis del aluminio a gran escala en 1750",
      "La fusión del hierro mediante energía solar concentrada"
    ]
  },
  {
    enunciado: "¿Qué sector actuó como motor inicial del despegue industrial británico?",
    correcta: "El textil algodonero, gracias a la mecanización del hilado y el tejido",
    incorrectas: [
      "La industria aeroespacial",
      "La construcción de rascacielos de acero y vidrio"
    ]
  },
  {
    enunciado: "¿Cuál es la contribución de la Spinning Jenny (Hargreaves) al textil?",
    correcta: "Multiplicó la productividad del hilado al permitir manejar varias bobinas a la vez",
    incorrectas: [
      "Introdujo el teñido sintético en la misma máquina",
      "Sustituyó por completo la fuerza humana por electricidad"
    ]
  },
  {
    enunciado: "¿Qué logro se asocia a Richard Arkwright y su water frame?",
    correcta: "El hilado mecánico continuo impulsado por energía hidráulica en fábricas",
    incorrectas: [
      "El primer motor de combustión interna de gasolina",
      "La invención del telégrafo eléctrico comercial"
    ]
  },
  {
    enunciado: "¿Qué combinación creó Samuel Crompton con la mule-jenny?",
    correcta: "Integró ventajas de la Spinning Jenny y del water frame para un hilo más fino y resistente",
    incorrectas: [
      "Fusionó telégrafo y telar para controlar patrones a distancia",
      "Creó un sistema de vapor sin caldera ni combustible"
    ]
  },
  {
    enunciado: "¿Qué aportaron Henry Cort y su pudelado y laminado?",
    correcta: "Mejoraron la calidad y uniformidad del hierro forjado, abaratando costes",
    incorrectas: [
      "Descubrieron el proceso Bessemer para el acero en 1700",
      "Sustituyeron el coque por electricidad doméstica"
    ]
  },
  {
    enunciado: "¿Qué importancia tuvieron los canales como el de Bridgewater (1761)?",
    correcta: "Reducían costes de transporte de carbón y materias primas, integrando mercados internos",
    incorrectas: [
      "Servían exclusivamente para defensa militar y no para comercio",
      "Aumentaban los costes de flete frente al transporte por carreta"
    ]
  },
  {
    enunciado: "¿Qué simboliza el ferrocarril en la primera industrialización?",
    correcta: "La aceleración de flujos de mercancías y personas y la unificación de mercados nacionales",
    incorrectas: [
      "La sustitución completa del comercio marítimo transoceánico",
      "La reducción del consumo de carbón en la economía"
    ]
  },
  {
    enunciado: "¿Qué logro técnico se asocia a la locomotora Rocket (1829) de George Stephenson?",
    correcta: "Demostró la viabilidad del ferrocarril a vapor para transporte rápido y regular",
    incorrectas: [
      "Fue el primer tren eléctrico metropolitano de Europa",
      "El primer tren de levitación magnética comercial"
    ]
  },
  {
    enunciado: "¿Cuál fue el impacto de la navegación a vapor en el siglo XIX?",
    correcta: "Acortó tiempos de travesía, hizo más predecibles los itinerarios y expandió el comercio",
    incorrectas: [
      "Hizo innecesarios los puertos y astilleros",
      "Sustituyó inmediatamente a la vela en todas las rutas"
    ]
  },
  {
    enunciado: "¿Qué caracteriza a la Segunda Revolución Industrial (c. 1870–1914)?",
    correcta: "El protagonismo del acero, la electricidad, la química y el motor de combustión interna",
    incorrectas: [
      "El retorno generalizado al telar manual",
      "La desaparición de la gran empresa en favor del artesanado"
    ]
  },
  {
    enunciado: "¿Qué aportó el convertidor Bessemer (1856)?",
    correcta: "Abrió la producción masiva y barata de acero al insuflar aire en el arrabio",
    incorrectas: [
      "Permitió refinar petróleo en queroseno sin destilación",
      "Sustituyó el carbón por uranio en altos hornos"
    ]
  },
  {
    enunciado: "¿Qué efecto tuvo la electricidad en la organización fabril?",
    correcta: "Flexibilizó la disposición de máquinas y elevó la productividad mediante motores eléctricos",
    incorrectas: [
      "Impidió trabajar de noche por riesgo de apagones",
      "Obligó a concentrar todas las máquinas alrededor de un único eje central"
    ]
  },
  {
    enunciado: "¿Qué innovaciones destacan en la industria química de la segunda fase?",
    correcta: "Colorantes sintéticos, fertilizantes y nuevos procesos como Solvay",
    incorrectas: [
      "La fusión fría y la polimerización autoinducida",
      "El grafeno industrial a gran escala en 1880"
    ]
  },
  {
    enunciado: "¿Qué supuso el taylorismo para la organización del trabajo?",
    correcta: "La división científica de tareas y la estandarización de tiempos y movimientos",
    incorrectas: [
      "El retorno al trabajo a destajo artesanal sin control del tiempo",
      "La abolición de la supervisión en la fábrica"
    ]
  },
  {
    enunciado: "¿Qué añadió el fordismo respecto del taylorismo?",
    correcta: "La cadena de montaje y la producción en masa de bienes estandarizados",
    incorrectas: [
      "La autosuficiencia familiar y el taller doméstico",
      "La supresión de salarios para abaratar el producto"
    ]
  },
  {
    enunciado: "¿Qué transformación social acompañó al proceso industrializador?",
    correcta: "La formación de un proletariado urbano y la consolidación de la burguesía industrial",
    incorrectas: [
      "La desaparición de la ciudad como centro económico",
      "La vuelta general al sistema gremial medieval"
    ]
  },
  {
    enunciado: "¿Qué denunció Friedrich Engels en 'La situación de la clase obrera en Inglaterra' (1845)?",
    correcta: "Las duras condiciones de trabajo y vida del proletariado en los barrios industriales",
    incorrectas: [
      "La abundancia de salarios y viviendas amplias para todos",
      "La sustitución total del trabajo infantil por escolarización universal ya en 1800"
    ]
  },
  {
    enunciado: "¿Qué fueron los luditas en las primeras décadas del siglo XIX?",
    correcta: "Grupos obreros que destruyeron máquinas al considerarlas causa de desempleo y miseria",
    incorrectas: [
      "Ingenieros que patentaban innovaciones en nombre de Ludd",
      "Propietarios rurales que promovían enclosures"
    ]
  },
  {
    enunciado: "¿Qué reivindicó el cartismo en Gran Bretaña (1838–1848)?",
    correcta: "Reformas políticas como el sufragio masculino amplio y voto secreto",
    incorrectas: [
      "El restablecimiento de la monarquía absoluta",
      "La abolición de todos los sindicatos obreros"
    ]
  },
  {
    enunciado: "¿Qué finalidad tuvieron las Factory Acts (desde 1833) y otras leyes laborales británicas?",
    correcta: "Limitar jornadas, regular el trabajo infantil y mejorar condiciones en fábricas y minas",
    incorrectas: [
      "Prohibir la mecanización textil",
      "Imponer el trabajo forzoso para desempleados urbanos"
    ]
  },
  {
    enunciado: "¿Cómo afectó la Revolución Industrial a la demografía europea?",
    correcta: "Aceleró el crecimiento poblacional al descender la mortalidad y mejorar la alimentación",
    incorrectas: [
      "Provocó un colapso demográfico inmediato por hambrunas",
      "Estancó la población por restricciones a la natalidad desde 1750"
    ]
  },
  {
    enunciado: "¿Qué fenómenos urbanos caracterizaron a ciudades como Manchester o Liverpool?",
    correcta: "Rápido crecimiento, hacinamiento, insalubridad y barrios obreros densos",
    incorrectas: [
      "Despoblación sostenida y retorno al campo",
      "Planificación higienista integral desde el inicio del proceso"
    ]
  },
  {
    enunciado: "¿Qué denunció el Informe Chadwick (1842) en Gran Bretaña?",
    correcta: "Las pésimas condiciones sanitarias en áreas industriales y la necesidad de reformas higiénicas",
    incorrectas: [
      "La abundancia de parques y viviendas ventiladas en barrios obreros",
      "El exceso de regulación urbanística que encarecía la vivienda"
    ]
  },
  {
    enunciado: "¿Qué es el Zollverein (1834) y por qué fue relevante para Alemania?",
    correcta: "Una unión aduanera que integró mercados y favoreció la industrialización alemana",
    incorrectas: [
      "Una alianza militar contra el Imperio austrohúngaro",
      "Un tratado para prohibir el uso de carbón en la industria"
    ]
  },
  {
    enunciado: "¿Qué rasgo tuvo la industrialización de Estados Unidos en el siglo XIX?",
    correcta: "Amplios recursos, rápida expansión ferroviaria y adopción de sistemas de manufactura con piezas intercambiables",
    incorrectas: [
      "Dependencia exclusiva de importaciones para maquinaria",
      "Ausencia total de patentes y protección de inventores"
    ]
  },
  {
    enunciado: "¿Qué caracteriza la industrialización japonesa durante la era Meiji?",
    correcta: "Modernización estatal acelerada, importación de tecnología y promoción de keiretsu/zaibatsu",
    incorrectas: [
      "Rechazo de toda tecnología occidental por decreto",
      "Retorno al feudalismo y cierre de puertos"
    ]
  },
  {
    enunciado: "¿Qué papel jugó el imperialismo en la era de la Segunda Revolución Industrial?",
    correcta: "Aseguró materias primas y mercados para potencias industriales, intensificando la competencia internacional",
    incorrectas: [
      "Redujo el comercio mundial al mínimo",
      "Impidió la difusión tecnológica entre países"
    ]
  },
  {
    enunciado: "¿Qué relación existe entre Revolución Industrial y capitalismo financiero?",
    correcta: "La industria intensiva en capital favoreció la banca de inversión, las bolsas y nuevas formas societarias",
    incorrectas: [
      "El sistema fabril se financió sin crédito ni acciones",
      "Se prohibió la cotización de empresas industriales"
    ]
  },
  {
    enunciado: "¿Qué efecto ambiental fue característico de la primera industrialización?",
    correcta: "Altos niveles de contaminación del aire y del agua en zonas urbanas y fabriles",
    incorrectas: [
      "Mejora generalizada de la calidad del aire por uso de energías limpias",
      "Reforestación espontánea de áreas mineras activas"
    ]
  },
  {
    enunciado: "¿Qué significó la 'Gran Hediondez' de Londres (1858)?",
    correcta: "Una crisis sanitaria causada por la contaminación del Támesis que impulsó obras de alcantarillado",
    incorrectas: [
      "Una plaga agrícola que arruinó el algodón egipcio",
      "Un bloqueo naval que paralizó el comercio británico"
    ]
  },
  {
    enunciado: "¿Qué objetivo tuvo la Ley General de Ferrocarriles de 1855 en España?",
    correcta: "Impulsar la construcción de una red ferroviaria para integrar mercados y fomentar la industrialización",
    incorrectas: [
      "Prohibir las líneas de ancho ibérico",
      "Nacionalizar todas las minas de carbón"
    ]
  },
  {
    enunciado: "¿Qué rasgo distingue a las 'industrias pesadas' de la segunda fase respecto de la primera?",
    correcta: "Mayor intensidad de capital y tecnología en siderurgia, química y energía",
    incorrectas: [
      "Predominio del lino y la lana artesanales",
      "Sustitución de fábricas por talleres domésticos dispersos"
    ]
  },
  {
    enunciado: "¿Qué vínculo existe entre innovación y patentes en el despegue industrial?",
    correcta: "Los sistemas de patentes incentivaron la invención al proteger derechos y rentas de los inventores",
    incorrectas: [
      "La ausencia de patentes estimuló la copia indiscriminada sin innovación",
      "Las patentes prohibían publicar planos o difundir mejoras"
    ]
  },
  {
    enunciado: "¿Qué fue la 'Gran Divergencia' según algunas interpretaciones históricas recientes?",
    correcta: "El proceso por el cual Europa Occidental y luego Norteamérica se separaron en renta y capacidad industrial de otras regiones",
    incorrectas: [
      "La rápida convergencia salarial mundial en 1750",
      "La igualdad global de productividad entre 1700 y 1850"
    ]
  },
  {
    enunciado: "¿Qué impacto tuvo el motor de combustión interna en la segunda industrialización?",
    correcta: "Impulsó el transporte automotriz y nuevas industrias vinculadas al petróleo y la mecánica",
    incorrectas: [
      "Sustituyó de inmediato todos los ferrocarriles a vapor",
      "Eliminó la necesidad de refinerías y lubricantes"
    ]
  },
  {
    enunciado: "¿Cómo se relacionan urbanismo e higienismo con la ciudad industrial madura?",
    correcta: "Surgieron planes de saneamiento, abastecimiento de agua y nuevos modelos de vivienda obrera",
    incorrectas: [
      "Se prohibió la construcción de alcantarillado por su elevado coste",
      "Se obligó a mantener talleres y viviendas en el mismo recinto"
    ]
  },
  {
    enunciado: "¿Qué fenómeno laboral fue habitual en la primera industrialización y dio lugar a reformas?",
    correcta: "La generalización del trabajo infantil y femenino con largas jornadas y salarios bajos",
    incorrectas: [
      "La equiparación salarial inmediata por ley entre directivos y peones",
      "La semana laboral de 35 horas desde 1800"
    ]
  },
  {
    enunciado: "¿Qué papel tuvieron las escuelas técnicas y politécnicas en la segunda fase?",
    correcta: "Formaron ingenieros y técnicos que profesionalizaron la innovación y la gestión industrial",
    incorrectas: [
      "Sustituyeron por completo los aprendizajes en fábricas",
      "Prohibieron la experimentación química en la industria"
    ]
  }
];
