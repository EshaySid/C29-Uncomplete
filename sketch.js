const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

//g=ground
var g;

//l-link
var l;

//b=new bridge
var b;

var leftWall;
var rightWall;

var jointPoint;

var stones=[];

function setup() {
  createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  g=new Base(600, 580, 1200, 20);

  leftWall=new Base(150,300,300,100);
  rightWall= new Base(1050,300,300,100);

  b =new Bridge(5,{x:600, y:50});

  //l =new Link(b.body,rightWall.x);

  for(var i=0; i<=8; i++){
    var x=random(width/2-200, width/2+300);
    var y=random(-10, 140);
    var stone=new Stone(x,y,80,80);
    stones.push(stone);
  }

}

function draw() {
  background(51);
  Engine.update(engine);
  
  g.Display();
  b.show();
  leftWall.Display();
  rightWall.Display();
}


