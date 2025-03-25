let entities=[]
let numEntities=1
const screenWidth=500
const screenHeight=500

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
  entities.forEach((entity)=>{
    
    entity.checkColl()
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
