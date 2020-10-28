var buttons = document.querySelectorAll(".big-five-list .big-five-list-item .big-five-button");
let spottedAnimals = document.querySelector("#spotted-animals-list");
let Button_verwijderEersteSpotted = document.querySelector('#remove-first-item-button');
let Button_verwijderAllSpotted = document.querySelector('#remove-all-button');
let regels = document.querySelectorAll('#spotted-animals-list li');
let parent = regels[0].parentElement;
console.log(regels.length);

function vulSpottedListAan(el) {
    let waarde = el.textContent;
    let nieuweRegel = document.createElement("li");
    nieuweRegel.innerHTML = waarde;
    let spottedAnimals = document.querySelector("#spotted-animals-list");
    spottedAnimals.appendChild(nieuweRegel);
}

function verwijderEersteSpotted() {
    regels = document.querySelectorAll('#spotted-animals-list li');
    console.log(regels.length);
    if (typeof(regels[0]) == "undefined") { alert("De spotted animals lijst is leeg"); } else {
        let regel = regels[0];
        console.log(regel);
        parent = regel.parentElement;
        console.log(parent);
        parent.removeChild(regel);
    }
}

function verwijderAllSpotted() {
    regels = document.querySelectorAll('#spotted-animals-list li');
    if (typeof(regels) == "undefined")
        console.log("De spotted animals lijst is leeg");
    else {
        console.log(regels.length);
        if ((regels.length) != 0) {
            for (let i = 0; i < regels.length; i++) {
                let regel = regels[i];
                parent = regel.parentElement;
                parent.removeChild(regel);
            }
        } else alert("De spotted animals lijst is leeg");
    }
}


buttonsArr = Array.from(buttons);
buttonsArr.forEach(element => {
    element.addEventListener("click", function(e) { vulSpottedListAan(element); })
});

Button_verwijderEersteSpotted.addEventListener('click', function(e) { verwijderEersteSpotted() });
Button_verwijderAllSpotted.addEventListener('click', function(e) { verwijderAllSpotted() });