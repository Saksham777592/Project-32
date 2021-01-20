const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
//const Render = Matter.Render;

var ground;
var block1, block2, block3, block4, block5, block6, block7, block8, block9;
var shooter;
var rope;

var score = 0;

function setup() {
	createCanvas(1200, 500);
	engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(600, 480, 1200, 20);

  block1 = new Block(1000, 370, 30, 40);
  block2 = new Block(970, 410, 30, 40);
  block3 = new Block(1000, 410, 30, 40);
  block4 = new Block(1030, 410, 30, 40);
  block5 = new Block(940, 450, 30, 40);
  block6 = new Block(970, 450, 30, 40);
  block7 = new Block(1000, 450, 30, 40);
  block8 = new Block(1030, 450, 30, 40);
  block9 = new Block(1060, 450, 30, 40);

  shooter = new Shooter(350, 250, 50, 50);

  rope = new Rope(shooter.body, {x: 300, y: 450}); 
 
  Engine.run(engine);  

}

function draw() {
	background("black");
  Engine.update(engine);
  
  ground.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  shooter.display();

  rope.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();

  text("SCORE :  "+score, 750, 50);
}

function mouseDragged() {
  Body.setPosition(shooter.body, {x: mouseX, y: mouseY});
}

function mouseReleased() {
  rope.fly();
}

function keyPressed() {
  if(keyCode === 32) {
    Body.setPosition(shooter.body, {x: 350, y: 250});
    rope.attach(shooter.body);
  }
}


