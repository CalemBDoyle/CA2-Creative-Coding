let entities=[]
let numEntities=1
const screenWidth=1000
const screenHeight=1000

function setup() {
  createCanvas(screenWidth,screenHeight);
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
  entities.forEach((entity)=>{
    
    entity.checkColl()
    entity.decelerate()
    // airfield.movecrafts()
})
  
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
