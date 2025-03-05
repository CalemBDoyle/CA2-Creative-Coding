
let airFields=[]

function setup(){
createCanvas(500, 500);
angleMode(DEGREES)
rectMode(CENTER)
    


    airFields.push(new Airfield({
       numPlanes: 5,
       width: 150,
       height: 150,
       posX: 300,
       posY: 300
    }))
    airFields.push(new Airfield({
        numPlanes: 10,
        width: 150,
        height: 150,
        posX: 100,
        posY: 100
     }))
    
    
}

function draw(){
    background(255,0,0)
    for(i=0; i<airFields.length;i++){
    airFields[i].renderAirfield()
    airFields[i].renderPlanes()
    airFields[i].movePlanes()
    airFields[i].checkPos()
    }
}
