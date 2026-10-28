const piezaSeleccionada = '';
let reglaMovimiento = '';

switch (piezaSeleccionada) {
    case "♔": case "♚":
        reglaMovimiento = "El Rey se mueve una casilla en cualquier dirección.";
        break;
    case "♛": case "♛":
        reglaMovimiento = "La Dama se mueve en cualquier dirección las casillas que quiera.";
        break;
    case "♞": case "♘":
        reglaMovimiento = "El Caballo se mueve en forma de L y pudiendo saltar piezas.";
        break;
    case "♟": case "♙":
        reglaMovimiento = "El Peón se mueve una o dos casillas en su primer movimiento y una casilla en los siguientes movimientos.";
        break;
    default:
        reglaMovimiento = "Pieza inexistente";
}