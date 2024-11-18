let grass = [];
//let grass = []
let colors = []

function preload() {

blowerImage = loadImage('leafblower.jpg');

}

function setup() {
  createCanvas(900, 600);
  //background(220)

  colors.push(color(95,195,20));
  colors.push(color(121,208,33));
  colors.push(color(193, 243, 118));
  colors.push(color(85, 194, 51));
  colors.push(color(55,174,15));

/*    let pColor = colors[int(random(colors.length))]

    var r = random(5,5)

  for(var p = random(r); p < width; p = p + random(r)*1.5){
     for(var n = random(r); n < width; n = n + random(r)*1.5){
      noStroke()
       fill(pColor)
       rect(n,p,2,10)
       
     }
 }  */
// Draw the main body of the leaf blower

}

function draw() {
  background(255);

  image(blowerImage, 10,240,270,90)

  //if(mouseIsPressed) {

 let pColor = colors[int(random(colors.length))]

    grass.push(new GrassBlade(290, 300,pColor))
    //particles.push(new Particle(mouseX, mouseY,pColor))
  //}

  for(let i = 0; i < grass.length; i++)
    grass[i].display()  

  //if(particles[0])particles[0].display()

  //particles[0].display()

  //let p = new Particle(mouseX, mouseY)
  //p.display()

/*   var r = random(12,15)

  for(var p = random(r); p < width; p = p + random(r)*1.5){
     for(var n = random(r); n < width; n = n + random(r)*1.5){
       rect(n,p,2,10)
     }
 }  */

// Draw the main body of the leaf blower


}

class GrassBlade {
  constructor(x, y, c) {
    this.x = x
    this.y = y
    this.speedX = random(2,1)
    this.speedY = random(-1,1)
    this.c = c
  }

  display() {
    fill(this.c)
    noStroke()
    rect(this.x, this.y, 2 ,10)
    this.x += this.speedX
    this.y += this.speedY
  }

}




/* let particles = [];
let colors = []

function setup() {
  createCanvas(600, 600);

  colors.push(color(95,195,20));
  colors.push(color(121,208,33));
  colors.push(color(193, 243, 118));
  colors.push(color(85, 194, 51));
  colors.push(color(55,174,15));
}

function draw() {
  background(220);

  if(mouseIsPressed) {
    let pColor = colors[int(random(colors.length))]

    particles.push(new Particle(mouseX, mouseY,pColor))
  }

  for(let i = 0; i < particles.length; i++)
    particles[i].display()

  //if(particles[0])particles[0].display()

  //particles[0].display()

  //let p = new Particle(mouseX, mouseY)
  //p.display()
}

class Particle {
  constructor(x, y, c) {
    this.x = x
    this.y = y
    this.speedX = random(-1,1)
    this.speedY = random(-1,1)
    this.c = c
  }

  display() {
    fill(this.c)
    noStroke()
    rect(this.x, this.y, 2 ,10)
    this.x += this.speedX
    this.y += this.speedY
  }

}*/