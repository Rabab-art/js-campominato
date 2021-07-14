// Il computer deve generare 16 numeri casuali tra 1 e 100,
//     queste saranno le nostre bombe.
// I numeri delle bombe non possono essere duplicati
//     (i 16 numeri devono essere tutti diversi)
// Il giocatore, deve cercare di non prendere le bombe.
// Gli chiederemo 100 - 16 volte di scegliere un numero,
//     uno alla volta, sempre compreso tra 1 e 100.
// L'utente non può inserire 2 volte lo stesso numero
// Ogni  volta che l'utente sceglie un numero che non è
// presente tra le bombe, guadagna un punto e poi gli
// chiediamo un altro numero.Se il numero scelto
// dall'utente è presente tra i numeri bomba, 
// la partita termina.Quando la partita termina,
//     comunichiamo all'utente il suo punteggio.

// 

// 1.GENERO 16 NUMERI CASUALI;
// 2.I 16 NUMERI DEVONO ESSERE COMPRESI TRA 1 E 100;
// 3.I 16 NUMERI GENERATI DEVONO ESSERE TUTTI DIVERSI. 



var list = [''];

var randNumber = 0;

while (list.length < 16) {

  var randNumber = Math.floor(Math.random() * (100 - 1 + 1) + 1);
  if (!list.includes(randNumber)) {
    list.push(randNumber);
  }
};

console.log(randNumber);
console.log(list);