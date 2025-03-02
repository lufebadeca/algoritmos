window.addEventListener("load", draw);

function draw() {
  const hoverSound = document.getElementById("hoverSound");
  const clickSound = document.getElementById("clickSound");
  const gameSound = document.getElementById("gameSound");
  const splashSound = document.getElementById("splashSound");
  let category ="";

  const title = document.querySelector("#title");
  const categoriesDiv = document.querySelector(".categories-div");
  const button = document.getElementById("start-button");
  const ImgCategoriesArray = document.getElementsByClassName("img");

  button.addEventListener("click", () => {
    window.location.href = "./hangman.html";
  });

  console.log(  categoriesDiv.children.length );
  for (let element of categoriesDiv.children) {
    element.addEventListener("mouseenter", hoverCategory);
    element.addEventListener("mouseleave", ()=>title.textContent = "Escoge tu categoría:" );
    element.addEventListener("click", pickCategory);
  }

  // letterDiv.addEventListener("click", checkPickSound);
  // letterDiv.addEventListener("click", checkPressedLetter);
  // letterDiv.addEventListener("mouseenter", playHoverSound);
  
  function hoverCategory(e){
    playHoverSound();
    let targetCategory = e.target.id;
    switch (targetCategory) {
      case "books": tempCategory="Libros famosos"; break;
      case "films": tempCategory="Películas"; break;
      case "animals": tempCategory="Animales"; break;
      case "sayings": tempCategory="Dichos y refranes"; break;
    
      default: "";  break;
    }
    title.textContent = `Escoge tu categoría: ${tempCategory}`
  }

  function pickCategory(e){
    let targetCategory = e.target.closest("div").id;
    let targetCategoryImg = e.target.closest("img");

    for (const img of ImgCategoriesArray) {
      if (img.classList.contains("active-img")) {
        img.classList.remove("active-img");
      }
    }
    targetCategoryImg.classList.add("active-img");
    category=targetCategory;
    localStorage.setItem("gameCategory", category);
    //alert("Se ha guardado la categoría " + category);
    button.disabled = false;
    button.classList.add("active-button");
    button.addEventListener("mouseenter", playHoverSound);
  }

  function playHoverSound(e){
      hoverSound.playbackRate = 1.5;
      hoverSound.currentTime = 0; // Reinicia el sonido si ya se estaba reproduciendo
      hoverSound.play();
  }


}
