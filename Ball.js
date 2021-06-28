class Ball {
    constructor(x, y, width, height, angle) {
      var options = {
          'frictionAir':0.001,
          'density':0.2,
          'restitution':0.1

      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage ("snow4.webp")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      //rectMode(CENTER);
     // fill("orange");
     // ellipse(0, 0, this.width, this.height);
     image(this.image,0,0,20,20)
      pop();
    }
  };