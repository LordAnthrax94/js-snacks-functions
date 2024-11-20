/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.



 function saluto(utente){
  const data = new Date("July 21, 1983 01:15:00");
  let hour = data.getHours();
   let salutocompleto = `Ciao ${utente}`;
   if(hour >= 13)
    salutocompleto = `Buongiorno ${utente}`
  else if(hour >= 17)
    salutocompleto = `Buon pomeriggio ${utente}`
  else
    salutocompleto = `Buonasera ${utente}`
  return salutocompleto
 }

// Invoca la funzione qui e stampa il risultato in console

console.log(saluto(name));


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.