const PEON = 1;
const CABALLO = 3;
const ALFIL = CABALLO;
const TORRE = 5;
const DAMA = 9;

let puntosBlancas = 0;
let puntosNegras = 0;

puntosBlancas += DAMA;
puntosBlancas += PEON * 2;

puntosNegras += TORRE + CABALLO;

let ventaja = puntosBlancas - puntosNegras;
console.log(`Puntos blancas: ${puntosBlancas}, Puntos Negras: ${puntosNegras}`);
console.log(ventaja > 0 ? `Las blancas van ganando por ${ventaja} pts` : ventaja < 0 ?
    `Las negras van ganando por ${-ventaja}` : `Negras y blancas van igualadas`);