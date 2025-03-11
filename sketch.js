const screenWidth = 500;
const screenHeight = 500;
let airFields=[]

function setup(){
createCanvas(screenWidth, screenHeight);
angleMode(DEGREES)
    


    airFields.push(new Airfield({
       numPlanes: 10,
       width: 200,
       height: 200,
       posX: 20,
       posY: 20
    }))
    airFields.push(new Airfield({
        numPlanes: 10,
        width: 200,
        height: 200,
        posX: 240,
        posY: 20
     }))
    
    
}

function draw(){
    background(255,0,0)
    airFields.forEach((airfield)=>{
        airfield.renderAirfield();
        airfield.checkDist()
        // airfield.movePlanes()
    })
}
