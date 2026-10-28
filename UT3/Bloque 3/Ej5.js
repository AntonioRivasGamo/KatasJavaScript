console.log(analizarFechaTorneo(new Date(2026, 9, 17)))

function analizarFechaTorneo(fechaObjeto) {
    const tipo = fechaObjeto.getDay() === 0 || fechaObjeto.getDay() === 6 ? "Sesión Doble (Fin de Semana)" : "Sesión Única(Laborable)";
    return `${fechaObjeto.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} - ${tipo}`
}