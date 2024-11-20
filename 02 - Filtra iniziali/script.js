/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

function arrayiniziali(arrayCompleto){ 
  let newarray = [];   
  
  for(i = 0; i < arrayCompleto.length; i++){
     if(arrayCompleto[i].includes('A')){
      newarray.push(arrayCompleto[i])
     }     
  }

  return newarray;

}

// Invoca la funzione qui e stampa il risultato in console

console.log(arrayiniziali(names));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]