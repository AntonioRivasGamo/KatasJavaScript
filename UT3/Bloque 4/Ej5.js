iniciarRelojAjedrez(10, callbackTurno, callBackFin)

function iniciarRelojAjedrez(segundosIniciales, callbackTurno, callbackFin) {
    let tiempoRestante = segundosIniciales
    const timer = setInterval(() => {
        tiempoRestante--
        callbackTurno(tiempoRestante)

        if (tiempoRestante <= 0) {
            clearInterval(timer)
            callbackFin()
        }
    }, 1000)
    return timer;
}

function callbackTurno(tiempoRestante) {
    console.log(tiempoRestante)
}
function callBackFin() {
    console.log('¡Caída de bandera! Fin del tiempo.')
}