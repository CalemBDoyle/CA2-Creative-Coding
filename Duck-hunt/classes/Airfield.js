class Airfield {
    constructor(obj) {
        this.width = obj.width ?? 1000;
        this.height = obj.height ?? 500;
        this.posX = obj.posX ?? 0;
        this.posY = obj.posY ?? 1000;
        this.corner = obj.corner ?? 75;
        this.numDucks = obj.numDucks ?? 0;
        this.numPucks = obj.numPucks ?? 0;
        this.numSucks = obj.numSucks ?? 0;
        this.numTargets = this.numDucks + this.numPucks;
        this.ducks = []; // initialize ducks array
        this.generateDucks();
    }

    generateAirfield() {
        push();
        translate(this.posX, this.posY);
        fill(200, 255, 255);
        rect(0, 0, this.width, this.height);
        fill(0, 0, 255);
        
        // loop BACKWARDS through ducks (so we can remove safely)
        for (let i = this.ducks.length - 1; i >= 0; i--) {
            let duck = this.ducks[i];
            duck.render();
            duck.move();
            this.bounceDuck(duck);
            if (duck instanceof Suck) {
                duck.update();
            }
    
            // check if it touches the top (delete)
            if (duck.pos.y - duck.height / 2 <= 0) {
                this.ducks.splice(i, 1);    
            }
        }
    
        pop();
    }

    generateDucks() {
        // generate Ducks
        for (let i = 0; i < this.numDucks; i++) {
            const duck = new Duck({
                xPos: random(0, this.width),
                yPos: this.height,
                speed: random(1, 3),
            });
            this.ducks.push(duck);
        }
        
        // generate Pucks
        for (let i = 0; i < this.numPucks; i++) {
            const puck = new Puck({
                xPos: random(0, this.width),
                yPos: this.height,
                speed: random(1, 3),
            });
            this.ducks.push(puck);
        }
        
        // generate Sucks
        for (let i = 0; i < this.numSucks; i++) {
            const suck = new Suck({
                xPos: random(0, this.width),
                yPos: this.height,
                speed: random(1, 3),
            });
            this.ducks.push(suck);
        }

        // Debugging
        console.log('Ducks, Pucks, and Sucks:', this.ducks);
    }

    bounceDuck(duck) {
        // left and right walls
        if (duck.pos.x - duck.width / 2 < 0 || duck.pos.x + duck.width / 2 > this.width) {
            duck.vel.x *= -1; // Reverse x velocity
        }
    
        // bottom walls (ground)
        if (duck.pos.y + duck.height / 2 > this.height) {
            duck.vel.y *= -1; // Reverse y velocity
            duck.pos.y = this.height - duck.height / 2; // Prevent going below the ground
        }
        this.checkDuckCollisions()
    }
    checkDuckCollisions() {
        for (let i = 0; i < this.ducks.length; i++) {
            let duck1 = this.ducks[i];
            for (let j = i + 1; j < this.ducks.length; j++) {
                let duck2 = this.ducks[j];
    
                // Calculate the distance between ducks
                let dx = duck2.pos.x - duck1.pos.x;
                let dy = duck2.pos.y - duck1.pos.y;
                let distance = sqrt(dx * dx + dy * dy);
    
                // If ducks are colliding (overlapping)
                if (distance < (duck1.width / 2 + duck2.width / 2)) {
                    // Resolve collision by separating them and changing their velocities
                    let angle = atan2(dy, dx);
                    let overlap = (duck1.width / 2 + duck2.width / 2) - distance;
    
                    // Push ducks away from each other
                    let pushX = cos(angle) * overlap / 2;
                    let pushY = sin(angle) * overlap / 2;
    
                    // Adjust their positions
                    duck1.pos.x -= pushX;
                    duck1.pos.y -= pushY;
                    duck2.pos.x += pushX;
                    duck2.pos.y += pushY;
    
                    // Reflect velocities to separate ducks
                    let tempVelX = duck1.vel.x;
                    let tempVelY = duck1.vel.y;
                    duck1.vel.x = duck2.vel.x;
                    duck1.vel.y = duck2.vel.y;
                    duck2.vel.x = tempVelX;
                    duck2.vel.y = tempVelY;
                }
            }
        }
    }
    
    

    isCleared() {
        // return true if no ducks or pucks are left
        return this.ducks.length === 0;
    }
}
