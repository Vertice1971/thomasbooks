// temarios/29-La-expansion-de-los-reinos-cristianos-en-la-peninsula-iberica.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué factor interno del reino visigodo facilitó la rápida expansión musulmana tras 711?",
    correcta: "La inestabilidad sucesoria y las luchas entre facciones nobiliarias debilitaron al reino visigodo",
    incorrectas: [
      "La inexistencia de una red de ciudades con murallas en la Meseta facilitó su ocupación",
      "La sustitución previa del cristianismo por el arrianismo en toda la población provocó su colapso inmediato"
    ]
  },
  {
    enunciado: "¿Qué significado histórico tiene la batalla de Covadonga según la tradición cristiana medieval?",
    correcta: "Representa el inicio simbólico de la resistencia cristiana en el norte peninsular",
    incorrectas: [
      "Marca la derrota definitiva del emirato cordobés frente a los francos",
      "Supone la anexión del reino de Navarra al reino asturiano"
    ]
  },
  {
    enunciado: "¿Qué monarca impulsó la expansión del reino de Asturias hacia León y la Meseta del Duero a finales del siglo IX?",
    correcta: "Alfonso III favoreció la proyección hacia León y la colonización al sur de la Cordillera Cantábrica",
    incorrectas: [
      "Ramiro I trasladó la capital a Toledo para avanzar hacia el Tajo",
      "Ordoño II abandonó la Meseta del Duero para reforzar Galicia"
    ]
  },
  {
    enunciado: "¿Qué transformación política caracterizó al condado de Castilla durante el siglo X?",
    correcta: "El condado de Castilla reforzó su autonomía bajo Fernán González frente al reino de León",
    incorrectas: [
      "El condado de Castilla se integró en la Marca Hispánica de forma permanente",
      "El condado de Castilla fue anexionado al reino de Navarra sin resistencia"
    ]
  },
  {
    enunciado: "¿Qué hecho del año 1085 supuso un hito en la expansión cristiana hacia el centro peninsular?",
    correcta: "La conquista de Toledo por Alfonso VI consolidó el avance castellano-leonés",
    incorrectas: [
      "La toma de Zaragoza por Alfonso I el Batallador aseguró el control del Ebro",
      "La ocupación de Valencia por Jaime I cambió el equilibrio en el Levante"
    ]
  },
  {
    enunciado: "¿Qué consecuencia inmediata tuvo la llegada de los almorávides a la península a finales del siglo XI?",
    correcta: "La llegada de los almorávides frenó temporalmente el avance cristiano tras 1085",
    incorrectas: [
      "La llegada de los almorávides aceleró la disgregación de los reinos cristianos del norte",
      "La llegada de los almorávides facilitó la union dinástica de Castilla y Aragón"
    ]
  },
  {
    enunciado: "¿Qué papel desempeñó Sancho III el Mayor en el panorama político cristiano del siglo XI?",
    correcta: "Sancho III articuló una hegemonía navarra con influencia sobre Castilla, Aragón y León",
    incorrectas: [
      "Sancho III instauró la primera corona ibérica suprarregional con capital en Toledo",
      "Sancho III repobló íntegramente el valle del Guadalquivir con colonos navarros"
    ]
  },
  {
    enunciado: "¿Cuál fue el impacto estratégico de la batalla de las Navas de Tolosa (1212)?",
    correcta: "La victoria cristiana debilitó decisivamente al poder almohade en la península",
    incorrectas: [
      "La derrota cristiana precipitó la pérdida de Toledo y Segovia",
      "El resultado indeciso consolidó un largo equilibrio bélico en la frontera del Tajo"
    ]
  },
  {
    enunciado: "¿Qué rey impulsó la conquista de Zaragoza en 1118, integrándola en la órbita aragonesa?",
    correcta: "Alfonso I el Batallador incorporó Zaragoza al reino de Aragón en 1118",
    incorrectas: [
      "Alfonso X el Sabio tomó Zaragoza y la anexionó a Castilla en 1252",
      "Fernando III capturó Zaragoza tras la caída de Sevilla"
    ]
  },
  {
    enunciado: "¿Qué monarca lideró la conquista de Mallorca en 1229 y Valencia en 1238?",
    correcta: "Jaime I de Aragón encabezó la incorporación de Mallorca y Valencia",
    incorrectas: [
      "Pedro II de Aragón anexó ambos territorios durante su reinado",
      "Ramón Berenguer IV integró Mallorca y Valencia en la Corona de Aragón"
    ]
  },
  {
    enunciado: "¿Qué soberano impulsó la conquista de Córdoba (1236) y Sevilla (1248), consolidando el valle del Guadalquivir?",
    correcta: "Fernando III de Castilla y León aseguró la ocupación de Córdoba y Sevilla",
    incorrectas: [
      "Alfonso VI de León organizó la toma de Córdoba y Sevilla en 1087",
      "Enrique II de Trastámara dirigió la campaña final sobre el Guadalquivir"
    ]
  },
  {
    enunciado: "¿Qué fórmula jurídica de repoblación consistía en ocupar tierras abandonadas con garantía legal para su aprovechamiento?",
    correcta: "La presura o aprisio permitía a los colonos adquirir la tierra por su cultivo continuado",
    incorrectas: [
      "El mayorazgo reservaba la tierra al primogénito sin colonización efectiva",
      "La behetría prohibía la libre elección de señor por parte de las comunidades"
    ]
  },
  {
    enunciado: "¿Qué institución urbana fue clave para atraer población y organizar el territorio repoblado?",
    correcta: "El concejo con fuero propio reguló derechos, obligaciones y autogobierno local",
    incorrectas: [
      "El cabildo catedralicio asumió todas las funciones civiles en las villas repobladas",
      "La chancillería real sustituyó a los concejos en la administración cotidiana"
    ]
  },
  {
    enunciado: "¿Qué modelo de repoblación se aplicó masivamente tras las grandes conquistas del siglo XIII en Andalucía y el Levante?",
    correcta: "El repartimiento distribuyó tierras entre la Corona, la nobleza, las órdenes militares y los pobladores",
    incorrectas: [
      "La roturación foral suprimió la propiedad señorial en favor de comunales",
      "La carta puebla priorizó la cesión de tierras a monasterios cistercienses"
    ]
  },
  {
    enunciado: "¿Qué finalidad perseguían los fueros municipales en las zonas de frontera?",
    correcta: "Los fueros ofrecían privilegios y seguridad jurídica para atraer colonos a áreas de riesgo",
    incorrectas: [
      "Los fueros imponían aranceles disuasorios para limitar la movilidad de artesanos",
      "Los fueros prohibían el comercio a larga distancia para evitar desabastecimientos"
    ]
  },
  {
    enunciado: "¿Qué órdenes militares desempeñaron un papel decisivo en la conquista y defensa de las nuevas fronteras castellanas?",
    correcta: "Las órdenes de Calatrava, Santiago y Alcántara fortificaron y administraron amplios señoríos",
    incorrectas: [
      "Las órdenes del Temple y de Montesa dominaron la Alta Andalucía desde el siglo XI",
      "Las órdenes de Avis y Cristo monopolizaron la repoblación del valle del Ebro"
    ]
  },
  {
    enunciado: "¿Qué institución ganadera fundada en 1273 favoreció la trashumancia y articuló las cañadas reales?",
    correcta: "La Mesta, creada por Alfonso X, impulsó la trashumancia ovina a gran escala",
    incorrectas: [
      "La Hermandad Vieja de Toledo organizó los pastos comunales y las cañadas",
      "El Consulado del Mar reguló las veredas ganaderas y los puertos de montaña"
    ]
  },
  {
    enunciado: "¿Qué relación mantuvieron las coronas cristianas con el reino nazarí de Granada durante los siglos XIV y XV?",
    correcta: "Las coronas cristianas combinaron la presión militar con la diplomacia y el cobro de parias",
    incorrectas: [
      "Las coronas cristianas reconocieron la plena soberanía granadina sin intervención",
      "Las coronas cristianas establecieron una unión dinástica con Granada en 1402"
    ]
  },
  {
    enunciado: "¿Qué función desempeñó el Camino de Santiago en la articulación del norte peninsular durante la expansión?",
    correcta: "El Camino favoreció el poblamiento, el comercio y la difusión cultural en la franja cantábrica y meseteña",
    incorrectas: [
      "El Camino impidió la circulación de mercaderes extranjeros por razones fiscales",
      "El Camino sustituyó a los concejos como principal autoridad administrativa local"
    ]
  },
  {
    enunciado: "¿Cuál fue el papel del papado y del discurso de cruzada en la expansión peninsular de los siglos XII y XIII?",
    correcta: "El papado otorgó indulgencias y legitimidad religiosa a campañas militares contra poderes musulmanes",
    incorrectas: [
      "El papado prohibió sistemáticamente las campañas peninsulares por razones diplomáticas",
      "El papado exigió la devolución de todos los territorios conquistados al emir de Córdoba"
    ]
  },
  {
    enunciado: "¿Qué característica diferenció la Corona de Aragón en su expansión durante los siglos XIII y XIV?",
    correcta: "La Corona de Aragón combinó la conquista peninsular con la expansión mediterránea hacia Baleares y Sicilia",
    incorrectas: [
      "La Corona de Aragón renunció a toda salida al mar para centrarse en la Meseta",
      "La Corona de Aragón subordinó su política a la de Castilla desde mediados del siglo XIII"
    ]
  },
  {
    enunciado: "¿Qué papel económico desempeñaron las ciudades castellanas durante la repoblación de la Meseta?",
    correcta: "Las ciudades actuaron como nodos de mercado y administración, integrando los territorios recién ocupados",
    incorrectas: [
      "Las ciudades quedaron deshabitadas por la prioridad dada a las aldeas",
      "Las ciudades dependieron exclusivamente de diezmos eclesiásticos para su sostenimiento"
    ]
  },
  {
    enunciado: "¿Qué dinámica social se generó con la instalación de colonos en zonas conquistadas?",
    correcta: "La llegada de colonos produjo una sociedad mixta con tensiones y periodos de coexistencia con mudéjares y judíos",
    incorrectas: [
      "La colonización eliminó por completo a la población anterior mediante expulsiones masivas",
      "La colonización impuso la servidumbre universal de todos los nuevos pobladores cristianos"
    ]
  },
  {
    enunciado: "¿Qué documento jurídico garantizaba derechos y deberes a los habitantes de una villa repoblada?",
    correcta: "El fuero municipal recogía las normas civiles, penales y fiscales de la comunidad",
    incorrectas: [
      "La bula real recogía las tasas de mercado y los monopolios señoriales",
      "La capitulación señorial fijaba exenciones para la nobleza residente únicamente"
    ]
  },
  {
    enunciado: "¿Qué ciudad se convirtió en referente político y cultural tras su conquista en 1085?",
    correcta: "La ciudad de Toledo se convirtió en un centro político e intelectual de la Corona de Castilla",
    incorrectas: [
      "La ciudad de Badajoz se transformó en capital del reino de León",
      "La ciudad de Murcia pasó a ser la sede del papado peninsular"
    ]
  },
  {
    enunciado: "¿Qué campaña consolidó el control cristiano del bajo Guadalquivir a mediados del siglo XIII?",
    correcta: "La conquista de Sevilla en 1248 consolidó el dominio cristiano del bajo Guadalquivir",
    incorrectas: [
      "La conquista de Lisboa en 1147 aseguró el control castellano del Atlántico",
      "La conquista de Granada en 1212 aseguró el control del Mediterráneo occidental"
    ]
  },
  {
    enunciado: "¿Qué figura jurídica reguló la convivencia de musulmanes bajo dominio cristiano tras las conquistas?",
    correcta: "El estatus de mudéjar permitió la permanencia de comunidades musulmanas con régimen jurídico específico",
    incorrectas: [
      "El estatuto de mozárabe obligó a todos los musulmanes a convertirse inmediatamente",
      "El fuero eclesiástico extendió la jurisdicción canónica a toda la población musulmana"
    ]
  },
  {
    enunciado: "¿Qué recurso fiscal utilizaron los reinos cristianos para presionar a los poderes andalusíes en los siglos XI y XII?",
    correcta: "El cobro de parias constituyó un mecanismo de financiación y dominación política",
    incorrectas: [
      "El impuesto de la yizia gravó a los cristianos residentes en territorios musulmanes",
      "El diezmo laico sustituyó a todos los tributos concejiles en la frontera"
    ]
  },
  {
    enunciado: "¿Qué función cumplieron las fortalezas y castillos en los espacios de frontera?",
    correcta: "Las fortalezas y castillos aseguraron el control del territorio y protegieron rutas y poblaciones",
    incorrectas: [
      "Las fortalezas y castillos se usaron exclusivamente como graneros comunales",
      "Las fortalezas y castillos fueron sustituidas por murallas de madera tras el siglo XII"
    ]
  },
  {
    enunciado: "¿Qué papel desempeñaron los repartimientos en la configuración de la estructura agraria andaluza?",
    correcta: "Los repartimientos crearon grandes dominios nobiliarios junto a propiedades concejiles y eclesiásticas",
    incorrectas: [
      "Los repartimientos abolieron la propiedad privada y favorecieron el comunal",
      "Los repartimientos prohibieron la posesión de tierras por parte de las órdenes militares"
    ]
  },
  {
    enunciado: "¿Qué hito político de 1469 condicionó la fase final de la expansión sobre Granada?",
    correcta: "La unión dinástica de Isabel de Castilla y Fernando de Aragón fortaleció la ofensiva final",
    incorrectas: [
      "La coronación de Alfonso V de Portugal integró Granada en la monarquía lusa",
      "La abdicación de Juan II de Castilla entregó Granada a la nobleza andaluza"
    ]
  },
  {
    enunciado: "¿Qué característica tuvo la guerra de Granada (1482–1492) en comparación con fases anteriores?",
    correcta: "La guerra de Granada combinó asedios prolongados, diplomacia interna y control de recursos",
    incorrectas: [
      "La guerra de Granada se resolvió en una única batalla campal de gran envergadura",
      "La guerra de Granada se basó exclusivamente en corsarismo mediterráneo"
    ]
  },
  {
    enunciado: "¿Qué significación histórica tienen las Capitulaciones de Granada firmadas antes de 1492?",
    correcta: "Las Capitulaciones establecieron condiciones de rendición y garantías para la población musulmana",
    incorrectas: [
      "Las Capitulaciones fijaron la unión política de Castilla y Portugal bajo un mismo monarca",
      "Las Capitulaciones abolieron los fueros de todas las villas andaluzas conquistadas"
    ]
  },
  {
    enunciado: "¿Qué impacto tuvo la expansión cristiana en la red urbana peninsular?",
    correcta: "La expansión reforzó nodos urbanos como Burgos, León, Toledo, Sevilla, Valencia y Zaragoza",
    incorrectas: [
      "La expansión provocó el abandono de todas las capitales andalusíes conquistadas",
      "La expansión sustituyó las ciudades por fortalezas rurales dispersas"
    ]
  },
  {
    enunciado: "¿Qué papel tuvieron los francos y la Marca Hispánica en el noreste peninsular?",
    correcta: "La Marca Hispánica creó una franja de condados fronterizos que evolucionaron hacia entidades autónomas",
    incorrectas: [
      "La Marca Hispánica impidió la formación de cualquier poder cristiano en los Pirineos",
      "La Marca Hispánica integró Navarra y Castilla bajo soberanía carolingia permanente"
    ]
  },
  {
    enunciado: "¿Qué efecto económico produjo la articulación de cañadas reales y veredas en la Meseta?",
    correcta: "La articulación de cañadas favoreció la trashumancia y el intercambio entre zonas pastoriles y cerealistas",
    incorrectas: [
      "La articulación de cañadas eliminó el comercio urbano al concentrarlo en ferias monásticas",
      "La articulación de cañadas sustituyó la moneda por el trueque obligatorio"
    ]
  },
  {
    enunciado: "¿Qué elemento militar y demográfico explica la continuidad de la expansión a largo plazo?",
    correcta: "La combinación de ofensiva militar y repoblación estable aseguró la ocupación efectiva del territorio",
    incorrectas: [
      "La renuncia a la colonización rural priorizó la ocupación efímera de fortalezas",
      "La prohibición de asentamientos en frontera impidió el avance sostenido"
    ]
  },
  {
    enunciado: "¿Qué diferencia general se observa entre la Corona de Castilla y la de Aragón en sus ámbitos de expansión?",
    correcta: "Castilla se proyectó hacia la Meseta y Andalucía mientras Aragón se orientó al valle del Ebro y al Mediterráneo",
    incorrectas: [
      "Castilla se concentró en los Pirineos mientras Aragón ocupó el valle del Guadalquivir",
      "Castilla se expandió por el norte de África mientras Aragón lo hizo por Irlanda"
    ]
  },
  {
    enunciado: "¿Qué efecto tuvieron las crisis del Califato y las taifas en el avance cristiano del siglo XI?",
    correcta: "La fragmentación política andalusí facilitó conquistas como la de Toledo y el cobro de parias",
    incorrectas: [
      "La unidad califal impidió cualquier avance cristiano durante todo el siglo XI",
      "La creación de taifas reforzó militarmente a Al-Ándalus frente a los reinos cristianos"
    ]
  },
  {
    enunciado: "¿Qué función cumplió el sistema de tenencias y adelantamientos en los espacios recién conquistados?",
    correcta: "El sistema de tenencias y adelantamientos organizó la defensa y la administración de frontera",
    incorrectas: [
      "El sistema de tenencias abolió los concejos y concentró todo el poder en los cabildos",
      "El sistema de tenencias eliminó la figura del fuero por ser incompatible con la repoblación"
    ]
  },
  {
    enunciado: "¿Qué caracteriza al proceso de repoblación concejil en comparación con la presura?",
    correcta: "La repoblación concejil se basó en la fundación de villas con fueros y términos amplios otorgados por la Corona",
    incorrectas: [
      "La repoblación concejil impidió el autogobierno local para evitar privilegios",
      "La repoblación concejil prohibió el comercio en las nuevas villas durante veinte años"
    ]
  },
  {
    enunciado: "¿Qué rol desempeñó la nobleza laica en la expansión cristiana entre los siglos XII y XIII?",
    correcta: "La nobleza laica lideró contingentes, recibió tierras en repartimiento y consolidó señoríos",
    incorrectas: [
      "La nobleza laica fue excluida de las campañas en favor de milicias urbanas",
      "La nobleza laica renunció a la propiedad territorial por motivos religiosos"
    ]
  },
  {
    enunciado: "¿Qué rasgo general tuvo la expansión cristiana desde el siglo VIII al XV?",
    correcta: "La expansión fue un proceso discontinuo y plural, marcado por avances, retrocesos y pactos",
    incorrectas: [
      "La expansión fue un avance lineal y continuo sin interrupciones destacables",
      "La expansión fue exclusivamente marítima y basada en el comercio atlántico"
    ]
  },
  {
    enunciado: "¿Qué hecho de 1492 simboliza el cierre del ciclo de expansión peninsular medieval?",
    correcta: "La rendición de Granada a los Reyes Católicos simboliza el cierre de la Reconquista",
    incorrectas: [
      "La anexión de Navarra a Castilla culmina el proceso de unificación peninsular",
      "La derrota de Castilla frente a Portugal cierra el ciclo expansivo medieval"
    ]
  }
];
