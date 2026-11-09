function iniciarSesionSalaTorneo(urlPrueba, minutosExpiracion) {
    let url = new URL(urlPrueba);
    let query = new URLSearchParams(url.searchParams);
    let info = {
        'id' : query.get('id'),
        'jugador' : query.get('jugador'),
        'elo' : Number(query.get('elo')),
        'loginTime' : Date.now()
    }
    sessionStorage.setItem('fide_sesion_activa', JSON.stringify(info))
    let modoVisor = window.innerWidth >= 1024 ? 'DESKTOP' : window.innerWidth >= 768 ? 'TABLET' : 'MOBILE'
    console.log(modoVisor)
    setTimeout(() => {
        sessionStorage.removeItem('fide_sesion_activa')
        window.location.replace('/lobby')
    }, minutosExpiracion * 60 * 1000)
    return info

}