const COLUMNAS = ['a','b','c','d','e','f','g','h'];

for(let fila = 1; fila <= 8; fila ++) {
    for(let colIndex = 0; colIndex < COLUMNAS.length; colIndex++) {
        const col = COLUMNAS[colIndex];
        const coordenada = `${col}${fila}`;
        const tipoCasilla = (fila + colIndex) % 2 === 0 ? 'Clara' : 'Oscura';
        console.log(`Casilla: ${coordenada}, Color: ${tipoCasilla}`);
    }
}

console.log('Fin del programa');