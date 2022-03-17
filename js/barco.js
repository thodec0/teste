class barco{

constructor(x,y,width,height,posicaodobarco){
this.x=x;
this.y=y;
this.width=width;
this.height=height;
this.posicaodobarco=posicaodobarco;
this.Barco=loadImage('./assets/unnamed.png');
this.body=Bodies.rectangle(this.x,this.y,this.width,this.height);
World.add(world,this.body);
}

show(){
push ();
imageMode (CENTER);
translate (this.x,this.y);
// rotate (angle);

image (this.Barco,0,this.posicaodobarco,this.width,this.height);
  

pop ();

}


}