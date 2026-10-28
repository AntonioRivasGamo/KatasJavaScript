let jugadasSinCaptura = 0;
const MAX_JUGADAS = 50;

while(jugadasSinCaptura < MAX_JUGADAS) {
    jugadasSinCaptura++;
    console.log(`Jugadas sin captura: ${jugadasSinCaptura}`);
}

if(jugadasSinCaptura === MAX_JUGADAS) console.log(`Tablas. Se han alcanzado las ${MAX_JUGADAS} sin capturas.`)