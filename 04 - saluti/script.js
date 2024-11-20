/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = 'Mario';

const name2 = 'Andrea';

// Dichiara la funzione qui.

// let saluto = (utente) => `Ciao ${utente}`

function saluto(utente){
   let salutocompleto = `Ciao ${utente}`;
  return salutocompleto
}

// Invoca la funzione qui e stampa il risultato in console

console.log(saluto(name));
console.log(saluto(name2));


//Risultato atteso se si passa 'Mario': // ciao Mario