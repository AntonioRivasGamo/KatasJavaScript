const esTurnoBlancas = true;
const reyEnJaque = false;
const reyMovido = false;

const statusDisplay = document.getElementById('status-display');
if(statusDisplay) {
    statusDisplay.textContent = esTurnoBlancas && !reyEnJaque && !reyMovido ? 'Movimiento legal' : "Enroque no permitido"
}