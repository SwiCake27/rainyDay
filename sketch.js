const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var boy,road
var ball=[];
var maxDrops=300
var thing,thunder,strike1,strike2,stike3,stike4
function preload(){
    strike1=loadImage("1.png")
    strike2=loadImage("2.png")
    strike3=loadImage("3.png")
    strike4=loadImage("4.png")
}
function setup() {
  createCanvas(400,600);
  engine=Engine.create();
  world=engine.world;
thing=createSprite(100,100,100,100)
thing.addImage(strike1);
boy=new man(200,500,100,100)
}

function draw() {
  background(0);  
  Engine.update(engine);
drawSprites();
 
 boy.display();
 //if(frameCount%30===0){
 lightning();
 //}
  if(frameCount%10===0){

    ball.push(new Ball(random(0,400),5,5))

  }
  for(var i=0;i<ball.length;i++){
    ball[i].display();
  }
}
function lightning(){
    var rand = Math.round(random(1,8));
    switch(rand) {
      case 1: thing.addImage(strike1);
              break;
      case 2: thing.addImage(strike3);
              break;
      case 3: thing.addImage(strike2);
              break;
      case 4: thing.addImage(strike4);
              break;
    case 5: thing.visible=false;
              break;
      case 6: thing.visible=true;
              break;
      case 7: thing.visible=false;
             break;
        case 8:thing.visible=true;
            break;
      default: break;
    }
   
}