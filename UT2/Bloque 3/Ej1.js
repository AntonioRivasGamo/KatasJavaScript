const enJaque = true;
const movimientos = 50;
const statusDisplay = document.getElementById('status-display');

let mensaje = '';

if(movimientos >= 50) mensaje = 'Tablas reclamables';
else if(enJaque) mensaje = 'Rey en jaque';
else mensaje = 'Partida en curso';

console.log(mensaje);
if(statusDisplay) statusDisplay.textContent = mensaje;