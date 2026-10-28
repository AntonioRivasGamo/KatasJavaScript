const casillaElemento = document.getElementById('casilla')
const botonMover = document.getElementById('btn-mover')
const CABALLO_BLANCO = '♘'
function colocarCaballo() {
    casillaElemento.textContent = `Casilla e4: ${CABALLO_BLANCO}`

}
botonMover.addEventListener('click', colocarCaballo)