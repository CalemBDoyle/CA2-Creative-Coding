class Menu {
    constructor() {
        this.width = 300;
        this.height = 150;
        this.posX = screenWidth / 2 - this.width / 2;
        this.posY = screenHeight / 2 - this.height / 2;
        this.buttonWidth = 200;
        this.buttonHeight = 50;
        this.score = 0;
    }

    render() {
        fill(255);
        rect(this.posX, this.posY, this.width, this.height);

        // display the score
        fill(0);
        textSize(20);
        textAlign(CENTER, CENTER);
        text("Score: " + this.score, this.posX + this.width / 2, this.posY + this.height / 4);

        // display "Play Again" button
        fill(0, 150, 0); 
        rect(this.posX + (this.width - this.buttonWidth) / 2, this.posY + this.height / 2 - 25, this.buttonWidth, this.buttonHeight);

        // text on the button
        fill(255);
        textSize(24);
        textAlign(CENTER, CENTER);
        text("Play Again", this.posX + this.width / 2, this.posY + this.height / 2);
    }

    isClicked(mx, my) {
        return mx >= this.posX + (this.width - this.buttonWidth) / 2 &&
               mx <= this.posX + (this.width + this.buttonWidth) / 2 &&
               my >= this.posY + this.height / 2 - 25 &&
               my <= this.posY + this.height / 2 + 25;
    }
}
