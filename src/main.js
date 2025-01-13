const tickRate = 1000 / 30; // 30 FPS
let score = 0;

let bees = new Building('Bees', 0.1, 15, 'buybees');
let advancedBees = new Building('Advanced Bees', 1, 100, 'buyAdvancedBees');

function scorePlusPlus() {
    score++;
}

function incScore() {
    score += bees.cps;
    score += advancedBees.cps;
}

function updateButtons() {
    bees.buttonState();
    advancedBees.buttonState();
}

function updatePage() {
    incScore();
    updateButtons();
    document.getElementById('score').innerHTML =
        '$' + Math.floor(score).toLocaleString();
}

setInterval(updatePage, tickRate);