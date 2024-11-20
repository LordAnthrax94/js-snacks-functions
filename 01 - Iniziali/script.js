/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

let newarray = [];

function arrayiniziali(){ 
   let initials;   
   for(i = 0; i < names.length; i++){
      initials = names[i].at(0);
      newarray.push(initials)
   }

   return newarray;
  
  
}

// Invoca la funzione qui e stampa il risultato in console

 

 console.log(arrayiniziali(newarray));

 
 

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]