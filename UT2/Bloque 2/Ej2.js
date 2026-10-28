let numeroJugada = 7;
const esTurnoBlancas = numeroJugada % 2 === 0;

console.log(`Numero jugada actual: ${numeroJugada}`);
console.log(`Es turno de las blancas? ${esTurnoBlancas}`);

const puntosBlancas = 14;
const puntosNegras = 11;

console.log(`Tienen las blancas ventaja clara? ${puntosBlancas - puntosNegras >= 3}`)