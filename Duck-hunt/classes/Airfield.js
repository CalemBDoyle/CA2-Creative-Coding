class Airfield {
    constructor(obj) {
        this.width = obj.width ?? 1000;
        this.height = obj.height ?? 500;
        this.posX = obj.posX ?? 0;
        this.posY = obj.posY ?? 1000;
        this.corner = obj.corner ?? 75;
        this.numDucks = obj.numDucks ?? 2;
        this.numPucks = obj.numPucks ?? 0;
        this.numTargets = this.numDucks + this.numPucks;
        this.ducks = []; // Initialize ducks array
        this.generateDucks();
    }

    generateAirfield() {
        push();
        translate(this.posX, this.posY);
        fill(200, 255, 255);
        rect(0, 0, this.width, this.height);
        fill(0, 0, 255);
        
        // Loop BACKWARDS through ducks (so we can remove safely)
        for (let i = this.ducks.length - 1; i >= 0; i--) {
            let duck = this.ducks[i];
            duck.render();
            duck.move();
            this.bounceDuck(duck);
    
            // Check if it touches the top (fly off and delete)
            if (duck.pos.y - duck.height / 2 <= 0) {
                this.ducks.splice(i, 1);
            }
        }
    
        pop();
    }

    generateDucks() {
        // Generate Ducks
        for (let i = 0; i < this.numDucks; i++) {
            const duck = new Duck({
                xPos: random(0, this.width),
                yPos: this.height,
                speed: random(1, 3),
            });
            this.ducks.push(duck);
        }
        
        // Generate Pucks
        for (let i = 0; i < this.numPucks; i++) {
            const puck = new Puck({
                xPos: random(0, this.width),
                yPos: this.height,
                speed: random(1, 3),
            });
            this.ducks.push(puck);
        }

        // Debug log to check if ducks and pucks are added correctly
        console.log('Ducks and Pucks:', this.ducks);
    }

    bounceDuck(duck) {
        // left and right walls
        if (duck.pos.x - duck.width / 2 < 0 || duck.pos.x + duck.width / 2 > this.width) {
            duck.vel.x *= -1; // Reverse x velocity
        }

        // bottom walls
        if (duck.pos.y + duck.height / 2 > this.height) {
            duck.vel.y *= -1; // Reverse y velocity
        }
    }

    isCleared() {
        // Return true if no ducks or pucks are left
        return this.ducks.length === 0;
    }
}
