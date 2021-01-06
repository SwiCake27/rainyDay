class man {
  constructor(x, y, width, height) {
    var options = { 
      density: 1, 
      frictionAir: 0.005,
    isStatic:true};

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image=loadImage("walking_1.png")
    World.add(world, this.body);
  }

  display() {


    push();
   
  
    stroke("black")

    imageMode(CENTER)
    image(this.image, this.body.position.x,this.body.position.y,this.width,this.height)
    
    pop();
  }
}