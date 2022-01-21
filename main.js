/* conteggio in avanti */
console.log("Conteggio in avanti...");

for (let i=0; i<5; i++ ) {
    console.log("Il numero attuale è: " + i);
}

/* conteggio indietro */
console.log("Conteggio all indietro...");

for (let i=10; i > 0; i--) {
    //il + dentro il console.log è una concatenazione!
    console.log("Il numero attuale è: " + i)
}

/* conteggio in avanti ogni due numeri */

console.log('Conteggio in avanti di due numeri');

for (let i=0; i < 10; i = i+2 ) {
    console.log("Il numero attuale è: " + i);
}

// i=i+2 equivale a i+=2;
// i=i+1 equivale a i++ oppure i+=1;




for (let i=1; i<=10; i++ ) {

    console.log('Scrivo la tabellina del: ' + i);

    for (let j=0; j<=10; j++) {
        let risultato = i * j;
        console.log(i + " x " + j + ' = ' + risultato );
    }
    
}

