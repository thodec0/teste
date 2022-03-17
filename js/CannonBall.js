class cannonball{
  constructor(x,y){

var options ={

  isStatic:true

}
this.MATRIZ=[];
this.raio=40;
this.body=Bodies.circle(x,y,this.raio,options)
this.boladecanhao=loadImage('./assets/cannonball.png');
World.add(world,this.body);
  }
shoot(){
var novoangulo=canhaocorpo.angle-28;
novoangulo=novoangulo*(3.14/180);
var velocidadevetorial=p5.Vector.fromAngle(novoangulo);
velocidadevetorial.mult(0.5);
Matter.Body.setStatic(this.body,false);

Matter.Body.setVelocity(this.body,{x:velocidadevetorial.x*(180/3.14),y:velocidadevetorial.y*(180/3.14)});

}
show(){
var posicao=this.body.position;

push ();
imageMode(CENTER);
image(this.boladecanhao,posicao.x,posicao.y,this.raio,this.raio);



pop ();

if(this.body.velocity.x>0&&this.body.position.x>300){

var posicao=[this.body.position.x,this.body.position.y];
this.MATRIZ.push(posicao);

}
for (var INDICE=0;INDICE<this.MATRIZ.length;INDICE=INDICE+1){

  image(this.boladecanhao,this.MATRIZ[INDICE][0] ,this.MATRIZ[INDICE][1],5,5);
}
}

}