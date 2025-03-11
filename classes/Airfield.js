class Airfield{
    constructor(obj){
        this.numPlanes = obj.numPlanes ?? 50;
        this.width = obj.width ?? 300;
        this.height = obj.height ?? 300;
        this.posX = obj.posX ?? 250
        this.posY = obj.posY ?? 250
        this.planes = []
        this.generatePlanes()

    }

    renderAirfield(){
        push()
        translate(this.posX,this.posY) 
        fill(0,0,255)
        rect(0,0,this.width,this.height)
        fill(0,255,0)
        this.planes.forEach(plane =>{
            this.checkLimit(plane)
            plane.renderPlane();
            plane.movePlane()
        })
        pop()
    }

    generatePlanes(){
        for(let i=0; i<this.numPlanes; i++){
            this.planes.push(new Plane({
                xPos:random(0,this.width),
                yPos:random(0,this.height),
                xVel:random(-1,1),
                yVel:random(-1,1)
            
            }))
            
        }
    }
    movePlanes(){
        this.planes.forEach(plane => {
            plane.movePlane()
            
    }
)}

checkLimit(plane){
  if (plane.xPos>this.width){
    plane.xPos=0
    plane.yPos= map(plane.yPos,0, this.height, this.height,0)
  }  else if (plane.xPos <0){
    plane.xPos = this.width
    plane.yPos = map(plane.yPos,0,this.height, this.height,0)
  }

  if (plane.yPos>this.height){
    plane.yPos=0
    plane.xPos= map(plane.xPos,0, this.width, this.width,0)
  }  else if (plane.yPos <0){
    plane.yPos = this.height
    plane.xPos = map(plane.xPos,0,this.width, this.width,0)
  }

}

checkDist(){

  this.planes.forEach(plane => plane.alert=0)
  let count= 0
  for (let i=0; i<this.planes.length; i++){
   for(let j=i+1; j<this.planes.length; j++){
      let planeA = this.planes[i];
      let planeB = this.planes[j];
      let dist = sqrt(((sq(planeA.xPos - planeB.xPos)) + (sq(planeA.yPos - planeB.yPos))));
      if (dist<20){
        planeA.alert=true;
        planeB.alert=true;
      }

    
    }
  }
}
}