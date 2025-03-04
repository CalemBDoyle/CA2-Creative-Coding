class Plane{
    constructor() {
        this.xPos = random(0,500);
        this.yPos = random(0,500);
        this.xVel = random (-0.9,0.9);
        this.yVel = random (-0.9,0.9);
        this.apWidth = 10;
        this.apHeight = 20;
        this.tail = 4;
    }

    renderPlane() {
        push()
        translate(this.xPos,this.yPos)
        let angle = atan2 (this.yVel, this.xVel)
        //ellipse(0,0,10,10)
        strokeWeight(1)
        
        rotate(angle)
        beginShape()
            vertex(0,0)
            vertex(-this.tail, -this.apWidth/2)
            vertex(this.apHeight-this.tail, 0)
            vertex(-this.tail, this.apWidth/2)
        endShape(CLOSE)
        pop()
    }
    
    movePlane() {
        this.xPos = this.xPos + this.xVel
        this.yPos = this.yPos + this.yVel
    }
}