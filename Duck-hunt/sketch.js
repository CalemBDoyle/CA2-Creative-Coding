let airFields = [];
let scoreboard = [];
const screenWidth = 1000;
const screenHeight = 1000;
let duckImage;
let duckImage2;
let currentAirfieldIndex = 0;
let gameFinished = false; 
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

  
  //rendering airfields in array
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
    airFields: airFields
  }));
  menu = new Menu({score: scoreboard.score});
  
  
}

function draw() {
  background(0, 75, 0);
  if (gameFinished) {
  menu.score = scoreboard[0].score; // update menu score before rendering
  menu.render();
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
    if (menu.isClicked(mouseX, mouseY)) {
      resetGame();  // reset the game function
    }
  } else {
    let currentAirfield = airFields[currentAirfieldIndex];

    for (let i = currentAirfield.ducks.length - 1; i >= 0; i--) {
      let duck = currentAirfield.ducks[i];
      if (duck.isClicked(mouseX, mouseY)) {
        if (duck instanceof Suck) {
          duck.registerHit();
          if (duck.dead()){
            currentAirfield.ducks.splice(i, 1); // only remove if dead
            scoreboard[0].increaseScore(500); // add points 
          }
        }else if (duck instanceof Puck) {
          duck.registerHit();
          if (duck.dead()) {
            currentAirfield.ducks.splice(i, 1); 
            scoreboard[0].increaseScore(250); 
          }
        } else {
          currentAirfield.ducks.splice(i, 1); 
          scoreboard[0].increaseScore(100); 
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
  scoreboard[0].passAirfield();
}

function resetGame() {
  airFields = [];
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
  scoreboard = []; // reset scoreboard
  scoreboard.push(new Scoreboard({
    airFields: airFields
  }));

  menu = new Menu({ score: 0 }); // recreate the menu
  gameFinished = false; // reset gameFinished state
  currentAirfieldIndex = 0; // reset airfield index

  loop(); // restart the game
}
