class Track{
    constructor(obj){
        this.width = obj.width ?? 1000;
        this.height = obj.height ?? 500;
        this.posX = obj.posX ?? 0
        this.posY = obj.posY ?? 1000
        this.numEntities = obj.numEntities ?? 1
        this.entities=[]
        this.generateEntities()
    }


    generateTrack(){
        push()
        translate(this.posX,this.posY)
        fill(200,255,255)
        rect(0,0,this.width,this.height)
        fill(0,0,255)
        this.entities.forEach((entity) =>{
            entity.checkColl();
            entity.render();
            entity.decelerate()
        })
        pop()
        
    }
    generateEntities(){
    for(let i=0; i<this.numEntities;i++){
        this.entities.push(new Entity({
          screenWidth: this.width,
          screenHeight: this.height
        }))
        }
    }

}