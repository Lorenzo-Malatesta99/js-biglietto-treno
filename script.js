// variabili

const userAge = parseInt(prompt("Inserisci la tua età"));
const userKm = parseInt(prompt("Inserisci i KM da percorrere"));
const kmPrice = userKm * 0.21;
const scontoMinorenni = (kmPrice * 20) / 100;
const bigliettoIntero = kmPrice * 1;
const scontoAnziani = (kmPrice * 40) / 100;

let message = "";

// svolgimento

if (userAge < 18) {
    prezzoFinale = kmPrice - scontoMinorenni;
    message = `L'importo da pagare per te corrisponde a ${prezzoFinale.toFixed(2)} €`;
} else if (userAge < 65 && userAge > 17) {
    prezzoFinale = bigliettoIntero
    message = `L'importo da pagare per te corrisponde a ${prezzoFinale.toFixed(2)} €`;
} else {
    prezzoFinale = kmPrice - scontoAnziani;
    message = `L'importo da pagare per te corrisponde a ${prezzoFinale.toFixed(2)} €`;
}

console.log(message);
