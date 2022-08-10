const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;
var aviao,aviaoImg, bala,balaImg,fundo,fundoImg,moeda,moedaImg,inimigo,inimigoImg, fuel,fuelImg;
var gun;
function preload() {
  aviaoImg =  loadImage("aviao.png");
  balaImg = loadImage("bala.jpg");
  moedaImg =  loadImage("moeda.jpg");
  inimigoImg = loadImage("inimigo.png");
  fundoImg =  loadImage("fundo.jpg");
  fuelImg = loadImage("fuel.png");
  }
function setup(){
  createCanvas(800,1000)
  engine = Engine.create()
  world = engine.world;
  
  
  aviao = createSprite(400,800,40,40);
  aviao.addImage("aviao",aviaoImg);

}

function draw() {
background(fundo)
drawSprites();
}

