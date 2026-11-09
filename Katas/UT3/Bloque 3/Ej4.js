console.log(tiempoHastaRonda('2077-12-25:00:00'));

function tiempoHastaRonda(fechaRondaFuturaStr) {
    const futuro = new Date(fechaRondaFuturaStr)
    const presente = new Date()
    let restante = (futuro.getTime() - presente.getTime()) / 1000
    const dias = Math.floor(restante / 86400)
    restante -= 86400 * dias
    const horas = Math.floor(restante / 3600)
    restante -= 3600 * horas
    const  minutos = Math.floor(restante / 60)
    return `Faltan ${dias} dias, ${horas} horas y ${minutos} minutos.`
}

