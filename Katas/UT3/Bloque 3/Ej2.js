calcularEdadGM('1990-12-25')

function calcularEdadGM(date) {
    const nacimiento = new Date(date)
    const hoy = new Date()
    let edad = hoy.getFullYear() - nacimiento.getFullYear()
    edad -= hoy.getMonth() < nacimiento.getMonth() ? 1 : hoy.getMonth() === nacimiento.getMonth() && hoy.getDate() < nacimiento.getDate() ? 1 : 0
    console.log(edad)
}