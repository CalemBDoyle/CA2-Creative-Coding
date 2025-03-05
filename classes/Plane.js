class Plane{
    constructor(obj) {
        this.xPos = obj.xPos || random(0,500);
        this.yPos = obj.yPos || random(0,500);
        this.xVel = obj.xVel || random (-0.9,0.9);
        this.yVel = obj.yVel || random (-0.9,0.9);
        this.width = obj.width || 10;
        this.height =  obj.height || 30;
        this.tail = obj.tail || 4;
    }

    renderPlane() {
        push()
        translate(this.xPos,this.yPos)
        let angle = atan2 (this.yVel, this.xVel)
        strokeWeight(1)
        
        rotate(angle)
        beginShape()
            vertex(0,0)
            vertex(-this.tail, -this.width)
            vertex(this.height, 0)
            vertex(-this.tail, this.width)
        endShape()
        pop()
    }
    
    movePlane() {
      
        
        this.xPos = this.xPos + this.xVel
        this.yPos = this.yPos + this.yVel
    }
}