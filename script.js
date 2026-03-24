// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.

//prompt per chiedere al passeggero quanti km percorre.
//prezzo di partenza del biglietto è km*0,21€.

//inserisco il prezzo al km come variabile.
const prezzoAlKm = 0.21;

//inserisco gli sconti come variabili.
const scontoJunior = 0.80;
const scontoSenior = 0.60;


const kmDaPercorrere = prompt('Inserisci i km da percorrere');
console.log(kmDaPercorrere + 'Km');
const kmInseritiNumero = parseInt(kmDaPercorrere);
const prezzoBaseBiglietto = kmInseritiNumero * prezzoAlKm;
//console.log(`${prezzoBaseBiglietto.toFixed(2)}€`);

//prompt per chiedere l'età del passeggero

const etàDelPasseggero = prompt('Inserisci la tua età');
console.log(etàDelPasseggero + ' ' + 'anni');
const etàInseritaNumero = parseInt(etàDelPasseggero);

//inseriamo controllo dei dati.
if ((isNaN(etàInseritaNumero)) && (etàInseritaNumero => 0)) {
    console.error("Inserito dato scorretto");
} else if (kmInseritiNumero < 0) {11
    console.log("inserito dato scorretto");
} else {
    //così più comodo.
    if (etàInseritaNumero < 18) {
        let prezzoFinaleBiglietto = (prezzoBaseBiglietto * scontoJunior);
        console.log(`${prezzoFinaleBiglietto.toFixed(2)}€ - Junior`);
    } else if (etàInseritaNumero >= 65) {
        let prezzoFinaleBiglietto = (prezzoBaseBiglietto * scontoSenior);
        console.log(`${prezzoFinaleBiglietto.toFixed(2)}€ - Senior`);
    } else {
        let prezzoFinaleBiglietto = prezzoBaseBiglietto;
        console.log(`${prezzoFinaleBiglietto.toFixed(2)}€ - Base`);
    }
}

//if l'età è compresa tra i 18 e i 65 il prezzo del biglietto è calcolato.
//if else l'età è minore di 18 applica lo sconto del 20%
//else se l'età è maggiore di 65 anni applica lo sconto del 40%.

//if ((etàInseritaNumero >= 18) && (etàInseritaNumero < 65)) {
//    let prezzoFinaleBiglietto = prezzoBaseBiglietto;
//    console.log(`${prezzoFinaleBiglietto.toFixed(2)}€ - Base`);
//} else if (etàInseritaNumero < 18) {
//    let prezzoFinaleBiglietto = ((prezzoBaseBiglietto / 100) * 80);
//    console.log(`${prezzoFinaleBiglietto.toFixed(2)}€ - Junior`);
// età>=65
//} else {
//    let prezzoFinaleBiglietto = ((prezzoBaseBiglietto / 100) * 60);
//    console.log(`${prezzoFinaleBiglietto.toFixed(2)}€ - Senior`);
//}