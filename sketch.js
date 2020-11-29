var dog,dogSprite,dogHappy
var database
var foodS
var foodStock

function preload()
{
  dog = loadImage("images/dogImg.png");
  dogHappy = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
  dogSprite = createSprite(200,200,50,50);
  dogSprite.addImage("hungry", dog);
  dogSprite.addImage("happy", dogHappy);
  dogSprite.scale = 0.5;
  foodStock = database.ref('food');
  foodStock.on("value", readStock);
	createCanvas(500, 500);
  
}


function draw() {  
background(46,139,87);


if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dogSprite.changeImage("happy", dogHappy);
}
  drawSprites();
  //add styles here

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){

     if(x<=0){
       x=0
       
     }else{
       x = x-1;
     }

  database.ref('/').update({
       food:x
  })
}


