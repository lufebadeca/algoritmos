function FizzBuzz(){
    const fizzResult = document.getElementById("fizz-result");
    const limit = +document.getElementById("max").value;

    fizzResult.innerText=""

    if(!limit){
        alert("Para empezar, primero define el límite de la serie");
        return
    }

    for (let i = 1; i <= limit; i++) {
    
        let result = "";

        if (i%3==0 && i%5==0) {
            result = "FizzBuzz"
            fizzResult.innerHTML +=  `<span class="${result}"> ${result}</span></br>`; 
        }
        else if (i%5==0) {
            result = "Buzz";
            fizzResult.innerHTML +=  `<span class="${result}"> ${result}</span></br>`; 
        }
        else if (i%3==0) {
            result = "Fizz";
            fizzResult.innerHTML +=  `<span class="${result}"> ${result}</span></br>`; 
        }else{
            result = i;
            fizzResult.innerHTML +=  `<span>${result}</span></br>`; 
        }
        
    }

    fizzResult.scrollTo({
        top: fizzResult.scrollHeight,
        behavior: "smooth"
    });
}

function Vocales(){
    const inputVocales = document.getElementById("vocals-input");
    const result = document.getElementById("vocals-result");
    let cont_vocales= 0;
    let texto = inputVocales.value.trim();
    if (texto.length<1){
        alert("Ingrese una palabra con al menos una letra");
        return
    }
    result.innerHTML= "";
    for (let i = 0; i < texto.length; i++) {
        if(texto[i]== "a" || texto[i]== "A" ||
            texto[i]== "e" || texto[i]== "E" || 
            texto[i]== "i" || texto[i]== "I" ||
            texto[i]== "o" || texto[i]== "O"||
            texto[i]== "u" || texto[i]== "U")
        {
            cont_vocales+=1;
            result.innerHTML += `<span class="vocal">${texto[i]}</span>`;
        }
        else{
            result.innerHTML += texto[i];
        }
    };

    result.innerHTML +=`</br>Su frase "${texto}" tiene ${cont_vocales} vocales`
}


function Fibonacci(){

    const fiboResult = document.getElementById("fibo-result");
    const limit = +document.getElementById("max-fibo").value;

    fiboResult.innerText = "";
    if(!limit){
        alert("Para empezar, primero define el límite de la serie");
        return
    }

    let num1 = 0;
    let num2 = 1;
    let suma=1;
    console.log(num1);
    console.log(num2);

    let contador = 0;

    while ( suma< limit ) {
        fiboResult.innerHTML +=suma + "<br>"; 
        suma=num1+num2;
        num1=num2;
        num2=suma;
        contador += 1;
    }
    fiboResult.scrollTo({
        top: fiboResult.scrollHeight,
        behavior: "smooth"
    });

    setTimeout( ()=>plotFibonacciSpiral(limit), 150);
}

    
function plotFibonacciSpiral(maxValue) {

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;

    // Limpiar canvas
    // Limpiar canvas
    ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset transform
    ctx.translate(width / 2, height / 2); // Mover origen al centro
    ctx.clearRect(-width, -height, 2*width, 2*height);

    // ------------------------------
    // PARÁMETROS MATEMÁTICOS
    // ------------------------------
    const phi = (1 + Math.sqrt(5)) / 2; // proporción áurea
    const a = 1;                        // factor de escala de la espiral
    const b = 1 / Math.PI;              // controla cuán separada está la espiral
    const fib = [1, 1];                 // inicia la serie de Fibonacci

    // Generar la serie de Fibonacci hasta que supere maxValue
    while (true) {
        const next = fib[fib.length - 1] + fib[fib.length - 2];
        if (next > maxValue) break;
        fib.push(next);
    }
    const maxFib = fib[fib.length - 1];

    // ------------------------------
    // ESCALADO
    // ------------------------------
    const margin = 17;
    const maxRadius = a * maxFib;
    const scale = (Math.min(width, height) / 2 - margin) / maxRadius;

    // ------------------------------
    // ANIMACIÓN DE LA ESPIRAL
    // ------------------------------
    let theta = 0;
    const thetaMax = Math.log(maxFib / a) / (b * Math.log(phi)); // ángulo final
    const step = 0.1;

    function animate() {
        if (theta > thetaMax) {
            drawFibonacciPoints();
        return;
        }
        // Calcular punto en espiral
        const r = a * Math.pow(phi, b * theta);
        const x = r * Math.cos(theta) * scale; // REMOVE cx
        const y = r * Math.sin(theta) * scale; // REMOVE cy

        // Dibujar línea
        if (theta > 0) {
            const rPrev = a * Math.pow(phi, b * (theta - step));
            const xPrev = rPrev * Math.cos(theta - step) * scale; // REMOVE cx
            const yPrev = rPrev * Math.sin(theta - step) * scale; // REMOVE cy

            ctx.strokeStyle = "blue";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(xPrev, yPrev);
            ctx.lineTo(x, y);
            ctx.stroke();
        }

        theta += step;
        requestAnimationFrame(animate);
    }
    animate();

    // ------------------------------
    // DIBUJAR PUNTOS ROJOS SOBRE LA ESPIRAL
    // ------------------------------
    function drawFibonacciPoints() {
        ctx.fillStyle = "red";
        ctx.font = "12px sans-serif";
        fib.forEach(f => {
        const r_point = a * f; // Renamed 'r' to 'r_point' to avoid conflict if 'r' is in wider scope
        const theta_point = Math.log(f / a) / (b * Math.log(phi)); // Renamed 'theta' to 'theta_point'
        const x = r_point * Math.cos(theta_point) * scale; // REMOVE cx
        const y = r_point * Math.sin(theta_point) * scale; // REMOVE cy

        // Punto
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, 2 * Math.PI);
        ctx.fill();

        // Etiqueta
        ctx.fillStyle = "black";
        ctx.fillText(f.toString(), x + 6, y - 6);
        ctx.fillStyle = "red"; // restaurar color
    });
    }
}



