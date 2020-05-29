// Author: Albert Vu avu21@lsu.edu
function setup() 
{
  createCanvas(600,500);
  textSize(16);
  text("Press spacebar to clear", 50, 20);
  c = color(0,0,0);
}

function draw() 
{
  //Color pickers
  strokeWeight(1);
  stroke(255);
  fill(255,0,0); // red
  rect(0,0,30,30);
  fill(255,160,16); // orange
  rect(0,30,30,30);
  fill(255,224,32); // yellow
  rect(0,60,30,30);
  fill(0,255,0); // green
  rect(0,90,30,30);
  fill(80,208,255); // cyan
  rect(0,120,30,30);
  fill(0,0,255); // blue 
  rect(0,150,30,30);
  fill(255,96,208); // pink
  rect(0,180,30,30);
  fill(160,128,96); // brown
  rect(0,210,30,30);
  fill(255); // white
  rect(0,240,30,30);
  fill(0); // black
  rect(0,270,30,30);

}
function mouseClicked()
{
  let x = mouseX;
  let y = mouseY;
  if (x >= 0 && x <= 30 && y >=0 && y <= 30)
  {
    c = color(255,0,0); // red
  }
  if (x >= 0 && x <= 30 && y >=30 && y <= 60)
  {
    c = color(255,160,16); // orange
  }
  if (x >= 0 && x <= 30 && y >=60 && y <= 90)
  {
    c = color(255,224,32); // yellow
  }
  if (x >= 0 && x <= 30 && y >=90 && y <= 120)
  {
    c = color(0,255,0); // green
  }
  if (x >= 0 && x <= 30 && y >=120 && y <= 150)
  {
    c = color(80,208,255); // cyan
  }
  if (x >= 0 && x <= 30 && y >=150 && y <= 180)
  {
    c = color(0,0,255); // blue
  }
  if (x >= 0 && x <= 30 && y >=180 && y <= 210)
  {
    c = color(255,96,208); // pink
  }
  if (x >= 0 && x <= 30 && y >=210 && y <= 240)
  {
    c = color(160,128,96); // brown
  }
  if (x >= 0 && x <= 30 && y >=240 && y <= 270)
  {
    c = color(255); // white
  }
  if (x >= 0 && x <= 30 && y >=270 && y <= 300)
  {
    c = color(0); // black
  }
}

function mouseDragged()
{
  stroke(c);
  strokeWeight(10);
  line(mouseX, mouseY, pmouseX, pmouseY);
}

function keyPressed()
{
  if (keyCode == 32) //spacebar
  {
    background(255);
  }
}

