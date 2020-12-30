class Dustbin {
  constructor(x,y,width,height){
    var options={
    isStatic: true
    }
  
  this.body = Bodies.rectangle(x,y,width,height,options);
  this.width=width;
  this.height=height;
  World.add(world,this.body);
  }
  
  display(){
    var binpos = this.body.position;
    fill("white");
    stroke("white");
    rect(binpos.x,binpos.y,this.width,this.height);
  }
}