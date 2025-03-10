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
        fill(0,255,0)
        rect(0,0,this.width,this.height)
        pop()
    }
    renderPlanes(){
        push()
        translate(this.posX,this.posY) 
        fill(0,0,255)
        this.planes.forEach(plane=>plane.renderPlane())
        pop()
    }

    generatePlanes(){
        for(let i=0; i<this.numPlanes; i++){
            this.planes.push(new Plane({
                xPos:random(-this.width/2,this.width/2),
                yPos:random(-this.height/2,this.height/2)}))
            
        }
    }
    movePlanes(){
        this.planes.forEach(plane => {
            plane.movePlane()
            
    }
)}
    
checkPos() {
    this.planes.forEach(plane => {
        if (plane.xPos > this.width / 2) {
            plane.xPos = -this.width / 2;
            plane.yPos = map(plane.yPos, -this.height / 2, this.height / 2, this.height / 2, -this.height / 2);
        } else if (plane.xPos < -this.width / 2) {
            plane.xPos = this.width / 2;
            plane.yPos = map(plane.yPos, -this.height / 2, this.height / 2, this.height / 2, -this.height / 2);
        }

        if (plane.yPos > this.height / 2) {
            plane.yPos = -this.height / 2;
            plane.xPos = map(plane.xPos, -this.width / 2, this.width / 2, this.width / 2, -this.width / 2);
        } else if (plane.yPos < -this.height / 2) {
            plane.yPos = this.height / 2;
            plane.xPos = map(plane.xPos, -this.width / 2, this.width / 2, this.width / 2, -this.width / 2);
        }
    })
}
}