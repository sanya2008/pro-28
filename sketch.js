
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj,groundObject, launcherObject;
var mango1;
var world,boy;
var mango2
var mango3
var mango4
var mango5
var mango6
var mango7
var mango8
var mango9
var mango10
var stoneObj

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,40,34);
	mango2=new mango(920,150,34)
	mango3=new mango(950,230,35)
  mango4=new mango(1105,240,34)
	mango5=new mango(1200,220,34)
	mango6=new mango(1190,150,34)
	mango7=new mango(1020,240,34)
	mango8=new mango(1000,80,34)
	mango9=new mango(1000,150,35)
	mango10=new mango(1100,140,35)

  stoneObj=new stones(299,400,20)

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display()
  mango6.display()
  mango7.display()
  mango8.display()
  mango9.display()
  mango10.display()
  stoneObj.display()

  groundObject.display();
}
