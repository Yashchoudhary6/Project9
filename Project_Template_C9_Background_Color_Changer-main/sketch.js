var btn_red;
var btn_green;
var r,g,b

btn_red = createButton("RED")
btn_red.position(100,50)
btn_red.mousePressed(red_bg)

btn_green = createButton("GREEN")
btn_green.position(300,100)
btn_green.mousePressed(green_bg)

function setup() {
  createCanvas(400, 400);  
}

function red_bg(){
  r=255
  g=0
  b=0
}
function green_bg(){
  r=0
  g=255
  b=0
}

function draw() {
}




