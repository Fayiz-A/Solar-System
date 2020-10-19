class Sun {
   constructor(x, y, radius) {
      this.x = x;
      this.y = y; 
      this.radius = radius;
   }

   display() {
      push();
      noStroke();

      fill('yellow');

      translate(this.x, this.y);

      sphere(this.radius);

      pop();
   }
}