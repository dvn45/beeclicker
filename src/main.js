const tickRate = 1000 / 30; // 30 FPS
let score = 0;

let bees = new Building('Bees', 1, 15, 'buyBees');
let advancedBees = new Building('Advanced Bees', 2, 50);
let strongBees = new Building('Strong Bees', 5, 100);
let queenBees = new Building('Queen Bees', 10, 250);
let kingBees = new Building('King Bees', 20, 500);

function scorePlusPlus() {
    score++;
}

function incScore() {
    score += bees.cps;
    score += advancedBees.cps;
    score += strongBees.cps
    score += queenBees.cps
    score += kingBees.cps
}

function updateButtons() {
    bees.buttonState();
    advancedBees.buttonState();
    strongBees.buttonState();
    queenBees.buttonState();
    kingBees.buttonState();
}

function updatePage() {
    incScore();
    updateButtons();
    document.getElementById('score').innerHTML =
        '$' + Math.floor(score).toLocaleString();
}

setInterval(updatePage, tickRate);