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

//dichiariamo la variabile container per renderla utilizzabile dal codice

const elementContainer = document.querySelector('.container')




//inizializziamo il ciclo for dichiaranto la variabile 'i' impostando la condizione 'i<100' e impostando il contatore in modo che aggiunga 1 unita' per ciclo
for(let i = 0; i < 100; i++){
    //se vogliamo che ci stampi i valori da 1 a 100 dichiarare la variabile 'num' in modo che gia al primo ciclo risulti 1 e non zero
    let num = i + 1;
    
    //stampiamo in console la variabile num per 100 volte
    //console.log(num);
    
    //dichiariamo la variabile 'rest3' e 'rest5' per l'operazione modulo che ci dovra' dare come resto 0 se la variabile num e' divisibile per 3 o per 5
    let rest3 = num % 3;
    let rest5 = num % 5;
    
    //impostiamo la condizione: SE rest3 = 0 AND rest5 = 0 stampiamo fizzbuzz
    if(rest3 == 0 && rest5 == 0){
        //stampa fizzbuzz
        console.log('FIZZBUZZ');
        //creiamo un elemento nel dom piu' precisamente nel container contenente l'output 'fizzbuzz'
        elementContainer.innerHTML += `<span class="fizzbuzz">FizzBuzz</span>`
    //impostiamo la condizione:ALTRIMENTI SE rest3 = 0 stampiamo fizz
    }else if(rest3 == 0 ){
        //stampa fizz
        console.log('Fizz');
        //creiamo un elemento nel dom piu' precisamente nel container contenente l'output 'fizz'
        elementContainer.innerHTML += `<span class="fizz">Fizz</span>`
    //impostiamo la condizione:ALTRIMENTI SE rest5 = 0 stampiamo buzz
    }else if(rest5 == 0){
        //stampa buzz
        console.log('Buzz');
        //creiamo un elemento nel dom piu' precisamente nel container contenente l'output 'buzz'
        elementContainer.innerHTML += `<span class="buzz">Buzz</span>`
    // ALTRIMENTI se le condizioni precedenti sono false stampiamo la variabile 'num'
    }else{
        //stampa variabile num
        console.log(num)
        //creiamo un elemento nel dom piu' precisamente nel container contenente come output la variabile 'num'
        elementContainer.innerHTML += `<span class="num">${num}</span>`
    }
}
