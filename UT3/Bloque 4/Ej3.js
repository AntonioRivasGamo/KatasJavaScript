function verificarEstadoJugador() {
    return {
        'idioma': navigator.language,
        'conectado': navigator.onLine,
        'mensaje': navigator.onLine ?
            navigator.language === 'es' ? 'Conectado en español (es-ES)' :
                'Conected in english (en-US)' :
            'Sin conexion a red'
    }
}