var aviao,aviaoImg, bala,balaImg,fundo,fundoImg,moeda,moedaImg,inimigo,inimigoImg, fuel,fuelImg;
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

  
  aviao = createSprite(400,800,40,40);
  aviao.addImage("aviao",aviaoImg);
  aviao.scale = 0.3
  fundo =  createSprite(400,100);
  //fundo =  createSprite(width/2,height/2);
  fundo.addImage("fundo",fundoImg)
  //fundo.scale =  3;
  fundo.size(400,400)

}

function draw() {
background("blue")
fundo.velocityY =  1;
if(fundo.y>300){
fundo.y = 270;
}
drawSprites();
}

