
let tracks = []
let playerCraft = 0
let numTracks = 1
const screenWidth=1000
const screenHeight=1000

function setup() {
  createCanvas(screenWidth,screenHeight);
  angleMode(DEGREES)
// Assuming 'entities' is an array of objects, each having a 'speed' property
  for(let i=0; i<numTracks;i++){
    tracks.push(new Track({
      width: screenWidth,
      height: screenHeight/2,
      posX: 0,
      posY: screenHeight/4
    }))
}
}

function draw() {
  background(220);
  tracks.forEach((track)=>{
    
    track.generateTrack()
    track.movement()
    // airfield.movecrafts()
})
  

}
