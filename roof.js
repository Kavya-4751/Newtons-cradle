class roof {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
    
      this.width = width;
      this.height = height;
      this.x=x
      this.y=y
      this.body = Bodies.rectangle(x,y,width,height,options);
      World.add(world, this.body);
    }
    display(){
      var roofpos =this.body.position;
      push()
      translate(roofpos.x,roofpos.y)
      rectMode(CENTER);
      fill("grey");
      rect(0,0, this.width, this.height);
      pop()
    }
  }