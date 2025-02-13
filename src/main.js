const tickRate = 1000 / 30; // 30 FPS
let clickStrength = 1;
let score = 0;

let bees = new Building('Bees', 1, 15);
let advancedBees = new Building('Advanced Bees', 2, 50);
let strongBees = new Building('Strong Bees', 5, 100);
let queenBees = new Building('Queen Bees', 10, 250);
let kingBees = new Building('King Bees', 20, 500);
let empressBees = new Building('Empress Bees', 30, 1000);
let emperorBees = new Building('Emperor Bees', 50, 1500);
let almightyBees = new Building('Almighty Bees', 100, 3000);
let robotBees = new Building('Robot Bees', 200, 5000);

let hiveTools1 = new HiveTools('Hive Tools I', 100, bees);
let advancedHiveTools1 = new HiveTools('Advanced Hive Tools I', 500, advancedBees);
let strongHiveTools1 = new HiveTools('Strong Hive Tools I', 1000, strongBees);
let galacticHiveTools1 = new HiveTools('Galactic Hive Tools I', 2000, queenBees);
let universalHiveTools1 = new HiveTools('Universal Hive Tools I', 4000, kingBees);
let infiniteHiveTools1 = new HiveTools('Infinite Hive Tools I', 8000, empressBees);
let multiversalHiveTools1 = new HiveTools('Multiversal Hive Tools I', 12000, emperorBees);
let omniTools1 = new HiveTools('Omni Tools I', 15000, almightyBees);


function scorePlusPlus() {
    score += clickStrength;
}

function incScore() {
    score += bees.cps;
    score += advancedBees.cps;
    score += strongBees.cps
    score += queenBees.cps
    score += kingBees.cps
    score += empressBees.cps
    score += emperorBees.cps
    score += almightyBees.cps
    score += robotBees.cps
}

function updateButtons() {
    bees.buttonState();
    advancedBees.buttonState();
    strongBees.buttonState();
    queenBees.buttonState();
    kingBees.buttonState();
    empressBees.buttonState();
    emperorBees.buttonState();
    almightyBees.buttonState();
    robotBees.buttonState();

    hiveTools1.buttonState();
    advancedHiveTools1.buttonState();
    strongHiveTools1.buttonState();
    galacticHiveTools1.buttonState();
    universalHiveTools1.buttonState();
    infiniteHiveTools1.buttonState();
    multiversalHiveTools1.buttonState();
    omniTools1.buttonState();
}

function updatePage() {
    incScore();
    updateButtons();
    document.getElementById('score').innerHTML =
        '$' + Math.floor(score).toLocaleString();
}

setInterval(updatePage, tickRate);