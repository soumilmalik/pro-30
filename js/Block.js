class Block{
    constructor(x, y, width, height) {
        var options = {
            restitution :0.4,
            friction :0.0,
            
            isStatic : false
        }
        
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
           if(this.body.speed<3){
          var angle = this.body.angle;
          var pos= this.body.position;
          push();
          //translate(pos.x, pos.y);
          //rotate(angle);
          rectMode(CENTER);
          rect(pos.x, pos.y,this.width, this.height);
          pop();
        }
        else{
          //var angle = this.body.angle;
          //var pos= this.body.position;
          World.remove(world, this.body);
          push ();
          this.visibility -= 5; //this.visibility = this.visibility-5
          tint (255, this.visibility);
          rect(0, 0, this.width, this.height);
          pop ();
        }
      }
}