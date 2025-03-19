class Heli extends Craft{
    constructor(obj) {
        
        super(obj)
        this.width = obj.width || 20;
        this.height =  obj.height || 10;
        this.tail=7
        this.speed=random(1,3);
        
        
       
    }

    render(id) {
        push()
        translate(this.pos.x,this.pos.y)
        strokeWeight(1)
        text(id,10,-10)
        rotate(this.angle)
        beginShape()
        rect(0,0,this.width,this.height)
        ellipse(this.width,5,this.width,this.width)
        rect(0,this.height/4,-this.tail,this.height/2)
        endShape()
        if(this.alert){
        noFill()
        stroke(0,0,0)
        strokeWeight(2)
        ellipse(this.height*1.4,0,this.height*2.4)
        }
        pop()
    }
    
}