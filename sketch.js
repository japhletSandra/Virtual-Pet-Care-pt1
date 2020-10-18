//Create variables here
var dog, happyDog;
var dogImg,happydogImg;
var foodS,foodStock;
var database;
function preload()
{
 dogImg=loadImage("sprits/Dog.png");
 happydogImg=loadImage("sprits/happydog.png")
}

function setup() {
  database=firebase.database();
	createCanvas(500,500);
  dog = createSprite(250,250);
  dog.scale=0.2
  dog.addImage(dogImg);
  foodStock=database.ref("food")
  foodStock.on("value",readStock);
}



function draw() {  
background(240);
 if (keyDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(happydogImg)
 }
  drawSprites();
  text("note: press UP_ARROW to feed drago milk!",150,350);
  textSize(250);
  fill("black");
}

function readStock(data){
  foodS=data.val()
}
function writeStock(x){
  if (x<=0){
    x=0
  }else{
    x=x-1
  }
  database.ref("/").update({
    food:x
  })
}
