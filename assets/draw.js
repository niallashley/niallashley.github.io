function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {  
    x1 = 200
    y1 = 200
    x2 = mouseX
    y2 = mouseY
    d = int(dist(x1, y1, x2, y2))
    d2 = map(d, 0, 200, 150, 255)
    
    colorMode(HSB)
    background(0, d2-220, 255, d2);
    
    strokeWeight(1);
    stroke(0)
    drawingContext.setLineDash([5, 15]);
    line(x1, y1, x2, y2);
    
    drawingContext.setLineDash([]);
    fill(0)
    noStroke()
    ellipse(200,200,5,5)
    
    ellipse(mouseX, mouseY, 5, 5)
    
    textSize(14)
    textAlign(CENTER)
    text(mouseX+', '+mouseY, mouseX, mouseY-10)
    
    textSize(10)
    translate((x1 + x2) / 2, (y1 + y2) / 2);
    rotate(atan2(y2 - y1, x2 - x1));
    text(nfc(d, 1), 0, -5);
  }