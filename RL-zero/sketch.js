let entities=[]
let numEntities=10
let screenWidth=1000
let screenHeight=1000

function setup() {
  createCanvas(1000, 1000);
  angleMode(DEGREES)
  
  for(let i=0; i<numEntities;i++){
  entities.push(new Entity({
    screenWidth: screenWidth,
    screenHeight: screenHeight
  }))
  }
}

function draw() {
  background(220);
  entities[0].render()
  if(keyIsDown(87)){
  entities[0].move()
  }
}
