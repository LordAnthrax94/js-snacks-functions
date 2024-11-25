/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.



 function saluto(utente){
  const data = new Date();
  console.log(data.getFullYear());
  
  let hour = data.getHours();
  console.log(hour);
  
  
   let salutocompleto = `Ciao ${utente}`;
   if(hour <= 13)
    salutocompleto = `Buongiorno ${utente}`
  else if(hour <= 17)
    salutocompleto = `Buon pomeriggio ${utente}`
  else
    salutocompleto = `Buonasera ${utente}`
  return salutocompleto
 }

// Invoca la funzione qui e stampa il risultato in console

console.log(saluto(name));

console.log(data);


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.