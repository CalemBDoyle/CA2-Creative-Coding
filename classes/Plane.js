class Plane{
    constructor(obj) {
        this.xPos = obj.xPos || random(0,screenWidth);
        this.yPos = obj.yPos || random(0,screenHeight);
        
        this.width = obj.width || 10;
        this.height =  obj.height || 20;
        this.tail = obj.tail || 4;
        this.alert=false
        this.speed=random(1,5);
        this.angle=random(0,360)
        this.xVel = this.speed*cos(this.angle)
        this.yVel = this.speed*sin(this.angle)
}

    renderPlane(id) {
        push()
        translate(this.xPos,this.yPos)
        strokeWeight(1)
        text(id,10,-10)
        rotate(this.angle)
        beginShape()
            vertex(0,0)
            vertex(-this.tail, -this.width)
            vertex(this.height, 0)
            vertex(-this.tail, this.width)
        endShape()
        if(this.alert){
        noFill()
        stroke(0,0,0)
        strokeWeight(2)
        ellipse(this.height*0.4,0,this.height*1.4)
        }
        pop()
    }
    
    movePlane() {
      
        
        this.xPos = this.xPos + this.xVel
        this.yPos = this.yPos + this.yVel
    }
    updateVel() {
        this.xVel = this.speed * cos(this.angle);
        this.yVel = this.speed * sin(this.angle);
    }
    increaseSpeed() {
        this.speed += 0.3;
        this.updateVel();
    }
 
    decreaseSpeed() {
        this.speed -= 0.3;
        if (this.speed < 0) {
            this.speed = 0.1
        }
        this.updateVel();
    }
 
    turnLeft() {
        this.angle -= 2;
        this.updateVel();
    }
 
    turnRight() {
        this.angle += 2;
        this.updateVel();
    }
}