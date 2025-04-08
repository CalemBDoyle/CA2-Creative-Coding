class Puck extends Duck{
    constructor(obj){
        super(obj)
        this.hitsNeeded = 2;
    }
     
  
    render() {
        push();
        translate(this.pos.x, this.pos.y);
        if (this.vel.x < 0) {
            scale(-1, 1); 
        }
        imageMode(CENTER);
        if (this.clicked) {
            image(puckHitImage, 0, 0, this.width, this.height); // different image when clicked
        } else {
            image(puckImage, 0, 0, this.width, this.height); // normal flying duck
        }
        pop();
        
    }
}