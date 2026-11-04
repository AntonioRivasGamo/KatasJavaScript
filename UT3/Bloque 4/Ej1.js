function evaluarDimensionesTablero() {
    const modo = window.innerWidth >= 1024 ? 'DESKTOP' : 1023 > window.innerWidth >= 600 ? 'TABLET' : 'MOBILE'
    const orientacion = innerWidth > innerHeight ? 'LANDSCAPE' : 'PORTRAIT'
    return {
        "ancho": window.innerWidth,
        "alto": window.innerHeight,
        "modo": modo,
        "orientacion": orientacion
    }
}