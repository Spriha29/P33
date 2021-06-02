class Snow {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.2,
          'friction':1.0,
          'density':0.04
      }

      this.body = Bodies.circle(x, y, this.radius, options);
      this.radius = radius;
      this.image = loadImage("snow4.webp");
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(position.x, position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0, 0, this.radius, this.radius);
      pop();
    }
  };