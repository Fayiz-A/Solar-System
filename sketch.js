var sun;

var planetArray = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

var planetXArray = [-200, -270, -350, -430, -530, -660, -760, -840];

var planetSizeArray = [10, 17, 17, 14, 60, 50, 40, 30];

var planetColorArray = ['grey', 'brown', 'blue', 'red', 'brown', 'green', 'lightblue', 'pink'];

var planetRotationSpeed = [0.009, 0.007, 0.005, 0.003, 0.002, 0.0015, 0.0012, 0.0010];

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  sun = new Sun(0, -windowHeight/2, 100);  

  var planetYArray = [-windowHeight/2, -windowHeight/2, -windowHeight/2, -windowHeight/2, -windowHeight/2, -windowHeight/2, -windowHeight/2, -windowHeight/2];

  for(var planet in planetArray) {
    //planet = index
    planetArray[planet] = new Planet(planetXArray[planet], planetYArray[planet], planetSizeArray[planet], planetColorArray[planet], planetRotationSpeed[planet]);
  
  }

  cam = createCamera();
  cam.move(0, 0, 600)
}

//var rotationAngle = 0;
let x=0;
function draw() {

  translate(0, 400)  

  background(0);

  planetArray.forEach(element => {
    element.display();
  });

  sun.display();
}