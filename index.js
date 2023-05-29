alert("Este programa fue realizado por Pablo Gutierrez. Bienvenido")



const continueButton = document.getElementById("After-button");

function variadoSummary() {
  const reactionCambios = Math.floor(Math.random() * 100);
  const memoryCambios = Math.floor(Math.random() * 100);
  const verbalCambios = Math.floor(Math.random() * 100);
  const visualCambios = Math.floor(Math.random() * 100);

  const reactionStatus = document.querySelector(".reaction-status");
  const memoryStatus = document.querySelector(".memory-status");
  const verbalStatus = document.querySelector(".verbal-status");
  const visualStatus = document.querySelector(".visual-status");

  reactionStatus.innerHTML = `<p><span class="bold">${reactionCambios}</span> / 100</p>`;
  memoryStatus.innerHTML = `<p><span class="bold">${memoryCambios}</span> / 100</p>`;
  verbalStatus.innerHTML = `<p><span class="bold">${verbalCambios}</span> / 100</p>`;
  visualStatus.innerHTML = `<p><span class="bold">${visualCambios}</span> / 100</p>`;
}

continueButton.addEventListener("click", () => {
  variadoSummary();
});



const numbersValor = document.querySelector(".numbers span:first-child"); 
const resultComponent = document.querySelector(".result-component"); 
const statusElement = document.querySelector(".status");
const numbersContainer = document.querySelector(".numbers");
const paragraph = document.querySelector(".result-paragraph");




function actualizarPromedio() {
  
  const reactionCambios = parseInt(document.querySelector(".reaction-status span").textContent);
  const memoryCambios = parseInt(document.querySelector(".memory-status span").textContent);
  const verbalCambios = parseInt(document.querySelector(".verbal-status span").textContent);
  const visualCambios = parseInt(document.querySelector(".visual-status span").textContent);

  const sum = reactionCambios + memoryCambios + verbalCambios + visualCambios;
  const promedio = Math.round(sum / 4);

 
  numbersValor.textContent = promedio;




  if (promedio >= 70 && promedio <= 100) 
  {
    resultComponent.classList.remove("yellow", "red"); 
    resultComponent.classList.add("green");

    statusElement.textContent = "GOOD"; 
    paragraph.textContent = "You scored higher than 65% of the people who have taken these tests";

    numbersContainer.classList.remove("yellow", "red");
    numbersContainer.classList.add("green");

    continueButton.classList.remove("yellow", "red");
    continueButton.classList.add("green");
  } 

  
  else if (promedio >= 35 && promedio < 70) {
    resultComponent.classList.remove("green", "red");
    resultComponent.classList.add("yellow");

    statusElement.textContent = "HALF";
    paragraph.textContent = "You scored similar to most people who have taken these tests";

    numbersContainer.classList.remove("green", "red");
    numbersContainer.classList.add("yellow");

    continueButton.classList.remove("green", "red");
    continueButton.classList.add("yellow");
  } 
  else if (promedio >= 0 && promedio < 35) {
    resultComponent.classList.remove("green", "yellow");
    resultComponent.classList.add("red");

    statusElement.textContent = "DANGER";
    paragraph.textContent = "You scored lower than most people who have taken these tests";

    numbersContainer.classList.remove("green", "yellow");
    numbersContainer.classList.add("red");

    continueButton.classList.remove("green", "yellow");
    continueButton.classList.add("red");
  }
}

continueButton.addEventListener("click", () => {
  variadoSummary();
  actualizarPromedio();
});


