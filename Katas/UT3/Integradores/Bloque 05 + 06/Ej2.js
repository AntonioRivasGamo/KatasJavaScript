function sincronizarEstadoTablero(cadenaFEN, temaVisual) {
    if(!navigator.onLine) alert('Cuidado que estas desconectado')
    const info = {
        'cadenaFen' : cadenaFEN.trim(),
        'timestamp' : Date.now(),
        'fechaLegible' : new Date().toLocaleString('es-ES')
    }
    try {
        localStorage.setItem('fide_partida_guardada', JSON.stringify(info))
    } catch (e) {
        console.error(e)
    }
    document.cookie = `fide_theme=${encodeURIComponent(temaVisual)}; max-age=${604800}; path=/`;
    return JSON.parse(localStorage.getItem('fide_partida_guardada'))
}