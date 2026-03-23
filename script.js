// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.

//prompt per chiedere al passeggero quanti km percorre.
//prezzo di partenza del biglietto è km*0,21€.

const kmDaPercorrere = prompt('Km da percorrere');
console.log(kmDaPercorrere);
const kmInseritiNumero = parseInt(kmDaPercorrere);
const prezzoBaseBiglietto = kmInseritiNumero * 0.21;
console.log(`${prezzoBaseBiglietto.toFixed(2)}€`);


//prompt per chiedere l'età del passeggero
//if l'età è compresa tra i 18 e i 65 il prezzo del biglietto è calcolato.
//if else l'età è minore di 18 applica lo sconto del 20%
//else se l'età è maggiore di 65 anni applica lo sconto del 40%.

//