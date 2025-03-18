const screenWidth = 500;
const screenHeight = 500;
let airFields=[]
let currentCraft =0 

function setup(){
createCanvas(screenWidth, screenHeight);
angleMode(DEGREES)
    


    airFields.push(new Airfield({
       numcrafts: 1,
       width: 200,
       height: 200,
       posX: 20,
       posY: 20
    }))
    // airFields.push(new Airfield({
    //     numcrafts: 1,
    //     width: 200,
    //     height: 200,
    //     posX: 240,
    //     posY: 20
    //  }))
    
    
}

function draw(){
    background(255,0,0)
    airFields.forEach((airfield)=>{
        airfield.renderAirfield();
        airfield.checkDist()
        // airfield.movecrafts()
    })
    if (keyIsDown(LEFT_ARROW) === true) {
        airFields[0].crafts[currentCraft].turnLeft()
    }
    if (keyIsDown(RIGHT_ARROW) === true) {
        airFields[0].crafts[currentCraft].turnRight()
    }
}
function keyPressed(){
    switch(key){
        case "0": currentCraft=0; break;
        case "1": currentCraft=1; break;
        case "2": currentCraft=2; break;
        case "3": currentCraft=3; break;
        case "4": currentCraft=4; break;
        case "5": currentCraft=5; break;
        case "6": currentCraft=6; break;
        case "7": currentCraft=7; break;
        case "8": currentCraft=8; break;
        case "9": currentCraft=9; break;

    }


}
