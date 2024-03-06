/*Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:
per i multipli di 3 stampi “Fizz” al posto del numero e
per i multipli di 5 stampi “Buzz” al post del numero.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”
BONUS 1:
Crea un container nel DOM , aggiungendo un elemento html con il numero o la stringa corretta da mostrare.
Potete usare innerHTML oppure il metodo append creando l’elemento come oggetto usando createElement
BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
*/

//inizializziamo il ciclo for dichiaranto la variabile 'i' impostando la condizione 'i<100' e impostando il contatore in modo che aggiunga 1 unita' per ciclo
for(let i = 0; i < 100; i++){
    //se vogliamo che ci stampi i valori da 1 a 100 dichiarare la variabile 'num' in modo che gia al primo ciclo risulti 1 e non zero
    let num = i + 1;
    
    //stampiamo in console la variabile num per 100 volte
    console.log(num)
    
}