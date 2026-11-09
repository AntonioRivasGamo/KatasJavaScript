/**
* DWEC (0612) - MÓDULO DE DESARROLLO WEB EN ENTORNO CLIENTE
* UNIDAD DIDÁCTICA 3 / RA3: OBJETOS PREDEFINIDOS EN JAVASCRIPT (ES6+)
*
* PRÁCTICA DE REPASO INTEGRADORA: PLATAFORMA DE AJEDREZ WEB (VERSIÓN EVALUACIÓN REPASO)
*
* INSTRUCCIONES PARA EL ALUMNADO:
  * 1. NO MODIFIQUE los nombres de las funciones ni los nombres de sus parámetros.
* 2. Respete ESTRICTAMENTE los nombres de las variables internas y las claves de retorno.
* 3. Complete la lógica interna de cada función y reemplace 'return null;' o 'return false;' por su solución.
*/

/**
 * EJERCICIO 1 (Bloque 01: Number & Math)
 * @param {Object} piezasBlancasObj - Objeto con el conteo de piezas blancas { peones, caballos, alfiles, torres, damas }.
 * @param {Object} piezasNegrasObj - Objeto con el conteo de piezas negras { peones, caballos, alfiles, torres, damas }.
 * @param {number} factorPosicion - Factor multiplicador de posición de tablero (número finito > 0).
 * @returns {Object|null} Objeto { puntosBlancas, puntosNegras, diferenciaMaterial, ventajaTotal, lider } o null si falla la validación.
 */
function evaluarVentajaMaterial(piezasBlancasObj, piezasNegrasObj, factorPosicion) {
  // Complete la lógica aquí
  if (!Number.isFinite(factorPosicion) || factorPosicion < 0) return null
  let valB = 0
  let valN = 0
  for (let piezaBlanca in piezasBlancasObj) {
    valB += obtenerValorPieza(piezaBlanca)
  }
  for (let piezaNegra in piezasNegrasObj) {
    valN += obtenerValorPieza(piezaNegra)
  }
  let difBase = Math.abs(valB - valN)
  let ventajaAjustada = Math.round(difBase)

  return {
    diferenciaBase: difBase,
    ventajaAjustada: ventajaAjustada,
    tieneVentajaBlancas: valB >= valN
  };
}

function obtenerValorPieza(pieza) {
  switch (pieza) {
    case  "peon":
      return 1
    case "caballo":
    case "alfil":
      return 3
    case "torre":
      return 5
    case "dama":
      return 9
  }
}

/**
 * EJERCICIO 2 (Bloque 02: String)
 * @param {string} cadenaNoticiaRaw - Cadena de texto bruta con el noticia.
 * @param {string} codigoECO - 4 caracteres (rellenando con 'E' a la izquierda )
 * @returns {string|null} Cadena formateada "[APERTURA] RESUMEN_EN_MAYUSCULAS" o null si la entrada es inválida.
 */

function formatearTitularPartida(cadenaNoticiaRaw, codigoECO) {
  // Complete la lógica aquí
  let textoLimpio = cadenaNoticiaRaw.trim().replaceAll("_"," ").toUpperCase()
  let ecoFmt = codigoECO.padStart(4,"E")
  return `[${ecoFmt}] ${textoLimpio}`;
}


/**
 * EJERCICIO 3 (Bloque 03: Date)
 * @param {string} fechaEmisionIso - Cadena de fecha ISO (ej. "2026-01-15T10:00:00Z").
 * @param {number} diasValidez - Número entero de días de validez de la licencia.
 * @returns {Object|null} Objeto { vigente, fechaCaducidadMs, fechaCaducidadFormat } o null si la fecha/días son inválidos.
 */
function evaluarLicenciaArbitro(fechaEmisionIso, vigenciaAnos, fechaControlIso)  {
  // Complete la lógica aquí
  let fechaCaducidad = new Date(fechaEmisionIso)
  fechaCaducidad.setFullYear(fechaCaducidad.getFullYear() + vigenciaAnos)
  let fechaControl = new Date(fechaControlIso)
  let esVigente = true
  if (fechaControl.getMilliseconds() >= fechaCaducidad.getMilliseconds()) esVigente = false
  let fechaenformatoEspanol = fechaCaducidad.toLocaleDateString()
  return {
    esVigente: esVigente,
    fechaExpiracionStr: fechaenformatoEspanol
  };
}

/**
 * EJERCICIO 4 (Bloque 04: BOM, window, location, navigator)
 * @param {string} [urlRetransmisionPrueba] - URL opcional para pruebas de inspección.
 * @returns {Object} Objeto { partidaId, esOnline, modoVisor }.
 */
function configurarTableroRetransmision(urlRetransmisionPrueba) {
  let esValidaUrl = false
  if (urlRetransmisionPrueba.includes("/live/")) esValidaUrl = true
  let esOnline = false
  if (navigator.onLine) esOnline = true
  let modoVisor = window.innerWidth >= 1024 ? 'DESKTOP' : window.innerWidth >= 768 ? 'TABLET' : 'MOBILE'
  return { esValidaUrl, esOnline, modoVisor };
}

/**
 * EJERCICIO 5 (Bloque 05: Storage, JSON, Cookies)
 * @param {string} idEstudio - Identificador único del estudio de ajedrez.
 * @param {Array<Object>} variantesArrayObj - Lista de variantes cargadas en la sesión.
 * @param {string} temaVisual - Nombre del tema visual preferido.
 * @returns {boolean} true si se completó el guardado en localStorage sin errores, o false en caso contrario.
 */
function guardarEstudioAjedrez(idEstudio, estudioDataObj, duracionDiasCookie) {
  try {
    // Complete la lógica aquí
    let dataJson = JSON.stringify(estudioDataObj)
    localStorage.setItem(`estudio_${idEstudio}`, dataJson)
    sessionStorage.setItem('ultimo_estudio_id', idEstudio)
    let segundos = duracionDiasCookie * 24 * 60 * 60;
    document.cookie = `estudio_activo=${idEstudio};max-age=${segundos}; path=/`;
    return true;
  } catch (e) {
    return false;
  }
}

// SUITE DE PRUEBAS
console.log("=== EVALUANDO SOLUCIÓN REPASO PRÁCTICO AJEDREZ (VERSIÓN EVALUACIÓN REPASO) ===");

const r1 = evaluarVentajaMaterial({ peones: 8, caballos: 2, alfiles: 2, torres: 2, damas: 1 }, { peones: 7, caballos: 1, alfiles: 2, torres: 2, damas: 1 }, 1.2);

const r2 = formatearTitularPartida("carlsen - nakamura en ronda final", "defensa siciliana");

const r3 = evaluarLicenciaArbitro("2026-01-01T00:00:00Z", 365, "2027-01-01T00:00:00Z");

const r4 = configurarTableroRetransmision("/live?partidaId=FIDE_99");

const r5 = guardarEstudioAjedrez("siciliana_nadjorf", [{ paso: 1, mov: "e4" }], 12);

console.log("=== FIN PRUEBAS  ===");
