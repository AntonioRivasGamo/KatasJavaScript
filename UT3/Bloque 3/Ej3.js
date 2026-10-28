const inicio = Date.now() - 5000
console.log(procesarJugadaFischer(inicio, 180, 2))

function procesarJugadaFischer(timestampInicioMs, tiempoRestanteSeg, incrementoSeg) {
    const now = new Date()
    const tiempoRestante = tiempoRestanteSeg - (now-inicio) / 1000 + incrementoSeg;
    const bandera = tiempoRestanteSeg - (now-inicio) / 1000 <= 0
    return {
        nuevoTiempoSeg: bandera ? 0 : tiempoRestante,
        caidaBandera: bandera
    }
}