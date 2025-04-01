class Track2 extends Track{
    constructor(obj) {
        super(obj)
            this.left= this.posX,
            this.right= this.posX + this.width * 0.8,
            this.top= this.posY -this.height,
            this.bottom= this.posY+ this.height/2
        }
    

    generateTrack() {
        push();
        translate(this.posX, this.posY);
        fill(200, 255, 255);
        rect(0, 0, this.width * 0.8, this.height, 0, 0, this.corner, 0);
        fill(200, 255, 255);
        rect(this.width / 3, 0, this.width * 0.47, -this.height);

        this.entities.forEach((entity) => {
            this.handleColl(entity);  // Track handles collision
            entity.render();
            entity.decelerate();
        });

        pop();
    }
    handleColl(entity) {
        entity.pos.x = constrain(entity.pos.x, this.left, this.right);
        entity.pos.y = constrain(entity.pos.y, this.top, this.bottom);
    }
}