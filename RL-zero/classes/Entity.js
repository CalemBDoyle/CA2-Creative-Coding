class Entity{
    constructor(obj){
    this.width = 10
    this.height = 20
    this.pos = createVector(obj.screenWidth/2, obj.screenHeight/2)

    }
    
render(){
    push()
    translate(this.pos.x,this.pos.y)
    fill(random(255),random(255),random(255))
    ellipse (0,0,this.width,this.height)
    pop()
}
    
}