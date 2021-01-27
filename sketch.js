var canvas;
var music
var box,box1,box2,box3
var bb

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
createCanvas(500,800)

    //create 4 different surfaces
    box = createSprite(100,750,150,30);
    box1 = createSprite(200,750,150,30);
    box2 = createSprite(300,750,150,30);
    box3 = createSprite(400,750,150,30);
    box.shapeColor = "yellow"
    box1.shapeColor = "green"
    box2.shapeColor = "blue"
    box3.shapeColor = "orange"
    //create box sprite and give velocity
    bb = createSprite(400,700,50,50)
    bb.velocityX = 3
    bb.velocityY = -3
    createEdgeSprites();
}

function draw() {
    background("red");
    //create edgeSprite



    //add condition to check if box touching surface and make it box

    drawSprites();
    bb.bounceOff(edges);

}
