let airFields = []
let scoreboard = []
const screenWidth = 1000
const screenHeight = 1000
let menu;
let duckImage;
let duckImage2;
let currentAirfieldIndex = 0; // To track which airfield is active

function preload() {
  duckImage = loadImage("images/duck1.png");
  puckImage = loadImage("images/duck2.png");
  puckHitImage = loadImage("images/duck2hit.png");
}

function setup() {
  createCanvas(screenWidth, screenHeight);
  angleMode(DEGREES);

  scoreboard.push(new Scoreboard())

  airFields.push(new Airfield({
    width: screenWidth,
    height: screenHeight * 0.75,
    posX: 0,
    posY: 0,
    numDucks: 2 // add ducks to the first level
  }));
  airFields.push(new Airfield({
    width: screenWidth,
    height: screenHeight * 0.75,
    posX: 0,
    posY: 0,
    numDucks: 5 // add ducks to the first level
  }));
  airFields.push(new Airfield({
    width: screenWidth,
    height: screenHeight * 0.75,
    posX: 0,
    posY: 0,
    numDucks: 5, // add more ducks for the next level
    numPucks: 2 // add pucks to level
  }));
  airFields.push(new Airfield({
    width: screenWidth,
    height: screenHeight * 0.75,
    posX: 0,
    posY: 0,
    numDucks: 0, // add more ducks for the next level
    numPucks: 5 // add pucks to level
  }));
}


function draw() {
  background(0, 75, 0);
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

function mousePressed() {
  if (currentAirfieldIndex >= airFields.length) {
    // If on the final screen, check if the play again button is clicked
    if (menu.isClicked(mouseX, mouseY)) {
      resetGame();  // Reset the game
    }
  } else {
  let currentAirfield = airFields[currentAirfieldIndex];

  for (let i = currentAirfield.ducks.length - 1; i >= 0; i--) {
      let duck = currentAirfield.ducks[i];
      if (duck.isClicked(mouseX, mouseY)) {
          if (duck instanceof Puck) {
              duck.registerHit();
              if (duck.dead()) {
                  currentAirfield.ducks.splice(i, 1); // Only remove if dead
                  scoreboard[0].increaseScore(10); // Add 10 points for hitting a puck
              }
          } else {
              currentAirfield.ducks.splice(i, 1); // Normal duck, remove immediately
              scoreboard[0].increaseScore(5); // Add 5 points for hitting a duck
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
    console.log("You finished all the levels!");
    noLoop(); // Stop the game
  } else {
    console.log("Next Level!");
  }
}
function resetGame() {
  currentAirfieldIndex = 0;
  airFields = [];
  
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
  loop(); // Restart the game loop
}