function isPalindrome(){

    const resultInput = document.getElementById("result");
    const textInput = document.getElementById("text-input");
    let frase = textInput.value;
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

    if (reversa === ""){
        resultInput.textContent = `Tu input está vacío, no es divertido.`;
    }else if( reversa.length === 1){
        resultIntextContent = `Solo introdujiste una letra, no es divertido.`;
    }
    else if (reversa === noEspacios) {
        console.log(`"${frase}" es un palíndromo`);
        resultInput.textContent = `"${frase}" es un palíndromo! Qué otro palíndromo conoces?`;
        resultInput.style.color= "green";
    }else{
        console.log(`"${frase}" no es un palíndromo`);
        resultInput.textContent = `"${frase}" no es un palíndromo. Prueba con otra frase.`;
        resultInput.style.color= "red";
    }
    
}

function palindromeSuggest(){
    let textInput = document.getElementById("text-input");
    let resultInput = document.getElementById("result");

    palindromes = [
        "Anita lava la tina", "Somo o no somos", "Isaac no ronca asi", "amor a Roma",
        "Sé verlas al revés", "Amo la paloma", "Luz azul", "Yo hago yoga hoy", "la ruta natural",
        "dabale arroz a la zorra el Abad", "arepera", "arenera", "Salas", "rotor", "Radar"
    ];

    let randomNum = Math.floor(Math.random()* palindromes.length);

    textInput.value = palindromes[randomNum];
    resultInput.value="";
}



function AdivinaNumero(){

    const numberResult = document.getElementById("number-result");
    let numeroSecreto = Math.floor(Math.random()*100);
    //console.log(numeroSecreto, typeof numeroSecreto);

    let numeroJugador = "";
    let contador=0;
    
    do {
        numeroJugador= +prompt("Ingrese un número del 1 al 100");
        contador+=1;
        if( numeroSecreto > numeroJugador){
            alert(`El número es mayor que ${numeroJugador}. Van ${contador} intentos`);
        }else if (numeroSecreto < numeroJugador){
            alert(`El número es menor que ${numeroJugador}. Van ${contador} intentos`);
        }else if(numeroJugador===numeroSecreto){
            alert(`Adivinaste el número en ${contador} intentos!!`);
            numberResult.innerText = `El número era ${numeroSecreto}. Adivinaste en ${contador} intentos!!`
            break;        
        }
    } while (true);
}


function Factorial(){

    resultFactorial = document.getElementById("result-factorial");
    numero = +document.getElementById("fact").value;

    resultFactorial.innerHTML = `${numero} factorial es: </br>`;
    let accum=1;
    for (let i = 1; i <= numero; i++) {
        resultFactorial.innerHTML += `${accum} x ${i} = `;
        accum *= i;
        resultFactorial.innerHTML += `${accum}</br>`;
    }

    resultFactorial.scrollTo({top: resultFactorial.scrollHeight, behavior: "smooth"})
}