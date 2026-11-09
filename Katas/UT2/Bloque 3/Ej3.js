const filaAlcanzada = 8;
const peonElement = document.getElementById("casilla-a8");
const btnPromocionar = document.getElementById("btn-promocionar")

function promocionarPeon() {
    const piezaResultado = filaAlcanzada == 8 ? '♕' : '♙';
    if(peonElement) peonElement.textContent = piezaResultado;
    console.log(`Promoción completada a la pieza. Resultado: ${piezaResultado}`)
}

if(btnPromocionar) btnPromocionar.addEventListener('click',promocionarPeon)