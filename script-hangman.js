window.addEventListener("load", draw);

function draw() {
  const hoverSound = document.getElementById("hoverSound");
  const clickSound = document.getElementById("clickSound");
  const gameSound = document.getElementById("gameSound");
  const correctSound = document.getElementById("correctSound");
  const wrongSound = document.getElementById("wrongSound");
  const gameOverSound = document.getElementById("gameOverSound");
  const completedSound = document.getElementById("completedSound");

  const subTitle = document.querySelector("#sub-title");
  const title = document.querySelector("#title");
  const alphabetBox = document.getElementById("alphabet-box");
  const phraseDiv = document.getElementById("phrase-div");
  const picture = document.querySelector(".hangman-pic");

  let attempts = 0;

  const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
    "N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

  const phrases = {
    dichos_populares: [
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
    libros_famosos: [
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
    peliculas: [
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
    animales: {
      terrestres: [
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
      ],
      acuaticos: [
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
      ],
      voladores: [
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
      ],
      prehistoricos: [
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
      ],
    },
  };

  //const categories = Object.keys(phrases).length;
  const dichosPopularesLength = phrases.dichos_populares.length;
  const librosFamososLength = phrases.libros_famosos.length;
  const peliculasLength = phrases.peliculas.length;
  const animalesTerrestres = phrases.animales.terrestres;
  const animalesAcuaticos = phrases.animales.acuaticos;
  const animalesVoladores = phrases.animales.voladores;
  const animalesPrehistoricos = phrases.animales.prehistoricos;

  console.log(
    `Hay ${
      Object.keys(phrases).length
    } categorias. ${dichosPopularesLength} refranes, ${librosFamososLength} libros ${peliculasLength} peliculas, ${
      animalesTerrestres[0]
    } es un an terr y ${animalesTerrestres.length} to, ${
      animalesAcuaticos[0]
    } es un an ac, y ${animalesAcuaticos.length} to, ${
      animalesVoladores[0]
    } es un an aereo y ${animalesVoladores.length}, y ${
      animalesPrehistoricos[0]
    } an Prehist y ${animalesPrehistoricos.length}`
  );

  const randomCatIndex = Math.floor(Math.random() * 3); //de 0 a catgs# menos anmls
  const phraseIndex = Math.floor(Math.random() * Object.values(phrases)[randomCatIndex].length);
  console.log(randomCatIndex, phraseIndex);
  const phrase = Object.values(phrases)[randomCatIndex][phraseIndex].toUpperCase() ;
  //const phrase = Object.values(phrases)[0][0].toUpperCase();
  let phraseState = phrase.split("").map(letter => ({
    char: letter,  // Original letter
    revealed: letter === " " || letter === "." || letter === "," ||
     letter === ":" || letter === "-"  // True initially for blank spaces or special chars
  }));

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

  function fillPhrase() {
    for (const letter of phrase) {
      letterDiv = document.createElement("div");
      letterDiv.textContent = letter;
      letterDiv.classList.add("hidden-letter");
      if ( letter === " " || letter === "." || letter === "," || letter === ":" || letter === "-" ) {
        letterDiv.classList.add("special-char");
      }
      phraseDiv.appendChild(letterDiv);
    }
  }

  //if was found
  function revealLetters(pressedLetter) {
    const lettersHTML = document.getElementsByClassName("hidden-letter");
    const specialCharsHTML = document.getElementsByClassName("special-char");
    let cuentaLetra=0;

    for (const letter of lettersHTML) {
      if (pressedLetter === letter.textContent) {
        console.log(`presionada ${pressedLetter} es igual a la encontrada ${letter.textContent}` );
        letter.classList.add("revealed-letter");
        letter.classList.remove("hidden-letter");
        cuentaLetra+=1;
      }
    }
    console.log(`La letra ${pressedLetter} aparece ${cuentaLetra} veces`)
    return lettersHTML.length - specialCharsHTML.length;
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

    if (phrase.includes(pressedLetter)) {
      disableLetter(pressedLetter);
      const remainingLetters = revealLetters(pressedLetter);
      //console.log(remainingLetters);
      if (remainingLetters == 0) {
        title.style.color = "blue";
        title.innerText = "ADIVINASTE!";
        subTitle.style.color = "cyan";
        subTitle.innerText = "Has adivinado la frase y salvaste al hombre de una muerte segura!";
        completedSound.playbackRate = 1.2;
        completedSound.play();
      }
    } else if ((pressedLetter >= "A" && pressedLetter <= "Z") || pressedLetter == "Ñ") {
      disableLetter(pressedLetter);
      attempts += 1;
      console.log(attempts);
      if (attempts <= 7) {
        picture.setAttribute("src", `./pictures/hangman${attempts}.png`);
        picture.setAttribute("alt", `hangman${attempts}`);
      }
      if (attempts === 7) {
        document.querySelectorAll(".alphabet-letter").forEach(letter => 
          letter.removeEventListener("click", checkPressedLetter) );
        title.style.color = "red";
        title.innerText = "GAME OVER!";
        subTitle.style.color = "red";
        subTitle.innerText = "El hombre fue colgado antes de que pudieras adivinar la frase!";
        gameOverSound.playbackRate = 1.5;
        gameOverSound.play();
      }
    }
    e.target.removeEventListener("click", checkPressedLetter);
    e.target.removeEventListener("mouseenter", playHoverSound);
    e.target.removeEventListener("click", checkPickSound);
  }

  fillPhrase();
}
