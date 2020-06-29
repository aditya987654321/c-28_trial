const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world ,score = 0 ;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;


var gameState = "onSling";

function preload() {
    getBgImg();
    binimg = loadImage("sprites/wood1.jpg")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    var bin = createSprite(1000,290,200,200)
    bin.addImage("bin",binimg)

    ground = new Ground(600,height,1200,20);
    

    // base
    

    
    wall2 = new Wall(890,290,10,200);
    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background("#ffffff");
    
    
   
        
        
        noStroke()
        textSize (35)
        fill(255)
        text("score -> "+score,width-300,50)
    Engine.update(engine);
    //strokeWeight(4);
    
    
    
    ground.display();

    bird.display();
   
    //log6.display();
    slingshot.display();    
    drawSprites();
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       // slingshot.attach(bird.body);
    }
}

async function getBgImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo")
    var responseJSON  =  await response.json();
    var time = responseJSON.datetime
    var hour = time.slice(11,13)
    console.log(hour)
    if(hour >= 06 && hour<= 19){
        bg = "sprites/bg.png"
    }
    else{
        bg = "sprites/bg2.jpg"
    }
    backgroundImg = loadImage(bg )
}