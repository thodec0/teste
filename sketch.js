const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var chao;
var fundoimg;
var torre;
var torreimg;
var canhaocorpo;
var angle;
var baladecanhao;
var matriz=[];
var BARCO;

function preload() {

 fundoimg=loadImage('./assets/background.gif');

torreimg=loadImage('./assets/tower.png');

}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  //adicionando unidade de medida ao angulo
  angleMode(DEGREES);
 var propriedadesdochao={

   isStatic:true

 }
 angle = 15;

var propriedadesdatorre={

  isStatic:true

}

torre=Bodies.rectangle(160,350,160,310,propriedadesdatorre);
World.add(world,torre);



 chao=Bodies.rectangle(0,height-1,width*2,10,propriedadesdochao);
 World.add(world,chao);



canhaocorpo=new canhao(180,110,130,100,angle)

BARCO=new barco (width-79,height-60,170,170,-80);

}

function draw() {
  background(fundoimg);
 
  Engine.update(engine);
  fill('black');
   rect(chao.position.x,chao.position.y,width*2,10);

   push ();

imageMode(CENTER);

image (torreimg,torre.position.x,torre.position.y,160,310);

   pop ();
  
   
canhaocorpo.show();
//velocidade do barco
Matter.Body.setVelocity(BARCO.body, { x: -0.9, y: 0 });

BARCO.show();
//length e  o nunmero de elementos dentro de uma matriz
for(var indice=0;indice<matriz.length;indice=indice+1){

mostrarbalas(matriz[indice],indice);

}

}

function keyReleased(){

if (keyCode==DOWN_ARROW){

matriz[matriz.length-1].shoot();


}

}
function keyPressed(){
if(keyCode==DOWN_ARROW){

  baladecanhao=new cannonball(canhaocorpo.x,canhaocorpo.y);
matriz.push(baladecanhao);

}



}
function mostrarbalas(matriz,indice){
if(matriz){
  matriz.show();
}

}