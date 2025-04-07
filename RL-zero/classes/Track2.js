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
    generateEntities() {
        for (let i = 0; i < this.numEntities; i++) {
            this.entities.push(new Entity({
                xPos: 0,
                yPos: this.height/2,
                track: this  // Pass the track reference
            }));
        }
    }
    handleColl(entity) {
        // Constrain entity within track boundaries
        entity.pos.x = constrain(entity.pos.x, this.left, this.right);
        entity.pos.y = constrain(entity.pos.y, this.top, this.bottom);
    
        // Check if the entity has moved past the top boundary of Track2
        if (entity.pos.y - entity.height / 2 < this.top) {
            let index = tracks.indexOf(this);
            console.log("you have hit the top")
            // Ensure Track2 is in the array and Track3 exists at index 2
            if (index !== -1 && tracks.length > 2) {
                let newTrack = tracks[2]; // Reference to Track3
    
                // Store the entity's velocity before switching
                let speedX = entity.vel.x;
                let speedY = entity.vel.y;
    
                // Move entity to the start of Track3
                entity.pos.x = newTrack.posX + entity.width / 2;
                entity.pos.y = newTrack.posY + entity.height / 2;
    
                // Restore velocity so the entity keeps moving
                entity.vel.x = speedX;
                entity.vel.y = speedY;
    
                // Swap Track2 with Track3 in the array (if necessary)
                [tracks[index], tracks[2]] = [tracks[2], tracks[index]];
                
            }
        }
    }
}