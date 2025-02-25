window.addEventListener("load", draw);

function draw() {
  const hoverSound = document.getElementById("hoverSound");
  const correctSound = document.getElementById("correctSound");
  const wrongSound = document.getElementById("wrongSound");
  const splashSound = document.getElementById("splashSound");
  const gameOverSound = document.getElementById("gameOverSound");
  const completedSound = document.getElementById("completedSound");
  const suspenseSound = document.getElementById("suspenseSound");
  const musicSound = document.getElementById("musicSound");

  const subTitle = document.querySelector("#sub-title");
  const title = document.querySelector("#title");
  const categoryTitle = document.querySelector("#category-title");
  const alphabetBox = document.getElementById("alphabet-container");
  const phraseDiv = document.getElementById("phrase-div");
  const balloon = document.querySelector(".balloon");
  const balloonImg = document.querySelector(".balloon-img");
  
  let attempts = 0;

  const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
    "N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

  const phrases = {
    sayings: [
      "La esperanza es lo ultimo que se pierde",
      "Preguntando se llega a Roma",
      "Mas vale pajaro en mano que ver un ciento volando",
      "El que tiene un amigo tiene un tesoro",
      "Mas sabe el diablo por viejo que por diablo",
      "Aunque la mona se vista de seda, mona se queda",
      "A buen entendedor, pocas palabras",
      "A caballo regalado, no le mires el diente",
      "Mas vale estar solo que mal acompañado",
      "Perro que ladra no muerde",
      "Si el rio suena, piedras lleva",
      "El que no oye consejo no llega a viejo",
      "Lo que facil llega, facil se va",
      "no hay mal que por bien no venga",
      "No hay peor ciego que el que no quiere ver",
      "el que a hierro mata, a hierro muere",
      "A barriga llena, corazon contento",
    ],
    books: [
      "El coronel no tiene quien le escriba",
      "Crimen y castigo",
      "Guerra y paz",
      "dos mil leguas de viaje submarino",
      "La divina comedia",
      "el viejo y el mar",
      "Hamlet",
      "Cumbres borrascosas",
      "Edipo rey",
      "La eneida",
      "La iliada",
      "Ana Karenina",
      "El principito",
      "Los miserables",
      "Don Quijote de la Mancha",
      "dracula",
      "Fausto",
      "Cronica de una muerte anunciada",
      "Orgullo y prejuicio",
      "La odisea",
      "Moby dick",
    ],
    films: [
      "Sueños de Libertad",
      "El Sexto Sentido",
      "Ciudad de Dios",
      "El Diario de una Pasion",
      "V de Venganza",
      "Bastardos sin Gloria",
      "La Chica del Dragón Tatuado",
      "El Codigo Enigma",
      "Habia una Vez en Hollywood",
      "El club de la pelea",
      "Eterno resplandor de una mente sin recuerdos",
      "Camino a la perdicion",
      "Quien quiere ser millonario",
      "No es pais para viejos",
      "Guerra mundial Z",
      "En busca de la felicidad",
      "Focus: Maestros de la estafa",
      "El gran showman",
      "Hasta el ultimo hombre",
      "Pearl Harbor",
      "El rey Leon",
    ],
    animals: [
        "Gacela de Thompson",
        "Leopardo de las nieves",
        "Leopardo nublado",
        "Gallina de guinea",
        "Okapi",
        "Dragon de Komodo",
        "Anaconda verde",
        "Piton reticulada",
        "Serpiente de cascabel",
        "Elefante africano",
        "Ñu",
        "Bufalo de agua",
        "Perro salvaje africano",
        "Jabali berrugoso",
        "Caballo de Przewalki",
        "Mantis religiosa",
        "Escarabajo bombardero",
        "Hormiga bala",
        "Abeja melifera",
        "Escorpion",
        "Viuda negra",
        "Cobra escupidora",
        "dromedario",
        "Guanaco",
        "Tarantula amazonica",
        "Gorila de montaña",
        "Rinoceronte blanco",
        "Rinoceronte de Java",
        "canguro rojo",
        "Tiburon peregrino",
        "Estrella de mar",
        "Pez vela",
        "Tiburon tigre",
        "Delfin nariz de botella",
        "Delfin mular",
        "Ballena jorobada",
        "Tiburon ballena",
        "Pez globo",
        "Pulpo gigante",
        "pulpo mimo",
        "Calamar comun",
        "Morsa",
        "Delfin rosado del Amazonas",
        "Leopardo marino",
        "Nutria marina",
        "manati de rio",
        "Tiburon Mako",
        "Celacanto",
        "Coral de fuego",
        "Anemona de mar",
        "Vaquita marina",
        "Iguana marina",
        "Tortuga laud",
        "Tortuga verde",
        "Tortuga carey",
        "Serpiente marina",
        "Caballito de mar",
        "Tiburon de arrecife de punta negra",
        "Calamar colosal",
        "Pez diablo abisal",
        "Pez luna",
        "Buho nevado",
        "Aguila calva",
        "Aguila Harpia",
        "Buitre leonado",
        "Buitre americano",
        "Condor de los andes",
        "Colibri",
        "Halcon peregrino",
        "Zorro volador",
        "Ardilla voladora",
        "Albatroz viajero",
        "Gavilan pollero",
        "Tucan multicolor",
        "Loro gris africano",
        "Loro cabeciazul",
        "Buho moteado",
        "Murcielago",
        "Avispa comun",
        "Paloma domestica",
        "Pavo real",
        "Tiranosaurus rex",
        "Pakicetus",
        "Diplodocus",
        "Pterosaurus",
        "Stegosaurus",
        "Megatherium",
        "Argentinosaurus",
        "Iguanodon",
        "Isquiosaurus",
        "Smilodon fatalis",
        "plesiosaurus",
        "Ictiosaurus",
        "mosasaurus",
        "Sarcosuchus",
        "Triceratops",
        "Ankylosaurus",
        "Paraceratherium",
    ]
  }

  let catIndex;
  let categoryName="";
  const category = localStorage.getItem("gameCategory");

  switch (category) {
    case "sayings": categoryName="Dichos y refraness"; catIndex=0; break;
    case "books": categoryName="Libros famosos"; catIndex=1; break;
    case "films": categoryName="Películas"; catIndex=2 ; break;
    case "animals": categoryName="Animales"; catIndex=3; break;
    default: "";  break;
  }
  categoryTitle.textContent= "Categoría: " + categoryName;

  //const randomCatIndex = Math.floor(Math.random() * Object.values(phrases).length); //de 0 a catgs# menos anmls
  const phraseIndex = Math.floor(Math.random() * Object.values(phrases)[catIndex].length);
  console.log(categoryName, phraseIndex);

  const phrase = Object.values(phrases)[catIndex][phraseIndex].toUpperCase() ;
  //const phrase = Object.values(phrases)[0][0].toUpperCase();
  let phraseState = phrase.split("").map(letter => ({
    char: letter,  // Original letter
    revealed: letter === " " || letter === "." || letter === "," ||
     letter === ":" || letter === "-"  // True initially for blank spaces or special chars
  }));

  //console.log(phraseState);

  function fillLetterBoxes() {  
    
        //fill alphabetBox with letters and add styles
    for (const letter of alphabet) {
      letterDiv = document.createElement("div");
      letterDiv.textContent = letter;
      letterDiv.classList.add("alphabet-letter");
      letterDiv.addEventListener("click", checkPickSound);
      letterDiv.addEventListener("click", checkPressedLetter);
      letterDiv.addEventListener("mouseenter", playHoverSound);
      alphabetBox.appendChild(letterDiv);
    }
    // create div elements for the hidden phrase
    for (const letter of phraseState) {
      letterDiv = document.createElement("div");
      letterDiv.textContent = letter.char;
      letterDiv.classList.add("hidden-letter");
      if ( letter.revealed===true ) {
        letterDiv.classList.add("special-char");
      }
      phraseDiv.appendChild(letterDiv);
    }
  }

  //if was found
  function revealLetters(pressedLetter) {
    let lettersHTML = phraseDiv.children;
    //console.log(lettersHTML)
    //const specialCharsHTML = document.getElementsByClassName("special-char");
    let cuentaLetra=0;

    phraseState.forEach( letter => {
      if (pressedLetter === letter.char) {
        letter.revealed=true;
        cuentaLetra+=1;
      }
    });

    if (phraseState.length===lettersHTML.length) {
      for (let i=0; i<lettersHTML.length; i++) { 
        if ( phraseState[i].char === pressedLetter ) {
          //console.log(`presionada ${pressedLetter} == ${letter.char} del DOM` );
          console.log("letra DOM iterada: " +  lettersHTML[i].textContent + " estado: " +phraseState[i].char );
          //console.log("letra DOM iterada: " + lettersHTML[i].textContent);
          lettersHTML[i].classList.add("revealed-letter");
          lettersHTML[i].classList.remove("hidden-letter");
        }
      }
    }else{
      console.log("el estado y el dom no coinciden en long");
    }

    stateLetters = phraseState.map( item=>item.char ) ;
    stateRevealedLetters = phraseState.filter( item=>item.revealed==true ) ;
    /*console.log(`La letra ${pressedLetter} aparece ${cuentaLetra} veces`);
    console.log(stateLetters);
    console.log(stateRevealedLetters);
    console.log(`Char totales ${stateLetters.length},reveladas: ${stateRevealedLetters.length}`);*/
    return stateLetters.length - stateRevealedLetters.length;
  }

  function disableLetter(pressedLetter) {
    const childLettersHTML = document.getElementsByClassName("alphabet-letter");

    for (let index = 0; index < childLettersHTML.length; index++) {
      if (pressedLetter === childLettersHTML[index].textContent) {
        childLettersHTML[index].classList.add("disabled");
      }
    }
  }

  const links = [
    "https://drive.google.com/file/d/1gD6fMD79gLoDNinLQmTSyHfUbXZWwm_e/view?usp=drive_link",
    "https://drive.google.com/file/d/1hGveNfT1J-SGbG0G7qQ7MFZNrszf8QXH/view?usp=drive_link",
    "https://drive.google.com/file/d/19S1O1SAC6cFidWBUjqMLuOKI8d--ekA3/view?usp=drive_link",
    "https://drive.google.com/file/d/1HDnr6qKitQiRdoB3HVHQx5uDhrOIw5Ih/view?usp=drive_link",
    "https://drive.google.com/file/d/1_Mo_VW86oCstmYpP6W14zdAu_ehSsVUw/view?usp=drive_link",
    "https://drive.google.com/file/d/16_JaF3p0J8_7si16FVn1cElE8LiWvH0E/view?usp=drive_link",
    "https://drive.google.com/file/d/1qqfowtnvza98LXFRTnhGvqcpQEiaMVMe/view?usp=drive_link",
    "https://drive.google.com/file/d/10uuyftiPEiSsPok52gVwiS3EiMSHHi74/view?usp=drive_link",
  ];

  function playHoverSound(e){
    hoverSound.playbackRate = 1.5;
    hoverSound.play();
  }

  function checkPickSound(e) {
    pressedLetter = e.target.textContent;
    if (phrase.includes(pressedLetter)) {
      correctSound.playbackRate = 2; // Acelera el sonido 1.5 veces
      correctSound.play();
    } else if ( (pressedLetter >= "A" && pressedLetter <= "Z") ||  pressedLetter == "Ñ" ) {
      wrongSound.playbackRate = 2.4; // Acelera el sonido 1.5 veces
      wrongSound.play();
    }
  }

  function checkPressedLetter(e) {
    //pressedLetter = e.target.closest(".alphabet-letter").textContent;
    pressedLetter = e.target.textContent;
    console.log(pressedLetter);

    stateLetters= phraseState.map( item=>item.char ) ;

    if ( stateLetters.includes(pressedLetter)) {
      disableLetter(pressedLetter);
      const remainingLetters = revealLetters(pressedLetter);
      //console.log(remainingLetters);
      if (remainingLetters == 0) {
        title.style.color = "#9bfa07";
        title.innerText = "ADIVINASTE!";
        subTitle.style.color = "#9bfa07";
        subTitle.innerText = "Has adivinado la frase y salvaste al hombre de una muerte segura!";
        suspenseSound.pause();
        suspenseSound.currentTime = 0;
        musicSound.pause();
        musicSound.currentTime = 0;
        completedSound.playbackRate = 1.2;
        completedSound.play();
        document.querySelectorAll(".alphabet-letter").forEach(letter =>{
          letter.removeEventListener("click", checkPressedLetter);
          letter.removeEventListener("mouseenter", playHoverSound);
          letter.removeEventListener("click", checkPickSound);
        });
      }
    } else if ((pressedLetter >= "A" && pressedLetter <= "Z") || pressedLetter == "Ñ") {
      disableLetter(pressedLetter);
      attempts += 1;
      console.log(attempts);
      if (attempts <= 4) {
        balloon.classList.remove(`falling-${attempts-1}`);
        balloon.classList.add(`falling-${attempts}`);
        balloonImg.classList.add(`falling-${attempts}`);
        balloonImg.classList.remove(`falling-${attempts-1}`);
      }
      if (attempts===3) {
        musicSound.pause();
        musicSound.currentTime = 0;
        suspenseSound.loop=true;
        suspenseSound.play();
        balloonImg.setAttribute("src", "./pictures/balloon2.png");
      }
      if (attempts === 4) {
        document.querySelectorAll(".alphabet-letter").forEach(letter =>{
          letter.removeEventListener("click", checkPressedLetter);
          letter.removeEventListener("mouseenter", playHoverSound);
          letter.removeEventListener("click", checkPickSound);
        });
        title.style.color = "#f03594";
        title.innerText = "GAME OVER!";
        subTitle.style.color = "#f03594";
        subTitle.innerText = "El piloto murió ahogado antes de que pudieras adivinar la frase!";
        suspenseSound.pause();
        suspenseSound.currentTime = 0;
        splashSound.play();
        setTimeout( ()=>{
          gameOverSound.playbackRate = 1.5;
          gameOverSound.play();
        }, 1000)
        
      }
    }
    e.target.removeEventListener("click", checkPressedLetter);
    e.target.removeEventListener("mouseenter", playHoverSound);
    e.target.removeEventListener("click", checkPickSound);
  }

  fillLetterBoxes();
  musicSound.loop = true;
  musicSound.play();
}
