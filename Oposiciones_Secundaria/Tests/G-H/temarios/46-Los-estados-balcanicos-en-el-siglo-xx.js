// temarios/46-Los-estados-balcanicos-en-el-siglo-xx.js
var PREGUNTAS = [
  {
    enunciado: "¿Qué se entiende por Balcanes en el contexto histórico del siglo XX?",
    correcta: "Una región del sureste europeo de gran diversidad étnica, lingüística y religiosa atravesada por rivalidades interestatales y tensiones nacionalistas.",
    incorrectas: [
      "Un territorio homogéneo culturalmente dominado por una sola etnia desde el siglo XIX.",
      "Una zona africana al sur del Mediterráneo con continuidad política desde la Antigüedad."
    ]
  },
  {
    enunciado: "¿Qué herencia imperial condicionó fuertemente la política balcánica hasta 1918?",
    correcta: "La coexistencia y posterior descomposición de los imperios otomano y austrohúngaro.",
    incorrectas: [
      "La expansión del Imperio español desde el Adriático hasta el mar Negro.",
      "La unión dinástica franco-británica surgida tras el Congreso de Viena."
    ]
  },
  {
    enunciado: "¿Qué fue el Compromiso austrohúngaro de 1867 para las nacionalidades del Imperio de los Habsburgo?",
    correcta: "Un arreglo que reconocía la dualidad austrohúngara pero mantenía insatisfechas a muchas minorías como checos, croatas y eslavos del sur.",
    incorrectas: [
      "La plena emancipación política de todas las nacionalidades del Imperio.",
      "La anexión de Serbia y Montenegro como provincias autónomas."
    ]
  },
  {
    enunciado: "¿Qué acontecimiento en Bosnia-Herzegovina tensó las relaciones internacionales en 1908?",
    correcta: "La anexión austrohúngara de Bosnia-Herzegovina, rechazada por Serbia y Rusia.",
    incorrectas: [
      "La independencia inmediata de Bosnia-Herzegovina bajo tutela italiana.",
      "La retirada otomana y su sustitución por una administración británica."
    ]
  },
  {
    enunciado: "¿Qué estados formaron la Liga Balcánica en 1912?",
    correcta: "Serbia, Bulgaria, Grecia y Montenegro se aliaron para combatir al Imperio Otomano.",
    incorrectas: [
      "Rumanía, Albania, Grecia y Bosnia se aliaron contra Austria-Hungría.",
      "Croacia, Eslovenia, Serbia y Bulgaria se aliaron para invadir Rusia."
    ]
  },
  {
    enunciado: "¿Cuál fue el principal resultado de la Primera Guerra Balcánica (1912-1913)?",
    correcta: "La expulsión casi total del Imperio Otomano de Europa y la disputa por el reparto de Macedonia y Tracia.",
    incorrectas: [
      "La restauración de la hegemonía otomana sobre la península balcánica.",
      "La creación de un único Estado balcánico federal bajo tutela austríaca."
    ]
  },
  {
    enunciado: "¿Qué provocó la Segunda Guerra Balcánica en 1913?",
    correcta: "El desacuerdo entre los aliados por el reparto de los territorios conquistados, especialmente Macedonia.",
    incorrectas: [
      "La intervención francesa en favor del Imperio Otomano contra Serbia.",
      "La invasión rusa de Grecia para anexionarse el Egeo."
    ]
  },
  {
    enunciado: "¿Qué hecho ocurrido en Sarajevo en junio de 1914 desencadenó la Primera Guerra Mundial?",
    correcta: "El asesinato del archiduque Francisco Fernando por un nacionalista serbobosnio.",
    incorrectas: [
      "La firma del Tratado de Londres entre Grecia y Bulgaria.",
      "La abdicación del emperador Francisco José por presiones húngaras."
    ]
  },
  {
    enunciado: "¿Qué nuevo Estado surgió en 1918 integrando a serbios, croatas y eslovenos?",
    correcta: "El Reino de los Serbios, Croatas y Eslovenos, renombrado como Yugoslavia en 1929.",
    incorrectas: [
      "La Confederación del Adriático con capital en Trieste.",
      "La República Federal de los Balcanes bajo patrocinio británico."
    ]
  },
  {
    enunciado: "¿Qué rasgo político caracterizó a Yugoslavia en el periodo de entreguerras?",
    correcta: "El centralismo dominado por élites serbias y las tensiones con el autonomismo croata y esloveno.",
    incorrectas: [
      "Un federalismo consolidado con amplia autonomía para todas las regiones.",
      "Una monarquía parlamentaria estable sin conflictos internos significativos."
    ]
  },
  {
    enunciado: "¿Qué organización croata ultranacionalista colaboró con el Eje durante la Segunda Guerra Mundial?",
    correcta: "El movimiento Ustaša, que dirigió el Estado Independiente de Croacia.",
    incorrectas: [
      "La Liga de los Camisas Negras, rama balcánica del fascismo italiano.",
      "El Frente Popular Croata, de inspiración comunista soviética."
    ]
  },
  {
    enunciado: "¿Quién lideró la resistencia partisana yugoslava contra las potencias del Eje?",
    correcta: "Josip Broz 'Tito' organizó un movimiento partisano comunista de amplia base.",
    incorrectas: [
      "Ante Pavelić dirigió una resistencia monárquica contra Alemania.",
      "Enver Hoxha coordinó desde Albania la guerrilla en toda Yugoslavia."
    ]
  },
  {
    enunciado: "¿Qué ruptura marcó la singularidad de Yugoslavia en la Guerra Fría?",
    correcta: "La ruptura Tito–Stalin de 1948 y la adopción de un socialismo independiente no alineado.",
    incorrectas: [
      "La adhesión de Yugoslavia al Pacto de Varsovia desde 1955.",
      "La integración de Yugoslavia como miembro fundador de la OTAN."
    ]
  },
  {
    enunciado: "¿Qué papel desempeñó Yugoslavia en el Movimiento de Países No Alineados?",
    correcta: "Fue uno de sus impulsores junto a India, Egipto e Indonesia para afirmar la autonomía frente a los bloques.",
    incorrectas: [
      "Se opuso a su creación al considerar que debilitaba la URSS.",
      "Exigió que todos sus miembros firmaran el Pacto de Varsovia."
    ]
  },
  {
    enunciado: "¿Qué rasgo definió el régimen de Enver Hoxha en Albania durante la Guerra Fría?",
    correcta: "Un comunismo extremadamente aislacionista con sucesivas rupturas respecto a Yugoslavia, la URSS y China.",
    incorrectas: [
      "Un socialismo de mercado abierto al turismo occidental desde 1950.",
      "Una monarquía socialista constitucional aliada de la OTAN."
    ]
  },
  {
    enunciado: "¿Qué conflicto político sacudió a Grecia entre 1946 y 1949?",
    correcta: "Una guerra civil entre monárquicos y comunistas que terminó con la derrota de estos últimos.",
    incorrectas: [
      "Una guerra con Bulgaria por Tracia Occidental que concluyó con intercambio de territorios.",
      "Una secesión de Creta apoyada por Italia y Turquía."
    ]
  },
  {
    enunciado: "¿Qué equilibrio interno intentó la Constitución yugoslava de 1974?",
    correcta: "Un federalismo amplio con repúblicas y dos provincias autónomas, buscando limitar las hegemonías nacionales.",
    incorrectas: [
      "Unitarismo centralizado que suprimía toda autonomía regional.",
      "Confederación plena con derecho inmediato de secesión sin condiciones."
    ]
  },
  {
    enunciado: "¿Qué factor agravó las tensiones yugoslavas tras la muerte de Tito en 1980?",
    correcta: "La crisis económica y el aumento de los nacionalismos republicanos en ausencia de un liderazgo integrador.",
    incorrectas: [
      "La anexión yugoslava de Albania y Grecia que generó sobreextensión militar.",
      "La entrada de Yugoslavia en la Comunidad Económica Europea sin condiciones."
    ]
  },
  {
    enunciado: "¿Qué repúblicas declararon su independencia en 1991 iniciando la desintegración yugoslava?",
    correcta: "Eslovenia y Croacia proclamaron su independencia en 1991, seguidas por Bosnia-Herzegovina en 1992.",
    incorrectas: [
      "Serbia y Montenegro proclamaron su independencia en 1991 para formar la CEI.",
      "Macedonia del Norte y Kosovo proclamaron su independencia conjunta en 1991."
    ]
  },
  {
    enunciado: "¿Qué característica tuvo la guerra de Eslovenia de 1991?",
    correcta: "Fue un conflicto breve con intervención del Ejército Popular Yugoslavo que terminó rápidamente con la retirada federal.",
    incorrectas: [
      "Fue la guerra más larga del ciclo yugoslavo con asedios prolongados.",
      "Implicó una ocupación croata del territorio esloveno durante cuatro años."
    ]
  },
  {
    enunciado: "¿Qué rasgo distintivo tuvo la guerra de Croacia (1991-1995)?",
    correcta: "La existencia de territorios controlados por serbios de Croacia y operaciones militares croatas para recuperar esas áreas.",
    incorrectas: [
      "Una guerra exclusivamente naval por el control de las islas dálmatas.",
      "Un conflicto limitado a la capital sin afectación del resto del país."
    ]
  },
  {
    enunciado: "¿Qué definió el conflicto de Bosnia-Herzegovina (1992-1995)?",
    correcta: "Una guerra multilateral con serbios, croatas y bosníacos que incluyó limpieza étnica y graves crímenes de guerra.",
    incorrectas: [
      "Un enfrentamiento bilateral entre Bosnia y Eslovenia sin interferencias externas.",
      "Una guerra exclusivamente religiosa entre católicos y ortodoxos sin componente nacional."
    ]
  },
  {
    enunciado: "¿Qué significa el término 'limpieza étnica' en el contexto bosnio?",
    correcta: "La expulsión sistemática de poblaciones por motivos étnico-nacionales mediante violencia, terror y deportaciones.",
    incorrectas: [
      "La sustitución de élites políticas por métodos electorales pacíficos.",
      "El intercambio voluntario de poblaciones con apoyo de la ONU."
    ]
  },
  {
    enunciado: "¿Qué ocurrió en Srebrenica en julio de 1995?",
    correcta: "El asesinato de miles de varones bosníacos por fuerzas serbobosnias, reconocido como genocidio por tribunales internacionales.",
    incorrectas: [
      "La capitulación de Croacia ante el Ejército Popular Yugoslavo.",
      "La evacuación ordenada de la población civil sin víctimas."
    ]
  },
  {
    enunciado: "¿Qué acuerdos pusieron fin a la guerra de Bosnia en 1995?",
    correcta: "Los Acuerdos de Dayton establecieron la República de Bosnia y Herzegovina con dos entidades internas.",
    incorrectas: [
      "El Tratado de Lausana creó un protectorado conjunto turco-ruso en Bosnia.",
      "El Pacto de Bruselas integró Bosnia en la OTAN como miembro pleno."
    ]
  },
  {
    enunciado: "¿Qué detonó la intervención de la OTAN contra la República Federal de Yugoslavia en 1999?",
    correcta: "La escalada de violencia y represión en Kosovo y el fracaso de las negociaciones de Rambouillet.",
    incorrectas: [
      "La invasión serbia de Bulgaria y Rumanía para controlar el Danubio.",
      "La declaración de guerra de Grecia a Serbia por disputas fronterizas."
    ]
  },
  {
    enunciado: "¿Qué estatus declaró Kosovo en 2008?",
    correcta: "Kosovo proclamó unilateralmente su independencia, reconocida por numerosos estados aunque no de forma universal.",
    incorrectas: [
      "Kosovo se integró en Serbia como provincia con plena autonomía y bandera propia.",
      "Kosovo se unificó con Albania en una nueva república balcánica."
    ]
  },
  {
    enunciado: "¿Qué función desempeñó el Tribunal Penal Internacional para la ex Yugoslavia (TPIY)?",
    correcta: "Juzgar crímenes de guerra, de lesa humanidad y genocidio cometidos en los conflictos yugoslavos.",
    incorrectas: [
      "Administrar el territorio de Bosnia-Herzegovina como autoridad civil interina.",
      "Dirigir las misiones de mantenimiento de la paz de la OTAN en la región."
    ]
  },
  {
    enunciado: "¿Qué papel general tuvieron las misiones de la ONU y la OTAN en los Balcanes en los años noventa?",
    correcta: "Supervisión de alto el fuego, protección de civiles, imposición de zonas seguras e implementación de acuerdos de paz.",
    incorrectas: [
      "Sustitución permanente de los gobiernos nacionales por administraciones coloniales.",
      "Anexión de territorios balcánicos a estados miembros de la Unión Europea."
    ]
  },
  {
    enunciado: "¿Qué transformación política se produjo en Serbia a comienzos de los años 2000?",
    correcta: "La caída de Slobodan Milošević y el inicio de una transición política con reformas y cooperación con el TPIY.",
    incorrectas: [
      "La instauración de una monarquía absoluta hereditaria aliada de Rusia.",
      "La unión política con Croacia en una confederación adriática."
    ]
  },
  {
    enunciado: "¿Qué proceso siguió Montenegro en 2006?",
    correcta: "Celebró un referéndum y proclamó su independencia de la unión estatal con Serbia.",
    incorrectas: [
      "Se integró en Bosnia-Herzegovina como tercera entidad autónoma.",
      "Solicitó su anexión a Italia por motivos económicos."
    ]
  },
  {
    enunciado: "¿Qué desafíos comunes afrontan los estados balcánicos en el siglo XXI?",
    correcta: "Integración europea, consolidación institucional, combate a la corrupción y gestión de memorias de guerra.",
    incorrectas: [
      "Reconstrucción de un imperio balcánico y abandono de elecciones libres.",
      "Autosuficiencia energética total sin inversión exterior ni cooperación regional."
    ]
  },
  {
    enunciado: "¿Qué caracteriza a Bosnia-Herzegovina desde los Acuerdos de Dayton?",
    correcta: "Una compleja estructura estatal con dos entidades principales y mecanismos de poder compartido entre comunidades.",
    incorrectas: [
      "Un sistema unitario centralizado sin reconocimiento de minorías.",
      "Una monarquía constitucional encabezada por el rey de Serbia."
    ]
  },
  {
    enunciado: "¿Qué controversia nominal resolvió el acuerdo entre Skopie y Atenas en 2018?",
    correcta: "El cambio oficial del nombre a República de Macedonia del Norte para avanzar en su integración euroatlántica.",
    incorrectas: [
      "La adopción del nombre República de Dardania con capital en Tesalónica.",
      "La supresión de toda referencia a Macedonia en su denominación constitucional."
    ]
  },
  {
    enunciado: "¿Qué país balcánico mantuvo durante décadas un aislamiento internacional extremo bajo un régimen estalinista?",
    correcta: "Albania, dirigida por Enver Hoxha, rompió sucesivamente con Yugoslavia, la URSS y China.",
    incorrectas: [
      "Grecia, que se retiró de la OTAN y cerró todas sus fronteras hasta 1990.",
      "Bulgaria, que declaró la neutralidad perpetua y expulsó a la URSS en 1950."
    ]
  },
  {
    enunciado: "¿Qué factor económico contribuyó a la inestabilidad yugoslava en los años 80?",
    correcta: "El endeudamiento externo, la inflación y el desempleo crecientes tras la crisis del petróleo.",
    incorrectas: [
      "Un superávit comercial estructural que generó conflictos por exceso de divisas.",
      "La sustitución total de las industrias por un modelo agrario autárquico."
    ]
  },
  {
    enunciado: "¿Qué fue la Operación Tormenta (Oluja) en 1995?",
    correcta: "Una ofensiva croata para recuperar territorios controlados por fuerzas serbias en Krajina.",
    incorrectas: [
      "Una ofensiva serbia para ocupar la costa dálmata y Dubrovnik.",
      "Una intervención bosníaca para tomar Belgrado y forzar la paz."
    ]
  },
  {
    enunciado: "¿Qué institución europea se ha usado como ancla de reformas en los Balcanes Occidentales?",
    correcta: "El proceso de adhesión a la Unión Europea con exigencias en Estado de derecho y economía.",
    incorrectas: [
      "La Organización de Cooperación de Shanghái como vía prioritaria de integración.",
      "El Consejo Nórdico como mecanismo principal de convergencia regional."
    ]
  },
  {
    enunciado: "¿Qué minoría es especialmente relevante para la estabilidad de Macedonia del Norte?",
    correcta: "La minoría albanesa, cuya representación política fue clave tras el conflicto de 2001.",
    incorrectas: [
      "La minoría finesa, mayoritaria en la región de Ohrid.",
      "La minoría portuguesa, asentada desde el siglo XVII."
    ]
  },
  {
    enunciado: "¿Qué figura resume la centralidad del nacionalismo serbio en los conflictos yugoslavos de los 90?",
    correcta: "Slobodan Milošević, líder serbio asociado a políticas expansionistas y de limpieza étnica.",
    incorrectas: [
      "Josip Broz Tito, promotor del desmembramiento inmediato de Yugoslavia.",
      "Alexandros Papagos, jefe del Estado griego responsable de la guerra de Bosnia."
    ]
  },
  {
    enunciado: "¿Qué dimensión internacional complica aún hoy el reconocimiento de Kosovo?",
    correcta: "La falta de reconocimiento por parte de Serbia y de varios estados, incluidos algunos miembros de la UE y del Consejo de Seguridad.",
    incorrectas: [
      "La pertenencia de Kosovo a la OTAN con derecho de veto sobre nuevos miembros.",
      "La unión aduanera obligatoria de Kosovo con Grecia y Turquía."
    ]
  },
  {
    enunciado: "¿Qué aprendizaje histórico general ofrecen los conflictos balcánicos del siglo XX?",
    correcta: "Que la combinación de nacionalismos excluyentes, fronteras disputadas y crisis económicas puede derivar en guerras y limpieza étnica si fallan las instituciones.",
    incorrectas: [
      "Que la homogeneidad étnica absoluta garantiza automáticamente la democracia liberal.",
      "Que la intervención internacional elimina de inmediato cualquier fuente de conflicto interno."
    ]
  }
];
