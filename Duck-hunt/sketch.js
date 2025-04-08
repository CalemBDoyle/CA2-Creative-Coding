let airFields = [];
let scoreboard = [];
const screenWidth = 1000;
const screenHeight = 1000;
let duckImage;
let duckImage2;
let currentAirfieldIndex = 0; // To track which airfield is active
let gameState = "playing";
let gameFinished = false; // Flag to check if the game is finished
let menu;

function preload() {
  duckImage = loadImage("images/duck1.png");
  puckImage = loadImage("images/duck2.png");
  puckHitImage = loadImage("images/duck2hit.png");
  suckImage = loadImage("images/duck3.png");
  suckHitImage = loadImage("images/duck3hit.png");
}

function setup() {
  createCanvas(screenWidth, screenHeight);
  angleMode(DEGREES);

  

  airFields.push(new Airfield({
    width: screenWidth,
    height: screenHeight * 0.75,
    posX: 0,
    posY: 0,
    numDucks: 2,
  }));
  airFields.push(new Airfield({
    width: screenWidth,
    height: screenHeight * 0.75,
    posX: 0,
    posY: 0,
    numDucks: 5 
  }));
  airFields.push(new Airfield({
    width: screenWidth,
    height: screenHeight * 0.75,
    posX: 0,
    posY: 0,
    numDucks: 5, 
    numPucks: 2 
  }));
  airFields.push(new Airfield({
    width: screenWidth,
    height: screenHeight * 0.75,
    posX: 0,
    posY: 0,
    numDucks: 0, 
    numPucks: 5 
  }));
  airFields.push(new Airfield({
    width: screenWidth,
    height: screenHeight * 0.75,
    posX: 0,
    posY: 0,
    numDucks: 0,
    numPucks: 5, 
    numSucks: 2
  }));
  airFields.push(new Airfield({
    width: screenWidth,
    height: screenHeight * 0.75,
    posX: 0,
    posY: 0,
    numDucks: 2, 
    numPucks: 4,
    numSucks: 2
  }));
  scoreboard.push(new Scoreboard({
    numAirfields: airFields.length
  }));

  // Initialize the menu
  menu = new Menu();
}

function draw() {
  background(0, 75, 0);
  if (gameFinished) {

    menu.render(); // Render the menu with the play again button
  } else {
    // get the current active airfield
    let currentAirfield = airFields[currentAirfieldIndex];
    // generate the airfield and its ducks
    currentAirfield.generateAirfield();
    // check if all ducks are gone, move to the next level if true
    if (currentAirfield.isCleared()) {
      nextLevel();
    }

    scoreboard[0].render();
  }
}

function mousePressed() {
  if (gameFinished) {
    // If the game is finished, check if the play again button is clicked
    if (menu.isClicked(mouseX, mouseY)) {
      resetGame();  // Reset the game
    }
  } else {
    let currentAirfield = airFields[currentAirfieldIndex];

    for (let i = currentAirfield.ducks.length - 1; i >= 0; i--) {
      let duck = currentAirfield.ducks[i];
      if (duck.isClicked(mouseX, mouseY)) {
        if (duck instanceof Suck) {
          duck.registerHit();
          if (duck.dead()){
            currentAirfield.ducks.splice(i, 1); // Only remove if dead
            scoreboard[0].increaseScore(500); // Add points for hitting a puck
          }
        }else if (duck instanceof Puck) {
          duck.registerHit();
          if (duck.dead()) {
            currentAirfield.ducks.splice(i, 1); // Only remove if dead
            scoreboard[0].increaseScore(250); // Add points for hitting a puck
          }
        } else {
          currentAirfield.ducks.splice(i, 1); // Normal duck, remove immediately
          scoreboard[0].increaseScore(100); // Add points for hitting a duck
        }
        break; // Only one click at a time
      }
    }
  }
}

// Switch to the next airfield (level)
function nextLevel() {
  currentAirfieldIndex++;

  // If all airfields are completed, stop the game
  if (currentAirfieldIndex >= airFields.length) {
    gameFinished = true; // Mark the game as finished
    console.log("You finished all the levels!");
  } else {
    console.log("Next Level!");
  }
}

function resetGame() {
  airFields.push(new Airfield({
    width: screenWidth,
    height: screenHeight * 0.75,
    posX: 0,
    posY: 0,
    numDucks: 2,
  }));
  airFields.push(new Airfield({
    width: screenWidth,
    height: screenHeight * 0.75,
    posX: 0,
    posY: 0,
    numDucks: 5 
  }));
  airFields.push(new Airfield({
    width: screenWidth,
    height: screenHeight * 0.75,
    posX: 0,
    posY: 0,
    numDucks: 5, 
    numPucks: 2 
  }));
  airFields.push(new Airfield({
    width: screenWidth,
    height: screenHeight * 0.75,
    posX: 0,
    posY: 0,
    numDucks: 0, 
    numPucks: 5 
  }));
  airFields.push(new Airfield({
    width: screenWidth,
    height: screenHeight * 0.75,
    posX: 0,
    posY: 0,
    numDucks: 0,
    numPucks: 5, 
    numSucks: 2
  }));
  airFields.push(new Airfield({
    width: screenWidth,
    height: screenHeight * 0.75,
    posX: 0,
    posY: 0,
    numDucks: 2, 
    numPucks: 4,
    numSucks: 2
  }));
  scoreboard = []; // Reset scoreboard
  scoreboard.push(new Scoreboard({
    numAirfields: airFields.length
  }));

  scoreboard = []; // Reset scoreboard


  menu = new Menu(); // Recreate the menu
  loop(); // Restart the game loop
}
