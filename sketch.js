
function setup() {
  // put setup code here
  createCanvas(500, 500);


}

function draw() {
  background(0,0, 20);
  stroke(255, 255, 255);
  line(width/2, 0, width/2, height);
  line(0, height/2, width, height/2);
  // int num = mouseX/50;
  let num = mouseX /50;


  translate(width/2, height/2);

  for(let i = width/2; i > - width/2; i -= width/500)
  {
    var fx=0;
    var rad = map(i, -width/2, width/2, -PI, PI);
    var fx1 = atan(0.8*sin(rad)/(1-0.8*cos(rad)));
    for(let k = 1; k <=num; k++)//calculate f(x)
    {
      var apow = pow(0.8, k);
      fx += apow*sin(k* rad)/k;

    }
    stroke(200,100, 0);
    point(i, -100*fx1);
    point(i, -100*fx);
  }
  // put drawing code here
  // if(mouseIsPressed){
    // fill(0);
  // }
  // else{
    // fill(255);
  // }
  // ellipse(mouseX, mouseY, 80, 80);
}
