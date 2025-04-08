class Scoreboard {
    constructor(obj) {
      this.width = 200;
      this.height = 50;
      this.posX = 1000 - this.width;
      this.posY = 1000 - this.height;
      this.score = 0;
      this.numAirfields = obj.numAirfields; 
    }
  
    render() {
      push();
      translate(this.posX, this.posY);
  
      // Draw the rectangle for the scoreboard
      fill(255); 
      rect(0, 0, this.width, this.height);
  
      // Display the score inside the box
      fill(0);  
      textSize(20);
      textAlign(CENTER, BOTTOM);
      text(this.score, this.width / 2, this.height / 2); 
      
      // Draw small grey circles to represent airfields
      let circleDiameter = 10; // Diameter of each circle
      let circleSpacing = (this.width - (this.numAirfields * circleDiameter)) / (this.numAirfields + 1); // Calculate spacing between circles
      
      fill(150); // Grey color for the circles
      for (let i = 0; i < this.numAirfields; i++) {
        let xPos = circleSpacing * (i + 1) + circleDiameter * i; // Calculate position for each circle
        ellipse(xPos, this.height - 10, circleDiameter, circleDiameter); // Draw the circle
      }
  
      pop();
    }
  
    increaseScore(amount) {
      this.score += amount;
    }
  }
  