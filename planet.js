class Planet {
   constructor(x, y, radius, color, rotationSpeed) {
      this.x = x;
      this.y = y; 
      this.radius = radius;
      this.color = color;
      this.rotationSpeed = rotationSpeed;

      this.rotationAngle = 0;
   }

   display() {

      push();

      translate(windowWidth/2, -displayHeight/2);

      rotateX(-0.4);
         push();
         translate(-windowWidth/2, 400);
         rotateY(this.rotationAngle);
         noStroke();
            fill(this.color);
            translate(this.x, this.y, 0);
            rotateY(this.rotationAngle);
            sphere(this.radius);
         pop();
      pop();

      this.rotationAngle += this.rotationSpeed;
   }
}