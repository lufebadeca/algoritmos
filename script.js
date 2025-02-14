
function FizzBuzz(){
    for (let i = 1; i <= 100; i++) {
    
        if (i%3==0 && i%5==0) {
            result = "FizzBuzz"
        }
        else if (i%5==0) {
            result = "Buzz";
        }
        else if (i%3==0) {
            result = "Fizz";
        }else{
            result = i;
        }
        document.getElementById("parrafo").innerHTML +=result + "<br>"; 
    }
}

function Vocales(){
    let cont_vocales= 0;
    let texto = prompt("Ingrese una palabra");
    for (let i = 0; i < texto.length; i++) {
        if(texto[i]== "a" || texto[i]== "A" ||
            texto[i]== "e" || texto[i]== "E" || 
            texto[i]== "i" || texto[i]== "I" ||
            texto[i]== "o" || texto[i]== "O"||
            texto[i]== "u" || texto[i]== "U")
        {
            cont_vocales+=1;
        };
    }

    console.log(`Su palabra "${texto}" tiene ${cont_vocales} vocales`)
}


function Fibonacci(){

    let hasta= +prompt("Hasta qué número desea generar su serie Fibonacci?")

    let num1 = 0;
    let num2 = 1;
    let suma=1;
    console.log(num1);
    console.log(num2);

    // for (let i = 0; i < iteraciones; i++) {
    //     suma=num1+num2;
    //     console.log(suma);
    //     num1=num2;
    //     num2=suma;
    // }

    while (suma< hasta) {
        console.log(suma);
        suma=num1+num2;
        num1=num2;
        num2=suma;
    }
}


function IsPalindromo(){

    let frase = prompt("Ingrese una frase");
    //minuscula
    let minusculas= frase.toLowerCase();
    console.log(minusculas);
    //eliminar espacios
    let noEspacios = minusculas.replaceAll(" ", "");
    console.log(noEspacios);

    //let reversa="";
    /*for (let letra = 0; letra <= noEspacios.length-1; letra++) {
        reversa =  noEspacios[letra] + reversa;
    }
    console.log(`reversa: ${reversa}`);*/

    //separar cada letra, se convierte en Array
    let separar = noEspacios.split("");
    console.log(separar);
    //invertir el orden y volver a unir como string
    let reversa = separar.reverse();
    console.log(reversa);
    reversa = reversa.join("");
    console.log(reversa);

    if (reversa === noEspacios) {
        console.log(`"${frase}" es un palíndromo`);
        alert(`"${frase}" es un palíndromo`);
    }else{
        console.log(`"${frase}" no es un palíndromo`);
        alert(`"${frase}" no es un palíndromo`);
    }
    
}



function AdivinaNumero(){

    let numeroSecreto = Math.floor(Math.random()*100);
    //console.log(numeroSecreto, typeof numeroSecreto);

    let numeroJugador = "";
    let contador=0;
       
    do {
        numeroJugador= +prompt("Ingrese un número del 1 al 100");
        //console.log(numeroJugador, typeof numeroJugador);
        if( numeroSecreto > numeroJugador){
            alert(`El número es mayor que ${numeroJugador}`);
            contador+=1;
        }else if (numeroSecreto < numeroJugador){
            alert(`El número es menor que ${numeroJugador}`);
            contador+=1;
        }else if(numeroJugador===numeroSecreto){
            alert(`Adivinaste el número en ${contador} intentos!!`)
            break;
        }
    } while (true);
}


function Factorial(){

    let numero = +prompt("Ingrese numero")
    let accum=1;
    for (let i = 1; i <= numero; i++) {
        accum *= i;
    }
    console.log(`${numero} factorial es ${accum}`)
}

//vocales();
//isPalindromo()
//adivinaNumero();
//factorial()