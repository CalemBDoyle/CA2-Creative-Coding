class Plane extends Craft{
    constructor(obj) {
  
        super(obj);

        this.tail = obj.tail || 4;
        this.alert=false
    }

    render(id) {
        push()
        translate(this.pos.x,this.pos.y)
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
}