let entities=[]
let numEntities=1
let screenWidth=1000
let screenHeight=1000

function setup() {
  createCanvas(1000, 1000);
  angleMode(DEGREES)
// Assuming 'entities' is an array of objects, each having a 'speed' property


  
  for(let i=0; i<numEntities;i++){
  entities.push(new Entity({
    screenWidth: screenWidth,
    screenHeight: screenHeight
  }))
  }
}

function draw() {
  if (entities.length > 0) {
    // Loop through each entity in the 'entities' array
    for (let i = 0; i < entities.length; i++) {
      if (entities[i].speed < 0) {
        entities[i].speed = 0; // Set the speed of that entity to 0
      }
    }
  }
  background(220);
  entities[0].render()
  if(keyIsDown(87)){
  entities[0].move()
  } if (keyIsDown(65)){
      entities[0].turnLeft()
  } if (keyIsDown(68)){
      entities[0].turnRight()
  } 

}
