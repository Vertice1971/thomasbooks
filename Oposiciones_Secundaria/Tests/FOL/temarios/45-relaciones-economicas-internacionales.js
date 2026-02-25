'use strict';

var PREGUNTAS = [
{
enunciado: "El comercio exterior se define como:",
correcta: "El intercambio de bienes y servicios entre diferentes países o áreas aduaneras",
incorrectas: [
"La compra de suministros técnicos entre laboratorios de la misma provincia",
"La regulación de los precios de los reactivos dentro del mercado nacional"
]
},
{
enunciado: "La teoría de la ventaja comparativa sostiene que un país debe especializarse en:",
correcta: "Aquellos bienes que puede producir con un coste de oportunidad menor que otros países",
incorrectas: [
"La producción de todos los materiales sanitarios existentes para evitar importar",
"Únicamente los servicios técnicos que tengan el precio de venta más alto"
]
},
{
enunciado: "El proteccionismo económico busca:",
correcta: "Proteger la industria nacional frente a la competencia extranjera mediante barreras",
incorrectas: [
"Fomentar la libre entrada de productos químicos sin ningún tipo de control",
"Eliminar los aranceles para abaratar la compra de instrumental de diagnóstico"
]
},
{
enunciado: "Un arancel es:",
correcta: "Un impuesto que se aplica a los bienes importados al cruzar la frontera",
incorrectas: [
"Una subvención estatal para que los técnicos puedan trabajar en el extranjero",
"El precio mínimo fijado para los análisis de sangre en la Unión Europea"
]
},
{
enunciado: "Un contingente o cupo a la importación consiste en:",
correcta: "Establecer un límite máximo a la cantidad de un bien que puede ser importado",
incorrectas: [
"Exigir una titulación específica a los técnicos que fabrican el producto",
"Aplicar una tasa variable según el peso de las muestras biológicas"
]
},
{
enunciado: "La balanza de pagos es un documento contable que registra:",
correcta: "Todas las transacciones económicas entre los residentes de un país y el resto del mundo",
incorrectas: [
"El inventario detallado de los activos fijos de los centros de salud públicos",
"La suma de los salarios netos de los técnicos que trabajan por cuenta ajena"
]
},
{
enunciado: "La balanza por cuenta corriente incluye:",
correcta: "Balanza comercial, de servicios, de rentas y transferencias corrientes",
incorrectas: [
"Únicamente las inversiones en acciones de laboratorios multinacionales",
"El registro de las reservas de oro y divisas del Banco Central"
]
},
{
enunciado: "Se produce un déficit comercial cuando:",
correcta: "El valor de las importaciones de bienes supera al de las exportaciones",
incorrectas: [
"El Estado recauda menos impuestos de los que gasta en sanidad pública",
"La tasa de inflación técnica es superior a la media de la zona euro"
]
},
{
enunciado: "La Unión Europea se define económicamente como:",
correcta: "Un mercado único con libre circulación de bienes, servicios, personas y capitales",
incorrectas: [
"Una asociación de laboratorios privados para fijar el precio de los reactivos",
"Un acuerdo de libre comercio que prohíbe el uso de una moneda común"
]
},
{
enunciado: "La balanza financiera registra:",
correcta: "Las variaciones de activos y pasivos financieros (inversiones, préstamos)",
incorrectas: [
"El intercambio de muestras de laboratorio para fines de investigación",
"El pago de las cuotas a la Seguridad Social de los técnicos extranjeros"
]
},
{
enunciado: "El tipo de cambio es:",
correcta: "El precio de una moneda expresado en términos de otra moneda",
incorrectas: [
"La tasa de interés que cobran los bancos por los créditos a empresas químicas",
"El porcentaje de arancel aplicado a la importación de tecnología sanitaria"
]
},
{
enunciado: "La depreciación de la moneda nacional hace que:",
correcta: "Las exportaciones sean más baratas para los extranjeros y las importaciones más caras",
incorrectas: [
"El precio de los reactivos importados baje para los laboratorios locales",
"Los técnicos nacionales pierdan interés en trabajar para el sector exterior"
]
},
{
enunciado: "La Organización Mundial del Comercio (OMC) tiene como objetivo:",
correcta: "Liberalizar el comercio internacional y resolver disputas comerciales",
incorrectas: [
"Fijar el salario mínimo de los técnicos de laboratorio a nivel global",
"Controlar la producción de petróleo para estabilizar los costes energéticos"
]
},
{
enunciado: "Las barreras no arancelarias incluyen:",
correcta: "Normas técnicas, sanitarias y trámites burocráticos que dificultan el comercio",
incorrectas: [
"Únicamente los impuestos directos sobre los beneficios de las exportadoras",
"La obligación de hablar más de tres idiomas para realizar análisis clínicos"
]
},
{
enunciado: "La balanza de capital registra principalmente:",
correcta: "Las transferencias de capital y la adquisición de activos no financieros no producidos",
incorrectas: [
"El pago de intereses de las cuentas corrientes de los técnicos superiores",
"La compraventa de uniformes y material desechable de laboratorio"
]
},
{
enunciado: "El Mercado Único Europeo eliminó:",
correcta: "Las fronteras físicas, técnicas y fiscales entre los países miembros",
incorrectas: [
"La obligación de los técnicos de poseer un título oficial para trabajar",
"La propiedad privada de los centros de diagnóstico en toda la Unión"
]
},
{
enunciado: "Se denomina 'dumping' a:",
correcta: "Vender un producto en el extranjero a un precio inferior a su coste de producción",
incorrectas: [
"El transporte de residuos químicos peligrosos entre diferentes naciones",
"La contratación de técnicos extranjeros con salarios superiores a los locales"
]
},
{
enunciado: "La Eurozona está formada por los países de la UE que:",
correcta: "Han adoptado el euro como moneda oficial y comparten política monetaria",
incorrectas: [
"Tienen más de un 10% de su PIB dedicado a la investigación técnica",
"Permiten la exportación de reactivos sin ningún tipo de control sanitario"
]
},
{
enunciado: "Una balanza de pagos siempre está equilibrada en términos:",
correcta: "Contables, debido al sistema de partida doble",
incorrectas: [
"Económicos, ya que el déficit en servicios se compensa con el de bienes",
"Políticos, por los acuerdos firmados en el seno de la Unión Europea"
]
},
{
enunciado: "El principio de 'nación más favorecida' implica que:",
correcta: "Cualquier ventaja comercial concedida a un país debe extenderse a los demás miembros",
incorrectas: [
"Solo se puede comerciar con países que tengan un nivel técnico similar",
"Los técnicos de laboratorio deben tener preferencia en el paso de fronteras"
]
},
{
enunciado: "La globalización económica se caracteriza por:",
correcta: "La creciente integración e interdependencia de las economías nacionales",
incorrectas: [
"El aislamiento de los mercados locales para evitar la inflación externa",
"La prohibición de utilizar tecnología extranjera en los laboratorios públicos"
]
},
{
enunciado: "Las transferencias corrientes en la balanza de pagos son:",
correcta: "Pagos sin contrapartida, como las remesas de emigrantes o ayudas oficiales",
incorrectas: [
"El pago de las facturas de luz y agua de los centros de análisis",
"La compra de acciones de empresas químicas en el mercado secundario"
]
},
{
enunciado: "Un proceso de integración económica que incluye arancel exterior común es:",
correcta: "Una Unión Aduanera",
incorrectas: [
"Una Zona de Libre Comercio con fronteras técnicas cerradas",
"Un acuerdo bilateral de intercambio de muestras biológicas"
]
},
{
enunciado: "La ventaja absoluta (Adam Smith) ocurre cuando un país:",
correcta: "Produce un bien utilizando menos recursos que cualquier otro",
incorrectas: [
"Prohíbe la entrada de técnicos extranjeros en su territorio nacional",
"Tiene el mayor número de laboratorios por cada mil habitantes"
]
},
{
enunciado: "El Banco Central Europeo (BCE) busca principalmente:",
correcta: "La estabilidad de precios en la zona euro",
incorrectas: [
"Fijar el presupuesto anual de los hospitales de cada país miembro",
"Regular el horario laboral de los técnicos superiores de laboratorio"
]
},
{
enunciado: "La balanza de rentas registra:",
correcta: "Los intereses, dividendos y rentas del trabajo ganados en el exterior",
incorrectas: [
"El precio de los alquileres de los locales donde se ubican los laboratorios",
"La recaudación del impuesto sobre la renta de los técnicos residentes"
]
},
{
enunciado: "Una 'unión económica y monetaria' supone adicionalmente:",
correcta: "La coordinación de políticas económicas y una moneda única",
incorrectas: [
"El despido de los técnicos que no hablen la lengua oficial de la unión",
"La nacionalización de todas las industrias químicas de los países socios"
]
},
{
enunciado: "El proteccionismo de 'industria naciente' justifica las barreras para:",
correcta: "Permitir que nuevos sectores nacionales se desarrollen hasta ser competitivos",
incorrectas: [
"Cerrar los laboratorios que tengan menos de dos años de antigüedad",
"Obligar a los técnicos recién titulados a trabajar gratis durante un periodo"
]
},
{
enunciado: "Si un país tiene superávit por cuenta corriente, significa que:",
correcta: "Es un prestamista neto frente al resto del mundo",
incorrectas: [
"Necesita financiación externa para pagar sus importaciones técnicas",
"Su tasa de desempleo en el sector sanitario es necesariamente cero"
]
},
{
enunciado: "La liberalización comercial consiste en:",
correcta: "La reducción o eliminación de las trabas al comercio internacional",
incorrectas: [
"El aumento de los controles fronterizos sobre los reactivos de análisis",
"La fijación de precios mínimos de exportación para proteger el margen"
]
},
{
enunciado: "Los Fondos Estructurales de la UE tienen como fin:",
correcta: "Reducir las disparidades económicas entre las diferentes regiones",
incorrectas: [
"Pagar los salarios de los técnicos de laboratorio en huelga",
"Financiar la compra de armamento para la defensa de las fronteras"
]
},
{
enunciado: "La balanza de servicios incluye transacciones de:",
correcta: "Turismo, transporte, seguros y servicios tecnológicos",
incorrectas: [
"Materias primas químicas y productos farmacéuticos acabados",
"Maquinaria pesada para la automatización de laboratorios clínicos"
]
},
{
enunciado: "En un sistema de tipos de cambio flexibles, el valor de la moneda lo determina:",
correcta: "El mercado a través de la oferta y la demanda de divisas",
incorrectas: [
"El Ministerio de Hacienda mediante decreto ley semanal",
"Los directores técnicos de los laboratorios de mayor facturación"
]
},
{
enunciado: "El 'consenso de Washington' se asocia con políticas de:",
correcta: "Apertura comercial, privatización y disciplina fiscal",
incorrectas: [
"Aislamiento económico y control estatal de los precios químicos",
"Aumento del gasto público en centros de diagnóstico rural"
]
},
{
enunciado: "El presupuesto de la Unión Europea se financia principalmente con:",
correcta: "Renta Nacional Bruta de los estados, IVA y derechos de aduana",
incorrectas: [
"Donaciones voluntarias de los técnicos de los países miembros",
"Multas por el uso incorrecto de instrumental técnico sanitario"
]
},
{
enunciado: "Las inversiones directas en la balanza financiera implican:",
correcta: "La adquisición de una participación significativa en una empresa extranjera",
incorrectas: [
"La compra de material de oficina para un laboratorio local",
"El depósito de dinero en una caja de ahorros de ámbito provincial"
]
},
{
enunciado: "Un área de libre comercio se diferencia de una unión aduanera en que:",
correcta: "Cada país mantiene su propio arancel frente a terceros países",
incorrectas: [
"Está prohibido el intercambio de servicios de análisis clínicos",
"Los técnicos no pueden desplazarse libremente para buscar empleo"
]
},
{
enunciado: "La cláusula de salvaguardia permite a un país:",
correcta: "Limitar temporalmente las importaciones si dañan gravemente a un sector",
incorrectas: [
"No pagar las facturas de los proveedores extranjeros de reactivos",
"Sustituir a todos sus técnicos por maquinaria de última generación"
]
},
{
enunciado: "El saldo de la balanza de pagos es siempre:",
correcta: "Cero",
incorrectas: [
"Positivo en los países con alto nivel de desarrollo técnico",
"Igual a la tasa de inflación anual del sector sanitario"
]
},
{
enunciado: "La competitividad exterior de un país mejora si:",
correcta: "Sus costes de producción crecen menos que los de sus competidores",
incorrectas: [
"Aumenta el precio de sus exportaciones de material de laboratorio",
"Reduce el número de técnicos titulados para ahorrar costes salariales"
]
}
];