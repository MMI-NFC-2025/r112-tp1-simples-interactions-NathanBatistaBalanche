// TODO

// Exercice 1 : Mettre en rouge
const aMettreEnRouge = document.querySelector("#a-mettre-en-rouge");
aMettreEnRouge.style.color = "red";

// Exercice 2 : Reagir à un click
const enRougeSuiteAClick = document.querySelector("#en-rouge-suite-a-click");
enRougeSuiteAClick.addEventListener("click", (evt)=> {
  enRougeSuiteAClick.style.color = "red";
});

// Exercice 3 : 
const collH2 = document.querySelectorAll("h2");
collH2.forEach((elm)=> {
    elm.addEventListener("click", (evt)=> {
        evt.target.style.color = "red";
    });
});