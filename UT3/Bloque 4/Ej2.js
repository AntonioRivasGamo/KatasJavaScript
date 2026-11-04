console.log(obtenerDatosSalaTorneo('https://chess.org/room?id=402&modo=blitz&tiempo=300'))

function obtenerDatosSalaTorneo(urlPrueba) {
    const url = new URL(urlPrueba)
    const params = url.searchParams
    return {
        'id': params.get('id'),
        'modo': params.get('modo'),
        'tiempo': params.get('tiempo')
    }
}