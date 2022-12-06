function setup() {
  let cnv =  createCanvas(windowWidth/2, windowHeight-(windowHeight*.2));
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  cnv.position(x, y+(windowHeight*.07));
  strokeWeight(4);
  stroke(22,2,130)
  
}

function draw() {
  background(3,3,3);
  
  for(let i = 20; i < width; i+= width/10){
      const v1 = createVector(i, 0);
       line(v1.x, v1.y, v1.x, height);
  }
  describe('draws a line from center of canvas to mouse pointer position.');

}

function windowResized() {
  resizeCanvas(windowWidth/2, windowHeight);
}