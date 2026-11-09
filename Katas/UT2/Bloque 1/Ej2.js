const REY_BLANCO = '♔'
const DAMA_BLANCA = '♕'
const TORRE_BLANCA = '♖'
const CABALLO_BLANCO = '♘'
const PEON_NEGRO = '♟';

const casillasTexto = '64'
const casillas = Number(casillasTexto)
const casillasPorJugador = casillas / 2

console.log(`Casillas: ${casillas}, Por jugador: ${casillasPorJugador}`)
console.log(`Piezas blancas: ${REY_BLANCO} ${DAMA_BLANCA} ${TORRE_BLANCA} ${CABALLO_BLANCO}` )
console.log(`Piezas negras: ${PEON_NEGRO}` )