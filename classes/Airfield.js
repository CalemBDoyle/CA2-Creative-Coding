class Airfield{
    constructor(obj){
        this.numCrafts = obj.numCrafts ?? 3;
        this.width = obj.width ?? 300;
        this.height = obj.height ?? 300;
        this.posX = obj.posX ?? 250
        this.posY = obj.posY ?? 250
        this.crafts = []
        this.generateCrafts()

    }

    renderAirfield(){
        push()
        translate(this.posX,this.posY) 
        fill(0,0,255)
        rect(0,0,this.width,this.height)
        fill(0,255,0)
        this.crafts.forEach((craft,id) =>{
            this.checkLimit(craft)
            craft.render(id);
            craft.move()
        })
        pop()
    }

    generateCrafts(){
        for(let i=0; i<this.numCrafts; i++){
          let num= random(0,1);
          if(num<0.5){
            this.crafts.push(new Heli({
              xVel:random(-1,1),
              yVel:random(-1,1)
            }))
          } else{
            this.crafts.push(new Plane({
              
                xVel:random(-1,1),
                yVel:random(-1,1)
            
            }))}
            
        }
    }
    moveCrafts(){
        this.crafts.forEach(craft => {
            craft.move()
            
    }
)}

checkLimit(craft){
  if (craft.pos.x>this.width){
    craft.pos.x=0
    craft.pos.y= map(craft.pos.y,0, this.height, this.height,0)
  }  else if (craft.pos.x <0){
    craft.pos.x = this.width
    craft.pos.y = map(craft.pos.y,0,this.height, this.height,0)
  }

  if (craft.pos.y>this.height){
    craft.pos.y=0
    craft.pos.x= map(craft.pos.x,0, this.width, this.width,0)
  }  else if (craft.pos.y <0){
    craft.pos.y = this.height
    craft.pos.x = map(craft.pos.x,0,this.width, this.width,0)
  }

}

checkDist(){

  this.crafts.forEach(craft => craft.alert=0)
  for (let i=0; i<this.crafts.length; i++){
   for(let j=i+1; j<this.crafts.length; j++){
      let craftA = this.crafts[i];
      let craftB = this.crafts[j];
      let dist = sqrt(((sq(craftA.pos.x - craftB.pos.x)) + (sq(craftA.pos.y - craftB.pos.y))));
      if (dist<20){
        craftA.alert=true;
        craftB.alert=true;

      }

    
    }
  }
}
}