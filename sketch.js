const screenWidth = 500;
const screenHeight = 500;
let airFields=[]
let currentplane =0 

function setup(){
createCanvas(screenWidth, screenHeight);
angleMode(DEGREES)
    


    airFields.push(new Airfield({
       numPlanes: 1,
       width: 200,
       height: 200,
       posX: 20,
       posY: 20
    }))
    // airFields.push(new Airfield({
    //     numPlanes: 1,
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
        // airfield.movePlanes()
    })
    if (keyIsDown(LEFT_ARROW) === true) {
        airFields[0].planes[currentplane].turnLeft()
    }
    if (keyIsDown(RIGHT_ARROW) === true) {
        airFields[0].planes[currentplane].turnRight()
    }
}
function keyPressed(){
    switch(key){
        case "0": currentplane=0; break;
        case "1": currentplane=1; break;
        case "2": currentplane=2; break;
        case "3": currentplane=3; break;
        case "4": currentplane=4; break;
        case "5": currentplane=5; break;
        case "6": currentplane=6; break;
        case "7": currentplane=7; break;
        case "8": currentplane=8; break;
        case "9": currentplane=9; break;

    }


}
