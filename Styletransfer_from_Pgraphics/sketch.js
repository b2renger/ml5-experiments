let pg
let style1;

let statusMsg;
let transferBtn;

function preload(){
    style1 = ml5.styleTransfer('wave', modelLoaded)
//    ();
}

function setup() {
    createCanvas(640, 480)
    pg = createGraphics(width, height)
    pg.background(0)
    pg.pixelDensity(1)


    statusMsg = select('#statusMsg');

    transferBtn = select('#transferBtn')
    transferBtn.mousePressed(transferImages);



}


function draw() {
    background(0)

    pg.fill(255)
    pg.ellipse(mouseX, mouseY, 10, 10)

    image(pg, 0, 0)

}

function transferImages() {
  statusMsg.html('Applying Style Transfer...!');

  style1.transfer(pg, function(err, result) {
      console.log(result, err)
    createImg(result.src).parent('styleA');
  });


  statusMsg.html('Done!');
}

function modelLoaded() {
  // Check if both models are loaded
  if(style1.ready){
    statusMsg.html('Ready!')
  }
}
