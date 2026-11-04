function confirmarAbandonoPartida(urlLobby) {
    let salir = window.confirm(('¿Estás seguro de que deseas abandonar la partida? Perderás ELO.')
    if (salir)
        window.location.replace(urlLobby)
    return salir
}