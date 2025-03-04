let planes = [];
let numPlanes=50;

function setup(){
createCanvas(500, 500);
angleMode(DEGREES)
for(let i=0;i<numPlanes;i++)
planes.push(new Plane())

}

function draw(){
    background(0,255,255)
    for(let i=0;i<numPlanes;i++){
    planes[i].renderPlane()
    planes[i].movePlane()
}
}
